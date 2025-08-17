function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
function _awaitAsyncGenerator(value) { return new _OverloadYield(value, 0); }
function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }
function _AsyncGenerator(gen) { var front, back; function resume(key, arg) { try { var result = gen[key](arg), value = result.value, overloaded = value instanceof _OverloadYield; Promise.resolve(overloaded ? value.v : value).then(function (arg) { if (overloaded) { var nextKey = "return" === key ? "return" : "next"; if (!value.k || arg.done) return resume(nextKey, arg); arg = gen[nextKey](arg).value; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: !0 }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: !1 }); } (front = front.next) ? resume(front.key, front.arg) : back = null; } this._invoke = function (key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; back ? back = back.next = request : (front = back = request, resume(key, arg)); }); }, "function" != typeof gen["return"] && (this["return"] = void 0); }
_AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; }, _AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); }, _AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); }, _AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };
function _OverloadYield(value, kind) { this.v = value, this.k = kind; }
// src/browser.ts
var EdgeTTSBrowser = /*#__PURE__*/function () {
  /**
   * @param text The text to be synthesized.
   * @param voice The voice to use for synthesis.
   * @param options Prosody options (rate, volume, pitch).
   */
  function EdgeTTSBrowser(text) {
    var voice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Microsoft Server Speech Text to Speech Voice (en-US, EmmaMultilingualNeural)";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, EdgeTTSBrowser);
    this.ws = null;
    this.WSS_URL = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";
    this.TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
    this.text = text;
    this.voice = voice;
    this.rate = options.rate || "+0%";
    this.volume = options.volume || "+0%";
    this.pitch = options.pitch || "+0Hz";
  }
  /**
   * Initiates the synthesis process.
   * @returns A promise that resolves with the synthesized audio and subtitle data.
   */
  _createClass(EdgeTTSBrowser, [{
    key: "synthesize",
    value: function () {
      var _synthesize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.connect();
            case 2:
              if (!(!this.ws || this.ws.readyState !== WebSocket.OPEN)) {
                _context.next = 4;
                break;
              }
              throw new Error("WebSocket is not connected.");
            case 4:
              this.ws.send(this.createSpeechConfig());
              this.ws.send(this.createSSML());
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                var audioChunks = [];
                var wordBoundaries = [];
                if (_this3.ws) {
                  _this3.ws.onmessage = function (event) {
                    if (typeof event.data === "string") {
                      var _this3$parseMessage = _this3.parseMessage(event.data),
                        headers = _this3$parseMessage.headers,
                        body = _this3$parseMessage.body;
                      if (headers.Path === "audio.metadata") {
                        try {
                          var metadata = JSON.parse(body);
                          if (metadata.Metadata && Array.isArray(metadata.Metadata)) {
                            var boundaries = metadata.Metadata.filter(function (item) {
                              return item.Type === "WordBoundary" && item.Data;
                            }).map(function (item) {
                              return {
                                offset: item.Data.Offset,
                                duration: item.Data.Duration,
                                text: item.Data.text.Text
                              };
                            });
                            wordBoundaries = wordBoundaries.concat(boundaries);
                          }
                        } catch (e) {}
                      } else if (headers.Path === "turn.end") {
                        if (_this3.ws) _this3.ws.close();
                      }
                    } else if (event.data instanceof Blob) {
                      event.data.arrayBuffer().then(function (arrayBuffer) {
                        var dataView = new DataView(arrayBuffer);
                        var headerLength = dataView.getUint16(0);
                        if (arrayBuffer.byteLength > headerLength + 2) {
                          var audioData = new Uint8Array(arrayBuffer, headerLength + 2);
                          audioChunks.push(audioData);
                        }
                      });
                    }
                  };
                  _this3.ws.onclose = function () {
                    var audioBlob = new Blob(audioChunks, {
                      type: "audio/mpeg"
                    });
                    resolve({
                      audio: audioBlob,
                      subtitle: wordBoundaries
                    });
                  };
                  _this3.ws.onerror = function (error) {
                    reject(error);
                  };
                }
              }));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function synthesize() {
        return _synthesize.apply(this, arguments);
      }
      return synthesize;
    }()
    /**
     * Establishes a connection to the WebSocket server.
     */
  }, {
    key: "connect",
    value: function connect() {
      var _this4 = this;
      var connectionId = this.generateConnectionId();
      var secMsGec = this.generateSecMsGec();
      var url = "".concat(this.WSS_URL, "?TrustedClientToken=").concat(this.TRUSTED_CLIENT_TOKEN, "&ConnectionId=").concat(connectionId, "&Sec-MS-GEC=").concat(secMsGec, "&Sec-MS-GEC-Version=1-130.0.2849.68");
      this.ws = new WebSocket(url);
      return new Promise(function (resolve, reject) {
        if (!_this4.ws) {
          return reject(new Error("WebSocket not initialized"));
        }
        _this4.ws.onopen = function () {
          resolve();
        };
        _this4.ws.onerror = function (error) {
          reject(error);
        };
      });
    }
    /**
     * Parses a string message from the WebSocket into headers and a body.
     */
  }, {
    key: "parseMessage",
    value: function parseMessage(message) {
      var parts = message.split("\r\n\r\n");
      var headerLines = parts[0].split("\r\n");
      var headers = {};
      headerLines.forEach(function (line) {
        var _line$split = line.split(":", 2),
          _line$split2 = _slicedToArray(_line$split, 2),
          key = _line$split2[0],
          value = _line$split2[1];
        if (key && value) {
          headers[key.trim()] = value.trim();
        }
      });
      return {
        headers: headers,
        body: parts[1] || ""
      };
    }
    /**
     * Creates the speech configuration message.
     */
  }, {
    key: "createSpeechConfig",
    value: function createSpeechConfig() {
      var config = {
        context: {
          synthesis: {
            audio: {
              metadataoptions: {
                sentenceBoundaryEnabled: false,
                wordBoundaryEnabled: true
              },
              outputFormat: "audio-24khz-48kbitrate-mono-mp3"
            }
          }
        }
      };
      return "X-Timestamp:".concat(this.getTimestamp(), "\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n").concat(JSON.stringify(config));
    }
    /**
     * Creates the SSML (Speech Synthesis Markup Language) message.
     */
  }, {
    key: "createSSML",
    value: function createSSML() {
      var ssml = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>\n      <voice name='".concat(this.voice, "'>\n        <prosody pitch='").concat(this.pitch, "' rate='").concat(this.rate, "' volume='").concat(this.volume, "'>\n          ").concat(this.escapeXml(this.text), "\n        </prosody>\n      </voice>\n    </speak>");
      return "X-RequestId:".concat(this.generateConnectionId(), "\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:").concat(this.getTimestamp(), "Z\r\nPath:ssml\r\n\r\n").concat(ssml);
    }
  }, {
    key: "generateConnectionId",
    value: function generateConnectionId() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    }
  }, {
    key: "getTimestamp",
    value: function getTimestamp() {
      return /* @__PURE__ */new Date().toISOString().replace(/[:-]|\.\d{3}/g, "");
    }
  }, {
    key: "escapeXml",
    value: function escapeXml(text) {
      return text.replace(/[<>&'"]/g, function (_char) {
        switch (_char) {
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case "&":
            return "&amp;";
          case "'":
            return "&apos;";
          case '"':
            return "&quot;";
          default:
            return _char;
        }
      });
    }
    /**
     * Browser-compatible version of DRM security token generation
     * Uses Web Crypto API instead of Node.js crypto
     */
  }, {
    key: "generateSecMsGec",
    value: function () {
      var _generateSecMsGec = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var WIN_EPOCH2, S_TO_NS2, ticks, strToHash, encoder, data, hashBuffer, hashArray;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              WIN_EPOCH2 = 11644473600;
              S_TO_NS2 = 1e9;
              ticks = Date.now() / 1e3;
              ticks += WIN_EPOCH2;
              ticks -= ticks % 300;
              ticks *= S_TO_NS2 / 100;
              strToHash = "".concat(ticks.toFixed(0)).concat(this.TRUSTED_CLIENT_TOKEN);
              encoder = new TextEncoder();
              data = encoder.encode(strToHash);
              _context2.next = 11;
              return crypto.subtle.digest("SHA-256", data);
            case 11:
              hashBuffer = _context2.sent;
              hashArray = Array.from(new Uint8Array(hashBuffer));
              return _context2.abrupt("return", hashArray.map(function (b) {
                return b.toString(16).padStart(2, "0");
              }).join("").toUpperCase());
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function generateSecMsGec() {
        return _generateSecMsGec.apply(this, arguments);
      }
      return generateSecMsGec;
    }()
  }]);
  return EdgeTTSBrowser;
}();

