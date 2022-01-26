import { Layout } from "../components/Layout";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../store/auth/authSelectors";
import { getCharacters } from "../store/characters/charactersThunks";
import { Table } from "../components/Table";
import {
  isCharactersDataLoading,
  getCharactersData,
  getCharactersDataError,
} from "../store/characters/charactersSelectors";
import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "../components/ErrorMessage";

const columns = [
  {
    Header: "Characters",
    columns: [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Height",
        accessor: "height",
      },
      {
        Header: "Mass",
        accessor: "mass",
      },
      {
        Header: "Hair color",
        accessor: "hairColor",
      },
      {
        Header: "Skin color",
        accessor: "skinColor",
      },
      {
        Header: "Eye color",
        accessor: "eyeColor",
      },
      {
        Header: "Birth year",
        accessor: "birthYear",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],
  },
];

export const Dashboard = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const characters = useSelector(getCharactersData);
  const areCharactersLoading = useSelector(isCharactersDataLoading);
  const charactersFetchingError = useSelector(getCharactersDataError);

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
        ) : charactersFetchingError ? (
          <ErrorMessage text={charactersFetchingError} />
        ) : (
          <Table data={characters} columns={columns} />
        )
      }
    />
  );
};
