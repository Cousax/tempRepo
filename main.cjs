"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name2, symbol) => (symbol = Symbol[name2]) ? symbol : Symbol.for("Symbol." + name2);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __using = (stack, value, async2) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose;
    if (async2) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) dispose = value[__knownSymbol("dispose")];
    if (typeof dispose !== "function") __typeError("Object not disposable");
    stack.push([async2, dispose, value]);
  } else if (async2) {
    stack.push([async2]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var _a, _store, _basePath, _VirtualEnvironment_instances, rmdir_fn, using_fn, _handlers, _Troubleshooting_instances, setOnUpdateCallback_fn, addIpcHandlers_fn, _onMaintenancePage, __InstallationManager2_instances, onUpdateHandler_fn, _b, _AppWindow_instances, shouldOpenInPopup_fn, _pty, _window, _cwd, _uvPath, _Terminal_instances, createPty_fn, _c;
;
!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fe509282-26b2-45d9-9731-506a717c26d4", e._sentryDebugIdIdentifier = "sentry-dbid-fe509282-26b2-45d9-9731-506a717c26d4");
  } catch (e2) {
  }
}();
const dotenv = require("dotenv");
const electron$1 = require("electron");
const path$f = require("path");
const require$$0$2 = require("child_process");
const require$$1$3 = require("os");
const require$$0$1 = require("fs");
const require$$0$3 = require("util");
const require$$0$4 = require("events");
const require$$0$5 = require("http");
const require$$1$4 = require("https");
const todesktop = require("@todesktop/runtime");
const ElectronStore = require("electron-store");
const fsPromises = require("node:fs/promises");
const path$g = require("node:path");
const node_child_process = require("node:child_process");
const util$2 = require("node:util");
const fs$9 = require("node:fs");
const https$3 = require("node:https");
const net$2 = require("node:net");
const si = require("systeminformation");
const yaml = require("yaml");
const mixpanel = require("mixpanel");
const node_crypto = require("node:crypto");
const os$7 = require("node:os");
const urlModule = require("url");
const stream$2 = require("stream");
const zlib$2 = require("zlib");
const require$$3 = require("worker_threads");
const require$$1$5 = require("module");
const require$$1$7 = require("async_hooks");
const perf_hooks$2 = require("perf_hooks");
const require$$0$6 = require("diagnostics_channel");
const require$$1$6 = require("tty");
const node_readline = require("node:readline");
const node_worker_threads = require("node:worker_threads");
const pty = require("node-pty");
const tmp = require("tmp");
const node_events = require("node:events");
const lodash = require("lodash");
const node_url = require("node:url");
const waitOn = require("wait-on");
var _documentCurrentScript = typeof document !== "undefined" ? document.currentScript : null;
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const electron__namespace = /* @__PURE__ */ _interopNamespaceDefault(electron$1);
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path$f);
const util__namespace = /* @__PURE__ */ _interopNamespaceDefault(util$2);
const os__namespace = /* @__PURE__ */ _interopNamespaceDefault(os$7);
const urlModule__namespace = /* @__PURE__ */ _interopNamespaceDefault(urlModule);
var _global$2 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
_global$2.SENTRY_RELEASE = { id: "ComfyUI@0.4.62" };
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
const fs$8 = require$$0$1;
const path$e = path$f;
var packageJson$1 = {
  findAndReadPackageJson,
  tryReadJsonAt
};
function findAndReadPackageJson() {
  return tryReadJsonAt(getMainModulePath()) || tryReadJsonAt(extractPathFromArgs()) || tryReadJsonAt(process.resourcesPath, "app.asar") || tryReadJsonAt(process.resourcesPath, "app") || tryReadJsonAt(process.cwd()) || { name: void 0, version: void 0 };
}
function tryReadJsonAt(...searchPaths) {
  if (!searchPaths[0]) {
    return void 0;
  }
  try {
    const searchPath = path$e.join(...searchPaths);
    const fileName = findUp("package.json", searchPath);
    if (!fileName) {
      return void 0;
    }
    const json = JSON.parse(fs$8.readFileSync(fileName, "utf8"));
    const name2 = (json == null ? void 0 : json.productName) || (json == null ? void 0 : json.name);
    if (!name2 || name2.toLowerCase() === "electron") {
      return void 0;
    }
    if (name2) {
      return { name: name2, version: json == null ? void 0 : json.version };
    }
    return void 0;
  } catch (e) {
    return void 0;
  }
}
function findUp(fileName, cwd) {
  let currentPath = cwd;
  while (true) {
    const parsedPath = path$e.parse(currentPath);
    const root = parsedPath.root;
    const dir = parsedPath.dir;
    if (fs$8.existsSync(path$e.join(currentPath, fileName))) {
      return path$e.resolve(path$e.join(currentPath, fileName));
    }
    if (currentPath === root) {
      return null;
    }
    currentPath = dir;
  }
}
function extractPathFromArgs() {
  const matchedArgs = process.argv.filter((arg) => {
    return arg.indexOf("--user-data-dir=") === 0;
  });
  if (matchedArgs.length === 0 || typeof matchedArgs[0] !== "string") {
    return null;
  }
  const userDataDir = matchedArgs[0];
  return userDataDir.replace("--user-data-dir=", "");
}
function getMainModulePath() {
  var _a3;
  try {
    return (_a3 = require.main) == null ? void 0 : _a3.filename;
  } catch {
    return void 0;
  }
}
const childProcess = require$$0$2;
const os$6 = require$$1$3;
const path$d = path$f;
const packageJson = packageJson$1;
let NodeExternalApi$1 = class NodeExternalApi {
  constructor() {
    __publicField(this, "appName");
    __publicField(this, "appPackageJson");
    __publicField(this, "platform", process.platform);
  }
  getAppLogPath(appName = this.getAppName()) {
    if (this.platform === "darwin") {
      return path$d.join(this.getSystemPathHome(), "Library/Logs", appName);
    }
    return path$d.join(this.getAppUserDataPath(appName), "logs");
  }
  getAppName() {
    var _a3;
    const appName = this.appName || ((_a3 = this.getAppPackageJson()) == null ? void 0 : _a3.name);
    if (!appName) {
      throw new Error(
        "electron-log can't determine the app name. It tried these methods:\n1. Use `electron.app.name`\n2. Use productName or name from the nearest package.json`\nYou can also set it through log.transports.file.setAppName()"
      );
    }
    return appName;
  }
  /**
   * @private
   * @returns {undefined}
   */
  getAppPackageJson() {
    if (typeof this.appPackageJson !== "object") {
      this.appPackageJson = packageJson.findAndReadPackageJson();
    }
    return this.appPackageJson;
  }
  getAppUserDataPath(appName = this.getAppName()) {
    return appName ? path$d.join(this.getSystemPathAppData(), appName) : void 0;
  }
  getAppVersion() {
    var _a3;
    return (_a3 = this.getAppPackageJson()) == null ? void 0 : _a3.version;
  }
  getElectronLogPath() {
    return this.getAppLogPath();
  }
  getMacOsVersion() {
    const release = Number(os$6.release().split(".")[0]);
    if (release <= 19) {
      return `10.${release - 4}`;
    }
    return release - 9;
  }
  /**
   * @protected
   * @returns {string}
   */
  getOsVersion() {
    let osName = os$6.type().replace("_", " ");
    let osVersion = os$6.release();
    if (osName === "Darwin") {
      osName = "macOS";
      osVersion = this.getMacOsVersion();
    }
    return `${osName} ${osVersion}`;
  }
  /**
   * @return {PathVariables}
   */
  getPathVariables() {
    const appName = this.getAppName();
    const appVersion = this.getAppVersion();
    const self2 = this;
    return {
      appData: this.getSystemPathAppData(),
      appName,
      appVersion,
      get electronDefaultDir() {
        return self2.getElectronLogPath();
      },
      home: this.getSystemPathHome(),
      libraryDefaultDir: this.getAppLogPath(appName),
      libraryTemplate: this.getAppLogPath("{appName}"),
      temp: this.getSystemPathTemp(),
      userData: this.getAppUserDataPath(appName)
    };
  }
  getSystemPathAppData() {
    const home = this.getSystemPathHome();
    switch (this.platform) {
      case "darwin": {
        return path$d.join(home, "Library/Application Support");
      }
      case "win32": {
        return process.env.APPDATA || path$d.join(home, "AppData/Roaming");
      }
      default: {
        return process.env.XDG_CONFIG_HOME || path$d.join(home, ".config");
      }
    }
  }
  getSystemPathHome() {
    var _a3;
    return ((_a3 = os$6.homedir) == null ? void 0 : _a3.call(os$6)) || process.env.HOME;
  }
  getSystemPathTemp() {
    return os$6.tmpdir();
  }
  getVersions() {
    return {
      app: `${this.getAppName()} ${this.getAppVersion()}`,
      electron: void 0,
      os: this.getOsVersion()
    };
  }
  isDev() {
    return process.env.NODE_ENV === "development" || process.env.ELECTRON_IS_DEV === "1";
  }
  isElectron() {
    return Boolean(process.versions.electron);
  }
  onAppEvent(_eventName, _handler) {
  }
  onAppReady(handler) {
    handler();
  }
  onEveryWebContentsEvent(eventName, handler) {
  }
  /**
   * Listen to async messages sent from opposite process
   * @param {string} channel
   * @param {function} listener
   */
  onIpc(channel, listener) {
  }
  onIpcInvoke(channel, listener) {
  }
  /**
   * @param {string} url
   * @param {Function} [logFunction]
   */
  openUrl(url2, logFunction = console.error) {
    const startMap = { darwin: "open", win32: "start", linux: "xdg-open" };
    const start = startMap[process.platform] || "xdg-open";
    childProcess.exec(`${start} ${url2}`, {}, (err) => {
      if (err) {
        logFunction(err);
      }
    });
  }
  setAppName(appName) {
    this.appName = appName;
  }
  setPlatform(platform) {
    this.platform = platform;
  }
  setPreloadFileForSessions({
    filePath,
    // eslint-disable-line no-unused-vars
    includeFutureSession = true,
    // eslint-disable-line no-unused-vars
    getSessions = () => []
    // eslint-disable-line no-unused-vars
  }) {
  }
  /**
   * Sent a message to opposite process
   * @param {string} channel
   * @param {any} message
   */
  sendIpc(channel, message) {
  }
  showErrorBox(title, message) {
  }
};
var NodeExternalApi_1 = NodeExternalApi$1;
const path$c = path$f;
const NodeExternalApi2 = NodeExternalApi_1;
let ElectronExternalApi$1 = class ElectronExternalApi extends NodeExternalApi2 {
  /**
   * @param {object} options
   * @param {typeof Electron} [options.electron]
   */
  constructor({ electron: electron2 } = {}) {
    super();
    /**
     * @type {typeof Electron}
     */
    __publicField(this, "electron");
    this.electron = electron2;
  }
  getAppName() {
    var _a3, _b2;
    let appName;
    try {
      appName = this.appName || ((_a3 = this.electron.app) == null ? void 0 : _a3.name) || ((_b2 = this.electron.app) == null ? void 0 : _b2.getName());
    } catch {
    }
    return appName || super.getAppName();
  }
  getAppUserDataPath(appName) {
    return this.getPath("userData") || super.getAppUserDataPath(appName);
  }
  getAppVersion() {
    var _a3;
    let appVersion;
    try {
      appVersion = (_a3 = this.electron.app) == null ? void 0 : _a3.getVersion();
    } catch {
    }
    return appVersion || super.getAppVersion();
  }
  getElectronLogPath() {
    return this.getPath("logs") || super.getElectronLogPath();
  }
  /**
   * @private
   * @param {any} name
   * @returns {string|undefined}
   */
  getPath(name2) {
    var _a3;
    try {
      return (_a3 = this.electron.app) == null ? void 0 : _a3.getPath(name2);
    } catch {
      return void 0;
    }
  }
  getVersions() {
    return {
      app: `${this.getAppName()} ${this.getAppVersion()}`,
      electron: `Electron ${process.versions.electron}`,
      os: this.getOsVersion()
    };
  }
  getSystemPathAppData() {
    return this.getPath("appData") || super.getSystemPathAppData();
  }
  isDev() {
    var _a3;
    if (((_a3 = this.electron.app) == null ? void 0 : _a3.isPackaged) !== void 0) {
      return !this.electron.app.isPackaged;
    }
    if (typeof process.execPath === "string") {
      const execFileName = path$c.basename(process.execPath).toLowerCase();
      return execFileName.startsWith("electron");
    }
    return super.isDev();
  }
  onAppEvent(eventName, handler) {
    var _a3;
    (_a3 = this.electron.app) == null ? void 0 : _a3.on(eventName, handler);
    return () => {
      var _a4;
      (_a4 = this.electron.app) == null ? void 0 : _a4.off(eventName, handler);
    };
  }
  onAppReady(handler) {
    var _a3, _b2, _c2;
    if ((_a3 = this.electron.app) == null ? void 0 : _a3.isReady()) {
      handler();
    } else if ((_b2 = this.electron.app) == null ? void 0 : _b2.once) {
      (_c2 = this.electron.app) == null ? void 0 : _c2.once("ready", handler);
    } else {
      handler();
    }
  }
  onEveryWebContentsEvent(eventName, handler) {
    var _a3, _b2, _c2;
    (_b2 = (_a3 = this.electron.webContents) == null ? void 0 : _a3.getAllWebContents()) == null ? void 0 : _b2.forEach((webContents) => {
      webContents.on(eventName, handler);
    });
    (_c2 = this.electron.app) == null ? void 0 : _c2.on("web-contents-created", onWebContentsCreated);
    return () => {
      var _a4, _b3;
      (_a4 = this.electron.webContents) == null ? void 0 : _a4.getAllWebContents().forEach((webContents) => {
        webContents.off(eventName, handler);
      });
      (_b3 = this.electron.app) == null ? void 0 : _b3.off("web-contents-created", onWebContentsCreated);
    };
    function onWebContentsCreated(_, webContents) {
      webContents.on(eventName, handler);
    }
  }
  /**
   * Listen to async messages sent from opposite process
   * @param {string} channel
   * @param {function} listener
   */
  onIpc(channel, listener) {
    var _a3;
    (_a3 = this.electron.ipcMain) == null ? void 0 : _a3.on(channel, listener);
  }
  onIpcInvoke(channel, listener) {
    var _a3, _b2;
    (_b2 = (_a3 = this.electron.ipcMain) == null ? void 0 : _a3.handle) == null ? void 0 : _b2.call(_a3, channel, listener);
  }
  /**
   * @param {string} url
   * @param {Function} [logFunction]
   */
  openUrl(url2, logFunction = console.error) {
    var _a3;
    (_a3 = this.electron.shell) == null ? void 0 : _a3.openExternal(url2).catch(logFunction);
  }
  setPreloadFileForSessions({
    filePath,
    includeFutureSession = true,
    getSessions = () => {
      var _a3;
      return [(_a3 = this.electron.session) == null ? void 0 : _a3.defaultSession];
    }
  }) {
    for (const session of getSessions().filter(Boolean)) {
      setPreload(session);
    }
    if (includeFutureSession) {
      this.onAppEvent("session-created", (session) => {
        setPreload(session);
      });
    }
    function setPreload(session) {
      session.setPreloads([...session.getPreloads(), filePath]);
    }
  }
  /**
   * Sent a message to opposite process
   * @param {string} channel
   * @param {any} message
   */
  sendIpc(channel, message) {
    var _a3, _b2;
    (_b2 = (_a3 = this.electron.BrowserWindow) == null ? void 0 : _a3.getAllWindows()) == null ? void 0 : _b2.forEach((wnd) => {
      var _a4;
      if (((_a4 = wnd.webContents) == null ? void 0 : _a4.isDestroyed()) === false) {
        wnd.webContents.send(channel, message);
      }
    });
  }
  showErrorBox(title, message) {
    var _a3;
    (_a3 = this.electron.dialog) == null ? void 0 : _a3.showErrorBox(title, message);
  }
};
var ElectronExternalApi_1 = ElectronExternalApi$1;
var electronLogPreload = { exports: {} };
(function(module2) {
  let electron2 = {};
  try {
    electron2 = require("electron");
  } catch (e) {
  }
  if (electron2.ipcRenderer) {
    initialize2(electron2);
  }
  {
    module2.exports = initialize2;
  }
  function initialize2({ contextBridge, ipcRenderer }) {
    if (!ipcRenderer) {
      return;
    }
    ipcRenderer.on("__ELECTRON_LOG_IPC__", (_, message) => {
      window.postMessage({ cmd: "message", ...message });
    });
    ipcRenderer.invoke("__ELECTRON_LOG__", { cmd: "getOptions" }).catch((e) => console.error(new Error(
      `electron-log isn't initialized in the main process. Please call log.initialize() before. ${e.message}`
    )));
    const electronLog = {
      sendToMain(message) {
        try {
          ipcRenderer.send("__ELECTRON_LOG__", message);
        } catch (e) {
          console.error("electronLog.sendToMain ", e, "data:", message);
          ipcRenderer.send("__ELECTRON_LOG__", {
            cmd: "errorHandler",
            error: { message: e == null ? void 0 : e.message, stack: e == null ? void 0 : e.stack },
            errorName: "sendToMain"
          });
        }
      },
      log(...data2) {
        electronLog.sendToMain({ data: data2, level: "info" });
      }
    };
    for (const level of ["error", "warn", "info", "verbose", "debug", "silly"]) {
      electronLog[level] = (...data2) => electronLog.sendToMain({
        data: data2,
        level
      });
    }
    if (contextBridge && process.contextIsolated) {
      try {
        contextBridge.exposeInMainWorld("__electronLog", electronLog);
      } catch {
      }
    }
    if (typeof window === "object") {
      window.__electronLog = electronLog;
    } else {
      __electronLog = electronLog;
    }
  }
})(electronLogPreload);
var electronLogPreloadExports = electronLogPreload.exports;
const fs$7 = require$$0$1;
const os$5 = require$$1$3;
const path$b = path$f;
const preloadInitializeFn = electronLogPreloadExports;
var initialize$1 = {
  initialize({
    externalApi: externalApi2,
    getSessions,
    includeFutureSession,
    logger: logger2,
    preload = true,
    spyRendererConsole = false
  }) {
    externalApi2.onAppReady(() => {
      try {
        if (preload) {
          initializePreload({
            externalApi: externalApi2,
            getSessions,
            includeFutureSession,
            preloadOption: preload
          });
        }
        if (spyRendererConsole) {
          initializeSpyRendererConsole({ externalApi: externalApi2, logger: logger2 });
        }
      } catch (err) {
        logger2.warn(err);
      }
    });
  }
};
function initializePreload({
  externalApi: externalApi2,
  getSessions,
  includeFutureSession,
  preloadOption
}) {
  let preloadPath = typeof preloadOption === "string" ? preloadOption : void 0;
  try {
    preloadPath = path$b.resolve(
      __dirname,
      "../renderer/electron-log-preload.js"
    );
  } catch {
  }
  if (!preloadPath || !fs$7.existsSync(preloadPath)) {
    preloadPath = path$b.join(
      externalApi2.getAppUserDataPath() || os$5.tmpdir(),
      "electron-log-preload.js"
    );
    const preloadCode = `
      try {
        (${preloadInitializeFn.toString()})(require('electron'));
      } catch(e) {
        console.error(e);
      }
    `;
    fs$7.writeFileSync(preloadPath, preloadCode, "utf8");
  }
  externalApi2.setPreloadFileForSessions({
    filePath: preloadPath,
    includeFutureSession,
    getSessions
  });
}
function initializeSpyRendererConsole({ externalApi: externalApi2, logger: logger2 }) {
  const levels = ["verbose", "info", "warning", "error"];
  externalApi2.onEveryWebContentsEvent(
    "console-message",
    (event, level, message) => {
      logger2.processMessage({
        data: [message],
        level: levels[level],
        variables: { processType: "renderer" }
      });
    }
  );
}
var scope = scopeFactory$1;
function scopeFactory$1(logger2) {
  return Object.defineProperties(scope2, {
    defaultLabel: { value: "", writable: true },
    labelPadding: { value: true, writable: true },
    maxLabelLength: { value: 0, writable: true },
    labelLength: {
      get() {
        switch (typeof scope2.labelPadding) {
          case "boolean":
            return scope2.labelPadding ? scope2.maxLabelLength : 0;
          case "number":
            return scope2.labelPadding;
          default:
            return 0;
        }
      }
    }
  });
  function scope2(label) {
    scope2.maxLabelLength = Math.max(scope2.maxLabelLength, label.length);
    const newScope = {};
    for (const level of logger2.levels) {
      newScope[level] = (...d) => logger2.logData(d, { level, scope: label });
    }
    newScope.log = newScope.info;
    return newScope;
  }
}
let Buffering$1 = class Buffering {
  constructor({ processMessage: processMessage2 }) {
    this.processMessage = processMessage2;
    this.buffer = [];
    this.enabled = false;
    this.begin = this.begin.bind(this);
    this.commit = this.commit.bind(this);
    this.reject = this.reject.bind(this);
  }
  addMessage(message) {
    this.buffer.push(message);
  }
  begin() {
    this.enabled = [];
  }
  commit() {
    this.enabled = false;
    this.buffer.forEach((item) => this.processMessage(item));
    this.buffer = [];
  }
  reject() {
    this.enabled = false;
    this.buffer = [];
  }
};
var Buffering_1 = Buffering$1;
const scopeFactory = scope;
const Buffering2 = Buffering_1;
let Logger$1 = (_a = class {
  constructor({
    allowUnknownLevel = false,
    dependencies: dependencies2 = {},
    errorHandler,
    eventLogger,
    initializeFn,
    isDev = false,
    levels = ["error", "warn", "info", "verbose", "debug", "silly"],
    logId,
    transportFactories = {},
    variables
  } = {}) {
    __publicField(this, "dependencies", {});
    __publicField(this, "errorHandler", null);
    __publicField(this, "eventLogger", null);
    __publicField(this, "functions", {});
    __publicField(this, "hooks", []);
    __publicField(this, "isDev", false);
    __publicField(this, "levels", null);
    __publicField(this, "logId", null);
    __publicField(this, "scope", null);
    __publicField(this, "transports", {});
    __publicField(this, "variables", {});
    this.addLevel = this.addLevel.bind(this);
    this.create = this.create.bind(this);
    this.initialize = this.initialize.bind(this);
    this.logData = this.logData.bind(this);
    this.processMessage = this.processMessage.bind(this);
    this.allowUnknownLevel = allowUnknownLevel;
    this.buffering = new Buffering2(this);
    this.dependencies = dependencies2;
    this.initializeFn = initializeFn;
    this.isDev = isDev;
    this.levels = levels;
    this.logId = logId;
    this.scope = scopeFactory(this);
    this.transportFactories = transportFactories;
    this.variables = variables || {};
    for (const name2 of this.levels) {
      this.addLevel(name2, false);
    }
    this.log = this.info;
    this.functions.log = this.log;
    this.errorHandler = errorHandler;
    errorHandler == null ? void 0 : errorHandler.setOptions({ ...dependencies2, logFn: this.error });
    this.eventLogger = eventLogger;
    eventLogger == null ? void 0 : eventLogger.setOptions({ ...dependencies2, logger: this });
    for (const [name2, factory] of Object.entries(transportFactories)) {
      this.transports[name2] = factory(this, dependencies2);
    }
    _a.instances[logId] = this;
  }
  static getInstance({ logId }) {
    return this.instances[logId] || this.instances.default;
  }
  addLevel(level, index2 = this.levels.length) {
    if (index2 !== false) {
      this.levels.splice(index2, 0, level);
    }
    this[level] = (...args) => this.logData(args, { level });
    this.functions[level] = this[level];
  }
  catchErrors(options) {
    this.processMessage(
      {
        data: ["log.catchErrors is deprecated. Use log.errorHandler instead"],
        level: "warn"
      },
      { transports: ["console"] }
    );
    return this.errorHandler.startCatching(options);
  }
  create(options) {
    if (typeof options === "string") {
      options = { logId: options };
    }
    return new _a({
      dependencies: this.dependencies,
      errorHandler: this.errorHandler,
      initializeFn: this.initializeFn,
      isDev: this.isDev,
      transportFactories: this.transportFactories,
      variables: { ...this.variables },
      ...options
    });
  }
  compareLevels(passLevel, checkLevel, levels = this.levels) {
    const pass = levels.indexOf(passLevel);
    const check = levels.indexOf(checkLevel);
    if (check === -1 || pass === -1) {
      return true;
    }
    return check <= pass;
  }
  initialize(options = {}) {
    this.initializeFn({ logger: this, ...this.dependencies, ...options });
  }
  logData(data2, options = {}) {
    if (this.buffering.enabled) {
      this.buffering.addMessage({ data: data2, ...options });
    } else {
      this.processMessage({ data: data2, ...options });
    }
  }
  processMessage(message, { transports = this.transports } = {}) {
    if (message.cmd === "errorHandler") {
      this.errorHandler.handle(message.error, {
        errorName: message.errorName,
        processType: "renderer",
        showDialog: Boolean(message.showDialog)
      });
      return;
    }
    let level = message.level;
    if (!this.allowUnknownLevel) {
      level = this.levels.includes(message.level) ? message.level : "info";
    }
    const normalizedMessage = {
      date: /* @__PURE__ */ new Date(),
      logId: this.logId,
      ...message,
      level,
      variables: {
        ...this.variables,
        ...message.variables
      }
    };
    for (const [transName, transFn] of this.transportEntries(transports)) {
      if (typeof transFn !== "function" || transFn.level === false) {
        continue;
      }
      if (!this.compareLevels(transFn.level, message.level)) {
        continue;
      }
      try {
        const transformedMsg = this.hooks.reduce((msg, hook) => {
          return msg ? hook(msg, transFn, transName) : msg;
        }, normalizedMessage);
        if (transformedMsg) {
          transFn({ ...transformedMsg, data: [...transformedMsg.data] });
        }
      } catch (e) {
        this.processInternalErrorFn(e);
      }
    }
  }
  processInternalErrorFn(_e) {
  }
  transportEntries(transports = this.transports) {
    const transportArray = Array.isArray(transports) ? transports : Object.entries(transports);
    return transportArray.map((item) => {
      switch (typeof item) {
        case "string":
          return this.transports[item] ? [item, this.transports[item]] : null;
        case "function":
          return [item.name, item];
        default:
          return Array.isArray(item) ? item : null;
      }
    }).filter(Boolean);
  }
}, __publicField(_a, "instances", {}), _a);
var Logger_1 = Logger$1;
let ErrorHandler$1 = class ErrorHandler {
  constructor({
    externalApi: externalApi2,
    logFn = void 0,
    onError = void 0,
    showDialog = void 0
  } = {}) {
    __publicField(this, "externalApi");
    __publicField(this, "isActive", false);
    __publicField(this, "logFn");
    __publicField(this, "onError");
    __publicField(this, "showDialog", true);
    this.createIssue = this.createIssue.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleRejection = this.handleRejection.bind(this);
    this.setOptions({ externalApi: externalApi2, logFn, onError, showDialog });
    this.startCatching = this.startCatching.bind(this);
    this.stopCatching = this.stopCatching.bind(this);
  }
  handle(error, {
    logFn = this.logFn,
    onError = this.onError,
    processType = "browser",
    showDialog = this.showDialog,
    errorName = ""
  } = {}) {
    var _a3;
    error = normalizeError(error);
    try {
      if (typeof onError === "function") {
        const versions = ((_a3 = this.externalApi) == null ? void 0 : _a3.getVersions()) || {};
        const createIssue = this.createIssue;
        const result = onError({
          createIssue,
          error,
          errorName,
          processType,
          versions
        });
        if (result === false) {
          return;
        }
      }
      errorName ? logFn(errorName, error) : logFn(error);
      if (showDialog && !errorName.includes("rejection") && this.externalApi) {
        this.externalApi.showErrorBox(
          `A JavaScript error occurred in the ${processType} process`,
          error.stack
        );
      }
    } catch {
      console.error(error);
    }
  }
  setOptions({ externalApi: externalApi2, logFn, onError, showDialog }) {
    if (typeof externalApi2 === "object") {
      this.externalApi = externalApi2;
    }
    if (typeof logFn === "function") {
      this.logFn = logFn;
    }
    if (typeof onError === "function") {
      this.onError = onError;
    }
    if (typeof showDialog === "boolean") {
      this.showDialog = showDialog;
    }
  }
  startCatching({ onError, showDialog } = {}) {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.setOptions({ onError, showDialog });
    process.on("uncaughtException", this.handleError);
    process.on("unhandledRejection", this.handleRejection);
  }
  stopCatching() {
    this.isActive = false;
    process.removeListener("uncaughtException", this.handleError);
    process.removeListener("unhandledRejection", this.handleRejection);
  }
  createIssue(pageUrl, queryParams) {
    var _a3;
    (_a3 = this.externalApi) == null ? void 0 : _a3.openUrl(
      `${pageUrl}?${new URLSearchParams(queryParams).toString()}`
    );
  }
  handleError(error) {
    this.handle(error, { errorName: "Unhandled" });
  }
  handleRejection(reason) {
    const error = reason instanceof Error ? reason : new Error(JSON.stringify(reason));
    this.handle(error, { errorName: "Unhandled rejection" });
  }
};
function normalizeError(e) {
  if (e instanceof Error) {
    return e;
  }
  if (e && typeof e === "object") {
    if (e.message) {
      return Object.assign(new Error(e.message), e);
    }
    try {
      return new Error(JSON.stringify(e));
    } catch (serErr) {
      return new Error(`Couldn't normalize error ${String(e)}: ${serErr}`);
    }
  }
  return new Error(`Can't normalize error ${String(e)}`);
}
var ErrorHandler_1 = ErrorHandler$1;
let EventLogger$1 = class EventLogger {
  constructor(options = {}) {
    __publicField(this, "disposers", []);
    __publicField(this, "format", "{eventSource}#{eventName}:");
    __publicField(this, "formatters", {
      app: {
        "certificate-error": ({ args }) => {
          return this.arrayToObject(args.slice(1, 4), [
            "url",
            "error",
            "certificate"
          ]);
        },
        "child-process-gone": ({ args }) => {
          return args.length === 1 ? args[0] : args;
        },
        "render-process-gone": ({ args: [webContents, details] }) => {
          return details && typeof details === "object" ? { ...details, ...this.getWebContentsDetails(webContents) } : [];
        }
      },
      webContents: {
        "console-message": ({ args: [level, message, line, sourceId] }) => {
          if (level < 3) {
            return void 0;
          }
          return { message, source: `${sourceId}:${line}` };
        },
        "did-fail-load": ({ args }) => {
          return this.arrayToObject(args, [
            "errorCode",
            "errorDescription",
            "validatedURL",
            "isMainFrame",
            "frameProcessId",
            "frameRoutingId"
          ]);
        },
        "did-fail-provisional-load": ({ args }) => {
          return this.arrayToObject(args, [
            "errorCode",
            "errorDescription",
            "validatedURL",
            "isMainFrame",
            "frameProcessId",
            "frameRoutingId"
          ]);
        },
        "plugin-crashed": ({ args }) => {
          return this.arrayToObject(args, ["name", "version"]);
        },
        "preload-error": ({ args }) => {
          return this.arrayToObject(args, ["preloadPath", "error"]);
        }
      }
    });
    __publicField(this, "events", {
      app: {
        "certificate-error": true,
        "child-process-gone": true,
        "render-process-gone": true
      },
      webContents: {
        // 'console-message': true,
        "did-fail-load": true,
        "did-fail-provisional-load": true,
        "plugin-crashed": true,
        "preload-error": true,
        "unresponsive": true
      }
    });
    __publicField(this, "externalApi");
    __publicField(this, "level", "error");
    __publicField(this, "scope", "");
    this.setOptions(options);
  }
  setOptions({
    events: events2,
    externalApi: externalApi2,
    level,
    logger: logger2,
    format: format2,
    formatters,
    scope: scope2
  }) {
    if (typeof events2 === "object") {
      this.events = events2;
    }
    if (typeof externalApi2 === "object") {
      this.externalApi = externalApi2;
    }
    if (typeof level === "string") {
      this.level = level;
    }
    if (typeof logger2 === "object") {
      this.logger = logger2;
    }
    if (typeof format2 === "string" || typeof format2 === "function") {
      this.format = format2;
    }
    if (typeof formatters === "object") {
      this.formatters = formatters;
    }
    if (typeof scope2 === "string") {
      this.scope = scope2;
    }
  }
  startLogging(options = {}) {
    this.setOptions(options);
    this.disposeListeners();
    for (const eventName of this.getEventNames(this.events.app)) {
      this.disposers.push(
        this.externalApi.onAppEvent(eventName, (...handlerArgs) => {
          this.handleEvent({ eventSource: "app", eventName, handlerArgs });
        })
      );
    }
    for (const eventName of this.getEventNames(this.events.webContents)) {
      this.disposers.push(
        this.externalApi.onEveryWebContentsEvent(
          eventName,
          (...handlerArgs) => {
            this.handleEvent(
              { eventSource: "webContents", eventName, handlerArgs }
            );
          }
        )
      );
    }
  }
  stopLogging() {
    this.disposeListeners();
  }
  arrayToObject(array, fieldNames) {
    const obj = {};
    fieldNames.forEach((fieldName, index2) => {
      obj[fieldName] = array[index2];
    });
    if (array.length > fieldNames.length) {
      obj.unknownArgs = array.slice(fieldNames.length);
    }
    return obj;
  }
  disposeListeners() {
    this.disposers.forEach((disposer) => disposer());
    this.disposers = [];
  }
  formatEventLog({ eventName, eventSource, handlerArgs }) {
    var _a3;
    const [event, ...args] = handlerArgs;
    if (typeof this.format === "function") {
      return this.format({ args, event, eventName, eventSource });
    }
    const formatter = (_a3 = this.formatters[eventSource]) == null ? void 0 : _a3[eventName];
    let formattedArgs = args;
    if (typeof formatter === "function") {
      formattedArgs = formatter({ args, event, eventName, eventSource });
    }
    if (!formattedArgs) {
      return void 0;
    }
    const eventData = {};
    if (Array.isArray(formattedArgs)) {
      eventData.args = formattedArgs;
    } else if (typeof formattedArgs === "object") {
      Object.assign(eventData, formattedArgs);
    }
    if (eventSource === "webContents") {
      Object.assign(eventData, this.getWebContentsDetails(event == null ? void 0 : event.sender));
    }
    const title = this.format.replace("{eventSource}", eventSource === "app" ? "App" : "WebContents").replace("{eventName}", eventName);
    return [title, eventData];
  }
  getEventNames(eventMap) {
    if (!eventMap || typeof eventMap !== "object") {
      return [];
    }
    return Object.entries(eventMap).filter(([_, listen]) => listen).map(([eventName]) => eventName);
  }
  getWebContentsDetails(webContents) {
    if (!(webContents == null ? void 0 : webContents.loadURL)) {
      return {};
    }
    try {
      return {
        webContents: {
          id: webContents.id,
          url: webContents.getURL()
        }
      };
    } catch {
      return {};
    }
  }
  handleEvent({ eventName, eventSource, handlerArgs }) {
    var _a3;
    const log2 = this.formatEventLog({ eventName, eventSource, handlerArgs });
    if (log2) {
      const logFns = this.scope ? this.logger.scope(this.scope) : this.logger;
      (_a3 = logFns == null ? void 0 : logFns[this.level]) == null ? void 0 : _a3.call(logFns, ...log2);
    }
  }
};
var EventLogger_1 = EventLogger$1;
var transform_1 = { transform: transform$5 };
function transform$5({
  logger: logger2,
  message,
  transport,
  initialData = (message == null ? void 0 : message.data) || [],
  transforms = transport == null ? void 0 : transport.transforms
}) {
  return transforms.reduce((data2, trans) => {
    if (typeof trans === "function") {
      return trans({ data: data2, logger: logger2, message, transport });
    }
    return data2;
  }, initialData);
}
const { transform: transform$4 } = transform_1;
var format$2 = {
  concatFirstStringElements: concatFirstStringElements$2,
  formatScope,
  formatText,
  formatVariables,
  timeZoneFromOffset,
  format({ message, logger: logger2, transport, data: data2 = message == null ? void 0 : message.data }) {
    switch (typeof transport.format) {
      case "string": {
        return transform$4({
          message,
          logger: logger2,
          transforms: [formatVariables, formatScope, formatText],
          transport,
          initialData: [transport.format, ...data2]
        });
      }
      case "function": {
        return transport.format({
          data: data2,
          level: (message == null ? void 0 : message.level) || "info",
          logger: logger2,
          message,
          transport
        });
      }
      default: {
        return data2;
      }
    }
  }
};
function concatFirstStringElements$2({ data: data2 }) {
  if (typeof data2[0] !== "string" || typeof data2[1] !== "string") {
    return data2;
  }
  if (data2[0].match(/%[1cdfiOos]/)) {
    return data2;
  }
  return [`${data2[0]} ${data2[1]}`, ...data2.slice(2)];
}
function timeZoneFromOffset(minutesOffset) {
  const minutesPositive = Math.abs(minutesOffset);
  const sign = minutesOffset > 0 ? "-" : "+";
  const hours = Math.floor(minutesPositive / 60).toString().padStart(2, "0");
  const minutes = (minutesPositive % 60).toString().padStart(2, "0");
  return `${sign}${hours}:${minutes}`;
}
function formatScope({ data: data2, logger: logger2, message }) {
  const { defaultLabel, labelLength } = (logger2 == null ? void 0 : logger2.scope) || {};
  const template = data2[0];
  let label = message.scope;
  if (!label) {
    label = defaultLabel;
  }
  let scopeText;
  if (label === "") {
    scopeText = labelLength > 0 ? "".padEnd(labelLength + 3) : "";
  } else if (typeof label === "string") {
    scopeText = ` (${label})`.padEnd(labelLength + 3);
  } else {
    scopeText = "";
  }
  data2[0] = template.replace("{scope}", scopeText);
  return data2;
}
function formatVariables({ data: data2, message }) {
  let template = data2[0];
  if (typeof template !== "string") {
    return data2;
  }
  template = template.replace("{level}]", `${message.level}]`.padEnd(6, " "));
  const date = message.date || /* @__PURE__ */ new Date();
  data2[0] = template.replace(/\{(\w+)}/g, (substring, name2) => {
    var _a3;
    switch (name2) {
      case "level":
        return message.level || "info";
      case "logId":
        return message.logId;
      case "y":
        return date.getFullYear().toString(10);
      case "m":
        return (date.getMonth() + 1).toString(10).padStart(2, "0");
      case "d":
        return date.getDate().toString(10).padStart(2, "0");
      case "h":
        return date.getHours().toString(10).padStart(2, "0");
      case "i":
        return date.getMinutes().toString(10).padStart(2, "0");
      case "s":
        return date.getSeconds().toString(10).padStart(2, "0");
      case "ms":
        return date.getMilliseconds().toString(10).padStart(3, "0");
      case "z":
        return timeZoneFromOffset(date.getTimezoneOffset());
      case "iso":
        return date.toISOString();
      default: {
        return ((_a3 = message.variables) == null ? void 0 : _a3[name2]) || substring;
      }
    }
  }).trim();
  return data2;
}
function formatText({ data: data2 }) {
  const template = data2[0];
  if (typeof template !== "string") {
    return data2;
  }
  const textTplPosition = template.lastIndexOf("{text}");
  if (textTplPosition === template.length - 6) {
    data2[0] = template.replace(/\s?{text}/, "");
    if (data2[0] === "") {
      data2.shift();
    }
    return data2;
  }
  const templatePieces = template.split("{text}");
  let result = [];
  if (templatePieces[0] !== "") {
    result.push(templatePieces[0]);
  }
  result = result.concat(data2.slice(1));
  if (templatePieces[1] !== "") {
    result.push(templatePieces[1]);
  }
  return result;
}
var object = { exports: {} };
(function(module2) {
  const util2 = require$$0$3;
  module2.exports = {
    serialize,
    maxDepth({ data: data2, transport, depth = (transport == null ? void 0 : transport.depth) ?? 6 }) {
      if (!data2) {
        return data2;
      }
      if (depth < 1) {
        if (Array.isArray(data2)) return "[array]";
        if (typeof data2 === "object" && data2) return "[object]";
        return data2;
      }
      if (Array.isArray(data2)) {
        return data2.map((child) => module2.exports.maxDepth({
          data: child,
          depth: depth - 1
        }));
      }
      if (typeof data2 !== "object") {
        return data2;
      }
      if (data2 && typeof data2.toISOString === "function") {
        return data2;
      }
      if (data2 === null) {
        return null;
      }
      if (data2 instanceof Error) {
        return data2;
      }
      const newJson = {};
      for (const i in data2) {
        if (!Object.prototype.hasOwnProperty.call(data2, i)) continue;
        newJson[i] = module2.exports.maxDepth({
          data: data2[i],
          depth: depth - 1
        });
      }
      return newJson;
    },
    toJSON({ data: data2 }) {
      return JSON.parse(JSON.stringify(data2, createSerializer()));
    },
    toString({ data: data2, transport }) {
      const inspectOptions = (transport == null ? void 0 : transport.inspectOptions) || {};
      const simplifiedData = data2.map((item) => {
        if (item === void 0) {
          return void 0;
        }
        try {
          const str = JSON.stringify(item, createSerializer(), "  ");
          return str === void 0 ? void 0 : JSON.parse(str);
        } catch (e) {
          return item;
        }
      });
      return util2.formatWithOptions(inspectOptions, ...simplifiedData);
    }
  };
  function createSerializer(options = {}) {
    const seen = /* @__PURE__ */ new WeakSet();
    return function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return void 0;
        }
        seen.add(value);
      }
      return serialize(key, value, options);
    };
  }
  function serialize(key, value, options = {}) {
    const serializeMapAndSet = (options == null ? void 0 : options.serializeMapAndSet) !== false;
    if (value instanceof Error) {
      return value.stack;
    }
    if (!value) {
      return value;
    }
    if (typeof value === "function") {
      return `[function] ${value.toString()}`;
    }
    if (value instanceof Date) {
      return value.toISOString();
    }
    if (serializeMapAndSet && value instanceof Map && Object.fromEntries) {
      return Object.fromEntries(value);
    }
    if (serializeMapAndSet && value instanceof Set && Array.from) {
      return Array.from(value);
    }
    return value;
  }
})(object);
var objectExports = object.exports;
var style = {
  transformStyles,
  applyAnsiStyles({ data: data2 }) {
    return transformStyles(data2, styleToAnsi, resetAnsiStyle);
  },
  removeStyles({ data: data2 }) {
    return transformStyles(data2, () => "");
  }
};
const ANSI_COLORS = {
  unset: "\x1B[0m",
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m"
};
function styleToAnsi(style2) {
  const color = style2.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
  return ANSI_COLORS[color] || "";
}
function resetAnsiStyle(string) {
  return string + ANSI_COLORS.unset;
}
function transformStyles(data2, onStyleFound, onStyleApplied) {
  const foundStyles = {};
  return data2.reduce((result, item, index2, array) => {
    if (foundStyles[index2]) {
      return result;
    }
    if (typeof item === "string") {
      let valueIndex = index2;
      let styleApplied = false;
      item = item.replace(/%[1cdfiOos]/g, (match) => {
        valueIndex += 1;
        if (match !== "%c") {
          return match;
        }
        const style2 = array[valueIndex];
        if (typeof style2 === "string") {
          foundStyles[valueIndex] = true;
          styleApplied = true;
          return onStyleFound(style2, item);
        }
        return match;
      });
      if (styleApplied && onStyleApplied) {
        item = onStyleApplied(item);
      }
    }
    result.push(item);
    return result;
  }, []);
}
const { concatFirstStringElements: concatFirstStringElements$1, format: format$1 } = format$2;
const { maxDepth: maxDepth$2, toJSON: toJSON$2 } = objectExports;
const { applyAnsiStyles, removeStyles: removeStyles$2 } = style;
const { transform: transform$3 } = transform_1;
const consoleMethods = {
  error: console.error,
  warn: console.warn,
  info: console.info,
  verbose: console.info,
  debug: console.debug,
  silly: console.debug,
  log: console.log
};
var console_1 = consoleTransportFactory;
const separator = process.platform === "win32" ? ">" : "›";
const DEFAULT_FORMAT = `%c{h}:{i}:{s}.{ms}{scope}%c ${separator} {text}`;
Object.assign(consoleTransportFactory, {
  DEFAULT_FORMAT
});
function consoleTransportFactory(logger2) {
  return Object.assign(transport, {
    format: DEFAULT_FORMAT,
    level: "silly",
    transforms: [
      addTemplateColors,
      format$1,
      formatStyles,
      concatFirstStringElements$1,
      maxDepth$2,
      toJSON$2
    ],
    useStyles: process.env.FORCE_STYLES,
    writeFn({ message }) {
      const consoleLogFn = consoleMethods[message.level] || consoleMethods.info;
      consoleLogFn(...message.data);
    }
  });
  function transport(message) {
    const data2 = transform$3({ logger: logger2, message, transport });
    transport.writeFn({
      message: { ...message, data: data2 }
    });
  }
}
function addTemplateColors({ data: data2, message, transport }) {
  if (transport.format !== DEFAULT_FORMAT) {
    return data2;
  }
  return [`color:${levelToStyle(message.level)}`, "color:unset", ...data2];
}
function canUseStyles(useStyleValue, level) {
  if (typeof useStyleValue === "boolean") {
    return useStyleValue;
  }
  const useStderr = level === "error" || level === "warn";
  const stream2 = useStderr ? process.stderr : process.stdout;
  return stream2 && stream2.isTTY;
}
function formatStyles(args) {
  const { message, transport } = args;
  const useStyles = canUseStyles(transport.useStyles, message.level);
  const nextTransform = useStyles ? applyAnsiStyles : removeStyles$2;
  return nextTransform(args);
}
function levelToStyle(level) {
  const map = { error: "red", warn: "yellow", info: "cyan", default: "unset" };
  return map[level] || map.default;
}
const EventEmitter$1 = require$$0$4;
const fs$6 = require$$0$1;
const os$4 = require$$1$3;
let File$2 = class File extends EventEmitter$1 {
  constructor({
    path: path2,
    writeOptions = { encoding: "utf8", flag: "a", mode: 438 },
    writeAsync = false
  }) {
    super();
    __publicField(this, "asyncWriteQueue", []);
    __publicField(this, "bytesWritten", 0);
    __publicField(this, "hasActiveAsyncWriting", false);
    __publicField(this, "path", null);
    __publicField(this, "initialSize");
    __publicField(this, "writeOptions", null);
    __publicField(this, "writeAsync", false);
    this.path = path2;
    this.writeOptions = writeOptions;
    this.writeAsync = writeAsync;
  }
  get size() {
    return this.getSize();
  }
  clear() {
    try {
      fs$6.writeFileSync(this.path, "", {
        mode: this.writeOptions.mode,
        flag: "w"
      });
      this.reset();
      return true;
    } catch (e) {
      if (e.code === "ENOENT") {
        return true;
      }
      this.emit("error", e, this);
      return false;
    }
  }
  crop(bytesAfter) {
    try {
      const content = readFileSyncFromEnd(this.path, bytesAfter || 4096);
      this.clear();
      this.writeLine(`[log cropped]${os$4.EOL}${content}`);
    } catch (e) {
      this.emit(
        "error",
        new Error(`Couldn't crop file ${this.path}. ${e.message}`),
        this
      );
    }
  }
  getSize() {
    if (this.initialSize === void 0) {
      try {
        const stats = fs$6.statSync(this.path);
        this.initialSize = stats.size;
      } catch (e) {
        this.initialSize = 0;
      }
    }
    return this.initialSize + this.bytesWritten;
  }
  increaseBytesWrittenCounter(text) {
    this.bytesWritten += Buffer.byteLength(text, this.writeOptions.encoding);
  }
  isNull() {
    return false;
  }
  nextAsyncWrite() {
    const file2 = this;
    if (this.hasActiveAsyncWriting || this.asyncWriteQueue.length === 0) {
      return;
    }
    const text = this.asyncWriteQueue.join("");
    this.asyncWriteQueue = [];
    this.hasActiveAsyncWriting = true;
    fs$6.writeFile(this.path, text, this.writeOptions, (e) => {
      file2.hasActiveAsyncWriting = false;
      if (e) {
        file2.emit(
          "error",
          new Error(`Couldn't write to ${file2.path}. ${e.message}`),
          this
        );
      } else {
        file2.increaseBytesWrittenCounter(text);
      }
      file2.nextAsyncWrite();
    });
  }
  reset() {
    this.initialSize = void 0;
    this.bytesWritten = 0;
  }
  toString() {
    return this.path;
  }
  writeLine(text) {
    text += os$4.EOL;
    if (this.writeAsync) {
      this.asyncWriteQueue.push(text);
      this.nextAsyncWrite();
      return;
    }
    try {
      fs$6.writeFileSync(this.path, text, this.writeOptions);
      this.increaseBytesWrittenCounter(text);
    } catch (e) {
      this.emit(
        "error",
        new Error(`Couldn't write to ${this.path}. ${e.message}`),
        this
      );
    }
  }
};
var File_1 = File$2;
function readFileSyncFromEnd(filePath, bytesCount) {
  const buffer2 = Buffer.alloc(bytesCount);
  const stats = fs$6.statSync(filePath);
  const readLength = Math.min(stats.size, bytesCount);
  const offset = Math.max(0, stats.size - bytesCount);
  const fd = fs$6.openSync(filePath, "r");
  const totalBytes = fs$6.readSync(fd, buffer2, 0, readLength, offset);
  fs$6.closeSync(fd);
  return buffer2.toString("utf8", 0, totalBytes);
}
const File$1 = File_1;
let NullFile$1 = class NullFile extends File$1 {
  clear() {
  }
  crop() {
  }
  getSize() {
    return 0;
  }
  isNull() {
    return true;
  }
  writeLine() {
  }
};
var NullFile_1 = NullFile$1;
const EventEmitter = require$$0$4;
const fs$5 = require$$0$1;
const path$a = path$f;
const File2 = File_1;
const NullFile2 = NullFile_1;
let FileRegistry$1 = class FileRegistry extends EventEmitter {
  constructor() {
    super();
    __publicField(this, "store", {});
    this.emitError = this.emitError.bind(this);
  }
  /**
   * Provide a File object corresponding to the filePath
   * @param {string} filePath
   * @param {WriteOptions} [writeOptions]
   * @param {boolean} [writeAsync]
   * @return {File}
   */
  provide({ filePath, writeOptions = {}, writeAsync = false }) {
    let file2;
    try {
      filePath = path$a.resolve(filePath);
      if (this.store[filePath]) {
        return this.store[filePath];
      }
      file2 = this.createFile({ filePath, writeOptions, writeAsync });
    } catch (e) {
      file2 = new NullFile2({ path: filePath });
      this.emitError(e, file2);
    }
    file2.on("error", this.emitError);
    this.store[filePath] = file2;
    return file2;
  }
  /**
   * @param {string} filePath
   * @param {WriteOptions} writeOptions
   * @param {boolean} async
   * @return {File}
   * @private
   */
  createFile({ filePath, writeOptions, writeAsync }) {
    this.testFileWriting({ filePath, writeOptions });
    return new File2({ path: filePath, writeOptions, writeAsync });
  }
  /**
   * @param {Error} error
   * @param {File} file
   * @private
   */
  emitError(error, file2) {
    this.emit("error", error, file2);
  }
  /**
   * @param {string} filePath
   * @param {WriteOptions} writeOptions
   * @private
   */
  testFileWriting({ filePath, writeOptions }) {
    fs$5.mkdirSync(path$a.dirname(filePath), { recursive: true });
    fs$5.writeFileSync(filePath, "", { flag: "a", mode: writeOptions.mode });
  }
};
var FileRegistry_1 = FileRegistry$1;
const fs$4 = require$$0$1;
const os$3 = require$$1$3;
const path$9 = path$f;
const FileRegistry2 = FileRegistry_1;
const { transform: transform$2 } = transform_1;
const { removeStyles: removeStyles$1 } = style;
const {
  format,
  concatFirstStringElements
} = format$2;
const { toString } = objectExports;
var file = fileTransportFactory;
const globalRegistry = new FileRegistry2();
function fileTransportFactory(logger2, { registry = globalRegistry, externalApi: externalApi2 } = {}) {
  let pathVariables;
  if (registry.listenerCount("error") < 1) {
    registry.on("error", (e, file2) => {
      logConsole(`Can't write to ${file2}`, e);
    });
  }
  return Object.assign(transport, {
    fileName: getDefaultFileName(logger2.variables.processType),
    format: "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}",
    getFile,
    inspectOptions: { depth: 5 },
    level: "silly",
    maxSize: 1024 ** 2,
    readAllLogs,
    sync: true,
    transforms: [removeStyles$1, format, concatFirstStringElements, toString],
    writeOptions: { flag: "a", mode: 438, encoding: "utf8" },
    archiveLogFn(file2) {
      const oldPath = file2.toString();
      const inf = path$9.parse(oldPath);
      try {
        fs$4.renameSync(oldPath, path$9.join(inf.dir, `${inf.name}.old${inf.ext}`));
      } catch (e) {
        logConsole("Could not rotate log", e);
        const quarterOfMaxSize = Math.round(transport.maxSize / 4);
        file2.crop(Math.min(quarterOfMaxSize, 256 * 1024));
      }
    },
    resolvePathFn(vars) {
      return path$9.join(vars.libraryDefaultDir, vars.fileName);
    },
    setAppName(name2) {
      logger2.dependencies.externalApi.setAppName(name2);
    }
  });
  function transport(message) {
    const file2 = getFile(message);
    const needLogRotation = transport.maxSize > 0 && file2.size > transport.maxSize;
    if (needLogRotation) {
      transport.archiveLogFn(file2);
      file2.reset();
    }
    const content = transform$2({ logger: logger2, message, transport });
    file2.writeLine(content);
  }
  function initializeOnFirstAccess() {
    if (pathVariables) {
      return;
    }
    pathVariables = Object.create(
      Object.prototype,
      {
        ...Object.getOwnPropertyDescriptors(
          externalApi2.getPathVariables()
        ),
        fileName: {
          get() {
            return transport.fileName;
          },
          enumerable: true
        }
      }
    );
    if (typeof transport.archiveLog === "function") {
      transport.archiveLogFn = transport.archiveLog;
      logConsole("archiveLog is deprecated. Use archiveLogFn instead");
    }
    if (typeof transport.resolvePath === "function") {
      transport.resolvePathFn = transport.resolvePath;
      logConsole("resolvePath is deprecated. Use resolvePathFn instead");
    }
  }
  function logConsole(message, error = null, level = "error") {
    const data2 = [`electron-log.transports.file: ${message}`];
    if (error) {
      data2.push(error);
    }
    logger2.transports.console({ data: data2, date: /* @__PURE__ */ new Date(), level });
  }
  function getFile(msg) {
    initializeOnFirstAccess();
    const filePath = transport.resolvePathFn(pathVariables, msg);
    return registry.provide({
      filePath,
      writeAsync: !transport.sync,
      writeOptions: transport.writeOptions
    });
  }
  function readAllLogs({ fileFilter = (f) => f.endsWith(".log") } = {}) {
    initializeOnFirstAccess();
    const logsPath = path$9.dirname(transport.resolvePathFn(pathVariables));
    if (!fs$4.existsSync(logsPath)) {
      return [];
    }
    return fs$4.readdirSync(logsPath).map((fileName) => path$9.join(logsPath, fileName)).filter(fileFilter).map((logPath) => {
      try {
        return {
          path: logPath,
          lines: fs$4.readFileSync(logPath, "utf8").split(os$3.EOL)
        };
      } catch {
        return null;
      }
    }).filter(Boolean);
  }
}
function getDefaultFileName(processType = process.type) {
  switch (processType) {
    case "renderer":
      return "renderer.log";
    case "worker":
      return "worker.log";
    default:
      return "main.log";
  }
}
const { maxDepth: maxDepth$1, toJSON: toJSON$1 } = objectExports;
const { transform: transform$1 } = transform_1;
var ipc = ipcTransportFactory;
function ipcTransportFactory(logger2, { externalApi: externalApi2 }) {
  Object.assign(transport, {
    depth: 3,
    eventId: "__ELECTRON_LOG_IPC__",
    level: logger2.isDev ? "silly" : false,
    transforms: [toJSON$1, maxDepth$1]
  });
  return (externalApi2 == null ? void 0 : externalApi2.isElectron()) ? transport : void 0;
  function transport(message) {
    var _a3;
    if (((_a3 = message == null ? void 0 : message.variables) == null ? void 0 : _a3.processType) === "renderer") {
      return;
    }
    externalApi2 == null ? void 0 : externalApi2.sendIpc(transport.eventId, {
      ...message,
      data: transform$1({ logger: logger2, message, transport })
    });
  }
}
const http$2 = require$$0$5;
const https$2 = require$$1$4;
const { transform } = transform_1;
const { removeStyles } = style;
const { toJSON, maxDepth } = objectExports;
var remote = remoteTransportFactory;
function remoteTransportFactory(logger2) {
  return Object.assign(transport, {
    client: { name: "electron-application" },
    depth: 6,
    level: false,
    requestOptions: {},
    transforms: [removeStyles, toJSON, maxDepth],
    makeBodyFn({ message }) {
      return JSON.stringify({
        client: transport.client,
        data: message.data,
        date: message.date.getTime(),
        level: message.level,
        scope: message.scope,
        variables: message.variables
      });
    },
    processErrorFn({ error }) {
      logger2.processMessage(
        {
          data: [`electron-log: can't POST ${transport.url}`, error],
          level: "warn"
        },
        { transports: ["console", "file"] }
      );
    },
    sendRequestFn({ serverUrl, requestOptions, body }) {
      const httpTransport = serverUrl.startsWith("https:") ? https$2 : http$2;
      const request = httpTransport.request(serverUrl, {
        method: "POST",
        ...requestOptions,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": body.length,
          ...requestOptions.headers
        }
      });
      request.write(body);
      request.end();
      return request;
    }
  });
  function transport(message) {
    if (!transport.url) {
      return;
    }
    const body = transport.makeBodyFn({
      logger: logger2,
      message: { ...message, data: transform({ logger: logger2, message, transport }) },
      transport
    });
    const request = transport.sendRequestFn({
      serverUrl: transport.url,
      requestOptions: transport.requestOptions,
      body: Buffer.from(body, "utf8")
    });
    request.on("error", (error) => transport.processErrorFn({
      error,
      logger: logger2,
      message,
      request,
      transport
    }));
  }
}
const Logger = Logger_1;
const ErrorHandler2 = ErrorHandler_1;
const EventLogger2 = EventLogger_1;
const transportConsole = console_1;
const transportFile = file;
const transportIpc = ipc;
const transportRemote = remote;
var createDefaultLogger_1 = createDefaultLogger$1;
function createDefaultLogger$1({ dependencies: dependencies2, initializeFn }) {
  var _a3;
  const defaultLogger2 = new Logger({
    dependencies: dependencies2,
    errorHandler: new ErrorHandler2(),
    eventLogger: new EventLogger2(),
    initializeFn,
    isDev: (_a3 = dependencies2.externalApi) == null ? void 0 : _a3.isDev(),
    logId: "default",
    transportFactories: {
      console: transportConsole,
      file: transportFile,
      ipc: transportIpc,
      remote: transportRemote
    },
    variables: {
      processType: "main"
    }
  });
  defaultLogger2.default = defaultLogger2;
  defaultLogger2.Logger = Logger;
  defaultLogger2.processInternalErrorFn = (e) => {
    defaultLogger2.transports.console.writeFn({
      message: {
        data: ["Unhandled electron-log error", e],
        level: "error"
      }
    });
  };
  return defaultLogger2;
}
const electron = electron$1;
const ElectronExternalApi2 = ElectronExternalApi_1;
const { initialize } = initialize$1;
const createDefaultLogger = createDefaultLogger_1;
const externalApi = new ElectronExternalApi2({ electron });
const defaultLogger = createDefaultLogger({
  dependencies: { externalApi },
  initializeFn: initialize
});
var main$2 = defaultLogger;
externalApi.onIpc("__ELECTRON_LOG__", (_, message) => {
  if (message.scope) {
    defaultLogger.Logger.getInstance(message).scope(message.scope);
  }
  const date = new Date(message.date);
  processMessage({
    ...message,
    date: date.getTime() ? date : /* @__PURE__ */ new Date()
  });
});
externalApi.onIpcInvoke("__ELECTRON_LOG__", (_, { cmd = "", logId }) => {
  switch (cmd) {
    case "getOptions": {
      const logger2 = defaultLogger.Logger.getInstance({ logId });
      return {
        levels: logger2.levels,
        logId
      };
    }
    default: {
      processMessage({ data: [`Unknown cmd '${cmd}'`], level: "error" });
      return {};
    }
  }
});
function processMessage(message) {
  var _a3;
  (_a3 = defaultLogger.Logger.getInstance(message)) == null ? void 0 : _a3.processMessage(message);
}
const main$1 = main$2;
var main_1 = main$1;
const log$2 = /* @__PURE__ */ getDefaultExportFromCjs(main_1);
const IPC_CHANNELS = {
  LOADING_PROGRESS: "loading-progress",
  IS_PACKAGED: "is-packaged",
  RENDERER_READY: "renderer-ready",
  RESTART_APP: "restart-app",
  REINSTALL: "reinstall",
  QUIT: "quit",
  LOG_MESSAGE: "log-message",
  DOWNLOAD_PROGRESS: "download-progress",
  START_DOWNLOAD: "start-download",
  PAUSE_DOWNLOAD: "pause-download",
  RESUME_DOWNLOAD: "resume-download",
  CANCEL_DOWNLOAD: "cancel-download",
  DELETE_MODEL: "delete-model",
  GET_ALL_DOWNLOADS: "get-all-downloads",
  GET_ELECTRON_VERSION: "get-electron-version",
  GET_BASE_PATH: "get-base-path",
  SET_BASE_PATH: "set-base-path",
  GET_MODEL_CONFIG_PATH: "get-model-config-path",
  OPEN_PATH: "open-path",
  OPEN_LOGS_PATH: "open-logs-path",
  OPEN_DEV_TOOLS: "open-dev-tools",
  TERMINAL_WRITE: "execute-terminal-command",
  TERMINAL_RESIZE: "resize-terminal",
  TERMINAL_RESTORE: "restore-terminal",
  TERMINAL_ON_OUTPUT: "terminal-output",
  GET_SYSTEM_PATHS: "get-system-paths",
  VALIDATE_INSTALL_PATH: "validate-install-path",
  VALIDATE_COMFYUI_SOURCE: "validate-comfyui-source",
  SHOW_DIRECTORY_PICKER: "show-directory-picker",
  INSTALL_COMFYUI: "install-comfyui",
  CHANGE_THEME: "change-theme",
  SHOW_CONTEXT_MENU: "show-context-menu",
  RESTART_CORE: "restart-core",
  GET_GPU: "get-gpu",
  SET_WINDOW_STYLE: "set-window-style",
  GET_VALIDATION_STATE: "get-validation-state",
  VALIDATION_UPDATE: "validation-update",
  COMPLETE_VALIDATION: "complete-validation",
  CANCEL_VALIDATION: "cancel-validation",
  VALIDATE_INSTALLATION: "start-validation",
  UV_INSTALL_REQUIREMENTS: "uv-install-requirements",
  GET_WINDOW_STYLE: "get-window-style",
  TRACK_EVENT: "track-event",
  SET_METRICS_CONSENT: "set-metrics-consent",
  INCREMENT_USER_PROPERTY: "increment-user-property",
  UV_CLEAR_CACHE: "uv-clear-cache",
  UV_RESET_VENV: "uv-delete-venv",
  CAN_ACCESS_URL: "can-access-url",
  START_TROUBLESHOOTING: "start-troubleshooting",
  DISABLE_CUSTOM_NODES: "disable-custom-nodes",
  CHECK_FOR_UPDATES: "check-for-updates",
  RESTART_AND_INSTALL: "restart-and-install",
  CHECK_BLACKWELL: "check-blackwell"
};
var ProgressStatus = /* @__PURE__ */ ((ProgressStatus2) => {
  ProgressStatus2["INITIAL_STATE"] = "initial-state";
  ProgressStatus2["PYTHON_SETUP"] = "python-setup";
  ProgressStatus2["STARTING_SERVER"] = "starting-server";
  ProgressStatus2["READY"] = "ready";
  ProgressStatus2["ERROR"] = "error";
  return ProgressStatus2;
})(ProgressStatus || {});
const SENTRY_URL_ENDPOINT = "https://942cadba58d247c9cab96f45221aa813@o4507954455314432.ingest.us.sentry.io/4508007940685824";
const DEFAULT_SERVER_ARGS = {
  listen: "127.0.0.1",
  port: "8000"
};
var DownloadStatus = /* @__PURE__ */ ((DownloadStatus2) => {
  DownloadStatus2["PENDING"] = "pending";
  DownloadStatus2["IN_PROGRESS"] = "in_progress";
  DownloadStatus2["COMPLETED"] = "completed";
  DownloadStatus2["PAUSED"] = "paused";
  DownloadStatus2["ERROR"] = "error";
  DownloadStatus2["CANCELLED"] = "cancelled";
  return DownloadStatus2;
})(DownloadStatus || {});
var TorchMirrorUrl = /* @__PURE__ */ ((TorchMirrorUrl2) => {
  TorchMirrorUrl2["Default"] = "https://pypi.org/simple/";
  TorchMirrorUrl2["Cuda"] = "https://download.pytorch.org/whl/cu128";
  TorchMirrorUrl2["NightlyCuda"] = "https://download.pytorch.org/whl/nightly/cu128";
  TorchMirrorUrl2["NightlyCpu"] = "https://download.pytorch.org/whl/nightly/cpu";
  return TorchMirrorUrl2;
})(TorchMirrorUrl || {});
var LogFile = /* @__PURE__ */ ((LogFile2) => {
  LogFile2["ComfyUI"] = "comfyui.log";
  LogFile2["Main"] = "main.log";
  return LogFile2;
})(LogFile || {});
function registerAppHandlers() {
  electron$1.ipcMain.handle(IPC_CHANNELS.QUIT, () => {
    log$2.info("Received quit IPC request. Quitting app...");
    electron$1.app.quit();
  });
  electron$1.ipcMain.handle(
    IPC_CHANNELS.RESTART_APP,
    async (_event, { customMessage, delay: delay2 }) => {
      function relaunchApplication(delay22) {
        if (delay22) {
          setTimeout(() => {
            electron$1.app.relaunch();
            electron$1.app.quit();
          }, delay22);
        } else {
          electron$1.app.relaunch();
          electron$1.app.quit();
        }
      }
      const delayText = delay2 ? `in ${delay2}ms` : "immediately";
      if (!customMessage) {
        log$2.info(`Relaunching application ${delayText}`);
        return relaunchApplication(delay2);
      }
      log$2.info(`Relaunching application ${delayText} with custom confirmation message: ${customMessage}`);
      const { response } = await electron$1.dialog.showMessageBox({
        type: "question",
        buttons: ["Yes", "No"],
        defaultId: 0,
        title: "Restart ComfyUI",
        message: customMessage,
        detail: "The application will close and restart automatically."
      });
      if (response === 0) {
        log$2.info("User confirmed restart");
        relaunchApplication(delay2);
      } else {
        log$2.info("User cancelled restart");
      }
    }
  );
  electron$1.ipcMain.handle(
    IPC_CHANNELS.CHECK_FOR_UPDATES,
    async (options) => {
      var _a3;
      log$2.info("Manually checking for updates");
      const updater = todesktop.autoUpdater;
      if (!updater) {
        log$2.error("todesktop.autoUpdater is not available");
        throw new Error("todesktop.autoUpdater is not available");
      }
      const result = await updater.checkForUpdates(options);
      if (result.updateInfo) {
        const { version: version2, releaseDate } = result.updateInfo;
        const prettyDate = new Date(releaseDate).toLocaleString();
        log$2.info(`Update available: version ${version2} released on ${prettyDate}`);
      } else {
        log$2.info("No updates available");
      }
      return {
        isUpdateAvailable: !!result.updateInfo,
        version: (_a3 = result.updateInfo) == null ? void 0 : _a3.version
      };
    }
  );
  electron$1.ipcMain.handle(IPC_CHANNELS.RESTART_AND_INSTALL, (options) => {
    log$2.info("Restarting and installing update");
    const updater = todesktop.autoUpdater;
    if (!updater) {
      log$2.error("todesktop.autoUpdater is not available");
      throw new Error("todesktop.autoUpdater is not available");
    }
    try {
      updater.restartAndInstall(options);
    } catch (error) {
      log$2.error(`Failed to restart and install update`, error);
      throw new Error(`Failed to restart and install update: ${error}`);
    }
  });
}
let current$1;
function useDesktopConfig() {
  if (!current$1) throw new Error("Cannot access store before initialization.");
  return current$1;
}
const _DesktopConfig = class _DesktopConfig {
  constructor(store) {
    __privateAdd(this, _store);
    __privateSet(this, _store, store);
  }
  /** @inheritdoc {@link ElectronStore.get} */
  get(key, defaultValue) {
    log$2.verbose("Getting config:", key);
    return defaultValue === void 0 ? __privateGet(this, _store).get(key) : __privateGet(this, _store).get(key, defaultValue);
  }
  /** @inheritdoc {@link ElectronStore.set} */
  set(key, value) {
    log$2.verbose("Saving config:", key, "->", value);
    return value === void 0 ? __privateGet(this, _store).delete(key) : __privateGet(this, _store).set(key, value);
  }
  /** @inheritdoc {@link ElectronStore.delete} */
  delete(key) {
    __privateGet(this, _store).delete(key);
  }
  async permanentlyDeleteConfigFile() {
    await fsPromises.rm(path$g.join(electron$1.app.getPath("userData"), "config.json"));
  }
  /**
   * Static factory method. Loads the config from disk.
   * @param shell Shell environment that can open file and folder views for the user
   * @param options electron-store options to pass through to the backing store
   * @returns The newly created instance, or `undefined` on error.
   * @throws On unknown error
   */
  static async load(shell, options) {
    try {
      const store = new ElectronStore(options);
      current$1 = new _DesktopConfig(store);
      return current$1;
    } catch (error) {
      const configFilePath = path$g.join(getUserDataOrQuit(), `${(options == null ? void 0 : options.name) ?? "config"}.json`);
      if (error instanceof SyntaxError) {
        const { response } = await showResetPrompt(configFilePath);
        if (response === 1) {
          shell.showItemInFolder(configFilePath);
        } else if (response === 0) {
          const { response: response2 } = await showConfirmReset(configFilePath);
          if (response2 === 0) {
            shell.showItemInFolder(configFilePath);
          } else if (response2 === 1) {
            await tryDeleteConfigFile(configFilePath);
            return _DesktopConfig.load(shell, options);
          }
        }
        electron$1.app.quit();
      } else {
        log$2.error(`Unknown error whilst loading configuration file: ${configFilePath}`, error);
      }
    }
  }
  /**
   * Saves each {@link config} setting individually, returning a promise for the task.
   * @param key The key of {@link DesktopSettings} to save
   * @param value The value to be saved.  Must be valid.
   * @returns A promise that resolves on successful save, or rejects with the first caught error.
   */
  async setAsync(key, value) {
    return new Promise((resolve3) => {
      log$2.info(`Saving setting: [${key}]`, value);
      __privateGet(this, _store).set(key, value);
      resolve3();
    });
  }
  /** @inheritdoc {@link ElectronStore.get} */
  async getAsync(key) {
    return new Promise((resolve3) => resolve3(__privateGet(this, _store).get(key)));
  }
};
_store = new WeakMap();
let DesktopConfig = _DesktopConfig;
function showResetPrompt(configFilePath) {
  return electron$1.dialog.showMessageBox({
    title: "Invalid configuration file",
    type: "error",
    message: `Format of the configuration file below is invalid.  It should be a JSON file containing only ComfyUI configuration options.

${configFilePath}`,
    buttons: ["&Reset desktop configuration", "Show the &file (and quit)", "&Quit"],
    defaultId: 0,
    cancelId: 2,
    normalizeAccessKeys: true
  });
}
function showConfirmReset(configFilePath) {
  return electron$1.dialog.showMessageBox({
    title: "Confirm reset settings",
    type: "warning",
    message: `The configuration file below will be cleared and all settings will be reset.  You should back this file up before deleting it.

${configFilePath}`,
    buttons: ["Show the &file (and quit)", "&Yes, delete all settings", "&Quit"],
    defaultId: 0,
    cancelId: 2,
    normalizeAccessKeys: true
  });
}
async function tryDeleteConfigFile(configFilePath) {
  try {
    await fsPromises.rm(configFilePath);
  } catch (error) {
    log$2.error(`Unable to delete configuration file: ${configFilePath}`, error);
    electron$1.dialog.showErrorBox("Delete Failed", `Unknown error whilst attempting to delete config file:

${configFilePath}`);
  }
}
function getUserDataOrQuit() {
  try {
    return electron$1.app.getPath("userData");
  } catch (error) {
    log$2.error("Cannot find user data folder.", error);
    electron$1.dialog.showErrorBox("User Data", "Unknown error whilst attempting to determine user data folder.");
    electron$1.app.quit();
    throw error;
  }
}
function registerAppInfoHandlers() {
  electron$1.ipcMain.handle(IPC_CHANNELS.IS_PACKAGED, () => {
    return electron$1.app.isPackaged;
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.GET_ELECTRON_VERSION, () => {
    return electron$1.app.getVersion();
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.GET_BASE_PATH, () => {
    return useDesktopConfig().get("basePath");
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.GET_GPU, async () => {
    return await useDesktopConfig().getAsync("detectedGpu");
  });
  electron$1.ipcMain.handle(
    IPC_CHANNELS.SET_WINDOW_STYLE,
    async (_event, style2) => {
      await useDesktopConfig().setAsync("windowStyle", style2);
    }
  );
  electron$1.ipcMain.handle(IPC_CHANNELS.GET_WINDOW_STYLE, async () => {
    return await useDesktopConfig().getAsync("windowStyle");
  });
}
const execAsync$1 = util$2.promisify(node_child_process.exec);
function registerGpuHandlers() {
  electron$1.ipcMain.handle(IPC_CHANNELS.CHECK_BLACKWELL, async () => {
    try {
      const { stdout } = await execAsync$1("nvidia-smi -q");
      return /Product Architecture\s*:\s*Blackwell/.test(stdout);
    } catch {
      return false;
    }
  });
}
async function pathAccessible(path2) {
  try {
    await fsPromises.access(path2);
    return true;
  } catch {
    return false;
  }
}
async function canExecute(path2) {
  try {
    await fsPromises.access(path2, fsPromises.constants.X_OK);
    return true;
  } catch {
    return false;
  }
}
async function canExecuteShellCommand(command, timeout = 5e3) {
  const proc = node_child_process.exec(command);
  return new Promise((resolve3, reject) => {
    setTimeout(() => {
      proc.kill();
      reject(new Error("Timed out attempting to execute git"));
    }, timeout);
    proc.on("exit", (code) => resolve3(code === 0));
  });
}
function getModelsDirectory(comfyUIBasePath) {
  return path$g.join(comfyUIBasePath, "models");
}
function findAvailablePort(host, startPort, endPort) {
  return new Promise((resolve3, reject) => {
    function tryPort(port) {
      if (port > endPort) {
        reject(new Error(`No available ports found between ${startPort} and ${endPort}`));
        return;
      }
      const server = net$2.createServer();
      server.listen(port, host, () => {
        server.once("close", () => {
          resolve3(port);
        });
        server.close();
      });
      server.on("error", () => {
        tryPort(port + 1);
      });
    }
    tryPort(startPort);
  });
}
async function rotateLogFiles(logDir, baseName, maxFiles = 50) {
  const currentLogPath = path$g.join(logDir, `${baseName}`);
  try {
    await fsPromises.access(logDir, fs$9.constants.R_OK | fs$9.constants.W_OK);
    await fsPromises.access(currentLogPath);
  } catch {
    log$2.error("Log rotation: cannot access log dir", currentLogPath);
    return;
  }
  if (maxFiles > 0) {
    const files2 = await fsPromises.readdir(logDir, { withFileTypes: true });
    const names = [];
    const logFileRegex = new RegExp(`^${baseName}_\\d{4}-\\d{2}-\\d{2}T\\d{2}-\\d{2}-\\d{2}-\\d{3}Z\\.log$`);
    for (const file2 of files2) {
      if (file2.isFile() && logFileRegex.test(file2.name)) names.push(file2.name);
    }
    if (names.length > maxFiles) {
      names.sort();
      await fsPromises.unlink(path$g.join(logDir, names[0]));
    }
  }
  const timestamp = (/* @__PURE__ */ new Date()).toISOString().replaceAll(/[.:]/g, "-");
  const newLogPath = path$g.join(logDir, `${baseName}_${timestamp}.log`);
  await fsPromises.rename(currentLogPath, newLogPath);
}
const execAsync = util$2.promisify(node_child_process.exec);
async function validateHardware() {
  log$2.verbose("Validating hardware.");
  try {
    if (process.platform === "darwin") {
      const cpu = await si.cpu();
      const isArmMac = cpu.manufacturer === "Apple";
      if (!isArmMac) {
        return {
          isValid: false,
          error: "ComfyUI requires Apple Silicon (M1/M2/M3) Mac. Intel-based Macs are not supported."
        };
      }
      return { isValid: true, gpu: "mps" };
    }
    if (process.platform === "win32") {
      const graphics = await si.graphics();
      const hasNvidia = graphics.controllers.some((controller) => controller.vendor.toLowerCase().includes("nvidia"));
      if (process.env.SKIP_HARDWARE_VALIDATION) {
        console.log("Skipping hardware validation");
        return { isValid: true };
      }
      if (!hasNvidia) {
        try {
          const res = await execAsync(
            `powershell.exe -c "$n = '*NVIDIA*'; Get-CimInstance win32_videocontroller | ? { $_.Name -like $n -or $_.VideoProcessor -like $n -or $_.AdapterCompatibility -like $n }"`
          );
          if (!(res == null ? void 0 : res.stdout)) throw new Error("No NVIDIA GPU detected");
        } catch {
          try {
            await execAsync("nvidia-smi");
          } catch {
            return {
              isValid: false,
              error: "ComfyUI requires an NVIDIA GPU on Windows. No NVIDIA GPU was detected."
            };
          }
        }
      }
      return { isValid: true, gpu: "nvidia" };
    }
    return {
      isValid: false,
      error: "ComfyUI currently supports only Windows (NVIDIA GPU) and Apple Silicon Macs."
    };
  } catch (error) {
    log$2.error("Error validating hardware:", error);
    return {
      isValid: false,
      error: "Failed to validate system hardware requirements. Please check the logs for more details."
    };
  }
}
const normalize$2 = (version2) => version2.split(/[+.-]/).map(Number).filter((part) => !Number.isNaN(part));
function compareVersions(versionA, versionB) {
  versionA ?? (versionA = "0.0.0");
  versionB ?? (versionB = "0.0.0");
  const aParts = normalize$2(versionA);
  const bParts = normalize$2(versionB);
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aPart = aParts[i] ?? 0;
    const bPart = bParts[i] ?? 0;
    if (aPart < bPart) return -1;
    if (aPart > bPart) return 1;
  }
  return 0;
}
function canAccessUrl(url2, options) {
  const timeout = (options == null ? void 0 : options.timeout) ?? 5e3;
  return new Promise((resolve3) => {
    const req = https$3.get(url2, { timeout }, (res) => {
      const statusCode = res.statusCode ?? 0;
      res.destroy();
      log$2.debug("URL access check result:", url2, statusCode);
      resolve3(statusCode >= 200 && statusCode < 400);
    });
    req.on("error", (error) => {
      log$2.error("Error checking URL access:", url2, error);
      resolve3(false);
    });
    req.on("timeout", () => {
      req.destroy();
      log$2.error("URL access timed out", url2);
      resolve3(false);
    });
  });
}
function clamp(value, min, max2) {
  return Math.min(Math.max(value, min), max2);
}
function registerNetworkHandlers() {
  electron$1.ipcMain.handle(
    IPC_CHANNELS.CAN_ACCESS_URL,
    (event, url2, options) => {
      return canAccessUrl(url2, options);
    }
  );
}
class ComfyConfigManager {
  static isComfyUIDirectory(directory) {
    const requiredSubdirs = ["models", "input", "user", "output", "custom_nodes"];
    return requiredSubdirs.every((subdir) => fs$9.existsSync(path$g.join(directory, subdir)));
  }
  static createComfyDirectories(localComfyDirectory) {
    log$2.info(`Creating ComfyUI directories in ${localComfyDirectory}`);
    try {
      this.createNestedDirectories(localComfyDirectory, this.DEFAULT_DIRECTORIES);
    } catch (error) {
      log$2.error("Failed to create ComfyUI directories:", error);
    }
  }
  static createNestedDirectories(basePath, structure) {
    for (const item of structure) {
      if (typeof item === "string") {
        const dirPath = path$g.join(basePath, item);
        this.createDirIfNotExists(dirPath);
      } else if (Array.isArray(item) && item.length === 2) {
        const [dirName, subDirs] = item;
        if (typeof dirName === "string") {
          const newBasePath = path$g.join(basePath, dirName);
          this.createDirIfNotExists(newBasePath);
          if (Array.isArray(subDirs)) {
            this.createNestedDirectories(newBasePath, subDirs);
          }
        } else {
          log$2.warn("Invalid directory structure item:", item);
        }
      } else {
        log$2.warn("Invalid directory structure item:", item);
      }
    }
  }
  /**
   * Create a directory if not exists
   * @param dirPath
   */
  static createDirIfNotExists(dirPath) {
    if (!fs$9.existsSync(dirPath)) {
      fs$9.mkdirSync(dirPath, { recursive: true });
      log$2.info(`Created directory: ${dirPath}`);
    } else {
      log$2.info(`Directory already exists: ${dirPath}`);
    }
  }
}
__publicField(ComfyConfigManager, "DEFAULT_DIRECTORIES", [
  "custom_nodes",
  "input",
  "output",
  ["user", ["default"]],
  [
    "models",
    [
      "checkpoints",
      "clip",
      "clip_vision",
      "configs",
      "controlnet",
      "diffusers",
      "diffusion_models",
      "embeddings",
      "gligen",
      "hypernetworks",
      "loras",
      "photomaker",
      "style_models",
      "text_encoders",
      "unet",
      "upscale_models",
      "vae",
      "vae_approx",
      // TODO(robinhuang): Remove when we have a better way to specify base model paths.
      "animatediff_models",
      "animatediff_motion_lora",
      "animatediff_video_formats",
      "liveportrait",
      ["insightface", ["buffalo_1"]],
      ["blip", ["checkpoints"]],
      "CogVideo",
      ["xlabs", ["loras", "controlnets"]],
      "layerstyle",
      "LLM",
      "Joy_caption"
    ]
  ]
]);
function getAppResourcesPath() {
  return electron$1.app.isPackaged ? process.resourcesPath : path$g.join(electron$1.app.getAppPath(), "assets");
}
const knownModelKeys = [
  "checkpoints",
  "classifiers",
  "clip",
  "clip_vision",
  "configs",
  "controlnet",
  "diffusers",
  "diffusion_models",
  "embeddings",
  "gligen",
  "hypernetworks",
  "loras",
  "photomaker",
  "style_models",
  "text_encoders",
  "unet",
  "upscale_models",
  "vae",
  "vae_approx",
  // TODO(robinhuang): Remove when we have a better way to specify base model paths.
  "animatediff_models",
  "animatediff_motion_lora",
  "animatediff_video_formats",
  "ipadapter",
  "liveportrait",
  "insightface",
  "layerstyle",
  "LLM",
  "Joy_caption",
  "sams",
  "blip",
  "CogVideo",
  "xlabs",
  "instantid"
];
const _ComfyServerConfig = class _ComfyServerConfig {
  /**
   * The path to the extra_models_config.yaml file. The config file is used for ComfyUI core to determine search paths
   * for models and custom nodes.
   */
  static get configPath() {
    return path$g.join(electron$1.app.getPath("userData"), _ComfyServerConfig.EXTRA_MODEL_CONFIG_PATH);
  }
  static exists() {
    return fs$9.existsSync(this.configPath);
  }
  /**
   * Get the base config for the current operating system.
   */
  static getBaseConfig() {
    for (const [operatingSystem, modelPathConfig] of Object.entries(this.configTemplates)) {
      if (operatingSystem === process.platform) {
        return modelPathConfig;
      }
    }
    throw new Error(`No base config found for ${process.platform}`);
  }
  /**
   * Generate the content for the extra_model_paths.yaml file.
   */
  static generateConfigFileContent(modelPathConfigs) {
    const modelConfigYaml = yaml.stringify(modelPathConfigs, { lineWidth: -1 });
    return `# ComfyUI extra_model_paths.yaml for ${process.platform}
${modelConfigYaml}`;
  }
  static async writeConfigFile(configFilePath, content) {
    try {
      await fsPromises.writeFile(configFilePath, content, "utf8");
      log$2.info(`Created extra_model_paths.yaml at ${configFilePath}`);
      return true;
    } catch (error) {
      log$2.error("Error writing config file:", error);
      return false;
    }
  }
  static async readConfigFile(configPath) {
    try {
      const fileContent = await fsPromises.readFile(configPath, "utf8");
      return yaml.parse(fileContent);
    } catch (error) {
      log$2.error(`Error reading config file ${configPath}:`, error);
      return null;
    }
  }
  static async getConfigFromRepoPath(repoPath) {
    const configPath = path$g.join(repoPath, _ComfyServerConfig.COMFYUI_DEFAULT_CONFIG_NAME);
    const config = await this.readConfigFile(configPath) ?? {};
    return config;
  }
  static getBaseModelPathsFromRepoPath(repoPath) {
    const paths = {};
    for (const key of knownModelKeys) {
      paths[key] = path$g.join(repoPath, "models", key) + path$g.sep;
    }
    return paths;
  }
  /**
   * Create the extra_model_paths.yaml file in the given destination path.
   * @param destinationPath - The path to the destination file.
   * @param configs - The configs to write.
   */
  static async createConfigFile(destinationPath, configs) {
    log$2.info(`Creating model config files in ${destinationPath}`);
    try {
      const configContent = this.generateConfigFileContent(configs);
      return await this.writeConfigFile(destinationPath, configContent);
    } catch (error) {
      log$2.error("Error creating model config files:", error);
      return false;
    }
  }
  /**
   * Reads a YAML config file and attempts to return the base_path value.
   *
   * Attempts to read the new config path first, falling back to the original path if not.
   * @param configPath The path to read
   * @returns Status of the attempt and the value of base_path, if available
   */
  static async readBasePathFromConfig(configPath) {
    var _a3, _b2;
    try {
      const fileContent = await fsPromises.readFile(configPath, "utf8");
      const config = yaml.parse(fileContent);
      const base_path = ((_a3 = config == null ? void 0 : config.comfyui_desktop) == null ? void 0 : _a3.base_path) ?? ((_b2 = config == null ? void 0 : config.comfyui) == null ? void 0 : _b2.base_path);
      if (typeof base_path !== "string") {
        log$2.warn(`Base path in YAML config was invalid: [${_ComfyServerConfig.configPath}]`);
        return { status: "invalid", path: base_path };
      }
      return { status: "success", path: base_path };
    } catch (error) {
      if ((error == null ? void 0 : error.name) === "YAMLParseError") {
        log$2.error(`Unable to parse config file [${configPath}]`, error);
        return { status: "invalid" };
      } else if ((error == null ? void 0 : error.code) === "ENOENT") {
        log$2.info(`Config file not found at ${configPath}`);
        return { status: "notFound" };
      } else {
        log$2.error(`Error reading config file ${configPath}:`, error);
        return { status: "error" };
      }
    }
  }
  /** @deprecated Do not use.  Tempoary workaround for validation only. */
  static async setBasePathInDefaultConfig(basePath) {
    const parsedConfig = await _ComfyServerConfig.readConfigFile(_ComfyServerConfig.configPath);
    if (parsedConfig === null) {
      log$2.warn("Extra model paths config file doesn't exist.  Creating default.");
      const comfyDesktopConfig = _ComfyServerConfig.getBaseConfig();
      comfyDesktopConfig["base_path"] = basePath;
      return await _ComfyServerConfig.createConfigFile(_ComfyServerConfig.configPath, {
        comfyui_desktop: comfyDesktopConfig
      });
    }
    if (!parsedConfig) return false;
    parsedConfig.comfyui_desktop ?? (parsedConfig.comfyui_desktop = {});
    parsedConfig.comfyui_desktop.base_path = basePath;
    const stringified = _ComfyServerConfig.generateConfigFileContent(parsedConfig);
    return await _ComfyServerConfig.writeConfigFile(_ComfyServerConfig.configPath, stringified);
  }
  /**
   * Patches extra_model_config.yaml to include the custom nodes bundled with the app (eg. ComfyUI-Manager).
   * @returns
   */
  static async addAppBundledCustomNodesToConfig() {
    const parsedConfig = await _ComfyServerConfig.readConfigFile(_ComfyServerConfig.configPath);
    if (parsedConfig === null) {
      log$2.error("Failed to read config file");
      return;
    }
    if (!parsedConfig.desktop_extensions) {
      const customNodesPath = path$g.join(getAppResourcesPath(), "ComfyUI", "custom_nodes");
      log$2.info(`Adding custom node extra_path to config ${customNodesPath}`);
      parsedConfig.desktop_extensions = { custom_nodes: customNodesPath };
      const stringified = _ComfyServerConfig.generateConfigFileContent(parsedConfig);
      await _ComfyServerConfig.writeConfigFile(_ComfyServerConfig.configPath, stringified);
    }
  }
};
// The name of the default config file.
__publicField(_ComfyServerConfig, "COMFYUI_DEFAULT_CONFIG_NAME", "extra_model_paths.yaml");
// The path to the extra_models_config.yaml file used by the Electron desktop app.
__publicField(_ComfyServerConfig, "EXTRA_MODEL_CONFIG_PATH", "extra_models_config.yaml");
__publicField(_ComfyServerConfig, "commonPaths", {
  custom_nodes: "custom_nodes/",
  download_model_base: "models"
});
__publicField(_ComfyServerConfig, "configTemplates", {
  win32: {
    is_default: "true",
    ..._ComfyServerConfig.commonPaths
  },
  darwin: {
    is_default: "true",
    ..._ComfyServerConfig.commonPaths
  },
  linux: {
    is_default: "true",
    ..._ComfyServerConfig.commonPaths
  }
});
let ComfyServerConfig = _ComfyServerConfig;
const WIN_REQUIRED_SPACE = 10 * 1024 * 1024 * 1024;
const MAC_REQUIRED_SPACE = 5 * 1024 * 1024 * 1024;
function registerPathHandlers() {
  electron$1.ipcMain.on(IPC_CHANNELS.OPEN_LOGS_PATH, () => {
    electron$1.shell.openPath(electron$1.app.getPath("logs"));
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.GET_MODEL_CONFIG_PATH, () => {
    return ComfyServerConfig.configPath;
  });
  electron$1.ipcMain.on(IPC_CHANNELS.OPEN_PATH, (event, folderPath) => {
    log$2.info(`Opening path: ${folderPath}`);
    electron$1.shell.openPath(folderPath).then((errorStr) => {
      if (errorStr !== "") {
        log$2.error(`Error opening path: ${errorStr}`);
        electron$1.dialog.showMessageBox({
          title: "Error Opening File",
          message: `Could not open file: ${folderPath}. Error: ${errorStr}`
        }).then((response) => {
          log$2.info(`Open message box response: ${response.response}`);
        }).catch((error) => {
          log$2.error(`Error showing message box: ${error}`);
        });
      }
    });
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.GET_SYSTEM_PATHS, () => {
    let documentsPath = electron$1.app.getPath("documents");
    if (process.platform === "win32") {
      documentsPath = documentsPath.replace(/OneDrive\\/, "");
      return {
        appData: electron$1.app.getPath("appData"),
        appPath: electron$1.app.getAppPath(),
        defaultInstallPath: path$g.join(documentsPath, "ComfyUI")
      };
    }
    return {
      appData: electron$1.app.getPath("appData"),
      appPath: electron$1.app.getAppPath(),
      defaultInstallPath: path$g.join(documentsPath, "ComfyUI")
    };
  });
  electron$1.ipcMain.handle(
    IPC_CHANNELS.VALIDATE_INSTALL_PATH,
    async (event, inputPath, bypassSpaceCheck = false) => {
      const requiredSpace = process.platform === "darwin" ? MAC_REQUIRED_SPACE : WIN_REQUIRED_SPACE;
      const result = {
        isValid: true,
        freeSpace: -1,
        requiredSpace,
        isOneDrive: false,
        isNonDefaultDrive: false,
        parentMissing: false,
        exists: false,
        cannotWrite: false
      };
      try {
        if (process.platform === "win32") {
          const { OneDrive } = process.env;
          if (OneDrive) {
            const normalizedInput = path$g.resolve(inputPath).toLowerCase();
            const normalizedOneDrive = path$g.resolve(OneDrive).toLowerCase();
            process.stdout.write(`normalizedInput: ${normalizedInput}
`);
            process.stdout.write(`normalizedOneDrive: ${normalizedOneDrive}
`);
            if (normalizedInput.startsWith(normalizedOneDrive)) {
              result.isOneDrive = true;
            }
          }
          const systemDrive = process.env.SystemDrive || "C:";
          if (!inputPath.toUpperCase().startsWith(systemDrive)) {
            result.isNonDefaultDrive = true;
          }
        }
        const parent = path$g.dirname(inputPath);
        if (!fs$9.existsSync(parent)) {
          result.parentMissing = true;
        }
        if (fs$9.existsSync(inputPath)) {
          if (fs$9.statSync(inputPath).isDirectory()) {
            const contents = fs$9.readdirSync(inputPath);
            result.exists = contents.length > 0;
          } else {
            result.exists = true;
          }
        }
        try {
          fs$9.accessSync(parent, fs$9.constants.W_OK);
        } catch {
          result.cannotWrite = true;
        }
        const disks = await si.fsSize();
        const disk = disks.find((disk2) => inputPath.startsWith(disk2.mount));
        if (disk) result.freeSpace = disk.available;
      } catch (error) {
        log$2.error("Error validating install path:", error);
        result.error = `${error}`;
      }
      result.isValid = result.cannotWrite || result.parentMissing || !bypassSpaceCheck && result.freeSpace < requiredSpace || result.error || result.isOneDrive ? false : true;
      return result;
    }
  );
  electron$1.ipcMain.handle(IPC_CHANNELS.VALIDATE_COMFYUI_SOURCE, (event, path2) => {
    const isValid = ComfyConfigManager.isComfyUIDirectory(path2);
    return {
      isValid,
      error: isValid ? void 0 : "Invalid ComfyUI source path"
    };
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.SHOW_DIRECTORY_PICKER, async () => {
    const result = await electron$1.dialog.showOpenDialog({
      properties: ["openDirectory"]
    });
    return result.filePaths[0];
  });
}
class FatalError extends Error {
  constructor(message, cause) {
    super(message, { cause });
    this.name = "FatalError";
  }
  /**
   * Static factory. Ensures the error is a subclass of Error - returns the original error if it is.
   * @param error The unknown error that was caught (try/catch).
   * @returns A FatalError with the cause set, if the error is an instance of Error.
   */
  static wrapIfGeneric(error) {
    if (error instanceof Error) {
      return error.name !== "Error" ? error : new FatalError(error.message, error);
    }
    return new FatalError(String(error));
  }
}
const DEFAULT_SETTINGS = {
  "Comfy-Desktop.AutoUpdate": true,
  "Comfy-Desktop.SendStatistics": true,
  "Comfy.ColorPalette": "dark",
  "Comfy.UseNewMenu": "Top",
  "Comfy.Workflow.WorkflowTabsPosition": "Topbar",
  "Comfy.Workflow.ShowMissingModelsWarning": true,
  "Comfy.Server.LaunchArgs": {},
  "Comfy-Desktop.UV.PythonInstallMirror": "",
  "Comfy-Desktop.UV.PypiInstallMirror": "",
  "Comfy-Desktop.UV.TorchInstallMirror": ""
};
let current;
function useComfySettings() {
  if (!current) throw new Error("Cannot access ComfySettings before initialization.");
  return current;
}
const _ComfySettings = class _ComfySettings {
  constructor(basePath) {
    __publicField(this, "settings", structuredClone(DEFAULT_SETTINGS));
    __privateAdd(this, _basePath);
    __privateSet(this, _basePath, basePath);
  }
  /**
   * Locks the settings to prevent further modifications.
   * Called when the ComfyUI server starts, as it takes ownership of the settings file.
   */
  static lockWrites() {
    _ComfySettings.writeLocked = true;
  }
  get filePath() {
    return path$g.join(__privateGet(this, _basePath), "user", "default", "comfy.settings.json");
  }
  async loadSettings() {
    try {
      await fsPromises.access(this.filePath);
    } catch {
      log$2.info(`Settings file ${this.filePath} does not exist. Using default settings.`);
      return;
    }
    try {
      const fileContent = await fsPromises.readFile(this.filePath, "utf8");
      this.settings = { ...this.settings, ...JSON.parse(fileContent) };
    } catch (error) {
      if (error instanceof SyntaxError) {
        log$2.error(`Settings file contains invalid JSON:`, error);
      } else {
        log$2.error(`Settings file cannot be loaded.`, error);
      }
    }
  }
  async saveSettings() {
    if (!this.settings) return;
    if (_ComfySettings.writeLocked) {
      const error = new Error("Settings are locked and cannot be modified");
      log$2.error(error);
      throw error;
    }
    try {
      await fsPromises.writeFile(this.filePath, JSON.stringify(this.settings, null, 2));
    } catch (error) {
      log$2.error("Failed to save settings:", error);
      throw error;
    }
  }
  set(key, value) {
    if (_ComfySettings.writeLocked) {
      throw new Error("Settings are locked and cannot be modified");
    }
    this.settings[key] = value;
  }
  get(key) {
    return this.settings[key] ?? DEFAULT_SETTINGS[key];
  }
  /**
   * Static factory method. Loads the settings from disk.
   * @param basePath The base path where ComfyUI is installed
   * @returns The newly created instance
   */
  static async load(basePath) {
    const instance2 = new _ComfySettings(basePath);
    await instance2.loadSettings();
    current = instance2;
    return instance2;
  }
};
_basePath = new WeakMap();
__publicField(_ComfySettings, "writeLocked", false);
let ComfySettings = _ComfySettings;
const DEBUG_BUILD$3 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const SDK_VERSION$1 = "8.48.0";
const GLOBAL_OBJ = globalThis;
function getGlobalSingleton(name2, creator, obj) {
  const gbl = obj || GLOBAL_OBJ;
  const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
  const versionedCarrier = __SENTRY__[SDK_VERSION$1] = __SENTRY__[SDK_VERSION$1] || {};
  return versionedCarrier[name2] || (versionedCarrier[name2] = creator());
}
const DEBUG_BUILD$2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const PREFIX = "Sentry Logger ";
const CONSOLE_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
  "log",
  "assert",
  "trace"
];
const originalConsoleMethods = {};
function consoleSandbox(callback) {
  if (!("console" in GLOBAL_OBJ)) {
    return callback();
  }
  const console2 = GLOBAL_OBJ.console;
  const wrappedFuncs = {};
  const wrappedLevels = Object.keys(originalConsoleMethods);
  wrappedLevels.forEach((level) => {
    const originalConsoleMethod = originalConsoleMethods[level];
    wrappedFuncs[level] = console2[level];
    console2[level] = originalConsoleMethod;
  });
  try {
    return callback();
  } finally {
    wrappedLevels.forEach((level) => {
      console2[level] = wrappedFuncs[level];
    });
  }
}
function makeLogger() {
  let enabled = false;
  const logger2 = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    },
    isEnabled: () => enabled
  };
  if (DEBUG_BUILD$2) {
    CONSOLE_LEVELS.forEach((name2) => {
      logger2[name2] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            GLOBAL_OBJ.console[name2](`${PREFIX}[${name2}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach((name2) => {
      logger2[name2] = () => void 0;
    });
  }
  return logger2;
}
const logger$1 = getGlobalSingleton("logger", makeLogger);
const STACKTRACE_FRAME_LIMIT = 50;
const UNKNOWN_FUNCTION = "?";
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  return (stack, skipFirstLines = 0, framesToPop = 0) => {
    const frames = [];
    const lines = stack.split("\n");
    for (let i = skipFirstLines; i < lines.length; i++) {
      const line = lines[i];
      if (line.length > 1024) {
        continue;
      }
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      if (cleanedLine.match(/\S*Error: /)) {
        continue;
      }
      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);
        if (frame) {
          frames.push(frame);
          break;
        }
      }
      if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
        break;
      }
    }
    return stripSentryFramesAndReverse(frames.slice(framesToPop));
  };
}
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }
  const localStack = Array.from(stack);
  if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
  }
  localStack.reverse();
  if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
    localStack.pop();
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
      localStack.pop();
    }
  }
  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
    ...frame,
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION
  }));
}
function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}
const defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== "function") {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    return defaultFunctionName;
  }
}
const handlers = {};
const instrumented = {};
function addHandler(type, handler) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(handler);
}
function maybeInstrument(type, instrumentFn) {
  if (!instrumented[type]) {
    instrumented[type] = true;
    try {
      instrumentFn();
    } catch (e) {
      DEBUG_BUILD$2 && logger$1.error(`Error while instrumenting ${type}`, e);
    }
  }
}
function triggerHandlers(type, data2) {
  const typeHandlers = type && handlers[type];
  if (!typeHandlers) {
    return;
  }
  for (const handler of typeHandlers) {
    try {
      handler(data2);
    } catch (e) {
      DEBUG_BUILD$2 && logger$1.error(
        `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
        e
      );
    }
  }
}
let _oldOnErrorHandler = null;
function addGlobalErrorInstrumentationHandler(handler) {
  const type = "error";
  addHandler(type, handler);
  maybeInstrument(type, instrumentError);
}
function instrumentError() {
  _oldOnErrorHandler = GLOBAL_OBJ.onerror;
  GLOBAL_OBJ.onerror = function(msg, url2, line, column, error) {
    const handlerData = {
      column,
      error,
      line,
      msg,
      url: url2
    };
    triggerHandlers("error", handlerData);
    if (_oldOnErrorHandler) {
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
  GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let _oldOnUnhandledRejectionHandler = null;
function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
  const type = "unhandledrejection";
  addHandler(type, handler);
  maybeInstrument(type, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = GLOBAL_OBJ.onunhandledrejection;
  GLOBAL_OBJ.onunhandledrejection = function(e) {
    const handlerData = e;
    triggerHandlers("unhandledrejection", handlerData);
    if (_oldOnUnhandledRejectionHandler) {
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
  GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
function getMainCarrier() {
  getSentryCarrier(GLOBAL_OBJ);
  return GLOBAL_OBJ;
}
function getSentryCarrier(carrier) {
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.version = __SENTRY__.version || SDK_VERSION$1;
  return __SENTRY__[SDK_VERSION$1] = __SENTRY__[SDK_VERSION$1] || {};
}
const objectToString$1 = Object.prototype.toString;
function isError(wat) {
  switch (objectToString$1.call(wat)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
function isBuiltin(wat, className) {
  return objectToString$1.call(wat) === `[object ${className}]`;
}
function isErrorEvent$1(wat) {
  return isBuiltin(wat, "ErrorEvent");
}
function isString(wat) {
  return isBuiltin(wat, "String");
}
function isParameterizedString(wat) {
  return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
function isPrimitive$1(wat) {
  return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
function isPlainObject$1(wat) {
  return isBuiltin(wat, "Object");
}
function isEvent(wat) {
  return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
function isElement(wat) {
  return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
function isRegExp(wat) {
  return isBuiltin(wat, "RegExp");
}
function isThenable(wat) {
  return Boolean(wat && wat.then && typeof wat.then === "function");
}
function isSyntheticEvent(wat) {
  return isPlainObject$1(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}
function isVueViewModel(wat) {
  return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue));
}
const WINDOW = GLOBAL_OBJ;
const DEFAULT_MAX_STRING_LENGTH = 80;
function htmlTreeAsString(elem, options = {}) {
  if (!elem) {
    return "<unknown>";
  }
  try {
    let currentElem = elem;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator2 = " > ";
    const sepLength = separator2.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
        break;
      }
      out.push(nextStr);
      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }
    return out.reverse().join(separator2);
  } catch (_oO) {
    return "<unknown>";
  }
}
function _htmlElementAsString(el, keyAttrs) {
  const elem = el;
  const out = [];
  if (!elem || !elem.tagName) {
    return "";
  }
  if (WINDOW.HTMLElement) {
    if (elem instanceof HTMLElement && elem.dataset) {
      if (elem.dataset["sentryComponent"]) {
        return elem.dataset["sentryComponent"];
      }
      if (elem.dataset["sentryElement"]) {
        return elem.dataset["sentryElement"];
      }
    }
  }
  out.push(elem.tagName.toLowerCase());
  const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
  if (keyAttrPairs && keyAttrPairs.length) {
    keyAttrPairs.forEach((keyAttrPair) => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }
    const className = elem.className;
    if (className && isString(className)) {
      const classes = className.split(/\s+/);
      for (const c of classes) {
        out.push(`.${c}`);
      }
    }
  }
  const allowedAttrs = ["aria-label", "type", "name", "title", "alt"];
  for (const k of allowedAttrs) {
    const attr = elem.getAttribute(k);
    if (attr) {
      out.push(`[${k}="${attr}"]`);
    }
  }
  return out.join("");
}
function truncate(str, max2 = 0) {
  if (typeof str !== "string" || max2 === 0) {
    return str;
  }
  return str.length <= max2 ? str : `${str.slice(0, max2)}...`;
}
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150) {
    return newLine;
  }
  if (colno > lineLength) {
    colno = lineLength;
  }
  let start = Math.max(colno - 60, 0);
  if (start < 5) {
    start = 0;
  }
  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5) {
    end = lineLength;
  }
  if (end === lineLength) {
    start = Math.max(end - 140, 0);
  }
  newLine = newLine.slice(start, end);
  if (start > 0) {
    newLine = `'{snip} ${newLine}`;
  }
  if (end < lineLength) {
    newLine += " {snip}";
  }
  return newLine;
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
  if (!isString(value)) {
    return false;
  }
  if (isRegExp(pattern)) {
    return pattern.test(value);
  }
  if (isString(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }
  return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
  return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
}
function fill(source, name2, replacementFactory) {
  if (!(name2 in source)) {
    return;
  }
  const original = source[name2];
  const wrapped = replacementFactory(original);
  if (typeof wrapped === "function") {
    markFunctionWrapped(wrapped, original);
  }
  try {
    source[name2] = wrapped;
  } catch (e) {
    DEBUG_BUILD$2 && logger$1.log(`Failed to replace method "${name2}" in object`, source);
  }
}
function addNonEnumerableProperty(obj, name2, value) {
  try {
    Object.defineProperty(obj, name2, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value,
      writable: true,
      configurable: true
    });
  } catch (o_O) {
    DEBUG_BUILD$2 && logger$1.log(`Failed to add non-enumerable property "${name2}" to object`, obj);
  }
}
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, "__sentry_original__", original);
  } catch (o_O) {
  }
}
function getOriginalFunction(func) {
  return func.__sentry_original__;
}
function convertToPlainObject(value) {
  if (isError(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value)
    };
  } else if (isEvent(value)) {
    const newObj = {
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget),
      ...getOwnProperties(value)
    };
    if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
      newObj.detail = value.detail;
    }
    return newObj;
  } else {
    return value;
  }
}
function serializeEventTarget(target) {
  try {
    return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return "<unknown>";
  }
}
function getOwnProperties(obj) {
  if (typeof obj === "object" && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = obj[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  const firstKey = keys[0];
  if (!firstKey) {
    return "[object has no keys]";
  }
  if (firstKey.length >= maxLength) {
    return truncate(firstKey, maxLength);
  }
  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(", ");
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return truncate(serialized, maxLength);
  }
  return "";
}
function dropUndefinedKeys(inputValue) {
  const memoizationMap = /* @__PURE__ */ new Map();
  return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
  if (isPojo(inputValue)) {
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== void 0) {
      return memoVal;
    }
    const returnValue = {};
    memoizationMap.set(inputValue, returnValue);
    for (const key of Object.getOwnPropertyNames(inputValue)) {
      if (typeof inputValue[key] !== "undefined") {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }
    return returnValue;
  }
  if (Array.isArray(inputValue)) {
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== void 0) {
      return memoVal;
    }
    const returnValue = [];
    memoizationMap.set(inputValue, returnValue);
    inputValue.forEach((item) => {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });
    return returnValue;
  }
  return inputValue;
}
function isPojo(input) {
  if (!isPlainObject$1(input)) {
    return false;
  }
  try {
    const name2 = Object.getPrototypeOf(input).constructor.name;
    return !name2 || name2 === "Object";
  } catch (e2) {
    return true;
  }
}
const ONE_SECOND_IN_MS = 1e3;
function dateTimestampInSeconds() {
  return Date.now() / ONE_SECOND_IN_MS;
}
function createUnixTimestampInSecondsFunc() {
  const { performance } = GLOBAL_OBJ;
  if (!performance || !performance.now) {
    return dateTimestampInSeconds;
  }
  const approxStartingTimeOrigin = Date.now() - performance.now();
  const timeOrigin = performance.timeOrigin == void 0 ? approxStartingTimeOrigin : performance.timeOrigin;
  return () => {
    return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
  };
}
const timestampInSeconds = createUnixTimestampInSecondsFunc();
(() => {
  const { performance } = GLOBAL_OBJ;
  if (!performance || !performance.now) {
    return void 0;
  }
  const threshold = 3600 * 1e3;
  const performanceNow = performance.now();
  const dateNow = Date.now();
  const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;
  const navigationStart = performance.timing && performance.timing.navigationStart;
  const hasNavigationStart = typeof navigationStart === "number";
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;
  if (timeOriginIsReliable || navigationStartIsReliable) {
    if (timeOriginDelta <= navigationStartDelta) {
      return performance.timeOrigin;
    } else {
      return navigationStart;
    }
  }
  return dateNow;
})();
function uuid4() {
  const gbl = GLOBAL_OBJ;
  const crypto2 = gbl.crypto || gbl.msCrypto;
  let getRandomByte = () => Math.random() * 16;
  try {
    if (crypto2 && crypto2.randomUUID) {
      return crypto2.randomUUID().replace(/-/g, "");
    }
    if (crypto2 && crypto2.getRandomValues) {
      getRandomByte = () => {
        const typedArray = new Uint8Array(1);
        crypto2.getRandomValues(typedArray);
        return typedArray[0];
      };
    }
  } catch (_) {
  }
  return ("10000000100040008000" + 1e11).replace(
    /[018]/g,
    (c) => (
      // eslint-disable-next-line no-bitwise
      (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
    )
  );
}
function getFirstException(event) {
  return event.exception && event.exception.values ? event.exception.values[0] : void 0;
}
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }
  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || "<unknown>";
  }
  return eventId || "<unknown>";
}
function addExceptionTypeValue(event, value, type) {
  const exception = event.exception = event.exception || {};
  const values = exception.values = exception.values || [];
  const firstException = values[0] = values[0] || {};
  if (!firstException.value) {
    firstException.value = "";
  }
  if (!firstException.type) {
    firstException.type = "Error";
  }
}
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }
  const defaultMechanism = { type: "generic", handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
  if (newMechanism && "data" in newMechanism) {
    const mergedData = { ...currentMechanism && currentMechanism.data, ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}
const SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function _parseInt(input) {
  return parseInt(input || "", 10);
}
function parseSemver(input) {
  const match = input.match(SEMVER_REGEXP) || [];
  const major2 = _parseInt(match[1]);
  const minor2 = _parseInt(match[2]);
  const patch2 = _parseInt(match[3]);
  return {
    buildmetadata: match[5],
    major: isNaN(major2) ? void 0 : major2,
    minor: isNaN(minor2) ? void 0 : minor2,
    patch: isNaN(patch2) ? void 0 : patch2,
    prerelease: match[4]
  };
}
function checkOrSetAlreadyCaught(exception) {
  if (isAlreadyCaptured(exception)) {
    return true;
  }
  try {
    addNonEnumerableProperty(exception, "__sentry_captured__", true);
  } catch (err) {
  }
  return false;
}
function isAlreadyCaptured(exception) {
  try {
    return exception.__sentry_captured__;
  } catch (e) {
  }
}
var States;
(function(States2) {
  const PENDING = 0;
  States2[States2["PENDING"] = PENDING] = "PENDING";
  const RESOLVED = 1;
  States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
  const REJECTED = 2;
  States2[States2["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
function resolvedSyncPromise(value) {
  return new SyncPromise((resolve3) => {
    resolve3(value);
  });
}
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}
class SyncPromise {
  constructor(executor) {
    SyncPromise.prototype.__init.call(this);
    SyncPromise.prototype.__init2.call(this);
    SyncPromise.prototype.__init3.call(this);
    SyncPromise.prototype.__init4.call(this);
    this._state = States.PENDING;
    this._handlers = [];
    try {
      executor(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  /** JSDoc */
  then(onfulfilled, onrejected) {
    return new SyncPromise((resolve3, reject) => {
      this._handlers.push([
        false,
        (result) => {
          if (!onfulfilled) {
            resolve3(result);
          } else {
            try {
              resolve3(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        (reason) => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve3(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        }
      ]);
      this._executeHandlers();
    });
  }
  /** JSDoc */
  catch(onrejected) {
    return this.then((val) => val, onrejected);
  }
  /** JSDoc */
  finally(onfinally) {
    return new SyncPromise((resolve3, reject) => {
      let val;
      let isRejected;
      return this.then(
        (value) => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        (reason) => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        }
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }
        resolve3(val);
      });
    });
  }
  /** JSDoc */
  __init() {
    this._resolve = (value) => {
      this._setResult(States.RESOLVED, value);
    };
  }
  /** JSDoc */
  __init2() {
    this._reject = (reason) => {
      this._setResult(States.REJECTED, reason);
    };
  }
  /** JSDoc */
  __init3() {
    this._setResult = (state, value) => {
      if (this._state !== States.PENDING) {
        return;
      }
      if (isThenable(value)) {
        void value.then(this._resolve, this._reject);
        return;
      }
      this._state = state;
      this._value = value;
      this._executeHandlers();
    };
  }
  /** JSDoc */
  __init4() {
    this._executeHandlers = () => {
      if (this._state === States.PENDING) {
        return;
      }
      const cachedHandlers = this._handlers.slice();
      this._handlers = [];
      cachedHandlers.forEach((handler) => {
        if (handler[0]) {
          return;
        }
        if (this._state === States.RESOLVED) {
          handler[1](this._value);
        }
        if (this._state === States.REJECTED) {
          handler[2](this._value);
        }
        handler[0] = true;
      });
    };
  }
}
function makeSession(context2) {
  const startingTime = timestampInSeconds();
  const session = {
    sid: uuid4(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session)
  };
  if (context2) {
    updateSession(session, context2);
  }
  return session;
}
function updateSession(session, context2 = {}) {
  if (context2.user) {
    if (!session.ipAddress && context2.user.ip_address) {
      session.ipAddress = context2.user.ip_address;
    }
    if (!session.did && !context2.did) {
      session.did = context2.user.id || context2.user.email || context2.user.username;
    }
  }
  session.timestamp = context2.timestamp || timestampInSeconds();
  if (context2.abnormal_mechanism) {
    session.abnormal_mechanism = context2.abnormal_mechanism;
  }
  if (context2.ignoreDuration) {
    session.ignoreDuration = context2.ignoreDuration;
  }
  if (context2.sid) {
    session.sid = context2.sid.length === 32 ? context2.sid : uuid4();
  }
  if (context2.init !== void 0) {
    session.init = context2.init;
  }
  if (!session.did && context2.did) {
    session.did = `${context2.did}`;
  }
  if (typeof context2.started === "number") {
    session.started = context2.started;
  }
  if (session.ignoreDuration) {
    session.duration = void 0;
  } else if (typeof context2.duration === "number") {
    session.duration = context2.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context2.release) {
    session.release = context2.release;
  }
  if (context2.environment) {
    session.environment = context2.environment;
  }
  if (!session.ipAddress && context2.ipAddress) {
    session.ipAddress = context2.ipAddress;
  }
  if (!session.userAgent && context2.userAgent) {
    session.userAgent = context2.userAgent;
  }
  if (typeof context2.errors === "number") {
    session.errors = context2.errors;
  }
  if (context2.status) {
    session.status = context2.status;
  }
}
function closeSession(session, status) {
  let context2 = {};
  if (session.status === "ok") {
    context2 = { status: "exited" };
  }
  updateSession(session, context2);
}
function sessionToJSON(session) {
  return dropUndefinedKeys({
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1e3).toISOString(),
    timestamp: new Date(session.timestamp * 1e3).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
    duration: session.duration,
    abnormal_mechanism: session.abnormal_mechanism,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent
    }
  });
}
function generateTraceId() {
  return uuid4();
}
function generateSpanId() {
  return uuid4().substring(16);
}
function merge$1(initialObj, mergeObj, levels = 2) {
  if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) {
    return mergeObj;
  }
  if (initialObj && mergeObj && Object.keys(mergeObj).length === 0) {
    return initialObj;
  }
  const output = { ...initialObj };
  for (const key in mergeObj) {
    if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
      output[key] = merge$1(output[key], mergeObj[key], levels - 1);
    }
  }
  return output;
}
const SCOPE_SPAN_FIELD = "_sentrySpan";
function _setSpanForScope(scope2, span) {
  if (span) {
    addNonEnumerableProperty(scope2, SCOPE_SPAN_FIELD, span);
  } else {
    delete scope2[SCOPE_SPAN_FIELD];
  }
}
function _getSpanForScope(scope2) {
  return scope2[SCOPE_SPAN_FIELD];
}
const DEFAULT_MAX_BREADCRUMBS = 100;
class ScopeClass {
  /** Flag if notifying is happening. */
  /** Callback for client to receive scope changes. */
  /** Callback list that will be called during event processing. */
  /** Array of breadcrumbs. */
  /** User */
  /** Tags */
  /** Extra */
  /** Contexts */
  /** Attachments */
  /** Propagation Context for distributed tracing */
  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */
  /** Fingerprint */
  /** Severity */
  /**
   * Transaction Name
   *
   * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
   * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
   */
  /** Session */
  /** Request Mode Session Status */
  // eslint-disable-next-line deprecation/deprecation
  /** The client on this scope */
  /** Contains the last event id of a captured event.  */
  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: generateTraceId(),
      spanId: generateSpanId()
    };
  }
  /**
   * @inheritDoc
   */
  clone() {
    const newScope = new ScopeClass();
    newScope._breadcrumbs = [...this._breadcrumbs];
    newScope._tags = { ...this._tags };
    newScope._extra = { ...this._extra };
    newScope._contexts = { ...this._contexts };
    if (this._contexts.flags) {
      newScope._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    newScope._user = this._user;
    newScope._level = this._level;
    newScope._session = this._session;
    newScope._transactionName = this._transactionName;
    newScope._fingerprint = this._fingerprint;
    newScope._eventProcessors = [...this._eventProcessors];
    newScope._requestSession = this._requestSession;
    newScope._attachments = [...this._attachments];
    newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
    newScope._propagationContext = { ...this._propagationContext };
    newScope._client = this._client;
    newScope._lastEventId = this._lastEventId;
    _setSpanForScope(newScope, _getSpanForScope(this));
    return newScope;
  }
  /**
   * @inheritDoc
   */
  setClient(client) {
    this._client = client;
  }
  /**
   * @inheritDoc
   */
  setLastEventId(lastEventId) {
    this._lastEventId = lastEventId;
  }
  /**
   * @inheritDoc
   */
  getClient() {
    return this._client;
  }
  /**
   * @inheritDoc
   */
  lastEventId() {
    return this._lastEventId;
  }
  /**
   * @inheritDoc
   */
  addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }
  /**
   * @inheritDoc
   */
  addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }
  /**
   * @inheritDoc
   */
  setUser(user) {
    this._user = user || {
      email: void 0,
      id: void 0,
      ip_address: void 0,
      username: void 0
    };
    if (this._session) {
      updateSession(this._session, { user });
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  getUser() {
    return this._user;
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line deprecation/deprecation
  getRequestSession() {
    return this._requestSession;
  }
  /**
   * @inheritDoc
   */
  // eslint-disable-next-line deprecation/deprecation
  setRequestSession(requestSession) {
    this._requestSession = requestSession;
    return this;
  }
  /**
   * @inheritDoc
   */
  setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags
    };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setTag(key, value) {
    this._tags = { ...this._tags, [key]: value };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras
    };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setTransactionName(name2) {
    this._transactionName = name2;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setContext(key, context2) {
    if (context2 === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context2;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  getSession() {
    return this._session;
  }
  /**
   * @inheritDoc
   */
  update(captureContext) {
    if (!captureContext) {
      return this;
    }
    const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
    const [scopeInstance, requestSession] = scopeToMerge instanceof Scope ? (
      // eslint-disable-next-line deprecation/deprecation
      [scopeToMerge.getScopeData(), scopeToMerge.getRequestSession()]
    ) : isPlainObject$1(scopeToMerge) ? [captureContext, captureContext.requestSession] : [];
    const { tags, extra, user, contexts, level, fingerprint = [], propagationContext } = scopeInstance || {};
    this._tags = { ...this._tags, ...tags };
    this._extra = { ...this._extra, ...extra };
    this._contexts = { ...this._contexts, ...contexts };
    if (user && Object.keys(user).length) {
      this._user = user;
    }
    if (level) {
      this._level = level;
    }
    if (fingerprint.length) {
      this._fingerprint = fingerprint;
    }
    if (propagationContext) {
      this._propagationContext = propagationContext;
    }
    if (requestSession) {
      this._requestSession = requestSession;
    }
    return this;
  }
  /**
   * @inheritDoc
   */
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = void 0;
    this._transactionName = void 0;
    this._fingerprint = void 0;
    this._requestSession = void 0;
    this._session = void 0;
    _setSpanForScope(this, void 0);
    this._attachments = [];
    this.setPropagationContext({ traceId: generateTraceId() });
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
    if (maxCrumbs <= 0) {
      return this;
    }
    const mergedBreadcrumb = {
      timestamp: dateTimestampInSeconds(),
      ...breadcrumb
    };
    const breadcrumbs = this._breadcrumbs;
    breadcrumbs.push(mergedBreadcrumb);
    this._breadcrumbs = breadcrumbs.length > maxCrumbs ? breadcrumbs.slice(-maxCrumbs) : breadcrumbs;
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  /**
   * @inheritDoc
   */
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  /**
   * @inheritDoc
   */
  addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }
  /**
   * @inheritDoc
   */
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  /** @inheritDoc */
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: _getSpanForScope(this)
    };
  }
  /**
   * @inheritDoc
   */
  setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = merge$1(this._sdkProcessingMetadata, newData, 2);
    return this;
  }
  /**
   * @inheritDoc
   */
  setPropagationContext(context2) {
    this._propagationContext = {
      // eslint-disable-next-line deprecation/deprecation
      spanId: generateSpanId(),
      ...context2
    };
    return this;
  }
  /**
   * @inheritDoc
   */
  getPropagationContext() {
    return this._propagationContext;
  }
  /**
   * @inheritDoc
   */
  captureException(exception, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : uuid4();
    if (!this._client) {
      logger$1.warn("No client configured on scope - will not capture exception!");
      return eventId;
    }
    const syntheticException = new Error("Sentry syntheticException");
    this._client.captureException(
      exception,
      {
        originalException: exception,
        syntheticException,
        ...hint,
        event_id: eventId
      },
      this
    );
    return eventId;
  }
  /**
   * @inheritDoc
   */
  captureMessage(message, level, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : uuid4();
    if (!this._client) {
      logger$1.warn("No client configured on scope - will not capture message!");
      return eventId;
    }
    const syntheticException = new Error(message);
    this._client.captureMessage(
      message,
      level,
      {
        originalException: message,
        syntheticException,
        ...hint,
        event_id: eventId
      },
      this
    );
    return eventId;
  }
  /**
   * @inheritDoc
   */
  captureEvent(event, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : uuid4();
    if (!this._client) {
      logger$1.warn("No client configured on scope - will not capture event!");
      return eventId;
    }
    this._client.captureEvent(event, { ...hint, event_id: eventId }, this);
    return eventId;
  }
  /**
   * This will be called on every set call.
   */
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach((callback) => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
}
const Scope = ScopeClass;
function getDefaultCurrentScope() {
  return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
function getDefaultIsolationScope() {
  return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}
class AsyncContextStack {
  constructor(scope2, isolationScope) {
    let assignedScope;
    if (!scope2) {
      assignedScope = new Scope();
    } else {
      assignedScope = scope2;
    }
    let assignedIsolationScope;
    if (!isolationScope) {
      assignedIsolationScope = new Scope();
    } else {
      assignedIsolationScope = isolationScope;
    }
    this._stack = [{ scope: assignedScope }];
    this._isolationScope = assignedIsolationScope;
  }
  /**
   * Fork a scope for the stack.
   */
  withScope(callback) {
    const scope2 = this._pushScope();
    let maybePromiseResult;
    try {
      maybePromiseResult = callback(scope2);
    } catch (e) {
      this._popScope();
      throw e;
    }
    if (isThenable(maybePromiseResult)) {
      return maybePromiseResult.then(
        (res) => {
          this._popScope();
          return res;
        },
        (e) => {
          this._popScope();
          throw e;
        }
      );
    }
    this._popScope();
    return maybePromiseResult;
  }
  /**
   * Get the client of the stack.
   */
  getClient() {
    return this.getStackTop().client;
  }
  /**
   * Returns the scope of the top stack.
   */
  getScope() {
    return this.getStackTop().scope;
  }
  /**
   * Get the isolation scope for the stack.
   */
  getIsolationScope() {
    return this._isolationScope;
  }
  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  /**
   * Push a scope to the stack.
   */
  _pushScope() {
    const scope2 = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope: scope2
    });
    return scope2;
  }
  /**
   * Pop a scope from the stack.
   */
  _popScope() {
    if (this._stack.length <= 1) return false;
    return !!this._stack.pop();
  }
}
function getAsyncContextStack() {
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
}
function withScope$1(callback) {
  return getAsyncContextStack().withScope(callback);
}
function withSetScope(scope2, callback) {
  const stack = getAsyncContextStack();
  return stack.withScope(() => {
    stack.getStackTop().scope = scope2;
    return callback(scope2);
  });
}
function withIsolationScope(callback) {
  return getAsyncContextStack().withScope(() => {
    return callback(getAsyncContextStack().getIsolationScope());
  });
}
function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope: withScope$1,
    withSetScope,
    withSetIsolationScope: (_isolationScope, callback) => {
      return withIsolationScope(callback);
    },
    getCurrentScope: () => getAsyncContextStack().getScope(),
    getIsolationScope: () => getAsyncContextStack().getIsolationScope()
  };
}
function setAsyncContextStrategy(strategy) {
  const registry = getMainCarrier();
  const sentry = getSentryCarrier(registry);
  sentry.acs = strategy;
}
function getAsyncContextStrategy(carrier) {
  const sentry = getSentryCarrier(carrier);
  if (sentry.acs) {
    return sentry.acs;
  }
  return getStackAsyncContextStrategy();
}
function getCurrentScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getCurrentScope();
}
function getIsolationScope() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  return acs.getIsolationScope();
}
function getGlobalScope() {
  return getGlobalSingleton("globalScope", () => new Scope());
}
function withScope(...rest) {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (rest.length === 2) {
    const [scope2, callback] = rest;
    if (!scope2) {
      return acs.withScope(callback);
    }
    return acs.withSetScope(scope2, callback);
  }
  return acs.withScope(rest[0]);
}
function getClient() {
  return getCurrentScope().getClient();
}
function getTraceContextFromScope(scope2) {
  const propagationContext = scope2.getPropagationContext();
  const { traceId, spanId, parentSpanId } = propagationContext;
  const traceContext = dropUndefinedKeys({
    trace_id: traceId,
    span_id: spanId,
    parent_span_id: parentSpanId
  });
  return traceContext;
}
const METRICS_SPAN_FIELD = "_sentryMetrics";
function getMetricSummaryJsonForSpan(span) {
  const storage = span[METRICS_SPAN_FIELD];
  if (!storage) {
    return void 0;
  }
  const output = {};
  for (const [, [exportKey, summary]] of storage) {
    const arr = output[exportKey] || (output[exportKey] = []);
    arr.push(dropUndefinedKeys(summary));
  }
  return output;
}
function updateMetricSummaryOnSpan(span, metricType, sanitizedName, value, unit, tags, bucketKey) {
  const existingStorage = span[METRICS_SPAN_FIELD];
  const storage = existingStorage || (span[METRICS_SPAN_FIELD] = /* @__PURE__ */ new Map());
  const exportKey = `${metricType}:${sanitizedName}@${unit}`;
  const bucketItem = storage.get(bucketKey);
  if (bucketItem) {
    const [, summary] = bucketItem;
    storage.set(bucketKey, [
      exportKey,
      {
        min: Math.min(summary.min, value),
        max: Math.max(summary.max, value),
        count: summary.count += 1,
        sum: summary.sum += value,
        tags: summary.tags
      }
    ]);
  } else {
    storage.set(bucketKey, [
      exportKey,
      {
        min: value,
        max: value,
        count: 1,
        sum: value,
        tags
      }
    ]);
  }
}
const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
const SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";
const SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id";
const SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time";
const SPAN_STATUS_UNSET = 0;
const SPAN_STATUS_OK = 1;
const SPAN_STATUS_ERROR = 2;
function getSpanStatusFromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return { code: SPAN_STATUS_OK };
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return { code: SPAN_STATUS_ERROR, message: "unauthenticated" };
      case 403:
        return { code: SPAN_STATUS_ERROR, message: "permission_denied" };
      case 404:
        return { code: SPAN_STATUS_ERROR, message: "not_found" };
      case 409:
        return { code: SPAN_STATUS_ERROR, message: "already_exists" };
      case 413:
        return { code: SPAN_STATUS_ERROR, message: "failed_precondition" };
      case 429:
        return { code: SPAN_STATUS_ERROR, message: "resource_exhausted" };
      case 499:
        return { code: SPAN_STATUS_ERROR, message: "cancelled" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "invalid_argument" };
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return { code: SPAN_STATUS_ERROR, message: "unimplemented" };
      case 503:
        return { code: SPAN_STATUS_ERROR, message: "unavailable" };
      case 504:
        return { code: SPAN_STATUS_ERROR, message: "deadline_exceeded" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "internal_error" };
    }
  }
  return { code: SPAN_STATUS_ERROR, message: "unknown_error" };
}
function setHttpStatus(span, httpStatus) {
  span.setAttribute("http.response.status_code", httpStatus);
  const spanStatus = getSpanStatusFromHttpCode(httpStatus);
  if (spanStatus.message !== "unknown_error") {
    span.setStatus(spanStatus);
  }
}
const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
const MAX_BAGGAGE_STRING_LENGTH = 8192;
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
  const baggageObject = parseBaggageHeader(baggageHeader);
  if (!baggageObject) {
    return void 0;
  }
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext;
  } else {
    return void 0;
  }
}
function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
  if (!dynamicSamplingContext) {
    return void 0;
  }
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {}
  );
  return objectToBaggageHeader(sentryPrefixedDSC);
}
function parseBaggageHeader(baggageHeader) {
  if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) {
    return void 0;
  }
  if (Array.isArray(baggageHeader)) {
    return baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      Object.entries(currBaggageObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    }, {});
  }
  return baggageHeaderToObject(baggageHeader);
}
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader.split(",").map((baggageEntry) => baggageEntry.split("=").map((keyOrValue) => decodeURIComponent(keyOrValue.trim()))).reduce((acc, [key, value]) => {
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function objectToBaggageHeader(object2) {
  if (Object.keys(object2).length === 0) {
    return void 0;
  }
  return Object.entries(object2).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      DEBUG_BUILD$2 && logger$1.warn(
        `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`
      );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, "");
}
const TRACEPARENT_REGEXP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  // whitespace
);
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return void 0;
  }
  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return void 0;
  }
  let parentSampled;
  if (matches[3] === "1") {
    parentSampled = true;
  } else if (matches[3] === "0") {
    parentSampled = false;
  }
  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2]
  };
}
function propagationContextFromHeaders(sentryTrace, baggage) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = baggageHeaderToDynamicSamplingContext(baggage);
  if (!traceparentData || !traceparentData.traceId) {
    return { traceId: generateTraceId(), spanId: generateSpanId() };
  }
  const { traceId, parentSpanId, parentSampled } = traceparentData;
  const virtualSpanId = generateSpanId();
  return {
    traceId,
    parentSpanId,
    spanId: virtualSpanId,
    sampled: parentSampled,
    dsc: dynamicSamplingContext || {}
    // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
  };
}
function generateSentryTraceHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  let sampledString = "";
  if (sampled !== void 0) {
    sampledString = sampled ? "-1" : "-0";
  }
  return `${traceId}-${spanId}${sampledString}`;
}
const TRACE_FLAG_NONE = 0;
const TRACE_FLAG_SAMPLED = 1;
let hasShownSpanDropWarning = false;
function spanToTransactionTraceContext(span) {
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  const { data: data2, op, parent_span_id, status, origin } = spanToJSON(span);
  return dropUndefinedKeys({
    parent_span_id,
    span_id,
    trace_id,
    data: data2,
    op,
    status,
    origin
  });
}
function spanToTraceContext(span) {
  const { spanId, traceId: trace_id, isRemote } = span.spanContext();
  const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
  const span_id = isRemote ? generateSpanId() : spanId;
  return dropUndefinedKeys({
    parent_span_id,
    span_id,
    trace_id
  });
}
function spanToTraceHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return generateSentryTraceHeader(traceId, spanId, sampled);
}
function spanTimeInputToSeconds(input) {
  if (typeof input === "number") {
    return ensureTimestampInSeconds(input);
  }
  if (Array.isArray(input)) {
    return input[0] + input[1] / 1e9;
  }
  if (input instanceof Date) {
    return ensureTimestampInSeconds(input.getTime());
  }
  return timestampInSeconds();
}
function ensureTimestampInSeconds(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1e3 : timestamp;
}
function spanToJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getSpanJSON();
  }
  try {
    const { spanId: span_id, traceId: trace_id } = span.spanContext();
    if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
      const { attributes, startTime, name: name2, endTime, parentSpanId, status } = span;
      return dropUndefinedKeys({
        span_id,
        trace_id,
        data: attributes,
        description: name2,
        parent_span_id: parentSpanId,
        start_timestamp: spanTimeInputToSeconds(startTime),
        // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
        timestamp: spanTimeInputToSeconds(endTime) || void 0,
        status: getStatusMessage(status),
        op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
        origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
        _metrics_summary: getMetricSummaryJsonForSpan(span)
      });
    }
    return {
      span_id,
      trace_id
    };
  } catch (e) {
    return {};
  }
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
  const castSpan = span;
  return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
function spanIsSentrySpan(span) {
  return typeof span.getSpanJSON === "function";
}
function spanIsSampled(span) {
  const { traceFlags } = span.spanContext();
  return traceFlags === TRACE_FLAG_SAMPLED;
}
function getStatusMessage(status) {
  if (!status || status.code === SPAN_STATUS_UNSET) {
    return void 0;
  }
  if (status.code === SPAN_STATUS_OK) {
    return "ok";
  }
  return status.message || "unknown_error";
}
const CHILD_SPANS_FIELD = "_sentryChildSpans";
const ROOT_SPAN_FIELD = "_sentryRootSpan";
function addChildSpanToSpan(span, childSpan) {
  const rootSpan = span[ROOT_SPAN_FIELD] || span;
  addNonEnumerableProperty(childSpan, ROOT_SPAN_FIELD, rootSpan);
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].add(childSpan);
  } else {
    addNonEnumerableProperty(span, CHILD_SPANS_FIELD, /* @__PURE__ */ new Set([childSpan]));
  }
}
function getSpanDescendants(span) {
  const resultSet = /* @__PURE__ */ new Set();
  function addSpanChildren(span2) {
    if (resultSet.has(span2)) {
      return;
    } else if (spanIsSampled(span2)) {
      resultSet.add(span2);
      const childSpans = span2[CHILD_SPANS_FIELD] ? Array.from(span2[CHILD_SPANS_FIELD]) : [];
      for (const childSpan of childSpans) {
        addSpanChildren(childSpan);
      }
    }
  }
  addSpanChildren(span);
  return Array.from(resultSet);
}
function getRootSpan(span) {
  return span[ROOT_SPAN_FIELD] || span;
}
function getActiveSpan$2() {
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getActiveSpan) {
    return acs.getActiveSpan();
  }
  return _getSpanForScope(getCurrentScope());
}
function updateMetricSummaryOnActiveSpan(metricType, sanitizedName, value, unit, tags, bucketKey) {
  const span = getActiveSpan$2();
  if (span) {
    updateMetricSummaryOnSpan(span, metricType, sanitizedName, value, unit, tags, bucketKey);
  }
}
function showSpanDropWarning() {
  if (!hasShownSpanDropWarning) {
    consoleSandbox(() => {
      console.warn(
        "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly."
      );
    });
    hasShownSpanDropWarning = true;
  }
}
let errorsInstrumented = false;
function registerSpanErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }
  errorsInstrumented = true;
  addGlobalErrorInstrumentationHandler(errorCallback);
  addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
}
function errorCallback() {
  const activeSpan = getActiveSpan$2();
  const rootSpan = activeSpan && getRootSpan(activeSpan);
  if (rootSpan) {
    const message = "internal_error";
    DEBUG_BUILD$3 && logger$1.log(`[Tracing] Root span: ${message} -> Global error occurred`);
    rootSpan.setStatus({ code: SPAN_STATUS_ERROR, message });
  }
}
errorCallback.tag = "sentry_tracingErrorCallback";
const SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
const ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
function setCapturedScopesOnSpan(span, scope2, isolationScope) {
  if (span) {
    addNonEnumerableProperty(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, isolationScope);
    addNonEnumerableProperty(span, SCOPE_ON_START_SPAN_FIELD, scope2);
  }
}
function getCapturedScopesOnSpan(span) {
  return {
    scope: span[SCOPE_ON_START_SPAN_FIELD],
    isolationScope: span[ISOLATION_SCOPE_ON_START_SPAN_FIELD]
  };
}
function hasTracingEnabled(maybeOptions) {
  if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const client = getClient();
  const options = maybeOptions || client && client.getOptions();
  return !!options && (options.enableTracing || "tracesSampleRate" in options || "tracesSampler" in options);
}
class SentryNonRecordingSpan {
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
  }
  /** @inheritdoc */
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  end(_timestamp) {
  }
  /** @inheritdoc */
  setAttribute(_key, _value) {
    return this;
  }
  /** @inheritdoc */
  setAttributes(_values) {
    return this;
  }
  /** @inheritdoc */
  setStatus(_status) {
    return this;
  }
  /** @inheritdoc */
  updateName(_name) {
    return this;
  }
  /** @inheritdoc */
  isRecording() {
    return false;
  }
  /** @inheritdoc */
  addEvent(_name, _attributesOrStartTime, _startTime) {
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  addLink(_link) {
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  addLinks(_links) {
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
}
function handleCallbackErrors(fn, onError, onFinally = () => {
}) {
  let maybePromiseResult;
  try {
    maybePromiseResult = fn();
  } catch (e) {
    onError(e);
    onFinally();
    throw e;
  }
  return maybeHandlePromiseRejection(maybePromiseResult, onError, onFinally);
}
function maybeHandlePromiseRejection(value, onError, onFinally) {
  if (isThenable(value)) {
    return value.then(
      (res) => {
        onFinally();
        return res;
      },
      (e) => {
        onError(e);
        onFinally();
        throw e;
      }
    );
  }
  onFinally();
  return value;
}
const DEFAULT_ENVIRONMENT$1 = "production";
const FROZEN_DSC_FIELD = "_frozenDsc";
function freezeDscOnSpan(span, dsc) {
  const spanWithMaybeDsc = span;
  addNonEnumerableProperty(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}
function getDynamicSamplingContextFromClient(trace_id, client) {
  const options = client.getOptions();
  const { publicKey: public_key } = client.getDsn() || {};
  const dsc = dropUndefinedKeys({
    environment: options.environment || DEFAULT_ENVIRONMENT$1,
    release: options.release,
    public_key,
    trace_id
  });
  client.emit("createDsc", dsc);
  return dsc;
}
function getDynamicSamplingContextFromScope(client, scope2) {
  const propagationContext = scope2.getPropagationContext();
  return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
function getDynamicSamplingContextFromSpan(span) {
  const client = getClient();
  if (!client) {
    return {};
  }
  const rootSpan = getRootSpan(span);
  const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
  if (frozenDsc) {
    return frozenDsc;
  }
  const traceState = rootSpan.spanContext().traceState;
  const traceStateDsc = traceState && traceState.get("sentry.dsc");
  const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
  if (dscOnTraceState) {
    return dscOnTraceState;
  }
  const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
  const jsonSpan = spanToJSON(rootSpan);
  const attributes = jsonSpan.data || {};
  const maybeSampleRate = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
  if (maybeSampleRate != null) {
    dsc.sample_rate = `${maybeSampleRate}`;
  }
  const source = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  const name2 = jsonSpan.description;
  if (source !== "url" && name2) {
    dsc.transaction = name2;
  }
  if (hasTracingEnabled()) {
    dsc.sampled = String(spanIsSampled(rootSpan));
  }
  client.emit("createDsc", dsc, rootSpan);
  return dsc;
}
function logSpanStart(span) {
  if (!DEBUG_BUILD$3) return;
  const { description: description2 = "< unknown name >", op = "< unknown op >", parent_span_id: parentSpanId } = spanToJSON(span);
  const { spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const header = `[Tracing] Starting ${sampled ? "sampled" : "unsampled"} ${isRootSpan ? "root " : ""}span`;
  const infoParts = [`op: ${op}`, `name: ${description2}`, `ID: ${spanId}`];
  if (parentSpanId) {
    infoParts.push(`parent ID: ${parentSpanId}`);
  }
  if (!isRootSpan) {
    const { op: op2, description: description3 } = spanToJSON(rootSpan);
    infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
    if (op2) {
      infoParts.push(`root op: ${op2}`);
    }
    if (description3) {
      infoParts.push(`root description: ${description3}`);
    }
  }
  logger$1.log(`${header}
  ${infoParts.join("\n  ")}`);
}
function logSpanEnd(span) {
  if (!DEBUG_BUILD$3) return;
  const { description: description2 = "< unknown name >", op = "< unknown op >" } = spanToJSON(span);
  const { spanId } = span.spanContext();
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? "root " : ""}span "${description2}" with ID ${spanId}`;
  logger$1.log(msg);
}
function parseSampleRate(sampleRate) {
  if (typeof sampleRate === "boolean") {
    return Number(sampleRate);
  }
  const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
  if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) {
    DEBUG_BUILD$3 && logger$1.warn(
      `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
        sampleRate
      )} of type ${JSON.stringify(typeof sampleRate)}.`
    );
    return void 0;
  }
  return rate;
}
function sampleSpan(options, samplingContext) {
  if (!hasTracingEnabled(options)) {
    return [false];
  }
  const normalizedRequest = getIsolationScope().getScopeData().sdkProcessingMetadata.normalizedRequest;
  const enhancedSamplingContext = {
    ...samplingContext,
    normalizedRequest: samplingContext.normalizedRequest || normalizedRequest
  };
  let sampleRate;
  if (typeof options.tracesSampler === "function") {
    sampleRate = options.tracesSampler(enhancedSamplingContext);
  } else if (enhancedSamplingContext.parentSampled !== void 0) {
    sampleRate = enhancedSamplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== "undefined") {
    sampleRate = options.tracesSampleRate;
  } else {
    sampleRate = 1;
  }
  const parsedSampleRate = parseSampleRate(sampleRate);
  if (parsedSampleRate === void 0) {
    DEBUG_BUILD$3 && logger$1.warn("[Tracing] Discarding transaction because of invalid sample rate.");
    return [false];
  }
  if (!parsedSampleRate) {
    DEBUG_BUILD$3 && logger$1.log(
      `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
    );
    return [false, parsedSampleRate];
  }
  const shouldSample = Math.random() < parsedSampleRate;
  if (!shouldSample) {
    DEBUG_BUILD$3 && logger$1.log(
      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
        sampleRate
      )})`
    );
    return [false, parsedSampleRate];
  }
  return [true, parsedSampleRate];
}
const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
  return protocol === "http" || protocol === "https";
}
function dsnToString(dsn, withPassword = false) {
  const { host, path: path2, pass, port, projectId, protocol, publicKey } = dsn;
  return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path2 ? `${path2}/` : path2}${projectId}`;
}
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);
  if (!match) {
    consoleSandbox(() => {
      console.error(`Invalid Sentry Dsn: ${str}`);
    });
    return void 0;
  }
  const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
  let path2 = "";
  let projectId = lastPath;
  const split = projectId.split("/");
  if (split.length > 1) {
    path2 = split.slice(0, -1).join("/");
    projectId = split.pop();
  }
  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }
  return dsnFromComponents({ host, pass, path: path2, projectId, port, protocol, publicKey });
}
function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || "",
    pass: components.pass || "",
    host: components.host,
    port: components.port || "",
    path: components.path || "",
    projectId: components.projectId
  };
}
function validateDsn(dsn) {
  if (!DEBUG_BUILD$2) {
    return true;
  }
  const { port, projectId, protocol } = dsn;
  const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
  const hasMissingRequiredComponent = requiredComponents.find((component) => {
    if (!dsn[component]) {
      logger$1.error(`Invalid Sentry Dsn: ${component} missing`);
      return true;
    }
    return false;
  });
  if (hasMissingRequiredComponent) {
    return false;
  }
  if (!projectId.match(/^\d+$/)) {
    logger$1.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
    return false;
  }
  if (!isValidProtocol(protocol)) {
    logger$1.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
    return false;
  }
  if (port && isNaN(parseInt(port, 10))) {
    logger$1.error(`Invalid Sentry Dsn: Invalid port ${port}`);
    return false;
  }
  return true;
}
function makeDsn(from) {
  const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
  if (!components || !validateDsn(components)) {
    return void 0;
  }
  return components;
}
function memoBuilder() {
  const hasWeakSet = typeof WeakSet === "function";
  const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
  function memoize(obj) {
    if (hasWeakSet) {
      if (inner.has(obj)) {
        return true;
      }
      inner.add(obj);
      return false;
    }
    for (let i = 0; i < inner.length; i++) {
      const value = inner[i];
      if (value === obj) {
        return true;
      }
    }
    inner.push(obj);
    return false;
  }
  function unmemoize(obj) {
    if (hasWeakSet) {
      inner.delete(obj);
    } else {
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === obj) {
          inner.splice(i, 1);
          break;
        }
      }
    }
  }
  return [memoize, unmemoize];
}
function normalize$1(input, depth = 100, maxProperties = Infinity) {
  try {
    return visit("", input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}
function normalizeToSize(object2, depth = 3, maxSize = 100 * 1024) {
  const normalized = normalize$1(object2, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object2, depth - 1, maxSize);
  }
  return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
  const [memoize, unmemoize] = memo;
  if (value == null || // this matches null and undefined -> eqeq not eqeqeq
  ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);
  if (!stringified.startsWith("[object ")) {
    return stringified;
  }
  if (value["__sentry_skip_normalization__"]) {
    return value;
  }
  const remainingDepth = typeof value["__sentry_override_normalization_depth__"] === "number" ? value["__sentry_override_normalization_depth__"] : depth;
  if (remainingDepth === 0) {
    return stringified.replace("object ", "");
  }
  if (memoize(value)) {
    return "[Circular ~]";
  }
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch (err) {
    }
  }
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;
  const visitable = convertToPlainObject(value);
  for (const visitKey in visitable) {
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = "[MaxProperties ~]";
      break;
    }
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
    numAdded++;
  }
  unmemoize(value);
  return normalized;
}
function stringifyValue(key, value) {
  try {
    if (key === "domain" && value && typeof value === "object" && value._events) {
      return "[Domain]";
    }
    if (key === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && value === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && value === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && value === document) {
      return "[Document]";
    }
    if (isVueViewModel(value)) {
      return "[VueViewModel]";
    }
    if (isSyntheticEvent(value)) {
      return "[SyntheticEvent]";
    }
    if (typeof value === "number" && !Number.isFinite(value)) {
      return `[${value}]`;
    }
    if (typeof value === "function") {
      return `[Function: ${getFunctionName(value)}]`;
    }
    if (typeof value === "symbol") {
      return `[${String(value)}]`;
    }
    if (typeof value === "bigint") {
      return `[BigInt: ${String(value)}]`;
    }
    const objName = getConstructorName(value);
    if (/^HTML(\w*)Element$/.test(objName)) {
      return `[HTMLElement: ${objName}]`;
    }
    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);
  return prototype ? prototype.constructor.name : "null prototype";
}
function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}
function normalizeUrlToBase(url2, basePath) {
  const escapedBase = basePath.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  let newUrl = url2;
  try {
    newUrl = decodeURI(url2);
  } catch (_Oo) {
  }
  return newUrl.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(new RegExp(`(file://)?/*${escapedBase}/*`, "ig"), "app:///");
}
function createEnvelope(headers, items = []) {
  return [headers, items];
}
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]];
}
function forEachEnvelopeItem(envelope, callback) {
  const envelopeItems = envelope[1];
  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);
    if (result) {
      return true;
    }
  }
  return false;
}
function envelopeContainsItemType(envelope, types2) {
  return forEachEnvelopeItem(envelope, (_, type) => types2.includes(type));
}
function encodeUTF8(input) {
  return GLOBAL_OBJ.__SENTRY__ && GLOBAL_OBJ.__SENTRY__.encodePolyfill ? GLOBAL_OBJ.__SENTRY__.encodePolyfill(input) : new TextEncoder().encode(input);
}
function decodeUTF8(input) {
  return GLOBAL_OBJ.__SENTRY__ && GLOBAL_OBJ.__SENTRY__.decodePolyfill ? GLOBAL_OBJ.__SENTRY__.decodePolyfill(input) : new TextDecoder().decode(input);
}
function serializeEnvelope(envelope) {
  const [envHeaders, items] = envelope;
  let parts = JSON.stringify(envHeaders);
  function append(next) {
    if (typeof parts === "string") {
      parts = typeof next === "string" ? parts + next : [encodeUTF8(parts), next];
    } else {
      parts.push(typeof next === "string" ? encodeUTF8(next) : next);
    }
  }
  for (const item of items) {
    const [itemHeaders, payload] = item;
    append(`
${JSON.stringify(itemHeaders)}
`);
    if (typeof payload === "string" || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch (e) {
        stringifiedPayload = JSON.stringify(normalize$1(payload));
      }
      append(stringifiedPayload);
    }
  }
  return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer2 of buffers) {
    merged.set(buffer2, offset);
    offset += buffer2.length;
  }
  return merged;
}
function parseEnvelope(env) {
  let buffer2 = typeof env === "string" ? encodeUTF8(env) : env;
  function readBinary(length) {
    const bin = buffer2.subarray(0, length);
    buffer2 = buffer2.subarray(length + 1);
    return bin;
  }
  function readJson() {
    let i = buffer2.indexOf(10);
    if (i < 0) {
      i = buffer2.length;
    }
    return JSON.parse(decodeUTF8(readBinary(i)));
  }
  const envelopeHeader = readJson();
  const items = [];
  while (buffer2.length) {
    const itemHeader = readJson();
    const binaryLength = typeof itemHeader.length === "number" ? itemHeader.length : void 0;
    items.push([itemHeader, binaryLength ? readBinary(binaryLength) : readJson()]);
  }
  return [envelopeHeader, items];
}
function createSpanEnvelopeItem(spanJson) {
  const spanHeaders = {
    type: "span"
  };
  return [spanHeaders, spanJson];
}
function createAttachmentEnvelopeItem(attachment) {
  const buffer2 = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
  return [
    dropUndefinedKeys({
      type: "attachment",
      length: buffer2.length,
      filename: attachment.filename,
      content_type: attachment.contentType,
      attachment_type: attachment.attachmentType
    }),
    buffer2
  ];
}
const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket",
  raw_security: "security"
};
function envelopeItemTypeToDataCategory(type) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!metadataOrEvent || !metadataOrEvent.sdk) {
    return;
  }
  const { name: name2, version: version2 } = metadataOrEvent.sdk;
  return { name: name2, version: version2 };
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
  const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: event.event_id,
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) },
    ...dynamicSamplingContext && {
      trace: dropUndefinedKeys({ ...dynamicSamplingContext })
    }
  };
}
function enhanceEventWithSdkInfo(event, sdkInfo) {
  if (!sdkInfo) {
    return event;
  }
  event.sdk = event.sdk || {};
  event.sdk.name = event.sdk.name || sdkInfo.name;
  event.sdk.version = event.sdk.version || sdkInfo.version;
  event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
  event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
  return event;
}
function createSessionEnvelope(session, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
  return createEnvelope(envelopeHeaders, [envelopeItem]);
}
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
  enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
  delete event.sdkProcessingMetadata;
  const eventItem = [{ type: eventType }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}
function createSpanEnvelope(spans, client) {
  function dscHasRequiredProps(dsc2) {
    return !!dsc2.trace_id && !!dsc2.public_key;
  }
  const dsc = getDynamicSamplingContextFromSpan(spans[0]);
  const dsn = client && client.getDsn();
  const tunnel = client && client.getOptions().tunnel;
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...dscHasRequiredProps(dsc) && { trace: dsc },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
  const beforeSendSpan = client && client.getOptions().beforeSendSpan;
  const convertToSpanJSON = beforeSendSpan ? (span) => {
    const spanJson = beforeSendSpan(spanToJSON(span));
    if (!spanJson) {
      showSpanDropWarning();
    }
    return spanJson;
  } : (span) => spanToJSON(span);
  const items = [];
  for (const span of spans) {
    const spanJson = convertToSpanJSON(span);
    if (spanJson) {
      items.push(createSpanEnvelopeItem(spanJson));
    }
  }
  return createEnvelope(headers, items);
}
function timedEventsToMeasurements(events2) {
  if (!events2 || events2.length === 0) {
    return void 0;
  }
  const measurements = {};
  events2.forEach((event) => {
    const attributes = event.attributes || {};
    const unit = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
    const value = attributes[SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
    if (typeof unit === "string" && typeof value === "number") {
      measurements[event.name] = { value, unit };
    }
  });
  return measurements;
}
const MAX_SPAN_COUNT$1 = 1e3;
class SentrySpan {
  /** Epoch timestamp in seconds when the span started. */
  /** Epoch timestamp in seconds when the span ended. */
  /** Internal keeper of the status */
  /** The timed events added to this span. */
  /** if true, treat span as a standalone span (not part of a transaction) */
  /**
   * You should never call the constructor manually, always use `Sentry.startSpan()`
   * or other span methods.
   * @internal
   * @hideconstructor
   * @hidden
   */
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
    this._startTime = spanContext.startTimestamp || timestampInSeconds();
    this._attributes = {};
    this.setAttributes({
      [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: spanContext.op,
      ...spanContext.attributes
    });
    this._name = spanContext.name;
    if (spanContext.parentSpanId) {
      this._parentSpanId = spanContext.parentSpanId;
    }
    if ("sampled" in spanContext) {
      this._sampled = spanContext.sampled;
    }
    if (spanContext.endTimestamp) {
      this._endTime = spanContext.endTimestamp;
    }
    this._events = [];
    this._isStandaloneSpan = spanContext.isStandalone;
    if (this._endTime) {
      this._onSpanEnded();
    }
  }
  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  addLink(_link) {
    return this;
  }
  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  addLinks(_links) {
    return this;
  }
  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
  /** @inheritdoc */
  spanContext() {
    const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
    return {
      spanId,
      traceId,
      traceFlags: sampled ? TRACE_FLAG_SAMPLED : TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  setAttribute(key, value) {
    if (value === void 0) {
      delete this._attributes[key];
    } else {
      this._attributes[key] = value;
    }
    return this;
  }
  /** @inheritdoc */
  setAttributes(attributes) {
    Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]));
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for browser tracing where we want to adjust the start time afterwards.
   * USE THIS WITH CAUTION!
   *
   * @hidden
   * @internal
   */
  updateStartTime(timeInput) {
    this._startTime = spanTimeInputToSeconds(timeInput);
  }
  /**
   * @inheritDoc
   */
  setStatus(value) {
    this._status = value;
    return this;
  }
  /**
   * @inheritDoc
   */
  updateName(name2) {
    this._name = name2;
    this.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
    return this;
  }
  /** @inheritdoc */
  end(endTimestamp) {
    if (this._endTime) {
      return;
    }
    this._endTime = spanTimeInputToSeconds(endTimestamp);
    logSpanEnd(this);
    this._onSpanEnded();
  }
  /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
  getSpanJSON() {
    return dropUndefinedKeys({
      data: this._attributes,
      description: this._name,
      op: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: getStatusMessage(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      _metrics_summary: getMetricSummaryJsonForSpan(this),
      profile_id: this._attributes[SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._attributes[SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
      measurements: timedEventsToMeasurements(this._events),
      is_segment: this._isStandaloneSpan && getRootSpan(this) === this || void 0,
      segment_id: this._isStandaloneSpan ? getRootSpan(this).spanContext().spanId : void 0
    });
  }
  /** @inheritdoc */
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  /**
   * @inheritdoc
   */
  addEvent(name2, attributesOrStartTime, startTime) {
    DEBUG_BUILD$3 && logger$1.log("[Tracing] Adding an event to span:", name2);
    const time = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || timestampInSeconds();
    const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
    const event = {
      name: name2,
      time: spanTimeInputToSeconds(time),
      attributes
    };
    this._events.push(event);
    return this;
  }
  /**
   * This method should generally not be used,
   * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
   * USE THIS WITH CAUTION!
   * @internal
   * @hidden
   * @experimental
   */
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  /** Emit `spanEnd` when the span is ended. */
  _onSpanEnded() {
    const client = getClient();
    if (client) {
      client.emit("spanEnd", this);
    }
    const isSegmentSpan = this._isStandaloneSpan || this === getRootSpan(this);
    if (!isSegmentSpan) {
      return;
    }
    if (this._isStandaloneSpan) {
      if (this._sampled) {
        sendSpanEnvelope(createSpanEnvelope([this], client));
      } else {
        DEBUG_BUILD$3 && logger$1.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
        if (client) {
          client.recordDroppedEvent("sample_rate", "span");
        }
      }
      return;
    }
    const transactionEvent = this._convertSpanToTransaction();
    if (transactionEvent) {
      const scope2 = getCapturedScopesOnSpan(this).scope || getCurrentScope();
      scope2.captureEvent(transactionEvent);
    }
  }
  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
  _convertSpanToTransaction() {
    if (!isFullFinishedSpan(spanToJSON(this))) {
      return void 0;
    }
    if (!this._name) {
      DEBUG_BUILD$3 && logger$1.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      this._name = "<unlabeled transaction>";
    }
    const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = getCapturedScopesOnSpan(this);
    const scope2 = capturedSpanScope || getCurrentScope();
    const client = scope2.getClient() || getClient();
    if (this._sampled !== true) {
      DEBUG_BUILD$3 && logger$1.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
      if (client) {
        client.recordDroppedEvent("sample_rate", "transaction");
      }
      return void 0;
    }
    const finishedSpans = getSpanDescendants(this).filter((span) => span !== this && !isStandaloneSpan(span));
    const spans = finishedSpans.map((span) => spanToJSON(span)).filter(isFullFinishedSpan);
    const source = this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    delete this._attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    spans.forEach((span) => {
      span.data && delete span.data[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    });
    const transaction = {
      contexts: {
        trace: spanToTransactionTraceContext(this)
      },
      spans: (
        // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
        // we do not use spans anymore after this point
        spans.length > MAX_SPAN_COUNT$1 ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT$1) : spans
      ),
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: {
        capturedSpanScope,
        capturedSpanIsolationScope,
        ...dropUndefinedKeys({
          dynamicSamplingContext: getDynamicSamplingContextFromSpan(this)
        })
      },
      _metrics_summary: getMetricSummaryJsonForSpan(this),
      ...source && {
        transaction_info: {
          source
        }
      }
    };
    const measurements = timedEventsToMeasurements(this._events);
    const hasMeasurements = measurements && Object.keys(measurements).length;
    if (hasMeasurements) {
      DEBUG_BUILD$3 && logger$1.log(
        "[Measurements] Adding measurements to transaction event",
        JSON.stringify(measurements, void 0, 2)
      );
      transaction.measurements = measurements;
    }
    return transaction;
  }
}
function isSpanTimeInput(value) {
  return value && typeof value === "number" || value instanceof Date || Array.isArray(value);
}
function isFullFinishedSpan(input) {
  return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
function isStandaloneSpan(span) {
  return span instanceof SentrySpan && span.isStandaloneSpan();
}
function sendSpanEnvelope(envelope) {
  const client = getClient();
  if (!client) {
    return;
  }
  const spanItems = envelope[1];
  if (!spanItems || spanItems.length === 0) {
    client.recordDroppedEvent("before_send", "span");
    return;
  }
  client.sendEnvelope(envelope);
}
const SUPPRESS_TRACING_KEY$1 = "__SENTRY_SUPPRESS_TRACING__";
function startSpanManual$1(options, callback) {
  const acs = getAcs();
  if (acs.startSpanManual) {
    return acs.startSpanManual(options, callback);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan } = options;
  return withScope(options.scope, () => {
    const wrapper = getActiveSpanWrapper$1(customParentSpan);
    return wrapper(() => {
      const scope2 = getCurrentScope();
      const parentSpan = getParentSpan(scope2);
      const shouldSkipSpan = options.onlyIfParent && !parentSpan;
      const activeSpan = shouldSkipSpan ? new SentryNonRecordingSpan() : createChildOrRootSpan({
        parentSpan,
        spanArguments,
        forceTransaction,
        scope: scope2
      });
      _setSpanForScope(scope2, activeSpan);
      function finishAndSetSpan() {
        activeSpan.end();
      }
      return handleCallbackErrors(
        () => callback(activeSpan, finishAndSetSpan),
        () => {
          const { status } = spanToJSON(activeSpan);
          if (activeSpan.isRecording() && (!status || status === "ok")) {
            activeSpan.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
          }
        }
      );
    });
  });
}
function startInactiveSpan$1(options) {
  const acs = getAcs();
  if (acs.startInactiveSpan) {
    return acs.startInactiveSpan(options);
  }
  const spanArguments = parseSentrySpanArguments(options);
  const { forceTransaction, parentSpan: customParentSpan } = options;
  const wrapper = options.scope ? (callback) => withScope(options.scope, callback) : customParentSpan !== void 0 ? (callback) => withActiveSpan$1(customParentSpan, callback) : (callback) => callback();
  return wrapper(() => {
    const scope2 = getCurrentScope();
    const parentSpan = getParentSpan(scope2);
    const shouldSkipSpan = options.onlyIfParent && !parentSpan;
    if (shouldSkipSpan) {
      return new SentryNonRecordingSpan();
    }
    return createChildOrRootSpan({
      parentSpan,
      spanArguments,
      forceTransaction,
      scope: scope2
    });
  });
}
function withActiveSpan$1(span, callback) {
  const acs = getAcs();
  if (acs.withActiveSpan) {
    return acs.withActiveSpan(span, callback);
  }
  return withScope((scope2) => {
    _setSpanForScope(scope2, span || void 0);
    return callback(scope2);
  });
}
function createChildOrRootSpan({
  parentSpan,
  spanArguments,
  forceTransaction,
  scope: scope2
}) {
  if (!hasTracingEnabled()) {
    return new SentryNonRecordingSpan();
  }
  const isolationScope = getIsolationScope();
  let span;
  if (parentSpan && !forceTransaction) {
    span = _startChildSpan(parentSpan, scope2, spanArguments);
    addChildSpanToSpan(parentSpan, span);
  } else if (parentSpan) {
    const dsc = getDynamicSamplingContextFromSpan(parentSpan);
    const { traceId, spanId: parentSpanId } = parentSpan.spanContext();
    const parentSampled = spanIsSampled(parentSpan);
    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments
      },
      scope2,
      parentSampled
    );
    freezeDscOnSpan(span, dsc);
  } else {
    const {
      traceId,
      dsc,
      parentSpanId,
      sampled: parentSampled
    } = {
      ...isolationScope.getPropagationContext(),
      ...scope2.getPropagationContext()
    };
    span = _startRootSpan(
      {
        traceId,
        parentSpanId,
        ...spanArguments
      },
      scope2,
      parentSampled
    );
    if (dsc) {
      freezeDscOnSpan(span, dsc);
    }
  }
  logSpanStart(span);
  setCapturedScopesOnSpan(span, scope2, isolationScope);
  return span;
}
function parseSentrySpanArguments(options) {
  const exp = options.experimental || {};
  const initialCtx = {
    isStandalone: exp.standalone,
    ...options
  };
  if (options.startTime) {
    const ctx = { ...initialCtx };
    ctx.startTimestamp = spanTimeInputToSeconds(options.startTime);
    delete ctx.startTime;
    return ctx;
  }
  return initialCtx;
}
function getAcs() {
  const carrier = getMainCarrier();
  return getAsyncContextStrategy(carrier);
}
function _startRootSpan(spanArguments, scope2, parentSampled) {
  const client = getClient();
  const options = client && client.getOptions() || {};
  const { name: name2 = "", attributes } = spanArguments;
  const [sampled, sampleRate] = scope2.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY$1] ? [false] : sampleSpan(options, {
    name: name2,
    parentSampled,
    attributes,
    transactionContext: {
      name: name2,
      parentSampled
    }
  });
  const rootSpan = new SentrySpan({
    ...spanArguments,
    attributes: {
      [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
      ...spanArguments.attributes
    },
    sampled
  });
  if (sampleRate !== void 0) {
    rootSpan.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, sampleRate);
  }
  if (client) {
    client.emit("spanStart", rootSpan);
  }
  return rootSpan;
}
function _startChildSpan(parentSpan, scope2, spanArguments) {
  const { spanId, traceId } = parentSpan.spanContext();
  const sampled = scope2.getScopeData().sdkProcessingMetadata[SUPPRESS_TRACING_KEY$1] ? false : spanIsSampled(parentSpan);
  const childSpan = sampled ? new SentrySpan({
    ...spanArguments,
    parentSpanId: spanId,
    traceId,
    sampled
  }) : new SentryNonRecordingSpan({ traceId });
  addChildSpanToSpan(parentSpan, childSpan);
  const client = getClient();
  if (client) {
    client.emit("spanStart", childSpan);
    if (spanArguments.endTimestamp) {
      client.emit("spanEnd", childSpan);
    }
  }
  return childSpan;
}
function getParentSpan(scope2) {
  const span = _getSpanForScope(scope2);
  if (!span) {
    return void 0;
  }
  const client = getClient();
  const options = client ? client.getOptions() : {};
  if (options.parentSpanIsAlwaysRootSpan) {
    return getRootSpan(span);
  }
  return span;
}
function getActiveSpanWrapper$1(parentSpan) {
  return parentSpan !== void 0 ? (callback) => {
    return withActiveSpan$1(parentSpan, callback);
  } : (callback) => callback();
}
function notifyEventProcessors(processors, event, hint, index2 = 0) {
  return new SyncPromise((resolve3, reject) => {
    const processor = processors[index2];
    if (event === null || typeof processor !== "function") {
      resolve3(event);
    } else {
      const result = processor({ ...event }, hint);
      DEBUG_BUILD$3 && processor.id && result === null && logger$1.log(`Event processor "${processor.id}" dropped event`);
      if (isThenable(result)) {
        void result.then((final) => notifyEventProcessors(processors, final, hint, index2 + 1).then(resolve3)).then(null, reject);
      } else {
        void notifyEventProcessors(processors, result, hint, index2 + 1).then(resolve3).then(null, reject);
      }
    }
  });
}
let parsedStackResults;
let lastKeysCount;
let cachedFilenameDebugIds;
function getFilenameToDebugIdMap(stackParser) {
  const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
  if (!debugIdMap) {
    return {};
  }
  const debugIdKeys = Object.keys(debugIdMap);
  if (cachedFilenameDebugIds && debugIdKeys.length === lastKeysCount) {
    return cachedFilenameDebugIds;
  }
  lastKeysCount = debugIdKeys.length;
  cachedFilenameDebugIds = debugIdKeys.reduce((acc, stackKey) => {
    if (!parsedStackResults) {
      parsedStackResults = {};
    }
    const result = parsedStackResults[stackKey];
    if (result) {
      acc[result[0]] = result[1];
    } else {
      const parsedStack = stackParser(stackKey);
      for (let i = parsedStack.length - 1; i >= 0; i--) {
        const stackFrame = parsedStack[i];
        const filename = stackFrame && stackFrame.filename;
        const debugId = debugIdMap[stackKey];
        if (filename && debugId) {
          acc[filename] = debugId;
          parsedStackResults[stackKey] = [filename, debugId];
          break;
        }
      }
    }
    return acc;
  }, {});
  return cachedFilenameDebugIds;
}
function applyScopeDataToEvent(event, data2) {
  const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data2;
  applyDataToEvent(event, data2);
  if (span) {
    applySpanToEvent(event, span);
  }
  applyFingerprintToEvent(event, fingerprint);
  applyBreadcrumbsToEvent(event, breadcrumbs);
  applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
function mergeScopeData(data2, mergeData) {
  const {
    extra,
    tags,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span
  } = mergeData;
  mergeAndOverwriteScopeData(data2, "extra", extra);
  mergeAndOverwriteScopeData(data2, "tags", tags);
  mergeAndOverwriteScopeData(data2, "user", user);
  mergeAndOverwriteScopeData(data2, "contexts", contexts);
  data2.sdkProcessingMetadata = merge$1(data2.sdkProcessingMetadata, sdkProcessingMetadata, 2);
  if (level) {
    data2.level = level;
  }
  if (transactionName) {
    data2.transactionName = transactionName;
  }
  if (span) {
    data2.span = span;
  }
  if (breadcrumbs.length) {
    data2.breadcrumbs = [...data2.breadcrumbs, ...breadcrumbs];
  }
  if (fingerprint.length) {
    data2.fingerprint = [...data2.fingerprint, ...fingerprint];
  }
  if (eventProcessors.length) {
    data2.eventProcessors = [...data2.eventProcessors, ...eventProcessors];
  }
  if (attachments.length) {
    data2.attachments = [...data2.attachments, ...attachments];
  }
  data2.propagationContext = { ...data2.propagationContext, ...propagationContext };
}
function mergeAndOverwriteScopeData(data2, prop, mergeVal) {
  data2[prop] = merge$1(data2[prop], mergeVal, 1);
}
function applyDataToEvent(event, data2) {
  const { extra, tags, user, contexts, level, transactionName } = data2;
  const cleanedExtra = dropUndefinedKeys(extra);
  if (cleanedExtra && Object.keys(cleanedExtra).length) {
    event.extra = { ...cleanedExtra, ...event.extra };
  }
  const cleanedTags = dropUndefinedKeys(tags);
  if (cleanedTags && Object.keys(cleanedTags).length) {
    event.tags = { ...cleanedTags, ...event.tags };
  }
  const cleanedUser = dropUndefinedKeys(user);
  if (cleanedUser && Object.keys(cleanedUser).length) {
    event.user = { ...cleanedUser, ...event.user };
  }
  const cleanedContexts = dropUndefinedKeys(contexts);
  if (cleanedContexts && Object.keys(cleanedContexts).length) {
    event.contexts = { ...cleanedContexts, ...event.contexts };
  }
  if (level) {
    event.level = level;
  }
  if (transactionName && event.type !== "transaction") {
    event.transaction = transactionName;
  }
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
  const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
  event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
  event.sdkProcessingMetadata = {
    ...event.sdkProcessingMetadata,
    ...sdkProcessingMetadata
  };
}
function applySpanToEvent(event, span) {
  event.contexts = {
    trace: spanToTraceContext(span),
    ...event.contexts
  };
  event.sdkProcessingMetadata = {
    dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
    ...event.sdkProcessingMetadata
  };
  const rootSpan = getRootSpan(span);
  const transactionName = spanToJSON(rootSpan).description;
  if (transactionName && !event.transaction && event.type === "transaction") {
    event.transaction = transactionName;
  }
}
function applyFingerprintToEvent(event, fingerprint) {
  event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
  if (fingerprint) {
    event.fingerprint = event.fingerprint.concat(fingerprint);
  }
  if (event.fingerprint && !event.fingerprint.length) {
    delete event.fingerprint;
  }
}
function prepareEvent(options, event, hint, scope2, client, isolationScope) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || uuid4(),
    timestamp: event.timestamp || dateTimestampInSeconds()
  };
  const integrations = hint.integrations || options.integrations.map((i) => i.name);
  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);
  if (client) {
    client.emit("applyFrameMetadata", event);
  }
  if (event.type === void 0) {
    applyDebugIds(prepared, options.stackParser);
  }
  const finalScope = getFinalScope(scope2, hint.captureContext);
  if (hint.mechanism) {
    addExceptionMechanism(prepared, hint.mechanism);
  }
  const clientEventProcessors = client ? client.getEventProcessors() : [];
  const data2 = getGlobalScope().getScopeData();
  if (isolationScope) {
    const isolationData = isolationScope.getScopeData();
    mergeScopeData(data2, isolationData);
  }
  if (finalScope) {
    const finalScopeData = finalScope.getScopeData();
    mergeScopeData(data2, finalScopeData);
  }
  const attachments = [...hint.attachments || [], ...data2.attachments];
  if (attachments.length) {
    hint.attachments = attachments;
  }
  applyScopeDataToEvent(prepared, data2);
  const eventProcessors = [
    ...clientEventProcessors,
    // Run scope event processors _after_ all other processors
    ...data2.eventProcessors
  ];
  const result = notifyEventProcessors(eventProcessors, prepared, hint);
  return result.then((evt) => {
    if (evt) {
      applyDebugMeta(evt);
    }
    if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}
function applyClientOptions(event, options) {
  const { environment, release, dist, maxValueLength = 250 } = options;
  event.environment = event.environment || environment || DEFAULT_ENVIRONMENT$1;
  if (!event.release && release) {
    event.release = release;
  }
  if (!event.dist && dist) {
    event.dist = dist;
  }
  if (event.message) {
    event.message = truncate(event.message, maxValueLength);
  }
  const exception = event.exception && event.exception.values && event.exception.values[0];
  if (exception && exception.value) {
    exception.value = truncate(exception.value, maxValueLength);
  }
  const request = event.request;
  if (request && request.url) {
    request.url = truncate(request.url, maxValueLength);
  }
}
function applyDebugIds(event, stackParser) {
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
  try {
    event.exception.values.forEach((exception) => {
      exception.stacktrace.frames.forEach((frame) => {
        if (filenameDebugIdMap && frame.filename) {
          frame.debug_id = filenameDebugIdMap[frame.filename];
        }
      });
    });
  } catch (e) {
  }
}
function applyDebugMeta(event) {
  const filenameDebugIdMap = {};
  try {
    event.exception.values.forEach((exception) => {
      exception.stacktrace.frames.forEach((frame) => {
        if (frame.debug_id) {
          if (frame.abs_path) {
            filenameDebugIdMap[frame.abs_path] = frame.debug_id;
          } else if (frame.filename) {
            filenameDebugIdMap[frame.filename] = frame.debug_id;
          }
          delete frame.debug_id;
        }
      });
    });
  } catch (e) {
  }
  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
    images.push({
      type: "sourcemap",
      code_file: filename,
      debug_id
    });
  });
}
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
  }
}
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }
  const normalized = {
    ...event,
    ...event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map((b) => ({
        ...b,
        ...b.data && {
          data: normalize$1(b.data, depth, maxBreadth)
        }
      }))
    },
    ...event.user && {
      user: normalize$1(event.user, depth, maxBreadth)
    },
    ...event.contexts && {
      contexts: normalize$1(event.contexts, depth, maxBreadth)
    },
    ...event.extra && {
      extra: normalize$1(event.extra, depth, maxBreadth)
    }
  };
  if (event.contexts && event.contexts.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize$1(event.contexts.trace.data, depth, maxBreadth);
    }
  }
  if (event.spans) {
    normalized.spans = event.spans.map((span) => {
      return {
        ...span,
        ...span.data && {
          data: normalize$1(span.data, depth, maxBreadth)
        }
      };
    });
  }
  if (event.contexts && event.contexts.flags && normalized.contexts) {
    normalized.contexts.flags = normalize$1(event.contexts.flags, 3, maxBreadth);
  }
  return normalized;
}
function getFinalScope(scope2, captureContext) {
  if (!captureContext) {
    return scope2;
  }
  const finalScope = scope2 ? scope2.clone() : new Scope();
  finalScope.update(captureContext);
  return finalScope;
}
function parseEventHintOrCaptureContext(hint) {
  if (!hint) {
    return void 0;
  }
  if (hintIsScopeOrFunction(hint)) {
    return { captureContext: hint };
  }
  if (hintIsScopeContext(hint)) {
    return {
      captureContext: hint
    };
  }
  return hint;
}
function hintIsScopeOrFunction(hint) {
  return hint instanceof Scope || typeof hint === "function";
}
const captureContextKeys = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "requestSession",
  "propagationContext"
];
function hintIsScopeContext(hint) {
  return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}
function captureException(exception, hint) {
  return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
function captureMessage(message, captureContext) {
  const level = typeof captureContext === "string" ? captureContext : void 0;
  const context2 = typeof captureContext !== "string" ? { captureContext } : void 0;
  return getCurrentScope().captureMessage(message, level, context2);
}
function captureEvent(event, hint) {
  return getCurrentScope().captureEvent(event, hint);
}
function setContext(name2, context2) {
  getIsolationScope().setContext(name2, context2);
}
async function flush(timeout) {
  const client = getClient();
  if (client) {
    return client.flush(timeout);
  }
  DEBUG_BUILD$3 && logger$1.warn("Cannot flush events. No client defined.");
  return Promise.resolve(false);
}
function isEnabled() {
  const client = getClient();
  return !!client && client.getOptions().enabled !== false && !!client.getTransport();
}
function startSession$1(context2) {
  const client = getClient();
  const isolationScope = getIsolationScope();
  const currentScope = getCurrentScope();
  const { release, environment = DEFAULT_ENVIRONMENT$1 } = client && client.getOptions() || {};
  const { userAgent } = GLOBAL_OBJ.navigator || {};
  const session = makeSession({
    release,
    environment,
    user: currentScope.getUser() || isolationScope.getUser(),
    ...userAgent && { userAgent },
    ...context2
  });
  const currentSession = isolationScope.getSession();
  if (currentSession && currentSession.status === "ok") {
    updateSession(currentSession, { status: "exited" });
  }
  endSession$1();
  isolationScope.setSession(session);
  currentScope.setSession(session);
  return session;
}
function endSession$1() {
  const isolationScope = getIsolationScope();
  const currentScope = getCurrentScope();
  const session = currentScope.getSession() || isolationScope.getSession();
  if (session) {
    closeSession(session);
  }
  _sendSessionUpdate();
  isolationScope.setSession();
  currentScope.setSession();
}
function _sendSessionUpdate() {
  const isolationScope = getIsolationScope();
  const currentScope = getCurrentScope();
  const client = getClient();
  const session = currentScope.getSession() || isolationScope.getSession();
  if (session && client) {
    client.captureSession(session);
  }
}
function captureSession(end = false) {
  if (end) {
    endSession$1();
    return;
  }
  _sendSessionUpdate();
}
class SessionFlusher {
  // We adjust the type here to add the `unref()` part, as setInterval can technically return a number or a NodeJS.Timer
  constructor(client, attrs) {
    this._client = client;
    this.flushTimeout = 60;
    this._pendingAggregates = /* @__PURE__ */ new Map();
    this._isEnabled = true;
    this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1e3);
    if (this._intervalId.unref) {
      this._intervalId.unref();
    }
    this._sessionAttrs = attrs;
  }
  /** Checks if `pendingAggregates` has entries, and if it does flushes them by calling `sendSession` */
  flush() {
    const sessionAggregates = this.getSessionAggregates();
    if (sessionAggregates.aggregates.length === 0) {
      return;
    }
    this._pendingAggregates = /* @__PURE__ */ new Map();
    this._client.sendSession(sessionAggregates);
  }
  /** Massages the entries in `pendingAggregates` and returns aggregated sessions */
  getSessionAggregates() {
    const aggregates = Array.from(this._pendingAggregates.values());
    const sessionAggregates = {
      attrs: this._sessionAttrs,
      aggregates
    };
    return dropUndefinedKeys(sessionAggregates);
  }
  /** JSDoc */
  close() {
    clearInterval(this._intervalId);
    this._isEnabled = false;
    this.flush();
  }
  /**
   * Wrapper function for _incrementSessionStatusCount that checks if the instance of SessionFlusher is enabled then
   * fetches the session status of the request from `Scope.getRequestSession().status` on the scope and passes them to
   * `_incrementSessionStatusCount` along with the start date
   */
  incrementSessionStatusCount() {
    if (!this._isEnabled) {
      return;
    }
    const isolationScope = getIsolationScope();
    const requestSession = isolationScope.getRequestSession();
    if (requestSession && requestSession.status) {
      this._incrementSessionStatusCount(requestSession.status, /* @__PURE__ */ new Date());
      isolationScope.setRequestSession(void 0);
    }
  }
  /**
   * Increments status bucket in pendingAggregates buffer (internal state) corresponding to status of
   * the session received
   */
  // eslint-disable-next-line deprecation/deprecation
  _incrementSessionStatusCount(status, date) {
    const sessionStartedTrunc = new Date(date).setSeconds(0, 0);
    let aggregationCounts = this._pendingAggregates.get(sessionStartedTrunc);
    if (!aggregationCounts) {
      aggregationCounts = { started: new Date(sessionStartedTrunc).toISOString() };
      this._pendingAggregates.set(sessionStartedTrunc, aggregationCounts);
    }
    switch (status) {
      case "errored":
        aggregationCounts.errored = (aggregationCounts.errored || 0) + 1;
        return aggregationCounts.errored;
      case "ok":
        aggregationCounts.exited = (aggregationCounts.exited || 0) + 1;
        return aggregationCounts.exited;
      default:
        aggregationCounts.crashed = (aggregationCounts.crashed || 0) + 1;
        return aggregationCounts.crashed;
    }
  }
}
const SENTRY_API_VERSION = "7";
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
  const port = dsn.port ? `:${dsn.port}` : "";
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
function _encodedAuth(dsn, sdkInfo) {
  const params = {
    sentry_version: SENTRY_API_VERSION
  };
  if (dsn.publicKey) {
    params.sentry_key = dsn.publicKey;
  }
  if (sdkInfo) {
    params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
  }
  return new URLSearchParams(params).toString();
}
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
const installedIntegrations = [];
function filterDuplicates(integrations) {
  const integrationsByName = {};
  integrations.forEach((currentInstance) => {
    const { name: name2 } = currentInstance;
    const existingInstance = integrationsByName[name2];
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }
    integrationsByName[name2] = currentInstance;
  });
  return Object.values(integrationsByName);
}
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;
  defaultIntegrations.forEach((integration) => {
    integration.isDefaultInstance = true;
  });
  let integrations;
  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === "function") {
    const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
    integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
  } else {
    integrations = defaultIntegrations;
  }
  const finalIntegrations = filterDuplicates(integrations);
  const debugIndex = finalIntegrations.findIndex((integration) => integration.name === "Debug");
  if (debugIndex > -1) {
    const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
    finalIntegrations.push(debugInstance);
  }
  return finalIntegrations;
}
function setupIntegrations(client, integrations) {
  const integrationIndex = {};
  integrations.forEach((integration) => {
    if (integration) {
      setupIntegration(client, integration, integrationIndex);
    }
  });
  return integrationIndex;
}
function afterSetupIntegrations(client, integrations) {
  for (const integration of integrations) {
    if (integration && integration.afterAllSetup) {
      integration.afterAllSetup(client);
    }
  }
}
function setupIntegration(client, integration, integrationIndex) {
  if (integrationIndex[integration.name]) {
    DEBUG_BUILD$3 && logger$1.log(`Integration skipped because it was already installed: ${integration.name}`);
    return;
  }
  integrationIndex[integration.name] = integration;
  if (installedIntegrations.indexOf(integration.name) === -1 && typeof integration.setupOnce === "function") {
    integration.setupOnce();
    installedIntegrations.push(integration.name);
  }
  if (integration.setup && typeof integration.setup === "function") {
    integration.setup(client);
  }
  if (typeof integration.preprocessEvent === "function") {
    const callback = integration.preprocessEvent.bind(integration);
    client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
  }
  if (typeof integration.processEvent === "function") {
    const callback = integration.processEvent.bind(integration);
    const processor = Object.assign((event, hint) => callback(event, hint, client), {
      id: integration.name
    });
    client.addEventProcessor(processor);
  }
  DEBUG_BUILD$3 && logger$1.log(`Integration installed: ${integration.name}`);
}
function defineIntegration(fn) {
  return fn;
}
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [
    { type: "client_report" },
    {
      timestamp: dateTimestampInSeconds(),
      discarded_events
    }
  ];
  return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}
class SentryError extends Error {
  /** Display name of this error instance. */
  constructor(message, logLevel = "warn") {
    super(message);
    this.message = message;
    this.name = new.target.prototype.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
    this.logLevel = logLevel;
  }
}
const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
class BaseClient {
  /** Options passed to the SDK. */
  /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
  /** Array of set up integrations. */
  /** Number of calls being processed */
  /** Holds flushable  */
  // eslint-disable-next-line @typescript-eslint/ban-types
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  constructor(options) {
    this._options = options;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    if (options.dsn) {
      this._dsn = makeDsn(options.dsn);
    } else {
      DEBUG_BUILD$3 && logger$1.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const url2 = getEnvelopeEndpointWithUrlEncodedAuth(
        this._dsn,
        options.tunnel,
        options._metadata ? options._metadata.sdk : void 0
      );
      this._transport = options.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...options.transportOptions,
        url: url2
      });
    }
    const tracingOptions = ["enableTracing", "tracesSampleRate", "tracesSampler"];
    const undefinedOption = tracingOptions.find((option) => option in options && options[option] == void 0);
    if (undefinedOption) {
      consoleSandbox(() => {
        console.warn(
          `[Sentry] Deprecation warning: \`${undefinedOption}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`
        );
      });
    }
  }
  /**
   * @inheritDoc
   */
  captureException(exception, hint, scope2) {
    const eventId = uuid4();
    if (checkOrSetAlreadyCaught(exception)) {
      DEBUG_BUILD$3 && logger$1.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = {
      event_id: eventId,
      ...hint
    };
    this._process(
      this.eventFromException(exception, hintWithEventId).then(
        (event) => this._captureEvent(event, hintWithEventId, scope2)
      )
    );
    return hintWithEventId.event_id;
  }
  /**
   * @inheritDoc
   */
  captureMessage(message, level, hint, currentScope) {
    const hintWithEventId = {
      event_id: uuid4(),
      ...hint
    };
    const eventMessage = isParameterizedString(message) ? message : String(message);
    const promisedEvent = isPrimitive$1(message) ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
    this._process(promisedEvent.then((event) => this._captureEvent(event, hintWithEventId, currentScope)));
    return hintWithEventId.event_id;
  }
  /**
   * @inheritDoc
   */
  captureEvent(event, hint, currentScope) {
    const eventId = uuid4();
    if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
      DEBUG_BUILD$3 && logger$1.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = {
      event_id: eventId,
      ...hint
    };
    const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
    const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
    this._process(this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope));
    return hintWithEventId.event_id;
  }
  /**
   * @inheritDoc
   */
  captureSession(session) {
    if (!(typeof session.release === "string")) {
      DEBUG_BUILD$3 && logger$1.warn("Discarded session because of missing or non-string release");
    } else {
      this.sendSession(session);
      updateSession(session, { init: false });
    }
  }
  /**
   * @inheritDoc
   */
  getDsn() {
    return this._dsn;
  }
  /**
   * @inheritDoc
   */
  getOptions() {
    return this._options;
  }
  /**
   * @see SdkMetadata
   *
   * @return The metadata of the SDK
   */
  getSdkMetadata() {
    return this._options._metadata;
  }
  /**
   * @inheritDoc
   */
  getTransport() {
    return this._transport;
  }
  /**
   * @inheritDoc
   */
  flush(timeout) {
    const transport = this._transport;
    if (transport) {
      this.emit("flush");
      return this._isClientDoneProcessing(timeout).then((clientFinished) => {
        return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
      });
    } else {
      return resolvedSyncPromise(true);
    }
  }
  /**
   * @inheritDoc
   */
  close(timeout) {
    return this.flush(timeout).then((result) => {
      this.getOptions().enabled = false;
      this.emit("close");
      return result;
    });
  }
  /** Get all installed event processors. */
  getEventProcessors() {
    return this._eventProcessors;
  }
  /** @inheritDoc */
  addEventProcessor(eventProcessor) {
    this._eventProcessors.push(eventProcessor);
  }
  /** @inheritdoc */
  init() {
    if (this._isEnabled() || // Force integrations to be setup even if no DSN was set when we have
    // Spotlight enabled. This is particularly important for browser as we
    // don't support the `spotlight` option there and rely on the users
    // adding the `spotlightBrowserIntegration()` to their integrations which
    // wouldn't get initialized with the check below when there's no DSN set.
    this._options.integrations.some(({ name: name2 }) => name2.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  /**
   * Gets an installed integration by its name.
   *
   * @returns The installed integration or `undefined` if no integration with that `name` was installed.
   */
  getIntegrationByName(integrationName) {
    return this._integrations[integrationName];
  }
  /**
   * @inheritDoc
   */
  addIntegration(integration) {
    const isAlreadyInstalled = this._integrations[integration.name];
    setupIntegration(this, integration, this._integrations);
    if (!isAlreadyInstalled) {
      afterSetupIntegrations(this, [integration]);
    }
  }
  /**
   * @inheritDoc
   */
  sendEvent(event, hint = {}) {
    this.emit("beforeSendEvent", event, hint);
    let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
    for (const attachment of hint.attachments || []) {
      env = addItemToEnvelope(env, createAttachmentEnvelopeItem(attachment));
    }
    const promise = this.sendEnvelope(env);
    if (promise) {
      promise.then((sendResponse) => this.emit("afterSendEvent", event, sendResponse), null);
    }
  }
  /**
   * @inheritDoc
   */
  sendSession(session) {
    const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(env);
  }
  /**
   * @inheritDoc
   */
  recordDroppedEvent(reason, category, eventOrCount) {
    if (this._options.sendClientReports) {
      const count = typeof eventOrCount === "number" ? eventOrCount : 1;
      const key = `${reason}:${category}`;
      DEBUG_BUILD$3 && logger$1.log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ""}`);
      this._outcomes[key] = (this._outcomes[key] || 0) + count;
    }
  }
  // Keep on() & emit() signatures in sync with types' client.ts interface
  /* eslint-disable @typescript-eslint/unified-signatures */
  /** @inheritdoc */
  /** @inheritdoc */
  on(hook, callback) {
    const hooks = this._hooks[hook] = this._hooks[hook] || [];
    hooks.push(callback);
    return () => {
      const cbIndex = hooks.indexOf(callback);
      if (cbIndex > -1) {
        hooks.splice(cbIndex, 1);
      }
    };
  }
  /** @inheritdoc */
  /** @inheritdoc */
  emit(hook, ...rest) {
    const callbacks = this._hooks[hook];
    if (callbacks) {
      callbacks.forEach((callback) => callback(...rest));
    }
  }
  /**
   * @inheritdoc
   */
  sendEnvelope(envelope) {
    this.emit("beforeEnvelope", envelope);
    if (this._isEnabled() && this._transport) {
      return this._transport.send(envelope).then(null, (reason) => {
        DEBUG_BUILD$3 && logger$1.error("Error while sending envelope:", reason);
        return reason;
      });
    }
    DEBUG_BUILD$3 && logger$1.error("Transport disabled");
    return resolvedSyncPromise({});
  }
  /* eslint-enable @typescript-eslint/unified-signatures */
  /** Setup integrations for this client. */
  _setupIntegrations() {
    const { integrations } = this._options;
    this._integrations = setupIntegrations(this, integrations);
    afterSetupIntegrations(this, integrations);
  }
  /** Updates existing session based on the provided event */
  _updateSessionFromEvent(session, event) {
    let crashed = false;
    let errored = false;
    const exceptions = event.exception && event.exception.values;
    if (exceptions) {
      errored = true;
      for (const ex of exceptions) {
        const mechanism = ex.mechanism;
        if (mechanism && mechanism.handled === false) {
          crashed = true;
          break;
        }
      }
    }
    const sessionNonTerminal = session.status === "ok";
    const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
    if (shouldUpdateAndSend) {
      updateSession(session, {
        ...crashed && { status: "crashed" },
        errors: session.errors || Number(errored || crashed)
      });
      this.captureSession(session);
    }
  }
  /**
   * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
   * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
   * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
   * `false` otherwise
   */
  _isClientDoneProcessing(timeout) {
    return new SyncPromise((resolve3) => {
      let ticked = 0;
      const tick = 1;
      const interval = setInterval(() => {
        if (this._numProcessing == 0) {
          clearInterval(interval);
          resolve3(true);
        } else {
          ticked += tick;
          if (timeout && ticked >= timeout) {
            clearInterval(interval);
            resolve3(false);
          }
        }
      }, tick);
    });
  }
  /** Determines whether this SDK is enabled and a transport is present. */
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== void 0;
  }
  /**
   * Adds common information to events.
   *
   * The information includes release and environment from `options`,
   * breadcrumbs and context (extra, tags and user) from the scope.
   *
   * Information that is already present in the event is never overwritten. For
   * nested objects, such as the context, keys are merged.
   *
   * @param event The original event.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A new event with more information.
   */
  _prepareEvent(event, hint, currentScope = getCurrentScope(), isolationScope = getIsolationScope()) {
    const options = this.getOptions();
    const integrations = Object.keys(this._integrations);
    if (!hint.integrations && integrations.length > 0) {
      hint.integrations = integrations;
    }
    this.emit("preprocessEvent", event, hint);
    if (!event.type) {
      isolationScope.setLastEventId(event.event_id || hint.event_id);
    }
    return prepareEvent(options, event, hint, currentScope, this, isolationScope).then((evt) => {
      if (evt === null) {
        return evt;
      }
      evt.contexts = {
        trace: getTraceContextFromScope(currentScope),
        ...evt.contexts
      };
      const dynamicSamplingContext = getDynamicSamplingContextFromScope(this, currentScope);
      evt.sdkProcessingMetadata = {
        dynamicSamplingContext,
        ...evt.sdkProcessingMetadata
      };
      return evt;
    });
  }
  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
  _captureEvent(event, hint = {}, scope2) {
    return this._processEvent(event, hint, scope2).then(
      (finalEvent) => {
        return finalEvent.event_id;
      },
      (reason) => {
        if (DEBUG_BUILD$3) {
          const sentryError = reason;
          if (sentryError.logLevel === "log") {
            logger$1.log(sentryError.message);
          } else {
            logger$1.warn(sentryError);
          }
        }
        return void 0;
      }
    );
  }
  /**
   * Processes an event (either error or message) and sends it to Sentry.
   *
   * This also adds breadcrumbs and context information to the event. However,
   * platform specific meta data (such as the User's IP address) must be added
   * by the SDK implementor.
   *
   *
   * @param event The event to send to Sentry.
   * @param hint May contain additional information about the original exception.
   * @param currentScope A scope containing event metadata.
   * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
   */
  _processEvent(event, hint, currentScope) {
    const options = this.getOptions();
    const { sampleRate } = options;
    const isTransaction = isTransactionEvent(event);
    const isError2 = isErrorEvent(event);
    const eventType = event.type || "error";
    const beforeSendLabel = `before send for type \`${eventType}\``;
    const parsedSampleRate = typeof sampleRate === "undefined" ? void 0 : parseSampleRate(sampleRate);
    if (isError2 && typeof parsedSampleRate === "number" && Math.random() > parsedSampleRate) {
      this.recordDroppedEvent("sample_rate", "error", event);
      return rejectedSyncPromise(
        new SentryError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
          "log"
        )
      );
    }
    const dataCategory = eventType === "replay_event" ? "replay" : eventType;
    const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
    const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;
    return this._prepareEvent(event, hint, currentScope, capturedSpanIsolationScope).then((prepared) => {
      if (prepared === null) {
        this.recordDroppedEvent("event_processor", dataCategory, event);
        throw new SentryError("An event processor returned `null`, will not send event.", "log");
      }
      const isInternalException = hint.data && hint.data.__sentry__ === true;
      if (isInternalException) {
        return prepared;
      }
      const result = processBeforeSend(this, options, prepared, hint);
      return _validateBeforeSendResult(result, beforeSendLabel);
    }).then((processedEvent) => {
      if (processedEvent === null) {
        this.recordDroppedEvent("before_send", dataCategory, event);
        if (isTransaction) {
          const spans = event.spans || [];
          const spanCount = 1 + spans.length;
          this.recordDroppedEvent("before_send", "span", spanCount);
        }
        throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
      }
      const session = currentScope && currentScope.getSession();
      if (!isTransaction && session) {
        this._updateSessionFromEvent(session, processedEvent);
      }
      if (isTransaction) {
        const spanCountBefore = processedEvent.sdkProcessingMetadata && processedEvent.sdkProcessingMetadata.spanCountBeforeProcessing || 0;
        const spanCountAfter = processedEvent.spans ? processedEvent.spans.length : 0;
        const droppedSpanCount = spanCountBefore - spanCountAfter;
        if (droppedSpanCount > 0) {
          this.recordDroppedEvent("before_send", "span", droppedSpanCount);
        }
      }
      const transactionInfo = processedEvent.transaction_info;
      if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
        const source = "custom";
        processedEvent.transaction_info = {
          ...transactionInfo,
          source
        };
      }
      this.sendEvent(processedEvent, hint);
      return processedEvent;
    }).then(null, (reason) => {
      if (reason instanceof SentryError) {
        throw reason;
      }
      this.captureException(reason, {
        data: {
          __sentry__: true
        },
        originalException: reason
      });
      throw new SentryError(
        `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
      );
    });
  }
  /**
   * Occupies the client with processing and event
   */
  _process(promise) {
    this._numProcessing++;
    void promise.then(
      (value) => {
        this._numProcessing--;
        return value;
      },
      (reason) => {
        this._numProcessing--;
        return reason;
      }
    );
  }
  /**
   * Clears outcomes on this client and returns them.
   */
  _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.entries(outcomes).map(([key, quantity]) => {
      const [reason, category] = key.split(":");
      return {
        reason,
        category,
        quantity
      };
    });
  }
  /**
   * Sends client reports as an envelope.
   */
  _flushOutcomes() {
    DEBUG_BUILD$3 && logger$1.log("Flushing outcomes...");
    const outcomes = this._clearOutcomes();
    if (outcomes.length === 0) {
      DEBUG_BUILD$3 && logger$1.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      DEBUG_BUILD$3 && logger$1.log("No dsn provided, will not send outcomes");
      return;
    }
    DEBUG_BUILD$3 && logger$1.log("Sending outcomes:", outcomes);
    const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
    this.sendEnvelope(envelope);
  }
  /**
   * @inheritDoc
   */
}
function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if (isThenable(beforeSendResult)) {
    return beforeSendResult.then(
      (event) => {
        if (!isPlainObject$1(event) && event !== null) {
          throw new SentryError(invalidValueError);
        }
        return event;
      },
      (e) => {
        throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
      }
    );
  } else if (!isPlainObject$1(beforeSendResult) && beforeSendResult !== null) {
    throw new SentryError(invalidValueError);
  }
  return beforeSendResult;
}
function processBeforeSend(client, options, event, hint) {
  const { beforeSend, beforeSendTransaction, beforeSendSpan } = options;
  if (isErrorEvent(event) && beforeSend) {
    return beforeSend(event, hint);
  }
  if (isTransactionEvent(event)) {
    if (event.spans && beforeSendSpan) {
      const processedSpans = [];
      for (const span of event.spans) {
        const processedSpan = beforeSendSpan(span);
        if (processedSpan) {
          processedSpans.push(processedSpan);
        } else {
          showSpanDropWarning();
          client.recordDroppedEvent("before_send", "span");
        }
      }
      event.spans = processedSpans;
    }
    if (beforeSendTransaction) {
      if (event.spans) {
        const spanCountBefore = event.spans.length;
        event.sdkProcessingMetadata = {
          ...event.sdkProcessingMetadata,
          spanCountBeforeProcessing: spanCountBefore
        };
      }
      return beforeSendTransaction(event, hint);
    }
  }
  return event;
}
function isErrorEvent(event) {
  return event.type === void 0;
}
function isTransactionEvent(event) {
  return event.type === "transaction";
}
function createCheckInEnvelope(checkIn, dynamicSamplingContext, metadata, tunnel, dsn) {
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (metadata && metadata.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && !!dsn) {
    headers.dsn = dsnToString(dsn);
  }
  if (dynamicSamplingContext) {
    headers.trace = dropUndefinedKeys(dynamicSamplingContext);
  }
  const item = createCheckInEnvelopeItem(checkIn);
  return createEnvelope(headers, [item]);
}
function createCheckInEnvelopeItem(checkIn) {
  const checkInHeaders = {
    type: "check_in"
  };
  return [checkInHeaders, checkIn];
}
function parseStackFrames(stackParser, error) {
  return stackParser(error.stack || "", 1);
}
function exceptionFromError(stackParser, error) {
  const exception = {
    type: error.name || error.constructor.name,
    value: error.message
  };
  const frames = parseStackFrames(stackParser, error);
  if (frames.length) {
    exception.stacktrace = { frames };
  }
  return exception;
}
function getErrorPropertyFromObject(obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const value = obj[prop];
      if (value instanceof Error) {
        return value;
      }
    }
  }
  return void 0;
}
function getMessageForObject(exception) {
  if ("name" in exception && typeof exception.name === "string") {
    let message = `'${exception.name}' captured as exception`;
    if ("message" in exception && typeof exception.message === "string") {
      message += ` with message '${exception.message}'`;
    }
    return message;
  } else if ("message" in exception && typeof exception.message === "string") {
    return exception.message;
  }
  const keys = extractExceptionKeysForMessage(exception);
  if (isErrorEvent$1(exception)) {
    return `Event \`ErrorEvent\` captured as exception with message \`${exception.message}\``;
  }
  const className = getObjectClassName(exception);
  return `${className && className !== "Object" ? `'${className}'` : "Object"} captured as exception with keys: ${keys}`;
}
function getObjectClassName(obj) {
  try {
    const prototype = Object.getPrototypeOf(obj);
    return prototype ? prototype.constructor.name : void 0;
  } catch (e) {
  }
}
function getException(client, mechanism, exception, hint) {
  if (isError(exception)) {
    return [exception, void 0];
  }
  mechanism.synthetic = true;
  if (isPlainObject$1(exception)) {
    const normalizeDepth = client && client.getOptions().normalizeDepth;
    const extras = { ["__serialized__"]: normalizeToSize(exception, normalizeDepth) };
    const errorFromProp = getErrorPropertyFromObject(exception);
    if (errorFromProp) {
      return [errorFromProp, extras];
    }
    const message = getMessageForObject(exception);
    const ex2 = hint && hint.syntheticException || new Error(message);
    ex2.message = message;
    return [ex2, extras];
  }
  const ex = hint && hint.syntheticException || new Error(exception);
  ex.message = `${exception}`;
  return [ex, void 0];
}
function eventFromUnknownInput(client, stackParser, exception, hint) {
  const providedMechanism = hint && hint.data && hint.data.mechanism;
  const mechanism = providedMechanism || {
    handled: true,
    type: "generic"
  };
  const [ex, extras] = getException(client, mechanism, exception, hint);
  const event = {
    exception: {
      values: [exceptionFromError(stackParser, ex)]
    }
  };
  if (extras) {
    event.extra = extras;
  }
  addExceptionTypeValue(event);
  addExceptionMechanism(event, mechanism);
  return {
    ...event,
    event_id: hint && hint.event_id
  };
}
function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
  const event = {
    event_id: hint && hint.event_id,
    level
  };
  if (attachStacktrace && hint && hint.syntheticException) {
    const frames = parseStackFrames(stackParser, hint.syntheticException);
    if (frames.length) {
      event.exception = {
        values: [
          {
            value: message,
            stacktrace: { frames }
          }
        ]
      };
      addExceptionMechanism(event, { synthetic: true });
    }
  }
  if (isParameterizedString(message)) {
    const { __sentry_template_string__, __sentry_template_values__ } = message;
    event.logentry = {
      message: __sentry_template_string__,
      params: __sentry_template_values__
    };
    return event;
  }
  event.message = message;
  return event;
}
class ServerRuntimeClient extends BaseClient {
  // eslint-disable-next-line deprecation/deprecation
  /**
   * Creates a new Edge SDK instance.
   * @param options Configuration options for this SDK.
   */
  constructor(options) {
    registerSpanErrorInstrumentation();
    super(options);
  }
  /**
   * @inheritDoc
   */
  eventFromException(exception, hint) {
    const event = eventFromUnknownInput(this, this._options.stackParser, exception, hint);
    event.level = "error";
    return resolvedSyncPromise(event);
  }
  /**
   * @inheritDoc
   */
  eventFromMessage(message, level = "info", hint) {
    return resolvedSyncPromise(
      eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace)
    );
  }
  /**
   * @inheritDoc
   */
  captureException(exception, hint, scope2) {
    if (this._options.autoSessionTracking && this._sessionFlusher) {
      const requestSession = getIsolationScope().getRequestSession();
      if (requestSession && requestSession.status === "ok") {
        requestSession.status = "errored";
      }
    }
    return super.captureException(exception, hint, scope2);
  }
  /**
   * @inheritDoc
   */
  captureEvent(event, hint, scope2) {
    if (this._options.autoSessionTracking && this._sessionFlusher) {
      const eventType = event.type || "exception";
      const isException = eventType === "exception" && event.exception && event.exception.values && event.exception.values.length > 0;
      if (isException) {
        const requestSession = getIsolationScope().getRequestSession();
        if (requestSession && requestSession.status === "ok") {
          requestSession.status = "errored";
        }
      }
    }
    return super.captureEvent(event, hint, scope2);
  }
  /**
   *
   * @inheritdoc
   */
  close(timeout) {
    if (this._sessionFlusher) {
      this._sessionFlusher.close();
    }
    return super.close(timeout);
  }
  /**
   * Initializes an instance of SessionFlusher on the client which will aggregate and periodically flush session data.
   *
   * NOTICE: This method will implicitly create an interval that is periodically called.
   * To clean up this resources, call `.close()` when you no longer intend to use the client.
   * Not doing so will result in a memory leak.
   */
  initSessionFlusher() {
    const { release, environment } = this._options;
    if (!release) {
      DEBUG_BUILD$3 && logger$1.warn("Cannot initialize an instance of SessionFlusher if no release is provided!");
    } else {
      this._sessionFlusher = new SessionFlusher(this, {
        release,
        environment
      });
    }
  }
  /**
   * Create a cron monitor check in and send it to Sentry.
   *
   * @param checkIn An object that describes a check in.
   * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
   * to create a monitor automatically when sending a check in.
   */
  captureCheckIn(checkIn, monitorConfig, scope2) {
    const id = "checkInId" in checkIn && checkIn.checkInId ? checkIn.checkInId : uuid4();
    if (!this._isEnabled()) {
      DEBUG_BUILD$3 && logger$1.warn("SDK not enabled, will not capture checkin.");
      return id;
    }
    const options = this.getOptions();
    const { release, environment, tunnel } = options;
    const serializedCheckIn = {
      check_in_id: id,
      monitor_slug: checkIn.monitorSlug,
      status: checkIn.status,
      release,
      environment
    };
    if ("duration" in checkIn) {
      serializedCheckIn.duration = checkIn.duration;
    }
    if (monitorConfig) {
      serializedCheckIn.monitor_config = {
        schedule: monitorConfig.schedule,
        checkin_margin: monitorConfig.checkinMargin,
        max_runtime: monitorConfig.maxRuntime,
        timezone: monitorConfig.timezone,
        failure_issue_threshold: monitorConfig.failureIssueThreshold,
        recovery_threshold: monitorConfig.recoveryThreshold
      };
    }
    const [dynamicSamplingContext, traceContext] = this._getTraceInfoFromScope(scope2);
    if (traceContext) {
      serializedCheckIn.contexts = {
        trace: traceContext
      };
    }
    const envelope = createCheckInEnvelope(
      serializedCheckIn,
      dynamicSamplingContext,
      this.getSdkMetadata(),
      tunnel,
      this.getDsn()
    );
    DEBUG_BUILD$3 && logger$1.info("Sending checkin:", checkIn.monitorSlug, checkIn.status);
    this.sendEnvelope(envelope);
    return id;
  }
  /**
   * Method responsible for capturing/ending a request session by calling `incrementSessionStatusCount` to increment
   * appropriate session aggregates bucket
   *
   * @deprecated This method should not be used or extended. It's functionality will move into the `httpIntegration` and not be part of any public API.
   */
  _captureRequestSession() {
    if (!this._sessionFlusher) {
      DEBUG_BUILD$3 && logger$1.warn("Discarded request mode session because autoSessionTracking option was disabled");
    } else {
      this._sessionFlusher.incrementSessionStatusCount();
    }
  }
  /**
   * @inheritDoc
   */
  _prepareEvent(event, hint, scope2, isolationScope) {
    if (this._options.platform) {
      event.platform = event.platform || this._options.platform;
    }
    if (this._options.runtime) {
      event.contexts = {
        ...event.contexts,
        runtime: (event.contexts || {}).runtime || this._options.runtime
      };
    }
    if (this._options.serverName) {
      event.server_name = event.server_name || this._options.serverName;
    }
    return super._prepareEvent(event, hint, scope2, isolationScope);
  }
  /** Extract trace information from scope */
  _getTraceInfoFromScope(scope2) {
    if (!scope2) {
      return [void 0, void 0];
    }
    const span = _getSpanForScope(scope2);
    const traceContext = span ? spanToTraceContext(span) : getTraceContextFromScope(scope2);
    const dynamicSamplingContext = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(this, scope2);
    return [dynamicSamplingContext, traceContext];
  }
}
function makePromiseBuffer(limit) {
  const buffer2 = [];
  function isReady() {
    return limit === void 0 || buffer2.length < limit;
  }
  function remove(task) {
    return buffer2.splice(buffer2.indexOf(task), 1)[0] || Promise.resolve(void 0);
  }
  function add(taskProducer) {
    if (!isReady()) {
      return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
    }
    const task = taskProducer();
    if (buffer2.indexOf(task) === -1) {
      buffer2.push(task);
    }
    void task.then(() => remove(task)).then(
      null,
      () => remove(task).then(null, () => {
      })
    );
    return task;
  }
  function drain(timeout) {
    return new SyncPromise((resolve3, reject) => {
      let counter = buffer2.length;
      if (!counter) {
        return resolve3(true);
      }
      const capturedSetTimeout = setTimeout(() => {
        if (timeout && timeout > 0) {
          resolve3(false);
        }
      }, timeout);
      buffer2.forEach((item) => {
        void resolvedSyncPromise(item).then(() => {
          if (!--counter) {
            clearTimeout(capturedSetTimeout);
            resolve3(true);
          }
        }, reject);
      });
    });
  }
  return {
    $: buffer2,
    add,
    drain
  };
}
const DEFAULT_RETRY_AFTER = 60 * 1e3;
function parseRetryAfterHeader(header, now = Date.now()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1e3;
  }
  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }
  return DEFAULT_RETRY_AFTER;
}
function disabledUntil(limits, dataCategory) {
  return limits[dataCategory] || limits.all || 0;
}
function isRateLimited(limits, dataCategory, now = Date.now()) {
  return disabledUntil(limits, dataCategory) > now;
}
function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
  const updatedRateLimits = {
    ...limits
  };
  const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
  const retryAfterHeader = headers && headers["retry-after"];
  if (rateLimitHeader) {
    for (const limit of rateLimitHeader.trim().split(",")) {
      const [retryAfter, categories, , , namespaces] = limit.split(":", 5);
      const headerDelay = parseInt(retryAfter, 10);
      const delay2 = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
      if (!categories) {
        updatedRateLimits.all = now + delay2;
      } else {
        for (const category of categories.split(";")) {
          if (category === "metric_bucket") {
            if (!namespaces || namespaces.split(";").includes("custom")) {
              updatedRateLimits[category] = now + delay2;
            }
          } else {
            updatedRateLimits[category] = now + delay2;
          }
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1e3;
  }
  return updatedRateLimits;
}
const DEFAULT_TRANSPORT_BUFFER_SIZE = 64;
function createTransport(options, makeRequest, buffer2 = makePromiseBuffer(
  options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
)) {
  let rateLimits = {};
  const flush2 = (timeout) => buffer2.drain(timeout);
  function send(envelope) {
    const filteredEnvelopeItems = [];
    forEachEnvelopeItem(envelope, (item, type) => {
      const dataCategory = envelopeItemTypeToDataCategory(type);
      if (isRateLimited(rateLimits, dataCategory)) {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent("ratelimit_backoff", dataCategory, event);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });
    if (filteredEnvelopeItems.length === 0) {
      return resolvedSyncPromise({});
    }
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
    const recordEnvelopeLoss = (reason) => {
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
      });
    };
    const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope) }).then(
      (response) => {
        if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
          DEBUG_BUILD$3 && logger$1.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
        }
        rateLimits = updateRateLimits(rateLimits, response);
        return response;
      },
      (error) => {
        recordEnvelopeLoss("network_error");
        throw error;
      }
    );
    return buffer2.add(requestTask).then(
      (result) => result,
      (error) => {
        if (error instanceof SentryError) {
          DEBUG_BUILD$3 && logger$1.error("Skipped sending event because buffer is full.");
          recordEnvelopeLoss("queue_overflow");
          return resolvedSyncPromise({});
        } else {
          throw error;
        }
      }
    );
  }
  return {
    send,
    flush: flush2
  };
}
function getEventForEnvelopeItem(item, type) {
  if (type !== "event" && type !== "transaction") {
    return void 0;
  }
  return Array.isArray(item) ? item[1] : void 0;
}
const MIN_DELAY = 100;
const START_DELAY = 5e3;
const MAX_DELAY = 36e5;
function makeOfflineTransport(createTransport2) {
  function log2(...args) {
    DEBUG_BUILD$3 && logger$1.info("[Offline]:", ...args);
  }
  return (options) => {
    const transport = createTransport2(options);
    if (!options.createStore) {
      throw new Error("No `createStore` function was provided");
    }
    const store = options.createStore(options);
    let retryDelay = START_DELAY;
    let flushTimer;
    function shouldQueue(env, error, retryDelay2) {
      if (envelopeContainsItemType(env, ["client_report"])) {
        return false;
      }
      if (options.shouldStore) {
        return options.shouldStore(env, error, retryDelay2);
      }
      return true;
    }
    function flushIn(delay2) {
      if (flushTimer) {
        clearTimeout(flushTimer);
      }
      flushTimer = setTimeout(async () => {
        flushTimer = void 0;
        const found = await store.shift();
        if (found) {
          log2("Attempting to send previously queued event");
          found[0].sent_at = (/* @__PURE__ */ new Date()).toISOString();
          void send(found, true).catch((e) => {
            log2("Failed to retry sending", e);
          });
        }
      }, delay2);
      if (typeof flushTimer !== "number" && flushTimer.unref) {
        flushTimer.unref();
      }
    }
    function flushWithBackOff() {
      if (flushTimer) {
        return;
      }
      flushIn(retryDelay);
      retryDelay = Math.min(retryDelay * 2, MAX_DELAY);
    }
    async function send(envelope, isRetry = false) {
      if (!isRetry && envelopeContainsItemType(envelope, ["replay_event", "replay_recording"])) {
        await store.push(envelope);
        flushIn(MIN_DELAY);
        return {};
      }
      try {
        const result = await transport.send(envelope);
        let delay2 = MIN_DELAY;
        if (result) {
          if (result.headers && result.headers["retry-after"]) {
            delay2 = parseRetryAfterHeader(result.headers["retry-after"]);
          } else if (result.headers && result.headers["x-sentry-rate-limits"]) {
            delay2 = 6e4;
          } else if ((result.statusCode || 0) >= 400) {
            return result;
          }
        }
        flushIn(delay2);
        retryDelay = START_DELAY;
        return result;
      } catch (e) {
        if (await shouldQueue(envelope, e, retryDelay)) {
          if (isRetry) {
            await store.unshift(envelope);
          } else {
            await store.push(envelope);
          }
          flushWithBackOff();
          log2("Error sending. Event queued.", e);
          return {};
        } else {
          throw e;
        }
      }
    }
    if (options.flushAtStartup) {
      flushWithBackOff();
    }
    return {
      send,
      flush: (t2) => transport.flush(t2)
    };
  };
}
function applySdkMetadata(options, name2, names = [name2], source = "npm") {
  const metadata = options._metadata || {};
  if (!metadata.sdk) {
    metadata.sdk = {
      name: `sentry.javascript.${name2}`,
      packages: names.map((name3) => ({
        name: `${source}:@sentry/${name3}`,
        version: SDK_VERSION$1
      })),
      version: SDK_VERSION$1
    };
  }
  options._metadata = metadata;
}
function getTraceData$1(options = {}) {
  const client = getClient();
  if (!isEnabled() || !client) {
    return {};
  }
  const carrier = getMainCarrier();
  const acs = getAsyncContextStrategy(carrier);
  if (acs.getTraceData) {
    return acs.getTraceData(options);
  }
  const scope2 = getCurrentScope();
  const span = options.span || getActiveSpan$2();
  const sentryTrace = span ? spanToTraceHeader(span) : scopeToTraceHeader(scope2);
  const dsc = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope2);
  const baggage = dynamicSamplingContextToSentryBaggageHeader(dsc);
  const isValidSentryTraceHeader = TRACEPARENT_REGEXP.test(sentryTrace);
  if (!isValidSentryTraceHeader) {
    logger$1.warn("Invalid sentry-trace data. Cannot generate trace data");
    return {};
  }
  return {
    "sentry-trace": sentryTrace,
    baggage
  };
}
function scopeToTraceHeader(scope2) {
  const { traceId, sampled, spanId } = scope2.getPropagationContext();
  return generateSentryTraceHeader(traceId, spanId, sampled);
}
const DEFAULT_BREADCRUMBS = 100;
function addBreadcrumb(breadcrumb, hint) {
  const client = getClient();
  const isolationScope = getIsolationScope();
  if (!client) return;
  const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions();
  if (maxBreadcrumbs <= 0) return;
  const timestamp = dateTimestampInSeconds();
  const mergedBreadcrumb = { timestamp, ...breadcrumb };
  const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
  if (finalBreadcrumb === null) return;
  if (client.emit) {
    client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
  }
  isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}
let originalFunctionToString;
const INTEGRATION_NAME$7 = "FunctionToString";
const SETUP_CLIENTS = /* @__PURE__ */ new WeakMap();
const _functionToStringIntegration = () => {
  return {
    name: INTEGRATION_NAME$7,
    setupOnce() {
      originalFunctionToString = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...args) {
          const originalFunction = getOriginalFunction(this);
          const context2 = SETUP_CLIENTS.has(getClient()) && originalFunction !== void 0 ? originalFunction : this;
          return originalFunctionToString.apply(context2, args);
        };
      } catch (e) {
      }
    },
    setup(client) {
      SETUP_CLIENTS.set(client, true);
    }
  };
};
const functionToStringIntegration = defineIntegration(_functionToStringIntegration);
const DEFAULT_IGNORE_ERRORS = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  // The browser logs this when a ResizeObserver handler takes a bit longer. Usually this is not an actual issue though. It indicates slowness.
  /^Cannot redefine property: googletag$/,
  // This is thrown when google tag manager is used in combination with an ad blocker
  "undefined is not an object (evaluating 'a.L')",
  // Random error that happens but not actionable or noticeable to end-users.
  `can't redefine non-configurable property "solana"`,
  // Probably a browser extension or custom browser (Brave) throwing this error
  "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
  // Error thrown by GTM, seemingly not affecting end-users
  "Can't find variable: _AutofillCallbackHandler",
  // Unactionable error in instagram webview https://developers.facebook.com/community/threads/320013549791141/
  /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/
  // unactionable error from CEFSharp, a .NET library that embeds chromium in .NET apps
];
const INTEGRATION_NAME$6 = "InboundFilters";
const _inboundFiltersIntegration = (options = {}) => {
  return {
    name: INTEGRATION_NAME$6,
    processEvent(event, _hint, client) {
      const clientOptions = client.getOptions();
      const mergedOptions = _mergeOptions(options, clientOptions);
      return _shouldDropEvent(event, mergedOptions) ? null : event;
    }
  };
};
const inboundFiltersIntegration = defineIntegration(_inboundFiltersIntegration);
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
  return {
    allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
    denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
    ignoreErrors: [
      ...internalOptions.ignoreErrors || [],
      ...clientOptions.ignoreErrors || [],
      ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
    ],
    ignoreTransactions: [...internalOptions.ignoreTransactions || [], ...clientOptions.ignoreTransactions || []],
    ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
  };
}
function _shouldDropEvent(event, options) {
  if (options.ignoreInternal && _isSentryError(event)) {
    DEBUG_BUILD$3 && logger$1.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
    return true;
  }
  if (_isIgnoredError(event, options.ignoreErrors)) {
    DEBUG_BUILD$3 && logger$1.warn(
      `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
    );
    return true;
  }
  if (_isUselessError(event)) {
    DEBUG_BUILD$3 && logger$1.warn(
      `Event dropped due to not having an error message, error type or stacktrace.
Event: ${getEventDescription(
        event
      )}`
    );
    return true;
  }
  if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
    DEBUG_BUILD$3 && logger$1.warn(
      `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription(event)}`
    );
    return true;
  }
  if (_isDeniedUrl(event, options.denyUrls)) {
    DEBUG_BUILD$3 && logger$1.warn(
      `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
        event
      )}.
Url: ${_getEventFilterUrl(event)}`
    );
    return true;
  }
  if (!_isAllowedUrl(event, options.allowUrls)) {
    DEBUG_BUILD$3 && logger$1.warn(
      `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
        event
      )}.
Url: ${_getEventFilterUrl(event)}`
    );
    return true;
  }
  return false;
}
function _isIgnoredError(event, ignoreErrors) {
  if (event.type || !ignoreErrors || !ignoreErrors.length) {
    return false;
  }
  return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
function _isIgnoredTransaction(event, ignoreTransactions) {
  if (event.type !== "transaction" || !ignoreTransactions || !ignoreTransactions.length) {
    return false;
  }
  const name2 = event.transaction;
  return name2 ? stringMatchesSomePattern(name2, ignoreTransactions) : false;
}
function _isDeniedUrl(event, denyUrls) {
  if (!denyUrls || !denyUrls.length) {
    return false;
  }
  const url2 = _getEventFilterUrl(event);
  return !url2 ? false : stringMatchesSomePattern(url2, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
  if (!allowUrls || !allowUrls.length) {
    return true;
  }
  const url2 = _getEventFilterUrl(event);
  return !url2 ? true : stringMatchesSomePattern(url2, allowUrls);
}
function _getPossibleEventMessages(event) {
  const possibleMessages = [];
  if (event.message) {
    possibleMessages.push(event.message);
  }
  let lastException;
  try {
    lastException = event.exception.values[event.exception.values.length - 1];
  } catch (e) {
  }
  if (lastException) {
    if (lastException.value) {
      possibleMessages.push(lastException.value);
      if (lastException.type) {
        possibleMessages.push(`${lastException.type}: ${lastException.value}`);
      }
    }
  }
  return possibleMessages;
}
function _isSentryError(event) {
  try {
    return event.exception.values[0].type === "SentryError";
  } catch (e) {
  }
  return false;
}
function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];
    if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
      return frame.filename || null;
    }
  }
  return null;
}
function _getEventFilterUrl(event) {
  try {
    let frames;
    try {
      frames = event.exception.values[0].stacktrace.frames;
    } catch (e) {
    }
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    DEBUG_BUILD$3 && logger$1.error(`Cannot extract url for event ${getEventDescription(event)}`);
    return null;
  }
}
function _isUselessError(event) {
  if (event.type) {
    return false;
  }
  if (!event.exception || !event.exception.values || event.exception.values.length === 0) {
    return false;
  }
  return (
    // No top-level message
    !event.message && // There are no exception values that have a stacktrace, a non-generic-Error type or value
    !event.exception.values.some((value) => value.stacktrace || value.type && value.type !== "Error" || value.value)
  );
}
function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, maxValueLimit = 250, key, limit, event, hint) {
  if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
    return;
  }
  const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
  if (originalException) {
    event.exception.values = truncateAggregateExceptions(
      aggregateExceptionsFromError(
        exceptionFromErrorImplementation,
        parser,
        limit,
        hint.originalException,
        key,
        event.exception.values,
        originalException,
        0
      ),
      maxValueLimit
    );
  }
}
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
  if (prevExceptions.length >= limit + 1) {
    return prevExceptions;
  }
  let newExceptions = [...prevExceptions];
  if (isInstanceOf(error[key], Error)) {
    applyExceptionGroupFieldsForParentException(exception, exceptionId);
    const newException = exceptionFromErrorImplementation(parser, error[key]);
    const newExceptionId = newExceptions.length;
    applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
    newExceptions = aggregateExceptionsFromError(
      exceptionFromErrorImplementation,
      parser,
      limit,
      error[key],
      key,
      [newException, ...newExceptions],
      newException,
      newExceptionId
    );
  }
  if (Array.isArray(error.errors)) {
    error.errors.forEach((childError, i) => {
      if (isInstanceOf(childError, Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId);
        const newException = exceptionFromErrorImplementation(parser, childError);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          childError,
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId
        );
      }
    });
  }
  return newExceptions;
}
function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
  exception.mechanism = exception.mechanism || { type: "generic", handled: true };
  exception.mechanism = {
    ...exception.mechanism,
    ...exception.type === "AggregateError" && { is_exception_group: true },
    exception_id: exceptionId
  };
}
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
  exception.mechanism = exception.mechanism || { type: "generic", handled: true };
  exception.mechanism = {
    ...exception.mechanism,
    type: "chained",
    source,
    exception_id: exceptionId,
    parent_id: parentId
  };
}
function truncateAggregateExceptions(exceptions, maxValueLength) {
  return exceptions.map((exception) => {
    if (exception.value) {
      exception.value = truncate(exception.value, maxValueLength);
    }
    return exception;
  });
}
const DEFAULT_KEY = "cause";
const DEFAULT_LIMIT = 5;
const INTEGRATION_NAME$5 = "LinkedErrors";
const _linkedErrorsIntegration = (options = {}) => {
  const limit = options.limit || DEFAULT_LIMIT;
  const key = options.key || DEFAULT_KEY;
  return {
    name: INTEGRATION_NAME$5,
    preprocessEvent(event, hint, client) {
      const options2 = client.getOptions();
      applyAggregateErrorsToEvent(
        exceptionFromError,
        options2.stackParser,
        options2.maxValueLength,
        key,
        limit,
        event,
        hint
      );
    }
  };
};
const linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);
function parseUrl(url2) {
  if (!url2) {
    return {};
  }
  const match = url2.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || "";
  const fragment = match[8] || "";
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    search: query,
    hash: fragment,
    relative: match[5] + query + fragment
    // everything minus origin
  };
}
function stripUrlQueryAndFragment(urlPath) {
  return urlPath.split(/[?#]/, 1)[0];
}
function getSanitizedUrlString(url2) {
  const { protocol, host, path: path2 } = url2;
  const filteredHost = host && host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "") || "";
  return `${protocol ? `${protocol}://` : ""}${filteredHost}${path2}`;
}
function addConsoleInstrumentationHandler(handler) {
  const type = "console";
  addHandler(type, handler);
  maybeInstrument(type, instrumentConsole);
}
function instrumentConsole() {
  if (!("console" in GLOBAL_OBJ)) {
    return;
  }
  CONSOLE_LEVELS.forEach(function(level) {
    if (!(level in GLOBAL_OBJ.console)) {
      return;
    }
    fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
      originalConsoleMethods[level] = originalConsoleMethod;
      return function(...args) {
        const handlerData = { args, level };
        triggerHandlers("console", handlerData);
        const log2 = originalConsoleMethods[level];
        log2 && log2.apply(GLOBAL_OBJ.console, args);
      };
    });
  });
}
function severityLevelFromString(level) {
  return level === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(level) ? level : "log";
}
const splitPathRe = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function splitPath(filename) {
  const truncated = filename.length > 1024 ? `<truncated>${filename.slice(-1024)}` : filename;
  const parts = splitPathRe.exec(truncated);
  return parts ? parts.slice(1) : [];
}
function dirname(path2) {
  const result = splitPath(path2);
  const root = result[0] || "";
  let dir = result[1];
  if (!root && !dir) {
    return ".";
  }
  if (dir) {
    dir = dir.slice(0, dir.length - 1);
  }
  return root + dir;
}
function basename(path2, ext) {
  let f = splitPath(path2)[2] || "";
  return f;
}
const COUNTER_METRIC_TYPE = "c";
const GAUGE_METRIC_TYPE = "g";
const SET_METRIC_TYPE = "s";
const DISTRIBUTION_METRIC_TYPE = "d";
const DEFAULT_FLUSH_INTERVAL = 1e4;
const MAX_WEIGHT = 1e4;
function getMetricsAggregatorForClient$1(client, Aggregator) {
  const globalMetricsAggregators = getGlobalSingleton(
    "globalMetricsAggregators",
    () => /* @__PURE__ */ new WeakMap()
  );
  const aggregator = globalMetricsAggregators.get(client);
  if (aggregator) {
    return aggregator;
  }
  const newAggregator = new Aggregator(client);
  client.on("flush", () => newAggregator.flush());
  client.on("close", () => newAggregator.close());
  globalMetricsAggregators.set(client, newAggregator);
  return newAggregator;
}
function addToMetricsAggregator(Aggregator, metricType, name2, value, data2 = {}) {
  const client = data2.client || getClient();
  if (!client) {
    return;
  }
  const span = getActiveSpan$2();
  const rootSpan = span ? getRootSpan(span) : void 0;
  const transactionName = rootSpan && spanToJSON(rootSpan).description;
  const { unit, tags, timestamp } = data2;
  const { release, environment } = client.getOptions();
  const metricTags = {};
  if (release) {
    metricTags.release = release;
  }
  if (environment) {
    metricTags.environment = environment;
  }
  if (transactionName) {
    metricTags.transaction = transactionName;
  }
  DEBUG_BUILD$3 && logger$1.log(`Adding value of ${value} to ${metricType} metric ${name2}`);
  const aggregator = getMetricsAggregatorForClient$1(client, Aggregator);
  aggregator.add(metricType, name2, value, unit, { ...metricTags, ...tags }, timestamp);
}
function increment$1(aggregator, name2, value = 1, data2) {
  addToMetricsAggregator(aggregator, COUNTER_METRIC_TYPE, name2, ensureNumber(value), data2);
}
function distribution$1(aggregator, name2, value, data2) {
  addToMetricsAggregator(aggregator, DISTRIBUTION_METRIC_TYPE, name2, ensureNumber(value), data2);
}
function timing$1(aggregator, name2, value, unit = "second", data2) {
  if (typeof value === "function") {
    const startTime = timestampInSeconds();
    return startSpanManual$1(
      {
        op: "metrics.timing",
        name: name2,
        startTime,
        onlyIfParent: true
      },
      (span) => {
        return handleCallbackErrors(
          () => value(),
          () => {
          },
          () => {
            const endTime = timestampInSeconds();
            const timeDiff = endTime - startTime;
            distribution$1(aggregator, name2, timeDiff, { ...data2, unit: "second" });
            span.end(endTime);
          }
        );
      }
    );
  }
  distribution$1(aggregator, name2, value, { ...data2, unit });
}
function set$1(aggregator, name2, value, data2) {
  addToMetricsAggregator(aggregator, SET_METRIC_TYPE, name2, value, data2);
}
function gauge$1(aggregator, name2, value, data2) {
  addToMetricsAggregator(aggregator, GAUGE_METRIC_TYPE, name2, ensureNumber(value), data2);
}
const metrics$1 = {
  increment: increment$1,
  distribution: distribution$1,
  set: set$1,
  gauge: gauge$1,
  timing: timing$1,
  /**
   * @ignore This is for internal use only.
   */
  getMetricsAggregatorForClient: getMetricsAggregatorForClient$1
};
function ensureNumber(number) {
  return typeof number === "string" ? parseInt(number) : number;
}
function getBucketKey(metricType, name2, unit, tags) {
  const stringifiedTags = Object.entries(dropUndefinedKeys(tags)).sort((a, b) => a[0].localeCompare(b[0]));
  return `${metricType}${name2}${unit}${stringifiedTags}`;
}
function simpleHash(s) {
  let rv = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    rv = (rv << 5) - rv + c;
    rv &= rv;
  }
  return rv >>> 0;
}
function serializeMetricBuckets(metricBucketItems) {
  let out = "";
  for (const item of metricBucketItems) {
    const tagEntries = Object.entries(item.tags);
    const maybeTags = tagEntries.length > 0 ? `|#${tagEntries.map(([key, value]) => `${key}:${value}`).join(",")}` : "";
    out += `${item.name}@${item.unit}:${item.metric}|${item.metricType}${maybeTags}|T${item.timestamp}
`;
  }
  return out;
}
function sanitizeUnit(unit) {
  return unit.replace(/[^\w]+/gi, "_");
}
function sanitizeMetricKey(key) {
  return key.replace(/[^\w\-.]+/gi, "_");
}
function sanitizeTagKey(key) {
  return key.replace(/[^\w\-./]+/gi, "");
}
const tagValueReplacements = [
  ["\n", "\\n"],
  ["\r", "\\r"],
  ["	", "\\t"],
  ["\\", "\\\\"],
  ["|", "\\u{7c}"],
  [",", "\\u{2c}"]
];
function getCharOrReplacement(input) {
  for (const [search, replacement] of tagValueReplacements) {
    if (input === search) {
      return replacement;
    }
  }
  return input;
}
function sanitizeTagValue(value) {
  return [...value].reduce((acc, char) => acc + getCharOrReplacement(char), "");
}
function sanitizeTags(unsanitizedTags) {
  const tags = {};
  for (const key in unsanitizedTags) {
    if (Object.prototype.hasOwnProperty.call(unsanitizedTags, key)) {
      const sanitizedKey = sanitizeTagKey(key);
      tags[sanitizedKey] = sanitizeTagValue(String(unsanitizedTags[key]));
    }
  }
  return tags;
}
function captureAggregateMetrics(client, metricBucketItems) {
  logger$1.log(`Flushing aggregated metrics, number of metrics: ${metricBucketItems.length}`);
  const dsn = client.getDsn();
  const metadata = client.getSdkMetadata();
  const tunnel = client.getOptions().tunnel;
  const metricsEnvelope = createMetricEnvelope(metricBucketItems, dsn, metadata, tunnel);
  client.sendEnvelope(metricsEnvelope);
}
function createMetricEnvelope(metricBucketItems, dsn, metadata, tunnel) {
  const headers = {
    sent_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  if (metadata && metadata.sdk) {
    headers.sdk = {
      name: metadata.sdk.name,
      version: metadata.sdk.version
    };
  }
  if (!!tunnel && dsn) {
    headers.dsn = dsnToString(dsn);
  }
  const item = createMetricEnvelopeItem(metricBucketItems);
  return createEnvelope(headers, [item]);
}
function createMetricEnvelopeItem(metricBucketItems) {
  const payload = serializeMetricBuckets(metricBucketItems);
  const metricHeaders = {
    type: "statsd",
    length: payload.length
  };
  return [metricHeaders, payload];
}
class CounterMetric {
  constructor(_value) {
    this._value = _value;
  }
  /** @inheritDoc */
  get weight() {
    return 1;
  }
  /** @inheritdoc */
  add(value) {
    this._value += value;
  }
  /** @inheritdoc */
  toString() {
    return `${this._value}`;
  }
}
class GaugeMetric {
  constructor(value) {
    this._last = value;
    this._min = value;
    this._max = value;
    this._sum = value;
    this._count = 1;
  }
  /** @inheritDoc */
  get weight() {
    return 5;
  }
  /** @inheritdoc */
  add(value) {
    this._last = value;
    if (value < this._min) {
      this._min = value;
    }
    if (value > this._max) {
      this._max = value;
    }
    this._sum += value;
    this._count++;
  }
  /** @inheritdoc */
  toString() {
    return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
  }
}
class DistributionMetric {
  constructor(first) {
    this._value = [first];
  }
  /** @inheritDoc */
  get weight() {
    return this._value.length;
  }
  /** @inheritdoc */
  add(value) {
    this._value.push(value);
  }
  /** @inheritdoc */
  toString() {
    return this._value.join(":");
  }
}
class SetMetric {
  constructor(first) {
    this.first = first;
    this._value = /* @__PURE__ */ new Set([first]);
  }
  /** @inheritDoc */
  get weight() {
    return this._value.size;
  }
  /** @inheritdoc */
  add(value) {
    this._value.add(value);
  }
  /** @inheritdoc */
  toString() {
    return Array.from(this._value).map((val) => typeof val === "string" ? simpleHash(val) : val).join(":");
  }
}
const METRIC_MAP = {
  [COUNTER_METRIC_TYPE]: CounterMetric,
  [GAUGE_METRIC_TYPE]: GaugeMetric,
  [DISTRIBUTION_METRIC_TYPE]: DistributionMetric,
  [SET_METRIC_TYPE]: SetMetric
};
class MetricsAggregator {
  // TODO(@anonrig): Use FinalizationRegistry to have a proper way of flushing the buckets
  // when the aggregator is garbage collected.
  // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
  // Different metrics have different weights. We use this to limit the number of metrics
  // that we store in memory.
  // We adjust the type here to add the `unref()` part, as setInterval can technically return a number or a NodeJS.Timer
  // SDKs are required to shift the flush interval by random() * rollup_in_seconds.
  // That shift is determined once per startup to create jittering.
  // An SDK is required to perform force flushing ahead of scheduled time if the memory
  // pressure is too high. There is no rule for this other than that SDKs should be tracking
  // abstract aggregation complexity (eg: a counter only carries a single float, whereas a
  // distribution is a float per emission).
  //
  // Force flush is used on either shutdown, flush() or when we exceed the max weight.
  constructor(_client) {
    this._client = _client;
    this._buckets = /* @__PURE__ */ new Map();
    this._bucketsTotalWeight = 0;
    this._interval = setInterval(() => this._flush(), DEFAULT_FLUSH_INTERVAL);
    if (this._interval.unref) {
      this._interval.unref();
    }
    this._flushShift = Math.floor(Math.random() * DEFAULT_FLUSH_INTERVAL / 1e3);
    this._forceFlush = false;
  }
  /**
   * @inheritDoc
   */
  add(metricType, unsanitizedName, value, unsanitizedUnit = "none", unsanitizedTags = {}, maybeFloatTimestamp = timestampInSeconds()) {
    const timestamp = Math.floor(maybeFloatTimestamp);
    const name2 = sanitizeMetricKey(unsanitizedName);
    const tags = sanitizeTags(unsanitizedTags);
    const unit = sanitizeUnit(unsanitizedUnit);
    const bucketKey = getBucketKey(metricType, name2, unit, tags);
    let bucketItem = this._buckets.get(bucketKey);
    const previousWeight = bucketItem && metricType === SET_METRIC_TYPE ? bucketItem.metric.weight : 0;
    if (bucketItem) {
      bucketItem.metric.add(value);
      if (bucketItem.timestamp < timestamp) {
        bucketItem.timestamp = timestamp;
      }
    } else {
      bucketItem = {
        // @ts-expect-error we don't need to narrow down the type of value here, saves bundle size.
        metric: new METRIC_MAP[metricType](value),
        timestamp,
        metricType,
        name: name2,
        unit,
        tags
      };
      this._buckets.set(bucketKey, bucketItem);
    }
    const val = typeof value === "string" ? bucketItem.metric.weight - previousWeight : value;
    updateMetricSummaryOnActiveSpan(metricType, name2, val, unit, unsanitizedTags, bucketKey);
    this._bucketsTotalWeight += bucketItem.metric.weight;
    if (this._bucketsTotalWeight >= MAX_WEIGHT) {
      this.flush();
    }
  }
  /**
   * Flushes the current metrics to the transport via the transport.
   */
  flush() {
    this._forceFlush = true;
    this._flush();
  }
  /**
   * Shuts down metrics aggregator and clears all metrics.
   */
  close() {
    this._forceFlush = true;
    clearInterval(this._interval);
    this._flush();
  }
  /**
   * Flushes the buckets according to the internal state of the aggregator.
   * If it is a force flush, which happens on shutdown, it will flush all buckets.
   * Otherwise, it will only flush buckets that are older than the flush interval,
   * and according to the flush shift.
   *
   * This function mutates `_forceFlush` and `_bucketsTotalWeight` properties.
   */
  _flush() {
    if (this._forceFlush) {
      this._forceFlush = false;
      this._bucketsTotalWeight = 0;
      this._captureMetrics(this._buckets);
      this._buckets.clear();
      return;
    }
    const cutoffSeconds = Math.floor(timestampInSeconds()) - DEFAULT_FLUSH_INTERVAL / 1e3 - this._flushShift;
    const flushedBuckets = /* @__PURE__ */ new Map();
    for (const [key, bucket] of this._buckets) {
      if (bucket.timestamp <= cutoffSeconds) {
        flushedBuckets.set(key, bucket);
        this._bucketsTotalWeight -= bucket.metric.weight;
      }
    }
    for (const [key] of flushedBuckets) {
      this._buckets.delete(key);
    }
    this._captureMetrics(flushedBuckets);
  }
  /**
   * Only captures a subset of the buckets passed to this function.
   * @param flushedBuckets
   */
  _captureMetrics(flushedBuckets) {
    if (flushedBuckets.size > 0) {
      const buckets = Array.from(flushedBuckets).map(([, bucketItem]) => bucketItem);
      captureAggregateMetrics(this._client, buckets);
    }
  }
}
function increment(name2, value = 1, data2) {
  metrics$1.increment(MetricsAggregator, name2, value, data2);
}
function distribution(name2, value, data2) {
  metrics$1.distribution(MetricsAggregator, name2, value, data2);
}
function set(name2, value, data2) {
  metrics$1.set(MetricsAggregator, name2, value, data2);
}
function gauge(name2, value, data2) {
  metrics$1.gauge(MetricsAggregator, name2, value, data2);
}
function timing(name2, value, unit = "second", data2) {
  return metrics$1.timing(MetricsAggregator, name2, value, unit, data2);
}
function getMetricsAggregatorForClient(client) {
  return metrics$1.getMetricsAggregatorForClient(client, MetricsAggregator);
}
const metricsDefault = {
  increment,
  distribution,
  set,
  gauge,
  timing,
  /**
   * @ignore This is for internal use only.
   */
  getMetricsAggregatorForClient
};
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
  if (statusCode === void 0) {
    return void 0;
  } else if (statusCode >= 400 && statusCode < 500) {
    return "warning";
  } else if (statusCode >= 500) {
    return "error";
  } else {
    return void 0;
  }
}
function filenameIsInApp(filename, isNative = false) {
  const isInternal = isNative || filename && // It's not internal if it's an absolute linux path
  !filename.startsWith("/") && // It's not internal if it's an absolute windows path
  !filename.match(/^[A-Z]:/) && // It's not internal if the path is starting with a dot
  !filename.startsWith(".") && // It's not internal if the frame has a protocol. In node, this is usually the case if the file got pre-processed with a bundler like webpack
  !filename.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
  return !isInternal && filename !== void 0 && !filename.includes("node_modules/");
}
function node$1(getModule) {
  const FILENAME_MATCH = /^\s*[-]{4,}$/;
  const FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  return (line) => {
    const lineMatch = line.match(FULL_MATCH);
    if (lineMatch) {
      let object2;
      let method;
      let functionName;
      let typeName;
      let methodName;
      if (lineMatch[1]) {
        functionName = lineMatch[1];
        let methodStart = functionName.lastIndexOf(".");
        if (functionName[methodStart - 1] === ".") {
          methodStart--;
        }
        if (methodStart > 0) {
          object2 = functionName.slice(0, methodStart);
          method = functionName.slice(methodStart + 1);
          const objectEnd = object2.indexOf(".Module");
          if (objectEnd > 0) {
            functionName = functionName.slice(objectEnd + 1);
            object2 = object2.slice(0, objectEnd);
          }
        }
        typeName = void 0;
      }
      if (method) {
        typeName = object2;
        methodName = method;
      }
      if (method === "<anonymous>") {
        methodName = void 0;
        functionName = void 0;
      }
      if (functionName === void 0) {
        methodName = methodName || UNKNOWN_FUNCTION;
        functionName = typeName ? `${typeName}.${methodName}` : methodName;
      }
      let filename = lineMatch[2] && lineMatch[2].startsWith("file://") ? lineMatch[2].slice(7) : lineMatch[2];
      const isNative = lineMatch[5] === "native";
      if (filename && filename.match(/\/[A-Z]:/)) {
        filename = filename.slice(1);
      }
      if (!filename && lineMatch[5] && !isNative) {
        filename = lineMatch[5];
      }
      return {
        filename: filename ? decodeURI(filename) : void 0,
        module: getModule ? getModule(filename) : void 0,
        function: functionName,
        lineno: _parseIntOrUndefined(lineMatch[3]),
        colno: _parseIntOrUndefined(lineMatch[4]),
        in_app: filenameIsInApp(filename || "", isNative)
      };
    }
    if (line.match(FILENAME_MATCH)) {
      return {
        filename: line
      };
    }
    return void 0;
  };
}
function nodeStackLineParser(getModule) {
  return [90, node$1(getModule)];
}
function _parseIntOrUndefined(input) {
  return parseInt(input || "", 10) || void 0;
}
function watchdogTimer(createTimer, pollInterval, anrThreshold, callback) {
  const timer = createTimer();
  let triggered = false;
  let enabled = true;
  setInterval(() => {
    const diffMs = timer.getTimeMs();
    if (triggered === false && diffMs > pollInterval + anrThreshold) {
      triggered = true;
      if (enabled) {
        callback();
      }
    }
    if (diffMs < pollInterval + anrThreshold) {
      triggered = false;
    }
  }, 20);
  return {
    poll: () => {
      timer.reset();
    },
    enabled: (state) => {
      enabled = state;
    }
  };
}
function callFrameToStackFrame(frame, url2, getModuleFromFilename) {
  const filename = url2 ? url2.replace(/^file:\/\//, "") : void 0;
  const colno = frame.location.columnNumber ? frame.location.columnNumber + 1 : void 0;
  const lineno = frame.location.lineNumber ? frame.location.lineNumber + 1 : void 0;
  return dropUndefinedKeys({
    filename,
    module: getModuleFromFilename(filename),
    function: frame.functionName || UNKNOWN_FUNCTION,
    colno,
    lineno,
    in_app: filename ? filenameIsInApp(filename) : void 0
  });
}
class LRUMap {
  constructor(_maxSize) {
    this._maxSize = _maxSize;
    this._cache = /* @__PURE__ */ new Map();
  }
  /** Get the current size of the cache */
  get size() {
    return this._cache.size;
  }
  /** Get an entry or undefined if it was not in the cache. Re-inserts to update the recently used order */
  get(key) {
    const value = this._cache.get(key);
    if (value === void 0) {
      return void 0;
    }
    this._cache.delete(key);
    this._cache.set(key, value);
    return value;
  }
  /** Insert an entry and evict an older entry if we've reached maxSize */
  set(key, value) {
    if (this._cache.size >= this._maxSize) {
      this._cache.delete(this._cache.keys().next().value);
    }
    this._cache.set(key, value);
  }
  /** Remove an entry and return the entry if it was in the cache */
  remove(key) {
    const value = this._cache.get(key);
    if (value) {
      this._cache.delete(key);
    }
    return value;
  }
  /** Clear all entries */
  clear() {
    this._cache.clear();
  }
  /** Get all the keys */
  keys() {
    return Array.from(this._cache.keys());
  }
  /** Get all the values */
  values() {
    const values = [];
    this._cache.forEach((value) => values.push(value));
    return values;
  }
}
function _nullishCoalesce(lhs, rhsFn) {
  return lhs != null ? lhs : rhsFn();
}
function _optionalChain(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
var _globalThis$2 = typeof globalThis === "object" ? globalThis : global;
var VERSION$2 = "1.9.0";
var re$3 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
  var acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
  var rejectedVersions = /* @__PURE__ */ new Set();
  var myVersionMatch = ownVersion.match(re$3);
  if (!myVersionMatch) {
    return function() {
      return false;
    };
  }
  var ownVersionParsed = {
    major: +myVersionMatch[1],
    minor: +myVersionMatch[2],
    patch: +myVersionMatch[3],
    prerelease: myVersionMatch[4]
  };
  if (ownVersionParsed.prerelease != null) {
    return function isExactmatch(globalVersion) {
      return globalVersion === ownVersion;
    };
  }
  function _reject(v) {
    rejectedVersions.add(v);
    return false;
  }
  function _accept(v) {
    acceptedVersions.add(v);
    return true;
  }
  return function isCompatible2(globalVersion) {
    if (acceptedVersions.has(globalVersion)) {
      return true;
    }
    if (rejectedVersions.has(globalVersion)) {
      return false;
    }
    var globalVersionMatch = globalVersion.match(re$3);
    if (!globalVersionMatch) {
      return _reject(globalVersion);
    }
    var globalVersionParsed = {
      major: +globalVersionMatch[1],
      minor: +globalVersionMatch[2],
      patch: +globalVersionMatch[3],
      prerelease: globalVersionMatch[4]
    };
    if (globalVersionParsed.prerelease != null) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major !== globalVersionParsed.major) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major === 0) {
      if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
        return _accept(globalVersion);
      }
      return _reject(globalVersion);
    }
    if (ownVersionParsed.minor <= globalVersionParsed.minor) {
      return _accept(globalVersion);
    }
    return _reject(globalVersion);
  };
}
var isCompatible = _makeCompatibilityCheck(VERSION$2);
var major$2 = VERSION$2.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major$2);
var _global$1 = _globalThis$2;
function registerGlobal(type, instance2, diag2, allowOverride) {
  var _a3;
  if (allowOverride === void 0) {
    allowOverride = false;
  }
  var api = _global$1[GLOBAL_OPENTELEMETRY_API_KEY] = (_a3 = _global$1[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a3 !== void 0 ? _a3 : {
    version: VERSION$2
  };
  if (!allowOverride && api[type]) {
    var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
    diag2.error(err.stack || err.message);
    return false;
  }
  if (api.version !== VERSION$2) {
    var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + VERSION$2);
    diag2.error(err.stack || err.message);
    return false;
  }
  api[type] = instance2;
  diag2.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION$2 + ".");
  return true;
}
function getGlobal(type) {
  var _a3, _b2;
  var globalVersion = (_a3 = _global$1[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a3 === void 0 ? void 0 : _a3.version;
  if (!globalVersion || !isCompatible(globalVersion)) {
    return;
  }
  return (_b2 = _global$1[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b2 === void 0 ? void 0 : _b2[type];
}
function unregisterGlobal(type, diag2) {
  diag2.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION$2 + ".");
  var api = _global$1[GLOBAL_OPENTELEMETRY_API_KEY];
  if (api) {
    delete api[type];
  }
}
var __read$b = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray$7 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var DiagComponentLogger = (
  /** @class */
  function() {
    function DiagComponentLogger2(props) {
      this._namespace = props.namespace || "DiagComponentLogger";
    }
    DiagComponentLogger2.prototype.debug = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("debug", this._namespace, args);
    };
    DiagComponentLogger2.prototype.error = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("error", this._namespace, args);
    };
    DiagComponentLogger2.prototype.info = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("info", this._namespace, args);
    };
    DiagComponentLogger2.prototype.warn = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("warn", this._namespace, args);
    };
    DiagComponentLogger2.prototype.verbose = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return logProxy("verbose", this._namespace, args);
    };
    return DiagComponentLogger2;
  }()
);
function logProxy(funcName, namespace, args) {
  var logger2 = getGlobal("diag");
  if (!logger2) {
    return;
  }
  args.unshift(namespace);
  return logger2[funcName].apply(logger2, __spreadArray$7([], __read$b(args), false));
}
var DiagLogLevel;
(function(DiagLogLevel2) {
  DiagLogLevel2[DiagLogLevel2["NONE"] = 0] = "NONE";
  DiagLogLevel2[DiagLogLevel2["ERROR"] = 30] = "ERROR";
  DiagLogLevel2[DiagLogLevel2["WARN"] = 50] = "WARN";
  DiagLogLevel2[DiagLogLevel2["INFO"] = 60] = "INFO";
  DiagLogLevel2[DiagLogLevel2["DEBUG"] = 70] = "DEBUG";
  DiagLogLevel2[DiagLogLevel2["VERBOSE"] = 80] = "VERBOSE";
  DiagLogLevel2[DiagLogLevel2["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
function createLogLevelDiagLogger(maxLevel, logger2) {
  if (maxLevel < DiagLogLevel.NONE) {
    maxLevel = DiagLogLevel.NONE;
  } else if (maxLevel > DiagLogLevel.ALL) {
    maxLevel = DiagLogLevel.ALL;
  }
  logger2 = logger2 || {};
  function _filterFunc(funcName, theLevel) {
    var theFunc = logger2[funcName];
    if (typeof theFunc === "function" && maxLevel >= theLevel) {
      return theFunc.bind(logger2);
    }
    return function() {
    };
  }
  return {
    error: _filterFunc("error", DiagLogLevel.ERROR),
    warn: _filterFunc("warn", DiagLogLevel.WARN),
    info: _filterFunc("info", DiagLogLevel.INFO),
    debug: _filterFunc("debug", DiagLogLevel.DEBUG),
    verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
  };
}
var __read$a = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray$6 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME$4 = "diag";
var DiagAPI = (
  /** @class */
  function() {
    function DiagAPI2() {
      function _logProxy(funcName) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var logger2 = getGlobal("diag");
          if (!logger2)
            return;
          return logger2[funcName].apply(logger2, __spreadArray$6([], __read$a(args), false));
        };
      }
      var self2 = this;
      var setLogger = function(logger2, optionsOrLogLevel) {
        var _a3, _b2, _c2;
        if (optionsOrLogLevel === void 0) {
          optionsOrLogLevel = { logLevel: DiagLogLevel.INFO };
        }
        if (logger2 === self2) {
          var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          self2.error((_a3 = err.stack) !== null && _a3 !== void 0 ? _a3 : err.message);
          return false;
        }
        if (typeof optionsOrLogLevel === "number") {
          optionsOrLogLevel = {
            logLevel: optionsOrLogLevel
          };
        }
        var oldLogger = getGlobal("diag");
        var newLogger = createLogLevelDiagLogger((_b2 = optionsOrLogLevel.logLevel) !== null && _b2 !== void 0 ? _b2 : DiagLogLevel.INFO, logger2);
        if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
          var stack = (_c2 = new Error().stack) !== null && _c2 !== void 0 ? _c2 : "<failed to generate stacktrace>";
          oldLogger.warn("Current logger will be overwritten from " + stack);
          newLogger.warn("Current logger will overwrite one already registered from " + stack);
        }
        return registerGlobal("diag", newLogger, self2, true);
      };
      self2.setLogger = setLogger;
      self2.disable = function() {
        unregisterGlobal(API_NAME$4, self2);
      };
      self2.createComponentLogger = function(options) {
        return new DiagComponentLogger(options);
      };
      self2.verbose = _logProxy("verbose");
      self2.debug = _logProxy("debug");
      self2.info = _logProxy("info");
      self2.warn = _logProxy("warn");
      self2.error = _logProxy("error");
    }
    DiagAPI2.instance = function() {
      if (!this._instance) {
        this._instance = new DiagAPI2();
      }
      return this._instance;
    };
    return DiagAPI2;
  }()
);
var __read$9 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __values$8 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BaggageImpl = (
  /** @class */
  function() {
    function BaggageImpl2(entries) {
      this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
    }
    BaggageImpl2.prototype.getEntry = function(key) {
      var entry = this._entries.get(key);
      if (!entry) {
        return void 0;
      }
      return Object.assign({}, entry);
    };
    BaggageImpl2.prototype.getAllEntries = function() {
      return Array.from(this._entries.entries()).map(function(_a3) {
        var _b2 = __read$9(_a3, 2), k = _b2[0], v = _b2[1];
        return [k, v];
      });
    };
    BaggageImpl2.prototype.setEntry = function(key, entry) {
      var newBaggage = new BaggageImpl2(this._entries);
      newBaggage._entries.set(key, entry);
      return newBaggage;
    };
    BaggageImpl2.prototype.removeEntry = function(key) {
      var newBaggage = new BaggageImpl2(this._entries);
      newBaggage._entries.delete(key);
      return newBaggage;
    };
    BaggageImpl2.prototype.removeEntries = function() {
      var e_1, _a3;
      var keys = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
      }
      var newBaggage = new BaggageImpl2(this._entries);
      try {
        for (var keys_1 = __values$8(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
          var key = keys_1_1.value;
          newBaggage._entries.delete(key);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (keys_1_1 && !keys_1_1.done && (_a3 = keys_1.return)) _a3.call(keys_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return newBaggage;
    };
    BaggageImpl2.prototype.clear = function() {
      return new BaggageImpl2();
    };
    return BaggageImpl2;
  }()
);
var baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
var diag$1 = DiagAPI.instance();
function createBaggage(entries) {
  if (entries === void 0) {
    entries = {};
  }
  return new BaggageImpl(new Map(Object.entries(entries)));
}
function baggageEntryMetadataFromString(str) {
  if (typeof str !== "string") {
    diag$1.error("Cannot create baggage metadata from unknown type: " + typeof str);
    str = "";
  }
  return {
    __TYPE__: baggageEntryMetadataSymbol,
    toString: function() {
      return str;
    }
  };
}
function createContextKey(description2) {
  return Symbol.for(description2);
}
var BaseContext = (
  /** @class */
  /* @__PURE__ */ function() {
    function BaseContext2(parentContext) {
      var self2 = this;
      self2._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
      self2.getValue = function(key) {
        return self2._currentContext.get(key);
      };
      self2.setValue = function(key, value) {
        var context2 = new BaseContext2(self2._currentContext);
        context2._currentContext.set(key, value);
        return context2;
      };
      self2.deleteValue = function(key) {
        var context2 = new BaseContext2(self2._currentContext);
        context2._currentContext.delete(key);
        return context2;
      };
    }
    return BaseContext2;
  }()
);
var ROOT_CONTEXT = new BaseContext();
var consoleMap = [
  { n: "error", c: "error" },
  { n: "warn", c: "warn" },
  { n: "info", c: "info" },
  { n: "debug", c: "debug" },
  { n: "verbose", c: "trace" }
];
var DiagConsoleLogger = (
  /** @class */
  /* @__PURE__ */ function() {
    function DiagConsoleLogger2() {
      function _consoleFunc(funcName) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (console) {
            var theFunc = console[funcName];
            if (typeof theFunc !== "function") {
              theFunc = console.log;
            }
            if (typeof theFunc === "function") {
              return theFunc.apply(console, args);
            }
          }
        };
      }
      for (var i = 0; i < consoleMap.length; i++) {
        this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
      }
    }
    return DiagConsoleLogger2;
  }()
);
var __extends$3 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var NoopMeter = (
  /** @class */
  function() {
    function NoopMeter2() {
    }
    NoopMeter2.prototype.createGauge = function(_name, _options) {
      return NOOP_GAUGE_METRIC;
    };
    NoopMeter2.prototype.createHistogram = function(_name, _options) {
      return NOOP_HISTOGRAM_METRIC;
    };
    NoopMeter2.prototype.createCounter = function(_name, _options) {
      return NOOP_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createUpDownCounter = function(_name, _options) {
      return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createObservableGauge = function(_name, _options) {
      return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    NoopMeter2.prototype.createObservableCounter = function(_name, _options) {
      return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    NoopMeter2.prototype.createObservableUpDownCounter = function(_name, _options) {
      return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    NoopMeter2.prototype.addBatchObservableCallback = function(_callback, _observables) {
    };
    NoopMeter2.prototype.removeBatchObservableCallback = function(_callback) {
    };
    return NoopMeter2;
  }()
);
var NoopMetric = (
  /** @class */
  /* @__PURE__ */ function() {
    function NoopMetric2() {
    }
    return NoopMetric2;
  }()
);
var NoopCounterMetric = (
  /** @class */
  function(_super) {
    __extends$3(NoopCounterMetric2, _super);
    function NoopCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric2.prototype.add = function(_value, _attributes) {
    };
    return NoopCounterMetric2;
  }(NoopMetric)
);
var NoopUpDownCounterMetric = (
  /** @class */
  function(_super) {
    __extends$3(NoopUpDownCounterMetric2, _super);
    function NoopUpDownCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric2.prototype.add = function(_value, _attributes) {
    };
    return NoopUpDownCounterMetric2;
  }(NoopMetric)
);
var NoopGaugeMetric = (
  /** @class */
  function(_super) {
    __extends$3(NoopGaugeMetric2, _super);
    function NoopGaugeMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopGaugeMetric2.prototype.record = function(_value, _attributes) {
    };
    return NoopGaugeMetric2;
  }(NoopMetric)
);
var NoopHistogramMetric = (
  /** @class */
  function(_super) {
    __extends$3(NoopHistogramMetric2, _super);
    function NoopHistogramMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric2.prototype.record = function(_value, _attributes) {
    };
    return NoopHistogramMetric2;
  }(NoopMetric)
);
var NoopObservableMetric = (
  /** @class */
  function() {
    function NoopObservableMetric2() {
    }
    NoopObservableMetric2.prototype.addCallback = function(_callback) {
    };
    NoopObservableMetric2.prototype.removeCallback = function(_callback) {
    };
    return NoopObservableMetric2;
  }()
);
var NoopObservableCounterMetric = (
  /** @class */
  function(_super) {
    __extends$3(NoopObservableCounterMetric2, _super);
    function NoopObservableCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableCounterMetric2;
  }(NoopObservableMetric)
);
var NoopObservableGaugeMetric = (
  /** @class */
  function(_super) {
    __extends$3(NoopObservableGaugeMetric2, _super);
    function NoopObservableGaugeMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableGaugeMetric2;
  }(NoopObservableMetric)
);
var NoopObservableUpDownCounterMetric = (
  /** @class */
  function(_super) {
    __extends$3(NoopObservableUpDownCounterMetric2, _super);
    function NoopObservableUpDownCounterMetric2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableUpDownCounterMetric2;
  }(NoopObservableMetric)
);
var NOOP_METER = new NoopMeter();
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_GAUGE_METRIC = new NoopGaugeMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
function createNoopMeter() {
  return NOOP_METER;
}
var ValueType;
(function(ValueType2) {
  ValueType2[ValueType2["INT"] = 0] = "INT";
  ValueType2[ValueType2["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {}));
var defaultTextMapGetter = {
  get: function(carrier, key) {
    if (carrier == null) {
      return void 0;
    }
    return carrier[key];
  },
  keys: function(carrier) {
    if (carrier == null) {
      return [];
    }
    return Object.keys(carrier);
  }
};
var defaultTextMapSetter = {
  set: function(carrier, key, value) {
    if (carrier == null) {
      return;
    }
    carrier[key] = value;
  }
};
var __read$8 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray$5 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var NoopContextManager = (
  /** @class */
  function() {
    function NoopContextManager2() {
    }
    NoopContextManager2.prototype.active = function() {
      return ROOT_CONTEXT;
    };
    NoopContextManager2.prototype.with = function(_context, fn, thisArg) {
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return fn.call.apply(fn, __spreadArray$5([thisArg], __read$8(args), false));
    };
    NoopContextManager2.prototype.bind = function(_context, target) {
      return target;
    };
    NoopContextManager2.prototype.enable = function() {
      return this;
    };
    NoopContextManager2.prototype.disable = function() {
      return this;
    };
    return NoopContextManager2;
  }()
);
var __read$7 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray$4 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME$3 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
var ContextAPI = (
  /** @class */
  function() {
    function ContextAPI2() {
    }
    ContextAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new ContextAPI2();
      }
      return this._instance;
    };
    ContextAPI2.prototype.setGlobalContextManager = function(contextManager) {
      return registerGlobal(API_NAME$3, contextManager, DiagAPI.instance());
    };
    ContextAPI2.prototype.active = function() {
      return this._getContextManager().active();
    };
    ContextAPI2.prototype.with = function(context2, fn, thisArg) {
      var _a3;
      var args = [];
      for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
      }
      return (_a3 = this._getContextManager()).with.apply(_a3, __spreadArray$4([context2, fn, thisArg], __read$7(args), false));
    };
    ContextAPI2.prototype.bind = function(context2, target) {
      return this._getContextManager().bind(context2, target);
    };
    ContextAPI2.prototype._getContextManager = function() {
      return getGlobal(API_NAME$3) || NOOP_CONTEXT_MANAGER;
    };
    ContextAPI2.prototype.disable = function() {
      this._getContextManager().disable();
      unregisterGlobal(API_NAME$3, DiagAPI.instance());
    };
    return ContextAPI2;
  }()
);
var TraceFlags;
(function(TraceFlags2) {
  TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
  TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
var INVALID_SPANID = "0000000000000000";
var INVALID_TRACEID = "00000000000000000000000000000000";
var INVALID_SPAN_CONTEXT = {
  traceId: INVALID_TRACEID,
  spanId: INVALID_SPANID,
  traceFlags: TraceFlags.NONE
};
var NonRecordingSpan = (
  /** @class */
  function() {
    function NonRecordingSpan2(_spanContext) {
      if (_spanContext === void 0) {
        _spanContext = INVALID_SPAN_CONTEXT;
      }
      this._spanContext = _spanContext;
    }
    NonRecordingSpan2.prototype.spanContext = function() {
      return this._spanContext;
    };
    NonRecordingSpan2.prototype.setAttribute = function(_key, _value) {
      return this;
    };
    NonRecordingSpan2.prototype.setAttributes = function(_attributes) {
      return this;
    };
    NonRecordingSpan2.prototype.addEvent = function(_name, _attributes) {
      return this;
    };
    NonRecordingSpan2.prototype.addLink = function(_link) {
      return this;
    };
    NonRecordingSpan2.prototype.addLinks = function(_links) {
      return this;
    };
    NonRecordingSpan2.prototype.setStatus = function(_status) {
      return this;
    };
    NonRecordingSpan2.prototype.updateName = function(_name) {
      return this;
    };
    NonRecordingSpan2.prototype.end = function(_endTime) {
    };
    NonRecordingSpan2.prototype.isRecording = function() {
      return false;
    };
    NonRecordingSpan2.prototype.recordException = function(_exception, _time) {
    };
    return NonRecordingSpan2;
  }()
);
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
function getSpan(context2) {
  return context2.getValue(SPAN_KEY) || void 0;
}
function getActiveSpan$1() {
  return getSpan(ContextAPI.getInstance().active());
}
function setSpan(context2, span) {
  return context2.setValue(SPAN_KEY, span);
}
function deleteSpan(context2) {
  return context2.deleteValue(SPAN_KEY);
}
function setSpanContext(context2, spanContext) {
  return setSpan(context2, new NonRecordingSpan(spanContext));
}
function getSpanContext(context2) {
  var _a3;
  return (_a3 = getSpan(context2)) === null || _a3 === void 0 ? void 0 : _a3.spanContext();
}
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
  return VALID_TRACEID_REGEX.test(traceId) && traceId !== INVALID_TRACEID;
}
function isValidSpanId(spanId) {
  return VALID_SPANID_REGEX.test(spanId) && spanId !== INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
  return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
  return new NonRecordingSpan(spanContext);
}
var contextApi = ContextAPI.getInstance();
var NoopTracer = (
  /** @class */
  function() {
    function NoopTracer2() {
    }
    NoopTracer2.prototype.startSpan = function(name2, options, context2) {
      if (context2 === void 0) {
        context2 = contextApi.active();
      }
      var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
      if (root) {
        return new NonRecordingSpan();
      }
      var parentFromContext = context2 && getSpanContext(context2);
      if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) {
        return new NonRecordingSpan(parentFromContext);
      } else {
        return new NonRecordingSpan();
      }
    };
    NoopTracer2.prototype.startActiveSpan = function(name2, arg2, arg3, arg4) {
      var opts;
      var ctx;
      var fn;
      if (arguments.length < 2) {
        return;
      } else if (arguments.length === 2) {
        fn = arg2;
      } else if (arguments.length === 3) {
        opts = arg2;
        fn = arg3;
      } else {
        opts = arg2;
        ctx = arg3;
        fn = arg4;
      }
      var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
      var span = this.startSpan(name2, opts, parentContext);
      var contextWithSpanSet = setSpan(parentContext, span);
      return contextApi.with(contextWithSpanSet, fn, void 0, span);
    };
    return NoopTracer2;
  }()
);
function isSpanContext(spanContext) {
  return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}
var NOOP_TRACER = new NoopTracer();
var ProxyTracer = (
  /** @class */
  function() {
    function ProxyTracer2(_provider, name2, version2, options) {
      this._provider = _provider;
      this.name = name2;
      this.version = version2;
      this.options = options;
    }
    ProxyTracer2.prototype.startSpan = function(name2, options, context2) {
      return this._getTracer().startSpan(name2, options, context2);
    };
    ProxyTracer2.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
      var tracer = this._getTracer();
      return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    ProxyTracer2.prototype._getTracer = function() {
      if (this._delegate) {
        return this._delegate;
      }
      var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
      if (!tracer) {
        return NOOP_TRACER;
      }
      this._delegate = tracer;
      return this._delegate;
    };
    return ProxyTracer2;
  }()
);
var NoopTracerProvider = (
  /** @class */
  function() {
    function NoopTracerProvider2() {
    }
    NoopTracerProvider2.prototype.getTracer = function(_name, _version, _options) {
      return new NoopTracer();
    };
    return NoopTracerProvider2;
  }()
);
var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
var ProxyTracerProvider = (
  /** @class */
  function() {
    function ProxyTracerProvider2() {
    }
    ProxyTracerProvider2.prototype.getTracer = function(name2, version2, options) {
      var _a3;
      return (_a3 = this.getDelegateTracer(name2, version2, options)) !== null && _a3 !== void 0 ? _a3 : new ProxyTracer(this, name2, version2, options);
    };
    ProxyTracerProvider2.prototype.getDelegate = function() {
      var _a3;
      return (_a3 = this._delegate) !== null && _a3 !== void 0 ? _a3 : NOOP_TRACER_PROVIDER;
    };
    ProxyTracerProvider2.prototype.setDelegate = function(delegate) {
      this._delegate = delegate;
    };
    ProxyTracerProvider2.prototype.getDelegateTracer = function(name2, version2, options) {
      var _a3;
      return (_a3 = this._delegate) === null || _a3 === void 0 ? void 0 : _a3.getTracer(name2, version2, options);
    };
    return ProxyTracerProvider2;
  }()
);
var SamplingDecision$1;
(function(SamplingDecision2) {
  SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
  SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
  SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision$1 || (SamplingDecision$1 = {}));
var SpanKind;
(function(SpanKind2) {
  SpanKind2[SpanKind2["INTERNAL"] = 0] = "INTERNAL";
  SpanKind2[SpanKind2["SERVER"] = 1] = "SERVER";
  SpanKind2[SpanKind2["CLIENT"] = 2] = "CLIENT";
  SpanKind2[SpanKind2["PRODUCER"] = 3] = "PRODUCER";
  SpanKind2[SpanKind2["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
var SpanStatusCode;
(function(SpanStatusCode2) {
  SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
  SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
  SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
var VALID_KEY_CHAR_RANGE$1 = "[_0-9a-z-*/]";
var VALID_KEY$1 = "[a-z]" + VALID_KEY_CHAR_RANGE$1 + "{0,255}";
var VALID_VENDOR_KEY$1 = "[a-z0-9]" + VALID_KEY_CHAR_RANGE$1 + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE$1 + "{0,13}";
var VALID_KEY_REGEX$1 = new RegExp("^(?:" + VALID_KEY$1 + "|" + VALID_VENDOR_KEY$1 + ")$");
var VALID_VALUE_BASE_REGEX$1 = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX$1 = /,|=/;
function validateKey$1(key) {
  return VALID_KEY_REGEX$1.test(key);
}
function validateValue$1(value) {
  return VALID_VALUE_BASE_REGEX$1.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX$1.test(value);
}
var MAX_TRACE_STATE_ITEMS$1 = 32;
var MAX_TRACE_STATE_LEN$1 = 512;
var LIST_MEMBERS_SEPARATOR$1 = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER$1 = "=";
var TraceStateImpl = (
  /** @class */
  function() {
    function TraceStateImpl2(rawTraceState) {
      this._internalState = /* @__PURE__ */ new Map();
      if (rawTraceState)
        this._parse(rawTraceState);
    }
    TraceStateImpl2.prototype.set = function(key, value) {
      var traceState = this._clone();
      if (traceState._internalState.has(key)) {
        traceState._internalState.delete(key);
      }
      traceState._internalState.set(key, value);
      return traceState;
    };
    TraceStateImpl2.prototype.unset = function(key) {
      var traceState = this._clone();
      traceState._internalState.delete(key);
      return traceState;
    };
    TraceStateImpl2.prototype.get = function(key) {
      return this._internalState.get(key);
    };
    TraceStateImpl2.prototype.serialize = function() {
      var _this = this;
      return this._keys().reduce(function(agg, key) {
        agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER$1 + _this.get(key));
        return agg;
      }, []).join(LIST_MEMBERS_SEPARATOR$1);
    };
    TraceStateImpl2.prototype._parse = function(rawTraceState) {
      if (rawTraceState.length > MAX_TRACE_STATE_LEN$1)
        return;
      this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR$1).reverse().reduce(function(agg, part) {
        var listMember = part.trim();
        var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER$1);
        if (i !== -1) {
          var key = listMember.slice(0, i);
          var value = listMember.slice(i + 1, part.length);
          if (validateKey$1(key) && validateValue$1(value)) {
            agg.set(key, value);
          }
        }
        return agg;
      }, /* @__PURE__ */ new Map());
      if (this._internalState.size > MAX_TRACE_STATE_ITEMS$1) {
        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS$1));
      }
    };
    TraceStateImpl2.prototype._keys = function() {
      return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl2.prototype._clone = function() {
      var traceState = new TraceStateImpl2();
      traceState._internalState = new Map(this._internalState);
      return traceState;
    };
    return TraceStateImpl2;
  }()
);
function createTraceState(rawTraceState) {
  return new TraceStateImpl(rawTraceState);
}
var context = ContextAPI.getInstance();
var diag = DiagAPI.instance();
var NoopMeterProvider = (
  /** @class */
  function() {
    function NoopMeterProvider2() {
    }
    NoopMeterProvider2.prototype.getMeter = function(_name, _version, _options) {
      return NOOP_METER;
    };
    return NoopMeterProvider2;
  }()
);
var NOOP_METER_PROVIDER = new NoopMeterProvider();
var API_NAME$2 = "metrics";
var MetricsAPI = (
  /** @class */
  function() {
    function MetricsAPI2() {
    }
    MetricsAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new MetricsAPI2();
      }
      return this._instance;
    };
    MetricsAPI2.prototype.setGlobalMeterProvider = function(provider) {
      return registerGlobal(API_NAME$2, provider, DiagAPI.instance());
    };
    MetricsAPI2.prototype.getMeterProvider = function() {
      return getGlobal(API_NAME$2) || NOOP_METER_PROVIDER;
    };
    MetricsAPI2.prototype.getMeter = function(name2, version2, options) {
      return this.getMeterProvider().getMeter(name2, version2, options);
    };
    MetricsAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME$2, DiagAPI.instance());
    };
    return MetricsAPI2;
  }()
);
var metrics = MetricsAPI.getInstance();
var NoopTextMapPropagator = (
  /** @class */
  function() {
    function NoopTextMapPropagator2() {
    }
    NoopTextMapPropagator2.prototype.inject = function(_context, _carrier) {
    };
    NoopTextMapPropagator2.prototype.extract = function(context2, _carrier) {
      return context2;
    };
    NoopTextMapPropagator2.prototype.fields = function() {
      return [];
    };
    return NoopTextMapPropagator2;
  }()
);
var BAGGAGE_KEY = createContextKey("OpenTelemetry Baggage Key");
function getBaggage(context2) {
  return context2.getValue(BAGGAGE_KEY) || void 0;
}
function getActiveBaggage() {
  return getBaggage(ContextAPI.getInstance().active());
}
function setBaggage(context2, baggage) {
  return context2.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context2) {
  return context2.deleteValue(BAGGAGE_KEY);
}
var API_NAME$1 = "propagation";
var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
var PropagationAPI = (
  /** @class */
  function() {
    function PropagationAPI2() {
      this.createBaggage = createBaggage;
      this.getBaggage = getBaggage;
      this.getActiveBaggage = getActiveBaggage;
      this.setBaggage = setBaggage;
      this.deleteBaggage = deleteBaggage;
    }
    PropagationAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new PropagationAPI2();
      }
      return this._instance;
    };
    PropagationAPI2.prototype.setGlobalPropagator = function(propagator) {
      return registerGlobal(API_NAME$1, propagator, DiagAPI.instance());
    };
    PropagationAPI2.prototype.inject = function(context2, carrier, setter) {
      if (setter === void 0) {
        setter = defaultTextMapSetter;
      }
      return this._getGlobalPropagator().inject(context2, carrier, setter);
    };
    PropagationAPI2.prototype.extract = function(context2, carrier, getter) {
      if (getter === void 0) {
        getter = defaultTextMapGetter;
      }
      return this._getGlobalPropagator().extract(context2, carrier, getter);
    };
    PropagationAPI2.prototype.fields = function() {
      return this._getGlobalPropagator().fields();
    };
    PropagationAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME$1, DiagAPI.instance());
    };
    PropagationAPI2.prototype._getGlobalPropagator = function() {
      return getGlobal(API_NAME$1) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI2;
  }()
);
var propagation = PropagationAPI.getInstance();
var API_NAME = "trace";
var TraceAPI = (
  /** @class */
  function() {
    function TraceAPI2() {
      this._proxyTracerProvider = new ProxyTracerProvider();
      this.wrapSpanContext = wrapSpanContext;
      this.isSpanContextValid = isSpanContextValid;
      this.deleteSpan = deleteSpan;
      this.getSpan = getSpan;
      this.getActiveSpan = getActiveSpan$1;
      this.getSpanContext = getSpanContext;
      this.setSpan = setSpan;
      this.setSpanContext = setSpanContext;
    }
    TraceAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new TraceAPI2();
      }
      return this._instance;
    };
    TraceAPI2.prototype.setGlobalTracerProvider = function(provider) {
      var success = registerGlobal(API_NAME, this._proxyTracerProvider, DiagAPI.instance());
      if (success) {
        this._proxyTracerProvider.setDelegate(provider);
      }
      return success;
    };
    TraceAPI2.prototype.getTracerProvider = function() {
      return getGlobal(API_NAME) || this._proxyTracerProvider;
    };
    TraceAPI2.prototype.getTracer = function(name2, version2) {
      return this.getTracerProvider().getTracer(name2, version2);
    };
    TraceAPI2.prototype.disable = function() {
      unregisterGlobal(API_NAME, DiagAPI.instance());
      this._proxyTracerProvider = new ProxyTracerProvider();
    };
    return TraceAPI2;
  }()
);
var trace = TraceAPI.getInstance();
const index = {
  context,
  diag,
  metrics,
  propagation,
  trace
};
const esm$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DiagConsoleLogger,
  get DiagLogLevel() {
    return DiagLogLevel;
  },
  INVALID_SPANID,
  INVALID_SPAN_CONTEXT,
  INVALID_TRACEID,
  ProxyTracer,
  ProxyTracerProvider,
  ROOT_CONTEXT,
  get SamplingDecision() {
    return SamplingDecision$1;
  },
  get SpanKind() {
    return SpanKind;
  },
  get SpanStatusCode() {
    return SpanStatusCode;
  },
  get TraceFlags() {
    return TraceFlags;
  },
  get ValueType() {
    return ValueType;
  },
  baggageEntryMetadataFromString,
  context,
  createContextKey,
  createNoopMeter,
  createTraceState,
  default: index,
  defaultTextMapGetter,
  defaultTextMapSetter,
  diag,
  isSpanContextValid,
  isValidSpanId,
  isValidTraceId,
  metrics,
  propagation,
  trace
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(esm$2);
var TMP_DB_SYSTEM = "db.system";
var TMP_DB_STATEMENT = "db.statement";
var TMP_EXCEPTION_TYPE = "exception.type";
var TMP_EXCEPTION_MESSAGE = "exception.message";
var TMP_EXCEPTION_STACKTRACE = "exception.stacktrace";
var TMP_FAAS_TRIGGER = "faas.trigger";
var TMP_HTTP_METHOD = "http.method";
var TMP_HTTP_URL = "http.url";
var TMP_HTTP_TARGET = "http.target";
var TMP_HTTP_STATUS_CODE = "http.status_code";
var TMP_MESSAGING_SYSTEM = "messaging.system";
var TMP_RPC_SERVICE = "rpc.service";
var TMP_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
var SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
var SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
var SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
var SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
var SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
var SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
var SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
var SEMATTRS_HTTP_URL = TMP_HTTP_URL;
var SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
var SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
var SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
var SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
var SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
var TMP_PROCESS_RUNTIME_NAME = "process.runtime.name";
var TMP_SERVICE_NAME = "service.name";
var TMP_SERVICE_NAMESPACE = "service.namespace";
var TMP_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
var TMP_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
var TMP_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
var SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
var SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
var SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
var SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
var SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
var SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = "nodejs";
var TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
var ATTR_HTTP_REQUEST_METHOD = "http.request.method";
var ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
var ATTR_HTTP_ROUTE = "http.route";
var ATTR_SERVICE_NAME = "service.name";
var ATTR_SERVICE_VERSION = "service.version";
var ATTR_URL_FULL = "url.full";
var re$2 = { exports: {} };
const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
const RELEASE_TYPES = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var constants$3 = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const debug$2 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$2;
(function(module2, exports2) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
    MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
    MAX_LENGTH: MAX_LENGTH2
  } = constants$3;
  const debug2 = debug_1;
  exports2 = module2.exports = {};
  const re2 = exports2.re = [];
  const safeRe = exports2.safeRe = [];
  const src2 = exports2.src = [];
  const t2 = exports2.t = {};
  let R = 0;
  const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
  const safeRegexReplacements = [
    ["\\s", 1],
    ["\\d", MAX_LENGTH2],
    [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
  ];
  const makeSafeRegex = (value) => {
    for (const [token, max2] of safeRegexReplacements) {
      value = value.split(`${token}*`).join(`${token}{0,${max2}}`).split(`${token}+`).join(`${token}{1,${max2}}`);
    }
    return value;
  };
  const createToken = (name2, value, isGlobal) => {
    const safe = makeSafeRegex(value);
    const index2 = R++;
    debug2(name2, index2, value);
    t2[name2] = index2;
    src2[index2] = value;
    re2[index2] = new RegExp(value, isGlobal ? "g" : void 0);
    safeRe[index2] = new RegExp(safe, isGlobal ? "g" : void 0);
  };
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken("MAINVERSION", `(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src2[t2.NUMERICIDENTIFIER]}|${src2[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src2[t2.NUMERICIDENTIFIERLOOSE]}|${src2[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASE", `(?:-(${src2[t2.PRERELEASEIDENTIFIER]}(?:\\.${src2[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src2[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src2[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken("BUILD", `(?:\\+(${src2[t2.BUILDIDENTIFIER]}(?:\\.${src2[t2.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src2[t2.MAINVERSION]}${src2[t2.PRERELEASE]}?${src2[t2.BUILD]}?`);
  createToken("FULL", `^${src2[t2.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src2[t2.MAINVERSIONLOOSE]}${src2[t2.PRERELEASELOOSE]}?${src2[t2.BUILD]}?`);
  createToken("LOOSE", `^${src2[t2.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src2[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src2[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:${src2[t2.PRERELEASE]})?${src2[t2.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:${src2[t2.PRERELEASELOOSE]})?${src2[t2.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?`);
  createToken("COERCE", `${src2[t2.COERCEPLAIN]}(?:$|[^\\d])`);
  createToken("COERCEFULL", src2[t2.COERCEPLAIN] + `(?:${src2[t2.PRERELEASE]})?(?:${src2[t2.BUILD]})?(?:$|[^\\d])`);
  createToken("COERCERTL", src2[t2.COERCE], true);
  createToken("COERCERTLFULL", src2[t2.COERCEFULL], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src2[t2.LONETILDE]}\\s+`, true);
  exports2.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src2[t2.LONECARET]}\\s+`, true);
  exports2.caretTrimReplace = "$1^";
  createToken("CARET", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src2[t2.GTLT]}\\s*(${src2[t2.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]}|${src2[t2.XRANGEPLAIN]})`, true);
  exports2.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src2[t2.XRANGEPLAIN]})\\s+-\\s+(${src2[t2.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src2[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src2[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(re$2, re$2.exports);
var reExports = re$2.exports;
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions$2 = (options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
};
var parseOptions_1 = parseOptions$2;
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
var identifiers$1 = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
const debug$1 = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants$3;
const { safeRe: re$1, t: t$1 } = reExports;
const parseOptions$1 = parseOptions_1;
const { compareIdentifiers } = identifiers$1;
let SemVer$d = class SemVer {
  constructor(version2, options) {
    options = parseOptions$1(options);
    if (version2 instanceof SemVer) {
      if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
        return version2;
      } else {
        version2 = version2.version;
      }
    } else if (typeof version2 !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
    }
    if (version2.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug$1("SemVer", version2, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version2.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version2}`);
    }
    this.raw = version2;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug$1("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug$1("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug$1("build compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease2 = [identifier, base];
          if (identifierBase === false) {
            prerelease2 = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease2;
            }
          } else {
            this.prerelease = prerelease2;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
};
var semver$1 = SemVer$d;
const SemVer$c = semver$1;
const parse$8 = (version2, options, throwErrors = false) => {
  if (version2 instanceof SemVer$c) {
    return version2;
  }
  try {
    return new SemVer$c(version2, options);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
};
var parse_1 = parse$8;
const parse$7 = parse_1;
const valid$2 = (version2, options) => {
  const v = parse$7(version2, options);
  return v ? v.version : null;
};
var valid_1 = valid$2;
const parse$6 = parse_1;
const clean$1 = (version2, options) => {
  const s = parse$6(version2.trim().replace(/^[=v]+/, ""), options);
  return s ? s.version : null;
};
var clean_1 = clean$1;
const SemVer$b = semver$1;
const inc$1 = (version2, release, options, identifier, identifierBase) => {
  if (typeof options === "string") {
    identifierBase = identifier;
    identifier = options;
    options = void 0;
  }
  try {
    return new SemVer$b(
      version2 instanceof SemVer$b ? version2.version : version2,
      options
    ).inc(release, identifier, identifierBase).version;
  } catch (er) {
    return null;
  }
};
var inc_1 = inc$1;
const parse$5 = parse_1;
const diff$1 = (version1, version2) => {
  const v1 = parse$5(version1, null, true);
  const v2 = parse$5(version2, null, true);
  const comparison = v1.compare(v2);
  if (comparison === 0) {
    return null;
  }
  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v1 : v2;
  const lowVersion = v1Higher ? v2 : v1;
  const highHasPre = !!highVersion.prerelease.length;
  const lowHasPre = !!lowVersion.prerelease.length;
  if (lowHasPre && !highHasPre) {
    if (!lowVersion.patch && !lowVersion.minor) {
      return "major";
    }
    if (highVersion.patch) {
      return "patch";
    }
    if (highVersion.minor) {
      return "minor";
    }
    return "major";
  }
  const prefix = highHasPre ? "pre" : "";
  if (v1.major !== v2.major) {
    return prefix + "major";
  }
  if (v1.minor !== v2.minor) {
    return prefix + "minor";
  }
  if (v1.patch !== v2.patch) {
    return prefix + "patch";
  }
  return "prerelease";
};
var diff_1 = diff$1;
const SemVer$a = semver$1;
const major$1 = (a, loose) => new SemVer$a(a, loose).major;
var major_1 = major$1;
const SemVer$9 = semver$1;
const minor$1 = (a, loose) => new SemVer$9(a, loose).minor;
var minor_1 = minor$1;
const SemVer$8 = semver$1;
const patch$1 = (a, loose) => new SemVer$8(a, loose).patch;
var patch_1 = patch$1;
const parse$4 = parse_1;
const prerelease$1 = (version2, options) => {
  const parsed2 = parse$4(version2, options);
  return parsed2 && parsed2.prerelease.length ? parsed2.prerelease : null;
};
var prerelease_1 = prerelease$1;
const SemVer$7 = semver$1;
const compare$b = (a, b, loose) => new SemVer$7(a, loose).compare(new SemVer$7(b, loose));
var compare_1 = compare$b;
const compare$a = compare_1;
const rcompare$1 = (a, b, loose) => compare$a(b, a, loose);
var rcompare_1 = rcompare$1;
const compare$9 = compare_1;
const compareLoose$1 = (a, b) => compare$9(a, b, true);
var compareLoose_1 = compareLoose$1;
const SemVer$6 = semver$1;
const compareBuild$3 = (a, b, loose) => {
  const versionA = new SemVer$6(a, loose);
  const versionB = new SemVer$6(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
var compareBuild_1 = compareBuild$3;
const compareBuild$2 = compareBuild_1;
const sort$1 = (list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose));
var sort_1 = sort$1;
const compareBuild$1 = compareBuild_1;
const rsort$1 = (list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose));
var rsort_1 = rsort$1;
const compare$8 = compare_1;
const gt$4 = (a, b, loose) => compare$8(a, b, loose) > 0;
var gt_1 = gt$4;
const compare$7 = compare_1;
const lt$3 = (a, b, loose) => compare$7(a, b, loose) < 0;
var lt_1 = lt$3;
const compare$6 = compare_1;
const eq$2 = (a, b, loose) => compare$6(a, b, loose) === 0;
var eq_1 = eq$2;
const compare$5 = compare_1;
const neq$2 = (a, b, loose) => compare$5(a, b, loose) !== 0;
var neq_1 = neq$2;
const compare$4 = compare_1;
const gte$3 = (a, b, loose) => compare$4(a, b, loose) >= 0;
var gte_1 = gte$3;
const compare$3 = compare_1;
const lte$3 = (a, b, loose) => compare$3(a, b, loose) <= 0;
var lte_1 = lte$3;
const eq$1 = eq_1;
const neq$1 = neq_1;
const gt$3 = gt_1;
const gte$2 = gte_1;
const lt$2 = lt_1;
const lte$2 = lte_1;
const cmp$1 = (a, op, b, loose) => {
  switch (op) {
    case "===":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a === b;
    case "!==":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a !== b;
    case "":
    case "=":
    case "==":
      return eq$1(a, b, loose);
    case "!=":
      return neq$1(a, b, loose);
    case ">":
      return gt$3(a, b, loose);
    case ">=":
      return gte$2(a, b, loose);
    case "<":
      return lt$2(a, b, loose);
    case "<=":
      return lte$2(a, b, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};
var cmp_1 = cmp$1;
const SemVer$5 = semver$1;
const parse$3 = parse_1;
const { safeRe: re, t } = reExports;
const coerce$1 = (version2, options) => {
  if (version2 instanceof SemVer$5) {
    return version2;
  }
  if (typeof version2 === "number") {
    version2 = String(version2);
  }
  if (typeof version2 !== "string") {
    return null;
  }
  options = options || {};
  let match = null;
  if (!options.rtl) {
    match = version2.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
  } else {
    const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
    let next;
    while ((next = coerceRtlRegex.exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
    }
    coerceRtlRegex.lastIndex = -1;
  }
  if (match === null) {
    return null;
  }
  const major2 = match[2];
  const minor2 = match[3] || "0";
  const patch2 = match[4] || "0";
  const prerelease2 = options.includePrerelease && match[5] ? `-${match[5]}` : "";
  const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
  return parse$3(`${major2}.${minor2}.${patch2}${prerelease2}${build}`, options);
};
var coerce_1 = coerce$1;
class LRUCache {
  constructor() {
    this.max = 1e3;
    this.map = /* @__PURE__ */ new Map();
  }
  get(key) {
    const value = this.map.get(key);
    if (value === void 0) {
      return void 0;
    } else {
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }
  }
  delete(key) {
    return this.map.delete(key);
  }
  set(key, value) {
    const deleted = this.delete(key);
    if (!deleted && value !== void 0) {
      if (this.map.size >= this.max) {
        const firstKey = this.map.keys().next().value;
        this.delete(firstKey);
      }
      this.map.set(key, value);
    }
    return this;
  }
}
var lrucache = LRUCache;
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  const SPACE_CHARACTERS = /\s+/g;
  class Range2 {
    constructor(range2, options) {
      options = parseOptions2(options);
      if (range2 instanceof Range2) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range2(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator2) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          if (i > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i];
          for (let k = 0; k < comps.length; k++) {
            if (k > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug2("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug2("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      debug2("tilde trim", range2);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      debug2("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug2("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug2("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator2(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range2)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version2) {
      if (!version2) {
        return false;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer3(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version2, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range2;
  const LRU = lrucache;
  const cache = new LRU();
  const parseOptions2 = parseOptions_1;
  const Comparator2 = requireComparator();
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const {
    safeRe: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = reExports;
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = constants$3;
  const isNullSet = (c) => c.value === "<0.0.0-0";
  const isAny = (c) => c.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    debug2("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug2("caret", comp);
    comp = replaceTildes(comp, options);
    debug2("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug2("xrange", comp);
    comp = replaceStars(comp, options);
    debug2("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("tilde", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug2("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug2("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug2("caret", comp, options);
    const r = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("caret", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug2("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug2("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug2("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug2("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug2("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug2("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug2("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug2("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set2, version2, options) => {
    for (let i = 0; i < set2.length; i++) {
      if (!set2[i].test(version2)) {
        return false;
      }
    }
    if (version2.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set2.length; i++) {
        debug2(set2[i].semver);
        if (set2[i].semver === Comparator2.ANY) {
          continue;
        }
        if (set2[i].semver.prerelease.length > 0) {
          const allowed = set2[i].semver;
          if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  const ANY2 = Symbol("SemVer ANY");
  class Comparator2 {
    static get ANY() {
      return ANY2;
    }
    constructor(comp, options) {
      options = parseOptions2(options);
      if (comp instanceof Comparator2) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug2("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY2) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug2("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY2;
      } else {
        this.semver = new SemVer3(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version2) {
      debug2("Comparator.test", version2, this.options.loose);
      if (this.semver === ANY2 || version2 === ANY2) {
        return true;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer3(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp2(version2, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator2)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range2(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range2(this.value, options).test(comp.semver);
      }
      options = parseOptions2(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp2(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp2(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator2;
  const parseOptions2 = parseOptions_1;
  const { safeRe: re2, t: t2 } = reExports;
  const cmp2 = cmp_1;
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const Range2 = requireRange();
  return comparator;
}
const Range$9 = requireRange();
const satisfies$4 = (version2, range2, options) => {
  try {
    range2 = new Range$9(range2, options);
  } catch (er) {
    return false;
  }
  return range2.test(version2);
};
var satisfies_1 = satisfies$4;
const Range$8 = requireRange();
const toComparators$1 = (range2, options) => new Range$8(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
var toComparators_1 = toComparators$1;
const SemVer$4 = semver$1;
const Range$7 = requireRange();
const maxSatisfying$1 = (versions, range2, options) => {
  let max2 = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$7(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!max2 || maxSV.compare(v) === -1) {
        max2 = v;
        maxSV = new SemVer$4(max2, options);
      }
    }
  });
  return max2;
};
var maxSatisfying_1 = maxSatisfying$1;
const SemVer$3 = semver$1;
const Range$6 = requireRange();
const minSatisfying$1 = (versions, range2, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!min || minSV.compare(v) === 1) {
        min = v;
        minSV = new SemVer$3(min, options);
      }
    }
  });
  return min;
};
var minSatisfying_1 = minSatisfying$1;
const SemVer$2 = semver$1;
const Range$5 = requireRange();
const gt$2 = gt_1;
const minVersion$1 = (range2, loose) => {
  range2 = new Range$5(range2, loose);
  let minver = new SemVer$2("0.0.0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = new SemVer$2("0.0.0-0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = null;
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let setMin = null;
    comparators.forEach((comparator2) => {
      const compver = new SemVer$2(comparator2.semver.version);
      switch (comparator2.operator) {
        case ">":
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        case "":
        case ">=":
          if (!setMin || gt$2(compver, setMin)) {
            setMin = compver;
          }
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${comparator2.operator}`);
      }
    });
    if (setMin && (!minver || gt$2(minver, setMin))) {
      minver = setMin;
    }
  }
  if (minver && range2.test(minver)) {
    return minver;
  }
  return null;
};
var minVersion_1 = minVersion$1;
const Range$4 = requireRange();
const validRange$1 = (range2, options) => {
  try {
    return new Range$4(range2, options).range || "*";
  } catch (er) {
    return null;
  }
};
var valid$1 = validRange$1;
const SemVer$1 = semver$1;
const Comparator$2 = requireComparator();
const { ANY: ANY$1 } = Comparator$2;
const Range$3 = requireRange();
const satisfies$3 = satisfies_1;
const gt$1 = gt_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const gte$1 = gte_1;
const outside$3 = (version2, range2, hilo, options) => {
  version2 = new SemVer$1(version2, options);
  range2 = new Range$3(range2, options);
  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case ">":
      gtfn = gt$1;
      ltefn = lte$1;
      ltfn = lt$1;
      comp = ">";
      ecomp = ">=";
      break;
    case "<":
      gtfn = lt$1;
      ltefn = gte$1;
      ltfn = gt$1;
      comp = "<";
      ecomp = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (satisfies$3(version2, range2, options)) {
    return false;
  }
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let high = null;
    let low = null;
    comparators.forEach((comparator2) => {
      if (comparator2.semver === ANY$1) {
        comparator2 = new Comparator$2(">=0.0.0");
      }
      high = high || comparator2;
      low = low || comparator2;
      if (gtfn(comparator2.semver, high.semver, options)) {
        high = comparator2;
      } else if (ltfn(comparator2.semver, low.semver, options)) {
        low = comparator2;
      }
    });
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }
    if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
      return false;
    }
  }
  return true;
};
var outside_1 = outside$3;
const outside$2 = outside_1;
const gtr$1 = (version2, range2, options) => outside$2(version2, range2, ">", options);
var gtr_1 = gtr$1;
const outside$1 = outside_1;
const ltr$1 = (version2, range2, options) => outside$1(version2, range2, "<", options);
var ltr_1 = ltr$1;
const Range$2 = requireRange();
const intersects$1 = (r1, r2, options) => {
  r1 = new Range$2(r1, options);
  r2 = new Range$2(r2, options);
  return r1.intersects(r2, options);
};
var intersects_1 = intersects$1;
const satisfies$2 = satisfies_1;
const compare$2 = compare_1;
var simplify = (versions, range2, options) => {
  const set2 = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b) => compare$2(a, b, options));
  for (const version2 of v) {
    const included = satisfies$2(version2, range2, options);
    if (included) {
      prev = version2;
      if (!first) {
        first = version2;
      }
    } else {
      if (prev) {
        set2.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set2.push([first, null]);
  }
  const ranges = [];
  for (const [min, max2] of set2) {
    if (min === max2) {
      ranges.push(min);
    } else if (!max2 && min === v[0]) {
      ranges.push("*");
    } else if (!max2) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max2}`);
    } else {
      ranges.push(`${min} - ${max2}`);
    }
  }
  const simplified = ranges.join(" || ");
  const original = typeof range2.raw === "string" ? range2.raw : String(range2);
  return simplified.length < original.length ? simplified : range2;
};
const Range$1 = requireRange();
const Comparator$1 = requireComparator();
const { ANY } = Comparator$1;
const satisfies$1 = satisfies_1;
const compare$1 = compare_1;
const subset$1 = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true;
  }
  sub = new Range$1(sub, options);
  dom = new Range$1(dom, options);
  let sawNonNull = false;
  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) {
        continue OUTER;
      }
    }
    if (sawNonNull) {
      return false;
    }
  }
  return true;
};
const minimumVersionWithPreRelease = [new Comparator$1(">=0.0.0-0")];
const minimumVersion = [new Comparator$1(">=0.0.0")];
const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true;
  }
  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }
  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = minimumVersion;
    }
  }
  const eqSet = /* @__PURE__ */ new Set();
  let gt2, lt2;
  for (const c of sub) {
    if (c.operator === ">" || c.operator === ">=") {
      gt2 = higherGT(gt2, c, options);
    } else if (c.operator === "<" || c.operator === "<=") {
      lt2 = lowerLT(lt2, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }
  if (eqSet.size > 1) {
    return null;
  }
  let gtltComp;
  if (gt2 && lt2) {
    gtltComp = compare$1(gt2.semver, lt2.semver, options);
    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt2.operator !== ">=" || lt2.operator !== "<=")) {
      return null;
    }
  }
  for (const eq2 of eqSet) {
    if (gt2 && !satisfies$1(eq2, String(gt2), options)) {
      return null;
    }
    if (lt2 && !satisfies$1(eq2, String(lt2), options)) {
      return null;
    }
    for (const c of dom) {
      if (!satisfies$1(eq2, String(c), options)) {
        return false;
      }
    }
    return true;
  }
  let higher, lower;
  let hasDomLT, hasDomGT;
  let needDomLTPre = lt2 && !options.includePrerelease && lt2.semver.prerelease.length ? lt2.semver : false;
  let needDomGTPre = gt2 && !options.includePrerelease && gt2.semver.prerelease.length ? gt2.semver : false;
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt2.operator === "<" && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
    hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
    if (gt2) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === ">" || c.operator === ">=") {
        higher = higherGT(gt2, c, options);
        if (higher === c && higher !== gt2) {
          return false;
        }
      } else if (gt2.operator === ">=" && !satisfies$1(gt2.semver, String(c), options)) {
        return false;
      }
    }
    if (lt2) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === "<" || c.operator === "<=") {
        lower = lowerLT(lt2, c, options);
        if (lower === c && lower !== lt2) {
          return false;
        }
      } else if (lt2.operator === "<=" && !satisfies$1(lt2.semver, String(c), options)) {
        return false;
      }
    }
    if (!c.operator && (lt2 || gt2) && gtltComp !== 0) {
      return false;
    }
  }
  if (gt2 && hasDomLT && !lt2 && gtltComp !== 0) {
    return false;
  }
  if (lt2 && hasDomGT && !gt2 && gtltComp !== 0) {
    return false;
  }
  if (needDomGTPre || needDomLTPre) {
    return false;
  }
  return true;
};
const higherGT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
};
const lowerLT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
};
var subset_1 = subset$1;
const internalRe = reExports;
const constants$2 = constants$3;
const SemVer2 = semver$1;
const identifiers = identifiers$1;
const parse$2 = parse_1;
const valid = valid_1;
const clean = clean_1;
const inc = inc_1;
const diff = diff_1;
const major = major_1;
const minor = minor_1;
const patch = patch_1;
const prerelease = prerelease_1;
const compare = compare_1;
const rcompare = rcompare_1;
const compareLoose = compareLoose_1;
const compareBuild = compareBuild_1;
const sort = sort_1;
const rsort = rsort_1;
const gt = gt_1;
const lt = lt_1;
const eq = eq_1;
const neq = neq_1;
const gte = gte_1;
const lte = lte_1;
const cmp = cmp_1;
const coerce = coerce_1;
const Comparator = requireComparator();
const Range = requireRange();
const satisfies = satisfies_1;
const toComparators = toComparators_1;
const maxSatisfying = maxSatisfying_1;
const minSatisfying = minSatisfying_1;
const minVersion = minVersion_1;
const validRange = valid$1;
const outside = outside_1;
const gtr = gtr_1;
const ltr = ltr_1;
const intersects = intersects_1;
const simplifyRange = simplify;
const subset = subset_1;
var semver = {
  parse: parse$2,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer: SemVer2,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants$2.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants$2.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers
};
var NoopLogger = (
  /** @class */
  function() {
    function NoopLogger2() {
    }
    NoopLogger2.prototype.emit = function(_logRecord) {
    };
    return NoopLogger2;
  }()
);
var NOOP_LOGGER = new NoopLogger();
var NoopLoggerProvider = (
  /** @class */
  function() {
    function NoopLoggerProvider2() {
    }
    NoopLoggerProvider2.prototype.getLogger = function(_name, _version, _options) {
      return new NoopLogger();
    };
    return NoopLoggerProvider2;
  }()
);
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();
var ProxyLogger = (
  /** @class */
  function() {
    function ProxyLogger2(_provider, name2, version2, options) {
      this._provider = _provider;
      this.name = name2;
      this.version = version2;
      this.options = options;
    }
    ProxyLogger2.prototype.emit = function(logRecord) {
      this._getLogger().emit(logRecord);
    };
    ProxyLogger2.prototype._getLogger = function() {
      if (this._delegate) {
        return this._delegate;
      }
      var logger2 = this._provider.getDelegateLogger(this.name, this.version, this.options);
      if (!logger2) {
        return NOOP_LOGGER;
      }
      this._delegate = logger2;
      return this._delegate;
    };
    return ProxyLogger2;
  }()
);
var ProxyLoggerProvider = (
  /** @class */
  function() {
    function ProxyLoggerProvider2() {
    }
    ProxyLoggerProvider2.prototype.getLogger = function(name2, version2, options) {
      var _a3;
      return (_a3 = this.getDelegateLogger(name2, version2, options)) !== null && _a3 !== void 0 ? _a3 : new ProxyLogger(this, name2, version2, options);
    };
    ProxyLoggerProvider2.prototype.getDelegate = function() {
      var _a3;
      return (_a3 = this._delegate) !== null && _a3 !== void 0 ? _a3 : NOOP_LOGGER_PROVIDER;
    };
    ProxyLoggerProvider2.prototype.setDelegate = function(delegate) {
      this._delegate = delegate;
    };
    ProxyLoggerProvider2.prototype.getDelegateLogger = function(name2, version2, options) {
      var _a3;
      return (_a3 = this._delegate) === null || _a3 === void 0 ? void 0 : _a3.getLogger(name2, version2, options);
    };
    return ProxyLoggerProvider2;
  }()
);
var _globalThis$1 = typeof globalThis === "object" ? globalThis : global;
var GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
var _global = _globalThis$1;
function makeGetter(requiredVersion, instance2, fallback) {
  return function(version2) {
    return version2 === requiredVersion ? instance2 : fallback;
  };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1;
var LogsAPI = (
  /** @class */
  function() {
    function LogsAPI2() {
      this._proxyLoggerProvider = new ProxyLoggerProvider();
    }
    LogsAPI2.getInstance = function() {
      if (!this._instance) {
        this._instance = new LogsAPI2();
      }
      return this._instance;
    };
    LogsAPI2.prototype.setGlobalLoggerProvider = function(provider) {
      if (_global[GLOBAL_LOGS_API_KEY]) {
        return this.getLoggerProvider();
      }
      _global[GLOBAL_LOGS_API_KEY] = makeGetter(API_BACKWARDS_COMPATIBILITY_VERSION, provider, NOOP_LOGGER_PROVIDER);
      this._proxyLoggerProvider.setDelegate(provider);
      return provider;
    };
    LogsAPI2.prototype.getLoggerProvider = function() {
      var _a3, _b2;
      return (_b2 = (_a3 = _global[GLOBAL_LOGS_API_KEY]) === null || _a3 === void 0 ? void 0 : _a3.call(_global, API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b2 !== void 0 ? _b2 : this._proxyLoggerProvider;
    };
    LogsAPI2.prototype.getLogger = function(name2, version2, options) {
      return this.getLoggerProvider().getLogger(name2, version2, options);
    };
    LogsAPI2.prototype.disable = function() {
      delete _global[GLOBAL_LOGS_API_KEY];
      this._proxyLoggerProvider = new ProxyLoggerProvider();
    };
    return LogsAPI2;
  }()
);
var logs = LogsAPI.getInstance();
function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
  for (var i = 0, j = instrumentations.length; i < j; i++) {
    var instrumentation = instrumentations[i];
    if (tracerProvider) {
      instrumentation.setTracerProvider(tracerProvider);
    }
    if (meterProvider) {
      instrumentation.setMeterProvider(meterProvider);
    }
    if (loggerProvider && instrumentation.setLoggerProvider) {
      instrumentation.setLoggerProvider(loggerProvider);
    }
    if (!instrumentation.getConfig().enabled) {
      instrumentation.enable();
    }
  }
}
function disableInstrumentations(instrumentations) {
  instrumentations.forEach(function(instrumentation) {
    return instrumentation.disable();
  });
}
function registerInstrumentations(options) {
  var _a3, _b2;
  var tracerProvider = options.tracerProvider || trace.getTracerProvider();
  var meterProvider = options.meterProvider || metrics.getMeterProvider();
  var loggerProvider = options.loggerProvider || logs.getLoggerProvider();
  var instrumentations = (_b2 = (_a3 = options.instrumentations) === null || _a3 === void 0 ? void 0 : _a3.flat()) !== null && _b2 !== void 0 ? _b2 : [];
  enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider);
  return function() {
    disableInstrumentations(instrumentations);
  };
}
function isFunction$1(funktion) {
  return typeof funktion === "function";
}
var logger = console.error.bind(console);
function defineProperty(obj, name2, value) {
  var enumerable = !!obj[name2] && obj.propertyIsEnumerable(name2);
  Object.defineProperty(obj, name2, {
    configurable: true,
    enumerable,
    writable: true,
    value
  });
}
function shimmer(options) {
  if (options && options.logger) {
    if (!isFunction$1(options.logger)) logger("new logger isn't a function, not replacing");
    else logger = options.logger;
  }
}
function wrap(nodule, name2, wrapper) {
  if (!nodule || !nodule[name2]) {
    logger("no original function " + name2 + " to wrap");
    return;
  }
  if (!wrapper) {
    logger("no wrapper function");
    logger(new Error().stack);
    return;
  }
  if (!isFunction$1(nodule[name2]) || !isFunction$1(wrapper)) {
    logger("original object and wrapper must be functions");
    return;
  }
  var original = nodule[name2];
  var wrapped = wrapper(original, name2);
  defineProperty(wrapped, "__original", original);
  defineProperty(wrapped, "__unwrap", function() {
    if (nodule[name2] === wrapped) defineProperty(nodule, name2, original);
  });
  defineProperty(wrapped, "__wrapped", true);
  defineProperty(nodule, name2, wrapped);
  return wrapped;
}
function massWrap(nodules, names, wrapper) {
  if (!nodules) {
    logger("must provide one or more modules to patch");
    logger(new Error().stack);
    return;
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules];
  }
  if (!(names && Array.isArray(names))) {
    logger("must provide one or more functions to wrap on modules");
    return;
  }
  nodules.forEach(function(nodule) {
    names.forEach(function(name2) {
      wrap(nodule, name2, wrapper);
    });
  });
}
function unwrap(nodule, name2) {
  if (!nodule || !nodule[name2]) {
    logger("no function to unwrap.");
    logger(new Error().stack);
    return;
  }
  if (!nodule[name2].__unwrap) {
    logger("no original to unwrap to -- has " + name2 + " already been unwrapped?");
  } else {
    return nodule[name2].__unwrap();
  }
}
function massUnwrap(nodules, names) {
  if (!nodules) {
    logger("must provide one or more modules to patch");
    logger(new Error().stack);
    return;
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules];
  }
  if (!(names && Array.isArray(names))) {
    logger("must provide one or more functions to unwrap on modules");
    return;
  }
  nodules.forEach(function(nodule) {
    names.forEach(function(name2) {
      unwrap(nodule, name2);
    });
  });
}
shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap;
var shimmer_1 = shimmer;
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
var InstrumentationAbstract = (
  /** @class */
  function() {
    function InstrumentationAbstract2(instrumentationName, instrumentationVersion, config) {
      this.instrumentationName = instrumentationName;
      this.instrumentationVersion = instrumentationVersion;
      this._config = {};
      this._wrap = shimmer_1.wrap;
      this._unwrap = shimmer_1.unwrap;
      this._massWrap = shimmer_1.massWrap;
      this._massUnwrap = shimmer_1.massUnwrap;
      this.setConfig(config);
      this._diag = diag.createComponentLogger({
        namespace: instrumentationName
      });
      this._tracer = trace.getTracer(instrumentationName, instrumentationVersion);
      this._meter = metrics.getMeter(instrumentationName, instrumentationVersion);
      this._logger = logs.getLogger(instrumentationName, instrumentationVersion);
      this._updateMetricInstruments();
    }
    Object.defineProperty(InstrumentationAbstract2.prototype, "meter", {
      /* Returns meter */
      get: function() {
        return this._meter;
      },
      enumerable: false,
      configurable: true
    });
    InstrumentationAbstract2.prototype.setMeterProvider = function(meterProvider) {
      this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
      this._updateMetricInstruments();
    };
    Object.defineProperty(InstrumentationAbstract2.prototype, "logger", {
      /* Returns logger */
      get: function() {
        return this._logger;
      },
      enumerable: false,
      configurable: true
    });
    InstrumentationAbstract2.prototype.setLoggerProvider = function(loggerProvider) {
      this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
    };
    InstrumentationAbstract2.prototype.getModuleDefinitions = function() {
      var _a3;
      var initResult = (_a3 = this.init()) !== null && _a3 !== void 0 ? _a3 : [];
      if (!Array.isArray(initResult)) {
        return [initResult];
      }
      return initResult;
    };
    InstrumentationAbstract2.prototype._updateMetricInstruments = function() {
      return;
    };
    InstrumentationAbstract2.prototype.getConfig = function() {
      return this._config;
    };
    InstrumentationAbstract2.prototype.setConfig = function(config) {
      this._config = __assign$2({ enabled: true }, config);
    };
    InstrumentationAbstract2.prototype.setTracerProvider = function(tracerProvider) {
      this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    };
    Object.defineProperty(InstrumentationAbstract2.prototype, "tracer", {
      /* Returns tracer */
      get: function() {
        return this._tracer;
      },
      enumerable: false,
      configurable: true
    });
    InstrumentationAbstract2.prototype._runSpanCustomizationHook = function(hookHandler, triggerName, span, info) {
      if (!hookHandler) {
        return;
      }
      try {
        hookHandler(span, info);
      } catch (e) {
        this._diag.error("Error running span customization hook due to exception in handler", { triggerName }, e);
      }
    };
    return InstrumentationAbstract2;
  }()
);
var requireInTheMiddle = { exports: {} };
var os$2 = require$$1$3;
var homedir$2 = os$2.homedir || function homedir() {
  var home = process.env.HOME;
  var user = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;
  if (process.platform === "win32") {
    return process.env.USERPROFILE || process.env.HOMEDRIVE + process.env.HOMEPATH || home || null;
  }
  if (process.platform === "darwin") {
    return home || (user ? "/Users/" + user : null);
  }
  if (process.platform === "linux") {
    return home || (process.getuid() === 0 ? "/root" : user ? "/home/" + user : null);
  }
  return home || null;
};
var caller$2 = function() {
  var origPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = function(_, stack2) {
    return stack2;
  };
  var stack = new Error().stack;
  Error.prepareStackTrace = origPrepareStackTrace;
  return stack[2].getFileName();
};
var pathParse = { exports: {} };
var hasRequiredPathParse;
function requirePathParse() {
  if (hasRequiredPathParse) return pathParse.exports;
  hasRequiredPathParse = 1;
  var isWindows = process.platform === "win32";
  var splitWindowsRe = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/;
  var win32 = {};
  function win32SplitPath(filename) {
    return splitWindowsRe.exec(filename).slice(1);
  }
  win32.parse = function(pathString) {
    if (typeof pathString !== "string") {
      throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
      );
    }
    var allParts = win32SplitPath(pathString);
    if (!allParts || allParts.length !== 5) {
      throw new TypeError("Invalid path '" + pathString + "'");
    }
    return {
      root: allParts[1],
      dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),
      base: allParts[2],
      ext: allParts[4],
      name: allParts[3]
    };
  };
  var splitPathRe2 = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/;
  var posix = {};
  function posixSplitPath(filename) {
    return splitPathRe2.exec(filename).slice(1);
  }
  posix.parse = function(pathString) {
    if (typeof pathString !== "string") {
      throw new TypeError(
        "Parameter 'pathString' must be a string, not " + typeof pathString
      );
    }
    var allParts = posixSplitPath(pathString);
    if (!allParts || allParts.length !== 5) {
      throw new TypeError("Invalid path '" + pathString + "'");
    }
    return {
      root: allParts[1],
      dir: allParts[0].slice(0, -1),
      base: allParts[2],
      ext: allParts[4],
      name: allParts[3]
    };
  };
  if (isWindows)
    pathParse.exports = win32.parse;
  else
    pathParse.exports = posix.parse;
  pathParse.exports.posix = posix.parse;
  pathParse.exports.win32 = win32.parse;
  return pathParse.exports;
}
var path$8 = path$f;
var parse$1 = path$8.parse || requirePathParse();
var getNodeModulesDirs = function getNodeModulesDirs2(absoluteStart, modules) {
  var prefix = "/";
  if (/^([A-Za-z]:)/.test(absoluteStart)) {
    prefix = "";
  } else if (/^\\\\/.test(absoluteStart)) {
    prefix = "\\\\";
  }
  var paths = [absoluteStart];
  var parsed2 = parse$1(absoluteStart);
  while (parsed2.dir !== paths[paths.length - 1]) {
    paths.push(parsed2.dir);
    parsed2 = parse$1(parsed2.dir);
  }
  return paths.reduce(function(dirs, aPath) {
    return dirs.concat(modules.map(function(moduleDir) {
      return path$8.resolve(prefix, aPath, moduleDir);
    }));
  }, []);
};
var nodeModulesPaths$2 = function nodeModulesPaths(start, opts, request) {
  var modules = opts && opts.moduleDirectory ? [].concat(opts.moduleDirectory) : ["node_modules"];
  if (opts && typeof opts.paths === "function") {
    return opts.paths(
      request,
      start,
      function() {
        return getNodeModulesDirs(start, modules);
      },
      opts
    );
  }
  var dirs = getNodeModulesDirs(start, modules);
  return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
};
const path$7 = path$f;
var normalizeOptions$3 = function(_, opts) {
  opts = opts || {};
  if (opts.forceNodeResolution || !process.versions.pnp)
    return opts;
  const { findPnpApi } = require$$1$5;
  const runPnpResolution = (request, basedir) => {
    const parts = request.match(/^((?:@[^/]+\/)?[^/]+)(\/.*)?/);
    if (!parts)
      throw new Error(`Assertion failed: Expected the "resolve" package to call the "paths" callback with package names only (got "${request}")`);
    if (basedir.charAt(basedir.length - 1) !== `/`)
      basedir = path$7.join(basedir, `/`);
    const api = findPnpApi(basedir);
    if (api === null)
      return void 0;
    let manifestPath;
    try {
      manifestPath = api.resolveToUnqualified(`${parts[1]}/package.json`, basedir, { considerBuiltins: false });
    } catch (err) {
      return null;
    }
    if (manifestPath === null)
      throw new Error(`Assertion failed: The resolution thinks that "${parts[1]}" is a Node builtin`);
    const packagePath = path$7.dirname(manifestPath);
    const unqualifiedPath = typeof parts[2] !== `undefined` ? path$7.join(packagePath, parts[2]) : packagePath;
    return { packagePath, unqualifiedPath };
  };
  const runPnpResolutionOnArray = (request, paths2) => {
    for (let i = 0; i < paths2.length; i++) {
      const resolution = runPnpResolution(request, paths2[i]);
      if (resolution || i === paths2.length - 1) {
        return resolution;
      }
    }
    return null;
  };
  const originalPaths = Array.isArray(opts.paths) ? opts.paths : [];
  const packageIterator = (request, basedir, getCandidates, opts2) => {
    const pathsToTest = [basedir].concat(originalPaths);
    const resolution = runPnpResolutionOnArray(request, pathsToTest);
    if (resolution == null)
      return getCandidates();
    return [resolution.unqualifiedPath];
  };
  const paths = (request, basedir, getNodeModulePaths, opts2) => {
    const pathsToTest = [basedir].concat(originalPaths);
    const resolution = runPnpResolutionOnArray(request, pathsToTest);
    if (resolution == null)
      return getNodeModulePaths().concat(originalPaths);
    let nodeModules = path$7.dirname(resolution.packagePath);
    if (request.match(/^@[^/]+\//))
      nodeModules = path$7.dirname(nodeModules);
    return [nodeModules];
  };
  let isInsideIterator = false;
  if (!opts.__skipPackageIterator) {
    opts.packageIterator = function(request, basedir, getCandidates, opts2) {
      isInsideIterator = true;
      try {
        return packageIterator(request, basedir, getCandidates, opts2);
      } finally {
        isInsideIterator = false;
      }
    };
  }
  opts.paths = function(request, basedir, getNodeModulePaths, opts2) {
    if (isInsideIterator)
      return getNodeModulePaths().concat(originalPaths);
    return paths(request, basedir, getNodeModulePaths);
  };
  return opts;
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty2(a, b) {
  var arr = [];
  for (var i = 0; i < a.length; i += 1) {
    arr[i] = a[i];
  }
  for (var j = 0; j < b.length; j += 1) {
    arr[j + a.length] = b[j];
  }
  return arr;
};
var slicy = function slicy2(arrLike, offset) {
  var arr = [];
  for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
    arr[j] = arrLike[i];
  }
  return arr;
};
var joiny = function(arr, joiner) {
  var str = "";
  for (var i = 0; i < arr.length; i += 1) {
    str += arr[i];
    if (i + 1 < arr.length) {
      str += joiner;
    }
  }
  return str;
};
var implementation$1 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr.apply(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slicy(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        concatty(args, arguments)
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    }
    return target.apply(
      that,
      concatty(args, arguments)
    );
  };
  var boundLength = max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs[i] = "$" + i;
  }
  bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind2 = functionBind;
var hasown = bind2.call(call, $hasOwn);
const assert$1 = true;
const async_hooks$1 = ">= 8";
const buffer_ieee754$1 = ">= 0.5 && < 0.9.7";
const buffer$1 = true;
const child_process$1 = true;
const cluster$1 = ">= 0.5";
const console$2 = true;
const constants$1 = true;
const crypto$1 = true;
const _debug_agent$1 = ">= 1 && < 8";
const _debugger$1 = "< 8";
const dgram$1 = true;
const diagnostics_channel$1 = [
  ">= 14.17 && < 15",
  ">= 15.1"
];
const dns$1 = true;
const domain$1 = ">= 0.7.12";
const events$1 = true;
const freelist$1 = "< 6";
const fs$3 = true;
const _http_agent$1 = ">= 0.11.1";
const _http_client$1 = ">= 0.11.1";
const _http_common$1 = ">= 0.11.1";
const _http_incoming$1 = ">= 0.11.1";
const _http_outgoing$1 = ">= 0.11.1";
const _http_server$1 = ">= 0.11.1";
const http$1 = true;
const http2$1 = ">= 8.8";
const https$1 = true;
const inspector$1 = ">= 8";
const _linklist$1 = "< 8";
const module$2 = true;
const net$1 = true;
const os$1 = true;
const path$6 = true;
const perf_hooks$1 = ">= 8.5";
const process$2 = ">= 1";
const punycode$1 = ">= 0.5";
const querystring$1 = true;
const readline$1 = true;
const repl$1 = true;
const smalloc$1 = ">= 0.11.5 && < 3";
const _stream_duplex$1 = ">= 0.9.4";
const _stream_transform$1 = ">= 0.9.4";
const _stream_wrap$1 = ">= 1.4.1";
const _stream_passthrough$1 = ">= 0.9.4";
const _stream_readable$1 = ">= 0.9.4";
const _stream_writable$1 = ">= 0.9.4";
const stream$1 = true;
const string_decoder$1 = true;
const sys$1 = [
  ">= 0.4 && < 0.7",
  ">= 0.8"
];
const timers$1 = true;
const _tls_common$1 = ">= 0.11.13";
const _tls_legacy$1 = ">= 0.11.3 && < 10";
const _tls_wrap$1 = ">= 0.11.3";
const tls$1 = true;
const trace_events$1 = ">= 10";
const tty$1 = true;
const url$1 = true;
const util$1 = true;
const v8$1 = ">= 1";
const vm$1 = true;
const wasi$1 = [
  ">= 13.4 && < 13.5",
  ">= 18.17 && < 19",
  ">= 20"
];
const worker_threads$1 = ">= 11.7";
const zlib$1 = ">= 0.5";
const require$$1$2 = {
  assert: assert$1,
  "node:assert": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "assert/strict": ">= 15",
  "node:assert/strict": ">= 16",
  async_hooks: async_hooks$1,
  "node:async_hooks": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  buffer_ieee754: buffer_ieee754$1,
  buffer: buffer$1,
  "node:buffer": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  child_process: child_process$1,
  "node:child_process": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  cluster: cluster$1,
  "node:cluster": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  console: console$2,
  "node:console": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  constants: constants$1,
  "node:constants": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  crypto: crypto$1,
  "node:crypto": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _debug_agent: _debug_agent$1,
  _debugger: _debugger$1,
  dgram: dgram$1,
  "node:dgram": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  diagnostics_channel: diagnostics_channel$1,
  "node:diagnostics_channel": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  dns: dns$1,
  "node:dns": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "dns/promises": ">= 15",
  "node:dns/promises": ">= 16",
  domain: domain$1,
  "node:domain": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  events: events$1,
  "node:events": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  freelist: freelist$1,
  fs: fs$3,
  "node:fs": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "fs/promises": [
    ">= 10 && < 10.1",
    ">= 14"
  ],
  "node:fs/promises": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_agent: _http_agent$1,
  "node:_http_agent": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_client: _http_client$1,
  "node:_http_client": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_common: _http_common$1,
  "node:_http_common": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_incoming: _http_incoming$1,
  "node:_http_incoming": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_outgoing: _http_outgoing$1,
  "node:_http_outgoing": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_server: _http_server$1,
  "node:_http_server": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  http: http$1,
  "node:http": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  http2: http2$1,
  "node:http2": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  https: https$1,
  "node:https": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  inspector: inspector$1,
  "node:inspector": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "inspector/promises": [
    ">= 19"
  ],
  "node:inspector/promises": [
    ">= 19"
  ],
  _linklist: _linklist$1,
  module: module$2,
  "node:module": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  net: net$1,
  "node:net": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "node-inspect/lib/_inspect": ">= 7.6 && < 12",
  "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12",
  "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12",
  os: os$1,
  "node:os": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  path: path$6,
  "node:path": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "path/posix": ">= 15.3",
  "node:path/posix": ">= 16",
  "path/win32": ">= 15.3",
  "node:path/win32": ">= 16",
  perf_hooks: perf_hooks$1,
  "node:perf_hooks": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  process: process$2,
  "node:process": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  punycode: punycode$1,
  "node:punycode": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  querystring: querystring$1,
  "node:querystring": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  readline: readline$1,
  "node:readline": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "readline/promises": ">= 17",
  "node:readline/promises": ">= 17",
  repl: repl$1,
  "node:repl": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "node:sea": [
    ">= 20.12 && < 21",
    ">= 21.7"
  ],
  smalloc: smalloc$1,
  "node:sqlite": [
    ">= 22.13 && < 23",
    ">= 23.4"
  ],
  _stream_duplex: _stream_duplex$1,
  "node:_stream_duplex": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_transform: _stream_transform$1,
  "node:_stream_transform": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_wrap: _stream_wrap$1,
  "node:_stream_wrap": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_passthrough: _stream_passthrough$1,
  "node:_stream_passthrough": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_readable: _stream_readable$1,
  "node:_stream_readable": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_writable: _stream_writable$1,
  "node:_stream_writable": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  stream: stream$1,
  "node:stream": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "stream/consumers": ">= 16.7",
  "node:stream/consumers": ">= 16.7",
  "stream/promises": ">= 15",
  "node:stream/promises": ">= 16",
  "stream/web": ">= 16.5",
  "node:stream/web": ">= 16.5",
  string_decoder: string_decoder$1,
  "node:string_decoder": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  sys: sys$1,
  "node:sys": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "test/reporters": ">= 19.9 && < 20.2",
  "node:test/reporters": [
    ">= 18.17 && < 19",
    ">= 19.9",
    ">= 20"
  ],
  "test/mock_loader": ">= 22.3 && < 22.7",
  "node:test/mock_loader": ">= 22.3 && < 22.7",
  "node:test": [
    ">= 16.17 && < 17",
    ">= 18"
  ],
  timers: timers$1,
  "node:timers": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "timers/promises": ">= 15",
  "node:timers/promises": ">= 16",
  _tls_common: _tls_common$1,
  "node:_tls_common": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _tls_legacy: _tls_legacy$1,
  _tls_wrap: _tls_wrap$1,
  "node:_tls_wrap": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  tls: tls$1,
  "node:tls": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  trace_events: trace_events$1,
  "node:trace_events": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  tty: tty$1,
  "node:tty": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  url: url$1,
  "node:url": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  util: util$1,
  "node:util": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "util/types": ">= 15.3",
  "node:util/types": ">= 16",
  "v8/tools/arguments": ">= 10 && < 12",
  "v8/tools/codemap": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/consarray": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/csvparser": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/logreader": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/profile_view": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/splaytree": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  v8: v8$1,
  "node:v8": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  vm: vm$1,
  "node:vm": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  wasi: wasi$1,
  "node:wasi": [
    ">= 18.17 && < 19",
    ">= 20"
  ],
  worker_threads: worker_threads$1,
  "node:worker_threads": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  zlib: zlib$1,
  "node:zlib": [
    ">= 14.18 && < 15",
    ">= 16"
  ]
};
var hasOwn = hasown;
function specifierIncluded(current2, specifier) {
  var nodeParts = current2.split(".");
  var parts = specifier.split(" ");
  var op = parts.length > 1 ? parts[0] : "=";
  var versionParts = (parts.length > 1 ? parts[1] : parts[0]).split(".");
  for (var i = 0; i < 3; ++i) {
    var cur = parseInt(nodeParts[i] || 0, 10);
    var ver = parseInt(versionParts[i] || 0, 10);
    if (cur === ver) {
      continue;
    }
    if (op === "<") {
      return cur < ver;
    }
    if (op === ">=") {
      return cur >= ver;
    }
    return false;
  }
  return op === ">=";
}
function matchesRange(current2, range2) {
  var specifiers2 = range2.split(/ ?&& ?/);
  if (specifiers2.length === 0) {
    return false;
  }
  for (var i = 0; i < specifiers2.length; ++i) {
    if (!specifierIncluded(current2, specifiers2[i])) {
      return false;
    }
  }
  return true;
}
function versionIncluded(nodeVersion, specifierValue) {
  if (typeof specifierValue === "boolean") {
    return specifierValue;
  }
  var current2 = typeof nodeVersion === "undefined" ? process.versions && process.versions.node : nodeVersion;
  if (typeof current2 !== "string") {
    throw new TypeError(typeof nodeVersion === "undefined" ? "Unable to determine current node version" : "If provided, a valid node version is required");
  }
  if (specifierValue && typeof specifierValue === "object") {
    for (var i = 0; i < specifierValue.length; ++i) {
      if (matchesRange(current2, specifierValue[i])) {
        return true;
      }
    }
    return false;
  }
  return matchesRange(current2, specifierValue);
}
var data$1 = require$$1$2;
var isCoreModule$2 = function isCore(x, nodeVersion) {
  return hasOwn(data$1, x) && versionIncluded(nodeVersion, data$1[x]);
};
var fs$2 = require$$0$1;
var getHomedir$1 = homedir$2;
var path$5 = path$f;
var caller$1 = caller$2;
var nodeModulesPaths$1 = nodeModulesPaths$2;
var normalizeOptions$2 = normalizeOptions$3;
var isCore$3 = isCoreModule$2;
var realpathFS$1 = process.platform !== "win32" && fs$2.realpath && typeof fs$2.realpath.native === "function" ? fs$2.realpath.native : fs$2.realpath;
var homedir$1 = getHomedir$1();
var defaultPaths$1 = function() {
  return [
    path$5.join(homedir$1, ".node_modules"),
    path$5.join(homedir$1, ".node_libraries")
  ];
};
var defaultIsFile$1 = function isFile(file2, cb) {
  fs$2.stat(file2, function(err, stat) {
    if (!err) {
      return cb(null, stat.isFile() || stat.isFIFO());
    }
    if (err.code === "ENOENT" || err.code === "ENOTDIR") return cb(null, false);
    return cb(err);
  });
};
var defaultIsDir$1 = function isDirectory(dir, cb) {
  fs$2.stat(dir, function(err, stat) {
    if (!err) {
      return cb(null, stat.isDirectory());
    }
    if (err.code === "ENOENT" || err.code === "ENOTDIR") return cb(null, false);
    return cb(err);
  });
};
var defaultRealpath = function realpath(x, cb) {
  realpathFS$1(x, function(realpathErr, realPath) {
    if (realpathErr && realpathErr.code !== "ENOENT") cb(realpathErr);
    else cb(null, realpathErr ? x : realPath);
  });
};
var maybeRealpath = function maybeRealpath2(realpath2, x, opts, cb) {
  if (opts && opts.preserveSymlinks === false) {
    realpath2(x, cb);
  } else {
    cb(null, x);
  }
};
var defaultReadPackage = function defaultReadPackage2(readFile, pkgfile, cb) {
  readFile(pkgfile, function(readFileErr, body) {
    if (readFileErr) cb(readFileErr);
    else {
      try {
        var pkg = JSON.parse(body);
        cb(null, pkg);
      } catch (jsonErr) {
        cb(null);
      }
    }
  });
};
var getPackageCandidates$1 = function getPackageCandidates(x, start, opts) {
  var dirs = nodeModulesPaths$1(start, opts, x);
  for (var i = 0; i < dirs.length; i++) {
    dirs[i] = path$5.join(dirs[i], x);
  }
  return dirs;
};
var async$1 = function resolve(x, options, callback) {
  var cb = callback;
  var opts = options;
  if (typeof options === "function") {
    cb = opts;
    opts = {};
  }
  if (typeof x !== "string") {
    var err = new TypeError("Path must be a string.");
    return process.nextTick(function() {
      cb(err);
    });
  }
  opts = normalizeOptions$2(x, opts);
  var isFile3 = opts.isFile || defaultIsFile$1;
  var isDirectory3 = opts.isDirectory || defaultIsDir$1;
  var readFile = opts.readFile || fs$2.readFile;
  var realpath2 = opts.realpath || defaultRealpath;
  var readPackage = opts.readPackage || defaultReadPackage;
  if (opts.readFile && opts.readPackage) {
    var conflictErr = new TypeError("`readFile` and `readPackage` are mutually exclusive.");
    return process.nextTick(function() {
      cb(conflictErr);
    });
  }
  var packageIterator = opts.packageIterator;
  var extensions = opts.extensions || [".js"];
  var includeCoreModules = opts.includeCoreModules !== false;
  var basedir = opts.basedir || path$5.dirname(caller$1());
  var parent = opts.filename || basedir;
  opts.paths = opts.paths || defaultPaths$1();
  var absoluteStart = path$5.resolve(basedir);
  maybeRealpath(
    realpath2,
    absoluteStart,
    opts,
    function(err2, realStart) {
      if (err2) cb(err2);
      else init2(realStart);
    }
  );
  var res;
  function init2(basedir2) {
    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
      res = path$5.resolve(basedir2, x);
      if (x === "." || x === ".." || x.slice(-1) === "/") res += "/";
      if (/\/$/.test(x) && res === basedir2) {
        loadAsDirectory(res, opts.package, onfile);
      } else loadAsFile(res, opts.package, onfile);
    } else if (includeCoreModules && isCore$3(x)) {
      return cb(null, x);
    } else loadNodeModules(x, basedir2, function(err2, n, pkg) {
      if (err2) cb(err2);
      else if (n) {
        return maybeRealpath(realpath2, n, opts, function(err3, realN) {
          if (err3) {
            cb(err3);
          } else {
            cb(null, realN, pkg);
          }
        });
      } else {
        var moduleError = new Error("Cannot find module '" + x + "' from '" + parent + "'");
        moduleError.code = "MODULE_NOT_FOUND";
        cb(moduleError);
      }
    });
  }
  function onfile(err2, m, pkg) {
    if (err2) cb(err2);
    else if (m) cb(null, m, pkg);
    else loadAsDirectory(res, function(err3, d, pkg2) {
      if (err3) cb(err3);
      else if (d) {
        maybeRealpath(realpath2, d, opts, function(err4, realD) {
          if (err4) {
            cb(err4);
          } else {
            cb(null, realD, pkg2);
          }
        });
      } else {
        var moduleError = new Error("Cannot find module '" + x + "' from '" + parent + "'");
        moduleError.code = "MODULE_NOT_FOUND";
        cb(moduleError);
      }
    });
  }
  function loadAsFile(x2, thePackage, callback2) {
    var loadAsFilePackage = thePackage;
    var cb2 = callback2;
    if (typeof loadAsFilePackage === "function") {
      cb2 = loadAsFilePackage;
      loadAsFilePackage = void 0;
    }
    var exts = [""].concat(extensions);
    load(exts, x2, loadAsFilePackage);
    function load(exts2, x3, loadPackage) {
      if (exts2.length === 0) return cb2(null, void 0, loadPackage);
      var file2 = x3 + exts2[0];
      var pkg = loadPackage;
      if (pkg) onpkg(null, pkg);
      else loadpkg(path$5.dirname(file2), onpkg);
      function onpkg(err2, pkg_, dir) {
        pkg = pkg_;
        if (err2) return cb2(err2);
        if (dir && pkg && opts.pathFilter) {
          var rfile = path$5.relative(dir, file2);
          var rel = rfile.slice(0, rfile.length - exts2[0].length);
          var r = opts.pathFilter(pkg, x3, rel);
          if (r) return load(
            [""].concat(extensions.slice()),
            path$5.resolve(dir, r),
            pkg
          );
        }
        isFile3(file2, onex);
      }
      function onex(err2, ex) {
        if (err2) return cb2(err2);
        if (ex) return cb2(null, file2, pkg);
        load(exts2.slice(1), x3, pkg);
      }
    }
  }
  function loadpkg(dir, cb2) {
    if (dir === "" || dir === "/") return cb2(null);
    if (process.platform === "win32" && /^\w:[/\\]*$/.test(dir)) {
      return cb2(null);
    }
    if (/[/\\]node_modules[/\\]*$/.test(dir)) return cb2(null);
    maybeRealpath(realpath2, dir, opts, function(unwrapErr, pkgdir) {
      if (unwrapErr) return loadpkg(path$5.dirname(dir), cb2);
      var pkgfile = path$5.join(pkgdir, "package.json");
      isFile3(pkgfile, function(err2, ex) {
        if (!ex) return loadpkg(path$5.dirname(dir), cb2);
        readPackage(readFile, pkgfile, function(err3, pkgParam) {
          if (err3) cb2(err3);
          var pkg = pkgParam;
          if (pkg && opts.packageFilter) {
            pkg = opts.packageFilter(pkg, pkgfile);
          }
          cb2(null, pkg, dir);
        });
      });
    });
  }
  function loadAsDirectory(x2, loadAsDirectoryPackage, callback2) {
    var cb2 = callback2;
    var fpkg = loadAsDirectoryPackage;
    if (typeof fpkg === "function") {
      cb2 = fpkg;
      fpkg = opts.package;
    }
    maybeRealpath(realpath2, x2, opts, function(unwrapErr, pkgdir) {
      if (unwrapErr) return cb2(unwrapErr);
      var pkgfile = path$5.join(pkgdir, "package.json");
      isFile3(pkgfile, function(err2, ex) {
        if (err2) return cb2(err2);
        if (!ex) return loadAsFile(path$5.join(x2, "index"), fpkg, cb2);
        readPackage(readFile, pkgfile, function(err3, pkgParam) {
          if (err3) return cb2(err3);
          var pkg = pkgParam;
          if (pkg && opts.packageFilter) {
            pkg = opts.packageFilter(pkg, pkgfile);
          }
          if (pkg && pkg.main) {
            if (typeof pkg.main !== "string") {
              var mainError = new TypeError("package “" + pkg.name + "” `main` must be a string");
              mainError.code = "INVALID_PACKAGE_MAIN";
              return cb2(mainError);
            }
            if (pkg.main === "." || pkg.main === "./") {
              pkg.main = "index";
            }
            loadAsFile(path$5.resolve(x2, pkg.main), pkg, function(err4, m, pkg2) {
              if (err4) return cb2(err4);
              if (m) return cb2(null, m, pkg2);
              if (!pkg2) return loadAsFile(path$5.join(x2, "index"), pkg2, cb2);
              var dir = path$5.resolve(x2, pkg2.main);
              loadAsDirectory(dir, pkg2, function(err5, n, pkg3) {
                if (err5) return cb2(err5);
                if (n) return cb2(null, n, pkg3);
                loadAsFile(path$5.join(x2, "index"), pkg3, cb2);
              });
            });
            return;
          }
          loadAsFile(path$5.join(x2, "/index"), pkg, cb2);
        });
      });
    });
  }
  function processDirs(cb2, dirs) {
    if (dirs.length === 0) return cb2(null, void 0);
    var dir = dirs[0];
    isDirectory3(path$5.dirname(dir), isdir);
    function isdir(err2, isdir2) {
      if (err2) return cb2(err2);
      if (!isdir2) return processDirs(cb2, dirs.slice(1));
      loadAsFile(dir, opts.package, onfile2);
    }
    function onfile2(err2, m, pkg) {
      if (err2) return cb2(err2);
      if (m) return cb2(null, m, pkg);
      loadAsDirectory(dir, opts.package, ondir);
    }
    function ondir(err2, n, pkg) {
      if (err2) return cb2(err2);
      if (n) return cb2(null, n, pkg);
      processDirs(cb2, dirs.slice(1));
    }
  }
  function loadNodeModules(x2, start, cb2) {
    var thunk = function() {
      return getPackageCandidates$1(x2, start, opts);
    };
    processDirs(
      cb2,
      packageIterator ? packageIterator(x2, start, thunk, opts) : thunk()
    );
  }
};
const assert = true;
const async_hooks = ">= 8";
const buffer_ieee754 = ">= 0.5 && < 0.9.7";
const buffer = true;
const child_process = true;
const cluster = ">= 0.5";
const console$1 = true;
const constants = true;
const crypto = true;
const _debug_agent = ">= 1 && < 8";
const _debugger = "< 8";
const dgram = true;
const diagnostics_channel = [
  ">= 14.17 && < 15",
  ">= 15.1"
];
const dns = true;
const domain = ">= 0.7.12";
const events = true;
const freelist = "< 6";
const fs$1 = true;
const _http_agent = ">= 0.11.1";
const _http_client = ">= 0.11.1";
const _http_common = ">= 0.11.1";
const _http_incoming = ">= 0.11.1";
const _http_outgoing = ">= 0.11.1";
const _http_server = ">= 0.11.1";
const http = true;
const http2 = ">= 8.8";
const https = true;
const inspector = ">= 8";
const _linklist = "< 8";
const module$1 = true;
const net = true;
const os = true;
const path$4 = true;
const perf_hooks = ">= 8.5";
const process$1 = ">= 1";
const punycode = ">= 0.5";
const querystring = true;
const readline = true;
const repl = true;
const smalloc = ">= 0.11.5 && < 3";
const _stream_duplex = ">= 0.9.4";
const _stream_transform = ">= 0.9.4";
const _stream_wrap = ">= 1.4.1";
const _stream_passthrough = ">= 0.9.4";
const _stream_readable = ">= 0.9.4";
const _stream_writable = ">= 0.9.4";
const stream = true;
const string_decoder = true;
const sys = [
  ">= 0.4 && < 0.7",
  ">= 0.8"
];
const timers = true;
const _tls_common = ">= 0.11.13";
const _tls_legacy = ">= 0.11.3 && < 10";
const _tls_wrap = ">= 0.11.3";
const tls = true;
const trace_events = ">= 10";
const tty = true;
const url = true;
const util = true;
const v8 = ">= 1";
const vm = true;
const wasi = [
  ">= 13.4 && < 13.5",
  ">= 18.17 && < 19",
  ">= 20"
];
const worker_threads = ">= 11.7";
const zlib = ">= 0.5";
const require$$1$1 = {
  assert,
  "node:assert": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "assert/strict": ">= 15",
  "node:assert/strict": ">= 16",
  async_hooks,
  "node:async_hooks": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  buffer_ieee754,
  buffer,
  "node:buffer": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  child_process,
  "node:child_process": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  cluster,
  "node:cluster": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  console: console$1,
  "node:console": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  constants,
  "node:constants": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  crypto,
  "node:crypto": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _debug_agent,
  _debugger,
  dgram,
  "node:dgram": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  diagnostics_channel,
  "node:diagnostics_channel": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  dns,
  "node:dns": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "dns/promises": ">= 15",
  "node:dns/promises": ">= 16",
  domain,
  "node:domain": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  events,
  "node:events": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  freelist,
  fs: fs$1,
  "node:fs": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "fs/promises": [
    ">= 10 && < 10.1",
    ">= 14"
  ],
  "node:fs/promises": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_agent,
  "node:_http_agent": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_client,
  "node:_http_client": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_common,
  "node:_http_common": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_incoming,
  "node:_http_incoming": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_outgoing,
  "node:_http_outgoing": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _http_server,
  "node:_http_server": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  http,
  "node:http": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  http2,
  "node:http2": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  https,
  "node:https": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  inspector,
  "node:inspector": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "inspector/promises": [
    ">= 19"
  ],
  "node:inspector/promises": [
    ">= 19"
  ],
  _linklist,
  module: module$1,
  "node:module": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  net,
  "node:net": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "node-inspect/lib/_inspect": ">= 7.6 && < 12",
  "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12",
  "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12",
  os,
  "node:os": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  path: path$4,
  "node:path": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "path/posix": ">= 15.3",
  "node:path/posix": ">= 16",
  "path/win32": ">= 15.3",
  "node:path/win32": ">= 16",
  perf_hooks,
  "node:perf_hooks": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  process: process$1,
  "node:process": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  punycode,
  "node:punycode": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  querystring,
  "node:querystring": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  readline,
  "node:readline": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "readline/promises": ">= 17",
  "node:readline/promises": ">= 17",
  repl,
  "node:repl": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "node:sea": [
    ">= 20.12 && < 21",
    ">= 21.7"
  ],
  smalloc,
  "node:sqlite": ">= 23.4",
  _stream_duplex,
  "node:_stream_duplex": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_transform,
  "node:_stream_transform": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_wrap,
  "node:_stream_wrap": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_passthrough,
  "node:_stream_passthrough": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_readable,
  "node:_stream_readable": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _stream_writable,
  "node:_stream_writable": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  stream,
  "node:stream": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "stream/consumers": ">= 16.7",
  "node:stream/consumers": ">= 16.7",
  "stream/promises": ">= 15",
  "node:stream/promises": ">= 16",
  "stream/web": ">= 16.5",
  "node:stream/web": ">= 16.5",
  string_decoder,
  "node:string_decoder": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  sys,
  "node:sys": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "test/reporters": ">= 19.9 && < 20.2",
  "node:test/reporters": [
    ">= 18.17 && < 19",
    ">= 19.9",
    ">= 20"
  ],
  "test/mock_loader": ">= 22.3 && < 22.7",
  "node:test/mock_loader": ">= 22.3 && < 22.7",
  "node:test": [
    ">= 16.17 && < 17",
    ">= 18"
  ],
  timers,
  "node:timers": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "timers/promises": ">= 15",
  "node:timers/promises": ">= 16",
  _tls_common,
  "node:_tls_common": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  _tls_legacy,
  _tls_wrap,
  "node:_tls_wrap": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  tls,
  "node:tls": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  trace_events,
  "node:trace_events": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  tty,
  "node:tty": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  url,
  "node:url": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  util,
  "node:util": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  "util/types": ">= 15.3",
  "node:util/types": ">= 16",
  "v8/tools/arguments": ">= 10 && < 12",
  "v8/tools/codemap": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/consarray": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/csvparser": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/logreader": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/profile_view": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  "v8/tools/splaytree": [
    ">= 4.4 && < 5",
    ">= 5.2 && < 12"
  ],
  v8,
  "node:v8": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  vm,
  "node:vm": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  wasi,
  "node:wasi": [
    ">= 18.17 && < 19",
    ">= 20"
  ],
  worker_threads,
  "node:worker_threads": [
    ">= 14.18 && < 15",
    ">= 16"
  ],
  zlib,
  "node:zlib": [
    ">= 14.18 && < 15",
    ">= 16"
  ]
};
var isCoreModule$1 = isCoreModule$2;
var data = require$$1$1;
var core = {};
for (var mod in data) {
  if (Object.prototype.hasOwnProperty.call(data, mod)) {
    core[mod] = isCoreModule$1(mod);
  }
}
var core_1$1 = core;
var isCoreModule = isCoreModule$2;
var isCore$2 = function isCore2(x) {
  return isCoreModule(x);
};
var isCore$1 = isCoreModule$2;
var fs = require$$0$1;
var path$3 = path$f;
var getHomedir = homedir$2;
var caller = caller$2;
var nodeModulesPaths2 = nodeModulesPaths$2;
var normalizeOptions$1 = normalizeOptions$3;
var realpathFS = process.platform !== "win32" && fs.realpathSync && typeof fs.realpathSync.native === "function" ? fs.realpathSync.native : fs.realpathSync;
var homedir2 = getHomedir();
var defaultPaths = function() {
  return [
    path$3.join(homedir2, ".node_modules"),
    path$3.join(homedir2, ".node_libraries")
  ];
};
var defaultIsFile = function isFile2(file2) {
  try {
    var stat = fs.statSync(file2, { throwIfNoEntry: false });
  } catch (e) {
    if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) return false;
    throw e;
  }
  return !!stat && (stat.isFile() || stat.isFIFO());
};
var defaultIsDir = function isDirectory2(dir) {
  try {
    var stat = fs.statSync(dir, { throwIfNoEntry: false });
  } catch (e) {
    if (e && (e.code === "ENOENT" || e.code === "ENOTDIR")) return false;
    throw e;
  }
  return !!stat && stat.isDirectory();
};
var defaultRealpathSync = function realpathSync(x) {
  try {
    return realpathFS(x);
  } catch (realpathErr) {
    if (realpathErr.code !== "ENOENT") {
      throw realpathErr;
    }
  }
  return x;
};
var maybeRealpathSync = function maybeRealpathSync2(realpathSync2, x, opts) {
  if (opts && opts.preserveSymlinks === false) {
    return realpathSync2(x);
  }
  return x;
};
var defaultReadPackageSync = function defaultReadPackageSync2(readFileSync, pkgfile) {
  var body = readFileSync(pkgfile);
  try {
    var pkg = JSON.parse(body);
    return pkg;
  } catch (jsonErr) {
  }
};
var getPackageCandidates2 = function getPackageCandidates3(x, start, opts) {
  var dirs = nodeModulesPaths2(start, opts, x);
  for (var i = 0; i < dirs.length; i++) {
    dirs[i] = path$3.join(dirs[i], x);
  }
  return dirs;
};
var sync = function resolveSync(x, options) {
  if (typeof x !== "string") {
    throw new TypeError("Path must be a string.");
  }
  var opts = normalizeOptions$1(x, options);
  var isFile3 = opts.isFile || defaultIsFile;
  var readFileSync = opts.readFileSync || fs.readFileSync;
  var isDirectory3 = opts.isDirectory || defaultIsDir;
  var realpathSync2 = opts.realpathSync || defaultRealpathSync;
  var readPackageSync = opts.readPackageSync || defaultReadPackageSync;
  if (opts.readFileSync && opts.readPackageSync) {
    throw new TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");
  }
  var packageIterator = opts.packageIterator;
  var extensions = opts.extensions || [".js"];
  var includeCoreModules = opts.includeCoreModules !== false;
  var basedir = opts.basedir || path$3.dirname(caller());
  var parent = opts.filename || basedir;
  opts.paths = opts.paths || defaultPaths();
  var absoluteStart = maybeRealpathSync(realpathSync2, path$3.resolve(basedir), opts);
  if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(x)) {
    var res = path$3.resolve(absoluteStart, x);
    if (x === "." || x === ".." || x.slice(-1) === "/") res += "/";
    var m = loadAsFileSync(res) || loadAsDirectorySync(res);
    if (m) return maybeRealpathSync(realpathSync2, m, opts);
  } else if (includeCoreModules && isCore$1(x)) {
    return x;
  } else {
    var n = loadNodeModulesSync(x, absoluteStart);
    if (n) return maybeRealpathSync(realpathSync2, n, opts);
  }
  var err = new Error("Cannot find module '" + x + "' from '" + parent + "'");
  err.code = "MODULE_NOT_FOUND";
  throw err;
  function loadAsFileSync(x2) {
    var pkg = loadpkg(path$3.dirname(x2));
    if (pkg && pkg.dir && pkg.pkg && opts.pathFilter) {
      var rfile = path$3.relative(pkg.dir, x2);
      var r = opts.pathFilter(pkg.pkg, x2, rfile);
      if (r) {
        x2 = path$3.resolve(pkg.dir, r);
      }
    }
    if (isFile3(x2)) {
      return x2;
    }
    for (var i = 0; i < extensions.length; i++) {
      var file2 = x2 + extensions[i];
      if (isFile3(file2)) {
        return file2;
      }
    }
  }
  function loadpkg(dir) {
    if (dir === "" || dir === "/") return;
    if (process.platform === "win32" && /^\w:[/\\]*$/.test(dir)) {
      return;
    }
    if (/[/\\]node_modules[/\\]*$/.test(dir)) return;
    var pkgfile = path$3.join(maybeRealpathSync(realpathSync2, dir, opts), "package.json");
    if (!isFile3(pkgfile)) {
      return loadpkg(path$3.dirname(dir));
    }
    var pkg = readPackageSync(readFileSync, pkgfile);
    if (pkg && opts.packageFilter) {
      pkg = opts.packageFilter(
        pkg,
        /*pkgfile,*/
        dir
      );
    }
    return { pkg, dir };
  }
  function loadAsDirectorySync(x2) {
    var pkgfile = path$3.join(maybeRealpathSync(realpathSync2, x2, opts), "/package.json");
    if (isFile3(pkgfile)) {
      try {
        var pkg = readPackageSync(readFileSync, pkgfile);
      } catch (e) {
      }
      if (pkg && opts.packageFilter) {
        pkg = opts.packageFilter(
          pkg,
          /*pkgfile,*/
          x2
        );
      }
      if (pkg && pkg.main) {
        if (typeof pkg.main !== "string") {
          var mainError = new TypeError("package “" + pkg.name + "” `main` must be a string");
          mainError.code = "INVALID_PACKAGE_MAIN";
          throw mainError;
        }
        if (pkg.main === "." || pkg.main === "./") {
          pkg.main = "index";
        }
        try {
          var m2 = loadAsFileSync(path$3.resolve(x2, pkg.main));
          if (m2) return m2;
          var n2 = loadAsDirectorySync(path$3.resolve(x2, pkg.main));
          if (n2) return n2;
        } catch (e) {
        }
      }
    }
    return loadAsFileSync(path$3.join(x2, "/index"));
  }
  function loadNodeModulesSync(x2, start) {
    var thunk = function() {
      return getPackageCandidates2(x2, start, opts);
    };
    var dirs = packageIterator ? packageIterator(x2, start, thunk, opts) : thunk();
    for (var i = 0; i < dirs.length; i++) {
      var dir = dirs[i];
      if (isDirectory3(path$3.dirname(dir))) {
        var m2 = loadAsFileSync(dir);
        if (m2) return m2;
        var n2 = loadAsDirectorySync(dir);
        if (n2) return n2;
      }
    }
  }
};
var async = async$1;
async.core = core_1$1;
async.isCore = isCore$2;
async.sync = sync;
var resolve$1 = async;
var src$2 = { exports: {} };
var browser = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms;
  hasRequiredMs = 1;
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  ms = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse2(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse2(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms2 / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms2 / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms2 / s) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return plural(ms2, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms2, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms2, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms2, msAbs, s, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n, name2) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms2 / n) + " " + name2 + (isPlural ? "s" : "");
  }
  return ms;
}
var common;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce2;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = requireMs();
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug[key] = env[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash = 0;
      for (let i = 0; i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug2(...args) {
        if (!debug2.enabled) {
          return;
        }
        const self2 = debug2;
        const curr = Number(/* @__PURE__ */ new Date());
        const ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index2 = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format2) => {
          if (match === "%%") {
            return "%";
          }
          index2++;
          const formatter = createDebug.formatters[format2];
          if (typeof formatter === "function") {
            const val = args[index2];
            match = formatter.call(self2, val);
            args.splice(index2, 1);
            index2--;
          }
          return match;
        });
        createDebug.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug.log;
        logFn.apply(self2, args);
      }
      debug2.namespace = namespace;
      debug2.useColors = createDebug.useColors();
      debug2.color = createDebug.selectColor(namespace);
      debug2.extend = extend;
      debug2.destroy = createDebug.destroy;
      Object.defineProperty(debug2, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v) => {
          enableOverride = v;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug2);
      }
      return debug2;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug.skips.push(ns.slice(1));
        } else {
          createDebug.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug.names,
        ...createDebug.skips.map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name2) {
      for (const skip of createDebug.skips) {
        if (matchesTemplate(name2, skip)) {
          return false;
        }
      }
      for (const ns of createDebug.names) {
        if (matchesTemplate(name2, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce2(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  common = setup;
  return common;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser.exports;
  hasRequiredBrowser = 1;
  (function(module2, exports2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index2 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = requireCommon()(exports2);
    const { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser, browser.exports);
  return browser.exports;
}
var node = { exports: {} };
var hasFlag;
var hasRequiredHasFlag;
function requireHasFlag() {
  if (hasRequiredHasFlag) return hasFlag;
  hasRequiredHasFlag = 1;
  hasFlag = (flag, argv = process.argv) => {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  };
  return hasFlag;
}
var supportsColor_1;
var hasRequiredSupportsColor;
function requireSupportsColor() {
  if (hasRequiredSupportsColor) return supportsColor_1;
  hasRequiredSupportsColor = 1;
  const os2 = require$$1$3;
  const tty2 = require$$1$6;
  const hasFlag2 = requireHasFlag();
  const { env } = process;
  let forceColor;
  if (hasFlag2("no-color") || hasFlag2("no-colors") || hasFlag2("color=false") || hasFlag2("color=never")) {
    forceColor = 0;
  } else if (hasFlag2("color") || hasFlag2("colors") || hasFlag2("color=true") || hasFlag2("color=always")) {
    forceColor = 1;
  }
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
      forceColor = 0;
    } else {
      forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (hasFlag2("color=16m") || hasFlag2("color=full") || hasFlag2("color=truecolor")) {
      return 3;
    }
    if (hasFlag2("color=256")) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (process.platform === "win32") {
      const osRelease = os2.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version2 = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version2 >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function getSupportLevel(stream2) {
    const level = supportsColor(stream2, stream2 && stream2.isTTY);
    return translateLevel(level);
  }
  supportsColor_1 = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty2.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty2.isatty(2)))
  };
  return supportsColor_1;
}
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node.exports;
  hasRequiredNode = 1;
  (function(module2, exports2) {
    const tty2 = require$$1$6;
    const util2 = require$$0$3;
    exports2.init = init2;
    exports2.log = log2;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util2.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = requireSupportsColor();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty2.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name2, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name2} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name2 + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log2(...args) {
      return process.stderr.write(util2.formatWithOptions(exports2.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init2(debug2) {
      debug2.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug2.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = requireCommon()(exports2);
    const { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts);
    };
  })(node, node.exports);
  return node.exports;
}
if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
  src$2.exports = requireBrowser();
} else {
  src$2.exports = requireNode();
}
var srcExports = src$2.exports;
var path$2 = path$f;
var moduleDetailsFromPath$1 = function(file2) {
  var segments = file2.split(path$2.sep);
  var index2 = segments.lastIndexOf("node_modules");
  if (index2 === -1) return;
  if (!segments[index2 + 1]) return;
  var scoped = segments[index2 + 1][0] === "@";
  var name2 = scoped ? segments[index2 + 1] + "/" + segments[index2 + 2] : segments[index2 + 1];
  var offset = scoped ? 3 : 2;
  return {
    name: name2,
    basedir: segments.slice(0, index2 + offset).join(path$2.sep),
    path: segments.slice(index2 + offset).join(path$2.sep)
  };
};
const name = "require-in-the-middle";
const version$2 = "7.4.0";
const description = "Module to hook into the Node.js require function";
const main = "index.js";
const types$1 = "types/index.d.ts";
const dependencies = {
  debug: "^4.3.5",
  "module-details-from-path": "^1.0.3",
  resolve: "^1.22.8"
};
const devDependencies = {
  "@babel/core": "^7.9.0",
  "@babel/preset-env": "^7.9.5",
  "@babel/preset-typescript": "^7.9.0",
  "@babel/register": "^7.9.0",
  "ipp-printer": "^1.0.0",
  patterns: "^1.0.3",
  roundround: "^0.2.0",
  semver: "^6.3.0",
  standard: "^14.3.1",
  tape: "^4.11.0"
};
const scripts = {
  test: "npm run test:lint && npm run test:tape && npm run test:babel",
  "test:lint": "standard",
  "test:tape": "tape test/*.js",
  "test:babel": "node test/babel/babel-register.js"
};
const repository = {
  type: "git",
  url: "git+https://github.com/elastic/require-in-the-middle.git"
};
const keywords = [
  "require",
  "hook",
  "shim",
  "shimmer",
  "shimming",
  "patch",
  "monkey",
  "monkeypatch",
  "module",
  "load"
];
const files = [
  "types"
];
const author = "Thomas Watson Steen <w@tson.dk> (https://twitter.com/wa7son)";
const license = "MIT";
const bugs = {
  url: "https://github.com/elastic/require-in-the-middle/issues"
};
const homepage = "https://github.com/elastic/require-in-the-middle#readme";
const engines = {
  node: ">=8.6.0"
};
const require$$5 = {
  name,
  version: version$2,
  description,
  main,
  types: types$1,
  dependencies,
  devDependencies,
  scripts,
  repository,
  keywords,
  files,
  author,
  license,
  bugs,
  homepage,
  engines
};
const path$1 = path$f;
const Module = require$$1$5;
const resolve2 = resolve$1;
const debug = srcExports("require-in-the-middle");
const moduleDetailsFromPath = moduleDetailsFromPath$1;
requireInTheMiddle.exports = Hook$1;
var Hook_1$1 = requireInTheMiddle.exports.Hook = Hook$1;
let isCore3;
if (Module.isBuiltin) {
  isCore3 = Module.isBuiltin;
} else {
  const [major2, minor2] = process.versions.node.split(".").map(Number);
  if (major2 === 8 && minor2 < 8) {
    isCore3 = (moduleName) => {
      if (moduleName === "http2") {
        return true;
      }
      return !!resolve2.core[moduleName];
    };
  } else {
    isCore3 = (moduleName) => {
      return !!resolve2.core[moduleName];
    };
  }
}
const normalize = /([/\\]index)?(\.js)?$/;
class ExportsCache {
  constructor() {
    this._localCache = /* @__PURE__ */ new Map();
    this._kRitmExports = Symbol("RitmExports");
  }
  has(filename, isBuiltin2) {
    if (this._localCache.has(filename)) {
      return true;
    } else if (!isBuiltin2) {
      const mod = require.cache[filename];
      return !!(mod && this._kRitmExports in mod);
    } else {
      return false;
    }
  }
  get(filename, isBuiltin2) {
    const cachedExports = this._localCache.get(filename);
    if (cachedExports !== void 0) {
      return cachedExports;
    } else if (!isBuiltin2) {
      const mod = require.cache[filename];
      return mod && mod[this._kRitmExports];
    }
  }
  set(filename, exports2, isBuiltin2) {
    if (isBuiltin2) {
      this._localCache.set(filename, exports2);
    } else if (filename in require.cache) {
      require.cache[filename][this._kRitmExports] = exports2;
    } else {
      debug('non-core module is unexpectedly not in require.cache: "%s"', filename);
      this._localCache.set(filename, exports2);
    }
  }
}
function Hook$1(modules, options, onrequire) {
  if (this instanceof Hook$1 === false) return new Hook$1(modules, options, onrequire);
  if (typeof modules === "function") {
    onrequire = modules;
    modules = null;
    options = null;
  } else if (typeof options === "function") {
    onrequire = options;
    options = null;
  }
  if (typeof Module._resolveFilename !== "function") {
    console.error("Error: Expected Module._resolveFilename to be a function (was: %s) - aborting!", typeof Module._resolveFilename);
    console.error("Please report this error as an issue related to Node.js %s at %s", process.version, require$$5.bugs.url);
    return;
  }
  this._cache = new ExportsCache();
  this._unhooked = false;
  this._origRequire = Module.prototype.require;
  const self2 = this;
  const patching = /* @__PURE__ */ new Set();
  const internals = options ? options.internals === true : false;
  const hasWhitelist = Array.isArray(modules);
  debug("registering require hook");
  this._require = Module.prototype.require = function(id) {
    if (self2._unhooked === true) {
      debug("ignoring require call - module is soft-unhooked");
      return self2._origRequire.apply(this, arguments);
    }
    return patchedRequire.call(this, arguments, false);
  };
  if (typeof process.getBuiltinModule === "function") {
    this._origGetBuiltinModule = process.getBuiltinModule;
    this._getBuiltinModule = process.getBuiltinModule = function(id) {
      if (self2._unhooked === true) {
        debug("ignoring process.getBuiltinModule call - module is soft-unhooked");
        return self2._origGetBuiltinModule.apply(this, arguments);
      }
      return patchedRequire.call(this, arguments, true);
    };
  }
  function patchedRequire(args, coreOnly) {
    const id = args[0];
    const core2 = isCore3(id);
    let filename;
    if (core2) {
      filename = id;
      if (id.startsWith("node:")) {
        const idWithoutPrefix = id.slice(5);
        if (isCore3(idWithoutPrefix)) {
          filename = idWithoutPrefix;
        }
      }
    } else if (coreOnly) {
      debug("call to process.getBuiltinModule with unknown built-in id");
      return self2._origGetBuiltinModule.apply(this, args);
    } else {
      try {
        filename = Module._resolveFilename(id, this);
      } catch (resolveErr) {
        debug('Module._resolveFilename("%s") threw %j, calling original Module.require', id, resolveErr.message);
        return self2._origRequire.apply(this, args);
      }
    }
    let moduleName, basedir;
    debug("processing %s module require('%s'): %s", core2 === true ? "core" : "non-core", id, filename);
    if (self2._cache.has(filename, core2) === true) {
      debug("returning already patched cached module: %s", filename);
      return self2._cache.get(filename, core2);
    }
    const isPatching = patching.has(filename);
    if (isPatching === false) {
      patching.add(filename);
    }
    const exports2 = coreOnly ? self2._origGetBuiltinModule.apply(this, args) : self2._origRequire.apply(this, args);
    if (isPatching === true) {
      debug("module is in the process of being patched already - ignoring: %s", filename);
      return exports2;
    }
    patching.delete(filename);
    if (core2 === true) {
      if (hasWhitelist === true && modules.includes(filename) === false) {
        debug("ignoring core module not on whitelist: %s", filename);
        return exports2;
      }
      moduleName = filename;
    } else if (hasWhitelist === true && modules.includes(filename)) {
      const parsedPath = path$1.parse(filename);
      moduleName = parsedPath.name;
      basedir = parsedPath.dir;
    } else {
      const stat = moduleDetailsFromPath(filename);
      if (stat === void 0) {
        debug("could not parse filename: %s", filename);
        return exports2;
      }
      moduleName = stat.name;
      basedir = stat.basedir;
      const fullModuleName = resolveModuleName(stat);
      debug("resolved filename to module: %s (id: %s, resolved: %s, basedir: %s)", moduleName, id, fullModuleName, basedir);
      let matchFound = false;
      if (hasWhitelist) {
        if (!id.startsWith(".") && modules.includes(id)) {
          moduleName = id;
          matchFound = true;
        }
        if (!modules.includes(moduleName) && !modules.includes(fullModuleName)) {
          return exports2;
        }
        if (modules.includes(fullModuleName) && fullModuleName !== moduleName) {
          moduleName = fullModuleName;
          matchFound = true;
        }
      }
      if (!matchFound) {
        let res;
        try {
          res = resolve2.sync(moduleName, { basedir });
        } catch (e) {
          debug("could not resolve module: %s", moduleName);
          self2._cache.set(filename, exports2, core2);
          return exports2;
        }
        if (res !== filename) {
          if (internals === true) {
            moduleName = moduleName + path$1.sep + path$1.relative(basedir, filename);
            debug("preparing to process require of internal file: %s", moduleName);
          } else {
            debug("ignoring require of non-main module file: %s", res);
            self2._cache.set(filename, exports2, core2);
            return exports2;
          }
        }
      }
    }
    self2._cache.set(filename, exports2, core2);
    debug("calling require hook: %s", moduleName);
    const patchedExports = onrequire(exports2, moduleName, basedir);
    self2._cache.set(filename, patchedExports, core2);
    debug("returning module: %s", moduleName);
    return patchedExports;
  }
}
Hook$1.prototype.unhook = function() {
  this._unhooked = true;
  if (this._require === Module.prototype.require) {
    Module.prototype.require = this._origRequire;
    debug("require unhook successful");
  } else {
    debug("require unhook unsuccessful");
  }
  if (process.getBuiltinModule !== void 0) {
    if (this._getBuiltinModule === process.getBuiltinModule) {
      process.getBuiltinModule = this._origGetBuiltinModule;
      debug("process.getBuiltinModule unhook successful");
    } else {
      debug("process.getBuiltinModule unhook unsuccessful");
    }
  }
};
function resolveModuleName(stat) {
  const normalizedPath = path$1.sep !== "/" ? stat.path.split(path$1.sep).join("/") : stat.path;
  return path$1.posix.join(stat.name, normalizedPath).replace(normalize, "");
}
var __values$7 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read$6 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray$3 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var ModuleNameSeparator = "/";
var ModuleNameTrieNode = (
  /** @class */
  /* @__PURE__ */ function() {
    function ModuleNameTrieNode2() {
      this.hooks = [];
      this.children = /* @__PURE__ */ new Map();
    }
    return ModuleNameTrieNode2;
  }()
);
var ModuleNameTrie = (
  /** @class */
  function() {
    function ModuleNameTrie2() {
      this._trie = new ModuleNameTrieNode();
      this._counter = 0;
    }
    ModuleNameTrie2.prototype.insert = function(hook) {
      var e_1, _a3;
      var trieNode = this._trie;
      try {
        for (var _b2 = __values$7(hook.moduleName.split(ModuleNameSeparator)), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var moduleNamePart = _c2.value;
          var nextNode = trieNode.children.get(moduleNamePart);
          if (!nextNode) {
            nextNode = new ModuleNameTrieNode();
            trieNode.children.set(moduleNamePart, nextNode);
          }
          trieNode = nextNode;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      trieNode.hooks.push({ hook, insertedId: this._counter++ });
    };
    ModuleNameTrie2.prototype.search = function(moduleName, _a3) {
      var e_2, _b2;
      var _c2 = _a3 === void 0 ? {} : _a3, maintainInsertionOrder = _c2.maintainInsertionOrder, fullOnly = _c2.fullOnly;
      var trieNode = this._trie;
      var results = [];
      var foundFull = true;
      try {
        for (var _d = __values$7(moduleName.split(ModuleNameSeparator)), _e = _d.next(); !_e.done; _e = _d.next()) {
          var moduleNamePart = _e.value;
          var nextNode = trieNode.children.get(moduleNamePart);
          if (!nextNode) {
            foundFull = false;
            break;
          }
          if (!fullOnly) {
            results.push.apply(results, __spreadArray$3([], __read$6(nextNode.hooks), false));
          }
          trieNode = nextNode;
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_e && !_e.done && (_b2 = _d.return)) _b2.call(_d);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      if (fullOnly && foundFull) {
        results.push.apply(results, __spreadArray$3([], __read$6(trieNode.hooks), false));
      }
      if (results.length === 0) {
        return [];
      }
      if (results.length === 1) {
        return [results[0].hook];
      }
      if (maintainInsertionOrder) {
        results.sort(function(a, b) {
          return a.insertedId - b.insertedId;
        });
      }
      return results.map(function(_a4) {
        var hook = _a4.hook;
        return hook;
      });
    };
    return ModuleNameTrie2;
  }()
);
var __values$6 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var isMocha = [
  "afterEach",
  "after",
  "beforeEach",
  "before",
  "describe",
  "it"
].every(function(fn) {
  return typeof global[fn] === "function";
});
var RequireInTheMiddleSingleton = (
  /** @class */
  function() {
    function RequireInTheMiddleSingleton2() {
      this._moduleNameTrie = new ModuleNameTrie();
      this._initialize();
    }
    RequireInTheMiddleSingleton2.prototype._initialize = function() {
      var _this = this;
      new Hook_1$1(
        // Intercept all `require` calls; we will filter the matching ones below
        null,
        { internals: true },
        function(exports2, name2, basedir) {
          var e_1, _a3;
          var normalizedModuleName = normalizePathSeparators(name2);
          var matches = _this._moduleNameTrie.search(normalizedModuleName, {
            maintainInsertionOrder: true,
            // For core modules (e.g. `fs`), do not match on sub-paths (e.g. `fs/promises').
            // This matches the behavior of `require-in-the-middle`.
            // `basedir` is always `undefined` for core modules.
            fullOnly: basedir === void 0
          });
          try {
            for (var matches_1 = __values$6(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
              var onRequire = matches_1_1.value.onRequire;
              exports2 = onRequire(exports2, name2, basedir);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (matches_1_1 && !matches_1_1.done && (_a3 = matches_1.return)) _a3.call(matches_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return exports2;
        }
      );
    };
    RequireInTheMiddleSingleton2.prototype.register = function(moduleName, onRequire) {
      var hooked = { moduleName, onRequire };
      this._moduleNameTrie.insert(hooked);
      return hooked;
    };
    RequireInTheMiddleSingleton2.getInstance = function() {
      var _a3;
      if (isMocha)
        return new RequireInTheMiddleSingleton2();
      return this._instance = (_a3 = this._instance) !== null && _a3 !== void 0 ? _a3 : new RequireInTheMiddleSingleton2();
    };
    return RequireInTheMiddleSingleton2;
  }()
);
function normalizePathSeparators(moduleNameOrPath) {
  return path__namespace.sep !== ModuleNameSeparator ? moduleNameOrPath.split(path__namespace.sep).join(ModuleNameSeparator) : moduleNameOrPath;
}
var importInTheMiddle = { exports: {} };
var register$1 = {};
const importHooks$1 = [];
const setters = /* @__PURE__ */ new WeakMap();
const getters = /* @__PURE__ */ new WeakMap();
const specifiers$1 = /* @__PURE__ */ new Map();
const toHook$1 = [];
const proxyHandler = {
  set(target, name2, value) {
    return setters.get(target)[name2](value);
  },
  get(target, name2) {
    if (name2 === Symbol.toStringTag) {
      return "Module";
    }
    const getter = getters.get(target)[name2];
    if (typeof getter === "function") {
      return getter();
    }
  },
  defineProperty(target, property, descriptor) {
    if (!("value" in descriptor)) {
      throw new Error("Getters/setters are not supported for exports property descriptors.");
    }
    return setters.get(target)[property](descriptor.value);
  }
};
function register(name2, namespace, set2, get, specifier) {
  specifiers$1.set(name2, specifier);
  setters.set(namespace, set2);
  getters.set(namespace, get);
  const proxy = new Proxy(namespace, proxyHandler);
  importHooks$1.forEach((hook) => hook(name2, proxy));
  toHook$1.push([name2, proxy]);
}
register$1.register = register;
register$1.importHooks = importHooks$1;
register$1.specifiers = specifiers$1;
register$1.toHook = toHook$1;
const path = path$f;
const parse = moduleDetailsFromPath$1;
const { fileURLToPath } = urlModule;
const { MessageChannel } = require$$3;
const {
  importHooks,
  specifiers,
  toHook
} = register$1;
function addHook(hook) {
  importHooks.push(hook);
  toHook.forEach(([name2, namespace]) => hook(name2, namespace));
}
function removeHook(hook) {
  const index2 = importHooks.indexOf(hook);
  if (index2 > -1) {
    importHooks.splice(index2, 1);
  }
}
function callHookFn(hookFn, namespace, name2, baseDir) {
  const newDefault = hookFn(namespace, name2, baseDir);
  if (newDefault && newDefault !== namespace) {
    namespace.default = newDefault;
  }
}
let sendModulesToLoader;
function createAddHookMessageChannel() {
  const { port1, port2 } = new MessageChannel();
  let pendingAckCount = 0;
  let resolveFn;
  sendModulesToLoader = (modules) => {
    pendingAckCount++;
    port1.postMessage(modules);
  };
  port1.on("message", () => {
    pendingAckCount--;
    if (resolveFn && pendingAckCount <= 0) {
      resolveFn();
    }
  }).unref();
  function waitForAllMessagesAcknowledged() {
    const timer = setInterval(() => {
    }, 1e3);
    const promise = new Promise((resolve3) => {
      resolveFn = resolve3;
    }).then(() => {
      clearInterval(timer);
    });
    if (pendingAckCount === 0) {
      resolveFn();
    }
    return promise;
  }
  const addHookMessagePort = port2;
  const registerOptions = { data: { addHookMessagePort, include: [] }, transferList: [addHookMessagePort] };
  return { registerOptions, addHookMessagePort, waitForAllMessagesAcknowledged };
}
function Hook(modules, options, hookFn) {
  if (this instanceof Hook === false) return new Hook(modules, options, hookFn);
  if (typeof modules === "function") {
    hookFn = modules;
    modules = null;
    options = null;
  } else if (typeof options === "function") {
    hookFn = options;
    options = null;
  }
  const internals = options ? options.internals === true : false;
  if (sendModulesToLoader && Array.isArray(modules)) {
    sendModulesToLoader(modules);
  }
  this._iitmHook = (name2, namespace) => {
    const filename = name2;
    const isBuiltin2 = name2.startsWith("node:");
    let baseDir;
    if (isBuiltin2) {
      name2 = name2.replace(/^node:/, "");
    } else {
      if (name2.startsWith("file://")) {
        try {
          name2 = fileURLToPath(name2);
        } catch (e) {
        }
      }
      const details = parse(name2);
      if (details) {
        name2 = details.name;
        baseDir = details.basedir;
      }
    }
    if (modules) {
      for (const moduleName of modules) {
        if (moduleName === name2) {
          if (baseDir) {
            if (internals) {
              name2 = name2 + path.sep + path.relative(baseDir, fileURLToPath(filename));
            } else {
              if (!baseDir.endsWith(specifiers.get(filename))) continue;
            }
          }
          callHookFn(hookFn, namespace, name2, baseDir);
        }
      }
    } else {
      callHookFn(hookFn, namespace, name2, baseDir);
    }
  };
  addHook(this._iitmHook);
}
Hook.prototype.unhook = function() {
  removeHook(this._iitmHook);
};
importInTheMiddle.exports = Hook;
var Hook_1 = importInTheMiddle.exports.Hook = Hook;
importInTheMiddle.exports.addHook = addHook;
importInTheMiddle.exports.removeHook = removeHook;
importInTheMiddle.exports.createAddHookMessageChannel = createAddHookMessageChannel;
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve3) {
      resolve3(value);
    });
  }
  return new (P || (P = Promise))(function(resolve3, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator$1 = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f, y, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
      if (y = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t2[1]) {
            _.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _.label < t2[2]) {
            _.label = t2[2];
            _.ops.push(op);
            break;
          }
          if (t2[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
  var error;
  var result;
  try {
    result = execute();
  } catch (e) {
    error = e;
  } finally {
    onFinish(error, result);
    if (error && !preventThrowingError) {
      throw error;
    }
    return result;
  }
}
function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
  return __awaiter$1(this, void 0, void 0, function() {
    var error, result, e_1;
    return __generator$1(this, function(_a3) {
      switch (_a3.label) {
        case 0:
          _a3.trys.push([0, 2, 3, 4]);
          return [4, execute()];
        case 1:
          result = _a3.sent();
          return [3, 4];
        case 2:
          e_1 = _a3.sent();
          error = e_1;
          return [3, 4];
        case 3:
          onFinish(error, result);
          if (error && !preventThrowingError) {
            throw error;
          }
          return [2, result];
        case 4:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function isWrapped$1(func) {
  return typeof func === "function" && typeof func.__original === "function" && typeof func.__unwrap === "function" && func.__wrapped === true;
}
var __extends$2 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __values$5 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var InstrumentationBase = (
  /** @class */
  function(_super) {
    __extends$2(InstrumentationBase2, _super);
    function InstrumentationBase2(instrumentationName, instrumentationVersion, config) {
      var _this = _super.call(this, instrumentationName, instrumentationVersion, config) || this;
      _this._hooks = [];
      _this._requireInTheMiddleSingleton = RequireInTheMiddleSingleton.getInstance();
      _this._enabled = false;
      _this._wrap = function(moduleExports, name2, wrapper) {
        if (isWrapped$1(moduleExports[name2])) {
          _this._unwrap(moduleExports, name2);
        }
        if (!require$$0$3.types.isProxy(moduleExports)) {
          return shimmer_1.wrap(moduleExports, name2, wrapper);
        } else {
          var wrapped = shimmer_1.wrap(Object.assign({}, moduleExports), name2, wrapper);
          Object.defineProperty(moduleExports, name2, {
            value: wrapped
          });
          return wrapped;
        }
      };
      _this._unwrap = function(moduleExports, name2) {
        if (!require$$0$3.types.isProxy(moduleExports)) {
          return shimmer_1.unwrap(moduleExports, name2);
        } else {
          return Object.defineProperty(moduleExports, name2, {
            value: moduleExports[name2]
          });
        }
      };
      _this._massWrap = function(moduleExportsArray, names, wrapper) {
        if (!moduleExportsArray) {
          diag.error("must provide one or more modules to patch");
          return;
        } else if (!Array.isArray(moduleExportsArray)) {
          moduleExportsArray = [moduleExportsArray];
        }
        if (!(names && Array.isArray(names))) {
          diag.error("must provide one or more functions to wrap on modules");
          return;
        }
        moduleExportsArray.forEach(function(moduleExports) {
          names.forEach(function(name2) {
            _this._wrap(moduleExports, name2, wrapper);
          });
        });
      };
      _this._massUnwrap = function(moduleExportsArray, names) {
        if (!moduleExportsArray) {
          diag.error("must provide one or more modules to patch");
          return;
        } else if (!Array.isArray(moduleExportsArray)) {
          moduleExportsArray = [moduleExportsArray];
        }
        if (!(names && Array.isArray(names))) {
          diag.error("must provide one or more functions to wrap on modules");
          return;
        }
        moduleExportsArray.forEach(function(moduleExports) {
          names.forEach(function(name2) {
            _this._unwrap(moduleExports, name2);
          });
        });
      };
      var modules = _this.init();
      if (modules && !Array.isArray(modules)) {
        modules = [modules];
      }
      _this._modules = modules || [];
      if (_this._config.enabled) {
        _this.enable();
      }
      return _this;
    }
    InstrumentationBase2.prototype._warnOnPreloadedModules = function() {
      var _this = this;
      this._modules.forEach(function(module2) {
        var name2 = module2.name;
        try {
          var resolvedModule = require.resolve(name2);
          if (require.cache[resolvedModule]) {
            _this._diag.warn("Module " + name2 + " has been loaded before " + _this.instrumentationName + " so it might not work, please initialize it before requiring " + name2);
          }
        } catch (_a3) {
        }
      });
    };
    InstrumentationBase2.prototype._extractPackageVersion = function(baseDir) {
      try {
        var json = require$$0$1.readFileSync(path__namespace.join(baseDir, "package.json"), {
          encoding: "utf8"
        });
        var version2 = JSON.parse(json).version;
        return typeof version2 === "string" ? version2 : void 0;
      } catch (error) {
        diag.warn("Failed extracting version", baseDir);
      }
      return void 0;
    };
    InstrumentationBase2.prototype._onRequire = function(module2, exports2, name2, baseDir) {
      var _this = this;
      var _a3;
      if (!baseDir) {
        if (typeof module2.patch === "function") {
          module2.moduleExports = exports2;
          if (this._enabled) {
            this._diag.debug("Applying instrumentation patch for nodejs core module on require hook", {
              module: module2.name
            });
            return module2.patch(exports2);
          }
        }
        return exports2;
      }
      var version2 = this._extractPackageVersion(baseDir);
      module2.moduleVersion = version2;
      if (module2.name === name2) {
        if (isSupported(module2.supportedVersions, version2, module2.includePrerelease)) {
          if (typeof module2.patch === "function") {
            module2.moduleExports = exports2;
            if (this._enabled) {
              this._diag.debug("Applying instrumentation patch for module on require hook", {
                module: module2.name,
                version: module2.moduleVersion,
                baseDir
              });
              return module2.patch(exports2, module2.moduleVersion);
            }
          }
        }
        return exports2;
      }
      var files2 = (_a3 = module2.files) !== null && _a3 !== void 0 ? _a3 : [];
      var normalizedName = path__namespace.normalize(name2);
      var supportedFileInstrumentations = files2.filter(function(f) {
        return f.name === normalizedName;
      }).filter(function(f) {
        return isSupported(f.supportedVersions, version2, module2.includePrerelease);
      });
      return supportedFileInstrumentations.reduce(function(patchedExports, file2) {
        file2.moduleExports = patchedExports;
        if (_this._enabled) {
          _this._diag.debug("Applying instrumentation patch for nodejs module file on require hook", {
            module: module2.name,
            version: module2.moduleVersion,
            fileName: file2.name,
            baseDir
          });
          return file2.patch(patchedExports, module2.moduleVersion);
        }
        return patchedExports;
      }, exports2);
    };
    InstrumentationBase2.prototype.enable = function() {
      var e_1, _a3, e_2, _b2, e_3, _c2;
      var _this = this;
      if (this._enabled) {
        return;
      }
      this._enabled = true;
      if (this._hooks.length > 0) {
        try {
          for (var _d = __values$5(this._modules), _e = _d.next(); !_e.done; _e = _d.next()) {
            var module_1 = _e.value;
            if (typeof module_1.patch === "function" && module_1.moduleExports) {
              this._diag.debug("Applying instrumentation patch for nodejs module on instrumentation enabled", {
                module: module_1.name,
                version: module_1.moduleVersion
              });
              module_1.patch(module_1.moduleExports, module_1.moduleVersion);
            }
            try {
              for (var _f = (e_2 = void 0, __values$5(module_1.files)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var file2 = _g.value;
                if (file2.moduleExports) {
                  this._diag.debug("Applying instrumentation patch for nodejs module file on instrumentation enabled", {
                    module: module_1.name,
                    version: module_1.moduleVersion,
                    fileName: file2.name
                  });
                  file2.patch(file2.moduleExports, module_1.moduleVersion);
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_g && !_g.done && (_b2 = _f.return)) _b2.call(_f);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_e && !_e.done && (_a3 = _d.return)) _a3.call(_d);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return;
      }
      this._warnOnPreloadedModules();
      var _loop_1 = function(module_22) {
        var hookFn = function(exports2, name2, baseDir) {
          if (!baseDir && path__namespace.isAbsolute(name2)) {
            var parsedPath = path__namespace.parse(name2);
            name2 = parsedPath.name;
            baseDir = parsedPath.dir;
          }
          return _this._onRequire(module_22, exports2, name2, baseDir);
        };
        var onRequire = function(exports2, name2, baseDir) {
          return _this._onRequire(module_22, exports2, name2, baseDir);
        };
        var hook = path__namespace.isAbsolute(module_22.name) ? new Hook_1$1([module_22.name], { internals: true }, onRequire) : this_1._requireInTheMiddleSingleton.register(module_22.name, onRequire);
        this_1._hooks.push(hook);
        var esmHook = new Hook_1([module_22.name], { internals: false }, hookFn);
        this_1._hooks.push(esmHook);
      };
      var this_1 = this;
      try {
        for (var _h = __values$5(this._modules), _j = _h.next(); !_j.done; _j = _h.next()) {
          var module_2 = _j.value;
          _loop_1(module_2);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_j && !_j.done && (_c2 = _h.return)) _c2.call(_h);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    };
    InstrumentationBase2.prototype.disable = function() {
      var e_4, _a3, e_5, _b2;
      if (!this._enabled) {
        return;
      }
      this._enabled = false;
      try {
        for (var _c2 = __values$5(this._modules), _d = _c2.next(); !_d.done; _d = _c2.next()) {
          var module_3 = _d.value;
          if (typeof module_3.unpatch === "function" && module_3.moduleExports) {
            this._diag.debug("Removing instrumentation patch for nodejs module on instrumentation disabled", {
              module: module_3.name,
              version: module_3.moduleVersion
            });
            module_3.unpatch(module_3.moduleExports, module_3.moduleVersion);
          }
          try {
            for (var _e = (e_5 = void 0, __values$5(module_3.files)), _f = _e.next(); !_f.done; _f = _e.next()) {
              var file2 = _f.value;
              if (file2.moduleExports) {
                this._diag.debug("Removing instrumentation patch for nodejs module file on instrumentation disabled", {
                  module: module_3.name,
                  version: module_3.moduleVersion,
                  fileName: file2.name
                });
                file2.unpatch(file2.moduleExports, module_3.moduleVersion);
              }
            }
          } catch (e_5_1) {
            e_5 = { error: e_5_1 };
          } finally {
            try {
              if (_f && !_f.done && (_b2 = _e.return)) _b2.call(_e);
            } finally {
              if (e_5) throw e_5.error;
            }
          }
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a3 = _c2.return)) _a3.call(_c2);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    };
    InstrumentationBase2.prototype.isEnabled = function() {
      return this._enabled;
    };
    return InstrumentationBase2;
  }(InstrumentationAbstract)
);
function isSupported(supportedVersions, version2, includePrerelease) {
  if (typeof version2 === "undefined") {
    return supportedVersions.includes("*");
  }
  return supportedVersions.some(function(supportedVersion) {
    return semver.satisfies(version2, supportedVersion, { includePrerelease });
  });
}
var InstrumentationNodeModuleDefinition = (
  /** @class */
  /* @__PURE__ */ function() {
    function InstrumentationNodeModuleDefinition2(name2, supportedVersions, patch2, unpatch, files2) {
      this.name = name2;
      this.supportedVersions = supportedVersions;
      this.patch = patch2;
      this.unpatch = unpatch;
      this.files = files2 || [];
    }
    return InstrumentationNodeModuleDefinition2;
  }()
);
var InstrumentationNodeModuleFile = (
  /** @class */
  /* @__PURE__ */ function() {
    function InstrumentationNodeModuleFile2(name2, supportedVersions, patch2, unpatch) {
      this.supportedVersions = supportedVersions;
      this.patch = patch2;
      this.unpatch = unpatch;
      this.name = path$f.normalize(name2);
    }
    return InstrumentationNodeModuleFile2;
  }()
);
const esm$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InstrumentationBase,
  InstrumentationNodeModuleDefinition,
  InstrumentationNodeModuleFile,
  isWrapped: isWrapped$1,
  registerInstrumentations,
  safeExecuteInTheMiddle,
  safeExecuteInTheMiddleAsync
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(esm$1);
var SUPPRESS_TRACING_KEY = createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
function suppressTracing$1(context2) {
  return context2.setValue(SUPPRESS_TRACING_KEY, true);
}
function unsuppressTracing(context2) {
  return context2.deleteValue(SUPPRESS_TRACING_KEY);
}
function isTracingSuppressed(context2) {
  return context2.getValue(SUPPRESS_TRACING_KEY) === true;
}
var BAGGAGE_KEY_PAIR_SEPARATOR = "=";
var BAGGAGE_PROPERTIES_SEPARATOR = ";";
var BAGGAGE_ITEMS_SEPARATOR = ",";
var BAGGAGE_HEADER = "baggage";
var BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
var BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
var BAGGAGE_MAX_TOTAL_LENGTH = 8192;
var __read$5 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
function serializeKeyPairs(keyPairs) {
  return keyPairs.reduce(function(hValue, current2) {
    var value = "" + hValue + (hValue !== "" ? BAGGAGE_ITEMS_SEPARATOR : "") + current2;
    return value.length > BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
  }, "");
}
function getKeyPairs(baggage) {
  return baggage.getAllEntries().map(function(_a3) {
    var _b2 = __read$5(_a3, 2), key = _b2[0], value = _b2[1];
    var entry = encodeURIComponent(key) + "=" + encodeURIComponent(value.value);
    if (value.metadata !== void 0) {
      entry += BAGGAGE_PROPERTIES_SEPARATOR + value.metadata.toString();
    }
    return entry;
  });
}
function parsePairKeyValue(entry) {
  var valueProps = entry.split(BAGGAGE_PROPERTIES_SEPARATOR);
  if (valueProps.length <= 0)
    return;
  var keyPairPart = valueProps.shift();
  if (!keyPairPart)
    return;
  var separatorIndex = keyPairPart.indexOf(BAGGAGE_KEY_PAIR_SEPARATOR);
  if (separatorIndex <= 0)
    return;
  var key = decodeURIComponent(keyPairPart.substring(0, separatorIndex).trim());
  var value = decodeURIComponent(keyPairPart.substring(separatorIndex + 1).trim());
  var metadata;
  if (valueProps.length > 0) {
    metadata = baggageEntryMetadataFromString(valueProps.join(BAGGAGE_PROPERTIES_SEPARATOR));
  }
  return { key, value, metadata };
}
function parseKeyPairsIntoRecord(value) {
  if (typeof value !== "string" || value.length === 0)
    return {};
  return value.split(BAGGAGE_ITEMS_SEPARATOR).map(function(entry) {
    return parsePairKeyValue(entry);
  }).filter(function(keyPair) {
    return keyPair !== void 0 && keyPair.value.length > 0;
  }).reduce(function(headers, keyPair) {
    headers[keyPair.key] = keyPair.value;
    return headers;
  }, {});
}
var W3CBaggagePropagator = (
  /** @class */
  function() {
    function W3CBaggagePropagator2() {
    }
    W3CBaggagePropagator2.prototype.inject = function(context2, carrier, setter) {
      var baggage = propagation.getBaggage(context2);
      if (!baggage || isTracingSuppressed(context2))
        return;
      var keyPairs = getKeyPairs(baggage).filter(function(pair) {
        return pair.length <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
      }).slice(0, BAGGAGE_MAX_NAME_VALUE_PAIRS);
      var headerValue = serializeKeyPairs(keyPairs);
      if (headerValue.length > 0) {
        setter.set(carrier, BAGGAGE_HEADER, headerValue);
      }
    };
    W3CBaggagePropagator2.prototype.extract = function(context2, carrier, getter) {
      var headerValue = getter.get(carrier, BAGGAGE_HEADER);
      var baggageString = Array.isArray(headerValue) ? headerValue.join(BAGGAGE_ITEMS_SEPARATOR) : headerValue;
      if (!baggageString)
        return context2;
      var baggage = {};
      if (baggageString.length === 0) {
        return context2;
      }
      var pairs = baggageString.split(BAGGAGE_ITEMS_SEPARATOR);
      pairs.forEach(function(entry) {
        var keyPair = parsePairKeyValue(entry);
        if (keyPair) {
          var baggageEntry = { value: keyPair.value };
          if (keyPair.metadata) {
            baggageEntry.metadata = keyPair.metadata;
          }
          baggage[keyPair.key] = baggageEntry;
        }
      });
      if (Object.entries(baggage).length === 0) {
        return context2;
      }
      return propagation.setBaggage(context2, propagation.createBaggage(baggage));
    };
    W3CBaggagePropagator2.prototype.fields = function() {
      return [BAGGAGE_HEADER];
    };
    return W3CBaggagePropagator2;
  }()
);
var AnchoredClock = (
  /** @class */
  function() {
    function AnchoredClock2(systemClock, monotonicClock) {
      this._monotonicClock = monotonicClock;
      this._epochMillis = systemClock.now();
      this._performanceMillis = monotonicClock.now();
    }
    AnchoredClock2.prototype.now = function() {
      var delta = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + delta;
    };
    return AnchoredClock2;
  }()
);
var __values$4 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read$4 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
function sanitizeAttributes(attributes) {
  var e_1, _a3;
  var out = {};
  if (typeof attributes !== "object" || attributes == null) {
    return out;
  }
  try {
    for (var _b2 = __values$4(Object.entries(attributes)), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
      var _d = __read$4(_c2.value, 2), key = _d[0], val = _d[1];
      if (!isAttributeKey(key)) {
        diag.warn("Invalid attribute key: " + key);
        continue;
      }
      if (!isAttributeValue(val)) {
        diag.warn("Invalid attribute value set for key: " + key);
        continue;
      }
      if (Array.isArray(val)) {
        out[key] = val.slice();
      } else {
        out[key] = val;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return out;
}
function isAttributeKey(key) {
  return typeof key === "string" && key.length > 0;
}
function isAttributeValue(val) {
  if (val == null) {
    return true;
  }
  if (Array.isArray(val)) {
    return isHomogeneousAttributeValueArray(val);
  }
  return isValidPrimitiveAttributeValue(val);
}
function isHomogeneousAttributeValueArray(arr) {
  var e_2, _a3;
  var type;
  try {
    for (var arr_1 = __values$4(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
      var element = arr_1_1.value;
      if (element == null)
        continue;
      if (!type) {
        if (isValidPrimitiveAttributeValue(element)) {
          type = typeof element;
          continue;
        }
        return false;
      }
      if (typeof element === type) {
        continue;
      }
      return false;
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (arr_1_1 && !arr_1_1.done && (_a3 = arr_1.return)) _a3.call(arr_1);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  return true;
}
function isValidPrimitiveAttributeValue(val) {
  switch (typeof val) {
    case "number":
    case "boolean":
    case "string":
      return true;
  }
  return false;
}
function loggingErrorHandler() {
  return function(ex) {
    diag.error(stringifyException(ex));
  };
}
function stringifyException(ex) {
  if (typeof ex === "string") {
    return ex;
  } else {
    return JSON.stringify(flattenException(ex));
  }
}
function flattenException(ex) {
  var result = {};
  var current2 = ex;
  while (current2 !== null) {
    Object.getOwnPropertyNames(current2).forEach(function(propertyName) {
      if (result[propertyName])
        return;
      var value = current2[propertyName];
      if (value) {
        result[propertyName] = String(value);
      }
    });
    current2 = Object.getPrototypeOf(current2);
  }
  return result;
}
var delegateHandler = loggingErrorHandler();
function setGlobalErrorHandler(handler) {
  delegateHandler = handler;
}
function globalErrorHandler(ex) {
  try {
    delegateHandler(ex);
  } catch (_a3) {
  }
}
var TracesSamplerValues;
(function(TracesSamplerValues2) {
  TracesSamplerValues2["AlwaysOff"] = "always_off";
  TracesSamplerValues2["AlwaysOn"] = "always_on";
  TracesSamplerValues2["ParentBasedAlwaysOff"] = "parentbased_always_off";
  TracesSamplerValues2["ParentBasedAlwaysOn"] = "parentbased_always_on";
  TracesSamplerValues2["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
  TracesSamplerValues2["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {}));
var DEFAULT_LIST_SEPARATOR = ",";
var ENVIRONMENT_BOOLEAN_KEYS = ["OTEL_SDK_DISABLED"];
function isEnvVarABoolean(key) {
  return ENVIRONMENT_BOOLEAN_KEYS.indexOf(key) > -1;
}
var ENVIRONMENT_NUMBERS_KEYS = [
  "OTEL_BSP_EXPORT_TIMEOUT",
  "OTEL_BSP_MAX_EXPORT_BATCH_SIZE",
  "OTEL_BSP_MAX_QUEUE_SIZE",
  "OTEL_BSP_SCHEDULE_DELAY",
  "OTEL_BLRP_EXPORT_TIMEOUT",
  "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE",
  "OTEL_BLRP_MAX_QUEUE_SIZE",
  "OTEL_BLRP_SCHEDULE_DELAY",
  "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT",
  "OTEL_ATTRIBUTE_COUNT_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT",
  "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT",
  "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT",
  "OTEL_SPAN_EVENT_COUNT_LIMIT",
  "OTEL_SPAN_LINK_COUNT_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT",
  "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT",
  "OTEL_EXPORTER_OTLP_TIMEOUT",
  "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT",
  "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT",
  "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT",
  "OTEL_EXPORTER_JAEGER_AGENT_PORT"
];
function isEnvVarANumber(key) {
  return ENVIRONMENT_NUMBERS_KEYS.indexOf(key) > -1;
}
var ENVIRONMENT_LISTS_KEYS = [
  "OTEL_NO_PATCH_MODULES",
  "OTEL_PROPAGATORS",
  "OTEL_SEMCONV_STABILITY_OPT_IN"
];
function isEnvVarAList(key) {
  return ENVIRONMENT_LISTS_KEYS.indexOf(key) > -1;
}
var DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
var DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
var DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128;
var DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128;
var DEFAULT_ENVIRONMENT = {
  OTEL_SDK_DISABLED: false,
  CONTAINER_NAME: "",
  ECS_CONTAINER_METADATA_URI_V4: "",
  ECS_CONTAINER_METADATA_URI: "",
  HOSTNAME: "",
  KUBERNETES_SERVICE_HOST: "",
  NAMESPACE: "",
  OTEL_BSP_EXPORT_TIMEOUT: 3e4,
  OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
  OTEL_BSP_MAX_QUEUE_SIZE: 2048,
  OTEL_BSP_SCHEDULE_DELAY: 5e3,
  OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
  OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
  OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
  OTEL_BLRP_SCHEDULE_DELAY: 5e3,
  OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
  OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
  OTEL_EXPORTER_JAEGER_ENDPOINT: "",
  OTEL_EXPORTER_JAEGER_PASSWORD: "",
  OTEL_EXPORTER_JAEGER_USER: "",
  OTEL_EXPORTER_OTLP_ENDPOINT: "",
  OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
  OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
  OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
  OTEL_EXPORTER_OTLP_HEADERS: "",
  OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
  OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
  OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
  OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
  OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
  OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
  OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
  OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
  OTEL_LOG_LEVEL: DiagLogLevel.INFO,
  OTEL_NO_PATCH_MODULES: [],
  OTEL_PROPAGATORS: ["tracecontext", "baggage"],
  OTEL_RESOURCE_ATTRIBUTES: "",
  OTEL_SERVICE_NAME: "",
  OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
  OTEL_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
  OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
  OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
  OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
  OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: DEFAULT_ATTRIBUTE_COUNT_LIMIT,
  OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
  OTEL_SPAN_LINK_COUNT_LIMIT: 128,
  OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
  OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
  OTEL_TRACES_EXPORTER: "",
  OTEL_TRACES_SAMPLER: TracesSamplerValues.ParentBasedAlwaysOn,
  OTEL_TRACES_SAMPLER_ARG: "",
  OTEL_LOGS_EXPORTER: "",
  OTEL_EXPORTER_OTLP_INSECURE: "",
  OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
  OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
  OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
  OTEL_EXPORTER_OTLP_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_COMPRESSION: "",
  OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
  OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
  OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
  OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
  OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
  OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
  OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
  OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
  OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
  OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
  OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
  OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
  OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative",
  OTEL_SEMCONV_STABILITY_OPT_IN: []
};
function parseBoolean(key, environment, values) {
  if (typeof values[key] === "undefined") {
    return;
  }
  var value = String(values[key]);
  environment[key] = value.toLowerCase() === "true";
}
function parseNumber(name2, environment, values, min, max2) {
  if (min === void 0) {
    min = -Infinity;
  }
  if (max2 === void 0) {
    max2 = Infinity;
  }
  if (typeof values[name2] !== "undefined") {
    var value = Number(values[name2]);
    if (!isNaN(value)) {
      if (value < min) {
        environment[name2] = min;
      } else if (value > max2) {
        environment[name2] = max2;
      } else {
        environment[name2] = value;
      }
    }
  }
}
function parseStringList(name2, output, input, separator2) {
  if (separator2 === void 0) {
    separator2 = DEFAULT_LIST_SEPARATOR;
  }
  var givenValue = input[name2];
  if (typeof givenValue === "string") {
    output[name2] = givenValue.split(separator2).map(function(v) {
      return v.trim();
    });
  }
}
var logLevelMap = {
  ALL: DiagLogLevel.ALL,
  VERBOSE: DiagLogLevel.VERBOSE,
  DEBUG: DiagLogLevel.DEBUG,
  INFO: DiagLogLevel.INFO,
  WARN: DiagLogLevel.WARN,
  ERROR: DiagLogLevel.ERROR,
  NONE: DiagLogLevel.NONE
};
function setLogLevelFromEnv(key, environment, values) {
  var value = values[key];
  if (typeof value === "string") {
    var theLevel = logLevelMap[value.toUpperCase()];
    if (theLevel != null) {
      environment[key] = theLevel;
    }
  }
}
function parseEnvironment(values) {
  var environment = {};
  for (var env in DEFAULT_ENVIRONMENT) {
    var key = env;
    switch (key) {
      case "OTEL_LOG_LEVEL":
        setLogLevelFromEnv(key, environment, values);
        break;
      default:
        if (isEnvVarABoolean(key)) {
          parseBoolean(key, environment, values);
        } else if (isEnvVarANumber(key)) {
          parseNumber(key, environment, values);
        } else if (isEnvVarAList(key)) {
          parseStringList(key, environment, values);
        } else {
          var value = values[key];
          if (typeof value !== "undefined" && value !== null) {
            environment[key] = String(value);
          }
        }
    }
  }
  return environment;
}
function getEnv() {
  var processEnv = parseEnvironment(process.env);
  return Object.assign({}, DEFAULT_ENVIRONMENT, processEnv);
}
function getEnvWithoutDefaults() {
  return parseEnvironment(process.env);
}
var _globalThis = typeof globalThis === "object" ? globalThis : global;
function intValue(charCode) {
  if (charCode >= 48 && charCode <= 57) {
    return charCode - 48;
  }
  if (charCode >= 97 && charCode <= 102) {
    return charCode - 87;
  }
  return charCode - 55;
}
function hexToBinary(hexStr) {
  var buf = new Uint8Array(hexStr.length / 2);
  var offset = 0;
  for (var i = 0; i < hexStr.length; i += 2) {
    var hi = intValue(hexStr.charCodeAt(i));
    var lo = intValue(hexStr.charCodeAt(i + 1));
    buf[offset++] = hi << 4 | lo;
  }
  return buf;
}
function hexToBase64(hexStr) {
  return Buffer.from(hexToBinary(hexStr)).toString("base64");
}
var SPAN_ID_BYTES$1 = 8;
var TRACE_ID_BYTES$1 = 16;
var RandomIdGenerator$1 = (
  /** @class */
  /* @__PURE__ */ function() {
    function RandomIdGenerator2() {
      this.generateTraceId = getIdGenerator$1(TRACE_ID_BYTES$1);
      this.generateSpanId = getIdGenerator$1(SPAN_ID_BYTES$1);
    }
    return RandomIdGenerator2;
  }()
);
var SHARED_BUFFER$1 = Buffer.allocUnsafe(TRACE_ID_BYTES$1);
function getIdGenerator$1(bytes) {
  return function generateId() {
    for (var i = 0; i < bytes / 4; i++) {
      SHARED_BUFFER$1.writeUInt32BE(Math.random() * Math.pow(2, 32) >>> 0, i * 4);
    }
    for (var i = 0; i < bytes; i++) {
      if (SHARED_BUFFER$1[i] > 0) {
        break;
      } else if (i === bytes - 1) {
        SHARED_BUFFER$1[bytes - 1] = 1;
      }
    }
    return SHARED_BUFFER$1.toString("hex", 0, bytes);
  };
}
var otperformance = perf_hooks$2.performance;
var VERSION$1 = "1.30.1";
var _a2;
var SDK_INFO = (_a2 = {}, _a2[SEMRESATTRS_TELEMETRY_SDK_NAME] = "opentelemetry", _a2[SEMRESATTRS_PROCESS_RUNTIME_NAME] = "node", _a2[SEMRESATTRS_TELEMETRY_SDK_LANGUAGE] = TELEMETRYSDKLANGUAGEVALUES_NODEJS, _a2[SEMRESATTRS_TELEMETRY_SDK_VERSION] = VERSION$1, _a2);
function unrefTimer(timer) {
  timer.unref();
}
var NANOSECOND_DIGITS = 9;
var NANOSECOND_DIGITS_IN_MILLIS = 6;
var MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
var SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
function millisToHrTime(epochMillis) {
  var epochSeconds = epochMillis / 1e3;
  var seconds = Math.trunc(epochSeconds);
  var nanos = Math.round(epochMillis % 1e3 * MILLISECONDS_TO_NANOSECONDS);
  return [seconds, nanos];
}
function getTimeOrigin() {
  var timeOrigin = otperformance.timeOrigin;
  if (typeof timeOrigin !== "number") {
    var perf = otperformance;
    timeOrigin = perf.timing && perf.timing.fetchStart;
  }
  return timeOrigin;
}
function hrTime(performanceNow) {
  var timeOrigin = millisToHrTime(getTimeOrigin());
  var now = millisToHrTime(typeof performanceNow === "number" ? performanceNow : otperformance.now());
  return addHrTimes(timeOrigin, now);
}
function timeInputToHrTime(time) {
  if (isTimeInputHrTime(time)) {
    return time;
  } else if (typeof time === "number") {
    if (time < getTimeOrigin()) {
      return hrTime(time);
    } else {
      return millisToHrTime(time);
    }
  } else if (time instanceof Date) {
    return millisToHrTime(time.getTime());
  } else {
    throw TypeError("Invalid input type");
  }
}
function hrTimeDuration(startTime, endTime) {
  var seconds = endTime[0] - startTime[0];
  var nanos = endTime[1] - startTime[1];
  if (nanos < 0) {
    seconds -= 1;
    nanos += SECOND_TO_NANOSECONDS;
  }
  return [seconds, nanos];
}
function hrTimeToTimeStamp(time) {
  var precision = NANOSECOND_DIGITS;
  var tmp2 = "" + "0".repeat(precision) + time[1] + "Z";
  var nanoString = tmp2.substring(tmp2.length - precision - 1);
  var date = new Date(time[0] * 1e3).toISOString();
  return date.replace("000Z", nanoString);
}
function hrTimeToNanoseconds(time) {
  return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
function hrTimeToMilliseconds(time) {
  return time[0] * 1e3 + time[1] / 1e6;
}
function hrTimeToMicroseconds(time) {
  return time[0] * 1e6 + time[1] / 1e3;
}
function isTimeInputHrTime(value) {
  return Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number";
}
function isTimeInput(value) {
  return isTimeInputHrTime(value) || typeof value === "number" || value instanceof Date;
}
function addHrTimes(time1, time2) {
  var out = [time1[0] + time2[0], time1[1] + time2[1]];
  if (out[1] >= SECOND_TO_NANOSECONDS) {
    out[1] -= SECOND_TO_NANOSECONDS;
    out[0] += 1;
  }
  return out;
}
var ExportResultCode;
(function(ExportResultCode2) {
  ExportResultCode2[ExportResultCode2["SUCCESS"] = 0] = "SUCCESS";
  ExportResultCode2[ExportResultCode2["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {}));
var __values$3 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var CompositePropagator = (
  /** @class */
  function() {
    function CompositePropagator2(config) {
      if (config === void 0) {
        config = {};
      }
      var _a3;
      this._propagators = (_a3 = config.propagators) !== null && _a3 !== void 0 ? _a3 : [];
      this._fields = Array.from(new Set(this._propagators.map(function(p) {
        return typeof p.fields === "function" ? p.fields() : [];
      }).reduce(function(x, y) {
        return x.concat(y);
      }, [])));
    }
    CompositePropagator2.prototype.inject = function(context2, carrier, setter) {
      var e_1, _a3;
      try {
        for (var _b2 = __values$3(this._propagators), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var propagator = _c2.value;
          try {
            propagator.inject(context2, carrier, setter);
          } catch (err) {
            diag.warn("Failed to inject with " + propagator.constructor.name + ". Err: " + err.message);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    CompositePropagator2.prototype.extract = function(context2, carrier, getter) {
      return this._propagators.reduce(function(ctx, propagator) {
        try {
          return propagator.extract(ctx, carrier, getter);
        } catch (err) {
          diag.warn("Failed to extract with " + propagator.constructor.name + ". Err: " + err.message);
        }
        return ctx;
      }, context2);
    };
    CompositePropagator2.prototype.fields = function() {
      return this._fields.slice();
    };
    return CompositePropagator2;
  }()
);
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
  return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
  return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
var TraceState = (
  /** @class */
  function() {
    function TraceState2(rawTraceState) {
      this._internalState = /* @__PURE__ */ new Map();
      if (rawTraceState)
        this._parse(rawTraceState);
    }
    TraceState2.prototype.set = function(key, value) {
      var traceState = this._clone();
      if (traceState._internalState.has(key)) {
        traceState._internalState.delete(key);
      }
      traceState._internalState.set(key, value);
      return traceState;
    };
    TraceState2.prototype.unset = function(key) {
      var traceState = this._clone();
      traceState._internalState.delete(key);
      return traceState;
    };
    TraceState2.prototype.get = function(key) {
      return this._internalState.get(key);
    };
    TraceState2.prototype.serialize = function() {
      var _this = this;
      return this._keys().reduce(function(agg, key) {
        agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
        return agg;
      }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceState2.prototype._parse = function(rawTraceState) {
      if (rawTraceState.length > MAX_TRACE_STATE_LEN)
        return;
      this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse().reduce(function(agg, part) {
        var listMember = part.trim();
        var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
        if (i !== -1) {
          var key = listMember.slice(0, i);
          var value = listMember.slice(i + 1, part.length);
          if (validateKey(key) && validateValue(value)) {
            agg.set(key, value);
          }
        }
        return agg;
      }, /* @__PURE__ */ new Map());
      if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
      }
    };
    TraceState2.prototype._keys = function() {
      return Array.from(this._internalState.keys()).reverse();
    };
    TraceState2.prototype._clone = function() {
      var traceState = new TraceState2();
      traceState._internalState = new Map(this._internalState);
      return traceState;
    };
    return TraceState2;
  }()
);
var TRACE_PARENT_HEADER = "traceparent";
var TRACE_STATE_HEADER = "tracestate";
var VERSION = "00";
var VERSION_PART = "(?!ff)[\\da-f]{2}";
var TRACE_ID_PART = "(?![0]{32})[\\da-f]{32}";
var PARENT_ID_PART = "(?![0]{16})[\\da-f]{16}";
var FLAGS_PART = "[\\da-f]{2}";
var TRACE_PARENT_REGEX = new RegExp("^\\s?(" + VERSION_PART + ")-(" + TRACE_ID_PART + ")-(" + PARENT_ID_PART + ")-(" + FLAGS_PART + ")(-.*)?\\s?$");
function parseTraceParent(traceParent) {
  var match = TRACE_PARENT_REGEX.exec(traceParent);
  if (!match)
    return null;
  if (match[1] === "00" && match[5])
    return null;
  return {
    traceId: match[2],
    spanId: match[3],
    traceFlags: parseInt(match[4], 16)
  };
}
var W3CTraceContextPropagator = (
  /** @class */
  function() {
    function W3CTraceContextPropagator2() {
    }
    W3CTraceContextPropagator2.prototype.inject = function(context2, carrier, setter) {
      var spanContext = trace.getSpanContext(context2);
      if (!spanContext || isTracingSuppressed(context2) || !isSpanContextValid(spanContext))
        return;
      var traceParent = VERSION + "-" + spanContext.traceId + "-" + spanContext.spanId + "-0" + Number(spanContext.traceFlags || TraceFlags.NONE).toString(16);
      setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
      if (spanContext.traceState) {
        setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
      }
    };
    W3CTraceContextPropagator2.prototype.extract = function(context2, carrier, getter) {
      var traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
      if (!traceParentHeader)
        return context2;
      var traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
      if (typeof traceParent !== "string")
        return context2;
      var spanContext = parseTraceParent(traceParent);
      if (!spanContext)
        return context2;
      spanContext.isRemote = true;
      var traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
      if (traceStateHeader) {
        var state = Array.isArray(traceStateHeader) ? traceStateHeader.join(",") : traceStateHeader;
        spanContext.traceState = new TraceState(typeof state === "string" ? state : void 0);
      }
      return trace.setSpanContext(context2, spanContext);
    };
    W3CTraceContextPropagator2.prototype.fields = function() {
      return [TRACE_PARENT_HEADER, TRACE_STATE_HEADER];
    };
    return W3CTraceContextPropagator2;
  }()
);
var RPC_METADATA_KEY = createContextKey("OpenTelemetry SDK Context Key RPC_METADATA");
var RPCType;
(function(RPCType2) {
  RPCType2["HTTP"] = "http";
})(RPCType || (RPCType = {}));
function setRPCMetadata(context2, meta) {
  return context2.setValue(RPC_METADATA_KEY, meta);
}
function deleteRPCMetadata(context2) {
  return context2.deleteValue(RPC_METADATA_KEY);
}
function getRPCMetadata(context2) {
  return context2.getValue(RPC_METADATA_KEY);
}
var AlwaysOffSampler$1 = (
  /** @class */
  function() {
    function AlwaysOffSampler2() {
    }
    AlwaysOffSampler2.prototype.shouldSample = function() {
      return {
        decision: SamplingDecision$1.NOT_RECORD
      };
    };
    AlwaysOffSampler2.prototype.toString = function() {
      return "AlwaysOffSampler";
    };
    return AlwaysOffSampler2;
  }()
);
var AlwaysOnSampler$1 = (
  /** @class */
  function() {
    function AlwaysOnSampler2() {
    }
    AlwaysOnSampler2.prototype.shouldSample = function() {
      return {
        decision: SamplingDecision$1.RECORD_AND_SAMPLED
      };
    };
    AlwaysOnSampler2.prototype.toString = function() {
      return "AlwaysOnSampler";
    };
    return AlwaysOnSampler2;
  }()
);
var ParentBasedSampler$1 = (
  /** @class */
  function() {
    function ParentBasedSampler2(config) {
      var _a3, _b2, _c2, _d;
      this._root = config.root;
      if (!this._root) {
        globalErrorHandler(new Error("ParentBasedSampler must have a root sampler configured"));
        this._root = new AlwaysOnSampler$1();
      }
      this._remoteParentSampled = (_a3 = config.remoteParentSampled) !== null && _a3 !== void 0 ? _a3 : new AlwaysOnSampler$1();
      this._remoteParentNotSampled = (_b2 = config.remoteParentNotSampled) !== null && _b2 !== void 0 ? _b2 : new AlwaysOffSampler$1();
      this._localParentSampled = (_c2 = config.localParentSampled) !== null && _c2 !== void 0 ? _c2 : new AlwaysOnSampler$1();
      this._localParentNotSampled = (_d = config.localParentNotSampled) !== null && _d !== void 0 ? _d : new AlwaysOffSampler$1();
    }
    ParentBasedSampler2.prototype.shouldSample = function(context2, traceId, spanName, spanKind, attributes, links) {
      var parentContext = trace.getSpanContext(context2);
      if (!parentContext || !isSpanContextValid(parentContext)) {
        return this._root.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      if (parentContext.isRemote) {
        if (parentContext.traceFlags & TraceFlags.SAMPLED) {
          return this._remoteParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
        }
        return this._remoteParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      if (parentContext.traceFlags & TraceFlags.SAMPLED) {
        return this._localParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      return this._localParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    };
    ParentBasedSampler2.prototype.toString = function() {
      return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
    };
    return ParentBasedSampler2;
  }()
);
var TraceIdRatioBasedSampler$1 = (
  /** @class */
  function() {
    function TraceIdRatioBasedSampler2(_ratio) {
      if (_ratio === void 0) {
        _ratio = 0;
      }
      this._ratio = _ratio;
      this._ratio = this._normalize(_ratio);
      this._upperBound = Math.floor(this._ratio * 4294967295);
    }
    TraceIdRatioBasedSampler2.prototype.shouldSample = function(context2, traceId) {
      return {
        decision: isValidTraceId(traceId) && this._accumulate(traceId) < this._upperBound ? SamplingDecision$1.RECORD_AND_SAMPLED : SamplingDecision$1.NOT_RECORD
      };
    };
    TraceIdRatioBasedSampler2.prototype.toString = function() {
      return "TraceIdRatioBased{" + this._ratio + "}";
    };
    TraceIdRatioBasedSampler2.prototype._normalize = function(ratio) {
      if (typeof ratio !== "number" || isNaN(ratio))
        return 0;
      return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    };
    TraceIdRatioBasedSampler2.prototype._accumulate = function(traceId) {
      var accumulation = 0;
      for (var i = 0; i < traceId.length / 8; i++) {
        var pos = i * 8;
        var part = parseInt(traceId.slice(pos, pos + 8), 16);
        accumulation = (accumulation ^ part) >>> 0;
      }
      return accumulation;
    };
    return TraceIdRatioBasedSampler2;
  }()
);
var objectTag = "[object Object]";
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
var objectCtorString = funcToString.call(Object);
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
var nativeObjectToString = objectProto.toString;
function overArg(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  var unmasked = false;
  try {
    value[symToStringTag] = void 0;
    unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var MAX_LEVEL = 20;
function merge() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var result = args.shift();
  var objects = /* @__PURE__ */ new WeakMap();
  while (args.length > 0) {
    result = mergeTwoObjects(result, args.shift(), 0, objects);
  }
  return result;
}
function takeValue(value) {
  if (isArray(value)) {
    return value.slice();
  }
  return value;
}
function mergeTwoObjects(one, two, level, objects) {
  if (level === void 0) {
    level = 0;
  }
  var result;
  if (level > MAX_LEVEL) {
    return void 0;
  }
  level++;
  if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
    result = takeValue(two);
  } else if (isArray(one)) {
    result = one.slice();
    if (isArray(two)) {
      for (var i = 0, j = two.length; i < j; i++) {
        result.push(takeValue(two[i]));
      }
    } else if (isObject(two)) {
      var keys = Object.keys(two);
      for (var i = 0, j = keys.length; i < j; i++) {
        var key = keys[i];
        result[key] = takeValue(two[key]);
      }
    }
  } else if (isObject(one)) {
    if (isObject(two)) {
      if (!shouldMerge(one, two)) {
        return two;
      }
      result = Object.assign({}, one);
      var keys = Object.keys(two);
      for (var i = 0, j = keys.length; i < j; i++) {
        var key = keys[i];
        var twoValue = two[key];
        if (isPrimitive(twoValue)) {
          if (typeof twoValue === "undefined") {
            delete result[key];
          } else {
            result[key] = twoValue;
          }
        } else {
          var obj1 = result[key];
          var obj2 = twoValue;
          if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) {
            delete result[key];
          } else {
            if (isObject(obj1) && isObject(obj2)) {
              var arr1 = objects.get(obj1) || [];
              var arr2 = objects.get(obj2) || [];
              arr1.push({ obj: one, key });
              arr2.push({ obj: two, key });
              objects.set(obj1, arr1);
              objects.set(obj2, arr2);
            }
            result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
          }
        }
      }
    } else {
      result = two;
    }
  }
  return result;
}
function wasObjectReferenced(obj, key, objects) {
  var arr = objects.get(obj[key]) || [];
  for (var i = 0, j = arr.length; i < j; i++) {
    var info = arr[i];
    if (info.key === key && info.obj === obj) {
      return true;
    }
  }
  return false;
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === "object";
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
  if (!isPlainObject(one) || !isPlainObject(two)) {
    return false;
  }
  return true;
}
var __extends$1 = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var TimeoutError = (
  /** @class */
  function(_super) {
    __extends$1(TimeoutError2, _super);
    function TimeoutError2(message) {
      var _this = _super.call(this, message) || this;
      Object.setPrototypeOf(_this, TimeoutError2.prototype);
      return _this;
    }
    return TimeoutError2;
  }(Error)
);
function callWithTimeout(promise, timeout) {
  var timeoutHandle;
  var timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
    timeoutHandle = setTimeout(function timeoutHandler() {
      reject(new TimeoutError("Operation timed out."));
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise]).then(function(result) {
    clearTimeout(timeoutHandle);
    return result;
  }, function(reason) {
    clearTimeout(timeoutHandle);
    throw reason;
  });
}
var __values$2 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function urlMatches(url2, urlToMatch) {
  if (typeof urlToMatch === "string") {
    return url2 === urlToMatch;
  } else {
    return !!url2.match(urlToMatch);
  }
}
function isUrlIgnored(url2, ignoredUrls) {
  var e_1, _a3;
  if (!ignoredUrls) {
    return false;
  }
  try {
    for (var ignoredUrls_1 = __values$2(ignoredUrls), ignoredUrls_1_1 = ignoredUrls_1.next(); !ignoredUrls_1_1.done; ignoredUrls_1_1 = ignoredUrls_1.next()) {
      var ignoreUrl = ignoredUrls_1_1.value;
      if (urlMatches(url2, ignoreUrl)) {
        return true;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (ignoredUrls_1_1 && !ignoredUrls_1_1.done && (_a3 = ignoredUrls_1.return)) _a3.call(ignoredUrls_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return false;
}
function isWrapped(func) {
  return typeof func === "function" && typeof func.__original === "function" && typeof func.__unwrap === "function" && func.__wrapped === true;
}
var Deferred = (
  /** @class */
  function() {
    function Deferred2() {
      var _this = this;
      this._promise = new Promise(function(resolve3, reject) {
        _this._resolve = resolve3;
        _this._reject = reject;
      });
    }
    Object.defineProperty(Deferred2.prototype, "promise", {
      get: function() {
        return this._promise;
      },
      enumerable: false,
      configurable: true
    });
    Deferred2.prototype.resolve = function(val) {
      this._resolve(val);
    };
    Deferred2.prototype.reject = function(err) {
      this._reject(err);
    };
    return Deferred2;
  }()
);
var __read$3 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray$2 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var BindOnceFuture = (
  /** @class */
  function() {
    function BindOnceFuture2(_callback, _that) {
      this._callback = _callback;
      this._that = _that;
      this._isCalled = false;
      this._deferred = new Deferred();
    }
    Object.defineProperty(BindOnceFuture2.prototype, "isCalled", {
      get: function() {
        return this._isCalled;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BindOnceFuture2.prototype, "promise", {
      get: function() {
        return this._deferred.promise;
      },
      enumerable: false,
      configurable: true
    });
    BindOnceFuture2.prototype.call = function() {
      var _a3;
      var _this = this;
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (!this._isCalled) {
        this._isCalled = true;
        try {
          Promise.resolve((_a3 = this._callback).call.apply(_a3, __spreadArray$2([this._that], __read$3(args), false))).then(function(val) {
            return _this._deferred.resolve(val);
          }, function(err) {
            return _this._deferred.reject(err);
          });
        } catch (err) {
          this._deferred.reject(err);
        }
      }
      return this._deferred.promise;
    };
    return BindOnceFuture2;
  }()
);
function _export(exporter, arg) {
  return new Promise(function(resolve3) {
    context.with(suppressTracing$1(context.active()), function() {
      exporter.export(arg, function(result) {
        resolve3(result);
      });
    });
  });
}
var baggageUtils = {
  getKeyPairs,
  serializeKeyPairs,
  parseKeyPairsIntoRecord,
  parsePairKeyValue
};
var internal = {
  _export
};
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlwaysOffSampler: AlwaysOffSampler$1,
  AlwaysOnSampler: AlwaysOnSampler$1,
  AnchoredClock,
  BindOnceFuture,
  CompositePropagator,
  DEFAULT_ATTRIBUTE_COUNT_LIMIT,
  DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
  DEFAULT_ENVIRONMENT,
  DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
  DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
  get ExportResultCode() {
    return ExportResultCode;
  },
  ParentBasedSampler: ParentBasedSampler$1,
  get RPCType() {
    return RPCType;
  },
  RandomIdGenerator: RandomIdGenerator$1,
  SDK_INFO,
  TRACE_PARENT_HEADER,
  TRACE_STATE_HEADER,
  TimeoutError,
  TraceIdRatioBasedSampler: TraceIdRatioBasedSampler$1,
  TraceState,
  get TracesSamplerValues() {
    return TracesSamplerValues;
  },
  VERSION: VERSION$1,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
  _globalThis,
  addHrTimes,
  baggageUtils,
  callWithTimeout,
  deleteRPCMetadata,
  getEnv,
  getEnvWithoutDefaults,
  getRPCMetadata,
  getTimeOrigin,
  globalErrorHandler,
  hexToBase64,
  hexToBinary,
  hrTime,
  hrTimeDuration,
  hrTimeToMicroseconds,
  hrTimeToMilliseconds,
  hrTimeToNanoseconds,
  hrTimeToTimeStamp,
  internal,
  isAttributeKey,
  isAttributeValue,
  isTimeInput,
  isTimeInputHrTime,
  isTracingSuppressed,
  isUrlIgnored,
  isWrapped,
  loggingErrorHandler,
  merge,
  millisToHrTime,
  otperformance,
  parseEnvironment,
  parseTraceParent,
  sanitizeAttributes,
  setGlobalErrorHandler,
  setRPCMetadata,
  suppressTracing: suppressTracing$1,
  timeInputToHrTime,
  unrefTimer,
  unsuppressTracing,
  urlMatches
}, Symbol.toStringTag, { value: "Module" }));
var ExceptionEventName = "exception";
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __values$1 = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read$2 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray$1 = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Span = (
  /** @class */
  function() {
    function Span2(parentTracer, context2, spanName, spanContext, kind, parentSpanId, links, startTime, _deprecatedClock, attributes) {
      if (links === void 0) {
        links = [];
      }
      this.attributes = {};
      this.links = [];
      this.events = [];
      this._droppedAttributesCount = 0;
      this._droppedEventsCount = 0;
      this._droppedLinksCount = 0;
      this.status = {
        code: SpanStatusCode.UNSET
      };
      this.endTime = [0, 0];
      this._ended = false;
      this._duration = [-1, -1];
      this.name = spanName;
      this._spanContext = spanContext;
      this.parentSpanId = parentSpanId;
      this.kind = kind;
      this.links = links;
      var now = Date.now();
      this._performanceStartTime = otperformance.now();
      this._performanceOffset = now - (this._performanceStartTime + getTimeOrigin());
      this._startTimeProvided = startTime != null;
      this.startTime = this._getTime(startTime !== null && startTime !== void 0 ? startTime : now);
      this.resource = parentTracer.resource;
      this.instrumentationLibrary = parentTracer.instrumentationLibrary;
      this._spanLimits = parentTracer.getSpanLimits();
      this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
      if (attributes != null) {
        this.setAttributes(attributes);
      }
      this._spanProcessor = parentTracer.getActiveSpanProcessor();
      this._spanProcessor.onStart(this, context2);
    }
    Span2.prototype.spanContext = function() {
      return this._spanContext;
    };
    Span2.prototype.setAttribute = function(key, value) {
      if (value == null || this._isSpanEnded())
        return this;
      if (key.length === 0) {
        diag.warn("Invalid attribute key: " + key);
        return this;
      }
      if (!isAttributeValue(value)) {
        diag.warn("Invalid attribute value set for key: " + key);
        return this;
      }
      if (Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
        this._droppedAttributesCount++;
        return this;
      }
      this.attributes[key] = this._truncateToSize(value);
      return this;
    };
    Span2.prototype.setAttributes = function(attributes) {
      var e_1, _a3;
      try {
        for (var _b2 = __values$1(Object.entries(attributes)), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var _d = __read$2(_c2.value, 2), k = _d[0], v = _d[1];
          this.setAttribute(k, v);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return this;
    };
    Span2.prototype.addEvent = function(name2, attributesOrStartTime, timeStamp) {
      if (this._isSpanEnded())
        return this;
      if (this._spanLimits.eventCountLimit === 0) {
        diag.warn("No events allowed.");
        this._droppedEventsCount++;
        return this;
      }
      if (this.events.length >= this._spanLimits.eventCountLimit) {
        if (this._droppedEventsCount === 0) {
          diag.debug("Dropping extra events.");
        }
        this.events.shift();
        this._droppedEventsCount++;
      }
      if (isTimeInput(attributesOrStartTime)) {
        if (!isTimeInput(timeStamp)) {
          timeStamp = attributesOrStartTime;
        }
        attributesOrStartTime = void 0;
      }
      var attributes = sanitizeAttributes(attributesOrStartTime);
      this.events.push({
        name: name2,
        attributes,
        time: this._getTime(timeStamp),
        droppedAttributesCount: 0
      });
      return this;
    };
    Span2.prototype.addLink = function(link) {
      this.links.push(link);
      return this;
    };
    Span2.prototype.addLinks = function(links) {
      var _a3;
      (_a3 = this.links).push.apply(_a3, __spreadArray$1([], __read$2(links), false));
      return this;
    };
    Span2.prototype.setStatus = function(status) {
      if (this._isSpanEnded())
        return this;
      this.status = __assign$1({}, status);
      if (this.status.message != null && typeof status.message !== "string") {
        diag.warn("Dropping invalid status.message of type '" + typeof status.message + "', expected 'string'");
        delete this.status.message;
      }
      return this;
    };
    Span2.prototype.updateName = function(name2) {
      if (this._isSpanEnded())
        return this;
      this.name = name2;
      return this;
    };
    Span2.prototype.end = function(endTime) {
      if (this._isSpanEnded()) {
        diag.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.");
        return;
      }
      this._ended = true;
      this.endTime = this._getTime(endTime);
      this._duration = hrTimeDuration(this.startTime, this.endTime);
      if (this._duration[0] < 0) {
        diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime);
        this.endTime = this.startTime.slice();
        this._duration = [0, 0];
      }
      if (this._droppedEventsCount > 0) {
        diag.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached");
      }
      this._spanProcessor.onEnd(this);
    };
    Span2.prototype._getTime = function(inp) {
      if (typeof inp === "number" && inp <= otperformance.now()) {
        return hrTime(inp + this._performanceOffset);
      }
      if (typeof inp === "number") {
        return millisToHrTime(inp);
      }
      if (inp instanceof Date) {
        return millisToHrTime(inp.getTime());
      }
      if (isTimeInputHrTime(inp)) {
        return inp;
      }
      if (this._startTimeProvided) {
        return millisToHrTime(Date.now());
      }
      var msDuration = otperformance.now() - this._performanceStartTime;
      return addHrTimes(this.startTime, millisToHrTime(msDuration));
    };
    Span2.prototype.isRecording = function() {
      return this._ended === false;
    };
    Span2.prototype.recordException = function(exception, time) {
      var attributes = {};
      if (typeof exception === "string") {
        attributes[SEMATTRS_EXCEPTION_MESSAGE] = exception;
      } else if (exception) {
        if (exception.code) {
          attributes[SEMATTRS_EXCEPTION_TYPE] = exception.code.toString();
        } else if (exception.name) {
          attributes[SEMATTRS_EXCEPTION_TYPE] = exception.name;
        }
        if (exception.message) {
          attributes[SEMATTRS_EXCEPTION_MESSAGE] = exception.message;
        }
        if (exception.stack) {
          attributes[SEMATTRS_EXCEPTION_STACKTRACE] = exception.stack;
        }
      }
      if (attributes[SEMATTRS_EXCEPTION_TYPE] || attributes[SEMATTRS_EXCEPTION_MESSAGE]) {
        this.addEvent(ExceptionEventName, attributes, time);
      } else {
        diag.warn("Failed to record an exception " + exception);
      }
    };
    Object.defineProperty(Span2.prototype, "duration", {
      get: function() {
        return this._duration;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "ended", {
      get: function() {
        return this._ended;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "droppedAttributesCount", {
      get: function() {
        return this._droppedAttributesCount;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "droppedEventsCount", {
      get: function() {
        return this._droppedEventsCount;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Span2.prototype, "droppedLinksCount", {
      get: function() {
        return this._droppedLinksCount;
      },
      enumerable: false,
      configurable: true
    });
    Span2.prototype._isSpanEnded = function() {
      if (this._ended) {
        diag.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}");
      }
      return this._ended;
    };
    Span2.prototype._truncateToLimitUtil = function(value, limit) {
      if (value.length <= limit) {
        return value;
      }
      return value.substring(0, limit);
    };
    Span2.prototype._truncateToSize = function(value) {
      var _this = this;
      var limit = this._attributeValueLengthLimit;
      if (limit <= 0) {
        diag.warn("Attribute value limit must be positive, got " + limit);
        return value;
      }
      if (typeof value === "string") {
        return this._truncateToLimitUtil(value, limit);
      }
      if (Array.isArray(value)) {
        return value.map(function(val) {
          return typeof val === "string" ? _this._truncateToLimitUtil(val, limit) : val;
        });
      }
      return value;
    };
    return Span2;
  }()
);
var SamplingDecision;
(function(SamplingDecision2) {
  SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
  SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
  SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
var AlwaysOffSampler = (
  /** @class */
  function() {
    function AlwaysOffSampler2() {
    }
    AlwaysOffSampler2.prototype.shouldSample = function() {
      return {
        decision: SamplingDecision.NOT_RECORD
      };
    };
    AlwaysOffSampler2.prototype.toString = function() {
      return "AlwaysOffSampler";
    };
    return AlwaysOffSampler2;
  }()
);
var AlwaysOnSampler = (
  /** @class */
  function() {
    function AlwaysOnSampler2() {
    }
    AlwaysOnSampler2.prototype.shouldSample = function() {
      return {
        decision: SamplingDecision.RECORD_AND_SAMPLED
      };
    };
    AlwaysOnSampler2.prototype.toString = function() {
      return "AlwaysOnSampler";
    };
    return AlwaysOnSampler2;
  }()
);
var ParentBasedSampler = (
  /** @class */
  function() {
    function ParentBasedSampler2(config) {
      var _a3, _b2, _c2, _d;
      this._root = config.root;
      if (!this._root) {
        globalErrorHandler(new Error("ParentBasedSampler must have a root sampler configured"));
        this._root = new AlwaysOnSampler();
      }
      this._remoteParentSampled = (_a3 = config.remoteParentSampled) !== null && _a3 !== void 0 ? _a3 : new AlwaysOnSampler();
      this._remoteParentNotSampled = (_b2 = config.remoteParentNotSampled) !== null && _b2 !== void 0 ? _b2 : new AlwaysOffSampler();
      this._localParentSampled = (_c2 = config.localParentSampled) !== null && _c2 !== void 0 ? _c2 : new AlwaysOnSampler();
      this._localParentNotSampled = (_d = config.localParentNotSampled) !== null && _d !== void 0 ? _d : new AlwaysOffSampler();
    }
    ParentBasedSampler2.prototype.shouldSample = function(context2, traceId, spanName, spanKind, attributes, links) {
      var parentContext = trace.getSpanContext(context2);
      if (!parentContext || !isSpanContextValid(parentContext)) {
        return this._root.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      if (parentContext.isRemote) {
        if (parentContext.traceFlags & TraceFlags.SAMPLED) {
          return this._remoteParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
        }
        return this._remoteParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      if (parentContext.traceFlags & TraceFlags.SAMPLED) {
        return this._localParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      return this._localParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    };
    ParentBasedSampler2.prototype.toString = function() {
      return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}";
    };
    return ParentBasedSampler2;
  }()
);
var TraceIdRatioBasedSampler = (
  /** @class */
  function() {
    function TraceIdRatioBasedSampler2(_ratio) {
      if (_ratio === void 0) {
        _ratio = 0;
      }
      this._ratio = _ratio;
      this._ratio = this._normalize(_ratio);
      this._upperBound = Math.floor(this._ratio * 4294967295);
    }
    TraceIdRatioBasedSampler2.prototype.shouldSample = function(context2, traceId) {
      return {
        decision: isValidTraceId(traceId) && this._accumulate(traceId) < this._upperBound ? SamplingDecision.RECORD_AND_SAMPLED : SamplingDecision.NOT_RECORD
      };
    };
    TraceIdRatioBasedSampler2.prototype.toString = function() {
      return "TraceIdRatioBased{" + this._ratio + "}";
    };
    TraceIdRatioBasedSampler2.prototype._normalize = function(ratio) {
      if (typeof ratio !== "number" || isNaN(ratio))
        return 0;
      return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    };
    TraceIdRatioBasedSampler2.prototype._accumulate = function(traceId) {
      var accumulation = 0;
      for (var i = 0; i < traceId.length / 8; i++) {
        var pos = i * 8;
        var part = parseInt(traceId.slice(pos, pos + 8), 16);
        accumulation = (accumulation ^ part) >>> 0;
      }
      return accumulation;
    };
    return TraceIdRatioBasedSampler2;
  }()
);
var FALLBACK_OTEL_TRACES_SAMPLER = TracesSamplerValues.AlwaysOn;
var DEFAULT_RATIO = 1;
function loadDefaultConfig() {
  var env = getEnv();
  return {
    sampler: buildSamplerFromEnv(env),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: env.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: env.OTEL_ATTRIBUTE_COUNT_LIMIT
    },
    spanLimits: {
      attributeValueLengthLimit: env.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: env.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
      linkCountLimit: env.OTEL_SPAN_LINK_COUNT_LIMIT,
      eventCountLimit: env.OTEL_SPAN_EVENT_COUNT_LIMIT,
      attributePerEventCountLimit: env.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
      attributePerLinkCountLimit: env.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
    },
    mergeResourceWithDefaults: true
  };
}
function buildSamplerFromEnv(environment) {
  if (environment === void 0) {
    environment = getEnv();
  }
  switch (environment.OTEL_TRACES_SAMPLER) {
    case TracesSamplerValues.AlwaysOn:
      return new AlwaysOnSampler();
    case TracesSamplerValues.AlwaysOff:
      return new AlwaysOffSampler();
    case TracesSamplerValues.ParentBasedAlwaysOn:
      return new ParentBasedSampler({
        root: new AlwaysOnSampler()
      });
    case TracesSamplerValues.ParentBasedAlwaysOff:
      return new ParentBasedSampler({
        root: new AlwaysOffSampler()
      });
    case TracesSamplerValues.TraceIdRatio:
      return new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment));
    case TracesSamplerValues.ParentBasedTraceIdRatio:
      return new ParentBasedSampler({
        root: new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv(environment))
      });
    default:
      diag.error('OTEL_TRACES_SAMPLER value "' + environment.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + FALLBACK_OTEL_TRACES_SAMPLER + '".');
      return new AlwaysOnSampler();
  }
}
function getSamplerProbabilityFromEnv(environment) {
  if (environment.OTEL_TRACES_SAMPLER_ARG === void 0 || environment.OTEL_TRACES_SAMPLER_ARG === "") {
    diag.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + DEFAULT_RATIO + ".");
    return DEFAULT_RATIO;
  }
  var probability = Number(environment.OTEL_TRACES_SAMPLER_ARG);
  if (isNaN(probability)) {
    diag.error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + DEFAULT_RATIO + ".");
    return DEFAULT_RATIO;
  }
  if (probability < 0 || probability > 1) {
    diag.error("OTEL_TRACES_SAMPLER_ARG=" + environment.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + DEFAULT_RATIO + ".");
    return DEFAULT_RATIO;
  }
  return probability;
}
function mergeConfig(userConfig) {
  var perInstanceDefaults = {
    sampler: buildSamplerFromEnv()
  };
  var DEFAULT_CONFIG = loadDefaultConfig();
  var target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
  target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
  target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
  return target;
}
function reconfigureLimits(userConfig) {
  var _a3, _b2, _c2, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  var spanLimits = Object.assign({}, userConfig.spanLimits);
  var parsedEnvConfig = getEnvWithoutDefaults();
  spanLimits.attributeCountLimit = (_f = (_e = (_d = (_b2 = (_a3 = userConfig.spanLimits) === null || _a3 === void 0 ? void 0 : _a3.attributeCountLimit) !== null && _b2 !== void 0 ? _b2 : (_c2 = userConfig.generalLimits) === null || _c2 === void 0 ? void 0 : _c2.attributeCountLimit) !== null && _d !== void 0 ? _d : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && _e !== void 0 ? _e : parsedEnvConfig.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && _f !== void 0 ? _f : DEFAULT_ATTRIBUTE_COUNT_LIMIT;
  spanLimits.attributeValueLengthLimit = (_m = (_l = (_k = (_h = (_g = userConfig.spanLimits) === null || _g === void 0 ? void 0 : _g.attributeValueLengthLimit) !== null && _h !== void 0 ? _h : (_j = userConfig.generalLimits) === null || _j === void 0 ? void 0 : _j.attributeValueLengthLimit) !== null && _k !== void 0 ? _k : parsedEnvConfig.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _l !== void 0 ? _l : parsedEnvConfig.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _m !== void 0 ? _m : DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT;
  return Object.assign({}, userConfig, { spanLimits });
}
var BatchSpanProcessorBase = (
  /** @class */
  function() {
    function BatchSpanProcessorBase2(_exporter, config) {
      this._exporter = _exporter;
      this._isExporting = false;
      this._finishedSpans = [];
      this._droppedSpansCount = 0;
      var env = getEnv();
      this._maxExportBatchSize = typeof (config === null || config === void 0 ? void 0 : config.maxExportBatchSize) === "number" ? config.maxExportBatchSize : env.OTEL_BSP_MAX_EXPORT_BATCH_SIZE;
      this._maxQueueSize = typeof (config === null || config === void 0 ? void 0 : config.maxQueueSize) === "number" ? config.maxQueueSize : env.OTEL_BSP_MAX_QUEUE_SIZE;
      this._scheduledDelayMillis = typeof (config === null || config === void 0 ? void 0 : config.scheduledDelayMillis) === "number" ? config.scheduledDelayMillis : env.OTEL_BSP_SCHEDULE_DELAY;
      this._exportTimeoutMillis = typeof (config === null || config === void 0 ? void 0 : config.exportTimeoutMillis) === "number" ? config.exportTimeoutMillis : env.OTEL_BSP_EXPORT_TIMEOUT;
      this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
      if (this._maxExportBatchSize > this._maxQueueSize) {
        diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
        this._maxExportBatchSize = this._maxQueueSize;
      }
    }
    BatchSpanProcessorBase2.prototype.forceFlush = function() {
      if (this._shutdownOnce.isCalled) {
        return this._shutdownOnce.promise;
      }
      return this._flushAll();
    };
    BatchSpanProcessorBase2.prototype.onStart = function(_span, _parentContext) {
    };
    BatchSpanProcessorBase2.prototype.onEnd = function(span) {
      if (this._shutdownOnce.isCalled) {
        return;
      }
      if ((span.spanContext().traceFlags & TraceFlags.SAMPLED) === 0) {
        return;
      }
      this._addToBuffer(span);
    };
    BatchSpanProcessorBase2.prototype.shutdown = function() {
      return this._shutdownOnce.call();
    };
    BatchSpanProcessorBase2.prototype._shutdown = function() {
      var _this = this;
      return Promise.resolve().then(function() {
        return _this.onShutdown();
      }).then(function() {
        return _this._flushAll();
      }).then(function() {
        return _this._exporter.shutdown();
      });
    };
    BatchSpanProcessorBase2.prototype._addToBuffer = function(span) {
      if (this._finishedSpans.length >= this._maxQueueSize) {
        if (this._droppedSpansCount === 0) {
          diag.debug("maxQueueSize reached, dropping spans");
        }
        this._droppedSpansCount++;
        return;
      }
      if (this._droppedSpansCount > 0) {
        diag.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached");
        this._droppedSpansCount = 0;
      }
      this._finishedSpans.push(span);
      this._maybeStartTimer();
    };
    BatchSpanProcessorBase2.prototype._flushAll = function() {
      var _this = this;
      return new Promise(function(resolve3, reject) {
        var promises = [];
        var count = Math.ceil(_this._finishedSpans.length / _this._maxExportBatchSize);
        for (var i = 0, j = count; i < j; i++) {
          promises.push(_this._flushOneBatch());
        }
        Promise.all(promises).then(function() {
          resolve3();
        }).catch(reject);
      });
    };
    BatchSpanProcessorBase2.prototype._flushOneBatch = function() {
      var _this = this;
      this._clearTimer();
      if (this._finishedSpans.length === 0) {
        return Promise.resolve();
      }
      return new Promise(function(resolve3, reject) {
        var timer = setTimeout(function() {
          reject(new Error("Timeout"));
        }, _this._exportTimeoutMillis);
        context.with(suppressTracing$1(context.active()), function() {
          var spans;
          if (_this._finishedSpans.length <= _this._maxExportBatchSize) {
            spans = _this._finishedSpans;
            _this._finishedSpans = [];
          } else {
            spans = _this._finishedSpans.splice(0, _this._maxExportBatchSize);
          }
          var doExport = function() {
            return _this._exporter.export(spans, function(result) {
              var _a3;
              clearTimeout(timer);
              if (result.code === ExportResultCode.SUCCESS) {
                resolve3();
              } else {
                reject((_a3 = result.error) !== null && _a3 !== void 0 ? _a3 : new Error("BatchSpanProcessor: span export failed"));
              }
            });
          };
          var pendingResources = null;
          for (var i = 0, len = spans.length; i < len; i++) {
            var span = spans[i];
            if (span.resource.asyncAttributesPending && span.resource.waitForAsyncAttributes) {
              pendingResources !== null && pendingResources !== void 0 ? pendingResources : pendingResources = [];
              pendingResources.push(span.resource.waitForAsyncAttributes());
            }
          }
          if (pendingResources === null) {
            doExport();
          } else {
            Promise.all(pendingResources).then(doExport, function(err) {
              globalErrorHandler(err);
              reject(err);
            });
          }
        });
      });
    };
    BatchSpanProcessorBase2.prototype._maybeStartTimer = function() {
      var _this = this;
      if (this._isExporting)
        return;
      var flush2 = function() {
        _this._isExporting = true;
        _this._flushOneBatch().finally(function() {
          _this._isExporting = false;
          if (_this._finishedSpans.length > 0) {
            _this._clearTimer();
            _this._maybeStartTimer();
          }
        }).catch(function(e) {
          _this._isExporting = false;
          globalErrorHandler(e);
        });
      };
      if (this._finishedSpans.length >= this._maxExportBatchSize) {
        return flush2();
      }
      if (this._timer !== void 0)
        return;
      this._timer = setTimeout(function() {
        return flush2();
      }, this._scheduledDelayMillis);
      unrefTimer(this._timer);
    };
    BatchSpanProcessorBase2.prototype._clearTimer = function() {
      if (this._timer !== void 0) {
        clearTimeout(this._timer);
        this._timer = void 0;
      }
    };
    return BatchSpanProcessorBase2;
  }()
);
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var BatchSpanProcessor = (
  /** @class */
  function(_super) {
    __extends(BatchSpanProcessor2, _super);
    function BatchSpanProcessor2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    BatchSpanProcessor2.prototype.onShutdown = function() {
    };
    return BatchSpanProcessor2;
  }(BatchSpanProcessorBase)
);
var SPAN_ID_BYTES = 8;
var TRACE_ID_BYTES = 16;
var RandomIdGenerator = (
  /** @class */
  /* @__PURE__ */ function() {
    function RandomIdGenerator2() {
      this.generateTraceId = getIdGenerator(TRACE_ID_BYTES);
      this.generateSpanId = getIdGenerator(SPAN_ID_BYTES);
    }
    return RandomIdGenerator2;
  }()
);
var SHARED_BUFFER = Buffer.allocUnsafe(TRACE_ID_BYTES);
function getIdGenerator(bytes) {
  return function generateId() {
    for (var i = 0; i < bytes / 4; i++) {
      SHARED_BUFFER.writeUInt32BE(Math.random() * Math.pow(2, 32) >>> 0, i * 4);
    }
    for (var i = 0; i < bytes; i++) {
      if (SHARED_BUFFER[i] > 0) {
        break;
      } else if (i === bytes - 1) {
        SHARED_BUFFER[bytes - 1] = 1;
      }
    }
    return SHARED_BUFFER.toString("hex", 0, bytes);
  };
}
var Tracer = (
  /** @class */
  function() {
    function Tracer2(instrumentationLibrary, config, _tracerProvider) {
      this._tracerProvider = _tracerProvider;
      var localConfig = mergeConfig(config);
      this._sampler = localConfig.sampler;
      this._generalLimits = localConfig.generalLimits;
      this._spanLimits = localConfig.spanLimits;
      this._idGenerator = config.idGenerator || new RandomIdGenerator();
      this.resource = _tracerProvider.resource;
      this.instrumentationLibrary = instrumentationLibrary;
    }
    Tracer2.prototype.startSpan = function(name2, options, context$1) {
      var _a3, _b2, _c2;
      if (options === void 0) {
        options = {};
      }
      if (context$1 === void 0) {
        context$1 = context.active();
      }
      if (options.root) {
        context$1 = trace.deleteSpan(context$1);
      }
      var parentSpan = trace.getSpan(context$1);
      if (isTracingSuppressed(context$1)) {
        diag.debug("Instrumentation suppressed, returning Noop Span");
        var nonRecordingSpan = trace.wrapSpanContext(INVALID_SPAN_CONTEXT);
        return nonRecordingSpan;
      }
      var parentSpanContext = parentSpan === null || parentSpan === void 0 ? void 0 : parentSpan.spanContext();
      var spanId = this._idGenerator.generateSpanId();
      var traceId;
      var traceState;
      var parentSpanId;
      if (!parentSpanContext || !trace.isSpanContextValid(parentSpanContext)) {
        traceId = this._idGenerator.generateTraceId();
      } else {
        traceId = parentSpanContext.traceId;
        traceState = parentSpanContext.traceState;
        parentSpanId = parentSpanContext.spanId;
      }
      var spanKind = (_a3 = options.kind) !== null && _a3 !== void 0 ? _a3 : SpanKind.INTERNAL;
      var links = ((_b2 = options.links) !== null && _b2 !== void 0 ? _b2 : []).map(function(link) {
        return {
          context: link.context,
          attributes: sanitizeAttributes(link.attributes)
        };
      });
      var attributes = sanitizeAttributes(options.attributes);
      var samplingResult = this._sampler.shouldSample(context$1, traceId, name2, spanKind, attributes, links);
      traceState = (_c2 = samplingResult.traceState) !== null && _c2 !== void 0 ? _c2 : traceState;
      var traceFlags = samplingResult.decision === SamplingDecision$1.RECORD_AND_SAMPLED ? TraceFlags.SAMPLED : TraceFlags.NONE;
      var spanContext = { traceId, spanId, traceFlags, traceState };
      if (samplingResult.decision === SamplingDecision$1.NOT_RECORD) {
        diag.debug("Recording is off, propagating context in a non-recording span");
        var nonRecordingSpan = trace.wrapSpanContext(spanContext);
        return nonRecordingSpan;
      }
      var initAttributes = sanitizeAttributes(Object.assign(attributes, samplingResult.attributes));
      var span = new Span(this, context$1, name2, spanContext, spanKind, parentSpanId, links, options.startTime, void 0, initAttributes);
      return span;
    };
    Tracer2.prototype.startActiveSpan = function(name2, arg2, arg3, arg4) {
      var opts;
      var ctx;
      var fn;
      if (arguments.length < 2) {
        return;
      } else if (arguments.length === 2) {
        fn = arg2;
      } else if (arguments.length === 3) {
        opts = arg2;
        fn = arg3;
      } else {
        opts = arg2;
        ctx = arg3;
        fn = arg4;
      }
      var parentContext = ctx !== null && ctx !== void 0 ? ctx : context.active();
      var span = this.startSpan(name2, opts, parentContext);
      var contextWithSpanSet = trace.setSpan(parentContext, span);
      return context.with(contextWithSpanSet, fn, void 0, span);
    };
    Tracer2.prototype.getGeneralLimits = function() {
      return this._generalLimits;
    };
    Tracer2.prototype.getSpanLimits = function() {
      return this._spanLimits;
    };
    Tracer2.prototype.getActiveSpanProcessor = function() {
      return this._tracerProvider.getActiveSpanProcessor();
    };
    return Tracer2;
  }()
);
function defaultServiceName() {
  return "unknown_service:" + process.argv0;
}
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve3) {
      resolve3(value);
    });
  }
  return new (P || (P = Promise))(function(resolve3, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve3(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f, y, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
      if (y = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t2[1]) {
            _.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _.label < t2[2]) {
            _.label = t2[2];
            _.ops.push(op);
            break;
          }
          if (t2[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __read$1 = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var Resource = (
  /** @class */
  function() {
    function Resource2(attributes, asyncAttributesPromise) {
      var _this = this;
      var _a3;
      this._attributes = attributes;
      this.asyncAttributesPending = asyncAttributesPromise != null;
      this._syncAttributes = (_a3 = this._attributes) !== null && _a3 !== void 0 ? _a3 : {};
      this._asyncAttributesPromise = asyncAttributesPromise === null || asyncAttributesPromise === void 0 ? void 0 : asyncAttributesPromise.then(function(asyncAttributes) {
        _this._attributes = Object.assign({}, _this._attributes, asyncAttributes);
        _this.asyncAttributesPending = false;
        return asyncAttributes;
      }, function(err) {
        diag.debug("a resource's async attributes promise rejected: %s", err);
        _this.asyncAttributesPending = false;
        return {};
      });
    }
    Resource2.empty = function() {
      return Resource2.EMPTY;
    };
    Resource2.default = function() {
      var _a3;
      return new Resource2((_a3 = {}, _a3[SEMRESATTRS_SERVICE_NAME] = defaultServiceName(), _a3[SEMRESATTRS_TELEMETRY_SDK_LANGUAGE] = SDK_INFO[SEMRESATTRS_TELEMETRY_SDK_LANGUAGE], _a3[SEMRESATTRS_TELEMETRY_SDK_NAME] = SDK_INFO[SEMRESATTRS_TELEMETRY_SDK_NAME], _a3[SEMRESATTRS_TELEMETRY_SDK_VERSION] = SDK_INFO[SEMRESATTRS_TELEMETRY_SDK_VERSION], _a3));
    };
    Object.defineProperty(Resource2.prototype, "attributes", {
      get: function() {
        var _a3;
        if (this.asyncAttributesPending) {
          diag.error("Accessing resource attributes before async attributes settled");
        }
        return (_a3 = this._attributes) !== null && _a3 !== void 0 ? _a3 : {};
      },
      enumerable: false,
      configurable: true
    });
    Resource2.prototype.waitForAsyncAttributes = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              if (!this.asyncAttributesPending) return [3, 2];
              return [4, this._asyncAttributesPromise];
            case 1:
              _a3.sent();
              _a3.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Resource2.prototype.merge = function(other) {
      var _this = this;
      var _a3;
      if (!other)
        return this;
      var mergedSyncAttributes = __assign(__assign({}, this._syncAttributes), (_a3 = other._syncAttributes) !== null && _a3 !== void 0 ? _a3 : other.attributes);
      if (!this._asyncAttributesPromise && !other._asyncAttributesPromise) {
        return new Resource2(mergedSyncAttributes);
      }
      var mergedAttributesPromise = Promise.all([
        this._asyncAttributesPromise,
        other._asyncAttributesPromise
      ]).then(function(_a4) {
        var _b2;
        var _c2 = __read$1(_a4, 2), thisAsyncAttributes = _c2[0], otherAsyncAttributes = _c2[1];
        return __assign(__assign(__assign(__assign({}, _this._syncAttributes), thisAsyncAttributes), (_b2 = other._syncAttributes) !== null && _b2 !== void 0 ? _b2 : other.attributes), otherAsyncAttributes);
      });
      return new Resource2(mergedSyncAttributes, mergedAttributesPromise);
    };
    Resource2.EMPTY = new Resource2({});
    return Resource2;
  }()
);
var __values = function(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var MultiSpanProcessor = (
  /** @class */
  function() {
    function MultiSpanProcessor2(_spanProcessors) {
      this._spanProcessors = _spanProcessors;
    }
    MultiSpanProcessor2.prototype.forceFlush = function() {
      var e_1, _a3;
      var promises = [];
      try {
        for (var _b2 = __values(this._spanProcessors), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var spanProcessor = _c2.value;
          promises.push(spanProcessor.forceFlush());
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return new Promise(function(resolve3) {
        Promise.all(promises).then(function() {
          resolve3();
        }).catch(function(error) {
          globalErrorHandler(error || new Error("MultiSpanProcessor: forceFlush failed"));
          resolve3();
        });
      });
    };
    MultiSpanProcessor2.prototype.onStart = function(span, context2) {
      var e_2, _a3;
      try {
        for (var _b2 = __values(this._spanProcessors), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var spanProcessor = _c2.value;
          spanProcessor.onStart(span, context2);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };
    MultiSpanProcessor2.prototype.onEnd = function(span) {
      var e_3, _a3;
      try {
        for (var _b2 = __values(this._spanProcessors), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var spanProcessor = _c2.value;
          spanProcessor.onEnd(span);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    };
    MultiSpanProcessor2.prototype.shutdown = function() {
      var e_4, _a3;
      var promises = [];
      try {
        for (var _b2 = __values(this._spanProcessors), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var spanProcessor = _c2.value;
          promises.push(spanProcessor.shutdown());
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return)) _a3.call(_b2);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      return new Promise(function(resolve3, reject) {
        Promise.all(promises).then(function() {
          resolve3();
        }, reject);
      });
    };
    return MultiSpanProcessor2;
  }()
);
var NoopSpanProcessor = (
  /** @class */
  function() {
    function NoopSpanProcessor2() {
    }
    NoopSpanProcessor2.prototype.onStart = function(_span, _context) {
    };
    NoopSpanProcessor2.prototype.onEnd = function(_span) {
    };
    NoopSpanProcessor2.prototype.shutdown = function() {
      return Promise.resolve();
    };
    NoopSpanProcessor2.prototype.forceFlush = function() {
      return Promise.resolve();
    };
    return NoopSpanProcessor2;
  }()
);
var __read = function(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var ForceFlushState;
(function(ForceFlushState2) {
  ForceFlushState2[ForceFlushState2["resolved"] = 0] = "resolved";
  ForceFlushState2[ForceFlushState2["timeout"] = 1] = "timeout";
  ForceFlushState2[ForceFlushState2["error"] = 2] = "error";
  ForceFlushState2[ForceFlushState2["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
var BasicTracerProvider = (
  /** @class */
  function() {
    function BasicTracerProvider2(config) {
      if (config === void 0) {
        config = {};
      }
      var _a3, _b2;
      this._registeredSpanProcessors = [];
      this._tracers = /* @__PURE__ */ new Map();
      var mergedConfig = merge({}, loadDefaultConfig(), reconfigureLimits(config));
      this.resource = (_a3 = mergedConfig.resource) !== null && _a3 !== void 0 ? _a3 : Resource.empty();
      if (mergedConfig.mergeResourceWithDefaults) {
        this.resource = Resource.default().merge(this.resource);
      }
      this._config = Object.assign({}, mergedConfig, {
        resource: this.resource
      });
      if ((_b2 = config.spanProcessors) === null || _b2 === void 0 ? void 0 : _b2.length) {
        this._registeredSpanProcessors = __spreadArray([], __read(config.spanProcessors), false);
        this.activeSpanProcessor = new MultiSpanProcessor(this._registeredSpanProcessors);
      } else {
        var defaultExporter = this._buildExporterFromEnv();
        if (defaultExporter !== void 0) {
          var batchProcessor = new BatchSpanProcessor(defaultExporter);
          this.activeSpanProcessor = batchProcessor;
        } else {
          this.activeSpanProcessor = new NoopSpanProcessor();
        }
      }
    }
    BasicTracerProvider2.prototype.getTracer = function(name2, version2, options) {
      var key = name2 + "@" + (version2 || "") + ":" + ((options === null || options === void 0 ? void 0 : options.schemaUrl) || "");
      if (!this._tracers.has(key)) {
        this._tracers.set(key, new Tracer({ name: name2, version: version2, schemaUrl: options === null || options === void 0 ? void 0 : options.schemaUrl }, this._config, this));
      }
      return this._tracers.get(key);
    };
    BasicTracerProvider2.prototype.addSpanProcessor = function(spanProcessor) {
      if (this._registeredSpanProcessors.length === 0) {
        this.activeSpanProcessor.shutdown().catch(function(err) {
          return diag.error("Error while trying to shutdown current span processor", err);
        });
      }
      this._registeredSpanProcessors.push(spanProcessor);
      this.activeSpanProcessor = new MultiSpanProcessor(this._registeredSpanProcessors);
    };
    BasicTracerProvider2.prototype.getActiveSpanProcessor = function() {
      return this.activeSpanProcessor;
    };
    BasicTracerProvider2.prototype.register = function(config) {
      if (config === void 0) {
        config = {};
      }
      trace.setGlobalTracerProvider(this);
      if (config.propagator === void 0) {
        config.propagator = this._buildPropagatorFromEnv();
      }
      if (config.contextManager) {
        context.setGlobalContextManager(config.contextManager);
      }
      if (config.propagator) {
        propagation.setGlobalPropagator(config.propagator);
      }
    };
    BasicTracerProvider2.prototype.forceFlush = function() {
      var timeout = this._config.forceFlushTimeoutMillis;
      var promises = this._registeredSpanProcessors.map(function(spanProcessor) {
        return new Promise(function(resolve3) {
          var state;
          var timeoutInterval = setTimeout(function() {
            resolve3(new Error("Span processor did not completed within timeout period of " + timeout + " ms"));
            state = ForceFlushState.timeout;
          }, timeout);
          spanProcessor.forceFlush().then(function() {
            clearTimeout(timeoutInterval);
            if (state !== ForceFlushState.timeout) {
              state = ForceFlushState.resolved;
              resolve3(state);
            }
          }).catch(function(error) {
            clearTimeout(timeoutInterval);
            state = ForceFlushState.error;
            resolve3(error);
          });
        });
      });
      return new Promise(function(resolve3, reject) {
        Promise.all(promises).then(function(results) {
          var errors = results.filter(function(result) {
            return result !== ForceFlushState.resolved;
          });
          if (errors.length > 0) {
            reject(errors);
          } else {
            resolve3();
          }
        }).catch(function(error) {
          return reject([error]);
        });
      });
    };
    BasicTracerProvider2.prototype.shutdown = function() {
      return this.activeSpanProcessor.shutdown();
    };
    BasicTracerProvider2.prototype._getPropagator = function(name2) {
      var _a3;
      return (_a3 = this.constructor._registeredPropagators.get(name2)) === null || _a3 === void 0 ? void 0 : _a3();
    };
    BasicTracerProvider2.prototype._getSpanExporter = function(name2) {
      var _a3;
      return (_a3 = this.constructor._registeredExporters.get(name2)) === null || _a3 === void 0 ? void 0 : _a3();
    };
    BasicTracerProvider2.prototype._buildPropagatorFromEnv = function() {
      var _this = this;
      var uniquePropagatorNames = Array.from(new Set(getEnv().OTEL_PROPAGATORS));
      var propagators = uniquePropagatorNames.map(function(name2) {
        var propagator = _this._getPropagator(name2);
        if (!propagator) {
          diag.warn('Propagator "' + name2 + '" requested through environment variable is unavailable.');
        }
        return propagator;
      });
      var validPropagators = propagators.reduce(function(list, item) {
        if (item) {
          list.push(item);
        }
        return list;
      }, []);
      if (validPropagators.length === 0) {
        return;
      } else if (uniquePropagatorNames.length === 1) {
        return validPropagators[0];
      } else {
        return new CompositePropagator({
          propagators: validPropagators
        });
      }
    };
    BasicTracerProvider2.prototype._buildExporterFromEnv = function() {
      var exporterName = getEnv().OTEL_TRACES_EXPORTER;
      if (exporterName === "none" || exporterName === "")
        return;
      var exporter = this._getSpanExporter(exporterName);
      if (!exporter) {
        diag.error('Exporter "' + exporterName + '" requested through environment variable is unavailable.');
      }
      return exporter;
    };
    BasicTracerProvider2._registeredPropagators = /* @__PURE__ */ new Map([
      ["tracecontext", function() {
        return new W3CTraceContextPropagator();
      }],
      ["baggage", function() {
        return new W3CBaggagePropagator();
      }]
    ]);
    BasicTracerProvider2._registeredExporters = /* @__PURE__ */ new Map();
    return BasicTracerProvider2;
  }()
);
const SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE = "sentry.parentIsRemote";
const SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION = "sentry.graphql.operation";
function spanHasAttributes(span) {
  const castSpan = span;
  return !!castSpan.attributes && typeof castSpan.attributes === "object";
}
function spanHasKind(span) {
  const castSpan = span;
  return typeof castSpan.kind === "number";
}
function spanHasStatus(span) {
  const castSpan = span;
  return !!castSpan.status;
}
function spanHasName(span) {
  const castSpan = span;
  return !!castSpan.name;
}
function spanHasParentId(span) {
  const castSpan = span;
  return !!castSpan.parentSpanId;
}
function getRequestSpanData(span) {
  if (!spanHasAttributes(span)) {
    return {};
  }
  const maybeUrlAttribute = span.attributes[ATTR_URL_FULL] || span.attributes[SEMATTRS_HTTP_URL];
  const data2 = {
    url: maybeUrlAttribute,
    // eslint-disable-next-line deprecation/deprecation
    "http.method": span.attributes[ATTR_HTTP_REQUEST_METHOD] || span.attributes[SEMATTRS_HTTP_METHOD]
  };
  if (!data2["http.method"] && data2.url) {
    data2["http.method"] = "GET";
  }
  try {
    if (typeof maybeUrlAttribute === "string") {
      const url2 = parseUrl(maybeUrlAttribute);
      data2.url = getSanitizedUrlString(url2);
      if (url2.search) {
        data2["http.query"] = url2.search;
      }
      if (url2.hash) {
        data2["http.fragment"] = url2.hash;
      }
    }
  } catch (e) {
  }
  return data2;
}
function getSpanKind(span) {
  if (spanHasKind(span)) {
    return span.kind;
  }
  return SpanKind.INTERNAL;
}
const SENTRY_TRACE_HEADER = "sentry-trace";
const SENTRY_BAGGAGE_HEADER = "baggage";
const SENTRY_TRACE_STATE_DSC = "sentry.dsc";
const SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING = "sentry.sampled_not_recording";
const SENTRY_TRACE_STATE_URL = "sentry.url";
const SENTRY_SCOPES_CONTEXT_KEY = createContextKey("sentry_scopes");
const SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY = createContextKey("sentry_fork_isolation_scope");
const SENTRY_FORK_SET_SCOPE_CONTEXT_KEY = createContextKey("sentry_fork_set_scope");
const SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY = createContextKey("sentry_fork_set_isolation_scope");
const SCOPE_CONTEXT_FIELD = "_scopeContext";
function getScopesFromContext(context2) {
  return context2.getValue(SENTRY_SCOPES_CONTEXT_KEY);
}
function setScopesOnContext(context2, scopes) {
  return context2.setValue(SENTRY_SCOPES_CONTEXT_KEY, scopes);
}
function setContextOnScope(scope2, context2) {
  addNonEnumerableProperty(scope2, SCOPE_CONTEXT_FIELD, context2);
}
function getContextFromScope(scope2) {
  return scope2[SCOPE_CONTEXT_FIELD];
}
function _optionalChain$5(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
function getSamplingDecision(spanContext) {
  const { traceFlags, traceState } = spanContext;
  const sampledNotRecording = traceState ? traceState.get(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING) === "1" : false;
  if (traceFlags === TraceFlags.SAMPLED) {
    return true;
  }
  if (sampledNotRecording) {
    return false;
  }
  const dscString = traceState ? traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
  const dsc = dscString ? baggageHeaderToDynamicSamplingContext(dscString) : void 0;
  if (_optionalChain$5([dsc, "optionalAccess", (_) => _.sampled]) === "true") {
    return true;
  }
  if (_optionalChain$5([dsc, "optionalAccess", (_2) => _2.sampled]) === "false") {
    return false;
  }
  return void 0;
}
function inferSpanData(spanName, attributes, kind) {
  const httpMethod = attributes[ATTR_HTTP_REQUEST_METHOD] || attributes[SEMATTRS_HTTP_METHOD];
  if (httpMethod) {
    return descriptionForHttpMethod({ attributes, name: spanName, kind }, httpMethod);
  }
  const dbSystem = attributes[SEMATTRS_DB_SYSTEM];
  const opIsCache = typeof attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] === "string" && attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP].startsWith("cache.");
  if (dbSystem && !opIsCache) {
    return descriptionForDbSystem({ attributes, name: spanName });
  }
  const customSourceOrRoute = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom" ? "custom" : "route";
  const rpcService = attributes[SEMATTRS_RPC_SERVICE];
  if (rpcService) {
    return {
      ...getUserUpdatedNameAndSource(spanName, attributes, "route"),
      op: "rpc"
    };
  }
  const messagingSystem = attributes[SEMATTRS_MESSAGING_SYSTEM];
  if (messagingSystem) {
    return {
      ...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
      op: "message"
    };
  }
  const faasTrigger = attributes[SEMATTRS_FAAS_TRIGGER];
  if (faasTrigger) {
    return {
      ...getUserUpdatedNameAndSource(spanName, attributes, customSourceOrRoute),
      op: faasTrigger.toString()
    };
  }
  return { op: void 0, description: spanName, source: "custom" };
}
function parseSpanDescription(span) {
  const attributes = spanHasAttributes(span) ? span.attributes : {};
  const name2 = spanHasName(span) ? span.name : "<unknown>";
  const kind = getSpanKind(span);
  return inferSpanData(name2, attributes, kind);
}
function descriptionForDbSystem({ attributes, name: name2 }) {
  const userDefinedName = attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  if (typeof userDefinedName === "string") {
    return {
      op: "db",
      description: userDefinedName,
      source: attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || "custom"
    };
  }
  if (attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom") {
    return { op: "db", description: name2, source: "custom" };
  }
  const statement = attributes[SEMATTRS_DB_STATEMENT];
  const description2 = statement ? statement.toString() : name2;
  return { op: "db", description: description2, source: "task" };
}
function descriptionForHttpMethod({ name: name2, kind, attributes }, httpMethod) {
  const opParts = ["http"];
  switch (kind) {
    case SpanKind.CLIENT:
      opParts.push("client");
      break;
    case SpanKind.SERVER:
      opParts.push("server");
      break;
  }
  if (attributes["sentry.http.prefetch"]) {
    opParts.push("prefetch");
  }
  const { urlPath, url: url2, query, fragment, hasRoute } = getSanitizedUrl(attributes, kind);
  if (!urlPath) {
    return { ...getUserUpdatedNameAndSource(name2, attributes), op: opParts.join(".") };
  }
  const graphqlOperationsAttribute = attributes[SEMANTIC_ATTRIBUTE_SENTRY_GRAPHQL_OPERATION];
  const baseDescription = `${httpMethod} ${urlPath}`;
  const inferredDescription = graphqlOperationsAttribute ? `${baseDescription} (${getGraphqlOperationNamesFromAttribute(graphqlOperationsAttribute)})` : baseDescription;
  const inferredSource = hasRoute || urlPath === "/" ? "route" : "url";
  const data2 = {};
  if (url2) {
    data2.url = url2;
  }
  if (query) {
    data2["http.query"] = query;
  }
  if (fragment) {
    data2["http.fragment"] = fragment;
  }
  const isClientOrServerKind = kind === SpanKind.CLIENT || kind === SpanKind.SERVER;
  const origin = attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] || "manual";
  const isManualSpan = !`${origin}`.startsWith("auto");
  const alreadyHasCustomSource = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] === "custom";
  const customSpanName = attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  const useInferredDescription = !alreadyHasCustomSource && customSpanName == null && (isClientOrServerKind || !isManualSpan);
  const { description: description2, source } = useInferredDescription ? { description: inferredDescription, source: inferredSource } : getUserUpdatedNameAndSource(name2, attributes);
  return {
    op: opParts.join("."),
    description: description2,
    source,
    data: data2
  };
}
function getGraphqlOperationNamesFromAttribute(attr) {
  if (Array.isArray(attr)) {
    const sorted = attr.slice().sort();
    if (sorted.length <= 5) {
      return sorted.join(", ");
    } else {
      return `${sorted.slice(0, 5).join(", ")}, +${sorted.length - 5}`;
    }
  }
  return `${attr}`;
}
function getSanitizedUrl(attributes, kind) {
  const httpTarget = attributes[SEMATTRS_HTTP_TARGET];
  const httpUrl = attributes[SEMATTRS_HTTP_URL] || attributes[ATTR_URL_FULL];
  const httpRoute = attributes[ATTR_HTTP_ROUTE];
  const parsedUrl = typeof httpUrl === "string" ? parseUrl(httpUrl) : void 0;
  const url2 = parsedUrl ? getSanitizedUrlString(parsedUrl) : void 0;
  const query = parsedUrl && parsedUrl.search ? parsedUrl.search : void 0;
  const fragment = parsedUrl && parsedUrl.hash ? parsedUrl.hash : void 0;
  if (typeof httpRoute === "string") {
    return { urlPath: httpRoute, url: url2, query, fragment, hasRoute: true };
  }
  if (kind === SpanKind.SERVER && typeof httpTarget === "string") {
    return { urlPath: stripUrlQueryAndFragment(httpTarget), url: url2, query, fragment, hasRoute: false };
  }
  if (parsedUrl) {
    return { urlPath: url2, url: url2, query, fragment, hasRoute: false };
  }
  if (typeof httpTarget === "string") {
    return { urlPath: stripUrlQueryAndFragment(httpTarget), url: url2, query, fragment, hasRoute: false };
  }
  return { urlPath: void 0, url: url2, query, fragment, hasRoute: false };
}
function getUserUpdatedNameAndSource(originalName, attributes, fallbackSource = "custom") {
  const source = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] || fallbackSource;
  const description2 = attributes[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  if (description2 && typeof description2 === "string") {
    return {
      description: description2,
      source
    };
  }
  return { description: originalName, source };
}
function makeTraceState({
  dsc,
  sampled
}) {
  const dscString = dsc ? dynamicSamplingContextToSentryBaggageHeader(dsc) : void 0;
  const traceStateBase = new TraceState();
  const traceStateWithDsc = dscString ? traceStateBase.set(SENTRY_TRACE_STATE_DSC, dscString) : traceStateBase;
  return sampled === false ? traceStateWithDsc.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1") : traceStateWithDsc;
}
function getActiveSpan() {
  return trace.getActiveSpan();
}
const DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const setupElements = /* @__PURE__ */ new Set();
function setIsSetup(element) {
  setupElements.add(element);
}
function _optionalChain$4(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
function getPropagationContextFromSpan(span) {
  const spanContext = span.spanContext();
  const { traceId, spanId, traceState } = spanContext;
  const dscString = traceState ? traceState.get(SENTRY_TRACE_STATE_DSC) : void 0;
  const traceStateDsc = dscString ? baggageHeaderToDynamicSamplingContext(dscString) : void 0;
  const parentSpanId = spanHasParentId(span) ? span.parentSpanId : void 0;
  const sampled = getSamplingDecision(spanContext);
  const dsc = traceStateDsc || getDynamicSamplingContextFromSpan(getRootSpan(span));
  return {
    traceId,
    spanId,
    sampled,
    parentSpanId,
    dsc
  };
}
class SentryPropagator extends W3CBaggagePropagator {
  /** A map of URLs that have already been checked for if they match tracePropagationTargets. */
  constructor() {
    super();
    setIsSetup("SentryPropagator");
    this._urlMatchesTargetsMap = new LRUMap(100);
  }
  /**
   * @inheritDoc
   */
  inject(context2, carrier, setter) {
    if (isTracingSuppressed(context2)) {
      DEBUG_BUILD$1 && logger$1.log("[Tracing] Not injecting trace data for url because tracing is suppressed.");
      return;
    }
    const activeSpan = trace.getSpan(context2);
    const url2 = activeSpan && getCurrentURL(activeSpan);
    const tracePropagationTargets = _optionalChain$4([getClient, "call", (_) => _(), "optionalAccess", (_2) => _2.getOptions, "call", (_3) => _3(), "optionalAccess", (_4) => _4.tracePropagationTargets]);
    if (!shouldPropagateTraceForUrl(url2, tracePropagationTargets, this._urlMatchesTargetsMap)) {
      DEBUG_BUILD$1 && logger$1.log(
        "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:",
        url2
      );
      return;
    }
    const existingBaggageHeader = getExistingBaggage(carrier);
    let baggage = propagation.getBaggage(context2) || propagation.createBaggage({});
    const { dynamicSamplingContext, traceId, spanId, sampled } = getInjectionData(context2);
    if (existingBaggageHeader) {
      const baggageEntries = parseBaggageHeader(existingBaggageHeader);
      if (baggageEntries) {
        Object.entries(baggageEntries).forEach(([key, value]) => {
          baggage = baggage.setEntry(key, { value });
        });
      }
    }
    if (dynamicSamplingContext) {
      baggage = Object.entries(dynamicSamplingContext).reduce((b, [dscKey, dscValue]) => {
        if (dscValue) {
          return b.setEntry(`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`, { value: dscValue });
        }
        return b;
      }, baggage);
    }
    if (traceId && traceId !== INVALID_TRACEID) {
      setter.set(carrier, SENTRY_TRACE_HEADER, generateSentryTraceHeader(traceId, spanId, sampled));
    }
    super.inject(propagation.setBaggage(context2, baggage), carrier, setter);
  }
  /**
   * @inheritDoc
   */
  extract(context2, carrier, getter) {
    const maybeSentryTraceHeader = getter.get(carrier, SENTRY_TRACE_HEADER);
    const baggage = getter.get(carrier, SENTRY_BAGGAGE_HEADER);
    const sentryTrace = maybeSentryTraceHeader ? Array.isArray(maybeSentryTraceHeader) ? maybeSentryTraceHeader[0] : maybeSentryTraceHeader : void 0;
    return ensureScopesOnContext(getContextWithRemoteActiveSpan(context2, { sentryTrace, baggage }));
  }
  /**
   * @inheritDoc
   */
  fields() {
    return [SENTRY_TRACE_HEADER, SENTRY_BAGGAGE_HEADER];
  }
}
const NOT_PROPAGATED_MESSAGE = "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:";
function shouldPropagateTraceForUrl(url2, tracePropagationTargets, decisionMap) {
  if (typeof url2 !== "string" || !tracePropagationTargets) {
    return true;
  }
  const cachedDecision = _optionalChain$4([decisionMap, "optionalAccess", (_5) => _5.get, "call", (_6) => _6(url2)]);
  if (cachedDecision !== void 0) {
    DEBUG_BUILD$1 && !cachedDecision && logger$1.log(NOT_PROPAGATED_MESSAGE, url2);
    return cachedDecision;
  }
  const decision = stringMatchesSomePattern(url2, tracePropagationTargets);
  _optionalChain$4([decisionMap, "optionalAccess", (_7) => _7.set, "call", (_8) => _8(url2, decision)]);
  DEBUG_BUILD$1 && !decision && logger$1.log(NOT_PROPAGATED_MESSAGE, url2);
  return decision;
}
function getInjectionData(context2) {
  const span = trace.getSpan(context2);
  if (span && span.spanContext().isRemote) {
    const spanContext = span.spanContext();
    const dynamicSamplingContext2 = getDynamicSamplingContextFromSpan(span);
    return {
      dynamicSamplingContext: dynamicSamplingContext2,
      traceId: spanContext.traceId,
      // Because this is a remote span, we do not want to propagate this directly
      // As otherwise things may be attached "directly" to an unrelated span
      spanId: generateSpanId(),
      sampled: getSamplingDecision(spanContext)
    };
  }
  if (span) {
    const spanContext = span.spanContext();
    const dynamicSamplingContext2 = getDynamicSamplingContextFromSpan(span);
    return {
      dynamicSamplingContext: dynamicSamplingContext2,
      traceId: spanContext.traceId,
      spanId: spanContext.spanId,
      sampled: getSamplingDecision(spanContext)
    };
  }
  const scope2 = _optionalChain$4([getScopesFromContext, "call", (_9) => _9(context2), "optionalAccess", (_10) => _10.scope]) || getCurrentScope();
  const client = getClient();
  const propagationContext = scope2.getPropagationContext();
  const dynamicSamplingContext = client ? getDynamicSamplingContextFromScope(client, scope2) : void 0;
  return {
    dynamicSamplingContext,
    traceId: propagationContext.traceId,
    // TODO(v9): Use generateSpanId() instead
    // eslint-disable-next-line deprecation/deprecation
    spanId: propagationContext.spanId,
    sampled: propagationContext.sampled
  };
}
function getContextWithRemoteActiveSpan(ctx, { sentryTrace, baggage }) {
  const propagationContext = propagationContextFromHeaders(sentryTrace, baggage);
  const { traceId, parentSpanId, sampled, dsc } = propagationContext;
  if (!parentSpanId) {
    return ctx;
  }
  const spanContext = generateRemoteSpanContext({
    traceId,
    spanId: parentSpanId,
    sampled,
    dsc
  });
  return trace.setSpanContext(ctx, spanContext);
}
function continueTraceAsRemoteSpan(ctx, options, callback) {
  const ctxWithSpanContext = ensureScopesOnContext(getContextWithRemoteActiveSpan(ctx, options));
  return context.with(ctxWithSpanContext, callback);
}
function ensureScopesOnContext(ctx) {
  const scopes = getScopesFromContext(ctx);
  const newScopes = {
    // If we have no scope here, this is most likely either the root context or a context manually derived from it
    // In this case, we want to fork the current scope, to ensure we do not pollute the root scope
    scope: scopes ? scopes.scope : getCurrentScope().clone(),
    isolationScope: scopes ? scopes.isolationScope : getIsolationScope()
  };
  return setScopesOnContext(ctx, newScopes);
}
function getExistingBaggage(carrier) {
  try {
    const baggage = carrier[SENTRY_BAGGAGE_HEADER];
    return Array.isArray(baggage) ? baggage.join(",") : baggage;
  } catch (e) {
    return void 0;
  }
}
function getCurrentURL(span) {
  const spanData = spanToJSON(span).data;
  const urlAttribute = _optionalChain$4([spanData, "optionalAccess", (_11) => _11[SEMATTRS_HTTP_URL]]) || _optionalChain$4([spanData, "optionalAccess", (_12) => _12[ATTR_URL_FULL]]);
  if (urlAttribute) {
    return urlAttribute;
  }
  const urlTraceState = _optionalChain$4([span, "access", (_13) => _13.spanContext, "call", (_14) => _14(), "access", (_15) => _15.traceState, "optionalAccess", (_16) => _16.get, "call", (_17) => _17(SENTRY_TRACE_STATE_URL)]);
  if (urlTraceState) {
    return urlTraceState;
  }
  return void 0;
}
function generateRemoteSpanContext({
  spanId,
  traceId,
  sampled,
  dsc
}) {
  const traceState = makeTraceState({
    dsc,
    sampled
  });
  const spanContext = {
    traceId,
    spanId,
    isRemote: true,
    traceFlags: sampled ? TraceFlags.SAMPLED : TraceFlags.NONE,
    traceState
  };
  return spanContext;
}
function startSpan(options, callback) {
  const tracer = getTracer();
  const { name: name2, parentSpan: customParentSpan } = options;
  const wrapper = getActiveSpanWrapper(customParentSpan);
  return wrapper(() => {
    const activeCtx = getContext(options.scope, options.forceTransaction);
    const shouldSkipSpan = options.onlyIfParent && !trace.getSpan(activeCtx);
    const ctx = shouldSkipSpan ? suppressTracing$1(activeCtx) : activeCtx;
    const spanOptions = getSpanOptions(options);
    return tracer.startActiveSpan(name2, spanOptions, ctx, (span) => {
      return handleCallbackErrors(
        () => callback(span),
        () => {
          if (spanToJSON(span).status === void 0) {
            span.setStatus({ code: SpanStatusCode.ERROR });
          }
        },
        () => span.end()
      );
    });
  });
}
function startSpanManual(options, callback) {
  const tracer = getTracer();
  const { name: name2, parentSpan: customParentSpan } = options;
  const wrapper = getActiveSpanWrapper(customParentSpan);
  return wrapper(() => {
    const activeCtx = getContext(options.scope, options.forceTransaction);
    const shouldSkipSpan = options.onlyIfParent && !trace.getSpan(activeCtx);
    const ctx = shouldSkipSpan ? suppressTracing$1(activeCtx) : activeCtx;
    const spanOptions = getSpanOptions(options);
    return tracer.startActiveSpan(name2, spanOptions, ctx, (span) => {
      return handleCallbackErrors(
        () => callback(span, () => span.end()),
        () => {
          if (spanToJSON(span).status === void 0) {
            span.setStatus({ code: SpanStatusCode.ERROR });
          }
        }
      );
    });
  });
}
function startInactiveSpan(options) {
  const tracer = getTracer();
  const { name: name2, parentSpan: customParentSpan } = options;
  const wrapper = getActiveSpanWrapper(customParentSpan);
  return wrapper(() => {
    const activeCtx = getContext(options.scope, options.forceTransaction);
    const shouldSkipSpan = options.onlyIfParent && !trace.getSpan(activeCtx);
    const ctx = shouldSkipSpan ? suppressTracing$1(activeCtx) : activeCtx;
    const spanOptions = getSpanOptions(options);
    const span = tracer.startSpan(name2, spanOptions, ctx);
    return span;
  });
}
function withActiveSpan(span, callback) {
  const newContextWithActiveSpan = span ? trace.setSpan(context.active(), span) : trace.deleteSpan(context.active());
  return context.with(newContextWithActiveSpan, () => callback(getCurrentScope()));
}
function getTracer() {
  const client = getClient();
  return client && client.tracer || trace.getTracer("@sentry/opentelemetry", SDK_VERSION$1);
}
function getSpanOptions(options) {
  const { startTime, attributes, kind, op } = options;
  const fixedStartTime = typeof startTime === "number" ? ensureTimestampInMilliseconds(startTime) : startTime;
  return {
    attributes: op ? {
      [SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
      ...attributes
    } : attributes,
    kind,
    startTime: fixedStartTime
  };
}
function ensureTimestampInMilliseconds(timestamp) {
  const isMs = timestamp < 9999999999;
  return isMs ? timestamp * 1e3 : timestamp;
}
function getContext(scope2, forceTransaction) {
  const ctx = getContextForScope(scope2);
  const parentSpan = trace.getSpan(ctx);
  if (!parentSpan) {
    return ctx;
  }
  if (!forceTransaction) {
    return ctx;
  }
  const ctxWithoutSpan = trace.deleteSpan(ctx);
  const { spanId, traceId } = parentSpan.spanContext();
  const sampled = getSamplingDecision(parentSpan.spanContext());
  const rootSpan = getRootSpan(parentSpan);
  const dsc = getDynamicSamplingContextFromSpan(rootSpan);
  const traceState = makeTraceState({
    dsc,
    sampled
  });
  const spanOptions = {
    traceId,
    spanId,
    isRemote: true,
    traceFlags: sampled ? TraceFlags.SAMPLED : TraceFlags.NONE,
    traceState
  };
  const ctxWithSpanContext = trace.setSpanContext(ctxWithoutSpan, spanOptions);
  return ctxWithSpanContext;
}
function getContextForScope(scope2) {
  if (scope2) {
    const ctx = getContextFromScope(scope2);
    if (ctx) {
      return ctx;
    }
  }
  return context.active();
}
function continueTrace(options, callback) {
  return continueTraceAsRemoteSpan(context.active(), options, callback);
}
function getTraceContextForScope(client, scope2) {
  const ctx = getContextFromScope(scope2);
  const span = ctx && trace.getSpan(ctx);
  const traceContext = span ? spanToTraceContext(span) : getTraceContextFromScope(scope2);
  const dynamicSamplingContext = span ? getDynamicSamplingContextFromSpan(span) : getDynamicSamplingContextFromScope(client, scope2);
  return [dynamicSamplingContext, traceContext];
}
function getActiveSpanWrapper(parentSpan) {
  return parentSpan !== void 0 ? (callback) => {
    return withActiveSpan(parentSpan, callback);
  } : (callback) => callback();
}
function suppressTracing(callback) {
  const ctx = suppressTracing$1(context.active());
  return context.with(ctx, callback);
}
function getTraceData({ span } = {}) {
  let ctx = context.active();
  if (span) {
    const { scope: scope2 } = getCapturedScopesOnSpan(span);
    ctx = scope2 && getContextFromScope(scope2) || trace.setSpan(context.active(), span);
  }
  const { traceId, spanId, sampled, dynamicSamplingContext } = getInjectionData(ctx);
  return {
    "sentry-trace": generateSentryTraceHeader(traceId, spanId, sampled),
    baggage: dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext)
  };
}
function setOpenTelemetryContextAsyncContextStrategy() {
  function getScopes() {
    const ctx = context.active();
    const scopes = getScopesFromContext(ctx);
    if (scopes) {
      return scopes;
    }
    return {
      scope: getDefaultCurrentScope(),
      isolationScope: getDefaultIsolationScope()
    };
  }
  function withScope2(callback) {
    const ctx = context.active();
    return context.with(ctx, () => {
      return callback(getCurrentScope2());
    });
  }
  function withSetScope2(scope2, callback) {
    const ctx = context.active();
    return context.with(ctx.setValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY, scope2), () => {
      return callback(scope2);
    });
  }
  function withIsolationScope2(callback) {
    const ctx = context.active();
    return context.with(ctx.setValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY, true), () => {
      return callback(getIsolationScope2());
    });
  }
  function withSetIsolationScope(isolationScope, callback) {
    const ctx = context.active();
    return context.with(ctx.setValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY, isolationScope), () => {
      return callback(getIsolationScope2());
    });
  }
  function getCurrentScope2() {
    return getScopes().scope;
  }
  function getIsolationScope2() {
    return getScopes().isolationScope;
  }
  setAsyncContextStrategy({
    withScope: withScope2,
    withSetScope: withSetScope2,
    withSetIsolationScope,
    withIsolationScope: withIsolationScope2,
    getCurrentScope: getCurrentScope2,
    getIsolationScope: getIsolationScope2,
    startSpan,
    startSpanManual,
    startInactiveSpan,
    getActiveSpan,
    suppressTracing,
    getTraceData,
    continueTrace,
    // The types here don't fully align, because our own `Span` type is narrower
    // than the OTEL one - but this is OK for here, as we now we'll only have OTEL spans passed around
    withActiveSpan
  });
}
function _optionalChain$3(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
function wrapContextManagerClass(ContextManagerClass) {
  class SentryContextManager2 extends ContextManagerClass {
    constructor(...args) {
      super(...args);
      setIsSetup("SentryContextManager");
    }
    /**
     * Overwrite with() of the original AsyncLocalStorageContextManager
     * to ensure we also create new scopes per context.
     */
    with(context2, fn, thisArg, ...args) {
      const currentScopes = getScopesFromContext(context2);
      const currentScope = _optionalChain$3([currentScopes, "optionalAccess", (_) => _.scope]) || getCurrentScope();
      const currentIsolationScope = _optionalChain$3([currentScopes, "optionalAccess", (_2) => _2.isolationScope]) || getIsolationScope();
      const shouldForkIsolationScope = context2.getValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY) === true;
      const scope2 = context2.getValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY);
      const isolationScope = context2.getValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
      const newCurrentScope = scope2 || currentScope.clone();
      const newIsolationScope = isolationScope || (shouldForkIsolationScope ? currentIsolationScope.clone() : currentIsolationScope);
      const scopes = { scope: newCurrentScope, isolationScope: newIsolationScope };
      const ctx1 = setScopesOnContext(context2, scopes);
      const ctx2 = ctx1.deleteValue(SENTRY_FORK_ISOLATION_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_SCOPE_CONTEXT_KEY).deleteValue(SENTRY_FORK_SET_ISOLATION_SCOPE_CONTEXT_KEY);
      setContextOnScope(newCurrentScope, ctx2);
      return super.with(ctx2, fn, thisArg, ...args);
    }
  }
  return SentryContextManager2;
}
function groupSpansWithParents(spans) {
  const nodeMap = /* @__PURE__ */ new Map();
  for (const span of spans) {
    createOrUpdateSpanNodeAndRefs(nodeMap, span);
  }
  return Array.from(nodeMap, function([_id, spanNode]) {
    return spanNode;
  });
}
function getLocalParentId(span) {
  const parentIsRemote = span.attributes[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE] === true;
  return !parentIsRemote ? span.parentSpanId : void 0;
}
function createOrUpdateSpanNodeAndRefs(nodeMap, span) {
  const id = span.spanContext().spanId;
  const parentId = getLocalParentId(span);
  if (!parentId) {
    createOrUpdateNode(nodeMap, { id, span, children: [] });
    return;
  }
  const parentNode = createOrGetParentNode(nodeMap, parentId);
  const node2 = createOrUpdateNode(nodeMap, { id, span, parentNode, children: [] });
  parentNode.children.push(node2);
}
function createOrGetParentNode(nodeMap, id) {
  const existing = nodeMap.get(id);
  if (existing) {
    return existing;
  }
  return createOrUpdateNode(nodeMap, { id, children: [] });
}
function createOrUpdateNode(nodeMap, spanNode) {
  const existing = nodeMap.get(spanNode.id);
  if (existing && existing.span) {
    return existing;
  }
  if (existing && !existing.span) {
    existing.span = spanNode.span;
    existing.parentNode = spanNode.parentNode;
    return existing;
  }
  nodeMap.set(spanNode.id, spanNode);
  return spanNode;
}
const canonicalGrpcErrorCodesMap = {
  "1": "cancelled",
  "2": "unknown_error",
  "3": "invalid_argument",
  "4": "deadline_exceeded",
  "5": "not_found",
  "6": "already_exists",
  "7": "permission_denied",
  "8": "resource_exhausted",
  "9": "failed_precondition",
  "10": "aborted",
  "11": "out_of_range",
  "12": "unimplemented",
  "13": "internal_error",
  "14": "unavailable",
  "15": "data_loss",
  "16": "unauthenticated"
};
const isStatusErrorMessageValid = (message) => {
  return Object.values(canonicalGrpcErrorCodesMap).includes(message);
};
function mapStatus(span) {
  const attributes = spanHasAttributes(span) ? span.attributes : {};
  const status = spanHasStatus(span) ? span.status : void 0;
  if (status) {
    if (status.code === SpanStatusCode.OK) {
      return { code: SPAN_STATUS_OK };
    } else if (status.code === SpanStatusCode.ERROR) {
      if (typeof status.message === "undefined") {
        const inferredStatus2 = inferStatusFromAttributes(attributes);
        if (inferredStatus2) {
          return inferredStatus2;
        }
      }
      if (status.message && isStatusErrorMessageValid(status.message)) {
        return { code: SPAN_STATUS_ERROR, message: status.message };
      } else {
        return { code: SPAN_STATUS_ERROR, message: "unknown_error" };
      }
    }
  }
  const inferredStatus = inferStatusFromAttributes(attributes);
  if (inferredStatus) {
    return inferredStatus;
  }
  if (status && status.code === SpanStatusCode.UNSET) {
    return { code: SPAN_STATUS_OK };
  } else {
    return { code: SPAN_STATUS_ERROR, message: "unknown_error" };
  }
}
function inferStatusFromAttributes(attributes) {
  const httpCodeAttribute = attributes[ATTR_HTTP_RESPONSE_STATUS_CODE] || attributes[SEMATTRS_HTTP_STATUS_CODE];
  const grpcCodeAttribute = attributes[SEMATTRS_RPC_GRPC_STATUS_CODE];
  const numberHttpCode = typeof httpCodeAttribute === "number" ? httpCodeAttribute : typeof httpCodeAttribute === "string" ? parseInt(httpCodeAttribute) : void 0;
  if (typeof numberHttpCode === "number") {
    return getSpanStatusFromHttpCode(numberHttpCode);
  }
  if (typeof grpcCodeAttribute === "string") {
    return { code: SPAN_STATUS_ERROR, message: canonicalGrpcErrorCodesMap[grpcCodeAttribute] || "unknown_error" };
  }
  return void 0;
}
function _optionalChain$2(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
const MAX_SPAN_COUNT = 1e3;
const DEFAULT_TIMEOUT = 300;
class SentrySpanExporter {
  /*
   * A quick explanation on the buckets: We do bucketing of finished spans for efficiency. This span exporter is
   * accumulating spans until a root span is encountered and then it flushes all the spans that are descendants of that
   * root span. Because it is totally in the realm of possibilities that root spans are never finished, and we don't
   * want to accumulate spans indefinitely in memory, we need to periodically evacuate spans. Naively we could simply
   * store the spans in an array and each time a new span comes in we could iterate through the entire array and
   * evacuate all spans that have an end-timestamp that is older than our limit. This could get quite expensive because
   * we would have to iterate a potentially large number of spans every time we evacuate. We want to avoid these large
   * bursts of computation.
   *
   * Instead we go for a bucketing approach and put spans into buckets, based on what second
   * (modulo the time limit) the span was put into the exporter. With buckets, when we decide to evacuate, we can
   * iterate through the bucket entries instead, which have an upper bound of items, making the evacuation much more
   * efficient. Cleaning up also becomes much more efficient since it simply involves de-referencing a bucket within the
   * bucket array, and letting garbage collection take care of the rest.
   */
  constructor(options) {
    this._finishedSpanBucketSize = _optionalChain$2([options, "optionalAccess", (_) => _.timeout]) || DEFAULT_TIMEOUT;
    this._finishedSpanBuckets = new Array(this._finishedSpanBucketSize).fill(void 0);
    this._lastCleanupTimestampInS = Math.floor(Date.now() / 1e3);
    this._spansToBucketEntry = /* @__PURE__ */ new WeakMap();
  }
  /** Export a single span. */
  export(span) {
    const currentTimestampInS = Math.floor(Date.now() / 1e3);
    if (this._lastCleanupTimestampInS !== currentTimestampInS) {
      let droppedSpanCount = 0;
      this._finishedSpanBuckets.forEach((bucket, i) => {
        if (bucket && bucket.timestampInS <= currentTimestampInS - this._finishedSpanBucketSize) {
          droppedSpanCount += bucket.spans.size;
          this._finishedSpanBuckets[i] = void 0;
        }
      });
      if (droppedSpanCount > 0) {
        DEBUG_BUILD$1 && logger$1.log(
          `SpanExporter dropped ${droppedSpanCount} spans because they were pending for more than ${this._finishedSpanBucketSize} seconds.`
        );
      }
      this._lastCleanupTimestampInS = currentTimestampInS;
    }
    const currentBucketIndex = currentTimestampInS % this._finishedSpanBucketSize;
    const currentBucket = this._finishedSpanBuckets[currentBucketIndex] || {
      timestampInS: currentTimestampInS,
      spans: /* @__PURE__ */ new Set()
    };
    this._finishedSpanBuckets[currentBucketIndex] = currentBucket;
    currentBucket.spans.add(span);
    this._spansToBucketEntry.set(span, currentBucket);
    if (!getLocalParentId(span)) {
      this._clearTimeout();
      this._flushTimeout = setTimeout(() => {
        this.flush();
      }, 1);
    }
  }
  /** Try to flush any pending spans immediately. */
  flush() {
    this._clearTimeout();
    const finishedSpans = [];
    this._finishedSpanBuckets.forEach((bucket) => {
      if (bucket) {
        finishedSpans.push(...bucket.spans);
      }
    });
    const sentSpans = maybeSend(finishedSpans);
    const sentSpanCount = sentSpans.size;
    const remainingOpenSpanCount = finishedSpans.length - sentSpanCount;
    DEBUG_BUILD$1 && logger$1.log(
      `SpanExporter exported ${sentSpanCount} spans, ${remainingOpenSpanCount} spans are waiting for their parent spans to finish`
    );
    sentSpans.forEach((span) => {
      const bucketEntry = this._spansToBucketEntry.get(span);
      if (bucketEntry) {
        bucketEntry.spans.delete(span);
      }
    });
  }
  /** Clear the exporter. */
  clear() {
    this._finishedSpanBuckets = this._finishedSpanBuckets.fill(void 0);
    this._clearTimeout();
  }
  /** Clear the flush timeout. */
  _clearTimeout() {
    if (this._flushTimeout) {
      clearTimeout(this._flushTimeout);
      this._flushTimeout = void 0;
    }
  }
}
function maybeSend(spans) {
  const grouped = groupSpansWithParents(spans);
  const sentSpans = /* @__PURE__ */ new Set();
  const rootNodes = getCompletedRootNodes(grouped);
  rootNodes.forEach((root) => {
    const span = root.span;
    sentSpans.add(span);
    const transactionEvent = createTransactionForOtelSpan(span);
    const spans2 = transactionEvent.spans || [];
    root.children.forEach((child) => {
      createAndFinishSpanForOtelSpan(child, spans2, sentSpans);
    });
    transactionEvent.spans = spans2.length > MAX_SPAN_COUNT ? spans2.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans2;
    const measurements = timedEventsToMeasurements(span.events);
    if (measurements) {
      transactionEvent.measurements = measurements;
    }
    captureEvent(transactionEvent);
  });
  return sentSpans;
}
function nodeIsCompletedRootNode(node2) {
  return !!node2.span && !node2.parentNode;
}
function getCompletedRootNodes(nodes) {
  return nodes.filter(nodeIsCompletedRootNode);
}
function parseSpan(span) {
  const attributes = span.attributes;
  const origin = attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
  const op = attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP];
  const source = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
  return { origin, op, source };
}
function createTransactionForOtelSpan(span) {
  const { op, description: description2, data: data2, origin = "manual", source } = getSpanData(span);
  const capturedSpanScopes = getCapturedScopesOnSpan(span);
  const sampleRate = span.attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
  const attributes = dropUndefinedKeys({
    [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: source,
    [SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate,
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
    ...data2,
    ...removeSentryAttributes(span.attributes)
  });
  const { traceId: trace_id, spanId: span_id } = span.spanContext();
  const parent_span_id = span.parentSpanId;
  const status = mapStatus(span);
  const traceContext = dropUndefinedKeys({
    parent_span_id,
    span_id,
    trace_id,
    data: attributes,
    origin,
    op,
    status: getStatusMessage(status)
    // As per protocol, span status is allowed to be undefined
  });
  const statusCode = attributes[ATTR_HTTP_RESPONSE_STATUS_CODE];
  const responseContext = typeof statusCode === "number" ? { response: { status_code: statusCode } } : void 0;
  const transactionEvent = dropUndefinedKeys({
    contexts: {
      trace: traceContext,
      otel: {
        resource: span.resource.attributes
      },
      ...responseContext
    },
    spans: [],
    start_timestamp: spanTimeInputToSeconds(span.startTime),
    timestamp: spanTimeInputToSeconds(span.endTime),
    transaction: description2,
    type: "transaction",
    sdkProcessingMetadata: {
      ...dropUndefinedKeys({
        capturedSpanScope: capturedSpanScopes.scope,
        capturedSpanIsolationScope: capturedSpanScopes.isolationScope,
        sampleRate,
        dynamicSamplingContext: getDynamicSamplingContextFromSpan(span)
      })
    },
    ...source && {
      transaction_info: {
        source
      }
    },
    _metrics_summary: getMetricSummaryJsonForSpan(span)
  });
  return transactionEvent;
}
function createAndFinishSpanForOtelSpan(node2, spans, sentSpans) {
  const span = node2.span;
  if (span) {
    sentSpans.add(span);
  }
  const shouldDrop = !span;
  if (shouldDrop) {
    node2.children.forEach((child) => {
      createAndFinishSpanForOtelSpan(child, spans, sentSpans);
    });
    return;
  }
  const span_id = span.spanContext().spanId;
  const trace_id = span.spanContext().traceId;
  const { attributes, startTime, endTime, parentSpanId } = span;
  const { op, description: description2, data: data2, origin = "manual" } = getSpanData(span);
  const allData = dropUndefinedKeys({
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: origin,
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: op,
    ...removeSentryAttributes(attributes),
    ...data2
  });
  const status = mapStatus(span);
  const spanJSON = dropUndefinedKeys({
    span_id,
    trace_id,
    data: allData,
    description: description2,
    parent_span_id: parentSpanId,
    start_timestamp: spanTimeInputToSeconds(startTime),
    // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
    timestamp: spanTimeInputToSeconds(endTime) || void 0,
    status: getStatusMessage(status),
    // As per protocol, span status is allowed to be undefined
    op,
    origin,
    _metrics_summary: getMetricSummaryJsonForSpan(span),
    measurements: timedEventsToMeasurements(span.events)
  });
  spans.push(spanJSON);
  node2.children.forEach((child) => {
    createAndFinishSpanForOtelSpan(child, spans, sentSpans);
  });
}
function getSpanData(span) {
  const { op: definedOp, source: definedSource, origin } = parseSpan(span);
  const { op: inferredOp, description: description2, source: inferredSource, data: inferredData } = parseSpanDescription(span);
  const op = definedOp || inferredOp;
  const source = definedSource || inferredSource;
  const data2 = { ...inferredData, ...getData(span) };
  return {
    op,
    description: description2,
    source,
    origin,
    data: data2
  };
}
function removeSentryAttributes(data2) {
  const cleanedData = { ...data2 };
  delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
  delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE];
  delete cleanedData[SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
  return cleanedData;
}
function getData(span) {
  const attributes = span.attributes;
  const data2 = {};
  if (span.kind !== SpanKind.INTERNAL) {
    data2["otel.kind"] = SpanKind[span.kind];
  }
  const maybeHttpStatusCodeAttribute = attributes[SEMATTRS_HTTP_STATUS_CODE];
  if (maybeHttpStatusCodeAttribute) {
    data2[ATTR_HTTP_RESPONSE_STATUS_CODE] = maybeHttpStatusCodeAttribute;
  }
  const requestData = getRequestSpanData(span);
  if (requestData.url) {
    data2.url = requestData.url;
  }
  if (requestData["http.query"]) {
    data2["http.query"] = requestData["http.query"].slice(1);
  }
  if (requestData["http.fragment"]) {
    data2["http.fragment"] = requestData["http.fragment"].slice(1);
  }
  return data2;
}
function _optionalChain$1(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
function onSpanStart(span, parentContext) {
  const parentSpan = trace.getSpan(parentContext);
  let scopes = getScopesFromContext(parentContext);
  if (parentSpan && !parentSpan.spanContext().isRemote) {
    addChildSpanToSpan(parentSpan, span);
  }
  if (parentSpan && parentSpan.spanContext().isRemote) {
    span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_PARENT_IS_REMOTE, true);
  }
  if (parentContext === ROOT_CONTEXT) {
    scopes = {
      scope: getDefaultCurrentScope(),
      isolationScope: getDefaultIsolationScope()
    };
  }
  if (scopes) {
    setCapturedScopesOnSpan(span, scopes.scope, scopes.isolationScope);
  }
  logSpanStart(span);
  const client = getClient();
  _optionalChain$1([client, "optionalAccess", (_) => _.emit, "call", (_2) => _2("spanStart", span)]);
}
function onSpanEnd(span) {
  logSpanEnd(span);
  const client = getClient();
  _optionalChain$1([client, "optionalAccess", (_3) => _3.emit, "call", (_4) => _4("spanEnd", span)]);
}
class SentrySpanProcessor {
  constructor(options) {
    setIsSetup("SentrySpanProcessor");
    this._exporter = new SentrySpanExporter(options);
  }
  /**
   * @inheritDoc
   */
  async forceFlush() {
    this._exporter.flush();
  }
  /**
   * @inheritDoc
   */
  async shutdown() {
    this._exporter.clear();
  }
  /**
   * @inheritDoc
   */
  onStart(span, parentContext) {
    onSpanStart(span, parentContext);
  }
  /** @inheritDoc */
  onEnd(span) {
    onSpanEnd(span);
    this._exporter.export(span);
  }
}
class SentrySampler {
  constructor(client) {
    this._client = client;
    setIsSetup("SentrySampler");
  }
  /** @inheritDoc */
  shouldSample(context2, traceId, spanName, spanKind, spanAttributes, _links) {
    const options = this._client.getOptions();
    const parentSpan = getValidSpan(context2);
    const parentContext = _optionalChain([parentSpan, "optionalAccess", (_) => _.spanContext, "call", (_2) => _2()]);
    if (!hasTracingEnabled(options)) {
      return wrapSamplingDecision({ decision: void 0, context: context2, spanAttributes });
    }
    const maybeSpanHttpMethod = spanAttributes[SEMATTRS_HTTP_METHOD] || spanAttributes[ATTR_HTTP_REQUEST_METHOD];
    if (spanKind === SpanKind.CLIENT && maybeSpanHttpMethod && (!parentSpan || _optionalChain([parentContext, "optionalAccess", (_3) => _3.isRemote]))) {
      return wrapSamplingDecision({ decision: void 0, context: context2, spanAttributes });
    }
    const parentSampled = parentSpan ? getParentSampled(parentSpan, traceId, spanName) : void 0;
    const {
      description: inferredSpanName,
      data: inferredAttributes,
      op
    } = inferSpanData(spanName, spanAttributes, spanKind);
    const mergedAttributes = {
      ...inferredAttributes,
      ...spanAttributes
    };
    if (op) {
      mergedAttributes[SEMANTIC_ATTRIBUTE_SENTRY_OP] = op;
    }
    const mutableSamplingDecision = { decision: true };
    this._client.emit(
      "beforeSampling",
      {
        spanAttributes: mergedAttributes,
        spanName: inferredSpanName,
        parentSampled,
        parentContext
      },
      mutableSamplingDecision
    );
    if (!mutableSamplingDecision.decision) {
      return wrapSamplingDecision({ decision: void 0, context: context2, spanAttributes });
    }
    const [sampled, sampleRate] = sampleSpan(options, {
      name: inferredSpanName,
      attributes: mergedAttributes,
      transactionContext: {
        name: inferredSpanName,
        parentSampled
      },
      parentSampled
    });
    const attributes = {
      [SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]: sampleRate
    };
    const method = `${maybeSpanHttpMethod}`.toUpperCase();
    if (method === "OPTIONS" || method === "HEAD") {
      DEBUG_BUILD$1 && logger$1.log(`[Tracing] Not sampling span because HTTP method is '${method}' for ${spanName}`);
      return {
        ...wrapSamplingDecision({ decision: SamplingDecision.NOT_RECORD, context: context2, spanAttributes }),
        attributes
      };
    }
    if (!sampled) {
      return {
        ...wrapSamplingDecision({ decision: SamplingDecision.NOT_RECORD, context: context2, spanAttributes }),
        attributes
      };
    }
    return {
      ...wrapSamplingDecision({ decision: SamplingDecision.RECORD_AND_SAMPLED, context: context2, spanAttributes }),
      attributes
    };
  }
  /** Returns the sampler name or short description with the configuration. */
  toString() {
    return "SentrySampler";
  }
}
function getParentRemoteSampled(parentSpan) {
  const traceId = parentSpan.spanContext().traceId;
  const traceparentData = getPropagationContextFromSpan(parentSpan);
  return traceparentData && traceId === traceparentData.traceId ? traceparentData.sampled : void 0;
}
function getParentSampled(parentSpan, traceId, spanName) {
  const parentContext = parentSpan.spanContext();
  if (isSpanContextValid(parentContext) && parentContext.traceId === traceId) {
    if (parentContext.isRemote) {
      const parentSampled2 = getParentRemoteSampled(parentSpan);
      DEBUG_BUILD$1 && logger$1.log(`[Tracing] Inheriting remote parent's sampled decision for ${spanName}: ${parentSampled2}`);
      return parentSampled2;
    }
    const parentSampled = getSamplingDecision(parentContext);
    DEBUG_BUILD$1 && logger$1.log(`[Tracing] Inheriting parent's sampled decision for ${spanName}: ${parentSampled}`);
    return parentSampled;
  }
  return void 0;
}
function wrapSamplingDecision({
  decision,
  context: context2,
  spanAttributes
}) {
  const traceState = getBaseTraceState(context2, spanAttributes);
  if (decision == void 0) {
    return { decision: SamplingDecision.NOT_RECORD, traceState };
  }
  if (decision === SamplingDecision.NOT_RECORD) {
    return { decision, traceState: traceState.set(SENTRY_TRACE_STATE_SAMPLED_NOT_RECORDING, "1") };
  }
  return { decision, traceState };
}
function getBaseTraceState(context2, spanAttributes) {
  const parentSpan = trace.getSpan(context2);
  const parentContext = _optionalChain([parentSpan, "optionalAccess", (_4) => _4.spanContext, "call", (_5) => _5()]);
  let traceState = _optionalChain([parentContext, "optionalAccess", (_6) => _6.traceState]) || new TraceState();
  const url2 = spanAttributes[SEMATTRS_HTTP_URL] || spanAttributes[ATTR_URL_FULL];
  if (url2 && typeof url2 === "string") {
    traceState = traceState.set(SENTRY_TRACE_STATE_URL, url2);
  }
  return traceState;
}
function getValidSpan(context2) {
  const span = trace.getSpan(context2);
  return span && isSpanContextValid(span.spanContext()) ? span : void 0;
}
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
var src$1 = {};
var undici = {};
var version$1 = {};
Object.defineProperty(version$1, "__esModule", { value: true });
version$1.PACKAGE_NAME = version$1.PACKAGE_VERSION = void 0;
version$1.PACKAGE_VERSION = "0.9.0";
version$1.PACKAGE_NAME = "@opentelemetry/instrumentation-undici";
var SemanticAttributes = {};
Object.defineProperty(SemanticAttributes, "__esModule", { value: true });
SemanticAttributes.SemanticAttributes = void 0;
SemanticAttributes.SemanticAttributes = {
  /**
   * State of the HTTP connection in the HTTP connection pool.
   */
  HTTP_CONNECTION_STATE: "http.connection.state",
  /**
    * Describes a class of error the operation ended with.
    *
    * Note: The `error.type` SHOULD be predictable and SHOULD have low cardinality.
  Instrumentations SHOULD document the list of errors they report.
  
  The cardinality of `error.type` within one instrumentation library SHOULD be low.
  Telemetry consumers that aggregate data from multiple instrumentation libraries and applications
  should be prepared for `error.type` to have high cardinality at query time when no
  additional filters are applied.
  
  If the operation has completed successfully, instrumentations SHOULD NOT set `error.type`.
  
  If a specific domain defines its own set of error identifiers (such as HTTP or gRPC status codes),
  it&#39;s RECOMMENDED to:
  
  * Use a domain-specific attribute
  * Set `error.type` to capture all errors, regardless of whether they are defined within the domain-specific set or not.
    */
  ERROR_TYPE: "error.type",
  /**
   * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://www.rfc-editor.org/rfc/rfc9110.html#field.content-length) header. For requests using transport encoding, this should be the compressed size.
   */
  HTTP_REQUEST_BODY_SIZE: "http.request.body.size",
  /**
    * HTTP request method.
    *
    * Note: HTTP request method value SHOULD be &#34;known&#34; to the instrumentation.
  By default, this convention defines &#34;known&#34; methods as the ones listed in [RFC9110](https://www.rfc-editor.org/rfc/rfc9110.html#name-methods)
  and the PATCH method defined in [RFC5789](https://www.rfc-editor.org/rfc/rfc5789.html).
  
  If the HTTP request method is not known to instrumentation, it MUST set the `http.request.method` attribute to `_OTHER`.
  
  If the HTTP instrumentation could end up converting valid HTTP request methods to `_OTHER`, then it MUST provide a way to override
  the list of known HTTP methods. If this override is done via environment variable, then the environment variable MUST be named
  OTEL_INSTRUMENTATION_HTTP_KNOWN_METHODS and support a comma-separated list of case-sensitive known HTTP methods
  (this list MUST be a full override of the default known method, it is not a list of known methods in addition to the defaults).
  
  HTTP method names are case-sensitive and `http.request.method` attribute value MUST match a known HTTP method name exactly.
  Instrumentations for specific web frameworks that consider HTTP methods to be case insensitive, SHOULD populate a canonical equivalent.
  Tracing instrumentations that do so, MUST also set `http.request.method_original` to the original value.
    */
  HTTP_REQUEST_METHOD: "http.request.method",
  /**
   * Original HTTP method sent by the client in the request line.
   */
  HTTP_REQUEST_METHOD_ORIGINAL: "http.request.method_original",
  /**
   * The ordinal number of request resending attempt (for any reason, including redirects).
   *
   * Note: The resend count SHOULD be updated each time an HTTP request gets resent by the client, regardless of what was the cause of the resending (e.g. redirection, authorization failure, 503 Server Unavailable, network issues, or any other).
   */
  HTTP_REQUEST_RESEND_COUNT: "http.request.resend_count",
  /**
   * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://www.rfc-editor.org/rfc/rfc9110.html#field.content-length) header. For requests using transport encoding, this should be the compressed size.
   */
  HTTP_RESPONSE_BODY_SIZE: "http.response.body.size",
  /**
   * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
   */
  HTTP_RESPONSE_STATUS_CODE: "http.response.status_code",
  /**
    * The matched route, that is, the path template in the format used by the respective server framework.
    *
    * Note: MUST NOT be populated when this is not supported by the HTTP server framework as the route attribute should have low-cardinality and the URI path can NOT substitute it.
  SHOULD include the [application root](/docs/http/http-spans.md#http-server-definitions) if there is one.
    */
  HTTP_ROUTE: "http.route",
  /**
   * Peer address of the network connection - IP address or Unix domain socket name.
   */
  NETWORK_PEER_ADDRESS: "network.peer.address",
  /**
   * Peer port number of the network connection.
   */
  NETWORK_PEER_PORT: "network.peer.port",
  /**
   * [OSI application layer](https://osi-model.com/application-layer/) or non-OSI equivalent.
   *
   * Note: The value SHOULD be normalized to lowercase.
   */
  NETWORK_PROTOCOL_NAME: "network.protocol.name",
  /**
   * Version of the protocol specified in `network.protocol.name`.
   *
   * Note: `network.protocol.version` refers to the version of the protocol used and might be different from the protocol client&#39;s version. If the HTTP client has a version of `0.27.2`, but sends HTTP version `1.1`, this attribute should be set to `1.1`.
   */
  NETWORK_PROTOCOL_VERSION: "network.protocol.version",
  /**
   * Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
   *
   * Note: When observed from the client side, and when communicating through an intermediary, `server.address` SHOULD represent the server address behind any intermediaries, for example proxies, if it&#39;s available.
   */
  SERVER_ADDRESS: "server.address",
  /**
   * Server port number.
   *
   * Note: When observed from the client side, and when communicating through an intermediary, `server.port` SHOULD represent the server port behind any intermediaries, for example proxies, if it&#39;s available.
   */
  SERVER_PORT: "server.port",
  /**
    * Absolute URL describing a network resource according to [RFC3986](https://www.rfc-editor.org/rfc/rfc3986).
    *
    * Note: For network calls, URL usually has `scheme://host[:port][path][?query][#fragment]` format, where the fragment is not transmitted over HTTP, but if it is known, it SHOULD be included nevertheless.
  `url.full` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case username and password SHOULD be redacted and attribute&#39;s value SHOULD be `https://REDACTED:REDACTED@www.example.com/`.
  `url.full` SHOULD capture the absolute URL when it is available (or can be reconstructed) and SHOULD NOT be validated or modified except for sanitizing purposes.
    */
  URL_FULL: "url.full",
  /**
   * The [URI path](https://www.rfc-editor.org/rfc/rfc3986#section-3.3) component.
   */
  URL_PATH: "url.path",
  /**
   * The [URI query](https://www.rfc-editor.org/rfc/rfc3986#section-3.4) component.
   *
   * Note: Sensitive content provided in query string SHOULD be scrubbed when instrumentations can identify it.
   */
  URL_QUERY: "url.query",
  /**
   * The [URI scheme](https://www.rfc-editor.org/rfc/rfc3986#section-3.1) component identifying the used protocol.
   */
  URL_SCHEME: "url.scheme",
  /**
   * Value of the [HTTP User-Agent](https://www.rfc-editor.org/rfc/rfc9110.html#field.user-agent) header sent by the client.
   */
  USER_AGENT_ORIGINAL: "user_agent.original"
};
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(esm);
Object.defineProperty(undici, "__esModule", { value: true });
undici.UndiciInstrumentation = void 0;
const diagch = require$$0$6;
const url_1 = urlModule;
const instrumentation_1 = require$$2;
const api_1$2 = require$$0;
const version_1 = version$1;
const SemanticAttributes_1 = SemanticAttributes;
const core_1 = require$$1;
class UndiciInstrumentation extends instrumentation_1.InstrumentationBase {
  constructor(config = {}) {
    super(version_1.PACKAGE_NAME, version_1.PACKAGE_VERSION, config);
    this._recordFromReq = /* @__PURE__ */ new WeakMap();
  }
  // No need to instrument files/modules
  init() {
    return void 0;
  }
  disable() {
    super.disable();
    this._channelSubs.forEach((sub) => sub.unsubscribe());
    this._channelSubs.length = 0;
  }
  enable() {
    super.enable();
    this._channelSubs = this._channelSubs || [];
    if (this._channelSubs.length > 0) {
      return;
    }
    this.subscribeToChannel("undici:request:create", this.onRequestCreated.bind(this));
    this.subscribeToChannel("undici:client:sendHeaders", this.onRequestHeaders.bind(this));
    this.subscribeToChannel("undici:request:headers", this.onResponseHeaders.bind(this));
    this.subscribeToChannel("undici:request:trailers", this.onDone.bind(this));
    this.subscribeToChannel("undici:request:error", this.onError.bind(this));
  }
  _updateMetricInstruments() {
    this._httpClientDurationHistogram = this.meter.createHistogram("http.client.request.duration", {
      description: "Measures the duration of outbound HTTP requests.",
      unit: "s",
      valueType: api_1$2.ValueType.DOUBLE,
      advice: {
        explicitBucketBoundaries: [
          5e-3,
          0.01,
          0.025,
          0.05,
          0.075,
          0.1,
          0.25,
          0.5,
          0.75,
          1,
          2.5,
          5,
          7.5,
          10
        ]
      }
    });
  }
  subscribeToChannel(diagnosticChannel, onMessage) {
    var _a3;
    const [major2, minor2] = process.version.replace("v", "").split(".").map((n) => Number(n));
    const useNewSubscribe = major2 > 18 || major2 === 18 && minor2 >= 19;
    let unsubscribe;
    if (useNewSubscribe) {
      (_a3 = diagch.subscribe) === null || _a3 === void 0 ? void 0 : _a3.call(diagch, diagnosticChannel, onMessage);
      unsubscribe = () => {
        var _a4;
        return (_a4 = diagch.unsubscribe) === null || _a4 === void 0 ? void 0 : _a4.call(diagch, diagnosticChannel, onMessage);
      };
    } else {
      const channel = diagch.channel(diagnosticChannel);
      channel.subscribe(onMessage);
      unsubscribe = () => channel.unsubscribe(onMessage);
    }
    this._channelSubs.push({
      name: diagnosticChannel,
      unsubscribe
    });
  }
  // This is the 1st message we receive for each request (fired after request creation). Here we will
  // create the span and populate some atttributes, then link the span to the request for further
  // span processing
  onRequestCreated({ request }) {
    const config = this.getConfig();
    const enabled = config.enabled !== false;
    const shouldIgnoreReq = (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
      var _a3;
      return !enabled || request.method === "CONNECT" || ((_a3 = config.ignoreRequestHook) === null || _a3 === void 0 ? void 0 : _a3.call(config, request));
    }, (e) => e && this._diag.error("caught ignoreRequestHook error: ", e), true);
    if (shouldIgnoreReq) {
      return;
    }
    const startTime = (0, core_1.hrTime)();
    let requestUrl;
    try {
      requestUrl = new url_1.URL(request.path, request.origin);
    } catch (err) {
      this._diag.warn("could not determine url.full:", err);
      return;
    }
    const urlScheme = requestUrl.protocol.replace(":", "");
    const requestMethod = this.getRequestMethod(request.method);
    const attributes = {
      [SemanticAttributes_1.SemanticAttributes.HTTP_REQUEST_METHOD]: requestMethod,
      [SemanticAttributes_1.SemanticAttributes.HTTP_REQUEST_METHOD_ORIGINAL]: request.method,
      [SemanticAttributes_1.SemanticAttributes.URL_FULL]: requestUrl.toString(),
      [SemanticAttributes_1.SemanticAttributes.URL_PATH]: requestUrl.pathname,
      [SemanticAttributes_1.SemanticAttributes.URL_QUERY]: requestUrl.search,
      [SemanticAttributes_1.SemanticAttributes.URL_SCHEME]: urlScheme
    };
    const schemePorts = { https: "443", http: "80" };
    const serverAddress = requestUrl.hostname;
    const serverPort = requestUrl.port || schemePorts[urlScheme];
    attributes[SemanticAttributes_1.SemanticAttributes.SERVER_ADDRESS] = serverAddress;
    if (serverPort && !isNaN(Number(serverPort))) {
      attributes[SemanticAttributes_1.SemanticAttributes.SERVER_PORT] = Number(serverPort);
    }
    let userAgent;
    if (Array.isArray(request.headers)) {
      const idx = request.headers.findIndex((h) => h.toLowerCase() === "user-agent");
      if (idx >= 0) {
        userAgent = request.headers[idx + 1];
      }
    } else if (typeof request.headers === "string") {
      const headers = request.headers.split("\r\n");
      const uaHeader = headers.find((h) => h.toLowerCase().startsWith("user-agent"));
      userAgent = uaHeader && uaHeader.substring(uaHeader.indexOf(":") + 1).trim();
    }
    if (userAgent) {
      attributes[SemanticAttributes_1.SemanticAttributes.USER_AGENT_ORIGINAL] = userAgent;
    }
    const hookAttributes = (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
      var _a3;
      return (_a3 = config.startSpanHook) === null || _a3 === void 0 ? void 0 : _a3.call(config, request);
    }, (e) => e && this._diag.error("caught startSpanHook error: ", e), true);
    if (hookAttributes) {
      Object.entries(hookAttributes).forEach(([key, val]) => {
        attributes[key] = val;
      });
    }
    const activeCtx = api_1$2.context.active();
    const currentSpan = api_1$2.trace.getSpan(activeCtx);
    let span;
    if (config.requireParentforSpans && (!currentSpan || !api_1$2.trace.isSpanContextValid(currentSpan.spanContext()))) {
      span = api_1$2.trace.wrapSpanContext(api_1$2.INVALID_SPAN_CONTEXT);
    } else {
      span = this.tracer.startSpan(requestMethod === "_OTHER" ? "HTTP" : requestMethod, {
        kind: api_1$2.SpanKind.CLIENT,
        attributes
      }, activeCtx);
    }
    (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
      var _a3;
      return (_a3 = config.requestHook) === null || _a3 === void 0 ? void 0 : _a3.call(config, span, request);
    }, (e) => e && this._diag.error("caught requestHook error: ", e), true);
    const requestContext = api_1$2.trace.setSpan(api_1$2.context.active(), span);
    const addedHeaders = {};
    api_1$2.propagation.inject(requestContext, addedHeaders);
    const headerEntries = Object.entries(addedHeaders);
    for (let i = 0; i < headerEntries.length; i++) {
      const [k, v] = headerEntries[i];
      if (typeof request.addHeader === "function") {
        request.addHeader(k, v);
      } else if (typeof request.headers === "string") {
        request.headers += `${k}: ${v}\r
`;
      } else if (Array.isArray(request.headers)) {
        request.headers.push(k, v);
      }
    }
    this._recordFromReq.set(request, { span, attributes, startTime });
  }
  // This is the 2nd message we receive for each request. It is fired when connection with
  // the remote is established and about to send the first byte. Here we do have info about the
  // remote address and port so we can populate some `network.*` attributes into the span
  onRequestHeaders({ request, socket }) {
    var _a3;
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const config = this.getConfig();
    const { span } = record;
    const { remoteAddress, remotePort } = socket;
    const spanAttributes = {
      [SemanticAttributes_1.SemanticAttributes.NETWORK_PEER_ADDRESS]: remoteAddress,
      [SemanticAttributes_1.SemanticAttributes.NETWORK_PEER_PORT]: remotePort
    };
    if ((_a3 = config.headersToSpanAttributes) === null || _a3 === void 0 ? void 0 : _a3.requestHeaders) {
      const headersToAttribs = new Set(config.headersToSpanAttributes.requestHeaders.map((n) => n.toLowerCase()));
      const rawHeaders = Array.isArray(request.headers) ? request.headers : request.headers.split("\r\n");
      rawHeaders.forEach((h, idx) => {
        const sepIndex = h.indexOf(":");
        const hasSeparator = sepIndex !== -1;
        const name2 = (hasSeparator ? h.substring(0, sepIndex) : h).toLowerCase();
        const value = hasSeparator ? h.substring(sepIndex + 1) : rawHeaders[idx + 1];
        if (headersToAttribs.has(name2)) {
          spanAttributes[`http.request.header.${name2}`] = value.trim();
        }
      });
    }
    span.setAttributes(spanAttributes);
  }
  // This is the 3rd message we get for each request and it's fired when the server
  // headers are received, body may not be accessible yet.
  // From the response headers we can set the status and content length
  onResponseHeaders({ request, response }) {
    var _a3, _b2;
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const { span, attributes } = record;
    const spanAttributes = {
      [SemanticAttributes_1.SemanticAttributes.HTTP_RESPONSE_STATUS_CODE]: response.statusCode
    };
    const config = this.getConfig();
    (0, instrumentation_1.safeExecuteInTheMiddle)(() => {
      var _a4;
      return (_a4 = config.responseHook) === null || _a4 === void 0 ? void 0 : _a4.call(config, span, { request, response });
    }, (e) => e && this._diag.error("caught responseHook error: ", e), true);
    const headersToAttribs = /* @__PURE__ */ new Set();
    if ((_a3 = config.headersToSpanAttributes) === null || _a3 === void 0 ? void 0 : _a3.responseHeaders) {
      (_b2 = config.headersToSpanAttributes) === null || _b2 === void 0 ? void 0 : _b2.responseHeaders.forEach((name2) => headersToAttribs.add(name2.toLowerCase()));
    }
    for (let idx = 0; idx < response.headers.length; idx = idx + 2) {
      const name2 = response.headers[idx].toString().toLowerCase();
      const value = response.headers[idx + 1];
      if (headersToAttribs.has(name2)) {
        spanAttributes[`http.response.header.${name2}`] = value.toString();
      }
      if (name2 === "content-length") {
        const contentLength = Number(value.toString());
        if (!isNaN(contentLength)) {
          spanAttributes["http.response.header.content-length"] = contentLength;
        }
      }
    }
    span.setAttributes(spanAttributes);
    span.setStatus({
      code: response.statusCode >= 400 ? api_1$2.SpanStatusCode.ERROR : api_1$2.SpanStatusCode.UNSET
    });
    record.attributes = Object.assign(attributes, spanAttributes);
  }
  // This is the last event we receive if the request went without any errors
  onDone({ request }) {
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const { span, attributes, startTime } = record;
    span.end();
    this._recordFromReq.delete(request);
    this.recordRequestDuration(attributes, startTime);
  }
  // This is the event we get when something is wrong in the request like
  // - invalid options when calling `fetch` global API or any undici method for request
  // - connectivity errors such as unreachable host
  // - requests aborted through an `AbortController.signal`
  // NOTE: server errors are considered valid responses and it's the lib consumer
  // who should deal with that.
  onError({ request, error }) {
    const record = this._recordFromReq.get(request);
    if (!record) {
      return;
    }
    const { span, attributes, startTime } = record;
    span.recordException(error);
    span.setStatus({
      code: api_1$2.SpanStatusCode.ERROR,
      message: error.message
    });
    span.end();
    this._recordFromReq.delete(request);
    attributes[SemanticAttributes_1.SemanticAttributes.ERROR_TYPE] = error.message;
    this.recordRequestDuration(attributes, startTime);
  }
  recordRequestDuration(attributes, startTime) {
    const metricsAttributes = {};
    const keysToCopy = [
      SemanticAttributes_1.SemanticAttributes.HTTP_RESPONSE_STATUS_CODE,
      SemanticAttributes_1.SemanticAttributes.HTTP_REQUEST_METHOD,
      SemanticAttributes_1.SemanticAttributes.SERVER_ADDRESS,
      SemanticAttributes_1.SemanticAttributes.SERVER_PORT,
      SemanticAttributes_1.SemanticAttributes.URL_SCHEME,
      SemanticAttributes_1.SemanticAttributes.ERROR_TYPE
    ];
    keysToCopy.forEach((key) => {
      if (key in attributes) {
        metricsAttributes[key] = attributes[key];
      }
    });
    const durationSeconds = (0, core_1.hrTimeToMilliseconds)((0, core_1.hrTimeDuration)(startTime, (0, core_1.hrTime)())) / 1e3;
    this._httpClientDurationHistogram.record(durationSeconds, metricsAttributes);
  }
  getRequestMethod(original) {
    const knownMethods = {
      CONNECT: true,
      OPTIONS: true,
      HEAD: true,
      GET: true,
      POST: true,
      PUT: true,
      PATCH: true,
      DELETE: true,
      TRACE: true
    };
    if (original.toUpperCase() in knownMethods) {
      return original.toUpperCase();
    }
    return "_OTHER";
  }
}
undici.UndiciInstrumentation = UndiciInstrumentation;
var types = {};
Object.defineProperty(types, "__esModule", { value: true });
(function(exports2) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar(undici, exports2);
  __exportStar(types, exports2);
})(src$1);
const _nativeNodeFetchIntegration = (options = {}) => {
  const _breadcrumbs = typeof options.breadcrumbs === "undefined" ? true : options.breadcrumbs;
  const _ignoreOutgoingRequests = options.ignoreOutgoingRequests;
  return {
    name: "NodeFetch",
    setupOnce() {
      const propagationDecisionMap = new LRUMap(100);
      const instrumentation = new src$1.UndiciInstrumentation({
        requireParentforSpans: false,
        ignoreRequestHook: (request) => {
          const url2 = getAbsoluteUrl(request.origin, request.path);
          const shouldIgnore = _ignoreOutgoingRequests && url2 && _ignoreOutgoingRequests(url2);
          if (shouldIgnore) {
            return true;
          }
          if (!hasTracingEnabled()) {
            const tracePropagationTargets = _optionalChain([getClient, "call", (_2) => _2(), "optionalAccess", (_3) => _3.getOptions, "call", (_4) => _4(), "access", (_5) => _5.tracePropagationTargets]);
            const addedHeaders = shouldPropagateTraceForUrl(url2, tracePropagationTargets, propagationDecisionMap) ? getTraceData$1() : {};
            const requestHeaders = request.headers;
            if (Array.isArray(requestHeaders)) {
              Object.entries(addedHeaders).forEach((headers) => requestHeaders.push(...headers));
            } else {
              request.headers += Object.entries(addedHeaders).map(([k, v]) => `${k}: ${v}\r
`).join("");
            }
            return true;
          }
          return false;
        },
        startSpanHook: () => {
          return {
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.otel.node_fetch"
          };
        },
        responseHook: (_, { request, response }) => {
          if (_breadcrumbs) {
            addRequestBreadcrumb$1(request, response);
          }
        }
      });
      registerInstrumentations({ instrumentations: [instrumentation] });
    }
  };
};
const nativeNodeFetchIntegration = defineIntegration(_nativeNodeFetchIntegration);
function addRequestBreadcrumb$1(request, response) {
  const data2 = getBreadcrumbData(request);
  const statusCode = response.statusCode;
  const level = getBreadcrumbLogLevelFromHttpStatusCode(statusCode);
  addBreadcrumb(
    {
      category: "http",
      data: {
        status_code: statusCode,
        ...data2
      },
      type: "http",
      level
    },
    {
      event: "response",
      request,
      response
    }
  );
}
function getBreadcrumbData(request) {
  try {
    const url2 = new URL(request.path, request.origin);
    const parsedUrl = parseUrl(url2.toString());
    const data2 = {
      url: getSanitizedUrlString(parsedUrl),
      "http.method": request.method || "GET"
    };
    if (parsedUrl.search) {
      data2["http.query"] = parsedUrl.search;
    }
    if (parsedUrl.hash) {
      data2["http.fragment"] = parsedUrl.hash;
    }
    return data2;
  } catch (e) {
    return {};
  }
}
function getAbsoluteUrl(origin, path2 = "/") {
  const url2 = `${origin}`;
  if (url2.endsWith("/") && path2.startsWith("/")) {
    return `${url2}${path2.slice(1)}`;
  }
  if (!url2.endsWith("/") && !path2.startsWith("/")) {
    return `${url2}/${path2.slice(1)}`;
  }
  return `${url2}${path2}`;
}
const INTEGRATION_NAME$4 = "Console";
const consoleIntegration = defineIntegration(() => {
  return {
    name: INTEGRATION_NAME$4,
    setup(client) {
      addConsoleInstrumentationHandler(({ args, level }) => {
        if (getClient() !== client) {
          return;
        }
        addBreadcrumb(
          {
            category: "console",
            level: severityLevelFromString(level),
            message: truncate(util__namespace.format.apply(void 0, args), 2048)
            // 2KB
          },
          {
            input: [...args],
            level
          }
        );
      });
    }
  };
});
const readFileAsync = util$2.promisify(fs$9.readFile);
const readDirAsync = util$2.promisify(fs$9.readdir);
const INTEGRATION_NAME$3 = "Context";
const _nodeContextIntegration = (options = {}) => {
  let cachedContext;
  const _options = {
    app: true,
    os: true,
    device: true,
    culture: true,
    cloudResource: true,
    ...options
  };
  async function addContext(event) {
    if (cachedContext === void 0) {
      cachedContext = _getContexts();
    }
    const updatedContext = _updateContext(await cachedContext);
    event.contexts = {
      ...event.contexts,
      app: { ...updatedContext.app, ..._optionalChain([event, "access", (_) => _.contexts, "optionalAccess", (_2) => _2.app]) },
      os: { ...updatedContext.os, ..._optionalChain([event, "access", (_3) => _3.contexts, "optionalAccess", (_4) => _4.os]) },
      device: { ...updatedContext.device, ..._optionalChain([event, "access", (_5) => _5.contexts, "optionalAccess", (_6) => _6.device]) },
      culture: { ...updatedContext.culture, ..._optionalChain([event, "access", (_7) => _7.contexts, "optionalAccess", (_8) => _8.culture]) },
      cloud_resource: { ...updatedContext.cloud_resource, ..._optionalChain([event, "access", (_9) => _9.contexts, "optionalAccess", (_10) => _10.cloud_resource]) }
    };
    return event;
  }
  async function _getContexts() {
    const contexts = {};
    if (_options.os) {
      contexts.os = await getOsContext();
    }
    if (_options.app) {
      contexts.app = getAppContext();
    }
    if (_options.device) {
      contexts.device = getDeviceContext(_options.device);
    }
    if (_options.culture) {
      const culture = getCultureContext();
      if (culture) {
        contexts.culture = culture;
      }
    }
    if (_options.cloudResource) {
      contexts.cloud_resource = getCloudResourceContext();
    }
    return contexts;
  }
  return {
    name: INTEGRATION_NAME$3,
    processEvent(event) {
      return addContext(event);
    }
  };
};
const nodeContextIntegration = defineIntegration(_nodeContextIntegration);
function _updateContext(contexts) {
  if (_optionalChain([contexts, "optionalAccess", (_11) => _11.app, "optionalAccess", (_12) => _12.app_memory])) {
    contexts.app.app_memory = process.memoryUsage().rss;
  }
  if (_optionalChain([contexts, "optionalAccess", (_13) => _13.app, "optionalAccess", (_14) => _14.free_memory]) && typeof process.availableMemory === "function") {
    const freeMemory = _optionalChain([process, "access", (_15) => _15.availableMemory, "optionalCall", (_16) => _16()]);
    if (freeMemory != null) {
      contexts.app.free_memory = freeMemory;
    }
  }
  if (_optionalChain([contexts, "optionalAccess", (_17) => _17.device, "optionalAccess", (_18) => _18.free_memory])) {
    contexts.device.free_memory = os__namespace.freemem();
  }
  return contexts;
}
async function getOsContext() {
  const platformId = os__namespace.platform();
  switch (platformId) {
    case "darwin":
      return getDarwinInfo();
    case "linux":
      return getLinuxInfo();
    default:
      return {
        name: PLATFORM_NAMES[platformId] || platformId,
        version: os__namespace.release()
      };
  }
}
function getCultureContext() {
  try {
    if (typeof process.versions.icu !== "string") {
      return;
    }
    const january = /* @__PURE__ */ new Date(9e8);
    const spanish = new Intl.DateTimeFormat("es", { month: "long" });
    if (spanish.format(january) === "enero") {
      const options = Intl.DateTimeFormat().resolvedOptions();
      return {
        locale: options.locale,
        timezone: options.timeZone
      };
    }
  } catch (err) {
  }
  return;
}
function getAppContext() {
  const app_memory = process.memoryUsage().rss;
  const app_start_time = new Date(Date.now() - process.uptime() * 1e3).toISOString();
  const appContext = { app_start_time, app_memory };
  if (typeof process.availableMemory === "function") {
    const freeMemory = _optionalChain([process, "access", (_19) => _19.availableMemory, "optionalCall", (_20) => _20()]);
    if (freeMemory != null) {
      appContext.free_memory = freeMemory;
    }
  }
  return appContext;
}
function getDeviceContext(deviceOpt) {
  const device = {};
  let uptime;
  try {
    uptime = os__namespace.uptime && os__namespace.uptime();
  } catch (e) {
  }
  if (typeof uptime === "number") {
    device.boot_time = new Date(Date.now() - uptime * 1e3).toISOString();
  }
  device.arch = os__namespace.arch();
  if (deviceOpt === true || deviceOpt.memory) {
    device.memory_size = os__namespace.totalmem();
    device.free_memory = os__namespace.freemem();
  }
  if (deviceOpt === true || deviceOpt.cpu) {
    const cpuInfo = os__namespace.cpus();
    const firstCpu = cpuInfo && cpuInfo[0];
    if (firstCpu) {
      device.processor_count = cpuInfo.length;
      device.cpu_description = firstCpu.model;
      device.processor_frequency = firstCpu.speed;
    }
  }
  return device;
}
const PLATFORM_NAMES = {
  aix: "IBM AIX",
  freebsd: "FreeBSD",
  openbsd: "OpenBSD",
  sunos: "SunOS",
  win32: "Windows"
};
const LINUX_DISTROS = [
  { name: "fedora-release", distros: ["Fedora"] },
  { name: "redhat-release", distros: ["Red Hat Linux", "Centos"] },
  { name: "redhat_version", distros: ["Red Hat Linux"] },
  { name: "SuSE-release", distros: ["SUSE Linux"] },
  { name: "lsb-release", distros: ["Ubuntu Linux", "Arch Linux"] },
  { name: "debian_version", distros: ["Debian"] },
  { name: "debian_release", distros: ["Debian"] },
  { name: "arch-release", distros: ["Arch Linux"] },
  { name: "gentoo-release", distros: ["Gentoo Linux"] },
  { name: "novell-release", distros: ["SUSE Linux"] },
  { name: "alpine-release", distros: ["Alpine Linux"] }
];
const LINUX_VERSIONS = {
  alpine: (content) => content,
  arch: (content) => matchFirst(/distrib_release=(.*)/, content),
  centos: (content) => matchFirst(/release ([^ ]+)/, content),
  debian: (content) => content,
  fedora: (content) => matchFirst(/release (..)/, content),
  mint: (content) => matchFirst(/distrib_release=(.*)/, content),
  red: (content) => matchFirst(/release ([^ ]+)/, content),
  suse: (content) => matchFirst(/VERSION = (.*)\n/, content),
  ubuntu: (content) => matchFirst(/distrib_release=(.*)/, content)
};
function matchFirst(regex, text) {
  const match = regex.exec(text);
  return match ? match[1] : void 0;
}
async function getDarwinInfo() {
  const darwinInfo = {
    kernel_version: os__namespace.release(),
    name: "Mac OS X",
    version: `10.${Number(os__namespace.release().split(".")[0]) - 4}`
  };
  try {
    const output = await new Promise((resolve3, reject) => {
      node_child_process.execFile("/usr/bin/sw_vers", (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve3(stdout);
      });
    });
    darwinInfo.name = matchFirst(/^ProductName:\s+(.*)$/m, output);
    darwinInfo.version = matchFirst(/^ProductVersion:\s+(.*)$/m, output);
    darwinInfo.build = matchFirst(/^BuildVersion:\s+(.*)$/m, output);
  } catch (e) {
  }
  return darwinInfo;
}
function getLinuxDistroId(name2) {
  return name2.split(" ")[0].toLowerCase();
}
async function getLinuxInfo() {
  const linuxInfo = {
    kernel_version: os__namespace.release(),
    name: "Linux"
  };
  try {
    const etcFiles = await readDirAsync("/etc");
    const distroFile = LINUX_DISTROS.find((file2) => etcFiles.includes(file2.name));
    if (!distroFile) {
      return linuxInfo;
    }
    const distroPath = path$g.join("/etc", distroFile.name);
    const contents = (await readFileAsync(distroPath, { encoding: "utf-8" })).toLowerCase();
    const { distros } = distroFile;
    linuxInfo.name = distros.find((d) => contents.indexOf(getLinuxDistroId(d)) >= 0) || distros[0];
    const id = getLinuxDistroId(linuxInfo.name);
    linuxInfo.version = _optionalChain([LINUX_VERSIONS, "access", (_21) => _21[id], "optionalCall", (_22) => _22(contents)]);
  } catch (e) {
  }
  return linuxInfo;
}
function getCloudResourceContext() {
  if (process.env.VERCEL) {
    return {
      "cloud.provider": "vercel",
      "cloud.region": process.env.VERCEL_REGION
    };
  } else if (process.env.AWS_REGION) {
    return {
      "cloud.provider": "aws",
      "cloud.region": process.env.AWS_REGION,
      "cloud.platform": process.env.AWS_EXECUTION_ENV
    };
  } else if (process.env.GCP_PROJECT) {
    return {
      "cloud.provider": "gcp"
    };
  } else if (process.env.ALIYUN_REGION_ID) {
    return {
      "cloud.provider": "alibaba_cloud",
      "cloud.region": process.env.ALIYUN_REGION_ID
    };
  } else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) {
    return {
      "cloud.provider": "azure",
      "cloud.region": process.env.REGION_NAME
    };
  } else if (process.env.IBM_CLOUD_REGION) {
    return {
      "cloud.provider": "ibm_cloud",
      "cloud.region": process.env.IBM_CLOUD_REGION
    };
  } else if (process.env.TENCENTCLOUD_REGION) {
    return {
      "cloud.provider": "tencent_cloud",
      "cloud.region": process.env.TENCENTCLOUD_REGION,
      "cloud.account.id": process.env.TENCENTCLOUD_APPID,
      "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE
    };
  } else if (process.env.NETLIFY) {
    return {
      "cloud.provider": "netlify"
    };
  } else if (process.env.FLY_REGION) {
    return {
      "cloud.provider": "fly.io",
      "cloud.region": process.env.FLY_REGION
    };
  } else if (process.env.DYNO) {
    return {
      "cloud.provider": "heroku"
    };
  } else {
    return void 0;
  }
}
const LRU_FILE_CONTENTS_CACHE = new LRUMap(10);
const LRU_FILE_CONTENTS_FS_READ_FAILED = new LRUMap(20);
const DEFAULT_LINES_OF_CONTEXT = 7;
const INTEGRATION_NAME$2 = "ContextLines";
const MAX_CONTEXTLINES_COLNO = 1e3;
const MAX_CONTEXTLINES_LINENO = 1e4;
function emplace(map, key, contents) {
  const value = map.get(key);
  if (value === void 0) {
    map.set(key, contents);
    return contents;
  }
  return value;
}
function shouldSkipContextLinesForFile(path2) {
  if (path2.startsWith("node:")) return true;
  if (path2.endsWith(".min.js")) return true;
  if (path2.endsWith(".min.cjs")) return true;
  if (path2.endsWith(".min.mjs")) return true;
  if (path2.startsWith("data:")) return true;
  return false;
}
function shouldSkipContextLinesForFrame(frame) {
  if (frame.lineno !== void 0 && frame.lineno > MAX_CONTEXTLINES_LINENO) return true;
  if (frame.colno !== void 0 && frame.colno > MAX_CONTEXTLINES_COLNO) return true;
  return false;
}
function rangeExistsInContentCache(file2, range2) {
  const contents = LRU_FILE_CONTENTS_CACHE.get(file2);
  if (contents === void 0) return false;
  for (let i = range2[0]; i <= range2[1]; i++) {
    if (contents[i] === void 0) {
      return false;
    }
  }
  return true;
}
function makeLineReaderRanges(lines, linecontext) {
  if (!lines.length) {
    return [];
  }
  let i = 0;
  const line = lines[0];
  if (typeof line !== "number") {
    return [];
  }
  let current2 = makeContextRange(line, linecontext);
  const out = [];
  while (true) {
    if (i === lines.length - 1) {
      out.push(current2);
      break;
    }
    const next = lines[i + 1];
    if (typeof next !== "number") {
      break;
    }
    if (next <= current2[1]) {
      current2[1] = next + linecontext;
    } else {
      out.push(current2);
      current2 = makeContextRange(next, linecontext);
    }
    i++;
  }
  return out;
}
function getContextLinesFromFile(path2, ranges, output) {
  return new Promise((resolve3, _reject) => {
    const stream2 = fs$9.createReadStream(path2);
    const lineReaded = node_readline.createInterface({
      input: stream2
    });
    let lineNumber = 0;
    let currentRangeIndex = 0;
    const range2 = ranges[currentRangeIndex];
    if (range2 === void 0) {
      resolve3();
      return;
    }
    let rangeStart = range2[0];
    let rangeEnd = range2[1];
    function onStreamError(e) {
      LRU_FILE_CONTENTS_FS_READ_FAILED.set(path2, 1);
      DEBUG_BUILD && logger$1.error(`Failed to read file: ${path2}. Error: ${e}`);
      lineReaded.close();
      lineReaded.removeAllListeners();
      resolve3();
    }
    stream2.on("error", onStreamError);
    lineReaded.on("error", onStreamError);
    lineReaded.on("close", resolve3);
    lineReaded.on("line", (line) => {
      lineNumber++;
      if (lineNumber < rangeStart) return;
      output[lineNumber] = snipLine(line, 0);
      if (lineNumber >= rangeEnd) {
        if (currentRangeIndex === ranges.length - 1) {
          lineReaded.close();
          lineReaded.removeAllListeners();
          return;
        }
        currentRangeIndex++;
        const range3 = ranges[currentRangeIndex];
        if (range3 === void 0) {
          lineReaded.close();
          lineReaded.removeAllListeners();
          return;
        }
        rangeStart = range3[0];
        rangeEnd = range3[1];
      }
    });
  });
}
async function addSourceContext(event, contextLines) {
  const filesToLines = {};
  if (contextLines > 0 && _optionalChain([event, "access", (_) => _.exception, "optionalAccess", (_2) => _2.values])) {
    for (const exception of event.exception.values) {
      if (!_optionalChain([exception, "access", (_3) => _3.stacktrace, "optionalAccess", (_4) => _4.frames, "optionalAccess", (_5) => _5.length])) {
        continue;
      }
      for (let i = exception.stacktrace.frames.length - 1; i >= 0; i--) {
        const frame = exception.stacktrace.frames[i];
        const filename = _optionalChain([frame, "optionalAccess", (_6) => _6.filename]);
        if (!frame || typeof filename !== "string" || typeof frame.lineno !== "number" || shouldSkipContextLinesForFile(filename) || shouldSkipContextLinesForFrame(frame)) {
          continue;
        }
        const filesToLinesOutput = filesToLines[filename];
        if (!filesToLinesOutput) filesToLines[filename] = [];
        filesToLines[filename].push(frame.lineno);
      }
    }
  }
  const files2 = Object.keys(filesToLines);
  if (files2.length == 0) {
    return event;
  }
  const readlinePromises = [];
  for (const file2 of files2) {
    if (LRU_FILE_CONTENTS_FS_READ_FAILED.get(file2)) {
      continue;
    }
    const filesToLineRanges = filesToLines[file2];
    if (!filesToLineRanges) {
      continue;
    }
    filesToLineRanges.sort((a, b) => a - b);
    const ranges = makeLineReaderRanges(filesToLineRanges, contextLines);
    if (ranges.every((r) => rangeExistsInContentCache(file2, r))) {
      continue;
    }
    const cache = emplace(LRU_FILE_CONTENTS_CACHE, file2, {});
    readlinePromises.push(getContextLinesFromFile(file2, ranges, cache));
  }
  await Promise.all(readlinePromises).catch(() => {
    DEBUG_BUILD && logger$1.log("Failed to read one or more source files and resolve context lines");
  });
  if (contextLines > 0 && _optionalChain([event, "access", (_7) => _7.exception, "optionalAccess", (_8) => _8.values])) {
    for (const exception of event.exception.values) {
      if (exception.stacktrace && exception.stacktrace.frames && exception.stacktrace.frames.length > 0) {
        addSourceContextToFrames(exception.stacktrace.frames, contextLines, LRU_FILE_CONTENTS_CACHE);
      }
    }
  }
  return event;
}
function addSourceContextToFrames(frames, contextLines, cache) {
  for (const frame of frames) {
    if (frame.filename && frame.context_line === void 0 && typeof frame.lineno === "number") {
      const contents = cache.get(frame.filename);
      if (contents === void 0) {
        continue;
      }
      addContextToFrame(frame.lineno, frame, contextLines, contents);
    }
  }
}
function clearLineContext(frame) {
  delete frame.pre_context;
  delete frame.context_line;
  delete frame.post_context;
}
function addContextToFrame(lineno, frame, contextLines, contents) {
  if (frame.lineno === void 0 || contents === void 0) {
    DEBUG_BUILD && logger$1.error("Cannot resolve context for frame with no lineno or file contents");
    return;
  }
  frame.pre_context = [];
  for (let i = makeRangeStart(lineno, contextLines); i < lineno; i++) {
    const line = contents[i];
    if (line === void 0) {
      clearLineContext(frame);
      DEBUG_BUILD && logger$1.error(`Could not find line ${i} in file ${frame.filename}`);
      return;
    }
    frame.pre_context.push(line);
  }
  if (contents[lineno] === void 0) {
    clearLineContext(frame);
    DEBUG_BUILD && logger$1.error(`Could not find line ${lineno} in file ${frame.filename}`);
    return;
  }
  frame.context_line = contents[lineno];
  const end = makeRangeEnd(lineno, contextLines);
  frame.post_context = [];
  for (let i = lineno + 1; i <= end; i++) {
    const line = contents[i];
    if (line === void 0) {
      break;
    }
    frame.post_context.push(line);
  }
}
function makeRangeStart(line, linecontext) {
  return Math.max(1, line - linecontext);
}
function makeRangeEnd(line, linecontext) {
  return line + linecontext;
}
function makeContextRange(line, linecontext) {
  return [makeRangeStart(line, linecontext), makeRangeEnd(line, linecontext)];
}
const _contextLinesIntegration = (options = {}) => {
  const contextLines = options.frameContextLines !== void 0 ? options.frameContextLines : DEFAULT_LINES_OF_CONTEXT;
  return {
    name: INTEGRATION_NAME$2,
    processEvent(event) {
      return addSourceContext(event, contextLines);
    }
  };
};
const contextLinesIntegration = defineIntegration(_contextLinesIntegration);
const NODE_VERSION = parseSemver(process.versions.node);
const NODE_MAJOR = NODE_VERSION.major;
let cachedDebuggerEnabled;
async function isDebuggerEnabled() {
  if (cachedDebuggerEnabled === void 0) {
    try {
      const inspector2 = await import("node:inspector");
      cachedDebuggerEnabled = !!inspector2.url();
    } catch (_) {
      cachedDebuggerEnabled = false;
    }
  }
  return cachedDebuggerEnabled;
}
const LOCAL_VARIABLES_KEY = "__SENTRY_ERROR_LOCAL_VARIABLES__";
function createRateLimiter(maxPerSecond, enable, disable) {
  let count = 0;
  let retrySeconds = 5;
  let disabledTimeout = 0;
  setInterval(() => {
    if (disabledTimeout === 0) {
      if (count > maxPerSecond) {
        retrySeconds *= 2;
        disable(retrySeconds);
        if (retrySeconds > 86400) {
          retrySeconds = 86400;
        }
        disabledTimeout = retrySeconds;
      }
    } else {
      disabledTimeout -= 1;
      if (disabledTimeout === 0) {
        enable();
      }
    }
    count = 0;
  }, 1e3).unref();
  return () => {
    count += 1;
  };
}
function isAnonymous(name2) {
  return name2 !== void 0 && (name2.length === 0 || name2 === "?" || name2 === "<anonymous>");
}
function functionNamesMatch(a, b) {
  return a === b || isAnonymous(a) && isAnonymous(b);
}
const base64WorkerScript = "LyohIEBzZW50cnkvbm9kZSA4LjQ4LjAgKDQwNWNlYjQpIHwgaHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9zZW50cnktamF2YXNjcmlwdCAqLwppbXBvcnR7U2Vzc2lvbiBhcyBlfWZyb20ibm9kZTppbnNwZWN0b3IvcHJvbWlzZXMiO2ltcG9ydHt3b3JrZXJEYXRhIGFzIHR9ZnJvbSJub2RlOndvcmtlcl90aHJlYWRzIjtjb25zdCBuPSI4LjQ4LjAiLG89Z2xvYmFsVGhpcztjb25zdCBpPSJ1bmRlZmluZWQiPT10eXBlb2YgX19TRU5UUllfREVCVUdfX3x8X19TRU5UUllfREVCVUdfXyxhPVsiZGVidWciLCJpbmZvIiwid2FybiIsImVycm9yIiwibG9nIiwiYXNzZXJ0IiwidHJhY2UiXSxzPXt9O2Z1bmN0aW9uIGMoZSl7aWYoISgiY29uc29sZSJpbiBvKSlyZXR1cm4gZSgpO2NvbnN0IHQ9by5jb25zb2xlLG49e30saT1PYmplY3Qua2V5cyhzKTtpLmZvckVhY2goKGU9Pntjb25zdCBvPXNbZV07bltlXT10W2VdLHRbZV09b30pKTt0cnl7cmV0dXJuIGUoKX1maW5hbGx5e2kuZm9yRWFjaCgoZT0+e3RbZV09bltlXX0pKX19IWZ1bmN0aW9uKGUsdCxpKXtjb25zdCBhPW8scz1hLl9fU0VOVFJZX189YS5fX1NFTlRSWV9ffHx7fSxjPXNbbl09c1tuXXx8e307Y1tlXXx8KGNbZV09dCgpKX0oImxvZ2dlciIsKGZ1bmN0aW9uKCl7bGV0IGU9ITE7Y29uc3QgdD17ZW5hYmxlOigpPT57ZT0hMH0sZGlzYWJsZTooKT0+e2U9ITF9LGlzRW5hYmxlZDooKT0+ZX07cmV0dXJuIGk/YS5mb3JFYWNoKChuPT57dFtuXT0oLi4udCk9PntlJiZjKCgoKT0+e28uY29uc29sZVtuXShgU2VudHJ5IExvZ2dlciBbJHtufV06YCwuLi50KX0pKX19KSk6YS5mb3JFYWNoKChlPT57dFtlXT0oKT0+e319KSksdH0pKTtjb25zdCByPSJfX1NFTlRSWV9FUlJPUl9MT0NBTF9WQVJJQUJMRVNfXyI7Y29uc3QgdT10O2Z1bmN0aW9uIGwoLi4uZSl7dS5kZWJ1ZyYmYygoKCk9PmNvbnNvbGUubG9nKCJbTG9jYWxWYXJpYWJsZXMgV29ya2VyXSIsLi4uZSkpKX1hc3luYyBmdW5jdGlvbiBmKGUsdCxuLG8pe2NvbnN0IGk9YXdhaXQgZS5wb3N0KCJSdW50aW1lLmdldFByb3BlcnRpZXMiLHtvYmplY3RJZDp0LG93blByb3BlcnRpZXM6ITB9KTtvW25dPWkucmVzdWx0LmZpbHRlcigoZT0+Imxlbmd0aCIhPT1lLm5hbWUmJiFpc05hTihwYXJzZUludChlLm5hbWUsMTApKSkpLnNvcnQoKChlLHQpPT5wYXJzZUludChlLm5hbWUsMTApLXBhcnNlSW50KHQubmFtZSwxMCkpKS5tYXAoKGU9PmUudmFsdWU/LnZhbHVlKSl9YXN5bmMgZnVuY3Rpb24gZyhlLHQsbixvKXtjb25zdCBpPWF3YWl0IGUucG9zdCgiUnVudGltZS5nZXRQcm9wZXJ0aWVzIix7b2JqZWN0SWQ6dCxvd25Qcm9wZXJ0aWVzOiEwfSk7b1tuXT1pLnJlc3VsdC5tYXAoKGU9PltlLm5hbWUsZS52YWx1ZT8udmFsdWVdKSkucmVkdWNlKCgoZSxbdCxuXSk9PihlW3RdPW4sZSkpLHt9KX1mdW5jdGlvbiBkKGUsdCl7ZS52YWx1ZSYmKCJ2YWx1ZSJpbiBlLnZhbHVlP3ZvaWQgMD09PWUudmFsdWUudmFsdWV8fG51bGw9PT1lLnZhbHVlLnZhbHVlP3RbZS5uYW1lXT1gPCR7ZS52YWx1ZS52YWx1ZX0+YDp0W2UubmFtZV09ZS52YWx1ZS52YWx1ZToiZGVzY3JpcHRpb24iaW4gZS52YWx1ZSYmImZ1bmN0aW9uIiE9PWUudmFsdWUudHlwZT90W2UubmFtZV09YDwke2UudmFsdWUuZGVzY3JpcHRpb259PmA6InVuZGVmaW5lZCI9PT1lLnZhbHVlLnR5cGUmJih0W2UubmFtZV09Ijx1bmRlZmluZWQ+IikpfWFzeW5jIGZ1bmN0aW9uIGIoZSx0KXtjb25zdCBuPWF3YWl0IGUucG9zdCgiUnVudGltZS5nZXRQcm9wZXJ0aWVzIix7b2JqZWN0SWQ6dCxvd25Qcm9wZXJ0aWVzOiEwfSksbz17fTtmb3IoY29uc3QgdCBvZiBuLnJlc3VsdClpZih0Py52YWx1ZT8ub2JqZWN0SWQmJiJBcnJheSI9PT10Py52YWx1ZS5jbGFzc05hbWUpe2NvbnN0IG49dC52YWx1ZS5vYmplY3RJZDthd2FpdCBmKGUsbix0Lm5hbWUsbyl9ZWxzZSBpZih0Py52YWx1ZT8ub2JqZWN0SWQmJiJPYmplY3QiPT09dD8udmFsdWU/LmNsYXNzTmFtZSl7Y29uc3Qgbj10LnZhbHVlLm9iamVjdElkO2F3YWl0IGcoZSxuLHQubmFtZSxvKX1lbHNlIHQ/LnZhbHVlJiZkKHQsbyk7cmV0dXJuIG99bGV0IHA7KGFzeW5jIGZ1bmN0aW9uKCl7Y29uc3QgdD1uZXcgZTt0LmNvbm5lY3RUb01haW5UaHJlYWQoKSxsKCJDb25uZWN0ZWQgdG8gbWFpbiB0aHJlYWQiKTtsZXQgbj0hMTt0Lm9uKCJEZWJ1Z2dlci5yZXN1bWVkIiwoKCk9PntuPSExfSkpLHQub24oIkRlYnVnZ2VyLnBhdXNlZCIsKGU9PntuPSEwLGFzeW5jIGZ1bmN0aW9uKGUse3JlYXNvbjp0LGRhdGE6e29iamVjdElkOm59LGNhbGxGcmFtZXM6b30pe2lmKCJleGNlcHRpb24iIT09dCYmInByb21pc2VSZWplY3Rpb24iIT09dClyZXR1cm47aWYocD8uKCksbnVsbD09bilyZXR1cm47Y29uc3QgaT1bXTtmb3IobGV0IHQ9MDt0PG8ubGVuZ3RoO3QrKyl7Y29uc3R7c2NvcGVDaGFpbjpuLGZ1bmN0aW9uTmFtZTphLHRoaXM6c309b1t0XSxjPW4uZmluZCgoZT0+ImxvY2FsIj09PWUudHlwZSkpLHI9Imdsb2JhbCIhPT1zLmNsYXNzTmFtZSYmcy5jbGFzc05hbWU/YCR7cy5jbGFzc05hbWV9LiR7YX1gOmE7aWYodm9pZCAwPT09Yz8ub2JqZWN0Lm9iamVjdElkKWlbdF09e2Z1bmN0aW9uOnJ9O2Vsc2V7Y29uc3Qgbj1hd2FpdCBiKGUsYy5vYmplY3Qub2JqZWN0SWQpO2lbdF09e2Z1bmN0aW9uOnIsdmFyczpufX19YXdhaXQgZS5wb3N0KCJSdW50aW1lLmNhbGxGdW5jdGlvbk9uIix7ZnVuY3Rpb25EZWNsYXJhdGlvbjpgZnVuY3Rpb24oKSB7IHRoaXMuJHtyfSA9IHRoaXMuJHtyfSB8fCAke0pTT04uc3RyaW5naWZ5KGkpfTsgfWAsc2lsZW50OiEwLG9iamVjdElkOm59KSxhd2FpdCBlLnBvc3QoIlJ1bnRpbWUucmVsZWFzZU9iamVjdCIse29iamVjdElkOm59KX0odCxlLnBhcmFtcykudGhlbigoYXN5bmMoKT0+e24mJmF3YWl0IHQucG9zdCgiRGVidWdnZXIucmVzdW1lIil9KSwoYXN5bmMgZT0+e24mJmF3YWl0IHQucG9zdCgiRGVidWdnZXIucmVzdW1lIil9KSl9KSksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5lbmFibGUiKTtjb25zdCBvPSExIT09dS5jYXB0dXJlQWxsRXhjZXB0aW9ucztpZihhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnNldFBhdXNlT25FeGNlcHRpb25zIix7c3RhdGU6bz8iYWxsIjoidW5jYXVnaHQifSksbyl7Y29uc3QgZT11Lm1heEV4Y2VwdGlvbnNQZXJTZWNvbmR8fDUwO3A9ZnVuY3Rpb24oZSx0LG4pe2xldCBvPTAsaT01LGE9MDtyZXR1cm4gc2V0SW50ZXJ2YWwoKCgpPT57MD09PWE/bz5lJiYoaSo9MixuKGkpLGk+ODY0MDAmJihpPTg2NDAwKSxhPWkpOihhLT0xLDA9PT1hJiZ0KCkpLG89MH0pLDFlMykudW5yZWYoKSwoKT0+e28rPTF9fShlLChhc3luYygpPT57bCgiUmF0ZS1saW1pdCBsaWZ0ZWQuIiksYXdhaXQgdC5wb3N0KCJEZWJ1Z2dlci5zZXRQYXVzZU9uRXhjZXB0aW9ucyIse3N0YXRlOiJhbGwifSl9KSwoYXN5bmMgZT0+e2woYFJhdGUtbGltaXQgZXhjZWVkZWQuIERpc2FibGluZyBjYXB0dXJpbmcgb2YgY2F1Z2h0IGV4Y2VwdGlvbnMgZm9yICR7ZX0gc2Vjb25kcy5gKSxhd2FpdCB0LnBvc3QoIkRlYnVnZ2VyLnNldFBhdXNlT25FeGNlcHRpb25zIix7c3RhdGU6InVuY2F1Z2h0In0pfSkpfX0pKCkuY2F0Y2goKGU9PntsKCJGYWlsZWQgdG8gc3RhcnQgZGVidWdnZXIiLGUpfSkpLHNldEludGVydmFsKCgoKT0+e30pLDFlNCk7";
function log$1(...args) {
  logger$1.log("[LocalVariables]", ...args);
}
const localVariablesAsyncIntegration = defineIntegration((integrationOptions = {}) => {
  function addLocalVariablesToException(exception, localVariables) {
    const frames = (_optionalChain([exception, "access", (_) => _.stacktrace, "optionalAccess", (_2) => _2.frames]) || []).filter((frame) => frame.function !== "new Promise");
    for (let i = 0; i < frames.length; i++) {
      const frameIndex = frames.length - i - 1;
      const frameLocalVariables = localVariables[i];
      const frame = frames[frameIndex];
      if (!frame || !frameLocalVariables) {
        break;
      }
      if (
        // We need to have vars to add
        frameLocalVariables.vars === void 0 || // We're not interested in frames that are not in_app because the vars are not relevant
        frame.in_app === false || // The function names need to match
        !functionNamesMatch(frame.function, frameLocalVariables.function)
      ) {
        continue;
      }
      frame.vars = frameLocalVariables.vars;
    }
  }
  function addLocalVariablesToEvent(event, hint) {
    if (hint.originalException && typeof hint.originalException === "object" && LOCAL_VARIABLES_KEY in hint.originalException && Array.isArray(hint.originalException[LOCAL_VARIABLES_KEY])) {
      for (const exception of _optionalChain([event, "access", (_3) => _3.exception, "optionalAccess", (_4) => _4.values]) || []) {
        addLocalVariablesToException(exception, hint.originalException[LOCAL_VARIABLES_KEY]);
      }
      hint.originalException[LOCAL_VARIABLES_KEY] = void 0;
    }
    return event;
  }
  async function startInspector() {
    const inspector2 = await import("node:inspector");
    if (!inspector2.url()) {
      inspector2.open(0);
    }
  }
  function startWorker(options) {
    const worker = new node_worker_threads.Worker(new URL(`data:application/javascript;base64,${base64WorkerScript}`), {
      workerData: options,
      // We don't want any Node args to be passed to the worker
      execArgv: [],
      env: { ...process.env, NODE_OPTIONS: void 0 }
    });
    process.on("exit", () => {
      worker.terminate();
    });
    worker.once("error", (err) => {
      log$1("Worker error", err);
    });
    worker.once("exit", (code) => {
      log$1("Worker exit", code);
    });
    worker.unref();
  }
  return {
    name: "LocalVariablesAsync",
    async setup(client) {
      const clientOptions = client.getOptions();
      if (!clientOptions.includeLocalVariables) {
        return;
      }
      if (await isDebuggerEnabled()) {
        logger$1.warn("Local variables capture has been disabled because the debugger was already enabled");
        return;
      }
      const options = {
        ...integrationOptions,
        debug: logger$1.isEnabled()
      };
      startInspector().then(
        () => {
          try {
            startWorker(options);
          } catch (e) {
            logger$1.error("Failed to start worker", e);
          }
        },
        (e) => {
          logger$1.error("Failed to start inspector", e);
        }
      );
    },
    processEvent(event, hint) {
      return addLocalVariablesToEvent(event, hint);
    }
  };
});
function hashFrames(frames) {
  if (frames === void 0) {
    return;
  }
  return frames.slice(-10).reduce((acc, frame) => `${acc},${frame.function},${frame.lineno},${frame.colno}`, "");
}
function hashFromStack(stackParser, stack) {
  if (stack === void 0) {
    return void 0;
  }
  return hashFrames(stackParser(stack, 1));
}
function createCallbackList(complete) {
  let callbacks = [];
  let completedCalled = false;
  function checkedComplete(result) {
    callbacks = [];
    if (completedCalled) {
      return;
    }
    completedCalled = true;
    complete(result);
  }
  callbacks.push(checkedComplete);
  function add(fn) {
    callbacks.push(fn);
  }
  function next(result) {
    const popped = callbacks.pop() || checkedComplete;
    try {
      popped(result);
    } catch (_) {
      checkedComplete(result);
    }
  }
  return { add, next };
}
class AsyncSession {
  /** Throws if inspector API is not available */
  constructor(_session) {
    this._session = _session;
  }
  static async create(orDefault) {
    if (orDefault) {
      return orDefault;
    }
    const inspector2 = await import("node:inspector");
    return new AsyncSession(new inspector2.Session());
  }
  /** @inheritdoc */
  configureAndConnect(onPause, captureAll) {
    this._session.connect();
    this._session.on("Debugger.paused", (event) => {
      onPause(event, () => {
        this._session.post("Debugger.resume");
      });
    });
    this._session.post("Debugger.enable");
    this._session.post("Debugger.setPauseOnExceptions", { state: captureAll ? "all" : "uncaught" });
  }
  setPauseOnExceptions(captureAll) {
    this._session.post("Debugger.setPauseOnExceptions", { state: captureAll ? "all" : "uncaught" });
  }
  /** @inheritdoc */
  getLocalVariables(objectId, complete) {
    this._getProperties(objectId, (props) => {
      const { add, next } = createCallbackList(complete);
      for (const prop of props) {
        if (_optionalChain([prop, "optionalAccess", (_2) => _2.value, "optionalAccess", (_3) => _3.objectId]) && _optionalChain([prop, "optionalAccess", (_4) => _4.value, "access", (_5) => _5.className]) === "Array") {
          const id = prop.value.objectId;
          add((vars) => this._unrollArray(id, prop.name, vars, next));
        } else if (_optionalChain([prop, "optionalAccess", (_6) => _6.value, "optionalAccess", (_7) => _7.objectId]) && _optionalChain([prop, "optionalAccess", (_8) => _8.value, "optionalAccess", (_9) => _9.className]) === "Object") {
          const id = prop.value.objectId;
          add((vars) => this._unrollObject(id, prop.name, vars, next));
        } else if (_optionalChain([prop, "optionalAccess", (_10) => _10.value])) {
          add((vars) => this._unrollOther(prop, vars, next));
        }
      }
      next({});
    });
  }
  /**
   * Gets all the PropertyDescriptors of an object
   */
  _getProperties(objectId, next) {
    this._session.post(
      "Runtime.getProperties",
      {
        objectId,
        ownProperties: true
      },
      (err, params) => {
        if (err) {
          next([]);
        } else {
          next(params.result);
        }
      }
    );
  }
  /**
   * Unrolls an array property
   */
  _unrollArray(objectId, name2, vars, next) {
    this._getProperties(objectId, (props) => {
      vars[name2] = props.filter((v) => v.name !== "length" && !isNaN(parseInt(v.name, 10))).sort((a, b) => parseInt(a.name, 10) - parseInt(b.name, 10)).map((v) => _optionalChain([v, "optionalAccess", (_11) => _11.value, "optionalAccess", (_12) => _12.value]));
      next(vars);
    });
  }
  /**
   * Unrolls an object property
   */
  _unrollObject(objectId, name2, vars, next) {
    this._getProperties(objectId, (props) => {
      vars[name2] = props.map((v) => [v.name, _optionalChain([v, "optionalAccess", (_13) => _13.value, "optionalAccess", (_14) => _14.value])]).reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
      }, {});
      next(vars);
    });
  }
  /**
   * Unrolls other properties
   */
  _unrollOther(prop, vars, next) {
    if (prop.value) {
      if ("value" in prop.value) {
        if (prop.value.value === void 0 || prop.value.value === null) {
          vars[prop.name] = `<${prop.value.value}>`;
        } else {
          vars[prop.name] = prop.value.value;
        }
      } else if ("description" in prop.value && prop.value.type !== "function") {
        vars[prop.name] = `<${prop.value.description}>`;
      } else if (prop.value.type === "undefined") {
        vars[prop.name] = "<undefined>";
      }
    }
    next(vars);
  }
}
const INTEGRATION_NAME$1 = "LocalVariables";
const _localVariablesSyncIntegration = (options = {}, sessionOverride) => {
  const cachedFrames = new LRUMap(20);
  let rateLimiter;
  let shouldProcessEvent = false;
  function addLocalVariablesToException(exception) {
    const hash = hashFrames(_optionalChain([exception, "optionalAccess", (_15) => _15.stacktrace, "optionalAccess", (_16) => _16.frames]));
    if (hash === void 0) {
      return;
    }
    const cachedFrame = cachedFrames.remove(hash);
    if (cachedFrame === void 0) {
      return;
    }
    const frames = (_optionalChain([exception, "access", (_17) => _17.stacktrace, "optionalAccess", (_18) => _18.frames]) || []).filter((frame) => frame.function !== "new Promise");
    for (let i = 0; i < frames.length; i++) {
      const frameIndex = frames.length - i - 1;
      const cachedFrameVariable = cachedFrame[i];
      const frameVariable = frames[frameIndex];
      if (!frameVariable || !cachedFrameVariable) {
        break;
      }
      if (
        // We need to have vars to add
        cachedFrameVariable.vars === void 0 || // We're not interested in frames that are not in_app because the vars are not relevant
        frameVariable.in_app === false || // The function names need to match
        !functionNamesMatch(frameVariable.function, cachedFrameVariable.function)
      ) {
        continue;
      }
      frameVariable.vars = cachedFrameVariable.vars;
    }
  }
  function addLocalVariablesToEvent(event) {
    for (const exception of _optionalChain([event, "optionalAccess", (_19) => _19.exception, "optionalAccess", (_20) => _20.values]) || []) {
      addLocalVariablesToException(exception);
    }
    return event;
  }
  return {
    name: INTEGRATION_NAME$1,
    async setupOnce() {
      const client = getClient();
      const clientOptions = _optionalChain([client, "optionalAccess", (_21) => _21.getOptions, "call", (_22) => _22()]);
      if (!_optionalChain([clientOptions, "optionalAccess", (_23) => _23.includeLocalVariables])) {
        return;
      }
      const unsupportedNodeVersion = NODE_MAJOR < 18;
      if (unsupportedNodeVersion) {
        logger$1.log("The `LocalVariables` integration is only supported on Node >= v18.");
        return;
      }
      if (await isDebuggerEnabled()) {
        logger$1.warn("Local variables capture has been disabled because the debugger was already enabled");
        return;
      }
      AsyncSession.create(sessionOverride).then(
        (session) => {
          function handlePaused(stackParser, { params: { reason, data: data2, callFrames } }, complete) {
            if (reason !== "exception" && reason !== "promiseRejection") {
              complete();
              return;
            }
            _optionalChain([rateLimiter, "optionalCall", (_24) => _24()]);
            const exceptionHash = hashFromStack(stackParser, _optionalChain([data2, "optionalAccess", (_25) => _25.description]));
            if (exceptionHash == void 0) {
              complete();
              return;
            }
            const { add, next } = createCallbackList((frames) => {
              cachedFrames.set(exceptionHash, frames);
              complete();
            });
            for (let i = 0; i < Math.min(callFrames.length, 5); i++) {
              const { scopeChain, functionName, this: obj } = callFrames[i];
              const localScope = scopeChain.find((scope2) => scope2.type === "local");
              const fn = obj.className === "global" || !obj.className ? functionName : `${obj.className}.${functionName}`;
              if (_optionalChain([localScope, "optionalAccess", (_26) => _26.object, "access", (_27) => _27.objectId]) === void 0) {
                add((frames) => {
                  frames[i] = { function: fn };
                  next(frames);
                });
              } else {
                const id = localScope.object.objectId;
                add(
                  (frames) => _optionalChain([session, "optionalAccess", (_28) => _28.getLocalVariables, "call", (_29) => _29(id, (vars) => {
                    frames[i] = { function: fn, vars };
                    next(frames);
                  })])
                );
              }
            }
            next([]);
          }
          const captureAll = options.captureAllExceptions !== false;
          session.configureAndConnect(
            (ev, complete) => handlePaused(clientOptions.stackParser, ev, complete),
            captureAll
          );
          if (captureAll) {
            const max2 = options.maxExceptionsPerSecond || 50;
            rateLimiter = createRateLimiter(
              max2,
              () => {
                logger$1.log("Local variables rate-limit lifted.");
                _optionalChain([session, "optionalAccess", (_30) => _30.setPauseOnExceptions, "call", (_31) => _31(true)]);
              },
              (seconds) => {
                logger$1.log(
                  `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${seconds} seconds.`
                );
                _optionalChain([session, "optionalAccess", (_32) => _32.setPauseOnExceptions, "call", (_33) => _33(false)]);
              }
            );
          }
          shouldProcessEvent = true;
        },
        (error) => {
          logger$1.log("The `LocalVariables` integration failed to start.", error);
        }
      );
    },
    processEvent(event) {
      if (shouldProcessEvent) {
        return addLocalVariablesToEvent(event);
      }
      return event;
    },
    // These are entirely for testing
    _getCachedFramesCount() {
      return cachedFrames.size;
    },
    _getFirstCachedFrame() {
      return cachedFrames.values()[0];
    }
  };
};
const localVariablesSyncIntegration = defineIntegration(_localVariablesSyncIntegration);
const localVariablesIntegration = (options = {}) => {
  return NODE_VERSION.major < 19 ? localVariablesSyncIntegration(options) : localVariablesAsyncIntegration(options);
};
const DEFAULT_SHUTDOWN_TIMEOUT = 2e3;
function logAndExitProcess(error) {
  consoleSandbox(() => {
    console.error(error);
  });
  const client = getClient();
  if (client === void 0) {
    DEBUG_BUILD && logger$1.warn("No NodeClient was defined, we are exiting the process now.");
    global.process.exit(1);
    return;
  }
  const options = client.getOptions();
  const timeout = options && options.shutdownTimeout && options.shutdownTimeout > 0 && options.shutdownTimeout || DEFAULT_SHUTDOWN_TIMEOUT;
  client.close(timeout).then(
    (result) => {
      if (!result) {
        DEBUG_BUILD && logger$1.warn("We reached the timeout for emptying the request buffer, still exiting now!");
      }
      global.process.exit(1);
    },
    (error2) => {
      DEBUG_BUILD && logger$1.error(error2);
    }
  );
}
const INTEGRATION_NAME = "OnUnhandledRejection";
const _onUnhandledRejectionIntegration = (options = {}) => {
  const mode = options.mode || "warn";
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      global.process.on("unhandledRejection", makeUnhandledPromiseHandler(client, { mode }));
    }
  };
};
const onUnhandledRejectionIntegration = defineIntegration(_onUnhandledRejectionIntegration);
function makeUnhandledPromiseHandler(client, options) {
  return function sendUnhandledPromise(reason, promise) {
    if (getClient() !== client) {
      return;
    }
    captureException(reason, {
      originalException: promise,
      captureContext: {
        extra: { unhandledPromiseRejection: true }
      },
      mechanism: {
        handled: false,
        type: "onunhandledrejection"
      }
    });
    handleRejection(reason, options);
  };
}
function handleRejection(reason, options) {
  const rejectionWarning = "This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:";
  if (options.mode === "warn") {
    consoleSandbox(() => {
      console.warn(rejectionWarning);
      console.error(reason && typeof reason === "object" && "stack" in reason ? reason.stack : reason);
    });
  } else if (options.mode === "strict") {
    consoleSandbox(() => {
      console.warn(rejectionWarning);
    });
    logAndExitProcess(reason);
  }
}
var src = {};
var AsyncHooksContextManager$1 = {};
var AbstractAsyncHooksContextManager$1 = {};
Object.defineProperty(AbstractAsyncHooksContextManager$1, "__esModule", { value: true });
AbstractAsyncHooksContextManager$1.AbstractAsyncHooksContextManager = void 0;
const events_1 = require$$0$4;
const ADD_LISTENER_METHODS = [
  "addListener",
  "on",
  "once",
  "prependListener",
  "prependOnceListener"
];
class AbstractAsyncHooksContextManager {
  constructor() {
    this._kOtListeners = Symbol("OtListeners");
    this._wrapped = false;
  }
  /**
   * Binds a the certain context or the active one to the target function and then returns the target
   * @param context A context (span) to be bind to target
   * @param target a function or event emitter. When target or one of its callbacks is called,
   *  the provided context will be used as the active context for the duration of the call.
   */
  bind(context2, target) {
    if (target instanceof events_1.EventEmitter) {
      return this._bindEventEmitter(context2, target);
    }
    if (typeof target === "function") {
      return this._bindFunction(context2, target);
    }
    return target;
  }
  _bindFunction(context2, target) {
    const manager = this;
    const contextWrapper = function(...args) {
      return manager.with(context2, () => target.apply(this, args));
    };
    Object.defineProperty(contextWrapper, "length", {
      enumerable: false,
      configurable: true,
      writable: false,
      value: target.length
    });
    return contextWrapper;
  }
  /**
   * By default, EventEmitter call their callback with their context, which we do
   * not want, instead we will bind a specific context to all callbacks that
   * go through it.
   * @param context the context we want to bind
   * @param ee EventEmitter an instance of EventEmitter to patch
   */
  _bindEventEmitter(context2, ee) {
    const map = this._getPatchMap(ee);
    if (map !== void 0)
      return ee;
    this._createPatchMap(ee);
    ADD_LISTENER_METHODS.forEach((methodName) => {
      if (ee[methodName] === void 0)
        return;
      ee[methodName] = this._patchAddListener(ee, ee[methodName], context2);
    });
    if (typeof ee.removeListener === "function") {
      ee.removeListener = this._patchRemoveListener(ee, ee.removeListener);
    }
    if (typeof ee.off === "function") {
      ee.off = this._patchRemoveListener(ee, ee.off);
    }
    if (typeof ee.removeAllListeners === "function") {
      ee.removeAllListeners = this._patchRemoveAllListeners(ee, ee.removeAllListeners);
    }
    return ee;
  }
  /**
   * Patch methods that remove a given listener so that we match the "patched"
   * version of that listener (the one that propagate context).
   * @param ee EventEmitter instance
   * @param original reference to the patched method
   */
  _patchRemoveListener(ee, original) {
    const contextManager = this;
    return function(event, listener) {
      var _a3;
      const events2 = (_a3 = contextManager._getPatchMap(ee)) === null || _a3 === void 0 ? void 0 : _a3[event];
      if (events2 === void 0) {
        return original.call(this, event, listener);
      }
      const patchedListener = events2.get(listener);
      return original.call(this, event, patchedListener || listener);
    };
  }
  /**
   * Patch methods that remove all listeners so we remove our
   * internal references for a given event.
   * @param ee EventEmitter instance
   * @param original reference to the patched method
   */
  _patchRemoveAllListeners(ee, original) {
    const contextManager = this;
    return function(event) {
      const map = contextManager._getPatchMap(ee);
      if (map !== void 0) {
        if (arguments.length === 0) {
          contextManager._createPatchMap(ee);
        } else if (map[event] !== void 0) {
          delete map[event];
        }
      }
      return original.apply(this, arguments);
    };
  }
  /**
   * Patch methods on an event emitter instance that can add listeners so we
   * can force them to propagate a given context.
   * @param ee EventEmitter instance
   * @param original reference to the patched method
   * @param [context] context to propagate when calling listeners
   */
  _patchAddListener(ee, original, context2) {
    const contextManager = this;
    return function(event, listener) {
      if (contextManager._wrapped) {
        return original.call(this, event, listener);
      }
      let map = contextManager._getPatchMap(ee);
      if (map === void 0) {
        map = contextManager._createPatchMap(ee);
      }
      let listeners = map[event];
      if (listeners === void 0) {
        listeners = /* @__PURE__ */ new WeakMap();
        map[event] = listeners;
      }
      const patchedListener = contextManager.bind(context2, listener);
      listeners.set(listener, patchedListener);
      contextManager._wrapped = true;
      try {
        return original.call(this, event, patchedListener);
      } finally {
        contextManager._wrapped = false;
      }
    };
  }
  _createPatchMap(ee) {
    const map = /* @__PURE__ */ Object.create(null);
    ee[this._kOtListeners] = map;
    return map;
  }
  _getPatchMap(ee) {
    return ee[this._kOtListeners];
  }
}
AbstractAsyncHooksContextManager$1.AbstractAsyncHooksContextManager = AbstractAsyncHooksContextManager;
Object.defineProperty(AsyncHooksContextManager$1, "__esModule", { value: true });
AsyncHooksContextManager$1.AsyncHooksContextManager = void 0;
const api_1$1 = require$$0;
const asyncHooks = require$$1$7;
const AbstractAsyncHooksContextManager_1$1 = AbstractAsyncHooksContextManager$1;
class AsyncHooksContextManager extends AbstractAsyncHooksContextManager_1$1.AbstractAsyncHooksContextManager {
  constructor() {
    super();
    this._contexts = /* @__PURE__ */ new Map();
    this._stack = [];
    this._asyncHook = asyncHooks.createHook({
      init: this._init.bind(this),
      before: this._before.bind(this),
      after: this._after.bind(this),
      destroy: this._destroy.bind(this),
      promiseResolve: this._destroy.bind(this)
    });
  }
  active() {
    var _a3;
    return (_a3 = this._stack[this._stack.length - 1]) !== null && _a3 !== void 0 ? _a3 : api_1$1.ROOT_CONTEXT;
  }
  with(context2, fn, thisArg, ...args) {
    this._enterContext(context2);
    try {
      return fn.call(thisArg, ...args);
    } finally {
      this._exitContext();
    }
  }
  enable() {
    this._asyncHook.enable();
    return this;
  }
  disable() {
    this._asyncHook.disable();
    this._contexts.clear();
    this._stack = [];
    return this;
  }
  /**
   * Init hook will be called when userland create a async context, setting the
   * context as the current one if it exist.
   * @param uid id of the async context
   * @param type the resource type
   */
  _init(uid, type) {
    if (type === "TIMERWRAP")
      return;
    const context2 = this._stack[this._stack.length - 1];
    if (context2 !== void 0) {
      this._contexts.set(uid, context2);
    }
  }
  /**
   * Destroy hook will be called when a given context is no longer used so we can
   * remove its attached context.
   * @param uid uid of the async context
   */
  _destroy(uid) {
    this._contexts.delete(uid);
  }
  /**
   * Before hook is called just before executing a async context.
   * @param uid uid of the async context
   */
  _before(uid) {
    const context2 = this._contexts.get(uid);
    if (context2 !== void 0) {
      this._enterContext(context2);
    }
  }
  /**
   * After hook is called just after completing the execution of a async context.
   */
  _after() {
    this._exitContext();
  }
  /**
   * Set the given context as active
   */
  _enterContext(context2) {
    this._stack.push(context2);
  }
  /**
   * Remove the context at the root of the stack
   */
  _exitContext() {
    this._stack.pop();
  }
}
AsyncHooksContextManager$1.AsyncHooksContextManager = AsyncHooksContextManager;
var AsyncLocalStorageContextManager$1 = {};
Object.defineProperty(AsyncLocalStorageContextManager$1, "__esModule", { value: true });
AsyncLocalStorageContextManager$1.AsyncLocalStorageContextManager = void 0;
const api_1 = require$$0;
const async_hooks_1 = require$$1$7;
const AbstractAsyncHooksContextManager_1 = AbstractAsyncHooksContextManager$1;
class AsyncLocalStorageContextManager extends AbstractAsyncHooksContextManager_1.AbstractAsyncHooksContextManager {
  constructor() {
    super();
    this._asyncLocalStorage = new async_hooks_1.AsyncLocalStorage();
  }
  active() {
    var _a3;
    return (_a3 = this._asyncLocalStorage.getStore()) !== null && _a3 !== void 0 ? _a3 : api_1.ROOT_CONTEXT;
  }
  with(context2, fn, thisArg, ...args) {
    const cb = thisArg == null ? fn : fn.bind(thisArg);
    return this._asyncLocalStorage.run(context2, cb, ...args);
  }
  enable() {
    return this;
  }
  disable() {
    this._asyncLocalStorage.disable();
    return this;
  }
}
AsyncLocalStorageContextManager$1.AsyncLocalStorageContextManager = AsyncLocalStorageContextManager;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.AsyncLocalStorageContextManager = exports2.AsyncHooksContextManager = void 0;
  var AsyncHooksContextManager_1 = AsyncHooksContextManager$1;
  Object.defineProperty(exports2, "AsyncHooksContextManager", { enumerable: true, get: function() {
    return AsyncHooksContextManager_1.AsyncHooksContextManager;
  } });
  var AsyncLocalStorageContextManager_1 = AsyncLocalStorageContextManager$1;
  Object.defineProperty(exports2, "AsyncLocalStorageContextManager", { enumerable: true, get: function() {
    return AsyncLocalStorageContextManager_1.AsyncLocalStorageContextManager;
  } });
})(src);
const SentryContextManager = wrapContextManagerClass(src.AsyncLocalStorageContextManager);
function normalizeWindowsPath(path2) {
  return path2.replace(/^[A-Z]:/, "").replace(/\\/g, "/");
}
function createGetModuleFromFilename(basePath = process.argv[1] ? dirname(process.argv[1]) : process.cwd(), isWindows = path$g.sep === "\\") {
  const normalizedBase = isWindows ? normalizeWindowsPath(basePath) : basePath;
  return (filename) => {
    if (!filename) {
      return;
    }
    const normalizedFilename = isWindows ? normalizeWindowsPath(filename) : filename;
    let { dir, base: file2, ext } = path$g.posix.parse(normalizedFilename);
    if (ext === ".js" || ext === ".mjs" || ext === ".cjs") {
      file2 = file2.slice(0, ext.length * -1);
    }
    const decodedFile = decodeURIComponent(file2);
    if (!dir) {
      dir = ".";
    }
    const n = dir.lastIndexOf("/node_modules");
    if (n > -1) {
      return `${dir.slice(n + 14).replace(/\//g, ".")}:${decodedFile}`;
    }
    if (dir.startsWith(normalizedBase)) {
      const moduleName = dir.slice(normalizedBase.length + 1).replace(/\//g, ".");
      return moduleName ? `${moduleName}:${decodedFile}` : decodedFile;
    }
    return decodedFile;
  };
}
const DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS = 6e4;
class NodeClient extends ServerRuntimeClient {
  constructor(options) {
    const clientOptions = {
      ...options,
      platform: "node",
      runtime: { name: "node", version: global.process.version },
      serverName: options.serverName || global.process.env.SENTRY_NAME || os__namespace.hostname()
    };
    if (options.openTelemetryInstrumentations) {
      registerInstrumentations({
        instrumentations: options.openTelemetryInstrumentations
      });
    }
    applySdkMetadata(clientOptions, "node");
    logger$1.log(
      `Initializing Sentry: process: ${process.pid}, thread: ${require$$3.isMainThread ? "main" : `worker-${require$$3.threadId}`}.`
    );
    super(clientOptions);
  }
  /** Get the OTEL tracer. */
  get tracer() {
    if (this._tracer) {
      return this._tracer;
    }
    const name2 = "@sentry/node";
    const version2 = SDK_VERSION$1;
    const tracer = trace.getTracer(name2, version2);
    this._tracer = tracer;
    return tracer;
  }
  // Eslint ignore explanation: This is already documented in super.
  // eslint-disable-next-line jsdoc/require-jsdoc
  async flush(timeout) {
    const provider = this.traceProvider;
    const spanProcessor = _optionalChain([provider, "optionalAccess", (_) => _.activeSpanProcessor]);
    if (spanProcessor) {
      await spanProcessor.forceFlush();
    }
    if (this.getOptions().sendClientReports) {
      this._flushOutcomes();
    }
    return super.flush(timeout);
  }
  // Eslint ignore explanation: This is already documented in super.
  // eslint-disable-next-line jsdoc/require-jsdoc
  close(timeout) {
    if (this._clientReportInterval) {
      clearInterval(this._clientReportInterval);
    }
    if (this._clientReportOnExitFlushListener) {
      process.off("beforeExit", this._clientReportOnExitFlushListener);
    }
    return super.close(timeout);
  }
  /**
   * Will start tracking client reports for this client.
   *
   * NOTICE: This method will create an interval that is periodically called and attach a `process.on('beforeExit')`
   * hook. To clean up these resources, call `.close()` when you no longer intend to use the client. Not doing so will
   * result in a memory leak.
   */
  // The reason client reports need to be manually activated with this method instead of just enabling them in a
  // constructor, is that if users periodically and unboundedly create new clients, we will create more and more
  // intervals and beforeExit listeners, thus leaking memory. In these situations, users are required to call
  // `client.close()` in order to dispose of the acquired resources.
  // We assume that calling this method in Sentry.init() is a sensible default, because calling Sentry.init() over and
  // over again would also result in memory leaks.
  // Note: We have experimented with using `FinalizationRegisty` to clear the interval when the client is garbage
  // collected, but it did not work, because the cleanup function never got called.
  startClientReportTracking() {
    const clientOptions = this.getOptions();
    if (clientOptions.sendClientReports) {
      this._clientReportOnExitFlushListener = () => {
        this._flushOutcomes();
      };
      this._clientReportInterval = setInterval(() => {
        DEBUG_BUILD && logger$1.log("Flushing client reports based on interval.");
        this._flushOutcomes();
      }, _nullishCoalesce(clientOptions.clientReportFlushInterval, () => DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS)).unref();
      process.on("beforeExit", this._clientReportOnExitFlushListener);
    }
  }
  /** Custom implementation for OTEL, so we can handle scope-span linking. */
  _getTraceInfoFromScope(scope2) {
    if (!scope2) {
      return [void 0, void 0];
    }
    return getTraceContextForScope(this, scope2);
  }
}
const MAX_MAX_SPAN_WAIT_DURATION = 1e6;
function initOpenTelemetry(client, options = {}) {
  if (client.getOptions().debug) {
    setupOpenTelemetryLogger();
  }
  const provider = setupOtel(client, options);
  client.traceProvider = provider;
}
function setupOtel(client, options = {}) {
  const provider = new BasicTracerProvider({
    sampler: new SentrySampler(client),
    resource: new Resource({
      [ATTR_SERVICE_NAME]: "node",
      // eslint-disable-next-line deprecation/deprecation
      [SEMRESATTRS_SERVICE_NAMESPACE]: "sentry",
      [ATTR_SERVICE_VERSION]: SDK_VERSION$1
    }),
    forceFlushTimeoutMillis: 500,
    spanProcessors: [
      new SentrySpanProcessor({
        timeout: _clampSpanProcessorTimeout(client.getOptions().maxSpanWaitDuration)
      }),
      ...options.spanProcessors || []
    ]
  });
  provider.register({
    propagator: new SentryPropagator(),
    contextManager: new SentryContextManager()
  });
  return provider;
}
function _clampSpanProcessorTimeout(maxSpanWaitDuration) {
  if (maxSpanWaitDuration == null) {
    return void 0;
  }
  if (maxSpanWaitDuration > MAX_MAX_SPAN_WAIT_DURATION) {
    DEBUG_BUILD && logger$1.warn(`\`maxSpanWaitDuration\` is too high, using the maximum value of ${MAX_MAX_SPAN_WAIT_DURATION}`);
    return MAX_MAX_SPAN_WAIT_DURATION;
  } else if (maxSpanWaitDuration <= 0 || Number.isNaN(maxSpanWaitDuration)) {
    DEBUG_BUILD && logger$1.warn("`maxSpanWaitDuration` must be a positive number, using default value instead.");
    return void 0;
  }
  return maxSpanWaitDuration;
}
function setupOpenTelemetryLogger() {
  const otelLogger = new Proxy(logger$1, {
    get(target, prop, receiver) {
      const actualProp = prop === "verbose" ? "debug" : prop;
      return Reflect.get(target, actualProp, receiver);
    }
  });
  diag.disable();
  diag.setLogger(otelLogger, DiagLogLevel.DEBUG);
}
let RENDERERS;
function trackRendererProperties() {
  if (RENDERERS) {
    return;
  }
  const renderers = RENDERERS = /* @__PURE__ */ new Map();
  function updateUrl(id, url2) {
    const state = renderers.get(id) || { id };
    state.url = normalizeUrlToBase(url2, electron$1.app.getAppPath());
    renderers.set(id, state);
  }
  function updateTitle(id, title) {
    const state = renderers.get(id) || { id };
    state.title = title;
    renderers.set(id, state);
  }
  electron$1.app.on("web-contents-created", (_, contents) => {
    const id = contents.id;
    contents.on("did-navigate", (_2, url2) => updateUrl(id, url2));
    contents.on("did-navigate-in-page", (_2, url2) => updateUrl(id, url2));
    contents.on("page-title-updated", (_2, title) => updateTitle(id, title));
    contents.on("destroyed", () => {
      setTimeout(() => {
        renderers.delete(id);
      }, 5e3);
    });
  });
}
function getRendererProperties(id) {
  return RENDERERS == null ? void 0 : RENDERERS.get(id);
}
const DEFAULT_OPTIONS$2 = {
  // We exclude events starting with remote as they can be quite verbose
  app: (name2) => !name2.startsWith("remote-"),
  autoUpdater: () => true,
  webContents: (name2) => ["dom-ready", "context-menu", "load-url", "destroyed"].includes(name2),
  browserWindow: (name2) => [
    "closed",
    "close",
    "unresponsive",
    "responsive",
    "show",
    "blur",
    "focus",
    "hide",
    "maximize",
    "minimize",
    "restore",
    "enter-full-screen",
    "leave-full-screen"
  ].includes(name2),
  screen: () => true,
  powerMonitor: () => true,
  captureWindowTitles: false
};
function normalizeOptions(options) {
  return Object.keys(options).reduce((obj, k) => {
    if (k === "captureWindowTitles") {
      obj[k] = !!options[k];
    } else {
      const val = options[k];
      if (Array.isArray(val)) {
        obj[k] = (name2) => val.includes(name2);
      } else if (typeof val === "function" || val === false) {
        obj[k] = val;
      }
    }
    return obj;
  }, {});
}
const electronBreadcrumbsIntegration = defineIntegration((userOptions = {}) => {
  const options = {
    ...DEFAULT_OPTIONS$2,
    ...normalizeOptions(userOptions)
  };
  function patchEventEmitter(emitter, category, shouldCapture, id) {
    const emit = emitter.emit.bind(emitter);
    emitter.emit = (event, ...args) => {
      var _a3, _b2;
      if (shouldCapture && shouldCapture(event)) {
        const breadcrumb = {
          category: "electron",
          message: `${category}.${event}`,
          timestamp: (/* @__PURE__ */ new Date()).getTime() / 1e3,
          type: "ui"
        };
        if (id) {
          breadcrumb.data = { ...getRendererProperties(id) };
          if (!options.captureWindowTitles && ((_a3 = breadcrumb.data) == null ? void 0 : _a3.title)) {
            (_b2 = breadcrumb.data) == null ? true : delete _b2.title;
          }
        }
        addBreadcrumb(breadcrumb);
      }
      return emit(event, ...args);
    };
  }
  return {
    name: "ElectronBreadcrumbs",
    setup(client) {
      const clientOptions = client.getOptions();
      trackRendererProperties();
      electron$1.app.whenReady().then(() => {
        if (options.screen) {
          patchEventEmitter(electron$1.screen, "screen", options.screen);
        }
        if (options.powerMonitor) {
          patchEventEmitter(electron$1.powerMonitor, "powerMonitor", options.powerMonitor);
        }
      }, () => {
      });
      if (options.app) {
        patchEventEmitter(electron$1.app, "app", options.app);
      }
      if (options.autoUpdater) {
        patchEventEmitter(electron$1.autoUpdater, "autoUpdater", options.autoUpdater);
      }
      if (options.browserWindow) {
        electron$1.app.on("browser-window-created", (_, window2) => {
          var _a3;
          const id = window2.webContents.id;
          const windowName = ((_a3 = clientOptions == null ? void 0 : clientOptions.getRendererName) == null ? void 0 : _a3.call(clientOptions, window2.webContents)) || "window";
          patchEventEmitter(window2, windowName, options.browserWindow, id);
        });
      }
      if (options.webContents) {
        electron$1.app.on("web-contents-created", (_, contents) => {
          var _a3;
          const id = contents.id;
          const webContentsName = ((_a3 = clientOptions == null ? void 0 : clientOptions.getRendererName) == null ? void 0 : _a3.call(clientOptions, contents)) || "renderer";
          patchEventEmitter(contents, webContentsName, options.webContents, id);
        });
      }
    }
  };
});
const onUncaughtExceptionIntegration = defineIntegration(() => {
  return {
    name: "OnUncaughtException",
    setup(client) {
      const options = client.getOptions();
      global.process.on("uncaughtException", (error) => {
        captureException(error, {
          originalException: error,
          captureContext: {
            level: "fatal"
          },
          data: {
            mechanism: {
              handled: false,
              type: "generic"
            }
          }
        });
        client.flush(options.shutdownTimeout || 2e3).then(() => {
          if (options == null ? void 0 : options.onFatalError) {
            options.onFatalError(error);
          } else if (global.process.listenerCount("uncaughtException") <= 2) {
            console.error("Uncaught Exception:");
            console.error(error);
            const ref = error.stack;
            const stack = ref !== void 0 ? ref : `${error.name}: ${error.message}`;
            const message = `Uncaught Exception:
${stack}`;
            electron$1.dialog.showErrorBox("A JavaScript error occurred in the main process", message);
          }
        }, () => {
        });
      });
    }
  };
});
function getScopeData() {
  const globalScope = getGlobalScope().getScopeData();
  const isolationScope = getIsolationScope().getScopeData();
  const currentScope = getCurrentScope().getScopeData();
  mergeScopeData(globalScope, isolationScope);
  mergeScopeData(globalScope, currentScope);
  globalScope.eventProcessors = [];
  return globalScope;
}
function addScopeListener(callback) {
  getIsolationScope().addScopeListener((isolation) => {
    const merged = getScopeData();
    callback(merged, isolation);
  });
  getCurrentScope().addScopeListener((current2) => {
    const merged = getScopeData();
    callback(merged, current2);
  });
  getGlobalScope().addScopeListener((global2) => {
    const merged = getScopeData();
    callback(merged, global2);
  });
}
const SDK_VERSION = "5.10.0";
const SDK_NAME = "sentry.javascript.electron";
function getSdkInfo() {
  return {
    name: SDK_NAME,
    packages: [
      {
        name: "npm:@sentry/electron",
        version: SDK_VERSION
      }
    ],
    version: SDK_VERSION
  };
}
function getDefaultReleaseName() {
  const app_name = electron$1.app.name || electron$1.app.getName();
  return `${app_name.replace(/\W/g, "-")}@${electron$1.app.getVersion()}`;
}
function getDefaultEnvironment() {
  return electron$1.app.isPackaged ? "production" : "development";
}
async function getEventDefaults(client) {
  let event = { message: "test" };
  const eventHint = {};
  for (const processor of client.getEventProcessors()) {
    if (event === null)
      break;
    event = await processor(event, eventHint);
  }
  event == null ? true : delete event.message;
  return event || {};
}
var IPCMode;
(function(IPCMode2) {
  IPCMode2[IPCMode2["Classic"] = 1] = "Classic";
  IPCMode2[IPCMode2["Protocol"] = 2] = "Protocol";
  IPCMode2[IPCMode2["Both"] = 3] = "Both";
})(IPCMode || (IPCMode = {}));
const PROTOCOL_SCHEME = "sentry-ipc";
var IPCChannel;
(function(IPCChannel2) {
  IPCChannel2["RENDERER_START"] = "sentry-electron.renderer-start";
  IPCChannel2["EVENT"] = "sentry-electron.event";
  IPCChannel2["SCOPE"] = "sentry-electron.scope";
  IPCChannel2["ENVELOPE"] = "sentry-electron.envelope";
  IPCChannel2["STATUS"] = "sentry-electron.status";
  IPCChannel2["ADD_METRIC"] = "sentry-electron.add-metric";
})(IPCChannel || (IPCChannel = {}));
const RENDERER_ID_HEADER = "sentry-electron-renderer-id";
const UTILITY_PROCESS_MAGIC_MESSAGE_KEY = "__sentry_message_port_message__";
function isMagicMessage(msg) {
  return !!(msg && typeof msg === "object" && UTILITY_PROCESS_MAGIC_MESSAGE_KEY in msg);
}
function getMagicMessage() {
  return { [UTILITY_PROCESS_MAGIC_MESSAGE_KEY]: true };
}
const parsed = parseSemver(process.versions.electron);
const version = { major: parsed.major || 0, minor: parsed.minor || 0, patch: parsed.patch || 0 };
const EXIT_REASONS = [
  "clean-exit",
  "abnormal-exit",
  "killed",
  "crashed",
  "oom",
  "launch-failed",
  "integrity-failure"
];
function getSentryCachePath() {
  return path$f.join(electron$1.app.getPath("userData"), "sentry");
}
function crashpadLinux() {
  if (version.major >= 16) {
    return true;
  }
  return electron$1.app.commandLine.hasSwitch("enable-crashpad");
}
function usesCrashpad() {
  return process.platform !== "linux" || crashpadLinux();
}
function supportsProtocolHandle() {
  return version.major >= 25;
}
function registerProtocol(protocol, scheme, callback) {
  if (supportsProtocolHandle()) {
    protocol.handle(scheme, async (request) => {
      callback({
        windowId: request.headers.get(RENDERER_ID_HEADER) || void 0,
        url: request.url,
        body: Buffer.from(await request.arrayBuffer())
      });
      return new Response("");
    });
  } else {
    protocol.registerStringProtocol(scheme, (request, complete) => {
      var _a3, _b2;
      callback({
        windowId: request.headers[RENDERER_ID_HEADER],
        url: request.url,
        body: (_b2 = (_a3 = request.uploadData) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.bytes
      });
      complete("");
    });
  }
}
class Mutex {
  constructor() {
    this._entries = [];
    this._waiters = [];
    this._value = 1;
  }
  /** Run a task when all pending tasks are complete */
  async runExclusive(task) {
    const release = await this._acquire();
    try {
      return await task();
    } finally {
      release();
    }
  }
  /** Gets a promise that resolves when all pending tasks are complete */
  _acquire() {
    return new Promise((resolve3, reject) => {
      this._entries.push({ resolve: resolve3, reject });
      this._dispatch();
    });
  }
  /** Releases after a task is complete */
  _release() {
    this._value += 1;
    this._dispatch();
  }
  /** Dispatches pending tasks */
  _dispatch() {
    var _a3;
    for (let weight = this._value; weight > 0; weight--) {
      const queueEntry = (_a3 = this._entries) == null ? void 0 : _a3.shift();
      if (!queueEntry)
        continue;
      this._value -= weight;
      weight = this._value + 1;
      queueEntry.resolve(this._newReleaser());
    }
    this._drainUnlockWaiters();
  }
  /** Creates a new releaser */
  _newReleaser() {
    let called = false;
    return () => {
      if (called)
        return;
      called = true;
      this._release();
    };
  }
  /** Drain unlock waiters */
  _drainUnlockWaiters() {
    for (let weight = this._value; weight > 0; weight--) {
      if (!this._waiters[weight - 1])
        continue;
      this._waiters.forEach((waiter) => waiter());
      this._waiters = [];
    }
  }
}
const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.*\d{0,10}Z$/;
function dateReviver(_, value) {
  if (typeof value === "string" && dateFormat.test(value)) {
    return new Date(value);
  }
  return value;
}
class Store {
  /**
   * Creates a new store.
   *
   * @param path A unique filename to store this data.
   * @param id A unique filename to store this data.
   * @param initial An initial value to initialize data with.
   */
  constructor(path2, id, initial) {
    this._lock = new Mutex();
    this._path = path$f.join(path2, `${id}.json`);
    this._initial = initial;
  }
  /**
   * Updates data by replacing it with the given value.
   * @param data New data to replace the previous one.
   */
  async set(data2) {
    await this._lock.runExclusive(async () => {
      this._data = data2;
      try {
        if (data2 === void 0) {
          try {
            await require$$0$1.promises.unlink(this._path);
          } catch (_) {
          }
        } else {
          await require$$0$1.promises.mkdir(path$f.dirname(this._path), { recursive: true });
          await require$$0$1.promises.writeFile(this._path, JSON.stringify(data2));
        }
      } catch (e) {
        logger$1.warn("Failed to write to store", e);
      }
    });
  }
  /**
   * Returns the current data.
   *
   * When invoked for the first time, it will try to load previously stored data
   * from disk. If the file does not exist, the initial value provided to the
   * constructor is used.
   */
  async get() {
    return this._lock.runExclusive(async () => {
      if (this._data === void 0) {
        try {
          this._data = JSON.parse(await require$$0$1.promises.readFile(this._path, "utf8"), dateReviver);
        } catch (e) {
          this._data = this._initial;
        }
      }
      return this._data;
    });
  }
  /**
   * Updates data by passing it through the given function.
   * @param fn A function receiving the current data and returning new one.
   */
  async update(fn) {
    await this.set(fn(await this.get()));
  }
  /** Returns store to its initial state */
  async clear() {
    await this.set(this._initial);
  }
  /** Gets the Date that the file was last modified */
  async getModifiedDate() {
    var _a3;
    try {
      return (_a3 = await require$$0$1.promises.stat(this._path)) == null ? void 0 : _a3.mtime;
    } catch (_) {
      return void 0;
    }
  }
}
class BufferedWriteStore extends Store {
  /**
   * Creates a new ThrottledStore.
   *
   * @param path A unique filename to store this data.
   * @param id A unique filename to store this data.
   * @param initial An initial value to initialize data with.
   * @param throttleTime The minimum time between writes
   */
  constructor(path2, id, initial, _throttleTime = 500) {
    super(path2, id, initial);
    this._throttleTime = _throttleTime;
  }
  /** @inheritdoc */
  async set(data2) {
    var _a3;
    this._data = data2;
    this._pendingWrite = {
      // We overwrite the data for the pending write so that the latest data is written in the next flush
      data: data2,
      // If there is already a pending timeout, we keep that rather than starting the timeout again
      timeout: ((_a3 = this._pendingWrite) == null ? void 0 : _a3.timeout) || setTimeout(() => this._writePending(), this._throttleTime)
    };
  }
  /** Writes the pending write to disk */
  _writePending() {
    if (this._pendingWrite) {
      const data2 = this._pendingWrite.data;
      this._pendingWrite = void 0;
      super.set(data2).catch(() => {
      });
    }
  }
}
const PERSIST_INTERVAL_MS = 6e4;
let sessionStore;
let previousSession;
function getSessionStore() {
  if (!sessionStore) {
    sessionStore = new Store(getSentryCachePath(), "session", void 0);
    previousSession = sessionStore.get();
  }
  return sessionStore;
}
let persistTimer;
function startSession(sendOnCreate) {
  const session = startSession$1();
  if (sendOnCreate) {
    captureSession();
  }
  getSessionStore().set(session).catch(() => {
  });
  persistTimer = setInterval(async () => {
    const currentSession = getCurrentScope().getSession();
    if (currentSession && currentSession.status === "ok") {
      await getSessionStore().set(currentSession);
    }
  }, PERSIST_INTERVAL_MS);
}
async function endSession() {
  if (persistTimer) {
    clearInterval(persistTimer);
  }
  const session = getCurrentScope().getSession();
  if (session) {
    if (session.status === "ok") {
      logger$1.log("Ending session");
      endSession$1();
    } else {
      logger$1.log("Session was already ended");
    }
  } else {
    logger$1.log("No session");
  }
  await getSessionStore().clear();
  await flush(2e3);
}
async function checkPreviousSession(crashed) {
  var _a3, _b2;
  const client = getClient();
  const previous = await previousSession;
  if (previous && client) {
    if (previous.status !== "ok") {
      previousSession = void 0;
      return;
    }
    const status = crashed ? "crashed" : "abnormal";
    logger$1.log(`Found previous ${status} session`);
    const sesh = makeSession(previous);
    updateSession(sesh, {
      status,
      errors: (sesh.errors || 0) + 1,
      release: (_a3 = previous.attrs) == null ? void 0 : _a3.release,
      environment: (_b2 = previous.attrs) == null ? void 0 : _b2.environment
    });
    await client.sendSession(sesh);
    previousSession = void 0;
  }
}
function sessionCrashed() {
  if (persistTimer) {
    clearInterval(persistTimer);
  }
  logger$1.log("Session Crashed");
  const session = getCurrentScope().getSession();
  if (!session) {
    logger$1.log("No session to update");
    return;
  }
  if (session.status === "ok") {
    logger$1.log("Setting session as crashed");
    const errors = session.errors + 1;
    updateSession(session, { status: "crashed", errors });
    captureSession();
  } else {
    logger$1.log("Session already ended");
  }
}
function sessionAnr() {
  if (persistTimer) {
    clearInterval(persistTimer);
  }
  const session = getCurrentScope().getSession();
  if (!session) {
    return;
  }
  if (session.status === "ok") {
    logger$1.log("Setting session as abnormal ANR");
    updateSession(session, { status: "abnormal", abnormal_mechanism: "anr_foreground" });
    captureSession();
  }
}
function endSessionOnExit() {
  electron$1.app.on("before-quit", () => {
    electron$1.app.removeListener("will-quit", exitHandler);
    electron$1.app.on("will-quit", exitHandler);
  });
}
const exitHandler = async (event) => {
  if (event.defaultPrevented) {
    return;
  }
  logger$1.log("[Session] Exit Handler");
  event.preventDefault();
  try {
    await endSession();
  } catch (e) {
    logger$1.warn("[Session] Error ending session:", e);
  }
  electron$1.app.exit();
};
const MAX_AGE_DAYS = 30;
const MS_PER_DAY = 24 * 3600 * 1e3;
const NOT_MODIFIED_MS = 1e3;
const MAX_RETRY_MS = 5e3;
const RETRY_DELAY_MS = 500;
const MAX_RETRIES = MAX_RETRY_MS / RETRY_DELAY_MS;
const MINIDUMP_HEADER = "MDMP";
function delay(ms2) {
  return new Promise((resolve3) => setTimeout(resolve3, ms2));
}
function createMinidumpLoader(getMinidumpPaths, preProcessFile = (file2) => file2) {
  const mutex = new Mutex();
  return async (deleteAll, callback) => {
    await mutex.runExclusive(async () => {
      for (const path2 of await getMinidumpPaths()) {
        try {
          if (deleteAll) {
            continue;
          }
          logger$1.log("Found minidump", path2);
          let stats = await require$$0$1.promises.stat(path2);
          const thirtyDaysAgo = (/* @__PURE__ */ new Date()).getTime() - MAX_AGE_DAYS * MS_PER_DAY;
          if (stats.mtimeMs < thirtyDaysAgo) {
            logger$1.log(`Ignoring minidump as it is over ${MAX_AGE_DAYS} days old`);
            continue;
          }
          let retries = 0;
          while (retries <= MAX_RETRIES) {
            const twoSecondsAgo = (/* @__PURE__ */ new Date()).getTime() - NOT_MODIFIED_MS;
            if (stats.mtimeMs < twoSecondsAgo) {
              const file2 = await require$$0$1.promises.readFile(path2);
              const data2 = preProcessFile(file2);
              if (data2.length < 1e4 || data2.subarray(0, 4).toString() !== MINIDUMP_HEADER) {
                logger$1.warn("Dropping minidump as it appears invalid.");
                break;
              }
              const minidumpProcess = getMinidumpProcessType(data2);
              logger$1.log("Sending minidump");
              await callback(minidumpProcess, {
                attachmentType: "event.minidump",
                filename: basename(path2),
                data: data2
              });
              break;
            }
            logger$1.log(`Waiting. Minidump has been modified in the last ${NOT_MODIFIED_MS} milliseconds.`);
            retries += 1;
            await delay(RETRY_DELAY_MS);
            stats = await require$$0$1.promises.stat(path2);
          }
          if (retries >= MAX_RETRIES) {
            logger$1.warn("Timed out waiting for minidump to stop being modified");
          }
        } catch (e) {
          logger$1.error("Failed to load minidump", e);
        } finally {
          try {
            await require$$0$1.promises.unlink(path2);
          } catch (e) {
            logger$1.warn("Could not delete minidump", path2);
          }
        }
      }
    });
  };
}
async function deleteCrashpadMetadataFile(crashesDirectory, waitMs = 100) {
  if (waitMs > 2e3) {
    return;
  }
  const metadataPath = path$f.join(crashesDirectory, "metadata");
  try {
    await require$$0$1.promises.unlink(metadataPath);
    logger$1.log("Deleted Crashpad metadata file", metadataPath);
  } catch (e) {
    if (e.code && e.code == "EBUSY") {
      setTimeout(async () => {
        await deleteCrashpadMetadataFile(crashesDirectory, waitMs * 2);
      }, waitMs);
    }
  }
}
async function readDirsAsync(paths) {
  const found = [];
  for (const path2 of paths) {
    try {
      const files2 = await require$$0$1.promises.readdir(path2);
      found.push(...files2.map((file2) => path$f.join(path2, file2)));
    } catch (_) {
    }
  }
  return found;
}
function crashpadMinidumpLoader() {
  const crashesDirectory = electron$1.app.getPath("crashDumps");
  const crashpadSubDirectory = process.platform === "win32" ? "reports" : "completed";
  const dumpDirectories = [path$f.join(crashesDirectory, crashpadSubDirectory)];
  if (process.platform === "darwin") {
    dumpDirectories.push(path$f.join(crashesDirectory, "pending"));
  }
  return createMinidumpLoader(async () => {
    await deleteCrashpadMetadataFile(crashesDirectory).catch((error) => logger$1.error(error));
    const files2 = await readDirsAsync(dumpDirectories);
    return files2.filter((file2) => file2.endsWith(".dmp"));
  });
}
function minidumpFromBreakpadMultipart(file2) {
  const binaryStart = file2.lastIndexOf("Content-Type: application/octet-stream");
  if (binaryStart > 0) {
    const dumpStart = file2.indexOf(MINIDUMP_HEADER, binaryStart);
    const dumpEnd = file2.lastIndexOf("----------------------------");
    if (dumpStart > 0 && dumpEnd > 0 && dumpEnd > dumpStart) {
      return file2.subarray(dumpStart, dumpEnd);
    }
  }
  return file2;
}
function removeBreakpadMetadata(crashesDirectory, paths) {
  Promise.all(paths.filter((file2) => file2.endsWith(".txt") && !file2.endsWith("log.txt")).map(async (file2) => {
    const path2 = path$f.join(crashesDirectory, file2);
    try {
      await require$$0$1.promises.unlink(path2);
    } catch (e) {
      logger$1.warn("Could not delete", path2);
    }
  })).catch(() => {
  });
}
function breakpadMinidumpLoader() {
  const crashesDirectory = electron$1.app.getPath("crashDumps");
  return createMinidumpLoader(async () => {
    const files2 = await require$$0$1.promises.readdir(crashesDirectory);
    removeBreakpadMetadata(crashesDirectory, files2);
    return files2.filter((file2) => file2.endsWith(".dmp")).map((file2) => path$f.join(crashesDirectory, file2));
  }, minidumpFromBreakpadMultipart);
}
function getMinidumpLoader() {
  return usesCrashpad() ? crashpadMinidumpLoader() : breakpadMinidumpLoader();
}
function getMinidumpProcessType(buffer2) {
  const index2 = buffer2.indexOf("process_type");
  if (index2 < 0) {
    return;
  }
  let start = index2 + 12;
  while ((buffer2[start] || 0) < 32) {
    start++;
    if (start - index2 > 20) {
      return;
    }
  }
  let end = start;
  while ((buffer2[end] || -1) >= 32) {
    end++;
    if (end - start > 20) {
      return;
    }
  }
  const processType = buffer2.subarray(start, end).toString().replace("-process", "");
  if (processType === "gpu") {
    return "GPU";
  }
  return processType;
}
const sentryMinidumpIntegration = defineIntegration((options = {}) => {
  let minidumpsRemaining = options.maxMinidumpsPerSession || 10;
  let scopeStore;
  let scopeLastRun;
  let minidumpLoader;
  function startCrashReporter() {
    logger$1.log("Starting Electron crashReporter");
    electron$1.crashReporter.start({
      companyName: "",
      ignoreSystemCrashHandler: true,
      productName: electron$1.app.name || electron$1.app.getName(),
      // Empty string doesn't work for Linux Crashpad and no submitURL doesn't work for older versions of Electron
      submitURL: "https://f.a.k/e",
      uploadToServer: false,
      compress: true
    });
  }
  function setupScopeListener(client) {
    function scopeChanged(scope2) {
      setImmediate(async () => scopeStore == null ? void 0 : scopeStore.set({
        scope: scope2,
        event: await getEventDefaults(client)
      }));
    }
    addScopeListener((scope2) => {
      scopeChanged(scope2);
    });
    scopeChanged(getScopeData());
  }
  async function sendNativeCrashes(client, getEvent) {
    if (minidumpsRemaining <= 0) {
      logger$1.log("Not sending minidumps because the limit has been reached");
    }
    const deleteAll = client.getOptions().enabled === false || minidumpsRemaining <= 0;
    let minidumpFound = false;
    await (minidumpLoader == null ? void 0 : minidumpLoader(deleteAll, async (minidumpProcess, attachment) => {
      var _a3, _b2, _c2, _d;
      minidumpFound = true;
      const event = getEvent(minidumpProcess);
      if (((_a3 = event.tags) == null ? void 0 : _a3["event.process"]) === "browser") {
        const previousRun = await scopeLastRun;
        if (previousRun) {
          if (previousRun.scope) {
            applyScopeDataToEvent(event, previousRun.scope);
          }
          event.release = ((_b2 = previousRun.event) == null ? void 0 : _b2.release) || event.release;
          event.environment = ((_c2 = previousRun.event) == null ? void 0 : _c2.environment) || event.environment;
          event.contexts = ((_d = previousRun.event) == null ? void 0 : _d.contexts) || event.contexts;
        }
      }
      if (!event) {
        return;
      }
      if (minidumpsRemaining > 0) {
        minidumpsRemaining -= 1;
        captureEvent(event, { attachments: [attachment] });
      }
    }));
    return minidumpFound;
  }
  async function sendRendererCrash(client, options2, contents, details) {
    const { getRendererName: getRendererName2 } = options2;
    const found = await sendNativeCrashes(client, (minidumpProcess) => {
      var _a3;
      const crashedProcess = (minidumpProcess === "renderer" && getRendererName2 ? getRendererName2(contents) : minidumpProcess) || (usesCrashpad() ? "unknown" : "renderer");
      logger$1.log(`'${crashedProcess}' process '${details.reason}'`);
      return {
        contexts: {
          electron: {
            crashed_url: ((_a3 = getRendererProperties(contents.id)) == null ? void 0 : _a3.url) || "unknown",
            details
          }
        },
        level: "fatal",
        // The default is javascript
        platform: "native",
        tags: {
          "event.environment": "native",
          "event.process": crashedProcess,
          "exit.reason": details.reason
        }
      };
    });
    if (found) {
      sessionCrashed();
    }
  }
  async function sendChildProcessCrash(client, options2, details) {
    logger$1.log(`${details.type} process has ${details.reason}`);
    const found = await sendNativeCrashes(client, (minidumpProcess) => ({
      contexts: {
        electron: { details }
      },
      level: "fatal",
      // The default is javascript
      platform: "native",
      tags: {
        "event.environment": "native",
        "event.process": minidumpProcess || details.type,
        "exit.reason": details.reason,
        event_type: "native"
      }
    }));
    if (found) {
      sessionCrashed();
    }
  }
  return {
    name: "SentryMinidump",
    setup(client) {
      if (process.mas) {
        return;
      }
      startCrashReporter();
      scopeStore = new BufferedWriteStore(getSentryCachePath(), "scope_v3", {
        scope: new Scope().getScopeData()
      });
      scopeLastRun = scopeStore.get();
      minidumpLoader = getMinidumpLoader();
      const options2 = client.getOptions();
      setupScopeListener(client);
      if (!(options2 == null ? void 0 : options2.dsn)) {
        throw new SentryError("Attempted to enable Electron native crash reporter but no DSN was supplied");
      }
      trackRendererProperties();
      electron$1.app.on("render-process-gone", async (_, contents, details) => {
        if (EXIT_REASONS.includes(details.reason)) {
          await sendRendererCrash(client, options2, contents, details);
        }
      });
      electron$1.app.on("child-process-gone", async (_, details) => {
        if (EXIT_REASONS.includes(details.reason)) {
          await sendChildProcessCrash(client, options2, details);
        }
      });
      sendNativeCrashes(client, (minidumpProcess) => ({
        level: "fatal",
        platform: "native",
        tags: {
          "event.environment": "native",
          "event.process": minidumpProcess || (usesCrashpad() ? "unknown" : "browser")
        }
      })).then((minidumpsFound) => (
        // Check for previous uncompleted session. If a previous session exists
        // and no minidumps were found, its likely an abnormal exit
        checkPreviousSession(minidumpsFound)
      )).catch((error) => logger$1.error(error));
    }
  };
});
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object2, property) {
  try {
    return property in object2;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
const deepMerge = /* @__PURE__ */ getDefaultExportFromCjs(cjs);
function removePrivateProperties(event) {
  var _a3, _b2;
  (_a3 = event.sdkProcessingMetadata) == null ? true : delete _a3.capturedSpanScope;
  (_b2 = event.sdkProcessingMetadata) == null ? true : delete _b2.capturedSpanIsolationScope;
  for (const span of event.spans || []) {
    delete span.spanRecorder;
  }
}
function mergeEvents(defaults, event) {
  removePrivateProperties(event);
  const newEvent = deepMerge(defaults, event);
  if (event.spans || defaults.spans) {
    newEvent.spans = event.spans || defaults.spans;
  }
  return {
    ...newEvent,
    sdk: {
      ...defaults.sdk,
      ...event.sdk
    }
  };
}
function normalizePaths(event, basePath) {
  var _a3, _b2, _c2, _d, _e, _f;
  for (const exception of ((_a3 = event.exception) == null ? void 0 : _a3.values) || []) {
    for (const frame of ((_b2 = exception.stacktrace) == null ? void 0 : _b2.frames) || []) {
      if (frame.filename) {
        frame.filename = normalizeUrlToBase(frame.filename, basePath);
      }
    }
  }
  for (const debugImage of ((_c2 = event.debug_meta) == null ? void 0 : _c2.images) || []) {
    if (debugImage.type === "sourcemap") {
      debugImage.code_file = normalizeUrlToBase(debugImage.code_file, basePath);
    }
  }
  if (event.transaction) {
    event.transaction = normalizeUrlToBase(event.transaction, basePath);
  }
  const { request = {} } = event;
  if (request.url) {
    request.url = normalizeUrlToBase(request.url, basePath);
  }
  if (((_e = (_d = event.contexts) == null ? void 0 : _d.feedback) == null ? void 0 : _e.url) && typeof event.contexts.feedback.url === "string") {
    event.contexts.feedback.url = normalizeUrlToBase(event.contexts.feedback.url, basePath);
  }
  if (event.spans) {
    for (const span of event.spans) {
      if ((_f = span.description) == null ? void 0 : _f.startsWith("file://")) {
        span.description = normalizeUrlToBase(span.description, basePath);
      }
    }
  }
  return event;
}
function normalizeUrlsInReplayEnvelope(envelope, basePath) {
  let modifiedEnvelope = createEnvelope(envelope[0]);
  let isReplay = false;
  forEachEnvelopeItem(envelope, (item, type) => {
    var _a3;
    if (type === "replay_event") {
      isReplay = true;
      const [headers, event] = item;
      const currentScope = getCurrentScope().getScopeData();
      event.breadcrumbs = currentScope.breadcrumbs;
      event.tags = currentScope.tags;
      event.user = currentScope.user;
      if (Array.isArray(event.urls)) {
        event.urls = event.urls.map((url2) => normalizeUrlToBase(url2, basePath));
      }
      if ((_a3 = event == null ? void 0 : event.request) == null ? void 0 : _a3.url) {
        event.request.url = normalizeUrlToBase(event.request.url, basePath);
      }
      modifiedEnvelope = addItemToEnvelope(modifiedEnvelope, [headers, event]);
    } else if (type === "replay_recording") {
      modifiedEnvelope = addItemToEnvelope(modifiedEnvelope, item);
    }
  });
  return isReplay ? modifiedEnvelope : envelope;
}
function normaliseProfile(profile, basePath) {
  for (const frame of profile.profile.frames) {
    if (frame.abs_path) {
      frame.abs_path = normalizeUrlToBase(frame.abs_path, basePath);
    }
  }
}
function getPreloadPath() {
  try {
    return require.resolve("../../preload/index.js");
  } catch (_) {
    try {
      const currentDir = urlModule.fileURLToPath(typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" && _documentCurrentScript.src || new URL("main.cjs", document.baseURI).href);
      return path$f.resolve(currentDir, "..", "..", "..", "..", "preload", "index.js");
    } catch (_2) {
    }
  }
  return void 0;
}
const preloadInjectionIntegration = defineIntegration(() => {
  return {
    name: "PreloadInjection",
    setup(client) {
      const options = client.getOptions();
      if ((options.ipcMode & IPCMode.Classic) === 0) {
        return;
      }
      electron$1.app.once("ready", () => {
        const path2 = getPreloadPath();
        if (path2 && typeof path2 === "string" && path$f.isAbsolute(path2) && require$$0$1.existsSync(path2)) {
          for (const sesh of options.getSessions()) {
            const existing = sesh.getPreloads();
            sesh.setPreloads([path2, ...existing]);
          }
        } else {
          logger$1.log("The preload script could not be injected automatically. This is most likely caused by bundling of the main process");
        }
      });
    }
  };
});
const mainProcessSessionIntegration = defineIntegration((options = {}) => {
  return {
    name: "MainProcessSession",
    setup() {
      startSession(!!options.sendOnCreate);
      endSessionOnExit();
    }
  };
});
const DEFAULT_OPTIONS$1 = {
  screen: true
};
const additionalContextIntegration = defineIntegration((userOptions = {}) => {
  const _lazyDeviceContext = {};
  const options = {
    ...DEFAULT_OPTIONS$1,
    ...userOptions
  };
  function _setPrimaryDisplayInfo() {
    const display = electron$1.screen.getPrimaryDisplay();
    const width = Math.floor(display.size.width * display.scaleFactor);
    const height = Math.floor(display.size.height * display.scaleFactor);
    _lazyDeviceContext.screen_density = display.scaleFactor;
    _lazyDeviceContext.screen_resolution = `${width}x${height}`;
  }
  return {
    name: "AdditionalContext",
    setup() {
      electron$1.app.whenReady().then(() => {
        const { screen: screen$1 } = options;
        if (screen$1) {
          _setPrimaryDisplayInfo();
          electron$1.screen.on("display-metrics-changed", () => {
            _setPrimaryDisplayInfo();
          });
        }
      }, () => {
      });
    },
    processEvent(event) {
      const device = _lazyDeviceContext;
      return mergeEvents(event, { contexts: { device } });
    }
  };
});
function parseOptions(optionsIn) {
  const { method, options } = typeof optionsIn === "string" ? (
    // eslint-disable-next-line deprecation/deprecation
    { method: "GET", options: urlModule__namespace.parse(optionsIn) }
  ) : { method: (optionsIn.method || "GET").toUpperCase(), options: optionsIn };
  let url2 = "url" in options ? options.url : void 0;
  if (!url2) {
    const urlObj = {};
    urlObj.protocol = options.protocol || "http:";
    if (options.host) {
      urlObj.host = options.host;
    } else {
      if (options.hostname) {
        urlObj.hostname = options.hostname;
      } else {
        urlObj.hostname = "localhost";
      }
      if (options.port) {
        urlObj.port = options.port;
      }
    }
    const pathObj = urlModule__namespace.parse(options.path || "/");
    urlObj.pathname = pathObj.pathname;
    urlObj.search = pathObj.search;
    urlObj.hash = pathObj.hash;
    url2 = urlModule__namespace.format(urlObj);
  }
  return {
    method,
    url: url2
  };
}
function addHeadersToRequest(request, url2, sentryTraceHeader, dynamicSamplingContext) {
  logger$1.log(`[Tracing] Adding sentry-trace header ${sentryTraceHeader} to outgoing request to "${url2}": `);
  request.setHeader("sentry-trace", sentryTraceHeader);
  const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
  if (sentryBaggageHeader) {
    request.setHeader("baggage", sentryBaggageHeader);
  }
}
function createWrappedRequestFactory(options, tracePropagationTargets) {
  const createSpanUrlMap = new LRUMap(100);
  const headersUrlMap = new LRUMap(100);
  const shouldCreateSpan = (method, url2) => {
    if (options.tracing === void 0) {
      return true;
    }
    if (options.tracing === false) {
      return false;
    }
    const key = `${method}:${url2}`;
    const cachedDecision = createSpanUrlMap.get(key);
    if (cachedDecision !== void 0) {
      return cachedDecision;
    }
    const decision = options.tracing === true || options.tracing(method, url2);
    createSpanUrlMap.set(key, decision);
    return decision;
  };
  const shouldAttachTraceData = (method, url2) => {
    const key = `${method}:${url2}`;
    const cachedDecision = headersUrlMap.get(key);
    if (cachedDecision !== void 0) {
      return cachedDecision;
    }
    if (tracePropagationTargets) {
      const decision = stringMatchesSomePattern(url2, tracePropagationTargets);
      headersUrlMap.set(key, decision);
      return decision;
    }
    return true;
  };
  return function wrappedRequestMethodFactory(originalRequestMethod) {
    return function requestMethod(reqOptions) {
      const { url: url2, method } = parseOptions(reqOptions);
      const request = originalRequestMethod.apply(this, [reqOptions]);
      if (url2.match(/sentry_key/) || request.getHeader("x-sentry-auth")) {
        return request;
      }
      const span = shouldCreateSpan(method, url2) ? startInactiveSpan$1({
        name: `${method} ${url2}`,
        onlyIfParent: true,
        attributes: {
          url: url2,
          type: "net.request",
          "http.method": method
        },
        op: "http.client"
      }) : new SentryNonRecordingSpan();
      span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.http.electron.net");
      if (shouldAttachTraceData(method, url2)) {
        const { traceId, spanId, sampled, dsc } = {
          ...getIsolationScope().getPropagationContext(),
          ...getCurrentScope().getPropagationContext()
        };
        if (span.isRecording()) {
          const sentryTraceHeader = spanToTraceHeader(span);
          const dynamicSamplingContext = dsc || getDynamicSamplingContextFromSpan(span);
          addHeadersToRequest(request, url2, sentryTraceHeader, dynamicSamplingContext);
        } else {
          const sentryTraceHeader = generateSentryTraceHeader(traceId, spanId, sampled);
          const client = getClient();
          const dynamicSamplingContext = dsc || (client ? getDynamicSamplingContextFromClient(traceId, client) : void 0);
          addHeadersToRequest(request, url2, sentryTraceHeader, dynamicSamplingContext);
        }
      }
      return request.once("response", function(res) {
        if (options.breadcrumbs !== false) {
          addRequestBreadcrumb("response", method, url2, this, res);
        }
        if (res.statusCode) {
          setHttpStatus(span, res.statusCode);
        }
        span.end();
      }).once("error", function(_error) {
        if (options.breadcrumbs !== false) {
          addRequestBreadcrumb("error", method, url2, this, void 0);
        }
        setHttpStatus(span, 500);
        span.end();
      });
    };
  };
}
function addRequestBreadcrumb(event, method, url2, req, res) {
  addBreadcrumb({
    type: "http",
    category: "electron.net",
    data: {
      url: url2,
      method,
      status_code: res == null ? void 0 : res.statusCode
    }
  }, {
    event,
    request: req,
    response: res
  });
}
const electronNetIntegration = defineIntegration((options = {}) => {
  return {
    name: "ElectronNet",
    setup() {
      var _a3;
      const clientOptions = (_a3 = getClient()) == null ? void 0 : _a3.getOptions();
      if (options.breadcrumbs === false && options.tracing === false) {
        return;
      }
      fill(electron$1.net, "request", createWrappedRequestFactory(options, clientOptions == null ? void 0 : clientOptions.tracePropagationTargets));
    }
  };
});
const DEFAULT_OPTIONS = {
  breadcrumbs: EXIT_REASONS,
  events: ["abnormal-exit", "launch-failed", "integrity-failure"]
};
function getMessageAndSeverity(reason, proc) {
  const message = `'${proc}' process exited with '${reason}'`;
  switch (reason) {
    case "abnormal-exit":
    case "killed":
      return { message, level: "warning" };
    case "crashed":
    case "oom":
    case "launch-failed":
    case "integrity-failure":
      return { message, level: "fatal" };
    default:
      return { message, level: "debug" };
  }
}
const childProcessIntegration = defineIntegration((userOptions = {}) => {
  const { breadcrumbs, events: events2 } = userOptions;
  const options = {
    breadcrumbs: Array.isArray(breadcrumbs) ? breadcrumbs : breadcrumbs === false ? [] : DEFAULT_OPTIONS.breadcrumbs,
    events: Array.isArray(events2) ? events2 : events2 === false ? [] : DEFAULT_OPTIONS.events
  };
  return {
    name: "ChildProcess",
    setup(client) {
      const { breadcrumbs: breadcrumbs2, events: events3 } = options;
      const allReasons = Array.from(/* @__PURE__ */ new Set([...breadcrumbs2, ...events3]));
      if (allReasons.length > 0) {
        const clientOptions = client.getOptions();
        electron$1.app.on("child-process-gone", (_, details) => {
          const { reason } = details;
          if (events3.includes(reason)) {
            const { message, level } = getMessageAndSeverity(details.reason, details.type);
            captureMessage(message, { level, tags: { "event.process": details.type } });
          }
          if (breadcrumbs2.includes(reason)) {
            addBreadcrumb({
              type: "process",
              category: "child-process",
              ...getMessageAndSeverity(details.reason, details.type),
              data: details
            });
          }
        });
        electron$1.app.on("render-process-gone", (_, contents, details) => {
          var _a3;
          const { reason } = details;
          const name2 = ((_a3 = clientOptions == null ? void 0 : clientOptions.getRendererName) == null ? void 0 : _a3.call(clientOptions, contents)) || "renderer";
          if (events3.includes(reason)) {
            const { message, level } = getMessageAndSeverity(details.reason, name2);
            captureMessage(message, level);
          }
          if (breadcrumbs2.includes(reason)) {
            addBreadcrumb({
              type: "process",
              category: "child-process",
              ...getMessageAndSeverity(details.reason, name2),
              data: details
            });
          }
        });
      }
    }
  };
});
const screenshotsIntegration = defineIntegration(() => {
  return {
    name: "Screenshots",
    async processEvent(event, hint, client) {
      const attachScreenshot = !!client.getOptions().attachScreenshot;
      if (!attachScreenshot) {
        return event;
      }
      if (!event.transaction && event.platform !== "native") {
        let count = 1;
        for (const window2 of electron$1.BrowserWindow.getAllWindows()) {
          if (!hint.attachments) {
            hint.attachments = [];
          }
          try {
            if (!window2.isDestroyed() && window2.isVisible()) {
              const filename = count === 1 ? "screenshot.png" : `screenshot-${count}.png`;
              const image = await window2.capturePage();
              hint.attachments.push({ filename, data: image.toPNG(), contentType: "image/png" });
              count += 1;
            }
          } catch (e) {
            logger$1.error("Error capturing screenshot", e);
          }
        }
      }
      return event;
    }
  };
});
const DOCUMENT_POLICY_HEADER = "Document-Policy";
const JS_PROFILING_HEADER = "js-profiling";
let RENDERER_PROFILES;
function rendererProfileFromIpc(event, profile) {
  if (!RENDERER_PROFILES) {
    return;
  }
  const profile_id = profile.event_id;
  RENDERER_PROFILES.set(profile_id, profile);
  if (event) {
    event.contexts = {
      ...event.contexts,
      // Re-add the profile context which we can later use to find the correct profile
      profile: {
        profile_id
      }
    };
  }
}
function addJsProfilingHeader(responseHeaders = {}) {
  if (responseHeaders[DOCUMENT_POLICY_HEADER]) {
    const docPolicy = responseHeaders[DOCUMENT_POLICY_HEADER];
    if (Array.isArray(docPolicy)) {
      docPolicy.push(JS_PROFILING_HEADER);
    } else {
      responseHeaders[DOCUMENT_POLICY_HEADER] = [docPolicy, JS_PROFILING_HEADER];
    }
  } else {
    responseHeaders[DOCUMENT_POLICY_HEADER] = JS_PROFILING_HEADER;
  }
  return { responseHeaders };
}
const rendererProfilingIntegration = defineIntegration(() => {
  return {
    name: "RendererProfiling",
    setup(client) {
      var _a3;
      const options = client.getOptions();
      if (!options.enableRendererProfiling) {
        return;
      }
      RENDERER_PROFILES = new LRUMap(10);
      electron$1.app.on("ready", () => {
        for (const sesh of options.getSessions()) {
          sesh.webRequest.onHeadersReceived((details, callback) => {
            callback(addJsProfilingHeader(details.responseHeaders));
          });
        }
      });
      (_a3 = client.on) == null ? void 0 : _a3.call(client, "beforeEnvelope", (envelope) => {
        let profile_id;
        forEachEnvelopeItem(envelope, (item, type) => {
          var _a4, _b2;
          if (type !== "transaction") {
            return;
          }
          for (let j = 1; j < item.length; j++) {
            const event = item[j];
            if ((_b2 = (_a4 = event == null ? void 0 : event.contexts) == null ? void 0 : _a4.profile) == null ? void 0 : _b2.profile_id) {
              profile_id = event.contexts.profile.profile_id;
              delete event.contexts.profile;
            }
          }
        });
        if (!profile_id) {
          return;
        }
        const profile = RENDERER_PROFILES == null ? void 0 : RENDERER_PROFILES.remove(profile_id);
        if (!profile) {
          return;
        }
        normaliseProfile(profile, electron$1.app.getAppPath());
        profile.release = options.release || getDefaultReleaseName();
        profile.environment = options.environment || getDefaultEnvironment();
        envelope[1].push([{ type: "profile" }, profile]);
      });
    }
  };
});
const normalizePathsIntegration = defineIntegration(() => {
  return {
    name: "NormalizePaths",
    processEvent(event) {
      return normalizePaths(event, electron$1.app.getAppPath());
    }
  };
});
function getAppMemory() {
  return electron$1.app.getAppMetrics().reduce((acc, metric) => acc + metric.memory.workingSetSize * 1024, 0);
}
const electronContextIntegration = defineIntegration(() => {
  return {
    name: "ElectronContext",
    processEvent(event, _, client) {
      var _a3, _b2, _c2, _d, _e;
      delete event.server_name;
      (_a3 = event.tags) == null ? true : delete _a3.server_name;
      (_b2 = event.contexts) == null ? true : delete _b2.runtime;
      (_d = (_c2 = event.contexts) == null ? void 0 : _c2.app) == null ? true : delete _d.app_memory;
      if ((_e = event.request) == null ? void 0 : _e.headers) {
        delete event.request.headers["User-Agent"];
      }
      const { release = getDefaultReleaseName(), environment = getDefaultEnvironment() } = client.getOptions();
      return mergeEvents({
        contexts: {
          app: {
            app_name: electron$1.app.name || electron$1.app.getName(),
            app_version: electron$1.app.getVersion(),
            build_type: process.mas ? "app-store" : process.windowsStore ? "windows-store" : void 0,
            app_memory: getAppMemory(),
            app_arch: process.arch
          },
          browser: {
            name: "Chrome"
          },
          chrome: {
            name: "Chrome",
            type: "runtime",
            version: process.versions.chrome
          },
          device: {
            family: "Desktop"
          },
          node: {
            name: "Node",
            type: "runtime",
            version: process.versions.node
          },
          runtime: {
            name: "Electron",
            version: process.versions.electron
          }
        },
        environment,
        release,
        tags: {
          "event.origin": "electron",
          "event.environment": "javascript",
          "event.process": "browser"
        }
      }, event);
    }
  };
});
const GZIP_THRESHOLD = 1024 * 32;
function streamFromBody(body) {
  return new stream$2.Readable({
    read() {
      this.push(body);
      this.push(null);
    }
  });
}
function getRequestOptions(url2) {
  const { hostname, pathname, port, protocol, search } = new urlModule.URL(url2);
  return {
    method: "POST",
    hostname,
    path: `${pathname}${search}`,
    port: parseInt(port, 10),
    protocol
  };
}
function makeElectronTransport(options) {
  return createTransport(options, createElectronNetRequestExecutor(options.url, options.headers || {}));
}
function createElectronNetRequestExecutor(url2, baseHeaders) {
  baseHeaders["Content-Type"] = "application/x-sentry-envelope";
  return function makeRequest(request) {
    return electron$1.app.whenReady().then(() => new Promise((resolve3, reject) => {
      let bodyStream = streamFromBody(request.body);
      const headers = { ...baseHeaders };
      if (request.body.length > GZIP_THRESHOLD) {
        headers["content-encoding"] = "gzip";
        bodyStream = bodyStream.pipe(zlib$2.createGzip());
      }
      const req = electron$1.net.request(getRequestOptions(url2));
      for (const [header, value] of Object.entries(headers)) {
        req.setHeader(header, value);
      }
      req.on("response", (res) => {
        res.on("error", reject);
        res.on("data", () => {
        });
        res.on("end", () => {
        });
        const retryAfterHeader = res.headers["retry-after"] ?? null;
        const rateLimitsHeader = res.headers["x-sentry-rate-limits"] ?? null;
        resolve3({
          statusCode: res.statusCode,
          headers: dropUndefinedKeys({
            "retry-after": Array.isArray(retryAfterHeader) ? retryAfterHeader[0] || null : retryAfterHeader,
            "x-sentry-rate-limits": Array.isArray(rateLimitsHeader) ? rateLimitsHeader[0] || null : rateLimitsHeader
          })
        });
      });
      req.on("error", reject);
      bodyStream.pipe(req);
    }));
  };
}
const MILLISECONDS_PER_DAY = 864e5;
function isOutdated(request, maxAgeDays) {
  var _a3;
  const cutOff = Date.now() - MILLISECONDS_PER_DAY * maxAgeDays;
  return (((_a3 = request == null ? void 0 : request.date) == null ? void 0 : _a3.getTime()) || 0) < cutOff;
}
function getSentAtFromEnvelope(envelope) {
  const header = envelope[0];
  if (typeof header.sent_at === "string") {
    return new Date(header.sent_at);
  }
  return void 0;
}
function createOfflineStore(userOptions) {
  function log2(...args) {
    logger$1.log(`[Offline Store]:`, ...args);
  }
  const options = {
    maxAgeDays: userOptions.maxAgeDays || 30,
    maxQueueSize: userOptions.maxQueueSize || 30,
    queuePath: userOptions.queuePath || path$f.join(getSentryCachePath(), "queue")
  };
  const queue = new Store(options.queuePath, "queue-v2", []);
  function removeBody(id) {
    require$$0$1.promises.unlink(path$f.join(options.queuePath, id)).catch(() => {
    });
  }
  function removeStaleRequests(queue2) {
    while (queue2[0] && isOutdated(queue2[0], options.maxAgeDays)) {
      const removed = queue2.shift();
      log2("Removing stale envelope", removed);
      removeBody(removed.id);
    }
  }
  async function insert(env, which, previousDate) {
    log2(`${which}ing envelope into offline storage`);
    const id = uuid4();
    try {
      const data2 = serializeEnvelope(env);
      await require$$0$1.promises.mkdir(options.queuePath, { recursive: true });
      await require$$0$1.promises.writeFile(path$f.join(options.queuePath, id), data2);
    } catch (e) {
      log2("Failed to save", e);
    }
    await queue.update((queue2) => {
      if (which === "push") {
        removeStaleRequests(queue2);
        if (queue2.length >= options.maxQueueSize) {
          removeBody(id);
          return queue2;
        }
      }
      queue2[which]({ id, date: previousDate || getSentAtFromEnvelope(env) || /* @__PURE__ */ new Date() });
      return queue2;
    });
  }
  let lastShiftedDate;
  return {
    push: async (env) => {
      await insert(env, "push");
    },
    unshift: async (env) => {
      await insert(env, "unshift", lastShiftedDate);
    },
    shift: async () => {
      log2("Popping envelope from offline storage");
      let request;
      await queue.update((queue2) => {
        removeStaleRequests(queue2);
        request = queue2.shift();
        return queue2;
      });
      if (request) {
        try {
          const data2 = await require$$0$1.promises.readFile(path$f.join(options.queuePath, request.id));
          removeBody(request.id);
          lastShiftedDate = request.date;
          return parseEnvelope(data2);
        } catch (e) {
          log2("Failed to read", e);
        }
      }
      return void 0;
    }
  };
}
function makeShouldSendTransport(baseTransport) {
  return (options) => {
    const transport = baseTransport(options);
    return {
      ...transport,
      send: async (envelope) => {
        const shouldAttemptSend = options.shouldSend === void 0 || await options.shouldSend(envelope);
        if (shouldAttemptSend) {
          return transport.send(envelope);
        }
        throw new Error("'shouldSend' callback returned false. Skipped sending.");
      }
    };
  };
}
function makeElectronOfflineTransport(baseTransport = makeElectronTransport) {
  return (userOptions) => {
    return makeOfflineTransport(makeShouldSendTransport(baseTransport))({
      flushAtStartup: true,
      createStore: createOfflineStore,
      ...userOptions
    });
  };
}
function eventFromEnvelope(envelope) {
  let event;
  const attachments = [];
  let profile;
  forEachEnvelopeItem(envelope, (item, type) => {
    if (type === "event" || type === "transaction" || type === "feedback") {
      event = Array.isArray(item) ? item[1] : void 0;
    } else if (type === "attachment") {
      const [headers, data2] = item;
      attachments.push({
        filename: headers.filename,
        attachmentType: headers.attachment_type,
        contentType: headers.content_type,
        data: data2
      });
    } else if (type === "profile") {
      profile = item[1];
    }
  });
  return event ? [event, attachments, profile] : void 0;
}
function getRendererName(contents) {
  var _a3, _b2;
  const options = (_a3 = getClient()) == null ? void 0 : _a3.getOptions();
  return (_b2 = options == null ? void 0 : options.getRendererName) == null ? void 0 : _b2.call(options, contents);
}
function sendRendererAnrEvent(contents, blockedMs, frames) {
  sessionAnr();
  const rendererName = getRendererName(contents) || "renderer";
  const event = {
    level: "error",
    exception: {
      values: [
        {
          type: "ApplicationNotResponding",
          value: `Application Not Responding for at least ${blockedMs} ms`,
          stacktrace: { frames },
          mechanism: {
            // This ensures the UI doesn't say 'Crashed in' for the stack trace
            type: "ANR"
          }
        }
      ]
    },
    tags: {
      "event.process": rendererName
    }
  };
  captureEvent(event);
}
function rendererDebugger(contents, pausedStack) {
  contents.debugger.attach("1.3");
  const scripts2 = /* @__PURE__ */ new Map();
  const getModuleFromFilename = createGetModuleFromFilename(electron$1.app.getAppPath());
  contents.debugger.on("message", (_, method, params) => {
    if (method === "Debugger.scriptParsed") {
      const param = params;
      scripts2.set(param.scriptId, param.url);
    } else if (method === "Debugger.paused") {
      const param = params;
      if (param.reason !== "other") {
        return;
      }
      const callFrames = [...param.callFrames];
      contents.debugger.sendCommand("Debugger.resume").then(null, () => {
      });
      const stackFrames = stripSentryFramesAndReverse(callFrames.map((frame) => callFrameToStackFrame(frame, scripts2.get(frame.location.scriptId), getModuleFromFilename)));
      pausedStack(stackFrames);
    }
  });
  contents.debugger.sendCommand("Debugger.enable").catch(() => {
  });
  return () => {
    return contents.debugger.sendCommand("Debugger.pause");
  };
}
let rendererWatchdogTimers;
function createHrTimer() {
  let lastPoll = process.hrtime();
  return {
    getTimeMs: () => {
      const [seconds, nanoSeconds] = process.hrtime(lastPoll);
      return Math.floor(seconds * 1e3 + nanoSeconds / 1e6);
    },
    reset: () => {
      lastPoll = process.hrtime();
    }
  };
}
function createRendererAnrStatusHandler() {
  function log2(message, ...args) {
    logger$1.log(`[Renderer ANR] ${message}`, ...args);
  }
  return (message, contents) => {
    rendererWatchdogTimers = rendererWatchdogTimers || /* @__PURE__ */ new Map();
    let watchdog = rendererWatchdogTimers.get(contents);
    if (watchdog === void 0) {
      log2("Renderer sent first status message", message.config);
      let pauseAndCapture;
      if (message.config.captureStackTrace) {
        log2("Connecting to debugger");
        pauseAndCapture = rendererDebugger(contents, (frames) => {
          log2("Event captured with stack frames");
          sendRendererAnrEvent(contents, message.config.anrThreshold, frames);
        });
      }
      watchdog = watchdogTimer(createHrTimer, 100, message.config.anrThreshold, async () => {
        log2("Watchdog timeout");
        if (pauseAndCapture) {
          log2("Pausing debugger to capture stack trace");
          pauseAndCapture();
        } else {
          log2("Capturing event");
          sendRendererAnrEvent(contents, message.config.anrThreshold);
        }
      });
      contents.once("destroyed", () => {
        rendererWatchdogTimers == null ? void 0 : rendererWatchdogTimers.delete(contents);
      });
      rendererWatchdogTimers.set(contents, watchdog);
    }
    watchdog.poll();
    if (message.status !== "alive") {
      log2("Renderer visibility changed", message.status);
      watchdog.enabled(message.status === "visible");
    }
  };
}
let KNOWN_RENDERERS;
let WINDOW_ID_TO_WEB_CONTENTS;
const SENTRY_CUSTOM_SCHEME = {
  scheme: PROTOCOL_SCHEME,
  privileges: { bypassCSP: true, corsEnabled: true, supportFetchAPI: true, secure: true }
};
function newProtocolRenderer() {
  KNOWN_RENDERERS = KNOWN_RENDERERS || /* @__PURE__ */ new Set();
  WINDOW_ID_TO_WEB_CONTENTS = WINDOW_ID_TO_WEB_CONTENTS || /* @__PURE__ */ new Map();
  for (const wc of electron$1.webContents.getAllWebContents()) {
    const wcId = wc.id;
    if (KNOWN_RENDERERS.has(wcId)) {
      continue;
    }
    if (!wc.isDestroyed()) {
      wc.executeJavaScript("window.__SENTRY_RENDERER_ID__").then((windowId) => {
        if (windowId && KNOWN_RENDERERS && WINDOW_ID_TO_WEB_CONTENTS) {
          KNOWN_RENDERERS.add(wcId);
          WINDOW_ID_TO_WEB_CONTENTS.set(windowId, wcId);
          wc.once("destroyed", () => {
            KNOWN_RENDERERS == null ? void 0 : KNOWN_RENDERERS.delete(wcId);
            WINDOW_ID_TO_WEB_CONTENTS == null ? void 0 : WINDOW_ID_TO_WEB_CONTENTS.delete(windowId);
          });
        }
      }, logger$1.error);
    }
  }
}
function captureEventFromRenderer(options, event, attachments, contents) {
  var _a3, _b2, _c2, _d;
  const process2 = contents ? ((_a3 = options == null ? void 0 : options.getRendererName) == null ? void 0 : _a3.call(options, contents)) || "renderer" : "renderer";
  event.breadcrumbs = event.breadcrumbs || [];
  delete event.environment;
  (_b2 = event.sdk) == null ? true : delete _b2.name;
  (_c2 = event.sdk) == null ? true : delete _c2.version;
  (_d = event.sdk) == null ? true : delete _d.packages;
  captureEvent(mergeEvents(event, { tags: { "event.process": process2 } }), { attachments });
}
function handleEvent(options, jsonEvent, contents) {
  let event;
  try {
    event = JSON.parse(jsonEvent);
  } catch {
    logger$1.warn("sentry-electron received an invalid event message");
    return;
  }
  captureEventFromRenderer(options, event, [], contents);
}
function handleEnvelope(options, env, contents) {
  var _a3, _b2;
  const envelope = parseEnvelope(env);
  const eventAndAttachments = eventFromEnvelope(envelope);
  if (eventAndAttachments) {
    const [event, attachments, profile] = eventAndAttachments;
    if (profile) {
      rendererProfileFromIpc(event, profile);
    }
    captureEventFromRenderer(options, event, attachments, contents);
  } else {
    const normalizedEnvelope = normalizeUrlsInReplayEnvelope(envelope, electron$1.app.getAppPath());
    void ((_b2 = (_a3 = getClient()) == null ? void 0 : _a3.getTransport()) == null ? void 0 : _b2.send(normalizedEnvelope));
  }
}
function handleMetric(metric) {
  const client = getClient();
  if (!client) {
    return;
  }
  const metricsAggregator = metricsDefault.getMetricsAggregatorForClient(client);
  metricsAggregator.add(metric.metricType, metric.name, metric.value, metric.unit, metric.tags, metric.timestamp);
}
function hasKeys(obj) {
  return obj != void 0 && Object.keys(obj).length > 0;
}
function handleScope(options, jsonScope) {
  let sentScope;
  try {
    sentScope = JSON.parse(jsonScope);
  } catch {
    logger$1.warn("sentry-electron received an invalid scope message");
    return;
  }
  const scope2 = getCurrentScope();
  if (hasKeys(sentScope.user)) {
    scope2.setUser(sentScope.user);
  }
  if (hasKeys(sentScope.tags)) {
    scope2.setTags(sentScope.tags);
  }
  if (hasKeys(sentScope.extra)) {
    scope2.setExtras(sentScope.extra);
  }
  for (const attachment of sentScope.attachments || []) {
    scope2.addAttachment(attachment);
  }
  const breadcrumb = sentScope.breadcrumbs.pop();
  if (breadcrumb) {
    scope2.addBreadcrumb(breadcrumb, (options == null ? void 0 : options.maxBreadcrumbs) || 100);
  }
}
function configureProtocol(options) {
  if (electron$1.app.isReady()) {
    throw new SentryError("Sentry SDK should be initialized before the Electron app 'ready' event is fired");
  }
  electron$1.protocol.registerSchemesAsPrivileged([SENTRY_CUSTOM_SCHEME]);
  electron$1.protocol.registerSchemesAsPrivileged = new Proxy(electron$1.protocol.registerSchemesAsPrivileged, {
    apply: (target, __, args) => {
      target([...args[0], SENTRY_CUSTOM_SCHEME]);
    }
  });
  const rendererStatusChanged = createRendererAnrStatusHandler();
  electron$1.app.whenReady().then(() => {
    for (const sesh of options.getSessions()) {
      registerProtocol(sesh.protocol, PROTOCOL_SCHEME, (request) => {
        const getWebContents = () => {
          const webContentsId = request.windowId ? WINDOW_ID_TO_WEB_CONTENTS == null ? void 0 : WINDOW_ID_TO_WEB_CONTENTS.get(request.windowId) : void 0;
          return webContentsId ? electron$1.webContents.fromId(webContentsId) : void 0;
        };
        const data2 = request.body;
        if (request.url.startsWith(`${PROTOCOL_SCHEME}://${IPCChannel.RENDERER_START}`)) {
          newProtocolRenderer();
        } else if (request.url.startsWith(`${PROTOCOL_SCHEME}://${IPCChannel.EVENT}`) && data2) {
          handleEvent(options, data2.toString(), getWebContents());
        } else if (request.url.startsWith(`${PROTOCOL_SCHEME}://${IPCChannel.SCOPE}`) && data2) {
          handleScope(options, data2.toString());
        } else if (request.url.startsWith(`${PROTOCOL_SCHEME}://${IPCChannel.ENVELOPE}`) && data2) {
          handleEnvelope(options, data2, getWebContents());
        } else if (request.url.startsWith(`${PROTOCOL_SCHEME}://${IPCChannel.ADD_METRIC}`) && data2) {
          handleMetric(JSON.parse(data2.toString()));
        } else if (request.url.startsWith(`${PROTOCOL_SCHEME}://${IPCChannel.STATUS}`) && data2) {
          const contents = getWebContents();
          if (contents) {
            const status = JSON.parse(data2.toString()).status;
            rendererStatusChanged(status, contents);
          }
        }
      });
    }
  }).catch((error) => logger$1.error(error));
}
function configureClassic(options) {
  electron$1.ipcMain.on(IPCChannel.RENDERER_START, ({ sender }) => {
    const id = sender.id;
    KNOWN_RENDERERS = KNOWN_RENDERERS || /* @__PURE__ */ new Set();
    if (KNOWN_RENDERERS.has(id)) {
      return;
    }
    if (!sender.isDestroyed()) {
      KNOWN_RENDERERS.add(id);
      sender.once("destroyed", () => {
        KNOWN_RENDERERS == null ? void 0 : KNOWN_RENDERERS.delete(id);
      });
    }
  });
  electron$1.ipcMain.on(IPCChannel.EVENT, ({ sender }, jsonEvent) => handleEvent(options, jsonEvent, sender));
  electron$1.ipcMain.on(IPCChannel.SCOPE, (_, jsonScope) => handleScope(options, jsonScope));
  electron$1.ipcMain.on(IPCChannel.ENVELOPE, ({ sender }, env) => handleEnvelope(options, env, sender));
  const rendererStatusChanged = createRendererAnrStatusHandler();
  electron$1.ipcMain.on(IPCChannel.STATUS, ({ sender }, status) => rendererStatusChanged(status, sender));
  electron$1.ipcMain.on(IPCChannel.ADD_METRIC, (_, metric) => handleMetric(metric));
}
function configureIPC(options) {
  if ((options.ipcMode & IPCMode.Protocol) > 0) {
    configureProtocol(options);
  }
  if ((options.ipcMode & IPCMode.Classic) > 0) {
    configureClassic(options);
  }
}
const defaultStackParser = createStackParser(nodeStackLineParser(createGetModuleFromFilename(electron$1.app.getAppPath())));
function log(message) {
  logger$1.log(`[Utility Process] ${message}`);
}
function configureUtilityProcessIPC() {
  var _a3;
  if (!((_a3 = electron__namespace.utilityProcess) == null ? void 0 : _a3.fork)) {
    return;
  }
  electron__namespace.utilityProcess.fork = new Proxy(electron__namespace.utilityProcess.fork, {
    apply: (target, thisArg, args) => {
      const child = target.apply(thisArg, args);
      function getProcessName() {
        const [, , options] = args;
        return (options == null ? void 0 : options.serviceName) || `pid:${child.pid}`;
      }
      child.on("message", (msg) => {
        if (isMagicMessage(msg)) {
          log(`SDK started in utility process '${getProcessName()}'`);
          const { port1, port2 } = new electron__namespace.MessageChannelMain();
          port2.on("message", (msg2) => {
            if (msg2.data instanceof Uint8Array || typeof msg2.data === "string") {
              handleEnvelopeFromUtility(msg2.data);
            }
          });
          port2.start();
          child.postMessage(getMagicMessage(), [port1]);
        }
      });
      child.on = new Proxy(child.on, {
        apply: (target2, thisArg2, [event, listener]) => {
          if (event === "message") {
            return target2.apply(thisArg2, [
              "message",
              (msg) => {
                if (isMagicMessage(msg)) {
                  return;
                }
                return listener(msg);
              }
            ]);
          }
          return target2.apply(thisArg2, [event, listener]);
        }
      });
      return child;
    }
  });
}
function handleEnvelopeFromUtility(env) {
  var _a3, _b2;
  const envelope = parseEnvelope(env);
  const eventAndAttachments = eventFromEnvelope(envelope);
  if (eventAndAttachments) {
    const [event, attachments] = eventAndAttachments;
    captureEventFromUtility(event, attachments);
  } else {
    void ((_b2 = (_a3 = getClient()) == null ? void 0 : _a3.getTransport()) == null ? void 0 : _b2.send(envelope));
  }
}
function captureEventFromUtility(event, attachments) {
  var _a3, _b2, _c2;
  delete event.environment;
  delete event.release;
  (_a3 = event.sdk) == null ? true : delete _a3.name;
  (_b2 = event.sdk) == null ? true : delete _b2.version;
  (_c2 = event.sdk) == null ? true : delete _c2.packages;
  captureEvent(mergeEvents(event, { tags: { "event.process": "utility" } }), { attachments });
}
function getDefaultIntegrations(options) {
  const integrations = [
    // Electron integrations
    sentryMinidumpIntegration(),
    electronBreadcrumbsIntegration(),
    electronNetIntegration(),
    electronContextIntegration(),
    childProcessIntegration(),
    onUncaughtExceptionIntegration(),
    preloadInjectionIntegration(),
    additionalContextIntegration(),
    screenshotsIntegration(),
    // Node integrations
    inboundFiltersIntegration(),
    functionToStringIntegration(),
    linkedErrorsIntegration(),
    consoleIntegration(),
    nativeNodeFetchIntegration(),
    onUnhandledRejectionIntegration(),
    contextLinesIntegration(),
    localVariablesIntegration(),
    nodeContextIntegration({ cloudResource: false }),
    // We want paths to be normailzed after we've captured context
    normalizePathsIntegration()
  ];
  if (options.autoSessionTracking !== false) {
    integrations.push(mainProcessSessionIntegration());
  }
  if (options.attachScreenshot) {
    integrations.push(screenshotsIntegration());
  }
  if (options.enableRendererProfiling) {
    integrations.push(rendererProfilingIntegration());
  }
  return integrations;
}
function init(userOptions) {
  const optionsWithDefaults = {
    _metadata: { sdk: getSdkInfo() },
    ipcMode: IPCMode.Both,
    release: getDefaultReleaseName(),
    environment: getDefaultEnvironment(),
    defaultIntegrations: getDefaultIntegrations(userOptions),
    transport: makeElectronOfflineTransport(),
    transportOptions: {},
    getSessions: () => [electron$1.session.defaultSession],
    ...userOptions,
    stackParser: stackParserFromStackParserOptions(userOptions.stackParser || defaultStackParser)
  };
  const options = {
    ...optionsWithDefaults,
    integrations: getIntegrationsToSetup(optionsWithDefaults)
  };
  if (options.debug) {
    logger$1.enable();
  }
  removeRedundantIntegrations(options);
  configureIPC(options);
  configureUtilityProcessIPC();
  setOpenTelemetryContextAsyncContextStrategy();
  const scope2 = getCurrentScope();
  scope2.update(options.initialScope);
  const client = new NodeClient(options);
  scope2.setClient(client);
  client.init();
  if (!options.skipOpenTelemetrySetup) {
    initOpenTelemetry(client);
  }
}
const INTEGRATION_OVERRIDES = [
  { userAdded: "ElectronMinidump", toRemove: "SentryMinidump" },
  { userAdded: "BrowserWindowSession", toRemove: "MainProcessSession" }
];
function removeRedundantIntegrations(options) {
  for (const { userAdded, toRemove } of INTEGRATION_OVERRIDES) {
    if (options.integrations.some((i) => i.name === userAdded)) {
      options.integrations = options.integrations.filter((i) => i.name !== toRemove);
    }
  }
}
const NUM_LOG_LINES_CAPTURED = 64;
const SENTRY_PROJECT_ID = "4508007940685824";
const createSentryUrl = (eventId) => `https://comfy-org.sentry.io/projects/${SENTRY_PROJECT_ID}/events/${eventId}/`;
const stripLogMetadata = (line) => (
  // Remove timestamp and log level pattern like [2024-03-14 10:15:30.123] [info]
  line.replace(/^\[\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\.\d{3}]\s+\[\w+]\s+/, "")
);
const getLogTail = (numLines, logFilename) => {
  try {
    const logPath = path$g.join(electron$1.app.getPath("logs"), logFilename);
    if (!fs$9.existsSync(logPath)) return `Log file not found at path: ${logPath}`;
    const content = fs$9.readFileSync(logPath, "utf8");
    return content.split("\n").filter(Boolean).slice(-numLines).map((line) => stripLogMetadata(line)).join("\n");
  } catch (error) {
    log$2.error("Error reading log file:", error);
    return "";
  }
};
function captureSentryException(error, eventName) {
  const settings = useComfySettings();
  const eventId = captureException(error, {
    tags: {
      environment: process.env.NODE_ENV,
      comfyUIVersion: "0.3.50",
      pythonMirror: settings.get("Comfy-Desktop.UV.PythonInstallMirror"),
      pypiMirror: settings.get("Comfy-Desktop.UV.PypiInstallMirror"),
      torchMirror: settings.get("Comfy-Desktop.UV.TorchInstallMirror"),
      eventName
    },
    extra: {
      logs: getLogTail(NUM_LOG_LINES_CAPTURED, LogFile.Main),
      comfyLogs: getLogTail(NUM_LOG_LINES_CAPTURED, LogFile.ComfyUI)
    }
  });
  return createSentryUrl(eventId);
}
class SentryLogging {
  constructor() {
    /** Used to redact the base path in the event payload. */
    __publicField(this, "getBasePath");
  }
  init() {
    init({
      dsn: SENTRY_URL_ENDPOINT,
      autoSessionTracking: false,
      enabled: process.env.SENTRY_ENABLED === "true" || electron$1.app.isPackaged,
      normalizeDepth: 4,
      beforeSend: async (event) => {
        var _a3, _b2, _c2, _d, _e, _f;
        this.filterEvent(event);
        if (useComfySettings().get("Comfy-Desktop.SendStatistics")) {
          return event;
        }
        const errorMessage = ((_c2 = (_b2 = (_a3 = event.exception) == null ? void 0 : _a3.values) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.value) || "Unknown error";
        const errorType = ((_f = (_e = (_d = event.exception) == null ? void 0 : _d.values) == null ? void 0 : _e[0]) == null ? void 0 : _f.type) || "Error";
        const { response } = await electron$1.dialog.showMessageBox({
          title: "Send Crash Report",
          message: `An error occurred: ${errorType}`,
          detail: `${errorMessage}

Would you like to send the crash to the team?`,
          buttons: ["Send Report", "Do not send crash report"],
          type: "error"
        });
        return response === 0 ? event : null;
      },
      integrations: [
        childProcessIntegration({
          breadcrumbs: ["abnormal-exit", "killed", "crashed", "launch-failed", "oom", "integrity-failure"],
          events: ["abnormal-exit", "killed", "crashed", "launch-failed", "oom", "integrity-failure"]
        })
      ]
    });
  }
  async setSentryGpuContext() {
    log$2.debug("Setting up GPU context");
    try {
      const graphicsInfo = await si.graphics();
      const gpuInfo = graphicsInfo.controllers.map((gpu, index2) => ({
        [`gpu_${index2}`]: {
          vendor: gpu.vendor,
          model: gpu.model,
          vram: gpu.vram,
          driver: gpu.driverVersion
        }
      }));
      const allGpuInfo = { ...gpuInfo };
      setContext("gpus", allGpuInfo);
    } catch (error) {
      log$2.error("Error getting GPU info:", error);
    }
  }
  filterEvent(obj) {
    var _a3;
    const basePath = (_a3 = this.getBasePath) == null ? void 0 : _a3.call(this);
    if (!obj || !basePath) return obj;
    if (typeof obj === "string") {
      return obj.replaceAll(basePath, "[basePath]");
    }
    try {
      if (typeof obj === "object") {
        for (const k in obj) {
          try {
            const record = obj;
            record[k] = this.filterEvent(record[k]);
          } catch {
          }
        }
      }
    } catch {
    }
    return obj;
  }
}
const SentryLogging$1 = new SentryLogging();
let instance = null;
const MIXPANEL_TOKEN = "6a7f9f6ae2084b4e7ff7ced98a6b5988";
class MixpanelTelemetry {
  constructor(mixpanelClass) {
    __publicField(this, "hasConsent", false);
    __publicField(this, "distinctId");
    __publicField(this, "storageFile");
    __publicField(this, "queue", []);
    __publicField(this, "mixpanelClient");
    __publicField(this, "cachedGpuInfo", null);
    __publicField(this, "hasGeneratedSuccessfully", false);
    this.mixpanelClient = mixpanelClass.init(MIXPANEL_TOKEN, {
      geolocate: true
    });
    this.storageFile = path$g.join(electron$1.app.getPath("userData"), "telemetry.txt");
    this.distinctId = this.getOrCreateDistinctId(this.storageFile);
    this.queue = [];
    electron$1.ipcMain.on(IPC_CHANNELS.INSTALL_COMFYUI, (_event, installOptions) => {
      if (installOptions.allowMetrics) {
        this.hasConsent = true;
      }
    });
    void this.fetchAndCacheGpuInformation();
  }
  getOrCreateDistinctId(filePath) {
    try {
      if (fs$9.existsSync(filePath)) {
        return fs$9.readFileSync(filePath, "utf8");
      }
      const newId = node_crypto.randomUUID();
      fs$9.writeFileSync(filePath, newId);
      return newId;
    } catch (error) {
      log$2.error("Failed to manage distinct ID:", error);
      return "";
    }
  }
  /**
   * Track an event. If consent is not given, the event is queued for later.
   * @param eventName
   * @param properties
   */
  track(eventName, properties) {
    if (eventName === "execution" && (properties == null ? void 0 : properties["status"]) === "completed") {
      if (this.hasGeneratedSuccessfully) {
        return;
      } else {
        this.hasGeneratedSuccessfully = true;
        this.saveGenerationStatus();
      }
    }
    const defaultProperties = {
      distinct_id: this.distinctId,
      time: Date.now(),
      $os: os$7.platform()
    };
    if (!this.hasConsent) {
      log$2.debug(`Queueing event ${eventName} with properties`, properties);
      this.queue.push({
        eventName,
        properties: {
          ...defaultProperties,
          ...properties
        }
      });
      return;
    }
    this.flush();
    try {
      const enrichedProperties = {
        ...defaultProperties,
        ...properties
      };
      this.mixpanelTrack(eventName, enrichedProperties);
      this.identify();
    } catch (error) {
      log$2.error("Failed to track event:", error);
    }
  }
  /**
   * Empty the queue and send all events to Mixpanel.
   */
  flush() {
    while (this.queue.length > 0) {
      const { eventName, properties } = this.queue.shift();
      this.mixpanelTrack(eventName, properties);
    }
  }
  registerHandlers() {
    electron$1.ipcMain.on(IPC_CHANNELS.TRACK_EVENT, (event, eventName, properties) => {
      this.track(eventName, properties);
    });
    electron$1.ipcMain.on(IPC_CHANNELS.INCREMENT_USER_PROPERTY, (event, propertyName, number) => {
      if (this.hasConsent) {
        if (propertyName.includes("execution") && this.hasGeneratedSuccessfully) {
          return;
        }
        this.mixpanelClient.people.increment(this.distinctId, propertyName, number);
      }
    });
  }
  /**
   * Fetch GPU information and cache it.
   */
  async fetchAndCacheGpuInformation() {
    try {
      const gpuData = await si.graphics();
      this.cachedGpuInfo = gpuData.controllers.map((gpu) => ({
        model: gpu.model,
        vendor: gpu.vendor,
        vram: gpu.vram
      }));
    } catch (error) {
      log$2.error("Failed to get GPU information:", error);
      this.cachedGpuInfo = [];
    }
  }
  loadGenerationCount(config) {
    this.hasGeneratedSuccessfully = config.get("hasGeneratedSuccessfully") ?? false;
  }
  saveGenerationStatus() {
    try {
      useDesktopConfig().set("hasGeneratedSuccessfully", this.hasGeneratedSuccessfully);
    } catch (error) {
      log$2.debug("Failed to save generation status:", error);
    }
  }
  identify() {
    this.mixpanelClient.people.set(this.distinctId, {
      platform: process.platform,
      arch: os$7.arch(),
      gpus: this.cachedGpuInfo || [],
      app_version: electron$1.app.getVersion()
    });
  }
  mixpanelTrack(eventName, properties) {
    if (electron$1.app.isPackaged) {
      log$2.debug(`Tracking ${eventName} with properties`, properties);
      this.mixpanelClient.track(eventName, properties);
    } else {
      log$2.info(`Would have tracked ${eventName} with properties`, properties);
    }
  }
}
function getTelemetry() {
  if (!instance) {
    instance = new MixpanelTelemetry(mixpanel);
  }
  return instance;
}
function trackEvent(eventName) {
  return (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args) {
      this.telemetry.track(`${eventName}_start`);
      try {
        await originalMethod.apply(this, args);
        this.telemetry.track(`${eventName}_end`);
      } catch (error) {
        const errorEventName = `${eventName}_error`;
        const sentryUrl = captureSentryException(error, errorEventName);
        this.telemetry.track(errorEventName, {
          error_message: error == null ? void 0 : error.message,
          error_name: error == null ? void 0 : error.name,
          sentry_url: sentryUrl
        });
        throw error;
      }
    };
    return descriptor;
  };
}
async function promptMetricsConsent(store, appWindow) {
  const consent = useComfySettings().get("Comfy-Desktop.SendStatistics") ?? false;
  const consentedOn = store.get("versionConsentedMetrics");
  const isOutdated2 = !consentedOn || compareVersions(consentedOn, "0.4.12") < 0;
  if (!isOutdated2) return consent;
  store.set("versionConsentedMetrics", "0.4.62");
  if (consent) {
    const consentPromise = new Promise((resolve3) => {
      electron$1.ipcMain.handleOnce(IPC_CHANNELS.SET_METRICS_CONSENT, (_event, consent2) => resolve3(consent2));
    });
    await appWindow.loadPage("metrics-consent");
    const newConsent = await consentPromise;
    if (newConsent !== consent) {
      useComfySettings().set("Comfy-Desktop.SendStatistics", newConsent);
      await useComfySettings().saveSettings();
    }
    return newConsent;
  }
  return consent;
}
function getDefaultShell() {
  switch (os$7.platform()) {
    case "win32":
      return `${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
    case "darwin":
      return "zsh";
    default:
      return "bash";
  }
}
function getDefaultShellArgs() {
  switch (os$7.platform()) {
    case "darwin":
      return ["-df"];
    case "linux":
      return ["--noprofile", "--norc"];
    default:
      return [];
  }
}
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$4(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$4(target, key, result);
  return result;
};
function getPipInstallArgs(config) {
  const installArgs = ["pip", "install"];
  if (config.upgradePackages) {
    installArgs.push("-U");
  }
  if (config.prerelease) {
    installArgs.push("--pre");
  }
  if (config.requirementsFile) {
    installArgs.push("-r", config.requirementsFile);
  } else {
    installArgs.push(...config.packages);
  }
  if (config.indexUrl) {
    installArgs.push("--index-url", config.indexUrl);
  }
  if (config.extraIndexUrl) {
    installArgs.push("--extra-index-url", config.extraIndexUrl);
  }
  if (config.indexStrategy) {
    installArgs.push("--index-strategy", config.indexStrategy);
  }
  return installArgs;
}
function getDefaultTorchMirror(device) {
  log$2.debug("Falling back to default torch mirror");
  switch (device) {
    case "mps":
      return TorchMirrorUrl.NightlyCpu;
    case "nvidia":
      return TorchMirrorUrl.Cuda;
    default:
      return TorchMirrorUrl.Default;
  }
}
function fixDeviceMirrorMismatch(device, mirror) {
  if (mirror === TorchMirrorUrl.Default) {
    if (device === "nvidia") return TorchMirrorUrl.Cuda;
    else if (device === "mps") return TorchMirrorUrl.NightlyCpu;
  }
  return mirror;
}
class VirtualEnvironment {
  constructor(basePath, {
    telemetry: telemetry2,
    selectedDevice,
    pythonVersion,
    pythonMirror,
    pypiMirror,
    torchMirror
  }) {
    __privateAdd(this, _VirtualEnvironment_instances);
    __publicField(this, "basePath");
    __publicField(this, "venvPath");
    __publicField(this, "pythonVersion");
    __publicField(this, "uvPath");
    __publicField(this, "requirementsCompiledPath");
    __publicField(this, "cacheDir");
    __publicField(this, "pythonInterpreterPath");
    __publicField(this, "comfyUIRequirementsPath");
    __publicField(this, "comfyUIManagerRequirementsPath");
    __publicField(this, "selectedDevice");
    __publicField(this, "telemetry");
    __publicField(this, "pythonMirror");
    __publicField(this, "pypiMirror");
    __publicField(this, "torchMirror");
    __publicField(this, "uvPty");
    this.basePath = basePath;
    this.telemetry = telemetry2;
    this.pythonVersion = pythonVersion ?? "3.12";
    this.selectedDevice = selectedDevice ?? "cpu";
    this.pythonMirror = pythonMirror;
    this.pypiMirror = pypiMirror;
    this.torchMirror = fixDeviceMirrorMismatch(selectedDevice, torchMirror);
    this.venvPath = path$g.join(basePath, ".venv");
    const resourcesPath = electron$1.app.isPackaged ? path$g.join(process.resourcesPath) : path$g.join(electron$1.app.getAppPath(), "assets");
    this.comfyUIRequirementsPath = path$g.join(resourcesPath, "ComfyUI", "requirements.txt");
    this.comfyUIManagerRequirementsPath = path$g.join(
      resourcesPath,
      "ComfyUI",
      "custom_nodes",
      "ComfyUI-Manager",
      "requirements.txt"
    );
    this.cacheDir = path$g.join(basePath, "uv-cache");
    const filename = `${compiledRequirements()}.compiled`;
    this.requirementsCompiledPath = path$g.join(resourcesPath, "requirements", filename);
    this.pythonInterpreterPath = process.platform === "win32" ? path$g.join(this.venvPath, "Scripts", "python.exe") : path$g.join(this.venvPath, "bin", "python");
    const uvFolder = electron$1.app.isPackaged ? path$g.join(process.resourcesPath, "uv") : path$g.join(electron$1.app.getAppPath(), "assets", "uv");
    switch (process.platform) {
      case "win32":
        this.uvPath = path$g.join(uvFolder, "win", "uv.exe");
        break;
      case "linux":
        this.uvPath = path$g.join(uvFolder, "linux", "uv");
        break;
      case "darwin":
        this.uvPath = path$g.join(uvFolder, "macos", "uv");
        break;
      default:
        throw new Error(`Unsupported platform: ${process.platform}`);
    }
    log$2.info(`Using uv at ${this.uvPath}`);
    function compiledRequirements() {
      if (process.platform === "darwin") return "macos";
      if (process.platform === "win32") {
        return selectedDevice === "cpu" ? "windows_cpu" : "windows_nvidia";
      }
    }
  }
  /** @todo Refactor to `using` */
  get uvPtyInstance() {
    const env = {
      ...process.env,
      VIRTUAL_ENV: this.venvPath,
      // Empty strings are not valid values for these env vars,
      // dropping them here to avoid passing them to uv.
      ...this.pythonMirror ? { UV_PYTHON_INSTALL_MIRROR: this.pythonMirror } : {}
    };
    if (!this.uvPty) {
      const debugging = process.env.NODE_DEBUG === "true";
      const shell = getDefaultShell();
      this.uvPty = pty.spawn(shell, getDefaultShellArgs(), {
        useConpty: !debugging,
        handleFlowControl: false,
        conptyInheritCursor: false,
        name: "xterm",
        cwd: this.basePath,
        env
      });
    }
    return this.uvPty;
  }
  async create(callbacks) {
    var _a3;
    try {
      await this.createEnvironment(callbacks);
    } finally {
      const pid = (_a3 = this.uvPty) == null ? void 0 : _a3.pid;
      if (pid) {
        process.kill(pid);
        this.uvPty = void 0;
      }
    }
  }
  /**
   * Activates the virtual environment.
   */
  activateEnvironmentCommand() {
    if (process.platform === "darwin" || process.platform === "linux") {
      return `source "${this.venvPath}/bin/activate"${os$7.EOL}`;
    }
    if (process.platform === "win32") {
      return `Set-ExecutionPolicy Unrestricted -Scope Process -Force${os$7.EOL}& "${this.venvPath}\\Scripts\\activate.ps1"${os$7.EOL}Set-ExecutionPolicy Default -Scope Process -Force${os$7.EOL}`;
    }
    throw new Error(`Unsupported platform: ${process.platform}`);
  }
  async createEnvironment(callbacks) {
    this.telemetry.track(`install_flow:virtual_environment_create_start`, {
      python_version: this.pythonVersion,
      device: this.selectedDevice
    });
    if (this.selectedDevice === "unsupported") {
      log$2.info("User elected to manually configure their environment.  Skipping python configuration.");
      this.telemetry.track(`install_flow:virtual_environment_create_end`, {
        reason: "unsupported_device"
      });
      return;
    }
    try {
      if (await this.exists()) {
        this.telemetry.track(`install_flow:virtual_environment_create_end`, {
          reason: "already_exists"
        });
        log$2.info("Virtual environment already exists at", this.venvPath);
        return;
      }
      await this.createVenvWithPython(callbacks);
      await this.ensurePip(callbacks);
      await this.installRequirements(callbacks);
      this.telemetry.track("install_flow:virtual_environment_create_end", {
        reason: "success"
      });
      log$2.info("Successfully created virtual environment at", this.venvPath);
    } catch (error) {
      const errorEventName = "install_flow:virtual_environment_create_error";
      const sentryUrl = captureSentryException(
        error instanceof Error ? error : new Error(String(error)),
        errorEventName
      );
      this.telemetry.track(errorEventName, {
        error_name: error instanceof Error ? error.name : "UnknownError",
        error_type: error instanceof Error ? error.constructor.name : typeof error,
        error_message: error instanceof Error ? error.message : "Unknown error occurred",
        sentry_url: sentryUrl
      });
      log$2.error("Error creating virtual environment:", error);
      throw error;
    }
  }
  async createVenvWithPython(callbacks) {
    log$2.info(`Creating virtual environment at ${this.venvPath} with python ${this.pythonVersion}`);
    const args = ["venv", "--python", this.pythonVersion, "--python-preference", "only-managed"];
    const { exitCode } = await this.runUvCommandAsync(args, callbacks);
    if (exitCode !== 0) {
      throw new Error(`Failed to create virtual environment: exit code ${exitCode}`);
    }
  }
  async ensurePip(callbacks) {
    const { exitCode } = await this.runPythonCommandAsync(["-m", "ensurepip", "--upgrade"], callbacks);
    if (exitCode !== 0) {
      throw new Error(`Failed to upgrade pip: exit code ${exitCode}`);
    }
  }
  async installRequirements(callbacks) {
    if (process.platform === "darwin") {
      return this.manualInstall(callbacks);
    }
    const installCmd = getPipInstallArgs({
      requirementsFile: this.requirementsCompiledPath,
      indexStrategy: "unsafe-best-match",
      packages: [],
      indexUrl: this.pypiMirror
    });
    const { exitCode } = await this.runUvCommandAsync(installCmd, callbacks);
    if (exitCode !== 0) {
      log$2.error(
        `Failed to install requirements.compiled: exit code ${exitCode}. Falling back to installing requirements.txt`
      );
      return this.manualInstall(callbacks);
    }
  }
  /**
   * Runs a python command using the virtual environment's python interpreter.
   * @param args
   * @returns
   */
  runPythonCommand(args, callbacks) {
    const pythonInterpreterPath = process.platform === "win32" ? path$g.join(this.venvPath, "Scripts", "python.exe") : path$g.join(this.venvPath, "bin", "python");
    return this.runCommand(
      pythonInterpreterPath,
      args,
      {
        PYTHONIOENCODING: "utf8"
      },
      callbacks
    );
  }
  /**
   * Runs a python command using the virtual environment's python interpreter and returns a promise with the exit code.
   * @param args
   * @returns
   */
  async runPythonCommandAsync(args, callbacks, env, cwd) {
    return this.runCommandAsync(
      this.pythonInterpreterPath,
      args,
      {
        ...env,
        PYTHONIOENCODING: "utf8"
      },
      callbacks,
      cwd
    );
  }
  /**
   * Runs a uv command with the virtual environment set to this instance's venv and returns a promise with the exit code.
   * @param args
   * @returns
   */
  async runUvCommandAsync(args, callbacks) {
    const uvCommand = os$7.platform() === "win32" ? `& "${this.uvPath}"` : this.uvPath;
    const command = `${uvCommand} ${args.map((a) => `"${a}"`).join(" ")}`;
    log$2.info("Running uv command:", command);
    return this.runPtyCommandAsync(command, callbacks == null ? void 0 : callbacks.onStdout);
  }
  async runPtyCommandAsync(command, onData) {
    function hasExited(data2, endMarker) {
      const lines = data2.replaceAll(/\u001B\[[\d;?]*[A-Za-z]/g, "").split(/(\r\n|\n)/);
      for (const line of lines) {
        if (line.startsWith(endMarker)) {
          return line.substring(endMarker.length).trim();
        }
      }
    }
    function parseExitCode(exit) {
      if (exit === "True") return 0;
      if (exit === "False") return -999;
      const exitCode = Number.parseInt(exit);
      if (Number.isNaN(exitCode)) {
        console.warn("Unable to parse exit code:", exit);
        return -998;
      }
      return exitCode;
    }
    const id = Date.now();
    return new Promise((res) => {
      const endMarker = `_-end-${id}:`;
      const input = `${command}\recho "${endMarker}$?"`;
      const dataReader = this.uvPtyInstance.onData((data2) => {
        onData == null ? void 0 : onData(data2);
        const exit = hasExited(data2, endMarker);
        if (!exit) return;
        dataReader.dispose();
        res({ exitCode: parseExitCode(exit) });
      });
      this.uvPtyInstance.write(`${input}\r`);
    });
  }
  runCommand(command, args, env, callbacks, cwd = this.basePath) {
    log$2.info(`Running command: ${command} ${args.join(" ")} in ${cwd}`);
    const childProcess2 = node_child_process.spawn(command, args, {
      cwd,
      env: {
        ...process.env,
        ...env
      }
    });
    if (callbacks) {
      childProcess2.stdout.on("data", (data2) => {
        var _a3;
        console.log(data2.toString());
        (_a3 = callbacks.onStdout) == null ? void 0 : _a3.call(callbacks, data2.toString());
      });
      childProcess2.stderr.on("data", (data2) => {
        var _a3;
        console.log(data2.toString());
        (_a3 = callbacks.onStderr) == null ? void 0 : _a3.call(callbacks, data2.toString());
      });
    }
    return childProcess2;
  }
  async runCommandAsync(command, args, env, callbacks, cwd) {
    return new Promise((resolve3, reject) => {
      const childProcess2 = this.runCommand(command, args, env, callbacks, cwd);
      childProcess2.on("close", (code, signal) => {
        resolve3({ exitCode: code, signal });
      });
      childProcess2.on("error", (error) => {
        reject(error);
      });
    });
  }
  async manualInstall(callbacks) {
    await this.installPytorch(callbacks);
    await this.installComfyUIRequirements(callbacks);
    await this.installComfyUIManagerRequirements(callbacks);
  }
  async installPytorch(callbacks) {
    const torchMirror = this.torchMirror || getDefaultTorchMirror(this.selectedDevice);
    const config = {
      packages: ["torch", "torchvision", "torchaudio"],
      indexUrl: torchMirror,
      prerelease: torchMirror.includes("nightly")
    };
    const installArgs = getPipInstallArgs(config);
    log$2.info("Installing PyTorch with config:", config);
    const { exitCode } = await this.runUvCommandAsync(installArgs, callbacks);
    if (exitCode !== 0) {
      throw new Error(`Failed to install PyTorch: exit code ${exitCode}`);
    }
  }
  async installComfyUIRequirements(callbacks) {
    log$2.info(`Installing ComfyUI requirements from ${this.comfyUIRequirementsPath}`);
    const installCmd = getPipInstallArgs({
      requirementsFile: this.comfyUIRequirementsPath,
      packages: [],
      indexUrl: this.pypiMirror
    });
    const { exitCode } = await this.runUvCommandAsync(installCmd, callbacks);
    if (exitCode !== 0) {
      throw new Error(`Failed to install ComfyUI requirements.txt: exit code ${exitCode}`);
    }
  }
  async installComfyUIManagerRequirements(callbacks) {
    log$2.info(`Installing ComfyUIManager requirements from ${this.comfyUIManagerRequirementsPath}`);
    const installCmd = getPipInstallArgs({
      requirementsFile: this.comfyUIManagerRequirementsPath,
      packages: [],
      indexUrl: this.pypiMirror
    });
    const { exitCode } = await this.runUvCommandAsync(installCmd, callbacks);
    if (exitCode !== 0) {
      throw new Error(`Failed to install ComfyUI-Manager requirements.txt: exit code ${exitCode}`);
    }
  }
  async exists() {
    return await pathAccessible(this.venvPath);
  }
  /**
   * Checks if the virtual environment has all the required packages of ComfyUI core.
   *
   * Parses the text output of `uv pip install --dry-run -r requirements.txt`.
   * @returns `'OK'` if pip install does not detect any missing packages,
   * `'manager-upgrade'` if `uv` and `toml` are missing,
   * or `'error'` when any other combination of packages are missing.
   */
  async hasRequirements() {
    const checkRequirements = async (requirementsPath) => {
      const args = ["pip", "install", "--dry-run", "-r", requirementsPath];
      log$2.info(`Running direct process command: ${args.join(" ")}`);
      let output = "";
      const callbacks = {
        onStdout: (data2) => output += data2.toString(),
        onStderr: (data2) => output += data2.toString()
      };
      const result = await this.runCommandAsync(this.uvPath, args, { VIRTUAL_ENV: this.venvPath }, callbacks);
      if (result.exitCode !== 0)
        throw new Error(`Failed to get packages: Exit code ${result.exitCode}, signal ${result.signal}`);
      if (!output) throw new Error("Failed to get packages: uv output was empty");
      return output;
    };
    const hasAllPackages = (output) => {
      const venvOk = output.search(/\bWould make no changes\s+$/) !== -1;
      if (!venvOk) log$2.warn(output);
      return venvOk;
    };
    const isManagerUpgrade = (output) => {
      const anyCombination = /\bWould install [1-3] packages?(\s+\+ (toml|uv|chardet)==[\d.]+){1,3}\s*$/;
      return anyCombination.test(output);
    };
    const isCoreUpgrade = (output) => {
      const lines = output.split("\n");
      let adds = 0;
      for (const line of lines) {
        if (line.search(
          /^\s*- (?!aiohttp|av|yarl|comfyui-workflow-templates|comfyui-embedded-docs|pydantic|pydantic-core|pydantic-settings|annotated-types|typing-inspection|alembic|sqlalchemy|greenlet|mako|python-dotenv).*==/
        ) !== -1)
          return false;
        if (line.search(/^\s*\+ /) !== -1) {
          if (line.search(
            /^\s*\+ (aiohttp|av|yarl|comfyui-workflow-templates|comfyui-embedded-docs|pydantic|pydantic-core|pydantic-settings|annotated-types|typing-inspection|alembic|sqlalchemy|greenlet|mako|python-dotenv)==/
          ) === -1)
            return false;
          adds++;
        }
      }
      return adds > 0;
    };
    const coreOutput = await checkRequirements(this.comfyUIRequirementsPath);
    const managerOutput = await checkRequirements(this.comfyUIManagerRequirementsPath);
    const coreOk = hasAllPackages(coreOutput);
    const managerOk = hasAllPackages(managerOutput);
    const upgradeCore = !coreOk && isCoreUpgrade(coreOutput);
    const upgradeManager = !managerOk && isManagerUpgrade(managerOutput);
    if (managerOk && upgradeCore || coreOk && upgradeManager || upgradeCore && upgradeManager) {
      log$2.info("Package update of known packages required. Core:", upgradeCore, "Manager:", upgradeManager);
      return "package-upgrade";
    }
    return coreOk && managerOk ? "OK" : "error";
  }
  async clearUvCache(onData) {
    const callbacks = { onStdout: onData };
    const args = ["cache", "clean"];
    const { exitCode } = await this.runUvCommandAsync(args, callbacks);
    if (exitCode !== 0) log$2.error("Failed to clear uv cache: exit code", exitCode);
    return exitCode === 0;
  }
  async removeVenvDirectory() {
    return await __privateMethod(this, _VirtualEnvironment_instances, rmdir_fn).call(this, this.venvPath, ".venv directory");
  }
  /**
   * Reinstalls the required packages for ComfyUI core.
   */
  async reinstallRequirements(onData) {
    const callbacks = { onStdout: onData };
    try {
      await __privateMethod(this, _VirtualEnvironment_instances, using_fn).call(this, () => this.manualInstall(callbacks));
    } catch (error) {
      log$2.error("Failed to reinstall requirements:", error);
      const created = await this.createVenv(onData);
      if (!created) return false;
      const pipEnsured = await this.upgradePip(callbacks);
      if (!pipEnsured) return false;
      await __privateMethod(this, _VirtualEnvironment_instances, using_fn).call(this, () => this.manualInstall(callbacks));
    }
    return true;
  }
  /**
   * Upgrades pip in the virtual environment.
   * @returns `true` if the virtual environment was created successfully, otherwise `false`
   */
  async upgradePip(callbacks) {
    try {
      await __privateMethod(this, _VirtualEnvironment_instances, using_fn).call(this, () => this.ensurePip(callbacks));
      return true;
    } catch (error) {
      log$2.error("Failed to upgrade pip:", error);
      return false;
    }
  }
  /**
   * Create virtual environment using uv
   * @returns `true` if the virtual environment was created successfully, otherwise `false`
   */
  async createVenv(onData) {
    try {
      const callbacks = { onStdout: onData };
      await __privateMethod(this, _VirtualEnvironment_instances, using_fn).call(this, () => this.createVenvWithPython(callbacks));
      return true;
    } catch (error) {
      log$2.error("Failed to create virtual environment:", error);
      return false;
    }
  }
}
_VirtualEnvironment_instances = new WeakSet();
rmdir_fn = async function(dir, logName) {
  if (await pathAccessible(dir)) {
    log$2.info(`Removing ${logName} [${dir}]`);
    try {
      await fsPromises.rm(dir, { recursive: true });
    } catch (error) {
      log$2.error(`Error removing ${logName}: ${error}`);
      return false;
    }
  } else {
    log$2.warn(`Attempted to remove ${logName}, but directory does not exist [${dir}]`);
  }
  return true;
};
using_fn = async function(command) {
  var _a3;
  try {
    return await command();
  } finally {
    const pid = (_a3 = this.uvPty) == null ? void 0 : _a3.pid;
    if (pid) {
      process.kill(pid);
      this.uvPty = void 0;
    }
  }
};
__decorateClass$4([
  trackEvent("install_flow:virtual_environment_create_python")
], VirtualEnvironment.prototype, "createVenvWithPython");
__decorateClass$4([
  trackEvent("install_flow:virtual_environment_ensurepip")
], VirtualEnvironment.prototype, "ensurePip");
__decorateClass$4([
  trackEvent("install_flow:virtual_environment_install_requirements")
], VirtualEnvironment.prototype, "installRequirements");
class ComfyInstallation {
  constructor(state, basePath, telemetry2) {
    __publicField(this, "_basePath");
    __publicField(this, "_virtualEnvironment");
    /** Installation issues, such as missing base path, no venv.  Populated by {@link validate}. */
    __publicField(this, "validation", {
      inProgress: false,
      installState: "started"
    });
    /**
     * Called during/after each step of validation
     * @param data The data to send to the renderer
     */
    __publicField(this, "onUpdate");
    this.state = state;
    this.telemetry = telemetry2;
    this._basePath = basePath;
    this._virtualEnvironment = this.createVirtualEnvironment(basePath);
  }
  get basePath() {
    return this._basePath;
  }
  get virtualEnvironment() {
    return this._virtualEnvironment;
  }
  get hasIssues() {
    return Object.values(this.validation).includes("error");
  }
  /** Returns `true` if {@link state} is 'installed' and there are no issues, otherwise `false`. */
  get isValid() {
    return this.state === "installed" && !this.hasIssues;
  }
  /** `true` if Manager needs toml and uv to be installed, otherwise `false`. */
  get needsRequirementsUpdate() {
    return this.validation.upgradePackages === "warning";
  }
  createVirtualEnvironment(basePath) {
    return new VirtualEnvironment(basePath, {
      telemetry: this.telemetry,
      selectedDevice: useDesktopConfig().get("selectedDevice"),
      pythonMirror: useComfySettings().get("Comfy-Desktop.UV.PythonInstallMirror"),
      pypiMirror: useComfySettings().get("Comfy-Desktop.UV.PypiInstallMirror"),
      torchMirror: useComfySettings().get("Comfy-Desktop.UV.TorchInstallMirror")
    });
  }
  /**
   * Static factory method. Creates a ComfyInstallation object if previously saved config can be read.
   * @returns A ComfyInstallation (not validated) object if config is saved, otherwise `undefined`.
   * @throws If YAML config is unreadable due to access restrictions
   */
  static async fromConfig() {
    const config = useDesktopConfig();
    const state = config.get("installState");
    const basePath = config.get("basePath");
    if (state && basePath) {
      await ComfySettings.load(basePath);
      return new ComfyInstallation(state, basePath, getTelemetry());
    }
  }
  /**
   * Validate the installation and add any results to {@link issues}.
   * @returns The validated installation state, along with a list of any issues detected.
   * @throws When the YAML file is present but not readable (access denied, FS error, etc).
   */
  async validate() {
    var _a3, _b2, _c2, _d, _e, _f, _g, _h, _i, _j;
    log$2.info(`Validating installation. Recorded state: [${this.state}]`);
    const validation = {
      inProgress: true,
      installState: this.state
    };
    this.validation = validation;
    (_a3 = this.onUpdate) == null ? void 0 : _a3.call(this, validation);
    if (!validation.installState && ComfyServerConfig.exists()) {
      log$2.info("Found extra_models_config.yaml but no recorded state - assuming upgrade from <= 0.3.18");
      validation.installState = "upgraded";
      (_b2 = this.onUpdate) == null ? void 0 : _b2.call(this, validation);
    }
    const basePath = useDesktopConfig().get("basePath");
    if (basePath && await pathAccessible(basePath)) {
      await this.updateBasePathAndVenv(basePath);
      validation.basePath = "OK";
      (_c2 = this.onUpdate) == null ? void 0 : _c2.call(this, validation);
      const venv = this.virtualEnvironment;
      if (await venv.exists()) {
        validation.venvDirectory = "OK";
        (_d = this.onUpdate) == null ? void 0 : _d.call(this, validation);
        validation.pythonInterpreter = await canExecute(venv.pythonInterpreterPath) ? "OK" : "error";
        if (validation.pythonInterpreter !== "OK") log$2.warn("Python interpreter is missing or not executable.");
        (_e = this.onUpdate) == null ? void 0 : _e.call(this, validation);
        if (await canExecute(venv.uvPath)) {
          validation.uv = "OK";
          (_f = this.onUpdate) == null ? void 0 : _f.call(this, validation);
          try {
            const result = await venv.hasRequirements();
            if (result === "package-upgrade") {
              validation.pythonPackages = "OK";
              validation.upgradePackages = "warning";
            } else {
              validation.pythonPackages = result;
              if (result !== "OK") log$2.error("Virtual environment is incomplete.");
            }
          } catch (error) {
            log$2.error("Failed to read venv packages.", error);
            validation.pythonPackages = "error";
          }
        } else {
          log$2.warn("uv is missing or not executable.");
          validation.uv = "error";
        }
      } else {
        log$2.warn("Virtual environment is missing.");
        validation.venvDirectory = "error";
      }
    } else {
      log$2.error('"base_path" is inaccessible or undefined.');
      validation.basePath = "error";
    }
    (_g = this.onUpdate) == null ? void 0 : _g.call(this, validation);
    validation.git = await canExecuteShellCommand("git --help") ? "OK" : "error";
    if (validation.git !== "OK") log$2.warn("git not found in path.");
    (_h = this.onUpdate) == null ? void 0 : _h.call(this, validation);
    if (process.platform === "win32") {
      const vcDllPath = `${process.env.SYSTEMROOT}\\System32\\vcruntime140.dll`;
      validation.vcRedist = await pathAccessible(vcDllPath) ? "OK" : "error";
      if (validation.vcRedist !== "OK") log$2.warn(`Visual C++ Redistributable was not found [${vcDllPath}]`);
    } else {
      validation.vcRedist = "skipped";
    }
    (_i = this.onUpdate) == null ? void 0 : _i.call(this, validation);
    validation.inProgress = false;
    log$2.info(`Validation result: isValid:${this.isValid}, state:${validation.installState}`, validation);
    (_j = this.onUpdate) == null ? void 0 : _j.call(this, validation);
    return validation.installState;
  }
  /**
   * Migrates the config file to the latest format, after an upgrade of the desktop app executables.
   *
   * Called during app startup, this function ensures that config is in the expected state.
   */
  upgradeConfig() {
    log$2.verbose(`Upgrading config to latest format.  Current state: [${this.state}]`);
    if (this.validation.basePath !== "error") {
      useDesktopConfig().set("basePath", this.basePath);
    } else {
      log$2.warn("Skipping save of basePath.");
    }
    this.setState("installed");
  }
  /**
   * Changes the installation state and persists it to disk.
   * @param state The new installation state to set.
   */
  setState(state) {
    this.state = state;
    useDesktopConfig().set("installState", state);
  }
  /**
   * Updates the base path and recreates the virtual environment (object).
   * @param basePath The new base path to set.
   */
  async updateBasePathAndVenv(basePath) {
    if (this._basePath === basePath) return;
    this._basePath = basePath;
    this._virtualEnvironment = this.createVirtualEnvironment(basePath);
    useDesktopConfig().set("basePath", basePath);
    await ComfySettings.load(basePath);
  }
  /**
   * Removes the config files. Clean up is not yet impl.
   * @todo Allow normal removal of the app and its effects.
   */
  async uninstall() {
    await fsPromises.rm(ComfyServerConfig.configPath);
    await useDesktopConfig().permanentlyDeleteConfigFile();
  }
}
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$3(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$3(target, key, result);
  return result;
};
class CmCli {
  constructor(virtualEnvironment, telemetry2) {
    __publicField(this, "cliPath");
    this.virtualEnvironment = virtualEnvironment;
    this.telemetry = telemetry2;
    this.cliPath = path$g.join(getAppResourcesPath(), "ComfyUI", "custom_nodes", "ComfyUI-Manager", "cm-cli.py");
  }
  async runCommandAsync(args, callbacks, env = {}, checkExit = true, cwd) {
    let output = "";
    let error = "";
    const ENV = {
      COMFYUI_PATH: this.virtualEnvironment.basePath,
      ...env
    };
    const { exitCode } = await this.virtualEnvironment.runPythonCommandAsync(
      [this.cliPath, ...args],
      {
        onStdout: (message) => {
          var _a3;
          output += message;
          (_a3 = callbacks == null ? void 0 : callbacks.onStdout) == null ? void 0 : _a3.call(callbacks, message);
        },
        onStderr: (message) => {
          var _a3;
          console.warn("[warn]", message);
          error += message;
          (_a3 = callbacks == null ? void 0 : callbacks.onStderr) == null ? void 0 : _a3.call(callbacks, message);
        }
      },
      ENV,
      cwd
    );
    if (checkExit && exitCode !== 0) {
      throw new Error(`Error calling cm-cli: 
Exit code: ${exitCode}
Output:${output}

Error:${error}`);
    }
    return output;
  }
  async restoreCustomNodes(fromComfyDir, callbacks) {
    const tmpFile = tmp.fileSync({ postfix: ".json" });
    try {
      log$2.debug("Using temp file:", tmpFile.name);
      await this.saveSnapshot(fromComfyDir, tmpFile.name, callbacks);
      await this.restoreSnapshot(tmpFile.name, path$g.join(this.virtualEnvironment.basePath, "custom_nodes"), callbacks);
      const managerPath = path$g.join(this.virtualEnvironment.basePath, "custom_nodes", "ComfyUI-Manager");
      if (await pathAccessible(managerPath)) {
        await fsPromises.rm(managerPath, { recursive: true, force: true });
        log$2.info("Removed extra ComfyUI-Manager directory:", managerPath);
      }
    } finally {
      tmpFile == null ? void 0 : tmpFile.removeCallback();
    }
  }
  async saveSnapshot(fromComfyDir, outFile, callbacks) {
    const output = await this.runCommandAsync(
      ["save-snapshot", "--output", outFile, "--no-full-snapshot"],
      callbacks,
      {
        COMFYUI_PATH: fromComfyDir,
        PYTHONPATH: fromComfyDir
      },
      true,
      fromComfyDir
    );
    log$2.info(output);
  }
  async restoreSnapshot(snapshotFile, toComfyDir, callbacks) {
    log$2.info("Restoring snapshot", snapshotFile);
    const output = await this.runCommandAsync(
      ["restore-snapshot", snapshotFile, "--restore-to", toComfyDir],
      callbacks,
      {
        COMFYUI_PATH: path$g.join(getAppResourcesPath(), "ComfyUI")
      }
    );
    log$2.info(output);
  }
}
__decorateClass$3([
  trackEvent("migrate_flow:migrate_custom_nodes")
], CmCli.prototype, "restoreCustomNodes");
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$2(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$2(target, key, result);
  return result;
};
class InstallWizard {
  constructor(installOptions, telemetry2) {
    __publicField(this, "migrationItemIds", /* @__PURE__ */ new Set());
    this.installOptions = installOptions;
    this.telemetry = telemetry2;
    this.migrationItemIds = new Set(installOptions.migrationItemIds ?? []);
  }
  get migrationSource() {
    return this.installOptions.migrationSourcePath;
  }
  get basePath() {
    return this.installOptions.installPath;
  }
  async install() {
    ComfyConfigManager.createComfyDirectories(this.basePath);
    this.initializeUserFiles();
    await this.initializeSettings();
    await this.initializeModelPaths();
  }
  /**
   * Copy user files from migration source to the new ComfyUI folder.
   */
  initializeUserFiles() {
    const shouldMigrateUserFiles = !!this.migrationSource && this.migrationItemIds.has("user_files");
    if (!shouldMigrateUserFiles) return;
    this.telemetry.track("migrate_flow:migrate_user_files");
    const srcUserFilesDir = path$g.join(this.migrationSource, "user");
    const destUserFilesDir = path$g.join(this.basePath, "user");
    if (path$g.resolve(srcUserFilesDir) !== path$g.resolve(destUserFilesDir)) {
      fs$9.cpSync(srcUserFilesDir, destUserFilesDir, { recursive: true });
    } else {
      log$2.warn(`Skipping user files migration: source and destination are the same (${srcUserFilesDir})`);
    }
  }
  /**
   * Setup comfy.settings.json file
   */
  async initializeSettings() {
    const existingSettings = await ComfySettings.load(this.basePath);
    const settings = {
      "Comfy-Desktop.AutoUpdate": this.installOptions.autoUpdate,
      "Comfy-Desktop.SendStatistics": this.installOptions.allowMetrics,
      "Comfy-Desktop.UV.PythonInstallMirror": this.installOptions.pythonMirror,
      "Comfy-Desktop.UV.PypiInstallMirror": this.installOptions.pypiMirror,
      "Comfy-Desktop.UV.TorchInstallMirror": this.installOptions.torchMirror
    };
    if (this.installOptions.device === "cpu") {
      settings["Comfy.Server.LaunchArgs"] ?? (settings["Comfy.Server.LaunchArgs"] = {});
      settings["Comfy.Server.LaunchArgs"]["cpu"] = "";
    }
    for (const [key, value] of Object.entries(settings)) {
      existingSettings.set(key, value);
    }
    await existingSettings.saveSettings();
    log$2.info(`Wrote install options to comfy settings file.`);
  }
  /**
   * Setup extra_models_config.yaml file
   */
  async initializeModelPaths() {
    let yamlContent;
    const comfyDesktopConfig = ComfyServerConfig.getBaseConfig();
    comfyDesktopConfig["base_path"] = this.basePath;
    const { migrationSource } = this;
    const shouldMigrateModels = !!migrationSource && this.migrationItemIds.has("models");
    if (shouldMigrateModels) {
      this.telemetry.track("migrate_flow:migrate_models");
      const migrationServerConfigs = await ComfyServerConfig.getConfigFromRepoPath(migrationSource);
      const migrationComfyConfig = ComfyServerConfig.getBaseModelPathsFromRepoPath("");
      migrationComfyConfig["base_path"] = migrationSource;
      yamlContent = {
        ...migrationServerConfigs,
        comfyui_migration: migrationComfyConfig,
        comfyui_desktop: comfyDesktopConfig
      };
    } else {
      yamlContent = {
        comfyui_desktop: comfyDesktopConfig
      };
    }
    await ComfyServerConfig.createConfigFile(ComfyServerConfig.configPath, yamlContent);
  }
}
__decorateClass$2([
  trackEvent("install_flow:create_comfy_directories")
], InstallWizard.prototype, "install");
class Troubleshooting {
  constructor(installation, appWindow) {
    __privateAdd(this, _Troubleshooting_instances);
    __privateAdd(this, _handlers, []);
    /** Called when an install-fixing task has finished. */
    __publicField(this, "onInstallFix");
    this.installation = installation;
    this.appWindow = appWindow;
    __privateMethod(this, _Troubleshooting_instances, setOnUpdateCallback_fn).call(this);
    __privateMethod(this, _Troubleshooting_instances, addIpcHandlers_fn).call(this);
  }
  addOnUpdateHandler(handler) {
    __privateGet(this, _handlers).push(handler);
  }
  /** Removes all handlers created by {@link #addIpcHandlers} */
  [Symbol.dispose]() {
    delete this.installation.onUpdate;
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.GET_VALIDATION_STATE);
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.VALIDATE_INSTALLATION);
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.UV_INSTALL_REQUIREMENTS);
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.UV_CLEAR_CACHE);
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.UV_RESET_VENV);
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.SET_BASE_PATH);
  }
}
_handlers = new WeakMap();
_Troubleshooting_instances = new WeakSet();
setOnUpdateCallback_fn = function() {
  this.installation.onUpdate = (data2) => {
    this.appWindow.send(IPC_CHANNELS.VALIDATION_UPDATE, data2);
    for (const handler of __privateGet(this, _handlers)) {
      handler(data2);
    }
  };
};
/** Creates IPC handlers for the installation instance. */
addIpcHandlers_fn = function() {
  const { installation } = this;
  const sendLogIpc = (data2) => {
    log$2.info(data2);
    this.appWindow.send(IPC_CHANNELS.LOG_MESSAGE, data2);
  };
  electron$1.ipcMain.handle(IPC_CHANNELS.GET_VALIDATION_STATE, () => {
    var _a3;
    (_a3 = installation.onUpdate) == null ? void 0 : _a3.call(installation, installation.validation);
    return installation.validation;
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.VALIDATE_INSTALLATION, async () => {
    getTelemetry().track("installation_manager:installation_validate");
    return await installation.validate();
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.UV_INSTALL_REQUIREMENTS, async () => {
    var _a3;
    getTelemetry().track("installation_manager:uv_requirements_install");
    const result = await installation.virtualEnvironment.reinstallRequirements(sendLogIpc);
    if (result) await ((_a3 = this.onInstallFix) == null ? void 0 : _a3.call(this));
    return result;
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.UV_CLEAR_CACHE, async () => {
    getTelemetry().track("installation_manager:uv_cache_clear");
    return await installation.virtualEnvironment.clearUvCache(sendLogIpc);
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.UV_RESET_VENV, async () => {
    var _a3;
    getTelemetry().track("installation_manager:uv_venv_reset");
    const venv = installation.virtualEnvironment;
    const deleted = await venv.removeVenvDirectory();
    if (!deleted) return false;
    const created = await venv.createVenv(sendLogIpc);
    if (!created) return false;
    const result = await venv.upgradePip({ onStdout: sendLogIpc, onStderr: sendLogIpc });
    if (result) await ((_a3 = this.onInstallFix) == null ? void 0 : _a3.call(this));
    return result;
  });
  electron$1.ipcMain.handle(IPC_CHANNELS.SET_BASE_PATH, async () => {
    var _a3;
    const currentBasePath = useDesktopConfig().get("basePath");
    const response = await this.appWindow.showOpenDialog({
      properties: ["openDirectory"],
      defaultPath: currentBasePath
    });
    if (response.canceled || !(response.filePaths.length > 0)) return false;
    const basePath = response.filePaths[0];
    useDesktopConfig().set("basePath", basePath);
    const result = await ComfyServerConfig.setBasePathInDefaultConfig(basePath);
    if (result) await ((_a3 = this.onInstallFix) == null ? void 0 : _a3.call(this));
    return result;
  });
};
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$1(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$1(target, key, result);
  return result;
};
const _InstallationManager = (_b = class {
  constructor(appWindow, telemetry2) {
    __privateAdd(this, __InstallationManager2_instances);
    /** Set to `true` the first time an error is found during validation. @todo Move to app state singleton once impl. */
    __privateAdd(this, _onMaintenancePage, false);
    this.appWindow = appWindow;
    this.telemetry = telemetry2;
  }
  /**
   * Ensures that ComfyUI is installed and ready to run.
   *
   * First checks for an existing installation and validates it. If missing or invalid, a fresh install is started.
   * Will not resolve until the installation is valid.
   * @returns A valid {@link ComfyInstallation} object.
   */
  async ensureInstalled() {
    const installation = await ComfyInstallation.fromConfig();
    log$2.info(`Install state: ${(installation == null ? void 0 : installation.state) ?? "not installed"}`);
    if (!installation) return await this.freshInstall();
    if (installation.state === "started") return await this.resumeInstallation();
    _b.setReinstallHandler(installation);
    return await this.validateInstallation(installation);
  }
  async validateInstallation(installation) {
    var _stack = [];
    try {
      __privateSet(this, _onMaintenancePage, false);
      const troubleshooting = __using(_stack, new Troubleshooting(installation, this.appWindow));
      troubleshooting.addOnUpdateHandler((data2) => __privateMethod(this, __InstallationManager2_instances, onUpdateHandler_fn).call(this, data2));
      const state = await installation.validate();
      if (state === "upgraded") installation.upgradeConfig();
      if (installation.needsRequirementsUpdate) await this.updatePackages(installation);
      if (installation.hasIssues) {
        while (!await this.resolveIssues(installation, troubleshooting)) {
          log$2.verbose("Re-validating installation.");
        }
      }
      return installation;
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }
  /**
   * Resumes an installation that was never completed.
   */
  async resumeInstallation() {
    log$2.verbose("Resuming installation.");
    return await this.freshInstall();
  }
  /**
   * Install ComfyUI and return the base path.
   */
  async freshInstall() {
    log$2.info("Starting installation.");
    const config = useDesktopConfig();
    config.set("installState", "started");
    const hardware = await validateHardware();
    if (typeof hardware.gpu === "string") config.set("detectedGpu", hardware.gpu);
    const optionsPromise = new Promise((resolve3) => {
      electron$1.ipcMain.once(IPC_CHANNELS.INSTALL_COMFYUI, (_event, installOptions2) => {
        log$2.verbose("Received INSTALL_COMFYUI.");
        resolve3(installOptions2);
      });
    });
    if (!hardware.isValid) {
      log$2.error(hardware.error);
      log$2.verbose("Loading not-supported renderer.");
      this.telemetry.track("desktop:hardware_not_supported");
      await this.appWindow.loadPage("not-supported");
    } else {
      log$2.verbose("Loading welcome renderer.");
      await this.appWindow.loadPage("welcome");
    }
    log$2.verbose("Checking if git is installed.");
    const gitInstalled = await canExecuteShellCommand("git --version");
    if (!gitInstalled) {
      log$2.verbose("git not detected in path, loading download-git page.");
      const { response } = await this.appWindow.showMessageBox({
        type: "info",
        title: "Download git",
        message: `We were unable to find git on this device.

Please download and install git before continuing with the installation of ComfyUI Desktop.`,
        buttons: ["Open git downloads page", "Skip"],
        defaultId: 0,
        cancelId: 1
      });
      if (response === 0) {
        await electron$1.shell.openExternal("https://git-scm.com/downloads/");
      }
    }
    const installOptions = await optionsPromise;
    this.telemetry.track("desktop:install_options_received", {
      gpuType: installOptions.device,
      autoUpdate: installOptions.autoUpdate,
      allowMetrics: installOptions.allowMetrics,
      migrationItemIds: installOptions.migrationItemIds,
      pythonMirror: installOptions.pythonMirror,
      pypiMirror: installOptions.pypiMirror,
      torchMirror: installOptions.torchMirror,
      device: installOptions.device
    });
    const { device } = installOptions;
    useDesktopConfig().set("basePath", installOptions.installPath);
    useDesktopConfig().set("versionConsentedMetrics", "0.4.62");
    useDesktopConfig().set("selectedDevice", device);
    const page = device === "unsupported" ? "not-supported" : "server-start";
    if (!this.appWindow.isOnPage(page)) {
      await this.appWindow.loadPage(page);
    }
    const installWizard = new InstallWizard(installOptions, this.telemetry);
    await installWizard.install();
    this.appWindow.maximize();
    const shouldMigrateCustomNodes = !!installWizard.migrationSource && installWizard.migrationItemIds.has("custom_nodes");
    if (shouldMigrateCustomNodes) {
      useDesktopConfig().set("migrateCustomNodesFrom", installWizard.migrationSource);
    }
    const installation = new ComfyInstallation("started", installWizard.basePath, this.telemetry);
    _b.setReinstallHandler(installation);
    const { virtualEnvironment } = installation;
    const processCallbacks = {
      onStdout: (data2) => {
        log$2.info(data2);
        this.appWindow.send(IPC_CHANNELS.LOG_MESSAGE, data2);
      },
      onStderr: (data2) => {
        log$2.error(data2);
        this.appWindow.send(IPC_CHANNELS.LOG_MESSAGE, data2);
      }
    };
    this.appWindow.sendServerStartProgress(ProgressStatus.PYTHON_SETUP);
    await virtualEnvironment.create(processCallbacks);
    const customNodeMigrationError = await this.migrateCustomNodes(config, virtualEnvironment, processCallbacks);
    if (customNodeMigrationError) {
      new electron$1.Notification({
        title: "Failed to migrate custom nodes",
        body: customNodeMigrationError
      }).show();
    }
    installation.setState("installed");
    return installation;
  }
  /** @returns `undefined` if successful, or an error `string` on failure. */
  async migrateCustomNodes(config, virtualEnvironment, callbacks) {
    var _a3;
    const fromPath = config.get("migrateCustomNodesFrom");
    if (!fromPath) return;
    log$2.info("Migrating custom nodes from:", fromPath);
    try {
      const cmCli = new CmCli(virtualEnvironment, virtualEnvironment.telemetry);
      await cmCli.restoreCustomNodes(fromPath, callbacks);
    } catch (error) {
      log$2.error("Error migrating custom nodes:", error);
      return ((_a3 = error == null ? void 0 : error.toString) == null ? void 0 : _a3.call(error)) ?? "Error migrating custom nodes.";
    } finally {
      config.delete("migrateCustomNodesFrom");
    }
  }
  /**
   * Resolves any issues found during installation validation.
   * @param installation The installation to resolve issues for
   * @throws If the base path is invalid or cannot be saved
   */
  async resolveIssues(installation, troubleshooting) {
    log$2.verbose("Resolving issues - awaiting user response:", installation.validation);
    const isValid = await new Promise((resolve3) => {
      const onInstallFix = async () => {
        log$2.verbose("Attempting to close validation window");
        if (!installation.isValid) await installation.validate();
        const { isValid: isValid2 } = installation;
        resolve3(isValid2);
        return isValid2;
      };
      troubleshooting.onInstallFix = onInstallFix;
      electron$1.ipcMain.handleOnce(IPC_CHANNELS.COMPLETE_VALIDATION, onInstallFix);
    });
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.COMPLETE_VALIDATION);
    log$2.verbose("Resolution complete:", installation.validation);
    return isValid;
  }
  async updatePackages(installation) {
    const sendLogIpc = (data2) => {
      log$2.info(data2);
      this.appWindow.send(IPC_CHANNELS.LOG_MESSAGE, data2);
    };
    await this.appWindow.loadPage("desktop-update");
    const callbacks = {
      onStdout: sendLogIpc,
      onStderr: sendLogIpc
    };
    try {
      await installation.virtualEnvironment.installComfyUIRequirements(callbacks);
      await installation.virtualEnvironment.installComfyUIManagerRequirements(callbacks);
      await installation.validate();
    } catch (error) {
      log$2.error("Error auto-updating packages:", error);
      await this.appWindow.loadPage("server-start");
    }
  }
  static setReinstallHandler(installation) {
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.REINSTALL);
    electron$1.ipcMain.handle(IPC_CHANNELS.REINSTALL, async () => await _b.reinstall(installation));
  }
  static async reinstall(installation) {
    log$2.info("Reinstalling...");
    await installation.uninstall();
    electron$1.app.relaunch();
    electron$1.app.quit();
  }
}, _onMaintenancePage = new WeakMap(), __InstallationManager2_instances = new WeakSet(), onUpdateHandler_fn = function(data2) {
  var _a3;
  if (__privateGet(this, _onMaintenancePage) || !Object.values(data2).includes("error")) return;
  __privateSet(this, _onMaintenancePage, true);
  const error = (_a3 = Object.entries(data2).find(([, value]) => value === "error")) == null ? void 0 : _a3[0];
  this.telemetry.track("validation:error_found", { error });
  log$2.info("Validation error - loading maintenance page.");
  this.appWindow.loadPage("maintenance").catch((error2) => {
    log$2.error("Error loading maintenance page.", error2);
    const message = `An error was detected with your installation, and the maintenance page could not be loaded to resolve it. The app will close now. Please reinstall if this issue persists.

Error message:

${error2}`;
    electron$1.dialog.showErrorBox("Critical Error", message);
    electron$1.app.quit();
  });
}, _b);
__decorateClass$1([
  trackEvent("installation_manager:manager_packages_update")
], _InstallationManager.prototype, "updatePackages");
let InstallationManager = _InstallationManager;
class AppStartError extends Error {
  constructor(message, cause) {
    super(message, { cause });
    this.name = "AppStartError";
  }
}
class AppState extends node_events.EventEmitter {
  constructor() {
    super(...arguments);
    __publicField(this, "isQuitting", false);
    __publicField(this, "ipcRegistered", false);
    __publicField(this, "loaded", false);
    __publicField(this, "currentPage");
  }
  initialize() {
    electron$1.app.once("before-quit", () => {
      this.isQuitting = true;
    });
    this.once("loaded", () => {
      this.loaded = true;
    });
    this.once("ipcRegistered", () => {
      this.ipcRegistered = true;
    });
  }
  emitIpcRegistered() {
    if (!this.ipcRegistered) this.emit("ipcRegistered");
  }
  emitLoaded() {
    if (!this.loaded) this.emit("loaded");
  }
}
const appState = new AppState();
let initialized = false;
function initializeAppState() {
  if (initialized) throw new AppStartError("AppState already initialized");
  appState.initialize();
  initialized = true;
}
function useAppState() {
  if (!initialized) throw new AppStartError("AppState not initialized");
  return appState;
}
class ElectronError extends Error {
  constructor(error) {
    super(error.message, { cause: error });
    /** Electron error number */
    __publicField(this, "errno");
    /** Electron error code */
    __publicField(this, "code");
    /** URL of the page associated with the error. */
    __publicField(this, "url");
    this.errno = error.errno;
    this.code = error.code;
    this.url = error.url;
  }
  /**
   * Static factory. If possible, creates an strongly-typed ElectronError from an unknown error.
   * @param error The error object to create an ElectronError from.
   * @returns A strongly-typed electron error if the error object is an instance of Error and has the required properties, otherwise `undefined`.
   */
  static fromCaught(error) {
    return this.isRawError(error) ? new ElectronError(error) : void 0;
  }
  /**
   * Checks if the error was a generic Chromium `ERR_FAILED` error.
   * @returns `true` if the error is a generic Chromium error, otherwise `false`.
   */
  isGenericChromiumError() {
    return this.code === "ERR_FAILED" && this.errno === -2 && typeof this.url === "string";
  }
  /**
   * Type guard. Confirms {@link error} is an {@link Error}, `errno`, and `code` properties.
   * @param error The error object to check.
   * @returns `true` if the error is a raw Electron error, otherwise `false`.
   */
  static isRawError(error) {
    return error instanceof Error && "errno" in error && "code" in error && typeof error.errno === "number" && typeof error.code === "string";
  }
}
class AppWindow {
  constructor() {
    __privateAdd(this, _AppWindow_instances);
    __publicField(this, "appState", useAppState());
    __publicField(this, "window");
    /** Volatile store containing window config - saves window state between launches. */
    __publicField(this, "store");
    __publicField(this, "messageQueue", []);
    __publicField(this, "rendererReady", false);
    /** Default dark mode config for system window overlay (min/max/close window). */
    __publicField(this, "darkOverlay", { color: "#00000000", symbolColor: "#ddd" });
    /** Default light mode config for system window overlay (min/max/close window). */
    __publicField(this, "lightOverlay", { ...this.darkOverlay, symbolColor: "#333" });
    /** The application menu. */
    __publicField(this, "menu");
    /** The "edit" menu - cut/copy/paste etc. */
    __publicField(this, "editMenu");
    /** Whether this window was created with title bar overlay enabled. When `false`, Electron throws when calling {@link BrowserWindow.setTitleBarOverlay}. */
    __publicField(this, "customWindowEnabled", process.platform !== "darwin" && useDesktopConfig().get("windowStyle") === "custom");
    const installed = useDesktopConfig().get("installState") === "installed";
    const { workAreaSize } = electron$1.screen.getPrimaryDisplay();
    const { width, height } = installed ? workAreaSize : { width: 1024, height: 768 };
    const store = this.loadWindowStore();
    this.store = store;
    const minWidth = 640;
    const minHeight = 640;
    const storedWidth = store.get("windowWidth", width);
    const storedHeight = store.get("windowHeight", height);
    const storedX = store.get("windowX");
    const storedY = store.get("windowY");
    const clampedWidth = clamp(storedWidth, minWidth, workAreaSize.width);
    const clampedHeight = clamp(storedHeight, minHeight, workAreaSize.height);
    const eitherUndefined = storedX === void 0 || storedY === void 0;
    const x = eitherUndefined ? void 0 : clamp(storedX, 0, workAreaSize.width - clampedWidth);
    const y = eitherUndefined ? void 0 : clamp(storedY, 0, workAreaSize.height - clampedHeight);
    const customChrome = this.customWindowEnabled ? {
      titleBarStyle: "hidden",
      titleBarOverlay: electron$1.nativeTheme.shouldUseDarkColors ? this.darkOverlay : this.lightOverlay
    } : {};
    this.window = new electron$1.BrowserWindow({
      title: "ComfyUI",
      width: clampedWidth,
      height: clampedHeight,
      minWidth: 640,
      minHeight: 640,
      x,
      y,
      backgroundColor: "#171717",
      webPreferences: {
        // eslint-disable-next-line unicorn/prefer-module
        preload: path$g.join(__dirname, "../build/preload.cjs"),
        nodeIntegration: true,
        contextIsolation: true,
        webviewTag: true,
        devTools: true
      },
      show: false,
      autoHideMenuBar: true,
      ...customChrome
    });
    this.window.once("ready-to-show", () => this.window.show());
    if (!installed && storedX === void 0) this.window.center();
    if (store.get("windowMaximized")) this.window.maximize();
    this.setupWindowEvents();
    this.setupAppEvents();
    this.setupIpcEvents();
    this.sendQueuedEventsOnReady();
    this.setupTray();
    this.menu = this.buildMenu();
    this.buildTextMenu();
  }
  /** Always returns `undefined` in production. When running unpackaged, returns `DEV_SERVER_URL` if set, otherwise `undefined`. */
  get devUrlOverride() {
    if (!electron$1.app.isPackaged) return process.env.DEV_SERVER_URL;
  }
  isReady() {
    return this.rendererReady;
  }
  send(channel, data2) {
    if (!this.isReady()) {
      this.messageQueue.push({ channel, data: data2 });
      return;
    }
    const { webContents } = this.window;
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      if (message && !webContents.isDestroyed()) {
        webContents.send(message.channel, message.data);
      }
    }
    if (!webContents.isDestroyed()) {
      webContents.send(channel, data2);
    }
  }
  /**
   * Report progress of server start.
   * @param status - The status of the server start progress.
   */
  sendServerStartProgress(status) {
    this.send(IPC_CHANNELS.LOADING_PROGRESS, { status });
  }
  async loadComfyUI(serverArgs) {
    const host = serverArgs.listen === "0.0.0.0" ? "localhost" : serverArgs.listen;
    const url2 = this.devUrlOverride ?? `http://${host}:${serverArgs.port}`;
    await this.window.loadURL(url2);
  }
  openDevTools() {
    this.window.webContents.openDevTools();
  }
  show() {
    this.window.show();
  }
  hide() {
    this.window.hide();
  }
  isMinimized() {
    return this.window.isMinimized();
  }
  restore() {
    this.window.restore();
  }
  focus() {
    this.window.focus();
  }
  maximize() {
    this.window.maximize();
  }
  /**
   * Checks if the window is currently on the specified page by parsing the browser URL.
   * @param page The frontend route portion of the URL to match against
   * @returns `true` if the window is currently on the specified page, otherwise `false`
   */
  isOnPage(page) {
    const rawUrl = this.window.webContents.getURL();
    const url2 = new node_url.URL(rawUrl);
    if (!url2) return page === "";
    const prefixedPage = url2.protocol === "file:" ? url2.hash : url2.pathname;
    return page === prefixedPage.slice(1);
  }
  /**
   * Loads a frontend page.
   *
   * In production, this is via the file:// protocol. Dev environments can utilise a dev server.
   * @param page The page to load; a valid entry in the frontend router.
   */
  async loadPage(page) {
    this.appState.currentPage = page;
    const { devUrlOverride } = this;
    if (devUrlOverride) {
      const url2 = `${devUrlOverride}/${page}`;
      this.rendererReady = true;
      log$2.info(`Loading development server ${url2}`);
      if (process.env.DEV_TOOLS_AUTO === "true") this.window.webContents.openDevTools();
      await this.window.loadURL(url2);
    } else {
      if (page === "maintenance") this.rendererReady = true;
      const appResourcesPath = getAppResourcesPath();
      const frontendPath = path$g.join(appResourcesPath, "ComfyUI", "web_custom_versions", "desktop_app");
      try {
        await this.window.loadFile(path$g.join(frontendPath, "index.html"), { hash: page });
      } catch (error) {
        const electronError = ElectronError.fromCaught(error);
        if (electronError == null ? void 0 : electronError.isGenericChromiumError()) {
          log$2.verbose("Ignoring Chromium page load error - occurs when requests are sent too fast.");
          return;
        }
        throw electronError ?? error;
      }
    }
  }
  /** Opens a modal file/folder picker. @inheritdoc {@link Electron.Dialog.showOpenDialog} */
  async showOpenDialog(options) {
    return await electron$1.dialog.showOpenDialog(this.window, options);
  }
  /** Opens a modal message box. @inheritdoc {@link Electron.Dialog.showMessageBox} */
  async showMessageBox(options) {
    return await electron$1.dialog.showMessageBox(this.window, options);
  }
  /**
   * Loads window state from `userData` via `electron-store`.  Overwrites invalid config with defaults.
   * @returns The electron store for non-critical window state (size/position etc)
   * @throws Rethrows errors received from `electron-store` and `app.getPath('userData')`.
   * There are edge cases where this might not be a catastrophic failure, but inability
   * to write to our own datastore may result in unexpected user data loss.
   */
  loadWindowStore() {
    try {
      return new ElectronStore({
        clearInvalidConfig: true,
        name: "window"
      });
    } catch (error) {
      log$2.error(`Unknown error whilst loading window configuration.`, error);
      try {
        electron$1.dialog.showErrorBox(
          "User Data",
          `Unknown error whilst writing to user data folder:

${electron$1.app.getPath("userData")}`
        );
      } catch (error2) {
        log$2.error("Cannot find user data folder.", error2);
        electron$1.dialog.showErrorBox("Invalid Environment", "Unknown error whilst attempting to determine user data folder.");
        throw error2;
      }
      throw error;
    }
  }
  setupWindowEvents() {
    const updateBounds = lodash.debounce(
      () => {
        if (!this.window) return;
        const windowMaximized = this.window.isMaximized();
        const bounds = this.window.getBounds();
        const windowSizePos = {
          windowWidth: bounds.width,
          windowHeight: bounds.height,
          windowX: bounds.x,
          windowY: bounds.y
        };
        this.store.set({
          windowMaximized,
          ...windowMaximized ? {} : windowSizePos
        });
      },
      256,
      { leading: true, trailing: true }
    );
    this.window.on("resize", updateBounds);
    this.window.on("move", updateBounds);
    this.window.on("close", () => log$2.info("App window closed."));
    this.window.webContents.setWindowOpenHandler(({ url: url2 }) => {
      if (__privateMethod(this, _AppWindow_instances, shouldOpenInPopup_fn).call(this, url2)) {
        return { action: "allow" };
      } else {
        electron$1.shell.openExternal(url2);
        return { action: "deny" };
      }
    });
  }
  setupAppEvents() {
    electron$1.app.on("second-instance", (event, commandLine, workingDirectory, additionalData) => {
      log$2.info("Received second instance message!", additionalData);
      if (this.isMinimized()) this.restore();
      this.focus();
    });
  }
  setupIpcEvents() {
    electron$1.ipcMain.on(IPC_CHANNELS.CHANGE_THEME, (_event, options) => {
      this.changeTheme(options);
    });
    electron$1.ipcMain.on(IPC_CHANNELS.SHOW_CONTEXT_MENU, (_event, options) => {
      this.showSystemContextMenu(options);
    });
    electron$1.ipcMain.on(IPC_CHANNELS.OPEN_DEV_TOOLS, () => {
      this.openDevTools();
    });
  }
  sendQueuedEventsOnReady() {
    electron$1.ipcMain.on(IPC_CHANNELS.RENDERER_READY, () => {
      this.rendererReady = true;
      log$2.info("Received renderer-ready message!");
      while (this.messageQueue.length > 0) {
        const message = this.messageQueue.shift();
        if (message) {
          log$2.info("Sending queued message", message);
          if (this.window.webContents.isDestroyed()) {
            log$2.warn("Window is destroyed, cannot send message", message);
          } else {
            this.window.webContents.send(message.channel, message.data);
          }
        }
      }
    });
  }
  changeTheme(options) {
    if (!this.customWindowEnabled) return;
    options.height && (options.height = Math.round(options.height));
    if (!options.height) delete options.height;
    this.window.setTitleBarOverlay(options);
  }
  showSystemContextMenu(options) {
    var _a3, _b2;
    if ((options == null ? void 0 : options.type) === "text") {
      (_a3 = this.editMenu) == null ? void 0 : _a3.popup(options.pos);
    } else {
      (_b2 = this.menu) == null ? void 0 : _b2.popup(options == null ? void 0 : options.pos);
    }
  }
  setupTray() {
    const trayImage = path$g.join(
      electron$1.app.isPackaged ? process.resourcesPath : "./assets",
      "UI",
      process.platform === "darwin" ? "Comfy_Logo_x16_BW.png" : "Comfy_Logo_x32.png"
    );
    const tray = new electron$1.Tray(trayImage);
    tray.setToolTip("ComfyUI");
    tray.on("double-click", () => this.show());
    if (process.platform === "darwin") {
      tray.setPressedImage(
        path$g.join(electron$1.app.isPackaged ? process.resourcesPath : "./assets", "UI", "Comfy_Logo_x16_BW.png")
      );
    }
    const contextMenu = electron$1.Menu.buildFromTemplate([
      {
        label: "Show Comfy Window",
        click: () => {
          this.show();
          if (process.platform === "darwin") {
            electron$1.app.dock.show().catch((error) => {
              log$2.error("Error showing dock", error);
            });
          }
        }
      },
      {
        label: "Quit Comfy",
        click: () => {
          electron$1.app.quit();
        }
      },
      {
        label: "Hide",
        click: () => {
          this.hide();
          if (process.platform === "darwin") {
            electron$1.app.dock.hide();
          }
        }
      }
    ]);
    tray.setContextMenu(contextMenu);
    return tray;
  }
  buildTextMenu() {
    var _a3, _b2;
    this.editMenu = (_b2 = (_a3 = electron$1.Menu.getApplicationMenu()) == null ? void 0 : _a3.items.find((x) => {
      var _a4;
      return ((_a4 = x.role) == null ? void 0 : _a4.toLowerCase()) === "editmenu";
    })) == null ? void 0 : _b2.submenu;
  }
  buildMenu() {
    const menu = electron$1.Menu.getApplicationMenu();
    if (menu) {
      const aboutMenuItem = {
        label: "About ComfyUI",
        click: () => {
          electron$1.dialog.showMessageBox({
            title: "About",
            message: `ComfyUI v${electron$1.app.getVersion()}`,
            detail: "Created by Comfy Org\nCopyright © 2024",
            buttons: ["OK"]
          }).catch((error) => {
            log$2.error("Error showing about dialog", error);
          });
        }
      };
      const helpMenuItem = menu.items.find((item) => item.role === "help");
      if (helpMenuItem && helpMenuItem.submenu) {
        helpMenuItem.submenu.append(new electron$1.MenuItem(aboutMenuItem));
        electron$1.Menu.setApplicationMenu(menu);
      } else {
        menu.append(
          new electron$1.MenuItem({
            label: "Help",
            submenu: [aboutMenuItem]
          })
        );
        electron$1.Menu.setApplicationMenu(menu);
      }
    }
    return menu;
  }
}
_AppWindow_instances = new WeakSet();
/** Allows Electron popup windows for e.g. login/checkout popups. */
shouldOpenInPopup_fn = function(url2) {
  return url2.startsWith("https://dreamboothy.firebaseapp.com/") || url2.startsWith("https://checkout.comfy.org/");
};
const _DownloadManager = class _DownloadManager {
  constructor(mainWindow, modelsDirectory) {
    __publicField(this, "downloads");
    this.mainWindow = mainWindow;
    this.modelsDirectory = modelsDirectory;
    this.downloads = /* @__PURE__ */ new Map();
    electron$1.session.defaultSession.on("will-download", (event, item) => {
      const url2 = item.getURLChain()[0];
      log$2.info("Will-download event", url2);
      const download = this.downloads.get(url2);
      if (!download) return;
      this.reportProgress({
        url: url2,
        filename: download.filename,
        savePath: download.savePath,
        progress: 0,
        status: DownloadStatus.PENDING
      });
      item.setSavePath(download.tempPath);
      download.item = item;
      log$2.info(`Setting save path to ${item.getSavePath()}`);
      item.on("updated", (event2, state) => {
        if (state === "interrupted") {
          log$2.info("Download is interrupted but can be resumed");
        } else if (state === "progressing") {
          const progress = item.getReceivedBytes() / item.getTotalBytes();
          if (item.isPaused()) {
            log$2.info("Download is paused");
            this.reportProgress({
              url: url2,
              progress,
              filename: download.filename,
              savePath: download.savePath,
              status: DownloadStatus.PAUSED
            });
          } else {
            this.reportProgress({
              url: url2,
              progress,
              filename: download.filename,
              savePath: download.savePath,
              status: DownloadStatus.IN_PROGRESS
            });
          }
        }
      });
      item.once("done", (event2, state) => {
        if (state === "completed") {
          try {
            fs$9.renameSync(download.tempPath, download.savePath);
            log$2.info(`Successfully renamed ${download.tempPath} to ${download.savePath}`);
          } catch (error) {
            log$2.error("Failed to rename downloaded file. Deleting temp file.", error);
            fs$9.unlinkSync(download.tempPath);
          }
          this.reportProgress({
            url: url2,
            filename: download.filename,
            savePath: download.savePath,
            progress: 1,
            status: DownloadStatus.COMPLETED
          });
          this.downloads.delete(url2);
        } else {
          log$2.info(`Download failed: ${state}`);
          const progress = item.getReceivedBytes() / item.getTotalBytes();
          this.reportProgress({
            url: url2,
            filename: download.filename,
            progress,
            status: DownloadStatus.ERROR,
            savePath: download.savePath
          });
        }
      });
    });
  }
  startDownload(url2, savePath, filename) {
    var _a3;
    const localSavePath = this.getLocalSavePath(filename, savePath);
    if (!this.isPathInModelsDirectory(localSavePath)) {
      log$2.error(`Save path ${localSavePath} is not in models directory ${this.modelsDirectory}`);
      this.reportProgress({
        url: url2,
        savePath,
        filename,
        progress: 0,
        status: DownloadStatus.ERROR,
        message: "Save path is not in models directory"
      });
      return false;
    }
    const validationResult = this.validateSafetensorsFile(url2, filename);
    if (!validationResult.isValid) {
      log$2.error(validationResult.error);
      this.reportProgress({
        url: url2,
        savePath,
        filename,
        progress: 0,
        status: DownloadStatus.ERROR,
        message: validationResult.error
      });
      return false;
    }
    if (fs$9.existsSync(localSavePath)) {
      log$2.info(`File ${filename} already exists, skipping download`);
      return true;
    }
    const existingDownload = this.downloads.get(url2);
    if (existingDownload) {
      log$2.info("Download already exists");
      if ((_a3 = existingDownload.item) == null ? void 0 : _a3.isPaused()) {
        this.resumeDownload(url2);
      }
      return true;
    }
    log$2.info(`Starting download ${url2} to ${localSavePath}`);
    const tempPath = this.getTempPath(filename, savePath);
    this.downloads.set(url2, { url: url2, savePath: localSavePath, tempPath, filename, item: null });
    electron$1.session.defaultSession.downloadURL(url2);
    return true;
  }
  cancelDownload(url2) {
    const download = this.downloads.get(url2);
    if (!(download == null ? void 0 : download.item)) return;
    log$2.info("Cancelling download");
    download.item.cancel();
    this.downloads.delete(url2);
  }
  pauseDownload(url2) {
    const download = this.downloads.get(url2);
    if (!(download == null ? void 0 : download.item)) return;
    log$2.info("Pausing download");
    download.item.pause();
  }
  resumeDownload(url2) {
    const download = this.downloads.get(url2);
    if (!(download == null ? void 0 : download.item)) return;
    if (download.item.canResume()) {
      log$2.info("Resuming download");
      download.item.resume();
    } else {
      this.startDownload(download.url, download.savePath, download.filename);
    }
  }
  deleteModel(filename, savePath) {
    const localSavePath = this.getLocalSavePath(filename, savePath);
    if (!this.isPathInModelsDirectory(localSavePath)) {
      log$2.error(`Save path ${localSavePath} is not in models directory ${this.modelsDirectory}`);
      return false;
    }
    const tempPath = this.getTempPath(filename, savePath);
    try {
      if (fs$9.existsSync(localSavePath)) {
        log$2.info(`Deleting local file ${localSavePath}`);
        fs$9.unlinkSync(localSavePath);
      }
    } catch (error) {
      log$2.error(`Failed to delete file ${localSavePath}:`, error);
    }
    try {
      if (fs$9.existsSync(tempPath)) {
        log$2.info(`Deleting temp file ${tempPath}`);
        fs$9.unlinkSync(tempPath);
      }
    } catch (error) {
      log$2.error(`Failed to delete file ${tempPath}:`, error);
    }
    return true;
  }
  getAllDownloads() {
    return [...this.downloads.values()].filter((download) => download.item !== null).map((download) => {
      var _a3, _b2, _c2, _d;
      return {
        url: download.url,
        filename: download.filename,
        tempPath: download.tempPath,
        state: this.convertDownloadState((_a3 = download.item) == null ? void 0 : _a3.getState()),
        receivedBytes: ((_b2 = download.item) == null ? void 0 : _b2.getReceivedBytes()) || 0,
        totalBytes: ((_c2 = download.item) == null ? void 0 : _c2.getTotalBytes()) || 0,
        isPaused: ((_d = download.item) == null ? void 0 : _d.isPaused()) || false
      };
    });
  }
  convertDownloadState(state) {
    switch (state) {
      case "progressing":
        return DownloadStatus.IN_PROGRESS;
      case "completed":
        return DownloadStatus.COMPLETED;
      case "cancelled":
        return DownloadStatus.CANCELLED;
      case "interrupted":
        return DownloadStatus.ERROR;
      default:
        return DownloadStatus.ERROR;
    }
  }
  getTempPath(filename, savePath) {
    return path$g.join(this.modelsDirectory, savePath, `Unconfirmed ${filename}.tmp`);
  }
  // Only allow .safetensors files to be downloaded.
  validateSafetensorsFile(url2, filename) {
    try {
      const urlObj = new URL(url2);
      const pathname = urlObj.pathname.toLowerCase();
      if (!pathname.endsWith(".safetensors") && !filename.toLowerCase().endsWith(".safetensors")) {
        return {
          isValid: false,
          error: "Invalid file type: must be a .safetensors file"
        };
      }
      return { isValid: true };
    } catch (error) {
      return {
        isValid: false,
        error: `Invalid URL format: ${error}`
      };
    }
  }
  getLocalSavePath(filename, savePath) {
    return path$g.join(this.modelsDirectory, savePath, filename);
  }
  isPathInModelsDirectory(filePath) {
    const absoluteFilePath = path$g.resolve(filePath);
    const absoluteModelsDir = path$g.resolve(this.modelsDirectory);
    return absoluteFilePath.startsWith(absoluteModelsDir);
  }
  reportProgress(report) {
    log$2.info(
      `Download progress [${report.filename}]: ${report.progress}, status: ${report.status}, message: ${report.message}`
    );
    this.mainWindow.send(IPC_CHANNELS.DOWNLOAD_PROGRESS, { ...report });
  }
  static getInstance(mainWindow, modelsDirectory) {
    if (!_DownloadManager.instance) {
      _DownloadManager.instance = new _DownloadManager(mainWindow, modelsDirectory);
      _DownloadManager.instance.registerIpcHandlers();
    }
    return _DownloadManager.instance;
  }
  registerIpcHandlers() {
    electron$1.ipcMain.handle(
      IPC_CHANNELS.START_DOWNLOAD,
      (event, { url: url2, path: path2, filename }) => this.startDownload(url2, path2, filename)
    );
    electron$1.ipcMain.handle(IPC_CHANNELS.PAUSE_DOWNLOAD, (event, url2) => this.pauseDownload(url2));
    electron$1.ipcMain.handle(IPC_CHANNELS.RESUME_DOWNLOAD, (event, url2) => this.resumeDownload(url2));
    electron$1.ipcMain.handle(IPC_CHANNELS.CANCEL_DOWNLOAD, (event, url2) => this.cancelDownload(url2));
    electron$1.ipcMain.handle(IPC_CHANNELS.GET_ALL_DOWNLOADS, () => this.getAllDownloads());
    electron$1.ipcMain.handle(
      IPC_CHANNELS.DELETE_MODEL,
      (event, { filename, path: path2 }) => this.deleteModel(filename, path2)
    );
  }
};
__publicField(_DownloadManager, "instance");
let DownloadManager = _DownloadManager;
class Terminal {
  constructor(window2, cwd, uvPath) {
    __privateAdd(this, _Terminal_instances);
    __privateAdd(this, _pty);
    __privateAdd(this, _window);
    __privateAdd(this, _cwd);
    __privateAdd(this, _uvPath);
    __publicField(this, "sessionBuffer", []);
    __publicField(this, "size", { cols: 80, rows: 30 });
    __privateSet(this, _window, window2);
    __privateSet(this, _cwd, cwd);
    __privateSet(this, _uvPath, uvPath);
  }
  get pty() {
    __privateGet(this, _pty) ?? __privateSet(this, _pty, __privateMethod(this, _Terminal_instances, createPty_fn).call(this));
    return __privateGet(this, _pty);
  }
  write(data2) {
    this.pty.write(data2);
  }
  resize(cols, rows) {
    this.pty.resize(cols, rows);
    this.size.cols = cols;
    this.size.rows = rows;
  }
  restore() {
    return {
      buffer: this.sessionBuffer,
      size: this.size
    };
  }
}
_pty = new WeakMap();
_window = new WeakMap();
_cwd = new WeakMap();
_uvPath = new WeakMap();
_Terminal_instances = new WeakSet();
createPty_fn = function() {
  const window2 = __privateGet(this, _window);
  const debugging = process.env.NODE_DEBUG === "true";
  const shell = getDefaultShell();
  const instance2 = pty.spawn(shell, [], {
    useConpty: !debugging,
    handleFlowControl: false,
    conptyInheritCursor: false,
    name: "xterm",
    cols: this.size.cols,
    rows: this.size.rows,
    cwd: __privateGet(this, _cwd)
  });
  if (process.platform === "win32") {
    instance2.write(`function pip { & "${__privateGet(this, _uvPath)}" pip $args }${os$7.EOL}`);
  } else {
    instance2.write(`alias pip='"${__privateGet(this, _uvPath)}" pip'${os$7.EOL}`);
  }
  instance2.onData((data2) => {
    this.sessionBuffer.push(data2);
    window2.send(IPC_CHANNELS.TERMINAL_ON_OUTPUT, data2);
    if (this.sessionBuffer.length > 1e3) this.sessionBuffer.shift();
  });
  return instance2;
};
const ansiCodes = /[\u001B\u009B][#();?[]*(?:\d{1,4}(?:;\d{0,4})*)?[\d<=>A-ORZcf-nqry]/g;
function removeAnsiCodes(x) {
  return typeof x === "string" ? x.replaceAll(ansiCodes, "") : x;
}
function removeAnsiCodesTransform({ data: data2 }) {
  return data2.map((x) => removeAnsiCodes(x));
}
function replaceFileLoggingTransform(transports) {
  const { transforms } = transports.file;
  transforms.pop();
  transforms.push(formatForFileLogging);
}
function formatForFileLogging({ data: data2, transport }) {
  const inspectOptions = transport.inspectOptions ?? {};
  const formattableData = data2.map((item) => toFormattable(item));
  return util$2.formatWithOptions(inspectOptions, ...formattableData);
}
function toFormattable(item) {
  try {
    if (typeof item === "object" && item !== null) {
      if (item instanceof Error) return item.stack;
      if (item instanceof Date) return item.toISOString();
      return JSON.stringify(item, toStringifiable);
    }
  } catch {
  }
  return item;
}
function toStringifiable(_key, value) {
  if (value instanceof Map) return Object.fromEntries(value);
  if (value instanceof Set) return [...value];
  return value;
}
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc2(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp2(target, key, result);
  return result;
};
const _ComfyServer = (_c = class {
  constructor(basePath, serverArgs, virtualEnvironment, appWindow, telemetry2) {
    // Check every second
    /** The path to the ComfyUI main python script. */
    __publicField(this, "mainScriptPath", path$g.join(getAppResourcesPath(), "ComfyUI", "main.py"));
    /**
     * The path to the ComfyUI web root. This directory should host compiled
     * ComfyUI web assets.
     */
    __publicField(this, "webRootPath", path$g.join(getAppResourcesPath(), "ComfyUI", "web_custom_versions", "desktop_app"));
    __publicField(this, "userDirectoryPath");
    __publicField(this, "inputDirectoryPath");
    __publicField(this, "outputDirectoryPath");
    /** Whether the server failed to report started within the start timeout. */
    __publicField(this, "timedOutWhilstStarting", false);
    __publicField(this, "comfyServerProcess", null);
    this.basePath = basePath;
    this.serverArgs = serverArgs;
    this.virtualEnvironment = virtualEnvironment;
    this.appWindow = appWindow;
    this.telemetry = telemetry2;
    this.userDirectoryPath = path$g.join(this.basePath, "user");
    this.inputDirectoryPath = path$g.join(this.basePath, "input");
    this.outputDirectoryPath = path$g.join(this.basePath, "output");
  }
  /** Whether the server is expected to be running. */
  get isRunning() {
    return !!this.comfyServerProcess;
  }
  get baseUrl() {
    return `http://${this.serverArgs.listen}:${this.serverArgs.port}`;
  }
  /**
   * Core arguments to pass to the ComfyUI server to ensure electron app
   * works as expected.
   */
  get coreLaunchArgs() {
    return {
      "user-directory": this.userDirectoryPath,
      "input-directory": this.inputDirectoryPath,
      "output-directory": this.outputDirectoryPath,
      "front-end-root": this.webRootPath,
      "base-directory": this.basePath,
      "extra-model-paths-config": ComfyServerConfig.configPath,
      "log-stdout": ""
    };
  }
  /**
   * Builds CLI arguments from an object of key-value pairs.
   * @param args Object key-value pairs of CLI arguments.
   * @returns A string array of CLI arguments.
   */
  static buildLaunchArgs(args) {
    return Object.entries(args).flatMap(([key, value]) => [`--${key}`, value]).filter((value) => value !== "");
  }
  get launchArgs() {
    const args = _c.buildLaunchArgs({
      ...this.coreLaunchArgs,
      ...this.serverArgs
    });
    return [this.mainScriptPath, ...args];
  }
  async start() {
    if (this.isRunning) {
      const message = "ComfyUI server is already running";
      log$2.error(message);
      throw new Error(message);
    }
    ComfySettings.lockWrites();
    await ComfyServerConfig.addAppBundledCustomNodesToConfig();
    await rotateLogFiles(electron$1.app.getPath("logs"), LogFile.ComfyUI, 50);
    return new Promise((resolve3, reject) => {
      const comfyUILog = log$2.create({ logId: "comfyui" });
      comfyUILog.transports.file.fileName = LogFile.ComfyUI;
      comfyUILog.transports.file.transforms.unshift(removeAnsiCodesTransform);
      this.timedOutWhilstStarting = false;
      const comfyServerProcess = this.virtualEnvironment.runPythonCommand(this.launchArgs, {
        onStdout: (data2) => {
          comfyUILog.info(data2);
          this.appWindow.send(IPC_CHANNELS.LOG_MESSAGE, data2);
        },
        onStderr: (data2) => {
          comfyUILog.error(data2);
          this.appWindow.send(IPC_CHANNELS.LOG_MESSAGE, data2);
        }
      });
      const rejectOnError = (err) => {
        this.comfyServerProcess = null;
        log$2.error("Failed to start ComfyUI:", err);
        reject(err);
      };
      comfyServerProcess.on("error", rejectOnError);
      comfyServerProcess.on("exit", (code, signal) => {
        this.comfyServerProcess = null;
        if (code !== 0) {
          log$2.error(`Python process exited with code ${code} and signal ${signal}`);
          reject(new Error(`Python process exited with code ${code} and signal ${signal}`));
        } else {
          log$2.info(`Python process exited successfully`);
          resolve3();
        }
      });
      this.comfyServerProcess = comfyServerProcess;
      waitOn({
        resources: [`${this.baseUrl}/queue`],
        timeout: _c.MAX_FAIL_WAIT,
        interval: _c.CHECK_INTERVAL
      }).then(() => {
        log$2.info("Python server is ready");
        comfyServerProcess.off("error", rejectOnError);
        resolve3();
      }).catch((error) => {
        this.timedOutWhilstStarting = true;
        log$2.error("Server failed to start within timeout:", error);
        reject(new Error("Python server failed to start within timeout."));
      });
    });
  }
  async kill() {
    return new Promise((resolve3, reject) => {
      if (!this.comfyServerProcess) {
        log$2.info("No python server process to kill");
        resolve3();
        return;
      }
      log$2.info("Killing ComfyUI python server.");
      const timeout = setTimeout(() => {
        reject(new Error("Timeout: Python server did not exit within 10 seconds"));
      }, 1e4);
      this.comfyServerProcess.once("exit", () => {
        clearTimeout(timeout);
        resolve3();
      });
      const result = this.comfyServerProcess.kill();
      if (!result) {
        clearTimeout(timeout);
        reject(new Error("Failed to initiate kill signal for python server"));
      }
    });
  }
}, /**
 * The maximum amount of time to wait for the server to start.
 * Installing custom nodes dependencies like ffmpeg can take a long time,
 * so we need to give it a long timeout.
 */
__publicField(_c, "MAX_FAIL_WAIT", 30 * 60 * 1e3), // 30 minutes
/**
 * The interval to check if the server is ready.
 */
__publicField(_c, "CHECK_INTERVAL", 1e3), _c);
__decorateClass([
  trackEvent("comfyui:server_start")
], _ComfyServer.prototype, "start");
let ComfyServer = _ComfyServer;
class ComfyDesktopApp {
  // Only created after server starts.
  constructor(installation, appWindow, telemetry2) {
    __publicField(this, "comfyServer", null);
    __publicField(this, "terminal", null);
    this.installation = installation;
    this.appWindow = appWindow;
    this.telemetry = telemetry2;
    this.registerIPCHandlers();
    this.initializeTodesktop();
  }
  get basePath() {
    return this.installation.basePath;
  }
  get serverRunning() {
    var _a3;
    return ((_a3 = this.comfyServer) == null ? void 0 : _a3.isRunning) ?? false;
  }
  /**
   * Build the server args to launch ComfyUI server.
   * @param useExternalServer Whether to use an external server instead of starting one locally.
   * @param COMFY_HOST Override the listen address (host) for the ComfyUI server.
   * @param COMFY_PORT Override the port for the ComfyUI server.
   * @returns The server args for the ComfyUI server.
   */
  async buildServerArgs({ useExternalServer, COMFY_HOST, COMFY_PORT }) {
    const serverArgs = {
      listen: DEFAULT_SERVER_ARGS.listen,
      port: DEFAULT_SERVER_ARGS.port,
      ...useComfySettings().get("Comfy.Server.LaunchArgs")
    };
    if (COMFY_HOST) serverArgs.listen = COMFY_HOST;
    if (COMFY_PORT) serverArgs.port = COMFY_PORT;
    if (!useExternalServer) {
      const targetPort = Number(serverArgs.port);
      const port = await findAvailablePort(serverArgs.listen, targetPort, targetPort + 1e3);
      serverArgs.port = String(port);
    }
    return serverArgs;
  }
  initializeTodesktop() {
    log$2.debug("Initializing todesktop");
    todesktop.init({
      autoCheckInterval: 60 * 60 * 1e3,
      // every hour
      customLogger: log$2,
      updateReadyAction: { showInstallAndRestartPrompt: "always", showNotification: "always" },
      autoUpdater: useComfySettings().get("Comfy-Desktop.AutoUpdate")
    });
  }
  registerIPCHandlers() {
    electron$1.ipcMain.handle(IPC_CHANNELS.RESTART_CORE, async () => await this.restartComfyServer());
    electron$1.app.on("before-quit", () => {
      if (!this.comfyServer) return;
      log$2.info("Before-quit: Killing Python server");
      this.comfyServer.kill().catch((error) => {
        log$2.error("Python server did not exit properly", error);
      });
    });
  }
  /** Performs a process restart of the ComfyUI server. Does not discard instance / terminal. */
  async restartComfyServer() {
    if (!this.comfyServer) return false;
    await this.comfyServer.kill();
    await this.comfyServer.start();
    return true;
  }
  async startComfyServer(serverArgs) {
    var _a3;
    log$2.info("Server start");
    if (!this.appWindow.isOnPage("server-start")) {
      await this.appWindow.loadPage("server-start");
    }
    DownloadManager.getInstance(this.appWindow, getModelsDirectory(this.basePath));
    const { virtualEnvironment } = this.installation;
    if ((_a3 = this.comfyServer) == null ? void 0 : _a3.isRunning) {
      log$2.error("ComfyUI server is already running");
      throw new Error("ComfyUI server is already running");
    }
    this.appWindow.sendServerStartProgress(ProgressStatus.STARTING_SERVER);
    this.comfyServer ?? (this.comfyServer = new ComfyServer(this.basePath, serverArgs, virtualEnvironment, this.appWindow, this.telemetry));
    await this.comfyServer.start();
    this.initializeTerminal(virtualEnvironment);
  }
  async stopComfyServer() {
    const { comfyServer } = this;
    if (!comfyServer) return;
    if (comfyServer.isRunning) await comfyServer.kill();
    this.comfyServer = null;
  }
  initializeTerminal(virtualEnvironment) {
    if (this.terminal) {
      try {
        this.terminal.pty.kill();
      } catch {
      }
    }
    this.terminal = new Terminal(this.appWindow, this.basePath, virtualEnvironment.uvPath);
    this.terminal.write(virtualEnvironment.activateEnvironmentCommand());
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.TERMINAL_WRITE);
    electron$1.ipcMain.handle(IPC_CHANNELS.TERMINAL_WRITE, (_event, command) => {
      var _a3;
      (_a3 = this.terminal) == null ? void 0 : _a3.write(command);
    });
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.TERMINAL_RESIZE);
    electron$1.ipcMain.handle(IPC_CHANNELS.TERMINAL_RESIZE, (_event, cols, rows) => {
      var _a3;
      (_a3 = this.terminal) == null ? void 0 : _a3.resize(cols, rows);
    });
    electron$1.ipcMain.removeHandler(IPC_CHANNELS.TERMINAL_RESTORE);
    electron$1.ipcMain.handle(IPC_CHANNELS.TERMINAL_RESTORE, () => {
      var _a3;
      return (_a3 = this.terminal) == null ? void 0 : _a3.restore();
    });
  }
}
class DesktopApp {
  constructor(overrides2, config) {
    __publicField(this, "telemetry", getTelemetry());
    __publicField(this, "appState", useAppState());
    __publicField(this, "appWindow", new AppWindow());
    __publicField(this, "comfyDesktopApp");
    __publicField(this, "installation");
    this.overrides = overrides2;
    this.config = config;
  }
  /** Load start screen - basic spinner */
  async showLoadingPage() {
    try {
      await this.appWindow.loadPage("desktop-start");
    } catch (error) {
      DesktopApp.fatalError({
        error,
        message: `Unknown error whilst loading start screen.

${error}`,
        title: "Startup failed"
      });
    }
  }
  async initializeTelemetry(installation) {
    await SentryLogging$1.setSentryGpuContext();
    SentryLogging$1.getBasePath = () => installation.basePath;
    const allowMetrics = await promptMetricsConsent(this.config, this.appWindow);
    this.telemetry.hasConsent = allowMetrics;
    if (allowMetrics) this.telemetry.flush();
  }
  /**
   * Install / validate installation is complete
   * @returns The installation if it is complete, otherwise `undefined` (error page).
   * @throws Rethrows any errors when the installation fails before the app has set the current page.
   */
  async initializeInstallation() {
    const { appWindow } = this;
    try {
      const installManager = new InstallationManager(appWindow, this.telemetry);
      return await installManager.ensureInstalled();
    } catch (error) {
      if (this.appState.currentPage !== "desktop-start") {
        appWindow.sendServerStartProgress(ProgressStatus.ERROR);
        appWindow.send(IPC_CHANNELS.LOG_MESSAGE, `${error}
`);
      } else {
        throw error;
      }
    }
  }
  async start() {
    const { appState: appState2, appWindow, overrides: overrides2, telemetry: telemetry2 } = this;
    if (!appState2.ipcRegistered) this.registerIpcHandlers();
    const installation = await this.initializeInstallation();
    if (!installation) return;
    this.installation = installation;
    await this.initializeTelemetry(installation);
    try {
      this.comfyDesktopApp ?? (this.comfyDesktopApp = new ComfyDesktopApp(installation, appWindow, telemetry2));
      const { comfyDesktopApp } = this;
      const serverArgs = await comfyDesktopApp.buildServerArgs(overrides2);
      if (!overrides2.useExternalServer && !comfyDesktopApp.serverRunning) {
        try {
          await comfyDesktopApp.startComfyServer(serverArgs);
        } catch (error) {
          log$2.error("Unhandled exception during server start", error);
          appWindow.send(IPC_CHANNELS.LOG_MESSAGE, `${error}
`);
          appWindow.sendServerStartProgress(ProgressStatus.ERROR);
          return;
        }
      }
      appWindow.sendServerStartProgress(ProgressStatus.READY);
      await appWindow.loadComfyUI(serverArgs);
      appState2.emitLoaded();
    } catch (error) {
      log$2.error("Unhandled exception during app startup", error);
      appWindow.sendServerStartProgress(ProgressStatus.ERROR);
      appWindow.send(IPC_CHANNELS.LOG_MESSAGE, `${error}
`);
      if (!this.appState.isQuitting) {
        electron$1.dialog.showErrorBox(
          "Unhandled exception",
          `An unexpected error occurred whilst starting the app, and it needs to be closed.

Error message:

${error}`
        );
        electron$1.app.quit();
      }
    }
  }
  registerIpcHandlers() {
    this.appState.emitIpcRegistered();
    try {
      registerPathHandlers();
      registerNetworkHandlers();
      registerAppInfoHandlers();
      registerAppHandlers();
      registerGpuHandlers();
      electron$1.ipcMain.handle(IPC_CHANNELS.START_TROUBLESHOOTING, async () => await this.showTroubleshootingPage());
    } catch (error) {
      DesktopApp.fatalError({
        error,
        message: "Fatal error occurred during app pre-startup.",
        title: "Startup failed",
        exitCode: 2024
      });
    }
  }
  async showTroubleshootingPage() {
    try {
      var _stack = [];
      try {
        if (!this.installation) throw new Error("Cannot troubleshoot before installation is complete.");
        const troubleshooting = __using(_stack, new Troubleshooting(this.installation, this.appWindow));
        if (!this.appState.loaded) {
          await this.appWindow.loadPage("maintenance");
        }
        await new Promise((resolve3) => electron$1.ipcMain.handleOnce(IPC_CHANNELS.COMPLETE_VALIDATION, resolve3));
      } catch (_) {
        var _error = _, _hasError = true;
      } finally {
        __callDispose(_stack, _error, _hasError);
      }
    } catch (error) {
      DesktopApp.fatalError({
        error,
        message: `An error was detected, but the troubleshooting page could not be loaded. The app will close now. Please reinstall if this issue persists.`,
        title: "Critical error",
        exitCode: 2001
      });
    }
    await this.start();
  }
  /**
   * Quits the app gracefully after a fatal error.  Exits immediately if a code is provided.
   *
   * Logs the error and shows an error dialog to the user.
   * @param options - The options for the error.
   */
  static fatalError({ message, error, title, logMessage, exitCode }) {
    const _error = FatalError.wrapIfGeneric(error);
    log$2.error(logMessage ?? message, _error);
    if (title && message) electron$1.dialog.showErrorBox(title, message);
    if (exitCode) electron$1.app.exit(exitCode);
    else electron$1.app.quit();
    throw _error;
  }
}
class DevOverrides {
  constructor() {
    /** The host to use for the ComfyUI server. */
    __publicField(this, "COMFY_HOST");
    /** The port to use for the ComfyUI server. */
    __publicField(this, "COMFY_PORT");
    /** The URL of the development server to use. */
    __publicField(this, "DEV_SERVER_URL");
    /** Whether to use an external server instead of starting one locally. */
    __publicField(this, "USE_EXTERNAL_SERVER");
    /** When DEV_SERVER_URL is set, whether to automatically open dev tools on app start. */
    __publicField(this, "DEV_TOOLS_AUTO");
    /** Send events to Sentry */
    __publicField(this, "SENTRY_ENABLED");
    if (electron$1.app.commandLine.hasSwitch("dev-mode") || !electron$1.app.isPackaged) {
      log$2.info("Developer environment variable overrides enabled.");
      this.DEV_SERVER_URL = process.env.DEV_SERVER_URL;
      this.COMFY_HOST = process.env.COMFY_HOST;
      this.COMFY_PORT = process.env.COMFY_PORT;
      this.USE_EXTERNAL_SERVER = process.env.USE_EXTERNAL_SERVER;
      this.DEV_TOOLS_AUTO = process.env.DEV_TOOLS_AUTO;
      this.SENTRY_ENABLED = process.env.SENTRY_ENABLED;
    }
  }
  get useExternalServer() {
    return this.USE_EXTERNAL_SERVER === "true";
  }
}
dotenv.config();
initalizeLogging();
const telemetry = getTelemetry();
initializeAppState();
const overrides = new DevOverrides();
quitWhenAllWindowsAreClosed();
trackAppQuitEvents();
initializeSentry();
const gotTheLock = electron$1.app.requestSingleInstanceLock();
if (!gotTheLock) {
  log$2.info("App already running. Exiting...");
  electron$1.app.quit();
} else {
  startApp().catch((error) => {
    log$2.error("Unhandled exception in app startup", error);
    electron$1.app.exit(2020);
  });
}
async function startApp() {
  await new Promise((resolve3) => electron$1.app.once("ready", () => resolve3()));
  await rotateLogFiles(electron$1.app.getPath("logs"), LogFile.Main, 50);
  log$2.debug("App ready");
  telemetry.registerHandlers();
  telemetry.track("desktop:app_ready");
  const config = await DesktopConfig.load(electron$1.shell);
  if (!config) {
    DesktopApp.fatalError({
      message: "Unknown error loading app config on startup.",
      title: "User Data",
      exitCode: 20
    });
  }
  telemetry.loadGenerationCount(config);
  if (process.env.VUE_DEVTOOLS_PATH) {
    try {
      await electron$1.session.defaultSession.loadExtension(process.env.VUE_DEVTOOLS_PATH);
    } catch (error) {
      log$2.error("Error loading Vue DevTools extension", error);
    }
  }
  const desktopApp = new DesktopApp(overrides, config);
  await desktopApp.showLoadingPage();
  await desktopApp.start();
}
function initalizeLogging() {
  log$2.initialize();
  log$2.transports.file.level = process.env.LOG_LEVEL ?? "info";
  log$2.transports.file.transforms.unshift(removeAnsiCodesTransform);
  replaceFileLoggingTransform(log$2.transports);
  process.env.__COMFYUI_DESKTOP_VERSION__ = electron$1.app.getVersion();
  log$2.info(`Starting app v${electron$1.app.getVersion()}`);
}
function quitWhenAllWindowsAreClosed() {
  electron$1.app.on("window-all-closed", () => {
    log$2.info("Quitting ComfyUI because window all closed");
    electron$1.app.quit();
  });
}
function trackAppQuitEvents() {
  electron$1.app.on("quit", (event, exitCode) => {
    telemetry.track("desktop:app_quit", {
      reason: event,
      exitCode
    });
  });
}
function initializeSentry() {
  log$2.verbose("Initializing Sentry");
  SentryLogging$1.init();
}
//# sourceMappingURL=main.cjs.map
