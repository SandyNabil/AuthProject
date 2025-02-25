const { Schema, model } = require("mongoose");
const todoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, required: true, default: false },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = model("Todo", todoSchema);