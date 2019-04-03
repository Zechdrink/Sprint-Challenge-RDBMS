const db = require('../data/dbConfig.js')

module.exports = {
    find,
    getById,
    insert,
    getProjectActions,
    get
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
function getProjectActions(projectID){
    return db('action')
        .join('project', 'project.id', 'action.project_id')
        .select('action.id', 'action.description', 'action.notes', 'action.completed')
        .where('action.project_id', projectID)
}

function get(id) {
    let query = db('project');
    if(id){
        query.where('project.id', id).first();

        const promises = [query, this.getProjectActions(id)];

        return Promise.all(promises).then(function(results) {
            let [project, actions] = results;
            project.actions = actions;

            return project;
        })
    }
}