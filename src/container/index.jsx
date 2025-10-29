import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Homepage from "./homepage/index";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ForgotPassword from "./Auth/ForgotPassword";
import Podcast from "./homepage/Podcast";
import Course from "./homepage/Course"
import Detail from "./homepage/Detail";
import Blog from "./homepage/Blog";
import BlogDetail from "./homepage/BlogDetail";
import About from "./homepage/About";
import Faq from "./homepage/Faq";
import Terms from "./homepage/Terms";
import Privacy from "./homepage/Privacy";
import Payment from "./homepage/Payment";
import PodcastList from "./homepage/PodcastList";
import Contact from "./homepage/Contact";
import Mentor from "./homepage/Mentor";

const Index = (props) => {
  return (
    <Fragment>
      <Router forceRefresh>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/podcast">
            <Podcast />
          </Route>
          <Route exact path="/course">
            <Course />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/detail-blog">
            <BlogDetail />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/terms-of-service">
            <Terms />
          </Route>
          <Route exact path="/privacy-policy">
            <Privacy />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/podcast-list">
            <PodcastList />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/mentor">
            <Mentor />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;
