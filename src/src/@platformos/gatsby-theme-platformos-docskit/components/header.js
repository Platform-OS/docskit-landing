import * as React from 'react';
import { Link } from 'gatsby';
import Logo from '@platformos/gatsby-theme-platformos-docskit/src/components/logo';

const Header = ({ siteTitle, isMobileNavOpen, toggleMobileNav, navigation }) => {

  return (
    <header className='fixed md:static w-full z-50 top-0 left-0 h-16 md:h-20 bg-panel text-normal flex items-center justify-between px-6 shadow-card'>
      <nav aria-label="Skip links" className="absolute left-0 top-0">
        <ul>
          <li>
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black p-2 rounded z-50"
            >
              Skip to content
            </a>
          </li>
          <li>
            <a
              href="#sidebar"
              className="sr-only focus:not-sr-only focus:absolute focus:top-10 focus:left-2 bg-white text-black p-2 rounded z-50"
            >
              Skip to sidebar
            </a>
          </li>
        </ul>
      </nav>
      <Link to="/"><Logo /></Link>
      <button type="button" className="md:hidden text-graphic" aria-label="Open navigation" onClick={toggleMobileNav}>
        {!isMobileNavOpen ? (<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" className="h-6 w-6 stroke-current">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>):

        (<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
          <path d="M0.75 24.248L23.25 1.74805" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.25 24.248L0.75 1.74805" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>)}

      </button>
      <nav className="hidden md:block">
        <ul className='flex items-center'>
          {navigation.slice(1).map((item) => (
            <li key={item.slug} className='ml-6'>
              <Link
                to={item.slug}
                className="hover:text-interactive-text"
                activeClassName="text-interactive-text font-bold"
              >{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
