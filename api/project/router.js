// build your `/api/projects` router here

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

const express = require('express')
const Projects = require("./model")

const router = express.Router()

router.get("/", (req,res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err.message)
        })
})

router.post("/", (req,res) => {
    Projects.create(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err.message)
        })
})

module.exports = router