// src/browser-utils.ts
function browserConnectId() {
  var array = new Uint8Array(16);
  crypto.getRandomValues(array);
  array[6] = array[6] & 15 | 64;
  array[8] = array[8] & 63 | 128;
  var hex = Array.from(array, function (_byte) {
    return _byte.toString(16).padStart(2, "0");
  }).join("");
  var uuid = "".concat(hex.slice(0, 8), "-").concat(hex.slice(8, 12), "-").concat(hex.slice(12, 16), "-").concat(hex.slice(16, 20), "-").concat(hex.slice(20, 32));
  return uuid.replace(/-/g, "");
}
function browserEscape(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function browserUnescape(text) {
  return text.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function browserRemoveIncompatibleCharacters(text) {
  return text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, " ");
}
function browserDateToString() {
  return /* @__PURE__ */new Date().toUTCString().replace("GMT", "GMT+0000 (Coordinated Universal Time)");
}
function browserMkssml(voice, rate, volume, pitch, escapedText) {
  return "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='".concat(voice, "'><prosody pitch='").concat(pitch, "' rate='").concat(rate, "' volume='").concat(volume, "'>").concat(escapedText, "</prosody></voice></speak>");
}
function browserSsmlHeadersPlusData(requestId, timestamp, ssml) {
  return "X-RequestId:".concat(requestId, "\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:").concat(timestamp, "Z\r\nPath:ssml\r\n\r\n").concat(ssml);
}
function browserCalcMaxMesgSize(voice, rate, volume, pitch) {
  var websocketMaxSize = Math.pow(2, 16);
  var overheadPerMessage = browserSsmlHeadersPlusData(browserConnectId(), browserDateToString(), browserMkssml(voice, rate, volume, pitch, "")).length + 50;
  return websocketMaxSize - overheadPerMessage;
}

// src/exceptions.ts
var EdgeTTSException = /*#__PURE__*/function (_Error) {
  _inherits(EdgeTTSException, _Error);
  var _super = _createSuper(EdgeTTSException);
  function EdgeTTSException(message) {
    var _this5;
    _classCallCheck(this, EdgeTTSException);
    _this5 = _super.call(this, message);
    _this5.name = "EdgeTTSException";
    return _this5;
  }
  return _createClass(EdgeTTSException);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var SkewAdjustmentError = /*#__PURE__*/function (_EdgeTTSException) {
  _inherits(SkewAdjustmentError, _EdgeTTSException);
  var _super2 = _createSuper(SkewAdjustmentError);
  function SkewAdjustmentError(message) {
    var _this6;
    _classCallCheck(this, SkewAdjustmentError);
    _this6 = _super2.call(this, message);
    _this6.name = "SkewAdjustmentError";
    return _this6;
  }
  return _createClass(SkewAdjustmentError);
}(EdgeTTSException);
var UnknownResponse = /*#__PURE__*/function (_EdgeTTSException2) {
  _inherits(UnknownResponse, _EdgeTTSException2);
  var _super3 = _createSuper(UnknownResponse);
  function UnknownResponse(message) {
    var _this7;
    _classCallCheck(this, UnknownResponse);
    _this7 = _super3.call(this, message);
    _this7.name = "UnknownResponse";
    return _this7;
  }
  return _createClass(UnknownResponse);
}(EdgeTTSException);
var UnexpectedResponse = /*#__PURE__*/function (_EdgeTTSException3) {
  _inherits(UnexpectedResponse, _EdgeTTSException3);
  var _super4 = _createSuper(UnexpectedResponse);
  function UnexpectedResponse(message) {
    var _this8;
    _classCallCheck(this, UnexpectedResponse);
    _this8 = _super4.call(this, message);
    _this8.name = "UnexpectedResponse";
    return _this8;
  }
  return _createClass(UnexpectedResponse);
}(EdgeTTSException);
var NoAudioReceived = /*#__PURE__*/function (_EdgeTTSException4) {
  _inherits(NoAudioReceived, _EdgeTTSException4);
  var _super5 = _createSuper(NoAudioReceived);
  function NoAudioReceived(message) {
    var _this9;
    _classCallCheck(this, NoAudioReceived);
    _this9 = _super5.call(this, message);
    _this9.name = "NoAudioReceived";
    return _this9;
  }
  return _createClass(NoAudioReceived);
}(EdgeTTSException);
var WebSocketError = /*#__PURE__*/function (_EdgeTTSException5) {
  _inherits(WebSocketError, _EdgeTTSException5);
  var _super6 = _createSuper(WebSocketError);
  function WebSocketError(message) {
    var _this10;
    _classCallCheck(this, WebSocketError);
    _this10 = _super6.call(this, message);
    _this10.name = "WebSocketError";
    return _this10;
  }
  return _createClass(WebSocketError);
}(EdgeTTSException);
var ValueError = /*#__PURE__*/function (_EdgeTTSException6) {
  _inherits(ValueError, _EdgeTTSException6);
  var _super7 = _createSuper(ValueError);
  function ValueError(message) {
    var _this11;
    _classCallCheck(this, ValueError);
    _this11 = _super7.call(this, message);
    _this11.name = "ValueError";
    return _this11;
  }
  return _createClass(ValueError);
}(EdgeTTSException);

// src/tts_config.ts
var TTSConfig = /*#__PURE__*/function () {
  /**
   * Creates a new TTSConfig instance with the specified parameters.
   * 
   * @param options - Configuration options
   * @param options.voice - Voice name (supports both short and full formats)
   * @param options.rate - Speech rate adjustment (default: "+0%")
   * @param options.volume - Volume adjustment (default: "+0%") 
   * @param options.pitch - Pitch adjustment (default: "+0Hz")
   * @throws {ValueError} If any parameter has an invalid format
   */
  function _TTSConfig(_ref) {
    var voice = _ref.voice,
      _ref$rate = _ref.rate,
      rate = _ref$rate === void 0 ? "+0%" : _ref$rate,
      _ref$volume = _ref.volume,
      volume = _ref$volume === void 0 ? "+0%" : _ref$volume,
      _ref$pitch = _ref.pitch,
      pitch = _ref$pitch === void 0 ? "+0Hz" : _ref$pitch;
    _classCallCheck(this, _TTSConfig);
    this.voice = voice;
    this.rate = rate;
    this.volume = volume;
    this.pitch = pitch;
    this.validate();
  }
  _createClass(_TTSConfig, [{
    key: "validate",
    value: function validate() {
      var match = /^([a-z]{2,})-([A-Z]{2,})-(.+Neural)$/.exec(this.voice);
      if (match) {
        var _match = _slicedToArray(match, 2),
          lang = _match[1];
        var _match2 = _slicedToArray(match, 4),
          region = _match2[2],
          name = _match2[3];
        if (name.includes("-")) {
          var parts = name.split("-");
          region += "-".concat(parts[0]);
          name = parts[1];
        }
        this.voice = "Microsoft Server Speech Text to Speech Voice (".concat(lang, "-").concat(region, ", ").concat(name, ")");
      }
      _TTSConfig.validateStringParam("voice", this.voice, /^Microsoft Server Speech Text to Speech Voice \(.+,.+\)$/);
      _TTSConfig.validateStringParam("rate", this.rate, /^[+-]\d+%$/);
      _TTSConfig.validateStringParam("volume", this.volume, /^[+-]\d+%$/);
      _TTSConfig.validateStringParam("pitch", this.pitch, /^[+-]\d+Hz$/);
    }
  }], [{
    key: "validateStringParam",
    value: function validateStringParam(paramName, paramValue, pattern) {
      if (typeof paramValue !== "string") {
        throw new TypeError("".concat(paramName, " must be a string"));
      }
      if (!pattern.test(paramValue)) {
        throw new ValueError("Invalid ".concat(paramName, " '").concat(paramValue, "'."));
      }
    }
  }]);
  return _TTSConfig;
}();

// src/constants.ts
var BASE_URL = "speech.platform.bing.com/consumer/speech/synthesize/readaloud";
var TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
var WSS_URL = "wss://".concat(BASE_URL, "/edge/v1?TrustedClientToken=").concat(TRUSTED_CLIENT_TOKEN);
var VOICE_LIST_URL = "https://".concat(BASE_URL, "/voices/list?trustedclienttoken=").concat(TRUSTED_CLIENT_TOKEN);
var DEFAULT_VOICE = "en-US-EmmaMultilingualNeural";
var CHROMIUM_FULL_VERSION = "130.0.2849.68";
var CHROMIUM_MAJOR_VERSION = CHROMIUM_FULL_VERSION.split(".")[0];
var SEC_MS_GEC_VERSION = "1-".concat(CHROMIUM_FULL_VERSION);
var BASE_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/".concat(CHROMIUM_MAJOR_VERSION, ".0.0.0 Safari/537.36 Edg/").concat(CHROMIUM_MAJOR_VERSION, ".0.0.0"),
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "en-US,en;q=0.9"
};
var VOICE_HEADERS = _objectSpread(_objectSpread({}, BASE_HEADERS), {}, {
  "Authority": "speech.platform.bing.com",
  "Sec-CH-UA": "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"".concat(CHROMIUM_MAJOR_VERSION, "\", \"Chromium\";v=\"").concat(CHROMIUM_MAJOR_VERSION, "\""),
  "Sec-CH-UA-Mobile": "?0",
  "Accept": "*/*",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty"
});

