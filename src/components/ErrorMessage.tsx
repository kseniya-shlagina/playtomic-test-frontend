import styled from "styled-components/macro";

interface IProps {
  text: string;
}
const Container = styled.div`
  color: red;
`;

export const ErrorMessage: React.FC<IProps> = ({ text }) => {
  return <Container>{text}</Container>;
};
