const db = require('../data/dbConfig.js')

module.exports = {
    find,
    getById,
    insert
};

function find(){
    return db('action');
}

function getById(id){
    return db('action')
        .where({ id })
        .first();
}

function insert(action) {
    return db('action')
        .insert(action)
        .then(ids => {
            return getById(ids[0]);
        })
}