// src/browser-drm.ts
var WIN_EPOCH = 11644473600;
var S_TO_NS = 1e9;
var _BrowserDRM = /*#__PURE__*/function () {
  function _BrowserDRM() {
    _classCallCheck(this, _BrowserDRM);
  }
  _createClass(_BrowserDRM, null, [{
    key: "adjClockSkewSeconds",
    value: function adjClockSkewSeconds(skewSeconds) {
      _BrowserDRM.clockSkewSeconds += skewSeconds;
    }
  }, {
    key: "getUnixTimestamp",
    value: function getUnixTimestamp() {
      return Date.now() / 1e3 + _BrowserDRM.clockSkewSeconds;
    }
  }, {
    key: "parseRfc2616Date",
    value: function parseRfc2616Date(date) {
      try {
        return new Date(date).getTime() / 1e3;
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "handleClientResponseError",
    value: function handleClientResponseError(response) {
      if (!response.headers) {
        throw new SkewAdjustmentError("No headers in response.");
      }
      var serverDate = response.headers["date"] || response.headers["Date"];
      if (!serverDate) {
        throw new SkewAdjustmentError("No server date in headers.");
      }
      var serverDateParsed = _BrowserDRM.parseRfc2616Date(serverDate);
      if (serverDateParsed === null) {
        throw new SkewAdjustmentError("Failed to parse server date: ".concat(serverDate));
      }
      var clientDate = _BrowserDRM.getUnixTimestamp();
      _BrowserDRM.adjClockSkewSeconds(serverDateParsed - clientDate);
    }
  }, {
    key: "generateSecMsGec",
    value: function () {
      var _generateSecMsGec2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var ticks, strToHash, encoder, data, hashBuffer, hashArray;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              ticks = _BrowserDRM.getUnixTimestamp();
              ticks += WIN_EPOCH;
              ticks -= ticks % 300;
              ticks *= S_TO_NS / 100;
              strToHash = "".concat(ticks.toFixed(0)).concat(TRUSTED_CLIENT_TOKEN);
              encoder = new TextEncoder();
              data = encoder.encode(strToHash);
              _context3.next = 9;
              return crypto.subtle.digest("SHA-256", data);
            case 9:
              hashBuffer = _context3.sent;
              hashArray = Array.from(new Uint8Array(hashBuffer));
              return _context3.abrupt("return", hashArray.map(function (b) {
                return b.toString(16).padStart(2, "0");
              }).join("").toUpperCase());
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function generateSecMsGec() {
        return _generateSecMsGec2.apply(this, arguments);
      }
      return generateSecMsGec;
    }()
  }]);
  return _BrowserDRM;
}();
_BrowserDRM.clockSkewSeconds = 0;
var BrowserDRM = _BrowserDRM;

// src/browser-communicate.ts
var BrowserBuffer = /*#__PURE__*/function () {
  function BrowserBuffer() {
    _classCallCheck(this, BrowserBuffer);
  }
  _createClass(BrowserBuffer, null, [{
    key: "from",
    value: function from(input, encoding) {
      if (typeof input === "string") {
        return new TextEncoder().encode(input);
      } else if (input instanceof ArrayBuffer) {
        return new Uint8Array(input);
      } else if (input instanceof Uint8Array) {
        return input;
      }
      throw new Error("Unsupported input type for BrowserBuffer.from");
    }
  }, {
    key: "concat",
    value: function concat(arrays) {
      var totalLength = arrays.reduce(function (sum, arr) {
        return sum + arr.length;
      }, 0);
      var result = new Uint8Array(totalLength);
      var offset = 0;
      var _iterator3 = _createForOfIteratorHelper(arrays),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var arr = _step3.value;
          result.set(arr, offset);
          offset += arr.length;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return result;
    }
  }]);
  return BrowserBuffer;
}();
function browserGetHeadersAndDataFromText(message) {
  var messageString = new TextDecoder().decode(message);
  var headerEndIndex = messageString.indexOf("\r\n\r\n");
  var headers = {};
  if (headerEndIndex !== -1) {
    var headerString = messageString.substring(0, headerEndIndex);
    var headerLines = headerString.split("\r\n");
    var _iterator4 = _createForOfIteratorHelper(headerLines),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var line = _step4.value;
        var _line$split3 = line.split(":", 2),
          _line$split4 = _slicedToArray(_line$split3, 2),
          key = _line$split4[0],
          value = _line$split4[1];
        if (key && value) {
          headers[key] = value.trim();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  var headerByteLength = new TextEncoder().encode(messageString.substring(0, headerEndIndex + 4)).length;
  return [headers, message.slice(headerByteLength)];
}
function browserGetHeadersAndDataFromBinary(message) {
  if (message.length < 2) {
    throw new Error("Message too short to contain header length");
  }
  var headerLength = message[0] << 8 | message[1];
  var headers = {};
  if (headerLength > 0 && headerLength + 2 <= message.length) {
    var headerBytes = message.slice(2, headerLength + 2);
    var headerString = new TextDecoder().decode(headerBytes);
    var headerLines = headerString.split("\r\n");
    var _iterator5 = _createForOfIteratorHelper(headerLines),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var line = _step5.value;
        var _line$split5 = line.split(":", 2),
          _line$split6 = _slicedToArray(_line$split5, 2),
          key = _line$split6[0],
          value = _line$split6[1];
        if (key && value) {
          headers[key] = value.trim();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  return [headers, message.slice(headerLength + 2)];
}
function browserSplitTextByByteLength(text, byteLength) {
  return /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var buffer, splitAt, slice, sliceText, lastNewline, lastSpace, chunk, chunkText, remainingText;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          buffer = new TextEncoder().encode(text);
          if (!(byteLength <= 0)) {
            _context4.next = 3;
            break;
          }
          throw new Error("byteLength must be greater than 0");
        case 3:
          if (!(buffer.length > byteLength)) {
            _context4.next = 18;
            break;
          }
          splitAt = byteLength;
          slice = buffer.slice(0, byteLength);
          sliceText = new TextDecoder().decode(slice);
          lastNewline = sliceText.lastIndexOf("\n");
          lastSpace = sliceText.lastIndexOf(" ");
          if (lastNewline > 0) {
            splitAt = new TextEncoder().encode(sliceText.substring(0, lastNewline)).length;
          } else if (lastSpace > 0) {
            splitAt = new TextEncoder().encode(sliceText.substring(0, lastSpace)).length;
          }
          chunk = buffer.slice(0, splitAt);
          chunkText = new TextDecoder().decode(chunk).trim();
          if (!chunkText) {
            _context4.next = 15;
            break;
          }
          _context4.next = 15;
          return new TextEncoder().encode(chunkText);
        case 15:
          buffer = buffer.slice(splitAt);
          _context4.next = 3;
          break;
        case 18:
          remainingText = new TextDecoder().decode(buffer).trim();
          if (!remainingText) {
            _context4.next = 22;
            break;
          }
          _context4.next = 22;
          return new TextEncoder().encode(remainingText);
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })();
}
var BrowserCommunicate = /*#__PURE__*/function () {
  /**
   * Creates a new browser Communicate instance for text-to-speech synthesis.
   * 
   * @param text - The text to synthesize
   * @param options - Configuration options for synthesis
   */
  function BrowserCommunicate(text) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, BrowserCommunicate);
    this.state = {
      partialText: BrowserBuffer.from(""),
      offsetCompensation: 0,
      lastDurationOffset: 0,
      streamWasCalled: false
    };
    this.ttsConfig = new TTSConfig({
      voice: options.voice || DEFAULT_VOICE,
      rate: options.rate,
      volume: options.volume,
      pitch: options.pitch
    });
    if (typeof text !== "string") {
      throw new TypeError("text must be a string");
    }
    this.texts = browserSplitTextByByteLength(browserEscape(browserRemoveIncompatibleCharacters(text)), browserCalcMaxMesgSize(this.ttsConfig.voice, this.ttsConfig.rate, this.ttsConfig.volume, this.ttsConfig.pitch));
    this.connectionTimeout = options.connectionTimeout;
  }
  _createClass(BrowserCommunicate, [{
    key: "parseMetadata",
    value: function parseMetadata(data) {
      var metadata = JSON.parse(new TextDecoder().decode(data));
      var _iterator6 = _createForOfIteratorHelper(metadata["Metadata"]),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var metaObj = _step6.value;
          var metaType = metaObj["Type"];
          if (metaType === "WordBoundary") {
            var currentOffset = metaObj["Data"]["Offset"] + this.state.offsetCompensation;
            var currentDuration = metaObj["Data"]["Duration"];
            return {
              type: metaType,
              offset: currentOffset,
              duration: currentDuration,
              text: browserUnescape(metaObj["Data"]["text"]["Text"])
            };
          }
          if (metaType === "SessionEnd") {
            continue;
          }
          throw new UnknownResponse("Unknown metadata type: ".concat(metaType));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      throw new UnexpectedResponse("No WordBoundary metadata found");
    }
  }, {
    key: "_stream",
    value: function _stream() {
      var _this = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var url, websocket, messageQueue, resolveMessage, timeoutId, audioWasReceived, message;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = "".concat(WSS_URL, "&Sec-MS-GEC=");
              _context5.next = 3;
              return _awaitAsyncGenerator(BrowserDRM.generateSecMsGec());
            case 3:
              _context5.t1 = _context5.sent;
              url = _context5.t0.concat.call(_context5.t0, _context5.t1, "&Sec-MS-GEC-Version=").concat(SEC_MS_GEC_VERSION, "&ConnectionId=").concat(browserConnectId());
              websocket = new WebSocket(url);
              messageQueue = [];
              resolveMessage = null;
              if (_this.connectionTimeout) {
                timeoutId = window.setTimeout(function () {
                  websocket.close();
                  messageQueue.push(new WebSocketError("Connection timeout"));
                  if (resolveMessage) resolveMessage();
                }, _this.connectionTimeout);
              }
              websocket.onmessage = function (event) {
                if (timeoutId) {
                  window.clearTimeout(timeoutId);
                  timeoutId = void 0;
                }
                var data = event.data;
                if (typeof data === "string") {
                  var _browserGetHeadersAnd = browserGetHeadersAndDataFromText(BrowserBuffer.from(data)),
                    _browserGetHeadersAnd2 = _slicedToArray(_browserGetHeadersAnd, 2),
                    headers = _browserGetHeadersAnd2[0],
                    parsedData = _browserGetHeadersAnd2[1];
                  var path = headers["Path"];
                  if (path === "audio.metadata") {
                    try {
                      var parsedMetadata = _this.parseMetadata(parsedData);
                      _this.state.lastDurationOffset = parsedMetadata.offset + parsedMetadata.duration;
                      messageQueue.push(parsedMetadata);
                    } catch (e) {
                      messageQueue.push(e);
                    }
                  } else if (path === "turn.end") {
                    _this.state.offsetCompensation = _this.state.lastDurationOffset;
                    websocket.close();
                  } else if (path !== "response" && path !== "turn.start") {
                    messageQueue.push(new UnknownResponse("Unknown path received: ".concat(path)));
                  }
                } else if (data instanceof ArrayBuffer) {
                  var bufferData = BrowserBuffer.from(data);
                  if (bufferData.length < 2) {
                    messageQueue.push(new UnexpectedResponse("We received a binary message, but it is missing the header length."));
                  } else {
                    var _browserGetHeadersAnd3 = browserGetHeadersAndDataFromBinary(bufferData),
                      _browserGetHeadersAnd4 = _slicedToArray(_browserGetHeadersAnd3, 2),
                      _headers = _browserGetHeadersAnd4[0],
                      audioData = _browserGetHeadersAnd4[1];
                    if (_headers["Path"] !== "audio") {
                      messageQueue.push(new UnexpectedResponse("Received binary message, but the path is not audio."));
                    } else {
                      var contentType = _headers["Content-Type"];
                      if (contentType !== "audio/mpeg") {
                        if (audioData.length > 0) {
                          messageQueue.push(new UnexpectedResponse("Received binary message, but with an unexpected Content-Type."));
                        }
                      } else if (audioData.length === 0) {
                        messageQueue.push(new UnexpectedResponse("Received binary message, but it is missing the audio data."));
                      } else {
                        messageQueue.push({
                          type: "audio",
                          data: audioData
                        });
                      }
                    }
                  }
                } else if (data instanceof Blob) {
                  data.arrayBuffer().then(function (arrayBuffer) {
                    var bufferData = BrowserBuffer.from(arrayBuffer);
                    if (bufferData.length < 2) {
                      messageQueue.push(new UnexpectedResponse("We received a binary message, but it is missing the header length."));
                    } else {
                      var _browserGetHeadersAnd5 = browserGetHeadersAndDataFromBinary(bufferData),
                        _browserGetHeadersAnd6 = _slicedToArray(_browserGetHeadersAnd5, 2),
                        _headers2 = _browserGetHeadersAnd6[0],
                        _audioData = _browserGetHeadersAnd6[1];
                      if (_headers2["Path"] !== "audio") {
                        messageQueue.push(new UnexpectedResponse("Received binary message, but the path is not audio."));
                      } else {
                        var _contentType = _headers2["Content-Type"];
                        if (_contentType !== "audio/mpeg") {
                          if (_audioData.length > 0) {
                            messageQueue.push(new UnexpectedResponse("Received binary message, but with an unexpected Content-Type."));
                          }
                        } else if (_audioData.length === 0) {
                          messageQueue.push(new UnexpectedResponse("Received binary message, but it is missing the audio data."));
                        } else {
                          messageQueue.push({
                            type: "audio",
                            data: _audioData
                          });
                        }
                      }
                    }
                    if (resolveMessage) resolveMessage();
                  });
                }
                if (resolveMessage) resolveMessage();
              };
              websocket.onerror = function (error) {
                if (timeoutId) {
                  window.clearTimeout(timeoutId);
                  timeoutId = void 0;
                }
                messageQueue.push(new WebSocketError("WebSocket error occurred"));
                if (resolveMessage) resolveMessage();
              };
              websocket.onclose = function () {
                if (timeoutId) {
                  window.clearTimeout(timeoutId);
                  timeoutId = void 0;
                }
                messageQueue.push("close");
                if (resolveMessage) resolveMessage();
              };
              _context5.next = 14;
              return _awaitAsyncGenerator(new Promise(function (resolve, reject) {
                websocket.onopen = function () {
                  if (timeoutId) {
                    window.clearTimeout(timeoutId);
                    timeoutId = void 0;
                  }
                  resolve();
                };
                if (_this.connectionTimeout) {
                  setTimeout(function () {
                    if (websocket.readyState === WebSocket.CONNECTING) {
                      websocket.close();
                      reject(new WebSocketError("Connection timeout"));
                    }
                  }, _this.connectionTimeout);
                }
              }));
            case 14:
              websocket.send("X-Timestamp:".concat(browserDateToString(), "\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{\"context\":{\"synthesis\":{\"audio\":{\"metadataoptions\":{\"sentenceBoundaryEnabled\":\"false\",\"wordBoundaryEnabled\":\"true\"},\"outputFormat\":\"audio-24khz-48kbitrate-mono-mp3\"}}}}\r\n"));
              websocket.send(browserSsmlHeadersPlusData(browserConnectId(), browserDateToString(), browserMkssml(_this.ttsConfig.voice, _this.ttsConfig.rate, _this.ttsConfig.volume, _this.ttsConfig.pitch, new TextDecoder().decode(_this.state.partialText))));
              audioWasReceived = false;
            case 17:
              if (!true) {
                _context5.next = 39;
                break;
              }
              if (!(messageQueue.length > 0)) {
                _context5.next = 35;
                break;
              }
              message = messageQueue.shift();
              if (!(message === "close")) {
                _context5.next = 26;
                break;
              }
              if (audioWasReceived) {
                _context5.next = 23;
                break;
              }
              throw new NoAudioReceived("No audio was received.");
            case 23:
              return _context5.abrupt("break", 39);
            case 26:
              if (!(message instanceof Error)) {
                _context5.next = 30;
                break;
              }
              throw message;
            case 30:
              if (message.type === "audio") audioWasReceived = true;
              _context5.next = 33;
              return message;
            case 33:
              _context5.next = 37;
              break;
            case 35:
              _context5.next = 37;
              return _awaitAsyncGenerator(new Promise(function (resolve) {
                resolveMessage = resolve;
                setTimeout(resolve, 50);
              }));
            case 37:
              _context5.next = 17;
              break;
            case 39:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    }
    /**
     * Streams text-to-speech synthesis results using native browser WebSocket.
     * Uses only browser-native APIs, avoiding Node.js dependencies.
     * 
     * @yields BrowserTTSChunk - Audio data or word boundary information
     * @throws {Error} If called more than once
     * @throws {NoAudioReceived} If no audio data is received
     * @throws {WebSocketError} If WebSocket connection fails
     */
  }, {
    key: "stream",
    value: function stream() {
      var _this2 = this;
      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _iterator7, _step7, partialText, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, message;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!_this2.state.streamWasCalled) {
                _context6.next = 2;
                break;
              }
              throw new Error("stream can only be called once.");
            case 2:
              _this2.state.streamWasCalled = true;
              _iterator7 = _createForOfIteratorHelper(_this2.texts);
              _context6.prev = 4;
              _iterator7.s();
            case 6:
              if ((_step7 = _iterator7.n()).done) {
                _context6.next = 40;
                break;
              }
              partialText = _step7.value;
              _this2.state.partialText = partialText;
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context6.prev = 11;
              _iterator = _asyncIterator(_this2._stream());
            case 13:
              _context6.next = 15;
              return _awaitAsyncGenerator(_iterator.next());
            case 15:
              if (!(_iteratorAbruptCompletion = !(_step = _context6.sent).done)) {
                _context6.next = 22;
                break;
              }
              message = _step.value;
              _context6.next = 19;
              return message;
            case 19:
              _iteratorAbruptCompletion = false;
              _context6.next = 13;
              break;
            case 22:
              _context6.next = 28;
              break;
            case 24:
              _context6.prev = 24;
              _context6.t0 = _context6["catch"](11);
              _didIteratorError = true;
              _iteratorError = _context6.t0;
            case 28:
              _context6.prev = 28;
              _context6.prev = 29;
              if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                _context6.next = 33;
                break;
              }
              _context6.next = 33;
              return _awaitAsyncGenerator(_iterator["return"]());
            case 33:
              _context6.prev = 33;
              if (!_didIteratorError) {
                _context6.next = 36;
                break;
              }
              throw _iteratorError;
            case 36:
              return _context6.finish(33);
            case 37:
              return _context6.finish(28);
            case 38:
              _context6.next = 6;
              break;
            case 40:
              _context6.next = 45;
              break;
            case 42:
              _context6.prev = 42;
              _context6.t1 = _context6["catch"](4);
              _iterator7.e(_context6.t1);
            case 45:
              _context6.prev = 45;
              _iterator7.f();
              return _context6.finish(45);
            case 48:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[4, 42, 45, 48], [11, 24, 28, 38], [29,, 33, 37]]);
      }))();
    }
  }]);
  return BrowserCommunicate;
}();

