import React from 'react';
import VegaLite from './VegaLite.js';

// USAGE:
// createClassFromLiteSpec(name, spec);
// createClassFromLiteSpec(spec);
export default function createClassFromLiteSpec(...args) {
  const spec = args.length === 1 ? args[0] : args[1];

  const propTypes = Object.assign({}, VegaLite.propTypes);
  delete propTypes.spec;

  function Chart(props) {
    return <VegaLite spec={spec} {...props} />;
  }

  Chart.getSpec = function getSpec() {
    return spec;
  };

  Chart.propTypes = propTypes;

  return Chart;
}
