/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
import {
  Button,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import FabButton from '../FabButton';
import NavBar from '../Navbar';
import { openDialog } from '../../store/reducers/dialogs.reducer';
import ElectionSettings from './ElectionSettings';
import { endElection } from '../../store/thunks/election.thunks';
import WinnerChart from './WinnerChart';
import { raiseAlert } from '../../store/reducers/alerts.reducer';
import Blob from '../Blob';

const useStyles = makeStyles(() => ({
  electionWrapper: {
    height: '100vh',
  },
  banner: {
    margin: 0,
  },
  banner__title: {
    marginTop: 25,
    marginBottom: 10,
  },
  banner__position: {
    marginBottom: 25,
  },
}));

const ElectionDashboard = () => {
  const currentElection = useSelector(
    (state) => state.election.currentElection,
  );
  const auth = useSelector((state) => state.auth);
  const hasUserVoted =
    currentElection.registeredVotes.filter((vote) => vote === auth._id)
      .length === 1;

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(currentElection).length === 0) history.push('/');
  });

  const onButtonClick = () => {
    if (!auth.isAdmin) {
      history.push('/vote');
    } else if (hasUserVoted) {
      dispatch(
        raiseAlert({ message: 'You already voted!', variant: 'warning' }),
      );
    } else {
      dispatch(endElection(currentElection._id));
    }
  };

  return (
    <div className={classes.electionWrapper}>
      <NavBar actionIcon="back" path={{ from: '/' }} />
      <ElectionSettings />
      {auth.isAdmin && <FabButton />}
      <Container maxWidth="md" className={classes.banner}>
        <Typography variant="h4" className={classes.banner__title}>
          {currentElection.title}
        </Typography>
        <Typography variant="h5" className={classes.banner__position}>
          {currentElection.position}
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={onButtonClick}
          disabled={currentElection.status === 'finished' || hasUserVoted}
        >
          {currentElection.status === 'finished'
            ? 'The election has ended'
            : !auth.isAdmin
            ? hasUserVoted
              ? 'You already voted'
              : 'Vote Now!'
            : 'End election'}
        </Button>
        {auth.isAdmin && (
          <IconButton onClick={() => dispatch(openDialog())}>
            <SettingsIcon />
          </IconButton>
        )}
      </Container>
      <div className="winner-graph">
        {currentElection.status === 'finished' ? (
          <WinnerChart />
        ) : (
          <Blob text="Please vote" />
        )}
      </div>
    </div>
  );
};

export default ElectionDashboard;
