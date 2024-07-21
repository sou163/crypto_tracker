import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";

import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary fallback="Error in Navbar section">
        <div className="navbar">
          <Navbar />
        </div>
      </ErrorBoundary>
      <div className="main">
        <Layout>
          <ErrorBoundary fallback="Error in Routes section">
            <div className="routes">
              <Routes>
                <Route exact path="/" element={ <HomePage /> } />
                <Route exact path="/exchanges" element={ <Exchanges /> } />
                <Route exact path="/cryptocurrencies" element={ <Cryptocurrencies /> } />
                <Route exact path="/crypto/:coinId" element={ <CryptoDetails /> } />
                <Route exact path="/news" element={ <News /> } />
              </Routes>
            </div>
          </ErrorBoundary>
        </Layout>
        <div className="footer">
          <ErrorBoundary fallback="Error in Footer section">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Copyright © 2024 &nbsp;
              <Link to="/">CryptoTracker Inc.</Link>
              <br />
              All rights reserved.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default App;
