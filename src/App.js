import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Input, Cascader, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Footer, Sider, Content } = Layout;

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
  {
    value: 'Option 4',
    label: 'Option 4',
  },
];

function onChange(value) {
  console.log(value);
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="color-nav" style={{ paddingTop: 15 }}>
          <Avatar style={{ float: 'right' }} size="large" icon={<UserOutlined />} />
          <Title style={{ color: 'white', fontFamily: "Lora" }} level={3}>SimplifAI</Title>
        </Header>
        <Layout>
          <Sider
            className="color-nav"
          >
            <Menu
              defaultSelectedKeys={['CreateProduct']}
              mode="inline"
            >
              <Menu.Item key='CreateProduct'>
                Create Product
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Create Product</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{ background: '#ffffff', padding: 24, minHeight: 600 }}>
              <h3 style={{ color: '#0095d9' }}>Data Product</h3>
              <Input placeholder="Enter Data Product Name" />
              <h3 style={{ paddingTop: 15, color: '#0095d9' }}>Input Ports</h3>
              <Cascader size='large' placeholder='ETL' options={options} onChange={onChange}></Cascader>
              <br></br>
              <Cascader size='large' placeholder='Input Files' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <br/>
              <Cascader size='large' placeholder='CDC' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <br/>
              <Cascader size='large' placeholder='Source DB' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <h3 style={{ paddingTop: 15, color: '#0095d9' }}>Control Ports</h3>
              <Cascader size='large' placeholder='Discoverability' options={options} onChange={onChange}></Cascader>
              <br/>
              <Cascader size='large' placeholder='Audit' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <h3 style={{ paddingTop: 15, color: '#0095d9' }}>Output Ports</h3>
              <Cascader size='large' placeholder='ML Pipelines' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <br/>
              <Cascader size='large' placeholder='Output Data' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <br/>
              <Cascader size='large' placeholder='Service Management Analytics Bot' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <br/>
              <Cascader size='large' placeholder='ML Models' style={{ paddingTop: 15 }} options={options} onChange={onChange}></Cascader>
              <br/>
              <Button type="primary" size="large" style={{marginTop:15}}>Create Data Product</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
