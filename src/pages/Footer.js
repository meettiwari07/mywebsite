import React from 'react';
import styled from 'styled-components';

// Styled component for the footer
const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  width:100%;
  height:250px;
  padding: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      {/* Footer content */}
      This is the footer.
    </StyledFooter>
  );
}

export default Footer;