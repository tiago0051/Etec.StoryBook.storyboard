import * as React from 'react';
import React__default, { useCallback, forwardRef, Children, isValidElement, createElement, cloneElement, Fragment, useEffect, useRef, createContext, useMemo, useContext, useState, useLayoutEffect, useReducer } from 'react';
import * as ReactDOM from 'react-dom';
import ReactDOM__default, { flushSync, createPortal } from 'react-dom';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*:where(.twp,.twp *),\n::before:where(.twp,.twp *),\n::after:where(.twp,.twp *) {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before:where(.twp,.twp *),\n::after:where(.twp,.twp *) {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\n.twp {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: \"Lato\", ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\n.twp {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr:where(.twp,.twp *) {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]):where(.twp,.twp *) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1:where(.twp,.twp *),\nh2:where(.twp,.twp *),\nh3:where(.twp,.twp *),\nh4:where(.twp,.twp *),\nh5:where(.twp,.twp *),\nh6:where(.twp,.twp *) {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na:where(.twp,.twp *) {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb:where(.twp,.twp *),\nstrong:where(.twp,.twp *) {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode:where(.twp,.twp *),\nkbd:where(.twp,.twp *),\nsamp:where(.twp,.twp *),\npre:where(.twp,.twp *) {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall:where(.twp,.twp *) {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub:where(.twp,.twp *),\nsup:where(.twp,.twp *) {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub:where(.twp,.twp *) {\n  bottom: -0.25em;\n}\n\nsup:where(.twp,.twp *) {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable:where(.twp,.twp *) {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton:where(.twp,.twp *),\ninput:where(.twp,.twp *),\noptgroup:where(.twp,.twp *),\nselect:where(.twp,.twp *),\ntextarea:where(.twp,.twp *) {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton:where(.twp,.twp *),\nselect:where(.twp,.twp *) {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton:where(.twp,.twp *),\ninput:where([type='button']):where(.twp,.twp *),\ninput:where([type='reset']):where(.twp,.twp *),\ninput:where([type='submit']):where(.twp,.twp *) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring:where(.twp,.twp *) {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid:where(.twp,.twp *) {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress:where(.twp,.twp *) {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button:where(.twp,.twp *),\n::-webkit-outer-spin-button:where(.twp,.twp *) {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search']:where(.twp,.twp *) {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration:where(.twp,.twp *) {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button:where(.twp,.twp *) {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary:where(.twp,.twp *) {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote:where(.twp,.twp *),\ndl:where(.twp,.twp *),\ndd:where(.twp,.twp *),\nh1:where(.twp,.twp *),\nh2:where(.twp,.twp *),\nh3:where(.twp,.twp *),\nh4:where(.twp,.twp *),\nh5:where(.twp,.twp *),\nh6:where(.twp,.twp *),\nhr:where(.twp,.twp *),\nfigure:where(.twp,.twp *),\np:where(.twp,.twp *),\npre:where(.twp,.twp *) {\n  margin: 0;\n}\n\nfieldset:where(.twp,.twp *) {\n  margin: 0;\n  padding: 0;\n}\n\nlegend:where(.twp,.twp *) {\n  padding: 0;\n}\n\nol:where(.twp,.twp *),\nul:where(.twp,.twp *),\nmenu:where(.twp,.twp *) {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog:where(.twp,.twp *) {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea:where(.twp,.twp *) {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder:where(.twp,.twp *), textarea::-moz-placeholder:where(.twp,.twp *) {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder:where(.twp,.twp *),\ntextarea::placeholder:where(.twp,.twp *) {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton:where(.twp,.twp *),\n[role=\"button\"]:where(.twp,.twp *) {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled:where(.twp,.twp *) {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg:where(.twp,.twp *),\nsvg:where(.twp,.twp *),\nvideo:where(.twp,.twp *),\ncanvas:where(.twp,.twp *),\naudio:where(.twp,.twp *),\niframe:where(.twp,.twp *),\nembed:where(.twp,.twp *),\nobject:where(.twp,.twp *) {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg:where(.twp,.twp *),\nvideo:where(.twp,.twp *) {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(.twp,.twp *) {\n  display: none;\n}\n    html {\n      font-family: 'lato'\n    }\n\n    :root {\n      --eteg-background: 0 0% 100%;\n      --eteg-foreground: 217 28% 25%;\n\n      --eteg-card: 0 0% 100%;\n      --eteg-card-foreground: 222.2 84% 4.9%;\n\n      --eteg-popover: 0 0% 100%;\n      --eteg-popover-foreground: 218 14% 60%;\n\n      --eteg-primary: 114 42% 46%;\n      --eteg-primary-foreground: 220 13% 95%;\n      --eteg-primary-hover: 114 42% 35%;\n\n      --eteg-secondary: 196 64% 58%;\n      --eteg-secondary-foreground: 220 27% 98%;\n      --eteg-secondary-hover: 196 64% 38%;\n\n      --eteg-muted: 220 13% 95%;\n      --eteg-muted-foreground: 206 11% 71%;\n\n      --eteg-accent: 210 40% 96.1%;\n      --eteg-accent-foreground: 222.2 47.4% 11.2%;\n\n      --eteg-destructive: 0 100% 71%;\n      --eteg-destructive-foreground: 210 40% 98%;\n      --eteg-destructive-hover: 0 46% 47%;\n\n      --eteg-border: 194 11% 46%;\n      --eteg-input: 218 14% 80%;\n      --eteg-ring: 222.2 84% 4.9%;\n\n      --eteg-badge: 160 61% 79%;\n      --eteg-badge-foreground: 217 28% 25%;\n\n      --eteg-table-line: 218 14% 89%;\n      --eteg-table-dropdown: 220 13% 95%;\n\n      --eteg-radius: 6px;\n\n      --eteg-checkbox: 221 83% 53%;\n      --eteg-checkbox-foreground: 220 13% 95%;\n    }\n    * {\n  border-color: hsl(var(--eteg-border));\n}\n    body {\n  background-color: hsl(var(--eteg-background));\n  color: hsl(var(--eteg-foreground));\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.eteg-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.eteg-fixed {\n  position: fixed;\n}\n.eteg-absolute {\n  position: absolute;\n}\n.eteg-relative {\n  position: relative;\n}\n.eteg-inset-0 {\n  inset: 0px;\n}\n.-eteg-bottom-\\[18px\\] {\n  bottom: -18px;\n}\n.-eteg-top-2 {\n  top: -0.5rem;\n}\n.eteg-left-4 {\n  left: 1rem;\n}\n.eteg-left-\\[50\\%\\] {\n  left: 50%;\n}\n.eteg-right-0 {\n  right: 0px;\n}\n.eteg-right-4 {\n  right: 1rem;\n}\n.eteg-top-0 {\n  top: 0px;\n}\n.eteg-top-4 {\n  top: 1rem;\n}\n.eteg-top-\\[50\\%\\] {\n  top: 50%;\n}\n.eteg-z-10 {\n  z-index: 10;\n}\n.eteg-z-50 {\n  z-index: 50;\n}\n.eteg--mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n.eteg-mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.eteg-my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.eteg-my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.eteg-mb-3 {\n  margin-bottom: 0.75rem;\n}\n.eteg-mb-4 {\n  margin-bottom: 1rem;\n}\n.eteg-ml-auto {\n  margin-left: auto;\n}\n.eteg-mr-2 {\n  margin-right: 0.5rem;\n}\n.eteg-mr-4 {\n  margin-right: 1rem;\n}\n.eteg-mt-2 {\n  margin-top: 0.5rem;\n}\n.eteg-mt-4 {\n  margin-top: 1rem;\n}\n.eteg-box-border {\n  box-sizing: border-box;\n}\n.eteg-block {\n  display: block;\n}\n.eteg-flex {\n  display: flex;\n}\n.eteg-inline-flex {\n  display: inline-flex;\n}\n.eteg-grid {\n  display: grid;\n}\n.eteg-hidden {\n  display: none;\n}\n.eteg-aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.eteg-h-0 {\n  height: 0px;\n}\n.eteg-h-10 {\n  height: 2.5rem;\n}\n.eteg-h-11 {\n  height: 2.75rem;\n}\n.eteg-h-12 {\n  height: 3rem;\n}\n.eteg-h-4 {\n  height: 1rem;\n}\n.eteg-h-5 {\n  height: 1.25rem;\n}\n.eteg-h-6 {\n  height: 1.5rem;\n}\n.eteg-h-7 {\n  height: 1.75rem;\n}\n.eteg-h-9 {\n  height: 2.25rem;\n}\n.eteg-h-\\[1px\\] {\n  height: 1px;\n}\n.eteg-h-\\[var\\(--radix-select-trigger-height\\)\\] {\n  height: var(--radix-select-trigger-height);\n}\n.eteg-h-auto {\n  height: auto;\n}\n.eteg-h-full {\n  height: 100%;\n}\n.eteg-h-min {\n  height: -moz-min-content;\n  height: min-content;\n}\n.eteg-h-px {\n  height: 1px;\n}\n.eteg-max-h-96 {\n  max-height: 24rem;\n}\n.eteg-max-h-\\[300px\\] {\n  max-height: 300px;\n}\n.eteg-w-10 {\n  width: 2.5rem;\n}\n.eteg-w-32 {\n  width: 8rem;\n}\n.eteg-w-4 {\n  width: 1rem;\n}\n.eteg-w-5 {\n  width: 1.25rem;\n}\n.eteg-w-6 {\n  width: 1.5rem;\n}\n.eteg-w-72 {\n  width: 18rem;\n}\n.eteg-w-96 {\n  width: 24rem;\n}\n.eteg-w-\\[1px\\] {\n  width: 1px;\n}\n.eteg-w-full {\n  width: 100%;\n}\n.eteg-w-min {\n  width: -moz-min-content;\n  width: min-content;\n}\n.eteg-min-w-\\[8rem\\] {\n  min-width: 8rem;\n}\n.eteg-min-w-\\[var\\(--radix-select-trigger-width\\)\\] {\n  min-width: var(--radix-select-trigger-width);\n}\n.eteg-max-w-\\[95\\%\\] {\n  max-width: 95%;\n}\n.eteg-max-w-lg {\n  max-width: 32rem;\n}\n.eteg-shrink-0 {\n  flex-shrink: 0;\n}\n.eteg-caption-bottom {\n  caption-side: bottom;\n}\n.eteg-translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.eteg-translate-y-\\[-50\\%\\] {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes eteg-pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n.eteg-animate-pulse {\n  animation: eteg-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n.eteg-cursor-default {\n  cursor: default;\n}\n.eteg-cursor-pointer {\n  cursor: pointer;\n}\n.eteg-select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.eteg-grid-flow-col {\n  grid-auto-flow: column;\n}\n.eteg-grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.eteg-grid-cols-\\[30px_10px_auto\\] {\n  grid-template-columns: 30px 10px auto;\n}\n.eteg-flex-row {\n  flex-direction: row;\n}\n.eteg-flex-col {\n  flex-direction: column;\n}\n.eteg-flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.eteg-items-end {\n  align-items: flex-end;\n}\n.eteg-items-center {\n  align-items: center;\n}\n.eteg-justify-start {\n  justify-content: flex-start;\n}\n.eteg-justify-end {\n  justify-content: flex-end;\n}\n.eteg-justify-center {\n  justify-content: center;\n}\n.eteg-justify-between {\n  justify-content: space-between;\n}\n.eteg-gap-1 {\n  gap: 0.25rem;\n}\n.eteg-gap-2 {\n  gap: 0.5rem;\n}\n.eteg-gap-3 {\n  gap: 0.75rem;\n}\n.eteg-gap-4 {\n  gap: 1rem;\n}\n.eteg-space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.eteg-space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.eteg-space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.eteg-space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.eteg-self-center {\n  align-self: center;\n}\n.eteg-overflow-auto {\n  overflow: auto;\n}\n.eteg-overflow-hidden {\n  overflow: hidden;\n}\n.eteg-overflow-y-auto {\n  overflow-y: auto;\n}\n.eteg-overflow-x-hidden {\n  overflow-x: hidden;\n}\n.eteg-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.eteg-whitespace-nowrap {\n  white-space: nowrap;\n}\n.eteg-rounded-full {\n  border-radius: 9999px;\n}\n.eteg-rounded-md {\n  border-radius: calc(var(--eteg-radius) - 2px);\n}\n.eteg-rounded-none {\n  border-radius: 0px;\n}\n.eteg-rounded-sm {\n  border-radius: calc(var(--eteg-radius) - 4px);\n}\n.eteg-rounded-b-none {\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.eteg-border {\n  border-width: 1px;\n}\n.eteg-border-b {\n  border-bottom-width: 1px;\n}\n.eteg-border-r {\n  border-right-width: 1px;\n}\n.eteg-border-t {\n  border-top-width: 1px;\n}\n.eteg-border-t-0 {\n  border-top-width: 0px;\n}\n.eteg-border-none {\n  border-style: none;\n}\n.eteg-border-foreground {\n  border-color: hsl(var(--eteg-foreground));\n}\n.eteg-border-input {\n  border-color: hsl(var(--eteg-input));\n}\n.eteg-border-primary {\n  border-color: hsl(var(--eteg-primary));\n}\n.eteg-border-secondary {\n  border-color: hsl(var(--eteg-secondary));\n}\n.eteg-border-transparent {\n  border-color: transparent;\n}\n.eteg-border-x-transparent {\n  border-left-color: transparent;\n  border-right-color: transparent;\n}\n.eteg-border-r-input {\n  border-right-color: hsl(var(--eteg-input));\n}\n.eteg-border-t-table-line {\n  border-top-color: hsl(var(--eteg-table-line));\n}\n.eteg-border-t-transparent {\n  border-top-color: transparent;\n}\n.eteg-bg-background {\n  background-color: hsl(var(--eteg-background));\n}\n.eteg-bg-badge {\n  background-color: hsl(var(--eteg-badge));\n}\n.eteg-bg-black\\/80 {\n  background-color: rgb(0 0 0 / 0.8);\n}\n.eteg-bg-border {\n  background-color: hsl(var(--eteg-border));\n}\n.eteg-bg-destructive {\n  background-color: hsl(var(--eteg-destructive));\n}\n.eteg-bg-input\\/30 {\n  background-color: hsl(var(--eteg-input) / 0.3);\n}\n.eteg-bg-muted {\n  background-color: hsl(var(--eteg-muted));\n}\n.eteg-bg-muted\\/50 {\n  background-color: hsl(var(--eteg-muted) / 0.5);\n}\n.eteg-bg-popover {\n  background-color: hsl(var(--eteg-popover));\n}\n.eteg-bg-primary {\n  background-color: hsl(var(--eteg-primary));\n}\n.eteg-bg-secondary {\n  background-color: hsl(var(--eteg-secondary));\n}\n.eteg-bg-table-dropdown {\n  background-color: hsl(var(--eteg-table-dropdown));\n}\n.eteg-bg-table-line {\n  background-color: hsl(var(--eteg-table-line));\n}\n.eteg-bg-transparent {\n  background-color: transparent;\n}\n.eteg-stroke-\\[3px\\] {\n  stroke-width: 3px;\n}\n.eteg-p-0 {\n  padding: 0px;\n}\n.eteg-p-1 {\n  padding: 0.25rem;\n}\n.eteg-p-4 {\n  padding: 1rem;\n}\n.eteg-p-6 {\n  padding: 1.5rem;\n}\n.eteg-px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.eteg-px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.eteg-px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.eteg-px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.eteg-px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.eteg-px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.eteg-px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.eteg-px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.eteg-py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.eteg-py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.eteg-py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.eteg-py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.eteg-py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.eteg-py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.eteg-pb-8 {\n  padding-bottom: 2rem;\n}\n.eteg-pl-2 {\n  padding-left: 0.5rem;\n}\n.eteg-pl-2\\.5 {\n  padding-left: 0.625rem;\n}\n.eteg-pl-20 {\n  padding-left: 5rem;\n}\n.eteg-pl-8 {\n  padding-left: 2rem;\n}\n.eteg-pr-2 {\n  padding-right: 0.5rem;\n}\n.eteg-pr-2\\.5 {\n  padding-right: 0.625rem;\n}\n.eteg-pr-4 {\n  padding-right: 1rem;\n}\n.eteg-pt-10 {\n  padding-top: 2.5rem;\n}\n.eteg-text-left {\n  text-align: left;\n}\n.eteg-text-center {\n  text-align: center;\n}\n.eteg-text-right {\n  text-align: right;\n}\n.eteg-align-middle {\n  vertical-align: middle;\n}\n.eteg-font-lato {\n  font-family: lato;\n}\n.eteg-text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.eteg-text-\\[32px\\] {\n  font-size: 32px;\n}\n.eteg-text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.eteg-text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.eteg-text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.eteg-text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.eteg-font-bold {\n  font-weight: 700;\n}\n.eteg-font-medium {\n  font-weight: 500;\n}\n.eteg-font-normal {\n  font-weight: 400;\n}\n.eteg-font-semibold {\n  font-weight: 600;\n}\n.eteg-capitalize {\n  text-transform: capitalize;\n}\n.eteg-normal-case {\n  text-transform: none;\n}\n.eteg-leading-3 {\n  line-height: .75rem;\n}\n.eteg-leading-none {\n  line-height: 1;\n}\n.eteg-tracking-tight {\n  letter-spacing: -0.025em;\n}\n.eteg-tracking-widest {\n  letter-spacing: 0.1em;\n}\n.eteg-text-badge-foreground {\n  color: hsl(var(--eteg-badge-foreground));\n}\n.eteg-text-border {\n  color: hsl(var(--eteg-border));\n}\n.eteg-text-current {\n  color: currentColor;\n}\n.eteg-text-destructive {\n  color: hsl(var(--eteg-destructive));\n}\n.eteg-text-destructive-foreground {\n  color: hsl(var(--eteg-destructive-foreground));\n}\n.eteg-text-foreground {\n  color: hsl(var(--eteg-foreground));\n}\n.eteg-text-foreground\\/55 {\n  color: hsl(var(--eteg-foreground) / 0.55);\n}\n.eteg-text-foreground\\/60 {\n  color: hsl(var(--eteg-foreground) / 0.6);\n}\n.eteg-text-foreground\\/65 {\n  color: hsl(var(--eteg-foreground) / 0.65);\n}\n.eteg-text-foreground\\/70 {\n  color: hsl(var(--eteg-foreground) / 0.7);\n}\n.eteg-text-foreground\\/80 {\n  color: hsl(var(--eteg-foreground) / 0.8);\n}\n.eteg-text-muted-foreground {\n  color: hsl(var(--eteg-muted-foreground));\n}\n.eteg-text-popover-foreground {\n  color: hsl(var(--eteg-popover-foreground));\n}\n.eteg-text-primary {\n  color: hsl(var(--eteg-primary));\n}\n.eteg-text-primary-foreground {\n  color: hsl(var(--eteg-primary-foreground));\n}\n.eteg-text-secondary {\n  color: hsl(var(--eteg-secondary));\n}\n.eteg-text-secondary-foreground {\n  color: hsl(var(--eteg-secondary-foreground));\n}\n.eteg-underline-offset-4 {\n  text-underline-offset: 4px;\n}\n.eteg-opacity-50 {\n  opacity: 0.5;\n}\n.eteg-shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.eteg-shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.eteg-outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.eteg-ring-offset-background {\n  --tw-ring-offset-color: hsl(var(--eteg-background));\n}\n.eteg-transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.eteg-transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.eteg-duration-200 {\n  transition-duration: 200ms;\n}\n@keyframes enter {\n\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes exit {\n\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n.eteg-duration-200 {\n  animation-duration: 200ms;\n}\n.placeholder\\:eteg-text-muted-foreground::-moz-placeholder {\n  color: hsl(var(--eteg-muted-foreground));\n}\n.placeholder\\:eteg-text-muted-foreground::placeholder {\n  color: hsl(var(--eteg-muted-foreground));\n}\n.hover\\:eteg-bg-badge\\/80:hover {\n  background-color: hsl(var(--eteg-badge) / 0.8);\n}\n.hover\\:eteg-bg-destructive\\/80:hover {\n  background-color: hsl(var(--eteg-destructive) / 0.8);\n}\n.hover\\:eteg-bg-primary\\/80:hover {\n  background-color: hsl(var(--eteg-primary) / 0.8);\n}\n.hover\\:eteg-bg-secondary\\/80:hover {\n  background-color: hsl(var(--eteg-secondary) / 0.8);\n}\n.hover\\:eteg-text-destructive:hover {\n  color: hsl(var(--eteg-destructive));\n}\n.hover\\:eteg-filter-none:hover {\n  filter: none;\n}\n.focus\\:eteg-bg-accent:focus {\n  background-color: hsl(var(--eteg-accent));\n}\n.focus\\:eteg-text-accent-foreground:focus {\n  color: hsl(var(--eteg-accent-foreground));\n}\n.focus\\:eteg-outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:eteg-outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:eteg-ring-2:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:eteg-ring-ring:focus-visible {\n  --tw-ring-color: hsl(var(--eteg-ring));\n}\n.focus-visible\\:eteg-ring-offset-2:focus-visible {\n  --tw-ring-offset-width: 2px;\n}\n.disabled\\:eteg-pointer-events-none:disabled {\n  pointer-events: none;\n}\n.disabled\\:eteg-cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n.disabled\\:eteg-bg-muted:disabled {\n  background-color: hsl(var(--eteg-muted));\n}\n.disabled\\:eteg-text-muted-foreground:disabled {\n  color: hsl(var(--eteg-muted-foreground));\n}\n.disabled\\:eteg-opacity-50:disabled {\n  opacity: 0.5;\n}\n.aria-required\\:eteg-inline[aria-required=\"true\"] {\n  display: inline;\n}\n.aria-selected\\:eteg-bg-accent[aria-selected=\"true\"] {\n  background-color: hsl(var(--eteg-accent));\n}\n.aria-selected\\:eteg-text-accent-foreground[aria-selected=\"true\"] {\n  color: hsl(var(--eteg-accent-foreground));\n}\n.data-\\[disabled\\]\\:eteg-pointer-events-none[data-disabled] {\n  pointer-events: none;\n}\n.data-\\[open\\=true\\]\\:eteg-mb-4[data-open=true] {\n  margin-bottom: 1rem;\n}\n.data-\\[open\\=true\\]\\:eteg-h-min[data-open=true] {\n  height: -moz-min-content;\n  height: min-content;\n}\n.data-\\[side\\=bottom\\]\\:eteg-translate-y-1[data-side=bottom] {\n  --tw-translate-y: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.data-\\[side\\=left\\]\\:eteg--translate-x-1[data-side=left] {\n  --tw-translate-x: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.data-\\[side\\=right\\]\\:eteg-translate-x-1[data-side=right] {\n  --tw-translate-x: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.data-\\[side\\=top\\]\\:eteg--translate-y-1[data-side=top] {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.data-\\[active\\=true\\]\\:eteg-rounded-full[data-active=true] {\n  border-radius: 9999px;\n}\n.data-\\[error\\=true\\]\\:eteg-border-destructive[data-error=true] {\n  border-color: hsl(var(--eteg-destructive));\n}\n.data-\\[state\\=checked\\]\\:eteg-border-checkbox[data-state=checked] {\n  border-color: hsl(var(--eteg-checkbox));\n}\n.data-\\[error\\=true\\]\\:eteg-border-r-destructive[data-error=true] {\n  border-right-color: hsl(var(--eteg-destructive));\n}\n.data-\\[disabled\\=true\\]\\:eteg-bg-muted[data-disabled=true] {\n  background-color: hsl(var(--eteg-muted));\n}\n.data-\\[state\\=checked\\]\\:eteg-bg-checkbox[data-state=checked] {\n  background-color: hsl(var(--eteg-checkbox));\n}\n.data-\\[state\\=open\\]\\:eteg-bg-accent[data-state=open] {\n  background-color: hsl(var(--eteg-accent));\n}\n.data-\\[state\\=selected\\]\\:eteg-bg-muted[data-state=selected] {\n  background-color: hsl(var(--eteg-muted));\n}\n.data-\\[open\\=true\\]\\:eteg-py-6[data-open=true] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.data-\\[icon\\=true\\]\\:eteg-pl-12[data-icon=true] {\n  padding-left: 3rem;\n}\n.data-\\[active\\=false\\]\\:eteg-text-muted-foreground[data-active=false] {\n  color: hsl(var(--eteg-muted-foreground));\n}\n.data-\\[error\\=true\\]\\:eteg-text-destructive[data-error=true] {\n  color: hsl(var(--eteg-destructive));\n}\n.data-\\[selected\\=true\\]\\:eteg-text-accent-foreground[data-selected=true] {\n  color: hsl(var(--eteg-accent-foreground));\n}\n.data-\\[state\\=checked\\]\\:eteg-text-checkbox-foreground[data-state=checked] {\n  color: hsl(var(--eteg-checkbox-foreground));\n}\n.data-\\[state\\=open\\]\\:eteg-text-muted-foreground[data-state=open] {\n  color: hsl(var(--eteg-muted-foreground));\n}\n.data-\\[disabled\\]\\:eteg-opacity-50[data-disabled] {\n  opacity: 0.5;\n}\n.data-\\[state\\=open\\]\\:eteg-animate-in[data-state=open] {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:eteg-animate-out[data-state=closed] {\n  animation-name: exit;\n  animation-duration: 150ms;\n  --tw-exit-opacity: initial;\n  --tw-exit-scale: initial;\n  --tw-exit-rotate: initial;\n  --tw-exit-translate-x: initial;\n  --tw-exit-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:eteg-fade-out-0[data-state=closed] {\n  --tw-exit-opacity: 0;\n}\n.data-\\[state\\=open\\]\\:eteg-fade-in-0[data-state=open] {\n  --tw-enter-opacity: 0;\n}\n.data-\\[state\\=closed\\]\\:eteg-zoom-out-95[data-state=closed] {\n  --tw-exit-scale: .95;\n}\n.data-\\[state\\=open\\]\\:eteg-zoom-in-95[data-state=open] {\n  --tw-enter-scale: .95;\n}\n.data-\\[side\\=bottom\\]\\:eteg-slide-in-from-top-2[data-side=bottom] {\n  --tw-enter-translate-y: -0.5rem;\n}\n.data-\\[side\\=left\\]\\:eteg-slide-in-from-right-2[data-side=left] {\n  --tw-enter-translate-x: 0.5rem;\n}\n.data-\\[side\\=right\\]\\:eteg-slide-in-from-left-2[data-side=right] {\n  --tw-enter-translate-x: -0.5rem;\n}\n.data-\\[side\\=top\\]\\:eteg-slide-in-from-bottom-2[data-side=top] {\n  --tw-enter-translate-y: 0.5rem;\n}\n.data-\\[state\\=closed\\]\\:eteg-slide-out-to-left-1\\/2[data-state=closed] {\n  --tw-exit-translate-x: -50%;\n}\n.data-\\[state\\=closed\\]\\:eteg-slide-out-to-top-\\[48\\%\\][data-state=closed] {\n  --tw-exit-translate-y: -48%;\n}\n.data-\\[state\\=open\\]\\:eteg-slide-in-from-left-1\\/2[data-state=open] {\n  --tw-enter-translate-x: -50%;\n}\n.data-\\[state\\=open\\]\\:eteg-slide-in-from-top-\\[48\\%\\][data-state=open] {\n  --tw-enter-translate-y: -48%;\n}\n@media (min-width: 640px) {\n\n  .sm\\:eteg-mt-0 {\n    margin-top: 0px;\n  }\n\n  .sm\\:eteg-max-w-xs {\n    max-width: 20rem;\n  }\n\n  .sm\\:eteg-grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\:eteg-flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:eteg-items-center {\n    align-items: center;\n  }\n\n  .sm\\:eteg-justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:eteg-justify-between {\n    justify-content: space-between;\n  }\n\n  .sm\\:eteg-space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:eteg-rounded-lg {\n    border-radius: var(--eteg-radius);\n  }\n\n  .sm\\:eteg-text-left {\n    text-align: left;\n  }\n\n  .sm\\:eteg-text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .sm\\:eteg-text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:eteg-grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:eteg-pr-0:has([role=checkbox]) {\n  padding-right: 0px;\n}\n.\\[\\&\\:last-child\\]\\:eteg-pr-0:last-child {\n  padding-right: 0px;\n}\n.\\[\\&\\>span\\]\\:eteg-line-clamp-1>span {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.\\[\\&\\>tr\\]\\:last\\:eteg-border-b-0:last-child>tr {\n  border-bottom-width: 0px;\n}\n.\\[\\&_\\[cmdk-group-heading\\]\\]\\:eteg-px-2 [cmdk-group-heading] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.\\[\\&_\\[cmdk-group-heading\\]\\]\\:eteg-py-1\\.5 [cmdk-group-heading] {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.\\[\\&_\\[cmdk-group-heading\\]\\]\\:eteg-text-xs [cmdk-group-heading] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.\\[\\&_\\[cmdk-group-heading\\]\\]\\:eteg-font-medium [cmdk-group-heading] {\n  font-weight: 500;\n}\n.\\[\\&_\\[cmdk-group-heading\\]\\]\\:eteg-text-muted-foreground [cmdk-group-heading] {\n  color: hsl(var(--eteg-muted-foreground));\n}\n.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:eteg-pt-0 [cmdk-group]:not([hidden]) ~[cmdk-group] {\n  padding-top: 0px;\n}\n.\\[\\&_\\[cmdk-group\\]\\]\\:eteg-px-2 [cmdk-group] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:eteg-h-5 [cmdk-input-wrapper] svg {\n  height: 1.25rem;\n}\n.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:eteg-w-5 [cmdk-input-wrapper] svg {\n  width: 1.25rem;\n}\n.\\[\\&_\\[cmdk-input\\]\\]\\:eteg-h-12 [cmdk-input] {\n  height: 3rem;\n}\n.\\[\\&_\\[cmdk-item\\]\\]\\:eteg-px-2 [cmdk-item] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.\\[\\&_\\[cmdk-item\\]\\]\\:eteg-py-3 [cmdk-item] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.\\[\\&_\\[cmdk-item\\]_svg\\]\\:eteg-h-5 [cmdk-item] svg {\n  height: 1.25rem;\n}\n.\\[\\&_\\[cmdk-item\\]_svg\\]\\:eteg-w-5 [cmdk-item] svg {\n  width: 1.25rem;\n}\n.\\[\\&_tr\\:first-child\\]\\:eteg-border-0 tr:first-child {\n  border-width: 0px;\n}\n.\\[\\&_tr\\]\\:eteg-border-b tr {\n  border-bottom-width: 1px;\n}\n.\\[\\&_tr\\]\\:eteg-border-b-table-line tr {\n  border-bottom-color: hsl(var(--eteg-table-line));\n}\n.\\[\\&_tr\\]\\:eteg-border-t-transparent tr {\n  border-top-color: transparent;\n}";
styleInject(css_248z);

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$6ed0406888f73fc4$var$setRef(ref, node)
        )
    ;
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    const childrenArray = Children.toArray(children);
    const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if (Children.count(newElement) > 1) return Children.only(null);
                return /*#__PURE__*/ isValidElement(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ createElement($5e63c961fc1ce211$var$SlotClone, _extends$1({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ isValidElement(newElement) ? /*#__PURE__*/ cloneElement(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ createElement($5e63c961fc1ce211$var$SlotClone, _extends$1({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$var$SlotClone = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    if (/*#__PURE__*/ isValidElement(children)) return /*#__PURE__*/ cloneElement(children, {
        ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
        ref: forwardedRef ? $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref) : children.ref
    });
    return Children.count(children) > 1 ? Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: children  })=>{
    return /*#__PURE__*/ createElement(Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $5e63c961fc1ce211$var$isSlottable(child) {
    return /*#__PURE__*/ isValidElement(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            // if the handler exists on both, we compose them
            if (slotPropValue && childPropValue) overrideProps[propName] = (...args)=>{
                childPropValue(...args);
                slotPropValue(...args);
            };
            else if (slotPropValue) overrideProps[propName] = slotPropValue;
        } else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}

function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx$1(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}

const falsyToString = (value)=>typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = clsx$1;
const cva = (base, config)=>{
    return (props)=>{
        var ref;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants , defaultVariants  } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1)=>{
            let { class: cvClass , className: cvClassName , ...compoundVariantOptions } = param1;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
};

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
const IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  const separator = config.separator;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  return function splitModifiers(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    splitModifiers,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(originalClassName => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = splitModifiers(originalClassName);
    let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(parsed => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(group => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map(parsed => parsed.originalClassName).join(' ');
}

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
function getDefaultConfig() {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}

/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
function mergeConfigs(baseConfig, {
  cacheSize,
  prefix,
  separator,
  extend = {},
  override = {}
}) {
  overrideProperty(baseConfig, 'cacheSize', cacheSize);
  overrideProperty(baseConfig, 'prefix', prefix);
  overrideProperty(baseConfig, 'separator', separator);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
}
function overrideProperty(baseObject, overrideKey, overrideValue) {
  if (overrideValue !== undefined) {
    baseObject[overrideKey] = overrideValue;
  }
}
function overrideConfigProperties(baseObject, overrideObject) {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
}
function mergeConfigProperties(baseObject, mergeObject) {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== undefined) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
}
function extendTailwindMerge(configExtension, ...createConfig) {
  return typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
}

function cn(...inputs) {
    const twMerge = extendTailwindMerge({
        prefix: "eteg-",
    });
    return twMerge(clsx(inputs));
}

const buttonVariants = cva("eteg-inline-flex eteg-items-center eteg-justify-center eteg-whitespace-nowrap eteg-rounded-md eteg-text-sm eteg-font-medium eteg-ring-offset-background eteg-transition-colors eteg-focus-visible:outline-none eteg-focus-visible:ring-2 eteg-focus-visible:ring-ring eteg-focus-visible:ring-offset-2 disabled:eteg-pointer-events-none disabled:eteg-opacity-50 twp", {
    variants: {
        variant: {
            default: "eteg-bg-primary eteg-text-primary-foreground eteg-hover:bg-primary-hover",
            destructive: "eteg-bg-destructive eteg-text-destructive-foreground eteg-hover:bg-destructive-hover",
            outline: "eteg-border eteg-border-primary eteg-bg-transparent eteg-text-primary eteg-hover:bg-accent eteg-hover:text-primary-foreground eteg-hover:bg-primary",
            outlineSecondary: "eteg-border eteg-border-secondary eteg-bg-transparent eteg-text-secondary eteg-hover:bg-accent eteg-hover:text-secondary-foreground eteg-hover:bg-secondary",
            secondary: "eteg-bg-secondary eteg-text-secondary-foreground eteg-hover:bg-secondary-hover",
            ghost: "eteg-text-primary eteg-hover:text-primary-hover",
            link: "eteg-text-primary eteg-underline-offset-4 eteg-hover:underline eteg-hover:text-primary-hover",
        },
        size: {
            default: "eteg-h-12 eteg-px-4 eteg-py-2",
            sm: "eteg-h-9 eteg-rounded-md eteg-px-3",
            lg: "eteg-h-11 eteg-rounded-md eteg-px-8",
            icon: "eteg-h-10 eteg-w-10",
            none: "eteg-h-min eteg-w-min",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
    return (React.createElement(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = "Button";

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default.createContext && /*#__PURE__*/React__default.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React__default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React__default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React__default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React__default.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React__default.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function BsArrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"},"child":[]}]})(props);
}

function Header({ children, onBackClick, subtitle, title, }) {
    return (React__default.createElement("div", { className: "twp" },
        onBackClick && (React__default.createElement(Button, { variant: "link", size: "none", type: "button", className: "eteg-flex eteg-gap-3 eteg-text-foreground/70 eteg-hover:text-foreground eteg-mb-4 eteg-capitalize text-base eteg-font-bold eteg-font-lato", onClick: () => onBackClick() },
            React__default.createElement(BsArrowLeft, { size: 16 }),
            "Voltar")),
        React__default.createElement("div", { className: "eteg-flex eteg-flex-col sm:eteg-flex-row sm:eteg-justify-between sm:eteg-items-center eteg-gap-4" },
            React__default.createElement("div", null,
                React__default.createElement("h1", { className: "eteg-font-lato eteg-font-semibold eteg-text-[32px] eteg-text-foreground" }, title),
                React__default.createElement("p", { className: "eteg-font-lato eteg-font-semibold eteg-text-sm eteg-text-foreground/65" }, subtitle)),
            children && (React__default.createElement("div", { className: "sm:eteg-max-w-xs eteg-w-full eteg-flex eteg-justify-end" }, children)))));
}

const $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
        useEffect(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ createElement(Comp, _extends$1({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target) flushSync(()=>target.dispatchEvent(event)
    );
}

const $b73a6c6685e72184$export$b04be29aa201d4f5 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends$1({}, props, {
        ref: forwardedRef,
        onMouseDown: (event)=>{
            var _props$onMouseDown;
            (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event); // prevent text selection when double clicking label
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

const labelVariants = cva("eteg-text-sm eteg-font-medium eteg-peer-disabled:cursor-not-allowed eteg-peer-disabled:opacity-70 eteg-font-lato eteg-text-border data-[error=true]:eteg-text-destructive eteg-relative");
const Label = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement($b73a6c6685e72184$export$be92b6f5f03c0fe9, { ref: ref, className: cn(labelVariants(), className), ...props },
    children,
    React.createElement("span", { className: "eteg-text-xl eteg-font-bold eteg-text-destructive eteg-absolute eteg-hidden aria-required:eteg-inline -eteg-top-2 eteg-px-1", "aria-required": props["aria-required"] }, "*"))));
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;

function InputFile({ valueText, label, error, onRemove, className, icon: Icon, ...props }) {
    const inputRef = useRef(null);
    function handleClickText(e) {
        e.preventDefault();
        const { files } = inputRef.current;
        if (files.length === 1) {
            const file = files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                const link = document.createElement("a");
                link.href = url;
                link.download = file.name ? "Arquivo" : "";
                link.target = "_blank";
                link.click();
            }
        }
    }
    return (React__default.createElement("div", { className: "eteg-relative twp" },
        label && (React__default.createElement(Label, { "data-error": !!error, htmlFor: props.name, className: "eteg-block eteg-mb-3" },
            label,
            " ",
            props.required && (React__default.createElement("span", { className: "eteg-text-xl eteg-font-bold eteg-text-destructive eteg-leading-3" }, "*")))),
        React__default.createElement("div", { "data-disabled": props.disabled, "data-error": !!error, className: cn("eteg-h-12 eteg-border eteg-border-input eteg-grid eteg-grid-flow-col eteg-gap-3 eteg-rounded-md eteg-px-5 disabled:eteg-cursor-not-allowed data-[disabled=true]:eteg-bg-muted data-[error=true]:eteg-border-destructive", className) },
            React__default.createElement("button", { className: "eteg-grid eteg-grid-flow-col eteg-items-center eteg-gap-1 eteg-border-none eteg-bg-transparent eteg-text-muted-foreground", onClick: (e) => handleClickText(e), type: "button" },
                Icon && React__default.createElement(Icon, { size: 16 }),
                React__default.createElement("p", { className: "eteg-truncate eteg-text-sm eteg-font-lato" }, valueText || "Nenhum arquivo selecionado")),
            React__default.createElement("input", { className: "eteg-hidden eteg-peer/input", ...props, type: "file", ref: inputRef }),
            React__default.createElement("button", { type: "button", className: "eteg-text-sm eteg-bg-secondary eteg-h-7 eteg-rounded-md eteg-text-secondary-foreground eteg-w-32 eteg-self-center", onClick: (e) => {
                    if (valueText) {
                        e.preventDefault();
                        inputRef.current.value = "";
                        onRemove && onRemove();
                    }
                    else {
                        inputRef.current.click();
                    }
                } }, valueText ? "Remover" : "Selecionar")),
        error && (React__default.createElement("span", { className: "eteg-absolute -eteg-bottom-[18px] eteg-text-xs eteg-text-destructive" }, error))));
}

const InputText = React.forwardRef(({ className, type, label, error, icon: Icon, inputClassName, ...props }, ref) => {
    return (React.createElement("div", { className: cn("eteg-relative twp", className) },
        label && (React.createElement(Label, { "data-error": !!error, htmlFor: props.name, className: "eteg-block eteg-mb-3 peer", "aria-required": !!props.required }, label)),
        React.createElement("div", { className: "eteg-relative eteg-flex eteg-items-center" },
            Icon && (React.createElement(Icon, { size: 18, className: "eteg-absolute eteg-left-4 eteg-text-muted-foreground" })),
            React.createElement("input", { type: type, "data-error": !!error, "data-icon": !!Icon, className: cn("eteg-flex eteg-h-12 eteg-w-full eteg-rounded-md eteg-border eteg-border-input eteg-bg-transparent eteg-px-4 eteg-text-sm placeholder:text-muted-foreground disabled:eteg-cursor-not-allowed disabled:eteg-bg-muted disabled:eteg-text-muted-foreground eteg-text-foreground data-[error=true]:eteg-border-destructive data-[icon=true]:eteg-pl-12 focus:eteg-outline-none", inputClassName), ref: ref, ...props })),
        error && (React.createElement("span", { className: "eteg-absolute -eteg-bottom-[18px] eteg-text-xs eteg-text-destructive" }, error))));
});
InputText.displayName = "InputText";

/* eslint-disable react-refresh/only-export-components */
const TableRoot = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { className: "eteg-relative eteg-w-full eteg-overflow-auto twp" },
    React.createElement("table", { ref: ref, className: cn("eteg-w-full eteg-caption-bottom eteg-text-sm", className), ...props }))));
TableRoot.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (React.createElement("thead", { ref: ref, className: cn("[&_tr]:eteg-border-b [&_tr]:eteg-border-b-table-line eteg-border-t-table-line [&_tr]:eteg-border-t-transparent", className), ...props })));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => (React.createElement("tbody", { ref: ref, className: cn("[&_tr:first-child]:eteg-border-0", className), ...props })));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (React.createElement("tfoot", { ref: ref, className: cn("eteg-border-t eteg-bg-muted/50 eteg-font-medium [&>tr]:last:eteg-border-b-0", className), ...props })));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => (React.createElement("tr", { ref: ref, className: cn("eteg-transition-colors data-[state=selected]:eteg-bg-muted eteg-border-t-table-line eteg-border-t", className), ...props })));
TableRow.displayName = "TableRow";
const TableRowDropDown = React.forwardRef(({ className, isOpen, children, ...props }, ref) => (React.createElement(Table.Row, { className: "eteg-border-t-0" },
    React.createElement(Table.Cell, { className: "eteg-py-0", ...props },
        React.createElement("div", { "data-open": isOpen, className: cn("eteg-grid data-[open=true]:eteg-mb-4 eteg-h-0 eteg-grid-cols-1 eteg-gap-4 eteg-overflow-hidden eteg-rounded-md eteg-bg-table-dropdown eteg-px-8 eteg-py-0 eteg-transition-all data-[open=true]:eteg-h-min data-[open=true]:eteg-py-6 sm:eteg-grid-cols-2 md:eteg-grid-cols-3", className), ref: ref }, children)))));
TableRowDropDown.displayName = "TableRowDropDown";
const TableHead = React.forwardRef(({ className, ...props }, ref) => (React.createElement("th", { ref: ref, className: cn("eteg-py-6 eteg-space-x-4 eteg-text-left eteg-text-sm eteg-text-foreground eteg-align-middle eteg-font-semibold eteg-font-lato [&:has([role=checkbox])]:eteg-pr-0", className), ...props })));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => (React.createElement("td", { ref: ref, className: cn("eteg-py-6 eteg-text-sm eteg-font-lato eteg-text-foreground/80 [&:last-child]:eteg-pr-0 eteg-align-middle eteg-pr-4", className), ...props })));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (React.createElement("caption", { ref: ref, className: cn("eteg-mt-4 eteg-text-sm eteg-text-muted-foreground", className), ...props })));
TableCaption.displayName = "TableCaption";
const Table = {
    Root: TableRoot,
    Header: TableHeader,
    Body: TableBody,
    Footer: TableFooter,
    Head: TableHead,
    Row: TableRow,
    RowDropDown: TableRowDropDown,
    Cell: TableCell,
    Caption: TableCaption,
};

// THIS FILE IS AUTO GENERATED
function FiCheck (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"20 6 9 17 4 12"},"child":[]}]})(props);
}function FiChevronDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"6 9 12 15 18 9"},"child":[]}]})(props);
}function FiChevronLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"15 18 9 12 15 6"},"child":[]}]})(props);
}function FiChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"9 18 15 12 9 6"},"child":[]}]})(props);
}function FiChevronUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"polyline","attr":{"points":"18 15 12 9 6 15"},"child":[]}]})(props);
}function FiMoreHorizontal (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"12","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"19","cy":"12","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"5","cy":"12","r":"1"},"child":[]}]})(props);
}function FiSearch (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"circle","attr":{"cx":"11","cy":"11","r":"8"},"child":[]},{"tag":"line","attr":{"x1":"21","y1":"21","x2":"16.65","y2":"16.65"},"child":[]}]})(props);
}function FiX (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"line","attr":{"x1":"18","y1":"6","x2":"6","y2":"18"},"child":[]},{"tag":"line","attr":{"x1":"6","y1":"6","x2":"18","y2":"18"},"child":[]}]})(props);
}

