import React from 'react';
import ReactDOM from 'react-dom';

// const container = document.getElementById('contents');
// ReactDOM.render(<p>こんにちは、世界</p>, container);
interface Container {
  fontFamily: string,
  fontSize: number,
  background: string,
}
interface AllObj {
  container: Container,
}

/**
 * スタートボタン
 */
class StartButton extends React.Component {
  styles(): AllObj {
    const container: Container = {
      fontFamily: 'helvetica, arial, "hiragino kaku gothic pro", meiryo, "ms pgothic", sans-serif',
      fontSize: 11,
      background: '#ff00ff',
    };
    return ({container});
  }
  /*
  onMouseLeave() {
        this.setState({hovered: false});
    }
    onMouseEnter() {
        this.setState({hovered: false});
    }
  */
  render(){
    return (
      <span style={this.styles().container}>start</span>
      // onMouseEnter={::this.onMouseEnter}
      // onMouseLeave={::this.onMouseLeave}>いいね！</span>
    );
  }
}
  
ReactDOM.render(
  <StartButton />,
  document.getElementById('startButton')
);