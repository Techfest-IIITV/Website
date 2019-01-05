import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import '../styles/Team.css';

const Team = props => (
	<div className="team-section">
		<div uk-grid="true" className={'uk-grid-large uk-child-width-expand@s'}>
			{props.team.members.map((member, idx) => (
				<div className="uk-width-1-3@s uk-width-1-4@m uk-width-1-5@l uk-margin-large-top uk-text-center" key={idx}>
					<img
						src={member.img ? member.img : '/fest-logo.png'}
						className="uk-thumbnail uk-border-circle fest-logo"
						alt={member.name}
					/>
					<div className="uk-margin-top">{member.name}</div>
					<div>
						[ <span className="primary-color">{props.team.name}</span> ]
					</div>
					<div className={'uk-margin-left'}>
						{member.links.github && (
							<a href={member.links.github} target="_blank" className="uk-margin-right team-ext">
								<FaGithub />
							</a>
						)}
						{member.links.linkedin && (
							<a href={member.links.linkedin} target="_blank" className="uk-margin-right team-ext">
								<FaLinkedin />
							</a>
						)}
						{member.links.twitter && (
							<a href={member.links.twitter} target="_blank" className="uk-margin-right team-ext">
								<FaTwitter />
							</a>
						)}
						{member.links.facebook && (
							<a href={member.links.facebook} target="_blank" className="uk-margin-right team-ext">
								<FaFacebook />
							</a>
						)}
					</div>
				</div>
			))}
		</div>
		<hr className="separator" />
	</div>
);

export default Team;