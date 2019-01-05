import React from 'react';
import { connect } from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';

import Countdown from './Countdown';
import EventList from './EventList';

class Home extends React.Component {
	componentDidMount() {
		document.body.scrollTop = 0;
	}

	render() {
		return (
			<ReactFullpage
				responsiveWidth={960}
				navigation
				render={({ state, fullpageApi }) => {
					return (
						<ReactFullpage.Wrapper>
							<div className="section">
								<Countdown />
							</div>
							<div className="section">
								<EventList />
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.event.loadingEvents
	};
};

export default connect(mapStateToProps)(Home);
