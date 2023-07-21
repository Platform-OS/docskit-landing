import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ children, slug = '', title = '', level = 0 }) => {
  const hasChildren = children && children.length > 0;
  const textClass = level > 0 ? `pl-${2+(level*2)}` : 'font-bold text-prominent py-2'; // 'pl-2 pl-4 pl-6'
  const listClass = level > 0 ? 'border-l border-divider pl-4' : '';
  return (
    <li>
      {title !== '' && (
        <Link
          to={slug}
          activeClassName="text-interactive-text border-interactive-text"
          className={`hover:text-interactive-text inline-block py-1 ${textClass} ${listClass}`}
        >
          {title}
        </Link>
      )}
      {hasChildren && (
        <ul>
          {children.map((item) => (
            <NavItem key={item.slug} {...item} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ branch, treeData = [], isMobileNavOpen = false, sidebarEnabled = true }) => {
  const mobileClasses = isMobileNavOpen ? 'translate-x-0' : 'translate-x-full';
  const shouldUseNavigationBranch = branch && branch !== '/' && !isMobileNavOpen;
  const navigationTreeBranch = shouldUseNavigationBranch ? new Array(1).fill(treeData.find(item => item.slug === branch)) : treeData;
  const tree = navigationTreeBranch.length > 0 ? navigationTreeBranch : treeData;
  let classes = !sidebarEnabled ? 'md:hidden' : '';
  classes += ' fixed top-16 md:top-0 right-0 z-10 w-[calc(100vw-2.5rem)] shadow-md md:shadow-none px-8 md:p-0 md:w-auto h-screen';
  classes += ' md:h-auto bg-panel md:relative md:block lg:flex-none transition-transform duration-300 transform md:transform-none md:transition-none ';
  classes += mobileClasses;

  return (
    <div className={classes}>
      <div className="md:sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-4">
        <nav className="w-56">
          <p className="pb-6 text-supplementary">Search documentation</p>
          <form method="get" action="/search/" style={{ marginBottom: '1.5rem' }} autoComplete="off">
            <input name="q" aria-label="Search" className="search__input" type="search" placeholder="Search..." aria-autocomplete="none" autoComplete="off" />
          </form>
          <ul className="text-normal">
            {tree.map(item => item && (<NavItem key={item.slug} {...item} />))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
