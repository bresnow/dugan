import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul style={{marginLeft:'5%'}} className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>

      <li>
        <Link href="/values">
          <a>Core Values</a>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>

      {/* <li className="dropdown"> 
        <Link href="#">
          <>
            <a>Services</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="#">
              <a>Asset Management</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>FERS Training Courses </a>
            </Link>
          </li>
        </ul>
      </li> */}
      {/*   <li className="dropdown">
        <Link href="/news">
          <>
            <a>News</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
      {/* <li className="search-btn search-toggler">
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li> */}
    </ul>
  );
};

export default NavLinks;
