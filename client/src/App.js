import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card"
import logos from "./logos.json"

class App extends Component {
  state = {
    score: 0,
    clickedItems: [],
    logos
  }

  shuffle = () => {
    let logos = [...this.state.logos]
    logos.sort(() => Math.random() - 0.5);
    this.setState({
      logos
    })
  }

  clicked = id => {
    console.log("hello")
    console.log(id)
    if (this.state.clickedItems.indexOf(id) > -1) {
      this.setState({ 
        score: 0,
        clickedItems:[]
       })
      console.log("true")
    }
    else {
      let clickedItems = [...this.state.clickedItems]
      clickedItems.push(id)
      this.setState({
        clickedItems,
        score: this.state.score + 1
      })
      console.log("false")
    }
    this.shuffle()
  }

  componentDidMount(){
    this.shuffle()
  }
  


  render() {
    return (
      <div className="App">
        {this.state.score}
        {this.state.logos.map(logo => (
          <Card
            clicked={this.clicked}
            id={logo.id}
            url={logo.url}
            title={logo.title}
            key={logo.id}
          />
        ))}

      </div>
    );
  }
}

export default App;
