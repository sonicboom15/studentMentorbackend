const Mentor = require('../model/mentors.model.js');

exports.create = (req, res) => {
    if(!req.body.name){
        console.log(req.body);
        return res.status(400).send({
            message:"Invalid Parameters"
        })
    }

    const mentor = new Mentor({
        name:req.body.name,
    });

    mentor.save().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Error Occured Boi-oh"
        })
    })
};

exports.fetchAll = (req,res) =>{
    Mentor.find().then(mentor =>{
        res.send(mentor);
    }).catch(err=>{
        res.status(500).send({
            message: err.message||"Some Error"
        })
    })
}