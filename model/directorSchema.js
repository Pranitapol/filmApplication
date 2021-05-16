const mongoose=require('mongoose');

const directorSchema=new mongoose.Schema({
directorName:{
    type:String,
    require:true,
    unique:true
},
directorAge:{
    type:Number,
    require:true
},
directorGender:{
    type:String,
    require:true
},
directorAwardCount:{
    type:Number,
    require:true
},



})

module.exports=mongoose.model('director',directorSchema)