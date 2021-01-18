import { Button } from '@material-ui/core';
import React from 'react';
import FabButton from '../FabButton';
import NavBar from '../Navbar';

const ElectionDashboard = () => (
  <div className="electionWrapper">
    <NavBar actionIcon="back" />
    <FabButton />
    <div className="banner">
      <h1>Title</h1>
      <Button color="secondary">Action button</Button>
    </div>
  </div>
);

export default ElectionDashboard;
