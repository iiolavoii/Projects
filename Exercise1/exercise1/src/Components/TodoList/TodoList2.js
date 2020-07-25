import React, { useState } from "react";
import CardView from "../CardView/Cardview";
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PopModal2 from "../Modals/Modal2";

export default function TodoList2() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function _onClickAddNewTasks(task) {
    setTasks([...tasks, { ...task, date: new Date() }]);
  }

  return (
    <div>
      <h1>To do List 2</h1>
      <ul>
        {tasks.map((task) => (
          <li>{`${task.titulo} - ${task.descricao} - ${task.date}`}</li>
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
