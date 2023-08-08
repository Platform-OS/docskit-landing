const React = require("react")

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <script key="pos-init-script" dangerouslySetInnerHTML={{
    __html: `window._hcaptcha_site_key = "{{context.hcaptcha_site_key}}"`
  }} />
]

const BodyAttributes = {
  "data-theme": "dark"
}

exports.onRenderBody = ({
  setHeadComponents
}) => {
  setHeadComponents(HeadComponents)
}
