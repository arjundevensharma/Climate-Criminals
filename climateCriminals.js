function e(e) { return e && e.__esModule ? e.default : e }
var t = {};
function n(e) { var t = e.getBoundingClientRect(); return { width: t.width, height: t.height, top: t.top, right: t.right, bottom: t.bottom, left: t.left, x: t.left, y: t.top } }
function r(e) { if (null == e) return window; if ("[object Window]" !== e.toString()) { var t = e.ownerDocument; return t && t.defaultView || window } return e }
function o(e) { var t = r(e); return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset } }
function i(e) { return e instanceof r(e).Element || e instanceof Element }
function a(e) { return e instanceof r(e).HTMLElement || e instanceof HTMLElement }
function s(e) { return "undefined" != typeof ShadowRoot && (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot) }
function c(e) { return e ? (e.nodeName || "").toLowerCase() : null }
function u(e) { return ((i(e) ? e.ownerDocument : e.document) || window.document).documentElement }
function f(e) { return n(u(e)).left + o(e).scrollLeft }
function l(e) { return r(e).getComputedStyle(e) }
function p(e) { var t = l(e), n = t.overflow, r = t.overflowX, o = t.overflowY; return /auto|scroll|overlay|hidden/.test(n + o + r) }
function d(e, t, i) { void 0 === i && (i = !1); var s, l, d = u(t), h = n(e), m = a(t), v = { scrollLeft: 0, scrollTop: 0 }, g = { x: 0, y: 0 }; return (m || !m && !i) && (("body" !== c(t) || p(d)) && (v = (s = t) !== r(s) && a(s) ? { scrollLeft: (l = s).scrollLeft, scrollTop: l.scrollTop } : o(s)), a(t) ? ((g = n(t)).x += t.clientLeft, g.y += t.clientTop) : d && (g.x = f(d))), { x: h.left + v.scrollLeft - g.x, y: h.top + v.scrollTop - g.y, width: h.width, height: h.height } }
function h(e) { var t = n(e), r = e.offsetWidth, o = e.offsetHeight; return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: r, height: o } }
function m(e) { return "html" === c(e) ? e : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || u(e) }
function v(e) { return ["html", "body", "#document"].indexOf(c(e)) >= 0 ? e.ownerDocument.body : a(e) && p(e) ? e : v(m(e)) }
function g(e, t) { var n; void 0 === t && (t = []); var o = v(e), i = o === (null == (n = e.ownerDocument) ? void 0 : n.body), a = r(o), s = i ? [a].concat(a.visualViewport || [], p(o) ? o : []) : o, c = t.concat(s); return i ? c : c.concat(g(m(s))) }
function y(e) { return ["table", "td", "th"].indexOf(c(e)) >= 0 }
function b(e) { return a(e) && "fixed" !== l(e).position ? e.offsetParent : null }

