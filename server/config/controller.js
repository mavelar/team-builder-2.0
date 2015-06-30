var mongoose = require('mongoose');
    model = require('./model'),
    Schema = mongoose.Schema;

var controller = function(app) {
    var db = mongoose.connect('mongodb://localhost/teambuilder');

    //get teams by name
    app.get('/getTeams/:lookup', function(req, res){
        if(!!req.params.lookup){
            mongoose.model(model.Teams.name).find({name: { $regex: '.*'+req.params.lookup+'.*', $options: 'i' }}, function(err, lookup) {
                res.json(lookup);
            });
        }else{
             res.status(404).sendFile( app.locals.root_path + '/views/404/index.html');
        }
    });

    //save teams by name
    app.post('/saveTeams', function(req, res){
         var team = new model.Teams.schema({
            name: req.body.name,
            teststruc:{
                list: req.body.list,
                team1: req.body.team1,
                team2: req.body.team2,
                team3: req.body.team3
            }
        });
         mongoose.model(model.Teams.name).find({name: { $regex: '.*'+req.body.name+'.*', $options: 'i' }}).remove(function(err){
            if (err) 
                console.log(err);
            else
                console.log('yes');
         });
         team.save(function (err, data) {
            if (err) 
                console.log(err);
            else 
                console.log('Saved : ', data );
        });
        res.json(team);
    });
};

module.exports = controller;