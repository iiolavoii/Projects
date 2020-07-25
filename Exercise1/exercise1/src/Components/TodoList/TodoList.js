import React, { useState } from "react";
import CardView from "../CardView/Cardview";
import { Button, Tooltip, Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PopModal from "../Modals/Modal";
import { TITULO } from "../../utils/enumeradores";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    titulo: "",
    descricao: "",
  });

  function _changeStateModal(propname, valor) {
    setModalState({ ...modalState, [propname]: valor });
  }

  function _onClickAddNewTasks() {
    const { titulo, descricao } = modalState;
    setTasks([...tasks, { titulo, descricao, date: new Date() }]);
    setModalState({ ...modalState, titulo: "", descricao: "" });
  }

  return (
    <div>
      <h1>To do List</h1>

      <Tooltip title="Create" aria-label="add">
        <Fab color="primary">
          <AddIcon
            onClick={() => {
              _changeStateModal("isOpen", true);
            }}
          />
        </Fab>
      </Tooltip>
      {/* <Grid container spacing={2}>
        <Grid
          direction="row"
          item
          xs={3}
          justify="space-evenly"
          alignItems="center"
        > */}
      <CardView data={tasks} />
      {/* </Grid>
      </Grid> */}
      <PopModal
        open={modalState.isOpen}
        close={() => {
          _changeStateModal("isOpen", false);
        }}
        data={modalState}
        changeStateModal={_changeStateModal}
        onClickAddNewTasks={_onClickAddNewTasks}
      />
    </div>
  );
}
