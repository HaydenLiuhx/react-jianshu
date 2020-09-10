import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1599696955933'); /* IE9 */
  src: url('./iconfont.eot?t=1599696955933#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1599696955933') format('woff'),
  url('./iconfont.ttf?t=1599696955933') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1599696955933#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

