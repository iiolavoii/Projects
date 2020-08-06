import React, { useState } from "react";
import { populateFormField } from "../../utils/populateFormField";
import { Modal, TextField, Button, Grid } from "@material-ui/core";
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
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.gridmodaltext}>
              <h1 className={classes.fonttypes}>Adicione uma Tarefa</h1>
            </Grid>
            <Grid item xs={12} className={classes.gridmodaltext}>
              <TextField
                id="standard-basic"
                label="Título"
                value={titulo}
                onChange={(ev) => changeStateModal("titulo", ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridmodaltext}>
              <TextField
                id="standard-basic"
                label="Descrição"
                value={descricao}
                variant="outlined"
                multiline
                rows={10}
                onChange={(ev) =>
                  changeStateModal("descricao", ev.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs className={classes.gridbuttons}>
              <Button
                title="Cancel"
                variant="contained"
                onClick={close}
                style={{ marginRight: "12px" }}
              >
                Cancel
              </Button>

              <Button
                title="Finish"
                color="primary"
                variant="contained"
                onClick={() => {
                  onClickAddNewTasks();
                  close();
                }}
              >
                Finish
              </Button>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </div>
  );
}
