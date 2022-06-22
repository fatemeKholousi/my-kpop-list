const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config=require("config")
const { validationResult, check } = require('express-validator')
const router = express.Router()
const User = require('../models/User')

// @route           POST api/users
// @desc(ription)   Register a user
// @access          public
router.post(
  '/',
  [
    check('name', 'Please enter name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a valid password with 6 or more charachters',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({ msg: 'User already exists' })
      }
      user = new User({
        name,
        email,
        password,
      })

      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      await user.save()


      const payload={
          user:{
              id:user.id
          }
      }

      jwt.sign(payload,config.get("jwtSecret"),{
          expiresIn:3600
      },(error,token)=>{
          if(error){
              throw error
          }
          res.json({token})
      })

   
    } catch (error) {
      console.log(error.message)
      res.status(500).send('server error')
    }
  },
)

module.exports = router
