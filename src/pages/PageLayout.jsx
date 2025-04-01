import React from 'react';
import { Link } from 'react-router-dom';
import './PageLayout.css';

function PageLayout({ title, children }) {
  return (
    <div className="page-layout">
      <header>
        <img src="/logo_straight.png" alt="Logo" className="logo" />
        <nav>
          <Link to="/main">Main</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <h1>{title}</h1>
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;