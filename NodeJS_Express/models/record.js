var mongoose = require("mongoose");
var crypto = require("crypto");

var schemaRecord = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    recorde: {
      type: Number,
      required: true,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

schemaRecorde.pre("save", function (next) {
  if (!this.token) {
    this.token = crypto.randomBytes(64).toString("hex");
    next(null);
  }
  next(null);
});

module.exports = mongoose.model("Record", schemaRecord);