const Pagination$1 = ({ className, ...props }) => (React.createElement("nav", { role: "navigation", "aria-label": "pagination", className: cn("eteg-mx-auto eteg-flex eteg-w-full eteg-justify-center twp", className), ...props }));
Pagination$1.displayName = "Pagination";
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (React.createElement("ul", { ref: ref, className: cn("eteg-flex eteg-flex-row eteg-items-center eteg-gap-2", className), ...props })));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (React.createElement("li", { ref: ref, className: cn("", className), ...props })));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({ className, isActive, ...props }) => (React.createElement("a", { "aria-current": isActive ? "page" : undefined, "data-active": !!isActive, className: cn(buttonVariants({
        variant: isActive ? "secondary" : "ghost",
    }), "data-[active=true]:eteg-rounded-full eteg-w-6 eteg-h-6 data-[active=false]:eteg-text-muted-foreground eteg-text-xs eteg-font-lato eteg-p-0 eteg-cursor-pointer", className), ...props }));
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({ className, ...props }) => (React.createElement(PaginationLink, { "aria-label": "Go to previous page", className: cn("eteg-gap-1 eteg-pl-2.5", className), ...props },
    React.createElement(FiChevronLeft, { className: "h-4 w-4" })));
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({ className, ...props }) => (React.createElement(PaginationLink, { "aria-label": "Go to next page", className: cn("eteg-gap-1 eteg-pr-2.5", className), ...props },
    React.createElement(FiChevronRight, { className: "eteg-h-4 eteg-w-4" })));
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({ className, ...props }) => (React.createElement("span", { "aria-hidden": true, className: cn("eteg-flex eteg-h-6 eteg-w-6 eteg-items-end eteg-justify-center eteg-text-muted-foreground", className), ...props },
    React.createElement(FiMoreHorizontal, { className: "eteg-text-sm" })));
PaginationEllipsis.displayName = "PaginationEllipsis";

function Pagination({ amountPages, changePage, page, className, }) {
    const nextPage = page + 1 < amountPages ? page + 1 : amountPages;
    const previousPage = page - 1 > 1 ? page - 1 : 1;
    const lastPage = amountPages;
    return (React__default.createElement(Pagination$1, { className: className },
        React__default.createElement(PaginationContent, null,
            React__default.createElement(PaginationItem, null,
                React__default.createElement(PaginationPrevious, { onClick: () => changePage(previousPage) })),
            page > 1 && (React__default.createElement(PaginationItem, null,
                React__default.createElement(PaginationLink, { onClick: () => changePage(1) }, "1"))),
            React__default.createElement(PaginationItem, null,
                React__default.createElement(PaginationLink, { isActive: true }, page)),
            page + 1 < amountPages && (React__default.createElement(PaginationItem, null,
                React__default.createElement(PaginationEllipsis, null))),
            page < amountPages && (React__default.createElement(PaginationLink, { onClick: () => changePage(lastPage) }, lastPage)),
            React__default.createElement(PaginationItem, null,
                React__default.createElement(PaginationNext, { onClick: () => changePage(nextPage) })))));
}

function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}

function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented: checkForDefaultPrevented = true  } = {}) {
    return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
}

