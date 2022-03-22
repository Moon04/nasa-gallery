import React from "react";
import { Spinner } from "react-bootstrap";

import "./index.css";

export const Loader = () => (
  <div className="loader-overlay">
    <div className="overlay-wrapper">
      <div className="overlay-spinner">
        <Spinner animation="border" />
      </div>
    </div>
  </div>
);
