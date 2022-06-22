const express = require('express')
const router = express.Router()
const { validationResult, check } = require('express-validator')
const User = require('../models/User')
const Contact = require('../models/Contact')

const auth = require('../middleware/auth')

// @route           GET api/lists
// @desc(ription)   get all users kpop-list
// @access          private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    })
    res.json(contacts)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('server error 500')
  }
})

// @route           Post api/lists
// @desc(ription)   add new kpop group
// @access          private
router.post(
  '/',
  [auth, [check('name', 'name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, name, phone, type } = req.body
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      })
      const contact = await newContact.save()
      res.json(contact)
    } catch (error) {
      console.log(error.message)
      res.status(500).send('server error 500')
    }
  },
)

// @route           PUT api/lists/:id
// @desc(ription)   update list
// @access          private
router.delete('/:id',auth,async(req, res) => {

    try {
        let contact = await Contact.findById(req.params.id)
        if (!contact) res.status(404).json({ msg: 'Contact Not Found' })
    
        //  make sure user owns contact
        if (contact.user.toString() !== req.user.id)
          return res.status(401).json({ msg: 'not authorized' })
    
          console.log(req.params.id)
     await Contact.findByIdAndRemove(req.params.id)
        res.json({msg:"contact removed"})
      } catch (error) {
    
        console.log(error.message)
        res.status(500).send('server error 500')
      }})

// @route           PUT api/lists/:id
// @desc(ription)   delete kpop group
// @access          private
router.put('/:id', auth, async (req, res) => {
  const { email, name, phone, type } = req.body
  //  build contact object
  const contactField = {}
  if (name) contactField.name
  if (email) contactField.email
  if (phone) contactField.phone
  if (type) contactField.type

  try {
    let contact = await Contact.findById(req.params.id)
    if (!contact) res.status(404).json({ msg: 'Contact Not Found' })

    //  make sure user owns contact
    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ msg: 'not authorized' })

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: contactField,
      },
      { new: true },
    )
    res.json(contact)
  } catch (error) {

    console.log(error.message)
    res.status(500).send('server error 500')
  }
})

module.exports = router
