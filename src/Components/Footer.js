import React from "react";
const imagePath = process.env.PUBLIC_URL + "/assets/";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={`${imagePath}logo.svg`} alt="Little Lemon logo" />
        </div>
        <div>
          <p>
            <strong>Doormat Nav igation</strong>
          </p>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            <strong>Contact</strong>
          </p>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div>
          <p>
            <strong>Social Media Details</strong>
          </p>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
