import { Link } from 'gatsby';
import * as React from 'react';

// TODO
// temporary fix should be moved to the base package

export function generateBreadcrumb(navigationTree, currentLocation = '/') {
  const homepage = navigationTree.find(node => node.slug === '/');
  const breadcrumb = [{ title: homepage.title, slug: homepage.slug }];

  function traverse(tree, location) {
    for (const element of tree) {
      const node = element;
      const nodePath = node.slug;

      if (nodePath === location) {
        breadcrumb.push({ title: node.title, slug: node.slug, active: true });
        return true;
      }

      if (location.startsWith(`${nodePath.replace(/\/index.html$/, '')}/`)) {
        breadcrumb.push({ title: node.title, slug: node.slug });
        const found = traverse(node.children, location);
        if (found) {
          return true;
        }
        breadcrumb.pop(); // Remove the node from the breadcrumb if not found in children
      }
    }

    return false;
  }

  traverse(navigationTree, currentLocation);

  return breadcrumb;
}


const Breadcrumbs = ({ treeData = [], currentPath = '/' }) => {
  const breadcrumbs = generateBreadcrumb(treeData, currentPath.replace(/\/$/, ''));

  return (
    <nav className="w-full mb-6 text-supplementary text-sm">
      <ol className="list-reset" data-testid="breadcrumbs">
        {breadcrumbs.map(crumb => (
          <React.Fragment key={crumb.slug}>
            <li data-testid="breadcrumb-item" className="cursor-default inline break-word">
              {crumb.active ? crumb.title : (<Link to={crumb.slug} className="text-interactive-text hover:text-interactive-hover">{crumb.title}</Link>)}
            </li>
            {!crumb.active &&
              (<li className="inline">
                <span className="mx-2 text-supplementary">/</span>
              </li>)}
          </React.Fragment>))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
