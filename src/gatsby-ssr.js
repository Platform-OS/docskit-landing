import React from 'react'
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

export {
  onRenderBody
}
