/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 */

'use strict';

var SyntheticEvent = require('SyntheticEvent');

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var ClipboardEventInterface = {
  clipboardData: function(event) {
    return 'clipboardData' in event
      ? event.clipboardData
      : window.clipboardData;
  },
};

class SyntheticClipboardEvent extends SyntheticEvent {}
SyntheticClipboardEvent.Interface = Object.assign({}, SyntheticEvent.Interface, ClipboardEventInterface);

module.exports = SyntheticClipboardEvent;
