import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DeleteElectionWarning = ({ open, setIsWarningOpen }) => (
  <Dialog open={open}>
    <DialogTitle>Are you sure you want to delete this?</DialogTitle>
    <DialogContent>This can&apost be undone</DialogContent>
    <DialogActions>
      <Button onClick={() => setIsWarningOpen(false)}>Cancel</Button>
      <Button>Continue</Button>
    </DialogActions>
  </Dialog>
);

DeleteElectionWarning.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsWarningOpen: PropTypes.func.isRequired,
};

export default DeleteElectionWarning;
