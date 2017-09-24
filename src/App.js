import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/createpost" component={CreatePost} />
            <Route path="/posts/:id" component={ShowPost} />
            <Route path="/" component={PostList} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