// src/browser-simple.ts
function concatUint8Arrays(arrays) {
  if (arrays.length === 0) return new Uint8Array(0);
  if (arrays.length === 1) return arrays[0];
  var totalLength = arrays.reduce(function (sum, arr) {
    return sum + arr.length;
  }, 0);
  var result = new Uint8Array(totalLength);
  var offset = 0;
  var _iterator8 = _createForOfIteratorHelper(arrays),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var arr = _step8.value;
      if (arr.length > 0) {
        result.set(arr, offset);
        offset += arr.length;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return result;
}
var BrowserEdgeTTS = /*#__PURE__*/function () {
  /**
   * @param text The text to be synthesized.
   * @param voice The voice to use for synthesis.
   * @param options Prosody options (rate, volume, pitch).
   */
  function BrowserEdgeTTS(text) {
    var voice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Microsoft Server Speech Text to Speech Voice (en-US, EmmaMultilingualNeural)";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, BrowserEdgeTTS);
    this.text = text;
    this.voice = voice;
    this.rate = options.rate || "+0%";
    this.volume = options.volume || "+0%";
    this.pitch = options.pitch || "+0Hz";
  }
  /**
   * Initiates the synthesis process using browser-native APIs.
   * @returns A promise that resolves with the synthesized audio and subtitle data.
   */
  _createClass(BrowserEdgeTTS, [{
    key: "synthesize",
    value: function () {
      var _synthesize2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var communicate, audioChunks, wordBoundaries, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, chunk, audioBuffer, audioBlob;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              communicate = new BrowserCommunicate(this.text, {
                voice: this.voice,
                rate: this.rate,
                volume: this.volume,
                pitch: this.pitch
              });
              audioChunks = [];
              wordBoundaries = [];
              _iteratorAbruptCompletion2 = false;
              _didIteratorError2 = false;
              _context7.prev = 5;
              _iterator2 = _asyncIterator(communicate.stream());
            case 7:
              _context7.next = 9;
              return _iterator2.next();
            case 9:
              if (!(_iteratorAbruptCompletion2 = !(_step2 = _context7.sent).done)) {
                _context7.next = 15;
                break;
              }
              chunk = _step2.value;
              if (chunk.type === "audio" && chunk.data) {
                audioChunks.push(chunk.data);
              } else if (chunk.type === "WordBoundary" && chunk.offset !== void 0 && chunk.duration !== void 0 && chunk.text !== void 0) {
                wordBoundaries.push({
                  offset: chunk.offset,
                  duration: chunk.duration,
                  text: chunk.text
                });
              }
            case 12:
              _iteratorAbruptCompletion2 = false;
              _context7.next = 7;
              break;
            case 15:
              _context7.next = 21;
              break;
            case 17:
              _context7.prev = 17;
              _context7.t0 = _context7["catch"](5);
              _didIteratorError2 = true;
              _iteratorError2 = _context7.t0;
            case 21:
              _context7.prev = 21;
              _context7.prev = 22;
              if (!(_iteratorAbruptCompletion2 && _iterator2["return"] != null)) {
                _context7.next = 26;
                break;
              }
              _context7.next = 26;
              return _iterator2["return"]();
            case 26:
              _context7.prev = 26;
              if (!_didIteratorError2) {
                _context7.next = 29;
                break;
              }
              throw _iteratorError2;
            case 29:
              return _context7.finish(26);
            case 30:
              return _context7.finish(21);
            case 31:
              audioBuffer = concatUint8Arrays(audioChunks);
              audioBlob = new Blob([audioBuffer], {
                type: "audio/mpeg"
              });
              return _context7.abrupt("return", {
                audio: audioBlob,
                subtitle: wordBoundaries
              });
            case 34:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 17, 21, 31], [22,, 26, 30]]);
      }));
      function synthesize() {
        return _synthesize2.apply(this, arguments);
      }
      return synthesize;
    }()
  }]);
  return BrowserEdgeTTS;
}();
function formatTimestamp(timeIn100ns, format) {
  var totalSeconds = Math.floor(timeIn100ns / 1e7);
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor(totalSeconds % 3600 / 60);
  var seconds = totalSeconds % 60;
  var milliseconds = Math.floor(timeIn100ns % 1e7 / 1e4);
  var separator = format === "vtt" ? "." : ",";
  return "".concat(padNumber(hours), ":").concat(padNumber(minutes), ":").concat(padNumber(seconds)).concat(separator).concat(padNumber(milliseconds, 3));
}
function padNumber(num) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return num.toString().padStart(length, "0");
}
function createVTT(wordBoundaries) {
  var vttContent = "WEBVTT\n\n";
  wordBoundaries.forEach(function (word, index) {
    var startTime = formatTimestamp(word.offset, "vtt");
    var endTime = formatTimestamp(word.offset + word.duration, "vtt");
    vttContent += "".concat(index + 1, "\n");
    vttContent += "".concat(startTime, " --> ").concat(endTime, "\n");
    vttContent += "".concat(word.text, "\n\n");
  });
  return vttContent;
}
function createSRT(wordBoundaries) {
  var srtContent = "";
  wordBoundaries.forEach(function (word, index) {
    var startTime = formatTimestamp(word.offset, "srt");
    var endTime = formatTimestamp(word.offset + word.duration, "srt");
    srtContent += "".concat(index + 1, "\n");
    srtContent += "".concat(startTime, " --> ").concat(endTime, "\n");
    srtContent += "".concat(word.text, "\n\n");
  });
  return srtContent;
}

