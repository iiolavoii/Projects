import React from "react";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";

export default function CardViewContent({ data }) {
  const { titulo, descricao } = data;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          direction="row"
          item
          xs={3}
          justify="space-evenly"
          alignItems="center"
        >
          <Card>
            <CardContent>
              <h2>{titulo}</h2>
              <h4>{descricao}</h4>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
