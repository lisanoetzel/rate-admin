//Required dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cors = require('cors');
// const surveyRoute = express.Router();
const passport = require("passport");

const users = require('./routes/api/users');
// const PORT = 4000;

const app = express();

// let ratemyadministrator = require('./ratemyadministrator.model');

//Bodyparser middleware
app.use(
    bodyParser.urlencoded ({
        extended: false
    })
);
app.use (bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(
        db,
        {useNewUrlParser: true}
    )
    .then(() => console.log('Mongo rate-admin DB successfully connected'))
    .catch(err => console.log(err));

//Passport middleware
    app.use(passport.initialize());

// Passport config
    
    require("./config/passport") (passport);

//Routes
    app.use("/api/users", users);

//Heroku Port
    const port = process.env.PORT || 5000; 

    app.listen(port, () => console.log(`Server is operating on port ${port} !`));

// app.use(cors());
// app.use(bodyParser.json());

// app.listen(PORT, function(){
//     console.log("Server is running on Port: " + PORT);
// }), 

// mongoose.connect('mongodb://127.0.0.1:27017/ratemyadministrator', { useNewUrlParser: true });
// var connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })

// surveyRoute.route('/survey').get(function(req, res) {
//     ratemyadministrator.find(function(err, ratemyadministrator) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(ratemyadministrator);
//         }
//     });
// });

// surveyRoute.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     ratemyadministrator.findById(id, function(err, ratemyadministrator) {
//         res.json(ratemyadministrator);
//     });
// });

// surveyRoute.route('/update/:id').post(function(req, res) {
//     ratemyadministrator.findById(req.params.id, function(err, ratemyadministrator) {
//         if (!ratemyadministrator)
//             res.status(404).send("data is not found");
//         else
//             ratemyadministrator.survey_name = req.body.survey_name;
//             ratemyadministrator.survey_title = req.body.survey_title;
//             ratemyadministrator.survey_institution = req.body.survey_institution;
//             ratemyadministrator.survey_term = req.body.survey_term;
//             ratemyadministrator.survey_q1 = req.body.survey_q1;
//             ratemyadministrator.survey_q2 = req.body.survey_q2;
//             ratemyadministrator.survey_q3 = req.body.survey_q3;

//             ratemyadministrator.save().then(ratemyadministrator => {
//                 res.json('ratemyadministrator updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// surveyRoute.route('/add').post(function(req, res) {
//     let ratemyadministrator = new ratemyadministrator(req.body);
//     ratemyadministrator.save()
//         .then(ratemyadministrator => {
//             res.status(200).json({'ratemyadministrator': 'ratemyadministrator added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new ratemyadministrator failed');
//         });
// });

// app.use('/ratemyadministrator', ratemyadministrator);

// app.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });