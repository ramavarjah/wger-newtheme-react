// import { Table, Input, Popconfirm } from 'antd';
// import React from 'react';
// import '../scss/Dashboardgrid.css'
// const data = [];
// for (let i = 1; i < 7; i++) {
//   data.push({
//     key: i.toString(),
//     Days: `Edrward ${i}`,
//     Nutrition: `Energy${i}`,
//     Weight: `56 ${i}`,
//   });
// }

// const EditableCell = ({ editable, value, onChange }) => (
//   <div>
//     {editable
//       ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
//       : value
//     }
//   </div>
// );

// export default class EditableTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.columns = [{
//       title: 'Days',
//       dataIndex: 'Days',
//       width: '15%',
//       render: (text, record) => this.renderColumns(text, record, 'Days'),
//     },
//      {
//       title: 'Nutrition',
//       dataIndex: 'Nutrition',
//       width: '15%',
//       render: (text, record) => this.renderColumns(text, record, 'Nutrition'),
//     }, 
//     {
//       title: 'Workout',
//       dataIndex: 'Workout',
//       width: '15%',
//       render: (text, record) => this.renderColumns(text, record, 'Workout'),
//     }, 
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       width: '15%',
//       render: (text, record) => {
//         const { editable } = record;
//         return (
//           <div className="editable-row-operations">
//             {
//               editable ?
//                 <span className="Save_cancel">
//                   <a onClick={() => this.save(record.key)}>Save</a>
//                   <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
//                     <a>Cancel</a>
//                   </Popconfirm>
//                 </span>
//                 : <a style={{color:"blue"}} onClick={() => this.edit(record.key)}>Edit</a>
//             }
//           </div>
//         );
//       },
//     }];
//     this.state = { data };
//     this.cacheData = data.map(item => ({ ...item }));
//   }
//   renderColumns(text, record, column) {
//     return (
//       <EditableCell
//         editable={record.editable}
//         value={text}
//         onChange={value => this.handleChange(value, record.key, column)}
//       />
//     );
//   }
//   handleChange(value, key, column) {
//     const newData = [...this.state.data];
//     const target = newData.filter(item => key === item.key)[0];
//     if (target) {
//       target[column] = value;
//       this.setState({ data: newData });
//     }
//   }
//   edit(key) {
//     const newData = [...this.state.data];
//     const target = newData.filter(item => key === item.key)[0];
//     if (target) {
//       target.editable = true;
//       this.setState({ data: newData });
//     }
//   }
//   save(key) {
//     const newData = [...this.state.data];
//     const target = newData.filter(item => key === item.key)[0];
//     if (target) {
//       delete target.editable;
//       this.setState({ data: newData });
//       this.cacheData = newData.map(item => ({ ...item }));
//     }
//   }
//   cancel(key) {
//     const newData = [...this.state.data];
//     const target = newData.filter(item => key === item.key)[0];
//     if (target) {
//       Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
//       delete target.editable;
//       this.setState({ data: newData });
//     }
//   }
//   render() {
//     return(
//         <div> 
//           <h2 style={{width: 938,position: "relative",right: 412}}>Dashboard</h2>
//           <hr/>
//     <Table pagination={false} bordered dataSource={this.state.data} columns={this.columns} 
//     />
//     </div>
//     )
//   }
// }

// // ReactDOM.render(<EditableTable />, mountNode);



import { Table, Tag, Space, Row, Button, Card, Modal } from 'antd';
import React, { Component } from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: "50%"
  },

  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   key: 'address',
  // },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: tags => (
  //     <>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },

];

export default class DashboardGrid extends Component {
  constructor(props){
    super(props)
    this.state={
      visible : false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  
  render() {
    return (
      <div>
         <div style={{position: "relative", top: -86}}> 
            <h2 style={{width: 938,position: "relative", right: 284,top: 72}}>Dashboard</h2>
            <div style={{ margin: 96}}>
            <hr/><h1 style={{    position: "relative",left: -504}}>Workout</h1>
           <Row>
      <Table style={{width:328, position:"relative", left: 33}} pagination={false} bordered dataSource={data} columns={columns}
      />
<Button type="primary" onClick={this.showModal} style={{position: "absolute", top: 882, left: 108, width:324}}>TEST</Button>
<Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <Router>
        <a href="Workout">
          <Button>Workout</Button>
          </a>
          </Router>
          <p>Some contents...</p>
        </Modal>
<h1 style={{    position: "relative",    left: 106, top: -77}}>Nutrition</h1>
      <Table style={{width:328,  position: "relative", left: -32}} pagination={false} bordered dataSource={data} columns={columns} />
      <Button type="primary"  onClick={this.showModal} style={{position: "absolute",     top: 882, left: 513, width:324}}>TEST</Button>
      <h1 style={{    position: "relative",    left: 106, top: -77}}>Weight</h1>
      <Table style={{width:328, position: "relative",     left: 837, top: -386}} pagination={false} bordered dataSource={data} columns={columns} />
      <Button type="primary"  onClick={this.showModal} style={{position: "absolute", width: 324, top: 882, left: 937}}>TEST</Button>
   </Row>
   </div>
      </div>
      </div>
    )
  }
}