function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const Context = /*#__PURE__*/ createContext(defaultContext);
    function Provider(props) {
        const { children: children , ...context } = props; // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = useMemo(()=>context
        , Object.values(context));
        return /*#__PURE__*/ createElement(Context.Provider, {
            value: value
        }, children);
    }
    function useContext$1(consumerName) {
        const context = useContext(Context);
        if (context) return context;
        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + 'Provider';
    return [
        Provider,
        useContext$1
    ];
}
/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    /* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
        const BaseContext = /*#__PURE__*/ createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        function Provider(props) {
            const { scope: scope , children: children , ...context } = props;
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const value = useMemo(()=>context
            , Object.values(context));
            return /*#__PURE__*/ createElement(Context.Provider, {
                value: value
            }, children);
        }
        function useContext$1(consumerName, scope) {
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
            const context = useContext(Context);
            if (context) return context;
            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + 'Provider';
        return [
            Provider,
            useContext$1
        ];
    }
    /* -----------------------------------------------------------------------------------------------
   * createScope
   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ createContext(defaultContext);
        });
        return function useScope(scope) {
            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
            return useMemo(()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                })
            , [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        $c512c27ab02ef895$export$fd42f52fd3ae1109,
        $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/ function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope1 = ()=>{
        const scopeHooks = scopes.map((createScope)=>({
                useScope: createScope(),
                scopeName: createScope.scopeName
            })
        );
        return function useComposedScopes(overrideScopes) {
            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes,
                    ...currentScope
                };
            }, {});
            return useMemo(()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes1
                })
            , [
                nextScopes1
            ]);
        };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
}

// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {
    /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';
    const [createCollectionContext, createCollectionScope] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope: scope , children: children  } = props;
        const ref = React__default.useRef(null);
        const itemMap = React__default.useRef(new Map()).current;
        return /*#__PURE__*/ React__default.createElement(CollectionProviderImpl, {
            scope: scope,
            itemMap: itemMap,
            collectionRef: ref
        }, children);
    };
    /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';
    const CollectionSlot = /*#__PURE__*/ React__default.forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children  } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.collectionRef);
        return /*#__PURE__*/ React__default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
            ref: composedRefs
        }, children);
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';
    const ITEM_DATA_ATTR = 'data-radix-collection-item';
    const CollectionItemSlot = /*#__PURE__*/ React__default.forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children , ...itemData } = props;
        const ref = React__default.useRef(null);
        const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        React__default.useEffect(()=>{
            context.itemMap.set(ref, {
                ref: ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref)
            ;
        });
        return /*#__PURE__*/ React__default.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360, {
            [ITEM_DATA_ATTR]: '',
            ref: composedRefs
        }, children);
    });
    /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {
        const context = useCollectionContext(name + 'CollectionConsumer', scope);
        const getItems = React__default.useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
            );
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}

const $f631663db3294ace$var$DirectionContext = /*#__PURE__*/ createContext(undefined);
/* -----------------------------------------------------------------------------------------------*/ function $f631663db3294ace$export$b39126d51d94e6f3(localDir) {
    const globalDir = useContext($f631663db3294ace$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
    const callbackRef = useRef(callback);
    useEffect(()=>{
        callbackRef.current = callback;
    }); // https://github.com/facebook/react/issues/19240
    return useMemo(()=>(...args)=>{
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        }
    , []);
}

/**
 * Listens for when the escape key is down
 */ function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
    useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') onEscapeKeyDown(event);
        };
        ownerDocument.addEventListener('keydown', handleKeyDown);
        return ()=>ownerDocument.removeEventListener('keydown', handleKeyDown)
        ;
    }, [
        onEscapeKeyDown,
        ownerDocument
    ]);
}

const $5cb92bef7577960e$var$CONTEXT_UPDATE = 'dismissableLayer.update';
const $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = 'dismissableLayer.pointerDownOutside';
const $5cb92bef7577960e$var$FOCUS_OUTSIDE = 'dismissableLayer.focusOutside';
let $5cb92bef7577960e$var$originalBodyPointerEvents;
const $5cb92bef7577960e$var$DismissableLayerContext = /*#__PURE__*/ createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
});
const $5cb92bef7577960e$export$177fb62ff3ec1f22 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    var _node$ownerDocument;
    const { disableOutsidePointerEvents: disableOutsidePointerEvents = false , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , ...layerProps } = props;
    const context = useContext($5cb92bef7577960e$var$DismissableLayerContext);
    const [node1, setNode] = useState(null);
    const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
    const [, force] = useState({});
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setNode(node)
    );
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1); // prettier-ignore
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled); // prettier-ignore
    const index = node1 ? layers.indexOf(node1) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (isFocusInBranch) return;
        onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    $addc16e1bbe58fd0$export$3a72a57244d6e765((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    useEffect(()=>{
        if (!node1) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                $5cb92bef7577960e$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = 'none';
            }
            context.layersWithOutsidePointerEventsDisabled.add(node1);
        }
        context.layers.add(node1);
        $5cb92bef7577960e$var$dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
        };
    }, [
        node1,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    /**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */ useEffect(()=>{
        return ()=>{
            if (!node1) return;
            context.layers.delete(node1);
            context.layersWithOutsidePointerEventsDisabled.delete(node1);
            $5cb92bef7577960e$var$dispatchUpdate();
        };
    }, [
        node1,
        context
    ]);
    useEffect(()=>{
        const handleUpdate = ()=>force({})
        ;
        document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate)
        ;
    }, []);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, layerProps, {
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? 'auto' : 'none' : undefined,
            ...props.style
        },
        onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    }));
});
/* -----------------------------------------------------------------------------------------------*/ /**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */ function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
    const isPointerInsideReactTreeRef = useRef(false);
    const handleClickRef = useRef(()=>{});
    useEffect(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                function handleAndDispatchPointerDownOutsideEvent() {
                    $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                }
                /**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */ if (event.pointerType === 'touch') {
                    ownerDocument.removeEventListener('click', handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
                    ownerDocument.addEventListener('click', handleClickRef.current, {
                        once: true
                    });
                } else handleAndDispatchPointerDownOutsideEvent();
            } else // We need to remove the event listener in case the outside click has been canceled.
            // See: https://github.com/radix-ui/primitives/issues/2171
            ownerDocument.removeEventListener('click', handleClickRef.current);
            isPointerInsideReactTreeRef.current = false;
        };
        /**
     * if this hook executes in a component that mounts via a `pointerdown` event, the event
     * would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
     * this by delaying the event listener registration on the document.
     * This is not React specific, but rather how the DOM works, ie:
     * ```
     * button.addEventListener('pointerdown', () => {
     *   console.log('I will log');
     *   document.addEventListener('pointerdown', () => {
     *     console.log('I will also log');
     *   })
     * });
     */ const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener('pointerdown', handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener('pointerdown', handlePointerDown);
            ownerDocument.removeEventListener('click', handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */ function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
    const isFocusInsideReactTreeRef = useRef(false);
    useEffect(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener('focusin', handleFocus);
        return ()=>ownerDocument.removeEventListener('focusin', handleFocus)
        ;
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true
        ,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
    const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete: discrete  }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail: detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
    else target.dispatchEvent(event);
}

/** Number of components which have requested interest to have focus guards */ let $3db38b7d1fb3fe6a$var$count = 0;
/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */ function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
    useEffect(()=>{
        var _edgeGuards$, _edgeGuards$2;
        const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');
        document.body.insertAdjacentElement('afterbegin', (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
        document.body.insertAdjacentElement('beforeend', (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
        $3db38b7d1fb3fe6a$var$count++;
        return ()=>{
            if ($3db38b7d1fb3fe6a$var$count === 1) document.querySelectorAll('[data-radix-focus-guard]').forEach((node)=>node.remove()
            );
            $3db38b7d1fb3fe6a$var$count--;
        };
    }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
    const element = document.createElement('span');
    element.setAttribute('data-radix-focus-guard', '');
    element.tabIndex = 0;
    element.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none';
    return element;
}

const $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = 'focusScope.autoFocusOnMount';
const $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = 'focusScope.autoFocusOnUnmount';
const $d3863c46a17e8a28$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
const $d3863c46a17e8a28$export$20e40289641fbbb6 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { loop: loop = false , trapped: trapped = false , onMountAutoFocus: onMountAutoFocusProp , onUnmountAutoFocus: onUnmountAutoFocusProp , ...scopeProps } = props;
    const [container1, setContainer] = useState(null);
    const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
    const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
    const lastFocusedElementRef = useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContainer(node)
    );
    const focusScope = useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current; // Takes care of trapping focus if focus is moved outside programmatically for example
    useEffect(()=>{
        if (trapped) {
            function handleFocusIn(event) {
                if (focusScope.paused || !container1) return;
                const target = event.target;
                if (container1.contains(target)) lastFocusedElementRef.current = target;
                else $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            function handleFocusOut(event) {
                if (focusScope.paused || !container1) return;
                const relatedTarget = event.relatedTarget; // A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
                //
                // 1. When the user switches app/tabs/windows/the browser itself loses focus.
                // 2. In Google Chrome, when the focused element is removed from the DOM.
                //
                // We let the browser do its thing here because:
                //
                // 1. The browser already keeps a memory of what's focused for when the page gets refocused.
                // 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
                //    throws the CPU to 100%, so we avoid doing anything for this reason here too.
                if (relatedTarget === null) return; // If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
                // that is outside the container, we move focus to the last valid focused element inside.
                if (!container1.contains(relatedTarget)) $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            } // When the focused element gets removed from the DOM, browsers move focus
            // back to the document.body. In this case, we move focus to the container
            // to keep focus trapped correctly.
            function handleMutations(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations)if (mutation.removedNodes.length > 0) $d3863c46a17e8a28$var$focus(container1);
            }
            document.addEventListener('focusin', handleFocusIn);
            document.addEventListener('focusout', handleFocusOut);
            const mutationObserver = new MutationObserver(handleMutations);
            if (container1) mutationObserver.observe(container1, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener('focusin', handleFocusIn);
                document.removeEventListener('focusout', handleFocusOut);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container1,
        focusScope.paused
    ]);
    useEffect(()=>{
        if (container1) {
            $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
                container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container1.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) $d3863c46a17e8a28$var$focus(container1);
                }
            }
            return ()=>{
                container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus); // We hit a react bug (fixed in v17) with focusing in unmount.
                // We need to delay the focus a little to get around it for now.
                // See: https://github.com/facebook/react/issues/17894
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
                    container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container1.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                        select: true
                    });
                     // we need to remove the listener after we `dispatchEvent`
                    container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container1,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]); // Takes care of looping focus (when tabbing whilst at the edges)
    const handleKeyDown = useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container = event.currentTarget;
            const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
            const hasTabbableElementsInside = first && last; // we can only wrap focus if we have tabbable edges
            if (!hasTabbableElementsInside) {
                if (focusedElement === container) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) $d3863c46a17e8a28$var$focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) $d3863c46a17e8a28$var$focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        tabIndex: -1
    }, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown
    }));
});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */ function $d3863c46a17e8a28$var$focusFirst(candidates, { select: select = false  } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        $d3863c46a17e8a28$var$focus(candidate, {
            select: select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
/**
 * Returns the first and last tabbable elements inside a container.
 */ function $d3863c46a17e8a28$var$getTabbableEdges(container) {
    const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
    const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
    const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */ function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP; // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
            // runtime's understanding of tabbability, so this automatically accounts
            // for any kind of element that could be tabbed to.
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode); // we do not take into account the order of nodes with positive `tabIndex` as it
    // hinders accessibility to have tab order different from visual order.
    return nodes;
}
/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */ function $d3863c46a17e8a28$var$findVisible(elements, container) {
    for (const element of elements){
        // we stop checking if it's hidden at the `container` level (excluding)
        if (!$d3863c46a17e8a28$var$isHidden(element, {
            upTo: container
        })) return element;
    }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo: upTo  }) {
    if (getComputedStyle(node).visibility === 'hidden') return true;
    while(node){
        // we stop at `upTo` (excluding it)
        if (upTo !== undefined && node === upTo) return false;
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement;
    }
    return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && 'select' in element;
}
function $d3863c46a17e8a28$var$focus(element, { select: select = false  } = {}) {
    // only focus if that element is focusable
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement; // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
        element.focus({
            preventScroll: true
        }); // only select if its not the same element, it supports selection and we need to select
        if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select) element.select();
    }
}
/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/ const $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
    /** A stack of focus scopes, with the active one at the top */ let stack = [];
    return {
        add (focusScope) {
            // pause the currently active focus scope (at the top of the stack)
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
             // remove in case it already exists (because we'll re-add it at the top of the stack)
            stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            var _stack$;
            stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
            (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
        }
    };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) updatedArray.splice(index, 1);
    return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
    return items.filter((item)=>item.tagName !== 'A'
    );
}

/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? useLayoutEffect : ()=>{};

const $1746a345f3d73bb7$var$useReactId = React['useId'.toString()] || (()=>undefined
);
let $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
    const [id, setId] = React.useState($1746a345f3d73bb7$var$useReactId()); // React versions older than 18 will have client-side ids only.
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        setId((reactId)=>reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
        );
    }, [
        deterministicId
    ]);
    return (id ? `radix-${id}` : '');
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$2 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = size$1;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = hide$1;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = arrow$2;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = limitShift$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, 'current');
  }
  return {
    name: 'arrow',
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === 'function' ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow$1({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow$1({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};

var index = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

const $7e8f5cd07187803e$export$21b07c8f274aebd5 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { children: children , width: width = 10 , height: height = 5 , ...arrowProps } = props;
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.svg, _extends$1({}, arrowProps, {
        ref: forwardedRef,
        width: width,
        height: height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none"
    }), props.asChild ? children : /*#__PURE__*/ createElement("polygon", {
        points: "0,0 30,0 15,10"
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $7e8f5cd07187803e$export$be92b6f5f03c0fe9 = $7e8f5cd07187803e$export$21b07c8f274aebd5;

function $db6c3485150b8e66$export$1ab7ae714698c4b8(element) {
    const [size, setSize] = useState(undefined);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (element) {
            // provide size as early as possible
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) return;
                 // Since we only observe the one element, we don't need to loop over the
                // array
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ('borderBoxSize' in entry) {
                    const borderSizeEntry = entry['borderBoxSize']; // iron out differences between browsers
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize['inlineSize'];
                    height = borderSize['blockSize'];
                } else {
                    // for browsers that don't support `borderBoxSize`
                    // we calculate it ourselves to get the correct border box.
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width: width,
                    height: height
                });
            });
            resizeObserver.observe(element, {
                box: 'border-box'
            });
            return ()=>resizeObserver.unobserve(element)
            ;
        } else // We only want to reset to `undefined` when the element becomes `null`,
        // not if it changes to another element.
        setSize(undefined);
    }, [
        element
    ]);
    return size;
}

/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$POPPER_NAME = 'Popper';
const [$cf1ac5d9fe0e8206$var$createPopperContext, $cf1ac5d9fe0e8206$export$722aac194ae923] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cf1ac5d9fe0e8206$var$POPPER_NAME);
const [$cf1ac5d9fe0e8206$var$PopperProvider, $cf1ac5d9fe0e8206$var$usePopperContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$POPPER_NAME);
const $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9 = (props)=>{
    const { __scopePopper: __scopePopper , children: children  } = props;
    const [anchor, setAnchor] = useState(null);
    return /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$var$PopperProvider, {
        scope: __scopePopper,
        anchor: anchor,
        onAnchorChange: setAnchor
    }, children);
};
/* -------------------------------------------------------------------------------------------------
 * PopperAnchor
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$ANCHOR_NAME = 'PopperAnchor';
const $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopePopper: __scopePopper , virtualRef: virtualRef , ...anchorProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$ANCHOR_NAME, __scopePopper);
    const ref = useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    useEffect(()=>{
        // Consumer can anchor the popper to something that isn't
        // a DOM node e.g. pointer position, so we override the
        // `anchorRef` with their virtual ref in this case.
        context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, anchorProps, {
        ref: composedRefs
    }));
});
/* -------------------------------------------------------------------------------------------------
 * PopperContent
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$CONTENT_NAME = 'PopperContent';
const [$cf1ac5d9fe0e8206$var$PopperContentProvider, $cf1ac5d9fe0e8206$var$useContentContext] = $cf1ac5d9fe0e8206$var$createPopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME);
const $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$trans, _middlewareData$trans2, _middlewareData$hide;
    const { __scopePopper: __scopePopper , side: side = 'bottom' , sideOffset: sideOffset = 0 , align: align = 'center' , alignOffset: alignOffset = 0 , arrowPadding: arrowPadding = 0 , avoidCollisions: avoidCollisions = true , collisionBoundary: collisionBoundary = [] , collisionPadding: collisionPaddingProp = 0 , sticky: sticky = 'partial' , hideWhenDetached: hideWhenDetached = false , updatePositionStrategy: updatePositionStrategy = 'optimized' , onPlaced: onPlaced , ...contentProps } = props;
    const context = $cf1ac5d9fe0e8206$var$usePopperContext($cf1ac5d9fe0e8206$var$CONTENT_NAME, __scopePopper);
    const [content, setContent] = useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContent(node)
    );
    const [arrow$1, setArrow] = useState(null);
    const arrowSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(arrow$1);
    const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
    const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
    const desiredPlacement = side + (align !== 'center' ? '-' + align : '');
    const collisionPadding = typeof collisionPaddingProp === 'number' ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs: refs , floatingStyles: floatingStyles , placement: placement , isPositioned: isPositioned , middlewareData: middlewareData  } = useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: 'fixed',
        placement: desiredPlacement,
        whileElementsMounted: (...args)=>{
            const cleanup = autoUpdate(...args, {
                animationFrame: updatePositionStrategy === 'always'
            });
            return cleanup;
        },
        elements: {
            reference: context.anchor
        },
        middleware: [
            offset({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && shift({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === 'partial' ? limitShift() : undefined,
                ...detectOverflowOptions
            }),
            avoidCollisions && flip({
                ...detectOverflowOptions
            }),
            size({
                ...detectOverflowOptions,
                apply: ({ elements: elements , rects: rects , availableWidth: availableWidth , availableHeight: availableHeight  })=>{
                    const { width: anchorWidth , height: anchorHeight  } = rects.reference;
                    const contentStyle = elements.floating.style;
                    contentStyle.setProperty('--radix-popper-available-width', `${availableWidth}px`);
                    contentStyle.setProperty('--radix-popper-available-height', `${availableHeight}px`);
                    contentStyle.setProperty('--radix-popper-anchor-width', `${anchorWidth}px`);
                    contentStyle.setProperty('--radix-popper-anchor-height', `${anchorHeight}px`);
                }
            }),
            arrow$1 && arrow({
                element: arrow$1,
                padding: arrowPadding
            }),
            $cf1ac5d9fe0e8206$var$transformOrigin({
                arrowWidth: arrowWidth,
                arrowHeight: arrowHeight
            }),
            hideWhenDetached && hide({
                strategy: 'referenceHidden',
                ...detectOverflowOptions
            })
        ]
    });
    const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
    const handlePlaced = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPlaced);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (isPositioned) handlePlaced === null || handlePlaced === void 0 || handlePlaced();
    }, [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
    const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
    const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = useState();
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    return /*#__PURE__*/ createElement("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : 'translate(0, -200%)',
            // keep off the page when measuring
            minWidth: 'max-content',
            zIndex: contentZIndex,
            ['--radix-popper-transform-origin']: [
                (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
                (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
            ].join(' ')
        } // Floating UI interally calculates logical alignment based the `dir` attribute on
        ,
        dir: props.dir
    }, /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$var$PopperContentProvider, {
        scope: __scopePopper,
        placedSide: placedSide,
        onArrowChange: setArrow,
        arrowX: arrowX,
        arrowY: arrowY,
        shouldHideArrow: cannotCenterArrow
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        "data-side": placedSide,
        "data-align": placedAlign
    }, contentProps, {
        ref: composedRefs,
        style: {
            ...contentProps.style,
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: !isPositioned ? 'none' : undefined,
            // hide the content if using the hide middleware and should be hidden
            opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : undefined
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * PopperArrow
 * -----------------------------------------------------------------------------------------------*/ const $cf1ac5d9fe0e8206$var$ARROW_NAME = 'PopperArrow';
const $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
};
const $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0 = /*#__PURE__*/ forwardRef(function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0(props, forwardedRef) {
    const { __scopePopper: __scopePopper , ...arrowProps } = props;
    const contentContext = $cf1ac5d9fe0e8206$var$useContentContext($cf1ac5d9fe0e8206$var$ARROW_NAME, __scopePopper);
    const baseSide = $cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];
    return(/*#__PURE__*/ // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    createElement("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: 'absolute',
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0'
            }[contentContext.placedSide],
            transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: `rotate(180deg)`,
                left: 'translateY(50%) rotate(-90deg) translateX(50%)'
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? 'hidden' : undefined
        }
    }, /*#__PURE__*/ createElement($7e8f5cd07187803e$export$be92b6f5f03c0fe9, _extends$1({}, arrowProps, {
        ref: forwardedRef,
        style: {
            ...arrowProps.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: 'block'
        }
    }))));
});
/*#__PURE__*/ Object.assign($cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0, {
    displayName: $cf1ac5d9fe0e8206$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $cf1ac5d9fe0e8206$var$isNotNull(value) {
    return value !== null;
}
const $cf1ac5d9fe0e8206$var$transformOrigin = (options)=>({
        name: 'transformOrigin',
        options: options,
        fn (data) {
            var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
            const { placement: placement , rects: rects , middlewareData: middlewareData  } = data;
            const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: '0%',
                center: '50%',
                end: '100%'
            }[placedAlign];
            const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
            const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
            let x = '';
            let y = '';
            if (placedSide === 'bottom') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === 'top') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === 'right') {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === 'left') {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x: x,
                    y: y
                }
            };
        }
    })
;
function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement) {
    const [side, align = 'center'] = placement.split('-');
    return [
        side,
        align
    ];
}
const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = $cf1ac5d9fe0e8206$export$badac9ada3a0bdf9;
const $cf1ac5d9fe0e8206$export$b688253958b8dfe7 = $cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d;
const $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2 = $cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc;
//# sourceMappingURL=index.mjs.map

