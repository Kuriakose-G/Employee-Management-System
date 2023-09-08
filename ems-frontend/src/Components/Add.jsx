import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import {
  MDBFooter,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {

  const location = useNavigate()

  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [title,setTitle]=useState('')
  const [position,setPosition]=useState('')
  const [salary,setSalary]=useState('')

  const AddEmployee=async(e)=>{
    const body = {id,empname,age,title,position,salary}
    console.log(body);
    const result = await axios.post('http://localhost:8000/addEmployee',body)
    console.log(id,empname,age,title,position,salary);
    location('/')//redirected to home page
  }


  return (
    <>
      {/* Navbar */}
      <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light'>
            <i className='fa-solid fa-user-group me-2 text-light'></i>
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      {/* Main Content */}
      <div className="container">
      <h1 className='text-center mt-5 mx-5 text-primary'>Add Employee Details</h1>
      </div>
      <div className="container">
        {/* From */}
        <MDBInput onChange={(e)=>setId(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Id' />
        <MDBInput onChange={(e)=>setEmpname(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Name' />
        <MDBInput onChange={(e)=>setAge(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Age' />
        <MDBInput onChange={(e)=>setTitle(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Title' />
        <MDBInput onChange={(e)=>setPosition(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Position' />
        <MDBInput onChange={(e)=>setSalary(e.target.value)} wrapperClass='mb-4' id='form9Example1' label='Salary' />
        <MDBBtn type='submit' onClick={(e)=>AddEmployee(e)} className='mb-4' block>
              Add Employee
            </MDBBtn>
      </div>

      {/* Footer */}
      <MDBFooter className='text-center text-white bg-primary'>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1 p-2'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1 p-2'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1 p-2'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1 p-2'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1 p-2'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-light m-1 p-2'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-light' href=''>
          employmanagementsystem.com
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Add