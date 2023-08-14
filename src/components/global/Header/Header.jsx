import { Icon } from "@iconify/react";
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ title, extend }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`NavTop-header ${
          extend ? "pb-nav " : "header-h"
        }`}>
        <button
          className='iconEllipse'
          onClick={() => navigate(-1)}>
          <Icon
            icon='material-symbols:arrow-back'
            color='#0c3ead'
            height={"24px"}
            width={"24px"}
          />
        </button>
        <h6 className='DetailsNavTopText'>{title}</h6>
      </div>
    </>
  );
}

export default Header;
