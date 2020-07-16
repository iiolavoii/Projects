import React, { useState } from 'react';
import { populateFormField } from '../../utils/populateFormField'; 
import { Modal, TextField, Button } from '@material-ui/core';
import { modalStyles } from '../Styles/Styles';




export default function PopModal({open, close, data={}, changeState} ) {

    const classes = modalStyles();

    function _onChangeDescricao(nome, valor){
        console.log("v", valor);        
        const value = valor;
        const dataUpdated = {...data, [nome]: populateFormField(value) };
        changeState(dataUpdated, nome);
        console.log("dataUpdated", dataUpdated);
    }

    function SaveCard(){

    }

    return (
        <div >
            <Modal open={open} onClose={close} >
                <form className={classes.paper}> 
                <h1>Hello World</h1>
                <TextField id="standard-basic"
                 label="Título"
                  onChange={(valor) =>  _onChangeDescricao( "titulo", valor.target.value) } />
                <TextField id="standard-basic" label="Descrição" variant="outlined" rows={4} onChange={(valor) =>  _onChangeDescricao( "descricao", valor.target.value) }/>
                <Button title="Cancel" color="secondary" variant="contained" onClick={close}>Cancel</Button>
                <Button title="Finish" color="primary" variant="contained" onClick={SaveCard()}>Finish</Button>

                </form>
            </Modal>
        </div>
    )
}
