import React, { useState } from "react";
import CardView from "../CardView/Cardview";
import { Button, Tooltip, Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PopModal from "../Modals/Modal";
import { TITULO } from "../../utils/enumeradores";

const mockupData = {
  todos: [
    {
      id: 1,
      titulo: "Robert",
      descricao: "kiosaky",
    },
  ],
  todos2: [
    {
      id: 2,
      titulo: "William",
      descricao: "Ghost",
    },
  ],
  todos3: [
    {
      id: 3,
      titulo: "Jumip",
      descricao: "Steven",
    },
  ],
};

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
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          To do List
        </h1>
      </div>
      <div>
        <Tooltip title="Create" aria-label="add">
          <Fab color="primary">
            <AddIcon
              onClick={() => {
                _changeStateModal("isOpen", true);
              }}
            />
          </Fab>
        </Tooltip>
      </div>
      {/* <Grid container spacing={2}>
        <Grid direction="row" item xs={3} display="flex"> */}
      <div>
        <CardView data={mockupData.todos} />
      </div>
      {/* </Grid> */}
      {/* </Grid> */}
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
