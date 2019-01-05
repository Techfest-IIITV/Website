import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Panel from './Panel';

import '../styles/EventList.css';

class EventList extends React.Component {
	render() {
		let listEventsJsx = [];

		if (this.props.event) {
			let events = this.props.event.events;
			listEventsJsx = events.map(event => {
				return (
					<li className="uk-width-3-4" key={event.id}>
						<Panel event={event} />
					</li>
				);
			});
		}

		return (
			<Fragment>
				<div uk-slider="finite: true,autoplay: true, autoplay-interval: 1500ms" className="uk-light full-width">
					<ul className="uk-slider-items uk-grid">{listEventsJsx}</ul>
					<div className="uk-light">
						<a
							id="slider-arrow-left"
							uk-icon="icon: chevron-left; ratio: 2"
							className="uk-slidenav-medium uk-position-center-left"
							href="#"
							uk-slidenav-previous="true"
							uk-slider-item="previous"
						/>
						<a
							id="slider-arrow-right"
							uk-icon="icon: chevron-right; ratio: 2"
							className="uk-slidenav-medium uk-position-center-right"
							href="#"
							uk-slidenav-next="true"
							uk-slider-item="next"
						/>
					</div>
					<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		event: state.event
	};
};

export default connect(mapStateToProps)(EventList);
