/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "prism-themes/themes/prism-atom-dark.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "./src/styles/global.css"

exports.onInitialClientRender = () => {
  require("typeface-nunito")
}
