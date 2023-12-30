const mongoose= require('mongoose')

const UserSchema= new mongoose.Schema({

    userName:{
        type: String,
        required: true,
    }, 
    userEmail:{
        type: String,
        required: true
    },
    Number:{
        type: Number,
        required: true
    }
},
    
{ 
    timestamps: true
    }
 );

// export const User= mongoose.model("User", UserSchema)

module.exports = User= mongoose.model('User',UserSchema )