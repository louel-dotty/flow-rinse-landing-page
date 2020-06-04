import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3.625em;
`;

const ProfileHeader = () => (
    <AvatarWrapper> 
        <Image className="avatar-image" src="https://ph-files.imgix.net/1dedf6e6-bd75-4d14-9a94-f5fafbbc7415?auto=format" roundedCircle />
        <div className="text-left avatar-info">
            <h2 className="text-1 mb-0">Renz Gallego</h2>
            <span className="text-3">Level 7 Wizard</span>
        </div>
    </AvatarWrapper>
 )


   

export default ProfileHeader;