function x(e) {
    for (var t = r(e), n = b(e); n && y(n) && "static" === l(n).position;) n = b(n);
    return n && ("html" === c(n) || "body" === c(n) && "static" === l(n).position) ? t : n || function(e) {
        var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
        if (-1 !== navigator.userAgent.indexOf("Trident") && a(e) && "fixed" === l(e).position) return null;
        for (var n = m(e); a(n) && ["html", "body"].indexOf(c(n)) < 0;) {
            var r = l(n);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
            n = n.parentNode;
        }
        return null;
    }(e) || t
    }
    t = function() {
        "use strict";
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
            t = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            },
            n = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                };
            }(),
            r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            },
            o = function() {
                function e(n) {
                    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5e3;
                    t(this, e), this.ctx = n, this.iframes = r, this.exclude = o, this.iframesTimeout = i;
                }
                return n(e, [{
                    key: "getContexts",
                    value: function() {
                        var e = [];
                        return (void 0 !== this.ctx && this.ctx ? NodeList.prototype.isPrototypeOf(this.ctx) ? Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? this.ctx : "string" == typeof this.ctx ? Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : [this.ctx] : []).forEach((function(t) {
                            var n = e.filter((function(e) {
                                return e.contains(t);
                            })).length > 0; - 1 !== e.indexOf(t) || n || e.push(t);
                        })), e;
                    }
                }, {
                    key: "getIframeContents",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                            r = void 0;
                        try {
                            var o = e.contentWindow;
                            if (r = o.document, !o || !r) throw new Error("iframe inaccessible");
                        } catch (e) {
                            n();
                        }
                        r && t(r);
                    }
                }, {
                    key: "isIframeBlank",
                    value: function(e) {
                        var t = "about:blank",
                            n = e.getAttribute("src").trim();
                        return e.contentWindow.location.href === t && n !== t && n;
                    }
                }, {
                    key: "observeIframeLoad",
                    value: function(e, t, n) {
                        var r = this,
                            o = !1,
                            i = null,
                            a = function a() {
                                if (!o) {
                                    o = !0, clearTimeout(i);
                                    try {
                                        r.isIframeBlank(e) || (e.removeEventListener("load", a), r.getIframeContents(e, t, n));
                                    } catch (e) {
                                        n();
                                    }
                                }
                            };
                        e.addEventListener("load", a), i = setTimeout(a, this.iframesTimeout);
                    }
                }, {
                    key: "onIframeReady",
                    value: function(e, t, n) {
                        try {
                            "complete" === e.contentWindow.document.readyState ? this.isIframeBlank(e) ? this.observeIframeLoad(e, t, n) : this.getIframeContents(e, t, n) : this.observeIframeLoad(e, t, n);
                        } catch (e) {
                            n();
                        }
                    }
                }, {
                    key: "waitForIframes",
                    value: function(e, t) {
                        var n = this,
                            r = 0;
                        this.forEachIframe(e, (function() {
                            return !0;
                        }), (function(e) {
                            r++, n.waitForIframes(e.querySelector("html"), (function() {
                                --r || t();
                            }));
                        }), (function(e) {
                            e || t();
                        }));
                    }
                }, {
                    key: "forEachIframe",
                    value: function(t, n, r) {
                        var o = this,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                            a = t.querySelectorAll("iframe"),
                            s = a.length,
                            c = 0;
                        a = Array.prototype.slice.call(a);
                        var u = function() {
                            --s <= 0 && i(c);
                        };
                        s || u(), a.forEach((function(t) {
                            e.matches(t, o.exclude) ? u() : o.onIframeReady(t, (function(e) {
                                n(t) && (c++, r(e)), u();
                            }), u);
                        }));
                    }
                }, {
                    key: "createIterator",
                    value: function(e, t, n) {
                        return document.createNodeIterator(e, t, n, !1);
                    }
                }, {
                    key: "createInstanceOnIframe",
                    value: function(t) {
                        return new e(t.querySelector("html"), this.iframes);
                    }
                }, {
                    key: "compareNodeIframe",
                    value: function(e, t, n) {
                        if (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING) {
                            if (null === t) return !0;
                            if (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING) return !0;
                        }
                        return !1;
                    }
                }, {
                    key: "getIteratorNode",
                    value: function(e) {
                        var t = e.previousNode();
                        return {
                            prevNode: t,
                            node: (null === t || e.nextNode()) && e.nextNode()
                        };
                    }
                }, {
                    key: "checkIframeFilter",
                    value: function(e, t, n, r) {
                        var o = !1,
                            i = !1;
                        return r.forEach((function(e, t) {
                            e.val === n && (o = t, i = e.handled);
                        })), this.compareNodeIframe(e, t, n) ? (!1 !== o || i ? !1 === o || i || (r[o].handled = !0) : r.push({
                            val: n,
                            handled: !0
                        }), !0) : (!1 === o && r.push({
                            val: n,
                            handled: !1
                        }), !1);
                    }
                }, {
                    key: "handleOpenIframes",
                    value: function(e, t, n, r) {
                        var o = this;
                        e.forEach((function(e) {
                            e.handled || o.getIframeContents(e.val, (function(e) {
                                o.createInstanceOnIframe(e).forEachNode(t, n, r);
                            }));
                        }));
                    }
                }, {
                    key: "iterateThroughNodes",
                    value: function(e, t, n, r, o) {
                        for (var i = this, a = this.createIterator(t, e, r), s = [], c = [], u = void 0, f = void 0, l = function() {
                                var e = i.getIteratorNode(a);
                                return f = e.prevNode, u = e.node;
                            }; l();) this.iframes && this.forEachIframe(t, (function(e) {
                            return i.checkIframeFilter(u, f, e, s);
                        }), (function(t) {
                            i.createInstanceOnIframe(t).forEachNode(e, (function(e) {
                                return c.push(e);
                            }), r);
                        })), c.push(u);
                        c.forEach((function(e) {
                            n(e);
                        })), this.iframes && this.handleOpenIframes(s, e, n, r), o();
                    }
                }, {
                    key: "forEachNode",
                    value: function(e, t, n) {
                        var r = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                            i = this.getContexts(),
                            a = i.length;
                        a || o(), i.forEach((function(i) {
                            var s = function() {
                                r.iterateThroughNodes(e, i, t, n, (function() {
                                    --a <= 0 && o();
                                }));
                            };
                            r.iframes ? r.waitForIframes(i, s) : s();
                        }));
                    }
                }], [{
                    key: "matches",
                    value: function(e, t) {
                        var n = "string" == typeof t ? [t] : t,
                            r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
                        if (r) {
                            var o = !1;
                            return n.every((function(t) {
                                return !r.call(e, t) || (o = !0, !1);
                            })), o;
                        }
                        return !1;
                    }
                }]), e;
            }(),
            i = function() {
                function i(e) {
                    t(this, i), this.ctx = e, this.ie = !1;
                    var n = window.navigator.userAgent;
                    (n.indexOf("MSIE") > -1 || n.indexOf("Trident") > -1) && (this.ie = !0);
                }
                return n(i, [{
                    key: "log",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "debug",
                            r = this.opt.log;
                        this.opt.debug && "object" === (void 0 === r ? "undefined" : e(r)) && "function" == typeof r[n] && r[n]("mark.js: " + t);
                    }
                }, {
                    key: "escapeStr",
                    value: function(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    }
                }, {
                    key: "createRegExp",
                    value: function(e) {
                        return "disabled" !== this.opt.wildcards && (e = this.setupWildcardsRegExp(e)), e = this.escapeStr(e), Object.keys(this.opt.synonyms).length && (e = this.createSynonymsRegExp(e)), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)), this.opt.diacritics && (e = this.createDiacriticsRegExp(e)), e = this.createMergedBlanksRegExp(e), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.createJoinersRegExp(e)), "disabled" !== this.opt.wildcards && (e = this.createWildcardsRegExp(e)), e = this.createAccuracyRegExp(e);
                    }
                }, {
                    key: "createSynonymsRegExp",
                    value: function(e) {
                        var t = this.opt.synonyms,
                            n = this.opt.caseSensitive ? "" : "i",
                            r = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
                        for (var o in t)
                            if (t.hasOwnProperty(o)) {
                                var i = t[o],
                                    a = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(o) : this.escapeStr(o),
                                    s = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(i) : this.escapeStr(i);
                                "" !== a && "" !== s && (e = e.replace(new RegExp("(" + this.escapeStr(a) + "|" + this.escapeStr(s) + ")", "gm" + n), r + "(" + this.processSynonyms(a) + "|" + this.processSynonyms(s) + ")" + r));
                            }
                        return e;
                    }
                }, {
                    key: "processSynonyms",
                    value: function(e) {
                        return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)), e;
                    }
                }, {
                    key: "setupWildcardsRegExp",
                    value: function(e) {
                        return (e = e.replace(/(?:\\)*\?/g, (function(e) {
                            return "\\" === e.charAt(0) ? "?" : "";
                        }))).replace(/(?:\\)*\*/g, (function(e) {
                            return "\\" === e.charAt(0) ? "*" : "";
                        }));
                    }
                }, {
                    key: "createWildcardsRegExp",
                    value: function(e) {
                        var t = "withSpaces" === this.opt.wildcards; return e.replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*") } }, { key: "setupIgnoreJoinersRegExp", value: function (e) { return e.replace(/[^(|)\\]/g, (function (e, t, n) { var r = n.charAt(t + 1); return /[(|)\\]/.test(r) || "" === r ? e : e + "\0" })) } }, { key: "createJoinersRegExp", value: function (e) { var t = [], n = this.opt.ignorePunctuation; return Array.isArray(n) && n.length && t.push(this.escapeStr(n.join(""))), this.opt.ignoreJoiners && t.push("\\u00ad\\u200b\\u200c\\u200d"), t.length ? e.split(/\u0000+/).join("[" + t.join("") + "]*") : e } }, { key: "createDiacriticsRegExp", value: function (e) { var t = this.opt.caseSensitive ? "" : "i", n = this.opt.caseSensitive ? ["aàáảãạăằắẳẵặâầấẩẫậäåāą", "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćč", "CÇĆČ", "dđď", "DĐĎ", "eèéẻẽẹêềếểễệëěēę", "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïī", "IÌÍỈĨỊÎÏĪ", "lł", "LŁ", "nñňń", "NÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøō", "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rř", "RŘ", "sšśșş", "SŠŚȘŞ", "tťțţ", "TŤȚŢ", "uùúủũụưừứửữựûüůū", "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿ", "YÝỲỶỸỴŸ", "zžżź", "ZŽŻŹ"] : ["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćčCÇĆČ", "dđďDĐĎ", "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ", "lłLŁ", "nñňńNÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rřRŘ", "sšśșşSŠŚȘŞ", "tťțţTŤȚŢ", "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿYÝỲỶỸỴŸ", "zžżźZŽŻŹ"], r = []; return e.split("").forEach((function (o) { n.every((function (n) { if (-1 !== n.indexOf(o)) { if (r.indexOf(n) > -1) return !1; e = e.replace(new RegExp("[" + n + "]", "gm" + t), "[" + n + "]"), r.push(n) } return !0 })) })), e } }, { key: "createMergedBlanksRegExp", value: function (e) { return e.replace(/[\s]+/gim, "[\\s]+") } }, { key: "createAccuracyRegExp", value: function (e) { var t = this, n = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿", r = this.opt.accuracy, o = "string" == typeof r ? r : r.value, i = "string" == typeof r ? [] : r.limiters, a = ""; switch (i.forEach((function (e) { a += "|" + t.escapeStr(e) })), o) { case "partially": default: return "()(" + e + ")"; case "complementary": return "()([^" + (a = "\\s" + (a || this.escapeStr(n))) + "]*" + e + "[^" + a + "]*)"; case "exactly": return "(^|\\s" + a + ")(" + e + ")(?=$|\\s" + a + ")" } } }, { key: "getSeparatedKeywords", value: function (e) { var t = this, n = []; return e.forEach((function (e) { t.opt.separateWordSearch ? e.split(" ").forEach((function (e) { e.trim() && -1 === n.indexOf(e) && n.push(e) })) : e.trim() && -1 === n.indexOf(e) && n.push(e) })), { keywords: n.sort((function (e, t) { return t.length - e.length })), length: n.length } } }, { key: "isNumeric", value: function (e) { return Number(parseFloat(e)) == e } }, { key: "checkRanges", value: function (e) { var t = this; if (!Array.isArray(e) || "[object Object]" !== Object.prototype.toString.call(e[0])) return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(e), []; var n = [], r = 0; return e.sort((function (e, t) { return e.start - t.start })).forEach((function (e) { var o = t.callNoMatchOnInvalidRanges(e, r), i = o.start, a = o.end; o.valid && (e.start = i, e.length = a - i, n.push(e), r = a) })), n } }, { key: "callNoMatchOnInvalidRanges", value: function (e, t) { var n = void 0, r = void 0, o = !1; return e && void 0 !== e.start ? (r = (n = parseInt(e.start, 10)) + parseInt(e.length, 10), this.isNumeric(e.start) && this.isNumeric(e.length) && r - t > 0 && r - n > 0 ? o = !0 : (this.log("Ignoring invalid or overlapping range: " + JSON.stringify(e)), this.opt.noMatch(e))) : (this.log("Ignoring invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)), { start: n, end: r, valid: o } } }, { key: "checkWhitespaceRanges", value: function (e, t, n) { var r = void 0, o = !0, i = n.length, a = t - i, s = parseInt(e.start, 10) - a; return (r = (s = s > i ? i : s) + parseInt(e.length, 10)) > i && (r = i, this.log("End range automatically set to the max value of " + i)), s < 0 || r - s < 0 || s > i || r > i ? (o = !1, this.log("Invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)) : "" === n.substring(s, r).replace(/\s+/g, "") && (o = !1, this.log("Skipping whitespace only range: " + JSON.stringify(e)), this.opt.noMatch(e)), { start: s, end: r, valid: o } } }, { key: "getTextNodes", value: function (e) { var t = this, n = "", r = []; this.iterator.forEachNode(NodeFilter.SHOW_TEXT, (function (e) { r.push({ start: n.length, end: (n += e.textContent).length, node: e }) }), (function (e) { return t.matchesExclude(e.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT }), (function () { e({ value: n, nodes: r }) })) } }, { key: "matchesExclude", value: function (e) { return o.matches(e, this.opt.exclude.concat(["script", "style", "title", "head", "html"])) } }, { key: "wrapRangeInTextNode", value: function (e, t, n) { var r = this.opt.element ? this.opt.element : "mark", o = e.splitText(t), i = o.splitText(n - t), a = document.createElement(r); return a.setAttribute("data-markjs", "true"), this.opt.className && a.setAttribute("class", this.opt.className), a.textContent = o.textContent, o.parentNode.replaceChild(a, o), i } }, { key: "wrapRangeInMappedTextNode", value: function (e, t, n, r, o) { var i = this; e.nodes.every((function (a, s) { var c = e.nodes[s + 1]; if (void 0 === c || c.start > t) { if (!r(a.node)) return !1; var u = t - a.start, f = (n > a.end ? a.end : n) - a.start, l = e.value.substr(0, a.start), p = e.value.substr(f + a.start); if (a.node = i.wrapRangeInTextNode(a.node, u, f), e.value = l + p, e.nodes.forEach((function (t, n) { n >= s && (e.nodes[n].start > 0 && n !== s && (e.nodes[n].start -= f), e.nodes[n].end -= f) })), n -= f, o(a.node.previousSibling, a.start), !(n > a.end)) return !1; t = a.end } return !0 })) } }, { key: "wrapMatches", value: function (e, t, n, r, o) { var i = this, a = 0 === t ? 0 : t + 1; this.getTextNodes((function (t) { t.nodes.forEach((function (t) { t = t.node; for (var o = void 0; null !== (o = e.exec(t.textContent)) && "" !== o[a];)if (n(o[a], t)) { var s = o.index; if (0 !== a) for (var c = 1; c < a; c++)s += o[c].length; t = i.wrapRangeInTextNode(t, s, s + o[a].length), r(t.previousSibling), e.lastIndex = 0 } })), o() })) } }, { key: "wrapMatchesAcrossElements", value: function (e, t, n, r, o) { var i = this, a = 0 === t ? 0 : t + 1; this.getTextNodes((function (t) { for (var s = void 0; null !== (s = e.exec(t.value)) && "" !== s[a];) { var c = s.index; if (0 !== a) for (var u = 1; u < a; u++)c += s[u].length; var f = c + s[a].length; i.wrapRangeInMappedTextNode(t, c, f, (function (e) { return n(s[a], e) }), (function (t, n) { e.lastIndex = n, r(t) })) } o() })) } }, { key: "wrapRangeFromIndex", value: function (e, t, n, r) { var o = this; this.getTextNodes((function (i) { var a = i.value.length; e.forEach((function (e, r) { var s = o.checkWhitespaceRanges(e, a, i.value), c = s.start, u = s.end; s.valid && o.wrapRangeInMappedTextNode(i, c, u, (function (n) { return t(n, e, i.value.substring(c, u), r) }), (function (t) { n(t, e) })) })), r() })) } }, { key: "unwrapMatches", value: function (e) { for (var t = e.parentNode, n = document.createDocumentFragment(); e.firstChild;)n.appendChild(e.removeChild(e.firstChild)); t.replaceChild(n, e), this.ie ? this.normalizeTextNode(t) : t.normalize() } }, { key: "normalizeTextNode", value: function (e) { if (e) { if (3 === e.nodeType) for (; e.nextSibling && 3 === e.nextSibling.nodeType;)e.nodeValue += e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling); else this.normalizeTextNode(e.firstChild); this.normalizeTextNode(e.nextSibling) } } }, { key: "markRegExp", value: function (e, t) { var n = this; this.opt = t, this.log('Searching with expression "' + e + '"'); var r = 0, o = "wrapMatches", i = function (e) { r++, n.opt.each(e) }; this.opt.acrossElements && (o = "wrapMatchesAcrossElements"), this[o](e, this.opt.ignoreGroups, (function (e, t) { return n.opt.filter(t, e, r) }), i, (function () { 0 === r && n.opt.noMatch(e), n.opt.done(r) })) } }, { key: "mark", value: function (e, t) { var n = this; this.opt = t; var r = 0, o = "wrapMatches", i = this.getSeparatedKeywords("string" == typeof e ? [e] : e), a = i.keywords, s = i.length, c = this.opt.caseSensitive ? "" : "i", u = function e(t) { var i = new RegExp(n.createRegExp(t), "gm" + c), u = 0; n.log('Searching with expression "' + i + '"'), n[o](i, 1, (function (e, o) { return n.opt.filter(o, t, r, u) }), (function (e) { u++, r++, n.opt.each(e) }), (function () { 0 === u && n.opt.noMatch(t), a[s - 1] === t ? n.opt.done(r) : e(a[a.indexOf(t) + 1]) })) }; this.opt.acrossElements && (o = "wrapMatchesAcrossElements"), 0 === s ? this.opt.done(r) : u(a[0]) } }, { key: "markRanges", value: function (e, t) { var n = this; this.opt = t; var r = 0, o = this.checkRanges(e); o && o.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(o)), this.wrapRangeFromIndex(o, (function (e, t, r, o) { return n.opt.filter(e, t, r, o) }), (function (e, t) { r++, n.opt.each(e, t) }), (function () { n.opt.done(r) }))) : this.opt.done(r) } }, { key: "unmark", value: function (e) { var t = this; this.opt = e; var n = this.opt.element ? this.opt.element : "*"; n += "[data-markjs]", this.opt.className && (n += "." + this.opt.className), this.log('Removal selector "' + n + '"'), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, (function (e) { t.unwrapMatches(e) }), (function (e) { var r = o.matches(e, n), i = t.matchesExclude(e); return !r || i ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT }), this.opt.done) } }, { key: "opt", set: function (e) { this._opt = r({}, { element: "", className: "", exclude: [], iframes: !1, iframesTimeout: 5e3, separateWordSearch: !0, diacritics: !0, synonyms: {}, accuracy: "partially", acrossElements: !1, caseSensitive: !1, ignoreJoiners: !1, ignoreGroups: 0, ignorePunctuation: [], wildcards: "disabled", each: function () { }, noMatch: function () { }, filter: function () { return !0 }, done: function () { }, debug: !1, log: window.console }, e) }, get: function () { return this._opt } }, { key: "iterator", get: function () { return new o(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout) } }]), i }(); function a(e) { var t = this, n = new i(e); return this.mark = function (e, r) { return n.mark(e, r), t }, this.markRegExp = function (e, r) { return n.markRegExp(e, r), t }, this.markRanges = function (e, r) { return n.markRanges(e, r), t }, this.unmark = function (e) { return n.unmark(e), t }, this } return a }(); var w = ["top", "bottom", "right", "left"], E = w.reduce((function (e, t) { return e.concat([t + "-start", t + "-end"]) }), []), k = [].concat(w, ["auto"]).reduce((function (e, t) { return e.concat([t, t + "-start", t + "-end"]) }), []), O = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"]; function I(e) { var t = new Map, n = new Set, r = []; function o(e) { n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) { if (!n.has(e)) { var r = t.get(e); r && o(r) } })), r.push(e) } return e.forEach((function (e) { t.set(e.name, e) })), e.forEach((function (e) { n.has(e.name) || o(e) })), r } function S(e) { var t = I(e); return O.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n }))) }), []) } function N(e) { var t = e.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e }), {}); return Object.keys(t).map((function (e) { return t[e] })) } var R = { placement: "bottom", modifiers: [], strategy: "absolute" }; function T() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" == typeof e.getBoundingClientRect) })) } function M(e) { void 0 === e && (e = {}); var t = e, n = t.defaultModifiers, r = void 0 === n ? [] : n, o = t.defaultOptions, a = void 0 === o ? R : o; return function (e, t, n) { void 0 === n && (n = a); var o, s, c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, R, a), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, u = [], f = !1, l = { state: c, setOptions: function (n) { p(), c.options = Object.assign({}, a, c.options, n), c.scrollParents = { reference: i(e) ? g(e) : e.contextElement ? g(e.contextElement) : [], popper: g(t) }; var o = S(N([].concat(r, c.options.modifiers))); return c.orderedModifiers = o.filter((function (e) { return e.enabled })), c.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options, r = void 0 === n ? {} : n, o = e.effect; if ("function" == typeof o) { var i = o({ state: c, name: t, instance: l, options: r }), a = function () { }; u.push(i || a) } })), l.update() }, forceUpdate: function () { if (!f) { var e = c.elements, t = e.reference, n = e.popper; if (T(t, n)) { c.rects = { reference: d(t, x(n), "fixed" === c.options.strategy), popper: h(n) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function (e) { return c.modifiersData[e.name] = Object.assign({}, e.data) })); for (var r = 0; r < c.orderedModifiers.length; r++)if (!0 !== c.reset) { var o = c.orderedModifiers[r], i = o.fn, a = o.options, s = void 0 === a ? {} : a, u = o.name; "function" == typeof i && (c = i({ state: c, options: s, name: u, instance: l }) || c) } else c.reset = !1, r = -1 } } }, update: (o = function () { return new Promise((function (e) { l.forceUpdate(), e(c) })) }, function () { return s || (s = new Promise((function (e) { Promise.resolve().then((function () { s = void 0, e(o()) })) }))), s }), destroy: function () { p(), f = !0 } }; if (!T(e, t)) return l; function p() { u.forEach((function (e) { return e() })), u = [] } return l.setOptions(n).then((function (e) { !f && n.onFirstUpdate && n.onFirstUpdate(e) })), l } } var A = { passive: !0 }; var j = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (e) { var t = e.state, n = e.instance, o = e.options, i = o.scroll, a = void 0 === i || i, s = o.resize, c = void 0 === s || s, u = r(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper); return a && f.forEach((function (e) { e.addEventListener("scroll", n.update, A) })), c && u.addEventListener("resize", n.update, A), function () { a && f.forEach((function (e) { e.removeEventListener("scroll", n.update, A) })), c && u.removeEventListener("resize", n.update, A) } }, data: {} }; function C(e) { return e.split("-")[0] } function L(e) { return e.split("-")[1] } function D(e) { return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y" } function P(e) { var t, n = e.reference, r = e.element, o = e.placement, i = o ? C(o) : null, a = o ? L(o) : null, s = n.x + n.width / 2 - r.width / 2, c = n.y + n.height / 2 - r.height / 2; switch (i) { case "top": t = { x: s, y: n.y - r.height }; break; case "bottom": t = { x: s, y: n.y + n.height }; break; case "right": t = { x: n.x + n.width, y: c }; break; case "left": t = { x: n.x - r.width, y: c }; break; default: t = { x: n.x, y: n.y } }var u = i ? D(i) : null; if (null != u) { var f = "y" === u ? "height" : "width"; switch (a) { case "start": t[u] = t[u] - (n[f] / 2 - r[f] / 2); break; case "end": t[u] = t[u] + (n[f] / 2 - r[f] / 2) } } return t } var W = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) { var t = e.state, n = e.name; t.modifiersData[n] = P({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) }, data: {} }, F = Math.max, B = Math.min, _ = Math.round, J = { top: "auto", right: "auto", bottom: "auto", left: "auto" }; function H(e) { var t, n = e.popper, o = e.popperRect, i = e.placement, a = e.offsets, s = e.position, c = e.gpuAcceleration, f = e.adaptive, p = e.roundOffsets, d = !0 === p ? function (e) { var t = e.x, n = e.y, r = window.devicePixelRatio || 1; return { x: _(_(t * r) / r) || 0, y: _(_(n * r) / r) || 0 } }(a) : "function" == typeof p ? p(a) : a, h = d.x, m = void 0 === h ? 0 : h, v = d.y, g = void 0 === v ? 0 : v, y = a.hasOwnProperty("x"), b = a.hasOwnProperty("y"), w = "left", E = "top", k = window; if (f) { var O = x(n), I = "clientHeight", S = "clientWidth"; O === r(n) && "static" !== l(O = u(n)).position && (I = "scrollHeight", S = "scrollWidth"), "top" === i && (E = "bottom", g -= O[I] - o.height, g *= c ? 1 : -1), "left" === i && (w = "right", m -= O[S] - o.width, m *= c ? 1 : -1) } var N, R = Object.assign({ position: s }, f && J); return c ? Object.assign({}, R, ((N = {})[E] = b ? "0" : "", N[w] = y ? "0" : "", N.transform = (k.devicePixelRatio || 1) < 2 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", N)) : Object.assign({}, R, ((t = {})[E] = b ? g + "px" : "", t[w] = y ? m + "px" : "", t.transform = "", t)) } var q = { left: "right", right: "left", bottom: "top", top: "bottom" }; function z(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return q[e] })) } var U = { start: "end", end: "start" }; function V(e) { return e.replace(/start|end/g, (function (e) { return U[e] })) } function G(e) { var t = r(e), n = u(e), o = t.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, c = 0; return o && (i = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, c = o.offsetTop)), { width: i, height: a, x: s + f(e), y: c } } function Y(e) { var t, n = u(e), r = o(e), i = null == (t = e.ownerDocument) ? void 0 : t.body, a = F(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = F(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + f(e), p = -r.scrollTop; return "rtl" === l(i || n).direction && (c += F(n.clientWidth, i ? i.clientWidth : 0) - a), { width: a, height: s, x: c, y: p } } function $(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (n && s(n)) { var r = t; do { if (r && e.isSameNode(r)) return !0; r = r.parentNode || r.host } while (r) } return !1 } function X(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) } function K(e, t) { return "viewport" === t ? X(G(e)) : a(t) ? function (e) { var t = n(e); return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t }(t) : X(Y(u(e))) } function Z(e, t, n) { var r = "clippingParents" === t ? function (e) { var t = g(m(e)), n = ["absolute", "fixed"].indexOf(l(e).position) >= 0 && a(e) ? x(e) : e; return i(n) ? t.filter((function (e) { return i(e) && $(e, n) && "body" !== c(e) })) : [] }(e) : [].concat(t), o = [].concat(r, [n]), s = o[0], u = o.reduce((function (t, n) { var r = K(e, n); return t.top = F(r.top, t.top), t.right = B(r.right, t.right), t.bottom = B(r.bottom, t.bottom), t.left = F(r.left, t.left), t }), K(e, s)); return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u } function Q(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) } function ee(e, t) { return t.reduce((function (t, n) { return t[n] = e, t }), {}) } function te(e, t) { void 0 === t && (t = {}); var r = t, o = r.placement, a = void 0 === o ? e.placement : o, s = r.boundary, c = void 0 === s ? "clippingParents" : s, f = r.rootBoundary, l = void 0 === f ? "viewport" : f, p = r.elementContext, d = void 0 === p ? "popper" : p, h = r.altBoundary, m = void 0 !== h && h, v = r.padding, g = void 0 === v ? 0 : v, y = Q("number" != typeof g ? g : ee(g, w)), b = "popper" === d ? "reference" : "popper", x = e.elements.reference, E = e.rects.popper, k = e.elements[m ? b : d], O = Z(i(k) ? k : k.contextElement || u(e.elements.popper), c, l), I = n(x), S = P({ reference: I, element: E, strategy: "absolute", placement: a }), N = X(Object.assign({}, E, S)), R = "popper" === d ? N : I, T = { top: O.top - R.top + y.top, bottom: R.bottom - O.bottom + y.bottom, left: O.left - R.left + y.left, right: R.right - O.right + y.right }, M = e.modifiersData.offset; if ("popper" === d && M) { var A = M[a]; Object.keys(T).forEach((function (e) { var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x"; T[e] += A[n] * t })) } return T } function ne(e, t) { void 0 === t && (t = {}); var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, u = void 0 === c ? k : c, f = L(r), l = f ? s ? E : E.filter((function (e) { return L(e) === f })) : w, p = l.filter((function (e) { return u.indexOf(e) >= 0 })); 0 === p.length && (p = l); var d = p.reduce((function (t, n) { return t[n] = te(e, { placement: n, boundary: o, rootBoundary: i, padding: a })[C(n)], t }), {}); return Object.keys(d).sort((function (e, t) { return d[e] - d[t] })) } function re(e, t, n) { return F(e, B(t, n)) } function oe(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } } function ie(e) { return ["top", "right", "bottom", "left"].some((function (t) { return e[t] >= 0 })) } var ae = M({ defaultModifiers: [j, W, { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) { var t = e.state, n = e.options, r = n.gpuAcceleration, o = void 0 === r || r, i = n.adaptive, a = void 0 === i || i, s = n.roundOffsets, c = void 0 === s || s, u = { placement: C(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o }; null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, H(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: c })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, H(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }) }, data: {} }, { name: "applyStyles", enabled: !0, phase: "write", fn: function (e) { var t = e.state; Object.keys(t.elements).forEach((function (e) { var n = t.styles[e] || {}, r = t.attributes[e] || {}, o = t.elements[e]; a(o) && c(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function (e) { var t = r[e]; !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t) }))) })) }, effect: function (e) { var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () { Object.keys(t.elements).forEach((function (e) { var r = t.elements[e], o = t.attributes[e] || {}, i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) { return e[t] = "", e }), {}); a(r) && c(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function (e) { r.removeAttribute(e) }))) })) } }, requires: ["computeStyles"] }, { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) { var t = e.state, n = e.options, r = e.name, o = n.offset, i = void 0 === o ? [0, 0] : o, a = k.reduce((function (e, n) { return e[n] = function (e, t, n) { var r = C(e), o = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, i = "function" == typeof n ? n(Object.assign({}, t, { placement: e })) : n, a = i[0], s = i[1]; return a = a || 0, s = (s || 0) * o, ["left", "right"].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s } }(n, t.rects, i), e }), {}), s = a[t.placement], c = s.x, u = s.y; null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a } }, { name: "flip", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options, r = e.name; if (!t.modifiersData[r]._skip) { for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, c = n.fallbackPlacements, u = n.padding, f = n.boundary, l = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, g = C(v), y = c || (g === v || !h ? [z(v)] : function (e) { if ("auto" === C(e)) return []; var t = z(e); return [V(e), t, V(t)] }(v)), b = [v].concat(y).reduce((function (e, n) { return e.concat("auto" === C(n) ? ne(t, { placement: n, boundary: f, rootBoundary: l, padding: u, flipVariations: h, allowedAutoPlacements: m }) : n) }), []), x = t.rects.reference, w = t.rects.popper, E = new Map, k = !0, O = b[0], I = 0; I < b.length; I++) { var S = b[I], N = C(S), R = "start" === L(S), T = ["top", "bottom"].indexOf(N) >= 0, M = T ? "width" : "height", A = te(t, { placement: S, boundary: f, rootBoundary: l, altBoundary: p, padding: u }), j = T ? R ? "right" : "left" : R ? "bottom" : "top"; x[M] > w[M] && (j = z(j)); var D = z(j), P = []; if (i && P.push(A[N] <= 0), s && P.push(A[j] <= 0, A[D] <= 0), P.every((function (e) { return e }))) { O = S, k = !1; break } E.set(S, P) } if (k) for (var W = function (e) { var t = b.find((function (t) { var n = E.get(t); if (n) return n.slice(0, e).every((function (e) { return e })) })); if (t) return O = t, "break" }, F = h ? 3 : 1; F > 0; F--) { if ("break" === W(F)) break } t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } }, { name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 !== a && a, c = n.boundary, u = n.rootBoundary, f = n.altBoundary, l = n.padding, p = n.tether, d = void 0 === p || p, m = n.tetherOffset, v = void 0 === m ? 0 : m, g = te(t, { boundary: c, rootBoundary: u, padding: l, altBoundary: f }), y = C(t.placement), b = L(t.placement), w = !b, E = D(y), k = "x" === E ? "y" : "x", O = t.modifiersData.popperOffsets, I = t.rects.reference, S = t.rects.popper, N = "function" == typeof v ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, R = { x: 0, y: 0 }; if (O) { if (i || s) { var T = "y" === E ? "top" : "left", M = "y" === E ? "bottom" : "right", A = "y" === E ? "height" : "width", j = O[E], P = O[E] + g[T], W = O[E] - g[M], _ = d ? -S[A] / 2 : 0, J = "start" === b ? I[A] : S[A], H = "start" === b ? -S[A] : -I[A], q = t.elements.arrow, z = d && q ? h(q) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, V = U[T], G = U[M], Y = re(0, I[A], z[A]), $ = w ? I[A] / 2 - _ - Y - V - N : J - Y - V - N, X = w ? -I[A] / 2 + _ + Y + G + N : H + Y + G + N, K = t.elements.arrow && x(t.elements.arrow), Z = K ? "y" === E ? K.clientTop || 0 : K.clientLeft || 0 : 0, Q = t.modifiersData.offset ? t.modifiersData.offset[t.placement][E] : 0, ee = O[E] + $ - Q - Z, ne = O[E] + X - Q; if (i) { var oe = re(d ? B(P, ee) : P, j, d ? F(W, ne) : W); O[E] = oe, R[E] = oe - j } if (s) { var ie = "x" === E ? "top" : "left", ae = "x" === E ? "bottom" : "right", se = O[k], ce = se + g[ie], ue = se - g[ae], fe = re(d ? B(ce, ee) : ce, se, d ? F(ue, ne) : ue); O[k] = fe, R[k] = fe - se } } t.modifiersData[r] = R } }, requiresIfExists: ["offset"] }, { name: "arrow", enabled: !0, phase: "main", fn: function (e) { var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = C(n.placement), c = D(s), u = ["left", "right"].indexOf(s) >= 0 ? "height" : "width"; if (i && a) { var f = function (e, t) { return Q("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : ee(e, w)) }(o.padding, n), l = h(i), p = "y" === c ? "top" : "left", d = "y" === c ? "bottom" : "right", m = n.rects.reference[u] + n.rects.reference[c] - a[c] - n.rects.popper[u], v = a[c] - n.rects.reference[c], g = x(i), y = g ? "y" === c ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = m / 2 - v / 2, E = f[p], k = y - l[u] - f[d], O = y / 2 - l[u] / 2 + b, I = re(E, O, k), S = c; n.modifiersData[r] = ((t = {})[S] = I, t.centerOffset = I - O, t) } }, effect: function (e) { var t = e.state, n = e.options.element, r = void 0 === n ? "[data-popper-arrow]" : n; null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && $(t.elements.popper, r) && (t.elements.arrow = r) }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) { var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = te(t, { elementContext: "reference" }), s = te(t, { altBoundary: !0 }), c = oe(a, r), u = oe(s, o, i), f = ie(c), l = ie(u); t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: l }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": l }) } }] });class se { constructor() { const n = document.getElementsByTagName("body"); this.markInstance = new (e(t))(n[0]), se.markElements = {}, se.elemIdCount = 0, se.tooltipInFocus = !1 } markAll() { this.markInstance.mark("Siemens", { className: "na-highlight", each: se.eachMark, done: se.afterMark }) } static eachMark(e) { const t = "na-highlight-" + se.elemIdCount; e.id = t, se.markElements[t] = { elem: e, popperRef: null }, se.elemIdCount++ } static afterMark() { const e = document.createElement("div"); e.appendChild(document.createTextNode("Siemens contributes to climate change.")), e.classList.add("na-tooltip"), document.body.appendChild(e); const t = document.createElement("a"); t.setAttribute("href", "https://www.urgewald.org/en/medien/new-company-outdated-business-model-siemens-energy-fails-climate-and-human-rights-0"), t.innerText = "Siemens supports the Adani coalmine.", t.classList.add("a-block"), e.appendChild(t); const n = document.createElement("div"); n.id = "na-arrow", n.setAttribute("data-popper-arrow", ""), e.appendChild(n), se.tooltipInFocus = !1;["mouseenter", "focus"].forEach((t => { Object.keys(se.markElements).forEach((n => { se.markElements[n].elem.addEventListener(t, (() => { se.create(n, e) })) })), e.addEventListener(t, (() => { se.tooltipInFocus = !0 })) })), ["mouseleave", "blur"].forEach((t => { Object.keys(se.markElements).forEach((n => { se.markElements[n].elem.addEventListener(t, (() => { se.destroy(n, e) })) })), e.addEventListener(t, (() => { se.destroy(e.getAttribute("data-na-referrer"), e, !0) })) })) } static create(e, t) { t.setAttribute("data-na-show", ""), t.setAttribute("data-na-referrer", e), se.markElements[e].popperRef = ae(se.markElements[e].elem, t, { modifiers: [{ name: "offset", options: { offset: [0, 8] } }] }) } static destroy(e, t, n = !1) { n ? se.destroyCore(e, t) : setTimeout((() => { !se.tooltipInFocus && se.markElements[e].popperRef && se.destroyCore(e, t) }), 500) } static destroyCore(e, t) { se.tooltipInFocus = !1, t.removeAttribute("data-na-show"), t.removeAttribute("data-na-referrer"), se.markElements[e].popperRef.destroy(), se.markElements[e].popperRef = null }} (new se).markAll();  class ses { constructor() { const n = document.getElementsByTagName("body");this.markInstance = new (e(t))(n[0]), ses.markElements = {}, ses.elemIdCount = 0, ses.tooltipInFocus = !1 } markAll() { this.markInstance.mark("Apple", { className: "na-highlight", each: ses.eachMark, done: ses.afterMark }) } static eachMark(e) { const t = "na-highlight-" + ses.elemIdCount; e.id = t, ses.markElements[t] = { elem: e, popperRef: null }, ses.elemIdCount++ } static afterMark() { const e = document.createElement("div"); e.appendChild(document.createTextNode("Apple contributes to climate change.")), e.classList.add("na-tooltip"), document.body.appendChild(e); const t = document.createElement("a"); t.setAttribute("href", "https://www.latimes.com/opinion/op-ed/la-oe-merchant-iphone-supplychain-20170723-story.html"), t.innerText = "Apple uses unsustainable mining methods and child labour for products.", t.classList.add("a-block"), e.appendChild(t); const n = document.createElement("div"); n.id = "na-arrow", n.setAttribute("data-popper-arrow", ""), e.appendChild(n), ses.tooltipInFocus = !1;["mouseenter", "focus"].forEach((t => { Object.keys(ses.markElements).forEach((n => { ses.markElements[n].elem.addEventListener(t, (() => { ses.create(n, e) })) })), e.addEventListener(t, (() => { ses.tooltipInFocus = !0 })) })), ["mouseleave", "blur"].forEach((t => { Object.keys(ses.markElements).forEach((n => { ses.markElements[n].elem.addEventListener(t, (() => { ses.destroy(n, e) })) })), e.addEventListener(t, (() => { ses.destroy(e.getAttribute("data-na-referrer"), e, !0) })) })) } static create(e, t) { t.setAttribute("data-na-show", ""), t.setAttribute("data-na-referrer", e), ses.markElements[e].popperRef = ae(ses.markElements[e].elem, t, { modifiers: [{ name: "offset", options: { offset: [0, 8] } }] }) } static destroy(e, t, n = !1) { n ? ses.destroyCore(e, t) : setTimeout((() => { !ses.tooltipInFocus && ses.markElements[e].popperRef && ses.destroyCore(e, t) }), 500) } static destroyCore(e, t) { ses.tooltipInFocus = !1, t.removeAttribute("data-na-show"), t.removeAttribute("data-na-referrer"), ses.markElements[e].popperRef.destroy(), ses.markElements[e].popperRef = null } } (new ses).markAll(); class sese { constructor() { const n = document.getElementsByTagName("body"); this.markInstance = new (e(t))(n[0]), sese.markElements = {}, sese.elemIdCount = 0, sese.tooltipInFocus = !1 } markAll() { this.markInstance.mark("Aramco", { className: "na-highlight", each: sese.eachMark, done: sese.afterMark }) } static eachMark(e) { const t = "na-highlight-" + sese.elemIdCount; e.id = t, sese.markElements[t] = { elem: e, popperRef: null }, sese.elemIdCount++ } static afterMark() { const e = document.createElement("div"); e.appendChild(document.createTextNode("Aramco contributes to climate change.")), e.classList.add("na-tooltip"), document.body.appendChild(e); const t = document.createElement("a"); t.setAttribute("href", "https://www.clientearth.org/projects/the-greenwashing-files/aramco"), t.innerText = "Aramco is the world's largest corporate greenhouse gas emitter, contributing to >4% of global GHG emissions.", t.classList.add("a-block"), e.appendChild(t); const n = document.createElement("div"); n.id = "na-arrow", n.setAttribute("data-popper-arrow", ""), e.appendChild(n), sese.tooltipInFocus = !1;["mouseenter", "focus"].forEach((t => { Object.keys(sese.markElements).forEach((n => { sese.markElements[n].elem.addEventListener(t, (() => { sese.create(n, e) })) })), e.addEventListener(t, (() => { sese.tooltipInFocus = !0 })) })), ["mouseleave", "blur"].forEach((t => { Object.keys(sese.markElements).forEach((n => { sese.markElements[n].elem.addEventListener(t, (() => { sese.destroy(n, e) })) })), e.addEventListener(t, (() => { sese.destroy(e.getAttribute("data-na-referrer"), e, !0) })) })) } static create(e, t) { t.setAttribute("data-na-show", ""), t.setAttribute("data-na-referrer", e), sese.markElements[e].popperRef = ae(sese.markElements[e].elem, t, { modifiers: [{ name: "offset", options: { offset: [0, 8] } }] }) } static destroy(e, t, n = !1) { n ? sese.destroyCore(e, t) : setTimeout((() => { !sese.tooltipInFocus && sese.markElements[e].popperRef && sese.destroyCore(e, t) }), 500) } static destroyCore(e, t) { sese.tooltipInFocus = !1, t.removeAttribute("data-na-show"), t.removeAttribute("data-na-referrer"), sese.markElements[e].popperRef.destroy(), sese.markElements[e].popperRef = null } } (new sese).markAll();