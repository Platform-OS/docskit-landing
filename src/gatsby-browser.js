/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
import React from 'react';
import { CookieNotice } from 'gatsby-cookie-notice';
import './src/styles/global.css';
import './src/styles/pricing-table.css';
import './src/styles/cookie-consent.css';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      {children}
      <CookieNotice
        backgroundWrapperClasses="cc__wrapper"
        cookies={[
          {
            name: 'necessary',
            editable: false,
            default: true,
            title: 'Essential',
            text: 'Essential cookies are necessary for the proper functioning of the site. The site cannot function properly without them.'
          },
          {
            name: 'gatsby-gdpr-google-tagmanager',
            editable: true,
            default: true,
            title: 'Google Analytics',
            text: 'Google Analytics is a statistical tool of Google allowing to measure the audience of the website.'
          },
          {
            name: 'gatsby-gdpr-hotjar',
            editable: true,
            default: true,
            title: 'HotJar',
            text: 'Hotjar uses cookies to process information including standard internet log information and details of the visitor\'s behavioral patterns upon visiting our site. This is done to: operate our site; provide visitors to our site with a better experience by providing insights on how visitors use our site'
          }
        ]}>
        <h4 className='cc__title'>We value your privacy</h4>
        <p className='cc__description'>We use cookies to bring you the best experience and to improve the relevance of our communications with you.</p>
      </CookieNotice>
    </div>
  )
};

export const wrapPageElement = ({ element }) => {
  return (<PageWrapper>
    {element}
  </PageWrapper>
  );
};
