const { Op } = require("sequelize");

const { City } = require("../models/index");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }

    async create(data){
        try{
            if(!Array.isArray(data)){
                const city = await City.create({name: data.name});
                return city;
            }

            const city = await City.bulkCreate(data, {returning: true});
            return city;
        } catch(error){
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    // async deleteCity(cityId){
    //     try{
    //         await City.destroy({
    //             where: {
    //                 id: cityId
    //             },
    //         });
    //         return true;
    //     } catch(error){
    //         console.log("Something went wrong in the repository layer.");
    //         throw {error};
    //     }
    // }

    // async updateCity(cityId, data) { // {name: "Prayagraj"}
    //     try {
    //         // The below approach also works but will not return updated object
    //         // if we are using Pg then returning: true can be used, else not
    //         // const city = await City.update(data, {
    //         //     where: {
    //         //         id: cityId
    //         //     },
    //         //     returning: true,
    //         //     plain: true 
    //         // });
    //         // for getting updated data in mysql we use the below approach
    //         const city = await City.findByPk(cityId);
    //         city.name = data.name;
    //         await city.save();
    //         return city;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer");
    //         throw {error};
    //     }
    // }

    // async getCity(cityId){
    //     try{
    //         const city = await City.findByPk(cityId);
    //         return city;
    //     } catch(error){
    //         console.log("Something went wrong in the repository layer.");
    //         throw {error};
    //     }
    // }

    async getAll(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};   
        }
    }

    async getAllAirports(cityId){
        try {
            const city = await City.findByPk(cityId);
            const airports = await city.getAirports();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }
}

module.exports = CityRepository;