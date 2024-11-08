use anchor_lang::prelude::*;
use crate::states::*;

pub fn remove_comment(ctx: Context<RemoveCommentContext>) -> Result<()> {
    // Since we are using the `close` attribute, the comment account will be closed,
    // and any rent will be refunded to the `comment_author`.
    Ok(())
}

#[derive(Accounts)]
pub struct RemoveCommentContext<'info> {
    #[account(mut)]
    pub comment_author: Signer<'info>,
    
    #[account(
        mut,
        close = comment_author, // Closes the comment account and refunds rent to the author.
        seeds = [
            COMMENT_SEED.as_bytes(),
            comment_author.key().as_ref(),
            { anchor_lang::solana_program::hash::hash(comment.content[..comment.content_length as usize].as_ref()).to_bytes().as_ref() },
            comment.parent_tweet.key().as_ref(),
        ],
        bump = comment.bump
    )]
    pub comment: Account<'info, Comment>,
}
