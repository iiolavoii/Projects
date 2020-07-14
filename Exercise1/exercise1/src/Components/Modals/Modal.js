import React, { useState } from 'react';
import { populateFormField } from '../../utils/populateFormField'; 
import { Modal, TextField, Button } from '@material-ui/core';
import { modalStyles } from '../Styles/Styles';




export default function PopModal({open, close, data={}}) {

    const classes = modalStyles();

    const onChangeDescricao = (nome, v) => {
        data({...task, [nome]: populateFormField(v) });
    }

    console.log(task);
    return (
        <div >
            <Modal open={open} onClose={close} >
                <form className={classes.paper}> 
                <h1>Hello World</h1>
                <TextField id="standard-basic" label="Título" onChange={(e) => { onChangeDescricao( "titulo", e.target.value) }} />
                <TextField id="standard-basic" label="Descrição" variant="outlined" rows={4} onChange={(e) => { onChangeDescricao( "descricao", e.target.value) }}/>
                <Button title="Cancel" color="secondary" variant="contained" onClick={close}>Cancel</Button>
                <Button title="Finish" color="primary" variant="contained" onClick={SaveCard()}>Finish</Button>

                </form>
            </Modal>
        </div>
    )
}
