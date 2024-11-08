use anchor_lang::prelude::*;
use crate::errors::TwitterError;
use crate::states::*;

pub fn initialize_tweet(
    ctx: Context<InitializeTweet>,
    topic: String,
    content: String,
) -> Result<()> {
    let initialized_tweet = &mut ctx.accounts.tweet;

    // -------------------------------------------------------------------------------------------
    // Ensure the topic length is within the allowed limit
    // -------------------------------------------------------------------------------------------
    require!(
        topic.as_bytes().len() <= TOPIC_LENGTH,
        TwitterError::TopicTooLong
    );

    // -------------------------------------------------------------------------------------------
    // Ensure the content length is within the allowed limit
    // -------------------------------------------------------------------------------------------
    require!(
        content.as_bytes().len() <= CONTENT_LENGTH,
        TwitterError::ContentTooLong
    );

    // -------------------------------------------------------------------------------------------
    // Copy the topic and content into fixed-size byte arrays
    // -------------------------------------------------------------------------------------------
    let mut topic_data = [0u8; TOPIC_LENGTH];
    topic_data[..topic.as_bytes().len()].copy_from_slice(topic.as_bytes());
    initialized_tweet.topic = topic_data;

    let mut content_data = [0u8; CONTENT_LENGTH];
    content_data[..content.as_bytes().len()].copy_from_slice(content.as_bytes());
    initialized_tweet.content = content_data;

    // -------------------------------------------------------------------------------------------
    // Update the remaining fields in the Tweet account
    // -------------------------------------------------------------------------------------------
    initialized_tweet.topic_length = topic.as_bytes().len() as u8;
    initialized_tweet.tweet_author = *ctx.accounts.tweet_authority.key;
    initialized_tweet.likes = 0;
    initialized_tweet.dislikes = 0;

    // Bump for PDA initialization
    initialized_tweet.bump = ctx.bumps.tweet;

    Ok(())
}

#[derive(Accounts)]
#[instruction(topic: String)]
pub struct InitializeTweet<'info> {
    #[account(mut)]
    pub tweet_authority: Signer<'info>,

    #[account(
        init,
        payer = tweet_authority,
        space = 8 + Tweet::LEN,
        seeds = [
            topic.as_bytes(),
            TWEET_SEED.as_bytes(),
            tweet_authority.key().as_ref(),
        ],
        bump
    )]
    pub tweet: Account<'info, Tweet>,

    pub system_program: Program<'info, System>,
}
