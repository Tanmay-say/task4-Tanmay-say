/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/twitter.json`.
 */
export type Twitter = {
  "address": "F6NKeaoPbchYnbcJZ5YSAqfMcHuP7GLExTuDK3qmgtgW",
  "metadata": {
    "name": "twitter",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "commentRemove",
      "discriminator": [
        10,
        190,
        215,
        145,
        65,
        59,
        112,
        197
      ],
      "accounts": [
        {
          "name": "commentAuthor",
          "writable": true,
          "signer": true
        },
        {
          "name": "comment",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "commentTweet",
      "discriminator": [
        26,
        45,
        20,
        239,
        43,
        253,
        168,
        37
      ],
      "accounts": [
        {
          "name": "commentAuthor",
          "writable": true,
          "signer": true
        },
        {
          "name": "comment",
          "writable": true
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "tweet.topic [.. tweet.topic_length as usize]",
                "account": "tweet"
              },
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "tweet.tweet_author",
                "account": "tweet"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "commentContent",
          "type": "string"
        }
      ]
    },
    {
      "name": "dislikeTweet",
      "discriminator": [
        40,
        221,
        179,
        49,
        162,
        224,
        64,
        97
      ],
      "accounts": [
        {
          "name": "reactionAuthor",
          "writable": true,
          "signer": true
        },
        {
          "name": "tweetReaction",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  82,
                  69,
                  65,
                  67,
                  84,
                  73,
                  79,
                  78,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "reactionAuthor"
              },
              {
                "kind": "account",
                "path": "tweet"
              }
            ]
          }
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "tweet.topic [.. tweet.topic_length as usize]",
                "account": "tweet"
              },
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "tweet.tweet_author",
                "account": "tweet"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "tweetAuthority",
          "writable": true,
          "signer": true
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "topic"
              },
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "tweetAuthority"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "topic",
          "type": "string"
        },
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "likeTweet",
      "discriminator": [
        248,
        27,
        137,
        254,
        228,
        130,
        141,
        149
      ],
      "accounts": [
        {
          "name": "reactionAuthor",
          "writable": true,
          "signer": true
        },
        {
          "name": "tweetReaction",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  82,
                  69,
                  65,
                  67,
                  84,
                  73,
                  79,
                  78,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "reactionAuthor"
              },
              {
                "kind": "account",
                "path": "tweet"
              }
            ]
          }
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "tweet.topic [.. tweet.topic_length as usize]",
                "account": "tweet"
              },
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "tweet.tweet_author",
                "account": "tweet"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "reactionRemove",
      "discriminator": [
        119,
        25,
        175,
        136,
        240,
        235,
        230,
        164
      ],
      "accounts": [
        {
          "name": "reactionAuthor",
          "writable": true,
          "signer": true
        },
        {
          "name": "tweetReaction",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  82,
                  69,
                  65,
                  67,
                  84,
                  73,
                  79,
                  78,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "reactionAuthor"
              },
              {
                "kind": "account",
                "path": "tweet"
              }
            ]
          }
        },
        {
          "name": "tweet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "tweet.topic [.. tweet.topic_length as usize]",
                "account": "tweet"
              },
              {
                "kind": "const",
                "value": [
                  84,
                  87,
                  69,
                  69,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "tweet.tweet_author",
                "account": "tweet"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "comment",
      "discriminator": [
        150,
        135,
        96,
        244,
        55,
        199,
        50,
        65
      ]
    },
    {
      "name": "reaction",
      "discriminator": [
        226,
        61,
        100,
        191,
        223,
        221,
        142,
        139
      ]
    },
    {
      "name": "tweet",
      "discriminator": [
        229,
        13,
        110,
        58,
        118,
        6,
        20,
        79
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "topicTooLong",
      "msg": "Cannot initialize, topic too long"
    },
    {
      "code": 6001,
      "name": "contentTooLong",
      "msg": "Cannot initialize, content too long"
    },
    {
      "code": 6002,
      "name": "maxLikesReached",
      "msg": "Maximum number of Likes Reached"
    },
    {
      "code": 6003,
      "name": "maxDislikesReached",
      "msg": "Maximum number of Dislikes Reached"
    },
    {
      "code": 6004,
      "name": "minLikesReached",
      "msg": "Minimum number of Likes Reached"
    },
    {
      "code": 6005,
      "name": "minDislikesReached",
      "msg": "Minimum number of Dislikes Reached"
    },
    {
      "code": 6006,
      "name": "commentTooLong",
      "msg": "Comment too Long"
    }
  ],
  "types": [
    {
      "name": "comment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commentAuthor",
            "type": "pubkey"
          },
          {
            "name": "parentTweet",
            "type": "pubkey"
          },
          {
            "name": "content",
            "type": {
              "array": [
                "u8",
                500
              ]
            }
          },
          {
            "name": "contentLength",
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reaction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reactionAuthor",
            "type": "pubkey"
          },
          {
            "name": "parentTweet",
            "type": "pubkey"
          },
          {
            "name": "reaction",
            "type": {
              "defined": {
                "name": "reactionType"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reactionType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "like"
          },
          {
            "name": "dislike"
          }
        ]
      }
    },
    {
      "name": "tweet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tweetAuthor",
            "type": "pubkey"
          },
          {
            "name": "topic",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "topicLength",
            "type": "u8"
          },
          {
            "name": "content",
            "type": {
              "array": [
                "u8",
                500
              ]
            }
          },
          {
            "name": "likes",
            "type": "u64"
          },
          {
            "name": "dislikes",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
