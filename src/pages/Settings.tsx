import { Layout } from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../store/auth/authSelectors";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { ErrorMessage } from "../components/ErrorMessage";
import { Table } from "../components/Table";
import {
  getPlanetsData,
  getPlanetsDataError,
  isPlanetsDataLoading,
} from "../store/planets/planetsSelectors";
import { getPlanets } from "../store/planets/planetsThunks";

const columns = [
  {
    Header: "Planets",
    columns: [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Rotation period",
        accessor: "rotationPeriod",
      },
      {
        Header: "Orbital period",
        accessor: "orbitalPeriod",
      },
      {
        Header: "Diameter",
        accessor: "diameter",
      },
      {
        Header: "Climate",
        accessor: "climate",
      },
      {
        Header: "Gravity",
        accessor: "gravity",
      },
      {
        Header: "Terrain",
        accessor: "terrain",
      },
    ],
  },
];

export const Settings = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const planets = useSelector(getPlanetsData);
  const arePlanetsLoading = useSelector(isPlanetsDataLoading);
  const planetsFetchingError = useSelector(getPlanetsDataError);

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  return (
    <Layout
      name={userName}
      title="Settings"
      content={
        arePlanetsLoading ? (
          <CircularProgress color="inherit" />
        ) : planetsFetchingError ? (
          <ErrorMessage text={planetsFetchingError} />
        ) : (
          <Table data={planets} columns={columns} />
        )
      }
    />
  );
};
