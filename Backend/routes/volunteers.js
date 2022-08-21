const express = require('express')
const{
    getVolunteers,
    getVolunteer,
    getApproved,
    getPending,
    getDisapproved,
    getMixed,
    createVolunteer,
    deleteVolunteer,
    updateVolunteer
} = require('../controllers/volunteerController')

const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

router.use(requireAuth)

//get all volunteers
router.get('/', getVolunteers)

//get all approved volunteers
router.get('/approved', getApproved)

//get all pending volunteers
router.get('/pending', getPending)

//get all disapproved volunteers
router.get('/disapproved', getDisapproved)

//get all pending/approved volunteers
router.get('/approvedOrPending', getMixed)


//get a single volunteer
router.get('/:id', getVolunteer)

//create a new volunteer
router.post('/', createVolunteer)

//delete an unlucky volunteer
router.delete('/:id', deleteVolunteer)

//update a volunteer
router.patch('/:id', updateVolunteer)

module.exports = router