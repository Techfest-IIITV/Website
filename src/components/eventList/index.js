import React, { Fragment } from 'react';
import {connect} from 'react-redux';

import Panel from "../Panel";
import './styles.css';

class EventList extends React.Component {
  render () {
    let listEventsJsx = []

    if (this.props.event) {
      console.log('Helloooo')
      let events = this.props.event.events
      // let listEvents = []
      // while (events.length !== 0) {
      //   let arr = [...events.splice(0, 3)]
      //   arr = arr.filter(a => a !== undefined)
      //   listEvents.push(arr)
      // }

      // const listEventsLength = listEvents.length

      listEventsJsx = events.map((event) => {
        return (
          <li className='uk-width-3-4' style={{width: '400px'}} key={event.id}>
            <Panel event={event}/>
          </li>)
      })
    }
    return (
      <Fragment>
        <div uk-slider="center: true" className="uk-light" style={{width:'1200px'}}>
          <ul className='uk-slider-items uk-grid'>
            {listEventsJsx}
          </ul>
          <a class="uk-light uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
          <a class="uk-dark uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  }
};

export default connect(mapStateToProps)(EventList);
