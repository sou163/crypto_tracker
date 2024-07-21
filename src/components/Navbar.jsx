import React, { useState, useEffect } from "react";

import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  MenuOutlined,
  BulbOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const resize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const items = [
    {
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
      key: "home"
    },
    {
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
      icon: <FundOutlined />,
      key: "cryptos"
    },
    // {
    //   label: <Link to="/exchanges">Exchanges</Link>,
    //   icon: <MoneyCollectOutlined />,
    //   key: "exchanges"
    // },
    {
      label: <Link to="/news">News</Link>,
      icon: <BulbOutlined />,
      key: "news"
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto Tracker</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu mode="vertical" theme="dark" items={items}/>
      )}
    </div>
  );
};

export default Navbar;
