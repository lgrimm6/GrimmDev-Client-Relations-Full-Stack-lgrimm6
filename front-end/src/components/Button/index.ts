import styled from "styled-components";

interface IButtonProps {
  backgroundColor?: string;
  hover?: string;
  height?: string | number;
  width?: string | number;
}
const Button = styled.button<IButtonProps>`
  height: ${(props) => props.height || "50px"};
  width: ${(props) => props.width || "auto"};
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: var(--grey-0);
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hover && props.hover};
  }

  &:disabled {
    color: var(--grey-1);
    background-color: var(--color-primary-negative);
    cursor: default;
  }
`;

export default Button;
