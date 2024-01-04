const express = require('express')
const router = express.Router()

const { validate } = require('express-validation')
const { signup ,login} = require('../validations/user')

const USER = require('../controllers/user')



router.post('/signup',validate(signup),USER.signup)
router.post('/login',validate(login),USER.login)
module.exports = router