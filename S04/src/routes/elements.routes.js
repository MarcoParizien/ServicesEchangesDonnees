import express from 'express';
import HttpErrors from 'http-errors';
import httpStatus from 'http-status';

import ELEMENTS from "../data/elements.js";
import planets from '../data/planets.js';
const router = express.Router();


class ElementsRoutes {

    constructor() {
        router.get('/', this.getAll);
        router.post('/', this.post);
        router.get('/:symbol', this.getOne);
        router.delete('/:symbol', this.delete);

    }

    getAll(req, res, next) {
       res.status(httpStatus.OK).json(ELEMENTS);
    }

    getOne(req, res, next) {
        const symbolElement = req.params.symbol; //Symbole reçu en param

        const element = ELEMENTS.find(e => e.symbol == symbolElement);

        if(element)
        {
            //Élément trouvé
            res.status(httpStatus.OK).json(element);
        } else {
            return next(HttpError.NotFound(`L'élément ${symbolElement} n'existe pas`));
        }
    }

    post(req, res, next) {
        const newElement = req.body;

        const element = ELEMENTS.find(e => e.symbol == newElement.symbol);

        if(element)
        {
            //Doublons !! 
            return next(HttpError.Confilct(`L'élèment avec le symbole ${newElement.symbol} existe déjà`))
        }else {
            ELEMENTS.push(newElement);
            res.status(201).json(newElement);
        }
    }
    
    delete(req, res, next) {
        const index = ELEMENTS.findIndex(e => e.id == req.params.symbol);

        if(index === -1){
            return next(HttpError.NotFound(`L'élément avec le symbol ${req.params.symbol} n'existe pas`))
        } else {
            ELEMENTS.splice(index, 1);
            res.status(204).end(); // NO content
        }
    }
}

new ElementsRoutes();

export default router;