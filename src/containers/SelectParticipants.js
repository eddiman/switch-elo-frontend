import React, { Component } from 'react';



class SelectParticipants extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
  render() {
        const params = this.props.match.params;

      return (
          <div className="Home">
              Winlose
              {console.log(params)}
              {params.gameId}
          </div>
    );
  }
}

export default SelectParticipants;
