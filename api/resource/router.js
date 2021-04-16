// build your `/api/resources` router here

// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

const express = require('express')
const Resources = require("./model")

const router = express.Router()

router.get("/", (req,res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err.message)
        })
})

router.post("/", (req,res) => {
    Resources.create(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err.message)
        })
})

module.exports = router