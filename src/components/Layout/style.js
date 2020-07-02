import { css } from 'linaria';

import urbaneRoundedHeavyWoff from '../../fonts/Urbane Rounded/Urbane Rounded Heavy.woff';
import urbaneRoundedHeavyWoff2 from '../../fonts/Urbane Rounded/Urbane Rounded Heavy.woff2';

import ptSerifProNarrowBlackItalicWoff from '../../fonts/PT Serif Pro/PT Serif Pro Narrow Black Italic.woff';
import ptSerifProNarrowBlackItalicWoff2 from '../../fonts/PT Serif Pro/PT Serif Pro Narrow Black Italic.woff2';

export const global = css`
  :global() {
    *,
    *::before,
    &::after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }
  }
`;

export const fonts = css`
  :global() {
    @font-face {
      font-family: 'Urbane Rounded';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(${urbaneRoundedHeavyWoff2}) format('woff2'),
        url(${urbaneRoundedHeavyWoff}) format('woff');
    }

    @font-face {
      font-family: 'PT Serif Pro Narrow';
      font-style: italic;
      font-weight: 900;
      font-display: swap;
      src: url(${ptSerifProNarrowBlackItalicWoff2}) format('woff2'),
        url(${ptSerifProNarrowBlackItalicWoff}) format('woff');
    }
  }
`;