const $f1701beae083dbae$export$602eac185826482c = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    var _globalThis$document;
    const { container: container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body , ...portalProps } = props;
    return container ? /*#__PURE__*/ ReactDOM__default.createPortal(/*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, portalProps, {
        ref: forwardedRef
    })), container) : null;
});

function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop: prop , defaultProp: defaultProp , onChange: onChange = ()=>{}  }) {
    const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
        defaultProp: defaultProp,
        onChange: onChange
    });
    const isControlled = prop !== undefined;
    const value1 = isControlled ? prop : uncontrolledProp;
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    const setValue = useCallback((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
            if (value !== prop) handleChange(value);
        } else setUncontrolledProp(nextValue);
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value1,
        setValue
    ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp: defaultProp , onChange: onChange  }) {
    const uncontrolledState = useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = useRef(value);
    const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
    useEffect(()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}

function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
    const ref = useRef({
        value: value,
        previous: value
    }); // We compare values before making an update to ensure that
    // a change has been made. This ensures the previous value is
    // persisted correctly between renders.
    return useMemo(()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}

const $ea1ef594cf570d83$export$439d29a4e110a164 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({}, props, {
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...props.style
        }
    }));
});

var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets
        .map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    })
        .filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                }
                catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef(null, function (newValue) {
        return refs.forEach(function (ref) { return assignRef(ref, newValue); });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function () {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function (ref) {
                if (!nextRefs_1.has(ref)) {
                    assignRef(ref, null);
                }
            });
            nextRefs_1.forEach(function (ref) {
                if (!prevRefs_1.has(ref)) {
                    assignRef(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
}

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

var SideCar$1 = function (_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return React.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar$1;
}

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React.forwardRef(function (props, parentRef) {
    var ref = React.useRef(null);
    var _a = React.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return (React.createElement(React.Fragment, null,
        enabled && (React.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (React.cloneElement(React.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef }))) : (React.createElement(Container, __assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName,
};

var getNonce = function () {
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles, isDynamic) {
        React.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
    React.useEffect(function () {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function () {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            }
            else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = React.useMemo(function () { return getGapWidth(gapMode); }, [gapMode]);
    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive && ((availableScroll === 0) || (!noOverscroll ))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((availableScrollTop === 0) || (!noOverscroll ))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React.useRef([]);
    var touchStartRef = React.useRef([0, 0]);
    var activeAxis = React.useRef();
    var id = React.useState(idCounter++)[0];
    var Style = React.useState(function () { return styleSingleton(); })[0];
    var lastProps = React.useRef(props);
    React.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = React.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React.createElement(React.Fragment, null,
        inert ? React.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React.createElement(RemoveScrollBar, { gapMode: "margin" }) : null));
}

var SideCar = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = React.forwardRef(function (props, ref) { return (React.createElement(RemoveScroll, __assign({}, props, { ref: ref, sideCar: SideCar }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;

const $cc7e05a45900e73f$var$OPEN_KEYS = [
    ' ',
    'Enter',
    'ArrowUp',
    'ArrowDown'
];
const $cc7e05a45900e73f$var$SELECTION_KEYS = [
    ' ',
    'Enter'
];
/* -------------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SELECT_NAME = 'Select';
const [$cc7e05a45900e73f$var$Collection, $cc7e05a45900e73f$var$useCollection, $cc7e05a45900e73f$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$createSelectContext, $cc7e05a45900e73f$export$286727a75dc039bd] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cc7e05a45900e73f$var$SELECT_NAME, [
    $cc7e05a45900e73f$var$createCollectionScope,
    $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $cc7e05a45900e73f$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const [$cc7e05a45900e73f$var$SelectProvider, $cc7e05a45900e73f$var$useSelectContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const [$cc7e05a45900e73f$var$SelectNativeOptionsProvider, $cc7e05a45900e73f$var$useSelectNativeOptionsContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$SELECT_NAME);
const $cc7e05a45900e73f$export$ef9b1a59e592288f = (props)=>{
    const { __scopeSelect: __scopeSelect , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange , dir: dir , name: name , autoComplete: autoComplete , disabled: disabled , required: required  } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = useState(null);
    const [valueNode, setValueNode] = useState(null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = useState(false);
    const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const triggerPointerDownPosRef = useRef(null); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = trigger ? Boolean(trigger.closest('form')) : true;
    const [nativeOptionsSet, setNativeOptionsSet] = useState(new Set()); // The native `select` only associates the correct default value if the corresponding
    // `option` is rendered as a child **at the same time** as itself.
    // Because it might take a few renders for our items to gather the information to build
    // the native `option`(s), we generate a key on the `select` to make sure React re-builds it
    // each time the options change.
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value
    ).join(';');
    return /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectProvider, {
        required: required,
        scope: __scopeSelect,
        trigger: trigger,
        onTriggerChange: setTrigger,
        valueNode: valueNode,
        onValueNodeChange: setValueNode,
        valueNodeHasChildren: valueNodeHasChildren,
        onValueNodeHasChildrenChange: setValueNodeHasChildren,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        value: value,
        onValueChange: setValue,
        open: open,
        onOpenChange: setOpen,
        dir: direction,
        triggerPointerDownPosRef: triggerPointerDownPosRef,
        disabled: disabled
    }, /*#__PURE__*/ createElement($cc7e05a45900e73f$var$Collection.Provider, {
        scope: __scopeSelect
    }, /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectNativeOptionsProvider, {
        scope: props.__scopeSelect,
        onNativeOptionAdd: useCallback((option)=>{
            setNativeOptionsSet((prev)=>new Set(prev).add(option)
            );
        }, []),
        onNativeOptionRemove: useCallback((option)=>{
            setNativeOptionsSet((prev)=>{
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
            });
        }, [])
    }, children)), isFormControl ? /*#__PURE__*/ createElement($cc7e05a45900e73f$var$BubbleSelect, {
        key: nativeSelectKey,
        "aria-hidden": true,
        required: required,
        tabIndex: -1,
        name: name,
        autoComplete: autoComplete,
        value: value // enable form autofill
        ,
        onChange: (event)=>setValue(event.target.value)
        ,
        disabled: disabled
    }, value === undefined ? /*#__PURE__*/ createElement("option", {
        value: ""
    }) : null, Array.from(nativeOptionsSet)) : null));
};
/* -------------------------------------------------------------------------------------------------
 * SelectTrigger
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$TRIGGER_NAME = 'SelectTrigger';
const $cc7e05a45900e73f$export$3ac1e88a1c0b9f1 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , disabled: disabled = false , ...triggerProps } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onTriggerChange);
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = $cc7e05a45900e73f$var$useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled
        );
        const currentItem = enabledItems.find((item)=>item.value === context.value
        );
        const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem !== undefined) context.onValueChange(nextItem.value);
    });
    const handleOpen = ()=>{
        if (!isDisabled) {
            context.onOpenChange(true); // reset typeahead when we open
            resetTypeahead();
        }
    };
    return /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends$1({
        asChild: true
    }, popperScope), /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$1({
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? 'open' : 'closed',
        disabled: isDisabled,
        "data-disabled": isDisabled ? '' : undefined,
        "data-placeholder": $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? '' : undefined
    }, triggerProps, {
        ref: composedRefs // Enable compatibility with native label or custom `Label` "click" for Safari:
        ,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onClick, (event)=>{
            // Whilst browsers generally have no issue focusing the trigger when clicking
            // on a label, Safari seems to struggle with the fact that there's no `onClick`.
            // We force `focus` in this case. Note: this doesn't create any other side-effect
            // because we are preventing default in `onPointerDown` so effectively
            // this only runs for a label "click"
            event.currentTarget.focus();
        }),
        onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onPointerDown, (event)=>{
            // prevent implicit pointer capture
            // https://www.w3.org/TR/pointerevents3/#implicit-pointer-capture
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
             // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            if (event.button === 0 && event.ctrlKey === false) {
                handleOpen();
                context.triggerPointerDownPosRef.current = {
                    x: Math.round(event.pageX),
                    y: Math.round(event.pageY)
                }; // prevent trigger from stealing focus from the active item after opening.
                event.preventDefault();
            }
        }),
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(triggerProps.onKeyDown, (event)=>{
            const isTypingAhead = searchRef.current !== '';
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
            if (isTypingAhead && event.key === ' ') return;
            if ($cc7e05a45900e73f$var$OPEN_KEYS.includes(event.key)) {
                handleOpen();
                event.preventDefault();
            }
        })
    })));
});
/* -------------------------------------------------------------------------------------------------
 * SelectValue
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$VALUE_NAME = 'SelectValue';
const $cc7e05a45900e73f$export$e288731fd71264f0 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    // We ignore `className` and `style` as this part shouldn't be styled.
    const { __scopeSelect: __scopeSelect , className: className , style: style , children: children , placeholder: placeholder = '' , ...valueProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange: onValueNodeHasChildrenChange  } = context;
    const hasChildren = children !== undefined;
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onValueNodeChange);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        onValueNodeHasChildrenChange(hasChildren);
    }, [
        onValueNodeHasChildrenChange,
        hasChildren
    ]);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({}, valueProps, {
        ref: composedRefs // we don't want events from the portalled `SelectValue` children to bubble
        ,
        style: {
            pointerEvents: 'none'
        }
    }), $cc7e05a45900e73f$var$shouldShowPlaceholder(context.value) ? /*#__PURE__*/ createElement(Fragment, null, placeholder) : children);
});
const $cc7e05a45900e73f$export$99b400cabb58c515 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , children: children , ...iconProps } = props;
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({
        "aria-hidden": true
    }, iconProps, {
        ref: forwardedRef
    }), children || '▼');
});
const $cc7e05a45900e73f$export$b2af6c9944296213 = (props)=>{
    return /*#__PURE__*/ createElement($f1701beae083dbae$export$602eac185826482c, _extends$1({
        asChild: true
    }, props));
};
/* -------------------------------------------------------------------------------------------------
 * SelectContent
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$CONTENT_NAME = 'SelectContent';
const $cc7e05a45900e73f$export$c973a4b3cb86a03d = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = useState(); // setting the fragment in `useLayoutEffect` as `DocumentFragment` doesn't exist on the server
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
        const frag = fragment;
        return frag ? /*#__PURE__*/ createPortal(/*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectContentProvider, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ createElement($cc7e05a45900e73f$var$Collection.Slot, {
            scope: props.__scopeSelect
        }, /*#__PURE__*/ createElement("div", null, props.children))), frag) : null;
    }
    return /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectContentImpl, _extends$1({}, props, {
        ref: forwardedRef
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SelectContentImpl
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$CONTENT_MARGIN = 10;
const [$cc7e05a45900e73f$var$SelectContentProvider, $cc7e05a45900e73f$var$useSelectContentContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME);
const $cc7e05a45900e73f$var$SelectContentImpl = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , position: position = 'item-aligned' , onCloseAutoFocus: onCloseAutoFocus , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , side: //
    // PopperContent props
    side , sideOffset: sideOffset , align: align , alignOffset: alignOffset , arrowPadding: arrowPadding , collisionBoundary: collisionBoundary , collisionPadding: collisionPadding , sticky: sticky , hideWhenDetached: hideWhenDetached , avoidCollisions: avoidCollisions , //
    ...contentProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const [content, setContent] = useState(null);
    const [viewport, setViewport] = useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContent(node)
    );
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemText, setSelectedItemText] = useState(null);
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = useState(false);
    const firstValidItemFoundRef = useRef(false); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    useEffect(()=>{
        if (content) return hideOthers(content);
    }, [
        content
    ]); // Make sure the whole tree has focus guards as our `Select` may be
    // the last element in the DOM (because of the `Portal`)
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    const focusFirst = useCallback((candidates)=>{
        const [firstItem, ...restItems] = getItems().map((item)=>item.ref.current
        );
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates){
            // if focus is already where we want to go, we don't want to keep going through the candidates
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
            candidate === null || candidate === void 0 || candidate.scrollIntoView({
                block: 'nearest'
            }); // viewport might have padding so scroll to its edges when focusing first/last items.
            if (candidate === firstItem && viewport) viewport.scrollTop = 0;
            if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
            candidate === null || candidate === void 0 || candidate.focus();
            if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
    }, [
        getItems,
        viewport
    ]);
    const focusSelectedItem = useCallback(()=>focusFirst([
            selectedItem,
            content
        ])
    , [
        focusFirst,
        selectedItem,
        content
    ]); // Since this is not dependent on layout, we want to ensure this runs at the same time as
    // other effects across components. Hence why we don't call `focusSelectedItem` inside `position`.
    useEffect(()=>{
        if (isPositioned) focusSelectedItem();
    }, [
        isPositioned,
        focusSelectedItem
    ]); // prevent selecting items on `pointerup` in some cases after opening from `pointerdown`
    // and close on `pointerup` outside.
    const { onOpenChange: onOpenChange , triggerPointerDownPosRef: triggerPointerDownPosRef  } = context;
    useEffect(()=>{
        if (content) {
            let pointerMoveDelta = {
                x: 0,
                y: 0
            };
            const handlePointerMove = (event)=>{
                var _triggerPointerDownPo, _triggerPointerDownPo2, _triggerPointerDownPo3, _triggerPointerDownPo4;
                pointerMoveDelta = {
                    x: Math.abs(Math.round(event.pageX) - ((_triggerPointerDownPo = (_triggerPointerDownPo2 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo2 === void 0 ? void 0 : _triggerPointerDownPo2.x) !== null && _triggerPointerDownPo !== void 0 ? _triggerPointerDownPo : 0)),
                    y: Math.abs(Math.round(event.pageY) - ((_triggerPointerDownPo3 = (_triggerPointerDownPo4 = triggerPointerDownPosRef.current) === null || _triggerPointerDownPo4 === void 0 ? void 0 : _triggerPointerDownPo4.y) !== null && _triggerPointerDownPo3 !== void 0 ? _triggerPointerDownPo3 : 0))
                };
            };
            const handlePointerUp = (event)=>{
                // If the pointer hasn't moved by a certain threshold then we prevent selecting item on `pointerup`.
                if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
                else // otherwise, if the event was outside the content, close.
                if (!content.contains(event.target)) onOpenChange(false);
                document.removeEventListener('pointermove', handlePointerMove);
                triggerPointerDownPosRef.current = null;
            };
            if (triggerPointerDownPosRef.current !== null) {
                document.addEventListener('pointermove', handlePointerMove);
                document.addEventListener('pointerup', handlePointerUp, {
                    capture: true,
                    once: true
                });
            }
            return ()=>{
                document.removeEventListener('pointermove', handlePointerMove);
                document.removeEventListener('pointerup', handlePointerUp, {
                    capture: true
                });
            };
        }
    }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    useEffect(()=>{
        const close = ()=>onOpenChange(false)
        ;
        window.addEventListener('blur', close);
        window.addEventListener('resize', close);
        return ()=>{
            window.removeEventListener('blur', close);
            window.removeEventListener('resize', close);
        };
    }, [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = $cc7e05a45900e73f$var$useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled
        );
        const currentItem = enabledItems.find((item)=>item.ref.current === document.activeElement
        );
        const nextItem = $cc7e05a45900e73f$var$findNextItem(enabledItems, search, currentItem);
        if (nextItem) /**
       * Imperative focus during keydown is risky so we prevent React's batching updates
       * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
       */ setTimeout(()=>nextItem.ref.current.focus()
        );
    });
    const itemRefCallback = useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItem(node);
            if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
    }, [
        context.value
    ]);
    const handleItemLeave = useCallback(()=>content === null || content === void 0 ? void 0 : content.focus()
    , [
        content
    ]);
    const itemTextRefCallback = useCallback((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== undefined && context.value === value;
        if (isSelectedItem || isFirstValidItem) setSelectedItemText(node);
    }, [
        context.value
    ]);
    const SelectPosition = position === 'popper' ? $cc7e05a45900e73f$var$SelectPopperPosition : $cc7e05a45900e73f$var$SelectItemAlignedPosition; // Silently ignore props that are not supported by `SelectItemAlignedPosition`
    const popperContentProps = SelectPosition === $cc7e05a45900e73f$var$SelectPopperPosition ? {
        side: side,
        sideOffset: sideOffset,
        align: align,
        alignOffset: alignOffset,
        arrowPadding: arrowPadding,
        collisionBoundary: collisionBoundary,
        collisionPadding: collisionPadding,
        sticky: sticky,
        hideWhenDetached: hideWhenDetached,
        avoidCollisions: avoidCollisions
    } : {};
    return /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectContentProvider, {
        scope: __scopeSelect,
        content: content,
        viewport: viewport,
        onViewportChange: setViewport,
        itemRefCallback: itemRefCallback,
        selectedItem: selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback: itemTextRefCallback,
        focusSelectedItem: focusSelectedItem,
        selectedItemText: selectedItemText,
        position: position,
        isPositioned: isPositioned,
        searchRef: searchRef
    }, /*#__PURE__*/ createElement(ReactRemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true
    }, /*#__PURE__*/ createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true // we make sure we're not trapping once it's been closed
        ,
        trapped: context.open,
        onMountAutoFocus: (event)=>{
            // we prevent open autofocus because we manually focus the selected item
            event.preventDefault();
        },
        onUnmountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onCloseAutoFocus, (event)=>{
            var _context$trigger;
            (_context$trigger = context.trigger) === null || _context$trigger === void 0 || _context$trigger.focus({
                preventScroll: true
            });
            event.preventDefault();
        })
    }, /*#__PURE__*/ createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
        asChild: true,
        disableOutsidePointerEvents: true,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside // When focus is trapped, a focusout event may still happen.
        ,
        onFocusOutside: (event)=>event.preventDefault()
        ,
        onDismiss: ()=>context.onOpenChange(false)
    }, /*#__PURE__*/ createElement(SelectPosition, _extends$1({
        role: "listbox",
        id: context.contentId,
        "data-state": context.open ? 'open' : 'closed',
        dir: context.dir,
        onContextMenu: (event)=>event.preventDefault()
    }, contentProps, popperContentProps, {
        onPlaced: ()=>setIsPositioned(true)
        ,
        ref: composedRefs,
        style: {
            // flex layout so we can place the scroll buttons properly
            display: 'flex',
            flexDirection: 'column',
            // reset the outline by default as the content MAY get focused
            outline: 'none',
            ...contentProps.style
        },
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event)=>{
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey; // select should not be navigated using tab key so we prevent it
            if (event.key === 'Tab') event.preventDefault();
            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
            if ([
                'ArrowUp',
                'ArrowDown',
                'Home',
                'End'
            ].includes(event.key)) {
                const items = getItems().filter((item)=>!item.disabled
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if ([
                    'ArrowUp',
                    'End'
                ].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
                if ([
                    'ArrowUp',
                    'ArrowDown'
                ].includes(event.key)) {
                    const currentElement = event.target;
                    const currentIndex = candidateNodes.indexOf(currentElement);
                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>focusFirst(candidateNodes)
                );
                event.preventDefault();
            }
        })
    }))))));
});
const $cc7e05a45900e73f$var$SelectItemAlignedPosition = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , onPlaced: onPlaced , ...popperProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = useState(null);
    const [content, setContent] = useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setContent(node)
    );
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = useRef(false);
    const shouldRepositionRef = useRef(true);
    const { viewport: viewport , selectedItem: selectedItem , selectedItemText: selectedItemText , focusSelectedItem: focusSelectedItem  } = contentContext;
    const position = useCallback(()=>{
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
            const triggerRect = context.trigger.getBoundingClientRect(); // -----------------------------------------------------------------------------------------
            //  Horizontal positioning
            // -----------------------------------------------------------------------------------------
            const contentRect = content.getBoundingClientRect();
            const valueNodeRect = context.valueNode.getBoundingClientRect();
            const itemTextRect = selectedItemText.getBoundingClientRect();
            if (context.dir !== 'rtl') {
                const itemTextOffset = itemTextRect.left - contentRect.left;
                const left = valueNodeRect.left - itemTextOffset;
                const leftDelta = triggerRect.left - left;
                const minContentWidth = triggerRect.width + leftDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const rightEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
                const clampedLeft = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(left, [
                    $cc7e05a45900e73f$var$CONTENT_MARGIN,
                    rightEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.left = clampedLeft + 'px';
            } else {
                const itemTextOffset = contentRect.right - itemTextRect.right;
                const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                const rightDelta = window.innerWidth - triggerRect.right - right;
                const minContentWidth = triggerRect.width + rightDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const leftEdge = window.innerWidth - $cc7e05a45900e73f$var$CONTENT_MARGIN;
                const clampedRight = $ae6933e535247d3d$export$7d15b64cf5a3a4c4(right, [
                    $cc7e05a45900e73f$var$CONTENT_MARGIN,
                    leftEdge - contentWidth
                ]);
                contentWrapper.style.minWidth = minContentWidth + 'px';
                contentWrapper.style.right = clampedRight + 'px';
            } // -----------------------------------------------------------------------------------------
            // Vertical positioning
            // -----------------------------------------------------------------------------------------
            const items = getItems();
            const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
            const itemsHeight = viewport.scrollHeight;
            const contentStyles = window.getComputedStyle(content);
            const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
            const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
            const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
            const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
            const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth; // prettier-ignore
            const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
            const viewportStyles = window.getComputedStyle(viewport);
            const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
            const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
            const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - $cc7e05a45900e73f$var$CONTENT_MARGIN;
            const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
            const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
            const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
            const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
            const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
            const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
            if (willAlignWithoutTopOverflow) {
                const isLastItem = selectedItem === items[items.length - 1].ref.current;
                contentWrapper.style.bottom = "0px";
                const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                contentWrapper.style.height = height + 'px';
            } else {
                const isFirstItem = selectedItem === items[0].ref.current;
                contentWrapper.style.top = "0px";
                const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                contentWrapper.style.height = height + 'px';
                viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
            }
            contentWrapper.style.margin = `${$cc7e05a45900e73f$var$CONTENT_MARGIN}px 0`;
            contentWrapper.style.minHeight = minContentHeight + 'px';
            contentWrapper.style.maxHeight = availableHeight + 'px'; // -----------------------------------------------------------------------------------------
            onPlaced === null || onPlaced === void 0 || onPlaced(); // we don't want the initial scroll position adjustment to trigger "expand on scroll"
            // so we explicitly turn it on only after they've registered.
            requestAnimationFrame(()=>shouldExpandOnScrollRef.current = true
            );
        }
    }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>position()
    , [
        position
    ]); // copy z-index from content to wrapper
    const [contentZIndex, setContentZIndex] = useState();
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]); // When the viewport becomes scrollable at the top, the scroll up button will mount.
    // Because it is part of the normal flow, it will push down the viewport, thus throwing our
    // trigger => selectedItem alignment off by the amount the viewport was pushed down.
    // We wait for this to happen and then re-run the positining logic one more time to account for it.
    const handleScrollButtonChange = useCallback((node)=>{
        if (node && shouldRepositionRef.current === true) {
            position();
            focusSelectedItem === null || focusSelectedItem === void 0 || focusSelectedItem();
            shouldRepositionRef.current = false;
        }
    }, [
        position,
        focusSelectedItem
    ]);
    return /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper: contentWrapper,
        shouldExpandOnScrollRef: shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange
    }, /*#__PURE__*/ createElement("div", {
        ref: setContentWrapper,
        style: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: contentZIndex
        }
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({}, popperProps, {
        ref: composedRefs,
        style: {
            // When we get the height of the content, it includes borders. If we were to set
            // the height without having `boxSizing: 'border-box'` it would be too big.
            boxSizing: 'border-box',
            // We need to ensure the content doesn't get taller than the wrapper
            maxHeight: '100%',
            ...popperProps.style
        }
    }))));
});
const $cc7e05a45900e73f$var$SelectPopperPosition = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , align: align = 'start' , collisionPadding: collisionPadding = $cc7e05a45900e73f$var$CONTENT_MARGIN , ...popperProps } = props;
    const popperScope = $cc7e05a45900e73f$var$usePopperScope(__scopeSelect);
    return /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$1({}, popperScope, popperProps, {
        ref: forwardedRef,
        align: align,
        collisionPadding: collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: 'border-box',
            ...popperProps.style,
            '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SelectViewport
 * -----------------------------------------------------------------------------------------------*/ const [$cc7e05a45900e73f$var$SelectViewportProvider, $cc7e05a45900e73f$var$useSelectViewportContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$CONTENT_NAME, {});
const $cc7e05a45900e73f$var$VIEWPORT_NAME = 'SelectViewport';
const $cc7e05a45900e73f$export$9ed6e7b40248d36d = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...viewportProps } = props;
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
    const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$VIEWPORT_NAME, __scopeSelect);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = useRef(0);
    return /*#__PURE__*/ createElement(Fragment, null, /*#__PURE__*/ createElement("style", {
        dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
        }
    }), /*#__PURE__*/ createElement($cc7e05a45900e73f$var$Collection.Slot, {
        scope: __scopeSelect
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        "data-radix-select-viewport": "",
        role: "presentation"
    }, viewportProps, {
        ref: composedRefs,
        style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: 'relative',
            flex: 1,
            overflow: 'auto',
            ...viewportProps.style
        },
        onScroll: $e42e1063c40fb3ef$export$b9ecd428b558ff10(viewportProps.onScroll, (event)=>{
            const viewport = event.currentTarget;
            const { contentWrapper: contentWrapper , shouldExpandOnScrollRef: shouldExpandOnScrollRef  } = viewportContext;
            if (shouldExpandOnScrollRef !== null && shouldExpandOnScrollRef !== void 0 && shouldExpandOnScrollRef.current && contentWrapper) {
                const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                if (scrolledBy > 0) {
                    const availableHeight = window.innerHeight - $cc7e05a45900e73f$var$CONTENT_MARGIN * 2;
                    const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                    const cssHeight = parseFloat(contentWrapper.style.height);
                    const prevHeight = Math.max(cssMinHeight, cssHeight);
                    if (prevHeight < availableHeight) {
                        const nextHeight = prevHeight + scrolledBy;
                        const clampedNextHeight = Math.min(availableHeight, nextHeight);
                        const heightDiff = nextHeight - clampedNextHeight;
                        contentWrapper.style.height = clampedNextHeight + 'px';
                        if (contentWrapper.style.bottom === '0px') {
                            viewport.scrollTop = heightDiff > 0 ? heightDiff : 0; // ensure the content stays pinned to the bottom
                            contentWrapper.style.justifyContent = 'flex-end';
                        }
                    }
                }
            }
            prevScrollTopRef.current = viewport.scrollTop;
        })
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * SelectGroup
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$GROUP_NAME = 'SelectGroup';
const [$cc7e05a45900e73f$var$SelectGroupContextProvider, $cc7e05a45900e73f$var$useSelectGroupContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$GROUP_NAME);
const $cc7e05a45900e73f$export$ee25a334c55de1f4 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...groupProps } = props;
    const groupId = $1746a345f3d73bb7$export$f680877a34711e37();
    return /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        role: "group",
        "aria-labelledby": groupId
    }, groupProps, {
        ref: forwardedRef
    })));
});
/* -------------------------------------------------------------------------------------------------
 * SelectLabel
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$LABEL_NAME = 'SelectLabel';
const $cc7e05a45900e73f$export$f67338d29bd972f8 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...labelProps } = props;
    const groupContext = $cc7e05a45900e73f$var$useSelectGroupContext($cc7e05a45900e73f$var$LABEL_NAME, __scopeSelect);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        id: groupContext.id
    }, labelProps, {
        ref: forwardedRef
    }));
});
/* -------------------------------------------------------------------------------------------------
 * SelectItem
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_NAME = 'SelectItem';
const [$cc7e05a45900e73f$var$SelectItemContextProvider, $cc7e05a45900e73f$var$useSelectItemContext] = $cc7e05a45900e73f$var$createSelectContext($cc7e05a45900e73f$var$ITEM_NAME);
const $cc7e05a45900e73f$export$13ef48a934230896 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , value: value , disabled: disabled = false , textValue: textValueProp , ...itemProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = useState(textValueProp !== null && textValueProp !== void 0 ? textValueProp : '');
    const [isFocused, setIsFocused] = useState(false);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>{
        var _contentContext$itemR;
        return (_contentContext$itemR = contentContext.itemRefCallback) === null || _contentContext$itemR === void 0 ? void 0 : _contentContext$itemR.call(contentContext, node, value, disabled);
    });
    const textId = $1746a345f3d73bb7$export$f680877a34711e37();
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    if (value === '') throw new Error('A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.');
    return /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectItemContextProvider, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textId: textId,
        isSelected: isSelected,
        onItemTextChange: useCallback((node)=>{
            setTextValue((prevTextValue)=>{
                var _node$textContent;
                return prevTextValue || ((_node$textContent = node === null || node === void 0 ? void 0 : node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : '').trim();
            });
        }, [])
    }, /*#__PURE__*/ createElement($cc7e05a45900e73f$var$Collection.ItemSlot, {
        scope: __scopeSelect,
        value: value,
        disabled: disabled,
        textValue: textValue
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? '' : undefined // `isFocused` caveat fixes stuttering in VoiceOver
        ,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? 'checked' : 'unchecked',
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? '' : undefined,
        tabIndex: disabled ? undefined : -1
    }, itemProps, {
        ref: composedRefs,
        onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onBlur, ()=>setIsFocused(false)
        ),
        onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerUp, handleSelect),
        onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerMove, (event)=>{
            if (disabled) {
                var _contentContext$onIte;
                (_contentContext$onIte = contentContext.onItemLeave) === null || _contentContext$onIte === void 0 || _contentContext$onIte.call(contentContext);
            } else // even though safari doesn't support this option, it's acceptable
            // as it only means it might scroll a few pixels when using the pointer.
            event.currentTarget.focus({
                preventScroll: true
            });
        }),
        onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onPointerLeave, (event)=>{
            if (event.currentTarget === document.activeElement) {
                var _contentContext$onIte2;
                (_contentContext$onIte2 = contentContext.onItemLeave) === null || _contentContext$onIte2 === void 0 || _contentContext$onIte2.call(contentContext);
            }
        }),
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onKeyDown, (event)=>{
            var _contentContext$searc;
            const isTypingAhead = ((_contentContext$searc = contentContext.searchRef) === null || _contentContext$searc === void 0 ? void 0 : _contentContext$searc.current) !== '';
            if (isTypingAhead && event.key === ' ') return;
            if ($cc7e05a45900e73f$var$SELECTION_KEYS.includes(event.key)) handleSelect(); // prevent page scroll if using the space key to select an item
            if (event.key === ' ') event.preventDefault();
        })
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * SelectItemText
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$ITEM_TEXT_NAME = 'SelectItemText';
const $cc7e05a45900e73f$export$3572fb0fb821ff49 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    // We ignore `className` and `style` as this part shouldn't be styled.
    const { __scopeSelect: __scopeSelect , className: className , style: style , ...itemTextProps } = props;
    const context = $cc7e05a45900e73f$var$useSelectContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = $cc7e05a45900e73f$var$useSelectItemContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = $cc7e05a45900e73f$var$useSelectNativeOptionsContext($cc7e05a45900e73f$var$ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setItemTextNode(node)
    , itemContext.onItemTextChange, (node)=>{
        var _contentContext$itemT;
        return (_contentContext$itemT = contentContext.itemTextRefCallback) === null || _contentContext$itemT === void 0 ? void 0 : _contentContext$itemT.call(contentContext, node, itemContext.value, itemContext.disabled);
    });
    const textContent = itemTextNode === null || itemTextNode === void 0 ? void 0 : itemTextNode.textContent;
    const nativeOption = useMemo(()=>/*#__PURE__*/ createElement("option", {
            key: itemContext.value,
            value: itemContext.value,
            disabled: itemContext.disabled
        }, textContent)
    , [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd: onNativeOptionAdd , onNativeOptionRemove: onNativeOptionRemove  } = nativeOptionsContext;
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        onNativeOptionAdd(nativeOption);
        return ()=>onNativeOptionRemove(nativeOption)
        ;
    }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /*#__PURE__*/ createElement(Fragment, null, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({
        id: itemContext.textId
    }, itemTextProps, {
        ref: composedRefs
    })), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? /*#__PURE__*/ createPortal(itemTextProps.children, context.valueNode) : null);
});
/* -------------------------------------------------------------------------------------------------
 * SelectScrollUpButton
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME = 'SelectScrollUpButton';
const $cc7e05a45900e73f$export$d8117927658af6d7 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const [canScrollUp1, setCanScrollUp] = useState(false);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            const viewport = contentContext.viewport;
            function handleScroll() {
                const canScrollUp = viewport.scrollTop > 0;
                setCanScrollUp(canScrollUp);
            }
            handleScroll();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollUp1 ? /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends$1({}, props, {
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport: viewport , selectedItem: selectedItem  } = contentContext;
            if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
    })) : null;
});
/* -------------------------------------------------------------------------------------------------
 * SelectScrollDownButton
 * -----------------------------------------------------------------------------------------------*/ const $cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME = 'SelectScrollDownButton';
