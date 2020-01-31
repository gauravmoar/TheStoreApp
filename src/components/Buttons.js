import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 25px;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  background-color: transparent;
  border: 0.5px solid var(--lightBlue);
  border-radius: 5px;
  min-width: 110px;
  &:hover {
    background-color: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: white;
  }
`;
