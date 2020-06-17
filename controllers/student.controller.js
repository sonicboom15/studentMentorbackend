const Student = require('../model/students.model.js');

exports.create = (req, res) => {
    if(!req.body.name){
        console.log(req.body);
        return res.status(400).send({
            message:"Invalid Parameters"
        })
    }

    const student = new Student({
        name:req.body.name,
        mentor:"",
        isMentorPresent:false
    });

    student.save().then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Error Occured Boi-oh"
        })
    })
};

exports.findbyMentor = (req,res) =>{
    if(!req.body.mentor){
        console.log(req.body);
        return res.status(400).send({
            message:"Invalid Parameters"
        })
    }
    Student.find().then(students =>{
        res.send(students.filter(student=> (student.mentor == req.body.mentor) &&(student.isMentorPresent == true)));
    }).catch(err=>{
        res.status(500).send({
            message: err.message||"Some Error"
        })
    })
}

exports.assign = (req, res) => {
    if(!req.body.mentor){
        return res.status(400).send({
            message: "Mentor name cannot be empty"
        })
    }

    Student.findByIdAndUpdate(req.params.studentID,{
        mentor: req.body.mentor,
        isMentorPresent: true
    },{new:true})
    .then(student =>{
        if(!student){
            return res.status(404).send({
                message: "Student not found"
            });
        }
        res.send(student);
    }).catch(err =>{
        if(err.kind == 'ObjectId'){
            return res.status(404).send({
                message: "Student not found"
            });
        }
        return res.status(500).send({
            message: "Error finding Student"
        })
    })
}

exports.fetchAll = (req,res) =>{
    Student.find().then(students =>{
        res.send(students);
    }).catch(err=>{
        res.status(500).send({
            message: err.message||"Some Error"
        })
    })
}