const $cc7e05a45900e73f$export$ff951e476c12189 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = $cc7e05a45900e73f$var$useSelectViewportContext($cc7e05a45900e73f$var$SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const [canScrollDown1, setCanScrollDown] = useState(false);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, viewportContext.onScrollButtonChange);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            const viewport = contentContext.viewport;
            function handleScroll() {
                const maxScroll = viewport.scrollHeight - viewport.clientHeight; // we use Math.ceil here because if the UI is zoomed-in
                // `scrollTop` is not always reported as an integer
                const canScrollDown = Math.ceil(viewport.scrollTop) < maxScroll;
                setCanScrollDown(canScrollDown);
            }
            handleScroll();
            viewport.addEventListener('scroll', handleScroll);
            return ()=>viewport.removeEventListener('scroll', handleScroll)
            ;
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollDown1 ? /*#__PURE__*/ createElement($cc7e05a45900e73f$var$SelectScrollButtonImpl, _extends$1({}, props, {
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport: viewport , selectedItem: selectedItem  } = contentContext;
            if (viewport && selectedItem) viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
    })) : null;
});
const $cc7e05a45900e73f$var$SelectScrollButtonImpl = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , onAutoScroll: onAutoScroll , ...scrollIndicatorProps } = props;
    const contentContext = $cc7e05a45900e73f$var$useSelectContentContext('SelectScrollButton', __scopeSelect);
    const autoScrollTimerRef = useRef(null);
    const getItems = $cc7e05a45900e73f$var$useCollection(__scopeSelect);
    const clearAutoScrollTimer = useCallback(()=>{
        if (autoScrollTimerRef.current !== null) {
            window.clearInterval(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
        }
    }, []);
    useEffect(()=>{
        return ()=>clearAutoScrollTimer()
        ;
    }, [
        clearAutoScrollTimer
    ]); // When the viewport becomes scrollable on either side, the relevant scroll button will mount.
    // Because it is part of the normal flow, it will push down (top button) or shrink (bottom button)
    // the viewport, potentially causing the active item to now be partially out of view.
    // We re-run the `scrollIntoView` logic to make sure it stays within the viewport.
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        var _activeItem$ref$curre;
        const activeItem = getItems().find((item)=>item.ref.current === document.activeElement
        );
        activeItem === null || activeItem === void 0 || (_activeItem$ref$curre = activeItem.ref.current) === null || _activeItem$ref$curre === void 0 || _activeItem$ref$curre.scrollIntoView({
            block: 'nearest'
        });
    }, [
        getItems
    ]);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        "aria-hidden": true
    }, scrollIndicatorProps, {
        ref: forwardedRef,
        style: {
            flexShrink: 0,
            ...scrollIndicatorProps.style
        },
        onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerDown, ()=>{
            if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }),
        onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerMove, ()=>{
            var _contentContext$onIte3;
            (_contentContext$onIte3 = contentContext.onItemLeave) === null || _contentContext$onIte3 === void 0 || _contentContext$onIte3.call(contentContext);
            if (autoScrollTimerRef.current === null) autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }),
        onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(scrollIndicatorProps.onPointerLeave, ()=>{
            clearAutoScrollTimer();
        })
    }));
});
const $cc7e05a45900e73f$export$eba4b1df07cb1d3 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeSelect: __scopeSelect , ...separatorProps } = props;
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        "aria-hidden": true
    }, separatorProps, {
        ref: forwardedRef
    }));
});
/* -----------------------------------------------------------------------------------------------*/ function $cc7e05a45900e73f$var$shouldShowPlaceholder(value) {
    return value === '' || value === undefined;
}
const $cc7e05a45900e73f$var$BubbleSelect = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { value: value , ...selectProps } = props;
    const ref = useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
    const prevValue = $010c2913dbd2fe3d$export$5cae361ad82dce8b(value); // Bubble value change to parents (e.g form change event)
    useEffect(()=>{
        const select = ref.current;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, 'value');
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event('change', {
                bubbles: true
            });
            setValue.call(select, value);
            select.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    /**
   * We purposefully use a `select` here to support form autofill as much
   * as possible.
   *
   * We purposefully do not add the `value` attribute here to allow the value
   * to be set programatically and bubble to any parent form `onChange` event.
   * Adding the `value` will cause React to consider the programatic
   * dispatch a duplicate and it will get swallowed.
   *
   * We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
   * won't work otherwise.
   */ return /*#__PURE__*/ createElement($ea1ef594cf570d83$export$439d29a4e110a164, {
        asChild: true
    }, /*#__PURE__*/ createElement("select", _extends$1({}, selectProps, {
        ref: composedRefs,
        defaultValue: value
    })));
});
$cc7e05a45900e73f$var$BubbleSelect.displayName = 'BubbleSelect';
function $cc7e05a45900e73f$var$useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onSearchChange);
    const searchRef = useRef('');
    const timerRef = useRef(0);
    const handleTypeaheadSearch = useCallback((key)=>{
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current); // Reset `searchRef` 1 second after it was last updated
            if (value !== '') timerRef.current = window.setTimeout(()=>updateSearch('')
            , 1000);
        })(search);
    }, [
        handleSearchChange
    ]);
    const resetTypeahead = useCallback(()=>{
        searchRef.current = '';
        window.clearTimeout(timerRef.current);
    }, []);
    useEffect(()=>{
        return ()=>window.clearTimeout(timerRef.current)
        ;
    }, []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
/**
 * This is the "meat" of the typeahead matching logic. It takes in a list of items,
 * the search and the current item, and returns the next item (or `undefined`).
 *
 * We normalize the search because if a user has repeatedly pressed a character,
 * we want the exact same behavior as if we only had that one character
 * (ie. cycle through items starting with that character)
 *
 * We also reorder the items by wrapping the array around the current item.
 * This is so we always look forward from the current item, and picking the first
 * item will always be the correct one.
 *
 * Finally, if the normalized search is exactly one character, we exclude the
 * current item from the values because otherwise it would be the first to match always
 * and focus would never move. This is as opposed to the regular case, where we
 * don't want focus to move if the current item still matches.
 */ function $cc7e05a45900e73f$var$findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = $cc7e05a45900e73f$var$wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem
    );
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextItem !== currentItem ? nextItem : undefined;
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $cc7e05a45900e73f$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = $cc7e05a45900e73f$export$ef9b1a59e592288f;
const $cc7e05a45900e73f$export$41fb9f06171c75f4 = $cc7e05a45900e73f$export$3ac1e88a1c0b9f1;
const $cc7e05a45900e73f$export$4c8d1a57a761ef94 = $cc7e05a45900e73f$export$e288731fd71264f0;
const $cc7e05a45900e73f$export$f04a61298a47a40f = $cc7e05a45900e73f$export$99b400cabb58c515;
const $cc7e05a45900e73f$export$602eac185826482c = $cc7e05a45900e73f$export$b2af6c9944296213;
const $cc7e05a45900e73f$export$7c6e2c02157bb7d2 = $cc7e05a45900e73f$export$c973a4b3cb86a03d;
const $cc7e05a45900e73f$export$d5c6c08dc2d3ca7 = $cc7e05a45900e73f$export$9ed6e7b40248d36d;
const $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4 = $cc7e05a45900e73f$export$ee25a334c55de1f4;
const $cc7e05a45900e73f$export$b04be29aa201d4f5 = $cc7e05a45900e73f$export$f67338d29bd972f8;
const $cc7e05a45900e73f$export$6d08773d2e66f8f2 = $cc7e05a45900e73f$export$13ef48a934230896;
const $cc7e05a45900e73f$export$d6e5bf9c43ea9319 = $cc7e05a45900e73f$export$3572fb0fb821ff49;
const $cc7e05a45900e73f$export$2f60d3ec9ad468f2 = $cc7e05a45900e73f$export$d8117927658af6d7;
const $cc7e05a45900e73f$export$bf1aedc3039c8d63 = $cc7e05a45900e73f$export$ff951e476c12189;
const $cc7e05a45900e73f$export$1ff3c3f08ae963c0 = $cc7e05a45900e73f$export$eba4b1df07cb1d3;

function Skeleton({ className, ...props }) {
    return (React__default.createElement("div", { className: cn("eteg-animate-pulse eteg-rounded-md eteg-bg-input/30 eteg-h-4", className), ...props }));
}

const SelectRoot$1 = $cc7e05a45900e73f$export$be92b6f5f03c0fe9;
const SelectGroup = $cc7e05a45900e73f$export$eb2fcfdbd7ba97d4;
const SelectValue = $cc7e05a45900e73f$export$4c8d1a57a761ef94;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement($cc7e05a45900e73f$export$41fb9f06171c75f4, { ref: ref, className: cn("eteg-flex eteg-h-12 eteg-w-full eteg-items-center eteg-justify-between eteg-rounded-md eteg-border eteg-border-input eteg-bg-transparent eteg-px-3 eteg-py-2 eteg-text-sm placeholder:eteg-text-muted-foreground eteg-text-secondary focus:eteg-outline-none disabled:eteg-cursor-not-allowed disabled:eteg-bg-muted [&>span]:eteg-line-clamp-1 font-inter hover:eteg-filter-none eteg-normal-case twp", className), ...props },
    children,
    React.createElement($cc7e05a45900e73f$export$f04a61298a47a40f, { asChild: true },
        React.createElement(FiChevronDown, { className: "eteg-h-4 eteg-w-4 eteg-opacity-50" })))));
SelectTrigger.displayName = $cc7e05a45900e73f$export$41fb9f06171c75f4.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (React.createElement($cc7e05a45900e73f$export$2f60d3ec9ad468f2, { ref: ref, className: cn("eteg-flex eteg-cursor-default eteg-items-center eteg-justify-center eteg-py-1", className), ...props },
    React.createElement(FiChevronUp, { className: "eteg-h-4 eteg-w-4" }))));
SelectScrollUpButton.displayName = $cc7e05a45900e73f$export$2f60d3ec9ad468f2.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (React.createElement($cc7e05a45900e73f$export$bf1aedc3039c8d63, { ref: ref, className: cn("eteg-flex eteg-cursor-default eteg-items-center eteg-justify-center eteg-py-1", className), ...props },
    React.createElement(FiChevronDown, { className: "eteg-h-4 eteg-w-4" }))));
SelectScrollDownButton.displayName =
    $cc7e05a45900e73f$export$bf1aedc3039c8d63.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (React.createElement($cc7e05a45900e73f$export$602eac185826482c, null,
    React.createElement($cc7e05a45900e73f$export$7c6e2c02157bb7d2, { ref: ref, className: cn("eteg-relative eteg-z-50 eteg-max-h-96 eteg-min-w-[8rem] eteg-overflow-hidden eteg-rounded-md eteg-border eteg-border-input eteg-bg-popover eteg-text-popover-foreground eteg-shadow-md data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0 data-[state=closed]:eteg-zoom-out-95 data-[state=open]:eteg-zoom-in-95 data-[side=bottom]:eteg-slide-in-from-top-2 data-[side=left]:eteg-slide-in-from-right-2 data-[side=right]:eteg-slide-in-from-left-2 data-[side=top]:eteg-slide-in-from-bottom-2 twp", position === "popper" &&
            "data-[side=bottom]:eteg-translate-y-1 data-[side=left]:eteg--translate-x-1 data-[side=right]:eteg-translate-x-1 data-[side=top]:eteg--translate-y-1", className), position: position, ...props },
        React.createElement(SelectScrollUpButton, null),
        React.createElement($cc7e05a45900e73f$export$d5c6c08dc2d3ca7, { className: cn("eteg-p-1", position === "popper" &&
                "eteg-h-[var(--radix-select-trigger-height)] eteg-w-full eteg-min-w-[var(--radix-select-trigger-width)]") }, children),
        React.createElement(SelectScrollDownButton, null)))));
SelectContent.displayName = $cc7e05a45900e73f$export$7c6e2c02157bb7d2.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (React.createElement($cc7e05a45900e73f$export$b04be29aa201d4f5, { ref: ref, className: cn("eteg-py-1.5 eteg-pl-8 eteg-pr-2 eteg-text-sm eteg-font-semibold", className), ...props })));
SelectLabel.displayName = $cc7e05a45900e73f$export$b04be29aa201d4f5.displayName;
const SelectItem = React.forwardRef(({ className, children, selected, ...props }, ref) => (React.createElement($cc7e05a45900e73f$export$6d08773d2e66f8f2, { ref: ref, "data-selected": !!selected, className: cn("eteg-relative eteg-flex eteg-w-full eteg-cursor-default eteg-select-none eteg-items-center eteg-rounded-sm eteg-h-12 eteg-px-2 eteg-text-sm eteg-outline-none focus:eteg-bg-accent focus:eteg-text-accent-foreground data-[disabled]:eteg-pointer-events-none data-[disabled]:eteg-opacity-50 data-[selected=true]:eteg-text-accent-foreground", className), ...props },
    React.createElement($cc7e05a45900e73f$export$d6e5bf9c43ea9319, null, children))));
SelectItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName;
const SelectSearchItem = React.forwardRef(({ className, ...props }, ref) => (React.createElement("div", { className: "eteg-h-12" },
    React.createElement(InputText, { ref: ref, inputClassName: cn("eteg-border-x-transparent eteg-border-t-transparent eteg-h-auto eteg-rounded-none eteg-py-3 eteg-text-sm", className), icon: FiSearch, ...props }))));
SelectSearchItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName;
const SelectSkeletonItem = () => (React.createElement("div", { className: "eteg-relative eteg-flex eteg-items-center eteg-w-full eteg-rounded-sm eteg-h-12 eteg-px-2 eteg-outline-none" },
    React.createElement(Skeleton, { className: "eteg-h-5 eteg-w-full" })));
SelectSkeletonItem.displayName = $cc7e05a45900e73f$export$6d08773d2e66f8f2.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (React.createElement($cc7e05a45900e73f$export$1ff3c3f08ae963c0, { ref: ref, className: cn("eteg--mx-1 eteg-my-1 eteg-h-px eteg-bg-muted", className), ...props })));
SelectSeparator.displayName = $cc7e05a45900e73f$export$1ff3c3f08ae963c0.displayName;
const Select$1 = {
    Root: SelectRoot$1,
    Group: SelectGroup,
    Value: SelectValue,
    Trigger: SelectTrigger,
    Content: SelectContent,
    Label: SelectLabel,
    Item: SelectItem,
    SearchItem: SelectSearchItem,
    SkeletonItem: SelectSkeletonItem,
    Separator: SelectSeparator,
    ScrollUpButton: SelectScrollUpButton,
    ScrollDownButton: SelectScrollUpButton,
};

function SelectRoot({ className, children, disabled, error, label, onValueChange, placeholder, required, value, }) {
    return (React__default.createElement("div", { className: cn("eteg-relative twp", className) },
        label && (React__default.createElement(Label, { "data-error": !!error, className: "eteg-block eteg-mb-3 peer", "aria-required": !!required }, label)),
        React__default.createElement(Select$1.Root, { required: required, disabled: disabled, onValueChange: onValueChange, value: value },
            React__default.createElement(Select$1.Trigger, { "data-error": !!error, className: "data-[error=true]:eteg-border-destructive" },
                React__default.createElement(Select$1.Value, { placeholder: placeholder })),
            React__default.createElement(Select$1.Content, null, children)),
        error && (React__default.createElement("span", { className: "eteg-absolute -eteg-bottom-[18px] eteg-text-xs eteg-text-destructive" }, error))));
}
const Select = {
    Root: SelectRoot,
    Item: Select$1.Item,
    SearchItem: Select$1.SearchItem,
    SkeletonItem: Select$1.SkeletonItem,
};

