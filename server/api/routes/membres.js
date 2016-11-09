import express from 'express';
import Todo from '../models/membre.js';

let router = express.Router();

module.exports = (app) => {

    var membre = new Membre();

    router.get('/', membre.findAll);

    router.get('/:id', membre.findById);

    router.post('/', membre.create);

    router.put('/:id', membre.update);

    router.delete('/:id', membre.delete);

    app.use('/membres', router);

}
