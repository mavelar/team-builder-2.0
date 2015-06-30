var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	//Model father
	var model={};

    // Teams Schema
    Teams = new Schema({
        name: String,
        teststruc:{
            list:[],
            team1:[],
            team2:[],
            team3:[]
        }
    });

    model.Teams ={
        'schema': mongoose.model('teams', Teams),
        'name': 'teams'
    };

    // Exports all Schemas
    module.exports = model;
    