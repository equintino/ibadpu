/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4-4.1.1/jq-3.3.1/dt-1.10.21/af-2.3.5/cr-1.5.2/r-2.2.5/sc-2.0.2
 *
 * Included libraries:
 *   Bootstrap 4 4.1.1, jQuery 3 3.3.1, DataTables 1.10.21, AutoFill 2.3.5, ColReorder 1.5.2, Responsive 2.2.5, Scroller 2.0.2
 */

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                  if (!e.document) throw new Error("jQuery requires a window with a document");
                  return t(e);
              })
      : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
      },
      y = function e(t) {
          return null != t && t === t.window;
      },
      v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
      var i,
          o = (t = t || r).createElement("script");
      if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
      t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
  }
  var b = "3.3.1",
      w = function (e, t) {
          return new w.fn.init(e, t);
      },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.fn = w.prototype = {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
          return o.call(this);
      },
      get: function (e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
          var t = w.merge(this.constructor(), e);
          return (t.prevObject = this), t;
      },
      each: function (e) {
          return w.each(this, e);
      },
      map: function (e) {
          return this.pushStack(
              w.map(this, function (t, n) {
                  return e.call(t, n, t);
              })
          );
      },
      slice: function () {
          return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
          return this.eq(0);
      },
      last: function () {
          return this.eq(-1);
      },
      eq: function (e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
          return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
  }),
      (w.extend = w.fn.extend = function () {
          var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              l = !1;
          for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
              if (null != (e = arguments[s]))
                  for (t in e)
                      (n = a[t]),
                          a !== (r = e[t]) &&
                              (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                  ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}), (a[t] = w.extend(l, o, r)))
                                  : void 0 !== r && (a[t] = r));
          return a;
      }),
      w.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
              throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
              var t, n;
              return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d));
          },
          isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
          },
          globalEval: function (e) {
              m(e);
          },
          each: function (e, t) {
              var n,
                  r = 0;
              if (C(e)) {
                  for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
              } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
          },
          trim: function (e) {
              return null == e ? "" : (e + "").replace(T, "");
          },
          makeArray: function (e, t) {
              var n = t || [];
              return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
          },
          inArray: function (e, t, n) {
              return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
              return (e.length = i), e;
          },
          grep: function (e, t, n) {
              for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
              return i;
          },
          map: function (e, t, n) {
              var r,
                  i,
                  o = 0,
                  s = [];
              if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
              return a.apply([], s);
          },
          guid: 1,
          support: h,
      }),
      "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
      w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
          l["[object " + t + "]"] = t.toLowerCase();
      });
  function C(e) {
      var t = !!e && "length" in e && e.length,
          n = x(e);
      return !g(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
  }
  var E = (function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y,
          v,
          m,
          x,
          b = "sizzle" + 1 * new Date(),
          w = e.document,
          T = 0,
          C = 0,
          E = ae(),
          k = ae(),
          S = ae(),
          D = function (e, t) {
              return e === t && (f = !0), 0;
          },
          N = {}.hasOwnProperty,
          A = [],
          j = A.pop,
          q = A.push,
          L = A.push,
          H = A.slice,
          O = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
          },
          P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
          W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
          $ = new RegExp(M + "+", "g"),
          B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          F = new RegExp("^" + M + "*," + M + "*"),
          _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          X = new RegExp(W),
          U = new RegExp("^" + R + "$"),
          V = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + I),
              PSEUDO: new RegExp("^" + W),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
          },
          G = /^(?:input|select|textarea|button)$/i,
          Y = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ee = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function (e, t) {
              return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
          },
          re = function () {
              p();
          },
          ie = me(
              function (e) {
                  return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
          );
      try {
          L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
      } catch (e) {
          L = {
              apply: A.length
                  ? function (e, t) {
                        q.apply(e, H.call(t));
                    }
                  : function (e, t) {
                        var n = e.length,
                            r = 0;
                        while ((e[n++] = t[r++]));
                        e.length = n - 1;
                    },
          };
      }
      function oe(e, t, r, i) {
          var o,
              s,
              l,
              c,
              f,
              h,
              v,
              m = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
          if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
          if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
              if (11 !== T && (f = J.exec(e)))
                  if ((o = f[1])) {
                      if (9 === T) {
                          if (!(l = t.getElementById(o))) return r;
                          if (l.id === o) return r.push(l), r;
                      } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                  } else {
                      if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                      if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                  }
              if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                  if (1 !== T) (m = t), (v = e);
                  else if ("object" !== t.nodeName.toLowerCase()) {
                      (c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = b)), (s = (h = a(e)).length);
                      while (s--) h[s] = "#" + c + " " + ve(h[s]);
                      (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
                  }
                  if (v)
                      try {
                          return L.apply(r, m.querySelectorAll(v)), r;
                      } catch (e) {
                      } finally {
                          c === b && t.removeAttribute("id");
                      }
              }
          }
          return u(e.replace(B, "$1"), t, r, i);
      }
      function ae() {
          var e = [];
          function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
          }
          return t;
      }
      function se(e) {
          return (e[b] = !0), e;
      }
      function ue(e) {
          var t = d.createElement("fieldset");
          try {
              return !!e(t);
          } catch (e) {
              return !1;
          } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
      }
      function le(e, t) {
          var n = e.split("|"),
              i = n.length;
          while (i--) r.attrHandle[n[i]] = t;
      }
      function ce(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) while ((n = n.nextSibling)) if (n === t) return -1;
          return e ? 1 : -1;
      }
      function fe(e) {
          return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
      }
      function pe(e) {
          return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
          };
      }
      function de(e) {
          return function (t) {
              return "form" in t
                  ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                          ? "label" in t.parentNode
                              ? t.parentNode.disabled === e
                              : t.disabled === e
                          : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                      : t.disabled === e
                  : "label" in t && t.disabled === e;
          };
      }
      function he(e) {
          return se(function (t) {
              return (
                  (t = +t),
                  se(function (n, r) {
                      var i,
                          o = e([], n.length, t),
                          a = o.length;
                      while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
              );
          });
      }
      function ge(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      (n = oe.support = {}),
          (o = oe.isXML = function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName;
          }),
          (p = oe.setDocument = function (e) {
              var t,
                  i,
                  a = e ? e.ownerDocument || e : w;
              return a !== d && 9 === a.nodeType && a.documentElement
                  ? ((d = a),
                    (h = d.documentElement),
                    (g = !o(d)),
                    w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                    (n.attributes = ue(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                    (n.getById = ue(function (e) {
                        return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                    })),
                    n.getById
                        ? ((r.filter.ID = function (e) {
                              var t = e.replace(Z, ee);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (r.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && g) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((r.filter.ID = function (e) {
                              var t = e.replace(Z, ee);
                              return function (e) {
                                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                  return n && n.value === t;
                              };
                          }),
                          (r.find.ID = function (e, t) {
                              if ("undefined" != typeof t.getElementById && g) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      (i = t.getElementsByName(e)), (r = 0);
                                      while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" === e) {
                                  while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                  return r;
                              }
                              return o;
                          }),
                    (r.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                            if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                        }),
                    (v = []),
                    (y = []),
                    (n.qsa = Q.test(d.querySelectorAll)) &&
                        (ue(function (e) {
                            (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                                e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                                e.querySelectorAll(":checked").length || y.push(":checked"),
                                e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                        }),
                        ue(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                (h.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                y.push(",.*:");
                        })),
                    (n.matchesSelector = Q.test((m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                        ue(function (e) {
                            (n.disconnectedMatch = m.call(e, "*")), m.call(e, "[s!='']:x"), v.push("!=", W);
                        }),
                    (y = y.length && new RegExp(y.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = Q.test(h.compareDocumentPosition)),
                    (x =
                        t || Q.test(h.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      r = t && t.parentNode;
                                  return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                              }
                            : function (e, t) {
                                  if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                  return !1;
                              }),
                    (D = t
                        ? function (e, t) {
                              if (e === t) return (f = !0), 0;
                              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  r ||
                                  (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                      ? e === d || (e.ownerDocument === w && x(w, e))
                                          ? -1
                                          : t === d || (t.ownerDocument === w && x(w, t))
                                          ? 1
                                          : c
                                          ? O(c, e) - O(c, t)
                                          : 0
                                      : 4 & r
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (f = !0), 0;
                              var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                              if (i === o) return ce(e, t);
                              n = e;
                              while ((n = n.parentNode)) a.unshift(n);
                              n = t;
                              while ((n = n.parentNode)) s.unshift(n);
                              while (a[r] === s[r]) r++;
                              return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                          }),
                    d)
                  : d;
          }),
          (oe.matches = function (e, t) {
              return oe(e, null, null, t);
          }),
          (oe.matchesSelector = function (e, t) {
              if (((e.ownerDocument || e) !== d && p(e), (t = t.replace(z, "='$1']")), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))))
                  try {
                      var r = m.call(e, t);
                      if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                  } catch (e) {}
              return oe(t, d, null, [e]).length > 0;
          }),
          (oe.contains = function (e, t) {
              return (e.ownerDocument || e) !== d && p(e), x(e, t);
          }),
          (oe.attr = function (e, t) {
              (e.ownerDocument || e) !== d && p(e);
              var i = r.attrHandle[t.toLowerCase()],
                  o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
              return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
          }),
          (oe.escape = function (e) {
              return (e + "").replace(te, ne);
          }),
          (oe.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (oe.uniqueSort = function (e) {
              var t,
                  r = [],
                  i = 0,
                  o = 0;
              if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
                  while ((t = e[o++])) t === e[o] && (i = r.push(o));
                  while (i--) e.splice(r[i], 1);
              }
              return (c = null), e;
          }),
          (i = oe.getText = function (e) {
              var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
              if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
              } else while ((t = e[r++])) n += i(t);
              return n;
          }),
          ((r = oe.selectors = {
              cacheLength: 50,
              createPseudo: se,
              match: V,
              attrHandle: {},
              find: {},
              relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
              preFilter: {
                  ATTR: function (e) {
                      return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                  },
                  CHILD: function (e) {
                      return (
                          (e[1] = e[1].toLowerCase()),
                          "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                          e
                      );
                  },
                  PSEUDO: function (e) {
                      var t,
                          n = !e[6] && e[2];
                      return V.CHILD.test(e[0])
                          ? null
                          : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                  },
              },
              filter: {
                  TAG: function (e) {
                      var t = e.replace(Z, ee).toLowerCase();
                      return "*" === e
                          ? function () {
                                return !0;
                            }
                          : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                  },
                  CLASS: function (e) {
                      var t = E[e + " "];
                      return (
                          t ||
                          ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                              E(e, function (e) {
                                  return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                              }))
                      );
                  },
                  ATTR: function (e, t, n) {
                      return function (r) {
                          var i = oe.attr(r, e);
                          return null == i
                              ? "!=" === t
                              : !t ||
                                    ((i += ""),
                                    "=" === t
                                        ? i === n
                                        : "!=" === t
                                        ? i !== n
                                        : "^=" === t
                                        ? n && 0 === i.indexOf(n)
                                        : "*=" === t
                                        ? n && i.indexOf(n) > -1
                                        : "$=" === t
                                        ? n && i.slice(-n.length) === n
                                        : "~=" === t
                                        ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                        : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                      };
                  },
                  CHILD: function (e, t, n, r, i) {
                      var o = "nth" !== e.slice(0, 3),
                          a = "last" !== e.slice(-4),
                          s = "of-type" === t;
                      return 1 === r && 0 === i
                          ? function (e) {
                                return !!e.parentNode;
                            }
                          : function (t, n, u) {
                                var l,
                                    c,
                                    f,
                                    p,
                                    d,
                                    h,
                                    g = o !== a ? "nextSibling" : "previousSibling",
                                    y = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    m = !u && !s,
                                    x = !1;
                                if (y) {
                                    if (o) {
                                        while (g) {
                                            p = t;
                                            while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                                        (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2]), (p = d && y.childNodes[d]);
                                        while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                            if (1 === p.nodeType && ++x && p === t) {
                                                c[e] = [T, d, x];
                                                break;
                                            }
                                    } else if ((m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                        while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                            if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                    return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                }
                            };
                  },
                  PSEUDO: function (e, t) {
                      var n,
                          i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                      return i[b]
                          ? i(t)
                          : i.length > 1
                          ? ((n = [e, e, "", t]),
                            r.setFilters.hasOwnProperty(e.toLowerCase())
                                ? se(function (e, n) {
                                      var r,
                                          o = i(e, t),
                                          a = o.length;
                                      while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                  })
                                : function (e) {
                                      return i(e, 0, n);
                                  })
                          : i;
                  },
              },
              pseudos: {
                  not: se(function (e) {
                      var t = [],
                          n = [],
                          r = s(e.replace(B, "$1"));
                      return r[b]
                          ? se(function (e, t, n, i) {
                                var o,
                                    a = r(e, null, i, []),
                                    s = e.length;
                                while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                            })
                          : function (e, i, o) {
                                return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                            };
                  }),
                  has: se(function (e) {
                      return function (t) {
                          return oe(e, t).length > 0;
                      };
                  }),
                  contains: se(function (e) {
                      return (
                          (e = e.replace(Z, ee)),
                          function (t) {
                              return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                          }
                      );
                  }),
                  lang: se(function (e) {
                      return (
                          U.test(e || "") || oe.error("unsupported lang: " + e),
                          (e = e.replace(Z, ee).toLowerCase()),
                          function (t) {
                              var n;
                              do {
                                  if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                              } while ((t = t.parentNode) && 1 === t.nodeType);
                              return !1;
                          }
                      );
                  }),
                  target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                      return e === h;
                  },
                  focus: function (e) {
                      return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                  },
                  enabled: de(!1),
                  disabled: de(!0),
                  checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                  },
                  selected: function (e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                  },
                  empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                      return !0;
                  },
                  parent: function (e) {
                      return !r.pseudos.empty(e);
                  },
                  header: function (e) {
                      return Y.test(e.nodeName);
                  },
                  input: function (e) {
                      return G.test(e.nodeName);
                  },
                  button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && "button" === e.type) || "button" === t;
                  },
                  text: function (e) {
                      var t;
                      return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                  },
                  first: he(function () {
                      return [0];
                  }),
                  last: he(function (e, t) {
                      return [t - 1];
                  }),
                  eq: he(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                  }),
                  even: he(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                  }),
                  odd: he(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                  }),
                  lt: he(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                      return e;
                  }),
                  gt: he(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                  }),
              },
          }).pseudos.nth = r.pseudos.eq);
      for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
      for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
      function ye() {}
      (ye.prototype = r.filters = r.pseudos),
          (r.setFilters = new ye()),
          (a = oe.tokenize = function (e, t) {
              var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = k[e + " "];
              if (c) return t ? 0 : c.slice(0);
              (s = e), (u = []), (l = r.preFilter);
              while (s) {
                  (n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))), (n = !1), (i = _.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length)));
                  for (a in r.filter) !(i = V[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                  if (!n) break;
              }
              return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
          });
      function ve(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r;
      }
      function me(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
          return t.first
              ? function (t, n, i) {
                    while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                }
              : function (t, n, u) {
                    var l,
                        c,
                        f,
                        p = [T, s];
                    if (u) {
                        while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                        while ((t = t[r]))
                            if (1 === t.nodeType || a)
                                if (((f = t[b] || (t[b] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                else {
                                    if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                }
                    return !1;
                };
      }
      function xe(e) {
          return e.length > 1
              ? function (t, n, r) {
                    var i = e.length;
                    while (i--) if (!e[i](t, n, r)) return !1;
                    return !0;
                }
              : e[0];
      }
      function be(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
          return n;
      }
      function we(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
          return a;
      }
      function Te(e, t, n, r, i, o) {
          return (
              r && !r[b] && (r = Te(r)),
              i && !i[b] && (i = Te(i, o)),
              se(function (o, a, s, u) {
                  var l,
                      c,
                      f,
                      p = [],
                      d = [],
                      h = a.length,
                      g = o || be(t || "*", s.nodeType ? [s] : s, []),
                      y = !e || (!o && t) ? g : we(g, p, e, s, u),
                      v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                  if ((n && n(y, v, s, u), r)) {
                      (l = we(v, d)), r(l, [], s, u), (c = l.length);
                      while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                  }
                  if (o) {
                      if (i || e) {
                          if (i) {
                              (l = []), (c = v.length);
                              while (c--) (f = v[c]) && l.push((y[c] = f));
                              i(null, (v = []), l, u);
                          }
                          c = v.length;
                          while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                      }
                  } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
              })
          );
      }
      function Ce(e) {
          for (
              var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = me(
                      function (e) {
                          return e === t;
                      },
                      s,
                      !0
                  ),
                  f = me(
                      function (e) {
                          return O(t, e) > -1;
                      },
                      s,
                      !0
                  ),
                  p = [
                      function (e, n, r) {
                          var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                          return (t = null), i;
                      },
                  ];
              u < o;
              u++
          )
              if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
              else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                      for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                      return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce((e = e.slice(i))), i < o && ve(e));
                  }
                  p.push(n);
              }
          return xe(p);
      }
      function Ee(e, t) {
          var n = t.length > 0,
              i = e.length > 0,
              o = function (o, a, s, u, c) {
                  var f,
                      h,
                      y,
                      v = 0,
                      m = "0",
                      x = o && [],
                      b = [],
                      w = l,
                      C = o || (i && r.find.TAG("*", c)),
                      E = (T += null == w ? 1 : Math.random() || 0.1),
                      k = C.length;
                  for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                      if (i && f) {
                          (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                          while ((y = e[h++]))
                              if (y(f, a || d, s)) {
                                  u.push(f);
                                  break;
                              }
                          c && (T = E);
                      }
                      n && ((f = !y && f) && v--, o && x.push(f));
                  }
                  if (((v += m), n && m !== v)) {
                      h = 0;
                      while ((y = t[h++])) y(x, b, a, s);
                      if (o) {
                          if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                          b = we(b);
                      }
                      L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                  }
                  return c && ((T = E), (l = w)), x;
              };
          return n ? se(o) : o;
      }
      return (
          (s = oe.compile = function (e, t) {
              var n,
                  r = [],
                  i = [],
                  o = S[e + " "];
              if (!o) {
                  t || (t = a(e)), (n = t.length);
                  while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                  (o = S(e, Ee(i, r))).selector = e;
              }
              return o;
          }),
          (u = oe.select = function (e, t, n, i) {
              var o,
                  u,
                  l,
                  c,
                  f,
                  p = "function" == typeof e && e,
                  d = !i && a((e = p.selector || e));
              if (((n = n || []), 1 === d.length)) {
                  if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                      if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                      p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                  }
                  o = V.needsContext.test(e) ? 0 : u.length;
                  while (o--) {
                      if (((l = u[o]), r.relative[(c = l.type)])) break;
                      if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))) {
                          if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;
                          break;
                      }
                  }
              }
              return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
          }),
          (n.sortStable = b.split("").sort(D).join("") === b),
          (n.detectDuplicates = !!f),
          p(),
          (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
          })),
          ue(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
          }) ||
              le("type|href|height|width", function (e, t, n) {
                  if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
          (n.attributes &&
              ue(function (e) {
                  return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
              })) ||
              le("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
          ue(function (e) {
              return null == e.getAttribute("disabled");
          }) ||
              le(P, function (e, t, n) {
                  var r;
                  if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
              }),
          oe
      );
  })(e);
  (w.find = E), (w.expr = E.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = E.uniqueSort), (w.text = E.getText), (w.isXMLDoc = E.isXML), (w.contains = E.contains), (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
          var r = [],
              i = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
              if (1 === e.nodeType) {
                  if (i && w(e).is(n)) break;
                  r.push(e);
              }
          return r;
      },
      S = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
      },
      D = w.expr.match.needsContext;
  function N(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
      return g(t)
          ? w.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? w.grep(e, function (e) {
                return (e === t) !== n;
            })
          : "string" != typeof t
          ? w.grep(e, function (e) {
                return u.call(t, e) > -1 !== n;
            })
          : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
      var r = t[0];
      return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
              ? w.find.matchesSelector(r, e)
                  ? [r]
                  : []
              : w.find.matches(
                    e,
                    w.grep(t, function (e) {
                        return 1 === e.nodeType;
                    })
                )
      );
  }),
      w.fn.extend({
          find: function (e) {
              var t,
                  n,
                  r = this.length,
                  i = this;
              if ("string" != typeof e)
                  return this.pushStack(
                      w(e).filter(function () {
                          for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                      })
                  );
              for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
              return r > 1 ? w.uniqueSort(n) : n;
          },
          filter: function (e) {
              return this.pushStack(j(this, e || [], !1));
          },
          not: function (e) {
              return this.pushStack(j(this, e || [], !0));
          },
          is: function (e) {
              return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
          },
      });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
      var i, o;
      if (!e) return this;
      if (((n = n || q), "string" == typeof e)) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (i[1]) {
              if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
          }
          return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
      }
      return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
  }).prototype = w.fn),
      (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
      O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
      has: function (e) {
          var t = w(e, this),
              n = t.length;
          return this.filter(function () {
              for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
          });
      },
      closest: function (e, t) {
          var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && w(e);
          if (!D.test(e))
              for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                          o.push(n);
                          break;
                      }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
      },
      index: function (e) {
          return e ? ("string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
      },
      addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
  });
  function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e;
  }
  w.each(
      {
          parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
              return k(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
              return k(e, "parentNode", n);
          },
          next: function (e) {
              return P(e, "nextSibling");
          },
          prev: function (e) {
              return P(e, "previousSibling");
          },
          nextAll: function (e) {
              return k(e, "nextSibling");
          },
          prevAll: function (e) {
              return k(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
              return k(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
              return k(e, "previousSibling", n);
          },
          siblings: function (e) {
              return S((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
              return S(e.firstChild);
          },
          contents: function (e) {
              return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
          },
      },
      function (e, t) {
          w.fn[e] = function (n, r) {
              var i = w.map(this, t, n);
              return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
          };
      }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
      var t = {};
      return (
          w.each(e.match(M) || [], function (e, n) {
              t[n] = !0;
          }),
          t
      );
  }
  w.Callbacks = function (e) {
      e = "string" == typeof e ? R(e) : w.extend({}, e);
      var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function () {
              for (i = i || e.once, r = t = !0; a.length; s = -1) {
                  n = a.shift();
                  while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
              }
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          l = {
              add: function () {
                  return (
                      o &&
                          (n && !t && ((s = o.length - 1), a.push(n)),
                          (function t(n) {
                              w.each(n, function (n, r) {
                                  g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                              });
                          })(arguments),
                          n && !t && u()),
                      this
                  );
              },
              remove: function () {
                  return (
                      w.each(arguments, function (e, t) {
                          var n;
                          while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                      }),
                      this
                  );
              },
              has: function (e) {
                  return e ? w.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                  return o && (o = []), this;
              },
              disable: function () {
                  return (i = a = []), (o = n = ""), this;
              },
              disabled: function () {
                  return !o;
              },
              lock: function () {
                  return (i = a = []), n || t || (o = n = ""), this;
              },
              locked: function () {
                  return !!i;
              },
              fireWith: function (e, n) {
                  return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
              },
              fire: function () {
                  return l.fireWith(this, arguments), this;
              },
              fired: function () {
                  return !!r;
              },
          };
      return l;
  };
  function I(e) {
      return e;
  }
  function W(e) {
      throw e;
  }
  function $(e, t, n, r) {
      var i;
      try {
          e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
          n.apply(void 0, [e]);
      }
  }
  w.extend({
      Deferred: function (t) {
          var n = [
                  ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                  ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
              ],
              r = "pending",
              i = {
                  state: function () {
                      return r;
                  },
                  always: function () {
                      return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                      return i.then(null, e);
                  },
                  pipe: function () {
                      var e = arguments;
                      return w
                          .Deferred(function (t) {
                              w.each(n, function (n, r) {
                                  var i = g(e[r[4]]) && e[r[4]];
                                  o[r[1]](function () {
                                      var e = i && i.apply(this, arguments);
                                      e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                  });
                              }),
                                  (e = null);
                          })
                          .promise();
                  },
                  then: function (t, r, i) {
                      var o = 0;
                      function a(t, n, r, i) {
                          return function () {
                              var s = this,
                                  u = arguments,
                                  l = function () {
                                      var e, l;
                                      if (!(t < o)) {
                                          if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                          (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                              g(l)
                                                  ? i
                                                      ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                                      : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith)))
                                                  : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                      }
                                  },
                                  c = i
                                      ? l
                                      : function () {
                                            try {
                                                l();
                                            } catch (e) {
                                                w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                            }
                                        };
                              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                          };
                      }
                      return w
                          .Deferred(function (e) {
                              n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                          })
                          .promise();
                  },
                  promise: function (e) {
                      return null != e ? w.extend(e, i) : i;
                  },
              },
              o = {};
          return (
              w.each(n, function (e, t) {
                  var a = t[2],
                      s = t[5];
                  (i[t[1]] = a.add),
                      s &&
                          a.add(
                              function () {
                                  r = s;
                              },
                              n[3 - e][2].disable,
                              n[3 - e][3].disable,
                              n[0][2].lock,
                              n[0][3].lock
                          ),
                      a.add(t[3].fire),
                      (o[t[0]] = function () {
                          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                      }),
                      (o[t[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              t && t.call(o, o),
              o
          );
      },
      when: function (e) {
          var t = arguments.length,
              n = t,
              r = Array(n),
              i = o.call(arguments),
              a = w.Deferred(),
              s = function (e) {
                  return function (n) {
                      (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
                  };
              };
          if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
          while (n--) $(i[n], s(n), a.reject);
          return a.promise();
      },
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
      e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
      (w.readyException = function (t) {
          e.setTimeout(function () {
              throw t;
          });
      });
  var F = w.Deferred();
  (w.fn.ready = function (e) {
      return (
          F.then(e)["catch"](function (e) {
              w.readyException(e);
          }),
          this
      );
  }),
      w.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
              (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
          },
      }),
      (w.ready.then = F.then);
  function _() {
      r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }
  "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
          var s = 0,
              u = e.length,
              l = null == n;
          if ("object" === x(n)) {
              i = !0;
              for (s in n) z(e, t, s, n[s], !0, o, a);
          } else if (
              void 0 !== r &&
              ((i = !0),
              g(r) || (a = !0),
              l &&
                  (a
                      ? (t.call(e, r), (t = null))
                      : ((l = t),
                        (t = function (e, t, n) {
                            return l.call(w(e), n);
                        }))),
              t)
          )
              for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      },
      X = /^-ms-/,
      U = /-([a-z])/g;
  function V(e, t) {
      return t.toUpperCase();
  }
  function G(e) {
      return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
      this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
      (Q.prototype = {
          cache: function (e) {
              var t = e[this.expando];
              return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
          },
          set: function (e, t, n) {
              var r,
                  i = this.cache(e);
              if ("string" == typeof t) i[G(t)] = n;
              else for (r in t) i[G(r)] = t[r];
              return i;
          },
          get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
          },
          access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
              var n,
                  r = e[this.expando];
              if (void 0 !== r) {
                  if (void 0 !== t) {
                      n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                      while (n--) delete r[t[n]];
                  }
                  (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
              }
          },
          hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !w.isEmptyObject(t);
          },
      });
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;
  function te(e) {
      return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
  }
  function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
              try {
                  n = te(n);
              } catch (e) {}
              K.set(e, t, n);
          } else n = void 0;
      return n;
  }
  w.extend({
      hasData: function (e) {
          return K.hasData(e) || J.hasData(e);
      },
      data: function (e, t, n) {
          return K.access(e, t, n);
      },
      removeData: function (e, t) {
          K.remove(e, t);
      },
      _data: function (e, t, n) {
          return J.access(e, t, n);
      },
      _removeData: function (e, t) {
          J.remove(e, t);
      },
  }),
      w.fn.extend({
          data: function (e, t) {
              var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;
              if (void 0 === e) {
                  if (this.length && ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                      n = a.length;
                      while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = G(r.slice(5))), ne(o, r, i[r]));
                      J.set(o, "hasDataAttrs", !0);
                  }
                  return i;
              }
              return "object" == typeof e
                  ? this.each(function () {
                        K.set(this, e);
                    })
                  : z(
                        this,
                        function (t) {
                            var n;
                            if (o && void 0 === t) {
                                if (void 0 !== (n = K.get(o, e))) return n;
                                if (void 0 !== (n = ne(o, e))) return n;
                            } else
                                this.each(function () {
                                    K.set(this, e, t);
                                });
                        },
                        null,
                        t,
                        arguments.length > 1,
                        null,
                        !0
                    );
          },
          removeData: function (e) {
              return this.each(function () {
                  K.remove(this, e);
              });
          },
      }),
      w.extend({
          queue: function (e, t, n) {
              var r;
              if (e) return (t = (t || "fx") + "queue"), (r = J.get(e, t)), n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
          },
          dequeue: function (e, t) {
              t = t || "fx";
              var n = w.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = w._queueHooks(e, t),
                  a = function () {
                      w.dequeue(e, t);
                  };
              "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                  J.get(e, n) ||
                  J.access(e, n, {
                      empty: w.Callbacks("once memory").add(function () {
                          J.remove(e, [t + "queue", n]);
                      }),
                  })
              );
          },
      }),
      w.fn.extend({
          queue: function (e, t) {
              var n = 2;
              return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                      ? w.queue(this[0], e)
                      : void 0 === t
                      ? this
                      : this.each(function () {
                            var n = w.queue(this, e, t);
                            w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                        })
              );
          },
          dequeue: function (e) {
              return this.each(function () {
                  w.dequeue(this, e);
              });
          },
          clearQueue: function (e) {
              return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
              var n,
                  r = 1,
                  i = w.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                      --r || i.resolveWith(o, [o]);
                  };
              "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
              while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
              return s(), i.promise(t);
          },
      });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function (e, t) {
          return "none" === (e = t || e).style.display || ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"));
      },
      se = function (e, t, n, r) {
          var i,
              o,
              a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          i = n.apply(e, r || []);
          for (o in t) e.style[o] = a[o];
          return i;
      };
  function ue(e, t, n, r) {
      var i,
          o,
          a = 20,
          s = r
              ? function () {
                    return r.cur();
                }
              : function () {
                    return w.css(e, t, "");
                },
          u = s(),
          l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
          c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
      if (c && c[3] !== l) {
          (u /= 2), (l = l || c[3]), (c = +u || 1);
          while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
          (c *= 2), w.style(e, t, c + l), (n = n || []);
      }
      return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
  }
  var le = {};
  function ce(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = le[r];
      return i || ((t = n.body.appendChild(n.createElement(r))), (i = w.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (le[r] = i), i);
  }
  function fe(e, t) {
      for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
              ((n = r.style.display),
              t ? ("none" === n && ((i[o] = J.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
      for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
      return e;
  }
  w.fn.extend({
      show: function () {
          return fe(this, !0);
      },
      hide: function () {
          return fe(this);
      },
      toggle: function (e) {
          return "boolean" == typeof e
              ? e
                  ? this.show()
                  : this.hide()
              : this.each(function () {
                    ae(this) ? w(this).show() : w(this).hide();
                });
      },
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
      };
  (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
  function ye(e, t) {
      var n;
      return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n;
  }
  function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
          if ((o = e[d]) || 0 === o)
              if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
              else if (me.test(o)) {
                  (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]), (c = u[0]);
                  while (c--) a = a.lastChild;
                  w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
              } else p.push(t.createTextNode(o));
      (f.textContent = ""), (d = 0);
      while ((o = p[d++]))
          if (r && w.inArray(o, r) > -1) i && i.push(o);
          else if (((l = w.contains(o.ownerDocument, o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)) {
              c = 0;
              while ((o = a[c++])) he.test(o.type || "") && n.push(o);
          }
      return f;
  }
  !(function () {
      var e = r.createDocumentFragment().appendChild(r.createElement("div")),
          t = r.createElement("input");
      t.setAttribute("type", "radio"),
          t.setAttribute("checked", "checked"),
          t.setAttribute("name", "t"),
          e.appendChild(t),
          (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
      return !0;
  }
  function ke() {
      return !1;
  }
  function Se() {
      try {
          return r.activeElement;
      } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
          "string" != typeof n && ((r = r || n), (n = void 0));
          for (s in t) De(e, s, n, r, t[s], o);
          return e;
      }
      if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = ke;
      else if (!i) return e;
      return (
          1 === o &&
              ((a = i),
              ((i = function (e) {
                  return w().off(e), a.apply(this, arguments);
              }).guid = a.guid || (a.guid = w.guid++))),
          e.each(function () {
              w.event.add(this, t, i, r, n);
          })
      );
  }
  (w.event = {
      global: {},
      add: function (e, t, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              y = J.get(e);
          if (y) {
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && w.find.matchesSelector(be, i),
                  n.guid || (n.guid = w.guid++),
                  (u = y.events) || (u = y.events = {}),
                  (a = y.handle) ||
                      (a = y.handle = function (t) {
                          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                      }),
                  (l = (t = (t || "").match(M) || [""]).length);
              while (l--)
                  (d = g = (s = Ce.exec(t[l]) || [])[1]),
                      (h = (s[2] || "").split(".").sort()),
                      d &&
                          ((f = w.event.special[d] || {}),
                          (d = (i ? f.delegateType : f.bindType) || d),
                          (f = w.event.special[d] || {}),
                          (c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                          (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                          f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                          i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                          (w.event.global[d] = !0));
          }
      },
      remove: function (e, t, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              y = J.hasData(e) && J.get(e);
          if (y && (u = y.events)) {
              l = (t = (t || "").match(M) || [""]).length;
              while (l--)
                  if (((s = Ce.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || "").split(".").sort()), d)) {
                      (f = w.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                      while (o--)
                          (c = p[o]),
                              (!i && g !== c.origType) ||
                                  (n && n.guid !== c.guid) ||
                                  (s && !s.test(c.namespace)) ||
                                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                      a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || w.removeEvent(e, d, y.handle), delete u[d]);
                  } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
              w.isEmptyObject(u) && J.remove(e, "handle events");
          }
      },
      dispatch: function (e) {
          var t = w.event.fix(e),
              n,
              r,
              i,
              o,
              a,
              s,
              u = new Array(arguments.length),
              l = (J.get(this, "events") || {})[t.type] || [],
              c = w.event.special[t.type] || {};
          for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
          if (((t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
              (s = w.event.handlers.call(this, t, l)), (n = 0);
              while ((o = s[n++]) && !t.isPropagationStopped()) {
                  (t.currentTarget = o.elem), (r = 0);
                  while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                      (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                          ((t.handleObj = a), (t.data = a.data), void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
              }
              return c.postDispatch && c.postDispatch.call(this, t), t.result;
          }
      },
      handlers: function (e, t) {
          var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                      for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                      o.length && s.push({ elem: l, handlers: o });
                  }
          return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
      },
      addProp: function (e, t) {
          Object.defineProperty(w.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: g(t)
                  ? function () {
                        if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                        if (this.originalEvent) return this.originalEvent[e];
                    },
              set: function (t) {
                  Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
              },
          });
      },
      fix: function (e) {
          return e[w.expando] ? e : new w.Event(e);
      },
      special: {
          load: { noBubble: !0 },
          focus: {
              trigger: function () {
                  if (this !== Se() && this.focus) return this.focus(), !1;
              },
              delegateType: "focusin",
          },
          blur: {
              trigger: function () {
                  if (this === Se() && this.blur) return this.blur(), !1;
              },
              delegateType: "focusout",
          },
          click: {
              trigger: function () {
                  if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
              },
              _default: function (e) {
                  return N(e.target, "a");
              },
          },
          beforeunload: {
              postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              },
          },
      },
  }),
      (w.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
      }),
      (w.Event = function (e, t) {
          if (!(this instanceof w.Event)) return new w.Event(e, t);
          e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : ke),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && w.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[w.expando] = !0);
      }),
      (w.Event.prototype = {
          constructor: w.Event,
          isDefaultPrevented: ke,
          isPropagationStopped: ke,
          isImmediatePropagationStopped: ke,
          isSimulated: !1,
          preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Ee), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
          },
      }),
      w.each(
          {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                  var t = e.button;
                  return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Te.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
              },
          },
          w.event.addProp
      ),
      w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
          w.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                  var n,
                      r = this,
                      i = e.relatedTarget,
                      o = e.handleObj;
                  return (i && (i === r || w.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
              },
          };
      }),
      w.fn.extend({
          on: function (e, t, n, r) {
              return De(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
              return De(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
              if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
              }
              return (
                  (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                      w.event.remove(this, e, n, t);
                  })
              );
          },
      });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
      return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }
  function He(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
  }
  function Pe(e, t) {
      var n, r, i, o, a, s, u, l;
      if (1 === t.nodeType) {
          if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))) {
              delete a.handle, (a.events = {});
              for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
          }
          K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
      }
  }
  function Me(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
      t = a.apply([], t);
      var i,
          o,
          s,
          u,
          l,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          y = t[0],
          v = g(y);
      if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
          return e.each(function (i) {
              var o = e.eq(i);
              v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
          });
      if (p && ((i = xe(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
          for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
          if (u)
              for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                  (l = s[f]), he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
      return e;
  }
  function Ie(e, t, n) {
      for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
      return e;
  }
  w.extend({
      htmlPrefilter: function (e) {
          return e.replace(Ne, "<$1></$2>");
      },
      clone: function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.cloneNode(!0),
              u = w.contains(e.ownerDocument, e);
          if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
          if (t)
              if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
              else Pe(e, s);
          return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
      },
      cleanData: function (e) {
          for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (Y(n)) {
                  if ((t = n[J.expando])) {
                      if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                      n[J.expando] = void 0;
                  }
                  n[K.expando] && (n[K.expando] = void 0);
              }
      },
  }),
      w.fn.extend({
          detach: function (e) {
              return Ie(this, e, !0);
          },
          remove: function (e) {
              return Ie(this, e);
          },
          text: function (e) {
              return z(
                  this,
                  function (e) {
                      return void 0 === e
                          ? w.text(this)
                          : this.empty().each(function () {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                            });
                  },
                  null,
                  e,
                  arguments.length
              );
          },
          append: function () {
              return Re(this, arguments, function (e) {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
              });
          },
          prepend: function () {
              return Re(this, arguments, function (e) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var t = Le(this, e);
                      t.insertBefore(e, t.firstChild);
                  }
              });
          },
          before: function () {
              return Re(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
              });
          },
          after: function () {
              return Re(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
          },
          empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
              return this;
          },
          clone: function (e, t) {
              return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                      return w.clone(this, e, t);
                  })
              );
          },
          html: function (e) {
              return z(
                  this,
                  function (e) {
                      var t = this[0] || {},
                          n = 0,
                          r = this.length;
                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                      if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                          e = w.htmlPrefilter(e);
                          try {
                              for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                              t = 0;
                          } catch (e) {}
                      }
                      t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
              );
          },
          replaceWith: function () {
              var e = [];
              return Re(
                  this,
                  arguments,
                  function (t) {
                      var n = this.parentNode;
                      w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                  },
                  e
              );
          },
      }),
      w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
          w.fn[e] = function (e) {
              for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
              return this.pushStack(r);
          };
      });
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function (t) {
          var n = t.ownerDocument.defaultView;
          return (n && n.opener) || (n = e), n.getComputedStyle(t);
      },
      Be = new RegExp(oe.join("|"), "i");
  !(function () {
      function t() {
          if (c) {
              (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  be.appendChild(l).appendChild(c);
              var t = e.getComputedStyle(c);
              (i = "1%" !== t.top),
                  (u = 12 === n(t.marginLeft)),
                  (c.style.right = "60%"),
                  (s = 36 === n(t.right)),
                  (o = 36 === n(t.width)),
                  (c.style.position = "absolute"),
                  (a = 36 === c.offsetWidth || "absolute"),
                  be.removeChild(l),
                  (c = null);
          }
      }
      function n(e) {
          return Math.round(parseFloat(e));
      }
      var i,
          o,
          a,
          s,
          u,
          l = r.createElement("div"),
          c = r.createElement("div");
      c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
          w.extend(h, {
              boxSizingReliable: function () {
                  return t(), o;
              },
              pixelBoxStyles: function () {
                  return t(), s;
              },
              pixelPosition: function () {
                  return t(), i;
              },
              reliableMarginLeft: function () {
                  return t(), u;
              },
              scrollboxSize: function () {
                  return t(), a;
              },
          }));
  })();
  function Fe(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.style;
      return (
          (n = n || $e(e)) &&
              ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
              !h.pixelBoxStyles() && We.test(a) && Be.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
      );
  }
  function _e(e, t) {
      return {
          get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
          },
      };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      Ve = { letterSpacing: "0", fontWeight: "400" },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;
  function Qe(e) {
      if (e in Ye) return e;
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ge.length;
      while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
      var t = w.cssProps[e];
      return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }
  function Ke(e, t, n) {
      var r = ie.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
          "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
              r
                  ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                  : ((u += w.css(e, "padding" + oe[a], !0, i)), "padding" !== n ? (u += w.css(e, "border" + oe[a] + "Width", !0, i)) : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
      return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
  }
  function et(e, t, n) {
      var r = $e(e),
          i = Fe(e, t, r),
          o = "border-box" === w.css(e, "boxSizing", !1, r),
          a = o;
      if (We.test(i)) {
          if (!n) return i;
          i = "auto";
      }
      return (
          (a = a && (h.boxSizingReliable() || i === e.style[t])),
          ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
          (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
      );
  }
  w.extend({
      cssHooks: {
          opacity: {
              get: function (e, t) {
                  if (t) {
                      var n = Fe(e, "opacity");
                      return "" === n ? "1" : n;
                  }
              },
          },
      },
      cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
      cssProps: {},
      style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                  o,
                  a,
                  s = G(t),
                  u = Xe.test(t),
                  l = e.style;
              if ((u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                  null != n &&
                      n === n &&
                      ("number" === o && (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                      h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                      (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
          }
      },
      css: function (e, t, n, r) {
          var i,
              o,
              a,
              s = G(t);
          return (
              Xe.test(t) || (t = Je(s)),
              (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
              void 0 === i && (i = Fe(e, t, r)),
              "normal" === i && t in Ve && (i = Ve[t]),
              "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
          );
      },
  }),
      w.each(["height", "width"], function (e, t) {
          w.cssHooks[t] = {
              get: function (e, n, r) {
                  if (n)
                      return !ze.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                          ? et(e, t, r)
                          : se(e, Ue, function () {
                                return et(e, t, r);
                            });
              },
              set: function (e, n, r) {
                  var i,
                      o = $e(e),
                      a = "border-box" === w.css(e, "boxSizing", !1, o),
                      s = r && Ze(e, t, r, a, o);
                  return (
                      a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - 0.5)),
                      s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                      Ke(e, n, s)
                  );
              },
          };
      }),
      (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
          if (t)
              return (
                  (parseFloat(Fe(e, "marginLeft")) ||
                      e.getBoundingClientRect().left -
                          se(e, { marginLeft: 0 }, function () {
                              return e.getBoundingClientRect().left;
                          })) + "px"
              );
      })),
      w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (w.cssHooks[e + t] = {
              expand: function (n) {
                  for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                  return i;
              },
          }),
              "margin" !== e && (w.cssHooks[e + t].set = Ke);
      }),
      w.fn.extend({
          css: function (e, t) {
              return z(
                  this,
                  function (e, t, n) {
                      var r,
                          i,
                          o = {},
                          a = 0;
                      if (Array.isArray(t)) {
                          for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                          return o;
                      }
                      return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
              );
          },
      });
  function tt(e, t, n, r, i) {
      return new tt.prototype.init(e, t, n, r, i);
  }
  (w.Tween = tt),
      (tt.prototype = {
          constructor: tt,
          init: function (e, t, n, r, i, o) {
              (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
              var e = tt.propHooks[this.prop];
              return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
          },
          run: function (e) {
              var t,
                  n = tt.propHooks[this.prop];
              return (
                  this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                  this
              );
          },
      }),
      (tt.prototype.init.prototype = tt.prototype),
      (tt.propHooks = {
          _default: {
              get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
              },
              set: function (e) {
                  w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
              },
          },
      }),
      (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
          set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
      }),
      (w.easing = {
          linear: function (e) {
              return e;
          },
          swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
      }),
      (w.fx = tt.prototype.init),
      (w.fx.step = {});
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;
  function at() {
      rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }
  function st() {
      return (
          e.setTimeout(function () {
              nt = void 0;
          }),
          (nt = Date.now())
      );
  }
  function ut(e, t) {
      var n,
          r = 0,
          i = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
      for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = J.get(e, "fxshow");
      n.queue ||
          (null == (a = w._queueHooks(e, "fx")).unqueued &&
              ((a.unqueued = 0),
              (s = a.empty.fire),
              (a.empty.fire = function () {
                  a.unqueued || s();
              })),
          a.unqueued++,
          p.always(function () {
              p.always(function () {
                  a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
              });
          }));
      for (r in t)
          if (((i = t[r]), it.test(i))) {
              if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                  if ("show" !== i || !y || void 0 === y[r]) continue;
                  g = !0;
              }
              d[r] = (y && y[r]) || w.style(e, r);
          }
      if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
          f &&
              1 === e.nodeType &&
              ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
              null == (l = y && y.display) && (l = J.get(e, "display")),
              "none" === (c = w.css(e, "display")) && (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), fe([e]))),
              ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === w.css(e, "float") &&
                  (u ||
                      (p.done(function () {
                          h.display = l;
                      }),
                      null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                  ((h.overflow = "hidden"),
                  p.always(function () {
                      (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                  })),
              (u = !1);
          for (r in d)
              u ||
                  (y ? "hidden" in y && (g = y.hidden) : (y = J.access(e, "fxshow", { display: l })),
                  o && (y.hidden = !g),
                  g && fe([e], !0),
                  p.done(function () {
                      g || fe([e]), J.remove(e, "fxshow");
                      for (r in d) w.style(e, r, d[r]);
                  })),
                  (u = lt(g ? y[r] : 0, r, p)),
                  r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      }
  }
  function ft(e, t) {
      var n, r, i, o, a;
      for (n in e)
          if (((r = G(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = w.cssHooks[r]) && "expand" in a)) {
              (o = a.expand(o)), delete e[r];
              for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
          } else t[r] = i;
  }
  function pt(e, t, n) {
      var r,
          i,
          o = 0,
          a = pt.prefilters.length,
          s = w.Deferred().always(function () {
              delete u.elem;
          }),
          u = function () {
              if (i) return !1;
              for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
              return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
          },
          l = s.promise({
              elem: e,
              props: w.extend({}, t),
              opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: nt || st(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                  var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                  return l.tweens.push(r), r;
              },
              stop: function (t) {
                  var n = 0,
                      r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
              },
          }),
          c = l.props;
      for (ft(c, l.opts.specialEasing); o < a; o++) if ((r = pt.prefilters[o].call(l, e, c, l.opts))) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      return (
          w.map(c, lt, l),
          g(l.opts.start) && l.opts.start.call(e, l),
          l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
          w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
          l
      );
  }
  (w.Animation = w.extend(pt, {
      tweeners: {
          "*": [
              function (e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, ie.exec(t), n), n;
              },
          ],
      },
      tweener: function (e, t) {
          g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
          for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
      },
      prefilters: [ct],
      prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
      },
  })),
      (w.speed = function (e, t, n) {
          var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
          return (
              w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                  g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
              }),
              r
          );
      }),
      w.fn.extend({
          fadeTo: function (e, t, n, r) {
              return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
              var i = w.isEmptyObject(e),
                  o = w.speed(t, n, r),
                  a = function () {
                      var t = pt(this, w.extend({}, e), o);
                      (i || J.get(this, "finish")) && t.stop(!0);
                  };
              return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
          },
          stop: function (e, t, n) {
              var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
              };
              return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && !1 !== e && this.queue(e || "fx", []),
                  this.each(function () {
                      var t = !0,
                          i = null != e && e + "queueHooks",
                          o = w.timers,
                          a = J.get(this);
                      if (i) a[i] && a[i].stop && r(a[i]);
                      else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                      for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                      (!t && n) || w.dequeue(this, e);
                  })
              );
          },
          finish: function (e) {
              return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                      var t,
                          n = J.get(this),
                          r = n[e + "queue"],
                          i = n[e + "queueHooks"],
                          o = w.timers,
                          a = r ? r.length : 0;
                      for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                      for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                      delete n.finish;
                  })
              );
          },
      }),
      w.each(["toggle", "show", "hide"], function (e, t) {
          var n = w.fn[t];
          w.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
          };
      }),
      w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
          w.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
          };
      }),
      (w.timers = []),
      (w.fx.tick = function () {
          var e,
              t = 0,
              n = w.timers;
          for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), (nt = void 0);
      }),
      (w.fx.timer = function (e) {
          w.timers.push(e), w.fx.start();
      }),
      (w.fx.interval = 13),
      (w.fx.start = function () {
          rt || ((rt = !0), at());
      }),
      (w.fx.stop = function () {
          rt = null;
      }),
      (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (w.fn.delay = function (t, n) {
          return (
              (t = w.fx ? w.fx.speeds[t] || t : t),
              (n = n || "fx"),
              this.queue(n, function (n, r) {
                  var i = e.setTimeout(n, t);
                  r.stop = function () {
                      e.clearTimeout(i);
                  };
              })
          );
      }),
      (function () {
          var e = r.createElement("input"),
              t = r.createElement("select").appendChild(r.createElement("option"));
          (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
      })();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
      attr: function (e, t) {
          return z(this, w.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
          return this.each(function () {
              w.removeAttr(this, e);
          });
      },
  }),
      w.extend({
          attr: function (e, t, n) {
              var r,
                  i,
                  o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                  return "undefined" == typeof e.getAttribute
                      ? w.prop(e, t, n)
                      : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                        void 0 !== n
                            ? null === n
                                ? void w.removeAttr(e, t)
                                : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e.setAttribute(t, n + ""), n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : null == (r = w.find.attr(e, t))
                            ? void 0
                            : r);
          },
          attrHooks: {
              type: {
                  set: function (e, t) {
                      if (!h.radioValue && "radio" === t && N(e, "input")) {
                          var n = e.value;
                          return e.setAttribute("type", t), n && (e.value = n), t;
                      }
                  },
              },
          },
          removeAttr: function (e, t) {
              var n,
                  r = 0,
                  i = t && t.match(M);
              if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
          },
      }),
      (dt = {
          set: function (e, t, n) {
              return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
      }),
      w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = ht[t] || w.find.attr;
          ht[t] = function (e, t, r) {
              var i,
                  o,
                  a = t.toLowerCase();
              return r || ((o = ht[a]), (ht[a] = i), (i = null != n(e, t, r) ? a : null), (ht[a] = o)), i;
          };
      });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
      prop: function (e, t) {
          return z(this, w.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
          return this.each(function () {
              delete this[w.propFix[e] || e];
          });
      },
  }),
      w.extend({
          prop: function (e, t, n) {
              var r,
                  i,
                  o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                  return (
                      (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                      void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                  );
          },
          propHooks: {
              tabIndex: {
                  get: function (e) {
                      var t = w.find.attr(e, "tabindex");
                      return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                  },
              },
          },
          propFix: { for: "htmlFor", class: "className" },
      }),
      h.optSelected ||
          (w.propHooks.selected = {
              get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                  var t = e.parentNode;
                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
          }),
      w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          w.propFix[this.toLowerCase()] = this;
      });
  function vt(e) {
      return (e.match(M) || []).join(" ");
  }
  function mt(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
      addClass: function (e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
          if (g(e))
              return this.each(function (t) {
                  w(this).addClass(e.call(this, t, mt(this)));
              });
          if ((t = xt(e)).length)
              while ((n = this[u++]))
                  if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                      a = 0;
                      while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s);
                  }
          return this;
      },
      removeClass: function (e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
          if (g(e))
              return this.each(function (t) {
                  w(this).removeClass(e.call(this, t, mt(this)));
              });
          if (!arguments.length) return this.attr("class", "");
          if ((t = xt(e)).length)
              while ((n = this[u++]))
                  if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                      a = 0;
                      while ((o = t[a++])) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s);
                  }
          return this;
      },
      toggleClass: function (e, t) {
          var n = typeof e,
              r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r
              ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
              : g(e)
              ? this.each(function (n) {
                    w(this).toggleClass(e.call(this, n, mt(this), t), t);
                })
              : this.each(function () {
                    var t, i, o, a;
                    if (r) {
                        (i = 0), (o = w(this)), (a = xt(e));
                        while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                });
      },
      hasClass: function (e) {
          var t,
              n,
              r = 0;
          t = " " + e + " ";
          while ((n = this[r++])) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
          return !1;
      },
  });
  var bt = /\r/g;
  w.fn.extend({
      val: function (e) {
          var t,
              n,
              r,
              i = this[0];
          {
              if (arguments.length)
                  return (
                      (r = g(e)),
                      this.each(function (n) {
                          var i;
                          1 === this.nodeType &&
                              (null == (i = r ? e.call(this, n, w(this).val()) : e)
                                  ? (i = "")
                                  : "number" == typeof i
                                  ? (i += "")
                                  : Array.isArray(i) &&
                                    (i = w.map(i, function (e) {
                                        return null == e ? "" : e + "";
                                    })),
                              ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                      })
                  );
              if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
          }
      },
  }),
      w.extend({
          valHooks: {
              option: {
                  get: function (e) {
                      var t = w.find.attr(e, "value");
                      return null != t ? t : vt(w.text(e));
                  },
              },
              select: {
                  get: function (e) {
                      var t,
                          n,
                          r,
                          i = e.options,
                          o = e.selectedIndex,
                          a = "select-one" === e.type,
                          s = a ? null : [],
                          u = a ? o + 1 : i.length;
                      for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                          if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                              if (((t = w(n).val()), a)) return t;
                              s.push(t);
                          }
                      return s;
                  },
                  set: function (e, t) {
                      var n,
                          r,
                          i = e.options,
                          o = w.makeArray(t),
                          a = i.length;
                      while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                      return n || (e.selectedIndex = -1), o;
                  },
              },
          },
      }),
      w.each(["radio", "checkbox"], function () {
          (w.valHooks[this] = {
              set: function (e, t) {
                  if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
              },
          }),
              h.checkOn ||
                  (w.valHooks[this].get = function (e) {
                      return null === e.getAttribute("value") ? "on" : e.value;
                  });
      }),
      (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function (e) {
          e.stopPropagation();
      };
  w.extend(w.event, {
      trigger: function (t, n, i, o) {
          var a,
              s,
              u,
              l,
              c,
              p,
              d,
              h,
              v = [i || r],
              m = f.call(t, "type") ? t.type : t,
              x = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
              ((s = h = u = i = i || r),
              3 !== i.nodeType &&
                  8 !== i.nodeType &&
                  !wt.test(m + w.event.triggered) &&
                  (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
                  (t.isTrigger = o ? 2 : 3),
                  (t.namespace = x.join(".")),
                  (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (t.result = void 0),
                  t.target || (t.target = i),
                  (n = null == n ? [t] : w.makeArray(n, [t])),
                  (d = w.event.special[m] || {}),
                  o || !d.trigger || !1 !== d.trigger.apply(i, n)))
          ) {
              if (!o && !d.noBubble && !y(i)) {
                  for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
                  u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
              }
              a = 0;
              while ((s = v[a++]) && !t.isPropagationStopped())
                  (h = s),
                      (t.type = a > 1 ? l : d.bindType || m),
                      (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                      (p = c && s[c]) && p.apply && Y(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
              return (
                  (t.type = m),
                  o ||
                      t.isDefaultPrevented() ||
                      (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                      !Y(i) ||
                      (c &&
                          g(i[m]) &&
                          !y(i) &&
                          ((u = i[c]) && (i[c] = null),
                          (w.event.triggered = m),
                          t.isPropagationStopped() && h.addEventListener(m, Tt),
                          i[m](),
                          t.isPropagationStopped() && h.removeEventListener(m, Tt),
                          (w.event.triggered = void 0),
                          u && (i[c] = u))),
                  t.result
              );
          }
      },
      simulate: function (e, t, n) {
          var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
          w.event.trigger(r, null, t);
      },
  }),
      w.fn.extend({
          trigger: function (e, t) {
              return this.each(function () {
                  w.event.trigger(e, t, this);
              });
          },
          triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return w.event.trigger(e, t, n, !0);
          },
      }),
      h.focusin ||
          w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                  w.event.simulate(t, e.target, w.event.fix(e));
              };
              w.event.special[t] = {
                  setup: function () {
                      var r = this.ownerDocument || this,
                          i = J.access(r, t);
                      i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                      var r = this.ownerDocument || this,
                          i = J.access(r, t) - 1;
                      i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                  },
              };
          });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;
  w.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
          n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
          n = void 0;
      }
      return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
  };
  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
      var i;
      if (Array.isArray(t))
          w.each(t, function (t, i) {
              n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
          });
      else if (n || "object" !== x(t)) r(e, t);
      else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
      var n,
          r = [],
          i = function (e, t) {
              var n = g(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
          };
      if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
          w.each(e, function () {
              i(this.name, this.value);
          });
      else for (n in e) jt(n, e[n], t, i);
      return r.join("&");
  }),
      w.fn.extend({
          serialize: function () {
              return w.param(this.serializeArray());
          },
          serializeArray: function () {
              return this.map(function () {
                  var e = w.prop(this, "elements");
                  return e ? w.makeArray(e) : this;
              })
                  .filter(function () {
                      var e = this.type;
                      return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                  })
                  .map(function (e, t) {
                      var n = w(this).val();
                      return null == n
                          ? null
                          : Array.isArray(n)
                          ? w.map(n, function (e) {
                                return { name: t.name, value: e.replace(Dt, "\r\n") };
                            })
                          : { name: t.name, value: n.replace(Dt, "\r\n") };
                  })
                  .get();
          },
      });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
      return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
              i = 0,
              o = t.toLowerCase().match(M) || [];
          if (g(n)) while ((r = o[i++])) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      };
  }
  function _t(e, t, n, r) {
      var i = {},
          o = e === Wt;
      function a(s) {
          var u;
          return (
              (i[s] = !0),
              w.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
              }),
              u
          );
      }
      return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
      var n,
          r,
          i = w.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.contents,
          u = e.dataTypes;
      while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (i in s)
              if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break;
              }
      if (u[0] in n) o = u[0];
      else {
          for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break;
              }
              a || (a = i);
          }
          o = o || a;
      }
      if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Ut(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = {},
          c = e.dataTypes.slice();
      if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
      o = c.shift();
      while (o)
          if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
                  if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                              !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                              break;
                          }
                  if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                          try {
                              t = a(t);
                          } catch (e) {
                              return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                          }
              }
      return { state: "success", data: t };
  }
  w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal: Pt.test(Ct.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
          converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
          flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
          return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(It),
      ajaxTransport: Ft(Wt),
      ajax: function (t, n) {
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h = w.ajaxSetup({}, n),
              g = h.context || h,
              y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
              v = w.Deferred(),
              m = w.Callbacks("once memory"),
              x = h.statusCode || {},
              b = {},
              T = {},
              C = "canceled",
              E = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                      var t;
                      if (c) {
                          if (!s) {
                              s = {};
                              while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                          }
                          t = s[e.toLowerCase()];
                      }
                      return null == t ? null : t;
                  },
                  getAllResponseHeaders: function () {
                      return c ? a : null;
                  },
                  setRequestHeader: function (e, t) {
                      return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                      return null == c && (h.mimeType = e), this;
                  },
                  statusCode: function (e) {
                      var t;
                      if (e)
                          if (c) E.always(e[E.status]);
                          else for (t in e) x[t] = [x[t], e[t]];
                      return this;
                  },
                  abort: function (e) {
                      var t = e || C;
                      return i && i.abort(t), k(0, t), this;
                  },
              };
          if (
              (v.promise(E),
              (h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//")),
              (h.type = n.method || n.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
              null == h.crossDomain)
          ) {
              l = r.createElement("a");
              try {
                  (l.href = h.url), (l.href = l.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
              } catch (e) {
                  h.crossDomain = !0;
              }
          }
          if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)) return E;
          (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Mt.test(h.type)),
              (o = h.url.replace(Lt, "")),
              h.hasContent
                  ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+"))
                  : ((d = h.url.slice(o.length)),
                    h.data && (h.processData || "string" == typeof h.data) && ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                    !1 === h.cache && ((o = o.replace(Ht, "$1")), (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                    (h.url = o + d)),
              h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
              ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
              E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
          for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
          if (((C = "abort"), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = _t(Wt, h, n, E)))) {
              if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c)) return E;
              h.async &&
                  h.timeout > 0 &&
                  (u = e.setTimeout(function () {
                      E.abort("timeout");
                  }, h.timeout));
              try {
                  (c = !1), i.send(b, k);
              } catch (e) {
                  if (c) throw e;
                  k(-1, e);
              }
          } else k(-1, "No Transport");
          function k(t, n, r, s) {
              var l,
                  p,
                  d,
                  b,
                  T,
                  C = n;
              c ||
                  ((c = !0),
                  u && e.clearTimeout(u),
                  (i = void 0),
                  (a = s || ""),
                  (E.readyState = t > 0 ? 4 : 0),
                  (l = (t >= 200 && t < 300) || 304 === t),
                  r && (b = Xt(h, E, r)),
                  (b = Ut(h, b, E, l)),
                  l
                      ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                        204 === t || "HEAD" === h.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                      : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                  (E.status = t),
                  (E.statusText = (n || C) + ""),
                  l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                  E.statusCode(x),
                  (x = void 0),
                  f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                  m.fireWith(g, [E, C]),
                  f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
          }
          return E;
      },
      getJSON: function (e, t, n) {
          return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
          return w.get(e, void 0, t, "script");
      },
  }),
      w.each(["get", "post"], function (e, t) {
          w[t] = function (e, n, r, i) {
              return g(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
          };
      }),
      (w._evalUrl = function (e) {
          return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
      }),
      w.fn.extend({
          wrapAll: function (e) {
              var t;
              return (
                  this[0] &&
                      (g(e) && (e = e.call(this[0])),
                      (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && t.insertBefore(this[0]),
                      t
                          .map(function () {
                              var e = this;
                              while (e.firstElementChild) e = e.firstElementChild;
                              return e;
                          })
                          .append(this)),
                  this
              );
          },
          wrapInner: function (e) {
              return g(e)
                  ? this.each(function (t) {
                        w(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
          },
          wrap: function (e) {
              var t = g(e);
              return this.each(function (n) {
                  w(this).wrapAll(t ? e.call(this, n) : e);
              });
          },
          unwrap: function (e) {
              return (
                  this.parent(e)
                      .not("body")
                      .each(function () {
                          w(this).replaceWith(this.childNodes);
                      }),
                  this
              );
          },
      }),
      (w.expr.pseudos.hidden = function (e) {
          return !w.expr.pseudos.visible(e);
      }),
      (w.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (w.ajaxSettings.xhr = function () {
          try {
              return new e.XMLHttpRequest();
          } catch (e) {}
      });
  var Vt = { 0: 200, 1223: 204 },
      Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && "withCredentials" in Gt),
      (h.ajax = Gt = !!Gt),
      w.ajaxTransport(function (t) {
          var n, r;
          if (h.cors || (Gt && !t.crossDomain))
              return {
                  send: function (i, o) {
                      var a,
                          s = t.xhr();
                      if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                      t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                      for (a in i) s.setRequestHeader(a, i[a]);
                      (n = function (e) {
                          return function () {
                              n &&
                                  ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                  "abort" === e
                                      ? s.abort()
                                      : "error" === e
                                      ? "number" != typeof s.status
                                          ? o(0, "error")
                                          : o(s.status, s.statusText)
                                      : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                          };
                      }),
                          (s.onload = n()),
                          (r = s.onerror = s.ontimeout = n("error")),
                          void 0 !== s.onabort
                              ? (s.onabort = r)
                              : (s.onreadystatechange = function () {
                                    4 === s.readyState &&
                                        e.setTimeout(function () {
                                            n && r();
                                        });
                                }),
                          (n = n("abort"));
                      try {
                          s.send((t.hasContent && t.data) || null);
                      } catch (e) {
                          if (n) throw e;
                      }
                  },
                  abort: function () {
                      n && n();
                  },
              };
      }),
      w.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
      }),
      w.ajaxSetup({
          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
              "text script": function (e) {
                  return w.globalEval(e), e;
              },
          },
      }),
      w.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      w.ajaxTransport("script", function (e) {
          if (e.crossDomain) {
              var t, n;
              return {
                  send: function (i, o) {
                      (t = w("<script>")
                          .prop({ charset: e.scriptCharset, src: e.url })
                          .on(
                              "load error",
                              (n = function (e) {
                                  t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                              })
                          )),
                          r.head.appendChild(t[0]);
                  },
                  abort: function () {
                      n && n();
                  },
              };
          }
      });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
          var e = Yt.pop() || w.expando + "_" + Et++;
          return (this[e] = !0), e;
      },
  }),
      w.ajaxPrefilter("json jsonp", function (t, n, r) {
          var i,
              o,
              a,
              s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
          if (s || "jsonp" === t.dataTypes[0])
              return (
                  (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                  s ? (t[s] = t[s].replace(Qt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                  (t.converters["script json"] = function () {
                      return a || w.error(i + " was not called"), a[0];
                  }),
                  (t.dataTypes[0] = "json"),
                  (o = e[i]),
                  (e[i] = function () {
                      a = arguments;
                  }),
                  r.always(function () {
                      void 0 === o ? w(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)), a && g(o) && o(a[0]), (a = o = void 0);
                  }),
                  "script"
              );
      }),
      (h.createHTMLDocument = (function () {
          var e = r.implementation.createHTMLDocument("").body;
          return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
      })()),
      (w.parseHTML = function (e, t, n) {
          if ("string" != typeof e) return [];
          "boolean" == typeof t && ((n = t), (t = !1));
          var i, o, a;
          return (
              t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
              (o = A.exec(e)),
              (a = !n && []),
              o ? [t.createElement(o[1])] : ((o = xe([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes))
          );
      }),
      (w.fn.load = function (e, t, n) {
          var r,
              i,
              o,
              a = this,
              s = e.indexOf(" ");
          return (
              s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
              g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
              a.length > 0 &&
                  w
                      .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                      .done(function (e) {
                          (o = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                      })
                      .always(
                          n &&
                              function (e, t) {
                                  a.each(function () {
                                      n.apply(this, o || [e.responseText, t, e]);
                                  });
                              }
                      ),
              this
          );
      }),
      w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          w.fn[t] = function (e) {
              return this.on(t, e);
          };
      }),
      (w.expr.pseudos.animated = function (e) {
          return w.grep(w.timers, function (t) {
              return e === t.elem;
          }).length;
      }),
      (w.offset = {
          setOffset: function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = w.css(e, "position"),
                  f = w(e),
                  p = {};
              "static" === c && (e.style.position = "relative"),
                  (s = f.offset()),
                  (o = w.css(e, "top")),
                  (u = w.css(e, "left")),
                  (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? ((a = (r = f.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  g(t) && (t = t.call(e, n, w.extend({}, s))),
                  null != t.top && (p.top = t.top - s.top + a),
                  null != t.left && (p.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, p) : f.css(p);
          },
      }),
      w.fn.extend({
          offset: function (e) {
              if (arguments.length)
                  return void 0 === e
                      ? this
                      : this.each(function (t) {
                            w.offset.setOffset(this, e, t);
                        });
              var t,
                  n,
                  r = this[0];
              if (r) return r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
          },
          position: function () {
              if (this[0]) {
                  var e,
                      t,
                      n,
                      r = this[0],
                      i = { top: 0, left: 0 };
                  if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                  else {
                      (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                      while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                      e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                  }
                  return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
              }
          },
          offsetParent: function () {
              return this.map(function () {
                  var e = this.offsetParent;
                  while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                  return e || be;
              });
          },
      }),
      w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
          var n = "pageYOffset" === t;
          w.fn[e] = function (r) {
              return z(
                  this,
                  function (e, r, i) {
                      var o;
                      if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                      o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                  },
                  e,
                  r,
                  arguments.length
              );
          };
      }),
      w.each(["top", "left"], function (e, t) {
          w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
              if (n) return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
          });
      }),
      w.each({ Height: "height", Width: "width" }, function (e, t) {
          w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
              w.fn[r] = function (i, o) {
                  var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                  return z(
                      this,
                      function (t, n, i) {
                          var o;
                          return y(t)
                              ? 0 === r.indexOf("outer")
                                  ? t["inner" + e]
                                  : t.document.documentElement["client" + e]
                              : 9 === t.nodeType
                              ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                              : void 0 === i
                              ? w.css(t, n, s)
                              : w.style(t, n, i, s);
                      },
                      t,
                      a ? i : void 0,
                      a
                  );
              };
          });
      }),
      w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
          w.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
          };
      }),
      w.fn.extend({
          hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
          },
      }),
      w.fn.extend({
          bind: function (e, t, n) {
              return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
              return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
      }),
      (w.proxy = function (e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
              return (
                  (r = o.call(arguments, 2)),
                  (i = function () {
                      return e.apply(t || this, r.concat(o.call(arguments)));
                  }),
                  (i.guid = e.guid = e.guid || w.guid++),
                  i
              );
      }),
      (w.holdReady = function (e) {
          e ? w.readyWait++ : w.ready(!0);
      }),
      (w.isArray = Array.isArray),
      (w.parseJSON = JSON.parse),
      (w.nodeName = N),
      (w.isFunction = g),
      (w.isWindow = y),
      (w.camelCase = G),
      (w.type = x),
      (w.now = Date.now),
      (w.isNumeric = function (e) {
          var t = w.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      }),
      "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
              return w;
          });
  var Jt = e.jQuery,
      Kt = e.$;
  return (
      (w.noConflict = function (t) {
          return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
      }),
      t || (e.jQuery = e.$ = w),
      w
  );
});

/*!
* Bootstrap v4.1.1 (https://getbootstrap.com/)
* Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, c) {
  "use strict";
  function i(t, e) {
      for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
  }
  function o(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
  }
  function h(r) {
      for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
              e = Object.keys(s);
          "function" == typeof Object.getOwnPropertySymbols &&
              (e = e.concat(
                  Object.getOwnPropertySymbols(s).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(s, t).enumerable;
                  })
              )),
              e.forEach(function (t) {
                  var e, n, i;
                  (e = r), (i = s[(n = t)]), n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i);
              });
      }
      return r;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e), (c = c && c.hasOwnProperty("default") ? c.default : c);
  var r,
      n,
      s,
      a,
      l,
      u,
      f,
      d,
      _,
      g,
      m,
      p,
      v,
      E,
      y,
      T,
      C,
      I,
      A,
      D,
      b,
      S,
      w,
      N,
      O,
      k,
      P,
      L,
      j,
      R,
      H,
      W,
      M,
      x,
      U,
      K,
      F,
      V,
      Q,
      B,
      Y,
      G,
      q,
      z,
      X,
      J,
      Z,
      $,
      tt,
      et,
      nt,
      it,
      rt,
      st,
      ot,
      at,
      lt,
      ht,
      ct,
      ut,
      ft,
      dt,
      _t,
      gt,
      mt,
      pt,
      vt,
      Et,
      yt,
      Tt,
      Ct,
      It,
      At,
      Dt,
      bt,
      St,
      wt,
      Nt,
      Ot,
      kt,
      Pt,
      Lt,
      jt,
      Rt,
      Ht,
      Wt,
      Mt,
      xt,
      Ut,
      Kt,
      Ft,
      Vt,
      Qt,
      Bt,
      Yt,
      Gt,
      qt,
      zt,
      Xt,
      Jt,
      Zt,
      $t,
      te,
      ee,
      ne,
      ie,
      re,
      se,
      oe,
      ae,
      le,
      he,
      ce,
      ue,
      fe,
      de,
      _e,
      ge,
      me,
      pe,
      ve,
      Ee,
      ye,
      Te,
      Ce,
      Ie,
      Ae,
      De,
      be,
      Se,
      we,
      Ne,
      Oe,
      ke,
      Pe,
      Le,
      je,
      Re,
      He,
      We,
      Me,
      xe,
      Ue,
      Ke,
      Fe,
      Ve,
      Qe,
      Be,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      sn,
      on,
      an,
      ln,
      hn,
      cn,
      un,
      fn,
      dn,
      _n,
      gn,
      mn,
      pn,
      vn,
      En,
      yn,
      Tn,
      Cn = (function (i) {
          var e = "transitionend";
          function t(t) {
              var e = this,
                  n = !1;
              return (
                  i(this).one(l.TRANSITION_END, function () {
                      n = !0;
                  }),
                  setTimeout(function () {
                      n || l.triggerTransitionEnd(e);
                  }, t),
                  this
              );
          }
          var l = {
              TRANSITION_END: "bsTransitionEnd",
              getUID: function (t) {
                  for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
                  return t;
              },
              getSelectorFromElement: function (t) {
                  var e = t.getAttribute("data-target");
                  (e && "#" !== e) || (e = t.getAttribute("href") || "");
                  try {
                      return 0 < i(document).find(e).length ? e : null;
                  } catch (t) {
                      return null;
                  }
              },
              getTransitionDurationFromElement: function (t) {
                  if (!t) return 0;
                  var e = i(t).css("transition-duration");
                  return parseFloat(e) ? ((e = e.split(",")[0]), 1e3 * parseFloat(e)) : 0;
              },
              reflow: function (t) {
                  return t.offsetHeight;
              },
              triggerTransitionEnd: function (t) {
                  i(t).trigger(e);
              },
              supportsTransitionEnd: function () {
                  return Boolean(e);
              },
              isElement: function (t) {
                  return (t[0] || t).nodeType;
              },
              typeCheckConfig: function (t, e, n) {
                  for (var i in n)
                      if (Object.prototype.hasOwnProperty.call(n, i)) {
                          var r = n[i],
                              s = e[i],
                              o =
                                  s && l.isElement(s)
                                      ? "element"
                                      : ((a = s),
                                        {}.toString
                                            .call(a)
                                            .match(/\s([a-z]+)/i)[1]
                                            .toLowerCase());
                          if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
                      }
                  var a;
              },
          };
          return (
              (i.fn.emulateTransitionEnd = t),
              (i.event.special[l.TRANSITION_END] = {
                  bindType: e,
                  delegateType: e,
                  handle: function (t) {
                      if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                  },
              }),
              l
          );
      })(e),
      In =
          ((n = "alert"),
          (a = "." + (s = "bs.alert")),
          (l = (r = e).fn[n]),
          (u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }),
          (f = "alert"),
          (d = "fade"),
          (_ = "show"),
          (g = (function () {
              function i(t) {
                  this._element = t;
              }
              var t = i.prototype;
              return (
                  (t.close = function (t) {
                      var e = this._element;
                      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
                  }),
                  (t.dispose = function () {
                      r.removeData(this._element, s), (this._element = null);
                  }),
                  (t._getRootElement = function (t) {
                      var e = Cn.getSelectorFromElement(t),
                          n = !1;
                      return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
                  }),
                  (t._triggerCloseEvent = function (t) {
                      var e = r.Event(u.CLOSE);
                      return r(t).trigger(e), e;
                  }),
                  (t._removeElement = function (e) {
                      var n = this;
                      if ((r(e).removeClass(_), r(e).hasClass(d))) {
                          var t = Cn.getTransitionDurationFromElement(e);
                          r(e)
                              .one(Cn.TRANSITION_END, function (t) {
                                  return n._destroyElement(e, t);
                              })
                              .emulateTransitionEnd(t);
                      } else this._destroyElement(e);
                  }),
                  (t._destroyElement = function (t) {
                      r(t).detach().trigger(u.CLOSED).remove();
                  }),
                  (i._jQueryInterface = function (n) {
                      return this.each(function () {
                          var t = r(this),
                              e = t.data(s);
                          e || ((e = new i(this)), t.data(s, e)), "close" === n && e[n](this);
                      });
                  }),
                  (i._handleDismiss = function (e) {
                      return function (t) {
                          t && t.preventDefault(), e.close(this);
                      };
                  }),
                  o(i, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                  ]),
                  i
              );
          })()),
          r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())),
          (r.fn[n] = g._jQueryInterface),
          (r.fn[n].Constructor = g),
          (r.fn[n].noConflict = function () {
              return (r.fn[n] = l), g._jQueryInterface;
          }),
          g),
      An =
          ((p = "button"),
          (E = "." + (v = "bs.button")),
          (y = ".data-api"),
          (T = (m = e).fn[p]),
          (C = "active"),
          (I = "btn"),
          (D = '[data-toggle^="button"]'),
          (b = '[data-toggle="buttons"]'),
          (S = "input"),
          (w = ".active"),
          (N = ".btn"),
          (O = { CLICK_DATA_API: "click" + E + y, FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y }),
          (k = (function () {
              function n(t) {
                  this._element = t;
              }
              var t = n.prototype;
              return (
                  (t.toggle = function () {
                      var t = !0,
                          e = !0,
                          n = m(this._element).closest(b)[0];
                      if (n) {
                          var i = m(this._element).find(S)[0];
                          if (i) {
                              if ("radio" === i.type)
                                  if (i.checked && m(this._element).hasClass(C)) t = !1;
                                  else {
                                      var r = m(n).find(w)[0];
                                      r && m(r).removeClass(C);
                                  }
                              if (t) {
                                  if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                  (i.checked = !m(this._element).hasClass(C)), m(i).trigger("change");
                              }
                              i.focus(), (e = !1);
                          }
                      }
                      e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C);
                  }),
                  (t.dispose = function () {
                      m.removeData(this._element, v), (this._element = null);
                  }),
                  (n._jQueryInterface = function (e) {
                      return this.each(function () {
                          var t = m(this).data(v);
                          t || ((t = new n(this)), m(this).data(v, t)), "toggle" === e && t[e]();
                      });
                  }),
                  o(n, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                  ]),
                  n
              );
          })()),
          m(document)
              .on(O.CLICK_DATA_API, D, function (t) {
                  t.preventDefault();
                  var e = t.target;
                  m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
              })
              .on(O.FOCUS_BLUR_DATA_API, D, function (t) {
                  var e = m(t.target).closest(N)[0];
                  m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
              }),
          (m.fn[p] = k._jQueryInterface),
          (m.fn[p].Constructor = k),
          (m.fn[p].noConflict = function () {
              return (m.fn[p] = T), k._jQueryInterface;
          }),
          k),
      Dn =
          ((L = "carousel"),
          (R = "." + (j = "bs.carousel")),
          (H = ".data-api"),
          (W = (P = e).fn[L]),
          (M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }),
          (x = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }),
          (U = "next"),
          (K = "prev"),
          (F = "left"),
          (V = "right"),
          (Q = { SLIDE: "slide" + R, SLID: "slid" + R, KEYDOWN: "keydown" + R, MOUSEENTER: "mouseenter" + R, MOUSELEAVE: "mouseleave" + R, TOUCHEND: "touchend" + R, LOAD_DATA_API: "load" + R + H, CLICK_DATA_API: "click" + R + H }),
          (B = "carousel"),
          (Y = "active"),
          (G = "slide"),
          (q = "carousel-item-right"),
          (z = "carousel-item-left"),
          (X = "carousel-item-next"),
          (J = "carousel-item-prev"),
          (Z = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]',
          }),
          ($ = (function () {
              function s(t, e) {
                  (this._items = null),
                      (this._interval = null),
                      (this._activeElement = null),
                      (this._isPaused = !1),
                      (this._isSliding = !1),
                      (this.touchTimeout = null),
                      (this._config = this._getConfig(e)),
                      (this._element = P(t)[0]),
                      (this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0]),
                      this._addEventListeners();
              }
              var t = s.prototype;
              return (
                  (t.next = function () {
                      this._isSliding || this._slide(U);
                  }),
                  (t.nextWhenVisible = function () {
                      !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
                  }),
                  (t.prev = function () {
                      this._isSliding || this._slide(K);
                  }),
                  (t.pause = function (t) {
                      t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                  }),
                  (t.cycle = function (t) {
                      t || (this._isPaused = !1),
                          this._interval && (clearInterval(this._interval), (this._interval = null)),
                          this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                  }),
                  (t.to = function (t) {
                      var e = this;
                      this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];
                      var n = this._getItemIndex(this._activeElement);
                      if (!(t > this._items.length - 1 || t < 0))
                          if (this._isSliding)
                              P(this._element).one(Q.SLID, function () {
                                  return e.to(t);
                              });
                          else {
                              if (n === t) return this.pause(), void this.cycle();
                              var i = n < t ? U : K;
                              this._slide(i, this._items[t]);
                          }
                  }),
                  (t.dispose = function () {
                      P(this._element).off(R),
                          P.removeData(this._element, j),
                          (this._items = null),
                          (this._config = null),
                          (this._element = null),
                          (this._interval = null),
                          (this._isPaused = null),
                          (this._isSliding = null),
                          (this._activeElement = null),
                          (this._indicatorsElement = null);
                  }),
                  (t._getConfig = function (t) {
                      return (t = h({}, M, t)), Cn.typeCheckConfig(L, t, x), t;
                  }),
                  (t._addEventListeners = function () {
                      var e = this;
                      this._config.keyboard &&
                          P(this._element).on(Q.KEYDOWN, function (t) {
                              return e._keydown(t);
                          }),
                          "hover" === this._config.pause &&
                              (P(this._element)
                                  .on(Q.MOUSEENTER, function (t) {
                                      return e.pause(t);
                                  })
                                  .on(Q.MOUSELEAVE, function (t) {
                                      return e.cycle(t);
                                  }),
                              "ontouchstart" in document.documentElement &&
                                  P(this._element).on(Q.TOUCHEND, function () {
                                      e.pause(),
                                          e.touchTimeout && clearTimeout(e.touchTimeout),
                                          (e.touchTimeout = setTimeout(function (t) {
                                              return e.cycle(t);
                                          }, 500 + e._config.interval));
                                  }));
                  }),
                  (t._keydown = function (t) {
                      if (!/input|textarea/i.test(t.target.tagName))
                          switch (t.which) {
                              case 37:
                                  t.preventDefault(), this.prev();
                                  break;
                              case 39:
                                  t.preventDefault(), this.next();
                          }
                  }),
                  (t._getItemIndex = function (t) {
                      return (this._items = P.makeArray(P(t).parent().find(Z.ITEM))), this._items.indexOf(t);
                  }),
                  (t._getItemByDirection = function (t, e) {
                      var n = t === U,
                          i = t === K,
                          r = this._getItemIndex(e),
                          s = this._items.length - 1;
                      if (((i && 0 === r) || (n && r === s)) && !this._config.wrap) return e;
                      var o = (r + (t === K ? -1 : 1)) % this._items.length;
                      return -1 === o ? this._items[this._items.length - 1] : this._items[o];
                  }),
                  (t._triggerSlideEvent = function (t, e) {
                      var n = this._getItemIndex(t),
                          i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
                          r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                      return P(this._element).trigger(r), r;
                  }),
                  (t._setActiveIndicatorElement = function (t) {
                      if (this._indicatorsElement) {
                          P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);
                          var e = this._indicatorsElement.children[this._getItemIndex(t)];
                          e && P(e).addClass(Y);
                      }
                  }),
                  (t._slide = function (t, e) {
                      var n,
                          i,
                          r,
                          s = this,
                          o = P(this._element).find(Z.ACTIVE_ITEM)[0],
                          a = this._getItemIndex(o),
                          l = e || (o && this._getItemByDirection(t, o)),
                          h = this._getItemIndex(l),
                          c = Boolean(this._interval);
                      if ((t === U ? ((n = z), (i = X), (r = F)) : ((n = q), (i = J), (r = V)), l && P(l).hasClass(Y))) this._isSliding = !1;
                      else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                          (this._isSliding = !0), c && this.pause(), this._setActiveIndicatorElement(l);
                          var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: h });
                          if (P(this._element).hasClass(G)) {
                              P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
                              var f = Cn.getTransitionDurationFromElement(o);
                              P(o)
                                  .one(Cn.TRANSITION_END, function () {
                                      P(l)
                                          .removeClass(n + " " + i)
                                          .addClass(Y),
                                          P(o).removeClass(Y + " " + i + " " + n),
                                          (s._isSliding = !1),
                                          setTimeout(function () {
                                              return P(s._element).trigger(u);
                                          }, 0);
                                  })
                                  .emulateTransitionEnd(f);
                          } else P(o).removeClass(Y), P(l).addClass(Y), (this._isSliding = !1), P(this._element).trigger(u);
                          c && this.cycle();
                      }
                  }),
                  (s._jQueryInterface = function (i) {
                      return this.each(function () {
                          var t = P(this).data(j),
                              e = h({}, M, P(this).data());
                          "object" == typeof i && (e = h({}, e, i));
                          var n = "string" == typeof i ? i : e.slide;
                          if ((t || ((t = new s(this, e)), P(this).data(j, t)), "number" == typeof i)) t.to(i);
                          else if ("string" == typeof n) {
                              if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                              t[n]();
                          } else e.interval && (t.pause(), t.cycle());
                      });
                  }),
                  (s._dataApiClickHandler = function (t) {
                      var e = Cn.getSelectorFromElement(this);
                      if (e) {
                          var n = P(e)[0];
                          if (n && P(n).hasClass(B)) {
                              var i = h({}, P(n).data(), P(this).data()),
                                  r = this.getAttribute("data-slide-to");
                              r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault();
                          }
                      }
                  }),
                  o(s, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                      {
                          key: "Default",
                          get: function () {
                              return M;
                          },
                      },
                  ]),
                  s
              );
          })()),
          P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler),
          P(window).on(Q.LOAD_DATA_API, function () {
              P(Z.DATA_RIDE).each(function () {
                  var t = P(this);
                  $._jQueryInterface.call(t, t.data());
              });
          }),
          (P.fn[L] = $._jQueryInterface),
          (P.fn[L].Constructor = $),
          (P.fn[L].noConflict = function () {
              return (P.fn[L] = W), $._jQueryInterface;
          }),
          $),
      bn =
          ((et = "collapse"),
          (it = "." + (nt = "bs.collapse")),
          (rt = (tt = e).fn[et]),
          (st = { toggle: !0, parent: "" }),
          (ot = { toggle: "boolean", parent: "(string|element)" }),
          (at = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + ".data-api" }),
          (lt = "show"),
          (ht = "collapse"),
          (ct = "collapsing"),
          (ut = "collapsed"),
          (ft = "width"),
          (dt = "height"),
          (_t = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }),
          (gt = (function () {
              function a(t, e) {
                  (this._isTransitioning = !1),
                      (this._element = t),
                      (this._config = this._getConfig(e)),
                      (this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                  for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
                      var r = n[i],
                          s = Cn.getSelectorFromElement(r);
                      null !== s && 0 < tt(s).filter(t).length && ((this._selector = s), this._triggerArray.push(r));
                  }
                  (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
              }
              var t = a.prototype;
              return (
                  (t.toggle = function () {
                      tt(this._element).hasClass(lt) ? this.hide() : this.show();
                  }),
                  (t.show = function () {
                      var t,
                          e,
                          n = this;
                      if (
                          !this._isTransitioning &&
                          !tt(this._element).hasClass(lt) &&
                          (this._parent &&
                              0 ===
                                  (t = tt.makeArray(
                                      tt(this._parent)
                                          .find(_t.ACTIVES)
                                          .filter('[data-parent="' + this._config.parent + '"]')
                                  )).length &&
                              (t = null),
                          !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))
                      ) {
                          var i = tt.Event(at.SHOW);
                          if ((tt(this._element).trigger(i), !i.isDefaultPrevented())) {
                              t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));
                              var r = this._getDimension();
                              tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
                              var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                  o = Cn.getTransitionDurationFromElement(this._element);
                              tt(this._element)
                                  .one(Cn.TRANSITION_END, function () {
                                      tt(n._element).removeClass(ct).addClass(ht).addClass(lt), (n._element.style[r] = ""), n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN);
                                  })
                                  .emulateTransitionEnd(o),
                                  (this._element.style[r] = this._element[s] + "px");
                          }
                      }
                  }),
                  (t.hide = function () {
                      var t = this;
                      if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
                          var e = tt.Event(at.HIDE);
                          if ((tt(this._element).trigger(e), !e.isDefaultPrevented())) {
                              var n = this._getDimension();
                              if (((this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length))
                                  for (var i = 0; i < this._triggerArray.length; i++) {
                                      var r = this._triggerArray[i],
                                          s = Cn.getSelectorFromElement(r);
                                      if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1);
                                  }
                              this.setTransitioning(!0);
                              this._element.style[n] = "";
                              var o = Cn.getTransitionDurationFromElement(this._element);
                              tt(this._element)
                                  .one(Cn.TRANSITION_END, function () {
                                      t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN);
                                  })
                                  .emulateTransitionEnd(o);
                          }
                      }
                  }),
                  (t.setTransitioning = function (t) {
                      this._isTransitioning = t;
                  }),
                  (t.dispose = function () {
                      tt.removeData(this._element, nt), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                  }),
                  (t._getConfig = function (t) {
                      return ((t = h({}, st, t)).toggle = Boolean(t.toggle)), Cn.typeCheckConfig(et, t, ot), t;
                  }),
                  (t._getDimension = function () {
                      return tt(this._element).hasClass(ft) ? ft : dt;
                  }),
                  (t._getParent = function () {
                      var n = this,
                          t = null;
                      Cn.isElement(this._config.parent) ? ((t = this._config.parent), "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : (t = tt(this._config.parent)[0]);
                      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                      return (
                          tt(t)
                              .find(e)
                              .each(function (t, e) {
                                  n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
                              }),
                          t
                      );
                  }),
                  (t._addAriaAndCollapsedClass = function (t, e) {
                      if (t) {
                          var n = tt(t).hasClass(lt);
                          0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
                      }
                  }),
                  (a._getTargetFromElement = function (t) {
                      var e = Cn.getSelectorFromElement(t);
                      return e ? tt(e)[0] : null;
                  }),
                  (a._jQueryInterface = function (i) {
                      return this.each(function () {
                          var t = tt(this),
                              e = t.data(nt),
                              n = h({}, st, t.data(), "object" == typeof i && i ? i : {});
                          if ((!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || ((e = new a(this, n)), t.data(nt, e)), "string" == typeof i)) {
                              if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                              e[i]();
                          }
                      });
                  }),
                  o(a, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                      {
                          key: "Default",
                          get: function () {
                              return st;
                          },
                      },
                  ]),
                  a
              );
          })()),
          tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
              "A" === t.currentTarget.tagName && t.preventDefault();
              var n = tt(this),
                  e = Cn.getSelectorFromElement(this);
              tt(e).each(function () {
                  var t = tt(this),
                      e = t.data(nt) ? "toggle" : n.data();
                  gt._jQueryInterface.call(t, e);
              });
          }),
          (tt.fn[et] = gt._jQueryInterface),
          (tt.fn[et].Constructor = gt),
          (tt.fn[et].noConflict = function () {
              return (tt.fn[et] = rt), gt._jQueryInterface;
          }),
          gt),
      Sn =
          ((pt = "dropdown"),
          (Et = "." + (vt = "bs.dropdown")),
          (yt = ".data-api"),
          (Tt = (mt = e).fn[pt]),
          (Ct = new RegExp("38|40|27")),
          (It = { HIDE: "hide" + Et, HIDDEN: "hidden" + Et, SHOW: "show" + Et, SHOWN: "shown" + Et, CLICK: "click" + Et, CLICK_DATA_API: "click" + Et + yt, KEYDOWN_DATA_API: "keydown" + Et + yt, KEYUP_DATA_API: "keyup" + Et + yt }),
          (At = "disabled"),
          (Dt = "show"),
          (bt = "dropup"),
          (St = "dropright"),
          (wt = "dropleft"),
          (Nt = "dropdown-menu-right"),
          (Ot = "position-static"),
          (kt = '[data-toggle="dropdown"]'),
          (Pt = ".dropdown form"),
          (Lt = ".dropdown-menu"),
          (jt = ".navbar-nav"),
          (Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
          (Ht = "top-start"),
          (Wt = "top-end"),
          (Mt = "bottom-start"),
          (xt = "bottom-end"),
          (Ut = "right-start"),
          (Kt = "left-start"),
          (Ft = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }),
          (Vt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }),
          (Qt = (function () {
              function l(t, e) {
                  (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
              }
              var t = l.prototype;
              return (
                  (t.toggle = function () {
                      if (!this._element.disabled && !mt(this._element).hasClass(At)) {
                          var t = l._getParentFromElement(this._element),
                              e = mt(this._menu).hasClass(Dt);
                          if ((l._clearMenus(), !e)) {
                              var n = { relatedTarget: this._element },
                                  i = mt.Event(It.SHOW, n);
                              if ((mt(t).trigger(i), !i.isDefaultPrevented())) {
                                  if (!this._inNavbar) {
                                      if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                      var r = this._element;
                                      "parent" === this._config.reference
                                          ? (r = t)
                                          : Cn.isElement(this._config.reference) && ((r = this._config.reference), "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])),
                                          "scrollParent" !== this._config.boundary && mt(t).addClass(Ot),
                                          (this._popper = new c(r, this._menu, this._getPopperConfig()));
                                  }
                                  "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop),
                                      this._element.focus(),
                                      this._element.setAttribute("aria-expanded", !0),
                                      mt(this._menu).toggleClass(Dt),
                                      mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
                              }
                          }
                      }
                  }),
                  (t.dispose = function () {
                      mt.removeData(this._element, vt), mt(this._element).off(Et), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
                  }),
                  (t.update = function () {
                      (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                  }),
                  (t._addEventListeners = function () {
                      var e = this;
                      mt(this._element).on(It.CLICK, function (t) {
                          t.preventDefault(), t.stopPropagation(), e.toggle();
                      });
                  }),
                  (t._getConfig = function (t) {
                      return (t = h({}, this.constructor.Default, mt(this._element).data(), t)), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t;
                  }),
                  (t._getMenuElement = function () {
                      if (!this._menu) {
                          var t = l._getParentFromElement(this._element);
                          this._menu = mt(t).find(Lt)[0];
                      }
                      return this._menu;
                  }),
                  (t._getPlacement = function () {
                      var t = mt(this._element).parent(),
                          e = Mt;
                      return t.hasClass(bt) ? ((e = Ht), mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? (e = Ut) : t.hasClass(wt) ? (e = Kt) : mt(this._menu).hasClass(Nt) && (e = xt), e;
                  }),
                  (t._detectNavbar = function () {
                      return 0 < mt(this._element).closest(".navbar").length;
                  }),
                  (t._getPopperConfig = function () {
                      var e = this,
                          t = {};
                      "function" == typeof this._config.offset
                          ? (t.fn = function (t) {
                                return (t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {})), t;
                            })
                          : (t.offset = this._config.offset);
                      var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                      return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
                  }),
                  (l._jQueryInterface = function (e) {
                      return this.each(function () {
                          var t = mt(this).data(vt);
                          if ((t || ((t = new l(this, "object" == typeof e ? e : null)), mt(this).data(vt, t)), "string" == typeof e)) {
                              if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                              t[e]();
                          }
                      });
                  }),
                  (l._clearMenus = function (t) {
                      if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                          for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                              var i = l._getParentFromElement(e[n]),
                                  r = mt(e[n]).data(vt),
                                  s = { relatedTarget: e[n] };
                              if (r) {
                                  var o = r._menu;
                                  if (mt(i).hasClass(Dt) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && mt.contains(i, t.target))) {
                                      var a = mt.Event(It.HIDE, s);
                                      mt(i).trigger(a),
                                          a.isDefaultPrevented() ||
                                              ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop),
                                              e[n].setAttribute("aria-expanded", "false"),
                                              mt(o).removeClass(Dt),
                                              mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
                                  }
                              }
                          }
                  }),
                  (l._getParentFromElement = function (t) {
                      var e,
                          n = Cn.getSelectorFromElement(t);
                      return n && (e = mt(n)[0]), e || t.parentNode;
                  }),
                  (l._dataApiKeydownHandler = function (t) {
                      if (
                          (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || mt(t.target).closest(Lt).length))) : Ct.test(t.which)) &&
                          (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))
                      ) {
                          var e = l._getParentFromElement(this),
                              n = mt(e).hasClass(Dt);
                          if ((n || (27 === t.which && 32 === t.which)) && (!n || (27 !== t.which && 32 !== t.which))) {
                              var i = mt(e).find(Rt).get();
                              if (0 !== i.length) {
                                  var r = i.indexOf(t.target);
                                  38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
                              }
                          } else {
                              if (27 === t.which) {
                                  var s = mt(e).find(kt)[0];
                                  mt(s).trigger("focus");
                              }
                              mt(this).trigger("click");
                          }
                      }
                  }),
                  o(l, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                      {
                          key: "Default",
                          get: function () {
                              return Ft;
                          },
                      },
                      {
                          key: "DefaultType",
                          get: function () {
                              return Vt;
                          },
                      },
                  ]),
                  l
              );
          })()),
          mt(document)
              .on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler)
              .on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler)
              .on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus)
              .on(It.CLICK_DATA_API, kt, function (t) {
                  t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle");
              })
              .on(It.CLICK_DATA_API, Pt, function (t) {
                  t.stopPropagation();
              }),
          (mt.fn[pt] = Qt._jQueryInterface),
          (mt.fn[pt].Constructor = Qt),
          (mt.fn[pt].noConflict = function () {
              return (mt.fn[pt] = Tt), Qt._jQueryInterface;
          }),
          Qt),
      wn =
          ((Yt = "modal"),
          (qt = "." + (Gt = "bs.modal")),
          (zt = (Bt = e).fn[Yt]),
          (Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
          (Jt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }),
          (Zt = {
              HIDE: "hide" + qt,
              HIDDEN: "hidden" + qt,
              SHOW: "show" + qt,
              SHOWN: "shown" + qt,
              FOCUSIN: "focusin" + qt,
              RESIZE: "resize" + qt,
              CLICK_DISMISS: "click.dismiss" + qt,
              KEYDOWN_DISMISS: "keydown.dismiss" + qt,
              MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
              MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
              CLICK_DATA_API: "click" + qt + ".data-api",
          }),
          ($t = "modal-scrollbar-measure"),
          (te = "modal-backdrop"),
          (ee = "modal-open"),
          (ne = "fade"),
          (ie = "show"),
          (re = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              STICKY_CONTENT: ".sticky-top",
              NAVBAR_TOGGLER: ".navbar-toggler",
          }),
          (se = (function () {
              function r(t, e) {
                  (this._config = this._getConfig(e)),
                      (this._element = t),
                      (this._dialog = Bt(t).find(re.DIALOG)[0]),
                      (this._backdrop = null),
                      (this._isShown = !1),
                      (this._isBodyOverflowing = !1),
                      (this._ignoreBackdropClick = !1),
                      (this._scrollbarWidth = 0);
              }
              var t = r.prototype;
              return (
                  (t.toggle = function (t) {
                      return this._isShown ? this.hide() : this.show(t);
                  }),
                  (t.show = function (t) {
                      var e = this;
                      if (!this._isTransitioning && !this._isShown) {
                          Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
                          var n = Bt.Event(Zt.SHOW, { relatedTarget: t });
                          Bt(this._element).trigger(n),
                              this._isShown ||
                                  n.isDefaultPrevented() ||
                                  ((this._isShown = !0),
                                  this._checkScrollbar(),
                                  this._setScrollbar(),
                                  this._adjustDialog(),
                                  Bt(document.body).addClass(ee),
                                  this._setEscapeEvent(),
                                  this._setResizeEvent(),
                                  Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
                                      return e.hide(t);
                                  }),
                                  Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
                                      Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
                                          Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                                      });
                                  }),
                                  this._showBackdrop(function () {
                                      return e._showElement(t);
                                  }));
                      }
                  }),
                  (t.hide = function (t) {
                      var e = this;
                      if ((t && t.preventDefault(), !this._isTransitioning && this._isShown)) {
                          var n = Bt.Event(Zt.HIDE);
                          if ((Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                              this._isShown = !1;
                              var i = Bt(this._element).hasClass(ne);
                              if (
                                  (i && (this._isTransitioning = !0),
                                  this._setEscapeEvent(),
                                  this._setResizeEvent(),
                                  Bt(document).off(Zt.FOCUSIN),
                                  Bt(this._element).removeClass(ie),
                                  Bt(this._element).off(Zt.CLICK_DISMISS),
                                  Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),
                                  i)
                              ) {
                                  var r = Cn.getTransitionDurationFromElement(this._element);
                                  Bt(this._element)
                                      .one(Cn.TRANSITION_END, function (t) {
                                          return e._hideModal(t);
                                      })
                                      .emulateTransitionEnd(r);
                              } else this._hideModal();
                          }
                      }
                  }),
                  (t.dispose = function () {
                      Bt.removeData(this._element, Gt),
                          Bt(window, document, this._element, this._backdrop).off(qt),
                          (this._config = null),
                          (this._element = null),
                          (this._dialog = null),
                          (this._backdrop = null),
                          (this._isShown = null),
                          (this._isBodyOverflowing = null),
                          (this._ignoreBackdropClick = null),
                          (this._scrollbarWidth = null);
                  }),
                  (t.handleUpdate = function () {
                      this._adjustDialog();
                  }),
                  (t._getConfig = function (t) {
                      return (t = h({}, Xt, t)), Cn.typeCheckConfig(Yt, t, Jt), t;
                  }),
                  (t._showElement = function (t) {
                      var e = this,
                          n = Bt(this._element).hasClass(ne);
                      (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                          (this._element.style.display = "block"),
                          this._element.removeAttribute("aria-hidden"),
                          (this._element.scrollTop = 0),
                          n && Cn.reflow(this._element),
                          Bt(this._element).addClass(ie),
                          this._config.focus && this._enforceFocus();
                      var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
                          r = function () {
                              e._config.focus && e._element.focus(), (e._isTransitioning = !1), Bt(e._element).trigger(i);
                          };
                      if (n) {
                          var s = Cn.getTransitionDurationFromElement(this._element);
                          Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
                      } else r();
                  }),
                  (t._enforceFocus = function () {
                      var e = this;
                      Bt(document)
                          .off(Zt.FOCUSIN)
                          .on(Zt.FOCUSIN, function (t) {
                              document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus();
                          });
                  }),
                  (t._setEscapeEvent = function () {
                      var e = this;
                      this._isShown && this._config.keyboard
                          ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
                                27 === t.which && (t.preventDefault(), e.hide());
                            })
                          : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
                  }),
                  (t._setResizeEvent = function () {
                      var e = this;
                      this._isShown
                          ? Bt(window).on(Zt.RESIZE, function (t) {
                                return e.handleUpdate(t);
                            })
                          : Bt(window).off(Zt.RESIZE);
                  }),
                  (t._hideModal = function () {
                      var t = this;
                      (this._element.style.display = "none"),
                          this._element.setAttribute("aria-hidden", !0),
                          (this._isTransitioning = !1),
                          this._showBackdrop(function () {
                              Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN);
                          });
                  }),
                  (t._removeBackdrop = function () {
                      this._backdrop && (Bt(this._backdrop).remove(), (this._backdrop = null));
                  }),
                  (t._showBackdrop = function (t) {
                      var e = this,
                          n = Bt(this._element).hasClass(ne) ? ne : "";
                      if (this._isShown && this._config.backdrop) {
                          if (
                              ((this._backdrop = document.createElement("div")),
                              (this._backdrop.className = te),
                              n && Bt(this._backdrop).addClass(n),
                              Bt(this._backdrop).appendTo(document.body),
                              Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
                                  e._ignoreBackdropClick ? (e._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                              }),
                              n && Cn.reflow(this._backdrop),
                              Bt(this._backdrop).addClass(ie),
                              !t)
                          )
                              return;
                          if (!n) return void t();
                          var i = Cn.getTransitionDurationFromElement(this._backdrop);
                          Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i);
                      } else if (!this._isShown && this._backdrop) {
                          Bt(this._backdrop).removeClass(ie);
                          var r = function () {
                              e._removeBackdrop(), t && t();
                          };
                          if (Bt(this._element).hasClass(ne)) {
                              var s = Cn.getTransitionDurationFromElement(this._backdrop);
                              Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
                          } else r();
                      } else t && t();
                  }),
                  (t._adjustDialog = function () {
                      var t = this._element.scrollHeight > document.documentElement.clientHeight;
                      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                  }),
                  (t._resetAdjustments = function () {
                      (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                  }),
                  (t._checkScrollbar = function () {
                      var t = document.body.getBoundingClientRect();
                      (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                  }),
                  (t._setScrollbar = function () {
                      var r = this;
                      if (this._isBodyOverflowing) {
                          Bt(re.FIXED_CONTENT).each(function (t, e) {
                              var n = Bt(e)[0].style.paddingRight,
                                  i = Bt(e).css("padding-right");
                              Bt(e)
                                  .data("padding-right", n)
                                  .css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
                          }),
                              Bt(re.STICKY_CONTENT).each(function (t, e) {
                                  var n = Bt(e)[0].style.marginRight,
                                      i = Bt(e).css("margin-right");
                                  Bt(e)
                                      .data("margin-right", n)
                                      .css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
                              }),
                              Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
                                  var n = Bt(e)[0].style.marginRight,
                                      i = Bt(e).css("margin-right");
                                  Bt(e)
                                      .data("margin-right", n)
                                      .css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
                              });
                          var t = document.body.style.paddingRight,
                              e = Bt(document.body).css("padding-right");
                          Bt(document.body)
                              .data("padding-right", t)
                              .css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
                      }
                  }),
                  (t._resetScrollbar = function () {
                      Bt(re.FIXED_CONTENT).each(function (t, e) {
                          var n = Bt(e).data("padding-right");
                          "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right");
                      }),
                          Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
                              var n = Bt(e).data("margin-right");
                              "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right");
                          });
                      var t = Bt(document.body).data("padding-right");
                      "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right");
                  }),
                  (t._getScrollbarWidth = function () {
                      var t = document.createElement("div");
                      (t.className = $t), document.body.appendChild(t);
                      var e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e;
                  }),
                  (r._jQueryInterface = function (n, i) {
                      return this.each(function () {
                          var t = Bt(this).data(Gt),
                              e = h({}, Xt, Bt(this).data(), "object" == typeof n && n ? n : {});
                          if ((t || ((t = new r(this, e)), Bt(this).data(Gt, t)), "string" == typeof n)) {
                              if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                              t[n](i);
                          } else e.show && t.show(i);
                      });
                  }),
                  o(r, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                      {
                          key: "Default",
                          get: function () {
                              return Xt;
                          },
                      },
                  ]),
                  r
              );
          })()),
          Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
              var e,
                  n = this,
                  i = Cn.getSelectorFromElement(this);
              i && (e = Bt(i)[0]);
              var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
              ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
              var s = Bt(e).one(Zt.SHOW, function (t) {
                  t.isDefaultPrevented() ||
                      s.one(Zt.HIDDEN, function () {
                          Bt(n).is(":visible") && n.focus();
                      });
              });
              se._jQueryInterface.call(Bt(e), r, this);
          }),
          (Bt.fn[Yt] = se._jQueryInterface),
          (Bt.fn[Yt].Constructor = se),
          (Bt.fn[Yt].noConflict = function () {
              return (Bt.fn[Yt] = zt), se._jQueryInterface;
          }),
          se),
      Nn =
          ((ae = "tooltip"),
          (he = "." + (le = "bs.tooltip")),
          (ce = (oe = e).fn[ae]),
          (ue = "bs-tooltip"),
          (fe = new RegExp("(^|\\s)" + ue + "\\S+", "g")),
          (ge = {
              animation: !0,
              template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !(_e = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }),
              selector: !(de = {
                  animation: "boolean",
                  template: "string",
                  title: "(string|element|function)",
                  trigger: "string",
                  delay: "(number|object)",
                  html: "boolean",
                  selector: "(string|boolean)",
                  placement: "(string|function)",
                  offset: "(number|string)",
                  container: "(string|element|boolean)",
                  fallbackPlacement: "(string|array)",
                  boundary: "(string|element)",
              }),
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent",
          }),
          (pe = "out"),
          (ve = {
              HIDE: "hide" + he,
              HIDDEN: "hidden" + he,
              SHOW: (me = "show") + he,
              SHOWN: "shown" + he,
              INSERTED: "inserted" + he,
              CLICK: "click" + he,
              FOCUSIN: "focusin" + he,
              FOCUSOUT: "focusout" + he,
              MOUSEENTER: "mouseenter" + he,
              MOUSELEAVE: "mouseleave" + he,
          }),
          (Ee = "fade"),
          (ye = "show"),
          (Te = ".tooltip-inner"),
          (Ce = ".arrow"),
          (Ie = "hover"),
          (Ae = "focus"),
          (De = "click"),
          (be = "manual"),
          (Se = (function () {
              function i(t, e) {
                  if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                  (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
              }
              var t = i.prototype;
              return (
                  (t.enable = function () {
                      this._isEnabled = !0;
                  }),
                  (t.disable = function () {
                      this._isEnabled = !1;
                  }),
                  (t.toggleEnabled = function () {
                      this._isEnabled = !this._isEnabled;
                  }),
                  (t.toggle = function (t) {
                      if (this._isEnabled)
                          if (t) {
                              var e = this.constructor.DATA_KEY,
                                  n = oe(t.currentTarget).data(e);
                              n || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), oe(t.currentTarget).data(e, n)),
                                  (n._activeTrigger.click = !n._activeTrigger.click),
                                  n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                          } else {
                              if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
                              this._enter(null, this);
                          }
                  }),
                  (t.dispose = function () {
                      clearTimeout(this._timeout),
                          oe.removeData(this.element, this.constructor.DATA_KEY),
                          oe(this.element).off(this.constructor.EVENT_KEY),
                          oe(this.element).closest(".modal").off("hide.bs.modal"),
                          this.tip && oe(this.tip).remove(),
                          (this._isEnabled = null),
                          (this._timeout = null),
                          (this._hoverState = null),
                          (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                          (this._popper = null),
                          (this.element = null),
                          (this.config = null),
                          (this.tip = null);
                  }),
                  (t.show = function () {
                      var e = this;
                      if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
                      var t = oe.Event(this.constructor.Event.SHOW);
                      if (this.isWithContent() && this._isEnabled) {
                          oe(this.element).trigger(t);
                          var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
                          if (t.isDefaultPrevented() || !n) return;
                          var i = this.getTipElement(),
                              r = Cn.getUID(this.constructor.NAME);
                          i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);
                          var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                              o = this._getAttachment(s);
                          this.addAttachmentClass(o);
                          var a = !1 === this.config.container ? document.body : oe(this.config.container);
                          oe(i).data(this.constructor.DATA_KEY, this),
                              oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a),
                              oe(this.element).trigger(this.constructor.Event.INSERTED),
                              (this._popper = new c(this.element, i, {
                                  placement: o,
                                  modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Ce }, preventOverflow: { boundariesElement: this.config.boundary } },
                                  onCreate: function (t) {
                                      t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                                  },
                                  onUpdate: function (t) {
                                      e._handlePopperPlacementChange(t);
                                  },
                              })),
                              oe(i).addClass(ye),
                              "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);
                          var l = function () {
                              e.config.animation && e._fixTransition();
                              var t = e._hoverState;
                              (e._hoverState = null), oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
                          };
                          if (oe(this.tip).hasClass(Ee)) {
                              var h = Cn.getTransitionDurationFromElement(this.tip);
                              oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
                          } else l();
                      }
                  }),
                  (t.hide = function (t) {
                      var e = this,
                          n = this.getTipElement(),
                          i = oe.Event(this.constructor.Event.HIDE),
                          r = function () {
                              e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n),
                                  e._cleanTipClass(),
                                  e.element.removeAttribute("aria-describedby"),
                                  oe(e.element).trigger(e.constructor.Event.HIDDEN),
                                  null !== e._popper && e._popper.destroy(),
                                  t && t();
                          };
                      if ((oe(this.element).trigger(i), !i.isDefaultPrevented())) {
                          if (
                              (oe(n).removeClass(ye),
                              "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop),
                              (this._activeTrigger[De] = !1),
                              (this._activeTrigger[Ae] = !1),
                              (this._activeTrigger[Ie] = !1),
                              oe(this.tip).hasClass(Ee))
                          ) {
                              var s = Cn.getTransitionDurationFromElement(n);
                              oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
                          } else r();
                          this._hoverState = "";
                      }
                  }),
                  (t.update = function () {
                      null !== this._popper && this._popper.scheduleUpdate();
                  }),
                  (t.isWithContent = function () {
                      return Boolean(this.getTitle());
                  }),
                  (t.addAttachmentClass = function (t) {
                      oe(this.getTipElement()).addClass(ue + "-" + t);
                  }),
                  (t.getTipElement = function () {
                      return (this.tip = this.tip || oe(this.config.template)[0]), this.tip;
                  }),
                  (t.setContent = function () {
                      var t = oe(this.getTipElement());
                      this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye);
                  }),
                  (t.setElementContent = function (t, e) {
                      var n = this.config.html;
                      "object" == typeof e && (e.nodeType || e.jquery) ? (n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text())) : t[n ? "html" : "text"](e);
                  }),
                  (t.getTitle = function () {
                      var t = this.element.getAttribute("data-original-title");
                      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
                  }),
                  (t._getAttachment = function (t) {
                      return _e[t.toUpperCase()];
                  }),
                  (t._setListeners = function () {
                      var i = this;
                      this.config.trigger.split(" ").forEach(function (t) {
                          if ("click" === t)
                              oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                                  return i.toggle(t);
                              });
                          else if (t !== be) {
                              var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                  n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                              oe(i.element)
                                  .on(e, i.config.selector, function (t) {
                                      return i._enter(t);
                                  })
                                  .on(n, i.config.selector, function (t) {
                                      return i._leave(t);
                                  });
                          }
                          oe(i.element)
                              .closest(".modal")
                              .on("hide.bs.modal", function () {
                                  return i.hide();
                              });
                      }),
                          this.config.selector ? (this.config = h({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                  }),
                  (t._fixTitle = function () {
                      var t = typeof this.element.getAttribute("data-original-title");
                      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                  }),
                  (t._enter = function (t, e) {
                      var n = this.constructor.DATA_KEY;
                      (e = e || oe(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), oe(t.currentTarget).data(n, e)),
                          t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0),
                          oe(e.getTipElement()).hasClass(ye) || e._hoverState === me
                              ? (e._hoverState = me)
                              : (clearTimeout(e._timeout),
                                (e._hoverState = me),
                                e.config.delay && e.config.delay.show
                                    ? (e._timeout = setTimeout(function () {
                                          e._hoverState === me && e.show();
                                      }, e.config.delay.show))
                                    : e.show());
                  }),
                  (t._leave = function (t, e) {
                      var n = this.constructor.DATA_KEY;
                      (e = e || oe(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), oe(t.currentTarget).data(n, e)),
                          t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1),
                          e._isWithActiveTrigger() ||
                              (clearTimeout(e._timeout),
                              (e._hoverState = pe),
                              e.config.delay && e.config.delay.hide
                                  ? (e._timeout = setTimeout(function () {
                                        e._hoverState === pe && e.hide();
                                    }, e.config.delay.hide))
                                  : e.hide());
                  }),
                  (t._isWithActiveTrigger = function () {
                      for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                      return !1;
                  }),
                  (t._getConfig = function (t) {
                      return (
                          "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                          "number" == typeof t.title && (t.title = t.title.toString()),
                          "number" == typeof t.content && (t.content = t.content.toString()),
                          Cn.typeCheckConfig(ae, t, this.constructor.DefaultType),
                          t
                      );
                  }),
                  (t._getDelegateConfig = function () {
                      var t = {};
                      if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                      return t;
                  }),
                  (t._cleanTipClass = function () {
                      var t = oe(this.getTipElement()),
                          e = t.attr("class").match(fe);
                      null !== e && 0 < e.length && t.removeClass(e.join(""));
                  }),
                  (t._handlePopperPlacementChange = function (t) {
                      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
                  }),
                  (t._fixTransition = function () {
                      var t = this.getTipElement(),
                          e = this.config.animation;
                      null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
                  }),
                  (i._jQueryInterface = function (n) {
                      return this.each(function () {
                          var t = oe(this).data(le),
                              e = "object" == typeof n && n;
                          if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), oe(this).data(le, t)), "string" == typeof n)) {
                              if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                              t[n]();
                          }
                      });
                  }),
                  o(i, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                      {
                          key: "Default",
                          get: function () {
                              return ge;
                          },
                      },
                      {
                          key: "NAME",
                          get: function () {
                              return ae;
                          },
                      },
                      {
                          key: "DATA_KEY",
                          get: function () {
                              return le;
                          },
                      },
                      {
                          key: "Event",
                          get: function () {
                              return ve;
                          },
                      },
                      {
                          key: "EVENT_KEY",
                          get: function () {
                              return he;
                          },
                      },
                      {
                          key: "DefaultType",
                          get: function () {
                              return de;
                          },
                      },
                  ]),
                  i
              );
          })()),
          (oe.fn[ae] = Se._jQueryInterface),
          (oe.fn[ae].Constructor = Se),
          (oe.fn[ae].noConflict = function () {
              return (oe.fn[ae] = ce), Se._jQueryInterface;
          }),
          Se),
      On =
          ((Ne = "popover"),
          (ke = "." + (Oe = "bs.popover")),
          (Pe = (we = e).fn[Ne]),
          (Le = "bs-popover"),
          (je = new RegExp("(^|\\s)" + Le + "\\S+", "g")),
          (Re = h({}, Nn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' })),
          (He = h({}, Nn.DefaultType, { content: "(string|element|function)" })),
          (We = "fade"),
          (xe = ".popover-header"),
          (Ue = ".popover-body"),
          (Ke = {
              HIDE: "hide" + ke,
              HIDDEN: "hidden" + ke,
              SHOW: (Me = "show") + ke,
              SHOWN: "shown" + ke,
              INSERTED: "inserted" + ke,
              CLICK: "click" + ke,
              FOCUSIN: "focusin" + ke,
              FOCUSOUT: "focusout" + ke,
              MOUSEENTER: "mouseenter" + ke,
              MOUSELEAVE: "mouseleave" + ke,
          }),
          (Fe = (function (t) {
              var e, n;
              function i() {
                  return t.apply(this, arguments) || this;
              }
              (n = t), ((e = i).prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
              var r = i.prototype;
              return (
                  (r.isWithContent = function () {
                      return this.getTitle() || this._getContent();
                  }),
                  (r.addAttachmentClass = function (t) {
                      we(this.getTipElement()).addClass(Le + "-" + t);
                  }),
                  (r.getTipElement = function () {
                      return (this.tip = this.tip || we(this.config.template)[0]), this.tip;
                  }),
                  (r.setContent = function () {
                      var t = we(this.getTipElement());
                      this.setElementContent(t.find(xe), this.getTitle());
                      var e = this._getContent();
                      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me);
                  }),
                  (r._getContent = function () {
                      return this.element.getAttribute("data-content") || this.config.content;
                  }),
                  (r._cleanTipClass = function () {
                      var t = we(this.getTipElement()),
                          e = t.attr("class").match(je);
                      null !== e && 0 < e.length && t.removeClass(e.join(""));
                  }),
                  (i._jQueryInterface = function (n) {
                      return this.each(function () {
                          var t = we(this).data(Oe),
                              e = "object" == typeof n ? n : null;
                          if ((t || !/destroy|hide/.test(n)) && (t || ((t = new i(this, e)), we(this).data(Oe, t)), "string" == typeof n)) {
                              if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                              t[n]();
                          }
                      });
                  }),
                  o(i, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                      {
                          key: "Default",
                          get: function () {
                              return Re;
                          },
                      },
                      {
                          key: "NAME",
                          get: function () {
                              return Ne;
                          },
                      },
                      {
                          key: "DATA_KEY",
                          get: function () {
                              return Oe;
                          },
                      },
                      {
                          key: "Event",
                          get: function () {
                              return Ke;
                          },
                      },
                      {
                          key: "EVENT_KEY",
                          get: function () {
                              return ke;
                          },
                      },
                      {
                          key: "DefaultType",
                          get: function () {
                              return He;
                          },
                      },
                  ]),
                  i
              );
          })(Nn)),
          (we.fn[Ne] = Fe._jQueryInterface),
          (we.fn[Ne].Constructor = Fe),
          (we.fn[Ne].noConflict = function () {
              return (we.fn[Ne] = Pe), Fe._jQueryInterface;
          }),
          Fe),
      kn =
          ((Qe = "scrollspy"),
          (Ye = "." + (Be = "bs.scrollspy")),
          (Ge = (Ve = e).fn[Qe]),
          (qe = { offset: 10, method: "auto", target: "" }),
          (ze = { offset: "number", method: "string", target: "(string|element)" }),
          (Xe = { ACTIVATE: "activate" + Ye, SCROLL: "scroll" + Ye, LOAD_DATA_API: "load" + Ye + ".data-api" }),
          (Je = "dropdown-item"),
          (Ze = "active"),
          ($e = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              NAV_LIST_GROUP: ".nav, .list-group",
              NAV_LINKS: ".nav-link",
              NAV_ITEMS: ".nav-item",
              LIST_ITEMS: ".list-group-item",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle",
          }),
          (tn = "offset"),
          (en = "position"),
          (nn = (function () {
              function n(t, e) {
                  var n = this;
                  (this._element = t),
                      (this._scrollElement = "BODY" === t.tagName ? window : t),
                      (this._config = this._getConfig(e)),
                      (this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS),
                      (this._offsets = []),
                      (this._targets = []),
                      (this._activeTarget = null),
                      (this._scrollHeight = 0),
                      Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
                          return n._process(t);
                      }),
                      this.refresh(),
                      this._process();
              }
              var t = n.prototype;
              return (
                  (t.refresh = function () {
                      var e = this,
                          t = this._scrollElement === this._scrollElement.window ? tn : en,
                          r = "auto" === this._config.method ? t : this._config.method,
                          s = r === en ? this._getScrollTop() : 0;
                      (this._offsets = []),
                          (this._targets = []),
                          (this._scrollHeight = this._getScrollHeight()),
                          Ve.makeArray(Ve(this._selector))
                              .map(function (t) {
                                  var e,
                                      n = Cn.getSelectorFromElement(t);
                                  if ((n && (e = Ve(n)[0]), e)) {
                                      var i = e.getBoundingClientRect();
                                      if (i.width || i.height) return [Ve(e)[r]().top + s, n];
                                  }
                                  return null;
                              })
                              .filter(function (t) {
                                  return t;
                              })
                              .sort(function (t, e) {
                                  return t[0] - e[0];
                              })
                              .forEach(function (t) {
                                  e._offsets.push(t[0]), e._targets.push(t[1]);
                              });
                  }),
                  (t.dispose = function () {
                      Ve.removeData(this._element, Be),
                          Ve(this._scrollElement).off(Ye),
                          (this._element = null),
                          (this._scrollElement = null),
                          (this._config = null),
                          (this._selector = null),
                          (this._offsets = null),
                          (this._targets = null),
                          (this._activeTarget = null),
                          (this._scrollHeight = null);
                  }),
                  (t._getConfig = function (t) {
                      if ("string" != typeof (t = h({}, qe, "object" == typeof t && t ? t : {})).target) {
                          var e = Ve(t.target).attr("id");
                          e || ((e = Cn.getUID(Qe)), Ve(t.target).attr("id", e)), (t.target = "#" + e);
                      }
                      return Cn.typeCheckConfig(Qe, t, ze), t;
                  }),
                  (t._getScrollTop = function () {
                      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                  }),
                  (t._getScrollHeight = function () {
                      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                  }),
                  (t._getOffsetHeight = function () {
                      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                  }),
                  (t._process = function () {
                      var t = this._getScrollTop() + this._config.offset,
                          e = this._getScrollHeight(),
                          n = this._config.offset + e - this._getOffsetHeight();
                      if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                          var i = this._targets[this._targets.length - 1];
                          this._activeTarget !== i && this._activate(i);
                      } else {
                          if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                          for (var r = this._offsets.length; r--; ) {
                              this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
                          }
                      }
                  }),
                  (t._activate = function (e) {
                      (this._activeTarget = e), this._clear();
                      var t = this._selector.split(",");
                      t = t.map(function (t) {
                          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                      });
                      var n = Ve(t.join(","));
                      n.hasClass(Je)
                          ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze))
                          : (n.addClass(Ze),
                            n
                                .parents($e.NAV_LIST_GROUP)
                                .prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS)
                                .addClass(Ze),
                            n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)),
                          Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e });
                  }),
                  (t._clear = function () {
                      Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
                  }),
                  (n._jQueryInterface = function (e) {
                      return this.each(function () {
                          var t = Ve(this).data(Be);
                          if ((t || ((t = new n(this, "object" == typeof e && e)), Ve(this).data(Be, t)), "string" == typeof e)) {
                              if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                              t[e]();
                          }
                      });
                  }),
                  o(n, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                      {
                          key: "Default",
                          get: function () {
                              return qe;
                          },
                      },
                  ]),
                  n
              );
          })()),
          Ve(window).on(Xe.LOAD_DATA_API, function () {
              for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--; ) {
                  var n = Ve(t[e]);
                  nn._jQueryInterface.call(n, n.data());
              }
          }),
          (Ve.fn[Qe] = nn._jQueryInterface),
          (Ve.fn[Qe].Constructor = nn),
          (Ve.fn[Qe].noConflict = function () {
              return (Ve.fn[Qe] = Ge), nn._jQueryInterface;
          }),
          nn),
      Pn =
          ((on = "." + (sn = "bs.tab")),
          (an = (rn = e).fn.tab),
          (ln = { HIDE: "hide" + on, HIDDEN: "hidden" + on, SHOW: "show" + on, SHOWN: "shown" + on, CLICK_DATA_API: "click" + on + ".data-api" }),
          (hn = "dropdown-menu"),
          (cn = "active"),
          (un = "disabled"),
          (fn = "fade"),
          (dn = "show"),
          (_n = ".dropdown"),
          (gn = ".nav, .list-group"),
          (mn = ".active"),
          (pn = "> li > .active"),
          (vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
          (En = ".dropdown-toggle"),
          (yn = "> .dropdown-menu .active"),
          (Tn = (function () {
              function i(t) {
                  this._element = t;
              }
              var t = i.prototype;
              return (
                  (t.show = function () {
                      var n = this;
                      if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn)) || rn(this._element).hasClass(un))) {
                          var t,
                              i,
                              e = rn(this._element).closest(gn)[0],
                              r = Cn.getSelectorFromElement(this._element);
                          if (e) {
                              var s = "UL" === e.nodeName ? pn : mn;
                              i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
                          }
                          var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
                              a = rn.Event(ln.SHOW, { relatedTarget: i });
                          if ((i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented())) {
                              r && (t = rn(r)[0]), this._activate(this._element, e);
                              var l = function () {
                                  var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                                      e = rn.Event(ln.SHOWN, { relatedTarget: i });
                                  rn(i).trigger(t), rn(n._element).trigger(e);
                              };
                              t ? this._activate(t, t.parentNode, l) : l();
                          }
                      }
                  }),
                  (t.dispose = function () {
                      rn.removeData(this._element, sn), (this._element = null);
                  }),
                  (t._activate = function (t, e, n) {
                      var i = this,
                          r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
                          s = n && r && rn(r).hasClass(fn),
                          o = function () {
                              return i._transitionComplete(t, r, n);
                          };
                      if (r && s) {
                          var a = Cn.getTransitionDurationFromElement(r);
                          rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
                      } else o();
                  }),
                  (t._transitionComplete = function (t, e, n) {
                      if (e) {
                          rn(e).removeClass(dn + " " + cn);
                          var i = rn(e.parentNode).find(yn)[0];
                          i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                      }
                      if ((rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn))) {
                          var r = rn(t).closest(_n)[0];
                          r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0);
                      }
                      n && n();
                  }),
                  (i._jQueryInterface = function (n) {
                      return this.each(function () {
                          var t = rn(this),
                              e = t.data(sn);
                          if ((e || ((e = new i(this)), t.data(sn, e)), "string" == typeof n)) {
                              if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                              e[n]();
                          }
                      });
                  }),
                  o(i, null, [
                      {
                          key: "VERSION",
                          get: function () {
                              return "4.1.1";
                          },
                      },
                  ]),
                  i
              );
          })()),
          rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
              t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
          }),
          (rn.fn.tab = Tn._jQueryInterface),
          (rn.fn.tab.Constructor = Tn),
          (rn.fn.tab.noConflict = function () {
              return (rn.fn.tab = an), Tn._jQueryInterface;
          }),
          Tn);
  !(function (t) {
      if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  })(e),
      (t.Util = Cn),
      (t.Alert = In),
      (t.Button = An),
      (t.Carousel = Dn),
      (t.Collapse = bn),
      (t.Dropdown = Sn),
      (t.Modal = wn),
      (t.Popover = On),
      (t.Scrollspy = kn),
      (t.Tab = Pn),
      (t.Tooltip = Nn),
      Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/*!
 Copyright 2008-2020 SpryMedia Ltd.

This source file is free software, available under the following license:
 MIT license - http://datatables.net/license

This source file is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

For details please refer to: http://www.datatables.net
DataTables 1.10.21
©2008-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (f, y, w) {
  f instanceof String && (f = String(f));
  for (var n = f.length, H = 0; H < n; H++) {
      var L = f[H];
      if (y.call(w, L, H, f)) return { i: H, v: L };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (f, y, w) {
            f != Array.prototype && f != Object.prototype && (f[y] = w.value);
        };
$jscomp.getGlobal = function (f) {
  f = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, f];
  for (var y = 0; y < f.length; ++y) {
      var w = f[y];
      if (w && w.Math == Math) return w;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (f, y, w, n) {
  if (y) {
      w = $jscomp.global;
      f = f.split(".");
      for (n = 0; n < f.length - 1; n++) {
          var H = f[n];
          H in w || (w[H] = {});
          w = w[H];
      }
      f = f[f.length - 1];
      n = w[f];
      y = y(n);
      y != n && null != y && $jscomp.defineProperty(w, f, { configurable: !0, writable: !0, value: y });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (f) {
      return f
          ? f
          : function (f, w) {
                return $jscomp.findInternal(this, f, w).v;
            };
  },
  "es6",
  "es3"
);
(function (f) {
  "function" === typeof define && define.amd
      ? define(["jquery"], function (y) {
            return f(y, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (y, w) {
            y || (y = window);
            w || (w = "undefined" !== typeof window ? require("jquery") : require("jquery")(y));
            return f(w, y, y.document);
        })
      : f(jQuery, window, document);
})(function (f, y, w, n) {
  function H(a) {
      var b,
          c,
          d = {};
      f.each(a, function (e, h) {
          (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && ((c = e.replace(b[0], b[2].toLowerCase())), (d[c] = e), "o" === b[1] && H(a[e]));
      });
      a._hungarianMap = d;
  }
  function L(a, b, c) {
      a._hungarianMap || H(a);
      var d;
      f.each(b, function (e, h) {
          d = a._hungarianMap[e];
          d === n || (!c && b[d] !== n) || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), f.extend(!0, b[d], b[e]), L(a[d], b[d], c)) : (b[d] = b[e]));
      });
  }
  function Fa(a) {
      var b = q.defaults.oLanguage,
          c = b.sDecimal;
      c && Ga(c);
      if (a) {
          var d = a.sZeroRecords;
          !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && M(a, a, "sZeroRecords", "sEmptyTable");
          !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && M(a, a, "sZeroRecords", "sLoadingRecords");
          a.sInfoThousands && (a.sThousands = a.sInfoThousands);
          (a = a.sDecimal) && c !== a && Ga(a);
      }
  }
  function ib(a) {
      E(a, "ordering", "bSort");
      E(a, "orderMulti", "bSortMulti");
      E(a, "orderClasses", "bSortClasses");
      E(a, "orderCellsTop", "bSortCellsTop");
      E(a, "order", "aaSorting");
      E(a, "orderFixed", "aaSortingFixed");
      E(a, "paging", "bPaginate");
      E(a, "pagingType", "sPaginationType");
      E(a, "pageLength", "iDisplayLength");
      E(a, "searching", "bFilter");
      "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
      "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
      if ((a = a.aoSearchCols)) for (var b = 0, c = a.length; b < c; b++) a[b] && L(q.models.oSearch, a[b]);
  }
  function jb(a) {
      E(a, "orderable", "bSortable");
      E(a, "orderData", "aDataSort");
      E(a, "orderSequence", "asSorting");
      E(a, "orderDataType", "sortDataType");
      var b = a.aDataSort;
      "number" !== typeof b || f.isArray(b) || (a.aDataSort = [b]);
  }
  function kb(a) {
      if (!q.__browser) {
          var b = {};
          q.__browser = b;
          var c = f("<div/>")
                  .css({ position: "fixed", top: 0, left: -1 * f(y).scrollLeft(), height: 1, width: 1, overflow: "hidden" })
                  .append(
                      f("<div/>")
                          .css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" })
                          .append(f("<div/>").css({ width: "100%", height: 10 }))
                  )
                  .appendTo("body"),
              d = c.children(),
              e = d.children();
          b.barWidth = d[0].offsetWidth - d[0].clientWidth;
          b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
          b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
          b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
          c.remove();
      }
      f.extend(a.oBrowser, q.__browser);
      a.oScroll.iBarWidth = q.__browser.barWidth;
  }
  function lb(a, b, c, d, e, h) {
      var g = !1;
      if (c !== n) {
          var k = c;
          g = !0;
      }
      for (; d !== e; ) a.hasOwnProperty(d) && ((k = g ? b(k, a[d], d, a) : a[d]), (g = !0), (d += h));
      return k;
  }
  function Ha(a, b) {
      var c = q.defaults.column,
          d = a.aoColumns.length;
      c = f.extend({}, q.models.oColumn, c, { nTh: b ? b : w.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d });
      a.aoColumns.push(c);
      c = a.aoPreSearchCols;
      c[d] = f.extend({}, q.models.oSearch, c[d]);
      la(a, d, f(b).data());
  }
  function la(a, b, c) {
      b = a.aoColumns[b];
      var d = a.oClasses,
          e = f(b.nTh);
      if (!b.sWidthOrig) {
          b.sWidthOrig = e.attr("width") || null;
          var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
          h && (b.sWidthOrig = h[1]);
      }
      c !== n &&
          null !== c &&
          (jb(c),
          L(q.defaults.column, c, !0),
          c.mDataProp === n || c.mData || (c.mData = c.mDataProp),
          c.sType && (b._sManualType = c.sType),
          c.className && !c.sClass && (c.sClass = c.className),
          c.sClass && e.addClass(c.sClass),
          f.extend(b, c),
          M(b, c, "sWidth", "sWidthOrig"),
          c.iDataSort !== n && (b.aDataSort = [c.iDataSort]),
          M(b, c, "aDataSort"));
      var g = b.mData,
          k = T(g),
          l = b.mRender ? T(b.mRender) : null;
      c = function (a) {
          return "string" === typeof a && -1 !== a.indexOf("@");
      };
      b._bAttrSrc = f.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
      b._setter = null;
      b.fnGetData = function (a, b, c) {
          var d = k(a, b, n, c);
          return l && b ? l(d, b, a, c) : d;
      };
      b.fnSetData = function (a, b, c) {
          return Q(g)(a, b, c);
      };
      "number" !== typeof g && (a._rowReadObject = !0);
      a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
      a = -1 !== f.inArray("asc", b.asSorting);
      c = -1 !== f.inArray("desc", b.asSorting);
      b.bSortable && (a || c)
          ? a && !c
              ? ((b.sSortingClass = d.sSortableAsc), (b.sSortingClassJUI = d.sSortJUIAscAllowed))
              : !a && c
              ? ((b.sSortingClass = d.sSortableDesc), (b.sSortingClassJUI = d.sSortJUIDescAllowed))
              : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI))
          : ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ""));
  }
  function Z(a) {
      if (!1 !== a.oFeatures.bAutoWidth) {
          var b = a.aoColumns;
          Ia(a);
          for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth;
      }
      b = a.oScroll;
      ("" === b.sY && "" === b.sX) || ma(a);
      A(a, null, "column-sizing", [a]);
  }
  function aa(a, b) {
      a = na(a, "bVisible");
      return "number" === typeof a[b] ? a[b] : null;
  }
  function ba(a, b) {
      a = na(a, "bVisible");
      b = f.inArray(b, a);
      return -1 !== b ? b : null;
  }
  function V(a) {
      var b = 0;
      f.each(a.aoColumns, function (a, d) {
          d.bVisible && "none" !== f(d.nTh).css("display") && b++;
      });
      return b;
  }
  function na(a, b) {
      var c = [];
      f.map(a.aoColumns, function (a, e) {
          a[b] && c.push(e);
      });
      return c;
  }
  function Ja(a) {
      var b = a.aoColumns,
          c = a.aoData,
          d = q.ext.type.detect,
          e,
          h,
          g;
      var k = 0;
      for (e = b.length; k < e; k++) {
          var f = b[k];
          var m = [];
          if (!f.sType && f._sManualType) f.sType = f._sManualType;
          else if (!f.sType) {
              var p = 0;
              for (h = d.length; p < h; p++) {
                  var v = 0;
                  for (g = c.length; v < g; v++) {
                      m[v] === n && (m[v] = F(a, v, k, "type"));
                      var u = d[p](m[v], a);
                      if (!u && p !== d.length - 1) break;
                      if ("html" === u) break;
                  }
                  if (u) {
                      f.sType = u;
                      break;
                  }
              }
              f.sType || (f.sType = "string");
          }
      }
  }
  function mb(a, b, c, d) {
      var e,
          h,
          g,
          k = a.aoColumns;
      if (b)
          for (e = b.length - 1; 0 <= e; e--) {
              var l = b[e];
              var m = l.targets !== n ? l.targets : l.aTargets;
              f.isArray(m) || (m = [m]);
              var p = 0;
              for (h = m.length; p < h; p++)
                  if ("number" === typeof m[p] && 0 <= m[p]) {
                      for (; k.length <= m[p]; ) Ha(a);
                      d(m[p], l);
                  } else if ("number" === typeof m[p] && 0 > m[p]) d(k.length + m[p], l);
                  else if ("string" === typeof m[p]) {
                      var v = 0;
                      for (g = k.length; v < g; v++) ("_all" == m[p] || f(k[v].nTh).hasClass(m[p])) && d(v, l);
                  }
          }
      if (c) for (e = 0, a = c.length; e < a; e++) d(e, c[e]);
  }
  function R(a, b, c, d) {
      var e = a.aoData.length,
          h = f.extend(!0, {}, q.models.oRow, { src: c ? "dom" : "data", idx: e });
      h._aData = b;
      a.aoData.push(h);
      for (var g = a.aoColumns, k = 0, l = g.length; k < l; k++) g[k].sType = null;
      a.aiDisplayMaster.push(e);
      b = a.rowIdFn(b);
      b !== n && (a.aIds[b] = h);
      (!c && a.oFeatures.bDeferRender) || Ka(a, e, c, d);
      return e;
  }
  function oa(a, b) {
      var c;
      b instanceof f || (b = f(b));
      return b.map(function (b, e) {
          c = La(a, e);
          return R(a, c.data, e, c.cells);
      });
  }
  function F(a, b, c, d) {
      var e = a.iDraw,
          h = a.aoColumns[c],
          g = a.aoData[b]._aData,
          k = h.sDefaultContent,
          f = h.fnGetData(g, d, { settings: a, row: b, col: c });
      if (f === n) return a.iDrawError != e && null === k && (O(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4), (a.iDrawError = e)), k;
      if ((f === g || null === f) && null !== k && d !== n) f = k;
      else if ("function" === typeof f) return f.call(g);
      return null === f && "display" == d ? "" : f;
  }
  function nb(a, b, c, d) {
      a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c });
  }
  function Ma(a) {
      return f.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
          return a.replace(/\\\./g, ".");
      });
  }
  function T(a) {
      if (f.isPlainObject(a)) {
          var b = {};
          f.each(a, function (a, c) {
              c && (b[a] = T(c));
          });
          return function (a, c, h, g) {
              var d = b[c] || b._;
              return d !== n ? d(a, c, h, g) : a;
          };
      }
      if (null === a)
          return function (a) {
              return a;
          };
      if ("function" === typeof a)
          return function (b, c, h, g) {
              return a(b, c, h, g);
          };
      if ("string" !== typeof a || (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")))
          return function (b, c) {
              return b[a];
          };
      var c = function (a, b, h) {
          if ("" !== h) {
              var d = Ma(h);
              for (var e = 0, l = d.length; e < l; e++) {
                  h = d[e].match(ca);
                  var m = d[e].match(W);
                  if (h) {
                      d[e] = d[e].replace(ca, "");
                      "" !== d[e] && (a = a[d[e]]);
                      m = [];
                      d.splice(0, e + 1);
                      d = d.join(".");
                      if (f.isArray(a)) for (e = 0, l = a.length; e < l; e++) m.push(c(a[e], b, d));
                      a = h[0].substring(1, h[0].length - 1);
                      a = "" === a ? m : m.join(a);
                      break;
                  } else if (m) {
                      d[e] = d[e].replace(W, "");
                      a = a[d[e]]();
                      continue;
                  }
                  if (null === a || a[d[e]] === n) return n;
                  a = a[d[e]];
              }
          }
          return a;
      };
      return function (b, e) {
          return c(b, e, a);
      };
  }
  function Q(a) {
      if (f.isPlainObject(a)) return Q(a._);
      if (null === a) return function () {};
      if ("function" === typeof a)
          return function (b, d, e) {
              a(b, "set", d, e);
          };
      if ("string" !== typeof a || (-1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")))
          return function (b, d) {
              b[a] = d;
          };
      var b = function (a, d, e) {
          e = Ma(e);
          var c = e[e.length - 1];
          for (var g, k, l = 0, m = e.length - 1; l < m; l++) {
              g = e[l].match(ca);
              k = e[l].match(W);
              if (g) {
                  e[l] = e[l].replace(ca, "");
                  a[e[l]] = [];
                  c = e.slice();
                  c.splice(0, l + 1);
                  g = c.join(".");
                  if (f.isArray(d)) for (k = 0, m = d.length; k < m; k++) (c = {}), b(c, d[k], g), a[e[l]].push(c);
                  else a[e[l]] = d;
                  return;
              }
              k && ((e[l] = e[l].replace(W, "")), (a = a[e[l]](d)));
              if (null === a[e[l]] || a[e[l]] === n) a[e[l]] = {};
              a = a[e[l]];
          }
          if (c.match(W)) a[c.replace(W, "")](d);
          else a[c.replace(ca, "")] = d;
      };
      return function (c, d) {
          return b(c, d, a);
      };
  }
  function Na(a) {
      return K(a.aoData, "_aData");
  }
  function pa(a) {
      a.aoData.length = 0;
      a.aiDisplayMaster.length = 0;
      a.aiDisplay.length = 0;
      a.aIds = {};
  }
  function qa(a, b, c) {
      for (var d = -1, e = 0, h = a.length; e < h; e++) a[e] == b ? (d = e) : a[e] > b && a[e]--;
      -1 != d && c === n && a.splice(d, 1);
  }
  function da(a, b, c, d) {
      var e = a.aoData[b],
          h,
          g = function (c, d) {
              for (; c.childNodes.length; ) c.removeChild(c.firstChild);
              c.innerHTML = F(a, b, d, "display");
          };
      if ("dom" !== c && ((c && "auto" !== c) || "dom" !== e.src)) {
          var k = e.anCells;
          if (k)
              if (d !== n) g(k[d], d);
              else for (c = 0, h = k.length; c < h; c++) g(k[c], c);
      } else e._aData = La(a, e, d, d === n ? n : e._aData).data;
      e._aSortData = null;
      e._aFilterData = null;
      g = a.aoColumns;
      if (d !== n) g[d].sType = null;
      else {
          c = 0;
          for (h = g.length; c < h; c++) g[c].sType = null;
          Oa(a, e);
      }
  }
  function La(a, b, c, d) {
      var e = [],
          h = b.firstChild,
          g,
          k = 0,
          l,
          m = a.aoColumns,
          p = a._rowReadObject;
      d = d !== n ? d : p ? {} : [];
      var v = function (a, b) {
              if ("string" === typeof a) {
                  var c = a.indexOf("@");
                  -1 !== c && ((c = a.substring(c + 1)), Q(a)(d, b.getAttribute(c)));
              }
          },
          u = function (a) {
              if (c === n || c === k)
                  (g = m[k]), (l = f.trim(a.innerHTML)), g && g._bAttrSrc ? (Q(g.mData._)(d, l), v(g.mData.sort, a), v(g.mData.type, a), v(g.mData.filter, a)) : p ? (g._setter || (g._setter = Q(g.mData)), g._setter(d, l)) : (d[k] = l);
              k++;
          };
      if (h)
          for (; h; ) {
              var q = h.nodeName.toUpperCase();
              if ("TD" == q || "TH" == q) u(h), e.push(h);
              h = h.nextSibling;
          }
      else for (e = b.anCells, h = 0, q = e.length; h < q; h++) u(e[h]);
      (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && Q(a.rowId)(d, b);
      return { data: d, cells: e };
  }
  function Ka(a, b, c, d) {
      var e = a.aoData[b],
          h = e._aData,
          g = [],
          k,
          l;
      if (null === e.nTr) {
          var m = c || w.createElement("tr");
          e.nTr = m;
          e.anCells = g;
          m._DT_RowIndex = b;
          Oa(a, e);
          var p = 0;
          for (k = a.aoColumns.length; p < k; p++) {
              var v = a.aoColumns[p];
              var n = (l = c ? !1 : !0) ? w.createElement(v.sCellType) : d[p];
              n._DT_CellIndex = { row: b, column: p };
              g.push(n);
              if (l || !((c && !v.mRender && v.mData === p) || (f.isPlainObject(v.mData) && v.mData._ === p + ".display"))) n.innerHTML = F(a, b, p, "display");
              v.sClass && (n.className += " " + v.sClass);
              v.bVisible && !c ? m.appendChild(n) : !v.bVisible && c && n.parentNode.removeChild(n);
              v.fnCreatedCell && v.fnCreatedCell.call(a.oInstance, n, F(a, b, p), h, b, p);
          }
          A(a, "aoRowCreatedCallback", null, [m, h, b, g]);
      }
      e.nTr.setAttribute("role", "row");
  }
  function Oa(a, b) {
      var c = b.nTr,
          d = b._aData;
      if (c) {
          if ((a = a.rowIdFn(d))) c.id = a;
          d.DT_RowClass && ((a = d.DT_RowClass.split(" ")), (b.__rowc = b.__rowc ? sa(b.__rowc.concat(a)) : a), f(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
          d.DT_RowAttr && f(c).attr(d.DT_RowAttr);
          d.DT_RowData && f(c).data(d.DT_RowData);
      }
  }
  function ob(a) {
      var b,
          c,
          d = a.nTHead,
          e = a.nTFoot,
          h = 0 === f("th, td", d).length,
          g = a.oClasses,
          k = a.aoColumns;
      h && (c = f("<tr/>").appendTo(d));
      var l = 0;
      for (b = k.length; l < b; l++) {
          var m = k[l];
          var p = f(m.nTh).addClass(m.sClass);
          h && p.appendTo(c);
          a.oFeatures.bSort && (p.addClass(m.sSortingClass), !1 !== m.bSortable && (p.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Pa(a, m.nTh, l)));
          m.sTitle != p[0].innerHTML && p.html(m.sTitle);
          Qa(a, "header")(a, p, m, g);
      }
      h && ea(a.aoHeader, d);
      f(d).find(">tr").attr("role", "row");
      f(d).find(">tr>th, >tr>td").addClass(g.sHeaderTH);
      f(e).find(">tr>th, >tr>td").addClass(g.sFooterTH);
      if (null !== e) for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) (m = k[l]), (m.nTf = a[l].cell), m.sClass && f(m.nTf).addClass(m.sClass);
  }
  function fa(a, b, c) {
      var d,
          e,
          h = [],
          g = [],
          k = a.aoColumns.length;
      if (b) {
          c === n && (c = !1);
          var l = 0;
          for (d = b.length; l < d; l++) {
              h[l] = b[l].slice();
              h[l].nTr = b[l].nTr;
              for (e = k - 1; 0 <= e; e--) a.aoColumns[e].bVisible || c || h[l].splice(e, 1);
              g.push([]);
          }
          l = 0;
          for (d = h.length; l < d; l++) {
              if ((a = h[l].nTr)) for (; (e = a.firstChild); ) a.removeChild(e);
              e = 0;
              for (b = h[l].length; e < b; e++) {
                  var m = (k = 1);
                  if (g[l][e] === n) {
                      a.appendChild(h[l][e].cell);
                      for (g[l][e] = 1; h[l + k] !== n && h[l][e].cell == h[l + k][e].cell; ) (g[l + k][e] = 1), k++;
                      for (; h[l][e + m] !== n && h[l][e].cell == h[l][e + m].cell; ) {
                          for (c = 0; c < k; c++) g[l + c][e + m] = 1;
                          m++;
                      }
                      f(h[l][e].cell).attr("rowspan", k).attr("colspan", m);
                  }
              }
          }
      }
  }
  function S(a) {
      var b = A(a, "aoPreDrawCallback", "preDraw", [a]);
      if (-1 !== f.inArray(!1, b)) J(a, !1);
      else {
          b = [];
          var c = 0,
              d = a.asStripeClasses,
              e = d.length,
              h = a.oLanguage,
              g = a.iInitDisplayStart,
              k = "ssp" == I(a),
              l = a.aiDisplay;
          a.bDrawing = !0;
          g !== n && -1 !== g && ((a._iDisplayStart = k ? g : g >= a.fnRecordsDisplay() ? 0 : g), (a.iInitDisplayStart = -1));
          g = a._iDisplayStart;
          var m = a.fnDisplayEnd();
          if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, J(a, !1);
          else if (!k) a.iDraw++;
          else if (!a.bDestroying && !pb(a)) return;
          if (0 !== l.length)
              for (h = k ? a.aoData.length : m, k = k ? 0 : g; k < h; k++) {
                  var p = l[k],
                      v = a.aoData[p];
                  null === v.nTr && Ka(a, p);
                  var u = v.nTr;
                  if (0 !== e) {
                      var q = d[c % e];
                      v._sRowStripe != q && (f(u).removeClass(v._sRowStripe).addClass(q), (v._sRowStripe = q));
                  }
                  A(a, "aoRowCallback", null, [u, v._aData, c, k, p]);
                  b.push(u);
                  c++;
              }
          else
              (c = h.sZeroRecords),
                  1 == a.iDraw && "ajax" == I(a) ? (c = h.sLoadingRecords) : h.sEmptyTable && 0 === a.fnRecordsTotal() && (c = h.sEmptyTable),
                  (b[0] = f("<tr/>", { class: e ? d[0] : "" }).append(f("<td />", { valign: "top", colSpan: V(a), class: a.oClasses.sRowEmpty }).html(c))[0]);
          A(a, "aoHeaderCallback", "header", [f(a.nTHead).children("tr")[0], Na(a), g, m, l]);
          A(a, "aoFooterCallback", "footer", [f(a.nTFoot).children("tr")[0], Na(a), g, m, l]);
          d = f(a.nTBody);
          d.children().detach();
          d.append(f(b));
          A(a, "aoDrawCallback", "draw", [a]);
          a.bSorted = !1;
          a.bFiltered = !1;
          a.bDrawing = !1;
      }
  }
  function U(a, b) {
      var c = a.oFeatures,
          d = c.bFilter;
      c.bSort && qb(a);
      d ? ha(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
      !0 !== b && (a._iDisplayStart = 0);
      a._drawHold = b;
      S(a);
      a._drawHold = !1;
  }
  function rb(a) {
      var b = a.oClasses,
          c = f(a.nTable);
      c = f("<div/>").insertBefore(c);
      var d = a.oFeatures,
          e = f("<div/>", { id: a.sTableId + "_wrapper", class: b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });
      a.nHolding = c[0];
      a.nTableWrapper = e[0];
      a.nTableReinsertBefore = a.nTable.nextSibling;
      for (var h = a.sDom.split(""), g, k, l, m, p, n, u = 0; u < h.length; u++) {
          g = null;
          k = h[u];
          if ("<" == k) {
              l = f("<div/>")[0];
              m = h[u + 1];
              if ("'" == m || '"' == m) {
                  p = "";
                  for (n = 2; h[u + n] != m; ) (p += h[u + n]), n++;
                  "H" == p ? (p = b.sJUIHeader) : "F" == p && (p = b.sJUIFooter);
                  -1 != p.indexOf(".") ? ((m = p.split(".")), (l.id = m[0].substr(1, m[0].length - 1)), (l.className = m[1])) : "#" == p.charAt(0) ? (l.id = p.substr(1, p.length - 1)) : (l.className = p);
                  u += n;
              }
              e.append(l);
              e = f(l);
          } else if (">" == k) e = e.parent();
          else if ("l" == k && d.bPaginate && d.bLengthChange) g = sb(a);
          else if ("f" == k && d.bFilter) g = tb(a);
          else if ("r" == k && d.bProcessing) g = ub(a);
          else if ("t" == k) g = vb(a);
          else if ("i" == k && d.bInfo) g = wb(a);
          else if ("p" == k && d.bPaginate) g = xb(a);
          else if (0 !== q.ext.feature.length)
              for (l = q.ext.feature, n = 0, m = l.length; n < m; n++)
                  if (k == l[n].cFeature) {
                      g = l[n].fnInit(a);
                      break;
                  }
          g && ((l = a.aanFeatures), l[k] || (l[k] = []), l[k].push(g), e.append(g));
      }
      c.replaceWith(e);
      a.nHolding = null;
  }
  function ea(a, b) {
      b = f(b).children("tr");
      var c, d, e;
      a.splice(0, a.length);
      var h = 0;
      for (e = b.length; h < e; h++) a.push([]);
      h = 0;
      for (e = b.length; h < e; h++) {
          var g = b[h];
          for (c = g.firstChild; c; ) {
              if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
                  var k = 1 * c.getAttribute("colspan");
                  var l = 1 * c.getAttribute("rowspan");
                  k = k && 0 !== k && 1 !== k ? k : 1;
                  l = l && 0 !== l && 1 !== l ? l : 1;
                  var m = 0;
                  for (d = a[h]; d[m]; ) m++;
                  var p = m;
                  var n = 1 === k ? !0 : !1;
                  for (d = 0; d < k; d++) for (m = 0; m < l; m++) (a[h + m][p + d] = { cell: c, unique: n }), (a[h + m].nTr = g);
              }
              c = c.nextSibling;
          }
      }
  }
  function ta(a, b, c) {
      var d = [];
      c || ((c = a.aoHeader), b && ((c = []), ea(c, b)));
      b = 0;
      for (var e = c.length; b < e; b++) for (var h = 0, g = c[b].length; h < g; h++) !c[b][h].unique || (d[h] && a.bSortCellsTop) || (d[h] = c[b][h].cell);
      return d;
  }
  function ua(a, b, c) {
      A(a, "aoServerParams", "serverParams", [b]);
      if (b && f.isArray(b)) {
          var d = {},
              e = /(.*?)\[\]$/;
          f.each(b, function (a, b) {
              (a = b.name.match(e)) ? ((a = a[0]), d[a] || (d[a] = []), d[a].push(b.value)) : (d[b.name] = b.value);
          });
          b = d;
      }
      var h = a.ajax,
          g = a.oInstance,
          k = function (b) {
              A(a, null, "xhr", [a, b, a.jqXHR]);
              c(b);
          };
      if (f.isPlainObject(h) && h.data) {
          var l = h.data;
          var m = "function" === typeof l ? l(b, a) : l;
          b = "function" === typeof l && m ? m : f.extend(!0, b, m);
          delete h.data;
      }
      m = {
          data: b,
          success: function (b) {
              var c = b.error || b.sError;
              c && O(a, 0, c);
              a.json = b;
              k(b);
          },
          dataType: "json",
          cache: !1,
          type: a.sServerMethod,
          error: function (b, c, d) {
              d = A(a, null, "xhr", [a, null, a.jqXHR]);
              -1 === f.inArray(!0, d) && ("parsererror" == c ? O(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && O(a, 0, "Ajax error", 7));
              J(a, !1);
          },
      };
      a.oAjaxData = b;
      A(a, null, "preXhr", [a, b]);
      a.fnServerData
          ? a.fnServerData.call(
                g,
                a.sAjaxSource,
                f.map(b, function (a, b) {
                    return { name: b, value: a };
                }),
                k,
                a
            )
          : a.sAjaxSource || "string" === typeof h
          ? (a.jqXHR = f.ajax(f.extend(m, { url: h || a.sAjaxSource })))
          : "function" === typeof h
          ? (a.jqXHR = h.call(g, b, k, a))
          : ((a.jqXHR = f.ajax(f.extend(m, h))), (h.data = l));
  }
  function pb(a) {
      return a.bAjaxDataGet
          ? (a.iDraw++,
            J(a, !0),
            ua(a, yb(a), function (b) {
                zb(a, b);
            }),
            !1)
          : !0;
  }
  function yb(a) {
      var b = a.aoColumns,
          c = b.length,
          d = a.oFeatures,
          e = a.oPreviousSearch,
          h = a.aoPreSearchCols,
          g = [],
          k = X(a);
      var l = a._iDisplayStart;
      var m = !1 !== d.bPaginate ? a._iDisplayLength : -1;
      var p = function (a, b) {
          g.push({ name: a, value: b });
      };
      p("sEcho", a.iDraw);
      p("iColumns", c);
      p("sColumns", K(b, "sName").join(","));
      p("iDisplayStart", l);
      p("iDisplayLength", m);
      var n = { draw: a.iDraw, columns: [], order: [], start: l, length: m, search: { value: e.sSearch, regex: e.bRegex } };
      for (l = 0; l < c; l++) {
          var u = b[l];
          var ra = h[l];
          m = "function" == typeof u.mData ? "function" : u.mData;
          n.columns.push({ data: m, name: u.sName, searchable: u.bSearchable, orderable: u.bSortable, search: { value: ra.sSearch, regex: ra.bRegex } });
          p("mDataProp_" + l, m);
          d.bFilter && (p("sSearch_" + l, ra.sSearch), p("bRegex_" + l, ra.bRegex), p("bSearchable_" + l, u.bSearchable));
          d.bSort && p("bSortable_" + l, u.bSortable);
      }
      d.bFilter && (p("sSearch", e.sSearch), p("bRegex", e.bRegex));
      d.bSort &&
          (f.each(k, function (a, b) {
              n.order.push({ column: b.col, dir: b.dir });
              p("iSortCol_" + a, b.col);
              p("sSortDir_" + a, b.dir);
          }),
          p("iSortingCols", k.length));
      b = q.ext.legacy.ajax;
      return null === b ? (a.sAjaxSource ? g : n) : b ? g : n;
  }
  function zb(a, b) {
      var c = function (a, c) {
              return b[a] !== n ? b[a] : b[c];
          },
          d = va(a, b),
          e = c("sEcho", "draw"),
          h = c("iTotalRecords", "recordsTotal");
      c = c("iTotalDisplayRecords", "recordsFiltered");
      if (e !== n) {
          if (1 * e < a.iDraw) return;
          a.iDraw = 1 * e;
      }
      pa(a);
      a._iRecordsTotal = parseInt(h, 10);
      a._iRecordsDisplay = parseInt(c, 10);
      e = 0;
      for (h = d.length; e < h; e++) R(a, d[e]);
      a.aiDisplay = a.aiDisplayMaster.slice();
      a.bAjaxDataGet = !1;
      S(a);
      a._bInitComplete || wa(a, b);
      a.bAjaxDataGet = !0;
      J(a, !1);
  }
  function va(a, b) {
      a = f.isPlainObject(a.ajax) && a.ajax.dataSrc !== n ? a.ajax.dataSrc : a.sAjaxDataProp;
      return "data" === a ? b.aaData || b[a] : "" !== a ? T(a)(b) : b;
  }
  function tb(a) {
      var b = a.oClasses,
          c = a.sTableId,
          d = a.oLanguage,
          e = a.oPreviousSearch,
          h = a.aanFeatures,
          g = '<input type="search" class="' + b.sFilterInput + '"/>',
          k = d.sSearch;
      k = k.match(/_INPUT_/) ? k.replace("_INPUT_", g) : k + g;
      b = f("<div/>", { id: h.f ? null : c + "_filter", class: b.sFilter }).append(f("<label/>").append(k));
      var l = function () {
          var b = this.value ? this.value : "";
          b != e.sSearch && (ha(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), (a._iDisplayStart = 0), S(a));
      };
      h = null !== a.searchDelay ? a.searchDelay : "ssp" === I(a) ? 400 : 0;
      var m = f("input", b)
          .val(e.sSearch)
          .attr("placeholder", d.sSearchPlaceholder)
          .on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? Ra(l, h) : l)
          .on("mouseup", function (a) {
              setTimeout(function () {
                  l.call(m[0]);
              }, 10);
          })
          .on("keypress.DT", function (a) {
              if (13 == a.keyCode) return !1;
          })
          .attr("aria-controls", c);
      f(a.nTable).on("search.dt.DT", function (b, c) {
          if (a === c)
              try {
                  m[0] !== w.activeElement && m.val(e.sSearch);
              } catch (u) {}
      });
      return b[0];
  }
  function ha(a, b, c) {
      var d = a.oPreviousSearch,
          e = a.aoPreSearchCols,
          h = function (a) {
              d.sSearch = a.sSearch;
              d.bRegex = a.bRegex;
              d.bSmart = a.bSmart;
              d.bCaseInsensitive = a.bCaseInsensitive;
          },
          g = function (a) {
              return a.bEscapeRegex !== n ? !a.bEscapeRegex : a.bRegex;
          };
      Ja(a);
      if ("ssp" != I(a)) {
          Ab(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
          h(b);
          for (b = 0; b < e.length; b++) Bb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
          Cb(a);
      } else h(b);
      a.bFiltered = !0;
      A(a, null, "search", [a]);
  }
  function Cb(a) {
      for (var b = q.ext.search, c = a.aiDisplay, d, e, h = 0, g = b.length; h < g; h++) {
          for (var k = [], l = 0, m = c.length; l < m; l++) (e = c[l]), (d = a.aoData[e]), b[h](a, d._aFilterData, e, d._aData, l) && k.push(e);
          c.length = 0;
          f.merge(c, k);
      }
  }
  function Bb(a, b, c, d, e, h) {
      if ("" !== b) {
          var g = [],
              k = a.aiDisplay;
          d = Sa(b, d, e, h);
          for (e = 0; e < k.length; e++) (b = a.aoData[k[e]]._aFilterData[c]), d.test(b) && g.push(k[e]);
          a.aiDisplay = g;
      }
  }
  function Ab(a, b, c, d, e, h) {
      e = Sa(b, d, e, h);
      var g = a.oPreviousSearch.sSearch,
          k = a.aiDisplayMaster;
      h = [];
      0 !== q.ext.search.length && (c = !0);
      var f = Db(a);
      if (0 >= b.length) a.aiDisplay = k.slice();
      else {
          if (f || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = k.slice();
          b = a.aiDisplay;
          for (c = 0; c < b.length; c++) e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
          a.aiDisplay = h;
      }
  }
  function Sa(a, b, c, d) {
      a = b ? a : Ta(a);
      c &&
          (a =
              "^(?=.*?" +
              f
                  .map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
                      if ('"' === a.charAt(0)) {
                          var b = a.match(/^"(.*)"$/);
                          a = b ? b[1] : a;
                      }
                      return a.replace('"', "");
                  })
                  .join(")(?=.*?") +
              ").*$");
      return new RegExp(a, d ? "i" : "");
  }
  function Db(a) {
      var b = a.aoColumns,
          c,
          d,
          e = q.ext.type.search;
      var h = !1;
      var g = 0;
      for (c = a.aoData.length; g < c; g++) {
          var k = a.aoData[g];
          if (!k._aFilterData) {
              var f = [];
              var m = 0;
              for (d = b.length; m < d; m++) {
                  h = b[m];
                  if (h.bSearchable) {
                      var p = F(a, g, m, "filter");
                      e[h.sType] && (p = e[h.sType](p));
                      null === p && (p = "");
                      "string" !== typeof p && p.toString && (p = p.toString());
                  } else p = "";
                  p.indexOf && -1 !== p.indexOf("&") && ((xa.innerHTML = p), (p = $b ? xa.textContent : xa.innerText));
                  p.replace && (p = p.replace(/[\r\n\u2028]/g, ""));
                  f.push(p);
              }
              k._aFilterData = f;
              k._sFilterRow = f.join("  ");
              h = !0;
          }
      }
      return h;
  }
  function Eb(a) {
      return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive };
  }
  function Fb(a) {
      return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive };
  }
  function wb(a) {
      var b = a.sTableId,
          c = a.aanFeatures.i,
          d = f("<div/>", { class: a.oClasses.sInfo, id: c ? null : b + "_info" });
      c || (a.aoDrawCallback.push({ fn: Gb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), f(a.nTable).attr("aria-describedby", b + "_info"));
      return d[0];
  }
  function Gb(a) {
      var b = a.aanFeatures.i;
      if (0 !== b.length) {
          var c = a.oLanguage,
              d = a._iDisplayStart + 1,
              e = a.fnDisplayEnd(),
              h = a.fnRecordsTotal(),
              g = a.fnRecordsDisplay(),
              k = g ? c.sInfo : c.sInfoEmpty;
          g !== h && (k += " " + c.sInfoFiltered);
          k += c.sInfoPostFix;
          k = Hb(a, k);
          c = c.fnInfoCallback;
          null !== c && (k = c.call(a.oInstance, a, d, e, h, g, k));
          f(b).html(k);
      }
  }
  function Hb(a, b) {
      var c = a.fnFormatNumber,
          d = a._iDisplayStart + 1,
          e = a._iDisplayLength,
          h = a.fnRecordsDisplay(),
          g = -1 === e;
      return b
          .replace(/_START_/g, c.call(a, d))
          .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
          .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
          .replace(/_TOTAL_/g, c.call(a, h))
          .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
          .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(h / e)));
  }
  function ia(a) {
      var b = a.iInitDisplayStart,
          c = a.aoColumns;
      var d = a.oFeatures;
      var e = a.bDeferLoading;
      if (a.bInitialised) {
          rb(a);
          ob(a);
          fa(a, a.aoHeader);
          fa(a, a.aoFooter);
          J(a, !0);
          d.bAutoWidth && Ia(a);
          var h = 0;
          for (d = c.length; h < d; h++) {
              var g = c[h];
              g.sWidth && (g.nTh.style.width = B(g.sWidth));
          }
          A(a, null, "preInit", [a]);
          U(a);
          c = I(a);
          if ("ssp" != c || e)
              "ajax" == c
                  ? ua(
                        a,
                        [],
                        function (c) {
                            var d = va(a, c);
                            for (h = 0; h < d.length; h++) R(a, d[h]);
                            a.iInitDisplayStart = b;
                            U(a);
                            J(a, !1);
                            wa(a, c);
                        },
                        a
                    )
                  : (J(a, !1), wa(a));
      } else
          setTimeout(function () {
              ia(a);
          }, 200);
  }
  function wa(a, b) {
      a._bInitComplete = !0;
      (b || a.oInit.aaData) && Z(a);
      A(a, null, "plugin-init", [a, b]);
      A(a, "aoInitComplete", "init", [a, b]);
  }
  function Ua(a, b) {
      b = parseInt(b, 10);
      a._iDisplayLength = b;
      Va(a);
      A(a, null, "length", [a, b]);
  }
  function sb(a) {
      var b = a.oClasses,
          c = a.sTableId,
          d = a.aLengthMenu,
          e = f.isArray(d[0]),
          h = e ? d[0] : d;
      d = e ? d[1] : d;
      e = f("<select/>", { name: c + "_length", "aria-controls": c, class: b.sLengthSelect });
      for (var g = 0, k = h.length; g < k; g++) e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], h[g]);
      var l = f("<div><label/></div>").addClass(b.sLength);
      a.aanFeatures.l || (l[0].id = c + "_length");
      l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
      f("select", l)
          .val(a._iDisplayLength)
          .on("change.DT", function (b) {
              Ua(a, f(this).val());
              S(a);
          });
      f(a.nTable).on("length.dt.DT", function (b, c, d) {
          a === c && f("select", l).val(d);
      });
      return l[0];
  }
  function xb(a) {
      var b = a.sPaginationType,
          c = q.ext.pager[b],
          d = "function" === typeof c,
          e = function (a) {
              S(a);
          };
      b = f("<div/>").addClass(a.oClasses.sPaging + b)[0];
      var h = a.aanFeatures;
      d || c.fnInit(a, b, e);
      h.p ||
          ((b.id = a.sTableId + "_paginate"),
          a.aoDrawCallback.push({
              fn: function (a) {
                  if (d) {
                      var b = a._iDisplayStart,
                          g = a._iDisplayLength,
                          f = a.fnRecordsDisplay(),
                          p = -1 === g;
                      b = p ? 0 : Math.ceil(b / g);
                      g = p ? 1 : Math.ceil(f / g);
                      f = c(b, g);
                      var n;
                      p = 0;
                      for (n = h.p.length; p < n; p++) Qa(a, "pageButton")(a, h.p[p], p, f, b, g);
                  } else c.fnUpdate(a, e);
              },
              sName: "pagination",
          }));
      return b;
  }
  function Wa(a, b, c) {
      var d = a._iDisplayStart,
          e = a._iDisplayLength,
          h = a.fnRecordsDisplay();
      0 === h || -1 === e
          ? (d = 0)
          : "number" === typeof b
          ? ((d = b * e), d > h && (d = 0))
          : "first" == b
          ? (d = 0)
          : "previous" == b
          ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
          : "next" == b
          ? d + e < h && (d += e)
          : "last" == b
          ? (d = Math.floor((h - 1) / e) * e)
          : O(a, 0, "Unknown paging action: " + b, 5);
      b = a._iDisplayStart !== d;
      a._iDisplayStart = d;
      b && (A(a, null, "page", [a]), c && S(a));
      return b;
  }
  function ub(a) {
      return f("<div/>", { id: a.aanFeatures.r ? null : a.sTableId + "_processing", class: a.oClasses.sProcessing })
          .html(a.oLanguage.sProcessing)
          .insertBefore(a.nTable)[0];
  }
  function J(a, b) {
      a.oFeatures.bProcessing && f(a.aanFeatures.r).css("display", b ? "block" : "none");
      A(a, null, "processing", [a, b]);
  }
  function vb(a) {
      var b = f(a.nTable);
      b.attr("role", "grid");
      var c = a.oScroll;
      if ("" === c.sX && "" === c.sY) return a.nTable;
      var d = c.sX,
          e = c.sY,
          h = a.oClasses,
          g = b.children("caption"),
          k = g.length ? g[0]._captionSide : null,
          l = f(b[0].cloneNode(!1)),
          m = f(b[0].cloneNode(!1)),
          p = b.children("tfoot");
      p.length || (p = null);
      l = f("<div/>", { class: h.sScrollWrapper })
          .append(
              f("<div/>", { class: h.sScrollHead })
                  .css({ overflow: "hidden", position: "relative", border: 0, width: d ? (d ? B(d) : null) : "100%" })
                  .append(
                      f("<div/>", { class: h.sScrollHeadInner })
                          .css({ "box-sizing": "content-box", width: c.sXInner || "100%" })
                          .append(
                              l
                                  .removeAttr("id")
                                  .css("margin-left", 0)
                                  .append("top" === k ? g : null)
                                  .append(b.children("thead"))
                          )
                  )
          )
          .append(
              f("<div/>", { class: h.sScrollBody })
                  .css({ position: "relative", overflow: "auto", width: d ? B(d) : null })
                  .append(b)
          );
      p &&
          l.append(
              f("<div/>", { class: h.sScrollFoot })
                  .css({ overflow: "hidden", border: 0, width: d ? (d ? B(d) : null) : "100%" })
                  .append(
                      f("<div/>", { class: h.sScrollFootInner }).append(
                          m
                              .removeAttr("id")
                              .css("margin-left", 0)
                              .append("bottom" === k ? g : null)
                              .append(b.children("tfoot"))
                      )
                  )
          );
      b = l.children();
      var n = b[0];
      h = b[1];
      var u = p ? b[2] : null;
      if (d)
          f(h).on("scroll.DT", function (a) {
              a = this.scrollLeft;
              n.scrollLeft = a;
              p && (u.scrollLeft = a);
          });
      f(h).css("max-height", e);
      c.bCollapse || f(h).css("height", e);
      a.nScrollHead = n;
      a.nScrollBody = h;
      a.nScrollFoot = u;
      a.aoDrawCallback.push({ fn: ma, sName: "scrolling" });
      return l[0];
  }
  function ma(a) {
      var b = a.oScroll,
          c = b.sX,
          d = b.sXInner,
          e = b.sY;
      b = b.iBarWidth;
      var h = f(a.nScrollHead),
          g = h[0].style,
          k = h.children("div"),
          l = k[0].style,
          m = k.children("table");
      k = a.nScrollBody;
      var p = f(k),
          v = k.style,
          u = f(a.nScrollFoot).children("div"),
          q = u.children("table"),
          t = f(a.nTHead),
          r = f(a.nTable),
          x = r[0],
          ya = x.style,
          w = a.nTFoot ? f(a.nTFoot) : null,
          y = a.oBrowser,
          A = y.bScrollOversize,
          ac = K(a.aoColumns, "nTh"),
          Xa = [],
          z = [],
          C = [],
          G = [],
          H,
          I = function (a) {
              a = a.style;
              a.paddingTop = "0";
              a.paddingBottom = "0";
              a.borderTopWidth = "0";
              a.borderBottomWidth = "0";
              a.height = 0;
          };
      var D = k.scrollHeight > k.clientHeight;
      if (a.scrollBarVis !== D && a.scrollBarVis !== n) (a.scrollBarVis = D), Z(a);
      else {
          a.scrollBarVis = D;
          r.children("thead, tfoot").remove();
          if (w) {
              var E = w.clone().prependTo(r);
              var F = w.find("tr");
              E = E.find("tr");
          }
          var J = t.clone().prependTo(r);
          t = t.find("tr");
          D = J.find("tr");
          J.find("th, td").removeAttr("tabindex");
          c || ((v.width = "100%"), (h[0].style.width = "100%"));
          f.each(ta(a, J), function (b, c) {
              H = aa(a, b);
              c.style.width = a.aoColumns[H].sWidth;
          });
          w &&
              N(function (a) {
                  a.style.width = "";
              }, E);
          h = r.outerWidth();
          "" === c
              ? ((ya.width = "100%"), A && (r.find("tbody").height() > k.offsetHeight || "scroll" == p.css("overflow-y")) && (ya.width = B(r.outerWidth() - b)), (h = r.outerWidth()))
              : "" !== d && ((ya.width = B(d)), (h = r.outerWidth()));
          N(I, D);
          N(function (a) {
              C.push(a.innerHTML);
              Xa.push(B(f(a).css("width")));
          }, D);
          N(function (a, b) {
              -1 !== f.inArray(a, ac) && (a.style.width = Xa[b]);
          }, t);
          f(D).height(0);
          w &&
              (N(I, E),
              N(function (a) {
                  G.push(a.innerHTML);
                  z.push(B(f(a).css("width")));
              }, E),
              N(function (a, b) {
                  a.style.width = z[b];
              }, F),
              f(E).height(0));
          N(function (a, b) {
              a.innerHTML = '<div class="dataTables_sizing">' + C[b] + "</div>";
              a.childNodes[0].style.height = "0";
              a.childNodes[0].style.overflow = "hidden";
              a.style.width = Xa[b];
          }, D);
          w &&
              N(function (a, b) {
                  a.innerHTML = '<div class="dataTables_sizing">' + G[b] + "</div>";
                  a.childNodes[0].style.height = "0";
                  a.childNodes[0].style.overflow = "hidden";
                  a.style.width = z[b];
              }, E);
          r.outerWidth() < h
              ? ((F = k.scrollHeight > k.offsetHeight || "scroll" == p.css("overflow-y") ? h + b : h),
                A && (k.scrollHeight > k.offsetHeight || "scroll" == p.css("overflow-y")) && (ya.width = B(F - b)),
                ("" !== c && "" === d) || O(a, 1, "Possible column misalignment", 6))
              : (F = "100%");
          v.width = B(F);
          g.width = B(F);
          w && (a.nScrollFoot.style.width = B(F));
          !e && A && (v.height = B(x.offsetHeight + b));
          c = r.outerWidth();
          m[0].style.width = B(c);
          l.width = B(c);
          d = r.height() > k.clientHeight || "scroll" == p.css("overflow-y");
          e = "padding" + (y.bScrollbarLeft ? "Left" : "Right");
          l[e] = d ? b + "px" : "0px";
          w && ((q[0].style.width = B(c)), (u[0].style.width = B(c)), (u[0].style[e] = d ? b + "px" : "0px"));
          r.children("colgroup").insertBefore(r.children("thead"));
          p.trigger("scroll");
          (!a.bSorted && !a.bFiltered) || a._drawHold || (k.scrollTop = 0);
      }
  }
  function N(a, b, c) {
      for (var d = 0, e = 0, h = b.length, g, k; e < h; ) {
          g = b[e].firstChild;
          for (k = c ? c[e].firstChild : null; g; ) 1 === g.nodeType && (c ? a(g, k, d) : a(g, d), d++), (g = g.nextSibling), (k = c ? k.nextSibling : null);
          e++;
      }
  }
  function Ia(a) {
      var b = a.nTable,
          c = a.aoColumns,
          d = a.oScroll,
          e = d.sY,
          h = d.sX,
          g = d.sXInner,
          k = c.length,
          l = na(a, "bVisible"),
          m = f("th", a.nTHead),
          p = b.getAttribute("width"),
          n = b.parentNode,
          u = !1,
          q,
          t = a.oBrowser;
      d = t.bScrollOversize;
      (q = b.style.width) && -1 !== q.indexOf("%") && (p = q);
      for (q = 0; q < l.length; q++) {
          var r = c[l[q]];
          null !== r.sWidth && ((r.sWidth = Ib(r.sWidthOrig, n)), (u = !0));
      }
      if (d || (!u && !h && !e && k == V(a) && k == m.length)) for (q = 0; q < k; q++) (l = aa(a, q)), null !== l && (c[l].sWidth = B(m.eq(q).width()));
      else {
          k = f(b).clone().css("visibility", "hidden").removeAttr("id");
          k.find("tbody tr").remove();
          var w = f("<tr/>").appendTo(k.find("tbody"));
          k.find("thead, tfoot").remove();
          k.append(f(a.nTHead).clone()).append(f(a.nTFoot).clone());
          k.find("tfoot th, tfoot td").css("width", "");
          m = ta(a, k.find("thead")[0]);
          for (q = 0; q < l.length; q++)
              (r = c[l[q]]),
                  (m[q].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? B(r.sWidthOrig) : ""),
                  r.sWidthOrig && h && f(m[q]).append(f("<div/>").css({ width: r.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
          if (a.aoData.length) for (q = 0; q < l.length; q++) (u = l[q]), (r = c[u]), f(Jb(a, u)).clone(!1).append(r.sContentPadding).appendTo(w);
          f("[name]", k).removeAttr("name");
          r = f("<div/>")
              .css(h || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {})
              .append(k)
              .appendTo(n);
          h && g ? k.width(g) : h ? (k.css("width", "auto"), k.removeAttr("width"), k.width() < n.clientWidth && p && k.width(n.clientWidth)) : e ? k.width(n.clientWidth) : p && k.width(p);
          for (q = e = 0; q < l.length; q++) (n = f(m[q])), (g = n.outerWidth() - n.width()), (n = t.bBounding ? Math.ceil(m[q].getBoundingClientRect().width) : n.outerWidth()), (e += n), (c[l[q]].sWidth = B(n - g));
          b.style.width = B(e);
          r.remove();
      }
      p && (b.style.width = B(p));
      (!p && !h) ||
          a._reszEvt ||
          ((b = function () {
              f(y).on(
                  "resize.DT-" + a.sInstance,
                  Ra(function () {
                      Z(a);
                  })
              );
          }),
          d ? setTimeout(b, 1e3) : b(),
          (a._reszEvt = !0));
  }
  function Ib(a, b) {
      if (!a) return 0;
      a = f("<div/>")
          .css("width", B(a))
          .appendTo(b || w.body);
      b = a[0].offsetWidth;
      a.remove();
      return b;
  }
  function Jb(a, b) {
      var c = Kb(a, b);
      if (0 > c) return null;
      var d = a.aoData[c];
      return d.nTr ? d.anCells[b] : f("<td/>").html(F(a, c, b, "display"))[0];
  }
  function Kb(a, b) {
      for (var c, d = -1, e = -1, h = 0, g = a.aoData.length; h < g; h++) (c = F(a, h, b, "display") + ""), (c = c.replace(bc, "")), (c = c.replace(/&nbsp;/g, " ")), c.length > d && ((d = c.length), (e = h));
      return e;
  }
  function B(a) {
      return null === a ? "0px" : "number" == typeof a ? (0 > a ? "0px" : a + "px") : a.match(/\d$/) ? a + "px" : a;
  }
  function X(a) {
      var b = [],
          c = a.aoColumns;
      var d = a.aaSortingFixed;
      var e = f.isPlainObject(d);
      var h = [];
      var g = function (a) {
          a.length && !f.isArray(a[0]) ? h.push(a) : f.merge(h, a);
      };
      f.isArray(d) && g(d);
      e && d.pre && g(d.pre);
      g(a.aaSorting);
      e && d.post && g(d.post);
      for (a = 0; a < h.length; a++) {
          var k = h[a][0];
          g = c[k].aDataSort;
          d = 0;
          for (e = g.length; d < e; d++) {
              var l = g[d];
              var m = c[l].sType || "string";
              h[a]._idx === n && (h[a]._idx = f.inArray(h[a][1], c[l].asSorting));
              b.push({ src: k, col: l, dir: h[a][1], index: h[a]._idx, type: m, formatter: q.ext.type.order[m + "-pre"] });
          }
      }
      return b;
  }
  function qb(a) {
      var b,
          c = [],
          d = q.ext.type.order,
          e = a.aoData,
          h = 0,
          g = a.aiDisplayMaster;
      Ja(a);
      var k = X(a);
      var f = 0;
      for (b = k.length; f < b; f++) {
          var m = k[f];
          m.formatter && h++;
          Lb(a, m.col);
      }
      if ("ssp" != I(a) && 0 !== k.length) {
          f = 0;
          for (b = g.length; f < b; f++) c[g[f]] = f;
          h === k.length
              ? g.sort(function (a, b) {
                    var d,
                        h = k.length,
                        g = e[a]._aSortData,
                        f = e[b]._aSortData;
                    for (d = 0; d < h; d++) {
                        var l = k[d];
                        var m = g[l.col];
                        var p = f[l.col];
                        m = m < p ? -1 : m > p ? 1 : 0;
                        if (0 !== m) return "asc" === l.dir ? m : -m;
                    }
                    m = c[a];
                    p = c[b];
                    return m < p ? -1 : m > p ? 1 : 0;
                })
              : g.sort(function (a, b) {
                    var h,
                        g = k.length,
                        f = e[a]._aSortData,
                        l = e[b]._aSortData;
                    for (h = 0; h < g; h++) {
                        var m = k[h];
                        var p = f[m.col];
                        var n = l[m.col];
                        m = d[m.type + "-" + m.dir] || d["string-" + m.dir];
                        p = m(p, n);
                        if (0 !== p) return p;
                    }
                    p = c[a];
                    n = c[b];
                    return p < n ? -1 : p > n ? 1 : 0;
                });
      }
      a.bSorted = !0;
  }
  function Mb(a) {
      var b = a.aoColumns,
          c = X(a);
      a = a.oLanguage.oAria;
      for (var d = 0, e = b.length; d < e; d++) {
          var h = b[d];
          var g = h.asSorting;
          var k = h.sTitle.replace(/<.*?>/g, "");
          var f = h.nTh;
          f.removeAttribute("aria-sort");
          h.bSortable &&
              (0 < c.length && c[0].col == d ? (f.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), (h = g[c[0].index + 1] || g[0])) : (h = g[0]), (k += "asc" === h ? a.sSortAscending : a.sSortDescending));
          f.setAttribute("aria-label", k);
      }
  }
  function Ya(a, b, c, d) {
      var e = a.aaSorting,
          h = a.aoColumns[b].asSorting,
          g = function (a, b) {
              var c = a._idx;
              c === n && (c = f.inArray(a[1], h));
              return c + 1 < h.length ? c + 1 : b ? null : 0;
          };
      "number" === typeof e[0] && (e = a.aaSorting = [e]);
      c && a.oFeatures.bSortMulti
          ? ((c = f.inArray(b, K(e, "0"))), -1 !== c ? ((b = g(e[c], !0)), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : ((e[c][1] = h[b]), (e[c]._idx = b))) : (e.push([b, h[0], 0]), (e[e.length - 1]._idx = 0)))
          : e.length && e[0][0] == b
          ? ((b = g(e[0])), (e.length = 1), (e[0][1] = h[b]), (e[0]._idx = b))
          : ((e.length = 0), e.push([b, h[0]]), (e[0]._idx = 0));
      U(a);
      "function" == typeof d && d(a);
  }
  function Pa(a, b, c, d) {
      var e = a.aoColumns[c];
      Za(b, {}, function (b) {
          !1 !== e.bSortable &&
              (a.oFeatures.bProcessing
                  ? (J(a, !0),
                    setTimeout(function () {
                        Ya(a, c, b.shiftKey, d);
                        "ssp" !== I(a) && J(a, !1);
                    }, 0))
                  : Ya(a, c, b.shiftKey, d));
      });
  }
  function za(a) {
      var b = a.aLastSort,
          c = a.oClasses.sSortColumn,
          d = X(a),
          e = a.oFeatures,
          h;
      if (e.bSort && e.bSortClasses) {
          e = 0;
          for (h = b.length; e < h; e++) {
              var g = b[e].src;
              f(K(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
          }
          e = 0;
          for (h = d.length; e < h; e++) (g = d[e].src), f(K(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3));
      }
      a.aLastSort = d;
  }
  function Lb(a, b) {
      var c = a.aoColumns[b],
          d = q.ext.order[c.sSortDataType],
          e;
      d && (e = d.call(a.oInstance, a, b, ba(a, b)));
      for (var h, g = q.ext.type.order[c.sType + "-pre"], f = 0, l = a.aoData.length; f < l; f++)
          if (((c = a.aoData[f]), c._aSortData || (c._aSortData = []), !c._aSortData[b] || d)) (h = d ? e[f] : F(a, f, b, "sort")), (c._aSortData[b] = g ? g(h) : h);
  }
  function Aa(a) {
      if (a.oFeatures.bStateSave && !a.bDestroying) {
          var b = {
              time: +new Date(),
              start: a._iDisplayStart,
              length: a._iDisplayLength,
              order: f.extend(!0, [], a.aaSorting),
              search: Eb(a.oPreviousSearch),
              columns: f.map(a.aoColumns, function (b, d) {
                  return { visible: b.bVisible, search: Eb(a.aoPreSearchCols[d]) };
              }),
          };
          A(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
          a.oSavedState = b;
          a.fnStateSaveCallback.call(a.oInstance, a, b);
      }
  }
  function Nb(a, b, c) {
      var d,
          e,
          h = a.aoColumns;
      b = function (b) {
          if (b && b.time) {
              var g = A(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
              if (-1 === f.inArray(!1, g) && ((g = a.iStateDuration), !((0 < g && b.time < +new Date() - 1e3 * g) || (b.columns && h.length !== b.columns.length)))) {
                  a.oLoadedState = f.extend(!0, {}, b);
                  b.start !== n && ((a._iDisplayStart = b.start), (a.iInitDisplayStart = b.start));
                  b.length !== n && (a._iDisplayLength = b.length);
                  b.order !== n &&
                      ((a.aaSorting = []),
                      f.each(b.order, function (b, c) {
                          a.aaSorting.push(c[0] >= h.length ? [0, c[1]] : c);
                      }));
                  b.search !== n && f.extend(a.oPreviousSearch, Fb(b.search));
                  if (b.columns) for (d = 0, e = b.columns.length; d < e; d++) (g = b.columns[d]), g.visible !== n && (h[d].bVisible = g.visible), g.search !== n && f.extend(a.aoPreSearchCols[d], Fb(g.search));
                  A(a, "aoStateLoaded", "stateLoaded", [a, b]);
              }
          }
          c();
      };
      if (a.oFeatures.bStateSave) {
          var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
          g !== n && b(g);
      } else c();
  }
  function Ba(a) {
      var b = q.settings;
      a = f.inArray(a, K(b, "nTable"));
      return -1 !== a ? b[a] : null;
  }
  function O(a, b, c, d) {
      c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
      d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
      if (b) y.console && console.log && console.log(c);
      else if (((b = q.ext), (b = b.sErrMode || b.errMode), a && A(a, null, "error", [a, d, c]), "alert" == b)) alert(c);
      else {
          if ("throw" == b) throw Error(c);
          "function" == typeof b && b(a, d, c);
      }
  }
  function M(a, b, c, d) {
      f.isArray(c)
          ? f.each(c, function (c, d) {
                f.isArray(d) ? M(a, b, d[0], d[1]) : M(a, b, d);
            })
          : (d === n && (d = c), b[c] !== n && (a[d] = b[c]));
  }
  function $a(a, b, c) {
      var d;
      for (d in b)
          if (b.hasOwnProperty(d)) {
              var e = b[d];
              f.isPlainObject(e) ? (f.isPlainObject(a[d]) || (a[d] = {}), f.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && f.isArray(e) ? (a[d] = e.slice()) : (a[d] = e);
          }
      return a;
  }
  function Za(a, b, c) {
      f(a)
          .on("click.DT", b, function (b) {
              f(a).trigger("blur");
              c(b);
          })
          .on("keypress.DT", b, function (a) {
              13 === a.which && (a.preventDefault(), c(a));
          })
          .on("selectstart.DT", function () {
              return !1;
          });
  }
  function D(a, b, c, d) {
      c && a[b].push({ fn: c, sName: d });
  }
  function A(a, b, c, d) {
      var e = [];
      b &&
          (e = f.map(a[b].slice().reverse(), function (b, c) {
              return b.fn.apply(a.oInstance, d);
          }));
      null !== c && ((b = f.Event(c + ".dt")), f(a.nTable).trigger(b, d), e.push(b.result));
      return e;
  }
  function Va(a) {
      var b = a._iDisplayStart,
          c = a.fnDisplayEnd(),
          d = a._iDisplayLength;
      b >= c && (b = c - d);
      b -= b % d;
      if (-1 === d || 0 > b) b = 0;
      a._iDisplayStart = b;
  }
  function Qa(a, b) {
      a = a.renderer;
      var c = q.ext.renderer[b];
      return f.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._;
  }
  function I(a) {
      return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom";
  }
  function ja(a, b) {
      var c = Ob.numbers_length,
          d = Math.floor(c / 2);
      b <= c
          ? (a = Y(0, b))
          : a <= d
          ? ((a = Y(0, c - 2)), a.push("ellipsis"), a.push(b - 1))
          : (a >= b - 1 - d ? (a = Y(b - (c - 2), b)) : ((a = Y(a - d + 2, a + d - 1)), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
      a.DT_el = "span";
      return a;
  }
  function Ga(a) {
      f.each(
          {
              num: function (b) {
                  return Ca(b, a);
              },
              "num-fmt": function (b) {
                  return Ca(b, a, ab);
              },
              "html-num": function (b) {
                  return Ca(b, a, Da);
              },
              "html-num-fmt": function (b) {
                  return Ca(b, a, Da, ab);
              },
          },
          function (b, c) {
              C.type.order[b + a + "-pre"] = c;
              b.match(/^html\-/) && (C.type.search[b + a] = C.type.search.html);
          }
      );
  }
  function Pb(a) {
      return function () {
          var b = [Ba(this[q.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
          return q.ext.internal[a].apply(this, b);
      };
  }
  var q = function (a) {
          this.$ = function (a, b) {
              return this.api(!0).$(a, b);
          };
          this._ = function (a, b) {
              return this.api(!0).rows(a, b).data();
          };
          this.api = function (a) {
              return a ? new x(Ba(this[C.iApiIndex])) : new x(this);
          };
          this.fnAddData = function (a, b) {
              var c = this.api(!0);
              a = f.isArray(a) && (f.isArray(a[0]) || f.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
              (b === n || b) && c.draw();
              return a.flatten().toArray();
          };
          this.fnAdjustColumnSizing = function (a) {
              var b = this.api(!0).columns.adjust(),
                  c = b.settings()[0],
                  d = c.oScroll;
              a === n || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ma(c);
          };
          this.fnClearTable = function (a) {
              var b = this.api(!0).clear();
              (a === n || a) && b.draw();
          };
          this.fnClose = function (a) {
              this.api(!0).row(a).child.hide();
          };
          this.fnDeleteRow = function (a, b, c) {
              var d = this.api(!0);
              a = d.rows(a);
              var e = a.settings()[0],
                  h = e.aoData[a[0][0]];
              a.remove();
              b && b.call(this, e, h);
              (c === n || c) && d.draw();
              return h;
          };
          this.fnDestroy = function (a) {
              this.api(!0).destroy(a);
          };
          this.fnDraw = function (a) {
              this.api(!0).draw(a);
          };
          this.fnFilter = function (a, b, c, d, e, f) {
              e = this.api(!0);
              null === b || b === n ? e.search(a, c, d, f) : e.column(b).search(a, c, d, f);
              e.draw();
          };
          this.fnGetData = function (a, b) {
              var c = this.api(!0);
              if (a !== n) {
                  var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                  return b !== n || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null;
              }
              return c.data().toArray();
          };
          this.fnGetNodes = function (a) {
              var b = this.api(!0);
              return a !== n ? b.row(a).node() : b.rows().nodes().flatten().toArray();
          };
          this.fnGetPosition = function (a) {
              var b = this.api(!0),
                  c = a.nodeName.toUpperCase();
              return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? ((a = b.cell(a).index()), [a.row, a.columnVisible, a.column]) : null;
          };
          this.fnIsOpen = function (a) {
              return this.api(!0).row(a).child.isShown();
          };
          this.fnOpen = function (a, b, c) {
              return this.api(!0).row(a).child(b, c).show().child()[0];
          };
          this.fnPageChange = function (a, b) {
              a = this.api(!0).page(a);
              (b === n || b) && a.draw(!1);
          };
          this.fnSetColumnVis = function (a, b, c) {
              a = this.api(!0).column(a).visible(b);
              (c === n || c) && a.columns.adjust().draw();
          };
          this.fnSettings = function () {
              return Ba(this[C.iApiIndex]);
          };
          this.fnSort = function (a) {
              this.api(!0).order(a).draw();
          };
          this.fnSortListener = function (a, b, c) {
              this.api(!0).order.listener(a, b, c);
          };
          this.fnUpdate = function (a, b, c, d, e) {
              var h = this.api(!0);
              c === n || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
              (e === n || e) && h.columns.adjust();
              (d === n || d) && h.draw();
              return 0;
          };
          this.fnVersionCheck = C.fnVersionCheck;
          var b = this,
              c = a === n,
              d = this.length;
          c && (a = {});
          this.oApi = this.internal = C.internal;
          for (var e in q.ext.internal) e && (this[e] = Pb(e));
          this.each(function () {
              var e = {},
                  g = 1 < d ? $a(e, a, !0) : a,
                  k = 0,
                  l;
              e = this.getAttribute("id");
              var m = !1,
                  p = q.defaults,
                  v = f(this);
              if ("table" != this.nodeName.toLowerCase()) O(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
              else {
                  ib(p);
                  jb(p.column);
                  L(p, p, !0);
                  L(p.column, p.column, !0);
                  L(p, f.extend(g, v.data()), !0);
                  var u = q.settings;
                  k = 0;
                  for (l = u.length; k < l; k++) {
                      var t = u[k];
                      if (t.nTable == this || (t.nTHead && t.nTHead.parentNode == this) || (t.nTFoot && t.nTFoot.parentNode == this)) {
                          var w = g.bRetrieve !== n ? g.bRetrieve : p.bRetrieve;
                          if (c || w) return t.oInstance;
                          if (g.bDestroy !== n ? g.bDestroy : p.bDestroy) {
                              t.oInstance.fnDestroy();
                              break;
                          } else {
                              O(t, 0, "Cannot reinitialise DataTable", 3);
                              return;
                          }
                      }
                      if (t.sTableId == this.id) {
                          u.splice(k, 1);
                          break;
                      }
                  }
                  if (null === e || "" === e) this.id = e = "DataTables_Table_" + q.ext._unique++;
                  var r = f.extend(!0, {}, q.models.oSettings, { sDestroyWidth: v[0].style.width, sInstance: e, sTableId: e });
                  r.nTable = this;
                  r.oApi = b.internal;
                  r.oInit = g;
                  u.push(r);
                  r.oInstance = 1 === b.length ? b : v.dataTable();
                  ib(g);
                  Fa(g.oLanguage);
                  g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = f.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                  g = $a(f.extend(!0, {}, p), g);
                  M(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                  M(r, g, [
                      "asStripeClasses",
                      "ajax",
                      "fnServerData",
                      "fnFormatNumber",
                      "sServerMethod",
                      "aaSorting",
                      "aaSortingFixed",
                      "aLengthMenu",
                      "sPaginationType",
                      "sAjaxSource",
                      "sAjaxDataProp",
                      "iStateDuration",
                      "sDom",
                      "bSortCellsTop",
                      "iTabIndex",
                      "fnStateLoadCallback",
                      "fnStateSaveCallback",
                      "renderer",
                      "searchDelay",
                      "rowId",
                      ["iCookieDuration", "iStateDuration"],
                      ["oSearch", "oPreviousSearch"],
                      ["aoSearchCols", "aoPreSearchCols"],
                      ["iDisplayLength", "_iDisplayLength"],
                  ]);
                  M(r.oScroll, g, [
                      ["sScrollX", "sX"],
                      ["sScrollXInner", "sXInner"],
                      ["sScrollY", "sY"],
                      ["bScrollCollapse", "bCollapse"],
                  ]);
                  M(r.oLanguage, g, "fnInfoCallback");
                  D(r, "aoDrawCallback", g.fnDrawCallback, "user");
                  D(r, "aoServerParams", g.fnServerParams, "user");
                  D(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
                  D(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
                  D(r, "aoStateLoaded", g.fnStateLoaded, "user");
                  D(r, "aoRowCallback", g.fnRowCallback, "user");
                  D(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                  D(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
                  D(r, "aoFooterCallback", g.fnFooterCallback, "user");
                  D(r, "aoInitComplete", g.fnInitComplete, "user");
                  D(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                  r.rowIdFn = T(g.rowId);
                  kb(r);
                  var x = r.oClasses;
                  f.extend(x, q.ext.classes, g.oClasses);
                  v.addClass(x.sTable);
                  r.iInitDisplayStart === n && ((r.iInitDisplayStart = g.iDisplayStart), (r._iDisplayStart = g.iDisplayStart));
                  null !== g.iDeferLoading && ((r.bDeferLoading = !0), (e = f.isArray(g.iDeferLoading)), (r._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading), (r._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading));
                  var y = r.oLanguage;
                  f.extend(!0, y, g.oLanguage);
                  y.sUrl &&
                      (f.ajax({
                          dataType: "json",
                          url: y.sUrl,
                          success: function (a) {
                              Fa(a);
                              L(p.oLanguage, a);
                              f.extend(!0, y, a);
                              ia(r);
                          },
                          error: function () {
                              ia(r);
                          },
                      }),
                      (m = !0));
                  null === g.asStripeClasses && (r.asStripeClasses = [x.sStripeOdd, x.sStripeEven]);
                  e = r.asStripeClasses;
                  var z = v.children("tbody").find("tr").eq(0);
                  -1 !==
                      f.inArray(
                          !0,
                          f.map(e, function (a, b) {
                              return z.hasClass(a);
                          })
                      ) && (f("tbody tr", this).removeClass(e.join(" ")), (r.asDestroyStripes = e.slice()));
                  e = [];
                  u = this.getElementsByTagName("thead");
                  0 !== u.length && (ea(r.aoHeader, u[0]), (e = ta(r)));
                  if (null === g.aoColumns) for (u = [], k = 0, l = e.length; k < l; k++) u.push(null);
                  else u = g.aoColumns;
                  k = 0;
                  for (l = u.length; k < l; k++) Ha(r, e ? e[k] : null);
                  mb(r, g.aoColumnDefs, u, function (a, b) {
                      la(r, a, b);
                  });
                  if (z.length) {
                      var B = function (a, b) {
                          return null !== a.getAttribute("data-" + b) ? b : null;
                      };
                      f(z[0])
                          .children("th, td")
                          .each(function (a, b) {
                              var c = r.aoColumns[a];
                              if (c.mData === a) {
                                  var d = B(b, "sort") || B(b, "order");
                                  b = B(b, "filter") || B(b, "search");
                                  if (null !== d || null !== b) (c.mData = { _: a + ".display", sort: null !== d ? a + ".@data-" + d : n, type: null !== d ? a + ".@data-" + d : n, filter: null !== b ? a + ".@data-" + b : n }), la(r, a);
                              }
                          });
                  }
                  var C = r.oFeatures;
                  e = function () {
                      if (g.aaSorting === n) {
                          var a = r.aaSorting;
                          k = 0;
                          for (l = a.length; k < l; k++) a[k][1] = r.aoColumns[k].asSorting[0];
                      }
                      za(r);
                      C.bSort &&
                          D(r, "aoDrawCallback", function () {
                              if (r.bSorted) {
                                  var a = X(r),
                                      b = {};
                                  f.each(a, function (a, c) {
                                      b[c.src] = c.dir;
                                  });
                                  A(r, null, "order", [r, a, b]);
                                  Mb(r);
                              }
                          });
                      D(
                          r,
                          "aoDrawCallback",
                          function () {
                              (r.bSorted || "ssp" === I(r) || C.bDeferRender) && za(r);
                          },
                          "sc"
                      );
                      a = v.children("caption").each(function () {
                          this._captionSide = f(this).css("caption-side");
                      });
                      var b = v.children("thead");
                      0 === b.length && (b = f("<thead/>").appendTo(v));
                      r.nTHead = b[0];
                      b = v.children("tbody");
                      0 === b.length && (b = f("<tbody/>").appendTo(v));
                      r.nTBody = b[0];
                      b = v.children("tfoot");
                      0 === b.length && 0 < a.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (b = f("<tfoot/>").appendTo(v));
                      0 === b.length || 0 === b.children().length ? v.addClass(x.sNoFooter) : 0 < b.length && ((r.nTFoot = b[0]), ea(r.aoFooter, r.nTFoot));
                      if (g.aaData) for (k = 0; k < g.aaData.length; k++) R(r, g.aaData[k]);
                      else (r.bDeferLoading || "dom" == I(r)) && oa(r, f(r.nTBody).children("tr"));
                      r.aiDisplay = r.aiDisplayMaster.slice();
                      r.bInitialised = !0;
                      !1 === m && ia(r);
                  };
                  g.bStateSave ? ((C.bStateSave = !0), D(r, "aoDrawCallback", Aa, "state_save"), Nb(r, g, e)) : e();
              }
          });
          b = null;
          return this;
      },
      C,
      t,
      z,
      bb = {},
      Qb = /[\r\n\u2028]/g,
      Da = /<.*?>/g,
      cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      dc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
      ab = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
      P = function (a) {
          return a && !0 !== a && "-" !== a ? !1 : !0;
      },
      Rb = function (a) {
          var b = parseInt(a, 10);
          return !isNaN(b) && isFinite(a) ? b : null;
      },
      Sb = function (a, b) {
          bb[b] || (bb[b] = new RegExp(Ta(b), "g"));
          return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(bb[b], ".") : a;
      },
      cb = function (a, b, c) {
          var d = "string" === typeof a;
          if (P(a)) return !0;
          b && d && (a = Sb(a, b));
          c && d && (a = a.replace(ab, ""));
          return !isNaN(parseFloat(a)) && isFinite(a);
      },
      Tb = function (a, b, c) {
          return P(a) ? !0 : P(a) || "string" === typeof a ? (cb(a.replace(Da, ""), b, c) ? !0 : null) : null;
      },
      K = function (a, b, c) {
          var d = [],
              e = 0,
              h = a.length;
          if (c !== n) for (; e < h; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
          else for (; e < h; e++) a[e] && d.push(a[e][b]);
          return d;
      },
      ka = function (a, b, c, d) {
          var e = [],
              h = 0,
              g = b.length;
          if (d !== n) for (; h < g; h++) a[b[h]][c] && e.push(a[b[h]][c][d]);
          else for (; h < g; h++) e.push(a[b[h]][c]);
          return e;
      },
      Y = function (a, b) {
          var c = [];
          if (b === n) {
              b = 0;
              var d = a;
          } else (d = b), (b = a);
          for (a = b; a < d; a++) c.push(a);
          return c;
      },
      Ub = function (a) {
          for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
          return b;
      },
      sa = function (a) {
          a: {
              if (!(2 > a.length)) {
                  var b = a.slice().sort();
                  for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                      if (b[d] === c) {
                          b = !1;
                          break a;
                      }
                      c = b[d];
                  }
              }
              b = !0;
          }
          if (b) return a.slice();
          b = [];
          e = a.length;
          var h,
              g = 0;
          d = 0;
          a: for (; d < e; d++) {
              c = a[d];
              for (h = 0; h < g; h++) if (b[h] === c) continue a;
              b.push(c);
              g++;
          }
          return b;
      };
  q.util = {
      throttle: function (a, b) {
          var c = b !== n ? b : 200,
              d,
              e;
          return function () {
              var b = this,
                  g = +new Date(),
                  f = arguments;
              d && g < d + c
                  ? (clearTimeout(e),
                    (e = setTimeout(function () {
                        d = n;
                        a.apply(b, f);
                    }, c)))
                  : ((d = g), a.apply(b, f));
          };
      },
      escapeRegex: function (a) {
          return a.replace(dc, "\\$1");
      },
  };
  var E = function (a, b, c) {
          a[b] !== n && (a[c] = a[b]);
      },
      ca = /\[.*?\]$/,
      W = /\(\)$/,
      Ta = q.util.escapeRegex,
      xa = f("<div>")[0],
      $b = xa.textContent !== n,
      bc = /<.*?>/g,
      Ra = q.util.throttle,
      Vb = [],
      G = Array.prototype,
      ec = function (a) {
          var b,
              c = q.settings,
              d = f.map(c, function (a, b) {
                  return a.nTable;
              });
          if (a) {
              if (a.nTable && a.oApi) return [a];
              if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                  var e = f.inArray(a, d);
                  return -1 !== e ? [c[e]] : null;
              }
              if (a && "function" === typeof a.settings) return a.settings().toArray();
              "string" === typeof a ? (b = f(a)) : a instanceof f && (b = a);
          } else return [];
          if (b)
              return b
                  .map(function (a) {
                      e = f.inArray(this, d);
                      return -1 !== e ? c[e] : null;
                  })
                  .toArray();
      };
  var x = function (a, b) {
      if (!(this instanceof x)) return new x(a, b);
      var c = [],
          d = function (a) {
              (a = ec(a)) && c.push.apply(c, a);
          };
      if (f.isArray(a)) for (var e = 0, h = a.length; e < h; e++) d(a[e]);
      else d(a);
      this.context = sa(c);
      b && f.merge(this, b);
      this.selector = { rows: null, cols: null, opts: null };
      x.extend(this, this, Vb);
  };
  q.Api = x;
  f.extend(x.prototype, {
      any: function () {
          return 0 !== this.count();
      },
      concat: G.concat,
      context: [],
      count: function () {
          return this.flatten().length;
      },
      each: function (a) {
          for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
          return this;
      },
      eq: function (a) {
          var b = this.context;
          return b.length > a ? new x(b[a], this[a]) : null;
      },
      filter: function (a) {
          var b = [];
          if (G.filter) b = G.filter.call(this, a, this);
          else for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
          return new x(this.context, b);
      },
      flatten: function () {
          var a = [];
          return new x(this.context, a.concat.apply(a, this.toArray()));
      },
      join: G.join,
      indexOf:
          G.indexOf ||
          function (a, b) {
              b = b || 0;
              for (var c = this.length; b < c; b++) if (this[b] === a) return b;
              return -1;
          },
      iterator: function (a, b, c, d) {
          var e = [],
              h,
              g,
              f = this.context,
              l,
              m = this.selector;
          "string" === typeof a && ((d = c), (c = b), (b = a), (a = !1));
          var p = 0;
          for (h = f.length; p < h; p++) {
              var q = new x(f[p]);
              if ("table" === b) {
                  var u = c.call(q, f[p], p);
                  u !== n && e.push(u);
              } else if ("columns" === b || "rows" === b) (u = c.call(q, f[p], this[p], p)), u !== n && e.push(u);
              else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                  var t = this[p];
                  "column-rows" === b && (l = Ea(f[p], m.opts));
                  var w = 0;
                  for (g = t.length; w < g; w++) (u = t[w]), (u = "cell" === b ? c.call(q, f[p], u.row, u.column, p, w) : c.call(q, f[p], u, p, w, l)), u !== n && e.push(u);
              }
          }
          return e.length || d ? ((a = new x(f, a ? e.concat.apply([], e) : e)), (b = a.selector), (b.rows = m.rows), (b.cols = m.cols), (b.opts = m.opts), a) : this;
      },
      lastIndexOf:
          G.lastIndexOf ||
          function (a, b) {
              return this.indexOf.apply(this.toArray.reverse(), arguments);
          },
      length: 0,
      map: function (a) {
          var b = [];
          if (G.map) b = G.map.call(this, a, this);
          else for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
          return new x(this.context, b);
      },
      pluck: function (a) {
          return this.map(function (b) {
              return b[a];
          });
      },
      pop: G.pop,
      push: G.push,
      reduce:
          G.reduce ||
          function (a, b) {
              return lb(this, a, b, 0, this.length, 1);
          },
      reduceRight:
          G.reduceRight ||
          function (a, b) {
              return lb(this, a, b, this.length - 1, -1, -1);
          },
      reverse: G.reverse,
      selector: null,
      shift: G.shift,
      slice: function () {
          return new x(this.context, this);
      },
      sort: G.sort,
      splice: G.splice,
      toArray: function () {
          return G.slice.call(this);
      },
      to$: function () {
          return f(this);
      },
      toJQuery: function () {
          return f(this);
      },
      unique: function () {
          return new x(this.context, sa(this));
      },
      unshift: G.unshift,
  });
  x.extend = function (a, b, c) {
      if (c.length && b && (b instanceof x || b.__dt_wrapper)) {
          var d,
              e = function (a, b, c) {
                  return function () {
                      var d = b.apply(a, arguments);
                      x.extend(d, d, c.methodExt);
                      return d;
                  };
              };
          var h = 0;
          for (d = c.length; h < d; h++) {
              var f = c[h];
              b[f.name] = "function" === f.type ? e(a, f.val, f) : "object" === f.type ? {} : f.val;
              b[f.name].__dt_wrapper = !0;
              x.extend(a, b[f.name], f.propExt);
          }
      }
  };
  x.register = t = function (a, b) {
      if (f.isArray(a)) for (var c = 0, d = a.length; c < d; c++) x.register(a[c], b);
      else {
          d = a.split(".");
          var e = Vb,
              h;
          a = 0;
          for (c = d.length; a < c; a++) {
              var g = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
              a: {
                  var k = 0;
                  for (var l = e.length; k < l; k++)
                      if (e[k].name === g) {
                          k = e[k];
                          break a;
                      }
                  k = null;
              }
              k || ((k = { name: g, val: {}, methodExt: [], propExt: [], type: "object" }), e.push(k));
              a === c - 1 ? ((k.val = b), (k.type = "function" === typeof b ? "function" : f.isPlainObject(b) ? "object" : "other")) : (e = h ? k.methodExt : k.propExt);
          }
      }
  };
  x.registerPlural = z = function (a, b, c) {
      x.register(a, c);
      x.register(b, function () {
          var a = c.apply(this, arguments);
          return a === this ? this : a instanceof x ? (a.length ? (f.isArray(a[0]) ? new x(a.context, a[0]) : a[0]) : n) : a;
      });
  };
  var Wb = function (a, b) {
      if (f.isArray(a))
          return f.map(a, function (a) {
              return Wb(a, b);
          });
      if ("number" === typeof a) return [b[a]];
      var c = f.map(b, function (a, b) {
          return a.nTable;
      });
      return f(c)
          .filter(a)
          .map(function (a) {
              a = f.inArray(this, c);
              return b[a];
          })
          .toArray();
  };
  t("tables()", function (a) {
      return a !== n && null !== a ? new x(Wb(a, this.context)) : this;
  });
  t("table()", function (a) {
      a = this.tables(a);
      var b = a.context;
      return b.length ? new x(b[0]) : a;
  });
  z("tables().nodes()", "table().node()", function () {
      return this.iterator(
          "table",
          function (a) {
              return a.nTable;
          },
          1
      );
  });
  z("tables().body()", "table().body()", function () {
      return this.iterator(
          "table",
          function (a) {
              return a.nTBody;
          },
          1
      );
  });
  z("tables().header()", "table().header()", function () {
      return this.iterator(
          "table",
          function (a) {
              return a.nTHead;
          },
          1
      );
  });
  z("tables().footer()", "table().footer()", function () {
      return this.iterator(
          "table",
          function (a) {
              return a.nTFoot;
          },
          1
      );
  });
  z("tables().containers()", "table().container()", function () {
      return this.iterator(
          "table",
          function (a) {
              return a.nTableWrapper;
          },
          1
      );
  });
  t("draw()", function (a) {
      return this.iterator("table", function (b) {
          "page" === a ? S(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), U(b, !1 === a));
      });
  });
  t("page()", function (a) {
      return a === n
          ? this.page.info().page
          : this.iterator("table", function (b) {
                Wa(b, a);
            });
  });
  t("page.info()", function (a) {
      if (0 === this.context.length) return n;
      a = this.context[0];
      var b = a._iDisplayStart,
          c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
          d = a.fnRecordsDisplay(),
          e = -1 === c;
      return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === I(a) };
  });
  t("page.len()", function (a) {
      return a === n
          ? 0 !== this.context.length
              ? this.context[0]._iDisplayLength
              : n
          : this.iterator("table", function (b) {
                Ua(b, a);
            });
  });
  var Xb = function (a, b, c) {
      if (c) {
          var d = new x(a);
          d.one("draw", function () {
              c(d.ajax.json());
          });
      }
      if ("ssp" == I(a)) U(a, b);
      else {
          J(a, !0);
          var e = a.jqXHR;
          e && 4 !== e.readyState && e.abort();
          ua(a, [], function (c) {
              pa(a);
              c = va(a, c);
              for (var d = 0, e = c.length; d < e; d++) R(a, c[d]);
              U(a, b);
              J(a, !1);
          });
      }
  };
  t("ajax.json()", function () {
      var a = this.context;
      if (0 < a.length) return a[0].json;
  });
  t("ajax.params()", function () {
      var a = this.context;
      if (0 < a.length) return a[0].oAjaxData;
  });
  t("ajax.reload()", function (a, b) {
      return this.iterator("table", function (c) {
          Xb(c, !1 === b, a);
      });
  });
  t("ajax.url()", function (a) {
      var b = this.context;
      if (a === n) {
          if (0 === b.length) return n;
          b = b[0];
          return b.ajax ? (f.isPlainObject(b.ajax) ? b.ajax.url : b.ajax) : b.sAjaxSource;
      }
      return this.iterator("table", function (b) {
          f.isPlainObject(b.ajax) ? (b.ajax.url = a) : (b.ajax = a);
      });
  });
  t("ajax.url().load()", function (a, b) {
      return this.iterator("table", function (c) {
          Xb(c, !1 === b, a);
      });
  });
  var db = function (a, b, c, d, e) {
          var h = [],
              g,
              k,
              l;
          var m = typeof b;
          (b && "string" !== m && "function" !== m && b.length !== n) || (b = [b]);
          m = 0;
          for (k = b.length; m < k; m++) {
              var p = b[m] && b[m].split && !b[m].match(/[\[\(:]/) ? b[m].split(",") : [b[m]];
              var q = 0;
              for (l = p.length; q < l; q++) (g = c("string" === typeof p[q] ? f.trim(p[q]) : p[q])) && g.length && (h = h.concat(g));
          }
          a = C.selector[a];
          if (a.length) for (m = 0, k = a.length; m < k; m++) h = a[m](d, e, h);
          return sa(h);
      },
      eb = function (a) {
          a || (a = {});
          a.filter && a.search === n && (a.search = a.filter);
          return f.extend({ search: "none", order: "current", page: "all" }, a);
      },
      fb = function (a) {
          for (var b = 0, c = a.length; b < c; b++) if (0 < a[b].length) return (a[0] = a[b]), (a[0].length = 1), (a.length = 1), (a.context = [a.context[b]]), a;
          a.length = 0;
          return a;
      },
      Ea = function (a, b) {
          var c = [],
              d = a.aiDisplay;
          var e = a.aiDisplayMaster;
          var h = b.search;
          var g = b.order;
          b = b.page;
          if ("ssp" == I(a)) return "removed" === h ? [] : Y(0, e.length);
          if ("current" == b) for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) c.push(d[g]);
          else if ("current" == g || "applied" == g)
              if ("none" == h) c = e.slice();
              else if ("applied" == h) c = d.slice();
              else {
                  if ("removed" == h) {
                      var k = {};
                      g = 0;
                      for (a = d.length; g < a; g++) k[d[g]] = null;
                      c = f.map(e, function (a) {
                          return k.hasOwnProperty(a) ? null : a;
                      });
                  }
              }
          else if ("index" == g || "original" == g) for (g = 0, a = a.aoData.length; g < a; g++) "none" == h ? c.push(g) : ((e = f.inArray(g, d)), ((-1 === e && "removed" == h) || (0 <= e && "applied" == h)) && c.push(g));
          return c;
      },
      fc = function (a, b, c) {
          var d;
          return db(
              "row",
              b,
              function (b) {
                  var e = Rb(b),
                      g = a.aoData;
                  if (null !== e && !c) return [e];
                  d || (d = Ea(a, c));
                  if (null !== e && -1 !== f.inArray(e, d)) return [e];
                  if (null === b || b === n || "" === b) return d;
                  if ("function" === typeof b)
                      return f.map(d, function (a) {
                          var c = g[a];
                          return b(a, c._aData, c.nTr) ? a : null;
                      });
                  if (b.nodeName) {
                      e = b._DT_RowIndex;
                      var k = b._DT_CellIndex;
                      if (e !== n) return g[e] && g[e].nTr === b ? [e] : [];
                      if (k) return g[k.row] && g[k.row].nTr === b.parentNode ? [k.row] : [];
                      e = f(b).closest("*[data-dt-row]");
                      return e.length ? [e.data("dt-row")] : [];
                  }
                  if ("string" === typeof b && "#" === b.charAt(0) && ((e = a.aIds[b.replace(/^#/, "")]), e !== n)) return [e.idx];
                  e = Ub(ka(a.aoData, d, "nTr"));
                  return f(e)
                      .filter(b)
                      .map(function () {
                          return this._DT_RowIndex;
                      })
                      .toArray();
              },
              a,
              c
          );
      };
  t("rows()", function (a, b) {
      a === n ? (a = "") : f.isPlainObject(a) && ((b = a), (a = ""));
      b = eb(b);
      var c = this.iterator(
          "table",
          function (c) {
              return fc(c, a, b);
          },
          1
      );
      c.selector.rows = a;
      c.selector.opts = b;
      return c;
  });
  t("rows().nodes()", function () {
      return this.iterator(
          "row",
          function (a, b) {
              return a.aoData[b].nTr || n;
          },
          1
      );
  });
  t("rows().data()", function () {
      return this.iterator(
          !0,
          "rows",
          function (a, b) {
              return ka(a.aoData, b, "_aData");
          },
          1
      );
  });
  z("rows().cache()", "row().cache()", function (a) {
      return this.iterator(
          "row",
          function (b, c) {
              b = b.aoData[c];
              return "search" === a ? b._aFilterData : b._aSortData;
          },
          1
      );
  });
  z("rows().invalidate()", "row().invalidate()", function (a) {
      return this.iterator("row", function (b, c) {
          da(b, c, a);
      });
  });
  z("rows().indexes()", "row().index()", function () {
      return this.iterator(
          "row",
          function (a, b) {
              return b;
          },
          1
      );
  });
  z("rows().ids()", "row().id()", function (a) {
      for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
          for (var f = 0, g = this[d].length; f < g; f++) {
              var k = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
              b.push((!0 === a ? "#" : "") + k);
          }
      return new x(c, b);
  });
  z("rows().remove()", "row().remove()", function () {
      var a = this;
      this.iterator("row", function (b, c, d) {
          var e = b.aoData,
              f = e[c],
              g,
              k;
          e.splice(c, 1);
          var l = 0;
          for (g = e.length; l < g; l++) {
              var m = e[l];
              var p = m.anCells;
              null !== m.nTr && (m.nTr._DT_RowIndex = l);
              if (null !== p) for (m = 0, k = p.length; m < k; m++) p[m]._DT_CellIndex.row = l;
          }
          qa(b.aiDisplayMaster, c);
          qa(b.aiDisplay, c);
          qa(a[d], c, !1);
          0 < b._iRecordsDisplay && b._iRecordsDisplay--;
          Va(b);
          c = b.rowIdFn(f._aData);
          c !== n && delete b.aIds[c];
      });
      this.iterator("table", function (a) {
          for (var b = 0, d = a.aoData.length; b < d; b++) a.aoData[b].idx = b;
      });
      return this;
  });
  t("rows.add()", function (a) {
      var b = this.iterator(
              "table",
              function (b) {
                  var c,
                      d = [];
                  var f = 0;
                  for (c = a.length; f < c; f++) {
                      var k = a[f];
                      k.nodeName && "TR" === k.nodeName.toUpperCase() ? d.push(oa(b, k)[0]) : d.push(R(b, k));
                  }
                  return d;
              },
              1
          ),
          c = this.rows(-1);
      c.pop();
      f.merge(c, b);
      return c;
  });
  t("row()", function (a, b) {
      return fb(this.rows(a, b));
  });
  t("row().data()", function (a) {
      var b = this.context;
      if (a === n) return b.length && this.length ? b[0].aoData[this[0]]._aData : n;
      var c = b[0].aoData[this[0]];
      c._aData = a;
      f.isArray(a) && c.nTr && c.nTr.id && Q(b[0].rowId)(a, c.nTr.id);
      da(b[0], this[0], "data");
      return this;
  });
  t("row().node()", function () {
      var a = this.context;
      return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  t("row.add()", function (a) {
      a instanceof f && a.length && (a = a[0]);
      var b = this.iterator("table", function (b) {
          return a.nodeName && "TR" === a.nodeName.toUpperCase() ? oa(b, a)[0] : R(b, a);
      });
      return this.row(b[0]);
  });
  var gc = function (a, b, c, d) {
          var e = [],
              h = function (b, c) {
                  if (f.isArray(b) || b instanceof f) for (var d = 0, g = b.length; d < g; d++) h(b[d], c);
                  else b.nodeName && "tr" === b.nodeName.toLowerCase() ? e.push(b) : ((d = f("<tr><td/></tr>").addClass(c)), (f("td", d).addClass(c).html(b)[0].colSpan = V(a)), e.push(d[0]));
              };
          h(c, d);
          b._details && b._details.detach();
          b._details = f(e);
          b._detailsShow && b._details.insertAfter(b.nTr);
      },
      gb = function (a, b) {
          var c = a.context;
          c.length && (a = c[0].aoData[b !== n ? b : a[0]]) && a._details && (a._details.remove(), (a._detailsShow = n), (a._details = n));
      },
      Yb = function (a, b) {
          var c = a.context;
          c.length && a.length && ((a = c[0].aoData[a[0]]), a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) : a._details.detach(), hc(c[0])));
      },
      hc = function (a) {
          var b = new x(a),
              c = a.aoData;
          b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
          0 < K(c, "_details").length &&
              (b.on("draw.dt.DT_details", function (d, e) {
                  a === e &&
                      b
                          .rows({ page: "current" })
                          .eq(0)
                          .each(function (a) {
                              a = c[a];
                              a._detailsShow && a._details.insertAfter(a.nTr);
                          });
              }),
              b.on("column-visibility.dt.DT_details", function (b, e, f, g) {
                  if (a === e) for (e = V(e), f = 0, g = c.length; f < g; f++) (b = c[f]), b._details && b._details.children("td[colspan]").attr("colspan", e);
              }),
              b.on("destroy.dt.DT_details", function (d, e) {
                  if (a === e) for (d = 0, e = c.length; d < e; d++) c[d]._details && gb(b, d);
              }));
      };
  t("row().child()", function (a, b) {
      var c = this.context;
      if (a === n) return c.length && this.length ? c[0].aoData[this[0]]._details : n;
      !0 === a ? this.child.show() : !1 === a ? gb(this) : c.length && this.length && gc(c[0], c[0].aoData[this[0]], a, b);
      return this;
  });
  t(["row().child.show()", "row().child().show()"], function (a) {
      Yb(this, !0);
      return this;
  });
  t(["row().child.hide()", "row().child().hide()"], function () {
      Yb(this, !1);
      return this;
  });
  t(["row().child.remove()", "row().child().remove()"], function () {
      gb(this);
      return this;
  });
  t("row().child.isShown()", function () {
      var a = this.context;
      return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
  });
  var ic = /^([^:]+):(name|visIdx|visible)$/,
      Zb = function (a, b, c, d, e) {
          c = [];
          d = 0;
          for (var f = e.length; d < f; d++) c.push(F(a, e[d], b));
          return c;
      },
      jc = function (a, b, c) {
          var d = a.aoColumns,
              e = K(d, "sName"),
              h = K(d, "nTh");
          return db(
              "column",
              b,
              function (b) {
                  var g = Rb(b);
                  if ("" === b) return Y(d.length);
                  if (null !== g) return [0 <= g ? g : d.length + g];
                  if ("function" === typeof b) {
                      var l = Ea(a, c);
                      return f.map(d, function (c, d) {
                          return b(d, Zb(a, d, 0, 0, l), h[d]) ? d : null;
                      });
                  }
                  var m = "string" === typeof b ? b.match(ic) : "";
                  if (m)
                      switch (m[2]) {
                          case "visIdx":
                          case "visible":
                              g = parseInt(m[1], 10);
                              if (0 > g) {
                                  var p = f.map(d, function (a, b) {
                                      return a.bVisible ? b : null;
                                  });
                                  return [p[p.length + g]];
                              }
                              return [aa(a, g)];
                          case "name":
                              return f.map(e, function (a, b) {
                                  return a === m[1] ? b : null;
                              });
                          default:
                              return [];
                      }
                  if (b.nodeName && b._DT_CellIndex) return [b._DT_CellIndex.column];
                  g = f(h)
                      .filter(b)
                      .map(function () {
                          return f.inArray(this, h);
                      })
                      .toArray();
                  if (g.length || !b.nodeName) return g;
                  g = f(b).closest("*[data-dt-column]");
                  return g.length ? [g.data("dt-column")] : [];
              },
              a,
              c
          );
      };
  t("columns()", function (a, b) {
      a === n ? (a = "") : f.isPlainObject(a) && ((b = a), (a = ""));
      b = eb(b);
      var c = this.iterator(
          "table",
          function (c) {
              return jc(c, a, b);
          },
          1
      );
      c.selector.cols = a;
      c.selector.opts = b;
      return c;
  });
  z("columns().header()", "column().header()", function (a, b) {
      return this.iterator(
          "column",
          function (a, b) {
              return a.aoColumns[b].nTh;
          },
          1
      );
  });
  z("columns().footer()", "column().footer()", function (a, b) {
      return this.iterator(
          "column",
          function (a, b) {
              return a.aoColumns[b].nTf;
          },
          1
      );
  });
  z("columns().data()", "column().data()", function () {
      return this.iterator("column-rows", Zb, 1);
  });
  z("columns().dataSrc()", "column().dataSrc()", function () {
      return this.iterator(
          "column",
          function (a, b) {
              return a.aoColumns[b].mData;
          },
          1
      );
  });
  z("columns().cache()", "column().cache()", function (a) {
      return this.iterator(
          "column-rows",
          function (b, c, d, e, f) {
              return ka(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c);
          },
          1
      );
  });
  z("columns().nodes()", "column().nodes()", function () {
      return this.iterator(
          "column-rows",
          function (a, b, c, d, e) {
              return ka(a.aoData, e, "anCells", b);
          },
          1
      );
  });
  z("columns().visible()", "column().visible()", function (a, b) {
      var c = this,
          d = this.iterator("column", function (b, c) {
              if (a === n) return b.aoColumns[c].bVisible;
              var d = b.aoColumns,
                  e = d[c],
                  h = b.aoData,
                  m;
              if (a !== n && e.bVisible !== a) {
                  if (a) {
                      var p = f.inArray(!0, K(d, "bVisible"), c + 1);
                      d = 0;
                      for (m = h.length; d < m; d++) {
                          var q = h[d].nTr;
                          b = h[d].anCells;
                          q && q.insertBefore(b[c], b[p] || null);
                      }
                  } else f(K(b.aoData, "anCells", c)).detach();
                  e.bVisible = a;
              }
          });
      a !== n &&
          this.iterator("table", function (d) {
              fa(d, d.aoHeader);
              fa(d, d.aoFooter);
              d.aiDisplay.length || f(d.nTBody).find("td[colspan]").attr("colspan", V(d));
              Aa(d);
              c.iterator("column", function (c, d) {
                  A(c, null, "column-visibility", [c, d, a, b]);
              });
              (b === n || b) && c.columns.adjust();
          });
      return d;
  });
  z("columns().indexes()", "column().index()", function (a) {
      return this.iterator(
          "column",
          function (b, c) {
              return "visible" === a ? ba(b, c) : c;
          },
          1
      );
  });
  t("columns.adjust()", function () {
      return this.iterator(
          "table",
          function (a) {
              Z(a);
          },
          1
      );
  });
  t("column.index()", function (a, b) {
      if (0 !== this.context.length) {
          var c = this.context[0];
          if ("fromVisible" === a || "toData" === a) return aa(c, b);
          if ("fromData" === a || "toVisible" === a) return ba(c, b);
      }
  });
  t("column()", function (a, b) {
      return fb(this.columns(a, b));
  });
  var kc = function (a, b, c) {
      var d = a.aoData,
          e = Ea(a, c),
          h = Ub(ka(d, e, "anCells")),
          g = f([].concat.apply([], h)),
          k,
          l = a.aoColumns.length,
          m,
          p,
          q,
          u,
          t,
          w;
      return db(
          "cell",
          b,
          function (b) {
              var c = "function" === typeof b;
              if (null === b || b === n || c) {
                  m = [];
                  p = 0;
                  for (q = e.length; p < q; p++) for (k = e[p], u = 0; u < l; u++) (t = { row: k, column: u }), c ? ((w = d[k]), b(t, F(a, k, u), w.anCells ? w.anCells[u] : null) && m.push(t)) : m.push(t);
                  return m;
              }
              if (f.isPlainObject(b)) return b.column !== n && b.row !== n && -1 !== f.inArray(b.row, e) ? [b] : [];
              c = g
                  .filter(b)
                  .map(function (a, b) {
                      return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column };
                  })
                  .toArray();
              if (c.length || !b.nodeName) return c;
              w = f(b).closest("*[data-dt-row]");
              return w.length ? [{ row: w.data("dt-row"), column: w.data("dt-column") }] : [];
          },
          a,
          c
      );
  };
  t("cells()", function (a, b, c) {
      f.isPlainObject(a) && (a.row === n ? ((c = a), (a = null)) : ((c = b), (b = null)));
      f.isPlainObject(b) && ((c = b), (b = null));
      if (null === b || b === n)
          return this.iterator("table", function (b) {
              return kc(b, a, eb(c));
          });
      var d = c ? { page: c.page, order: c.order, search: c.search } : {},
          e = this.columns(b, d),
          h = this.rows(a, d),
          g,
          k,
          l,
          m;
      d = this.iterator(
          "table",
          function (a, b) {
              a = [];
              g = 0;
              for (k = h[b].length; g < k; g++) for (l = 0, m = e[b].length; l < m; l++) a.push({ row: h[b][g], column: e[b][l] });
              return a;
          },
          1
      );
      d = c && c.selected ? this.cells(d, c) : d;
      f.extend(d.selector, { cols: b, rows: a, opts: c });
      return d;
  });
  z("cells().nodes()", "cell().node()", function () {
      return this.iterator(
          "cell",
          function (a, b, c) {
              return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : n;
          },
          1
      );
  });
  t("cells().data()", function () {
      return this.iterator(
          "cell",
          function (a, b, c) {
              return F(a, b, c);
          },
          1
      );
  });
  z("cells().cache()", "cell().cache()", function (a) {
      a = "search" === a ? "_aFilterData" : "_aSortData";
      return this.iterator(
          "cell",
          function (b, c, d) {
              return b.aoData[c][a][d];
          },
          1
      );
  });
  z("cells().render()", "cell().render()", function (a) {
      return this.iterator(
          "cell",
          function (b, c, d) {
              return F(b, c, d, a);
          },
          1
      );
  });
  z("cells().indexes()", "cell().index()", function () {
      return this.iterator(
          "cell",
          function (a, b, c) {
              return { row: b, column: c, columnVisible: ba(a, c) };
          },
          1
      );
  });
  z("cells().invalidate()", "cell().invalidate()", function (a) {
      return this.iterator("cell", function (b, c, d) {
          da(b, c, a, d);
      });
  });
  t("cell()", function (a, b, c) {
      return fb(this.cells(a, b, c));
  });
  t("cell().data()", function (a) {
      var b = this.context,
          c = this[0];
      if (a === n) return b.length && c.length ? F(b[0], c[0].row, c[0].column) : n;
      nb(b[0], c[0].row, c[0].column, a);
      da(b[0], c[0].row, "data", c[0].column);
      return this;
  });
  t("order()", function (a, b) {
      var c = this.context;
      if (a === n) return 0 !== c.length ? c[0].aaSorting : n;
      "number" === typeof a ? (a = [[a, b]]) : a.length && !f.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
      return this.iterator("table", function (b) {
          b.aaSorting = a.slice();
      });
  });
  t("order.listener()", function (a, b, c) {
      return this.iterator("table", function (d) {
          Pa(d, a, b, c);
      });
  });
  t("order.fixed()", function (a) {
      if (!a) {
          var b = this.context;
          b = b.length ? b[0].aaSortingFixed : n;
          return f.isArray(b) ? { pre: b } : b;
      }
      return this.iterator("table", function (b) {
          b.aaSortingFixed = f.extend(!0, {}, a);
      });
  });
  t(["columns().order()", "column().order()"], function (a) {
      var b = this;
      return this.iterator("table", function (c, d) {
          var e = [];
          f.each(b[d], function (b, c) {
              e.push([c, a]);
          });
          c.aaSorting = e;
      });
  });
  t("search()", function (a, b, c, d) {
      var e = this.context;
      return a === n
          ? 0 !== e.length
              ? e[0].oPreviousSearch.sSearch
              : n
          : this.iterator("table", function (e) {
                e.oFeatures.bFilter && ha(e, f.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1);
            });
  });
  z("columns().search()", "column().search()", function (a, b, c, d) {
      return this.iterator("column", function (e, h) {
          var g = e.aoPreSearchCols;
          if (a === n) return g[h].sSearch;
          e.oFeatures.bFilter && (f.extend(g[h], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ha(e, e.oPreviousSearch, 1));
      });
  });
  t("state()", function () {
      return this.context.length ? this.context[0].oSavedState : null;
  });
  t("state.clear()", function () {
      return this.iterator("table", function (a) {
          a.fnStateSaveCallback.call(a.oInstance, a, {});
      });
  });
  t("state.loaded()", function () {
      return this.context.length ? this.context[0].oLoadedState : null;
  });
  t("state.save()", function () {
      return this.iterator("table", function (a) {
          Aa(a);
      });
  });
  q.versionCheck = q.fnVersionCheck = function (a) {
      var b = q.version.split(".");
      a = a.split(".");
      for (var c, d, e = 0, f = a.length; e < f; e++) if (((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)) return c > d;
      return !0;
  };
  q.isDataTable = q.fnIsDataTable = function (a) {
      var b = f(a).get(0),
          c = !1;
      if (a instanceof q.Api) return !0;
      f.each(q.settings, function (a, e) {
          a = e.nScrollHead ? f("table", e.nScrollHead)[0] : null;
          var d = e.nScrollFoot ? f("table", e.nScrollFoot)[0] : null;
          if (e.nTable === b || a === b || d === b) c = !0;
      });
      return c;
  };
  q.tables = q.fnTables = function (a) {
      var b = !1;
      f.isPlainObject(a) && ((b = a.api), (a = a.visible));
      var c = f.map(q.settings, function (b) {
          if (!a || (a && f(b.nTable).is(":visible"))) return b.nTable;
      });
      return b ? new x(c) : c;
  };
  q.camelToHungarian = L;
  t("$()", function (a, b) {
      b = this.rows(b).nodes();
      b = f(b);
      return f([].concat(b.filter(a).toArray(), b.find(a).toArray()));
  });
  f.each(["on", "one", "off"], function (a, b) {
      t(b + "()", function () {
          var a = Array.prototype.slice.call(arguments);
          a[0] = f
              .map(a[0].split(/\s/), function (a) {
                  return a.match(/\.dt\b/) ? a : a + ".dt";
              })
              .join(" ");
          var d = f(this.tables().nodes());
          d[b].apply(d, a);
          return this;
      });
  });
  t("clear()", function () {
      return this.iterator("table", function (a) {
          pa(a);
      });
  });
  t("settings()", function () {
      return new x(this.context, this.context);
  });
  t("init()", function () {
      var a = this.context;
      return a.length ? a[0].oInit : null;
  });
  t("data()", function () {
      return this.iterator("table", function (a) {
          return K(a.aoData, "_aData");
      }).flatten();
  });
  t("destroy()", function (a) {
      a = a || !1;
      return this.iterator("table", function (b) {
          var c = b.nTableWrapper.parentNode,
              d = b.oClasses,
              e = b.nTable,
              h = b.nTBody,
              g = b.nTHead,
              k = b.nTFoot,
              l = f(e);
          h = f(h);
          var m = f(b.nTableWrapper),
              p = f.map(b.aoData, function (a) {
                  return a.nTr;
              }),
              n;
          b.bDestroying = !0;
          A(b, "aoDestroyCallback", "destroy", [b]);
          a || new x(b).columns().visible(!0);
          m.off(".DT").find(":not(tbody *)").off(".DT");
          f(y).off(".DT-" + b.sInstance);
          e != g.parentNode && (l.children("thead").detach(), l.append(g));
          k && e != k.parentNode && (l.children("tfoot").detach(), l.append(k));
          b.aaSorting = [];
          b.aaSortingFixed = [];
          za(b);
          f(p).removeClass(b.asStripeClasses.join(" "));
          f("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
          h.children().detach();
          h.append(p);
          g = a ? "remove" : "detach";
          l[g]();
          m[g]();
          !a &&
              c &&
              (c.insertBefore(e, b.nTableReinsertBefore),
              l.css("width", b.sDestroyWidth).removeClass(d.sTable),
              (n = b.asDestroyStripes.length) &&
                  h.children().each(function (a) {
                      f(this).addClass(b.asDestroyStripes[a % n]);
                  }));
          c = f.inArray(b, q.settings);
          -1 !== c && q.settings.splice(c, 1);
      });
  });
  f.each(["column", "row", "cell"], function (a, b) {
      t(b + "s().every()", function (a) {
          var c = this.selector.opts,
              e = this;
          return this.iterator(b, function (d, f, k, l, m) {
              a.call(e[b](f, "cell" === b ? k : c, "cell" === b ? c : n), f, k, l, m);
          });
      });
  });
  t("i18n()", function (a, b, c) {
      var d = this.context[0];
      a = T(a)(d.oLanguage);
      a === n && (a = b);
      c !== n && f.isPlainObject(a) && (a = a[c] !== n ? a[c] : a._);
      return a.replace("%d", c);
  });
  q.version = "1.10.21";
  q.settings = [];
  q.models = {};
  q.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };
  q.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 };
  q.models.oColumn = {
      idx: null,
      aDataSort: null,
      asSorting: null,
      bSearchable: null,
      bSortable: null,
      bVisible: null,
      _sManualType: null,
      _bAttrSrc: !1,
      fnCreatedCell: null,
      fnGetData: null,
      fnSetData: null,
      mData: null,
      mRender: null,
      nTh: null,
      nTf: null,
      sClass: null,
      sContentPadding: null,
      sDefaultContent: null,
      sName: null,
      sSortDataType: "std",
      sSortingClass: null,
      sSortingClassJUI: null,
      sTitle: null,
      sType: null,
      sWidth: null,
      sWidthOrig: null,
  };
  q.defaults = {
      aaData: null,
      aaSorting: [[0, "asc"]],
      aaSortingFixed: [],
      ajax: null,
      aLengthMenu: [10, 25, 50, 100],
      aoColumns: null,
      aoColumnDefs: null,
      aoSearchCols: [],
      asStripeClasses: null,
      bAutoWidth: !0,
      bDeferRender: !1,
      bDestroy: !1,
      bFilter: !0,
      bInfo: !0,
      bLengthChange: !0,
      bPaginate: !0,
      bProcessing: !1,
      bRetrieve: !1,
      bScrollCollapse: !1,
      bServerSide: !1,
      bSort: !0,
      bSortMulti: !0,
      bSortCellsTop: !1,
      bSortClasses: !0,
      bStateSave: !1,
      fnCreatedRow: null,
      fnDrawCallback: null,
      fnFooterCallback: null,
      fnFormatNumber: function (a) {
          return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
      },
      fnHeaderCallback: null,
      fnInfoCallback: null,
      fnInitComplete: null,
      fnPreDrawCallback: null,
      fnRowCallback: null,
      fnServerData: null,
      fnServerParams: null,
      fnStateLoadCallback: function (a) {
          try {
              return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname));
          } catch (b) {
              return {};
          }
      },
      fnStateLoadParams: null,
      fnStateLoaded: null,
      fnStateSaveCallback: function (a, b) {
          try {
              (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b));
          } catch (c) {}
      },
      fnStateSaveParams: null,
      iStateDuration: 7200,
      iDeferLoading: null,
      iDisplayLength: 10,
      iDisplayStart: 0,
      iTabIndex: 0,
      oClasses: {},
      oLanguage: {
          oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
          oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" },
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
          sInfoEmpty: "Showing 0 to 0 of 0 entries",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "Show _MENU_ entries",
          sLoadingRecords: "Loading...",
          sProcessing: "Processing...",
          sSearch: "Search:",
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found",
      },
      oSearch: f.extend({}, q.models.oSearch),
      sAjaxDataProp: "data",
      sAjaxSource: null,
      sDom: "lfrtip",
      searchDelay: null,
      sPaginationType: "simple_numbers",
      sScrollX: "",
      sScrollXInner: "",
      sScrollY: "",
      sServerMethod: "GET",
      renderer: null,
      rowId: "DT_RowId",
  };
  H(q.defaults);
  q.defaults.column = {
      aDataSort: null,
      iDataSort: -1,
      asSorting: ["asc", "desc"],
      bSearchable: !0,
      bSortable: !0,
      bVisible: !0,
      fnCreatedCell: null,
      mData: null,
      mRender: null,
      sCellType: "td",
      sClass: "",
      sContentPadding: "",
      sDefaultContent: null,
      sName: "",
      sSortDataType: "std",
      sTitle: null,
      sType: null,
      sWidth: null,
  };
  H(q.defaults.column);
  q.models.oSettings = {
      oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null },
      oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null },
      oLanguage: { fnInfoCallback: null },
      oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 },
      ajax: null,
      aanFeatures: [],
      aoData: [],
      aiDisplay: [],
      aiDisplayMaster: [],
      aIds: {},
      aoColumns: [],
      aoHeader: [],
      aoFooter: [],
      oPreviousSearch: {},
      aoPreSearchCols: [],
      aaSorting: null,
      aaSortingFixed: [],
      asStripeClasses: null,
      asDestroyStripes: [],
      sDestroyWidth: 0,
      aoRowCallback: [],
      aoHeaderCallback: [],
      aoFooterCallback: [],
      aoDrawCallback: [],
      aoRowCreatedCallback: [],
      aoPreDrawCallback: [],
      aoInitComplete: [],
      aoStateSaveParams: [],
      aoStateLoadParams: [],
      aoStateLoaded: [],
      sTableId: "",
      nTable: null,
      nTHead: null,
      nTFoot: null,
      nTBody: null,
      nTableWrapper: null,
      bDeferLoading: !1,
      bInitialised: !1,
      aoOpenRows: [],
      sDom: null,
      searchDelay: null,
      sPaginationType: "two_button",
      iStateDuration: 0,
      aoStateSave: [],
      aoStateLoad: [],
      oSavedState: null,
      oLoadedState: null,
      sAjaxSource: null,
      sAjaxDataProp: null,
      bAjaxDataGet: !0,
      jqXHR: null,
      json: n,
      oAjaxData: n,
      fnServerData: null,
      aoServerParams: [],
      sServerMethod: null,
      fnFormatNumber: null,
      aLengthMenu: null,
      iDraw: 0,
      bDrawing: !1,
      iDrawError: -1,
      _iDisplayLength: 10,
      _iDisplayStart: 0,
      _iRecordsTotal: 0,
      _iRecordsDisplay: 0,
      oClasses: {},
      bFiltered: !1,
      bSorted: !1,
      bSortCellsTop: null,
      oInit: null,
      aoDestroyCallback: [],
      fnRecordsTotal: function () {
          return "ssp" == I(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
      },
      fnRecordsDisplay: function () {
          return "ssp" == I(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
      },
      fnDisplayEnd: function () {
          var a = this._iDisplayLength,
              b = this._iDisplayStart,
              c = b + a,
              d = this.aiDisplay.length,
              e = this.oFeatures,
              f = e.bPaginate;
          return e.bServerSide ? (!1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay)) : !f || c > d || -1 === a ? d : c;
      },
      oInstance: null,
      sInstance: null,
      iTabIndex: 0,
      nScrollHead: null,
      nScrollFoot: null,
      aLastSort: [],
      oPlugins: {},
      rowIdFn: null,
      rowId: null,
  };
  q.ext = C = {
      buttons: {},
      classes: {},
      build: "bs4-4.1.1/jq-3.3.1/dt-1.10.21/af-2.3.5/cr-1.5.2/r-2.2.5/sc-2.0.2",
      errMode: "alert",
      feature: [],
      search: [],
      selector: { cell: [], column: [], row: [] },
      internal: {},
      legacy: { ajax: null },
      pager: {},
      renderer: { pageButton: {}, header: {} },
      order: {},
      type: { detect: [], search: {}, order: {} },
      _unique: 0,
      fnVersionCheck: q.fnVersionCheck,
      iApiIndex: 0,
      oJUIClasses: {},
      sVersion: q.version,
  };
  f.extend(C, { afnFiltering: C.search, aTypes: C.type.detect, ofnSearch: C.type.search, oSort: C.type.order, afnSortData: C.order, aoFeatures: C.feature, oApi: C.internal, oStdClasses: C.classes, oPagination: C.pager });
  f.extend(q.ext.classes, {
      sTable: "dataTable",
      sNoFooter: "no-footer",
      sPageButton: "paginate_button",
      sPageButtonActive: "current",
      sPageButtonDisabled: "disabled",
      sStripeOdd: "odd",
      sStripeEven: "even",
      sRowEmpty: "dataTables_empty",
      sWrapper: "dataTables_wrapper",
      sFilter: "dataTables_filter",
      sInfo: "dataTables_info",
      sPaging: "dataTables_paginate paging_",
      sLength: "dataTables_length",
      sProcessing: "dataTables_processing",
      sSortAsc: "sorting_asc",
      sSortDesc: "sorting_desc",
      sSortable: "sorting",
      sSortableAsc: "sorting_asc_disabled",
      sSortableDesc: "sorting_desc_disabled",
      sSortableNone: "sorting_disabled",
      sSortColumn: "sorting_",
      sFilterInput: "",
      sLengthSelect: "",
      sScrollWrapper: "dataTables_scroll",
      sScrollHead: "dataTables_scrollHead",
      sScrollHeadInner: "dataTables_scrollHeadInner",
      sScrollBody: "dataTables_scrollBody",
      sScrollFoot: "dataTables_scrollFoot",
      sScrollFootInner: "dataTables_scrollFootInner",
      sHeaderTH: "",
      sFooterTH: "",
      sSortJUIAsc: "",
      sSortJUIDesc: "",
      sSortJUI: "",
      sSortJUIAscAllowed: "",
      sSortJUIDescAllowed: "",
      sSortJUIWrapper: "",
      sSortIcon: "",
      sJUIHeader: "",
      sJUIFooter: "",
  });
  var Ob = q.ext.pager;
  f.extend(Ob, {
      simple: function (a, b) {
          return ["previous", "next"];
      },
      full: function (a, b) {
          return ["first", "previous", "next", "last"];
      },
      numbers: function (a, b) {
          return [ja(a, b)];
      },
      simple_numbers: function (a, b) {
          return ["previous", ja(a, b), "next"];
      },
      full_numbers: function (a, b) {
          return ["first", "previous", ja(a, b), "next", "last"];
      },
      first_last_numbers: function (a, b) {
          return ["first", ja(a, b), "last"];
      },
      _numbers: ja,
      numbers_length: 7,
  });
  f.extend(!0, q.ext.renderer, {
      pageButton: {
          _: function (a, b, c, d, e, h) {
              var g = a.oClasses,
                  k = a.oLanguage.oPaginate,
                  l = a.oLanguage.oAria.paginate || {},
                  m,
                  p,
                  q = 0,
                  t = function (b, d) {
                      var n,
                          r = g.sPageButtonDisabled,
                          u = function (b) {
                              Wa(a, b.data.action, !0);
                          };
                      var w = 0;
                      for (n = d.length; w < n; w++) {
                          var v = d[w];
                          if (f.isArray(v)) {
                              var x = f("<" + (v.DT_el || "div") + "/>").appendTo(b);
                              t(x, v);
                          } else {
                              m = null;
                              p = v;
                              x = a.iTabIndex;
                              switch (v) {
                                  case "ellipsis":
                                      b.append('<span class="ellipsis">&#x2026;</span>');
                                      break;
                                  case "first":
                                      m = k.sFirst;
                                      0 === e && ((x = -1), (p += " " + r));
                                      break;
                                  case "previous":
                                      m = k.sPrevious;
                                      0 === e && ((x = -1), (p += " " + r));
                                      break;
                                  case "next":
                                      m = k.sNext;
                                      if (0 === h || e === h - 1) (x = -1), (p += " " + r);
                                      break;
                                  case "last":
                                      m = k.sLast;
                                      e === h - 1 && ((x = -1), (p += " " + r));
                                      break;
                                  default:
                                      (m = v + 1), (p = e === v ? g.sPageButtonActive : "");
                              }
                              null !== m &&
                                  ((x = f("<a>", { class: g.sPageButton + " " + p, "aria-controls": a.sTableId, "aria-label": l[v], "data-dt-idx": q, tabindex: x, id: 0 === c && "string" === typeof v ? a.sTableId + "_" + v : null })
                                      .html(m)
                                      .appendTo(b)),
                                  Za(x, { action: v }, u),
                                  q++);
                          }
                      }
                  };
              try {
                  var x = f(b).find(w.activeElement).data("dt-idx");
              } catch (lc) {}
              t(f(b).empty(), d);
              x !== n &&
                  f(b)
                      .find("[data-dt-idx=" + x + "]")
                      .trigger("focus");
          },
      },
  });
  f.extend(q.ext.type.detect, [
      function (a, b) {
          b = b.oLanguage.sDecimal;
          return cb(a, b) ? "num" + b : null;
      },
      function (a, b) {
          if (a && !(a instanceof Date) && !cc.test(a)) return null;
          b = Date.parse(a);
          return (null !== b && !isNaN(b)) || P(a) ? "date" : null;
      },
      function (a, b) {
          b = b.oLanguage.sDecimal;
          return cb(a, b, !0) ? "num-fmt" + b : null;
      },
      function (a, b) {
          b = b.oLanguage.sDecimal;
          return Tb(a, b) ? "html-num" + b : null;
      },
      function (a, b) {
          b = b.oLanguage.sDecimal;
          return Tb(a, b, !0) ? "html-num-fmt" + b : null;
      },
      function (a, b) {
          return P(a) || ("string" === typeof a && -1 !== a.indexOf("<")) ? "html" : null;
      },
  ]);
  f.extend(q.ext.type.search, {
      html: function (a) {
          return P(a) ? a : "string" === typeof a ? a.replace(Qb, " ").replace(Da, "") : "";
      },
      string: function (a) {
          return P(a) ? a : "string" === typeof a ? a.replace(Qb, " ") : a;
      },
  });
  var Ca = function (a, b, c, d) {
      if (0 !== a && (!a || "-" === a)) return -Infinity;
      b && (a = Sb(a, b));
      a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
      return 1 * a;
  };
  f.extend(C.type.order, {
      "date-pre": function (a) {
          a = Date.parse(a);
          return isNaN(a) ? -Infinity : a;
      },
      "html-pre": function (a) {
          return P(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "";
      },
      "string-pre": function (a) {
          return P(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : "";
      },
      "string-asc": function (a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
      },
      "string-desc": function (a, b) {
          return a < b ? 1 : a > b ? -1 : 0;
      },
  });
  Ga("");
  f.extend(!0, q.ext.renderer, {
      header: {
          _: function (a, b, c, d) {
              f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
                  a === f && ((e = c.idx), b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc : c.sSortingClass));
              });
          },
          jqueryui: function (a, b, c, d) {
              f("<div/>")
                  .addClass(d.sSortJUIWrapper)
                  .append(b.contents())
                  .append(f("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI))
                  .appendTo(b);
              f(a.nTable).on("order.dt.DT", function (e, f, g, k) {
                  a === f &&
                      ((e = c.idx),
                      b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc : c.sSortingClass),
                      b
                          .find("span." + d.sSortIcon)
                          .removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed)
                          .addClass("asc" == k[e] ? d.sSortJUIAsc : "desc" == k[e] ? d.sSortJUIDesc : c.sSortingClassJUI));
              });
          },
      },
  });
  var hb = function (a) {
      return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a;
  };
  q.render = {
      number: function (a, b, c, d, e) {
          return {
              display: function (f) {
                  if ("number" !== typeof f && "string" !== typeof f) return f;
                  var g = 0 > f ? "-" : "",
                      h = parseFloat(f);
                  if (isNaN(h)) return hb(f);
                  h = h.toFixed(c);
                  f = Math.abs(h);
                  h = parseInt(f, 10);
                  f = c ? b + (f - h).toFixed(c).substring(2) : "";
                  return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "");
              },
          };
      },
      text: function () {
          return { display: hb, filter: hb };
      },
  };
  f.extend(q.ext.internal, {
      _fnExternApiFunc: Pb,
      _fnBuildAjax: ua,
      _fnAjaxUpdate: pb,
      _fnAjaxParameters: yb,
      _fnAjaxUpdateDraw: zb,
      _fnAjaxDataSrc: va,
      _fnAddColumn: Ha,
      _fnColumnOptions: la,
      _fnAdjustColumnSizing: Z,
      _fnVisibleToColumnIndex: aa,
      _fnColumnIndexToVisible: ba,
      _fnVisbleColumns: V,
      _fnGetColumns: na,
      _fnColumnTypes: Ja,
      _fnApplyColumnDefs: mb,
      _fnHungarianMap: H,
      _fnCamelToHungarian: L,
      _fnLanguageCompat: Fa,
      _fnBrowserDetect: kb,
      _fnAddData: R,
      _fnAddTr: oa,
      _fnNodeToDataIndex: function (a, b) {
          return b._DT_RowIndex !== n ? b._DT_RowIndex : null;
      },
      _fnNodeToColumnIndex: function (a, b, c) {
          return f.inArray(c, a.aoData[b].anCells);
      },
      _fnGetCellData: F,
      _fnSetCellData: nb,
      _fnSplitObjNotation: Ma,
      _fnGetObjectDataFn: T,
      _fnSetObjectDataFn: Q,
      _fnGetDataMaster: Na,
      _fnClearTable: pa,
      _fnDeleteIndex: qa,
      _fnInvalidate: da,
      _fnGetRowElements: La,
      _fnCreateTr: Ka,
      _fnBuildHead: ob,
      _fnDrawHead: fa,
      _fnDraw: S,
      _fnReDraw: U,
      _fnAddOptionsHtml: rb,
      _fnDetectHeader: ea,
      _fnGetUniqueThs: ta,
      _fnFeatureHtmlFilter: tb,
      _fnFilterComplete: ha,
      _fnFilterCustom: Cb,
      _fnFilterColumn: Bb,
      _fnFilter: Ab,
      _fnFilterCreateSearch: Sa,
      _fnEscapeRegex: Ta,
      _fnFilterData: Db,
      _fnFeatureHtmlInfo: wb,
      _fnUpdateInfo: Gb,
      _fnInfoMacros: Hb,
      _fnInitialise: ia,
      _fnInitComplete: wa,
      _fnLengthChange: Ua,
      _fnFeatureHtmlLength: sb,
      _fnFeatureHtmlPaginate: xb,
      _fnPageChange: Wa,
      _fnFeatureHtmlProcessing: ub,
      _fnProcessingDisplay: J,
      _fnFeatureHtmlTable: vb,
      _fnScrollDraw: ma,
      _fnApplyToChildren: N,
      _fnCalculateColumnWidths: Ia,
      _fnThrottle: Ra,
      _fnConvertToWidth: Ib,
      _fnGetWidestNode: Jb,
      _fnGetMaxLenString: Kb,
      _fnStringToCss: B,
      _fnSortFlatten: X,
      _fnSort: qb,
      _fnSortAria: Mb,
      _fnSortListener: Ya,
      _fnSortAttachListener: Pa,
      _fnSortingClasses: za,
      _fnSortData: Lb,
      _fnSaveState: Aa,
      _fnLoadState: Nb,
      _fnSettingsFromNode: Ba,
      _fnLog: O,
      _fnMap: M,
      _fnBindAction: Za,
      _fnCallbackReg: D,
      _fnCallbackFire: A,
      _fnLengthOverflow: Va,
      _fnRenderer: Qa,
      _fnDataSource: I,
      _fnRowAttributes: Oa,
      _fnExtend: $a,
      _fnCalculateEnd: function () {},
  });
  f.fn.dataTable = q;
  q.$ = f;
  f.fn.dataTableSettings = q.settings;
  f.fn.dataTableExt = q.ext;
  f.fn.DataTable = function (a) {
      return f(this).dataTable(a).api();
  };
  f.each(q, function (a, b) {
      f.fn.DataTable[a] = b;
  });
  return f.fn.dataTable;
});

/*!
DataTables Bootstrap 4 integration
©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
      var k = a[d];
      if (b.call(c, k, d, a)) return { i: d, v: k };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
  for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, b, c, e) {
  if (b) {
      c = $jscomp.global;
      a = a.split(".");
      for (e = 0; e < a.length - 1; e++) {
          var d = a[e];
          d in c || (c[d] = {});
          c = c[d];
      }
      a = a[a.length - 1];
      e = c[a];
      b = b(e);
      b != e && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
      return a
          ? a
          : function (a, c) {
                return $jscomp.findInternal(this, a, c).v;
            };
  },
  "es6",
  "es3"
);
(function (a) {
  "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (b) {
            return a(b, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (b, c) {
            b || (b = window);
            (c && c.fn.dataTable) || (c = require("datatables.net")(b, c).$);
            return a(c, b, b.document);
        })
      : a(jQuery, window, document);
})(function (a, b, c, e) {
  var d = a.fn.dataTable;
  a.extend(!0, d.defaults, { dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>", renderer: "bootstrap" });
  a.extend(d.ext.classes, {
      sWrapper: "dataTables_wrapper dt-bootstrap4",
      sFilterInput: "form-control form-control-sm",
      sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
      sProcessing: "dataTables_processing card",
      sPageButton: "paginate_button page-item",
  });
  d.ext.renderer.pageButton.bootstrap = function (b, l, v, w, m, r) {
      var k = new d.Api(b),
          x = b.oClasses,
          n = b.oLanguage.oPaginate,
          y = b.oLanguage.oAria.paginate || {},
          g,
          h,
          t = 0,
          u = function (c, d) {
              var e,
                  l = function (b) {
                      b.preventDefault();
                      a(b.currentTarget).hasClass("disabled") || k.page() == b.data.action || k.page(b.data.action).draw("page");
                  };
              var q = 0;
              for (e = d.length; q < e; q++) {
                  var f = d[q];
                  if (a.isArray(f)) u(c, f);
                  else {
                      h = g = "";
                      switch (f) {
                          case "ellipsis":
                              g = "&#x2026;";
                              h = "disabled";
                              break;
                          case "first":
                              g = n.sFirst;
                              h = f + (0 < m ? "" : " disabled");
                              break;
                          case "previous":
                              g = n.sPrevious;
                              h = f + (0 < m ? "" : " disabled");
                              break;
                          case "next":
                              g = n.sNext;
                              h = f + (m < r - 1 ? "" : " disabled");
                              break;
                          case "last":
                              g = n.sLast;
                              h = f + (m < r - 1 ? "" : " disabled");
                              break;
                          default:
                              (g = f + 1), (h = m === f ? "active" : "");
                      }
                      if (g) {
                          var p = a("<li>", { class: x.sPageButton + " " + h, id: 0 === v && "string" === typeof f ? b.sTableId + "_" + f : null })
                              .append(a("<a>", { href: "#", "aria-controls": b.sTableId, "aria-label": y[f], "data-dt-idx": t, tabindex: b.iTabIndex, class: "page-link" }).html(g))
                              .appendTo(c);
                          b.oApi._fnBindAction(p, { action: f }, l);
                          t++;
                      }
                  }
              }
          };
      try {
          var p = a(l).find(c.activeElement).data("dt-idx");
      } catch (z) {}
      u(a(l).empty().html('<ul class="pagination"/>').children("ul"), w);
      p !== e &&
          a(l)
              .find("[data-dt-idx=" + p + "]")
              .trigger("focus");
  };
  return d;
});

/*!
 Copyright 2010-2020 SpryMedia Ltd.

This source file is free software, available under the following license:
 MIT license - http://datatables.net/license/mit

This source file is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

For details please refer to: http://www.datatables.net
AutoFill 2.3.5
©2008-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (b) {
  var f = 0;
  return function () {
      return f < b.length ? { done: !1, value: b[f++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (b) {
  return { next: $jscomp.arrayIteratorImpl(b) };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (b, f, e) {
            b != Array.prototype && b != Object.prototype && (b[f] = e.value);
        };
$jscomp.getGlobal = function (b) {
  b = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, b];
  for (var f = 0; f < b.length; ++f) {
      var e = b[f];
      if (e && e.Math == Math) return e;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (b, f) {
  this.$jscomp$symbol$id_ = b;
  $jscomp.defineProperty(this, "description", { configurable: !0, writable: !0, value: f });
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
  function b(e) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (e || "") + "_" + f++, e);
  }
  var f = 0;
  return b;
})();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.iterator;
  b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[b] &&
      $jscomp.defineProperty(Array.prototype, b, {
          configurable: !0,
          writable: !0,
          value: function () {
              return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          },
      });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.asyncIterator;
  b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (b) {
  $jscomp.initSymbolIterator();
  b = { next: b };
  b[$jscomp.global.Symbol.iterator] = function () {
      return this;
  };
  return b;
};
$jscomp.iteratorFromArray = function (b, f) {
  $jscomp.initSymbolIterator();
  b instanceof String && (b += "");
  var e = 0,
      m = {
          next: function () {
              if (e < b.length) {
                  var k = e++;
                  return { value: f(k, b[k]), done: !1 };
              }
              m.next = function () {
                  return { done: !0, value: void 0 };
              };
              return m.next();
          },
      };
  m[Symbol.iterator] = function () {
      return m;
  };
  return m;
};
$jscomp.polyfill = function (b, f, e, m) {
  if (f) {
      e = $jscomp.global;
      b = b.split(".");
      for (m = 0; m < b.length - 1; m++) {
          var k = b[m];
          k in e || (e[k] = {});
          e = e[k];
      }
      b = b[b.length - 1];
      m = e[b];
      f = f(m);
      f != m && null != f && $jscomp.defineProperty(e, b, { configurable: !0, writable: !0, value: f });
  }
};
$jscomp.polyfill(
  "Array.prototype.keys",
  function (b) {
      return b
          ? b
          : function () {
                return $jscomp.iteratorFromArray(this, function (b) {
                    return b;
                });
            };
  },
  "es6",
  "es3"
);
(function (b) {
  "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (f) {
            return b(f, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (f, e) {
            f || (f = window);
            (e && e.fn.dataTable) || (e = require("datatables.net")(f, e).$);
            return b(e, f, f.document);
        })
      : b(jQuery, window, document);
})(function (b, f, e, m) {
  var k = b.fn.dataTable,
      x = 0,
      l = function (a, d) {
          if (!k.versionCheck || !k.versionCheck("1.10.8")) throw "Warning: AutoFill requires DataTables 1.10.8 or greater";
          this.c = b.extend(!0, {}, k.defaults.autoFill, l.defaults, d);
          this.s = { dt: new k.Api(a), namespace: ".autoFill" + x++, scroll: {}, scrollInterval: null, handle: { height: 0, width: 0 }, enabled: !1 };
          this.dom = {
              handle: b('<div class="dt-autofill-handle"/>'),
              select: { top: b('<div class="dt-autofill-select top"/>'), right: b('<div class="dt-autofill-select right"/>'), bottom: b('<div class="dt-autofill-select bottom"/>'), left: b('<div class="dt-autofill-select left"/>') },
              background: b('<div class="dt-autofill-background"/>'),
              list: b('<div class="dt-autofill-list">' + this.s.dt.i18n("autoFill.info", "") + "<ul/></div>"),
              dtScroll: null,
              offsetParent: null,
          };
          this._constructor();
      };
  b.extend(l.prototype, {
      enabled: function () {
          return this.s.enabled;
      },
      enable: function (a) {
          var d = this;
          if (!1 === a) return this.disable();
          this.s.enabled = !0;
          this._focusListener();
          this.dom.handle.on("mousedown", function (a) {
              d._mousedown(a);
              return !1;
          });
          return this;
      },
      disable: function () {
          this.s.enabled = !1;
          this._focusListenerRemove();
          return this;
      },
      _constructor: function () {
          var a = this,
              d = this.s.dt,
              c = b("div.dataTables_scrollBody", this.s.dt.table().container());
          d.settings()[0].autoFill = this;
          c.length && ((this.dom.dtScroll = c), "static" === c.css("position") && c.css("position", "relative"));
          !1 !== this.c.enable && this.enable();
          d.on("destroy.autoFill", function () {
              a._focusListenerRemove();
          });
      },
      _attach: function (a) {
          var d = this.s.dt,
              c = d.cell(a).index(),
              g = this.dom.handle,
              h = this.s.handle;
          c && -1 !== d.columns(this.c.columns).indexes().indexOf(c.column)
              ? (this.dom.offsetParent || (this.dom.offsetParent = b(d.table().node()).offsetParent()),
                (h.height && h.width) || (g.appendTo("body"), (h.height = g.outerHeight()), (h.width = g.outerWidth())),
                (d = this._getPosition(a, this.dom.offsetParent)),
                (this.dom.attachedTo = a),
                g.css({ top: d.top + a.offsetHeight - h.height, left: d.left + a.offsetWidth - h.width }).appendTo(this.dom.offsetParent))
              : this._detach();
      },
      _actionSelector: function (a) {
          var d = this,
              c = this.s.dt,
              g = l.actions,
              h = [];
          b.each(g, function (d, b) {
              b.available(c, a) && h.push(d);
          });
          if (1 === h.length && !1 === this.c.alwaysAsk) {
              var e = g[h[0]].execute(c, a);
              this._update(e, a);
          } else if (1 < h.length) {
              var f = this.dom.list.children("ul").empty();
              h.push("cancel");
              b.each(h, function (h, e) {
                  f.append(
                      b("<li/>")
                          .append('<div class="dt-autofill-question">' + g[e].option(c, a) + "<div>")
                          .append(
                              b('<div class="dt-autofill-button">').append(
                                  b('<button class="' + l.classes.btn + '">' + c.i18n("autoFill.button", "&gt;") + "</button>").on("click", function () {
                                      var h = g[e].execute(c, a, b(this).closest("li"));
                                      d._update(h, a);
                                      d.dom.background.remove();
                                      d.dom.list.remove();
                                  })
                              )
                          )
                  );
              });
              this.dom.background.appendTo("body");
              this.dom.list.appendTo("body");
              this.dom.list.css("margin-top", (this.dom.list.outerHeight() / 2) * -1);
          }
      },
      _detach: function () {
          this.dom.attachedTo = null;
          this.dom.handle.detach();
      },
      _drawSelection: function (a, d) {
          var c = this.s.dt;
          d = this.s.start;
          var g = b(this.dom.start),
              h = { row: this.c.vertical ? c.rows({ page: "current" }).nodes().indexOf(a.parentNode) : d.row, column: this.c.horizontal ? b(a).index() : d.column };
          a = c.column.index("toData", h.column);
          var e = c.row(":eq(" + h.row + ")", { page: "current" });
          e = b(c.cell(e.index(), a).node());
          if (c.cell(e).any() && -1 !== c.columns(this.c.columns).indexes().indexOf(a)) {
              this.s.end = h;
              c = d.row < h.row ? g : e;
              var f = d.row < h.row ? e : g;
              a = d.column < h.column ? g : e;
              g = d.column < h.column ? e : g;
              c = this._getPosition(c.get(0)).top;
              a = this._getPosition(a.get(0)).left;
              d = this._getPosition(f.get(0)).top + f.outerHeight() - c;
              g = this._getPosition(g.get(0)).left + g.outerWidth() - a;
              h = this.dom.select;
              h.top.css({ top: c, left: a, width: g });
              h.left.css({ top: c, left: a, height: d });
              h.bottom.css({ top: c + d, left: a, width: g });
              h.right.css({ top: c, left: a + g, height: d });
          }
      },
      _editor: function (a) {
          var d = this.s.dt,
              c = this.c.editor;
          if (c) {
              for (var b = {}, h = [], e = c.fields(), f = 0, k = a.length; f < k; f++)
                  for (var l = 0, p = a[f].length; l < p; l++) {
                      var q = a[f][l],
                          n = d.settings()[0].aoColumns[q.index.column],
                          r = n.editField;
                      if (r === m) {
                          n = n.mData;
                          for (var u = 0, y = e.length; u < y; u++) {
                              var w = c.field(e[u]);
                              if (w.dataSrc() === n) {
                                  r = w.name();
                                  break;
                              }
                          }
                      }
                      if (!r) throw "Could not automatically determine field data. Please see https://datatables.net/tn/11";
                      b[r] || (b[r] = {});
                      n = d.row(q.index.row).id();
                      b[r][n] = q.set;
                      h.push(q.index);
                  }
              c.bubble(h, !1).multiSet(b).submit();
          }
      },
      _emitEvent: function (a, d) {
          this.s.dt.iterator("table", function (c, g) {
              b(c.nTable).triggerHandler(a + ".dt", d);
          });
      },
      _focusListener: function () {
          var a = this,
              d = this.s.dt,
              c = this.s.namespace,
              g = null !== this.c.focus ? this.c.focus : d.init().keys || d.settings()[0].keytable ? "focus" : "hover";
          if ("focus" === g)
              d.on("key-focus.autoFill", function (c, b, d) {
                  a._attach(d.node());
              }).on("key-blur.autoFill", function (c, b, d) {
                  a._detach();
              });
          else if ("click" === g)
              b(d.table().body()).on("click" + c, "td, th", function (c) {
                  a._attach(this);
              }),
                  b(e.body).on("click" + c, function (c) {
                      b(c.target).parents().filter(d.table().body()).length || a._detach();
                  });
          else
              b(d.table().body())
                  .on("mouseenter" + c, "td, th", function (c) {
                      a._attach(this);
                  })
                  .on("mouseleave" + c, function (c) {
                      b(c.relatedTarget).hasClass("dt-autofill-handle") || a._detach();
                  });
      },
      _focusListenerRemove: function () {
          var a = this.s.dt;
          a.off(".autoFill");
          b(a.table().body()).off(this.s.namespace);
          b(e.body).off(this.s.namespace);
      },
      _getPosition: function (a, d) {
          var c = 0,
              g = 0;
          d || (d = b(b(this.s.dt.table().node())[0].offsetParent));
          do {
              var h = a.offsetTop,
                  e = a.offsetLeft;
              var f = b(a.offsetParent);
              c += h + 1 * parseInt(f.css("border-top-width"));
              g += e + 1 * parseInt(f.css("border-left-width"));
              if ("body" === a.nodeName.toLowerCase()) break;
              a = f.get(0);
          } while (f.get(0) !== d.get(0));
          return { top: c, left: g };
      },
      _mousedown: function (a) {
          var d = this,
              c = this.s.dt;
          this.dom.start = this.dom.attachedTo;
          this.s.start = { row: c.rows({ page: "current" }).nodes().indexOf(b(this.dom.start).parent()[0]), column: b(this.dom.start).index() };
          b(e.body)
              .on("mousemove.autoFill", function (a) {
                  d._mousemove(a);
              })
              .on("mouseup.autoFill", function (a) {
                  d._mouseup(a);
              });
          var g = this.dom.select;
          c = b(c.table().node()).offsetParent();
          g.top.appendTo(c);
          g.left.appendTo(c);
          g.right.appendTo(c);
          g.bottom.appendTo(c);
          this._drawSelection(this.dom.start, a);
          this.dom.handle.css("display", "none");
          a = this.dom.dtScroll;
          this.s.scroll = { windowHeight: b(f).height(), windowWidth: b(f).width(), dtTop: a ? a.offset().top : null, dtLeft: a ? a.offset().left : null, dtHeight: a ? a.outerHeight() : null, dtWidth: a ? a.outerWidth() : null };
      },
      _mousemove: function (a) {
          var b = a.target.nodeName.toLowerCase();
          if ("td" === b || "th" === b) this._drawSelection(a.target, a), this._shiftScroll(a);
      },
      _mouseup: function (a) {
          b(e.body).off(".autoFill");
          var d = this,
              c = this.s.dt,
              g = this.dom.select;
          g.top.remove();
          g.left.remove();
          g.right.remove();
          g.bottom.remove();
          this.dom.handle.css("display", "block");
          g = this.s.start;
          var h = this.s.end;
          if (g.row !== h.row || g.column !== h.column) {
              var f = c.cell(":eq(" + g.row + ")", g.column + ":visible", { page: "current" });
              if (b("div.DTE", f.node()).length) {
                  var k = c.editor();
                  k.on("submitSuccess.dtaf close.dtaf", function () {
                      k.off(".dtaf");
                      setTimeout(function () {
                          d._mouseup(a);
                      }, 100);
                  }).on("submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf", function () {
                      k.off(".dtaf");
                  });
                  k.submit();
              } else {
                  var l = this._range(g.row, h.row);
                  g = this._range(g.column, h.column);
                  h = [];
                  for (var v = c.settings()[0], p = v.aoColumns, q = c.columns(this.c.columns).indexes(), n = 0; n < l.length; n++)
                      h.push(
                          b.map(g, function (a) {
                              var b = c.row(":eq(" + l[n] + ")", { page: "current" });
                              a = c.cell(b.index(), a + ":visible");
                              b = a.data();
                              var d = a.index(),
                                  g = p[d.column].editField;
                              g !== m && (b = v.oApi._fnGetObjectDataFn(g)(c.row(d.row).data()));
                              if (-1 !== q.indexOf(d.column)) return { cell: a, data: b, label: a.data(), index: d };
                          })
                      );
                  this._actionSelector(h);
                  clearInterval(this.s.scrollInterval);
                  this.s.scrollInterval = null;
              }
          }
      },
      _range: function (a, b) {
          var c = [];
          if (a <= b) for (; a <= b; a++) c.push(a);
          else for (; a >= b; a--) c.push(a);
          return c;
      },
      _shiftScroll: function (a) {
          var b = this,
              c = this.s.scroll,
              g = !1,
              h = a.pageY - e.body.scrollTop,
              f = a.pageX - e.body.scrollLeft,
              k,
              l,
              m,
              p;
          65 > h ? (k = -5) : h > c.windowHeight - 65 && (k = 5);
          65 > f ? (l = -5) : f > c.windowWidth - 65 && (l = 5);
          null !== c.dtTop && a.pageY < c.dtTop + 65 ? (m = -5) : null !== c.dtTop && a.pageY > c.dtTop + c.dtHeight - 65 && (m = 5);
          null !== c.dtLeft && a.pageX < c.dtLeft + 65 ? (p = -5) : null !== c.dtLeft && a.pageX > c.dtLeft + c.dtWidth - 65 && (p = 5);
          k || l || m || p ? ((c.windowVert = k), (c.windowHoriz = l), (c.dtVert = m), (c.dtHoriz = p), (g = !0)) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), (this.s.scrollInterval = null));
          !this.s.scrollInterval &&
              g &&
              (this.s.scrollInterval = setInterval(function () {
                  c.windowVert && (e.body.scrollTop += c.windowVert);
                  c.windowHoriz && (e.body.scrollLeft += c.windowHoriz);
                  if (c.dtVert || c.dtHoriz) {
                      var a = b.dom.dtScroll[0];
                      c.dtVert && (a.scrollTop += c.dtVert);
                      c.dtHoriz && (a.scrollLeft += c.dtHoriz);
                  }
              }, 20));
      },
      _update: function (a, b) {
          if (!1 !== a) {
              a = this.s.dt;
              var c = a.columns(this.c.columns).indexes();
              this._emitEvent("preAutoFill", [a, b]);
              this._editor(b);
              if (null !== this.c.update ? this.c.update : !this.c.editor) {
                  for (var d = 0, h = b.length; d < h; d++)
                      for (var e = 0, f = b[d].length; e < f; e++) {
                          var k = b[d][e];
                          -1 !== c.indexOf(k.index.column) && k.cell.data(k.set);
                      }
                  a.draw(!1);
              }
              this._emitEvent("autoFill", [a, b]);
          }
      },
  });
  l.actions = {
      increment: {
          available: function (a, b) {
              a = b[0][0].label;
              return !isNaN(a - parseFloat(a));
          },
          option: function (a, b) {
              return a.i18n("autoFill.increment", 'Increment / decrement each cell by: <input type="number" value="1">');
          },
          execute: function (a, d, c) {
              a = 1 * d[0][0].data;
              c = 1 * b("input", c).val();
              for (var g = 0, e = d.length; g < e; g++) for (var f = 0, k = d[g].length; f < k; f++) (d[g][f].set = a), (a += c);
          },
      },
      fill: {
          available: function (a, b) {
              return !0;
          },
          option: function (a, b) {
              return a.i18n("autoFill.fill", "Fill all cells with <i>" + b[0][0].label + "</i>");
          },
          execute: function (a, b, c) {
              a = b[0][0].data;
              c = 0;
              for (var d = b.length; c < d; c++) for (var e = 0, f = b[c].length; e < f; e++) b[c][e].set = a;
          },
      },
      fillHorizontal: {
          available: function (a, b) {
              return 1 < b.length && 1 < b[0].length;
          },
          option: function (a, b) {
              return a.i18n("autoFill.fillHorizontal", "Fill cells horizontally");
          },
          execute: function (a, b, c) {
              a = 0;
              for (c = b.length; a < c; a++) for (var d = 0, e = b[a].length; d < e; d++) b[a][d].set = b[a][0].data;
          },
      },
      fillVertical: {
          available: function (a, b) {
              return 1 < b.length;
          },
          option: function (a, b) {
              return a.i18n("autoFill.fillVertical", "Fill cells vertically");
          },
          execute: function (a, b, c) {
              a = 0;
              for (c = b.length; a < c; a++) for (var d = 0, e = b[a].length; d < e; d++) b[a][d].set = b[0][d].data;
          },
      },
      cancel: {
          available: function () {
              return !1;
          },
          option: function (a) {
              return a.i18n("autoFill.cancel", "Cancel");
          },
          execute: function () {
              return !1;
          },
      },
  };
  l.version = "2.3.5";
  l.defaults = { alwaysAsk: !1, focus: null, columns: "", enable: !0, update: null, editor: null, vertical: !0, horizontal: !0 };
  l.classes = { btn: "btn" };
  var t = b.fn.dataTable.Api;
  t.register("autoFill()", function () {
      return this;
  });
  t.register("autoFill().enabled()", function () {
      var a = this.context[0];
      return a.autoFill ? a.autoFill.enabled() : !1;
  });
  t.register("autoFill().enable()", function (a) {
      return this.iterator("table", function (b) {
          b.autoFill && b.autoFill.enable(a);
      });
  });
  t.register("autoFill().disable()", function () {
      return this.iterator("table", function (a) {
          a.autoFill && a.autoFill.disable();
      });
  });
  b(e).on("preInit.dt.autofill", function (a, d, c) {
      "dt" === a.namespace && ((a = d.oInit.autoFill), (c = k.defaults.autoFill), a || c) && ((c = b.extend({}, a, c)), !1 !== a && new l(d, c));
  });
  k.AutoFill = l;
  return (k.AutoFill = l);
});

/*!
Bootstrap integration for DataTables' AutoFill
©2015 SpryMedia Ltd - datatables.net/license
*/
(function (b) {
  "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net-bs4", "datatables.net-autofill"], function (a) {
            return b(a, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (a, c) {
            a || (a = window);
            (c && c.fn.dataTable) || (c = require("datatables.net-bs4")(a, c).$);
            c.fn.dataTable.AutoFill || require("datatables.net-autofill")(a, c);
            return b(c, a, a.document);
        })
      : b(jQuery, window, document);
})(function (b, a, c, d) {
  b = b.fn.dataTable;
  b.AutoFill.classes.btn = "btn btn-primary";
  return b;
});

/*!
 Copyright 2010-2019 SpryMedia Ltd.

This source file is free software, available under the following license:
 MIT license - http://datatables.net/license/mit

This source file is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

For details please refer to: http://www.datatables.net
ColReorder 1.5.2
©2010-2019 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
  "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (t) {
            return d(t, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (t, r) {
            t || (t = window);
            (r && r.fn.dataTable) || (r = require("datatables.net")(t, r).$);
            return d(r, t, t.document);
        })
      : d(jQuery, window, document);
})(function (d, t, r, w) {
  function v(a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) b[a[c]] = c;
      return b;
  }
  function u(a, b, c) {
      b = a.splice(b, 1)[0];
      a.splice(c, 0, b);
  }
  function x(a, b, c) {
      for (var d = [], h = 0, f = a.childNodes.length; h < f; h++) 1 == a.childNodes[h].nodeType && d.push(a.childNodes[h]);
      b = d[b];
      null !== c ? a.insertBefore(b, d[c]) : a.appendChild(b);
  }
  var y = d.fn.dataTable;
  d.fn.dataTableExt.oApi.fnColReorder = function (a, b, c, g, h) {
      var f,
          p,
          n = a.aoColumns.length;
      var q = function (a, b, c) {
          if (a[b] && "function" !== typeof a[b]) {
              var e = a[b].split("."),
                  d = e.shift();
              isNaN(1 * d) || (a[b] = c[1 * d] + "." + e.join("."));
          }
      };
      if (b != c)
          if (0 > b || b >= n) this.oApi._fnLog(a, 1, "ColReorder 'from' index is out of bounds: " + b);
          else if (0 > c || c >= n) this.oApi._fnLog(a, 1, "ColReorder 'to' index is out of bounds: " + c);
          else {
              var l = [];
              var e = 0;
              for (f = n; e < f; e++) l[e] = e;
              u(l, b, c);
              var k = v(l);
              e = 0;
              for (f = a.aaSorting.length; e < f; e++) a.aaSorting[e][0] = k[a.aaSorting[e][0]];
              if (null !== a.aaSortingFixed) for (e = 0, f = a.aaSortingFixed.length; e < f; e++) a.aaSortingFixed[e][0] = k[a.aaSortingFixed[e][0]];
              e = 0;
              for (f = n; e < f; e++) {
                  var m = a.aoColumns[e];
                  l = 0;
                  for (p = m.aDataSort.length; l < p; l++) m.aDataSort[l] = k[m.aDataSort[l]];
                  m.idx = k[m.idx];
              }
              d.each(a.aLastSort, function (b, c) {
                  a.aLastSort[b].src = k[c.src];
              });
              e = 0;
              for (f = n; e < f; e++) (m = a.aoColumns[e]), "number" == typeof m.mData ? (m.mData = k[m.mData]) : d.isPlainObject(m.mData) && (q(m.mData, "_", k), q(m.mData, "filter", k), q(m.mData, "sort", k), q(m.mData, "type", k));
              if (a.aoColumns[b].bVisible) {
                  q = this.oApi._fnColumnIndexToVisible(a, b);
                  p = null;
                  for (e = c < b ? c : c + 1; null === p && e < n; ) (p = this.oApi._fnColumnIndexToVisible(a, e)), e++;
                  l = a.nTHead.getElementsByTagName("tr");
                  e = 0;
                  for (f = l.length; e < f; e++) x(l[e], q, p);
                  if (null !== a.nTFoot) for (l = a.nTFoot.getElementsByTagName("tr"), e = 0, f = l.length; e < f; e++) x(l[e], q, p);
                  e = 0;
                  for (f = a.aoData.length; e < f; e++) null !== a.aoData[e].nTr && x(a.aoData[e].nTr, q, p);
              }
              u(a.aoColumns, b, c);
              e = 0;
              for (f = n; e < f; e++) a.oApi._fnColumnOptions(a, e, {});
              u(a.aoPreSearchCols, b, c);
              e = 0;
              for (f = a.aoData.length; e < f; e++) {
                  p = a.aoData[e];
                  if ((m = p.anCells)) for (u(m, b, c), l = 0, q = m.length; l < q; l++) m[l] && m[l]._DT_CellIndex && (m[l]._DT_CellIndex.column = l);
                  "dom" !== p.src && d.isArray(p._aData) && u(p._aData, b, c);
              }
              e = 0;
              for (f = a.aoHeader.length; e < f; e++) u(a.aoHeader[e], b, c);
              if (null !== a.aoFooter) for (e = 0, f = a.aoFooter.length; e < f; e++) u(a.aoFooter[e], b, c);
              (h || h === w) && d.fn.dataTable.Api(a).rows().invalidate();
              e = 0;
              for (f = n; e < f; e++) d(a.aoColumns[e].nTh).off(".DT"), this.oApi._fnSortAttachListener(a, a.aoColumns[e].nTh, e);
              d(a.oInstance).trigger("column-reorder.dt", [a, { from: b, to: c, mapping: k, drop: g, iFrom: b, iTo: c, aiInvertMapping: k }]);
          }
  };
  var k = function (a, b) {
      a = new d.fn.dataTable.Api(a).settings()[0];
      if (a._colReorder) return a._colReorder;
      !0 === b && (b = {});
      var c = d.fn.dataTable.camelToHungarian;
      c && (c(k.defaults, k.defaults, !0), c(k.defaults, b || {}));
      this.s = {
          dt: null,
          enable: null,
          init: d.extend(!0, {}, k.defaults, b),
          fixed: 0,
          fixedRight: 0,
          reorderCallback: null,
          mouse: { startX: -1, startY: -1, offsetX: -1, offsetY: -1, target: -1, targetIndex: -1, fromIndex: -1 },
          aoTargets: [],
      };
      this.dom = { drag: null, pointer: null };
      this.s.enable = this.s.init.bEnable;
      this.s.dt = a;
      this.s.dt._colReorder = this;
      this._fnConstruct();
      return this;
  };
  d.extend(k.prototype, {
      fnEnable: function (a) {
          if (!1 === a) return fnDisable();
          this.s.enable = !0;
      },
      fnDisable: function () {
          this.s.enable = !1;
      },
      fnReset: function () {
          this._fnOrderColumns(this.fnOrder());
          return this;
      },
      fnGetCurrentOrder: function () {
          return this.fnOrder();
      },
      fnOrder: function (a, b) {
          var c = [],
              g,
              h = this.s.dt.aoColumns;
          if (a === w) {
              b = 0;
              for (g = h.length; b < g; b++) c.push(h[b]._ColReorder_iOrigCol);
              return c;
          }
          if (b) {
              h = this.fnOrder();
              b = 0;
              for (g = a.length; b < g; b++) c.push(d.inArray(a[b], h));
              a = c;
          }
          this._fnOrderColumns(v(a));
          return this;
      },
      fnTranspose: function (a, b) {
          b || (b = "toCurrent");
          var c = this.fnOrder(),
              g = this.s.dt.aoColumns;
          return "toCurrent" === b
              ? d.isArray(a)
                  ? d.map(a, function (a) {
                        return d.inArray(a, c);
                    })
                  : d.inArray(a, c)
              : d.isArray(a)
              ? d.map(a, function (a) {
                    return g[a]._ColReorder_iOrigCol;
                })
              : g[a]._ColReorder_iOrigCol;
      },
      _fnConstruct: function () {
          var a = this,
              b = this.s.dt.aoColumns.length,
              c = this.s.dt.nTable,
              g;
          this.s.init.iFixedColumns && (this.s.fixed = this.s.init.iFixedColumns);
          this.s.init.iFixedColumnsLeft && (this.s.fixed = this.s.init.iFixedColumnsLeft);
          this.s.fixedRight = this.s.init.iFixedColumnsRight ? this.s.init.iFixedColumnsRight : 0;
          this.s.init.fnReorderCallback && (this.s.reorderCallback = this.s.init.fnReorderCallback);
          for (g = 0; g < b; g++) g > this.s.fixed - 1 && g < b - this.s.fixedRight && this._fnMouseListener(g, this.s.dt.aoColumns[g].nTh), (this.s.dt.aoColumns[g]._ColReorder_iOrigCol = g);
          this.s.dt.oApi._fnCallbackReg(
              this.s.dt,
              "aoStateSaveParams",
              function (b, c) {
                  a._fnStateSave.call(a, c);
              },
              "ColReorder_State"
          );
          var h = null;
          this.s.init.aiOrder && (h = this.s.init.aiOrder.slice());
          this.s.dt.oLoadedState && "undefined" != typeof this.s.dt.oLoadedState.ColReorder && this.s.dt.oLoadedState.ColReorder.length == this.s.dt.aoColumns.length && (h = this.s.dt.oLoadedState.ColReorder);
          if (h)
              if (a.s.dt._bInitComplete) (b = v(h)), a._fnOrderColumns.call(a, b);
              else {
                  var f = !1;
                  d(c).on("draw.dt.colReorder", function () {
                      if (!a.s.dt._bInitComplete && !f) {
                          f = !0;
                          var b = v(h);
                          a._fnOrderColumns.call(a, b);
                      }
                  });
              }
          else this._fnSetColumnIndexes();
          d(c).on("destroy.dt.colReorder", function () {
              d(c).off("destroy.dt.colReorder draw.dt.colReorder");
              d.each(a.s.dt.aoColumns, function (a, b) {
                  d(b.nTh).off(".ColReorder");
                  d(b.nTh).removeAttr("data-column-index");
              });
              a.s.dt._colReorder = null;
              a.s = null;
          });
      },
      _fnOrderColumns: function (a) {
          var b = !1;
          if (a.length != this.s.dt.aoColumns.length) this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "ColReorder - array reorder does not match known number of columns. Skipping.");
          else {
              for (var c = 0, g = a.length; c < g; c++) {
                  var h = d.inArray(c, a);
                  c != h && (u(a, h, c), this.s.dt.oInstance.fnColReorder(h, c, !0, !1), (b = !0));
              }
              this._fnSetColumnIndexes();
              b &&
                  (d.fn.dataTable.Api(this.s.dt).rows().invalidate(),
                  ("" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY) || this.s.dt.oInstance.fnAdjustColumnSizing(!1),
                  this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),
                  null !== this.s.reorderCallback && this.s.reorderCallback.call(this));
          }
      },
      _fnStateSave: function (a) {
          var b,
              c,
              g = this.s.dt.aoColumns;
          a.ColReorder = [];
          if (a.aaSorting) {
              for (b = 0; b < a.aaSorting.length; b++) a.aaSorting[b][0] = g[a.aaSorting[b][0]]._ColReorder_iOrigCol;
              var h = d.extend(!0, [], a.aoSearchCols);
              b = 0;
              for (c = g.length; b < c; b++) {
                  var f = g[b]._ColReorder_iOrigCol;
                  a.aoSearchCols[f] = h[b];
                  a.abVisCols[f] = g[b].bVisible;
                  a.ColReorder.push(f);
              }
          } else if (a.order) {
              for (b = 0; b < a.order.length; b++) a.order[b][0] = g[a.order[b][0]]._ColReorder_iOrigCol;
              h = d.extend(!0, [], a.columns);
              b = 0;
              for (c = g.length; b < c; b++) (f = g[b]._ColReorder_iOrigCol), (a.columns[f] = h[b]), a.ColReorder.push(f);
          }
      },
      _fnMouseListener: function (a, b) {
          var c = this;
          d(b)
              .on("mousedown.ColReorder", function (a) {
                  c.s.enable && 1 === a.which && c._fnMouseDown.call(c, a, b);
              })
              .on("touchstart.ColReorder", function (a) {
                  c.s.enable && c._fnMouseDown.call(c, a, b);
              });
      },
      _fnMouseDown: function (a, b) {
          var c = this,
              g = d(a.target).closest("th, td").offset();
          b = parseInt(d(b).attr("data-column-index"), 10);
          b !== w &&
              ((this.s.mouse.startX = this._fnCursorPosition(a, "pageX")),
              (this.s.mouse.startY = this._fnCursorPosition(a, "pageY")),
              (this.s.mouse.offsetX = this._fnCursorPosition(a, "pageX") - g.left),
              (this.s.mouse.offsetY = this._fnCursorPosition(a, "pageY") - g.top),
              (this.s.mouse.target = this.s.dt.aoColumns[b].nTh),
              (this.s.mouse.targetIndex = b),
              (this.s.mouse.fromIndex = b),
              this._fnRegions(),
              d(r)
                  .on("mousemove.ColReorder touchmove.ColReorder", function (a) {
                      c._fnMouseMove.call(c, a);
                  })
                  .on("mouseup.ColReorder touchend.ColReorder", function (a) {
                      c._fnMouseUp.call(c, a);
                  }));
      },
      _fnMouseMove: function (a) {
          var b = this;
          if (null === this.dom.drag) {
              if (5 > Math.pow(Math.pow(this._fnCursorPosition(a, "pageX") - this.s.mouse.startX, 2) + Math.pow(this._fnCursorPosition(a, "pageY") - this.s.mouse.startY, 2), 0.5)) return;
              this._fnCreateDragNode();
          }
          this.dom.drag.css({ left: this._fnCursorPosition(a, "pageX") - this.s.mouse.offsetX, top: this._fnCursorPosition(a, "pageY") - this.s.mouse.offsetY });
          var c = this.s.mouse.toIndex;
          a = this._fnCursorPosition(a, "pageX");
          for (
              var d = function (a) {
                      for (; 0 <= a; ) {
                          a--;
                          if (0 >= a) return null;
                          if (b.s.aoTargets[a + 1].x !== b.s.aoTargets[a].x) return b.s.aoTargets[a];
                      }
                  },
                  h = function () {
                      for (var a = 0; a < b.s.aoTargets.length - 1; a++) if (b.s.aoTargets[a].x !== b.s.aoTargets[a + 1].x) return b.s.aoTargets[a];
                  },
                  f = function () {
                      for (var a = b.s.aoTargets.length - 1; 0 < a; a--) if (b.s.aoTargets[a].x !== b.s.aoTargets[a - 1].x) return b.s.aoTargets[a];
                  },
                  k = 1;
              k < this.s.aoTargets.length;
              k++
          ) {
              var n = d(k);
              n || (n = h());
              var q = n.x + (this.s.aoTargets[k].x - n.x) / 2;
              if (this._fnIsLtr()) {
                  if (a < q) {
                      var l = n;
                      break;
                  }
              } else if (a > q) {
                  l = n;
                  break;
              }
          }
          l ? (this.dom.pointer.css("left", l.x), (this.s.mouse.toIndex = l.to)) : (this.dom.pointer.css("left", f().x), (this.s.mouse.toIndex = f().to));
          this.s.init.bRealtime &&
              c !== this.s.mouse.toIndex &&
              (this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex),
              (this.s.mouse.fromIndex = this.s.mouse.toIndex),
              ("" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY) || this.s.dt.oInstance.fnAdjustColumnSizing(!1),
              this._fnRegions());
      },
      _fnMouseUp: function (a) {
          d(r).off(".ColReorder");
          null !== this.dom.drag &&
              (this.dom.drag.remove(),
              this.dom.pointer.remove(),
              (this.dom.drag = null),
              (this.dom.pointer = null),
              this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex, !0),
              this._fnSetColumnIndexes(),
              ("" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY) || this.s.dt.oInstance.fnAdjustColumnSizing(!1),
              this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),
              null !== this.s.reorderCallback && this.s.reorderCallback.call(this));
      },
      _fnRegions: function () {
          var a = this.s.dt.aoColumns,
              b = this._fnIsLtr();
          this.s.aoTargets.splice(0, this.s.aoTargets.length);
          var c = d(this.s.dt.nTable).offset().left,
              g = [];
          d.each(a, function (a, f) {
              if (f.bVisible && "none" !== f.nTh.style.display) {
                  f = d(f.nTh);
                  var h = f.offset().left;
                  b && (h += f.outerWidth());
                  g.push({ index: a, bound: h });
                  c = h;
              } else g.push({ index: a, bound: c });
          });
          var h = g[0];
          a = d(a[h.index].nTh).outerWidth();
          this.s.aoTargets.push({ to: 0, x: h.bound - a });
          for (h = 0; h < g.length; h++) {
              a = g[h];
              var f = a.index;
              a.index < this.s.mouse.fromIndex && f++;
              this.s.aoTargets.push({ to: f, x: a.bound });
          }
          0 !== this.s.fixedRight && this.s.aoTargets.splice(this.s.aoTargets.length - this.s.fixedRight);
          0 !== this.s.fixed && this.s.aoTargets.splice(0, this.s.fixed);
      },
      _fnCreateDragNode: function () {
          var a = "" !== this.s.dt.oScroll.sX || "" !== this.s.dt.oScroll.sY,
              b = this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,
              c = b.parentNode,
              g = c.parentNode,
              h = g.parentNode,
              f = d(b).clone();
          this.dom.drag = d(h.cloneNode(!1))
              .addClass("DTCR_clonedTable")
              .append(d(g.cloneNode(!1)).append(d(c.cloneNode(!1)).append(f[0])))
              .css({ position: "absolute", top: 0, left: 0, width: d(b).outerWidth(), height: d(b).outerHeight() })
              .appendTo("body");
          this.dom.pointer = d("<div></div>")
              .addClass("DTCR_pointer")
              .css({
                  position: "absolute",
                  top: a ? d("div.dataTables_scroll", this.s.dt.nTableWrapper).offset().top : d(this.s.dt.nTable).offset().top,
                  height: a ? d("div.dataTables_scroll", this.s.dt.nTableWrapper).height() : d(this.s.dt.nTable).height(),
              })
              .appendTo("body");
      },
      _fnSetColumnIndexes: function () {
          d.each(this.s.dt.aoColumns, function (a, b) {
              d(b.nTh).attr("data-column-index", a);
          });
      },
      _fnCursorPosition: function (a, b) {
          return -1 !== a.type.indexOf("touch") ? a.originalEvent.touches[0][b] : a[b];
      },
      _fnIsLtr: function () {
          return "rtl" !== d(this.s.dt.nTable).css("direction");
      },
  });
  k.defaults = { aiOrder: null, bEnable: !0, bRealtime: !0, iFixedColumnsLeft: 0, iFixedColumnsRight: 0, fnReorderCallback: null };
  k.version = "1.5.2";
  d.fn.dataTable.ColReorder = k;
  d.fn.DataTable.ColReorder = k;
  "function" == typeof d.fn.dataTable && "function" == typeof d.fn.dataTableExt.fnVersionCheck && d.fn.dataTableExt.fnVersionCheck("1.10.8")
      ? d.fn.dataTableExt.aoFeatures.push({
            fnInit: function (a) {
                var b = a.oInstance;
                a._colReorder ? b.oApi._fnLog(a, 1, "ColReorder attempted to initialise twice. Ignoring second") : ((b = a.oInit), new k(a, b.colReorder || b.oColReorder || {}));
                return null;
            },
            cFeature: "R",
            sFeature: "ColReorder",
        })
      : alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download");
  d(r).on("preInit.dt.colReorder", function (a, b) {
      if ("dt" === a.namespace) {
          a = b.oInit.colReorder;
          var c = y.defaults.colReorder;
          if (a || c) (c = d.extend({}, a, c)), !1 !== a && new k(b, c);
      }
  });
  d.fn.dataTable.Api.register("colReorder.reset()", function () {
      return this.iterator("table", function (a) {
          a._colReorder.fnReset();
      });
  });
  d.fn.dataTable.Api.register("colReorder.order()", function (a, b) {
      return a
          ? this.iterator("table", function (c) {
                c._colReorder.fnOrder(a, b);
            })
          : this.context.length
          ? this.context[0]._colReorder.fnOrder()
          : null;
  });
  d.fn.dataTable.Api.register("colReorder.transpose()", function (a, b) {
      return this.context.length && this.context[0]._colReorder ? this.context[0]._colReorder.fnTranspose(a, b) : a;
  });
  d.fn.dataTable.Api.register("colReorder.move()", function (a, b, c, d) {
      this.context.length && (this.context[0]._colReorder.s.dt.oInstance.fnColReorder(a, b, c, d), this.context[0]._colReorder._fnSetColumnIndexes());
      return this;
  });
  d.fn.dataTable.Api.register("colReorder.enable()", function (a) {
      return this.iterator("table", function (b) {
          b._colReorder && b._colReorder.fnEnable(a);
      });
  });
  d.fn.dataTable.Api.register("colReorder.disable()", function () {
      return this.iterator("table", function (a) {
          a._colReorder && a._colReorder.fnDisable();
      });
  });
  return k;
});

/*!
 Copyright 2014-2020 SpryMedia Ltd.

This source file is free software, available under the following license:
 MIT license - http://datatables.net/license/mit

This source file is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

For details please refer to: http://www.datatables.net
Responsive 2.2.5
2014-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, k, g) {
  a instanceof String && (a = String(a));
  for (var n = a.length, p = 0; p < n; p++) {
      var v = a[p];
      if (k.call(g, v, p, a)) return { i: p, v: v };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, k, g) {
            a != Array.prototype && a != Object.prototype && (a[k] = g.value);
        };
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
  for (var k = 0; k < a.length; ++k) {
      var g = a[k];
      if (g && g.Math == Math) return g;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, k, g, n) {
  if (k) {
      g = $jscomp.global;
      a = a.split(".");
      for (n = 0; n < a.length - 1; n++) {
          var p = a[n];
          p in g || (g[p] = {});
          g = g[p];
      }
      a = a[a.length - 1];
      n = g[a];
      k = k(n);
      k != n && null != k && $jscomp.defineProperty(g, a, { configurable: !0, writable: !0, value: k });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
      return a
          ? a
          : function (a, g) {
                return $jscomp.findInternal(this, a, g).v;
            };
  },
  "es6",
  "es3"
);
(function (a) {
  "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (k) {
            return a(k, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (k, g) {
            k || (k = window);
            (g && g.fn.dataTable) || (g = require("datatables.net")(k, g).$);
            return a(g, k, k.document);
        })
      : a(jQuery, window, document);
})(function (a, k, g, n) {
  function p(b, a, c) {
      var d = a + "-" + c;
      if (q[d]) return q[d];
      var f = [];
      b = b.cell(a, c).node().childNodes;
      a = 0;
      for (c = b.length; a < c; a++) f.push(b[a]);
      return (q[d] = f);
  }
  function v(b, a, c) {
      var d = a + "-" + c;
      if (q[d]) {
          b = b.cell(a, c).node();
          c = q[d][0].parentNode.childNodes;
          a = [];
          for (var f = 0, l = c.length; f < l; f++) a.push(c[f]);
          c = 0;
          for (f = a.length; c < f; c++) b.appendChild(a[c]);
          q[d] = n;
      }
  }
  var t = a.fn.dataTable,
      m = function (b, d) {
          if (!t.versionCheck || !t.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer";
          this.s = { dt: new t.Api(b), columns: [], current: [] };
          this.s.dt.settings()[0].responsive ||
              (d && "string" === typeof d.details ? (d.details = { type: d.details }) : d && !1 === d.details ? (d.details = { type: !1 }) : d && !0 === d.details && (d.details = { type: "inline" }),
              (this.c = a.extend(!0, {}, m.defaults, t.defaults.responsive, d)),
              (b.responsive = this),
              this._constructor());
      };
  a.extend(m.prototype, {
      _constructor: function () {
          var b = this,
              d = this.s.dt,
              c = d.settings()[0],
              e = a(k).innerWidth();
          d.settings()[0]._responsive = this;
          a(k).on(
              "resize.dtr orientationchange.dtr",
              t.util.throttle(function () {
                  var d = a(k).innerWidth();
                  d !== e && (b._resize(), (e = d));
              })
          );
          c.oApi._fnCallbackReg(c, "aoRowCreatedCallback", function (c, e, r) {
              -1 !== a.inArray(!1, b.s.current) &&
                  a(">td, >th", c).each(function (c) {
                      c = d.column.index("toData", c);
                      !1 === b.s.current[c] && a(this).css("display", "none");
                  });
          });
          d.on("destroy.dtr", function () {
              d.off(".dtr");
              a(d.table().body()).off(".dtr");
              a(k).off("resize.dtr orientationchange.dtr");
              d.cells(".dtr-control").nodes().to$().removeClass("dtr-control");
              a.each(b.s.current, function (a, d) {
                  !1 === d && b._setColumnVis(a, !0);
              });
          });
          this.c.breakpoints.sort(function (b, a) {
              return b.width < a.width ? 1 : b.width > a.width ? -1 : 0;
          });
          this._classLogic();
          this._resizeAuto();
          c = this.c.details;
          !1 !== c.type &&
              (b._detailsInit(),
              d.on("column-visibility.dtr", function () {
                  b._timer && clearTimeout(b._timer);
                  b._timer = setTimeout(function () {
                      b._timer = null;
                      b._classLogic();
                      b._resizeAuto();
                      b._resize();
                      b._redrawChildren();
                  }, 100);
              }),
              d.on("draw.dtr", function () {
                  b._redrawChildren();
              }),
              a(d.table().node()).addClass("dtr-" + c.type));
          d.on("column-reorder.dtr", function (a, d, c) {
              b._classLogic();
              b._resizeAuto();
              b._resize(!0);
          });
          d.on("column-sizing.dtr", function () {
              b._resizeAuto();
              b._resize();
          });
          d.on("preXhr.dtr", function () {
              var a = [];
              d.rows().every(function () {
                  this.child.isShown() && a.push(this.id(!0));
              });
              d.one("draw.dtr", function () {
                  b._resizeAuto();
                  b._resize();
                  d.rows(a).every(function () {
                      b._detailsDisplay(this, !1);
                  });
              });
          });
          d.on("draw.dtr", function () {
              b._controlClass();
          }).on("init.dtr", function (c, e, r) {
              "dt" === c.namespace && (b._resizeAuto(), b._resize(), a.inArray(!1, b.s.current) && d.columns.adjust());
          });
          this._resize();
      },
      _columnsVisiblity: function (b) {
          var d = this.s.dt,
              c = this.s.columns,
              e,
              f = c
                  .map(function (a, b) {
                      return { columnIdx: b, priority: a.priority };
                  })
                  .sort(function (a, b) {
                      return a.priority !== b.priority ? a.priority - b.priority : a.columnIdx - b.columnIdx;
                  }),
              l = a.map(c, function (c, h) {
                  return !1 === d.column(h).visible() ? "not-visible" : c.auto && null === c.minWidth ? !1 : !0 === c.auto ? "-" : -1 !== a.inArray(b, c.includeIn);
              }),
              r = 0;
          var h = 0;
          for (e = l.length; h < e; h++) !0 === l[h] && (r += c[h].minWidth);
          h = d.settings()[0].oScroll;
          h = h.sY || h.sX ? h.iBarWidth : 0;
          r = d.table().container().offsetWidth - h - r;
          h = 0;
          for (e = l.length; h < e; h++) c[h].control && (r -= c[h].minWidth);
          var k = !1;
          h = 0;
          for (e = f.length; h < e; h++) {
              var g = f[h].columnIdx;
              "-" === l[g] && !c[g].control && c[g].minWidth && (k || 0 > r - c[g].minWidth ? ((k = !0), (l[g] = !1)) : (l[g] = !0), (r -= c[g].minWidth));
          }
          f = !1;
          h = 0;
          for (e = c.length; h < e; h++)
              if (!c[h].control && !c[h].never && !1 === l[h]) {
                  f = !0;
                  break;
              }
          h = 0;
          for (e = c.length; h < e; h++) c[h].control && (l[h] = f), "not-visible" === l[h] && (l[h] = !1);
          -1 === a.inArray(!0, l) && (l[0] = !0);
          return l;
      },
      _classLogic: function () {
          var b = this,
              d = this.c.breakpoints,
              c = this.s.dt,
              e = c
                  .columns()
                  .eq(0)
                  .map(function (a) {
                      var b = this.column(a),
                          d = b.header().className;
                      a = c.settings()[0].aoColumns[a].responsivePriority;
                      b = b.header().getAttribute("data-priority");
                      a === n && (a = b === n || null === b ? 1e4 : 1 * b);
                      return { className: d, includeIn: [], auto: !1, control: !1, never: d.match(/\bnever\b/) ? !0 : !1, priority: a };
                  }),
              f = function (b, d) {
                  b = e[b].includeIn;
                  -1 === a.inArray(d, b) && b.push(d);
              },
              g = function (a, c, g, l) {
                  if (!g) e[a].includeIn.push(c);
                  else if ("max-" === g) for (l = b._find(c).width, c = 0, g = d.length; c < g; c++) d[c].width <= l && f(a, d[c].name);
                  else if ("min-" === g) for (l = b._find(c).width, c = 0, g = d.length; c < g; c++) d[c].width >= l && f(a, d[c].name);
                  else if ("not-" === g) for (c = 0, g = d.length; c < g; c++) -1 === d[c].name.indexOf(l) && f(a, d[c].name);
              };
          e.each(function (b, c) {
              for (var e = b.className.split(" "), f = !1, h = 0, l = e.length; h < l; h++) {
                  var k = a.trim(e[h]);
                  if ("all" === k) {
                      f = !0;
                      b.includeIn = a.map(d, function (b) {
                          return b.name;
                      });
                      return;
                  }
                  if ("none" === k || b.never) {
                      f = !0;
                      return;
                  }
                  if ("control" === k) {
                      f = !0;
                      b.control = !0;
                      return;
                  }
                  a.each(d, function (b, a) {
                      b = a.name.split("-");
                      var d = k.match(new RegExp("(min\\-|max\\-|not\\-)?(" + b[0] + ")(\\-[_a-zA-Z0-9])?"));
                      d && ((f = !0), d[2] === b[0] && d[3] === "-" + b[1] ? g(c, a.name, d[1], d[2] + d[3]) : d[2] !== b[0] || d[3] || g(c, a.name, d[1], d[2]));
                  });
              }
              f || (b.auto = !0);
          });
          this.s.columns = e;
      },
      _controlClass: function () {
          if ("inline" === this.c.details.type) {
              var b = this.s.dt,
                  d = a.inArray(!0, this.s.current);
              b.cells(
                  null,
                  function (b) {
                      return b !== d;
                  },
                  { page: "current" }
              )
                  .nodes()
                  .to$()
                  .filter(".dtr-control")
                  .removeClass("dtr-control");
              b.cells(null, d, { page: "current" }).nodes().to$().addClass("dtr-control");
          }
      },
      _detailsDisplay: function (b, d) {
          var c = this,
              e = this.s.dt,
              f = this.c.details;
          if (f && !1 !== f.type) {
              var g = f.display(b, d, function () {
                  return f.renderer(e, b[0], c._detailsObj(b[0]));
              });
              (!0 !== g && !1 !== g) || a(e.table().node()).triggerHandler("responsive-display.dt", [e, b, g, d]);
          }
      },
      _detailsInit: function () {
          var b = this,
              d = this.s.dt,
              c = this.c.details;
          "inline" === c.type && (c.target = "td.dtr-control, th.dtr-control");
          d.on("draw.dtr", function () {
              b._tabIndexes();
          });
          b._tabIndexes();
          a(d.table().body()).on("keyup.dtr", "td, th", function (b) {
              13 === b.keyCode && a(this).data("dtr-keyboard") && a(this).click();
          });
          var e = c.target;
          c = "string" === typeof e ? e : "td, th";
          if (e !== n || null !== e)
              a(d.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", c, function (c) {
                  if (a(d.table().node()).hasClass("collapsed") && -1 !== a.inArray(a(this).closest("tr").get(0), d.rows().nodes().toArray())) {
                      if ("number" === typeof e) {
                          var f = 0 > e ? d.columns().eq(0).length + e : e;
                          if (d.cell(this).index().column !== f) return;
                      }
                      f = d.row(a(this).closest("tr"));
                      "click" === c.type ? b._detailsDisplay(f, !1) : "mousedown" === c.type ? a(this).css("outline", "none") : "mouseup" === c.type && a(this).trigger("blur").css("outline", "");
                  }
              });
      },
      _detailsObj: function (b) {
          var d = this,
              c = this.s.dt;
          return a.map(this.s.columns, function (e, f) {
              if (!e.never && !e.control)
                  return (
                      (e = c.settings()[0].aoColumns[f]),
                      { className: e.sClass, columnIndex: f, data: c.cell(b, f).render(d.c.orthogonal), hidden: c.column(f).visible() && !d.s.current[f], rowIndex: b, title: null !== e.sTitle ? e.sTitle : a(c.column(f).header()).text() }
                  );
          });
      },
      _find: function (b) {
          for (var a = this.c.breakpoints, c = 0, e = a.length; c < e; c++) if (a[c].name === b) return a[c];
      },
      _redrawChildren: function () {
          var b = this,
              a = this.s.dt;
          a.rows({ page: "current" }).iterator("row", function (c, d) {
              a.row(d);
              b._detailsDisplay(a.row(d), !0);
          });
      },
      _resize: function (b) {
          var d = this,
              c = this.s.dt,
              e = a(k).innerWidth(),
              f = this.c.breakpoints,
              g = f[0].name,
              r = this.s.columns,
              h,
              n = this.s.current.slice();
          for (h = f.length - 1; 0 <= h; h--)
              if (e <= f[h].width) {
                  g = f[h].name;
                  break;
              }
          var m = this._columnsVisiblity(g);
          this.s.current = m;
          f = !1;
          h = 0;
          for (e = r.length; h < e; h++)
              if (!1 === m[h] && !r[h].never && !r[h].control && !1 === !c.column(h).visible()) {
                  f = !0;
                  break;
              }
          a(c.table().node()).toggleClass("collapsed", f);
          var p = !1,
              q = 0;
          c.columns()
              .eq(0)
              .each(function (a, c) {
                  !0 === m[c] && q++;
                  if (b || m[c] !== n[c]) (p = !0), d._setColumnVis(a, m[c]);
              });
          p && (this._redrawChildren(), a(c.table().node()).trigger("responsive-resize.dt", [c, this.s.current]), 0 === c.page.info().recordsDisplay && a("td", c.table().body()).eq(0).attr("colspan", q));
      },
      _resizeAuto: function () {
          var b = this.s.dt,
              d = this.s.columns;
          if (
              this.c.auto &&
              -1 !==
                  a.inArray(
                      !0,
                      a.map(d, function (b) {
                          return b.auto;
                      })
                  )
          ) {
              a.isEmptyObject(q) ||
                  a.each(q, function (a) {
                      a = a.split("-");
                      v(b, 1 * a[0], 1 * a[1]);
                  });
              b.table().node();
              var c = b.table().node().cloneNode(!1),
                  e = a(b.table().header().cloneNode(!1)).appendTo(c),
                  f = a(b.table().body()).clone(!1, !1).empty().appendTo(c);
              c.style.width = "auto";
              var g = b
                  .columns()
                  .header()
                  .filter(function (a) {
                      return b.column(a).visible();
                  })
                  .to$()
                  .clone(!1)
                  .css("display", "table-cell")
                  .css("width", "auto")
                  .css("min-width", 0);
              a(f)
                  .append(a(b.rows({ page: "current" }).nodes()).clone(!1))
                  .find("th, td")
                  .css("display", "");
              if ((f = b.table().footer())) {
                  f = a(f.cloneNode(!1)).appendTo(c);
                  var k = b
                      .columns()
                      .footer()
                      .filter(function (a) {
                          return b.column(a).visible();
                      })
                      .to$()
                      .clone(!1)
                      .css("display", "table-cell");
                  a("<tr/>").append(k).appendTo(f);
              }
              a("<tr/>").append(g).appendTo(e);
              "inline" === this.c.details.type && a(c).addClass("dtr-inline collapsed");
              a(c).find("[name]").removeAttr("name");
              a(c).css("position", "relative");
              c = a("<div/>").css({ width: 1, height: 1, overflow: "hidden", clear: "both" }).append(c);
              c.insertBefore(b.table().node());
              g.each(function (a) {
                  a = b.column.index("fromVisible", a);
                  d[a].minWidth = this.offsetWidth || 0;
              });
              c.remove();
          }
      },
      _responsiveOnlyHidden: function () {
          var b = this.s.dt;
          return a.map(this.s.current, function (a, c) {
              return !1 === b.column(c).visible() ? !0 : a;
          });
      },
      _setColumnVis: function (b, d) {
          var c = this.s.dt;
          d = d ? "" : "none";
          a(c.column(b).header()).css("display", d);
          a(c.column(b).footer()).css("display", d);
          c.column(b).nodes().to$().css("display", d);
          a.isEmptyObject(q) ||
              c
                  .cells(null, b)
                  .indexes()
                  .each(function (a) {
                      v(c, a.row, a.column);
                  });
      },
      _tabIndexes: function () {
          var b = this.s.dt,
              d = b.cells({ page: "current" }).nodes().to$(),
              c = b.settings()[0],
              e = this.c.details.target;
          d.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
          "number" === typeof e
              ? b.cells(null, e, { page: "current" }).nodes().to$().attr("tabIndex", c.iTabIndex).data("dtr-keyboard", 1)
              : ("td:first-child, th:first-child" === e && (e = ">td:first-child, >th:first-child"),
                a(e, b.rows({ page: "current" }).nodes())
                    .attr("tabIndex", c.iTabIndex)
                    .data("dtr-keyboard", 1));
      },
  });
  m.breakpoints = [
      { name: "desktop", width: Infinity },
      { name: "tablet-l", width: 1024 },
      { name: "tablet-p", width: 768 },
      { name: "mobile-l", width: 480 },
      { name: "mobile-p", width: 320 },
  ];
  m.display = {
      childRow: function (b, d, c) {
          if (d) {
              if (a(b.node()).hasClass("parent")) return b.child(c(), "child").show(), !0;
          } else {
              if (b.child.isShown()) return b.child(!1), a(b.node()).removeClass("parent"), !1;
              b.child(c(), "child").show();
              a(b.node()).addClass("parent");
              return !0;
          }
      },
      childRowImmediate: function (b, d, c) {
          if ((!d && b.child.isShown()) || !b.responsive.hasHidden()) return b.child(!1), a(b.node()).removeClass("parent"), !1;
          b.child(c(), "child").show();
          a(b.node()).addClass("parent");
          return !0;
      },
      modal: function (b) {
          return function (d, c, e) {
              if (c) a("div.dtr-modal-content").empty().append(e());
              else {
                  var f = function () {
                          k.remove();
                          a(g).off("keypress.dtr");
                      },
                      k = a('<div class="dtr-modal"/>')
                          .append(
                              a('<div class="dtr-modal-display"/>')
                                  .append(a('<div class="dtr-modal-content"/>').append(e()))
                                  .append(
                                      a('<div class="dtr-modal-close">&times;</div>').click(function () {
                                          f();
                                      })
                                  )
                          )
                          .append(
                              a('<div class="dtr-modal-background"/>').click(function () {
                                  f();
                              })
                          )
                          .appendTo("body");
                  a(g).on("keyup.dtr", function (a) {
                      27 === a.keyCode && (a.stopPropagation(), f());
                  });
              }
              b && b.header && a("div.dtr-modal-content").prepend("<h2>" + b.header(d) + "</h2>");
          };
      },
  };
  var q = {};
  m.renderer = {
      listHiddenNodes: function () {
          return function (b, d, c) {
              var e = a('<ul data-dtr-index="' + d + '" class="dtr-details"/>'),
                  f = !1;
              a.each(c, function (c, d) {
                  d.hidden &&
                      (a(
                          "<li " +
                              (d.className ? 'class="' + d.className + '"' : "") +
                              ' data-dtr-index="' +
                              d.columnIndex +
                              '" data-dt-row="' +
                              d.rowIndex +
                              '" data-dt-column="' +
                              d.columnIndex +
                              '"><span class="dtr-title">' +
                              d.title +
                              "</span> </li>"
                      )
                          .append(a('<span class="dtr-data"/>').append(p(b, d.rowIndex, d.columnIndex)))
                          .appendTo(e),
                      (f = !0));
              });
              return f ? e : !1;
          };
      },
      listHidden: function () {
          return function (b, d, c) {
              return (b = a
                  .map(c, function (a) {
                      var b = a.className ? 'class="' + a.className + '"' : "";
                      return a.hidden
                          ? "<li " +
                                b +
                                ' data-dtr-index="' +
                                a.columnIndex +
                                '" data-dt-row="' +
                                a.rowIndex +
                                '" data-dt-column="' +
                                a.columnIndex +
                                '"><span class="dtr-title">' +
                                a.title +
                                '</span> <span class="dtr-data">' +
                                a.data +
                                "</span></li>"
                          : "";
                  })
                  .join(""))
                  ? a('<ul data-dtr-index="' + d + '" class="dtr-details"/>').append(b)
                  : !1;
          };
      },
      tableAll: function (b) {
          b = a.extend({ tableClass: "" }, b);
          return function (d, c, e) {
              d = a
                  .map(e, function (a) {
                      return "<tr " + (a.className ? 'class="' + a.className + '"' : "") + ' data-dt-row="' + a.rowIndex + '" data-dt-column="' + a.columnIndex + '"><td>' + a.title + ":</td> <td>" + a.data + "</td></tr>";
                  })
                  .join("");
              return a('<table class="' + b.tableClass + ' dtr-details" width="100%"/>').append(d);
          };
      },
  };
  m.defaults = { breakpoints: m.breakpoints, auto: !0, details: { display: m.display.childRow, renderer: m.renderer.listHidden(), target: 0, type: "inline" }, orthogonal: "display" };
  var u = a.fn.dataTable.Api;
  u.register("responsive()", function () {
      return this;
  });
  u.register("responsive.index()", function (b) {
      b = a(b);
      return { column: b.data("dtr-index"), row: b.parent().data("dtr-index") };
  });
  u.register("responsive.rebuild()", function () {
      return this.iterator("table", function (a) {
          a._responsive && a._responsive._classLogic();
      });
  });
  u.register("responsive.recalc()", function () {
      return this.iterator("table", function (a) {
          a._responsive && (a._responsive._resizeAuto(), a._responsive._resize());
      });
  });
  u.register("responsive.hasHidden()", function () {
      var b = this.context[0];
      return b._responsive ? -1 !== a.inArray(!1, b._responsive._responsiveOnlyHidden()) : !1;
  });
  u.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () {
      return this.iterator(
          "column",
          function (a, d) {
              return a._responsive ? a._responsive._responsiveOnlyHidden()[d] : !1;
          },
          1
      );
  });
  m.version = "2.2.5";
  a.fn.dataTable.Responsive = m;
  a.fn.DataTable.Responsive = m;
  a(g).on("preInit.dt.dtr", function (b, d, c) {
      "dt" === b.namespace && (a(d.nTable).hasClass("responsive") || a(d.nTable).hasClass("dt-responsive") || d.oInit.responsive || t.defaults.responsive) && ((b = d.oInit.responsive), !1 !== b && new m(d, a.isPlainObject(b) ? b : {}));
  });
  return m;
});

/*!
Bootstrap 4 integration for DataTables' Responsive
©2016 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, c, b) {
  a instanceof String && (a = String(a));
  for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      if (c.call(b, f, e, a)) return { i: e, v: f };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, c, b) {
            a != Array.prototype && a != Object.prototype && (a[c] = b.value);
        };
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
  for (var c = 0; c < a.length; ++c) {
      var b = a[c];
      if (b && b.Math == Math) return b;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, c, b, d) {
  if (c) {
      b = $jscomp.global;
      a = a.split(".");
      for (d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in b || (b[e] = {});
          b = b[e];
      }
      a = a[a.length - 1];
      d = b[a];
      c = c(d);
      c != d && null != c && $jscomp.defineProperty(b, a, { configurable: !0, writable: !0, value: c });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (a) {
      return a
          ? a
          : function (a, b) {
                return $jscomp.findInternal(this, a, b).v;
            };
  },
  "es6",
  "es3"
);
(function (a) {
  "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net-bs4", "datatables.net-responsive"], function (c) {
            return a(c, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (c, b) {
            c || (c = window);
            (b && b.fn.dataTable) || (b = require("datatables.net-bs4")(c, b).$);
            b.fn.dataTable.Responsive || require("datatables.net-responsive")(c, b);
            return a(b, c, c.document);
        })
      : a(jQuery, window, document);
})(function (a, c, b, d) {
  c = a.fn.dataTable;
  b = c.Responsive.display;
  var e = b.modal,
      f = a(
          '<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>'
      );
  b.modal = function (b) {
      return function (c, d, g) {
          if (!a.fn.modal) e(c, d, g);
          else if (!d) {
              if (b && b.header) {
                  d = f.find("div.modal-header");
                  var h = d.find("button").detach();
                  d.empty()
                      .append('<h4 class="modal-title">' + b.header(c) + "</h4>")
                      .append(h);
              }
              f.find("div.modal-body").empty().append(g());
              f.appendTo("body").modal();
          }
      };
  };
  return c.Responsive;
});

/*!
 Copyright 2011-2020 SpryMedia Ltd.

This source file is free software, available under the following license:
 MIT license - http://datatables.net/license/mit

This source file is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

For details please refer to: http://www.datatables.net
Scroller 2.0.2
©2011-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (c, e, g) {
  c instanceof String && (c = String(c));
  for (var k = c.length, l = 0; l < k; l++) {
      var h = c[l];
      if (e.call(g, h, l, c)) return { i: l, v: h };
  }
  return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (c, e, g) {
            c != Array.prototype && c != Object.prototype && (c[e] = g.value);
        };
$jscomp.getGlobal = function (c) {
  c = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, c];
  for (var e = 0; e < c.length; ++e) {
      var g = c[e];
      if (g && g.Math == Math) return g;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (c, e, g, k) {
  if (e) {
      g = $jscomp.global;
      c = c.split(".");
      for (k = 0; k < c.length - 1; k++) {
          var l = c[k];
          l in g || (g[l] = {});
          g = g[l];
      }
      c = c[c.length - 1];
      k = g[c];
      e = e(k);
      e != k && null != e && $jscomp.defineProperty(g, c, { configurable: !0, writable: !0, value: e });
  }
};
$jscomp.polyfill(
  "Array.prototype.find",
  function (c) {
      return c
          ? c
          : function (c, g) {
                return $jscomp.findInternal(this, c, g).v;
            };
  },
  "es6",
  "es3"
);
(function (c) {
  "function" === typeof define && define.amd
      ? define(["jquery", "datatables.net"], function (e) {
            return c(e, window, document);
        })
      : "object" === typeof exports
      ? (module.exports = function (e, g) {
            e || (e = window);
            (g && g.fn.dataTable) || (g = require("datatables.net")(e, g).$);
            return c(g, e, e.document);
        })
      : c(jQuery, window, document);
})(function (c, e, g, k) {
  var l = c.fn.dataTable,
      h = function (a, b) {
          this instanceof h
              ? (b === k && (b = {}),
                (a = c.fn.dataTable.Api(a)),
                (this.s = {
                    dt: a.settings()[0],
                    dtApi: a,
                    tableTop: 0,
                    tableBottom: 0,
                    redrawTop: 0,
                    redrawBottom: 0,
                    autoHeight: !0,
                    viewportRows: 0,
                    stateTO: null,
                    stateSaveThrottle: function () {},
                    drawTO: null,
                    heights: { jump: null, page: null, virtual: null, scroll: null, row: null, viewport: null, labelFactor: 1 },
                    topRowFloat: 0,
                    scrollDrawDiff: null,
                    loaderVisible: !1,
                    forceReposition: !1,
                    baseRowTop: 0,
                    baseScrollTop: 0,
                    mousedown: !1,
                    lastScrollTop: 0,
                }),
                (this.s = c.extend(this.s, h.oDefaults, b)),
                (this.s.heights.row = this.s.rowHeight),
                (this.dom = { force: g.createElement("div"), label: c('<div class="dts_label">0</div>'), scroller: null, table: null, loader: null }),
                this.s.dt.oScroller || ((this.s.dt.oScroller = this), this.construct()))
              : alert("Scroller warning: Scroller must be initialised with the 'new' keyword.");
      };
  c.extend(h.prototype, {
      measure: function (a) {
          this.s.autoHeight && this._calcRowHeight();
          var b = this.s.heights;
          b.row && ((b.viewport = this._parseHeight(c(this.dom.scroller).css("max-height"))), (this.s.viewportRows = parseInt(b.viewport / b.row, 10) + 1), (this.s.dt._iDisplayLength = this.s.viewportRows * this.s.displayBuffer));
          var d = this.dom.label.outerHeight();
          b.labelFactor = (b.viewport - d) / b.scroll;
          (a === k || a) && this.s.dt.oInstance.fnDraw(!1);
      },
      pageInfo: function () {
          var a = this.dom.scroller.scrollTop,
              b = this.s.dt.fnRecordsDisplay(),
              d = Math.ceil(this.pixelsToRow(a + this.s.heights.viewport, !1, this.s.ani));
          return { start: Math.floor(this.pixelsToRow(a, !1, this.s.ani)), end: b < d ? b - 1 : d - 1 };
      },
      pixelsToRow: function (a, b, d) {
          a -= this.s.baseScrollTop;
          d = d ? (this._domain("physicalToVirtual", this.s.baseScrollTop) + a) / this.s.heights.row : a / this.s.heights.row + this.s.baseRowTop;
          return b || b === k ? parseInt(d, 10) : d;
      },
      rowToPixels: function (a, b, d) {
          a -= this.s.baseRowTop;
          d = d ? this._domain("virtualToPhysical", this.s.baseScrollTop) : this.s.baseScrollTop;
          d += a * this.s.heights.row;
          return b || b === k ? parseInt(d, 10) : d;
      },
      scrollToRow: function (a, b) {
          var d = this,
              f = !1,
              e = this.rowToPixels(a),
              g = a - ((this.s.displayBuffer - 1) / 2) * this.s.viewportRows;
          0 > g && (g = 0);
          (e > this.s.redrawBottom || e < this.s.redrawTop) &&
              this.s.dt._iDisplayStart !== g &&
              ((f = !0), (e = this._domain("virtualToPhysical", a * this.s.heights.row)), this.s.redrawTop < e && e < this.s.redrawBottom && ((this.s.forceReposition = !0), (b = !1)));
          b === k || b
              ? ((this.s.ani = f),
                c(this.dom.scroller).animate({ scrollTop: e }, function () {
                    setTimeout(function () {
                        d.s.ani = !1;
                    }, 250);
                }))
              : c(this.dom.scroller).scrollTop(e);
      },
      construct: function () {
          var a = this,
              b = this.s.dtApi;
          if (this.s.dt.oFeatures.bPaginate) {
              this.dom.force.style.position = "relative";
              this.dom.force.style.top = "0px";
              this.dom.force.style.left = "0px";
              this.dom.force.style.width = "1px";
              this.dom.scroller = c("div." + this.s.dt.oClasses.sScrollBody, this.s.dt.nTableWrapper)[0];
              this.dom.scroller.appendChild(this.dom.force);
              this.dom.scroller.style.position = "relative";
              this.dom.table = c(">table", this.dom.scroller)[0];
              this.dom.table.style.position = "absolute";
              this.dom.table.style.top = "0px";
              this.dom.table.style.left = "0px";
              c(b.table().container()).addClass("dts DTS");
              this.s.loadingIndicator &&
                  ((this.dom.loader = c('<div class="dataTables_processing dts_loading">' + this.s.dt.oLanguage.sLoadingRecords + "</div>").css("display", "none")),
                  c(this.dom.scroller.parentNode).css("position", "relative").append(this.dom.loader));
              this.dom.label.appendTo(this.dom.scroller);
              this.s.heights.row && "auto" != this.s.heights.row && (this.s.autoHeight = !1);
              this.s.ingnoreScroll = !0;
              c(this.dom.scroller).on("scroll.dt-scroller", function (b) {
                  a._scroll.call(a);
              });
              c(this.dom.scroller).on("touchstart.dt-scroller", function () {
                  a._scroll.call(a);
              });
              c(this.dom.scroller)
                  .on("mousedown.dt-scroller", function () {
                      a.s.mousedown = !0;
                  })
                  .on("mouseup.dt-scroller", function () {
                      a.s.labelVisible = !1;
                      a.s.mousedown = !1;
                      a.dom.label.css("display", "none");
                  });
              c(e).on("resize.dt-scroller", function () {
                  a.measure(!1);
                  a._info();
              });
              var d = !0,
                  f = b.state.loaded();
              b.on("stateSaveParams.scroller", function (b, c, e) {
                  d ? ((e.scroller = f.scroller), (d = !1)) : (e.scroller = { topRow: a.s.topRowFloat, baseScrollTop: a.s.baseScrollTop, baseRowTop: a.s.baseRowTop, scrollTop: a.s.lastScrollTop });
              });
              f && f.scroller && ((this.s.topRowFloat = f.scroller.topRow), (this.s.baseScrollTop = f.scroller.baseScrollTop), (this.s.baseRowTop = f.scroller.baseRowTop));
              this.measure(!1);
              a.s.stateSaveThrottle = a.s.dt.oApi._fnThrottle(function () {
                  a.s.dtApi.state.save();
              }, 500);
              b.on("init.scroller", function () {
                  a.measure(!1);
                  a.s.scrollType = "jump";
                  a._draw();
                  b.on("draw.scroller", function () {
                      a._draw();
                  });
              });
              b.on("preDraw.dt.scroller", function () {
                  a._scrollForce();
              });
              b.on("destroy.scroller", function () {
                  c(e).off("resize.dt-scroller");
                  c(a.dom.scroller).off(".dt-scroller");
                  c(a.s.dt.nTable).off(".scroller");
                  c(a.s.dt.nTableWrapper).removeClass("DTS");
                  c("div.DTS_Loading", a.dom.scroller.parentNode).remove();
                  a.dom.table.style.position = "";
                  a.dom.table.style.top = "";
                  a.dom.table.style.left = "";
              });
          } else this.s.dt.oApi._fnLog(this.s.dt, 0, "Pagination must be enabled for Scroller");
      },
      _calcRowHeight: function () {
          var a = this.s.dt,
              b = a.nTable,
              d = b.cloneNode(!1),
              f = c("<tbody/>").appendTo(d),
              e = c('<div class="' + a.oClasses.sWrapper + ' DTS"><div class="' + a.oClasses.sScrollWrapper + '"><div class="' + a.oClasses.sScrollBody + '"></div></div></div>');
          c("tbody tr:lt(4)", b).clone().appendTo(f);
          var g = c("tr", f).length;
          if (1 === g) f.prepend("<tr><td>&#160;</td></tr>"), f.append("<tr><td>&#160;</td></tr>");
          else for (; 3 > g; g++) f.append("<tr><td>&#160;</td></tr>");
          c("div." + a.oClasses.sScrollBody, e).append(d);
          a = this.s.dt.nHolding || b.parentNode;
          c(a).is(":visible") || (a = "body");
          e.find("input").removeAttr("name");
          e.appendTo(a);
          this.s.heights.row = c("tr", f).eq(1).outerHeight();
          e.remove();
      },
      _draw: function () {
          var a = this,
              b = this.s.heights,
              d = this.dom.scroller.scrollTop,
              f = c(this.s.dt.nTable).height(),
              e = this.s.dt._iDisplayStart,
              g = this.s.dt._iDisplayLength,
              k = this.s.dt.fnRecordsDisplay();
          this.s.skip = !0;
          (!this.s.dt.bSorted && !this.s.dt.bFiltered) || 0 !== e || this.s.dt._drawHold || (this.s.topRowFloat = 0);
          d = "jump" === this.s.scrollType ? this._domain("virtualToPhysical", this.s.topRowFloat * b.row) : d;
          this.s.baseScrollTop = d;
          this.s.baseRowTop = this.s.topRowFloat;
          var h = d - (this.s.topRowFloat - e) * b.row;
          0 === e ? (h = 0) : e + g >= k && (h = b.scroll - f);
          this.dom.table.style.top = h + "px";
          this.s.tableTop = h;
          this.s.tableBottom = f + this.s.tableTop;
          f = (d - this.s.tableTop) * this.s.boundaryScale;
          this.s.redrawTop = d - f;
          this.s.redrawBottom = d + f > b.scroll - b.viewport - b.row ? b.scroll - b.viewport - b.row : d + f;
          this.s.skip = !1;
          this.s.dt.oFeatures.bStateSave && null !== this.s.dt.oLoadedState && "undefined" != typeof this.s.dt.oLoadedState.scroller
              ? (((b = (!this.s.dt.sAjaxSource && !a.s.dt.ajax) || this.s.dt.oFeatures.bServerSide ? !1 : !0) && 2 == this.s.dt.iDraw) || (!b && 1 == this.s.dt.iDraw)) &&
                setTimeout(function () {
                    c(a.dom.scroller).scrollTop(a.s.dt.oLoadedState.scroller.scrollTop);
                    setTimeout(function () {
                        a.s.ingnoreScroll = !1;
                    }, 0);
                }, 0)
              : (a.s.ingnoreScroll = !1);
          this.s.dt.oFeatures.bInfo &&
              setTimeout(function () {
                  a._info.call(a);
              }, 0);
          this.dom.loader && this.s.loaderVisible && (this.dom.loader.css("display", "none"), (this.s.loaderVisible = !1));
      },
      _domain: function (a, b) {
          var d = this.s.heights;
          if (d.virtual === d.scroll || 1e4 > b) return b;
          if ("virtualToPhysical" === a && b >= d.virtual - 1e4) return (a = d.virtual - b), d.scroll - a;
          if ("physicalToVirtual" === a && b >= d.scroll - 1e4) return (a = d.scroll - b), d.virtual - a;
          d = (d.virtual - 1e4 - 1e4) / (d.scroll - 1e4 - 1e4);
          var c = 1e4 - 1e4 * d;
          return "virtualToPhysical" === a ? (b - c) / d : d * b + c;
      },
      _info: function () {
          if (this.s.dt.oFeatures.bInfo) {
              var a = this.s.dt,
                  b = a.oLanguage,
                  d = this.dom.scroller.scrollTop,
                  f = Math.floor(this.pixelsToRow(d, !1, this.s.ani) + 1),
                  e = a.fnRecordsTotal(),
                  g = a.fnRecordsDisplay();
              d = Math.ceil(this.pixelsToRow(d + this.s.heights.viewport, !1, this.s.ani));
              d = g < d ? g : d;
              var h = a.fnFormatNumber(f),
                  k = a.fnFormatNumber(d),
                  l = a.fnFormatNumber(e),
                  m = a.fnFormatNumber(g);
              h =
                  0 === a.fnRecordsDisplay() && a.fnRecordsDisplay() == a.fnRecordsTotal()
                      ? b.sInfoEmpty + b.sInfoPostFix
                      : 0 === a.fnRecordsDisplay()
                      ? b.sInfoEmpty + " " + b.sInfoFiltered.replace("_MAX_", l) + b.sInfoPostFix
                      : a.fnRecordsDisplay() == a.fnRecordsTotal()
                      ? b.sInfo.replace("_START_", h).replace("_END_", k).replace("_MAX_", l).replace("_TOTAL_", m) + b.sInfoPostFix
                      : b.sInfo.replace("_START_", h).replace("_END_", k).replace("_MAX_", l).replace("_TOTAL_", m) + " " + b.sInfoFiltered.replace("_MAX_", a.fnFormatNumber(a.fnRecordsTotal())) + b.sInfoPostFix;
              (b = b.fnInfoCallback) && (h = b.call(a.oInstance, a, f, d, e, g, h));
              f = a.aanFeatures.i;
              if ("undefined" != typeof f) for (e = 0, g = f.length; e < g; e++) c(f[e]).html(h);
              c(a.nTable).triggerHandler("info.dt");
          }
      },
      _parseHeight: function (a) {
          var b,
              d = /^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(px|em|rem|vh)$/.exec(a);
          if (null === d) return 0;
          a = parseFloat(d[1]);
          d = d[2];
          "px" === d ? (b = a) : "vh" === d ? (b = (a / 100) * c(e).height()) : "rem" === d ? (b = a * parseFloat(c(":root").css("font-size"))) : "em" === d && (b = a * parseFloat(c("body").css("font-size")));
          return b ? b : 0;
      },
      _scroll: function () {
          var a = this,
              b = this.s.heights,
              d = this.dom.scroller.scrollTop;
          if (!this.s.skip && !this.s.ingnoreScroll && d !== this.s.lastScrollTop)
              if (this.s.dt.bFiltered || this.s.dt.bSorted) this.s.lastScrollTop = 0;
              else {
                  this._info();
                  clearTimeout(this.s.stateTO);
                  this.s.stateTO = setTimeout(function () {
                      a.s.dtApi.state.save();
                  }, 250);
                  this.s.scrollType = Math.abs(d - this.s.lastScrollTop) > b.viewport ? "jump" : "cont";
                  this.s.topRowFloat = "cont" === this.s.scrollType ? this.pixelsToRow(d, !1, !1) : this._domain("physicalToVirtual", d) / b.row;
                  0 > this.s.topRowFloat && (this.s.topRowFloat = 0);
                  if (this.s.forceReposition || d < this.s.redrawTop || d > this.s.redrawBottom) {
                      var f = Math.ceil(((this.s.displayBuffer - 1) / 2) * this.s.viewportRows);
                      f = parseInt(this.s.topRowFloat, 10) - f;
                      this.s.forceReposition = !1;
                      0 >= f ? (f = 0) : f + this.s.dt._iDisplayLength > this.s.dt.fnRecordsDisplay() ? ((f = this.s.dt.fnRecordsDisplay() - this.s.dt._iDisplayLength), 0 > f && (f = 0)) : 0 !== f % 2 && f++;
                      this.s.targetTop = f;
                      f != this.s.dt._iDisplayStart &&
                          ((this.s.tableTop = c(this.s.dt.nTable).offset().top),
                          (this.s.tableBottom = c(this.s.dt.nTable).height() + this.s.tableTop),
                          (f = function () {
                              a.s.dt._iDisplayStart = a.s.targetTop;
                              a.s.dt.oApi._fnDraw(a.s.dt);
                          }),
                          this.s.dt.oFeatures.bServerSide ? ((this.s.forceReposition = !0), clearTimeout(this.s.drawTO), (this.s.drawTO = setTimeout(f, this.s.serverWait))) : f(),
                          this.dom.loader && !this.s.loaderVisible && (this.dom.loader.css("display", "block"), (this.s.loaderVisible = !0)));
                  } else this.s.topRowFloat = this.pixelsToRow(d, !1, !0);
                  this.s.lastScrollTop = d;
                  this.s.stateSaveThrottle();
                  "jump" === this.s.scrollType && this.s.mousedown && (this.s.labelVisible = !0);
                  this.s.labelVisible &&
                      this.dom.label
                          .html(this.s.dt.fnFormatNumber(parseInt(this.s.topRowFloat, 10) + 1))
                          .css("top", d + d * b.labelFactor)
                          .css("display", "block");
              }
      },
      _scrollForce: function () {
          var a = this.s.heights;
          a.virtual = a.row * this.s.dt.fnRecordsDisplay();
          a.scroll = a.virtual;
          1e6 < a.scroll && (a.scroll = 1e6);
          this.dom.force.style.height = a.scroll > this.s.heights.row ? a.scroll + "px" : this.s.heights.row + "px";
      },
  });
  h.defaults = { boundaryScale: 0.5, displayBuffer: 9, loadingIndicator: !1, rowHeight: "auto", serverWait: 200 };
  h.oDefaults = h.defaults;
  h.version = "2.0.2";
  c(g).on("preInit.dt.dtscroller", function (a, b) {
      if ("dt" === a.namespace) {
          a = b.oInit.scroller;
          var d = l.defaults.scroller;
          if (a || d) (d = c.extend({}, a, d)), !1 !== a && new h(b, d);
      }
  });
  c.fn.dataTable.Scroller = h;
  c.fn.DataTable.Scroller = h;
  var m = c.fn.dataTable.Api;
  m.register("scroller()", function () {
      return this;
  });
  m.register("scroller().rowToPixels()", function (a, b, d) {
      var c = this.context;
      if (c.length && c[0].oScroller) return c[0].oScroller.rowToPixels(a, b, d);
  });
  m.register("scroller().pixelsToRow()", function (a, b, d) {
      var c = this.context;
      if (c.length && c[0].oScroller) return c[0].oScroller.pixelsToRow(a, b, d);
  });
  m.register(["scroller().scrollToRow()", "scroller.toPosition()"], function (a, b) {
      this.iterator("table", function (d) {
          d.oScroller && d.oScroller.scrollToRow(a, b);
      });
      return this;
  });
  m.register("row().scrollTo()", function (a) {
      var b = this;
      this.iterator("row", function (d, c) {
          d.oScroller && ((c = b.rows({ order: "applied", search: "applied" }).indexes().indexOf(c)), d.oScroller.scrollToRow(c, a));
      });
      return this;
  });
  m.register("scroller.measure()", function (a) {
      this.iterator("table", function (b) {
          b.oScroller && b.oScroller.measure(a);
      });
      return this;
  });
  m.register("scroller.page()", function () {
      var a = this.context;
      if (a.length && a[0].oScroller) return a[0].oScroller.pageInfo();
  });
  return h;
});
