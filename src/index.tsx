import React from 'react';
import ReactDOM from 'react-dom';
import ChildProcess from 'child_process';

// const container = document.getElementById('contents');
// ReactDOM.render(<p>こんにちは、世界</p>, container);
/**
 * スタートボタン情報クラス
 */
class StartButton extends React.Component {
  state = {
    background: '',
  };
  leave=()=>{
    this.setState({
      background: '#00ff00',
    });
  }
  enter=()=>{
    this.setState({
      background: '#00ffff',
    });
  }
  onClickEvent=()=>{
    // python を呼び出す
    const command = 'python ./src/python/hello.py';
    ChildProcess.exec(command, (error:any, stdout:any, stderr:any)=>{
      if (error != null) {
        console.log(error);
      } else {
        console.log(stdout);
      }
    });
  }

  /**
   * レンダー
   * @return {any} button tag
   */
  render() {
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
    document.getElementById('startButton'),
);
