module.exports = (app) => {
    const students = require('../controllers/student.controller.js');

    app.get('/students', students.fetchAll);
    app.post('/students',students.create);
    app.put('/students/:studentID',students.assign);
    app.get('/getStudents', students.findbyMentor);
}