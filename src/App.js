import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { BASE_URL, POSTS, USERS, COMMENTS } from './constants/urls';
import { getPostsByUser } from './helpers';
import { Main } from './components/Main';
import { NoMatch } from './components/NoMatch';
import { UserDetails } from './components/UserDetails';
import { PostDetail } from './components/PostDetail';
import { Jumbo } from './components/Jumbo';
import { Layout } from './components/Layout';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      posts: [], 
      comments: [], 
      users: [],
      isLoadingData: false,
      filter: ''
     };

    this.fetchAppData = this.fetchAppData.bind(this);
    this.getAllData = this.getAllData.bind(this);
    this.onChangeFilterOption = this.onChangeFilterOption.bind(this);
    this.onHandleCommentsUpdate = this.onHandleCommentsUpdate.bind(this);
  }

  onHandleCommentsUpdate(comments) {
    console.log('Update comments now -->', comments);
    this.setState({ comments });
  }

  onChangeFilterOption(e) {
    console.log(e.target.value);
    if (this.state.filter !== e.target.value) {
      this.setState({filter: e.target.value});
    }
  }

  fetchAppData(base, postfix) {
    return fetch(base + postfix)
      .then(response => response.json())
  }

  getAllData() {
    this.setState({isLoadingData: true})
    Promise.all([
      this.fetchAppData(BASE_URL, POSTS), 
      this.fetchAppData(BASE_URL, COMMENTS),
      this.fetchAppData(BASE_URL, USERS),
    ]).then(response => {
      console.log(response);
      this.setState({ 
        posts: response[0],
        comments: response[1],
        users: response[2],
        isLoadingData: false
      });
    }).catch(e => {
      console.error(e);
      this.setState({ isLoadingData: false })
    });
  }

  componentDidMount() {
    this.getAllData();
  }

  render() {
    const { posts, comments, users, filter } = this.state;
    console.log(
      'post ->', posts && posts[0], 
      'comments ->', comments && comments[0],
      'users ->', users && users[0]);
    return (
        <>
        <Router>
          <Jumbo />
          <Layout>
              <Switch>
                <Route 
                  exact path='/' 
                  component={ () => <Main 
                                      posts={filter === '' ? posts : getPostsByUser(posts, users, filter)} 
                                      users={users}
                                      filter={filter}
                                      onChange={this.onChangeFilterOption}/> } />
                <Route 
                  path='/post/:id' 
                  component={() => <PostDetail 
                                      posts={posts}
                                      users={users}
                                      onHandleUpdate={this.onHandleCommentsUpdate}
                                      comments={comments} /> }/>
                <Route 
                  path='/user/:id' 
                  component={ () => <UserDetails users={users}/> } />
                <Route component={ NoMatch } />
              </Switch>
          </Layout>
          </Router>
        </>
      );
    }
  }

export default App;
