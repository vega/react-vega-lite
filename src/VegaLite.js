import React from 'react';
import vl from 'vega-lite';
import Vega from 'react-vega';

class VegaLite extends React.Component {
  render() {
    const parsedProps = Object.assign({}, this.props);
    const combinedSpec = Object.assign({}, this.props.spec);
    if (this.props.data) {
      combinedSpec.data = this.props.data;
      delete parsedProps.data;
    }
    parsedProps.spec = vl.compile(combinedSpec).spec;

    return <Vega {...parsedProps} />;
  }
}

VegaLite.propTypes = Vega.propTypes;

export default VegaLite;
