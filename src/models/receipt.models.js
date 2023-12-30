const mongoose= require('mongoose')

const ReceiptSchema= mongoose.Schema({

    Orderdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    bookname:{
                type: mongoose.Schema.Types.ObjectId,
                ref: Books
    }   
},
{ 
    timestamps: true
    })

// export const Receipt= mongoose.model('Receipt', ReceiptSchema)

module.exports = Receipt= mongoose.model('Receipt',ReceiptSchema )