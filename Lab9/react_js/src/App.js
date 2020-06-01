import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0],
      currentImagesIndex: data.properties.index
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  deletePhoto = () => {
        this.state.properties.splice(this.state.currentImagesIndex, 1)
        this.setState({properties: this.state.properties})
    }

  InputPhoto = (e) => {this.setState({input: e.target.value})}

  render() {
    const {properties, property} = this.state;
    return (

      <div className="App">
        <div>
              Photo URL<input type="text" value={this.state.input} onChange={this.InputPhoto} />
              <button type="button" onClick={this.onSubmit}>Add</button>
        </div>
        <button className="buttonDesign"
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >←</button>
        <button className="buttonDesign"
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length-1}
        >→</button>
        <div><button className="buttonDelete" onClick={this.deletePhoto}>Delete</button></div>
        <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {properties.map(property => <Card key={property._id} property={property} />)}
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
