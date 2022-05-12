import { JobsStyled } from "../component/styles/JobsStyled";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Jobs = () => {
  return (
    <>
    <JobsStyled>
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
              <Link class="navbar-brand badge rounded-pill btn btn-outline-black fs-5" aria-current="page" to="/">Home</Link>
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
  
  <div class="container-fluid p-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card">
          <img
            src="../images/01.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 1</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/02.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 2</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/03.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 3</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/04.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 4</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/05.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 5</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <Link to="#" class="btn btn-dark"> Apply</Link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/06.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 6</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/02.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 7</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/01.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 8</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/05.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 9</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/06.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 10</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="../images/03.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Job 11</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button class="btn btn-dark">  Apply</button>
          </div>
        </div>
      </div>
    </div>
    </div>
      </JobsStyled>
    </>
  );
};

export default Jobs;
