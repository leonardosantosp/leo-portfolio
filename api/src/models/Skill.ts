import mongoose from 'mongoose'

const { Schema } = mongoose

const skillSchema = new Schema({
  name: { type: String, required: true, unique: true },
  icon: { type: String, required: true }
})

export default mongoose.model('Skill', skillSchema)
