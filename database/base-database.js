const fs = require('fs');
const flatted = require('flatted');

class BaseDatabase {
    constructor(model) {
        this.model = model;
    }

    save(objects) {
        this.model.insertMany(objects)
    }

    load() {
        return this.model.find()
    }

    async insert(object) {
        const instance = await this.model.create(object)
        return instance
    }

    async removeBy(property, value) {
        return this.model.deleteOne({ [property]: value })
    }

    async update(id, object) {
        return this.model.findByIdAndUpdate(id, object)
    }

    async find(id) {
        return this.model.findById(id)
    }
    
    async findBy(property, value) {
        return this.model.find({ [property]: value})
    }
}
module.exports = BaseDatabase;