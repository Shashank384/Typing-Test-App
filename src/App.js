import React from 'react';
import DisplayParragraph from './DisplayParragraph';
import CalAccuracy from './CalAccuracy';
import Parragraph from './Parragraph';

const initialState = {
  text: Parragraph(),
  inputValue: '',
  timer: 60,
  correctCharCount: 0,
  started: false,
  finished: false
}

class App extends React.Component {

  state = initialState;

  handleChange = (e) => {
    const currentChar = e.target.value;
    this.setCounter();
    this.setState({
      inputValue: currentChar,
      correctCharCount: this.findCorrectChar(currentChar)
    })
  }

  setCounter() {
    if (!this.state.started) {
      this.setState({started: true});

      this.interval = setInterval(() => {
        this.setState(prevState => ({
          timer: prevState.timer - 1,
        }), () => {
          if (this.state.timer === 0) {
            clearInterval(this.interval);
            this.setState({
              started: false,
              finished: true
            })
          }
        });
      }, 1000)
    }
  }

  handleReset = () => {
    this.setState(initialState)
  }

  findCorrectChar(inputValue) {
    const text = this.state.text.replace(' ', '');
    return inputValue.replace(' ', '').split('').filter((value,index) => value === text[index]).length;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
          <a className="navbar-brand" href="/">Typing Test App</a>
        </nav>
      
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-9">
            <DisplayParragraph text={this.state.text} inputValue={this.state.inputValue}/>
            <textarea
              id="inputValue"
              value={this.state.inputValue}
              onChange={this.handleChange}
              className="form-control mb-4"
              style={{fontSize:"20px"}}
              placeholder="Start Your Typing Test..."
              readOnly={this.state.finished}
            ></textarea>
            <div className="text-center">
              <button className="btn btn-primary" 
                style={{fontSize: "20px"}}
                onClick={this.handleReset}>Start Test Again</button>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="card" style={{width: "12rem", backgroundColor: "#007ff7", color: "white"}}>
            <div className="card-body">
              <div style={{textAlign: "center", fontSize:"20px"}}>Time <h1>00:{this.state.timer}</h1> </div>
              <h5 className="card-title" style={{textAlign: "center", fontSize:"20px"}}>Typing Speed</h5>                    
              <CalAccuracy time={this.state.timer} correctCharCount={this.state.correctCharCount}/>
            </div>
          </div>

          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
