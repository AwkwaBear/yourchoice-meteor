import React from 'react';
import MainMenu from '../components/MainMenu';
import ArticleSegment from '../components/ArticleSegment';
import EmailSignup from '../components/EmailSignup';


export default class NPR extends React.Component {

  render() {
    return (
        <div>
          <MainMenu/>
          <ArticleSegment/>
          <EmailSignup/>
        </div>
    );
  }
}
