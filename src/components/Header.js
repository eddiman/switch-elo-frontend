import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../globals/themes";
import Clock from 'react-live-clock';


const HeaderBar = styled.header`
width: 100%;
display: flex;
border-bottom 1px solid ${theme.secondary.standardIcon};
background-color: ${theme.background.base};
`;

const ProfileIcon = styled.div`
border: 1px #D6D6D6 solid
border-radius: 50%;
height: 4rem;
width: 4rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: opacity .4s;

 &:hover {
   animation: wiggle .4s ease-in-out forwards;
   opacity: 0.8;
}

i {
color: ${props => props.iconColor || "#000"};
font-size: 2rem; 
}
    `;

const SettingsIcon = styled.i`
color: ${props => props.iconColor || "#000"};
font-size: 2rem; 
cursor: pointer;
margin: 0 2rem;
transition: opacity .4s;
 &:hover {
   animation: wiggle .4s ease-in-out forwards;
   opacity: 0.8;
`;

const ClockComp = styled.span`
font-size: 3.5rem;
font-weight: 300;
color: ${theme.text.standardText}
`;

const FlexItem = styled.div`
display:flex;
flex: 1;
justify-content: ${props => props.justify};
align-items: center;
padding: 2rem
`;
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderBar className={"header"}>

                <FlexItem className= {"flex-item"} justify={"flex-start"}>
                    <ProfileIcon iconColor={theme.secondary.standardIcon}>
                        <i className="material-icons">person</i>
                    </ProfileIcon>
                    <SettingsIcon  className="material-icons" iconColor={theme.secondary.lightBlue}>settings</SettingsIcon>
                </FlexItem>
                <FlexItem className= {"flex-item"} justify={"flex-end"}>
                    <ClockComp>         <Clock format={'HH:mm'} ticking={true} timezone={'Europe/Oslo'} />
                    </ClockComp>
                </FlexItem>
            </HeaderBar>
        );
    }
}

export default Header;
