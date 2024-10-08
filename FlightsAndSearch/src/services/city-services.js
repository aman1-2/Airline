const { CityRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class CityService extends CrudService {
    constructor(){
        const cityRepository = new CityRepository();
        super(cityRepository);
        this.cityRepository = cityRepository;
    }

    // async createCity(data){
    //     try {
    //         const city = await this.cityRepository.createCity(data);
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong at Service layer.");
    //         throw {error};
    //     }
    // }

    // async deleteCity(cityId){
    //     try {
    //         const response = await this.cityRepository.deleteCity(cityId);
    //         return response;
    //     } catch (error) {
    //         console.log("Something went wrong at Service layer.");
    //         throw {error};
    //     }
    // }

    // async updateCity(cityId, data){
    //     try{
    //         const city = await this.cityRepository.updateCity(cityId, data);
    //         return city;
    //     } catch (error){
    //         console.log("Something went wrong at Service layer.");
    //         throw {error};
    //     }
    // }

    // async getCity(cityId){
    //     try {
    //         const city = await this.cityRepository.getCity(cityId);
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong at Service layer.");
    //         throw {error};
    //     }
    // }

    async getAll(filter){
        try {
            const cities = await this.cityRepository.getAll(filter);
            return cities;
        } catch (error) {
            console.log("Something went wrong at Service layer.");
            throw {error};
        }
    }

    async getAllAirports(cityId){
        try {
            const airports = await this.cityRepository.getAllAirports(cityId);
            return airports;
        } catch (error) {
            console.log("Something went wrong at Service layer.");
            throw {error};
        }
    }
}

module.exports = CityService;