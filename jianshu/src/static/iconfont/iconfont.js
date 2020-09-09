import { createGlobalStyle } from 'styled-components'

export const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1599629018955'); /* IE9 */
    src: url('./iconfont.eot?t=1599629018955#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1599629018955') format('woff'),
    url('./iconfont.ttf?t=1599629018955') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1599629018955#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

