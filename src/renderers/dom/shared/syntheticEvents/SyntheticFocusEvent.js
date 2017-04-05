/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 */

'use strict';

var SyntheticUIEvent = require('SyntheticUIEvent');

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var FocusEventInterface = {
  relatedTarget: null,
};

class SyntheticFocusEvent extends SyntheticUIEvent {}
SyntheticFocusEvent.Interface = Object.assign({}, SyntheticUIEvent.Interface, FocusEventInterface);

module.exports = SyntheticFocusEvent;
