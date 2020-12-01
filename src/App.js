import Navbar from "./Navbar";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    width: 400,
    margin: "0 auto",
    textAlign: "center",
    padding: "15px",
    marginTop: 50,
  },
  input: {
    width: "95%",
    marginBottom: 15,
  },
  button: {
    marginTop: 40,
    width: "95%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <br />
          <TextField label="Enter Password" className={classes.input} />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Paper>
      <br />
      <br />
      <br />
      <BarChart />
      <br />
      <br />
      <br />
      <PieChart />
    </div>
  );
}

export default App;
