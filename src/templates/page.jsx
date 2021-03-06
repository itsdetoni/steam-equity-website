import PropTypes from "prop-types";
import React from "react";
import "../assets/sass/main.scss";
import Wrapper from "./wrapper";

const Page = props => (
  <Wrapper title={props.title}>
    <section key="section" id="main" className="wrapper">
      <div key="inner" className="inner">
        <h1 key="title" className="major">
          {props.title}
        </h1>
        {props.image && (
          <span key="imageWrapper" className="image fit">
            {props.image}
          </span>
        )}
        {props.children}
      </div>
    </section>
  </Wrapper>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object
};

export default Page;
