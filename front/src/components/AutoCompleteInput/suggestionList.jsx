import React from "react";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";

const suggestionList = (options) => {
    console.log("chamou");
  return (
    <Popper open={Boolean(options.children)}>
      <Paper square>to aqui</Paper>
    </Popper>
  );
};

export default suggestionList;
