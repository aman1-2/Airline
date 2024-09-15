const { Op } = require("sequelize");

const { Airport } = require("../models/index");
const CrudRepository = require("./crud-repository")

class AirportRepository extends CrudRepository{

    constructor(){
        super(Airport);
    }

    async create(data){
        try {
            //Bulk Insert in the form of Array.
            if(Array.isArray(data)){
                const airports = await Airport.bulkCreate(data, {returning: true});
                return airports;
            }
            const airport = await Airport.create({
                name: data.name,
                address: data.address,
                cityId: data.cityId
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer while creating airport.");
            throw {error};
        }
    };

    // async deleteAirport(airportId){
    //     try {
    //         await Airport.destroy({
    //             where:{
    //                 id: airportId
    //             }
    //         });
    //         return true;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer while deleting airport.");
    //         throw {error};
    //     }
    // };

    // async updateAirport(airportId, data){
    //     try {
    //         const airport = Airport.update(data, {
    //             where: {
    //                 id: airportId
    //             }
    //         });
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer while updating airport.");
    //         throw {error};
    //     }
    // }

    // async getAirport(airportId){
    //     try {
    //         const response = await Airport.findByPk(airportId);
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer while fetching airport.");
    //         throw {error};
    //     }
    // }

    async getAll(filter){
        try {
            if(filter.name){
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                        
                    }
                });
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer while fetching all airports.");
            throw {error};
        }
    }
}

module.exports = AirportRepository;