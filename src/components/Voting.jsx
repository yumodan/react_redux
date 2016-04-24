import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import pureRender from 'pure-render-decorator';

@pureRender
export default class Voting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="voting">{
        this.props.winner ? 
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />
      }</div>
    );
  }
}