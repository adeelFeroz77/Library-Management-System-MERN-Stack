
const mongoose= require('mongoose')

const AvaliblitySchema= new mongoose.Schema({

    Avaliblity:{
        enum: ["Avalible" , "NotAvalible"]
    },
    // default: "notavalible"
})

module.exports= Avaliblity= mongoose.model('Avaliblity', AvaliblitySchema)