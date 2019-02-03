import React, {Component} from 'react';
import brandImage from '../images/greenify.svg';
import InfoField from '../components/infoField';
import ActionButton from '../components/actionButton';
import {connect} from 'react-redux';
import {addMoney, decMoney} from '../actions';

class Main extends Component{
  render(){
    return(
      <div className="home-page">
        <p className="brand-name">greenify</p>
        <img className="" src={brandImage} alt="Greenify company logo"/>
        <InfoField name="account" value="15810203"/>
        <InfoField name="balance" value={this.props.balance}/>
        <ActionButton name="withdraw" action={this.props.decMoney}/>
        <ActionButton name="deposit" action={this.props.addMoney}/>
        <p className="footer-branding">galmendarez &copy; 2019</p>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {balance: state}
};
const mapDispatchToProps = {addMoney, decMoney};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)