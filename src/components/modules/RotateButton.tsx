'use client';
import React, { FC, MouseEventHandler } from 'react';
import styled from '@emotion/styled'

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
  position: relative;
  transform: rotate(-6deg);
  z-index: 1;
  padding: 1.2rem 4.8rem;
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #fff;
  text-align: center;

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: skewX(-25deg);
    content: '';
    background-color: #1c1c1c;
  }
`;

const RotateButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>Click Start!</StyledButton>
  );
};

export default RotateButton;
