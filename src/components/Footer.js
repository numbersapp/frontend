import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    height: 5vh;
    width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 14px;
        font-weight: 500;
        color: #969696;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2019 Numbers</p>
        </FooterContainer>
    );
};

export default Footer;