import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeeStyled } from "../component/styles/EmployeeStyled"
const Employee = () => {
    return (
        <EmployeeStyled>
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
            <li class="nav-item">
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black fs-5" aria-current="page" to="/UpdateEmployeeData">Update</Link>
            </li>
            <li class="nav-item">
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black fs-5" aria-current="page" to="/">Log out</Link>
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
  <div class="container-fluid ">
  <div class="card  ">
  <img src="../images/15.jpg" class="card-img-top" alt="..."/> 
  <div class="card-body">
  <h4 class="card-text">Name</h4>
        <h4 class="card-text"><img src="https://img.icons8.com/material-outlined/24/000000/send-mass-email.png"/> Email</h4>
        <h4 class="card-text"><img src="https://img.icons8.com/material-rounded/24/000000/cell-phone.png"/> Phone</h4>
        <h4 class="card-text"><img src="https://img.icons8.com/material-rounded/24/000000/marker.png"/>City</h4>
        <Link to="#"  ><i className='fab fa-facebook-f'></i></Link>
        <Link to="#"><i class="fab fa-google"></i></Link>
        <Link to="#"><i class="fab fa-twitter"></i></Link>
        <Link to="#"><i class="fab fa-youtube"></i></Link>
  </div>
  </div>
  <form>
      <div class="mb-3 mt-3">
        <label for="Recommend"><h4>Recommend:</h4></label>
        <textarea class="form-control" placeholder="Put your recommend" rows="5" id="Recommend" name="text"></textarea>
        <button type="submit" class=" btn btn-primary">Submit</button>
      </div>
    </form>
    <form>
      <div class="mb-3 mt-3">
      <label for="Recommend"><h4>comments:</h4></label>
        <input type="text" class="form-control2"  rows="5" id="Recommend" name="text"/>
       
      </div>
    </form>
    <div class="card-silf  ">
     <h4 class="h4">About  </h4> 
    
      <hr class="hr"></hr>
      <h4 class="h4" >Skils :</h4><br></br>
      
      <h4 class="h4" >Courses :</h4><br></br>
     
      <h4 class="h4" >Bio : <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione distinctio laudantium aliquid natus adipisci commodi molestiae magni. Illo perspiciatis neque aliquid? Dignissimos corrupti neque, deserunt dolore quis reiciendis? Ab?</p></h4><br></br>
     

     
    </div>
  </div>
     </EmployeeStyled>
    )
}

export default Employee