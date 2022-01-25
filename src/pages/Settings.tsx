import { Layout } from "../components/Layout";
import { useSelector } from "react-redux";
import { getUserName } from "../store/auth/authSelectors";

export const Settings = () => {
  const userName = useSelector(getUserName);

  return (
    <Layout name={userName} title="Settings" content="Dashboard settings" />
  );
};
