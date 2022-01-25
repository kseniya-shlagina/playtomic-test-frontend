import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useFormik } from "formik";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components/macro";
import { signIn } from "../store/auth/authThunks";
import {
  getAuthenticationError,
  isAuthenticationLoading,
} from "../store/auth/authSelectors";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbf7ec;
`;

const InnerContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.06);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDivider = styled(Divider)`
  && {
    margin-bottom: 20px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #f6b42a;

    &:hover,
    &:focus {
      background-color: #ffa500;
    }
  }
`;

export const Auth = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthenticationError);
  const isLoading = useSelector(isAuthenticationLoading);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(signIn(values));
    },
  });

  return (
    <Container>
      <InnerContainer>
        <Typography variant="h6" mb={2}>
          Sign In
        </Typography>
        <StyledDivider variant="fullWidth" />
        <form onSubmit={formik.handleSubmit}>
          <Form>
            <Input
              name="email"
              label="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <Input
              name="password"
              label="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <ButtonWrapper>
              <StyledButton
                variant="contained"
                type="submit"
                disabled={isLoading}
              >
                Sign In
              </StyledButton>
            </ButtonWrapper>
          </Form>
        </form>
      </InnerContainer>
    </Container>
  );
};
