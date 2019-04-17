import React, { Component } from 'react';
import styled from 'styled-components';
import theme from "../globals/themes";
import Clock from 'react-live-clock';
import settingsSnd from '../assets/sound/Settings.wav'
import constants from "../globals/constants";

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

  @media ${constants.device.mobileL} {
    height: 3rem;
    width: 3rem;
}

 &:hover {
   animation: wiggle .3s ease-in-out forwards;
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
  @media ${constants.device.mobileL} {
    margin: 0 1rem;

}
 &:hover {
   animation: wiggle .3s ease-in-out forwards;
   opacity: 0.8;
`;

const ClockComp = styled.span`
font-size: 3.5rem;
font-weight: 300;
color: ${theme.text.standardText}
  @media ${constants.device.mobileL} {
    font-size: 2.5rem;
}
`;

const FlexItem = styled.div`
display:flex;
flex: 1;
justify-content: ${props => props.justify};
align-items: center;
padding: 2rem;
  @media ${constants.device.mobileL} {
    padding: 1rem;
}
`;
class Header extends Component {
    constructor(props) {
        super(props);
        this.soundRef = React.createRef();
    }

    playSettingsJingle() {
        const node = this.soundRef.current;

        node.play();
    }
    render() {

        return (
            <HeaderBar className={"header"}>
                <audio ref={this.soundRef} src={settingsSnd}/>
                <FlexItem className= {"flex-item"} justify={"flex-start"}>
                    <ProfileIcon iconColor={theme.secondary.standardIcon}>
                        <i className="material-icons">account_circle</i>
                    </ProfileIcon>
                    <SettingsIcon  className="material-icons" onClick={() => this.playSettingsJingle()}  iconColor={theme.secondary.lightBlue}>settings</SettingsIcon>
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