const badgeVariants = cva("eteg-inline-flex eteg-items-center eteg-rounded-md eteg-border eteg-px-2.5 eteg-h-5 eteg-text-sm eteg-transition-colors focus:eteg-outline-none eteg-font-lato twp", {
    variants: {
        variant: {
            default: "eteg-border-transparent eteg-bg-badge eteg-text-badge-foreground hover:eteg-bg-badge/80",
            primary: "eteg-border-transparent eteg-bg-primary eteg-text-primary-foreground hover:eteg-bg-primary/80",
            secondary: "eteg-border-transparent eteg-bg-secondary eteg-text-secondary-foreground hover:eteg-bg-secondary/80",
            destructive: "eteg-border-transparent eteg-bg-destructive eteg-text-destructive-foreground hover:eteg-bg-destructive/80",
            outline: "eteg-text-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
function Badge({ className, variant, ...props }) {
    return (React.createElement("div", { className: cn(badgeVariants({ variant }), className), ...props }));
}

function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
    return useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


const $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{
    const { present: present , children: children  } = props;
    const presence = $921a889cee6df7e8$var$usePresence(present);
    const child = typeof children === 'function' ? children({
        present: presence.isPresent
    }) : Children.only(children);
    const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
    const forceMount = typeof children === 'function';
    return forceMount || presence.isPresent ? /*#__PURE__*/ cloneElement(child, {
        ref: ref
    }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = 'Presence';
/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {
    const [node1, setNode] = useState();
    const stylesRef = useRef({});
    const prevPresentRef = useRef(present);
    const prevAnimationNameRef = useRef('none');
    const initialState = present ? 'mounted' : 'unmounted';
    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
        mounted: {
            UNMOUNT: 'unmounted',
            ANIMATION_OUT: 'unmountSuspended'
        },
        unmountSuspended: {
            MOUNT: 'mounted',
            ANIMATION_END: 'unmounted'
        },
        unmounted: {
            MOUNT: 'mounted'
        }
    });
    useEffect(()=>{
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
    }, [
        state
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
            if (present) send('MOUNT');
            else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none') // If there is no exit animation or the element is hidden, animations won't run
            // so we unmount instantly
            send('UNMOUNT');
            else {
                /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */ const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');
                else send('UNMOUNT');
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (node1) {
            /**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */ const handleAnimationEnd = (event)=>{
                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation) // With React 18 concurrency this update is applied
                // a frame after the animation ends, creating a flash of visible content.
                // By manually flushing we ensure they sync within a frame, removing the flash.
                flushSync(()=>send('ANIMATION_END')
                );
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node1) // if animation occurred, store its name as the previous animation.
                prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
            };
            node1.addEventListener('animationstart', handleAnimationStart);
            node1.addEventListener('animationcancel', handleAnimationEnd);
            node1.addEventListener('animationend', handleAnimationEnd);
            return ()=>{
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
            };
        } else // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        send('ANIMATION_END');
    }, [
        node1,
        send
    ]);
    return {
        isPresent: [
            'mounted',
            'unmountSuspended'
        ].includes(state),
        ref: useCallback((node)=>{
            if (node) stylesRef.current = getComputedStyle(node);
            setNode(node);
        }, [])
    };
}
/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
}

/* -------------------------------------------------------------------------------------------------
 * Popover
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$POPOVER_NAME = 'Popover';
const [$cb5cc270b50c6fcd$var$createPopoverContext, $cb5cc270b50c6fcd$export$c8393c9e73286932] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cb5cc270b50c6fcd$var$POPOVER_NAME, [
    $cf1ac5d9fe0e8206$export$722aac194ae923
]);
const $cb5cc270b50c6fcd$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
const [$cb5cc270b50c6fcd$var$PopoverProvider, $cb5cc270b50c6fcd$var$usePopoverContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$POPOVER_NAME);
const $cb5cc270b50c6fcd$export$5b6b19405a83ff9d = (props)=>{
    const { __scopePopover: __scopePopover , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = false  } = props;
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    const triggerRef = useRef(null);
    const [hasCustomAnchor, setHasCustomAnchor] = useState(false);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /*#__PURE__*/ createElement($cb5cc270b50c6fcd$var$PopoverProvider, {
        scope: __scopePopover,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        triggerRef: triggerRef,
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        hasCustomAnchor: hasCustomAnchor,
        onCustomAnchorAdd: useCallback(()=>setHasCustomAnchor(true)
        , []),
        onCustomAnchorRemove: useCallback(()=>setHasCustomAnchor(false)
        , []),
        modal: modal
    }, children));
};
/* -------------------------------------------------------------------------------------------------
 * PopoverTrigger
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$TRIGGER_NAME = 'PopoverTrigger';
const $cb5cc270b50c6fcd$export$7dacb05d26466c3 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopePopover: __scopePopover , ...triggerProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$TRIGGER_NAME, __scopePopover);
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover);
    const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
    const trigger = /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$1({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $cb5cc270b50c6fcd$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
    }));
    return context.hasCustomAnchor ? trigger : /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends$1({
        asChild: true
    }, popperScope), trigger);
});
/* -------------------------------------------------------------------------------------------------
 * PopoverPortal
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$PORTAL_NAME = 'PopoverPortal';
const [$cb5cc270b50c6fcd$var$PortalProvider, $cb5cc270b50c6fcd$var$usePortalContext] = $cb5cc270b50c6fcd$var$createPopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, {
    forceMount: undefined
});
const $cb5cc270b50c6fcd$export$dd679ffb4362d2d4 = (props)=>{
    const { __scopePopover: __scopePopover , forceMount: forceMount , children: children , container: container  } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$PORTAL_NAME, __scopePopover);
    return /*#__PURE__*/ createElement($cb5cc270b50c6fcd$var$PortalProvider, {
        scope: __scopePopover,
        forceMount: forceMount
    }, /*#__PURE__*/ createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
    }, /*#__PURE__*/ createElement($f1701beae083dbae$export$602eac185826482c, {
        asChild: true,
        container: container
    }, children)));
};
/* -------------------------------------------------------------------------------------------------
 * PopoverContent
 * -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$CONTENT_NAME = 'PopoverContent';
const $cb5cc270b50c6fcd$export$d7e1f420b25549ff = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const portalContext = $cb5cc270b50c6fcd$var$usePortalContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    return /*#__PURE__*/ createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ createElement($cb5cc270b50c6fcd$var$PopoverContentModal, _extends$1({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ createElement($cb5cc270b50c6fcd$var$PopoverContentNonModal, _extends$1({}, contentProps, {
        ref: forwardedRef
    })));
});
/* -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$PopoverContentModal = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const contentRef = useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
    const isRightClickOutsideRef = useRef(false); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    useEffect(()=>{
        const content = contentRef.current;
        if (content) return hideOthers(content);
    }, []);
    return /*#__PURE__*/ createElement(ReactRemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true
    }, /*#__PURE__*/ createElement($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends$1({}, props, {
        ref: composedRefs // we make sure we're not trapping once it's been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            if (!isRightClickOutsideRef.current) (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
        }, {
            checkForDefaultPrevented: false
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event)=>event.preventDefault()
        , {
            checkForDefaultPrevented: false
        })
    })));
});
const $cb5cc270b50c6fcd$var$PopoverContentNonModal = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = useRef(false);
    const hasPointerDownOutsideRef = useRef(false);
    return /*#__PURE__*/ createElement($cb5cc270b50c6fcd$var$PopoverContentImpl, _extends$1({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === 'pointerdown') hasPointerDownOutsideRef.current = true;
            } // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault(); // On Safari if the trigger is inside a container with tabIndex={0}, when clicked
            // we will get the pointer down outside event on the trigger, but then a subsequent
            // focus outside event on the container, we ignore any focus outside event when we've
            // already had a pointer down outside event.
            if (event.detail.originalEvent.type === 'focusin' && hasPointerDownOutsideRef.current) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $cb5cc270b50c6fcd$var$PopoverContentImpl = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopePopover: __scopePopover , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , disableOutsidePointerEvents: disableOutsidePointerEvents , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , ...contentProps } = props;
    const context = $cb5cc270b50c6fcd$var$usePopoverContext($cb5cc270b50c6fcd$var$CONTENT_NAME, __scopePopover);
    const popperScope = $cb5cc270b50c6fcd$var$usePopperScope(__scopePopover); // Make sure the whole tree has focus guards as our `Popover` may be
    // the last element in the DOM (beacuse of the `Portal`)
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    return /*#__PURE__*/ createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, {
        asChild: true,
        disableOutsidePointerEvents: disableOutsidePointerEvents,
        onInteractOutside: onInteractOutside,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside,
        onFocusOutside: onFocusOutside,
        onDismiss: ()=>context.onOpenChange(false)
    }, /*#__PURE__*/ createElement($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends$1({
        "data-state": $cb5cc270b50c6fcd$var$getState(context.open),
        role: "dialog",
        id: context.contentId
    }, popperScope, contentProps, {
        ref: forwardedRef,
        style: {
            ...contentProps.style,
            '--radix-popover-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-popover-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-popover-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-popover-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-popover-trigger-height': 'var(--radix-popper-anchor-height)'
        }
    }))));
});
/* -----------------------------------------------------------------------------------------------*/ function $cb5cc270b50c6fcd$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9 = $cb5cc270b50c6fcd$export$5b6b19405a83ff9d;
const $cb5cc270b50c6fcd$export$41fb9f06171c75f4 = $cb5cc270b50c6fcd$export$7dacb05d26466c3;
const $cb5cc270b50c6fcd$export$602eac185826482c = $cb5cc270b50c6fcd$export$dd679ffb4362d2d4;
const $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2 = $cb5cc270b50c6fcd$export$d7e1f420b25549ff;

const PopoverRoot = $cb5cc270b50c6fcd$export$be92b6f5f03c0fe9;
const PopoverTrigger = $cb5cc270b50c6fcd$export$41fb9f06171c75f4;
const PopoverContent$1 = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (React.createElement($cb5cc270b50c6fcd$export$602eac185826482c, null,
    React.createElement($cb5cc270b50c6fcd$export$7c6e2c02157bb7d2, { ref: ref, align: align, sideOffset: sideOffset, className: cn("eteg-z-50 eteg-w-72 eteg-rounded-md eteg-border eteg-bg-popover eteg-p-4 eteg-text-popover-foreground eteg-shadow-md eteg-outline-none data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0 data-[state=closed]:eteg-zoom-out-95 data-[state=open]:eteg-zoom-in-95 data-[side=bottom]:eteg-slide-in-from-top-2 data-[side=left]:eteg-slide-in-from-right-2 data-[side=right]:eteg-slide-in-from-left-2 data-[side=top]:eteg-slide-in-from-bottom-2", className), ...props }))));
PopoverContent$1.displayName = $cb5cc270b50c6fcd$export$7c6e2c02157bb7d2.displayName;
const Popover = {
    Root: PopoverRoot,
    Trigger: PopoverTrigger,
    Content: PopoverContent$1,
};

const PopOverContent = ({ children, width }) => {
    React.useEffect(() => {
        const element = document.getElementById("popover");
        if (width)
            element.style.width = `${width}px`;
    }, []);
    return React.createElement("div", { className: "eteg-grid eteg-w-96" }, children);
};
function ComboboxRoot({ children, ...props }) {
    const divRef = React.useRef(null);
    const width = divRef.current?.parentElement?.clientWidth.toString();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    function openPopover(searchValue) {
        const searchValueFormatted = searchValue.trim();
        if (searchValueFormatted.length > 0 && children.length > 0) {
            setOpen(true);
        }
        else
            setOpen(false);
    }
    React.useEffect(() => {
        if (children.length === 0)
            setOpen(false);
    }, [children]);
    return (React.createElement("div", { className: "twp" },
        React.createElement(Popover.Root, { open: open, onOpenChange: setOpen },
            React.createElement(Popover.Trigger, { asChild: true, onClick: (e) => e.preventDefault() },
                React.createElement("div", { className: "eteg-relative eteg-border eteg-border-input eteg-rounded-md eteg-overflow-hidden", ref: divRef },
                    React.createElement(InputText, { icon: FiSearch, inputClassName: "eteg-border-none", onKeyDown: (e) => {
                            setValue(e.currentTarget.value);
                            if (e.key === "Enter")
                                openPopover(e.currentTarget.value);
                        }, ...props }),
                    React.createElement(Button, { className: "eteg-absolute eteg-right-0 eteg-top-0 eteg-rounded-none eteg-w-32", onClick: () => openPopover(value) }, "Buscar"))),
            React.createElement(Popover.Content, { className: "p-0 popover eteg-box-border", id: "popover", onOpenAutoFocus: (e) => e.preventDefault() },
                React.createElement(PopOverContent, { width: width }, children)))));
}
const ComboboxItem = React.forwardRef(({ className, ...props }, ref) => {
    return (React.createElement(Button, { variant: "ghost", className: cn("eteg-text-left eteg-block eteg-text-foreground/60", className), ...props, ref: ref }));
});
ComboboxItem.displayName = "ComboboxItem";
const Combobox = {
    Root: ComboboxRoot,
    Item: ComboboxItem,
};

const $89eedd556c436f6a$var$DEFAULT_ORIENTATION = 'horizontal';
const $89eedd556c436f6a$var$ORIENTATIONS = [
    'horizontal',
    'vertical'
];
const $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { decorative: decorative , orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION , ...domProps } = props;
    const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION; // `aria-orientation` defaults to `horizontal` so we only need it if `orientation` is vertical
    const ariaOrientation = orientation === 'vertical' ? orientation : undefined;
    const semanticProps = decorative ? {
        role: 'none'
    } : {
        'aria-orientation': ariaOrientation,
        role: 'separator'
    };
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        "data-orientation": orientation
    }, semanticProps, domProps, {
        ref: forwardedRef
    }));
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
    orientation (props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue)) return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
        return null;
    }
};
/* -----------------------------------------------------------------------------------------------*/ // Split this out for clearer readability of the error message.
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
    return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
    return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
const $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;

const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (React.createElement($89eedd556c436f6a$export$be92b6f5f03c0fe9, { ref: ref, decorative: decorative, orientation: orientation, className: cn("eteg-shrink-0 eteg-bg-table-line twp", orientation === "horizontal"
        ? "eteg-h-[1px] eteg-w-full"
        : "eteg-h-full eteg-w-[1px]", className), ...props })));
Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;

/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DIALOG_NAME = 'Dialog';
const [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
const $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = useRef(null);
    const contentRef = useRef(null);
    const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
        titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
        descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, children);
};
/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$TRIGGER_NAME = 'DialogTrigger';
const $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...triggerProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$1({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
    }));
});
/* -------------------------------------------------------------------------------------------------
 * DialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$PORTAL_NAME = 'DialogPortal';
const [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
    forceMount: undefined
});
const $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container  } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount
    }, Children.map(children, (child)=>/*#__PURE__*/ createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
            present: forceMount || context.open
        }, /*#__PURE__*/ createElement($f1701beae083dbae$export$602eac185826482c, {
            asChild: true,
            container: container
        }, child))
    ));
};
/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$OVERLAY_NAME = 'DialogOverlay';
const $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /*#__PURE__*/ createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
    }, /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends$1({}, overlayProps, {
        ref: forwardedRef
    }))) : null;
});
const $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
    return(/*#__PURE__*/ // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    createElement(ReactRemoveScroll, {
        as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ]
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends$1({
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
        ref: forwardedRef // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        ,
        style: {
            pointerEvents: 'auto',
            ...overlayProps.style
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$CONTENT_NAME = 'DialogContent';
const $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    return /*#__PURE__*/ createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$var$DialogContentModal, _extends$1({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends$1({}, contentProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$b6d9565de1e068cf, {
    displayName: $5d3850c4d0b4e6c7$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentModal = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    useEffect(()=>{
        const content = contentRef.current;
        if (content) return hideOthers(content);
    }, []);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends$1({}, props, {
        ref: composedRefs // we make sure focus isn't trapped once `DialogContent` has been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick; // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event)=>event.preventDefault()
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentNonModal = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = useRef(false);
    const hasPointerDownOutsideRef = useRef(false);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends$1({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === 'pointerdown') hasPointerDownOutsideRef.current = true;
            } // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault(); // On Safari if the trigger is inside a container with tabIndex={0}, when clicked
            // we will get the pointer down outside event on the trigger, but then a subsequent
            // focus outside event on the container, we ignore any focus outside event when we've
            // already had a pointer down outside event.
            if (event.detail.originalEvent.type === 'focusin' && hasPointerDownOutsideRef.current) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DialogContentImpl = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
    const contentRef = useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef); // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (beacuse of the `Portal`)
    $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
    return /*#__PURE__*/ createElement(Fragment, null, /*#__PURE__*/ createElement($d3863c46a17e8a28$export$20e40289641fbbb6, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ createElement($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends$1({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>context.onOpenChange(false)
    }))), false);
});
/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$TITLE_NAME = 'DialogTitle';
const $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...titleProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends$1({
        id: context.titleId
    }, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$16f7638e4a34b909, {
    displayName: $5d3850c4d0b4e6c7$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = 'DialogDescription';
const $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...descriptionProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends$1({
        id: context.descriptionId
    }, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$94e94c2ec2c954d5, {
    displayName: $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/ const $5d3850c4d0b4e6c7$var$CLOSE_NAME = 'DialogClose';
const $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...closeProps } = props;
    const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
    return /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$1({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/*#__PURE__*/ Object.assign($5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac, {
    displayName: $5d3850c4d0b4e6c7$var$CLOSE_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $5d3850c4d0b4e6c7$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = 'DialogTitleWarning';
const [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
    contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
    titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
    docsSlug: 'dialog'
});
const $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
const $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
const $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
const $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
const $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
const $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
const $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
const $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;
//# sourceMappingURL=index.mjs.map

const DialogRoot = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
const DialogTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
const DialogPortal = $5d3850c4d0b4e6c7$export$602eac185826482c;
const DialogClose = $5d3850c4d0b4e6c7$export$f39c2d165cd861fe;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (React.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { ref: ref, className: cn("eteg-fixed eteg-inset-0 eteg-z-50 eteg-bg-black/80 eteg- data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0", className), ...props })));
DialogOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (React.createElement(DialogPortal, null,
    React.createElement(DialogOverlay, null),
    React.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { ref: ref, className: cn("eteg-fixed eteg-left-[50%] eteg-top-[50%] eteg-z-50 eteg-grid eteg-w-full eteg-max-w-lg eteg-translate-x-[-50%] eteg-translate-y-[-50%] eteg-gap-4 eteg-border eteg-bg-background eteg-px-6 eteg-pt-10 eteg-pb-8 eteg-shadow-lg eteg-duration-200 data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0 data-[state=closed]:eteg-zoom-out-95 data-[state=open]:eteg-zoom-in-95 data-[state=closed]:eteg-slide-out-to-left-1/2 data-[state=closed]:eteg-slide-out-to-top-[48%] data-[state=open]:eteg-slide-in-from-left-1/2 data-[state=open]:eteg-slide-in-from-top-[48%] sm:eteg-rounded-lg twp", className), ...props },
        children,
        React.createElement($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "eteg-absolute eteg-right-4 eteg-top-4 eteg-rounded-sm eteg-ring-offset-background focus:eteg-outline-none disabled:eteg-pointer-events-none data-[state=open]:eteg-bg-accent data-[state=open]:eteg-text-muted-foreground hover:eteg-text-destructive twp" },
            React.createElement(FiX, { size: 24 }),
            React.createElement("span", { className: "eteg-sr-only" }, "Close"))))));
DialogContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
const DialogHeader = ({ className, ...props }) => (React.createElement("div", { className: cn("eteg-flex eteg-flex-col eteg-space-y-1.5 eteg-text-center sm:eteg-text-left twp", className), ...props }));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => (React.createElement("div", { className: cn("eteg-flex eteg-flex-col-reverse sm:eteg-flex-row sm:eteg-justify-end sm:eteg-space-x-4 twp", className), ...props }));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (React.createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, { ref: ref, className: cn("eteg-text-2xl sm:eteg-text-3xl eteg-font-semibold eteg-leading-none eteg-tracking-tight eteg-text-foreground eteg-max-w-[95%]", className), ...props })));
DialogTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (React.createElement($5d3850c4d0b4e6c7$export$393edc798c47379d, { ref: ref, className: cn("eteg-text-base sm:eteg-text-lg eteg-text-foreground/55 eteg-text-left", className), ...props })));
DialogDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
const Dialog = {
    Root: DialogRoot,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Close: DialogClose,
    Trigger: DialogTrigger,
    Content: DialogContent,
    Header: DialogHeader,
    Footer: DialogFooter,
    Title: DialogTitle,
    Description: DialogDescription,
};

/* -------------------------------------------------------------------------------------------------
 * AlertDialog
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$ROOT_NAME = 'AlertDialog';
const [$905f4ae918aab1aa$var$createAlertDialogContext, $905f4ae918aab1aa$export$b8891880751c2c5b] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($905f4ae918aab1aa$var$ROOT_NAME, [
    $5d3850c4d0b4e6c7$export$cc702773b8ea3e41
]);
const $905f4ae918aab1aa$var$useDialogScope = $5d3850c4d0b4e6c7$export$cc702773b8ea3e41();
const $905f4ae918aab1aa$export$de466dd8317b0b75 = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...alertDialogProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, _extends$1({}, dialogScope, alertDialogProps, {
        modal: true
    }));
};
const $905f4ae918aab1aa$export$6edd7a623ef0f40b = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...triggerProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$41fb9f06171c75f4, _extends$1({}, dialogScope, triggerProps, {
        ref: forwardedRef
    }));
});
const $905f4ae918aab1aa$export$660f2bfdb986706c = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...portalProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$602eac185826482c, _extends$1({}, dialogScope, portalProps));
};
const $905f4ae918aab1aa$export$a707a4895ce23256 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...overlayProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, _extends$1({}, dialogScope, overlayProps, {
        ref: forwardedRef
    }));
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogContent
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$CONTENT_NAME = 'AlertDialogContent';
const [$905f4ae918aab1aa$var$AlertDialogContentProvider, $905f4ae918aab1aa$var$useAlertDialogContentContext] = $905f4ae918aab1aa$var$createAlertDialogContext($905f4ae918aab1aa$var$CONTENT_NAME);
const $905f4ae918aab1aa$export$94e6af45f0af4efd = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , children: children , ...contentProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    const contentRef = useRef(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
    const cancelRef = useRef(null);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$69b62a49393917d6, {
        contentName: $905f4ae918aab1aa$var$CONTENT_NAME,
        titleName: $905f4ae918aab1aa$var$TITLE_NAME,
        docsSlug: "alert-dialog"
    }, /*#__PURE__*/ createElement($905f4ae918aab1aa$var$AlertDialogContentProvider, {
        scope: __scopeAlertDialog,
        cancelRef: cancelRef
    }, /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, _extends$1({
        role: "alertdialog"
    }, dialogScope, contentProps, {
        ref: composedRefs,
        onOpenAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onOpenAutoFocus, (event)=>{
            var _cancelRef$current;
            event.preventDefault();
            (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
                preventScroll: true
            });
        }),
        onPointerDownOutside: (event)=>event.preventDefault()
        ,
        onInteractOutside: (event)=>event.preventDefault()
    }), /*#__PURE__*/ createElement($5e63c961fc1ce211$export$d9f1ccf0bdb05d45, null, children), false)));
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$TITLE_NAME = 'AlertDialogTitle';
const $905f4ae918aab1aa$export$225e0da62d314b7 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...titleProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$f99233281efd08a0, _extends$1({}, dialogScope, titleProps, {
        ref: forwardedRef
    }));
});
const $905f4ae918aab1aa$export$a23b55cde55ad9a5 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...descriptionProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$393edc798c47379d, _extends$1({}, dialogScope, descriptionProps, {
        ref: forwardedRef
    }));
});
const $905f4ae918aab1aa$export$b454f818c58ee85d = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...actionProps } = props;
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends$1({}, dialogScope, actionProps, {
        ref: forwardedRef
    }));
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogCancel
 * -----------------------------------------------------------------------------------------------*/ const $905f4ae918aab1aa$var$CANCEL_NAME = 'AlertDialogCancel';
const $905f4ae918aab1aa$export$2f67a923571aaea0 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...cancelProps } = props;
    const { cancelRef: cancelRef  } = $905f4ae918aab1aa$var$useAlertDialogContentContext($905f4ae918aab1aa$var$CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = $905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);
    const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, cancelRef);
    return /*#__PURE__*/ createElement($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, _extends$1({}, dialogScope, cancelProps, {
        ref: ref
    }));
});
const $905f4ae918aab1aa$export$be92b6f5f03c0fe9 = $905f4ae918aab1aa$export$de466dd8317b0b75;
const $905f4ae918aab1aa$export$41fb9f06171c75f4 = $905f4ae918aab1aa$export$6edd7a623ef0f40b;
const $905f4ae918aab1aa$export$602eac185826482c = $905f4ae918aab1aa$export$660f2bfdb986706c;
const $905f4ae918aab1aa$export$c6fdb837b070b4ff = $905f4ae918aab1aa$export$a707a4895ce23256;
const $905f4ae918aab1aa$export$7c6e2c02157bb7d2 = $905f4ae918aab1aa$export$94e6af45f0af4efd;
const $905f4ae918aab1aa$export$e19cd5f9376f8cee = $905f4ae918aab1aa$export$b454f818c58ee85d;
const $905f4ae918aab1aa$export$848c9b7ead0df967 = $905f4ae918aab1aa$export$2f67a923571aaea0;
const $905f4ae918aab1aa$export$f99233281efd08a0 = $905f4ae918aab1aa$export$225e0da62d314b7;
const $905f4ae918aab1aa$export$393edc798c47379d = $905f4ae918aab1aa$export$a23b55cde55ad9a5;

const AlertDialogRoot = $905f4ae918aab1aa$export$be92b6f5f03c0fe9;
const AlertDialogTrigger = $905f4ae918aab1aa$export$41fb9f06171c75f4;
const AlertDialogPortal = $905f4ae918aab1aa$export$602eac185826482c;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (React.createElement($905f4ae918aab1aa$export$c6fdb837b070b4ff, { className: cn("eteg-fixed eteg-inset-0 eteg-z-50 eteg-bg-black/80 eteg- data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0", className), ...props, ref: ref })));
AlertDialogOverlay.displayName = $905f4ae918aab1aa$export$c6fdb837b070b4ff.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (React.createElement(AlertDialogPortal, null,
    React.createElement(AlertDialogOverlay, null),
    React.createElement($905f4ae918aab1aa$export$7c6e2c02157bb7d2, { ref: ref, className: cn("eteg-fixed eteg-left-[50%] eteg-top-[50%] eteg-z-50 eteg-grid eteg-w-full eteg-max-w-lg eteg-translate-x-[-50%] eteg-translate-y-[-50%] eteg-gap-4 eteg-border eteg-bg-background eteg-p-6 eteg-shadow-lg eteg-duration-200 data-[state=open]:eteg-animate-in data-[state=closed]:eteg-animate-out data-[state=closed]:eteg-fade-out-0 data-[state=open]:eteg-fade-in-0 data-[state=closed]:eteg-zoom-out-95 data-[state=open]:eteg-zoom-in-95 data-[state=closed]:eteg-slide-out-to-left-1/2 data-[state=closed]:eteg-slide-out-to-top-[48%] data-[state=open]:eteg-slide-in-from-left-1/2 data-[state=open]:eteg-slide-in-from-top-[48%] sm:eteg-rounded-lg twp", className), ...props }))));
