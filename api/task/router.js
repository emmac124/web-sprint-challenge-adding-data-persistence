// build your `/api/tasks` router here
// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

const express = require('express')
const Tasks = require("./model")

const router = express.Router()

router.get("/", (req,res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err.message)
        })
})

router.post("/", (req,res) => {
    Tasks.create(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err.message)
        })
})

module.exports = router