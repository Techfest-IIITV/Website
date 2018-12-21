import React from 'react';
import {connect} from 'react-redux';

import Team from '../team';
import './styles.css';

class About extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }
  render() {
    return <div className="uk-container">
      <div className={'uk-margin-large-top'}>
        <div className={'team-title'}>Team</div>
        {this.props.team.map((team, idx) => <Team key={idx} team={team}/>)}
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    team: state.team.team
  }
};

export default connect(mapStateToProps)(About);
