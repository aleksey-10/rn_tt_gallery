import React from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export const HeaderTitle = () => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>My app</Title>
      </Body>
      <Right />
    </Header>
  </Container>
);