AlertDialogContent.displayName = $905f4ae918aab1aa$export$7c6e2c02157bb7d2.displayName;
const AlertDialogHeader = ({ className, ...props }) => (React.createElement("div", { className: cn("eteg-flex eteg-flex-col eteg-space-y-2 eteg-text-center sm:eteg-text-left", className), ...props }));
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => (React.createElement("div", { className: cn("eteg-flex eteg-flex-col-reverse sm:eteg-flex-row sm:eteg-justify-end sm:eteg-space-x-4", className), ...props }));
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (React.createElement($905f4ae918aab1aa$export$f99233281efd08a0, { ref: ref, className: cn("eteg-text-xl eteg-font-semibold eteg-leading-none eteg-tracking-tight eteg-text-foreground", className), ...props })));
AlertDialogTitle.displayName = $905f4ae918aab1aa$export$f99233281efd08a0.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (React.createElement($905f4ae918aab1aa$export$393edc798c47379d, { ref: ref, className: cn("eteg-text-sm eteg-text-muted-foreground", className), ...props })));
AlertDialogDescription.displayName =
    $905f4ae918aab1aa$export$393edc798c47379d.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (React.createElement($905f4ae918aab1aa$export$e19cd5f9376f8cee, { ref: ref, className: cn(buttonVariants(), className), ...props })));
AlertDialogAction.displayName = $905f4ae918aab1aa$export$e19cd5f9376f8cee.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (React.createElement($905f4ae918aab1aa$export$848c9b7ead0df967, { ref: ref, className: cn(buttonVariants({ variant: "outline" }), "eteg-mt-2 sm:eteg-mt-0", className), ...props })));
AlertDialogCancel.displayName = $905f4ae918aab1aa$export$848c9b7ead0df967.displayName;
const AlertDialog = {
    Root: AlertDialogRoot,
    Portal: AlertDialogPortal,
    Overlay: AlertDialogOverlay,
    Trigger: AlertDialogTrigger,
    Content: AlertDialogContent,
    Header: AlertDialogHeader,
    Footer: AlertDialogFooter,
    Title: AlertDialogTitle,
    Description: AlertDialogDescription,
    Action: AlertDialogAction,
    Cancel: AlertDialogCancel,
};

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/ const $e698a72e93240346$var$CHECKBOX_NAME = 'Checkbox';
const [$e698a72e93240346$var$createCheckboxContext, $e698a72e93240346$export$b566c4ff5488ea01] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($e698a72e93240346$var$CHECKBOX_NAME);
const [$e698a72e93240346$var$CheckboxProvider, $e698a72e93240346$var$useCheckboxContext] = $e698a72e93240346$var$createCheckboxContext($e698a72e93240346$var$CHECKBOX_NAME);
const $e698a72e93240346$export$48513f6b9f8ce62d = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeCheckbox: __scopeCheckbox , name: name , checked: checkedProp , defaultChecked: defaultChecked , required: required , disabled: disabled , value: value = 'on' , onCheckedChange: onCheckedChange , ...checkboxProps } = props;
    const [button, setButton] = useState(null);
    const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, (node)=>setButton(node)
    );
    const hasConsumerStoppedPropagationRef = useRef(false); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = button ? Boolean(button.closest('form')) : true;
    const [checked = false, setChecked] = $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
    });
    const initialCheckedStateRef = useRef(checked);
    useEffect(()=>{
        const form = button === null || button === void 0 ? void 0 : button.form;
        if (form) {
            const reset = ()=>setChecked(initialCheckedStateRef.current)
            ;
            form.addEventListener('reset', reset);
            return ()=>form.removeEventListener('reset', reset)
            ;
        }
    }, [
        button,
        setChecked
    ]);
    return /*#__PURE__*/ createElement($e698a72e93240346$var$CheckboxProvider, {
        scope: __scopeCheckbox,
        state: checked,
        disabled: disabled
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends$1({
        type: "button",
        role: "checkbox",
        "aria-checked": $e698a72e93240346$var$isIndeterminate(checked) ? 'mixed' : checked,
        "aria-required": required,
        "data-state": $e698a72e93240346$var$getState(checked),
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled,
        value: value
    }, checkboxProps, {
        ref: composedRefs,
        onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event)=>{
            // According to WAI ARIA, Checkboxes don't activate on enter keypress
            if (event.key === 'Enter') event.preventDefault();
        }),
        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event)=>{
            setChecked((prevChecked)=>$e698a72e93240346$var$isIndeterminate(prevChecked) ? true : !prevChecked
            );
            if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if checkbox is in a form, stop propagation from the button so that we only propagate
                // one click event (from the input). We propagate changes from an input so that native
                // form validation works and form events reflect checkbox updates.
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    })), isFormControl && /*#__PURE__*/ createElement($e698a72e93240346$var$BubbleInput, {
        control: button,
        bubbles: !hasConsumerStoppedPropagationRef.current,
        name: name,
        value: value,
        checked: checked,
        required: required,
        disabled: disabled // We transform because the input is absolutely positioned but we have
        ,
        style: {
            transform: 'translateX(-100%)'
        }
    }));
});
/* -------------------------------------------------------------------------------------------------
 * CheckboxIndicator
 * -----------------------------------------------------------------------------------------------*/ const $e698a72e93240346$var$INDICATOR_NAME = 'CheckboxIndicator';
const $e698a72e93240346$export$59aad738f51d1c05 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeCheckbox: __scopeCheckbox , forceMount: forceMount , ...indicatorProps } = props;
    const context = $e698a72e93240346$var$useCheckboxContext($e698a72e93240346$var$INDICATOR_NAME, __scopeCheckbox);
    return /*#__PURE__*/ createElement($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
        present: forceMount || $e698a72e93240346$var$isIndeterminate(context.state) || context.state === true
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({
        "data-state": $e698a72e93240346$var$getState(context.state),
        "data-disabled": context.disabled ? '' : undefined
    }, indicatorProps, {
        ref: forwardedRef,
        style: {
            pointerEvents: 'none',
            ...props.style
        }
    })));
});
/* ---------------------------------------------------------------------------------------------- */ const $e698a72e93240346$var$BubbleInput = (props)=>{
    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;
    const ref = useRef(null);
    const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
    const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control); // Bubble checked change to parents (e.g form change event)
    useEffect(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked');
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event('click', {
                bubbles: bubbles
            });
            input.indeterminate = $e698a72e93240346$var$isIndeterminate(checked);
            setChecked.call(input, $e698a72e93240346$var$isIndeterminate(checked) ? false : checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /*#__PURE__*/ createElement("input", _extends$1({
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: $e698a72e93240346$var$isIndeterminate(checked) ? false : checked
    }, inputProps, {
        tabIndex: -1,
        ref: ref,
        style: {
            ...props.style,
            ...controlSize,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0
        }
    }));
};
function $e698a72e93240346$var$isIndeterminate(checked) {
    return checked === 'indeterminate';
}
function $e698a72e93240346$var$getState(checked) {
    return $e698a72e93240346$var$isIndeterminate(checked) ? 'indeterminate' : checked ? 'checked' : 'unchecked';
}
const $e698a72e93240346$export$be92b6f5f03c0fe9 = $e698a72e93240346$export$48513f6b9f8ce62d;
const $e698a72e93240346$export$adb584737d712b70 = $e698a72e93240346$export$59aad738f51d1c05;

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (React.createElement($e698a72e93240346$export$be92b6f5f03c0fe9, { ref: ref, className: cn("eteg-peer eteg-h-5 eteg-w-5 eteg-shrink-0 eteg-rounded-sm eteg-border eteg-border-foreground eteg-ring-offset-background focus-visible:eteg-outline-none focus-visible:eteg-ring-2 focus-visible:eteg-ring-ring focus-visible:eteg-ring-offset-2 disabled:eteg-cursor-not-allowed disabled:eteg-opacity-50 data-[state=checked]:eteg-bg-checkbox data-[state=checked]:eteg-border-checkbox data-[state=checked]:eteg-text-checkbox-foreground twp", className), ...props },
    React.createElement($e698a72e93240346$export$adb584737d712b70, { className: cn("eteg-flex eteg-items-center eteg-justify-center eteg-text-current") },
        React.createElement(FiCheck, { size: 18, className: "eteg-stroke-[3px]" })))));
Checkbox.displayName = $e698a72e93240346$export$be92b6f5f03c0fe9.displayName;

const InputDate = React.forwardRef(({ className, type = "date", label, error, inputClassName, ...props }, ref) => {
    return (React.createElement("div", { className: cn("eteg-relative twp", className) },
        label && (React.createElement(Label, { "data-error": !!error, htmlFor: props.name, className: "eteg-block eteg-mb-3 peer", "aria-required": !!props.required }, label)),
        React.createElement("div", { className: "eteg-relative eteg-flex eteg-items-center" },
            React.createElement("input", { type: type, "data-error": !!error, className: cn("eteg-flex eteg-h-12 eteg-w-full eteg-rounded-md eteg-border eteg-border-input eteg-bg-transparent eteg-px-4 eteg-text-sm placeholder:text-muted-foreground disabled:eteg-cursor-not-allowed disabled:eteg-bg-muted disabled:eteg-text-muted-foreground eteg-text-foreground data-[error=true]:eteg-border-destructive focus:eteg-outline-none", inputClassName), ref: ref, ...props })),
        error && (React.createElement("span", { className: "eteg-absolute -eteg-bottom-[18px] eteg-text-xs eteg-text-destructive" }, error))));
});
InputDate.displayName = "InputDate";

/* -------------------------------------------------------------------------------------------------
 * Avatar
 * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$AVATAR_NAME = 'Avatar';
const [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
const [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
const $cddcb0b647441e34$export$e2255cf6045e8d47 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = useState('idle');
    return /*#__PURE__*/ createElement($cddcb0b647441e34$var$AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus: imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus
    }, /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({}, avatarProps, {
        ref: forwardedRef
    })));
});
/* -------------------------------------------------------------------------------------------------
 * AvatarImage
 * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$IMAGE_NAME = 'AvatarImage';
const $cddcb0b647441e34$export$2cd8ae1985206fe8 = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , src: src , onLoadingStatusChange: onLoadingStatusChange = ()=>{} , ...imageProps } = props;
    const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
    const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status)=>{
        onLoadingStatusChange(status);
        context.onImageLoadingStatusChange(status);
    });
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (imageLoadingStatus !== 'idle') handleLoadingStatusChange(imageLoadingStatus);
    }, [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === 'loaded' ? /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends$1({}, imageProps, {
        ref: forwardedRef,
        src: src
    })) : null;
});
/* -------------------------------------------------------------------------------------------------
 * AvatarFallback
 * -----------------------------------------------------------------------------------------------*/ const $cddcb0b647441e34$var$FALLBACK_NAME = 'AvatarFallback';
const $cddcb0b647441e34$export$69fffb6a9571fbfe = /*#__PURE__*/ forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , delayMs: delayMs , ...fallbackProps } = props;
    const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = useState(delayMs === undefined);
    useEffect(()=>{
        if (delayMs !== undefined) {
            const timerId = window.setTimeout(()=>setCanRender(true)
            , delayMs);
            return ()=>window.clearTimeout(timerId)
            ;
        }
    }, [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== 'loaded' ? /*#__PURE__*/ createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends$1({}, fallbackProps, {
        ref: forwardedRef
    })) : null;
});
/* -----------------------------------------------------------------------------------------------*/ function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
    const [loadingStatus, setLoadingStatus] = useState('idle');
    $9f79659886946c16$export$e5c5a5f917a5871c(()=>{
        if (!src) {
            setLoadingStatus('error');
            return;
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status)=>()=>{
                if (!isMounted) return;
                setLoadingStatus(status);
            }
        ;
        setLoadingStatus('loading');
        image.onload = updateStatus('loaded');
        image.onerror = updateStatus('error');
        image.src = src;
        return ()=>{
            isMounted = false;
        };
    }, [
        src
    ]);
    return loadingStatus;
}
const $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
const $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
const $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;

const AvatarRoot = React.forwardRef(({ className, ...props }, ref) => (React.createElement($cddcb0b647441e34$export$be92b6f5f03c0fe9, { ref: ref, className: cn("eteg-relative eteg-flex eteg-h-10 eteg-w-10 eteg-shrink-0 eteg-overflow-hidden eteg-rounded-full twp", className), ...props })));
AvatarRoot.displayName = $cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (React.createElement($cddcb0b647441e34$export$3e431a229df88919, { ref: ref, className: cn("eteg-aspect-square eteg-h-full eteg-w-full", className), ...props })));
AvatarImage.displayName = $cddcb0b647441e34$export$3e431a229df88919.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (React.createElement($cddcb0b647441e34$export$fb8d7f40caaeea67, { ref: ref, className: cn("eteg-flex eteg-h-full eteg-w-full eteg-items-center eteg-justify-center eteg-rounded-full eteg-bg-muted", className), ...props })));
AvatarFallback.displayName = $cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;
const Avatar = {
    Root: AvatarRoot,
    Image: AvatarImage,
    Fallback: AvatarFallback,
};

