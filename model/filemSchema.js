const mongoose=require('mongoose');
const filmSchema= new mongoose.Schema({
filmName:{
    type:String,
    require:true,
    unique:true
},
filmId:{
    type:Number,
    require:true
},
boxOfficeCollection:{
    type:Number,
    require:true
},
filmRating:{
    type:Number,
    require:true
}//,
//director:{
  //  type:Object,
    //require:true
//}
})

module.exports=mongoose.model('film',filmSchema)