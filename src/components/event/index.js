import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import '../../css/EventDetail.css'

import {registerToEvent, unregisterFromEvent} from "../../actions/eventActions";

class Event extends React.Component {
  componentDidMount() {
     document.body.scrollTo = 0;
  }
  render() {
    let eventId = this.props.match.params.id;
    if (this.props.event.events.length <= eventId) {
      return <div>Loading</div>
    }
    let event = this.props.event.events[eventId];
    let isRegistered = event.participants && this.props.user && _.some(Object.keys(event.participants), i => i === this.props.user.uid);
    /**
     * event can now be used to render everything here. We can know if
     * the user has already registered to the event and display the
     * register button accordingly
     */
    return <div className="uk-container uk-margin-large-top">
      <div uk-grid="true" className="uk-grid-large uk-child-width-expand@s">
        <div className={'uk-width-1-2@s'}>
          <div className="event-name uk-text-bold">{event.name}</div>
          <div className={'primary-color uk-margin-large-top'}>PRIZE WORTH: <b>{event['prize-worth']}</b></div>
          <div className={'primary-color uk-margin-small-top'}>TEAM SIZE: <b>{event['team-size']}</b></div>
          <div className={'primary-color uk-margin-small-top'}>VENUE: <b>{event['venue']}</b></div>
          <div className={'primary-color uk-margin-small-top'}>DATE: <b>{event['start-time'].slice(0,11)}</b></div>
          <div className={'primary-color uk-margin-small-top'}>TIME: <b>{event['start-time'].slice(11)} - {event['end-time'].slice(11)}</b></div>
          <div className={'uk-margin-large-top'}>
            <h3 className="contacts uk-text-bold">Contacts :</h3>
            <div className={'uk-margin-top'}>
              {Object.keys(event.contact).map(role => <div className={'uk-flex uk-flex-between'} key={role}>
                <div>{event.contact[role].name} ({event.contact[role].role})</div>
                <div className={'primary-color'}>{event.contact[role].phone}</div>
              </div>)}
            </div>
          </div>
        </div>
        <div className={'uk-width-1-2@s'}>
          <img src={event.img ? event.img: "/fest-logo.png"} alt=""></img>
          <div className="uk-margin-medium-top uk-flex uk-flex-center">
            <div>{this.props.user ? (
                isRegistered ? <button className="unregister"
                                       onClick={() => this.props.unregisterFromEvent(event)} disabled>Unregister</button> :
                  <button className="register" onClick={() => this.props.registerToEvent(event)} disabled>Register</button>) :
              'Please log in to register!'}
            </div>
            <span className="uk-margin-left go-back" onClick={() => this.props.history.push('/')}> Back to Events
            </span>
          </div>
        </div>
      </div>
      <div uk-grid="true" className="uk-child-width-expand@s">
        <div className={'uk-width-2-5@s event-information'}>
          <div className="uk-margin-large-top rules">
            <div className="contacts">Rules</div>
            <ul className={'rule-ul'}>
              {event.rules.map((rule, idx) => <li className={'uk-margin-small-top faded rule-li'}
                key={idx} dangerouslySetInnerHTML={{__html: rule}}/>)}
            </ul>
          </div>
        </div>
        <div className={'uk-width-1-5@s'}>
            <hr className="uk-margin-large-top divider uk-divider-vertical"></hr>
        </div>
        <div className={'uk-width-2-5@s'}>
          <div className="uk-margin-large-top contacts">Description</div>    
          <p className={'faded'}>{event.description}</p>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    user: state.auth.user,
  }
};

export default connect(mapStateToProps, {
  registerToEvent, unregisterFromEvent
})(Event);
