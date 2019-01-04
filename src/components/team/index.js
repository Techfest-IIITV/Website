import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import "./team.css";

class Team extends React.Component {
  render() {
    return <div className="team-section">
      <div uk-grid="true" className={'uk-grid-large uk-child-width-expand@s'}>
        {this.props.team.members.map((member, idx) => <div
          className={'uk-width-1-3@s uk-width-1-4@m uk-width-1-5@l uk-margin-large-top'} key={idx}>
          <img src={member.img ? member.img : '/fest-logo.png'} className={'uk-thumbnail'}
               alt={member.name}
               style={{width: '100%', overflow: 'hidden', backgroundSize: 'cover', backgroundPosition: 'center'}}/>
          <div className={'uk-margin-top'}>{member.name}</div>
          <div>
            <span className={'primary-color team-name'}>{this.props.team.name}</span>
          </div>
          <div className="team-name">
            {member.links.github &&
            <a href={member.links.github} target={'_blank'} className={'uk-margin-right team-ext'}><FaGithub/></a>}
            {member.links.linkedin &&
            <a href={member.links.linkedin} target={'_blank'} className={'uk-margin-right team-ext'}><FaLinkedin/></a>}
            {member.links.twitter &&
            <a href={member.links.twitter} target={'_blank'} className={'uk-margin-right team-ext'}><FaTwitter/></a>}
            {member.links.facebook &&
            <a href={member.links.facebook} target={'_blank'} className={'uk-margin-right team-ext'}><FaFacebook/></a>}

          </div>
        </div>)}
      </div><hr className="separator"/>
    </div>
  }
}

export default Team;
