import React from 'react';
import web from "../assests/images/Outlinedweb.png";
import email from "../assests/images/iconmark-email-unreadoutlined.svg";
import footerLogo from "../assests/images/image 8 (1).svg";
import locationIcon from "../assests/images/Frame 93.png";

const Footer = () => {
  return (
    <footer className="bg-[#3d6e4d] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        {/* Left Section */}
        <div className="space-y-5">
          <img src={footerLogo} alt="ESO Collaborative" className="w-32" />
          <p className="text-sm leading-relaxed">
            We are a collective of business professionals that bring values to
            your company with global scales experiences. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>

        {/* Middle Section */}
        <div className="space-y-5">
          <h2 className="font-bold text-lg">Get Involved</h2>
          <ul className="space-y-2 text-sm">
            <li>Enterprise Support Organizations</li>
            <li>Businesses</li>
            <li>Programmes</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-5">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <img src={locationIcon} alt="Location" className="w-6 h-6 mr-2 mt-1" />
              No. 2834 Water Carington Drive, Egbeda, Lome
            </li>
            <li className="flex items-start">
              <img src={email} alt="Email" className="w-6 h-6 mr-2 mt-1" />
              info@esonigerialpy.org
            </li>
            <li className="flex items-start">
              <img src={web} alt="Website" className="w-6 h-6 mr-2 mt-1" />
              www.esonigeria.ng
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white/20 mt-10 pt-5 text-center text-sm">
        <div className="container text-center">
          <span>&copy; 2024 All Rights Reserved. Powered by ESO Nigeria</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
