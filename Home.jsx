import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Img from './assets/Images/profile_img.jpeg'
const Home = () => {
  return (
    <div className="d-flex">
    
      <div className="flex-grow-1 bg-light p-3">
       
        <div className="d-flex justify-content-between align-items-center mb-3">
          
          <div className="d-flex align-items-center text-secondary">
            <span>Workspace</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="mx-2 text-muted"
              size="sm"
            />
            <span>Folder 2</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="mx-2 text-muted"
              size="sm"
            />
            <span className="fw-bold text-dark">Spreadsheet 3 ....</span>
          </div>

     
          <div className="d-flex align-items-center">
          
            <div className="input-group me-3" style={{ maxWidth: "250px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search within sheet"
              />
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>

           
            <div className="d-flex align-items-center">
              <img
                src={Img}
                alt="Profile"
                className="rounded-circle" style={{width:"50px"}}
              />
              <span className="fw-small">John Doe</span>
            </div>
          </div>
        </div>

       
       
      </div>
    </div>
  );
};

export default Home;