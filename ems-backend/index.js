const express = require('express')

const cors = require('cors')

const logic = require('./Server/logic')

const server = express()

server.use(cors.apply({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log('EMS server started on 8000');
})

//get all employees data api
server.get('/getEmployees',(req,res)=>{
    logic.allEmployee().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// to add new employee
server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empname,req.body.age,req.body.title,req.body.position,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})

// to delete an employee
server.delete('/deleteEmployee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})

// to get an employee
server.get('/updateEmployees/:id',(req,res)=>{
    logic.fetchEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})

// to update an employee details
server.post('/updatingEmployees',(req,res)=>{
    logic.updateEmployee(req.body.id,req.body.empname,req.body.age,req.body.title,req.body.position,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)  
    })
})