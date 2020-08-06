import { makeStyles } from "@material-ui/core";

const modalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridmodaltext: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridbuttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fonttypes: {
    fontFamily: "Montserrat",
  },
}));

export { modalStyles };
