import React from 'react';

export default class Voting extends React.Component {
  constructor(props) {
    super(props);
  }
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  render() {
    return (
      <div className="voting">{
        this.getPair().map(entry => 
          <button key={entry}>
            disabled={this.isDisabled()}
            onClick={() => this.props.vote(entry)}
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