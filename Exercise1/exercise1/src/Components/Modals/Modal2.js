import React, { useState } from "react";
import { populateFormField } from "../../utils/populateFormField";
import { Modal, TextField, Button } from "@material-ui/core";
import { modalStyles } from "../Styles/Styles";

export default function PopModal2({ open, close, onClickAddNewTasks }) {
  const classes = modalStyles();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  function _handleClick() {
    onClickAddNewTasks({ titulo, descricao });
    setTitulo("");
    setDescricao("");
  }

  // const [modalState, setModalState] = useState({
  //   titulo: "",
  //   descricao: "",
  // });
  // function _onChangeState(propname, value) {
  //   setModalState({ ...modalState, [propname]: value });
  // }
  // function _onChangeTitulo(value) {
  //   setModalState({ ...modalState, titulo: value });
  // }
  // function _onChangeDescricao(value) {
  //   setModalState({ ...modalState, descricao: value });
  // }

  return (
    <div>
      <Modal open={open} onClose={close}>
        <form className={classes.paper}>
          <h1>Hello World</h1>

          <TextField
            id="standard-basic"
            label="Título"
            value={titulo}
            onChange={(ev) => setTitulo(ev.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Descrição"
            value={descricao}
            variant="outlined"
            rows={4}
            onChange={(ev) => setDescricao(ev.target.value)}
          />
          {/* 
          *Codigo para explicar as diversas formas de alterar o estado
          
          <TextField
            id="standard-basic"
            label="Título"
            value={modalState.titulo}
            //onChange={(ev) => _onChangeState("titulo", ev.target.value)}
            onChange={(ev) => _onChangeTitulo(ev.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Descrição"
            value={modalState.descricao}
            variant="outlined"
            rows={4}
            //onChange={(ev) => _onChangeState("descricao", ev.target.value)} // o onChangeState altera/adiciona(caso não exista) a propriedade que é pasada por parametro de forma dinamica
            onChange={(ev) => _onChangeDescricao(ev.target.value)} // onChangeDescricao apenas altera a propriedade "descricao" do estado
            //onChange={(ev) => _onChangeDescricao(ev.target.value)} // Alterando o input de descricao, estou a escrever no input do titulo

          /> */}

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
            onClick={_handleClick}
          >
            Finish
          </Button>
        </form>
      </Modal>
    </div>
  );
}
