import React from 'react';
import { Container, Menu, Icon, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: 'red' };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src="https://media.npr.org/chrome_svg/npr-logo.svg" id={'logo'}/>
            <Menu.Item position={'right'}><Icon name="user outline icon" />SIGN IN</Menu.Item>
            <Menu.Item><Icon name="shopping bag icon"/>NPR SHOP</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="heart"/>DONATE</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
