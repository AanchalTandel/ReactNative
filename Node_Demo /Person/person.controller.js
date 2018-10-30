const Person = require('./person.model');
const mongoose = require('mongoose');

function create(req,res,next){
    let person = new Person(req.body);
    person.save()
        .then((savedPerson) => {
            res.json(savedPerson);
        })
        .catch(e => next(e));
}

function list(req, res, next) {
    Person.list()
        .then(services => res.json(services))
        .catch(e => next(e));
}

function remove(req,res,next){
    //let person = new Person(req.username);
    Person.remove({ username: req.username})
        .then((deletedPerson) => {res.json(deletedPerson);})
        .catch(e => next(e));
}


module.exports = { create, list, remove };
