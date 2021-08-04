const express = require('express')
const router = express.Router()
const blogTemplateCopy = require('../models/backendmodels')

router.post('/Create', (request, response) =>{
    const blogcreate = new blogTemplateCopy({
        title:request.body.title,
        category:request.body.category,
        conclusion:request.body.conclusion,
        description:request.body.description
    })
    blogcreate.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router;