const { Airplane } = require("../models/index");
const CrudRepository = require("./crud-repository");

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }

    // async createAirplane(data){
    //     try {
    //         const airplane = await Airplane.create({modelNumber: data.modelNumber, capacity: data.capacity});
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer while creating the airplane.");
    //         throw {error};
    //     }
    // }

    // async deleteAirplane(airplaneId){
    //     try {
    //         await Airplane.destroy({
    //             where: {
    //                 id: airplaneId
    //             }
    //         });
    //         return true;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer while deleting the airplane.");
    //         throw {error};
    //     }
    // }

    // async updateAirplane(airplaneId, data){
    //     try {
    //         const airplane = await Airplane.update(data, {
    //             where: {
    //                 id: airplaneId
    //             }
    //         });
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer while updating the airplane.");
    //         throw {error};
    //     }
    // }

    // async getAirplane(airplaneId){
    //     try {
    //         const airplane = await Airplane.findByPk(airplaneId);
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer while fetching the airplane.");
    //         throw {error};
    //     }
    // }
}

module.exports = AirplaneRepository;