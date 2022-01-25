import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { useTable } from "react-table";
import { ICharacter } from "../store/characters/charactersActions";

interface ITable {
  data: ICharacter[];
}

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "Name",
        accessor: "name",
      },
    ],
  },
  {
    Header: "Info",
    columns: [
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

export const Table = ({ data }: ITable) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <CssBaseline />

      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </div>
  );
};
