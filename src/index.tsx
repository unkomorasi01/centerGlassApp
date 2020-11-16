import React from 'react';
import ReactDOM from 'react-dom';

// const container = document.getElementById('contents');
// ReactDOM.render(<p>こんにちは、世界</p>, container);

/**
 * スタートボタン
 */
class StartButton extends React.Component {
  state = {
    background: '',
  };
  leave=()=>{
    this.setState({
      background:'#00ff00'
    });
  }
  enter=()=>{
    this.setState({
      background:'#00ffff'
    });
  }
  onClickEvent=()=>{
    console.log('The link was clicked.');
  }

  render(){
    return (
      <span
        className='button'
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}
        onClick={this.onClickEvent}
        style={this.state}
      >start</span>
    );
  }
}
  
ReactDOM.render(
  <StartButton />,
  document.getElementById('startButton')
);