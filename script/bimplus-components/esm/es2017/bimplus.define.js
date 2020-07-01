
// bimplus: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './bimplus.core.js';
import { COMPONENTS } from './bimplus.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
