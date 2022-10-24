import React, { useState, Fragment } from "react";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {
  const { setInputUser, notFound } = props;

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Fragment>
      <Stack
        direction="row"
        sx={{
          marginTop: "30px",
          width: "80%",
        }}
      >
        <TextField
          id="outlined-basic"
          label="GitHub User"
          placeholder="Octocat"
          variant="outlined"
          size="small"
          value={valueInput}
          onChange={onSearchValueChange}
          sx={{
            width: "90%",
          }}
        />
        <IconButton
          onClick={handleSubmit}
          size="small"
          sx={{
            left: "-45px",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
      <Typography color="red">
        {notFound ? "Error: usuario no existe" : ""}
      </Typography>
    </Fragment>
  );
};

export default Searcher;
