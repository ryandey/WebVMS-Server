const Opportunities = require('../models/opportunityModel')
//const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

//get all opportunities

const getOpportunities = async (req, res) => {
    const opportunity = await Opportunities.find({}).sort({createdAt: -1})

    res.status(200).json(opportunities)
}


//get a single opportunity
const getOpportunity = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'That opportunity does not exist'})
    }
    
    const opportunity = await Opportunities.findById(id)
    
    if(!opportunity){
        return res.status(404).json({error: 'That opportunity does not exist'})
    }

    res.status(200).json(opportunity)
}

//create new opportunity
const createOpportunity = async(req,res) => {
    const {name, description} = req.body
    let emptyFields = []
    
    if(!name){
        emptyFields.push('name')
    }

    if(!description){
        emptyFields.push('description')
    }
   
    if(emptyFields.length>0){
        return res.status(400).json({ error: 'Make sure to fill in the required fields: ', emptyFields})
    }
    
    try{
        const opportunity = await Opportunities.create({name, description, streetAddress, city, state, zipCode, requiredSkills, date, time})
        res.status(200).json(opportunity)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete opportunity
const deleteOpportunity = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'That opportunity does not exist'})
    }

    const opportunity = await Opportunities.findOneAndDelete({_id: id})

    if(!opportunity){
        return res.status(400).json({error: 'No such opportunity'})
    }

    res.status(200).json(opportunity)
}

//update opportunity

const updateOpportunity = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'That opportunity does not exist'})
    }

    const opportunity = await Opportunities.findOneAndUpdate({_id: id}, {...req.body})

    if(!opportunity){
        return res.status(400).json({error: 'That opportunity does not exist'})
    }
    res.status(200).json(opportunity)
}

module.exports = {
    getOpportunity,
    getOpportunities,
    createOpportunity,
    deleteOpportunity,
    updateOpportunity
}