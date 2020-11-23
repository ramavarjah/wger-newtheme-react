import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


export default class FooterWgner extends Component {
    render() {
        return (
            <div>
                <Footer style={{background:"black", position:"relative", top:513}}></Footer>
            </div>
        )
    }
}
