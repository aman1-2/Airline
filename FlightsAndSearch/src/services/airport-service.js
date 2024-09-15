const { AirportRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
        this.airportRepository = airportRepository
    }

    async createAirport(data){
        try {
            const airport = await this.airportRepository.create(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong inside the service layer while creating airport");
            throw {error};
        }
    }

    // async deleteAirport(airportId){
    //     try {
    //         const airport = await this.airportRepository.deleteAirport(airportId);
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong inside the service layer while deleting airport");
    //         throw {error};
    //     }
    // }

    // async updateAirport(airportId ,data){
    //     try {
    //         const airport = await this.airportRepository.updateAirport(airportId, data);
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong inside the service layer while updating airport");
    //         throw {error};
    //     }
    // }

    // async getAirport(airportId){
    //     try {
    //         const airport = await this.airportRepository.getAirport(airportId);
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong inside the service layer while fetching airport");
    //         throw {error};
    //     }
    // }

    async getAllAirports(filter){
        try {
            const airports = await this.airportRepository.getAll(filter);
            return airports;
        } catch (error) {
            console.log("Something went wrong inside the service layer while fetching all airports");
            throw {error};
        }
    }
}

module.exports = AirportService;