// src/browser-voices.ts
var BrowserFetchError = /*#__PURE__*/function (_Error2) {
  _inherits(BrowserFetchError, _Error2);
  var _super8 = _createSuper(BrowserFetchError);
  function BrowserFetchError(message, response) {
    var _this12;
    _classCallCheck(this, BrowserFetchError);
    _this12 = _super8.call(this, message);
    _this12.name = "BrowserFetchError";
    _this12.response = response;
    return _this12;
  }
  return _createClass(BrowserFetchError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
function _listVoices() {
  return _listVoices2.apply(this, arguments);
}
function _listVoices2() {
  _listVoices2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var url, response, headers, data, _iterator10, _step10, voice;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.t0 = "".concat(VOICE_LIST_URL, "&Sec-MS-GEC=");
          _context9.next = 3;
          return BrowserDRM.generateSecMsGec();
        case 3:
          _context9.t1 = _context9.sent;
          url = _context9.t0.concat.call(_context9.t0, _context9.t1, "&Sec-MS-GEC-Version=").concat(SEC_MS_GEC_VERSION);
          _context9.prev = 5;
          _context9.next = 8;
          return fetch(url, {
            headers: VOICE_HEADERS
          });
        case 8:
          response = _context9.sent;
          if (response.ok) {
            _context9.next = 13;
            break;
          }
          headers = {};
          response.headers.forEach(function (value, key) {
            headers[key] = value;
          });
          throw new BrowserFetchError("HTTP ".concat(response.status), {
            status: response.status,
            headers: headers
          });
        case 13:
          _context9.next = 15;
          return response.json();
        case 15:
          data = _context9.sent;
          _iterator10 = _createForOfIteratorHelper(data);
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              voice = _step10.value;
              voice.VoiceTag.ContentCategories = voice.VoiceTag.ContentCategories.map(function (c) {
                return c.trim();
              });
              voice.VoiceTag.VoicePersonalities = voice.VoiceTag.VoicePersonalities.map(function (p) {
                return p.trim();
              });
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          return _context9.abrupt("return", data);
        case 21:
          _context9.prev = 21;
          _context9.t2 = _context9["catch"](5);
          if (!(_context9.t2 instanceof BrowserFetchError)) {
            _context9.next = 25;
            break;
          }
          throw _context9.t2;
        case 25:
          throw new BrowserFetchError(_context9.t2 instanceof Error ? _context9.t2.message : "Unknown fetch error");
        case 26:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[5, 21]]);
  }));
  return _listVoices2.apply(this, arguments);
}
function listVoices() {
  return _listVoices3.apply(this, arguments);
}
function _listVoices3() {
  _listVoices3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var _e$response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _listVoices();
        case 3:
          return _context10.abrupt("return", _context10.sent);
        case 6:
          _context10.prev = 6;
          _context10.t0 = _context10["catch"](0);
          if (!(_context10.t0 instanceof BrowserFetchError && ((_e$response = _context10.t0.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 403)) {
            _context10.next = 13;
            break;
          }
          BrowserDRM.handleClientResponseError(_context10.t0.response);
          _context10.next = 12;
          return _listVoices();
        case 12:
          return _context10.abrupt("return", _context10.sent);
        case 13:
          throw _context10.t0;
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 6]]);
  }));
  return _listVoices3.apply(this, arguments);
}
var BrowserVoicesManager = /*#__PURE__*/function () {
  function _BrowserVoicesManager() {
    _classCallCheck(this, _BrowserVoicesManager);
    this.voices = [];
    this.calledCreate = false;
  }
  /**
   * Creates a new BrowserVoicesManager instance.
   * 
   * @param customVoices - Optional custom voice list instead of fetching from API
   * @returns Promise resolving to BrowserVoicesManager instance
   */
  _createClass(_BrowserVoicesManager, [{
    key: "find",
    value:
    /**
     * Finds voices matching the specified criteria.
     * 
     * @param filter - Filter criteria for voice selection
     * @returns Array of voices matching the filter
     * @throws {Error} If called before create()
     */
    function find(filter) {
      if (!this.calledCreate) {
        throw new Error("BrowserVoicesManager.find() called before BrowserVoicesManager.create()");
      }
      return this.voices.filter(function (voice) {
        return Object.entries(filter).every(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];
          return voice[key] === value;
        });
      });
    }
  }], [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(customVoices) {
        var manager, voices;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              manager = new _BrowserVoicesManager();
              if (!(customVoices !== null && customVoices !== void 0)) {
                _context8.next = 5;
                break;
              }
              _context8.t0 = customVoices;
              _context8.next = 8;
              break;
            case 5:
              _context8.next = 7;
              return listVoices();
            case 7:
              _context8.t0 = _context8.sent;
            case 8:
              voices = _context8.t0;
              manager.voices = voices.map(function (voice) {
                return _objectSpread(_objectSpread({}, voice), {}, {
                  Language: voice.Locale.split("-")[0]
                });
              });
              manager.calledCreate = true;
              return _context8.abrupt("return", manager);
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function create(_x2) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }]);
  return _BrowserVoicesManager;
}();

