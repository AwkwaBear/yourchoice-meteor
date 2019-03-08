import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default class MainMenu extends React.Component {
  render() {
    const itemStyle = { color: 'white' };
    return (
        <Menu borderless className="main menu">
          <Container>
            <Menu.Item fitted style={itemStyle}><Icon name="list alternate outline"/>NEWS</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="child"/>ARTS & LIFE</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="music"/>MUSIC</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="headphones"/>SHOWS & PODCASTS</Menu.Item>
            <Menu.Item style={itemStyle}><Icon name="search"/>SEARCH</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
