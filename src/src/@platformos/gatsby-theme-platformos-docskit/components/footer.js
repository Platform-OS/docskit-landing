import React from 'react';
import Logo from '@platformos/gatsby-theme-platformos-docskit/src/components/logo';
import './footer.css';
import { Link } from 'gatsby';

const Footer = ({ children }) => (
  <footer className="footer bg-base p-6 text-sm">
    <div className="footer__content container mx-auto">
      <a href='/' className='footer__logo'><Logo /></a>
      <span>platformOS DocsKit &copy; {new Date().getFullYear()}</span>
      <span>built with DocsKit</span>
      <span>powered by <a href="https://platformos.com" className='p-2 md:p-0' target="_blank" rel="noopener noreferrer"><u>platformOS</u></a></span>
      <Link to="/license/" className='pr-2 py-2 md:p-0'><u>License</u></Link>
    </div>
  </footer>
);

export default Footer;
