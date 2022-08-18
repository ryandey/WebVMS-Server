const express = require('express')
const{
    getVolunteers,
    getVolunteer,
    createVolunteer,
    deleteVolunteer,
    updateVolunteer
} = require('../controllers/volunteerController')
const router = express.Router()

//get all volunteers
router.get('/', getVolunteers)

//get a single volunteer
router.get('/:id', getVolunteer)

//create a new volunteer
router.post('/', createVolunteer)

//delete an unlucky volunteer
router.delete('/:id', deleteVolunteer)

//update a volunteer
router.patch('/:id', updateVolunteer)

module.exports = router