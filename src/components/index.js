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
              <div className="section">
                <EventList />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
    )
  }
}

export default connect()(Home);


