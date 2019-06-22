const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-page-js": hot(preferDefault(require("/Users/steph/demeter/src/templates/ProductPage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/steph/demeter/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/404.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/login.js"))),
  "component---src-pages-myaccount-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/myaccount.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/privacy.js"))),
  "component---src-pages-register-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/register.js"))),
  "component---src-pages-terms-js": hot(preferDefault(require("/Users/steph/demeter/src/pages/terms.js")))
}

