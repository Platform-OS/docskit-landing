import React from 'react'
import { CookieNotice } from 'gatsby-cookie-notice';
import { withAssetPrefix } from "gatsby";
import gothamLight from './src/fonts/Gotham-Light.woff';
import gothamBold from './src/fonts/Gotham-Bold.woff2';
// see below
// import gothamBook from './src/fonts/Gotham-Book.woff2';

const HeadComponents = [
  <script key="pos-init-script" dangerouslySetInnerHTML={{
    __html: `window._hcaptcha_site_key = "{{context.hcaptcha_site_key}}"`
  }} />,
  <link
    rel="preload"
    href={withAssetPrefix(gothamLight)}
    as="font"
    type="font/woff"
    crossOrigin="anonymous"
    key="gothamLight"
  />,
  <link
    rel="preload"
    href={withAssetPrefix(gothamBold)}
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    key="gothamBold"
  />,
  /* asset size for Gotham Book font is small enough that it gets base64 encoded and inlined by webpack */
  // <link
  //   rel="preload"
  //   href={withAssetPrefix(gothamBook)}
  //   as="font"
  //   type="font/woff2"
  //   crossOrigin="anonymous"
  //   key="gothamBook"
  // />,
];

const onRenderBody = ({
  setHeadComponents
}) => {
  setHeadComponents(HeadComponents)
};

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

export {
  onRenderBody
}
