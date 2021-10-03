import React, { useState } from 'react';
import { Link } from 'umi';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './admin.less';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const Adimn = (props: any) => {
    const { Header, Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const handleToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="admin">
            <Layout>
                <Sider
                    collapsible
                    trigger={null}
                    collapsed={collapsed}
                    style={{
                        flex: '0 0 200px',
                        maxWidth: '200px',
                        minWidth: '200px',
                        width: '200px',
                    }}
                >
                    <div className="logo"></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/admin/nav1">nav 1</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/admin/nav2">nav 2</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                            nav 4
                        </Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>
                            nav 5
                        </Menu.Item>
                        <Menu.Item key="6" icon={<AppstoreOutlined />}>
                            nav 6
                        </Menu.Item>
                        <Menu.Item key="7" icon={<TeamOutlined />}>
                            nav 7
                        </Menu.Item>
                        <Menu.Item key="8" icon={<ShopOutlined />}>
                            nav 8
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                            nav 4
                        </Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>
                            nav 5
                        </Menu.Item>
                        <Menu.Item key="6" icon={<AppstoreOutlined />}>
                            nav 6
                        </Menu.Item>
                        <Menu.Item key="7" icon={<TeamOutlined />}>
                            nav 7
                        </Menu.Item>
                        <Menu.Item key="8" icon={<ShopOutlined />}>
                            nav 8
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BarChartOutlined />}>
                            nav 4
                        </Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>
                            nav 5
                        </Menu.Item>
                        <Menu.Item key="6" icon={<AppstoreOutlined />}>
                            nav 6
                        </Menu.Item>
                        <Menu.Item key="7" icon={<TeamOutlined />}>
                            nav 7
                        </Menu.Item>
                        <Menu.Item key="8" icon={<ShopOutlined />}>
                            nav 8
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: handleToggle,
                        })}
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            ...
                            <br />
                            Really
                            {props.children}
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            long
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ... content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default Adimn;
