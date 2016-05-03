import React from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
export default class Results extends React.Component {
  constructor(){
    super()
    this.getPair = this.getPair.bind(this);
  }

  getPair(){
    return this.props.pair || [];
  }

  render(){
    return (
      <div className="results">{
        this.getPair().map(entry => 
          <div key={entry} className="entry">
            <h1>{entry}</h1>
          </div>)
      }</div>
    );
  }
}