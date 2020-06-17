module.exports = (app) => {
    const mentors = require('../controllers/mentor.controller.js');

    app.get('/mentors', mentors.fetchAll);
    app.post('/mentors',mentors.create);
}