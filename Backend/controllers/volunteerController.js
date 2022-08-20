const Volunteers = require('../models/volunteerModel')
//const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

//get all volunteers

const getVolunteers = async (req, res) => {
    const volunteers = await Volunteers.find({}).sort({createdAt: -1})

    res.status(200).json(volunteers)
}

const getApproved = async(req, res) => {

    const volunteers = await Volunteers.find({approvalStatus: "Approved"}).sort({createdAt: -1})

    res.status(200).json(volunteers)

}

const getPending = async(req, res) => {

    const volunteers = await Volunteers.find({approvalStatus: "Pending"}).sort({createdAt: -1})

    res.status(200).json(volunteers)

}

const getDisapproved = async(req, res) => {

    const volunteers = await Volunteers.find({approvalStatus: "Disapproved"}).sort({createdAt: -1})

    res.status(200).json(volunteers)

}

const getMixed = async(req, res) => {

    const volunteers = await Volunteers.find({approvalStatus: "Approved", approvalStatus: "Pending"}).sort({createdAt: -1})

    res.status(200).json(volunteers)

}


//get a single volunteer
const getVolunteer = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'That volunteer does not exist'})
    }
    
    const volunteer = await Volunteers.findById(id)
    
    if(!volunteer){
        return res.status(404).json({error: 'That volunteer does not exist'})
    }

    res.status(200).json(volunteer)
}

//create new volunteer
const createVolunteer = async(req,res) => {
    const {username, password, firstName, lastName, email, streetAddress, city, state, zipCode, 
        phoneNumberHome, phoneNumberCell, phoneNumberWork, education, 
        emergencyContactName, emergencyContactPhone, emergencyContactEmail, 
        hasCopyOfID, hasCopyOfSSN, approvalStatus, availabilityTimes, currentLicenses, skills, preferredCenter} = req.body
    let emptyFields = []
    
    if(!username){
        emptyFields.push('username')
    }
    if(!password){
        emptyFields.push('password')
    }
    if(!firstName){
        emptyFields.push('firstName')
    }
    if(!lastName){
        emptyFields.push('lastName')
    }
    if(!email){
        emptyFields.push('email')
    }
    if(!streetAddress){
        emptyFields.push('streetAddress')
    }
    if(!city){
        emptyFields.push('city')
    }
    if(!state){
        emptyFields.push('state')
    }
    if(!zipCode){
        emptyFields.push('zipCode')
    }
    if(!phoneNumberCell){
        emptyFields.push('phoneNumberCell')
    }
    if(!education){
        emptyFields.push('education')
    }
    if(!emergencyContactName){
        emptyFields.push('emergencyContactName')
    }
    if(!emergencyContactPhone){
        emptyFields.push('emergencyContactPhone')
    }
    if(!emergencyContactEmail){
        emptyFields.push('emergencyContactEmail')
    }
    if(!hasCopyOfID){
        emptyFields.push('hasCopyOfID')
    }
    if(!hasCopyOfSSN){
        emptyFields.push('hasCopyOfSSN')
    }
    if(!approvalStatus){
        emptyFields.push('approvalStatus')
    }
    if(!availabilityTimes){
        emptyFields.push('availabilityTimes')
    }
    if(!currentLicenses){
        emptyFields.push('currentLicenses')
    }
    if(!skills){
        emptyFields.push('skills')
    }
    if(!preferredCenter){
        emptyFields.push('preferredCenter')
    }
    if(emptyFields.length>0){
        return res.status(400).json({ error: 'Make sure to fill in the required fields: ', emptyFields})
    }
    
    try{
        const volunteer = await Volunteers.create({ username, password, firstName, lastName, email, streetAddress, city, state, zipCode, 
            phoneNumberHome, phoneNumberCell, phoneNumberWork, education, emergencyContactName, emergencyContactPhone, 
            emergencyContactEmail, hasCopyOfID, hasCopyOfSSN, approvalStatus, availabilityTimes, currentLicenses, skills, preferredCenter })
        res.status(200).json(volunteer)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//delete volunteer
const deleteVolunteer = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'That volunteers does not exist'})
    }

    const volunteer = await Volunteers.findOneAndDelete({_id: id})

    if(!volunteer){
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(volunteer)
}

//update volunteer

const updateVolunteer = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'That volunteers does not exist'})
    }

    const volunteer = await Volunteers.findOneAndUpdate({_id: id}, {...req.body})

    if(!volunteer){
        return res.status(400).json({error: 'That volunteers does not exist'})
    }
    res.status(200).json(volunteer)
}

module.exports = {
    getVolunteer,
    getVolunteers,
    createVolunteer,
    deleteVolunteer,
    updateVolunteer
}