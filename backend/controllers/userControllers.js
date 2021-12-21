const models =  require('../models');

const userController ={}

userController.createUser= async (req,res)=>{
    try{
        const newUser = await models.user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            signup_date:req.body.signup_date,
            interest:req.body.interest,
            location:req.body.location
        })

        res.json({newUser})
    }
    catch(err){
        res.json(err)
    }
}

module.exports = userController