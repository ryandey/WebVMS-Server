const express = require('express')

const router = express.Router()

//get all volunteers
router.get('/', (req, res) => {

    res.json({mssg: 'hello'})
})

//get a single volunteer
router.get('/:id', (req, res) => {

    res.json({mssg: 'ding'})
})

//create a new volunteer
router.post('/', (req, res) => {

    res.json({mssg: 'postPost'})
})

//delete an unlucky volunteer
router.post('/:id', (req, res) => {

    res.json({mssg: 'goodbye'})
})

//update an opportunity
router.patch('/:id', (req, res) => {

    res.json({mssg: 'changeChange'})
})

module.exports = router