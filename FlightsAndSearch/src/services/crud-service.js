class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;   
        } catch (error) {
            console.log("Something went wrong inside Crud Service.");
            throw {error};
        }
    }

    async destroy(id){
        try {
            await this.repository.destroy(id);
            return true;   
        } catch (error) {
            console.log("Something went wrong inside Crud Service.");
            throw {error};
        }
    }

    async update(id, data){
        try {
            const response = await this.repository.update(id, data);
            return response;   
        } catch (error) {
            console.log("Something went wrong inside Crud Service.");
            throw {error};
        }
    }

    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;   
        } catch (error) {
            console.log("Something went wrong inside Crud Service.");
            throw {error};
        }
    }

    async getAll(){
        try {
            const response = await this.repository.findAll();
            return response;   
        } catch (error) {
            console.log("Something went wrong inside Crud Service.");
            throw {error};
        }
    }
}

module.exports = CrudService;