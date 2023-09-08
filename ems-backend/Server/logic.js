const db = require('./db')

// get all the records of the employee
const allEmployee=()=>{
    return db.employee.find().then((result)=>{
        if(result){
            return {
                statusCode:200,
                employees:result 
            }
        }else{
            return {
                statusCode:401,
                message:"No employees found"
            }
        }
    })
}

// to add employees to the list 
const addEmployee=(id,empname,age,title,position,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Employee already exists"
            }
        }else{
            const newEmployee = new db.employee({id,empname,age,title,position,salary})
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee added successfully"
            }
        }
    })
}

// to delete an employee
const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((response)=>{
        return{
            statusCode:200,
            message:"Employee deleted successfully"
        }
    })
}

// to fetch particular employee
const fetchEmployee=(id)=>{
    return db.employee.findOne({id}).then((result)=>{
        return{
            statusCode:200,
            employee:result 
        }
    })
}

// update the details of an employee
const updateEmployee = (id, empname, age, title, position, salary) => {
    return db.employee.findOne({ id }).then((result) => {
        if (result) {
            result.id = id,
                result.empname = empname,
                result.age = age,
                result.title = title,
                result.position = position,
                result.salary = salary
            // to update the values in db
            result.save()
            // to send response to client
            return {
                statusCode: 200,
                message: "Employee data updated"
            }
        }else{
            return {
                statusCode:401,
                message:"No data found"
            }
        }
    })
}

module.exports={
    allEmployee,
    addEmployee,
    deleteEmployee,
    fetchEmployee,
    updateEmployee
}