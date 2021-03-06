import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    // this.setState((previousState) => {
    //     console.log('previousState', previousState)
    //     if(!previousState.hasBeenClicked) {
    //         return {
    //             hasBeenClicked: true
    //         }
    //     }
    // })

    this.setState(() => { 
        return { hasBeenClicked: true } 
    })

  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
