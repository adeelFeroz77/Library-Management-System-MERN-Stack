const Book= require('../models/liabrary.models')


const GetoneBook= async(req,res)=>{
try{
    const id= req.params.id

    const getsingleBook= await Book.findById(id)
        res.status(200).send(getsingleBook)
    }
    catch{
            res.status(400).send({msg:'Failed to get this Book'})
    }
    } 

    module.exports= GetoneBook