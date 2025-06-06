/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const ReactNativeTestTools = require('../../../Utilities/ReactNativeTestTools');
/* $FlowFixMe[cannot-resolve-module] (>=0.99.0 site=react_native_ios_fb) This
 * comment suppresses an error found when Flow v0.99 was deployed. To see the
 * error, delete this comment and run Flow. */
// $FlowFixMe[missing-platform-support]
const ProgressBarAndroid = require('../ProgressBarAndroid.android').default;
const React = require('react');

describe('<ProgressBarAndroid />', () => {
  it('should render as expected', async () => {
    await ReactNativeTestTools.expectRendersMatchingSnapshot(
      'ProgressBarAndroid',
      () => <ProgressBarAndroid styleAttr="Horizontal" indeterminate={true} />,
      () => {
        jest.dontMock('../ProgressBarAndroid');
      },
    );
  });
});
