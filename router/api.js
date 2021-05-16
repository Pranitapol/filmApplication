const express = require('express');
const router = express.Router();
var directors=require('../model/directorSchema');
var films=require('../model/filemSchema')
/*
router.get('/director',(req,res)=>{
    res.send({type:"get"})
})*/
//post the director data
router.post('/director',async(req,res)=>{
    try {
      const directorObj= new directors(req.body)
      await directorObj.save()
      res.status(200).json({message:directorObj})
        } catch (error) {
        res.status(400).json({message:error})
    }
})
router.get('/director', async (req, res) => {
    try {
        var directorObj = await directors.find();
        res.json(directorObj );
    } catch (err) {
        console.log(err);
    }
})
//get director data by name
router.get('/director/:directorName',async(req,res)=>{
    try {
        var directorObj=await directors.find({directorName:req.params.directorName});
        res.json(directorObj)
    } catch (error) {
        res.status(400).json({message:error})
    }
})

//update details on director name
router.patch('/director/:directorName',async(req,res)=>{
    try {
        var directorObj=await directors.findOne({directorName:req.params.directorName})
        directorObj.directorAwardCount=req.body.directorAwardCount;
        directorObj.directorAge=req.body.directorAge;
        const obj=await directorObj.save()
        res.status(200).json(obj)
        res.send(directorObj)
    } catch (error) {
        res.status(400).json({message:error})
    }
})
//post data for film 
router.post('/film',async(req,res)=>{
    try {
      const filmObj= new films(req.body)
      await filmObj.save()
      res.status(200).json({message:filmObj})
        } catch (error) {
        res.status(400).json({message:error})
    }
})

//delete a film by it's name
router.delete('/film/:filmName' ,  async(req , res )=>{
    films.deleteOne({filmName:req.params.filmName}).then((result)=>{
       res.status(200).json(result) 

    }).catch((err)=>{
        console.warn(err);
    })
  
    
})
router.get('/film', async (req, res) => {
    try {
        var filmObj = await films.find();
        res.json(filmObj );
    } catch (err) {
        console.log(err);
    }
})
router.get('/film/:filmName',async(req,res)=>{
    try {
        var filmObj=await films.find({filmName:req.params.filmName});
        res.json(filmObj)
    } catch (error) {
        res.status(400).json({message:error})
    }
})

module.exports = router;