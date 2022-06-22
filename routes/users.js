const express = require('express')
const { validationResult,check } = require('express-validator')
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
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.send('passed')
  },
)

module.exports = router
