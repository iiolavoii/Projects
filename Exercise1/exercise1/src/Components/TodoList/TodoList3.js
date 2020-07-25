import React, { useState } from "react";
import CardView from "../CardView/Cardview";
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PopModal2 from "../Modals/Modal2";

export default function TodoList3() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function _onClickAddNewTasks(task) {
    setTasks([...tasks, { ...task }]);
  }

  return (
    <div>
      <h1>To do List 3</h1>
      <ul>
        {tasks.map((task) => (
          <li>{`${task.titulo} - ${task.descricao}`}</li>
        ))}
      </ul>
      <Tooltip title="Create" aria-label="add">
        <Fab color="primary">
          <AddIcon
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
        </Fab>
      </Tooltip>
      <CardView data={tasks} />
      <PopModal2
        open={isModalOpen}
        close={() => {
          setIsModalOpen(false);
        }}
        onClickAddNewTasks={_onClickAddNewTasks}
      />
    </div>
  );
}