const countries = [
    {
        pais: "Afeganistão",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013–2021%29.svg/23px-Flag_of_Afghanistan_%282013–2021%29.svg.png",
        ddi: 93,
        continente: "Ásia",
    },
    {
        pais: "África do Sul",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/23px-Flag_of_South_Africa.svg.png",
        ddi: 27,
        continente: "África",
    },
    {
        pais: "Albânia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/21px-Flag_of_Albania.svg.png",
        ddi: 355,
        continente: "Europa",
    },
    {
        pais: "Alemanha",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/23px-Flag_of_Germany.svg.png",
        ddi: 49,
        continente: "Europa",
    },
    {
        pais: "Andorra",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/22px-Flag_of_Andorra.svg.png",
        ddi: 376,
        continente: "Europa",
    },
    {
        pais: "Angola",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/23px-Flag_of_Angola.svg.png",
        ddi: 244,
        continente: "África",
    },
    {
        pais: "Antilhas Holandesas",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg/23px-Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg.png",
        ddi: 599,
        continente: "América Central",
    },
    {
        pais: "Arábia Saudita",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/23px-Flag_of_Saudi_Arabia.svg.png",
        ddi: 966,
        continente: "Ásia",
    },
    {
        pais: "Argélia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/23px-Flag_of_Algeria.svg.png",
        ddi: 213,
        continente: "África",
    },
    {
        pais: "Argentina",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png",
        ddi: 54,
        continente: "América do Sul",
    },
    {
        pais: "Armênia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/23px-Flag_of_Armenia.svg.png",
        ddi: 374,
        continente: "Ásia",
    },
    {
        pais: "Aruba",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/23px-Flag_of_Aruba.svg.png",
        ddi: 297,
        continente: "América Central",
    },
    {
        pais: "Ascensão",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Ascension_Island.svg/23px-Flag_of_Ascension_Island.svg.png",
        ddi: 247,
        continente: "África",
    },
    {
        pais: "Austrália",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/23px-Flag_of_Australia.svg.png",
        ddi: 61,
        continente: "Oceania",
    },
    {
        pais: "Áustria",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/23px-Flag_of_Austria.svg.png",
        ddi: 43,
        continente: "Europa",
    },
    {
        pais: "Azerbaijão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/23px-Flag_of_Azerbaijan.svg.png",
        ddi: 994,
        continente: "Ásia",
    },
    {
        pais: "Bangladesh",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/23px-Flag_of_Bangladesh.svg.png",
        ddi: 880,
        continente: "Ásia",
    },
    {
        pais: "Bahrein",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/23px-Flag_of_Bahrain.svg.png",
        ddi: 973,
        continente: "Ásia",
    },
    {
        pais: "Bélgica",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/23px-Flag_of_Belgium_%28civil%29.svg.png",
        ddi: 32,
        continente: "Europa",
    },
    {
        pais: "Belize",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/23px-Flag_of_Belize.svg.png",
        ddi: 501,
        continente: "América Central",
    },
    {
        pais: "Benim",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/23px-Flag_of_Benin.svg.png",
        ddi: 229,
        continente: "África",
    },
    {
        pais: "Bielorrússia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/23px-Flag_of_Belarus.svg.png",
        ddi: 375,
        continente: "Europa",
    },
    {
        pais: "Bolívia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/22px-Flag_of_Bolivia.svg.png",
        ddi: 591,
        continente: "América do Sul",
    },
    {
        pais: "Bósnia e Herzegovina",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/23px-Flag_of_Bosnia_and_Herzegovina.svg.png",
        ddi: 387,
        continente: "Europa",
    },
    {
        pais: "Botswana",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/23px-Flag_of_Botswana.svg.png",
        ddi: 267,
        continente: "África",
    },
    {
        pais: "Brasil",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png",
        ddi: 55,
        continente: "América do Sul",
    },
    {
        pais: "Brunei",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/23px-Flag_of_Brunei.svg.png",
        ddi: 673,
        continente: "Ásia",
    },
    {
        pais: "Bulgária",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/23px-Flag_of_Bulgaria.svg.png",
        ddi: 359,
        continente: "Europa",
    },
    {
        pais: "Burkina Faso",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/23px-Flag_of_Burkina_Faso.svg.png",
        ddi: 226,
        continente: "África",
    },
    {
        pais: "Burundi",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/23px-Flag_of_Burundi.svg.png",
        ddi: 257,
        continente: "África",
    },
    {
        pais: "Butão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/23px-Flag_of_Bhutan.svg.png",
        ddi: 975,
        continente: "Ásia",
    },
    {
        pais: "Cabo Verde",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/23px-Flag_of_Cape_Verde.svg.png",
        ddi: 238,
        continente: "África",
    },
    {
        pais: "Camarões",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/23px-Flag_of_Cameroon.svg.png",
        ddi: 237,
        continente: "África",
    },
    {
        pais: "Camboja",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/23px-Flag_of_Cambodia.svg.png",
        ddi: 855,
        continente: "Ásia",
    },
    {
        pais: "Cazaquistão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/23px-Flag_of_Kazakhstan.svg.png",
        ddi: 7,
        continente: "Ásia",
    },
    {
        pais: "Chade",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/23px-Flag_of_Chad.svg.png",
        ddi: 235,
        continente: "África",
    },
    {
        pais: "Chile",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/23px-Flag_of_Chile.svg.png",
        ddi: 56,
        continente: "América do Sul",
    },
    {
        pais: "República Popular da China",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/23px-Flag_of_the_People%27s_Republic_of_China.svg.png",
        ddi: 86,
        continente: "Ásia",
    },
    {
        pais: "Chipre",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/23px-Flag_of_Cyprus.svg.png",
        ddi: 357,
        continente: "Europa",
    },
    {
        pais: "Colômbia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/23px-Flag_of_Colombia.svg.png",
        ddi: 57,
        continente: "América do Sul",
    },
    {
        pais: "Comores",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/23px-Flag_of_the_Comoros.svg.png",
        ddi: 269,
        continente: "África",
    },
    {
        pais: "CongoBrazzaville",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/23px-Flag_of_the_Republic_of_the_Congo.svg.png",
        ddi: 242,
        continente: "África",
    },
    {
        pais: "CongoKinshasa",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/20px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
        ddi: 243,
        continente: "África",
    },
    {
        pais: "Coreia do Norte",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/23px-Flag_of_North_Korea.svg.png",
        ddi: 850,
        continente: "Ásia",
    },
    {
        pais: "Coreia do Sul",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/23px-Flag_of_South_Korea.svg.png",
        ddi: 82,
        continente: "Ásia",
    },
    {
        pais: "Costa do Marfim",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/23px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
        ddi: 225,
        continente: "África",
    },
    {
        pais: "Costa Rica",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/23px-Flag_of_Costa_Rica.svg.png",
        ddi: 506,
        continente: "América Central",
    },
    {
        pais: "Croácia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/23px-Flag_of_Croatia.svg.png",
        ddi: 385,
        continente: "Europa",
    },
    {
        pais: "Cuba",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/23px-Flag_of_Cuba.svg.png",
        ddi: 53,
        continente: "América Central",
    },
    {
        pais: "Dinamarca",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png",
        ddi: 45,
        continente: "Europa",
    },
    {
        pais: "Djibuti",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/23px-Flag_of_Djibouti.svg.png",
        ddi: 253,
        continente: "África",
    },
    {
        pais: "Egipto",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/23px-Flag_of_Egypt.svg.png",
        ddi: 20,
        continente: "África/Ásia",
    },
    {
        pais: "El Salvador",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/23px-Flag_of_El_Salvador.svg.png",
        ddi: 503,
        continente: "América Central",
    },
    {
        pais: "Emirados Árabes Unidos",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/23px-Flag_of_the_United_Arab_Emirates.svg.png",
        ddi: 971,
        continente: "Ásia",
    },
    {
        pais: "Equador",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/23px-Flag_of_Ecuador.svg.png",
        ddi: 593,
        continente: "América do Sul",
    },
    {
        pais: "Eritreia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/23px-Flag_of_Eritrea.svg.png",
        ddi: 291,
        continente: "África",
    },
    {
        pais: "Eslováquia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/23px-Flag_of_Slovakia.svg.png",
        ddi: 421,
        continente: "Europa",
    },
    {
        pais: "Eslovénia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/23px-Flag_of_Slovenia.svg.png",
        ddi: 386,
        continente: "Europa",
    },
    {
        pais: "Espanha",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png",
        ddi: 34,
        continente: "Europa",
    },
    {
        pais: "Estados Unidos",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png",
        ddi: 1,
        continente: "América do Norte",
    },
    {
        pais: "Estónia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/23px-Flag_of_Estonia.svg.png",
        ddi: 372,
        continente: "Europa",
    },
    {
        pais: "Etiópia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/23px-Flag_of_Ethiopia.svg.png",
        ddi: 251,
        continente: "África",
    },
    {
        pais: "Fiji",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/23px-Flag_of_Fiji.svg.png",
        ddi: 679,
        continente: "Oceania",
    },
    {
        pais: "Filipinas",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/23px-Flag_of_the_Philippines.svg.png",
        ddi: 63,
        continente: "Ásia",
    },
    {
        pais: "Finlândia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/23px-Flag_of_Finland.svg.png",
        ddi: 358,
        continente: "Europa",
    },
    {
        pais: "França",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
        ddi: 33,
        continente: "Europa",
    },
    {
        pais: "Gabão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/20px-Flag_of_Gabon.svg.png",
        ddi: 241,
        continente: "África",
    },
    {
        pais: "Gâmbia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/23px-Flag_of_The_Gambia.svg.png",
        ddi: 220,
        continente: "África",
    },
    {
        pais: "Gana",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/23px-Flag_of_Ghana.svg.png",
        ddi: 233,
        continente: "África",
    },
    {
        pais: "Geórgia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/23px-Flag_of_Georgia.svg.png",
        ddi: 995,
        continente: "Ásia",
    },
    {
        pais: "Gibraltar",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/23px-Flag_of_Gibraltar.svg.png",
        ddi: 350,
        continente: "Europa",
    },
    {
        pais: "Grécia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/23px-Flag_of_Greece.svg.png",
        ddi: 30,
        continente: "Europa",
    },
    {
        pais: "Groenlândia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/23px-Flag_of_Greenland.svg.png",
        ddi: 299,
        continente: "América do Norte",
    },
    {
        pais: "Guadalupe",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
        ddi: 590,
        continente: "América Central",
    },
    {
        pais: "Guatemala",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/23px-Flag_of_Guatemala.svg.png",
        ddi: 502,
        continente: "América Central",
    },
    {
        pais: "Guiana",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/23px-Flag_of_Guyana.svg.png",
        ddi: 592,
        continente: "América do Sul",
    },
    {
        pais: "Guiana Francesa",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_French_Guiana.svg/23px-Flag_of_French_Guiana.svg.png",
        ddi: 594,
        continente: "América do Sul",
    },
    {
        pais: "Guiné",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/23px-Flag_of_Guinea.svg.png",
        ddi: 224,
        continente: "África",
    },
    {
        pais: "GuinéBissau",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/23px-Flag_of_Guinea-Bissau.svg.png",
        ddi: 245,
        continente: "África",
    },
    {
        pais: "Guiné Equatorial",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/23px-Flag_of_Equatorial_Guinea.svg.png",
        ddi: 240,
        continente: "África",
    },
    {
        pais: "Haiti",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/23px-Flag_of_Haiti.svg.png",
        ddi: 509,
        continente: "América Central",
    },
    {
        pais: "Honduras",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/23px-Flag_of_Honduras.svg.png",
        ddi: 504,
        continente: "América Central",
    },
    {
        pais: "Hong Kong",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/23px-Flag_of_Hong_Kong.svg.png",
        ddi: 852,
        continente: "Ásia",
    },
    {
        pais: "Hungria",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/23px-Flag_of_Hungary.svg.png",
        ddi: 36,
        continente: "Europa",
    },
    {
        pais: "Iêmen",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/23px-Flag_of_Yemen.svg.png",
        ddi: 967,
        continente: "Ásia",
    },
    {
        pais: "Ilha Christmas",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Christmas_Island.svg/23px-Flag_of_Christmas_Island.svg.png",
        ddi: 672,
        continente: "Oceania",
    },
    {
        pais: "Ilhas Cocos",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg/23px-Flag_of_the_Cocos_%28Keeling%29_Islands.svg.png",
        ddi: 672,
        continente: "Oceania",
    },
    {
        pais: "Ilhas Cook",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/23px-Flag_of_the_Cook_Islands.svg.png",
        ddi: 682,
        continente: "Oceania",
    },
    {
        pais: "Ilhas Féroe",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/21px-Flag_of_the_Faroe_Islands.svg.png",
        ddi: 298,
        continente: "Europa",
    },
    {
        pais: "Ilha Heard e Ilhas McDonald",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/23px-Flag_of_Australia.svg.png",
        ddi: 672,
        continente: "Oceania",
    },
    {
        pais: "Maldivas",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/23px-Flag_of_Maldives.svg.png",
        ddi: 960,
        continente: "Ásia",
    },
    {
        pais: "Ilhas Malvinas",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Falkland_Islands.svg/23px-Flag_of_the_Falkland_Islands.svg.png",
        ddi: 500,
        continente: "América do Sul",
    },
    {
        pais: "Ilhas Marshall",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/23px-Flag_of_the_Marshall_Islands.svg.png",
        ddi: 692,
        continente: "Oceania",
    },
    {
        pais: "Ilha Norfolk",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Norfolk_Island.svg/23px-Flag_of_Norfolk_Island.svg.png",
        ddi: 672,
        continente: "Oceania",
    },
    {
        pais: "Ilhas Salomão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/23px-Flag_of_the_Solomon_Islands.svg.png",
        ddi: 677,
        continente: "Oceania",
    },
    {
        pais: "Índia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/23px-Flag_of_India.svg.png",
        ddi: 91,
        continente: "Ásia",
    },
    {
        pais: "Indonésia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/23px-Flag_of_Indonesia.svg.png",
        ddi: 62,
        continente: "Ásia/Oceania",
    },
    {
        pais: "Irã",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/23px-Flag_of_Iran.svg.png",
        ddi: 98,
        continente: "Ásia",
    },
    {
        pais: "Iraque",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/23px-Flag_of_Iraq.svg.png",
        ddi: 964,
        continente: "Ásia",
    },
    {
        pais: "Irlanda",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/23px-Flag_of_Ireland.svg.png",
        ddi: 353,
        continente: "Europa",
    },
    {
        pais: "Islândia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/21px-Flag_of_Iceland.svg.png",
        ddi: 354,
        continente: "Europa",
    },
    {
        pais: "Israel",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/21px-Flag_of_Israel.svg.png",
        ddi: 972,
        continente: "Ásia",
    },
    {
        pais: "Itália",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/23px-Flag_of_Italy.svg.png",
        ddi: 39,
        continente: "Europa",
    },
    {
        pais: "Japão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/23px-Flag_of_Japan.svg.png",
        ddi: 81,
        continente: "Ásia",
    },
    {
        pais: "Jordânia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/23px-Flag_of_Jordan.svg.png",
        ddi: 962,
        continente: "Ásia",
    },
    {
        pais: "Kiribati",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/23px-Flag_of_Kiribati.svg.png",
        ddi: 686,
        continente: "Oceania",
    },
    {
        pais: "Kosovo",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Kosovo.svg/21px-Flag_of_Kosovo.svg.png",
        ddi: 383,
        continente: "Europa",
    },
    {
        pais: "Kuwait",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/23px-Flag_of_Kuwait.svg.png",
        ddi: 965,
        continente: "Ásia",
    },
    {
        pais: "Laos",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/23px-Flag_of_Laos.svg.png",
        ddi: 856,
        continente: "Ásia",
    },
    {
        pais: "Lesoto",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/23px-Flag_of_Lesotho.svg.png",
        ddi: 266,
        continente: "África",
    },
    {
        pais: "Letônia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/23px-Flag_of_Latvia.svg.png",
        ddi: 371,
        continente: "Europa",
    },
    {
        pais: "Líbano",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/23px-Flag_of_Lebanon.svg.png",
        ddi: 961,
        continente: "Ásia",
    },
    {
        pais: "Libéria",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/23px-Flag_of_Liberia.svg.png",
        ddi: 231,
        continente: "África",
    },
    {
        pais: "Líbia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/23px-Flag_of_Libya.svg.png",
        ddi: 218,
        continente: "África",
    },
    {
        pais: "Liechtenstein",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/23px-Flag_of_Liechtenstein.svg.png",
        ddi: 423,
        continente: "Europa",
    },
    {
        pais: "Lituânia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/23px-Flag_of_Lithuania.svg.png",
        ddi: 370,
        continente: "Europa",
    },
    {
        pais: "Luxemburgo",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/23px-Flag_of_Luxembourg.svg.png",
        ddi: 352,
        continente: "Europa",
    },
    {
        pais: "Macau",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/23px-Flag_of_Macau.svg.png",
        ddi: 853,
        continente: "Ásia",
    },
    {
        pais: "República da Macedônia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/23px-Flag_of_North_Macedonia.svg.png",
        ddi: 389,
        continente: "Europa",
    },
    {
        pais: "Madagascar",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/23px-Flag_of_Madagascar.svg.png",
        ddi: 261,
        continente: "África",
    },
    {
        pais: "Malásia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/23px-Flag_of_Malaysia.svg.png",
        ddi: 60,
        continente: "Ásia",
    },
    {
        pais: "Malawi",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/23px-Flag_of_Malawi.svg.png",
        ddi: 265,
        continente: "África",
    },
    {
        pais: "Mali",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/23px-Flag_of_Mali.svg.png",
        ddi: 223,
        continente: "África",
    },
    {
        pais: "Malta",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/23px-Flag_of_Malta.svg.png",
        ddi: 356,
        continente: "Europa",
    },
    {
        pais: "Marrocos",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/23px-Flag_of_Morocco.svg.png",
        ddi: 212,
        continente: "África",
    },
    {
        pais: "Martinica",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
        ddi: 596,
        continente: "América Central",
    },
    {
        pais: "Maurícia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/23px-Flag_of_Mauritius.svg.png",
        ddi: 230,
        continente: "África",
    },
    {
        pais: "Mauritânia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/23px-Flag_of_Mauritania.svg.png",
        ddi: 222,
        continente: "África",
    },
    {
        pais: "Mayotte",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
        ddi: 269,
        continente: "África",
    },
    {
        pais: "México",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/23px-Flag_of_Mexico.svg.png",
        ddi: 52,
        continente: "América do Norte",
    },
    {
        pais: "Estados Federados da Micronésia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/23px-Flag_of_the_Federated_States_of_Micronesia.svg.png",
        ddi: 691,
        continente: "Oceania",
    },
    {
        pais: "Moçambique",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/23px-Flag_of_Mozambique.svg.png",
        ddi: 258,
        continente: "África",
    },
    {
        pais: "Moldávia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/23px-Flag_of_Moldova.svg.png",
        ddi: 373,
        continente: "Europa",
    },
    {
        pais: "Mônaco",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/19px-Flag_of_Monaco.svg.png",
        ddi: 377,
        continente: "Europa",
    },
    {
        pais: "Mongólia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/23px-Flag_of_Mongolia.svg.png",
        ddi: 976,
        continente: "Ásia",
    },
    {
        pais: "Montenegro",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/23px-Flag_of_Montenegro.svg.png",
        ddi: 382,
        continente: "Europa",
    },
    {
        pais: "Myanmar",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/23px-Flag_of_Myanmar.svg.png",
        ddi: 95,
        continente: "Ásia",
    },
    {
        pais: "Namíbia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/23px-Flag_of_Namibia.svg.png",
        ddi: 264,
        continente: "África",
    },
    {
        pais: "Nauru",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/23px-Flag_of_Nauru.svg.png",
        ddi: 674,
        continente: "Oceania",
    },
    {
        pais: "Nepal",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/12px-Flag_of_Nepal.svg.png",
        ddi: 977,
        continente: "Ásia",
    },
    {
        pais: "Nicarágua",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/23px-Flag_of_Nicaragua.svg.png",
        ddi: 505,
        continente: "América Central",
    },
    {
        pais: "Níger",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/18px-Flag_of_Niger.svg.png",
        ddi: 227,
        continente: "África",
    },
    {
        pais: "Nigéria",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/23px-Flag_of_Nigeria.svg.png",
        ddi: 234,
        continente: "África",
    },
    {
        pais: "Niue",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/23px-Flag_of_Niue.svg.png",
        ddi: 683,
        continente: "Oceania",
    },
    {
        pais: "Noruega",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/21px-Flag_of_Norway.svg.png",
        ddi: 47,
        continente: "Europa",
    },
    {
        pais: "Nova Caledônia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flags_of_New_Caledonia.svg/40px-Flags_of_New_Caledonia.svg.png",
        ddi: 687,
        continente: "Oceania",
    },
    {
        pais: "Nova Zelândia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/23px-Flag_of_New_Zealand.svg.png",
        ddi: 64,
        continente: "Oceania",
    },
    {
        pais: "Omã",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/23px-Flag_of_Oman.svg.png",
        ddi: 968,
        continente: "Ásia",
    },
    {
        pais: "Países Baixos",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/23px-Flag_of_the_Netherlands.svg.png",
        ddi: 31,
        continente: "Europa",
    },
    {
        pais: "Palau",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/23px-Flag_of_Palau.svg.png",
        ddi: 680,
        continente: "Oceania",
    },
    {
        pais: "Palestina",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/23px-Flag_of_Palestine.svg.png",
        ddi: 970,
        continente: "Ásia",
    },
    {
        pais: "Panamá",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/23px-Flag_of_Panama.svg.png",
        ddi: 507,
        continente: "América Central",
    },
    {
        pais: "PapuaNova Guiné",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/20px-Flag_of_Papua_New_Guinea.svg.png",
        ddi: 675,
        continente: "Oceania",
    },
    {
        pais: "Paquistão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/23px-Flag_of_Pakistan.svg.png",
        ddi: 92,
        continente: "Ásia",
    },
    {
        pais: "Paraguai",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/23px-Flag_of_Paraguay.svg.png",
        ddi: 595,
        continente: "América do Sul",
    },
    {
        pais: "Peru",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/23px-Flag_of_Peru.svg.png",
        ddi: 51,
        continente: "América do Sul",
    },
    {
        pais: "Polinésia Francesa",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/23px-Flag_of_French_Polynesia.svg.png",
        ddi: 689,
        continente: "Oceania",
    },
    {
        pais: "Polônia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/23px-Flag_of_Poland.svg.png",
        ddi: 48,
        continente: "Europa",
    },
    {
        pais: "Portugal",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/23px-Flag_of_Portugal.svg.png",
        ddi: 351,
        continente: "Europa",
    },
    {
        pais: "Qatar",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/23px-Flag_of_Qatar.svg.png",
        ddi: 974,
        continente: "Ásia",
    },
    {
        pais: "Quênia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/23px-Flag_of_Kenya.svg.png",
        ddi: 254,
        continente: "África",
    },
    {
        pais: "Quirguistão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/23px-Flag_of_Kyrgyzstan.svg.png",
        ddi: 996,
        continente: "Ásia",
    },
    {
        pais: "Reino Unido",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/23px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
        ddi: 44,
        continente: "Europa",
    },
    {
        pais: "República CentroAfricana",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/23px-Flag_of_the_Central_African_Republic.svg.png",
        ddi: 236,
        continente: "África",
    },
    {
        pais: "República Tcheca",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/23px-Flag_of_the_Czech_Republic.svg.png",
        ddi: 420,
        continente: "Europa",
    },
    {
        pais: "Reunião",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
        ddi: 262,
        continente: "África",
    },
    {
        pais: "Romênia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/23px-Flag_of_Romania.svg.png",
        ddi: 40,
        continente: "Europa",
    },
    {
        pais: "Ruanda",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/23px-Flag_of_Rwanda.svg.png",
        ddi: 250,
        continente: "África",
    },
    {
        pais: "Rússia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/23px-Flag_of_Russia.svg.png",
        ddi: 7,
        continente: "Europa/Ásia",
    },
    {
        pais: "Saara Ocidental",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg/23px-Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg.png",
        ddi: 212,
        continente: "África",
    },
    {
        pais: "Samoa",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/23px-Flag_of_Samoa.svg.png",
        ddi: 685,
        continente: "Oceania",
    },
    {
        pais: "Santa Helena território",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Saint_Helena.svg/23px-Flag_of_Saint_Helena.svg.png",
        ddi: 290,
        continente: "África",
    },
    {
        pais: "São Marinho",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/20px-Flag_of_San_Marino.svg.png",
        ddi: 378,
        continente: "Europa",
    },
    {
        pais: "SaintPierre e Miquelon",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
        ddi: 508,
        continente: "América do Norte",
    },
    {
        pais: "São Tomé e Príncipe",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Sao_Tome_and_Principe.svg/23px-Flag_of_Sao_Tome_and_Principe.svg.png",
        ddi: 239,
        continente: "África",
    },
    {
        pais: "Seicheles",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/23px-Flag_of_Seychelles.svg.png",
        ddi: 248,
        continente: "África",
    },
    {
        pais: "Senegal",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/23px-Flag_of_Senegal.svg.png",
        ddi: 221,
        continente: "África",
    },
    {
        pais: "Serra Leoa",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/23px-Flag_of_Sierra_Leone.svg.png",
        ddi: 232,
        continente: "África",
    },
    {
        pais: "Sérvia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/23px-Flag_of_Serbia.svg.png",
        ddi: 381,
        continente: "Europa",
    },
    {
        pais: "Singapura",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/23px-Flag_of_Singapore.svg.png",
        ddi: 65,
        continente: "Ásia",
    },
    {
        pais: "Síria",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/23px-Flag_of_Syria.svg.png",
        ddi: 963,
        continente: "Ásia",
    },
    {
        pais: "Somália",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/23px-Flag_of_Somalia.svg.png",
        ddi: 252,
        continente: "África",
    },
    {
        pais: "Sri Lanka",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/23px-Flag_of_Sri_Lanka.svg.png",
        ddi: 94,
        continente: "Ásia",
    },
    {
        pais: "Suazilândia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/23px-Flag_of_Eswatini.svg.png",
        ddi: 268,
        continente: "África",
    },
    {
        pais: "Sudão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/23px-Flag_of_Sudan.svg.png",
        ddi: 249,
        continente: "África",
    },
    {
        pais: "Sudão do Sul",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/23px-Flag_of_South_Sudan.svg.png",
        ddi: 211,
        continente: "África",
    },
    {
        pais: "Suécia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/23px-Flag_of_Sweden.svg.png",
        ddi: 46,
        continente: "Europa",
    },
    {
        pais: "Suíça",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/16px-Flag_of_Switzerland.svg.png",
        ddi: 41,
        continente: "Europa",
    },
    {
        pais: "Suriname",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/23px-Flag_of_Suriname.svg.png",
        ddi: 597,
        continente: "América do Sul",
    },
    {
        pais: "Tadjiquistão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/23px-Flag_of_Tajikistan.svg.png",
        ddi: 992,
        continente: "Ásia",
    },
    {
        pais: "Tailândia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/23px-Flag_of_Thailand.svg.png",
        ddi: 66,
        continente: "Ásia",
    },
    {
        pais: "República da China",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/23px-Flag_of_the_Republic_of_China.svg.png",
        ddi: 886,
        continente: "Ásia",
    },
    {
        pais: "Tanzânia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/23px-Flag_of_Tanzania.svg.png",
        ddi: 255,
        continente: "África",
    },
    {
        pais: "Território Britânico do Oceano Índico",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg/23px-Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg.png",
        ddi: 246,
        continente: "África",
    },
    {
        pais: "TimorLeste",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/23px-Flag_of_East_Timor.svg.png",
        ddi: 670,
        continente: "Ásia",
    },
    {
        pais: "Togo",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/23px-Flag_of_Togo.svg.png",
        ddi: 228,
        continente: "África",
    },
    {
        pais: "Tokelau",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokelau.svg/23px-Flag_of_Tokelau.svg.png",
        ddi: 690,
        continente: "Oceania",
    },
    {
        pais: "Tonga",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/23px-Flag_of_Tonga.svg.png",
        ddi: 676,
        continente: "Oceania",
    },
    {
        pais: "Tunísia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/23px-Flag_of_Tunisia.svg.png",
        ddi: 216,
        continente: "África",
    },
    {
        pais: "Turquemenistão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/23px-Flag_of_Turkmenistan.svg.png",
        ddi: 993,
        continente: "Ásia",
    },
    {
        pais: "Turquia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/23px-Flag_of_Turkey.svg.png",
        ddi: 90,
        continente: "Ásia//Europa",
    },
    {
        pais: "Tuvalu",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/23px-Flag_of_Tuvalu.svg.png",
        ddi: 688,
        continente: "Oceania",
    },
    {
        pais: "Ucrânia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/23px-Flag_of_Ukraine.svg.png",
        ddi: 380,
        continente: "Europa",
    },
    {
        pais: "Uganda",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/23px-Flag_of_Uganda.svg.png",
        ddi: 256,
        continente: "África",
    },
    {
        pais: "Uruguai",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/23px-Flag_of_Uruguay.svg.png",
        ddi: 598,
        continente: "América do Sul",
    },
    {
        pais: "Uzbequistão",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/23px-Flag_of_Uzbekistan.svg.png",
        ddi: 998,
        continente: "Ásia",
    },
    {
        pais: "Vanuatu",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/23px-Flag_of_Vanuatu.svg.png",
        ddi: 678,
        continente: "Oceania",
    },
    {
        pais: "Vaticano",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/15px-Flag_of_the_Vatican_City.svg.png",
        ddi: 379,
        continente: "Europa",
    },
    {
        pais: "Venezuela",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/23px-Flag_of_Venezuela.svg.png",
        ddi: 58,
        continente: "América do Sul",
    },
    {
        pais: "Vietnã",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/23px-Flag_of_Vietnam.svg.png",
        ddi: 84,
        continente: "Ásia",
    },
    {
        pais: "Wallis e Futuna",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/23px-Flag_of_France.svg.png",
        ddi: 681,
        continente: "Oceania",
    },
    {
        pais: "Zâmbia",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/23px-Flag_of_Zambia.svg.png",
        ddi: 260,
        continente: "África",
    },
    {
        pais: "Zimbábue",
        img: "https:////upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/23px-Flag_of_Zimbabwe.svg.png",
        ddi: 263,
        continente: "África",
    },
];

function PopoverContent({ countries, onClickCountry, isOpen, onChangeSearch, value, width, }) {
    React__default.useEffect(() => {
        const element = document.getElementById("popover");
        if (width)
            element.style.width = `${width}px`;
    }, [isOpen, width]);
    return (React__default.createElement("div", { className: "eteg-flex eteg-flex-col" },
        React__default.createElement(InputText, { icon: FiSearch, inputClassName: "eteg-rounded-b-none", onChange: (e) => onChangeSearch && onChangeSearch(e.target.value), value: value }),
        countries.map((country) => (React__default.createElement(Button, { variant: "ghost", key: country.pais, className: "eteg-text-foreground eteg-justify-start", size: "sm", onClick: () => onClickCountry(country) },
            React__default.createElement("img", { src: country.img, alt: country.pais, className: "eteg-mr-4" }),
            React__default.createElement("div", { className: "eteg-grid eteg-grid-cols-[30px_10px_auto] eteg-gap-4" },
                React__default.createElement("p", null, `+${country.ddi}`),
                React__default.createElement("span", null, "-"),
                React__default.createElement("p", { className: "eteg-truncate" }, country.pais)))))));
}
const InputPhone = React__default.forwardRef(({ value = "55", onChangeValue, error, label = "Telefone", ...props }, ref) => {
    const divRef = React__default.useRef(null);
    const divWidth = divRef.current?.parentElement?.clientWidth;
    const [search, setSearch] = useState("");
    const selectedCountry = countries.find((country) => country.ddi.toString() === value.split(" ")[0]);
    const filteredCountries = countries.filter((country) => country.pais.toLocaleLowerCase().includes(search.toLowerCase()) ||
        country.ddi.toString().includes(search) ||
        country.continente
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()));
    const mostrarItens = filteredCountries.slice(0, 5);
    const phoneNumber = selectedCountry &&
        value.substring(selectedCountry.ddi.toString().length + 1);
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);
    function phoneMask(telefone, pais) {
        let telefoneTratado = telefone.replace(/[^0-9() -]/, "");
        if (pais.pais === "Brasil") {
            telefoneTratado = telefoneTratado.substring(0, 15);
            telefoneTratado = telefoneTratado.replace(/\D/g, "");
            telefoneTratado = telefoneTratado.replace(/^(\d{2})(\d)/g, "($1) $2");
            telefoneTratado = telefoneTratado.replace(/(\d)(\d{4})$/, "$1-$2");
        }
        if (pais.pais === "Estados Unidos") {
            telefoneTratado = telefoneTratado.substring(0, 14);
            telefoneTratado = telefoneTratado.replace(/\D/g, "");
            telefoneTratado = telefoneTratado.replace(/^(\d{3})(\d)/g, "($1) $2");
            telefoneTratado = telefoneTratado.replace(/(\d)(\d{4})$/, "$1-$2");
        }
        return telefoneTratado.trim();
    }
    function onChangeInput(value, country) {
        const maxLength = 19 - country.ddi.toString().length;
        const formattedPhone = value
            .replace(/[^0-9]/gi, "")
            .substring(0, maxLength);
        onChangeValue && onChangeValue(`${country.ddi} ${formattedPhone}`);
        setPopoverIsOpen(false);
    }
    return (React__default.createElement("div", { "data-error": !!error, className: "twp eteg-flex eteg-flex-col eteg-gap-3 eteg-relative group" },
        React__default.createElement(Label, { "data-error": !!error, "aria-required": props.required }, label),
        React__default.createElement("div", { className: "eteg-relative", ref: divRef },
            React__default.createElement(Popover.Root, { onOpenChange: setPopoverIsOpen, open: popoverIsOpen },
                React__default.createElement(Popover.Trigger, { asChild: true },
                    React__default.createElement(Button, { variant: "ghost", disabled: props.disabled, "data-error": !!error, className: "eteg-flex eteg-gap-1 eteg-absolute eteg-border-r eteg-rounded-none eteg-border-r-input eteg-z-10 data-[error=true]:eteg-border-r-destructive" },
                        React__default.createElement("img", { src: selectedCountry.img, alt: selectedCountry.pais }),
                        React__default.createElement(FiChevronDown, { size: 14, className: "eteg-text-foreground" }))),
                React__default.createElement(Popover.Content, { id: "popover", align: "start", className: "eteg-p-0" },
                    React__default.createElement(PopoverContent, { countries: mostrarItens, onClickCountry: (country) => onChangeInput("", country), isOpen: popoverIsOpen, onChangeSearch: (text) => setSearch(text), value: search, width: divWidth }))),
            React__default.createElement(InputText, { type: "tel", value: phoneMask(phoneNumber, selectedCountry), onChange: (e) => onChangeInput(e.target.value, selectedCountry), name: "Pais", inputClassName: "eteg-pl-20", ...props, ref: ref, error: error }))));
});
InputPhone.displayName = "InputPhone";

export { AlertDialog, Avatar, Badge, Button, Checkbox, Combobox, Dialog, Header, InputDate, InputFile, InputPhone, InputText, Label, Pagination, Select, Separator, Skeleton, Table, badgeVariants };
//# sourceMappingURL=index.esm.js.map
