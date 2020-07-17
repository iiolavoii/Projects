import React from 'react'
import { Button, Card, CardContent  } from '@material-ui/core';
import CardViewContent from "../CardView/CardViewContent";

export default function CardView({arrayTasks, data}) {
    return (
        <CardViewContent data={data}/>
        // arrayTasks.map(todo => {
        //     return <CardViewContent key={data} data={data}/>} )
               
       
    )
}
