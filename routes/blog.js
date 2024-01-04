const express = require('express')
const router = express.Router()

const { validate } = require('express-validation')
const { createBlog } = require('../validations/blog')

const {isAuth } = require('../middlewares/authentication')

const BLOG = require('../controllers/blog')

router.get('/show',isAuth(['Admin']),BLOG.showAll)
router.get('/:id',isAuth(['Admin','User']),BLOG.showByUSer)
router.post('/store',isAuth(['User']),validate(createBlog),BLOG.storeBlog)
router.delete('/:id',isAuth(['Admin','User']),BLOG.removeBlog)
router.put('/:id',isAuth(['Admin','User']),BLOG.editBlog)
module.exports = router