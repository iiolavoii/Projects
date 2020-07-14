import React, { useState } from 'react';
import CardView from './Cardview';
import { Button, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PopModal from '../Modals/Modal';
 
export default function TodoList() {

    const[openModal, setOpenModal] = useState(false);
    const[task, setTask] = useState({ titulo: "", descricao: ""});


    function NewTask(){
        setOpenModal(true);
    }
    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <h1>To do List</h1>
            <Tooltip title="Create" aria-label="add" >
                <Fab color="primary">
                    <AddIcon onClick={NewTask}/>
                </Fab>
            </Tooltip>
            <CardView/>
            <PopModal open={openModal} close={handleClose} data={task}/>

        </div>
    )
}
