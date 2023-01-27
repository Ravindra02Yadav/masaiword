const express = require('express');
const UserRouter = express.Router();


UserRouter.post("/", async (req, res) => {
    const { level, name , score } = req.body
    try {
       const data =  await userDetailModal.create({ level, name  , score})
        res.send({
            message: 'User Successfully added',
            user_id : data._id,
            status: true
        })


    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: 'Something went wrong',
            status: false
        })
    }
})

UserRouter.patch('/:id' , async(req , res) => {
    const {score} = req.body
    const {id } = req.params

    try {

        await userDetailModal.findByIdAndUpdate({_id : id} , {score})

        res.send({
            message : "Successfully "
        })
        
    } catch (error) {
        console.log(error)
    }

})
UserRouter.get("/", async (req, res) => {
    try {

        const userDetailData = await userDetailModal.find()

        res.send(userDetailData)

    } catch (error) {
        console.log(error)
        res.status(404).send({
            message: 'Something went wrong ',
            status: false
        })
    }
})



module.exports = { UserRouter };