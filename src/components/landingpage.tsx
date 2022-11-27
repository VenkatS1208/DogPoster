import * as React from "react";
import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import BreedDopdown from "./breedDopdown";
import SubBreedDropdown from "./subBreedDropdown";

const DashboardComponent = (props: any) => {
  const columns: any = [
    { id: "breed", label: "Breed" },
    { id: "sub-breed", label: "Sub-breed" },
    { id: "action", label: "Action" },
  ];
  return (
    <div>
      {!props.isLoading ? (
        <>
          <h2>Dog Poster Generator:</h2>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 2,
              width: "100%",
            }}
          >
            <BreedDopdown
              breedData={props.breedData}
              fetchSubBreed={props.fetchSubBreed}
            />
            <SubBreedDropdown subBreedList={props.subBreedList} />
            <Button
              sx={{
                width: 150,
              }}
              variant="outlined"
            >
              Add
            </Button>
          </Box>
          <TableContainer>
            <Table
              stickyHeader
              aria-label="sticky table"
              className="custom-table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column: any) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.breedData.map((item: any) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                    <TableCell key={`b-${item.id}`}>{item.breed}</TableCell>
                    <TableCell key={`s-${item.id}`}>
                      {item.subBreed.length}
                    </TableCell>
                    <TableCell key={`a-${item.id}`} width={140}>
                      <Button
                        variant="outlined"
                        onClick={() => props.handleClickOpen(item)}
                      >
                        Generate
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default DashboardComponent;
