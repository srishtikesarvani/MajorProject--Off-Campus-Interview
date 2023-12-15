const express = require('express')
const Model = require('../models/feedbackModel')

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.json(result);
})
    .catch((err) => {
        console.log(err)
        res.status(500).json(err);
    })   
});

router.get('/getall', (req, res) => {
   Model.find({})
   .then((result)=>{
    res.json(result);

   }).catch((err)=>{
    res.status(500).json(err)
   })
})

router.put('/update/:id', (req, res)=>{
    // res.send('response from getbyid')y
    
    Model.findByIdAndUpdate(req.params.id , req.body, {new: true})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})
router.get('/getbyid/:id', (req, res) => {
   Model.findById(req.params.id)
   .then((result)=>{
    res.json(result)
   }).catch((err)=>{

    res.status(500).json(err)
   })
})
router.delete('/delete/:id', (req, res) => {
    // res.send('response from user delete')
    Model.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})
router.post('/authenticate', (req, res)=>{
    Model.findOne(req.body)
    .then((result) => {
       if(result) res.json(result)
       else res.status(400).json({message : 'login failed'})
    }).catch((err) => {
      console.log(err);  
      res.status(500).json(err)
    });
})
module.exports = router;
