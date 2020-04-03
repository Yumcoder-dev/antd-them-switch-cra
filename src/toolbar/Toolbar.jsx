/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React, { memo } from 'react';
import { PageHeader, Button } from 'antd';

import dark from 'antd/dist/dark-theme';
import light from 'antd/dist/compact-theme';
import styles from './Toolbar.module.less';

const Toolbar = ({ title, subTitle }) => {
  const onLight = async () => {
    await window.less.modifyVars(light);
  };
  const onDark = async () => {
    await window.less.modifyVars(dark);
  };
  return (
    <PageHeader
      ghost={false}
      title={title}
      subTitle={subTitle}
      className={styles.header_toolbar}
      extra={[
        <Button key="3" onClick={onLight}>
          light
        </Button>,
        <Button key="2" onClick={onDark}>
          dark
        </Button>,
      ]}
    />
  );
};

export default memo(Toolbar);
