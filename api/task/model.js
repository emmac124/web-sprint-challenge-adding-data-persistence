// build your `Task` model here
const db = require("./../../data/dbConfig")

const getTasks = () => {
    return db("tasks")
}

const create = async (task) => {
    const [task_id] = await db("tasks").insert(task)
    return getTasks().where({task_id}).first()
}

module.exports = {
    getTasks,
    create
}
