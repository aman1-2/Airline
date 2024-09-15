const { AirplaneRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class AirplaneService extends CrudService {
    constructor() {
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
    }

    // async createAirplane(data) {
    //     try {
    //         const airplane = await this.airplaneRepository.createAirplane(data);
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the service layer while creating the airplane.");
    //     }
    // };

    // async deleteAirplane(airplaneId) {
    //     try {
    //         const airplane = await this.airplaneRepository.deleteAirplane(airplaneId);
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the service layer while deleting the airplane.");
    //     }
    // };

    // async updateAirplane(airplaneId, data) {
    //     try {
    //         const airplane = await this.airplaneRepository.updateAirplane(airplaneId, data);
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the service layer while updating the airplane.");
    //     }
    // };

    // async getAirplane(airplaneId) {
    //     try {
    //         const airplane = await this.airplaneRepository.getAirplane(airplaneId);
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the service layer while fetching the airplane.");
    //     }
    // };
}

module.exports = AirplaneService;