import React, { PropTypes } from 'react';
import vl from 'vega-lite';
import Vega from './Vega.js';

const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  spec: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.object,
  viewport: PropTypes.array,
  renderer: PropTypes.string,
  data: PropTypes.object,
};

class VegaLite extends React.Component {
  render() {
    const parsedProps = Object.assign({}, this.props);
    parsedProps.spec = vl.compile(this.props.spec).spec;

    return <Vega {...parsedProps} />;
  }
}

VegaLite.propTypes = propTypes;

export default VegaLite;
