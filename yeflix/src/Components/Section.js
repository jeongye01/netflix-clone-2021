import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container=styled.div`
  margin-bottom:50px;
`;
const Title=styled.span`
   font-size:14px;
   font-weight:600;
   
`;
const Grid=styled.div`
margin-top:25px;
`;

const Section=({title,children})=>{
   <Container>
     <Title>{title}</Title>
     <Grid>{children}</Grid>
   </Container>

};

Section.propTypes={
  title:PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
//node : 렌더링할 수 있는 모든 것 (숫자, 문자열, 혹은 JSX코드. children도 node PropType임)
export default Section;