import React, { useState } from "react";
import CardView from "../CardView/Cardview";
import { Button, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PopModal from "../Modals/Modal";
import { TITULO } from "../../utils/enumeradores";

export default function TodoList1() {
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
    setTasks([...tasks, { titulo, descricao }]);
    setModalState({ ...modalState, titulo: "", descricao: "" });
  }

  return (
    <div>
      <h1>To do List 1</h1>
      <ul>
        {tasks.map((task) => (
          <li>{`${task.titulo} - ${task.descricao}`}</li>
        ))}
      </ul>
      <Tooltip title="Create" aria-label="add">
        <Fab color="primary">
          <AddIcon
            onClick={() => {
              _changeStateModal("isOpen", true);
            }}
          />
        </Fab>
      </Tooltip>
      <CardView data={tasks} />
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
