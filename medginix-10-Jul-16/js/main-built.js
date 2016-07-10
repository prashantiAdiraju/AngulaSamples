 /*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

/*!
 * VERSION: 1.14.1
 * DATE: 2014-10-16
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

/*!
 * VERSION: 1.14.1
 * DATE: 2014-10-16
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-18
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

/* ScrollMagic v1.3.0 | (c) 2014 Jan Paepke (@janpaepke) | license & info: http://janpaepke.github.io/ScrollMagic */

function version(t) {
    window.console && console.log(t)
}
function dbg(t) {
    window.console && console.log(t)
}
!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length, i = re.type(t);
        return "function" === i || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function n(t, e, i) {
        if (re.isFunction(e))
            return re.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
        if (e.nodeType)
            return re.grep(t, function(t) {
                return t === e !== i
            });
        if ("string" == typeof e) {
            if (fe.test(e))
                return re.filter(e, t, i);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return re.inArray(t, e) >= 0 !== i
        })
    }
    function r(t, e) {
        do
            t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function s(t) {
        var e = Te[t] = {};
        return re.each(t.match(ye) || [], function(t, i) {
            e[i] = !0
        }), e
    }
    function o() {
        de.addEventListener ? (de.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (de.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() {
        (de.addEventListener || "load" === event.type || "complete" === de.readyState) && (o(), re.ready())
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Se, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Pe.test(i) ? re.parseJSON(i) : i
                } catch (r) {
                }
                re.data(t, e, i)
            } else
                i = void 0
        }
        return i
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function h(t, e, i, n) {
        if (re.acceptData(t)) {
            var r, s, o = re.expando, a = t.nodeType, l = a ? re.cache : t, u = a ? t[o] : t[o] && o;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e)
                return u || (u = a ? t[o] = G.pop() || re.guid++ : o), l[u] || (l[u] = a ? {} : {toJSON: re.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)), s = l[u], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[re.camelCase(e)] = i), "string" == typeof e ? (r = s[e], null == r && (r = s[re.camelCase(e)])) : r = s, r
        }
    }
    function c(t, e, i) {
        if (re.acceptData(t)) {
            var n, r, s = t.nodeType, o = s ? re.cache : t, a = s ? t[re.expando] : re.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in n ? e = [e] : (e = re.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                    for (; r--; )
                        delete n[e[r]];
                    if (i ? !u(n) : !re.isEmptyObject(n))
                        return
                }
                (i || (delete o[a].data, u(o[a]))) && (s ? re.cleanData([t], !0) : ie.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }
    function f() {
        return !0
    }
    function p() {
        return !1
    }
    function d() {
        try {
            return de.activeElement
        } catch (t) {
        }
    }
    function m(t) {
        var e = Fe.split("|"), i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length; )
                i.createElement(e.pop());
        return i
    }
    function _(t, e) {
        var i, n, r = 0, s = typeof t.getElementsByTagName !== xe ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== xe ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], i = t.childNodes || t; null != (n = i[r]); r++)
                !e || re.nodeName(n, e) ? s.push(n) : re.merge(s, _(n, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], s) : s
    }
    function g(t) {
        Re.test(t.type) && (t.defaultChecked = t.checked)
    }
    function v(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function y(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }
    function T(t) {
        var e = Ye.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)
            re._data(i, "globalEval", !e || re._data(e[n], "globalEval"))
    }
    function b(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var i, n, r, s = re._data(t), o = re._data(e, s), a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, r = a[i].length; r > n; n++)
                        re.event.add(e, i, a[i][n])
            }
            o.data && (o.data = re.extend({}, o.data))
        }
    }
    function x(t, e) {
        var i, n, r;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (n in r.events)
                    re.removeEvent(e, n, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === i && e.text !== t.text ? (y(e).text = t.text, T(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Re.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }
    function P(e, i) {
        var n, r = re(i.createElement(e)).appendTo(i.body), s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : re.css(r[0], "display");
        return r.detach(), s
    }
    function S(t) {
        var e = de, i = Je[t];
        return i || (i = P(t, e), "none" !== i && i || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), i = P(t, e), Ze.detach()), Je[t] = i), i
    }
    function C(t, e) {
        return {get: function() {
                var i = t();
                return null != i ? i ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
            }}
    }
    function k(t, e) {
        if (e in t)
            return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = fi.length; r--; )
            if (e = fi[r] + i, e in t)
                return e;
        return n
    }
    function A(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++)
            n = t[o], n.style && (s[o] = re._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ae(n) && (s[o] = re._data(n, "olddisplay", S(n.nodeName)))) : (r = Ae(n), (i && "none" !== i || !r) && re._data(n, "olddisplay", r ? i : re.css(n, "display"))));
        for (o = 0; a > o; o++)
            n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }
    function D(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function R(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2)
            "margin" === i && (o += re.css(t, i + ke[s], !0, r)), n ? ("content" === i && (o -= re.css(t, "padding" + ke[s], !0, r)), "margin" !== i && (o -= re.css(t, "border" + ke[s] + "Width", !0, r))) : (o += re.css(t, "padding" + ke[s], !0, r), "padding" !== i && (o += re.css(t, "border" + ke[s] + "Width", !0, r)));
        return o
    }
    function E(t, e, i) {
        var n = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, s = ti(t), o = ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = ei(t, e, s), (0 > r || null == r) && (r = t.style[e]), ni.test(r))
                return r;
            n = o && (ie.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + R(t, e, i || (o ? "border" : "content"), n, s) + "px"
    }
    function O(t, e, i, n, r) {
        return new O.prototype.init(t, e, i, n, r)
    }
    function N() {
        return setTimeout(function() {
            pi = void 0
        }), pi = re.now()
    }
    function L(t, e) {
        var i, n = {height: t}, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)
            i = ke[r], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }
    function M(t, e, i) {
        for (var n, r = (yi[e] || []).concat(yi["*"]), s = 0, o = r.length; o > s; s++)
            if (n = r[s].call(i, e, t))
                return n
    }
    function F(t, e, i) {
        var n, r, s, o, a, l, u, h, c = this, f = {}, p = t.style, d = t.nodeType && Ae(t), m = re._data(t, "fxshow");
        i.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(t, "display"), h = "none" === u ? re._data(t, "olddisplay") || S(t.nodeName) : u, "inline" === h && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || c.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], mi.exec(r)) {
                if (delete e[n], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n])
                        continue;
                    d = !0
                }
                f[n] = m && m[n] || re.style(t, n)
            } else
                u = void 0;
        if (re.isEmptyObject(f))
            "inline" === ("none" === u ? S(t.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (d = m.hidden) : m = re._data(t, "fxshow", {}), s && (m.hidden = !d), d ? re(t).show() : c.done(function() {
                re(t).hide()
            }), c.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in f)
                    re.style(t, e, f[e])
            });
            for (n in f)
                o = M(d ? m[n] : 0, n, c), n in m || (m[n] = o.start, d && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function I(t, e) {
        var i, n, r, s, o;
        for (i in t)
            if (n = re.camelCase(i), r = e[n], s = t[i], re.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = re.cssHooks[n], o && "expand" in o) {
                s = o.expand(s), delete t[n];
                for (i in s)
                    i in t || (t[i] = s[i], e[i] = r)
            } else
                e[n] = r
    }
    function z(t, e, i) {
        var n, r, s = 0, o = vi.length, a = re.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = pi || N(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, s = 1 - n, o = 0, l = u.tweens.length; l > o; o++)
                u.tweens[o].run(s);
            return a.notifyWith(t, [u, s, i]), 1 > s && l ? i : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({elem: t,props: re.extend({}, e),opts: re.extend(!0, {specialEasing: {}}, i),originalProperties: e,originalOptions: i,startTime: pi || N(),duration: i.duration,tweens: [],createTween: function(e, i) {
                var n = re.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n
            },stop: function(e) {
                var i = 0, n = e ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n > i; i++)
                    u.tweens[i].run(1);
                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
            }}), h = u.props;
        for (I(h, u.opts.specialEasing); o > s; s++)
            if (n = vi[s].call(u, t, h, u.opts))
                return n;
        return re.map(h, M, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {elem: t,anim: u,queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function j(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0, s = e.toLowerCase().match(ye) || [];
            if (re.isFunction(i))
                for (; n = s[r++]; )
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function B(t, e, i, n) {
        function r(a) {
            var l;
            return s[a] = !0, re.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {}, o = t === Wi;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }
    function q(t, e) {
        var i, n, r = re.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && re.extend(!0, t, i), t
    }
    function H(t, e, i) {
        for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (o in a)
                if (a[o] && a[o].test(r)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i)
            s = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                n || (n = o)
            }
            s = s || n
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }
    function W(t, e, i, n) {
        var r, s, o, a, l, u = {}, h = t.dataTypes.slice();
        if (h[1])
            for (o in t.converters)
                u[o.toLowerCase()] = t.converters[o];
        for (s = h.shift(); s; )
            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                if ("*" === s)
                    s = l;
                else if ("*" !== l && l !== s) {
                    if (o = u[l + " " + s] || u["* " + s], !o)
                        for (r in u)
                            if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], h.unshift(a[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && t["throws"])
                            e = o(e);
                        else
                            try {
                                e = o(e)
                            } catch (c) {
                                return {state: "parsererror",error: o ? c : "No conversion from " + l + " to " + s}
                            }
                }
        return {state: "success",data: e}
    }
    function X(t, e, i, n) {
        var r;
        if (re.isArray(e))
            re.each(e, function(e, r) {
                i || Yi.test(t) ? n(t, r) : X(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
            });
        else if (i || "object" !== re.type(e))
            n(t, e);
        else
            for (r in e)
                X(t + "[" + r + "]", e[r], i, n)
    }
    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }
    function $() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }
    function Y(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var G = [], V = G.slice, Q = G.concat, K = G.push, Z = G.indexOf, J = {}, te = J.toString, ee = J.hasOwnProperty, ie = {}, ne = "1.11.1", re = function(t, e) {
        return new re.fn.init(t, e)
    }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oe = /^-ms-/, ae = /-([\da-z])/gi, le = function(t, e) {
        return e.toUpperCase()
    };
    re.fn = re.prototype = {jquery: ne,constructor: re,selector: "",length: 0,toArray: function() {
            return V.call(this)
        },get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
        },pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },each: function(t, e) {
            return re.each(this, t, e)
        },map: function(t) {
            return this.pushStack(re.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },slice: function() {
            return this.pushStack(V.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(t) {
            var e = this.length, i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: K,sort: G.sort,splice: G.splice}, re.extend = re.fn.extend = function() {
        var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || re.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (n in r)
                    t = o[n], i = r[n], o !== i && (u && i && (re.isPlainObject(i) || (e = re.isArray(i))) ? (e ? (e = !1, s = t && re.isArray(t) ? t : []) : s = t && re.isPlainObject(t) ? t : {}, o[n] = re.extend(u, s, i)) : void 0 !== i && (o[n] = i));
        return o
    }, re.extend({expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(t) {
            throw new Error(t)
        },noop: function() {
        },isFunction: function(t) {
            return "function" === re.type(t)
        },isArray: Array.isArray || function(t) {
            return "array" === re.type(t)
        },isWindow: function(t) {
            return null != t && t == t.window
        },isNumeric: function(t) {
            return !re.isArray(t) && t - parseFloat(t) >= 0
        },isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (e in t)
                    return ee.call(t, e);
            for (e in t)
                ;
            return void 0 === e || ee.call(t, e)
        },type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[te.call(t)] || "object" : typeof t
        },globalEval: function(e) {
            e && re.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },camelCase: function(t) {
            return t.replace(oe, "ms-").replace(ae, le)
        },nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },each: function(t, e, n) {
            var r, s = 0, o = t.length, a = i(t);
            if (n) {
                if (a)
                    for (; o > s && (r = e.apply(t[s], n), r !== !1); s++)
                        ;
                else
                    for (s in t)
                        if (r = e.apply(t[s], n), r === !1)
                            break
            } else if (a)
                for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++)
                    ;
            else
                for (s in t)
                    if (r = e.call(t[s], s, t[s]), r === !1)
                        break;
            return t
        },trim: function(t) {
            return null == t ? "" : (t + "").replace(se, "")
        },makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? re.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
        },inArray: function(t, e, i) {
            var n;
            if (e) {
                if (Z)
                    return Z.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t)
                        return i
            }
            return -1
        },merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n; )
                t[r++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n]; )
                    t[r++] = e[n++];
            return t.length = r, t
        },grep: function(t, e, i) {
            for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++)
                n = !e(t[s], s), n !== a && r.push(t[s]);
            return r
        },map: function(t, e, n) {
            var r, s = 0, o = t.length, a = i(t), l = [];
            if (a)
                for (; o > s; s++)
                    r = e(t[s], s, n), null != r && l.push(r);
            else
                for (s in t)
                    r = e(t[s], s, n), null != r && l.push(r);
            return Q.apply([], l)
        },guid: 1,proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (i = V.call(arguments, 2), n = function() {
                return t.apply(e || this, i.concat(V.call(arguments)))
            }, n.guid = t.guid = t.guid || re.guid++, n) : void 0
        },now: function() {
            return +new Date
        },support: ie}), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        J["[object " + e + "]"] = e.toLowerCase()
    });
    var ue = function(t) {
        function e(t, e, i, n) {
            var r, s, o, a, l, u, c, p, d, m;
            if ((e ? e.ownerDocument || e : B) !== O && E(e), e = e || O, i = i || [], !t || "string" != typeof t)
                return i;
            if (1 !== (a = e.nodeType) && 9 !== a)
                return [];
            if (L && !n) {
                if (r = ve.exec(t))
                    if (o = r[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(o), !s || !s.parentNode)
                                return i;
                            if (s.id === o)
                                return i.push(s), i
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && z(e, s) && s.id === o)
                            return i.push(s), i
                    } else {
                        if (r[2])
                            return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = r[3]) && w.getElementsByClassName && e.getElementsByClassName)
                            return J.apply(i, e.getElementsByClassName(o)), i
                    }
                if (w.qsa && (!M || !M.test(t))) {
                    if (p = c = j, d = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = S(t), (c = e.getAttribute("id")) ? p = c.replace(Te, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--; )
                            u[l] = p + f(u[l]);
                        d = ye.test(t) && h(e.parentNode) || e, m = u.join(",")
                    }
                    if (m)
                        try {
                            return J.apply(i, d.querySelectorAll(m)), i
                        } catch (_) {
                        }finally {
                            c || e.removeAttribute("id")
                        }
                }
            }
            return k(t.replace(le, "$1"), e, i, n)
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > b.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }
        function n(t) {
            return t[j] = !0, t
        }
        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            }finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }
        function s(t, e) {
            for (var i = t.split("|"), n = t.length; n--; )
                b.attrHandle[i[n]] = e
        }
        function o(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var r, s = t([], i.length, e), o = s.length; o--; )
                        i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }
        function h(t) {
            return t && typeof t.getElementsByTagName !== Y && t
        }
        function c() {
        }
        function f(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++)
                n += t[e].value;
            return n
        }
        function p(t, e, i) {
            var n = e.dir, r = i && "parentNode" === n, s = H++;
            return e.first ? function(e, i, s) {
                for (; e = e[n]; )
                    if (1 === e.nodeType || r)
                        return t(e, i, s)
            } : function(e, i, o) {
                var a, l, u = [q, s];
                if (o) {
                    for (; e = e[n]; )
                        if ((1 === e.nodeType || r) && t(e, i, o))
                            return !0
                } else
                    for (; e = e[n]; )
                        if (1 === e.nodeType || r) {
                            if (l = e[j] || (e[j] = {}), (a = l[n]) && a[0] === q && a[1] === s)
                                return u[2] = a[2];
                            if (l[n] = u, u[2] = t(e, i, o))
                                return !0
                        }
            }
        }
        function d(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--; )
                    if (!t[r](e, i, n))
                        return !1;
                return !0
            } : t[0]
        }
        function m(t, i, n) {
            for (var r = 0, s = i.length; s > r; r++)
                e(t, i[r], n);
            return n
        }
        function _(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)
                (s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
            return o
        }
        function g(t, e, i, r, s, o) {
            return r && !r[j] && (r = g(r)), s && !s[j] && (s = g(s, o)), n(function(n, o, a, l) {
                var u, h, c, f = [], p = [], d = o.length, g = n || m(e || "*", a.nodeType ? [a] : a, []), v = !t || !n && e ? g : _(g, f, t, a, l), y = i ? s || (n ? t : d || r) ? [] : o : v;
                if (i && i(v, y, a, l), r)
                    for (u = _(y, p), r(u, [], a, l), h = u.length; h--; )
                        (c = u[h]) && (y[p[h]] = !(v[p[h]] = c));
                if (n) {
                    if (s || t) {
                        if (s) {
                            for (u = [], h = y.length; h--; )
                                (c = y[h]) && u.push(v[h] = c);
                            s(null, y = [], u, l)
                        }
                        for (h = y.length; h--; )
                            (c = y[h]) && (u = s ? ee.call(n, c) : f[h]) > -1 && (n[u] = !(o[u] = c))
                    }
                } else
                    y = _(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, l) : J.apply(o, y)
            })
        }
        function v(t) {
            for (var e, i, n, r = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                return t === e
            }, o, !0), u = p(function(t) {
                return ee.call(e, t) > -1
            }, o, !0), h = [function(t, i, n) {
                    return !s && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
                }]; r > a; a++)
                if (i = b.relative[t[a].type])
                    h = [p(d(h), i)];
                else {
                    if (i = b.filter[t[a].type].apply(null, t[a].matches), i[j]) {
                        for (n = ++a; r > n && !b.relative[t[n].type]; n++)
                            ;
                        return g(a > 1 && d(h), a > 1 && f(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), i, n > a && v(t.slice(a, n)), r > n && v(t = t.slice(n)), r > n && f(t))
                    }
                    h.push(i)
                }
            return d(h)
        }
        function y(t, i) {
            var r = i.length > 0, s = t.length > 0, o = function(n, o, a, l, u) {
                var h, c, f, p = 0, d = "0", m = n && [], g = [], v = A, y = n || s && b.find.TAG("*", u), T = q += null == v ? 1 : Math.random() || .1, w = y.length;
                for (u && (A = o !== O && o); d !== w && null != (h = y[d]); d++) {
                    if (s && h) {
                        for (c = 0; f = t[c++]; )
                            if (f(h, o, a)) {
                                l.push(h);
                                break
                            }
                        u && (q = T)
                    }
                    r && ((h = !f && h) && p--, n && m.push(h))
                }
                if (p += d, r && d !== p) {
                    for (c = 0; f = i[c++]; )
                        f(m, g, o, a);
                    if (n) {
                        if (p > 0)
                            for (; d--; )
                                m[d] || g[d] || (g[d] = K.call(l));
                        g = _(g)
                    }
                    J.apply(l, g), u && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                }
                return u && (q = T, A = v), m
            };
            return r ? n(o) : o
        }
        var T, w, b, x, P, S, C, k, A, D, R, E, O, N, L, M, F, I, z, j = "sizzle" + -new Date, B = t.document, q = 0, H = 0, W = i(), X = i(), U = i(), $ = function(t, e) {
            return t === e && (R = !0), 0
        }, Y = "undefined", G = 1 << 31, V = {}.hasOwnProperty, Q = [], K = Q.pop, Z = Q.push, J = Q.push, te = Q.slice, ee = Q.indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (this[e] === t)
                    return e;
            return -1
        }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", se = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ne + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), he = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(ae), pe = new RegExp("^" + se + "$"), de = {ID: new RegExp("^#(" + re + ")"),CLASS: new RegExp("^\\.(" + re + ")"),TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),ATTR: new RegExp("^" + oe),PSEUDO: new RegExp("^" + ae),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),bool: new RegExp("^(?:" + ie + ")$", "i"),needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")}, me = /^(?:input|select|textarea|button)$/i, _e = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, Te = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), be = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            J.apply(Q = te.call(B.childNodes), B.childNodes), Q[B.childNodes.length].nodeType
        } catch (xe) {
            J = {apply: Q.length ? function(t, e) {
                    Z.apply(t, te.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; )
                        ;
                    t.length = i - 1
                }}
        }
        w = e.support = {}, P = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, E = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t : B, n = i.defaultView;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, N = i.documentElement, L = !P(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                E()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                E()
            })), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(i.getElementsByClassName) && r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), w.getById = r(function(t) {
                return N.appendChild(t).id = j, !i.getElementsByName || !i.getElementsByName(j).length
            }), w.getById ? (b.find.ID = function(t, e) {
                if (typeof e.getElementById !== Y && L) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, b.filter.ID = function(t) {
                var e = t.replace(we, be);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete b.find.ID, b.filter.ID = function(t) {
                var e = t.replace(we, be);
                return function(t) {
                    var i = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), b.find.TAG = w.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var i, n = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = s[r++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return s
            }, b.find.CLASS = w.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== Y && L ? e.getElementsByClassName(t) : void 0
            }, F = [], M = [], (w.qsa = ge.test(i.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || M.push(":checked")
            }), r(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = ge.test(I = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), F.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), e = ge.test(N.compareDocumentPosition), z = e || ge.test(N.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }, $ = e ? function(t, e) {
                if (t === e)
                    return R = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === B && z(B, t) ? -1 : e === i || e.ownerDocument === B && z(B, e) ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e)
                    return R = !0, 0;
                var n, r = 0, s = t.parentNode, a = e.parentNode, l = [t], u = [e];
                if (!s || !a)
                    return t === i ? -1 : e === i ? 1 : s ? -1 : a ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0;
                if (s === a)
                    return o(t, e);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (; l[r] === u[r]; )
                    r++;
                return r ? o(l[r], u[r]) : l[r] === B ? -1 : u[r] === B ? 1 : 0
            }, i) : O
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== O && E(t), i = i.replace(ce, "='$1']"), !(!w.matchesSelector || !L || F && F.test(i) || M && M.test(i)))
                try {
                    var n = I.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (r) {
                }
            return e(i, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && E(t), z(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && E(t);
            var i = b.attrHandle[e.toLowerCase()], n = i && V.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !L) : void 0;
            return void 0 !== n ? n : w.attributes || !L ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [], n = 0, r = 0;
            if (R = !w.detectDuplicates, D = !w.sortStable && t.slice(0), t.sort($), R) {
                for (; e = t[r++]; )
                    e === t[r] && (n = i.push(r));
                for (; n--; )
                    t.splice(i[n], 1)
            }
            return D = null, t
        }, x = e.getText = function(t) {
            var e, i = "", n = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        i += x(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[n++]; )
                    i += x(e);
            return i
        }, b = e.selectors = {cacheLength: 50,createPseudo: n,match: de,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(t) {
                    return t[1] = t[1].replace(we, be), t[3] = (t[3] || t[4] || t[5] || "").replace(we, be), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && fe.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }},filter: {TAG: function(t) {
                    var e = t.replace(we, be).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },CLASS: function(t) {
                    var e = W[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "")
                    })
                },ATTR: function(t, i, n) {
                    return function(r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },CHILD: function(t, e, i, n, r) {
                    var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var u, h, c, f, p, d, m = s !== o ? "nextSibling" : "previousSibling", _ = e.parentNode, g = a && e.nodeName.toLowerCase(), v = !l && !a;
                        if (_) {
                            if (s) {
                                for (; m; ) {
                                    for (c = e; c = c[m]; )
                                        if (a ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? _.firstChild : _.lastChild], o && v) {
                                for (h = _[j] || (_[j] = {}), u = h[t] || [], p = u[0] === q && u[1], f = u[0] === q && u[2], c = p && _.childNodes[p]; c = ++p && c && c[m] || (f = p = 0) || d.pop(); )
                                    if (1 === c.nodeType && ++f && c === e) {
                                        h[t] = [q, p, f];
                                        break
                                    }
                            } else if (v && (u = (e[j] || (e[j] = {}))[t]) && u[0] === q)
                                f = u[1];
                            else
                                for (; (c = ++p && c && c[m] || (f = p = 0) || d.pop()) && ((a ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++f || (v && ((c[j] || (c[j] = {}))[t] = [q, f]), c !== e)); )
                                    ;
                            return f -= r, f === n || f % n === 0 && f / n >= 0
                        }
                    }
                },PSEUDO: function(t, i) {
                    var r, s = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[j] ? s(i) : s.length > 1 ? (r = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = s(t, i), o = r.length; o--; )
                            n = ee.call(t, r[o]), t[n] = !(e[n] = r[o])
                    }) : function(t) {
                        return s(t, 0, r)
                    }) : s
                }},pseudos: {not: n(function(t) {
                    var e = [], i = [], r = C(t.replace(le, "$1"));
                    return r[j] ? n(function(t, e, i, n) {
                        for (var s, o = r(t, null, n, []), a = t.length; a--; )
                            (s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, n, s) {
                        return e[0] = t, r(e, null, s, i), !i.pop()
                    }
                }),has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),contains: n(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                    }
                }),lang: n(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, be).toLowerCase(), function(e) {
                        var i;
                        do
                            if (i = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },root: function(t) {
                    return t === N
                },focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },enabled: function(t) {
                    return t.disabled === !1
                },disabled: function(t) {
                    return t.disabled === !0
                },checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },parent: function(t) {
                    return !b.pseudos.empty(t)
                },header: function(t) {
                    return _e.test(t.nodeName)
                },input: function(t) {
                    return me.test(t.nodeName)
                },button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },first: u(function() {
                    return [0]
                }),last: u(function(t, e) {
                    return [e - 1]
                }),eq: u(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),even: u(function(t, e) {
                    for (var i = 0; e > i; i += 2)
                        t.push(i);
                    return t
                }),odd: u(function(t, e) {
                    for (var i = 1; e > i; i += 2)
                        t.push(i);
                    return t
                }),lt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0; )
                        t.push(n);
                    return t
                }),gt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e; )
                        t.push(n);
                    return t
                })}}, b.pseudos.nth = b.pseudos.eq;
        for (T in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            b.pseudos[T] = a(T);
        for (T in {submit: !0,reset: !0})
            b.pseudos[T] = l(T);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, S = e.tokenize = function(t, i) {
            var n, r, s, o, a, l, u, h = X[t + " "];
            if (h)
                return i ? 0 : h.slice(0);
            for (a = t, l = [], u = b.preFilter; a; ) {
                (!n || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = he.exec(a)) && (n = r.shift(), s.push({value: n,type: r[0].replace(le, " ")}), a = a.slice(n.length));
                for (o in b.filter)
                    !(r = de[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({value: n,type: o,matches: r}), a = a.slice(n.length));
                if (!n)
                    break
            }
            return i ? a.length : a ? e.error(t) : X(t, l).slice(0)
        }, C = e.compile = function(t, e) {
            var i, n = [], r = [], s = U[t + " "];
            if (!s) {
                for (e || (e = S(t)), i = e.length; i--; )
                    s = v(e[i]), s[j] ? n.push(s) : r.push(s);
                s = U(t, y(r, n)), s.selector = t
            }
            return s
        }, k = e.select = function(t, e, i, n) {
            var r, s, o, a, l, u = "function" == typeof t && t, c = !n && S(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === e.nodeType && L && b.relative[s[1].type]) {
                    if (e = (b.find.ID(o.matches[0].replace(we, be), e) || [])[0], !e)
                        return i;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = de.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]); )
                    if ((l = b.find[a]) && (n = l(o.matches[0].replace(we, be), ye.test(s[0].type) && h(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = n.length && f(s), !t)
                            return J.apply(i, n), i;
                        break
                    }
            }
            return (u || C(t, c))(n, e, !L, i, ye.test(t) && h(e.parentNode) || e), i
        }, w.sortStable = j.split("").sort($).join("") === j, w.detectDuplicates = !!R, E(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(ie, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
    var he = re.expr.match.needsContext, ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fe = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? re.find.matchesSelector(n, t) ? [n] : [] : re.find.matches(t, re.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({find: function(t) {
            var e, i = [], n = this, r = n.length;
            if ("string" != typeof t)
                return this.pushStack(re(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (re.contains(n[e], this))
                            return !0
                }));
            for (e = 0; r > e; e++)
                re.find(t, n[e], i);
            return i = this.pushStack(r > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },is: function(t) {
            return !!n(this, "string" == typeof t && he.test(t) ? re(t) : t || [], !1).length
        }});
    var pe, de = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, _e = re.fn.init = function(t, e) {
        var i, n;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e)
                return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : de, !0)), ce.test(i[1]) && re.isPlainObject(e))
                    for (i in e)
                        re.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if (n = de.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2])
                    return pe.find(t);
                this.length = 1, this[0] = n
            }
            return this.context = de, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
    };
    _e.prototype = re.fn, pe = re(de);
    var ge = /^(?:parents|prev(?:Until|All))/, ve = {children: !0,contents: !0,next: !0,prev: !0};
    re.extend({dir: function(t, e, i) {
            for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !re(r).is(i)); )
                1 === r.nodeType && n.push(r), r = r[e];
            return n
        },sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        }}), re.fn.extend({has: function(t) {
            var e, i = re(t, this), n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (re.contains(this, i[e]))
                        return !0
            })
        },closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], o = he.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? re.unique(s) : s)
        },index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }}), re.each({parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },parents: function(t) {
            return re.dir(t, "parentNode")
        },parentsUntil: function(t, e, i) {
            return re.dir(t, "parentNode", i)
        },next: function(t) {
            return r(t, "nextSibling")
        },prev: function(t) {
            return r(t, "previousSibling")
        },nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },nextUntil: function(t, e, i) {
            return re.dir(t, "nextSibling", i)
        },prevUntil: function(t, e, i) {
            return re.dir(t, "previousSibling", i)
        },siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },children: function(t) {
            return re.sibling(t.firstChild)
        },contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }}, function(t, e) {
        re.fn[t] = function(i, n) {
            var r = re.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = re.filter(n, r)), this.length > 1 && (ve[t] || (r = re.unique(r)), ge.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var ye = /\S+/g, Te = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? Te[t] || s(t) : re.extend({}, t);
        var e, i, n, r, o, a, l = [], u = !t.once && [], h = function(s) {
            for (i = t.memory && s, n = !0, o = a || 0, a = 0, r = l.length, e = !0; l && r > o; o++)
                if (l[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                    i = !1;
                    break
                }
            e = !1, l && (u ? u.length && h(u.shift()) : i ? l = [] : c.disable())
        }, c = {add: function() {
                if (l) {
                    var n = l.length;
                    !function s(e) {
                        re.each(e, function(e, i) {
                            var n = re.type(i);
                            "function" === n ? t.unique && c.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                        })
                    }(arguments), e ? r = l.length : i && (a = n, h(i))
                }
                return this
            },remove: function() {
                return l && re.each(arguments, function(t, i) {
                    for (var n; (n = re.inArray(i, l, n)) > -1; )
                        l.splice(n, 1), e && (r >= n && r--, o >= n && o--)
                }), this
            },has: function(t) {
                return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
            },empty: function() {
                return l = [], r = 0, this
            },disable: function() {
                return l = u = i = void 0, this
            },disabled: function() {
                return !l
            },lock: function() {
                return u = void 0, i || c.disable(), this
            },locked: function() {
                return !u
            },fireWith: function(t, i) {
                return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : h(i)), this
            },fire: function() {
                return c.fireWith(this, arguments), this
            },fired: function() {
                return !!n
            }};
        return c
    }, re.extend({Deferred: function(t) {
            var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]], i = "pending", n = {state: function() {
                    return i
                },always: function() {
                    return r.done(arguments).fail(arguments), this
                },then: function() {
                    var t = arguments;
                    return re.Deferred(function(i) {
                        re.each(e, function(e, s) {
                            var o = re.isFunction(t[e]) && t[e];
                            r[s[1]](function() {
                                var t = o && o.apply(this, arguments);
                                t && re.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                },promise: function(t) {
                    return null != t ? re.extend(t, n) : n
                }}, r = {};
            return n.pipe = n.then, re.each(e, function(t, s) {
                var o = s[2], a = s[3];
                n[s[1]] = o.add, a && o.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), t && t.call(r, r), r
        },when: function(t) {
            var e, i, n, r = 0, s = V.call(arguments), o = s.length, a = 1 !== o || t && re.isFunction(t.promise) ? o : 0, l = 1 === a ? t : re.Deferred(), u = function(t, i, n) {
                return function(r) {
                    i[t] = this, n[t] = arguments.length > 1 ? V.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (o > 1)
                for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++)
                    s[r] && re.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }});
    var we;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t), this
    }, re.extend({isReady: !1,readyWait: 1,holdReady: function(t) {
            t ? re.readyWait++ : re.ready(!0)
        },ready: function(t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!de.body)
                    return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (we.resolveWith(de, [re]), re.fn.triggerHandler && (re(de).triggerHandler("ready"), re(de).off("ready")))
            }
        }}), re.ready.promise = function(e) {
        if (!we)
            if (we = re.Deferred(), "complete" === de.readyState)
                setTimeout(re.ready);
            else if (de.addEventListener)
                de.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
            else {
                de.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var i = !1;
                try {
                    i = null == t.frameElement && de.documentElement
                } catch (n) {
                }
                i && i.doScroll && !function r() {
                    if (!re.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(r, 50)
                        }
                        o(), re.ready()
                    }
                }()
            }
        return we.promise(e)
    };
    var be, xe = "undefined";
    for (be in re(ie))
        break;
    ie.ownLast = "0" !== be, ie.inlineBlockNeedsLayout = !1, re(function() {
        var t, e, i, n;
        i = de.getElementsByTagName("body")[0], i && i.style && (e = de.createElement("div"), n = de.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }), function() {
        var t = de.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(), re.acceptData = function(t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /([A-Z])/g;
    re.extend({cache: {},noData: {"applet ": !0,"embed ": !0,"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !u(t)
        },data: function(t, e, i) {
            return h(t, e, i)
        },removeData: function(t, e) {
            return c(t, e)
        },_data: function(t, e, i) {
            return h(t, e, i, !0)
        },_removeData: function(t, e) {
            return c(t, e, !0)
        }}), re.fn.extend({data: function(t, e) {
            var i, n, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(s), 1 === s.nodeType && !re._data(s, "parsedAttrs"))) {
                    for (i = o.length; i--; )
                        o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(s, n, r[n])));
                    re._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : s ? l(s, t, re.data(s, t)) : void 0
        },removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }}), re.extend({queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = re._data(t, e), i && (!n || re.isArray(i) ? n = re._data(t, e, re.makeArray(i)) : n.push(i)), n || []) : void 0
        },dequeue: function(t, e) {
            e = e || "fx";
            var i = re.queue(t, e), n = i.length, r = i.shift(), s = re._queueHooks(t, e), o = function() {
                re.dequeue(t, e)
            };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
        },_queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return re._data(t, i) || re._data(t, i, {empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"), re._removeData(t, i)
                })})
        }}), re.fn.extend({queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && re.dequeue(this, t)
            })
        },dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },promise: function(t, e) {
            var i, n = 1, r = re.Deferred(), s = this, o = this.length, a = function() {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--; )
                i = re._data(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }});
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Ae = function(t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }, De = re.access = function(t, e, i, n, r, s, o) {
        var a = 0, l = t.length, u = null == i;
        if ("object" === re.type(i)) {
            r = !0;
            for (a in i)
                re.access(t, e, a, i[a], !0, s, o)
        } else if (void 0 !== n && (r = !0, re.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
            return u.call(re(t), i)
        })), e))
            for (; l > a; a++)
                e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
    }, Re = /^(?:checkbox|radio)$/i;
    !function() {
        var t = de.createElement("input"), e = de.createElement("div"), i = de.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== de.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
            ie.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(), function() {
        var e, i, n = de.createElement("div");
        for (e in {submit: !0,change: !0,focusin: !0})
            i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ee = /^(?:input|select|textarea)$/i, Oe = /^key/, Ne = /^(?:mouse|pointer|contextmenu)|click/, Le = /^(?:focusinfocus|focusoutblur)$/, Me = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {global: {},add: function(t, e, i, n, r) {
            var s, o, a, l, u, h, c, f, p, d, m, _ = re._data(t);
            if (_) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = re.guid++), (o = _.events) || (o = _.events = {}), (h = _.handle) || (h = _.handle = function(t) {
                    return typeof re === xe || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(h.elem, arguments)
                }, h.elem = t), e = (e || "").match(ye) || [""], a = e.length; a--; )
                    s = Me.exec(e[a]) || [], p = m = s[1], d = (s[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, c = re.extend({type: p,origType: m,data: n,handler: i,guid: i.guid,selector: r,needsContext: r && re.expr.match.needsContext.test(r),namespace: d.join(".")}, l), (f = o[p]) || (f = o[p] = [], f.delegateCount = 0, u.setup && u.setup.call(t, n, d, h) !== !1 || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), re.event.global[p] = !0);
                t = null
            }
        },remove: function(t, e, i, n, r) {
            var s, o, a, l, u, h, c, f, p, d, m, _ = re.hasData(t) && re._data(t);
            if (_ && (h = _.events)) {
                for (e = (e || "").match(ye) || [""], u = e.length; u--; )
                    if (a = Me.exec(e[u]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                        for (c = re.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, f = h[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = f.length; s--; )
                            o = f[s], !r && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (f.splice(s, 1), o.selector && f.delegateCount--, c.remove && c.remove.call(t, o));
                        l && !f.length && (c.teardown && c.teardown.call(t, d, _.handle) !== !1 || re.removeEvent(t, p, _.handle), delete h[p])
                    } else
                        for (p in h)
                            re.event.remove(t, p + e[u], i, n, !0);
                re.isEmptyObject(h) && (delete _.handle, re._removeData(t, "events"))
            }
        },trigger: function(e, i, n, r) {
            var s, o, a, l, u, h, c, f = [n || de], p = ee.call(e, "type") ? e.type : e, d = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = h = n = n || de, 3 !== n.nodeType && 8 !== n.nodeType && !Le.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e : new re.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : re.makeArray(i, [e]), u = re.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!r && !u.noBubble && !re.isWindow(n)) {
                    for (l = u.delegateType || p, Le.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a), h = a;
                    h === (n.ownerDocument || de) && f.push(h.defaultView || h.parentWindow || t)
                }
                for (c = 0; (a = f[c++]) && !e.isPropagationStopped(); )
                    e.type = c > 1 ? l : u.bindType || p, s = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), s && s.apply(a, i), s = o && a[o], s && s.apply && re.acceptData(a) && (e.result = s.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), i) === !1) && re.acceptData(n) && o && n[p] && !re.isWindow(n)) {
                    h = n[o], h && (n[o] = null), re.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {
                    }
                    re.event.triggered = void 0, h && (n[o] = h)
                }
                return e.result
            }
        },dispatch: function(t) {
            t = re.event.fix(t);
            var e, i, n, r, s, o = [], a = V.call(arguments), l = (re._data(this, "events") || {})[t.type] || [], u = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (o = re.event.handlers.call(this, t, l), e = 0; (r = o[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = r.elem, s = 0; (n = r.handlers[s++]) && !t.isImmediatePropagationStopped(); )
                        (!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((re.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },handlers: function(t, e) {
            var i, n, r, s, o = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], s = 0; a > s; s++)
                            n = e[s], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? re(i, this).index(l) >= 0 : re.find(i, this, null, [l]).length), r[i] && r.push(n);
                        r.length && o.push({elem: l,handlers: r})
                    }
            return a < e.length && o.push({elem: this,handlers: e.slice(a)}), o
        },fix: function(t) {
            if (t[re.expando])
                return t;
            var e, i, n, r = t.type, s = t, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Ne.test(r) ? this.mouseHooks : Oe.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new re.Event(s), e = n.length; e--; )
                i = n[e], t[i] = s[i];
            return t.target || (t.target = s.srcElement || de), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(t, e) {
                var i, n, r, s = e.button, o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || de, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }},special: {load: {noBubble: !0},focus: {trigger: function() {
                    if (this !== d() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                },delegateType: "focusin"},blur: {trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"},click: {trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },_default: function(t) {
                    return re.nodeName(t.target, "a")
                }},beforeunload: {postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }}},simulate: function(t, e, i, n) {
            var r = re.extend(new re.Event, i, {type: t,isSimulated: !0,originalEvent: {}});
            n ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }}, re.removeEvent = de.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === xe && (t[n] = null), t.detachEvent(n, i))
    }, re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void (this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {isDefaultPrevented: p,isPropagationStopped: p,isImmediatePropagationStopped: p,preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }}, re.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(t, e) {
        re.event.special[t] = {delegateType: e,bindType: e,handle: function(t) {
                var i, n = this, r = t.relatedTarget, s = t.handleObj;
                return (!r || r !== n && !re.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }}
    }), ie.submitBubbles || (re.event.special.submit = {setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target, i = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                i && !re._data(i, "submitBubbles") && (re.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), re._data(i, "submitBubbles", !0))
            })
        },postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }}), ie.changeBubbles || (re.event.special.change = {setup: function() {
            return Ee.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Ee.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        },handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },teardown: function() {
            return re.event.remove(this, "._change"), !Ee.test(this.nodeName)
        }}), ie.focusinBubbles || re.each({focus: "focusin",blur: "focusout"}, function(t, e) {
        var i = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {setup: function() {
                var n = this.ownerDocument || this, r = re._data(n, e);
                r || n.addEventListener(t, i, !0), re._data(n, e, (r || 0) + 1)
            },teardown: function() {
                var n = this.ownerDocument || this, r = re._data(n, e) - 1;
                r ? re._data(n, e, r) : (n.removeEventListener(t, i, !0), re._removeData(n, e))
            }}
    }), re.fn.extend({on: function(t, e, i, n, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (s in t)
                    this.on(s, e, i, t[s], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)
                n = p;
            else if (!n)
                return this;
            return 1 === r && (o = n, n = function(t) {
                return re().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = re.guid++)), this.each(function() {
                re.event.add(this, t, n, i, e)
            })
        },one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj)
                return n = t.handleObj, re(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                re.event.remove(this, t, i, e)
            })
        },trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },triggerHandler: function(t, e) {
            var i = this[0];
            return i ? re.event.trigger(t, e, i, !0) : void 0
        }});
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ie = / jQuery\d+="(?:null|\d+)"/g, ze = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"), je = /^\s+/, Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qe = /<([\w:]+)/, He = /<tbody/i, We = /<|&#?\w+;/, Xe = /<(?:script|style|link)/i, Ue = /checked\s*(?:[^=]|=\s*.checked.)/i, $e = /^$|\/(?:java|ecma)script/i, Ye = /^true\/(.*)/, Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ve = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Qe = m(de), Ke = Qe.appendChild(de.createElement("div"));
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, re.extend({clone: function(t, e, i) {
            var n, r, s, o, a, l = re.contains(t.ownerDocument, t);
            if (ie.html5Clone || re.isXMLDoc(t) || !ze.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML, Ke.removeChild(s = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (n = _(s), a = _(t), o = 0; null != (r = a[o]); ++o)
                    n[o] && x(r, n[o]);
            if (e)
                if (i)
                    for (a = a || _(t), n = n || _(s), o = 0; null != (r = a[o]); o++)
                        b(r, n[o]);
                else
                    b(t, s);
            return n = _(s, "script"), n.length > 0 && w(n, !l && _(t, "script")), n = a = r = null, s
        },buildFragment: function(t, e, i, n) {
            for (var r, s, o, a, l, u, h, c = t.length, f = m(e), p = [], d = 0; c > d; d++)
                if (s = t[d], s || 0 === s)
                    if ("object" === re.type(s))
                        re.merge(p, s.nodeType ? [s] : s);
                    else if (We.test(s)) {
                        for (a = a || f.appendChild(e.createElement("div")), l = (qe.exec(s) || ["", ""])[1].toLowerCase(), h = Ve[l] || Ve._default, a.innerHTML = h[1] + s.replace(Be, "<$1></$2>") + h[2], r = h[0]; r--; )
                            a = a.lastChild;
                        if (!ie.leadingWhitespace && je.test(s) && p.push(e.createTextNode(je.exec(s)[0])), !ie.tbody)
                            for (s = "table" !== l || He.test(s) ? "<table>" !== h[1] || He.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--; )
                                re.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                        for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild; )
                            a.removeChild(a.firstChild);
                        a = f.lastChild
                    } else
                        p.push(e.createTextNode(s));
            for (a && f.removeChild(a), ie.appendChecked || re.grep(_(p, "input"), g), d = 0; s = p[d++]; )
                if ((!n || -1 === re.inArray(s, n)) && (o = re.contains(s.ownerDocument, s), a = _(f.appendChild(s), "script"), o && w(a), i))
                    for (r = 0; s = a[r++]; )
                        $e.test(s.type || "") && i.push(s);
            return a = null, f
        },cleanData: function(t, e) {
            for (var i, n, r, s, o = 0, a = re.expando, l = re.cache, u = ie.deleteExpando, h = re.event.special; null != (i = t[o]); o++)
                if ((e || re.acceptData(i)) && (r = i[a], s = r && l[r])) {
                    if (s.events)
                        for (n in s.events)
                            h[n] ? re.event.remove(i, n) : re.removeEvent(i, n, s.handle);
                    l[r] && (delete l[r], u ? delete i[a] : typeof i.removeAttribute !== xe ? i.removeAttribute(a) : i[a] = null, G.push(r))
                }
        }}), re.fn.extend({text: function(t) {
            return De(this, function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || de).createTextNode(t))
            }, null, t, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },remove: function(t, e) {
            for (var i, n = t ? re.filter(t, this) : this, r = 0; null != (i = n[r]); r++)
                e || 1 !== i.nodeType || re.cleanData(_(i)), i.parentNode && (e && re.contains(i.ownerDocument, i) && w(_(i, "script")), i.parentNode.removeChild(i));
            return this
        },empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(_(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return re.clone(this, t, e)
            })
        },html: function(t) {
            return De(this, function(t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Ie, "") : void 0;
                if (!("string" != typeof t || Xe.test(t) || !ie.htmlSerialize && ze.test(t) || !ie.leadingWhitespace && je.test(t) || Ve[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Be, "<$1></$2>");
                    try {
                        for (; n > i; i++)
                            e = this[i] || {}, 1 === e.nodeType && (re.cleanData(_(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, re.cleanData(_(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },detach: function(t) {
            return this.remove(t, !0)
        },domManip: function(t, e) {
            t = Q.apply([], t);
            var i, n, r, s, o, a, l = 0, u = this.length, h = this, c = u - 1, f = t[0], p = re.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ie.checkClone && Ue.test(f))
                return this.each(function(i) {
                    var n = h.eq(i);
                    p && (t[0] = f.call(this, i, n.html())), n.domManip(t, e)
                });
            if (u && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (s = re.map(_(a, "script"), y), r = s.length; u > l; l++)
                    n = a, l !== c && (n = re.clone(n, !0, !0), r && re.merge(s, _(n, "script"))), e.call(this[l], n, l);
                if (r)
                    for (o = s[s.length - 1].ownerDocument, re.map(s, T), l = 0; r > l; l++)
                        n = s[l], $e.test(n.type || "") && !re._data(n, "globalEval") && re.contains(o, n) && (n.src ? re._evalUrl && re._evalUrl(n.src) : re.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ge, "")));
                a = i = null
            }
            return this
        }}), re.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(t, e) {
        re.fn[t] = function(t) {
            for (var i, n = 0, r = [], s = re(t), o = s.length - 1; o >= n; n++)
                i = n === o ? this : this.clone(!0), re(s[n])[e](i), K.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Ze, Je = {};
    !function() {
        var t;
        ie.shrinkWrapBlocks = function() {
            if (null != t)
                return t;
            t = !1;
            var e, i, n;
            return i = de.getElementsByTagName("body")[0], i && i.style ? (e = de.createElement("div"), n = de.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(de.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var ti, ei, ii = /^margin/, ni = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"), ri = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }, ei = function(t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || ti(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || re.contains(t.ownerDocument, t) || (o = re.style(t, e)), ni.test(o) && ii.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
    }) : de.documentElement.currentStyle && (ti = function(t) {
        return t.currentStyle
    }, ei = function(t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || ti(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), ni.test(o) && !ri.test(e) && (n = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
    }), !function() {
        function e() {
            var e, i, n, r;
            i = de.getElementsByTagName("body")[0], i && i.style && (e = de.createElement("div"), n = de.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, r = e.appendChild(de.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), i.removeChild(n))
        }
        var i, n, r, s, o, a, l;
        i = de.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], (n = r && r.style) && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, re.extend(ie, {reliableHiddenOffsets: function() {
                return null == a && e(), a
            },boxSizingReliable: function() {
                return null == o && e(), o
            },pixelPosition: function() {
                return null == s && e(), s
            },reliableMarginRight: function() {
                return null == l && e(), l
            }}))
    }(), re.swap = function(t, e, i, n) {
        var r, s, o = {};
        for (s in e)
            o[s] = t.style[s], t.style[s] = e[s];
        r = i.apply(t, n || []);
        for (s in e)
            t.style[s] = o[s];
        return r
    };
    var si = /alpha\([^)]*\)/i, oi = /opacity\s*=\s*([^)]*)/, ai = /^(none|table(?!-c[ea]).+)/, li = new RegExp("^(" + Ce + ")(.*)$", "i"), ui = new RegExp("^([+-])=(" + Ce + ")", "i"), hi = {position: "absolute",visibility: "hidden",display: "block"}, ci = {letterSpacing: "0",fontWeight: "400"}, fi = ["Webkit", "O", "Moz", "ms"];
    re.extend({cssHooks: {opacity: {get: function(t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": ie.cssFloat ? "cssFloat" : "styleFloat"},style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = re.camelCase(e), l = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = k(l, a)), o = re.cssHooks[e] || re.cssHooks[a], void 0 === i)
                    return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                if (s = typeof i, "string" === s && (r = ui.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || re.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(t, i, n)))))
                    try {
                        l[e] = i
                    } catch (u) {
                    }
            }
        },css: function(t, e, i, n) {
            var r, s, o, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = k(t.style, a)), o = re.cssHooks[e] || re.cssHooks[a], o && "get" in o && (s = o.get(t, !0, i)), void 0 === s && (s = ei(t, e, n)), "normal" === s && e in ci && (s = ci[e]), "" === i || i ? (r = parseFloat(s), i === !0 || re.isNumeric(r) ? r || 0 : s) : s
        }}), re.each(["height", "width"], function(t, e) {
        re.cssHooks[e] = {get: function(t, i, n) {
                return i ? ai.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, hi, function() {
                    return E(t, e, n)
                }) : E(t, e, n) : void 0
            },set: function(t, i, n) {
                var r = n && ti(t);
                return D(t, i, n ? R(t, e, n, ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }}
    }), ie.opacity || (re.cssHooks.opacity = {get: function(t, e) {
            return oi.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },set: function(t, e) {
            var i = t.style, n = t.currentStyle, r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", s = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(s.replace(si, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = si.test(s) ? s.replace(si, r) : s + " " + r)
        }}), re.cssHooks.marginRight = C(ie.reliableMarginRight, function(t, e) {
        return e ? re.swap(t, {display: "inline-block"}, ei, [t, "marginRight"]) : void 0
    }), re.each({margin: "",padding: "",border: "Width"}, function(t, e) {
        re.cssHooks[t + e] = {expand: function(i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                    r[t + ke[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }}, ii.test(t) || (re.cssHooks[t + e].set = D)
    }), re.fn.extend({css: function(t, e) {
            return De(this, function(t, e, i) {
                var n, r, s = {}, o = 0;
                if (re.isArray(e)) {
                    for (n = ti(t), r = e.length; r > o; o++)
                        s[e[o]] = re.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? re.style(t, e, i) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },show: function() {
            return A(this, !0)
        },hide: function() {
            return A(this)
        },toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ae(this) ? re(this).show() : re(this).hide()
            })
        }}), re.Tween = O, O.prototype = {constructor: O,init: function(t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (re.cssNumber[i] ? "" : "px")
        },cur: function() {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this)
        },run: function(t) {
            var e, i = O.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
        }}, O.prototype.init.prototype = O.prototype, O.propHooks = {_default: {get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }}}, O.propHooks.scrollTop = O.propHooks.scrollLeft = {set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }}, re.easing = {linear: function(t) {
            return t
        },swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }}, re.fx = O.prototype.init, re.fx.step = {};
    var pi, di, mi = /^(?:toggle|show|hide)$/, _i = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"), gi = /queueHooks$/, vi = [F], yi = {"*": [function(t, e) {
                var i = this.createTween(t, e), n = i.cur(), r = _i.exec(e), s = r && r[3] || (re.cssNumber[t] ? "" : "px"), o = (re.cssNumber[t] || "px" !== s && +n) && _i.exec(re.css(i.elem, t)), a = 1, l = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +n || 1;
                    do
                        a = a || ".5", o /= a, re.style(i.elem, t, o + s);
                    while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
            }]};
    re.Animation = re.extend(z, {tweener: function(t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, r = t.length; r > n; n++)
                i = t[n], yi[i] = yi[i] || [], yi[i].unshift(e)
        },prefilter: function(t, e) {
            e ? vi.unshift(t) : vi.push(t)
        }}), re.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? re.extend({}, t) : {complete: i || !i && e || re.isFunction(t) && t,duration: t,easing: i && e || e && !re.isFunction(e) && e};
        return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
        }, n
    }, re.fn.extend({fadeTo: function(t, e, i, n) {
            return this.filter(Ae).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        },animate: function(t, e, i, n) {
            var r = re.isEmptyObject(t), s = re.speed(e, i, n), o = function() {
                var e = z(this, re.extend({}, t), s);
                (r || re._data(this, "finish")) && e.stop(!0)
            };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0, r = null != t && t + "queueHooks", s = re.timers, o = re._data(this);
                if (r)
                    o[r] && o[r].stop && n(o[r]);
                else
                    for (r in o)
                        o[r] && o[r].stop && gi.test(r) && n(o[r]);
                for (r = s.length; r--; )
                    s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                (e || !i) && re.dequeue(this, t)
            })
        },finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = re._data(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = re.timers, o = n ? n.length : 0;
                for (i.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--; )
                    s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; o > e; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }}), re.each(["toggle", "show", "hide"], function(t, e) {
        var i = re.fn[e];
        re.fn[e] = function(t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, r)
        }
    }), re.each({slideDown: L("show"),slideUp: L("hide"),slideToggle: L("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(t, e) {
        re.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), re.timers = [], re.fx.tick = function() {
        var t, e = re.timers, i = 0;
        for (pi = re.now(); i < e.length; i++)
            t = e[i], t() || e[i] !== t || e.splice(i--, 1);
        e.length || re.fx.stop(), pi = void 0
    }, re.fx.timer = function(t) {
        re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function() {
        di || (di = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function() {
        clearInterval(di), di = null
    }, re.fx.speeds = {slow: 600,fast: 200,_default: 400}, re.fn.delay = function(t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
            var n = setTimeout(e, t);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    }, function() {
        var t, e, i, n, r;
        e = de.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = de.createElement("select"), r = i.appendChild(de.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = r.selected, ie.enctype = !!de.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !r.disabled, t = de.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
    }();
    var Ti = /\r/g;
    re.fn.extend({val: function(t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = re.isFunction(t), this.each(function(i) {
                var r;
                1 === this.nodeType && (r = n ? t.call(this, i, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(Ti, "") : null == i ? "" : i)) : void 0
        }}), re.extend({valHooks: {option: {get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }},select: {get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && re.nodeName(i.parentNode, "optgroup"))) {
                            if (e = re(i).val(), s)
                                return e;
                            o.push(e)
                        }
                    return o
                },set: function(t, e) {
                    for (var i, n, r = t.options, s = re.makeArray(e), o = r.length; o--; )
                        if (n = r[o], re.inArray(re.valHooks.option.get(n), s) >= 0)
                            try {
                                n.selected = i = !0
                            } catch (a) {
                                n.scrollHeight
                            }
                        else
                            n.selected = !1;
                    return i || (t.selectedIndex = -1), r
                }}}}), re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }}, ie.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var wi, bi, xi = re.expr.attrHandle, Pi = /^(?:checked|selected)$/i, Si = ie.getSetAttribute, Ci = ie.input;
    re.fn.extend({attr: function(t, e) {
            return De(this, re.attr, t, e, arguments.length > 1)
        },removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }}), re.extend({attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === xe ? re.prop(t, e, i) : (1 === s && re.isXMLDoc(t) || (e = e.toLowerCase(), n = re.attrHooks[e] || (re.expr.match.bool.test(e) ? bi : wi)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void re.removeAttr(t, e)) : void 0
        },removeAttr: function(t, e) {
            var i, n, r = 0, s = e && e.match(ye);
            if (s && 1 === t.nodeType)
                for (; i = s[r++]; )
                    n = re.propFix[i] || i, re.expr.match.bool.test(i) ? Ci && Si || !Pi.test(i) ? t[n] = !1 : t[re.camelCase("default-" + i)] = t[n] = !1 : re.attr(t, i, ""), t.removeAttribute(Si ? i : n)
        },attrHooks: {type: {set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }}}}), bi = {set: function(t, e, i) {
            return e === !1 ? re.removeAttr(t, i) : Ci && Si || !Pi.test(i) ? t.setAttribute(!Si && re.propFix[i] || i, i) : t[re.camelCase("default-" + i)] = t[i] = !0, i
        }}, re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = xi[e] || re.find.attr;
        xi[e] = Ci && Si || !Pi.test(e) ? function(t, e, n) {
            var r, s;
            return n || (s = xi[e], xi[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, xi[e] = s), r
        } : function(t, e, i) {
            return i ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ci && Si || (re.attrHooks.value = {set: function(t, e, i) {
            return re.nodeName(t, "input") ? void (t.defaultValue = e) : wi && wi.set(t, e, i)
        }}), Si || (wi = {set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }}, xi.id = xi.name = xi.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, re.valHooks.button = {get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },set: wi.set}, re.attrHooks.contenteditable = {set: function(t, e, i) {
            wi.set(t, "" === e ? !1 : e, i)
        }}, re.each(["width", "height"], function(t, e) {
        re.attrHooks[e] = {set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }}
    })), ie.style || (re.attrHooks.style = {get: function(t) {
            return t.style.cssText || void 0
        },set: function(t, e) {
            return t.style.cssText = e + ""
        }});
    var ki = /^(?:input|select|textarea|button|object)$/i, Ai = /^(?:a|area)$/i;
    re.fn.extend({prop: function(t, e) {
            return De(this, re.prop, t, e, arguments.length > 1)
        },removeProp: function(t) {
            return t = re.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {
                }
            })
        }}), re.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(t, e, i) {
            var n, r, s, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? (s = 1 !== o || !re.isXMLDoc(t), s && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]) : void 0
        },propHooks: {tabIndex: {get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ki.test(t.nodeName) || Ai.test(t.nodeName) && t.href ? 0 : -1
                }}}}), ie.hrefNormalized || re.each(["href", "src"], function(t, e) {
        re.propHooks[e] = {get: function(t) {
                return t.getAttribute(e, 4)
            }}
    }), ie.optSelected || (re.propHooks.selected = {get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }}), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }), ie.enctype || (re.propFix.enctype = "encoding");
    var Di = /[\t\r\n\f]/g;
    re.fn.extend({addClass: function(t) {
            var e, i, n, r, s, o, a = 0, l = this.length, u = "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function(e) {
                    re(this).addClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(ye) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Di, " ") : " ")) {
                        for (s = 0; r = e[s++]; )
                            n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        o = re.trim(n), i.className !== o && (i.className = o)
                    }
            return this
        },removeClass: function(t) {
            var e, i, n, r, s, o, a = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function(e) {
                    re(this).removeClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(ye) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Di, " ") : "")) {
                        for (s = 0; r = e[s++]; )
                            for (; n.indexOf(" " + r + " ") >= 0; )
                                n = n.replace(" " + r + " ", " ");
                        o = t ? re.trim(n) : "", i.className !== o && (i.className = o)
                    }
            return this
        },toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function(i) {
                re(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, r = re(this), s = t.match(ye) || []; e = s[n++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    (i === xe || "boolean" === i) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        },hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Di, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }}), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), re.fn.extend({hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },unbind: function(t, e) {
            return this.off(t, null, e)
        },delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }});
    var Ri = re.now(), Ei = /\?/, Oi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var i, n = null, r = re.trim(e + "");
        return r && !re.trim(r.replace(Oi, function(t, e, r, s) {
            return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !s - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (r) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), i
    };
    var Ni, Li, Mi = /#.*$/, Fi = /([?&])_=[^&]*/, Ii = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, zi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ji = /^(?:GET|HEAD)$/, Bi = /^\/\//, qi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hi = {}, Wi = {}, Xi = "*/".concat("*");
    try {
        Li = location.href
    } catch (Ui) {
        Li = de.createElement("a"), Li.href = "", Li = Li.href
    }
    Ni = qi.exec(Li.toLowerCase()) || [], re.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: Li,type: "GET",isLocal: zi.test(Ni[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": Xi,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": re.parseJSON,"text xml": re.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(t, e) {
            return e ? q(q(t, re.ajaxSettings), e) : q(re.ajaxSettings, t)
        },ajaxPrefilter: j(Hi),ajaxTransport: j(Wi),ajax: function(t, e) {
            function i(t, e, i, n) {
                var r, h, g, v, T, b = e;
                2 !== y && (y = 2, a && clearTimeout(a), u = void 0, o = n || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (v = H(c, w, i)), v = W(c, v, w, r), r ? (c.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (re.lastModified[s] = T), T = w.getResponseHeader("etag"), T && (re.etag[s] = T)), 204 === t || "HEAD" === c.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = v.state, h = v.data, g = v.error, r = !g)) : (g = b, (t || !b) && (b = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || b) + "", r ? d.resolveWith(f, [h, b, w]) : d.rejectWith(f, [w, b, g]), w.statusCode(_), _ = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [w, c, r ? h : g]), m.fireWith(f, [w, b]), l && (p.trigger("ajaxComplete", [w, c]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, s, o, a, l, u, h, c = re.ajaxSetup({}, e), f = c.context || c, p = c.context && (f.nodeType || f.jquery) ? re(f) : re.event, d = re.Deferred(), m = re.Callbacks("once memory"), _ = c.statusCode || {}, g = {}, v = {}, y = 0, T = "canceled", w = {readyState: 0,getResponseHeader: function(t) {
                    var e;
                    if (2 === y) {
                        if (!h)
                            for (h = {}; e = Ii.exec(o); )
                                h[e[1].toLowerCase()] = e[2];
                        e = h[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },getAllResponseHeaders: function() {
                    return 2 === y ? o : null
                },setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return y || (t = v[i] = v[i] || t, g[t] = e), this
                },overrideMimeType: function(t) {
                    return y || (c.mimeType = t), this
                },statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > y)
                            for (e in t)
                                _[e] = [_[e], t[e]];
                        else
                            w.always(t[w.status]);
                    return this
                },abort: function(t) {
                    var e = t || T;
                    return u && u.abort(e), i(0, e), this
                }};
            if (d.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, c.url = ((t || c.url || Li) + "").replace(Mi, "").replace(Bi, Ni[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = re.trim(c.dataType || "*").toLowerCase().match(ye) || [""], null == c.crossDomain && (n = qi.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Ni[1] && n[2] === Ni[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ni[3] || ("http:" === Ni[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = re.param(c.data, c.traditional)), B(Hi, c, e, w), 2 === y)
                return w;
            l = c.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !ji.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (Ei.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Fi.test(s) ? s.replace(Fi, "$1_=" + Ri++) : s + (Ei.test(s) ? "&" : "?") + "_=" + Ri++)), c.ifModified && (re.lastModified[s] && w.setRequestHeader("If-Modified-Since", re.lastModified[s]), re.etag[s] && w.setRequestHeader("If-None-Match", re.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Xi + "; q=0.01" : "") : c.accepts["*"]);
            for (r in c.headers)
                w.setRequestHeader(r, c.headers[r]);
            if (c.beforeSend && (c.beforeSend.call(f, w, c) === !1 || 2 === y))
                return w.abort();
            T = "abort";
            for (r in {success: 1,error: 1,complete: 1})
                w[r](c[r]);
            if (u = B(Wi, c, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, c.timeout));
                try {
                    y = 1, u.send(g, i)
                } catch (b) {
                    if (!(2 > y))
                        throw b;
                    i(-1, b)
                }
            } else
                i(-1, "No Transport");
            return w
        },getJSON: function(t, e, i) {
            return re.get(t, e, i, "json")
        },getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }}), re.each(["get", "post"], function(t, e) {
        re[e] = function(t, i, n, r) {
            return re.isFunction(i) && (r = r || n, n = i, i = void 0), re.ajax({url: t,type: e,dataType: r,data: i,success: n})
        }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), re._evalUrl = function(t) {
        return re.ajax({url: t,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
    }, re.fn.extend({wrapAll: function(t) {
            if (re.isFunction(t))
                return this.each(function(e) {
                    re(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },wrapInner: function(t) {
            return this.each(re.isFunction(t) ? function(e) {
                re(this).wrapInner(t.call(this, e))
            } : function() {
                var e = re(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(i) {
                re(this).wrapAll(e ? t.call(this, i) : t)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }}), re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    };
    var $i = /%20/g, Yi = /\[\]$/, Gi = /\r?\n/g, Vi = /^(?:submit|button|image|reset|file)$/i, Qi = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var i, n = [], r = function(t, e) {
            e = re.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t))
            re.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (i in t)
                X(i, t[i], e, r);
        return n.join("&").replace($i, "+")
    }, re.fn.extend({serialize: function() {
            return re.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Qi.test(this.nodeName) && !Vi.test(t) && (this.checked || !Re.test(t))
            }).map(function(t, e) {
                var i = re(this).val();
                return null == i ? null : re.isArray(i) ? re.map(i, function(t) {
                    return {name: e.name,value: t.replace(Gi, "\r\n")}
                }) : {name: e.name,value: i.replace(Gi, "\r\n")}
            }).get()
        }}), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || $()
    } : U;
    var Ki = 0, Zi = {}, Ji = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function() {
        for (var t in Zi)
            Zi[t](void 0, !0)
    }), ie.cors = !!Ji && "withCredentials" in Ji, Ji = ie.ajax = !!Ji, Ji && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {send: function(i, n) {
                    var r, s = t.xhr(), o = ++Ki;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields)
                            s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i)
                        void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                    s.send(t.hasContent && t.data || null), e = function(i, r) {
                        var a, l, u;
                        if (e && (r || 4 === s.readyState))
                            if (delete Zi[o], e = void 0, s.onreadystatechange = re.noop, r)
                                4 !== s.readyState && s.abort();
                            else {
                                u = {}, a = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (h) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && n(a, l, u, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Zi[o] = e : e()
                },abort: function() {
                    e && e(void 0, !0)
                }}
        }
    }), re.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(t) {
                return re.globalEval(t), t
            }}}), re.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = de.head || re("head")[0] || de.documentElement;
            return {send: function(n, r) {
                    e = de.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },abort: function() {
                    e && e.onload(void 0, !0)
                }}
        }
    });
    var tn = [], en = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var t = tn.pop() || re.expando + "_" + Ri++;
            return this[t] = !0, t
        }}), re.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, s, o, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (Ei.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || re.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
            o = arguments
        }, n.always(function() {
            t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, tn.push(r)), o && re.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), re.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || de;
        var n = ce.exec(t), r = !i && [];
        return n ? [e.createElement(n[1])] : (n = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], n.childNodes))
    };
    var nn = re.fn.load;
    re.fn.load = function(t, e, i) {
        if ("string" != typeof t && nn)
            return nn.apply(this, arguments);
        var n, r, s, o = this, a = t.indexOf(" ");
        return a >= 0 && (n = re.trim(t.slice(a, t.length)), t = t.slice(0, a)), re.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && re.ajax({url: t,type: s,dataType: "html",data: e}).done(function(t) {
            r = arguments, o.html(n ? re("<div>").append(re.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            o.each(i, r || [t.responseText, e, t])
        }), this
    }, re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    re.offset = {setOffset: function(t, e, i) {
            var n, r, s, o, a, l, u, h = re.css(t, "position"), c = re(t), f = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), s = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === h || "fixed" === h) && re.inArray("auto", [s, l]) > -1, u ? (n = c.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : c.css(f)
        }}, re.fn.extend({offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    re.offset.setOffset(this, t, e)
                });
            var e, i, n = {top: 0,left: 0}, r = this[0], s = r && r.ownerDocument;
            return s ? (e = s.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== xe && (n = r.getBoundingClientRect()), i = Y(s), {top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)}) : n) : void 0
        },position: function() {
            if (this[0]) {
                var t, e, i = {top: 0,left: 0}, n = this[0];
                return "fixed" === re.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (i = t.offset()), i.top += re.css(t[0], "borderTopWidth", !0), i.left += re.css(t[0], "borderLeftWidth", !0)), {top: e.top - i.top - re.css(n, "marginTop", !0),left: e.left - i.left - re.css(n, "marginLeft", !0)}
            }
        },offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || rn; t && !re.nodeName(t, "html") && "static" === re.css(t, "position"); )
                    t = t.offsetParent;
                return t || rn
            })
        }}), re.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(t, e) {
        var i = /Y/.test(e);
        re.fn[t] = function(n) {
            return De(this, function(t, n, r) {
                var s = Y(t);
                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void (s ? s.scrollTo(i ? re(s).scrollLeft() : r, i ? r : re(s).scrollTop()) : t[n] = r)
            }, t, n, arguments.length, null)
        }
    }), re.each(["top", "left"], function(t, e) {
        re.cssHooks[e] = C(ie.pixelPosition, function(t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? re(t).position()[e] + "px" : i) : void 0
        })
    }), re.each({Height: "height",Width: "width"}, function(t, e) {
        re.each({padding: "inner" + t,content: e,"": "outer" + t}, function(i, n) {
            re.fn[n] = function(n, r) {
                var s = arguments.length && (i || "boolean" != typeof n), o = i || (n === !0 || r === !0 ? "margin" : "border");
                return De(this, function(e, i, n) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? re.css(e, i, o) : re.style(e, i, n, o)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), re.fn.size = function() {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var sn = t.jQuery, on = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = on), e && t.jQuery === re && (t.jQuery = sn), re
    }, typeof e === xe && (t.jQuery = t.$ = re), re
}), define("ieCheck", ["jquery"], function(t) {
    return {versionNumber: function() {
            var e = null, i = t("html");
            return i.hasClass("lt-ie9") && (e = 8), e
        }}
}), define("windowListener", ["jquery", "ieCheck"], function(t, e) {
    return {BREAKPOINT_MOBILE: 320,BREAKPOINT_MOBILE_WIDE: 480,BREAKPOINT_TABLET: 720,BREAKPOINT_DESKTOP: 1024,getBreakpoint: function() {
            var t = null;
            return t = Modernizr.mq("(min-width: 1024px)") ? this.BREAKPOINT_DESKTOP : Modernizr.mq("(min-width: 720px)") ? this.BREAKPOINT_TABLET : Modernizr.mq("(min-width: 480px)") ? this.BREAKPOINT_MOBILE_WIDE : 8 === e.versionNumber() ? this.BREAKPOINT_DESKTOP : this.BREAKPOINT_MOBILE
        },breakpointMobile: function() {
            return this.getBreakpoint() >= this.BREAKPOINT_MOBILE
        },breakpointMobileWide: function() {
            return this.getBreakpoint() >= this.BREAKPOINT_MOBILE_WIDE
        },breakpointTablet: function() {
            return this.getBreakpoint() >= this.BREAKPOINT_TABLET
        },breakpointDesktop: function() {
            return this.getBreakpoint() >= this.BREAKPOINT_DESKTOP
        }}
}), define("smoothScrolling", ["jquery", "windowListener"], function(t) {
    return t.easing.easeInOutQuart = function(t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    }, {scroll_speed: 500,$smoothScrollLinks: t("[data-smooth-scroll=true]"),init: function() {
            this.listeners()
        },listeners: function() {
            this.$smoothScrollLinks.on("click", t.proxy(function(e) {
                e.preventDefault();
                var i = t(e.currentTarget), n = i.attr("href"), r = i.attr("data-scroll-speed"), s = t(n).offset().top;
                this.scrollToPoint(s, r)
            }, this))
        },scrollToPoint: function(e, i) {
            var i = "undefined" == typeof i ? this.scroll_speed : parseInt(i);
            t("html, body").animate({scrollTop: 0 + e}, i, "easeInOutQuart")
        }}
}), define("menu", ["jquery", "windowListener"], function(t) {
    return {$navTrigger: t(".nav-trigger"),$body: t("body"),init: function() {
            this.listeners()
        },listeners: function() {
            this.$navTrigger.on("click", t.proxy(function(e) {
                e.preventDefault();
                t(e.currentTarget);
                this.$body.toggleClass("menu-open").addClass("transitioning"), this.$body.removeClass("video-modal").find(".asset-video").removeClass("reveal-video"), this.menuOpenPanelPosition(), this.changeMenuBtnText()
            }, this)), t(".content-container").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", t.proxy(function(e) {
                t(e.target).is(t(".content-container")) && this.$body.toggleClass("transition-end").removeClass("transitioning")
            }, this))
        },changeMenuBtnText: function() {
            var e = t(".nav-trigger-icon span");
            e.text("Open menu" == e.text() ? "Close menu" : "Open menu")
        },menuOpenPanelPosition: function() {
            var e = t(".waypoint-display .asset.stuck").last();
            if (e.length)
                var i = e.closest(".sticky-section"), n = t(window).scrollTop() - i.offset().top;
            if (this.$body.hasClass("menu-open")) {
                var r = e.clone().addClass("cloned-asset").css("top", n);
                r.insertAfter(e.parent())
            } else
                var s = setInterval(t.proxy(function() {
                    this.$body.hasClass("transition-end") || (t(".cloned-asset").remove(), clearInterval(s))
                }, this), 30)
        }}
}), define("filter", ["jquery"], function(t) {
    return {$filterTrigger: null,init: function() {
            this.$filterTrigger = t(".filter-title"), this.filterClick()
        },filterClick: function() {
            Drupal.behaviors.filter = {attach: function() {
                    t(".views-exposed-form .form-item").on("click", t.proxy(function() {
                        t(".view-filters").slideUp(), t(".filter-title").text("Open filter")
                    }, this))
                }}, t(".views-exposed-form .form-item").on("click", t.proxy(function(e) {
                t(e.currentTarget);
                t(".view-filters").slideUp(), t(".filter-title").text("Open filter")
            }, this)), this.$filterTrigger.on("click", t.proxy(function(e) {
                var i = t(e.currentTarget);
                t(".view-filters").slideToggle(), i.text("Open filter" == i.text() ? "Close filter" : "Open filter")
            }, this))
        }}
}), define("deviceGallery", ["jquery", "windowListener"], function(t) {
    return {$deviceBtn: t(".device-btn"),myInterval: "",init: function() {
            this.listeners(), this.projectSlideshow()
        },listeners: function() {
            this.$deviceBtn.on("click", t.proxy(function(e) {
                var i = t(e.currentTarget), n = i.attr("data-device");
                i.addClass("active").siblings().removeClass("active"), this.setDevice(n)
            }, this))
        },setDevice: function(e) {
            t(".gallery-grid").removeClass("large medium small").addClass(e)
        },projectSlideshow: function() {
            t(".slide-show-container > div:gt(0)").hide(), t(".project-slide-show > a").on({mouseenter: function() {
                    this.myInterval = setInterval(function() {
                        t(".slide-show-container > div:first-child").fadeOut(400).next().fadeIn(400).end().appendTo(".slide-show-container")
                    }, 1e3)
                },mouseleave: function() {
                    clearInterval(this.myInterval)
                }})
        }}
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, r = function(t, e, n) {
            i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
        }, s = 1e-10, o = i._internals, a = o.isSelector, l = o.isArray, u = r.prototype = i.to({}, .1, {}), h = [];
        r.version = "1.14.1", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, u.updateTo = function(t, e) {
            var n, r = this.ratio;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t)
                this.vars[n] = t[n];
            if (this._initted)
                if (e)
                    this._initted = !1;
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var s = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                } else if (this._time > 0) {
                    this._initted = !1, this._init();
                    for (var o, a = 1 / (1 - r), l = this._firstPT; l; )
                        o = l.s + l.c, l.c *= a, l.s = o - l.c, l = l._next
                }
            return this
        }, u.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, a, l, u, c, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, _ = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
            if (t >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === s) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === v && y > 0 && y !== s) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (u = this._time / v, c = this._easeType, f = this._easePower, (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : .5 > this._time / v ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle)
                return void (_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)
                    return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                    return this._time = m, this._totalTime = _, this._rawPrevTime = y, this._cycle = g, o.lazyTweens.push(this), void (this._lazy = [t, e]);
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), a = this._firstPT; a; )
                a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== _ || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || h), 0 === v && this._rawPrevTime === s && p !== s && (this._rawPrevTime = 0))
        }, r.to = function(t, e, i) {
            return new r(t, e, i)
        }, r.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
        }, r.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
        }, r.staggerTo = r.allTo = function(t, e, s, o, u, c, f) {
            o = o || 0;
            var p, d, m, _, g = s.delay || 0, v = [], y = function() {
                s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), u.apply(f || this, c || h)
            };
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                d = {};
                for (_ in s)
                    d[_] = s[_];
                d.delay = g, m === p && u && (d.onComplete = y), v[m] = new r(t[m], e, d), g += o
            }
            return v
        }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
        }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
        }, r.delayedCall = function(t, e, i, n, s) {
            return new r(e, 0, {delay: t,onComplete: e,onCompleteParams: i,onCompleteScope: n,onReverseComplete: e,onReverseCompleteParams: i,onReverseCompleteScope: n,immediateRender: !1,useFrames: s,overwrite: 0})
        }, r.set = function(t, e) {
            return new r(t, 0, e)
        }, r.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var c = function(t, e) {
            for (var n = [], r = 0, s = t._first; s; )
                s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(c(s, e)), r = n.length), s = s._next;
            return n
        }, f = r.getAllTweens = function(e) {
            return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
        };
        r.killAll = function(t, i, n, r) {
            null == i && (i = !0), null == n && (n = !0);
            var s, o, a, l = f(0 != r), u = l.length, h = i && n && r;
            for (a = 0; u > a; a++)
                o = l[a], (h || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }, r.killChildTweensOf = function(t, e) {
            if (null != t) {
                var s, u, h, c, f, p = o.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                    for (c = t.length; --c > -1; )
                        r.killChildTweensOf(t[c], e);
                else {
                    s = [];
                    for (h in p)
                        for (u = p[h].target.parentNode; u; )
                            u === t && (s = s.concat(p[h].tweens)), u = u.parentNode;
                    for (f = s.length, c = 0; f > c; c++)
                        e && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                }
            }
        };
        var p = function(t, i, n, r) {
            i = i !== !1, n = n !== !1, r = r !== !1;
            for (var s, o, a = f(r), l = i && n && r, u = a.length; --u > -1; )
                o = a[u], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
        };
        return r.pauseAll = function(t, e, i) {
            p(!0, t, e, i)
        }, r.resumeAll = function(t, e, i) {
            p(!1, t, e, i)
        }, r.globalTimeScale = function(e) {
            var n = t._rootTimeline, r = i.ticker.time;
            return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, u.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, u.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, u.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, u.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, u.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, n, r = this.vars;
            for (n in r)
                i = r[n], a(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }, r = 1e-10, s = i._internals, o = s.isSelector, a = s.isArray, l = s.lazyTweens, u = s.lazyRender, h = [], c = _gsScope._gsDefine.globals, f = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }, p = function(t, e, i, n) {
            var r = t._timeline._totalTime;
            (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || h), this._forcingPlayhead && t._timeline.seek(r))
        }, d = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, m = n.prototype = new e;
        return n.version = "1.14.1", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, r) {
            var s = n.repeat && c.TweenMax || i;
            return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
        }, m.from = function(t, e, n, r) {
            return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
        }, m.fromTo = function(t, e, n, r, s) {
            var o = r.repeat && c.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
        }, m.staggerTo = function(t, e, r, s, a, l, u, h) {
            var c, p = new n({onComplete: l,onCompleteParams: u,onCompleteScope: h,smoothChildTiming: this.smoothChildTiming});
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = d(t)), s = s || 0, 0 > s && (t = d(t), t.reverse(), s *= -1), c = 0; t.length > c; c++)
                r.startAt && (r.startAt = f(r.startAt)), p.to(t[c], e, f(r), c * s);
            return this.add(p, a)
        }, m.staggerFrom = function(t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
        }, m.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
        }, m.call = function(t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }, m.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function(t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, s, o = new n(t), a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r; )
                s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
            return a.add(o, 0), o
        }, m.add = function(r, s, o, l) {
            var u, h, c, f, p, d;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && a(r)) {
                    for (o = o || "normal", l = l || 0, u = s, h = r.length, c = 0; h > c; c++)
                        a(f = r[c]) && (f = new n({tweens: f})), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += l;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, s);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (p = this, d = p.rawTime() > r._startTime; p._timeline; )
                    d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, m.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array || e && e.push && a(e)) {
                for (var i = e.length; --i > -1; )
                    this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, m._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, m.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, m.insert = m.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, m.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, m.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, m.addPause = function(t, e, i, n) {
            return this.call(p, ["{self}", e, i, n], this, t)
        }, m.removeLabel = function(t) {
            return delete this._labels[t], this
        }, m.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, m._parseTimeOrLabel = function(e, i, n, r) {
            var s;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && a(r)))
                for (s = r.length; --s > -1; )
                    r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (s = e.indexOf("="), -1 === s)
                    return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, m.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, m.stop = function() {
            return this.paused(!0)
        }, m.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }, m.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }, m.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, o, a, c, f = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, d = this._startTime, m = this._timeScale, _ = this._paused;
            if (t >= f ? (this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (c = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (c = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || c) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= p)
                    for (n = this._first; n && (o = n._next, !this._paused || _); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                else
                    for (n = this._last; n && (o = n._prev, !this._paused || _); )
                        (n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                this._onUpdate && (e || (l.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || h)))
            }
        }, m._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof n && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }, m.getChildren = function(t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], o = this._first, a = 0; o; )
                r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
            return s
        }, m.getTweensOf = function(t, e) {
            var n, r, s = this._gc, o = [], a = 0;
            for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1; )
                (n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
            return s && this._enabled(!1, !0), o
        }, m.recent = function() {
            return this._recent
        }, m._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }, m.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
                r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)
                for (n in s)
                    s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }, m._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                i[n]._kill(t, e) && (r = !0);
            return r
        }, m.clear = function(t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, m.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, m._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, m.totalTime = function() {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, m.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, m.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                        e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, m.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }, m.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var n = function(e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, r = 1e-10, s = [], o = e._internals, a = o.lazyTweens, l = o.lazyRender, u = new i(null, null, 1, 0), h = n.prototype = new t;
        return h.constructor = n, h.kill()._gc = !1, n.version = "1.14.1", h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, h.addCallback = function(t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }, h.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; )
                        i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, h.tweenTo = function(t, i) {
            i = i || {};
            var n, r, o, a = {ease: u,overwrite: i.delay ? 2 : 1,useFrames: this.usesFrames(),immediateRender: !1};
            for (r in i)
                a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function() {
                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
            }, o
        }, h.tweenFromTo = function(t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {onComplete: this.seek,onCompleteParams: [t],onCompleteScope: this}, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, u, h, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, m = this._time, _ = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, T = this._paused, w = this._cycle;
            if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (c = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (c = !0))) : (0 === d && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = d + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                var b = this._yoyo && 0 !== (1 & w), x = b === (this._yoyo && 0 !== (1 & this._cycle)), P = this._totalTime, S = this._cycle, C = this._rawPrevTime, k = this._time;
                if (this._totalTime = w * d, w > this._cycle ? b = !b : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = b ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), x && (m = b ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T)
                    return;
                this._time = k, this._totalTime = P, this._cycle = S, this._rawPrevTime = C
            }
            if (!(this._time !== m && this._first || i || c))
                return void (_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)
                for (n = this._first; n && (u = n._next, !this._paused || T); )
                    (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
            else
                for (n = this._last; n && (u = n._prev, !this._paused || T); )
                    (n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
            this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), h && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)))
        }, h.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; l > n; n++)
                r = o[n], r.isActive() && (s[a++] = r);
            return s
        }, h.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }, h.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }, h.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {time: this._labels[t],name: t};
            return e.sort(function(t, e) {
                return t.time - e.time
            }), e
        }, h.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, h.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, h.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, h.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, h.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), function() {
        var t = 180 / Math.PI, e = [], i = [], n = [], r = {}, s = function(t, e, i, n) {
            this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
        }, o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", a = function(t, e, i, n) {
            var r = {a: t}, s = {}, o = {}, a = {c: n}, l = (t + e) / 2, u = (e + i) / 2, h = (i + n) / 2, c = (l + u) / 2, f = (u + h) / 2, p = (f - c) / 8;
            return r.b = l + (t - l) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (c + f) / 2, o.b = f - p, a.b = h + (n - h) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
        }, l = function(t, r, s, o, l) {
            var u, h, c, f, p, d, m, _, g, v, y, T, w, b = t.length - 1, x = 0, P = t[0].a;
            for (u = 0; b > u; u++)
                p = t[x], h = p.a, c = p.d, f = t[x + 1].d, l ? (y = e[u], T = i[u], w = .25 * (T + y) * r / (o ? .5 : n[u] || .5), d = c - (c - h) * (o ? .5 * r : 0 !== y ? w / y : 0), m = c + (f - c) * (o ? .5 * r : 0 !== T ? w / T : 0), _ = c - (d + ((m - d) * (3 * y / (y + T) + .5) / 4 || 0))) : (d = c - .5 * (c - h) * r, m = c + .5 * (f - c) * r, _ = c - (d + m) / 2), d += _, m += _, p.c = g = d, p.b = 0 !== u ? P : P = p.a + .6 * (p.c - p.a), p.da = c - h, p.ca = g - h, p.ba = P - h, s ? (v = a(h, P, g, c), t.splice(x, 1, v[0], v[1], v[2], v[3]), x += 4) : x++, P = m;
            p = t[x], p.b = P, p.c = P + .4 * (p.d - P), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = P - p.a, s && (v = a(p.a, P, p.c, p.d), t.splice(x, 1, v[0], v[1], v[2], v[3]))
        }, u = function(t, n, r, o) {
            var a, l, u, h, c, f, p = [];
            if (o)
                for (t = [o].concat(t), l = t.length; --l > -1; )
                    "string" == typeof (f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
            if (a = t.length - 2, 0 > a)
                return p[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
            for (l = 0; a > l; l++)
                u = t[l][n], h = t[l + 1][n], p[l] = new s(u, 0, 0, h), r && (c = t[l + 2][n], e[l] = (e[l] || 0) + (h - u) * (h - u), i[l] = (i[l] || 0) + (c - h) * (c - h));
            return p[l] = new s(t[l][n], 0, 0, t[l + 1][n]), p
        }, h = function(t, s, a, h, c, f) {
            var p, d, m, _, g, v, y, T, w = {}, b = [], x = f || t[0];
            c = "string" == typeof c ? "," + c + "," : o, null == s && (s = 1);
            for (d in t[0])
                b.push(d);
            if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, p = b.length; --p > -1; )
                    if (d = b[p], Math.abs(x[d] - T[d]) > .05) {
                        y = !1;
                        break
                    }
                y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0, p = b.length; --p > -1; )
                d = b[p], r[d] = -1 !== c.indexOf("," + d + ","), w[d] = u(t, d, r[d], f);
            for (p = e.length; --p > -1; )
                e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
            if (!h) {
                for (p = b.length; --p > -1; )
                    if (r[d])
                        for (m = w[b[p]], v = m.length - 1, _ = 0; v > _; _++)
                            g = m[_ + 1].da / i[_] + m[_].da / e[_], n[_] = (n[_] || 0) + g * g;
                for (p = n.length; --p > -1; )
                    n[p] = Math.sqrt(n[p])
            }
            for (p = b.length, _ = a ? 4 : 1; --p > -1; )
                d = b[p], m = w[d], l(m, s, a, h, r[d]), y && (m.splice(0, _), m.splice(m.length - _, _));
            return w
        }, c = function(t, e, i) {
            e = e || "soft";
            var n, r, o, a, l, u, h, c, f, p, d, m = {}, _ = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)), null == t || _ + 1 > t.length)
                throw "invalid Bezier data";
            for (f in t[0])
                v.push(f);
            for (u = v.length; --u > -1; ) {
                for (f = v[u], m[f] = l = [], p = 0, c = t.length, h = 0; c > h; h++)
                    n = null == i ? t[h][f] : "string" == typeof (d = t[h][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && h > 1 && c - 1 > h && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                for (c = p - _ + 1, p = 0, h = 0; c > h; h += _)
                    n = l[h], r = l[h + 1], o = l[h + 2], a = 2 === _ ? 0 : l[h + 3], l[p++] = d = 3 === _ ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                l.length = p
            }
            return m
        }, f = function(t, e, i) {
            for (var n, r, s, o, a, l, u, h, c, f, p, d = 1 / i, m = t.length; --m > -1; )
                for (f = t[m], s = f.a, o = f.d - s, a = f.c - s, l = f.b - s, n = r = 0, h = 1; i >= h; h++)
                    u = d * h, c = 1 - u, n = r - (r = (u * u * o + 3 * c * (u * a + c * l)) * u), p = m * i + h - 1, e[p] = (e[p] || 0) + n * n
        }, p = function(t, e) {
            e = e >> 0 || 6;
            var i, n, r, s, o = [], a = [], l = 0, u = 0, h = e - 1, c = [], p = [];
            for (i in t)
                f(t[i], o, e);
            for (r = o.length, n = 0; r > n; n++)
                l += Math.sqrt(o[n]), s = n % e, p[s] = l, s === h && (u += l, s = n / e >> 0, c[s] = p, a[s] = u, l = 0, p = []);
            return {length: u,lengths: a,segments: c}
        }, d = _gsScope._gsDefine.plugin({propName: "bezier",priority: -1,version: "1.3.3",API: 2,global: !0,init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, r, s, o, a, l = e.values || [], u = {}, f = l[0], d = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]] : null;
                for (n in f)
                    this._props.push(n);
                for (s = this._props.length; --s > -1; )
                    n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : c(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                    var m = p(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate)
                    for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1; ) {
                        for (o = 0; 3 > o; o++)
                            n = d[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                        n = d[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },set: function(e) {
                var i, n, r, s, o, a, l, u, h, c, f = this._segCount, p = this._func, d = this._target, m = e !== this._startRatio;
                if (this._timeRes) {
                    if (h = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                        for (u = f - 1; u > r && e >= (this._l2 = h[++r]); )
                            ;
                        this._l1 = h[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                    } else if (this._l1 > e && r > 0) {
                        for (; r > 0 && (this._l1 = h[--r]) >= e; )
                            ;
                        0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && c.length - 1 > r) {
                        for (u = c.length - 1; u > r && e >= (this._s2 = c[++r]); )
                            ;
                        this._s1 = c[r - 1], this._si = r
                    } else if (this._s1 > e && r > 0) {
                        for (; r > 0 && (this._s1 = c[--r]) >= e; )
                            ;
                        0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                    }
                    a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else
                    i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                for (n = 1 - a, r = this._props.length; --r > -1; )
                    s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), p[s] ? d[s](l) : d[s] = l;
                if (this._autoRotate) {
                    var _, g, v, y, T, w, b, x = this._autoRotate;
                    for (r = x.length; --r > -1; )
                        s = x[r][2], w = x[r][3] || 0, b = x[r][4] === !0 ? 1 : t, o = this._beziers[x[r][0]], _ = this._beziers[x[r][1]], o && _ && (o = o[i], _ = _[i], g = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, g += (y - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = _.a + (_.b - _.a) * a, T = _.b + (_.c - _.b) * a, v += (T - v) * a, T += (_.c + (_.d - _.c) * a - T) * a, l = m ? Math.atan2(T - v, y - g) * b + w : this._initialRotations[r], p[s] ? d[s](l) : d[s] = l)
                }
            }}), m = d.prototype;
        d.bezierThrough = h, d.cubicToQuadratic = a, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) {
            return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, d._cssRegister = function() {
            var t = _gsScope._gsDefine.globals.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {parser: function(t, e, s, o, a, l) {
                        e instanceof Array && (e = {values: e}), l = new d;
                        var u, h, c, f = e.values, p = f.length - 1, m = [], _ = {};
                        if (0 > p)
                            return a;
                        for (u = 0; p >= u; u++)
                            c = i(t, f[u], o, a, l, p !== u), m[u] = c.end;
                        for (h in e)
                            _[h] = e[h];
                        return _.values = m, a = new r(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = n, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (u = _.autoRotate === !0 ? 0 : Number(_.autoRotate), _.autoRotate = null != c.end.left ? [["left", "top", "rotation", u, !1]] : null != c.end.x ? [["x", "y", "rotation", u, !1]] : !1), _.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), l._onInitTween(c.proxy, _, o._tween), a
                    }})
            }
        }, m._roundProps = function(t, e) {
            for (var i = this._overwriteProps, n = i.length; --n > -1; )
                (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
        }, m._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1; )
                        n[i] === e && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, n, r, s, o = function() {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
        }, a = {}, l = o.prototype = new t("css");
        l.constructor = o, o.version = "1.14.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", l = "px", o.suffixMap = {top: l,right: l,bottom: l,left: l,width: l,height: l,fontSize: l,padding: l,margin: l,perspective: l,lineHeight: ""};
        var u, h, c, f, p, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, v = /[^\d\-\.]/g, y = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, b = /alpha\(opacity *=.+?\)/i, x = /^(rgb|hsl)/, P = /([A-Z])/g, S = /-([a-z])/gi, C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, k = function(t, e) {
            return e.toUpperCase()
        }, A = /(?:Left|Right|Width)/i, D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, E = /,(?=[^\)]*(?:\(|$))/gi, O = Math.PI / 180, N = 180 / Math.PI, L = {}, M = document, F = (M.documentElement, M.createElement("div")), I = M.createElement("img"), z = o._internals = {_specialProps: a}, j = navigator.userAgent, B = function() {
            var t, e = j.indexOf("Android"), i = M.createElement("div");
            return c = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === e || Number(j.substr(e + 8, 1)) > 3), p = c && 6 > Number(j.substr(j.indexOf("Version/") + 8, 1)), f = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (d = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
        }(), q = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, H = function(t) {
            window.console && console.log(t)
        }, W = "", X = "", U = function(t, e) {
            e = e || F;
            var i, n, r = e.style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t]; )
                ;
            return n >= 0 ? (X = 3 === n ? "ms" : i[n], W = "-" + X.toLowerCase() + "-", X + t) : null
        }, $ = M.defaultView ? M.defaultView.getComputedStyle : function() {
        }, Y = o.getStyle = function(t, e, i, n, r) {
            var s;
            return B || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || $(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : q(t)
        }, G = z.convertToPixels = function(t, i, n, r, s) {
            if ("px" === r || !r)
                return n;
            if ("auto" === r || !n)
                return 0;
            var a, l, u, h = A.test(i), c = t, f = F.style, p = 0 > n;
            if (p && (n = -n), "%" === r && -1 !== i.indexOf("border"))
                a = n / 100 * (h ? t.clientWidth : t.clientHeight);
            else {
                if (f.cssText = "border:0 solid red;position:" + Y(t, "position") + ";line-height:0;", "%" !== r && c.appendChild)
                    f[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                else {
                    if (c = t.parentNode || M.body, l = c._gsCache, u = e.ticker.frame, l && h && l.time === u)
                        return l.width * n / 100;
                    f[h ? "width" : "height"] = n + r
                }
                c.appendChild(F), a = parseFloat(F[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(F), h && "%" === r && o.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = u, l.width = 100 * (a / n)), 0 !== a || s || (a = G(t, i, n, r, !0))
            }
            return p ? -a : a
        }, V = z.calculateOffset = function(t, e, i) {
            if ("absolute" !== Y(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top", r = Y(t, "margin" + n, i);
            return t["offset" + n] - (G(t, e, parseFloat(r), r.replace(y, "")) || 0)
        }, Q = function(t, e) {
            var i, n, r = {};
            if (e = e || $(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        r[e[i].replace(S, k)] = e.getPropertyValue(e[i]);
                else
                    for (i in e)
                        r[i] = e[i];
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === r[i] && (r[i.replace(S, k)] = e[i]);
            return B || (r.opacity = q(t)), n = ke(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, be && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
        }, K = function(t, e, i, n, r) {
            var s, o, a, l = {}, u = t.style;
            for (o in i)
                "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(v, "") ? s : 0 : V(t, o), void 0 !== u[o] && (a = new ce(u, o, u[o], a)));
            if (n)
                for (o in n)
                    "className" !== o && (l[o] = n[o]);
            return {difs: l,firstMPT: a}
        }, Z = {width: ["Left", "Right"],height: ["Top", "Bottom"]}, J = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function(t, e, i) {
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = Z[e], s = r.length;
            for (i = i || $(t, null); --s > -1; )
                n -= parseFloat(Y(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Y(t, "border" + r[s] + "Width", i, !0)) || 0;
            return n
        }, ee = function(t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
        }, ie = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, ne = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, re = function(t, e, i, n) {
            var r, s, o, a, l = 1e-6;
            return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), o = Number(s[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : N) - ("=" === t.charAt(1) ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (0 | o / r) * r)), a = e + o), l > a && a > -l && (a = 0), a
        }, se = {aqua: [0, 255, 255],lime: [0, 255, 0],silver: [192, 192, 192],black: [0, 0, 0],maroon: [128, 0, 0],teal: [0, 128, 128],blue: [0, 0, 255],navy: [0, 0, 128],white: [255, 255, 255],fuchsia: [255, 0, 255],olive: [128, 128, 0],yellow: [255, 255, 0],orange: [255, 165, 0],gray: [128, 128, 128],purple: [128, 0, 128],green: [0, 128, 0],red: [255, 0, 0],pink: [255, 192, 203],cyan: [0, 255, 255],transparent: [255, 255, 255, 0]}, oe = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, ae = function(t) {
            var e, i, n, r, s, o;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), se[t] ? se[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = oe(r + 1 / 3, e, i), t[1] = oe(r, e, i), t[2] = oe(r - 1 / 3, e, i), t) : (t = t.match(m) || se.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : se.black
        }, le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in se)
            le += "|" + l + "\\b";
        le = RegExp(le + ")", "gi");
        var ue = function(t, e, i, n) {
            if (null == t)
                return function(t) {
                    return t
                };
            var r, s = e ? (t.match(le) || [""])[0] : "", o = t.split(s).join("").match(g) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", u = -1 !== t.indexOf(" ") ? " " : ",", h = o.length, c = h > 0 ? o[0].replace(m, "") : "";
            return h ? r = e ? function(t) {
                var e, f, p, d;
                if ("number" == typeof t)
                    t += c;
                else if (n && E.test(t)) {
                    for (d = t.replace(E, "|").split("|"), p = 0; d.length > p; p++)
                        d[p] = r(d[p]);
                    return d.join(",")
                }
                if (e = (t.match(le) || [s])[0], f = t.split(e).join("").match(g) || [], p = f.length, h > p--)
                    for (; h > ++p; )
                        f[p] = i ? f[0 | (p - 1) / 2] : o[p];
                return a + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function(t) {
                var e, s, f;
                if ("number" == typeof t)
                    t += c;
                else if (n && E.test(t)) {
                    for (s = t.replace(E, "|").split("|"), f = 0; s.length > f; f++)
                        s[f] = r(s[f]);
                    return s.join(",")
                }
                if (e = t.match(g) || [], f = e.length, h > f--)
                    for (; h > ++f; )
                        e[f] = i ? e[0 | (f - 1) / 2] : o[f];
                return a + e.join(u) + l
            } : function(t) {
                return t
            }
        }, he = function(t) {
            return t = t.split(","), function(e, i, n, r, s, o, a) {
                var l, u = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++)
                    a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                return r.parse(e, a, s, o)
            }
        }, ce = (z._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a; )
                e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
            if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)
                for (a = s.firstMPT; a; ) {
                    if (i = a.t, i.type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++)
                                r += i["xn" + n] + i["xs" + (n + 1)];
                            i.e = r
                        }
                    } else
                        i.e = i.s + i.xs0;
                    a = a._next
                }
        }, function(t, e, i, n, r) {
            this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
        }), fe = (z._parseToProxy = function(t, e, i, n, r, s) {
            var o, a, l, u, h, c = n, f = {}, p = {}, d = i._transform, m = L;
            for (i._transform = null, L = e, n = h = i.parse(t, e, n, r), L = m, s && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c; ) {
                if (1 >= n.type && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, s || (u = new ce(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                    for (o = n.l; --o > 0; )
                        l = "xn" + o, a = n.p + "_" + l, p[a] = n.data[l], f[a] = n[l], s || (u = new ce(n, l, a, u, n.rxp[l]));
                n = n._next
            }
            return {proxy: f,end: p,firstMPT: u,pt: h}
        }, z.CSSPropTween = function(t, e, n, r, o, a, l, u, h, c, f) {
            this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof fe || s.push(this.n), this.r = u, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === f ? n + r : f, o && (this._next = o, o._prev = this)
        }), pe = o.parseComplex = function(t, e, i, n, r, s, o, a, l, h) {
            i = i || s || "", o = new fe(t, e, 0, 0, o, h ? 2 : 1, null, !1, a, i, n), n += "";
            var c, f, p, d, g, v, y, T, w, b, P, S, C = i.split(", ").join(",").split(" "), k = n.split(", ").join(",").split(" "), A = C.length, D = u !== !1;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(E, ", ").split(" "), k = k.join(" ").replace(E, ", ").split(" "), A = C.length), A !== k.length && (C = (s || "").split(" "), A = C.length), o.plugin = l, o.setRatio = h, c = 0; A > c; c++)
                if (d = C[c], g = k[c], T = parseFloat(d), T || 0 === T)
                    o.appendXtra("", T, ie(g, T), g.replace(_, ""), D && -1 !== g.indexOf("px"), !0);
                else if (r && ("#" === d.charAt(0) || se[d] || x.test(d)))
                    S = "," === g.charAt(g.length - 1) ? ")," : ")", d = ae(d), g = ae(g), w = d.length + g.length > 6, w && !B && 0 === g[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[c]).join("transparent")) : (B || (w = !1), o.appendXtra(w ? "rgba(" : "rgb(", d[0], g[0] - d[0], ",", !0, !0).appendXtra("", d[1], g[1] - d[1], ",", !0).appendXtra("", d[2], g[2] - d[2], w ? "," : S, !0), w && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > g.length ? 1 : g[3]) - d, S, !1)));
                else if (v = d.match(m)) {
                    if (y = g.match(_), !y || y.length !== v.length)
                        return o;
                    for (p = 0, f = 0; v.length > f; f++)
                        P = v[f], b = d.indexOf(P, p), o.appendXtra(d.substr(p, b - p), Number(P), ie(y[f], P), "", D && "px" === d.substr(b + P.length, 2), 0 === f), p = b + P.length;
                    o["xs" + o.l] += d.substr(p)
                } else
                    o["xs" + o.l] += o.l ? " " + d : d;
            if (-1 !== n.indexOf("=") && o.data) {
                for (S = o.xs0 + o.data.s, c = 1; o.l > c; c++)
                    S += o["xs" + c] + o.data["xn" + c];
                o.e = S + o["xs" + c]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, de = 9;
        for (l = fe.prototype, l.l = l.pr = 0; --de > 0; )
            l["xn" + de] = 0, l["xs" + de] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, n, r, s) {
            var o = this, a = o.l;
            return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new fe(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
        };
        var me = function(t, e) {
            e = e || {}, this.p = e.prefix ? U(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, _e = z._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, r, s = t.split(","), o = e.defaultValue;
            for (i = i || [o], n = 0; s.length > n; n++)
                e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new me(s[n], e)
        }, ge = function(t) {
            if (!a[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                _e(t, {parser: function(t, i, n, r, s, o, l) {
                        var u = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                        return u ? (u._cssRegister(), a[n].parse(t, i, n, r, s, o, l)) : (H("Error: " + e + " js file not loaded."), s)
                    }})
            }
        };
        l = me.prototype, l.parseComplex = function(t, e, i, n, r, s) {
            var o, a, l, u, h, c, f = this.keyword;
            if (this.multi && (E.test(i) || E.test(e) ? (a = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : f && (a = [e], l = [i])), l) {
                for (u = l.length > a.length ? l.length : a.length, o = 0; u > o; o++)
                    e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, f && (h = e.indexOf(f), c = i.indexOf(f), h !== c && (i = -1 === c ? l : a, i[o] += " " + f));
                e = a.join(", "), i = l.join(", ")
            }
            return pe(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }, l.parse = function(t, e, i, n, s, o) {
            return this.parseComplex(t.style, this.format(Y(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
        }, o.registerSpecialProp = function(t, e, i) {
            _e(t, {parser: function(t, n, r, s, o, a) {
                    var l = new fe(t, r, 0, 0, o, 2, r, !1, i);
                    return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l
                },priority: i})
        };
        var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), ye = U("transform"), Te = W + "transform", we = U("transformOrigin"), be = null !== U("perspective"), xe = z.Transform = function() {
            this.skewY = 0
        }, Pe = window.SVGElement, Se = Pe && (d || /Android/i.test(j) && !window.chrome), Ce = function(t, e, i) {
            var n = t.getBBox();
            e = ee(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
        }, ke = z.getTransform = function(t, e, i, n) {
            if (t._gsTransform && i && !n)
                return t._gsTransform;
            var s, a, l, u, h, c, f, p, d, m, _, g, v, y = i ? t._gsTransform || new xe : new xe, T = 0 > y.scaleX, w = 2e-5, b = 1e5, x = 179.99, P = x * O, S = be ? parseFloat(Y(t, we, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0, C = parseFloat(o.defaultTransformPerspective) || 0;
            if (ye ? s = Y(t, Te, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(D), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), s && "none" !== s && "matrix(1, 0, 0, 1, 0, 0)" !== s) {
                for (a = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = a.length; --l > -1; )
                    u = Number(a[l]), a[l] = (h = u - (u |= 0)) ? (0 | h * b + (0 > h ? -.5 : .5)) / b + u : u;
                if (16 === a.length) {
                    var k = a[8], A = a[9], R = a[10], E = a[12], L = a[13], M = a[14];
                    if (y.zOrigin && (M = -y.zOrigin, E = k * M - a[12], L = A * M - a[13], M = R * M + y.zOrigin - a[14]), !i || n || null == y.rotationX) {
                        var F, I, z, j, B, q, H, W = a[0], X = a[1], U = a[2], $ = a[3], G = a[4], V = a[5], Q = a[6], K = a[7], Z = a[11], J = Math.atan2(Q, R), te = -P > J || J > P;
                        y.rotationX = J * N, J && (j = Math.cos(-J), B = Math.sin(-J), F = G * j + k * B, I = V * j + A * B, z = Q * j + R * B, k = G * -B + k * j, A = V * -B + A * j, R = Q * -B + R * j, Z = K * -B + Z * j, G = F, V = I, Q = z), J = Math.atan2(k, W), y.rotationY = J * N, J && (q = -P > J || J > P, j = Math.cos(-J), B = Math.sin(-J), F = W * j - k * B, I = X * j - A * B, z = U * j - R * B, A = X * B + A * j, R = U * B + R * j, Z = $ * B + Z * j, W = F, X = I, U = z), J = Math.atan2(X, V), y.rotation = J * N, J && (H = -P > J || J > P, j = Math.cos(-J), B = Math.sin(-J), W = W * j + G * B, I = X * j + V * B, V = X * -B + V * j, Q = U * -B + Q * j, X = I), H && te ? y.rotation = y.rotationX = 0 : H && q ? y.rotation = y.rotationY = 0 : q && te && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(W * W + X * X) * b + .5) / b, y.scaleY = (0 | Math.sqrt(V * V + A * A) * b + .5) / b, y.scaleZ = (0 | Math.sqrt(Q * Q + R * R) * b + .5) / b, y.skewX = 0, y.perspective = Z ? 1 / (0 > Z ? -Z : Z) : 0, y.x = E, y.y = L, y.z = M
                    }
                } else if (!(be && !n && a.length && y.x === a[4] && y.y === a[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === Y(t, "display", e))) {
                    var ee = a.length >= 6, ie = ee ? a[0] : 1, ne = a[1] || 0, re = a[2] || 0, se = ee ? a[3] : 1;
                    y.x = a[4] || 0, y.y = a[5] || 0, c = Math.sqrt(ie * ie + ne * ne), f = Math.sqrt(se * se + re * re), p = ie || ne ? Math.atan2(ne, ie) * N : y.rotation || 0, d = re || se ? Math.atan2(re, se) * N + p : y.skewX || 0, m = c - Math.abs(y.scaleX || 0), _ = f - Math.abs(y.scaleY || 0), Math.abs(d) > 90 && 270 > Math.abs(d) && (T ? (c *= -1, d += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (f *= -1, d += 0 >= d ? 180 : -180)), g = (p - y.rotation) % 180, v = (d - y.skewX) % 180, (void 0 === y.skewX || m > w || -w > m || _ > w || -w > _ || g > -x && x > g && !1 | g * b || v > -x && x > v && !1 | v * b) && (y.scaleX = c, y.scaleY = f, y.rotation = p, y.skewX = d), be && (y.rotationX = y.rotationY = y.z = 0, y.perspective = C, y.scaleZ = 1)
                }
                y.zOrigin = S;
                for (l in y)
                    w > y[l] && y[l] > -w && (y[l] = 0)
            } else
                y = {x: 0,y: 0,z: 0,scaleX: 1,scaleY: 1,scaleZ: 1,skewX: 0,skewY: 0,perspective: C,rotation: 0,rotationX: 0,rotationY: 0,zOrigin: 0};
            return i && (t._gsTransform = y), y.svg = Pe && t instanceof Pe, y.svg && Ce(t, Y(t, we, r, !1, "50% 50%") + "", y), y.xPercent = y.yPercent = 0, y
        }, Ae = function(t) {
            var e, i, n = this.data, r = -n.rotation * O, s = r + n.skewX * O, o = 1e5, a = (0 | Math.cos(r) * n.scaleX * o) / o, l = (0 | Math.sin(r) * n.scaleX * o) / o, u = (0 | Math.sin(s) * -n.scaleY * o) / o, h = (0 | Math.cos(s) * n.scaleY * o) / o, c = this.t.style, f = this.t.currentStyle;
            if (f) {
                i = l, l = -u, u = -i, e = f.filter, c.filter = "";
                var p, m, _ = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== f.position, w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h, b = n.x + _ * n.xPercent / 100, x = n.y + g * n.yPercent / 100;
                if (null != n.ox && (p = (n.oxp ? .01 * _ * n.ox : n.ox) - _ / 2, m = (n.oyp ? .01 * g * n.oy : n.oy) - g / 2, b += p - (p * a + m * l), x += m - (p * u + m * h)), v ? (p = _ / 2, m = g / 2, w += ", Dx=" + (p - (p * a + m * l) + b) + ", Dy=" + (m - (p * u + m * h) + x) + ")") : w += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(R, w) : w + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                    var P, S, C, k = 8 > d ? 1 : -1;
                    for (p = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((_ - ((0 > a ? -a : a) * _ + (0 > l ? -l : l) * g)) / 2 + b), n.ieOffsetY = Math.round((g - ((0 > h ? -h : h) * g + (0 > u ? -u : u) * _)) / 2 + x), de = 0; 4 > de; de++)
                        S = J[de], P = f[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : G(this.t, S, parseFloat(P), P.replace(y, "")) || 0, C = i !== n[S] ? 2 > de ? -n.ieOffsetX : -n.ieOffsetY : 2 > de ? p - n.ieOffsetX : m - n.ieOffsetY, c[S] = (n[S] = Math.round(i - C * (0 === de || 2 === de ? 1 : k))) + "px"
                }
            }
        }, De = z.set3DTransformRatio = function(t) {
            var e, i, n, r, s, o, a, l, u, h, c, p, d, m, _, g, v, y, T, w, b, x, P, S = this.data, C = this.t.style, k = S.rotation * O, A = S.scaleX, D = S.scaleY, R = S.scaleZ, E = S.x, N = S.y, L = S.z, M = S.perspective;
            if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== R || M || L))
                return void Re.call(this, t);
            if (f) {
                var F = 1e-4;
                F > A && A > -F && (A = R = 2e-5), F > D && D > -F && (D = R = 2e-5), !M || S.z || S.rotationX || S.rotationY || (M = 0)
            }
            if (k || S.skewX)
                y = Math.cos(k), T = Math.sin(k), e = y, s = T, S.skewX && (k -= S.skewX * O, y = Math.cos(k), T = Math.sin(k), "simple" === S.skewType && (w = Math.tan(S.skewX * O), w = Math.sqrt(1 + w * w), y *= w, T *= w)), i = -T, o = y;
            else {
                if (!(S.rotationY || S.rotationX || 1 !== R || M || S.svg))
                    return void (C[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + N + "px," + L + "px)" + (1 !== A || 1 !== D ? " scale(" + A + "," + D + ")" : ""));
                e = o = 1, i = s = 0
            }
            c = 1, n = r = a = l = u = h = p = d = m = 0, _ = M ? -1 / M : 0, g = S.zOrigin, v = 1e5, k = S.rotationY * O, k && (y = Math.cos(k), T = Math.sin(k), u = c * -T, d = _ * -T, n = e * T, a = s * T, c *= y, _ *= y, e *= y, s *= y), k = S.rotationX * O, k && (y = Math.cos(k), T = Math.sin(k), w = i * y + n * T, b = o * y + a * T, x = h * y + c * T, P = m * y + _ * T, n = i * -T + n * y, a = o * -T + a * y, c = h * -T + c * y, _ = m * -T + _ * y, i = w, o = b, h = x, m = P), 1 !== R && (n *= R, a *= R, c *= R, _ *= R), 1 !== D && (i *= D, o *= D, h *= D, m *= D), 1 !== A && (e *= A, s *= A, u *= A, d *= A), g && (p -= g, r = n * p, l = a * p, p = c * p + g), S.svg && (r += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), l += S.yOrigin - (S.xOrigin * s + S.yOrigin * o)), r = (w = (r += E) - (r |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + r : r, l = (w = (l += N) - (l |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + l : l, p = (w = (p += L) - (p |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + p : p, C[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * v) / v, (0 | s * v) / v, (0 | u * v) / v, (0 | d * v) / v, (0 | i * v) / v, (0 | o * v) / v, (0 | h * v) / v, (0 | m * v) / v, (0 | n * v) / v, (0 | a * v) / v, (0 | c * v) / v, (0 | _ * v) / v, r, l, p, M ? 1 + -p / M : 1].join(",") + ")"
        }, Re = z.set2DTransformRatio = function(t) {
            var e, i, n, r, s, o, a, l, u, h, c, f = this.data, p = this.t, d = p.style, m = f.x, _ = f.y;
            return !(f.rotationX || f.rotationY || f.z || f.force3D === !0 || "auto" === f.force3D && 1 !== t && 0 !== t) || f.svg && Se || !be ? (r = f.scaleX, s = f.scaleY, void (f.rotation || f.skewX || f.svg ? (e = f.rotation * O, i = e - f.skewX * O, n = 1e5, o = Math.cos(e) * r, a = Math.sin(e) * r, l = Math.sin(i) * -s, u = Math.cos(i) * s, f.svg && (m += f.xOrigin - (f.xOrigin * o + f.yOrigin * l), _ += f.yOrigin - (f.xOrigin * a + f.yOrigin * u), c = 1e-6, c > m && m > -c && (m = 0), c > _ && _ > -c && (_ = 0)), h = (0 | o * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | u * n) / n + "," + m + "," + _ + ")", f.svg && Se ? p.setAttribute("transform", "matrix(" + h) : d[ye] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(" : "matrix(") + h) : d[ye] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + s + "," + m + "," + _ + ")")) : (this.setRatio = De, void De.call(this, t))
        };
        _e("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {parser: function(t, e, i, n, s, a, l) {
                if (n._transform)
                    return s;
                var u, h, c, f, p, d, m, _ = n._transform = ke(t, r, !0, l.parseTransform), g = t.style, v = 1e-6, y = ve.length, T = l, w = {};
                if ("string" == typeof T.transform && ye)
                    c = F.style, c[ye] = T.transform, c.display = "block", c.position = "absolute", M.body.appendChild(F), u = ke(F, null, !1), M.body.removeChild(F);
                else if ("object" == typeof T) {
                    if (u = {scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, _.scaleX),scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, _.scaleY),scaleZ: ne(T.scaleZ, _.scaleZ),x: ne(T.x, _.x),y: ne(T.y, _.y),z: ne(T.z, _.z),xPercent: ne(T.xPercent, _.xPercent),yPercent: ne(T.yPercent, _.yPercent),perspective: ne(T.transformPerspective, _.perspective)}, m = T.directionalRotation, null != m)
                        if ("object" == typeof m)
                            for (c in m)
                                T[c] = m[c];
                        else
                            T.rotation = m;
                    "string" == typeof T.x && -1 !== T.x.indexOf("%") && (u.x = 0, u.xPercent = ne(T.x, _.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (u.y = 0, u.yPercent = ne(T.y, _.yPercent)), u.rotation = re("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : _.rotation, _.rotation, "rotation", w), be && (u.rotationX = re("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", w), u.rotationY = re("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", w)), u.skewX = null == T.skewX ? _.skewX : re(T.skewX, _.skewX), u.skewY = null == T.skewY ? _.skewY : re(T.skewY, _.skewY), (h = u.skewY - _.skewY) && (u.skewX += h, u.rotation += h)
                }
                for (be && null != T.force3D && (_.force3D = T.force3D, d = !0), _.skewType = T.skewType || _.skewType || o.defaultSkewType, p = _.force3D || _.z || _.rotationX || _.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == T.scale || (u.scaleZ = 1); --y > -1; )
                    i = ve[y], f = u[i] - _[i], (f > v || -v > f || null != T[i] || null != L[i]) && (d = !0, s = new fe(_, i, _[i], f, s), i in w && (s.e = w[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                return f = T.transformOrigin, f && _.svg ? (Ce(t, f, u), s = new fe(_, "xOrigin", _.xOrigin, u.xOrigin - _.xOrigin, s, -1, "transformOrigin"), s.b = _.xOrigin, s.e = s.xs0 = u.xOrigin, s = new fe(_, "yOrigin", _.yOrigin, u.yOrigin - _.yOrigin, s, -1, "transformOrigin"), s.b = _.yOrigin, s.e = s.xs0 = u.yOrigin, Oe(g, we)) : (f || be && p && _.zOrigin) && (ye ? (d = !0, i = we, f = (f || Y(t, i, r, !1, "50% 50%")) + "", s = new fe(g, i, 0, 0, s, -1, "transformOrigin"), s.b = g[i], s.plugin = a, be ? (c = _.zOrigin, f = f.split(" "), _.zOrigin = (f.length > 2 && (0 === c || "0px" !== f[2]) ? parseFloat(f[2]) : c) || 0, s.xs0 = s.e = f[0] + " " + (f[1] || "50%") + " 0px", s = new fe(_, "zOrigin", 0, 0, s, -1, s.n), s.b = c, s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = f) : ee(f + "", _)), d && (n._transformType = _.svg && Se || !p && 3 !== this._transformType ? 2 : 3), s
            },prefix: !0}), _e("boxShadow", {defaultValue: "0px 0px 0px 0px #999",prefix: !0,color: !0,multi: !0,keyword: "inset"}), _e("borderRadius", {defaultValue: "0px",parser: function(t, e, i, s, o) {
                e = this.format(e);
                var a, l, u, h, c, f, p, d, m, _, g, v, y, T, w, b, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (m = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; x.length > l; l++)
                    this.p.indexOf("border") && (x[l] = U(x[l])), c = h = Y(t, x[l], r, !1, "0px"), -1 !== c.indexOf(" ") && (h = c.split(" "), c = h[0], h = h[1]), f = u = a[l], p = parseFloat(c), v = c.substr((p + "").length), y = "=" === f.charAt(1), y ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), g = f.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(f), g = f.substr((d + "").length)), "" === g && (g = n[i] || v), g !== v && (T = G(t, "borderLeft", p, v), w = G(t, "borderTop", p, v), "%" === g ? (c = 100 * (T / m) + "%", h = 100 * (w / _) + "%") : "em" === g ? (b = G(t, "borderLeft", 1, "em"), c = T / b + "em", h = w / b + "em") : (c = T + "px", h = w + "px"), y && (f = parseFloat(c) + d + g, u = parseFloat(h) + d + g)), o = pe(P, x[l], c + " " + h, f + " " + u, !1, "0px", o);
                return o
            },prefix: !0,formatter: ue("0px 0px 0px 0px", !1, !0)}), _e("backgroundPosition", {defaultValue: "0 0",parser: function(t, e, i, n, s, o) {
                var a, l, u, h, c, f, p = "background-position", m = r || $(t, null), _ = this.format((m ? d ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && (f = Y(t, "backgroundImage").replace(C, ""), f && "none" !== f)) {
                    for (a = _.split(" "), l = g.split(" "), I.setAttribute("src", f), u = 2; --u > -1; )
                        _ = a[u], h = -1 !== _.indexOf("%"), h !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - I.width : t.offsetHeight - I.height, a[u] = h ? parseFloat(_) / 100 * c + "px" : 100 * (parseFloat(_) / c) + "%");
                    _ = a.join(" ")
                }
                return this.parseComplex(t.style, _, g, s, o)
            },formatter: ee}), _e("backgroundSize", {defaultValue: "0 0",formatter: ee}), _e("perspective", {defaultValue: "0px",prefix: !0}), _e("perspectiveOrigin", {defaultValue: "50% 50%",prefix: !0}), _e("transformStyle", {prefix: !0}), _e("backfaceVisibility", {prefix: !0}), _e("userSelect", {prefix: !0}), _e("margin", {parser: he("marginTop,marginRight,marginBottom,marginLeft")}), _e("padding", {parser: he("paddingTop,paddingRight,paddingBottom,paddingLeft")}), _e("clip", {defaultValue: "rect(0px,0px,0px,0px)",parser: function(t, e, i, n, s, o) {
                var a, l, u;
                return 9 > d ? (l = t.currentStyle, u = 8 > d ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(Y(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
            }}), _e("textShadow", {defaultValue: "0px 0px 0px #999",color: !0,multi: !0}), _e("autoRound,strictUnits", {parser: function(t, e, i, n, r) {
                return r
            }}), _e("border", {defaultValue: "0px solid #000",parser: function(t, e, i, n, s, o) {
                return this.parseComplex(t.style, this.format(Y(t, "borderTopWidth", r, !1, "0px") + " " + Y(t, "borderTopStyle", r, !1, "solid") + " " + Y(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
            },color: !0,formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
            }}), _e("borderWidth", {parser: he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), _e("float,cssFloat,styleFloat", {parser: function(t, e, i, n, r) {
                var s = t.style, o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                return new fe(s, o, 0, 0, r, -1, i, !1, 0, s[o], e)
            }});
        var Ee = function(t) {
            var e, i = this.t, n = i.filter || Y(this.data, "filter") || "", r = 0 | this.s + this.c * t;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Y(this.data, "filter")) : (i.filter = n.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
        };
        _e("opacity,alpha,autoAlpha", {defaultValue: "1",parser: function(t, e, i, n, s, o) {
                var a = parseFloat(Y(t, "opacity", r, !1, "1")), l = t.style, u = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === Y(t, "visibility", r) && 0 !== e && (a = 0), B ? s = new fe(l, "opacity", a, e - a, s) : (s = new fe(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Ee), u && (s = new fe(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
            }});
        var Oe = function(t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Ne = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Oe(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        _e("className", {parser: function(t, e, n, s, o, a, l) {
                var u, h, c, f, p, d = t.getAttribute("class") || "", m = t.style.cssText;
                if (o = s._classNamePT = new fe(t, n, 0, 0, o, 2), o.setRatio = Ne, o.pr = -11, i = !0, o.b = d, h = Q(t, r), c = t._gsClassPT) {
                    for (f = {}, p = c.data; p; )
                        f[p.p] = 1, p = p._next;
                    c.setRatio(1)
                }
                return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), s._tween._duration && (t.setAttribute("class", o.e), u = K(t, h, Q(t), l, f), t.setAttribute("class", d), o.data = u.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, u.difs, o, a)), o
            }});
        var Le = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s = this.t.style, o = a.transform.parse;
                if ("all" === this.e)
                    s.cssText = "", r = !0;
                else
                    for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1; )
                        i = e[n], a[i] && (a[i].parse === o ? r = !0 : i = "transformOrigin" === i ? we : a[i].p), Oe(s, i);
                r && (Oe(s, ye), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (_e("clearProps", {parser: function(t, e, n, r, s) {
                return s = new fe(t, n, 0, 0, s, 2), s.setRatio = Le, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
            }}), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--; )
            ge(l[de]);
        l = o.prototype, l._firstPT = null, l._onInitTween = function(t, e, a) {
            if (!t.nodeType)
                return !1;
            this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = $(t, ""), s = this._overwriteProps;
            var l, f, d, m, _, g, v, y, T, b = t.style;
            if (h && "" === b.zIndex && (l = Y(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (m = b.cssText, l = Q(t, r), b.cssText = m + ";" + e, l = K(t, l, Q(t)).difs, !B && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, b.cssText = m), this._firstPT = f = this.parse(t, e, null), this._transformType) {
                for (T = 3 === this._transformType, ye ? c && (h = !0, "" === b.zIndex && (v = Y(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : b.zoom = 1, d = f; d && d._next; )
                    d = d._next;
                y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, d), y.setRatio = T && be ? De : ye ? Re : Ae, y.data = this._transform || ke(t, r, !0), s.pop()
            }
            if (i) {
                for (; f; ) {
                    for (g = f._next, d = m; d && d.pr > f.pr; )
                        d = d._next;
                    (f._prev = d ? d._prev : _) ? f._prev._next = f : m = f, (f._next = d) ? d._prev = f : _ = f, f = g
                }
                this._firstPT = m
            }
            return !0
        }, l.parse = function(t, e, i, s) {
            var o, l, h, c, f, p, d, m, _, g, v = t.style;
            for (o in e)
                p = e[o], l = a[o], l ? i = l.parse(t, p, o, this, i, s, e) : (f = Y(t, o, r) + "", _ = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || _ && x.test(p) ? (_ || (p = ae(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pe(v, o, f, p, !0, "transparent", i, 0, s)) : !_ || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (h = parseFloat(f), d = h || 0 === h ? f.substr((h + "").length) : "", ("" === f || "auto" === f) && ("width" === o || "height" === o ? (h = te(t, o, r), d = "px") : "left" === o || "top" === o ? (h = V(t, o, r), d = "px") : (h = "opacity" !== o ? 0 : 1, d = "")), g = _ && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), m = p.replace(y, "")) : (c = parseFloat(p), m = _ ? p.substr((c + "").length) || "" : ""), "" === m && (m = o in n ? n[o] : d), p = c || 0 === c ? (g ? c + h : c) + m : e[o], d !== m && "" !== m && (c || 0 === c) && h && (h = G(t, o, h, d), "%" === m ? (h /= G(t, o, 100, "%") / 100, e.strictUnits !== !0 && (f = h + "%")) : "em" === m ? h /= G(t, o, 1, "em") : "px" !== m && (c = G(t, o, c, m), m = "px"), g && (c || 0 === c) && (p = c + h + m)), g && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== v[o] && (p || "NaN" != p + "" && null != p) ? (i = new fe(v, o, c || h || 0, 0, i, -1, o, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f) : H("invalid " + o + " tween value: " + e[o]) : (i = new fe(v, o, h, c - h, i, 0, o, u !== !1 && ("px" === m || "zIndex" === o), 0, f, p), i.xs0 = m)) : i = pe(v, o, f, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
            return i
        }, l.setRatio = function(t) {
            var e, i, n, r = this._firstPT, s = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r; ) {
                        if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                            if (1 === r.type)
                                if (n = r.l, 2 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else
                for (; r; )
                    2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, l._enableTransforms = function(t) {
            this._transform = this._transform || ke(this._target, r, !0), this._transformType = this._transform.svg && Se || !t && 3 !== this._transformType ? 2 : 3
        };
        var Me = function() {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function(t, e, i) {
            var n = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Me, n.data = this
        }, l._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, l._kill = function(e) {
            var i, n, r, s = e;
            if (e.autoAlpha || e.alpha) {
                s = {};
                for (n in e)
                    s[n] = e[n];
                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
        };
        var Fe = function(t, e, i) {
            var n, r, s, o;
            if (t.slice)
                for (r = t.length; --r > -1; )
                    Fe(t[r], e, i);
            else
                for (n = t.childNodes, r = n.length; --r > -1; )
                    s = n[r], o = s.type, s.style && (e.push(Q(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Fe(s, e, i)
        };
        return o.cascadeTo = function(t, i, n) {
            var r, s, o, a = e.to(t, i, n), l = [a], u = [], h = [], c = [], f = e._internals.reservedProps;
            for (t = a._targets || a.target, Fe(t, u, c), a.render(i, !0), Fe(t, h), a.render(0, !0), a._enabled(!0), r = c.length; --r > -1; )
                if (s = K(c[r], u[r], h[r]), s.firstMPT) {
                    s = s.difs;
                    for (o in n)
                        f[o] && (s[o] = n[o]);
                    l.push(e.to(c[r], i, s))
                }
            return l
        }, t.activate([o]), o
    }, !0), function() {
        var t = _gsScope._gsDefine.plugin({propName: "roundProps",priority: -1,API: 2,init: function(t, e, i) {
                return this._tween = i, !0
            }}), e = t.prototype;
        e._onInitAllProps = function() {
            for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1; )
                o[r[s]] = 1;
            for (s = r.length; --s > -1; )
                for (t = r[s], e = n._firstPT; e; )
                    i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
            return !1
        }, e._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
        }
    }(), _gsScope._gsDefine.plugin({propName: "attr",API: 2,version: "0.3.3",init: function(t, e) {
            var i, n, r;
            if ("function" != typeof t.setAttribute)
                return !1;
            this._target = t, this._proxy = {}, this._start = {}, this._end = {};
            for (i in e)
                this._start[i] = this._proxy[i] = n = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
            return !0
        },set: function(t) {
            this._super.setRatio.call(this, t);
            for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1; )
                e = i[n], this._target.setAttribute(e, r[e] + "")
        }}), _gsScope._gsDefine.plugin({propName: "directionalRotation",version: "0.2.1",API: 2,init: function(t, e) {
            "object" != typeof e && (e = {rotation: e}), this.finals = {};
            var i, n, r, s, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360, u = 1e-6;
            for (i in e)
                "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = s - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > u || -u > o) && (this._addTween(t, i, r, r + o, i), this._overwriteProps.push(i)));
            return !0
        },set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope, s = r.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, l = s._class, u = function(e, i) {
            var n = l("easing." + e, function() {
            }, !0), r = n.prototype = new t;
            return r.constructor = n, r.getRatio = i, n
        }, h = t.register || function() {
        }, c = function(t, e, i, n) {
            var r = l("easing." + t, {easeOut: new e,easeIn: new i,easeInOut: new n}, !0);
            return h(r, t), r
        }, f = function(t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, p = function(e, i) {
            var n = l("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), r = n.prototype = new t;
            return r.constructor = n, r.getRatio = i, r.config = function(t) {
                return new n(t)
            }, n
        }, d = c("Back", p("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), p("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), p("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = l("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), _ = m.prototype = new t;
        return _.constructor = m, _.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), _.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = l("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), _ = e.prototype = new t, _.constructor = e, _.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, _.config = e.config = function(t) {
            return new e(t)
        }, i = l("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, n, r, s, o, a, l = e.taper || "none", u = [], h = 0, c = 0 | (e.points || 20), p = c, d = e.randomize !== !1, m = e.clamp === !0, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                i = d ? Math.random() : 1 / c * p, n = _ ? _.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i, r = .5 * s * s * g) : (s = 2 * (1 - i), r = .5 * s * s * g), d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[h++] = {x: i,y: n};
            for (u.sort(function(t, e) {
                return t.x - e.x
            }), a = new f(1, 1, null), p = c; --p > -1; )
                o = u[p], a = new f(o.x, o.y, a);
            this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
        }, !0), _ = i.prototype = new t, _.constructor = i, _.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, _.config = function(t) {
            return new i(t)
        }, i.ease = new i, c("Bounce", u("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), c("Circ", u("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function(e, i, n) {
            var r = l("easing." + e, function(t, e) {
                this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
            }, !0), s = r.prototype = new t;
            return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                return new r(t, e)
            }, r
        }, c("Elastic", n("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * o / this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2))
        }, .3), n("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) + 1
        }, .45)), c("Expo", u("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), c("Sine", u("SineOut", function(t) {
            return Math.sin(t * a)
        }), u("SineIn", function(t) {
            return -Math.cos(t * a) + 1
        }), u("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {find: function(e) {
                return t.map[e]
            }}, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), d
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, o, a, l = function(t) {
            var e, n = t.split("."), r = i;
            for (e = 0; n.length > e; e++)
                r[n[e]] = r = r[n[e]] || {};
            return r
        }, u = l("com.greensock"), h = 1e-10, c = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, f = function() {
        }, p = function() {
            var t = Object.prototype.toString, e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), d = {}, m = function(n, r, s, o) {
            this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
            var a = [];
            this.check = function(u) {
                for (var h, c, f, p, _ = r.length, g = _; --_ > -1; )
                    (h = d[r[_]] || new m(r[_], [])).gsClass ? (a[_] = h.gsClass, g--) : u && h.sc.push(this);
                if (0 === g && s)
                    for (c = ("com.greensock." + n).split("."), f = c.pop(), p = l(c.join("."))[f] = this.gsClass = s.apply(s, a), o && (i[f] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                        return p
                    }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), _ = 0; this.sc.length > _; _++)
                        this.sc[_].check()
            }, this.check(!0)
        }, _ = t._gsDefine = function(t, e, i, n) {
            return new m(t, e, i, n)
        }, g = u._class = function(t, e, i) {
            return e = e || function() {
            }, _(t, [], function() {
                return e
            }, i), e
        };
        _.globals = i;
        var v = [0, 0, 1, 1], y = [], T = g("easing.Ease", function(t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
        }, !0), w = T.map = {}, b = T.register = function(t, e, i, n) {
            for (var r, s, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                for (s = l[h], r = n ? g("easing." + s, null, !0) : u.easing[s] || {}, o = c.length; --o > -1; )
                    a = c[o], w[s + "." + a] = w[a + s] = r[a] = t.getRatio ? t : t[a] || new t
        };
        for (s = T.prototype, s._calcEnd = !1, s.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1; )
            s = n[r] + ",Power" + r, b(new T(null, null, 1, r), s, "easeOut", !0), b(new T(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), b(new T(null, null, 3, r), s, "easeInOut");
        w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
        var x = g("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = x.prototype, s.addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var s, l, u = this._listeners[t], h = 0;
            for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1; )
                s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === h && r > s.pr && (h = l + 1);
            u.splice(h, 0, {c: e,s: i,up: n,pr: r}), this !== o || a || o.wake()
        }, s.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1; )
                    n = r[e], n && (n.up ? n.c.call(n.s || i, {type: t,target: i}) : n.c.call(n.s || i))
        };
        var P = t.requestAnimationFrame, S = t.cancelAnimationFrame, C = Date.now || function() {
            return (new Date).getTime()
        }, k = C();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !P; )
            P = t[n[r] + "RequestAnimationFrame"], S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        g("Ticker", function(t, e) {
            var i, n, r, s, l, u = this, c = C(), p = e !== !1 && P, d = 500, m = 33, _ = function(t) {
                var e, o, a = C() - k;
                a > d && (c += a - m), k += a, u.time = (k - c) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(_)), o && u.dispatchEvent("tick")
            };
            x.call(u), u.time = u.frame = 0, u.tick = function() {
                _(!0)
            }, u.lagSmoothing = function(t, e) {
                d = t || 1 / h, m = Math.min(e, d, 0)
            }, u.sleep = function() {
                null != r && (p && S ? S(r) : clearTimeout(r), n = f, r = null, u === o && (a = !1))
            }, u.wake = function() {
                null !== r ? u.sleep() : u.frame > 10 && (k = C() - d + 5), n = 0 === i ? f : p && P ? P : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - u.time) + 1)
                }, u === o && (a = !0), _(2)
            }, u.fps = function(t) {
                return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i
            }, u.useRAF = function(t) {
                return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
            }, u.fps(t), setTimeout(function() {
                p && (!r || 5 > u.frame) && u.useRAF(!1)
            }, 1500)
        }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
        var A = g("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                a || o.wake();
                var i = this.vars.useFrames ? H : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = A.ticker = new u.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var D = function() {
            a && C() - k > 2e3 && o.wake(), setTimeout(D, 2e3)
        };
        D(), s.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {
        }, s.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, s._enabled = function(t, e) {
            return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (a || o.wake(), !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline; )
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), L.length && X())
            }
            return this
        }, s.progress = s.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || o.wake();
                var e = this._timeline, i = e.rawTime(), n = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var R = g("core.SimpleTimeline", function(t) {
            A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = R.prototype = new A, s.constructor = R, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (n = t._startTime; i && i._startTime > n; )
                    i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function() {
            return a || o.wake(), this._totalTime
        };
        var E = g("TweenLite", function(e, i, n) {
            if (A.call(this, i, n), this.render = E.prototype.render, null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : E.selector(e) || e;
            var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? q[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                for (this._targets = o = c(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++)
                    s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(c(s))) : (this._siblings[r] = U(s, this, !1), 1 === l && this._siblings[r].length > 1 && Y(s, this, null, 1, this._siblings[r])) : (s = o[r--] = E.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
            else
                this._propLookup = {}, this._siblings = U(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
        }, !0), O = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, N = function(t, e) {
            var i, n = {};
            for (i in t)
                B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        s = E.prototype = new A, s.constructor = E, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, E.version = "1.14.1", E.defaultEase = s._ease = new T(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = o, E.autoSleep = !0, E.lagSmoothing = function(t, e) {
            o.lagSmoothing(t, e)
        }, E.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (E.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var L = [], M = {}, F = E._internals = {isArray: p,isSelector: O,lazyTweens: L}, I = E._plugins = {}, z = F.tweenLookup = {}, j = 0, B = F.reservedProps = {ease: 1,delay: 1,overwrite: 1,onComplete: 1,onCompleteParams: 1,onCompleteScope: 1,useFrames: 1,runBackwards: 1,startAt: 1,onUpdate: 1,onUpdateParams: 1,onUpdateScope: 1,onStart: 1,onStartParams: 1,onStartScope: 1,onReverseComplete: 1,onReverseCompleteParams: 1,onReverseCompleteScope: 1,onRepeat: 1,onRepeatParams: 1,onRepeatScope: 1,easeParams: 1,yoyo: 1,immediateRender: 1,repeat: 1,repeatDelay: 1,data: 1,paused: 1,reversed: 1,autoCSS: 1,lazy: 1,onOverwrite: 1}, q = {none: 0,all: 1,auto: 2,concurrent: 3,allOnStart: 4,preexisting: 5,"true": 1,"false": 0}, H = A._rootFramesTimeline = new R, W = A._rootTimeline = new R, X = F.lazyRender = function() {
            var t, e = L.length;
            for (M = {}; --e > -1; )
                t = L[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            L.length = 0
        };
        W._startTime = o.time, H._startTime = o.frame, W._active = H._active = !0, setTimeout(X, 1), A._updateRoot = E.render = function() {
            var t, e, i;
            if (L.length && X(), W.render((o.time - W._startTime) * W._timeScale, !1, !1), H.render((o.frame - H._startTime) * H._timeScale, !1, !1), L.length && X(), !(o.frame % 120)) {
                for (i in z) {
                    for (e = z[i].tweens, t = e.length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete z[i]
                }
                if (i = W._first, (!i || i._paused) && E.autoSleep && !H._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", A._updateRoot);
        var U = function(t, e, i) {
            var n, r, s = t._gsTweenID;
            if (z[s || (t._gsTweenID = s = "t" + j++)] || (z[s] = {target: t,tweens: []}), e && (n = z[s].tweens, n[r = n.length] = e, i))
                for (; --r > -1; )
                    n[r] === e && n.splice(r, 1);
            return z[s].tweens
        }, $ = function(t, e, i, n) {
            var r = t.vars.onOverwrite;
            r && r(t, e, i, n), r = E.onOverwrite, r && r(t, e, i, n)
        }, Y = function(t, e, i, n, r) {
            var s, o, a, l;
            if (1 === n || n >= 4) {
                for (l = r.length, s = 0; l > s; s++)
                    if ((a = r[s]) !== e)
                        a._gc || (a._enabled(!1, !1) && (o = !0), $(a, e));
                    else if (5 === n)
                        break;
                return o
            }
            var u, c = e._startTime + h, f = [], p = 0, d = 0 === e._duration;
            for (s = r.length; --s > -1; )
                (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || G(e, 0, d), 0 === G(a, u, d) && (f[p++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && 2e-10 >= c - a._startTime || (f[p++] = a)));
            for (s = p; --s > -1; )
                a = f[s], 2 === n && a._kill(i, t, e) && (o = !0), (2 !== n || !a._firstPT && a._initted) && (a._enabled(!1, !1) && (o = !0), 2 !== n && $(a, e));
            return o
        }, G = function(t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                if (s += n._startTime, r *= n._timeScale, n._paused)
                    return -100;
                n = n._timeline
            }
            return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
        };
        s._init = function() {
            var t, e, i, n, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender, u = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt)
                    r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = E.to(this.target, 0, r), l)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== a)
                        return
            } else if (s.runBackwards && 0 !== a)
                if (this._startAt)
                    this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (n in s)
                        B[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = u = u ? u instanceof T ? u : "function" == typeof u ? new T(u, s.easeParams) : w[u] || E.defaultEase : E.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, n, r) {
            var s, o, a, l, u, h;
            if (null == e)
                return !1;
            M[e._gsTweenID] && X(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && N(this.vars, e);
            for (s in this.vars) {
                if (h = this.vars[s], B[s])
                    h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = u = {_next: this._firstPT,t: l,p: "setRatio",s: 0,c: 1,f: !0,n: s,pg: !0,pr: l._priority}, o = l._overwriteProps.length; --o > -1; )
                        i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = i[s] = u = {_next: this._firstPT,t: e,p: s,f: "function" == typeof e[s],n: s,pg: !1,pr: 0}, u.s = u.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), u.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - u.s || 0;
                u && u._next && (u._next._prev = u)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Y(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
        }, s.render = function(t, e, i) {
            var n, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
            if (t >= l)
                this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === h) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : h);
            else if (1e-7 > t)
                this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0 && u !== h) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : h)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l, f = this._easeType, p = this._easePower;
                (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === f ? 1 - c : 2 === f ? c : .5 > t / l ? c / 2 : 1 - c / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = a, this._rawPrevTime = u, L.push(this), void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s; )
                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
            }
        }, s._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))
                return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
            var n, r, s, o, a, l, u, h, c;
            if ((p(e) || O(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                    this._kill(t, e[n]) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill);
                    for (s in u)
                        (o = a[s]) && (c || (c = []), c.push(s), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1), c && i && $(this, i, e, c)
                }
            }
            return l
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
        }, s._enabled = function(t, e) {
            if (a || o.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1; )
                        this._siblings[i] = U(n[i], this, !0);
                else
                    this._siblings = U(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, E.to = function(t, e, i) {
            return new E(t, e, i)
        }, E.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i)
        }, E.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n)
        }, E.delayedCall = function(t, e, i, n, r) {
            return new E(e, 0, {delay: t,onComplete: e,onCompleteParams: i,onCompleteScope: n,onReverseComplete: e,onReverseCompleteParams: i,onReverseCompleteScope: n,immediateRender: !1,useFrames: r,overwrite: 0})
        }, E.set = function(t, e) {
            return new E(t, 0, e)
        }, E.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : E.selector(t) || t;
            var i, n, r, s;
            if ((p(t) || O(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1; )
                    n = n.concat(E.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                    for (s = n[i], r = i; --r > -1; )
                        s === n[r] && n.splice(i, 1)
            } else
                for (n = U(t).concat(), i = n.length; --i > -1; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = E.getTweensOf(t, e), r = n.length; --r > -1; )
                n[r]._kill(i, t)
        };
        var V = g("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
        }, !0);
        if (s = V.prototype, V.version = "1.10.1", V.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
            var o, a;
            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {_next: this._firstPT,t: t,p: e,s: i,c: o,f: "function" == typeof t[e],n: r || e,r: s}, a._next && (a._next._prev = a), a) : void 0
        }, s.setRatio = function(t) {
            for (var e, i = this._firstPT, n = 1e-6; i; )
                e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, s._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
            return !1
        }, s._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, E._onPluginEvent = function(t, e) {
            var i, n, r, s, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a; ) {
                    for (o = a._next, n = r; n && n.pr > a.pr; )
                        n = n._next;
                    (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                }
                a = e._firstPT = r
            }
            for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, V.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === V.API && (I[(new t[e])._propName] = t[e]);
            return !0
        }, _.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {init: "_onInitTween",set: "setRatio",kill: "_kill",round: "_roundProps",initAll: "_onInitAllProps"}, o = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                V.call(this, i, n), this._overwriteProps = r || []
            }, t.global === !0), a = o.prototype = new V(i);
            a.constructor = o, o.API = t.API;
            for (e in s)
                "function" == typeof t[e] && (a[s[e]] = t[e]);
            return o.version = t.version, V.activate([o]), o
        }, n = t._gsQueue) {
            for (r = 0; n.length > r; r++)
                n[r]();
            for (s in d)
                d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), define("TweenMax", function() {
}), function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, o, a, l = function(t) {
            var e, n = t.split("."), r = i;
            for (e = 0; n.length > e; e++)
                r[n[e]] = r = r[n[e]] || {};
            return r
        }, u = l("com.greensock"), h = 1e-10, c = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, f = function() {
        }, p = function() {
            var t = Object.prototype.toString, e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), d = {}, m = function(n, r, s, o) {
            this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
            var a = [];
            this.check = function(u) {
                for (var h, c, f, p, _ = r.length, g = _; --_ > -1; )
                    (h = d[r[_]] || new m(r[_], [])).gsClass ? (a[_] = h.gsClass, g--) : u && h.sc.push(this);
                if (0 === g && s)
                    for (c = ("com.greensock." + n).split("."), f = c.pop(), p = l(c.join("."))[f] = this.gsClass = s.apply(s, a), o && (i[f] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                        return p
                    }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), _ = 0; this.sc.length > _; _++)
                        this.sc[_].check()
            }, this.check(!0)
        }, _ = t._gsDefine = function(t, e, i, n) {
            return new m(t, e, i, n)
        }, g = u._class = function(t, e, i) {
            return e = e || function() {
            }, _(t, [], function() {
                return e
            }, i), e
        };
        _.globals = i;
        var v = [0, 0, 1, 1], y = [], T = g("easing.Ease", function(t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
        }, !0), w = T.map = {}, b = T.register = function(t, e, i, n) {
            for (var r, s, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                for (s = l[h], r = n ? g("easing." + s, null, !0) : u.easing[s] || {}, o = c.length; --o > -1; )
                    a = c[o], w[s + "." + a] = w[a + s] = r[a] = t.getRatio ? t : t[a] || new t
        };
        for (s = T.prototype, s._calcEnd = !1, s.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1; )
            s = n[r] + ",Power" + r, b(new T(null, null, 1, r), s, "easeOut", !0), b(new T(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), b(new T(null, null, 3, r), s, "easeInOut");
        w.linear = u.easing.Linear.easeIn, w.swing = u.easing.Quad.easeInOut;
        var x = g("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = x.prototype, s.addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var s, l, u = this._listeners[t], h = 0;
            for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1; )
                s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === h && r > s.pr && (h = l + 1);
            u.splice(h, 0, {c: e,s: i,up: n,pr: r}), this !== o || a || o.wake()
        }, s.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1; )
                    n = r[e], n && (n.up ? n.c.call(n.s || i, {type: t,target: i}) : n.c.call(n.s || i))
        };
        var P = t.requestAnimationFrame, S = t.cancelAnimationFrame, C = Date.now || function() {
            return (new Date).getTime()
        }, k = C();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !P; )
            P = t[n[r] + "RequestAnimationFrame"], S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        g("Ticker", function(t, e) {
            var i, n, r, s, l, u = this, c = C(), p = e !== !1 && P, d = 500, m = 33, _ = function(t) {
                var e, o, a = C() - k;
                a > d && (c += a - m), k += a, u.time = (k - c) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(_)), o && u.dispatchEvent("tick")
            };
            x.call(u), u.time = u.frame = 0, u.tick = function() {
                _(!0)
            }, u.lagSmoothing = function(t, e) {
                d = t || 1 / h, m = Math.min(e, d, 0)
            }, u.sleep = function() {
                null != r && (p && S ? S(r) : clearTimeout(r), n = f, r = null, u === o && (a = !1))
            }, u.wake = function() {
                null !== r ? u.sleep() : u.frame > 10 && (k = C() - d + 5), n = 0 === i ? f : p && P ? P : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - u.time) + 1)
                }, u === o && (a = !0), _(2)
            }, u.fps = function(t) {
                return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i
            }, u.useRAF = function(t) {
                return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p
            }, u.fps(t), setTimeout(function() {
                p && (!r || 5 > u.frame) && u.useRAF(!1)
            }, 1500)
        }), s = u.Ticker.prototype = new u.events.EventDispatcher, s.constructor = u.Ticker;
        var A = g("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                a || o.wake();
                var i = this.vars.useFrames ? H : W;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = A.ticker = new u.Ticker, s = A.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var D = function() {
            a && C() - k > 2e3 && o.wake(), setTimeout(D, 2e3)
        };
        D(), s.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {
        }, s.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, s._enabled = function(t, e) {
            return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (a || o.wake(), !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline; )
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), L.length && X())
            }
            return this
        }, s.progress = s.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            if (t != this._paused && this._timeline) {
                a || t || o.wake();
                var e = this._timeline, i = e.rawTime(), n = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var R = g("core.SimpleTimeline", function(t) {
            A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = R.prototype = new A, s.constructor = R, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (n = t._startTime; i && i._startTime > n; )
                    i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function() {
            return a || o.wake(), this._totalTime
        };
        var E = g("TweenLite", function(e, i, n) {
            if (A.call(this, i, n), this.render = E.prototype.render, null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : E.selector(e) || e;
            var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? q[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                for (this._targets = o = c(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++)
                    s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(c(s))) : (this._siblings[r] = U(s, this, !1), 1 === l && this._siblings[r].length > 1 && Y(s, this, null, 1, this._siblings[r])) : (s = o[r--] = E.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
            else
                this._propLookup = {}, this._siblings = U(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
        }, !0), O = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, N = function(t, e) {
            var i, n = {};
            for (i in t)
                B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        s = E.prototype = new A, s.constructor = E, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, E.version = "1.14.1", E.defaultEase = s._ease = new T(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = o, E.autoSleep = !0, E.lagSmoothing = function(t, e) {
            o.lagSmoothing(t, e)
        }, E.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (E.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var L = [], M = {}, F = E._internals = {isArray: p,isSelector: O,lazyTweens: L}, I = E._plugins = {}, z = F.tweenLookup = {}, j = 0, B = F.reservedProps = {ease: 1,delay: 1,overwrite: 1,onComplete: 1,onCompleteParams: 1,onCompleteScope: 1,useFrames: 1,runBackwards: 1,startAt: 1,onUpdate: 1,onUpdateParams: 1,onUpdateScope: 1,onStart: 1,onStartParams: 1,onStartScope: 1,onReverseComplete: 1,onReverseCompleteParams: 1,onReverseCompleteScope: 1,onRepeat: 1,onRepeatParams: 1,onRepeatScope: 1,easeParams: 1,yoyo: 1,immediateRender: 1,repeat: 1,repeatDelay: 1,data: 1,paused: 1,reversed: 1,autoCSS: 1,lazy: 1,onOverwrite: 1}, q = {none: 0,all: 1,auto: 2,concurrent: 3,allOnStart: 4,preexisting: 5,"true": 1,"false": 0}, H = A._rootFramesTimeline = new R, W = A._rootTimeline = new R, X = F.lazyRender = function() {
            var t, e = L.length;
            for (M = {}; --e > -1; )
                t = L[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            L.length = 0
        };
        W._startTime = o.time, H._startTime = o.frame, W._active = H._active = !0, setTimeout(X, 1), A._updateRoot = E.render = function() {
            var t, e, i;
            if (L.length && X(), W.render((o.time - W._startTime) * W._timeScale, !1, !1), H.render((o.frame - H._startTime) * H._timeScale, !1, !1), L.length && X(), !(o.frame % 120)) {
                for (i in z) {
                    for (e = z[i].tweens, t = e.length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete z[i]
                }
                if (i = W._first, (!i || i._paused) && E.autoSleep && !H._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", A._updateRoot);
        var U = function(t, e, i) {
            var n, r, s = t._gsTweenID;
            if (z[s || (t._gsTweenID = s = "t" + j++)] || (z[s] = {target: t,tweens: []}), e && (n = z[s].tweens, n[r = n.length] = e, i))
                for (; --r > -1; )
                    n[r] === e && n.splice(r, 1);
            return z[s].tweens
        }, $ = function(t, e, i, n) {
            var r = t.vars.onOverwrite;
            r && r(t, e, i, n), r = E.onOverwrite, r && r(t, e, i, n)
        }, Y = function(t, e, i, n, r) {
            var s, o, a, l;
            if (1 === n || n >= 4) {
                for (l = r.length, s = 0; l > s; s++)
                    if ((a = r[s]) !== e)
                        a._gc || (a._enabled(!1, !1) && (o = !0), $(a, e));
                    else if (5 === n)
                        break;
                return o
            }
            var u, c = e._startTime + h, f = [], p = 0, d = 0 === e._duration;
            for (s = r.length; --s > -1; )
                (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || G(e, 0, d), 0 === G(a, u, d) && (f[p++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && 2e-10 >= c - a._startTime || (f[p++] = a)));
            for (s = p; --s > -1; )
                a = f[s], 2 === n && a._kill(i, t, e) && (o = !0), (2 !== n || !a._firstPT && a._initted) && (a._enabled(!1, !1) && (o = !0), 2 !== n && $(a, e));
            return o
        }, G = function(t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                if (s += n._startTime, r *= n._timeScale, n._paused)
                    return -100;
                n = n._timeline
            }
            return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
        };
        s._init = function() {
            var t, e, i, n, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender, u = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt)
                    r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = E.to(this.target, 0, r), l)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== a)
                        return
            } else if (s.runBackwards && 0 !== a)
                if (this._startAt)
                    this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (n in s)
                        B[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = u = u ? u instanceof T ? u : "function" == typeof u ? new T(u, s.easeParams) : w[u] || E.defaultEase : E.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && E._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, n, r) {
            var s, o, a, l, u, h;
            if (null == e)
                return !1;
            M[e._gsTweenID] && X(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && N(this.vars, e);
            for (s in this.vars) {
                if (h = this.vars[s], B[s])
                    h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = u = {_next: this._firstPT,t: l,p: "setRatio",s: 0,c: 1,f: !0,n: s,pg: !0,pr: l._priority}, o = l._overwriteProps.length; --o > -1; )
                        i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = i[s] = u = {_next: this._firstPT,t: e,p: s,f: "function" == typeof e[s],n: s,pg: !1,pr: 0}, u.s = u.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), u.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - u.s || 0;
                u && u._next && (u._next._prev = u)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Y(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
        }, s.render = function(t, e, i) {
            var n, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
            if (t >= l)
                this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === h) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : h);
            else if (1e-7 > t)
                this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0 && u !== h) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : h)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l, f = this._easeType, p = this._easePower;
                (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === f ? 1 - c : 2 === f ? c : .5 > t / l ? c / 2 : 1 - c / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = a, this._rawPrevTime = u, L.push(this), void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s; )
                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
            }
        }, s._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))
                return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
            var n, r, s, o, a, l, u, h, c;
            if ((p(e) || O(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                    this._kill(t, e[n]) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill);
                    for (s in u)
                        (o = a[s]) && (c || (c = []), c.push(s), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1), c && i && $(this, i, e, c)
                }
            }
            return l
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
        }, s._enabled = function(t, e) {
            if (a || o.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1; )
                        this._siblings[i] = U(n[i], this, !0);
                else
                    this._siblings = U(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, E.to = function(t, e, i) {
            return new E(t, e, i)
        }, E.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i)
        }, E.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n)
        }, E.delayedCall = function(t, e, i, n, r) {
            return new E(e, 0, {delay: t,onComplete: e,onCompleteParams: i,onCompleteScope: n,onReverseComplete: e,onReverseCompleteParams: i,onReverseCompleteScope: n,immediateRender: !1,useFrames: r,overwrite: 0})
        }, E.set = function(t, e) {
            return new E(t, 0, e)
        }, E.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : E.selector(t) || t;
            var i, n, r, s;
            if ((p(t) || O(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1; )
                    n = n.concat(E.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                    for (s = n[i], r = i; --r > -1; )
                        s === n[r] && n.splice(i, 1)
            } else
                for (n = U(t).concat(), i = n.length; --i > -1; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = E.getTweensOf(t, e), r = n.length; --r > -1; )
                n[r]._kill(i, t)
        };
        var V = g("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
        }, !0);
        if (s = V.prototype, V.version = "1.10.1", V.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
            var o, a;
            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {_next: this._firstPT,t: t,p: e,s: i,c: o,f: "function" == typeof t[e],n: r || e,r: s}, a._next && (a._next._prev = a), a) : void 0
        }, s.setRatio = function(t) {
            for (var e, i = this._firstPT, n = 1e-6; i; )
                e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, s._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
            return !1
        }, s._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, E._onPluginEvent = function(t, e) {
            var i, n, r, s, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a; ) {
                    for (o = a._next, n = r; n && n.pr > a.pr; )
                        n = n._next;
                    (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o
                }
                a = e._firstPT = r
            }
            for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, V.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === V.API && (I[(new t[e])._propName] = t[e]);
            return !0
        }, _.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {init: "_onInitTween",set: "setRatio",kill: "_kill",round: "_roundProps",initAll: "_onInitAllProps"}, o = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                V.call(this, i, n), this._overwriteProps = r || []
            }, t.global === !0), a = o.prototype = new V(i);
            a.constructor = o, o.API = t.API;
            for (e in s)
                "function" == typeof t[e] && (a[s[e]] = t[e]);
            return o.version = t.version, V.activate([o]), o
        }, n = t._gsQueue) {
            for (r = 0; n.length > r; r++)
                n[r]();
            for (s in d)
                d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"), define("TweenLite", function() {
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
        var n = function(e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, r = 1e-10, s = [], o = e._internals, a = o.lazyTweens, l = o.lazyRender, u = new i(null, null, 1, 0), h = n.prototype = new t;
        return h.constructor = n, h.kill()._gc = !1, n.version = "1.14.2", h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, h.addCallback = function(t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i)
        }, h.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; )
                        i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, h.tweenTo = function(t, i) {
            i = i || {};
            var n, r, o, a = {ease: u,overwrite: i.delay ? 2 : 1,useFrames: this.usesFrames(),immediateRender: !1};
            for (r in i)
                a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function() {
                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
            }, o
        }, h.tweenFromTo = function(t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {onComplete: this.seek,onCompleteParams: [t],onCompleteScope: this}, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, u, h, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, m = this._time, _ = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, T = this._paused, w = this._cycle;
            if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (c = !0, y > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (c = !0))) : (0 === d && 0 > y && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = d + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                var b = this._yoyo && 0 !== (1 & w), x = b === (this._yoyo && 0 !== (1 & this._cycle)), P = this._totalTime, S = this._cycle, C = this._rawPrevTime, k = this._time;
                if (this._totalTime = w * d, w > this._cycle ? b = !b : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = b ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), x && (m = b ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T)
                    return;
                this._time = k, this._totalTime = P, this._cycle = S, this._rawPrevTime = C
            }
            if (!(this._time !== m && this._first || i || c))
                return void (_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)
                for (n = this._first; n && (u = n._next, !this._paused || T); )
                    (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
            else
                for (n = this._last; n && (u = n._prev, !this._paused || T); )
                    (n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = u;
            this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), h && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)))
        }, h.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; l > n; n++)
                r = o[n], r.isActive() && (s[a++] = r);
            return s
        }, h.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }, h.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                if (t > e[i].time)
                    return e[i].name;
            return null
        }, h.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {time: this._labels[t],name: t};
            return e.sort(function(t, e) {
                return t.time - e.time
            }), e
        }, h.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, h.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, h.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, h.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, h.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, n, r = this.vars;
            for (n in r)
                i = r[n], a(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        }, r = 1e-10, s = i._internals, o = s.isSelector, a = s.isArray, l = s.lazyTweens, u = s.lazyRender, h = [], c = _gsScope._gsDefine.globals, f = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }, p = function(t, e, i, n) {
            var r = t._timeline._totalTime;
            (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || h), this._forcingPlayhead && t._timeline.seek(r))
        }, d = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, m = n.prototype = new e;
        return n.version = "1.14.2", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, r) {
            var s = n.repeat && c.TweenMax || i;
            return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
        }, m.from = function(t, e, n, r) {
            return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
        }, m.fromTo = function(t, e, n, r, s) {
            var o = r.repeat && c.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
        }, m.staggerTo = function(t, e, r, s, a, l, u, h) {
            var c, p = new n({onComplete: l,onCompleteParams: u,onCompleteScope: h,smoothChildTiming: this.smoothChildTiming});
            for ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = d(t)), s = s || 0, 0 > s && (t = d(t), t.reverse(), s *= -1), c = 0; t.length > c; c++)
                r.startAt && (r.startAt = f(r.startAt)), p.to(t[c], e, f(r), c * s);
            return this.add(p, a)
        }, m.staggerFrom = function(t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
        }, m.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
        }, m.call = function(t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r)
        }, m.set = function(t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function(t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, s, o = new n(t), a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r; )
                s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
            return a.add(o, 0), o
        }, m.add = function(r, s, o, l) {
            var u, h, c, f, p, d;
            if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && a(r)) {
                    for (o = o || "normal", l = l || 0, u = s, h = r.length, c = 0; h > c; c++)
                        a(f = r[c]) && (f = new n({tweens: f})), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === o ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), u += l;
                    return this._uncache(!0)
                }
                if ("string" == typeof r)
                    return this.addLabel(r, s);
                if ("function" != typeof r)
                    throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (p = this, d = p.rawTime() > r._startTime; p._timeline; )
                    d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
            return this
        }, m.remove = function(e) {
            if (e instanceof t)
                return this._remove(e, !1);
            if (e instanceof Array || e && e.push && a(e)) {
                for (var i = e.length; --i > -1; )
                    this.remove(e[i]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, m._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, m.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, m.insert = m.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, m.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, m.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, m.addPause = function(t, e, i, n) {
            return this.call(p, ["{self}", e, i, n], this, t)
        }, m.removeLabel = function(t) {
            return delete this._labels[t], this
        }, m.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, m._parseTimeOrLabel = function(e, i, n, r) {
            var s;
            if (r instanceof t && r.timeline === this)
                this.remove(r);
            else if (r && (r instanceof Array || r.push && a(r)))
                for (s = r.length; --s > -1; )
                    r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
            if ("string" == typeof i)
                return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])
                null == e && (e = this.duration());
            else {
                if (s = e.indexOf("="), -1 === s)
                    return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, m.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, m.stop = function() {
            return this.paused(!0)
        }, m.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }, m.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }, m.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, s, o, a, c, f = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, d = this._startTime, m = this._timeScale, _ = this._paused;
            if (t >= f ? (this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (c = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (c = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || c) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= p)
                    for (n = this._first; n && (o = n._next, !this._paused || _); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                else
                    for (n = this._last; n && (o = n._prev, !this._paused || _); )
                        (n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                this._onUpdate && (e || (l.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || h)))
            }
        }, m._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof n && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }, m.getChildren = function(t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], o = this._first, a = 0; o; )
                r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
            return s
        }, m.getTweensOf = function(t, e) {
            var n, r, s = this._gc, o = [], a = 0;
            for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1; )
                (n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
            return s && this._enabled(!1, !0), o
        }, m.recent = function() {
            return this._recent
        }, m._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }, m.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
                r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)
                for (n in s)
                    s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }, m._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; )
                i[n]._kill(t, e) && (r = !0);
            return r
        }, m.clear = function(t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
                e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, m.invalidate = function() {
            for (var e = this._first; e; )
                e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, m._enabled = function(t, i) {
            if (t === this._gc)
                for (var n = this._first; n; )
                    n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, m.totalTime = function() {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, m.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, m.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                        e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, m.usesFrames = function() {
            for (var e = this._timeline; e._timeline; )
                e = e._timeline;
            return e === t._rootFramesTimeline
        }, m.rawTime = function() {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define("TimelineMax", ["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
}("TimelineMax"), !function(t, e) {
    if ("function" == typeof define && define.amd)
        define("scrollMagic", ["jquery", "TweenMax", "TimelineMax"], e);
    else {
        var i = e(t.jQuery, t.TweenMax, t.TimelineMax);
        t.ScrollMagic = i.Controller, t.ScrollScene = i.Scene
    }
}(this, function(t, e, i) {
    var n = function(e) {
        var i, n, a = "ScrollMagic", h = {container: window,vertical: !0,globalSceneOptions: {},loglevel: 2,refreshInterval: 100}, c = this, f = t.extend({}, h, e), p = [], d = !1, m = 0, _ = "PAUSED", g = !0, v = 0, y = !0, T = function() {
            if (c.version = c.constructor.version, t.each(f, function(t) {
                h.hasOwnProperty(t) || delete f[t]
            }), f.container = t(f.container).first(), 0 === f.container.length)
                throw a + " init failed.";
            g = !t.contains(document, f.container.get(0)), g || f.container.on("resize", function(t) {
                t.stopPropagation()
            }), v = f.vertical ? f.container.height() : f.container.width(), f.container.on("scroll resize", P), f.refreshInterval = parseInt(f.refreshInterval), f.refreshInterval > 0 && (n = window.setInterval(S, f.refreshInterval)), i = l(x)
        }, w = function() {
            return f.vertical ? f.container.scrollTop() : f.container.scrollLeft()
        }, b = function(t) {
            f.vertical ? f.container.scrollTop(t) : f.container.scrollLeft(t)
        }, x = function() {
            if (i = l(x), y && d) {
                var e = t.isArray(d) ? d : p.slice(0), n = m;
                m = c.scrollPos();
                var r = m - n;
                _ = 0 === r ? "PAUSED" : r > 0 ? "FORWARD" : "REVERSE", 0 > r && e.reverse(), t.each(e, function(t, e) {
                    e.update(!0)
                }), 0 === e.length && f.loglevel >= 3, d = !1
            }
        }, P = function(t) {
            "resize" == t.type && (v = f.vertical ? f.container.height() : f.container.width()), d = !0
        }, S = function() {
            g || v != (f.vertical ? f.container.height() : f.container.width()) && f.container.trigger("resize"), t.each(p, function(t, e) {
                e.refresh()
            })
        }, C = function(t) {
            if (t.length <= 1)
                return t;
            var e = t.slice(0);
            return e.sort(function(t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
            }), e
        };
        return this.addScene = function(e) {
            return t.isArray(e) ? t.each(e, function(t, e) {
                c.addScene(e)
            }) : e instanceof r && (e.parent() != c ? e.addTo(c) : t.inArray(e, p) < 0 && (p.push(e), p = C(p), e.on("shift." + a + "_sort", function() {
                p = C(p)
            }), t.each(f.globalSceneOptions, function(t, i) {
                e[t] && e[t].call(e, i)
            }))), c
        }, this.removeScene = function(e) {
            if (t.isArray(e))
                t.each(e, function(t, e) {
                    c.removeScene(e)
                });
            else {
                var i = t.inArray(e, p);
                i > -1 && (e.off("shift." + a + "_sort"), p.splice(i, 1), e.remove())
            }
            return c
        }, this.updateScene = function(e, i) {
            return t.isArray(e) ? t.each(e, function(t, e) {
                c.updateScene(e, i)
            }) : i ? e.update(!0) : (t.isArray(d) || (d = []), -1 == t.inArray(e, d) && d.push(e), d = C(d)), c
        }, this.update = function(t) {
            return P({type: "resize"}), t && x(), c
        }, this.scrollTo = function(e) {
            if (e instanceof r)
                e.parent() === c ? c.scrollTo(e.scrollOffset()) : log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", e);
            else if ("string" === t.type(e) || o(e) || e instanceof t) {
                var i = t(e).first();
                if (i[0]) {
                    var n = f.vertical ? "top" : "left", a = s(f.container), l = s(i);
                    g || (a[n] -= c.scrollPos()), c.scrollTo(l[n] - a[n])
                } else
                    log(2, "scrollTo(): The supplied element could not be found. Scroll cancelled.", e)
            } else
                t.isFunction(e) ? b = e : b.call(f.container[0], e);
            return c
        }, this.scrollPos = function(e) {
            return arguments.length ? (t.isFunction(e) && (w = e), c) : w.call(c)
        }, this.info = function(t) {
            var e = {size: v,vertical: f.vertical,scrollPos: m,scrollDirection: _,container: f.container,isDocument: g};
            return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
        }, this.loglevel = function(t) {
            return arguments.length ? (f.loglevel != t && (f.loglevel = t), c) : f.loglevel
        }, this.enabled = function(t) {
            return arguments.length ? (y != t && (y = !!t, c.updateScene(p, !0)), c) : y
        }, this.destroy = function(t) {
            window.clearTimeout(n);
            for (var e = p.length; e--; )
                p[e].destroy(t);
            return f.container.off("scroll resize", P), u(i), null
        }, T(), c
    };
    n.version = "1.3.0";
    var r = function(e) {
        var r, o, l, u, h, c, f, p = {onCenter: .5,onEnter: 1,onLeave: 0}, d = "ScrollScene", m = {duration: 0,offset: 0,triggerElement: null,triggerHook: "onCenter",reverse: !0,tweenChanges: !1,loglevel: 2}, _ = this, g = t.extend({}, m, e), v = "BEFORE", y = 0, T = {start: 0,end: 0}, w = 0, b = !0, x = {unknownOptionSupplied: function() {
                t.each(g, function(t) {
                    m.hasOwnProperty(t) || delete g[t]
                })
            },duration: function() {
                if (t.isFunction(g.duration)) {
                    r = g.duration;
                    try {
                        g.duration = parseFloat(r())
                    } catch (e) {
                        r = void 0, g.duration = m.duration
                    }
                } else
                    g.duration = parseFloat(g.duration), (!t.isNumeric(g.duration) || g.duration < 0) && (g.duration = m.duration)
            },offset: function() {
                g.offset = parseFloat(g.offset), t.isNumeric(g.offset) || (g.offset = m.offset)
            },triggerElement: function() {
                null !== g.triggerElement && 0 === t(g.triggerElement).length && (g.triggerElement = m.triggerElement)
            },triggerHook: function() {
                g.triggerHook in p || (g.triggerHook = t.isNumeric(g.triggerHook) ? Math.max(0, Math.min(parseFloat(g.triggerHook), 1)) : m.triggerHook)
            },reverse: function() {
                g.reverse = !!g.reverse
            },tweenChanges: function() {
                g.tweenChanges = !!g.tweenChanges
            }}, P = function() {
            S(), _.on("change.internal", function(t) {
                "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? D() : "reverse" === t.what && _.update())
            }).on("shift.internal", function(t) {
                k(), _.update(), ("AFTER" === v && "duration" === t.reason || "DURING" === v && 0 === g.duration) && E()
            }).on("progress.internal", function() {
                R(), E()
            }).on("destroy", function(t) {
                t.preventDefault()
            })
        }, S = function(e) {
            if (arguments.length)
                t.isArray(e) || (e = [e]);
            else {
                e = [];
                for (var i in x)
                    e.push(i)
            }
            t.each(e, function(t, e) {
                x[e] && x[e]()
            })
        }, C = function(t, e) {
            var i = !1, n = g[t];
            return g[t] != e && (g[t] = e, S(t), i = n != g[t]), i
        }, k = function() {
            T = {start: w + g.offset}, o && g.triggerElement && (T.start -= o.info("size") * _.triggerHook()), T.end = T.start + g.duration
        }, A = function(t) {
            if (r) {
                var e = "duration";
                C(e, r.call(_)) && !t && (_.trigger("change", {what: e,newval: g[e]}), _.trigger("shift", {reason: e}))
            }
        }, D = function(e) {
            var i = 0;
            if (o && g.triggerElement) {
                for (var n = t(g.triggerElement).first(), r = o.info(), a = s(r.container), l = r.vertical ? "top" : "left"; n.parent().data("ScrollMagicPinSpacer"); )
                    n = n.parent();
                var u = s(n);
                r.isDocument || (a[l] -= o.scrollPos()), i = u[l] - a[l]
            }
            var h = i != w;
            w = i, h && !e && _.trigger("shift", {reason: "triggerElementPosition"})
        }, R = function(t) {
            if (l) {
                var e = t >= 0 && 1 >= t ? t : y;
                if (-1 === l.repeat())
                    if ("DURING" === v && l.paused())
                        l.play();
                    else {
                        if ("DURING" === v || l.paused())
                            return !1;
                        l.pause()
                    }
                else {
                    if (e == l.progress())
                        return !1;
                    0 === g.duration ? "DURING" === v ? l.play() : l.reverse() : g.tweenChanges ? l.tweenTo(e * l.duration()) : l.progress(e).pause()
                }
                return !0
            }
            return !1
        }, E = function(t) {
            if (u && o) {
                var e = o.info();
                if (t || "DURING" !== v) {
                    var i = {position: h.inFlow ? "relative" : "absolute",top: 0,left: 0}, n = u.css("position") != i.position;
                    h.pushFollowers ? g.duration > 0 && ("AFTER" === v && 0 === parseFloat(h.spacer.css("padding-top")) ? n = !0 : "BEFORE" === v && 0 === parseFloat(h.spacer.css("padding-bottom")) && (n = !0)) : i[e.vertical ? "top" : "left"] = g.duration * y, u.css(i), n && (u.removeClass(h.pinnedClass), O())
                } else {
                    "fixed" != u.css("position") && (u.css("position", "fixed"), O(), u.addClass(h.pinnedClass));
                    var r = s(h.spacer, !0), a = g.reverse || 0 === g.duration ? e.scrollPos - T.start : Math.round(y * g.duration * 10) / 10;
                    r.top -= parseFloat(h.spacer.css("margin-top")), r[e.vertical ? "top" : "left"] += a, u.css({top: r.top,left: r.left})
                }
            }
        }, O = function() {
            if (u && o && h.inFlow) {
                var e = "AFTER" === v, i = "BEFORE" === v, n = "DURING" === v, r = "fixed" == u.css("position"), s = o.info("vertical"), l = h.spacer.children().first(), c = a(h.spacer.css("display")), f = {};
                c ? (f["margin-top"] = i || n && r ? u.css("margin-top") : "auto", f["margin-bottom"] = e || n && r ? u.css("margin-bottom") : "auto") : f["margin-top"] = f["margin-bottom"] = "auto", h.relSize.width || h.relSize.autoFullWidth ? r ? t(window).width() == h.spacer.parent().width() ? u.css("width", h.relSize.autoFullWidth ? "100%" : "inherit") : u.css("width", h.spacer.width()) : u.css("width", "100%") : (f["min-width"] = l.outerWidth(!l.is(u)), f.width = r ? f["min-width"] : "auto"), h.relSize.height ? r ? t(window).height() == h.spacer.parent().height() ? u.css("height", "inherit") : u.css("height", h.spacer.height()) : u.css("height", "100%") : (f["min-height"] = l.outerHeight(!c), f.height = r ? f["min-height"] : "auto"), h.pushFollowers && (f["padding" + (s ? "Top" : "Left")] = g.duration * y, f["padding" + (s ? "Bottom" : "Right")] = g.duration * (1 - y)), h.spacer.css(f)
            }
        }, N = function() {
            o && u && "DURING" === v && !o.info("isDocument") && E()
        }, L = function() {
            o && u && "DURING" === v && ((h.relSize.width || h.relSize.autoFullWidth) && t(window).width() != h.spacer.parent().width() || h.relSize.height && t(window).height() != h.spacer.parent().height()) && O()
        }, M = function(t) {
            o && u && "DURING" === v && !o.info("isDocument") && (t.preventDefault(), o.scrollTo(o.info("scrollPos") - (t.originalEvent.wheelDelta / 3 || 30 * -t.originalEvent.detail)))
        };
        return this.parent = function() {
            return o
        }, this.duration = function(e) {
            var i = "duration";
            return arguments.length ? (t.isFunction(e) || (r = void 0), C(i, e) && (_.trigger("change", {what: i,newval: g[i]}), _.trigger("shift", {reason: i})), _) : g[i]
        }, this.offset = function(t) {
            var e = "offset";
            return arguments.length ? (C(e, t) && (_.trigger("change", {what: e,newval: g[e]}), _.trigger("shift", {reason: e})), _) : g[e]
        }, this.triggerElement = function(t) {
            var e = "triggerElement";
            return arguments.length ? (C(e, t) && _.trigger("change", {what: e,newval: g[e]}), _) : g[e]
        }, this.triggerHook = function(e) {
            var i = "triggerHook";
            return arguments.length ? (C(i, e) && (_.trigger("change", {what: i,newval: g[i]}), _.trigger("shift", {reason: i})), _) : t.isNumeric(g[i]) ? g[i] : p[g[i]]
        }, this.reverse = function(t) {
            var e = "reverse";
            return arguments.length ? (C(e, t) && _.trigger("change", {what: e,newval: g[e]}), _) : g[e]
        }, this.tweenChanges = function(t) {
            var e = "tweenChanges";
            return arguments.length ? (C(e, t) && _.trigger("change", {what: e,newval: g[e]}), _) : g[e]
        }, this.loglevel = function(t) {
            var e = "loglevel";
            return arguments.length ? (C(e, t) && _.trigger("change", {what: e,newval: g[e]}), _) : g[e]
        }, this.state = function() {
            return v
        }, this.triggerPosition = function() {
            var t = g.offset;
            return o && (t += g.triggerElement ? w : o.info("size") * _.triggerHook()), t
        }, this.triggerOffset = function() {
            return _.triggerPosition()
        }, this.scrollOffset = function() {
            return T.start
        }, this.update = function(t) {
            if (o)
                if (t)
                    if (o.enabled() && b) {
                        var e, i = o.info("scrollPos");
                        e = g.duration > 0 ? (i - T.start) / (T.end - T.start) : i >= T.start ? 1 : 0, _.trigger("update", {startPos: T.start,endPos: T.end,scrollPos: i}), _.progress(e)
                    } else
                        u && "DURING" === v && E(!0);
                else
                    o.updateScene(_, !1);
            return _
        }, this.refresh = function() {
            return A(), D(), _
        }, this.progress = function(t) {
            if (arguments.length) {
                var e = !1, i = v, n = o ? o.info("scrollDirection") : "PAUSED", r = g.reverse || t >= y;
                if (0 === g.duration ? (e = y != t, y = 1 > t && r ? 0 : 1, v = 0 === y ? "BEFORE" : "DURING") : 0 >= t && "BEFORE" !== v && r ? (y = 0, v = "BEFORE", e = !0) : t > 0 && 1 > t && r ? (y = t, v = "DURING", e = !0) : t >= 1 && "AFTER" !== v ? (y = 1, v = "AFTER", e = !0) : "DURING" !== v || r || E(), e) {
                    var s = {progress: y,state: v,scrollDirection: n}, a = v != i, l = function(t) {
                        _.trigger(t, s)
                    };
                    a && "DURING" !== i && (l("enter"), l("BEFORE" === i ? "start" : "end")), l("progress"), a && "DURING" !== v && (l("BEFORE" === v ? "start" : "end"), l("leave"))
                }
                return _
            }
            return y
        }, this.setTween = function(t) {
            if (!i)
                return _;
            l && _.removeTween();
            try {
                l = new i({smoothChildTiming: !0}).add(t).pause()
            } catch (e) {
            }finally {
                t.repeat && -1 === t.repeat() && (l.repeat(-1), l.yoyo(t.yoyo()))
            }
            return R(), _
        }, this.removeTween = function(t) {
            return l && (t && R(0), l.kill(), l = void 0), _
        }, this.setPin = function(e, i) {
            var n = {pushFollowers: !0,spacerClass: "scrollmagic-pin-spacer",pinnedClass: ""};
            if (i = t.extend({}, n, i), e = t(e).first(), 0 === e.length)
                return _;
            if ("fixed" == e.css("position"))
                return _;
            if (u) {
                if (u === e)
                    return _;
                _.removePin()
            }
            u = e, u.parent().hide();
            var r = "absolute" != u.css("position"), s = u.css(["display", "top", "left", "bottom", "right"]), o = u.css(["width", "height"]);
            u.parent().show(), "0px" === o.width && r && a(s.display), !r && i.pushFollowers && (i.pushFollowers = !1);
            var l = t("<div></div>").addClass(i.spacerClass).css(s).data("ScrollMagicPinSpacer", !0).css({position: r ? "relative" : "absolute","margin-left": "auto","margin-right": "auto","box-sizing": "content-box"}), c = u[0].style;
            return h = {spacer: l,relSize: {width: "%" === o.width.slice(-1),height: "%" === o.height.slice(-1),autoFullWidth: "0px" === o.width && r && a(s.display)},pushFollowers: i.pushFollowers,inFlow: r,origStyle: {width: c.width || "",position: c.position || "",top: c.top || "",left: c.left || "",bottom: c.bottom || "",right: c.right || "","box-sizing": c["box-sizing"] || "","-moz-box-sizing": c["-moz-box-sizing"] || "","-webkit-box-sizing": c["-webkit-box-sizing"] || ""},pinnedClass: i.pinnedClass}, h.relSize.width && l.css("width", o.width), h.relSize.height && l.css("height", o.height), u.before(l).appendTo(l).css({position: r ? "relative" : "absolute",top: "auto",left: "auto",bottom: "auto",right: "auto"}), (h.relSize.width || h.relSize.autoFullWidth) && u.css("box-sizing", "border-box"), t(window).on("scroll." + d + "_pin resize." + d + "_pin", N), u.on("mousewheel DOMMouseScroll", M), E(), _
        }, this.removePin = function(e) {
            return u && (e || !o ? (u.insertBefore(h.spacer).css(h.origStyle), h.spacer.remove()) : "DURING" === v && E(!0), t(window).off("scroll." + d + "_pin resize." + d + "_pin"), u.off("mousewheel DOMMouseScroll", M), u = void 0), _
        }, this.setClassToggle = function(e, i) {
            var n = t(e);
            return 0 === n.length || "string" !== t.type(i) ? _ : (c = i, f = n, _.on("enter.internal_class leave.internal_class", function(t) {
                f.toggleClass(c, "enter" === t.type)
            }), _)
        }, this.removeClassToggle = function(t) {
            return f && t && f.removeClass(c), _.off("start.internal_class end.internal_class"), c = void 0, f = void 0, _
        }, this.addTo = function(t) {
            return t instanceof n && o != t && (o && o.removeScene(_), o = t, S(), A(!0), D(!0), k(), O(), o.info("container").on("resize." + d, function() {
                L(), _.triggerHook() > 0 && _.trigger("shift", {reason: "containerSize"})
            }), t.addScene(_), _.update()), _
        }, this.enabled = function(t) {
            return arguments.length ? (b != t && (b = !!t, _.update(!0)), _) : b
        }, this.remove = function() {
            if (o) {
                o.info("container").off("resize." + d);
                var t = o;
                o = void 0, t.removeScene(_)
            }
            return _
        }, this.destroy = function(t) {
            return _.removeTween(t), _.removePin(t), _.removeClassToggle(t), _.trigger("destroy", {reset: t}), _.remove(), _.off("start end enter leave progress change update shift destroy shift.internal change.internal progress.internal"), null
        }, this.on = function(e, i) {
            if (t.isFunction(i)) {
                var n = t.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + d + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + d);
                t(_).on(n, i)
            }
            return _
        }, this.off = function(e, i) {
            var n = t.trim(e).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1." + d + "_$2").replace(/( |^)(\w+)(?= |$)/g, "$1$2." + d + "$3");
            return t(_).off(n, i), _
        }, this.trigger = function(e, i) {
            var n = t.Event(t.trim(e).toLowerCase(), i);
            return t(_).trigger(n), _
        }, P(), _
    }, s = function(t, e) {
        var i = {top: 0,left: 0};
        if (t = t[0], t && t.getBoundingClientRect) {
            var n = t.getBoundingClientRect();
            i.top = n.top, i.left = n.left, e || (i.top += (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), i.left += (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0))
        }
        return i
    }, o = function(t) {
        return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, a = function(t) {
        return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
    }, l = window.requestAnimationFrame, u = window.cancelAnimationFrame;
    return function(t) {
        var e, i = 0, n = ["ms", "moz", "webkit", "o"];
        for (e = 0; !l && e < n.length; ++e)
            l = t[n[e] + "RequestAnimationFrame"], u = t[n[e] + "CancelAnimationFrame"] || t[n[e] + "CancelRequestAnimationFrame"];
        l || (l = function(e) {
            var n = (new Date).getTime(), r = Math.max(0, 16 - (n - i)), s = t.setTimeout(function() {
                e(n + r)
            }, r);
            return i = n + r, s
        }), u || (u = function(e) {
            t.clearTimeout(e)
        })
    }(window), {Controller: n,Scene: r}
}), define("hasDocumentResized", ["jquery"], function(t) {
    return function() {
        var e = t(document).outerHeight(!0), i = this.documentHeight !== e;
        return i && (this.documentHeight = e), i
    }
}), define("scrollingAssets", ["jquery", "scrollMagic", "hasDocumentResized", "windowListener"], function(t, e, i, n) {
    "use strict";
    var r = 250, s = "asset-waypoint";
    return {$waypoints: null,$rightColumns: null,scrollMagicController: null,scrollMagicScenes: [],hasBeenSetup: null,init: function() {
            this.scrollMagicController = new e.Controller, this.$waypoints = t('[data-waypoint="true"]'), this.$rightColumns = t(".grid-even-split--right"), this.hasBeenSetup = !1, n.breakpointDesktop() && (this.addClassToWaypoints(), this.setUpAssets());
            var s = !1;
            t(window).resize(t.proxy(function() {
                s = !0
            }, this)), setInterval(t.proxy(function() {
                if (i() || s) {
                    s = !1;
                    var e = this.scrollMagicController.scrollPos();
                    n.breakpointDesktop() && (this.hasBeenSetup || (this.addClassToWaypoints(), this.setUpAssets()));
                    var r = t("body").is(".menu-open, .transitioning, .transition-end");
                    r || (this.recalculateScenePositions(), this.resetAssetPositionsToStartPoint(), this.resetAssetPositionsPassedScrollPositionToEndPoint(e))
                }
            }, this), r)
        },resetAssetPositionsToStartPoint: function() {
            t(".in-waypoint").css("top", 0)
        },resetAssetPositionsPassedScrollPositionToEndPoint: function(e) {
            this.getWaypointsPastPosition(e).each(t.proxy(function(e, i) {
                var n = t(i), r = this.getAssetForWaypoint(n);
                r.css("top", r.data("scroll-end-position"))
            }, this))
        },recalculateScenePositions: function() {
            for (var t = 0; t < this.scrollMagicScenes.length; t++)
                for (var e = this.scrollMagicScenes[t], i = 0; i < e.length; i++) {
                    var n = e[i], r = n.triggerElement(), s = this.getWaypointForAsset(r);
                    this.updateAssetPositionFromWaypoint(r, s), this.createSceneForAsset(r)
                }
        },getAssetForWaypoint: function(e) {
            return t(".in-waypoint").filter(function(i, n) {
                var r = t(n);
                return r.data("order") === e.data("order") && r.data("row") === e.data("row")
            }).first()
        },getWaypointForAsset: function(e) {
            return this.$waypoints.filter(function(i, n) {
                var r = t(n);
                return r.data("order") === e.data("order") && r.data("row") === e.data("row")
            }).first()
        },getWaypointsPastPosition: function(e) {
            return this.$waypoints.filter(function(i, n) {
                var r = t(n);
                return r.offset().top < e
            })
        },addClassToWaypoints: function() {
            this.$rightColumns.find(this.$waypoints).closest(".asset").addClass(s)
        },setUpAssets: function() {
            this.hasBeenSetup === !1 && this.$rightColumns.each(t.proxy(function(e, i) {
                t(i).find(this.$waypoints).each(t.proxy(function(n, r) {
                    var s = t(r);
                    s.data("order", n).data("row", e);
                    var o = t(i).siblings(".grid-waypoint-holder").find(t(".waypoint-display"));
                    this.addAssetsToWaypointContainerWithIndex(o, n, e, s)
                }, this))
            }, this)), this.hasBeenSetup = !0, t(window).trigger("scrolling-assets:setup")
        },getAssetFromContainerForOrderAndRow: function(e, i, n) {
            return e.filter(function(e, i) {
                return t(i).data("order") === e && t(i).data("row") === n
            })
        },createOrReturnAssetForWaypointContainerAtIndex: function(e, i, n) {
            var r = this.getAssetFromContainerForOrderAndRow(e, i, n);
            if (0 === r.length) {
                var s = t('<div class="asset in-waypoint"></div>').data("order", i).data("row", n);
                r = e.append(s).find(".asset").eq(i)
            }
            return r
        },addAssetsToWaypointContainerWithIndex: function(t, e, i, n) {
            var r = this.createOrReturnAssetForWaypointContainerAtIndex(t, e, i);
            this.updateAssetPositionFromWaypoint(r, n), this.displayAssetForWaypoint(r, n), this.createSceneForAsset(r)
        },getPositionsForAsset: function(t, e) {
            var i = e.position().top, n = 0, r = e.parents(".grid-even-split");
            return n = e.closest(".asset").nextAll(".asset-waypoint").first().length ? e.closest(".asset").nextAll(".asset-waypoint").first().position().top - (e.position().top + t.outerHeight(!0)) : r.outerHeight(!0) - (i + t.outerHeight(!0)), 0 == e.data("order") && (n += i, i = 0), {startPosition: i,endPosition: n > 0 ? n : 0}
        },updateAssetPositionFromWaypoint: function(t, e) {
            var i = this.getPositionsForAsset(t, e);
            this.positionAsset({$asset: t,$waypoint: e,startPosition: i.startPosition,endPosition: i.endPosition})
        },positionAsset: function(t) {
            t.$asset.css("top", t.startPosition).data("scroll-start-position", t.startPosition).data("scroll-end-position", t.endPosition), t.$waypoint.data("scroll-start-position", t.startPosition).data("scroll-end-position", t.endPosition)
        },displayAssetForWaypoint: function(t, e) {
            var i = e.data("waypoint-type");
            "image" == i ? this.displayImageWaypointForAsset(t, e) : "quote" == i ? this.displayQuoteWaypointForAsset(t, e) : "video" == i && this.displayVideoWaypointForAsset(t, e)
        },displayImageWaypointForAsset: function(t, e) {
            var i = e.attr("src");
            t.addClass("asset-image").css("background-image", "url(" + i + ")")
        },displayQuoteWaypointForAsset: function(t, e) {
            var i = e.clone();
            t.addClass("asset-quote").prepend(i)
        },displayVideoWaypointForAsset: function(t, e) {
            var i = e.clone(), n = e.find("img").attr("src");
            t.addClass("asset-video").prepend(i), t.find(".video-placeholder").css("background-image", "url(" + n + ")").find("img").remove()
        },getSceneForRowAndOrder: function(t, e) {
            return t in this.scrollMagicScenes && e in this.scrollMagicScenes[t] ? this.scrollMagicScenes[t][e] : null
        },setSceneForRowAndOrder: function(t, e, i) {
            e in this.scrollMagicScenes || (this.scrollMagicScenes[e] = []), this.scrollMagicScenes[e][i] = t
        },createSceneForAsset: function(t) {
            var i = this.getSceneForRowAndOrder(t.data("row"), t.data("order"));
            i || (i = new e.Scene({triggerHook: "onLeave"}), i.setPin(t, {pinnedClass: "stuck",pushFollowers: !1}).addTo(this.scrollMagicController)), i.triggerPosition(t.data("scroll-start-position")), i.duration(t.data("scroll-end-position")), i.triggerElement(t), this.setSceneForRowAndOrder(i, t.data("row"), t.data("order")), this.scrollMagicController.update(), t.parent().css("top", t.data("scroll-start-position"))
        }}
}), define("videoAsset", ["jquery"], function(t) {
    return {init: function() {
            t(window).on("scrolling-assets:setup", t.proxy(function() {
                this.addModal(), this.playClick()
            }, this)), this.playClick()
        },addModal: function() {
            var e = '<div class="modal"><div class="modal-center"></div></div>', i = t(".waypoint-display .asset-video");
            i.each(function(i, n) {
                var r = t(n), s = r.find(".video");
                r.after(e), r.parent().find(".modal .modal-center").prepend(s)
            })
        },playClick: function() {
            var e = t(".asset-video"), i = t(".asset-video .play-button"), n = t("body"), r = "video-modal", s = "reveal-video";
            i.on("click", t.proxy(function(e) {
                var i = t(e.currentTarget), o = i.closest(".asset");
                e.stopPropagation(), o.hasClass("in-waypoint") ? n.addClass(r) : o.addClass(s)
            }, this)), this.modalClose(n, r), this.playClose(n, e, r, s)
        },modalClose: function(e, i) {
            t(document).keyup(function(e) {
                27 == e.keyCode && t("body").removeClass(i)
            }), t(".modal").on("click", function() {
                t("body").removeClass(i)
            })
        },playClose: function(e, i, n, r) {
            t(".video-placeholder").on("click", function(s) {
                if (console.log("click"), e.hasClass(n)) {
                    {
                        t(s.currentTarget)
                    }
                    s.stopPropagation()
                }
                i.hasClass(r) && i.removeClass(r)
            })
        }}
}), define("homeImageSplit", ["jquery", "windowListener"], function(t) {
    return {init: function() {
            this.getAsset()
        },getAsset: function() {
            var e = t(".homepage-promo-split"), i = e.find('[data-waypoint="true"]'), n = i.attr("src");
            e.find(".waypoint-display .asset").css("background-image", "url(" + n + ")")
        }}
}), define("backgroundImage", ["jquery"], function(t) {
    return {init: function() {
            this.backgroundImage()
        },backgroundImage: function() {
            t(".teaser .teaser--thumbnail-container").each(function() {
                var e = t(this).find("img").attr("src");
                t(this).css("background-image", "url(" + e + ")")
            }), t(".split--container .split--half img").each(function() {
                t(this).parents(".split--container").find(".text-image-display").css("background-image", "url(" + t(this).attr("src") + ")")
            })
        }}
}), define("tabbing", ["jquery"], function(t) {
    return {init: function() {
            this.focus(), t(".view-blog .view-filters .views-exposed-form .form-radios .form-item input").wrapInner("<a></a>")
        },focus: function() {
            t("a.numiko-logo").focus(function() {
                t("body").removeClass("menu-open")
            })
        }}
})