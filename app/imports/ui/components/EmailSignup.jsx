import React from 'react';
import { Segment, Grid, Image, Header, Input } from 'semantic-ui-react';

export default class EmailSignup extends React.Component {
  render() {
    return <Segment two column grid id="email-signup">
      <Grid centered columns="two">
        <Grid.Row>
          <Grid.Column>
            <Image position="right" id="mailIcon" src="https://media.npr.org/chrome/mail-promo.png"/>
          </Grid.Column>
          <Grid.Column position="left" id="entry">
            <Header as="h1">Daily News Email — Get the latest headlines and unique NPR stories, sent every
              weekday.</Header>
            <Input size='small' action='SUBSCRIBE' placeholder='Email Address'/>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>;
  }
}
