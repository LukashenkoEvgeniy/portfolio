import React from 'react';
import styled from 'styled-components';

export default function LeftSideBar() {

    return (
        <SideBar>LefrSideBar</SideBar>
    );
}

const SideBar = styled.aside`
  display: flex;
  position: fixed;
  height: 100%;
  width: 20px;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;