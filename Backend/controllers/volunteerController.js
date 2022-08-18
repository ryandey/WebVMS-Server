const Volunteers = require('../models/volunteerModel')
//const { default: mongoose } = require('mongoose')
const Mongoose = require('mongoose')

//get all volunteers

const getVolunteers = async (req, res) => {
    const volunteers = await Volunteers.find({}).sort({createdAt: -1})

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
    const {username, password, firstName, lastName, email, streetAddress, city, state, zipCode, phoneNumberHome, phoneNumberCell, phoneNumberWork, education, emergencyContactName, emergencyContactPhone, emergencyContactEmail, hasCopyOfID, hasCopyOfSSN, approvalStatus} = req.body
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
    if(emptyFields.length>0){
        return res.status(400).json({ error: 'Make sure to fill in the required fields: ', emptyFields})
    }
    

    try{
        const volunteer = await Volunteers.create({ username, password, firstName, lastName, email, streetAddress, city, state, zipCode, phoneNumberHome, phoneNumberCell, phoneNumberWork, education, emergencyContactName, emergencyContactPhone, emergencyContactEmail, hasCopyOfID, hasCopyOfSSN, approvalStatus })
        res.status(200).json(volunteer)
    } catch{
        res.status(400).json({ error: 'didnt work' })
    }
}

// const createVolunteer = async(req,res) => {
//     const { username } = req.body
//     let emptyFields = []
//     if(!username){
//         emptyFields.push('username')
//     }
   
//     try{
//         const volunteer = await Volunteers.create({ username })
//         res.status(200).json(volunteer)
//     } catch{
//         res.status(400).json({ error: 'didnt work' })
//     }
//}
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