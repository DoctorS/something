const mongoose = require('./mongoose')
const Schema = mongoose.Schema
const schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  Param1: { type: Number, min: -1, max: 1, required: true },
  Param2: { type: Number, min: -1, max: 1, required: true },
  Param3: { type: Number, min: -1, max: 1, required: true },
  Param4: { type: Number, min: -1, max: 1, required: true },
  Param5: { type: Number, min: -1, max: 1, required: true },
  Param6: { type: Number, min: -1, max: 1, required: true },
  Param7: { type: Number, min: -1, max: 1, required: true },
  Param8: { type: Number, min: -1, max: 1, required: true },
  Param9: { type: Number, min: -1, max: 1, required: true },
  Param10: { type: Number, min: -1, max: 1, required: true },
  Param11: { type: Number, min: -1, max: 1, required: true },
  Param12: { type: Number, min: -1, max: 1, required: true },
  Param13: { type: Number, min: -1, max: 1, required: true },
  Param14: { type: Number, min: -1, max: 1, required: true },
  Param15: { type: Number, min: -1, max: 1, required: true },
  Param16: { type: Number, min: -1, max: 1, required: true },
  Param17: { type: Number, min: -1, max: 1, required: true },
  Param18: { type: Number, min: -1, max: 1, required: true },
  Param19: { type: Number, min: -1, max: 1, required: true },
  Param20: { type: Number, min: -1, max: 1, required: true },
})

exports.Entity = mongoose.model('Entity', schema)
