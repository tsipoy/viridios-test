import React from 'react';
import {
  Link
} from "react-router-dom";

import 'antd/dist/antd.css';
import './index.css';
import { Menu, Switch } from 'antd';
import { MailOutlined } from '@ant-design/icons';


export const MainMenu = () => {
  const [theme, setTheme] = React.useState('light');
  const [current, setCurrent] = React.useState('1');

  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        
        <Menu.Item key="page-1"><Link to="page-1">page-1</Link></Menu.Item>
        <Menu.Item key="page-2"><Link to="page-2">page-2</Link></Menu.Item>
        <Menu.Item key="page-3"><Link to="page-3">page-3</Link></Menu.Item>
      </Menu>
    </>
  );
};