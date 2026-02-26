var CABLES1
  /******/
;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ // The require scope
  /******/ var __webpack_require__ = {}
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  ;(() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}

  // EXPORTS
  __webpack_require__.d(__webpack_exports__, {
    default: () => /* binding */ core
  })

  // NAMESPACE OBJECT: ./src/core/base64.js
  var base64_namespaceObject = {}
  __webpack_require__.r(base64_namespaceObject)
  __webpack_require__.d(base64_namespaceObject, {
    b64decTypedArray: () => b64decTypedArray,
    b64encTypesArray: () => b64encTypesArray,
    base64Chars: () => base64Chars,
    base64lookup: () => base64lookup
  })

  // NAMESPACE OBJECT: ./src/core/utils.js
  var utils_namespaceObject = {}
  __webpack_require__.r(utils_namespaceObject)
  __webpack_require__.d(utils_namespaceObject, {
    UTILS: () => UTILS,
    ajax: () => ajax,
    ajaxSync: () => ajaxSync,
    basename: () => basename,
    cacheBust: () => cacheBust,
    clamp: () => clamp,
    cleanJson: () => cleanJson,
    copyArray: () => copyArray,
    filename: () => filename,
    generateUUID: () => generateUUID,
    getShortOpName: () => getShortOpName,
    keyCodeToName: () => keyCodeToName,
    logStack: () => logStack,
    map: () => map,
    prefixedHash: () => prefixedHash,
    request: () => request,
    shortId: () => shortId,
    shuffleArray: () => shuffleArray,
    simpleId: () => simpleId,
    smoothStep: () => smoothStep,
    smootherStep: () => smootherStep,
    uuid: () => uuid
  })

  // NAMESPACE OBJECT: ./src/core/anim.js
  var anim_namespaceObject = {}
  __webpack_require__.r(anim_namespaceObject)
  __webpack_require__.d(anim_namespaceObject, {
    ANIM: () => ANIM,
    Anim: () => Anim
  }) // CONCATENATED MODULE: ./src/core/base64.js

  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  // Use a lookup table to find the index.
  const _base64lookup = new Uint8Array(256)
  for (let i = 0; i < base64Chars.length; i++) _base64lookup[base64Chars.charCodeAt(i)] = i

  const base64lookup = _base64lookup

  const b64encTypesArray = function (arraybuffer) {
    if (arraybuffer.buffer) arraybuffer = arraybuffer.buffer
    let bytes = new Uint8Array(arraybuffer),
      i,
      len = bytes.length,
      base64 = ''

    for (i = 0; i < len; i += 3) {
      base64 += base64Chars[bytes[i] >> 2]
      base64 += base64Chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)]
      base64 += base64Chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)]
      base64 += base64Chars[bytes[i + 2] & 63]
    }

    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + '='
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + '=='

    return base64
  }

  const b64decTypedArray = function (base64) {
    let bufferLength = base64.length * 0.75,
      len = base64.length,
      i,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4

    if (base64[base64.length - 1] === '=') {
      bufferLength--
      if (base64[base64.length - 2] === '=') bufferLength--
    }

    let arraybuffer = new ArrayBuffer(bufferLength),
      bytes = new Uint8Array(arraybuffer)

    for (i = 0; i < len; i += 4) {
      encoded1 = base64lookup[base64.charCodeAt(i)]
      encoded2 = base64lookup[base64.charCodeAt(i + 1)]
      encoded3 = base64lookup[base64.charCodeAt(i + 2)]
      encoded4 = base64lookup[base64.charCodeAt(i + 3)]

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4)
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2)
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63)
    }

    return arraybuffer
  } // CONCATENATED MODULE: ./src/core/constants.js

  const CONSTANTS = {
    ANIM: {
      EASINGS: [
        'linear',
        'absolute',
        'smoothstep',
        'smootherstep',
        'Cubic In',
        'Cubic Out',
        'Cubic In Out',
        'Expo In',
        'Expo Out',
        'Expo In Out',
        'Sin In',
        'Sin Out',
        'Sin In Out',
        'Quart In',
        'Quart Out',
        'Quart In Out',
        'Quint In',
        'Quint Out',
        'Quint In Out',
        'Back In',
        'Back Out',
        'Back In Out',
        'Elastic In',
        'Elastic Out',
        'Bounce In',
        'Bounce Out'
      ],
      EASING_LINEAR: 0,
      EASING_ABSOLUTE: 1,
      EASING_SMOOTHSTEP: 2,
      EASING_SMOOTHERSTEP: 3,
      EASING_CUBICSPLINE: 4,

      EASING_CUBIC_IN: 5,
      EASING_CUBIC_OUT: 6,
      EASING_CUBIC_INOUT: 7,

      EASING_EXPO_IN: 8,
      EASING_EXPO_OUT: 9,
      EASING_EXPO_INOUT: 10,

      EASING_SIN_IN: 11,
      EASING_SIN_OUT: 12,
      EASING_SIN_INOUT: 13,

      EASING_BACK_IN: 14,
      EASING_BACK_OUT: 15,
      EASING_BACK_INOUT: 16,

      EASING_ELASTIC_IN: 17,
      EASING_ELASTIC_OUT: 18,

      EASING_BOUNCE_IN: 19,
      EASING_BOUNCE_OUT: 21,

      EASING_QUART_IN: 22,
      EASING_QUART_OUT: 23,
      EASING_QUART_INOUT: 24,

      EASING_QUINT_IN: 25,
      EASING_QUINT_OUT: 26,
      EASING_QUINT_INOUT: 27
    },

    OP: {
      OP_PORT_TYPE_VALUE: 0,
      OP_PORT_TYPE_NUMBER: 0,
      OP_PORT_TYPE_FUNCTION: 1,
      OP_PORT_TYPE_TRIGGER: 1,
      OP_PORT_TYPE_OBJECT: 2,
      OP_PORT_TYPE_TEXTURE: 2,
      OP_PORT_TYPE_ARRAY: 3,
      OP_PORT_TYPE_DYNAMIC: 4,
      OP_PORT_TYPE_STRING: 5,

      OP_VERSION_PREFIX: '_v'
    },

    PORT: {
      PORT_DIR_IN: 0,
      PORT_DIR_OUT: 1
    },

    PACO: {
      PACO_CLEAR: 0,
      PACO_VALUECHANGE: 1,
      PACO_OP_DELETE: 2,
      PACO_UNLINK: 3,
      PACO_LINK: 4,
      PACO_LOAD: 5,
      PACO_OP_CREATE: 6,
      PACO_OP_ENABLE: 7,
      PACO_OP_DISABLE: 8,
      PACO_UIATTRIBS: 9,
      PACO_VARIABLES: 10,
      PACO_TRIGGERS: 11,
      PACO_PORT_SETVARIABLE: 12,
      PACO_PORT_SETANIMATED: 13,
      PACO_PORT_ANIM_UPDATED: 14,
      PACO_DESERIALIZE: 15
    }
  } // CONCATENATED MODULE: ./src/core/utils.js

  /**
   * @external CABLES1
   * @namespace Utils
   */

  const UTILS = {}
  /**
   * Merge two Float32Arrays.
   * @function float32Concat
   * @memberof Utils
   * @param {Float32Array} first Left-hand side array
   * @param {Float32Array} second Right-hand side array
   * @return {Float32Array}
   * @static
   */
  UTILS.float32Concat = function (first, second) {
    if (!(first instanceof Float32Array)) first = new Float32Array(first)
    if (!(second instanceof Float32Array)) second = new Float32Array(second)

    const result = new Float32Array(first.length + second.length)

    result.set(first)
    result.set(second, first.length)

    return result
  }

  /**
   * get op shortname: only last part of fullname and without version
   * @function getShortOpName
   * @memberof CABLES1
   * @param {String} full op name
   * @static
   */
  const getShortOpName = function (fullname) {
    let name = fullname.split('.')[fullname.split('.').length - 1]

    if (name.contains(CONSTANTS.OP.OP_VERSION_PREFIX)) {
      const n = name.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1]
      name = name.substring(0, name.length - (CONSTANTS.OP.OP_VERSION_PREFIX + n).length)
    }
    return name
  }

  /**
   * randomize order of an array
   * @function shuffleArray
   * @memberof Utils
   * @param {Array|Float32Array} array {Array} original
   * @return {Array|Float32Array} shuffled array
   * @static
   */
  const shuffleArray = function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.seededRandom() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  /**
   * generate a short "relativly unique" id
   * @function shortId
   * @memberof Utils
   * @return {String} generated ID
   * @static
   */

  const _shortIds = {}
  const _shortId = function () {
    let str = Math.random().toString(36).substr(2, 9)

    if (_shortIds.hasOwnProperty(str)) str = _shortId()
    _shortIds[str] = true
    return str
  }
  const shortId = _shortId

  /**
   * generate a UUID
   * @function uuid
   * @memberof Utils
   * @return {String} generated UUID
   * @static
   */
  const _uuid = function () {
    let d = new Date().getTime()
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    return uuid
  }
  const uuid = _uuid
  const generateUUID = _uuid

  function cleanJson(obj) {
    for (const i in obj) {
      if (obj[i] && typeof objValue === 'object' && obj[i].constructor === Object) obj[i] = cleanJson(obj[i])

      if (obj[i] === null || obj[i] === undefined) delete obj[i]
      else if (Array.isArray(obj[i]) && obj[i].length == 0) delete obj[i]
    }

    return obj
  }

  /**
   * @see http://stackoverflow.com/q/7616461/940217
   * @return {string}
   */
  const _prefixedHash = function (str, prefix = 'id') {
    let hash = 0
    if (Array.prototype.reduce) {
      hash = str.split('').reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0)
        return a & a
      }, 0)
    } else {
      if (str.length > 0) {
        for (let i = 0; i < str.length; i++) {
          let character = str.charCodeAt(i)
          hash = (hash << 5) - hash + character
          hash &= hash // Convert to 32bit integer
        }
      }
    }
    return prefix + '' + hash
  }
  const prefixedHash = _prefixedHash

  /**
   * generate a simple ID
   * @function simpleId
   * @memberof Utils
   * @return {Number} new id
   * @static
   */
  let simpleIdCounter = 0
  const simpleId = function () {
    simpleIdCounter++
    return simpleIdCounter
  }

  /**
   * smoothStep a value
   * @function smoothStep
   * @memberof Utils
   * @function
   * @param {Number} value value to be smoothed [0-1]
   * @return {Number} smoothed value
   * @static
   */
  const smoothStep = function (perc) {
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)))
    perc = x * x * (3 - 2 * x) // smoothstep
    return perc
  }

  /**
   * smootherstep a value
   * @function smootherStep
   * @memberof Utils
   * @param value {Number} value to be smoothed [0-1]
   * @return {Number} smoothed value
   * @static
   */
  const smootherStep = function (perc) {
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)))
    perc = x * x * x * (x * (x * 6 - 15) + 10) // smootherstep
    return perc
  }

  /**
   * clamp number / make sure its between min/max
   * @function clamp
   * @memberof Utils
   * @param {Number} value value to be mapped
   * @param {Number} min minimum value
   * @param {Number} max maximum value
   * @static
   */
  const clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max)
  }

  /**
   * map a value in a range to a value in another range
   * @function map
   * @memberof Utils
   * @param {Number} value value to be mapped
   * @param {Number} oldMin old range minimum value
   * @param {Number} oldMax old range maximum value
   * @param {Number} newMin new range minimum value
   * @param {Number} newMax new range maximum value
   * @return {Number} mapped value
   * @static
   */
  const map = function (x, _oldMin, _oldMax, _newMin, _newMax, _easing) {
    if (x >= _oldMax) return _newMax
    if (x <= _oldMin) return _newMin

    let reverseInput = false
    const oldMin = Math.min(_oldMin, _oldMax)
    const oldMax = Math.max(_oldMin, _oldMax)
    if (oldMin != _oldMin) reverseInput = true

    let reverseOutput = false
    const newMin = Math.min(_newMin, _newMax)
    const newMax = Math.max(_newMin, _newMax)
    if (newMin != _newMin) reverseOutput = true

    let portion = 0
    let r = 0

    if (reverseInput) portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin)
    else portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin)

    if (reverseOutput) r = newMax - portion
    else r = portion + newMin

    if (!_easing) return r
    if (_easing == 1) {
      // smoothstep
      x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)))
      return _newMin + x * x * (3 - 2 * x) * (_newMax - _newMin)
    }
    if (_easing == 2) {
      // smootherstep
      x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)))
      return _newMin + x * x * x * (x * (x * 6 - 15) + 10) * (_newMax - _newMin)
    }

    return r
  }

  /**
   * @namespace Math
   */
  /**
   * set random seed for seededRandom()
   * @memberof Math
   * @type Number
   * @static
   */
  Math.randomSeed = 1

  Math.setRandomSeed = function (seed) {
    // https://github.com/cables-gl/cables_docs/issues/622
    Math.randomSeed = seed * 50728129
    if (seed != 0) {
      Math.randomSeed = Math.seededRandom() * 17624813
      Math.randomSeed = Math.seededRandom() * 9737333
    }
  }

  /**
   * generate a seeded random number
   * @function seededRandom
   * @memberof Math
   * @param {Number} max minimum possible random number
   * @param {Number} min maximum possible random number
   * @return {Number} random value
   * @static
   */
  Math.seededRandom = function (max, min) {
    if (Math.randomSeed === 0) Math.randomSeed = Math.random() * 999
    max = max || 1
    min = min || 0

    Math.randomSeed = (Math.randomSeed * 9301 + 49297) % 233280
    const rnd = Math.randomSeed / 233280.0

    return min + rnd * (max - min)
  }

  // ----------------------------------------------------------------

  /**
   * returns true if parameter is a number
   * @function isNumeric
   * @memberof Utils
   * @param {Any} value The value to check.
   * @return {Boolean}
   * @static
   */
  UTILS.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  /**
   * returns true if parameter is array
   * @function isArray
   * @param {Any} value Value to check
   * @memberof Utils
   * @return {Boolean}
   * @static
   */
  UTILS.isArray = function (v) {
    return Object.prototype.toString.call(v) === '[object Array]'
  }

  /**
   * @namespace String
   */

  /**
   * append a linebreak to a string
   * @function endl
   * @memberof String
   * @return {String} string with newline break appended ('\n')
   */
  String.prototype.endl = function () {
    return this + '\n'
  }

  /**
   * return true if string starts with prefix
   * @function startsWith
   * @memberof String
   * @param {String} prefix The prefix to check.
   * @return {Boolean}
   */
  String.prototype.startsWith = function (prefix) {
    return this.indexOf(prefix) === 0
  }

  /**
   * return true if string ends with suffix
   * @function endsWith
   * @memberof String
   * @param {String} suffix
   * @return {Boolean}
   */
  String.prototype.endsWith =
    String.prototype.endsWith ||
    function (suffix) {
      return this.match(suffix + '$') == suffix
    }

  /**
   * return true if string contains string
   * @function contains
   * @memberof String
   * @param {String} searchStr
   * @return {Boolean}
   */
  String.prototype.contains =
    String.prototype.contains ||
    function (searchStr) {
      return this.indexOf(searchStr) > -1
    }

  // ----------------------------------------------------------------

  /**
   * append a unique/random parameter to a url, so the browser is forced to reload the file, even if its cached
   * @function cacheBust
   * @static
   * @memberof Utils
   * @param {String} url The url to append the cachebuster parameter to.
   * @return {String} url with cachebuster parameter
   */
  const cacheBust = function (url) {
    if (url.contains('?')) url += '&'
    else url += '?'
    return url + 'cache=' + CABLES1.uuid()
  }

  /**
   * copy the content of an array
   * @function copyArray
   * @static
   * @memberof Utils
   * @param {Array} sourceArray
   * @param {Array} dst optional
   * @return {Array} dst
   */
  const copyArray = function (src, dst) {
    if (!src) return null
    dst = dst || []
    dst.length = src.length
    for (let i = 0; i < src.length; i++) {
      dst[i] = src[i]
    }

    return dst
  }

  /**
   * return the filename part of a url without extension
   * @function basename
   * @static
   * @memberof Utils
   * @param {String} url
   * @return {String} just the filename
   */
  const basename = function (url) {
    let name = CABLES1.filename(url)

    const parts2 = name.split('.')
    name = parts2[0]

    return name
  }

  /**
   * output a stacktrace to the console
   * @function logStack
   * @static
   * @memberof Utils
   */
  const logStack = function () {
    console.log('logstack', new Error().stack)
  }

  /**
   * return the filename part of a url
   * @function filename
   * @static
   * @memberof Utils
   * @param {String} url
   * @return {String} just the filename
   */
  const filename = function (url) {
    let name = ''
    if (!url) return ''

    if (url.startsWith('data:') && url.contains(':')) {
      const parts = url.split(',')
      return parts[0]
    }

    const parts = (url + '').split('/')
    if (parts.length > 0) {
      const str = parts[parts.length - 1]
      let parts2 = str.split('?')
      name = parts2[0]
    }

    return name || ''
  }

  const ajaxSync = function (url, cb, method, post, contenttype) {
    request({
      url: url,
      cb: cb,
      method: method,
      data: post,
      contenttype: contenttype,
      sync: true
    })
  }

  /**
   * make an ajax request
   * @function ajax
   * @static
   */
  const ajax = function (url, cb, method, post, contenttype, jsonP, headers = {}, options = {}) {
    const requestOptions = {
      url: url,
      cb: cb,
      method: method,
      data: post,
      contenttype: contenttype,
      sync: false,
      jsonP: jsonP,
      headers: headers
    }
    if (options && options.credentials) requestOptions.credentials = options.credentials
    request(requestOptions)
  }

  const request = function (options) {
    if (!options.hasOwnProperty('asynch')) options.asynch = true

    let xhr
    try {
      xhr = new XMLHttpRequest()
    } catch (e) {}

    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return

      if (options.cb) {
        if (xhr.status == 200 || xhr.status == 0) options.cb(false, xhr.responseText, xhr)
        else options.cb(true, xhr.responseText, xhr)
      }
    }

    try {
      xhr.open(options.method ? options.method.toUpperCase() : 'GET', options.url, !options.sync)
    } catch (e) {
      if (options.cb && e) options.cb(true, e.msg, xhr)
    }

    if (typeof options.headers === 'object') {
      const keys = Object.keys(options.headers)
      for (let i = 0; i < keys.length; i++) {
        const name = keys[i]
        const value = options.headers[name]
        xhr.setRequestHeader(name, value)
      }
    }

    if (options.credentials && options.credentials !== 'omit') {
      xhr.withCredentials = true
    }

    try {
      if (!options.post && !options.data) {
        xhr.send()
      } else {
        xhr.setRequestHeader(
          'Content-type',
          options.contenttype ? options.contenttype : 'application/x-www-form-urlencoded'
        )
        xhr.send(options.data || options.post)
      }
    } catch (e) {
      if (options.cb) options.cb(true, e.msg, xhr)
    }
  }

  const keyCodeToName = function (keyCode) {
    if (!keyCode && keyCode !== 0) return 'Unidentified'
    const keys = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: 'Space',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    }
    if (keys[keyCode]) {
      return keys[keyCode]
    } else {
      return String.fromCharCode(keyCode)
    }
  }
  // ----------------------------------------------------------------

  window.performance = window.performance || {
    offset: Date.now(),
    now: function now() {
      return Date.now() - this.offset
    }
  } // CONCATENATED MODULE: ../shared/client/src/logger.js

  /* eslint-disable no-console */

  class Logger {
    constructor(initiator) {
      this._logs = []
      this.initiator = initiator
    }

    stack(t) {
      console.info('[' + this.initiator + '] ', t)
      console.log(new Error().stack)
    }

    groupCollapsed(t) {
      console.groupCollapsed('[' + this.initiator + '] ' + t)
    }

    table(t) {
      console.table(t)
    }

    groupEnd() {
      console.groupEnd()
    }

    error(args) {
      console.error('[' + this.initiator + ']', ...arguments)
      if (window.gui) window.gui.emitEvent('coreLogEvent', this.initiator, 'error', arguments)
    }

    info(args) {
      console.error('[' + this.initiator + ']', ...arguments)
      if (window.gui) window.gui.emitEvent('coreLogEvent', this.initiator, 'info', arguments)
    }

    warn(args) {
      console.warn('[' + this.initiator + ']', ...arguments)
      // console.log((new Error()).stack);
      if (window.gui) window.gui.emitEvent('coreLogEvent', this.initiator, 'warn', arguments)
    }

    verbose() {
      if ((CABLES1.UI && CABLES1.UI.logFilter.shouldPrint(this.initiator, ...arguments)) || !CABLES1.logSilent)
        console.log('[' + this.initiator + ']', ...arguments)
      if (window.gui) window.gui.emitEvent('coreLogEvent', this.initiator, 'verbose', arguments)
    }

    log(args) {
      if ((CABLES1.UI && CABLES1.UI.logFilter.shouldPrint(this.initiator, ...arguments)) || !CABLES1.logSilent)
        console.log('[' + this.initiator + ']', ...arguments)
      if (window.gui) window.gui.emitEvent('coreLogEvent', this.initiator, 'log', arguments)
    }

    userInteraction(text) {
      // this.log({ "initiator": "userinteraction", "text": text });
    }
  } // CONCATENATED MODULE: ./src/core/anim_key.js

  const Key = function (obj) {
    this.time = 0.0
    this.value = 0.0
    // this.ui = null;
    this.onChange = null
    this._easing = 0
    // this.bezTangIn = 0;
    // this.bezTangOut = 0;
    // this.bezTime = 0.5;
    // this.bezValue = 0;
    // this.bezTimeIn = -0.5;
    // this.bezValueIn = 0;

    this.cb = null
    this.cbTriggered = false

    // const bezierAnim = null;
    // this._updateBezier = false;

    this.setEasing(CONSTANTS.ANIM.EASING_LINEAR)
    this.set(obj)
  }

  Key.cubicSpline = function (perc, key1, key2) {
    let previousPoint = key1.value,
      previousTangent = key1.bezTangOut,
      nextPoint = key2.value,
      nextTangent = key2.bezTangIn
    let t = perc
    let t2 = t * t
    let t3 = t2 * t

    return (
      (2 * t3 - 3 * t2 + 1) * previousPoint +
      (t3 - 2 * t2 + t) * previousTangent +
      (-2 * t3 + 3 * t2) * nextPoint +
      (t3 - t2) * nextTangent
    )
  }

  Key.easeCubicSpline = function (perc, key2) {
    return Key.cubicSpline(perc, this, key2)
  }

  Key.linear = function (perc, key1, key2) {
    return parseFloat(key1.value) + parseFloat(key2.value - key1.value) * perc
  }

  Key.easeLinear = function (perc, key2) {
    return Key.linear(perc, this, key2)
  }

  Key.easeAbsolute = function (perc, key2) {
    return this.value
  }

  const easeExpoIn = function (t) {
    return (t = 2 ** (10 * (t - 1)))
  }

  Key.easeExpoIn = function (t, key2) {
    t = easeExpoIn(t)
    return Key.linear(t, this, key2)
  }

  const easeExpoOut = function (t) {
    t = -(2 ** (-10 * t)) + 1
    return t
  }

  Key.easeExpoOut = function (t, key2) {
    t = easeExpoOut(t)
    return Key.linear(t, this, key2)
  }

  const easeExpoInOut = function (t) {
    t *= 2
    if (t < 1) {
      t = 0.5 * 2 ** (10 * (t - 1))
    } else {
      t--
      t = 0.5 * (-(2 ** (-10 * t)) + 2)
    }
    return t
  }

  Key.easeExpoInOut = function (t, key2) {
    t = easeExpoInOut(t)
    return Key.linear(t, this, key2)
  }

  Key.easeSinIn = function (t, key2) {
    t = -1 * Math.cos((t * Math.PI) / 2) + 1
    return Key.linear(t, this, key2)
  }

  Key.easeSinOut = function (t, key2) {
    t = Math.sin((t * Math.PI) / 2)
    return Key.linear(t, this, key2)
  }

  Key.easeSinInOut = function (t, key2) {
    t = -0.5 * (Math.cos(Math.PI * t) - 1.0)
    return Key.linear(t, this, key2)
  }

  const easeCubicIn = function (t) {
    t = t * t * t
    return t
  }

  Key.easeCubicIn = function (t, key2) {
    t = easeCubicIn(t)
    return Key.linear(t, this, key2)
  }

  // b 0
  // c 1/2 or 1
  // d always 1
  // easeOutCubic: function (x, t, b, c, d) {
  //     return c*((t=t/d-1)*t*t + 1) + b;

  Key.easeInQuint = function (t, key2) {
    t = t * t * t * t * t
    return Key.linear(t, this, key2)
  }
  Key.easeOutQuint = function (t, key2) {
    t = (t -= 1) * t * t * t * t + 1
    return Key.linear(t, this, key2)
  }
  Key.easeInOutQuint = function (t, key2) {
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t * t
    else t = 0.5 * ((t -= 2) * t * t * t * t + 2)
    return Key.linear(t, this, key2)
  }

  Key.easeInQuart = function (t, key2) {
    t = t * t * t * t
    return Key.linear(t, this, key2)
  }

  Key.easeOutQuart = function (t, key2) {
    // return -c * ((t=t/d-1)*t*t*t - 1) + b;
    t = -1 * ((t -= 1) * t * t * t - 1)
    return Key.linear(t, this, key2)
  }

  Key.easeInOutQuart = function (t, key2) {
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t
    else t = -0.5 * ((t -= 2) * t * t * t - 2)
    return Key.linear(t, this, key2)
  }

  Key.bounce = function (t) {
    if ((t /= 1) < 1 / 2.75) t = 7.5625 * t * t
    else if (t < 2 / 2.75) t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
    else if (t < 2.5 / 2.75) t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
    else t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
    return t
  }

  Key.easeInBounce = function (t, key2) {
    return Key.linear(Key.bounce(t), this, key2)
    // return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d);
  }

  Key.easeOutBounce = function (t, key2) {
    return Key.linear(Key.bounce(t), this, key2)
  }

  Key.easeInElastic = function (t, key2) {
    let s = 1.70158
    let p = 0
    let a = 1

    const b = 0
    const d = 1
    const c = 1

    if (t === 0) t = b
    else if ((t /= d) == 1) t = b + c
    else {
      if (!p) p = d * 0.3
      if (a < Math.abs(c)) {
        a = c
        s = p / 4
      } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
      t = -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
    }

    return Key.linear(t, this, key2)
  }

  Key.easeOutElastic = function (t, key2) {
    let s = 1.70158
    let p = 0
    let a = 1

    const b = 0
    const d = 1
    const c = 1

    if (t === 0) t = b
    else if ((t /= d) == 1) t = b + c
    else {
      if (!p) p = d * 0.3
      if (a < Math.abs(c)) {
        a = c
        s = p / 4
      } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
      t = a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b
    }

    return Key.linear(t, this, key2)
  }

  Key.easeInBack = function (t, key2) {
    const s = 1.70158
    t = t * t * ((s + 1) * t - s)

    return Key.linear(t, this, key2)
  }

  Key.easeOutBack = function (t, key2) {
    const s = 1.70158
    t = (t = t / 1 - 1) * t * ((s + 1) * t + s) + 1

    return Key.linear(t, this, key2)
  }

  Key.easeInOutBack = function (t, key2) {
    let s = 1.70158
    const c = 1 / 2
    if ((t /= 1 / 2) < 1) t = c * (t * t * (((s *= 1.525) + 1) * t - s))
    else t = c * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2)

    return Key.linear(t, this, key2)
  }

  const easeCubicOut = function (t) {
    t--
    t = t * t * t + 1
    return t
  }

  Key.easeCubicOut = function (t, key2) {
    t = easeCubicOut(t)
    return Key.linear(t, this, key2)
  }

  const easeCubicInOut = function (t) {
    t *= 2
    if (t < 1) t = 0.5 * t * t * t
    else {
      t -= 2
      t = 0.5 * (t * t * t + 2)
    }
    return t
  }

  Key.easeCubicInOut = function (t, key2) {
    t = easeCubicInOut(t)
    return Key.linear(t, this, key2)
  }

  Key.easeSmoothStep = function (perc, key2) {
    // var x = Math.max(0, Math.min(1, (perc-0)/(1-0)));
    const x = Math.max(0, Math.min(1, perc))
    perc = x * x * (3 - 2 * x) // smoothstep
    return Key.linear(perc, this, key2)
  }

  Key.easeSmootherStep = function (perc, key2) {
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)))
    perc = x * x * x * (x * (x * 6 - 15) + 10) // smootherstep
    return Key.linear(perc, this, key2)
  }

  Key.prototype.setEasing = function (e) {
    this._easing = e

    if (this._easing == CONSTANTS.ANIM.EASING_LINEAR) this.ease = Key.easeLinear
    else if (this._easing == CONSTANTS.ANIM.EASING_ABSOLUTE) this.ease = Key.easeAbsolute
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHSTEP) this.ease = Key.easeSmoothStep
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHERSTEP) this.ease = Key.easeSmootherStep
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_IN) this.ease = Key.easeCubicIn
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_OUT) this.ease = Key.easeCubicOut
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_INOUT) this.ease = Key.easeCubicInOut
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_IN) this.ease = Key.easeExpoIn
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_OUT) this.ease = Key.easeExpoOut
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_INOUT) this.ease = Key.easeExpoInOut
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_IN) this.ease = Key.easeSinIn
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_OUT) this.ease = Key.easeSinOut
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_INOUT) this.ease = Key.easeSinInOut
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_OUT) this.ease = Key.easeOutBack
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_IN) this.ease = Key.easeInBack
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_INOUT) this.ease = Key.easeInOutBack
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_IN) this.ease = Key.easeInElastic
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_OUT) this.ease = Key.easeOutElastic
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_INOUT) this.ease = Key.easeElasticInOut
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_IN) this.ease = Key.easeInBounce
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_OUT) this.ease = Key.easeOutBounce
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_OUT) this.ease = Key.easeOutQuart
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_IN) this.ease = Key.easeInQuart
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_INOUT) this.ease = Key.easeInOutQuart
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_OUT) this.ease = Key.easeOutQuint
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_IN) this.ease = Key.easeInQuint
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_INOUT) this.ease = Key.easeInOutQuint
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE) {
      // this._updateBezier = true;
      this.ease = Key.easeCubicSpline
    } else {
      this._easing = CONSTANTS.ANIM.EASING_LINEAR
      this.ease = Key.easeLinear
    }
  }

  Key.prototype.trigger = function () {
    this.cb()
    this.cbTriggered = true
  }

  Key.prototype.setValue = function (v) {
    this.value = v
    // this._updateBezier = true;
    if (this.onChange !== null) this.onChange()
  }

  Key.prototype.set = function (obj) {
    if (obj) {
      if (obj.e) this.setEasing(obj.e)
      if (obj.cb) {
        this.cb = obj.cb
        this.cbTriggered = false
      }

      if (obj.b) {
        // this.bezTime = obj.b[0];
        // this.bezValue = obj.b[1];
        // this.bezTimeIn = obj.b[2];
        // this.bezValueIn = obj.b[3];
        // this._updateBezier = true;
      }

      if (obj.hasOwnProperty('t')) this.time = obj.t
      if (obj.hasOwnProperty('time')) this.time = obj.time
      if (obj.hasOwnProperty('v')) this.value = obj.v
      else if (obj.hasOwnProperty('value')) this.value = obj.value
    }
    if (this.onChange !== null) this.onChange()
  }

  Key.prototype.getSerialized = function () {
    const obj = {}
    obj.t = this.time
    obj.v = this.value
    obj.e = this._easing
    // if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE) obj.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn];

    return obj
  }

  Key.prototype.getEasing = function () {
    return this._easing
  } // CONCATENATED MODULE: ./src/core/eventtarget.js

  const EventTarget = function () {
    this._log = new Logger('eventtarget')
    this._eventCallbacks = {}
    this._logName = ''
    this._logEvents = false
    this._listeners = {}

    this.addEventListener = this.on = function (which, cb, idPrefix) {
      const event = {
        id: (idPrefix || '') + CABLES1.simpleId(),
        name: which,
        cb: cb
      }
      if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event]
      else this._eventCallbacks[which].push(event)

      this._listeners[event.id] = event

      return event.id
    }

    this.hasEventListener = function (which, cb) {
      if (which && !cb) {
        // check by id
        if (this._listeners[which]) return true
        else return false
      } else {
        this._log.warn('old eventtarget function haseventlistener!')
        if (which && cb) {
          if (this._eventCallbacks[which]) {
            const idx = this._eventCallbacks[which].indexOf(cb)
            if (idx == -1) return false
            return true
          }
        }
      }
    }

    this.hasListenerForEventName = function (eventName) {
      return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0
    }

    this.removeEventListener = this.off = function (which, cb) {
      if (which === null || which === undefined) return

      if (!cb) {
        // new style, remove by id, not by name/callback
        const event = this._listeners[which]
        if (!event) {
          this._log.log('could not find event...')
          return
        }

        let found = true
        while (found) {
          found = false
          let index = -1
          for (let i = 0; i < this._eventCallbacks[event.name].length; i++) {
            if (this._eventCallbacks[event.name][i].id.startsWith(which)) {
              // this._eventCallbacks[event.name][i].id == which ||
              found = true
              index = i
            }
          }

          if (index !== -1) {
            this._eventCallbacks[event.name].splice(index, 1)
            delete this._listeners[which]
          }
        }

        return
      }

      this._log.info('[eventtaget] ', 'old function signature: removeEventListener! use listener id')
      this._log.log(new Error().stack)

      let index = null
      for (let i = 0; i < this._eventCallbacks[which].length; i++)
        if (this._eventCallbacks[which][i].cb == cb) index = i

      if (index !== null) {
        delete this._eventCallbacks[index]
      } else this._log.warn('removeEventListener not found ' + which)
    }

    this.logEvents = function (enabled, name) {
      this._logEvents = enabled
      this._logName = name
    }

    this.emitEvent = function (which, param1, param2, param3, param4, param5, param6) {
      if (this._logEvents) this._log.log('[event] ', this._logName, which, this._eventCallbacks)

      if (this._eventCallbacks[which]) {
        for (let i = 0; i < this._eventCallbacks[which].length; i++) {
          if (this._eventCallbacks[which][i]) {
            this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6)
          }
        }
      } else {
        if (this._logEvents) this._log.log('[event] has no event callback', which, this._eventCallbacks)
      }
    }
  } // CONCATENATED MODULE: ./src/core/anim.js

  /**
 * Keyframed interpolated animation.
 *
 * Available Easings:
 * <pre>
 * CONSTANTS.ANIM.EASING_LINEAR
 * CONSTANTS.ANIM.EASING_ABSOLUTE
 * CONSTANTS.ANIM.EASING_SMOOTHSTEP
 * CONSTANTS.ANIM.EASING_SMOOTHERSTEP
 * CONSTANTS.ANIM.EASING_CUBICSPLINE

 * CONSTANTS.ANIM.EASING_CUBIC_IN
 * CONSTANTS.ANIM.EASING_CUBIC_OUT
 * CONSTANTS.ANIM.EASING_CUBIC_INOUT

 * CONSTANTS.ANIM.EASING_EXPO_IN
 * CONSTANTS.ANIM.EASING_EXPO_OUT
 * CONSTANTS.ANIM.EASING_EXPO_INOUT

 * CONSTANTS.ANIM.EASING_SIN_IN
 * CONSTANTS.ANIM.EASING_SIN_OUT
 * CONSTANTS.ANIM.EASING_SIN_INOUT

 * CONSTANTS.ANIM.EASING_BACK_IN
 * CONSTANTS.ANIM.EASING_BACK_OUT
 * CONSTANTS.ANIM.EASING_BACK_INOUT

 * CONSTANTS.ANIM.EASING_ELASTIC_IN
 * CONSTANTS.ANIM.EASING_ELASTIC_OUT

 * CONSTANTS.ANIM.EASING_BOUNCE_IN
 * CONSTANTS.ANIM.EASING_BOUNCE_OUT

 * CONSTANTS.ANIM.EASING_QUART_IN
 * CONSTANTS.ANIM.EASING_QUART_OUT
 * CONSTANTS.ANIM.EASING_QUART_INOUT

 * CONSTANTS.ANIM.EASING_QUINT_IN
 * CONSTANTS.ANIM.EASING_QUINT_OUT
 * CONSTANTS.ANIM.EASING_QUINT_INOUT
 * </pre>
 * @hideconstructor
 * @external CABLES1
 * @namespace Anim
 * @class
 * @example
 * var anim=new CABLES1.Anim();
 * anim.setValue(0,0);  // set value 0 at 0 seconds
 * anim.setValue(10,1); // set value 1 at 10 seconds
 * anim.getValue(5);    // get value at 5 seconds - this returns 0.5
 */

  const Anim = function (cfg) {
    EventTarget.apply(this)

    cfg = cfg || {}
    this.keys = []
    this.onChange = null
    this.stayInTimeline = false
    this.loop = false
    this._log = new Logger('Anim')
    this._lastKeyIndex = 0
    this._cachedIndex = 0
    this.name = cfg.name || null

    /**
     * @member defaultEasing
     * @memberof Anim
     * @instance
     * @type {Number}
     */
    this.defaultEasing = cfg.defaultEasing || CONSTANTS.ANIM.EASING_LINEAR
    this.onLooped = null

    this._timesLooped = 0
    this._needsSort = false
  }

  Anim.prototype.forceChangeCallback = function () {
    if (this.onChange !== null) this.onChange()
    this.emitEvent('onChange', this)
  }

  Anim.prototype.getLoop = function () {
    return this.loop
  }

  Anim.prototype.setLoop = function (target) {
    this.loop = target
    this.emitEvent('onChange', this)
  }

  /**
   * returns true if animation has ended at @time
   * checks if last key time is < time
   * @param {Number} time
   * @returns {Boolean}
   * @memberof Anim
   * @instance
   * @function
   */
  Anim.prototype.hasEnded = function (time) {
    if (this.keys.length === 0) return true
    if (this.keys[this._lastKeyIndex].time <= time) return true
    return false
  }

  Anim.prototype.isRising = function (time) {
    if (this.hasEnded(time)) return false
    const ki = this.getKeyIndex(time)
    if (this.keys[ki].value < this.keys[ki + 1].value) return true
    return false
  }

  /**
   * remove all keys from animation before time
   * @param {Number} time
   * @memberof Anim
   * @instance
   * @function
   */
  Anim.prototype.clearBefore = function (time) {
    const v = this.getValue(time)
    const ki = this.getKeyIndex(time)

    this.setValue(time, v)

    if (ki > 1) this.keys.splice(0, ki)
    this._updateLastIndex()
  }
  /**
   * remove all keys from animation
   * @param {Number} [time=0] set a new key at time with the old value at time
   * @memberof Anim
   * @instance
   * @function
   */
  Anim.prototype.clear = function (time) {
    let v = 0
    if (time) v = this.getValue(time)
    this.keys.length = 0
    this._updateLastIndex()
    if (time) this.setValue(time, v)
    if (this.onChange !== null) this.onChange()
    this.emitEvent('onChange', this)
  }

  Anim.prototype.sortKeys = function () {
    this.keys.sort((a, b) => {
      return parseFloat(a.time) - parseFloat(b.time)
    })
    this._updateLastIndex()
    this._needsSort = false
    if (this.keys.length % 1000 == 0) console.log(this.name, this.keys.length)
  }

  Anim.prototype.getLength = function () {
    if (this.keys.length === 0) return 0
    return this.keys[this.keys.length - 1].time
  }

  Anim.prototype.getKeyIndex = function (time) {
    let index = 0
    let start = 0
    if (this._cachedIndex && this.keys.length > this._cachedIndex && time >= this.keys[this._cachedIndex].time)
      start = this._cachedIndex
    for (let i = start; i < this.keys.length; i++) {
      if (time >= this.keys[i].time) index = i
      if (this.keys[i].time > time) {
        if (time != 0) this._cachedIndex = index
        return index
      }
    }

    return index
  }

  /**
   * set value at time
   * @function setValue
   * @memberof Anim
   * @instance
   * @param {Number} time
   * @param {Number} value
   * @param {Function} [callback] callback
   */
  Anim.prototype.setValue = function (time, value, cb) {
    let found = null

    if (this.keys.length == 0 || time <= this.keys[this.keys.length - 1].time)
      for (let i = 0; i < this.keys.length; i++)
        if (this.keys[i].time == time) {
          found = this.keys[i]
          this.keys[i].setValue(value)
          this.keys[i].cb = cb
          break
        }

    if (!found) {
      found = new Key({
        time: time,
        value: value,
        e: this.defaultEasing,
        cb: cb
      })
      this.keys.push(found)

      // if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
      this._updateLastIndex()
    }

    if (this.onChange) this.onChange()
    this.emitEvent('onChange', this)
    this._needsSort = true
    return found
  }

  Anim.prototype.setKeyEasing = function (index, e) {
    if (this.keys[index]) {
      this.keys[index].setEasing(e)
      this.emitEvent('onChange', this)
    }
  }

  Anim.prototype.getSerialized = function () {
    const obj = {}
    obj.keys = []
    obj.loop = this.loop

    for (let i = 0; i < this.keys.length; i++) obj.keys.push(this.keys[i].getSerialized())

    return obj
  }

  Anim.prototype.getKey = function (time) {
    const index = this.getKeyIndex(time)
    return this.keys[index]
  }

  Anim.prototype.getNextKey = function (time) {
    let index = this.getKeyIndex(time) + 1
    if (index >= this.keys.length) index = this.keys.length - 1

    return this.keys[index]
  }

  Anim.prototype.isFinished = function (time) {
    if (this.keys.length <= 0) return true
    return time > this.keys[this.keys.length - 1].time
  }

  Anim.prototype.isStarted = function (time) {
    if (this.keys.length <= 0) return false
    return time >= this.keys[0].time
  }

  /**
   * get value at time
   * @function getValue
   * @memberof Anim
   * @instance
   * @param {Number} [time] time
   * @returns {Number} interpolated value at time
   */
  Anim.prototype.getValue = function (time) {
    if (this.keys.length === 0) {
      return 0
    }
    if (this._needsSort) this.sortKeys()

    if (!this.loop && time > this.keys[this._lastKeyIndex].time) {
      if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered)
        this.keys[this._lastKeyIndex].trigger()

      return this.keys[this._lastKeyIndex].value
    }

    if (time < this.keys[0].time) {
      // if (this.name)console.log("A");

      return this.keys[0].value
    }

    if (this.loop && time > this.keys[this._lastKeyIndex].time) {
      const currentLoop = time / this.keys[this._lastKeyIndex].time
      if (currentLoop > this._timesLooped) {
        this._timesLooped++
        if (this.onLooped) this.onLooped()
      }
      time = (time - this.keys[0].time) % (this.keys[this._lastKeyIndex].time - this.keys[0].time)
      time += this.keys[0].time
    }

    const index = this.getKeyIndex(time)
    if (index >= this._lastKeyIndex) {
      if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered)
        this.keys[this._lastKeyIndex].trigger()

      return this.keys[this._lastKeyIndex].value
    }

    const index2 = index + 1
    const key1 = this.keys[index]
    const key2 = this.keys[index2]

    if (key1.cb && !key1.cbTriggered) key1.trigger()

    if (!key2) return -1

    const perc = (time - key1.time) / (key2.time - key1.time)

    if (!key1.ease) this.log._warn('has no ease', key1, key2)

    return key1.ease(perc, key2)
  }

  Anim.prototype._updateLastIndex = function () {
    this._lastKeyIndex = this.keys.length - 1
  }

  Anim.prototype.addKey = function (k) {
    if (k.time === undefined) {
      this.log.warn('key time undefined, ignoring!')
    } else {
      this.keys.push(k)
      if (this.onChange !== null) this.onChange()
      this.emitEvent('onChange', this)
    }
    this._updateLastIndex()
  }

  Anim.prototype.easingFromString = function (str) {
    if (str == 'linear') return CONSTANTS.ANIM.EASING_LINEAR
    if (str == 'absolute') return CONSTANTS.ANIM.EASING_ABSOLUTE
    if (str == 'smoothstep') return CONSTANTS.ANIM.EASING_SMOOTHSTEP
    if (str == 'smootherstep') return CONSTANTS.ANIM.EASING_SMOOTHERSTEP

    if (str == 'Cubic In') return CONSTANTS.ANIM.EASING_CUBIC_IN
    if (str == 'Cubic Out') return CONSTANTS.ANIM.EASING_CUBIC_OUT
    if (str == 'Cubic In Out') return CONSTANTS.ANIM.EASING_CUBIC_INOUT

    if (str == 'Expo In') return CONSTANTS.ANIM.EASING_EXPO_IN
    if (str == 'Expo Out') return CONSTANTS.ANIM.EASING_EXPO_OUT
    if (str == 'Expo In Out') return CONSTANTS.ANIM.EASING_EXPO_INOUT

    if (str == 'Sin In') return CONSTANTS.ANIM.EASING_SIN_IN
    if (str == 'Sin Out') return CONSTANTS.ANIM.EASING_SIN_OUT
    if (str == 'Sin In Out') return CONSTANTS.ANIM.EASING_SIN_INOUT

    if (str == 'Back In') return CONSTANTS.ANIM.EASING_BACK_IN
    if (str == 'Back Out') return CONSTANTS.ANIM.EASING_BACK_OUT
    if (str == 'Back In Out') return CONSTANTS.ANIM.EASING_BACK_INOUT

    if (str == 'Elastic In') return CONSTANTS.ANIM.EASING_ELASTIC_IN
    if (str == 'Elastic Out') return CONSTANTS.ANIM.EASING_ELASTIC_OUT

    if (str == 'Bounce In') return CONSTANTS.ANIM.EASING_BOUNCE_IN
    if (str == 'Bounce Out') return CONSTANTS.ANIM.EASING_BOUNCE_OUT

    if (str == 'Quart Out') return CONSTANTS.ANIM.EASING_QUART_OUT
    if (str == 'Quart In') return CONSTANTS.ANIM.EASING_QUART_IN
    if (str == 'Quart In Out') return CONSTANTS.ANIM.EASING_QUART_INOUT

    if (str == 'Quint Out') return CONSTANTS.ANIM.EASING_QUINT_OUT
    if (str == 'Quint In') return CONSTANTS.ANIM.EASING_QUINT_IN
    if (str == 'Quint In Out') return CONSTANTS.ANIM.EASING_QUINT_INOUT
  }

  Anim.prototype.createPort = function (op, title, cb) {
    const port = op.inDropDown(title, CONSTANTS.ANIM.EASINGS)

    // const port = op.addInPort(
    //     new Port(op, title, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
    //         "display": "dropdown",
    //         "values": CONSTANTS.ANIM.EASINGS,
    //     }),
    // );

    port.set('linear')
    port.defaultValue = 'linear'

    port.onChange = function () {
      this.defaultEasing = this.easingFromString(port.get())
      this.emitEvent('onChangeDefaultEasing', this)

      if (cb) cb()
    }.bind(this)

    return port
  }

  // ------------------------------

  Anim.slerpQuaternion = function (time, q, animx, animy, animz, animw) {
    if (!Anim.slerpQuaternion.q1) {
      Anim.slerpQuaternion.q1 = quat.create()
      Anim.slerpQuaternion.q2 = quat.create()
    }

    const i1 = animx.getKeyIndex(time)
    let i2 = i1 + 1
    if (i2 >= animx.keys.length) i2 = animx.keys.length - 1

    if (i1 == i2) {
      quat.set(q, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value)
    } else {
      const key1Time = animx.keys[i1].time
      const key2Time = animx.keys[i2].time
      const perc = (time - key1Time) / (key2Time - key1Time)

      quat.set(
        Anim.slerpQuaternion.q1,
        animx.keys[i1].value,
        animy.keys[i1].value,
        animz.keys[i1].value,
        animw.keys[i1].value
      )

      quat.set(
        Anim.slerpQuaternion.q2,
        animx.keys[i2].value,
        animy.keys[i2].value,
        animz.keys[i2].value,
        animw.keys[i2].value
      )

      quat.slerp(q, Anim.slerpQuaternion.q1, Anim.slerpQuaternion.q2, perc)
    }
    return q
  }

  const ANIM = { Key: Key } // CONCATENATED MODULE: ./src/core/core_link.js

  /**
   * @external CABLES1
   * @namespace Link
   * @param {Object} patch The patch object
   * @description a link is a connection between two ops/ports -> one input and one output port
   * @hideconstructor
   * @class
   */
  const Link = function (scene) {
    EventTarget.apply(this)

    this.id = CABLES1.simpleId()
    this.portIn = null
    this.portOut = null
    this.scene = scene // todo: make private and rename to patch
    this.activityCounter = 0
    this.ignoreInSerialize = false
  }

  Link.prototype.setValue = function (v) {
    if (v === undefined) this._setValue()
    else this.portIn.set(v)
  }

  Link.prototype.activity = function () {
    this.activityCounter++
    // if(Date.now()-this.lastTime>100)
    // {
    //     // this.lastTime=Date.now();
    //     // this.changesPerSecond=this.changesCounter*10;
    //     this.changesCounter=0;
    // }
  }

  Link.prototype._setValue = function () {
    if (!this.portOut) {
      this.remove()
      return
    }
    const v = this.portOut.get()

    if (v == v) {
      // NaN is the only JavaScript value that is treated as unequal to itself
      if (this.portIn.type != CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) this.activity()

      if (this.portIn.get() !== v) {
        this.portIn.set(v)
      } else {
        if (this.portIn.changeAlways) this.portIn.set(v)
        if (this.portOut.forceRefChange) this.portIn.forceChange()
      }
    }
  }

  /**
   * @function getOtherPort
   * @memberof Link
   * @instance
   * @param {Port} port
   * @description returns the port of the link, which is not port
   */
  Link.prototype.getOtherPort = function (p) {
    if (p == this.portIn) return this.portOut
    return this.portIn
  }

  /**
   * @function remove
   * @memberof Link
   * @instance
   * @description unlink/remove this link from all ports
   */
  Link.prototype.remove = function () {
    if (this.portIn) this.portIn.removeLink(this)
    if (this.portOut) this.portOut.removeLink(this)
    if (this.scene) {
      this.scene.emitEvent('onUnLink', this.portIn, this.portOut, this)
    }

    if (
      this.portIn &&
      (this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT || this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY)
    ) {
      this.portIn.set(null)
      if (this.portIn.links.length > 0) this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())
    }

    if (this.portIn) this.portIn.op._checkLinksNeededToWork()
    if (this.portOut) this.portOut.op._checkLinksNeededToWork()

    this.portIn = null
    this.portOut = null
    this.scene = null
  }

  /**
   * @function link
   * @memberof Link
   * @instance
   * @description link those two ports
   * @param {Port} port1
   * @param {Port} port2
   */
  Link.prototype.link = function (p1, p2) {
    if (!Link.canLink(p1, p2)) {
      console.warn('[core_link] cannot link ports!', p1, p2)
      return false
    }

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN) {
      this.portIn = p1
      this.portOut = p2
    } else {
      this.portIn = p2
      this.portOut = p1
    }

    p1.addLink(this)
    p2.addLink(this)

    this.setValue()

    if (p1.onLink) p1.onLink(this)
    if (p2.onLink) p2.onLink(this)

    p1.op._checkLinksNeededToWork()
    p2.op._checkLinksNeededToWork()
  }

  Link.prototype.getSerialized = function () {
    const obj = {}

    obj.portIn = this.portIn.getName()
    obj.portOut = this.portOut.getName()
    obj.objIn = this.portIn.op.id
    obj.objOut = this.portOut.op.id

    return obj
  }

  // --------------------------------------------

  /**
   * @function canLinkText
   * @memberof Link
   * @instance
   * @description return a text message with human readable reason if ports can not be linked, or can be
   * @param {Port} port1
   * @param {Port} port2
   */
  Link.canLinkText = function (p1, p2) {
    if (p1.direction == p2.direction) {
      let txt = '(out)'
      if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN) txt = '(in)'
      return 'can not link: same direction ' + txt
    }
    if (p1.op == p2.op) return 'can not link: same op'
    if (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) {
      if (p1.type != p2.type) return 'can not link: different type'
    }

    if (CABLES1.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) {
      if (p1.uiAttribs.objType && p2.uiAttribs.objType)
        if (p1.uiAttribs.objType != p2.uiAttribs.objType) return 'incompatible objects'
    }

    if (!p1) return 'can not link: port 1 invalid'
    if (!p2) return 'can not link: port 2 invalid'

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return 'can not link: is animated'
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return 'can not link: is animated'

    // if(p1.direction==CABLES1.CONSTANTS.PORT.PORT_DIR_IN && p1.links.length>0)return 'input port already busy';
    // if(p2.direction==CABLES1.CONSTANTS.PORT.PORT_DIR_IN && p2.links.length>0)return 'input port already busy';
    if (p1.isLinkedTo(p2)) return 'ports already linked'

    if ((p1.canLink && !p1.canLink(p2)) || (p2.canLink && !p2.canLink(p1))) return 'Incompatible'

    return 'can link'
  }

  /**
   * @function canLink
   * @memberof Link
   * @instance
   * @description return true if ports can be linked
   * @param {Port} port1
   * @param {Port} port2
   * @returns {Boolean}
   */
  Link.canLink = function (p1, p2) {
    if (!p1) return false
    if (!p2) return false
    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return false
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return false

    if (p1.isHidden() || p2.isHidden()) return false

    if (p1.isLinkedTo(p2)) return false

    if (p1.direction == p2.direction) return false

    if (CABLES1.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) {
      if (p1.uiAttribs.objType && p2.uiAttribs.objType) {
        if (p1.uiAttribs.objType.indexOf('sg_') == 0 && p2.uiAttribs.objType.indexOf('sg_') == 0) return true
        if (p1.uiAttribs.objType != p2.uiAttribs.objType) return false
      }
    }

    if (
      p1.type != p2.type &&
      p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC &&
      p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC
    )
      return false
    if (p1.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC || p2.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true

    if (p1.op == p2.op) return false

    if (p1.canLink && !p1.canLink(p2)) return false
    if (p2.canLink && !p2.canLink(p1)) return false

    return true
  } // CONCATENATED MODULE: ./src/core/core_port.js

  /**
   * data is coming into and out of ops through input and output ports
   * @external CABLES1
   * @namespace Port
   * @class
   * @hideconstructor
   * @example
   * const myPort=op.inString("String Port");
   */
  const Port = function (___op, name, type, uiAttribs) {
    EventTarget.apply(this)

    this.data = {} // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this._log = new Logger('core_port')
    /**
     * @type {Number}
     * @name direction
     * @instance
     * @memberof Port
     * @description direction of port (input(0) or output(1))
     */
    this.direction = CONSTANTS.PORT.PORT_DIR_IN
    this.id = String(CABLES1.simpleId())
    this._op = ___op

    /**
     * @type {Array<Link>}
     * @name links
     * @instance
     * @memberof Port
     * @description links of port
     */
    this.links = []
    this.value = 0.0
    this.name = name
    this.type = type || CONSTANTS.OP.OP_PORT_TYPE_VALUE
    this.uiAttribs = uiAttribs || {}
    this.anim = null
    this._oldAnimVal = -5711
    this.defaultValue = null

    this._uiActiveState = true
    this.ignoreValueSerialize = false
    this.onLinkChanged = null
    this.crashed = false

    this._valueBeforeLink = null
    this._lastAnimFrame = -1
    this._animated = false

    this.onValueChanged = null
    this.onTriggered = null
    this.onUiActiveStateChange = null
    this.changeAlways = false
    this.forceRefChange = false

    this._useVariableName = null

    this.activityCounter = 0
    this.apf = 0
    this.activityCounterStartFrame = 0

    this._tempLastUiValue = null

    Object.defineProperty(this, 'title', {
      get() {
        return this.uiAttribs.title || this.name
      }
    })

    Object.defineProperty(this, 'parent', {
      get() {
        this._log.stack('use port.op, not .parent')
        return this._op
      }
    })

    Object.defineProperty(this, 'op', {
      get() {
        return this._op
      }
    })

    Object.defineProperty(this, 'val', {
      get() {
        this._log.warn('val getter deprecated!', this)
        this._log.stack('val getter deprecated')
        return this.get()
      },
      set(v) {
        this._log.warn('val setter deprecated!', this)
        this._log.stack('val setter deprecated')
        this.setValue(v)
      }
    })
  }

  /**
 * copy over a uiattrib from an external connected port to another port
 * @function copyLinkedUiAttrib
 * @memberof Port
 * @param {which} attrib name
 * @param {Port} source port
 * @instance
 * @example

inArray.onLinkChanged=()=>
{
    if(inArray) inArray.copyLinkedUiAttrib("stride", outArray);
};

 */
  Port.prototype.copyLinkedUiAttrib = function (which, port) {
    if (!CABLES1.UI) return
    if (!this.isLinked()) return

    const attr = {}
    attr[which] = this.links[0].getOtherPort(this).getUiAttrib(which)
    port.setUiAttribs(attr)
  }

  // TODO make extend class for ports, like for ops only for ui
  Port.prototype.getValueForDisplay = function () {
    let str = this.value

    if (typeof this.value === 'string' || this.value instanceof String) {
      if (str.length > 1000) {
        str = str.substring(0, 999)
        str += '...'
      }
      if (this.uiAttribs && this.uiAttribs.display == 'boolnum') {
        str += ' - '

        if (!this.value) str += 'false'
        else str += 'true'
      }

      str = str.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
        return '&#' + i.charCodeAt(0) + ';'
      })

      if (str.length > 100) str = str.substring(0, 100)
    } else {
      str = this.value
    }
    return str
  }

  /**
   * change listener for input value ports, overwrite to react to changes
   * @function onChange
   * @memberof Port
   * @instance
   * @example
   * const myPort=op.inString("MyPort");
   * myPort.onChange=function()
   * {
   *   console.log("was changed to: ",myPort.get());
   * }
   *
   */
  Port.prototype.onAnimToggle = function () {}
  Port.prototype._onAnimToggle = function () {
    this.onAnimToggle()
  }

  /**
   * @function remove
   * @memberof Port
   * @instance
   * @description remove port
   */
  Port.prototype.remove = function () {
    // this.setUiAttribs({hidePort:true});
    this.removeLinks()
    this._op.removePort(this)
  }

  /**
   * set ui attributes
   * @function setUiAttribs
   * @memberof Port
   * @instance
   * @param {Object} newAttribs
   * <pre>
   * title - overwrite title of port (by default this is portname)
   * greyout - port paramater will appear greyed out, can not be
   * hidePort - port will be hidden from op
   * hideParam - port params will be hidden from parameter panel
   * showIndex - only for dropdowns - show value index (e.g. `0 - normal` )
   * editorSyntax - set syntax highlighting theme for editor port
   * ignoreObjTypeErrors - do not auto check object types
   * </pre>
   * @example
   * myPort.setUiAttribs({greyout:true});
   */
  Port.prototype.setUiAttribs = function (newAttribs) {
    let changed = false
    if (!this.uiAttribs) this.uiAttribs = {}

    for (const p in newAttribs) {
      if (newAttribs[p] === undefined) {
        // delete newAttribs[p];
        delete this.uiAttribs[p]
        continue
      }
      if (this.uiAttribs[p] != newAttribs[p]) changed = true
      this.uiAttribs[p] = newAttribs[p]

      if (p == 'group' && this.indexPort) this.indexPort.setUiAttribs({ group: newAttribs[p] })
    }

    if (newAttribs.hasOwnProperty('expose')) this._op.patch.emitEvent('subpatchExpose', this._op.uiAttribs.subPatch)

    if (changed) this.emitEvent('onUiAttrChange', newAttribs, this)
  }

  /**
   * get ui attributes
   * @function getUiAttribs
   * @memberof Port
   * @example
   * myPort.getUiAttribs();
   */
  Port.prototype.getUiAttribs = function () {
    return this.uiAttribs
  }

  /**
   * get ui attribute
   * @function getUiAttrib
   * @memberof Port
   * @instance
   * @param {String} attribName
   * <pre>
   * attribName - return value of the ui-attribute, or null on unknown attribute
   * </pre>
   * @example
   * myPort.setUiAttribs("values");
   */
  Port.prototype.getUiAttrib = function (attribName) {
    if (!this.uiAttribs || !this.uiAttribs.hasOwnProperty(attribName)) {
      return null
    }
    return this.uiAttribs[attribName]
  }

  /**
   * @function get
   * @memberof Port
   * @instance
   * @description get value of port
   */
  Port.prototype.get = function () {
    if (this._animated && this._lastAnimFrame != this._op.patch.getFrameNum()) {
      this._lastAnimFrame = this._op.patch.getFrameNum()
      this.value = this.anim.getValue(this._op.patch.timer.getTime())

      this._oldAnimVal = this.value
      this.forceChange()
    }

    return this.value
  }

  Port.prototype.setRef = function (v) {
    this.forceRefChange = true
    this.set(v)
  }

  /**
   * @function setValue
   * @memberof Port
   * @instance
   * @description set value of port / will send value to all linked ports (only for output ports)
   */
  Port.prototype.set = Port.prototype.setValue = function (v) {
    if (v === undefined) v = null

    if (this._op.enabled && !this.crashed) {
      if (
        v !== this.value ||
        this.changeAlways ||
        this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE ||
        this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY
      ) {
        if (this._animated) {
          this.anim.setValue(this._op.patch.timer.getTime(), v)
        } else {
          try {
            this.value = v
            this.forceChange()
          } catch (ex) {
            this.crashed = true
            this.op.crashed = true

            console.log('crash', this.op.objName)

            this.setValue = function (_v) {}
            this.onTriggered = function () {}

            this._log.error('onvaluechanged exception cought', ex)
            this._log.error(ex.stack)
            this._log.warn('exception in: ' + this._op.name)

            if (this._op.patch.isEditorMode()) gui.showOpCrash(this._op)

            this._op.patch.emitEvent('exception', ex, this._op)
            if (this._op.onError) this._op.onError(ex)
          }

          if (
            this._op &&
            this._op.patch &&
            this._op.patch.isEditorMode() &&
            this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE
          )
            gui.texturePreview().updateTexturePort(this)
        }

        if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT)
          for (let i = 0; i < this.links.length; ++i) this.links[i].setValue()
      }
    }
  }

  Port.prototype.updateAnim = function () {
    if (this._animated) {
      this.value = this.get()

      if (this._oldAnimVal != this.value || this.changeAlways) {
        this._oldAnimVal = this.value
        this.forceChange()
      }
      this._oldAnimVal = this.value
    }
  }

  Port.prototype.forceChange = function () {
    if (this.onValueChanged || this.onChange) {
      // very temporary: deprecated warning!!!!!!!!!
      // if(params.length>0) this._log.warn('TOM: port has onchange params!',this._op.objName,this.name);
    }
    this._activity()
    this.emitEvent('change', this.value, this)

    if (this.onChange) this.onChange(this, this.value)
    else if (this.onValueChanged) this.onValueChanged(this, this.value) // deprecated
  }

  /**
   * @function getTypeString
   * @memberof Port
   * @instance
   * @description get port type as string, e.g. "Function","Value"...
   * @return {String} type
   */
  Port.prototype.getTypeString = function () {
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return 'Number'
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return 'Trigger'
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return 'Object'
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return 'Dynamic'
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return 'Array'
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return 'String'
    return 'Unknown'
  }

  Port.prototype.deSerializeSettings = function (objPort) {
    if (!objPort) return
    if (objPort.animated) this.setAnimated(objPort.animated)
    if (objPort.useVariable) this.setVariableName(objPort.useVariable)
    if (objPort.title) this.setUiAttribs({ title: objPort.title })
    if (objPort.expose) this.setUiAttribs({ expose: true })
    if (objPort.order) this.setUiAttribs({ order: objPort.order })
    if (objPort.multiPortNum) this.setUiAttribs({ multiPortNum: objPort.multiPortNum })

    if (objPort.anim) {
      if (!this.anim) this.anim = new Anim({ name: 'port ' + this.name })
      this._op._hasAnimPort = true
      this.anim.addEventListener('onChange', () => {
        this._op.patch.emitEvent('portAnimUpdated', this._op, this, this.anim)
      })
      if (objPort.anim.loop) this.anim.loop = objPort.anim.loop
      for (const ani in objPort.anim.keys) {
        this.anim.keys.push(new ANIM.Key(objPort.anim.keys[ani]))
      }
      this.anim.sortKeys()
    }
  }

  Port.prototype.setInitialValue = function (v) {
    if (this.op.preservedPortLinks[this.name]) {
      for (let i = 0; i < this.op.preservedPortLinks[this.name].length; i++) {
        const lobj = this.op.preservedPortLinks[this.name][i]
        this.op.patch._addLink(lobj.objIn, lobj.objOut, lobj.portIn, lobj.portOut)
      }
    }

    if (
      this.op.preservedPortValues &&
      this.op.preservedPortValues.hasOwnProperty(this.name) &&
      this.op.preservedPortValues[this.name] !== undefined
    ) {
      this.set(this.op.preservedPortValues[this.name])
    } else if (v !== undefined) this.set(v)
    if (v !== undefined) this.defaultValue = v
  }

  Port.prototype.getSerialized = function () {
    let obj = { name: this.getName() }

    if (!this.ignoreValueSerialize && this.links.length === 0) {
      if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) {
      } else obj.value = this.value
    }
    if (this._useVariableName) obj.useVariable = this._useVariableName
    if (this._animated) obj.animated = true
    if (this.anim) obj.anim = this.anim.getSerialized()
    if (this.uiAttribs.multiPortNum) obj.multiPortNum = this.uiAttribs.multiPortNum
    if (this.uiAttribs.display == 'file') obj.display = this.uiAttribs.display
    if (this.uiAttribs.expose) {
      obj.expose = true
      if (this.uiAttribs.hasOwnProperty('order')) obj.order = this.uiAttribs.order
    }
    if (this.uiAttribs.title) obj.title = this.uiAttribs.title
    if ((this.preserveLinks || this.direction == CONSTANTS.PORT.PORT_DIR_OUT) && this.links.length > 0) {
      obj.links = []
      for (const i in this.links) {
        if (!this.links[i].ignoreInSerialize && this.links[i].portIn && this.links[i].portOut)
          obj.links.push(this.links[i].getSerialized())
      }
    }

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN && this.links.length > 0) {
      for (const i in this.links) {
        if (!this.links[i].portIn || !this.links[i].portOut) continue

        const otherp = this.links[i].getOtherPort(this)
        // check if functions exist, are defined in core_extend_ops code in ui
        if (otherp.op.isInBlueprint2 && this.op.isInBlueprint2) {
          if (otherp.op.isInBlueprint2() && !this.op.isInBlueprint2()) {
            obj.links = obj.links || []
            obj.links.push(this.links[i].getSerialized())
          }
        }
      }
    }

    if (obj.links && obj.links.length == 0) delete obj.links
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) delete obj.value
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION && this.links.length == 0) obj = null
    if (obj && Object.keys(obj).length == 1 && obj.name) obj = null // obj is null if there is no real information other than name
    cleanJson(obj)

    return obj
  }

  Port.prototype.shouldLink = function () {
    return true
  }

  /**
   * @function removeLinks
   * @memberof Port
   * @instance
   * @description remove all links from port
   */
  Port.prototype.removeLinks = function () {
    let count = 0
    while (this.links.length > 0) {
      count++
      if (count > 5000) {
        this._log.warn('could not delete links... / infinite loop')
        this.links.length = 0
        break
      }
      this.links[0].remove()
    }
  }

  /**
   * @function removeLink
   * @memberof Port
   * @instance
   * @description remove all link from port
   * @param {CABLES1.Link} link
   */
  Port.prototype.removeLink = function (link) {
    for (const i in this.links) if (this.links[i] == link) this.links.splice(i, 1)

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN) {
      if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) this.setValue(this._valueBeforeLink || 0)
      else this.setValue(this._valueBeforeLink || null)
    }

    if (CABLES1.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings()

    if (this.onLinkChanged) this.onLinkChanged()
    this.emitEvent('onLinkChanged')
    this._op.emitEvent('onLinkChanged')
  }

  /**
   * @function getName
   * @memberof Port
   * @instance
   * @description return port name
   */
  Port.prototype.getName = function () {
    return this.name
  }

  /**
   * @function getTitle
   * @memberof Port
   * @instance
   * @description return port name or title
   */
  Port.prototype.getTitle = function () {
    if (this.uiAttribs.title) return this.uiAttribs.title
    return this.name
  }

  Port.prototype.addLink = function (l) {
    this._valueBeforeLink = this.value
    this.links.push(l)
    if (CABLES1.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings()

    if (this.onLinkChanged) this.onLinkChanged()
    this.emitEvent('onLinkChanged')
    this._op.emitEvent('onLinkChanged')
  }

  /**
   * @function getLinkTo
   * @memberof Port
   * @instance
   * @param {Port} otherPort
   * @description return link, which is linked to otherPort
   */
  Port.prototype.getLinkTo = function (p2) {
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return this.links[i]
  }

  /**
   * @function removeLinkTo
   * @memberof Port
   * @instance
   * @param {Port} otherPort
   * @description removes link, which is linked to otherPort
   */
  Port.prototype.removeLinkTo = function (p2) {
    for (const i in this.links) {
      if (this.links[i].portIn == p2 || this.links[i].portOut == p2) {
        this.links[i].remove()
        if (CABLES1.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings()

        if (this.onLinkChanged) this.onLinkChanged()
        this.emitEvent('onLinkChanged')
        return
      }
    }
  }

  /**
   * @function isLinkedTo
   * @memberof Port
   * @instance
   * @param {Port} otherPort
   * @description returns true if port is linked to otherPort
   */
  Port.prototype.isLinkedTo = function (p2) {
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return true

    return false
  }

  Port.prototype._activity = function () {
    this.activityCounter++
  }

  /**
   * @function trigger
   * @memberof Port
   * @instance
   * @description trigger the linked port (usually invoked on an output function port)
   */
  Port.prototype.trigger = function () {
    const linksLength = this.links.length

    this._activity()
    if (linksLength === 0) return
    if (!this._op.enabled) return

    let portTriggered = null
    try {
      for (let i = 0; i < linksLength; ++i) {
        if (this.links[i].portIn) {
          portTriggered = this.links[i].portIn

          portTriggered.op.patch.pushTriggerStack(portTriggered)
          portTriggered._onTriggered()

          portTriggered.op.patch.popTriggerStack()
        }
        if (this.links[i]) this.links[i].activity()
      }
    } catch (ex) {
      portTriggered.op.enabled = false

      if (this._op.patch.isEditorMode()) {
        this._op.patch.emitEvent('exception', ex, portTriggered.op)
        this._op.patch.emitEvent('opcrash', portTriggered)
        console.log('crash', portTriggered.op.objName)

        if (portTriggered.op.onError) portTriggered.op.onError(ex)
      }
      this._log.warn('exception!')
      this._log.error('ontriggered exception caught', ex)
      this._log.error(ex.stack)
      this._log.warn('exception in: ' + portTriggered.op.name)
    }
  }

  Port.prototype.call = function () {
    this._log.warn('call deprecated - use trigger() ')
    this.trigger()
  }

  Port.prototype.execute = function () {
    this._log.warn('### execute port: ' + this.getName(), this.goals.length)
  }

  Port.prototype.setVariableName = function (n) {
    this._useVariableName = n

    this._op.patch.on('variableRename', (oldname, newname) => {
      if (oldname != this._useVariableName) return
      this._useVariableName = newname
    })
  }

  Port.prototype.getVariableName = function () {
    return this._useVariableName
  }

  Port.prototype.setVariable = function (v) {
    this.setAnimated(false)
    const attr = { useVariable: false }

    if (this._variableIn && this._varChangeListenerId) {
      this._variableIn.off(this._varChangeListenerId)
      this._variableIn = null
    }

    if (v) {
      this._variableIn = this._op.patch.getVar(v)

      if (!this._variableIn) {
        this._log.warn('PORT VAR NOT FOUND!!!', v)
      } else {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) {
          this._varChangeListenerId = this._variableIn.on('change', () => {
            this.set(null)
            this.set(this._variableIn.getValue())
          })
        } else {
          this._varChangeListenerId = this._variableIn.on('change', this.set.bind(this))
        }
        this.set(this._variableIn.getValue())
      }
      this._useVariableName = v
      attr.useVariable = true
      attr.variableName = this._useVariableName
    } else {
      attr.variableName = this._useVariableName = null
      attr.useVariable = false
    }

    this.setUiAttribs(attr)
    this._op.patch.emitEvent('portSetVariable', this._op, this, v)
  }

  Port.prototype._handleNoTriggerOpAnimUpdates = function (a) {
    let hasTriggerPort = false
    for (let i = 0; i < this._op.portsIn.length; i++) {
      if (this._op.portsIn.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) {
        hasTriggerPort = true
        break
      }
    }

    if (!hasTriggerPort) {
      if (a)
        this._notriggerAnimUpdate = this._op.patch.on('onRenderFrame', () => {
          this.updateAnim()
        })
      else this._op.patch.removeEventListener(this._notriggerAnimUpdate)
    }
  }

  Port.prototype.setAnimated = function (a) {
    if (this._animated != a) {
      this._animated = a
      this._op._hasAnimPort = true

      if (this._animated && !this.anim) {
        this.anim = new Anim({ name: 'port ' + this.name })
        this.anim.addEventListener('onChange', () => {
          this._op.patch.emitEvent('portAnimUpdated', this._op, this, this.anim)
        })
      }
      this._onAnimToggle()
    }

    this._handleNoTriggerOpAnimUpdates(a)
    if (!a) {
      this.anim = null
    }

    this.setUiAttribs({ isAnimated: this._animated })
  }

  Port.prototype.toggleAnim = function () {
    this._animated = !this._animated
    if (this._animated && !this.anim) {
      this.anim = new Anim({ name: 'port ' + this.name })
      this.anim.addEventListener('onChange', () => {
        this._op.patch.emitEvent('portAnimUpdated', this._op, this, this.anim)
      })
    }
    this.setAnimated(this._animated)
    this._onAnimToggle()
    this.setUiAttribs({ isAnimated: this._animated })
  }

  /**
   * <pre>
   * CABLES1.CONSTANTS.OP.OP_PORT_TYPE_VALUE = 0;
   * CABLES1.CONSTANTS.OP.OP_PORT_TYPE_FUNCTION = 1;
   * CABLES1.CONSTANTS.OP.OP_PORT_TYPE_OBJECT = 2;
   * CABLES1.CONSTANTS.OP.OP_PORT_TYPE_TEXTURE = 2;
   * CABLES1.CONSTANTS.OP.OP_PORT_TYPE_ARRAY = 3;
   * CABLES1.CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC = 4;
   * CABLES1.CONSTANTS.OP.OP_PORT_TYPE_STRING = 5;
   * </pre>
   * @function getType
   * @memberof Port
   * @instance
   * @return {Number} type of port
   */
  Port.prototype.getType = function () {
    return this.type
  }

  /**
   * @function isLinked
   * @memberof Port
   * @instance
   * @return {Boolean} true if port is linked
   */
  Port.prototype.isLinked = function () {
    return this.links.length > 0 || this._animated || this._useVariableName != null
  }

  Port.prototype.isBoundToVar = function () {
    const b = this._useVariableName != null
    this.uiAttribs.boundToVar = b
    return b
  }
  /**
   * @function isAnimated
   * @memberof Port
   * @instance
   * @return {Boolean} true if port is animated
   */
  Port.prototype.isAnimated = function () {
    return this._animated
  }

  /**
   * @function isHidden
   * @memberof Port
   * @instance
   * @return {Boolean} true if port is hidden
   */
  Port.prototype.isHidden = function () {
    return this.uiAttribs.hidePort
  }

  /**
   * @function onTriggered
   * @memberof Port
   * @instance
   * @param {onTriggeredCallback} callback
   * @description set callback, which will be executed when port was triggered (usually output port)
   */
  Port.prototype._onTriggered = function (a) {
    this._activity()
    this._op.updateAnims()
    if (this._op.enabled && this.onTriggered) this.onTriggered(a)
  }

  Port.prototype._onSetProfiling = function (v) {
    this._op.patch.profiler.add('port', this)
    this.setValue(v)
    this._op.patch.profiler.add('port', null)
  }

  Port.prototype._onTriggeredProfiling = function () {
    if (this._op.enabled && this.onTriggered) {
      this._op.patch.profiler.add('port', this)
      this.onTriggered()
      this._op.patch.profiler.add('port', null)
    }
  }

  Port.prototype.getUiActiveState = function () {
    return this._uiActiveState
  }

  Port.prototype.setUiActiveState = function (onoff) {
    this._uiActiveState = onoff
    if (this.onUiActiveStateChange) this.onUiActiveStateChange()
  }

  /**
   * @deprecated
   */
  Port.prototype.onValueChange = function (cb) {
    this.onChange = cb
  }

  /**
   * @deprecated
   */
  Port.prototype.hidePort = function () {}

  /**
   * Returns the port type string, e.g. "value" based on the port type number
   * @function portTypeNumberToString
   * @instance
   * @memberof Port
   * @param {Number} type - The port type number
   * @returns {String} - The port type as string
   */
  Port.portTypeNumberToString = function (type) {
    if (type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return 'value'
    if (type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return 'function'
    if (type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return 'object'
    if (type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return 'array'
    if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return 'string'
    if (type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return 'dynamic'
    return 'unknown'
  } // CONCATENATED MODULE: ./src/core/core_port_switch.js

  class SwitchPort extends Port {
    constructor(__parent, name, type, uiAttribs, indexPort) {
      super(__parent, name, type, uiAttribs)

      this.get = () => {
        let s = super.get()

        if (CABLES1.UI) {
          if (
            s === '' ||
            s === null ||
            s === undefined ||
            (uiAttribs.values && uiAttribs.values.indexOf(String(s)) === -1)
          ) {
            this.op.setUiError('invalidswitch', 'Invalid Value [' + this.name + ']: "' + s + '"')
          } else this.op.setUiError('invalidswitch', null)
        }

        if (s === null || s === undefined) s = ''

        return s
      }

      this.indexPort = indexPort
      this.indexPort.set = (value) => {
        const values = uiAttribs.values

        if (!values) {
          // console.log("switch port has no values", this);
          return
        }

        let intValue = Math.floor(value)

        intValue = Math.min(intValue, values.length - 1)
        intValue = Math.max(intValue, 0)

        this.indexPort.setValue(intValue)
        this.set(values[intValue])

        if (
          this.op.patch.isEditorMode() &&
          performance.now() - (this.lastTime || 0) > 100 &&
          window.gui &&
          gui.patchView.isCurrentOp(this.op)
        ) {
          gui.opParams.show(this.op)
          this.lastTime = performance.now()
        }
      }
    }

    setUiAttribs(attribs) {
      const hidePort = attribs.hidePort
      attribs.hidePort = true
      super.setUiAttribs(attribs)
      if (typeof hidePort !== 'undefined') {
        this.indexPort.setUiAttribs({ hidePort })
      }
    }
  } // CONCATENATED MODULE: ./src/core/core_port_select.js

  class ValueSelectPort extends SwitchPort {
    setUiAttribs(newAttribs) {
      // never unhide valuePort when indexPort is linked
      if (this.indexPort.isLinked()) {
        for (const p in newAttribs) {
          if (p == 'greyout' && !newAttribs[p]) newAttribs[p] = 'true'
        }
      }
      super.setUiAttribs(newAttribs)
    }
  } // CONCATENATED MODULE: ./src/core/core_port_multi.js

  const MIN_NUM_PORTS = 2

  class MultiPort extends Port {
    constructor(__parent, name, type, dir, uiAttribs) {
      super(__parent, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, uiAttribs)

      this.uiAttribs.multiPortNum = this.uiAttribs.multiPortNum || MIN_NUM_PORTS
      this.setUiAttribs({ multiPort: true, group: this.name, order: -1 })
      this.ports = []
      this.direction = dir

      const updateArray = () => {
        const arr = []
        for (let i = 0; i < this.ports.length - 1; i++) {
          arr[i] = this.ports[i]
        }

        this.setRef(arr)
      }

      const updateUi = () => {
        for (let i = 0; i < this.ports.length; i++) {
          let lp // undefined to remove/not set it
          let opacity // undefined to remove/not set it
          let grey // undefined to remove/not set it

          if (!this.uiAttribs.editable) grey = true
          if (i == 0) lp = this.ports.length
          if (i == this.ports.length - 1) {
            opacity = 0.2
            grey = true
          }

          this.ports[i].setUiAttribs({ longPort: lp, opacity: opacity, greyout: grey, group: this.name })
        }
      }

      this.removeInvalidPorts = () => {
        for (let i = 0; i < this.ports.length; i++) {
          if (!this.ports[i]) this.ports.splice(i, 1)
        }
      }

      this.countPorts = () => {
        if (gui.patchView.patchRenderer.isDraggingPort()) {
          clearTimeout(this.retryTo)
          this.retryTo = setTimeout(this.countPorts.bind(this))
          return
        }
        this.retryTo = null

        let redo = false
        this.removeListeners()
        this.removeInvalidPorts()

        for (let i = 0; i < this.ports.length; i++) {
          if (this.ports[i] && this.ports[i].links.length > 1) {
            const po = this.ports[i + 1]
            const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i])
            this.ports[i].links[0].remove()
            this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name)
            redo = true
            break
          }
        }

        let foundHole = true
        if (!this.uiAttribs.editable)
          while (foundHole) {
            foundHole = false
            for (let i = this.ports.length - 1; i > 0; i--) {
              if (this.ports[i] && this.ports[i].links.length > 0 && this.ports[i - 1].links.length == 0) {
                console.log('found hole!')
                // found hole

                const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i])
                this.ports[i].links[0].remove()

                const po = this.ports[i - 1]

                if (po && this.ports[i]) {
                  console.log('move ', this.ports[i].name, 'to', po.name)

                  this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name)
                  foundHole = true
                  redo = true
                  break
                }
              }
            }
          }

        if (this.ports.length > 2) {
          let i = this.ports.length - 1
          if (!this.uiAttribs.editable) {
            if (this.ports[i].links.length == 0 && this.ports[i - 1].links.length == 0) {
              this.ports[i].remove()
              this.ports[i] = null
            }
          }
        }
        this.removeInvalidPorts()

        if (this.ports[this.ports.length - 1].isLinked()) this.newPort()

        updateArray()
        updateUi()

        if (redo) this.countPorts()
        else this.addListeners()
      }

      this.removeListeners = () => {
        for (let i = 0; i < this.ports.length; i++) {
          const po = this.ports[i]
          po.multiPortChangeListener = po.off(po.multiPortChangeListener)
          po.multiLinkChangeListener = po.off(po.multiLinkChangeListener)
        }
      }

      this.addListeners = () => {
        for (let i = 0; i < this.ports.length; i++) {
          const po = this.ports[i]

          if (po.multiPortChangeListener) po.multiPortChangeListener = po.off(po.multiPortChangeListener)
          po.multiPortChangeListener = po.on('change', updateArray.bind(this))

          if (po.multiPortTriggerListener) po.multiPortTriggerListener = po.off(po.multiPortTriggerListener)
          po.multiPortTriggerListener = po.on('trigger', this.trigger())

          if (po.multiLinkChangeListener) po.multiLinkChangeListener = po.off(po.multiLinkChangeListener)
          po.multiLinkChangeListener = po.on('onLinkChanged', this.countPorts.bind(this))
        }
      }

      this.newPort = () => {
        const attrs = {}
        if (type == CABLES1.OP_PORT_TYPE_STRING) attrs.type = 'string'
        const po = new Port(this.op, name + '_' + this.ports.length, type, attrs)

        po.direction = dir
        this.ports.push(po)
        console.log('CONSTANTS.PORT_DIR_OUT', CONSTANTS.PORT.PORT_DIR_OUT, this.direction)
        if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) this.op.addOutPort(po)
        else this.op.addInPort(po)

        po.setInitialValue('')
        this.addListeners()

        updateUi()
        return po
      }

      this.initPorts = () => {
        for (let i = 0; i < 2; i++) this.newPort()
        updateArray()
        updateUi()
      }

      this.checkNum = () => {
        if (MIN_NUM_PORTS != this.uiAttribs.multiPortNum) this.setUiAttribs({ editable: true })

        this.uiAttribs.multiPortNum = Math.max(MIN_NUM_PORTS, this.uiAttribs.multiPortNum)

        while (this.ports.length < this.uiAttribs.multiPortNum) this.newPort()
        while (this.ports.length > this.uiAttribs.multiPortNum)
          if (this.ports[this.ports.length - 1]) this.ports.pop().remove()

        this.removeInvalidPorts()
      }

      this.incDec = (incDir) => {
        this.setUiAttribs({ multiPortNum: this.uiAttribs.multiPortNum + incDir })
        this.checkNum()
        this.setUiAttribs({ editable: true })
        updateUi()
      }

      this.on('onUiAttrChange', this.checkNum.bind(this))
      this.checkNum()
    }
  } // CONCATENATED MODULE: ./src/core/core_op.js

  /**
   * op the class of all operators
   * @external CABLES1
   * @namespace Op
   * @hideconstructor
   */

  /**
   * @type {Object}
   * @name attachments
   * @instance
   * @memberof Op
   * @description access file attachments as String values
   * @example
   * // set shader source to attached files (files are called shader.vert / shader.frag)
   * shader.setSource(attachments.shader_vert,attachments.shader_frag);
   */

  const Ops = {}

  const Op = function () {
    EventTarget.apply(this)

    this._log = new Logger('core_op')
    this.data = {} // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this.storage = {} // op-specific data to be included in export
    this._objName = ''
    this.portsOut = []
    this.portsIn = []
    this.portsInData = [] // original loaded patch data
    this.opId = '' // unique op id
    this.uiAttribs = {}
    this.enabled = true
    this.patch = arguments[0]
    this.name = arguments[1]
    this.preservedPortValues = {}
    this.preservedPortLinks = {}

    this._linkTimeRules = {
      needsLinkedToWork: [],
      needsParentOp: null
    }

    this.shouldWork = {}
    this.hasUiErrors = false
    this._uiErrors = {}
    this._hasAnimPort = false

    if (arguments[1]) {
      this._shortOpName = CABLES1.getShortOpName(arguments[1])
      this.getTitle()
    }

    this.id = arguments[2] || shortId() // instance id
    this.onAddPort = null
    this.onCreate = null
    this.onResize = null
    this.onLoaded = null
    this.onDelete = null
    this.onUiAttrChange = null
    this.onError = null

    this._instances = null

    /**
     * overwrite this to prerender shader and meshes / will be called by op `loadingStatus`
     * @function preRender
     * @memberof Op
     * @instance
     */
    this.preRender = null

    /**
     * overwrite this to initialize your op
     * @function init
     * @memberof Op
     * @instance
     */
    this.init = null

    Object.defineProperty(this, 'objName', {
      get() {
        return this._objName
      }
    })
    Object.defineProperty(this, 'shortName', {
      get() {
        return this._shortOpName
      }
    })

    if (this.initUi) this.initUi()
  }

  {
    Op.prototype.clearUiAttrib = function (name) {
      const obj = {}
      obj.name = null
      this.uiAttrib(obj)
    }

    Op.prototype.checkMainloopExists = function () {
      if (!CABLES1.UI) return
      if (!this.patch.cgl.mainloopOp) this.setUiError('nomainloop', 'patch should have a mainloop to use this op')
      else this.setUiError('nomainloop', null)
    }

    Op.prototype.getTitle = function () {
      if (!this.uiAttribs) return 'nouiattribs' + this.name

      if ((this.uiAttribs.title === undefined || this.uiAttribs.title === '') && this.objName.indexOf('Ops.Ui.') == -1)
        this.uiAttribs.title = this._shortOpName

      if (this.uiAttribs.title === undefined) this.uiAttribs.title = this._shortOpName

      return this.uiAttribs.title
    }

    Op.prototype.setTitle = function (name) {
      const doEmitEvent = this.name != name
      this.name = name

      if (this.uiAttribs.title != name) this.uiAttr({ title: name })
      if (doEmitEvent) this.emitEvent('onTitleChange', name)
    }

    Op.prototype.setStorage = function (newAttribs) {
      if (!newAttribs) return
      this.storage = this.storage || {}

      let changed = false
      for (const p in newAttribs) {
        if (this.storage[p] != newAttribs[p]) changed = true
        this.storage[p] = newAttribs[p]
      }

      if (changed) this.emitEvent('onStorageChange', newAttribs)
    }

    Op.prototype.isSubPatchOp = function () {
      if (this.storage) return this.storage.subPatchVer || 0
    }

    const _setUiAttrib = function (newAttribs) {
      if (!newAttribs) return

      if (newAttribs.error || newAttribs.warning || newAttribs.hint) {
        this._log.warn('old ui error/warning attribute in ' + this.name + ', use op.setUiError !', newAttribs)
      }

      if (typeof newAttribs != 'object') this._log.error('op.uiAttrib attribs are not of type object')
      if (!this.uiAttribs) this.uiAttribs = {}

      let emitMove = false
      if (
        CABLES1.UI &&
        newAttribs.hasOwnProperty('translate') &&
        (!this.uiAttribs.translate ||
          this.uiAttribs.translate.x != newAttribs.translate.x ||
          this.uiAttribs.translate.y != newAttribs.translate.y)
      )
        emitMove = true

      if (newAttribs.hasOwnProperty('disabled')) {
        this.setEnabled(!newAttribs.disabled)
      }

      let changed = false
      for (const p in newAttribs) {
        if (this.uiAttribs[p] != newAttribs[p]) changed = true
        this.uiAttribs[p] = newAttribs[p]
      }

      if (this.uiAttribs.hasOwnProperty('selected') && this.uiAttribs.selected == false) delete this.uiAttribs.selected
      if (newAttribs.title && newAttribs.title != this.name) this.setTitle(newAttribs.title)

      if (changed) {
        this.emitEvent('onUiAttribsChange', newAttribs)
        this.patch.emitEvent('onUiAttribsChange', this, newAttribs)
      }

      if (emitMove) this.emitEvent('move')
    }
    /**
     * setUiAttrib
     * possible values:
     * <pre>
     * warning - warning message - showing up in op parameter panel
     * error - error message - showing up in op parameter panel
     * extendTitle - op title extension, e.g. [ + ]
     * </pre>
     * @function setUiAttrib
     * @param {Object} newAttribs, e.g. {"attrib":value}
     * @memberof Op
     * @instance
     * @example
     * op.setUiAttrib({"extendTitle":str});
     */
    Op.prototype.setUiAttribs = Op.prototype.setUiAttrib = Op.prototype.uiAttr = _setUiAttrib

    Op.prototype.getName = function () {
      if (this.uiAttribs.name) return this.uiAttribs.name
      return this.name
    }

    Op.prototype.addOutPort = function (p) {
      p.direction = CONSTANTS.PORT.PORT_DIR_OUT
      p._op = this
      this.portsOut.push(p)
      this.emitEvent('onPortAdd', p)
      return p
    }

    Op.prototype.hasDynamicPort = function () {
      let i = 0
      for (i = 0; i < this.portsIn.length; i++) {
        if (this.portsIn[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true
        if (this.portsIn[i].getName() == 'dyn') return true
      }
      for (i = 0; i < this.portsOut.length; i++) {
        if (this.portsOut[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true
        if (this.portsOut[i].getName() == 'dyn') return true
      }

      return false
    }

    Op.prototype.addInPort = function (p) {
      if (!(p instanceof Port)) throw new Error('parameter is not a port!')

      p.direction = CONSTANTS.PORT.PORT_DIR_IN
      p._op = this

      this.portsIn.push(p)
      this.emitEvent('onPortAdd', p)

      return p
    }

    /**
     * create a trigger input port
     * @function inTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     *
     */
    Op.prototype.inFunction = Op.prototype.inTrigger = function (name, v) {
      const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION))
      if (v !== undefined) p.set(v)
      return p
    }

    /**
     * create multiple UI trigger buttons
     * @function inTriggerButton
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Array} names
     * @return {Port} created port
     */
    Op.prototype.inFunctionButton = Op.prototype.inTriggerButton = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
          display: 'button'
        })
      )
      if (v !== undefined) p.set(v)
      return p
    }

    Op.prototype.inFunctionButton = Op.prototype.inUiTriggerButtons = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
          display: 'buttons'
        })
      )
      if (v !== undefined) p.set(v)
      return p
    }

    /**
     * create a number value input port
     * @function inFloat
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Number} value
     * @return {Port} created port
     */
    Op.prototype.inValueFloat =
      Op.prototype.inValue =
      Op.prototype.inFloat =
        function (name, v) {
          const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE))

          p.setInitialValue(v)

          return p
        }

    /**
     * create a boolean input port, displayed as a checkbox
     * @function inBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Boolean} value
     * @return {Port} created port
     */
    Op.prototype.inValueBool = Op.prototype.inBool = function (name, v) {
      // old
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
          display: 'bool'
        })
      )
      // if (v !== undefined)
      // {
      p.setInitialValue(v)
      // p.set(v);
      // p.defaultValue = p.get();
      // }

      return p
    }

    Op.prototype.inMultiPort = function (name, type) {
      const p = new MultiPort(this, name, type, CONSTANTS.PORT_DIR_IN, {
        display: 'multiport',
        hidePort: true
      })
      p.ignoreValueSerialize = true

      this.addInPort(p)
      p.initPorts()

      return p
    }

    Op.prototype.outMultiPort = function (name, type) {
      const p = new MultiPort(this, name, type, CONSTANTS.PORT.PORT_DIR_OUT, {
        display: 'multiport',
        hidePort: true
      })
      p.ignoreValueSerialize = true

      this.addOutPort(p)
      p.initPorts()

      return p
    }

    Op.prototype.inValueString = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          type: 'string'
        })
      )
      p.value = ''

      p.setInitialValue(v)
      return p
    }

    /**
     * create a String value input port
     * @function inString
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inString = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
          type: 'string'
        })
      )
      v = v || ''
      // p.value = v;

      p.setInitialValue(v)
      return p
    }

    /**
     * create a String value input port displayed as TextArea
     * @function inValueText
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueText = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          type: 'string',
          display: 'text'
        })
      )
      p.value = ''

      p.setInitialValue(v)
      // if (v !== undefined)
      // {
      //     p.set(v);
      //     p.defaultValue = v;
      // }
      return p
    }

    Op.prototype.inTextarea = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
          type: 'string',
          display: 'text'
        })
      )
      p.value = ''
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    /**
     * create a String value input port displayed as editor
     * @function inStringEditor
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    // new string
    Op.prototype.inStringEditor = function (name, v, syntax, hideFormatButton = true) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
          type: 'string',
          display: 'editor',
          editShortcut: true,
          editorSyntax: syntax,
          hideFormatButton: hideFormatButton
        })
      )

      p.value = ''
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    // old
    Op.prototype.inValueEditor = function (name, v, syntax, hideFormatButton = true) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
          type: 'string',
          display: 'editor',
          editorSyntax: syntax,
          hideFormatButton: hideFormatButton
        })
      )
      p.value = ''
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    /**
     * create a string select box
     * @function inDropDown
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueSelect = Op.prototype.inDropDown = function (name, values, v, noindex) {
      let p = null
      if (!noindex) {
        const indexPort = new Port(this, name + ' index', CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
          increment: 'integer',
          hideParam: true
        })
        const n = this.addInPort(indexPort)

        if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i])

        const valuePort = new ValueSelectPort(
          this,
          name,
          CONSTANTS.OP.OP_PORT_TYPE_NUMBER,
          {
            display: 'dropdown',
            hidePort: true,
            type: 'string',
            values: values
          },
          n
        )

        valuePort.indexPort = indexPort

        valuePort.on('change', (val, thePort) => {
          if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values) {
            const idx = thePort.uiAttribs.values.indexOf(val)
            if (idx > -1) thePort.indexPort.set(idx)
          }
        })

        indexPort.onLinkChanged = function () {
          valuePort.setUiAttribs({ greyout: indexPort.isLinked() })
        }

        p = this.addInPort(valuePort)

        if (v !== undefined) {
          p.set(v)
          const index = values.findIndex((item) => {
            return item == v
          })
          n.setValue(index)
          p.defaultValue = v
          n.defaultValue = index
        }
      } else {
        const valuePort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          display: 'dropdown',
          hidePort: true,
          type: 'string',
          values
        })

        p = this.addInPort(valuePort)
      }

      return p
    }

    /**
     * create a string switch box
     * @function inSwitch
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inSwitch = function (name, values, v, noindex) {
      let p = null
      if (!noindex) {
        if (!v) v = values[0]
        const indexPort = new Port(this, name + ' index', CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          increment: 'integer',
          values: values,
          hideParam: true
        })
        const n = this.addInPort(indexPort)

        if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i])

        const switchPort = new SwitchPort(
          this,
          name,
          CONSTANTS.OP.OP_PORT_TYPE_STRING,
          {
            display: 'switch',
            hidePort: true,
            type: 'string',
            values: values
          },
          n
        )

        switchPort.indexPort = indexPort

        switchPort.on('change', (val, thePort) => {
          if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values) {
            const idx = thePort.uiAttribs.values.indexOf(val)
            if (idx > -1) thePort.indexPort.set(idx)
          }
        })

        indexPort.onLinkChanged = function () {
          switchPort.setUiAttribs({ greyout: indexPort.isLinked() })
        }
        p = this.addInPort(switchPort)

        if (v !== undefined) {
          p.set(v)
          const index = values.findIndex((item) => {
            return item == v
          })
          n.setValue(index)
          p.defaultValue = v
          n.defaultValue = index
        }
      } else {
        const switchPort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
          display: 'switch',
          hidePort: true,
          type: 'string',
          values: values
        })
        p = this.addInPort(switchPort)
      }

      return p
    }

    /**
     * create a integer input port
     * @function inInt
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueInt = Op.prototype.inInt = function (name, v) {
      // old
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          increment: 'integer'
        })
      )
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    /**
     * create a file/URL input port
     * @function inURL
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inFile = function (name, filter, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          display: 'file',
          type: 'string',
          filter: filter
        })
      )
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    Op.prototype.inUrl = function (name, filter, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
          display: 'file',
          type: 'string',
          filter: filter
        })
      )
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    /**
     * create a texture input port
     * @function inTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inTexture = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
          display: 'texture',
          objType: 'texture',
          preview: true
        })
      )
      p.ignoreValueSerialize = true
      if (v !== undefined) p.set(v)
      return p
    }

    /**
     * create a object input port
     * @function inObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inObject = function (name, v, objType) {
      const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { objType: objType }))
      p.ignoreValueSerialize = true

      if (v !== undefined) p.set(v)
      return p
    }

    Op.prototype.inGradient = function (name, v) {
      const p = this.addInPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          display: 'gradient'
          // "hidePort": true
        })
      )
      if (v !== undefined) p.set(v)
      return p
    }

    Op.prototype.getPortVisibleIndex = function (p) {
      let ports = this.portsIn
      if (p.direction == CONSTANTS.PORT_DIR_OUT) ports = this.portsOut

      let index = 0
      for (let i = 0; i < ports.length; i++) {
        if (ports[i].uiAttribs.hidePort) continue
        index++
        if (ports[i] == p) return index
      }
    }

    /**
     * create a array input port
     * @function inArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inArray = function (name, v, stride) {
      if (!stride && CABLES1.UTILS.isNumeric(v)) stride = v

      const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { stride: stride }))

      if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v)

      // if (v !== undefined) p.set(v);
      return p
    }

    /**
     * create a value slider input port
     * @function inFloatSlider
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} defaultvalue
     * @param {number} min
     * @param {number} max
     * @return {Port} created port
     */
    Op.prototype.inValueSlider = Op.prototype.inFloatSlider = function (name, v, min, max) {
      const uiattribs = { display: 'range' }

      if (min != undefined && max != undefined) {
        uiattribs.min = min
        uiattribs.max = max
      }

      const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, uiattribs))
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    /**
     * create output trigger port
     * @function outTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outFunction = Op.prototype.outTrigger = function (name, v) {
      // old
      const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION))
      if (v !== undefined) p.set(v)
      return p
    }

    /**
     * create output value port
     * @function outNumber
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} default value
     * @return {Port} created port
     */
    Op.prototype.outValue = Op.prototype.outNumber = function (name, v) {
      // old
      const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE))
      if (v !== undefined) p.set(v)
      return p
    }

    /**
     * create output boolean port
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueBool = Op.prototype.outBool = function (name, v) {
      // old
      const p = this.addOutPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          display: 'bool'
        })
      )
      if (v !== undefined) p.set(v)
      else p.set(0)
      return p
    }

    /**
     * create output boolean port,value will be converted to 0 or 1
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outBoolNum = function (name, v) {
      const p = this.addOutPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          display: 'boolnum'
        })
      )

      p.set = function (b) {
        this.setValue(b ? 1 : 0)
        // console.log("bool set", b, this.get());
      }.bind(p)

      if (v !== undefined) p.set(v)
      else p.set(0)
      return p
    }

    /**
     * create output string port
     * @function outString
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueString = function (name, v) {
      const p = this.addOutPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
          type: 'string'
        })
      )
      if (v !== undefined) p.set(v)
      return p
    }
    Op.prototype.outString = function (name, v) {
      const p = this.addOutPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
          type: 'string'
        })
      )
      if (v !== undefined) p.set(v)
      else p.set('')
      return p
    }

    /**
     * create output object port
     * @function outObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outObject = function (name, v, objType) {
      const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { objType: objType || null }))
      p.set(v || null)
      p.ignoreValueSerialize = true
      return p
    }

    /**
     * create output array port
     * @function outArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outArray = function (name, v, stride) {
      if (!stride && CABLES1.UTILS.isNumeric(v)) stride = v
      const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { stride: stride }))
      if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v)

      p.ignoreValueSerialize = true
      return p
    }

    /**
     * create output texture port
     * @function outTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outTexture = function (name, v) {
      const p = this.addOutPort(
        new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
          preview: true,
          objType: 'texture',
          display: 'texture'
        })
      )
      if (v !== undefined) p.set(v || CGL1.Texture.getEmptyTexture(this.patch.cgl))

      p.ignoreValueSerialize = true
      return p
    }

    Op.prototype.inDynamic = function (name, filter, options, v) {
      const p = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC, options)

      p.shouldLink = function (p1, p2) {
        if (filter && UTILS.isArray(filter)) {
          for (let i = 0; i < filter.length; i++) {
            if (p1 == this && p2.type === filter[i]) return true
            if (p2 == this && p1.type === filter[i]) return true
          }
          return false // types do not match
        }
        return true // no filter set
      }

      this.addInPort(p)
      if (v !== undefined) {
        p.set(v)
        p.defaultValue = v
      }
      return p
    }

    Op.prototype.removeLinks = function () {
      for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].removeLinks()
      for (let ipo = 0; ipo < this.portsOut.length; ipo++) this.portsOut[ipo].removeLinks()
    }

    Op.prototype.getSerialized = function () {
      const opObj = {}

      if (this.opId) opObj.opId = this.opId
      if (this.patch.storeObjNames) opObj.objName = this.objName

      opObj.id = this.id
      opObj.uiAttribs = JSON.parse(JSON.stringify(this.uiAttribs)) || {}

      if (this.storage && Object.keys(this.storage).length > 0) opObj.storage = JSON.parse(JSON.stringify(this.storage))
      if (this.uiAttribs.hasOwnProperty('working') && this.uiAttribs.working == true) delete this.uiAttribs.working
      if (opObj.uiAttribs.hasOwnProperty('uierrors')) delete opObj.uiAttribs.uierrors

      if (opObj.uiAttribs.title == this._shortOpName) delete opObj.uiAttribs.title

      opObj.portsIn = []
      opObj.portsOut = []

      // console.log("this.portsIn", this.portsIn);

      for (let i = 0; i < this.portsIn.length; i++) {
        const s = this.portsIn[i].getSerialized()
        if (s) opObj.portsIn.push(s)
      }
      for (const ipo in this.portsOut) {
        const s = this.portsOut[ipo].getSerialized()
        if (s) opObj.portsOut.push(s)
      }

      if (opObj.portsIn.length == 0) delete opObj.portsIn
      if (opObj.portsOut.length == 0) delete opObj.portsOut
      cleanJson(opObj)

      return opObj
    }

    Op.prototype.getFirstOutPortByType = function (type) {
      for (const ipo in this.portsOut) if (this.portsOut[ipo].type == type) return this.portsOut[ipo]
    }

    Op.prototype.getFirstInPortByType = function (type) {
      for (const ipo in this.portsIn) if (this.portsIn[ipo].type == type) return this.portsIn[ipo]
    }

    /**
     * return port by the name portName
     * @function getPort
     * @instance
     * @memberof Op
     * @param {String} portName
     * @return {Port}
     */
    Op.prototype.getPort = Op.prototype.getPortByName = function (name, lowerCase) {
      if (lowerCase) {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
          if (this.portsIn[ipi].getName().toLowerCase() == name || this.portsIn[ipi].id.toLowerCase() == name)
            return this.portsIn[ipi]

        for (let ipo = 0; ipo < this.portsOut.length; ipo++)
          if (this.portsOut[ipo].getName().toLowerCase() == name || this.portsOut[ipo].id.toLowerCase() == name)
            return this.portsOut[ipo]
      } else {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
          if (this.portsIn[ipi].getName() == name || this.portsIn[ipi].id == name) return this.portsIn[ipi]

        for (let ipo = 0; ipo < this.portsOut.length; ipo++)
          if (this.portsOut[ipo].getName() == name || this.portsOut[ipo].id == name) return this.portsOut[ipo]
      }
    }

    /**
     * return port by the name id
     * @function getPortById
     * @instance
     * @memberof Op
     * @param {String} id
     * @return {Port}
     */
    Op.prototype.getPortById = function (id) {
      for (let ipi = 0; ipi < this.portsIn.length; ipi++) if (this.portsIn[ipi].id == id) return this.portsIn[ipi]
      for (let ipo = 0; ipo < this.portsOut.length; ipo++) if (this.portsOut[ipo].id == id) return this.portsOut[ipo]
    }

    Op.prototype.updateAnims = function () {
      if (this._hasAnimPort) for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].updateAnim()
    }

    Op.prototype.log = function () {
      const initiator = 'op ' + this.objName
      if (CABLES1.UI && !CABLES1.UI.logFilter.shouldPrint(initiator, ...arguments)) return
      if (!CABLES1.UI && this.patch.silent) return

      const args = ['[op ' + CABLES1.getShortOpName(this.objName) + ']']
      args.push.apply(args, arguments)
      Function.prototype.apply.apply(console.log, [console, args]) // eslint-disable-line
    }

    Op.prototype.error = Op.prototype.logError = function () {
      if (!this) {
        console.log('no this...!!!')
        debugger
        return
      }

      // if (this.patch.silent) return;
      const args = ['[op ' + CABLES1.getShortOpName(this.objName) + ']']
      args.push.apply(args, arguments)
      Function.prototype.apply.apply(console.error, [console, args]) // eslint-disable-line
      if (window.gui) window.gui.emitEvent('opLogEvent', this.objName, 'error', arguments)
    }

    Op.prototype.warn = Op.prototype.logWarn = function () {
      // if (this.patch.silent) return;
      const args = ['[op ' + CABLES1.getShortOpName(this.objName) + ']']
      args.push.apply(args, arguments)
      Function.prototype.apply.apply(console.warn, [console, args]) // eslint-disable-line
    }

    Op.prototype.verbose = Op.prototype.logVerbose = function () {
      const initiator = 'op ' + CABLES1.getShortOpName(this.objName)
      if (CABLES1.UI && !CABLES1.UI.logFilter.shouldPrint(initiator, ...arguments)) return

      if (!CABLES1.UI && this.patch.silent) return

      const args = ['[' + initiator + ']']
      args.push.apply(args, arguments)
      Function.prototype.apply.apply(console.info, [console, args]) // eslint-disable-line
    }

    Op.prototype.profile = function (enable) {
      for (let ipi = 0; ipi < this.portsIn.length; ipi++) {
        this.portsIn[ipi]._onTriggered = this.portsIn[ipi]._onTriggeredProfiling
        this.portsIn[ipi].set = this.portsIn[ipi]._onSetProfiling
      }
    }

    Op.prototype.findParent = function (objName) {
      for (let ipi = 0; ipi < this.portsIn.length; ipi++) {
        if (this.portsIn[ipi].isLinked()) {
          if (this.portsIn[ipi].links[0].portOut.parent.objName == objName)
            return this.portsIn[ipi].links[0].portOut.parent

          let found = null
          found = this.portsIn[ipi].links[0].portOut.parent.findParent(objName)
          if (found) return found
        }
      }
      return null
    }

    // todo: check instancing stuff?
    Op.prototype.cleanUp = function () {
      if (this._instances) {
        for (let i = 0; i < this._instances.length; i++) {
          if (this._instances[i].onDelete) this._instances[i].onDelete()
        }

        this._instances.length = 0
      }
      for (let i = 0; i < this.portsIn.length; i++) {
        this.portsIn[i].setAnimated(false)
      }

      if (this.onAnimFrame) this.patch.removeOnAnimFrame(this)
    }

    // todo: check instancing stuff?
    Op.prototype.instanced = function (triggerPort) {
      console.log('instanced', this.patch.instancing.numCycles())
      if (this.patch.instancing.numCycles() === 0) return false

      let i = 0
      let ipi = 0
      if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
        if (!this._instances) this._instances = []
        this._.log('creating instances of ', this.objName, this.patch.instancing.numCycles(), this._instances.length)
        this._instances.length = this.patch.instancing.numCycles()

        for (i = 0; i < this._instances.length; i++) {
          this._instances[i] = this.patch.createOp(this.objName, true)
          this._instances[i].instanced = function () {
            return false
          }
          this._instances[i].uiAttr(this.uiAttribs)

          for (let ipo = 0; ipo < this.portsOut.length; ipo++) {
            if (this.portsOut[ipo].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) {
              this._instances[i].getPortByName(this.portsOut[ipo].name).trigger = this.portsOut[ipo].trigger.bind(
                this.portsOut[ipo]
              )
            }
          }
        }

        for (ipi = 0; ipi < this.portsIn.length; ipi++) {
          this.portsIn[ipi].onChange = null
          this.portsIn[ipi].onValueChanged = null
        }
      }

      const theTriggerPort = null
      for (ipi = 0; ipi < this.portsIn.length; ipi++) {
        if (
          this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE ||
          this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY
        ) {
          this._instances[this.patch.instancing.index()].portsIn[ipi].set(this.portsIn[ipi].get())
        }
        if (this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) {
          // if(this._instances[ this.patch.instancing.index() ].portsIn[ipi].name==triggerPort.name)
          // theTriggerPort=this._instances[ this.patch.instancing.index() ].portsIn[ipi];
        }
      }

      if (theTriggerPort) theTriggerPort.onTriggered()

      for (ipi = 0; ipi < this.portsOut.length; ipi++) {
        if (this.portsOut[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) {
          this.portsOut[ipi].set(this._instances[this.patch.instancing.index()].portsOut[ipi].get())
        }
      }

      return true
    }

    // todo: check instancing stuff?
    Op.prototype.initInstancable = function () {
      //         if(this.isInstanced)
      //         {
      //             console.log('cancel instancing');
      //             return;
      //         }
      //         this._instances=[];
      //         for(var ipi=0;ipi<this.portsIn.length;ipi++)
      //         {
      //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_VALUE)
      //             {
      //
      //             }
      //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
      //             {
      //                 // var piIndex=ipi;
      //                 this.portsIn[ipi].onTriggered=function(piIndex)
      //                 {
      //
      //                     var i=0;
      // // console.log('trigger',this._instances.length);
      //
      //                 }.bind(this,ipi );
      //
      //             }
      // };
      // this._instances=null;
    }

    Op.prototype.setValues = function (obj) {
      for (const i in obj) {
        const port = this.getPortByName(i)
        if (port) port.set(obj[i])
        else this._log.warn('op.setValues: port not found:', i)
      }
    }

    /**
     * return true if op has this error message id
     * @function hasUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @returns {Boolean} - has id
     */
    Op.prototype.hasUiError = function (id) {
      return this._uiErrors.hasOwnProperty(id) && this._uiErrors[id]
    }

    /**
     * show op error message - set message to null to remove error message
     * @function setUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @param {txt} text message
     * @param {level} level
     */
    Op.prototype.setUiError = function (id, txt, level) {
      // overwritten in ui: core_extend_op
    }

    // todo: remove
    Op.prototype.setError = function (id, txt) {
      this._log.warn('old error message op.error() - use op.setUiError()')
    }

    /**
     * enable/disable op
     * @function
     * @instance
     * @memberof Op
     * @param {boolean}
     */
    Op.prototype.setEnabled = function (b) {
      this.enabled = b
      this.emitEvent('onEnabledChange', b)
      if (!this.enabled) this.setUiError('_disabled', 'Op is disabled', 0)
      else this.setUiError('_disabled', null)
    }

    /**
     * organize ports into a group
     * @function
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} ports
     */
    Op.prototype.setPortGroup = function (name, ports) {
      for (let i = 0; i < ports.length; i++) {
        if (ports[i])
          if (ports[i].setUiAttribs) ports[i].setUiAttribs({ group: name })
          else {
            this._log.error('setPortGroup: invalid port!')
          }
      }
    }

    /**
     * visually indicate ports that they are coordinate inputs
     * @function
     * @instance
     * @memberof Op
     * @param {Port} portX
     * @param {Port} portY
     * @param {Port} portZ
     */
    Op.prototype.setUiAxisPorts = function (px, py, pz) {
      if (px) px.setUiAttribs({ axis: 'X' })
      if (py) py.setUiAttribs({ axis: 'Y' })
      if (pz) pz.setUiAttribs({ axis: 'Z' })
    }

    /**
     * remove port from op
     * @function removePort
     * @instance
     * @memberof Op
     * @param {Port} port to remove
     */
    Op.prototype.removePort = function (port) {
      for (let ipi = 0; ipi < this.portsIn.length; ipi++) {
        if (this.portsIn[ipi] == port) {
          this.portsIn.splice(ipi, 1)
          this.emitEvent('onUiAttribsChange', {})
          this.emitEvent('onPortRemoved', {})
          return
        }
      }
    }

    Op.prototype._checkLinksNeededToWork = function () {}

    /**
     * show a warning of this op is not a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    Op.prototype.toWorkNeedsParent = function (parentOpName) {
      if (!this.patch.isEditorMode()) return

      this._linkTimeRules.needsParentOp = parentOpName
    }

    // /**
    //  * show a warning of this op is a child of parentOpName
    //  * @function
    //  * @instance
    //  * @memberof Op
    //  * @param {String} parentOpName
    //  */
    Op.prototype.toWorkShouldNotBeChild = function (parentOpName, type) {
      if (!this.patch.isEditorMode()) return
      this._linkTimeRules.forbiddenParent = parentOpName
      if (type != undefined) this._linkTimeRules.forbiddenParentType = type
    }

    /**
     * show a small X to indicate op is not working when given ports are not linked
     * @function
     * @instance
     * @memberof Op
     * @param {Port} port1
     * @param {Port} port2
     * @param {Port} port3
     */
    Op.prototype.toWorkPortsNeedToBeLinked = function () {
      if (!this.patch.isEditorMode()) return
      for (let i = 0; i < arguments.length; i++)
        if (this._linkTimeRules.needsLinkedToWork.indexOf(arguments[i]) == -1)
          this._linkTimeRules.needsLinkedToWork.push(arguments[i])
    }
    Op.prototype.toWorkPortsNeedToBeLinkedReset = function () {
      if (!this.patch.isEditorMode()) return
      this._linkTimeRules.needsLinkedToWork.length = 0
      if (this.checkLinkTimeWarnings) this.checkLinkTimeWarnings()
    }

    Op.prototype.initVarPorts = function () {
      for (let i = 0; i < this.portsIn.length; i++) {
        if (this.portsIn[i].getVariableName()) this.portsIn[i].setVariable(this.portsIn[i].getVariableName())
      }
    }

    /**
     * refresh op parameters, if current op is selected
     * @function
     * @instance
     * @memberof Op
     */
    Op.prototype.refreshParams = function () {
      if (this.patch && this.patch.isEditorMode() && this.isCurrentUiOp()) {
        gui.opParams.show(this)
      }
    }

    /**
     * Returns true if op is selected and parameter are shown in the editor, can only return true if in editor/ui
     * @function isCurrentUiOp
     * @instance
     * @memberof Op
     * @returns {Boolean} - is current ui op
     */
    Op.prototype.isCurrentUiOp = function () {
      if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this)
    }

    /**
     * Implement to render 2d canvas based graphics from in an op
     * @function renderVizLayer
     * @instance
     * @memberof Op
     * @param {ctx} context of canvas 2d
     * @param {Object} layer info
     * @param {number} layer.x x position on canvas
     * @param {number} layer.y y position on canvas
     * @param {number} layer.width width of canvas
     * @param {number} layer.height height of canvas
     * @param {number} layer.scale current scaling of patchfield view
     */
    Op.prototype.renderVizLayer = null // optionaly defined in op instance
  } // CONCATENATED MODULE: ./src/core/loadingstatus.js

  /**
   * LoadingStatus class, manages asynchronous loading jobs
   *
   * @external CABLES1
   * @namespace LoadingStatus
   * @hideconstructor
   * @class
   */
  const LoadingStatus = function (patch) {
    EventTarget.apply(this)

    this._log = new Logger('LoadingStatus')
    this._loadingAssets = {}
    this._cbFinished = []
    this._assetTasks = []
    this._percent = 0
    this._count = 0
    this._countFinished = 0
    this._order = 0
    this._startTime = 0
    this._patch = patch
    this._wasFinishedPrinted = false
    this._loadingAssetTaskCb = false
  }

  LoadingStatus.prototype.setOnFinishedLoading = function (cb) {
    this._cbFinished.push(cb)
  }

  LoadingStatus.prototype.getNumAssets = function () {
    return this._countFinished
  }

  LoadingStatus.prototype.getProgress = function () {
    return this._percent
  }

  LoadingStatus.prototype.checkStatus = function () {
    this._countFinished = 0
    this._count = 0

    for (const i in this._loadingAssets) {
      this._count++
      if (!this._loadingAssets[i].finished) {
        this._countFinished++
      }
    }

    this._percent = (this._count - this._countFinished) / this._count

    if (this._countFinished === 0) {
      for (let j = 0; j < this._cbFinished.length; j++) {
        if (this._cbFinished[j]) {
          const cb = this._cbFinished[j]
          setTimeout(() => {
            cb(this._patch)
            this.emitEvent('finishedAll')
          }, 100)
        }
      }

      if (!this._wasFinishedPrinted) {
        this._wasFinishedPrinted = true
        this.print()
      }
      this.emitEvent('finishedAll')
    }
  }

  LoadingStatus.prototype.getList = function () {
    let arr = []
    for (const i in this._loadingAssets) {
      arr.push(this._loadingAssets[i])
    }

    return arr
  }

  LoadingStatus.prototype.getListJobs = function () {
    let arr = []
    for (const i in this._loadingAssets) {
      if (!this._loadingAssets[i].finished) arr.push(this._loadingAssets[i].name)
    }

    return arr
  }

  LoadingStatus.prototype.print = function () {
    if (this._patch.config.silent) return

    const rows = []

    for (const i in this._loadingAssets) {
      rows.push([
        this._loadingAssets[i].order,
        this._loadingAssets[i].type,
        this._loadingAssets[i].name,
        (this._loadingAssets[i].timeEnd - this._loadingAssets[i].timeStart) / 1000 + 's'
      ])
    }

    this._log.groupCollapsed(
      'finished loading ' + this._order + ' assets in ' + (Date.now() - this._startTime) / 1000 + 's'
    )
    this._log.table(rows)
    this._log.groupEnd()
  }

  LoadingStatus.prototype.finished = function (id) {
    const l = this._loadingAssets[id]
    if (l) {
      if (l.finished) this._log.warn('loading job was already finished', l)

      if (l.op) l.op.setUiAttribs({ loading: false })
      l.finished = true
      l.timeEnd = Date.now()
    }

    this.checkStatus()
    this.emitEvent('finishedTask')
  }

  LoadingStatus.prototype._startAssetTasks = function () {
    for (let i = 0; i < this._assetTasks.length; i++) this._assetTasks[i]()
    this._assetTasks.length = 0
  }

  /**
   * delay an asset loading task, mainly to wait for ui to be finished loading and showing, and only then start loading assets
   * @function addAssetLoadingTask
   * @instance
   * @memberof Op
   * @param {function} callback
   */
  LoadingStatus.prototype.addAssetLoadingTask = function (cb) {
    if (this._patch.isEditorMode() && !CABLES1.UI.loaded) {
      this._assetTasks.push(cb)

      if (!this._loadingAssetTaskCb) window.gui.addEventListener('uiloaded', this._startAssetTasks.bind(this))
      this._loadingAssetTaskCb = true
    } else {
      cb()
    }
    this.emitEvent('addAssetTask')
  }

  LoadingStatus.prototype.existByName = function (name) {
    for (let i in this._loadingAssets) {
      if (this._loadingAssets[i].name == name && !this._loadingAssets[i].finished) {
        return true
      }
    }
  }

  LoadingStatus.prototype.start = function (type, name, op) {
    if (this._startTime == 0) this._startTime = Date.now()
    const id = generateUUID()

    if (op) op.setUiAttribs({ loading: true })

    this._loadingAssets[id] = {
      id: id,
      op: op,
      type: type,
      name: name,
      finished: false,
      timeStart: Date.now(),
      order: this._order
    }
    this._order++

    this.emitEvent('startTask')

    return id
  } // CONCATENATED MODULE: ./src/core/instancing.js

  // todo: needs to be removed...

  const Instancing = function () {
    this._loops = []
    this._indizes = []
    this._index = 0
  }

  Instancing.prototype.pushLoop = function (maxNum) {
    this._loops.push(Math.abs(Math.floor(maxNum)))
    this._indizes.push(this._index)
  }

  Instancing.prototype.popLoop = function () {
    this._loops.pop()
    // this._index--;
    this._index = this._indizes.pop()
    if (this._loops.length === 0) this._index = 0
  }

  Instancing.prototype.numLoops = function () {
    return this._loops.length
  }

  Instancing.prototype.numCycles = function () {
    if (this._loops.length === 0) return 0
    let num = this._loops[0]
    for (let i = 1; i < this._loops.length; i++) num *= this._loops[i]

    return num
  }

  Instancing.prototype.inLoop = function () {
    return this._loops.length > 0
  }

  Instancing.prototype.increment = function () {
    this._index++
  }

  Instancing.prototype.index = function () {
    return this._index
  } // CONCATENATED MODULE: ./src/core/timer.js

  /** @namespace CABLES1 */

  const internalNow = function () {
    return window.performance.now()
  }

  /**
   * current time in milliseconds
   * @memberof CABLES1
   * @function now
   * @static
   */
  const now = function () {
    return internalNow()
  }

  // ----------------------------

  /**
   * Measuring time
   * @external CABLES1
   * @namespace Timer
   * @hideconstructor
   * @class
   */
  const Timer = function () {
    EventTarget.apply(this)

    this._timeStart = internalNow()
    this._timeOffset = 0

    this._currentTime = 0
    this._lastTime = 0
    this._paused = true
    this._delay = 0
    this.overwriteTime = -1
  }

  Timer.prototype._internalNow = function () {
    if (this._ts) return this._ts
    return internalNow()
  }

  Timer.prototype._getTime = function () {
    this._lastTime = (this._internalNow() - this._timeStart) / 1000
    return this._lastTime + this._timeOffset
  }

  Timer.prototype.setDelay = function (d) {
    this._delay = d
    this.emitEvent('timeChange')
  }

  /**
   * @function
   * @memberof Timer
   * @instance
   * @description returns true if timer is playing
   * @return {Boolean} value
   */
  Timer.prototype.isPlaying = function () {
    return !this._paused
  }

  /**
   * @function
   * @memberof Timer
   * @instance
   * @description update timer
   * @return {Number} time
   */
  Timer.prototype.update = function (ts) {
    if (ts) this._ts = ts
    if (this._paused) return
    this._currentTime = this._getTime()

    return this._currentTime
  }

  /**
   * @function
   * @memberof Timer
   * @instance
   * @return {Number} time in milliseconds
   */
  Timer.prototype.getMillis = function () {
    return this.get() * 1000
  }

  /**
   * @function
   * @memberof Timer
   * @instance
   * @return {Number} value time in seconds
   */
  Timer.prototype.get = Timer.prototype.getTime = function () {
    if (this.overwriteTime >= 0) return this.overwriteTime - this._delay
    return this._currentTime - this._delay
  }

  /**
   * toggle between play/pause state
   * @function
   * @memberof Timer
   * @instance
   */
  Timer.prototype.togglePlay = function () {
    if (this._paused) this.play()
    else this.pause()
  }

  /**
   * set current time
   * @function
   * @memberof Timer
   * @instance
   * @param {Number} t
   */
  Timer.prototype.setTime = function (t) {
    if (isNaN(t) || t < 0) t = 0
    this._timeStart = this._internalNow()
    this._timeOffset = t
    this._currentTime = t
    this.emitEvent('timeChange')
  }

  Timer.prototype.setOffset = function (val) {
    if (this._currentTime + val < 0) {
      this._timeStart = this._internalNow()
      this._timeOffset = 0
      this._currentTime = 0
    } else {
      this._timeOffset += val
      this._currentTime = this._lastTime + this._timeOffset
    }
    this.emitEvent('timeChange')
  }

  /**
   * (re)starts the timer
   * @function
   * @memberof Timer
   * @instance
   */
  Timer.prototype.play = function () {
    this._timeStart = this._internalNow()
    this._paused = false
    this.emitEvent('playPause')
  }

  /**
   * pauses the timer
   * @function
   * @memberof Timer
   * @instance
   */
  Timer.prototype.pause = function () {
    this._timeOffset = this._currentTime
    this._paused = true
    this.emitEvent('playPause')
  } // CONCATENATED MODULE: ./src/core/core_profiler.js

  class Profiler {
    constructor(patch) {
      this.startFrame = patch.getFrameNum()
      this.items = {}
      this.currentId = null
      this.currentStart = 0
      this._patch = patch
    }

    getItems() {
      return this.items
    }

    clear() {
      if (this.paused) return
      this.items = {}
    }

    togglePause() {
      this.paused = !this.paused
      if (!this.paused) {
        this.items = {}
        this.currentStart = performance.now()
      }
    }

    add(type, object) {
      if (this.paused) return

      if (this.currentId !== null) {
        if (!object || object.id != this.currentId) {
          if (this.items[this.currentId]) {
            this.items[this.currentId].timeUsed += performance.now() - this.currentStart

            if (!this.items[this.currentId].peakTime || now() - this.items[this.currentId].peakTime > 5000) {
              this.items[this.currentId].peak = 0
              this.items[this.currentId].peakTime = now()
            }
            this.items[this.currentId].peak = Math.max(
              this.items[this.currentId].peak,
              performance.now() - this.currentStart
            )
          }
        }
      }

      if (object !== null) {
        if (!this.items[object.id]) {
          this.items[object.id] = {
            numTriggers: 0,
            timeUsed: 0
          }
        }

        if (this.items[object.id].lastFrame != this._patch.getFrameNum()) this.items[object.id].numTriggers = 0

        this.items[object.id].lastFrame = this._patch.getFrameNum()
        this.items[object.id].numTriggers++
        this.items[object.id].opid = object.op.id
        this.items[object.id].title = object.op.name + '.' + object.name
        this.items[object.id].subPatch = object.op.uiAttribs.subPatch

        this.currentId = object.id
        this.currentStart = performance.now()
      } else {
        this.currentId = null
      }
    }

    print() {
      console.log('--------')
      for (const i in this.items) {
        console.log(this.items[i].title + ': ' + this.items[i].numTriggers + ' / ' + this.items[i].timeUsed)
      }
    }
  } // CONCATENATED MODULE: ./src/core/cgl/constants.js

  const SHADER = {
    // default attributes
    SHADERVAR_VERTEX_POSITION: 'vPosition',
    SHADERVAR_VERTEX_NUMBER: 'attrVertIndex',
    SHADERVAR_VERTEX_NORMAL: 'attrVertNormal',
    SHADERVAR_VERTEX_TEXCOORD: 'attrTexCoord',
    SHADERVAR_INSTANCE_MMATRIX: 'instMat',
    SHADERVAR_VERTEX_COLOR: 'attrVertColor',

    SHADERVAR_INSTANCE_INDEX: 'instanceIndex',

    // default uniforms
    SHADERVAR_UNI_PROJMAT: 'projMatrix',
    SHADERVAR_UNI_VIEWMAT: 'viewMatrix',
    SHADERVAR_UNI_MODELMAT: 'modelMatrix',
    SHADERVAR_UNI_NORMALMAT: 'normalMatrix',
    SHADERVAR_UNI_INVVIEWMAT: 'inverseViewMatrix',
    SHADERVAR_UNI_INVPROJMAT: 'invProjMatrix',
    SHADERVAR_UNI_MATERIALID: 'materialId',
    SHADERVAR_UNI_OBJECTID: 'objectId',

    SHADERVAR_UNI_VIEWPOS: 'camPos'
  }

  const BLEND_MODES = {
    BLEND_NONE: 0,
    BLEND_NORMAL: 1,
    BLEND_ADD: 2,
    BLEND_SUB: 3,
    BLEND_MUL: 4
  }

  const RAD2DEG = 180.0 / Math.PI
  const DEG2RAD = Math.PI / 180.0

  const constants_CONSTANTS = {
    MATH: {
      DEG2RAD: DEG2RAD,
      RAD2DEG: RAD2DEG
    },
    SHADER: SHADER,
    BLEND_MODES: BLEND_MODES
  } // CONCATENATED MODULE: ./src/core/cg/cg_uniform.js

  class CgUniform {
    constructor(
      __shader,
      __type,
      __name,
      _value,
      _port2,
      _port3,
      _port4,
      _structUniformName,
      _structName,
      _propertyName
    ) {
      this._log = new Logger('cg_uniform')
      this._type = __type
      this._name = __name
      this._shader = __shader
      this._value = 0.00001
      this._oldValue = null
      this._port = null
      this._structName = _structName
      this._structUniformName = _structUniformName
      this._propertyName = _propertyName

      this._shader._addUniform(this)
      this.needsUpdate = true
      this.shaderType = null
      this.comment = null

      if (__type == 'f') {
        this.set = this.setValue = this.setValueF.bind(this)
        this.updateValue = this.updateValueF.bind(this)
      } else if (__type == 'f[]') {
        this.set = this.setValue = this.setValueArrayF.bind(this)
        this.updateValue = this.updateValueArrayF.bind(this)
      } else if (__type == '2f[]') {
        this.set = this.setValue = this.setValueArray2F.bind(this)
        this.updateValue = this.updateValueArray2F.bind(this)
      } else if (__type == '3f[]') {
        this.set = this.setValue = this.setValueArray3F.bind(this)
        this.updateValue = this.updateValueArray3F.bind(this)
      } else if (__type == '4f[]') {
        this.set = this.setValue = this.setValueArray4F.bind(this)
        this.updateValue = this.updateValueArray4F.bind(this)
      } else if (__type == 'i') {
        this.set = this.setValue = this.setValueI.bind(this)
        this.updateValue = this.updateValueI.bind(this)
      } else if (__type == '2i') {
        this.set = this.setValue = this.setValue2I.bind(this)
        this.updateValue = this.updateValue2I.bind(this)
      } else if (__type == '3i') {
        this.set = this.setValue = this.setValue3I.bind(this)
        this.updateValue = this.updateValue3I.bind(this)
      } else if (__type == '4i') {
        this.set = this.setValue = this.setValue4I.bind(this)
        this.updateValue = this.updateValue4I.bind(this)
      } else if (__type == 'b') {
        this.set = this.setValue = this.setValueBool.bind(this)
        this.updateValue = this.updateValueBool.bind(this)
      } else if (__type == '4f') {
        this.set = this.setValue = this.setValue4F.bind(this)
        this.updateValue = this.updateValue4F.bind(this)
      } else if (__type == '3f') {
        this.set = this.setValue = this.setValue3F.bind(this)
        this.updateValue = this.updateValue3F.bind(this)
      } else if (__type == '2f') {
        this.set = this.setValue = this.setValue2F.bind(this)
        this.updateValue = this.updateValue2F.bind(this)
      } else if (__type == 't') {
        this.set = this.setValue = this.setValueT.bind(this)
        this.updateValue = this.updateValueT.bind(this)
      } else if (__type == 'tc') {
        this.set = this.setValue = this.setValueT.bind(this)
        this.updateValue = this.updateValueT.bind(this)
      } else if (__type == 't[]') {
        this.set = this.setValue = this.setValueArrayT.bind(this)
        this.updateValue = this.updateValueArrayT.bind(this)
      } else if (__type == 'm4' || __type == 'm4[]') {
        this.set = this.setValue = this.setValueM4.bind(this)
        this.updateValue = this.updateValueM4.bind(this)
      } else throw new Error('Unknown uniform type')

      if (typeof _value == 'object' && _value instanceof Port) {
        this._port = _value
        this._value = this._port.get()

        if (_port2 && _port3 && _port4) {
          if (!(_port2 instanceof Port) || !(_port3 instanceof Port) || !(_port4 instanceof Port)) {
            this._log.error('[cgl_uniform] mixed port/value parameter for vec4 ', this._name)
          }

          this._value = [0, 0, 0, 0]
          this._port2 = _port2
          this._port3 = _port3
          this._port4 = _port4

          this._port.on('change', this.updateFromPort4f.bind(this))
          this._port2.on('change', this.updateFromPort4f.bind(this))
          this._port3.on('change', this.updateFromPort4f.bind(this))
          this._port4.on('change', this.updateFromPort4f.bind(this))

          // this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this);
          this.updateFromPort4f()
        } else if (_port2 && _port3) {
          if (!(_port2 instanceof Port) || !(_port3 instanceof Port)) {
            this._log.error('[cgl_uniform] mixed port/value parameter for vec4 ', this._name)
          }

          this._value = [0, 0, 0]
          this._port2 = _port2
          this._port3 = _port3
          // this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this);
          this._port.on('change', this.updateFromPort3f.bind(this))
          this._port2.on('change', this.updateFromPort3f.bind(this))
          this._port3.on('change', this.updateFromPort3f.bind(this))

          this.updateFromPort3f()
        } else if (_port2) {
          if (!(_port2 instanceof Port)) {
            this._log.error('[cgl_uniform] mixed port/value parameter for vec4 ', this._name)
          }

          this._value = [0, 0]
          this._port2 = _port2
          // this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this);
          this._port.on('change', this.updateFromPort2f.bind(this))
          this._port2.on('change', this.updateFromPort2f.bind(this))

          this.updateFromPort2f()
        } else {
          // this._port.on = this.updateFromPort.bind(this);
          this._port.on('change', this.updateFromPort.bind(this))
        }
      } else this._value = _value

      this.setValue(this._value)
      this.needsUpdate = true
    }

    getType() {
      return this._type
    }

    getName() {
      return this._name
    }

    getValue() {
      return this._value
    }

    getShaderType() {
      return this.shaderType
    }

    isStructMember() {
      return !!this._structName
    }

    updateFromPort4f() {
      this._value[0] = this._port.get()
      this._value[1] = this._port2.get()
      this._value[2] = this._port3.get()
      this._value[3] = this._port4.get()
      this.setValue(this._value)
    }

    updateFromPort3f() {
      this._value[0] = this._port.get()
      this._value[1] = this._port2.get()
      this._value[2] = this._port3.get()
      this.setValue(this._value)
    }

    updateFromPort2f() {
      this._value[0] = this._port.get()
      this._value[1] = this._port2.get()
      this.setValue(this._value)
    }

    updateFromPort() {
      this.setValue(this._port.get())
    }
  }

  /* harmony default export */ const cg_uniform = CgUniform // CONCATENATED MODULE: ./src/core/cgl/cgl_shader_uniform.js

  /**
   * Shader uniforms
   *
   * types:
   * <pre>
   * f    - float
   * 2f   - vec2
   * 3f   - vec3
   * 4f   - vec4
   * i    - integer
   * t    - texture
   * m4   - mat4, 4x4 float matrix
   * f[]  - array of floats
   * 2f[] - array of float vec2
   * 3f[] - array of float vec3
   * 4f[] - array of float vec4
   * </pre>
   *
   * @external CGL1
   * @namespace Uniform
   * @class
   * @param {Shader} shader
   * @param {String} [type=f]
   * @param {String} name
   * @param {Number|Port} value  can be a Number,Matrix or Port
   * @example
   * // bind float uniform called myfloat and initialize with value 1.0
   * const unir=new CGL1.Uniform(shader,'f','myfloat',1.0);
   * unir.setValue(1.0);
   *
   * // bind float uniform called myfloat and automatically set it to input port value
   * const myPort=op.inFloat("input");
   * const pv=new CGL1.Uniform(shader,'f','myfloat',myPort);
   *
   */

  // export const Uniform(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)

  class Uniform extends cg_uniform {
    constructor(
      __shader,
      __type,
      __name,
      _value,
      _port2,
      _port3,
      _port4,
      _structUniformName,
      _structName,
      _propertyName
    ) {
      super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
      this._loc = -1
      this._cgl = __shader._cgl
    }

    get name() {
      return this._name
    }

    copy(newShader) {
      const uni = new Uniform(
        newShader,
        this._type,
        this._name,
        this._value,
        this._port2,
        this._port3,
        this._port4,
        this._structUniformName,
        this._structName,
        this._propertyName
      )
      uni.shaderType = this.shaderType
      return uni
    }

    /**
     * returns type as glsl type string. e.g. 'f' returns 'float'
     * @function getGlslTypeString
     * @memberof Uniform
     * @instance
     * @return {string} type as string
     */
    getGlslTypeString() {
      return Uniform.glslTypeString(this._type)
    }

    _isValidLoc() {
      return this._loc != -1 // && this._loc != null;
    }

    resetLoc() {
      this._loc = -1
      this.needsUpdate = true
    }

    bindTextures() {}

    getLoc() {
      return this._loc
    }

    updateFromPort4f() {
      this._value[0] = this._port.get()
      this._value[1] = this._port2.get()
      this._value[2] = this._port3.get()
      this._value[3] = this._port4.get()
      this.setValue(this._value)
    }

    updateFromPort3f() {
      this._value[0] = this._port.get()
      this._value[1] = this._port2.get()
      this._value[2] = this._port3.get()
      this.setValue(this._value)
    }

    updateFromPort2f() {
      this._value[0] = this._port.get()
      this._value[1] = this._port2.get()
      this.setValue(this._value)
    }

    updateFromPort() {
      this.setValue(this._port.get())
    }

    updateValueF() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false

      this._shader.getCgl().gl.uniform1f(this._loc, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    setValueF(v) {
      if (v != this._value) {
        this.needsUpdate = true
        this._value = v
      }
    }

    updateValueI() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false

      this._shader.getCgl().gl.uniform1i(this._loc, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    updateValue2I() {
      if (!this._value) return

      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }

      this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1])

      this.needsUpdate = false
      this._cgl.profileData.profileUniformCount++
    }

    updateValue3I() {
      if (!this._value) return
      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }

      this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2])
      this.needsUpdate = false
      this._cgl.profileData.profileUniformCount++
    }

    updateValue4I() {
      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }
      this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3])
      this._cgl.profileData.profileUniformCount++
    }

    setValueI(v) {
      if (v != this._value) {
        this.needsUpdate = true
        this._value = v
      }
    }

    setValue2I(v) {
      if (!v) return
      if (!this._oldValue) {
        this._oldValue = [v[0] - 1, 1]
        this.needsUpdate = true
      } else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1]) {
        this._oldValue[0] = v[0]
        this._oldValue[1] = v[1]
        this.needsUpdate = true
      }

      this._value = v
    }

    setValue3I(v) {
      if (!v) return
      if (!this._oldValue) {
        this._oldValue = [v[0] - 1, 1, 2]
        this.needsUpdate = true
      } else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2]) {
        this._oldValue[0] = v[0]
        this._oldValue[1] = v[1]
        this._oldValue[2] = v[2]
        this.needsUpdate = true
      }

      this._value = v
    }

    setValue4I(v) {
      this.needsUpdate = true
      this._value = v || vec4.create()
    }

    updateValueBool() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false
      this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0)

      this._cgl.profileData.profileUniformCount++
    }

    setValueBool(v) {
      if (v != this._value) {
        this.needsUpdate = true
        this._value = v
      }
    }

    setValueArray4F(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValueArray4F() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false

      if (!this._value) return
      this._shader.getCgl().gl.uniform4fv(this._loc, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    setValueArray3F(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValueArray3F() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false

      if (!this._value) return
      this._shader.getCgl().gl.uniform3fv(this._loc, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    setValueArray2F(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValueArray2F() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false

      if (!this._value) return
      this._shader.getCgl().gl.uniform2fv(this._loc, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    setValueArrayF(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValueArrayF() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false

      if (!this._value) return
      this._shader.getCgl().gl.uniform1fv(this._loc, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    setValueArrayT(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValue3F() {
      if (!this._value) return
      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }

      this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2])
      this.needsUpdate = false
      this._cgl.profileData.profileUniformCount++
    }

    setValue3F(v) {
      if (!v) return
      if (!this._oldValue) {
        this._oldValue = [v[0] - 1, 1, 2]
        this.needsUpdate = true
      } else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2]) {
        this._oldValue[0] = v[0]
        this._oldValue[1] = v[1]
        this._oldValue[2] = v[2]
        this.needsUpdate = true
      }

      this._value = v
    }

    updateValue2F() {
      if (!this._value) return

      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }

      this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1])
      this.needsUpdate = false
      this._cgl.profileData.profileUniformCount++
    }

    setValue2F(v) {
      if (!v) return
      if (!this._oldValue) {
        this._oldValue = [v[0] - 1, 1]
        this.needsUpdate = true
      } else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1]) {
        this._oldValue[0] = v[0]
        this._oldValue[1] = v[1]
        this.needsUpdate = true
      }
      this._value = v
    }

    updateValue4F() {
      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }

      if (!this._value) {
        this._log.warn('no value for uniform', this._name, this)
        this._value = [0, 0, 0, 0]
      }

      this.needsUpdate = false
      this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3])
      this._cgl.profileData.profileUniformCount++
    }

    setValue4F(v) {
      if (typeof this.value == 'number') this.value = vec4.create() // this should not be needed, but somehow it crashes with some shadermods

      if (!v) return
      if (!this._oldValue) {
        this._oldValue = [v[0] - 1, 1, 2, 3]
        this.needsUpdate = true
      } else if (
        v[0] != this._oldValue[0] ||
        v[1] != this._oldValue[1] ||
        v[2] != this._oldValue[2] ||
        v[3] != this._oldValue[3]
      ) {
        this._oldValue[0] = v[0]
        this._oldValue[1] = v[1]
        this._oldValue[2] = v[2]
        this.needsUpdate = true
      }

      this._value = v
    }

    updateValueM4() {
      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }
      if (!this._value || this._value.length % 16 != 0) return console.log('this.name', this._name, this._value)

      this._shader.getCgl().gl.uniformMatrix4fv(this._loc, false, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    setValueM4(v) {
      this.needsUpdate = true
      this._value = v || mat4.create()
    }

    updateValueArrayT() {
      if (!this._isValidLoc())
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
      else this.needsUpdate = false

      if (!this._value) return
      this._shader.getCgl().gl.uniform1iv(this._loc, this._value)
      this._cgl.profileData.profileUniformCount++
    }

    updateValueT() {
      if (!this._isValidLoc()) {
        this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)
        this._cgl.profileData.profileShaderGetUniform++
        this._cgl.profileData.profileShaderGetUniformName = this._name
      }

      this._cgl.profileData.profileUniformCount++
      this._shader.getCgl().gl.uniform1i(this._loc, this._value)
      this.needsUpdate = false
    }

    setValueT(v) {
      this.needsUpdate = true
      this._value = v
    }
  }

  Uniform.glslTypeString = (t) => {
    if (t == 'f') return 'float'
    if (t == 'b') return 'bool'
    if (t == 'i') return 'int'
    if (t == '2i') return 'ivec2'
    if (t == '2f') return 'vec2'
    if (t == '3f') return 'vec3'
    if (t == '4f') return 'vec4'
    if (t == 'm4') return 'mat4'

    if (t == 't') return 'sampler2D'
    if (t == 'tc') return 'samplerCube'

    if (t == '3f[]') return null // ignore this for now...
    if (t == 'm4[]') return null // ignore this for now...
    if (t == 'f[]') return null // ignore this for now...

    console.warn('[CGL1 UNIFORM] unknown glsl type string ', t)
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_texture.js

  /**
   * @function setValue
   * @memberof Uniform
   * @instance
   * @param {Number|Array|Matrix|Texture} value
   */

  const DEFAULT_TEXTURE_SIZE = 8

  /**
   * A Texture
   * @external CGL1
   * @namespace Texture
   * @constructor
   * @param {Context} cgl
   * @param {Object} [options]
   * @hideconstructor
   * @class
   * @example
   * // generate a 256x256 pixel texture of random colors
   * const size=256;
   * const data = new Uint8Array(size*size*4);
   *
   * for(var x=0;x<size*size*4;x++) data[ x*4+3]=255;
   *
   * const tex=new CGL1.Texture(cgl);
   * tex.initFromData(data,size,size,CGL1.Texture.FILTER_NEAREST,CGL1.Texture.WRAP_REPEAT);
   */
  const Texture = function (__cgl, options = {}) {
    if (!__cgl) throw new Error('no cgl')
    this._log = new Logger('cgl_texture')
    this._cgl = __cgl
    this.pixelFormat = options.pixelFormat || Texture.PFORMATSTR_RGBA8UB
    this.tex = this._cgl.gl.createTexture()
    this.id = CABLES1.uuid()
    this.width = 0
    this.height = 0
    this.loading = false
    this.flip = true
    this.flipped = false
    this.shadowMap = false
    this.deleted = false
    this.image = null
    this.anisotropic = 0
    this.filter = Texture.FILTER_NEAREST
    this.wrap = Texture.WRAP_CLAMP_TO_EDGE
    this.texTarget = this._cgl.gl.TEXTURE_2D
    if (options && options.type) this.texTarget = options.type
    this.textureType = Texture.TYPE_DEFAULT
    this.unpackAlpha = true
    this._fromData = true
    this.name = 'unknown'

    this._glDataType = -1
    this._glInternalFormat = -1
    this._glDataFormat = -1

    if (options) {
      this.name = options.name || this.name
      if (options.isDepthTexture) {
        this.textureType = Texture.TYPE_DEPTH
      }
      if (options.isFloatingPointTexture === true) this.textureType = Texture.TYPE_FLOAT

      if ('textureType' in options) this.textureType = options.textureType
      if ('filter' in options) this.filter = options.filter
      if ('wrap' in options) this.wrap = options.wrap
      if ('unpackAlpha' in options) this.unpackAlpha = options.unpackAlpha
      if ('flip' in options) this.flip = options.flip
      if ('shadowMap' in options) this.shadowMap = options.shadowMap
      if ('anisotropic' in options) this.anisotropic = options.anisotropic
    } else {
      options = {}
    }

    if (!options.pixelFormat && options.isFloatingPointTexture) this.pixelFormat = Texture.PFORMATSTR_RGBA32F

    if (this.textureType == Texture.TYPE_DEPTH) this.pixelFormat = Texture.PFORMATSTR_DEPTH

    if (!options.width) options.width = DEFAULT_TEXTURE_SIZE
    if (!options.height) options.height = DEFAULT_TEXTURE_SIZE

    this._cgl.profileData.profileTextureNew++

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat))
    this._cgl.profileData.addHeavyEvent('texture created', this.name, options.width + 'x' + options.height)

    this.setSize(options.width, options.height)
    this.getInfoOneLine()
  }

  Texture.prototype.isFloatingPoint = function () {
    return Texture.isPixelFormatFloat(this.pixelFormat)
  }

  /**
   * returns true if otherTexture has same options (width/height/filter/wrap etc)
   * @function compareSettings
   * @memberof Texture
   * @instance
   * @param {Texture} otherTexture
   * @returns {Boolean}
   */
  Texture.prototype.compareSettings = function (tex) {
    // if (!tex) { this._log.warn("compare: no tex"); return false; }
    // if (tex.width != this.width) this._log.warn("tex.width not equal", tex.width, this.width);
    // if (tex.height != this.height) this._log.warn("tex.height not equal", tex.height, this.height);
    // if (tex.filter != this.filter) this._log.warn("tex.filter not equal");
    // if (tex.wrap != this.wrap) this._log.warn("tex.wrap not equal");
    // if (tex.textureType != this.textureType) this._log.warn("tex.textureType not equal");
    // if (tex.unpackAlpha != this.unpackAlpha) this._log.warn("tex.unpackAlpha not equal");
    // if (tex.anisotropic != this.anisotropic) this._log.warn("tex.anisotropic not equal");
    // if (tex.shadowMap != this.shadowMap) this._log.warn("tex.shadowMap not equal");
    // if (tex.texTarget != this.texTarget) this._log.warn("tex.texTarget not equal");
    // if (tex.flip != this.flip) this._log.warn("tex.flip not equal");

    if (!tex) return false
    return (
      tex.width == this.width &&
      tex.height == this.height &&
      tex.filter == this.filter &&
      tex.wrap == this.wrap &&
      tex.textureType == this.textureType &&
      tex.unpackAlpha == this.unpackAlpha &&
      tex.anisotropic == this.anisotropic &&
      tex.shadowMap == this.shadowMap &&
      tex.texTarget == this.texTarget &&
      tex.flip == this.flip
    )
  }

  /**
   * returns a new texture with the same settings (does not copy texture itself)
   * @function clone
   * @memberof Texture
   * @instance
   * @returns {Texture}
   */
  Texture.prototype.clone = function () {
    const newTex = new Texture(this._cgl, {
      name: this.name,
      filter: this.filter,
      anisotropic: this.anisotropic,
      wrap: this.wrap,
      textureType: this.textureType,
      pixelFormat: this.pixelFormat,
      unpackAlpha: this.unpackAlpha,
      flip: this.flip,
      width: this.width,
      height: this.height
    })

    this._cgl.profileData.addHeavyEvent('texture created', this.name, this.width + 'x' + this.height)

    if (!this.compareSettings(newTex)) {
      this._log.error('Cloned texture settings do not compare!')
      this._log.error(this)
      this._log.error(newTex)
    }

    return newTex
  }

  Texture.prototype.setFormat = function (o) {
    this.pixelFormat = o.pixelFormat
    this._glDataFormat = o.glDataFormat
    this._glInternalFormat = o.glInternalFormat
    this._glDataType = o.glDataType
  }

  Texture.setUpGlPixelFormat = function (cgl, pixelFormatStr) {
    const o = {}

    if (!pixelFormatStr) {
      console.log('no pixelformatstr!')
      console.log(new Error().stack)
      pixelFormatStr = Texture.PFORMATSTR_RGBA8UB
    }

    o.pixelFormatBase = pixelFormatStr

    o.pixelFormat = pixelFormatStr
    o.glDataType = cgl.gl.UNSIGNED_BYTE
    o.glInternalFormat = cgl.gl.RGBA8
    o.glDataFormat = cgl.gl.RGBA

    let floatDatatype = cgl.gl.FLOAT

    if (cgl.glUseHalfFloatTex) {
      if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) pixelFormatStr = Texture.PFORMATSTR_RGBA16F
      if (pixelFormatStr == Texture.PFORMATSTR_RG32F) pixelFormatStr = Texture.PFORMATSTR_RG16F
      if (pixelFormatStr == Texture.PFORMATSTR_R32F) pixelFormatStr = Texture.PFORMATSTR_R16F
    }

    if (pixelFormatStr.contains('16bit')) {
      if (cgl.glVersion == 2) {
        // cgl.enableExtension("OES_texture_half_float");
        const hasExt = cgl.enableExtension('EXT_color_buffer_half_float')

        if (!hasExt) {
          console.warn('no 16bit extension, fallback to 32bit', pixelFormatStr)
          // fallback to 32 bit?
          if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) pixelFormatStr = Texture.PFORMATSTR_RGBA32F
          if (pixelFormatStr == Texture.PFORMATSTR_RGB16F) pixelFormatStr = Texture.PFORMATSTR_RGB32F
          if (pixelFormatStr == Texture.PFORMATSTR_RG16F) pixelFormatStr = Texture.PFORMATSTR_RG32F
          if (pixelFormatStr == Texture.PFORMATSTR_R16F) pixelFormatStr = Texture.PFORMATSTR_R32F
        } else {
          floatDatatype = cgl.gl.HALF_FLOAT
        }
      }
    }

    if (cgl.glVersion == 1) {
      o.glInternalFormat = cgl.gl.RGBA

      if (
        pixelFormatStr == Texture.PFORMATSTR_RGBA16F ||
        pixelFormatStr == Texture.PFORMATSTR_RG16F ||
        pixelFormatStr == Texture.PFORMATSTR_R16F
      ) {
        const ext = cgl.enableExtension('OES_texture_half_float')
        if (!ext) throw new Error('no half float texture extension')

        floatDatatype = ext.HALF_FLOAT_OES
      }
    }

    if (pixelFormatStr == Texture.PFORMATSTR_RGBA8UB) {
    } else if (pixelFormatStr == Texture.PFORMATSTR_RGB565) {
      o.glInternalFormat = cgl.gl.RGB565
      o.glDataFormat = cgl.gl.RGB
    } else if (pixelFormatStr == Texture.PFORMATSTR_R8UB) {
      o.glInternalFormat = cgl.gl.R8
      o.glDataFormat = cgl.gl.RED
    } else if (pixelFormatStr == Texture.PFORMATSTR_RG8UB) {
      o.glInternalFormat = cgl.gl.RG8
      o.glDataFormat = cgl.gl.RG
    } else if (pixelFormatStr == Texture.PFORMATSTR_RGB8UB) {
      o.glInternalFormat = cgl.gl.RGB8
      o.glDataFormat = cgl.gl.RGB
    } else if (pixelFormatStr == Texture.PFORMATSTR_SRGBA8) {
      o.glInternalFormat = cgl.gl.SRGB8_ALPHA8
    } else if (pixelFormatStr == Texture.PFORMATSTR_R32F) {
      o.glInternalFormat = cgl.gl.R32F
      o.glDataFormat = cgl.gl.RED
      o.glDataType = floatDatatype
    } else if (pixelFormatStr == Texture.PFORMATSTR_R16F) {
      o.glInternalFormat = cgl.gl.R16F
      o.glDataType = floatDatatype
      o.glDataFormat = cgl.gl.RED
    } else if (pixelFormatStr == Texture.PFORMATSTR_RG16F) {
      o.glInternalFormat = cgl.gl.RG16F
      o.glDataType = floatDatatype
      o.glDataFormat = cgl.gl.RG
    } else if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) {
      if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA
      else o.glInternalFormat = cgl.gl.RGBA16F
      o.glDataType = floatDatatype
    } else if (pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F) {
      o.glInternalFormat = cgl.gl.R11F_G11F_B10F
      o.glDataType = floatDatatype
      o.glDataFormat = cgl.gl.RGB
    } else if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) {
      if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA
      else o.glInternalFormat = cgl.gl.RGBA32F
      o.glDataType = floatDatatype
    } else if (pixelFormatStr == Texture.PFORMATSTR_DEPTH) {
      if (cgl.glVersion == 1) {
        o.glInternalFormat = cgl.gl.DEPTH_COMPONENT
        o.glDataType = cgl.gl.UNSIGNED_SHORT
        o.glDataFormat = cgl.gl.DEPTH_COMPONENT
      } else {
        o.glInternalFormat = cgl.gl.DEPTH_COMPONENT32F
        o.glDataType = cgl.gl.FLOAT
        o.glDataFormat = cgl.gl.DEPTH_COMPONENT
      }
    } else {
      console.log('unknown pixelformat ', pixelFormatStr)
    }

    /// //////

    if (pixelFormatStr.contains('32bit') || pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F) {
      if (cgl.glVersion == 2) cgl.enableExtension('EXT_color_buffer_float')
      if (cgl.glVersion == 2) cgl.enableExtension('EXT_float_blend')

      cgl.enableExtension('OES_texture_float_linear') // yes, i am sure, this is a webgl 1 and 2 ext
    }

    o.numColorChannels = 1
    if (pixelFormatStr.startsWith('R')) o.numColorChannels = 1
    if (pixelFormatStr.startsWith('RG')) o.numColorChannels = 2
    if (pixelFormatStr.startsWith('RGB')) o.numColorChannels = 3
    if (pixelFormatStr.startsWith('RGBA')) o.numColorChannels = 4

    // console.log(pixelFormatStr, this.name);

    if (!o.glDataType || !o.glInternalFormat || !o.glDataFormat)
      console.log('pixelformat wrong ?!', pixelFormatStr, o.glDataType, o.glInternalFormat, o.glDataFormat, this)

    return o
  }

  /**
   * set pixel size of texture
   * @function setSize
   * @memberof Texture
   * @instance
   * @param {Number} width
   * @param {Number} height
   */
  Texture.prototype.setSize = function (w, h) {
    if (this._cgl.aborted) return
    if (w != w || w <= 0 || !w) w = DEFAULT_TEXTURE_SIZE
    if (h != h || h <= 0 || !h) h = DEFAULT_TEXTURE_SIZE

    if (w > this._cgl.maxTexSize || h > this._cgl.maxTexSize)
      this._log.error('texture size too big! ' + w + 'x' + h + ' / max: ' + this._cgl.maxTexSize)

    w = Math.min(w, this._cgl.maxTexSize)
    h = Math.min(h, this._cgl.maxTexSize)

    w = Math.floor(w)
    h = Math.floor(h)
    if (this.width == w && this.height == h) return

    w = this._cgl.checkTextureSize(w)
    h = this._cgl.checkTextureSize(h)

    this.width = w
    this.height = h
    this.deleted = false

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat))

    this.shortInfoString = this.getInfoOneLine() // w + "x" + h + "";

    this._cgl.gl.bindTexture(this.texTarget, this.tex)
    this._cgl.profileData.profileTextureResize++

    const uarr = null

    this._cgl.gl.texImage2D(
      this.texTarget,
      0,
      this._glInternalFormat,
      w,
      h,
      0,
      this._glDataFormat,
      this._glDataType,
      uarr
    )

    this._setFilter()

    this.updateMipMap()

    this._cgl.gl.bindTexture(this.texTarget, null)
  }

  /**
   * @function initFromData
   * @memberof Texture
   * @instance
   * @description create texturem from rgb data
   * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
   * @param {Number} width
   * @param {Number} height
   * @param {Number} filter
   * @param {Number} wrap
   */
  Texture.prototype.initFromData = function (data, w, h, filter, wrap) {
    this.filter = filter
    this.wrap = wrap
    if (filter == undefined) this.filter = Texture.FILTER_LINEAR
    if (wrap == undefined) this.wrap = Texture.WRAP_CLAMP_TO_EDGE
    this.width = w
    this.height = h
    this._fromData = true
    this.deleted = false

    if (this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize) {
      const t = CGL1.Texture.getTempTexture(this._cgl)
      this.width = t.width
      this.height = t.height
      this.tex = t.tex
      this._log.error('[cgl_texture] texture size to big!!!', this.width, this.height, this._cgl.maxTexSize)
      return
    }

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip)

    this._cgl.gl.bindTexture(this.texTarget, this.tex)

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat))

    this._cgl.gl.texImage2D(
      this.texTarget,
      0,
      this._glInternalFormat,
      w,
      h,
      0,
      this._glDataFormat,
      this._glDataType,
      data
    )

    this._setFilter()
    this.updateMipMap()

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false)
    this._cgl.gl.bindTexture(this.texTarget, null)
  }

  Texture.prototype.updateMipMap = function () {
    if ((this._cgl.glVersion == 2 || this.isPowerOfTwo()) && this.filter == Texture.FILTER_MIPMAP) {
      this._cgl.gl.generateMipmap(this.texTarget)
      this._cgl.profileData.profileGenMipMap++
    }
  }

  /**
   * set texture data from an image/canvas object
   * @function initTexture
   * @memberof Texture
   * @instance
   * @param {Object} image
   * @param {Number} filter
   */
  Texture.prototype.initTexture = function (img, filter) {
    this._cgl.printError('before initTexture')
    this._cgl.checkFrameStarted('texture inittexture')
    this._fromData = false

    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha)
    if (img.width || img.videoWidth) this.width = img.videoWidth || img.width
    if (img.height || img.videoHeight) this.height = img.videoHeight || img.height

    if (filter !== undefined) this.filter = filter // todo: can we remove this filter param?

    if (img.height > this._cgl.maxTexSize || img.width > this._cgl.maxTexSize) {
      const t = CGL1.Texture.getTempTexture(this._cgl)
      this.width = t.width
      this.height = t.height
      this.tex = t.tex
      this._log.error('[cgl_texture] texture size to big!!!', img.width, img.height, this._cgl.maxTexSize)
      return
    }

    // console.log("loaded texture", img.width, img.height);

    this._cgl.gl.bindTexture(this.texTarget, this.tex)

    this.deleted = false
    this.flipped = !this.flip
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped)

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat))

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, this._glDataFormat, this._glDataType, img)
    // this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, img);

    // if (this._cgl.printError("[cgl_texture] init " + this.name));

    this._setFilter()
    this.updateMipMap()

    // if (this._cgl.printError("[cgl_texture] init2"));

    this._cgl.gl.bindTexture(this.texTarget, null)
    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false)
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false)

    this.getInfoOneLine()
    this._cgl.printError('initTexture')
  }

  /**
   * delete texture. use this when texture is no longer needed
   * @function delete
   * @memberof Texture
   * @instance
   */
  Texture.prototype.dispose = Texture.prototype.delete = function () {
    if (this.loading) {
      // cant delete texture when still loading
      // setTimeout(this.delete.bind(this), 50);
      return
    }

    this.deleted = true
    this.width = 0
    this.height = 0
    this._cgl.profileData.profileTextureDelete++
    this._cgl.gl.deleteTexture(this.tex)
    this.image = null

    this.tex = null
  }

  /**
   * @function isPowerOfTwo
   * @memberof Texture
   * @instance
   * @description return true if texture width and height are both power of two
   * @return {Boolean}
   */
  Texture.prototype.isPowerOfTwo = function () {
    return Texture.isPowerOfTwo(this.width) && Texture.isPowerOfTwo(this.height)
  }

  Texture.prototype.printInfo = function () {
    console.log(this.getInfo())
  }

  Texture.prototype.getInfoReadable = function () {
    const info = this.getInfo()
    let html = ''

    info.name = info.name.substr(0, info.name.indexOf('?rnd='))

    for (const i in info) {
      html += '* ' + i + ':  **' + info[i] + '**\n'
    }

    return html
  }

  Texture.prototype.getInfoOneLine = function () {
    let txt = '' + this.width + 'x' + this.height
    txt += ' '
    // if (this.textureType === CGL1.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    // if (this.textureType === CGL1.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += this.pixelFormat

    if (this.filter === CGL1.Texture.FILTER_NEAREST) txt += ' nearest'
    if (this.filter === CGL1.Texture.FILTER_LINEAR) txt += ' linear'
    if (this.filter === CGL1.Texture.FILTER_MIPMAP) txt += ' mipmap'

    if (this.wrap === CGL1.Texture.WRAP_CLAMP_TO_EDGE) txt += ' clamp'
    if (this.wrap === CGL1.Texture.WRAP_REPEAT) txt += ' repeat'
    if (this.wrap === CGL1.Texture.WRAP_MIRRORED_REPEAT) txt += ' repeatmir'

    this.shortInfoString = txt

    return txt
  }

  Texture.prototype.getInfoOneLineShort = function () {
    let txt = '' + this.width + 'x' + this.height
    // if (this.textureType === CGL1.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += ' '
    txt += this.pixelFormat

    this.shortInfoString = txt

    return txt
  }

  Texture.prototype.getInfo = function () {
    return Texture.getTexInfo(this)
  }

  Texture.prototype._setFilter = function () {
    this._cgl.printError('before _setFilter')

    if (!this._fromData) {
      this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha)
    }

    if (this.shadowMap) {
      this._cgl.gl.texParameteri(
        this._cgl.gl.TEXTURE_2D,
        this._cgl.gl.TEXTURE_COMPARE_MODE,
        this._cgl.gl.COMPARE_REF_TO_TEXTURE
      )
      this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)
    }

    if (this.textureType == Texture.TYPE_FLOAT && this.filter == Texture.FILTER_MIPMAP) {
      this.filter = Texture.FILTER_LINEAR
      this._log.stack('texture: HDR and mipmap filtering at the same time is not possible')
    }

    if (this._cgl.glVersion == 1 && !this.isPowerOfTwo()) {
      this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST)
      this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST)

      this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE)
      this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE)

      this.filter = Texture.FILTER_NEAREST
      this.wrap = Texture.WRAP_CLAMP_TO_EDGE
    } else {
      if (this.wrap == Texture.WRAP_CLAMP_TO_EDGE) {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE)
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE)
      } else if (this.wrap == Texture.WRAP_REPEAT) {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT)
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT)
      } else if (this.wrap == Texture.WRAP_MIRRORED_REPEAT) {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT)
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)
      }

      if (this.filter == Texture.FILTER_NEAREST) {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST)
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST)
      } else if (this.filter == Texture.FILTER_LINEAR) {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR)
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR)
      } else if (this.filter == Texture.FILTER_MIPMAP) {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR)
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR)
      } else {
        this._log.log('unknown texture filter!', this.filter)
        throw new Error('unknown texture filter!' + this.filter)
      }

      if (this.anisotropic) {
        const ext = this._cgl.enableExtension('EXT_texture_filter_anisotropic')

        if (this._cgl.maxAnisotropic) {
          const aniso = Math.min(this._cgl.maxAnisotropic, this.anisotropic)
          this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, aniso)
        }
      }
    }
    this.getInfoOneLine()
    this._cgl.printError('_setFilter')
  }

  /**
   * @function load
   * @static
   * @memberof Texture
   * @description load an image from an url
   * @param {Context} cgl
   * @param {String} url
   * @param {Function} onFinished
   * @param {Object} options
   * @return {Texture}
   */
  Texture.load = function (cgl, url, finishedCallback, settings) {
    if (!url) return finishedCallback({ error: true })
    let loadingId = null
    if (!cgl.patch.loading.existByName(url)) loadingId = cgl.patch.loading.start('texture', url)

    const texture = new Texture(cgl)
    texture.name = url

    // texture.pixelFormat = Texture.PFORMATSTR_;

    if (cgl.patch.isEditorMode())
      gui.jobs().start({ id: 'loadtexture' + loadingId, title: 'loading texture ' + CABLES1.basename(url) })

    texture.image = new Image()
    texture.image.crossOrigin = 'anonymous'
    texture.loading = true

    if (settings && settings.hasOwnProperty('filter')) texture.filter = settings.filter
    if (settings && settings.hasOwnProperty('flip')) texture.flip = settings.flip
    if (settings && settings.hasOwnProperty('wrap')) texture.wrap = settings.wrap
    if (settings && settings.hasOwnProperty('anisotropic')) texture.anisotropic = settings.anisotropic
    if (settings && settings.hasOwnProperty('unpackAlpha')) texture.unpackAlpha = settings.unpackAlpha
    if (settings && settings.hasOwnProperty('pixelFormat')) texture.pixelFormat = settings.pixelFormat

    texture.image.onabort = texture.image.onerror = (e) => {
      console.warn('[cgl.texture.load] error loading texture', url, e)
      texture.loading = false
      if (loadingId) cgl.patch.loading.finished(loadingId)
      const error = { error: true }
      if (finishedCallback) finishedCallback(error, texture)
      if (cgl.patch.isEditorMode()) gui.jobs().finish('loadtexture' + loadingId)
    }

    texture.image.onload = function (e) {
      cgl.addNextFrameOnceCallback(() => {
        texture.initTexture(texture.image)
        if (loadingId) cgl.patch.loading.finished(loadingId)
        texture.loading = false
        if (cgl.patch.isEditorMode()) gui.jobs().finish('loadtexture' + loadingId)

        if (finishedCallback) finishedCallback(null, texture)
      })
    }
    texture.image.src = url

    return texture
  }

  /**
   * @static
   * @function getTempTexture
   * @memberof Texture
   * @description returns the default temporary texture (grey diagonal stipes)
   * @param {Context} cgl
   * @return {Texture}
   */
  Texture.getTempTexture = function (cgl) {
    if (!cgl) console.error('[getTempTexture] no cgl!')
    if (!cgl.tempTexture) cgl.tempTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT)
    return cgl.tempTexture
  }

  /**
   * @static
   * @function getErrorTexture
   * @memberof Texture
   * @description returns the default temporary texture (grey diagonal stipes)
   * @param {Context} cgl
   * @return {Texture}
   */
  Texture.getErrorTexture = function (cgl) {
    if (!cgl) console.error('[getTempTexture] no cgl!')
    if (!cgl.errorTexture)
      cgl.errorTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT, 1, 0.2, 0.2)
    return cgl.errorTexture
  }

  /**
   * @function getEmptyTexture
   * @memberof Texture
   * @instance
   * @description returns a reference to a small empty (transparent) texture
   * @return {Texture}
   */
  Texture.getEmptyTexture = function (cgl, fp) {
    if (fp) return Texture.getEmptyTextureFloat(cgl)
    if (!cgl) console.error('[getEmptyTexture] no cgl!')
    if (cgl.tempTextureEmpty) return cgl.tempTextureEmpty

    cgl.tempTextureEmpty = new Texture(cgl, { name: 'emptyTexture' })
    const data = new Uint8Array(8 * 8 * 4).fill(0)
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0

    cgl.tempTextureEmpty.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT)

    return cgl.tempTextureEmpty
  }

  /**
   * @function getEmptyTextureFloat
   * @memberof Texture
   * @instance
   * @description returns a reference to a small empty (transparent) 32bit texture
   * @return {Texture}
   */
  Texture.getEmptyTextureFloat = function (cgl) {
    if (!cgl) console.error('[getEmptyTextureFloat] no cgl!')
    if (cgl.tempTextureEmptyFloat) return cgl.tempTextureEmptyFloat

    cgl.tempTextureEmptyFloat = new Texture(cgl, { name: 'emptyTexture', isFloatingPointTexture: true })
    const data = new Float32Array(8 * 8 * 4).fill(1)
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0

    cgl.tempTextureEmptyFloat.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT)

    return cgl.tempTextureEmptyFloat
  }

  /**
   * @function getRandomTexture
   * @memberof Texture
   * @static
   * @description returns a reference to a random texture
   * @return {Texture}
   */
  Texture.getRandomTexture = function (cgl) {
    if (!cgl) console.error('[getRandomTexture] no cgl!')
    if (cgl.randomTexture) return cgl.randomTexture

    const size = 256
    const data = new Uint8Array(size * size * 4)

    for (let x = 0; x < size * size; x++) {
      data[x * 4 + 0] = Math.random() * 255
      data[x * 4 + 1] = Math.random() * 255
      data[x * 4 + 2] = Math.random() * 255
      data[x * 4 + 3] = 255
    }

    cgl.randomTexture = new Texture(cgl)
    cgl.randomTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT)

    return cgl.randomTexture
  }

  /**
   * @function getRandomFloatTexture
   * @memberof Texture
   * @static
   * @description returns a reference to a texture containing random numbers between -1 and 1
   * @return {Texture}
   */
  Texture.getRandomFloatTexture = function (cgl) {
    if (!cgl) console.error('[getRandomTexture] no cgl!')
    if (cgl.getRandomFloatTexture) return cgl.getRandomFloatTexture

    const size = 256
    const data = new Float32Array(size * size * 4)

    for (let x = 0; x < size * size; x++) {
      data[x * 4 + 0] = (Math.random() - 0.5) * 2.0
      data[x * 4 + 1] = (Math.random() - 0.5) * 2.0
      data[x * 4 + 2] = (Math.random() - 0.5) * 2.0
      data[x * 4 + 3] = 1
    }

    cgl.getRandomFloatTexture = new Texture(cgl, { isFloatingPointTexture: true })
    cgl.getRandomFloatTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT)

    return cgl.getRandomFloatTexture
  }

  /**
   * @function getBlackTexture
   * @memberof Texture
   * @static
   * @description returns a reference to a black texture
   * @return {Texture}
   */
  Texture.getBlackTexture = function (cgl) {
    if (!cgl) this._log.error('[getBlackTexture] no cgl!')
    if (cgl.blackTexture) return cgl.blackTexture

    const size = 8
    const data = new Uint8Array(size * size * 4)

    for (let x = 0; x < size * size; x++) {
      data[x * 4 + 0] = data[x * 4 + 1] = data[x * 4 + 2] = 0
      data[x * 4 + 3] = 255
    }

    cgl.blackTexture = new Texture(cgl)
    cgl.blackTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT)

    return cgl.blackTexture
  }

  /**
   * @function getEmptyCubemapTexture
   * @memberof Texture
   * @static
   * @description returns an empty cubemap texture with rgba = [0, 0, 0, 0]
   * @return {Texture}
   */
  Texture.getEmptyCubemapTexture = function (cgl) {
    const faces = [
      cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
      cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
      cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
      cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
      cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
      cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ]

    const tex = cgl.gl.createTexture()
    const target = cgl.gl.TEXTURE_CUBE_MAP
    const filter = Texture.FILTER_NEAREST
    const wrap = Texture.WRAP_CLAMP_TO_EDGE
    const width = 8
    const height = 8

    cgl.profileData.profileTextureNew++

    cgl.gl.bindTexture(target, tex)
    cgl.profileData.profileTextureResize++

    for (let i = 0; i < 6; i += 1) {
      const data = new Uint8Array(8 * 8 * 4)

      cgl.gl.texImage2D(faces[i], 0, cgl.gl.RGBA, 8, 8, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, data)
      cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MAG_FILTER, cgl.gl.NEAREST)
      cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MIN_FILTER, cgl.gl.NEAREST)

      cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_S, cgl.gl.CLAMP_TO_EDGE)
      cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_T, cgl.gl.CLAMP_TO_EDGE)
    }

    cgl.gl.bindTexture(target, null)

    return {
      id: CABLES1.uuid(),
      tex: tex,
      cubemap: tex,
      width: width,
      height: height,
      filter: filter,
      wrap: wrap,
      unpackAlpha: true,
      flip: true,
      _fromData: true,
      name: 'emptyCubemapTexture',
      anisotropic: 0
    }
  }

  /**
   * @static
   * @function getTempGradientTexture
   * @memberof Texture
   * @description returns a gradient texture from black to white
   * @param {Context} cgl
   * @return {Texture}
   */
  Texture.getTempGradientTexture = function (cgl) {
    if (!cgl) console.error('[getTempGradientTexture] no cgl!')

    if (cgl.tempTextureGradient) return cgl.tempTextureGradient
    const temptex = new Texture(cgl)
    const size = 256
    const data = new Uint8Array(size * size * 4) // .fill(0);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        data[(x + y * size) * 4 + 0] = data[(x + y * size) * 4 + 1] = data[(x + y * size) * 4 + 2] = 255 - y
        data[(x + y * size) * 4 + 3] = 255
      }
    }

    temptex.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT)
    cgl.tempTextureGradient = temptex
    return temptex
  }

  Texture.getTemporaryTexture = function (cgl, size, filter, wrap, r, g, b) {
    if (r === undefined) r = 1
    if (g === undefined) g = 1
    if (b === undefined) b = 1
    const temptex = new Texture(cgl)
    const arr = []
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 64 < 32) {
          arr.push((200 + (y / size) * 25 + (x / size) * 25) * r)
          arr.push((200 + (y / size) * 25 + (x / size) * 25) * g)
          arr.push((200 + (y / size) * 25 + (x / size) * 25) * b)
        } else {
          arr.push((40 + (y / size) * 25 + (x / size) * 25) * r)
          arr.push((40 + (y / size) * 25 + (x / size) * 25) * g)
          arr.push((40 + (y / size) * 25 + (x / size) * 25) * b)
        }
        arr.push(255)
      }
    }

    const data = new Uint8Array(arr)
    temptex.initFromData(data, size, size, filter, wrap)

    return temptex
  }

  /**
   * @static
   * @function createFromImage
   * @memberof Texture
   * @description create texturem from image data (e.g. image or canvas)
   * @param {Context} cgl
   * @param {Object} image
   * @param {Object} options
   */
  Texture.createFromImage = function (cgl, img, options) {
    options = options || {}
    const texture = new Texture(cgl, options)
    texture.flip = false
    texture.image = img
    texture.width = img.videoWidth || img.width || 8
    texture.height = img.videoHeight || img.height || 8
    if (options.hasOwnProperty('wrap')) texture.wrap = options.wrap

    console.log('createFromImage', options)
    texture.initTexture(img, options.filter)

    return texture
  }

  // deprecated!
  Texture.fromImage = function (cgl, img, filter, wrap) {
    console.error('deprecated texture from image...')

    const texture = new Texture(cgl)
    texture.flip = false
    if (filter) texture.filter = filter
    if (wrap) texture.wrap = wrap
    texture.image = img
    texture.initTexture(img)
    return texture
  }

  /**
   * @static
   * @function isPowerOfTwo
   * @memberof Texture
   * @description returns true if x is power of two
   * @param {Number} x
   * @return {Boolean}
   */
  Texture.isPowerOfTwo = function (x) {
    return (
      x == 1 ||
      x == 2 ||
      x == 4 ||
      x == 8 ||
      x == 16 ||
      x == 32 ||
      x == 64 ||
      x == 128 ||
      x == 256 ||
      x == 512 ||
      x == 1024 ||
      x == 2048 ||
      x == 4096 ||
      x == 8192 ||
      x == 16384
    )
  }

  Texture.getTexInfo = function (tex) {
    const obj = {}

    obj.name = tex.name
    obj['power of two'] = tex.isPowerOfTwo()
    obj.size = tex.width + ' x ' + tex.height

    let targetString = tex.texTarget
    if (tex.texTarget == tex._cgl.gl.TEXTURE_2D) targetString = 'TEXTURE_2D'
    obj.target = targetString

    obj.unpackAlpha = tex.unpackAlpha

    if (tex.cubemap) obj.cubemap = true

    if (tex.textureType == Texture.TYPE_FLOAT) obj.textureType = 'TYPE_FLOAT'
    if (tex.textureType == Texture.TYPE_HALF_FLOAT) obj.textureType = 'TYPE_HALF_FLOAT'
    else if (tex.textureType == Texture.TYPE_DEPTH) obj.textureType = 'TYPE_DEPTH'
    else if (tex.textureType == Texture.TYPE_DEFAULT) obj.textureType = 'TYPE_DEFAULT'
    else obj.textureType = 'UNKNOWN ' + this.textureType

    if (tex.wrap == Texture.WRAP_CLAMP_TO_EDGE) obj.wrap = 'CLAMP_TO_EDGE'
    else if (tex.wrap == Texture.WRAP_REPEAT) obj.wrap = 'WRAP_REPEAT'
    else if (tex.wrap == Texture.WRAP_MIRRORED_REPEAT) obj.wrap = 'WRAP_MIRRORED_REPEAT'
    else obj.wrap = 'UNKNOWN'

    if (tex.filter == Texture.FILTER_NEAREST) obj.filter = 'FILTER_NEAREST'
    else if (tex.filter == Texture.FILTER_LINEAR) obj.filter = 'FILTER_LINEAR'
    else if (tex.filter == Texture.FILTER_MIPMAP) obj.filter = 'FILTER_MIPMAP'
    else obj.filter = 'UNKNOWN'

    obj.pixelFormat = tex.pixelFormat || 'unknown'

    return obj
  }

  Texture.FILTER_NEAREST = 0
  Texture.FILTER_LINEAR = 1
  Texture.FILTER_MIPMAP = 2

  Texture.WRAP_REPEAT = 0
  Texture.WRAP_MIRRORED_REPEAT = 1
  Texture.WRAP_CLAMP_TO_EDGE = 2

  Texture.TYPE_DEFAULT = 0
  Texture.TYPE_DEPTH = 1
  Texture.TYPE_FLOAT = 2

  Texture.PFORMATSTR_RGB565 = 'RGB 5/6/5bit ubyte'

  Texture.PFORMATSTR_R8UB = 'R 8bit ubyte'
  Texture.PFORMATSTR_RG8UB = 'RG 8bit ubyte'
  Texture.PFORMATSTR_RGB8UB = 'RGB 8bit ubyte'
  Texture.PFORMATSTR_RGBA8UB = 'RGBA 8bit ubyte'

  Texture.PFORMATSTR_SRGBA8 = 'SRGBA 8bit ubyte'

  Texture.PFORMATSTR_R11FG11FB10F = 'RGB 11/11/10bit float'

  Texture.PFORMATSTR_R16F = 'R 16bit float'
  Texture.PFORMATSTR_RG16F = 'RG 16bit float'
  Texture.PFORMATSTR_RGB16F = 'RGB 16bit float'
  Texture.PFORMATSTR_RGBA16F = 'RGBA 16bit float'

  Texture.PFORMATSTR_R32F = 'R 32bit float'
  Texture.PFORMATSTR_RG32F = 'RG 32bit float'
  Texture.PFORMATSTR_RGB32F = 'RGB 32bit float'
  Texture.PFORMATSTR_RGBA32F = 'RGBA 32bit float'

  Texture.PFORMATSTR_DEPTH = 'DEPTH'

  Texture.PIXELFORMATS = [
    Texture.PFORMATSTR_RGB565,

    Texture.PFORMATSTR_R8UB,
    Texture.PFORMATSTR_RG8UB,
    Texture.PFORMATSTR_RGB8UB,
    Texture.PFORMATSTR_RGBA8UB,

    Texture.PFORMATSTR_SRGBA8,

    Texture.PFORMATSTR_R11FG11FB10F,
    Texture.PFORMATSTR_R16F,
    Texture.PFORMATSTR_RG16F,
    Texture.PFORMATSTR_RGBA16F,

    Texture.PFORMATSTR_R32F,
    Texture.PFORMATSTR_RGBA32F
  ]

  Texture.isPixelFormatFloat = (pxlfrmt) => {
    return (pxlfrmt || '').contains('float')
  }

  Texture.isPixelFormatHalfFloat = (pxlfrmt) => {
    return (pxlfrmt || '').contains('float') && (pxlfrmt || '').contains('16bit')
  } // CONCATENATED MODULE: ./src/core/cg/cg_boundingbox.js

  /**
   * bounding box
   * @class
   * @external CGL1
   * @namespace BoundingBox
   * @param {Geometry} geometry or bounding box
   */
  class BoundingBox {
    constructor(geom) {
      this._init()
      this._first = true
      this._wireMesh = null

      if (geom) this.apply(geom)
    }

    _init() {
      this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]
      this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]
      this._center = [0, 0, 0]
      this._size = [0, 0, 0]
      this._maxAxis = 0.0
      this._first = true
    }

    /**
     * get biggest number of maxX,maxY,maxZ
     * @type {Number}
     */
    get maxAxis() {
      return this._maxAxis || 1
    }

    /**
     * size of bounding box
     * @type {vec3}
     */
    get size() {
      return this._size
    }

    /**
     * center of bounding box
     * @type {vec3}
     */
    get center() {
      return this._center
    }

    /**
     * center x
     * @type {Number}
     */
    get x() {
      return this._center[0]
    }

    /**
     * center y
     * @type {Number}
     */
    get y() {
      return this._center[1]
    }

    /**
     * center z
     * @type {Number}
     */
    get z() {
      return this._center[2]
    }

    /**
     * minimum x
     * @type {Number}
     */
    get minX() {
      return this._min[0]
    }

    /**
     * minimum y
     * @type {Number}
     */
    get minY() {
      return this._min[1]
    }

    /**
     * minimum z
     * @type {Number}
     */
    get minZ() {
      return this._min[2]
    }

    /**
     * maximum x
     * @type {Number}
     */
    get maxX() {
      return this._max[0]
    }

    /**
     * maximum y
     * @type {Number}
     */
    get maxY() {
      return this._max[1]
    }

    /**
     * maximum z
     * @type {Number}
     */
    get maxZ() {
      return this._max[2]
    }

    apply(geom, mat) {
      if (!geom) {
        // console.warn("[boundingbox] no geom/vertices", geom);
        return
      }

      if (geom instanceof BoundingBox) {
        const bb = geom

        this.applyPos(bb.maxX, bb.maxY, bb.maxZ)
        this.applyPos(bb.minX, bb.minY, bb.minZ)
      } else {
        for (let i = 0; i < geom.vertices.length; i += 3)
          // if (geom.vertices[i] == geom.vertices[i] || geom.vertices[i] != null)
          // {
          // if(mat)
          // {
          this.applyPos(geom.vertices[i], geom.vertices[i + 1], geom.vertices[i + 2])
        // }
        // else
        // {
        //     this.applyPos(geom.vertices[i + 0],geom.vertices[i + 1],geom.vertices[i + 2]);
        // }
        // }
      }
      this.calcCenterSize()
    }

    /**
     * returns a copy of the bounding box
     * @function copy
     * @memberof BoundingBox
     * @instance
     */
    copy() {
      return new BoundingBox(this)
    }

    get changed() {
      return !(
        this._max[0] == -Number.MAX_VALUE &&
        this._max[1] == -Number.MAX_VALUE &&
        this._max[2] == -Number.MAX_VALUE
      )
    }

    applyPos(x, y, z) {
      if (
        x == Number.MAX_VALUE ||
        x == -Number.MAX_VALUE ||
        y == Number.MAX_VALUE ||
        y == -Number.MAX_VALUE ||
        z == Number.MAX_VALUE ||
        z == -Number.MAX_VALUE
      )
        return

      if (!CABLES1.UTILS.isNumeric(x) || !CABLES1.UTILS.isNumeric(y) || !CABLES1.UTILS.isNumeric(z)) return

      if (this._first) {
        this._max[0] = x
        this._max[1] = y
        this._max[2] = z

        this._min[0] = x
        this._min[1] = y
        this._min[2] = z
        this._first = false
        return
      }

      this._max[0] = Math.max(this._max[0], x)
      this._max[1] = Math.max(this._max[1], y)
      this._max[2] = Math.max(this._max[2], z)

      this._min[0] = Math.min(this._min[0], x)
      this._min[1] = Math.min(this._min[1], y)
      this._min[2] = Math.min(this._min[2], z)
    }

    calcCenterSize() {
      if (this._first) return
      // this._size[0]=Math.abs(this._min[0])+Math.abs(this._max[0]);
      // this._size[1]=Math.abs(this._min[1])+Math.abs(this._max[1]);
      // this._size[2]=Math.abs(this._min[2])+Math.abs(this._max[2]);
      this._size[0] = this._max[0] - this._min[0]
      this._size[1] = this._max[1] - this._min[1]
      this._size[2] = this._max[2] - this._min[2]

      this._center[0] = (this._min[0] + this._max[0]) / 2
      this._center[1] = (this._min[1] + this._max[1]) / 2
      this._center[2] = (this._min[2] + this._max[2]) / 2

      this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]))
    }

    mulMat4(m) {
      if (this._first) {
        this._max[0] = 0
        this._max[1] = 0
        this._max[2] = 0

        this._min[0] = 0
        this._min[1] = 0
        this._min[2] = 0
        this._first = false
      }
      vec3.transformMat4(this._max, this._max, m)
      vec3.transformMat4(this._min, this._min, m)
      this.calcCenterSize()
    }

    render(cgl, shader, op) {
      if (!this._wireMesh) this._wireMesh = new CGL1.WireCube(cgl)

      // console.log("bounding box render!");
      cgl.pushModelMatrix()
      mat4.translate(cgl.mMatrix, cgl.mMatrix, this._center)
      // this._wireMesh.render(cgl, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2);

      if (CABLES1.UI && op) {
        CABLES1.UI.OverlayMeshes.drawCube(op, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2)
      }

      cgl.popModelMatrix()
    }
  } // CONCATENATED MODULE: ./src/core/cg/cg_geom.js

  // import { vec2, vec3 } from "gl-matrix";

  /**
   * a geometry contains all information about a mesh, vertices, texturecoordinates etc. etc.
   * @external CGL1
   * @namespace Geometry
   * @param {String} name
   * @class
   * @example
   * // create a triangle with all attributes
   * const geom=new Geometry("triangle"),
   *
   * geom.vertices = [
   *      0.0,           sizeH.get(),  0.0,
   *     -sizeW.get(),  -sizeH.get(),  0.0,
   *      sizeW.get(),  -sizeH.get(),  0.0 ];
   *
   * geom.vertexNormals = [
   *      0.0,  0.0,  1.0,
   *      0.0,  0.0,  1.0,
   *      0.0,  0.0,  1.0 ];
   *
   * geom.tangents = [
   *     1,0,0,
   *     1,0,0,
   *     1,0,0 ];
   *
   * geom.biTangents = [
   *     0,1,0,
   *     0,1,0,
   *     0,1,0 ];
   *
   * geom.texCoords = [
   *      0.5,  0.0,
   *      1.0,  1.0,
   *      0.0,  1.0, ];
   *
   * geom.verticesIndices = [
   *     0, 1, 2 ];
   *
   */
  const Geometry = function (name) {
    this.name = name || 'unknown'
    this._log = new Logger('cgl_geometry')

    this.faceVertCount = 3
    this.glPrimitive = null
    this._attributes = {}

    this._vertices = []
    this.verticesIndices = []

    this.isGeometry = true

    this.morphTargets = []

    Object.defineProperty(this, 'vertices', {
      get() {
        return this._vertices
      },
      set(v) {
        this.setVertices(v)
      }
    })

    Object.defineProperty(this, 'texCoords', {
      get() {
        const att = this.getAttribute('texCoords')
        if (!att) return []
        return att.data
      },
      set(v) {
        this.setAttribute('texCoords', v, 2)
      }
    })

    Object.defineProperty(this, 'vertexNormals', {
      get() {
        const att = this.getAttribute('vertexNormals')
        if (!att) return []
        return att.data
      },
      set(v) {
        this.setAttribute('vertexNormals', v, 3)
      }
    })

    Object.defineProperty(this, 'tangents', {
      get() {
        const att = this.getAttribute('tangents')
        if (!att) return []
        return att.data
      },
      set(v) {
        this.setAttribute('tangents', v, 3)
      }
    })

    Object.defineProperty(this, 'biTangents', {
      get() {
        const att = this.getAttribute('biTangents')
        if (!att) return []
        return att.data
      },
      set(v) {
        this.setAttribute('biTangents', v, 3)
      }
    })

    Object.defineProperty(this, 'vertexColors', {
      get() {
        const att = this.getAttribute('vertexColors')
        if (!att) return []
        return att.data
      },
      set(v) {
        this.setAttribute('vertexColors', v, 4)
      }
    })
  }

  /**
   * @function clear
   * @memberof Geometry
   * @instance
   * @description clear all buffers/set them to length 0
   */
  Geometry.prototype.clear = function () {
    this._vertices = new Float32Array([])
    this.verticesIndices = []
    this.texCoords = new Float32Array([])
    this.vertexNormals = new Float32Array([])
    this.tangents = []
    this.biTangents = []
    this._attributes = {}
  }

  /**
 * @function getAttributes
   @memberof Geometry
 * @instance
 * @return {Array<Object>} returns array of attribute objects
 */
  Geometry.prototype.getAttributes = function () {
    return this._attributes
  }

  /**
   * @function getAttribute
   * @memberof Geometry
   * @instance
   * @param {String} name
   * @return {Object}
   */
  Geometry.prototype.getAttribute = function (name) {
    for (const i in this._attributes) {
      if (this._attributes[i].name == name) return this._attributes[i]
    }
    return null
  }

  /**
   * @function setAttribute
   * @description create an attribute
   * @memberof Geometry
   * @instance
   * @param {String} name
   * @param {Array} data
   * @param {Number} itemsize
   */
  Geometry.prototype.setAttribute = function (name, arr, itemSize) {
    let attrType = ''
    if (!itemSize || itemSize > 4) {
      console.log('itemsize wrong?', itemSize, name)
      this._log.stack('itemsize')

      itemSize = 3
    }

    if (itemSize == 1) attrType = 'float'
    else if (itemSize == 2) attrType = 'vec2'
    else if (itemSize == 3) attrType = 'vec3'
    else if (itemSize == 4) attrType = 'vec4'

    const attr = {
      name: name,
      data: arr,
      itemSize: itemSize,
      type: attrType
    }

    this._attributes[name] = attr
  }

  Geometry.prototype.copyAttribute = function (name, newgeom) {
    const attr = this.getAttribute(name)
    newgeom.setAttribute(name, new Float32Array(attr.data), attr.itemSize)
  }

  /**
   * @function setVertices
   * @memberof Geometry
   * @instance
   * @description set vertices
   * @param {Array|Float32Array} data [x,y,z,x,y,z,...]
   */
  Geometry.prototype.setVertices = function (arr) {
    if (arr instanceof Float32Array) this._vertices = arr
    else this._vertices = new Float32Array(arr)
  }

  /**
   * @function setTexCoords
   * @memberof Geometry
   * @instance
   * @description set texcoords
   * @param {Array|Float32Array} data [u,v,u,v,...]
   */
  Geometry.prototype.setTexCoords = function (arr) {
    if (arr instanceof Float32Array) this.texCoords = arr
    else this.texCoords = new Float32Array(arr)
  }

  // Geometry.prototype.testIndices = function ()
  // {
  //     var foundError = false;
  //     for (var i = 0; i < this.verticesIndices.length; i++)
  //     {
  //         if (this.verticesIndices[i * 3 + 0] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 1] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 2] >= this._vertices.length / 3)
  //         {
  //             foundError = true;
  //             console.log("index error!");
  //         }
  //     }
  // };

  // deprecated
  Geometry.prototype.calcNormals = function (smooth) {
    const options = { smooth: smooth }

    this.calculateNormals(options)
  }

  /**
   * @function flipNormals
   * @memberof Geometry
   * @description flip normals
   */
  Geometry.prototype.flipNormals = function (x, y, z) {
    let vec = vec3.create()

    if (x == undefined) x = 1
    if (y == undefined) y = 1
    if (z == undefined) z = 1

    for (let i = 0; i < this.vertexNormals.length; i += 3) {
      vec3.set(vec, this.vertexNormals[i + 0], this.vertexNormals[i + 1], this.vertexNormals[i + 2])

      vec[0] *= -x
      vec[1] *= -y
      vec[2] *= -z

      vec3.normalize(vec, vec)

      this.vertexNormals[i + 0] = vec[0]
      this.vertexNormals[i + 1] = vec[1]
      this.vertexNormals[i + 2] = vec[2]
    }
  }

  Geometry.prototype.getNumTriangles = function () {
    if (this.verticesIndices && this.verticesIndices.length) return this.verticesIndices.length / 3
    return this.vertices.length / 3
  }

  /**
   * @function flipVertDir
   * @memberof Geometry
   * @description flip order of vertices in geom faces
   */
  Geometry.prototype.flipVertDir = function () {
    const newInd = []
    newInd.length = this.verticesIndices.length
    for (let i = 0; i < this.verticesIndices.length; i += 3) {
      newInd[i] = this.verticesIndices[i + 2]
      newInd[i + 1] = this.verticesIndices[i + 1]
      newInd[i + 2] = this.verticesIndices[i]
    }
    this.verticesIndices = newInd
  }

  Geometry.prototype.setPointVertices = function (verts) {
    if (verts.length % 3 !== 0) {
      this._log.error('SetPointVertices: Array must be multiple of three.')
      return
    }

    if (!(verts instanceof Float32Array)) this.vertices = new Float32Array(verts)
    else this.vertices = verts

    if (!(this.texCoords instanceof Float32Array)) this.texCoords = new Float32Array((verts.length / 3) * 2)

    // this.texCoords.length=verts.length/3*2;
    this.verticesIndices.length = verts.length / 3
    // this.verticesIndices=[];

    for (let i = 0; i < verts.length / 3; i++) {
      this.verticesIndices[i] = i
      this.texCoords[i * 2] = 0
      this.texCoords[i * 2 + 1] = 0
    }
  }

  /**
   * merge a different geometry into the this geometry
   * @function merge
   * @param {Geometry} geom
   * @memberof Geometry
   * @instance
   */
  Geometry.prototype.merge = function (geom) {
    if (!geom) return

    if (this.isIndexed() != geom.isIndexed()) {
      if (this.isIndexed()) {
        this.unIndex(false, true)
      }
      if (geom.isIndexed()) {
        const g = geom.copy()
        g.unIndex(false, true)
        geom = g
      }
    }

    const oldIndizesLength = this.verticesIndices.length
    const vertLength = this._vertices.length / 3

    this.verticesIndices.length += geom.verticesIndices.length
    for (let i = 0; i < geom.verticesIndices.length; i++)
      this.verticesIndices[oldIndizesLength + i] = geom.verticesIndices[i] + vertLength

    this.vertices = UTILS.float32Concat(this._vertices, geom.vertices)
    this.texCoords = UTILS.float32Concat(this.texCoords, geom.texCoords)
    this.vertexNormals = UTILS.float32Concat(this.vertexNormals, geom.vertexNormals)
    this.tangents = UTILS.float32Concat(this.tangents, geom.tangents)
    this.biTangents = UTILS.float32Concat(this.biTangents, geom.biTangents)
  }

  /**
   * create a copy of the geometry
   * @function copy
   * @memberof Geometry
   * @instance
   */
  Geometry.prototype.copy = function () {
    const geom = new Geometry(this.name + ' copy')
    geom.faceVertCount = this.faceVertCount
    geom.glPrimitive = this.glPrimitive

    geom.setVertices(this._vertices.slice(0))

    if (this.verticesIndices) {
      geom.verticesIndices.length = this.verticesIndices.length
      for (let i = 0; i < this.verticesIndices.length; i++) geom.verticesIndices[i] = this.verticesIndices[i]
    }

    for (let i in this._attributes) this.copyAttribute(i, geom)

    geom.morphTargets.length = this.morphTargets.length
    for (let i = 0; i < this.morphTargets.length; i++) geom.morphTargets[i] = this.morphTargets[i]

    return geom
  }

  /**
   * Calculaten normals
   * @function calculateNormals
   * @memberof Geometry
   * @instance
   */
  Geometry.prototype.calculateNormals = function (options) {
    // todo: should check angle of normals to get edges    https://community.khronos.org/t/calculating-accurate-vertex-normals/28152
    options = options || {}
    if (options.smooth === false) this.unIndex()

    const u = vec3.create()
    const v = vec3.create()
    const n = vec3.create()

    function calcNormal(triangle) {
      vec3.subtract(u, triangle[0], triangle[1])
      vec3.subtract(v, triangle[0], triangle[2])
      vec3.cross(n, u, v)
      vec3.normalize(n, n)

      if (options && options.forceZUp) {
        if (n[2] < 0) {
          n[0] *= -1
          n[1] *= -1
          n[2] *= -1
        }
      }
      return n
    }

    this.getVertexVec = function (which) {
      const vec = [0, 0, 0]
      vec[0] = this.vertices[which * 3 + 0]
      vec[1] = this.vertices[which * 3 + 1]
      vec[2] = this.vertices[which * 3 + 2]
      return vec
    }

    if (!(this.vertexNormals instanceof Float32Array) || this.vertexNormals.length != this.vertices.length)
      this.vertexNormals = new Float32Array(this.vertices.length)

    for (let i = 0; i < this.vertices.length; i++) {
      this.vertexNormals[i] = 0
    }

    if (!this.isIndexed()) {
      const norms = []
      for (let i = 0; i < this.vertices.length; i += 9) {
        const triangle = [
          [this.vertices[i + 0], this.vertices[i + 1], this.vertices[i + 2]],
          [this.vertices[i + 3], this.vertices[i + 4], this.vertices[i + 5]],
          [this.vertices[i + 6], this.vertices[i + 7], this.vertices[i + 8]]
        ]
        const nn = calcNormal(triangle)
        norms.push(nn[0], nn[1], nn[2], nn[0], nn[1], nn[2], nn[0], nn[1], nn[2])
      }
      this.vertexNormals = norms
    } else {
      const faceNormals = []

      faceNormals.length = Math.floor(this.verticesIndices.length / 3)

      for (let i = 0; i < this.verticesIndices.length; i += 3) {
        const triangle = [
          this.getVertexVec(this.verticesIndices[i + 0]),
          this.getVertexVec(this.verticesIndices[i + 1]),
          this.getVertexVec(this.verticesIndices[i + 2])
        ]

        faceNormals[i / 3] = calcNormal(triangle)

        this.vertexNormals[this.verticesIndices[i + 0] * 3 + 0] += faceNormals[i / 3][0]
        this.vertexNormals[this.verticesIndices[i + 0] * 3 + 1] += faceNormals[i / 3][1]
        this.vertexNormals[this.verticesIndices[i + 0] * 3 + 2] += faceNormals[i / 3][2]

        this.vertexNormals[this.verticesIndices[i + 1] * 3 + 0] += faceNormals[i / 3][0]
        this.vertexNormals[this.verticesIndices[i + 1] * 3 + 1] += faceNormals[i / 3][1]
        this.vertexNormals[this.verticesIndices[i + 1] * 3 + 2] += faceNormals[i / 3][2]

        this.vertexNormals[this.verticesIndices[i + 2] * 3 + 0] += faceNormals[i / 3][0]
        this.vertexNormals[this.verticesIndices[i + 2] * 3 + 1] += faceNormals[i / 3][1]
        this.vertexNormals[this.verticesIndices[i + 2] * 3 + 2] += faceNormals[i / 3][2]
      }

      for (
        let i = 0;
        i < this.verticesIndices.length;
        i += 3 // faces
      ) {
        for (
          let k = 0;
          k < 3;
          k++ // triangles
        ) {
          const vv = [
            this.vertexNormals[this.verticesIndices[i + k] * 3 + 0],
            this.vertexNormals[this.verticesIndices[i + k] * 3 + 1],
            this.vertexNormals[this.verticesIndices[i + k] * 3 + 2]
          ]
          vec3.normalize(vv, vv)
          this.vertexNormals[this.verticesIndices[i + k] * 3 + 0] = vv[0]
          this.vertexNormals[this.verticesIndices[i + k] * 3 + 1] = vv[1]
          this.vertexNormals[this.verticesIndices[i + k] * 3 + 2] = vv[2]
        }
      }
    }
  }

  /**
   * Calculates tangents & bitangents with the help of uv-coordinates. Adapted from
   * Lengyel, Eric. “Computing Tangent Space Basis Vectors for an Arbitrary Mesh”.
   * Terathon Software 3D Graphics Library.
   * https://fenix.tecnico.ulisboa.pt/downloadFile/845043405449073/Tangent%20Space%20Calculation.pdf
   *
   * @function calcTangentsBitangents
   * @memberof Geometry
   * @instance
   */
  Geometry.prototype.calcTangentsBitangents = function () {
    if (!this.vertices.length) {
      // this._log.error("Cannot calculate tangents/bitangents without vertices.");
      return
    }
    if (!this.vertexNormals.length) {
      // this._log.error("Cannot calculate tangents/bitangents without normals.");
      return
    }
    if (!this.texCoords.length) {
      // console.warn("No texcoords. Replacing with default values [0, 0].");
      const texCoordLength = (this.vertices.length / 3) * 2
      this.texCoords = new Float32Array(texCoordLength)
      for (let i = 0; i < texCoordLength; i += 1) this.texCoords[i] = 0
    }
    if (!this.verticesIndices || !this.verticesIndices.length) {
      // this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
      return
    }
    // this code assumes that we have three indices per triangle
    if (this.verticesIndices.length % 3 !== 0) {
      this._log.error('Vertex indices mismatch!')
      return
    }

    const triangleCount = this.verticesIndices.length / 3
    const vertexCount = this.vertices.length / 3

    this.tangents = new Float32Array(this.vertexNormals.length)
    this.biTangents = new Float32Array(this.vertexNormals.length)

    // temporary buffers
    const tempVertices = []
    tempVertices.length = vertexCount * 2
    const v1 = vec3.create()
    const v2 = vec3.create()
    const v3 = vec3.create()

    const w1 = vec2.create()
    const w2 = vec2.create()
    const w3 = vec2.create()

    const sdir = vec3.create()
    const tdir = vec3.create()

    // for details on calculation, see article referenced above
    for (let tri = 0; tri < triangleCount; tri += 1) {
      // indices of the three vertices for a triangle
      const i1 = this.verticesIndices[tri * 3]
      const i2 = this.verticesIndices[tri * 3 + 1]
      const i3 = this.verticesIndices[tri * 3 + 2]

      // vertex position as vec3
      vec3.set(v1, this.vertices[i1 * 3], this.vertices[i1 * 3 + 1], this.vertices[i1 * 3 + 2])
      vec3.set(v2, this.vertices[i2 * 3], this.vertices[i2 * 3 + 1], this.vertices[i2 * 3 + 2])
      vec3.set(v3, this.vertices[i3 * 3], this.vertices[i3 * 3 + 1], this.vertices[i3 * 3 + 2])

      // texture coordinate as vec2
      vec2.set(w1, this.texCoords[i1 * 2], this.texCoords[i1 * 2 + 1])
      vec2.set(w2, this.texCoords[i2 * 2], this.texCoords[i2 * 2 + 1])
      vec2.set(w3, this.texCoords[i3 * 2], this.texCoords[i3 * 2 + 1])

      const x1 = v2[0] - v1[0]
      const x2 = v3[0] - v1[0]
      const y1 = v2[1] - v1[1]
      const y2 = v3[1] - v1[1]
      const z1 = v2[2] - v1[2]
      const z2 = v3[2] - v1[2]

      const s1 = w2[0] - w1[0]
      const s2 = w3[0] - w1[0]
      const t1 = w2[1] - w1[1]
      const t2 = w3[1] - w1[1]

      const r = 1.0 / (s1 * t2 - s2 * t1)

      vec3.set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r)
      vec3.set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r)

      tempVertices[i1] = sdir
      tempVertices[i2] = sdir
      tempVertices[i3] = sdir

      tempVertices[i1 + vertexCount] = tdir
      tempVertices[i2 + vertexCount] = tdir
      tempVertices[i3 + vertexCount] = tdir
    }

    const normal = vec3.create()
    const tempVert = vec3.create()
    const tan = vec3.create()
    const bitan = vec3.create()
    const temp1 = vec3.create()
    const temp2 = vec3.create()
    const crossPd = vec3.create()
    const normalized = vec3.create()

    for (let vert = 0; vert < vertexCount; vert += 1) {
      // NOTE: some meshes don't have index 0 - n in their indexbuffer, if this is the case, skip calculation of this vertex
      if (!tempVertices[vert]) continue

      vec3.set(normal, this.vertexNormals[vert * 3], this.vertexNormals[vert * 3 + 1], this.vertexNormals[vert * 3 + 2])
      vec3.set(tempVert, tempVertices[vert][0], tempVertices[vert][1], tempVertices[vert][2])

      // Gram-Schmidt orthagonalize
      const _dp = vec3.dot(normal, tempVert)
      vec3.scale(temp1, normal, _dp)
      vec3.subtract(temp2, tempVert, temp1)

      vec3.normalize(normalized, temp2)
      vec3.cross(crossPd, normal, tempVert)

      // const intermDot = vec3.dot(crossPd, tempVertices[vert + vertexCount]);
      const w = 1.0 // intermDot < 0.0 ? -1.0 : 1.0;

      vec3.scale(tan, normalized, 1 / w)
      vec3.cross(bitan, normal, tan)

      this.tangents[vert * 3 + 0] = tan[0]
      this.tangents[vert * 3 + 1] = tan[1]
      this.tangents[vert * 3 + 2] = tan[2]
      this.biTangents[vert * 3 + 0] = bitan[0]
      this.biTangents[vert * 3 + 1] = bitan[1]
      this.biTangents[vert * 3 + 2] = bitan[2]
    }
  }

  Geometry.prototype.isIndexed = function () {
    if (this._vertices.length == 0) return true
    return this.verticesIndices.length != 0
  }

  /**
   * @function unIndex
   * @memberof Geometry
   * @instance
   * @param {Boolean}
   * @description remove all vertex indizes, vertices array will contain 3*XYZ for every triangle
   */
  Geometry.prototype.unIndex = function (reIndex, dontCalcNormals) {
    const newVerts = []
    const newIndizes = []
    let count = 0

    for (let j in this._attributes) {
      const attr = this._attributes[j]
      let na = []

      for (let i = 0; i < this.verticesIndices.length; i += 3) {
        for (let s = 0; s < 3; s++) {
          if (attr.itemSize == 3)
            na.push(
              attr.data[this.verticesIndices[i + s] * 3 + 0],
              attr.data[this.verticesIndices[i + s] * 3 + 1],
              attr.data[this.verticesIndices[i + s] * 3 + 2]
            )
          else if (attr.itemSize == 4)
            na.push(
              attr.data[this.verticesIndices[i + s] * 4 + 0],
              attr.data[this.verticesIndices[i + s] * 4 + 1],
              attr.data[this.verticesIndices[i + s] * 4 + 2],
              attr.data[this.verticesIndices[i + s] * 4 + 3]
            )
          else if (attr.itemSize == 2)
            na.push(attr.data[this.verticesIndices[i + s] * 2 + 0], attr.data[this.verticesIndices[i + s] * 2 + 1])
          else if (attr.itemSize == 1) na.push(attr.data[this.verticesIndices[i + s]])
          else console.log('unknown attr', attr)
        }
      }
      this.setAttribute(attr.name, na, attr.itemSize)
    }

    for (let i = 0; i < this.verticesIndices.length; i += 3) {
      newVerts.push(
        this.vertices[this.verticesIndices[i + 0] * 3 + 0],
        this.vertices[this.verticesIndices[i + 0] * 3 + 1],
        this.vertices[this.verticesIndices[i + 0] * 3 + 2]
      )

      newIndizes.push(count)
      count++

      newVerts.push(
        this.vertices[this.verticesIndices[i + 1] * 3 + 0],
        this.vertices[this.verticesIndices[i + 1] * 3 + 1],
        this.vertices[this.verticesIndices[i + 1] * 3 + 2]
      )

      newIndizes.push(count)
      count++

      newVerts.push(
        this.vertices[this.verticesIndices[i + 2] * 3 + 0],
        this.vertices[this.verticesIndices[i + 2] * 3 + 1],
        this.vertices[this.verticesIndices[i + 2] * 3 + 2]
      )

      newIndizes.push(count)
      count++
    }

    this.vertices = newVerts

    this.verticesIndices = []
    if (reIndex) this.verticesIndices = newIndizes

    if (!dontCalcNormals) this.calculateNormals()
  }

  Geometry.prototype.calcBarycentric = function () {
    let barycentrics = []
    barycentrics.length = this.vertices.length
    for (let i = 0; i < this.vertices.length; i++) barycentrics[i] = 0

    let count = 0
    for (let i = 0; i < this.vertices.length; i += 3) {
      barycentrics[i + count] = 1
      count++
      if (count == 3) count = 0
    }

    this.setAttribute('attrBarycentric', barycentrics, 3)
  }

  Geometry.prototype.getBounds = function () {
    return new BoundingBox(this)
  }

  Geometry.prototype.center = function (x, y, z) {
    if (x === undefined) {
      x = true
      y = true
      z = true
    }

    let i = 0
    const bounds = this.getBounds()
    const offset = [
      bounds.minX + (bounds.maxX - bounds.minX) / 2,
      bounds.minY + (bounds.maxY - bounds.minY) / 2,
      bounds.minZ + (bounds.maxZ - bounds.minZ) / 2
    ]

    for (i = 0; i < this.vertices.length; i += 3) {
      if (this.vertices[i + 0] == this.vertices[i + 0]) {
        if (x) this.vertices[i + 0] -= offset[0]
        if (y) this.vertices[i + 1] -= offset[1]
        if (z) this.vertices[i + 2] -= offset[2]
      }
    }

    return offset
  }

  Geometry.prototype.mapTexCoords2d = function () {
    const bounds = this.getBounds()
    const num = this.vertices.length / 3

    this.texCoords = new Float32Array(num * 2)

    for (let i = 0; i < num; i++) {
      const vertX = this.vertices[i * 3 + 0]
      const vertY = this.vertices[i * 3 + 1]
      this.texCoords[i * 2 + 0] = vertX / (bounds.maxX - bounds.minX) + 0.5
      this.texCoords[i * 2 + 1] = 1.0 - vertY / (bounds.maxY - bounds.minY) + 0.5
    }
  }

  Geometry.prototype.getInfoOneLine = function () {
    let txt = ''
    if (this.faceVertCount == 3 && this.verticesIndices) txt += this.verticesIndices.length / 3
    else txt += 0

    txt += ' tris '

    if (this.vertices) txt += this.vertices.length / 3
    else txt += 0

    txt += ' verts'

    return txt
  }

  Geometry.prototype.getInfo = function () {
    const info = {}

    if (this.faceVertCount == 3 && this.verticesIndices) info.numFaces = this.verticesIndices.length / 3
    else info.numFaces = 0

    if (this.verticesIndices && this.verticesIndices.length) info.indices = this.verticesIndices.length

    if (this.vertices) info.numVerts = this.vertices.length / 3
    else info.numVerts = 0

    if (this.vertexNormals) info.numNormals = this.vertexNormals.length / 3
    else info.numNormals = 0

    if (this.texCoords) info.numTexCoords = this.texCoords.length / 2
    else info.numTexCoords = 0

    if (this.tangents) info.numTangents = this.tangents.length / 3
    else info.numTangents = 0

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3
    else info.numBiTangents = 0

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3
    else info.numBiTangents = 0

    if (this.vertexColors) info.numVertexColors = this.vertexColors.length / 4
    else info.numVertexColors = 0

    if (this.getAttributes()) info.numAttribs = Object.keys(this.getAttributes()).length
    else info.numAttribs = 0

    info.isIndexed = this.isIndexed()

    return info
  }

  // -----------------

  // TODO : move this into "old" circle op
  Geometry.buildFromFaces = function (arr, name, optimize) {
    const vertices = []
    const verticesIndices = []

    for (let i = 0; i < arr.length; i += 3) {
      const a = arr[i + 0]
      const b = arr[i + 1]
      const c = arr[i + 2]
      const face = [-1, -1, -1]

      if (optimize)
        for (let iv = 0; iv < vertices.length; iv += 3) {
          if (vertices[iv + 0] == a[0] && vertices[iv + 1] == a[1] && vertices[iv + 2] == a[2]) face[0] = iv / 3
          if (vertices[iv + 0] == b[0] && vertices[iv + 1] == b[1] && vertices[iv + 2] == b[2]) face[1] = iv / 3
          if (vertices[iv + 0] == c[0] && vertices[iv + 1] == c[1] && vertices[iv + 2] == c[2]) face[2] = iv / 3
        }

      if (face[0] == -1) {
        vertices.push(a[0], a[1], a[2])
        face[0] = (vertices.length - 1) / 3
      }

      if (face[1] == -1) {
        vertices.push(b[0], b[1], b[2])
        face[1] = (vertices.length - 1) / 3
      }

      if (face[2] == -1) {
        vertices.push(c[0], c[1], c[2])
        face[2] = (vertices.length - 1) / 3
      }

      verticesIndices.push(parseInt(face[0], 10))
      verticesIndices.push(parseInt(face[1], 10))
      verticesIndices.push(parseInt(face[2], 10))
    }

    const geom = new Geometry(name)
    geom.name = name
    geom.vertices = vertices
    geom.verticesIndices = verticesIndices

    return geom
  }

  // TODO: not needed anymore ?! move to deprecated ops?
  Geometry.json2geom = function (jsonMesh) {
    const geom = new Geometry('jsonMeshGeom')
    geom.verticesIndices = []

    geom.vertices = jsonMesh.vertices || []
    geom.vertexNormals = jsonMesh.normals || []
    geom.vertexColors = jsonMesh.colors || []
    geom.tangents = jsonMesh.tangents || []
    geom.biTangents = jsonMesh.bitangents || []
    if (jsonMesh.texturecoords) geom.setTexCoords(jsonMesh.texturecoords[0])

    if (jsonMesh.vertices_b64) geom.vertices = new Float32Array(b64decTypedArray(jsonMesh.vertices_b64))
    if (jsonMesh.normals_b64) geom.vertexNormals = new Float32Array(b64decTypedArray(jsonMesh.normals_b64))
    if (jsonMesh.tangents_b64) geom.tangents = new Float32Array(b64decTypedArray(jsonMesh.tangents_b64))
    if (jsonMesh.bitangents_b64) geom.biTangents = new Float32Array(b64decTypedArray(jsonMesh.bitangents_b64))
    if (jsonMesh.texturecoords_b64) geom.setTexCoords(new Float32Array(b64decTypedArray(jsonMesh.texturecoords_b64[0])))

    if (jsonMesh.faces_b64) {
      geom.verticesIndices = new Uint32Array(b64decTypedArray(jsonMesh.faces_b64))
    } else {
      geom.verticesIndices.length = jsonMesh.faces.length * 3
      for (let i = 0; i < jsonMesh.faces.length; i++) {
        geom.verticesIndices[i * 3] = jsonMesh.faces[i][0]
        geom.verticesIndices[i * 3 + 1] = jsonMesh.faces[i][1]
        geom.verticesIndices[i * 3 + 2] = jsonMesh.faces[i][2]
      }
    }

    return geom
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_mesh_feedback.js

  // view-source:http://toji.github.io/webgl2-particles-2/

  function extendMeshWithFeedback(Mesh) {
    Mesh.prototype.hasFeedbacks = function () {
      return this._feedBacks.length > 0
    }

    Mesh.prototype.removeFeedbacks = function (shader) {
      if (!this._feedbacks) return
      this._feedbacks.length = 0
      this._feedBacksChanged = true
    }

    Mesh.prototype.setAttributeFeedback = function () {}

    Mesh.prototype.setFeedback = function (attrib, nameOut, initialArr) {
      let fb = { nameOut }
      let found = false
      this.unBindFeedbacks()

      for (let i = 0; i < this._feedBacks.length; i++) {
        if (this._feedBacks[i].nameOut == nameOut) {
          fb = this._feedBacks[i]

          found = true
        }
      }

      if (!found) this._feedBacksChanged = true

      fb.initialArr = initialArr
      fb.attrib = attrib

      // console.log("setfeedback");

      if (fb.outBuffer) this._cgl.gl.deleteBuffer(fb.outBuffer)
      // if(fb.attrib.buffer)this._cgl.gl.deleteBuffer(fb.attrib.buffer);
      fb.outBuffer = this._cgl.gl.createBuffer()
      this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.outBuffer)
      this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW)

      this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer)
      this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW)

      if (!found) this._feedBacks.push(fb)

      // console.log('initialArr',initialArr.length/3);
      // console.log('vertices',fb.attrib.numItems);
      // console.log('vertices',this._bufVertexAttrib.numItems);

      return fb
    }

    Mesh.prototype.bindFeedback = function (attrib) {
      if (!this._feedBacks || this._feedBacks.length === 0) return
      if (this._transformFeedBackLoc == -1) this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()

      this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc)

      let found = false

      for (let i = 0; i < this._feedBacks.length; i++) {
        const fb = this._feedBacks[i]

        if (fb.attrib == attrib) {
          found = true
          // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer);
          //
          // this._cgl.gl.vertexAttribPointer(
          //     fb.attrib.loc,
          //     fb.attrib.itemSize,
          //     fb.attrib.type,
          //     false,
          //     fb.attrib.itemSize*4, 0);

          this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer)
        }
      }

      if (!found) {
        // console.log("ARTTRIB NOT FOUND",attrib.name);
      }
    }

    Mesh.prototype.drawFeedbacks = function (shader, prim) {
      let i = 0

      if (this._feedBacksChanged) {
        const names = []
        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc)

        for (i = 0; i < this._feedBacks.length; i++) names.push(this._feedBacks[i].nameOut)
        shader.setFeedbackNames(names)

        console.log('feedbacknames', names)

        shader.compile()
        this._feedBacksChanged = false
        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null)
        console.log('changed finished')
        return
      }

      //
      // for( i=0;i<this._feedBacks.length;i++)
      // {
      //     var fb=this._feedBacks[i];
      //
      //     this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer);
      // }

      // draw
      this._cgl.gl.beginTransformFeedback(this.glPrimitive)
      this._cgl.gl.drawArrays(prim, 0, this._feedBacks[0].attrib.numItems)

      // unbind
      this._cgl.gl.endTransformFeedback()

      this.unBindFeedbacks()

      this.feedBacksSwapBuffers()
    }

    Mesh.prototype.unBindFeedbacks = function () {
      for (let i = 0; i < this._feedBacks.length; i++) {
        // this._cgl.gl.disableVertexAttribArray(this._feedBacks[i].attrib.loc);
        this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, null)
      }

      this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null)
    }

    Mesh.prototype.feedBacksSwapBuffers = function () {
      for (let i = 0; i < this._feedBacks.length; i++) {
        const t = this._feedBacks[i].attrib.buffer
        this._feedBacks[i].attrib.buffer = this._feedBacks[i].outBuffer
        this._feedBacks[i].outBuffer = t
      }
    }
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_mesh.js

  const MESH = {}
  MESH.lastMesh = null

  /**
   * webgl renderable 3d object
   * @external CGL1
   * @namespace Mesh
   * @hideconstructor
   * @param {Context} cgl
   * @param {Geometry} geometry
   * @param {Number} [glPrimitive]
   * @class
   * @example
   * const cgl=this._cgl
   * const mesh=new CGL1.Mesh(cgl, geometry);
   *
   * function render()
   * {
   *   mesh.render(cgl.getShader());
   * }
   */
  const Mesh = function (_cgl, __geom, _options) {
    this._cgl = _cgl

    let options = _options || {}
    if (CABLES1.UTILS.isNumeric(options)) options = { glPrimitive: _options } // old constructor fallback...
    this._log = new Logger('cgl_mesh')
    this._bufVertexAttrib = null
    this._bufVerticesIndizes = this._cgl.gl.createBuffer()
    this._indexType = this._cgl.gl.UNSIGNED_SHORT
    this._attributes = []
    this._attribLocs = {}
    this._geom = null
    this._lastShader = null
    this._numInstances = 0
    this._glPrimitive = options.glPrimitive

    this.opId = options.opId || ''
    this._preWireframeGeom = null
    this.addVertexNumbers = false
    this._name = 'unknown'

    this.feedBackAttributes = []
    this.setGeom(__geom)

    this._feedBacks = []
    this._feedBacksChanged = false
    this._transformFeedBackLoc = -1
    this._lastAttrUpdate = 0

    this.memFreed = false

    this._cgl.profileData.addHeavyEvent('mesh constructed', this._name)

    this._queryExt = null

    Object.defineProperty(this, 'numInstances', {
      get() {
        return this._numInstances
      },
      set(v) {
        this.setNumInstances(v)
      }
    })
  }

  Mesh.prototype.freeMem = function () {
    this.memFreed = true

    for (let i = 0; i < this._attributes.length; i++) {
      this._attributes[i].floatArray = null
    }
  }

  /**
   * @function updateVertices
   * @memberof Mesh
   * @instance
   * @description update vertices only from a geometry
   * @param {Geometry} geometry
   */
  Mesh.prototype.updateVertices = function (geom) {
    this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION, geom.vertices, 3)
    this._numVerts = geom.vertices.length / 3
  }

  Mesh.prototype.setAttributePointer = function (attrName, name, stride, offset) {
    for (let i = 0; i < this._attributes.length; i++) {
      if (this._attributes[i].name == attrName) {
        if (!this._attributes[i].pointer) this._attributes[i].pointer = []

        this._attributes[i].pointer.push({
          loc: -1,
          name: name,
          stride: stride,
          offset: offset,
          instanced: attrName == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX
        })
      }
    }
  }

  Mesh.prototype.getAttribute = function (name) {
    for (let i = 0; i < this._attributes.length; i++) if (this._attributes[i].name == name) return this._attributes[i]
  }

  Mesh.prototype.setAttributeRange = function (attr, array, start, end) {
    if (!attr) return
    if (!start && !end) return

    if (!attr.name) {
      this._log.stack('no attrname?!')
    }

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer)
    this._cgl.profileData.profileMeshAttributes += end - start || 0

    this._cgl.profileData.profileSingleMeshAttribute[this._name] =
      this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0
    this._cgl.profileData.profileSingleMeshAttribute[this._name] += end - start || 0

    if (attr.numItems < array.length / attr.itemSize) {
      this._resizeAttr(array, attr)
    }

    if (end >= array.length - 1) {
      this._log.log(
        this._cgl.canvas.id + ' ' + attr.name + ' buffersubdata out of bounds ?',
        array.length,
        end,
        start,
        attr
      )
    }

    if (this._cgl.glVersion == 1)
      this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, array) // probably slow/ maybe create and array with only changed size ??
    else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, start * 4, array, start, end - start)
  }

  Mesh.prototype._resizeAttr = function (array, attr) {
    if (attr.buffer) this._cgl.gl.deleteBuffer(attr.buffer)

    attr.buffer = this._cgl.gl.createBuffer()
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer)
    this._bufferArray(array, attr)
    attr.numItems = array.length / attr.itemSize // numItems;
  }

  Mesh.prototype._bufferArray = function (array, attr) {
    let floatArray = attr.floatArray || null
    if (!array) return

    if (this._cgl.debugOneFrame) {
      console.log('_bufferArray', array.length, attr.name) // eslint-disable-line
    }

    if (!(array instanceof Float32Array)) {
      if (attr && floatArray && floatArray.length == array.length) {
        floatArray.set(array)
        // floatArray = floatArray;
      } else {
        floatArray = new Float32Array(array)

        if (this._cgl.debugOneFrame) {
          console.log('_bufferArray create new float32array', array.length, attr.name) // eslint-disable-line
        }

        if (array.length > 10000) {
          this._cgl.profileData.profileNonTypedAttrib++
          this._cgl.profileData.profileNonTypedAttribNames = '(' + this._name + ':' + attr.name + ')'
        }
      }
    } else floatArray = array

    attr.arrayLength = floatArray.length
    attr.floatArray = null // floatArray;

    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW)
  }

  /**
   * @function setAttribute
   * @description update attribute
   * @memberof Mesh
   * @instance
   * @param {String} attribute name
   * @param {Array} data
   * @param {Number} itemSize
   * @param {Object} options
   */
  Mesh.prototype.addAttribute =
    Mesh.prototype.updateAttribute =
    Mesh.prototype.setAttribute =
      function (name, array, itemSize, options) {
        if (!array) {
          this._log.error('mesh addAttribute - no array given! ' + name)
          throw new Error()
        }
        let cb = null
        let instanced = false
        let i = 0
        const numItems = array.length / itemSize

        this._cgl.profileData.profileMeshAttributes += numItems || 0

        if (typeof options == 'function') {
          cb = options
        }

        if (typeof options == 'object') {
          if (options.cb) cb = options.cb
          if (options.instanced) instanced = options.instanced
        }

        if (name == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX) instanced = true

        for (i = 0; i < this._attributes.length; i++) {
          const attr = this._attributes[i]
          if (attr.name == name) {
            if (attr.numItems === numItems) {
            } else {
              // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
              this._resizeAttr(array, attr)
            }

            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer)
            this._bufferArray(array, attr)

            return attr
          }
        }

        // create new buffer...

        const buffer = this._cgl.gl.createBuffer()

        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, buffer)
        // this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);

        let type = this._cgl.gl.FLOAT
        if (options && options.type) type = options.type
        const attr = {
          buffer: buffer,
          name: name,
          cb: cb,
          itemSize: itemSize,
          numItems: numItems,
          startItem: 0,
          instanced: instanced,
          type: type
        }

        this._bufferArray(array, attr)

        if (name == constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION) this._bufVertexAttrib = attr
        this._attributes.push(attr)
        this._attribLocs = {}

        return attr
      }

  Mesh.prototype.getAttributes = function () {
    return this._attributes
  }

  /**
   * @function updateTexCoords
   * @description update texture coordinates only from a geometry
   * @memberof Mesh
   * @instance
   * @param {Geometry} geometry
   */
  Mesh.prototype.updateTexCoords = function (geom) {
    if (geom.texCoords && geom.texCoords.length > 0) {
      this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, geom.texCoords, 2)
    } else {
      const tcBuff = new Float32Array(Math.round((geom.vertices.length / 3) * 2))
      this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, tcBuff, 2)
    }
  }

  /**
   * @function updateNormals
   * @description update normals only from a geometry
   * @memberof Mesh
   * @instance
   * @param {Geometry} geometry
   */
  Mesh.prototype.updateNormals = function (geom) {
    if (geom.vertexNormals && geom.vertexNormals.length > 0) {
      this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, geom.vertexNormals, 3)
    } else {
      const tcBuff = new Float32Array(Math.round(geom.vertices.length))
      this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, tcBuff, 3)
    }
  }

  Mesh.prototype._setVertexNumbers = function (arr) {
    if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || arr) {
      if (arr) this._verticesNumbers = arr
      else {
        this._verticesNumbers = new Float32Array(this._numVerts)
        for (let i = 0; i < this._numVerts; i++) this._verticesNumbers[i] = i
      }

      this.setAttribute(
        constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NUMBER,
        this._verticesNumbers,
        1,
        (attr, geom, shader) => {
          if (!shader.uniformNumVertices)
            shader.uniformNumVertices = new Uniform(shader, 'f', 'numVertices', this._numVerts)
          shader.uniformNumVertices.setValue(this._numVerts)

          // console.log("this._numVerts", this._numVerts, attr, shader.uniformNumVertices);
        }
      )
    }
  }

  /**
   * @function setVertexIndices
   * @description update vertex indices / faces
   * @memberof Mesh
   * @instance
   * @param {array} vertIndices
   */
  Mesh.prototype.setVertexIndices = function (vertIndices) {
    if (!this._bufVerticesIndizes) {
      this._log.warn('no bufVerticesIndizes: ' + this._name)
      return
    }
    if (vertIndices.length > 0) {
      if (vertIndices instanceof Float32Array) this._log.warn('vertIndices float32Array: ' + this._name)

      for (let i = 0; i < vertIndices.length; i++) {
        if (vertIndices[i] >= this._numVerts) {
          this._log.warn('invalid index in ' + this._name, i, vertIndices[i])
          return
        }
      }

      this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes)

      // todo cache this ?
      // if(!this.vertIndicesTyped || this.vertIndicesTyped.length!=this._geom.verticesIndices.length)

      if (vertIndices.length > 65535) {
        this.vertIndicesTyped = new Uint32Array(vertIndices)
        this._indexType = this._cgl.gl.UNSIGNED_INT
      } else if (vertIndices instanceof Uint32Array) {
        this.vertIndicesTyped = vertIndices
        this._indexType = this._cgl.gl.UNSIGNED_INT
      } else if (!(vertIndices instanceof Uint16Array)) {
        this.vertIndicesTyped = new Uint16Array(vertIndices)
        this._indexType = this._cgl.gl.UNSIGNED_SHORT
      } else this.vertIndicesTyped = vertIndices

      this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW)
      this._bufVerticesIndizes.itemSize = 1
      this._bufVerticesIndizes.numItems = vertIndices.length
    } else this._bufVerticesIndizes.numItems = 0
  }

  /**
   * @function setGeom
   * @memberof Mesh
   * @instance
   * @description set geometry for mesh
   * @param {Geometry} geometry
   */
  Mesh.prototype.setGeom = function (geom, removeRef) {
    this._geom = geom
    if (geom.glPrimitive != null) this._glPrimitive = geom.glPrimitive
    if (this._geom && this._geom.name) this._name = 'mesh ' + this._geom.name

    MESH.lastMesh = null
    this._cgl.profileData.profileMeshSetGeom++

    this._disposeAttributes()

    this.updateVertices(this._geom)
    this.setVertexIndices(this._geom.verticesIndices)

    if (this.addVertexNumbers) this._setVertexNumbers()

    const geomAttribs = this._geom.getAttributes()

    const attribAssoc = {
      texCoords: constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD,
      vertexNormals: constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL,
      vertexColors: constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_COLOR,
      tangents: 'attrTangent',
      biTangents: 'attrBiTangent'
    }

    for (const index in geomAttribs)
      if (geomAttribs[index].data && geomAttribs[index].data.length)
        this.setAttribute(attribAssoc[index] || index, geomAttribs[index].data, geomAttribs[index].itemSize)

    if (removeRef) {
      this._geom = null
    }
  }

  Mesh.prototype._preBind = function (shader) {
    for (let i = 0; i < this._attributes.length; i++)
      if (this._attributes[i].cb) this._attributes[i].cb(this._attributes[i], this._geom, shader)
  }

  Mesh.prototype._checkAttrLengths = function () {
    if (this.memFreed) return
    // check length
    for (let i = 0; i < this._attributes.length; i++) {
      if (
        this._attributes[i].arrayLength / this._attributes[i].itemSize <
        this._attributes[0].arrayLength / this._attributes[0].itemSize
      ) {
        let name = 'unknown'
        if (this._geom) name = this._geom.name
        // this._log.warn(
        //     name + ": " + this._attributes[i].name +
        //     " wrong attr length. is:", this._attributes[i].arrayLength / this._attributes[i].itemSize,
        //     " should be:", this._attributes[0].arrayLength / this._attributes[0].itemSize,
        // );
      }
    }
  }

  Mesh.prototype._bind = function (shader) {
    if (!shader.isValid()) return

    let attrLocs = []
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id]
    else this._attribLocs[shader.id] = attrLocs

    this._lastShader = shader
    if (shader.lastCompile > this._lastAttrUpdate || attrLocs.length != this._attributes.length) {
      this._lastAttrUpdate = shader.lastCompile
      for (let i = 0; i < this._attributes.length; i++) attrLocs[i] = -1
    }

    for (let i = 0; i < this._attributes.length; i++) {
      const attribute = this._attributes[i]
      if (attrLocs[i] == -1) {
        if (attribute._attrLocationLastShaderTime != shader.lastCompile) {
          attribute._attrLocationLastShaderTime = shader.lastCompile
          attrLocs[i] = this._cgl.glGetAttribLocation(shader.getProgram(), attribute.name)
          // this._log.log('attribloc',attribute.name,attrLocs[i]);
          this._cgl.profileData.profileAttrLoc++
        }
      }

      if (attrLocs[i] != -1) {
        this._cgl.gl.enableVertexAttribArray(attrLocs[i])
        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attribute.buffer)

        if (attribute.instanced) {
          // todo: easier way to fill mat4 attribs...
          if (attribute.itemSize <= 4) {
            if (!attribute.itemSize || attribute.itemSize == 0)
              this._log.warn('instanced attrib itemsize error', this._geom.name, attribute)

            this._cgl.gl.vertexAttribPointer(
              attrLocs[i],
              attribute.itemSize,
              attribute.type,
              false,
              attribute.itemSize * 4,
              0
            )
            this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1)
          } else if (attribute.itemSize == 16) {
            const stride = 16 * 4

            this._cgl.gl.vertexAttribPointer(attrLocs[i], 4, attribute.type, false, stride, 0)
            this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 1)
            this._cgl.gl.vertexAttribPointer(attrLocs[i] + 1, 4, attribute.type, false, stride, 4 * 4 * 1)
            this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 2)
            this._cgl.gl.vertexAttribPointer(attrLocs[i] + 2, 4, attribute.type, false, stride, 4 * 4 * 2)
            this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 3)
            this._cgl.gl.vertexAttribPointer(attrLocs[i] + 3, 4, attribute.type, false, stride, 4 * 4 * 3)

            this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1)
            this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 1)
            this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 1)
            this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 1)
          } else {
            this._log.warn('unknown instance attrib size', attribute.name)
          }
        } else {
          if (!attribute.itemSize || attribute.itemSize == 0)
            this._log.warn('attrib itemsize error', this._name, attribute)
          this._cgl.gl.vertexAttribPointer(
            attrLocs[i],
            attribute.itemSize,
            attribute.type,
            false,
            attribute.itemSize * 4,
            0
          )

          if (attribute.pointer) {
            for (let ip = 0; ip < attribute.pointer.length; ip++) {
              const pointer = attribute.pointer[ip]

              if (pointer.loc == -1) pointer.loc = this._cgl.glGetAttribLocation(shader.getProgram(), pointer.name)

              this._cgl.profileData.profileAttrLoc++

              this._cgl.gl.enableVertexAttribArray(pointer.loc)
              this._cgl.gl.vertexAttribPointer(
                pointer.loc,
                attribute.itemSize,
                attribute.type,
                false,
                pointer.stride,
                pointer.offset
              )
            }
          }
          this.bindFeedback(attribute)
        }
      }
    }

    if (this._bufVerticesIndizes && this._bufVerticesIndizes.numItems !== 0)
      this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes)
  }

  Mesh.prototype.unBind = function () {
    const shader = this._lastShader
    this._lastShader = null
    if (!shader) return

    let attrLocs = []
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id]
    else this._attribLocs[shader.id] = attrLocs

    MESH.lastMesh = null

    for (let i = 0; i < this._attributes.length; i++) {
      if (this._attributes[i].instanced) {
        // todo: easier way to fill mat4 attribs...
        if (this._attributes[i].itemSize <= 4) {
          if (attrLocs[i] != -1) this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0)
          if (attrLocs[i] >= 0) this._cgl.gl.disableVertexAttribArray(attrLocs[i])
        } else {
          this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0)
          this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 0)
          this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 0)
          this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 0)
          this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 1)
          this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 2)
          this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 3)
        }
      }

      if (attrLocs[i] != -1) this._cgl.gl.disableVertexAttribArray(attrLocs[i])
    }
  }

  Mesh.prototype.meshChanged = function () {
    return this._cgl.lastMesh && this._cgl.lastMesh != this
  }

  Mesh.prototype.printDebug = function (shader) {
    console.log('--attributes')
    for (let i = 0; i < this._attributes.length; i++) {
      console.log('attribute ' + i + ' ' + this._attributes[i].name)
    }
  }

  Mesh.prototype.setNumVertices = function (num) {
    this._bufVertexAttrib.numItems = num
  }

  Mesh.prototype.getNumVertices = function () {
    return this._bufVertexAttrib.numItems
  }

  /**
   * @function render
   * @memberof Mesh
   * @instance
   * @description draw mesh to screen
   * @param {Shader} shader
   */
  Mesh.prototype.render = function (shader) {
    // TODO: enable/disablevertex only if the mesh has changed... think drawing 10000x the same mesh

    if (!shader || !shader.isValid() || this._cgl.aborted) return

    this._checkAttrLengths()

    if (this._geom) {
      if (this._preWireframeGeom && !shader.wireframe && !this._geom.isIndexed()) {
        this.setGeom(this._preWireframeGeom)
        this._preWireframeGeom = null
        // console.log("remove prewireframe geom");
      }

      if (shader.wireframe) {
        let changed = false

        if (this._geom.isIndexed()) {
          if (!this._preWireframeGeom) {
            this._preWireframeGeom = this._geom
            this._geom = this._geom.copy()
          }

          this._geom.unIndex()
          changed = true
        }

        if (!this._geom.getAttribute('attrBarycentric')) {
          if (!this._preWireframeGeom) {
            this._preWireframeGeom = this._geom
            this._geom = this._geom.copy()
          }
          changed = true

          this._geom.calcBarycentric()
        }
        if (changed) this.setGeom(this._geom)
      }
      // if (shader.wireframe)
      // console.log(shader.wireframe, this._geom.isIndexed());
    }

    let needsBind = false
    if (MESH.lastMesh != this) {
      if (MESH.lastMesh) MESH.lastMesh.unBind()
      needsBind = true
    }

    // var needsBind=false;
    // {
    //     needsBind=true;
    // }
    if (needsBind) this._preBind(shader)

    if (!shader.bind()) return

    // if(needsBind)
    this._bind(shader)
    if (this.addVertexNumbers) this._setVertexNumbers()

    MESH.lastMesh = this

    let prim = this._cgl.gl.TRIANGLES
    if (this._glPrimitive !== undefined) prim = this._glPrimitive
    if (shader.glPrimitive !== null) prim = shader.glPrimitive

    let elementDiv = 1
    let doQuery = this._cgl.profileData.doProfileGlQuery
    let queryStarted = false
    if (doQuery) {
      let id = this._name + ' - ' + shader.getName() + ' #' + shader.id
      if (this._numInstances) id += ' instanced ' + this._numInstances + 'x'

      let queryProfilerData = this._cgl.profileData.glQueryData[id]

      if (!queryProfilerData) queryProfilerData = { id: id, num: 0 }

      if (shader.opId) queryProfilerData.shaderOp = shader.opId
      if (this.opId) queryProfilerData.meshOp = this.opId

      this._cgl.profileData.glQueryData[id] = queryProfilerData

      if (!this._queryExt && this._queryExt !== false)
        this._queryExt = this._cgl.enableExtension('EXT_disjoint_timer_query_webgl2') || false
      if (this._queryExt) {
        if (queryProfilerData._drawQuery) {
          const available = this._cgl.gl.getQueryParameter(
            queryProfilerData._drawQuery,
            this._cgl.gl.QUERY_RESULT_AVAILABLE
          )
          if (available) {
            const elapsedNanos = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT)
            const currentTimeGPU = elapsedNanos / 1000000

            queryProfilerData._times = queryProfilerData._times || 0
            queryProfilerData._times += currentTimeGPU
            queryProfilerData._numcount++
            queryProfilerData.when = performance.now()
            queryProfilerData._drawQuery = null
            queryProfilerData.queryStarted = false
          }
        }

        if (!queryProfilerData.queryStarted) {
          queryProfilerData._drawQuery = this._cgl.gl.createQuery()
          this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, queryProfilerData._drawQuery)
          queryStarted = queryProfilerData.queryStarted = true
        }
      }
    }

    if (this.hasFeedbacks()) {
      this.drawFeedbacks(shader, prim)
    } else if (!this._bufVerticesIndizes || this._bufVerticesIndizes.numItems === 0) {
      // for (let i = 0; i < this._attributes.length; i++)
      // {
      //     if (this._attributes[i].arrayLength / this._attributes[i].itemSize != this._bufVertexAttrib.floatArray.length / 3)
      //     {
      //         this._log.warn("attrib buffer length wrong! ", this._attributes[i].name, this._attributes[i].arrayLength / this._attributes[i].itemSize, this._bufVertexAttrib.floatArray.length / 3, this._attributes[i].itemSize);
      //         // this._log.log(this);
      //         // debugger;
      //         return;
      //     }
      // }

      if (prim == this._cgl.gl.TRIANGLES) elementDiv = 3
      if (this._numInstances === 0)
        this._cgl.gl.drawArrays(
          prim,
          this._bufVertexAttrib.startItem,
          this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem
        )
      else
        this._cgl.gl.drawArraysInstanced(
          prim,
          this._bufVertexAttrib.startItem,
          this._bufVertexAttrib.numItems,
          this._numInstances
        )
    } else {
      if (prim == this._cgl.gl.TRIANGLES) elementDiv = 3
      if (this._numInstances === 0) {
        // console.log("la", this._bufVerticesIndizes.numItems);

        this._cgl.gl.drawElements(prim, this._bufVerticesIndizes.numItems, this._indexType, 0)
      } else {
        this._cgl.gl.drawElementsInstanced(
          prim,
          this._bufVerticesIndizes.numItems,
          this._indexType,
          0,
          this._numInstances
        )
      }
    }

    if (this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR) {
      this._log.error('mesh draw gl error')
      this._log.error('mesh', this)
      this._log.error('shader', shader)

      const attribNames = []
      for (let i = 0; i < this._cgl.gl.getProgramParameter(shader.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); i++) {
        const name = this._cgl.gl.getActiveAttrib(shader.getProgram(), i).name
        this._log.error('attrib ', name)
      }
    }

    this._cgl.profileData.profileMeshNumElements +=
      (this._bufVertexAttrib.numItems / elementDiv) * (this._numInstances || 1)
    this._cgl.profileData.profileMeshDraw++

    if (doQuery && queryStarted) {
      this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT)
    }

    this._cgl.printError('mesh render ' + this._name)

    this.unBind()
  }

  Mesh.prototype.setNumInstances = function (n) {
    n = Math.max(0, n)
    if (this._numInstances != n) {
      this._numInstances = n
      const indexArr = new Float32Array(n)
      for (let i = 0; i < n; i++) indexArr[i] = i
      this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_INDEX, indexArr, 1, { instanced: true })
    }
  }

  Mesh.prototype._disposeAttributes = function () {
    if (!this._attributes) return

    for (let i = 0; i < this._attributes.length; i++) {
      if (this._attributes[i].buffer) {
        this._cgl.gl.deleteBuffer(this._attributes[i].buffer)
        this._attributes[i].buffer = null
      }
    }
    this._attributes.length = 0
  }

  Mesh.prototype.dispose = function () {
    if (this._bufVertexAttrib && this._bufVertexAttrib.buffer) this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer)
    if (this._bufVerticesIndizes) this._cgl.gl.deleteBuffer(this._bufVerticesIndizes)
    this._bufVerticesIndizes = null

    this._disposeAttributes()
  }

  extendMeshWithFeedback(Mesh) // CONCATENATED MODULE: ./src/core/cgl/cgl_simplerect.js

  const MESHES = {}

  MESHES.getSimpleRect = function (cgl, name) {
    const geom = new Geometry(name)

    geom.vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0]
    geom.texCoords = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0]
    geom.verticesIndices = [0, 1, 2, 2, 1, 3]
    geom.vertexNormals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]

    return new Mesh(cgl, geom)
  }

  MESHES.getSimpleCube = function (cgl, name) {
    const geom = new Geometry(name)
    geom.vertices = [
      -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1,
      -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1,
      1, -1, 1, 1, -1, 1, -1
    ]
    geom.setTexCoords([
      0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
      0, 1, 0, 1, 1, 1, 1, 0, 0, 0
    ])
    geom.verticesIndices = [
      0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21,
      22, 20, 22, 23
    ]
    geom.vertexNormals = new Float32Array([
      0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
      0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
      0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
      -1.0, 0.0, 0.0, -1.0, 0.0, 0.0
    ])
    geom.tangents = new Float32Array([
      0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1,
      0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
    ])
    geom.biTangents = new Float32Array([
      -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
      0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1
    ])

    return new Mesh(cgl, geom)
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_textureeffect.js

  const TextureEffect = function (cgl, options) {
    this._cgl = cgl
    this._log = new Logger('cgl_TextureEffect')

    if (!cgl.TextureEffectMesh) this.createMesh()

    this._textureSource = null
    this._options = options
    this.name = options.name || 'unknown'

    // TODO: do we still need the options ?
    // var opts=options ||
    //     {
    //         isFloatingPointTexture:false,
    //         filter:CGL1.Texture.FILTER_LINEAR
    //     };
    // if(options && options.fp)opts.isFloatingPointTexture=true;

    this.imgCompVer = 0
    this.aspectRatio = 1
    this._textureTarget = null // new CGL1.Texture(this._cgl,opts);
    this._frameBuf = this._cgl.gl.createFramebuffer()
    this._frameBuf2 = this._cgl.gl.createFramebuffer()
    this._renderbuffer = this._cgl.gl.createRenderbuffer()
    this._renderbuffer2 = this._cgl.gl.createRenderbuffer()
    this.switched = false
    this.depth = false
  }

  TextureEffect.prototype.dispose = function () {
    if (this._renderbuffer) this._cgl.gl.deleteRenderbuffer(this._renderbuffer)
    if (this._frameBuf) this._cgl.gl.deleteFramebuffer(this._frameBuf)
    if (this._renderbuffer2) this._cgl.gl.deleteRenderbuffer(this._renderbuffer2)
    if (this._frameBuf2) this._cgl.gl.deleteFramebuffer(this._frameBuf2)
  }

  TextureEffect.prototype.getWidth = function () {
    return this._textureSource.width
  }

  TextureEffect.prototype.getHeight = function () {
    return this._textureSource.height
  }

  TextureEffect.prototype.setSourceTexture = function (tex) {
    if (tex === null) {
      this._textureSource = new Texture(this._cgl)
      this._textureSource.setSize(16, 16)
    } else {
      this._textureSource = tex
    }

    if (!this._textureSource.compareSettings(this._textureTarget)) {
      if (this._textureTarget) this._textureTarget.delete()

      this._textureTarget = this._textureSource.clone()

      this._cgl.profileData.profileEffectBuffercreate++

      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf)

      this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer)

      // if(tex.textureType==CGL1.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
      // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

      if (this.depth)
        this._cgl.gl.renderbufferStorage(
          this._cgl.gl.RENDERBUFFER,
          this._cgl.gl.DEPTH_COMPONENT16,
          this._textureSource.width,
          this._textureSource.height
        )
      this._cgl.gl.framebufferTexture2D(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.COLOR_ATTACHMENT0,
        this._cgl.gl.TEXTURE_2D,
        this._textureTarget.tex,
        0
      )
      if (this.depth)
        this._cgl.gl.framebufferRenderbuffer(
          this._cgl.gl.FRAMEBUFFER,
          this._cgl.gl.DEPTH_ATTACHMENT,
          this._cgl.gl.RENDERBUFFER,
          this._renderbuffer
        )

      // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);

      this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
      this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null)
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)

      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2)

      this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2)

      // if(tex.textureType==CGL1.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
      // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

      if (this.depth)
        this._cgl.gl.renderbufferStorage(
          this._cgl.gl.RENDERBUFFER,
          this._cgl.gl.DEPTH_COMPONENT16,
          this._textureSource.width,
          this._textureSource.height
        )
      this._cgl.gl.framebufferTexture2D(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.COLOR_ATTACHMENT0,
        this._cgl.gl.TEXTURE_2D,
        this._textureSource.tex,
        0
      )

      if (this.depth)
        this._cgl.gl.framebufferRenderbuffer(
          this._cgl.gl.FRAMEBUFFER,
          this._cgl.gl.DEPTH_ATTACHMENT,
          this._cgl.gl.RENDERBUFFER,
          this._renderbuffer2
        )

      // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

      this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
      this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null)
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)
    }

    this.aspectRatio = this._textureSource.width / this._textureSource.height
  }
  TextureEffect.prototype.continueEffect = function () {
    this._cgl.pushDepthTest(false)
    this._cgl.pushModelMatrix()
    this._cgl.pushPMatrix()
    // todo why two pushs?

    this._cgl.pushViewPort(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height)

    mat4.perspective(
      this._cgl.pMatrix,
      45,
      this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height,
      0.1,
      1100.0
    ) // todo: why?

    this._cgl.pushPMatrix()
    mat4.identity(this._cgl.pMatrix)

    this._cgl.pushViewMatrix()
    mat4.identity(this._cgl.vMatrix)

    this._cgl.pushModelMatrix()
    mat4.identity(this._cgl.mMatrix)
  }

  TextureEffect.prototype.startEffect = function (bgTex) {
    if (!this._textureTarget) {
      this._log.warn('effect has no target')
      return
    }

    this.switched = false

    this.continueEffect()

    if (bgTex) {
      this._bgTex = bgTex
    }
    this._countEffects = 0
  }

  TextureEffect.prototype.endEffect = function () {
    this._cgl.popDepthTest()
    this._cgl.popModelMatrix()

    this._cgl.popPMatrix()
    this._cgl.popModelMatrix()
    this._cgl.popViewMatrix()

    this._cgl.popPMatrix()
    this._cgl.popViewPort()
  }

  TextureEffect.prototype.bind = function () {
    if (this._textureSource === null) {
      this._log.warn('no base texture set!')
      return
    }

    if (!this.switched) {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf)
      this._cgl.pushGlFrameBuffer(this._frameBuf)
    } else {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2)
      this._cgl.pushGlFrameBuffer(this._frameBuf2)
    }
  }

  TextureEffect.prototype.finish = function () {
    if (this._textureSource === null) {
      this._log.warn('no base texture set!')
      return
    }

    this._cgl.TextureEffectMesh.render(this._cgl.getShader())

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer())

    this._cgl.profileData.profileTextureEffect++

    if (this._textureTarget.filter == Texture.FILTER_MIPMAP) {
      if (!this.switched) {
        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex)
        this._textureTarget.updateMipMap()
      } else {
        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex)
        this._textureSource.updateMipMap()
      }

      this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
    }

    this.switched = !this.switched
    this._countEffects++
  }

  TextureEffect.prototype.getCurrentTargetTexture = function () {
    if (this.switched) return this._textureSource
    return this._textureTarget
  }

  TextureEffect.prototype.getCurrentSourceTexture = function () {
    if (this._countEffects == 0 && this._bgTex) return this._bgTex

    if (this.switched) return this._textureTarget
    return this._textureSource
  }

  TextureEffect.prototype.delete = function () {
    if (this._textureTarget) this._textureTarget.delete()
    if (this._textureSource) this._textureSource.delete()
    this._cgl.gl.deleteRenderbuffer(this._renderbuffer)
    this._cgl.gl.deleteFramebuffer(this._frameBuf)
  }

  TextureEffect.prototype.createMesh = function () {
    this._cgl.TextureEffectMesh = MESHES.getSimpleRect(this._cgl, 'texEffectRect')
  }

  // ---------------------------------------------------------------------------------

  TextureEffect.checkOpNotInTextureEffect = function (op) {
    if (!op.patch.cgl) return true
    if (op.uiAttribs.error && !op.patch.cgl.currentTextureEffect) {
      op.setUiError('textureeffect', null)
      return true
    }
    if (!op.patch.cgl.currentTextureEffect) return true

    if (op.patch.cgl.currentTextureEffect && !op.uiAttribs.error) {
      op.setUiError(
        'textureeffect',
        'This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.',
        0
      )
      return false
    }

    if (op.patch.cgl.currentTextureEffect) return false
    return true
  }

  TextureEffect.checkOpInEffect = function (op, minver) {
    minver = minver || 0

    if (op.patch.cgl.currentTextureEffect) {
      if (op.uiAttribs.uierrors && op.patch.cgl.currentTextureEffect.imgCompVer >= minver) {
        op.setUiError('texeffect', null)
        return true
      }

      if (minver && op.patch.cgl.currentTextureEffect.imgCompVer < minver) {
        op.setUiError(
          'texeffect',
          'This op must be a child of an ImageCompose op with version >=' +
            minver +
            ' <span class="button-small" onclick="gui.patchView.downGradeOp(\'' +
            op.id +
            "','" +
            op.name +
            '\')">Downgrade</span> to previous version',
          1
        )
      }
    }

    if (op.patch.cgl.currentTextureEffect) return true

    if (!op.patch.cgl.currentTextureEffect && (!op.uiAttribs.uierrors || op.uiAttribs.uierrors.length == 0)) {
      op.setUiError(
        'texeffect',
        'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>. ',
        1
      )
      return false
    }

    if (!op.patch.cgl.currentTextureEffect) return false
    return true
  }

  TextureEffect.getBlendCode = function (ver) {
    let src =
      ''.endl() +
      'vec3 _blend(vec3 base,vec3 blend)'.endl() +
      '{'.endl() +
      '   vec3 colNew=blend;'.endl() +
      '   #ifdef BM_MULTIPLY'.endl() +
      '       colNew=base*blend;'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_MULTIPLY_INV'.endl() +
      '       colNew=base* vec3(1.0)-blend;'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_AVERAGE'.endl() +
      '       colNew=((base + blend) / 2.0);'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_ADD'.endl() +
      '       colNew=min(base + blend, vec3(1.0));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_SUBTRACT_ONE'.endl() +
      '       colNew=max(base + blend - vec3(1.0), vec3(0.0));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_SUBTRACT'.endl() +
      '       colNew=base - blend;'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_DIFFERENCE'.endl() +
      '       colNew=abs(base - blend);'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_NEGATION'.endl() +
      '       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_EXCLUSION'.endl() +
      '       colNew=(base + blend - 2.0 * base * blend);'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_LIGHTEN'.endl() +
      '       colNew=max(blend, base);'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_DARKEN'.endl() +
      '       colNew=min(blend, base);'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_OVERLAY'.endl() +
      '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'
        // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
        //    .endl()+'      colNew=Blend(base, blend, BlendOverlayf);'
        .endl() +
      '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_SCREEN'.endl() +
      '      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))'
        // .endl()+'       #define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)'
        // .endl()+'      colNew=Blend(base, blend, BlendScreenf);'
        .endl() +
      '      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_SOFTLIGHT'.endl() +
      '      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))'
        // .endl()+'       #define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)'
        //    .endl()+'      colNew=Blend(base, blend, BlendSoftLightf);'
        .endl() +
      '      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_HARDLIGHT'.endl() +
      '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'
        // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
        // .endl()+'      colNew=Blend(blend, base, BlendOverlayf);'
        .endl() +
      '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_COLORDODGE'.endl() +
      '      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))'
        // .endl()+'      colNew=Blend(base, blend, BlendColorDodgef);'
        .endl() +
      '      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));'.endl() +
      '   #endif'.endl() +
      '   #ifdef BM_COLORBURN'.endl() +
      '      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))'
        // .endl()+'      colNew=Blend(base, blend, BlendColorBurnf);'
        .endl() +
      '      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));'.endl() +
      '   #endif'.endl() +
      '   return colNew;'.endl() +
      '}'.endl()

    if (!ver)
      src +=
        'vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)'.endl() +
        '{'.endl() +
        'vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);'.endl() +
        'col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);'.endl() +
        'return col;'.endl() +
        '}'.endl()

    if (ver >= 3)
      src +=
        'vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)'.endl() +
        '{'.endl() +
        '#ifdef BM_MATH_ADD'.endl() +
        '   return vec4(base.rgb+col.rgb*amount,1.0);'.endl() +
        '#endif'.endl() +
        '#ifdef BM_MATH_SUB'.endl() +
        '   return vec4(base.rgb-col.rgb*amount,1.0);'.endl() +
        '#endif'.endl() +
        '#ifdef BM_MATH_MUL'.endl() +
        '   return vec4(base.rgb*col.rgb*amount,1.0);'.endl() +
        '#endif'.endl() +
        '#ifdef BM_MATH_DIV'.endl() +
        '   return vec4(base.rgb/col.rgb*amount,1.0);'.endl() +
        '#endif'.endl() +
        '#ifndef BM_MATH'.endl() +
        'vec3 colNew=_blend(base.rgb,col.rgb);'.endl() +
        'float newA=clamp(base.a+(col.a*amount),0.,1.);'.endl() +
        '#ifdef BM_ALPHAMASKED'.endl() +
        'newA=base.a;'.endl() +
        '#endif'.endl() +
        'return vec4('.endl() +
        'mix(colNew,base.rgb,1.0-(amount*col.a)),'.endl() +
        'newA);'.endl() +
        '#endif'.endl() +
        '}'.endl()

    return src
  }

  TextureEffect.onChangeBlendSelect = function (shader, blendName, maskAlpha = false) {
    blendName = String(blendName)
    shader.toggleDefine('BM_NORMAL', blendName == 'normal')
    shader.toggleDefine('BM_MULTIPLY', blendName == 'multiply')
    shader.toggleDefine('BM_MULTIPLY_INV', blendName == 'multiply invert')
    shader.toggleDefine('BM_AVERAGE', blendName == 'average')
    shader.toggleDefine('BM_ADD', blendName == 'add')
    shader.toggleDefine('BM_SUBTRACT_ONE', blendName == 'subtract one')
    shader.toggleDefine('BM_SUBTRACT', blendName == 'subtract')
    shader.toggleDefine('BM_DIFFERENCE', blendName == 'difference')
    shader.toggleDefine('BM_NEGATION', blendName == 'negation')
    shader.toggleDefine('BM_EXCLUSION', blendName == 'exclusion')
    shader.toggleDefine('BM_LIGHTEN', blendName == 'lighten')
    shader.toggleDefine('BM_DARKEN', blendName == 'darken')
    shader.toggleDefine('BM_OVERLAY', blendName == 'overlay')
    shader.toggleDefine('BM_SCREEN', blendName == 'screen')
    shader.toggleDefine('BM_SOFTLIGHT', blendName == 'softlight')
    shader.toggleDefine('BM_HARDLIGHT', blendName == 'hardlight')
    shader.toggleDefine('BM_COLORDODGE', blendName == 'color dodge')
    shader.toggleDefine('BM_COLORBURN', blendName == 'color burn')

    shader.toggleDefine('BM_MATH_ADD', blendName == 'Math Add')
    shader.toggleDefine('BM_MATH_SUB', blendName == 'Math Subtract')
    shader.toggleDefine('BM_MATH_MUL', blendName == 'Math Multiply')
    shader.toggleDefine('BM_MATH_DIV', blendName == 'Math Divide')

    shader.toggleDefine('BM_MATH', blendName.indexOf('Math ') == 0)

    shader.toggleDefine('BM_ALPHAMASKED', maskAlpha)
  }

  TextureEffect.AddBlendSelect = function (op, name, defaultMode) {
    const p = op.inValueSelect(
      name || 'Blend Mode',
      [
        'normal',
        'lighten',
        'darken',
        'multiply',
        'multiply invert',
        'average',
        'add',
        'subtract',
        'difference',
        'negation',
        'exclusion',
        'overlay',
        'screen',
        'color dodge',
        'color burn',
        'softlight',
        'hardlight',
        'subtract one',
        'Math Add',
        'Math Subtract',
        'Math Multiply',
        'Math Divide'
      ],
      defaultMode || 'normal'
    )
    return p
  }

  TextureEffect.AddBlendAlphaMask = function (op, name, defaultMode) {
    const p = op.inSwitch(name || 'Alpha Mask', ['Off', 'On'], defaultMode || 'Off')
    return p
  }

  TextureEffect.setupBlending = function (op, shader, blendPort, amountPort, alphaMaskPort) {
    const onChange = () => {
      let maskAlpha = false
      if (alphaMaskPort) maskAlpha = alphaMaskPort.get() == 'On'
      TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha)

      let str = blendPort.get()
      if (str == 'normal') str = null
      else if (str == 'multiply') str = 'mul'
      else if (str == 'multiply invert') str = 'mulinv'
      else if (str == 'lighten') str = 'light'
      else if (str == 'darken') str = 'darken'
      else if (str == 'average') str = 'avg'
      else if (str == 'subtract one') str = 'sub one'
      else if (str == 'subtract') str = 'sub'
      else if (str == 'difference') str = 'diff'
      else if (str == 'negation') str = 'neg'
      else if (str == 'exclusion') str = 'exc'
      else if (str == 'overlay') str = 'ovl'
      else if (str == 'color dodge') str = 'dodge'
      else if (str == 'color burn') str = 'burn'
      else if (str == 'softlight') str = 'soft'
      else if (str == 'hardlight') str = 'hard'
      else if (str == 'Math Add') str = '+'
      else if (str == 'Math Subtract') str = '-'
      else if (str == 'Math Multiply') str = '*'
      else if (str == 'Math Divide') str = '/'

      op.setUiAttrib({ extendTitle: str })
    }
    op.setPortGroup('Blending', [blendPort, amountPort, alphaMaskPort])

    let maskAlpha = false

    blendPort.onChange = onChange
    if (alphaMaskPort) {
      alphaMaskPort.onChange = onChange
      maskAlpha = alphaMaskPort.get() == 'On'
    }

    TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha)
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_shader_lib.js

  const ShaderLibMods = {
    'CGL1.BLENDMODES': function () {
      this.name = 'blendmodes'
      this.srcHeadFrag = TextureEffect.getBlendCode()
    },
    'CGL1.BLENDMODES3': function () {
      this.name = 'blendmodes3'
      this.srcHeadFrag = TextureEffect.getBlendCode(3)
    },

    'CGL1.LUMINANCE': function () {
      this.name = 'luminance'
      this.srcHeadFrag =
        ''.endl() +
        'float cgl_luminance(vec3 c)'.endl() +
        '{'.endl() +
        '    return dot(vec3(0.2126,0.7152,0.0722),c);'.endl() +
        '}'.endl()
    },

    // quite good random numbers, but somehow don't work in ANGLE
    'CGL1.RANDOM_OLD': function () {
      this.name = 'randomNumber'
      this.srcHeadFrag =
        ''.endl() +
        'float cgl_random(vec2 co)'.endl() +
        '{'.endl() +
        '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);'.endl() +
        '}'.endl() +
        'vec3 cgl_random3(vec2 co)'.endl() +
        '{'.endl() +
        '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() +
        '}'
    },

    // low quality generative ranodm numbers
    'CGL1.RANDOM_LOW': function () {
      this.name = 'randomNumber'
      this.srcHeadFrag =
        ''.endl() +
        'float cgl_random(vec2 co)'.endl() +
        '{'.endl() +
        '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);'.endl() +
        '}'.endl() +
        'vec3 cgl_random3(vec2 co)'.endl() +
        '{'.endl() +
        '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() +
        '}'
    },

    // texture based random numbers
    'CGL1.RANDOM_TEX': function () {
      this.name = 'randomNumbertex'
      this.srcHeadFrag =
        ''.endl() +
        'UNI sampler2D CGL1RNDTEX;'.endl() +
        'float cgl_random(vec2 co)'.endl() +
        '{'.endl() +
        '    return texture(CGL1RNDTEX,co*5711.0).r;'.endl() +
        '}'.endl() +
        'vec3 cgl_random3(vec2 co)'.endl() +
        '{'.endl() +
        '    return texture(CGL1RNDTEX,co*5711.0).rgb;'.endl() +
        '}'

      this.initUniforms = function (shader) {
        return [new Uniform(shader, 't', 'CGL1RNDTEX', 7)]
      }

      this.onBind = function (cgl, shader) {
        Texture.getRandomTexture(cgl)
        cgl.setTexture(7, Texture.getRandomTexture(cgl).tex)
      }
    }
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_utils.js

  /** @namespace CGL1 */

  /**
   * multiply to get radians from degree, e.g. `360 * CGL1.DEG2RAD`
   * @const {Number}
   * @memberof CGL1
   * @static
   */
  const cgl_utils_DEG2RAD = Math.PI / 180.0

  /**
   * to get degrees from radians, e.g. `3.14 * CGL1.RAD2DEG`
   * @const {number}
   * @memberof CGL1
   */
  const cgl_utils_RAD2DEG = 180.0 / Math.PI

  const onLoadingAssetsFinished = null // deprecated / remove later

  /**
   * get normalized mouse wheel delta (including browser specific adjustment)
   * @function getWheelDelta
   * @static
   * @memberof CGL1
   * @param {MouseEvent} event
   * @return {Number} normalized delta
   */
  const isWindows = window.navigator.userAgent.contains('Windows')
  const getWheelDelta_ = function (event) {
    let normalized
    if (event.wheelDelta) {
      // chrome
      normalized = (event.wheelDelta % 120) - 0 == -0 ? event.wheelDelta / 120 : event.wheelDelta / 30
      normalized *= -1.5
      if (isWindows) normalized *= 2
    } else {
      // firefox
      let d = event.deltaY
      if (event.shiftKey) d = event.deltaX
      const rawAmmount = d || event.detail
      normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3)
      normalized *= -3
    }

    if (normalized > 20) normalized = 20
    if (normalized < -20) normalized = -20

    return normalized
  }

  const getWheelSpeed = getWheelDelta_
  const getWheelDelta = getWheelDelta_

  // from https://github.com/lodash/lodash/blob/master/escape.js

  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }

  /** Used to match HTML entities and HTML characters. */
  const reUnescapedHtml = /[&<>"']/g
  const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)

  /*  eslint-disable */
  const escapeHTML = function (string) {
    return string && reHasUnescapedHtml.test(string)
      ? string.replace(reUnescapedHtml, function (chr) {
          return htmlEscapes[chr]
        })
      : string || ''
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_shader_default_glsl.vert
  /* eslint-enable */

  /* harmony default export */ const cgl_shader_default_glsl =
    '{{MODULES_HEAD}}\nIN vec3 vPosition; //!@\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    gl_PointSize=10.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MOVELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n' // CONCATENATED MODULE: ./src/core/cgl/cgl_shader.js
  // import { CGL1 } from "./index.js";

  // ---------------------------------------------------------------------------

  /*

proposal default shader variable names:

attrVertex - currently: vPosition
attrVertexIndex - currently: attrVertIndex
attrTexCoord
attrInstMat - currently: instMat
attrVertColor
attrTangent
attrBiTangent

uProjMatrix - currently: projMatrix
uModelMatrix - currently: modelMatrix
uNormalMatrix - currently: normalMatrix
uCamPosition - currently: camPos

*/

  // ---------------------------------------------------------------------------

  let materialIdCounter = 0

  /**
   * @class
   * @external CGL1
   * @namespace Shader
   * @hideconstructor
   * @example
   * var shader=new CGL1.Shader(cgl,'MinimalMaterial');
   * shader.setSource(attachments.shader_vert,attachments.shader_frag);
   */
  const Shader = function (_cgl, _name, _op) {
    if (!_cgl) throw new Error('shader constructed without cgl ' + _name)

    this._log = new Logger('cgl_shader')
    this._cgl = _cgl

    if (!_name) this._log.stack('no shader name given')
    this._name = _name || 'unknown'

    if (_op) this.opId = _op.id
    this.glslVersion = 0
    if (_cgl.glVersion > 1) this.glslVersion = 300

    this._materialId = ++materialIdCounter

    this.id = simpleId()
    this._isValid = true
    this._program = null
    this._uniforms = []
    this._drawBuffers = [true]
    this._defines = []
    this._needsRecompile = true
    this._compileReason = 'initial'

    this.ignoreMissingUniforms = false
    this._projMatrixUniform = null
    this._mvMatrixUniform = null
    this._mMatrixUniform = null
    this._vMatrixUniform = null
    this._camPosUniform = null
    this._normalMatrixUniform = null
    this._inverseViewMatrixUniform = null

    this._attrVertexPos = -1
    this.precision = _cgl.patch.config.glslPrecision || 'highp'

    this._pMatrixState = -1
    this._vMatrixState = -1

    this._countMissingUniforms = 0
    this._modGroupCount = 0 // not needed anymore...
    this._feedBackNames = []
    this._attributes = []

    this.glPrimitive = null
    this.offScreenPass = false
    this._extensions = []
    this.srcVert = this.getDefaultVertexShader()
    this.srcFrag = this.getDefaultFragmentShader()
    this.lastCompile = 0

    this._moduleNames = []
    this._modules = []
    this._moduleNumId = 0

    this._libs = []
    this._structNames = []
    this._structUniformNames = []
    this._textureStackUni = []
    this._textureStackTex = []
    this._textureStackType = []
    this._textureStackTexCgl = []

    this._tempNormalMatrix = mat4.create()
    this._tempCamPosMatrix = mat4.create()
    this._tempInverseViewMatrix = mat4.create()
    this._tempInverseProjMatrix = mat4.create()

    this.setModules(['MODULE_VERTEX_POSITION', 'MODULE_COLOR', 'MODULE_BEGIN_FRAG', 'MODULE_VERTEX_MOVELVIEW'])
  }

  Shader.prototype.isValid = function () {
    return this._isValid
  }

  Shader.prototype.getCgl = function () {
    return this._cgl
  }

  Shader.prototype.getName = function () {
    return this._name
  }

  /**
   * enable an extension for the shader
   * @function enableExtension
   * @memberof Shader
   * @instance
   * @param name extension name
   */
  Shader.prototype.enableExtension = function (name) {
    this.setWhyCompile('enable extension ' + name)
    this._needsRecompile = true
    this._extensions.push(name)
  }

  Shader.prototype.getAttrVertexPos = function () {
    return this._attrVertexPos
  }

  Shader.prototype.hasTextureUniforms = function () {
    for (let i = 0; i < this._uniforms.length; i++) if (this._uniforms[i].getType() == 't') return true
    return false
  }

  Shader.prototype.setWhyCompile = function (why) {
    this._compileReason = why
  }

  /**
   * copy all uniform values from another shader
   * @function copyUniforms
   * @memberof Shader
   * @instance
   * @param shader uniform values will be copied from this shader
   */
  Shader.prototype.copyUniformValues = function (origShader) {
    // console.log(origShader._uniforms);
    for (let i = 0; i < origShader._uniforms.length; i++) {
      if (!this._uniforms[i]) {
        this._log.log('unknown uniform?!')
        continue
      }

      // this._log.log(origShader._uniforms[i].getName());
      // this.getUniform(origShader._uniforms[i].)
      // this._uniforms[i].set(origShader._uniforms[i].getValue());

      // if (origShader._uniforms[i].getName().contains("pathPoints"))
      //     console.log("copyUniformValues", origShader._uniforms[i].getName(), origShader._uniforms[i].getValue());

      this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue())
    }

    this.popTextures()
    for (let i = 0; i < origShader._textureStackUni.length; i++) {
      this._textureStackUni[i] = origShader._textureStackUni[i]
      this._textureStackTex[i] = origShader._textureStackTex[i]
      this._textureStackType[i] = origShader._textureStackType[i]
      this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i]
    }

    // this._textureStackUni = [];
    // this._textureStackTex = [];
    // this._textureStackType = [];
    // this._textureStackTexCgl = [];
  }

  /**
   * copy current shader
   * @function copy
   * @memberof Shader
   * @instance
   * @returns newShader
   */
  Shader.prototype.copy = function () {
    const shader = new Shader(this._cgl, this._name + ' copy')
    shader.setSource(this.srcVert, this.srcFrag)

    shader._modules = JSON.parse(JSON.stringify(this._modules))
    shader._defines = JSON.parse(JSON.stringify(this._defines))

    shader._modGroupCount = this._modGroupCount
    shader._moduleNames = this._moduleNames
    shader.glPrimitive = this.glPrimitive
    shader.offScreenPass = this.offScreenPass
    shader._extensions = this._extensions
    shader.wireframe = this.wireframe
    shader._attributes = this._attributes

    for (let i = 0; i < this._uniforms.length; i++) {
      const u = this._uniforms[i].copy(shader)
      u.resetLoc()
    }

    this.setWhyCompile('copy')
    shader._needsRecompile = true
    return shader
  }

  /**
   * set shader source code
   * @function setSource
   * @memberof Shader
   * @instance
   * @param {String} srcVert
   * @param {String} srcFrag
   */
  Shader.prototype.setSource = function (srcVert, srcFrag) {
    this.srcVert = srcVert
    this.srcFrag = srcFrag
    this.setWhyCompile('Source changed')
    this._needsRecompile = true
    this._isValid = true
  }

  Shader.prototype._addLibs = function (src) {
    for (const id in ShaderLibMods) {
      if (src.contains(id)) {
        const lib = new ShaderLibMods[id]()
        src = src.replace('{{' + id + '}}', lib.srcHeadFrag)
        this._libs.push(lib)
        if (lib.initUniforms) lib.initUniforms(this)
      }
    }

    return src
  }

  Shader.prototype.createStructUniforms = function () {
    // * create structs
    let structStrFrag = ''
    let structStrVert = '' // TODO: not used yet

    this._structNames = []
    // * reset the arrays holding the value each recompile so we don't skip structs
    // * key value mapping so the same struct can be added twice (two times the same modifier)
    this._injectedStringsFrag = {}
    this._injectedStringsVert = {}

    this._structUniformNamesIndicesFrag = []
    this._structUniformNamesIndicesVert = []

    for (let i = 0; i < this._uniforms.length; i++) {
      // * only add uniforms to struct that are a member of a struct
      if (this._uniforms[i].isStructMember()) {
        const injectionString = '{{INJECTION_POINT_STRUCT_' + this._uniforms[i]._structName + '}}'

        // * check if struct is not already part of shader
        if (!this._structNames.includes(this._uniforms[i]._structName)) {
          // * create struct definition with placeholder string to inject
          const structDefinition =
            'struct ' + this._uniforms[i]._structName + ' {'.endl() + injectionString + '};'.endl().endl()

          if (this._uniforms[i].getShaderType() === 'both' || this._uniforms[i].getShaderType() === 'frag')
            structStrFrag = structStrFrag.concat(structDefinition)

          if (this._uniforms[i].getShaderType() === 'both' || this._uniforms[i].getShaderType() === 'vert')
            structStrVert = structStrVert.concat(structDefinition)

          this._structNames.push(this._uniforms[i]._structName)
          this._injectedStringsFrag[this._uniforms[i]._structName] = []
          this._injectedStringsVert[this._uniforms[i]._structName] = []
        }

        // * create member & comment
        let comment = ''
        if (this._uniforms[i].comment) comment = ' // ' + this._uniforms[i].comment

        let stringToInsert = ''
        if (this._uniforms[i].getGlslTypeString() == undefined) stringToInsert += '//'
        stringToInsert +=
          '  ' + this._uniforms[i].getGlslTypeString() + ' ' + this._uniforms[i]._propertyName + ';' + comment

        if (this._uniforms[i].getShaderType() === 'both') {
          // * inject member before {injectionString}
          if (
            !this._injectedStringsFrag[this._uniforms[i]._structName].contains(stringToInsert) &&
            !this._injectedStringsVert[this._uniforms[i]._structName].contains(stringToInsert)
          ) {
            const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString)
            const insertionIndexVert = structStrVert.lastIndexOf(injectionString)

            structStrFrag =
              structStrFrag.slice(0, insertionIndexFrag) + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1)

            structStrVert =
              structStrVert.slice(0, insertionIndexVert) + stringToInsert + structStrVert.slice(insertionIndexVert - 1)

            this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert)
            this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert)
          }

          if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i)
          if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i)
        } else if (this._uniforms[i].getShaderType() === 'frag') {
          // * inject member before {injectionString}
          if (!this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)) {
            //
            const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString)

            structStrFrag =
              structStrFrag.slice(0, insertionIndexFrag) + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1)

            this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert)
          }

          if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i)
        } else if (this._uniforms[i].getShaderType() === 'vert') {
          // * inject member before {injectionString}
          if (!this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert)) {
            const insertionIndexVert = structStrVert.lastIndexOf(injectionString)

            structStrVert =
              structStrVert.slice(0, insertionIndexVert) + stringToInsert + structStrVert.slice(insertionIndexVert - 1)

            this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert)
          }

          if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i)
        }
      }
    }

    // * dedupe injected uni declarations
    this._uniDeclarationsFrag = []
    this._uniDeclarationsVert = []

    // * remove struct injection points and add uniform in fragment
    for (let i = 0; i < this._structUniformNamesIndicesFrag.length; i += 1) {
      const index = this._structUniformNamesIndicesFrag[i]
      const uniDeclarationString =
        'UNI ' + this._uniforms[index]._structName + ' ' + this._uniforms[index]._structUniformName + ';'.endl()

      if (!this._uniDeclarationsFrag.includes(uniDeclarationString)) {
        const injectionString = '{{INJECTION_POINT_STRUCT_' + this._uniforms[index]._structName + '}}'

        structStrFrag = structStrFrag.replace(injectionString, '')
        structStrFrag += uniDeclarationString

        this._uniDeclarationsFrag.push(uniDeclarationString)
      }
    }

    // * remove struct injection points and add uniform in vertex
    for (let i = 0; i < this._structUniformNamesIndicesVert.length; i += 1) {
      const index = this._structUniformNamesIndicesVert[i]
      const uniDeclarationString =
        'UNI ' + this._uniforms[index]._structName + ' ' + this._uniforms[index]._structUniformName + ';'.endl()

      if (!this._uniDeclarationsVert.includes(uniDeclarationString)) {
        const injectionString = '{{INJECTION_POINT_STRUCT_' + this._uniforms[index]._structName + '}}'

        structStrVert = structStrVert.replace(injectionString, '')
        structStrVert += uniDeclarationString
        this._uniDeclarationsVert.push(uniDeclarationString)
      }
    }

    return [structStrVert, structStrFrag]
  }

  Shader.prototype._getAttrSrc = function (attr, firstLevel) {
    const r = {}
    if (attr.name && attr.type) {
      r.srcHeadVert = ''
      if (!firstLevel) r.srcHeadVert += '#ifndef ATTRIB_' + attr.name.endl()
      r.srcHeadVert += '#define ATTRIB_' + attr.name.endl()
      r.srcHeadVert += 'IN ' + attr.type + ' ' + attr.name + ';'.endl()
      if (!firstLevel) r.srcHeadVert += '#endif'.endl()

      if (attr.nameFrag) {
        r.srcHeadVert += ''
        if (!firstLevel) r.srcHeadVert += '#ifndef ATTRIB_' + attr.nameFrag.endl()
        r.srcHeadVert += '#define ATTRIB_' + attr.nameFrag.endl()
        r.srcHeadVert += 'OUT ' + attr.type + ' ' + attr.nameFrag + ';'.endl()
        if (!firstLevel) r.srcHeadVert += '#endif'.endl()

        r.srcVert = ''.endl() + attr.nameFrag + '=' + attr.name + ';'

        r.srcHeadFrag = ''
        if (!firstLevel) r.srcHeadFrag += '#ifndef ATTRIB_' + attr.nameFrag.endl()
        r.srcHeadFrag += '#define ATTRIB_' + attr.nameFrag.endl()
        r.srcHeadFrag += 'IN ' + attr.type + ' ' + attr.nameFrag + ';'.endl()
        if (!firstLevel) r.srcHeadFrag += '#endif'.endl()
      }
    }
    return r
  }

  Shader.prototype.compile = function () {
    if (this._cgl.aborted) return
    const startTime = performance.now()

    this._cgl.profileData.profileShaderCompiles++
    this._cgl.profileData.profileShaderCompileName = this._name + ' [' + this._compileReason + ']'

    let extensionString = ''
    if (this._extensions)
      for (let i = 0; i < this._extensions.length; i++)
        extensionString += '#extension ' + this._extensions[i] + ' : enable'.endl()

    let definesStr = ''
    if (this._defines.length) definesStr = '\n// cgl generated'.endl()
    for (let i = 0; i < this._defines.length; i++)
      definesStr += '#define ' + this._defines[i][0] + ' ' + this._defines[i][1] + ''.endl()

    const structStrings = this.createStructUniforms()
    this._cgl.profileData.addHeavyEvent('shader compile', this._name + ' [' + this._compileReason + ']')
    this._compileReason = ''

    if (this._uniforms) {
      // * we create an array of the uniform names to check our indices & an array to save them
      const uniNames = this._uniforms.map((uni) => {
        return uni._name
      })
      const indicesToRemove = []

      // * we go through our uniforms and check if the same name is contained somewhere further in the array
      // * if so, we add the current index to be removed later
      for (let i = 0; i < this._uniforms.length; i++) {
        const uni = this._uniforms[i]
        const nextIndex = uniNames.indexOf(uni._name, i + 1)
        if (nextIndex > -1) indicesToRemove.push(i)
      }

      // * after that, we go through the uniforms backwards (so we keep the order) and remove the indices
      // * also, we reset the locations of all the other valid uniforms
      for (let j = this._uniforms.length - 1; j >= 0; j -= 1) {
        if (indicesToRemove.includes(j)) this._uniforms.splice(j, 1)
        else this._uniforms[j].resetLoc()
      }
    }

    this._cgl.printError('uniform resets')

    if (this.hasTextureUniforms()) definesStr += '#define HAS_TEXTURES'.endl()

    let vs = ''
    let fs = ''

    if (!this.srcFrag) {
      this._log.error('[cgl shader] has no fragment source!', this)
      this.srcVert = this.getDefaultVertexShader()
      this.srcFrag = this.getDefaultFragmentShader()
      // return;
    }

    if (this.glslVersion == 300) {
      vs =
        '#version 300 es'.endl() +
        '// '.endl() +
        '// vertex shader ' +
        this._name.endl() +
        '// '.endl() +
        'precision ' +
        this.precision +
        ' float;'.endl() +
        'precision ' +
        this.precision +
        ' sampler2D;'.endl() +
        ''.endl() +
        '#define WEBGL2'.endl() +
        '#define texture2D texture'.endl() +
        '#define UNI uniform'.endl() +
        '#define IN in'.endl() +
        '#define OUT out'.endl()

      fs =
        '#version 300 es'.endl() +
        '// '.endl() +
        '// fragment shader ' +
        this._name.endl() +
        '// '.endl() +
        'precision ' +
        this.precision +
        ' float;'.endl() +
        'precision ' +
        this.precision +
        ' sampler2D;'.endl() +
        ''.endl() +
        '#define WEBGL2'.endl() +
        '#define texture2D texture'.endl() +
        '#define IN in'.endl() +
        '#define OUT out'.endl() +
        '#define UNI uniform'.endl() +
        '{{DRAWBUFFER}}'.endl()
    } else {
      fs =
        ''.endl() +
        '// '.endl() +
        '// fragment shader ' +
        this._name.endl() +
        '// '.endl() +
        '#define WEBGL1'.endl() +
        '#define texture texture2D'.endl() +
        '#define outColor gl_FragColor'.endl() +
        '#define IN varying'.endl() +
        '#define UNI uniform'.endl()

      vs =
        ''.endl() +
        '// '.endl() +
        '// vertex shader ' +
        this._name.endl() +
        '// '.endl() +
        '#define WEBGL1'.endl() +
        '#define texture texture2D'.endl() +
        '#define OUT varying'.endl() +
        '#define IN attribute'.endl() +
        '#define UNI uniform'.endl()
    }

    let uniformsStrVert = '\n// cgl generated'.endl()
    let uniformsStrFrag = '\n// cgl generated'.endl()

    fs += '\n// active mods: --------------- '
    vs += '\n// active mods: --------------- '

    let foundModsFrag = false
    let foundModsVert = false
    for (let i = 0; i < this._moduleNames.length; i++) {
      for (let j = 0; j < this._modules.length; j++) {
        if (this._modules[j].name == this._moduleNames[i]) {
          if (this._modules[j].srcBodyFrag || this._modules[j].srcHeadFrag) {
            foundModsFrag = true
            fs += '\n// ' + i + '.' + j + '. ' + this._modules[j].title + ' (' + this._modules[j].name + ')'
          }
          if (this._modules[j].srcBodyVert || this._modules[j].srcHeadVert) {
            vs += '\n// ' + i + '.' + j + '. ' + this._modules[j].title + ' (' + this._modules[j].name + ')'
            foundModsVert = true
          }
        }
      }
    }
    if (!foundModsVert) fs += '\n// no mods used...'
    if (!foundModsFrag) fs += '\n// no mods used...'
    fs += '\n'
    vs += '\n'

    for (let i = 0; i < this._uniforms.length; i++) {
      if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember()) {
        let uniStr = ''
        if (!this._uniforms[i].getGlslTypeString()) uniStr += '// '
        uniStr += 'UNI ' + this._uniforms[i].getGlslTypeString() + ' ' + this._uniforms[i].getName()
        let comment = ''
        if (this._uniforms[i].comment) comment = ' // ' + this._uniforms[i].comment

        if (this._uniforms[i].shaderType == 'vert' || this._uniforms[i].shaderType == 'both')
          if (
            !this.srcVert.contains(uniStr) &&
            !this.srcVert.contains(
              'uniform ' + this._uniforms[i].getGlslTypeString() + ' ' + this._uniforms[i].getName()
            )
          )
            uniformsStrVert += uniStr + ';' + comment.endl()

        if (this._uniforms[i].shaderType == 'frag' || this._uniforms[i].shaderType == 'both')
          if (
            !this.srcFrag.contains(uniStr) &&
            !this.srcFrag.contains(
              'uniform ' + this._uniforms[i].getGlslTypeString() + ' ' + this._uniforms[i].getName()
            )
          )
            uniformsStrFrag += uniStr + ';' + comment.endl()
      }
    }

    let countUniFrag = 0
    let countUniVert = 0
    for (let i = 0; i < this._uniforms.length; i++) {
      if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember()) {
        if (this._uniforms[i].shaderType == 'vert' || this._uniforms[i].shaderType == 'both') countUniVert++
        if (this._uniforms[i].shaderType == 'frag' || this._uniforms[i].shaderType == 'both') countUniFrag++
      }
    }
    if (countUniFrag >= this._cgl.maxUniformsFrag)
      this._log.warn('[cgl_shader] num uniforms frag: ' + countUniFrag + ' / ' + this._cgl.maxUniformsFrag)
    if (countUniVert >= this._cgl.maxUniformsVert)
      this._log.warn('[cgl_shader] num uniforms vert: ' + countUniVert + ' / ' + this._cgl.maxUniformsVert)

    if (!fs.contains('precision')) fs = 'precision ' + this.precision + ' float;'.endl() + fs
    if (!vs.contains('precision')) vs = 'precision ' + this.precision + ' float;'.endl() + vs
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      fs += '#define MOBILE'.endl()
      vs += '#define MOBILE'.endl()
    }
    vs = extensionString + vs + definesStr + structStrings[0] + uniformsStrVert + '\n// -- \n' + this.srcVert
    fs = extensionString + fs + definesStr + structStrings[1] + uniformsStrFrag + '\n// -- \n' + this.srcFrag

    let srcHeadVert = ''
    let srcHeadFrag = ''

    this._modules.sort(function (a, b) {
      return a.group - b.group
    })

    this._modules.sort(function (a, b) {
      return a.priority || 0 - b.priority || 0
    })

    let addedAttribs = false

    for (let i = 0; i < this._moduleNames.length; i++) {
      let srcVert = ''
      let srcFrag = ''

      if (!addedAttribs) {
        addedAttribs = true

        for (let k = 0; k < this._attributes.length; k++) {
          const r = this._getAttrSrc(this._attributes[k], true)
          if (r.srcHeadVert) srcHeadVert += r.srcHeadVert
          if (r.srcVert) srcVert += r.srcVert
          if (r.srcHeadFrag) srcHeadFrag += r.srcHeadFrag
        }
      }

      for (let j = 0; j < this._modules.length; j++) {
        const mod = this._modules[j]
        if (mod.name == this._moduleNames[i]) {
          srcHeadVert +=
            '\n//---- MOD: group:' +
            mod.group +
            ': idx:' +
            j +
            ' - prfx:' +
            mod.prefix +
            ' - ' +
            mod.title +
            ' ------\n'
          srcHeadFrag +=
            '\n//---- MOD: group:' +
            mod.group +
            ': idx:' +
            j +
            ' - prfx:' +
            mod.prefix +
            ' - ' +
            mod.title +
            ' ------\n'

          srcVert += '\n\n//---- MOD: ' + mod.title + ' / ' + mod.priority + ' ------\n'
          srcFrag += '\n\n//---- MOD: ' + mod.title + ' / ' + mod.priority + ' ------\n'

          if (mod.attributes)
            for (let k = 0; k < mod.attributes.length; k++) {
              const r = this._getAttrSrc(mod.attributes[k], false)
              if (r.srcHeadVert) srcHeadVert += r.srcHeadVert
              if (r.srcVert) srcVert += r.srcVert
              if (r.srcHeadFrag) srcHeadFrag += r.srcHeadFrag
            }

          srcHeadVert += mod.srcHeadVert || ''
          srcHeadFrag += mod.srcHeadFrag || ''
          srcVert += mod.srcBodyVert || ''
          srcFrag += mod.srcBodyFrag || ''

          srcHeadVert += '\n//---- end mod ------\n'
          srcHeadFrag += '\n//---- end mod ------\n'

          srcVert += '\n//---- end mod ------\n'
          srcFrag += '\n//---- end mod ------\n'

          srcVert = srcVert.replace(/{{mod}}/g, mod.prefix)
          srcFrag = srcFrag.replace(/{{mod}}/g, mod.prefix)
          srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix)
          srcHeadFrag = srcHeadFrag.replace(/{{mod}}/g, mod.prefix)

          srcVert = srcVert.replace(/MOD_/g, mod.prefix)
          srcFrag = srcFrag.replace(/MOD_/g, mod.prefix)
          srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix)
          srcHeadFrag = srcHeadFrag.replace(/MOD_/g, mod.prefix)
        }
      }

      vs = vs.replace('{{' + this._moduleNames[i] + '}}', srcVert)
      fs = fs.replace('{{' + this._moduleNames[i] + '}}', srcFrag)
    }
    vs = vs.replace('{{MODULES_HEAD}}', srcHeadVert)
    fs = fs.replace('{{MODULES_HEAD}}', srcHeadFrag)

    vs = this._addLibs(vs)
    fs = this._addLibs(fs)

    // SETUP draw buffers / multi texture render targets

    let drawBufferStr = ''
    for (let i = 0; i < 16; i++) if (fs.contains('outColor' + i)) this._drawBuffers[i] = true

    if (this._drawBuffers.length == 1) {
      drawBufferStr = 'out vec4 outColor;'.endl()
      drawBufferStr += '#define gl_FragColor outColor'.endl()
    } else {
      drawBufferStr += '#define MULTI_COLORTARGETS'.endl()
      drawBufferStr += 'vec4 outColor;'.endl()

      let count = 0
      for (let i = 0; i < this._drawBuffers.length; i++) {
        if (count == 0) drawBufferStr += '#define gl_FragColor outColor' + i + ''.endl()
        drawBufferStr += 'layout(location = ' + i + ') out vec4 outColor' + i + ';'.endl()
        count++
      }
    }

    fs = fs.replace('{{DRAWBUFFER}}', drawBufferStr)
    // //////

    if (!this._program) {
      this._program = this._createProgram(vs, fs)
    } else {
      // this.vshader=createShader(vs, gl.VERTEX_SHADER, this.vshader );
      // this.fshader=createShader(fs, gl.FRAGMENT_SHADER, this.fshader );
      // linkProgram(program);
      this._program = this._createProgram(vs, fs)

      this._projMatrixUniform = null

      for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc()
    }

    this.finalShaderFrag = fs
    this.finalShaderVert = vs

    MESH.lastMesh = null
    MESH.lastShader = null

    this._countMissingUniforms = 0
    this._needsRecompile = false
    this.lastCompile = now()

    // this._cgl.printError("shader compile");

    this._cgl.profileData.shaderCompileTime += performance.now() - startTime
  }

  Shader.hasChanged = function () {
    return this._needsRecompile
  }

  Shader.prototype.bind = function () {
    if (!this._isValid || this._cgl.aborted) return

    MESH.lastShader = this

    if (!this._program || this._needsRecompile) this.compile()
    if (!this._isValid) return

    if (!this._projMatrixUniform && !this.ignoreMissingUniforms) {
      this._countMissingUniforms++
      // if (this._countMissingUniforms == 10)console.log("stopping getlocation of missing uniforms...", this._name);
      if (this._countMissingUniforms < 10) {
        this._projMatrixUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_PROJMAT
        )
        this._attrVertexPos = this._cgl.glGetAttribLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION
        )
        this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, 'mvMatrix')
        this._vMatrixUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWMAT
        )
        this._mMatrixUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_MODELMAT
        )
        this._camPosUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWPOS
        )
        this._normalMatrixUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_NORMALMAT
        )
        this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVVIEWMAT
        )
        this._inverseProjMatrixUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVPROJMAT
        )
        this._materialIdUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_MATERIALID
        )
        this._objectIdUniform = this._cgl.gl.getUniformLocation(
          this._program,
          constants_CONSTANTS.SHADER.SHADERVAR_UNI_OBJECTID
        )

        for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].needsUpdate = true
      }
    }

    if (this._cgl.currentProgram != this._program) {
      this._cgl.profileData.profileShaderBinds++
      this._cgl.gl.useProgram(this._program)
      this._cgl.currentProgram = this._program
    }

    for (let i = 0; i < this._uniforms.length; i++) if (this._uniforms[i].needsUpdate) this._uniforms[i].updateValue()

    if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount()) {
      this._pMatrixState = this._cgl.getProjectionMatrixStateCount()
      this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, false, this._cgl.pMatrix)
      this._cgl.profileData.profileMVPMatrixCount++
    }

    if (this._objectIdUniform) this._cgl.gl.uniform1f(this._objectIdUniform, ++this._cgl.frameStore.objectIdCounter)

    if (this._materialIdUniform) this._cgl.gl.uniform1f(this._materialIdUniform, this._materialId)

    if (this._vMatrixUniform) {
      if (this._vMatrixState != this._cgl.getViewMatrixStateCount()) {
        this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, false, this._cgl.vMatrix)
        this._cgl.profileData.profileMVPMatrixCount++
        this._vMatrixState = this._cgl.getViewMatrixStateCount()

        if (this._inverseViewMatrixUniform) {
          mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix)
          this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, false, this._tempInverseViewMatrix)
          this._cgl.profileData.profileMVPMatrixCount++
        }
        if (this._inverseProjMatrixUniform) {
          mat4.invert(this._tempInverseProjMatrix, this._cgl.pMatrix)
          this._cgl.gl.uniformMatrix4fv(this._inverseProjMatrixUniform, false, this._tempInverseProjMatrix)
          this._cgl.profileData.profileMVPMatrixCount++
        }
      }
      this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, false, this._cgl.mMatrix)
      this._cgl.profileData.profileMVPMatrixCount++

      if (this._camPosUniform) {
        mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix)
        this._cgl.gl.uniform3f(
          this._camPosUniform,
          this._tempCamPosMatrix[12],
          this._tempCamPosMatrix[13],
          this._tempCamPosMatrix[14]
        )
        this._cgl.profileData.profileMVPMatrixCount++
      }
    } else {
      // mvmatrix deprecated....
      const tempmv = mat4.create()

      mat4.mul(tempmv, this._cgl.vMatrix, this._cgl.mMatrix)
      this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, false, tempmv)
      this._cgl.profileData.profileMVPMatrixCount++
    }

    if (this._normalMatrixUniform) {
      // mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix);
      mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix)
      mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix)

      this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, false, this._tempNormalMatrix)
      this._cgl.profileData.profileMVPMatrixCount++
    }

    for (let i = 0; i < this._libs.length; i++) {
      if (this._libs[i].onBind) this._libs[i].onBind.bind(this._libs[i])(this._cgl, this)
    }

    this._bindTextures()

    return this._isValid
  }

  Shader.prototype.unBind = function () {}

  /**
   * easily enable/disable a define without a value
   * @function toggleDefine
   * @memberof Shader
   * @instance
   * @param {name} name
   * @param {any} value or port
   */
  Shader.prototype.toggleDefine = function (name, enabled) {
    if (enabled && typeof enabled == 'object' && enabled.addEventListener) {
      // port
      if (enabled.changeListener) enabled.removeEventListener(enabled.changeListener)

      enabled.onToggleDefine = (v) => {
        this.toggleDefine(name, v)
      }

      enabled.changeListener = enabled.on('change', enabled.onToggleDefine)
      enabled = enabled.get()
    }

    if (enabled) this.define(name)
    else this.removeDefine(name)
  }

  /**
   * add a define to a shader, e.g.  #define DO_THIS_THAT 1
   * @function define
   * @memberof Shader
   * @instance
   * @param {String} name
   * @param {Any} value (can be empty)
   */
  Shader.prototype.define = function (name, value) {
    if (value === null || value === undefined) value = ''

    if (typeof value == 'object') {
      // port
      value.removeEventListener('change', value.onDefineChange)
      value.onDefineChange = (v) => {
        this.define(name, v)
      }
      value.on('change', value.onDefineChange)

      value = value.get()
    }

    for (let i = 0; i < this._defines.length; i++) {
      if (this._defines[i][0] == name && this._defines[i][1] == value) return
      if (this._defines[i][0] == name) {
        this._defines[i][1] = value
        this.setWhyCompile('define ' + name + ' ' + value)

        this._needsRecompile = true
        return
      }
    }
    this.setWhyCompile('define ' + name + ' ' + value)
    this._needsRecompile = true
    this._defines.push([name, value])
  }

  Shader.prototype.getDefines = function () {
    return this._defines
  }

  Shader.prototype.getDefine = function (name) {
    for (let i = 0; i < this._defines.length; i++) if (this._defines[i][0] == name) return this._defines[i][1]
    return null
  }

  /**
   * return true if shader has define
   * @function hasDefine
   * @memberof Shader
   * @instance
   * @param {String} name
   * @return {Boolean}
   */
  Shader.prototype.hasDefine = function (name) {
    for (let i = 0; i < this._defines.length; i++) if (this._defines[i][0] == name) return true
  }

  /**
   * remove a define from a shader
   * @param {name} name
   * @function removeDefine
   * @memberof Shader
   * @instance
   */
  Shader.prototype.removeDefine = function (name) {
    for (let i = 0; i < this._defines.length; i++) {
      if (this._defines[i][0] == name) {
        this._defines.splice(i, 1)
        this._needsRecompile = true

        this.setWhyCompile('define removed:' + name)

        return
      }
    }
  }

  /**
   * remove a module from shader
   * @function removeModule
   * @memberof Shader
   * @instance
   * @param {shaderModule} module the module to be removed
   */
  Shader.prototype.removeModule = function (mod) {
    for (let i = 0; i < this._modules.length; i++) {
      if (mod && mod.id) {
        if (this._modules[i].id == mod.id || !this._modules[i]) {
          let found = true
          while (found) {
            found = false
            for (let j = 0; j < this._uniforms.length; j++) {
              if (this._uniforms[j].getName().startsWith(mod.prefix)) {
                this._uniforms.splice(j, 1)
                found = true
                continue
              }
            }
          }

          this._needsRecompile = true
          this.setWhyCompile('remove module ' + mod.title)
          this._modules.splice(i, 1)
          break
        }
      }
    }
  }

  Shader.prototype.getNumModules = function () {
    return this._modules.length
  }

  Shader.prototype.getCurrentModules = function () {
    return this._modules
  }

  /**
   * add a module
   * @function addModule
   * @memberof Shader
   * @instance
   * @param {shaderModule} module the module to be added
   * @param {shaderModule} [sibling] sibling module, new module will share the same group
   */
  Shader.prototype.addModule = function (mod, sibling) {
    if (this.hasModule(mod.id)) return
    if (!mod.id) mod.id = CABLES1.simpleId()
    if (!mod.numId) mod.numId = this._moduleNumId
    if (!mod.num) mod.num = this._modules.length
    if (sibling && !sibling.group) sibling.group = simpleId()

    if (!mod.group)
      if (sibling) mod.group = sibling.group
      else mod.group = simpleId()

    mod.prefix = 'mod' + mod.group + '_'
    this._modules.push(mod)

    this._needsRecompile = true
    this.setWhyCompile('add module ' + mod.title)
    this._moduleNumId++

    return mod
  }

  Shader.prototype.hasModule = function (modId) {
    for (let i = 0; i < this._modules.length; i++) {
      if (this._modules[i].id == modId) return true
    }
    return false
  }

  Shader.prototype.setModules = function (names) {
    this._moduleNames = names
  }

  Shader.prototype.dispose = function () {
    this._cgl.gl.deleteProgram(this._program)
  }

  Shader.prototype.needsRecompile = function () {
    return this._needsRecompile
  }

  Shader.prototype.setDrawBuffers = function (arr) {
    console.log('useless drawbuffers...?!')
    // if (this._drawBuffers.length !== arr.length)
    // {
    //     this._drawBuffers = arr;
    //     this._needsRecompile = true;
    //     this.setWhyCompile("setDrawBuffers");
    //     return;
    // }
    // for (let i = 0; i < arr.length; i++)
    // {
    //     if (arr[i] !== this._drawBuffers[i])
    //     {
    //         this._drawBuffers = arr;
    //         this._needsRecompile = true;
    //         this.setWhyCompile("setDrawBuffers");
    //         return;
    //     }
    // }
  }

  Shader.prototype.getUniforms = function () {
    return this._uniforms
  }

  Shader.prototype.getUniform = function (name) {
    for (let i = 0; i < this._uniforms.length; i++) if (this._uniforms[i].getName() == name) return this._uniforms[i]
    return null
  }

  Shader.prototype.removeAllUniforms = function () {
    this._uniforms = []
    // for (let i = 0; i < this._uniforms.length; i++)
    //     this.removeUniform(this._uniforms[i].name);
  }

  Shader.prototype.removeUniform = function (name) {
    for (let i = 0; i < this._uniforms.length; i++) {
      if (this._uniforms[i].getName() == name) {
        this._uniforms.splice(i, 1)
      }
    }
    this._needsRecompile = true
    this.setWhyCompile('remove uniform ' + name)
  }

  Shader.prototype._addUniform = function (uni) {
    this._uniforms.push(uni)
    this.setWhyCompile('add uniform ' + name)
    this._needsRecompile = true
  }

  /**
   * add a uniform to the fragment shader
   * @param {String} type ['f','t', etc]
   * @param {String} name
   * @param {any} value or port
   * @memberof Shader
   * @instance
   * @function addUniformFrag
   * @returns {CGL1.Uniform}
   */
  Shader.prototype.addUniformFrag = function (type, name, valueOrPort, p2, p3, p4) {
    const uni = new CGL1.Uniform(this, type, name, valueOrPort, p2, p3, p4)
    uni.shaderType = 'frag'
    return uni
  }

  /**
   * add a uniform to the vertex shader
   * @param {String} type ['f','t', etc]
   * @param {String} name
   * @param {any} value or port
   * @memberof Shader
   * @instance
   * @function addUniformVert
   * @returns {CGL1.Uniform}
   */
  Shader.prototype.addUniformVert = function (type, name, valueOrPort, p2, p3, p4) {
    const uni = new CGL1.Uniform(this, type, name, valueOrPort, p2, p3, p4)
    uni.shaderType = 'vert'
    return uni
  }
  /**
   * add a uniform to both shaders
   * @param {String} type ['f','t', etc]
   * @param {String} name
   * @param {any} value or port
   * @memberof Shader
   * @instance
   * @function addUniformBoth
   * @returns {CGL1.Uniform}
   */
  Shader.prototype.addUniformBoth = function (type, name, valueOrPort, p2, p3, p4) {
    const uni = new CGL1.Uniform(this, type, name, valueOrPort, p2, p3, p4)
    uni.shaderType = 'both'
    return uni
  }

  /**
 * add a struct & its uniforms to the fragment shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructFrag
 * @returns {Object}
 * @example
 * const shader = new CGL1.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructFrag("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
  Shader.prototype.addUniformStructFrag = function (structName, uniformName, members) {
    const uniforms = {}

    if (!members) return uniforms

    for (let i = 0; i < members.length; i += 1) {
      const member = members[i]
      if (!this.hasUniform(uniformName + '.' + member.name)) {
        const uni = new CGL1.Uniform(
          this,
          member.type,
          uniformName + '.' + member.name,
          member.v1,
          member.v2,
          member.v3,
          member.v4,
          uniformName,
          structName,
          member.name
        )
        uni.shaderType = 'frag'
        uniforms[uniformName + '.' + member.name] = uni
      }
    }

    return uniforms
  }

  /**
 * add a struct & its uniforms to the vertex shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructVert
 * @returns {CGL1.Uniform}
 * @example
 * const shader = new CGL1.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructVert("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
  Shader.prototype.addUniformStructVert = function (structName, uniformName, members) {
    const uniforms = {}

    if (!members) return uniforms

    for (let i = 0; i < members.length; i += 1) {
      const member = members[i]
      if (!this.hasUniform(uniformName + '.' + member.name)) {
        const uni = new CGL1.Uniform(
          this,
          member.type,
          uniformName + '.' + member.name,
          member.v1,
          member.v2,
          member.v3,
          member.v4,
          uniformName,
          structName,
          member.name
        )
        uni.shaderType = 'vert'
        uniforms[uniformName + '.' + member.name] = uni
      }
    }

    return uniforms
  }

  /**
 * add a struct & its uniforms to the both shaders. PLEASE NOTE: it is not possible to add the same struct to both shaders when it contains ANY integer members.
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructBoth
 * @returns {Object}
 * @example
 * const shader = new CGL1.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructBoth("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
  Shader.prototype.addUniformStructBoth = function (structName, uniformName, members) {
    const uniforms = {}

    if (!members) return uniforms

    for (let i = 0; i < members.length; i += 1) {
      const member = members[i]
      if (member.type === '2i' || member.type === 'i' || member.type === '3i')
        this._log.error(
          'Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:',
          structName,
          ' with member:',
          member.name,
          ' of type:',
          member.type,
          '.'
        )
      if (!this.hasUniform(uniformName + '.' + member.name)) {
        const uni = new CGL1.Uniform(
          this,
          member.type,
          uniformName + '.' + member.name,
          member.v1,
          member.v2,
          member.v3,
          member.v4,
          uniformName,
          structName,
          member.name
        )
        uni.shaderType = 'both'
        uniforms[uniformName + '.' + member.name] = uni
      }
    }

    return uniforms
  }

  Shader.prototype.hasUniform = function (name) {
    for (let i = 0; i < this._uniforms.length; i++) {
      if (this._uniforms[i].getName() == name) return true
    }
    return false
  }

  Shader.prototype._createProgram = function (vstr, fstr) {
    this._cgl.printError('before _createprogram')

    const program = this._cgl.gl.createProgram()

    this.vshader = Shader.createShader(this._cgl, vstr, this._cgl.gl.VERTEX_SHADER, this)
    this.fshader = Shader.createShader(this._cgl, fstr, this._cgl.gl.FRAGMENT_SHADER, this)

    if (this.vshader && this.fshader) {
      this._cgl.gl.attachShader(program, this.vshader)
      this._cgl.gl.attachShader(program, this.fshader)

      this._linkProgram(program, vstr, fstr)
    } else {
      this._isValid = false
      this._cgl.printError('shader _createProgram')
      console.log('could not link shaderprogram')
      return null
    }

    this._cgl.printError('shader _createProgram')
    return program
  }

  Shader.prototype.hasErrors = function () {
    return this._hasErrors
  }

  Shader.prototype._linkProgram = function (program, vstr, fstr) {
    this._cgl.printError('before _linkprogram')

    if (this._feedBackNames.length > 0) {
      this._cgl.gl.transformFeedbackVaryings(program, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS)
      // INTERLEAVED_ATTRIBS
      // SEPARATE_ATTRIBS
    }

    this._cgl.gl.linkProgram(program)
    this._cgl.printError('gl.linkprogram')
    this._isValid = true

    this._hasErrors = false

    if (this._cgl.patch.config.glValidateShader !== false) {
      this._cgl.gl.validateProgram(program)

      if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.VALIDATE_STATUS)) {
        // validation failed
        console.log('shaderprogram validation failed...')
        console.log(this._name + ' programinfo: ', this._cgl.gl.getProgramInfoLog(program))
      }

      if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.LINK_STATUS)) {
        this._hasErrors = true
        this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader) || 'empty shader infolog')
        this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader) || 'empty shader infolog')
        this._log.error(this._name + ' shader linking fail...')

        console.log(this._name + ' programinfo: ', this._cgl.gl.getProgramInfoLog(program))

        console.log('--------------------------------------')
        console.log(this)
        console.log('--------------------------------------')
        this._isValid = false

        this._name = 'errorshader'
        this.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader())
        this._cgl.printError('shader link err')
      }
    }
  }

  Shader.prototype.getProgram = function () {
    return this._program
  }

  Shader.prototype.setFeedbackNames = function (names) {
    this.setWhyCompile('setFeedbackNames')
    this._needsRecompile = true
    this._feedBackNames = names
  }

  Shader.prototype.getDefaultVertexShader = Shader.getDefaultVertexShader = function () {
    return cgl_shader_default_glsl
  }

  Shader.prototype.getDefaultFragmentShader = Shader.getDefaultFragmentShader = function (r, g, b) {
    if (r == undefined) {
      r = 0.5
      g = 0.5
      b = 0.5
    }
    return (
      ''.endl() +
      'IN vec2 texCoord;'.endl() +
      '{{MODULES_HEAD}}'.endl() +
      'void main()'.endl() +
      '{'.endl() +
      '    vec4 col=vec4(' +
      r +
      ',' +
      g +
      ',' +
      b +
      ',1.0);'.endl() +
      '    {{MODULE_COLOR}}'.endl() +
      '    outColor = col;'.endl() +
      '}'
    )
  }

  /**
   * adds attribute definition to shader header without colliding with other shader modules...
   * when attrFrag is defined, vertex shader will output this attribute to the fragment shader
   * @function
   * @memberof Shader
   * @instance
   * @param {Object} attribObject {type:x,name:x,[nameFrag:x]}
   * @return {Object}
   */
  Shader.prototype.addAttribute = function (attr) {
    for (let i = 0; i < this._attributes.length; i++) {
      if (this._attributes[i].name == attr.name && this._attributes[i].nameFrag == attr.nameFrag) return
    }
    this._attributes.push(attr)
    this._needsRecompile = true
    this.setWhyCompile('addAttribute')
  }

  Shader.prototype.bindTextures = Shader.prototype._bindTextures = function () {
    if (this._textureStackTex.length > this._cgl.maxTextureUnits) {
      this._log.warn(
        '[shader._bindTextures] too many textures bound',
        this._textureStackTex.length + '/' + this._cgl.maxTextureUnits
      )
    }

    // for (let i = this._textureStackTex.length + 1; i < this._cgl.maxTextureUnits; i++) this._cgl.setTexture(i, null);

    for (let i = 0; i < this._textureStackTex.length; i++) {
      // console.log(this._textureStackTex.length, i);
      if (!this._textureStackTex[i] && !this._textureStackTexCgl[i]) {
        this._log.warn('no texture for pushtexture', this._name)
      } else {
        let t = this._textureStackTex[i]
        if (this._textureStackTexCgl[i]) {
          t = this._textureStackTexCgl[i].tex || CGL1.Texture.getEmptyTexture(this._cgl).tex
        }

        let bindOk = true

        if (!this._textureStackUni[i]) {
          // throw(new Error('no uniform given to texturestack'));
          this._log.warn('no uniform for pushtexture', this._name)
          bindOk = this._cgl.setTexture(i, t, this._textureStackType[i])
        } else {
          this._textureStackUni[i].setValue(i)
          bindOk = this._cgl.setTexture(i, t, this._textureStackType[i])

          // console.log(bindOk, i, t, this._textureStackType[i]);
        }
        if (!bindOk) console.warn('tex bind failed', this.getName(), this._textureStackUni[i])
      }
    }
  }

  Shader.prototype.setUniformTexture = function (uni, tex) {
    tex = tex || CGL1.Texture.getTempTexture(this._cgl)
    for (let i = 0; i < this._textureStackUni.length; i++)
      if (this._textureStackUni[i] == uni) {
        const old = this._textureStackTex[i] || this._textureStackTexCgl[i]
        if (tex.hasOwnProperty('tex')) {
          this._textureStackTexCgl[i] = tex
          this._textureStackTex[i] = null
        } else {
          this._textureStackTexCgl[i] = null
          this._textureStackTex[i] = tex
        }

        // this._textureStackTex[i] = tex;
        // this._cgl.setTexture(i, tex, this._textureStackType[i]);
        return old
      }
    return null
  }

  /**
   * push a texture on the stack. those textures will be bound when binding the shader. texture slots are automatically set
   * @param {uniform} texture uniform
   * @param {texture} texture
   * @param {type} texture type, can be ignored when TEXTURE_2D
   * @function pushTexture
   * @memberof Shader
   * @instance
   */
  Shader.prototype.pushTexture = function (uniform, t, type) {
    if (!uniform) {
      console.log('no uniform given to texturestack', uniform)
      return
    }
    if (!t) {
      return
    }
    if (!t.hasOwnProperty('tex') && !(t instanceof WebGLTexture)) {
      this._log.warn(new Error('invalid texture').stack)

      this._log.warn('[cgl_shader] invalid texture...', t)
      return
    }

    this._textureStackUni.push(uniform)

    if (t.hasOwnProperty('tex')) {
      this._textureStackTexCgl.push(t)
      this._textureStackTex.push(null)
    } else {
      this._textureStackTexCgl.push(null)
      this._textureStackTex.push(t)
    }

    this._textureStackType.push(type)
  }

  /**
   * pop last texture
   * @function popTexture
   * @memberof Shader
   * @instance
   */
  Shader.prototype.popTexture = function () {
    this._textureStackUni.pop()
    this._textureStackTex.pop()
    this._textureStackTexCgl.pop()
    this._textureStackType.pop()
  }

  /**
   * pop all textures
   * @function popTextures
   * @memberof Shader
   * @instance
   */
  Shader.prototype.popTextures = function () {
    this._textureStackTex.length =
      this._textureStackTexCgl.length =
      this._textureStackType.length =
      this._textureStackUni.length =
        0
  }

  Shader.prototype.getMaterialId = function () {
    return this._materialId
  }

  Shader.prototype.getInfo = function () {
    const info = {}
    info.name = this._name
    // info.modules = JSON.parse(JSON.stringify(this._modules));
    // info.defines = JSON.parse(JSON.stringify(this._defines));
    info.defines = this.getDefines()
    info.hasErrors = this.hasErrors()

    return info
  }

  // --------------------------

  Shader.getErrorFragmentShader = function () {
    return (
      ''.endl() +
      'void main()'.endl() +
      '{'.endl() +
      '   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;'.endl() +
      '   g= step(0.1,g);'.endl() +
      '   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);'.endl() +
      '}'
    )
  }

  Shader.createShader = function (cgl, str, type, cglShader) {
    if (cgl.aborted) return

    // cgl.printError("[Shader.createShader] ", cglShader._name);

    function getBadLines(infoLog) {
      const basLines = []
      const lines = infoLog.split('\n')
      for (const i in lines) {
        const divide = lines[i].split(':')
        if (parseInt(divide[2], 10)) basLines.push(parseInt(divide[2], 10))
      }
      return basLines
    }

    const shader = cgl.gl.createShader(type)
    cgl.gl.shaderSource(shader, str)
    cgl.gl.compileShader(shader)

    if (!cgl.gl.getShaderParameter(shader, cgl.gl.COMPILE_STATUS)) {
      let infoLog = cgl.gl.getShaderInfoLog(shader)
      if (!infoLog) {
        console.warn('empty shader info log', this._name)
        return
      }

      console.log('compile status: ')

      const badLines = getBadLines(infoLog)
      let htmlWarning =
        '<pre style="margin-bottom:0px;"><code class="shaderErrorCode language-glsl" style="padding-bottom:0px;max-height: initial;max-width: initial;">'
      const lines = str.match(/^.*((\r\n|\n|\r)|$)/gm)

      if (!cgl.aborted && infoLog) {
        if (type == cgl.gl.VERTEX_SHADER) console.log('VERTEX_SHADER')
        if (type == cgl.gl.FRAGMENT_SHADER) console.log('FRAGMENT_SHADER')

        for (const i in lines) {
          const j = parseInt(i, 10) + 1
          const line = j + ': ' + lines[i]
          console.log(line)

          let isBadLine = false
          for (const bj in badLines) if (badLines[bj] == j) isBadLine = true

          if (isBadLine) {
            htmlWarning += '</code></pre>'
            // htmlWarning += "<span class=\"shaderErrorCode error\">";
            htmlWarning +=
              '<pre style="margin:0"><code class="language-glsl" style="background-color:#660000;padding-top:0px;padding-bottom:0px">'
          }
          htmlWarning += escapeHTML(line)

          if (isBadLine) {
            htmlWarning += '</code></pre>'
            htmlWarning +=
              '<pre style="margin:0"><code class="language-glsl" style=";padding-top:0px;padding-bottom:0px">'
          }
        }
      }

      console.warn(infoLog)

      infoLog = infoLog.replace(/\n/g, '<br/>')
      if (cgl.patch.isEditorMode()) console.log('Shader error ', cglShader._name, infoLog, this)

      htmlWarning = infoLog + '<br/>' + htmlWarning + '<br/><br/>'
      htmlWarning += '</code></pre>'

      cgl.patch.emitEvent('criticalError', {
        title: 'Shader error ' + cglShader._name,
        text: htmlWarning,
        exception: { message: infoLog }
      })

      // this._name = "errorshader";
      cglShader.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader())
    } else {
      // console.log(name+' shader compiled...');
    }
    // cgl.printError("shader create2");
    return shader
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_profiledata.js

  class ProfileData {
    constructor(cgl) {
      this._cgl = cgl
      this._lastTime = 0
      this.pause = false
      this.profileUniformCount = 0
      this.profileShaderBinds = 0
      this.profileUniformCount = 0
      this.profileShaderCompiles = 0
      this.profileVideosPlaying = 0
      this.profileMVPMatrixCount = 0
      this.profileEffectBuffercreate = 0
      this.profileShaderGetUniform = 0
      this.profileFrameBuffercreate = 0
      this.profileMeshSetGeom = 0
      this.profileTextureNew = 0
      this.profileGenMipMap = 0
      this.profileOnAnimFrameOps = 0

      this.profileFencedPixelRead = 0
      this.profileMainloopMs = 0
      this.profileMeshDraw = 0
      this.profileTextureEffect = 0
      this.profileTexPreviews = 0
      this.shaderCompileTime = 0
      this.profileMeshNumElements = 0
      this.profileMeshAttributes = 0
      this.profileSingleMeshAttribute = []
      this.heavyEvents = []

      this.doProfileGlQuery = false
      this.glQueryData = {}
    }

    clear() {
      this.profileSingleMeshAttribute = {}
      this.profileMeshAttributes = 0
      this.profileUniformCount = 0
      this.profileShaderGetUniform = 0
      this.profileShaderCompiles = 0
      this.profileShaderBinds = 0
      this.profileTextureResize = 0
      this.profileFrameBuffercreate = 0
      this.profileEffectBuffercreate = 0
      this.profileTextureDelete = 0
      this.profileMeshSetGeom = 0
      this.profileVideosPlaying = 0
      this.profileMVPMatrixCount = 0
      this.profileNonTypedAttrib = 0
      this.profileNonTypedAttribNames = ''
      this.profileTextureNew = 0
      this.profileGenMipMap = 0
      this.profileFramebuffer = 0
      this.profileMeshDraw = 0
      this.profileTextureEffect = 0
      this.profileTexPreviews = 0
      this.profileMeshNumElements = 0
      this.profileFencedPixelRead = 0
    }

    clearGlQuery() {
      for (let i in this.glQueryData) {
        if (!this.glQueryData[i].lastClear || performance.now() - this.glQueryData[i].lastClear > 1000) {
          this.glQueryData[i].time = this.glQueryData[i]._times / this.glQueryData[i]._numcount
          this.glQueryData[i].num = this.glQueryData[i]._numcount

          this.glQueryData[i]._times = 0
          this.glQueryData[i]._numcount = 0
          this.glQueryData[i].lastClear = performance.now()
        }
      }
    }

    addHeavyEvent(event, name, info) {
      const e = { event: event, name: name, info: info, date: performance.now() }
      this.heavyEvents.push(e)
      this._cgl.emitEvent('heavyEvent', e)
    }
  } // CONCATENATED MODULE: ../shared/client/src/helper.js

  class Helper {
    constructor() {
      this._simpleIdCounter = 0
    }

    uuid() {
      let d = new Date().getTime()
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
      })
    }

    isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }

    /**
     * generate a simple ID
     * @function simpleId
     * @memberof Utils
     * @return {Number} new id
     * @static
     */
    simpleId() {
      this._simpleIdCounter++
      return this._simpleIdCounter
    }
  }
  /* harmony default export */ const helper = new Helper() // CONCATENATED MODULE: ../shared/client/src/eventtarget.js

  class Events {
    constructor() {
      this._log = new Logger('eventtarget')
      this._eventCallbacks = {}
      this._logName = ''
      this._logEvents = false
      this._listeners = {}

      this.on = this.addEventListener
      this.off = this.removeEventListener
    }

    addEventListener(which, cb, idPrefix) {
      const event = {
        id: (idPrefix || '') + helper.simpleId(),
        name: which,
        cb: cb
      }
      if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event]
      else this._eventCallbacks[which].push(event)

      this._listeners[event.id] = event

      return event.id
    }

    hasEventListener(which, cb) {
      if (which && !cb) {
        // check by id
        return !!this._listeners[which]
      } else {
        this._log.warn('old eventtarget function haseventlistener!')
        if (which && cb) {
          if (this._eventCallbacks[which]) {
            const idx = this._eventCallbacks[which].indexOf(cb)
            return idx !== -1
          }
        }
      }
    }

    hasListenerForEventName(eventName) {
      return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0
    }

    removeEventListener(which, cb) {
      if (which === null || which === undefined) return

      if (!cb) {
        // new style, remove by id, not by name/callback
        const event = this._listeners[which]
        if (!event) {
          this._log.log('could not find event...')
          return
        }

        let found = true
        while (found) {
          found = false
          let index = -1
          for (let i = 0; i < this._eventCallbacks[event.name].length; i++) {
            if (this._eventCallbacks[event.name][i].id.indexOf(which) === 0) {
              // this._eventCallbacks[event.name][i].id == which ||
              found = true
              index = i
            }
          }

          if (index !== -1) {
            this._eventCallbacks[event.name].splice(index, 1)
            delete this._listeners[which]
          }
        }

        return
      }

      this._log.info('[eventtaget] ', 'old function signature: removeEventListener! use listener id')
      this._log.log(new Error().stack)

      let index = null
      for (let i = 0; i < this._eventCallbacks[which].length; i++)
        if (this._eventCallbacks[which][i].cb === cb) index = i

      if (index !== null) {
        delete this._eventCallbacks[index]
      } else this._log.warn('removeEventListener not found ' + which)
    }

    logEvents(enabled, name) {
      this._logEvents = enabled
      this._logName = name
    }

    emitEvent(which, param1, param2, param3, param4, param5, param6) {
      if (this._logEvents) this._log.log('[event] ', this._logName, which, this._eventCallbacks)

      if (this._eventCallbacks[which]) {
        for (let i = 0; i < this._eventCallbacks[which].length; i++) {
          if (this._eventCallbacks[which][i]) {
            this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6)
          }
        }
      } else {
        if (this._logEvents) this._log.log('[event] has no event callback', which, this._eventCallbacks)
      }
    }
  } // CONCATENATED MODULE: ./src/core/cg/cg_canvas.js

  class CgCanvas {
    constructor(options) {
      if (!options) {
        console.error('CgCanvas no options')
      } else {
        this._canvasEle = options.canvasEle
      }

      if (!options.cg) console.error('CgCanvas options has no cg')
      if (!options.canvasEle) console.error('CgCanvas options has no canvasEle')

      this._cg = options.cg
      this.pixelDensity = 1
      this.canvasWidth = this.canvasEle.clientWidth
      this.canvasHeight = this.canvasEle.clientHeight

      this._oldWidthRp = -1
      this._oldHeightRp = -1

      this.setSize(this.canvasWidth, this.canvasHeight)
    }

    get canvasEle() {
      return this._canvasEle
    }

    setSize(w, h, ignorestyle) {
      if (this._oldWidthRp != w * this.pixelDensity || this._oldHeightRp != h * this.pixelDensity) {
        this._oldWidthRp = this.canvasEle.width = w * this.pixelDensity
        this._oldHeightRp = this.canvasEle.height = h * this.pixelDensity

        if (!ignorestyle) {
          this.canvasEle.style.width = w + 'px'
          this.canvasEle.style.height = h + 'px'
        }

        this.updateSize()

        this._cg.emitEvent('resize')
      }
    }

    updateSize() {
      this.canvasEle.width = this.canvasWidth = this.canvasEle.clientWidth * this.pixelDensity
      this.canvasEle.height = this.canvasHeight = this.canvasEle.clientHeight * this.pixelDensity
    }

    dispose() {
      this._canvasEle.remove()
      this._canvasEle = null
    }
  } // CONCATENATED MODULE: ./src/core/cg/cg_matrixstack.js

  const MatrixStack = function () {
    this._arr = [mat4.create()]
    this._index = 0
    this.stateCounter = 0
  }

  MatrixStack.prototype.push = function (m) {
    this._index++
    this.stateCounter++

    if (this._index == this._arr.length) {
      const copy = mat4.create()
      this._arr.push(copy)
    }

    mat4.copy(this._arr[this._index], m || this._arr[this._index - 1])

    return this._arr[this._index]
  }

  MatrixStack.prototype.pop = function () {
    this.stateCounter++

    this._index--
    if (this._index < 0) this._index = 0

    return this._arr[this._index]
  }

  MatrixStack.prototype.length = function () {
    return this._index
  } // CONCATENATED MODULE: ./src/core/cg/cg_state.js

  // const CGState ()
  class CGState extends Events {
    constructor(_patch) {
      super()
      // this.canvas = null;

      this.fpsCounter = new CABLES1.CG.FpsCounter()
      this._identView = vec3.create()
      this._ident = vec3.create()
      vec3.set(this._identView, 0, 0, -2)
      vec3.set(this._ident, 0, 0, 0)

      this.patch = _patch

      this.DEPTH_COMPARE_FUNC_NEVER = 0
      this.DEPTH_COMPARE_FUNC_LESS = 1
      this.DEPTH_COMPARE_FUNC_EQUAL = 2
      this.DEPTH_COMPARE_FUNC_LESSEQUAL = 3
      this.DEPTH_COMPARE_FUNC_GREATER = 4
      this.DEPTH_COMPARE_FUNC_NOTEQUAL = 5
      this.DEPTH_COMPARE_FUNC_GREATEREQUAL = 6
      this.DEPTH_COMPARE_FUNC_ALWAYS = 7

      /**
       * Current projection matrix
       * @memberof Context
       * @instance
       * @type {mat4}
       */
      this.pMatrix = mat4.create()

      /**
       * Current model matrix
       * @memberof Context
       * @instance
       * @type {mat4}
       */
      this.mMatrix = mat4.create()

      /**
       * Current view matrix
       * @memberof Context
       * @instance
       * @type {mat4}
       */
      this.vMatrix = mat4.create()
      this._textureslots = []

      this._pMatrixStack = new MatrixStack()
      this._mMatrixStack = new MatrixStack()
      this._vMatrixStack = new MatrixStack()

      this.canvasScale = 1

      mat4.identity(this.mMatrix)
      mat4.identity(this.vMatrix)

      window.matchMedia('screen and (min-resolution: 2dppx)').addEventListener('change', (e) => {
        this.emitEvent('resize')
      })
    }

    get canvasWidth() {
      return this.cgCanvas.canvasWidth
    }

    get canvasHeight() {
      return this.cgCanvas.canvasHeight
    }

    set pixelDensity(p) {
      if (this.cgCanvas.pixelDensity != p) {
        this.cgCanvas.pixelDensity = p
        this.cgCanvas.updateSize()
        this.emitEvent('resize')
      }
    }

    get pixelDensity() {
      return this.cgCanvas.pixelDensity
    }

    getGApiName() {
      return ['WebGL', 'WebGPU'][this.gApi]
    }

    get canvas() {
      return this.cgCanvas.canvasEle
    }

    setCanvas(canvEle) {
      if (this.cgCanvas && canvEle == this.cgCanvas.canvasEle) return
      if (typeof canvEle === 'string') canvEle = document.getElementById(canvEle)

      this.cgCanvas = new CgCanvas({ canvasEle: canvEle, cg: this })

      if (this._setCanvas) this._setCanvas(canvEle)

      this.updateSize()
    }

    updateSize() {
      this.cgCanvas.updateSize()
    }

    setSize(w, h, ignorestyle) {
      this.cgCanvas.setSize(w, h, ignorestyle)
    }

    _resizeToWindowSize() {
      this.setSize(window.innerWidth, window.innerHeight)
      this.updateSize()
    }

    _resizeToParentSize() {
      const p = this.canvas.parentElement
      if (!p) {
        this._log.error('cables: can not resize to container element')
        return
      }
      this.setSize(p.clientWidth, p.clientHeight)

      this.updateSize()
    }

    setAutoResize(parent) {
      window.removeEventListener('resize', this._resizeToWindowSize.bind(this))
      window.removeEventListener('resize', this._resizeToParentSize.bind(this))

      if (parent == 'window') {
        window.addEventListener('resize', this._resizeToWindowSize.bind(this))
        window.addEventListener('orientationchange', this._resizeToWindowSize.bind(this))
        this._resizeToWindowSize()
      }
      if (parent == 'parent') {
        window.addEventListener('resize', this._resizeToParentSize.bind(this))
        this._resizeToParentSize()
      }
    }

    /**
     * push a matrix to the projection matrix stack
     * @function pushPMatrix
     * @memberof Context
     * @instance
     * @param {mat4} projectionmatrix
     */
    pushPMatrix() {
      this.pMatrix = this._pMatrixStack.push(this.pMatrix)
    }

    /**
     * pop projection matrix stack
     * @function popPMatrix
     * @memberof Context
     * @instance
     * @returns {mat4} current projectionmatrix
     */
    popPMatrix() {
      this.pMatrix = this._pMatrixStack.pop()
      return this.pMatrix
    }

    getProjectionMatrixStateCount() {
      return this._pMatrixStack.stateCounter
    }

    /**
     * push a matrix to the model matrix stack
     * @function pushModelMatrix
     * @memberof Context
     * @instance
     * @param {mat4} modelmatrix
     * @example
     * // see source code of translate op:
     * cgl.pushModelMatrix();
     * mat4.translate(cgl.mMatrix,cgl.mMatrix, vec);
     * trigger.trigger();
     * cgl.popModelMatrix();
     */
    pushModelMatrix() {
      this.mMatrix = this._mMatrixStack.push(this.mMatrix)
    }

    /**
     * pop model matrix stack
     * @function popModelMatrix
     * @memberof Context
     * @instance
     * @returns {mat4} current modelmatrix
     */
    popModelMatrix() {
      // todo: DEPRECATE
      // if (this._mMatrixStack.length === 0) throw "Invalid modelview popMatrix!";
      this.mMatrix = this._mMatrixStack.pop()
      return this.mMatrix
    }

    /**
     * get model matrix
     * @function modelMatrix
     * @memberof Context
     * @instance
     * @returns {mat4} current modelmatrix
     */
    modelMatrix() {
      return this.mMatrix
    }

    /**
     * push a matrix to the view matrix stack
     * @function pushviewMatrix
     * @memberof Context
     * @instance
     * @param {mat4} viewmatrix
     */
    pushViewMatrix() {
      this.vMatrix = this._vMatrixStack.push(this.vMatrix)
    }

    /**
     * pop view matrix stack
     * @function popViewMatrix
     * @memberof Context
     * @instance
     * @returns {mat4} current viewmatrix
     * @function
     */
    popViewMatrix() {
      this.vMatrix = this._vMatrixStack.pop()
    }

    getViewMatrixStateCount() {
      return this._vMatrixStack.stateCounter
    }

    _startMatrixStacks(identTranslate, identTranslateView) {
      identTranslate = identTranslate || this._ident
      identTranslateView = identTranslateView || this._identView

      mat4.perspective(this.pMatrix, 45, this.canvasWidth / this.canvasHeight, 0.1, 1000.0)

      mat4.identity(this.mMatrix)
      mat4.identity(this.vMatrix)
      mat4.translate(this.mMatrix, this.mMatrix, identTranslate)
      mat4.translate(this.vMatrix, this.vMatrix, identTranslateView)

      this.pushPMatrix()
      this.pushModelMatrix()
      this.pushViewMatrix()
    }

    _endMatrixStacks() {
      this.popViewMatrix()
      this.popModelMatrix()
      this.popPMatrix()
    }

    dispose() {
      this.aborted = true
      if (this.cgCanvas) this.cgCanvas.dispose()
      if (this._dispose) this._dispose()
    }
  } // CONCATENATED MODULE: ./src/core/cg/sg_fpscounter.js

  class FpsCounter extends Events {
    constructor() {
      super()
      this._timeStartFrame = 0
      this._timeStartSecond = 0
      this._fpsCounter = 0
      this._msCounter = 0
      this._frameCount = 0

      this.stats = { ms: 0, fps: 0 }
    }

    get frameCount() {
      return this._frameCount
    }

    startFrame() {
      this._timeStartFrame = CABLES1.now()
    }

    endFrame() {
      this._frameCount++
      this._fpsCounter++

      const timeFrame = CABLES1.now() - this._timeStartFrame
      this._msCounter += timeFrame

      if (CABLES1.now() - this._timeStartSecond > 1000) {
        this.endSecond()
      }
    }

    endSecond() {
      this.stats.fps = this._fpsCounter
      this.stats.ms = Math.round((this._msCounter / this._fpsCounter) * 100) / 100

      this.emitEvent('performance', this.stats)

      // reset
      this._fpsCounter = 0
      this._msCounter = 0
      this._timeStartSecond = CABLES1.now()
    }
  } // CONCATENATED MODULE: ./src/core/cg/cg_constants.js

  const CG = {
    GAPI_WEBGL: 0,
    GAPI_WEBGPU: 1,

    DEPTH_COMPARE_NEVER: 0,
    DEPTH_COMPARE_LESS: 1,
    DEPTH_COMPARE_EQUAL: 2,
    DEPTH_COMPARE_LESSEQUAL: 3,
    DEPTH_COMPARE_GREATER: 4,
    DEPTH_COMPARE_NOTEQUAL: 5,
    DEPTH_COMPARE_GREATEREQUAL: 6,
    DEPTH_COMPARE_ALWAYS: 7,

    CULL_NONE: 0,
    CULL_BACK: 1,
    CULL_FRONT: 2,
    CULL_BOTH: 3,

    Geometry: Geometry,
    BoundingBox: BoundingBox,
    FpsCounter: FpsCounter,

    CgCanvas: CgCanvas
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_state.js

  /**
   * cables gl context/state manager
   * @external CGL1
   * @namespace Context
   * @class
   * @hideconstructor
   */
  // const Context(_patch)
  class Context extends CGState {
    constructor(_patch) {
      super(_patch)
      // EventTarget.apply(this);
      // CGState.apply(this);

      this.gApi = CG.GAPI_WEBGL
      this.aborted = false

      this.pushMvMatrix = this.pushModelMatrix // deprecated and wrong... still used??
      this.popMvMatrix = this.popmMatrix = this.popModelMatrix // deprecated and wrong... still used??

      this.profileData = new ProfileData(this)
      this._log = new Logger('cgl_context')
      this._viewPort = [0, 0, 0, 0]
      this.glVersion = 0
      this.glUseHalfFloatTex = false
      this.clearCanvasTransparent = true
      this.clearCanvasDepth = true
      this.debugOneFrame = false
      this.checkGlErrors = false // true is slow // false should be default...
      this.maxTextureUnits = 0
      this.maxVaryingVectors = 0
      this.currentProgram = null
      this._hadStackError = false
      this.glSlowRenderer = false
      this._isSafariCrap = false

      this.temporaryTexture = null
      this.frameStore = {}
      this._onetimeCallbacks = []
      this.gl = null

      this._cursor = 'auto'
      this._currentCursor = ''

      this._viewPortStack = []
      this._glFrameBufferStack = []
      this._frameBufferStack = []
      this._shaderStack = []
      this._stackDepthTest = []
      this.mainloopOp = null

      this._simpleShader = new Shader(this, 'simpleshader')
      this._simpleShader.setModules([
        'MODULE_VERTEX_POSITION',
        'MODULE_COLOR',
        'MODULE_BEGIN_FRAG',
        'MODULE_VERTEX_MOVELVIEW'
      ])
      this._simpleShader.setSource(Shader.getDefaultVertexShader(), Shader.getDefaultFragmentShader())

      this._currentShader = this._simpleShader

      this._oldCanvasWidth = -1
      this._oldCanvasHeight = -1
      this._enabledExtensions = {}
    }

    // set pixelDensity(p)
    // {
    //     this._pixelDensity = p;
    // }

    // get pixelDensity()
    // {
    //     return this._pixelDensity;
    // }

    get viewPort() {
      if (this._viewPortStack.length > 3) {
        const l = this._viewPortStack.length

        return [
          this._viewPortStack[l - 4],
          this._viewPortStack[l - 3],
          this._viewPortStack[l - 2],
          this._viewPortStack[l - 1]
        ]
      } else {
        // workaround pre viewport stack times / or+and initial value...

        return this._viewPort
      }
    }

    get mvMatrix() {
      // deprecate
      return this.mMatrix
    }

    set mvMatrix(
      m // deprecate
    ) {
      this.mMatrix = m
    }

    exitError(msgId, msg) {
      console.log(msgId, msg)
      this.patch.exitError(msgId, msg)
      this.aborted = true
    }

    _setCanvas(canv) {
      if (!canv) {
        this._log.stack('_setCanvas undef')
      }

      if (!this.patch.config.canvas) this.patch.config.canvas = {}
      if (!this.patch.config.canvas.hasOwnProperty('preserveDrawingBuffer'))
        this.patch.config.canvas.preserveDrawingBuffer = false
      if (!this.patch.config.canvas.hasOwnProperty('premultipliedAlpha'))
        this.patch.config.canvas.premultipliedAlpha = false
      if (!this.patch.config.canvas.hasOwnProperty('alpha')) this.patch.config.canvas.alpha = false

      this.patch.config.canvas.stencil = true

      if (this.patch.config.hasOwnProperty('clearCanvasColor'))
        this.clearCanvasTransparent = this.patch.config.clearCanvasColor
      if (this.patch.config.hasOwnProperty('clearCanvasDepth'))
        this.clearCanvasDepth = this.patch.config.clearCanvasDepth

      // safari stuff..........
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && navigator.userAgent.match(/iPhone/i)) {
        this._isSafariCrap = true
        this.glUseHalfFloatTex = true
      }

      if (!this.patch.config.canvas.forceWebGl1) this.gl = canv.getContext('webgl2', this.patch.config.canvas)

      if (!this.gl || this.gl.isContextLost()) {
        this.aborted = true
        this.exitError(
          'NO_WEBGL',
          'sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.'
        )
        return
      }

      if (this.gl.getParameter(this.gl.VERSION) != 'WebGL 1.0') {
        this.glVersion = 2
      } else {
        this.gl =
          canv.getContext('webgl', this.patch.config.canvas) ||
          canv.getContext('experimental-webgl', this.patch.config.canvas)
        this.glVersion = 1

        // safari
        // if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
        // {
        //     this.glUseHalfFloatTex = true;
        // }

        // ios
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
          if (!this.patch.config.canvas.hasOwnProperty('powerPreference'))
            this.patch.config.canvas.powerPreference = 'high-performance'
        }

        this.enableExtension('OES_standard_derivatives')
        // this.enableExtension("GL_OES_standard_derivatives");
        const instancingExt = this.enableExtension('ANGLE_instanced_arrays') || this.gl
        if (instancingExt.vertexAttribDivisorANGLE) {
          this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt)
          this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt)
        }
      }

      const dbgRenderInfo = this.enableExtension('WEBGL_debug_renderer_info')
      if (dbgRenderInfo) {
        this.glRenderer = this.gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
        if (this.glRenderer === 'Google SwiftShader') this.glSlowRenderer = true
      }

      this.canvas.addEventListener('webglcontextlost', (event) => {
        if (this.aborted) return console.log('[cgl_state] aborted context lost... can be ignored...')
        this._log.error('canvas lost...', event)
        this.emitEvent('webglcontextlost')
        this.aborted = true
      })

      this.maxAnisotropic = 0
      if (this.enableExtension('EXT_texture_filter_anisotropic'))
        this.maxAnisotropic = this.gl.getParameter(
          this.enableExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT
        )

      this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS)
      this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)
      this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)
      this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS)
      this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS)
      this.maxSamples = 0
      if (this.gl.MAX_SAMPLES) this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES)

      if (this.glVersion == 1) {
        this.enableExtension('OES_standard_derivatives')
        const instancingExt = this.enableExtension('ANGLE_instanced_arrays') || this.gl

        if (instancingExt.vertexAttribDivisorANGLE) {
          this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt)
          this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt)
        }
      }

      this.DEPTH_FUNCS = [
        this.gl.NEVER,
        this.gl.ALWAYS,
        this.gl.LESS,
        this.gl.LEQUAL,
        this.gl.GREATER,
        this.gl.GEQUAL,
        this.gl.EQUAL,
        this.gl.NOTEQUAL
      ]
      this.CULL_MODES = [null, this.gl.BACK, this.gl.FRONT, this.gl.FRONT_AND_BACK]
    }

    getInfo() {
      return {
        glVersion: this.glVersion,
        glRenderer: this.glRenderer,
        glUseHalfFloatTex: this.glUseHalfFloatTex,
        maxVaryingVectors: this.maxVaryingVectors,
        maxTextureUnits: this.maxTextureUnits,
        maxTexSize: this.maxTexSize,
        maxUniformsFrag: this.maxUniformsFrag,
        maxUniformsVert: this.maxUniformsVert,
        maxSamples: this.maxSamples
      }
    }

    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */

    popViewPort() {
      this._viewPortStack.pop()
      this._viewPortStack.pop()
      this._viewPortStack.pop()
      this._viewPortStack.pop()

      if (this._viewPortStack.length == 0) {
        this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight)
        // this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
        // this.setViewPort(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
      } else {
        // this.viewPort = [this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]];
        // this.gl.viewport(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
        this.setViewPort(
          this._viewPortStack[this._viewPort.length - 4],
          this._viewPortStack[this._viewPort.length - 3],
          this._viewPortStack[this._viewPort.length - 2],
          this._viewPortStack[this._viewPort.length - 1]
        )
      }
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h) {
      this._viewPortStack.push(x, y, w, h)
      this.setViewPort(x, y, w, h)
    }

    // old
    getViewPort() {
      return this._viewPort
    }

    // old
    resetViewPort() {
      this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3])
    }

    // old
    setViewPort(x, y, w, h) {
      this._viewPort[0] = Math.round(x)
      this._viewPort[1] = Math.round(y)
      this._viewPort[2] = Math.round(w)
      this._viewPort[3] = Math.round(h)
      this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3])
    }

    screenShot(cb, doScreenshotClearAlpha, mimeType, quality) {
      if (doScreenshotClearAlpha) {
        this.gl.clearColor(1, 1, 1, 1)
        this.gl.colorMask(false, false, false, true)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
        this.gl.colorMask(true, true, true, true)
      }

      if (this.canvas && this.canvas.toBlob) {
        this.canvas.toBlob(
          (blob) => {
            if (cb) cb(blob)
            else this._log.log('no screenshot callback...')
          },
          mimeType,
          quality
        )
      }
    }

    endFrame() {
      if (this.patch.isEditorMode()) CABLES1.GL_MARKER.drawMarkerLayer(this)

      this.setPreviousShader()

      if (this._vMatrixStack.length() > 0) this.logStackError('view matrix stack length !=0 at end of rendering...')
      if (this._mMatrixStack.length() > 0) this.logStackError('mvmatrix stack length !=0 at end of rendering...')
      if (this._pMatrixStack.length() > 0) this.logStackError('pmatrix stack length !=0 at end of rendering...')
      if (this._glFrameBufferStack.length > 0)
        this.logStackError('glFrameBuffer stack length !=0 at end of rendering...')
      if (this._stackDepthTest.length > 0) this.logStackError('depthtest stack length !=0 at end of rendering...')
      if (this._stackDepthWrite.length > 0) this.logStackError('depthwrite stack length !=0 at end of rendering...')
      if (this._stackDepthFunc.length > 0) this.logStackError('depthfunc stack length !=0 at end of rendering...')
      if (this._stackBlend.length > 0) this.logStackError('blend stack length !=0 at end of rendering...')
      if (this._stackBlendMode.length > 0) this.logStackError('blendMode stack length !=0 at end of rendering...')
      if (this._shaderStack.length > 0) this.logStackError('this._shaderStack length !=0 at end of rendering...')
      if (this._stackCullFace.length > 0) this.logStackError('this._stackCullFace length !=0 at end of rendering...')
      if (this._stackCullFaceFacing.length > 0)
        this.logStackError('this._stackCullFaceFacing length !=0 at end of rendering...')
      if (this._viewPortStack.length > 0) this.logStackError('viewport stack length !=0 at end of rendering...')

      this._frameStarted = false

      if (this._oldCanvasWidth != this.canvasWidth || this._oldCanvasHeight != this.canvasHeight) {
        this._oldCanvasWidth = this.canvasWidth
        this._oldCanvasHeight = this.canvasHeight
        this.emitEvent('resize')
      }

      if (this._cursor != this._currentCursor) {
        this._currentCursor = this.canvas.style.cursor = this._cursor
      }

      this.emitEvent('endframe')

      this.fpsCounter.endFrame()
    }

    logStackError(str) {
      if (!this._hadStackError) {
        this._hadStackError = true
        this._log.warn('[' + this.canvas.id + ']: ', str)
      }
    }

    // shader stack
    getShader() {
      if (this._currentShader)
        if (
          !this.frameStore ||
          ((this.frameStore.renderOffscreen === true) == this._currentShader.offScreenPass) === true
        )
          return this._currentShader

      for (let i = this._shaderStack.length - 1; i >= 0; i--)
        if (this._shaderStack[i])
          if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i]
    }

    getDefaultShader() {
      return this._simpleShader
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
     */

    pushShader(shader) {
      if (this.frameStore.forceShaderMods) {
        for (let i = 0; i < this.frameStore.forceShaderMods.length; i++) {
          // if (!currentShader.forcedMod && currentShader != this.frameStore.forceShaderMods[i])
          // {
          //     currentShader.forcedMod = this.frameStore.forceShaderMods[i];
          shader = this.frameStore.forceShaderMods[i].bind(shader, false)
          // }
          // return currentShader;
          // if (this.frameStore.forceShaderMods[i].currentShader() && shader != this.frameStore.forceShaderMods[i].currentShader().shader)
        }
      }

      this._shaderStack.push(shader)
      this._currentShader = shader
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    setPreviousShader() {
      if (this.frameStore.forceShaderMods) {
        for (let i = 0; i < this.frameStore.forceShaderMods.length; i++) {
          // const a =
          this.frameStore.forceShaderMods[i].unbind(false)
          // if (a) return;
          // this.popShader();
        }
      }

      if (this._shaderStack.length === 0) throw new Error('Invalid shader stack pop!')
      this._shaderStack.pop()
      this._currentShader = this._shaderStack[this._shaderStack.length - 1]
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Object} framebuffer
     * @function
     */
    pushGlFrameBuffer(fb) {
      this._glFrameBufferStack.push(fb)
    }

    /**
     * pop framebuffer stack
     * @function popGlFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    popGlFrameBuffer() {
      if (this._glFrameBufferStack.length == 0) return null
      this._glFrameBufferStack.pop()
      return this._glFrameBufferStack[this._glFrameBufferStack.length - 1]
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    getCurrentGlFrameBuffer() {
      if (this._glFrameBufferStack.length === 0) return null
      return this._glFrameBufferStack[this._glFrameBufferStack.length - 1]
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Framebuffer} framebuffer
     */
    pushFrameBuffer(fb) {
      this._frameBufferStack.push(fb)
    }

    /**
     * pop framebuffer stack
     * @function popFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    popFrameBuffer() {
      if (this._frameBufferStack.length == 0) return null
      this._frameBufferStack.pop()
      return this._frameBufferStack[this._frameBufferStack.length - 1]
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    getCurrentFrameBuffer() {
      if (this._frameBufferStack.length === 0) return null
      return this._frameBufferStack[this._frameBufferStack.length - 1]
    }

    renderStart(cgl, identTranslate, identTranslateView) {
      this.fpsCounter.startFrame()
      this.pushDepthTest(true)
      this.pushDepthWrite(true)
      this.pushDepthFunc(cgl.gl.LEQUAL)
      this.pushCullFaceFacing(cgl.gl.BACK)
      this.pushCullFace(false)

      // if (this.clearCanvasTransparent)
      // {
      //     cgl.gl.clearColor(0, 0, 0, 0);
      //     cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
      // }
      // if (this.clearCanvasDepth) cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

      cgl.setViewPort(0, 0, cgl.canvasWidth, cgl.canvasHeight)

      this._startMatrixStacks(identTranslate, identTranslateView)

      cgl.pushBlendMode(constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL, false)

      for (let i = 0; i < this._textureslots.length; i++) this._textureslots[i] = null

      this.pushShader(this._simpleShader)

      this._frameStarted = true

      if (this._onetimeCallbacks.length > 0) {
        for (let i = 0; i < this._onetimeCallbacks.length; i++) this._onetimeCallbacks[i]()
        this._onetimeCallbacks.length = 0
      }

      for (let i = 0; i < this._textureslots.length; i++) {
        this.gl.activeTexture(this.gl.TEXTURE0 + i)
        this.gl.bindTexture(this.gl.TEXTURE_2D, null)
        this._textureslots[i] = null
      }

      this.emitEvent('beginFrame')
    }

    renderEnd(cgl) {
      this._endMatrixStacks()

      this.popDepthTest()
      this.popDepthWrite()
      this.popDepthFunc()
      this.popCullFaceFacing()
      this.popCullFace()
      this.popBlend()
      this.popBlendMode()

      cgl.endFrame()

      this.emitEvent('endFrame')
    }

    getTexture(slot) {
      return this._textureslots[slot]
    }

    hasFrameStarted() {
      return this._frameStarted
    }

    /**
     * log warning to console if the rendering of one frame has not been started / handy to check for async problems
     * @function checkFrameStarted
     * @memberof Context
     * @instance
     */
    checkFrameStarted(string) {
      if (!this._frameStarted) {
        this._log.warn('frame not started ' + string)
        this.patch.printTriggerStack()
      }
    }

    setTexture(slot, t, type) {
      this.checkFrameStarted('cgl setTexture')

      if (t === null) t = CGL1.Texture.getEmptyTexture(this).tex

      // if (!this.gl.isTexture(t))
      // {
      //     console.log("not a texture!!!!"); return false;
      //     t = CGL1.Texture.getEmptyTexture(this).tex;
      // }

      // if (!this.gl.isTexture(t))
      // {
      //     t = CGL1.Texture.getErrorTexture(this).tex;
      //     // this._log.stack("not a texture!!!!");
      //     // return false;
      // }

      if (this._textureslots[slot] != t) {
        this.gl.activeTexture(this.gl.TEXTURE0 + slot)
        this.gl.bindTexture(type || this.gl.TEXTURE_2D, t)
        this._textureslots[slot] = t
      }

      return true
    }

    fullScreen() {
      if (this.canvas.requestFullscreen) this.canvas.requestFullscreen()
      else if (this.canvas.mozRequestFullScreen) this.canvas.mozRequestFullScreen()
      else if (this.canvas.webkitRequestFullscreen) this.canvas.webkitRequestFullscreen()
      else if (this.canvas.msRequestFullscreen) this.canvas.msRequestFullscreen()
    }

    printError(str) {
      if (!this.checkGlErrors) return
      let found = false
      let error = this.gl.getError()

      if (error != this.gl.NO_ERROR) {
        let errStr = ''
        if (error == this.gl.OUT_OF_MEMORY) errStr = 'OUT_OF_MEMORY'
        if (error == this.gl.INVALID_ENUM) errStr = 'INVALID_ENUM'
        if (error == this.gl.INVALID_OPERATION) errStr = 'INVALID_OPERATION'
        if (error == this.gl.INVALID_FRAMEBUFFER_OPERATION) errStr = 'INVALID_FRAMEBUFFER_OPERATION'
        if (error == this.gl.INVALID_VALUE) errStr = 'INVALID_VALUE'
        if (error == this.gl.CONTEXT_LOST_WEBGL) {
          this.aborted = true
          errStr = 'CONTEXT_LOST_WEBGL'
        }
        if (error == this.gl.NO_ERROR) errStr = 'NO_ERROR'

        found = true

        this._log.warn('gl error [' + this.canvas.id + ']: ', str, error, errStr)

        if (this.canvas.id.contains('glGuiCanvas'))
          if (!this._loggedGlError) {
            this.patch.printTriggerStack()
            this._log.stack('glerror')
            this._loggedGlError = true
          }
      }
      error = this.gl.getError()

      return found
    }

    saveScreenshot(filename, cb, pw, ph, noclearalpha) {
      this.patch.renderOneFrame()

      let w = this.canvas.clientWidth * this.pixelDensity
      let h = this.canvas.clientHeight * this.pixelDensity

      if (pw) {
        this.canvas.width = pw
        w = pw
      }
      if (ph) {
        this.canvas.height = ph
        h = ph
      }

      function padLeft(nr, n, str) {
        return Array(n - String(nr).length + 1).join(str || '0') + nr
      }

      const d = new Date()

      const dateStr = ''
        .concat(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()), '_')
        .concat(padLeft(d.getHours(), 2))
        .concat(padLeft(d.getMinutes(), 2))
        .concat(padLeft(d.getSeconds(), 2))

      if (!filename) filename = 'cables_' + dateStr + '.png'
      else filename += '.png'

      this.patch.cgl.screenShot(
        function (blob) {
          this.canvas.width = w
          this.canvas.height = h

          if (blob) {
            const anchor = document.createElement('a')

            anchor.download = filename
            anchor.href = URL.createObjectURL(blob)

            setTimeout(function () {
              anchor.click()
              if (cb) cb(blob)
            }, 100)
          } else {
            this._log.log('screenshot: no blob')
          }
        }.bind(this),
        noclearalpha
      )
    }

    _dispose() {
      this._simpleShader.dispose()
      this.gl = null
    }
  }

  Context.prototype.popShader = Context.prototype.setPreviousShader
  Context.prototype.setShader = Context.prototype.pushShader

  /**
   * execute the callback next frame, once
   * @function addNextFrameOnceCallback
   * @memberof Context
   * @instance
   * @param {function} callback
   */
  Context.prototype.addNextFrameOnceCallback = function (cb) {
    if (cb) this._onetimeCallbacks.push(cb)
  }

  // state depthtest

  /**
   * push depth testing enabled state
   * @function pushDepthTest
   * @param {Boolean} enabled
   * @memberof Context
   * @instance
   */
  Context.prototype._stackDepthTest = []
  Context.prototype.pushDepthTest = function (b) {
    this._stackDepthTest.push(b)
    if (!b) this.gl.disable(this.gl.DEPTH_TEST)
    else this.gl.enable(this.gl.DEPTH_TEST)
  }
  /**
   * current state of depth testing
   * @function stateCullFace
   * @returns {Boolean} enabled
   * @memberof Context
   * @instance
   */
  Context.prototype.stateDepthTest = function () {
    return this._stackDepthTest[this._stackDepthTest.length - 1]
  }

  /**
   * pop depth testing state
   * @function popCullFace
   * @memberof Context
   * @instance
   */
  Context.prototype.popDepthTest = function () {
    this._stackDepthTest.pop()

    if (!this._stackDepthTest[this._stackDepthTest.length - 1]) this.gl.disable(this.gl.DEPTH_TEST)
    else this.gl.enable(this.gl.DEPTH_TEST)
  }

  // --------------------------------------
  // state depthwrite

  /**
   * push depth write enabled state
   * @function pushDepthTest
   * @param {Boolean} enabled
   * @memberof Context
   * @instance
   */
  Context.prototype._stackDepthWrite = []
  Context.prototype.pushDepthWrite = function (b) {
    b = b || false
    this._stackDepthWrite.push(b)
    this.gl.depthMask(b)
  }

  /**
   * current state of depth writing
   * @function stateCullFace
   * @returns {Boolean} enabled
   * @memberof Context
   * @instance
   */
  Context.prototype.stateDepthWrite = function () {
    return this._stackDepthWrite[this._stackDepthWrite.length - 1]
  }

  /**
   * pop depth writing state
   * @function popCullFace
   * @memberof Context
   * @instance
   */
  Context.prototype.popDepthWrite = function () {
    this._stackDepthWrite.pop()
    this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || false)
  }

  // --------------------------------------
  // state CullFace

  /**
   * push face culling face enabled state
   * @function pushCullFaceFacing
   * @param {Boolean} enabled
   * @memberof Context
   * @instance
   */
  Context.prototype._stackCullFace = []
  Context.prototype.pushCullFace = function (b) {
    this._stackCullFace.push(b)

    if (b) this.gl.enable(this.gl.CULL_FACE)
    else this.gl.disable(this.gl.CULL_FACE)
  }

  /**
   * current state of face culling
   * @function stateCullFace
   * @returns {Boolean} enabled
   * @memberof Context
   * @instance
   */
  Context.prototype.stateCullFace = function () {
    return this._stackCullFace[this._stackCullFace.length - 1]
  }

  /**
   * pop face culling enabled state
   * @function popCullFace
   * @memberof Context
   * @instance
   */
  Context.prototype.popCullFace = function () {
    this._stackCullFace.pop()

    if (this._stackCullFace[this._stackCullFace.length - 1]) this.gl.enable(this.gl.CULL_FACE)
    else this.gl.disable(this.gl.CULL_FACE)
  }

  // --------------------------------------
  // state CullFace Facing

  /**
   * push face culling face side
   * @function pushCullFaceFacing
   * @param {Number} cgl.gl.FRONT_AND_BACK, cgl.gl.BACK or cgl.gl.FRONT
   * @memberof Context
   * @instance
   */
  Context.prototype._stackCullFaceFacing = []
  Context.prototype.pushCullFaceFacing = function (b) {
    this._stackCullFaceFacing.push(b)
    this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
  }

  /**
   * current state of face culling side
   * @function stateCullFaceFacing
   * @returns {Boolean} enabled
   * @memberof Context
   * @instance
   */
  Context.prototype.stateCullFaceFacing = function () {
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
  }

  /**
   * pop face culling face side
   * @function popCullFaceFacing
   * @memberof Context
   * @instance
   */
  Context.prototype.popCullFaceFacing = function () {
    this._stackCullFaceFacing.pop()
    if (this._stackCullFaceFacing.length > 0)
      this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
  }

  // --------------------------------------
  // state depthfunc

  Context.prototype._stackDepthFunc = []

  /**
   * enable / disable depth testing
   * like `gl.depthFunc(boolean);`
   * @function pushDepthFunc
   * @memberof Context
   * @instance
   * @param {Boolean} depthtesting
   */
  Context.prototype.pushDepthFunc = function (f) {
    this._stackDepthFunc.push(f)
    this.gl.depthFunc(f)
  }

  /**
   * current state of blend
   * @function stateDepthFunc
   * @memberof Context
   * @instance
   * @returns {Boolean} depth testing enabled/disabled
   */
  Context.prototype.stateDepthFunc = function () {
    if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1]
    return false
  }

  /**
   * pop depth testing and set the previous state
   * @function popDepthFunc
   * @memberof Context
   * @instance
   */
  Context.prototype.popDepthFunc = function () {
    this._stackDepthFunc.pop()
    if (this._stackDepthFunc.length > 0) this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1])
  }

  // --------------------------------------
  // state blending

  Context.prototype._stackBlend = []

  /**
   * enable / disable blend
   * like gl.enable(gl.BLEND); / gl.disable(gl.BLEND);
   * @function pushBlend
   * @memberof Context
   * @instance
   * @param {Boolean} blending
   */
  Context.prototype.pushBlend = function (b) {
    this._stackBlend.push(b)
    if (!b) this.gl.disable(this.gl.BLEND)
    else this.gl.enable(this.gl.BLEND)
  }

  /**
   * pop blend state and set the previous state
   * @function popBlend
   * @memberof Context
   * @instance
   */
  Context.prototype.popBlend = function () {
    this._stackBlend.pop()

    if (!this._stackBlend[this._stackBlend.length - 1]) this.gl.disable(this.gl.BLEND)
    else this.gl.enable(this.gl.BLEND)
  }

  /**
   * current state of blend
   * @function stateBlend
   * @returns {boolean} blending enabled/disabled
   * @memberof Context
   * @instance
   */
  Context.prototype.stateBlend = function () {
    return this._stackBlend[this._stackBlend.length - 1]
  }

  const BLENDS = {
    BLEND_NONE: 0,
    BLEND_NORMAL: 1,
    BLEND_ADD: 2,
    BLEND_SUB: 3,
    BLEND_MUL: 4
  }

  Context.prototype._stackBlendMode = []
  Context.prototype._stackBlendModePremul = []

  /**
   * push and switch to predefined blendmode (CONSTANTS.BLEND_MODES.BLEND_NONE,CONSTANTS.BLEND_MODES.BLEND_NORMAL,CONSTANTS.BLEND_MODES.BLEND_ADD,CONSTANTS.BLEND_MODES.BLEND_SUB,CONSTANTS.BLEND_MODES.BLEND_MUL)
   * @function pushBlendMode
   * @memberof Context
   * @instance
   * @param {Number} blendmode
   * @param {Boolean} premultiplied mode
   */
  Context.prototype.pushBlendMode = function (blendMode, premul) {
    this._stackBlendMode.push(blendMode)
    this._stackBlendModePremul.push(premul)

    const n = this._stackBlendMode.length - 1

    this.pushBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE)
    this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n])
  }

  /**
   * pop predefined blendmode / switch back to previous blendmode
   * @function popBlendMode
   * @memberof Context
   * @instance
   */
  Context.prototype.popBlendMode = function () {
    this._stackBlendMode.pop()
    this._stackBlendModePremul.pop()

    const n = this._stackBlendMode.length - 1

    this.popBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE)

    if (n >= 0) this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n])
  }

  // --------------------------------------
  // state stencil

  Context.prototype._stackStencil = []

  /**
 * enable / disable stencil testing

* @function pushStencil
 * @memberof Context
 * @instance
 * @param {Boolean} enable
 */
  Context.prototype.pushStencil = function (b) {
    this._stackStencil.push(b)
    if (!b) this.gl.disable(this.gl.STENCIL_TEST)
    else this.gl.enable(this.gl.STENCIL_TEST)
  }

  /**
   * pop stencil test state and set the previous state
   * @function popStencil
   * @memberof Context
   * @instance
   */
  Context.prototype.popStencil = function () {
    this._stackStencil.pop()

    if (!this._stackStencil[this._stackStencil.length - 1]) this.gl.disable(this.gl.STENCIL_TEST)
    else this.gl.enable(this.gl.STENCIL_TEST)
  }

  // --------------------------------------

  Context.prototype.glGetAttribLocation = function (prog, name) {
    const l = this.gl.getAttribLocation(prog, name)
    // if (l == -1)
    // {
    //     this._log.warn("get attr loc -1 ", name);
    // }
    return l
  }

  /**
   * should an op now draw helpermeshes
   * @function shouldDrawHelpers
   * @memberof Context
   * @instance
   */
  Context.prototype.shouldDrawHelpers = function (op) {
    if (this.frameStore.shadowPass) return false
    if (!op.patch.isEditorMode()) return false

    // const fb = this.getCurrentFrameBuffer();
    // if (fb && fb.getWidth)
    // {
    //     const fbshould = this.canvasWidth / this.canvasHeight == fb.getWidth() / fb.getHeight();
    //     if (!fbshould) return false;
    // }

    return gui.shouldDrawOverlay // || (CABLES1.UI.renderHelperCurrent && op.isCurrentUiOp());
  }

  Context.prototype._setBlendMode = function (blendMode, premul) {
    const gl = this.gl

    if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NONE) {
      // this.gl.disable(this.gl.BLEND);
    } else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_ADD) {
      if (premul) {
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD)
        gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE)
      } else {
        gl.blendEquation(gl.FUNC_ADD)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE)
      }
    } else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_SUB) {
      if (premul) {
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD)
        gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA)
      } else {
        gl.blendEquation(gl.FUNC_ADD)
        gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR)
      }
    } else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_MUL) {
      if (premul) {
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD)
        gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA)
      } else {
        gl.blendEquation(gl.FUNC_ADD)
        gl.blendFunc(gl.ZERO, gl.SRC_COLOR)
      }
    } else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL) {
      if (premul) {
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD)
        gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      } else {
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD)
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      }
    } else {
      this._log.log('setblendmode: unknown blendmode')
    }
  }

  Context.prototype.createMesh = function (geom, options) {
    if (CABLES1.UTILS.isNumeric(options)) options = { glPrimitive: options } // old constructor fallback...
    return new CGL1.Mesh(this, geom, options)
  }

  /**
   * set cursor
   * @function setCursor
   * @memberof Context
   * @instance
   * @param {String} css cursor string
   */
  Context.prototype.setCursor = function (str) {
    this._cursor = str
  }

  /**
   * enable a webgl extension
   * @function enableExtension
   * @memberof Context
   * @instance
   * @param {String} extension name
   * @returns {Object} extension object or null
   */
  Context.prototype.enableExtension = function (name) {
    if (!this.gl) return null
    // const start = performance.now();

    if (this._enabledExtensions.hasOwnProperty(name)) {
      return this._enabledExtensions[name]
    }

    const o = this.gl.getExtension(name)
    this._enabledExtensions[name] = o

    if (!o) this._log.warn('[cgl_state] extension not available ' + name)
    else this._log.log('enabled extension', name)

    return o
  }

  Context.prototype.checkTextureSize = function (x) {
    x = x || 1
    x = Math.floor(x)
    x = Math.min(x, this.maxTexSize)
    x = Math.max(x, 1)
    return x
  } // CONCATENATED MODULE: ./src/core/core_variable.js

  /**
   * @type {Object}
   * @name Variable
   * @param {String} name
   * @param {String|Number} value
   * @memberof Patch
   * @constructor
   */
  class PatchVariable extends Events {
    constructor(name, val, type) {
      super()
      this._name = name
      this.type = type
      this.setValue(val)
    }

    /**
     * keeping this for backwards compatibility in older
     * exports before using eventtarget
     *
     * @param cb
     */
    addListener(cb) {
      this.on('change', cb, 'var')
    }

    /**
     * @function Variable.getValue
     * @memberof Variable
     * @returns {String|Number|Boolean}
     */

    getValue() {
      return this._v
    }

    /**
     * @function getName
     * @memberof Variable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    getName() {
      return this._name
    }

    /**
     * @function setValue
     * @memberof Variable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    setValue(v) {
      this._v = v
      this.emitEvent('change', v, this)
    }
  }

  /* harmony default export */ const core_variable = PatchVariable // CONCATENATED MODULE: ./src/core/core_patch.js

  /**
   * Patch class, contains all operators,values,links etc. manages loading and running of the whole patch
   *
   * see {@link PatchConfig}
   *
   * @external CABLES1
   * @namespace Patch
   * @hideconstructor
   * @param {PatchConfig} config The configuration object.
   * @class
   * @example
   * CABLES1.patch=new CABLES1.Patch(
   * {
   *     patch:pStr,
   *     glCanvasId:'glcanvas',
   *     glCanvasResizeToWindow:true,
   *     canvas:{powerPreference:"high-performance"},
   *     prefixAssetPath:'/assets/',
   *     prefixJsPath:'/js/',
   *     onError:function(e){console.log(e);}
   *     glslPrecision:'highp'
   * });
   */

  const Patch = function (cfg) {
    EventTarget.apply(this)

    this._log = new Logger('core_patch')
    this.ops = []
    this.settings = {}
    this.config = cfg || {
      glCanvasResizeToWindow: false,
      prefixAssetPath: '',
      prefixJsPath: '',
      silent: true,
      onError: null,
      onFinishedLoading: null,
      onFirstFrameRendered: null,
      onPatchLoaded: null,
      fpsLimit: 0
    }
    this.timer = new Timer()
    this.freeTimer = new Timer()
    this.animFrameOps = []
    this.animFrameCallbacks = []
    this.gui = false
    CABLES1.logSilent = this.silent = true
    this.profiler = null
    this.aborted = false
    this._crashedOps = []
    this._renderOneFrame = false
    this._animReq = null
    this._opIdCache = {}
    this._triggerStack = []
    this.storeObjNames = false // remove after may release

    this.loading = new LoadingStatus(this)

    this._volumeListeners = []
    this._paused = false
    this._frameNum = 0
    this.instancing = new Instancing()
    this.onOneFrameRendered = null
    this.namedTriggers = {}

    this._origData = null
    this._frameNext = 0
    this._frameInterval = 0
    this._lastFrameTime = 0
    this._frameWasdelayed = true
    this.frameStore = {}
    this.deSerialized = false
    this.reqAnimTimeStamp = 0

    this.cgCanvas = null

    if (
      !(function () {
        return !this
      })()
    )
      console.log('not in strict mode: core patch')

    this._isLocal = document.location.href.indexOf('file:') === 0

    if (this.config.hasOwnProperty('silent')) this.silent = CABLES1.logSilent = this.config.silent
    if (!this.config.hasOwnProperty('doRequestAnimation')) this.config.doRequestAnimation = true

    if (!this.config.prefixAssetPath) this.config.prefixAssetPath = ''
    if (!this.config.prefixJsPath) this.config.prefixJsPath = ''
    if (!this.config.masterVolume) this.config.masterVolume = 1.0

    this._variables = {}
    this._variableListeners = []
    this.vars = {}
    if (cfg && cfg.vars) this.vars = cfg.vars // vars is old!

    this.cgl = new Context(this)
    this.cgp = null

    this._subpatchOpCache = {}

    this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || 'glcanvas')
    if (this.config.glCanvasResizeToWindow === true) this.cgl.setAutoResize('window')
    if (this.config.glCanvasResizeToParent === true) this.cgl.setAutoResize('parent')
    this.loading.setOnFinishedLoading(this.config.onFinishedLoading)

    if (this.cgl.aborted) this.aborted = true
    if (this.cgl.silent) this.silent = true

    this.freeTimer.play()
    this.exec()

    if (!this.aborted) {
      if (this.config.patch) {
        this.deSerialize(this.config.patch)
      } else if (this.config.patchFile) {
        ajax(this.config.patchFile, (err, _data) => {
          const data = JSON.parse(_data)
          if (err) {
            const txt = ''
            this._log.error('err', err)
            this._log.error('data', data)
            this._log.error('data', data.msg)
            return
          }
          this.deSerialize(data)
        })
      }
      this.timer.play()
    }

    console.log('made with https://cables.gl') // eslint-disable-line
  }

  Patch.prototype.isPlaying = function () {
    return !this._paused
  }

  Patch.prototype.isRenderingOneFrame = function () {
    return this._renderOneFrame
  }

  Patch.prototype.renderOneFrame = function () {
    this._paused = true
    this._renderOneFrame = true
    this.exec()
    this._renderOneFrame = false
  }

  /**
   * current number of frames per second
   * @function getFPS
   * @memberof Patch
   * @instance
   * @return {Number} fps
   */
  Patch.prototype.getFPS = function () {
    console.log('deprecated getfps')
    return 0
  }

  /**
   * returns true if patch is opened in editor/gui mode
   * @function isEditorMode
   * @memberof Patch
   * @instance
   * @return {Boolean} editor mode
   */
  Patch.prototype.isEditorMode = function () {
    return this.config.editorMode === true
  }

  /**
   * pauses patch execution
   * @function pause
   * @memberof Patch
   * @instance
   */
  Patch.prototype.pause = function () {
    cancelAnimationFrame(this._animReq)
    this.emitEvent('pause')
    this._animReq = null
    this._paused = true
    this.freeTimer.pause()
  }

  /**
   * resumes patch execution
   * @function resume
   * @memberof Patch
   * @instance
   */
  Patch.prototype.resume = function () {
    if (this._paused) {
      cancelAnimationFrame(this._animReq)
      this._paused = false
      this.freeTimer.play()
      this.emitEvent('resume')
      this.exec()
    }
  }

  /**
   * set volume [0-1]
   * @function setVolume
   * @param {Number} volume
   * @memberof Patch
   * @instance
   */
  Patch.prototype.setVolume = function (v) {
    this.config.masterVolume = v
    for (let i = 0; i < this._volumeListeners.length; i++) this._volumeListeners[i].onMasterVolumeChanged(v)
  }

  /**
   * get asset path
   * @function getAssetPath
   * @memberof Patch
   * @instance
   */
  Patch.prototype.getAssetPath = function (patchId = null) {
    if (this.isEditorMode()) {
      let id = patchId || gui.project()._id
      return '/assets/' + id + '/'
    } else if (document.location.href.indexOf('cables.gl') > 0 || document.location.href.indexOf('cables.local') > 0) {
      const parts = document.location.pathname.split('/')
      let id = patchId || parts[parts.length - 1]
      return '/assets/' + id + '/'
    } else if (this.config.hasOwnProperty('assetPath')) {
      return this.config.assetPath
    } else {
      return 'assets/'
    }
  }

  /**
   * get js path
   * @function getJsPath
   * @memberof Patch
   * @instance
   */
  Patch.prototype.getJsPath = function () {
    if (this.config.hasOwnProperty('jsPath')) {
      return this.config.jsPath
    } else {
      return 'js/'
    }
  }

  /**
   * get url/filepath for a filename
   * this uses prefixAssetpath in exported patches
   * @function getFilePath
   * @memberof Patch
   * @instance
   * @param {String} filename
   * @return {String} url
   */
  Patch.prototype.getFilePath = function (filename) {
    if (!filename) return filename
    filename = String(filename)
    if (filename.indexOf('https:') === 0 || filename.indexOf('http:') === 0) return filename
    if (filename.indexOf('data:') === 0) return filename
    if (filename.indexOf('file:') === 0) return filename

    filename = filename.replace('//', '/')
    return this.config.prefixAssetPath + filename + (this.config.suffixAssetPath || '')
  }

  Patch.prototype.clear = function () {
    this.emitEvent('patchClearStart')
    this.cgl.TextureEffectMesh = null
    this.animFrameOps.length = 0
    this.timer = new Timer()
    while (this.ops.length > 0) this.deleteOp(this.ops[0].id)

    this._opIdCache = {}
    this.emitEvent('patchClearEnd')
  }

  Patch.getOpClass = function (objName) {
    const parts = objName.split('.')
    let opObj = null

    try {
      if (parts.length == 2) opObj = window[parts[0]][parts[1]]
      else if (parts.length == 3) opObj = window[parts[0]][parts[1]][parts[2]]
      else if (parts.length == 4) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]]
      else if (parts.length == 5) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]]
      else if (parts.length == 6) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]]
      else if (parts.length == 7) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]]
      else if (parts.length == 8)
        opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]]
      else if (parts.length == 9)
        opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]]
      else if (parts.length == 10)
        opObj =
          window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]]
      return opObj
    } catch (e) {
      return null
    }
  }

  Patch.prototype.createOp = function (identifier, id, opName = null) {
    let op = null
    let objName = ''

    try {
      if (!identifier) {
        console.error('createop identifier false', identifier)
        console.log(new Error().stack)
        return
      }
      if (identifier.indexOf('Ops.') === -1) {
        // this should be a uuid, not a namespace
        // creating ops by id should be the default way from now on!
        const opId = identifier

        if (CABLES1.OPS[opId]) {
          objName = CABLES1.OPS[opId].objName
          op = new CABLES1.OPS[opId].f(this, objName, id, opId)
          op.opId = opId
        } else {
          if (opName) {
            identifier = opName
            console.log('could not find op by id: ' + opId)
          } else {
            throw new Error('could not find op by id: ' + opId, { cause: 'opId:' + opId })
          }
        }
      }

      if (!op) {
        // fallback: create by objname!
        objName = identifier
        const parts = identifier.split('.')
        const opObj = Patch.getOpClass(objName)

        if (!opObj) {
          this.emitEvent('criticalError', { title: 'unknown op' + objName, text: 'unknown op: ' + objName })

          this._log.error('unknown op: ' + objName)
          throw new Error('unknown op: ' + objName)
        } else {
          if (parts.length == 2) op = new window[parts[0]][parts[1]](this, objName, id)
          else if (parts.length == 3) op = new window[parts[0]][parts[1]][parts[2]](this, objName, id)
          else if (parts.length == 4) op = new window[parts[0]][parts[1]][parts[2]][parts[3]](this, objName, id)
          else if (parts.length == 5)
            op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]](this, objName, id)
          else if (parts.length == 6)
            op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]](this, objName, id)
          else if (parts.length == 7)
            op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]](this, objName, id)
          else if (parts.length == 8)
            op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]](
              this,
              objName,
              id
            )
          else if (parts.length == 9)
            op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]](
              this,
              objName,
              id
            )
          else if (parts.length == 10)
            op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][
              parts[9]
            ](this, objName, id)
          else console.log('parts.length', parts.length)
        }

        if (op) {
          op.opId = null
          for (const i in CABLES1.OPS) {
            if (CABLES1.OPS[i].objName == objName) op.opId = i
          }
        }
      }
    } catch (e) {
      this._crashedOps.push(objName)

      this.emitEvent('exceptionOp', e, objName, op)

      if (!this.isEditorMode()) {
        this._log.error(e)
        this._log.error('[instancing error] ' + objName, e)

        if (CABLES1.api) CABLES1.api.sendErrorReport(e)
        this.exitError('INSTANCE_ERR', 'Instancing Error 1' + objName, e)
        throw new Error('instancing error 1' + objName)
      }
    }

    if (op) {
      op._objName = objName
      op.patch = this
    } else {
      this._log.log('no op was created!?', identifier, id)
    }
    return op
  }

  /**
   * create a new op in patch
   * @function addOp
   * @memberof Patch
   * @instance
   * @param {String} opIdentifier, uuid or name, e.g. Ops.Math.Sum
   * @param {Object} uiAttribs Attributes
   * @param {String} id
   * @param {boolean} fromDeserialize
   * @param {String} opName, e.g. Ops.Math.Sum
   * @example
   * // add invisible op
   * patch.addOp('Ops.Math.Sum', { showUiAttribs: false });
   */
  Patch.prototype.addOp = function (opIdentifier, uiAttribs, id, fromDeserialize, opName) {
    const op = this.createOp(opIdentifier, id, opName)

    if (op) {
      uiAttribs = uiAttribs || {}
      if (uiAttribs.hasOwnProperty('errors')) delete uiAttribs.errors
      if (uiAttribs.hasOwnProperty('error')) delete uiAttribs.error
      uiAttribs.subPatch = uiAttribs.subPatch || 0

      op.setUiAttribs(uiAttribs)
      if (op.onCreate) op.onCreate()

      if (op.hasOwnProperty('onAnimFrame')) this.addOnAnimFrame(op)
      if (op.hasOwnProperty('onMasterVolumeChanged')) this._volumeListeners.push(op)

      if (this._opIdCache[op.id]) {
        console.log('opid with id ' + op.id + ' already exists in patch!')
        this.deleteOp(op.id) // strange with subpatch ops: why is this needed, somehow ops get added twice ???.....
        // return;
      }

      this.ops.push(op)
      this._opIdCache[op.id] = op

      if (this._subPatchCacheAdd) this._subPatchCacheAdd(uiAttribs.subPatch, op)
      this.emitEvent('onOpAdd', op, fromDeserialize)

      if (op.init) op.init()

      op.emitEvent('init', fromDeserialize)
    } else {
      this._log.error('addop: no op.....')
    }

    return op
  }

  Patch.prototype.addOnAnimFrame = function (op) {
    for (let i = 0; i < this.animFrameOps.length; i++)
      if (this.animFrameOps[i] == op) {
        return
      }

    this.animFrameOps.push(op)
  }

  Patch.prototype.removeOnAnimFrame = function (op) {
    for (let i = 0; i < this.animFrameOps.length; i++) {
      if (this.animFrameOps[i] == op) {
        this.animFrameOps.splice(i, 1)
        return
      }
    }
  }

  Patch.prototype.addOnAnimFrameCallback = function (cb) {
    this.animFrameCallbacks.push(cb)
  }

  Patch.prototype.removeOnAnimCallback = function (cb) {
    for (let i = 0; i < this.animFrameCallbacks.length; i++) {
      if (this.animFrameCallbacks[i] == cb) {
        this.animFrameCallbacks.splice(i, 1)
        return
      }
    }
  }

  Patch.prototype.deleteOp = function (opid, tryRelink, reloadingOp) {
    let found = false
    for (const i in this.ops) {
      if (this.ops[i].id == opid) {
        const op = this.ops[i]
        let reLinkP1 = null
        let reLinkP2 = null

        if (op) {
          found = true
          if (tryRelink) {
            if (
              op.portsIn.length > 0 &&
              op.portsIn[0].isLinked() &&
              op.portsOut.length > 0 &&
              op.portsOut[0].isLinked()
            ) {
              if (op.portsIn[0].getType() == op.portsOut[0].getType() && op.portsIn[0].links[0]) {
                reLinkP1 = op.portsIn[0].links[0].getOtherPort(op.portsIn[0])
                reLinkP2 = op.portsOut[0].links[0].getOtherPort(op.portsOut[0])
              }
            }
          }

          const opToDelete = this.ops[i]
          opToDelete.removeLinks()

          if (this.onDelete) {
            // todo: remove
            console.log('deprecated this.onDelete', this.onDelete)
            this.onDelete(opToDelete)
          }

          this.ops.splice(i, 1)
          opToDelete.emitEvent('delete', opToDelete)
          this.emitEvent('onOpDelete', opToDelete, reloadingOp)

          if (this.clearSubPatchCache) this.clearSubPatchCache(opToDelete.uiAttribs.subPatch)

          if (opToDelete.onDelete) opToDelete.onDelete(reloadingOp)
          opToDelete.cleanUp()

          if (reLinkP1 !== null && reLinkP2 !== null) {
            this.link(reLinkP1.op, reLinkP1.getName(), reLinkP2.op, reLinkP2.getName())
          }

          delete this._opIdCache[opid]
          break
        }
      }
    }

    if (!found) console.log('core patch deleteop: not found...', opid)
  }

  Patch.prototype.getFrameNum = function () {
    return this._frameNum
  }

  Patch.prototype.emitOnAnimFrameEvent = function (time, delta) {
    time = time || this.timer.getTime()

    for (let i = 0; i < this.animFrameCallbacks.length; ++i)
      if (this.animFrameCallbacks[i]) this.animFrameCallbacks[i](time, this._frameNum, delta)

    for (let i = 0; i < this.animFrameOps.length; ++i)
      if (this.animFrameOps[i].onAnimFrame) this.animFrameOps[i].onAnimFrame(time, this._frameNum, delta)
  }

  Patch.prototype.renderFrame = function (timestamp) {
    this.timer.update(this.reqAnimTimeStamp)
    this.freeTimer.update(this.reqAnimTimeStamp)
    const time = this.timer.getTime()
    const startTime = performance.now()
    this.cgl.frameStartTime = this.timer.getTime()

    const delta = timestamp - this.reqAnimTimeStamp || timestamp

    this.emitOnAnimFrameEvent(null, delta)

    this.cgl.profileData.profileFrameDelta = delta
    this.reqAnimTimeStamp = timestamp
    this.cgl.profileData.profileOnAnimFrameOps = performance.now() - startTime

    this.emitEvent('onRenderFrame', time)

    this._frameNum++
    if (this._frameNum == 1) {
      if (this.config.onFirstFrameRendered) this.config.onFirstFrameRendered()
    }
  }

  Patch.prototype.exec = function (timestamp) {
    if (!this._renderOneFrame && (this._paused || this.aborted)) return
    this.emitEvent('reqAnimFrame')
    cancelAnimationFrame(this._animReq)

    this.config.fpsLimit = this.config.fpsLimit || 0
    if (this.config.fpsLimit) {
      this._frameInterval = 1000 / this.config.fpsLimit
    }

    const now = CABLES1.now()
    const frameDelta = now - this._frameNext

    if (this.isEditorMode()) {
      if (!this._renderOneFrame) {
        if (now - this._lastFrameTime >= 500 && this._lastFrameTime !== 0 && !this._frameWasdelayed) {
          this._lastFrameTime = 0
          setTimeout(this.exec.bind(this), 500)
          this.emitEvent('renderDelayStart')
          this._frameWasdelayed = true
          return
        }
      }
    }

    if (
      this._renderOneFrame ||
      this.config.fpsLimit === 0 ||
      frameDelta > this._frameInterval ||
      this._frameWasdelayed
    ) {
      this.renderFrame(timestamp)

      if (this._frameInterval) this._frameNext = now - (frameDelta % this._frameInterval)
    }

    if (this._frameWasdelayed) {
      this.emitEvent('renderDelayEnd')
      this._frameWasdelayed = false
    }

    if (this._renderOneFrame) {
      if (this.onOneFrameRendered) this.onOneFrameRendered() // todo remove everywhere and use propper event...
      this.emitEvent('renderedOneFrame')
      this._renderOneFrame = false
    }

    if (this.config.doRequestAnimation)
      this._animReq = this.cgl.canvas.ownerDocument.defaultView.requestAnimationFrame(this.exec.bind(this))
  }

  /**
   * link two ops/ports
   * @function link
   * @memberof Patch
   * @instance
   * @param {Op} op1
   * @param {String} portName1
   * @param {Op} op2
   * @param {String} portName2
   */
  Patch.prototype.link = function (op1, port1Name, op2, port2Name, lowerCase, fromDeserialize) {
    if (!op1) {
      console.warn('link: op1 is null ')
      return
    }
    if (!op2) {
      console.warn('link: op2 is null')
      return
    }

    const port1 = op1.getPort(port1Name, lowerCase)
    const port2 = op2.getPort(port2Name, lowerCase)

    if (!port1) {
      console.warn('port1 not found! ' + port1Name + '(' + op1.objName + ')')
      return
    }

    if (!port2) {
      console.warn('port2 not found! ' + port2Name + ' of ' + op2.name + '(' + op2.objName + ')', op2)
      return
    }

    if (!port1.shouldLink(port1, port2) || !port2.shouldLink(port1, port2)) {
      return false
    }

    if (Link.canLink(port1, port2)) {
      const link = new Link(this)
      link.link(port1, port2)

      this.emitEvent('onLink', port1, port2, link, fromDeserialize)
      return link
    }
  }

  Patch.prototype.serialize = function (options) {
    const obj = {}

    options = options || {}
    obj.ops = []
    obj.settings = this.settings
    for (const i in this.ops) {
      const op = this.ops[i]
      obj.ops.push(op.getSerialized())
    }

    cleanJson(obj)

    if (options.asObject) return obj
    return JSON.stringify(obj)
  }

  Patch.prototype.getOpsByRefId = function (refId) {
    const perf = CABLES1.UI.uiProfiler.start('[corepatchetend] getOpsByRefId')
    const refOps = []
    const ops = gui.corePatch().ops
    for (let i = 0; i < ops.length; i++) if (ops[i].storage && ops[i].storage.ref == refId) refOps.push(ops[i])
    perf.finish()
    return refOps
  }

  Patch.prototype.getOpById = function (opid) {
    return this._opIdCache[opid]
  }

  Patch.prototype.getOpsByName = function (name) {
    // TODO: is this still needed ? unclear behaviour....
    const arr = []
    for (const i in this.ops) if (this.ops[i].name == name) arr.push(this.ops[i])
    return arr
  }

  Patch.prototype.getOpsByObjName = function (name) {
    const arr = []
    for (const i in this.ops) if (this.ops[i].objName == name) arr.push(this.ops[i])
    return arr
  }

  Patch.prototype.getOpsByOpId = function (opid) {
    const arr = []
    for (const i in this.ops) if (this.ops[i].opId == opid) arr.push(this.ops[i])
    return arr
  }

  Patch.prototype.loadLib = function (which) {
    ajaxSync(
      '/ui/libs/' + which + '.js',
      (err, res) => {
        const se = document.createElement('script')
        se.type = 'text/javascript'
        se.text = res
        document.getElementsByTagName('head')[0].appendChild(se)
      },
      'GET'
    )
    // open and send a synchronous request
    // xhrObj.open('GET', '/ui/libs/'+which+'.js', false);
    // xhrObj.send('');
    // add the returned content to a newly created script tag
  }

  Patch.prototype.getSubPatchOp = function (patchId, objName) {
    for (const i in this.ops)
      if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
        return this.ops[i]
    return false
  }

  Patch.prototype._addLink = function (opinid, opoutid, inName, outName) {
    return this.link(this.getOpById(opinid), inName, this.getOpById(opoutid), outName, false, true)
  }

  Patch.prototype.deSerialize = function (obj, options) {
    options = options || { genIds: false, createRef: false }
    if (this.aborted) return
    const newOps = []
    const loadingId = this.loading.start('core', 'deserialize')

    this.namespace = obj.namespace || ''
    this.name = obj.name || ''

    if (typeof obj === 'string') obj = JSON.parse(obj)

    this.settings = obj.settings

    this.emitEvent('patchLoadStart')

    if (window.logStartup) logStartup('add ' + obj.ops.length + ' ops... ')

    const addedOps = []
    // add ops...
    for (let iop = 0; iop < obj.ops.length; iop++) {
      const start = CABLES1.now()
      const opData = obj.ops[iop]
      let op = null

      try {
        if (opData.opId) op = this.addOp(opData.opId, opData.uiAttribs, opData.id, true, opData.objName)
        else op = this.addOp(opData.objName, opData.uiAttribs, opData.id, true)
      } catch (e) {
        console.log('[instancing error] op data:', opData, e)
        throw new Error('could not create op by id: <b>' + (opData.objName || opData.opId) + '</b> (' + opData.id + ')')
      }

      if (op) {
        addedOps.push(op)
        if (options.genIds) op.id = shortId()
        op.portsInData = opData.portsIn
        op._origData = JSON.parse(JSON.stringify(opData))
        op.storage = opData.storage
        // if (opData.hasOwnProperty("disabled"))op.setEnabled(!opData.disabled);

        for (const ipi in opData.portsIn) {
          const objPort = opData.portsIn[ipi]
          if (objPort && objPort.hasOwnProperty('name')) {
            // console.log("load poirt data,objPort", objPort.name, objPort);
            const port = op.getPort(objPort.name)

            if (port && (port.uiAttribs.display == 'bool' || port.uiAttribs.type == 'bool') && !isNaN(objPort.value))
              objPort.value = objPort.value == true ? 1 : 0
            if (port && objPort.value !== undefined && port.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE)
              port.set(objPort.value)

            if (port) {
              port.deSerializeSettings(objPort)
            } else {
              console.log('preserve', objPort.name, objPort.value)
              op.preservedPortValues = op.preservedPortValues || {}
              op.preservedPortValues[objPort.name] = objPort.value
            }
          }
        }

        for (const ipo in opData.portsOut) {
          const objPort = opData.portsOut[ipo]
          if (objPort && objPort.hasOwnProperty('name')) {
            const port2 = op.getPort(objPort.name)
            if (port2 && port2.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE && objPort.hasOwnProperty('value'))
              port2.set(obj.ops[iop].portsOut[ipo].value)

            if (port2 && objPort.expose) port2.setUiAttribs({ expose: true })
          }
        }
        newOps.push(op)
      }

      const timeused = Math.round(100 * (CABLES1.now() - start)) / 100
      if (!this.silent && timeused > 5) console.log('long op init ', obj.ops[iop].objName, timeused)
    }
    if (window.logStartup) logStartup('add ops done')

    for (const i in this.ops) {
      if (this.ops[i].onLoadedValueSet) {
        this.ops[i].onLoadedValueSet(this.ops[i]._origData)
        this.ops[i].onLoadedValueSet = null
        this.ops[i]._origData = null
      }
      this.ops[i].emitEvent('loadedValueSet')
    }

    if (window.logStartup) logStartup('creating links')

    if (options.opsCreated) options.opsCreated(addedOps)
    // create links...
    if (obj.ops) {
      for (let iop = 0; iop < obj.ops.length; iop++) {
        if (obj.ops[iop].portsIn) {
          for (let ipi2 = 0; ipi2 < obj.ops[iop].portsIn.length; ipi2++) {
            if (obj.ops[iop].portsIn[ipi2] && obj.ops[iop].portsIn[ipi2].links) {
              for (let ili = 0; ili < obj.ops[iop].portsIn[ipi2].links.length; ili++) {
                const l = this._addLink(
                  obj.ops[iop].portsIn[ipi2].links[ili].objIn,
                  obj.ops[iop].portsIn[ipi2].links[ili].objOut,
                  obj.ops[iop].portsIn[ipi2].links[ili].portIn,
                  obj.ops[iop].portsIn[ipi2].links[ili].portOut
                )

                console.log('aaaa', l)

                // const took = performance.now - startTime;
                // if (took > 100)console.log(obj().ops[iop].portsIn[ipi2].links[ili].objIn, obj.ops[iop].portsIn[ipi2].links[ili].objOut, took);
              }
            }
          }
        }
        if (obj.ops[iop].portsOut)
          for (let ipi2 = 0; ipi2 < obj.ops[iop].portsOut.length; ipi2++)
            if (obj.ops[iop].portsOut[ipi2] && obj.ops[iop].portsOut[ipi2].links) {
              for (let ili = 0; ili < obj.ops[iop].portsOut[ipi2].links.length; ili++) {
                if (obj.ops[iop].portsOut[ipi2].links[ili]) {
                  if (obj.ops[iop].portsOut[ipi2].links[ili].subOpRef) {
                    // lost link
                    const outOp = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut)
                    let dstOp = null
                    let theSubPatch = 0

                    for (let i = 0; i < this.ops.length; i++) {
                      if (
                        this.ops[i].storage &&
                        this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].subOpRef &&
                        outOp.uiAttribs.subPatch == this.ops[i].uiAttribs.subPatch
                      ) {
                        theSubPatch = this.ops[i].patchId.get()
                        break
                      }
                    }

                    for (let i = 0; i < this.ops.length; i++) {
                      if (
                        this.ops[i].storage &&
                        this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].refOp &&
                        this.ops[i].uiAttribs.subPatch == theSubPatch
                      ) {
                        dstOp = this.ops[i]
                        break
                      }
                    }

                    if (!dstOp) this._log.warn('could not find op for lost link')
                    else {
                      const l = this._addLink(
                        dstOp.id,
                        obj.ops[iop].portsOut[ipi2].links[ili].objOut,

                        obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                        obj.ops[iop].portsOut[ipi2].links[ili].portOut
                      )
                    }
                  } else {
                    const l = this._addLink(
                      obj.ops[iop].portsOut[ipi2].links[ili].objIn,
                      obj.ops[iop].portsOut[ipi2].links[ili].objOut,
                      obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                      obj.ops[iop].portsOut[ipi2].links[ili].portOut
                    )

                    if (!l) {
                      const op1 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objIn)
                      const op2 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut)

                      if (!op1) console.log('could not find link op1')
                      if (!op2) console.log('could not find link op2')

                      const p1Name = obj.ops[iop].portsOut[ipi2].links[ili].portIn

                      if (op1 && !op1.getPort(p1Name)) {
                        console.log('PRESERVE port 1 not found', p1Name)

                        op1.preservedPortLinks[p1Name] = op1.preservedPortLinks[p1Name] || []
                        op1.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili])
                      }

                      const p2Name = obj.ops[iop].portsOut[ipi2].links[ili].portOut
                      if (op2 && !op2.getPort(p2Name)) {
                        console.log('PRESERVE port 2 not found', obj.ops[iop].portsOut[ipi2].links[ili].portOut)
                        op2.preservedPortLinks[p1Name] = op2.preservedPortLinks[p1Name] || []
                        op2.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili])
                      }
                    }
                  }
                }
              }
            }
      }
    }

    if (window.logStartup) logStartup('calling ops onloaded')

    for (const i in this.ops) {
      if (this.ops[i].onLoaded) {
        // TODO: deprecate!!!
        this.ops[i].onLoaded()
        this.ops[i].onLoaded = null
      }
    }

    if (window.logStartup) logStartup('initializing ops...')
    for (const i in this.ops) {
      if (this.ops[i].init) {
        this.ops[i].init()
        this.ops[i].init = null
      }
    }

    if (window.logStartup) logStartup('initializing vars...')

    if (this.config.variables)
      for (const varName in this.config.variables) this.setVarValue(varName, this.config.variables[varName])

    if (window.logStartup) logStartup('initializing var ports')

    for (const i in this.ops) {
      this.ops[i].initVarPorts()
      delete this.ops[i].uiAttribs.pasted
    }

    setTimeout(() => {
      this.loading.finished(loadingId)
    }, 100)

    if (window.logStartup) logStartup('calling onPatchLoaded/patchLoadEnd')

    if (this.config.onPatchLoaded) this.config.onPatchLoaded(this)

    this.deSerialized = true
    this.emitEvent('patchLoadEnd', newOps, obj, options.genIds)
  }

  Patch.prototype.profile = function (enable) {
    this.profiler = new Profiler(this)
    for (const i in this.ops) {
      this.ops[i].profile(enable)
    }
  }

  // ----------------------

  /**
   * set variable value
   * @function setVariable
   * @memberof Patch
   * @instance
   * @param {String} name of variable
   * @param {Number|String|Boolean} value
   */
  Patch.prototype.setVariable = function (name, val) {
    // if (this._variables.hasOwnProperty(name))
    if (this._variables[name] !== undefined) {
      this._variables[name].setValue(val)
    } else {
      console.log('variable ' + name + ' not found!')
    }
  }

  Patch.prototype._sortVars = function () {
    if (!this.isEditorMode()) return
    const ordered = {}
    Object.keys(this._variables)
      .sort((a, b) => {
        return a.localeCompare(b, 'en', { sensitivity: 'base' })
      })
      .forEach((key) => {
        ordered[key] = this._variables[key]
      })
    this._variables = ordered
  }

  /**
   * has variable
   * @function hasVariable
   * @memberof Patch
   * @instance
   * @param {String} name of variable
   */
  Patch.prototype.hasVar = function (name) {
    return this._variables[name] !== undefined

    // return this._variables.hasOwnProperty(name);
  }

  // used internally
  Patch.prototype.setVarValue = function (name, val, type) {
    if (this.hasVar(name)) {
      this._variables[name].setValue(val)
    } else {
      this._variables[name] = new core_variable(name, val, type)
      this._sortVars()
      this.emitEvent('variablesChanged')
    }
    return this._variables[name]
  }
  // old?
  Patch.prototype.getVarValue = function (name, val) {
    if (this._variables.hasOwnProperty(name)) return this._variables[name].getValue()
  }

  /**
   * @function getVar
   * @memberof Patch
   * @instance
   * @param {String} name
   * @return {Variable} variable
   */
  Patch.prototype.getVar = function (name) {
    if (this._variables.hasOwnProperty(name)) return this._variables[name]
  }

  Patch.prototype.deleteVar = function (name) {
    for (let i = 0; i < this.ops.length; i++)
      for (let j = 0; j < this.ops[i].portsIn.length; j++)
        if (this.ops[i].portsIn[j].getVariableName() == name) this.ops[i].portsIn[j].setVariable(null)

    delete this._variables[name]
    this.emitEvent('variableDeleted', name)
    this.emitEvent('variablesChanged')
  }

  /**
   * @function getVars
   * @memberof Patch
   * @instance
   * @return {Array<Variable>} variables
   * @function
   */
  Patch.prototype.getVars = function (t) {
    if (t === undefined) return this._variables

    const vars = []
    if (t == CABLES1.OP_PORT_TYPE_STRING) t = 'string'
    if (t == CABLES1.OP_PORT_TYPE_VALUE) t = 'number'
    if (t == CABLES1.OP_PORT_TYPE_ARRAY) t = 'array'
    if (t == CABLES1.OP_PORT_TYPE_OBJECT) t = 'object'

    for (const i in this._variables) {
      if (!this._variables[i].type || this._variables[i].type == t) vars.push(this._variables[i])
    }
    return vars
  }

  /**
   * @function exitError
   * @memberof Patch
   * @instance
   * @description cancel patch execution and quit showing an errormessage
   * @function
   */
  Patch.prototype.exitError = function (errorId, errorMessage, ex) {
    this.aborted = true

    if (this && this.config && this.config.onError) {
      this.config.onError(errorId, errorMessage)
    } else {
      if (!this.isEditorMode()) {
        const newDiv = document.createElement('div')

        const rect = this.cgl.canvas.getBoundingClientRect()

        newDiv.setAttribute(
          'style',
          'position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;'
        )
        newDiv.style.top = rect.top + 'px'
        newDiv.style.left = rect.left + 'px'
        let str = 'cables - An error occured:<br/>'
        str += '[' + errorId + '] - ' + errorMessage
        if (ex) str += '<br/>Exception: ' + ex.message
        newDiv.innerHTML = str

        const pe = this.cgl.canvas.parentElement

        while (pe.hasChildNodes()) pe.removeChild(pe.lastChild)

        document.body.appendChild(newDiv)
      }
    }
  }

  /**
   * @function preRenderOps
   * @memberof Patch
   * @instance
   * @description invoke pre rendering of ops
   * @function
   */
  Patch.prototype.preRenderOps = function () {
    this._log.log('prerendering...')

    for (let i = 0; i < this.ops.length; i++) {
      if (this.ops[i].preRender) {
        this.ops[i].preRender()
        this._log.log('prerender ' + this.ops[i].objName)
      }
    }
  }

  /**
   * @function dispose
   * @memberof Patch
   * @instance
   * @description stop, dispose and cleanup patch
   */
  Patch.prototype.dispose = function () {
    this.pause()
    this.clear()
    this.cgl.dispose()
  }

  Patch.prototype.pushTriggerStack = function (p) {
    this._triggerStack.push(p)
  }

  Patch.prototype.popTriggerStack = function () {
    this._triggerStack.pop()
  }

  Patch.prototype.printTriggerStack = function () {
    if (this._triggerStack.length == 0) {
      // console.log("stack length", this._triggerStack.length); // eslint-disable-line
      return
    }
    console.groupCollapsed(
      // eslint-disable-line
      'trigger port stack ' +
        this._triggerStack[this._triggerStack.length - 1].op.name +
        '.' +
        this._triggerStack[this._triggerStack.length - 1].name
    )

    const rows = []
    for (let i = 0; i < this._triggerStack.length; i++) {
      rows.push(i + '. ' + this._triggerStack[i].op.name + ' ' + this._triggerStack[i].name)
    }

    console.table(rows) // eslint-disable-line
    console.groupEnd() // eslint-disable-line
  }

  /**
   * returns document object of the patch could be != global document object when opening canvas ina popout window
   * @function getDocument
   * @memberof Patch
   * @instance
   * @return {Object} document
   */
  Patch.prototype.getDocument = function () {
    return this.cgl.canvas.ownerDocument
  }

  Patch.replaceOpIds = function (json, options) {
    const opids = {}
    for (const i in json.ops) {
      opids[json.ops[i].id] = json.ops[i]
    }

    for (const j in json.ops) {
      for (const k in json.ops[j].portsOut) {
        const links = json.ops[j].portsOut[k].links
        if (links) {
          let l = links.length

          while (l--) {
            if (links[l] && (!opids[links[l].objIn] || !opids[links[l].objOut])) {
              if (!options.doNotUnlinkLostLinks) {
                links.splice(l, 1)
              } else {
                if (options.fixLostLinks) {
                  // console.log("lost link...?", links[l]);
                  const op = gui.corePatch().getOpById(links[l].objIn)
                  if (!op) console.log('op not found!')
                  else {
                    const outerOp = gui.patchView.getSubPatchOuterOp(op.uiAttribs.subPatch)
                    if (outerOp) {
                      op.storage = op.storage || {}
                      op.storage.ref = op.storage.ref || CABLES1.shortId()
                      links[l].refOp = op.storage.ref
                      links[l].subOpRef = outerOp.storage.ref
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    for (const i in json.ops) {
      const op = json.ops[i]
      const oldId = op.id
      let newId = CABLES1.shortId()

      if (options.prefixHash) newId = prefixedHash(options.prefixHash + oldId)
      else if (options.prefixId) newId = options.prefixId + oldId
      else if (options.refAsId) {
        // when saving json
        if (op.storage && op.storage.ref) {
          newId = op.storage.ref
          delete op.storage.ref
        } else {
          op.storage = op.storage || {}
          op.storage.ref = newId = CABLES1.shortId()
        }
      }

      const newID = (op.id = newId)

      if (options.oldIdAsRef) {
        // when loading json
        op.storage = op.storage || {}
        op.storage.ref = oldId
      }

      for (const j in json.ops) {
        if (json.ops[j].portsIn)
          for (const k in json.ops[j].portsIn) {
            if (json.ops[j].portsIn[k].links) {
              let l = json.ops[j].portsIn[k].links.length

              while (l--) if (json.ops[j].portsIn[k].links[l] === null) json.ops[j].portsIn[k].links.splice(l, 1)

              for (l in json.ops[j].portsIn[k].links) {
                if (json.ops[j].portsIn[k].links[l].objIn === oldId) json.ops[j].portsIn[k].links[l].objIn = newID
                if (json.ops[j].portsIn[k].links[l].objOut === oldId) json.ops[j].portsIn[k].links[l].objOut = newID
              }
            }
          }

        if (json.ops[j].portsOut)
          for (const k in json.ops[j].portsOut) {
            if (json.ops[j].portsOut[k].links) {
              let l = json.ops[j].portsOut[k].links.length

              while (l--) if (json.ops[j].portsOut[k].links[l] === null) json.ops[j].portsOut[k].links.splice(l, 1)

              for (l in json.ops[j].portsOut[k].links) {
                if (json.ops[j].portsOut[k].links[l].objIn === oldId) json.ops[j].portsOut[k].links[l].objIn = newID
                if (json.ops[j].portsOut[k].links[l].objOut === oldId) json.ops[j].portsOut[k].links[l].objOut = newID
              }
            }
          }
      }
    }

    // set correct subpatch
    const subpatchIds = []
    const fixedSubPatches = []

    for (let i = 0; i < json.ops.length; i++) {
      // if (CABLES1.Op.isSubPatchOpName(json.ops[i].objName))
      if (json.ops[i].storage && json.ops[i].storage.subPatchVer) {
        for (const k in json.ops[i].portsIn) {
          if (json.ops[i].portsIn[k].name === 'patchId') {
            let newId = shortId()

            if (options.prefixHash) newId = prefixedHash(options.prefixHash + json.ops[i].portsIn[k].value)

            const oldSubPatchId = json.ops[i].portsIn[k].value
            const newSubPatchId = (json.ops[i].portsIn[k].value = newId)

            subpatchIds.push(newSubPatchId)

            for (let j = 0; j < json.ops.length; j++) {
              // op has no uiAttribs in export, we don't care about subpatches in export though
              if (json.ops[j].uiAttribs) {
                if (json.ops[j].uiAttribs.subPatch === oldSubPatchId) {
                  json.ops[j].uiAttribs.subPatch = newSubPatchId
                  fixedSubPatches.push(json.ops[j].id)
                }
              }
            }
          }
        }
      }
    }

    for (const kk in json.ops) {
      let found = false
      for (let j = 0; j < fixedSubPatches.length; j++) {
        if (json.ops[kk].id === fixedSubPatches[j]) {
          found = true
          break
        }
      }
      // op has no uiAttribs in export, we don't care about subpatches in export though
      if (!found && json.ops[kk].uiAttribs && options.parentSubPatchId != null)
        json.ops[kk].uiAttribs.subPatch = options.parentSubPatchId
    }

    return json
  }

  /**
   * remove an eventlistener
   * @instance
   * @function addEventListener
   * @param {String} name of event
   * @param {function} callback
   */

  /**
   * remove an eventlistener
   * @instance
   * @function removeEventListener
   * @param {String} name of event
   * @param {function} callback
   */

  /**
   * op added to patch event
   * @event onOpAdd
   *
   * @memberof Patch
   * @type {Object}
   * @property {Op} op new op
   */

  /**
   * op deleted from patch
   * @event onOpDelete
   * @memberof Patch
   * @type {Object}
   * @property {Op} op that will be deleted
   */

  /**
   * link event - two ports will be linked
   * @event onLink
   * @memberof Patch
   * @type {Object}
   * @property {Port} port1
   * @property {Port} port2
   */

  /**
   * unlink event - a link was deleted
   * @event onUnLink
   * @memberof Patch
   * @type {Object}
   */

  /**
   * variables has been changed / a variable has been added to the patch
   * @event variablesChanged
   * @memberof Patch
   * @type {Object}
   * @property {Port} port1
   * @property {Port} port2
   */

  /**
   * configuration object for loading a patch
   * @typedef {Object} PatchConfig
   * @hideconstructor
   * @property {String} [prefixAssetPath=''] prefix for path to assets
   * @property {String} [assetPath=''] path to assets
   * @property {String} [jsPath=''] path to javascript files
   * @property {String} [glCanvasId='glcanvas'] dom element id of canvas element
   * @property {Function} [onError=null] called when an error occurs
   * @property {Function} [onFinishedLoading=null] called when patch finished loading all assets
   * @property {Function} [onFirstFrameRendered=null] called when patch rendered it's first frame
   * @property {Boolean} [glCanvasResizeToWindow=false] resize canvas automatically to window size
   * @property {Boolean} [doRequestAnimation=true] do requestAnimationFrame set to false if you want to trigger exec() from outside (only do if you know what you are doing)
   * @property {Boolean} [clearCanvasColor=true] clear canvas in transparent color every frame
   * @property {Boolean} [clearCanvasDepth=true] clear depth every frame
   * @property {Boolean} [glValidateShader=true] enable/disable validation of shaders *
   * @property {Boolean} [silent=false]
   * @property {Number} [fpsLimit=0] 0 for maximum possible frames per second
   * @property {String} [glslPrecision='mediump'] default precision for glsl shader
   *
   */

  /* harmony default export */ const core_patch = Patch // CONCATENATED MODULE: ./src/core/embedding.js

  const EMBED = {}

  /**
   * add patch into html element (will create canvas and set size to fill containerElement)
   * @name CABLES1.EMBED#addPatch
   * @param {object|string} containerElement dom element or id of element
   * @param {options} patch options
   * @function
   */
  EMBED.addPatch = function (_element, options) {
    let el = _element
    let id = generateUUID()
    if (typeof _element == 'string') {
      id = _element
      el = document.getElementById(id)

      if (!el) {
        console.error(id + ' Polyshape Container Element not found!')
        return
      }
    }

    const canvEl = document.createElement('canvas')
    canvEl.id = 'glcanvas_' + id
    canvEl.width = el.clientWidth
    canvEl.height = el.clientHeight

    window.addEventListener(
      'resize',
      function () {
        this.setAttribute('width', el.clientWidth)
        this.height = el.clientHeight
      }.bind(canvEl)
    )

    el.appendChild(canvEl)

    options = options || {}
    options.glCanvasId = canvEl.id

    if (!options.onError) {
      options.onError = function (err) {
        console.error(err)
      }
    }

    CABLES1.patch = new core_patch(options)
    return canvEl
  } // CONCATENATED MODULE: ./src/core/webaudio.js

  /** @namespace WEBAUDIO */

  const WEBAUDIO = {}

  WEBAUDIO.toneJsInitialized = false

  /*
   * External JSDoc definitions
   */

  /**
   * Part of the Web Audio API, the AudioBuffer interface represents a short audio asset residing in memory.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
   */

  /**
   * Part of the Web Audio API, the AudioNode interface is a generic interface for representing an audio processing module.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode}
   */

  /**
   * The AudioContext interface represents an audio-processing graph built from audio modules linked together
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
   */

  /**
   * Checks if a global audio context has been created and creates
   * it if necessary. This audio context can be used for native Web Audio as well as Tone.js ops.
   * Associates the audio context with Tone.js if it is being used
   * @param {CABLES1.Op} op - The operator which needs the Audio Context
   */
  WEBAUDIO.createAudioContext = function (op) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    if (window.AudioContext) {
      if (!window.audioContext) {
        window.audioContext = new AudioContext()
      }
      // check if tone.js lib is being used
      if (window.Tone && !WEBAUDIO.toneJsInitialized) {
        // set current audio context in tone.js
        Tone.setContext(window.audioContext)
        WEBAUDIO.toneJsInitialized = true
      }
    } else {
      op.patch.config.onError('NO_WEBAUDIO', 'Web Audio is not supported in this browser.')
      return
    }
    return window.audioContext
  }

  /**
   * Returns the audio context.
   * Before `createAudioContext` must have been called at least once.
   * It most cases you should use `createAudioContext`, which just returns the audio context
   * when it has been created already.
   */
  WEBAUDIO.getAudioContext = function () {
    return window.audioContext
  }

  /**
   * Creates an audio in port for the op with name `portName`
   * When disconnected it will disconnect the previous connected audio node
   * from the op's audio node.
   * @param {CABLES1.Op} op - The operator to create the audio port in
   * @param {string} portName - The name of the port
   * @param {AudioNode} audioNode - The audionode incoming connections should connect to
   * @param {number} [inputChannelIndex=0] - If the audio node has multiple inputs, this is the index of the input channel to connect to
   * @returns {CABLES1.Port|undefined} - The newly created audio in port or `undefined` if there was an error
   */
  WEBAUDIO.createAudioInPort = function (op, portName, audioNode, inputChannelIndex) {
    if (!op || !portName || !audioNode) {
      const msg = 'ERROR: createAudioInPort needs three parameters, op, portName and audioNode'
      op.log(msg)
      throw new Error(msg)
      // return;
    }
    if (!inputChannelIndex) {
      inputChannelIndex = 0
    }
    op.webAudio = op.webAudio || {}
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || []
    const port = op.inObject(portName)
    port.webAudio = {}
    port.webAudio.previousAudioInNode = null
    port.webAudio.audioNode = audioNode

    op.webAudio.audioInPorts[portName] = port

    port.onChange = function () {
      const audioInNode = port.get()
      // when port disconnected, disconnect audio nodes
      if (!audioInNode) {
        if (port.webAudio.previousAudioInNode) {
          try {
            if (port.webAudio.previousAudioInNode.disconnect)
              port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode, 0, inputChannelIndex)
            op.setUiError('audioCtx', null)
          } catch (e) {
            try {
              port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode)
            } catch (er) {
              op.log(
                'Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ',
                e
              )
              if (e.printStackTrace) {
                e.printStackTrace()
              }
              throw e
            }
          }
        }
      } else {
        try {
          if (audioInNode.connect) {
            audioInNode.connect(port.webAudio.audioNode, 0, inputChannelIndex)
            op.setUiError('audioCtx', null)
          } else
            op.setUiError(
              'audioCtx',
              'The passed input is not an audio context. Please make sure you connect an audio context to the input.',
              2
            )
        } catch (e) {
          op.log('Error: Failed to connect web audio node!', e)
          op.log('port.webAudio.audioNode', port.webAudio.audioNode)
          op.log('audioInNode: ', audioInNode)
          op.log('inputChannelIndex:', inputChannelIndex)
          op.log('audioInNode.connect: ', audioInNode.connect)
          throw e
        }
      }
      port.webAudio.previousAudioInNode = audioInNode
    }
    // TODO: Maybe add subtype to audio-node-object?
    return port
  }

  /**
   * Sometimes it is necessary to replace a node of a port, if so all
   * connections to this node must be disconnected and connections to the new
   * node must be made.
   * Can be used for both Audio ports as well as AudioParam ports
   * if used with an AudioParam pass e.g. `synth.frequency` as newNode
   * @param {CABLES1.Port} port - The port where the audio node needs to be replaced
   */
  WEBAUDIO.replaceNodeInPort = function (port, oldNode, newNode) {
    const connectedNode = port.webAudio.previousAudioInNode
    // check if connected
    if (connectedNode && connectedNode.disconnect) {
      try {
        connectedNode.disconnect(oldNode)
      } catch (e) {
        if (e.printStackTrace) {
          e.printStackTrace()
        }
        throw new Error('replaceNodeInPort: Could not disconnect old audio node. ' + e.name + ' ' + e.message)
      }
      port.webAudio.audioNode = newNode
      try {
        connectedNode.connect(newNode)
      } catch (e) {
        if (e.printStackTrace) {
          e.printStackTrace()
        }
        throw new Error('replaceNodeInPort: Could not connect to new node. ' + e.name + ' ' + e.message)
      }
    }
  }

  /**
   * Creates an audio out port which takes care of (dis-)connecting on it’s own
   * @param {CABLES1.op} op - The op to create an audio out port for
   * @param {string} portName - The name of the port to be created
   * @param {AudioNode} audioNode - The audio node to link to the port
   * @returns {(CABLES1.Port|undefined)} - The newly created audio out port or `undefined` if there was an error
   */
  WEBAUDIO.createAudioOutPort = function (op, portName, audioNode) {
    if (!op || !portName || !audioNode) {
      const msg = 'ERROR: createAudioOutPort needs three parameters, op, portName and audioNode'
      op.log(msg)
      throw new Error(msg)
    }

    const port = op.outObject(portName)
    // TODO: Maybe add subtype to audio-node-object?
    port.set(audioNode)
    return port
  }

  /**
   * Creates an audio param in port for the op with name portName.
   * The port accepts other audio nodes as signals as well as values (numbers)
   * When the port is disconnected it will disconnect the previous connected audio node
   * from the op's audio node and restore the number value set before.
   * @param {CABLES1.Op} op - The operator to create an audio param input port for
   * @param {string} portName - The name of the port to create
   * @returns {(CABLES1.Port|undefined)} - The newly created port, which takes care of (dis-)connecting on its own, or `undefined` if there was an error
   */
  WEBAUDIO.createAudioParamInPort = function (op, portName, audioNode, options, defaultValue) {
    if (!op || !portName || !audioNode) {
      op.log('ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode')
      if (op && op.name) op.log('opname: ', op.name)
      op.log('portName', portName)
      op.log('audioNode: ', audioNode)
      return
    }
    op.webAudio = op.webAudio || {}
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || []
    // var port = op.inObject(portName);
    const port = op.inDynamic(
      portName,
      [CONSTANTS.OP.OP_PORT_TYPE_VALUE, CONSTANTS.OP.OP_PORT_TYPE_OBJECT],
      options,
      defaultValue
    )
    port.webAudio = {}
    port.webAudio.previousAudioInNode = null
    port.webAudio.audioNode = audioNode

    op.webAudio.audioInPorts[portName] = port

    // port.onLinkChanged = function() {
    //   op.log("onLinkChanged");
    //   if(port.isLinked()) {
    //
    //       if(port.links[0].portOut.type === CABLES1.CONSTANTS.OP.OP_PORT_TYPE_) { // value
    //
    //       } else if(port.links[0].portOut.type === CABLES1.CONSTANTS.OP.OP_PORT_TYPE_OBJECT) { // object
    //
    //       }
    //   } else { // unlinked
    //
    //   }
    // };

    port.onChange = function () {
      const audioInNode = port.get()
      const node = port.webAudio.audioNode
      const audioCtx = WEBAUDIO.getAudioContext()

      if (audioInNode != undefined) {
        if (typeof audioInNode === 'object' && audioInNode.connect) {
          try {
            audioInNode.connect(node)
          } catch (e) {
            op.log('Could not connect audio node: ', e)
            if (e.printStackTrace) {
              e.printStackTrace()
            }
            throw e
          }
          port.webAudio.previousAudioInNode = audioInNode
        } else {
          // tone.js audio param
          if (node._param && node._param.minValue && node._param.maxValue) {
            if (audioInNode >= node._param.minValue && audioInNode <= node._param.maxValue) {
              try {
                if (node.setValueAtTime) {
                  node.setValueAtTime(audioInNode, audioCtx.currentTime)
                } else {
                  node.value = audioInNode
                }
              } catch (e) {
                op.log('Possible AudioParam problem with tone.js op: ', e)
                if (e.printStackTrace) {
                  e.printStackTrace()
                }
                throw e
              }
            } else {
              op.log('Warning: The value for an audio parameter is out of range!')
            }
          } // native Web Audio param
          else if (node.minValue && node.maxValue) {
            if (audioInNode >= node.minValue && audioInNode <= node.maxValue) {
              try {
                if (node.setValueAtTime) {
                  node.setValueAtTime(audioInNode, audioCtx.currentTime)
                } else {
                  node.value = audioInNode
                }
              } catch (e) {
                op.log(
                  'AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ',
                  e
                )
                if (e.printStackTrace) {
                  e.printStackTrace()
                }
                throw e
              }
            } else {
              op.log('Warning: The value for an audio parameter is out of range!')
            }
          } // no min-max values, try anyway
          else {
            try {
              if (node.setValueAtTime) {
                node.setValueAtTime(audioInNode, audioCtx.currentTime)
              } else {
                node.value = audioInNode
              }
            } catch (e) {
              op.log('Possible AudioParam problem (without minValue / maxValue): ', e)
              if (e.printStackTrace) {
                e.printStackTrace()
              }
              throw e
            }
          }

          if (port.webAudio.previousAudioInNode && port.webAudio.previousAudioInNode.disconnect) {
            try {
              port.webAudio.previousAudioInNode.disconnect(node)
            } catch (e) {
              op.log('Could not disconnect previous audio node: ', e)
              throw e
            }
            port.webAudio.previousAudioInNode = undefined
          }
        }
      } else {
        // disconnected
        if (port.webAudio.previousAudioInNode) {
        }
      }
    }
    return port
  }

  /**
   * Loads an audio file and updates the loading indicators when cables is run in the editor.
   * @param {CABLES1.Patch} patch - The cables patch, when called from inside an op this is `op.patch`
   * @param {string} url - The url of the audio file to load
   * @param {loadAudioFileFinishedCallback} onFinished - The callback to be called when the loading is finished, passes the AudioBuffer
   * @param {loadAudioFileErrorCallback} onError - The callback when there was an error loading the file, the rror message is passed
   * @see {@link https://developer.mozilla.org/de/docs/Web/API/AudioContext/decodeAudioData}
   */
  WEBAUDIO.loadAudioFile = function (patch, url, onFinished, onError, loadingTask) {
    const audioContext = WEBAUDIO.createAudioContext()

    let loadingId = null
    if (loadingTask || loadingTask === undefined) {
      loadingId = patch.loading.start('audio', url)
      if (patch.isEditorMode()) gui.jobs().start({ id: 'loadaudio' + loadingId, title: ' loading audio (' + url + ')' })
    }
    const request = new XMLHttpRequest()
    if (!url) {
      return
    }
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'
    // TODO: maybe crossorigin stuff needed?
    // Decode asynchronously
    request.onload = function () {
      patch.loading.finished(loadingId)
      if (patch.isEditorMode()) gui.jobs().finish('loadaudio' + loadingId)
      audioContext.decodeAudioData(request.response, onFinished, onError)
    }
    request.send()
  }

  /**
   * Checks if the passed time is a valid time to be used in any of the Tone.js ops.
   * @param {(string|number)} t - The time to check
   * @returns {boolean} - True if time is valid, false if not
   */
  WEBAUDIO.isValidToneTime = function (t) {
    try {
      const time = new Tone.Time(t)
    } catch (e) {
      return false
    }
    return true
  }

  /**
   * Checks if the passed note is a valid note to be used with Tone.js
   * @param {string} note - The note to be checked, e.g. `"C4"`
   * @returns {boolean} - True if the note is a valid note, false otherwise
   */
  WEBAUDIO.isValidToneNote = function (note) {
    try {
      Tone.Frequency(note)
    } catch (e) {
      return false
    }
    return true
  } // CONCATENATED MODULE: ./src/core/sessionvar.js

  // todo: old... remove this from ops...

  const Variable = function () {
    let value = null
    const changedCallbacks = []

    this.onChanged = function (f) {
      changedCallbacks.push(f)
    }

    this.getValue = function () {
      return value
    }

    this.setValue = function (v) {
      value = v
      this.emitChanged()
    }

    this.emitChanged = function () {
      for (let i = 0; i < changedCallbacks.length; i++) {
        changedCallbacks[i]()
      }
    }
  } // CONCATENATED MODULE: ./src/core/banchprofiler.js

  class Branch {
    constructor(name) {
      this.name = name
      this.dur = 0
      this._startTime = 0
      this.childs = []
    }

    start() {
      this._startTime = performance.now()
    }

    end() {
      this.dur = performance.now() - this._startTime
    }

    push(name) {
      const b = new Branch(name)
      this.childs.push(b)
      b.start()
      return b
    }

    print(level) {
      level = level || 0

      let str = ''
      for (let i = 0; i < level; i++) str += '  '

      for (let i = 0; i < this.childs.length; i++) {
        this.childs[i].print(level + 1)
      }
    }
  }

  // //////////////////////////////////////////

  class BranchStack {
    constructor() {}

    start() {
      this.root = new Branch('Root')
      this.root.start()

      this.current = this.root
    }

    push(name) {
      if (!this.current) this.start()

      const prev = this.current
      this.current = this.current.push(name)
      this.current.prev = prev
      this.current.start()
      return this.current
    }

    pop() {
      if (!this.current) return
      this.current.end()
      this.current = this.current.prev
    }

    finish() {
      this.current.end()
      this.root.print()
      this.current = null
    }
  } // CONCATENATED MODULE: ./src/core/cgp/cgp_uniform.js

  class cgp_uniform_Uniform extends cg_uniform {
    constructor(
      __shader,
      __type,
      __name,
      _value,
      _port2,
      _port3,
      _port4,
      _structUniformName,
      _structName,
      _propertyName
    ) {
      super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
      this._loc = -1
      this._cgl = __shader._cgl
    }

    updateValueF() {}

    setValueF(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValue2F() {}

    setValue2F(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValue3F() {}

    setValue3F(v) {
      this.needsUpdate = true
      this._value = v
    }

    updateValue4F() {}

    setValue4F(v) {
      this.needsUpdate = true
      this._value = v
    }

    getSizeBytes() {
      if (this._type == 'f') return 1 * 4
      if (this._type == 'i') return 1 * 4
      if (this._type == '2i') return 2 * 4
      if (this._type == '2f') return 2 * 4
      if (this._type == '3f') return 3 * 4
      if (this._type == '4f') return 4 * 4
      if (this._type == 'm4') return 4 * 4 * 4

      this._log.warn('unknown type getSizeBytes')
      // if (this._type == "t") return "sampler2D";
      // if (this._type == "tc") return "samplerCube";
      // if (this._type == "b") return "bool";

      // if (t == "3f[]") return null; // ignore this for now...
      // if (t == "m4[]") return null; // ignore this for now...
      // if (t == "f[]") return null; // ignore this for now...
    }
  } // CONCATENATED MODULE: ./src/core/cgp/cgp_shader.js

  class cgp_shader_Shader {
    constructor(_cgp, _name) {
      if (!_cgp) throw new Error('shader constructed without cgp ' + _name)
      this._log = new Logger('cgp_shader')
      this._cgp = _cgp
      this._name = _name
      this._uniforms = []

      if (!_name) this._log.stack('no shader name given')
      this._name = _name || 'unknown'
      this.id = simpleId()
      this._isValid = true
      this._compileReason = ''
      this.shaderModule = null
      this._needsRecompile = true

      this._src = ''
    }

    get isValid() {
      return this._isValid
    }

    get uniforms() {
      return this._uniforms
    }

    getName() {
      return this._name
    }

    setWhyCompile(why) {
      this._compileReason = why
    }

    setSource(src) {
      this._src = src
      this.setWhyCompile('Source changed')
      this._needsRecompile = true
    }

    compile() {
      this._isValid = true
      console.log('compiling shader...', this._compileReason)
      this._cgp.pushErrorScope()
      this.shaderModule = this._cgp.device.createShaderModule({ code: this._src })
      this._cgp.popErrorScope('cgp_shader ' + this._name, this.error.bind(this))
      this._needsRecompile = false
    }

    error(e) {
      this._isValid = false
    }

    bind() {
      let sizes = {}
      for (let i = 0; i < this._uniforms.length; i++) {
        // console.log(this._uniforms[i]);
      }

      if (this._needsRecompile) this.compile()
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} value or port
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4) {
      const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4)
      uni.shaderType = 'frag'
      return uni
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} value or port
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4) {
      const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4)
      uni.shaderType = 'vert'
      return uni
    }

    /**
     * add a uniform to all shader programs
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} value or port
     * @memberof Shader
     * @instance
     * @function addUniform
     * @returns {Uniform}
     */
    addUniform(type, name, valueOrPort, p2, p3, p4) {
      const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4)
      uni.shaderType = 'both'
      return uni
    }

    _addUniform(uni) {
      this._uniforms.push(uni)
      this.setWhyCompile('add uniform ' + name)
      this._needsRecompile = true
    }
  } // CONCATENATED MODULE: ./src/core/cgp/cgl_shader_default.wgsl

  /* harmony default export */ const cgl_shader_default =
    'struct VSUniforms\n{\n    modelMatrix: mat4x4<f32>,\n    viewMatrix: mat4x4<f32>,\n    projMatrix: mat4x4<f32>,\n};\n\nstruct FSUniforms\n{\n    color:vec4<f32>\n};\n\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\n@group(0) @binding(1) var<uniform> fsUniforms: FSUniforms;\n\nstruct MyVSInput\n{\n    @location(0) position: vec3<f32>,\n    @location(1) normal: vec3<f32>,\n    @location(2) texcoord: vec2<f32>,\n};\n\nstruct MyVSOutput\n{\n    @builtin(position) position: vec4<f32>,\n    @location(0) normal: vec3<f32>,\n    @location(1) texcoord: vec2<f32>,\n};\n\n@vertex\nfn myVSMain(v: MyVSInput) -> MyVSOutput\n{\n    var vsOut: MyVSOutput;\n    var pos =vec4<f32>(v.position, 1.0);\n\n    var mvMatrix=vsUniforms.viewMatrix * vsUniforms.modelMatrix;\n    vsOut.position = vsUniforms.projMatrix * mvMatrix * pos;\n\n    vsOut.normal = v.normal;\n    vsOut.texcoord = v.texcoord;\n    return vsOut;\n}\n\n@fragment\nfn myFSMain(v: MyVSOutput) -> @location(0) vec4<f32>\n{\n    return fsUniforms.color+vec4<f32>(.5,.5,.5,1.0);\n}\n\n' // CONCATENATED MODULE: ./src/core/cgp/cgp_state.js
  // https://github.com/greggman/webgpu-utils
  // https://developer.chrome.com/blog/from-webgl-to-webgpu/
  // https://gpuweb.github.io/gpuweb/explainer/

  /**
   * cables webgpu context/state manager
   * @external CGP1
   * @namespace Context
   * @class
   * @hideconstructor
   */
  // const Context = function (_patch)
  class WebGpuContext extends CGState {
    constructor(_patch) {
      super()

      this.patch = _patch

      this.gApi = CG.GAPI_WEBGPU
      this._viewport = [0, 0, 256, 256]
      this._shaderStack = []
      this._simpleShader = null

      this._stackCullFaceFacing = []
      this._stackDepthTest = []
      this._stackCullFace = []
      this._stackDepthFunc = []
      this._stackDepthWrite = []

      this.DEPTH_FUNCS = ['never', 'always', 'less', 'less-equal', 'greater', 'greater-equal', 'equal', 'not-equal']

      this.CULL_MODES = [
        'none',
        'back',
        'front',
        'none' // both does not exist in webgpu
      ]
    }

    /// ////////////////////

    getViewPort() {
      return [0, 0, this.canvasWidth, this.canvasHeight]
    }

    renderStart(cgp, identTranslate, identTranslateView) {
      if (!this._simpleShader) {
        this._simpleShader = new cgp_shader_Shader(this, 'simple default shader')
        this._simpleShader.setSource(cgl_shader_default)
        this._simpleShader.addUniformFrag('4f', 'color', 1, 1, 0, 1)
      }

      this.fpsCounter.startFrame()

      this._startMatrixStacks(identTranslate, identTranslateView)
      this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight)

      this.pushShader(this._simpleShader)
      this.pushDepthTest(true)
      this.pushDepthWrite(true)
      this.pushDepthFunc('less-equal')

      this.emitEvent('beginFrame')
    }

    renderEnd() {
      this._endMatrixStacks()

      this.popShader()
      this.popDepthFunc()
      this.popDepthWrite()
      this.popDepthTest()

      this.emitEvent('endFrame')
      this.fpsCounter.endFrame()
    }

    setViewPort(x, y, w, h) {
      this._viewport = [x, y, w, h]
    }

    /**
     * @function getViewPort
     * @memberof Context
     * @instance
     * @description get current gl viewport
     * @returns {Array} array [x,y,w,h]
     */
    getViewPort() {
      return this._viewPort
    }

    createMesh(geom, glPrimitive) {
      return new CGP1.Mesh(this, geom, glPrimitive)
    }

    getShader() {
      return {}
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
     */
    pushShader(shader) {
      this._shaderStack.push(shader)
      // currentShader = shader;
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    popShader() {
      if (this._shaderStack.length === 0) throw new Error('Invalid shader stack pop!')
      this._shaderStack.pop()
      // currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    getShader() {
      return this._shaderStack[this._shaderStack.length - 1]
      // if (currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == currentShader.offScreenPass) === true) return currentShader;
      // for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    pushErrorScope() {
      this.device.pushErrorScope('validation')
    }

    popErrorScope(name, cb) {
      this.device.popErrorScope().then((error) => {
        if (error) {
          this.patch.emitEvent('criticalError', { title: 'WebGPU error "' + name + '"', codeText: error.message })
          // if (this.patch.isEditorMode())console.log("WebGPU error " + this._name, error.message);

          console.warn('[cgp]', name, error.message, error, cb)
          if (cb) cb(error)
        }
      })
    }

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} enabled
     * @memberof Context
     * @instance
     */

    pushDepthTest(b) {
      this._stackDepthTest.push(b)
    }

    /**
     * current state of depth testing
     * @function stateDepthTest
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest() {
      return this._stackDepthTest[this._stackDepthTest.length - 1]
    }

    /**
     * pop depth testing state
     * @function popDepthTest
     * @memberof Context
     * @instance
     */
    popDepthTest() {
      this._stackDepthTest.pop()
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthTest
     * @param {Boolean} enabled
     * @memberof Context
     * @instance
     */

    pushDepthWrite(b) {
      b = b || false
      this._stackDepthWrite.push(b)
    }

    /**
     * current state of depth writing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite() {
      return this._stackDepthWrite[this._stackDepthWrite.length - 1]
    }

    /**
     * pop depth writing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthWrite() {
      this._stackDepthWrite.pop()
    }

    // --------------------------------------
    // state depthfunc

    /**
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {string} depth compare func
     */
    pushDepthFunc(f) {
      this._stackDepthFunc.push(f)
    }

    /**
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {string}
     */
    stateDepthFunc() {
      if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1]
      return false
    }

    /**
     * pop depth compare func
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc() {
      this._stackDepthFunc.pop()
    }

    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFaceFacing
     * @param {Boolean} enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(b) {
      this._stackCullFace.push(b)
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace() {
      return this._stackCullFace[this._stackCullFace.length - 1]
    }

    /**
     * pop face culling enabled state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popCullFace() {
      this._stackCullFace.pop()
    }

    // --------------------------------------
    // state CullFace Facing

    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @memberof Context
     * @instance
     */

    pushCullFaceFacing(b) {
      this._stackCullFaceFacing.push(b)
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing() {
      return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing() {
      this._stackCullFaceFacing.pop()
    }
  } // CONCATENATED MODULE: ./src/core/cgp/cgp_uniformbuffer.js

  class UniformBuffer {
    constructor(shader, shaderType) {
      this._shaderType = shaderType // frag, vert...
      this._shader = shader
      this._cgp = shader._cgp

      this._gpuBuffer = null
      this._values = null

      this._sizeBytes = 0
      this.update()
    }

    update() {
      this._sizeBytes = 0

      for (let i = 0; i < this._shader.uniforms.length; i++) {
        const uni = this._shader.uniforms[i]

        if (this._shaderType == uni.shaderType) this._sizeBytes += uni.getSizeBytes()
      }

      this._gpuBuffer = this._cgp.device.createBuffer({
        size: this._sizeBytes,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      })

      this._values = new Float32Array(this._sizeBytes / 4)
      this.updateUniformValues()
    }

    updateUniformValues() {
      let count = 0
      for (let i = 0; i < this._shader.uniforms.length; i++) {
        const uni = this._shader.uniforms[i]
        if (uni.shaderType == this._shaderType) {
          if (uni.getSizeBytes() / 4 > 1) {
            for (let j = 0; j < uni.getValue().length; j++) {
              this._values[count] = uni.getValue()[j]
              count++
            }
          } else {
            this._values[count] = uni.getValue()
            count++
          }
        }
      }

      this._cgp.device.queue.writeBuffer(
        this._gpuBuffer,
        0,
        this._values.buffer,
        this._values.byteOffset,
        this._values.byteLength
      )
    }
  } // CONCATENATED MODULE: ./src/core/cgp/cgp_pipeline.js

  class Pipeline {
    constructor(_cgp, _name) {
      if (!_cgp) throw new Error('Pipeline constructed without cgp ' + _name)
      this._cgp = _cgp
      this._isValid = true

      this._pipeCfg = null
      this._renderPipeline = null

      this._fsUniformBuffer = null
      this._vsUniformBuffer = null

      this._old = {}

      this.DEPTH_COMPARE_FUNCS_STRINGS = [
        'never',
        'less',
        'equal',
        'lessequal',
        'greater',
        'notequal',
        'greaterequal',
        'always'
      ]
    }

    get isValid() {
      return this._isValid
    }

    setPipeline(shader, mesh) {
      if (!mesh || !shader) {
        console.log('pipeline unknown shader/mesh')
        return
      }

      let needsRebuild =
        !this._renderPipeline ||
        !this._pipeCfg ||
        this._old.mesh != mesh ||
        this._old.shader != shader ||
        mesh.needsPipelineUpdate ||
        shader.needsPipelineUpdate

      if (this._pipeCfg) {
        if (this._pipeCfg.depthStencil.depthWriteEnabled != this._cgp.stateDepthWrite()) {
          needsRebuild = true
          this._pipeCfg.depthStencil.depthWriteEnabled = this._cgp.stateDepthWrite()
        }

        if (this._cgp.stateDepthTest() === false) {
          if (this._pipeCfg.depthStencil.depthCompare != 'never') {
            this._pipeCfg.depthStencil.depthCompare = 'never'
            needsRebuild = true
          }
        } else if (this._pipeCfg.depthStencil.depthCompare != this._cgp.stateDepthFunc()) {
          needsRebuild = true
          this._pipeCfg.depthStencil.depthCompare = this._cgp.stateDepthFunc()
        }

        if (this._cgp.stateCullFace() === false) {
          if (this._pipeCfg.primitive.cullMode != 'none') {
            needsRebuild = true
            this._pipeCfg.primitive.cullMode = 'none'
          }
        } else {
          needsRebuild = true
          this._pipeCfg.primitive.cullMode = this._cgp.stateCullFaceFacing()
        }
      }

      if (needsRebuild) {
        if (!this._pipeCfg || this._old.shader != shader) this._pipeCfg = this.getPiplelineObject(shader, mesh)

        this._old.shader = shader
        this._old.mesh = mesh

        // try
        // {
        this._renderPipeline = this._cgp.device.createRenderPipeline(this._pipeCfg)
        // }
        // catch (e)
        // {
        //     console.error(e.message);
        // }

        this._bindUniforms(shader)
      }

      if (this._renderPipeline && this._isValid) {
        mat4.copy(this._matModel, this._cgp.mMatrix)
        mat4.copy(this._matView, this._cgp.vMatrix)
        mat4.copy(this._matProj, this._cgp.pMatrix)

        this._cgp.device.queue.writeBuffer(
          this._vsUniformBuffer,
          0,
          this._vsUniformValues.buffer,
          this._vsUniformValues.byteOffset,
          this._vsUniformValues.byteLength
        )

        this._uniBufFrag.updateUniformValues()

        this._cgp.passEncoder.setPipeline(this._renderPipeline)
        this._cgp.passEncoder.setBindGroup(0, this._bindGroup)
        // this._pipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);
      }
    }

    getPiplelineObject(shader, mesh) {
      const pipeCfg = {
        layout: 'auto',
        vertex: {
          module: shader.shaderModule,
          entryPoint: 'myVSMain',
          buffers: [
            // position
            {
              arrayStride: 3 * 4, // 3 floats, 4 bytes each
              attributes: [{ shaderLocation: 0, offset: 0, format: 'float32x3' }]
            },
            // normals
            {
              arrayStride: 3 * 4, // 3 floats, 4 bytes each
              attributes: [{ shaderLocation: 1, offset: 0, format: 'float32x3' }]
            },
            // texcoords
            {
              arrayStride: 2 * 4, // 2 floats, 4 bytes each
              attributes: [{ shaderLocation: 2, offset: 0, format: 'float32x2' }]
            }
          ]
        },
        fragment: {
          module: shader.shaderModule,
          entryPoint: 'myFSMain',
          targets: [{ format: this._cgp.presentationFormat }]
        },
        primitive: {
          topology: 'triangle-list',
          cullMode: 'back' // back/none/front

          // "point-list",
          // "line-list",
          // "line-strip",
          // "triangle-list",
          // "triangle-strip"
        },
        depthStencil: {
          depthWriteEnabled: true,
          depthCompare: 'less',
          format: 'depth24plus'
        }
      }

      return pipeCfg
    }

    _bindUniforms(shader) {
      this._cgp.pushErrorScope()

      const counts = {}

      this._uniBufFrag = new UniformBuffer(shader, 'frag')

      // for (let i = 0; i < shader.uniforms.length; i++)
      // {
      //     const uni = shader.uniforms[i];
      //     const type = uni.shaderType;
      //     counts[type] = counts[type] || 0;

      //     counts[type] += uni.getSizeBytes();
      // }
      // console.log(counts, counts.frag);

      const vUniformBufferSize = 3 * 16 * 4 // 2 mat4s * 16 floats per mat * 4 bytes per float
      // const fUniformBufferSize = counts.frag;// 2 * 3 * 4; // 1 vec3 * 3 floats per vec3 * 4 bytes per float

      this._vsUniformBuffer = this._cgp.device.createBuffer({
        size: vUniformBufferSize,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
      })

      // this._fsUniformBuffer = this._cgp.device.createBuffer({
      //     "size": fUniformBufferSize,
      //     "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      // });

      // this._fsUniformValues = new Float32Array(counts.frag / 4);

      this._vsUniformValues = new Float32Array(vUniformBufferSize / 4)

      this._matModel = this._vsUniformValues.subarray(0, 16)
      this._matView = this._vsUniformValues.subarray(16, 32)
      this._matProj = this._vsUniformValues.subarray(32, 48)

      // this._fsUniformValues[1] = 1.0;
      // this._fsUniformValues[0] = 1.0;
      // const lightDirection = this._fsUniformValues.subarray(0, 3);

      // console.log("pipeline bindgrouplayout ", pipeline.getBindGroupLayout(0));

      this._bindGroup = this._cgp.device.createBindGroup({
        layout: this._renderPipeline.getBindGroupLayout(0),
        entries: [
          { binding: 0, resource: { buffer: this._vsUniformBuffer } },
          { binding: 1, resource: { buffer: this._uniBufFrag._gpuBuffer } }
          //   { binding: 2, resource: sampler },
          //   { binding: 3, resource: tex.createView() },
        ]
      })

      this._cgp.device.queue.writeBuffer(
        this._vsUniformBuffer,
        0,
        this._vsUniformValues.buffer,
        this._vsUniformValues.byteOffset,
        this._vsUniformValues.byteLength
      )

      this._uniBufFrag.updateUniformValues()
      this._cgp.popErrorScope('cgp_pipeline end', (e) => {
        this._isValid = false
      })
    }
  } // CONCATENATED MODULE: ./src/core/cgp/cgp_mesh.js

  class cgp_mesh_Mesh {
    constructor(_cgp, __geom) {
      this._log = new Logger('cgl_mesh')
      this._cgp = _cgp
      this._geom = null
      this.numIndex = 0

      this._pipe = new Pipeline(this._cgp)

      this._numNonIndexed = 0
      this._positionBuffer = null
      this._bufVerticesIndizes = null
      this._attributes = []

      this._needsPipelineUpdate = false

      if (__geom) this.setGeom(__geom)
    }

    _createBuffer(device, data, usage) {
      const buffer = device.createBuffer({
        size: data.byteLength,
        usage: usage,
        mappedAtCreation: true
      })
      const dst = new data.constructor(buffer.getMappedRange())
      dst.set(data)
      buffer.unmap()
      return buffer
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geometry
     */
    setGeom(geom, removeRef) {
      this._needsPipelineUpdate = true
      this._geom = geom
      this._disposeAttributes()

      this._positionBuffer = this._createBuffer(
        this._cgp.device,
        new Float32Array(geom.vertices),
        GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
      )

      let vi = geom.verticesIndices
      if (!geom.isIndexed()) vi = Array.from(Array(geom.vertices.length / 3).keys())
      this._numIndices = vi.length
      this._indicesBuffer = this._createBuffer(
        this._cgp.device,
        new Uint32Array(vi),
        GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
      )

      if (geom.texCoords && geom.texCoords.length) this.setAttribute('texCoords', geom.texCoords, 2)
      if (geom.vertexNormals && geom.vertexNormals.length) this.setAttribute('normals', geom.vertexNormals, 3)
    }

    _disposeAttributes() {
      this._needsPipelineUpdate = true
      for (let i = 0; i < this._attributes.length; i++) {
        this._attributes[i].buffer.destroy()
      }
      this._attributes.length = 0
    }

    dispose() {
      this._disposeAttributes()
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} attribute name
     * @param {Array} data
     * @param {Number} itemSize
     * @param {Object} options
     */
    setAttribute(name, array, itemSize, options) {
      if (!array) {
        this._log.error('mesh addAttribute - no array given! ' + name)
        throw new Error()
      }

      for (let i = 0; i < this._attributes.length; i++) {
        const attr = this._attributes[i]
        if (attr.name == name) {
          // if (attr.numItems === numItems)
          // {
          // }
          // else
          // {
          //     // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
          //     this._resizeAttr(array, attr);
          // }
          // normalBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertexNormals), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

          // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
          // this._bufferArray(array, attr);

          return attr
        }
      }

      const buffer = this._createBuffer(
        this._cgp.device,
        new Float32Array(array),
        GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
      )

      const attr = {
        buffer: buffer,
        name: name
        // "cb": cb,
        // "itemSize": itemSize,
        // "numItems": numItems,
        // "startItem": 0,
        // "instanced": instanced,
        // "type": type
      }
      this._attributes.push(attr)

      return attr
    }

    // setPipeline()
    // {

    //     this._cgp.passEncoder.setPipeline(this._pipe.getPiplelineObject(this._cgp.getShader(),this));

    // }

    render() {
      if (!this._positionBuffer) return

      // this.setPipeline();

      const shader = this._cgp.getShader()
      if (shader) shader.bind()

      if (!this._cgp.getShader() || !this._cgp.getShader().isValid) {
        // console.log("invalid");
        return
      }

      this._pipe.setPipeline(this._cgp.getShader(), this)

      if (!this._pipe.isValid) {
        // console.log("invalid");
        return
      }

      this._cgp.passEncoder.setVertexBuffer(0, this._positionBuffer)
      for (let i = 0; i < this._attributes.length; i++) {
        this._cgp.passEncoder.setVertexBuffer(i + 1, this._attributes[i].buffer)
      }

      this._cgp.passEncoder.setIndexBuffer(this._indicesBuffer, 'uint32')

      if (this._numNonIndexed) this._cgp.passEncoder.draw(this._numIndices)
      else this._cgp.passEncoder.drawIndexed(this._numIndices)

      // if (shader)shader.unbind();
    }
  } // CONCATENATED MODULE: ./src/core/cgp/cgp_texture.js

  class cgp_texture_Texture {
    constructor(_cgp, options) {
      if (!_cgp) throw new Error('no cgp')
      this._log = new Logger('cgp_texture')
      this._cgp = _cgp
      this.id = CABLES1.uuid()

      options = options || {}

      this.name = options.name || 'unknown'
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} image
     * @param {Number} filter
     */
    initTexture(img, filter) {
      this.width = img.width
      this.height = img.height

      this.textureType = 'rgba8unorm'

      const textureDescriptor = {
        // Unlike in WebGL, the size of our texture must be set at texture creation time.
        // This means we have to wait until the image is loaded to create the texture, since we won't
        // know the size until then.
        size: { width: img.width, height: img.height },
        format: this.textureType,
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
      }
      const texture = this._cgp.device.createTexture(textureDescriptor)

      this._cgp.device.queue.copyExternalImageToTexture({ source: img }, { texture: texture }, textureDescriptor.size)

      return texture
    }

    getInfo() {
      const tex = this
      const obj = {}

      obj.name = tex.name
      obj.size = tex.width + ' x ' + tex.height

      obj.textureType = tex.textureType

      return obj
    }
  }

  /**
   * @function load
   * @static
   * @memberof Texture
   * @description load an image from an url
   * @param {Context} cgl
   * @param {String} url
   * @param {Function} onFinished
   * @param {Object} options
   * @return {Texture}
   */
  cgp_texture_Texture.load = function (cgp, url, onFinished, settings) {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        createImageBitmap(blob).then((imgBitmap) => {
          const texture = new cgp_texture_Texture(cgp, { name: url })
          texture.initTexture(imgBitmap)
          if (onFinished) onFinished(texture)
          else console.log('Texture.load no onFinished callback')
        })
      })
    })
  } // CONCATENATED MODULE: ./src/core/cgp/index.js

  const cgp_CGP1 = {
    Context: WebGpuContext,
    Shader: cgp_shader_Shader,
    Mesh: cgp_mesh_Mesh,
    Pipeline: Pipeline,
    Texture: cgp_texture_Texture
  }

  window.CGP1 = cgp_CGP1 // CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer.js

  // todo: convert to prototyped...

  /**
   * a framebuffer
   * @external CGL1
   * @namespace Framebuffer
   * @constructor
   * @param {Context} cgl
   * @param {Number} width
   * @param {Number} height
   * @param {Object} [options]
   */
  const Framebuffer = function (_cgl, _w, _h, options) {
    const cgl = _cgl
    this._log = new Logger('Framebuffer')
    this.valid = true

    let depthTextureExt = cgl.gl.DEPTH_TEXTURE
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension('WEBGL_depth_texture')
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension('WEBKIT_WEBGL_depth_texture')
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension('MOZ_WEBGL_depth_texture')

    if (!depthTextureExt) {
      cgl.exitError('NO_DEPTH_TEXTURE', 'no depth texture support')
      // return;
    }

    let width = _w || 512
    let height = _h || 512

    options = options || {
      isFloatingPointTexture: false
    }

    if (!options.hasOwnProperty('clear')) options.clear = true
    if (!options.hasOwnProperty('filter')) options.filter = Texture.FILTER_LINEAR

    const texture = new Texture(cgl, {
      isFloatingPointTexture: options.isFloatingPointTexture,
      filter: options.filter,
      wrap: options.wrap || Texture.CLAMP_TO_EDGE
    })

    let textureDepth = null
    if (depthTextureExt) {
      textureDepth = new Texture(cgl, {
        isDepthTexture: true
      })
    }
    this._options = options

    const frameBuf = cgl.gl.createFramebuffer()
    const depthBuffer = cgl.gl.createRenderbuffer()

    this.getWidth = function () {
      return width
    }
    this.getHeight = function () {
      return height
    }

    /**
     * get native gl framebuffer
     * @function getGlFrameBuffer
     * @memberof Framebuffer
     * @returns {Object} framebuffer
     */
    this.getGlFrameBuffer = function () {
      return frameBuf
    }

    /**
     * get depth renderbuffer
     * @function getDepthRenderBuffer
     * @memberof Framebuffer
     * @returns {Object} renderbuffer
     */
    this.getDepthRenderBuffer = function () {
      return depthBuffer
    }

    /**
     * get color texture
     * @function getTextureColor
     * @memberof Framebuffer
     * @returns {Texture} rgba texture
     */
    this.getTextureColor = function () {
      return texture
    }

    /**
     * get depth texture
     * @function getTextureDepth
     * @memberof Framebuffer
     * @returns {Texture} depth texture
     */
    this.getTextureDepth = function () {
      return textureDepth
    }

    this.setFilter = function (f) {
      texture.filter = f
      texture.setSize(width, height)
    }

    this.setSize = function (w, h) {
      if (w < 2) w = 2
      if (h < 2) h = 2

      width = Math.ceil(w)
      height = Math.ceil(h)

      cgl.profileData.profileFrameBuffercreate++

      cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf)
      cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, depthBuffer)

      texture.setSize(width, height)
      if (textureDepth) textureDepth.setSize(width, height)

      // if(depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width,height);
      if (depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width, height)

      cgl.gl.framebufferTexture2D(cgl.gl.FRAMEBUFFER, cgl.gl.COLOR_ATTACHMENT0, cgl.gl.TEXTURE_2D, texture.tex, 0)

      if (depthTextureExt) {
        cgl.gl.framebufferRenderbuffer(cgl.gl.FRAMEBUFFER, cgl.gl.DEPTH_ATTACHMENT, cgl.gl.RENDERBUFFER, depthBuffer)
        cgl.gl.framebufferTexture2D(
          cgl.gl.FRAMEBUFFER,
          cgl.gl.DEPTH_ATTACHMENT, // safari needs DEPTH_ATTACHMENT NOT DEPTH_ATTACHMENT16
          // cgl.gl.DEPTH_COMPONENT16,
          cgl.gl.TEXTURE_2D,
          textureDepth.tex,
          0
        )
      }

      if (!cgl.gl.isFramebuffer(frameBuf)) throw new Error('Invalid framebuffer')
      const status = cgl.gl.checkFramebufferStatus(cgl.gl.FRAMEBUFFER)

      switch (status) {
        case cgl.gl.FRAMEBUFFER_COMPLETE:
          break
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
          this._log.warn('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...', width, height, texture.tex, depthBuffer)
          this.valid = false
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT')
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
          this._log.warn('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT')
          this.valid = false
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT')
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
          this._log.warn('FRAMEBUFFER_INCOMPLETE_DIMENSIONS')
          this.valid = false
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS')
        case cgl.gl.FRAMEBUFFER_UNSUPPORTED:
          this._log.warn('FRAMEBUFFER_UNSUPPORTED')
          this.valid = false
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED')
        case 0x8cdb:
          this._log.warn('Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.')
          this.valid = false
          break
        default:
          this._log.warn('incomplete framebuffer', status)
          this.valid = false
          throw new Error('Incomplete framebuffer: ' + status)
        // throw("Incomplete framebuffer: " + status);
      }

      cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, null)
      cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, null)
      cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, null)
    }

    this.renderStart = function () {
      cgl.pushModelMatrix()
      cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf)
      cgl.pushGlFrameBuffer(frameBuf)
      cgl.pushFrameBuffer(this)

      cgl.pushPMatrix()
      cgl.gl.viewport(0, 0, width, height)

      if (this._options.clear) {
        cgl.gl.clearColor(0, 0, 0, 0)
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT)
      }
    }

    this.renderEnd = function () {
      cgl.popPMatrix()
      cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, cgl.popGlFrameBuffer())
      cgl.popFrameBuffer()

      cgl.popModelMatrix()
      cgl.resetViewPort()
    }

    this.delete = function () {
      texture.delete()
      this.valid = false
      if (textureDepth) textureDepth.delete()
      cgl.gl.deleteRenderbuffer(depthBuffer)
      cgl.gl.deleteFramebuffer(frameBuf)
    }

    this.dispose = this.delete

    this.setSize(width, height)
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer2.js

  // * see framebuffer1

  const Framebuffer2 = function (cgl, w, h, options) {
    if (cgl.glVersion == 1) return console.log('framebuffer2 used on webgl1')
    this._log = new Logger('cgl_framebuffer2')
    this.Framebuffer2DrawTargetsDefault = null
    this.Framebuffer2BlittingFramebuffer = null
    this.Framebuffer2FinalFramebuffer = null
    this._cgl = cgl

    this._cgl.printError('before framebuffer2 constructor')

    this._width = 0
    this._height = 0
    this.valid = true

    this._depthRenderbuffer = null
    this._frameBuffer = null
    this._textureFrameBuffer = null
    this._colorRenderbuffers = []
    this._drawTargetArray = []
    this._disposed = false

    if (!this.Framebuffer2BlittingFramebuffer) this.Framebuffer2BlittingFramebuffer = cgl.gl.createFramebuffer()
    if (!this.Framebuffer2FinalFramebuffer) this.Framebuffer2FinalFramebuffer = cgl.gl.createFramebuffer()

    if (!this.Framebuffer2DrawTargetsDefault) this.Framebuffer2DrawTargetsDefault = [cgl.gl.COLOR_ATTACHMENT0]

    this._options = options || {
      isFloatingPointTexture: false
    }

    // this._cgl.printError("fb2 before");

    this.name = this._options.name || 'unknown'

    this._cgl.profileData.addHeavyEvent('framebuffer create', this.name)

    if (!this._options.hasOwnProperty('numRenderBuffers')) this._options.numRenderBuffers = 1
    if (!this._options.hasOwnProperty('depth')) this._options.depth = true
    if (!this._options.hasOwnProperty('clear')) this._options.clear = true
    if (!this._options.hasOwnProperty('multisampling')) {
      this._options.multisampling = false
      this._options.multisamplingSamples = 0
    }

    if (this._options.multisamplingSamples) {
      if (this._cgl.glSlowRenderer) this._options.multisamplingSamples = 0
      if (!this._cgl.gl.MAX_SAMPLES) this._options.multisamplingSamples = 0
      else this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples)
    }

    if (!this._options.hasOwnProperty('filter')) this._options.filter = Texture.FILTER_LINEAR
    if (!this._options.hasOwnProperty('wrap')) this._options.wrap = Texture.WRAP_REPEAT

    this._numRenderBuffers = this._options.numRenderBuffers
    this._colorTextures = []

    this.clearColors = []
    for (let i = 0; i < this._numRenderBuffers; i++) this.clearColors.push([0, 0, 0, 1])

    if (!options.pixelFormat) {
      if (options.isFloatingPointTexture) this._options.pixelFormat = Texture.PFORMATSTR_RGBA32F
      else this._options.pixelFormat = Texture.PFORMATSTR_RGBA8UB
    }

    for (let i = 0; i < this._numRenderBuffers; i++) {
      this._colorTextures[i] = new Texture(cgl, {
        name: 'fb2 ' + this.name + ' ' + i,
        isFloatingPointTexture: this._options.isFloatingPointTexture,
        anisotropic: this._options.anisotropic || 0,
        pixelFormat: this._options.pixelFormat,
        filter: this._options.filter,
        wrap: this._options.wrap
      })
    }

    let fil = Texture.FILTER_NEAREST
    if (this._options.shadowMap) fil = Texture.FILTER_LINEAR

    const defaultTexSize = 512

    if (this._options.depth) {
      this._textureDepth = new Texture(cgl, {
        name: 'fb2 depth ' + this.name,
        isDepthTexture: true,
        filter: fil,
        shadowMap: this._options.shadowMap || false,
        width: w || defaultTexSize,
        height: h || defaultTexSize
      })
    }

    if (cgl.aborted) return

    this.setSize(w || defaultTexSize, h || defaultTexSize)

    this._cgl.printError('framebuffer2 constructor')
  }

  Framebuffer2.prototype.getWidth = function () {
    return this._width
  }
  Framebuffer2.prototype.getHeight = function () {
    return this._height
  }

  Framebuffer2.prototype.getGlFrameBuffer = function () {
    return this._frameBuffer
  }

  Framebuffer2.prototype.getDepthRenderBuffer = function () {
    return this._depthRenderbuffer
  }

  Framebuffer2.prototype.getTextureColor = function () {
    return this._colorTextures[0]
  }

  Framebuffer2.prototype.getTextureColorNum = function (i) {
    return this._colorTextures[i]
  }

  Framebuffer2.prototype.getTextureDepth = function () {
    return this._textureDepth
  }

  Framebuffer2.prototype.setFilter = function (f) {
    for (let i = 0; i < this._numRenderBuffers; i++) {
      this._colorTextures[i].filter = f
      this._colorTextures[i].setSize(this._width, this._height)
    }
  }

  Framebuffer2.prototype.delete = Framebuffer2.prototype.dispose = function () {
    this._disposed = true
    let i = 0
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].delete()
    // this._texture.delete();
    if (this._textureDepth) this._textureDepth.delete()
    for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i])
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer)
    this._cgl.gl.deleteFramebuffer(this._frameBuffer)
    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
  }

  Framebuffer2.prototype.setSize = function (w, h) {
    if (this._disposed) return this._log.warn('disposed framebuffer setsize...')
    this._cgl.profileData.addHeavyEvent('framebuffer resize', this.name)

    let i = 0

    this._width = this._cgl.checkTextureSize(w)
    this._height = this._cgl.checkTextureSize(h)

    this._cgl.profileData.profileFrameBuffercreate++

    if (this._frameBuffer) {
      for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i])
      // this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffer);
      this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer)
      this._cgl.gl.deleteFramebuffer(this._frameBuffer)
      this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
    }

    this._frameBuffer = this._cgl.gl.createFramebuffer()
    this._textureFrameBuffer = this._cgl.gl.createFramebuffer()

    const depth = this._options.depth

    for (i = 0; i < this._numRenderBuffers; i++) {
      this._colorTextures[i].setSize(this._width, this._height)
    }

    for (i = 0; i < this._numRenderBuffers; i++) {
      const renderBuffer = this._cgl.gl.createRenderbuffer()

      // color renderbuffer

      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer)
      this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, renderBuffer)

      const info = Texture.setUpGlPixelFormat(this._cgl, this._options.pixelFormat)
      let internFormat = info.glInternalFormat

      // if (this._options.isFloatingPointTexture)
      // {
      if (CGL1.Texture.isPixelFormatHalfFloat(info.pixelFormat)) {
        if (!this._cgl.enableExtension('OES_texture_float_linear')) {
          this._options.filter = Texture.FILTER_NEAREST
          this.setFilter(this._options.filter)
        }
      } else if (CGL1.Texture.isPixelFormatFloat(info.pixelFormat)) {
        if (!this._cgl.enableExtension('OES_texture_float_linear')) {
          console.log('no linear pixelformat,using nearest')
          this._options.filter = Texture.FILTER_NEAREST
          this.setFilter(this._options.filter)
        }
      }
      // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
      // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
      // else if (info.pixelFormat == Texture.PFORMATSTR_RG16F)
      // {
      //     const extcb = this._cgl.enableExtension("EXT_color_buffer_float");

      //     if (!this._cgl.enableExtension("OES_texture_float_linear"))
      //     {
      //         console.log("no linear pixelformat,switching to nearest");
      //         this._options.filter = Texture.FILTER_NEAREST;
      //         this.setFilter(this._options.filter);
      //     }
      // }
      // }

      if (this._options.multisampling && this._options.multisamplingSamples) {
        this._cgl.gl.renderbufferStorageMultisample(
          this._cgl.gl.RENDERBUFFER,
          this._options.multisamplingSamples,
          internFormat,
          this._width,
          this._height
        )
      } else {
        this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, internFormat, this._width, this._height)
      }

      this._cgl.gl.framebufferRenderbuffer(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.COLOR_ATTACHMENT0 + i,
        this._cgl.gl.RENDERBUFFER,
        renderBuffer
      )
      this._colorRenderbuffers[i] = renderBuffer
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer)

    for (i = 0; i < this._numRenderBuffers; i++) {
      this._cgl.gl.framebufferTexture2D(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.COLOR_ATTACHMENT0 + i,
        this._cgl.gl.TEXTURE_2D,
        this._colorTextures[i].tex,
        0
      )
    }

    if (this._options.depth) {
      this._cgl.gl.framebufferTexture2D(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.DEPTH_ATTACHMENT,
        this._cgl.gl.TEXTURE_2D,
        this._textureDepth.tex,
        0
      )
    }

    // depth renderbuffer

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer)

    let depthType = this._cgl.gl.DEPTH_COMPONENT32F

    if (this._cgl.glSlowRenderer) depthType = this._cgl.gl.DEPTH_COMPONENT16
    if (depth) {
      this._textureDepth.setSize(this._width, this._height)
      this._depthRenderbuffer = this._cgl.gl.createRenderbuffer()

      this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)
      if (this._options.isFloatingPointTexture) {
        if (this._options.multisampling)
          this._cgl.gl.renderbufferStorageMultisample(
            this._cgl.gl.RENDERBUFFER,
            this._options.multisamplingSamples,
            depthType,
            this._width,
            this._height
          )
        else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height)
      } else if (this._options.multisampling) {
        this._cgl.gl.renderbufferStorageMultisample(
          this._cgl.gl.RENDERBUFFER,
          this._options.multisamplingSamples,
          depthType,
          this._width,
          this._height
        )
        // this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,depthType, this._width, this._height);
      } else {
        this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height)
      }

      this._cgl.gl.framebufferRenderbuffer(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.DEPTH_ATTACHMENT,
        this._cgl.gl.RENDERBUFFER,
        this._depthRenderbuffer
      )
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    this._drawTargetArray.length = 0
    for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i)

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

    if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) this._log.warn('invalid framebuffer') // throw new Error("Invalid framebuffer");
    const status = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER)

    if (status != this._cgl.gl.FRAMEBUFFER_COMPLETE) {
      this._log.error('framebuffer incomplete: ' + this.name, this)
      console.log('options', this._options)

      switch (status) {
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
          this._log.warn('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...', this)
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT')
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
          this._log.warn('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT')
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT')
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
          this._log.warn('FRAMEBUFFER_INCOMPLETE_DIMENSIONS')
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS')
        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
          this._log.warn('FRAMEBUFFER_UNSUPPORTED')
          throw new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED')
        default:
          this.valid = false
          this._log.warn('incomplete framebuffer', status, this._frameBuffer)
          this._cgl.printError()
          this._cgl.exitError('Framebuffer incomplete...')

          this._frameBuffer = null
          // debugger;
          throw new Error('Incomplete framebuffer: ' + status)

        // throw("Incomplete framebuffer: " + status);
      }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)
    this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null)

    // this._cgl.printError("fb setsize");
  }

  Framebuffer2.prototype.renderStart = function () {
    if (this._disposed) return this._log.warn('disposed framebuffer renderStart...')
    this._cgl.checkFrameStarted('fb2 renderstart')
    this._cgl.pushModelMatrix() // needed ??

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer)
    this._cgl.pushGlFrameBuffer(this._frameBuffer)
    this._cgl.pushFrameBuffer(this)

    this._cgl.pushPMatrix()
    this._cgl.pushViewPort(0, 0, this._width, this._height)

    this._cgl.gl.drawBuffers(this._drawTargetArray)

    if (this._options.clear) {
      this._cgl.gl.clearColor(0, 0, 0, 0)
      this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT)
    }
  }

  Framebuffer2.prototype.clear = function () {
    if (this._numRenderBuffers <= 1) {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer)
      this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer)
    } else this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer)

    this._cgl.gl.drawBuffers(this._drawTargetArray)

    for (let i = 0; i < this._numRenderBuffers; i++) {
      this._cgl.gl.framebufferTexture2D(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.COLOR_ATTACHMENT0 + i,
        this._cgl.gl.TEXTURE_2D,
        this._colorTextures[i].tex,
        0
      )
      this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, this.clearColors[i])
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)
  }

  Framebuffer2.prototype.renderEnd = function () {
    if (this._disposed) return this._log.warn('disposed framebuffer renderEnd...')
    this._cgl.popPMatrix()

    this._cgl.profileData.profileFramebuffer++

    if (this._numRenderBuffers <= 1) {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer)
      this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer)

      // const a = this._cgl.gl.getFramebufferAttachmentParameter(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING);
      // if (a == this._cgl.gl.SRGB)console.log("SRGB", this._cgl.gl.SRGB);
      // else if (a == this._cgl.gl.LINEAR)console.log("LINEAR", this._cgl.gl.LINEAR);

      this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0])
      this._cgl.gl.blitFramebuffer(
        0,
        0,
        this._width,
        this._height,
        0,
        0,
        this._width,
        this._height,
        this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT,
        this._cgl.gl.NEAREST
      )
    } else {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer)
      this._cgl.gl.framebufferRenderbuffer(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.DEPTH_ATTACHMENT,
        this._cgl.gl.RENDERBUFFER,
        this._depthRenderbuffer
      )

      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer)
      this._cgl.gl.framebufferTexture2D(
        this._cgl.gl.FRAMEBUFFER,
        this._cgl.gl.DEPTH_ATTACHMENT,
        this._cgl.gl.TEXTURE_2D,
        this._textureDepth.tex,
        0
      )

      // console.log("fb this._numRenderBuffers", this._numRenderBuffers);
      for (let i = 0; i < this._numRenderBuffers; i++) {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer)
        this._cgl.gl.framebufferRenderbuffer(
          this._cgl.gl.FRAMEBUFFER,
          this._cgl.gl.COLOR_ATTACHMENT0,
          this._cgl.gl.RENDERBUFFER,
          this._colorRenderbuffers[i]
        )

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer)
        this._cgl.gl.framebufferTexture2D(
          this._cgl.gl.FRAMEBUFFER,
          this._cgl.gl.COLOR_ATTACHMENT0,
          this._cgl.gl.TEXTURE_2D,
          this._colorTextures[i].tex,
          0
        )

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)

        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer)
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer)

        // this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, [0.0, 0.0, 0.0, 1.0]);

        let flags = this._cgl.gl.COLOR_BUFFER_BIT
        if (i == 0) flags |= this._cgl.gl.DEPTH_BUFFER_BIT

        this._cgl.gl.blitFramebuffer(
          0,
          0,
          this._width,
          this._height,
          0,
          0,
          this._width,
          this._height,
          flags,
          this._cgl.gl.NEAREST
        )
      }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer())
    this._cgl.popFrameBuffer()

    this._cgl.popModelMatrix()
    // this._cgl.resetViewPort();
    this._cgl.popViewPort()

    if (this._colorTextures[0].filter == Texture.FILTER_MIPMAP) {
      for (let i = 0; i < this._numRenderBuffers; i++) {
        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex)
        this._colorTextures[i].updateMipMap()
        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
      }
    }
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_marker.js

  /// ///////

  const Marker = function (_cgl) {
    // deprecated...
    this.draw = function (cgl, _size, depthTest) {}
  }

  const WirePoint = function (cgl) {
    // deprecated...
    this.render = function (_cgl, _size) {}
  }

  const WireCube = function (cgl) {
    // deprecated...
    this.render = function (_cgl, sizeX, sizeY, sizeZ) {}
  } // CONCATENATED MODULE: ./src/core/cgl/cgl_unicolorshader.js

  class UniColorShader {
    constructor(_cgl) {
      this.shader = new CGL1.Shader(_cgl, 'markermaterial')

      const frag = ''.endl() + 'void main()'.endl() + '{'.endl() + '    outColor = vec4(color.rgb,1.0);'.endl() + '}'

      const vert =
        ''.endl() +
        'IN vec3 vPosition;'.endl() +
        'UNI mat4 projMatrix;'.endl() +
        'UNI mat4 mvMatrix;'.endl() +
        'void main()'.endl() +
        '{'.endl() +
        '   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);'.endl() +
        '}'

      this.shader.setSource(vert, frag)
      this.coloruni = this.shader.addUniformFrag('4f', 'color', [1, 0.777, 1, 1])
    }

    setColor(r, g, b, a) {
      this.coloruni.set(r, g, b, a)
    }
  } // CONCATENATED MODULE: ./src/core/cgl/index.js

  const cgl_CGL1 = {
    Framebuffer: Framebuffer,
    Framebuffer2: Framebuffer2,
    Geometry: Geometry,
    BoundingBox: BoundingBox,
    Marker: Marker,
    WirePoint: WirePoint,
    WireCube: WireCube,
    MatrixStack: MatrixStack,
    Mesh: Mesh,
    MESH: MESH,
    ShaderLibMods: ShaderLibMods,
    Shader: Shader,
    Uniform: Uniform,
    MESHES: MESHES,
    Context: Context,
    Texture: Texture,
    TextureEffect: TextureEffect,
    isWindows: isWindows,
    getWheelSpeed: getWheelSpeed,
    getWheelDelta: getWheelDelta,
    onLoadingAssetsFinished: onLoadingAssetsFinished,
    ProfileData: ProfileData,
    UniColorShader: UniColorShader,
    ...constants_CONSTANTS.BLEND_MODES,
    ...constants_CONSTANTS.SHADER,
    ...constants_CONSTANTS.MATH,
    ...constants_CONSTANTS.BLEND_MODES
  }

  window.CGL1 = cgl_CGL1 // CONCATENATED MODULE: ./src/core/index.js

  window.CABLES1 = window.CABLES1 || {}

  CABLES1.CGL1 = cgl_CGL1
  CABLES1.CG = CG
  CABLES1.CGP1 = cgp_CGP1
  CABLES1.EMBED = EMBED
  CABLES1.Link = Link
  CABLES1.Port = Port
  CABLES1.Op = Op
  CABLES1.Profiler = Profiler
  CABLES1.Patch = core_patch
  CABLES1.Instancing = Instancing
  CABLES1.Timer = Timer
  CABLES1.WEBAUDIO = WEBAUDIO
  CABLES1.Variable = Variable
  CABLES1.LoadingStatus = LoadingStatus
  CABLES1.now = now
  CABLES1.internalNow = internalNow
  CABLES1.BranchStack = BranchStack
  CABLES1.Branch = Branch

  CABLES1 = Object.assign(
    CABLES1,
    base64_namespaceObject,
    utils_namespaceObject,
    anim_namespaceObject,
    CONSTANTS.PORT,
    CONSTANTS.PACO,
    CONSTANTS.ANIM,
    CONSTANTS.OP
  )

  /* harmony default export */ const core = CABLES1

  if (
    !(function () {
      return !this
    })()
  )
    console.warn('not in strict mode: index core') // eslint-disable-line

  CABLES1 = __webpack_exports__['default']
  /******/
})()

var CABLES1 = CABLES1 || {}
CABLES1.build = {
  timestamp: 1715927482175,
  created: '2024-05-17T06:31:22.175Z',
  git: {
    branch: 'master',
    commit: '83d9847c52906e47691c89c7ec564876e8749a3b',
    date: '1715927217',
    message: 'subpatch ops wrong'
  }
}
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.1.0

Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!(function (t, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? n(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], n)
      : n(((t = t || self).glMatrix = {}))
})(this, function (t) {
  'use strict'
  var n = 1e-6,
    a = 'undefined' != typeof Float32Array ? Float32Array : Array,
    r = Math.random
  var u = Math.PI / 180
  Math.hypot ||
    (Math.hypot = function () {
      for (var t = 0, n = arguments.length; n--; ) t += arguments[n] * arguments[n]
      return Math.sqrt(t)
    })
  var e = Object.freeze({
    EPSILON: n,
    get ARRAY_TYPE() {
      return a
    },
    RANDOM: r,
    setMatrixArrayType: function (t) {
      a = t
    },
    toRadian: function (t) {
      return t * u
    },
    equals: function (t, a) {
      return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a))
    }
  })
  function o(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[0],
      c = a[1],
      h = a[2],
      s = a[3]
    return (t[0] = r * i + e * c), (t[1] = u * i + o * c), (t[2] = r * h + e * s), (t[3] = u * h + o * s), t
  }
  function i(t, n, a) {
    return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), (t[3] = n[3] - a[3]), t
  }
  var c = o,
    h = i,
    s = Object.freeze({
      create: function () {
        var t = new a(4)
        return a != Float32Array && ((t[1] = 0), (t[2] = 0)), (t[0] = 1), (t[3] = 1), t
      },
      clone: function (t) {
        var n = new a(4)
        return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n
      },
      copy: function (t, n) {
        return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t
      },
      identity: function (t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t
      },
      fromValues: function (t, n, r, u) {
        var e = new a(4)
        return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e
      },
      set: function (t, n, a, r, u) {
        return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t
      },
      transpose: function (t, n) {
        if (t === n) {
          var a = n[1]
          ;(t[1] = n[2]), (t[2] = a)
        } else (t[0] = n[0]), (t[1] = n[2]), (t[2] = n[1]), (t[3] = n[3])
        return t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * e - u * r
        return o ? ((o = 1 / o), (t[0] = e * o), (t[1] = -r * o), (t[2] = -u * o), (t[3] = a * o), t) : null
      },
      adjoint: function (t, n) {
        var a = n[0]
        return (t[0] = n[3]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = a), t
      },
      determinant: function (t) {
        return t[0] * t[3] - t[2] * t[1]
      },
      multiply: o,
      rotate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = Math.sin(a),
          c = Math.cos(a)
        return (t[0] = r * c + e * i), (t[1] = u * c + o * i), (t[2] = r * -i + e * c), (t[3] = u * -i + o * c), t
      },
      scale: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = a[0],
          c = a[1]
        return (t[0] = r * i), (t[1] = u * i), (t[2] = e * c), (t[3] = o * c), t
      },
      fromRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n)
        return (t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), t
      },
      fromScaling: function (t, n) {
        return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), t
      },
      str: function (t) {
        return 'mat2(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3])
      },
      LDU: function (t, n, a, r) {
        return (t[2] = r[2] / r[0]), (a[0] = r[0]), (a[1] = r[1]), (a[3] = r[3] - t[2] * a[1]), [t, n, a]
      },
      add: function (t, n, a) {
        return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), (t[3] = n[3] + a[3]), t
      },
      subtract: i,
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = a[0],
          c = a[1],
          h = a[2],
          s = a[3]
        return (
          Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) &&
          Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) &&
          Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) &&
          Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
        )
      },
      multiplyScalar: function (t, n, a) {
        return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), (t[3] = n[3] * a), t
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), (t[2] = n[2] + a[2] * r), (t[3] = n[3] + a[3] * r), t
      },
      mul: c,
      sub: h
    })
  function M(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      c = n[5],
      h = a[0],
      s = a[1],
      M = a[2],
      f = a[3],
      l = a[4],
      v = a[5]
    return (
      (t[0] = r * h + e * s),
      (t[1] = u * h + o * s),
      (t[2] = r * M + e * f),
      (t[3] = u * M + o * f),
      (t[4] = r * l + e * v + i),
      (t[5] = u * l + o * v + c),
      t
    )
  }
  function f(t, n, a) {
    return (
      (t[0] = n[0] - a[0]),
      (t[1] = n[1] - a[1]),
      (t[2] = n[2] - a[2]),
      (t[3] = n[3] - a[3]),
      (t[4] = n[4] - a[4]),
      (t[5] = n[5] - a[5]),
      t
    )
  }
  var l = M,
    v = f,
    b = Object.freeze({
      create: function () {
        var t = new a(6)
        return a != Float32Array && ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)), (t[0] = 1), (t[3] = 1), t
      },
      clone: function (t) {
        var n = new a(6)
        return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), (n[4] = t[4]), (n[5] = t[5]), n
      },
      copy: function (t, n) {
        return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = n[4]), (t[5] = n[5]), t
      },
      identity: function (t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t
      },
      fromValues: function (t, n, r, u, e, o) {
        var i = new a(6)
        return (i[0] = t), (i[1] = n), (i[2] = r), (i[3] = u), (i[4] = e), (i[5] = o), i
      },
      set: function (t, n, a, r, u, e, o) {
        return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), (t[4] = e), (t[5] = o), t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = a * e - r * u
        return c
          ? ((c = 1 / c),
            (t[0] = e * c),
            (t[1] = -r * c),
            (t[2] = -u * c),
            (t[3] = a * c),
            (t[4] = (u * i - e * o) * c),
            (t[5] = (r * o - a * i) * c),
            t)
          : null
      },
      determinant: function (t) {
        return t[0] * t[3] - t[1] * t[2]
      },
      multiply: M,
      rotate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = Math.sin(a),
          s = Math.cos(a)
        return (
          (t[0] = r * s + e * h),
          (t[1] = u * s + o * h),
          (t[2] = r * -h + e * s),
          (t[3] = u * -h + o * s),
          (t[4] = i),
          (t[5] = c),
          t
        )
      },
      scale: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = a[0],
          s = a[1]
        return (t[0] = r * h), (t[1] = u * h), (t[2] = e * s), (t[3] = o * s), (t[4] = i), (t[5] = c), t
      },
      translate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = a[0],
          s = a[1]
        return (t[0] = r), (t[1] = u), (t[2] = e), (t[3] = o), (t[4] = r * h + e * s + i), (t[5] = u * h + o * s + c), t
      },
      fromRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n)
        return (t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), (t[4] = 0), (t[5] = 0), t
      },
      fromScaling: function (t, n) {
        return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), (t[4] = 0), (t[5] = 0), t
      },
      fromTranslation: function (t, n) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = n[0]), (t[5] = n[1]), t
      },
      str: function (t) {
        return 'mat2d(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ')'
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
      },
      add: function (t, n, a) {
        return (
          (t[0] = n[0] + a[0]),
          (t[1] = n[1] + a[1]),
          (t[2] = n[2] + a[2]),
          (t[3] = n[3] + a[3]),
          (t[4] = n[4] + a[4]),
          (t[5] = n[5] + a[5]),
          t
        )
      },
      subtract: f,
      multiplyScalar: function (t, n, a) {
        return (
          (t[0] = n[0] * a),
          (t[1] = n[1] * a),
          (t[2] = n[2] * a),
          (t[3] = n[3] * a),
          (t[4] = n[4] * a),
          (t[5] = n[5] * a),
          t
        )
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return (
          (t[0] = n[0] + a[0] * r),
          (t[1] = n[1] + a[1] * r),
          (t[2] = n[2] + a[2] * r),
          (t[3] = n[3] + a[3] * r),
          (t[4] = n[4] + a[4] * r),
          (t[5] = n[5] + a[5] * r),
          t
        )
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = a[0],
          s = a[1],
          M = a[2],
          f = a[3],
          l = a[4],
          v = a[5]
        return (
          Math.abs(r - h) <= n * Math.max(1, Math.abs(r), Math.abs(h)) &&
          Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) &&
          Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) &&
          Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) &&
          Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) &&
          Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v))
        )
      },
      mul: l,
      sub: v
    })
  function m() {
    var t = new a(9)
    return (
      a != Float32Array && ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
      (t[0] = 1),
      (t[4] = 1),
      (t[8] = 1),
      t
    )
  }
  function d(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      c = n[5],
      h = n[6],
      s = n[7],
      M = n[8],
      f = a[0],
      l = a[1],
      v = a[2],
      b = a[3],
      m = a[4],
      d = a[5],
      x = a[6],
      p = a[7],
      y = a[8]
    return (
      (t[0] = f * r + l * o + v * h),
      (t[1] = f * u + l * i + v * s),
      (t[2] = f * e + l * c + v * M),
      (t[3] = b * r + m * o + d * h),
      (t[4] = b * u + m * i + d * s),
      (t[5] = b * e + m * c + d * M),
      (t[6] = x * r + p * o + y * h),
      (t[7] = x * u + p * i + y * s),
      (t[8] = x * e + p * c + y * M),
      t
    )
  }
  function x(t, n, a) {
    return (
      (t[0] = n[0] - a[0]),
      (t[1] = n[1] - a[1]),
      (t[2] = n[2] - a[2]),
      (t[3] = n[3] - a[3]),
      (t[4] = n[4] - a[4]),
      (t[5] = n[5] - a[5]),
      (t[6] = n[6] - a[6]),
      (t[7] = n[7] - a[7]),
      (t[8] = n[8] - a[8]),
      t
    )
  }
  var p = d,
    y = x,
    q = Object.freeze({
      create: m,
      fromMat4: function (t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[4]),
          (t[4] = n[5]),
          (t[5] = n[6]),
          (t[6] = n[8]),
          (t[7] = n[9]),
          (t[8] = n[10]),
          t
        )
      },
      clone: function (t) {
        var n = new a(9)
        return (
          (n[0] = t[0]),
          (n[1] = t[1]),
          (n[2] = t[2]),
          (n[3] = t[3]),
          (n[4] = t[4]),
          (n[5] = t[5]),
          (n[6] = t[6]),
          (n[7] = t[7]),
          (n[8] = t[8]),
          n
        )
      },
      copy: function (t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[4] = n[4]),
          (t[5] = n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          (t[8] = n[8]),
          t
        )
      },
      fromValues: function (t, n, r, u, e, o, i, c, h) {
        var s = new a(9)
        return (
          (s[0] = t), (s[1] = n), (s[2] = r), (s[3] = u), (s[4] = e), (s[5] = o), (s[6] = i), (s[7] = c), (s[8] = h), s
        )
      },
      set: function (t, n, a, r, u, e, o, i, c, h) {
        return (
          (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), (t[4] = e), (t[5] = o), (t[6] = i), (t[7] = c), (t[8] = h), t
        )
      },
      identity: function (t) {
        return (
          (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t
        )
      },
      transpose: function (t, n) {
        if (t === n) {
          var a = n[1],
            r = n[2],
            u = n[5]
          ;(t[1] = n[3]), (t[2] = n[6]), (t[3] = a), (t[5] = n[7]), (t[6] = r), (t[7] = u)
        } else
          (t[0] = n[0]),
            (t[1] = n[3]),
            (t[2] = n[6]),
            (t[3] = n[1]),
            (t[4] = n[4]),
            (t[5] = n[7]),
            (t[6] = n[2]),
            (t[7] = n[5]),
            (t[8] = n[8])
        return t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = s * o - i * h,
          f = -s * e + i * c,
          l = h * e - o * c,
          v = a * M + r * f + u * l
        return v
          ? ((v = 1 / v),
            (t[0] = M * v),
            (t[1] = (-s * r + u * h) * v),
            (t[2] = (i * r - u * o) * v),
            (t[3] = f * v),
            (t[4] = (s * a - u * c) * v),
            (t[5] = (-i * a + u * e) * v),
            (t[6] = l * v),
            (t[7] = (-h * a + r * c) * v),
            (t[8] = (o * a - r * e) * v),
            t)
          : null
      },
      adjoint: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8]
        return (
          (t[0] = o * s - i * h),
          (t[1] = u * h - r * s),
          (t[2] = r * i - u * o),
          (t[3] = i * c - e * s),
          (t[4] = a * s - u * c),
          (t[5] = u * e - a * i),
          (t[6] = e * h - o * c),
          (t[7] = r * c - a * h),
          (t[8] = a * o - r * e),
          t
        )
      },
      determinant: function (t) {
        var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          h = t[8]
        return n * (h * e - o * c) + a * (-h * u + o * i) + r * (c * u - e * i)
      },
      multiply: d,
      translate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = n[8],
          f = a[0],
          l = a[1]
        return (
          (t[0] = r),
          (t[1] = u),
          (t[2] = e),
          (t[3] = o),
          (t[4] = i),
          (t[5] = c),
          (t[6] = f * r + l * o + h),
          (t[7] = f * u + l * i + s),
          (t[8] = f * e + l * c + M),
          t
        )
      },
      rotate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = n[8],
          f = Math.sin(a),
          l = Math.cos(a)
        return (
          (t[0] = l * r + f * o),
          (t[1] = l * u + f * i),
          (t[2] = l * e + f * c),
          (t[3] = l * o - f * r),
          (t[4] = l * i - f * u),
          (t[5] = l * c - f * e),
          (t[6] = h),
          (t[7] = s),
          (t[8] = M),
          t
        )
      },
      scale: function (t, n, a) {
        var r = a[0],
          u = a[1]
        return (
          (t[0] = r * n[0]),
          (t[1] = r * n[1]),
          (t[2] = r * n[2]),
          (t[3] = u * n[3]),
          (t[4] = u * n[4]),
          (t[5] = u * n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          (t[8] = n[8]),
          t
        )
      },
      fromTranslation: function (t, n) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 1),
          (t[5] = 0),
          (t[6] = n[0]),
          (t[7] = n[1]),
          (t[8] = 1),
          t
        )
      },
      fromRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n)
        return (
          (t[0] = r), (t[1] = a), (t[2] = 0), (t[3] = -a), (t[4] = r), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), t
        )
      },
      fromScaling: function (t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = n[1]),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          t
        )
      },
      fromMat2d: function (t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = 0),
          (t[3] = n[2]),
          (t[4] = n[3]),
          (t[5] = 0),
          (t[6] = n[4]),
          (t[7] = n[5]),
          (t[8] = 1),
          t
        )
      },
      fromQuat: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          c = u + u,
          h = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * c,
          b = e * o,
          m = e * i,
          d = e * c
        return (
          (t[0] = 1 - M - v),
          (t[3] = s - d),
          (t[6] = f + m),
          (t[1] = s + d),
          (t[4] = 1 - h - v),
          (t[7] = l - b),
          (t[2] = f - m),
          (t[5] = l + b),
          (t[8] = 1 - h - M),
          t
        )
      },
      normalFromMat4: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * c - u * o,
          y = a * h - e * o,
          q = r * c - u * i,
          g = r * h - e * i,
          A = u * h - e * c,
          w = s * b - M * v,
          R = s * m - f * v,
          z = s * d - l * v,
          P = M * m - f * b,
          j = M * d - l * b,
          I = f * d - l * m,
          S = x * I - p * j + y * P + q * z - g * R + A * w
        return S
          ? ((S = 1 / S),
            (t[0] = (i * I - c * j + h * P) * S),
            (t[1] = (c * z - o * I - h * R) * S),
            (t[2] = (o * j - i * z + h * w) * S),
            (t[3] = (u * j - r * I - e * P) * S),
            (t[4] = (a * I - u * z + e * R) * S),
            (t[5] = (r * z - a * j - e * w) * S),
            (t[6] = (b * A - m * g + d * q) * S),
            (t[7] = (m * y - v * A - d * p) * S),
            (t[8] = (v * g - b * y + d * x) * S),
            t)
          : null
      },
      projection: function (t, n, a) {
        return (
          (t[0] = 2 / n),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = -2 / a),
          (t[5] = 0),
          (t[6] = -1),
          (t[7] = 1),
          (t[8] = 1),
          t
        )
      },
      str: function (t) {
        return (
          'mat3(' +
          t[0] +
          ', ' +
          t[1] +
          ', ' +
          t[2] +
          ', ' +
          t[3] +
          ', ' +
          t[4] +
          ', ' +
          t[5] +
          ', ' +
          t[6] +
          ', ' +
          t[7] +
          ', ' +
          t[8] +
          ')'
        )
      },
      frob: function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
      },
      add: function (t, n, a) {
        return (
          (t[0] = n[0] + a[0]),
          (t[1] = n[1] + a[1]),
          (t[2] = n[2] + a[2]),
          (t[3] = n[3] + a[3]),
          (t[4] = n[4] + a[4]),
          (t[5] = n[5] + a[5]),
          (t[6] = n[6] + a[6]),
          (t[7] = n[7] + a[7]),
          (t[8] = n[8] + a[8]),
          t
        )
      },
      subtract: x,
      multiplyScalar: function (t, n, a) {
        return (
          (t[0] = n[0] * a),
          (t[1] = n[1] * a),
          (t[2] = n[2] * a),
          (t[3] = n[3] * a),
          (t[4] = n[4] * a),
          (t[5] = n[5] * a),
          (t[6] = n[6] * a),
          (t[7] = n[7] * a),
          (t[8] = n[8] * a),
          t
        )
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return (
          (t[0] = n[0] + a[0] * r),
          (t[1] = n[1] + a[1] * r),
          (t[2] = n[2] + a[2] * r),
          (t[3] = n[3] + a[3] * r),
          (t[4] = n[4] + a[4] * r),
          (t[5] = n[5] + a[5] * r),
          (t[6] = n[6] + a[6] * r),
          (t[7] = n[7] + a[7] * r),
          (t[8] = n[8] + a[8] * r),
          t
        )
      },
      exactEquals: function (t, n) {
        return (
          t[0] === n[0] &&
          t[1] === n[1] &&
          t[2] === n[2] &&
          t[3] === n[3] &&
          t[4] === n[4] &&
          t[5] === n[5] &&
          t[6] === n[6] &&
          t[7] === n[7] &&
          t[8] === n[8]
        )
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = t[8],
          f = a[0],
          l = a[1],
          v = a[2],
          b = a[3],
          m = a[4],
          d = a[5],
          x = a[6],
          p = a[7],
          y = a[8]
        return (
          Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) &&
          Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) &&
          Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) &&
          Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) &&
          Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) &&
          Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) &&
          Math.abs(h - x) <= n * Math.max(1, Math.abs(h), Math.abs(x)) &&
          Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) &&
          Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
        )
      },
      mul: p,
      sub: y
    })
  function g(t) {
    return (
      (t[0] = 1),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = 1),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = 1),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    )
  }
  function A(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = n[4],
      c = n[5],
      h = n[6],
      s = n[7],
      M = n[8],
      f = n[9],
      l = n[10],
      v = n[11],
      b = n[12],
      m = n[13],
      d = n[14],
      x = n[15],
      p = a[0],
      y = a[1],
      q = a[2],
      g = a[3]
    return (
      (t[0] = p * r + y * i + q * M + g * b),
      (t[1] = p * u + y * c + q * f + g * m),
      (t[2] = p * e + y * h + q * l + g * d),
      (t[3] = p * o + y * s + q * v + g * x),
      (p = a[4]),
      (y = a[5]),
      (q = a[6]),
      (g = a[7]),
      (t[4] = p * r + y * i + q * M + g * b),
      (t[5] = p * u + y * c + q * f + g * m),
      (t[6] = p * e + y * h + q * l + g * d),
      (t[7] = p * o + y * s + q * v + g * x),
      (p = a[8]),
      (y = a[9]),
      (q = a[10]),
      (g = a[11]),
      (t[8] = p * r + y * i + q * M + g * b),
      (t[9] = p * u + y * c + q * f + g * m),
      (t[10] = p * e + y * h + q * l + g * d),
      (t[11] = p * o + y * s + q * v + g * x),
      (p = a[12]),
      (y = a[13]),
      (q = a[14]),
      (g = a[15]),
      (t[12] = p * r + y * i + q * M + g * b),
      (t[13] = p * u + y * c + q * f + g * m),
      (t[14] = p * e + y * h + q * l + g * d),
      (t[15] = p * o + y * s + q * v + g * x),
      t
    )
  }
  function w(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = r + r,
      c = u + u,
      h = e + e,
      s = r * i,
      M = r * c,
      f = r * h,
      l = u * c,
      v = u * h,
      b = e * h,
      m = o * i,
      d = o * c,
      x = o * h
    return (
      (t[0] = 1 - (l + b)),
      (t[1] = M + x),
      (t[2] = f - d),
      (t[3] = 0),
      (t[4] = M - x),
      (t[5] = 1 - (s + b)),
      (t[6] = v + m),
      (t[7] = 0),
      (t[8] = f + d),
      (t[9] = v - m),
      (t[10] = 1 - (s + l)),
      (t[11] = 0),
      (t[12] = a[0]),
      (t[13] = a[1]),
      (t[14] = a[2]),
      (t[15] = 1),
      t
    )
  }
  function R(t, n) {
    return (t[0] = n[12]), (t[1] = n[13]), (t[2] = n[14]), t
  }
  function z(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[4],
      o = n[5],
      i = n[6],
      c = n[8],
      h = n[9],
      s = n[10]
    return (t[0] = Math.hypot(a, r, u)), (t[1] = Math.hypot(e, o, i)), (t[2] = Math.hypot(c, h, s)), t
  }
  function P(t, n) {
    var r = new a(3)
    z(r, n)
    var u = 1 / r[0],
      e = 1 / r[1],
      o = 1 / r[2],
      i = n[0] * u,
      c = n[1] * e,
      h = n[2] * o,
      s = n[4] * u,
      M = n[5] * e,
      f = n[6] * o,
      l = n[8] * u,
      v = n[9] * e,
      b = n[10] * o,
      m = i + M + b,
      d = 0
    return (
      m > 0
        ? ((d = 2 * Math.sqrt(m + 1)),
          (t[3] = 0.25 * d),
          (t[0] = (f - v) / d),
          (t[1] = (l - h) / d),
          (t[2] = (c - s) / d))
        : i > M && i > b
          ? ((d = 2 * Math.sqrt(1 + i - M - b)),
            (t[3] = (f - v) / d),
            (t[0] = 0.25 * d),
            (t[1] = (c + s) / d),
            (t[2] = (l + h) / d))
          : M > b
            ? ((d = 2 * Math.sqrt(1 + M - i - b)),
              (t[3] = (l - h) / d),
              (t[0] = (c + s) / d),
              (t[1] = 0.25 * d),
              (t[2] = (f + v) / d))
            : ((d = 2 * Math.sqrt(1 + b - i - M)),
              (t[3] = (c - s) / d),
              (t[0] = (l + h) / d),
              (t[1] = (f + v) / d),
              (t[2] = 0.25 * d)),
      t
    )
  }
  function j(t, n, a) {
    return (
      (t[0] = n[0] - a[0]),
      (t[1] = n[1] - a[1]),
      (t[2] = n[2] - a[2]),
      (t[3] = n[3] - a[3]),
      (t[4] = n[4] - a[4]),
      (t[5] = n[5] - a[5]),
      (t[6] = n[6] - a[6]),
      (t[7] = n[7] - a[7]),
      (t[8] = n[8] - a[8]),
      (t[9] = n[9] - a[9]),
      (t[10] = n[10] - a[10]),
      (t[11] = n[11] - a[11]),
      (t[12] = n[12] - a[12]),
      (t[13] = n[13] - a[13]),
      (t[14] = n[14] - a[14]),
      (t[15] = n[15] - a[15]),
      t
    )
  }
  var I = A,
    S = j,
    E = Object.freeze({
      create: function () {
        var t = new a(16)
        return (
          a != Float32Array &&
            ((t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0)),
          (t[0] = 1),
          (t[5] = 1),
          (t[10] = 1),
          (t[15] = 1),
          t
        )
      },
      clone: function (t) {
        var n = new a(16)
        return (
          (n[0] = t[0]),
          (n[1] = t[1]),
          (n[2] = t[2]),
          (n[3] = t[3]),
          (n[4] = t[4]),
          (n[5] = t[5]),
          (n[6] = t[6]),
          (n[7] = t[7]),
          (n[8] = t[8]),
          (n[9] = t[9]),
          (n[10] = t[10]),
          (n[11] = t[11]),
          (n[12] = t[12]),
          (n[13] = t[13]),
          (n[14] = t[14]),
          (n[15] = t[15]),
          n
        )
      },
      copy: function (t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[4] = n[4]),
          (t[5] = n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          (t[8] = n[8]),
          (t[9] = n[9]),
          (t[10] = n[10]),
          (t[11] = n[11]),
          (t[12] = n[12]),
          (t[13] = n[13]),
          (t[14] = n[14]),
          (t[15] = n[15]),
          t
        )
      },
      fromValues: function (t, n, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
        var d = new a(16)
        return (
          (d[0] = t),
          (d[1] = n),
          (d[2] = r),
          (d[3] = u),
          (d[4] = e),
          (d[5] = o),
          (d[6] = i),
          (d[7] = c),
          (d[8] = h),
          (d[9] = s),
          (d[10] = M),
          (d[11] = f),
          (d[12] = l),
          (d[13] = v),
          (d[14] = b),
          (d[15] = m),
          d
        )
      },
      set: function (t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
        return (
          (t[0] = n),
          (t[1] = a),
          (t[2] = r),
          (t[3] = u),
          (t[4] = e),
          (t[5] = o),
          (t[6] = i),
          (t[7] = c),
          (t[8] = h),
          (t[9] = s),
          (t[10] = M),
          (t[11] = f),
          (t[12] = l),
          (t[13] = v),
          (t[14] = b),
          (t[15] = m),
          t
        )
      },
      identity: g,
      transpose: function (t, n) {
        if (t === n) {
          var a = n[1],
            r = n[2],
            u = n[3],
            e = n[6],
            o = n[7],
            i = n[11]
          ;(t[1] = n[4]),
            (t[2] = n[8]),
            (t[3] = n[12]),
            (t[4] = a),
            (t[6] = n[9]),
            (t[7] = n[13]),
            (t[8] = r),
            (t[9] = e),
            (t[11] = n[14]),
            (t[12] = u),
            (t[13] = o),
            (t[14] = i)
        } else
          (t[0] = n[0]),
            (t[1] = n[4]),
            (t[2] = n[8]),
            (t[3] = n[12]),
            (t[4] = n[1]),
            (t[5] = n[5]),
            (t[6] = n[9]),
            (t[7] = n[13]),
            (t[8] = n[2]),
            (t[9] = n[6]),
            (t[10] = n[10]),
            (t[11] = n[14]),
            (t[12] = n[3]),
            (t[13] = n[7]),
            (t[14] = n[11]),
            (t[15] = n[15])
        return t
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * c - u * o,
          y = a * h - e * o,
          q = r * c - u * i,
          g = r * h - e * i,
          A = u * h - e * c,
          w = s * b - M * v,
          R = s * m - f * v,
          z = s * d - l * v,
          P = M * m - f * b,
          j = M * d - l * b,
          I = f * d - l * m,
          S = x * I - p * j + y * P + q * z - g * R + A * w
        return S
          ? ((S = 1 / S),
            (t[0] = (i * I - c * j + h * P) * S),
            (t[1] = (u * j - r * I - e * P) * S),
            (t[2] = (b * A - m * g + d * q) * S),
            (t[3] = (f * g - M * A - l * q) * S),
            (t[4] = (c * z - o * I - h * R) * S),
            (t[5] = (a * I - u * z + e * R) * S),
            (t[6] = (m * y - v * A - d * p) * S),
            (t[7] = (s * A - f * y + l * p) * S),
            (t[8] = (o * j - i * z + h * w) * S),
            (t[9] = (r * z - a * j - e * w) * S),
            (t[10] = (v * g - b * y + d * x) * S),
            (t[11] = (M * y - s * g - l * x) * S),
            (t[12] = (i * R - o * P - c * w) * S),
            (t[13] = (a * P - r * R + u * w) * S),
            (t[14] = (b * p - v * q - m * x) * S),
            (t[15] = (s * q - M * p + f * x) * S),
            t)
          : null
      },
      adjoint: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15]
        return (
          (t[0] = i * (f * d - l * m) - M * (c * d - h * m) + b * (c * l - h * f)),
          (t[1] = -(r * (f * d - l * m) - M * (u * d - e * m) + b * (u * l - e * f))),
          (t[2] = r * (c * d - h * m) - i * (u * d - e * m) + b * (u * h - e * c)),
          (t[3] = -(r * (c * l - h * f) - i * (u * l - e * f) + M * (u * h - e * c))),
          (t[4] = -(o * (f * d - l * m) - s * (c * d - h * m) + v * (c * l - h * f))),
          (t[5] = a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f)),
          (t[6] = -(a * (c * d - h * m) - o * (u * d - e * m) + v * (u * h - e * c))),
          (t[7] = a * (c * l - h * f) - o * (u * l - e * f) + s * (u * h - e * c)),
          (t[8] = o * (M * d - l * b) - s * (i * d - h * b) + v * (i * l - h * M)),
          (t[9] = -(a * (M * d - l * b) - s * (r * d - e * b) + v * (r * l - e * M))),
          (t[10] = a * (i * d - h * b) - o * (r * d - e * b) + v * (r * h - e * i)),
          (t[11] = -(a * (i * l - h * M) - o * (r * l - e * M) + s * (r * h - e * i))),
          (t[12] = -(o * (M * m - f * b) - s * (i * m - c * b) + v * (i * f - c * M))),
          (t[13] = a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M)),
          (t[14] = -(a * (i * m - c * b) - o * (r * m - u * b) + v * (r * c - u * i))),
          (t[15] = a * (i * f - c * M) - o * (r * f - u * M) + s * (r * c - u * i)),
          t
        )
      },
      determinant: function (t) {
        var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          h = t[8],
          s = t[9],
          M = t[10],
          f = t[11],
          l = t[12],
          v = t[13],
          b = t[14],
          m = t[15]
        return (
          (n * o - a * e) * (M * m - f * b) -
          (n * i - r * e) * (s * m - f * v) +
          (n * c - u * e) * (s * b - M * v) +
          (a * i - r * o) * (h * m - f * l) -
          (a * c - u * o) * (h * b - M * l) +
          (r * c - u * i) * (h * v - s * l)
        )
      },
      multiply: A,
      translate: function (t, n, a) {
        var r,
          u,
          e,
          o,
          i,
          c,
          h,
          s,
          M,
          f,
          l,
          v,
          b = a[0],
          m = a[1],
          d = a[2]
        return (
          n === t
            ? ((t[12] = n[0] * b + n[4] * m + n[8] * d + n[12]),
              (t[13] = n[1] * b + n[5] * m + n[9] * d + n[13]),
              (t[14] = n[2] * b + n[6] * m + n[10] * d + n[14]),
              (t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]))
            : ((r = n[0]),
              (u = n[1]),
              (e = n[2]),
              (o = n[3]),
              (i = n[4]),
              (c = n[5]),
              (h = n[6]),
              (s = n[7]),
              (M = n[8]),
              (f = n[9]),
              (l = n[10]),
              (v = n[11]),
              (t[0] = r),
              (t[1] = u),
              (t[2] = e),
              (t[3] = o),
              (t[4] = i),
              (t[5] = c),
              (t[6] = h),
              (t[7] = s),
              (t[8] = M),
              (t[9] = f),
              (t[10] = l),
              (t[11] = v),
              (t[12] = r * b + i * m + M * d + n[12]),
              (t[13] = u * b + c * m + f * d + n[13]),
              (t[14] = e * b + h * m + l * d + n[14]),
              (t[15] = o * b + s * m + v * d + n[15])),
          t
        )
      },
      scale: function (t, n, a) {
        var r = a[0],
          u = a[1],
          e = a[2]
        return (
          (t[0] = n[0] * r),
          (t[1] = n[1] * r),
          (t[2] = n[2] * r),
          (t[3] = n[3] * r),
          (t[4] = n[4] * u),
          (t[5] = n[5] * u),
          (t[6] = n[6] * u),
          (t[7] = n[7] * u),
          (t[8] = n[8] * e),
          (t[9] = n[9] * e),
          (t[10] = n[10] * e),
          (t[11] = n[11] * e),
          (t[12] = n[12]),
          (t[13] = n[13]),
          (t[14] = n[14]),
          (t[15] = n[15]),
          t
        )
      },
      rotate: function (t, a, r, u) {
        var e,
          o,
          i,
          c,
          h,
          s,
          M,
          f,
          l,
          v,
          b,
          m,
          d,
          x,
          p,
          y,
          q,
          g,
          A,
          w,
          R,
          z,
          P,
          j,
          I = u[0],
          S = u[1],
          E = u[2],
          O = Math.hypot(I, S, E)
        return O < n
          ? null
          : ((I *= O = 1 / O),
            (S *= O),
            (E *= O),
            (e = Math.sin(r)),
            (i = 1 - (o = Math.cos(r))),
            (c = a[0]),
            (h = a[1]),
            (s = a[2]),
            (M = a[3]),
            (f = a[4]),
            (l = a[5]),
            (v = a[6]),
            (b = a[7]),
            (m = a[8]),
            (d = a[9]),
            (x = a[10]),
            (p = a[11]),
            (y = I * I * i + o),
            (q = S * I * i + E * e),
            (g = E * I * i - S * e),
            (A = I * S * i - E * e),
            (w = S * S * i + o),
            (R = E * S * i + I * e),
            (z = I * E * i + S * e),
            (P = S * E * i - I * e),
            (j = E * E * i + o),
            (t[0] = c * y + f * q + m * g),
            (t[1] = h * y + l * q + d * g),
            (t[2] = s * y + v * q + x * g),
            (t[3] = M * y + b * q + p * g),
            (t[4] = c * A + f * w + m * R),
            (t[5] = h * A + l * w + d * R),
            (t[6] = s * A + v * w + x * R),
            (t[7] = M * A + b * w + p * R),
            (t[8] = c * z + f * P + m * j),
            (t[9] = h * z + l * P + d * j),
            (t[10] = s * z + v * P + x * j),
            (t[11] = M * z + b * P + p * j),
            a !== t && ((t[12] = a[12]), (t[13] = a[13]), (t[14] = a[14]), (t[15] = a[15])),
            t)
      },
      rotateX: function (t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[4],
          o = n[5],
          i = n[6],
          c = n[7],
          h = n[8],
          s = n[9],
          M = n[10],
          f = n[11]
        return (
          n !== t &&
            ((t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15])),
          (t[4] = e * u + h * r),
          (t[5] = o * u + s * r),
          (t[6] = i * u + M * r),
          (t[7] = c * u + f * r),
          (t[8] = h * u - e * r),
          (t[9] = s * u - o * r),
          (t[10] = M * u - i * r),
          (t[11] = f * u - c * r),
          t
        )
      },
      rotateY: function (t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = n[8],
          s = n[9],
          M = n[10],
          f = n[11]
        return (
          n !== t &&
            ((t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15])),
          (t[0] = e * u - h * r),
          (t[1] = o * u - s * r),
          (t[2] = i * u - M * r),
          (t[3] = c * u - f * r),
          (t[8] = e * r + h * u),
          (t[9] = o * r + s * u),
          (t[10] = i * r + M * u),
          (t[11] = c * r + f * u),
          t
        )
      },
      rotateZ: function (t, n, a) {
        var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = n[4],
          s = n[5],
          M = n[6],
          f = n[7]
        return (
          n !== t &&
            ((t[8] = n[8]),
            (t[9] = n[9]),
            (t[10] = n[10]),
            (t[11] = n[11]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15])),
          (t[0] = e * u + h * r),
          (t[1] = o * u + s * r),
          (t[2] = i * u + M * r),
          (t[3] = c * u + f * r),
          (t[4] = h * u - e * r),
          (t[5] = s * u - o * r),
          (t[6] = M * u - i * r),
          (t[7] = f * u - c * r),
          t
        )
      },
      fromTranslation: function (t, n) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = 1),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = 1),
          (t[11] = 0),
          (t[12] = n[0]),
          (t[13] = n[1]),
          (t[14] = n[2]),
          (t[15] = 1),
          t
        )
      },
      fromScaling: function (t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = n[1]),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = n[2]),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t
        )
      },
      fromRotation: function (t, a, r) {
        var u,
          e,
          o,
          i = r[0],
          c = r[1],
          h = r[2],
          s = Math.hypot(i, c, h)
        return s < n
          ? null
          : ((i *= s = 1 / s),
            (c *= s),
            (h *= s),
            (u = Math.sin(a)),
            (o = 1 - (e = Math.cos(a))),
            (t[0] = i * i * o + e),
            (t[1] = c * i * o + h * u),
            (t[2] = h * i * o - c * u),
            (t[3] = 0),
            (t[4] = i * c * o - h * u),
            (t[5] = c * c * o + e),
            (t[6] = h * c * o + i * u),
            (t[7] = 0),
            (t[8] = i * h * o + c * u),
            (t[9] = c * h * o - i * u),
            (t[10] = h * h * o + e),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t)
      },
      fromXRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n)
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = r),
          (t[6] = a),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = -a),
          (t[10] = r),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t
        )
      },
      fromYRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n)
        return (
          (t[0] = r),
          (t[1] = 0),
          (t[2] = -a),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = 1),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = a),
          (t[9] = 0),
          (t[10] = r),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t
        )
      },
      fromZRotation: function (t, n) {
        var a = Math.sin(n),
          r = Math.cos(n)
        return (
          (t[0] = r),
          (t[1] = a),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = -a),
          (t[5] = r),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = 1),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t
        )
      },
      fromRotationTranslation: w,
      fromQuat2: function (t, n) {
        var r = new a(3),
          u = -n[0],
          e = -n[1],
          o = -n[2],
          i = n[3],
          c = n[4],
          h = n[5],
          s = n[6],
          M = n[7],
          f = u * u + e * e + o * o + i * i
        return (
          f > 0
            ? ((r[0] = (2 * (c * i + M * u + h * o - s * e)) / f),
              (r[1] = (2 * (h * i + M * e + s * u - c * o)) / f),
              (r[2] = (2 * (s * i + M * o + c * e - h * u)) / f))
            : ((r[0] = 2 * (c * i + M * u + h * o - s * e)),
              (r[1] = 2 * (h * i + M * e + s * u - c * o)),
              (r[2] = 2 * (s * i + M * o + c * e - h * u))),
          w(t, n, r),
          t
        )
      },
      getTranslation: R,
      getScaling: z,
      getRotation: P,
      fromRotationTranslationScale: function (t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2],
          i = n[3],
          c = u + u,
          h = e + e,
          s = o + o,
          M = u * c,
          f = u * h,
          l = u * s,
          v = e * h,
          b = e * s,
          m = o * s,
          d = i * c,
          x = i * h,
          p = i * s,
          y = r[0],
          q = r[1],
          g = r[2]
        return (
          (t[0] = (1 - (v + m)) * y),
          (t[1] = (f + p) * y),
          (t[2] = (l - x) * y),
          (t[3] = 0),
          (t[4] = (f - p) * q),
          (t[5] = (1 - (M + m)) * q),
          (t[6] = (b + d) * q),
          (t[7] = 0),
          (t[8] = (l + x) * g),
          (t[9] = (b - d) * g),
          (t[10] = (1 - (M + v)) * g),
          (t[11] = 0),
          (t[12] = a[0]),
          (t[13] = a[1]),
          (t[14] = a[2]),
          (t[15] = 1),
          t
        )
      },
      fromRotationTranslationScaleOrigin: function (t, n, a, r, u) {
        var e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = e + e,
          s = o + o,
          M = i + i,
          f = e * h,
          l = e * s,
          v = e * M,
          b = o * s,
          m = o * M,
          d = i * M,
          x = c * h,
          p = c * s,
          y = c * M,
          q = r[0],
          g = r[1],
          A = r[2],
          w = u[0],
          R = u[1],
          z = u[2],
          P = (1 - (b + d)) * q,
          j = (l + y) * q,
          I = (v - p) * q,
          S = (l - y) * g,
          E = (1 - (f + d)) * g,
          O = (m + x) * g,
          T = (v + p) * A,
          D = (m - x) * A,
          F = (1 - (f + b)) * A
        return (
          (t[0] = P),
          (t[1] = j),
          (t[2] = I),
          (t[3] = 0),
          (t[4] = S),
          (t[5] = E),
          (t[6] = O),
          (t[7] = 0),
          (t[8] = T),
          (t[9] = D),
          (t[10] = F),
          (t[11] = 0),
          (t[12] = a[0] + w - (P * w + S * R + T * z)),
          (t[13] = a[1] + R - (j * w + E * R + D * z)),
          (t[14] = a[2] + z - (I * w + O * R + F * z)),
          (t[15] = 1),
          t
        )
      },
      fromQuat: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          c = u + u,
          h = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * c,
          b = e * o,
          m = e * i,
          d = e * c
        return (
          (t[0] = 1 - M - v),
          (t[1] = s + d),
          (t[2] = f - m),
          (t[3] = 0),
          (t[4] = s - d),
          (t[5] = 1 - h - v),
          (t[6] = l + b),
          (t[7] = 0),
          (t[8] = f + m),
          (t[9] = l - b),
          (t[10] = 1 - h - M),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          t
        )
      },
      frustum: function (t, n, a, r, u, e, o) {
        var i = 1 / (a - n),
          c = 1 / (u - r),
          h = 1 / (e - o)
        return (
          (t[0] = 2 * e * i),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = 2 * e * c),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = (a + n) * i),
          (t[9] = (u + r) * c),
          (t[10] = (o + e) * h),
          (t[11] = -1),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = o * e * 2 * h),
          (t[15] = 0),
          t
        )
      },
      perspective: function (t, n, a, r, u) {
        var e,
          o = 1 / Math.tan(n / 2)
        return (
          (t[0] = o / a),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = o),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[11] = -1),
          (t[12] = 0),
          (t[13] = 0),
          (t[15] = 0),
          null != u && u !== 1 / 0
            ? ((e = 1 / (r - u)), (t[10] = (u + r) * e), (t[14] = 2 * u * r * e))
            : ((t[10] = -1), (t[14] = -2 * r)),
          t
        )
      },
      perspectiveFromFieldOfView: function (t, n, a, r) {
        var u = Math.tan((n.upDegrees * Math.PI) / 180),
          e = Math.tan((n.downDegrees * Math.PI) / 180),
          o = Math.tan((n.leftDegrees * Math.PI) / 180),
          i = Math.tan((n.rightDegrees * Math.PI) / 180),
          c = 2 / (o + i),
          h = 2 / (u + e)
        return (
          (t[0] = c),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = h),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = -(o - i) * c * 0.5),
          (t[9] = (u - e) * h * 0.5),
          (t[10] = r / (a - r)),
          (t[11] = -1),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = (r * a) / (a - r)),
          (t[15] = 0),
          t
        )
      },
      ortho: function (t, n, a, r, u, e, o) {
        var i = 1 / (n - a),
          c = 1 / (r - u),
          h = 1 / (e - o)
        return (
          (t[0] = -2 * i),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 0),
          (t[5] = -2 * c),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 0),
          (t[9] = 0),
          (t[10] = 2 * h),
          (t[11] = 0),
          (t[12] = (n + a) * i),
          (t[13] = (u + r) * c),
          (t[14] = (o + e) * h),
          (t[15] = 1),
          t
        )
      },
      lookAt: function (t, a, r, u) {
        var e,
          o,
          i,
          c,
          h,
          s,
          M,
          f,
          l,
          v,
          b = a[0],
          m = a[1],
          d = a[2],
          x = u[0],
          p = u[1],
          y = u[2],
          q = r[0],
          A = r[1],
          w = r[2]
        return Math.abs(b - q) < n && Math.abs(m - A) < n && Math.abs(d - w) < n
          ? g(t)
          : ((M = b - q),
            (f = m - A),
            (l = d - w),
            (e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v)),
            (o = y * (M *= v) - x * l),
            (i = x * f - p * M),
            (v = Math.hypot(e, o, i)) ? ((e *= v = 1 / v), (o *= v), (i *= v)) : ((e = 0), (o = 0), (i = 0)),
            (c = f * i - l * o),
            (h = l * e - M * i),
            (s = M * o - f * e),
            (v = Math.hypot(c, h, s)) ? ((c *= v = 1 / v), (h *= v), (s *= v)) : ((c = 0), (h = 0), (s = 0)),
            (t[0] = e),
            (t[1] = c),
            (t[2] = M),
            (t[3] = 0),
            (t[4] = o),
            (t[5] = h),
            (t[6] = f),
            (t[7] = 0),
            (t[8] = i),
            (t[9] = s),
            (t[10] = l),
            (t[11] = 0),
            (t[12] = -(e * b + o * m + i * d)),
            (t[13] = -(c * b + h * m + s * d)),
            (t[14] = -(M * b + f * m + l * d)),
            (t[15] = 1),
            t)
      },
      targetTo: function (t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2],
          i = r[0],
          c = r[1],
          h = r[2],
          s = u - a[0],
          M = e - a[1],
          f = o - a[2],
          l = s * s + M * M + f * f
        l > 0 && ((s *= l = 1 / Math.sqrt(l)), (M *= l), (f *= l))
        var v = c * f - h * M,
          b = h * s - i * f,
          m = i * M - c * s
        return (
          (l = v * v + b * b + m * m) > 0 && ((v *= l = 1 / Math.sqrt(l)), (b *= l), (m *= l)),
          (t[0] = v),
          (t[1] = b),
          (t[2] = m),
          (t[3] = 0),
          (t[4] = M * m - f * b),
          (t[5] = f * v - s * m),
          (t[6] = s * b - M * v),
          (t[7] = 0),
          (t[8] = s),
          (t[9] = M),
          (t[10] = f),
          (t[11] = 0),
          (t[12] = u),
          (t[13] = e),
          (t[14] = o),
          (t[15] = 1),
          t
        )
      },
      str: function (t) {
        return (
          'mat4(' +
          t[0] +
          ', ' +
          t[1] +
          ', ' +
          t[2] +
          ', ' +
          t[3] +
          ', ' +
          t[4] +
          ', ' +
          t[5] +
          ', ' +
          t[6] +
          ', ' +
          t[7] +
          ', ' +
          t[8] +
          ', ' +
          t[9] +
          ', ' +
          t[10] +
          ', ' +
          t[11] +
          ', ' +
          t[12] +
          ', ' +
          t[13] +
          ', ' +
          t[14] +
          ', ' +
          t[15] +
          ')'
        )
      },
      frob: function (t) {
        return Math.hypot(
          t[0],
          t[1],
          t[3],
          t[4],
          t[5],
          t[6],
          t[7],
          t[8],
          t[9],
          t[10],
          t[11],
          t[12],
          t[13],
          t[14],
          t[15]
        )
      },
      add: function (t, n, a) {
        return (
          (t[0] = n[0] + a[0]),
          (t[1] = n[1] + a[1]),
          (t[2] = n[2] + a[2]),
          (t[3] = n[3] + a[3]),
          (t[4] = n[4] + a[4]),
          (t[5] = n[5] + a[5]),
          (t[6] = n[6] + a[6]),
          (t[7] = n[7] + a[7]),
          (t[8] = n[8] + a[8]),
          (t[9] = n[9] + a[9]),
          (t[10] = n[10] + a[10]),
          (t[11] = n[11] + a[11]),
          (t[12] = n[12] + a[12]),
          (t[13] = n[13] + a[13]),
          (t[14] = n[14] + a[14]),
          (t[15] = n[15] + a[15]),
          t
        )
      },
      subtract: j,
      multiplyScalar: function (t, n, a) {
        return (
          (t[0] = n[0] * a),
          (t[1] = n[1] * a),
          (t[2] = n[2] * a),
          (t[3] = n[3] * a),
          (t[4] = n[4] * a),
          (t[5] = n[5] * a),
          (t[6] = n[6] * a),
          (t[7] = n[7] * a),
          (t[8] = n[8] * a),
          (t[9] = n[9] * a),
          (t[10] = n[10] * a),
          (t[11] = n[11] * a),
          (t[12] = n[12] * a),
          (t[13] = n[13] * a),
          (t[14] = n[14] * a),
          (t[15] = n[15] * a),
          t
        )
      },
      multiplyScalarAndAdd: function (t, n, a, r) {
        return (
          (t[0] = n[0] + a[0] * r),
          (t[1] = n[1] + a[1] * r),
          (t[2] = n[2] + a[2] * r),
          (t[3] = n[3] + a[3] * r),
          (t[4] = n[4] + a[4] * r),
          (t[5] = n[5] + a[5] * r),
          (t[6] = n[6] + a[6] * r),
          (t[7] = n[7] + a[7] * r),
          (t[8] = n[8] + a[8] * r),
          (t[9] = n[9] + a[9] * r),
          (t[10] = n[10] + a[10] * r),
          (t[11] = n[11] + a[11] * r),
          (t[12] = n[12] + a[12] * r),
          (t[13] = n[13] + a[13] * r),
          (t[14] = n[14] + a[14] * r),
          (t[15] = n[15] + a[15] * r),
          t
        )
      },
      exactEquals: function (t, n) {
        return (
          t[0] === n[0] &&
          t[1] === n[1] &&
          t[2] === n[2] &&
          t[3] === n[3] &&
          t[4] === n[4] &&
          t[5] === n[5] &&
          t[6] === n[6] &&
          t[7] === n[7] &&
          t[8] === n[8] &&
          t[9] === n[9] &&
          t[10] === n[10] &&
          t[11] === n[11] &&
          t[12] === n[12] &&
          t[13] === n[13] &&
          t[14] === n[14] &&
          t[15] === n[15]
        )
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = t[8],
          f = t[9],
          l = t[10],
          v = t[11],
          b = t[12],
          m = t[13],
          d = t[14],
          x = t[15],
          p = a[0],
          y = a[1],
          q = a[2],
          g = a[3],
          A = a[4],
          w = a[5],
          R = a[6],
          z = a[7],
          P = a[8],
          j = a[9],
          I = a[10],
          S = a[11],
          E = a[12],
          O = a[13],
          T = a[14],
          D = a[15]
        return (
          Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) &&
          Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) &&
          Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) &&
          Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) &&
          Math.abs(i - A) <= n * Math.max(1, Math.abs(i), Math.abs(A)) &&
          Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) &&
          Math.abs(h - R) <= n * Math.max(1, Math.abs(h), Math.abs(R)) &&
          Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) &&
          Math.abs(M - P) <= n * Math.max(1, Math.abs(M), Math.abs(P)) &&
          Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) &&
          Math.abs(l - I) <= n * Math.max(1, Math.abs(l), Math.abs(I)) &&
          Math.abs(v - S) <= n * Math.max(1, Math.abs(v), Math.abs(S)) &&
          Math.abs(b - E) <= n * Math.max(1, Math.abs(b), Math.abs(E)) &&
          Math.abs(m - O) <= n * Math.max(1, Math.abs(m), Math.abs(O)) &&
          Math.abs(d - T) <= n * Math.max(1, Math.abs(d), Math.abs(T)) &&
          Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
        )
      },
      mul: I,
      sub: S
    })
  function O() {
    var t = new a(3)
    return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t
  }
  function T(t) {
    var n = t[0],
      a = t[1],
      r = t[2]
    return Math.hypot(n, a, r)
  }
  function D(t, n, r) {
    var u = new a(3)
    return (u[0] = t), (u[1] = n), (u[2] = r), u
  }
  function F(t, n, a) {
    return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), t
  }
  function L(t, n, a) {
    return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), (t[2] = n[2] * a[2]), t
  }
  function V(t, n, a) {
    return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), (t[2] = n[2] / a[2]), t
  }
  function Q(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2]
    return Math.hypot(a, r, u)
  }
  function Y(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2]
    return a * a + r * r + u * u
  }
  function X(t) {
    var n = t[0],
      a = t[1],
      r = t[2]
    return n * n + a * a + r * r
  }
  function Z(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = a * a + r * r + u * u
    return e > 0 && (e = 1 / Math.sqrt(e)), (t[0] = n[0] * e), (t[1] = n[1] * e), (t[2] = n[2] * e), t
  }
  function _(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
  }
  function B(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = a[0],
      i = a[1],
      c = a[2]
    return (t[0] = u * c - e * i), (t[1] = e * o - r * c), (t[2] = r * i - u * o), t
  }
  var N,
    k = F,
    U = L,
    W = V,
    C = Q,
    G = Y,
    H = T,
    J = X,
    K =
      ((N = O()),
      function (t, n, a, r, u, e) {
        var o, i
        for (n || (n = 3), a || (a = 0), i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n)
          (N[0] = t[o]),
            (N[1] = t[o + 1]),
            (N[2] = t[o + 2]),
            u(N, N, e),
            (t[o] = N[0]),
            (t[o + 1] = N[1]),
            (t[o + 2] = N[2])
        return t
      }),
    $ = Object.freeze({
      create: O,
      clone: function (t) {
        var n = new a(3)
        return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), n
      },
      length: T,
      fromValues: D,
      copy: function (t, n) {
        return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), t
      },
      set: function (t, n, a, r) {
        return (t[0] = n), (t[1] = a), (t[2] = r), t
      },
      add: function (t, n, a) {
        return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), t
      },
      subtract: F,
      multiply: L,
      divide: V,
      ceil: function (t, n) {
        return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), (t[2] = Math.ceil(n[2])), t
      },
      floor: function (t, n) {
        return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), (t[2] = Math.floor(n[2])), t
      },
      min: function (t, n, a) {
        return (t[0] = Math.min(n[0], a[0])), (t[1] = Math.min(n[1], a[1])), (t[2] = Math.min(n[2], a[2])), t
      },
      max: function (t, n, a) {
        return (t[0] = Math.max(n[0], a[0])), (t[1] = Math.max(n[1], a[1])), (t[2] = Math.max(n[2], a[2])), t
      },
      round: function (t, n) {
        return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), (t[2] = Math.round(n[2])), t
      },
      scale: function (t, n, a) {
        return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), t
      },
      scaleAndAdd: function (t, n, a, r) {
        return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), (t[2] = n[2] + a[2] * r), t
      },
      distance: Q,
      squaredDistance: Y,
      squaredLength: X,
      negate: function (t, n) {
        return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), t
      },
      inverse: function (t, n) {
        return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), t
      },
      normalize: Z,
      dot: _,
      cross: B,
      lerp: function (t, n, a, r) {
        var u = n[0],
          e = n[1],
          o = n[2]
        return (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), (t[2] = o + r * (a[2] - o)), t
      },
      hermite: function (t, n, a, r, u, e) {
        var o = e * e,
          i = o * (2 * e - 3) + 1,
          c = o * (e - 2) + e,
          h = o * (e - 1),
          s = o * (3 - 2 * e)
        return (
          (t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s),
          (t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s),
          (t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s),
          t
        )
      },
      bezier: function (t, n, a, r, u, e) {
        var o = 1 - e,
          i = o * o,
          c = e * e,
          h = i * o,
          s = 3 * e * i,
          M = 3 * c * o,
          f = c * e
        return (
          (t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f),
          (t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f),
          (t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f),
          t
        )
      },
      random: function (t, n) {
        n = n || 1
        var a = 2 * r() * Math.PI,
          u = 2 * r() - 1,
          e = Math.sqrt(1 - u * u) * n
        return (t[0] = Math.cos(a) * e), (t[1] = Math.sin(a) * e), (t[2] = u * n), t
      },
      transformMat4: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = a[3] * r + a[7] * u + a[11] * e + a[15]
        return (
          (o = o || 1),
          (t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o),
          (t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o),
          (t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o),
          t
        )
      },
      transformMat3: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2]
        return (
          (t[0] = r * a[0] + u * a[3] + e * a[6]),
          (t[1] = r * a[1] + u * a[4] + e * a[7]),
          (t[2] = r * a[2] + u * a[5] + e * a[8]),
          t
        )
      },
      transformQuat: function (t, n, a) {
        var r = a[0],
          u = a[1],
          e = a[2],
          o = a[3],
          i = n[0],
          c = n[1],
          h = n[2],
          s = u * h - e * c,
          M = e * i - r * h,
          f = r * c - u * i,
          l = u * f - e * M,
          v = e * s - r * f,
          b = r * M - u * s,
          m = 2 * o
        return (
          (s *= m),
          (M *= m),
          (f *= m),
          (l *= 2),
          (v *= 2),
          (b *= 2),
          (t[0] = i + s + l),
          (t[1] = c + M + v),
          (t[2] = h + f + b),
          t
        )
      },
      rotateX: function (t, n, a, r) {
        var u = [],
          e = []
        return (
          (u[0] = n[0] - a[0]),
          (u[1] = n[1] - a[1]),
          (u[2] = n[2] - a[2]),
          (e[0] = u[0]),
          (e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r)),
          (e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r)),
          (t[0] = e[0] + a[0]),
          (t[1] = e[1] + a[1]),
          (t[2] = e[2] + a[2]),
          t
        )
      },
      rotateY: function (t, n, a, r) {
        var u = [],
          e = []
        return (
          (u[0] = n[0] - a[0]),
          (u[1] = n[1] - a[1]),
          (u[2] = n[2] - a[2]),
          (e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r)),
          (e[1] = u[1]),
          (e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r)),
          (t[0] = e[0] + a[0]),
          (t[1] = e[1] + a[1]),
          (t[2] = e[2] + a[2]),
          t
        )
      },
      rotateZ: function (t, n, a, r) {
        var u = [],
          e = []
        return (
          (u[0] = n[0] - a[0]),
          (u[1] = n[1] - a[1]),
          (u[2] = n[2] - a[2]),
          (e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r)),
          (e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r)),
          (e[2] = u[2]),
          (t[0] = e[0] + a[0]),
          (t[1] = e[1] + a[1]),
          (t[2] = e[2] + a[2]),
          t
        )
      },
      angle: function (t, n) {
        var a = D(t[0], t[1], t[2]),
          r = D(n[0], n[1], n[2])
        Z(a, a), Z(r, r)
        var u = _(a, r)
        return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
      },
      zero: function (t) {
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), t
      },
      str: function (t) {
        return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')'
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = a[0],
          i = a[1],
          c = a[2]
        return (
          Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) &&
          Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) &&
          Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c))
        )
      },
      sub: k,
      mul: U,
      div: W,
      dist: C,
      sqrDist: G,
      len: H,
      sqrLen: J,
      forEach: K
    })
  function tt() {
    var t = new a(4)
    return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t
  }
  function nt(t) {
    var n = new a(4)
    return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n
  }
  function at(t, n, r, u) {
    var e = new a(4)
    return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e
  }
  function rt(t, n) {
    return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t
  }
  function ut(t, n, a, r, u) {
    return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t
  }
  function et(t, n, a) {
    return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), (t[3] = n[3] + a[3]), t
  }
  function ot(t, n, a) {
    return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), (t[3] = n[3] - a[3]), t
  }
  function it(t, n, a) {
    return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), (t[2] = n[2] * a[2]), (t[3] = n[3] * a[3]), t
  }
  function ct(t, n, a) {
    return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), (t[2] = n[2] / a[2]), (t[3] = n[3] / a[3]), t
  }
  function ht(t, n, a) {
    return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), (t[3] = n[3] * a), t
  }
  function st(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2],
      e = n[3] - t[3]
    return Math.hypot(a, r, u, e)
  }
  function Mt(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1],
      u = n[2] - t[2],
      e = n[3] - t[3]
    return a * a + r * r + u * u + e * e
  }
  function ft(t) {
    var n = t[0],
      a = t[1],
      r = t[2],
      u = t[3]
    return Math.hypot(n, a, r, u)
  }
  function lt(t) {
    var n = t[0],
      a = t[1],
      r = t[2],
      u = t[3]
    return n * n + a * a + r * r + u * u
  }
  function vt(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = a * a + r * r + u * u + e * e
    return o > 0 && (o = 1 / Math.sqrt(o)), (t[0] = a * o), (t[1] = r * o), (t[2] = u * o), (t[3] = e * o), t
  }
  function bt(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
  }
  function mt(t, n, a, r) {
    var u = n[0],
      e = n[1],
      o = n[2],
      i = n[3]
    return (
      (t[0] = u + r * (a[0] - u)),
      (t[1] = e + r * (a[1] - e)),
      (t[2] = o + r * (a[2] - o)),
      (t[3] = i + r * (a[3] - i)),
      t
    )
  }
  function dt(t, n) {
    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
  }
  function xt(t, a) {
    var r = t[0],
      u = t[1],
      e = t[2],
      o = t[3],
      i = a[0],
      c = a[1],
      h = a[2],
      s = a[3]
    return (
      Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) &&
      Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) &&
      Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) &&
      Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
    )
  }
  var pt = ot,
    yt = it,
    qt = ct,
    gt = st,
    At = Mt,
    wt = ft,
    Rt = lt,
    zt = (function () {
      var t = tt()
      return function (n, a, r, u, e, o) {
        var i, c
        for (a || (a = 4), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a)
          (t[0] = n[i]),
            (t[1] = n[i + 1]),
            (t[2] = n[i + 2]),
            (t[3] = n[i + 3]),
            e(t, t, o),
            (n[i] = t[0]),
            (n[i + 1] = t[1]),
            (n[i + 2] = t[2]),
            (n[i + 3] = t[3])
        return n
      }
    })(),
    Pt = Object.freeze({
      create: tt,
      clone: nt,
      fromValues: at,
      copy: rt,
      set: ut,
      add: et,
      subtract: ot,
      multiply: it,
      divide: ct,
      ceil: function (t, n) {
        return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), (t[2] = Math.ceil(n[2])), (t[3] = Math.ceil(n[3])), t
      },
      floor: function (t, n) {
        return (
          (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), (t[2] = Math.floor(n[2])), (t[3] = Math.floor(n[3])), t
        )
      },
      min: function (t, n, a) {
        return (
          (t[0] = Math.min(n[0], a[0])),
          (t[1] = Math.min(n[1], a[1])),
          (t[2] = Math.min(n[2], a[2])),
          (t[3] = Math.min(n[3], a[3])),
          t
        )
      },
      max: function (t, n, a) {
        return (
          (t[0] = Math.max(n[0], a[0])),
          (t[1] = Math.max(n[1], a[1])),
          (t[2] = Math.max(n[2], a[2])),
          (t[3] = Math.max(n[3], a[3])),
          t
        )
      },
      round: function (t, n) {
        return (
          (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), (t[2] = Math.round(n[2])), (t[3] = Math.round(n[3])), t
        )
      },
      scale: ht,
      scaleAndAdd: function (t, n, a, r) {
        return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), (t[2] = n[2] + a[2] * r), (t[3] = n[3] + a[3] * r), t
      },
      distance: st,
      squaredDistance: Mt,
      length: ft,
      squaredLength: lt,
      negate: function (t, n) {
        return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = -n[3]), t
      },
      inverse: function (t, n) {
        return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), (t[3] = 1 / n[3]), t
      },
      normalize: vt,
      dot: bt,
      cross: function (t, n, a, r) {
        var u = a[0] * r[1] - a[1] * r[0],
          e = a[0] * r[2] - a[2] * r[0],
          o = a[0] * r[3] - a[3] * r[0],
          i = a[1] * r[2] - a[2] * r[1],
          c = a[1] * r[3] - a[3] * r[1],
          h = a[2] * r[3] - a[3] * r[2],
          s = n[0],
          M = n[1],
          f = n[2],
          l = n[3]
        return (
          (t[0] = M * h - f * c + l * i),
          (t[1] = -s * h + f * o - l * e),
          (t[2] = s * c - M * o + l * u),
          (t[3] = -s * i + M * e - f * u),
          t
        )
      },
      lerp: mt,
      random: function (t, n) {
        var a, u, e, o, i, c
        n = n || 1
        do {
          i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u
        } while (i >= 1)
        do {
          c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o
        } while (c >= 1)
        var h = Math.sqrt((1 - i) / c)
        return (t[0] = n * a), (t[1] = n * u), (t[2] = n * e * h), (t[3] = n * o * h), t
      },
      transformMat4: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3]
        return (
          (t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o),
          (t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o),
          (t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o),
          (t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o),
          t
        )
      },
      transformQuat: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = a[0],
          i = a[1],
          c = a[2],
          h = a[3],
          s = h * r + i * e - c * u,
          M = h * u + c * r - o * e,
          f = h * e + o * u - i * r,
          l = -o * r - i * u - c * e
        return (
          (t[0] = s * h + l * -o + M * -c - f * -i),
          (t[1] = M * h + l * -i + f * -o - s * -c),
          (t[2] = f * h + l * -c + s * -i - M * -o),
          (t[3] = n[3]),
          t
        )
      },
      zero: function (t) {
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t
      },
      str: function (t) {
        return 'vec4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
      },
      exactEquals: dt,
      equals: xt,
      sub: pt,
      mul: yt,
      div: qt,
      dist: gt,
      sqrDist: At,
      len: wt,
      sqrLen: Rt,
      forEach: zt
    })
  function jt() {
    var t = new a(4)
    return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t
  }
  function It(t, n, a) {
    a *= 0.5
    var r = Math.sin(a)
    return (t[0] = r * n[0]), (t[1] = r * n[1]), (t[2] = r * n[2]), (t[3] = Math.cos(a)), t
  }
  function St(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[0],
      c = a[1],
      h = a[2],
      s = a[3]
    return (
      (t[0] = r * s + o * i + u * h - e * c),
      (t[1] = u * s + o * c + e * i - r * h),
      (t[2] = e * s + o * h + r * c - u * i),
      (t[3] = o * s - r * i - u * c - e * h),
      t
    )
  }
  function Et(t, n, a) {
    a *= 0.5
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      c = Math.cos(a)
    return (t[0] = r * c + o * i), (t[1] = u * c + e * i), (t[2] = e * c - u * i), (t[3] = o * c - r * i), t
  }
  function Ot(t, n, a) {
    a *= 0.5
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      c = Math.cos(a)
    return (t[0] = r * c - e * i), (t[1] = u * c + o * i), (t[2] = e * c + r * i), (t[3] = o * c - u * i), t
  }
  function Tt(t, n, a) {
    a *= 0.5
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = Math.sin(a),
      c = Math.cos(a)
    return (t[0] = r * c + u * i), (t[1] = u * c - r * i), (t[2] = e * c + o * i), (t[3] = o * c - e * i), t
  }
  function Dt(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = Math.sqrt(a * a + r * r + u * u),
      i = Math.exp(e),
      c = o > 0 ? (i * Math.sin(o)) / o : 0
    return (t[0] = a * c), (t[1] = r * c), (t[2] = u * c), (t[3] = i * Math.cos(o)), t
  }
  function Ft(t, n) {
    var a = n[0],
      r = n[1],
      u = n[2],
      e = n[3],
      o = Math.sqrt(a * a + r * r + u * u),
      i = o > 0 ? Math.atan2(o, e) / o : 0
    return (t[0] = a * i), (t[1] = r * i), (t[2] = u * i), (t[3] = 0.5 * Math.log(a * a + r * r + u * u + e * e)), t
  }
  function Lt(t, a, r, u) {
    var e,
      o,
      i,
      c,
      h,
      s = a[0],
      M = a[1],
      f = a[2],
      l = a[3],
      v = r[0],
      b = r[1],
      m = r[2],
      d = r[3]
    return (
      (o = s * v + M * b + f * m + l * d) < 0 && ((o = -o), (v = -v), (b = -b), (m = -m), (d = -d)),
      1 - o > n
        ? ((e = Math.acos(o)), (i = Math.sin(e)), (c = Math.sin((1 - u) * e) / i), (h = Math.sin(u * e) / i))
        : ((c = 1 - u), (h = u)),
      (t[0] = c * s + h * v),
      (t[1] = c * M + h * b),
      (t[2] = c * f + h * m),
      (t[3] = c * l + h * d),
      t
    )
  }
  function Vt(t, n) {
    var a,
      r = n[0] + n[4] + n[8]
    if (r > 0)
      (a = Math.sqrt(r + 1)),
        (t[3] = 0.5 * a),
        (a = 0.5 / a),
        (t[0] = (n[5] - n[7]) * a),
        (t[1] = (n[6] - n[2]) * a),
        (t[2] = (n[1] - n[3]) * a)
    else {
      var u = 0
      n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2)
      var e = (u + 1) % 3,
        o = (u + 2) % 3
      ;(a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1)),
        (t[u] = 0.5 * a),
        (a = 0.5 / a),
        (t[3] = (n[3 * e + o] - n[3 * o + e]) * a),
        (t[e] = (n[3 * e + u] + n[3 * u + e]) * a),
        (t[o] = (n[3 * o + u] + n[3 * u + o]) * a)
    }
    return t
  }
  var Qt,
    Yt,
    Xt,
    Zt,
    _t,
    Bt,
    Nt = nt,
    kt = at,
    Ut = rt,
    Wt = ut,
    Ct = et,
    Gt = St,
    Ht = ht,
    Jt = bt,
    Kt = mt,
    $t = ft,
    tn = $t,
    nn = lt,
    an = nn,
    rn = vt,
    un = dt,
    en = xt,
    on =
      ((Qt = O()),
      (Yt = D(1, 0, 0)),
      (Xt = D(0, 1, 0)),
      function (t, n, a) {
        var r = _(n, a)
        return r < -0.999999
          ? (B(Qt, Yt, n), H(Qt) < 1e-6 && B(Qt, Xt, n), Z(Qt, Qt), It(t, Qt, Math.PI), t)
          : r > 0.999999
            ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
            : (B(Qt, n, a), (t[0] = Qt[0]), (t[1] = Qt[1]), (t[2] = Qt[2]), (t[3] = 1 + r), rn(t, t))
      }),
    cn =
      ((Zt = jt()),
      (_t = jt()),
      function (t, n, a, r, u, e) {
        return Lt(Zt, n, u, e), Lt(_t, a, r, e), Lt(t, Zt, _t, 2 * e * (1 - e)), t
      }),
    hn =
      ((Bt = m()),
      function (t, n, a, r) {
        return (
          (Bt[0] = a[0]),
          (Bt[3] = a[1]),
          (Bt[6] = a[2]),
          (Bt[1] = r[0]),
          (Bt[4] = r[1]),
          (Bt[7] = r[2]),
          (Bt[2] = -n[0]),
          (Bt[5] = -n[1]),
          (Bt[8] = -n[2]),
          rn(t, Vt(t, Bt))
        )
      }),
    sn = Object.freeze({
      create: jt,
      identity: function (t) {
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t
      },
      setAxisAngle: It,
      getAxisAngle: function (t, a) {
        var r = 2 * Math.acos(a[3]),
          u = Math.sin(r / 2)
        return (
          u > n ? ((t[0] = a[0] / u), (t[1] = a[1] / u), (t[2] = a[2] / u)) : ((t[0] = 1), (t[1] = 0), (t[2] = 0)), r
        )
      },
      getAngle: function (t, n) {
        var a = Jt(t, n)
        return Math.acos(2 * a * a - 1)
      },
      multiply: St,
      rotateX: Et,
      rotateY: Ot,
      rotateZ: Tt,
      calculateW: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2]
        return (t[0] = a), (t[1] = r), (t[2] = u), (t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u))), t
      },
      exp: Dt,
      ln: Ft,
      pow: function (t, n, a) {
        return Ft(t, n), Ht(t, t, a), Dt(t, t), t
      },
      slerp: Lt,
      random: function (t) {
        var n = r(),
          a = r(),
          u = r(),
          e = Math.sqrt(1 - n),
          o = Math.sqrt(n)
        return (
          (t[0] = e * Math.sin(2 * Math.PI * a)),
          (t[1] = e * Math.cos(2 * Math.PI * a)),
          (t[2] = o * Math.sin(2 * Math.PI * u)),
          (t[3] = o * Math.cos(2 * Math.PI * u)),
          t
        )
      },
      invert: function (t, n) {
        var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * a + r * r + u * u + e * e,
          i = o ? 1 / o : 0
        return (t[0] = -a * i), (t[1] = -r * i), (t[2] = -u * i), (t[3] = e * i), t
      },
      conjugate: function (t, n) {
        return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = n[3]), t
      },
      fromMat3: Vt,
      fromEuler: function (t, n, a, r) {
        var u = (0.5 * Math.PI) / 180
        ;(n *= u), (a *= u), (r *= u)
        var e = Math.sin(n),
          o = Math.cos(n),
          i = Math.sin(a),
          c = Math.cos(a),
          h = Math.sin(r),
          s = Math.cos(r)
        return (
          (t[0] = e * c * s - o * i * h),
          (t[1] = o * i * s + e * c * h),
          (t[2] = o * c * h - e * i * s),
          (t[3] = o * c * s + e * i * h),
          t
        )
      },
      str: function (t) {
        return 'quat(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
      },
      clone: Nt,
      fromValues: kt,
      copy: Ut,
      set: Wt,
      add: Ct,
      mul: Gt,
      scale: Ht,
      dot: Jt,
      lerp: Kt,
      length: $t,
      len: tn,
      squaredLength: nn,
      sqrLen: an,
      normalize: rn,
      exactEquals: un,
      equals: en,
      rotationTo: on,
      sqlerp: cn,
      setAxes: hn
    })
  function Mn(t, n, a) {
    var r = 0.5 * a[0],
      u = 0.5 * a[1],
      e = 0.5 * a[2],
      o = n[0],
      i = n[1],
      c = n[2],
      h = n[3]
    return (
      (t[0] = o),
      (t[1] = i),
      (t[2] = c),
      (t[3] = h),
      (t[4] = r * h + u * c - e * i),
      (t[5] = u * h + e * o - r * c),
      (t[6] = e * h + r * i - u * o),
      (t[7] = -r * o - u * i - e * c),
      t
    )
  }
  function fn(t, n) {
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      t
    )
  }
  var ln = Ut
  var vn = Ut
  function bn(t, n, a) {
    var r = n[0],
      u = n[1],
      e = n[2],
      o = n[3],
      i = a[4],
      c = a[5],
      h = a[6],
      s = a[7],
      M = n[4],
      f = n[5],
      l = n[6],
      v = n[7],
      b = a[0],
      m = a[1],
      d = a[2],
      x = a[3]
    return (
      (t[0] = r * x + o * b + u * d - e * m),
      (t[1] = u * x + o * m + e * b - r * d),
      (t[2] = e * x + o * d + r * m - u * b),
      (t[3] = o * x - r * b - u * m - e * d),
      (t[4] = r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m),
      (t[5] = u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d),
      (t[6] = e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b),
      (t[7] = o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d),
      t
    )
  }
  var mn = bn
  var dn = Jt
  var xn = $t,
    pn = xn,
    yn = nn,
    qn = yn
  var gn = Object.freeze({
    create: function () {
      var t = new a(8)
      return (
        a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
        (t[3] = 1),
        t
      )
    },
    clone: function (t) {
      var n = new a(8)
      return (
        (n[0] = t[0]),
        (n[1] = t[1]),
        (n[2] = t[2]),
        (n[3] = t[3]),
        (n[4] = t[4]),
        (n[5] = t[5]),
        (n[6] = t[6]),
        (n[7] = t[7]),
        n
      )
    },
    fromValues: function (t, n, r, u, e, o, i, c) {
      var h = new a(8)
      return (h[0] = t), (h[1] = n), (h[2] = r), (h[3] = u), (h[4] = e), (h[5] = o), (h[6] = i), (h[7] = c), h
    },
    fromRotationTranslationValues: function (t, n, r, u, e, o, i) {
      var c = new a(8)
      ;(c[0] = t), (c[1] = n), (c[2] = r), (c[3] = u)
      var h = 0.5 * e,
        s = 0.5 * o,
        M = 0.5 * i
      return (
        (c[4] = h * u + s * r - M * n),
        (c[5] = s * u + M * t - h * r),
        (c[6] = M * u + h * n - s * t),
        (c[7] = -h * t - s * n - M * r),
        c
      )
    },
    fromRotationTranslation: Mn,
    fromTranslation: function (t, n) {
      return (
        (t[0] = 0),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 1),
        (t[4] = 0.5 * n[0]),
        (t[5] = 0.5 * n[1]),
        (t[6] = 0.5 * n[2]),
        (t[7] = 0),
        t
      )
    },
    fromRotation: function (t, n) {
      return (
        (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), t
      )
    },
    fromMat4: function (t, n) {
      var r = jt()
      P(r, n)
      var u = new a(3)
      return R(u, n), Mn(t, r, u), t
    },
    copy: fn,
    identity: function (t) {
      return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0), t
    },
    set: function (t, n, a, r, u, e, o, i, c) {
      return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), (t[4] = e), (t[5] = o), (t[6] = i), (t[7] = c), t
    },
    getReal: ln,
    getDual: function (t, n) {
      return (t[0] = n[4]), (t[1] = n[5]), (t[2] = n[6]), (t[3] = n[7]), t
    },
    setReal: vn,
    setDual: function (t, n) {
      return (t[4] = n[0]), (t[5] = n[1]), (t[6] = n[2]), (t[7] = n[3]), t
    },
    getTranslation: function (t, n) {
      var a = n[4],
        r = n[5],
        u = n[6],
        e = n[7],
        o = -n[0],
        i = -n[1],
        c = -n[2],
        h = n[3]
      return (
        (t[0] = 2 * (a * h + e * o + r * c - u * i)),
        (t[1] = 2 * (r * h + e * i + u * o - a * c)),
        (t[2] = 2 * (u * h + e * c + a * i - r * o)),
        t
      )
    },
    translate: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = 0.5 * a[0],
        c = 0.5 * a[1],
        h = 0.5 * a[2],
        s = n[4],
        M = n[5],
        f = n[6],
        l = n[7]
      return (
        (t[0] = r),
        (t[1] = u),
        (t[2] = e),
        (t[3] = o),
        (t[4] = o * i + u * h - e * c + s),
        (t[5] = o * c + e * i - r * h + M),
        (t[6] = o * h + r * c - u * i + f),
        (t[7] = -r * i - u * c - e * h + l),
        t
      )
    },
    rotateX: function (t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = i * o + s * r + c * e - h * u,
        f = c * o + s * u + h * r - i * e,
        l = h * o + s * e + i * u - c * r,
        v = s * o - i * r - c * u - h * e
      return (
        Et(t, n, a),
        (r = t[0]),
        (u = t[1]),
        (e = t[2]),
        (o = t[3]),
        (t[4] = M * o + v * r + f * e - l * u),
        (t[5] = f * o + v * u + l * r - M * e),
        (t[6] = l * o + v * e + M * u - f * r),
        (t[7] = v * o - M * r - f * u - l * e),
        t
      )
    },
    rotateY: function (t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = i * o + s * r + c * e - h * u,
        f = c * o + s * u + h * r - i * e,
        l = h * o + s * e + i * u - c * r,
        v = s * o - i * r - c * u - h * e
      return (
        Ot(t, n, a),
        (r = t[0]),
        (u = t[1]),
        (e = t[2]),
        (o = t[3]),
        (t[4] = M * o + v * r + f * e - l * u),
        (t[5] = f * o + v * u + l * r - M * e),
        (t[6] = l * o + v * e + M * u - f * r),
        (t[7] = v * o - M * r - f * u - l * e),
        t
      )
    },
    rotateZ: function (t, n, a) {
      var r = -n[0],
        u = -n[1],
        e = -n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = i * o + s * r + c * e - h * u,
        f = c * o + s * u + h * r - i * e,
        l = h * o + s * e + i * u - c * r,
        v = s * o - i * r - c * u - h * e
      return (
        Tt(t, n, a),
        (r = t[0]),
        (u = t[1]),
        (e = t[2]),
        (o = t[3]),
        (t[4] = M * o + v * r + f * e - l * u),
        (t[5] = f * o + v * u + l * r - M * e),
        (t[6] = l * o + v * e + M * u - f * r),
        (t[7] = v * o - M * r - f * u - l * e),
        t
      )
    },
    rotateByQuatAppend: function (t, n, a) {
      var r = a[0],
        u = a[1],
        e = a[2],
        o = a[3],
        i = n[0],
        c = n[1],
        h = n[2],
        s = n[3]
      return (
        (t[0] = i * o + s * r + c * e - h * u),
        (t[1] = c * o + s * u + h * r - i * e),
        (t[2] = h * o + s * e + i * u - c * r),
        (t[3] = s * o - i * r - c * u - h * e),
        (i = n[4]),
        (c = n[5]),
        (h = n[6]),
        (s = n[7]),
        (t[4] = i * o + s * r + c * e - h * u),
        (t[5] = c * o + s * u + h * r - i * e),
        (t[6] = h * o + s * e + i * u - c * r),
        (t[7] = s * o - i * r - c * u - h * e),
        t
      )
    },
    rotateByQuatPrepend: function (t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3]
      return (
        (t[0] = r * s + o * i + u * h - e * c),
        (t[1] = u * s + o * c + e * i - r * h),
        (t[2] = e * s + o * h + r * c - u * i),
        (t[3] = o * s - r * i - u * c - e * h),
        (i = a[4]),
        (c = a[5]),
        (h = a[6]),
        (s = a[7]),
        (t[4] = r * s + o * i + u * h - e * c),
        (t[5] = u * s + o * c + e * i - r * h),
        (t[6] = e * s + o * h + r * c - u * i),
        (t[7] = o * s - r * i - u * c - e * h),
        t
      )
    },
    rotateAroundAxis: function (t, a, r, u) {
      if (Math.abs(u) < n) return fn(t, a)
      var e = Math.hypot(r[0], r[1], r[2])
      u *= 0.5
      var o = Math.sin(u),
        i = (o * r[0]) / e,
        c = (o * r[1]) / e,
        h = (o * r[2]) / e,
        s = Math.cos(u),
        M = a[0],
        f = a[1],
        l = a[2],
        v = a[3]
      ;(t[0] = M * s + v * i + f * h - l * c),
        (t[1] = f * s + v * c + l * i - M * h),
        (t[2] = l * s + v * h + M * c - f * i),
        (t[3] = v * s - M * i - f * c - l * h)
      var b = a[4],
        m = a[5],
        d = a[6],
        x = a[7]
      return (
        (t[4] = b * s + x * i + m * h - d * c),
        (t[5] = m * s + x * c + d * i - b * h),
        (t[6] = d * s + x * h + b * c - m * i),
        (t[7] = x * s - b * i - m * c - d * h),
        t
      )
    },
    add: function (t, n, a) {
      return (
        (t[0] = n[0] + a[0]),
        (t[1] = n[1] + a[1]),
        (t[2] = n[2] + a[2]),
        (t[3] = n[3] + a[3]),
        (t[4] = n[4] + a[4]),
        (t[5] = n[5] + a[5]),
        (t[6] = n[6] + a[6]),
        (t[7] = n[7] + a[7]),
        t
      )
    },
    multiply: bn,
    mul: mn,
    scale: function (t, n, a) {
      return (
        (t[0] = n[0] * a),
        (t[1] = n[1] * a),
        (t[2] = n[2] * a),
        (t[3] = n[3] * a),
        (t[4] = n[4] * a),
        (t[5] = n[5] * a),
        (t[6] = n[6] * a),
        (t[7] = n[7] * a),
        t
      )
    },
    dot: dn,
    lerp: function (t, n, a, r) {
      var u = 1 - r
      return (
        dn(n, a) < 0 && (r = -r),
        (t[0] = n[0] * u + a[0] * r),
        (t[1] = n[1] * u + a[1] * r),
        (t[2] = n[2] * u + a[2] * r),
        (t[3] = n[3] * u + a[3] * r),
        (t[4] = n[4] * u + a[4] * r),
        (t[5] = n[5] * u + a[5] * r),
        (t[6] = n[6] * u + a[6] * r),
        (t[7] = n[7] * u + a[7] * r),
        t
      )
    },
    invert: function (t, n) {
      var a = yn(n)
      return (
        (t[0] = -n[0] / a),
        (t[1] = -n[1] / a),
        (t[2] = -n[2] / a),
        (t[3] = n[3] / a),
        (t[4] = -n[4] / a),
        (t[5] = -n[5] / a),
        (t[6] = -n[6] / a),
        (t[7] = n[7] / a),
        t
      )
    },
    conjugate: function (t, n) {
      return (
        (t[0] = -n[0]),
        (t[1] = -n[1]),
        (t[2] = -n[2]),
        (t[3] = n[3]),
        (t[4] = -n[4]),
        (t[5] = -n[5]),
        (t[6] = -n[6]),
        (t[7] = n[7]),
        t
      )
    },
    length: xn,
    len: pn,
    squaredLength: yn,
    sqrLen: qn,
    normalize: function (t, n) {
      var a = yn(n)
      if (a > 0) {
        a = Math.sqrt(a)
        var r = n[0] / a,
          u = n[1] / a,
          e = n[2] / a,
          o = n[3] / a,
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = r * i + u * c + e * h + o * s
        ;(t[0] = r),
          (t[1] = u),
          (t[2] = e),
          (t[3] = o),
          (t[4] = (i - r * M) / a),
          (t[5] = (c - u * M) / a),
          (t[6] = (h - e * M) / a),
          (t[7] = (s - o * M) / a)
      }
      return t
    },
    str: function (t) {
      return (
        'quat2(' +
        t[0] +
        ', ' +
        t[1] +
        ', ' +
        t[2] +
        ', ' +
        t[3] +
        ', ' +
        t[4] +
        ', ' +
        t[5] +
        ', ' +
        t[6] +
        ', ' +
        t[7] +
        ')'
      )
    },
    exactEquals: function (t, n) {
      return (
        t[0] === n[0] &&
        t[1] === n[1] &&
        t[2] === n[2] &&
        t[3] === n[3] &&
        t[4] === n[4] &&
        t[5] === n[5] &&
        t[6] === n[6] &&
        t[7] === n[7]
      )
    },
    equals: function (t, a) {
      var r = t[0],
        u = t[1],
        e = t[2],
        o = t[3],
        i = t[4],
        c = t[5],
        h = t[6],
        s = t[7],
        M = a[0],
        f = a[1],
        l = a[2],
        v = a[3],
        b = a[4],
        m = a[5],
        d = a[6],
        x = a[7]
      return (
        Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) &&
        Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) &&
        Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) &&
        Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) &&
        Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) &&
        Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) &&
        Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) &&
        Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
      )
    }
  })
  function An() {
    var t = new a(2)
    return a != Float32Array && ((t[0] = 0), (t[1] = 0)), t
  }
  function wn(t, n, a) {
    return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), t
  }
  function Rn(t, n, a) {
    return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), t
  }
  function zn(t, n, a) {
    return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), t
  }
  function Pn(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1]
    return Math.hypot(a, r)
  }
  function jn(t, n) {
    var a = n[0] - t[0],
      r = n[1] - t[1]
    return a * a + r * r
  }
  function In(t) {
    var n = t[0],
      a = t[1]
    return Math.hypot(n, a)
  }
  function Sn(t) {
    var n = t[0],
      a = t[1]
    return n * n + a * a
  }
  var En = In,
    On = wn,
    Tn = Rn,
    Dn = zn,
    Fn = Pn,
    Ln = jn,
    Vn = Sn,
    Qn = (function () {
      var t = An()
      return function (n, a, r, u, e, o) {
        var i, c
        for (a || (a = 2), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a)
          (t[0] = n[i]), (t[1] = n[i + 1]), e(t, t, o), (n[i] = t[0]), (n[i + 1] = t[1])
        return n
      }
    })(),
    Yn = Object.freeze({
      create: An,
      clone: function (t) {
        var n = new a(2)
        return (n[0] = t[0]), (n[1] = t[1]), n
      },
      fromValues: function (t, n) {
        var r = new a(2)
        return (r[0] = t), (r[1] = n), r
      },
      copy: function (t, n) {
        return (t[0] = n[0]), (t[1] = n[1]), t
      },
      set: function (t, n, a) {
        return (t[0] = n), (t[1] = a), t
      },
      add: function (t, n, a) {
        return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), t
      },
      subtract: wn,
      multiply: Rn,
      divide: zn,
      ceil: function (t, n) {
        return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), t
      },
      floor: function (t, n) {
        return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), t
      },
      min: function (t, n, a) {
        return (t[0] = Math.min(n[0], a[0])), (t[1] = Math.min(n[1], a[1])), t
      },
      max: function (t, n, a) {
        return (t[0] = Math.max(n[0], a[0])), (t[1] = Math.max(n[1], a[1])), t
      },
      round: function (t, n) {
        return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), t
      },
      scale: function (t, n, a) {
        return (t[0] = n[0] * a), (t[1] = n[1] * a), t
      },
      scaleAndAdd: function (t, n, a, r) {
        return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), t
      },
      distance: Pn,
      squaredDistance: jn,
      length: In,
      squaredLength: Sn,
      negate: function (t, n) {
        return (t[0] = -n[0]), (t[1] = -n[1]), t
      },
      inverse: function (t, n) {
        return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), t
      },
      normalize: function (t, n) {
        var a = n[0],
          r = n[1],
          u = a * a + r * r
        return u > 0 && (u = 1 / Math.sqrt(u)), (t[0] = n[0] * u), (t[1] = n[1] * u), t
      },
      dot: function (t, n) {
        return t[0] * n[0] + t[1] * n[1]
      },
      cross: function (t, n, a) {
        var r = n[0] * a[1] - n[1] * a[0]
        return (t[0] = t[1] = 0), (t[2] = r), t
      },
      lerp: function (t, n, a, r) {
        var u = n[0],
          e = n[1]
        return (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), t
      },
      random: function (t, n) {
        n = n || 1
        var a = 2 * r() * Math.PI
        return (t[0] = Math.cos(a) * n), (t[1] = Math.sin(a) * n), t
      },
      transformMat2: function (t, n, a) {
        var r = n[0],
          u = n[1]
        return (t[0] = a[0] * r + a[2] * u), (t[1] = a[1] * r + a[3] * u), t
      },
      transformMat2d: function (t, n, a) {
        var r = n[0],
          u = n[1]
        return (t[0] = a[0] * r + a[2] * u + a[4]), (t[1] = a[1] * r + a[3] * u + a[5]), t
      },
      transformMat3: function (t, n, a) {
        var r = n[0],
          u = n[1]
        return (t[0] = a[0] * r + a[3] * u + a[6]), (t[1] = a[1] * r + a[4] * u + a[7]), t
      },
      transformMat4: function (t, n, a) {
        var r = n[0],
          u = n[1]
        return (t[0] = a[0] * r + a[4] * u + a[12]), (t[1] = a[1] * r + a[5] * u + a[13]), t
      },
      rotate: function (t, n, a, r) {
        var u = n[0] - a[0],
          e = n[1] - a[1],
          o = Math.sin(r),
          i = Math.cos(r)
        return (t[0] = u * i - e * o + a[0]), (t[1] = u * o + e * i + a[1]), t
      },
      angle: function (t, n) {
        var a = t[0],
          r = t[1],
          u = n[0],
          e = n[1],
          o = a * a + r * r
        o > 0 && (o = 1 / Math.sqrt(o))
        var i = u * u + e * e
        i > 0 && (i = 1 / Math.sqrt(i))
        var c = (a * u + r * e) * o * i
        return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c)
      },
      zero: function (t) {
        return (t[0] = 0), (t[1] = 0), t
      },
      str: function (t) {
        return 'vec2(' + t[0] + ', ' + t[1] + ')'
      },
      exactEquals: function (t, n) {
        return t[0] === n[0] && t[1] === n[1]
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = a[0],
          o = a[1]
        return (
          Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) &&
          Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
        )
      },
      len: En,
      sub: On,
      mul: Tn,
      div: Dn,
      dist: Fn,
      sqrDist: Ln,
      sqrLen: Vn,
      forEach: Qn
    })
  ;(t.glMatrix = e),
    (t.mat2 = s),
    (t.mat2d = b),
    (t.mat3 = q),
    (t.mat4 = E),
    (t.quat = sn),
    (t.quat2 = gn),
    (t.vec2 = Yn),
    (t.vec3 = $),
    (t.vec4 = Pt),
    Object.defineProperty(t, '__esModule', { value: !0 })
})

// ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]
window.glMatrix = glMatrix
window.mat2 = glMatrix.mat2
window.mat2d = glMatrix.mat2d
window.mat3 = glMatrix.mat3
window.mat4 = glMatrix.mat4
window.quat = glMatrix.quat
window.quat2 = glMatrix.quat2
window.vec2 = glMatrix.vec2
window.vec3 = glMatrix.vec3
window.vec4 = glMatrix.vec4

if (!CABLES1.exportedPatches) CABLES1.exportedPatches = {}
CABLES1.exportedPatches['HLIrud'] = {
  _id: '664dad6397f3dcd50c598765',
  ops: [
    {
      id: 'd6a740d9-23b0-494a-a80b-64b6b4e0a9a1',
      uiAttribs: {},
      portsOut: [
        {
          name: 'trigger 0',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger 0',
              objIn: 'd385215d-3005-4f66-96f2-61535e96acd8',
              objOut: 'd6a740d9-23b0-494a-a80b-64b6b4e0a9a1'
            }
          ]
        },
        {
          name: 'trigger 1',
          links: [
            {
              portIn: 'exe',
              portOut: 'trigger 1',
              objIn: 'f392d170-162f-4709-9253-230bf2d40013',
              objOut: 'd6a740d9-23b0-494a-a80b-64b6b4e0a9a1'
            }
          ]
        },
        {
          name: 'trigger 11',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger 11',
              objIn: 'c2934cab-a032-4c4d-bdcf-955884e38c05',
              objOut: 'd6a740d9-23b0-494a-a80b-64b6b4e0a9a1'
            }
          ]
        }
      ],
      objName: 'Ops.Deprecated.Trigger.Sequence'
    },
    {
      id: 'd385215d-3005-4f66-96f2-61535e96acd8',
      uiAttribs: {},
      portsIn: [
        { name: 'use viewport size', value: 1 },
        { name: 'width', value: 1482 },
        { name: 'height', value: 1054 },
        { name: 'filter index', value: 1 },
        { name: 'filter', value: 'linear' },
        { name: 'wrap index', value: 1 },
        { name: 'wrap', value: 'repeat' },
        { name: 'HDR', value: 0 },
        { name: 'Background Alpha', value: 0 }
      ],
      portsOut: [
        {
          name: 'trigger',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '1f845ae0-56bf-4b17-9396-27fe9d5e2d8d',
              objOut: 'd385215d-3005-4f66-96f2-61535e96acd8'
            }
          ]
        },
        {
          name: 'texture_out',
          links: [
            {
              portIn: 'Texture',
              portOut: 'texture_out',
              objIn: 'c2934cab-a032-4c4d-bdcf-955884e38c05',
              objOut: 'd385215d-3005-4f66-96f2-61535e96acd8'
            }
          ]
        },
        { name: 'Aspect Ratio', value: 1.4060721062618595 }
      ],
      objName: 'Ops.Gl.ImageCompose.ImageCompose'
    },
    {
      id: 'c2934cab-a032-4c4d-bdcf-955884e38c05',
      uiAttribs: {},
      portsIn: [
        { name: 'Scale index', value: 0 },
        { name: 'Scale', value: 'Stretch' },
        { name: 'Flip Y', value: 0 },
        { name: 'Flip X', value: 0 }
      ],
      objName: 'Ops.Gl.Meshes.FullscreenRectangle_v2'
    },
    {
      id: '7ef99703-fc30-4a3b-ae2d-dbbe37b81eec',
      uiAttribs: {},
      portsIn: [
        { name: 'amount', value: 10 },
        { name: 'direction index', value: 0 },
        { name: 'direction', value: 'both' },
        { name: 'Fast', value: 1 }
      ],
      portsOut: [
        {
          name: 'trigger',
          links: [
            { portIn: 'Render', portOut: 'trigger', objIn: '69oo3ekom', objOut: '7ef99703-fc30-4a3b-ae2d-dbbe37b81eec' }
          ]
        }
      ],
      objName: 'Ops.Gl.ImageCompose.Blur'
    },
    {
      id: '6b819a97-423b-4188-90ba-d61bcd1fce77',
      uiAttribs: {},
      portsIn: [{ name: 'amount', value: 0.5 }],
      portsOut: [
        {
          name: 'trigger',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '7ef99703-fc30-4a3b-ae2d-dbbe37b81eec',
              objOut: '6b819a97-423b-4188-90ba-d61bcd1fce77'
            }
          ]
        }
      ],
      objName: 'Ops.Deprecated.Gl.TextureEffects.ChromaticAberration'
    },
    {
      id: '4798387d-411f-496e-a2ac-182428bf3ce9',
      uiAttribs: {},
      portsIn: [{ name: 'number2', value: 1 }],
      portsOut: [
        {
          name: 'result',
          links: [
            {
              portIn: 'y',
              portOut: 'result',
              objIn: '1f845ae0-56bf-4b17-9396-27fe9d5e2d8d',
              objOut: '4798387d-411f-496e-a2ac-182428bf3ce9'
            },
            {
              portIn: 'x',
              portOut: 'result',
              objIn: '1f845ae0-56bf-4b17-9396-27fe9d5e2d8d',
              objOut: '4798387d-411f-496e-a2ac-182428bf3ce9'
            }
          ]
        }
      ],
      objName: 'Ops.Math.Multiply'
    },
    {
      id: '1f845ae0-56bf-4b17-9396-27fe9d5e2d8d',
      uiAttribs: {},
      portsIn: [
        { name: 'Blend Mode index', value: 0 },
        { name: 'Blend Mode', value: 'normal' },
        { name: 'Amount', value: 1 },
        { name: 'smoothness', value: 100 },
        { name: 'Harmonics index', value: 0 },
        { name: 'Harmonics', value: '1' },
        { name: 'scale', value: 20 },
        { name: 'Aspect', value: 0 },
        { name: 'time', value: 0 },
        { name: 'Offset Multiply', value: 1 },
        { name: 'Offset X index', value: 0 },
        { name: 'Offset X', value: 'None' },
        { name: 'Offset Y index', value: 0 },
        { name: 'Offset Y', value: 'None' },
        { name: 'Offset Z index', value: 1 },
        { name: 'Offset Z', value: 'R' }
      ],
      portsOut: [
        {
          name: 'trigger',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '8f8dc08d-0196-4e22-a4d6-553ca4f6725d',
              objOut: '1f845ae0-56bf-4b17-9396-27fe9d5e2d8d'
            }
          ]
        }
      ],
      objName: 'Ops.Gl.ImageCompose.Noise.SimplexNoise'
    },
    {
      id: 'f392d170-162f-4709-9253-230bf2d40013',
      uiAttribs: {},
      portsIn: [{ name: 'Multiply', value: 1 }],
      portsOut: [
        {
          name: 'result',
          links: [
            { portIn: 'number1', portOut: 'result', objIn: '2st571omp', objOut: 'f392d170-162f-4709-9253-230bf2d40013' }
          ]
        }
      ],
      objName: 'Ops.Deprecated.Anim.RelativeTime'
    },
    {
      id: '69oo3ekom',
      uiAttribs: {},
      portsIn: [
        { name: 'Blend Mode index', value: 0 },
        { name: 'Blend Mode', value: 'normal' },
        { name: 'Amount', value: 0.106 },
        { name: 'Animated', value: 1 },
        { name: 'RGB', value: 0 },
        { name: 'Normalize', value: 0 }
      ],
      objName: 'Ops.Gl.ImageCompose.Noise.Noise'
    },
    {
      id: '2st571omp',
      uiAttribs: {},
      portsIn: [{ name: 'number2', value: 15 }],
      portsOut: [
        {
          name: 'result',
          links: [
            { portIn: 'number1', portOut: 'result', objIn: '4798387d-411f-496e-a2ac-182428bf3ce9', objOut: '2st571omp' }
          ]
        }
      ],
      objName: 'Ops.Math.Divide'
    },
    {
      id: '8f8dc08d-0196-4e22-a4d6-553ca4f6725d',
      uiAttribs: {},
      portsIn: [
        { name: 'Blend Mode index', value: 0 },
        { name: 'Blend Mode', value: 'normal' },
        { name: 'Amount', value: 1 },
        { name: 'width', value: 6.43 },
        { name: 'height', value: -0.1 }
      ],
      portsOut: [
        {
          name: 'trigger',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '6b819a97-423b-4188-90ba-d61bcd1fce77',
              objOut: '8f8dc08d-0196-4e22-a4d6-553ca4f6725d'
            }
          ]
        }
      ],
      objName: 'Ops.Gl.ImageCompose.Pixelate'
    },
    {
      id: '94ldi46ne',
      uiAttribs: {},
      portsIn: [
        { name: 'Max Pixel Density (DPR)', value: 2 },
        { name: 'FPS Limit', value: 0 },
        { name: 'Reduce FPS unfocussed', value: 0 },
        { name: 'Transparent', value: 0 },
        { name: 'Active', value: 1 }
      ],
      portsOut: [
        {
          name: 'trigger',
          links: [
            { portIn: 'exe', portOut: 'trigger', objIn: 'd6a740d9-23b0-494a-a80b-64b6b4e0a9a1', objOut: '94ldi46ne' }
          ]
        },
        { name: 'width', value: 1482 },
        { name: 'height', value: 1054 },
        { name: 'Pixel Density', value: 2 }
      ],
      objName: 'Ops.Gl.MainLoop_v2'
    }
  ],
  export: { time: '2024-06-10 21:48:04', service: 'download', exportNumber: 3 }
}
if (!CABLES1.exportedPatch) {
  CABLES1.exportedPatch = CABLES1.exportedPatches['HLIrud']
}
;('use strict')
var CABLES1 = CABLES1 || {}
CABLES1.OPS = CABLES1.OPS || {}
var Ops = Ops || {}
Ops.Gl = Ops.Gl || {}
Ops.Math = Ops.Math || {}
Ops.Gl.Meshes = Ops.Gl.Meshes || {}
Ops.Deprecated = Ops.Deprecated || {}
Ops.Deprecated.Gl = Ops.Deprecated.Gl || {}
Ops.Deprecated.Anim = Ops.Deprecated.Anim || {}
Ops.Gl.ImageCompose = Ops.Gl.ImageCompose || {}
Ops.Deprecated.Trigger = Ops.Deprecated.Trigger || {}
Ops.Gl.ImageCompose.Noise = Ops.Gl.ImageCompose.Noise || {}
Ops.Deprecated.Gl.TextureEffects = Ops.Deprecated.Gl.TextureEffects || {}
Ops.Deprecated.Trigger.Sequence = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {})
  const n = e.inTrigger('exe')
  var r = []
  var o = []
  var i = function () {
    for (var e = 0; e < o.length; e++) o[e].trigger()
  }
  n.onTriggered = i
  var a = 16
  for (var s = 0; s < a; s++) {
    o.push(e.addOutPort(new CABLES1.Port(e, 'trigger ' + s, CABLES1.OP_PORT_TYPE_FUNCTION)))
    if (s < a - 1) {
      var l = e.addInPort(new CABLES1.Port(e, 'exe ' + s, CABLES1.OP_PORT_TYPE_FUNCTION))
      l.onTriggered = i
      r.push(l)
    }
  }
}
Ops.Deprecated.Trigger.Sequence.prototype = new CABLES1.Op()
CABLES1.OPS['641934f6-5143-4a6b-b592-08ab26e2cab0'] = {
  f: Ops.Deprecated.Trigger.Sequence,
  objName: 'Ops.Deprecated.Trigger.Sequence'
}
Ops.Gl.ImageCompose.ImageCompose = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {})
  const n = e.inTrigger('render')
  const r = e.inBool('use viewport size')
  const o = e.inValueInt('width')
  const i = e.inValueInt('height')
  const a = e.inSwitch('filter', ['nearest', 'linear', 'mipmap'], 'linear')
  const s = e.inValueSelect('wrap', ['clamp to edge', 'repeat', 'mirrored repeat'])
  const l = e.inValueBool('HDR')
  const c = e.outTrigger('trigger')
  const f = e.outTexture('texture_out')
  const u = e.inValueSlider('Background Alpha', 0)
  const d = e.outValue('Aspect Ratio')
  e.setPortGroup('Texture Size', [r, o, i])
  e.setPortGroup('Texture Settings', [s, a, l])
  const g = e.patch.cgl
  f.set(CGL1.Texture.getEmptyTexture(g))
  let p = null
  let m = null
  let x = 8,
    h = 8
  const v = [0, 0, 0, 0]
  let C = true
  const _ =
    ''.endl() +
    'uniform float a;'.endl() +
    'void main()'.endl() +
    '{'.endl() +
    '   outColor= vec4(0.0,0.0,0.0,a);'.endl() +
    '}'
  const O = new CGL1.Shader(g, 'imgcompose bg')
  O.setSource(O.getDefaultVertexShader(), _)
  const S = new CGL1.Uniform(O, 'f', 'a', u)
  let T = CGL1.Texture.FILTER_LINEAR
  let b = CGL1.Texture.WRAP_CLAMP_TO_EDGE
  function E() {
    if (p) p.delete()
    if (m) m.delete()
    p = new CGL1.TextureEffect(g, { isFloatingPointTexture: l.get() })
    m = new CGL1.Texture(g, {
      name: 'image compose',
      isFloatingPointTexture: l.get(),
      filter: T,
      wrap: b,
      width: Math.ceil(o.get()),
      height: Math.ceil(i.get())
    })
    p.setSourceTexture(m)
    f.set(CGL1.Texture.getEmptyTexture(g))
    C = false
  }
  l.onChange = function () {
    C = true
  }
  function L() {
    if (!p) E()
    if (r.get()) {
      x = g.getViewPort()[2]
      h = g.getViewPort()[3]
    } else {
      x = Math.ceil(o.get())
      h = Math.ceil(i.get())
    }
    if ((x != m.width || h != m.height) && x !== 0 && h !== 0) {
      i.set(h)
      o.set(x)
      m.setSize(x, h)
      d.set(x / h)
      p.setSourceTexture(m)
      f.set(CGL1.Texture.getEmptyTexture(g))
      f.set(m)
    }
    if (f.get() && T != CGL1.Texture.FILTER_NEAREST) {
      if (!f.get().isPowerOfTwo())
        e.setUiError(
          'hintnpot',
          'texture dimensions not power of two! - texture filtering when scaling will not work on ios devices.',
          0
        )
      else e.setUiError('hintnpot', null, 0)
    } else e.setUiError('hintnpot', null, 0)
  }
  function A() {
    if (r.get()) {
      o.setUiAttribs({ greyout: true })
      i.setUiAttribs({ greyout: true })
    } else {
      o.setUiAttribs({ greyout: false })
      i.setUiAttribs({ greyout: false })
    }
  }
  r.onChange = function () {
    A()
    if (r.get()) {
      o.onChange = null
      i.onChange = null
    } else {
      o.onChange = L
      i.onChange = L
    }
    L()
  }
  e.preRender = function () {
    I()
    O.bind()
  }
  var I = function () {
    if (!p || C) {
      E()
    }
    const e = g.getViewPort()
    v[0] = e[0]
    v[1] = e[1]
    v[2] = e[2]
    v[3] = e[3]
    g.gl.blendFunc(g.gl.SRC_ALPHA, g.gl.ONE_MINUS_SRC_ALPHA)
    L()
    g.currentTextureEffect = p
    p.setSourceTexture(m)
    p.startEffect()
    g.pushShader(O)
    g.currentTextureEffect.bind()
    g.setTexture(0, g.currentTextureEffect.getCurrentSourceTexture().tex)
    g.currentTextureEffect.finish()
    g.popShader()
    c.trigger()
    f.set(p.getCurrentSourceTexture())
    p.endEffect()
    g.setViewPort(v[0], v[1], v[2], v[3])
    g.gl.blendFunc(g.gl.SRC_ALPHA, g.gl.ONE_MINUS_SRC_ALPHA)
    g.currentTextureEffect = null
  }
  function G() {
    if (s.get() == 'repeat') b = CGL1.Texture.WRAP_REPEAT
    if (s.get() == 'mirrored repeat') b = CGL1.Texture.WRAP_MIRRORED_REPEAT
    if (s.get() == 'clamp to edge') b = CGL1.Texture.WRAP_CLAMP_TO_EDGE
    C = true
    L()
  }
  s.set('repeat')
  s.onChange = G
  function P() {
    if (a.get() == 'nearest') T = CGL1.Texture.FILTER_NEAREST
    if (a.get() == 'linear') T = CGL1.Texture.FILTER_LINEAR
    if (a.get() == 'mipmap') T = CGL1.Texture.FILTER_MIPMAP
    C = true
    L()
  }
  a.set('linear')
  a.onChange = P
  r.set(true)
  n.onTriggered = I
  e.preRender = I
  o.set(640)
  i.set(360)
  P()
  G()
  A()
}
Ops.Gl.ImageCompose.ImageCompose.prototype = new CABLES1.Op()
CABLES1.OPS['5c04608d-1e42-4e36-be00-1be4a81fc309'] = {
  f: Ops.Gl.ImageCompose.ImageCompose,
  objName: 'Ops.Gl.ImageCompose.ImageCompose'
}
Ops.Gl.Meshes.FullscreenRectangle_v2 = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {
    shader_frag: 'UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n    outColor= texture(tex,texCoord);\n}\n\n',
    shader_vert:
      '{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=vec2(attrTexCoord.x,(1.0-attrTexCoord.y));\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n'
  })
  const n = e.inTrigger('render'),
    r = e.inSwitch('Scale', ['Stretch', 'Fit'], 'Fit'),
    o = e.inValueBool('Flip Y'),
    i = e.inValueBool('Flip X'),
    a = e.inTexture('Texture'),
    s = e.outTrigger('trigger')
  const l = e.patch.cgl
  let c = null
  let f = new CGL1.Geometry('fullscreen rectangle')
  let u = 0,
    d = 0,
    g = 0,
    p = 0
  e.toWorkShouldNotBeChild('Ops.Gl.TextureEffects.ImageCompose', CABLES1.OP_PORT_TYPE_FUNCTION)
  e.toWorkPortsNeedToBeLinked(n)
  i.onChange = T
  o.onChange = T
  n.onTriggered = S
  a.onLinkChanged = C
  r.onChange = O
  const m = new CGL1.Shader(l, 'fullscreenrectangle', this)
  m.setModules(['MODULE_VERTEX_POSITION', 'MODULE_COLOR', 'MODULE_BEGIN_FRAG'])
  m.setSource(t.shader_vert, t.shader_frag)
  m.fullscreenRectUniform = new CGL1.Uniform(m, 't', 'tex', 0)
  m.aspectUni = new CGL1.Uniform(m, 'f', 'aspectTex', 0)
  let x = false
  let h = true
  let v = false
  C()
  O()
  a.onChange = function () {
    h = true
  }
  function C() {
    if (!CABLES1.UI) return
    o.setUiAttribs({ greyout: !a.isLinked() })
    i.setUiAttribs({ greyout: !a.isLinked() })
    r.setUiAttribs({ greyout: !a.isLinked() })
  }
  function _() {
    let e = a.get()
    if (e) x = true
    else x = false
  }
  e.preRender = function () {
    _()
    m.bind()
    if (c) c.render(m)
    S()
  }
  function O() {
    v = r.get() == 'Fit'
  }
  function S() {
    if (l.viewPort[2] != g || l.viewPort[3] != p || !c) b()
    if (h) _()
    l.pushPMatrix()
    mat4.identity(l.pMatrix)
    mat4.ortho(l.pMatrix, 0, g, p, 0, -10, 1e3)
    l.pushModelMatrix()
    mat4.identity(l.mMatrix)
    l.pushViewMatrix()
    mat4.identity(l.vMatrix)
    if (v && a.get()) {
      const n = a.get().width / a.get().height
      let e = p
      let t = p * n
      if (t > g) {
        e = (g * 1) / n
        t = g
      }
      l.pushViewPort((g - t) / 2, (p - e) / 2, t, e)
    }
    if (x) {
      if (a.get()) l.setTexture(0, a.get().tex)
      c.render(m)
    } else {
      c.render(l.getShader())
    }
    l.gl.clear(l.gl.DEPTH_BUFFER_BIT)
    l.popPMatrix()
    l.popModelMatrix()
    l.popViewMatrix()
    if (v && a.get()) l.popViewPort()
    s.trigger()
  }
  function T() {
    c = null
  }
  function b() {
    if (l.viewPort[2] == g && l.viewPort[3] == p && c) return
    let e = 0,
      t = 0
    g = l.viewPort[2]
    p = l.viewPort[3]
    f.vertices = new Float32Array([e + g, t + p, 0, e, t + p, 0, e + g, t, 0, e, t, 0])
    let n = null
    if (o.get()) n = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1])
    else n = new Float32Array([1, 1, 0, 1, 1, 0, 0, 0])
    if (i.get()) {
      n[0] = 0
      n[2] = 1
      n[4] = 0
      n[6] = 1
    }
    f.setTexCoords(n)
    f.verticesIndices = new Uint16Array([2, 1, 0, 3, 1, 2])
    f.vertexNormals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1])
    f.tangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0])
    f.biTangents == new Float32Array([0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0])
    if (!c) c = new CGL1.Mesh(l, f)
    else c.setGeom(f)
  }
}
Ops.Gl.Meshes.FullscreenRectangle_v2.prototype = new CABLES1.Op()
CABLES1.OPS['fb70721a-eac2-4ff5-a5a2-5c59e2393972'] = {
  f: Ops.Gl.Meshes.FullscreenRectangle_v2,
  objName: 'Ops.Gl.Meshes.FullscreenRectangle_v2'
}
Ops.Gl.ImageCompose.Blur = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {
    blur_frag:
      'IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float dirX;\nUNI float dirY;\nUNI float amount;\n\n#ifdef HAS_MASK\n    UNI sampler2D imageMask;\n#endif\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main()\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float am=amount;\n    #ifdef HAS_MASK\n        am=amount*texture(imageMask,texCoord).r;\n        if(am<=0.02)\n        {\n            outColor=texture(tex, texCoord);\n            return;\n        }\n    #endif\n\n    vec2 delta=vec2(dirX*am*0.01,dirY*am*0.01);\n\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    #ifdef MOBILE\n        offset = 0.1;\n    #endif\n\n    #if defined(FASTBLUR) && !defined(MOBILE)\n        const float range=5.0;\n    #else\n        const float range=20.0;\n    #endif\n\n    for (float t = -range; t <= range; t+=1.0)\n    {\n        float percent = (t + offset - 0.5) / range;\n        float weight = 1.0 - abs(percent);\n        vec4 smpl = texture(tex, texCoord + delta * percent);\n\n        smpl.rgb *= smpl.a;\n\n        color += smpl * weight;\n        total += weight;\n    }\n\n    outColor= color / total;\n\n    outColor.rgb /= outColor.a + 0.00001;\n\n\n\n}\n'
  })
  const n = e.inTrigger('render')
  const r = e.outTrigger('trigger')
  const o = e.inValueFloat('amount')
  const i = e.inSwitch('direction', ['both', 'vertical', 'horizontal'], 'both')
  const a = e.inValueBool('Fast', true)
  const s = e.patch.cgl
  o.set(10)
  let l = new CGL1.Shader(s, 'blur')
  l.define('FASTBLUR')
  a.onChange = function () {
    if (a.get()) l.define('FASTBLUR')
    else l.removeDefine('FASTBLUR')
  }
  l.setSource(l.getDefaultVertexShader(), t.blur_frag)
  let c = new CGL1.Uniform(l, 't', 'tex', 0)
  let f = new CGL1.Uniform(l, 'f', 'dirX', 0)
  let u = new CGL1.Uniform(l, 'f', 'dirY', 0)
  let d = new CGL1.Uniform(l, 'f', 'width', 0)
  let g = new CGL1.Uniform(l, 'f', 'height', 0)
  let p = new CGL1.Uniform(l, 'f', 'amount', o.get())
  o.onChange = function () {
    p.setValue(o.get())
  }
  let m = new CGL1.Uniform(l, 't', 'imageMask', 1)
  let x = false
  function h() {
    if (
      s.currentTextureEffect.getCurrentSourceTexture().width == s.canvasWidth &&
      s.currentTextureEffect.getCurrentSourceTexture().height == s.canvasHeight
    ) {
      e.setUiError('warning', 'Full screen blurs are slow! Try reducing the resolution to 1/2 or a 1/4', 0)
    } else {
      e.setUiError('warning', null)
    }
  }
  let v = 0
  i.onChange = function () {
    if (i.get() == 'both') v = 0
    if (i.get() == 'horizontal') v = 1
    if (i.get() == 'vertical') v = 2
  }
  let C = e.inTexture('mask')
  C.onChange = function () {
    if (C.get() && C.get().tex) l.define('HAS_MASK')
    else l.removeDefine('HAS_MASK')
  }
  n.onTriggered = function () {
    if (!CGL1.TextureEffect.checkOpInEffect(e)) return
    s.pushShader(l)
    d.setValue(s.currentTextureEffect.getCurrentSourceTexture().width)
    g.setValue(s.currentTextureEffect.getCurrentSourceTexture().height)
    h()
    if (v === 0 || v == 2) {
      s.currentTextureEffect.bind()
      s.setTexture(0, s.currentTextureEffect.getCurrentSourceTexture().tex)
      if (C.get() && C.get().tex) {
        s.setTexture(1, C.get().tex)
      }
      f.setValue(0)
      u.setValue(1)
      s.currentTextureEffect.finish()
    }
    if (v === 0 || v == 1) {
      s.currentTextureEffect.bind()
      s.setTexture(0, s.currentTextureEffect.getCurrentSourceTexture().tex)
      if (C.get() && C.get().tex) {
        s.setTexture(1, C.get().tex)
      }
      f.setValue(1)
      u.setValue(0)
      s.currentTextureEffect.finish()
    }
    s.popShader()
    r.trigger()
  }
}
Ops.Gl.ImageCompose.Blur.prototype = new CABLES1.Op()
CABLES1.OPS['54f26f53-f637-44c1-9bfb-a2f2b722e998'] = {
  f: Ops.Gl.ImageCompose.Blur,
  objName: 'Ops.Gl.ImageCompose.Blur'
}
Ops.Deprecated.Gl.TextureEffects.ChromaticAberration = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {})
  e.name = 'ChromaticAberration'
  let n = e.inTrigger('render')
  let r = e.addInPort(new CABLES1.Port(e, 'amount', CABLES1.OP_PORT_TYPE_VALUE, { display: 'range' }))
  let o = e.outTrigger('trigger')
  let i = e.patch.cgl
  let a = new CGL1.Shader(i, e.name, e)
  let s =
    ''.endl() +
    'precision highp float;'.endl() +
    '#ifdef HAS_TEXTURES'.endl() +
    '  IN vec2 texCoord;'.endl() +
    '  UNI sampler2D tex;'.endl() +
    '#endif'.endl() +
    'uniform float amount;'.endl() +
    ''.endl() +
    ''.endl() +
    'void main()'.endl() +
    '{'.endl() +
    '   vec4 col=vec4(1.0,0.0,0.0,1.0);'.endl() +
    '   #ifdef HAS_TEXTURES'.endl() +
    '       col=texture2D(tex,texCoord);'.endl() +
    '       vec2 tcPos=vec2(texCoord.x,texCoord.y/1.777+0.25);'.endl() +
    '       float dist = distance(tcPos, vec2(0.5,0.5));'.endl() +
    '       col.r=texture2D(tex,texCoord+(dist)*-amount).r;'.endl() +
    '       col.b=texture2D(tex,texCoord+(dist)*amount).b;'.endl() +
    '   #endif'.endl() +
    '   gl_FragColor = col;'.endl() +
    '}'
  a.setSource(a.getDefaultVertexShader(), s)
  let l = new CGL1.Uniform(a, 't', 'tex', 0)
  let c = new CGL1.Uniform(a, 'f', 'amount', 0)
  r.onChange = function () {
    c.setValue(r.get() * 0.1)
  }
  r.set(0.5)
  n.onTriggered = function () {
    if (!i.currentTextureEffect) return
    i.pushShader(a)
    i.currentTextureEffect.bind()
    i.setTexture(0, i.currentTextureEffect.getCurrentSourceTexture().tex)
    i.currentTextureEffect.finish()
    i.popShader()
    o.trigger()
  }
}
Ops.Deprecated.Gl.TextureEffects.ChromaticAberration.prototype = new CABLES1.Op()
CABLES1.OPS['c0187b3d-c526-4707-9c4d-d67789c66395'] = {
  f: Ops.Deprecated.Gl.TextureEffects.ChromaticAberration,
  objName: 'Ops.Deprecated.Gl.TextureEffects.ChromaticAberration'
}
Ops.Math.Multiply = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {})
  const n = e.inValueFloat('number1', 1),
    r = e.inValueFloat('number2', 1),
    o = e.outNumber('result')
  e.setUiAttribs({ mathTitle: true })
  n.onChange = r.onChange = i
  i()
  function i() {
    const e = n.get()
    const t = r.get()
    o.set(e * t)
  }
}
Ops.Math.Multiply.prototype = new CABLES1.Op()
CABLES1.OPS['1bbdae06-fbb2-489b-9bcc-36c9d65bd441'] = { f: Ops.Math.Multiply, objName: 'Ops.Math.Multiply' }
Ops.Gl.ImageCompose.Noise.SimplexNoise = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {
    simplexnoise_frag:
      'IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float smoothness;\nUNI float scale;\nUNI float seed;\nUNI float x;\nUNI float y;\nUNI float time;\nUNI float aspect;\nUNI float harmonics;\n\n#ifdef HAS_TEX_OFFSETMAP\n    UNI sampler2D texOffsetZ;\n    UNI float offMul;\n#endif\n\n\n#ifdef HAS_TEX_MASK\n    UNI sampler2D texMask;\n#endif\n\n\n\n{{CGL1.BLENDMODES}}\n\nvoid FAST32_hash_3D(    vec3 gridcell,\n                        vec3 v1_mask,       //  user definable v1 and v2.  ( 0s and 1s )\n                        vec3 v2_mask,\n                        out vec4 hash_0,\n                        out vec4 hash_1,\n                        out vec4 hash_2 )       //  generates 3 random numbers for each of the 4 3D cell corners.  cell  corners:  v0=0,0,0  v3=1,1,1  the other two are user definable\n{\n    //    gridcell is assumed to be an integer coordinate\n\n    //  TODO:   these constants need tweaked to find the best possible noise.\n    //          probably requires some kind of brute force computational searching or something....\n    const vec2 OFFSET = vec2( 50.0, 161.0 );\n    const float DOMAIN = 69.0;\n    const vec3 SOMELARGEFLOATS = vec3( 635.298681, 682.357502, 668.926525 );\n    const vec3 ZINC = vec3( 48.500388, 65.294118, 63.934599 );\n\n    //  truncate the domain\n    gridcell.xyz = gridcell.xyz - floor(gridcell.xyz * ( 1.0 / DOMAIN )) * DOMAIN;\n    vec3 gridcell_inc1 = step( gridcell, vec3( DOMAIN - 1.5 ) ) * ( gridcell + 1.0 );\n\n    //  compute x*x*y*y for the 4 corners\n    vec4 P = vec4( gridcell.xy, gridcell_inc1.xy ) + OFFSET.xyxy;\n    P *= P;\n    vec4 V1xy_V2xy = mix( P.xyxy, P.zwzw, vec4( v1_mask.xy, v2_mask.xy ) );     //  appl y mask for v1 and v2\n    P = vec4( P.x, V1xy_V2xy.xz, P.z ) * vec4( P.y, V1xy_V2xy.yw, P.w );\n\n    //  get the lowz and highz mods\n    vec3 lowz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell.zzz * ZINC.xyz ) );\n    vec3 highz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell_inc1.zzz * ZINC.xyz ) );\n\n    //  appl mask for v1 and v2 mod values\n    v1_mask = ( v1_mask.z < 0.5 ) ? lowz_mods : highz_mods;\n    v2_mask = ( v2_mask.z < 0.5 ) ? lowz_mods : highz_mods;\n\n    //  compute the final hash\n    hash_0 = fract( P * vec4( lowz_mods.x, v1_mask.x, v2_mask.x, highz_mods.x ) );\n    hash_1 = fract( P * vec4( lowz_mods.y, v1_mask.y, v2_mask.y, highz_mods.y ) );\n    hash_2 = fract( P * vec4( lowz_mods.z, v1_mask.z, v2_mask.z, highz_mods.z ) );\n}\n\n\n//\n//  Given an arbitrary 3D point this calculates the 4 vectors from the corners of the simplex pyramid to the point\n//  It also returns the integer grid index information for the corners\n//\nvoid Simplex3D_GetCornerVectors(    vec3 P,                 //  input point\n                                    out vec3 Pi,            //  integer grid index for the origin\n                                    out vec3 Pi_1,          //  offsets for the 2nd and 3rd corners.  ( the 4th = Pi + 1.0 )\n                                    out vec3 Pi_2,\n                                    out vec4 v1234_x,       //  vectors from the 4 corners to the intput point\n                                    out vec4 v1234_y,\n                                    out vec4 v1234_z )\n{\n    //\n    //  Simplex math from Stefan Gustavsons and Ian McEwans work at...\n    //  http://github.com/ashima/webgl-noise\n    //\n\n    //  simplex math constants\n    const float SKEWFACTOR = 1.0/3.0;\n    const float UNSKEWFACTOR = 1.0/6.0;\n    const float SIMPLEX_CORNER_POS = 0.5;\n    const float SIMPLEX_PYRAMID_HEIGHT = 0.70710678118654752440084436210485;    // sqrt( 0.5 )  height of simplex pyramid.\n\n    P *= SIMPLEX_PYRAMID_HEIGHT;        // scale space so we can have an approx feature size of 1.0  ( optional )\n\n    //  Find the vectors to the corners of our simplex pyramid\n    Pi = floor( P + dot( P, vec3( SKEWFACTOR) ) );\n    vec3 x0 = P - Pi + dot(Pi, vec3( UNSKEWFACTOR ) );\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    Pi_1 = min( g.xyz, l.zxy );\n    Pi_2 = max( g.xyz, l.zxy );\n    vec3 x1 = x0 - Pi_1 + UNSKEWFACTOR;\n    vec3 x2 = x0 - Pi_2 + SKEWFACTOR;\n    vec3 x3 = x0 - SIMPLEX_CORNER_POS;\n\n    //  pack them into a parallel-friendly arrangement\n    v1234_x = vec4( x0.x, x1.x, x2.x, x3.x );\n    v1234_y = vec4( x0.y, x1.y, x2.y, x3.y );\n    v1234_z = vec4( x0.z, x1.z, x2.z, x3.z );\n}\n\n//\n//  Calculate the weights for the 3D simplex surflet\n//\nvec4 Simplex3D_GetSurfletWeights(   vec4 v1234_x,\n                                    vec4 v1234_y,\n                                    vec4 v1234_z )\n{\n    //  perlins original implementation uses the surlet falloff formula of (0.6-x*x)^4.\n    //  This is buggy as it can cause discontinuities along simplex faces.  (0.5-x*x)^3 solves this and gives an almost identical curve\n\n    //  evaluate surflet. f(x)=(0.5-x*x)^3\n    vec4 surflet_weights = v1234_x * v1234_x + v1234_y * v1234_y + v1234_z * v1234_z;\n    surflet_weights = max(0.5 - surflet_weights, 0.0);      //  0.5 here represents the closest distance (squared) of any simplex pyramid corner to any of its planes.  ie, SIMPLEX_PYRAMID_HEIGHT^2\n    return surflet_weights*surflet_weights*surflet_weights;\n}\n\n\n\n//\n//  SimplexPerlin3D  ( simplex gradient noise )\n//  Perlin noise over a simplex (tetrahedron) grid\n//  Return value range of -1.0->1.0\n//  http://briansharpe.files.wordpress.com/2012/01/simplexperlinsample.jpg\n//\n//  Implementation originally based off Stefan Gustavsons and Ian McEwans work at...\n//  http://github.com/ashima/webgl-noise\n//\nfloat SimplexPerlin3D(vec3 P)\n{\n    //  calculate the simplex vector and index math\n    vec3 Pi;\n    vec3 Pi_1;\n    vec3 Pi_2;\n    vec4 v1234_x;\n    vec4 v1234_y;\n    vec4 v1234_z;\n    Simplex3D_GetCornerVectors( P, Pi, Pi_1, Pi_2, v1234_x, v1234_y, v1234_z );\n\n    //  generate the random vectors\n    //  ( various hashing methods listed in order of speed )\n    vec4 hash_0;\n    vec4 hash_1;\n    vec4 hash_2;\n    FAST32_hash_3D( Pi, Pi_1, Pi_2, hash_0, hash_1, hash_2 );\n    //SGPP_hash_3D( Pi, Pi_1, Pi_2, hash_0, hash_1, hash_2 );\n    hash_0 -= 0.49999;\n    hash_1 -= 0.49999;\n    hash_2 -= 0.49999;\n\n    //  evaluate gradients\n    vec4 grad_results = inversesqrt( hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2 ) * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z );\n\n    //  Normalization factor to scale the final result to a strict 1.0->-1.0 range\n    //  x = sqrt( 0.75 ) * 0.5\n    //  NF = 1.0 / ( x * ( ( 0.5 * x*x ) ^ 3 ) * 2.0 )\n    //  http://briansharpe.wordpress.com/2012/01/13/simplex-noise/#comment-36\n     float FINAL_NORMALIZATION = 37.837227241611314102871574478976*smoothness;\n\n    //  sum with the surflet and return\n    return dot( Simplex3D_GetSurfletWeights( v1234_x, v1234_y, v1234_z ), grad_results ) * FINAL_NORMALIZATION;\n}\n\nvoid main()\n{\n\n    vec2 p=vec2(texCoord.x-0.5,texCoord.y-0.5);\n\n    p.x*=aspect;\n\n\n    p=p*scale;\n\n    p=vec2(p.x+0.5-x,p.y+0.5-y);\n\n    vec3 offset;\n    #ifdef HAS_TEX_OFFSETMAP\n        vec4 offMap=texture(texOffsetZ,texCoord);\n\n        #ifdef OFFSET_X_R\n            offset.x=offMap.r;\n        #endif\n        #ifdef OFFSET_X_G\n            offset.x=offMap.g;\n        #endif\n        #ifdef OFFSET_X_B\n            offset.x=offMap.b;\n        #endif\n\n        #ifdef OFFSET_Y_R\n            offset.y=offMap.r;\n        #endif\n        #ifdef OFFSET_Y_G\n            offset.y=offMap.g;\n        #endif\n        #ifdef OFFSET_Y_B\n            offset.y=offMap.b;\n        #endif\n\n        #ifdef OFFSET_Z_R\n            offset.z=offMap.r;\n        #endif\n        #ifdef OFFSET_Z_G\n            offset.z=offMap.g;\n        #endif\n        #ifdef OFFSET_Z_B\n            offset.z=offMap.b;\n        #endif\n\n        offset*=offMul;\n    #endif\n\n    float v=SimplexPerlin3D(vec3(p.x,p.y,time)+offset)*0.5+0.5;\n\n\n    if (harmonics >= 2.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*2.3+offset) * 0.5;\n    if (harmonics >= 3.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*4.2+offset) * 0.25;\n    if (harmonics >= 4.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*8.1+offset) * 0.125;\n    if (harmonics >= 5.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*16.7+offset) * 0.0625;\n\n\n\n    //blend section\n    vec4 col=vec4(v,v,v,1.0);\n\n    vec4 base=texture(tex,texCoord);\n\n    // outColor=cgl_blend(base,col,amount);\n\n\n    float str=1.0;\n    #ifdef HAS_TEX_MASK\n        str=texture(texMask,texCoord).r;\n    #endif\n\n    outColor=cgl_blend(base,col,amount*str);\n\n}'
  })
  const n = e.inTrigger('render'),
    r = e.inTexture('Mask'),
    o = CGL1.TextureEffect.AddBlendSelect(e, 'Blend Mode', 'normal'),
    i = e.inValueSlider('Amount', 1),
    a = e.inValue('smoothness', 1),
    s = e.inSwitch('Harmonics', ['1', '2', '3', '4', '5'], '1'),
    l = e.inValue('scale', 1),
    c = e.inBool('Aspect', false),
    f = e.outTrigger('trigger'),
    u = e.inValue('x'),
    d = e.inValue('y'),
    g = e.inValue('time', 0.314)
  const p = e.inTexture('Offset'),
    m = e.inFloat('Offset Multiply', 1),
    x = e.inSwitch('Offset X', ['None', 'R', 'G', 'B'], 'None'),
    h = e.inSwitch('Offset Y', ['None', 'R', 'G', 'B'], 'None'),
    v = e.inSwitch('Offset Z', ['None', 'R', 'G', 'B'], 'R')
  e.setPortGroup('Offset Map', [p, v, h, x, m])
  const C = e.patch.cgl
  const _ = new CGL1.Shader(C, e.name, e)
  _.setSource(_.getDefaultVertexShader(), t.simplexnoise_frag)
  const O = new CGL1.Uniform(_, 't', 'tex', 0),
    S = new CGL1.Uniform(_, 't', 'texOffsetZ', 1),
    T = new CGL1.Uniform(_, 't', 'texMask', 2),
    b = new CGL1.Uniform(_, 'f', 'amount', i),
    E = new CGL1.Uniform(_, 'f', 'smoothness', a),
    L = new CGL1.Uniform(_, 'f', 'scale', l),
    A = new CGL1.Uniform(_, 'f', 'x', u),
    I = new CGL1.Uniform(_, 'f', 'y', d),
    G = new CGL1.Uniform(_, 'f', 'aspect', 1),
    P = new CGL1.Uniform(_, 'f', 'time', g),
    w = new CGL1.Uniform(_, 'f', 'offMul', m),
    M = new CGL1.Uniform(_, 'f', 'harmonics', 0)
  s.onChange = () => {
    M.setValue(parseFloat(s.get()))
  }
  CGL1.TextureEffect.setupBlending(e, _, o, i)
  x.onChange = h.onChange = v.onChange = r.onChange = p.onChange = y
  y()
  function y() {
    _.toggleDefine('HAS_TEX_OFFSETMAP', p.get())
    _.toggleDefine('HAS_TEX_MASK', r.get())
    _.toggleDefine('OFFSET_X_R', x.get() == 'R')
    _.toggleDefine('OFFSET_X_G', x.get() == 'G')
    _.toggleDefine('OFFSET_X_B', x.get() == 'B')
    _.toggleDefine('OFFSET_Y_R', h.get() == 'R')
    _.toggleDefine('OFFSET_Y_G', h.get() == 'G')
    _.toggleDefine('OFFSET_Y_B', h.get() == 'B')
    _.toggleDefine('OFFSET_Z_R', v.get() == 'R')
    _.toggleDefine('OFFSET_Z_G', v.get() == 'G')
    _.toggleDefine('OFFSET_Z_B', v.get() == 'B')
    x.setUiAttribs({ greyout: !p.isLinked() })
    h.setUiAttribs({ greyout: !p.isLinked() })
    v.setUiAttribs({ greyout: !p.isLinked() })
    m.setUiAttribs({ greyout: !p.isLinked() })
  }
  n.onTriggered = function () {
    if (!CGL1.TextureEffect.checkOpInEffect(e)) return
    C.pushShader(_)
    C.currentTextureEffect.bind()
    if (c.get()) G.setValue(C.currentTextureEffect.getWidth() / C.currentTextureEffect.getHeight())
    else G.setValue(1)
    C.setTexture(0, C.currentTextureEffect.getCurrentSourceTexture().tex)
    if (p.get()) C.setTexture(1, p.get().tex)
    if (r.get()) C.setTexture(2, r.get().tex)
    C.currentTextureEffect.finish()
    C.popShader()
    f.trigger()
  }
}
Ops.Gl.ImageCompose.Noise.SimplexNoise.prototype = new CABLES1.Op()
CABLES1.OPS['85b0d8e5-f417-4349-aa35-fe45a6698183'] = {
  f: Ops.Gl.ImageCompose.Noise.SimplexNoise,
  objName: 'Ops.Gl.ImageCompose.Noise.SimplexNoise'
}
Ops.Deprecated.Anim.RelativeTime = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {})
  const n = e.inTrigger('exe'),
    r = e.inValue('Multiply', 1),
    o = e.outTrigger('Trigger out'),
    i = e.outNumber('result')
  n.onTriggered = a
  a()
  function a() {
    i.set(e.patch.freeTimer.get() * r.get())
    o.trigger()
  }
}
Ops.Deprecated.Anim.RelativeTime.prototype = new CABLES1.Op()
CABLES1.OPS['917df27b-7cc3-465f-986d-bcf5a7e125a7'] = {
  f: Ops.Deprecated.Anim.RelativeTime,
  objName: 'Ops.Deprecated.Anim.RelativeTime'
}
Ops.Gl.ImageCompose.Noise.Noise = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {
    noise_frag:
      'IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float time;\n\n#ifdef HAS_MULMASK\n    UNI sampler2D texMul;\n#endif\n\n{{CGL1.BLENDMODES}}\n{{MODULES_HEAD}}\n\n{{CGL1.RANDOM_TEX}}\n\nvoid main()\n{\n    vec4 rnd;\n\n\n    #ifdef RGB\n        rnd=vec4(cgl_random3(texCoord.xy+vec2(time)),1.0);\n    #else\n        float r=cgl_random(texCoord.xy+vec2(time));\n        rnd=vec4( r,r,r,1.0 );\n    #endif\n\n    vec4 base=texture(tex,texCoord);\n    vec4 col=vec4( _blend(base.rgb,rnd.rgb) ,1.0);\n\n    #ifdef NORMALIZE\n        col.rgb=(col.rgb-0.5)*2.0;\n    #endif\n\n    #ifdef HAS_MULMASK\n        col.rgb*=texture(texMul,texCoord).rgb;\n    #endif\n\n    outColor=vec4( mix( col.rgb, base.rgb ,1.0-base.a*amount),1.0);\n}'
  })
  const n = e.inTrigger('Render'),
    r = CGL1.TextureEffect.AddBlendSelect(e, 'Blend Mode', 'normal'),
    o = e.inValueSlider('Amount', 1),
    i = e.inValueBool('Animated', true),
    a = e.inValueBool('RGB', false),
    s = e.inValueBool('Normalize', false),
    l = e.inTexture('Multiply'),
    c = e.outTrigger('Next')
  const f = e.patch.cgl,
    u = new CGL1.Shader(f, e.name),
    d = new CGL1.Uniform(u, 'f', 'amount', o),
    g = new CGL1.Uniform(u, 'f', 'time', 1),
    p = new CGL1.Uniform(u, 't', 'tex', 0),
    m = new CGL1.Uniform(u, 't', 'texMul', 1)
  u.setSource(u.getDefaultVertexShader(), t.noise_frag)
  CGL1.TextureEffect.setupBlending(e, u, r, o)
  e.toWorkPortsNeedToBeLinked(n)
  l.onChange =
    s.onChange =
    a.onChange =
      function () {
        u.toggleDefine('HAS_MULMASK', l.get())
        u.toggleDefine('RGB', a.get())
        u.toggleDefine('NORMALIZE', s.get())
      }
  n.onTriggered = function () {
    if (!CGL1.TextureEffect.checkOpInEffect(e)) return
    if (i.get()) g.setValue((e.patch.freeTimer.get() / 1e3) % 100)
    else g.setValue(0)
    f.pushShader(u)
    f.setTexture(0, f.currentTextureEffect.getCurrentSourceTexture().tex)
    if (l.get()) f.setTexture(1, l.get().tex)
    f.currentTextureEffect.bind()
    f.currentTextureEffect.finish()
    f.popShader()
    c.trigger()
  }
}
Ops.Gl.ImageCompose.Noise.Noise.prototype = new CABLES1.Op()
CABLES1.OPS['81253441-cc73-42fa-b903-6d23806873d9'] = {
  f: Ops.Gl.ImageCompose.Noise.Noise,
  objName: 'Ops.Gl.ImageCompose.Noise.Noise'
}
Ops.Math.Divide = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {})
  const n = e.inValueFloat('number1', 1),
    r = e.inValueFloat('number2', 2),
    o = e.outNumber('result')
  e.setUiAttribs({ mathTitle: true })
  n.onChange = r.onChange = i
  i()
  function i() {
    o.set(n.get() / r.get())
  }
}
Ops.Math.Divide.prototype = new CABLES1.Op()
CABLES1.OPS['86fcfd8c-038d-4b91-9820-a08114f6b7eb'] = { f: Ops.Math.Divide, objName: 'Ops.Math.Divide' }
Ops.Gl.ImageCompose.Pixelate = function () {
  CABLES1.Op.apply(this, arguments)
  const e = this
  const t = (e.attachments = {
    pixelate_frag:
      'IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D multiplierTex;\nUNI float amount;\nUNI float amountX;\nUNI float amountY;\n\n{{CGL1.BLENDMODES}}\n\nvoid main()\n{\n    vec4 col=vec4(1.0,0.0,0.0,1.0);\n\n    float x=1.0/amountX;\n    float y=1.0/amountY;\n\n    #ifdef PIXELATE_TEXTURE\n    x += texture(multiplierTex,texCoord).r*0.1;//*0.1\n    y += texture(multiplierTex,texCoord).r*0.1;//*0.1\n    #endif\n\n    vec2 coord = vec2(x*floor(texCoord.x/x), y*floor(texCoord.y/y));\n\n    col=texture(tex,coord);\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blend(base,col,amount);\n}'
  })
  const n = e.inTrigger('render'),
    r = e.inTexture('Multiplier'),
    o = CGL1.TextureEffect.AddBlendSelect(e, 'Blend Mode', 'normal'),
    i = e.inValueSlider('Amount', 1),
    a = e.inValue('width', 320),
    s = e.inValue('height', 180),
    l = e.outTrigger('trigger')
  const c = e.patch.cgl
  const f = new CGL1.Shader(c, e.name, e)
  f.setSource(f.getDefaultVertexShader(), t.pixelate_frag)
  const u = new CGL1.Uniform(f, 't', 'tex', 0)
  const d = new CGL1.Uniform(f, 't', 'multiplierTex', 1)
  const g = new CGL1.Uniform(f, 'f', 'amount', i)
  const p = new CGL1.Uniform(f, 'f', 'amountX', a)
  const m = new CGL1.Uniform(f, 'f', 'amountY', s)
  r.onChange = function () {
    f.toggleDefine('PIXELATE_TEXTURE', r.isLinked())
  }
  CGL1.TextureEffect.setupBlending(e, f, o, i)
  n.onTriggered = function () {
    if (!CGL1.TextureEffect.checkOpInEffect(e)) return
    c.pushShader(f)
    c.currentTextureEffect.bind()
    c.setTexture(0, c.currentTextureEffect.getCurrentSourceTexture().tex)
    if (r.get()) c.setTexture(1, r.get().tex)
    c.currentTextureEffect.finish()
    c.popShader()
    l.trigger()
  }
}
Ops.Gl.ImageCompose.Pixelate.prototype = new CABLES1.Op()
CABLES1.OPS['c76d3d21-e6d8-4b6c-af3d-0f0a5ecbdaa8'] = {
  f: Ops.Gl.ImageCompose.Pixelate,
  objName: 'Ops.Gl.ImageCompose.Pixelate'
}
Ops.Gl.MainLoop_v2 = function () {
  CABLES1.Op.apply(this, arguments)
  const n = this
  const e = (n.attachments = {})
  const t = n.inFloat('Max Pixel Density (DPR)', 2),
    r = n.inValue('FPS Limit', 0),
    o = n.inValueBool('Reduce FPS unfocussed', false),
    i = n.inValueBool('Transparent', false),
    a = n.inValueBool('Active', true),
    s = n.outTrigger('trigger'),
    l = n.outNumber('width'),
    c = n.outNumber('height'),
    f = n.outNumber('Pixel Density')
  n.onAnimFrame = b
  t.onChange = O
  const u = n.patch.cgl
  let d = 0
  let g = 0
  let p = null
  let m = false
  if (!n.patch.cgl) n.uiAttr({ error: 'No webgl cgl context' })
  const x = vec3.create()
  vec3.set(x, 0, 0, 0)
  const h = vec3.create()
  vec3.set(h, 0, 0, -2)
  let v = null
  let C = true
  let _ = true
  window.addEventListener('blur', () => {
    C = false
  })
  window.addEventListener('focus', () => {
    C = true
  })
  document.addEventListener('visibilitychange', () => {
    _ = !document.hidden
  })
  E()
  u.mainloopOp = this
  function O() {
    T()
    if (CABLES1.UI) {
      if (t.get() < 1) n.patch.cgl.canvas.style.imageRendering = 'pixelated'
    }
    n.patch.cgl.updateSize()
    if (CABLES1.UI) gui.setLayout()
  }
  a.onChange = function () {
    n.patch.removeOnAnimFrame(n)
    if (a.get()) {
      n.setUiAttrib({ extendTitle: '' })
      n.onAnimFrame = b
      n.patch.addOnAnimFrame(n)
      n.log('adding again!')
    } else {
      n.setUiAttrib({ extendTitle: 'Inactive' })
    }
  }
  function S() {
    if (o.get()) {
      if (!_) return 10
      if (!C) return 30
    }
    return r.get()
  }
  n.onDelete = function () {
    u.gl.clearColor(0, 0, 0, 0)
    u.gl.clear(u.gl.COLOR_BUFFER_BIT | u.gl.DEPTH_BUFFER_BIT)
  }
  function T() {
    if (t.get() != 0) n.patch.cgl.pixelDensity = Math.min(t.get(), window.devicePixelRatio)
    else n.patch.cgl.pixelDensity = window.devicePixelRatio
  }
  function b(e) {
    if (!a.get()) return
    if (u.aborted || u.canvas.clientWidth === 0 || u.canvas.clientHeight === 0) return
    n.patch.cg = u
    T()
    const t = performance.now()
    n.patch.config.fpsLimit = S()
    if (u.canvasWidth == -1) {
      u.setCanvas(n.patch.config.glCanvasId)
      return
    }
    if (u.canvasWidth != l.get() || u.canvasHeight != c.get()) {
      l.set(u.canvasWidth / 1)
      c.set(u.canvasHeight / 1)
    }
    if (CABLES1.now() - g > 1e3) {
      CGL1.fpsReport = CGL1.fpsReport || []
      if (n.patch.loading.getProgress() >= 1 && g !== 0) CGL1.fpsReport.push(d)
      d = 0
      g = CABLES1.now()
    }
    CGL1.MESH.lastShader = null
    CGL1.MESH.lastMesh = null
    u.renderStart(u, x, h)
    if (!i.get()) u.gl.clearColor(0, 0, 0, 1)
    else u.gl.clearColor(0, 0, 0, 0)
    u.gl.clear(u.gl.COLOR_BUFFER_BIT | u.gl.DEPTH_BUFFER_BIT)
    s.trigger()
    if (CGL1.MESH.lastMesh) CGL1.MESH.lastMesh.unBind()
    if (CGL1.Texture.previewTexture) {
      if (!CGL1.Texture.texturePreviewer) CGL1.Texture.texturePreviewer = new CGL1.Texture.texturePreview(u)
      CGL1.Texture.texturePreviewer.render(CGL1.Texture.previewTexture)
    }
    u.renderEnd(u)
    n.patch.cg = null
    if (!i.get()) {
      u.gl.clearColor(1, 1, 1, 1)
      u.gl.colorMask(false, false, false, true)
      u.gl.clear(u.gl.COLOR_BUFFER_BIT)
      u.gl.colorMask(true, true, true, true)
    }
    if (!u.frameStore.phong) u.frameStore.phong = {}
    d++
    f.set(n.patch.cgl.pixelDensity)
    n.patch.cgl.profileData.profileMainloopMs = performance.now() - t
  }
  function E() {
    clearTimeout(p)
    p = setTimeout(() => {
      if (n.patch.getOpsByObjName(n.name).length > 1) {
        n.setUiError('multimainloop', 'there should only be one mainloop op!')
        if (!m) m = n.patch.addEventListener('onOpDelete', E)
      } else n.setUiError('multimainloop', null, 1)
    }, 500)
  }
}
Ops.Gl.MainLoop_v2.prototype = new CABLES1.Op()
CABLES1.OPS['f1029550-d877-42da-9b1e-63a5163a0350'] = { f: Ops.Gl.MainLoop_v2, objName: 'Ops.Gl.MainLoop_v2' }
window.addEventListener('load', function (e) {
  CABLES1.jsLoaded = new Event('CABLES1.jsLoaded')
  document.dispatchEvent(CABLES1.jsLoaded)
})
