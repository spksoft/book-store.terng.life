import React from "react";
import styled from "styled-components";
import { Rate } from 'antd';

const Img = styled.img`
  width: ${props => (props.width ? props.width : "126px")};
  height: ${props => (props.height ? props.height : "167px")};
`;

const Title = styled.p`
  width: ${props => (props.width ? props.width : "126px")};
  word-break: break-all;
  color: #3E7EFF;
`;

const BookCover = ({ src, title, width, height }) => {
  const titleForShow = title;
  return (
    <a>
      <Img width={width} height={height} src={src} />
      <Title width={width}>{titleForShow}</Title>
    </a>
  );
};

export default BookCover;
