import React from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
export default class Results extends React.Component {
  constructor(){
    super()
    this.getPair = this.getPair.bind(this);
    this.getTally = this.getTally.bind(this);
  }

  getPair(){
    return this.props.pair || [];
  }

  getTally(entry){
    if(this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  render(){
    return (
      <div className="results">{
        this.getPair().map(entry => 
          <div key={entry} className="entry">
            <h1>{entry}</h1>
            <div className="voteCount">
              {this.getTally(entry)}
            </div>
          </div>)
      }</div>
    );
  }
}