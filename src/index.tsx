import React from 'react';
import ReactDOM from 'react-dom';
import ChildProcess from 'child_process';
import fs from 'fs';
import {ipcRenderer} from 'electron';
// const BrowserWindow = require('electron').remote.BrowserWindow

// const container = document.getElementById('contents');
// ReactDOM.render(<p>こんにちは、世界</p>, container);
/**
 * スタートボタン情報クラス
 * @return {void}
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

  getWindowPosition = () => {
    try {
      const position = JSON.parse(
          fs.readFileSync('./dist/bounds.json', 'utf8'),
      );
      return position;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  // 透明部分の左角の座標取得
  getCorner = () => {
    const coordinates 
        = document.getElementById('corner')!.getBoundingClientRect();
    return ({
      x: coordinates.x,
      y: coordinates.y + 10,
    });
  }

  onClickEvent=()=>{
    const position = this.getCorner();
    console.log(position);
    console.log(this.getWindowPosition());
    // ウィンドウ操作
    ipcRenderer.sendSync('push-start', 'data');
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
