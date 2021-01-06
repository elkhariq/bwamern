import React, { Component, Fragment } from "react";
import Header from "parts/Header";
import ApiLandingPage from "json/landingPage.json";

import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <Fragment>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={ApiLandingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={ApiLandingPage.mostPicked}
        />
        <Categories data={ApiLandingPage.categories} />
      </Fragment>
    );
  }
}
