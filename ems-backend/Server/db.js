const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ems')

const employee = mongoose.model('employee',{

    id:String,
    empname:String,
    age:Number,
    title:String,
    position:String,
    salary:String 

})

module.exports={
    employee
}