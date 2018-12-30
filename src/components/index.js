import React from 'react';
import {connect} from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';

import Countdown from './Countdown';
import EventList from './eventList';

import './index.css'

class Home extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }

  render() {
      {/* <img className="absolute triangle" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/triangle.png?alt=media&token=f3cbbbed-2d31-4201-a051-8d123d594156" alt=""/>}
      {<img className="absolute square" src="https://firebasestorage.googleapis.com/v0/b/cerebro-2018-f1052.appspot.com/o/square.png?alt=media&token=8979df90-1eaf-466e-9ef9-94546eec3e90" alt=""/>}
      {<div className={'absolute triangle'}/>}
      {<div className={'absolute square'} />} */}
    return (
       <ReactFullpage
        responsiveWidth={960}
        navigation
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

const mapStateToProps = state => {
  return {
    loading: state.event.loadingEvents
  }
}

export default connect(mapStateToProps)(Home);
