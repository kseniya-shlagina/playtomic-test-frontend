import Typography from "@mui/material/Typography";
import React from "react";
import { DashboardLink } from "./DashboardLink";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import styled from "styled-components/macro";
import { Header } from "./Header";

interface Props {
  title: string;
  content: React.ReactNode;
  name?: string;
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 30px 40px;
`;

const InnerContainer = styled.div`
  display: flex;
  margin-top: 50px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.06);
`;

const ContentHeader = styled.div`
  padding: 50px 60px;
  background-color: #f7e09e;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 60px;
  color: gray;
`;
const Aside = styled.div`
  margin-right: 40px;
`;

const StyledDashboardIcon = styled(DashboardIcon)`
  fill: gray;
  margin-right: 15px;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  fill: gray;
  margin-right: 15px;
`;

export const Layout = ({ title, content, name }: Props) => {
  return (
    <Container>
      <Header name={name} />
      <InnerContainer>
        <Aside>
          <DashboardLink
            title="Dashboard"
            to="/dashboard"
            icon={<StyledDashboardIcon />}
          />
          <DashboardLink
            title="Settings"
            to="/settings"
            icon={<StyledSettingsIcon />}
          />
        </Aside>
        <ContentContainer>
          <ContentHeader>
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              {title}
            </Typography>
          </ContentHeader>
          <Content>{content}</Content>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};
