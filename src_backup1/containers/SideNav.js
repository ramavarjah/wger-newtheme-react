// import { Layout, Menu, Breadcrumb } from 'antd';
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

// export default class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   onCollapse = collapsed => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     const { collapsed } = this.state;
//     return (
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//           <div className="logo" />
//           <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <Menu.Item key="1" icon={<PieChartOutlined />}>
//               Option 1
//             </Menu.Item>
//             <Menu.Item key="2" icon={<DesktopOutlined />}>
//               Option 2
//             </Menu.Item>
//             <SubMenu key="sub1" icon={<UserOutlined />} title="Dashboard">
//             <Router>
               
//               <Menu.Item key="3"> <a style={{    position: "relative",left: 51
// }} href="Workout">Workout</a></Menu.Item>

//             </Router>
//             </SubMenu>
//             <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9" icon={<FileOutlined />}>
//               Files
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className="site-layout">
//           {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
//           <Content style={{ margin: '0 16px' }}>
//             {/* <Breadcrumb style={{ margin: '16px 0' }}>
//               <Breadcrumb.Item>User</Breadcrumb.Item>
//               <Breadcrumb.Item>Bill</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//               Bill is a cat.
//             </div> */}
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }
