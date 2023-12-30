const mongoose= require('mongoose')

const imgSchema= new mongoose.Schema({
Img:{
    public_id:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    }

}
})


module.exports= mongoose.model('Img', imgSchema)