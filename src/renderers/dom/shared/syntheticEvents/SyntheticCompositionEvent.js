/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 */

'use strict';

var SyntheticEvent = require('SyntheticEvent');

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var CompositionEventInterface = {
  data: null,
};

class SyntheticCompositionEvent extends SyntheticEvent {}
SyntheticCompositionEvent.Interface = Object.assign({}, SyntheticEvent.Interface, CompositionEventInterface);

module.exports = SyntheticCompositionEvent;
