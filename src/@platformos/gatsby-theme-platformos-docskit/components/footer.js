import React from 'react';
import Logo from '@platformos/gatsby-theme-platformos-docskit/src/components/logo';

const Footer = ({ children }) => (
  <footer className="footer bg-base p-6 text-sm">
    <div className="footer__copyright container mx-auto">
      <Logo /><br />
      platformOS DocsKit &copy; {new Date().getFullYear()}<br />
      powered by <a href="https://platformos.com" target="_blank" rel="noopener noreferrer"><u>platformOS</u></a><br />
      built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer"><u>Gatsby</u></a>
    </div>
  </footer>
);

export default Footer;
