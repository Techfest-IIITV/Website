import React from 'react';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';
import ReactFullpage from '@fullpage/react-fullpage'; 

import Countdown from './Countdown';
import EventList from './eventList';

class Home extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }

  render() {
    return (
       <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Countdown/>
              </div>
              <EventList />
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.event.loadingEvents
  }
}

export default connect(mapStateToProps)(Home);


