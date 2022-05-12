import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CompanyStyled } from '../component/styles/CompanyStyled';
const Company = () => {
    return (
        <CompanyStyled>
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
              <Link to="/createasemployee" class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">sign up  as employee</Link>
              
            </li>
            <li class="nav-item dropdown">
              <Link to="/createasemployer" class="navbar-brand badge rounded-pill btn btn-outline-black  fs-5">sign up  as employer</Link>
              

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
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black fs-5" aria-current="page" to="/UpdateCompanyData">Update</Link>
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
      <img src="../images/13.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">

        <h4 class="card-text">Company_Name</h4>
        <h4 class="card-text"><img src="https://img.icons8.com/material-outlined/24/000000/send-mass-email.png"/> Email</h4>
        <h4 class="card-text">Company_Address</h4>
        

        <Link to="#" className='link'><img src="https://img.icons8.com/ios-filled/50/000000/facebook-circled--v3.png" className='img'/></Link>
        <Link to="#"><img src="https://img.icons8.com/color/50/000000/twitter--v2.png" className='img'/></Link>
        <Link to="#"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" className='img'/></Link>
        <Link to ="#"><img src="https://img.icons8.com/color/48/000000/whatsapp--v6.png" className='img'/></Link>
       



      </div>
    </div>
    <form>
        <div class="container">
           <h4><img src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-job-human-resource-itim2101-lineal-itim2101.png"/> Jobs :</h4>

            <Link class="btn btn-outline-dark"  to="/AddJob"  ><img src="https://img.icons8.com/material-rounded/24/000000/plus-math.png"/> Add_Job</Link>
           
         
          
          </div>
    </form>
    
    <div class="card-silf  ">
 
        
      <h4 class="h4" >Bio : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur perspiciatis sed explicabo suscipit! Vero accusamus non aperiam eius, et minus fugit magnam? Consequatur dolorem fuga, doloremque dolor debitis quam.</p></h4>
     

     
    </div>
  </div>

  
          </CompanyStyled>
    )
}
export default Company