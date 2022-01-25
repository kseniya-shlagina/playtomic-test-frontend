import { Layout } from "../components/Layout";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../store/auth/authSelectors";
import { getCharacters } from "../store/characters/charactersThunks";
import { Table } from "../components/Table";
import {
  areCharactersDataLoading,
  getCharactersData,
} from "../store/characters/charactersSelectors";
import { CircularProgress } from "@mui/material";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const characters = useSelector(getCharactersData);
  const areCharactersLoading = useSelector(areCharactersDataLoading);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <Layout
      name={userName}
      title="Secret dashboard"
      content={
        areCharactersLoading ? (
          <CircularProgress color="inherit" />
        ) : (
          <Table data={characters} />
        )
      }
    />
  );
};
