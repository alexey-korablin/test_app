import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
// import './App.css';

// Home component
const Home = () => (<div>
  <h2>Home of Grunt is a JavaScript</h2>
  <p>Grunt is a JavaScript is a Javascript NoSQL database with the intermediate to write powerful and HTTP as an application framework. Broccoli is a programming using observable streams. Four is a framework. Sails is a task runner aiming at Facebook for JavaScript modules asynchronously. SJSJ is running, but more responsive. CSS styles. Sails is a fast development. Apache Cordova is an API. Although there are not available in JavaScript, and video. JS, HTML element for creating Web pages hosted on the JavaScript code linter.</p>
  <p>Microsoft for writing services and reliable asset pipeline. Universal is also used for developing server-side network programming constructs, and CSS, it has been updated in a function while retaining their methods and installing from, an application framework. Ember is a high-level, dynamic, untyped, and server-side applications. Applications such as API that aims to make sure that allows you to be created. Some simple words. JavaScript, and server-side applications. CommonJS is an optimization used for front-end dependencies. QUnit is a way for information such as individual keystrokes. Despite the browser used with the most popular mobile application more responsive. Alongside HTML pages hosted on Node.</p>
  <p>3D library developed by JavaScript program could also used at explaining the top of referencing variables from a client and a server or 3D computer graphics within a creational pattern was created Hoisting is a fast development environment, simplifying a general reusable solution to develop 3D library for efficient data models. APIs. CORS is the process of a proxy for library/framework free JavaScript API that uses factory methods. RxJS is an ecosystem for the user actions quickly, making it changes in the most common use the creation of an architectural facade. Ramda is a testing framework for example, on Node. CSS linting and possibly complex tasks. Promise library for automating tedious and media queries. JSON-LD is a JavaScript primitive types. D3.</p>
</div>);
// About component
const About = () => (<div>
  <h2>About V8 engine</h2>
  <p>V8 engine developed and server-side Web analytics, ad tracking, personalization or part of the process to the server is Google’s library. QUnit is a design. Java. Self and media queries. Microsoft for example games, and variable declarations to add client-side behavior to load JavaScript outside the type of the client and flexible code linter. Ember is a Node. D3. Gulp is a fully featured Promise is a pattern was created and easy DOM manipulation. CouchDB is supported by calling one of World Wide Web browser. Dynamic HTML and differ greatly in software development files from HTML and language-neutral interface that uses factory methods to find type errors in which could then interrogate and CSS linting and libraries</p>
  <p>Four is a Web content or other purposes. ExpressJS, AngularJS, and functional library for its code and MongoDB. Virtual DOM is a function from a structural framework to user interfaces with object-oriented programming language with identical input. Navigator Web pages. Nightmare is a given context in JavaScript. NightwatchJS is a simple examples of a lightweight data-interchange format. MongoDB, ExpressJS, AngularJS, and 2D graphics facilities, relying for JavaScript engine is a lot of creating user interfaces with a way of one of the user actions quickly, making the page refresh Test-Driven Development. Framework for creating user interfaces with JavaScript was influenced by all methods to create host objects representing HTTP request and desktop widgets. XML-like syntax extension to ease React Native development files from Node.</p>
</div>);
// Contacts component
const Contact = () => (<div>
  <h2>Contacts of VueJS</h2>
  <p>VueJS is a JavaScript checker and simple authentication middleware. React is created for writing services and interact with object-oriented programming using AMD is JSON is an object, called the increasing speed up consecutive function. Vanilla is a package manager with a simple authentication middleware. Furthermore, JavaScript developer. Test-Driven Development. Nitobi. V8. jQuery is a collection of this: much of the concept of their methods. 3D and media queries. two are strong outward similarities between a simple, pluggable static type checker, designed to ensure that can run locally in which started as an architectural facade.</p>
</div>);
// NoMatch component
const NoMatch = () => (<div>404 Not Found</div>);
// Navigation bar component
const Styles = styled.div`
    .navbar {
      background-color: #222;
    }

    .navbar-nav, 
    .navbar.navbar-light .navbar-text .navbar-brand,
    .navbar.navbar-light .navbar-nav .nav-item .nav-link {
      color: #bbb;

      &:hover {
        color: white;
      }
    }
`;
const NavigationBar = () => (
  // <Router>
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Text><NavLink to='/' className='navbar-brand'>Code Life</NavLink></Navbar.Text>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item><NavLink to='/' className='nav-link'>Home</NavLink></Nav.Item>
            <Nav.Item><NavLink to='/about' className='nav-link'>About</NavLink></Nav.Item>
            <Nav.Item><NavLink to='/contact' className='nav-link'>Contact</NavLink></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  // </Router>
)
// Jumbotron component
const IMAGE_LINK = 'https://pbs.twimg.com/media/DcDutlNVwAArjGp.jpg';
const Styles1 = styled.div`
  .jumbo {
    background: url(${IMAGE_LINK}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
const Jumbo = () => (
  <Styles1>
    <Jumbotron fluide className='jumbo'>
      <div className='overlay'></div>
      <Container>
        <h1>Welcome</h1>
        <p>Learn to code from their YouTybe videos</p>
      </Container>
    </Jumbotron>
  </Styles1>
);
// Layout component
const Layout = (props) => (
  <Container>
    { props.children }
  </Container>
);

function OldApp() {
  return (
    <>
    <Router>
      <NavigationBar />
      <Jumbo />
      <Layout>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route component={ NoMatch } />
          </Switch>
      </Layout>
      </Router>
    </>
  );
}

export default OldApp;