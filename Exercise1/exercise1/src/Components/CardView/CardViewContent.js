import React from 'react';
import { Typography } from '@material-ui/core';

export default function CardViewContent({data}){

    const {titulo, descricao} = data;
    console.log("cardcontent_DATA", data);

    return(
        <div>
            <h2>{titulo}</h2>
            <h4>{descricao}</h4>
        </div>
    )
}