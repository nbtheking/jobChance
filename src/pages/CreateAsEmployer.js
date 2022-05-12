import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateAsEmployerStyled } from "../component/styles/CreateAsEmployerStyled"

const CreateAsEmployer = () => {
    return (
        <CreateAsEmployerStyled>
            <div id="root">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <div class="container">

    
<div class="row">
  <div class="col">
    

    <h1 class="h1">Create Employer Account</h1>
    <h4 class="h4">Complete The Form</h4>
  </div>
  <div class="col2">
      
    <div><Link to="/company" class="btn btn-dark"> Register</Link></div>
    <form >

      <div class="mb-3">
        <input type="text" aria-label="Last name" class="form-control" placeholder=" Company name"/>

      </div>

      <div class="mb-3">
        <input type="text" aria-label="Last name" class="form-control" placeholder="Responsible person"/>

      </div>
      
      <div class="mb-3">
        <input type="tel" aria-label="Mobile" class="form-control" placeholder="Mobile"/>
      </div>
      <div>
        <label for="inputexparianc" class="col-form-label">Country</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Egypt</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="mb-3">
        <input type="text" aria-label="Last name" class="form-control" placeholder=" State"/>

      </div>
      <div class="mb-3">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Email address"/>

      </div>
     
      <div class="mb-3">
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>

      </div>
      
     
      


    </form>


  </div>
</div>
</div>
     </CreateAsEmployerStyled>
    )
}

export default CreateAsEmployer