import mongoose from 'mongoose'

const { Schema } = mongoose

const technologySchema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
  appIcon: { type: String, required: true }
})

export default mongoose.model('Technology', technologySchema, 'technologies')
