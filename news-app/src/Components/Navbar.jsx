import React from 'react';

const Navbar = ({category,cntry}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" ><span className="badge text-bg-secondary text-light  p-2">शुभ समाचार</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select News Country
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item"onClick={()=>{cntry(`us`)}}>US(United_State)</a></li>
                  <li><a className="dropdown-item" onClick={()=>{cntry(`gb`)}}>GB(United_Kingdom)</a></li>
                  <li><a className="dropdown-item" onClick={()=>{cntry(`ca`)}}>CA(Canada)</a></li>
                  <li><a className="dropdown-item" onClick={()=>{cntry(`nz`)}}>NZ(NewZealand)</a></li>
                  <li><a className="dropdown-item" onClick={()=>{cntry(`ng`)}}>UA(Ukraine)</a></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select News Category
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={()=>{category(`general`)}}>General</a></li>
                  <li><a className="dropdown-item" onClick={()=>{category(`technology`)}}>Technology</a></li>
                  <li><a className="dropdown-item" onClick={()=>{category(`entertainment`)}}>Entertainment</a></li>
                  <li><a className="dropdown-item" onClick={()=>{category(`health`)}}>Health</a></li>
                  <li><a className="dropdown-item" onClick={()=>{category(`sports`)}}>Sports</a></li>
                  {/* Add more categories as needed */}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
