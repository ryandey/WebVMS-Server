const express = require('express')
const{
    getOpportunities,
    getOpportunity,
    createOpportunity,
    deleteOpportunity,
    updateOpportunity
} = require('../controllers/opportunityController')
const router = express.Router()

//get all opportunities
router.get('/', getOpportunities)

//get a single opportunity
router.get('/:id', getOpportunity)

//create a new opportunity
router.post('/', createOpportunity)

//delete an unlucky opportunity
router.delete('/:id', deleteOpportunity)

//update a opportunity
router.patch('/:id', updateOpportunity)

module.exports = router