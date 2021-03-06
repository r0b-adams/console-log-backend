const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WalkthroughSchema = new Schema({

    title: String,
    content: String,
    link: String,

    user_id:{
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "user ID is required"
    },

    game_id: {
      type:Number,
      required: "game ID is required"
    },
    gameName: {
      type: String,
      required: "game name is required"
    },
    gameImgLink: {
      type: String,
    },
    ratings: [
      {
        type: Number,
        min:1,
        max:5
      }
    ]
  },
  // rename mongoose timestamps
  { timestamps: { createdAt: 'created',
                  updatedAt: 'updated' }
  }
);

const Walkthrough = mongoose.model("Walkthrough", WalkthroughSchema);

module.exports = Walkthrough;
