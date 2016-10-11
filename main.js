const data1 = {
  "values": [
    {"a": "A","b": 20}, {"a": "B","b": 34}, {"a": "C","b": 55},
    {"a": "D","b": 19}, {"a": "E","b": 40}, {"a": "F","b": 34},
    {"a": "G","b": 91}, {"a": "H","b": 78}, {"a": "I","b": 25}
  ]
};

const data2 = {
  "values": [
    {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},
    {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},
    {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}
  ]
};

const spec1 = {
  "description": "A simple bar chart with embedded data.",
  "mark": "bar",
  "encoding": {
    "x": {"field": "a", "type": "ordinal"},
    "y": {"field": "b", "type": "quantitative"}
  }
};

const spec2 = {
  "description": "A simple bar chart with embedded data.",
  "mark": "bar",
  "encoding": {
    "x": {"field": "b", "type": "quantitative"},
    "y": {"field": "a", "type": "ordinal"},
  }
};

const VegaLite = ReactVegaLite.default;
const BarChart = ReactVegaLite.createClassFromLiteSpec(spec1);

const code1 = `<VegaLite data={this.state.data} spec={this.state.spec} />`;

const code2 = `const BarChart = ReactVegaLite.createClassFromLiteSpec(spec1);
<BarChart data={this.state.data} />`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      spec: spec1,
      data: data1
    };

    this.handleHover = this.handleHover.bind(this);
    this.toggleSpec = this.toggleSpec.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  handleHover(...args) {
    this.setState({
      info: JSON.stringify(args)
    });
  }

  toggleSpec() {
    if(this.state.spec === spec1) {
      this.setState({ spec: spec2 });
    } else {
      this.setState({ spec: spec1 });
    }
  }

  updateData() {
    if(this.state.data === data1) {
      this.setState({ data: data2 });
    } else if(this.state.data === data2) {
      this.setState({ data: data1 });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleSpec}>Toggle Spec</button>
        <button onClick={this.updateData}>Update data</button>
        <h3><code>&lt;VegaLite&gt;</code> React Component</h3>
        Will recompile when spec changes and update when data changes.
        <pre>{code1}</pre>
        <VegaLite data={this.state.data} spec={this.state.spec} onSignalHover={this.handleHover}/>
        <h3><code>ReactVegaLite.createClassFromLiteSpec()</code></h3>
        Use the given spec to create a reusable component.
        <pre>{code2}</pre>
        <BarChart data={this.state.data} onSignalHover={this.handleHover}/>
        {this.state.info}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
