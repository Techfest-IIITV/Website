import React, {Component} from 'react';
import './style.css';

class Countdown extends Component {
  handleStartClick() {
    document.querySelector('.event-list').scrollIntoView(true);
  }
  render() {
    return (
      <div className="countdown">
        <img className={'uk-margin-large-bottom cerebro-hero'} src='./fest-logo.png' alt=""/>
        {/*<hr style={{width: '260px'}}/>
        <span className="countdown-header">LIVE NOW</span>*/}
        <div className="uk-grid-small uk-child-width-auto timer" uk-grid="true"
             uk-countdown="date: 2019-03-02T09:00:00+05:30">
          <div>
            <div className="uk-countdown-number uk-countdown-days"></div>
            <div className="uk-countdown-label uk-text-center">DAYS</div>
          </div>
          <div className="uk-countdown-separator">:</div>
          <div>
            <div className="uk-countdown-number uk-countdown-hours"></div>
            <div className="uk-countdown-label uk-text-center">HRS</div>
          </div>
          <div className="uk-countdown-separator">:</div>
          <div>
            <div className="uk-countdown-number uk-countdown-minutes"></div>
            <div className="uk-countdown-label uk-text-center">MINS</div>
          </div>
          <div className="uk-countdown-separator">:</div>
          <div>
            <div className="uk-countdown-number uk-countdown-seconds"></div>
            <div className="uk-countdown-label uk-text-center">SECS</div>
          </div>
        </div>
        <ul className="divider-container uk-align-left">
          <ul className="divider-wrapper uk-align-left">
            <li className="uk-divider-vertical uk-align-center"></li>
            <li className="uk-align-center" uk-icon="twitter"></li>
            <li className="uk-align-center" uk-icon="instagram"></li>
            <li className="uk-align-center" uk-icon="facebook"></li>
          </ul>
        </ul>
        {/* <div className="next-year">SEE YOU NEXT YEAR!</div> */}
      </div>
    )
  }
}

export default Countdown;
