/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { closeDialog } from '../../store/actions/dialog.actions';
import { saveElectionThunk } from '../../store/actions/thunks/elections.thunk';

const CreateElectionDialog = () => {
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.isOpen);

  const handleClose = () => dispatch(closeDialog());
  const onSubmit = (data) => {
    dispatch(saveElectionThunk(data));
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Create election</DialogTitle>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <FormControl>
            <Controller
              name="title"
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  id="election-title"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="filled"
                  name="title"
                />
              }
              control={control}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="position"
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  id="election-position"
                  label="Position"
                  type="text"
                  fullWidth
                  variant="filled"
                  name="position"
                />
              }
              control={control}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateElectionDialog;
