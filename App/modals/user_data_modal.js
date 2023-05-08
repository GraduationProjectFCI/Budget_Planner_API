const mongoose = require("mongoose");

const UserDataScheme = new mongoose.Schema({
  user_id: mongoose.Types.ObjectId,
  spent: Number,
  remaining: Number,
  total: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserData", UserDataScheme);
