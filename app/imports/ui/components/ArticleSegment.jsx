import React from 'react';
import { Segment, Grid, Image, Header } from 'semantic-ui-react';

export default class ArticleSegment extends React.Component {
  render() {
    return <Segment two column grid className="segment">
      <Grid columns="two">
        <Grid.Row>
          <Grid.Column>
            <Header as={'h2'}>Arrested Coast Guard Officer Planned Mass Terrorist Attack &apos;On A Scale Rarely
              Seen&apos;</Header>
            <div>Christopher Paul Hasson, a self-proclaimed white nationalist, allegedly wanted to &quot;kill every last
              person on earth&quot in a crusade to establish a &quot;white homeland,&quot according to officials.
            </div>
          </Grid.Column>
          <Grid.Column>
            <Image id={'article-picture'}
                   src="https://media.npr.org/assets/img/2019/02/20/ap_19051824643614_wide-37954d1b5b6754ebbfad419f61ad5931f1c37639-s900-c85.jpg"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>;
  }
}
