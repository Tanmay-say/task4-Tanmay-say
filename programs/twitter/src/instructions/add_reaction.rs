use anchor_lang::prelude::*;
use crate::errors::TwitterError;
use crate::states::*;

pub fn add_reaction(ctx: Context<AddReactionContext>, reaction: ReactionType) -> Result<()> {
    let tweet = &mut ctx.accounts.tweet;
    let tweet_reaction = &mut ctx.accounts.tweet_reaction;

    // -------------------------------------------------------------------------------------------
    // Handle reaction type (like or dislike) and update the corresponding like or dislike count
    // for the tweet. Ensure proper error handling for overflow/underflow.
    // -------------------------------------------------------------------------------------------
    match reaction {
        ReactionType::Like => {
            tweet.likes = tweet.likes.checked_add(1).ok_or(TwitterError::MaxLikesReached)?;
        }
        ReactionType::Dislike => {
            tweet.dislikes = tweet.dislikes.checked_add(1).ok_or(TwitterError::MaxDislikesReached)?;
        }
    }

    // -------------------------------------------------------------------------------------------
    // Set the reaction type for the tweet_reaction account.
    // -------------------------------------------------------------------------------------------
    tweet_reaction.reaction = reaction;

    // -------------------------------------------------------------------------------------------
    // Update the remaining fields for the tweet_reaction Account.
    // -------------------------------------------------------------------------------------------
    tweet_reaction.reaction_author = *ctx.accounts.reaction_author.key;
    tweet_reaction.parent_tweet = *tweet.to_account_info().key;
    tweet_reaction.bump = ctx.bumps.tweet_reaction;

    Ok(())
}

#[derive(Accounts)]
pub struct AddReactionContext<'info> {
    #[account(mut)]
    pub reaction_author: Signer<'info>,

    #[account(
        init,
        payer = reaction_author,
        space = 8 + Reaction::LEN,
        seeds = [
            TWEET_REACTION_SEED.as_bytes(),
            reaction_author.key().as_ref(),
            tweet.key().as_ref(),
        ],
        bump
    )]
    pub tweet_reaction: Account<'info, Reaction>,

    // -------------------------------------------------------------------------------------------
    // Check the tweet account for the correct PDA with appropriate seeds and bump.
    // -------------------------------------------------------------------------------------------
    #[account(
        mut,
        seeds = [
            tweet.topic[..tweet.topic_length as usize].as_ref(),
            TWEET_SEED.as_bytes(),
            tweet.tweet_author.key().as_ref(),
        ],
        bump = tweet.bump
    )]
    pub tweet: Account<'info, Tweet>,

    pub system_program: Program<'info, System>,
}
