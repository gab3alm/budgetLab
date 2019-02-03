import React, {Component} from 'react';

class ActionButton extends Component{

  constructor(props){
    super(props);
    this.executeAction = this.executeAction.bind(this);
  }

  executeAction(e){
    const input = this.refs[this.props.name];
    const value = input.value;
    this.props.action(value);
    input.value = "";
  }

  render(){
    return(
      <div className="action">
        <input className="input" type="text" name={this.props.name} ref={this.props.name}/>
        <button className="btn btn-success btn-action" onClick={this.executeAction}>{this.props.name}</button>
      </div>
    );
  }
}

export default ActionButton;