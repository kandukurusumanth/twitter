class Crudrepo {
    constructor(document){

        this.document=document
    }
    async create(data){
        try {
            const response = await this.document.create(data);
            return response
        } catch (error) {
            throw error
        }

    }
    async getAll(data){
        try {
            const response = await this.document.find({})
            return response
        } catch (error) {
            throw error
        }
    }
    async getbyid(id){
        try {
            const response = await this.document.findById(id);
            return response
        } catch (error) {
            throw error
        }
    }
    async destory(data){
        try {
            const response = await this.document.deleteMany(data);
            return response
        } catch (error) {
            throw error
        }
    }
    async update(data){
        try {
            const  response = await this.document.updateMany(data);
            return response
        } catch (error) {
            throw error
            
        }
    }
}
module.exports =Crudrepo