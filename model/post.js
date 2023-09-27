import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    } 
})
export default mongoose.model('Post', PostSchema)