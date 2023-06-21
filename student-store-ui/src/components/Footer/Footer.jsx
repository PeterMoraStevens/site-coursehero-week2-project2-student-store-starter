import React from "react";
import "./Footer.css";

export default function Footer({ footerLinks }) {
  return (
    <div className="footer-container">
      <div className="footer-categories">
        <ul>
        categories
        All Categories
        Clothing
        Food
        Accessories
        Tech
        </ul>
        {/* {footerLinks.forEach((footerLink) => (
          <FooterLink footerLink={footerLink}/>
        ))} */}
      </div>
      <div className="footer-categories">
        <ul>
        Company
        About Us
        Find a Store
        Terms
        Sitemap
        Careers
        </ul>
      </div>
      <div className="footer-categories">
        <ul>
        Support
        Contact Us
        Money Refund
        Order Status
        Shipping Info
        Open Dispute
        </ul>
      </div>
      <div className="footer-categories">
        <ul>
        Account
        Login
        Register
        Account Setting
        My Orders
        </ul>
      </div>
      <div className="footer-categories">
        <ul>
        Socials
        Facebook
        Twitter
        LinkedIn
        Instagram
        YouTube
        </ul>
      </div>
    </div>
  );
}

export function FooterLink({ footerLink }) {
  console.log(footerLink)
  return (
    <li>
      <span>{footerLink}</span>
    </li>
  );
}

export function FooterLinks({ footerLinks }) {
  return (
    <ul className="footer-links-container">
      
    </ul>
  );
}