import React from "react";
import PropTypes from "prop-types";

const Section=({title,children})=>{};

Section.propTypes={
  title:PropTypes.string.isRequired,
  children:PropTypes.oneOfType({})
}

export default Section;