import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function CardViewContent({ data }) {
  const { titulo, descricao } = data;

  return (
    <div>
      <Card style={{ width: "190px", height: "240px" }}>
        <CardHeader
          action={
            <>
              <IconButton aria-label="settings">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <DeleteIcon />
              </IconButton>
            </>
          }
          title={titulo}
        />
        <CardContent>
          <h4>{descricao}</h4>
        </CardContent>
      </Card>
    </div>
  );
}
