import React from 'react';
import styled from 'styled-components';

import textColor from 'App/shared/styles/text-color';

const Head = styled.section`
  text-align: center;
  background: #dee5da;
  padding-bottom: 1rem;
  ${textColor}
`;

const Title = styled.span`
  text-align: center;
  margin: 3rem;

  font-size: 3rem;
`;

const Header = () => (
  <Head>
    <Title>Archimedes</Title>
  </Head>
);

export default Header;
