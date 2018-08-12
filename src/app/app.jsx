import React from 'react';
import { Grid, Row, Col, FormGroup } from 'react-bootstrap';

import { AddTaskBar, TasksList } from './components';

const App = () => (
  <Grid>
    <Row>
      <Col sm={2} />
      <Col sm={8}>
        <FormGroup className="pull-right">powered by redux</FormGroup>
        <div className="clearfix" />
        <AddTaskBar />
        <TasksList />
      </Col>
      <Col sm={2} />
    </Row>
  </Grid>
);

export default App;
