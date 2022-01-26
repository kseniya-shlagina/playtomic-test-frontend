import Typography from "@mui/material/Typography";
import React from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { signOut } from "../store/auth/authThunks";

interface IProps {
  name?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Header: React.FC<IProps> = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
        dashboard
      </Typography>
      <RightBlock>
        <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography
          variant="body1"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(signOut())}
        >
          Sign out
        </Typography>
      </RightBlock>
    </Container>
  );
};
