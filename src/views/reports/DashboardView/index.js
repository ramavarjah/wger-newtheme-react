import React from 'react';
import {
  // Container,
  // Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import { Table, Row } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { WeightLogModal } from './AddWeightLogModal';
import { Nutritionmodal } from './NutritionModal';
import { WeightModal } from './WeightModal';

// import Budget from './Budget';
// import LatestOrders from './LatestOrders';
// import LatestProducts from './LatestProducts';
// import Sales from './Sales';
// import TasksProgress from './TasksProgress';
// import TotalCustomers from './TotalCustomers';
// import TotalProfit from './TotalProfit';
// import TrafficByDevice from './TrafficByDevice';
const dataSource = [
  {
    key: '1',
    Day: 'Sunday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '2',
    Day: 'Monday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },

  {
    key: '3',
    Day: 'Tuesday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '4',
    Day: 'Wednesday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '5',
    Day: 'Thursday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '2',
    Day: 'Friday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  },
  {
    key: '2',
    Day: 'Saturday',
    Workout: 'RestDay',
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Day',
    dataIndex: 'Day',
    key: 'Day'
  },
  {
    title: 'Workout',
    dataIndex: 'Workout',
    key: 'Workout'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <h1 style={{ position: 'relative', left: 27 }}>Workout</h1>
      <Row className="Dashboard_grid">
        <Table pagination={false} dataSource={dataSource} columns={columns} />
        <Row>
          <h1 style={{ position: 'relative', top: -53, left: 2 }}>Nutrition</h1>
        </Row>
        <Table
          style={{ position: 'relative', left: -151 }}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
        <h1 style={{ position: 'relative', top: -53, left: -166 }}>
          Weight Log
        </h1>
        <Table
          style={{ position: 'relative', top: -445, left: 360 }}
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
      </Row>
      <WeightLogModal />
      <Nutritionmodal />
      <WeightModal />
      {/* <Button type="primary">Modal</Button>
      <Button type="primary">Modal</Button> */}
    </Page>
  );
};

export default Dashboard;
