import mongoose from 'mongoose'
const { Schema } = mongoose

const projectSchema = new Schema({
  title: { type: String, required: true },
  logo: { type: String, required: true },
  mockup: { type: String, required: true },
  repository: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  siteUrl: { type: String, required: true, unique: true },
  videoUrl: { type: String, required: true },
  stack: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Technology'
    }
  ]
})

export default mongoose.model('Project', projectSchema)
