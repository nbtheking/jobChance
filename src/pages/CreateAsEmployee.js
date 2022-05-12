import { Link ,naLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from 'axios';
import { CreateAsEmployeeStyled } from "../component/styles/CreateAsEmployeeStyled"

const CreateAsEmployee = () => {
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [phone,setPhone]= useState('')
  const [jobTitle,setJobTitle]= useState('')
  const [password,setPassword]= useState('')
  const [dateOfBirth,setDateOfBirth]= useState('')
  const [gender,setGender]= useState('')
  const [natonality,setNationality]= useState('')
  const [country,setCountry]= useState('')
  const [city,setCity]= useState('')
  const [skills,setSkills]= useState('')
  const [courses,setCourses]= useState('')
  const [workExperience,setWorkExperience]= useState('')
  const [governorate,setGovrnorate]= useState('')
  

   
  const createEmployee=(e)=>{
    e.preventDefault();
    const data={name,natonality,email,phone,jobTitle,password,dateOfBirth,gender,natonality,country,city,skills,courses,workExperience};
    try {
      axios.get("/register",data)
    } catch (error) {
      console.log(error)
    }
   
  }
    return (
      <>
      <CreateAsEmployeeStyled>
      <div id="root">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
      <div class="container-fluid">
        <Link class="navbar-brand  fs-5" to="/">JobChance</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/createasemployee" class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">sign up as employee</Link>
              
            </li>
            <li class="nav-item dropdown">
              <Link to="/createasemployer" class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">sign up as employer</Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" aria-current="page" to="/jobs">Jobs</Link>
            </li>
          </ul>
          <form class="d-flex" >
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
            <div className="container">
            <div className="row">
            <div className="child1 container">
        <h1 class="h1">Create Employee Account</h1>
        <h4 class="h4">Complete The Form</h4>
                
            </div>   
            <div className="child2">

            <form onSubmit={createEmployee}>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)}/>

          </div>


          <div class="mb-3">
              <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>

          </div>
          <div class="mb-3">
            <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} aria-label="Mobile" class="form-control" placeholder="Mobile"/>
          </div>
          <div class="mb-3">
            <input type="text" aria-label="Job title" value={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} class="form-control" placeholder="Job title"/>

          </div>
          <div class="mb-3">
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/>

          </div>
          <div class="a">
            <label for="inputexparianc" class="col-form-label">Date of Birth</label>
            <input type="text" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} aria-label="Last name" class="form-control" placeholder="DD/MM/YYYY"/>

          </div>
          <div class="aa">
            <div><label for="inputexparianc" class="col-form-label">gender</label></div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" value={gender} onChange={(e)=>setGender(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" onChange={(e)=>setGender(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio2" value={gender}/>
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
          </div>
          <div>
            <label for="inputexparianc" class="col-form-label">Natonality</label>
            <select class="form-select" value={natonality} onChange={(e)=>setNationality(e.target.value)}  aria-label="Default select example">
              <option selected>Egypt</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
            <label for="inputexparianc" class="col-form-label">Country</label>
            <select class="form-select" value={country} onChange={(e)=>setCountry(e.target.value)} aria-label="Default select example">
              <option selected>Egypet</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          
          <div class="mb-3">
            <input type="text" aria-label="Last name" value={governorate}  onChange={(e)=>setGovrnorate(e.target.value)} class="form-control" placeholder="Governorate"/>

          </div>

          <div class="a">
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} aria-label="Last name" class="form-control" placeholder="City"/>

          </div>
          <div class="b">
            <input type="text" value={skills} onChange={(e)=>setSkills(e.target.value)} aria-label="Last name" class="form-control" placeholder="Skills"/>

          </div>
          <div class="b">
            <input type="text" aria-label="Last name" class="form-control" value={courses} onChange={(e)=>setCourses(e.target.value)} placeholder="Courses"/>

          </div>

          <div class="mb-3">
            <label for="inputexparianc" class="col-form-label">Work Experience:</label>
            <select class="form-select" value={workExperience} onChange={(e)=>setWorkExperience(e.target.value)} aria-label="Default select example">
              <option value="exparianc">select</option>
              <option value="exparianc">none</option>
              <option value="exparianc">1</option>
              <option value="exparianc">2</option>
              <option value="exparianc">3</option>
              <option value="exparianc">4</option>
              <option value="exparianc">5</option>
              <option value="exparianc">6</option>
              <option value="exparianc">7</option>
              <option value="exparianc">8</option>
              <option value="exparianc">9</option>
              <option value="exparianc">10</option>
            </select>
          </div>
         <div><Link  to="/Employee" class="btn btn-dark"> Register</Link></div>
        </form>
            </div>
            </div>
            </div>
            </div>
    </CreateAsEmployeeStyled>
    </>
     
    )
}

export default CreateAsEmployee