// src/submaker.ts
function formatTime(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var ms = Math.round((seconds - Math.floor(seconds)) * 1e3);
  var pad = function pad(num) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return num.toString().padStart(size, "0");
  };
  return "".concat(pad(h), ":").concat(pad(m), ":").concat(pad(s), ",").concat(pad(ms, 3));
}
var SubMaker = /*#__PURE__*/function () {
  function SubMaker() {
    _classCallCheck(this, SubMaker);
    this.cues = [];
  }
  /**
   * Adds a WordBoundary chunk to the subtitle maker.
   * 
   * @param msg - Must be a WordBoundary type chunk with offset, duration, and text
   * @throws {ValueError} If chunk is not a WordBoundary with required fields
   */
  _createClass(SubMaker, [{
    key: "feed",
    value: function feed(msg) {
      if (msg.type !== "WordBoundary" || msg.offset === void 0 || msg.duration === void 0 || msg.text === void 0) {
        throw new ValueError("Invalid message type, expected 'WordBoundary' with offset, duration and text");
      }
      var start = msg.offset / 1e7;
      var end = (msg.offset + msg.duration) / 1e7;
      this.cues.push({
        index: this.cues.length + 1,
        start: start,
        end: end,
        content: msg.text
      });
    }
    /**
     * Merges consecutive cues to create subtitle entries with multiple words.
     * This is useful for creating more readable subtitles instead of word-by-word display.
     * 
     * @param words - Maximum number of words per merged cue
     * @throws {ValueError} If words parameter is invalid
     */
  }, {
    key: "mergeCues",
    value: function mergeCues(words) {
      if (words <= 0) {
        throw new ValueError("Invalid number of words to merge, expected > 0");
      }
      if (this.cues.length === 0) {
        return;
      }
      var newCues = [];
      var currentCue = this.cues[0];
      var _iterator9 = _createForOfIteratorHelper(this.cues.slice(1)),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var cue = _step9.value;
          if (currentCue.content.split(" ").length < words) {
            currentCue = _objectSpread(_objectSpread({}, currentCue), {}, {
              end: cue.end,
              content: "".concat(currentCue.content, " ").concat(cue.content)
            });
          } else {
            newCues.push(currentCue);
            currentCue = cue;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      newCues.push(currentCue);
      this.cues = newCues.map(function (cue, i) {
        return _objectSpread(_objectSpread({}, cue), {}, {
          index: i + 1
        });
      });
    }
    /**
     * Returns the subtitles in SRT format.
     * 
     * @returns SRT formatted subtitles
     */
  }, {
    key: "getSrt",
    value: function getSrt() {
      return this.cues.map(function (cue) {
        return "".concat(cue.index, "\r\n").concat(formatTime(cue.start), " --> ").concat(formatTime(cue.end), "\r\n").concat(cue.content, "\r\n");
      }).join("\r\n");
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.getSrt();
    }
  }]);
  return SubMaker;
}();
