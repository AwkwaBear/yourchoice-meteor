import React from 'react';
import { Container, Grid, List, Header } from 'semantic-ui-react';

export default
class FooterMenu extends React.Component {
  render() {
    const itemStyle = { color: '#6385C0' };
    return (
        <Container four column grid id="footer">
          <Grid centered columns="four">
            <Grid.Row>
              <Grid.Column>
                <Header as="h5" id="footerHeader">Read & Listen</Header>
                <List>
                  <List.Item style={itemStyle}>Home</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>News</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Arts & Life</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Podcasts</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Music</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Programs</List.Item>
                  < br/>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" id="footerHeader">Connect</Header>
                <List>
                  <List.Item style={itemStyle}>Newsletters</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Facebook</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Twitter</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Instagram</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Contact</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Help</List.Item>
                  < br/>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" id="footerHeader">About NPR</Header>
                <List>
                  <List.Item style={itemStyle}>Overview</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Finances</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>People</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Press</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Public Editor</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Corrections</List.Item>
                  < br/>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h5" id="footerHeader">Get Involved</Header>
                <List>
                  <List.Item style={itemStyle}>Support Public Radio</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Sponsor NPR</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>NPR Careers</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>NPR Shop</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>NPR Events</List.Item>
                  < br/>
                  <List.Item style={itemStyle}>Visit NPR</List.Item>
                  < br/>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
