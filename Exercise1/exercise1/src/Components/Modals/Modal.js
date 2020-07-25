import React, { useState } from "react";
import { populateFormField } from "../../utils/populateFormField";
import { Modal, TextField, Button } from "@material-ui/core";
import { modalStyles } from "../Styles/Styles";

export default function PopModal({
  open,
  close,
  data = {},
  changeStateModal,
  onClickAddNewTasks,
}) {
  const classes = modalStyles();
  const [teste, setTeste] = useState("");

  const { titulo, descricao } = data;

  return (
    <div>
      <Modal open={open} onClose={close} className={classes.modal}>
        <form className={classes.paper}>
          <h1>Hello World</h1>

          <TextField
            id="standard-basic"
            label="Título"
            value={titulo}
            onChange={(ev) => changeStateModal("titulo", ev.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Descrição"
            value={descricao}
            variant="outlined"
            rows={4}
            onChange={(ev) => changeStateModal("descricao", ev.target.value)}
          />

          <Button
            title="Cancel"
            color="secondary"
            variant="contained"
            onClick={close}
          >
            Cancel
          </Button>

          <Button
            title="Finish"
            color="primary"
            variant="contained"
            onClick={onClickAddNewTasks}
          >
            Finish
          </Button>
        </form>
      </Modal>
    </div>
  );
}
