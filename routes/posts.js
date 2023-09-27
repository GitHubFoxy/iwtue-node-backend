import express from 'express'
import Post from '../model/post.js'
const router = express.Router()

// GET All posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  }  catch (error) {
    res.json({message: error})
  }
})
// POST submit post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        about: req.body.about,
    })

    try {
        const newPost = await post.save()
        res.json(newPost)
    } catch (error) {
        res.json({message: error})
    }
})
router.get('/:postId', async (req, res) => {
    try{
    const post = await Post.findById(req.params.postId)
    res.json(post)
    } catch (err) {
        res.json({message: err})
    }
})

export default router

