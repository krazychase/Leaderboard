const { ObjectId } = require("bson")
var mongoose = require("mongoose")

var Schema = mongoose.Schema

var StatsSchema = new Schema({
    user_id: { type: ObjectId, required: true },
    name: { type: String, required: true, max: 30 },
    score: { type: Number, required: true }
})

// Export model
module.exports = mongoose.model("Stats", StatsSchema, "stats")
