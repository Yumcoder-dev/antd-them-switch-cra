/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
import './App.module.less';
import { Layout } from 'antd';
import Toolbar from './toolbar/Toolbar';

const { Content, Sider } = Layout;

function App() {
  const heightStyle = { height: '100vh' };
  return (
    <Layout style={heightStyle}>
      <Sider collapsible />
      <Content style={heightStyle}>
        <Toolbar title="test app" />
      </Content>
    </Layout>
  );
}

export default App;
