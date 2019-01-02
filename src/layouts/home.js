import React, {Component} from 'react';
import brandImage from '../images/greenify.svg';
import InfoField from '../components/infoField';
import ActionButton from '../components/actionButton';

export default class Main extends Component{
  render(){
    return(
      <div className="home-page">
        <p className="brand-name">greenify</p>
        <img className="" src={brandImage} alt="Greenify company logo"/>
        <InfoField name="account" value="15810203"/>
        <InfoField name="balance" value="250"/>
        <ActionButton name="withdraw"/>
        <ActionButton name="deposit"/>
        <p className="footer-branding">galmendarez &copy; 2019</p>
      </div>
    );
  }
}