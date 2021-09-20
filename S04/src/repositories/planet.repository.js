import Planet from "../models/planet.model.js";

class PlanetRepository {

    retrieveById(idPlanet) {
        return Planet.findById(idPlanet);
    }
    retrieveAll(filter) {

        const testFilter = {
            discoveredBy: 'Skadex',
            temperature: { $gt: 240 },
            "position.y": { $lte: 500 }
        }
        const testFilter2 = {
            $or: [{
                discoveredBy: 'Skadex',
                temperature: { $gt: 240 }
            }
            ]
        }
        //Where discoveredBy = Skadex AND temperature > 240 AND position.y <= 500
        return Planet.find(filter);
    }
}

export default new PlanetRepository();