import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"><span className="text-yellow-400 ml-1">⭐</span>
        Rate My Professor</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
