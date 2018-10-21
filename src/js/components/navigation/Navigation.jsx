import React from 'react';
import styled from 'styled-components';
import Icon from "../../common/icons/Icon";
import {snowColor, skyColor} from "../../styles/style-constants";

export default function Navigation() {
    return (
        <Nav>
            <Links>
                <NavItem active>MEN'S</NavItem>
                <NavItem>WOMEN'S</NavItem>
                <NavItem>KID'S</NavItem>
                <NavItem>SHOES</NavItem>
                <NavItem>EQUIPMENT</NavItem>
            </Links>

            {/*<Search>*/}
                {/*<Icon name={'search'}/>*/}
            {/*</Search>*/}


        </Nav>
    );
}

const Nav = styled.nav`
  z-index: 1;
  color: ${snowColor};
  height: 30px;
  position: fixed;
  top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid rgba(126,134,145,0.5);
`;

const Links = styled.div`
 display: flex;
  justify-content: flex-end;
`;

const Search = styled.div`
  border: 1px solid rgb(1,1,1,0.5);
  border-radius: 100px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.div`
  ${props => props.active && `border-top: 4px solid ${skyColor}`};
  height: 100%;
  display: flex;
  padding: 0 10px 0 10px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
