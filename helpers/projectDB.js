const db = require('../data/dbConfig.js')

module.exports = {
    find,
    getById,
    insert
  };

function find() {
    return db('project');
}


function getById(id){
    return db('project')
        .where({ id })
        .first();
}

function insert(project) {
    return db('project')
        .insert(project)
        .then(ids => {
            return getById(ids[0]);
        })
}