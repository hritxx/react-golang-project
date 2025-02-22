var rd = (e, t, r) => {
  if (!t.has(e)) throw TypeError("Cannot " + r);
};
var S = (e, t, r) => (
    rd(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  L = (e, t, r) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  F = (e, t, r, n) => (
    rd(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r
  );
var rl = (e, t, r, n) => ({
    set _(i) {
      F(e, t, i, r);
    },
    get _() {
      return S(e, t, n);
    },
  }),
  H = (e, t, r) => (rd(e, t, "access private method"), r);
function yC(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o);
  }
})();
var nl =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Qh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var i1 = { exports: {} },
  rc = {},
  o1 = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma = Symbol.for("react.element"),
  bC = Symbol.for("react.portal"),
  SC = Symbol.for("react.fragment"),
  xC = Symbol.for("react.strict_mode"),
  wC = Symbol.for("react.profiler"),
  kC = Symbol.for("react.provider"),
  CC = Symbol.for("react.context"),
  TC = Symbol.for("react.forward_ref"),
  _C = Symbol.for("react.suspense"),
  PC = Symbol.for("react.memo"),
  EC = Symbol.for("react.lazy"),
  pg = Symbol.iterator;
function $C(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pg && e[pg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var s1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  a1 = Object.assign,
  l1 = {};
function No(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = l1),
    (this.updater = r || s1);
}
No.prototype.isReactComponent = {};
No.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
No.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function u1() {}
u1.prototype = No.prototype;
function qh(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = l1),
    (this.updater = r || s1);
}
var Yh = (qh.prototype = new u1());
Yh.constructor = qh;
a1(Yh, No.prototype);
Yh.isPureReactComponent = !0;
var mg = Array.isArray,
  c1 = Object.prototype.hasOwnProperty,
  Xh = { current: null },
  d1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function f1(e, t, r) {
  var n,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      c1.call(t, n) && !d1.hasOwnProperty(n) && (i[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) i[n] === void 0 && (i[n] = a[n]);
  return {
    $$typeof: Ma,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Xh.current,
  };
}
function RC(e, t) {
  return {
    $$typeof: Ma,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ma;
}
function AC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var gg = /\/+/g;
function nd(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? AC("" + e.key)
    : t.toString(36);
}
function Fl(e, t, r, n, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ma:
          case bC:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = n === "" ? "." + nd(s, 0) : n),
      mg(i)
        ? ((r = ""),
          e != null && (r = e.replace(gg, "$&/") + "/"),
          Fl(i, t, r, "", function (u) {
            return u;
          }))
        : i != null &&
          (Zh(i) &&
            (i = RC(
              i,
              r +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gg, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (n = n === "" ? "." : n + ":"), mg(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = n + nd(o, a);
      s += Fl(o, t, r, l, i);
    }
  else if (((l = $C(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = n + nd(o, a++)), (s += Fl(o, t, r, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function il(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    Fl(e, n, "", "", function (o) {
      return t.call(r, o, i++);
    }),
    n
  );
}
function zC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ut = { current: null },
  Ol = { transition: null },
  MC = {
    ReactCurrentDispatcher: ut,
    ReactCurrentBatchConfig: Ol,
    ReactCurrentOwner: Xh,
  };
function h1() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: il,
  forEach: function (e, t, r) {
    il(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      il(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      il(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Zh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = No;
K.Fragment = SC;
K.Profiler = wC;
K.PureComponent = qh;
K.StrictMode = xC;
K.Suspense = _C;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = MC;
K.act = h1;
K.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = a1({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Xh.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      c1.call(t, l) &&
        !d1.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Ma, type: e.type, key: i, ref: o, props: n, _owner: s };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: CC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: kC, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = f1;
K.createFactory = function (e) {
  var t = f1.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: TC, render: e };
};
K.isValidElement = Zh;
K.lazy = function (e) {
  return { $$typeof: EC, _payload: { _status: -1, _result: e }, _init: zC };
};
K.memo = function (e, t) {
  return { $$typeof: PC, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Ol.transition;
  Ol.transition = {};
  try {
    e();
  } finally {
    Ol.transition = t;
  }
};
K.unstable_act = h1;
K.useCallback = function (e, t) {
  return ut.current.useCallback(e, t);
};
K.useContext = function (e) {
  return ut.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return ut.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return ut.current.useEffect(e, t);
};
K.useId = function () {
  return ut.current.useId();
};
K.useImperativeHandle = function (e, t, r) {
  return ut.current.useImperativeHandle(e, t, r);
};
K.useInsertionEffect = function (e, t) {
  return ut.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return ut.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return ut.current.useMemo(e, t);
};
K.useReducer = function (e, t, r) {
  return ut.current.useReducer(e, t, r);
};
K.useRef = function (e) {
  return ut.current.useRef(e);
};
K.useState = function (e) {
  return ut.current.useState(e);
};
K.useSyncExternalStore = function (e, t, r) {
  return ut.current.useSyncExternalStore(e, t, r);
};
K.useTransition = function () {
  return ut.current.useTransition();
};
K.version = "18.3.1";
o1.exports = K;
var T = o1.exports;
const tr = Qh(T),
  vg = yC({ __proto__: null, default: tr }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var FC = T,
  OC = Symbol.for("react.element"),
  DC = Symbol.for("react.fragment"),
  jC = Object.prototype.hasOwnProperty,
  IC = FC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  LC = { key: !0, ref: !0, __self: !0, __source: !0 };
function p1(e, t, r) {
  var n,
    i = {},
    o = null,
    s = null;
  r !== void 0 && (o = "" + r),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (n in t) jC.call(t, n) && !LC.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: OC,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: IC.current,
  };
}
rc.Fragment = DC;
rc.jsx = p1;
rc.jsxs = p1;
i1.exports = rc;
var _ = i1.exports,
  df = {},
  m1 = { exports: {} },
  Rt = {},
  g1 = { exports: {} },
  v1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, W) {
    var U = M.length;
    M.push(W);
    e: for (; 0 < U; ) {
      var ge = (U - 1) >>> 1,
        Pe = M[ge];
      if (0 < i(Pe, W)) (M[ge] = W), (M[U] = Pe), (U = ge);
      else break e;
    }
  }
  function r(M) {
    return M.length === 0 ? null : M[0];
  }
  function n(M) {
    if (M.length === 0) return null;
    var W = M[0],
      U = M.pop();
    if (U !== W) {
      M[0] = U;
      e: for (var ge = 0, Pe = M.length, re = Pe >>> 1; ge < re; ) {
        var sr = 2 * (ge + 1) - 1,
          Qo = M[sr],
          St = sr + 1,
          Wn = M[St];
        if (0 > i(Qo, U))
          St < Pe && 0 > i(Wn, Qo)
            ? ((M[ge] = Wn), (M[St] = U), (ge = St))
            : ((M[ge] = Qo), (M[sr] = U), (ge = sr));
        else if (St < Pe && 0 > i(Wn, U)) (M[ge] = Wn), (M[St] = U), (ge = St);
        else break e;
      }
    }
    return W;
  }
  function i(M, W) {
    var U = M.sortIndex - W.sortIndex;
    return U !== 0 ? U : M.id - W.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    b = !1,
    y = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var W = r(u); W !== null; ) {
      if (W.callback === null) n(u);
      else if (W.startTime <= M)
        n(u), (W.sortIndex = W.expirationTime), t(l, W);
      else break;
      W = r(u);
    }
  }
  function C(M) {
    if (((y = !1), g(M), !b))
      if (r(l) !== null) (b = !0), tt(P);
      else {
        var W = r(u);
        W !== null && Tr(C, W.startTime - M);
      }
  }
  function P(M, W) {
    (b = !1), y && ((y = !1), p($), ($ = -1)), (m = !0);
    var U = f;
    try {
      for (
        g(W), d = r(l);
        d !== null && (!(d.expirationTime > W) || (M && !xe()));

      ) {
        var ge = d.callback;
        if (typeof ge == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Pe = ge(d.expirationTime <= W);
          (W = e.unstable_now()),
            typeof Pe == "function" ? (d.callback = Pe) : d === r(l) && n(l),
            g(W);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var re = !0;
      else {
        var sr = r(u);
        sr !== null && Tr(C, sr.startTime - W), (re = !1);
      }
      return re;
    } finally {
      (d = null), (f = U), (m = !1);
    }
  }
  var A = !1,
    R = null,
    $ = -1,
    O = 5,
    j = -1;
  function xe() {
    return !(e.unstable_now() - j < O);
  }
  function or() {
    if (R !== null) {
      var M = e.unstable_now();
      j = M;
      var W = !0;
      try {
        W = R(!0, M);
      } finally {
        W ? Cr() : ((A = !1), (R = null));
      }
    } else A = !1;
  }
  var Cr;
  if (typeof h == "function")
    Cr = function () {
      h(or);
    };
  else if (typeof MessageChannel < "u") {
    var Nn = new MessageChannel(),
      Re = Nn.port2;
    (Nn.port1.onmessage = or),
      (Cr = function () {
        Re.postMessage(null);
      });
  } else
    Cr = function () {
      k(or, 0);
    };
  function tt(M) {
    (R = M), A || ((A = !0), Cr());
  }
  function Tr(M, W) {
    $ = k(function () {
      M(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || m || ((b = !0), tt(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = f;
      }
      var U = f;
      f = W;
      try {
        return M();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, W) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var U = f;
      f = M;
      try {
        return W();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (M, W, U) {
      var ge = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? ge + U : ge))
          : (U = ge),
        M)
      ) {
        case 1:
          var Pe = -1;
          break;
        case 2:
          Pe = 250;
          break;
        case 5:
          Pe = 1073741823;
          break;
        case 4:
          Pe = 1e4;
          break;
        default:
          Pe = 5e3;
      }
      return (
        (Pe = U + Pe),
        (M = {
          id: c++,
          callback: W,
          priorityLevel: M,
          startTime: U,
          expirationTime: Pe,
          sortIndex: -1,
        }),
        U > ge
          ? ((M.sortIndex = U),
            t(u, M),
            r(l) === null &&
              M === r(u) &&
              (y ? (p($), ($ = -1)) : (y = !0), Tr(C, U - ge)))
          : ((M.sortIndex = Pe), t(l, M), b || m || ((b = !0), tt(P))),
        M
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (M) {
      var W = f;
      return function () {
        var U = f;
        f = W;
        try {
          return M.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(v1);
g1.exports = v1;
var BC = g1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var VC = T,
  Et = BC;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var y1 = new Set(),
  Us = {};
function Ei(e, t) {
  Ro(e, t), Ro(e + "Capture", t);
}
function Ro(e, t) {
  for (Us[e] = t, e = 0; e < t.length; e++) y1.add(t[e]);
}
var Ur = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ff = Object.prototype.hasOwnProperty,
  NC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yg = {},
  bg = {};
function WC(e) {
  return ff.call(bg, e)
    ? !0
    : ff.call(yg, e)
    ? !1
    : NC.test(e)
    ? (bg[e] = !0)
    : ((yg[e] = !0), !1);
}
function UC(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function HC(e, t, r, n) {
  if (t === null || typeof t > "u" || UC(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ct(e, t, r, n, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new ct(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jh = /[\-:]([a-z])/g;
function ep(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jh, ep);
    Ue[t] = new ct(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Jh, ep);
    Ue[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Jh, ep);
  Ue[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new ct(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function tp(e, t, r, n) {
  var i = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (HC(t, r, i, n) && (r = null),
    n || i === null
      ? WC(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var qr = VC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ol = Symbol.for("react.element"),
  Di = Symbol.for("react.portal"),
  ji = Symbol.for("react.fragment"),
  rp = Symbol.for("react.strict_mode"),
  hf = Symbol.for("react.profiler"),
  b1 = Symbol.for("react.provider"),
  S1 = Symbol.for("react.context"),
  np = Symbol.for("react.forward_ref"),
  pf = Symbol.for("react.suspense"),
  mf = Symbol.for("react.suspense_list"),
  ip = Symbol.for("react.memo"),
  on = Symbol.for("react.lazy"),
  x1 = Symbol.for("react.offscreen"),
  Sg = Symbol.iterator;
function Jo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sg && e[Sg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Se = Object.assign,
  id;
function fs(e) {
  if (id === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      id = (t && t[1]) || "";
    }
  return (
    `
` +
    id +
    e
  );
}
var od = !1;
function sd(e, t) {
  if (!e || od) return "";
  od = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = n.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (od = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? fs(e) : "";
}
function KC(e) {
  switch (e.tag) {
    case 5:
      return fs(e.type);
    case 16:
      return fs("Lazy");
    case 13:
      return fs("Suspense");
    case 19:
      return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = sd(e.type, !1)), e;
    case 11:
      return (e = sd(e.type.render, !1)), e;
    case 1:
      return (e = sd(e.type, !0)), e;
    default:
      return "";
  }
}
function gf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ji:
      return "Fragment";
    case Di:
      return "Portal";
    case hf:
      return "Profiler";
    case rp:
      return "StrictMode";
    case pf:
      return "Suspense";
    case mf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case S1:
        return (e.displayName || "Context") + ".Consumer";
      case b1:
        return (e._context.displayName || "Context") + ".Provider";
      case np:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ip:
        return (
          (t = e.displayName || null), t !== null ? t : gf(e.type) || "Memo"
        );
      case on:
        (t = e._payload), (e = e._init);
        try {
          return gf(e(t));
        } catch {}
    }
  return null;
}
function GC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gf(t);
    case 8:
      return t === rp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function w1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function QC(e) {
  var t = w1(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (n = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (s) {
          n = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sl(e) {
  e._valueTracker || (e._valueTracker = QC(e));
}
function k1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = w1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function uu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vf(e, t) {
  var r = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function xg(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = zn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function C1(e, t) {
  (t = t.checked), t != null && tp(e, "checked", t, !1);
}
function yf(e, t) {
  C1(e, t);
  var r = zn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bf(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && bf(e, t.type, zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function wg(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function bf(e, t, r) {
  (t !== "number" || uu(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var hs = Array.isArray;
function io(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + zn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function kg(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(z(92));
      if (hs(r)) {
        if (1 < r.length) throw Error(z(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: zn(r) };
}
function T1(e, t) {
  var r = zn(t.value),
    n = zn(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Cg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var al,
  P1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        al = al || document.createElement("div"),
          al.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = al.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hs(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cs).forEach(function (e) {
  qC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cs[t] = Cs[e]);
  });
});
function E1(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Cs.hasOwnProperty(e) && Cs[e])
    ? ("" + t).trim()
    : t + "px";
}
function $1(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = E1(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var YC = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wf(e, t) {
  if (t) {
    if (YC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function kf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Cf = null;
function op(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tf = null,
  oo = null,
  so = null;
function Tg(e) {
  if ((e = Da(e))) {
    if (typeof Tf != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = ac(t)), Tf(e.stateNode, e.type, t));
  }
}
function R1(e) {
  oo ? (so ? so.push(e) : (so = [e])) : (oo = e);
}
function A1() {
  if (oo) {
    var e = oo,
      t = so;
    if (((so = oo = null), Tg(e), t)) for (e = 0; e < t.length; e++) Tg(t[e]);
  }
}
function z1(e, t) {
  return e(t);
}
function M1() {}
var ad = !1;
function F1(e, t, r) {
  if (ad) return e(t, r);
  ad = !0;
  try {
    return z1(e, t, r);
  } finally {
    (ad = !1), (oo !== null || so !== null) && (M1(), A1());
  }
}
function Ks(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ac(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(z(231, t, typeof r));
  return r;
}
var _f = !1;
if (Ur)
  try {
    var es = {};
    Object.defineProperty(es, "passive", {
      get: function () {
        _f = !0;
      },
    }),
      window.addEventListener("test", es, es),
      window.removeEventListener("test", es, es);
  } catch {
    _f = !1;
  }
function XC(e, t, r, n, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ts = !1,
  cu = null,
  du = !1,
  Pf = null,
  ZC = {
    onError: function (e) {
      (Ts = !0), (cu = e);
    },
  };
function JC(e, t, r, n, i, o, s, a, l) {
  (Ts = !1), (cu = null), XC.apply(ZC, arguments);
}
function e2(e, t, r, n, i, o, s, a, l) {
  if ((JC.apply(this, arguments), Ts)) {
    if (Ts) {
      var u = cu;
      (Ts = !1), (cu = null);
    } else throw Error(z(198));
    du || ((du = !0), (Pf = u));
  }
}
function $i(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function O1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _g(e) {
  if ($i(e) !== e) throw Error(z(188));
}
function t2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $i(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return _g(i), e;
        if (o === n) return _g(i), t;
        o = o.sibling;
      }
      throw Error(z(188));
    }
    if (r.return !== n.return) (r = i), (n = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(z(189));
      }
    }
    if (r.alternate !== n) throw Error(z(190));
  }
  if (r.tag !== 3) throw Error(z(188));
  return r.stateNode.current === r ? e : t;
}
function D1(e) {
  return (e = t2(e)), e !== null ? j1(e) : null;
}
function j1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = j1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var I1 = Et.unstable_scheduleCallback,
  Pg = Et.unstable_cancelCallback,
  r2 = Et.unstable_shouldYield,
  n2 = Et.unstable_requestPaint,
  Te = Et.unstable_now,
  i2 = Et.unstable_getCurrentPriorityLevel,
  sp = Et.unstable_ImmediatePriority,
  L1 = Et.unstable_UserBlockingPriority,
  fu = Et.unstable_NormalPriority,
  o2 = Et.unstable_LowPriority,
  B1 = Et.unstable_IdlePriority,
  nc = null,
  br = null;
function s2(e) {
  if (br && typeof br.onCommitFiberRoot == "function")
    try {
      br.onCommitFiberRoot(nc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rr = Math.clz32 ? Math.clz32 : u2,
  a2 = Math.log,
  l2 = Math.LN2;
function u2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((a2(e) / l2) | 0)) | 0;
}
var ll = 64,
  ul = 4194304;
function ps(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hu(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = r & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (n = ps(a)) : ((o &= s), o !== 0 && (n = ps(o)));
  } else (s = r & ~i), s !== 0 ? (n = ps(s)) : o !== 0 && (n = ps(o));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - rr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function c2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function d2(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - rr(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & r) || a & n) && (i[s] = c2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ef(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function V1() {
  var e = ll;
  return (ll <<= 1), !(ll & 4194240) && (ll = 64), e;
}
function ld(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Fa(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rr(t)),
    (e[t] = r);
}
function f2(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - rr(r),
      o = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
  }
}
function ap(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - rr(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var ne = 0;
function N1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var W1,
  lp,
  U1,
  H1,
  K1,
  $f = !1,
  cl = [],
  wn = null,
  kn = null,
  Cn = null,
  Gs = new Map(),
  Qs = new Map(),
  ln = [],
  h2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Eg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wn = null;
      break;
    case "dragenter":
    case "dragleave":
      kn = null;
      break;
    case "mouseover":
    case "mouseout":
      Cn = null;
      break;
    case "pointerover":
    case "pointerout":
      Gs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qs.delete(t.pointerId);
  }
}
function ts(e, t, r, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Da(t)), t !== null && lp(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function p2(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (wn = ts(wn, e, t, r, n, i)), !0;
    case "dragenter":
      return (kn = ts(kn, e, t, r, n, i)), !0;
    case "mouseover":
      return (Cn = ts(Cn, e, t, r, n, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Gs.set(o, ts(Gs.get(o) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Qs.set(o, ts(Qs.get(o) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function G1(e) {
  var t = ti(e.target);
  if (t !== null) {
    var r = $i(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = O1(r)), t !== null)) {
          (e.blockedOn = t),
            K1(e.priority, function () {
              U1(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Rf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Cf = n), r.target.dispatchEvent(n), (Cf = null);
    } else return (t = Da(r)), t !== null && lp(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function $g(e, t, r) {
  Dl(e) && r.delete(t);
}
function m2() {
  ($f = !1),
    wn !== null && Dl(wn) && (wn = null),
    kn !== null && Dl(kn) && (kn = null),
    Cn !== null && Dl(Cn) && (Cn = null),
    Gs.forEach($g),
    Qs.forEach($g);
}
function rs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $f ||
      (($f = !0),
      Et.unstable_scheduleCallback(Et.unstable_NormalPriority, m2)));
}
function qs(e) {
  function t(i) {
    return rs(i, e);
  }
  if (0 < cl.length) {
    rs(cl[0], e);
    for (var r = 1; r < cl.length; r++) {
      var n = cl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    wn !== null && rs(wn, e),
      kn !== null && rs(kn, e),
      Cn !== null && rs(Cn, e),
      Gs.forEach(t),
      Qs.forEach(t),
      r = 0;
    r < ln.length;
    r++
  )
    (n = ln[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < ln.length && ((r = ln[0]), r.blockedOn === null); )
    G1(r), r.blockedOn === null && ln.shift();
}
var ao = qr.ReactCurrentBatchConfig,
  pu = !0;
function g2(e, t, r, n) {
  var i = ne,
    o = ao.transition;
  ao.transition = null;
  try {
    (ne = 1), up(e, t, r, n);
  } finally {
    (ne = i), (ao.transition = o);
  }
}
function v2(e, t, r, n) {
  var i = ne,
    o = ao.transition;
  ao.transition = null;
  try {
    (ne = 4), up(e, t, r, n);
  } finally {
    (ne = i), (ao.transition = o);
  }
}
function up(e, t, r, n) {
  if (pu) {
    var i = Rf(e, t, r, n);
    if (i === null) yd(e, t, n, mu, r), Eg(e, n);
    else if (p2(i, e, t, r, n)) n.stopPropagation();
    else if ((Eg(e, n), t & 4 && -1 < h2.indexOf(e))) {
      for (; i !== null; ) {
        var o = Da(i);
        if (
          (o !== null && W1(o),
          (o = Rf(e, t, r, n)),
          o === null && yd(e, t, n, mu, r),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else yd(e, t, n, null, r);
  }
}
var mu = null;
function Rf(e, t, r, n) {
  if (((mu = null), (e = op(n)), (e = ti(e)), e !== null))
    if (((t = $i(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = O1(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (mu = e), null;
}
function Q1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (i2()) {
        case sp:
          return 1;
        case L1:
          return 4;
        case fu:
        case o2:
          return 16;
        case B1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bn = null,
  cp = null,
  jl = null;
function q1() {
  if (jl) return jl;
  var e,
    t = cp,
    r = t.length,
    n,
    i = "value" in bn ? bn.value : bn.textContent,
    o = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var s = r - e;
  for (n = 1; n <= s && t[r - n] === i[o - n]; n++);
  return (jl = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Il(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dl() {
  return !0;
}
function Rg() {
  return !1;
}
function At(e) {
  function t(r, n, i, o, s) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? dl
        : Rg),
      (this.isPropagationStopped = Rg),
      this
    );
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = dl));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = dl));
      },
      persist: function () {},
      isPersistent: dl,
    }),
    t
  );
}
var Wo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  dp = At(Wo),
  Oa = Se({}, Wo, { view: 0, detail: 0 }),
  y2 = At(Oa),
  ud,
  cd,
  ns,
  ic = Se({}, Oa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ns &&
            (ns && e.type === "mousemove"
              ? ((ud = e.screenX - ns.screenX), (cd = e.screenY - ns.screenY))
              : (cd = ud = 0),
            (ns = e)),
          ud);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : cd;
    },
  }),
  Ag = At(ic),
  b2 = Se({}, ic, { dataTransfer: 0 }),
  S2 = At(b2),
  x2 = Se({}, Oa, { relatedTarget: 0 }),
  dd = At(x2),
  w2 = Se({}, Wo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  k2 = At(w2),
  C2 = Se({}, Wo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  T2 = At(C2),
  _2 = Se({}, Wo, { data: 0 }),
  zg = At(_2),
  P2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  E2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function R2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $2[e]) ? !!t[e] : !1;
}
function fp() {
  return R2;
}
var A2 = Se({}, Oa, {
    key: function (e) {
      if (e.key) {
        var t = P2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Il(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? E2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fp,
    charCode: function (e) {
      return e.type === "keypress" ? Il(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Il(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  z2 = At(A2),
  M2 = Se({}, ic, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Mg = At(M2),
  F2 = Se({}, Oa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fp,
  }),
  O2 = At(F2),
  D2 = Se({}, Wo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  j2 = At(D2),
  I2 = Se({}, ic, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  L2 = At(I2),
  B2 = [9, 13, 27, 32],
  hp = Ur && "CompositionEvent" in window,
  _s = null;
Ur && "documentMode" in document && (_s = document.documentMode);
var V2 = Ur && "TextEvent" in window && !_s,
  Y1 = Ur && (!hp || (_s && 8 < _s && 11 >= _s)),
  Fg = " ",
  Og = !1;
function X1(e, t) {
  switch (e) {
    case "keyup":
      return B2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Z1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ii = !1;
function N2(e, t) {
  switch (e) {
    case "compositionend":
      return Z1(t);
    case "keypress":
      return t.which !== 32 ? null : ((Og = !0), Fg);
    case "textInput":
      return (e = t.data), e === Fg && Og ? null : e;
    default:
      return null;
  }
}
function W2(e, t) {
  if (Ii)
    return e === "compositionend" || (!hp && X1(e, t))
      ? ((e = q1()), (jl = cp = bn = null), (Ii = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Y1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var U2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Dg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!U2[e.type] : t === "textarea";
}
function J1(e, t, r, n) {
  R1(n),
    (t = gu(t, "onChange")),
    0 < t.length &&
      ((r = new dp("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Ps = null,
  Ys = null;
function H2(e) {
  cb(e, 0);
}
function oc(e) {
  var t = Vi(e);
  if (k1(t)) return e;
}
function K2(e, t) {
  if (e === "change") return t;
}
var eb = !1;
if (Ur) {
  var fd;
  if (Ur) {
    var hd = "oninput" in document;
    if (!hd) {
      var jg = document.createElement("div");
      jg.setAttribute("oninput", "return;"),
        (hd = typeof jg.oninput == "function");
    }
    fd = hd;
  } else fd = !1;
  eb = fd && (!document.documentMode || 9 < document.documentMode);
}
function Ig() {
  Ps && (Ps.detachEvent("onpropertychange", tb), (Ys = Ps = null));
}
function tb(e) {
  if (e.propertyName === "value" && oc(Ys)) {
    var t = [];
    J1(t, Ys, e, op(e)), F1(H2, t);
  }
}
function G2(e, t, r) {
  e === "focusin"
    ? (Ig(), (Ps = t), (Ys = r), Ps.attachEvent("onpropertychange", tb))
    : e === "focusout" && Ig();
}
function Q2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return oc(Ys);
}
function q2(e, t) {
  if (e === "click") return oc(t);
}
function Y2(e, t) {
  if (e === "input" || e === "change") return oc(t);
}
function X2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ir = typeof Object.is == "function" ? Object.is : X2;
function Xs(e, t) {
  if (ir(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!ff.call(t, i) || !ir(e[i], t[i])) return !1;
  }
  return !0;
}
function Lg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bg(e, t) {
  var r = Lg(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Lg(r);
  }
}
function rb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rb(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function nb() {
  for (var e = window, t = uu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = uu(e.document);
  }
  return t;
}
function pp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Z2(e) {
  var t = nb(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    rb(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && pp(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          o = Math.min(n.start, i);
        (n = n.end === void 0 ? o : Math.min(n.end, i)),
          !e.extend && o > n && ((i = n), (n = o), (o = i)),
          (i = Bg(r, o));
        var s = Bg(r, n);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > n
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var J2 = Ur && "documentMode" in document && 11 >= document.documentMode,
  Li = null,
  Af = null,
  Es = null,
  zf = !1;
function Vg(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  zf ||
    Li == null ||
    Li !== uu(n) ||
    ((n = Li),
    "selectionStart" in n && pp(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Es && Xs(Es, n)) ||
      ((Es = n),
      (n = gu(Af, "onSelect")),
      0 < n.length &&
        ((t = new dp("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Li))));
}
function fl(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Bi = {
    animationend: fl("Animation", "AnimationEnd"),
    animationiteration: fl("Animation", "AnimationIteration"),
    animationstart: fl("Animation", "AnimationStart"),
    transitionend: fl("Transition", "TransitionEnd"),
  },
  pd = {},
  ib = {};
Ur &&
  ((ib = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bi.animationend.animation,
    delete Bi.animationiteration.animation,
    delete Bi.animationstart.animation),
  "TransitionEvent" in window || delete Bi.transitionend.transition);
function sc(e) {
  if (pd[e]) return pd[e];
  if (!Bi[e]) return e;
  var t = Bi[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in ib) return (pd[e] = t[r]);
  return e;
}
var ob = sc("animationend"),
  sb = sc("animationiteration"),
  ab = sc("animationstart"),
  lb = sc("transitionend"),
  ub = new Map(),
  Ng =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jn(e, t) {
  ub.set(e, t), Ei(t, [e]);
}
for (var md = 0; md < Ng.length; md++) {
  var gd = Ng[md],
    eT = gd.toLowerCase(),
    tT = gd[0].toUpperCase() + gd.slice(1);
  jn(eT, "on" + tT);
}
jn(ob, "onAnimationEnd");
jn(sb, "onAnimationIteration");
jn(ab, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(lb, "onTransitionEnd");
Ro("onMouseEnter", ["mouseout", "mouseover"]);
Ro("onMouseLeave", ["mouseout", "mouseover"]);
Ro("onPointerEnter", ["pointerout", "pointerover"]);
Ro("onPointerLeave", ["pointerout", "pointerover"]);
Ei(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ei(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ei(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ei(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ei(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ms =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rT = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function Wg(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), e2(n, t, void 0, e), (e.currentTarget = null);
}
function cb(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = n.length - 1; 0 <= s; s--) {
          var a = n[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Wg(i, a, u), (o = l);
        }
      else
        for (s = 0; s < n.length; s++) {
          if (
            ((a = n[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Wg(i, a, u), (o = l);
        }
    }
  }
  if (du) throw ((e = Pf), (du = !1), (Pf = null), e);
}
function ue(e, t) {
  var r = t[jf];
  r === void 0 && (r = t[jf] = new Set());
  var n = e + "__bubble";
  r.has(n) || (db(t, e, 2, !1), r.add(n));
}
function vd(e, t, r) {
  var n = 0;
  t && (n |= 4), db(r, e, n, t);
}
var hl = "_reactListening" + Math.random().toString(36).slice(2);
function Zs(e) {
  if (!e[hl]) {
    (e[hl] = !0),
      y1.forEach(function (r) {
        r !== "selectionchange" && (rT.has(r) || vd(r, !1, e), vd(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hl] || ((t[hl] = !0), vd("selectionchange", !1, t));
  }
}
function db(e, t, r, n) {
  switch (Q1(t)) {
    case 1:
      var i = g2;
      break;
    case 4:
      i = v2;
      break;
    default:
      i = up;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !_f ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function yd(e, t, r, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var s = n.tag;
      if (s === 3 || s === 4) {
        var a = n.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = n.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = ti(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            n = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  F1(function () {
    var u = o,
      c = op(r),
      d = [];
    e: {
      var f = ub.get(e);
      if (f !== void 0) {
        var m = dp,
          b = e;
        switch (e) {
          case "keypress":
            if (Il(r) === 0) break e;
          case "keydown":
          case "keyup":
            m = z2;
            break;
          case "focusin":
            (b = "focus"), (m = dd);
            break;
          case "focusout":
            (b = "blur"), (m = dd);
            break;
          case "beforeblur":
          case "afterblur":
            m = dd;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Ag;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = S2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = O2;
            break;
          case ob:
          case sb:
          case ab:
            m = k2;
            break;
          case lb:
            m = j2;
            break;
          case "scroll":
            m = y2;
            break;
          case "wheel":
            m = L2;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = T2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Mg;
        }
        var y = (t & 4) !== 0,
          k = !y && e === "scroll",
          p = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              p !== null && ((C = Ks(h, p)), C != null && y.push(Js(h, C, g)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((f = new m(f, b, null, r, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          f &&
            r !== Cf &&
            (b = r.relatedTarget || r.fromElement) &&
            (ti(b) || b[Hr]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((b = r.relatedTarget || r.toElement),
              (m = u),
              (b = b ? ti(b) : null),
              b !== null &&
                ((k = $i(b)), b !== k || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((m = null), (b = u)),
          m !== b)
        ) {
          if (
            ((y = Ag),
            (C = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Mg),
              (C = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = m == null ? f : Vi(m)),
            (g = b == null ? f : Vi(b)),
            (f = new y(C, h + "leave", m, r, c)),
            (f.target = k),
            (f.relatedTarget = g),
            (C = null),
            ti(c) === u &&
              ((y = new y(p, h + "enter", b, r, c)),
              (y.target = g),
              (y.relatedTarget = k),
              (C = y)),
            (k = C),
            m && b)
          )
            t: {
              for (y = m, p = b, h = 0, g = y; g; g = Fi(g)) h++;
              for (g = 0, C = p; C; C = Fi(C)) g++;
              for (; 0 < h - g; ) (y = Fi(y)), h--;
              for (; 0 < g - h; ) (p = Fi(p)), g--;
              for (; h--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = Fi(y)), (p = Fi(p));
              }
              y = null;
            }
          else y = null;
          m !== null && Ug(d, f, m, y, !1),
            b !== null && k !== null && Ug(d, k, b, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? Vi(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === "select" || (m === "input" && f.type === "file"))
        )
          var P = K2;
        else if (Dg(f))
          if (eb) P = Y2;
          else {
            P = Q2;
            var A = G2;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = q2);
        if (P && (P = P(e, u))) {
          J1(d, P, r, c);
          break e;
        }
        A && A(e, f, u),
          e === "focusout" &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === "number" &&
            bf(f, "number", f.value);
      }
      switch (((A = u ? Vi(u) : window), e)) {
        case "focusin":
          (Dg(A) || A.contentEditable === "true") &&
            ((Li = A), (Af = u), (Es = null));
          break;
        case "focusout":
          Es = Af = Li = null;
          break;
        case "mousedown":
          zf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zf = !1), Vg(d, r, c);
          break;
        case "selectionchange":
          if (J2) break;
        case "keydown":
        case "keyup":
          Vg(d, r, c);
      }
      var R;
      if (hp)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Ii
          ? X1(e, r) && ($ = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (Y1 &&
          r.locale !== "ko" &&
          (Ii || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && Ii && (R = q1())
            : ((bn = c),
              (cp = "value" in bn ? bn.value : bn.textContent),
              (Ii = !0))),
        (A = gu(u, $)),
        0 < A.length &&
          (($ = new zg($, e, null, r, c)),
          d.push({ event: $, listeners: A }),
          R ? ($.data = R) : ((R = Z1(r)), R !== null && ($.data = R)))),
        (R = V2 ? N2(e, r) : W2(e, r)) &&
          ((u = gu(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new zg("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = R)));
    }
    cb(d, t);
  });
}
function Js(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function gu(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ks(e, r)),
      o != null && n.unshift(Js(e, o, i)),
      (o = Ks(e, t)),
      o != null && n.push(Js(e, o, i))),
      (e = e.return);
  }
  return n;
}
function Fi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ug(e, t, r, n, i) {
  for (var o = t._reactName, s = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Ks(r, o)), l != null && s.unshift(Js(r, l, a)))
        : i || ((l = Ks(r, o)), l != null && s.push(Js(r, l, a)))),
      (r = r.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var nT = /\r\n?/g,
  iT = /\u0000|\uFFFD/g;
function Hg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      nT,
      `
`
    )
    .replace(iT, "");
}
function pl(e, t, r) {
  if (((t = Hg(t)), Hg(e) !== t && r)) throw Error(z(425));
}
function vu() {}
var Mf = null,
  Ff = null;
function Of(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Df = typeof setTimeout == "function" ? setTimeout : void 0,
  oT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Kg = typeof Promise == "function" ? Promise : void 0,
  sT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Kg < "u"
      ? function (e) {
          return Kg.resolve(null).then(e).catch(aT);
        }
      : Df;
function aT(e) {
  setTimeout(function () {
    throw e;
  });
}
function bd(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), qs(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  qs(t);
}
function Tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Uo = Math.random().toString(36).slice(2),
  yr = "__reactFiber$" + Uo,
  ea = "__reactProps$" + Uo,
  Hr = "__reactContainer$" + Uo,
  jf = "__reactEvents$" + Uo,
  lT = "__reactListeners$" + Uo,
  uT = "__reactHandles$" + Uo;
function ti(e) {
  var t = e[yr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Hr] || r[yr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Gg(e); e !== null; ) {
          if ((r = e[yr])) return r;
          e = Gg(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Da(e) {
  return (
    (e = e[yr] || e[Hr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function ac(e) {
  return e[ea] || null;
}
var If = [],
  Ni = -1;
function In(e) {
  return { current: e };
}
function de(e) {
  0 > Ni || ((e.current = If[Ni]), (If[Ni] = null), Ni--);
}
function ae(e, t) {
  Ni++, (If[Ni] = e.current), (e.current = t);
}
var Mn = {},
  Je = In(Mn),
  gt = In(!1),
  xi = Mn;
function Ao(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Mn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in r) i[o] = t[o];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function vt(e) {
  return (e = e.childContextTypes), e != null;
}
function yu() {
  de(gt), de(Je);
}
function Qg(e, t, r) {
  if (Je.current !== Mn) throw Error(z(168));
  ae(Je, t), ae(gt, r);
}
function fb(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(z(108, GC(e) || "Unknown", i));
  return Se({}, r, n);
}
function bu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mn),
    (xi = Je.current),
    ae(Je, e),
    ae(gt, gt.current),
    !0
  );
}
function qg(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(z(169));
  r
    ? ((e = fb(e, t, xi)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      de(gt),
      de(Je),
      ae(Je, e))
    : de(gt),
    ae(gt, r);
}
var Rr = null,
  lc = !1,
  Sd = !1;
function hb(e) {
  Rr === null ? (Rr = [e]) : Rr.push(e);
}
function cT(e) {
  (lc = !0), hb(e);
}
function Ln() {
  if (!Sd && Rr !== null) {
    Sd = !0;
    var e = 0,
      t = ne;
    try {
      var r = Rr;
      for (ne = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Rr = null), (lc = !1);
    } catch (i) {
      throw (Rr !== null && (Rr = Rr.slice(e + 1)), I1(sp, Ln), i);
    } finally {
      (ne = t), (Sd = !1);
    }
  }
  return null;
}
var Wi = [],
  Ui = 0,
  Su = null,
  xu = 0,
  Lt = [],
  Bt = 0,
  wi = null,
  Fr = 1,
  Or = "";
function Qn(e, t) {
  (Wi[Ui++] = xu), (Wi[Ui++] = Su), (Su = e), (xu = t);
}
function pb(e, t, r) {
  (Lt[Bt++] = Fr), (Lt[Bt++] = Or), (Lt[Bt++] = wi), (wi = e);
  var n = Fr;
  e = Or;
  var i = 32 - rr(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var o = 32 - rr(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (n & ((1 << s) - 1)).toString(32)),
      (n >>= s),
      (i -= s),
      (Fr = (1 << (32 - rr(t) + i)) | (r << i) | n),
      (Or = o + e);
  } else (Fr = (1 << o) | (r << i) | n), (Or = e);
}
function mp(e) {
  e.return !== null && (Qn(e, 1), pb(e, 1, 0));
}
function gp(e) {
  for (; e === Su; )
    (Su = Wi[--Ui]), (Wi[Ui] = null), (xu = Wi[--Ui]), (Wi[Ui] = null);
  for (; e === wi; )
    (wi = Lt[--Bt]),
      (Lt[Bt] = null),
      (Or = Lt[--Bt]),
      (Lt[Bt] = null),
      (Fr = Lt[--Bt]),
      (Lt[Bt] = null);
}
var Tt = null,
  Ct = null,
  me = !1,
  Jt = null;
function mb(e, t) {
  var r = Vt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Yg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Tt = e), (Ct = Tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Tt = e), (Ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = wi !== null ? { id: Fr, overflow: Or } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Vt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Tt = e),
            (Ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bf(e) {
  if (me) {
    var t = Ct;
    if (t) {
      var r = t;
      if (!Yg(e, t)) {
        if (Lf(e)) throw Error(z(418));
        t = Tn(r.nextSibling);
        var n = Tt;
        t && Yg(e, t)
          ? mb(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (me = !1), (Tt = e));
      }
    } else {
      if (Lf(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (Tt = e);
    }
  }
}
function Xg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Tt = e;
}
function ml(e) {
  if (e !== Tt) return !1;
  if (!me) return Xg(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Of(e.type, e.memoizedProps))),
    t && (t = Ct))
  ) {
    if (Lf(e)) throw (gb(), Error(z(418)));
    for (; t; ) mb(e, t), (t = Tn(t.nextSibling));
  }
  if ((Xg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ct = Tn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ct = null;
    }
  } else Ct = Tt ? Tn(e.stateNode.nextSibling) : null;
  return !0;
}
function gb() {
  for (var e = Ct; e; ) e = Tn(e.nextSibling);
}
function zo() {
  (Ct = Tt = null), (me = !1);
}
function vp(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
var dT = qr.ReactCurrentBatchConfig;
function is(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(z(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(z(147, e));
      var i = n,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!r._owner) throw Error(z(290, e));
  }
  return e;
}
function gl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Zg(e) {
  var t = e._init;
  return t(e._payload);
}
function vb(e) {
  function t(p, h) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
    }
  }
  function r(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function n(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = $n(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, g, C) {
    return h === null || h.tag !== 6
      ? ((h = Pd(g, p.mode, C)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function l(p, h, g, C) {
    var P = g.type;
    return P === ji
      ? c(p, h, g.props.children, C, g.key)
      : h !== null &&
        (h.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === on &&
            Zg(P) === h.type))
      ? ((C = i(h, g.props)), (C.ref = is(p, h, g)), (C.return = p), C)
      : ((C = Hl(g.type, g.key, g.props, null, p.mode, C)),
        (C.ref = is(p, h, g)),
        (C.return = p),
        C);
  }
  function u(p, h, g, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Ed(g, p.mode, C)), (h.return = p), h)
      : ((h = i(h, g.children || [])), (h.return = p), h);
  }
  function c(p, h, g, C, P) {
    return h === null || h.tag !== 7
      ? ((h = mi(g, p.mode, C, P)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function d(p, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Pd("" + h, p.mode, g)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ol:
          return (
            (g = Hl(h.type, h.key, h.props, null, p.mode, g)),
            (g.ref = is(p, null, h)),
            (g.return = p),
            g
          );
        case Di:
          return (h = Ed(h, p.mode, g)), (h.return = p), h;
        case on:
          var C = h._init;
          return d(p, C(h._payload), g);
      }
      if (hs(h) || Jo(h))
        return (h = mi(h, p.mode, g, null)), (h.return = p), h;
      gl(p, h);
    }
    return null;
  }
  function f(p, h, g, C) {
    var P = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return P !== null ? null : a(p, h, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ol:
          return g.key === P ? l(p, h, g, C) : null;
        case Di:
          return g.key === P ? u(p, h, g, C) : null;
        case on:
          return (P = g._init), f(p, h, P(g._payload), C);
      }
      if (hs(g) || Jo(g)) return P !== null ? null : c(p, h, g, C, null);
      gl(p, g);
    }
    return null;
  }
  function m(p, h, g, C, P) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (p = p.get(g) || null), a(h, p, "" + C, P);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ol:
          return (p = p.get(C.key === null ? g : C.key) || null), l(h, p, C, P);
        case Di:
          return (p = p.get(C.key === null ? g : C.key) || null), u(h, p, C, P);
        case on:
          var A = C._init;
          return m(p, h, g, A(C._payload), P);
      }
      if (hs(C) || Jo(C)) return (p = p.get(g) || null), c(h, p, C, P, null);
      gl(h, C);
    }
    return null;
  }
  function b(p, h, g, C) {
    for (
      var P = null, A = null, R = h, $ = (h = 0), O = null;
      R !== null && $ < g.length;
      $++
    ) {
      R.index > $ ? ((O = R), (R = null)) : (O = R.sibling);
      var j = f(p, R, g[$], C);
      if (j === null) {
        R === null && (R = O);
        break;
      }
      e && R && j.alternate === null && t(p, R),
        (h = o(j, h, $)),
        A === null ? (P = j) : (A.sibling = j),
        (A = j),
        (R = O);
    }
    if ($ === g.length) return r(p, R), me && Qn(p, $), P;
    if (R === null) {
      for (; $ < g.length; $++)
        (R = d(p, g[$], C)),
          R !== null &&
            ((h = o(R, h, $)), A === null ? (P = R) : (A.sibling = R), (A = R));
      return me && Qn(p, $), P;
    }
    for (R = n(p, R); $ < g.length; $++)
      (O = m(R, p, $, g[$], C)),
        O !== null &&
          (e && O.alternate !== null && R.delete(O.key === null ? $ : O.key),
          (h = o(O, h, $)),
          A === null ? (P = O) : (A.sibling = O),
          (A = O));
    return (
      e &&
        R.forEach(function (xe) {
          return t(p, xe);
        }),
      me && Qn(p, $),
      P
    );
  }
  function y(p, h, g, C) {
    var P = Jo(g);
    if (typeof P != "function") throw Error(z(150));
    if (((g = P.call(g)), g == null)) throw Error(z(151));
    for (
      var A = (P = null), R = h, $ = (h = 0), O = null, j = g.next();
      R !== null && !j.done;
      $++, j = g.next()
    ) {
      R.index > $ ? ((O = R), (R = null)) : (O = R.sibling);
      var xe = f(p, R, j.value, C);
      if (xe === null) {
        R === null && (R = O);
        break;
      }
      e && R && xe.alternate === null && t(p, R),
        (h = o(xe, h, $)),
        A === null ? (P = xe) : (A.sibling = xe),
        (A = xe),
        (R = O);
    }
    if (j.done) return r(p, R), me && Qn(p, $), P;
    if (R === null) {
      for (; !j.done; $++, j = g.next())
        (j = d(p, j.value, C)),
          j !== null &&
            ((h = o(j, h, $)), A === null ? (P = j) : (A.sibling = j), (A = j));
      return me && Qn(p, $), P;
    }
    for (R = n(p, R); !j.done; $++, j = g.next())
      (j = m(R, p, $, j.value, C)),
        j !== null &&
          (e && j.alternate !== null && R.delete(j.key === null ? $ : j.key),
          (h = o(j, h, $)),
          A === null ? (P = j) : (A.sibling = j),
          (A = j));
    return (
      e &&
        R.forEach(function (or) {
          return t(p, or);
        }),
      me && Qn(p, $),
      P
    );
  }
  function k(p, h, g, C) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === ji &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ol:
          e: {
            for (var P = g.key, A = h; A !== null; ) {
              if (A.key === P) {
                if (((P = g.type), P === ji)) {
                  if (A.tag === 7) {
                    r(p, A.sibling),
                      (h = i(A, g.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  A.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === on &&
                    Zg(P) === A.type)
                ) {
                  r(p, A.sibling),
                    (h = i(A, g.props)),
                    (h.ref = is(p, A, g)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                r(p, A);
                break;
              } else t(p, A);
              A = A.sibling;
            }
            g.type === ji
              ? ((h = mi(g.props.children, p.mode, C, g.key)),
                (h.return = p),
                (p = h))
              : ((C = Hl(g.type, g.key, g.props, null, p.mode, C)),
                (C.ref = is(p, h, g)),
                (C.return = p),
                (p = C));
          }
          return s(p);
        case Di:
          e: {
            for (A = g.key; h !== null; ) {
              if (h.key === A)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  r(p, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  r(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Ed(g, p.mode, C)), (h.return = p), (p = h);
          }
          return s(p);
        case on:
          return (A = g._init), k(p, h, A(g._payload), C);
      }
      if (hs(g)) return b(p, h, g, C);
      if (Jo(g)) return y(p, h, g, C);
      gl(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (r(p, h.sibling), (h = i(h, g)), (h.return = p), (p = h))
          : (r(p, h), (h = Pd(g, p.mode, C)), (h.return = p), (p = h)),
        s(p))
      : r(p, h);
  }
  return k;
}
var Mo = vb(!0),
  yb = vb(!1),
  wu = In(null),
  ku = null,
  Hi = null,
  yp = null;
function bp() {
  yp = Hi = ku = null;
}
function Sp(e) {
  var t = wu.current;
  de(wu), (e._currentValue = t);
}
function Vf(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function lo(e, t) {
  (ku = e),
    (yp = Hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (mt = !0), (e.firstContext = null));
}
function Ht(e) {
  var t = e._currentValue;
  if (yp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hi === null)) {
      if (ku === null) throw Error(z(308));
      (Hi = e), (ku.dependencies = { lanes: 0, firstContext: e });
    } else Hi = Hi.next = e;
  return t;
}
var ri = null;
function xp(e) {
  ri === null ? (ri = [e]) : ri.push(e);
}
function bb(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), xp(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    Kr(e, n)
  );
}
function Kr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var sn = !1;
function wp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Sb(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ir(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _n(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), q & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      Kr(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), xp(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    Kr(e, r)
  );
}
function Ll(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ap(e, r);
  }
}
function Jg(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var s = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (r = r.next);
      } while (r !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Cu(e, t, r, n) {
  var i = e.updateQueue;
  sn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var f = a.lane,
        m = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var b = e,
            y = a;
          switch (((f = t), (m = r), y.tag)) {
            case 1:
              if (((b = y.payload), typeof b == "function")) {
                d = b.call(m, d, f);
                break e;
              }
              d = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = y.payload),
                (f = typeof b == "function" ? b.call(m, d, f) : b),
                f == null)
              )
                break e;
              d = Se({}, d, f);
              break e;
            case 2:
              sn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ci |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function e0(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(z(191, i));
        i.call(n);
      }
    }
}
var ja = {},
  Sr = In(ja),
  ta = In(ja),
  ra = In(ja);
function ni(e) {
  if (e === ja) throw Error(z(174));
  return e;
}
function kp(e, t) {
  switch ((ae(ra, t), ae(ta, e), ae(Sr, ja), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xf(t, e));
  }
  de(Sr), ae(Sr, t);
}
function Fo() {
  de(Sr), de(ta), de(ra);
}
function xb(e) {
  ni(ra.current);
  var t = ni(Sr.current),
    r = xf(t, e.type);
  t !== r && (ae(ta, e), ae(Sr, r));
}
function Cp(e) {
  ta.current === e && (de(Sr), de(ta));
}
var ve = In(0);
function Tu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xd = [];
function Tp() {
  for (var e = 0; e < xd.length; e++)
    xd[e]._workInProgressVersionPrimary = null;
  xd.length = 0;
}
var Bl = qr.ReactCurrentDispatcher,
  wd = qr.ReactCurrentBatchConfig,
  ki = 0,
  be = null,
  Ae = null,
  Oe = null,
  _u = !1,
  $s = !1,
  na = 0,
  fT = 0;
function Ke() {
  throw Error(z(321));
}
function _p(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!ir(e[r], t[r])) return !1;
  return !0;
}
function Pp(e, t, r, n, i, o) {
  if (
    ((ki = o),
    (be = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bl.current = e === null || e.memoizedState === null ? gT : vT),
    (e = r(n, i)),
    $s)
  ) {
    o = 0;
    do {
      if ((($s = !1), (na = 0), 25 <= o)) throw Error(z(301));
      (o += 1),
        (Oe = Ae = null),
        (t.updateQueue = null),
        (Bl.current = yT),
        (e = r(n, i));
    } while ($s);
  }
  if (
    ((Bl.current = Pu),
    (t = Ae !== null && Ae.next !== null),
    (ki = 0),
    (Oe = Ae = be = null),
    (_u = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function Ep() {
  var e = na !== 0;
  return (na = 0), e;
}
function ur() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Oe === null ? (be.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function Kt() {
  if (Ae === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = Oe === null ? be.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Ae = e);
  else {
    if (e === null) throw Error(z(310));
    (Ae = e),
      (e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      Oe === null ? (be.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function ia(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function kd(e) {
  var t = Kt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = Ae,
    i = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (n.baseQueue = i = o), (r.pending = null);
  }
  if (i !== null) {
    (o = i.next), (n = n.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((ki & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = n)) : (l = l.next = d),
          (be.lanes |= c),
          (Ci |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = n) : (l.next = a),
      ir(n, t.memoizedState) || (mt = !0),
      (t.memoizedState = n),
      (t.baseState = s),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (be.lanes |= o), (Ci |= o), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Cd(e) {
  var t = Kt(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    o = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    ir(o, t.memoizedState) || (mt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function wb() {}
function kb(e, t) {
  var r = be,
    n = Kt(),
    i = t(),
    o = !ir(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (mt = !0)),
    (n = n.queue),
    $p(_b.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || o || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      oa(9, Tb.bind(null, r, n, i, t), void 0, null),
      De === null)
    )
      throw Error(z(349));
    ki & 30 || Cb(r, t, i);
  }
  return i;
}
function Cb(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Tb(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Pb(t) && Eb(e);
}
function _b(e, t, r) {
  return r(function () {
    Pb(t) && Eb(e);
  });
}
function Pb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !ir(e, r);
  } catch {
    return !0;
  }
}
function Eb(e) {
  var t = Kr(e, 1);
  t !== null && nr(t, e, 1, -1);
}
function t0(e) {
  var t = ur();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ia,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mT.bind(null, be, e)),
    [t.memoizedState, e]
  );
}
function oa(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function $b() {
  return Kt().memoizedState;
}
function Vl(e, t, r, n) {
  var i = ur();
  (be.flags |= e),
    (i.memoizedState = oa(1 | t, r, void 0, n === void 0 ? null : n));
}
function uc(e, t, r, n) {
  var i = Kt();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (Ae !== null) {
    var s = Ae.memoizedState;
    if (((o = s.destroy), n !== null && _p(n, s.deps))) {
      i.memoizedState = oa(t, r, o, n);
      return;
    }
  }
  (be.flags |= e), (i.memoizedState = oa(1 | t, r, o, n));
}
function r0(e, t) {
  return Vl(8390656, 8, e, t);
}
function $p(e, t) {
  return uc(2048, 8, e, t);
}
function Rb(e, t) {
  return uc(4, 2, e, t);
}
function Ab(e, t) {
  return uc(4, 4, e, t);
}
function zb(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Mb(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), uc(4, 4, zb.bind(null, t, e), r)
  );
}
function Rp() {}
function Fb(e, t) {
  var r = Kt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && _p(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Ob(e, t) {
  var r = Kt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && _p(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Db(e, t, r) {
  return ki & 21
    ? (ir(r, t) || ((r = V1()), (be.lanes |= r), (Ci |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (mt = !0)), (e.memoizedState = r));
}
function hT(e, t) {
  var r = ne;
  (ne = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = wd.transition;
  wd.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = r), (wd.transition = n);
  }
}
function jb() {
  return Kt().memoizedState;
}
function pT(e, t, r) {
  var n = En(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ib(e))
  )
    Lb(t, r);
  else if (((r = bb(e, t, r, n)), r !== null)) {
    var i = at();
    nr(r, e, n, i), Bb(r, t, n);
  }
}
function mT(e, t, r) {
  var n = En(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Ib(e)) Lb(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, r);
        if (((i.hasEagerState = !0), (i.eagerState = a), ir(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), xp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = bb(e, t, i, n)),
      r !== null && ((i = at()), nr(r, e, n, i), Bb(r, t, n));
  }
}
function Ib(e) {
  var t = e.alternate;
  return e === be || (t !== null && t === be);
}
function Lb(e, t) {
  $s = _u = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Bb(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ap(e, r);
  }
}
var Pu = {
    readContext: Ht,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  gT = {
    readContext: Ht,
    useCallback: function (e, t) {
      return (ur().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ht,
    useEffect: r0,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Vl(4194308, 4, zb.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Vl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Vl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = ur();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = ur();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = pT.bind(null, be, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ur();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: t0,
    useDebugValue: Rp,
    useDeferredValue: function (e) {
      return (ur().memoizedState = e);
    },
    useTransition: function () {
      var e = t0(!1),
        t = e[0];
      return (e = hT.bind(null, e[1])), (ur().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = be,
        i = ur();
      if (me) {
        if (r === void 0) throw Error(z(407));
        r = r();
      } else {
        if (((r = t()), De === null)) throw Error(z(349));
        ki & 30 || Cb(n, t, r);
      }
      i.memoizedState = r;
      var o = { value: r, getSnapshot: t };
      return (
        (i.queue = o),
        r0(_b.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        oa(9, Tb.bind(null, n, o, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = ur(),
        t = De.identifierPrefix;
      if (me) {
        var r = Or,
          n = Fr;
        (r = (n & ~(1 << (32 - rr(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = na++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = fT++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vT = {
    readContext: Ht,
    useCallback: Fb,
    useContext: Ht,
    useEffect: $p,
    useImperativeHandle: Mb,
    useInsertionEffect: Rb,
    useLayoutEffect: Ab,
    useMemo: Ob,
    useReducer: kd,
    useRef: $b,
    useState: function () {
      return kd(ia);
    },
    useDebugValue: Rp,
    useDeferredValue: function (e) {
      var t = Kt();
      return Db(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = kd(ia)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: wb,
    useSyncExternalStore: kb,
    useId: jb,
    unstable_isNewReconciler: !1,
  },
  yT = {
    readContext: Ht,
    useCallback: Fb,
    useContext: Ht,
    useEffect: $p,
    useImperativeHandle: Mb,
    useInsertionEffect: Rb,
    useLayoutEffect: Ab,
    useMemo: Ob,
    useReducer: Cd,
    useRef: $b,
    useState: function () {
      return Cd(ia);
    },
    useDebugValue: Rp,
    useDeferredValue: function (e) {
      var t = Kt();
      return Ae === null ? (t.memoizedState = e) : Db(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Cd(ia)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: wb,
    useSyncExternalStore: kb,
    useId: jb,
    unstable_isNewReconciler: !1,
  };
function Yt(e, t) {
  if (e && e.defaultProps) {
    (t = Se({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Nf(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Se({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var cc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $i(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = at(),
      i = En(e),
      o = Ir(n, i);
    (o.payload = t),
      r != null && (o.callback = r),
      (t = _n(e, o, i)),
      t !== null && (nr(t, e, i, n), Ll(t, e, i));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = at(),
      i = En(e),
      o = Ir(n, i);
    (o.tag = 1),
      (o.payload = t),
      r != null && (o.callback = r),
      (t = _n(e, o, i)),
      t !== null && (nr(t, e, i, n), Ll(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = at(),
      n = En(e),
      i = Ir(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = _n(e, i, n)),
      t !== null && (nr(t, e, n, r), Ll(t, e, n));
  },
};
function n0(e, t, r, n, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xs(r, n) || !Xs(i, o)
      : !0
  );
}
function Vb(e, t, r) {
  var n = !1,
    i = Mn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ht(o))
      : ((i = vt(t) ? xi : Je.current),
        (n = t.contextTypes),
        (o = (n = n != null) ? Ao(e, i) : Mn)),
    (t = new t(r, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cc),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function i0(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && cc.enqueueReplaceState(t, t.state, null);
}
function Wf(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = {}), wp(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ht(o))
    : ((o = vt(t) ? xi : Je.current), (i.context = Ao(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Nf(e, t, o, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && cc.enqueueReplaceState(i, i.state, null),
      Cu(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Oo(e, t) {
  try {
    var r = "",
      n = t;
    do (r += KC(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Td(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Uf(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var bT = typeof WeakMap == "function" ? WeakMap : Map;
function Nb(e, t, r) {
  (r = Ir(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      $u || (($u = !0), (eh = n)), Uf(e, t);
    }),
    r
  );
}
function Wb(e, t, r) {
  (r = Ir(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        Uf(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        Uf(e, t),
          typeof n != "function" &&
            (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    r
  );
}
function o0(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new bT();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = MT.bind(null, e, t, r)), t.then(e, e));
}
function s0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function a0(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Ir(-1, 1)), (t.tag = 2), _n(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var ST = qr.ReactCurrentOwner,
  mt = !1;
function ot(e, t, r, n) {
  t.child = e === null ? yb(t, null, r, n) : Mo(t, e.child, r, n);
}
function l0(e, t, r, n, i) {
  r = r.render;
  var o = t.ref;
  return (
    lo(t, i),
    (n = Pp(e, t, r, n, o, i)),
    (r = Ep()),
    e !== null && !mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gr(e, t, i))
      : (me && r && mp(t), (t.flags |= 1), ot(e, t, n, i), t.child)
  );
}
function u0(e, t, r, n, i) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" &&
      !Ip(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ub(e, t, o, n, i))
      : ((e = Hl(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Xs), r(s, n) && e.ref === t.ref)
    )
      return Gr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = $n(o, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ub(e, t, r, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xs(o, n) && e.ref === t.ref)
      if (((mt = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (mt = !0);
      else return (t.lanes = e.lanes), Gr(e, t, i);
  }
  return Hf(e, t, r, n, i);
}
function Hb(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(Gi, kt),
        (kt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(Gi, kt),
          (kt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : r),
        ae(Gi, kt),
        (kt |= n);
    }
  else
    o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ae(Gi, kt),
      (kt |= n);
  return ot(e, t, i, r), t.child;
}
function Kb(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hf(e, t, r, n, i) {
  var o = vt(r) ? xi : Je.current;
  return (
    (o = Ao(t, o)),
    lo(t, i),
    (r = Pp(e, t, r, n, o, i)),
    (n = Ep()),
    e !== null && !mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gr(e, t, i))
      : (me && n && mp(t), (t.flags |= 1), ot(e, t, r, i), t.child)
  );
}
function c0(e, t, r, n, i) {
  if (vt(r)) {
    var o = !0;
    bu(t);
  } else o = !1;
  if ((lo(t, i), t.stateNode === null))
    Nl(e, t), Vb(t, r, n), Wf(t, r, n, i), (n = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Ht(u))
      : ((u = vt(r) ? xi : Je.current), (u = Ao(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== n || l !== u) && i0(t, s, n, u)),
      (sn = !1);
    var f = t.memoizedState;
    (s.state = f),
      Cu(t, n, s, i),
      (l = t.memoizedState),
      a !== n || f !== l || gt.current || sn
        ? (typeof c == "function" && (Nf(t, r, c, n), (l = t.memoizedState)),
          (a = sn || n0(t, r, a, n, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (s.props = n),
          (s.state = l),
          (s.context = u),
          (n = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (s = t.stateNode),
      Sb(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Yt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Ht(l))
        : ((l = vt(r) ? xi : Je.current), (l = Ao(t, l)));
    var m = r.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && i0(t, s, n, l)),
      (sn = !1),
      (f = t.memoizedState),
      (s.state = f),
      Cu(t, n, s, i);
    var b = t.memoizedState;
    a !== d || f !== b || gt.current || sn
      ? (typeof m == "function" && (Nf(t, r, m, n), (b = t.memoizedState)),
        (u = sn || n0(t, r, u, n, f, b, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(n, b, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(n, b, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = b)),
        (s.props = n),
        (s.state = b),
        (s.context = l),
        (n = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Kf(e, t, r, n, o, i);
}
function Kf(e, t, r, n, i, o) {
  Kb(e, t);
  var s = (t.flags & 128) !== 0;
  if (!n && !s) return i && qg(t, r, !1), Gr(e, t, o);
  (n = t.stateNode), (ST.current = t);
  var a =
    s && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Mo(t, e.child, null, o)), (t.child = Mo(t, null, a, o)))
      : ot(e, t, a, o),
    (t.memoizedState = n.state),
    i && qg(t, r, !0),
    t.child
  );
}
function Gb(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qg(e, t.context, !1),
    kp(e, t.containerInfo);
}
function d0(e, t, r, n, i) {
  return zo(), vp(i), (t.flags |= 256), ot(e, t, r, n), t.child;
}
var Gf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qb(e, t, r) {
  var n = t.pendingProps,
    i = ve.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ae(ve, i & 1),
    e === null)
  )
    return (
      Bf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = n.children),
          (e = n.fallback),
          o
            ? ((n = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(n & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = hc(s, n, 0, null)),
              (e = mi(e, n, r, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Qf(r)),
              (t.memoizedState = Gf),
              e)
            : Ap(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return xT(e, t, s, n, a, i, r);
  if (o) {
    (o = n.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(s & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = $n(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = $n(a, o)) : ((o = mi(o, s, r, null)), (o.flags |= 2)),
      (o.return = t),
      (n.return = t),
      (n.sibling = o),
      (t.child = n),
      (n = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Qf(r)
          : {
              baseLanes: s.baseLanes | r,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~r),
      (t.memoizedState = Gf),
      n
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (n = $n(o, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Ap(e, t) {
  return (
    (t = hc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vl(e, t, r, n) {
  return (
    n !== null && vp(n),
    Mo(t, e.child, null, r),
    (e = Ap(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xT(e, t, r, n, i, o, s) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Td(Error(z(422)))), vl(e, t, s, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = n.fallback),
        (i = t.mode),
        (n = hc({ mode: "visible", children: n.children }, i, 0, null)),
        (o = mi(o, i, s, null)),
        (o.flags |= 2),
        (n.return = t),
        (o.return = t),
        (n.sibling = o),
        (t.child = n),
        t.mode & 1 && Mo(t, e.child, null, s),
        (t.child.memoizedState = Qf(s)),
        (t.memoizedState = Gf),
        o);
  if (!(t.mode & 1)) return vl(e, t, s, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (o = Error(z(419))), (n = Td(o, n, void 0)), vl(e, t, s, n);
  }
  if (((a = (s & e.childLanes) !== 0), mt || a)) {
    if (((n = De), n !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Kr(e, i), nr(n, e, i, -1));
    }
    return jp(), (n = Td(Error(z(421)))), vl(e, t, s, n);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = FT.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ct = Tn(i.nextSibling)),
      (Tt = t),
      (me = !0),
      (Jt = null),
      e !== null &&
        ((Lt[Bt++] = Fr),
        (Lt[Bt++] = Or),
        (Lt[Bt++] = wi),
        (Fr = e.id),
        (Or = e.overflow),
        (wi = t)),
      (t = Ap(t, n.children)),
      (t.flags |= 4096),
      t);
}
function f0(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Vf(e.return, t, r);
}
function _d(e, t, r, n, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = r),
      (o.tailMode = i));
}
function qb(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((ot(e, t, n.children, r), (n = ve.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && f0(e, r, t);
        else if (e.tag === 19) f0(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ae(ve, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && Tu(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          _d(t, !1, i, r, o);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Tu(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        _d(t, !0, r, null, o);
        break;
      case "together":
        _d(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ci |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, r = $n(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = $n(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function wT(e, t, r) {
  switch (t.tag) {
    case 3:
      Gb(t), zo();
      break;
    case 5:
      xb(t);
      break;
    case 1:
      vt(t.type) && bu(t);
      break;
    case 4:
      kp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      ae(wu, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ae(ve, ve.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Qb(e, t, r)
          : (ae(ve, ve.current & 1),
            (e = Gr(e, t, r)),
            e !== null ? e.sibling : null);
      ae(ve, ve.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return qb(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(ve, ve.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hb(e, t, r);
  }
  return Gr(e, t, r);
}
var Yb, qf, Xb, Zb;
Yb = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
qf = function () {};
Xb = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), ni(Sr.current);
    var o = null;
    switch (r) {
      case "input":
        (i = vf(e, i)), (n = vf(e, n)), (o = []);
        break;
      case "select":
        (i = Se({}, i, { value: void 0 })),
          (n = Se({}, n, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Sf(e, i)), (n = Sf(e, n)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = vu);
    }
    wf(r, n);
    var s;
    r = null;
    for (u in i)
      if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (r || (r = {}), (r[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Us.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((a = i != null ? i[u] : void 0),
        n.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (r || (r = {}), (r[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (r || (r = {}), (r[s] = l[s]));
          } else r || (o || (o = []), o.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Us.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ue("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    r && (o = o || []).push("style", r);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Zb = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function os(e, t) {
  if (!me)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function kT(e, t, r) {
  var n = t.pendingProps;
  switch ((gp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ge(t), null;
    case 1:
      return vt(t.type) && yu(), Ge(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Fo(),
        de(gt),
        de(Je),
        Tp(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ml(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Jt !== null && (nh(Jt), (Jt = null)))),
        qf(e, t),
        Ge(t),
        null
      );
    case 5:
      Cp(t);
      var i = ni(ra.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Xb(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(z(166));
          return Ge(t), null;
        }
        if (((e = ni(Sr.current)), ml(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[yr] = t), (n[ea] = o), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              ue("cancel", n), ue("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ms.length; i++) ue(ms[i], n);
              break;
            case "source":
              ue("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", n), ue("load", n);
              break;
            case "details":
              ue("toggle", n);
              break;
            case "input":
              xg(n, o), ue("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                ue("invalid", n);
              break;
            case "textarea":
              kg(n, o), ue("invalid", n);
          }
          wf(r, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      pl(n.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      pl(n.textContent, a, e),
                    (i = ["children", "" + a]))
                : Us.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ue("scroll", n);
            }
          switch (r) {
            case "input":
              sl(n), wg(n, o, !0);
              break;
            case "textarea":
              sl(n), Cg(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = vu);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _1(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = s.createElement(r, { is: n.is }))
                : ((e = s.createElement(r)),
                  r === "select" &&
                    ((s = e),
                    n.multiple
                      ? (s.multiple = !0)
                      : n.size && (s.size = n.size)))
              : (e = s.createElementNS(e, r)),
            (e[yr] = t),
            (e[ea] = n),
            Yb(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = kf(r, n)), r)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ms.length; i++) ue(ms[i], e);
                i = n;
                break;
              case "source":
                ue("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (i = n);
                break;
              case "details":
                ue("toggle", e), (i = n);
                break;
              case "input":
                xg(e, n), (i = vf(e, n)), ue("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = Se({}, n, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                kg(e, n), (i = Sf(e, n)), ue("invalid", e);
                break;
              default:
                i = n;
            }
            wf(r, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? $1(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && P1(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && Hs(e, l)
                    : typeof l == "number" && Hs(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Us.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ue("scroll", e)
                      : l != null && tp(e, o, l, s));
              }
            switch (r) {
              case "input":
                sl(e), wg(e, n, !1);
                break;
              case "textarea":
                sl(e), Cg(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + zn(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? io(e, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      io(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = vu);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) Zb(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(z(166));
        if (((r = ni(ra.current)), ni(Sr.current), ml(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[yr] = t),
            (o = n.nodeValue !== r) && ((e = Tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                pl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[yr] = t),
            (t.stateNode = n);
      }
      return Ge(t), null;
    case 13:
      if (
        (de(ve),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && Ct !== null && t.mode & 1 && !(t.flags & 128))
          gb(), zo(), (t.flags |= 98560), (o = !1);
        else if (((o = ml(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(z(317));
            o[yr] = t;
          } else
            zo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (o = !1);
        } else Jt !== null && (nh(Jt), (Jt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Me === 0 && (Me = 3) : jp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        Fo(), qf(e, t), e === null && Zs(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return Sp(t.type._context), Ge(t), null;
    case 17:
      return vt(t.type) && yu(), Ge(t), null;
    case 19:
      if ((de(ve), (o = t.memoizedState), o === null)) return Ge(t), null;
      if (((n = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (n) os(o, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Tu(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    os(o, !1),
                    n = s.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (o = r),
                    (e = n),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return ae(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Te() > Do &&
            ((t.flags |= 128), (n = !0), os(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Tu(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              os(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !me)
            )
              return Ge(t), null;
          } else
            2 * Te() - o.renderingStartTime > Do &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), os(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((r = o.last),
            r !== null ? (r.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Te()),
          (t.sibling = null),
          (r = ve.current),
          ae(ve, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        Dp(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? kt & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function CT(e, t) {
  switch ((gp(t), t.tag)) {
    case 1:
      return (
        vt(t.type) && yu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fo(),
        de(gt),
        de(Je),
        Tp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Cp(t), null;
    case 13:
      if (
        (de(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        zo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(ve), null;
    case 4:
      return Fo(), null;
    case 10:
      return Sp(t.type._context), null;
    case 22:
    case 23:
      return Dp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yl = !1,
  Ye = !1,
  TT = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Ki(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ke(e, t, n);
      }
    else r.current = null;
}
function Yf(e, t, r) {
  try {
    r();
  } catch (n) {
    ke(e, t, n);
  }
}
var h0 = !1;
function _T(e, t) {
  if (((Mf = pu), (e = nb()), pp(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== r || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (n !== 0 && d.nodeType !== 3) || (l = s + n),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++u === i && (a = s),
                f === o && ++c === n && (l = s),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Ff = { focusedElem: e, selectionRange: r }, pu = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var y = b.memoizedProps,
                    k = b.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Yt(t.type, y),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (C) {
          ke(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (b = h0), (h0 = !1), b;
}
function Rs(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Yf(t, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function dc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Xf(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Jb(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Jb(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yr], delete t[ea], delete t[jf], delete t[lT], delete t[uT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function eS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function p0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || eS(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = vu));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Zf(e, t, r), e = e.sibling; e !== null; ) Zf(e, t, r), (e = e.sibling);
}
function Jf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Jf(e, t, r), e = e.sibling; e !== null; ) Jf(e, t, r), (e = e.sibling);
}
var Be = null,
  Zt = !1;
function Zr(e, t, r) {
  for (r = r.child; r !== null; ) tS(e, t, r), (r = r.sibling);
}
function tS(e, t, r) {
  if (br && typeof br.onCommitFiberUnmount == "function")
    try {
      br.onCommitFiberUnmount(nc, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Ye || Ki(r, t);
    case 6:
      var n = Be,
        i = Zt;
      (Be = null),
        Zr(e, t, r),
        (Be = n),
        (Zt = i),
        Be !== null &&
          (Zt
            ? ((e = Be),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Be.removeChild(r.stateNode));
      break;
    case 18:
      Be !== null &&
        (Zt
          ? ((e = Be),
            (r = r.stateNode),
            e.nodeType === 8
              ? bd(e.parentNode, r)
              : e.nodeType === 1 && bd(e, r),
            qs(e))
          : bd(Be, r.stateNode));
      break;
    case 4:
      (n = Be),
        (i = Zt),
        (Be = r.stateNode.containerInfo),
        (Zt = !0),
        Zr(e, t, r),
        (Be = n),
        (Zt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ye &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Yf(r, t, s),
            (i = i.next);
        } while (i !== n);
      }
      Zr(e, t, r);
      break;
    case 1:
      if (
        !Ye &&
        (Ki(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          ke(r, t, a);
        }
      Zr(e, t, r);
      break;
    case 21:
      Zr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Ye = (n = Ye) || r.memoizedState !== null), Zr(e, t, r), (Ye = n))
        : Zr(e, t, r);
      break;
    default:
      Zr(e, t, r);
  }
}
function m0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new TT()),
      t.forEach(function (n) {
        var i = OT.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function Qt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Be = a.stateNode), (Zt = !1);
              break e;
            case 3:
              (Be = a.stateNode.containerInfo), (Zt = !0);
              break e;
            case 4:
              (Be = a.stateNode.containerInfo), (Zt = !0);
              break e;
          }
          a = a.return;
        }
        if (Be === null) throw Error(z(160));
        tS(o, s, i), (Be = null), (Zt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ke(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rS(t, e), (t = t.sibling);
}
function rS(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qt(t, e), ar(e), n & 4)) {
        try {
          Rs(3, e, e.return), dc(3, e);
        } catch (y) {
          ke(e, e.return, y);
        }
        try {
          Rs(5, e, e.return);
        } catch (y) {
          ke(e, e.return, y);
        }
      }
      break;
    case 1:
      Qt(t, e), ar(e), n & 512 && r !== null && Ki(r, r.return);
      break;
    case 5:
      if (
        (Qt(t, e),
        ar(e),
        n & 512 && r !== null && Ki(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Hs(i, "");
        } catch (y) {
          ke(e, e.return, y);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = r !== null ? r.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && C1(i, o),
              kf(a, s);
            var u = kf(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? $1(i, d)
                : c === "dangerouslySetInnerHTML"
                ? P1(i, d)
                : c === "children"
                ? Hs(i, d)
                : tp(i, c, d, u);
            }
            switch (a) {
              case "input":
                yf(i, o);
                break;
              case "textarea":
                T1(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? io(i, !!o.multiple, m, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? io(i, !!o.multiple, o.defaultValue, !0)
                      : io(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ea] = o;
          } catch (y) {
            ke(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Qt(t, e), ar(e), n & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          ke(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Qt(t, e), ar(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          qs(t.containerInfo);
        } catch (y) {
          ke(e, e.return, y);
        }
      break;
    case 4:
      Qt(t, e), ar(e);
      break;
    case 13:
      Qt(t, e),
        ar(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fp = Te())),
        n & 4 && m0(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Ye = (u = Ye) || c), Qt(t, e), (Ye = u)) : Qt(t, e),
        ar(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (((f = D), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rs(4, f, f.return);
                  break;
                case 1:
                  Ki(f, f.return);
                  var b = f.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (y) {
                      ke(n, r, y);
                    }
                  }
                  break;
                case 5:
                  Ki(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    v0(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (D = m)) : v0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = E1("display", s)));
              } catch (y) {
                ke(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                ke(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Qt(t, e), ar(e), n & 4 && m0(e);
      break;
    case 21:
      break;
    default:
      Qt(t, e), ar(e);
  }
}
function ar(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (eS(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(z(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Hs(i, ""), (n.flags &= -33));
          var o = p0(e);
          Jf(e, o, i);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            a = p0(e);
          Zf(e, a, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      ke(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function PT(e, t, r) {
  (D = e), nS(e);
}
function nS(e, t, r) {
  for (var n = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      o = i.child;
    if (i.tag === 22 && n) {
      var s = i.memoizedState !== null || yl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ye;
        a = yl;
        var u = Ye;
        if (((yl = s), (Ye = l) && !u))
          for (D = i; D !== null; )
            (s = D),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? y0(i)
                : l !== null
                ? ((l.return = s), (D = l))
                : y0(i);
        for (; o !== null; ) (D = o), nS(o), (o = o.sibling);
        (D = i), (yl = a), (Ye = u);
      }
      g0(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (D = o)) : g0(e);
  }
}
function g0(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || dc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Yt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && e0(t, o, n);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                e0(t, s, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && qs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        Ye || (t.flags & 512 && Xf(t));
      } catch (f) {
        ke(t, t.return, f);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (D = r);
      break;
    }
    D = t.return;
  }
}
function v0(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (D = r);
      break;
    }
    D = t.return;
  }
}
function y0(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            dc(4, t);
          } catch (l) {
            ke(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ke(t, i, l);
            }
          }
          var o = t.return;
          try {
            Xf(t);
          } catch (l) {
            ke(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Xf(t);
          } catch (l) {
            ke(t, s, l);
          }
      }
    } catch (l) {
      ke(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var ET = Math.ceil,
  Eu = qr.ReactCurrentDispatcher,
  zp = qr.ReactCurrentOwner,
  Wt = qr.ReactCurrentBatchConfig,
  q = 0,
  De = null,
  $e = null,
  We = 0,
  kt = 0,
  Gi = In(0),
  Me = 0,
  sa = null,
  Ci = 0,
  fc = 0,
  Mp = 0,
  As = null,
  ht = null,
  Fp = 0,
  Do = 1 / 0,
  $r = null,
  $u = !1,
  eh = null,
  Pn = null,
  bl = !1,
  Sn = null,
  Ru = 0,
  zs = 0,
  th = null,
  Wl = -1,
  Ul = 0;
function at() {
  return q & 6 ? Te() : Wl !== -1 ? Wl : (Wl = Te());
}
function En(e) {
  return e.mode & 1
    ? q & 2 && We !== 0
      ? We & -We
      : dT.transition !== null
      ? (Ul === 0 && (Ul = V1()), Ul)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Q1(e.type))),
        e)
    : 1;
}
function nr(e, t, r, n) {
  if (50 < zs) throw ((zs = 0), (th = null), Error(z(185)));
  Fa(e, r, n),
    (!(q & 2) || e !== De) &&
      (e === De && (!(q & 2) && (fc |= r), Me === 4 && un(e, We)),
      yt(e, n),
      r === 1 && q === 0 && !(t.mode & 1) && ((Do = Te() + 500), lc && Ln()));
}
function yt(e, t) {
  var r = e.callbackNode;
  d2(e, t);
  var n = hu(e, e === De ? We : 0);
  if (n === 0)
    r !== null && Pg(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Pg(r), t === 1))
      e.tag === 0 ? cT(b0.bind(null, e)) : hb(b0.bind(null, e)),
        sT(function () {
          !(q & 6) && Ln();
        }),
        (r = null);
    else {
      switch (N1(n)) {
        case 1:
          r = sp;
          break;
        case 4:
          r = L1;
          break;
        case 16:
          r = fu;
          break;
        case 536870912:
          r = B1;
          break;
        default:
          r = fu;
      }
      r = dS(r, iS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function iS(e, t) {
  if (((Wl = -1), (Ul = 0), q & 6)) throw Error(z(327));
  var r = e.callbackNode;
  if (uo() && e.callbackNode !== r) return null;
  var n = hu(e, e === De ? We : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Au(e, n);
  else {
    t = n;
    var i = q;
    q |= 2;
    var o = sS();
    (De !== e || We !== t) && (($r = null), (Do = Te() + 500), pi(e, t));
    do
      try {
        AT();
        break;
      } catch (a) {
        oS(e, a);
      }
    while (!0);
    bp(),
      (Eu.current = o),
      (q = i),
      $e !== null ? (t = 0) : ((De = null), (We = 0), (t = Me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ef(e)), i !== 0 && ((n = i), (t = rh(e, i)))), t === 1)
    )
      throw ((r = sa), pi(e, 0), un(e, n), yt(e, Te()), r);
    if (t === 6) un(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !$T(i) &&
          ((t = Au(e, n)),
          t === 2 && ((o = Ef(e)), o !== 0 && ((n = o), (t = rh(e, o)))),
          t === 1))
      )
        throw ((r = sa), pi(e, 0), un(e, n), yt(e, Te()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          qn(e, ht, $r);
          break;
        case 3:
          if (
            (un(e, n), (n & 130023424) === n && ((t = Fp + 500 - Te()), 10 < t))
          ) {
            if (hu(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              at(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Df(qn.bind(null, e, ht, $r), t);
            break;
          }
          qn(e, ht, $r);
          break;
        case 4:
          if ((un(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var s = 31 - rr(n);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (n &= ~o);
          }
          if (
            ((n = i),
            (n = Te() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * ET(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Df(qn.bind(null, e, ht, $r), n);
            break;
          }
          qn(e, ht, $r);
          break;
        case 5:
          qn(e, ht, $r);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return yt(e, Te()), e.callbackNode === r ? iS.bind(null, e) : null;
}
function rh(e, t) {
  var r = As;
  return (
    e.current.memoizedState.isDehydrated && (pi(e, t).flags |= 256),
    (e = Au(e, t)),
    e !== 2 && ((t = ht), (ht = r), t !== null && nh(t)),
    e
  );
}
function nh(e) {
  ht === null ? (ht = e) : ht.push.apply(ht, e);
}
function $T(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!ir(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function un(e, t) {
  for (
    t &= ~Mp,
      t &= ~fc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - rr(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function b0(e) {
  if (q & 6) throw Error(z(327));
  uo();
  var t = hu(e, 0);
  if (!(t & 1)) return yt(e, Te()), null;
  var r = Au(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Ef(e);
    n !== 0 && ((t = n), (r = rh(e, n)));
  }
  if (r === 1) throw ((r = sa), pi(e, 0), un(e, t), yt(e, Te()), r);
  if (r === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qn(e, ht, $r),
    yt(e, Te()),
    null
  );
}
function Op(e, t) {
  var r = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = r), q === 0 && ((Do = Te() + 500), lc && Ln());
  }
}
function Ti(e) {
  Sn !== null && Sn.tag === 0 && !(q & 6) && uo();
  var t = q;
  q |= 1;
  var r = Wt.transition,
    n = ne;
  try {
    if (((Wt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = n), (Wt.transition = r), (q = t), !(q & 6) && Ln();
  }
}
function Dp() {
  (kt = Gi.current), de(Gi);
}
function pi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), oT(r)), $e !== null))
    for (r = $e.return; r !== null; ) {
      var n = r;
      switch ((gp(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && yu();
          break;
        case 3:
          Fo(), de(gt), de(Je), Tp();
          break;
        case 5:
          Cp(n);
          break;
        case 4:
          Fo();
          break;
        case 13:
          de(ve);
          break;
        case 19:
          de(ve);
          break;
        case 10:
          Sp(n.type._context);
          break;
        case 22:
        case 23:
          Dp();
      }
      r = r.return;
    }
  if (
    ((De = e),
    ($e = e = $n(e.current, null)),
    (We = kt = t),
    (Me = 0),
    (sa = null),
    (Mp = fc = Ci = 0),
    (ht = As = null),
    ri !== null)
  ) {
    for (t = 0; t < ri.length; t++)
      if (((r = ri[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          o = r.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (n.next = s);
        }
        r.pending = n;
      }
    ri = null;
  }
  return e;
}
function oS(e, t) {
  do {
    var r = $e;
    try {
      if ((bp(), (Bl.current = Pu), _u)) {
        for (var n = be.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        _u = !1;
      }
      if (
        ((ki = 0),
        (Oe = Ae = be = null),
        ($s = !1),
        (na = 0),
        (zp.current = null),
        r === null || r.return === null)
      ) {
        (Me = 1), (sa = t), ($e = null);
        break;
      }
      e: {
        var o = e,
          s = r.return,
          a = r,
          l = t;
        if (
          ((t = We),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = s0(s);
          if (m !== null) {
            (m.flags &= -257),
              a0(m, s, a, o, t),
              m.mode & 1 && o0(o, u, t),
              (t = m),
              (l = u);
            var b = t.updateQueue;
            if (b === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else b.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              o0(o, u, t), jp();
              break e;
            }
            l = Error(z(426));
          }
        } else if (me && a.mode & 1) {
          var k = s0(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              a0(k, s, a, o, t),
              vp(Oo(l, a));
            break e;
          }
        }
        (o = l = Oo(l, a)),
          Me !== 4 && (Me = 2),
          As === null ? (As = [o]) : As.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Nb(o, l, t);
              Jg(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Pn === null || !Pn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = Wb(o, a, t);
                Jg(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      lS(r);
    } catch (P) {
      (t = P), $e === r && r !== null && ($e = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function sS() {
  var e = Eu.current;
  return (Eu.current = Pu), e === null ? Pu : e;
}
function jp() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    De === null || (!(Ci & 268435455) && !(fc & 268435455)) || un(De, We);
}
function Au(e, t) {
  var r = q;
  q |= 2;
  var n = sS();
  (De !== e || We !== t) && (($r = null), pi(e, t));
  do
    try {
      RT();
      break;
    } catch (i) {
      oS(e, i);
    }
  while (!0);
  if ((bp(), (q = r), (Eu.current = n), $e !== null)) throw Error(z(261));
  return (De = null), (We = 0), Me;
}
function RT() {
  for (; $e !== null; ) aS($e);
}
function AT() {
  for (; $e !== null && !r2(); ) aS($e);
}
function aS(e) {
  var t = cS(e.alternate, e, kt);
  (e.memoizedProps = e.pendingProps),
    t === null ? lS(e) : ($e = t),
    (zp.current = null);
}
function lS(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = CT(r, t)), r !== null)) {
        (r.flags &= 32767), ($e = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), ($e = null);
        return;
      }
    } else if (((r = kT(r, t, kt)), r !== null)) {
      $e = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $e = t;
      return;
    }
    $e = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function qn(e, t, r) {
  var n = ne,
    i = Wt.transition;
  try {
    (Wt.transition = null), (ne = 1), zT(e, t, r, n);
  } finally {
    (Wt.transition = i), (ne = n);
  }
  return null;
}
function zT(e, t, r, n) {
  do uo();
  while (Sn !== null);
  if (q & 6) throw Error(z(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (f2(e, o),
    e === De && (($e = De = null), (We = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      bl ||
      ((bl = !0),
      dS(fu, function () {
        return uo(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    (o = Wt.transition), (Wt.transition = null);
    var s = ne;
    ne = 1;
    var a = q;
    (q |= 4),
      (zp.current = null),
      _T(e, r),
      rS(r, e),
      Z2(Ff),
      (pu = !!Mf),
      (Ff = Mf = null),
      (e.current = r),
      PT(r),
      n2(),
      (q = a),
      (ne = s),
      (Wt.transition = o);
  } else e.current = r;
  if (
    (bl && ((bl = !1), (Sn = e), (Ru = i)),
    (o = e.pendingLanes),
    o === 0 && (Pn = null),
    s2(r.stateNode),
    yt(e, Te()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if ($u) throw (($u = !1), (e = eh), (eh = null), e);
  return (
    Ru & 1 && e.tag !== 0 && uo(),
    (o = e.pendingLanes),
    o & 1 ? (e === th ? zs++ : ((zs = 0), (th = e))) : (zs = 0),
    Ln(),
    null
  );
}
function uo() {
  if (Sn !== null) {
    var e = N1(Ru),
      t = Wt.transition,
      r = ne;
    try {
      if (((Wt.transition = null), (ne = 16 > e ? 16 : e), Sn === null))
        var n = !1;
      else {
        if (((e = Sn), (Sn = null), (Ru = 0), q & 6)) throw Error(z(331));
        var i = q;
        for (q |= 4, D = e.current; D !== null; ) {
          var o = D,
            s = o.child;
          if (D.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rs(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (D = d);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling,
                        m = c.return;
                      if ((Jb(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (D = f);
                        break;
                      }
                      D = m;
                    }
                }
              }
              var b = o.alternate;
              if (b !== null) {
                var y = b.child;
                if (y !== null) {
                  b.child = null;
                  do {
                    var k = y.sibling;
                    (y.sibling = null), (y = k);
                  } while (y !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (D = s);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rs(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (D = p);
                break e;
              }
              D = o.return;
            }
        }
        var h = e.current;
        for (D = h; D !== null; ) {
          s = D;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (D = g);
          else
            e: for (s = h; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dc(9, a);
                  }
                } catch (P) {
                  ke(a, a.return, P);
                }
              if (a === s) {
                D = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (D = C);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((q = i), Ln(), br && typeof br.onPostCommitFiberRoot == "function")
        )
          try {
            br.onPostCommitFiberRoot(nc, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (ne = r), (Wt.transition = t);
    }
  }
  return !1;
}
function S0(e, t, r) {
  (t = Oo(r, t)),
    (t = Nb(e, t, 1)),
    (e = _n(e, t, 1)),
    (t = at()),
    e !== null && (Fa(e, 1, t), yt(e, t));
}
function ke(e, t, r) {
  if (e.tag === 3) S0(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        S0(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Pn === null || !Pn.has(n)))
        ) {
          (e = Oo(r, e)),
            (e = Wb(t, e, 1)),
            (t = _n(t, e, 1)),
            (e = at()),
            t !== null && (Fa(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function MT(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = at()),
    (e.pingedLanes |= e.suspendedLanes & r),
    De === e &&
      (We & r) === r &&
      (Me === 4 || (Me === 3 && (We & 130023424) === We && 500 > Te() - Fp)
        ? pi(e, 0)
        : (Mp |= r)),
    yt(e, t);
}
function uS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ul), (ul <<= 1), !(ul & 130023424) && (ul = 4194304))
      : (t = 1));
  var r = at();
  (e = Kr(e, t)), e !== null && (Fa(e, t, r), yt(e, r));
}
function FT(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), uS(e, r);
}
function OT(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  n !== null && n.delete(t), uS(e, r);
}
var cS;
cS = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || gt.current) mt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (mt = !1), wT(e, t, r);
      mt = !!(e.flags & 131072);
    }
  else (mt = !1), me && t.flags & 1048576 && pb(t, xu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Nl(e, t), (e = t.pendingProps);
      var i = Ao(t, Je.current);
      lo(t, r), (i = Pp(null, t, n, e, i, r));
      var o = Ep();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            vt(n) ? ((o = !0), bu(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            wp(t),
            (i.updater = cc),
            (t.stateNode = i),
            (i._reactInternals = t),
            Wf(t, n, e, r),
            (t = Kf(null, t, n, !0, o, r)))
          : ((t.tag = 0), me && o && mp(t), ot(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Nl(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = jT(n)),
          (e = Yt(n, e)),
          i)
        ) {
          case 0:
            t = Hf(null, t, n, e, r);
            break e;
          case 1:
            t = c0(null, t, n, e, r);
            break e;
          case 11:
            t = l0(null, t, n, e, r);
            break e;
          case 14:
            t = u0(null, t, n, Yt(n.type, e), r);
            break e;
        }
        throw Error(z(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Yt(n, i)),
        Hf(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Yt(n, i)),
        c0(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((Gb(t), e === null)) throw Error(z(387));
        (n = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Sb(e, t),
          Cu(t, n, null, r);
        var s = t.memoizedState;
        if (((n = s.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Oo(Error(z(423)), t)), (t = d0(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Oo(Error(z(424)), t)), (t = d0(e, t, n, r, i));
            break e;
          } else
            for (
              Ct = Tn(t.stateNode.containerInfo.firstChild),
                Tt = t,
                me = !0,
                Jt = null,
                r = yb(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((zo(), n === i)) {
            t = Gr(e, t, r);
            break e;
          }
          ot(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xb(t),
        e === null && Bf(t),
        (n = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Of(n, i) ? (s = null) : o !== null && Of(n, o) && (t.flags |= 32),
        Kb(e, t),
        ot(e, t, s, r),
        t.child
      );
    case 6:
      return e === null && Bf(t), null;
    case 13:
      return Qb(e, t, r);
    case 4:
      return (
        kp(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Mo(t, null, n, r)) : ot(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Yt(n, i)),
        l0(e, t, n, i, r)
      );
    case 7:
      return ot(e, t, t.pendingProps, r), t.child;
    case 8:
      return ot(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return ot(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ae(wu, n._currentValue),
          (n._currentValue = s),
          o !== null)
        )
          if (ir(o.value, s)) {
            if (o.children === i.children && !gt.current) {
              t = Gr(e, t, r);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (o.tag === 1) {
                      (l = Ir(-1, r & -r)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= r),
                      (l = o.alternate),
                      l !== null && (l.lanes |= r),
                      Vf(o.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(z(341));
                (s.lanes |= r),
                  (a = s.alternate),
                  a !== null && (a.lanes |= r),
                  Vf(s, r, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ot(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        lo(t, r),
        (i = Ht(i)),
        (n = n(i)),
        (t.flags |= 1),
        ot(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = Yt(n, t.pendingProps)),
        (i = Yt(n.type, i)),
        u0(e, t, n, i, r)
      );
    case 15:
      return Ub(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Yt(n, i)),
        Nl(e, t),
        (t.tag = 1),
        vt(n) ? ((e = !0), bu(t)) : (e = !1),
        lo(t, r),
        Vb(t, n, i),
        Wf(t, n, i, r),
        Kf(null, t, n, !0, e, r)
      );
    case 19:
      return qb(e, t, r);
    case 22:
      return Hb(e, t, r);
  }
  throw Error(z(156, t.tag));
};
function dS(e, t) {
  return I1(e, t);
}
function DT(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Vt(e, t, r, n) {
  return new DT(e, t, r, n);
}
function Ip(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jT(e) {
  if (typeof e == "function") return Ip(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === np)) return 11;
    if (e === ip) return 14;
  }
  return 2;
}
function $n(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Vt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Hl(e, t, r, n, i, o) {
  var s = 2;
  if (((n = e), typeof e == "function")) Ip(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ji:
        return mi(r.children, i, o, t);
      case rp:
        (s = 8), (i |= 8);
        break;
      case hf:
        return (
          (e = Vt(12, r, t, i | 2)), (e.elementType = hf), (e.lanes = o), e
        );
      case pf:
        return (e = Vt(13, r, t, i)), (e.elementType = pf), (e.lanes = o), e;
      case mf:
        return (e = Vt(19, r, t, i)), (e.elementType = mf), (e.lanes = o), e;
      case x1:
        return hc(r, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case b1:
              s = 10;
              break e;
            case S1:
              s = 9;
              break e;
            case np:
              s = 11;
              break e;
            case ip:
              s = 14;
              break e;
            case on:
              (s = 16), (n = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Vt(s, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
  );
}
function mi(e, t, r, n) {
  return (e = Vt(7, e, n, t)), (e.lanes = r), e;
}
function hc(e, t, r, n) {
  return (
    (e = Vt(22, e, n, t)),
    (e.elementType = x1),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pd(e, t, r) {
  return (e = Vt(6, e, null, t)), (e.lanes = r), e;
}
function Ed(e, t, r) {
  return (
    (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function IT(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ld(0)),
    (this.expirationTimes = ld(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ld(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Lp(e, t, r, n, i, o, s, a, l) {
  return (
    (e = new IT(e, t, r, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Vt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    wp(o),
    e
  );
}
function LT(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Di,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function fS(e) {
  if (!e) return Mn;
  e = e._reactInternals;
  e: {
    if ($i(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (vt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (vt(r)) return fb(e, r, t);
  }
  return t;
}
function hS(e, t, r, n, i, o, s, a, l) {
  return (
    (e = Lp(r, n, !0, e, i, o, s, a, l)),
    (e.context = fS(null)),
    (r = e.current),
    (n = at()),
    (i = En(r)),
    (o = Ir(n, i)),
    (o.callback = t ?? null),
    _n(r, o, i),
    (e.current.lanes = i),
    Fa(e, i, n),
    yt(e, n),
    e
  );
}
function pc(e, t, r, n) {
  var i = t.current,
    o = at(),
    s = En(i);
  return (
    (r = fS(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Ir(o, s)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = _n(i, t, s)),
    e !== null && (nr(e, i, s, o), Ll(e, i, s)),
    s
  );
}
function zu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function x0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Bp(e, t) {
  x0(e, t), (e = e.alternate) && x0(e, t);
}
function BT() {
  return null;
}
var pS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vp(e) {
  this._internalRoot = e;
}
mc.prototype.render = Vp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  pc(e, t, null, null);
};
mc.prototype.unmount = Vp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ti(function () {
      pc(null, e, null, null);
    }),
      (t[Hr] = null);
  }
};
function mc(e) {
  this._internalRoot = e;
}
mc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = H1();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < ln.length && t !== 0 && t < ln[r].priority; r++);
    ln.splice(r, 0, e), r === 0 && G1(e);
  }
};
function Np(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function w0() {}
function VT(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var u = zu(s);
        o.call(u);
      };
    }
    var s = hS(t, n, e, 0, null, !1, !1, "", w0);
    return (
      (e._reactRootContainer = s),
      (e[Hr] = s.current),
      Zs(e.nodeType === 8 ? e.parentNode : e),
      Ti(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = zu(l);
      a.call(u);
    };
  }
  var l = Lp(e, 0, !1, null, null, !1, !1, "", w0);
  return (
    (e._reactRootContainer = l),
    (e[Hr] = l.current),
    Zs(e.nodeType === 8 ? e.parentNode : e),
    Ti(function () {
      pc(t, l, r, n);
    }),
    l
  );
}
function vc(e, t, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = zu(s);
        a.call(l);
      };
    }
    pc(t, s, e, i);
  } else s = VT(r, t, e, i, n);
  return zu(s);
}
W1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ps(t.pendingLanes);
        r !== 0 &&
          (ap(t, r | 1), yt(t, Te()), !(q & 6) && ((Do = Te() + 500), Ln()));
      }
      break;
    case 13:
      Ti(function () {
        var n = Kr(e, 1);
        if (n !== null) {
          var i = at();
          nr(n, e, 1, i);
        }
      }),
        Bp(e, 1);
  }
};
lp = function (e) {
  if (e.tag === 13) {
    var t = Kr(e, 134217728);
    if (t !== null) {
      var r = at();
      nr(t, e, 134217728, r);
    }
    Bp(e, 134217728);
  }
};
U1 = function (e) {
  if (e.tag === 13) {
    var t = En(e),
      r = Kr(e, t);
    if (r !== null) {
      var n = at();
      nr(r, e, t, n);
    }
    Bp(e, t);
  }
};
H1 = function () {
  return ne;
};
K1 = function (e, t) {
  var r = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = r;
  }
};
Tf = function (e, t, r) {
  switch (t) {
    case "input":
      if ((yf(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = ac(n);
            if (!i) throw Error(z(90));
            k1(n), yf(n, i);
          }
        }
      }
      break;
    case "textarea":
      T1(e, r);
      break;
    case "select":
      (t = r.value), t != null && io(e, !!r.multiple, t, !1);
  }
};
z1 = Op;
M1 = Ti;
var NT = { usingClientEntryPoint: !1, Events: [Da, Vi, ac, R1, A1, Op] },
  ss = {
    findFiberByHostInstance: ti,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  WT = {
    bundleType: ss.bundleType,
    version: ss.version,
    rendererPackageName: ss.rendererPackageName,
    rendererConfig: ss.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = D1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ss.findFiberByHostInstance || BT,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sl.isDisabled && Sl.supportsFiber)
    try {
      (nc = Sl.inject(WT)), (br = Sl);
    } catch {}
}
Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = NT;
Rt.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Np(t)) throw Error(z(200));
  return LT(e, t, null, r);
};
Rt.createRoot = function (e, t) {
  if (!Np(e)) throw Error(z(299));
  var r = !1,
    n = "",
    i = pS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Lp(e, 1, !1, null, null, r, !1, n, i)),
    (e[Hr] = t.current),
    Zs(e.nodeType === 8 ? e.parentNode : e),
    new Vp(t)
  );
};
Rt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = D1(t)), (e = e === null ? null : e.stateNode), e;
};
Rt.flushSync = function (e) {
  return Ti(e);
};
Rt.hydrate = function (e, t, r) {
  if (!gc(t)) throw Error(z(200));
  return vc(null, e, t, !0, r);
};
Rt.hydrateRoot = function (e, t, r) {
  if (!Np(e)) throw Error(z(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    o = "",
    s = pS;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
    (t = hS(t, null, e, 1, r ?? null, i, !1, o, s)),
    (e[Hr] = t.current),
    Zs(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new mc(t);
};
Rt.render = function (e, t, r) {
  if (!gc(t)) throw Error(z(200));
  return vc(null, e, t, !1, r);
};
Rt.unmountComponentAtNode = function (e) {
  if (!gc(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Ti(function () {
        vc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Hr] = null);
        });
      }),
      !0)
    : !1;
};
Rt.unstable_batchedUpdates = Op;
Rt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!gc(r)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return vc(e, t, r, !1, n);
};
Rt.version = "18.3.1-next-f1338f8080-20240426";
function mS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mS);
    } catch (e) {
      console.error(e);
    }
}
mS(), (m1.exports = Rt);
var Wp = m1.exports,
  k0 = Wp;
(df.createRoot = k0.createRoot), (df.hydrateRoot = k0.hydrateRoot);
function UT(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function HT(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var KT = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (i) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
            ? (o = n.container.firstChild)
            : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, o),
          n.tags.push(i);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(HT(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = UT(i);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Qe = "-ms-",
  Mu = "-moz-",
  Z = "-webkit-",
  gS = "comm",
  Up = "rule",
  Hp = "decl",
  GT = "@import",
  vS = "@keyframes",
  QT = "@layer",
  qT = Math.abs,
  yc = String.fromCharCode,
  YT = Object.assign;
function XT(e, t) {
  return Ne(e, 0) ^ 45
    ? (((((((t << 2) ^ Ne(e, 0)) << 2) ^ Ne(e, 1)) << 2) ^ Ne(e, 2)) << 2) ^
        Ne(e, 3)
    : 0;
}
function yS(e) {
  return e.trim();
}
function ZT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, r) {
  return e.replace(t, r);
}
function ih(e, t) {
  return e.indexOf(t);
}
function Ne(e, t) {
  return e.charCodeAt(t) | 0;
}
function aa(e, t, r) {
  return e.slice(t, r);
}
function gr(e) {
  return e.length;
}
function Kp(e) {
  return e.length;
}
function xl(e, t) {
  return t.push(e), e;
}
function JT(e, t) {
  return e.map(t).join("");
}
var bc = 1,
  jo = 1,
  bS = 0,
  bt = 0,
  Ee = 0,
  Ho = "";
function Sc(e, t, r, n, i, o, s) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: i,
    children: o,
    line: bc,
    column: jo,
    length: s,
    return: "",
  };
}
function as(e, t) {
  return YT(Sc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function e_() {
  return Ee;
}
function t_() {
  return (
    (Ee = bt > 0 ? Ne(Ho, --bt) : 0), jo--, Ee === 10 && ((jo = 1), bc--), Ee
  );
}
function _t() {
  return (
    (Ee = bt < bS ? Ne(Ho, bt++) : 0), jo++, Ee === 10 && ((jo = 1), bc++), Ee
  );
}
function xr() {
  return Ne(Ho, bt);
}
function Kl() {
  return bt;
}
function Ia(e, t) {
  return aa(Ho, e, t);
}
function la(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function SS(e) {
  return (bc = jo = 1), (bS = gr((Ho = e))), (bt = 0), [];
}
function xS(e) {
  return (Ho = ""), e;
}
function Gl(e) {
  return yS(Ia(bt - 1, oh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function r_(e) {
  for (; (Ee = xr()) && Ee < 33; ) _t();
  return la(e) > 2 || la(Ee) > 3 ? "" : " ";
}
function n_(e, t) {
  for (
    ;
    --t &&
    _t() &&
    !(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97));

  );
  return Ia(e, Kl() + (t < 6 && xr() == 32 && _t() == 32));
}
function oh(e) {
  for (; _t(); )
    switch (Ee) {
      case e:
        return bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && oh(Ee);
        break;
      case 40:
        e === 41 && oh(e);
        break;
      case 92:
        _t();
        break;
    }
  return bt;
}
function i_(e, t) {
  for (; _t() && e + Ee !== 57; ) if (e + Ee === 84 && xr() === 47) break;
  return "/*" + Ia(t, bt - 1) + "*" + yc(e === 47 ? e : _t());
}
function o_(e) {
  for (; !la(xr()); ) _t();
  return Ia(e, bt);
}
function s_(e) {
  return xS(Ql("", null, null, null, [""], (e = SS(e)), 0, [0], e));
}
function Ql(e, t, r, n, i, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      m = 0,
      b = 0,
      y = 1,
      k = 1,
      p = 1,
      h = 0,
      g = "",
      C = i,
      P = o,
      A = n,
      R = g;
    k;

  )
    switch (((b = h), (h = _t()))) {
      case 40:
        if (b != 108 && Ne(R, d - 1) == 58) {
          ih((R += J(Gl(h), "&", "&\f")), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Gl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += r_(b);
        break;
      case 92:
        R += n_(Kl() - 1, 7);
        continue;
      case 47:
        switch (xr()) {
          case 42:
          case 47:
            xl(a_(i_(_t(), Kl()), t, r), l);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * y:
        a[u++] = gr(R) * p;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            k = 0;
          case 59 + c:
            p == -1 && (R = J(R, /\f/g, "")),
              m > 0 &&
                gr(R) - d &&
                xl(
                  m > 32
                    ? T0(R + ";", n, r, d - 1)
                    : T0(J(R, " ", "") + ";", n, r, d - 2),
                  l
                );
            break;
          case 59:
            R += ";";
          default:
            if (
              (xl((A = C0(R, t, r, u, c, i, a, g, (C = []), (P = []), d)), o),
              h === 123)
            )
              if (c === 0) Ql(R, t, A, A, C, o, d, a, P);
              else
                switch (f === 99 && Ne(R, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ql(
                      e,
                      A,
                      A,
                      n && xl(C0(e, A, A, 0, 0, i, a, g, i, (C = []), d), P),
                      i,
                      P,
                      d,
                      a,
                      n ? C : P
                    );
                    break;
                  default:
                    Ql(R, A, A, A, [""], P, 0, a, P);
                }
        }
        (u = c = m = 0), (y = p = 1), (g = R = ""), (d = s);
        break;
      case 58:
        (d = 1 + gr(R)), (m = b);
      default:
        if (y < 1) {
          if (h == 123) --y;
          else if (h == 125 && y++ == 0 && t_() == 125) continue;
        }
        switch (((R += yc(h)), h * y)) {
          case 38:
            p = c > 0 ? 1 : ((R += "\f"), -1);
            break;
          case 44:
            (a[u++] = (gr(R) - 1) * p), (p = 1);
            break;
          case 64:
            xr() === 45 && (R += Gl(_t())),
              (f = xr()),
              (c = d = gr((g = R += o_(Kl())))),
              h++;
            break;
          case 45:
            b === 45 && gr(R) == 2 && (y = 0);
        }
    }
  return o;
}
function C0(e, t, r, n, i, o, s, a, l, u, c) {
  for (
    var d = i - 1, f = i === 0 ? o : [""], m = Kp(f), b = 0, y = 0, k = 0;
    b < n;
    ++b
  )
    for (var p = 0, h = aa(e, d + 1, (d = qT((y = s[b])))), g = e; p < m; ++p)
      (g = yS(y > 0 ? f[p] + " " + h : J(h, /&\f/g, f[p]))) && (l[k++] = g);
  return Sc(e, t, r, i === 0 ? Up : a, l, u, c);
}
function a_(e, t, r) {
  return Sc(e, t, r, gS, yc(e_()), aa(e, 2, -2), 0);
}
function T0(e, t, r, n) {
  return Sc(e, t, r, Hp, aa(e, 0, n), aa(e, n + 1, -1), n);
}
function co(e, t) {
  for (var r = "", n = Kp(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
  return r;
}
function l_(e, t, r, n) {
  switch (e.type) {
    case QT:
      if (e.children.length) break;
    case GT:
    case Hp:
      return (e.return = e.return || e.value);
    case gS:
      return "";
    case vS:
      return (e.return = e.value + "{" + co(e.children, n) + "}");
    case Up:
      e.value = e.props.join(",");
  }
  return gr((r = co(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function u_(e) {
  var t = Kp(e);
  return function (r, n, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](r, n, i, o) || "";
    return s;
  };
}
function c_(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var _0 = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var i = t(n);
    return r.set(n, i), i;
  };
};
function wS(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var d_ = function (t, r, n) {
    for (
      var i = 0, o = 0;
      (i = o), (o = xr()), i === 38 && o === 12 && (r[n] = 1), !la(o);

    )
      _t();
    return Ia(t, bt);
  },
  f_ = function (t, r) {
    var n = -1,
      i = 44;
    do
      switch (la(i)) {
        case 0:
          i === 38 && xr() === 12 && (r[n] = 1), (t[n] += d_(bt - 1, r, n));
          break;
        case 2:
          t[n] += Gl(i);
          break;
        case 4:
          if (i === 44) {
            (t[++n] = xr() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += yc(i);
      }
    while ((i = _t()));
    return t;
  },
  h_ = function (t, r) {
    return xS(f_(SS(t), r));
  },
  P0 = new WeakMap(),
  p_ = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          i = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !P0.get(n)) &&
        !i
      ) {
        P0.set(t, !0);
        for (
          var o = [], s = h_(r, o), a = n.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = o[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  m_ = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function kS(e, t) {
  switch (XT(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Mu + e + Qe + e + e;
    case 6828:
    case 4268:
      return Z + e + Qe + e + e;
    case 6165:
      return Z + e + Qe + "flex-" + e + e;
    case 5187:
      return (
        Z + e + J(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + Qe + "flex-$1$2") + e
      );
    case 5443:
      return Z + e + Qe + "flex-item-" + J(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Z +
        e +
        Qe +
        "flex-line-pack" +
        J(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Z + e + Qe + J(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + Qe + J(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Z +
        "box-" +
        J(e, "-grow", "") +
        Z +
        e +
        Qe +
        J(e, "grow", "positive") +
        e
      );
    case 4554:
      return Z + J(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return (
        J(J(J(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        J(
          J(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + Qe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (gr(e) - 1 - t > 6)
        switch (Ne(e, t + 1)) {
          case 109:
            if (Ne(e, t + 4) !== 45) break;
          case 102:
            return (
              J(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Z +
                  "$2-$3$1" +
                  Mu +
                  (Ne(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ih(e, "stretch")
              ? kS(J(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ne(e, t + 1) !== 115) break;
    case 6444:
      switch (Ne(e, gr(e) - 3 - (~ih(e, "!important") && 10))) {
        case 107:
          return J(e, ":", ":" + Z) + e;
        case 101:
          return (
            J(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                (Ne(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Z +
                "$2$3$1" +
                Qe +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ne(e, t + 11)) {
        case 114:
          return Z + e + Qe + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + Qe + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + Qe + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + Qe + e + e;
  }
  return e;
}
var g_ = function (t, r, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Hp:
          t.return = kS(t.value, t.length);
          break;
        case vS:
          return co([as(t, { value: J(t.value, "@", "@" + Z) })], i);
        case Up:
          if (t.length)
            return JT(t.props, function (o) {
              switch (ZT(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return co(
                    [as(t, { props: [J(o, /:(read-\w+)/, ":" + Mu + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return co(
                    [
                      as(t, {
                        props: [J(o, /:(plac\w+)/, ":" + Z + "input-$1")],
                      }),
                      as(t, { props: [J(o, /:(plac\w+)/, ":" + Mu + "$1")] }),
                      as(t, { props: [J(o, /:(plac\w+)/, Qe + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  v_ = [g_],
  y_ = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (y) {
        var k = y.getAttribute("data-emotion");
        k.indexOf(" ") !== -1 &&
          (document.head.appendChild(y), y.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || v_,
      o = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (y) {
          for (
            var k = y.getAttribute("data-emotion").split(" "), p = 1;
            p < k.length;
            p++
          )
            o[k[p]] = !0;
          a.push(y);
        }
      );
    var l,
      u = [p_, m_];
    {
      var c,
        d = [
          l_,
          c_(function (y) {
            c.insert(y);
          }),
        ],
        f = u_(u.concat(i, d)),
        m = function (k) {
          return co(s_(k), f);
        };
      l = function (k, p, h, g) {
        (c = h),
          m(k ? k + "{" + p.styles + "}" : p.styles),
          g && (b.inserted[p.name] = !0);
      };
    }
    var b = {
      key: r,
      sheet: new KT({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return b.sheet.hydrate(a), b;
  };
function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fu.apply(this, arguments)
  );
}
var CS = { exports: {} },
  ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie = typeof Symbol == "function" && Symbol.for,
  Gp = Ie ? Symbol.for("react.element") : 60103,
  Qp = Ie ? Symbol.for("react.portal") : 60106,
  xc = Ie ? Symbol.for("react.fragment") : 60107,
  wc = Ie ? Symbol.for("react.strict_mode") : 60108,
  kc = Ie ? Symbol.for("react.profiler") : 60114,
  Cc = Ie ? Symbol.for("react.provider") : 60109,
  Tc = Ie ? Symbol.for("react.context") : 60110,
  qp = Ie ? Symbol.for("react.async_mode") : 60111,
  _c = Ie ? Symbol.for("react.concurrent_mode") : 60111,
  Pc = Ie ? Symbol.for("react.forward_ref") : 60112,
  Ec = Ie ? Symbol.for("react.suspense") : 60113,
  b_ = Ie ? Symbol.for("react.suspense_list") : 60120,
  $c = Ie ? Symbol.for("react.memo") : 60115,
  Rc = Ie ? Symbol.for("react.lazy") : 60116,
  S_ = Ie ? Symbol.for("react.block") : 60121,
  x_ = Ie ? Symbol.for("react.fundamental") : 60117,
  w_ = Ie ? Symbol.for("react.responder") : 60118,
  k_ = Ie ? Symbol.for("react.scope") : 60119;
function zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Gp:
        switch (((e = e.type), e)) {
          case qp:
          case _c:
          case xc:
          case kc:
          case wc:
          case Ec:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Tc:
              case Pc:
              case Rc:
              case $c:
              case Cc:
                return e;
              default:
                return t;
            }
        }
      case Qp:
        return t;
    }
  }
}
function TS(e) {
  return zt(e) === _c;
}
ie.AsyncMode = qp;
ie.ConcurrentMode = _c;
ie.ContextConsumer = Tc;
ie.ContextProvider = Cc;
ie.Element = Gp;
ie.ForwardRef = Pc;
ie.Fragment = xc;
ie.Lazy = Rc;
ie.Memo = $c;
ie.Portal = Qp;
ie.Profiler = kc;
ie.StrictMode = wc;
ie.Suspense = Ec;
ie.isAsyncMode = function (e) {
  return TS(e) || zt(e) === qp;
};
ie.isConcurrentMode = TS;
ie.isContextConsumer = function (e) {
  return zt(e) === Tc;
};
ie.isContextProvider = function (e) {
  return zt(e) === Cc;
};
ie.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gp;
};
ie.isForwardRef = function (e) {
  return zt(e) === Pc;
};
ie.isFragment = function (e) {
  return zt(e) === xc;
};
ie.isLazy = function (e) {
  return zt(e) === Rc;
};
ie.isMemo = function (e) {
  return zt(e) === $c;
};
ie.isPortal = function (e) {
  return zt(e) === Qp;
};
ie.isProfiler = function (e) {
  return zt(e) === kc;
};
ie.isStrictMode = function (e) {
  return zt(e) === wc;
};
ie.isSuspense = function (e) {
  return zt(e) === Ec;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xc ||
    e === _c ||
    e === kc ||
    e === wc ||
    e === Ec ||
    e === b_ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Rc ||
        e.$$typeof === $c ||
        e.$$typeof === Cc ||
        e.$$typeof === Tc ||
        e.$$typeof === Pc ||
        e.$$typeof === x_ ||
        e.$$typeof === w_ ||
        e.$$typeof === k_ ||
        e.$$typeof === S_))
  );
};
ie.typeOf = zt;
CS.exports = ie;
var C_ = CS.exports,
  _S = C_,
  T_ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  __ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  PS = {};
PS[_S.ForwardRef] = T_;
PS[_S.Memo] = __;
var P_ = !0;
function E_(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (n += i + " ");
    }),
    n
  );
}
var ES = function (t, r, n) {
    var i = t.key + "-" + r.name;
    (n === !1 || P_ === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = r.styles);
  },
  $S = function (t, r, n) {
    ES(t, r, n);
    var i = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var o = r;
      do t.insert(r === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function $_(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var R_ = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  A_ = /[A-Z]|^ms/g,
  z_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  RS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  E0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  $d = wS(function (e) {
    return RS(e) ? e : e.replace(A_, "-$&").toLowerCase();
  }),
  $0 = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(z_, function (n, i, o) {
            return (vr = { name: i, styles: o, next: vr }), i;
          });
    }
    return R_[t] !== 1 && !RS(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function ua(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (vr = { name: r.name, styles: r.styles, next: vr }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (vr = { name: n.name, styles: n.styles, next: vr }), (n = n.next);
        var i = r.styles + ";";
        return i;
      }
      return M_(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var o = vr,
          s = r(e);
        return (vr = o), ua(e, t, s);
      }
      break;
    }
  }
  if (t == null) return r;
  var a = t[r];
  return a !== void 0 ? a : r;
}
function M_(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++) n += ua(e, t, r[i]) + ";";
  else
    for (var o in r) {
      var s = r[o];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (n += o + "{" + t[s] + "}")
          : E0(s) && (n += $d(o) + ":" + $0(o, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          E0(s[a]) && (n += $d(o) + ":" + $0(o, s[a]) + ";");
      else {
        var l = ua(e, t, s);
        switch (o) {
          case "animation":
          case "animationName": {
            n += $d(o) + ":" + l + ";";
            break;
          }
          default:
            n += o + "{" + l + "}";
        }
      }
    }
  return n;
}
var R0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  vr,
  Yp = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    vr = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((i = !1), (o += ua(n, r, s)))
      : (o += s[0]);
    for (var a = 1; a < t.length; a++) (o += ua(n, r, t[a])), i && (o += s[a]);
    R0.lastIndex = 0;
    for (var l = "", u; (u = R0.exec(o)) !== null; ) l += "-" + u[1];
    var c = $_(o) + l;
    return { name: c, styles: o, next: vr };
  },
  F_ = function (t) {
    return t();
  },
  AS = vg.useInsertionEffect ? vg.useInsertionEffect : !1,
  O_ = AS || F_,
  A0 = AS || T.useLayoutEffect,
  zS = T.createContext(typeof HTMLElement < "u" ? y_({ key: "css" }) : null);
zS.Provider;
var MS = function (t) {
    return T.forwardRef(function (r, n) {
      var i = T.useContext(zS);
      return t(r, i, n);
    });
  },
  ca = T.createContext({}),
  D_ = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return Fu({}, t, r);
  },
  j_ = _0(function (e) {
    return _0(function (t) {
      return D_(e, t);
    });
  }),
  I_ = function (t) {
    var r = T.useContext(ca);
    return (
      t.theme !== r && (r = j_(r)(t.theme)),
      T.createElement(ca.Provider, { value: r }, t.children)
    );
  },
  Ac = MS(function (e, t) {
    var r = e.styles,
      n = Yp([r], void 0, T.useContext(ca)),
      i = T.useRef();
    return (
      A0(
        function () {
          var o = t.key + "-global",
            s = new t.sheet.constructor({
              key: o,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + o + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", o), s.hydrate([l])),
            (i.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      A0(
        function () {
          var o = i.current,
            s = o[0],
            a = o[1];
          if (a) {
            o[1] = !1;
            return;
          }
          if ((n.next !== void 0 && $S(t, n.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", n, s, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
function L_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Yp(t);
}
var B_ = function () {
    var t = L_.apply(void 0, arguments),
      r = "animation-" + t.name;
    return {
      name: r,
      styles: "@keyframes " + r + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  FS = String.raw,
  OS = FS`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  V_ = () => _.jsx(Ac, { styles: OS }),
  N_ = ({ scope: e = "" }) =>
    _.jsx(Ac, {
      styles: FS`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${OS}
    `,
    });
function W_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Bn(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = "useContext",
      providerName: i = "Provider",
      errorMessage: o,
      defaultValue: s,
    } = e,
    a = T.createContext(s);
  a.displayName = t;
  function l() {
    var u;
    const c = T.useContext(a);
    if (!c && r) {
      const d = new Error(o ?? W_(n, i));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [a.Provider, l, a];
}
var [U_, H_] = Bn({ strict: !1, name: "PortalManagerContext" });
function DS(e) {
  const { children: t, zIndex: r } = e;
  return _.jsx(U_, { value: { zIndex: r }, children: t });
}
DS.displayName = "PortalManager";
var Ou =
    globalThis != null && globalThis.document ? T.useLayoutEffect : T.useEffect,
  [jS, K_] = Bn({ strict: !1, name: "PortalContext" }),
  Xp = "chakra-portal",
  G_ = ".chakra-portal",
  Q_ = (e) =>
    _.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  q_ = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, i] = T.useState(null),
      o = T.useRef(null),
      [, s] = T.useState({});
    T.useEffect(() => s({}), []);
    const a = K_(),
      l = H_();
    Ou(() => {
      if (!n) return;
      const c = n.ownerDocument,
        d = t ? a ?? c.body : c.body;
      if (!d) return;
      (o.current = c.createElement("div")),
        (o.current.className = Xp),
        d.appendChild(o.current),
        s({});
      const f = o.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [n]);
    const u =
      l != null && l.zIndex
        ? _.jsx(Q_, { zIndex: l == null ? void 0 : l.zIndex, children: r })
        : r;
    return o.current
      ? Wp.createPortal(_.jsx(jS, { value: o.current, children: u }), o.current)
      : _.jsx("span", {
          ref: (c) => {
            c && i(c);
          },
        });
  },
  Y_ = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      i = r.current,
      o = i ?? (typeof window < "u" ? document.body : void 0),
      s = T.useMemo(() => {
        const l = i == null ? void 0 : i.ownerDocument.createElement("div");
        return l && (l.className = Xp), l;
      }, [i]),
      [, a] = T.useState({});
    return (
      Ou(() => a({}), []),
      Ou(() => {
        if (!(!s || !o))
          return (
            o.appendChild(s),
            () => {
              o.removeChild(s);
            }
          );
      }, [s, o]),
      o && s
        ? Wp.createPortal(_.jsx(jS, { value: n ? s : null, children: t }), s)
        : null
    );
  };
function zc(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t;
  return r ? _.jsx(Y_, { containerRef: r, ...n }) : _.jsx(q_, { ...n });
}
zc.className = Xp;
zc.selector = G_;
zc.displayName = "Portal";
function X_() {
  const e = T.useContext(ca);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Zp = T.createContext({});
Zp.displayName = "ColorModeContext";
function La() {
  const e = T.useContext(Zp);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Z_(e, t) {
  const { colorMode: r } = La();
  return r === "dark" ? t : e;
}
var wl = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function J_(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const i = t ? r.preventTransition() : void 0;
        (document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          i == null || i();
      },
      setClassName(n) {
        document.body.classList.add(n ? wl.dark : wl.light),
          document.body.classList.remove(n ? wl.light : wl.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(n) {
        var i;
        return ((i = r.query().matches) != null ? i : n === "dark")
          ? "dark"
          : "light";
      },
      addListener(n) {
        const i = r.query(),
          o = (s) => {
            n(s.matches ? "dark" : "light");
          };
        return (
          typeof i.addListener == "function"
            ? i.addListener(o)
            : i.addEventListener("change", o),
          () => {
            typeof i.removeListener == "function"
              ? i.removeListener(o)
              : i.removeEventListener("change", o);
          }
        );
      },
      preventTransition() {
        const n = document.createElement("style");
        return (
          n.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(n),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(n);
                });
              });
          }
        );
      },
    };
  return r;
}
var eP = "chakra-ui-color-mode";
function tP(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {}
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var rP = tP(eP),
  z0 = () => {};
function M0(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function IS(e) {
  const {
      value: t,
      children: r,
      options: {
        useSystemColorMode: n,
        initialColorMode: i,
        disableTransitionOnChange: o,
      } = {},
      colorModeManager: s = rP,
    } = e,
    a = i === "dark" ? "dark" : "light",
    [l, u] = T.useState(() => M0(s, a)),
    [c, d] = T.useState(() => M0(s)),
    {
      getSystemTheme: f,
      setClassName: m,
      setDataset: b,
      addListener: y,
    } = T.useMemo(() => J_({ preventTransition: o }), [o]),
    k = i === "system" && !l ? c : l,
    p = T.useCallback(
      (C) => {
        const P = C === "system" ? f() : C;
        u(P), m(P === "dark"), b(P), s.set(P);
      },
      [s, f, m, b]
    );
  Ou(() => {
    i === "system" && d(f());
  }, []),
    T.useEffect(() => {
      const C = s.get();
      if (C) {
        p(C);
        return;
      }
      if (i === "system") {
        p("system");
        return;
      }
      p(a);
    }, [s, a, i, p]);
  const h = T.useCallback(() => {
    p(k === "dark" ? "light" : "dark");
  }, [k, p]);
  T.useEffect(() => {
    if (n) return y(p);
  }, [n, y, p]);
  const g = T.useMemo(
    () => ({
      colorMode: t ?? k,
      toggleColorMode: t ? z0 : h,
      setColorMode: t ? z0 : p,
      forced: t !== void 0,
    }),
    [k, h, p, t]
  );
  return _.jsx(Zp.Provider, { value: g, children: r });
}
IS.displayName = "ColorModeProvider";
function nP() {
  const e = La(),
    t = X_();
  return { ...e, theme: t };
}
var et = (...e) => e.filter(Boolean).join(" ");
function Ut(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function xn(e, ...t) {
  return iP(e) ? e(...t) : e;
}
var iP = (e) => typeof e == "function",
  cr = (e) => (e ? "" : void 0),
  Rd = (e) => (e ? !0 : void 0);
function F0(...e) {
  return function (r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
var Du = { exports: {} };
Du.exports;
(function (e, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    i = 800,
    o = 16,
    s = 9007199254740991,
    a = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    m = "[object Function]",
    b = "[object GeneratorFunction]",
    y = "[object Map]",
    k = "[object Number]",
    p = "[object Null]",
    h = "[object Object]",
    g = "[object Proxy]",
    C = "[object RegExp]",
    P = "[object Set]",
    A = "[object String]",
    R = "[object Undefined]",
    $ = "[object WeakMap]",
    O = "[object ArrayBuffer]",
    j = "[object DataView]",
    xe = "[object Float32Array]",
    or = "[object Float64Array]",
    Cr = "[object Int8Array]",
    Nn = "[object Int16Array]",
    Re = "[object Int32Array]",
    tt = "[object Uint8Array]",
    Tr = "[object Uint8ClampedArray]",
    M = "[object Uint16Array]",
    W = "[object Uint32Array]",
    U = /[\\^$.*+?()[\]{}|]/g,
    ge = /^\[object .+?Constructor\]$/,
    Pe = /^(?:0|[1-9]\d*)$/,
    re = {};
  (re[xe] =
    re[or] =
    re[Cr] =
    re[Nn] =
    re[Re] =
    re[tt] =
    re[Tr] =
    re[M] =
    re[W] =
      !0),
    (re[a] =
      re[l] =
      re[O] =
      re[c] =
      re[j] =
      re[d] =
      re[f] =
      re[m] =
      re[y] =
      re[k] =
      re[h] =
      re[C] =
      re[P] =
      re[A] =
      re[$] =
        !1);
  var sr = typeof nl == "object" && nl && nl.Object === Object && nl,
    Qo = typeof self == "object" && self && self.Object === Object && self,
    St = sr || Qo || Function("return this")(),
    Wn = t && !t.nodeType && t,
    qo = Wn && !0 && e && !e.nodeType && e,
    Gm = qo && qo.exports === Wn,
    Uc = Gm && sr.process,
    Qm = (function () {
      try {
        var v = qo && qo.require && qo.require("util").types;
        return v || (Uc && Uc.binding && Uc.binding("util"));
      } catch {}
    })(),
    qm = Qm && Qm.isTypedArray;
  function ok(v, w, E) {
    switch (E.length) {
      case 0:
        return v.call(w);
      case 1:
        return v.call(w, E[0]);
      case 2:
        return v.call(w, E[0], E[1]);
      case 3:
        return v.call(w, E[0], E[1], E[2]);
    }
    return v.apply(w, E);
  }
  function sk(v, w) {
    for (var E = -1, I = Array(v); ++E < v; ) I[E] = w(E);
    return I;
  }
  function ak(v) {
    return function (w) {
      return v(w);
    };
  }
  function lk(v, w) {
    return v == null ? void 0 : v[w];
  }
  function uk(v, w) {
    return function (E) {
      return v(w(E));
    };
  }
  var ck = Array.prototype,
    dk = Function.prototype,
    Qa = Object.prototype,
    Hc = St["__core-js_shared__"],
    qa = dk.toString,
    Xr = Qa.hasOwnProperty,
    Ym = (function () {
      var v = /[^.]+$/.exec((Hc && Hc.keys && Hc.keys.IE_PROTO) || "");
      return v ? "Symbol(src)_1." + v : "";
    })(),
    Xm = Qa.toString,
    fk = qa.call(Object),
    hk = RegExp(
      "^" +
        qa
          .call(Xr)
          .replace(U, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ya = Gm ? St.Buffer : void 0,
    Zm = St.Symbol,
    Jm = St.Uint8Array;
  Ya && Ya.allocUnsafe;
  var eg = uk(Object.getPrototypeOf, Object),
    tg = Object.create,
    pk = Qa.propertyIsEnumerable,
    mk = ck.splice,
    Un = Zm ? Zm.toStringTag : void 0,
    Xa = (function () {
      try {
        var v = Qc(Object, "defineProperty");
        return v({}, "", {}), v;
      } catch {}
    })(),
    gk = Ya ? Ya.isBuffer : void 0,
    rg = Math.max,
    vk = Date.now,
    ng = Qc(St, "Map"),
    Yo = Qc(Object, "create"),
    yk = (function () {
      function v() {}
      return function (w) {
        if (!Kn(w)) return {};
        if (tg) return tg(w);
        v.prototype = w;
        var E = new v();
        return (v.prototype = void 0), E;
      };
    })();
  function Hn(v) {
    var w = -1,
      E = v == null ? 0 : v.length;
    for (this.clear(); ++w < E; ) {
      var I = v[w];
      this.set(I[0], I[1]);
    }
  }
  function bk() {
    (this.__data__ = Yo ? Yo(null) : {}), (this.size = 0);
  }
  function Sk(v) {
    var w = this.has(v) && delete this.__data__[v];
    return (this.size -= w ? 1 : 0), w;
  }
  function xk(v) {
    var w = this.__data__;
    if (Yo) {
      var E = w[v];
      return E === n ? void 0 : E;
    }
    return Xr.call(w, v) ? w[v] : void 0;
  }
  function wk(v) {
    var w = this.__data__;
    return Yo ? w[v] !== void 0 : Xr.call(w, v);
  }
  function kk(v, w) {
    var E = this.__data__;
    return (
      (this.size += this.has(v) ? 0 : 1),
      (E[v] = Yo && w === void 0 ? n : w),
      this
    );
  }
  (Hn.prototype.clear = bk),
    (Hn.prototype.delete = Sk),
    (Hn.prototype.get = xk),
    (Hn.prototype.has = wk),
    (Hn.prototype.set = kk);
  function _r(v) {
    var w = -1,
      E = v == null ? 0 : v.length;
    for (this.clear(); ++w < E; ) {
      var I = v[w];
      this.set(I[0], I[1]);
    }
  }
  function Ck() {
    (this.__data__ = []), (this.size = 0);
  }
  function Tk(v) {
    var w = this.__data__,
      E = Za(w, v);
    if (E < 0) return !1;
    var I = w.length - 1;
    return E == I ? w.pop() : mk.call(w, E, 1), --this.size, !0;
  }
  function _k(v) {
    var w = this.__data__,
      E = Za(w, v);
    return E < 0 ? void 0 : w[E][1];
  }
  function Pk(v) {
    return Za(this.__data__, v) > -1;
  }
  function Ek(v, w) {
    var E = this.__data__,
      I = Za(E, v);
    return I < 0 ? (++this.size, E.push([v, w])) : (E[I][1] = w), this;
  }
  (_r.prototype.clear = Ck),
    (_r.prototype.delete = Tk),
    (_r.prototype.get = _k),
    (_r.prototype.has = Pk),
    (_r.prototype.set = Ek);
  function zi(v) {
    var w = -1,
      E = v == null ? 0 : v.length;
    for (this.clear(); ++w < E; ) {
      var I = v[w];
      this.set(I[0], I[1]);
    }
  }
  function $k() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Hn(),
        map: new (ng || _r)(),
        string: new Hn(),
      });
  }
  function Rk(v) {
    var w = el(this, v).delete(v);
    return (this.size -= w ? 1 : 0), w;
  }
  function Ak(v) {
    return el(this, v).get(v);
  }
  function zk(v) {
    return el(this, v).has(v);
  }
  function Mk(v, w) {
    var E = el(this, v),
      I = E.size;
    return E.set(v, w), (this.size += E.size == I ? 0 : 1), this;
  }
  (zi.prototype.clear = $k),
    (zi.prototype.delete = Rk),
    (zi.prototype.get = Ak),
    (zi.prototype.has = zk),
    (zi.prototype.set = Mk);
  function Mi(v) {
    var w = (this.__data__ = new _r(v));
    this.size = w.size;
  }
  function Fk() {
    (this.__data__ = new _r()), (this.size = 0);
  }
  function Ok(v) {
    var w = this.__data__,
      E = w.delete(v);
    return (this.size = w.size), E;
  }
  function Dk(v) {
    return this.__data__.get(v);
  }
  function jk(v) {
    return this.__data__.has(v);
  }
  function Ik(v, w) {
    var E = this.__data__;
    if (E instanceof _r) {
      var I = E.__data__;
      if (!ng || I.length < r - 1)
        return I.push([v, w]), (this.size = ++E.size), this;
      E = this.__data__ = new zi(I);
    }
    return E.set(v, w), (this.size = E.size), this;
  }
  (Mi.prototype.clear = Fk),
    (Mi.prototype.delete = Ok),
    (Mi.prototype.get = Dk),
    (Mi.prototype.has = jk),
    (Mi.prototype.set = Ik);
  function Lk(v, w) {
    var E = Xc(v),
      I = !E && Yc(v),
      Q = !E && !I && lg(v),
      oe = !E && !I && !Q && cg(v),
      he = E || I || Q || oe,
      Y = he ? sk(v.length, String) : [],
      pe = Y.length;
    for (var Gt in v)
      (he &&
        (Gt == "length" ||
          (Q && (Gt == "offset" || Gt == "parent")) ||
          (oe &&
            (Gt == "buffer" || Gt == "byteLength" || Gt == "byteOffset")) ||
          sg(Gt, pe))) ||
        Y.push(Gt);
    return Y;
  }
  function Kc(v, w, E) {
    ((E !== void 0 && !tl(v[w], E)) || (E === void 0 && !(w in v))) &&
      Gc(v, w, E);
  }
  function Bk(v, w, E) {
    var I = v[w];
    (!(Xr.call(v, w) && tl(I, E)) || (E === void 0 && !(w in v))) &&
      Gc(v, w, E);
  }
  function Za(v, w) {
    for (var E = v.length; E--; ) if (tl(v[E][0], w)) return E;
    return -1;
  }
  function Gc(v, w, E) {
    w == "__proto__" && Xa
      ? Xa(v, w, { configurable: !0, enumerable: !0, value: E, writable: !0 })
      : (v[w] = E);
  }
  var Vk = eC();
  function Ja(v) {
    return v == null
      ? v === void 0
        ? R
        : p
      : Un && Un in Object(v)
      ? tC(v)
      : aC(v);
  }
  function ig(v) {
    return Xo(v) && Ja(v) == a;
  }
  function Nk(v) {
    if (!Kn(v) || oC(v)) return !1;
    var w = Jc(v) ? hk : ge;
    return w.test(dC(v));
  }
  function Wk(v) {
    return Xo(v) && ug(v.length) && !!re[Ja(v)];
  }
  function Uk(v) {
    if (!Kn(v)) return sC(v);
    var w = ag(v),
      E = [];
    for (var I in v) (I == "constructor" && (w || !Xr.call(v, I))) || E.push(I);
    return E;
  }
  function og(v, w, E, I, Q) {
    v !== w &&
      Vk(
        w,
        function (oe, he) {
          if ((Q || (Q = new Mi()), Kn(oe))) Hk(v, w, he, E, og, I, Q);
          else {
            var Y = I ? I(qc(v, he), oe, he + "", v, w, Q) : void 0;
            Y === void 0 && (Y = oe), Kc(v, he, Y);
          }
        },
        dg
      );
  }
  function Hk(v, w, E, I, Q, oe, he) {
    var Y = qc(v, E),
      pe = qc(w, E),
      Gt = he.get(pe);
    if (Gt) {
      Kc(v, E, Gt);
      return;
    }
    var xt = oe ? oe(Y, pe, E + "", v, w, he) : void 0,
      Zo = xt === void 0;
    if (Zo) {
      var ed = Xc(pe),
        td = !ed && lg(pe),
        hg = !ed && !td && cg(pe);
      (xt = pe),
        ed || td || hg
          ? Xc(Y)
            ? (xt = Y)
            : fC(Y)
            ? (xt = Xk(Y))
            : td
            ? ((Zo = !1), (xt = Qk(pe)))
            : hg
            ? ((Zo = !1), (xt = Yk(pe)))
            : (xt = [])
          : hC(pe) || Yc(pe)
          ? ((xt = Y),
            Yc(Y) ? (xt = pC(Y)) : (!Kn(Y) || Jc(Y)) && (xt = rC(pe)))
          : (Zo = !1);
    }
    Zo && (he.set(pe, xt), Q(xt, pe, I, oe, he), he.delete(pe)), Kc(v, E, xt);
  }
  function Kk(v, w) {
    return uC(lC(v, w, fg), v + "");
  }
  var Gk = Xa
    ? function (v, w) {
        return Xa(v, "toString", {
          configurable: !0,
          enumerable: !1,
          value: gC(w),
          writable: !0,
        });
      }
    : fg;
  function Qk(v, w) {
    return v.slice();
  }
  function qk(v) {
    var w = new v.constructor(v.byteLength);
    return new Jm(w).set(new Jm(v)), w;
  }
  function Yk(v, w) {
    var E = qk(v.buffer);
    return new v.constructor(E, v.byteOffset, v.length);
  }
  function Xk(v, w) {
    var E = -1,
      I = v.length;
    for (w || (w = Array(I)); ++E < I; ) w[E] = v[E];
    return w;
  }
  function Zk(v, w, E, I) {
    var Q = !E;
    E || (E = {});
    for (var oe = -1, he = w.length; ++oe < he; ) {
      var Y = w[oe],
        pe = void 0;
      pe === void 0 && (pe = v[Y]), Q ? Gc(E, Y, pe) : Bk(E, Y, pe);
    }
    return E;
  }
  function Jk(v) {
    return Kk(function (w, E) {
      var I = -1,
        Q = E.length,
        oe = Q > 1 ? E[Q - 1] : void 0,
        he = Q > 2 ? E[2] : void 0;
      for (
        oe = v.length > 3 && typeof oe == "function" ? (Q--, oe) : void 0,
          he && nC(E[0], E[1], he) && ((oe = Q < 3 ? void 0 : oe), (Q = 1)),
          w = Object(w);
        ++I < Q;

      ) {
        var Y = E[I];
        Y && v(w, Y, I, oe);
      }
      return w;
    });
  }
  function eC(v) {
    return function (w, E, I) {
      for (var Q = -1, oe = Object(w), he = I(w), Y = he.length; Y--; ) {
        var pe = he[++Q];
        if (E(oe[pe], pe, oe) === !1) break;
      }
      return w;
    };
  }
  function el(v, w) {
    var E = v.__data__;
    return iC(w) ? E[typeof w == "string" ? "string" : "hash"] : E.map;
  }
  function Qc(v, w) {
    var E = lk(v, w);
    return Nk(E) ? E : void 0;
  }
  function tC(v) {
    var w = Xr.call(v, Un),
      E = v[Un];
    try {
      v[Un] = void 0;
      var I = !0;
    } catch {}
    var Q = Xm.call(v);
    return I && (w ? (v[Un] = E) : delete v[Un]), Q;
  }
  function rC(v) {
    return typeof v.constructor == "function" && !ag(v) ? yk(eg(v)) : {};
  }
  function sg(v, w) {
    var E = typeof v;
    return (
      (w = w ?? s),
      !!w &&
        (E == "number" || (E != "symbol" && Pe.test(v))) &&
        v > -1 &&
        v % 1 == 0 &&
        v < w
    );
  }
  function nC(v, w, E) {
    if (!Kn(E)) return !1;
    var I = typeof w;
    return (I == "number" ? Zc(E) && sg(w, E.length) : I == "string" && w in E)
      ? tl(E[w], v)
      : !1;
  }
  function iC(v) {
    var w = typeof v;
    return w == "string" || w == "number" || w == "symbol" || w == "boolean"
      ? v !== "__proto__"
      : v === null;
  }
  function oC(v) {
    return !!Ym && Ym in v;
  }
  function ag(v) {
    var w = v && v.constructor,
      E = (typeof w == "function" && w.prototype) || Qa;
    return v === E;
  }
  function sC(v) {
    var w = [];
    if (v != null) for (var E in Object(v)) w.push(E);
    return w;
  }
  function aC(v) {
    return Xm.call(v);
  }
  function lC(v, w, E) {
    return (
      (w = rg(w === void 0 ? v.length - 1 : w, 0)),
      function () {
        for (
          var I = arguments, Q = -1, oe = rg(I.length - w, 0), he = Array(oe);
          ++Q < oe;

        )
          he[Q] = I[w + Q];
        Q = -1;
        for (var Y = Array(w + 1); ++Q < w; ) Y[Q] = I[Q];
        return (Y[w] = E(he)), ok(v, this, Y);
      }
    );
  }
  function qc(v, w) {
    if (!(w === "constructor" && typeof v[w] == "function") && w != "__proto__")
      return v[w];
  }
  var uC = cC(Gk);
  function cC(v) {
    var w = 0,
      E = 0;
    return function () {
      var I = vk(),
        Q = o - (I - E);
      if (((E = I), Q > 0)) {
        if (++w >= i) return arguments[0];
      } else w = 0;
      return v.apply(void 0, arguments);
    };
  }
  function dC(v) {
    if (v != null) {
      try {
        return qa.call(v);
      } catch {}
      try {
        return v + "";
      } catch {}
    }
    return "";
  }
  function tl(v, w) {
    return v === w || (v !== v && w !== w);
  }
  var Yc = ig(
      (function () {
        return arguments;
      })()
    )
      ? ig
      : function (v) {
          return Xo(v) && Xr.call(v, "callee") && !pk.call(v, "callee");
        },
    Xc = Array.isArray;
  function Zc(v) {
    return v != null && ug(v.length) && !Jc(v);
  }
  function fC(v) {
    return Xo(v) && Zc(v);
  }
  var lg = gk || vC;
  function Jc(v) {
    if (!Kn(v)) return !1;
    var w = Ja(v);
    return w == m || w == b || w == u || w == g;
  }
  function ug(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= s;
  }
  function Kn(v) {
    var w = typeof v;
    return v != null && (w == "object" || w == "function");
  }
  function Xo(v) {
    return v != null && typeof v == "object";
  }
  function hC(v) {
    if (!Xo(v) || Ja(v) != h) return !1;
    var w = eg(v);
    if (w === null) return !0;
    var E = Xr.call(w, "constructor") && w.constructor;
    return typeof E == "function" && E instanceof E && qa.call(E) == fk;
  }
  var cg = qm ? ak(qm) : Wk;
  function pC(v) {
    return Zk(v, dg(v));
  }
  function dg(v) {
    return Zc(v) ? Lk(v) : Uk(v);
  }
  var mC = Jk(function (v, w, E, I) {
    og(v, w, E, I);
  });
  function gC(v) {
    return function () {
      return v;
    };
  }
  function fg(v) {
    return v;
  }
  function vC() {
    return !1;
  }
  e.exports = mC;
})(Du, Du.exports);
var oP = Du.exports;
const Nt = Qh(oP);
var sP = (e) => /!(important)?$/.test(e),
  O0 = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  aP = (e, t) => (r) => {
    const n = String(t),
      i = sP(n),
      o = O0(n),
      s = e ? `${e}.${o}` : o;
    let a = Ut(r.__cssMap) && s in r.__cssMap ? r.__cssMap[s].varRef : t;
    return (a = O0(a)), i ? `${a} !important` : a;
  };
function Jp(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (o, s) => {
    var a;
    const l = aP(t, o)(s);
    let u = (a = r == null ? void 0 : r(l, s)) != null ? a : l;
    return n && (u = n(u, s)), u;
  };
}
var kl =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t);
function Mt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return (n.transform = Jp({ scale: e, transform: t })), n;
  };
}
var lP =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === "rtl" ? e : t;
function uP(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: lP(t),
    transform: r ? Jp({ scale: r, compose: n }) : n,
  };
}
var LS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function cP() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...LS,
  ].join(" ");
}
function dP() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...LS,
  ].join(" ");
}
var fP = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  hP = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function pP(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var mP = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  sh = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  gP = new Set(Object.values(sh)),
  ah = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  vP = (e) => e.trim();
function yP(e, t) {
  if (e == null || ah.has(e)) return e;
  if (!(lh(e) || ah.has(e))) return `url('${e}')`;
  const i = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    o = i == null ? void 0 : i[1],
    s = i == null ? void 0 : i[2];
  if (!o || !s) return e;
  const a = o.includes("-gradient") ? o : `${o}-gradient`,
    [l, ...u] = s.split(",").map(vP).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in sh ? sh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (gP.has(f)) return f;
    const m = f.indexOf(" "),
      [b, y] = m !== -1 ? [f.substr(0, m), f.substr(m + 1)] : [f],
      k = lh(y) ? y : y && y.split(" "),
      p = `colors.${b}`,
      h = p in t.__cssMap ? t.__cssMap[p].varRef : b;
    return k ? [h, ...(Array.isArray(k) ? k : [k])].join(" ") : h;
  });
  return `${a}(${d.join(", ")})`;
}
var lh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  bP = (e, t) => yP(e, t ?? {});
function SP(e) {
  return /^var\(--.+\)$/.test(e);
}
var xP = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), "");
    return { unitless: !r, value: t, unit: r };
  },
  lr = (e) => (t) => `${e}(${t})`,
  G = {
    filter(e) {
      return e !== "auto" ? e : fP;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : hP;
    },
    ring(e) {
      return pP(G.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? cP() : e === "auto-gpu" ? dP() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = xP(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const r = { left: "right", right: "left" };
      return t.direction === "rtl" ? r[e] : e;
    },
    degree(e) {
      if (SP(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: bP,
    blur: lr("blur"),
    opacity: lr("opacity"),
    brightness: lr("brightness"),
    contrast: lr("contrast"),
    dropShadow: lr("drop-shadow"),
    grayscale: lr("grayscale"),
    hueRotate: (e) => lr("hue-rotate")(G.degree(e)),
    invert: lr("invert"),
    saturate: lr("saturate"),
    sepia: lr("sepia"),
    bgImage(e) {
      return e == null || lh(e) || ah.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: r, divide: n } = (t = mP[e]) != null ? t : {},
        i = { flexDirection: e };
      return r && (i[r] = 1), n && (i[n] = 1), i;
    },
  },
  x = {
    borderWidths: Mt("borderWidths"),
    borderStyles: Mt("borderStyles"),
    colors: Mt("colors"),
    borders: Mt("borders"),
    gradients: Mt("gradients", G.gradient),
    radii: Mt("radii", G.px),
    space: Mt("space", kl(G.vh, G.px)),
    spaceT: Mt("space", kl(G.vh, G.px)),
    degreeT(e) {
      return { property: e, transform: G.degree };
    },
    prop(e, t, r) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Jp({ scale: t, transform: r }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Mt("sizes", kl(G.vh, G.px)),
    sizesT: Mt("sizes", kl(G.vh, G.fraction)),
    shadows: Mt("shadows"),
    logical: uP,
    blur: Mt("blur", G.blur),
  },
  ql = {
    background: x.colors("background"),
    backgroundColor: x.colors("backgroundColor"),
    backgroundImage: x.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: G.bgClip },
    bgSize: x.prop("backgroundSize"),
    bgPosition: x.prop("backgroundPosition"),
    bg: x.colors("background"),
    bgColor: x.colors("backgroundColor"),
    bgPos: x.prop("backgroundPosition"),
    bgRepeat: x.prop("backgroundRepeat"),
    bgAttachment: x.prop("backgroundAttachment"),
    bgGradient: x.gradients("backgroundImage"),
    bgClip: { transform: G.bgClip },
  };
Object.assign(ql, { bgImage: ql.backgroundImage, bgImg: ql.backgroundImage });
var X = {
  border: x.borders("border"),
  borderWidth: x.borderWidths("borderWidth"),
  borderStyle: x.borderStyles("borderStyle"),
  borderColor: x.colors("borderColor"),
  borderRadius: x.radii("borderRadius"),
  borderTop: x.borders("borderTop"),
  borderBlockStart: x.borders("borderBlockStart"),
  borderTopLeftRadius: x.radii("borderTopLeftRadius"),
  borderStartStartRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: x.radii("borderTopRightRadius"),
  borderStartEndRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: x.borders("borderRight"),
  borderInlineEnd: x.borders("borderInlineEnd"),
  borderBottom: x.borders("borderBottom"),
  borderBlockEnd: x.borders("borderBlockEnd"),
  borderBottomLeftRadius: x.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: x.radii("borderBottomRightRadius"),
  borderLeft: x.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: x.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: x.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: x.borders(["borderLeft", "borderRight"]),
  borderInline: x.borders("borderInline"),
  borderY: x.borders(["borderTop", "borderBottom"]),
  borderBlock: x.borders("borderBlock"),
  borderTopWidth: x.borderWidths("borderTopWidth"),
  borderBlockStartWidth: x.borderWidths("borderBlockStartWidth"),
  borderTopColor: x.colors("borderTopColor"),
  borderBlockStartColor: x.colors("borderBlockStartColor"),
  borderTopStyle: x.borderStyles("borderTopStyle"),
  borderBlockStartStyle: x.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: x.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: x.borderWidths("borderBlockEndWidth"),
  borderBottomColor: x.colors("borderBottomColor"),
  borderBlockEndColor: x.colors("borderBlockEndColor"),
  borderBottomStyle: x.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: x.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: x.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: x.borderWidths("borderInlineStartWidth"),
  borderLeftColor: x.colors("borderLeftColor"),
  borderInlineStartColor: x.colors("borderInlineStartColor"),
  borderLeftStyle: x.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: x.borderStyles("borderInlineStartStyle"),
  borderRightWidth: x.borderWidths("borderRightWidth"),
  borderInlineEndWidth: x.borderWidths("borderInlineEndWidth"),
  borderRightColor: x.colors("borderRightColor"),
  borderInlineEndColor: x.colors("borderInlineEndColor"),
  borderRightStyle: x.borderStyles("borderRightStyle"),
  borderInlineEndStyle: x.borderStyles("borderInlineEndStyle"),
  borderTopRadius: x.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: x.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: x.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: x.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(X, {
  rounded: X.borderRadius,
  roundedTop: X.borderTopRadius,
  roundedTopLeft: X.borderTopLeftRadius,
  roundedTopRight: X.borderTopRightRadius,
  roundedTopStart: X.borderStartStartRadius,
  roundedTopEnd: X.borderStartEndRadius,
  roundedBottom: X.borderBottomRadius,
  roundedBottomLeft: X.borderBottomLeftRadius,
  roundedBottomRight: X.borderBottomRightRadius,
  roundedBottomStart: X.borderEndStartRadius,
  roundedBottomEnd: X.borderEndEndRadius,
  roundedLeft: X.borderLeftRadius,
  roundedRight: X.borderRightRadius,
  roundedStart: X.borderInlineStartRadius,
  roundedEnd: X.borderInlineEndRadius,
  borderStart: X.borderInlineStart,
  borderEnd: X.borderInlineEnd,
  borderTopStartRadius: X.borderStartStartRadius,
  borderTopEndRadius: X.borderStartEndRadius,
  borderBottomStartRadius: X.borderEndStartRadius,
  borderBottomEndRadius: X.borderEndEndRadius,
  borderStartRadius: X.borderInlineStartRadius,
  borderEndRadius: X.borderInlineEndRadius,
  borderStartWidth: X.borderInlineStartWidth,
  borderEndWidth: X.borderInlineEndWidth,
  borderStartColor: X.borderInlineStartColor,
  borderEndColor: X.borderInlineEndColor,
  borderStartStyle: X.borderInlineStartStyle,
  borderEndStyle: X.borderInlineEndStyle,
});
var wP = {
    color: x.colors("color"),
    textColor: x.colors("color"),
    fill: x.colors("fill"),
    stroke: x.colors("stroke"),
  },
  uh = {
    boxShadow: x.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: x.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: x.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(uh, { shadow: uh.boxShadow });
var kP = {
    filter: { transform: G.filter },
    blur: x.blur("--chakra-blur"),
    brightness: x.propT("--chakra-brightness", G.brightness),
    contrast: x.propT("--chakra-contrast", G.contrast),
    hueRotate: x.propT("--chakra-hue-rotate", G.hueRotate),
    invert: x.propT("--chakra-invert", G.invert),
    saturate: x.propT("--chakra-saturate", G.saturate),
    dropShadow: x.propT("--chakra-drop-shadow", G.dropShadow),
    backdropFilter: { transform: G.backdropFilter },
    backdropBlur: x.blur("--chakra-backdrop-blur"),
    backdropBrightness: x.propT("--chakra-backdrop-brightness", G.brightness),
    backdropContrast: x.propT("--chakra-backdrop-contrast", G.contrast),
    backdropHueRotate: x.propT("--chakra-backdrop-hue-rotate", G.hueRotate),
    backdropInvert: x.propT("--chakra-backdrop-invert", G.invert),
    backdropSaturate: x.propT("--chakra-backdrop-saturate", G.saturate),
  },
  ju = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: G.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: x.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: x.space("gap"),
    rowGap: x.space("rowGap"),
    columnGap: x.space("columnGap"),
  };
Object.assign(ju, { flexDir: ju.flexDirection });
var BS = {
    gridGap: x.space("gridGap"),
    gridColumnGap: x.space("gridColumnGap"),
    gridRowGap: x.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  CP = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: G.outline },
    outlineOffset: !0,
    outlineColor: x.colors("outlineColor"),
  },
  Ot = {
    width: x.sizesT("width"),
    inlineSize: x.sizesT("inlineSize"),
    height: x.sizes("height"),
    blockSize: x.sizes("blockSize"),
    boxSize: x.sizes(["width", "height"]),
    minWidth: x.sizes("minWidth"),
    minInlineSize: x.sizes("minInlineSize"),
    minHeight: x.sizes("minHeight"),
    minBlockSize: x.sizes("minBlockSize"),
    maxWidth: x.sizes("maxWidth"),
    maxInlineSize: x.sizes("maxInlineSize"),
    maxHeight: x.sizes("maxHeight"),
    maxBlockSize: x.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, i;
        return {
          [`@media screen and (min-width: ${
            (i =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n.minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, i;
        return {
          [`@media screen and (max-width: ${
            (i =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n._minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: x.propT("float", G.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Ot, {
  w: Ot.width,
  h: Ot.height,
  minW: Ot.minWidth,
  maxW: Ot.maxWidth,
  minH: Ot.minHeight,
  maxH: Ot.maxHeight,
  overscroll: Ot.overscrollBehavior,
  overscrollX: Ot.overscrollBehaviorX,
  overscrollY: Ot.overscrollBehaviorY,
});
var TP = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: x.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: x.prop("listStyleImage"),
};
function _P(e, t, r, n) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < i.length && e; n += 1) e = e[i[n]];
  return e === void 0 ? r : e;
}
var PP = (e) => {
    const t = new WeakMap();
    return (n, i, o, s) => {
      if (typeof n > "u") return e(n, i, o);
      t.has(n) || t.set(n, new Map());
      const a = t.get(n);
      if (a.has(i)) return a.get(i);
      const l = e(n, i, o, s);
      return a.set(i, l), l;
    };
  },
  EP = PP(_P),
  $P = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  RP = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  Ad = (e, t, r) => {
    const n = {},
      i = EP(e, t, {});
    for (const o in i) (o in r && r[o] != null) || (n[o] = i[o]);
    return n;
  },
  AP = {
    srOnly: {
      transform(e) {
        return e === !0 ? $P : e === "focusable" ? RP : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => Ad(t, `layerStyles.${e}`, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => Ad(t, `textStyles.${e}`, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => Ad(t, e, r) },
  },
  Ms = {
    position: !0,
    pos: x.prop("position"),
    zIndex: x.prop("zIndex", "zIndices"),
    inset: x.spaceT("inset"),
    insetX: x.spaceT(["left", "right"]),
    insetInline: x.spaceT("insetInline"),
    insetY: x.spaceT(["top", "bottom"]),
    insetBlock: x.spaceT("insetBlock"),
    top: x.spaceT("top"),
    insetBlockStart: x.spaceT("insetBlockStart"),
    bottom: x.spaceT("bottom"),
    insetBlockEnd: x.spaceT("insetBlockEnd"),
    left: x.spaceT("left"),
    insetInlineStart: x.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: x.spaceT("right"),
    insetInlineEnd: x.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Ms, {
  insetStart: Ms.insetInlineStart,
  insetEnd: Ms.insetInlineEnd,
});
var zP = {
    ring: { transform: G.ring },
    ringColor: x.colors("--chakra-ring-color"),
    ringOffset: x.prop("--chakra-ring-offset-width"),
    ringOffsetColor: x.colors("--chakra-ring-offset-color"),
    ringInset: x.prop("--chakra-ring-inset"),
  },
  ce = {
    margin: x.spaceT("margin"),
    marginTop: x.spaceT("marginTop"),
    marginBlockStart: x.spaceT("marginBlockStart"),
    marginRight: x.spaceT("marginRight"),
    marginInlineEnd: x.spaceT("marginInlineEnd"),
    marginBottom: x.spaceT("marginBottom"),
    marginBlockEnd: x.spaceT("marginBlockEnd"),
    marginLeft: x.spaceT("marginLeft"),
    marginInlineStart: x.spaceT("marginInlineStart"),
    marginX: x.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: x.spaceT("marginInline"),
    marginY: x.spaceT(["marginTop", "marginBottom"]),
    marginBlock: x.spaceT("marginBlock"),
    padding: x.space("padding"),
    paddingTop: x.space("paddingTop"),
    paddingBlockStart: x.space("paddingBlockStart"),
    paddingRight: x.space("paddingRight"),
    paddingBottom: x.space("paddingBottom"),
    paddingBlockEnd: x.space("paddingBlockEnd"),
    paddingLeft: x.space("paddingLeft"),
    paddingInlineStart: x.space("paddingInlineStart"),
    paddingInlineEnd: x.space("paddingInlineEnd"),
    paddingX: x.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: x.space("paddingInline"),
    paddingY: x.space(["paddingTop", "paddingBottom"]),
    paddingBlock: x.space("paddingBlock"),
  };
Object.assign(ce, {
  m: ce.margin,
  mt: ce.marginTop,
  mr: ce.marginRight,
  me: ce.marginInlineEnd,
  marginEnd: ce.marginInlineEnd,
  mb: ce.marginBottom,
  ml: ce.marginLeft,
  ms: ce.marginInlineStart,
  marginStart: ce.marginInlineStart,
  mx: ce.marginX,
  my: ce.marginY,
  p: ce.padding,
  pt: ce.paddingTop,
  py: ce.paddingY,
  px: ce.paddingX,
  pb: ce.paddingBottom,
  pl: ce.paddingLeft,
  ps: ce.paddingInlineStart,
  paddingStart: ce.paddingInlineStart,
  pr: ce.paddingRight,
  pe: ce.paddingInlineEnd,
  paddingEnd: ce.paddingInlineEnd,
});
var MP = {
    textDecorationColor: x.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: x.shadows("textShadow"),
  },
  FP = {
    clipPath: !0,
    transform: x.propT("transform", G.transform),
    transformOrigin: !0,
    translateX: x.spaceT("--chakra-translate-x"),
    translateY: x.spaceT("--chakra-translate-y"),
    skewX: x.degreeT("--chakra-skew-x"),
    skewY: x.degreeT("--chakra-skew-y"),
    scaleX: x.prop("--chakra-scale-x"),
    scaleY: x.prop("--chakra-scale-y"),
    scale: x.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: x.degreeT("--chakra-rotate"),
  },
  OP = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: x.prop("transitionDuration", "transition.duration"),
    transitionProperty: x.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: x.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  DP = {
    fontFamily: x.prop("fontFamily", "fonts"),
    fontSize: x.prop("fontSize", "fontSizes", G.px),
    fontWeight: x.prop("fontWeight", "fontWeights"),
    lineHeight: x.prop("lineHeight", "lineHeights"),
    letterSpacing: x.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  jP = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: x.spaceT("scrollMargin"),
    scrollMarginTop: x.spaceT("scrollMarginTop"),
    scrollMarginBottom: x.spaceT("scrollMarginBottom"),
    scrollMarginLeft: x.spaceT("scrollMarginLeft"),
    scrollMarginRight: x.spaceT("scrollMarginRight"),
    scrollMarginX: x.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: x.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: x.spaceT("scrollPadding"),
    scrollPaddingTop: x.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: x.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: x.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: x.spaceT("scrollPaddingRight"),
    scrollPaddingX: x.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: x.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function VS(e) {
  return Ut(e) && e.reference ? e.reference : String(e);
}
var Mc = (e, ...t) => t.map(VS).join(` ${e} `).replace(/calc/g, ""),
  D0 = (...e) => `calc(${Mc("+", ...e)})`,
  j0 = (...e) => `calc(${Mc("-", ...e)})`,
  ch = (...e) => `calc(${Mc("*", ...e)})`,
  I0 = (...e) => `calc(${Mc("/", ...e)})`,
  L0 = (e) => {
    const t = VS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : ch(t, -1);
  },
  Jn = Object.assign(
    (e) => ({
      add: (...t) => Jn(D0(e, ...t)),
      subtract: (...t) => Jn(j0(e, ...t)),
      multiply: (...t) => Jn(ch(e, ...t)),
      divide: (...t) => Jn(I0(e, ...t)),
      negate: () => Jn(L0(e)),
      toString: () => e.toString(),
    }),
    { add: D0, subtract: j0, multiply: ch, divide: I0, negate: L0 }
  );
function IP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function LP(e) {
  const t = IP(e.toString());
  return VP(BP(t));
}
function BP(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function VP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function NP(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function WP(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function UP(e, t = "") {
  return LP(`--${NP(e, t)}`);
}
function V(e, t, r) {
  const n = UP(e, r);
  return { variable: n, reference: WP(n, t) };
}
function HP(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [i, o] = n;
      r[i] = V(`${e}-${i}`, o);
      continue;
    }
    r[n] = V(`${e}-${n}`);
  }
  return r;
}
function KP(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function GP(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function dh(e) {
  if (e == null) return e;
  const { unitless: t } = GP(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var NS = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  em = (e) => Object.fromEntries(Object.entries(e).sort(NS));
function B0(e) {
  const t = em(e);
  return Object.assign(Object.values(t), t);
}
function QP(e) {
  const t = Object.keys(em(e));
  return new Set(t);
}
function V0(e) {
  var t;
  if (!e) return e;
  e = (t = dh(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number"
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function gs(e, t) {
  const r = ["@media screen"];
  return (
    e && r.push("and", `(min-width: ${dh(e)})`),
    t && r.push("and", `(max-width: ${dh(t)})`),
    r.join(" ")
  );
}
function qP(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = B0(e),
    n = Object.entries(e)
      .sort(NS)
      .map(([s, a], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? V0(d) : void 0),
          {
            _minW: V0(a),
            breakpoint: s,
            minW: a,
            maxW: d,
            maxWQuery: gs(null, d),
            minWQuery: gs(a),
            minMaxQuery: gs(a, d),
          }
        );
      }),
    i = QP(e),
    o = Array.from(i.values());
  return {
    keys: i,
    normalized: r,
    isResponsive(s) {
      const a = Object.keys(s);
      return a.length > 0 && a.every((l) => i.has(l));
    },
    asObject: em(e),
    asArray: B0(e),
    details: n,
    get(s) {
      return n.find((a) => a.breakpoint === s);
    },
    media: [null, ...r.map((s) => gs(s)).slice(1)],
    toArrayValue(s) {
      if (!Ut(s)) throw new Error("toArrayValue: value must be an object");
      const a = o.map((l) => {
        var u;
        return (u = s[l]) != null ? u : null;
      });
      for (; KP(a) === null; ) a.pop();
      return a;
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return s.reduce((a, l, u) => {
        const c = o[u];
        return c != null && l != null && (a[c] = l), a;
      }, {});
    },
  };
}
var Le = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Jr = (e) => WS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Pr = (e) => WS((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  WS = (e, ...t) => t.map(e).join(", "),
  Fc = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Jr(Le.hover),
    _peerHover: Pr(Le.hover),
    _groupFocus: Jr(Le.focus),
    _peerFocus: Pr(Le.focus),
    _groupFocusVisible: Jr(Le.focusVisible),
    _peerFocusVisible: Pr(Le.focusVisible),
    _groupActive: Jr(Le.active),
    _peerActive: Pr(Le.active),
    _groupDisabled: Jr(Le.disabled),
    _peerDisabled: Pr(Le.disabled),
    _groupInvalid: Jr(Le.invalid),
    _peerInvalid: Pr(Le.invalid),
    _groupChecked: Jr(Le.checked),
    _peerChecked: Pr(Le.checked),
    _groupFocusWithin: Jr(Le.focusWithin),
    _peerFocusWithin: Pr(Le.focusWithin),
    _peerPlaceholderShown: Pr(Le.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  US = Object.keys(Fc);
function N0(e, t) {
  return V(String(e).replace(/\./g, "-"), void 0, t);
}
function YP(e, t) {
  let r = {};
  const n = {};
  for (const [i, o] of Object.entries(e)) {
    const { isSemantic: s, value: a } = o,
      { variable: l, reference: u } = N0(
        i,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!s) {
      if (i.startsWith("space")) {
        const f = i.split("."),
          [m, ...b] = f,
          y = `${m}.-${b.join(".")}`,
          k = Jn.negate(a),
          p = Jn.negate(u);
        n[y] = { value: k, var: l, varRef: p };
      }
      (r[l] = a), (n[i] = { value: a, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const b = [String(i).split(".")[0], f].join(".");
        if (!e[b]) return f;
        const { reference: k } = N0(b, t == null ? void 0 : t.cssVarPrefix);
        return k;
      },
      d = Ut(a) ? a : { default: a };
    (r = Nt(
      r,
      Object.entries(d).reduce((f, [m, b]) => {
        var y, k;
        if (!b) return f;
        const p = c(`${b}`);
        if (m === "default") return (f[l] = p), f;
        const h = (k = (y = Fc) == null ? void 0 : y[m]) != null ? k : m;
        return (f[h] = { [l]: p }), f;
      }, {})
    )),
      (n[i] = { value: u, var: l, varRef: u });
  }
  return { cssVars: r, cssMap: n };
}
function XP(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
function ZP(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
function JP(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function W0(e, t, r = {}) {
  const { stop: n, getKey: i } = r;
  function o(s, a = []) {
    var l;
    if (JP(s) || Array.isArray(s)) {
      const u = {};
      for (const [c, d] of Object.entries(s)) {
        const f = (l = i == null ? void 0 : i(c)) != null ? l : c,
          m = [...a, f];
        if (n != null && n(s, m)) return t(s, a);
        u[f] = o(d, m);
      }
      return u;
    }
    return t(s, a);
  }
  return o(e);
}
var eE = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function tE(e) {
  return ZP(e, eE);
}
function rE(e) {
  return e.semanticTokens;
}
function nE(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...i } = e;
  return i;
}
var iE = (e) => US.includes(e) || e === "default";
function oE({ tokens: e, semanticTokens: t }) {
  const r = {};
  return (
    W0(e, (n, i) => {
      n != null && (r[i.join(".")] = { isSemantic: !1, value: n });
    }),
    W0(
      t,
      (n, i) => {
        n != null && (r[i.join(".")] = { isSemantic: !0, value: n });
      },
      { stop: (n) => Object.keys(n).every(iE) }
    ),
    r
  );
}
function sE(e) {
  var t;
  const r = nE(e),
    n = tE(r),
    i = rE(r),
    o = oE({ tokens: n, semanticTokens: i }),
    s = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: a, cssVars: l } = YP(o, { cssVarPrefix: s });
  return (
    Object.assign(r, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: a,
      __breakpoints: qP(r.breakpoints),
    }),
    r
  );
}
var tm = Nt(
  {},
  ql,
  X,
  wP,
  ju,
  Ot,
  kP,
  zP,
  CP,
  BS,
  AP,
  Ms,
  uh,
  ce,
  jP,
  DP,
  MP,
  FP,
  TP,
  OP
);
Object.assign({}, ce, Ot, ju, BS, Ms);
var aE = [...Object.keys(tm), ...US],
  lE = { ...tm, ...Fc },
  uE = (e) => e in lE,
  cE = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: r, toArrayValue: n, media: i } = t.__breakpoints,
      o = {};
    for (const s in e) {
      let a = xn(e[s], t);
      if (a == null) continue;
      if (((a = Ut(a) && r(a) ? n(a) : a), !Array.isArray(a))) {
        o[s] = a;
        continue;
      }
      const l = a.slice(0, i.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = i == null ? void 0 : i[u];
        if (!c) {
          o[s] = a[u];
          continue;
        }
        (o[c] = o[c] || {}), a[u] != null && (o[c][s] = a[u]);
      }
    }
    return o;
  };
function dE(e) {
  const t = [];
  let r = "",
    n = !1;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    o === "("
      ? ((n = !0), (r += o))
      : o === ")"
      ? ((n = !1), (r += o))
      : o === "," && !n
      ? (t.push(r), (r = ""))
      : (r += o);
  }
  return (r = r.trim()), r && t.push(r), t;
}
function fE(e) {
  return /^var\(--.+\)$/.test(e);
}
var hE = (e, t) => e.startsWith("--") && typeof t == "string" && !fE(t),
  pE = (e, t) => {
    var r, n;
    if (t == null) return t;
    const i = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      o = (l) => {
        var u;
        return (u = i(l)) != null ? u : l;
      },
      [s, a] = dE(t);
    return (t = (n = (r = i(s)) != null ? r : o(a)) != null ? n : o(t)), t;
  };
function mE(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    i = (o, s = !1) => {
      var a, l, u;
      const c = xn(o, n),
        d = cE(c)(n);
      let f = {};
      for (let m in d) {
        const b = d[m];
        let y = xn(b, n);
        m in r && (m = r[m]), hE(m, y) && (y = pE(n, y));
        let k = t[m];
        if ((k === !0 && (k = { property: m }), Ut(y))) {
          (f[m] = (a = f[m]) != null ? a : {}), (f[m] = Nt({}, f[m], i(y, !0)));
          continue;
        }
        let p =
          (u =
            (l = k == null ? void 0 : k.transform) == null
              ? void 0
              : l.call(k, y, n, c)) != null
            ? u
            : y;
        p = k != null && k.processResult ? i(p, !0) : p;
        const h = xn(k == null ? void 0 : k.property, n);
        if (!s && k != null && k.static) {
          const g = xn(k.static, n);
          f = Nt({}, f, g);
        }
        if (h && Array.isArray(h)) {
          for (const g of h) f[g] = p;
          continue;
        }
        if (h) {
          h === "&" && Ut(p) ? (f = Nt({}, f, p)) : (f[h] = p);
          continue;
        }
        if (Ut(p)) {
          f = Nt({}, f, p);
          continue;
        }
        f[m] = p;
      }
      return f;
    };
  return i;
}
var HS = (e) => (t) => mE({ theme: t, pseudos: Fc, configs: tm })(e);
function le(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function gE(e, t) {
  if (Array.isArray(e)) return e;
  if (Ut(e)) return t(e);
  if (e != null) return [e];
}
function vE(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r;
  return -1;
}
function yE(e) {
  const t = e.__breakpoints;
  return function (n, i, o, s) {
    var a, l;
    if (!t) return;
    const u = {},
      c = gE(o, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      m = !!n.parts;
    for (let b = 0; b < d; b++) {
      const y = t.details[b],
        k = t.details[vE(c, b)],
        p = gs(y.minW, k == null ? void 0 : k._minW),
        h = xn((a = n[i]) == null ? void 0 : a[c[b]], s);
      if (h) {
        if (m) {
          (l = n.parts) == null ||
            l.forEach((g) => {
              Nt(u, { [g]: f ? h[g] : { [p]: h[g] } });
            });
          continue;
        }
        if (!m) {
          f ? Nt(u, h) : (u[p] = h);
          continue;
        }
        u[p] = h;
      }
    }
    return u;
  };
}
function bE(e) {
  return (t) => {
    var r;
    const { variant: n, size: i, theme: o } = t,
      s = yE(o);
    return Nt(
      {},
      xn((r = e.baseStyle) != null ? r : {}, t),
      s(e, "sizes", i, t),
      s(e, "variants", n, t)
    );
  };
}
function Yr(e) {
  return XP(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var SE = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
];
function xE(e) {
  return Ut(e)
    ? SE.every((t) => Object.prototype.hasOwnProperty.call(e, t))
    : !1;
}
var wE = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  kE = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  CE = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  TE = { property: wE, easing: kE, duration: CE },
  _E = TE,
  PE = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  EE = PE,
  $E = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  RE = $E,
  AE = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  zE = AE,
  ME = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  FE = ME,
  OE = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  DE = OE,
  jE = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  IE = jE,
  LE = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  BE = LE,
  VE = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  KS = VE,
  GS = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  NE = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  WE = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  UE = { ...GS, ...NE, container: WE },
  QS = UE,
  HE = {
    breakpoints: zE,
    zIndices: EE,
    radii: DE,
    blur: BE,
    colors: FE,
    ...KS,
    sizes: QS,
    shadows: IE,
    space: GS,
    borders: RE,
    transition: _E,
  },
  { defineMultiStyleConfig: KE, definePartsStyle: vs } = le([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  zr = V("stepper-indicator-size"),
  Qi = V("stepper-icon-size"),
  qi = V("stepper-title-font-size"),
  ys = V("stepper-description-font-size"),
  ls = V("stepper-accent-color"),
  GE = vs(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [ls.variable]: `colors.${e}.500`,
      _dark: { [ls.variable]: `colors.${e}.200` },
    },
    title: { fontSize: qi.reference, fontWeight: "medium" },
    description: { fontSize: ys.reference, color: "chakra-subtle-text" },
    number: { fontSize: qi.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: Qi.reference, height: Qi.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: zr.reference,
      height: zr.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: ls.reference,
      },
      "&[data-status=complete]": {
        bg: ls.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: ls.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${zr.reference} - 8px)`,
        top: `calc(${zr.reference} + 4px)`,
        insetStart: `calc(${zr.reference} / 2 - 1px)`,
      },
    },
  })),
  QE = KE({
    baseStyle: GE,
    sizes: {
      xs: vs({
        stepper: {
          [zr.variable]: "sizes.4",
          [Qi.variable]: "sizes.3",
          [qi.variable]: "fontSizes.xs",
          [ys.variable]: "fontSizes.xs",
        },
      }),
      sm: vs({
        stepper: {
          [zr.variable]: "sizes.6",
          [Qi.variable]: "sizes.4",
          [qi.variable]: "fontSizes.sm",
          [ys.variable]: "fontSizes.xs",
        },
      }),
      md: vs({
        stepper: {
          [zr.variable]: "sizes.8",
          [Qi.variable]: "sizes.5",
          [qi.variable]: "fontSizes.md",
          [ys.variable]: "fontSizes.sm",
        },
      }),
      lg: vs({
        stepper: {
          [zr.variable]: "sizes.10",
          [Qi.variable]: "sizes.6",
          [qi.variable]: "fontSizes.lg",
          [ys.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function te(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function i(...c) {
    n();
    for (const d of c) t[d] = l(d);
    return te(e, t);
  }
  function o(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return te(e, t);
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const m = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: m, selector: `.${m}`, toString: () => c };
  }
  return {
    parts: i,
    toPart: l,
    extend: o,
    selectors: s,
    classnames: a,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var qE = te("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  YE = te("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  XE = te("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  ZE = te("breadcrumb").parts("link", "item", "container").extend("separator");
te("button").parts();
var JE = te("checkbox").parts("control", "icon", "container").extend("label");
te("progress").parts("track", "filledTrack").extend("label");
var e5 = te("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  t5 = te("editable").parts("preview", "input", "textarea"),
  r5 = te("form").parts("container", "requiredIndicator", "helperText"),
  n5 = te("formError").parts("text", "icon"),
  i5 = te("input").parts("addon", "field", "element", "group"),
  o5 = te("list").parts("container", "item", "icon"),
  s5 = te("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  a5 = te("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  l5 = te("numberinput").parts("root", "field", "stepperGroup", "stepper");
te("pininput").parts("field");
var u5 = te("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  c5 = te("progress").parts("label", "filledTrack", "track"),
  d5 = te("radio").parts("container", "control", "label"),
  f5 = te("select").parts("field", "icon"),
  h5 = te("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  p5 = te("stat").parts("container", "label", "helpText", "number", "icon"),
  m5 = te("switch").parts("container", "track", "thumb", "label"),
  g5 = te("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  v5 = te("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  y5 = te("tag").parts("container", "label", "closeButton"),
  b5 = te("card").parts("container", "header", "body", "footer");
te("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function ii(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class S5 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var bs = S5;
function rm(e) {
  if (typeof e != "string") throw new bs(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = E5.test(e) ? k5(e) : e;
  const r = C5.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(da(a, 2), 16)),
      parseInt(da(s[3] || "f", 2), 16) / 255,
    ];
  }
  const n = T5.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 16)),
      parseInt(s[3] || "ff", 16) / 255,
    ];
  }
  const i = _5.exec(t);
  if (i) {
    const s = Array.from(i).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 10)),
      parseFloat(s[3] || "1"),
    ];
  }
  const o = P5.exec(t);
  if (o) {
    const [s, a, l, u] = Array.from(o).slice(1).map(parseFloat);
    if (ii(0, 100, a) !== a) throw new bs(e);
    if (ii(0, 100, l) !== l) throw new bs(e);
    return [...$5(s, a, l), Number.isNaN(u) ? 1 : u];
  }
  throw new bs(e);
}
function x5(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const U0 = (e) => parseInt(e.replace(/_/g, ""), 36),
  w5 =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const r = U0(t.substring(0, 3)),
          n = U0(t.substring(3)).toString(16);
        let i = "";
        for (let o = 0; o < 6 - n.length; o++) i += "0";
        return (e[r] = `${i}${n}`), e;
      }, {});
function k5(e) {
  const t = e.toLowerCase().trim(),
    r = w5[x5(t)];
  if (!r) throw new bs(e);
  return `#${r}`;
}
const da = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  C5 = new RegExp(`^#${da("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  T5 = new RegExp(`^#${da("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  _5 = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${da(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  P5 =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  E5 = /^[a-z]+$/i,
  H0 = (e) => Math.round(e * 255),
  $5 = (e, t, r) => {
    let n = r / 100;
    if (t === 0) return [n, n, n].map(H0);
    const i = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * n - 1)) * (t / 100),
      s = o * (1 - Math.abs((i % 2) - 1));
    let a = 0,
      l = 0,
      u = 0;
    i >= 0 && i < 1
      ? ((a = o), (l = s))
      : i >= 1 && i < 2
      ? ((a = s), (l = o))
      : i >= 2 && i < 3
      ? ((l = o), (u = s))
      : i >= 3 && i < 4
      ? ((l = s), (u = o))
      : i >= 4 && i < 5
      ? ((a = s), (u = o))
      : i >= 5 && i < 6 && ((a = o), (u = s));
    const c = n - o / 2,
      d = a + c,
      f = l + c,
      m = u + c;
    return [d, f, m].map(H0);
  };
function R5(e, t, r, n) {
  return `rgba(${ii(0, 255, e).toFixed()}, ${ii(0, 255, t).toFixed()}, ${ii(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(ii(0, 1, n).toFixed(3))})`;
}
function A5(e, t) {
  const [r, n, i, o] = rm(e);
  return R5(r, n, i, o - t);
}
function z5(e) {
  const [t, r, n, i] = rm(e);
  let o = (s) => {
    const a = ii(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${o(t)}${o(r)}${o(n)}${i < 1 ? o(Math.round(i * 255)) : ""}`;
}
function M5(e, t, r, n, i) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : i;
  return e === i ? r : e;
}
var F5 = (e) => Object.keys(e).length === 0,
  st = (e, t, r) => {
    const n = M5(e, `colors.${t}`, t);
    try {
      return z5(n), n;
    } catch {
      return r ?? "#000000";
    }
  },
  O5 = (e) => {
    const [t, r, n] = rm(e);
    return (t * 299 + r * 587 + n * 114) / 1e3;
  },
  D5 = (e) => (t) => {
    const r = st(t, e);
    return O5(r) < 128 ? "dark" : "light";
  },
  j5 = (e) => (t) => D5(e)(t) === "dark",
  Io = (e, t) => (r) => {
    const n = st(r, e);
    return A5(n, 1 - t);
  };
function K0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var I5 = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function L5(e) {
  const t = I5();
  return !e || F5(e)
    ? t
    : e.string && e.colors
    ? V5(e.string, e.colors)
    : e.string && !e.colors
    ? B5(e.string)
    : e.colors && !e.string
    ? N5(e.colors)
    : t;
}
function B5(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let n = 0; n < e.length; n += 1)
    (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const i = (t >> (n * 8)) & 255;
    r += `00${i.toString(16)}`.substr(-2);
  }
  return r;
}
function V5(e, t) {
  let r = 0;
  if (e.length === 0) return t[0];
  for (let n = 0; n < e.length; n += 1)
    (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function N5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function B(e, t) {
  return (r) => (r.colorMode === "dark" ? t : e);
}
function nm(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? (t === "vertical" ? r : n) : {};
}
function qS(e) {
  return Ut(e) && e.reference ? e.reference : String(e);
}
var Oc = (e, ...t) => t.map(qS).join(` ${e} `).replace(/calc/g, ""),
  G0 = (...e) => `calc(${Oc("+", ...e)})`,
  Q0 = (...e) => `calc(${Oc("-", ...e)})`,
  fh = (...e) => `calc(${Oc("*", ...e)})`,
  q0 = (...e) => `calc(${Oc("/", ...e)})`,
  Y0 = (e) => {
    const t = qS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : fh(t, -1);
  },
  Mr = Object.assign(
    (e) => ({
      add: (...t) => Mr(G0(e, ...t)),
      subtract: (...t) => Mr(Q0(e, ...t)),
      multiply: (...t) => Mr(fh(e, ...t)),
      divide: (...t) => Mr(q0(e, ...t)),
      negate: () => Mr(Y0(e)),
      toString: () => e.toString(),
    }),
    { add: G0, subtract: Q0, multiply: fh, divide: q0, negate: Y0 }
  );
function W5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function U5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function YS(e) {
  const t = U5(e.toString());
  return t.includes("\\.") ? e : W5(e) ? t.replace(".", "\\.") : e;
}
function H5(e, t = "") {
  return [t, YS(e)].filter(Boolean).join("-");
}
function K5(e, t) {
  return `var(${YS(e)}${t ? `, ${t}` : ""})`;
}
function G5(e, t = "") {
  return `--${H5(e, t)}`;
}
function Fe(e, t) {
  const r = G5(e, void 0);
  return { variable: r, reference: K5(r, Q5(void 0)) };
}
function Q5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: q5, definePartsStyle: Yl } = le(m5.keys),
  Fs = Fe("switch-track-width"),
  gi = Fe("switch-track-height"),
  zd = Fe("switch-track-diff"),
  Y5 = Mr.subtract(Fs, gi),
  hh = Fe("switch-thumb-x"),
  us = Fe("switch-bg"),
  X5 = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [Fs.reference],
      height: [gi.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [us.variable]: "colors.gray.300",
      _dark: { [us.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [us.variable]: `colors.${t}.500`,
        _dark: { [us.variable]: `colors.${t}.200` },
      },
      bg: us.reference,
    };
  },
  Z5 = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [gi.reference],
    height: [gi.reference],
    _checked: { transform: `translateX(${hh.reference})` },
  },
  J5 = Yl((e) => ({
    container: {
      [zd.variable]: Y5,
      [hh.variable]: zd.reference,
      _rtl: { [hh.variable]: Mr(zd).negate().toString() },
    },
    track: X5(e),
    thumb: Z5,
  })),
  e$ = {
    sm: Yl({
      container: { [Fs.variable]: "1.375rem", [gi.variable]: "sizes.3" },
    }),
    md: Yl({
      container: { [Fs.variable]: "1.875rem", [gi.variable]: "sizes.4" },
    }),
    lg: Yl({
      container: { [Fs.variable]: "2.875rem", [gi.variable]: "sizes.6" },
    }),
  },
  t$ = q5({
    baseStyle: J5,
    sizes: e$,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: r$, definePartsStyle: fo } = le(g5.keys),
  n$ = fo({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  Iu = { "&[data-is-numeric=true]": { textAlign: "end" } },
  i$ = fo((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: B("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...Iu,
      },
      td: {
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...Iu,
      },
      caption: { color: B("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  o$ = fo((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: B("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...Iu,
      },
      td: {
        borderBottom: "1px",
        borderColor: B(`${t}.100`, `${t}.700`)(e),
        ...Iu,
      },
      caption: { color: B("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: B(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: B(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  s$ = { simple: i$, striped: o$, unstyled: {} },
  a$ = {
    sm: fo({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: fo({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: fo({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  l$ = r$({
    baseStyle: n$,
    variants: s$,
    sizes: a$,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  pt = V("tabs-color"),
  er = V("tabs-bg"),
  Cl = V("tabs-border-color"),
  { defineMultiStyleConfig: u$, definePartsStyle: wr } = le(v5.keys),
  c$ = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  d$ = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  f$ = (e) => {
    const { align: t = "start", orientation: r } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: r === "vertical" ? "column" : "row",
    };
  },
  h$ = { p: 4 },
  p$ = wr((e) => ({ root: c$(e), tab: d$(e), tablist: f$(e), tabpanel: h$ })),
  m$ = {
    sm: wr({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: wr({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: wr({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  g$ = wr((e) => {
    const { colorScheme: t, orientation: r } = e,
      n = r === "vertical",
      i = n ? "borderStart" : "borderBottom",
      o = n ? "marginStart" : "marginBottom";
    return {
      tablist: { [i]: "2px solid", borderColor: "inherit" },
      tab: {
        [i]: "2px solid",
        borderColor: "transparent",
        [o]: "-2px",
        _selected: {
          [pt.variable]: `colors.${t}.600`,
          _dark: { [pt.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [er.variable]: "colors.gray.200",
          _dark: { [er.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: pt.reference,
        bg: er.reference,
      },
    };
  }),
  v$ = wr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [Cl.variable]: "transparent",
        _selected: {
          [pt.variable]: `colors.${t}.600`,
          [Cl.variable]: "colors.white",
          _dark: {
            [pt.variable]: `colors.${t}.300`,
            [Cl.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: Cl.reference,
        },
        color: pt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  y$ = wr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [er.variable]: "colors.gray.50",
        _dark: { [er.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [er.variable]: "colors.white",
          [pt.variable]: `colors.${t}.600`,
          _dark: {
            [er.variable]: "colors.gray.800",
            [pt.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: pt.reference,
        bg: er.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  b$ = wr((e) => {
    const { colorScheme: t, theme: r } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: st(r, `${t}.700`), bg: st(r, `${t}.100`) },
      },
    };
  }),
  S$ = wr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [pt.variable]: "colors.gray.600",
        _dark: { [pt.variable]: "inherit" },
        _selected: {
          [pt.variable]: "colors.white",
          [er.variable]: `colors.${t}.600`,
          _dark: {
            [pt.variable]: "colors.gray.800",
            [er.variable]: `colors.${t}.300`,
          },
        },
        color: pt.reference,
        bg: er.reference,
      },
    };
  }),
  x$ = wr({}),
  w$ = {
    line: g$,
    enclosed: v$,
    "enclosed-colored": y$,
    "soft-rounded": b$,
    "solid-rounded": S$,
    unstyled: x$,
  },
  k$ = u$({
    baseStyle: p$,
    sizes: m$,
    variants: w$,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  _e = HP("badge", ["bg", "color", "shadow"]),
  C$ = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: _e.bg.reference,
    color: _e.color.reference,
    boxShadow: _e.shadow.reference,
  },
  T$ = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Io(`${t}.500`, 0.6)(r);
    return {
      [_e.bg.variable]: `colors.${t}.500`,
      [_e.color.variable]: "colors.white",
      _dark: {
        [_e.bg.variable]: n,
        [_e.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  _$ = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Io(`${t}.200`, 0.16)(r);
    return {
      [_e.bg.variable]: `colors.${t}.100`,
      [_e.color.variable]: `colors.${t}.800`,
      _dark: { [_e.bg.variable]: n, [_e.color.variable]: `colors.${t}.200` },
    };
  },
  P$ = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Io(`${t}.200`, 0.8)(r);
    return {
      [_e.color.variable]: `colors.${t}.500`,
      _dark: { [_e.color.variable]: n },
      [_e.shadow.variable]: `inset 0 0 0px 1px ${_e.color.reference}`,
    };
  },
  E$ = { solid: T$, subtle: _$, outline: P$ },
  Os = {
    baseStyle: C$,
    variants: E$,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: $$, definePartsStyle: vi } = le(y5.keys),
  X0 = V("tag-bg"),
  Z0 = V("tag-color"),
  Md = V("tag-shadow"),
  Xl = V("tag-min-height"),
  Zl = V("tag-min-width"),
  Jl = V("tag-font-size"),
  eu = V("tag-padding-inline"),
  R$ = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [Z0.variable]: _e.color.reference,
    [X0.variable]: _e.bg.reference,
    [Md.variable]: _e.shadow.reference,
    color: Z0.reference,
    bg: X0.reference,
    boxShadow: Md.reference,
    borderRadius: "md",
    minH: Xl.reference,
    minW: Zl.reference,
    fontSize: Jl.reference,
    px: eu.reference,
    _focusVisible: { [Md.variable]: "shadows.outline" },
  },
  A$ = { lineHeight: 1.2, overflow: "visible" },
  z$ = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  M$ = vi({ container: R$, label: A$, closeButton: z$ }),
  F$ = {
    sm: vi({
      container: {
        [Xl.variable]: "sizes.5",
        [Zl.variable]: "sizes.5",
        [Jl.variable]: "fontSizes.xs",
        [eu.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: vi({
      container: {
        [Xl.variable]: "sizes.6",
        [Zl.variable]: "sizes.6",
        [Jl.variable]: "fontSizes.sm",
        [eu.variable]: "space.2",
      },
    }),
    lg: vi({
      container: {
        [Xl.variable]: "sizes.8",
        [Zl.variable]: "sizes.8",
        [Jl.variable]: "fontSizes.md",
        [eu.variable]: "space.3",
      },
    }),
  },
  O$ = {
    subtle: vi((e) => {
      var t;
      return { container: (t = Os.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: vi((e) => {
      var t;
      return { container: (t = Os.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: vi((e) => {
      var t;
      return { container: (t = Os.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  D$ = $$({
    variants: O$,
    baseStyle: M$,
    sizes: F$,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: Dr, defineMultiStyleConfig: j$ } = le(i5.keys),
  Yi = V("input-height"),
  Xi = V("input-font-size"),
  Zi = V("input-padding"),
  Ji = V("input-border-radius"),
  I$ = Dr({
    addon: {
      height: Yi.reference,
      fontSize: Xi.reference,
      px: Zi.reference,
      borderRadius: Ji.reference,
    },
    field: {
      width: "100%",
      height: Yi.reference,
      fontSize: Xi.reference,
      px: Zi.reference,
      borderRadius: Ji.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  en = {
    lg: {
      [Xi.variable]: "fontSizes.lg",
      [Zi.variable]: "space.4",
      [Ji.variable]: "radii.md",
      [Yi.variable]: "sizes.12",
    },
    md: {
      [Xi.variable]: "fontSizes.md",
      [Zi.variable]: "space.4",
      [Ji.variable]: "radii.md",
      [Yi.variable]: "sizes.10",
    },
    sm: {
      [Xi.variable]: "fontSizes.sm",
      [Zi.variable]: "space.3",
      [Ji.variable]: "radii.sm",
      [Yi.variable]: "sizes.8",
    },
    xs: {
      [Xi.variable]: "fontSizes.xs",
      [Zi.variable]: "space.2",
      [Ji.variable]: "radii.sm",
      [Yi.variable]: "sizes.6",
    },
  },
  L$ = {
    lg: Dr({ field: en.lg, group: en.lg }),
    md: Dr({ field: en.md, group: en.md }),
    sm: Dr({ field: en.sm, group: en.sm }),
    xs: Dr({ field: en.xs, group: en.xs }),
  };
function im(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || B("blue.500", "blue.300")(e),
    errorBorderColor: r || B("red.500", "red.300")(e),
  };
}
var B$ = Dr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = im(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: B("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: st(t, n), boxShadow: `0 0 0 1px ${st(t, n)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: st(t, r),
          boxShadow: `0 0 0 1px ${st(t, r)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: B("inherit", "whiteAlpha.50")(e),
        bg: B("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  V$ = Dr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = im(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: B("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: B("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: st(t, n) },
        _focusVisible: { bg: "transparent", borderColor: st(t, r) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: B("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  N$ = Dr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = im(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: st(t, n),
          boxShadow: `0px 1px 0px 0px ${st(t, n)}`,
        },
        _focusVisible: {
          borderColor: st(t, r),
          boxShadow: `0px 1px 0px 0px ${st(t, r)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  W$ = Dr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  U$ = { outline: B$, filled: V$, flushed: N$, unstyled: W$ },
  ee = j$({
    baseStyle: I$,
    sizes: L$,
    variants: U$,
    defaultProps: { size: "md", variant: "outline" },
  }),
  J0,
  H$ = {
    ...((J0 = ee.baseStyle) == null ? void 0 : J0.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  ev,
  tv,
  K$ = {
    outline: (e) => {
      var t, r;
      return (r = (t = ee.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, r;
      return (r = (t = ee.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? r
        : {};
    },
    filled: (e) => {
      var t, r;
      return (r = (t = ee.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? r
        : {};
    },
    unstyled:
      (tv = (ev = ee.variants) == null ? void 0 : ev.unstyled.field) != null
        ? tv
        : {},
  },
  rv,
  nv,
  iv,
  ov,
  sv,
  av,
  lv,
  uv,
  G$ = {
    xs: (nv = (rv = ee.sizes) == null ? void 0 : rv.xs.field) != null ? nv : {},
    sm: (ov = (iv = ee.sizes) == null ? void 0 : iv.sm.field) != null ? ov : {},
    md: (av = (sv = ee.sizes) == null ? void 0 : sv.md.field) != null ? av : {},
    lg: (uv = (lv = ee.sizes) == null ? void 0 : lv.lg.field) != null ? uv : {},
  },
  Q$ = {
    baseStyle: H$,
    sizes: G$,
    variants: K$,
    defaultProps: { size: "md", variant: "outline" },
  },
  Tl = Fe("tooltip-bg"),
  Fd = Fe("tooltip-fg"),
  q$ = Fe("popper-arrow-bg"),
  Y$ = {
    bg: Tl.reference,
    color: Fd.reference,
    [Tl.variable]: "colors.gray.700",
    [Fd.variable]: "colors.whiteAlpha.900",
    _dark: {
      [Tl.variable]: "colors.gray.300",
      [Fd.variable]: "colors.gray.900",
    },
    [q$.variable]: Tl.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  X$ = { baseStyle: Y$ },
  { defineMultiStyleConfig: Z$, definePartsStyle: Ss } = le(c5.keys),
  J$ = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: i } = e,
      o = B(K0(), K0("1rem", "rgba(0,0,0,0.1)"))(e),
      s = B(`${t}.500`, `${t}.200`)(e),
      a = `linear-gradient(
    to right,
    transparent 0%,
    ${st(r, s)} 50%,
    transparent 100%
  )`;
    return { ...(!n && i && o), ...(n ? { bgImage: a } : { bgColor: s }) };
  },
  eR = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  tR = (e) => ({ bg: B("gray.100", "whiteAlpha.300")(e) }),
  rR = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...J$(e),
  }),
  nR = Ss((e) => ({ label: eR, filledTrack: rR(e), track: tR(e) })),
  iR = {
    xs: Ss({ track: { h: "1" } }),
    sm: Ss({ track: { h: "2" } }),
    md: Ss({ track: { h: "3" } }),
    lg: Ss({ track: { h: "4" } }),
  },
  oR = Z$({
    sizes: iR,
    baseStyle: nR,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  sR = (e) => typeof e == "function";
function lt(e, ...t) {
  return sR(e) ? e(...t) : e;
}
var { definePartsStyle: tu, defineMultiStyleConfig: aR } = le(JE.keys),
  Ds = V("checkbox-size"),
  lR = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Ds.reference,
      h: Ds.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: B(`${t}.500`, `${t}.200`)(e),
        borderColor: B(`${t}.500`, `${t}.200`)(e),
        color: B("white", "gray.900")(e),
        _hover: {
          bg: B(`${t}.600`, `${t}.300`)(e),
          borderColor: B(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: B("gray.200", "transparent")(e),
          bg: B("gray.200", "whiteAlpha.300")(e),
          color: B("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: B(`${t}.500`, `${t}.200`)(e),
        borderColor: B(`${t}.500`, `${t}.200`)(e),
        color: B("white", "gray.900")(e),
      },
      _disabled: {
        bg: B("gray.100", "whiteAlpha.100")(e),
        borderColor: B("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: B("red.500", "red.300")(e) },
    };
  },
  uR = { _disabled: { cursor: "not-allowed" } },
  cR = { userSelect: "none", _disabled: { opacity: 0.4 } },
  dR = { transitionProperty: "transform", transitionDuration: "normal" },
  fR = tu((e) => ({ icon: dR, container: uR, control: lt(lR, e), label: cR })),
  hR = {
    sm: tu({
      control: { [Ds.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: tu({
      control: { [Ds.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: tu({
      control: { [Ds.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  Lu = aR({
    baseStyle: fR,
    sizes: hR,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: pR, definePartsStyle: ru } = le(d5.keys),
  mR = (e) => {
    var t;
    const r = (t = lt(Lu.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...r,
      borderRadius: "full",
      _checked: {
        ...(r == null ? void 0 : r._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  gR = ru((e) => {
    var t, r, n, i;
    return {
      label: (r = (t = Lu).baseStyle) == null ? void 0 : r.call(t, e).label,
      container:
        (i = (n = Lu).baseStyle) == null ? void 0 : i.call(n, e).container,
      control: mR(e),
    };
  }),
  vR = {
    md: ru({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: ru({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: ru({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  yR = pR({
    baseStyle: gR,
    sizes: vR,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: bR, definePartsStyle: SR } = le(f5.keys),
  _l = V("select-bg"),
  cv,
  xR = {
    ...((cv = ee.baseStyle) == null ? void 0 : cv.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: _l.reference,
    [_l.variable]: "colors.white",
    _dark: { [_l.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: _l.reference },
  },
  wR = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  kR = SR({ field: xR, icon: wR }),
  Pl = { paddingInlineEnd: "8" },
  dv,
  fv,
  hv,
  pv,
  mv,
  gv,
  vv,
  yv,
  CR = {
    lg: {
      ...((dv = ee.sizes) == null ? void 0 : dv.lg),
      field: { ...((fv = ee.sizes) == null ? void 0 : fv.lg.field), ...Pl },
    },
    md: {
      ...((hv = ee.sizes) == null ? void 0 : hv.md),
      field: { ...((pv = ee.sizes) == null ? void 0 : pv.md.field), ...Pl },
    },
    sm: {
      ...((mv = ee.sizes) == null ? void 0 : mv.sm),
      field: { ...((gv = ee.sizes) == null ? void 0 : gv.sm.field), ...Pl },
    },
    xs: {
      ...((vv = ee.sizes) == null ? void 0 : vv.xs),
      field: { ...((yv = ee.sizes) == null ? void 0 : yv.xs.field), ...Pl },
      icon: { insetEnd: "1" },
    },
  },
  TR = bR({
    baseStyle: kR,
    sizes: CR,
    variants: ee.variants,
    defaultProps: ee.defaultProps,
  }),
  Od = V("skeleton-start-color"),
  Dd = V("skeleton-end-color"),
  _R = {
    [Od.variable]: "colors.gray.100",
    [Dd.variable]: "colors.gray.400",
    _dark: {
      [Od.variable]: "colors.gray.800",
      [Dd.variable]: "colors.gray.600",
    },
    background: Od.reference,
    borderColor: Dd.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  PR = { baseStyle: _R },
  jd = V("skip-link-bg"),
  ER = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [jd.variable]: "colors.white",
      _dark: { [jd.variable]: "colors.gray.700" },
      bg: jd.reference,
    },
  },
  $R = { baseStyle: ER },
  { defineMultiStyleConfig: RR, definePartsStyle: Dc } = le(h5.keys),
  fa = V("slider-thumb-size"),
  ha = V("slider-track-size"),
  cn = V("slider-bg"),
  AR = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...nm({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  zR = (e) => ({
    ...nm({
      orientation: e.orientation,
      horizontal: { h: ha.reference },
      vertical: { w: ha.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [cn.variable]: "colors.gray.200",
    _dark: { [cn.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [cn.variable]: "colors.gray.300",
      _dark: { [cn.variable]: "colors.whiteAlpha.300" },
    },
    bg: cn.reference,
  }),
  MR = (e) => {
    const { orientation: t } = e;
    return {
      ...nm({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: fa.reference,
      h: fa.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  FR = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [cn.variable]: `colors.${t}.500`,
      _dark: { [cn.variable]: `colors.${t}.200` },
      bg: cn.reference,
    };
  },
  OR = Dc((e) => ({
    container: AR(e),
    track: zR(e),
    thumb: MR(e),
    filledTrack: FR(e),
  })),
  DR = Dc({
    container: { [fa.variable]: "sizes.4", [ha.variable]: "sizes.1" },
  }),
  jR = Dc({
    container: { [fa.variable]: "sizes.3.5", [ha.variable]: "sizes.1" },
  }),
  IR = Dc({
    container: { [fa.variable]: "sizes.2.5", [ha.variable]: "sizes.0.5" },
  }),
  LR = { lg: DR, md: jR, sm: IR },
  BR = RR({
    baseStyle: OR,
    sizes: LR,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  ei = Fe("spinner-size"),
  VR = { width: [ei.reference], height: [ei.reference] },
  NR = {
    xs: { [ei.variable]: "sizes.3" },
    sm: { [ei.variable]: "sizes.4" },
    md: { [ei.variable]: "sizes.6" },
    lg: { [ei.variable]: "sizes.8" },
    xl: { [ei.variable]: "sizes.12" },
  },
  WR = { baseStyle: VR, sizes: NR, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: UR, definePartsStyle: XS } = le(p5.keys),
  HR = { fontWeight: "medium" },
  KR = { opacity: 0.8, marginBottom: "2" },
  GR = { verticalAlign: "baseline", fontWeight: "semibold" },
  QR = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  qR = XS({ container: {}, label: HR, helpText: KR, number: GR, icon: QR }),
  YR = {
    md: XS({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  XR = UR({ baseStyle: qR, sizes: YR, defaultProps: { size: "md" } }),
  Id = V("kbd-bg"),
  ZR = {
    [Id.variable]: "colors.gray.100",
    _dark: { [Id.variable]: "colors.whiteAlpha.100" },
    bg: Id.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  JR = { baseStyle: ZR },
  e4 = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  t4 = { baseStyle: e4 },
  { defineMultiStyleConfig: r4, definePartsStyle: n4 } = le(o5.keys),
  i4 = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  o4 = n4({ icon: i4 }),
  s4 = r4({ baseStyle: o4 }),
  { defineMultiStyleConfig: a4, definePartsStyle: l4 } = le(s5.keys),
  dr = V("menu-bg"),
  Ld = V("menu-shadow"),
  u4 = {
    [dr.variable]: "#fff",
    [Ld.variable]: "shadows.sm",
    _dark: {
      [dr.variable]: "colors.gray.700",
      [Ld.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: dr.reference,
    boxShadow: Ld.reference,
  },
  c4 = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [dr.variable]: "colors.gray.100",
      _dark: { [dr.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [dr.variable]: "colors.gray.200",
      _dark: { [dr.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [dr.variable]: "colors.gray.100",
      _dark: { [dr.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: dr.reference,
  },
  d4 = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  f4 = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  h4 = { opacity: 0.6 },
  p4 = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  m4 = { transitionProperty: "common", transitionDuration: "normal" },
  g4 = l4({
    button: m4,
    list: u4,
    item: c4,
    groupTitle: d4,
    icon: f4,
    command: h4,
    divider: p4,
  }),
  v4 = a4({ baseStyle: g4 }),
  { defineMultiStyleConfig: y4, definePartsStyle: ph } = le(a5.keys),
  Bd = V("modal-bg"),
  Vd = V("modal-shadow"),
  b4 = { bg: "blackAlpha.600", zIndex: "modal" },
  S4 = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: r === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  x4 = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [Bd.variable]: "colors.white",
      [Vd.variable]: "shadows.lg",
      _dark: {
        [Bd.variable]: "colors.gray.700",
        [Vd.variable]: "shadows.dark-lg",
      },
      bg: Bd.reference,
      boxShadow: Vd.reference,
    };
  },
  w4 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  k4 = { position: "absolute", top: "2", insetEnd: "3" },
  C4 = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  T4 = { px: "6", py: "4" },
  _4 = ph((e) => ({
    overlay: b4,
    dialogContainer: lt(S4, e),
    dialog: lt(x4, e),
    header: w4,
    closeButton: k4,
    body: lt(C4, e),
    footer: T4,
  }));
function qt(e) {
  return ph(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var P4 = {
    xs: qt("xs"),
    sm: qt("sm"),
    md: qt("md"),
    lg: qt("lg"),
    xl: qt("xl"),
    "2xl": qt("2xl"),
    "3xl": qt("3xl"),
    "4xl": qt("4xl"),
    "5xl": qt("5xl"),
    "6xl": qt("6xl"),
    full: qt("full"),
  },
  E4 = y4({ baseStyle: _4, sizes: P4, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: $4, definePartsStyle: ZS } = le(l5.keys),
  om = Fe("number-input-stepper-width"),
  JS = Fe("number-input-input-padding"),
  R4 = Mr(om).add("0.5rem").toString(),
  Nd = Fe("number-input-bg"),
  Wd = Fe("number-input-color"),
  Ud = Fe("number-input-border-color"),
  A4 = { [om.variable]: "sizes.6", [JS.variable]: R4 },
  z4 = (e) => {
    var t, r;
    return (r = (t = lt(ee.baseStyle, e)) == null ? void 0 : t.field) != null
      ? r
      : {};
  },
  M4 = { width: om.reference },
  F4 = {
    borderStart: "1px solid",
    borderStartColor: Ud.reference,
    color: Wd.reference,
    bg: Nd.reference,
    [Wd.variable]: "colors.chakra-body-text",
    [Ud.variable]: "colors.chakra-border-color",
    _dark: {
      [Wd.variable]: "colors.whiteAlpha.800",
      [Ud.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [Nd.variable]: "colors.gray.200",
      _dark: { [Nd.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  O4 = ZS((e) => {
    var t;
    return {
      root: A4,
      field: (t = lt(z4, e)) != null ? t : {},
      stepperGroup: M4,
      stepper: F4,
    };
  });
function El(e) {
  var t, r, n;
  const i = (t = ee.sizes) == null ? void 0 : t[e],
    o = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    s = (n = (r = i.field) == null ? void 0 : r.fontSize) != null ? n : "md",
    a = KS.fontSizes[s];
  return ZS({
    field: { ...i.field, paddingInlineEnd: JS.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Mr(a).multiply(0.75).toString(),
      _first: { borderTopEndRadius: o[e] },
      _last: { borderBottomEndRadius: o[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var D4 = { xs: El("xs"), sm: El("sm"), md: El("md"), lg: El("lg") },
  j4 = $4({
    baseStyle: O4,
    sizes: D4,
    variants: ee.variants,
    defaultProps: ee.defaultProps,
  }),
  bv,
  I4 = {
    ...((bv = ee.baseStyle) == null ? void 0 : bv.field),
    textAlign: "center",
  },
  L4 = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  Sv,
  xv,
  B4 = {
    outline: (e) => {
      var t, r, n;
      return (n =
        (r = lt((t = ee.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, r, n;
      return (n =
        (r = lt((t = ee.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    filled: (e) => {
      var t, r, n;
      return (n =
        (r = lt((t = ee.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    unstyled:
      (xv = (Sv = ee.variants) == null ? void 0 : Sv.unstyled.field) != null
        ? xv
        : {},
  },
  V4 = {
    baseStyle: I4,
    sizes: L4,
    variants: B4,
    defaultProps: ee.defaultProps,
  },
  { defineMultiStyleConfig: N4, definePartsStyle: W4 } = le(u5.keys),
  $l = Fe("popper-bg"),
  U4 = Fe("popper-arrow-bg"),
  wv = Fe("popper-arrow-shadow-color"),
  H4 = { zIndex: 10 },
  K4 = {
    [$l.variable]: "colors.white",
    bg: $l.reference,
    [U4.variable]: $l.reference,
    [wv.variable]: "colors.gray.200",
    _dark: {
      [$l.variable]: "colors.gray.700",
      [wv.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  G4 = { px: 3, py: 2, borderBottomWidth: "1px" },
  Q4 = { px: 3, py: 2 },
  q4 = { px: 3, py: 2, borderTopWidth: "1px" },
  Y4 = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  X4 = W4({
    popper: H4,
    content: K4,
    header: G4,
    body: Q4,
    footer: q4,
    closeButton: Y4,
  }),
  Z4 = N4({ baseStyle: X4 }),
  { definePartsStyle: mh, defineMultiStyleConfig: J4 } = le(e5.keys),
  Hd = V("drawer-bg"),
  Kd = V("drawer-box-shadow");
function Oi(e) {
  return mh(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var eA = { bg: "blackAlpha.600", zIndex: "modal" },
  tA = { display: "flex", zIndex: "modal", justifyContent: "center" },
  rA = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [Hd.variable]: "colors.white",
      [Kd.variable]: "shadows.lg",
      _dark: {
        [Hd.variable]: "colors.gray.700",
        [Kd.variable]: "shadows.dark-lg",
      },
      bg: Hd.reference,
      boxShadow: Kd.reference,
    };
  },
  nA = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  iA = { position: "absolute", top: "2", insetEnd: "3" },
  oA = { px: "6", py: "2", flex: "1", overflow: "auto" },
  sA = { px: "6", py: "4" },
  aA = mh((e) => ({
    overlay: eA,
    dialogContainer: tA,
    dialog: lt(rA, e),
    header: nA,
    closeButton: iA,
    body: oA,
    footer: sA,
  })),
  lA = {
    xs: Oi("xs"),
    sm: Oi("md"),
    md: Oi("lg"),
    lg: Oi("2xl"),
    xl: Oi("4xl"),
    full: Oi("full"),
  },
  uA = J4({ baseStyle: aA, sizes: lA, defaultProps: { size: "xs" } }),
  { definePartsStyle: cA, defineMultiStyleConfig: dA } = le(t5.keys),
  fA = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  hA = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  pA = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  mA = cA({ preview: fA, input: hA, textarea: pA }),
  gA = dA({ baseStyle: mA }),
  { definePartsStyle: vA, defineMultiStyleConfig: yA } = le(r5.keys),
  ho = V("form-control-color"),
  bA = {
    marginStart: "1",
    [ho.variable]: "colors.red.500",
    _dark: { [ho.variable]: "colors.red.300" },
    color: ho.reference,
  },
  SA = {
    mt: "2",
    [ho.variable]: "colors.gray.600",
    _dark: { [ho.variable]: "colors.whiteAlpha.600" },
    color: ho.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  xA = vA({
    container: { width: "100%", position: "relative" },
    requiredIndicator: bA,
    helperText: SA,
  }),
  wA = yA({ baseStyle: xA }),
  { definePartsStyle: kA, defineMultiStyleConfig: CA } = le(n5.keys),
  po = V("form-error-color"),
  TA = {
    [po.variable]: "colors.red.500",
    _dark: { [po.variable]: "colors.red.300" },
    color: po.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  _A = {
    marginEnd: "0.5em",
    [po.variable]: "colors.red.500",
    _dark: { [po.variable]: "colors.red.300" },
    color: po.reference,
  },
  PA = kA({ text: TA, icon: _A }),
  EA = CA({ baseStyle: PA }),
  $A = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  RA = { baseStyle: $A },
  AA = { fontFamily: "heading", fontWeight: "bold" },
  zA = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  MA = { baseStyle: AA, sizes: zA, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: FA, definePartsStyle: OA } = le(ZE.keys),
  Gd = V("breadcrumb-link-decor"),
  DA = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: Gd.reference,
    [Gd.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [Gd.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  jA = OA({ link: DA }),
  IA = FA({ baseStyle: jA }),
  LA = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  ex = (e) => {
    const { colorScheme: t, theme: r } = e;
    if (t === "gray")
      return {
        color: B("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: B("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: B("gray.200", "whiteAlpha.300")(e) },
      };
    const n = Io(`${t}.200`, 0.12)(r),
      i = Io(`${t}.200`, 0.24)(r);
    return {
      color: B(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: B(`${t}.50`, n)(e) },
      _active: { bg: B(`${t}.100`, i)(e) },
    };
  },
  BA = (e) => {
    const { colorScheme: t } = e,
      r = B("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? r : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...lt(ex, e),
    };
  },
  VA = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  NA = (e) => {
    var t;
    const { colorScheme: r } = e;
    if (r === "gray") {
      const l = B("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: B("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: B("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: B("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: n = `${r}.500`,
        color: i = "white",
        hoverBg: o = `${r}.600`,
        activeBg: s = `${r}.700`,
      } = (t = VA[r]) != null ? t : {},
      a = B(n, `${r}.200`)(e);
    return {
      bg: a,
      color: B(i, "gray.800")(e),
      _hover: { bg: B(o, `${r}.300`)(e), _disabled: { bg: a } },
      _active: { bg: B(s, `${r}.400`)(e) },
    };
  },
  WA = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: B(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: B(`${t}.700`, `${t}.500`)(e) },
    };
  },
  UA = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  HA = { ghost: ex, outline: BA, solid: NA, link: WA, unstyled: UA },
  KA = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  GA = {
    baseStyle: LA,
    variants: HA,
    sizes: KA,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: yi, defineMultiStyleConfig: QA } = le(b5.keys),
  Bu = V("card-bg"),
  Lr = V("card-padding"),
  tx = V("card-shadow"),
  nu = V("card-radius"),
  rx = V("card-border-width", "0"),
  nx = V("card-border-color"),
  qA = yi({
    container: {
      [Bu.variable]: "colors.chakra-body-bg",
      backgroundColor: Bu.reference,
      boxShadow: tx.reference,
      borderRadius: nu.reference,
      color: "chakra-body-text",
      borderWidth: rx.reference,
      borderColor: nx.reference,
    },
    body: { padding: Lr.reference, flex: "1 1 0%" },
    header: { padding: Lr.reference },
    footer: { padding: Lr.reference },
  }),
  YA = {
    sm: yi({
      container: { [nu.variable]: "radii.base", [Lr.variable]: "space.3" },
    }),
    md: yi({
      container: { [nu.variable]: "radii.md", [Lr.variable]: "space.5" },
    }),
    lg: yi({
      container: { [nu.variable]: "radii.xl", [Lr.variable]: "space.7" },
    }),
  },
  XA = {
    elevated: yi({
      container: {
        [tx.variable]: "shadows.base",
        _dark: { [Bu.variable]: "colors.gray.700" },
      },
    }),
    outline: yi({
      container: {
        [rx.variable]: "1px",
        [nx.variable]: "colors.chakra-border-color",
      },
    }),
    filled: yi({ container: { [Bu.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [Lr.variable]: 0 },
      header: { [Lr.variable]: 0 },
      footer: { [Lr.variable]: 0 },
    },
  },
  ZA = QA({
    baseStyle: qA,
    variants: XA,
    sizes: YA,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  js = Fe("close-button-size"),
  cs = Fe("close-button-bg"),
  JA = {
    w: [js.reference],
    h: [js.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [cs.variable]: "colors.blackAlpha.100",
      _dark: { [cs.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [cs.variable]: "colors.blackAlpha.200",
      _dark: { [cs.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: cs.reference,
  },
  e3 = {
    lg: { [js.variable]: "sizes.10", fontSize: "md" },
    md: { [js.variable]: "sizes.8", fontSize: "xs" },
    sm: { [js.variable]: "sizes.6", fontSize: "2xs" },
  },
  t3 = { baseStyle: JA, sizes: e3, defaultProps: { size: "md" } },
  { variants: r3, defaultProps: n3 } = Os,
  i3 = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: _e.bg.reference,
    color: _e.color.reference,
    boxShadow: _e.shadow.reference,
  },
  o3 = { baseStyle: i3, variants: r3, defaultProps: n3 },
  s3 = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  a3 = { baseStyle: s3 },
  l3 = { opacity: 0.6, borderColor: "inherit" },
  u3 = { borderStyle: "solid" },
  c3 = { borderStyle: "dashed" },
  d3 = { solid: u3, dashed: c3 },
  f3 = { baseStyle: l3, variants: d3, defaultProps: { variant: "solid" } },
  { definePartsStyle: h3, defineMultiStyleConfig: p3 } = le(qE.keys),
  m3 = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  g3 = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  v3 = { pt: "2", px: "4", pb: "5" },
  y3 = { fontSize: "1.25em" },
  b3 = h3({ container: m3, button: g3, panel: v3, icon: y3 }),
  S3 = p3({ baseStyle: b3 }),
  { definePartsStyle: Ba, defineMultiStyleConfig: x3 } = le(YE.keys),
  Pt = V("alert-fg"),
  Qr = V("alert-bg"),
  w3 = Ba({
    container: { bg: Qr.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: Pt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: Pt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function sm(e) {
  const { theme: t, colorScheme: r } = e,
    n = Io(`${r}.200`, 0.16)(t);
  return { light: `colors.${r}.100`, dark: n };
}
var k3 = Ba((e) => {
    const { colorScheme: t } = e,
      r = sm(e);
    return {
      container: {
        [Pt.variable]: `colors.${t}.600`,
        [Qr.variable]: r.light,
        _dark: { [Pt.variable]: `colors.${t}.200`, [Qr.variable]: r.dark },
      },
    };
  }),
  C3 = Ba((e) => {
    const { colorScheme: t } = e,
      r = sm(e);
    return {
      container: {
        [Pt.variable]: `colors.${t}.600`,
        [Qr.variable]: r.light,
        _dark: { [Pt.variable]: `colors.${t}.200`, [Qr.variable]: r.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: Pt.reference,
      },
    };
  }),
  T3 = Ba((e) => {
    const { colorScheme: t } = e,
      r = sm(e);
    return {
      container: {
        [Pt.variable]: `colors.${t}.600`,
        [Qr.variable]: r.light,
        _dark: { [Pt.variable]: `colors.${t}.200`, [Qr.variable]: r.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: Pt.reference,
      },
    };
  }),
  _3 = Ba((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [Pt.variable]: "colors.white",
        [Qr.variable]: `colors.${t}.600`,
        _dark: {
          [Pt.variable]: "colors.gray.900",
          [Qr.variable]: `colors.${t}.200`,
        },
        color: Pt.reference,
      },
    };
  }),
  P3 = { subtle: k3, "left-accent": C3, "top-accent": T3, solid: _3 },
  E3 = x3({
    baseStyle: w3,
    variants: P3,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: ix, defineMultiStyleConfig: $3 } = le(XE.keys),
  mo = V("avatar-border-color"),
  Is = V("avatar-bg"),
  pa = V("avatar-font-size"),
  Lo = V("avatar-size"),
  R3 = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mo.reference,
    [mo.variable]: "white",
    _dark: { [mo.variable]: "colors.gray.800" },
  },
  A3 = {
    bg: Is.reference,
    fontSize: pa.reference,
    width: Lo.reference,
    height: Lo.reference,
    lineHeight: "1",
    [Is.variable]: "colors.gray.200",
    _dark: { [Is.variable]: "colors.whiteAlpha.400" },
  },
  z3 = (e) => {
    const { name: t, theme: r } = e,
      n = t ? L5({ string: t }) : "colors.gray.400",
      i = j5(n)(r);
    let o = "white";
    return (
      i || (o = "gray.800"),
      {
        bg: Is.reference,
        fontSize: pa.reference,
        color: o,
        borderColor: mo.reference,
        verticalAlign: "top",
        width: Lo.reference,
        height: Lo.reference,
        "&:not([data-loaded])": { [Is.variable]: n },
        [mo.variable]: "colors.white",
        _dark: { [mo.variable]: "colors.gray.800" },
      }
    );
  },
  M3 = { fontSize: pa.reference, lineHeight: "1" },
  F3 = ix((e) => ({
    badge: lt(R3, e),
    excessLabel: lt(A3, e),
    container: lt(z3, e),
    label: M3,
  }));
function tn(e) {
  const t = e !== "100%" ? QS[e] : void 0;
  return ix({
    container: {
      [Lo.variable]: t ?? e,
      [pa.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [Lo.variable]: t ?? e,
      [pa.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var O3 = {
    "2xs": tn(4),
    xs: tn(6),
    sm: tn(8),
    md: tn(12),
    lg: tn(16),
    xl: tn(24),
    "2xl": tn(32),
    full: tn("100%"),
  },
  D3 = $3({ baseStyle: F3, sizes: O3, defaultProps: { size: "md" } }),
  j3 = {
    Accordion: S3,
    Alert: E3,
    Avatar: D3,
    Badge: Os,
    Breadcrumb: IA,
    Button: GA,
    Checkbox: Lu,
    CloseButton: t3,
    Code: o3,
    Container: a3,
    Divider: f3,
    Drawer: uA,
    Editable: gA,
    Form: wA,
    FormError: EA,
    FormLabel: RA,
    Heading: MA,
    Input: ee,
    Kbd: JR,
    Link: t4,
    List: s4,
    Menu: v4,
    Modal: E4,
    NumberInput: j4,
    PinInput: V4,
    Popover: Z4,
    Progress: oR,
    Radio: yR,
    Select: TR,
    Skeleton: PR,
    SkipLink: $R,
    Slider: BR,
    Spinner: WR,
    Stat: XR,
    Switch: t$,
    Table: l$,
    Tabs: k$,
    Tag: D$,
    Textarea: Q$,
    Tooltip: X$,
    Card: ZA,
    Stepper: QE,
  },
  I3 = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  L3 = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  B3 = "ltr",
  V3 = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  ox = {
    semanticTokens: I3,
    direction: B3,
    ...HE,
    components: j3,
    styles: L3,
    config: V3,
  };
function xs(e) {
  return typeof e == "function";
}
function N3(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var W3 = (e) =>
    function (...r) {
      let n = [...r],
        i = r[r.length - 1];
      return (
        xE(i) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (i = e),
        N3(...n.map((o) => (s) => xs(o) ? o(s) : H3(s, o)))(i)
      );
    },
  U3 = W3(ox);
function H3(...e) {
  return Nt({}, ...e, sx);
}
function sx(e, t, r, n) {
  if ((xs(e) || xs(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...i) => {
      const o = xs(e) ? e(...i) : e,
        s = xs(t) ? t(...i) : t;
      return Nt({}, o, s, sx);
    };
}
function K3(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
function G3(e, t, r, n) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < i.length && e; n += 1) e = e[i[n]];
  return e === void 0 ? r : e;
}
var Q3 = (e) => {
    const t = new WeakMap();
    return (n, i, o, s) => {
      if (typeof n > "u") return e(n, i, o);
      t.has(n) || t.set(n, new Map());
      const a = t.get(n);
      if (a.has(i)) return a.get(i);
      const l = e(n, i, o, s);
      return a.set(i, l), l;
    };
  },
  ax = Q3(G3);
function lx(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      const i = e[n];
      t(i, n, e) && (r[n] = i);
    }),
    r
  );
}
var ux = (e) => lx(e, (t) => t != null);
function q3(e) {
  return typeof e == "function";
}
function cx(e, ...t) {
  return q3(e) ? e(...t) : e;
}
var Y3 = typeof Element < "u",
  X3 = typeof Map == "function",
  Z3 = typeof Set == "function",
  J3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function iu(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, i;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!iu(e[n], t[n])) return !1;
      return !0;
    }
    var o;
    if (X3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!iu(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (Z3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (o = e.entries(); !(n = o.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (J3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
    if (Y3 && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (i[n] === "_owner" || i[n] === "__v" || i[n] === "__o") &&
          e.$$typeof
        ) &&
        !iu(e[i[n]], t[i[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var ez = function (t, r) {
  try {
    return iu(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const tz = Qh(ez);
function dx(e, t = {}) {
  var r;
  const { styleConfig: n, ...i } = t,
    { theme: o, colorMode: s } = nP(),
    a = e ? ax(o, `components.${e}`) : void 0,
    l = n || a,
    u = Nt(
      { theme: o, colorMode: s },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      ux(K3(i, ["children"]))
    ),
    c = T.useRef({});
  if (l) {
    const f = bE(l)(u);
    tz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Ri(e, t = {}) {
  return dx(e, t);
}
function am(e, t = {}) {
  return dx(e, t);
}
var rz = new Set([
    ...aE,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  nz = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function iz(e) {
  return nz.has(e) || !rz.has(e);
}
function oz(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const i in n)
        Object.prototype.hasOwnProperty.call(n, i) &&
          (i in r && delete r[i], (r[i] = n[i]));
  return r;
}
function sz(e) {
  const t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
var az =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  lz = wS(function (e) {
    return (
      az.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  uz = lz,
  cz = function (t) {
    return t !== "theme";
  },
  kv = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? uz : cz;
  },
  Cv = function (t, r, n) {
    var i;
    if (r) {
      var o = r.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (s) {
              return t.__emotion_forwardProp(s) && o(s);
            }
          : o;
    }
    return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
  },
  dz = function (t) {
    var r = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      ES(r, n, i),
      O_(function () {
        return $S(r, n, i);
      }),
      null
    );
  },
  fz = function e(t, r) {
    var n = t.__emotion_real === t,
      i = (n && t.__emotion_base) || t,
      o,
      s;
    r !== void 0 && ((o = r.label), (s = r.target));
    var a = Cv(t, r, n),
      l = a || kv(i),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && d.push("label:" + o + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, m = 1; m < f; m++) d.push(c[m], c[0][m]);
      }
      var b = MS(function (y, k, p) {
        var h = (u && y.as) || i,
          g = "",
          C = [],
          P = y;
        if (y.theme == null) {
          P = {};
          for (var A in y) P[A] = y[A];
          P.theme = T.useContext(ca);
        }
        typeof y.className == "string"
          ? (g = E_(k.registered, C, y.className))
          : y.className != null && (g = y.className + " ");
        var R = Yp(d.concat(C), k.registered, P);
        (g += k.key + "-" + R.name), s !== void 0 && (g += " " + s);
        var $ = u && a === void 0 ? kv(h) : l,
          O = {};
        for (var j in y) (u && j === "as") || ($(j) && (O[j] = y[j]));
        return (
          (O.className = g),
          (O.ref = p),
          T.createElement(
            T.Fragment,
            null,
            T.createElement(dz, {
              cache: k,
              serialized: R,
              isStringTag: typeof h == "string",
            }),
            T.createElement(h, O)
          )
        );
      });
      return (
        (b.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (b.defaultProps = t.defaultProps),
        (b.__emotion_real = b),
        (b.__emotion_base = i),
        (b.__emotion_styles = d),
        (b.__emotion_forwardProp = a),
        Object.defineProperty(b, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (b.withComponent = function (y, k) {
          return e(y, Fu({}, r, k, { shouldForwardProp: Cv(b, k, !0) })).apply(
            void 0,
            d
          );
        }),
        b
      );
    };
  },
  hz = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Vu = fz.bind();
hz.forEach(function (e) {
  Vu[e] = Vu(e);
});
var Tv,
  pz = (Tv = Vu.default) != null ? Tv : Vu,
  mz =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: i, sx: o, ...s } = t,
        a = lx(s, (d, f) => uE(f)),
        l = cx(e, t),
        u = oz({}, i, l, ux(a), o),
        c = HS(u)(t.theme);
      return n ? [c, n] : c;
    };
function Qd(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = iz);
  const i = mz({ baseStyle: r }),
    o = pz(e, n)(i);
  return tr.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = La();
    return tr.createElement(o, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function gz() {
  const e = new Map();
  return new Proxy(Qd, {
    apply(t, r, n) {
      return Qd(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Qd(r)), e.get(r);
    },
  });
}
var fe = gz();
function He(e) {
  return T.forwardRef(e);
}
function vz(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: n,
    } = e,
    i = T.createContext(void 0);
  i.displayName = n;
  function o() {
    var s;
    const a = T.useContext(i);
    if (!a && t) {
      const l = new Error(r);
      throw (
        ((l.name = "ContextError"),
        (s = Error.captureStackTrace) == null || s.call(Error, l, o),
        l)
      );
    }
    return a;
  }
  return [i.Provider, o, i];
}
function yz(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    i = T.useMemo(() => sE(r), [r]);
  return _.jsxs(I_, { theme: i, children: [_.jsx(bz, { root: t }), n] });
}
function bz({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return _.jsx(Ac, { styles: (r) => ({ [t]: r.__cssVars }) });
}
vz({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function Sz() {
  const { colorMode: e } = La();
  return _.jsx(Ac, {
    styles: (t) => {
      const r = ax(t, "styles.global"),
        n = cx(r, { theme: t, colorMode: e });
      return n ? HS(n)(t) : void 0;
    },
  });
}
var fx = T.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
fx.displayName = "EnvironmentContext";
function hx(e) {
  const { children: t, environment: r, disabled: n } = e,
    i = T.useRef(null),
    o = T.useMemo(
      () =>
        r || {
          getDocument: () => {
            var a, l;
            return (l = (a = i.current) == null ? void 0 : a.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var a, l;
            return (l =
              (a = i.current) == null ? void 0 : a.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [r]
    ),
    s = !n || !r;
  return _.jsxs(fx.Provider, {
    value: o,
    children: [
      t,
      s && _.jsx("span", { id: "__chakra_env", hidden: !0, ref: i }),
    ],
  });
}
hx.displayName = "EnvironmentProvider";
var xz = (e) => {
    const {
        children: t,
        colorModeManager: r,
        portalZIndex: n,
        resetScope: i,
        resetCSS: o = !0,
        theme: s = {},
        environment: a,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = _.jsx(hx, { environment: a, disabled: u, children: t });
    return _.jsx(yz, {
      theme: s,
      cssVarsRoot: l,
      children: _.jsxs(IS, {
        colorModeManager: r,
        options: s.config,
        children: [
          o ? _.jsx(N_, { scope: i }) : _.jsx(V_, {}),
          !c && _.jsx(Sz, {}),
          n ? _.jsx(DS, { zIndex: n, children: d }) : d,
        ],
      }),
    });
  },
  wz = (e, t) => e.find((r) => r.id === t);
function _v(e, t) {
  const r = px(e, t),
    n = r ? e[r].findIndex((i) => i.id === t) : -1;
  return { position: r, index: n };
}
function px(e, t) {
  for (const [r, n] of Object.entries(e)) if (wz(n, t)) return r;
}
function kz(e) {
  const t = e.includes("right"),
    r = e.includes("left");
  let n = "center";
  return (
    t && (n = "flex-end"),
    r && (n = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: n }
  );
}
function Cz(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0,
    n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    i = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    o = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    s = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: i,
    right: o,
    left: s,
  };
}
function Tz(e, t = []) {
  const r = T.useRef(e);
  return (
    T.useEffect(() => {
      r.current = e;
    }),
    T.useCallback((...n) => {
      var i;
      return (i = r.current) == null ? void 0 : i.call(r, ...n);
    }, t)
  );
}
function _z(e, t) {
  const r = Tz(e);
  T.useEffect(() => {
    if (t == null) return;
    let n = null;
    return (
      (n = window.setTimeout(() => {
        r();
      }, t)),
      () => {
        n && window.clearTimeout(n);
      }
    );
  }, [t, r]);
}
function Pv(e, t) {
  const r = T.useRef(!1),
    n = T.useRef(!1);
  T.useEffect(() => {
    if (r.current && n.current) return e();
    n.current = !0;
  }, t),
    T.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1;
        }
      ),
      []
    );
}
const lm = T.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  jc = T.createContext({}),
  Va = T.createContext(null),
  um = typeof document < "u",
  cm = um ? T.useLayoutEffect : T.useEffect,
  mx = T.createContext({ strict: !1 }),
  dm = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Pz = "framerAppearId",
  gx = "data-" + dm(Pz),
  Ez = { skipAnimations: !1, useManualTiming: !1 };
class Ev {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function $z(e) {
  let t = new Ev(),
    r = new Ev(),
    n = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : r;
        return u && s.add(l), f.add(l) && d && i && (n = t.order.length), l;
      },
      cancel: (l) => {
        r.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
          for (let u = 0; u < n; u++) {
            const c = t.order[u];
            s.has(c) && (a.schedule(c), e()), c(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const Rl = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Rz = 40;
function vx(e, t) {
  let r = !1,
    n = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Rl.reduce((d, f) => ((d[f] = $z(() => (r = !0))), d), {}),
    s = (d) => {
      o[d].process(i);
    },
    a = () => {
      const d = performance.now();
      (r = !1),
        (i.delta = n ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, Rz), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        Rl.forEach(s),
        (i.isProcessing = !1),
        r && t && ((n = !1), e(a));
    },
    l = () => {
      (r = !0), (n = !0), i.isProcessing || e(a);
    };
  return {
    schedule: Rl.reduce((d, f) => {
      const m = o[f];
      return (d[f] = (b, y = !1, k = !1) => (r || l(), m.schedule(b, y, k))), d;
    }, {}),
    cancel: (d) => Rl.forEach((f) => o[f].cancel(d)),
    state: i,
    steps: o,
  };
}
const { schedule: fm, cancel: $j } = vx(queueMicrotask, !1);
function Az(e, t, r, n) {
  const { visualElement: i } = T.useContext(jc),
    o = T.useContext(mx),
    s = T.useContext(Va),
    a = T.useContext(lm).reducedMotion,
    l = T.useRef();
  (n = n || o.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: i,
        props: r,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  T.useInsertionEffect(() => {
    u && u.update(r, s);
  });
  const c = T.useRef(!!(r[gx] && !window.HandoffComplete));
  return (
    cm(() => {
      u &&
        (fm.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    T.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function eo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function zz(e, t, r) {
  return T.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : eo(r) && (r.current = n));
    },
    [t]
  );
}
function ma(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ic(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const hm = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  pm = ["initial", ...hm];
function Lc(e) {
  return Ic(e.animate) || pm.some((t) => ma(e[t]));
}
function yx(e) {
  return !!(Lc(e) || e.variants);
}
function Mz(e, t) {
  if (Lc(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ma(r) ? r : void 0,
      animate: ma(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Fz(e) {
  const { initial: t, animate: r } = Mz(e, T.useContext(jc));
  return T.useMemo(() => ({ initial: t, animate: r }), [$v(t), $v(r)]);
}
function $v(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Rv = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ga = {};
for (const e in Rv) ga[e] = { isEnabled: (t) => Rv[e].some((r) => !!t[r]) };
function Oz(e) {
  for (const t in e) ga[t] = { ...ga[t], ...e[t] };
}
const mm = T.createContext({}),
  bx = T.createContext({}),
  Dz = Symbol.for("motionComponentSymbol");
function jz({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: i,
}) {
  e && Oz(e);
  function o(a, l) {
    let u;
    const c = { ...T.useContext(lm), ...a, layoutId: Iz(a) },
      { isStatic: d } = c,
      f = Fz(a),
      m = n(a, d);
    if (!d && um) {
      f.visualElement = Az(i, m, c, t);
      const b = T.useContext(bx),
        y = T.useContext(mx).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, y, e, b));
    }
    return _.jsxs(jc.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? _.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        r(i, a, zz(m, f.visualElement, l), m, d, f.visualElement),
      ],
    });
  }
  const s = T.forwardRef(o);
  return (s[Dz] = i), s;
}
function Iz({ layoutId: e }) {
  const t = T.useContext(mm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Lz(e) {
  function t(n, i = {}) {
    return jz(e(n, i));
  }
  if (typeof Proxy > "u") return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, i) => (r.has(i) || r.set(i, t(i)), r.get(i)),
  });
}
const Bz = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function gm(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Bz.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const Nu = {};
function Vz(e) {
  Object.assign(Nu, e);
}
const Na = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ai = new Set(Na);
function Sx(e, { layout: t, layoutId: r }) {
  return (
    Ai.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!Nu[e] || e === "opacity"))
  );
}
const Xe = (e) => !!(e && e.getVelocity),
  Nz = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Wz = Na.length;
function Uz(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  i
) {
  let o = "";
  for (let s = 0; s < Wz; s++) {
    const a = Na[s];
    if (e[a] !== void 0) {
      const l = Nz[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, n ? "" : o)) : r && n && (o = "none"),
    o
  );
}
const xx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  wx = xx("--"),
  Hz = xx("var(--"),
  vm = (e) => (Hz(e) ? Kz.test(e.split("/*")[0].trim()) : !1),
  Kz =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Gz = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Fn = (e, t, r) => (r > t ? t : r < e ? e : r),
  Ko = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ls = { ...Ko, transform: (e) => Fn(0, 1, e) },
  Al = { ...Ko, default: 1 },
  Bs = (e) => Math.round(e * 1e5) / 1e5,
  ym = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  Qz =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  qz =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Wa(e) {
  return typeof e == "string";
}
const Ua = (e) => ({
    test: (t) => Wa(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  rn = Ua("deg"),
  kr = Ua("%"),
  N = Ua("px"),
  Yz = Ua("vh"),
  Xz = Ua("vw"),
  Av = {
    ...kr,
    parse: (e) => kr.parse(e) / 100,
    transform: (e) => kr.transform(e * 100),
  },
  zv = { ...Ko, transform: Math.round },
  kx = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    size: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    rotate: rn,
    rotateX: rn,
    rotateY: rn,
    rotateZ: rn,
    scale: Al,
    scaleX: Al,
    scaleY: Al,
    scaleZ: Al,
    skew: rn,
    skewX: rn,
    skewY: rn,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Ls,
    originX: Av,
    originY: Av,
    originZ: N,
    zIndex: zv,
    backgroundPositionX: N,
    backgroundPositionY: N,
    fillOpacity: Ls,
    strokeOpacity: Ls,
    numOctaves: zv,
  };
function bm(e, t, r, n) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (wx(d)) {
      o[d] = f;
      continue;
    }
    const m = kx[d],
      b = Gz(f, m);
    if (Ai.has(d)) {
      if (((l = !0), (s[d] = b), !c)) continue;
      f !== (m.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = b)) : (i[d] = b);
  }
  if (
    (t.transform ||
      (l || n
        ? (i.transform = Uz(e.transform, r, c, n))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: m = 0 } = a;
    i.transformOrigin = `${d} ${f} ${m}`;
  }
}
const Sm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Cx(e, t, r) {
  for (const n in t) !Xe(t[n]) && !Sx(n, r) && (e[n] = t[n]);
}
function Zz({ transformTemplate: e }, t, r) {
  return T.useMemo(() => {
    const n = Sm();
    return (
      bm(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function Jz(e, t, r) {
  const n = e.style || {},
    i = {};
  return Cx(i, n, e), Object.assign(i, Zz(e, t, r)), i;
}
function eM(e, t, r) {
  const n = {},
    i = Jz(e, t, r);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = i),
    n
  );
}
const tM = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Wu(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    tM.has(e)
  );
}
let Tx = (e) => !Wu(e);
function rM(e) {
  e && (Tx = (t) => (t.startsWith("on") ? !Wu(t) : e(t)));
}
try {
  rM(require("@emotion/is-prop-valid").default);
} catch {}
function nM(e, t, r) {
  const n = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Tx(i) ||
        (r === !0 && Wu(i)) ||
        (!t && !Wu(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (n[i] = e[i]));
  return n;
}
function Mv(e, t, r) {
  return typeof e == "string" ? e : N.transform(t + r * e);
}
function iM(e, t, r) {
  const n = Mv(t, e.x, e.width),
    i = Mv(r, e.y, e.height);
  return `${n} ${i}`;
}
const oM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  sM = { offset: "strokeDashoffset", array: "strokeDasharray" };
function aM(e, t, r = 1, n = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? oM : sM;
  e[o.offset] = N.transform(-n);
  const s = N.transform(t),
    a = N.transform(r);
  e[o.array] = `${s} ${a}`;
}
function xm(
  e,
  {
    attrX: t,
    attrY: r,
    attrScale: n,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((bm(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: b, dimensions: y } = e;
  m.transform && (y && (b.transform = m.transform), delete m.transform),
    y &&
      (i !== void 0 || o !== void 0 || b.transform) &&
      (b.transformOrigin = iM(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    r !== void 0 && (m.y = r),
    n !== void 0 && (m.scale = n),
    s !== void 0 && aM(m, s, a, l, !1);
}
const _x = () => ({ ...Sm(), attrs: {} }),
  wm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function lM(e, t, r, n) {
  const i = T.useMemo(() => {
    const o = _x();
    return (
      xm(o, t, { enableHardwareAcceleration: !1 }, wm(n), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Cx(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function uM(e = !1) {
  return (r, n, i, { latestValues: o }, s) => {
    const l = (gm(r) ? lM : eM)(n, o, s, r),
      u = nM(n, typeof r == "string", e),
      c = r !== T.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = n,
      f = T.useMemo(() => (Xe(d) ? d.get() : d), [d]);
    return T.createElement(r, { ...c, children: f });
  };
}
function Px(e, { style: t, vars: r }, n, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(n));
  for (const o in r) e.style.setProperty(o, r[o]);
}
const Ex = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function $x(e, t, r, n) {
  Px(e, t, void 0, n);
  for (const i in t.attrs) e.setAttribute(Ex.has(i) ? i : dm(i), t.attrs[i]);
}
function km(e, t, r) {
  var n;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Xe(i[s]) ||
      (t.style && Xe(t.style[s])) ||
      Sx(s, e) ||
      ((n = r == null ? void 0 : r.getValue(s)) === null || n === void 0
        ? void 0
        : n.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function Rx(e, t, r) {
  const n = km(e, t, r);
  for (const i in e)
    if (Xe(e[i]) || Xe(t[i])) {
      const o =
        Na.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      n[o] = e[i];
    }
  return n;
}
function Cm(e, t, r, n = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, i)),
    t
  );
}
function Ax(e) {
  const t = T.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const gh = (e) => Array.isArray(e),
  cM = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  dM = (e) => (gh(e) ? e[e.length - 1] || 0 : e);
function ou(e) {
  const t = Xe(e) ? e.get() : e;
  return cM(t) ? t.toValue() : t;
}
function fM(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  i,
  o
) {
  const s = { latestValues: hM(n, i, o, e), renderState: t() };
  return r && (s.mount = (a) => r(n, a, s)), s;
}
const zx = (e) => (t, r) => {
  const n = T.useContext(jc),
    i = T.useContext(Va),
    o = () => fM(e, t, n, i);
  return r ? o() : Ax(o);
};
function hM(e, t, r, n) {
  const i = {},
    o = n(e, {});
  for (const f in o) i[f] = ou(o[f]);
  let { initial: s, animate: a } = e;
  const l = Lc(e),
    u = yx(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != "boolean" &&
      !Ic(d) &&
      (Array.isArray(d) ? d : [d]).forEach((m) => {
        const b = Cm(e, m);
        if (!b) return;
        const { transitionEnd: y, transition: k, ...p } = b;
        for (const h in p) {
          let g = p[h];
          if (Array.isArray(g)) {
            const C = c ? g.length - 1 : 0;
            g = g[C];
          }
          g !== null && (i[h] = g);
        }
        for (const h in y) i[h] = y[h];
      }),
    i
  );
}
const Ze = (e) => e,
  {
    schedule: je,
    cancel: On,
    state: Ve,
    steps: qd,
  } = vx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ze, !0),
  pM = {
    useVisualState: zx({
      scrapeMotionValuesFromProps: Rx,
      createRenderState: _x,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        je.read(() => {
          try {
            r.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          je.render(() => {
            xm(
              r,
              n,
              { enableHardwareAcceleration: !1 },
              wm(t.tagName),
              e.transformTemplate
            ),
              $x(t, r);
          });
      },
    }),
  },
  mM = {
    useVisualState: zx({
      scrapeMotionValuesFromProps: km,
      createRenderState: Sm,
    }),
  };
function gM(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(gm(e) ? pM : mM),
    preloadedFeatures: r,
    useRender: uM(t),
    createVisualElement: n,
    Component: e,
  };
}
function jr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Mx = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Bc(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const vM = (e) => (t) => Mx(t) && e(t, Bc(t));
function Br(e, t, r, n) {
  return jr(e, t, vM(r), n);
}
const yM = (e, t) => (r) => t(e(r)),
  Vr = (...e) => e.reduce(yM);
function Fx(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const Fv = Fx("dragHorizontal"),
  Ov = Fx("dragVertical");
function Ox(e) {
  let t = !1;
  if (e === "y") t = Ov();
  else if (e === "x") t = Fv();
  else {
    const r = Fv(),
      n = Ov();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function Dx() {
  const e = Ox(!0);
  return e ? (e(), !1) : !0;
}
class Vn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Dv(e, t) {
  const r = t ? "pointerenter" : "pointerleave",
    n = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Dx()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[n];
      l && l(o, s);
    };
  return Br(e.current, r, i, { passive: !e.getProps()[n] });
}
class bM extends Vn {
  mount() {
    this.unmount = Vr(Dv(this.node, !0), Dv(this.node, !1));
  }
  unmount() {}
}
class SM extends Vn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Vr(
      jr(this.node.current, "focus", () => this.onFocus()),
      jr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const jx = (e, t) => (t ? (e === t ? !0 : jx(e, t.parentElement)) : !1);
function Yd(e, t) {
  if (!t) return;
  const r = new PointerEvent("pointer" + e);
  t(r, Bc(r));
}
class xM extends Vn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ze),
      (this.removeEndListeners = Ze),
      (this.removeAccessibleListeners = Ze),
      (this.startPointerPress = (t, r) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const n = this.node.getProps(),
          o = Br(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              !d && !jx(this.node.current, a.target)
                ? c && c(a, l)
                : u && u(a, l);
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          s = Br(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          });
        (this.removeEndListeners = Vr(o, s)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Yd("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && c(l, u);
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = jr(this.node.current, "keyup", s)),
              Yd("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          r = jr(this.node.current, "keydown", t),
          n = () => {
            this.isPressing && Yd("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = jr(this.node.current, "blur", n);
        this.removeAccessibleListeners = Vr(r, i);
      });
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      n && n(t, r);
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Dx()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && n(t, r);
  }
  mount() {
    const t = this.node.getProps(),
      r = Br(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      n = jr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Vr(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const vh = new WeakMap(),
  Xd = new WeakMap(),
  wM = (e) => {
    const t = vh.get(e.target);
    t && t(e);
  },
  kM = (e) => {
    e.forEach(wM);
  };
function CM({ root: e, ...t }) {
  const r = e || document;
  Xd.has(r) || Xd.set(r, {});
  const n = Xd.get(r),
    i = JSON.stringify(t);
  return n[i] || (n[i] = new IntersectionObserver(kM, { root: e, ...t })), n[i];
}
function TM(e, t, r) {
  const n = CM(t);
  return (
    vh.set(e, r),
    n.observe(e),
    () => {
      vh.delete(e), n.unobserve(e);
    }
  );
}
const _M = { some: 0, all: 1 };
class PM extends Vn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: i = "some", once: o } = t,
      s = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof i == "number" ? i : _M[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return TM(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(EM(t, r)) && this.startObserver();
  }
  unmount() {}
}
function EM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const $M = {
  inView: { Feature: PM },
  tap: { Feature: xM },
  focus: { Feature: SM },
  hover: { Feature: bM },
};
function Ix(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function RM(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function AM(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function Vc(e, t, r) {
  const n = e.getProps();
  return Cm(n, t, r !== void 0 ? r : n.custom, RM(e), AM(e));
}
const Rn = (e) => e * 1e3,
  Nr = (e) => e / 1e3,
  zM = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  MM = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  FM = { type: "keyframes", duration: 0.8 },
  OM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  DM = (e, { keyframes: t }) =>
    t.length > 2
      ? FM
      : Ai.has(e)
      ? e.startsWith("scale")
        ? MM(t[1])
        : zM
      : OM;
function jM({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Tm(e, t) {
  return e[t] || e.default || e;
}
const IM = (e) => e !== null;
function Nc(e, { repeat: t, repeatType: r = "loop" }, n) {
  const i = e.filter(IM),
    o = t && r !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || n === void 0 ? i[o] : n;
}
let su;
function LM() {
  su = void 0;
}
const An = {
    now: () => (
      su === void 0 &&
        An.set(
          Ve.isProcessing || Ez.useManualTiming
            ? Ve.timestamp
            : performance.now()
        ),
      su
    ),
    set: (e) => {
      (su = e), queueMicrotask(LM);
    },
  },
  Lx = (e) => /^0[^.\s]+$/u.test(e);
function BM(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Lx(e)
    : !0;
}
let yh = Ze;
const Bx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  VM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function NM(e) {
  const t = VM.exec(e);
  if (!t) return [,];
  const [, r, n, i] = t;
  return [`--${r ?? n}`, i];
}
function Vx(e, t, r = 1) {
  const [n, i] = NM(e);
  if (!n) return;
  const o = window.getComputedStyle(t).getPropertyValue(n);
  if (o) {
    const s = o.trim();
    return Bx(s) ? parseFloat(s) : s;
  }
  return vm(i) ? Vx(i, t, r + 1) : i;
}
const WM = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  jv = (e) => e === Ko || e === N,
  Iv = (e, t) => parseFloat(e.split(", ")[t]),
  Lv =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === "none" || !n) return 0;
      const i = n.match(/^matrix3d\((.+)\)$/u);
      if (i) return Iv(i[1], t);
      {
        const o = n.match(/^matrix\((.+)\)$/u);
        return o ? Iv(o[1], e) : 0;
      }
    },
  UM = new Set(["x", "y", "z"]),
  HM = Na.filter((e) => !UM.has(e));
function KM(e) {
  const t = [];
  return (
    HM.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Bo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Lv(4, 13),
  y: Lv(5, 14),
};
Bo.translateX = Bo.x;
Bo.translateY = Bo.y;
const Nx = (e) => (t) => t.test(e),
  GM = { test: (e) => e === "auto", parse: (e) => e },
  Wx = [Ko, N, kr, rn, Xz, Yz, GM],
  Bv = (e) => Wx.find(Nx(e)),
  bi = new Set();
let bh = !1,
  Sh = !1;
function Ux() {
  if (Sh) {
    const e = Array.from(bi).filter((n) => n.needsMeasurement),
      t = new Set(e.map((n) => n.element)),
      r = new Map();
    t.forEach((n) => {
      const i = KM(n);
      i.length && (r.set(n, i), n.render());
    }),
      e.forEach((n) => n.measureInitialState()),
      t.forEach((n) => {
        n.render();
        const i = r.get(n);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = n.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((n) => n.measureEndState()),
      e.forEach((n) => {
        n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
      });
  }
  (Sh = !1), (bh = !1), bi.forEach((e) => e.complete()), bi.clear();
}
function Hx() {
  bi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Sh = !0);
  });
}
function QM() {
  Hx(), Ux();
}
class _m {
  constructor(t, r, n, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = r),
      (this.name = n),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (bi.add(this),
          bh || ((bh = !0), je.read(Hx), je.resolveKeyframes(Ux)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: r,
      element: n,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (n && r) {
            const l = n.readValue(r, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      bi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), bi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Pm = (e, t) => (r) =>
    !!(
      (Wa(r) && qz.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Kx = (e, t, r) => (n) => {
    if (!Wa(n)) return n;
    const [i, o, s, a] = n.match(ym);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [r]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  qM = (e) => Fn(0, 255, e),
  Zd = { ...Ko, transform: (e) => Math.round(qM(e)) },
  oi = {
    test: Pm("rgb", "red"),
    parse: Kx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      Zd.transform(e) +
      ", " +
      Zd.transform(t) +
      ", " +
      Zd.transform(r) +
      ", " +
      Bs(Ls.transform(n)) +
      ")",
  };
function YM(e) {
  let t = "",
    r = "",
    n = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const xh = { test: Pm("#"), parse: YM, transform: oi.transform },
  to = {
    test: Pm("hsl", "hue"),
    parse: Kx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      kr.transform(Bs(t)) +
      ", " +
      kr.transform(Bs(r)) +
      ", " +
      Bs(Ls.transform(n)) +
      ")",
  },
  qe = {
    test: (e) => oi.test(e) || xh.test(e) || to.test(e),
    parse: (e) =>
      oi.test(e) ? oi.parse(e) : to.test(e) ? to.parse(e) : xh.parse(e),
    transform: (e) =>
      Wa(e) ? e : e.hasOwnProperty("red") ? oi.transform(e) : to.transform(e),
  };
function XM(e) {
  var t, r;
  return (
    isNaN(e) &&
    Wa(e) &&
    (((t = e.match(ym)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Qz)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const Gx = "number",
  Qx = "color",
  ZM = "var",
  JM = "var(",
  Vv = "${}",
  eF =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Uu(e) {
  const t = e.toString(),
    r = [],
    n = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      eF,
      (l) => (
        qe.test(l)
          ? (n.color.push(o), i.push(Qx), r.push(qe.parse(l)))
          : l.startsWith(JM)
          ? (n.var.push(o), i.push(ZM), r.push(l))
          : (n.number.push(o), i.push(Gx), r.push(parseFloat(l))),
        ++o,
        Vv
      )
    )
    .split(Vv);
  return { values: r, split: a, indexes: n, types: i };
}
function qx(e) {
  return Uu(e).values;
}
function Yx(e) {
  const { split: t, types: r } = Uu(e),
    n = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < n; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = r[s];
        a === Gx
          ? (o += Bs(i[s]))
          : a === Qx
          ? (o += qe.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const tF = (e) => (typeof e == "number" ? 0 : e);
function rF(e) {
  const t = qx(e);
  return Yx(e)(t.map(tF));
}
const Dn = {
    test: XM,
    parse: qx,
    createTransformer: Yx,
    getAnimatableNone: rF,
  },
  nF = new Set(["brightness", "contrast", "saturate", "opacity"]);
function iF(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(ym) || [];
  if (!n) return e;
  const i = r.replace(n, "");
  let o = nF.has(t) ? 1 : 0;
  return n !== r && (o *= 100), t + "(" + o + i + ")";
}
const oF = /\b([a-z-]*)\(.*?\)/gu,
  wh = {
    ...Dn,
    getAnimatableNone: (e) => {
      const t = e.match(oF);
      return t ? t.map(iF).join(" ") : e;
    },
  },
  sF = {
    ...kx,
    color: qe,
    backgroundColor: qe,
    outlineColor: qe,
    fill: qe,
    stroke: qe,
    borderColor: qe,
    borderTopColor: qe,
    borderRightColor: qe,
    borderBottomColor: qe,
    borderLeftColor: qe,
    filter: wh,
    WebkitFilter: wh,
  },
  Em = (e) => sF[e];
function Xx(e, t) {
  let r = Em(e);
  return (
    r !== wh && (r = Dn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
function aF(e, t, r) {
  let n = 0,
    i;
  for (; n < e.length && !i; )
    typeof e[n] == "string" && e[n] !== "none" && e[n] !== "0" && (i = e[n]),
      n++;
  if (i && r) for (const o of t) e[o] = Xx(r, i);
}
class Zx extends _m {
  constructor(t, r, n, i) {
    super(t, r, n, i, i == null ? void 0 : i.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: r, name: n } = this;
    if (!r.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      const u = t[l];
      if (typeof u == "string" && vm(u)) {
        const c = Vx(u, r.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (!WM.has(n) || t.length !== 2) return this.resolveNoneKeyframes();
    const [i, o] = t,
      s = Bv(i),
      a = Bv(o);
    if (s !== a)
      if (jv(s) && jv(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: r } = this,
      n = [];
    for (let i = 0; i < t.length; i++) BM(t[i]) && n.push(i);
    n.length && aF(t, n, r);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: r, name: n } = this;
    if (!t.current) return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Bo[n](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (r[0] = this.measuredOrigin);
    const i = r[r.length - 1];
    i !== void 0 && t.getValue(n, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: r, name: n, unresolvedKeyframes: i } = this;
    if (!r.current) return;
    const o = r.getValue(n);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = Bo[n](r.measureViewportBox(), window.getComputedStyle(r.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          r.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function lF(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Nv = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Dn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function uF(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let r = 0; r < e.length; r++) if (e[r] !== t) return !0;
}
function cF(e, t, r, n) {
  const i = e[0];
  if (i === null) return !1;
  const o = e[e.length - 1],
    s = Nv(i, t),
    a = Nv(o, t);
  return !s || !a ? !1 : uF(e) || (r === "spring" && n);
}
class Jx {
  constructor({
    autoplay: t = !0,
    delay: r = 0,
    type: n = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: r,
        type: n,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && QM(), this._resolved;
  }
  onKeyframesResolved(t, r) {
    this.hasAttemptedResolve = !0;
    const {
      name: n,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !cF(t, n, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Nc(t, this.options, r)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, r);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: r, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, r) {
    return this.currentFinishedPromise.then(t, r);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function ew(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const dF = 5;
function tw(e, t, r) {
  const n = Math.max(t - dF, 0);
  return ew(r - e(n), t - n);
}
const Jd = 0.001,
  fF = 0.01,
  hF = 10,
  pF = 0.05,
  mF = 1;
function gF({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = Fn(pF, mF, s)),
    (e = Fn(fF, hF, Nr(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - r,
            m = kh(u, s),
            b = Math.exp(-d);
          return Jd - (f / m) * b;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * r + r,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            b = Math.exp(-d),
            y = kh(Math.pow(u, 2), s);
          return ((-i(u) + Jd > 0 ? -1 : 1) * ((f - m) * b)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1;
          return -Jd + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = yF(i, o, a);
  if (((e = Rn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * n;
    return { stiffness: u, damping: s * 2 * Math.sqrt(n * u), duration: e };
  }
}
const vF = 12;
function yF(e, t, r) {
  let n = r;
  for (let i = 1; i < vF; i++) n = n - e(n) / t(n);
  return n;
}
function kh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const bF = ["duration", "bounce"],
  SF = ["stiffness", "damping", "mass"];
function Wv(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function xF(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Wv(e, SF) && Wv(e, bF)) {
    const r = gF(e);
    (t = { ...t, ...r, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function rw({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = xF({ ...n, velocity: -Nr(n.velocity || 0) }),
    m = d || 0,
    b = l / (2 * Math.sqrt(a * u)),
    y = o - i,
    k = Nr(Math.sqrt(a / u)),
    p = Math.abs(y) < 5;
  r || (r = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (b < 1) {
    const g = kh(k, b);
    h = (C) => {
      const P = Math.exp(-b * k * C);
      return (
        o - P * (((m + b * k * y) / g) * Math.sin(g * C) + y * Math.cos(g * C))
      );
    };
  } else if (b === 1) h = (g) => o - Math.exp(-k * g) * (y + (m + k * y) * g);
  else {
    const g = k * Math.sqrt(b * b - 1);
    h = (C) => {
      const P = Math.exp(-b * k * C),
        A = Math.min(g * C, 300);
      return (
        o - (P * ((m + b * k * y) * Math.sinh(A) + g * y * Math.cosh(A))) / g
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (g) => {
      const C = h(g);
      if (f) s.done = g >= c;
      else {
        let P = m;
        g !== 0 && (b < 1 ? (P = tw(h, g, C)) : (P = 0));
        const A = Math.abs(P) <= r,
          R = Math.abs(o - C) <= t;
        s.done = A && R;
      }
      return (s.value = s.done ? o : C), s;
    },
  };
}
function Uv({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = ($) => (a !== void 0 && $ < a) || (l !== void 0 && $ > l),
    b = ($) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - $) < Math.abs(l - $)
        ? a
        : l;
  let y = r * t;
  const k = d + y,
    p = s === void 0 ? k : s(k);
  p !== k && (y = p - d);
  const h = ($) => -y * Math.exp(-$ / n),
    g = ($) => p + h($),
    C = ($) => {
      const O = h($),
        j = g($);
      (f.done = Math.abs(O) <= u), (f.value = f.done ? p : j);
    };
  let P, A;
  const R = ($) => {
    m(f.value) &&
      ((P = $),
      (A = rw({
        keyframes: [f.value, b(f.value)],
        velocity: tw(g, $, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let O = !1;
        return (
          !A && P === void 0 && ((O = !0), C($), R($)),
          P !== void 0 && $ >= P ? A.next($ - P) : (!O && C($), f)
        );
      },
    }
  );
}
const nw = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  wF = 1e-7,
  kF = 12;
function CF(e, t, r, n, i) {
  let o,
    s,
    a = 0;
  do (s = t + (r - t) / 2), (o = nw(s, n, i) - e), o > 0 ? (r = s) : (t = s);
  while (Math.abs(o) > wF && ++a < kF);
  return s;
}
function Ha(e, t, r, n) {
  if (e === t && r === n) return Ze;
  const i = (o) => CF(o, 0, 1, e, r);
  return (o) => (o === 0 || o === 1 ? o : nw(i(o), t, n));
}
const TF = Ha(0.42, 0, 1, 1),
  _F = Ha(0, 0, 0.58, 1),
  iw = Ha(0.42, 0, 0.58, 1),
  PF = (e) => Array.isArray(e) && typeof e[0] != "number",
  ow = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  sw = (e) => (t) => 1 - e(1 - t),
  $m = (e) => 1 - Math.sin(Math.acos(e)),
  aw = sw($m),
  EF = ow($m),
  lw = Ha(0.33, 1.53, 0.69, 0.99),
  Rm = sw(lw),
  $F = ow(Rm),
  RF = (e) =>
    (e *= 2) < 1 ? 0.5 * Rm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Hv = {
    linear: Ze,
    easeIn: TF,
    easeInOut: iw,
    easeOut: _F,
    circIn: $m,
    circInOut: EF,
    circOut: aw,
    backIn: Rm,
    backInOut: $F,
    backOut: lw,
    anticipate: RF,
  },
  Kv = (e) => {
    if (Array.isArray(e)) {
      yh(e.length === 4);
      const [t, r, n, i] = e;
      return Ha(t, r, n, i);
    } else if (typeof e == "string") return yh(Hv[e] !== void 0), Hv[e];
    return e;
  },
  va = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  ye = (e, t, r) => e + (t - e) * r;
function ef(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function AF({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = r;
  else {
    const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - a;
    (i = ef(l, a, e + 1 / 3)), (o = ef(l, a, e)), (s = ef(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: n,
  };
}
const tf = (e, t, r) => {
    const n = e * e,
      i = r * (t * t - n) + n;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  zF = [xh, oi, to],
  MF = (e) => zF.find((t) => t.test(e));
function Gv(e) {
  const t = MF(e);
  let r = t.parse(e);
  return t === to && (r = AF(r)), r;
}
const Qv = (e, t) => {
  const r = Gv(e),
    n = Gv(t),
    i = { ...r };
  return (o) => (
    (i.red = tf(r.red, n.red, o)),
    (i.green = tf(r.green, n.green, o)),
    (i.blue = tf(r.blue, n.blue, o)),
    (i.alpha = ye(r.alpha, n.alpha, o)),
    oi.transform(i)
  );
};
function Ch(e, t) {
  return (r) => (r > 0 ? t : e);
}
function FF(e, t) {
  return (r) => ye(e, t, r);
}
function Am(e) {
  return typeof e == "number"
    ? FF
    : typeof e == "string"
    ? vm(e)
      ? Ch
      : qe.test(e)
      ? Qv
      : jF
    : Array.isArray(e)
    ? uw
    : typeof e == "object"
    ? qe.test(e)
      ? Qv
      : OF
    : Ch;
}
function uw(e, t) {
  const r = [...e],
    n = r.length,
    i = e.map((o, s) => Am(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < n; s++) r[s] = i[s](o);
    return r;
  };
}
function OF(e, t) {
  const r = { ...e, ...t },
    n = {};
  for (const i in r)
    e[i] !== void 0 && t[i] !== void 0 && (n[i] = Am(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in n) r[o] = n[o](i);
    return r;
  };
}
function DF(e, t) {
  var r;
  const n = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (r = e.values[a]) !== null && r !== void 0 ? r : 0;
    (n[o] = l), i[s]++;
  }
  return n;
}
const jF = (e, t) => {
  const r = Dn.createTransformer(t),
    n = Uu(e),
    i = Uu(t);
  return n.indexes.var.length === i.indexes.var.length &&
    n.indexes.color.length === i.indexes.color.length &&
    n.indexes.number.length >= i.indexes.number.length
    ? Vr(uw(DF(n, i), i.values), r)
    : Ch(e, t);
};
function cw(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? ye(e, t, r)
    : Am(e)(e, t);
}
function IF(e, t, r) {
  const n = [],
    i = r || cw,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ze : t;
      a = Vr(l, a);
    }
    n.push(a);
  }
  return n;
}
function LF(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const o = e.length;
  if ((yh(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = IF(t, n, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = va(e[c], e[c + 1], u);
      return s[c](d);
    };
  return r ? (u) => l(Fn(e[0], e[o - 1], u)) : l;
}
function BF(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const i = va(0, t, n);
    e.push(ye(r, 1, i));
  }
}
function VF(e) {
  const t = [0];
  return BF(t, e.length - 1), t;
}
function NF(e, t) {
  return e.map((r) => r * t);
}
function WF(e, t) {
  return e.map(() => t || iw).splice(0, e.length - 1);
}
function Hu({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = "easeInOut",
}) {
  const i = PF(n) ? n.map(Kv) : Kv(n),
    o = { done: !1, value: t[0] },
    s = NF(r && r.length === t.length ? r : VF(t), e),
    a = LF(s, t, { ease: Array.isArray(i) ? i : WF(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const qv = 2e4;
function UF(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < qv; ) (t += r), (n = e.next(t));
  return t >= qv ? 1 / 0 : t;
}
const HF = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => je.update(t, !0),
      stop: () => On(t),
      now: () => (Ve.isProcessing ? Ve.timestamp : An.now()),
    };
  },
  KF = { decay: Uv, inertia: Uv, tween: Hu, keyframes: Hu, spring: rw },
  GF = (e) => e / 100;
class zm extends Jx {
  constructor({ KeyframeResolver: t = _m, ...r }) {
    super(r),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: i, keyframes: o } = this.options,
      s = (a, l) => this.onKeyframesResolved(a, l);
    n && i && i.owner
      ? (this.resolver = i.owner.resolveKeyframes(o, s, n, i))
      : (this.resolver = new t(o, s, n, i)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: r = "keyframes",
        repeat: n = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = KF[r] || Hu;
    let l, u;
    a !== Hu &&
      typeof t[0] != "number" &&
      ((l = Vr(GF, cw(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = UF(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      m = f * (n + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, r = !1) {
    const { resolved: n } = this;
    if (!n) {
      const { keyframes: $ } = this.options;
      return { done: !0, value: $[$.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = n;
    if (this.startTime === null) return o.next(0);
    const {
      delay: f,
      repeat: m,
      repeatType: b,
      repeatDelay: y,
      onUpdate: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      r
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      C = o;
    if (m) {
      const $ = Math.min(this.currentTime, c) / d;
      let O = Math.floor($),
        j = $ % 1;
      !j && $ >= 1 && (j = 1),
        j === 1 && O--,
        (O = Math.min(O, m + 1)),
        !!(O % 2) &&
          (b === "reverse"
            ? ((j = 1 - j), y && (j -= y / d))
            : b === "mirror" && (C = s)),
        (g = Fn(0, 1, j) * d);
    }
    const P = h ? { done: !1, value: l[0] } : C.next(g);
    a && (P.value = a(P.value));
    let { done: A } = P;
    !h &&
      u !== null &&
      (A = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const R =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && A));
    return (
      R && i !== void 0 && (P.value = Nc(l, this.options, i)),
      k && k(P.value),
      R && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Nr(t.calculatedDuration) : 0;
  }
  get time() {
    return Nr(this.currentTime);
  }
  set time(t) {
    (t = Rn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const r = this.playbackSpeed !== t;
    (this.playbackSpeed = t), r && (this.time = Nr(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = HF, onPlay: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), r && r();
    const n = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = n - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = n),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const dw = (e) => Array.isArray(e) && typeof e[0] == "number";
function fw(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in Mm) ||
    dw(e) ||
    (Array.isArray(e) && e.every(fw))
  );
}
const ws = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Mm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ws([0, 0.65, 0.55, 1]),
    circOut: ws([0.55, 0, 1, 0.45]),
    backIn: ws([0.31, 0.01, 0.66, -0.59]),
    backOut: ws([0.33, 1.53, 0.69, 0.99]),
  };
function QF(e) {
  return hw(e) || Mm.easeOut;
}
function hw(e) {
  if (e) return dw(e) ? ws(e) : Array.isArray(e) ? e.map(QF) : Mm[e];
}
function qF(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = hw(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: n,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const YF = lF(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  XF = new Set(["opacity", "clipPath", "filter", "transform"]),
  Ku = 10,
  ZF = 2e4;
function JF(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !fw(e.ease);
}
function eO(e, t) {
  const r = new zm({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let n = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !n.done && o < ZF; ) (n = r.sample(o)), i.push(n.value), (o += Ku);
  return { times: void 0, keyframes: i, duration: o - Ku, ease: "linear" };
}
class Yv extends Jx {
  constructor(t) {
    super(t);
    const { name: r, motionValue: n, keyframes: i } = this.options;
    (this.resolver = new Zx(i, (o, s) => this.onKeyframesResolved(o, s), r, n)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, r) {
    var n;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
    } = this.options;
    if (!(!((n = l.owner) === null || n === void 0) && n.current)) return !1;
    if (JF(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: m, ...b } = this.options,
        y = eO(t, b);
      (t = y.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = y.duration),
        (o = y.times),
        (s = y.ease),
        (a = "keyframes");
    }
    const c = qF(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (c.startTime = An.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Nc(t, this.options, r)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: r } = t;
    return Nr(r);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: r } = t;
    return Nr(r.currentTime || 0);
  }
  set time(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: n } = r;
    n.currentTime = Rn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: r } = t;
    return r.playbackRate;
  }
  set speed(t) {
    const { resolved: r } = this;
    if (!r) return;
    const { animation: n } = r;
    n.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: r } = t;
    return r.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: r } = this;
      if (!r) return Ze;
      const { animation: n } = r;
      (n.timeline = t), (n.onfinish = null);
    }
    return Ze;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.playState === "finished" && this.updateFinishedPromise(), r.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: r } = t;
    r.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: r,
      keyframes: n,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (!(r.playState === "idle" || r.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: l,
            onUpdate: u,
            onComplete: c,
            ...d
          } = this.options,
          f = new zm({
            ...d,
            keyframes: n,
            duration: i,
            type: o,
            ease: s,
            times: a,
            isGenerator: !0,
          }),
          m = Rn(this.time);
        l.setWithVelocity(f.sample(m - Ku).value, f.sample(m).value, Ku);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: r,
      name: n,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      YF() &&
      n &&
      XF.has(n) &&
      r &&
      r.owner &&
      r.owner.current instanceof HTMLElement &&
      !r.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const Fm =
  (e, t, r, n = {}, i, o) =>
  (s) => {
    const a = Tm(n, e) || {},
      l = a.delay || n.delay || 0;
    let { elapsed: u = 0 } = n;
    u = u - Rn(l);
    let c = {
      keyframes: Array.isArray(r) ? r : [null, r],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    jM(a) || (c = { ...c, ...DM(e, c) }),
      c.duration && (c.duration = Rn(c.duration)),
      c.repeatDelay && (c.repeatDelay = Rn(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !o && t.get() !== void 0)
    ) {
      const f = Nc(c.keyframes, a);
      if (f !== void 0) {
        je.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return !o && Yv.supports(c) ? new Yv(c) : new zm(c);
  };
function Gu(e) {
  return !!(Xe(e) && e.add);
}
function Om(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Dm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class jm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Om(this.subscriptions, t), () => Dm(this.subscriptions, t);
  }
  notify(t, r, n) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, r, n);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Xv = 30,
  tO = (e) => !isNaN(parseFloat(e));
class rO {
  constructor(t, r = {}) {
    (this.version = "11.1.7"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, i = !0) => {
        const o = An.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(n),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = tO(this.current)),
      (this.owner = r.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = An.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new jm());
    const n = this.events[t].add(r);
    return t === "change"
      ? () => {
          n(),
            je.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - n);
  }
  jump(t, r = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = An.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Xv
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Xv);
    return ew(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ya(e, t) {
  return new rO(e, t);
}
function nO(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ya(r));
}
function iO(e, t) {
  const r = Vc(e, t);
  let { transitionEnd: n = {}, transition: i = {}, ...o } = r || {};
  o = { ...o, ...n };
  for (const s in o) {
    const a = dM(o[s]);
    nO(e, s, a);
  }
}
function oO({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function pw(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const u = e.getValue("willChange");
  n && (s = n);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const m = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      b = l[f];
    if (b === void 0 || (d && oO(d, f))) continue;
    const y = { delay: r, elapsed: 0, ...Tm(s || {}, f) };
    let k = !1;
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[gx];
      if (g) {
        const C = window.HandoffAppearAnimations(g, f);
        C !== null && ((y.elapsed = C), (k = !0));
      }
    }
    m.start(
      Fm(f, m, b, e.shouldReduceMotion && Ai.has(f) ? { type: !1 } : y, e, k)
    );
    const p = m.animation;
    p && (Gu(u) && (u.add(f), p.then(() => u.remove(f))), c.push(p));
  }
  return (
    a &&
      Promise.all(c).then(() => {
        je.update(() => {
          a && iO(e, a);
        });
      }),
    c
  );
}
function Th(e, t, r = {}) {
  var n;
  const i = Vc(
    e,
    t,
    r.type === "exit"
      ? (n = e.presenceContext) === null || n === void 0
        ? void 0
        : n.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  r.transitionOverride && (o = r.transitionOverride);
  const s = i ? () => Promise.all(pw(e, i, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = o;
            return sO(e, t, c + u, d, f, r);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(r.delay)]);
}
function sO(e, t, r = 0, n = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * n,
    l = i === 1 ? (u = 0) => u * n : (u = 0) => a - u * n;
  return (
    Array.from(e.variantChildren)
      .sort(aO)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Th(u, t, { ...o, delay: r + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function aO(e, t) {
  return e.sortNodePosition(t);
}
function lO(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const i = t.map((o) => Th(e, o, r));
    n = Promise.all(i);
  } else if (typeof t == "string") n = Th(e, t, r);
  else {
    const i = typeof t == "function" ? Vc(e, t, r.custom) : t;
    n = Promise.all(pw(e, i, r));
  }
  return n.then(() => {
    je.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const uO = [...hm].reverse(),
  cO = hm.length;
function dO(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => lO(e, r, n)));
}
function fO(e) {
  let t = dO(e);
  const r = pO();
  let n = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = Vc(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: m, transitionEnd: b, ...y } = f;
      u = { ...u, ...y, ...b };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let m = {},
      b = 1 / 0;
    for (let k = 0; k < cO; k++) {
      const p = uO[k],
        h = r[p],
        g = u[p] !== void 0 ? u[p] : c[p],
        C = ma(g),
        P = p === l ? h.isActive : null;
      P === !1 && (b = k);
      let A = g === c[p] && g !== u[p] && C;
      if (
        (A && n && e.manuallyAnimateOnMount && (A = !1),
        (h.protectedKeys = { ...m }),
        (!h.isActive && P === null) ||
          (!g && !h.prevProp) ||
          Ic(g) ||
          typeof g == "boolean")
      )
        continue;
      let $ =
          hO(h.prevProp, g) ||
          (p === l && h.isActive && !A && C) ||
          (k > b && C),
        O = !1;
      const j = Array.isArray(g) ? g : [g];
      let xe = j.reduce(i(p), {});
      P === !1 && (xe = {});
      const { prevResolvedValues: or = {} } = h,
        Cr = { ...or, ...xe },
        Nn = (Re) => {
          ($ = !0),
            f.has(Re) && ((O = !0), f.delete(Re)),
            (h.needsAnimating[Re] = !0);
          const tt = e.getValue(Re);
          tt && (tt.liveStyle = !1);
        };
      for (const Re in Cr) {
        const tt = xe[Re],
          Tr = or[Re];
        if (m.hasOwnProperty(Re)) continue;
        let M = !1;
        gh(tt) && gh(Tr) ? (M = !Ix(tt, Tr)) : (M = tt !== Tr),
          M
            ? tt != null
              ? Nn(Re)
              : f.add(Re)
            : tt !== void 0 && f.has(Re)
            ? Nn(Re)
            : (h.protectedKeys[Re] = !0);
      }
      (h.prevProp = g),
        (h.prevResolvedValues = xe),
        h.isActive && (m = { ...m, ...xe }),
        n && e.blockInitialAnimation && ($ = !1),
        $ &&
          (!A || O) &&
          d.push(...j.map((Re) => ({ animation: Re, options: { type: p } })));
    }
    if (f.size) {
      const k = {};
      f.forEach((p) => {
        const h = e.getBaseTarget(p),
          g = e.getValue(p);
        g && (g.liveStyle = !0), (k[p] = h ?? null);
      }),
        d.push({ animation: k });
    }
    let y = !!d.length;
    return (
      n &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (y = !1),
      (n = !1),
      y ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (r[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var m;
        return (m = f.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (r[l].isActive = u);
    const d = s(l);
    for (const f in r) r[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => r,
  };
}
function hO(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ix(t, e) : !1;
}
function Gn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function pO() {
  return {
    animate: Gn(!0),
    whileInView: Gn(),
    whileHover: Gn(),
    whileTap: Gn(),
    whileDrag: Gn(),
    whileFocus: Gn(),
    exit: Gn(),
  };
}
class mO extends Vn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = fO(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ic(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let gO = 0;
class vO extends Vn {
  constructor() {
    super(...arguments), (this.id = gO++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: r } = this.node.presenceContext,
      { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n) return;
    const i = this.node.animationState.setActive("exit", !t);
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const yO = { animation: { Feature: mO }, exit: { Feature: vO } },
  Zv = (e, t) => Math.abs(e - t);
function bO(e, t) {
  const r = Zv(e.x, t.x),
    n = Zv(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class mw {
  constructor(
    t,
    r,
    { transformPagePoint: n, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = nf(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          m = bO(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !m) return;
        const { point: b } = d,
          { timestamp: y } = Ve;
        this.history.push({ ...b, timestamp: y });
        const { onStart: k, onMove: p } = this.handlers;
        f ||
          (k && k(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = rf(f, this.transformPagePoint)),
          je.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: m, onSessionEnd: b, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = nf(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : rf(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(d, k), b && b(d, k);
      }),
      !Mx(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = r),
      (this.transformPagePoint = n),
      (this.contextWindow = i || window);
    const s = Bc(t),
      a = rf(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Ve;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = r;
    c && c(t, nf(a, this.history)),
      (this.removeListeners = Vr(
        Br(this.contextWindow, "pointermove", this.handlePointerMove),
        Br(this.contextWindow, "pointerup", this.handlePointerUp),
        Br(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), On(this.updatePoint);
  }
}
function rf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Jv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function nf({ point: e }, t) {
  return {
    point: e,
    delta: Jv(e, gw(t)),
    offset: Jv(e, SO(t)),
    velocity: xO(t, 0.1),
  };
}
function SO(e) {
  return e[0];
}
function gw(e) {
  return e[e.length - 1];
}
function xO(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const i = gw(e);
  for (; r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > Rn(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const o = Nr(i.timestamp - n.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function $t(e) {
  return e.max - e.min;
}
function _h(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function ey(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = ye(t.min, t.max, e.origin)),
    (e.scale = $t(r) / $t(t)),
    (_h(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ye(r.min, r.max, e.origin) - e.originPoint),
    (_h(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Vs(e, t, r, n) {
  ey(e.x, t.x, r.x, n ? n.originX : void 0),
    ey(e.y, t.y, r.y, n ? n.originY : void 0);
}
function ty(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + $t(t));
}
function wO(e, t, r) {
  ty(e.x, t.x, r.x), ty(e.y, t.y, r.y);
}
function ry(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + $t(t));
}
function Ns(e, t, r) {
  ry(e.x, t.x, r.x), ry(e.y, t.y, r.y);
}
function kO(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ye(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ye(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function ny(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function CO(e, { top: t, left: r, bottom: n, right: i }) {
  return { x: ny(e.x, r, i), y: ny(e.y, t, n) };
}
function iy(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function TO(e, t) {
  return { x: iy(e.x, t.x), y: iy(e.y, t.y) };
}
function _O(e, t) {
  let r = 0.5;
  const n = $t(e),
    i = $t(t);
  return (
    i > n
      ? (r = va(t.min, t.max - n, e.min))
      : n > i && (r = va(e.min, e.max - i, t.min)),
    Fn(0, 1, r)
  );
}
function PO(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const Ph = 0.35;
function EO(e = Ph) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Ph),
    { x: oy(e, "left", "right"), y: oy(e, "top", "bottom") }
  );
}
function oy(e, t, r) {
  return { min: sy(e, t), max: sy(e, r) };
}
function sy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ay = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ro = () => ({ x: ay(), y: ay() }),
  ly = () => ({ min: 0, max: 0 }),
  Ce = () => ({ x: ly(), y: ly() });
function Dt(e) {
  return [e("x"), e("y")];
}
function vw({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function $O({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function RO(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function of(e) {
  return e === void 0 || e === 1;
}
function Eh({ scale: e, scaleX: t, scaleY: r }) {
  return !of(e) || !of(t) || !of(r);
}
function Yn(e) {
  return (
    Eh(e) ||
    yw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function yw(e) {
  return uy(e.x) || uy(e.y);
}
function uy(e) {
  return e && e !== "0%";
}
function Qu(e, t, r) {
  const n = e - r,
    i = t * n;
  return r + i;
}
function cy(e, t, r, n, i) {
  return i !== void 0 && (e = Qu(e, i, n)), Qu(e, r, n) + t;
}
function $h(e, t = 0, r = 1, n, i) {
  (e.min = cy(e.min, t, r, n, i)), (e.max = cy(e.max, t, r, n, i));
}
function bw(e, { x: t, y: r }) {
  $h(e.x, t.translate, t.scale, t.originPoint),
    $h(e.y, r.translate, r.scale, r.originPoint);
}
function AO(e, t, r, n = !1) {
  const i = r.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = r[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (n &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        no(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), bw(e, s)),
      n && Yn(o.latestValues) && no(e, o.latestValues));
  }
  (t.x = dy(t.x)), (t.y = dy(t.y));
}
function dy(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function an(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function fy(e, t, [r, n, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = ye(e.min, e.max, o);
  $h(e, t[r], t[n], s, t.scale);
}
const zO = ["x", "scaleX", "originX"],
  MO = ["y", "scaleY", "originY"];
function no(e, t) {
  fy(e.x, t, zO), fy(e.y, t, MO);
}
function Sw(e, t) {
  return vw(RO(e.getBoundingClientRect(), t));
}
function FO(e, t, r) {
  const n = Sw(e, r),
    { scroll: i } = t;
  return i && (an(n.x, i.offset.x), an(n.y, i.offset.y)), n;
}
const xw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  OO = new WeakMap();
class DO {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ce()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(Bc(c, "page").point);
      },
      o = (c, d) => {
        const { drag: f, dragPropagation: m, onDragStart: b } = this.getProps();
        if (
          f &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Ox(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Dt((k) => {
            let p = this.getAxisMotionValue(k).get() || 0;
            if (kr.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const g = h.layout.layoutBox[k];
                g && (p = $t(g) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[k] = p;
          }),
          b && b(c, d);
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: m,
          onDirectionLock: b,
          onDrag: y,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: k } = d;
        if (m && this.currentDirection === null) {
          (this.currentDirection = jO(k)),
            this.currentDirection !== null && b && b(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, k),
          this.updateAxis("y", d.point, k),
          this.visualElement.render(),
          y && y(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Dt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new mw(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: xw(this.visualElement),
      }
    );
  }
  stop(t, r) {
    const n = this.isDragging;
    if ((this.cancel(), !n)) return;
    const { velocity: i } = r;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && o(t, r);
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: i } = this.getProps();
    if (!n || !zl(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (s = kO(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    r && eo(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && i
      ? (this.constraints = CO(i.layoutBox, r))
      : (this.constraints = !1),
      (this.elastic = EO(n)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Dt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = PO(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !eo(t)) return !1;
    const n = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = FO(n, i.root, this.visualElement.getTransformPagePoint());
    let s = TO(i.layout.layoutBox, o);
    if (r) {
      const a = r($O(s));
      (this.hasMutatedConstraints = !!a), a && (s = vw(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Dt((c) => {
        if (!zl(c, r, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          b = {
            type: "inertia",
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, b);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Fm(t, n, 0, r, this.visualElement));
  }
  stopAnimation() {
    Dt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Dt((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
      ? void 0
      : r.state;
  }
  getAxisMotionValue(t) {
    const r = `_drag${t.toUpperCase()}`,
      n = this.visualElement.getProps(),
      i = n[r];
    return (
      i ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Dt((r) => {
      const { drag: n } = this.getProps();
      if (!zl(r, n, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(r);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[r];
        o.set(t[r] - ye(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!eo(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Dt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = _O({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      Dt((s) => {
        if (!zl(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(ye(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    OO.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Br(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        eo(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", n);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), n();
    const s = jr(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Dt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), r(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Ph,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function zl(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function jO(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class IO extends Vn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ze),
      (this.removeListeners = Ze),
      (this.controls = new DO(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ze);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const hy = (e) => (t, r) => {
  e && e(t, r);
};
class LO extends Vn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ze);
  }
  onPointerDown(t) {
    this.session = new mw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: xw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: hy(t),
      onStart: hy(r),
      onMove: n,
      onEnd: (o, s) => {
        delete this.session, i && i(o, s);
      },
    };
  }
  mount() {
    this.removePointerDownListener = Br(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function BO() {
  const e = T.useContext(Va);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    i = T.useId();
  return T.useEffect(() => n(i), []), !t && r ? [!1, () => r && r(i)] : [!0];
}
function VO() {
  return NO(T.useContext(Va));
}
function NO(e) {
  return e === null ? !0 : e.isPresent;
}
const au = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function py(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ds = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (N.test(e)) e = parseFloat(e);
        else return e;
      const r = py(e, t.target.x),
        n = py(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  WO = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        i = Dn.parse(e);
      if (i.length > 5) return n;
      const o = Dn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = ye(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class UO extends T.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Vz(HO),
      o &&
        (r.group && r.group.add(o),
        n && n.register && i && n.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (au.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: i,
        isPresent: o,
      } = this.props,
      s = n.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== r || r === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              je.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      fm.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(i),
      n && n.deregister && n.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ww(e) {
  const [t, r] = BO(),
    n = T.useContext(mm);
  return _.jsx(UO, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: T.useContext(bx),
    isPresent: t,
    safeToRemove: r,
  });
}
const HO = {
    borderRadius: {
      ...ds,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ds,
    borderTopRightRadius: ds,
    borderBottomLeftRadius: ds,
    borderBottomRightRadius: ds,
    boxShadow: WO,
  },
  kw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  KO = kw.length,
  my = (e) => (typeof e == "string" ? parseFloat(e) : e),
  gy = (e) => typeof e == "number" || N.test(e);
function GO(e, t, r, n, i, o) {
  i
    ? ((e.opacity = ye(0, r.opacity !== void 0 ? r.opacity : 1, QO(n))),
      (e.opacityExit = ye(t.opacity !== void 0 ? t.opacity : 1, 0, qO(n))))
    : o &&
      (e.opacity = ye(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ));
  for (let s = 0; s < KO; s++) {
    const a = `border${kw[s]}Radius`;
    let l = vy(t, a),
      u = vy(r, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || gy(l) === gy(u)
        ? ((e[a] = Math.max(ye(my(l), my(u), n), 0)),
          (kr.test(u) || kr.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || r.rotate) && (e.rotate = ye(t.rotate || 0, r.rotate || 0, n));
}
function vy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const QO = Cw(0, 0.5, aw),
  qO = Cw(0.5, 0.95, Ze);
function Cw(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(va(e, t, n)));
}
function yy(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ft(e, t) {
  yy(e.x, t.x), yy(e.y, t.y);
}
function by(e, t, r, n, i) {
  return (
    (e -= t), (e = Qu(e, 1 / r, n)), i !== void 0 && (e = Qu(e, 1 / i, n)), e
  );
}
function YO(e, t = 0, r = 1, n = 0.5, i, o = e, s = e) {
  if (
    (kr.test(t) &&
      ((t = parseFloat(t)), (t = ye(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = ye(o.min, o.max, n);
  e === o && (a -= t),
    (e.min = by(e.min, t, r, a, i)),
    (e.max = by(e.max, t, r, a, i));
}
function Sy(e, t, [r, n, i], o, s) {
  YO(e, t[r], t[n], t[i], t.scale, o, s);
}
const XO = ["x", "scaleX", "originX"],
  ZO = ["y", "scaleY", "originY"];
function xy(e, t, r, n) {
  Sy(e.x, t, XO, r ? r.x : void 0, n ? n.x : void 0),
    Sy(e.y, t, ZO, r ? r.y : void 0, n ? n.y : void 0);
}
function wy(e) {
  return e.translate === 0 && e.scale === 1;
}
function Tw(e) {
  return wy(e.x) && wy(e.y);
}
function JO(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function _w(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function ky(e) {
  return $t(e.x) / $t(e.y);
}
class e6 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Om(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Dm(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((i) => t === i);
    if (r === 0) return !1;
    let n;
    for (let i = r; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        n = o;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Cy(e, t, r) {
  let n = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (r == null ? void 0 : r.z) || 0;
  if (
    ((i || o || s) && (n = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: m,
      skewY: b,
    } = r;
    u && (n = `perspective(${u}px) ${n}`),
      c && (n += `rotate(${c}deg) `),
      d && (n += `rotateX(${d}deg) `),
      f && (n += `rotateY(${f}deg) `),
      m && (n += `skewX(${m}deg) `),
      b && (n += `skewY(${b}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (n += `scale(${a}, ${l})`), n || "none";
}
const t6 = (e, t) => e.depth - t.depth;
class r6 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Om(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Dm(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(t6),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function n6(e, t) {
  const r = An.now(),
    n = ({ timestamp: i }) => {
      const o = i - r;
      o >= t && (On(n), e(o - t));
    };
  return je.read(n, !0), () => On(n);
}
function i6(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function o6(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function s6(e, t, r) {
  const n = Xe(e) ? e : ya(e);
  return n.start(Fm("", n, t, r)), n.animation;
}
const sf = ["", "X", "Y", "Z"],
  a6 = { visibility: "hidden" },
  Ty = 1e3;
let l6 = 0;
const Xn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function af(e, t, r, n) {
  const { latestValues: i } = t;
  i[e] && ((r[e] = i[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
}
function Pw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = l6++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Xn.totalNodes =
              Xn.resolvedTargetDeltas =
              Xn.recalculatedProjection =
                0),
            this.nodes.forEach(d6),
            this.nodes.forEach(g6),
            this.nodes.forEach(v6),
            this.nodes.forEach(f6),
            i6(Xn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new r6());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new jm()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = o6(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = n6(f, 250)),
            au.hasAnimatedSinceResize &&
              ((au.hasAnimatedSinceResize = !1), this.nodes.forEach(Py));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: m,
              layout: b,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || w6,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !_w(this.targetLayout, b) || m,
                g = !f && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const C = { ...Tm(y, "layout"), onPlay: k, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                f || Py(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = b;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        On(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(y6),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_y);
        return;
      }
      this.isUpdating || this.nodes.forEach(p6),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(m6),
        this.nodes.forEach(u6),
        this.nodes.forEach(c6),
        this.clearAllSnapshots();
      const a = An.now();
      (Ve.delta = Fn(0, 1e3 / 60, a - Ve.timestamp)),
        (Ve.timestamp = a),
        (Ve.isProcessing = !0),
        qd.update.process(Ve),
        qd.preRender.process(Ve),
        qd.render.process(Ve),
        (Ve.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), fm.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(h6), this.sharedNodes.forEach(b6);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        je.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      je.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ce()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: n(this.instance),
            offset: r(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Tw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Yn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        k6(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return Ce();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (an(a.x, l.offset.x), an(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = Ce();
      Ft(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Ft(a, s);
            const { scroll: f } = this.root;
            f && (an(a.x, -f.offset.x), an(a.y, -f.offset.y));
          }
          an(a.x, c.offset.x), an(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = Ce();
      Ft(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          no(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Yn(c.latestValues) && no(l, c.latestValues);
      }
      return Yn(this.latestValues) && no(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Ce();
      Ft(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Yn(u.latestValues)) continue;
        Eh(u.latestValues) && u.updateSnapshot();
        const c = Ce(),
          d = u.measurePageBox();
        Ft(c, d),
          xy(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Yn(this.latestValues) && xy(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ve.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ve.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ce()),
              (this.relativeTargetOrigin = Ce()),
              Ns(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Ft(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Ce()), (this.targetWithTransforms = Ce())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                wO(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ft(this.target, this.layout.layoutBox),
                bw(this.target, this.targetDelta))
              : Ft(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ce()),
                (this.relativeTargetOrigin = Ce()),
                Ns(this.relativeTargetOrigin, this.target, m.target),
                Ft(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Xn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Eh(this.parent.latestValues) ||
          yw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ve.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Ft(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      AO(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Ce()));
      const { target: b } = a;
      if (!b) {
        this.projectionTransform &&
          ((this.projectionDelta = ro()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ro()),
        (this.projectionDeltaWithTransform = ro()));
      const y = this.projectionTransform;
      Vs(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
        (this.projectionTransform = Cy(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== f ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", b)),
        Xn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ro();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ce(),
        m = l ? l.source : void 0,
        b = this.layout ? this.layout.source : void 0,
        y = m !== b,
        k = this.getStack(),
        p = !k || k.members.length <= 1,
        h = !!(y && !p && this.options.crossfade === !0 && !this.path.some(x6));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (C) => {
        const P = C / 1e3;
        Ey(d.x, s.x, P),
          Ey(d.y, s.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ns(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            S6(this.relativeTarget, this.relativeTargetOrigin, f, P),
            g && JO(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = Ce()),
            Ft(g, this.relativeTarget)),
          y &&
            ((this.animationValues = c), GO(c, u, this.latestValues, P, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (On(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = je.update(() => {
          (au.hasAnimatedSinceResize = !0),
            (this.currentAnimation = s6(0, Ty, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Ty),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Ew(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ce();
          const d = $t(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = $t(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Ft(a, l),
          no(a, c),
          Vs(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new e6()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && af("z", s, u, this.animationValues);
      for (let c = 0; c < sf.length; c++)
        af(`rotate${sf[c]}`, s, u, this.animationValues),
          af(`skew${sf[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return a6;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = ou(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = ou(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Yn(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Cy(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: m, y: b } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${b.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const y in Nu) {
        if (f[y] === void 0) continue;
        const { correct: k, applyTo: p } = Nu[y],
          h = u.transform === "none" ? f[y] : k(f[y], d);
        if (p) {
          const g = p.length;
          for (let C = 0; C < g; C++) u[p[C]] = h;
        } else u[y] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? ou(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(_y),
        this.root.sharedNodes.clear();
    }
  };
}
function u6(e) {
  e.updateLayout();
}
function c6(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = r.source !== e.layout.source;
    o === "size"
      ? Dt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            m = $t(f);
          (f.min = n[d].min), (f.max = f.min + m);
        })
      : Ew(o, r.layoutBox, n) &&
        Dt((d) => {
          const f = s ? r.measuredBox[d] : r.layoutBox[d],
            m = $t(n[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const a = ro();
    Vs(a, n, r.layoutBox);
    const l = ro();
    s ? Vs(l, e.applyTransform(i, !0), r.measuredBox) : Vs(l, n, r.layoutBox);
    const u = !Tw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const b = Ce();
          Ns(b, r.layoutBox, f.layoutBox);
          const y = Ce();
          Ns(y, n, m.layoutBox),
            _w(b, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = b),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function d6(e) {
  Xn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function f6(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function h6(e) {
  e.clearSnapshot();
}
function _y(e) {
  e.clearMeasurements();
}
function p6(e) {
  e.isLayoutDirty = !1;
}
function m6(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Py(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function g6(e) {
  e.resolveTargetDelta();
}
function v6(e) {
  e.calcProjection();
}
function y6(e) {
  e.resetSkewAndRotation();
}
function b6(e) {
  e.removeLeadSnapshot();
}
function Ey(e, t, r) {
  (e.translate = ye(t.translate, 0, r)),
    (e.scale = ye(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function $y(e, t, r, n) {
  (e.min = ye(t.min, r.min, n)), (e.max = ye(t.max, r.max, n));
}
function S6(e, t, r, n) {
  $y(e.x, t.x, r.x, n), $y(e.y, t.y, r.y, n);
}
function x6(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const w6 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ry = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Ay = Ry("applewebkit/") && !Ry("chrome/") ? Math.round : Ze;
function zy(e) {
  (e.min = Ay(e.min)), (e.max = Ay(e.max));
}
function k6(e) {
  zy(e.x), zy(e.y);
}
function Ew(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !_h(ky(t), ky(r), 0.2))
  );
}
const C6 = Pw({
    attachResizeListener: (e, t) => jr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  lf = { current: void 0 },
  $w = Pw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!lf.current) {
        const e = new C6({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (lf.current = e);
      }
      return lf.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  T6 = {
    pan: { Feature: LO },
    drag: { Feature: IO, ProjectionNode: $w, MeasureLayout: ww },
  },
  Rh = { current: null },
  Rw = { current: !1 };
function _6() {
  if (((Rw.current = !0), !!um))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Rh.current = e.matches);
      e.addListener(t), t();
    } else Rh.current = !1;
}
function P6(e, t, r) {
  const { willChange: n } = t;
  for (const i in t) {
    const o = t[i],
      s = r[i];
    if (Xe(o)) e.addValue(i, o), Gu(n) && n.add(i);
    else if (Xe(s)) e.addValue(i, ya(o, { owner: e })), Gu(n) && n.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, ya(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in r) t[i] === void 0 && e.removeValue(i);
  return t;
}
const My = new WeakMap(),
  E6 = [...Wx, qe, Dn],
  $6 = (e) => E6.find(Nx(e)),
  Aw = Object.keys(ga),
  R6 = Aw.length,
  Fy = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  A6 = pm.length;
function zw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : zw(e.parent);
}
class z6 {
  scrapeMotionValuesFromProps(t, r, n) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.resolveKeyframes = (f, m, b, y) =>
      new this.KeyframeResolver(f, m, b, y, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = _m),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => je.render(this.render, !1, !0));
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = r.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Lc(r)),
      (this.isVariantNode = yx(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this
    );
    for (const f in d) {
      const m = d[f];
      l[f] !== void 0 && Xe(m) && (m.set(l[f], !1), Gu(c) && c.add(f));
    }
  }
  mount(t) {
    (this.current = t),
      My.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      Rw.current || _6(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Rh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    My.delete(this.current),
      this.projection && this.projection.unmount(),
      On(this.notifyUpdate),
      On(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features)
      (t = this.features[r]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Ai.has(t),
      i = r.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && je.preRender(this.notifyUpdate),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o(), r.owner && r.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, i, o) {
    let s, a;
    for (let l = 0; l < R6; l++) {
      const u = Aw[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: m,
        } = ga[u];
      f && (s = f),
        c(r) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          m && (a = m));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(this.latestValues, zw(this.parent));
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: m,
      } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && eo(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: m,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < Fy.length; n++) {
      const i = Fy[n];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = P6(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    const r = {};
    for (let n = 0; n < A6; n++) {
      const i = pm[n],
        o = this.props[i];
      (ma(o) || o === !1) && (r[i] = o);
    }
    return r;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    const n = this.values.get(t);
    r !== n &&
      (n && this.removeValue(t),
      this.bindToMotionValue(t, r),
      this.values.set(t, r),
      (this.latestValues[t] = r.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = ya(r === null ? void 0 : r, { owner: this })),
        this.addValue(t, n)),
      n
    );
  }
  readValue(t, r) {
    var n;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Bx(i) || Lx(i))
          ? (i = parseFloat(i))
          : !$6(i) && Dn.test(r) && (i = Xx(t, r)),
        this.setBaseTarget(t, Xe(i) ? i.get() : i)),
      Xe(i) ? i.get() : i
    );
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props;
    let i;
    if (typeof n == "string" || typeof n == "object") {
      const s = Cm(
        this.props,
        n,
        (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom
      );
      s && (i = s[t]);
    }
    if (n && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Xe(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new jm()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Mw extends z6 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Zx);
  }
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
}
function M6(e) {
  return window.getComputedStyle(e);
}
class F6 extends Mw {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, r) {
    if (Ai.has(r)) {
      const n = Em(r);
      return (n && n.default) || 0;
    } else {
      const n = M6(t),
        i = (wx(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Sw(t, r);
  }
  build(t, r, n, i) {
    bm(t, r, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return km(t, r, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Xe(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, i) {
    Px(t, r, n, i);
  }
}
class O6 extends Mw {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Ai.has(r)) {
      const n = Em(r);
      return (n && n.default) || 0;
    }
    return (r = Ex.has(r) ? r : dm(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Ce();
  }
  scrapeMotionValuesFromProps(t, r, n) {
    return Rx(t, r, n);
  }
  build(t, r, n, i) {
    xm(t, r, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, r, n, i) {
    $x(t, r, n, i);
  }
  mount(t) {
    (this.isSVGTag = wm(t.tagName)), super.mount(t);
  }
}
const D6 = (e, t) =>
    gm(e)
      ? new O6(t, { enableHardwareAcceleration: !1 })
      : new F6(t, {
          allowProjection: e !== T.Fragment,
          enableHardwareAcceleration: !0,
        }),
  j6 = { layout: { ProjectionNode: $w, MeasureLayout: ww } },
  I6 = { ...yO, ...$M, ...T6, ...j6 },
  L6 = Lz((e, t) => gM(e, t, I6, D6));
function Fw() {
  const e = T.useRef(!1);
  return (
    cm(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function B6() {
  const e = Fw(),
    [t, r] = T.useState(0),
    n = T.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [T.useCallback(() => je.postRender(n), [n]), t];
}
class V6 extends T.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function N6({ children: e, isPresent: t }) {
  const r = T.useId(),
    n = T.useRef(null),
    i = T.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = T.useContext(lm);
  return (
    T.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = i.current;
      if (t || !n.current || !s || !a) return;
      n.current.dataset.motionPopId = r;
      const c = document.createElement("style");
      return (
        o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    _.jsx(V6, {
      isPresent: t,
      childRef: n,
      sizeRef: i,
      children: T.cloneElement(e, { ref: n }),
    })
  );
}
const uf = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const a = Ax(W6),
    l = T.useId(),
    u = T.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: i,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          n && n();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      o ? [Math.random()] : [r]
    );
  return (
    T.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [r]),
    T.useEffect(() => {
      !r && !a.size && n && n();
    }, [r]),
    s === "popLayout" && (e = _.jsx(N6, { isPresent: r, children: e })),
    _.jsx(Va.Provider, { value: u, children: e })
  );
};
function W6() {
  return new Map();
}
function U6(e) {
  return T.useEffect(() => () => e(), []);
}
const Zn = (e) => e.key || "";
function H6(e, t) {
  e.forEach((r) => {
    const n = Zn(r);
    t.set(n, r);
  });
}
function K6(e) {
  const t = [];
  return (
    T.Children.forEach(e, (r) => {
      T.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const G6 = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  const a = T.useContext(mm).forceRender || B6()[0],
    l = Fw(),
    u = K6(e);
  let c = u;
  const d = T.useRef(new Map()).current,
    f = T.useRef(c),
    m = T.useRef(new Map()).current,
    b = T.useRef(!0);
  if (
    (cm(() => {
      (b.current = !1), H6(u, m), (f.current = c);
    }),
    U6(() => {
      (b.current = !0), m.clear(), d.clear();
    }),
    b.current)
  )
    return _.jsx(_.Fragment, {
      children: c.map((h) =>
        _.jsx(
          uf,
          {
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
            children: h,
          },
          Zn(h)
        )
      ),
    });
  c = [...c];
  const y = f.current.map(Zn),
    k = u.map(Zn),
    p = y.length;
  for (let h = 0; h < p; h++) {
    const g = y[h];
    k.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
  }
  return (
    s === "wait" && d.size && (c = []),
    d.forEach((h, g) => {
      if (k.indexOf(g) !== -1) return;
      const C = m.get(g);
      if (!C) return;
      const P = y.indexOf(g);
      let A = h;
      if (!A) {
        const R = () => {
          d.delete(g);
          const $ = Array.from(m.keys()).filter((O) => !k.includes(O));
          if (
            ($.forEach((O) => m.delete(O)),
            (f.current = u.filter((O) => {
              const j = Zn(O);
              return j === g || $.includes(j);
            })),
            !d.size)
          ) {
            if (l.current === !1) return;
            a(), n && n();
          }
        };
        (A = _.jsx(
          uf,
          {
            isPresent: !1,
            onExitComplete: R,
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: C,
          },
          Zn(C)
        )),
          d.set(g, A);
      }
      c.splice(P, 0, A);
    }),
    (c = c.map((h) => {
      const g = h.key;
      return d.has(g)
        ? h
        : _.jsx(
            uf,
            { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h },
            Zn(h)
          );
    })),
    _.jsx(_.Fragment, {
      children: d.size ? c : c.map((h) => T.cloneElement(h)),
    })
  );
};
var Q6 = {
    initial: (e) => {
      const { position: t } = e,
        r = ["top", "bottom"].includes(t) ? "y" : "x";
      let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (n = 1), { opacity: 0, [r]: n * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  Ow = T.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: i,
        requestClose: o = !1,
        position: s = "bottom",
        duration: a = 5e3,
        containerStyle: l,
        motionVariants: u = Q6,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = T.useState(a),
      m = VO();
    Pv(() => {
      m || n == null || n();
    }, [m]),
      Pv(() => {
        f(a);
      }, [a]);
    const b = () => f(null),
      y = () => f(a),
      k = () => {
        m && i();
      };
    T.useEffect(() => {
      m && o && i();
    }, [m, o, i]),
      _z(k, d);
    const p = T.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      h = T.useMemo(() => kz(s), [s]);
    return _.jsx(L6.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: b,
      onHoverEnd: y,
      custom: { position: s },
      style: h,
      children: _.jsx(fe.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: p,
        children: xn(r, { id: t, onClose: k }),
      }),
    });
  });
Ow.displayName = "ToastComponent";
var Oy = {
    path: _.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        _.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        _.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        _.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Ka = He((e, t) => {
    const {
        as: r,
        viewBox: n,
        color: i = "currentColor",
        focusable: o = !1,
        children: s,
        className: a,
        __css: l,
        ...u
      } = e,
      c = et("chakra-icon", a),
      d = Ri("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: i,
        ...l,
        ...d,
      },
      m = { ref: t, focusable: o, className: c, __css: f },
      b = n ?? Oy.viewBox;
    if (r && typeof r != "string") return _.jsx(fe.svg, { as: r, ...m, ...u });
    const y = s ?? Oy.path;
    return _.jsx(fe.svg, {
      verticalAlign: "middle",
      viewBox: b,
      ...m,
      ...u,
      children: y,
    });
  });
Ka.displayName = "Icon";
function q6(e) {
  return _.jsx(Ka, {
    viewBox: "0 0 24 24",
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function Y6(e) {
  return _.jsx(Ka, {
    viewBox: "0 0 24 24",
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Dy(e) {
  return _.jsx(Ka, {
    viewBox: "0 0 24 24",
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var X6 = B_({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  _i = He((e, t) => {
    const r = Ri("Spinner", e),
      {
        label: n = "Loading...",
        thickness: i = "2px",
        speed: o = "0.45s",
        emptyColor: s = "transparent",
        className: a,
        ...l
      } = Yr(e),
      u = et("chakra-spinner", a),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: i,
        borderBottomColor: s,
        borderLeftColor: s,
        animation: `${X6} ${o} linear infinite`,
        ...r,
      };
    return _.jsx(fe.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && _.jsx(fe.span, { srOnly: !0, children: n }),
    });
  });
_i.displayName = "Spinner";
var [Z6, Im] = Bn({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [J6, Lm] = Bn({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  Dw = {
    info: { icon: Y6, colorScheme: "blue" },
    warning: { icon: Dy, colorScheme: "orange" },
    success: { icon: q6, colorScheme: "green" },
    error: { icon: Dy, colorScheme: "red" },
    loading: { icon: _i, colorScheme: "blue" },
  };
function eD(e) {
  return Dw[e].colorScheme;
}
function tD(e) {
  return Dw[e].icon;
}
var jw = He(function (t, r) {
  const n = Lm(),
    { status: i } = Im(),
    o = { display: "inline", ...n.description };
  return _.jsx(fe.div, {
    ref: r,
    "data-status": i,
    ...t,
    className: et("chakra-alert__desc", t.className),
    __css: o,
  });
});
jw.displayName = "AlertDescription";
function Iw(e) {
  const { status: t } = Im(),
    r = tD(t),
    n = Lm(),
    i = t === "loading" ? n.spinner : n.icon;
  return _.jsx(fe.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: et("chakra-alert__icon", e.className),
    __css: i,
    children: e.children || _.jsx(r, { h: "100%", w: "100%" }),
  });
}
Iw.displayName = "AlertIcon";
var Lw = He(function (t, r) {
  const n = Lm(),
    { status: i } = Im();
  return _.jsx(fe.div, {
    ref: r,
    "data-status": i,
    ...t,
    className: et("chakra-alert__title", t.className),
    __css: n.title,
  });
});
Lw.displayName = "AlertTitle";
var Bw = He(function (t, r) {
  var n;
  const { status: i = "info", addRole: o = !0, ...s } = Yr(t),
    a = (n = t.colorScheme) != null ? n : eD(i),
    l = am("Alert", { ...t, colorScheme: a }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return _.jsx(Z6, {
    value: { status: i },
    children: _.jsx(J6, {
      value: l,
      children: _.jsx(fe.div, {
        "data-status": i,
        role: o ? "alert" : void 0,
        ref: r,
        ...s,
        className: et("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
Bw.displayName = "Alert";
function rD(e) {
  return _.jsx(Ka, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: _.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var Vw = He(function (t, r) {
  const n = Ri("CloseButton", t),
    { children: i, isDisabled: o, __css: s, ...a } = Yr(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return _.jsx(fe.button, {
    type: "button",
    "aria-label": "Close",
    ref: r,
    disabled: o,
    __css: { ...l, ...n, ...s },
    ...a,
    children: i || _.jsx(rD, { width: "1em", height: "1em" }),
  });
});
Vw.displayName = "CloseButton";
var nD = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  Ws = iD(nD);
function iD(e) {
  let t = e;
  const r = new Set(),
    n = (i) => {
      (t = i(t)), r.forEach((o) => o());
    };
  return {
    getState: () => t,
    subscribe: (i) => (
      r.add(i),
      () => {
        n(() => e), r.delete(i);
      }
    ),
    removeToast: (i, o) => {
      n((s) => ({ ...s, [o]: s[o].filter((a) => a.id != i) }));
    },
    notify: (i, o) => {
      const s = oD(i, o),
        { position: a, id: l } = s;
      return (
        n((u) => {
          var c, d;
          const m = a.includes("top")
            ? [s, ...((c = u[a]) != null ? c : [])]
            : [...((d = u[a]) != null ? d : []), s];
          return { ...u, [a]: m };
        }),
        l
      );
    },
    update: (i, o) => {
      i &&
        n((s) => {
          const a = { ...s },
            { position: l, index: u } = _v(a, i);
          return (
            l && u !== -1 && (a[l][u] = { ...a[l][u], ...o, message: aD(o) }), a
          );
        });
    },
    closeAll: ({ positions: i } = {}) => {
      n((o) =>
        (
          i ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = o[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...o }
        )
      );
    },
    close: (i) => {
      n((o) => {
        const s = px(o, i);
        return s
          ? {
              ...o,
              [s]: o[s].map((a) =>
                a.id == i ? { ...a, requestClose: !0 } : a
              ),
            }
          : o;
      });
    },
    isActive: (i) => !!_v(Ws.getState(), i).position,
  };
}
var jy = 0;
function oD(e, t = {}) {
  var r, n;
  jy += 1;
  const i = (r = t.id) != null ? r : jy,
    o = (n = t.position) != null ? n : "bottom";
  return {
    id: i,
    message: e,
    position: o,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ws.removeToast(String(i), o),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var sD = (e) => {
  const {
      status: t,
      variant: r = "solid",
      id: n,
      title: i,
      isClosable: o,
      onClose: s,
      description: a,
      colorScheme: l,
      icon: u,
    } = e,
    c = n
      ? {
          root: `toast-${n}`,
          title: `toast-${n}-title`,
          description: `toast-${n}-description`,
        }
      : void 0;
  return _.jsxs(Bw, {
    addRole: !1,
    status: t,
    variant: r,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      _.jsx(Iw, { children: u }),
      _.jsxs(fe.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          i && _.jsx(Lw, { id: c == null ? void 0 : c.title, children: i }),
          a &&
            _.jsx(jw, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: a,
            }),
        ],
      }),
      o &&
        _.jsx(Vw, {
          size: "sm",
          onClick: s,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function aD(e = {}) {
  const { render: t, toastComponent: r = sD } = e;
  return (i) =>
    typeof t == "function" ? t({ ...i, ...e }) : _.jsx(r, { ...i, ...e });
}
var [lD, Aj] = Bn({ name: "ToastOptionsContext", strict: !1 }),
  uD = (e) => {
    const t = T.useSyncExternalStore(Ws.subscribe, Ws.getState, Ws.getState),
      { motionVariants: r, component: n = Ow, portalProps: i } = e,
      s = Object.keys(t).map((a) => {
        const l = t[a];
        return _.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": `Notifications-${a}`,
            id: `chakra-toast-manager-${a}`,
            style: Cz(a),
            children: _.jsx(G6, {
              initial: !1,
              children: l.map((u) =>
                _.jsx(n, { motionVariants: r, ...u }, u.id)
              ),
            }),
          },
          a
        );
      });
    return _.jsx(zc, { ...i, children: s });
  },
  cD = (e) =>
    function ({ children: r, theme: n = e, toastOptions: i, ...o }) {
      return _.jsxs(xz, {
        theme: n,
        ...o,
        children: [
          _.jsx(lD, {
            value: i == null ? void 0 : i.defaultOptions,
            children: r,
          }),
          _.jsx(uD, { ...i }),
        ],
      });
    },
  dD = cD(ox);
function fD(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Ah(...e) {
  return (t) => {
    e.forEach((r) => {
      fD(r, t);
    });
  };
}
function hD(...e) {
  return T.useMemo(() => Ah(...e), e);
}
function pD(e) {
  return T.Children.toArray(e).filter((t) => T.isValidElement(t));
}
var [zj, mD] = Bn({ strict: !1, name: "ButtonGroupContext" });
function gD(e) {
  const [t, r] = T.useState(!e);
  return {
    ref: T.useCallback((o) => {
      o && r(o.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function zh(e) {
  const { children: t, className: r, ...n } = e,
    i = T.isValidElement(t)
      ? T.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    o = et("chakra-button__icon", r);
  return _.jsx(fe.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: o,
    children: i,
  });
}
zh.displayName = "ButtonIcon";
function Mh(e) {
  const {
      label: t,
      placement: r,
      spacing: n = "0.5rem",
      children: i = _.jsx(_i, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: o,
      __css: s,
      ...a
    } = e,
    l = et("chakra-button__spinner", o),
    u = r === "start" ? "marginEnd" : "marginStart",
    c = T.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? n : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...s,
      }),
      [s, t, u, n]
    );
  return _.jsx(fe.div, { className: l, ...a, __css: c, children: i });
}
Mh.displayName = "ButtonSpinner";
var Bm = He((e, t) => {
  const r = mD(),
    n = Ri("Button", { ...r, ...e }),
    {
      isDisabled: i = r == null ? void 0 : r.isDisabled,
      isLoading: o,
      isActive: s,
      children: a,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: m,
      spinnerPlacement: b = "start",
      className: y,
      as: k,
      ...p
    } = Yr(e),
    h = T.useMemo(() => {
      const A = { ...(n == null ? void 0 : n._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...n,
        ...(!!r && { _focus: A }),
      };
    }, [n, r]),
    { ref: g, type: C } = gD(k),
    P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: a };
  return _.jsxs(fe.button, {
    ref: hD(t, g),
    as: k,
    type: f ?? C,
    "data-active": cr(s),
    "data-loading": cr(o),
    __css: h,
    className: et("chakra-button", y),
    ...p,
    disabled: i || o,
    children: [
      o &&
        b === "start" &&
        _.jsx(Mh, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: m,
        }),
      o
        ? c || _.jsx(fe.span, { opacity: 0, children: _.jsx(Iy, { ...P }) })
        : _.jsx(Iy, { ...P }),
      o &&
        b === "end" &&
        _.jsx(Mh, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: m,
        }),
    ],
  });
});
Bm.displayName = "Button";
function Iy(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: i } = e;
  return _.jsxs(_.Fragment, {
    children: [
      t && _.jsx(zh, { marginEnd: i, children: t }),
      n,
      r && _.jsx(zh, { marginStart: i, children: r }),
    ],
  });
}
var [vD, yD] = Bn({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [bD, Nw] = Bn({ strict: !1, name: "FormControlContext" });
function SD(e) {
  const {
      id: t,
      isRequired: r,
      isInvalid: n,
      isDisabled: i,
      isReadOnly: o,
      ...s
    } = e,
    a = T.useId(),
    l = t || `field-${a}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, m] = T.useState(!1),
    [b, y] = T.useState(!1),
    [k, p] = T.useState(!1),
    h = T.useCallback(
      (R = {}, $ = null) => ({
        id: d,
        ...R,
        ref: Ah($, (O) => {
          O && y(!0);
        }),
      }),
      [d]
    ),
    g = T.useCallback(
      (R = {}, $ = null) => ({
        ...R,
        ref: $,
        "data-focus": cr(k),
        "data-disabled": cr(i),
        "data-invalid": cr(n),
        "data-readonly": cr(o),
        id: R.id !== void 0 ? R.id : u,
        htmlFor: R.htmlFor !== void 0 ? R.htmlFor : l,
      }),
      [l, i, k, n, o, u]
    ),
    C = T.useCallback(
      (R = {}, $ = null) => ({
        id: c,
        ...R,
        ref: Ah($, (O) => {
          O && m(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    P = T.useCallback(
      (R = {}, $ = null) => ({
        ...R,
        ...s,
        ref: $,
        role: "group",
        "data-focus": cr(k),
        "data-disabled": cr(i),
        "data-invalid": cr(n),
        "data-readonly": cr(o),
      }),
      [s, i, k, n, o]
    ),
    A = T.useCallback(
      (R = {}, $ = null) => ({
        ...R,
        ref: $,
        role: "presentation",
        "aria-hidden": !0,
        children: R.children || "*",
      }),
      []
    );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!o,
    isDisabled: !!i,
    isFocused: !!k,
    onFocus: () => p(!0),
    onBlur: () => p(!1),
    hasFeedbackText: f,
    setHasFeedbackText: m,
    hasHelpText: b,
    setHasHelpText: y,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: s,
    getHelpTextProps: h,
    getErrorMessageProps: C,
    getRootProps: P,
    getLabelProps: g,
    getRequiredIndicatorProps: A,
  };
}
var xD = He(function (t, r) {
  const n = am("Form", t),
    i = Yr(t),
    { getRootProps: o, htmlProps: s, ...a } = SD(i),
    l = et("chakra-form-control", t.className);
  return _.jsx(bD, {
    value: a,
    children: _.jsx(vD, {
      value: n,
      children: _.jsx(fe.div, {
        ...o({}, r),
        className: l,
        __css: n.container,
      }),
    }),
  });
});
xD.displayName = "FormControl";
var wD = He(function (t, r) {
  const n = Nw(),
    i = yD(),
    o = et("chakra-form__helper-text", t.className);
  return _.jsx(fe.div, {
    ...(n == null ? void 0 : n.getHelpTextProps(t, r)),
    __css: i.helperText,
    className: o,
  });
});
wD.displayName = "FormHelperText";
function kD(e) {
  const {
    isDisabled: t,
    isInvalid: r,
    isReadOnly: n,
    isRequired: i,
    ...o
  } = CD(e);
  return {
    ...o,
    disabled: t,
    readOnly: n,
    required: i,
    "aria-invalid": Rd(r),
    "aria-required": Rd(i),
    "aria-readonly": Rd(n),
  };
}
function CD(e) {
  var t, r, n;
  const i = Nw(),
    {
      id: o,
      disabled: s,
      readOnly: a,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: m,
      onBlur: b,
      ...y
    } = e,
    k = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    i != null &&
      i.hasFeedbackText &&
      i != null &&
      i.isInvalid &&
      k.push(i.feedbackId),
    i != null && i.hasHelpText && k.push(i.helpTextId),
    {
      ...y,
      "aria-describedby": k.join(" ") || void 0,
      id: o ?? (i == null ? void 0 : i.id),
      isDisabled: (t = s ?? f) != null ? t : i == null ? void 0 : i.isDisabled,
      isReadOnly: (r = a ?? d) != null ? r : i == null ? void 0 : i.isReadOnly,
      isRequired: (n = l ?? u) != null ? n : i == null ? void 0 : i.isRequired,
      isInvalid: c ?? (i == null ? void 0 : i.isInvalid),
      onFocus: F0(i == null ? void 0 : i.onFocus, m),
      onBlur: F0(i == null ? void 0 : i.onBlur, b),
    }
  );
}
var Vm = He(function (t, r) {
  const { htmlSize: n, ...i } = t,
    o = am("Input", i),
    s = Yr(i),
    a = kD(s),
    l = et("chakra-input", t.className);
  return _.jsx(fe.input, {
    size: n,
    ...a,
    __css: o.field,
    ref: r,
    className: l,
  });
});
Vm.displayName = "Input";
Vm.id = "Input";
function TD(e, t) {
  return Array.isArray(e)
    ? e.map((r) => (r === null ? null : t(r)))
    : Ut(e)
    ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
    : e != null
    ? t(e)
    : null;
}
var Si = He(function (t, r) {
  const n = Ri("Text", t),
    { className: i, align: o, decoration: s, casing: a, ...l } = Yr(t),
    u = sz({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return _.jsx(fe.p, {
    ref: r,
    className: et("chakra-text", t.className),
    ...u,
    ...l,
    __css: n,
  });
});
Si.displayName = "Text";
var Ww = (e) =>
  _.jsx(fe.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
Ww.displayName = "StackItem";
function _D(e) {
  const { spacing: t, direction: r } = e,
    n = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": TD(r, (i) => n[i]) };
}
var qu = He((e, t) => {
  const {
      isInline: r,
      direction: n,
      align: i,
      justify: o,
      spacing: s = "0.5rem",
      wrap: a,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    m = r ? "row" : n ?? "column",
    b = T.useMemo(() => _D({ spacing: s, direction: m }), [s, m]),
    y = !!u,
    k = !d && !y,
    p = T.useMemo(() => {
      const g = pD(l);
      return k
        ? g
        : g.map((C, P) => {
            const A = typeof C.key < "u" ? C.key : P,
              R = P + 1 === g.length,
              O = d ? _.jsx(Ww, { children: C }, A) : C;
            if (!y) return O;
            const j = T.cloneElement(u, { __css: b }),
              xe = R ? null : j;
            return _.jsxs(T.Fragment, { children: [O, xe] }, A);
          });
    }, [u, b, y, k, d, l]),
    h = et("chakra-stack", c);
  return _.jsx(fe.div, {
    ref: t,
    display: "flex",
    alignItems: i,
    justifyContent: o,
    flexDirection: m,
    flexWrap: a,
    gap: y ? void 0 : s,
    className: h,
    ...f,
    children: p,
  });
});
qu.displayName = "Stack";
var ba = fe("div");
ba.displayName = "Box";
var Uw = He(function (t, r) {
  const { size: n, centerContent: i = !0, ...o } = t,
    s = i
      ? { display: "flex", alignItems: "center", justifyContent: "center" }
      : {};
  return _.jsx(ba, {
    ref: r,
    boxSize: n,
    __css: { ...s, flexShrink: 0, flexGrow: 0 },
    ...o,
  });
});
Uw.displayName = "Square";
var PD = He(function (t, r) {
  const { size: n, ...i } = t;
  return _.jsx(Uw, { size: n, ref: r, borderRadius: "9999px", ...i });
});
PD.displayName = "Circle";
var Fh = He(function (t, r) {
  const n = Ri("Badge", t),
    { className: i, ...o } = Yr(t);
  return _.jsx(fe.span, {
    ref: r,
    className: et("chakra-badge", t.className),
    ...o,
    __css: {
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      ...n,
    },
  });
});
Fh.displayName = "Badge";
var Nm = He(function (t, r) {
  const { className: n, centerContent: i, ...o } = Yr(t),
    s = Ri("Container", t);
  return _.jsx(fe.div, {
    ref: r,
    className: et("chakra-container", n),
    ...o,
    __css: {
      ...s,
      ...(i && {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
    },
  });
});
Nm.displayName = "Container";
var Wr = He(function (t, r) {
  const {
      direction: n,
      align: i,
      justify: o,
      wrap: s,
      basis: a,
      grow: l,
      shrink: u,
      ...c
    } = t,
    d = {
      display: "flex",
      flexDirection: n,
      alignItems: i,
      justifyContent: o,
      flexWrap: s,
      flexBasis: a,
      flexGrow: l,
      flexShrink: u,
    };
  return _.jsx(fe.div, { ref: r, __css: d, ...c });
});
Wr.displayName = "Flex";
var Hw = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ly = tr.createContext && tr.createContext(Hw),
  ED = ["attr", "size", "title"];
function $D(e, t) {
  if (e == null) return {};
  var r = RD(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (n = o[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function RD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Yu() {
  return (
    (Yu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Yu.apply(this, arguments)
  );
}
function By(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Xu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? By(Object(r), !0).forEach(function (n) {
          AD(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : By(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function AD(e, t, r) {
  return (
    (t = zD(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function zD(e) {
  var t = MD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kw(e) {
  return (
    e &&
    e.map((t, r) =>
      tr.createElement(t.tag, Xu({ key: r }, t.attr), Kw(t.child))
    )
  );
}
function Ga(e) {
  return (t) =>
    tr.createElement(FD, Yu({ attr: Xu({}, e.attr) }, t), Kw(e.child));
}
function FD(e) {
  var t = (r) => {
    var { attr: n, size: i, title: o } = e,
      s = $D(e, ED),
      a = i || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      tr.createElement(
        "svg",
        Yu(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          s,
          {
            className: l,
            style: Xu(Xu({ color: e.color || r.color }, r.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && tr.createElement("title", null, o),
        e.children
      )
    );
  };
  return Ly !== void 0
    ? tr.createElement(Ly.Consumer, null, (r) => t(r))
    : t(Hw);
}
function OD(e) {
  return Ga({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z",
        },
        child: [],
      },
    ],
  })(e);
}
function DD(e) {
  return Ga({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "4" }, child: [] },
      { tag: "path", attr: { d: "M12 2v2" }, child: [] },
      { tag: "path", attr: { d: "M12 20v2" }, child: [] },
      { tag: "path", attr: { d: "m4.93 4.93 1.41 1.41" }, child: [] },
      { tag: "path", attr: { d: "m17.66 17.66 1.41 1.41" }, child: [] },
      { tag: "path", attr: { d: "M2 12h2" }, child: [] },
      { tag: "path", attr: { d: "M20 12h2" }, child: [] },
      { tag: "path", attr: { d: "m6.34 17.66-1.41 1.41" }, child: [] },
      { tag: "path", attr: { d: "m19.07 4.93-1.41 1.41" }, child: [] },
    ],
  })(e);
}
function jD() {
  const { colorMode: e, toggleColorMode: t } = La();
  return _.jsx(Nm, {
    maxW: "900px",
    children: _.jsx(ba, {
      bg: Z_("gray.400", "gray.700"),
      px: 4,
      my: 4,
      borderRadius: "5",
      children: _.jsxs(Wr, {
        h: 16,
        alignItems: "center",
        justifyContent: "space-between",
        children: [
          _.jsxs(Wr, {
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            display: { base: "none", sm: "flex" },
            children: [
              _.jsx("img", {
                src: "/react.png",
                alt: "logo",
                width: 50,
                height: 50,
              }),
              _.jsx(Si, { fontSize: "40", children: "+" }),
              _.jsx("img", {
                src: "/go.png",
                alt: "logo",
                width: 40,
                height: 40,
              }),
              _.jsx(Si, { fontSize: "40", children: "=" }),
              _.jsx("img", {
                src: "/explode.png",
                alt: "logo",
                width: 50,
                height: 50,
              }),
            ],
          }),
          _.jsxs(Wr, {
            alignItems: "center",
            gap: 3,
            children: [
              _.jsx(Si, {
                fontSize: "lg",
                fontWeight: 500,
                children: "Daily Tasks",
              }),
              _.jsx(Bm, {
                onClick: t,
                children:
                  e === "light" ? _.jsx(OD, {}) : _.jsx(DD, { size: 20 }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var Go = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Vo = typeof window > "u" || "Deno" in globalThis;
function It() {}
function ID(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Oh(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Gw(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Vy(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: o,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (n) {
      if (t.queryHash !== Wm(s, t.options)) return !1;
    } else if (!Sa(t.queryKey, s)) return !1;
  }
  if (r !== "all") {
    const l = t.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Ny(e, t) {
  const { exact: r, status: n, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (Pi(t.options.mutationKey) !== Pi(o)) return !1;
    } else if (!Sa(t.options.mutationKey, o)) return !1;
  }
  return !((n && t.state.status !== n) || (i && !i(t)));
}
function Wm(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Pi)(e);
}
function Pi(e) {
  return JSON.stringify(e, (t, r) =>
    Dh(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, i) => ((n[i] = r[i]), n), {})
      : r
  );
}
function Sa(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((r) => !Sa(e[r], t[r]))
    : !1;
}
function Qw(e, t) {
  if (e === t) return e;
  const r = Wy(e) && Wy(t);
  if (r || (Dh(e) && Dh(t))) {
    const n = r ? e : Object.keys(e),
      i = n.length,
      o = r ? t : Object.keys(t),
      s = o.length,
      a = r ? [] : {};
    let l = 0;
    for (let u = 0; u < s; u++) {
      const c = r ? u : o[u];
      !r && e[c] === void 0 && t[c] === void 0 && n.includes(c)
        ? ((a[c] = void 0), l++)
        : ((a[c] = Qw(e[c], t[c])), a[c] === e[c] && e[c] !== void 0 && l++);
    }
    return i === s && l === i ? e : a;
  }
  return t;
}
function Zu(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (e[r] !== t[r]) return !1;
  return !0;
}
function Wy(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Dh(e) {
  if (!Uy(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(!Uy(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Uy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function LD(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function jh(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? Qw(e, t)
    : t;
}
function BD(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function VD(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Um = Symbol(),
  si,
  dn,
  go,
  Qy,
  ND =
    ((Qy = class extends Go {
      constructor() {
        super();
        L(this, si, void 0);
        L(this, dn, void 0);
        L(this, go, void 0);
        F(this, go, (t) => {
          if (!Vo && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        S(this, dn) || this.setEventListener(S(this, go));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = S(this, dn)) == null || t.call(this), F(this, dn, void 0));
      }
      setEventListener(t) {
        var r;
        F(this, go, t),
          (r = S(this, dn)) == null || r.call(this),
          F(
            this,
            dn,
            t((n) => {
              typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        S(this, si) !== t && (F(this, si, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof S(this, si) == "boolean"
          ? S(this, si)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (si = new WeakMap()),
    (dn = new WeakMap()),
    (go = new WeakMap()),
    Qy),
  Hm = new ND(),
  vo,
  fn,
  yo,
  qy,
  WD =
    ((qy = class extends Go {
      constructor() {
        super();
        L(this, vo, !0);
        L(this, fn, void 0);
        L(this, yo, void 0);
        F(this, yo, (t) => {
          if (!Vo && window.addEventListener) {
            const r = () => t(!0),
              n = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", n, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        S(this, fn) || this.setEventListener(S(this, yo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = S(this, fn)) == null || t.call(this), F(this, fn, void 0));
      }
      setEventListener(t) {
        var r;
        F(this, yo, t),
          (r = S(this, fn)) == null || r.call(this),
          F(this, fn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        S(this, vo) !== t &&
          (F(this, vo, t),
          this.listeners.forEach((n) => {
            n(t);
          }));
      }
      isOnline() {
        return S(this, vo);
      }
    }),
    (vo = new WeakMap()),
    (fn = new WeakMap()),
    (yo = new WeakMap()),
    qy),
  Ju = new WD();
function UD(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function qw(e) {
  return (e ?? "online") === "online" ? Ju.isOnline() : !0;
}
var Yw = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function cf(e) {
  return e instanceof Yw;
}
function Xw(e) {
  let t = !1,
    r = 0,
    n = !1,
    i,
    o,
    s;
  const a = new Promise((p, h) => {
      (o = p), (s = h);
    }),
    l = (p) => {
      var h;
      n || (b(new Yw(p)), (h = e.abort) == null || h.call(e));
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () =>
      Hm.isFocused() &&
      (e.networkMode === "always" || Ju.isOnline()) &&
      e.canRun(),
    f = () => qw(e.networkMode) && e.canRun(),
    m = (p) => {
      var h;
      n ||
        ((n = !0),
        (h = e.onSuccess) == null || h.call(e, p),
        i == null || i(),
        o(p));
    },
    b = (p) => {
      var h;
      n ||
        ((n = !0),
        (h = e.onError) == null || h.call(e, p),
        i == null || i(),
        s(p));
    },
    y = () =>
      new Promise((p) => {
        var h;
        (i = (g) => {
          (n || d()) && p(g);
        }),
          (h = e.onPause) == null || h.call(e);
      }).then(() => {
        var p;
        (i = void 0), n || (p = e.onContinue) == null || p.call(e);
      }),
    k = () => {
      if (n) return;
      let p;
      try {
        p = e.fn();
      } catch (h) {
        p = Promise.reject(h);
      }
      Promise.resolve(p)
        .then(m)
        .catch((h) => {
          var R;
          if (n) return;
          const g = e.retry ?? (Vo ? 0 : 3),
            C = e.retryDelay ?? UD,
            P = typeof C == "function" ? C(r, h) : C,
            A =
              g === !0 ||
              (typeof g == "number" && r < g) ||
              (typeof g == "function" && g(r, h));
          if (t || !A) {
            b(h);
            return;
          }
          r++,
            (R = e.onFail) == null || R.call(e, r, h),
            LD(P)
              .then(() => (d() ? void 0 : y()))
              .then(() => {
                t ? b(h) : k();
              });
        });
    };
  return {
    promise: a,
    cancel: l,
    continue: () => (i == null || i(), a),
    cancelRetry: u,
    continueRetry: c,
    canStart: f,
    start: () => (f() ? k() : y().then(k), a),
  };
}
function HD() {
  let e = [],
    t = 0,
    r = (f) => {
      f();
    },
    n = (f) => {
      f();
    },
    i = (f) => setTimeout(f, 0);
  const o = (f) => {
      i = f;
    },
    s = (f) => {
      let m;
      t++;
      try {
        m = f();
      } finally {
        t--, t || u();
      }
      return m;
    },
    a = (f) => {
      t
        ? e.push(f)
        : i(() => {
            r(f);
          });
    },
    l =
      (f) =>
      (...m) => {
        a(() => {
          f(...m);
        });
      },
    u = () => {
      const f = e;
      (e = []),
        f.length &&
          i(() => {
            n(() => {
              f.forEach((m) => {
                r(m);
              });
            });
          });
    };
  return {
    batch: s,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      n = f;
    },
    setScheduler: o,
  };
}
var ze = HD(),
  ai,
  Yy,
  Zw =
    ((Yy = class {
      constructor() {
        L(this, ai, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Oh(this.gcTime) &&
            F(
              this,
              ai,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Vo ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        S(this, ai) && (clearTimeout(S(this, ai)), F(this, ai, void 0));
      }
    }),
    (ai = new WeakMap()),
    Yy),
  bo,
  So,
  jt,
  rt,
  xa,
  li,
  Xt,
  Er,
  Xy,
  KD =
    ((Xy = class extends Zw {
      constructor(t) {
        super();
        L(this, Xt);
        L(this, bo, void 0);
        L(this, So, void 0);
        L(this, jt, void 0);
        L(this, rt, void 0);
        L(this, xa, void 0);
        L(this, li, void 0);
        F(this, li, !1),
          F(this, xa, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          F(this, jt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          F(this, bo, t.state || GD(this.options)),
          (this.state = S(this, bo)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      setOptions(t) {
        (this.options = { ...S(this, xa), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          S(this, jt).remove(this);
      }
      setData(t, r) {
        const n = jh(this.state.data, t, this.options);
        return (
          H(this, Xt, Er).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          n
        );
      }
      setState(t, r) {
        H(this, Xt, Er).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var n, i;
        const r = (n = S(this, rt)) == null ? void 0 : n.promise;
        return (
          (i = S(this, rt)) == null || i.cancel(t),
          r ? r.then(It).catch(It) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(S(this, bo));
      }
      isActive() {
        return this.observers.some((t) => t.options.enabled !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Gw(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = S(this, rt)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((n) => n.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = S(this, rt)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          S(this, jt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (S(this, rt) &&
              (S(this, li)
                ? S(this, rt).cancel({ revert: !0 })
                : S(this, rt).cancelRetry()),
            this.scheduleGc()),
          S(this, jt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          H(this, Xt, Er).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (S(this, rt))
            return S(this, rt).continueRetry(), S(this, rt).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((m) => m.options.queryFn);
          f && this.setOptions(f.options);
        }
        const n = new AbortController(),
          i = { queryKey: this.queryKey, meta: this.meta },
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (F(this, li, !0), n.signal),
            });
          };
        o(i);
        const s = () =>
            !this.options.queryFn || this.options.queryFn === Um
              ? Promise.reject(
                  new Error(`Missing queryFn: '${this.options.queryHash}'`)
                )
              : (F(this, li, !1),
                this.options.persister
                  ? this.options.persister(this.options.queryFn, i, this)
                  : this.options.queryFn(i)),
          a = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s,
          };
        o(a),
          (u = this.options.behavior) == null || u.onFetch(a, this),
          F(this, So, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            H(this, Xt, Er).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var m, b, y, k;
          (cf(f) && f.silent) ||
            H(this, Xt, Er).call(this, { type: "error", error: f }),
            cf(f) ||
              ((b = (m = S(this, jt).config).onError) == null ||
                b.call(m, f, this),
              (k = (y = S(this, jt).config).onSettled) == null ||
                k.call(y, this.state.data, f, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          F(
            this,
            rt,
            Xw({
              fn: a.fetchFn,
              abort: n.abort.bind(n),
              onSuccess: (f) => {
                var m, b, y, k;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(f),
                  (b = (m = S(this, jt).config).onSuccess) == null ||
                    b.call(m, f, this),
                  (k = (y = S(this, jt).config).onSettled) == null ||
                    k.call(y, f, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: l,
              onFail: (f, m) => {
                H(this, Xt, Er).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: m,
                });
              },
              onPause: () => {
                H(this, Xt, Er).call(this, { type: "pause" });
              },
              onContinue: () => {
                H(this, Xt, Er).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          S(this, rt).start()
        );
      }
    }),
    (bo = new WeakMap()),
    (So = new WeakMap()),
    (jt = new WeakMap()),
    (rt = new WeakMap()),
    (xa = new WeakMap()),
    (li = new WeakMap()),
    (Xt = new WeakSet()),
    (Er = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...n, fetchStatus: "paused" };
          case "continue":
            return { ...n, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...n,
              ...Jw(n.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...n,
              data: t.data,
              dataUpdateCount: n.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const i = t.error;
            return cf(i) && i.revert && S(this, So)
              ? { ...S(this, So), fetchStatus: "idle" }
              : {
                  ...n,
                  error: i,
                  errorUpdateCount: n.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: n.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...n, isInvalidated: !0 };
          case "setState":
            return { ...n, ...t.state };
        }
      };
      (this.state = r(this.state)),
        ze.batch(() => {
          this.observers.forEach((n) => {
            n.onQueryUpdate();
          }),
            S(this, jt).notify({ query: this, type: "updated", action: t });
        });
    }),
    Xy);
function Jw(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: qw(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function GD(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    n = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var fr,
  Zy,
  QD =
    ((Zy = class extends Go {
      constructor(t = {}) {
        super();
        L(this, fr, void 0);
        (this.config = t), F(this, fr, new Map());
      }
      build(t, r, n) {
        const i = r.queryKey,
          o = r.queryHash ?? Wm(i, r);
        let s = this.get(o);
        return (
          s ||
            ((s = new KD({
              cache: this,
              queryKey: i,
              queryHash: o,
              options: t.defaultQueryOptions(r),
              state: n,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        S(this, fr).has(t.queryHash) ||
          (S(this, fr).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = S(this, fr).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && S(this, fr).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        ze.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return S(this, fr).get(t);
      }
      getAll() {
        return [...S(this, fr).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Vy(r, n));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((n) => Vy(t, n)) : r;
      }
      notify(t) {
        ze.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (fr = new WeakMap()),
    Zy),
  hr,
  nt,
  ui,
  pr,
  nn,
  Jy,
  qD =
    ((Jy = class extends Zw {
      constructor(t) {
        super();
        L(this, pr);
        L(this, hr, void 0);
        L(this, nt, void 0);
        L(this, ui, void 0);
        (this.mutationId = t.mutationId),
          F(this, nt, t.mutationCache),
          F(this, hr, []),
          (this.state = t.state || ek()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        S(this, hr).includes(t) ||
          (S(this, hr).push(t),
          this.clearGcTimeout(),
          S(this, nt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        F(
          this,
          hr,
          S(this, hr).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          S(this, nt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        S(this, hr).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : S(this, nt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = S(this, ui)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, o, s, a, l, u, c, d, f, m, b, y, k, p, h, g, C, P, A, R;
        F(
          this,
          ui,
          Xw({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: ($, O) => {
              H(this, pr, nn).call(this, {
                type: "failed",
                failureCount: $,
                error: O,
              });
            },
            onPause: () => {
              H(this, pr, nn).call(this, { type: "pause" });
            },
            onContinue: () => {
              H(this, pr, nn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => S(this, nt).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          n = !S(this, ui).canStart();
        try {
          if (!r) {
            H(this, pr, nn).call(this, {
              type: "pending",
              variables: t,
              isPaused: n,
            }),
              await ((o = (i = S(this, nt).config).onMutate) == null
                ? void 0
                : o.call(i, t, this));
            const O = await ((a = (s = this.options).onMutate) == null
              ? void 0
              : a.call(s, t));
            O !== this.state.context &&
              H(this, pr, nn).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: n,
              });
          }
          const $ = await S(this, ui).start();
          return (
            await ((u = (l = S(this, nt).config).onSuccess) == null
              ? void 0
              : u.call(l, $, t, this.state.context, this)),
            await ((d = (c = this.options).onSuccess) == null
              ? void 0
              : d.call(c, $, t, this.state.context)),
            await ((m = (f = S(this, nt).config).onSettled) == null
              ? void 0
              : m.call(
                  f,
                  $,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((y = (b = this.options).onSettled) == null
              ? void 0
              : y.call(b, $, null, t, this.state.context)),
            H(this, pr, nn).call(this, { type: "success", data: $ }),
            $
          );
        } catch ($) {
          try {
            throw (
              (await ((p = (k = S(this, nt).config).onError) == null
                ? void 0
                : p.call(k, $, t, this.state.context, this)),
              await ((g = (h = this.options).onError) == null
                ? void 0
                : g.call(h, $, t, this.state.context)),
              await ((P = (C = S(this, nt).config).onSettled) == null
                ? void 0
                : P.call(
                    C,
                    void 0,
                    $,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (A = this.options).onSettled) == null
                ? void 0
                : R.call(A, void 0, $, t, this.state.context)),
              $)
            );
          } finally {
            H(this, pr, nn).call(this, { type: "error", error: $ });
          }
        } finally {
          S(this, nt).runNext(this);
        }
      }
    }),
    (hr = new WeakMap()),
    (nt = new WeakMap()),
    (ui = new WeakMap()),
    (pr = new WeakSet()),
    (nn = function (t) {
      const r = (n) => {
        switch (t.type) {
          case "failed":
            return {
              ...n,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...n, isPaused: !0 };
          case "continue":
            return { ...n, isPaused: !1 };
          case "pending":
            return {
              ...n,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...n,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...n,
              data: void 0,
              error: t.error,
              failureCount: n.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        ze.batch(() => {
          S(this, hr).forEach((n) => {
            n.onMutationUpdate(t);
          }),
            S(this, nt).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Jy);
function ek() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var wt,
  wa,
  e1,
  YD =
    ((e1 = class extends Go {
      constructor(t = {}) {
        super();
        L(this, wt, void 0);
        L(this, wa, void 0);
        (this.config = t), F(this, wt, new Map()), F(this, wa, Date.now());
      }
      build(t, r, n) {
        const i = new qD({
          mutationCache: this,
          mutationId: ++rl(this, wa)._,
          options: t.defaultMutationOptions(r),
          state: n,
        });
        return this.add(i), i;
      }
      add(t) {
        const r = Ml(t),
          n = S(this, wt).get(r) ?? [];
        n.push(t),
          S(this, wt).set(r, n),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var n;
        const r = Ml(t);
        if (S(this, wt).has(r)) {
          const i =
            (n = S(this, wt).get(r)) == null
              ? void 0
              : n.filter((o) => o !== t);
          i && (i.length === 0 ? S(this, wt).delete(r) : S(this, wt).set(r, i));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var n;
        const r =
          (n = S(this, wt).get(Ml(t))) == null
            ? void 0
            : n.find((i) => i.state.status === "pending");
        return !r || r === t;
      }
      runNext(t) {
        var n;
        const r =
          (n = S(this, wt).get(Ml(t))) == null
            ? void 0
            : n.find((i) => i !== t && i.state.isPaused);
        return (r == null ? void 0 : r.continue()) ?? Promise.resolve();
      }
      clear() {
        ze.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...S(this, wt).values()].flat();
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((n) => Ny(r, n));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Ny(t, r));
      }
      notify(t) {
        ze.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return ze.batch(() =>
          Promise.all(t.map((r) => r.continue().catch(It)))
        );
      }
    }),
    (wt = new WeakMap()),
    (wa = new WeakMap()),
    e1);
function Ml(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function XD(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var b, y, k, p, h;
        const i = t.options,
          o =
            (k =
              (y = (b = t.fetchOptions) == null ? void 0 : b.meta) == null
                ? void 0
                : y.fetchMore) == null
              ? void 0
              : k.direction,
          s = ((p = t.state.data) == null ? void 0 : p.pages) || [],
          a = ((h = t.state.data) == null ? void 0 : h.pageParams) || [],
          l = { pages: [], pageParams: [] };
        let u = !1;
        const c = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener("abort", () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          d =
            t.options.queryFn && t.options.queryFn !== Um
              ? t.options.queryFn
              : () =>
                  Promise.reject(
                    new Error(`Missing queryFn: '${t.options.queryHash}'`)
                  ),
          f = async (g, C, P) => {
            if (u) return Promise.reject();
            if (C == null && g.pages.length) return Promise.resolve(g);
            const A = {
              queryKey: t.queryKey,
              pageParam: C,
              direction: P ? "backward" : "forward",
              meta: t.options.meta,
            };
            c(A);
            const R = await d(A),
              { maxPages: $ } = t.options,
              O = P ? VD : BD;
            return {
              pages: O(g.pages, R, $),
              pageParams: O(g.pageParams, C, $),
            };
          };
        let m;
        if (o && s.length) {
          const g = o === "backward",
            C = g ? ZD : Hy,
            P = { pages: s, pageParams: a },
            A = C(i, P);
          m = await f(P, A, g);
        } else {
          m = await f(l, a[0] ?? i.initialPageParam);
          const g = e ?? s.length;
          for (let C = 1; C < g; C++) {
            const P = Hy(i, m);
            m = await f(m, P);
          }
        }
        return m;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var i, o;
            return (o = (i = t.options).persister) == null
              ? void 0
              : o.call(
                  i,
                  n,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r
                );
          })
        : (t.fetchFn = n);
    },
  };
}
function Hy(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(t[n], t, r[n], r);
}
function ZD(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null
    ? void 0
    : n.call(e, t[0], t, r[0], r);
}
var we,
  hn,
  pn,
  xo,
  wo,
  mn,
  ko,
  Co,
  t1,
  JD =
    ((t1 = class {
      constructor(e = {}) {
        L(this, we, void 0);
        L(this, hn, void 0);
        L(this, pn, void 0);
        L(this, xo, void 0);
        L(this, wo, void 0);
        L(this, mn, void 0);
        L(this, ko, void 0);
        L(this, Co, void 0);
        F(this, we, e.queryCache || new QD()),
          F(this, hn, e.mutationCache || new YD()),
          F(this, pn, e.defaultOptions || {}),
          F(this, xo, new Map()),
          F(this, wo, new Map()),
          F(this, mn, 0);
      }
      mount() {
        rl(this, mn)._++,
          S(this, mn) === 1 &&
            (F(
              this,
              ko,
              Hm.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), S(this, we).onFocus());
              })
            ),
            F(
              this,
              Co,
              Ju.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), S(this, we).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        rl(this, mn)._--,
          S(this, mn) === 0 &&
            ((e = S(this, ko)) == null || e.call(this),
            F(this, ko, void 0),
            (t = S(this, Co)) == null || t.call(this),
            F(this, Co, void 0));
      }
      isFetching(e) {
        return S(this, we).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return S(this, hn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = S(this, we).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const r = this.defaultQueryOptions(e),
            n = S(this, we).build(this, r);
          return (
            e.revalidateIfStale &&
              n.isStaleByTime(r.staleTime) &&
              this.prefetchQuery(r),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return S(this, we)
          .findAll(e)
          .map(({ queryKey: t, state: r }) => {
            const n = r.data;
            return [t, n];
          });
      }
      setQueryData(e, t, r) {
        const n = this.defaultQueryOptions({ queryKey: e }),
          i = S(this, we).get(n.queryHash),
          o = i == null ? void 0 : i.state.data,
          s = ID(t, o);
        if (s !== void 0)
          return S(this, we)
            .build(this, n)
            .setData(s, { ...r, manual: !0 });
      }
      setQueriesData(e, t, r) {
        return ze.batch(() =>
          S(this, we)
            .findAll(e)
            .map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)])
        );
      }
      getQueryState(e) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (r = S(this, we).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(e) {
        const t = S(this, we);
        ze.batch(() => {
          t.findAll(e).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(e, t) {
        const r = S(this, we),
          n = { type: "active", ...e };
        return ze.batch(
          () => (
            r.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries(n, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const r = { revert: !0, ...t },
          n = ze.batch(() =>
            S(this, we)
              .findAll(e)
              .map((i) => i.cancel(r))
          );
        return Promise.all(n).then(It).catch(It);
      }
      invalidateQueries(e = {}, t = {}) {
        return ze.batch(() => {
          if (
            (S(this, we)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const r = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(r, t);
        });
      }
      refetchQueries(e = {}, t) {
        const r = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          n = ze.batch(() =>
            S(this, we)
              .findAll(e)
              .filter((i) => !i.isDisabled())
              .map((i) => {
                let o = i.fetch(void 0, r);
                return (
                  r.throwOnError || (o = o.catch(It)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(n).then(It);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const r = S(this, we).build(this, t);
        return r.isStaleByTime(t.staleTime)
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(It).catch(It);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = XD(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(It).catch(It);
      }
      resumePausedMutations() {
        return Ju.isOnline()
          ? S(this, hn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return S(this, we);
      }
      getMutationCache() {
        return S(this, hn);
      }
      getDefaultOptions() {
        return S(this, pn);
      }
      setDefaultOptions(e) {
        F(this, pn, e);
      }
      setQueryDefaults(e, t) {
        S(this, xo).set(Pi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...S(this, xo).values()];
        let r = {};
        return (
          t.forEach((n) => {
            Sa(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
          }),
          r
        );
      }
      setMutationDefaults(e, t) {
        S(this, wo).set(Pi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...S(this, wo).values()];
        let r = {};
        return (
          t.forEach((n) => {
            Sa(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...S(this, pn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Wm(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === Um && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...S(this, pn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        S(this, we).clear(), S(this, hn).clear();
      }
    }),
    (we = new WeakMap()),
    (hn = new WeakMap()),
    (pn = new WeakMap()),
    (xo = new WeakMap()),
    (wo = new WeakMap()),
    (mn = new WeakMap()),
    (ko = new WeakMap()),
    (Co = new WeakMap()),
    t1),
  dt,
  se,
  ka,
  it,
  ci,
  To,
  mr,
  Ca,
  _o,
  Po,
  di,
  fi,
  gn,
  Eo,
  hi,
  ks,
  Ta,
  Ih,
  _a,
  Lh,
  Pa,
  Bh,
  Ea,
  Vh,
  $a,
  Nh,
  Ra,
  Wh,
  Aa,
  Uh,
  tc,
  tk,
  r1,
  ej =
    ((r1 = class extends Go {
      constructor(t, r) {
        super();
        L(this, hi);
        L(this, Ta);
        L(this, _a);
        L(this, Pa);
        L(this, Ea);
        L(this, $a);
        L(this, Ra);
        L(this, Aa);
        L(this, tc);
        L(this, dt, void 0);
        L(this, se, void 0);
        L(this, ka, void 0);
        L(this, it, void 0);
        L(this, ci, void 0);
        L(this, To, void 0);
        L(this, mr, void 0);
        L(this, Ca, void 0);
        L(this, _o, void 0);
        L(this, Po, void 0);
        L(this, di, void 0);
        L(this, fi, void 0);
        L(this, gn, void 0);
        L(this, Eo, new Set());
        (this.options = r),
          F(this, dt, t),
          F(this, mr, null),
          this.bindMethods(),
          this.setOptions(r);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (S(this, se).addObserver(this),
          Ky(S(this, se), this.options)
            ? H(this, hi, ks).call(this)
            : this.updateResult(),
          H(this, Ea, Vh).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Hh(S(this, se), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Hh(S(this, se), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          H(this, $a, Nh).call(this),
          H(this, Ra, Wh).call(this),
          S(this, se).removeObserver(this);
      }
      setOptions(t, r) {
        const n = this.options,
          i = S(this, se);
        if (
          ((this.options = S(this, dt).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        H(this, Aa, Uh).call(this),
          S(this, se).setOptions(this.options),
          n._defaulted &&
            !Zu(this.options, n) &&
            S(this, dt)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: S(this, se),
                observer: this,
              });
        const o = this.hasListeners();
        o && Gy(S(this, se), i, this.options, n) && H(this, hi, ks).call(this),
          this.updateResult(r),
          o &&
            (S(this, se) !== i ||
              this.options.enabled !== n.enabled ||
              this.options.staleTime !== n.staleTime) &&
            H(this, Ta, Ih).call(this);
        const s = H(this, _a, Lh).call(this);
        o &&
          (S(this, se) !== i ||
            this.options.enabled !== n.enabled ||
            s !== S(this, gn)) &&
          H(this, Pa, Bh).call(this, s);
      }
      getOptimisticResult(t) {
        const r = S(this, dt).getQueryCache().build(S(this, dt), t),
          n = this.createResult(r, t);
        return (
          rj(this, n) &&
            (F(this, it, n),
            F(this, To, this.options),
            F(this, ci, S(this, se).state)),
          n
        );
      }
      getCurrentResult() {
        return S(this, it);
      }
      trackResult(t, r) {
        const n = {};
        return (
          Object.keys(t).forEach((i) => {
            Object.defineProperty(n, i, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(i), r == null || r(i), t[i]),
            });
          }),
          n
        );
      }
      trackProp(t) {
        S(this, Eo).add(t);
      }
      getCurrentQuery() {
        return S(this, se);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const r = S(this, dt).defaultQueryOptions(t),
          n = S(this, dt).getQueryCache().build(S(this, dt), r);
        return (
          (n.isFetchingOptimistic = !0),
          n.fetch().then(() => this.createResult(n, r))
        );
      }
      fetch(t) {
        return H(this, hi, ks)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), S(this, it)));
      }
      createResult(t, r) {
        var R;
        const n = S(this, se),
          i = this.options,
          o = S(this, it),
          s = S(this, ci),
          a = S(this, To),
          u = t !== n ? t.state : S(this, ka),
          { state: c } = t;
        let d = { ...c },
          f = !1,
          m;
        if (r._optimisticResults) {
          const $ = this.hasListeners(),
            O = !$ && Ky(t, r),
            j = $ && Gy(t, n, r, i);
          (O || j) && (d = { ...d, ...Jw(c.data, t.options) }),
            r._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
        }
        let { error: b, errorUpdatedAt: y, status: k } = d;
        if (r.select && d.data !== void 0)
          if (
            o &&
            d.data === (s == null ? void 0 : s.data) &&
            r.select === S(this, Ca)
          )
            m = S(this, _o);
          else
            try {
              F(this, Ca, r.select),
                (m = r.select(d.data)),
                (m = jh(o == null ? void 0 : o.data, m, r)),
                F(this, _o, m),
                F(this, mr, null);
            } catch ($) {
              F(this, mr, $);
            }
        else m = d.data;
        if (r.placeholderData !== void 0 && m === void 0 && k === "pending") {
          let $;
          if (
            o != null &&
            o.isPlaceholderData &&
            r.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            $ = o.data;
          else if (
            (($ =
              typeof r.placeholderData == "function"
                ? r.placeholderData(
                    (R = S(this, Po)) == null ? void 0 : R.state.data,
                    S(this, Po)
                  )
                : r.placeholderData),
            r.select && $ !== void 0)
          )
            try {
              ($ = r.select($)), F(this, mr, null);
            } catch (O) {
              F(this, mr, O);
            }
          $ !== void 0 &&
            ((k = "success"),
            (m = jh(o == null ? void 0 : o.data, $, r)),
            (f = !0));
        }
        S(this, mr) &&
          ((b = S(this, mr)),
          (m = S(this, _o)),
          (y = Date.now()),
          (k = "error"));
        const p = d.fetchStatus === "fetching",
          h = k === "pending",
          g = k === "error",
          C = h && p,
          P = m !== void 0;
        return {
          status: k,
          fetchStatus: d.fetchStatus,
          isPending: h,
          isSuccess: k === "success",
          isError: g,
          isInitialLoading: C,
          isLoading: C,
          data: m,
          dataUpdatedAt: d.dataUpdatedAt,
          error: b,
          errorUpdatedAt: y,
          failureCount: d.fetchFailureCount,
          failureReason: d.fetchFailureReason,
          errorUpdateCount: d.errorUpdateCount,
          isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
          isFetchedAfterMount:
            d.dataUpdateCount > u.dataUpdateCount ||
            d.errorUpdateCount > u.errorUpdateCount,
          isFetching: p,
          isRefetching: p && !h,
          isLoadingError: g && !P,
          isPaused: d.fetchStatus === "paused",
          isPlaceholderData: f,
          isRefetchError: g && P,
          isStale: Km(t, r),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const r = S(this, it),
          n = this.createResult(S(this, se), this.options);
        if (
          (F(this, ci, S(this, se).state),
          F(this, To, this.options),
          S(this, ci).data !== void 0 && F(this, Po, S(this, se)),
          Zu(n, r))
        )
          return;
        F(this, it, n);
        const i = {},
          o = () => {
            if (!r) return !0;
            const { notifyOnChangeProps: s } = this.options,
              a = typeof s == "function" ? s() : s;
            if (a === "all" || (!a && !S(this, Eo).size)) return !0;
            const l = new Set(a ?? S(this, Eo));
            return (
              this.options.throwOnError && l.add("error"),
              Object.keys(S(this, it)).some((u) => {
                const c = u;
                return S(this, it)[c] !== r[c] && l.has(c);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0),
          H(this, tc, tk).call(this, { ...i, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && H(this, Ea, Vh).call(this);
      }
    }),
    (dt = new WeakMap()),
    (se = new WeakMap()),
    (ka = new WeakMap()),
    (it = new WeakMap()),
    (ci = new WeakMap()),
    (To = new WeakMap()),
    (mr = new WeakMap()),
    (Ca = new WeakMap()),
    (_o = new WeakMap()),
    (Po = new WeakMap()),
    (di = new WeakMap()),
    (fi = new WeakMap()),
    (gn = new WeakMap()),
    (Eo = new WeakMap()),
    (hi = new WeakSet()),
    (ks = function (t) {
      H(this, Aa, Uh).call(this);
      let r = S(this, se).fetch(this.options, t);
      return (t != null && t.throwOnError) || (r = r.catch(It)), r;
    }),
    (Ta = new WeakSet()),
    (Ih = function () {
      if (
        (H(this, $a, Nh).call(this),
        Vo || S(this, it).isStale || !Oh(this.options.staleTime))
      )
        return;
      const r = Gw(S(this, it).dataUpdatedAt, this.options.staleTime) + 1;
      F(
        this,
        di,
        setTimeout(() => {
          S(this, it).isStale || this.updateResult();
        }, r)
      );
    }),
    (_a = new WeakSet()),
    (Lh = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(S(this, se))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Pa = new WeakSet()),
    (Bh = function (t) {
      H(this, Ra, Wh).call(this),
        F(this, gn, t),
        !(
          Vo ||
          this.options.enabled === !1 ||
          !Oh(S(this, gn)) ||
          S(this, gn) === 0
        ) &&
          F(
            this,
            fi,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || Hm.isFocused()) &&
                H(this, hi, ks).call(this);
            }, S(this, gn))
          );
    }),
    (Ea = new WeakSet()),
    (Vh = function () {
      H(this, Ta, Ih).call(this),
        H(this, Pa, Bh).call(this, H(this, _a, Lh).call(this));
    }),
    ($a = new WeakSet()),
    (Nh = function () {
      S(this, di) && (clearTimeout(S(this, di)), F(this, di, void 0));
    }),
    (Ra = new WeakSet()),
    (Wh = function () {
      S(this, fi) && (clearInterval(S(this, fi)), F(this, fi, void 0));
    }),
    (Aa = new WeakSet()),
    (Uh = function () {
      const t = S(this, dt).getQueryCache().build(S(this, dt), this.options);
      if (t === S(this, se)) return;
      const r = S(this, se);
      F(this, se, t),
        F(this, ka, t.state),
        this.hasListeners() &&
          (r == null || r.removeObserver(this), t.addObserver(this));
    }),
    (tc = new WeakSet()),
    (tk = function (t) {
      ze.batch(() => {
        t.listeners &&
          this.listeners.forEach((r) => {
            r(S(this, it));
          }),
          S(this, dt)
            .getQueryCache()
            .notify({ query: S(this, se), type: "observerResultsUpdated" });
      });
    }),
    r1);
function tj(e, t) {
  return (
    t.enabled !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Ky(e, t) {
  return tj(e, t) || (e.state.data !== void 0 && Hh(e, t, t.refetchOnMount));
}
function Hh(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || (n !== !1 && Km(e, t));
  }
  return !1;
}
function Gy(e, t, r, n) {
  return (
    (e !== t || n.enabled === !1) &&
    (!r.suspense || e.state.status !== "error") &&
    Km(e, r)
  );
}
function Km(e, t) {
  return t.enabled !== !1 && e.isStaleByTime(t.staleTime);
}
function rj(e, t) {
  return !Zu(e.getCurrentResult(), t);
}
var vn,
  yn,
  ft,
  Ar,
  $o,
  lu,
  za,
  Kh,
  n1,
  nj =
    ((n1 = class extends Go {
      constructor(r, n) {
        super();
        L(this, $o);
        L(this, za);
        L(this, vn, void 0);
        L(this, yn, void 0);
        L(this, ft, void 0);
        L(this, Ar, void 0);
        F(this, vn, r),
          this.setOptions(n),
          this.bindMethods(),
          H(this, $o, lu).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(r) {
        var i;
        const n = this.options;
        (this.options = S(this, vn).defaultMutationOptions(r)),
          Zu(this.options, n) ||
            S(this, vn)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: S(this, ft),
                observer: this,
              }),
          n != null &&
          n.mutationKey &&
          this.options.mutationKey &&
          Pi(n.mutationKey) !== Pi(this.options.mutationKey)
            ? this.reset()
            : ((i = S(this, ft)) == null ? void 0 : i.state.status) ===
                "pending" && S(this, ft).setOptions(this.options);
      }
      onUnsubscribe() {
        var r;
        this.hasListeners() ||
          (r = S(this, ft)) == null ||
          r.removeObserver(this);
      }
      onMutationUpdate(r) {
        H(this, $o, lu).call(this), H(this, za, Kh).call(this, r);
      }
      getCurrentResult() {
        return S(this, yn);
      }
      reset() {
        var r;
        (r = S(this, ft)) == null || r.removeObserver(this),
          F(this, ft, void 0),
          H(this, $o, lu).call(this),
          H(this, za, Kh).call(this);
      }
      mutate(r, n) {
        var i;
        return (
          F(this, Ar, n),
          (i = S(this, ft)) == null || i.removeObserver(this),
          F(
            this,
            ft,
            S(this, vn).getMutationCache().build(S(this, vn), this.options)
          ),
          S(this, ft).addObserver(this),
          S(this, ft).execute(r)
        );
      }
    }),
    (vn = new WeakMap()),
    (yn = new WeakMap()),
    (ft = new WeakMap()),
    (Ar = new WeakMap()),
    ($o = new WeakSet()),
    (lu = function () {
      var n;
      const r = ((n = S(this, ft)) == null ? void 0 : n.state) ?? ek();
      F(this, yn, {
        ...r,
        isPending: r.status === "pending",
        isSuccess: r.status === "success",
        isError: r.status === "error",
        isIdle: r.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (za = new WeakSet()),
    (Kh = function (r) {
      ze.batch(() => {
        var n, i, o, s, a, l, u, c;
        if (S(this, Ar) && this.hasListeners()) {
          const d = S(this, yn).variables,
            f = S(this, yn).context;
          (r == null ? void 0 : r.type) === "success"
            ? ((i = (n = S(this, Ar)).onSuccess) == null ||
                i.call(n, r.data, d, f),
              (s = (o = S(this, Ar)).onSettled) == null ||
                s.call(o, r.data, null, d, f))
            : (r == null ? void 0 : r.type) === "error" &&
              ((l = (a = S(this, Ar)).onError) == null ||
                l.call(a, r.error, d, f),
              (c = (u = S(this, Ar)).onSettled) == null ||
                c.call(u, void 0, r.error, d, f));
        }
        this.listeners.forEach((d) => {
          d(S(this, yn));
        });
      });
    }),
    n1),
  rk = T.createContext(void 0),
  Wc = (e) => {
    const t = T.useContext(rk);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  ij = ({ client: e, children: t }) => (
    T.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    _.jsx(rk.Provider, { value: e, children: t })
  ),
  nk = T.createContext(!1),
  oj = () => T.useContext(nk);
nk.Provider;
function sj() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var aj = T.createContext(sj()),
  lj = () => T.useContext(aj);
function ik(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function uj() {}
var cj = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  dj = (e) => {
    T.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  fj = ({ result: e, errorResetBoundary: t, throwOnError: r, query: n }) =>
    e.isError && !t.isReset() && !e.isFetching && n && ik(r, [e.error, n]),
  hj = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  pj = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  mj = (e, t, r) =>
    t.fetchOptimistic(e).catch(() => {
      r.clearReset();
    });
function gj(e, t, r) {
  const n = Wc(),
    i = oj(),
    o = lj(),
    s = n.defaultQueryOptions(e);
  (s._optimisticResults = i ? "isRestoring" : "optimistic"),
    hj(s),
    cj(s, o),
    dj(o);
  const [a] = T.useState(() => new t(n, s)),
    l = a.getOptimisticResult(s);
  if (
    (T.useSyncExternalStore(
      T.useCallback(
        (u) => {
          const c = i ? () => {} : a.subscribe(ze.batchCalls(u));
          return a.updateResult(), c;
        },
        [a, i]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    T.useEffect(() => {
      a.setOptions(s, { listeners: !1 });
    }, [s, a]),
    pj(s, l))
  )
    throw mj(s, a, o);
  if (
    fj({
      result: l,
      errorResetBoundary: o,
      throwOnError: s.throwOnError,
      query: n.getQueryCache().get(s.queryHash),
    })
  )
    throw l.error;
  return s.notifyOnChangeProps ? l : a.trackResult(l);
}
function vj(e, t) {
  return gj(e, ej);
}
function Gh(e, t) {
  const r = Wc(),
    [n] = T.useState(() => new nj(r, e));
  T.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const i = T.useSyncExternalStore(
      T.useCallback((s) => n.subscribe(ze.batchCalls(s)), [n]),
      () => n.getCurrentResult(),
      () => n.getCurrentResult()
    ),
    o = T.useCallback(
      (s, a) => {
        n.mutate(s, a).catch(uj);
      },
      [n]
    );
  if (i.error && ik(n.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: o, mutateAsync: i.mutate };
}
function yj(e) {
  return Ga({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z",
        },
        child: [],
      },
    ],
  })(e);
}
const bj = () => {
  const [e, t] = T.useState(""),
    r = Wc(),
    { mutate: n, isPending: i } = Gh({
      mutationKey: ["createTodo"],
      mutationFn: async (o) => {
        o.preventDefault();
        try {
          const s = await fetch(ec + "/todos", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ body: e }),
            }),
            a = await s.json();
          if (!s.ok) throw new Error(a.error || "Something went wrong");
          return t(""), a;
        } catch (s) {
          throw new Error(s);
        }
      },
      onSuccess: () => {
        r.invalidateQueries({ queryKey: ["todos"] });
      },
      onError: (o) => {
        alert(o.message);
      },
    });
  return _.jsx("form", {
    onSubmit: n,
    children: _.jsxs(Wr, {
      gap: 2,
      children: [
        _.jsx(Vm, {
          type: "text",
          value: e,
          onChange: (o) => t(o.target.value),
          ref: (o) => o && o.focus(),
        }),
        _.jsx(Bm, {
          mx: 2,
          type: "submit",
          _active: { transform: "scale(.97)" },
          children: i ? _.jsx(_i, { size: "xs" }) : _.jsx(yj, { size: 30 }),
        }),
      ],
    }),
  });
};
function Sj(e) {
  return Ga({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
        },
        child: [],
      },
    ],
  })(e);
}
function xj(e) {
  return Ga({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(e);
}
const wj = ({ todo: e }) => {
    const t = Wc(),
      { mutate: r, isPending: n } = Gh({
        mutationKey: ["updateTodo"],
        mutationFn: async () => {
          if (e.completed) return alert("Todo is already completed");
          try {
            const s = await fetch(ec + `/todos/${e._id}`, { method: "PATCH" }),
              a = await s.json();
            if (!s.ok) throw new Error(a.error || "Something went wrong");
            return a;
          } catch (s) {
            console.log(s);
          }
        },
        onSuccess: () => {
          t.invalidateQueries({ queryKey: ["todos"] });
        },
      }),
      { mutate: i, isPending: o } = Gh({
        mutationKey: ["deleteTodo"],
        mutationFn: async () => {
          try {
            const s = await fetch(ec + `/todos/${e._id}`, { method: "DELETE" }),
              a = await s.json();
            if (!s.ok) throw new Error(a.error || "Something went wrong");
            return a;
          } catch (s) {
            console.log(s);
          }
        },
        onSuccess: () => {
          t.invalidateQueries({ queryKey: ["todos"] });
        },
      });
    return _.jsxs(Wr, {
      gap: 2,
      alignItems: "center",
      children: [
        _.jsxs(Wr, {
          flex: 1,
          alignItems: "center",
          border: "1px",
          borderColor: "gray.600",
          p: 2,
          borderRadius: "lg",
          justifyContent: "space-between",
          children: [
            _.jsx(Si, {
              color: e.completed ? "green.200" : "yellow.100",
              textDecoration: e.completed ? "line-through" : "none",
              children: e.body,
            }),
            e.completed &&
              _.jsx(Fh, { ml: "1", colorScheme: "green", children: "Done" }),
            !e.completed &&
              _.jsx(Fh, {
                ml: "1",
                colorScheme: "yellow",
                children: "In Progress",
              }),
          ],
        }),
        _.jsxs(Wr, {
          gap: 2,
          alignItems: "center",
          children: [
            _.jsxs(ba, {
              color: "green.500",
              cursor: "pointer",
              onClick: () => r(),
              children: [
                !n && _.jsx(Sj, { size: 20 }),
                n && _.jsx(_i, { size: "sm" }),
              ],
            }),
            _.jsxs(ba, {
              color: "red.500",
              cursor: "pointer",
              onClick: () => i(),
              children: [
                !o && _.jsx(xj, { size: 25 }),
                o && _.jsx(_i, { size: "sm" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  kj = () => {
    const { data: e, isLoading: t } = vj({
      queryKey: ["todos"],
      queryFn: async () => {
        try {
          const r = await fetch(ec + "/todos"),
            n = await r.json();
          if (!r.ok) throw new Error(n.error || "Something went wrong");
          return n || [];
        } catch (r) {
          console.log(r);
        }
      },
    });
    return _.jsxs(_.Fragment, {
      children: [
        _.jsx(Si, {
          fontSize: "4xl",
          textTransform: "uppercase",
          fontWeight: "bold",
          textAlign: "center",
          my: 2,
          bgGradient: "linear(to-l, #0b85f8, #00ffff)",
          bgClip: "text",
          children: "Today's Tasks",
        }),
        t &&
          _.jsx(Wr, {
            justifyContent: "center",
            my: 4,
            children: _.jsx(_i, { size: "xl" }),
          }),
        !t &&
          (e == null ? void 0 : e.length) === 0 &&
          _.jsxs(qu, {
            alignItems: "center",
            gap: "3",
            children: [
              _.jsx(Si, {
                fontSize: "xl",
                textAlign: "center",
                color: "gray.500",
                children: "All tasks completed! 🤞",
              }),
              _.jsx("img", {
                src: "/go.png",
                alt: "Go logo",
                width: 70,
                height: 70,
              }),
            ],
          }),
        _.jsx(qu, {
          gap: 3,
          children:
            e == null ? void 0 : e.map((r) => _.jsx(wj, { todo: r }, r._id)),
        }),
      ],
    });
  },
  ec = "/api";
function Cj() {
  return _.jsxs(qu, {
    h: "100vh",
    children: [
      _.jsx(jD, {}),
      _.jsxs(Nm, { children: [_.jsx(bj, {}), _.jsx(kj, {})] }),
    ],
  });
}
const Tj = { initialColorMode: "dark", useSystemColorMode: !0 },
  _j = U3({
    config: Tj,
    styles: {
      global: (e) => ({ body: { backgroundColor: B("gray.500", "")(e) } }),
    },
  }),
  Pj = new JD();
df.createRoot(document.getElementById("root")).render(
  _.jsx(tr.StrictMode, {
    children: _.jsx(ij, {
      client: Pj,
      children: _.jsx(dD, { theme: _j, children: _.jsx(Cj, {}) }),
    }),
  })
);
