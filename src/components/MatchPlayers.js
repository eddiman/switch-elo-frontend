import React, { Component } from 'react';
import styled from "styled-components";
import theme from "../globals/themes";

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
`;
const ImageDiv = styled.div`
width: 18rem;
height: 18rem;
    border-radius: 50%;
    justify-self: center;
    align-self: center;
    background-color: ${theme.background.paper};
    box-shadow: ${theme.other.boxShadow};
`;

const CardElementDiv = styled.div`
margin: 1rem;
    justify-self: center;
    align-self: center;
    border-radius: ${theme.other.cardRadius}; 
    background-color: ${theme.background.paper};
    box-shadow: ${theme.other.boxShadow};
`;

class MatchPlayers extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {CardTitle, players, CurrentState} = this.props;         
        return (
            <Container>
                <ImageDiv/>
                <CardElementDiv>
                    <h2>Select a winner</h2>
                </CardElementDiv>
            </Container>
        );
    }
}

export default MatchPlayers;
