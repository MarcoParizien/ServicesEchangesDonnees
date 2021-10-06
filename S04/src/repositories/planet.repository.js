import Planet from "../models/planet.model.js";
import objectToDotNotation from "../libs/objecToDotNotation.sj";

const ZERO_KELVIN = -273.15;
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

    create(planet) {
        return Planet.create(planet);

    }

    transform(planet, transformOptions = {}) {
        if (transformOptions) {
            if (transformOptions.unit === 'c') {
                planet.temperature += ZERO_KELVIN;
                planet.temperature = parseFloat(planet.temperature.toFixed(2));
            }
        }

        planet.discoveryDate = dayjs(planet.discoveryDate).format('YYYY-MM-DD');

        planet.lightspeed = `${planet.position.x.toString(16)}@${planet.position.y.toString(16)}#${planet.position.x.toString(16)}`;

        

        observation.hex = {
            alpha:0,
            beta:0,
            gamma:0,
            delta:0,
        }

        delete planet.__v;

        return planet;
    }

    update(idPlanet, planetModifs) {
        const planetToDotNotation = objectToDotNotation(planetModifs);
        return Planet.findByIdAndUpdate(idPlanet, planetToDotNotation, {new:true});
    }

    delete(idPlanet) {
        return Planet.findByIdAndDelete(idPlanet);
    }

}

export default new PlanetRepository();