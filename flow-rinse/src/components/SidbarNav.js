import React from 'react';
import { useHistory } from "react-router-dom";
// import logo from '../assets/img/dotty-logo-white.svg';
import LogoutIcon from '../assets/img/icon-logout.svg';
// import SideBarMenu from './SideBarMenu';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    background: #080808;
    min-height: 100vh;
    height: auto;
    width: 5.625em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    position: fixed;
    left: 0;
`;


const MenuIconsWrapper = styled.div`
    margin-bottom: 3.750em;
`;

const SidbarNav = () => {
    const history = useHistory();
    const handleLogout = () => {
        history.push("/");
        localStorage.clear();
    }

    return(
        <HeaderWrapper>
            <MenuIconsWrapper>
                {/* <SideBarMenu/> */}
                <a href="#" onClick={handleLogout}>
                    <img src={LogoutIcon}/>
                </a>
            </MenuIconsWrapper>
        </HeaderWrapper>
    );
    
};


   

export default SidbarNav;
