const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    day: {
      type: Number,
      required: true
    },
    tag: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    batch: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
