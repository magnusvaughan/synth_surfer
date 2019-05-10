import React from 'react';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    var data = require('./data/data.json');
    super(props);
    this.state = { synths: data };
  }

  componentDidMount() {

  }

  render() {

    const items = this.state.synths.map((item, key) =>
        <div>
        <img className="synth-image" src={item.image_url} alt=""/>
        <div className="synth" key={item.name}>{item.name}</div>
        </div>

    );

    return ( 
      <div className="App">
          {items}
      </div>
    );

  }
}

export default App;
