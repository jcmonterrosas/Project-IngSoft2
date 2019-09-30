import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Btncambio extends Component {
  constructor(props) {
    super(props);

    this.onNavigate = this.onNavigate.bind(this);
  }

  onNavigate(){
    this.props.history.push(this.props.link);
    console.log(this.props.link);
  }

  render() {
    
    return (
      <div className="button">
          <button type="button" class="btn btn-warning" disabled={this.props.disabled} onClick={this.onNavigate}>
             {this.props.buttontext}
            </button>
      </div>
    );
  }
}

export default withRouter(Btncambio);