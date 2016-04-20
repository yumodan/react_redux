import React from 'react';

export default class Voting extends React.Component {
  constructor(props) {
    super(props);
    this.hasVotedFor = this.hasVotedFor.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.getPair = this.getPair.bind(this);
  }
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
  render() {
    return (
      <div className="voting">{
        this.props.winner ? 
          <div ref="winner"> Winner is {this.props.winner}!</div> :
          this.getPair().map(entry => 
            <button key={entry}
              disabled={() => this.isDisabled()}
              onClick={() => this.props.vote(entry)}>
              <h1>{entry}</h1>
              {this.hasVotedFor(entry) ?
                <div className="label">Voted</div> :
                null}
            </button>
          )
      }</div>
    );
  }
}