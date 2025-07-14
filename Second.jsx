import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEyeSlash,
  faSort,
  faFilter,
  faTableCells,
  faFileImport,
  faFileExport,
  faShareAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const Second = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center bg-light p-2 border-bottom"
      style={{ width: "100%" }}
    >
      {/* Left Toolbar Items */}
      <div className="d-flex align-items-center gap-4">
        <div className="d-flex align-items-center">
          <span className="me-1 fw-bold">Toolbar</span>
          <FontAwesomeIcon icon={faChevronRight} size="sm" />
        </div>

        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faEyeSlash} className="me-1" />
          <span>Hide fields</span>
        </div>

        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faSort} className="me-1" />
          <span>Sort</span>
        </div>

        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faFilter} className="me-1" />
          <span>Filter</span>
        </div>

        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faTableCells} className="me-1" />
          <span>Cell view</span>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-secondary btn-sm">
          <FontAwesomeIcon icon={faFileImport} className="me-1" />
          Import
        </button>
        <button className="btn btn-outline-secondary btn-sm">
          <FontAwesomeIcon icon={faFileExport} className="me-1" />
          Export
        </button>
        <button className="btn btn-outline-secondary btn-sm">
          <FontAwesomeIcon icon={faShareAlt} className="me-1" />
          Share
        </button>
        <button className="btn btn-success btn-sm">
          <FontAwesomeIcon icon={faPlus} className="me-1" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Second;