import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";

interface IProps {
  title: string;
  icon: React.ReactNode;
  to: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LinkContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  color: gray;
  background-color: ${(props) => (props.isFocused ? "#fdf9eb" : "ffffff")};

  &:hover {
    background-color: #fdf9eb;
  }
`;

export const DashboardLink: React.FC<IProps> = ({ title, icon, to }) => {
  const { pathname } = useLocation();

  const isFocused = pathname === to;

  return (
    <StyledLink to={to}>
      <LinkContainer isFocused={isFocused}>
        {icon}
        <div>{title}</div>
      </LinkContainer>
    </StyledLink>
  );
};
