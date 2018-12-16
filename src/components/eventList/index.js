import React, { Fragment } from 'react';
import {connect} from 'react-redux';

import Panel from "../Panel";
import './styles.css';

class EventList extends React.Component {

  render() {

    let listEventsJsx = []

    if ( this.props.event ) {
      let events = this.props.event.events;
      let listEvents = [];
      while (events.length !== 0) {
        let arr = [...events.splice(0, 3)]
        arr = arr.filter(a => a !== undefined)
        listEvents.push(arr)
      }
      
      const listEventsLength = listEvents.length

      listEventsJsx = listEvents.map((chunk, i) => {
        return  <div key={i} className=' event-list section'>
          <div className={'uk-text-center uk-margin-medium-bottom'}>
            <span className={'event-list-heading'}>PAST</span>
            {' '}
            <span className={'event-list-heading'}>EVENTS</span>
            {' '}
            <span className={'event-list-heading'}>{`${i+1}/${listEventsLength}`}</span>
          </div>
          <div uk-grid="true" className={'uk-grid-large uk-child-width-expand@s'}>
            {chunk.map(c => {
              return (<Panel key={c.id} event={c}/>)
            })}
          </div>
        </div>
      })
    }
    
    return (
      <Fragment>
        {listEventsJsx ? listEventsJsx : (<div style={{color: 'white'}} className='section'>Loading...</div>)}
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
