// Third party
import { SnackbarProvider } from 'notistack';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  Container,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

// Local libraries
import { BarMain } from './BarMain';
import { BarNav } from './BarNav';
import { Copyright } from './Copyright';

const useStyles = makeStyles((theme) => ({
}));

export const Docs = ({ bigScreen }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <BarMain>
        <b>Four Shells</b>, work in progress!
      </BarMain>
      <BarNav products sponsors source />
      <Container maxWidth="lg">
        <SnackbarProvider maxSnack={3}>
          <Router basename="/docs">
            <br />
            <Switch>
            </Switch>
            <Copyright />
          </Router>
        </SnackbarProvider>
      </Container>
    </React.Fragment>
  );
}
