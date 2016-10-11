import React, { PropTypes } from 'react';
import vl from 'vega-lite';
import createClassFromSpec from './createClassFromSpec.js';

// USAGE:
// createClassFromSpec(name, spec);
// createClassFromSpec(spec);
export default function createClassFromLiteSpec(...args) {
  const spec = args.length === 1 ? args[0] : args[1];
  const vgSpec = vl.compile(spec).spec;
  return createClassFromSpec(vgSpec);
}
