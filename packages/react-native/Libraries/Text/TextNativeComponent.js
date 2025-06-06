/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {HostComponent} from '../../src/private/types/HostComponent';
import type {ProcessedColorValue} from '../StyleSheet/processColor';
import type {GestureResponderEvent} from '../Types/CoreEventTypes';
import type {TextProps} from './TextProps';

import {createViewConfig} from '../NativeComponent/ViewConfig';
import UIManager from '../ReactNative/UIManager';
import createReactNativeComponentClass from '../Renderer/shims/createReactNativeComponentClass';

export type NativeTextProps = $ReadOnly<{
  ...TextProps,
  isHighlighted?: ?boolean,
  selectionColor?: ?ProcessedColorValue,
  onClick?: ?(event: GestureResponderEvent) => mixed,
  // This is only needed for platforms that optimize text hit testing, e.g.,
  // react-native-windows. It can be used to only hit test virtual text spans
  // that have pressable events attached to them.
  isPressable?: ?boolean,
}>;

const textViewConfig = {
  validAttributes: {
    isHighlighted: true,
    isPressable: true,
    numberOfLines: true,
    ellipsizeMode: true,
    allowFontScaling: true,
    dynamicTypeRamp: true,
    maxFontSizeMultiplier: true,
    disabled: true,
    selectable: true,
    selectionColor: true,
    adjustsFontSizeToFit: true,
    minimumFontScale: true,
    textBreakStrategy: true,
    onTextLayout: true,
    dataDetectorType: true,
    android_hyphenationFrequency: true,
    lineBreakStrategyIOS: true,
  },
  directEventTypes: {
    topTextLayout: {
      registrationName: 'onTextLayout',
    },
  },
  uiViewClassName: 'RCTText',
};

const virtualTextViewConfig = {
  validAttributes: {
    isHighlighted: true,
    isPressable: true,
    maxFontSizeMultiplier: true,
  },
  uiViewClassName: 'RCTVirtualText',
};

export const NativeText: HostComponent<NativeTextProps> =
  (createReactNativeComponentClass('RCTText', () =>
    /* $FlowFixMe[incompatible-call] Natural Inference rollout. See
     * https://fburl.com/workplace/6291gfvu */
    createViewConfig(textViewConfig),
  ): any);

export const NativeVirtualText: HostComponent<NativeTextProps> =
  !global.RN$Bridgeless && !UIManager.hasViewManagerConfig('RCTVirtualText')
    ? NativeText
    : (createReactNativeComponentClass('RCTVirtualText', () =>
        /* $FlowFixMe[incompatible-call] Natural Inference rollout. See
         * https://fburl.com/workplace/6291gfvu */
        createViewConfig(virtualTextViewConfig),
      ): any);
