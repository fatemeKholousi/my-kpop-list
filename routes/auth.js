const bcrypt = require('bcryptjs/dist/bcrypt')
const express = require('express')
const { check,validationResult } = require('express-validator')
const router = express.Router()
const User=require("../models/User")
const jwt = require('jsonwebtoken')
const config=require("config")
const auth=require("../middleware/auth")

// @route           GET api/users
// @desc(ription)   Get logged in user
// @access          Private
router.get('/', auth,async (req, res) => {
try {
    const user=await User.findById(req.user.id).select('-password');
    res.json(user)
} catch (error) {
    console.log(error)
    res.status(500).send("server error")
}
})

// @route           POST api/users
// @desc(ription)   Auth user and get token
// @access          Private
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', ' Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })
      if (!user) return res.status(400).json({ msg: 'Invalid Credentials' })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' })

      const payload = {
        user: {
          id: user._id,
        },
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600,
        },
        (error, token) => {
          if (error) {
            throw error
          }
          res.json({ token })
        },
      )
    } catch (error) {
      console.log(error.message)
    //   res.status(500).send('server error')
    }
  },
)

module.exports = router
