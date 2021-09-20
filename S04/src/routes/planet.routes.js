import express from "express";
import HttpError from "http-errors";
import httpStatus from "http-status";
import HttpStatus from "http-status";


import PLANETS from "../data/planets.js";

import planetRepository from "../repositories/planet.repository.js";


const router = express.Router();

class PlanetsRoutes {
    constructor() {
        router.get("/", this.getAll);
        router.get("/:idPlanet", this.getOne);
        router.post("/", this.post);
        router.delete("/:idPlanet", this.delete);
        router.patch('/:idPlanet', this.patch);
        router.put('/:idPlanet', this.put);
    }

    patch(red, res, next) {
        return next(HttpError.NotImplemented());
    }

    put(red, res, next) {
        return next(HttpError.MethodNotAllowed());
    }


    delete(req, res, next) {
        const index = PLANETS.findIndex(p => p.id == req.params.idPlanet);

        if (index === -1) {
            return next(HttpError.NotFound(`La planète avec l'identifiant ${req.params.id} n'existe pas`))
        } else {
            PLANETS.splice(index, 1);
            res.status(204).end(); // NO content
        }
    }

    post(req, res, next) {
        const newPlanet = req.body;

        const planet = PLANETS.find(p => p.id == newPlanet.id);

        if (planet) {
            //Doublons detected ! 
            return next(HttpError.Conflict(`La planète avec l'identifiant ${newPlanet.id} existe déjà`));
        }

    }

    async getAll(req, res, next) {
        
        const filter = {};
        if(req.query.explorer){
            filter.discoveredBy = req.query.explorer;
        }


        try{
            const planets = await planetRepository.retrieveAll(filter);
            res.status(200).json(planets);
        }catch(err){
            return next(err);
        }
        
    }

   async getOne(req, res, next) {
        const idPlanet = req.params.idPlanet;

        try {
            const planet = await planetRepository.retrieveById(idPlanet);

            if (planet) {
                //1. J'ai une planète
                res.status(HttpStatus.OK).json(planet);

            } else {
                //2. J'ai pas de planète
                return next(HttpError.NotFound(`La planète ${idPlanet} n'existe pas`));
            }
        } catch (err) {
            return next(err);
        }

    }
}

new PlanetsRoutes();
export default router;