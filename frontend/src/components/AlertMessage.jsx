import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

const AlertMessage = () => (
  <Snackbar autoHideDuration={6000}>
    <Alert elevation={6} variant="filled" severity={type} />
  </Snackbar>
);

export default AlertMessage;
