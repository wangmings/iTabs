var e, t, n = Object.defineProperty,
    r = Object.defineProperties,
    a = Object.getOwnPropertyDescriptors,
    i = Object.getOwnPropertySymbols,
    o = Object.prototype.hasOwnProperty,
    s = Object.prototype.propertyIsEnumerable,
    l = (e, t, r) => t in e ? n(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    u = (e, t) => {
        for (var n in t || (t = {})) o.call(t, n) && l(e, n, t[n]);
        if (i)
            for (var n of i(t)) s.call(t, n) && l(e, n, t[n]);
        return e
    },
    c = (e, t) => r(e, a(t)),
    f = (e, t, n) => (((e, t, n) => {
        if (!t.has(e)) throw TypeError("Cannot " + n)
    })(e, t, "access private method"), n);
import {
    E as d,
    R as h,
    c as g,
    e as p,
    a as m,
    g as v,
    i as C,
    b as E,
    d as F,
    f as y,
    h as A,
    m as D,
    o as _,
    p as b,
    r as B,
    j as I,
    k as x,
    s as w,
    l as S,
    n as T,
    q as O,
    t as k,
    u as M,
    v as N,
    w as P,
    x as L,
    y as Y,
    z as G,
    A as R,
    B as H,
    C as Z,
    D as j,
    F as z,
    G as U,
    H as X,
    I as V,
    K as W,
    S as $,
    J,
    T as K,
    L as Q,
    M as q,
    N as ee,
    O as te,
    P as ne,
    Q as re,
    U as ae,
    V as ie,
    W as oe,
    X as se,
    Y as le,
    Z as ue,
    _ as ce,
    $ as fe,
    a0 as de,
    a1 as he,
    a2 as ge,
    a3 as pe,
    a4 as me,
    a5 as ve,
    a6 as Ce,
    a7 as Ee,
    a8 as Fe,
    a9 as ye,
    aa as Ae,
    ab as De,
    ac as _e,
    ad as be,
    ae as Be,
    af as Ie,
    ag as xe,
    ah as we,
    ai as Se,
    aj as Te,
    ak as Oe,
    al as ke,
    am as Me,
    an as Ne,
    ao as Pe,
    ap as Le,
    aq as Ye,
    ar as Ge,
    as as Re,
    at as He,
    au as Ze,
    av as je,
    aw as ze,
    ax as Ue,
    ay as Xe,
    az as Ve,
    aA as We,
    aB as $e,
    aC as Je,
    aD as Ke,
    aE as Qe,
    aF as qe,
    aG as et,
    aH as tt,
    aI as nt,
    aJ as rt,
    aK as at,
    aL as it,
    aM as ot,
    aN as st,
    aO as lt,
    aP as ut,
    aQ as ct,
    aR as ft,
    aS as dt,
    aT as ht,
    aU as gt,
    aV as pt,
    aW as mt,
    aX as vt,
    aY as Ct,
    aZ as Et,
    a_ as Ft,
    a$ as yt,
    b0 as At,
    b1 as Dt,
    b2 as _t,
    b3 as bt,
    b4 as Bt,
    b5 as It,
    b6 as xt,
    b7 as wt,
    b8 as St,
    b9 as Tt,
    ba as Ot,
    bb as kt,
    bc as Mt,
    bd as Nt,
    be as Pt,
    bf as Lt,
    bg as Yt,
    bh as Gt,
    bi as Rt,
    bj as Ht,
    bk as Zt,
    bl as jt,
    bm as zt,
    bn as Ut,
    bo as Xt,
    bp as Vt,
    bq as Wt,
    br as $t,
    bs as Jt,
    bt as Kt,
    bu as Qt,
    bv as qt,
    bw as en,
    bx as tn,
    by as nn,
    bz as rn,
    bA as an,
    bB as on,
    bC as sn,
    bD as ln,
    bE as un,
    bF as cn,
    bG as fn,
    bH as dn,
    bI as hn,
    bJ as gn,
    bK as pn,
    bL as mn,
    bM as vn,
    bN as Cn,
    bO as En,
    bP as Fn,
    bQ as yn,
    bR as An,
    bS as Dn,
    bT as _n,
    bU as bn,
    bV as Bn,
    bW as In,
    bX as xn,
    bY as wn,
    bZ as Sn,
    b_ as Tn,
    b$ as On,
    c0 as kn,
    c1 as Mn,
    c2 as Nn,
    c3 as Pn,
    c4 as Ln,
    c5 as Yn,
    c6 as Gn,
    c7 as Rn,
    c8 as Hn,
    c9 as Zn,
    ca as jn,
    cb as zn,
    cc as Un,
    cd as Xn,
    ce as Vn,
    cf as Wn,
    cg as $n,
    ch as Jn,
    ci as Kn,
    cj as Qn,
    ck as qn,
    cl as er,
    cm as tr,
    cn as nr,
    co as rr,
    cp as ar,
    cq as ir,
    cr as or,
    cs as sr,
    ct as lr,
    cu as ur,
    cv as cr
} from "./el-button.0a4ba32a.js";
const fr = {},
    dr = function(e, t) {
        return t && 0 !== t.length ? Promise.all(t.map((e => {
            if ((e = `./${e}`) in fr) return;
            fr[e] = !0;
            const t = e.endsWith(".css"),
                n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`)) return;
            const r = document.createElement("link");
            return r.rel = t ? "stylesheet" : "modulepreload", t || (r.as = "script", r.crossOrigin = ""), r.href = e, document.head.appendChild(r), t ? new Promise(((t, n) => {
                r.addEventListener("load", t), r.addEventListener("error", (() => n(new Error(`Unable to preload CSS for ${e}`))))
            })) : void 0
        }))).then((() => e())) : e()
    };
var hr = function(e, t) {
        void 0 === t && (t = 1);
        var n = new Image;
        return e.startsWith("data") || (n.crossOrigin = "Anonymous"), new Promise((function(r, a) {
            n.onload = function() {
                var e = n.width * t,
                    a = n.height * t,
                    i = function(e, t) {
                        var n = document.createElement("canvas");
                        return n.setAttribute("width", e), n.setAttribute("height", t), n.getContext("2d")
                    }(e, a);
                i.drawImage(n, 0, 0, e, a);
                var o = i.getImageData(0, 0, e, a).data;
                r(o)
            };
            var i = function() {
                return a(new Error("An error occurred attempting to load image"))
            };
           
            n.onerror = i, n.onabort = i, n.src = e
        }))
    },
    gr = {
        ignore: [],
        scale: 1
    },
    pr = function(e, t) {
        void 0 === t && (t = gr);
        try {
            var n = (t = Object.assign({}, gr, t)).ignore,
                r = t.scale;
            return (r > 1 || r <= 0) && console.warn("You set scale to " + r + ", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"), Promise.resolve(hr(e, r)).then((function(e) {
                return function(e, t) {
                    for (var n = {}, r = 0; r < e.length; r += 4) {
                        var a = e[r + 3];
                        if (0 !== a) {
                            var i = Array.from(e.subarray(r, r + 3));
                            if (-1 === i.indexOf(void 0)) {
                                var o = a && 255 !== a ? "rgba(" + i.concat([a]).join(",") + ")" : "rgb(" + i.join(",") + ")"; - 1 === t.indexOf(o) && (n[o] ? n[o].count++ : n[o] = {
                                    color: o,
                                    count: 1
                                })
                            }
                        }
                    }
                    return Object.values(n).sort((function(e, t) {
                        return t.count - e.count
                    }))
                }(e, n)
            }))
        } catch (nh) {
            return Promise.reject(nh)
        }
    };
var mr = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    compile: () => {},
    EffectScope: d,
    ReactiveEffect: h,
    customRef: g,
    effect: p,
    effectScope: m,
    getCurrentScope: v,
    isProxy: C,
    isReactive: E,
    isReadonly: F,
    isRef: y,
    isShallow: A,
    markRaw: D,
    onScopeDispose: _,
    proxyRefs: b,
    reactive: B,
    readonly: I,
    ref: x,
    shallowReactive: w,
    shallowReadonly: S,
    shallowRef: T,
    stop: O,
    toRaw: k,
    toRef: M,
    toRefs: N,
    triggerRef: P,
    unref: L,
    camelize: Y,
    capitalize: G,
    normalizeClass: R,
    normalizeProps: H,
    normalizeStyle: Z,
    toDisplayString: j,
    toHandlerKey: z,
    BaseTransition: U,
    Comment: X,
    Fragment: V,
    KeepAlive: W,
    Static: $,
    Suspense: J,
    Teleport: K,
    Text: Q,
    callWithAsyncErrorHandling: q,
    callWithErrorHandling: ee,
    cloneVNode: te,
    compatUtils: ne,
    computed: re,
    createBlock: ae,
    createCommentVNode: ie,
    createElementBlock: oe,
    createElementVNode: se,
    createHydrationRenderer: le,
    createPropsRestProxy: ue,
    createRenderer: ce,
    createSlots: fe,
    createStaticVNode: de,
    createTextVNode: he,
    createVNode: ge,
    defineAsyncComponent: pe,
    defineComponent: me,
    defineEmits: ve,
    defineExpose: Ce,
    defineProps: Ee,
    get devtools() {
        return Fe
    },
    getCurrentInstance: ye,
    getTransitionRawChildren: Ae,
    guardReactiveProps: De,
    h: _e,
    handleError: be,
    initCustomFormatter: Be,
    inject: Ie,
    isMemoSame: xe,
    isRuntimeOnly: we,
    isVNode: Se,
    mergeDefaults: Te,
    mergeProps: Oe,
    nextTick: ke,
    onActivated: Me,
    onBeforeMount: Ne,
    onBeforeUnmount: Pe,
    onBeforeUpdate: Le,
    onDeactivated: Ye,
    onErrorCaptured: Ge,
    onMounted: Re,
    onRenderTracked: He,
    onRenderTriggered: Ze,
    onServerPrefetch: je,
    onUnmounted: ze,
    onUpdated: Ue,
    openBlock: Xe,
    popScopeId: Ve,
    provide: We,
    pushScopeId: $e,
    queuePostFlushCb: Je,
    registerRuntimeCompiler: Ke,
    renderList: Qe,
    renderSlot: qe,
    resolveComponent: et,
    resolveDirective: tt,
    resolveDynamicComponent: nt,
    resolveFilter: rt,
    resolveTransitionHooks: at,
    setBlockTracking: it,
    setDevtoolsHook: ot,
    setTransitionHooks: st,
    ssrContextKey: lt,
    ssrUtils: ut,
    toHandlers: ct,
    transformVNodeArgs: ft,
    useAttrs: dt,
    useSSRContext: ht,
    useSlots: gt,
    useTransitionState: pt,
    version: mt,
    warn: vt,
    watch: Ct,
    watchEffect: Et,
    watchPostEffect: Ft,
    watchSyncEffect: yt,
    withAsyncContext: At,
    withCtx: Dt,
    withDefaults: _t,
    withDirectives: bt,
    withMemo: Bt,
    withScopeId: It,
    Transition: xt,
    TransitionGroup: wt,
    VueElement: St,
    createApp: Tt,
    createSSRApp: Ot,
    defineCustomElement: kt,
    defineSSRCustomElement: Mt,
    hydrate: Nt,
    initDirectivesForSSR: Pt,
    render: Lt,
    useCssModule: Yt,
    useCssVars: Gt,
    vModelCheckbox: Rt,
    vModelDynamic: Ht,
    vModelRadio: Zt,
    vModelSelect: jt,
    vModelText: zt,
    vShow: Ut,
    withKeys: Xt,
    withModifiers: Vt
});

function vr(e, t, n) {
    var r = !0,
        a = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return $t(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), Wt(e, t, {
        leading: r,
        maxWait: t,
        trailing: a
    })
}
const Cr = me({
        name: "ArrowLeft"
    }),
    Er = {
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Fr = [se("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
    }, null, -1)];
var yr = Jt(Cr, [
    ["render", function(e, t, n, r, a, i) {
        return Xe(), oe("svg", Er, Fr)
    }]
]);
const Ar = me({
        name: "ArrowRight"
    }),
    Dr = {
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
    },
    _r = [se("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
    }, null, -1)];
var br = Jt(Ar, [
    ["render", function(e, t, n, r, a, i) {
        return Xe(), oe("svg", Dr, _r)
    }]
]);
const Br = me({
        name: "Check"
    }),
    Ir = {
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg"
    },
    xr = [se("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
    }, null, -1)];
var wr = Jt(Br, [
    ["render", function(e, t, n, r, a, i) {
        return Xe(), oe("svg", Ir, xr)
    }]
]);
const Sr = Symbol("carouselContextKey");
var Tr = {
        exports: {}
    },
    Or = Tr.exports = function(e, t, n) {
        var r = t.prototype,
            a = function(e) {
                return e && (e.indexOf ? e : e.s)
            },
            i = function(e, t, n, r, i) {
                var o = e.name ? e : e.$locale(),
                    s = a(o[t]),
                    l = a(o[n]),
                    u = s || l.map((function(e) {
                        return e.slice(0, r)
                    }));
                if (!i) return u;
                var c = o.weekStart;
                return u.map((function(e, t) {
                    return u[(t + (c || 0)) % 7]
                }))
            },
            o = function() {
                return n.Ls[n.locale()]
            },
            s = function(e, t) {
                return e.formats[t] || e.formats[t.toUpperCase()].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, n) {
                    return t || n.slice(1)
                }))
            },
            l = function() {
                var e = this;
                return {
                    months: function(t) {
                        return t ? t.format("MMMM") : i(e, "months")
                    },
                    monthsShort: function(t) {
                        return t ? t.format("MMM") : i(e, "monthsShort", "months", 3)
                    },
                    firstDayOfWeek: function() {
                        return e.$locale().weekStart || 0
                    },
                    weekdays: function(t) {
                        return t ? t.format("dddd") : i(e, "weekdays")
                    },
                    weekdaysMin: function(t) {
                        return t ? t.format("dd") : i(e, "weekdaysMin", "weekdays", 2)
                    },
                    weekdaysShort: function(t) {
                        return t ? t.format("ddd") : i(e, "weekdaysShort", "weekdays", 3)
                    },
                    longDateFormat: function(t) {
                        return s(e.$locale(), t)
                    },
                    meridiem: this.$locale().meridiem,
                    ordinal: this.$locale().ordinal
                }
            };
        r.localeData = function() {
            return l.bind(this)()
        }, n.localeData = function() {
            var e = o();
            return {
                firstDayOfWeek: function() {
                    return e.weekStart || 0
                },
                weekdays: function() {
                    return n.weekdays()
                },
                weekdaysShort: function() {
                    return n.weekdaysShort()
                },
                weekdaysMin: function() {
                    return n.weekdaysMin()
                },
                months: function() {
                    return n.months()
                },
                monthsShort: function() {
                    return n.monthsShort()
                },
                longDateFormat: function(t) {
                    return s(e, t)
                },
                meridiem: e.meridiem,
                ordinal: e.ordinal
            }
        }, n.months = function() {
            return i(o(), "months")
        }, n.monthsShort = function() {
            return i(o(), "monthsShort", "months", 3)
        }, n.weekdays = function(e) {
            return i(o(), "weekdays", null, null, e)
        }, n.weekdaysShort = function(e) {
            return i(o(), "weekdaysShort", "weekdays", 3, e)
        }, n.weekdaysMin = function(e) {
            return i(o(), "weekdaysMin", "weekdays", 2, e)
        }
    };
const kr = e => Array.from(Array.from({
        length: e
    }).keys()),
    Mr = e => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(),
    Nr = e => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(),
    Pr = Qt({
        selectedDay: {
            type: qt(Object)
        },
        range: {
            type: qt(Array)
        },
        date: {
            type: qt(Object),
            required: !0
        },
        hideHeader: {
            type: Boolean
        }
    }),
    Lr = {
        pick: e => en(e)
    },
    Yr = {
        key: 0
    },
    Gr = ["onClick"];
var Rr = on(me(c(u({}, {
    name: "DateTable"
}), {
    props: Pr,
    emits: Lr,
    setup(e, {
        expose: t,
        emit: n
    }) {
        const r = e;
        tn.extend(Or);
        const {
            t: a,
            lang: i
        } = nn(), o = rn("calendar-table"), s = rn("calendar-day"), l = tn().locale(i.value), u = l.$locale().weekStart || 0, c = re((() => !!r.range && !!r.range.length)), f = re((() => {
            let e = [];
            if (c.value) {
                const [t, n] = r.range, a = kr(n.date() - t.date() + 1).map((e => ({
                    text: t.date() + e,
                    type: "current"
                })));
                let i = a.length % 7;
                i = 0 === i ? 0 : 7 - i;
                const o = kr(i).map(((e, t) => ({
                    text: t + 1,
                    type: "next"
                })));
                e = a.concat(o)
            } else {
                const t = r.date.startOf("month").day(),
                    n = ((e, t) => {
                        const n = e.subtract(1, "month").endOf("month").date();
                        return kr(t).map(((e, r) => n - (t - r - 1)))
                    })(r.date, t - u).map((e => ({
                        text: e,
                        type: "prev"
                    }))),
                    a = (e => {
                        const t = e.daysInMonth();
                        return kr(t).map(((e, t) => t + 1))
                    })(r.date).map((e => ({
                        text: e,
                        type: "current"
                    })));
                e = [...n, ...a];
                const i = 7 - (e.length % 7 || 7),
                    o = kr(i).map(((e, t) => ({
                        text: t + 1,
                        type: "next"
                    })));
                e = e.concat(o)
            }
            return (e => kr(e.length / 7).map((t => {
                const n = 7 * t;
                return e.slice(n, n + 7)
            })))(e)
        })), d = re((() => {
            const e = u;
            return 0 === e ? an.map((e => a(`el.datepicker.weeks.${e}`))) : an.slice(e).concat(an.slice(0, e)).map((e => a(`el.datepicker.weeks.${e}`)))
        })), h = (e, t) => {
            switch (t) {
                case "prev":
                    return r.date.startOf("month").subtract(1, "month").date(e);
                case "next":
                    return r.date.startOf("month").add(1, "month").date(e);
                case "current":
                    return r.date.date(e)
            }
        }, g = ({
            text: e,
            type: t
        }) => {
            const n = [t];
            if ("current" === t) {
                const a = h(e, t);
                a.isSame(r.selectedDay, "day") && n.push(s.is("selected")), a.isSame(l, "day") && n.push(s.is("today"))
            }
            return n
        }, p = ({
            text: e,
            type: t
        }) => {
            const n = h(e, t);
            return {
                isSelected: n.isSame(r.selectedDay),
                type: `${t}-month`,
                day: n.format("YYYY-MM-DD"),
                date: n.toDate()
            }
        };
        return t({
            getFormattedDate: h
        }), (e, t) => (Xe(), oe("table", {
            class: R([L(o).b(), L(o).is("range", L(c))]),
            cellspacing: "0",
            cellpadding: "0"
        }, [e.hideHeader ? ie("v-if", !0) : (Xe(), oe("thead", Yr, [(Xe(!0), oe(V, null, Qe(L(d), (e => (Xe(), oe("th", {
            key: e
        }, j(e), 1)))), 128))])), se("tbody", null, [(Xe(!0), oe(V, null, Qe(L(f), ((t, r) => (Xe(), oe("tr", {
            key: r,
            class: R({
                [L(o).e("row")]: !0,
                [L(o).em("row", "hide-border")]: 0 === r && e.hideHeader
            })
        }, [(Xe(!0), oe(V, null, Qe(t, ((t, r) => (Xe(), oe("td", {
            key: r,
            class: R(g(t)),
            onClick: e => (({
                text: e,
                type: t
            }) => {
                const r = h(e, t);
                n("pick", r)
            })(t)
        }, [se("div", {
            class: R(L(s).b())
        }, [qe(e.$slots, "dateCell", {
            data: p(t)
        }, (() => [se("span", null, j(t.text), 1)]))], 2)], 10, Gr)))), 128))], 2)))), 128))])], 2))
    }
})), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/calendar/src/date-table.vue"]
]);
const Hr = Qt({
        modelValue: {
            type: Date
        },
        range: {
            type: qt(Array),
            validator: e => Array.isArray(e) && 2 === e.length && e.every((e => e instanceof Date))
        }
    }),
    Zr = {
        [sn]: e => e instanceof Date,
        input: e => e instanceof Date
    };
const jr = cn(on(me(c(u({}, {
        name: "ElCalendar"
    }), {
        props: Hr,
        emits: Zr,
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                a = rn("calendar"),
                {
                    t: i,
                    lang: o
                } = nn(),
                s = x(),
                l = tn().locale(o.value),
                u = re((() => p.value.subtract(1, "month").date(1))),
                c = re((() => p.value.add(1, "month").date(1))),
                f = re((() => p.value.subtract(1, "year").date(1))),
                d = re((() => p.value.add(1, "year").date(1))),
                h = re((() => {
                    const e = `el.datepicker.month${p.value.format("M")}`;
                    return `${p.value.year()} ${i("el.datepicker.year")} ${i(e)}`
                })),
                g = re({
                    get: () => r.modelValue ? p.value : s.value,
                    set(e) {
                        if (!e) return;
                        s.value = e;
                        const t = e.toDate();
                        n("input", t), n("update:modelValue", t)
                    }
                }),
                p = re((() => r.modelValue ? tn(r.modelValue).locale(o.value) : g.value ? g.value : v.value.length ? v.value[0][0] : l)),
                m = (e, t) => {
                    const n = e.startOf("week"),
                        r = t.endOf("week"),
                        a = n.get("month"),
                        i = r.get("month");
                    if (a === i) return [
                        [n, r]
                    ];
                    if (a + 1 === i) {
                        const e = n.endOf("month"),
                            t = r.startOf("month"),
                            a = e.isSame(t, "week");
                        return [
                            [n, e],
                            [(a ? t.add(1, "week") : t).startOf("week"), r]
                        ]
                    }
                    if (a + 2 === i || (a + 1) % 11 === i) {
                        const e = n.endOf("month"),
                            t = n.add(1, "month").startOf("month"),
                            a = e.isSame(t, "week") ? t.add(1, "week") : t,
                            i = a.endOf("month"),
                            o = r.startOf("month"),
                            s = i.isSame(o, "week") ? o.add(1, "week") : o;
                        return [
                            [n, e],
                            [a.startOf("week"), i],
                            [s.startOf("week"), r]
                        ]
                    }
                    return []
                },
                v = re((() => {
                    if (!r.range) return [];
                    const e = r.range.map((e => tn(e).locale(o.value))),
                        [t, n] = e;
                    return t.isAfter(n) ? [] : t.isSame(n, "month") ? m(t, n) : t.add(1, "month").month() !== n.month() ? [] : m(t, n)
                })),
                C = e => {
                    g.value = e
                },
                E = e => {
                    let t;
                    t = "prev-month" === e ? u.value : "next-month" === e ? c.value : "prev-year" === e ? f.value : "next-year" === e ? d.value : l, t.isSame(p.value, "day") || C(t)
                };
            return t({
                selectedDay: g,
                pickDay: C,
                selectDate: E,
                calculateValidatedDateRange: m
            }), (e, t) => (Xe(), oe("div", {
                class: R(L(a).b())
            }, [se("div", {
                class: R(L(a).e("header"))
            }, [qe(e.$slots, "header", {
                date: L(h)
            }, (() => [se("div", {
                class: R(L(a).e("title"))
            }, j(L(h)), 3), 0 === L(v).length ? (Xe(), oe("div", {
                key: 0,
                class: R(L(a).e("button-group"))
            }, [ge(L(un), null, {
                default: Dt((() => [ge(L(ln), {
                    size: "small",
                    onClick: t[0] || (t[0] = e => E("prev-month"))
                }, {
                    default: Dt((() => [he(j(L(i)("el.datepicker.prevMonth")), 1)])),
                    _: 1
                }), ge(L(ln), {
                    size: "small",
                    onClick: t[1] || (t[1] = e => E("today"))
                }, {
                    default: Dt((() => [he(j(L(i)("el.datepicker.today")), 1)])),
                    _: 1
                }), ge(L(ln), {
                    size: "small",
                    onClick: t[2] || (t[2] = e => E("next-month"))
                }, {
                    default: Dt((() => [he(j(L(i)("el.datepicker.nextMonth")), 1)])),
                    _: 1
                })])),
                _: 1
            })], 2)) : ie("v-if", !0)]))], 2), 0 === L(v).length ? (Xe(), oe("div", {
                key: 0,
                class: R(L(a).e("body"))
            }, [ge(Rr, {
                date: L(p),
                "selected-day": L(g),
                onPick: C
            }, fe({
                _: 2
            }, [e.$slots.dateCell ? {
                name: "dateCell",
                fn: Dt((t => [qe(e.$slots, "dateCell", H(De(t)))]))
            } : void 0]), 1032, ["date", "selected-day"])], 2)) : (Xe(), oe("div", {
                key: 1,
                class: R(L(a).e("body"))
            }, [(Xe(!0), oe(V, null, Qe(L(v), ((t, n) => (Xe(), ae(Rr, {
                key: n,
                date: t[0],
                "selected-day": L(g),
                range: t,
                "hide-header": 0 !== n,
                onPick: C
            }, fe({
                _: 2
            }, [e.$slots.dateCell ? {
                name: "dateCell",
                fn: Dt((t => [qe(e.$slots, "dateCell", H(De(t)))]))
            } : void 0]), 1032, ["date", "selected-day", "range", "hide-header"])))), 128))], 2))], 2))
        }
    })), [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/calendar/src/calendar.vue"]
    ])),
    zr = Qt({
        initialIndex: {
            type: Number,
            default: 0
        },
        height: {
            type: String,
            default: ""
        },
        trigger: {
            type: String,
            default: "hover"
        },
        autoplay: {
            type: Boolean,
            default: !0
        },
        interval: {
            type: Number,
            default: 3e3
        },
        indicatorPosition: {
            type: String,
            default: ""
        },
        indicator: {
            type: Boolean,
            default: !0
        },
        arrow: {
            type: String,
            default: "hover"
        },
        type: {
            type: String,
            default: ""
        },
        loop: {
            type: Boolean,
            default: !0
        },
        direction: {
            type: String,
            default: "horizontal",
            validator: e => ["horizontal", "vertical"].includes(e)
        },
        pauseOnHover: {
            type: Boolean,
            default: !0
        }
    }),
    Ur = {
        change: (e, t) => [e, t].every(fn)
    },
    Xr = ["onMouseenter", "onMouseleave"],
    Vr = ["onMouseenter", "onClick"],
    Wr = {
        key: 0
    };
var $r = on(me(c(u({}, {
    name: "ElCarousel"
}), {
    props: zr,
    emits: Ur,
    setup(e, {
        expose: t,
        emit: n
    }) {
        const r = e,
            a = rn("carousel"),
            i = x(-1),
            o = x(null),
            s = x(!1),
            l = x(),
            u = x([]),
            c = re((() => "never" !== r.arrow && !L(p))),
            f = re((() => u.value.some((e => e.props.label.toString().length > 0)))),
            d = re((() => {
                const e = [a.b(), a.m(r.direction)];
                return L(g) && e.push(a.m("card")), e
            })),
            h = re((() => {
                const e = [a.e("indicators"), a.em("indicators", r.direction)];
                return f.value && e.push(a.em("indicators", "labels")), ("outside" === r.indicatorPosition || L(g)) && e.push(a.em("indicators", "outside")), e
            })),
            g = re((() => "card" === r.type)),
            p = re((() => "vertical" === r.direction)),
            m = vr((e => {
                y(e)
            }), 300, {
                trailing: !0
            }),
            v = vr((e => {
                ! function(e) {
                    "hover" === r.trigger && e !== i.value && (i.value = e)
                }(e)
            }), 300);

        function C() {
            o.value && (clearInterval(o.value), o.value = null)
        }

        function E() {
            r.interval <= 0 || !r.autoplay || o.value || (o.value = setInterval((() => F()), r.interval))
        }
        const F = () => {
            i.value < u.value.length - 1 ? i.value = i.value + 1 : r.loop && (i.value = 0)
        };

        function y(e) {
            if (dn(e)) {
                const t = u.value.filter((t => t.props.name === e));
                t.length > 0 && (e = u.value.indexOf(t[0]))
            }
            if (e = Number(e), Number.isNaN(e) || e !== Math.floor(e)) return;
            const t = u.value.length,
                n = i.value;
            i.value = e < 0 ? r.loop ? t - 1 : 0 : e >= t ? r.loop ? 0 : t - 1 : e, n === i.value && A(n)
        }

        function A(e) {
            u.value.forEach(((t, n) => {
                t.translateItem(n, i.value, e)
            }))
        }

        function D() {
            s.value = !0, r.pauseOnHover && C()
        }

        function _() {
            s.value = !1, E()
        }

        function b(e) {
            L(p) || u.value.forEach(((t, n) => {
                e === function(e, t) {
                    var n, r, a, i;
                    const o = L(u),
                        s = o.length;
                    if (0 === s || !e.states.inStage) return !1;
                    const l = t + 1,
                        c = t - 1,
                        f = s - 1,
                        d = o[f].states.active,
                        h = o[0].states.active,
                        g = null == (r = null == (n = o[l]) ? void 0 : n.states) ? void 0 : r.active,
                        p = null == (i = null == (a = o[c]) ? void 0 : a.states) ? void 0 : i.active;
                    return t === f && h || g ? "left" : !!(0 === t && d || p) && "right"
                }(t, n) && (t.states.hover = !0)
            }))
        }

        function B() {
            L(p) || u.value.forEach((e => {
                e.states.hover = !1
            }))
        }

        function I() {
            y(i.value + 1)
        }
        Ct((() => i.value), ((e, t) => {
            A(t), t > -1 && n("change", e, t)
        })), Ct((() => r.autoplay), (e => {
            e ? E() : C()
        })), Ct((() => r.loop), (() => {
            y(i.value)
        }));
        const w = T();
        return Re((async () => {
            await ke(), w.value = hn(l.value, (() => {
                A()
            })), r.initialIndex < u.value.length && r.initialIndex >= 0 && (i.value = r.initialIndex), E()
        })), Pe((() => {
            C(), l.value && w.value && w.value.stop()
        })), We(Sr, {
            root: l,
            isCardType: g,
            isVertical: p,
            items: u,
            loop: r.loop,
            addItem: function(e) {
                u.value.push(e)
            },
            removeItem: function(e) {
                const t = u.value.findIndex((t => t.uid === e)); - 1 !== t && (u.value.splice(t, 1), i.value === t && I())
            },
            setActiveItem: y
        }), t({
            setActiveItem: y,
            prev: function() {
                y(i.value - 1)
            },
            next: I
        }), (e, t) => (Xe(), oe("div", {
            ref_key: "root",
            ref: l,
            class: R(L(d)),
            onMouseenter: Vt(D, ["stop"]),
            onMouseleave: Vt(_, ["stop"])
        }, [se("div", {
            class: R(L(a).e("container")),
            style: Z({
                height: e.height
            })
        }, [L(c) ? (Xe(), ae(xt, {
            key: 0,
            name: "carousel-arrow-left"
        }, {
            default: Dt((() => [bt(se("button", {
                type: "button",
                class: R([L(a).e("arrow"), L(a).em("arrow", "left")]),
                onMouseenter: t[0] || (t[0] = e => b("left")),
                onMouseleave: B,
                onClick: t[1] || (t[1] = Vt((e => L(m)(i.value - 1)), ["stop"]))
            }, [ge(L(gn), null, {
                default: Dt((() => [ge(L(yr))])),
                _: 1
            })], 34), [
                [Ut, ("always" === e.arrow || s.value) && (r.loop || i.value > 0)]
            ])])),
            _: 1
        })) : ie("v-if", !0), L(c) ? (Xe(), ae(xt, {
            key: 1,
            name: "carousel-arrow-right"
        }, {
            default: Dt((() => [bt(se("button", {
                type: "button",
                class: R([L(a).e("arrow"), L(a).em("arrow", "right")]),
                onMouseenter: t[2] || (t[2] = e => b("right")),
                onMouseleave: B,
                onClick: t[3] || (t[3] = Vt((e => L(m)(i.value + 1)), ["stop"]))
            }, [ge(L(gn), null, {
                default: Dt((() => [ge(L(br))])),
                _: 1
            })], 34), [
                [Ut, ("always" === e.arrow || s.value) && (r.loop || i.value < u.value.length - 1)]
            ])])),
            _: 1
        })) : ie("v-if", !0), qe(e.$slots, "default")], 6), "none" !== e.indicatorPosition ? (Xe(), oe("ul", {
            key: 0,
            class: R(L(h))
        }, [(Xe(!0), oe(V, null, Qe(u.value, ((t, n) => (Xe(), oe("li", {
            key: n,
            class: R([L(a).e("indicator"), L(a).em("indicator", e.direction), L(a).is("active", n === i.value)]),
            onMouseenter: e => L(v)(n),
            onClick: Vt((e => function(e) {
                i.value = e
            }(n)), ["stop"])
        }, [se("button", {
            class: R(L(a).e("button"))
        }, [L(f) ? (Xe(), oe("span", Wr, j(t.props.label), 1)) : ie("v-if", !0)], 2)], 42, Vr)))), 128))], 2)) : ie("v-if", !0)], 42, Xr))
    }
})), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]
]);
const Jr = Qt({
    name: {
        type: String,
        default: ""
    },
    label: {
        type: [String, Number],
        default: ""
    }
});
var Kr = on(me(c(u({}, {
    name: "ElCarouselItem"
}), {
    props: Jr,
    setup(e) {
        const t = e,
            n = rn("carousel"),
            r = Ie(Sr),
            a = ye(),
            i = .83,
            o = x(!1),
            s = x(0),
            l = x(1),
            u = x(!1),
            c = x(!1),
            f = x(!1),
            d = x(!1),
            {
                isCardType: h,
                isVertical: g
            } = r,
            p = re((() => ({
                transform: [`${"translate"+(L(g)?"Y":"X")}(${L(s)}px)`, `scale(${L(l)})`].join(" ")
            })));
        const m = (e, t, n) => {
            var a;
            const o = L(h),
                p = null != (a = r.items.value.length) ? a : Number.NaN,
                m = e === t;
            o || pn(n) || (d.value = m || e === n), !m && p > 2 && r.loop && (e = function(e, t, n) {
                const r = n - 1,
                    a = n / 2;
                return 0 === t && e === r ? -1 : t === r && 0 === e ? n : e < t - 1 && t - e >= a ? n + 1 : e > t + 1 && e - t >= a ? -2 : e
            }(e, t, p));
            const v = L(g);
            u.value = m, o ? (f.value = Math.round(Math.abs(e - t)) <= 1, s.value = function(e, t) {
                var n;
                const a = (null == (n = r.root.value) ? void 0 : n.offsetWidth) || 0;
                return f.value ? a * (1.17 * (e - t) + 1) / 4 : e < t ? -1.83 * a / 4 : 3.83 * a / 4
            }(e, t), l.value = L(u) ? 1 : i) : s.value = function(e, t, n) {
                const a = r.root.value;
                return a ? ((n ? a.offsetHeight : a.offsetWidth) || 0) * (e - t) : 0
            }(e, t, v), c.value = !0
        };

        function v() {
            if (r && L(h)) {
                const e = r.items.value.findIndex((({
                    uid: e
                }) => e === a.uid));
                r.setActiveItem(e)
            }
        }
        return Re((() => {
            r.addItem({
                props: t,
                states: B({
                    hover: o,
                    translate: s,
                    scale: l,
                    active: u,
                    ready: c,
                    inStage: f,
                    animating: d
                }),
                uid: a.uid,
                translateItem: m
            })
        })), ze((() => {
            r.removeItem(a.uid)
        })), (e, t) => bt((Xe(), oe("div", {
            class: R([L(n).e("item"), L(n).is("active", u.value), L(n).is("in-stage", f.value), L(n).is("hover", o.value), L(n).is("animating", d.value), {
                [L(n).em("item", "card")]: L(h)
            }]),
            style: Z(L(p)),
            onClick: v
        }, [L(h) ? bt((Xe(), oe("div", {
            key: 0,
            class: R(L(n).e("mask"))
        }, null, 2)), [
            [Ut, !u.value]
        ]) : ie("v-if", !0), qe(e.$slots, "default")], 6)), [
            [Ut, c.value]
        ])
    }
})), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]
]);
const Qr = cn($r, {
        CarouselItem: Kr
    }),
    qr = mn(Kr),
    ea = cn(vn),
    ta = Qt({
        type: {
            type: String,
            default: "line",
            values: ["line", "circle", "dashboard"]
        },
        percentage: {
            type: Number,
            default: 0,
            validator: e => e >= 0 && e <= 100
        },
        status: {
            type: String,
            default: "",
            values: ["", "success", "exception", "warning"]
        },
        indeterminate: {
            type: Boolean,
            default: !1
        },
        duration: {
            type: Number,
            default: 3
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        strokeLinecap: {
            type: qt(String),
            default: "round"
        },
        textInside: {
            type: Boolean,
            default: !1
        },
        width: {
            type: Number,
            default: 126
        },
        showText: {
            type: Boolean,
            default: !0
        },
        color: {
            type: qt([String, Array, Function]),
            default: ""
        },
        format: {
            type: qt(Function),
            default: e => `${e}%`
        }
    }),
    na = me({
        name: "ElProgress",
        components: {
            ElIcon: gn,
            CircleCheck: Cn,
            CircleClose: En,
            Check: wr,
            Close: Fn,
            WarningFilled: yn
        },
        props: ta,
        setup(e) {
            const t = rn("progress"),
                n = re((() => ({
                    width: `${e.percentage}%`,
                    animationDuration: `${e.duration}s`,
                    backgroundColor: p(e.percentage)
                }))),
                r = re((() => (e.strokeWidth / e.width * 100).toFixed(1))),
                a = re((() => "circle" === e.type || "dashboard" === e.type ? Number.parseInt("" + (50 - Number.parseFloat(r.value) / 2), 10) : 0)),
                i = re((() => {
                    const t = a.value,
                        n = "dashboard" === e.type;
                    return `\n          M 50 50\n          m 0 ${n?"":"-"}${t}\n          a ${t} ${t} 0 1 1 0 ${n?"-":""}${2*t}\n          a ${t} ${t} 0 1 1 0 ${n?"":"-"}${2*t}\n          `
                })),
                o = re((() => 2 * Math.PI * a.value)),
                s = re((() => "dashboard" === e.type ? .75 : 1)),
                l = re((() => `${-1*o.value*(1-s.value)/2}px`)),
                u = re((() => ({
                    strokeDasharray: `${o.value*s.value}px, ${o.value}px`,
                    strokeDashoffset: l.value
                }))),
                c = re((() => ({
                    strokeDasharray: `${o.value*s.value*(e.percentage/100)}px, ${o.value}px`,
                    strokeDashoffset: l.value,
                    transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
                }))),
                f = re((() => {
                    let t;
                    if (e.color) t = p(e.percentage);
                    else switch (e.status) {
                        case "success":
                            t = "#13ce66";
                            break;
                        case "exception":
                            t = "#ff4949";
                            break;
                        case "warning":
                            t = "#e6a23c";
                            break;
                        default:
                            t = "#20a0ff"
                    }
                    return t
                })),
                d = re((() => "warning" === e.status ? yn : "line" === e.type ? "success" === e.status ? Cn : En : "success" === e.status ? wr : Fn)),
                h = re((() => "line" === e.type ? 12 + .4 * e.strokeWidth : .111111 * e.width + 2)),
                g = re((() => e.format(e.percentage))),
                p = t => {
                    var n;
                    const {
                        color: r
                    } = e;
                    if ("function" == typeof r) return r(t);
                    if ("string" == typeof r) return r; {
                        const e = 100 / r.length,
                            a = r.map(((t, n) => "string" == typeof t ? {
                                color: t,
                                percentage: (n + 1) * e
                            } : t)).sort(((e, t) => e.percentage - t.percentage));
                        for (const n of a)
                            if (n.percentage > t) return n.color;
                        return null == (n = a[a.length - 1]) ? void 0 : n.color
                    }
                },
                m = re((() => ({
                    percentage: e.percentage
                })));
            return {
                ns: t,
                barStyle: n,
                relativeStrokeWidth: r,
                radius: a,
                trackPath: i,
                perimeter: o,
                rate: s,
                strokeDashoffset: l,
                trailPathStyle: u,
                circlePathStyle: c,
                stroke: f,
                statusIcon: d,
                progressTextSize: h,
                content: g,
                slotData: m
            }
        }
    }),
    ra = ["aria-valuenow"],
    aa = {
        viewBox: "0 0 100 100"
    },
    ia = ["d", "stroke-width"],
    oa = ["d", "stroke", "stroke-linecap", "stroke-width"],
    sa = {
        key: 0
    };
const la = cn(on(na, [
        ["render", function(e, t, n, r, a, i) {
            const o = et("el-icon");
            return Xe(), oe("div", {
                class: R([e.ns.b(), e.ns.m(e.type), e.ns.is(e.status), {
                    [e.ns.m("without-text")]: !e.showText,
                    [e.ns.m("text-inside")]: e.textInside
                }]),
                role: "progressbar",
                "aria-valuenow": e.percentage,
                "aria-valuemin": "0",
                "aria-valuemax": "100"
            }, ["line" === e.type ? (Xe(), oe("div", {
                key: 0,
                class: R(e.ns.b("bar"))
            }, [se("div", {
                class: R(e.ns.be("bar", "outer")),
                style: Z({
                    height: `${e.strokeWidth}px`
                })
            }, [se("div", {
                class: R([e.ns.be("bar", "inner"), {
                    [e.ns.bem("bar", "inner", "indeterminate")]: e.indeterminate
                }]),
                style: Z(e.barStyle)
            }, [(e.showText || e.$slots.default) && e.textInside ? (Xe(), oe("div", {
                key: 0,
                class: R(e.ns.be("bar", "innerText"))
            }, [qe(e.$slots, "default", H(De(e.slotData)), (() => [se("span", null, j(e.content), 1)]))], 2)) : ie("v-if", !0)], 6)], 6)], 2)) : (Xe(), oe("div", {
                key: 1,
                class: R(e.ns.b("circle")),
                style: Z({
                    height: `${e.width}px`,
                    width: `${e.width}px`
                })
            }, [(Xe(), oe("svg", aa, [se("path", {
                class: R(e.ns.be("circle", "track")),
                d: e.trackPath,
                stroke: "var(--el-fill-color-light, #e5e9f2)",
                "stroke-width": e.relativeStrokeWidth,
                fill: "none",
                style: Z(e.trailPathStyle)
            }, null, 14, ia), se("path", {
                class: R(e.ns.be("circle", "path")),
                d: e.trackPath,
                stroke: e.stroke,
                fill: "none",
                "stroke-linecap": e.strokeLinecap,
                "stroke-width": e.percentage ? e.relativeStrokeWidth : 0,
                style: Z(e.circlePathStyle)
            }, null, 14, oa)]))], 6)), !e.showText && !e.$slots.default || e.textInside ? ie("v-if", !0) : (Xe(), oe("div", {
                key: 2,
                class: R(e.ns.e("text")),
                style: Z({
                    fontSize: `${e.progressTextSize}px`
                })
            }, [qe(e.$slots, "default", H(De(e.slotData)), (() => [e.status ? (Xe(), ae(o, {
                key: 1
            }, {
                default: Dt((() => [(Xe(), ae(nt(e.statusIcon)))])),
                _: 1
            })) : (Xe(), oe("span", sa, j(e.content), 1))]))], 6))], 10, ra)
        }],
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]
    ])),
    ua = "ElInfiniteScroll",
    ca = {
        delay: {
            type: Number,
            default: 200
        },
        distance: {
            type: Number,
            default: 0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        immediate: {
            type: Boolean,
            default: !0
        }
    },
    fa = (e, t) => Object.entries(ca).reduce(((n, [r, a]) => {
        var i, o;
        const {
            type: s,
            default: l
        } = a, u = e.getAttribute(`infinite-scroll-${r}`);
        let c = null != (o = null != (i = t[u]) ? i : u) ? o : l;
        return c = "false" !== c && c, c = s(c), n[r] = Number.isNaN(c) ? l : c, n
    }), {}),
    da = e => {
        const {
            observer: t
        } = e[ua];
        t && (t.disconnect(), delete e[ua].observer)
    },
    ha = (e, t) => {
        const {
            container: n,
            containerEl: r,
            instance: a,
            observer: i,
            lastScrollTop: o
        } = e[ua], {
            disabled: s,
            distance: l
        } = fa(e, a), {
            clientHeight: u,
            scrollHeight: c,
            scrollTop: f
        } = r, d = f - o;
        if (e[ua].lastScrollTop = f, i || s || d < 0) return;
        let h = !1;
        if (n === e) h = c - (u + f) <= l;
        else {
            const {
                clientTop: t,
                scrollHeight: n
            } = e;
            h = f + u >= bn(e, r) + t + n - l
        }
        h && t.call(a)
    };

function ga(e, t) {
    const {
        containerEl: n,
        instance: r
    } = e[ua], {
        disabled: a
    } = fa(e, r);
    a || 0 === n.clientHeight || (n.scrollHeight <= n.clientHeight ? t.call(r) : da(e))
}
const pa = {
        async mounted(e, t) {
            const {
                instance: n,
                value: r
            } = t;
            An(r) || Dn(ua, "'v-infinite-scroll' binding value must be a function"), await ke();
            const {
                delay: a,
                immediate: i
            } = fa(e, n), o = _n(e, !0), s = o === window ? document.documentElement : o, l = vr(ha.bind(null, e, r), a);
            if (o) {
                if (e[ua] = {
                        instance: n,
                        container: o,
                        containerEl: s,
                        delay: a,
                        cb: r,
                        onScroll: l,
                        lastScrollTop: s.scrollTop
                    }, i) {
                    const t = new MutationObserver(vr(ga.bind(null, e, r), 50));
                    e[ua].observer = t, t.observe(e, {
                        childList: !0,
                        subtree: !0
                    }), ga(e, r)
                }
                o.addEventListener("scroll", l)
            }
        },
        unmounted(e) {
            const {
                container: t,
                onScroll: n
            } = e[ua];
            null == t || t.removeEventListener("scroll", n), da(e)
        },
        async updated(e) {
            e[ua] || await ke();
            const {
                containerEl: t,
                cb: n,
                observer: r
            } = e[ua];
            t.clientHeight && r && ga(e, n)
        },
        install: e => {
            e.directive("InfiniteScroll", pa)
        }
    },
    ma = pa;
let va;
const Ca = function(e = {}) {
        if (!In) return;
        const t = Ea(e);
        if (t.fullscreen && va) return va;
        const n = function(e) {
            let t;
            const n = x(!1),
                r = B(c(u({}, e), {
                    originalPosition: "",
                    originalOverflow: "",
                    visible: !1
                }));

            function a() {
                const e = r.parent;
                if (!e.vLoadingAddClassList) {
                    let t = e.getAttribute("loading-number");
                    t = Number.parseInt(t) - 1, t ? e.setAttribute("loading-number", t.toString()) : (Bn(e, "el-loading-parent--relative"), e.removeAttribute("loading-number")), Bn(e, "el-loading-parent--hidden")
                }
                i(), s.unmount()
            }

            function i() {
                var e, t;
                null == (t = null == (e = l.$el) ? void 0 : e.parentNode) || t.removeChild(l.$el)
            }

            function o() {
                n.value && (n.value = !1, a())
            }
            const s = Tt({
                    name: "ElLoading",
                    setup: () => () => {
                        const e = r.spinner || r.svg,
                            t = _e("svg", u({
                                class: "circular",
                                viewBox: r.svgViewBox ? r.svgViewBox : "25 25 50 50"
                            }, e ? {
                                innerHTML: e
                            } : {}), [_e("circle", {
                                class: "path",
                                cx: "50",
                                cy: "50",
                                r: "20",
                                fill: "none"
                            })]),
                            n = r.text ? _e("p", {
                                class: "el-loading-text"
                            }, [r.text]) : void 0;
                        return _e(xt, {
                            name: "el-loading-fade",
                            onAfterLeave: o
                        }, {
                            default: Dt((() => [bt(ge("div", {
                                style: {
                                    backgroundColor: r.background || ""
                                },
                                class: ["el-loading-mask", r.customClass, r.fullscreen ? "is-fullscreen" : ""]
                            }, [_e("div", {
                                class: "el-loading-spinner"
                            }, [t, n])]), [
                                [Ut, r.visible]
                            ])]))
                        })
                    }
                }),
                l = s.mount(document.createElement("div"));
            return c(u({}, N(r)), {
                setText: function(e) {
                    r.text = e
                },
                remvoeElLoadingChild: i,
                close: function() {
                    var i;
                    e.beforeClose && !e.beforeClose() || (r.parent.vLoadingAddClassList = void 0, n.value = !0, clearTimeout(t), t = window.setTimeout((() => {
                        n.value && (n.value = !1, a())
                    }), 400), r.visible = !1, null == (i = e.closed) || i.call(e))
                },
                handleAfterLeave: o,
                vm: l,
                get $el() {
                    return l.$el
                }
            })
        }(c(u({}, t), {
            closed: () => {
                var e;
                null == (e = t.closed) || e.call(t), t.fullscreen && (va = void 0)
            }
        }));
        Fa(t, t.parent, n), ya(t, t.parent, n), t.parent.vLoadingAddClassList = () => ya(t, t.parent, n);
        let r = t.parent.getAttribute("loading-number");
        return r = r ? `${Number.parseInt(r)+1}` : "1", t.parent.setAttribute("loading-number", r), t.parent.appendChild(n.$el), ke((() => n.visible.value = t.visible)), t.fullscreen && (va = n), n
    },
    Ea = e => {
        var t, n, r, a;
        let i;
        return i = dn(e.target) ? null != (t = document.querySelector(e.target)) ? t : document.body : e.target || document.body, {
            parent: i === document.body || e.body ? document.body : i,
            background: e.background || "",
            svg: e.svg || "",
            svgViewBox: e.svgViewBox || "",
            spinner: e.spinner || !1,
            text: e.text || "",
            fullscreen: i === document.body && (null == (n = e.fullscreen) || n),
            lock: null != (r = e.lock) && r,
            customClass: e.customClass || "",
            visible: null == (a = e.visible) || a,
            target: i
        }
    },
    Fa = async (e, t, n) => {
        const {
            nextZIndex: r
        } = xn(), a = {};
        if (e.fullscreen) n.originalPosition.value = wn(document.body, "position"), n.originalOverflow.value = wn(document.body, "overflow"), a.zIndex = r();
        else if (e.parent === document.body) {
            n.originalPosition.value = wn(document.body, "position"), await ke();
            for (const t of ["top", "left"]) {
                const n = "top" === t ? "scrollTop" : "scrollLeft";
                a[t] = e.target.getBoundingClientRect()[t] + document.body[n] + document.documentElement[n] - Number.parseInt(wn(document.body, `margin-${t}`), 10) + "px"
            }
            for (const t of ["height", "width"]) a[t] = `${e.target.getBoundingClientRect()[t]}px`
        } else n.originalPosition.value = wn(t, "position");
        for (const [i, o] of Object.entries(a)) n.$el.style[i] = o
    }, ya = (e, t, n) => {
        "absolute" !== n.originalPosition.value && "fixed" !== n.originalPosition.value ? Sn(t, "el-loading-parent--relative") : Bn(t, "el-loading-parent--relative"), e.fullscreen && e.lock ? Sn(t, "el-loading-parent--hidden") : Bn(t, "el-loading-parent--hidden")
    }, Aa = Symbol("ElLoading"), Da = (e, t) => {
        var n, r, a, i;
        const o = t.instance,
            s = e => en(t.value) ? t.value[e] : void 0,
            l = t => (e => {
                const t = dn(e) && (null == o ? void 0 : o[e]) || e;
                return t ? x(t) : t
            })(s(t) || e.getAttribute(`element-loading-${Tn(t)}`)),
            u = null != (n = s("fullscreen")) ? n : t.modifiers.fullscreen,
            c = {
                text: l("text"),
                svg: l("svg"),
                svgViewBox: l("svgViewBox"),
                spinner: l("spinner"),
                background: l("background"),
                customClass: l("customClass"),
                fullscreen: u,
                target: null != (r = s("target")) ? r : u ? void 0 : e,
                body: null != (a = s("body")) ? a : t.modifiers.body,
                lock: null != (i = s("lock")) ? i : t.modifiers.lock
            };
        e[Aa] = {
            options: c,
            instance: Ca(c)
        }
    }, _a = {
        mounted(e, t) {
            t.value && Da(e, t)
        },
        updated(e, t) {
            const n = e[Aa];
            t.oldValue !== t.value && (t.value && !t.oldValue ? Da(e, t) : t.value && t.oldValue ? en(t.value) && ((e, t) => {
                for (const n of Object.keys(t)) y(t[n]) && (t[n].value = e[n])
            })(t.value, n.options) : null == n || n.instance.close())
        },
        unmounted(e) {
            var t;
            null == (t = e[Aa]) || t.instance.close()
        }
    }, ba = {
        install(e) {
            e.directive("loading", _a), e.config.globalProperties.$loading = Ca
        },
        directive: _a,
        service: Ca
    };
var Ba = me({
    name: "CaretBottom"
});
const Ia = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    xa = ge("path", {
        fill: "currentColor",
        d: "m192 384 320 384 320-384z"
    }, null, -1);
Ba.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Ia, [xa])
}, Ba.__file = "packages/components/CaretBottom.vue";
var wa = Ba,
    Sa = me({
        name: "CloseBold"
    });
const Ta = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    Oa = ge("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
    }, null, -1);
Sa.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Ta, [Oa])
}, Sa.__file = "packages/components/CloseBold.vue";
var ka = Sa,
    Ma = me({
        name: "Cloudy"
    });
const Na = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    Pa = ge("path", {
        fill: "currentColor",
        d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
    }, null, -1);
Ma.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Na, [Pa])
}, Ma.__file = "packages/components/Cloudy.vue";
var La = Ma,
    Ya = me({
        name: "Delete"
    });
const Ga = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    Ra = ge("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
    }, null, -1);
Ya.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Ga, [Ra])
}, Ya.__file = "packages/components/Delete.vue";
var Ha = Ya,
    Za = me({
        name: "Download"
    });
const ja = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    za = ge("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
    }, null, -1);
Za.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", ja, [za])
}, Za.__file = "packages/components/Download.vue";
var Ua = Za,
    Xa = me({
        name: "Edit"
    });
const Va = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    Wa = ge("path", {
        fill: "currentColor",
        d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
    }, null, -1),
    $a = ge("path", {
        fill: "currentColor",
        d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
    }, null, -1);
Xa.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Va, [Wa, $a])
}, Xa.__file = "packages/components/Edit.vue";
var Ja = Xa,
    Ka = me({
        name: "Plus"
    });
const Qa = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    qa = ge("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
    }, null, -1);
Ka.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Qa, [qa])
}, Ka.__file = "packages/components/Plus.vue";
var ei = Ka,
    ti = me({
        name: "Position"
    });
const ni = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ri = ge("path", {
        fill: "currentColor",
        d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
    }, null, -1);
ti.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", ni, [ri])
}, ti.__file = "packages/components/Position.vue";
var ai = ti,
    ii = me({
        name: "Remove"
    });
const oi = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    si = ge("path", {
        fill: "currentColor",
        d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
    }, null, -1),
    li = ge("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
    }, null, -1);
ii.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", oi, [si, li])
}, ii.__file = "packages/components/Remove.vue";
var ui = ii,
    ci = me({
        name: "Select"
    });
const fi = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    di = ge("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
    }, null, -1);
ci.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", fi, [di])
}, ci.__file = "packages/components/Select.vue";
var hi = ci,
    gi = me({
        name: "Search"
    });
const pi = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    mi = ge("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
    }, null, -1);
gi.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", pi, [mi])
}, gi.__file = "packages/components/Search.vue";
var vi = gi,
    Ci = me({
        name: "Setting"
    });
const Ei = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    Fi = ge("path", {
        fill: "currentColor",
        d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
    }, null, -1);
Ci.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Ei, [Fi])
}, Ci.__file = "packages/components/Setting.vue";
var yi = Ci,
    Ai = me({
        name: "StarFilled"
    });
const Di = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    _i = ge("path", {
        fill: "currentColor",
        d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
    }, null, -1);
Ai.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Di, [_i])
}, Ai.__file = "packages/components/StarFilled.vue";
var bi = Ai,
    Bi = me({
        name: "Switch"
    });
const Ii = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    xi = ge("path", {
        fill: "currentColor",
        d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
    }, null, -1);
Bi.render = function(e, t, n, r, a, i) {
    return Xe(), ae("svg", Ii, [xi])
}, Bi.__file = "packages/components/Switch.vue";
var wi = Bi;
const Si = On().value.wallpaper || {};

function Ti(e, t) {
    if (0 == t.type || 1 == t.type || 4 == t.type) e.style = `background-image:url(${t.src})`, e.firstChild && e.removeChild(e.firstChild);
    else if (3 == t.type) e.firstChild && e.removeChild(e.firstChild), e.style = `background-color:${t.src}`;
    else if (2 == t.type) {
        e.style.background = "none";
        let n = e.querySelector("video");
        if (n) n.scr = t.src, n.setAttribute("poster", t.thumb), n.setAttribute("src", t.src);
        else {
            const n = document.createElement("video");
            n.setAttribute("class", "wallpaper-video"), n.autoplay = "autoplay", n.muted = !0, n.loop = "loop", n.poster = t.thumb, n.src = t.src, e.append(n)
        }
    }
    if (3 != t.type) {
        !async function(e) {
            try {
                let n = (await pr(e, {
                    ignore: ["rgb(255,255,255)", "rgb(0,0,0)"],
                    scale: .2
                }))[0].color;
                n = n.replace("rgb(", "").replace(")", "").split(","), document.body.style.setProperty("--img-bg", n);
                var t = .213 * n[0] + .715 * n[1] + .072 * n[2];
                let r = "34, 34, 34";
                t < 127.5 && (r = "233,233,233"), kn.set("sidebarColor", {
                    bg: n,
                    text: r
                }), document.body.style.setProperty("--img-text", r)
            } catch (n) {
                console.log("图片加载失败", n)
            }
        }(2 == t.type ? t.thumb : t.src)
    } else document.body.style.setProperty("--img-bg", "34,34,34"), document.body.style.setProperty("--img-text", "233,233,233")
}
class Oi extends HTMLElement {
    constructor() {
        super(), ((e, t, n) => {
            if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, n)
        })(this, e), f(this, e, t).call(this)
    }
    set wallpaper(e) {
        this.bgEl.classList.add("change"), Ti(this.bgEl, e)
    }
    connectedCallback() {
        this.bgEl = this.shadowRoot.querySelector(".wallpaper"), Ct((() => On().value.wallpaper), (e => {
            ki(this.bgEl, e)
        }), {
            deep: !0
        })
    }
}
e = new WeakSet, t = function() {
    const e = this.attachShadow({
            mode: "open"
        }),
        t = document.createElement("div");
    t.setAttribute("class", "wallpaper"), Ti(t, Si);
    const n = document.createElement("style");
    n.textContent = "\n        .wallpaper{\n            position: absolute;\n            left: calc(var(--wall-blur) * -2);\n            top: calc(var(--wall-blur) * -2);\n            right: calc(var(--wall-blur) * -2);\n            bottom: calc(var(--wall-blur) * -2);\n            filter: blur(var(--wall-blur));\n            transition:background-image .3s,background-color .2s,transform .3s;\n            background-size: cover;\n            background-position: 50%;\n            z-index:0;\n        }\n        .wallpaper.change {\n            transform:scale(1.1)\n        }\n        .wallpaper:after{\n            content:'';\n            position:absolute;\n            left:0;\n            top:0;\n            width:100%;\n            height:100%;\n            background-color:rgba(0,0,0,var(--wall-mask));\n        }\n        .wallpaper .wallpaper-video{\n            position: relative;\n            height: 100%;\n            width: 100%;\n            object-fit: cover;\n            transition: .3s;\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n        ", e.append(t), e.append(n)
};
const ki = (e, t) => {
    if (3 != t.type && 2 != t.type) return Mn("切换中...", "loading"), e.classList.add("change"), new Promise(((n, r, a = !0) => {
        let i = new Image;
        i.src = t.src, i.addEventListener("load", (function() {
            Ti(e, t), e.classList.remove("change"), Mn("切换成功", "check"), n()
        })), i.addEventListener("error", (function() {
            e.classList.remove("change"), Mn("切换失败", "check"), r()
        }))
    }));
    Ti(e, t)
};
customElements.define("itab-wallpaper", Oi), document.body.appendChild(new Oi({}));
var Mi, Ni = {
    exports: {}
};
Mi = Ni,
    function(e, t) {
        if (Mi.exports) Mi.exports = t();
        else {
            var n = t();
            for (var r in n) e[r] = n[r]
        }
    }(Kt, (function() {
        var e, t, n, r, a, i, o, s, l, u, c, f, d, h, g, p, m, v, C, E, F, y, A, D, _, b, B, I, x, w, S, T, O, k, M, N, P, L, Y = {
                _: function(e, t, n, r) {
                    return t < 100 && (e.setFullYear(t), e.setMonth(n - 1), e.setDate(r)), e.setMilliseconds(0), e
                },
                fromYmd: function(e, t, n) {
                    return this.fromYmdHms(e, t, n, 0, 0, 0)
                },
                fromYmdHms: function(e, t, n, r, a, i) {
                    return this._(new Date(e + "/" + t + "/" + n + " " + r + ":" + a + ":" + i), e, t, n)
                },
                getDaysBetweenYmd: function(e, t, n, r, a, i) {
                    var o, s, l;
                    if (e == r) o = $.getDaysInYear(r, a, i) - $.getDaysInYear(e, t, n);
                    else if (e > r) {
                        for (s = $.getDaysOfYear(r) - $.getDaysInYear(r, a, i), l = r + 1; l < e; l++) s += $.getDaysOfYear(l);
                        o = -(s += $.getDaysInYear(e, t, n))
                    } else {
                        for (s = $.getDaysOfYear(e) - $.getDaysInYear(e, t, n), l = e + 1; l < r; l++) s += $.getDaysOfYear(l);
                        o = s += $.getDaysInYear(r, a, i)
                    }
                    return o
                },
                getDaysBetween: function(e, t) {
                    return this.getDaysBetweenYmd(e.getFullYear(), e.getMonth() + 1, e.getDate(), t.getFullYear(), t.getMonth() + 1, t.getDate())
                }
            },
            G = (e = function(e) {
                return t(e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds())
            }, t = function(t, n, r, a, i, o) {
                return 1582 === t && 10 === n && r >= 15 && (r -= 10), {
                    _p: {
                        year: t,
                        month: n,
                        day: r,
                        hour: a,
                        minute: i,
                        second: o,
                        calendar: Y.fromYmdHms(t, n, r, a, i, o)
                    },
                    getYear: function() {
                        return this._p.year
                    },
                    getMonth: function() {
                        return this._p.month
                    },
                    getDay: function() {
                        return this._p.day
                    },
                    getHour: function() {
                        return this._p.hour
                    },
                    getMinute: function() {
                        return this._p.minute
                    },
                    getSecond: function() {
                        return this._p.second
                    },
                    getWeek: function() {
                        return this._p.calendar.getDay()
                    },
                    getWeekInChinese: function() {
                        return $.WEEK[this.getWeek()]
                    },
                    getSolarWeek: function(e) {
                        return H.fromDate(this._p.calendar, e)
                    },
                    isLeapYear: function() {
                        return $.isLeapYear(this._p.year)
                    },
                    getFestivals: function() {
                        var e = [],
                            t = $.FESTIVAL[this._p.month + "-" + this._p.day];
                        t && e.push(t);
                        var n = Math.ceil(this._p.day / 7),
                            r = this.getWeek();
                        return (t = $.WEEK_FESTIVAL[this._p.month + "-" + n + "-" + r]) && e.push(t), this._p.day + 7 >= $.getDaysOfMonth(this._p.year, this._p.month) && (t = $.WEEK_FESTIVAL[this._p.month + "-0-" + r]) && e.push(t), e
                    },
                    getOtherFestivals: function() {
                        var e = [],
                            t = $.OTHER_FESTIVAL[this._p.month + "-" + this._p.day];
                        return t && (e = e.concat(t)), e
                    },
                    getXingzuo: function() {
                        return this.getXingZuo()
                    },
                    getXingZuo: function() {
                        var e = 11,
                            t = 100 * this._p.month + this._p.day;
                        return t >= 321 && t <= 419 ? e = 0 : t >= 420 && t <= 520 ? e = 1 : t >= 521 && t <= 621 ? e = 2 : t >= 622 && t <= 722 ? e = 3 : t >= 723 && t <= 822 ? e = 4 : t >= 823 && t <= 922 ? e = 5 : t >= 923 && t <= 1023 ? e = 6 : t >= 1024 && t <= 1122 ? e = 7 : t >= 1123 && t <= 1221 ? e = 8 : t >= 1222 || t <= 119 ? e = 9 : t <= 218 && (e = 10), $.XINGZUO[e]
                    },
                    toYmd: function() {
                        var e = this._p.day;
                        1582 === this._p.year && 10 === this._p.month && e >= 5 && (e += 10);
                        for (var t = this._p.year + ""; t.length < 4;) t = "0" + t;
                        return [t, (this._p.month < 10 ? "0" : "") + this._p.month, (e < 10 ? "0" : "") + e].join("-")
                    },
                    toYmdHms: function() {
                        return this.toYmd() + " " + [(this._p.hour < 10 ? "0" : "") + this._p.hour, (this._p.minute < 10 ? "0" : "") + this._p.minute, (this._p.second < 10 ? "0" : "") + this._p.second].join(":")
                    },
                    toString: function() {
                        return this.toYmd()
                    },
                    toFullString: function() {
                        var e = this.toYmdHms();
                        this.isLeapYear() && (e += " 闰年"), e += " 星期" + this.getWeekInChinese();
                        for (var t = this.getFestivals(), n = 0, r = t.length; n < r; n++) e += " (" + t[n] + ")";
                        return e += " " + this.getXingZuo() + "座"
                    },
                    next: function(t, n) {
                        var r = Y.fromYmdHms(this._p.year, this._p.month, this._p.day, this._p.hour, this._p.minute, this._p.second);
                        if (0 != t)
                            if (n)
                                for (var a = Math.abs(t), i = t < 1 ? -1 : 1; a > 0;) {
                                    r.setDate(r.getDate() + i);
                                    var o = !0,
                                        s = K.getHoliday(r.getFullYear(), r.getMonth() + 1, r.getDate());
                                    if (s) o = s.isWork();
                                    else {
                                        var l = r.getDay();
                                        0 !== l && 6 !== l || (o = !1)
                                    }
                                    o && a--
                                } else r.setDate(r.getDate() + t);
                        return e(r)
                    },
                    getLunar: function() {
                        return R.fromDate(this._p.calendar)
                    },
                    getJulianDay: function() {
                        var e = this._p.year,
                            t = this._p.month,
                            n = this._p.day + ((this._p.second / 60 + this._p.minute) / 60 + this._p.hour) / 24,
                            r = 0,
                            a = !1;
                        return 372 * e + 31 * t + Math.floor(n) >= 588829 && (a = !0), t <= 2 && (t += 12, e--), a && (r = 2 - (r = Math.floor(e / 100)) + Math.floor(r / 4)), Math.floor(365.25 * (e + 4716)) + Math.floor(30.6001 * (t + 1)) + n + r - 1524.5
                    },
                    getCalendar: function() {
                        return this._p.calendar
                    }
                }
            }, {
                J2000: 2451545,
                fromYmd: function(e, n, r) {
                    return t(e, n, r, 0, 0, 0)
                },
                fromYmdHms: function(e, n, r, a, i, o) {
                    return t(e, n, r, a, i, o)
                },
                fromDate: function(t) {
                    return e(t)
                },
                fromJulianDay: function(e) {
                    return function(e) {
                        var n, r = Math.floor(e + .5),
                            a = e + .5 - r;
                        r >= 2299161 && (r += 1 + (n = Math.floor((r - 1867216.25) / 36524.25)) - Math.floor(n / 4)), r += 1524;
                        var i = Math.floor((r - 122.1) / 365.25);
                        r -= Math.floor(365.25 * i);
                        var o = Math.floor(r / 30.601),
                            s = r -= Math.floor(30.601 * o);
                        o > 13 ? (o -= 13, i -= 4715) : (o -= 1, i -= 4716), a *= 24;
                        var l = Math.floor(a);
                        a -= l, a *= 60;
                        var u = Math.floor(a);
                        a -= u, a *= 60;
                        var c = Math.round(a);
                        return c > 59 && (c -= 60, u++), u > 59 && (u -= 60, l++), t(i, o, s, l, u, c)
                    }(e)
                },
                fromBaZi: function(n, r, a, i, o, s) {
                    return function(n, r, a, i, o, s) {
                        o = 1 == o ? 1 : 2, s = null == s ? 1900 : s;
                        var l = [],
                            u = e(new Date).getLunar(),
                            c = J.getJiaZiIndex(u.getYearInGanZhiExact()) - J.getJiaZiIndex(n);
                        c < 0 && (c += 60);
                        for (var f = u.getYear() - c, d = 0, h = i.substr(1), g = 0, p = J.ZHI.length; g < p; g++) J.ZHI[g] === h && (d = 2 * (g - 1));
                        for (; f >= s;) {
                            for (var m, v = f - 1, C = 0, E = 12, F = !1; C < 15;) {
                                if (v >= s && (u = (m = t(v, E, 1, d, 0, 0)).getLunar()).getYearInGanZhiExact() === n && u.getMonthInGanZhiExact() === r) {
                                    F = !0;
                                    break
                                }++E > 12 && (E = 1, v++), C++
                            }
                            if (F)
                                for (C = 0, --E < 1 && (E = 12, v--), m = t(v, E, 1, d, 0, 0); C < 61;) {
                                    u = m.getLunar();
                                    var y = 2 == o ? u.getDayInGanZhiExact2() : u.getDayInGanZhiExact();
                                    if (u.getYearInGanZhiExact() === n && u.getMonthInGanZhiExact() === r && y === a && u.getTimeInGanZhi() === i) {
                                        l.push(m);
                                        break
                                    }
                                    m = m.next(1), C++
                                }
                            f -= 60
                        }
                        return l
                    }(n, r, a, i, o, s)
                }
            }),
            R = function() {
                var e = function(e, t, n, r, a, i) {
                        var o = {};
                        return function(e, t) {
                                e.jieQiList = [], e.jieQi = {};
                                for (var n = t.getJieQiJulianDays(), r = 0, a = R.JIE_QI_IN_USE.length; r < a; r++) {
                                    var i = R.JIE_QI_IN_USE[r];
                                    e.jieQiList.push(i), e.jieQi[i] = G.fromJulianDay(n[r])
                                }
                            }(o, i),
                            function(e, t, n) {
                                var r = n - 4,
                                    a = r % 10,
                                    i = r % 12;
                                a < 0 && (a += 10), i < 0 && (i += 12);
                                var o = a,
                                    s = i,
                                    l = a,
                                    u = i,
                                    c = t.getYear(),
                                    f = t.toYmd(),
                                    d = t.toYmdHms(),
                                    h = e.jieQi["立春"];
                                h.getYear() != c && (h = e.jieQi.LI_CHUN);
                                var g = h.toYmd(),
                                    p = h.toYmdHms();
                                n === c ? (f < g && (o--, s--), d < p && (l--, u--)) : n < c && (f >= g && (o++, s++), d >= p && (l++, u++)), e.yearGanIndex = a, e.yearZhiIndex = i, e.yearGanIndexByLiChun = (o < 0 ? o + 10 : o) % 10, e.yearZhiIndexByLiChun = (s < 0 ? s + 12 : s) % 12, e.yearGanIndexExact = (l < 0 ? l + 10 : l) % 10, e.yearZhiIndexExact = (u < 0 ? u + 12 : u) % 12
                            }(o, a, e),
                            function(e, t) {
                                var n, r, a = null,
                                    i = R.JIE_QI_IN_USE.length,
                                    o = -3;
                                for (n = 0; n < i; n += 2) {
                                    r = e.jieQi[R.JIE_QI_IN_USE[n]];
                                    var s = t.toYmd();
                                    if (s >= (null == a ? s : a.toYmd()) && s < r.toYmd()) break;
                                    a = r, o++
                                }
                                var l = 2 * ((e.yearGanIndexByLiChun + (o < 0 ? 1 : 0)) % 5 + 1) % 10;
                                for (e.monthGanIndex = ((o < 0 ? o + 10 : o) + l) % 10, e.monthZhiIndex = ((o < 0 ? o + 12 : o) + J.BASE_MONTH_ZHI_INDEX) % 12, a = null, o = -3, n = 0; n < i; n += 2) {
                                    r = e.jieQi[R.JIE_QI_IN_USE[n]];
                                    var u = t.toYmdHms();
                                    if (u >= (null == a ? u : a.toYmdHms()) && u < r.toYmdHms()) break;
                                    a = r, o++
                                }
                                l = 2 * ((e.yearGanIndexExact + (o < 0 ? 1 : 0)) % 5 + 1) % 10, e.monthGanIndexExact = ((o < 0 ? o + 10 : o) + l) % 10, e.monthZhiIndexExact = ((o < 0 ? o + 12 : o) + J.BASE_MONTH_ZHI_INDEX) % 12
                            }(o, a),
                            function(e, t, n, r) {
                                var a = G.fromYmdHms(t.getYear(), t.getMonth(), t.getDay(), 12, 0, 0),
                                    i = Math.floor(a.getJulianDay()) - 11,
                                    o = i % 10,
                                    s = i % 12;
                                e.dayGanIndex = o, e.dayZhiIndex = s;
                                var l = o,
                                    u = s;
                                e.dayGanIndexExact2 = l, e.dayZhiIndexExact2 = u;
                                var c = (n < 10 ? "0" : "") + n + ":" + (r < 10 ? "0" : "") + r;
                                c >= "23:00" && c <= "23:59" && (++l >= 10 && (l -= 10), ++u >= 12 && (u -= 12)), e.dayGanIndexExact = l, e.dayZhiIndexExact = u
                            }(o, a, t, n),
                            function(e, t, n) {
                                var r = J.getTimeZhiIndex((t < 10 ? "0" : "") + t + ":" + (n < 10 ? "0" : "") + n);
                                e.timeZhiIndex = r, e.timeGanIndex = (e.dayGanIndexExact % 5 * 2 + r) % 10
                            }(o, t, n),
                            function(e, t) {
                                e.weekIndex = t.getWeek()
                            }(o, a), o
                    },
                    t = function(e, t, r, a, i, o) {
                        var s = X.fromYear(e),
                            l = s.getMonth(t);
                        if (null == l) throw "wrong lunar year " + e + " month " + t;
                        if (r < 1) throw "lunar day must bigger than 0";
                        var u = l.getDayCount();
                        if (r > u) throw "only " + u + " days in lunar year " + e + " month " + t;
                        var c = G.fromJulianDay(l.getFirstJulianDay() + r - 1),
                            f = G.fromYmdHms(c.getYear(), c.getMonth(), c.getDay(), a, i, o);
                        return n(e, t, r, a, i, o, f, s)
                    },
                    n = function(t, n, r, a, i, o, s, l) {
                        var u = e(t, a, i, 0, s, l);
                        return {
                            _p: {
                                year: t,
                                month: n,
                                day: r,
                                hour: a,
                                minute: i,
                                second: o,
                                timeGanIndex: u.timeGanIndex,
                                timeZhiIndex: u.timeZhiIndex,
                                dayGanIndex: u.dayGanIndex,
                                dayZhiIndex: u.dayZhiIndex,
                                dayGanIndexExact: u.dayGanIndexExact,
                                dayZhiIndexExact: u.dayZhiIndexExact,
                                dayGanIndexExact2: u.dayGanIndexExact2,
                                dayZhiIndexExact2: u.dayZhiIndexExact2,
                                monthGanIndex: u.monthGanIndex,
                                monthZhiIndex: u.monthZhiIndex,
                                monthGanIndexExact: u.monthGanIndexExact,
                                monthZhiIndexExact: u.monthZhiIndexExact,
                                yearGanIndex: u.yearGanIndex,
                                yearZhiIndex: u.yearZhiIndex,
                                yearGanIndexByLiChun: u.yearGanIndexByLiChun,
                                yearZhiIndexByLiChun: u.yearZhiIndexByLiChun,
                                yearGanIndexExact: u.yearGanIndexExact,
                                yearZhiIndexExact: u.yearZhiIndexExact,
                                weekIndex: u.weekIndex,
                                jieQi: u.jieQi,
                                jieQiList: u.jieQiList,
                                solar: s,
                                eightChar: null
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getDay: function() {
                                return this._p.day
                            },
                            getHour: function() {
                                return this._p.hour
                            },
                            getMinute: function() {
                                return this._p.minute
                            },
                            getSecond: function() {
                                return this._p.second
                            },
                            getTimeGanIndex: function() {
                                return this._p.timeGanIndex
                            },
                            getTimeZhiIndex: function() {
                                return this._p.timeZhiIndex
                            },
                            getDayGanIndex: function() {
                                return this._p.dayGanIndex
                            },
                            getDayGanIndexExact: function() {
                                return this._p.dayGanIndexExact
                            },
                            getDayGanIndexExact2: function() {
                                return this._p.dayGanIndexExact2
                            },
                            getDayZhiIndex: function() {
                                return this._p.dayZhiIndex
                            },
                            getDayZhiIndexExact: function() {
                                return this._p.dayZhiIndexExact
                            },
                            getDayZhiIndexExact2: function() {
                                return this._p.dayZhiIndexExact2
                            },
                            getMonthGanIndex: function() {
                                return this._p.monthGanIndex
                            },
                            getMonthGanIndexExact: function() {
                                return this._p.monthGanIndexExact
                            },
                            getMonthZhiIndex: function() {
                                return this._p.monthZhiIndex
                            },
                            getMonthZhiIndexExact: function() {
                                return this._p.monthZhiIndexExact
                            },
                            getYearGanIndex: function() {
                                return this._p.yearGanIndex
                            },
                            getYearGanIndexByLiChun: function() {
                                return this._p.yearGanIndexByLiChun
                            },
                            getYearGanIndexExact: function() {
                                return this._p.yearGanIndexExact
                            },
                            getYearZhiIndex: function() {
                                return this._p.yearZhiIndex
                            },
                            getYearZhiIndexByLiChun: function() {
                                return this._p.yearZhiIndexByLiChun
                            },
                            getYearZhiIndexExact: function() {
                                return this._p.yearZhiIndexExact
                            },
                            getGan: function() {
                                return this.getYearGan()
                            },
                            getZhi: function() {
                                return this.getYearZhi()
                            },
                            getYearGan: function() {
                                return J.GAN[this._p.yearGanIndex + 1]
                            },
                            getYearGanByLiChun: function() {
                                return J.GAN[this._p.yearGanIndexByLiChun + 1]
                            },
                            getYearGanExact: function() {
                                return J.GAN[this._p.yearGanIndexExact + 1]
                            },
                            getYearZhi: function() {
                                return J.ZHI[this._p.yearZhiIndex + 1]
                            },
                            getYearZhiByLiChun: function() {
                                return J.ZHI[this._p.yearZhiIndexByLiChun + 1]
                            },
                            getYearZhiExact: function() {
                                return J.ZHI[this._p.yearZhiIndexExact + 1]
                            },
                            getYearInGanZhi: function() {
                                return this.getYearGan() + this.getYearZhi()
                            },
                            getYearInGanZhiByLiChun: function() {
                                return this.getYearGanByLiChun() + this.getYearZhiByLiChun()
                            },
                            getYearInGanZhiExact: function() {
                                return this.getYearGanExact() + this.getYearZhiExact()
                            },
                            getMonthGan: function() {
                                return J.GAN[this._p.monthGanIndex + 1]
                            },
                            getMonthGanExact: function() {
                                return J.GAN[this._p.monthGanIndexExact + 1]
                            },
                            getMonthZhi: function() {
                                return J.ZHI[this._p.monthZhiIndex + 1]
                            },
                            getMonthZhiExact: function() {
                                return J.ZHI[this._p.monthZhiIndexExact + 1]
                            },
                            getMonthInGanZhi: function() {
                                return this.getMonthGan() + this.getMonthZhi()
                            },
                            getMonthInGanZhiExact: function() {
                                return this.getMonthGanExact() + this.getMonthZhiExact()
                            },
                            getDayGan: function() {
                                return J.GAN[this._p.dayGanIndex + 1]
                            },
                            getDayGanExact: function() {
                                return J.GAN[this._p.dayGanIndexExact + 1]
                            },
                            getDayGanExact2: function() {
                                return J.GAN[this._p.dayGanIndexExact2 + 1]
                            },
                            getDayZhi: function() {
                                return J.ZHI[this._p.dayZhiIndex + 1]
                            },
                            getDayZhiExact: function() {
                                return J.ZHI[this._p.dayZhiIndexExact + 1]
                            },
                            getDayZhiExact2: function() {
                                return J.ZHI[this._p.dayZhiIndexExact2 + 1]
                            },
                            getDayInGanZhi: function() {
                                return this.getDayGan() + this.getDayZhi()
                            },
                            getDayInGanZhiExact: function() {
                                return this.getDayGanExact() + this.getDayZhiExact()
                            },
                            getDayInGanZhiExact2: function() {
                                return this.getDayGanExact2() + this.getDayZhiExact2()
                            },
                            getTimeGan: function() {
                                return J.GAN[this._p.timeGanIndex + 1]
                            },
                            getTimeZhi: function() {
                                return J.ZHI[this._p.timeZhiIndex + 1]
                            },
                            getTimeInGanZhi: function() {
                                return this.getTimeGan() + this.getTimeZhi()
                            },
                            getShengxiao: function() {
                                return this.getYearShengXiao()
                            },
                            getYearShengXiao: function() {
                                return J.SHENGXIAO[this._p.yearZhiIndex + 1]
                            },
                            getYearShengXiaoByLiChun: function() {
                                return J.SHENGXIAO[this._p.yearZhiIndexByLiChun + 1]
                            },
                            getYearShengXiaoExact: function() {
                                return J.SHENGXIAO[this._p.yearZhiIndexExact + 1]
                            },
                            getMonthShengXiao: function() {
                                return J.SHENGXIAO[this._p.monthZhiIndex + 1]
                            },
                            getMonthShengXiaoExact: function() {
                                return J.SHENGXIAO[this._p.monthZhiIndexExact + 1]
                            },
                            getDayShengXiao: function() {
                                return J.SHENGXIAO[this._p.dayZhiIndex + 1]
                            },
                            getTimeShengXiao: function() {
                                return J.SHENGXIAO[this._p.timeZhiIndex + 1]
                            },
                            getYearInChinese: function() {
                                for (var e = this._p.year + "", t = "", n = "0".charCodeAt(0), r = 0, a = e.length; r < a; r++) t += J.NUMBER[e.charCodeAt(r) - n];
                                return t
                            },
                            getMonthInChinese: function() {
                                var e = this._p.month;
                                return (e < 0 ? "闰" : "") + J.MONTH[Math.abs(e)]
                            },
                            getDayInChinese: function() {
                                return J.DAY[this._p.day]
                            },
                            getPengZuGan: function() {
                                return J.PENGZU_GAN[this._p.dayGanIndex + 1]
                            },
                            getPengZuZhi: function() {
                                return J.PENGZU_ZHI[this._p.dayZhiIndex + 1]
                            },
                            getPositionXi: function() {
                                return this.getDayPositionXi()
                            },
                            getPositionXiDesc: function() {
                                return this.getDayPositionXiDesc()
                            },
                            getPositionYangGui: function() {
                                return this.getDayPositionYangGui()
                            },
                            getPositionYangGuiDesc: function() {
                                return this.getDayPositionYangGuiDesc()
                            },
                            getPositionYinGui: function() {
                                return this.getDayPositionYinGui()
                            },
                            getPositionYinGuiDesc: function() {
                                return this.getDayPositionYinGuiDesc()
                            },
                            getPositionFu: function() {
                                return this.getDayPositionFu()
                            },
                            getPositionFuDesc: function() {
                                return this.getDayPositionFuDesc()
                            },
                            getPositionCai: function() {
                                return this.getDayPositionCai()
                            },
                            getPositionCaiDesc: function() {
                                return this.getDayPositionCaiDesc()
                            },
                            getDayPositionXi: function() {
                                return J.POSITION_XI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionXiDesc: function() {
                                return J.POSITION_DESC[this.getDayPositionXi()]
                            },
                            getDayPositionYangGui: function() {
                                return J.POSITION_YANG_GUI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionYangGuiDesc: function() {
                                return J.POSITION_DESC[this.getDayPositionYangGui()]
                            },
                            getDayPositionYinGui: function() {
                                return J.POSITION_YIN_GUI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionYinGuiDesc: function() {
                                return J.POSITION_DESC[this.getDayPositionYinGui()]
                            },
                            getDayPositionFu: function(e) {
                                return (1 === e ? J.POSITION_FU : J.POSITION_FU_2)[this._p.dayGanIndex + 1]
                            },
                            getDayPositionFuDesc: function(e) {
                                return J.POSITION_DESC[this.getDayPositionFu(e)]
                            },
                            getDayPositionCai: function() {
                                return J.POSITION_CAI[this._p.dayGanIndex + 1]
                            },
                            getDayPositionCaiDesc: function() {
                                return J.POSITION_DESC[this.getDayPositionCai()]
                            },
                            getTimePositionXi: function() {
                                return J.POSITION_XI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionXiDesc: function() {
                                return J.POSITION_DESC[this.getTimePositionXi()]
                            },
                            getTimePositionYangGui: function() {
                                return J.POSITION_YANG_GUI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionYangGuiDesc: function() {
                                return J.POSITION_DESC[this.getTimePositionYangGui()]
                            },
                            getTimePositionYinGui: function() {
                                return J.POSITION_YIN_GUI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionYinGuiDesc: function() {
                                return J.POSITION_DESC[this.getTimePositionYinGui()]
                            },
                            getTimePositionFu: function(e) {
                                return (1 === e ? J.POSITION_FU : J.POSITION_FU_2)[this._p.timeGanIndex + 1]
                            },
                            getTimePositionFuDesc: function(e) {
                                return J.POSITION_DESC[this.getTimePositionFu(e)]
                            },
                            getTimePositionCai: function() {
                                return J.POSITION_CAI[this._p.timeGanIndex + 1]
                            },
                            getTimePositionCaiDesc: function() {
                                return J.POSITION_DESC[this.getTimePositionCai()]
                            },
                            _getDayPositionTaiSui: function(e, t) {
                                var n = "";
                                switch (e) {
                                    case "甲子":
                                    case "乙丑":
                                    case "丙寅":
                                    case "丁卯":
                                    case "戊辰":
                                    case "已巳":
                                        n = "震";
                                        break;
                                    case "丙子":
                                    case "丁丑":
                                    case "戊寅":
                                    case "已卯":
                                    case "庚辰":
                                    case "辛巳":
                                        n = "离";
                                        break;
                                    case "戊子":
                                    case "已丑":
                                    case "庚寅":
                                    case "辛卯":
                                    case "壬辰":
                                    case "癸巳":
                                        n = "中";
                                        break;
                                    case "庚子":
                                    case "辛丑":
                                    case "壬寅":
                                    case "癸卯":
                                    case "甲辰":
                                    case "乙巳":
                                        n = "兑";
                                        break;
                                    case "壬子":
                                    case "癸丑":
                                    case "甲寅":
                                    case "乙卯":
                                    case "丙辰":
                                    case "丁巳":
                                        n = "坎";
                                        break;
                                    default:
                                        n = J.POSITION_TAI_SUI_YEAR[t]
                                }
                                return n
                            },
                            getDayPositionTaiSui: function(e) {
                                var t, n;
                                switch (e) {
                                    case 1:
                                        t = this.getDayInGanZhi(), n = this._p.yearZhiIndex;
                                        break;
                                    case 3:
                                        t = this.getDayInGanZhi(), n = this._p.yearZhiIndexExact;
                                        break;
                                    default:
                                        t = this.getDayInGanZhiExact2(), n = this._p.yearZhiIndexByLiChun
                                }
                                return this._getDayPositionTaiSui(t, n)
                            },
                            getDayPositionTaiSuiDesc: function(e) {
                                return J.POSITION_DESC[this.getDayPositionTaiSui(e)]
                            },
                            _getMonthPositionTaiSui: function(e, t) {
                                var n = "",
                                    r = e - J.BASE_MONTH_ZHI_INDEX;
                                switch (r < 0 && (r += 12), r) {
                                    case 0:
                                    case 4:
                                    case 8:
                                        n = "艮";
                                        break;
                                    case 2:
                                    case 6:
                                    case 10:
                                        n = "坤";
                                        break;
                                    case 3:
                                    case 7:
                                    case 11:
                                        n = "巽";
                                        break;
                                    default:
                                        n = J.POSITION_GAN[t]
                                }
                                return n
                            },
                            getMonthPositionTaiSui: function(e) {
                                var t, n;
                                return 3 === e ? (t = this._p.monthZhiIndexExact, n = this._p.monthGanIndexExact) : (t = this._p.monthZhiIndex, n = this._p.monthGanIndex), this._getMonthPositionTaiSui(t, n)
                            },
                            getMonthPositionTaiSuiDesc: function(e) {
                                return J.POSITION_DESC[this.getMonthPositionTaiSui(e)]
                            },
                            getYearPositionTaiSui: function(e) {
                                var t;
                                switch (e) {
                                    case 1:
                                        t = this._p.yearZhiIndex;
                                        break;
                                    case 3:
                                        t = this._p.yearZhiIndexExact;
                                        break;
                                    default:
                                        t = this._p.yearZhiIndexByLiChun
                                }
                                return J.POSITION_TAI_SUI_YEAR[t]
                            },
                            getYearPositionTaiSuiDesc: function(e) {
                                return J.POSITION_DESC[this.getYearPositionTaiSui(e)]
                            },
                            getChong: function() {
                                return this.getDayChong()
                            },
                            getChongGan: function() {
                                return this.getDayChongGan()
                            },
                            getChongGanTie: function() {
                                return this.getDayChongGanTie()
                            },
                            getChongShengXiao: function() {
                                return this.getDayChongShengXiao()
                            },
                            getChongDesc: function() {
                                return this.getDayChongDesc()
                            },
                            getSha: function() {
                                return this.getDaySha()
                            },
                            getDayChong: function() {
                                return J.CHONG[this.getDayZhi()]
                            },
                            getDayChongGan: function() {
                                return J.CHONG_GAN[this.getDayGan()]
                            },
                            getDayChongGanTie: function() {
                                return J.CHONG_GAN_TIE[this.getDayGan()]
                            },
                            getDayChongShengXiao: function() {
                                for (var e = this.getChong(), t = 0, n = J.ZHI.length; t < n; t++)
                                    if (J.ZHI[t] === e) return J.SHENGXIAO[t];
                                return ""
                            },
                            getDayChongDesc: function() {
                                return "(" + this.getDayChongGan() + this.getDayChong() + ")" + this.getDayChongShengXiao()
                            },
                            getDaySha: function() {
                                return J.SHA[this.getDayZhi()]
                            },
                            getTimeChong: function() {
                                return J.CHONG[this.getTimeZhi()]
                            },
                            getTimeChongGan: function() {
                                return J.CHONG_GAN[this.getTimeGan()]
                            },
                            getTimeChongGanTie: function() {
                                return J.CHONG_GAN_TIE[this.getTimeGan()]
                            },
                            getTimeChongShengXiao: function() {
                                for (var e = this.getTimeChong(), t = 0, n = J.ZHI.length; t < n; t++)
                                    if (J.ZHI[t] === e) return J.SHENGXIAO[t];
                                return ""
                            },
                            getTimeChongDesc: function() {
                                return "(" + this.getTimeChongGan() + this.getTimeChong() + ")" + this.getTimeChongShengXiao()
                            },
                            getTimeSha: function() {
                                return J.SHA[this.getTimeZhi()]
                            },
                            getYearNaYin: function() {
                                return J.NAYIN[this.getYearInGanZhi()]
                            },
                            getMonthNaYin: function() {
                                return J.NAYIN[this.getMonthInGanZhi()]
                            },
                            getDayNaYin: function() {
                                return J.NAYIN[this.getDayInGanZhi()]
                            },
                            getTimeNaYin: function() {
                                return J.NAYIN[this.getTimeInGanZhi()]
                            },
                            getSeason: function() {
                                return J.SEASON[Math.abs(this._p.month)]
                            },
                            _convertJieQi: function(e) {
                                var t = e;
                                return "DONG_ZHI" === t ? t = "冬至" : "DA_HAN" === t ? t = "大寒" : "XIAO_HAN" === t ? t = "小寒" : "LI_CHUN" === t ? t = "立春" : "DA_XUE" === t ? t = "大雪" : "YU_SHUI" === t ? t = "雨水" : "JING_ZHE" === t && (t = "惊蛰"), t
                            },
                            getJie: function() {
                                for (var e = 0, t = R.JIE_QI_IN_USE.length; e < t; e += 2) {
                                    var n = R.JIE_QI_IN_USE[e],
                                        r = this._p.jieQi[n];
                                    if (r.getYear() === this._p.solar.getYear() && r.getMonth() === this._p.solar.getMonth() && r.getDay() === this._p.solar.getDay()) return this._convertJieQi(n)
                                }
                                return ""
                            },
                            getQi: function() {
                                for (var e = 1, t = R.JIE_QI_IN_USE.length; e < t; e += 2) {
                                    var n = R.JIE_QI_IN_USE[e],
                                        r = this._p.jieQi[n];
                                    if (r.getYear() === this._p.solar.getYear() && r.getMonth() === this._p.solar.getMonth() && r.getDay() === this._p.solar.getDay()) return this._convertJieQi(n)
                                }
                                return ""
                            },
                            getJieQi: function() {
                                for (var e in this._p.jieQi) {
                                    var t = this._p.jieQi[e];
                                    if (t.getYear() === this._p.solar.getYear() && t.getMonth() === this._p.solar.getMonth() && t.getDay() === this._p.solar.getDay()) return this._convertJieQi(e)
                                }
                                return ""
                            },
                            getWeek: function() {
                                return this._p.weekIndex
                            },
                            getWeekInChinese: function() {
                                return $.WEEK[this.getWeek()]
                            },
                            getXiu: function() {
                                return J.XIU[this.getDayZhi() + this.getWeek()]
                            },
                            getXiuLuck: function() {
                                return J.XIU_LUCK[this.getXiu()]
                            },
                            getXiuSong: function() {
                                return J.XIU_SONG[this.getXiu()]
                            },
                            getZheng: function() {
                                return J.ZHENG[this.getXiu()]
                            },
                            getAnimal: function() {
                                return J.ANIMAL[this.getXiu()]
                            },
                            getGong: function() {
                                return J.GONG[this.getXiu()]
                            },
                            getShou: function() {
                                return J.SHOU[this.getGong()]
                            },
                            getFestivals: function() {
                                var e = [],
                                    t = J.FESTIVAL[this._p.month + "-" + this._p.day];
                                return t && e.push(t), 12 === Math.abs(this._p.month) && this._p.day >= 29 && this._p.year != this.next(1).getYear() && e.push("除夕"), e
                            },
                            getOtherFestivals: function() {
                                var e = [],
                                    t = J.OTHER_FESTIVAL[this._p.month + "-" + this._p.day];
                                t && (e = e.concat(t));
                                var n = this._p.solar.toYmd();
                                this._p.solar.toYmd() === this._p.jieQi["清明"].next(-1).toYmd() && e.push("寒食节");
                                var r = this._p.jieQi["立春"],
                                    a = 4 - r.getLunar().getDayGanIndex();
                                return a < 0 && (a += 10), n === r.next(a + 40).toYmd() && e.push("春社"), (a = 4 - (r = this._p.jieQi["立秋"]).getLunar().getDayGanIndex()) < 0 && (a += 10), n === r.next(a + 40).toYmd() && e.push("秋社"), e
                            },
                            getBaZi: function() {
                                var e = this.getEightChar(),
                                    t = [];
                                return t.push(e.getYear()), t.push(e.getMonth()), t.push(e.getDay()), t.push(e.getTime()), t
                            },
                            getBaZiWuXing: function() {
                                var e = this.getEightChar(),
                                    t = [];
                                return t.push(e.getYearWuXing()), t.push(e.getMonthWuXing()), t.push(e.getDayWuXing()), t.push(e.getTimeWuXing()), t
                            },
                            getBaZiNaYin: function() {
                                var e = this.getEightChar(),
                                    t = [];
                                return t.push(e.getYearNaYin()), t.push(e.getMonthNaYin()), t.push(e.getDayNaYin()), t.push(e.getTimeNaYin()), t
                            },
                            getBaZiShiShenGan: function() {
                                var e = this.getEightChar(),
                                    t = [];
                                return t.push(e.getYearShiShenGan()), t.push(e.getMonthShiShenGan()), t.push(e.getDayShiShenGan()), t.push(e.getTimeShiShenGan()), t
                            },
                            getBaZiShiShenZhi: function() {
                                var e = this.getEightChar(),
                                    t = [];
                                return t.push(e.getYearShiShenZhi()[0]), t.push(e.getMonthShiShenZhi()[0]), t.push(e.getDayShiShenZhi()[0]), t.push(e.getTimeShiShenZhi()[0]), t
                            },
                            getBaZiShiShenYearZhi: function() {
                                return this.getEightChar().getYearShiShenZhi()
                            },
                            getBaZiShiShenMonthZhi: function() {
                                return this.getEightChar().getMonthShiShenZhi()
                            },
                            getBaZiShiShenDayZhi: function() {
                                return this.getEightChar().getDayShiShenZhi()
                            },
                            getBaZiShiShenTimeZhi: function() {
                                return this.getEightChar().getTimeShiShenZhi()
                            },
                            getZhiXing: function() {
                                var e = this._p.dayZhiIndex - this._p.monthZhiIndex;
                                return e < 0 && (e += 12), J.ZHI_XING[e + 1]
                            },
                            getDayTianShen: function() {
                                var e = this.getMonthZhi(),
                                    t = J.ZHI_TIAN_SHEN_OFFSET[e];
                                return J.TIAN_SHEN[(this._p.dayZhiIndex + t) % 12 + 1]
                            },
                            getTimeTianShen: function() {
                                var e = this.getDayZhiExact(),
                                    t = J.ZHI_TIAN_SHEN_OFFSET[e];
                                return J.TIAN_SHEN[(this._p.timeZhiIndex + t) % 12 + 1]
                            },
                            getDayTianShenType: function() {
                                return J.TIAN_SHEN_TYPE[this.getDayTianShen()]
                            },
                            getTimeTianShenType: function() {
                                return J.TIAN_SHEN_TYPE[this.getTimeTianShen()]
                            },
                            getDayTianShenLuck: function() {
                                return J.TIAN_SHEN_TYPE_LUCK[this.getDayTianShenType()]
                            },
                            getTimeTianShenLuck: function() {
                                return J.TIAN_SHEN_TYPE_LUCK[this.getTimeTianShenType()]
                            },
                            getDayPositionTai: function() {
                                return J.POSITION_TAI_DAY[J.getJiaZiIndex(this.getDayInGanZhi())]
                            },
                            getMonthPositionTai: function() {
                                var e = this._p.month;
                                return e < 0 ? "" : J.POSITION_TAI_MONTH[e - 1]
                            },
                            getDayYi: function(e) {
                                return J.getDayYi(2 == e ? this.getMonthInGanZhiExact() : this.getMonthInGanZhi(), this.getDayInGanZhi())
                            },
                            getDayJi: function(e) {
                                return J.getDayJi(2 == e ? this.getMonthInGanZhiExact() : this.getMonthInGanZhi(), this.getDayInGanZhi())
                            },
                            getDayJiShen: function() {
                                return J.getDayJiShen(this.getMonth(), this.getDayInGanZhi())
                            },
                            getDayXiongSha: function() {
                                return J.getDayXiongSha(this.getMonth(), this.getDayInGanZhi())
                            },
                            getTimeYi: function() {
                                return J.getTimeYi(this.getDayInGanZhiExact(), this.getTimeInGanZhi())
                            },
                            getTimeJi: function() {
                                return J.getTimeJi(this.getDayInGanZhiExact(), this.getTimeInGanZhi())
                            },
                            getYueXiang: function() {
                                return J.YUE_XIANG[this._p.day]
                            },
                            _getYearNineStar: function(e) {
                                var t = J.getJiaZiIndex(e) + 1,
                                    n = 0;
                                t != J.getJiaZiIndex(this.getYearInGanZhi()) + 1 && (n = -1);
                                var r = (62 + Math.floor((this._p.year + n + 2696) / 60) % 3 * 3 - t) % 9;
                                return 0 === r && (r = 9), Q.fromIndex(r - 1)
                            },
                            getYearNineStar: function(e) {
                                var t;
                                switch (e) {
                                    case 1:
                                        t = this.getYearInGanZhi();
                                        break;
                                    case 3:
                                        t = this.getYearInGanZhiExact();
                                        break;
                                    default:
                                        t = this.getYearInGanZhiByLiChun()
                                }
                                return this._getYearNineStar(t)
                            },
                            _getMonthNineStar: function(e, t) {
                                var n = 27 - e % 3 * 3;
                                t < J.BASE_MONTH_ZHI_INDEX && (n -= 3);
                                var r = (n - t) % 9;
                                return Q.fromIndex(r)
                            },
                            getMonthNineStar: function(e) {
                                var t, n;
                                switch (e) {
                                    case 1:
                                        t = this._p.yearZhiIndex, n = this._p.monthZhiIndex;
                                        break;
                                    case 3:
                                        t = this._p.yearZhiIndexExact, n = this._p.monthZhiIndexExact;
                                        break;
                                    default:
                                        t = this._p.yearZhiIndexByLiChun, n = this._p.monthZhiIndex
                                }
                                return this._getMonthNineStar(t, n)
                            },
                            getDayNineStar: function() {
                                var e, t, n, r = this._p.solar.toYmd(),
                                    a = this._p.jieQi["冬至"],
                                    i = this._p.jieQi.DONG_ZHI,
                                    o = this._p.jieQi["夏至"],
                                    s = J.getJiaZiIndex(a.getLunar().getDayInGanZhi()),
                                    l = J.getJiaZiIndex(i.getLunar().getDayInGanZhi()),
                                    u = J.getJiaZiIndex(o.getLunar().getDayInGanZhi()),
                                    c = (e = s > 29 ? a.next(60 - s) : a.next(-s)).toYmd(),
                                    f = (t = l > 29 ? i.next(60 - l) : i.next(-l)).toYmd(),
                                    d = (n = u > 29 ? o.next(60 - u) : o.next(-u)).toYmd(),
                                    h = 0;
                                return r >= c && r < d ? h = Y.getDaysBetween(e.getCalendar(), this.getSolar().getCalendar()) % 9 : r >= d && r < f ? h = 8 - Y.getDaysBetween(n.getCalendar(), this.getSolar().getCalendar()) % 9 : r >= f ? h = Y.getDaysBetween(t.getCalendar(), this.getSolar().getCalendar()) % 9 : r < c && (h = (8 + Y.getDaysBetween(this.getSolar().getCalendar(), e.getCalendar())) % 9), Q.fromIndex(h)
                            },
                            getTimeNineStar: function() {
                                var e = this._p.solar.toYmd(),
                                    t = !1;
                                (e >= this._p.jieQi["冬至"].toYmd() && e < this._p.jieQi["夏至"].toYmd() || e >= this._p.jieQi.DONG_ZHI.toYmd()) && (t = !0);
                                var n = t ? 6 : 2,
                                    r = this.getDayZhi();
                                "子午卯酉".indexOf(r) > -1 ? n = t ? 0 : 8 : "辰戌丑未".indexOf(r) > -1 && (n = t ? 3 : 5);
                                var a = t ? n + this._p.timeZhiIndex : n + 9 - this._p.timeZhiIndex;
                                return Q.fromIndex(a % 9)
                            },
                            getSolar: function() {
                                return this._p.solar
                            },
                            getJieQiTable: function() {
                                return this._p.jieQi
                            },
                            getJieQiList: function() {
                                return this._p.jieQiList
                            },
                            getNextJie: function(e) {
                                for (var t = [], n = 0, r = R.JIE_QI_IN_USE.length / 2; n < r; n++) t.push(R.JIE_QI_IN_USE[2 * n]);
                                return this._getNearJieQi(!0, t, e)
                            },
                            getPrevJie: function(e) {
                                for (var t = [], n = 0, r = R.JIE_QI_IN_USE.length / 2; n < r; n++) t.push(R.JIE_QI_IN_USE[2 * n]);
                                return this._getNearJieQi(!1, t, e)
                            },
                            getNextQi: function(e) {
                                for (var t = [], n = 0, r = R.JIE_QI_IN_USE.length / 2; n < r; n++) t.push(R.JIE_QI_IN_USE[2 * n + 1]);
                                return this._getNearJieQi(!0, t, e)
                            },
                            getPrevQi: function(e) {
                                for (var t = [], n = 0, r = R.JIE_QI_IN_USE.length / 2; n < r; n++) t.push(R.JIE_QI_IN_USE[2 * n + 1]);
                                return this._getNearJieQi(!1, t, e)
                            },
                            getNextJieQi: function(e) {
                                return this._getNearJieQi(!0, null, e)
                            },
                            getPrevJieQi: function(e) {
                                return this._getNearJieQi(!1, null, e)
                            },
                            _buildJieQi: function(e, t) {
                                var n, r, a = !1,
                                    i = !1;
                                for (n = 0, r = R.JIE_QI.length; n < r; n++)
                                    if (R.JIE_QI[n] === e) {
                                        n % 2 == 0 ? i = !0 : a = !0;
                                        break
                                    } return {
                                    _p: {
                                        name: e,
                                        solar: t,
                                        jie: a,
                                        qi: i
                                    },
                                    getName: function() {
                                        return this._p.name
                                    },
                                    getSolar: function() {
                                        return this._p.solar
                                    },
                                    setName: function(e) {
                                        this._p.name = e
                                    },
                                    setSolar: function(e) {
                                        this._p.solar = e
                                    },
                                    isJie: function() {
                                        return this._p.jie
                                    },
                                    isQi: function() {
                                        return this._p.qi
                                    },
                                    toString: function() {
                                        return this.getName()
                                    }
                                }
                            },
                            _getNearJieQi: function(e, t, n) {
                                var r = null,
                                    a = null,
                                    i = {},
                                    o = !1;
                                if (null != t)
                                    for (var s = 0, l = t.length; s < l; s++) i[t[s]] = !0, o = !0;
                                var u = this._p.solar[n ? "toYmd" : "toYmdHms"]();
                                for (var c in this._p.jieQi) {
                                    var f = this._convertJieQi(c);
                                    if (!o || i[f]) {
                                        var d = this._p.jieQi[c],
                                            h = d[n ? "toYmd" : "toYmdHms"]();
                                        if (e) {
                                            if (h < u) continue;
                                            (null == a || h < a[n ? "toYmd" : "toYmdHms"]()) && (r = f, a = d)
                                        } else {
                                            if (h > u) continue;
                                            (null == a || h > a[n ? "toYmd" : "toYmdHms"]()) && (r = f, a = d)
                                        }
                                    }
                                }
                                return null == a ? null : this._buildJieQi(r, a)
                            },
                            getCurrentJieQi: function() {
                                for (var e in this._p.jieQi) {
                                    var t = this._p.jieQi[e];
                                    if (t.getYear() === this._p.solar.getYear() && t.getMonth() === this._p.solar.getMonth() && t.getDay() === this._p.solar.getDay()) return this._buildJieQi(this._convertJieQi(e), t)
                                }
                                return null
                            },
                            getCurrentJie: function() {
                                for (var e = 0, t = R.JIE_QI_IN_USE.length; e < t; e += 2) {
                                    var n = R.JIE_QI_IN_USE[e],
                                        r = this._p.jieQi[n];
                                    if (r.getYear() === this._p.solar.getYear() && r.getMonth() === this._p.solar.getMonth() && r.getDay() === this._p.solar.getDay()) return this._buildJieQi(this._convertJieQi(n), r)
                                }
                                return null
                            },
                            getCurrentQi: function() {
                                for (var e = 1, t = R.JIE_QI_IN_USE.length; e < t; e += 2) {
                                    var n = R.JIE_QI_IN_USE[e],
                                        r = this._p.jieQi[n];
                                    if (r.getYear() === this._p.solar.getYear() && r.getMonth() === this._p.solar.getMonth() && r.getDay() === this._p.solar.getDay()) return this._buildJieQi(this._convertJieQi(n), r)
                                }
                                return null
                            },
                            getEightChar: function() {
                                return this._p.eightChar || (this._p.eightChar = q.fromLunar(this)), this._p.eightChar
                            },
                            next: function(e) {
                                return this._p.solar.next(e).getLunar()
                            },
                            getYearXun: function() {
                                return J.getXun(this.getYearInGanZhi())
                            },
                            getMonthXun: function() {
                                return J.getXun(this.getMonthInGanZhi())
                            },
                            getDayXun: function() {
                                return J.getXun(this.getDayInGanZhi())
                            },
                            getTimeXun: function() {
                                return J.getXun(this.getTimeInGanZhi())
                            },
                            getYearXunByLiChun: function() {
                                return J.getXun(this.getYearInGanZhiByLiChun())
                            },
                            getYearXunExact: function() {
                                return J.getXun(this.getYearInGanZhiExact())
                            },
                            getMonthXunExact: function() {
                                return J.getXun(this.getMonthInGanZhiExact())
                            },
                            getDayXunExact: function() {
                                return J.getXun(this.getDayInGanZhiExact())
                            },
                            getDayXunExact2: function() {
                                return J.getXun(this.getDayInGanZhiExact2())
                            },
                            getYearXunKong: function() {
                                return J.getXunKong(this.getYearInGanZhi())
                            },
                            getMonthXunKong: function() {
                                return J.getXunKong(this.getMonthInGanZhi())
                            },
                            getDayXunKong: function() {
                                return J.getXunKong(this.getDayInGanZhi())
                            },
                            getTimeXunKong: function() {
                                return J.getXunKong(this.getTimeInGanZhi())
                            },
                            getYearXunKongByLiChun: function() {
                                return J.getXunKong(this.getYearInGanZhiByLiChun())
                            },
                            getYearXunKongExact: function() {
                                return J.getXunKong(this.getYearInGanZhiExact())
                            },
                            getMonthXunKongExact: function() {
                                return J.getXunKong(this.getMonthInGanZhiExact())
                            },
                            getDayXunKongExact: function() {
                                return J.getXunKong(this.getDayInGanZhiExact())
                            },
                            getDayXunKongExact2: function() {
                                return J.getXunKong(this.getDayInGanZhiExact2())
                            },
                            toString: function() {
                                return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese()
                            },
                            toFullString: function() {
                                var e = this.toString();
                                e += " " + this.getYearInGanZhi() + "(" + this.getYearShengXiao() + ")年", e += " " + this.getMonthInGanZhi() + "(" + this.getMonthShengXiao() + ")月", e += " " + this.getDayInGanZhi() + "(" + this.getDayShengXiao() + ")日", e += " " + this.getTimeZhi() + "(" + this.getTimeShengXiao() + ")时", e += " 纳音[" + this.getYearNaYin() + " " + this.getMonthNaYin() + " " + this.getDayNaYin() + " " + this.getTimeNaYin() + "]", e += " 星期" + this.getWeekInChinese();
                                var t, n, r = this.getFestivals();
                                for (t = 0, n = r.length; t < n; t++) e += " (" + r[t] + ")";
                                for (t = 0, n = (r = this.getOtherFestivals()).length; t < n; t++) e += " (" + r[t] + ")";
                                var a = this.getJieQi();
                                return a.length > 0 && (e += " [" + a + "]"), e += " " + this.getGong() + "方" + this.getShou(), e += " 星宿[" + this.getXiu() + this.getZheng() + this.getAnimal() + "](" + this.getXiuLuck() + ")", e += " 彭祖百忌[" + this.getPengZuGan() + " " + this.getPengZuZhi() + "]", e += " 喜神方位[" + this.getDayPositionXi() + "](" + this.getDayPositionXiDesc() + ")", e += " 阳贵神方位[" + this.getDayPositionYangGui() + "](" + this.getDayPositionYangGuiDesc() + ")", e += " 阴贵神方位[" + this.getDayPositionYinGui() + "](" + this.getDayPositionYinGuiDesc() + ")", e += " 福神方位[" + this.getDayPositionFu() + "](" + this.getDayPositionFuDesc() + ")", e += " 财神方位[" + this.getDayPositionCai() + "](" + this.getDayPositionCaiDesc() + ")", e += " 冲[" + this.getDayChongDesc() + "]", e += " 煞[" + this.getDaySha() + "]"
                            },
                            _buildNameAndIndex: function(e, t) {
                                return {
                                    _p: {
                                        name: e,
                                        index: t
                                    },
                                    getName: function() {
                                        return this._p.name
                                    },
                                    setName: function(e) {
                                        this._p.name = e
                                    },
                                    getIndex: function() {
                                        return this._p.index
                                    },
                                    setIndex: function(e) {
                                        this._p.index = e
                                    },
                                    toString: function() {
                                        return this.getName()
                                    },
                                    toFullString: function() {
                                        return this.getName() + "第" + this.getIndex() + "天"
                                    }
                                }
                            },
                            getShuJiu: function() {
                                var e = Y.fromYmd(this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    t = this._p.jieQi.DONG_ZHI,
                                    n = Y.fromYmd(t.getYear(), t.getMonth(), t.getDay());
                                e < n && (t = this._p.jieQi["冬至"], n = Y.fromYmd(t.getYear(), t.getMonth(), t.getDay()));
                                var r = Y.fromYmd(t.getYear(), t.getMonth(), t.getDay());
                                if (r.setDate(r.getDate() + 81), e < n || e >= r) return null;
                                var a = Y.getDaysBetween(n, e);
                                return this._buildNameAndIndex(J.NUMBER[Math.floor(a / 9) + 1] + "九", a % 9 + 1)
                            },
                            getFu: function() {
                                var e = Y.fromYmd(this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    t = this._p.jieQi["夏至"],
                                    n = this._p.jieQi["立秋"],
                                    r = Y.fromYmd(t.getYear(), t.getMonth(), t.getDay()),
                                    a = 6 - t.getLunar().getDayGanIndex();
                                if (a < 0 && (a += 10), a += 20, r.setDate(r.getDate() + a), e < r) return null;
                                var i = Y.getDaysBetween(r, e);
                                if (i < 10) return this._buildNameAndIndex("初伏", i + 1);
                                if (r.setDate(r.getDate() + 10), (i = Y.getDaysBetween(r, e)) < 10) return this._buildNameAndIndex("中伏", i + 1);
                                r.setDate(r.getDate() + 10);
                                var o = Y.fromYmd(n.getYear(), n.getMonth(), n.getDay());
                                if (i = Y.getDaysBetween(r, e), o <= r) {
                                    if (i < 10) return this._buildNameAndIndex("末伏", i + 1)
                                } else {
                                    if (i < 10) return this._buildNameAndIndex("中伏", i + 11);
                                    if (r.setDate(r.getDate() + 10), (i = Y.getDaysBetween(r, e)) < 10) return this._buildNameAndIndex("末伏", i + 1)
                                }
                                return null
                            },
                            getLiuYao: function() {
                                return J.LIU_YAO[(Math.abs(this._p.month) + this._p.day - 2) % 6]
                            },
                            getWuHou: function() {
                                for (var e = this.getPrevJieQi(!0), t = e.getName(), n = 0, r = 0, a = R.JIE_QI.length; r < a; r++)
                                    if (t === R.JIE_QI[r]) {
                                        n = r;
                                        break
                                    } var i = Y.fromYmd(this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    o = e.getSolar(),
                                    s = Y.fromYmd(o.getYear(), o.getMonth(), o.getDay()),
                                    l = Y.getDaysBetween(s, i);
                                return J.WU_HOU[(3 * n + Math.floor(l / 5)) % J.WU_HOU.length]
                            },
                            getHou: function() {
                                var e = this.getPrevJieQi(!0),
                                    t = e.getName(),
                                    n = e.getSolar(),
                                    r = Y.getDaysBetweenYmd(n.getYear(), n.getMonth(), n.getDay(), this._p.solar.getYear(), this._p.solar.getMonth(), this._p.solar.getDay()),
                                    a = J.HOU.length - 1,
                                    i = Math.floor(r / 5);
                                return i > a && (i = a), t + " " + J.HOU[i]
                            },
                            getDayLu: function() {
                                var e = J.LU[this.getDayGan()],
                                    t = J.LU[this.getDayZhi()],
                                    n = e + "命互禄";
                                return t && (n += " " + t + "命进禄"), n
                            },
                            getTimes: function() {
                                var e = [];
                                e.push(ee.fromYmdHms(this._p.year, this._p.month, this._p.day, 0, 0, 0));
                                for (var t = 0; t < 12; t++) e.push(ee.fromYmdHms(this._p.year, this._p.month, this._p.day, 2 * (t + 1) - 1, 0, 0));
                                return e
                            },
                            getFoto: function() {
                                return ne.fromLunar(this)
                            },
                            getTao: function() {
                                return ie.fromLunar(this)
                            }
                        }
                    };
                return {
                    JIE_QI: ["冬至", "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪"],
                    JIE_QI_IN_USE: ["DA_XUE", "冬至", "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "DONG_ZHI", "XIAO_HAN", "DA_HAN", "LI_CHUN", "YU_SHUI", "JING_ZHE"],
                    fromYmdHms: function(e, n, r, a, i, o) {
                        return t(e, n, r, a, i, o)
                    },
                    fromYmd: function(e, n, r) {
                        return t(e, n, r, 0, 0, 0)
                    },
                    fromDate: function(e) {
                        return function(e) {
                            for (var t = e.getFullYear(), r = e.getMonth() + 1, a = e.getDate(), i = 0, o = 0, s = 0, l = X.fromYear(t), u = l.getMonths(), c = 0, f = u.length; c < f; c++) {
                                var d = u[c],
                                    h = G.fromJulianDay(d.getFirstJulianDay()),
                                    g = Y.getDaysBetweenYmd(h.getYear(), h.getMonth(), h.getDay(), t, r, a);
                                if (g < d.getDayCount()) {
                                    i = d.getYear(), o = d.getMonth(), s = g + 1;
                                    break
                                }
                            }
                            return n(i, o, s, e.getHours(), e.getMinutes(), e.getSeconds(), G.fromDate(e), l)
                        }(e)
                    }
                }
            }(),
            H = function() {
                var e = function(e, n) {
                        return t(e.getFullYear(), e.getMonth() + 1, e.getDate(), n)
                    },
                    t = function(n, r, a, i) {
                        return {
                            _p: {
                                year: n,
                                month: r,
                                day: a,
                                start: i,
                                calendar: Y.fromYmd(n, r, a)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getDay: function() {
                                return this._p.day
                            },
                            getStart: function() {
                                return this._p.start
                            },
                            getIndex: function() {
                                var e = Y.fromYmd(this._p.year, this._p.month, 1).getDay() - this._p.start;
                                return e < 0 && (e += 7), Math.ceil((this._p.day + e) / 7)
                            },
                            getIndexInYear: function() {
                                var e = Y.fromYmd(this._p.year, 1, 1).getDay() - this._p.start;
                                return e < 0 && (e += 7), Math.ceil(($.getDaysInYear(this._p.year, this._p.month, this._p.day) + e) / 7)
                            },
                            next: function(n, r) {
                                if (0 === n) return t(this._p.year, this._p.month, this._p.day, this._p.start);
                                var a;
                                if (r) {
                                    var i = n;
                                    a = Y.fromYmd(this._p.year, this._p.month, this._p.day);
                                    for (var o = e(a, this._p.start), s = this._p.month, l = i > 0; 0 !== i;) {
                                        a.setDate(a.getDate() + (l ? 7 : -7));
                                        var u = (o = e(a, this._p.start)).getMonth();
                                        if (s !== u) {
                                            var c = o.getIndex();
                                            if (l)
                                                if (1 === c) {
                                                    var f = o.getFirstDay();
                                                    u = (o = t(f.getYear(), f.getMonth(), f.getDay(), this._p.start)).getMonth()
                                                } else a = Y.fromYmd(o.getYear(), o.getMonth(), 1), o = e(a, this._p.start);
                                            else if ($.getWeeksOfMonth(o.getYear(), o.getMonth(), this._p.start) === c) {
                                                var d = o.getFirstDay().next(6);
                                                u = (o = t(d.getYear(), d.getMonth(), d.getDay(), this._p.start)).getMonth()
                                            } else a = Y.fromYmd(o.getYear(), o.getMonth(), $.getDaysOfMonth(o.getYear(), o.getMonth())), o = e(a, this._p.start);
                                            s = u
                                        }
                                        i -= l ? 1 : -1
                                    }
                                    return o
                                }
                                return (a = Y.fromYmd(this._p.year, this._p.month, this._p.day)).setDate(a.getDate() + 7 * n), e(a, this._p.start)
                            },
                            getFirstDay: function() {
                                var e = Y.fromYmd(this._p.year, this._p.month, this._p.day),
                                    t = e.getDay() - this._p.start;
                                return t < 0 && (t += 7), e.setDate(e.getDate() - t), G.fromDate(e)
                            },
                            getFirstDayInMonth: function() {
                                for (var e = 0, t = this.getDays(), n = 0; n < t.length; n++)
                                    if (this._p.month === t[n].getMonth()) {
                                        e = n;
                                        break
                                    } return t[e]
                            },
                            getDays: function() {
                                var e = this.getFirstDay(),
                                    t = [];
                                t.push(e);
                                for (var n = 1; n < 7; n++) t.push(e.next(n));
                                return t
                            },
                            getDaysInMonth: function() {
                                for (var e = this.getDays(), t = [], n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    this._p.month === r.getMonth() && t.push(r)
                                }
                                return t
                            },
                            toString: function() {
                                return this.getYear() + "." + this.getMonth() + "." + this.getIndex()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + this.getMonth() + "月第" + this.getIndex() + "周"
                            }
                        }
                    };
                return {
                    fromYmd: function(e, n, r, a) {
                        return t(e, n, r, a)
                    },
                    fromDate: function(t, n) {
                        return e(t, n)
                    }
                }
            }(),
            Z = function() {
                var e = function(e) {
                        return t(e.getFullYear(), e.getMonth() + 1)
                    },
                    t = function(t, n) {
                        return {
                            _p: {
                                year: t,
                                month: n,
                                calendar: Y.fromYmd(t, n, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            next: function(t) {
                                var n = Y.fromYmd(this._p.year, this._p.month, 1);
                                return n.setMonth(n.getMonth() + t), e(n)
                            },
                            getDays: function() {
                                var e = [],
                                    t = G.fromYmd(this._p.year, this._p.month, 1);
                                e.push(t);
                                for (var n = $.getDaysOfMonth(this._p.year, this._p.month), r = 1; r < n; r++) e.push(t.next(r));
                                return e
                            },
                            getWeeks: function(e) {
                                for (var t = [], n = $.getWeeksOfMonth(this._p.year, this._p.month, e), r = 0; r < n; r++) t.push(H.fromYmd(this._p.year, this._p.month, 1 + 7 * r, e));
                                return t
                            },
                            toString: function() {
                                return this.getYear() + "-" + this.getMonth()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + this.getMonth() + "月"
                            }
                        }
                    };
                return {
                    fromYm: function(e, n) {
                        return t(e, n)
                    },
                    fromDate: function(t) {
                        return e(t)
                    }
                }
            }(),
            j = function() {
                var e = function(e) {
                        return t(e.getFullYear(), e.getMonth() + 1)
                    },
                    t = function(n, r) {
                        return {
                            _p: {
                                year: n,
                                month: r,
                                calendar: Y.fromYmd(n, r, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getIndex: function() {
                                return Math.ceil(this._p.month / 3)
                            },
                            next: function(n) {
                                if (0 === n) return t(this._p.year, this._p.month);
                                var r = Y.fromYmd(this._p.year, this._p.month, 1);
                                return r.setMonth(r.getMonth() + 3 * n), e(r)
                            },
                            getMonths: function() {
                                for (var e = [], t = this.getIndex() - 1, n = 0; n < 3; n++) e.push(Z.fromYm(this._p.year, 3 * t + n + 1));
                                return e
                            },
                            toString: function() {
                                return this.getYear() + "." + this.getIndex()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + this.getIndex() + "季度"
                            }
                        }
                    };
                return {
                    fromYm: function(e, n) {
                        return t(e, n)
                    },
                    fromDate: function(t) {
                        return e(t)
                    }
                }
            }(),
            z = function() {
                var e = function(e) {
                        return t(e.getFullYear(), e.getMonth() + 1)
                    },
                    t = function(n, r) {
                        return {
                            _p: {
                                year: n,
                                month: r,
                                calendar: Y.fromYmd(n, r, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getIndex: function() {
                                return Math.ceil(this._p.month / 6)
                            },
                            next: function(n) {
                                if (0 === n) return t(this._p.year, this._p.month);
                                var r = Y.fromYmd(this._p.year, this._p.month, 1);
                                return r.setMonth(r.getMonth() + 6 * n), e(r)
                            },
                            getMonths: function() {
                                for (var e = [], t = this.getIndex() - 1, n = 0; n < 6; n++) e.push(Z.fromYm(this._p.year, 6 * t + n + 1));
                                return e
                            },
                            toString: function() {
                                return this.getYear() + "." + this.getIndex()
                            },
                            toFullString: function() {
                                return this.getYear() + "年" + ["上", "下"][this.getIndex() - 1] + "半年"
                            }
                        }
                    };
                return {
                    fromYm: function(e, n) {
                        return t(e, n)
                    },
                    fromDate: function(t) {
                        return e(t)
                    }
                }
            }(),
            U = function() {
                var e = function(e) {
                        return t(e.getFullYear())
                    },
                    t = function(t) {
                        return {
                            _p: {
                                year: t,
                                calendar: Y.fromYmd(t, 1, 1)
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            next: function(t) {
                                var n = Y.fromYmd(this._p.year, 1, 1);
                                return n.setFullYear(n.getFullYear() + t), e(n)
                            },
                            getMonths: function() {
                                var e = [],
                                    t = Z.fromYm(this._p.year, 1);
                                e.push(t);
                                for (var n = 1; n < 12; n++) e.push(t.next(n));
                                return e
                            },
                            toString: function() {
                                return this.getYear() + ""
                            },
                            toFullString: function() {
                                return this.getYear() + "年"
                            }
                        }
                    };
                return {
                    fromYear: function(e) {
                        return t(e)
                    },
                    fromDate: function(t) {
                        return e(t)
                    }
                }
            }(),
            X = function() {
                var e = ["下", "上", "中"],
                    t = ["七", "八", "九", "一", "二", "三", "四", "五", "六"],
                    n = [75, 94, 170, 238, 265, 322, 389, 469, 553, 583, 610, 678, 735, 754, 773, 849, 887, 936, 1050, 1069, 1126, 1145, 1164, 1183, 1259, 1278, 1308, 1373, 1403, 1441, 1460, 1498, 1555, 1593, 1612, 1631, 1642, 2033, 2128, 2147, 2242, 2614, 2728, 2910, 3062, 3244, 3339, 3616, 3711, 3730, 3825, 4007, 4159, 4197, 4322, 4341, 4379, 4417, 4531, 4599, 4694, 4713, 4789, 4808, 4971, 5085, 5104, 5161, 5180, 5199, 5294, 5305, 5476, 5677, 5696, 5772, 5791, 5848, 5886, 6049, 6068, 6144, 6163, 6258, 6402, 6440, 6497, 6516, 6630, 6641, 6660, 6679, 6736, 6774, 6850, 6869, 6899, 6918, 6994, 7013, 7032, 7051, 7070, 7089, 7108, 7127, 7146, 7222, 7271, 7290, 7309, 7366, 7385, 7404, 7442, 7461, 7480, 7491, 7499, 7594, 7624, 7643, 7662, 7681, 7719, 7738, 7814, 7863, 7882, 7901, 7939, 7958, 7977, 7996, 8034, 8053, 8072, 8091, 8121, 8159, 8186, 8216, 8235, 8254, 8273, 8311, 8330, 8341, 8349, 8368, 8444, 8463, 8474, 8493, 8531, 8569, 8588, 8626, 8664, 8683, 8694, 8702, 8713, 8721, 8751, 8789, 8808, 8816, 8827, 8846, 8884, 8903, 8922, 8941, 8971, 9036, 9066, 9085, 9104, 9123, 9142, 9161, 9180, 9199, 9218, 9256, 9294, 9313, 9324, 9343, 9362, 9381, 9419, 9438, 9476, 9514, 9533, 9544, 9552, 9563, 9571, 9582, 9601, 9639, 9658, 9666, 9677, 9696, 9734, 9753, 9772, 9791, 9802, 9821, 9886, 9897, 9916, 9935, 9954, 9973, 9992],
                    r = [37, 56, 113, 132, 151, 189, 208, 227, 246, 284, 303, 341, 360, 379, 417, 436, 458, 477, 496, 515, 534, 572, 591, 629, 648, 667, 697, 716, 792, 811, 830, 868, 906, 925, 944, 963, 982, 1001, 1020, 1039, 1058, 1088, 1153, 1202, 1221, 1240, 1297, 1335, 1392, 1411, 1422, 1430, 1517, 1525, 1536, 1574, 3358, 3472, 3806, 3988, 4751, 4941, 5066, 5123, 5275, 5343, 5438, 5457, 5495, 5533, 5552, 5715, 5810, 5829, 5905, 5924, 6421, 6535, 6793, 6812, 6888, 6907, 7002, 7184, 7260, 7279, 7374, 7556, 7746, 7757, 7776, 7833, 7852, 7871, 7966, 8015, 8110, 8129, 8148, 8224, 8243, 8338, 8406, 8425, 8482, 8501, 8520, 8558, 8596, 8607, 8615, 8645, 8740, 8778, 8835, 8865, 8930, 8960, 8979, 8998, 9017, 9055, 9074, 9093, 9112, 9150, 9188, 9237, 9275, 9332, 9351, 9370, 9408, 9427, 9446, 9457, 9465, 9495, 9560, 9590, 9628, 9647, 9685, 9715, 9742, 9780, 9810, 9818, 9829, 9848, 9867, 9905, 9924, 9943, 9962, 1e4],
                    a = {},
                    i = {};
                ! function() {
                    var e, t;
                    for (e = 0, t = n.length; e < t; e++) a["_" + n[e]] = 13;
                    for (e = 0, t = r.length; e < t; e++) a["_" + r[e]] = 14
                }();
                var o = function(n) {
                    var r = "_" + n,
                        o = i[r];
                    return o || (o = function(n) {
                        var r, i, o, s = ((i = (r = n - 4) % 10) < 0 && (i += 10), (o = r % 12) < 0 && (o += 12), {
                            ganIndex: i,
                            zhiIndex: o
                        });
                        return {
                            _p: {
                                year: n,
                                ganIndex: s.ganIndex,
                                zhiIndex: s.zhiIndex,
                                months: [],
                                jieQiJulianDays: []
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getGanIndex: function() {
                                return this._p.ganIndex
                            },
                            getZhiIndex: function() {
                                return this._p.zhiIndex
                            },
                            getGan: function() {
                                return J.GAN[this._p.ganIndex + 1]
                            },
                            getZhi: function() {
                                return J.ZHI[this._p.zhiIndex + 1]
                            },
                            getGanZhi: function() {
                                return this.getGan() + this.getZhi()
                            },
                            getJieQiJulianDays: function() {
                                return this._p.jieQiJulianDays
                            },
                            getMonths: function() {
                                return this._p.months
                            },
                            getMonth: function(e) {
                                for (var t = 0, n = this._p.months.length; t < n; t++) {
                                    var r = this._p.months[t];
                                    if (r.getYear() === this._p.year && r.getMonth() === e) return r
                                }
                                return null
                            },
                            getLeapMonth: function() {
                                for (var e = 0, t = this._p.months.length; e < t; e++) {
                                    var n = this._p.months[e];
                                    if (n.getYear() === this._p.year && n.isLeap()) return Math.abs(n.getMonth())
                                }
                                return 0
                            },
                            _getZaoByGan: function(e, t) {
                                var n = e - G.fromJulianDay(this.getMonth(1).getFirstJulianDay()).getLunar().getDayGanIndex();
                                return n < 0 && (n += 10), t.replace("几", J.NUMBER[n + 1])
                            },
                            _getZaoByZhi: function(e, t) {
                                var n = e - G.fromJulianDay(this.getMonth(1).getFirstJulianDay()).getLunar().getDayZhiIndex();
                                return n < 0 && (n += 12), t.replace("几", J.NUMBER[n + 1])
                            },
                            getTouLiang: function() {
                                return this._getZaoByZhi(0, "几鼠偷粮")
                            },
                            getCaoZi: function() {
                                return this._getZaoByZhi(0, "草子几分")
                            },
                            getGengTian: function() {
                                return this._getZaoByZhi(1, "几牛耕田")
                            },
                            getHuaShou: function() {
                                return this._getZaoByZhi(3, "花收几分")
                            },
                            getZhiShui: function() {
                                return this._getZaoByZhi(4, "几龙治水")
                            },
                            getTuoGu: function() {
                                return this._getZaoByZhi(6, "几马驮谷")
                            },
                            getQiangMi: function() {
                                return this._getZaoByZhi(9, "几鸡抢米")
                            },
                            getKanCan: function() {
                                return this._getZaoByZhi(9, "几姑看蚕")
                            },
                            getGongZhu: function() {
                                return this._getZaoByZhi(11, "几屠共猪")
                            },
                            getJiaTian: function() {
                                return this._getZaoByGan(0, "甲田几分")
                            },
                            getFenBing: function() {
                                return this._getZaoByGan(2, "几人分饼")
                            },
                            getDeJin: function() {
                                return this._getZaoByGan(7, "几日得金")
                            },
                            getRenBing: function() {
                                return this._getZaoByGan(2, this._getZaoByZhi(2, "几人几丙"))
                            },
                            getRenChu: function() {
                                return this._getZaoByGan(3, this._getZaoByZhi(2, "几人几锄"))
                            },
                            getYuan: function() {
                                return e[Math.floor((this._p.year + 2696) / 60) % 3] + "元"
                            },
                            getYun: function() {
                                return t[Math.floor((this._p.year + 2696) / 20) % 9] + "运"
                            },
                            getNineStar: function() {
                                var e = J.getJiaZiIndex(this.getGanZhi()) + 1,
                                    t = (62 + Math.floor((this._p.year + 2696) / 60) % 3 * 3 - e) % 9;
                                return 0 === t && (t = 9), Q.fromIndex(t - 1)
                            },
                            getPositionXi: function() {
                                return J.POSITION_XI[this._p.ganIndex + 1]
                            },
                            getPositionXiDesc: function() {
                                return J.POSITION_DESC[this.getPositionXi()]
                            },
                            getPositionYangGui: function() {
                                return J.POSITION_YANG_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYangGuiDesc: function() {
                                return J.POSITION_DESC[this.getPositionYangGui()]
                            },
                            getPositionYinGui: function() {
                                return J.POSITION_YIN_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYinGuiDesc: function() {
                                return J.POSITION_DESC[this.getPositionYinGui()]
                            },
                            getPositionFu: function(e) {
                                return (1 === e ? J.POSITION_FU : J.POSITION_FU_2)[this._p.ganIndex + 1]
                            },
                            getPositionFuDesc: function(e) {
                                return J.POSITION_DESC[this.getPositionFu(e)]
                            },
                            getPositionCai: function() {
                                return J.POSITION_CAI[this._p.ganIndex + 1]
                            },
                            getPositionCaiDesc: function() {
                                return J.POSITION_DESC[this.getPositionCai()]
                            },
                            getPositionTaiSui: function() {
                                return J.POSITION_TAI_SUI_YEAR[this._p.zhiIndex]
                            },
                            getPositionTaiSuiDesc: function() {
                                return J.POSITION_DESC[this.getPositionTaiSui()]
                            },
                            toString: function() {
                                return this.getYear() + ""
                            },
                            toFullString: function() {
                                return this.getYear() + "年"
                            },
                            next: function(e) {
                                return X.fromYear(this._p.year + e)
                            },
                            _compute: function() {
                                this._p.months = [], this._p.jieQiJulianDays = [];
                                var e, t, n = [],
                                    r = [],
                                    i = [],
                                    o = this._p.year,
                                    s = o - 2e3;
                                for (e = 0, t = R.JIE_QI_IN_USE.length; e < t; e++) {
                                    var l = 36525 * W.saLonT((s + 15 * (17 + e) / 360) * W.PI_2);
                                    l += W.ONE_THIRD - W.dtT(l), this._p.jieQiJulianDays.push(l + G.J2000), e > 0 && e < 26 && (n[e - 1] = Math.round(l))
                                }
                                var u = W.calcShuo(n[0]);
                                for (u > n[0] && (u -= 29.5306), e = 0; e < 16; e++) r.push(W.calcShuo(u + 29.5306 * e));
                                for (e = 0; e < 15; e++) i.push(Math.floor(r[e + 1] - r[e]));
                                var c = a["_" + o];
                                if (!c && (c = -1, r[13] <= n[24])) {
                                    for (e = 1; r[e + 1] > n[2 * e] && e < 13;) e++;
                                    c = e
                                }
                                var f = o - 1,
                                    d = a["_" + f];
                                d = d ? d - 12 : -1;
                                var h = this._p.year - 1,
                                    g = 11;
                                for (e = 0, t = i.length; e < t; e++) {
                                    var p = g,
                                        m = !1;
                                    (h === o && e === c || h === f && e === d) && (p = -p), (h === o && e + 1 === c || h === f && e + 1 === d) && (m = !0), this._p.months.push(V._(h, p, i[e], r[e] + G.J2000)), m || g++, 13 === g && (g = 1, h++)
                                }
                                return this
                            }
                        }._compute()
                    }(n), i[r] = o), o
                };
                return {
                    fromYear: function(e) {
                        return o(e)
                    }
                }
            }(),
            V = {
                fromYm: function(e, t) {
                    return function(e, t) {
                        return X.fromYear(e).getMonth(t)
                    }(e, t)
                },
                _: function(e, t, n, r) {
                    return function(e, t, n, r) {
                        return {
                            _p: {
                                year: e,
                                month: t,
                                dayCount: n,
                                firstJulianDay: r
                            },
                            getYear: function() {
                                return this._p.year
                            },
                            getMonth: function() {
                                return this._p.month
                            },
                            getDayCount: function() {
                                return this._p.dayCount
                            },
                            getFirstJulianDay: function() {
                                return this._p.firstJulianDay
                            },
                            isLeap: function() {
                                return this._p.month < 0
                            },
                            getPositionTaiSui: function() {
                                var e = "";
                                switch (Math.abs(this._p.month)) {
                                    case 1:
                                    case 5:
                                    case 9:
                                        e = "艮";
                                        break;
                                    case 3:
                                    case 7:
                                    case 11:
                                        e = "坤";
                                        break;
                                    case 4:
                                    case 8:
                                    case 12:
                                        e = "巽";
                                        break;
                                    default:
                                        e = J.POSITION_GAN[G.fromJulianDay(this.getFirstJulianDay()).getLunar().getMonthGanIndex()]
                                }
                                return e
                            },
                            getPositionTaiSuiDesc: function() {
                                return J.POSITION_DESC[this.getPositionTaiSui()]
                            },
                            getNineStar: function() {
                                var e = X.fromYear(this._p.year).getZhiIndex() % 3,
                                    t = this._p.month;
                                t < 0 && (t = -t);
                                var n = (13 + t) % 12,
                                    r = 27 - 3 * e;
                                n < J.BASE_MONTH_ZHI_INDEX && (r -= 3);
                                var a = (r - n) % 9;
                                return Q.fromIndex(a)
                            },
                            next: function(e) {
                                if (0 == e) return V.fromYm(this._p.year, this._p.month);
                                var t, n, r, a = Math.abs(e),
                                    i = this._p.year,
                                    o = i,
                                    s = this._p.month,
                                    l = 0,
                                    u = X.fromYear(i).getMonths();
                                if (e > 0) {
                                    for (;;) {
                                        for (r = u.length, t = 0; t < r; t++)
                                            if ((n = u[t]).getYear() === o && n.getMonth() === s) {
                                                l = t;
                                                break
                                            } var c = r - l - 1;
                                        if (a < c) break;
                                        a -= c;
                                        var f = u[r - 1];
                                        o = f.getYear(), s = f.getMonth(), i++, u = X.fromYear(i).getMonths()
                                    }
                                    return u[l + a]
                                }
                                for (;;) {
                                    for (r = u.length, t = 0; t < r; t++)
                                        if ((n = u[t]).getYear() === o && n.getMonth() === s) {
                                            l = t;
                                            break
                                        } if (a <= l) break;
                                    a -= l;
                                    var d = u[0];
                                    o = d.getYear(), s = d.getMonth(), i--, u = X.fromYear(i).getMonths()
                                }
                                return u[l - a]
                            },
                            toString: function() {
                                return this.getYear() + "年" + (this.isLeap() ? "闰" : "") + J.MONTH[Math.abs(this.getMonth())] + "月(" + this.getDayCount() + ")天"
                            }
                        }
                    }(e, t, n, r)
                }
            },
            W = {
                PI_2: 2 * Math.PI,
                ONE_THIRD: 1 / 3,
                SECOND_PER_DAY: 86400,
                SECOND_PER_RAD: 648e3 / Math.PI,
                NUT_B: [2.1824, -33.75705, 36e-6, -1720, 920, 3.5069, 1256.66393, 11e-6, -132, 57, 1.3375, 16799.4182, -51e-6, -23, 10, 4.3649, -67.5141, 72e-6, 21, -9, .04, -628.302, 0, -14, 0, 2.36, 8328.691, 0, 7, 0, 3.46, 1884.966, 0, -5, 2, 5.44, 16833.175, 0, -4, 2, 3.69, 25128.11, 0, -3, 0, 3.55, 628.362, 0, 2, 0],
                DT_AT: [-4e3, 108371.7, -13036.8, 392, 0, -500, 17201, -627.82, 16.17, -.3413, -150, 12200.6, -346.41, 5.403, -.1593, 150, 9113.8, -328.13, -1.647, .0377, 500, 5707.5, -391.41, .915, .3145, 900, 2203.4, -283.45, 13.034, -.1778, 1300, 490.1, -57.35, 2.085, -.0072, 1600, 120, -9.81, -1.532, .1403, 1700, 10.2, -.91, .51, -.037, 1800, 13.4, -.72, .202, -.0193, 1830, 7.8, -1.81, .416, -.0247, 1860, 8.3, -.13, -.406, .0292, 1880, -5.4, .32, -.183, .0173, 1900, -2.3, 2.06, .169, -.0135, 1920, 21.2, 1.69, -.304, .0167, 1940, 24.2, 1.22, -.064, .0031, 1960, 33.2, .51, .231, -.0109, 1980, 51, 1.29, -.026, .0032, 2e3, 63.87, .1, 0, 0, 2005, 64.7, .4, 0, 0, 2015, 69],
                XL0: [1e10, 20, 578, 920, 1100, 1124, 1136, 1148, 1217, 1226, 1229, 1229, 1229, 1229, 1937, 2363, 2618, 2633, 2660, 2666, 17534704567, 0, 0, 334165646, 4.669256804, 6283.075849991, 3489428, 4.6261024, 12566.1517, 349706, 2.744118, 5753.384885, 341757, 2.828866, 3.523118, 313590, 3.62767, 77713.771468, 267622, 4.418084, 7860.419392, 234269, 6.135162, 3930.209696, 132429, .742464, 11506.76977, 127317, 2.037097, 529.690965, 119917, 1.109629, 1577.343542, 99025, 5.23268, 5884.92685, 90186, 2.04505, 26.29832, 85722, 3.50849, 398.149, 77979, 1.17883, 5223.69392, 75314, 2.53339, 5507.55324, 50526, 4.58293, 18849.22755, 49238, 4.20507, 775.52261, 35666, 2.91954, .06731, 31709, 5.84902, 11790.62909, 28413, 1.89869, 796.29801, 27104, .31489, 10977.0788, 24281, .34481, 5486.77784, 20616, 4.80647, 2544.31442, 20539, 1.86948, 5573.1428, 20226, 2.45768, 6069.77675, 15552, .83306, 213.2991, 13221, 3.41118, 2942.46342, 12618, 1.08303, 20.7754, 11513, .64545, .98032, 10285, .636, 4694.00295, 10190, .97569, 15720.83878, 10172, 4.2668, 7.11355, 9921, 6.2099, 2146.1654, 9761, .681, 155.4204, 8580, 5.9832, 161000.6857, 8513, 1.2987, 6275.9623, 8471, 3.6708, 71430.6956, 7964, 1.8079, 17260.1547, 7876, 3.037, 12036.4607, 7465, 1.7551, 5088.6288, 7387, 3.5032, 3154.6871, 7355, 4.6793, 801.8209, 6963, .833, 9437.7629, 6245, 3.9776, 8827.3903, 6115, 1.8184, 7084.8968, 5696, 2.7843, 6286.599, 5612, 4.3869, 14143.4952, 5558, 3.4701, 6279.5527, 5199, .1891, 12139.5535, 5161, 1.3328, 1748.0164, 5115, .2831, 5856.4777, 4900, .4874, 1194.447, 4104, 5.3682, 8429.2413, 4094, 2.3985, 19651.0485, 3920, 6.1683, 10447.3878, 3677, 6.0413, 10213.2855, 3660, 2.5696, 1059.3819, 3595, 1.7088, 2352.8662, 3557, 1.776, 6812.7668, 3329, .5931, 17789.8456, 3041, .4429, 83996.8473, 3005, 2.7398, 1349.8674, 2535, 3.1647, 4690.4798, 2474, .2148, 3.5904, 2366, .4847, 8031.0923, 2357, 2.0653, 3340.6124, 2282, 5.222, 4705.7323, 2189, 5.5559, 553.5694, 2142, 1.4256, 16730.4637, 2109, 4.1483, 951.7184, 2030, .3713, 283.8593, 1992, 5.2221, 12168.0027, 1986, 5.7747, 6309.3742, 1912, 3.8222, 23581.2582, 1889, 5.3863, 149854.4001, 1790, 2.2149, 13367.9726, 1748, 4.5605, 135.0651, 1622, 5.9884, 11769.8537, 1508, 4.1957, 6256.7775, 1442, 4.1932, 242.7286, 1435, 3.7236, 38.0277, 1397, 4.4014, 6681.2249, 1362, 1.8893, 7632.9433, 1250, 1.1305, 5.5229, 1205, 2.6223, 955.5997, 1200, 1.0035, 632.7837, 1129, .1774, 4164.312, 1083, .3273, 103.0928, 1052, .9387, 11926.2544, 1050, 5.3591, 1592.596, 1033, 6.1998, 6438.4962, 1001, 6.0291, 5746.2713, 980, .999, 11371.705, 980, 5.244, 27511.468, 938, 2.624, 5760.498, 923, .483, 522.577, 922, 4.571, 4292.331, 905, 5.337, 6386.169, 862, 4.165, 7058.598, 841, 3.299, 7234.794, 836, 4.539, 25132.303, 813, 6.112, 4732.031, 812, 6.271, 426.598, 801, 5.821, 28.449, 787, .996, 5643.179, 776, 2.957, 23013.54, 769, 3.121, 7238.676, 758, 3.974, 11499.656, 735, 4.386, 316.392, 731, .607, 11513.883, 719, 3.998, 74.782, 706, .323, 263.084, 676, 5.911, 90955.552, 663, 3.665, 17298.182, 653, 5.791, 18073.705, 630, 4.717, 6836.645, 615, 1.458, 233141.314, 612, 1.075, 19804.827, 596, 3.321, 6283.009, 596, 2.876, 6283.143, 555, 2.452, 12352.853, 541, 5.392, 419.485, 531, .382, 31441.678, 519, 4.065, 6208.294, 513, 2.361, 10973.556, 494, 5.737, 9917.697, 450, 3.272, 11015.106, 449, 3.653, 206.186, 447, 2.064, 7079.374, 435, 4.423, 5216.58, 421, 1.906, 245.832, 413, .921, 3738.761, 402, .84, 20.355, 387, 1.826, 11856.219, 379, 2.344, 3.881, 374, 2.954, 3128.389, 370, 5.031, 536.805, 365, 1.018, 16200.773, 365, 1.083, 88860.057, 352, 5.978, 3894.182, 352, 2.056, 244287.6, 351, 3.713, 6290.189, 340, 1.106, 14712.317, 339, .978, 8635.942, 339, 3.202, 5120.601, 333, .837, 6496.375, 325, 3.479, 6133.513, 316, 5.089, 21228.392, 316, 1.328, 10873.986, 309, 3.646, 10.637, 303, 1.802, 35371.887, 296, 3.397, 9225.539, 288, 6.026, 154717.61, 281, 2.585, 14314.168, 262, 3.856, 266.607, 262, 2.579, 22483.849, 257, 1.561, 23543.231, 255, 3.949, 1990.745, 251, 3.744, 10575.407, 240, 1.161, 10984.192, 238, .106, 7.046, 236, 4.272, 6040.347, 234, 3.577, 10969.965, 211, 3.714, 65147.62, 210, .754, 13521.751, 207, 4.228, 5650.292, 202, .814, 170.673, 201, 4.629, 6037.244, 200, .381, 6172.87, 199, 3.933, 6206.81, 199, 5.197, 6262.3, 197, 1.046, 18209.33, 195, 1.07, 5230.807, 195, 4.869, 36.028, 194, 4.313, 6244.943, 192, 1.229, 709.933, 192, 5.595, 6282.096, 192, .602, 6284.056, 189, 3.744, 23.878, 188, 1.904, 15.252, 188, .867, 22003.915, 182, 3.681, 15110.466, 181, .491, 1.484, 179, 3.222, 39302.097, 179, 1.259, 12559.038, 62833196674749, 0, 0, 20605886, 2.67823456, 6283.07584999, 430343, 2.635127, 12566.1517, 42526, 1.59047, 3.52312, 11926, 5.79557, 26.29832, 10898, 2.96618, 1577.34354, 9348, 2.5921, 18849.2275, 7212, 1.1385, 529.691, 6777, 1.8747, 398.149, 6733, 4.4092, 5507.5532, 5903, 2.888, 5223.6939, 5598, 2.1747, 155.4204, 4541, .398, 796.298, 3637, .4662, 775.5226, 2896, 2.6471, 7.1135, 2084, 5.3414, .9803, 1910, 1.8463, 5486.7778, 1851, 4.9686, 213.2991, 1729, 2.9912, 6275.9623, 1623, .0322, 2544.3144, 1583, 1.4305, 2146.1654, 1462, 1.2053, 10977.0788, 1246, 2.8343, 1748.0164, 1188, 3.258, 5088.6288, 1181, 5.2738, 1194.447, 1151, 2.075, 4694.003, 1064, .7661, 553.5694, 997, 1.303, 6286.599, 972, 4.239, 1349.867, 945, 2.7, 242.729, 858, 5.645, 951.718, 758, 5.301, 2352.866, 639, 2.65, 9437.763, 610, 4.666, 4690.48, 583, 1.766, 1059.382, 531, .909, 3154.687, 522, 5.661, 71430.696, 520, 1.854, 801.821, 504, 1.425, 6438.496, 433, .241, 6812.767, 426, .774, 10447.388, 413, 5.24, 7084.897, 374, 2.001, 8031.092, 356, 2.429, 14143.495, 350, 4.8, 6279.553, 337, .888, 12036.461, 337, 3.862, 1592.596, 325, 3.4, 7632.943, 322, .616, 8429.241, 318, 3.188, 4705.732, 297, 6.07, 4292.331, 295, 1.431, 5746.271, 290, 2.325, 20.355, 275, .935, 5760.498, 270, 4.804, 7234.794, 253, 6.223, 6836.645, 228, 5.003, 17789.846, 225, 5.672, 11499.656, 215, 5.202, 11513.883, 208, 3.955, 10213.286, 208, 2.268, 522.577, 206, 2.224, 5856.478, 206, 2.55, 25132.303, 203, .91, 6256.778, 189, .532, 3340.612, 188, 4.735, 83996.847, 179, 1.474, 4164.312, 178, 3.025, 5.523, 177, 3.026, 5753.385, 159, 4.637, 3.286, 157, 6.124, 5216.58, 155, 3.077, 6681.225, 154, 4.2, 13367.973, 143, 1.191, 3894.182, 138, 3.093, 135.065, 136, 4.245, 426.598, 134, 5.765, 6040.347, 128, 3.085, 5643.179, 127, 2.092, 6290.189, 125, 3.077, 11926.254, 125, 3.445, 536.805, 114, 3.244, 12168.003, 112, 2.318, 16730.464, 111, 3.901, 11506.77, 111, 5.32, 23.878, 105, 3.75, 7860.419, 103, 2.447, 1990.745, 96, .82, 3.88, 96, 4.08, 6127.66, 91, 5.42, 206.19, 91, .42, 7079.37, 88, 5.17, 11790.63, 81, .34, 9917.7, 80, 3.89, 10973.56, 78, 2.4, 1589.07, 78, 2.58, 11371.7, 77, 3.98, 955.6, 77, 3.36, 36.03, 76, 1.3, 103.09, 75, 5.18, 10969.97, 75, 4.96, 6496.37, 73, 5.21, 38.03, 72, 2.65, 6309.37, 70, 5.61, 3738.76, 69, 2.6, 3496.03, 69, .39, 15.25, 69, 2.78, 20.78, 65, 1.13, 7058.6, 64, 4.28, 28.45, 61, 5.63, 10984.19, 60, .73, 419.48, 60, 5.28, 10575.41, 58, 5.55, 17298.18, 58, 3.19, 4732.03, 5291887, 0, 0, 871984, 1.072097, 6283.07585, 30913, .86729, 12566.1517, 2734, .053, 3.5231, 1633, 5.1883, 26.2983, 1575, 3.6846, 155.4204, 954, .757, 18849.228, 894, 2.057, 77713.771, 695, .827, 775.523, 506, 4.663, 1577.344, 406, 1.031, 7.114, 381, 3.441, 5573.143, 346, 5.141, 796.298, 317, 6.053, 5507.553, 302, 1.192, 242.729, 289, 6.117, 529.691, 271, .306, 398.149, 254, 2.28, 553.569, 237, 4.381, 5223.694, 208, 3.754, .98, 168, .902, 951.718, 153, 5.759, 1349.867, 145, 4.364, 1748.016, 134, 3.721, 1194.447, 125, 2.948, 6438.496, 122, 2.973, 2146.165, 110, 1.271, 161000.686, 104, .604, 3154.687, 100, 5.986, 6286.599, 92, 4.8, 5088.63, 89, 5.23, 7084.9, 83, 3.31, 213.3, 76, 3.42, 5486.78, 71, 6.19, 4690.48, 68, 3.43, 4694, 65, 1.6, 2544.31, 64, 1.98, 801.82, 61, 2.48, 10977.08, 50, 1.44, 6836.65, 49, 2.34, 1592.6, 46, 1.31, 4292.33, 46, 3.81, 149854.4, 43, .04, 7234.79, 40, 4.94, 7632.94, 39, 1.57, 71430.7, 38, 3.17, 6309.37, 35, .99, 6040.35, 35, .67, 1059.38, 31, 3.18, 2352.87, 31, 3.55, 8031.09, 30, 1.92, 10447.39, 30, 2.52, 6127.66, 28, 4.42, 9437.76, 28, 2.71, 3894.18, 27, .67, 25132.3, 26, 5.27, 6812.77, 25, .55, 6279.55, 23, 1.38, 4705.73, 22, .64, 6256.78, 20, 6.07, 640.88, 28923, 5.84384, 6283.07585, 3496, 0, 0, 1682, 5.4877, 12566.1517, 296, 5.196, 155.42, 129, 4.722, 3.523, 71, 5.3, 18849.23, 64, 5.97, 242.73, 40, 3.79, 553.57, 11408, 3.14159, 0, 772, 4.134, 6283.076, 77, 3.84, 12566.15, 42, .42, 155.42, 88, 3.14, 0, 17, 2.77, 6283.08, 5, 2.01, 155.42, 3, 2.21, 12566.15, 27962, 3.1987, 84334.66158, 10164, 5.42249, 5507.55324, 8045, 3.8801, 5223.6939, 4381, 3.7044, 2352.8662, 3193, 4.0003, 1577.3435, 2272, 3.9847, 1047.7473, 1814, 4.9837, 6283.0758, 1639, 3.5646, 5856.4777, 1444, 3.7028, 9437.7629, 1430, 3.4112, 10213.2855, 1125, 4.8282, 14143.4952, 1090, 2.0857, 6812.7668, 1037, 4.0566, 71092.8814, 971, 3.473, 4694.003, 915, 1.142, 6620.89, 878, 4.44, 5753.385, 837, 4.993, 7084.897, 770, 5.554, 167621.576, 719, 3.602, 529.691, 692, 4.326, 6275.962, 558, 4.41, 7860.419, 529, 2.484, 4705.732, 521, 6.25, 18073.705, 903, 3.897, 5507.553, 618, 1.73, 5223.694, 380, 5.244, 2352.866, 166, 1.627, 84334.662, 10001398880, 0, 0, 167069963, 3.098463508, 6283.075849991, 1395602, 3.0552461, 12566.1517, 308372, 5.198467, 77713.771468, 162846, 1.173877, 5753.384885, 157557, 2.846852, 7860.419392, 92480, 5.45292, 11506.76977, 54244, 4.56409, 3930.2097, 47211, 3.661, 5884.92685, 34598, .96369, 5507.55324, 32878, 5.89984, 5223.69392, 30678, .29867, 5573.1428, 24319, 4.2735, 11790.62909, 21183, 5.84715, 1577.34354, 18575, 5.02194, 10977.0788, 17484, 3.01194, 18849.22755, 10984, 5.05511, 5486.77784, 9832, .8868, 6069.7768, 8650, 5.6896, 15720.8388, 8583, 1.2708, 161000.6857, 6490, .2725, 17260.1547, 6292, .9218, 529.691, 5706, 2.0137, 83996.8473, 5574, 5.2416, 71430.6956, 4938, 3.245, 2544.3144, 4696, 2.5781, 775.5226, 4466, 5.5372, 9437.7629, 4252, 6.0111, 6275.9623, 3897, 5.3607, 4694.003, 3825, 2.3926, 8827.3903, 3749, .8295, 19651.0485, 3696, 4.9011, 12139.5535, 3566, 1.6747, 12036.4607, 3454, 1.8427, 2942.4634, 3319, .2437, 7084.8968, 3192, .1837, 5088.6288, 3185, 1.7778, 398.149, 2846, 1.2134, 6286.599, 2779, 1.8993, 6279.5527, 2628, 4.589, 10447.3878, 2460, 3.7866, 8429.2413, 2393, 4.996, 5856.4777, 2359, .2687, 796.298, 2329, 2.8078, 14143.4952, 2210, 1.95, 3154.6871, 2035, 4.6527, 2146.1654, 1951, 5.3823, 2352.8662, 1883, .6731, 149854.4001, 1833, 2.2535, 23581.2582, 1796, .1987, 6812.7668, 1731, 6.152, 16730.4637, 1717, 4.4332, 10213.2855, 1619, 5.2316, 17789.8456, 1381, 5.1896, 8031.0923, 1364, 3.6852, 4705.7323, 1314, .6529, 13367.9726, 1041, 4.3329, 11769.8537, 1017, 1.5939, 4690.4798, 998, 4.201, 6309.374, 966, 3.676, 27511.468, 874, 6.064, 1748.016, 779, 3.674, 12168.003, 771, .312, 7632.943, 756, 2.626, 6256.778, 746, 5.648, 11926.254, 693, 2.924, 6681.225, 680, 1.423, 23013.54, 674, .563, 3340.612, 663, 5.661, 11371.705, 659, 3.136, 801.821, 648, 2.65, 19804.827, 615, 3.029, 233141.314, 612, 5.134, 1194.447, 563, 4.341, 90955.552, 552, 2.091, 17298.182, 534, 5.1, 31441.678, 531, 2.407, 11499.656, 523, 4.624, 6438.496, 513, 5.324, 11513.883, 477, .256, 11856.219, 461, 1.722, 7234.794, 458, 3.766, 6386.169, 458, 4.466, 5746.271, 423, 1.055, 5760.498, 422, 1.557, 7238.676, 415, 2.599, 7058.598, 401, 3.03, 1059.382, 397, 1.201, 1349.867, 379, 4.907, 4164.312, 360, 5.707, 5643.179, 352, 3.626, 244287.6, 348, .761, 10973.556, 342, 3.001, 4292.331, 336, 4.546, 4732.031, 334, 3.138, 6836.645, 324, 4.164, 9917.697, 316, 1.691, 11015.106, 307, .238, 35371.887, 298, 1.306, 6283.143, 298, 1.75, 6283.009, 293, 5.738, 16200.773, 286, 5.928, 14712.317, 281, 3.515, 21228.392, 280, 5.663, 8635.942, 277, .513, 26.298, 268, 4.207, 18073.705, 266, .9, 12352.853, 260, 2.962, 25132.303, 255, 2.477, 6208.294, 242, 2.8, 709.933, 231, 1.054, 22483.849, 229, 1.07, 14314.168, 216, 1.314, 154717.61, 215, 6.038, 10873.986, 200, .561, 7079.374, 198, 2.614, 951.718, 197, 4.369, 167283.762, 186, 2.861, 5216.58, 183, 1.66, 39302.097, 183, 5.912, 3738.761, 175, 2.145, 6290.189, 173, 2.168, 10575.407, 171, 3.702, 1592.596, 171, 1.343, 3128.389, 164, 5.55, 6496.375, 164, 5.856, 10984.192, 161, 1.998, 10969.965, 161, 1.909, 6133.513, 157, 4.955, 25158.602, 154, 6.216, 23543.231, 153, 5.357, 13521.751, 150, 5.77, 18209.33, 150, 5.439, 155.42, 139, 1.778, 9225.539, 139, 1.626, 5120.601, 128, 2.46, 13916.019, 123, .717, 143571.324, 122, 2.654, 88860.057, 121, 4.414, 3894.182, 121, 1.192, 3.523, 120, 4.03, 553.569, 119, 1.513, 17654.781, 117, 3.117, 14945.316, 113, 2.698, 6040.347, 110, 3.085, 43232.307, 109, .998, 955.6, 108, 2.939, 17256.632, 107, 5.285, 65147.62, 103, .139, 11712.955, 103, 5.85, 213.299, 102, 3.046, 6037.244, 101, 2.842, 8662.24, 100, 3.626, 6262.3, 98, 2.36, 6206.81, 98, 5.11, 6172.87, 98, 2, 15110.47, 97, 2.67, 5650.29, 97, 2.75, 6244.94, 96, 4.02, 6282.1, 96, 5.31, 6284.06, 92, .1, 29088.81, 85, 3.26, 20426.57, 84, 2.6, 28766.92, 81, 3.58, 10177.26, 80, 5.81, 5230.81, 78, 2.53, 16496.36, 77, 4.06, 6127.66, 73, .04, 5481.25, 72, 5.96, 12559.04, 72, 5.92, 4136.91, 71, 5.49, 22003.91, 70, 3.41, 7.11, 69, .62, 11403.68, 69, 3.9, 1589.07, 69, 1.96, 12416.59, 69, 4.51, 426.6, 67, 1.61, 11087.29, 66, 4.5, 47162.52, 66, 5.08, 283.86, 66, 4.32, 16858.48, 65, 1.04, 6062.66, 64, 1.59, 18319.54, 63, 5.7, 45892.73, 63, 4.6, 66567.49, 63, 3.82, 13517.87, 62, 2.62, 11190.38, 61, 1.54, 33019.02, 60, 5.58, 10344.3, 60, 5.38, 316428.23, 60, 5.78, 632.78, 59, 6.12, 9623.69, 57, .16, 17267.27, 57, 3.86, 6076.89, 57, 1.98, 7668.64, 56, 4.78, 20199.09, 55, 4.56, 18875.53, 55, 3.51, 17253.04, 54, 3.07, 226858.24, 54, 4.83, 18422.63, 53, 5.02, 12132.44, 52, 3.63, 5333.9, 52, .97, 155427.54, 51, 3.36, 20597.24, 50, .99, 11609.86, 50, 2.21, 1990.75, 48, 1.62, 12146.67, 48, 1.17, 12569.67, 47, 4.62, 5436.99, 47, 1.81, 12562.63, 47, .59, 21954.16, 47, .76, 7342.46, 46, .27, 4590.91, 46, 3.77, 156137.48, 45, 5.66, 10454.5, 44, 5.84, 3496.03, 43, .24, 17996.03, 41, 5.93, 51092.73, 41, 4.21, 12592.45, 40, 5.14, 1551.05, 40, 5.28, 15671.08, 39, 3.69, 18052.93, 39, 4.94, 24356.78, 38, 2.72, 11933.37, 38, 5.23, 7477.52, 38, 4.99, 9779.11, 37, 3.7, 9388.01, 37, 4.44, 4535.06, 36, 2.16, 28237.23, 36, 2.54, 242.73, 36, .22, 5429.88, 35, 6.15, 19800.95, 35, 2.92, 36949.23, 34, 5.63, 2379.16, 34, 5.73, 16460.33, 34, 5.11, 5849.36, 33, 6.19, 6268.85, 10301861, 1.1074897, 6283.07584999, 172124, 1.064423, 12566.1517, 70222, 3.14159, 0, 3235, 1.0217, 18849.2275, 3080, 2.8435, 5507.5532, 2497, 1.3191, 5223.6939, 1849, 1.4243, 1577.3435, 1008, 5.9138, 10977.0788, 865, 1.42, 6275.962, 863, .271, 5486.778, 507, 1.686, 5088.629, 499, 6.014, 6286.599, 467, 5.987, 529.691, 440, .518, 4694.003, 410, 1.084, 9437.763, 387, 4.75, 2544.314, 375, 5.071, 796.298, 352, .023, 83996.847, 344, .949, 71430.696, 341, 5.412, 775.523, 322, 6.156, 2146.165, 286, 5.484, 10447.388, 284, 3.42, 2352.866, 255, 6.132, 6438.496, 252, .243, 398.149, 243, 3.092, 4690.48, 225, 3.689, 7084.897, 220, 4.952, 6812.767, 219, .42, 8031.092, 209, 1.282, 1748.016, 193, 5.314, 8429.241, 185, 1.82, 7632.943, 175, 3.229, 6279.553, 173, 1.537, 4705.732, 158, 4.097, 11499.656, 158, 5.539, 3154.687, 150, 3.633, 11513.883, 148, 3.222, 7234.794, 147, 3.653, 1194.447, 144, .817, 14143.495, 135, 6.151, 5746.271, 134, 4.644, 6836.645, 128, 2.693, 1349.867, 123, 5.65, 5760.498, 118, 2.577, 13367.973, 113, 3.357, 17789.846, 110, 4.497, 4292.331, 108, 5.828, 12036.461, 102, 5.621, 6256.778, 99, 1.14, 1059.38, 98, .66, 5856.48, 93, 2.32, 10213.29, 92, .77, 16730.46, 88, 1.5, 11926.25, 86, 1.42, 5753.38, 85, .66, 155.42, 81, 1.64, 6681.22, 80, 4.11, 951.72, 66, 4.55, 5216.58, 65, .98, 25132.3, 64, 4.19, 6040.35, 64, .52, 6290.19, 63, 1.51, 5643.18, 59, 6.18, 4164.31, 57, 2.3, 10973.56, 55, 2.32, 11506.77, 55, 2.2, 1592.6, 55, 5.27, 3340.61, 54, 5.54, 553.57, 53, 5.04, 9917.7, 53, .92, 11371.7, 52, 3.98, 17298.18, 52, 3.6, 10969.97, 49, 5.91, 3894.18, 49, 2.51, 6127.66, 48, 1.67, 12168, 46, .31, 801.82, 42, 3.7, 10575.41, 42, 4.05, 10984.19, 40, 2.17, 7860.42, 40, 4.17, 26.3, 38, 5.82, 7058.6, 37, 3.39, 6496.37, 36, 1.08, 6309.37, 36, 5.34, 7079.37, 34, 3.62, 11790.63, 32, .32, 16200.77, 31, 4.24, 3738.76, 29, 4.55, 11856.22, 29, 1.26, 8635.94, 27, 3.45, 5884.93, 26, 5.08, 10177.26, 26, 5.38, 21228.39, 24, 2.26, 11712.96, 24, 1.05, 242.73, 24, 5.59, 6069.78, 23, 3.63, 6284.06, 23, 1.64, 4732.03, 22, 3.46, 213.3, 21, 1.05, 3496.03, 21, 3.92, 13916.02, 21, 4.01, 5230.81, 20, 5.16, 12352.85, 20, .69, 1990.75, 19, 2.73, 6062.66, 19, 5.01, 11015.11, 18, 6.04, 6283.01, 18, 2.85, 7238.68, 18, 5.6, 6283.14, 18, 5.16, 17253.04, 18, 2.54, 14314.17, 17, 1.58, 7.11, 17, .98, 3930.21, 17, 4.75, 17267.27, 16, 2.19, 6076.89, 16, 2.19, 18073.7, 16, 6.12, 3.52, 16, 4.61, 9623.69, 16, 3.4, 16496.36, 15, .19, 9779.11, 15, 5.3, 13517.87, 15, 4.26, 3128.39, 15, .81, 709.93, 14, .5, 25158.6, 14, 4.38, 4136.91, 13, .98, 65147.62, 13, 3.31, 154717.61, 13, 2.11, 1589.07, 13, 1.92, 22483.85, 12, 6.03, 9225.54, 12, 1.53, 12559.04, 12, 5.82, 6282.1, 12, 5.61, 5642.2, 12, 2.38, 167283.76, 12, .39, 12132.44, 12, 3.98, 4686.89, 12, 5.81, 12569.67, 12, .56, 5849.36, 11, .45, 6172.87, 11, 5.8, 16858.48, 11, 6.22, 12146.67, 11, 2.27, 5429.88, 435939, 5.784551, 6283.07585, 12363, 5.57935, 12566.1517, 1234, 3.1416, 0, 879, 3.628, 77713.771, 569, 1.87, 5573.143, 330, 5.47, 18849.228, 147, 4.48, 5507.553, 110, 2.842, 161000.686, 101, 2.815, 5223.694, 85, 3.11, 1577.34, 65, 5.47, 775.52, 61, 1.38, 6438.5, 50, 4.42, 6286.6, 47, 3.66, 7084.9, 46, 5.39, 149854.4, 42, .9, 10977.08, 40, 3.2, 5088.63, 35, 1.81, 5486.78, 32, 5.35, 3154.69, 30, 3.52, 796.3, 29, 4.62, 4690.48, 28, 1.84, 4694, 27, 3.14, 71430.7, 27, 6.17, 6836.65, 26, 1.42, 2146.17, 25, 2.81, 1748.02, 24, 2.18, 155.42, 23, 4.76, 7234.79, 21, 3.38, 7632.94, 21, .22, 4705.73, 20, 4.22, 1349.87, 20, 2.01, 1194.45, 20, 4.58, 529.69, 19, 1.59, 6309.37, 18, 5.7, 6040.35, 18, 6.03, 4292.33, 17, 2.9, 9437.76, 17, 2, 8031.09, 17, 5.78, 83996.85, 16, .05, 2544.31, 15, .95, 6127.66, 14, .36, 10447.39, 14, 1.48, 2352.87, 13, .77, 553.57, 13, 5.48, 951.72, 13, 5.27, 6279.55, 13, 3.76, 6812.77, 11, 5.41, 6256.78, 10, .68, 1592.6, 10, 4.95, 398.15, 10, 1.15, 3894.18, 10, 5.2, 244287.6, 10, 1.94, 11856.22, 9, 5.39, 25132.3, 8, 6.18, 1059.38, 8, .69, 8429.24, 8, 5.85, 242.73, 7, 5.26, 14143.5, 7, .52, 801.82, 6, 2.24, 8635.94, 6, 4, 13367.97, 6, 2.77, 90955.55, 6, 5.17, 7058.6, 5, 1.46, 233141.31, 5, 4.13, 7860.42, 5, 3.91, 26.3, 5, 3.89, 12036.46, 5, 5.58, 6290.19, 5, 5.54, 1990.75, 5, .83, 11506.77, 5, 6.22, 6681.22, 4, 5.26, 10575.41, 4, 1.91, 7477.52, 4, .43, 10213.29, 4, 1.09, 709.93, 4, 5.09, 11015.11, 4, 4.22, 88860.06, 4, 3.57, 7079.37, 4, 1.98, 6284.06, 4, 3.93, 10973.56, 4, 6.18, 9917.7, 4, .36, 10177.26, 4, 2.75, 3738.76, 4, 3.33, 5643.18, 4, 5.36, 25158.6, 14459, 4.27319, 6283.07585, 673, 3.917, 12566.152, 77, 0, 0, 25, 3.73, 18849.23, 4, 2.8, 6286.6, 386, 2.564, 6283.076, 31, 2.27, 12566.15, 5, 3.44, 5573.14, 2, 2.05, 18849.23, 1, 2.06, 77713.77, 1, 4.41, 161000.69, 1, 3.82, 149854.4, 1, 4.08, 6127.66, 1, 5.26, 6438.5, 9, 1.22, 6283.08, 1, .66, 12566.15],
                XL1: [
                    [22639.586, .78475822, 8328.691424623, 1.5229241, 25.0719, -.123598, 4586.438, .1873974, 7214.06286536, -2.184756, -18.86, .0828, 2369.914, 2.542952, 15542.75428998, -.661832, 6.212, -.0408, 769.026, 3.140313, 16657.38284925, 3.04585, 50.144, -.2472, 666.418, 1.527671, 628.30195521, -.02664, .062, -.0054, 411.596, 4.826607, 16866.932315, -1.28012, -1.07, -.0059, 211.656, 4.115028, -1114.6285593, -3.70768, -43.93, .2064, 205.436, .230523, 6585.7609101, -2.15812, -18.92, .0882, 191.956, 4.898507, 23871.4457146, .86109, 31.28, -.164, 164.729, 2.586078, 14914.4523348, -.6352, 6.15, -.035, 147.321, 5.4553, -7700.3894694, -1.5496, -25.01, .118, 124.988, .48608, 7771.377145, -.3309, 3.11, -.02, 109.38, 3.88323, 8956.9933798, 1.4963, 25.13, -.129, 55.177, 5.57033, -1324.178025, .6183, 7.3, -.035, 45.1, .89898, 25195.62374, .2428, 24, -.129, 39.533, 3.81213, -8538.24089, 2.803, 26.1, -.118, 38.43, 4.30115, 22756.817155, -2.8466, -12.6, .042, 36.124, 5.49587, 24986.074274, 4.5688, 75.2, -.371, 30.773, 1.94559, 14428.125731, -4.3695, -37.7, .166, 28.397, 3.28586, 7842.364821, -2.2114, -18.8, .077, 24.358, 5.64142, 16171.056245, -.6885, 6.3, -.046, 18.585, 4.41371, -557.31428, -1.8538, -22, .1, 17.954, 3.58454, 8399.6791, -.3576, 3.2, -.03, 14.53, 4.9416, 23243.143759, .888, 31.2, -.16, 14.38, .9709, 32200.137139, 2.384, 56.4, -.29, 14.251, 5.7641, -2.3012, 1.523, 25.1, -.12, 13.899, .3735, 31085.50858, -1.324, 12.4, -.08, 13.194, 1.7595, -9443.319984, -5.231, -69, .33, 9.679, 3.0997, -16029.080894, -3.072, -50.1, .24, 9.366, .3016, 24080.99518, -3.465, -19.9, .08, 8.606, 4.1582, -1742.930514, -3.681, -44, .21, 8.453, 2.8416, 16100.06857, 1.192, 28.2, -.14, 8.05, 2.6292, 14286.15038, -.609, 6.1, -.03, 7.63, 6.2388, 17285.684804, 3.019, 50.2, -.25, 7.447, 1.4845, 1256.60391, -.053, .1, -.01, 7.371, .2736, 5957.458955, -2.131, -19, .09, 7.063, 5.6715, 33.757047, -.308, -3.6, .02, 6.383, 4.7843, 7004.5134, 2.141, 32.4, -.16, 5.742, 2.6572, 32409.686605, -1.942, 5, -.05, 4.374, 4.3443, 22128.5152, -2.82, -13, .05, 3.998, 3.2545, 33524.31516, 1.766, 49, -.25, 3.21, 2.2443, 14985.44001, -2.516, -16, .06, 2.915, 1.7138, 24499.74767, .834, 31, -.17, 2.732, 1.9887, 13799.82378, -4.343, -38, .17, 2.568, 5.4122, -7072.08751, -1.576, -25, .11, 2.521, 3.2427, 8470.66678, -2.238, -19, .07, 2.489, 4.0719, -486.3266, -3.734, -44, .2, 2.146, 5.6135, -1952.47998, .645, 7, -.03, 1.978, 2.7291, 39414.2, .199, 37, -.21, 1.934, 1.5682, 33314.7657, 6.092, 100, -.5, 1.871, .4166, 30457.20662, -1.297, 12, -.1, 1.753, 2.0582, -8886.0057, -3.38, -47, .2, 1.437, 2.386, -695.87607, .59, 7, 0, 1.373, 3.026, -209.54947, 4.33, 51, -.2, 1.262, 5.94, 16728.37052, 1.17, 28, -.1, 1.224, 6.172, 6656.74859, -4.04, -41, .2, 1.187, 5.873, 6099.43431, -5.89, -63, .3, 1.177, 1.014, 31571.83518, 2.41, 56, -.3, 1.162, 3.84, 9585.29534, 1.47, 25, -.1, 1.143, 5.639, 8364.73984, -2.18, -19, .1, 1.078, 1.229, 70.98768, -1.88, -22, .1, 1.059, 3.326, 40528.82856, 3.91, 81, -.4, .99, 5.013, 40738.37803, -.42, 30, -.2, .948, 5.687, -17772.01141, -6.75, -94, .5, .876, .298, -.35232, 0, 0, 0, .822, 2.994, 393.02097, 0, 0, 0, .788, 1.836, 8326.39022, 3.05, 50, -.2, .752, 4.985, 22614.8418, .91, 31, -.2, .74, 2.875, 8330.99262, 0, 0, 0, .669, .744, -24357.77232, -4.6, -75, .4, .644, 1.314, 8393.12577, -2.18, -19, .1, .639, 5.888, 575.33849, 0, 0, 0, .635, 1.116, 23385.11911, -2.87, -13, 0, .584, 5.197, 24428.75999, 2.71, 53, -.3, .583, 3.513, -9095.55517, .95, 4, 0, .572, 6.059, 29970.88002, -5.03, -32, .1, .565, 2.96, .32863, 1.52, 25, -.1, .561, 4.001, -17981.56087, -2.43, -43, .2, .557, .529, 7143.07519, -.3, 3, 0, .546, 2.311, 25614.37623, 4.54, 75, -.4, .536, 4.229, 15752.30376, -4.99, -45, .2, .493, 3.316, -8294.9344, -1.83, -29, .1, .491, 1.744, 8362.4485, 1.21, 21, -.1, .478, 1.803, -10071.6219, -5.2, -69, .3, .454, .857, 15333.2048, 3.66, 57, -.3, .445, 2.071, 8311.7707, -2.18, -19, .1, .426, .345, 23452.6932, -3.44, -20, .1, .42, 4.941, 33733.8646, -2.56, -2, 0, .413, 1.642, 17495.2343, -1.31, -1, 0, .404, 1.458, 23314.1314, -.99, 9, -.1, .395, 2.132, 38299.5714, -3.51, -6, 0, .382, 2.7, 31781.3846, -1.92, 5, 0, .375, 4.827, 6376.2114, 2.17, 32, -.2, .361, 3.867, 16833.1753, -.97, 3, 0, .358, 5.044, 15056.4277, -4.4, -38, .2, .35, 5.157, -8257.7037, -3.4, -47, .2, .344, 4.233, 157.7344, 0, 0, 0, .34, 2.672, 13657.8484, -.58, 6, 0, .329, 5.61, 41853.0066, 3.29, 74, -.4, .325, 5.895, -39.8149, 0, 0, 0, .309, 4.387, 21500.2132, -2.79, -13, .1, .302, 1.278, 786.0419, 0, 0, 0, .302, 5.341, -24567.3218, -.27, -24, .1, .301, 1.045, 5889.8848, -1.57, -12, 0, .294, 4.201, -2371.2325, -3.65, -44, .2, .293, 3.704, 21642.1886, -6.55, -57, .2, .29, 4.069, 32828.4391, 2.36, 56, -.3, .289, 3.472, 31713.8105, -1.35, 12, -.1, .285, 5.407, -33.7814, .31, 4, 0, .283, 5.998, -16.9207, -3.71, -44, .2, .283, 2.772, 38785.898, .23, 37, -.2, .274, 5.343, 15613.742, -2.54, -16, .1, .263, 3.997, 25823.9257, .22, 24, -.1, .254, .6, 24638.3095, -1.61, 2, 0, .253, 1.344, 6447.1991, .29, 10, -.1, .25, .887, 141.9754, -3.76, -44, .2, .247, .317, 5329.157, -2.1, -19, .1, .245, .141, 36.0484, -3.71, -44, .2, .231, 2.287, 14357.1381, -2.49, -16, .1, .227, 5.158, 2.6298, 0, 0, 0, .219, 5.085, 47742.8914, 1.72, 63, -.3, .211, 2.145, 6638.7244, -2.18, -19, .1, .201, 4.415, 39623.7495, -4.13, -14, 0, .194, 2.091, 588.4927, 0, 0, 0, .193, 3.057, -15400.7789, -3.1, -50, 0, .186, 5.598, 16799.3582, -.72, 6, 0, .185, 3.886, 1150.677, 0, 0, 0, .183, 1.619, 7178.0144, 1.52, 25, 0, .181, 2.635, 8328.3391, 1.52, 25, 0, .181, 2.077, 8329.0437, 1.52, 25, 0, .179, 3.215, -9652.8694, -.9, -18, 0, .176, 1.716, -8815.018, -5.26, -69, 0, .175, 5.673, 550.7553, 0, 0, 0, .17, 2.06, 31295.058, -5.6, -39, 0, .167, 1.239, 7211.7617, -.7, 6, 0, .165, 4.499, 14967.4158, -.7, 6, 0, .164, 3.595, 15540.4531, .9, 31, 0, .164, 4.237, 522.3694, 0, 0, 0, .163, 4.633, 15545.0555, -2.2, -19, 0, .161, .478, 6428.0209, -2.2, -19, 0, .158, 2.03, 13171.5218, -4.3, -38, 0, .157, 2.28, 7216.3641, -3.7, -44, 0, .154, 5.65, 7935.6705, 1.5, 25, 0, .152, .46, 29828.9047, -1.3, 12, 0, .151, 1.19, -.7113, 0, 0, 0, .15, 1.42, 23942.4334, -1, 9, 0, .144, 2.75, 7753.3529, 1.5, 25, 0, .137, 2.08, 7213.7105, -2.2, -19, 0, .137, 1.44, 7214.4152, -2.2, -19, 0, .136, 4.46, -1185.6162, -1.8, -22, 0, .136, 3.03, 8000.1048, -2.2, -19, 0, .134, 2.83, 14756.7124, -.7, 6, 0, .131, 5.05, 6821.0419, -2.2, -19, 0, .128, 5.99, -17214.6971, -4.9, -72, 0, .127, 5.35, 8721.7124, 1.5, 25, 0, .126, 4.49, 46628.2629, -2, 19, 0, .125, 5.94, 7149.6285, 1.5, 25, 0, .124, 1.09, 49067.0695, 1.1, 55, 0, .121, 2.88, 15471.7666, 1.2, 28, 0, .111, 3.92, 41643.4571, 7.6, 125, -1, .11, 1.96, 8904.0299, 1.5, 25, 0, .106, 3.3, -18.0489, -2.2, -19, 0, .105, 2.3, -4.931, 1.5, 25, 0, .104, 2.22, -6.559, -1.9, -22, 0, .101, 1.44, 1884.9059, -.1, 0, 0, .1, 5.92, 5471.1324, -5.9, -63, 0, .099, 1.12, 15149.7333, -.7, 6, 0, .096, 4.73, 15508.9972, -.4, 10, 0, .095, 5.18, 7230.9835, 1.5, 25, 0, .093, 3.37, 39900.5266, 3.9, 81, 0, .092, 2.01, 25057.0619, 2.7, 53, 0, .092, 1.21, -79.6298, 0, 0, 0, .092, 1.65, -26310.2523, -4, -68, 0, .091, 1.01, 42062.5561, -1, 23, 0, .09, 6.1, 29342.5781, -5, -32, 0, .09, 4.43, 15542.402, -.7, 6, 0, .09, 3.8, 15543.1066, -.7, 6, 0, .089, 4.15, 6063.3859, -2.2, -19, 0, .086, 4.03, 52.9691, 0, 0, 0, .085, .49, 47952.4409, -2.6, 11, 0, .085, 1.6, 7632.8154, 2.1, 32, 0, .084, .22, 14392.0773, -.7, 6, 0, .083, 6.22, 6028.4466, -4, -41, 0, .083, .63, -7909.9389, 2.8, 26, 0, .083, 5.2, -77.5523, 0, 0, 0, .082, 2.74, 8786.1467, -2.2, -19, 0, .08, 2.43, 9166.5428, -2.8, -26, 0, .08, 3.7, -25405.1732, 4.1, 27, 0, .078, 5.68, 48857.52, 5.4, 106, -1, .077, 1.85, 8315.5735, -2.2, -19, 0, .075, 5.46, -18191.1103, 1.9, 8, 0, .075, 1.41, -16238.6304, 1.3, 1, 0, .074, 5.06, 40110.0761, -.4, 30, 0, .072, 2.1, 64.4343, -3.7, -44, 0, .071, 2.17, 37671.2695, -3.5, -6, 0, .069, 1.71, 16693.4313, -.7, 6, 0, .069, 3.33, -26100.7028, -8.3, -119, 1, .068, 1.09, 8329.4028, 1.5, 25, 0, .068, 3.62, 8327.9801, 1.5, 25, 0, .068, 2.41, 16833.1509, -1, 3, 0, .067, 3.4, 24709.2971, -3.5, -20, 0, .067, 1.65, 8346.7156, -.3, 3, 0, .066, 2.61, 22547.2677, 1.5, 39, 0, .066, 3.5, 15576.5113, -1, 3, 0, .065, 5.76, 33037.9886, -2, 5, 0, .065, 4.58, 8322.1325, -.3, 3, 0, .065, 6.2, 17913.9868, 3, 50, 0, .065, 1.5, 22685.8295, -1, 9, 0, .065, 2.37, 7180.3058, -1.9, -15, 0, .064, 1.06, 30943.5332, 2.4, 56, 0, .064, 1.89, 8288.8765, 1.5, 25, 0, .064, 4.7, 6.0335, .3, 4, 0, .063, 2.83, 8368.5063, 1.5, 25, 0, .063, 5.66, -2580.7819, .7, 7, 0, .062, 3.78, 7056.3285, -2.2, -19, 0, .061, 1.49, 8294.91, 1.8, 29, 0, .061, .12, -10281.1714, -.9, -18, 0, .061, 3.06, -8362.4729, -1.2, -21, 0, .061, 4.43, 8170.9571, 1.5, 25, 0, .059, 5.78, -13.1179, -3.7, -44, 0, .059, 5.97, 6625.5702, -2.2, -19, 0, .058, 5.01, -.508, -.3, 0, 0, .058, 2.73, 7161.0938, -2.2, -19, 0, .057, .19, 7214.0629, -2.2, -19, 0, .057, 4, 22199.5029, -4.7, -35, 0, .057, 5.38, 8119.142, 5.8, 76, 0, .056, 1.07, 7542.6495, 1.5, 25, 0, .056, .28, 8486.4258, 1.5, 25, 0, .054, 4.19, 16655.0816, 4.6, 75, 0, .053, .72, 7267.032, -2.2, -19, 0, .053, 3.12, 12.6192, .6, 7, 0, .052, 2.99, -32896.013, -1.8, -49, 0, .052, 3.46, 1097.708, 0, 0, 0, .051, 5.37, -6443.786, -1.6, -25, 0, .051, 1.35, 7789.401, -2.2, -19, 0, .051, 5.83, 40042.502, .2, 38, 0, .051, 3.63, 9114.733, 1.5, 25, 0, .05, 1.51, 8504.484, -2.5, -22, 0, .05, 5.23, 16659.684, 1.5, 25, 0, .05, 1.15, 7247.82, -2.5, -23, 0, .047, .25, -1290.421, .3, 0, 0, .047, 4.67, -32686.464, -6.1, -100, 0, .047, 3.49, 548.678, 0, 0, 0, .047, 2.37, 6663.308, -2.2, -19, 0, .046, .98, 1572.084, 0, 0, 0, .046, 2.04, 14954.262, -.7, 6, 0, .046, 3.72, 6691.693, -2.2, -19, 0, .045, 6.19, -235.287, 0, 0, 0, .044, 2.96, 32967.001, -.1, 27, 0, .044, 3.82, -1671.943, -5.6, -66, 0, .043, 5.82, 1179.063, 0, 0, 0, .043, .07, 34152.617, 1.7, 49, 0, .043, 3.71, 6514.773, -.3, 0, 0, .043, 5.62, 15.732, -2.5, -23, 0, .043, 5.8, 8351.233, -2.2, -19, 0, .042, .27, 7740.199, 1.5, 25, 0, .042, 6.14, 15385.02, -.7, 6, 0, .042, 6.13, 7285.051, -4.1, -41, 0, .041, 1.27, 32757.451, 4.2, 78, 0, .041, 4.46, 8275.722, 1.5, 25, 0, .04, .23, 8381.661, 1.5, 25, 0, .04, 5.87, -766.864, 2.5, 29, 0, .04, 1.66, 254.431, 0, 0, 0, .04, .4, 9027.981, -.4, 0, 0, .04, 2.96, 7777.936, 1.5, 25, 0, .039, 4.67, 33943.068, 6.1, 100, 0, .039, 3.52, 8326.062, 1.5, 25, 0, .039, 3.75, 21013.887, -6.5, -57, 0, .039, 5.6, 606.978, 0, 0, 0, .039, 1.19, 8331.321, 1.5, 25, 0, .039, 2.84, 7211.433, -2.2, -19, 0, .038, .67, 7216.693, -2.2, -19, 0, .038, 6.22, 25161.867, .6, 28, 0, .038, 4.4, 7806.322, 1.5, 25, 0, .038, 4.16, 9179.168, -2.2, -19, 0, .037, 4.73, 14991.999, -.7, 6, 0, .036, .35, 67.514, -.6, -7, 0, .036, 3.7, 25266.611, -1.6, 0, 0, .036, 5.39, 16328.796, -.7, 6, 0, .035, 1.44, 7174.248, -2.2, -19, 0, .035, 5, 15684.73, -4.4, -38, 0, .035, .39, -15.419, -2.2, -19, 0, .035, 6.07, 15020.385, -.7, 6, 0, .034, 6.01, 7371.797, -2.2, -19, 0, .034, .96, -16623.626, -3.4, -54, 0, .033, 6.24, 9479.368, 1.5, 25, 0, .033, 3.21, 23661.896, 5.2, 82, 0, .033, 4.06, 8311.418, -2.2, -19, 0, .033, 2.4, 1965.105, 0, 0, 0, .033, 5.17, 15489.785, -.7, 6, 0, .033, 5.03, 21986.54, .9, 31, 0, .033, 4.1, 16691.14, 2.7, 46, 0, .033, 5.13, 47114.589, 1.7, 63, 0, .033, 4.45, 8917.184, 1.5, 25, 0, .033, 4.23, 2.078, 0, 0, 0, .032, 2.33, 75.251, 1.5, 25, 0, .032, 2.1, 7253.878, -2.2, -19, 0, .032, 3.11, -.224, 1.5, 25, 0, .032, 4.43, 16640.462, -.7, 6, 0, .032, 5.68, 8328.363, 0, 0, 0, .031, 5.32, 8329.02, 3, 50, 0, .031, 3.7, 16118.093, -.7, 6, 0, .03, 3.67, 16721.817, -.7, 6, 0, .03, 5.27, -1881.492, -1.2, -15, 0, .03, 5.72, 8157.839, -2.2, -19, 0, .029, 5.73, -18400.313, -6.7, -94, 0, .029, 2.76, 16, -2.2, -19, 0, .029, 1.75, 8879.447, 1.5, 25, 0, .029, .32, 8851.061, 1.5, 25, 0, .029, .9, 14704.903, 3.7, 57, 0, .028, 2.9, 15595.723, -.7, 6, 0, .028, 5.88, 16864.631, .2, 24, 0, .028, .63, 16869.234, -2.8, -26, 0, .028, 4.04, -18609.863, -2.4, -43, 0, .027, 5.83, 6727.736, -5.9, -63, 0, .027, 6.12, 418.752, 4.3, 51, 0, .027, .14, 41157.131, 3.9, 81, 0, .026, 3.8, 15.542, 0, 0, 0, .026, 1.68, 50181.698, 4.8, 99, -1, .026, .32, 315.469, 0, 0, 0, .025, 5.67, 19.188, .3, 0, 0, .025, 3.16, 62.133, -2.2, -19, 0, .025, 3.76, 15502.939, -.7, 6, 0, .025, 4.53, 45999.961, -2, 19, 0, .024, 3.21, 837.851, -4.4, -51, 0, .024, 2.82, 38157.596, .3, 37, 0, .024, 5.21, 15540.124, -.7, 6, 0, .024, .26, 14218.576, 0, 13, 0, .024, 3.01, 15545.384, -.7, 6, 0, .024, 1.16, -17424.247, -.6, -21, 0, .023, 2.34, -67.574, .6, 7, 0, .023, 2.44, 18.024, -1.9, -22, 0, .023, 3.7, 469.4, 0, 0, 0, .023, .72, 7136.511, -2.2, -19, 0, .023, 4.5, 15582.569, -.7, 6, 0, .023, 2.8, -16586.395, -4.9, -72, 0, .023, 1.51, 80.182, 0, 0, 0, .023, 1.09, 5261.583, -1.5, -12, 0, .023, .56, 54956.954, -.5, 44, 0, .023, 4.01, 8550.86, -2.2, -19, 0, .023, 4.46, 38995.448, -4.1, -14, 0, .023, 3.82, 2358.126, 0, 0, 0, .022, 3.77, 32271.125, .5, 34, 0, .022, .82, 15935.775, -.7, 6, 0, .022, 1.07, 24013.421, -2.9, -13, 0, .022, .4, 8940.078, -2.2, -19, 0, .022, 2.06, 15700.489, -.7, 6, 0, .022, 4.27, 15124.002, -5, -45, 0, .021, 1.16, 56071.583, 3.2, 88, 0, .021, 5.58, 9572.189, -2.2, -19, 0, .02, 1.7, -17.273, -3.7, -44, 0, .02, 3.05, 214.617, 0, 0, 0, .02, 4.41, 8391.048, -2.2, -19, 0, .02, 5.95, 23869.145, 2.4, 56, 0, .02, .42, 40947.927, -4.7, -21, 0, .019, 1.39, 5818.897, .3, 10, 0, .019, .71, 23873.747, -.7, 6, 0, .019, 2.81, 7291.615, -2.2, -19, 0, .019, 5.09, 8428.018, -2.2, -19, 0, .019, 4.14, 6518.187, -1.6, -12, 0, .019, 3.85, 21.33, 0, 0, 0, .018, .66, 14445.046, -.7, 6, 0, .018, 1.65, .966, -4, -48, 0, .018, 5.64, -17143.709, -6.8, -94, 0, .018, 6.01, 7736.432, -2.2, -19, 0, .018, 2.74, 31153.083, -1.9, 5, 0, .018, 4.58, 6116.355, -2.2, -19, 0, .018, 2.28, 46.401, .3, 0, 0, .018, 3.8, 10213.597, 1.4, 25, 0, .018, 2.84, 56281.132, -1.1, 36, 0, .018, 3.53, 8249.062, 1.5, 25, 0, .017, 4.43, 20871.911, -3, -13, 0, .017, 4.44, 627.596, 0, 0, 0, .017, 1.85, 628.308, 0, 0, 0, .017, 1.19, 8408.321, 2, 25, 0, .017, 1.95, 7214.056, -2, -19, 0, .017, 1.57, 7214.07, -2, -19, 0, .017, 1.65, 13870.811, -6, -60, 0, .017, .3, 22.542, -4, -44, 0, .017, 2.62, -119.445, 0, 0, 0, .016, 4.87, 5747.909, 2, 32, 0, .016, 4.45, 14339.108, -1, 6, 0, .016, 1.83, 41366.68, 0, 30, 0, .016, 4.53, 16309.618, -3, -23, 0, .016, 2.54, 15542.754, -1, 6, 0, .016, 6.05, 1203.646, 0, 0, 0, .015, 5.2, 2751.147, 0, 0, 0, .015, 1.8, -10699.924, -5, -69, 0, .015, .4, 22824.391, -3, -20, 0, .015, 2.1, 30666.756, -6, -39, 0, .015, 2.1, 6010.417, -2, -19, 0, .015, .7, -23729.47, -5, -75, 0, .015, 1.4, 14363.691, -1, 6, 0, .015, 5.8, 16900.689, -2, 0, 0, .015, 5.2, 23800.458, 3, 53, 0, .015, 5.3, 6035, -2, -19, 0, .015, 1.2, 8251.139, 2, 25, 0, .015, 3.6, -8.86, 0, 0, 0, .015, .8, 882.739, 0, 0, 0, .015, 3, 1021.329, 0, 0, 0, .015, .6, 23296.107, 1, 31, 0, .014, 5.4, 7227.181, 2, 25, 0, .014, .1, 7213.352, -2, -19, 0, .014, 4, 15506.706, 3, 50, 0, .014, 3.4, 7214.774, -2, -19, 0, .014, 4.6, 6665.385, -2, -19, 0, .014, .1, -8.636, -2, -22, 0, .014, 3.1, 15465.202, -1, 6, 0, .014, 4.9, 508.863, 0, 0, 0, .014, 3.5, 8406.244, 2, 25, 0, .014, 1.3, 13313.497, -8, -82, 0, .014, 2.8, 49276.619, -3, 0, 0, .014, .1, 30528.194, -3, -10, 0, .013, 1.7, 25128.05, 1, 31, 0, .013, 2.9, 14128.405, -1, 6, 0, .013, 3.4, 57395.761, 3, 80, 0, .013, 2.7, 13029.546, -1, 6, 0, .013, 3.9, 7802.556, -2, -19, 0, .013, 1.6, 8258.802, -2, -19, 0, .013, 2.2, 8417.709, -2, -19, 0, .013, .7, 9965.21, -2, -19, 0, .013, 3.4, 50391.247, 0, 48, 0, .013, 3, 7134.433, -2, -19, 0, .013, 2.9, 30599.182, -5, -31, 0, .013, 3.6, -9723.857, 1, 0, 0, .013, 4.8, 7607.084, -2, -19, 0, .012, .8, 23837.689, 1, 35, 0, .012, 3.6, 4.409, -4, -44, 0, .012, 5, 16657.031, 3, 50, 0, .012, 4.4, 16657.735, 3, 50, 0, .012, 1.1, 15578.803, -4, -38, 0, .012, 6, -11.49, 0, 0, 0, .012, 1.9, 8164.398, 0, 0, 0, .012, 2.4, 31852.372, -4, -17, 0, .012, 2.4, 6607.085, -2, -19, 0, .012, 4.2, 8359.87, 0, 0, 0, .012, .5, 5799.713, -2, -19, 0, .012, 2.7, 7220.622, 0, 0, 0, .012, 4.3, -139.72, 0, 0, 0, .012, 2.3, 13728.836, -2, -16, 0, .011, 3.6, 14912.146, 1, 31, 0, .011, 4.7, 14916.748, -2, -19, 0],
                    [1.6768, 4.66926, 628.301955, -.0266, .1, -.005, .51642, 3.3721, 6585.76091, -2.158, -18.9, .09, .41383, 5.7277, 14914.452335, -.635, 6.2, -.04, .37115, 3.9695, 7700.389469, 1.55, 25, -.12, .2756, .7416, 8956.99338, 1.496, 25.1, -.13, .24599, 4.2253, -2.3012, 1.523, 25.1, -.12, .07118, .1443, 7842.36482, -2.211, -19, .08, .06128, 2.4998, 16171.05625, -.688, 6, 0, .04516, .443, 8399.6791, -.36, 3, 0, .04048, 5.771, 14286.15038, -.61, 6, 0, .03747, 4.626, 1256.60391, -.05, 0, 0, .03707, 3.415, 5957.45895, -2.13, -19, .1, .03649, 1.8, 23243.14376, .89, 31, -.2, .02438, .042, 16029.08089, 3.07, 50, -.2, .02165, 1.017, -1742.93051, -3.68, -44, .2, .01923, 3.097, 17285.6848, 3.02, 50, -.3, .01692, 1.28, .3286, 1.52, 25, -.1, .01361, .298, 8326.3902, 3.05, 50, -.2, .01293, 4.013, 7072.0875, 1.58, 25, -.1, .01276, 4.413, 8330.9926, 0, 0, 0, .0127, .101, 8470.6668, -2.24, -19, .1, .01097, 1.203, 22128.5152, -2.82, -13, 0, .01088, 2.545, 15542.7543, -.66, 6, 0, .00835, .19, 7214.0629, -2.18, -19, .1, .00734, 4.855, 24499.7477, .83, 31, -.2, .00686, 5.13, 13799.8238, -4.34, -38, .2, .00631, .93, -486.3266, -3.73, -44, 0, .00585, .699, 9585.2953, 1.5, 25, 0, .00566, 4.073, 8328.3391, 1.5, 25, 0, .00566, .638, 8329.0437, 1.5, 25, 0, .00539, 2.472, -1952.48, .6, 7, 0, .00509, 2.88, -.7113, 0, 0, 0, .00469, 3.56, 30457.2066, -1.3, 12, 0, .00387, .78, -.3523, 0, 0, 0, .00378, 1.84, 22614.8418, .9, 31, 0, .00362, 5.53, -695.8761, .6, 7, 0, .00317, 2.8, 16728.3705, 1.2, 28, 0, .00303, 6.07, 157.7344, 0, 0, 0, .003, 2.53, 33.757, -.3, -4, 0, .00295, 4.16, 31571.8352, 2.4, 56, 0, .00289, 5.98, 7211.7617, -.7, 6, 0, .00285, 2.06, 15540.4531, .9, 31, 0, .00283, 2.65, 2.6298, 0, 0, 0, .00282, 6.17, 15545.0555, -2.2, -19, 0, .00278, 1.23, -39.8149, 0, 0, 0, .00272, 3.82, 7216.3641, -3.7, -44, 0, .0027, 4.37, 70.9877, -1.9, -22, 0, .00256, 5.81, 13657.8484, -.6, 6, 0, .00244, 5.64, -.2237, 1.5, 25, 0, .0024, 2.96, 8311.7707, -2.2, -19, 0, .00239, .87, -33.7814, .3, 4, 0, .00216, 2.31, 15.9995, -2.2, -19, 0, .00186, 3.46, 5329.157, -2.1, -19, 0, .00169, 2.4, 24357.772, 4.6, 75, 0, .00161, 5.8, 8329.403, 1.5, 25, 0, .00161, 5.2, 8327.98, 1.5, 25, 0, .0016, 4.26, 23385.119, -2.9, -13, 0, .00156, 1.26, 550.755, 0, 0, 0, .00155, 1.25, 21500.213, -2.8, -13, 0, .00152, .6, -16.921, -3.7, -44, 0, .0015, 2.71, -79.63, 0, 0, 0, .0015, 5.29, 15.542, 0, 0, 0, .00148, 1.06, -2371.232, -3.7, -44, 0, .00141, .77, 8328.691, 1.5, 25, 0, .00141, 3.67, 7143.075, -.3, 0, 0, .00138, 5.45, 25614.376, 4.5, 75, 0, .00129, 4.9, 23871.446, .9, 31, 0, .00126, 4.03, 141.975, -3.8, -44, 0, .00124, 6.01, 522.369, 0, 0, 0, .0012, 4.94, -10071.622, -5.2, -69, 0, .00118, 5.07, -15.419, -2.2, -19, 0, .00107, 3.49, 23452.693, -3.4, -20, 0, .00104, 4.78, 17495.234, -1.3, 0, 0, .00103, 1.44, -18.049, -2.2, -19, 0, .00102, 5.63, 15542.402, -.7, 6, 0, .00102, 2.59, 15543.107, -.7, 6, 0, .001, 4.11, -6.559, -1.9, -22, 0, 97e-5, .08, 15400.779, 3.1, 50, 0, 96e-5, 5.84, 31781.385, -1.9, 5, 0, 94e-5, 1.08, 8328.363, 0, 0, 0, 94e-5, 2.46, 16799.358, -.7, 6, 0, 94e-5, 1.69, 6376.211, 2.2, 32, 0, 93e-5, 3.64, 8329.02, 3, 50, 0, 93e-5, 2.65, 16655.082, 4.6, 75, 0, 9e-4, 1.9, 15056.428, -4.4, -38, 0, 89e-5, 1.59, 52.969, 0, 0, 0, 88e-5, 2.02, -8257.704, -3.4, -47, 0, 88e-5, 3.02, 7213.711, -2.2, -19, 0, 87e-5, .5, 7214.415, -2.2, -19, 0, 87e-5, .49, 16659.684, 1.5, 25, 0, 82e-5, 5.64, -4.931, 1.5, 25, 0, 79e-5, 5.17, 13171.522, -4.3, -38, 0, 76e-5, 3.6, 29828.905, -1.3, 12, 0, 76e-5, 4.08, 24567.322, .3, 24, 0, 76e-5, 4.58, 1884.906, -.1, 0, 0, 73e-5, .33, 31713.811, -1.4, 12, 0, 73e-5, .93, 32828.439, 2.4, 56, 0, 71e-5, 5.91, 38785.898, .2, 37, 0, 69e-5, 2.2, 15613.742, -2.5, -16, 0, 66e-5, 3.87, 15.732, -2.5, -23, 0, 66e-5, .86, 25823.926, .2, 24, 0, 65e-5, 2.52, 8170.957, 1.5, 25, 0, 63e-5, .18, 8322.132, -.3, 0, 0, 6e-4, 5.84, 8326.062, 1.5, 25, 0, 6e-4, 5.15, 8331.321, 1.5, 25, 0, 6e-4, 2.18, 8486.426, 1.5, 25, 0, 58e-5, 2.3, -1.731, -4, -44, 0, 58e-5, 5.43, 14357.138, -2, -16, 0, 57e-5, 3.09, 8294.91, 2, 29, 0, 57e-5, 4.67, -8362.473, -1, -21, 0, 56e-5, 4.15, 16833.151, -1, 0, 0, 54e-5, 1.93, 7056.329, -2, -19, 0, 54e-5, 5.27, 8315.574, -2, -19, 0, 52e-5, 5.6, 8311.418, -2, -19, 0, 52e-5, 2.7, -77.552, 0, 0, 0, 51e-5, 4.3, 7230.984, 2, 25, 0, 5e-4, .4, -.508, 0, 0, 0, 49e-5, 5.4, 7211.433, -2, -19, 0, 49e-5, 4.4, 7216.693, -2, -19, 0, 49e-5, 4.3, 16864.631, 0, 24, 0, 49e-5, 2.2, 16869.234, -3, -26, 0, 47e-5, 6.1, 627.596, 0, 0, 0, 47e-5, 5, 12.619, 1, 7, 0, 45e-5, 4.9, -8815.018, -5, -69, 0, 44e-5, 1.6, 62.133, -2, -19, 0, 42e-5, 2.9, -13.118, -4, -44, 0, 42e-5, 4.1, -119.445, 0, 0, 0, 41e-5, 4.3, 22756.817, -3, -13, 0, 41e-5, 3.6, 8288.877, 2, 25, 0, 4e-4, .5, 6663.308, -2, -19, 0, 4e-4, 1.1, 8368.506, 2, 25, 0, 39e-5, 4.1, 6443.786, 2, 25, 0, 39e-5, 3.1, 16657.383, 3, 50, 0, 38e-5, .1, 16657.031, 3, 50, 0, 38e-5, 3, 16657.735, 3, 50, 0, 38e-5, 4.6, 23942.433, -1, 9, 0, 37e-5, 4.3, 15385.02, -1, 6, 0, 37e-5, 5, 548.678, 0, 0, 0, 36e-5, 1.8, 7213.352, -2, -19, 0, 36e-5, 1.7, 7214.774, -2, -19, 0, 35e-5, 1.1, 7777.936, 2, 25, 0, 35e-5, 1.6, -8.86, 0, 0, 0, 35e-5, 4.4, 23869.145, 2, 56, 0, 35e-5, 2, 6691.693, -2, -19, 0, 34e-5, 1.3, -1185.616, -2, -22, 0, 34e-5, 2.2, 23873.747, -1, 6, 0, 33e-5, 2, -235.287, 0, 0, 0, 33e-5, 3.1, 17913.987, 3, 50, 0, 33e-5, 1, 8351.233, -2, -19, 0],
                    [.00487, 4.6693, 628.30196, -.027, 0, -.01, .00228, 2.6746, -2.3012, 1.523, 25, -.12, .0015, 3.372, 6585.76091, -2.16, -19, .1, .0012, 5.728, 14914.45233, -.64, 6, 0, .00108, 3.969, 7700.38947, 1.55, 25, -.1, 8e-4, .742, 8956.99338, 1.5, 25, -.1, 254e-6, 6.002, .3286, 1.52, 25, -.1, 21e-5, .144, 7842.3648, -2.21, -19, 0, 18e-5, 2.5, 16171.0562, -.7, 6, 0, 13e-5, .44, 8399.6791, -.4, 3, 0, 126e-6, 5.03, 8326.3902, 3, 50, 0, 12e-5, 5.77, 14286.1504, -.6, 6, 0, 118e-6, 5.96, 8330.9926, 0, 0, 0, 11e-5, 1.8, 23243.1438, .9, 31, 0, 11e-5, 3.42, 5957.459, -2.1, -19, 0, 11e-5, 4.63, 1256.6039, -.1, 0, 0, 99e-6, 4.7, -.7113, 0, 0, 0, 7e-5, .04, 16029.0809, 3.1, 50, 0, 7e-5, 5.14, 8328.3391, 1.5, 25, 0, 7e-5, 5.85, 8329.0437, 1.5, 25, 0, 6e-5, 1.02, -1742.9305, -3.7, -44, 0, 6e-5, 3.1, 17285.6848, 3, 50, 0, 54e-6, 5.69, -.352, 0, 0, 0, 43e-6, .52, 15.542, 0, 0, 0, 41e-6, 2.03, 2.63, 0, 0, 0, 4e-5, .1, 8470.667, -2.2, -19, 0, 4e-5, 4.01, 7072.088, 1.6, 25, 0, 36e-6, 2.93, -8.86, -.3, 0, 0, 3e-5, 1.2, 22128.515, -2.8, -13, 0, 3e-5, 2.54, 15542.754, -.7, 6, 0, 27e-6, 4.43, 7211.762, -.7, 6, 0, 26e-6, .51, 15540.453, .9, 31, 0, 26e-6, 1.44, 15545.055, -2.2, -19, 0, 25e-6, 5.37, 7216.364, -3.7, -44, 0],
                    [12e-6, 1.041, -2.3012, 1.52, 25, -.1, 17e-7, .31, -.711, 0, 0, 0]
                ],
                SHUO_KB: [1457698.231017, 29.53067166, 1546082.512234, 29.53085106, 1640640.7353, 29.5306, 1642472.151543, 29.53085439, 1683430.5093, 29.53086148, 1752148.041079, 29.53085097, 1807665.420323, 29.53059851, 1883618.1141, 29.5306, 1907360.7047, 29.5306, 1936596.2249, 29.5306, 1939135.6753, 29.5306, 1947168],
                SB: "00000000000000000000000020000002000000000000200000001000000000000000000000000000000000000010002000000000000000200000000200000000000000000000002000000000020000000000000000000000000000000000100000000000010000001000001000000000000000100000000020000000000000002000000000000001000000000000001000000000000100000000010010000020000202001101002020200101000002020010100002000000010100202000001010000202020001010000202020001010000202000001010020202001010000020200101000022000010101002020001010100002020201010100002020200010100002020000010100202000010100000202001010000220200101010020200010101001000000000001001000200000000000020000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000020010000000000000000000000000000000000000001000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000010001000000100001001010010101000000000000100001000001000100000000001000000000000100100000000010010100010000000000000000000100011000000000000000000002000000001020000000001001000001000001001000000001000100010010000100001000000100000100100010000000000000010000200000000000000000000000000000000001000000000100100000000000000000000000000000000000000000000000000010000000000101000000000000000000000000000001001010010010100100010000010010000001001001001001000000100100000100010000000100000000000000100000000010100000000001000100010100100000010000000010010000000001000001000000101002000000000100000000000000100001000000010100000101001000000100100100100100000010010010000001001010000000100101001000000000101001000000010101000000000010000001000001000001000000100000000000010010000000000000000010000000100010010000000100000010000010100010010000000000000000001001000000000100101000000010000100110100000000100000000000010000000010000010000100010000000000000000000000010000000000000000100000001000000000001000000000000000100000000000100000010000000100001010000000000101000010100000001001000000010100000000000000000000001000000000001000000000000000000000000000000000000000100000001000000000000100000000000000000000000010000000010010000000001000001010100000001000000000000001000010000101001001010000001000101000000000100100000100110000010010010010001001010010010000001000000000000101000010000000101000000000010000001001001001001000000100101000000010000100010101001010010010000101010010000000101010010000000100010010000010010010000001001010000000100101000100010000000100100001000100100000101010000000000101010100100000100000000000010010000010001001010001000100000001001010000000000000001000100100000100010100001010100000100000000100100100100010010100010001000000010010100000010001010000000001000000000001001010100000001000010100000001001010000101000000010010000100101001000100010100000000010000010000010010001000001000010100000001000000100001000000010000101001001010000001000101000001000100100000100100000010010010010101000000010000000000000010000000001010010010000100010000010010000001001000001001000000100100000100010010100100100001010000100000001010000100000001010100000000100000010000010010010000001001010001000100101000101000010100100000001010100100000001010100000000001000000100000000100100000010010100000000000010001000100000001001000010001001000001010101001000001000101001000100000001000000100100000100010000100010001000000010010100000010000000010001000010001000001000010101000000000010100001000001000100101000100010000000100101000000100010000000000010000010000010010101000000010000101000000010010100001010000010100000001001010000001000101000000000100000000100100101000000000000101000000000100001000010000000100001010010010100000010001010000010001000000001001000000000100000101000010100100000000010100100000001010100100100001000100002000000100002200001010010000000001010001010000101001001000010100001000000010101001000001010001000000000000000100000000100100000001000100010000000010000010000001000000000010101001010000010101000000001000000001000000001001000000000101000100000000100010100000000010000000100010010000010101010010101010100010010001000010010000000001010001000100001000100010000000100100000000100000000000010000101010000010000101010000000000101000010000010100000010001010100000001001000000001000000000000000100000000000100101010000000100001010000100100101000010100000100000000010010000010010001000001010001000000001001001010000100101001000000100001000000010101000001000000000100100000000100010000010100010000001010010000100001001000010000101001000000000101000000000010101001001000000001000000000101000100000010100110000001010110010100001010010000000101010010000000101010010000010000010000000000010001000000101001000000010001000101001000100100100000010000000000101010000100010100010000100010000000010000001010010000000100010001000010001000101001000000100000000000100100000101000100101010100000100100010000100100201001000100010000100000000010010000001001001000001001000100000000001010100000101001010100000001001010010000000101001000100010100100000010010010010010000001000000001000100000001000010100000000000010100101001001010010001000001001000000100100000100000000000010100010001001010010010100001000010000000001000010000100101010010010010000001001001001001000000000101000100000010100100101001010100000000001010010000000001010000000000101000010010010000010000000001010001000000101001000010010001000101001000100100000001010100100000101010100100000100000100000010010100010000001000010000000100010001010010001001000001000001001000001010100001000101000101001000100000000100010010100100000001000100010100100000000010010000001000001000001001010101000001000010101000001001010100101001001010010001000101001000000000100100000010010010000010010001000000010010100000000010010100001000010010100101010001010010000000001001001001100100100100100000010010100010101000010010000100000000010000000001010000010100100010010010010000011001001001000000000100101000100010010100100101000010000100000000010100100000001010100100100100000000010010010000000001001010001000100101001001010010101000000000010100001000001010100001000001000000000000100100100000010010100010001001000010000100100010001010010001001000000010101001000001010001001000001000001001000100101000100010010000100001001000100010100100000010010010000010010001010001000010101010000010010001001000001000100101001000010010001000101001000000100100100000100000010000010010101000000010000101000000000000101001010010010100100010001010010000001001001001001100000100100100100010000000100101000000000100001000010100100101001000100010100100000010010010010011001001001001001000100101000001010000100100000000000100000000000010100000001001000000100100100100110010010010200000001001010001000100101001001010000101001000000010101001000000010001001001001000001000000100100000000010010100010001001010010010100101010000000010101000010000010101000010000010000000000001001000000000100101000100010010000100101001000100010100100010010000010101010010100010100010010000010000010010001001010001000100100001000010010001000101001000100100000100000100100010000010100101010000000100101010010100010001001000010010100100010001010010000001000001000001000000100000100101010100000100001010000100000001010010100100101001000100010100100000010010010010011000001001001001010100000001001010000000001000010000101001001010010001000101001000000100100100100110010010010010010001001010010010100101000000000000101000010000000101000000010010000001001001001001100100100100000000010010100010101001010010010000101010010000000101010010000000100010010000010010010000001001010000000100101000100010010000100101001000100100000101010000100000101010100100000100000000000010010000010001001010001000100100001001010010001000100001000100100100100010100001010100000100101010100100100100010010100010001001000010010100100010001010010001001000001000001001010100000001001010100000001001010000101002001010010000100101001000100010100100000010000010010010000001000001001010100000001000010000001000000010100101001001010010001000101001001000100100100100110000010010010010101001010010000100001000010000100001010010010020000000000000000020001000000000000000000000002000000000000000000000000000000100000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000110000000000000000000000000000000000000000000000000000000000020000000000000000000002000000000000002000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000200000000000000000000000002000000000000000000000000000000000020000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000001000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000010000200000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000100000000000000000200000000000000000000000002000000000000000000000000000000000020000000200000000000000000000000000002000000000000200000000000020000000000000000000000000000000000000000000000000000000000000000000000000000020000000002000000000200000000000000000000000000000000000000000000000000000000001000000000000000000200000000000000000000000000000000200000000000000000000000000000000100000000000000000000000000000000000000000200000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000002020000000000000000000000000000000000000000000100000200000000000000000000000002000000000200000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000001000000000000000000000000002000000000000002000000000002000000000000000000000000200200000000000000000000000000000000000001000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000200000000000000000000000100000010100000000000000000000000100000000200000000000000000000020000000000000000000000200000000000000000000000000000000000000000200000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000200000000000000000000000000010000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000020000000000000020000000000000000000000000000000000000000100000000001000000000000000000000000000000000200000000000200000000000000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000100000020000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000010000000000000010000002000000000002000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000001000000002000000000000002000000000000000000000000000000000000000000000000000000220000000010000020000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000201000020000000200000000000000000000000001000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000001000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000200010000000000000000000000000000000000100000000000000100000000000000000000000000000000000000000002000100000000000000000000000000010000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000002000000000000000100000000000000000000000000000000000000000200000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000200000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000002000000000000000000000000000000000020000020000000000000020000000000000000000000000000200000000000020000000000000000000000000000000000000000000001000000000000000000000000000000020000000000000000000200000000000000000000000000000000000000000000010000000000000000000000000000000200000020000000000000000000000000200000000000000000000000000000000000000000000000002000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000100000000000000000020000000000002000000000000002000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000020000000000000001000000000000000000000000000000000000000002000000000002000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000200000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000020000000000000001000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000100000000000000000000000000000000000000000000000",
                nutationLon2: function(e) {
                    for (var t = -1.742 * e, n = e * e, r = 0, a = 0, i = this.NUT_B.length; a < i; a += 5) r += (this.NUT_B[a + 3] + t) * Math.sin(this.NUT_B[a] + this.NUT_B[a + 1] * e + this.NUT_B[a + 2] * n), t = 0;
                    return r / 100 / this.SECOND_PER_RAD
                },
                eLon: function(e, t) {
                    e /= 10;
                    for (var n, r, a, i, o, s = 0, l = 1, u = this.XL0[2] - this.XL0[1], c = 0; c < 6; c++, l *= e)
                        if (n = Math.floor(this.XL0[1 + c]), 0 != (o = (r = Math.floor(this.XL0[2 + c])) - n)) {
                            t < 0 ? a = r : (a = Math.floor(3 * t * o / u + .5 + n), 0 != c && (a += 3), a > r && (a = r)), i = 0;
                            for (var f = n; f < a; f += 3) i += this.XL0[f] * Math.cos(this.XL0[f + 1] + e * this.XL0[f + 2]);
                            s += i * l
                        } s /= this.XL0[0];
                    var d = e * e;
                    return s += (-.0728 - 2.7702 * e - 1.1019 * d - .0996 * d * e) / this.SECOND_PER_RAD
                },
                mLon: function(e, t) {
                    var n, r, a = this.XL1,
                        i = a[0].length,
                        o = 1,
                        s = 0,
                        l = e * e,
                        u = l * e,
                        c = u * e,
                        f = c * e,
                        d = e - 10;
                    s += (3.81034409 + 8399.684730072 * e - 3319e-8 * l + 3.11e-8 * u - 2.033e-10 * c) * this.SECOND_PER_RAD, s += 5028.792262 * e + 1.1124406 * l + 7699e-8 * u - 23479e-9 * c - 1.78e-8 * f, d > 0 && (s += 1.43 * d - .866 + .054 * d * d), l /= 1e4, u /= 1e8, c /= 1e8, (t *= 6) < 0 && (t = i);
                    for (var h = 0, g = a.length; h < g; h++, o *= e) {
                        var p = a[h],
                            m = p.length,
                            v = Math.floor(t * m / i + .5);
                        for (h > 0 && (v += 6), v >= m && (v = m), n = 0, r = 0; n < v; n += 6) r += p[n] * Math.cos(p[n + 1] + e * p[n + 2] + l * p[n + 3] + u * p[n + 4] + c * p[n + 5]);
                        s += r * o
                    }
                    return s /= this.SECOND_PER_RAD
                },
                gxcSunLon: function(e) {
                    var t = e * e,
                        n = 628.301955 * e - .043126 - 2732e-9 * t;
                    return -20.49552 * (1 + (.016708634 - 42037e-9 * e - 1.267e-7 * t) * Math.cos(n)) / this.SECOND_PER_RAD
                },
                ev: function(e) {
                    var t = 628.307585 * e;
                    return 628.332 + 21 * Math.sin(1.527 + t) + .44 * Math.sin(1.48 + 2 * t) + .129 * Math.sin(5.82 + t) * e + 55e-5 * Math.sin(4.21 + t) * e * e
                },
                saLon: function(e, t) {
                    return this.eLon(e, t) + this.nutationLon2(e) + this.gxcSunLon(e) + Math.PI
                },
                dtExt: function(e, t) {
                    var n = (e - 1820) / 100;
                    return t * n * n - 20
                },
                dtCalc: function(e) {
                    var t, n = this.DT_AT.length,
                        r = this.DT_AT[n - 2],
                        a = this.DT_AT[n - 1];
                    if (e >= r) return e > r + 100 ? this.dtExt(e, 31) : this.dtExt(e, 31) - (this.dtExt(r, 31) - a) * (r + 100 - e) / 100;
                    for (t = 0; t < n && !(e < this.DT_AT[t + 5]); t += 5);
                    var i = (e - this.DT_AT[t]) / (this.DT_AT[t + 5] - this.DT_AT[t]) * 10,
                        o = i * i,
                        s = o * i;
                    return this.DT_AT[t + 1] + this.DT_AT[t + 2] * i + this.DT_AT[t + 3] * o + this.DT_AT[t + 4] * s
                },
                dtT: function(e) {
                    return this.dtCalc(e / 365.2425 + 2e3) / this.SECOND_PER_DAY
                },
                mv: function(e) {
                    var t = 8399.71 - 914 * Math.sin(.7848 + 8328.691425 * e + 1523e-7 * e * e);
                    return t -= 179 * Math.sin(2.543 + 15542.7543 * e) + 160 * Math.sin(.1874 + 7214.0629 * e) + 62 * Math.sin(3.14 + 16657.3828 * e) + 34 * Math.sin(4.827 + 16866.9323 * e) + 22 * Math.sin(4.9 + 23871.4457 * e) + 12 * Math.sin(2.59 + 14914.4523 * e) + 7 * Math.sin(.23 + 6585.7609 * e) + 5 * Math.sin(.9 + 25195.624 * e) + 5 * Math.sin(2.32 - 7700.3895 * e) + 5 * Math.sin(3.88 + 8956.9934 * e) + 5 * Math.sin(.49 + 7771.3771 * e)
                },
                saLonT: function(e) {
                    var t, n = 628.3319653318;
                    return t = (e - 1.75347 - Math.PI) / n, n = this.ev(t), t += (e - this.saLon(t, 10)) / n, n = this.ev(t), t += (e - this.saLon(t, -1)) / n
                },
                msaLon: function(e, t, n) {
                    return this.mLon(e, t) + -34e-7 - (this.eLon(e, n) + this.gxcSunLon(e) + Math.PI)
                },
                msaLonT: function(e) {
                    var t, n = 7771.37714500204;
                    return t = (e + 1.08472) / n, t += (e - this.msaLon(t, 3, 3)) / n, n = this.mv(t) - this.ev(t), t += (e - this.msaLon(t, 20, 10)) / n, t += (e - this.msaLon(t, -1, 60)) / n
                },
                msaLonT2: function(e) {
                    var t, n = 7771.37714500204,
                        r = (t = (e + 1.08472) / n) * t;
                    return r = (t -= (-3309e-8 * r + .10976 * Math.cos(.784758 + 8328.6914246 * t + 152292e-9 * r) + .02224 * Math.cos(.1874 + 7214.0628654 * t - 21848e-8 * r) - .03342 * Math.cos(4.669257 + 628.307585 * t)) / n) * t, t += (e - (this.mLon(t, 20) - (4.8950632 + 628.3319653318 * t + 5297e-9 * r + .0334166 * Math.cos(4.669257 + 628.307585 * t) + 2061e-7 * Math.cos(2.67823 + 628.307585 * t) * t + 349e-6 * Math.cos(4.6261 + 1256.61517 * t) - 20.5 / this.SECOND_PER_RAD))) / (n = 7771.38 - 914 * Math.sin(.7848 + 8328.691425 * t + 1523e-7 * r) - 179 * Math.sin(2.543 + 15542.7543 * t) - 160 * Math.sin(.1874 + 7214.0629 * t))
                },
                shuoHigh: function(e) {
                    var t = 36525 * this.msaLonT2(e),
                        n = ((t = t - this.dtT(t) + this.ONE_THIRD) + .5) % 1 * this.SECOND_PER_DAY;
                    return (n < 1800 || n > this.SECOND_PER_DAY - 1800) && (t = 36525 * this.msaLonT(e) - this.dtT(t) + this.ONE_THIRD), t
                },
                shuoLow: function(e) {
                    var t = 7771.37714500204,
                        n = (e + 1.08472) / t;
                    return 36525 * (n -= (-331e-7 * n * n + .10976 * Math.cos(.785 + 8328.6914 * n) + .02224 * Math.cos(.187 + 7214.0629 * n) - .03342 * Math.cos(4.669 + 628.3076 * n)) / t + (32 * (n + 1.8) * (n + 1.8) - 20) / this.SECOND_PER_DAY / 36525) + this.ONE_THIRD
                },
                calcShuo: function(e) {
                    var t, n = this.SHUO_KB.length,
                        r = 0,
                        a = 14;
                    e += G.J2000;
                    var i = this.SHUO_KB[0] - a,
                        o = this.SHUO_KB[n - 1] - a,
                        s = 2436935;
                    if (e < i || e >= s) r = Math.floor(this.shuoHigh(Math.floor((e + a - 2451551) / 29.5306) * Math.PI * 2) + .5);
                    else if (e >= i && e < o) {
                        for (t = 0; t < n && !(e + a < this.SHUO_KB[t + 2]); t += 2);
                        r = this.SHUO_KB[t] + this.SHUO_KB[t + 1] * Math.floor((e + a - this.SHUO_KB[t]) / this.SHUO_KB[t + 1]), 1683460 === (r = Math.floor(r + .5)) && r++, r -= G.J2000
                    } else if (e >= o && e < s) {
                        r = Math.floor(this.shuoLow(Math.floor((e + a - 2451551) / 29.5306) * Math.PI * 2) + .5);
                        var l = Math.floor((e - o) / 29.5306),
                            u = this.SB.substr(l, 1);
                        "1" == u ? r += 1 : "2" == u && (r -= 1)
                    }
                    return r
                }
            },
            $ = {
                WEEK: ["日", "一", "二", "三", "四", "五", "六"],
                DAYS_OF_MONTH: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                XINGZUO: ["白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯", "水瓶", "双鱼"],
                FESTIVAL: {
                    "1-1": "元旦节",
                    "2-14": "情人节",
                    "3-8": "妇女节",
                    "3-12": "植树节",
                    "3-15": "消费者权益日",
                    "4-1": "愚人节",
                    "5-1": "劳动节",
                    "5-4": "青年节",
                    "6-1": "儿童节",
                    "7-1": "建党节",
                    "8-1": "建军节",
                    "9-10": "教师节",
                    "10-1": "国庆节",
                    "10-31": "万圣节前夜",
                    "11-1": "万圣节",
                    "12-24": "平安夜",
                    "12-25": "圣诞节"
                },
                OTHER_FESTIVAL: {
                    "1-8": ["周恩来逝世纪念日"],
                    "1-10": ["中国人民警察节", "中国公安110宣传日"],
                    "1-21": ["列宁逝世纪念日"],
                    "1-26": ["国际海关日"],
                    "2-2": ["世界湿地日"],
                    "2-4": ["世界抗癌日"],
                    "2-7": ["京汉铁路罢工纪念"],
                    "2-10": ["国际气象节"],
                    "2-19": ["邓小平逝世纪念日"],
                    "2-21": ["国际母语日"],
                    "2-24": ["第三世界青年日"],
                    "3-1": ["国际海豹日"],
                    "3-3": ["全国爱耳日"],
                    "3-5": ["周恩来诞辰纪念日", "中国青年志愿者服务日"],
                    "3-6": ["世界青光眼日"],
                    "3-12": ["孙中山逝世纪念日"],
                    "3-14": ["马克思逝世纪念日"],
                    "3-17": ["国际航海日"],
                    "3-18": ["全国科技人才活动日"],
                    "3-21": ["世界森林日", "世界睡眠日"],
                    "3-22": ["世界水日"],
                    "3-23": ["世界气象日"],
                    "3-24": ["世界防治结核病日"],
                    "4-2": ["国际儿童图书日"],
                    "4-7": ["世界卫生日"],
                    "4-22": ["列宁诞辰纪念日"],
                    "4-23": ["世界图书和版权日"],
                    "4-26": ["世界知识产权日"],
                    "5-3": ["世界新闻自由日"],
                    "5-5": ["马克思诞辰纪念日"],
                    "5-8": ["世界红十字日"],
                    "5-11": ["世界肥胖日"],
                    "5-27": ["上海解放日"],
                    "5-31": ["世界无烟日"],
                    "6-5": ["世界环境日"],
                    "6-6": ["全国爱眼日"],
                    "6-8": ["世界海洋日"],
                    "6-11": ["中国人口日"],
                    "6-14": ["世界献血日"],
                    "7-1": ["香港回归纪念日"],
                    "7-7": ["中国人民抗日战争纪念日"],
                    "7-11": ["世界人口日"],
                    "8-5": ["恩格斯逝世纪念日"],
                    "8-6": ["国际电影节"],
                    "8-12": ["国际青年日"],
                    "8-22": ["邓小平诞辰纪念日"],
                    "9-3": ["中国抗日战争胜利纪念日"],
                    "9-8": ["世界扫盲日"],
                    "9-9": ["毛泽东逝世纪念日"],
                    "9-14": ["世界清洁地球日"],
                    "9-18": ["九一八事变纪念日"],
                    "9-20": ["全国爱牙日"],
                    "9-21": ["国际和平日"],
                    "9-27": ["世界旅游日"],
                    "10-4": ["世界动物日"],
                    "10-10": ["辛亥革命纪念日"],
                    "10-13": ["中国少年先锋队诞辰日"],
                    "10-25": ["抗美援朝纪念日"],
                    "11-12": ["孙中山诞辰纪念日"],
                    "11-17": ["国际大学生节"],
                    "11-28": ["恩格斯诞辰纪念日"],
                    "12-1": ["世界艾滋病日"],
                    "12-12": ["西安事变纪念日"],
                    "12-13": ["国家公祭日"],
                    "12-26": ["毛泽东诞辰纪念日"]
                },
                WEEK_FESTIVAL: {
                    "3-0-1": "全国中小学生安全教育日",
                    "5-2-0": "母亲节",
                    "6-3-0": "父亲节",
                    "11-4-4": "感恩节"
                },
                isLeapYear: function(e) {
                    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                },
                getDaysOfMonth: function(e, t) {
                    var n = t - 1,
                        r = this.DAYS_OF_MONTH[n];
                    return 1 === n && this.isLeapYear(e) && r++, r
                },
                getDaysOfYear: function(e) {
                    return this.isLeapYear(e) ? 366 : 365
                },
                getDaysInYear: function(e, t, n) {
                    for (var r = 0, a = 1; a < t; a++) r += this.getDaysOfMonth(e, a);
                    return r += n, 1582 === e && 10 === t && n >= 15 && (r -= 10), r
                },
                getWeeksOfMonth: function(e, t, n) {
                    var r = this.getDaysOfMonth(e, t),
                        a = Y.fromYmd(e, t, 1).getDay();
                    return Math.ceil((r + a - n) / 7)
                }
            },
            J = {
                BASE_MONTH_ZHI_INDEX: 2,
                XUN: ["甲子", "甲戌", "甲申", "甲午", "甲辰", "甲寅"],
                XUN_KONG: ["戌亥", "申酉", "午未", "辰巳", "寅卯", "子丑"],
                LIU_YAO: ["先胜", "友引", "先负", "佛灭", "大安", "赤口"],
                HOU: ["初候", "二候", "三候"],
                WU_HOU: ["蚯蚓结", "麋角解", "水泉动", "雁北乡", "鹊始巢", "雉始雊", "鸡始乳", "征鸟厉疾", "水泽腹坚", "东风解冻", "蛰虫始振", "鱼陟负冰", "獭祭鱼", "候雁北", "草木萌动", "桃始华", "仓庚鸣", "鹰化为鸠", "玄鸟至", "雷乃发声", "始电", "桐始华", "田鼠化为鴽", "虹始见", "萍始生", "鸣鸠拂奇羽", "戴胜降于桑", "蝼蝈鸣", "蚯蚓出", "王瓜生", "苦菜秀", "靡草死", "麦秋至", "螳螂生", "鵙始鸣", "反舌无声", "鹿角解", "蜩始鸣", "半夏生", "温风至", "蟋蟀居壁", "鹰始挚", "腐草为萤", "土润溽暑", "大雨行时", "凉风至", "白露降", "寒蝉鸣", "鹰乃祭鸟", "天地始肃", "禾乃登", "鸿雁来", "玄鸟归", "群鸟养羞", "雷始收声", "蛰虫坯户", "水始涸", "鸿雁来宾", "雀入大水为蛤", "菊有黄花", "豺乃祭兽", "草木黄落", "蛰虫咸俯", "水始冰", "地始冻", "雉入大水为蜃", "虹藏不见", "天气上升地气下降", "闭塞而成冬", "鹖鴠不鸣", "虎始交", "荔挺出"],
                GAN: ["", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
                POSITION_XI: ["", "艮", "乾", "坤", "离", "巽", "艮", "乾", "坤", "离", "巽"],
                POSITION_YANG_GUI: ["", "坤", "坤", "兑", "乾", "艮", "坎", "离", "艮", "震", "巽"],
                POSITION_YIN_GUI: ["", "艮", "坎", "乾", "兑", "坤", "坤", "艮", "离", "巽", "震"],
                POSITION_FU: ["", "巽", "巽", "震", "震", "坎", "离", "坤", "坤", "乾", "兑"],
                POSITION_FU_2: ["", "坎", "坤", "乾", "巽", "艮", "坎", "坤", "乾", "巽", "艮"],
                POSITION_CAI: ["", "艮", "艮", "坤", "坤", "坎", "坎", "震", "震", "离", "离"],
                POSITION_TAI_SUI_YEAR: ["坎", "艮", "艮", "震", "巽", "巽", "离", "坤", "坤", "兑", "坎", "坎"],
                POSITION_GAN: ["震", "震", "离", "离", "中", "中", "兑", "兑", "坎", "坎"],
                POSITION_ZHI: ["坎", "中", "震", "震", "中", "离", "离", "中", "兑", "兑", "中", "坎"],
                POSITION_TAI_DAY: ["占门碓 外东南", "碓磨厕 外东南", "厨灶炉 外正南", "仓库门 外正南", "房床栖 外正南", "占门床 外正南", "占碓磨 外正南", "厕灶厨 外西南", "仓库炉 外西南", "房床门 外西南", "门碓栖 外西南", "碓磨床 外西南", "厨灶碓 外西南", "仓库厕 外正西", "房床炉 外正西", "占大门 外正西", "碓磨栖 外正西", "厨房床 外正西", "仓库碓 外西北", "房床厕 外西北", "占门炉 外西北", "门碓磨 外西北", "厨灶栖 外西北", "仓库床 外西北", "房床碓 外正北", "占门厕 外正北", "碓磨炉 外正北", "厨灶门 外正北", "仓库栖 外正北", "占房床 房内北", "占门碓 房内北", "碓磨厕 房内北", "厨灶炉 房内北", "门仓库 房内北", "床房栖 房内中", "占门床 房内中", "占碓磨 房内南", "厨磨厕 房内南", "仓库炉 房内南", "房床门 房内西", "门碓栖 房内东", "碓磨床 房内东", "厨灶碓 房内东", "仓库厕 房内东", "房床炉 房内中", "占大门 外东北", "碓磨栖 外东北", "厨灶床 外东北", "仓库碓 外东北", "房床厕 外东北", "占门炉 外东北", "门碓磨 外正东", "厨灶栖 外正东", "仓库床 外正东", "房床碓 外正东", "占门厕 外正东", "碓磨炉 外东南", "厨灶门 外东南", "仓库栖 外东南", "占房床 外东南"],
                POSITION_TAI_MONTH: ["占房床", "占户窗", "占门堂", "占厨灶", "占房床", "占床仓", "占碓磨", "占厕户", "占门房", "占房床", "占灶炉", "占房床"],
                ZHI: ["", "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
                ZHI_XING: ["", "建", "除", "满", "平", "定", "执", "破", "危", "成", "收", "开", "闭"],
                JIA_ZI: ["甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉", "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯", "甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑", "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"],
                TIAN_SHEN: ["", "青龙", "明堂", "天刑", "朱雀", "金匮", "天德", "白虎", "玉堂", "天牢", "玄武", "司命", "勾陈"],
                ZHI_TIAN_SHEN_OFFSET: {
                    "子": 4,
                    "丑": 2,
                    "寅": 0,
                    "卯": 10,
                    "辰": 8,
                    "巳": 6,
                    "午": 4,
                    "未": 2,
                    "申": 0,
                    "酉": 10,
                    "戌": 8,
                    "亥": 6
                },
                TIAN_SHEN_TYPE: {
                    "青龙": "黄道",
                    "明堂": "黄道",
                    "金匮": "黄道",
                    "天德": "黄道",
                    "玉堂": "黄道",
                    "司命": "黄道",
                    "天刑": "黑道",
                    "朱雀": "黑道",
                    "白虎": "黑道",
                    "天牢": "黑道",
                    "玄武": "黑道",
                    "勾陈": "黑道"
                },
                TIAN_SHEN_TYPE_LUCK: {
                    "黄道": "吉",
                    "黑道": "凶"
                },
                PENGZU_GAN: ["", "甲不开仓财物耗散", "乙不栽植千株不长", "丙不修灶必见灾殃", "丁不剃头头必生疮", "戊不受田田主不祥", "己不破券二比并亡", "庚不经络织机虚张", "辛不合酱主人不尝", "壬不泱水更难提防", "癸不词讼理弱敌强"],
                PENGZU_ZHI: ["", "子不问卜自惹祸殃", "丑不冠带主不还乡", "寅不祭祀神鬼不尝", "卯不穿井水泉不香", "辰不哭泣必主重丧", "巳不远行财物伏藏", "午不苫盖屋主更张", "未不服药毒气入肠", "申不安床鬼祟入房", "酉不会客醉坐颠狂", "戌不吃犬作怪上床", "亥不嫁娶不利新郎"],
                NUMBER: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                MONTH: ["", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
                SEASON: ["", "孟春", "仲春", "季春", "孟夏", "仲夏", "季夏", "孟秋", "仲秋", "季秋", "孟冬", "仲冬", "季冬"],
                SHENGXIAO: ["", "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
                DAY: ["", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"],
                YUE_XIANG: ["", "朔", "既朔", "蛾眉新", "蛾眉新", "蛾眉", "夕月", "上弦", "上弦", "九夜", "宵", "宵", "宵", "渐盈凸", "小望", "望", "既望", "立待", "居待", "寝待", "更待", "渐亏凸", "下弦", "下弦", "有明", "有明", "蛾眉残", "蛾眉残", "残", "晓", "晦"],
                XIU: {
                    "申1": "毕",
                    "申2": "翼",
                    "申3": "箕",
                    "申4": "奎",
                    "申5": "鬼",
                    "申6": "氐",
                    "申0": "虚",
                    "子1": "毕",
                    "子2": "翼",
                    "子3": "箕",
                    "子4": "奎",
                    "子5": "鬼",
                    "子6": "氐",
                    "子0": "虚",
                    "辰1": "毕",
                    "辰2": "翼",
                    "辰3": "箕",
                    "辰4": "奎",
                    "辰5": "鬼",
                    "辰6": "氐",
                    "辰0": "虚",
                    "巳1": "危",
                    "巳2": "觜",
                    "巳3": "轸",
                    "巳4": "斗",
                    "巳5": "娄",
                    "巳6": "柳",
                    "巳0": "房",
                    "酉1": "危",
                    "酉2": "觜",
                    "酉3": "轸",
                    "酉4": "斗",
                    "酉5": "娄",
                    "酉6": "柳",
                    "酉0": "房",
                    "丑1": "危",
                    "丑2": "觜",
                    "丑3": "轸",
                    "丑4": "斗",
                    "丑5": "娄",
                    "丑6": "柳",
                    "丑0": "房",
                    "寅1": "心",
                    "寅2": "室",
                    "寅3": "参",
                    "寅4": "角",
                    "寅5": "牛",
                    "寅6": "胃",
                    "寅0": "星",
                    "午1": "心",
                    "午2": "室",
                    "午3": "参",
                    "午4": "角",
                    "午5": "牛",
                    "午6": "胃",
                    "午0": "星",
                    "戌1": "心",
                    "戌2": "室",
                    "戌3": "参",
                    "戌4": "角",
                    "戌5": "牛",
                    "戌6": "胃",
                    "戌0": "星",
                    "亥1": "张",
                    "亥2": "尾",
                    "亥3": "壁",
                    "亥4": "井",
                    "亥5": "亢",
                    "亥6": "女",
                    "亥0": "昴",
                    "卯1": "张",
                    "卯2": "尾",
                    "卯3": "壁",
                    "卯4": "井",
                    "卯5": "亢",
                    "卯6": "女",
                    "卯0": "昴",
                    "未1": "张",
                    "未2": "尾",
                    "未3": "壁",
                    "未4": "井",
                    "未5": "亢",
                    "未6": "女",
                    "未0": "昴"
                },
                XIU_LUCK: {
                    "角": "吉",
                    "亢": "凶",
                    "氐": "凶",
                    "房": "吉",
                    "心": "凶",
                    "尾": "吉",
                    "箕": "吉",
                    "斗": "吉",
                    "牛": "凶",
                    "女": "凶",
                    "虚": "凶",
                    "危": "凶",
                    "室": "吉",
                    "壁": "吉",
                    "奎": "凶",
                    "娄": "吉",
                    "胃": "吉",
                    "昴": "凶",
                    "毕": "吉",
                    "觜": "凶",
                    "参": "吉",
                    "井": "吉",
                    "鬼": "凶",
                    "柳": "凶",
                    "星": "凶",
                    "张": "吉",
                    "翼": "凶",
                    "轸": "吉"
                },
                XIU_SONG: {
                    "角": "角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，堂前立见主人凶。",
                    "亢": "亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。",
                    "氐": "氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。",
                    "房": "房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。",
                    "心": "心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从，婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。",
                    "尾": "尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。",
                    "箕": "箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰禄乐安康。",
                    "斗": "斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。",
                    "牛": "牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。",
                    "女": "女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。",
                    "虚": "虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。",
                    "危": "危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。",
                    "室": "室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。",
                    "壁": "壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉著祖鞭。",
                    "奎": "奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。",
                    "娄": "娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。",
                    "胃": "胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。",
                    "昴": "昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。",
                    "毕": "毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。",
                    "觜": "觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。",
                    "参": "参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。",
                    "井": "井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。",
                    "鬼": "鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。",
                    "柳": "柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰驼背曲似弓弯，更有棒刑宜谨慎，妇人随客走盘桓。",
                    "星": "星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。",
                    "张": "张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。",
                    "翼": "翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。",
                    "轸": "轸星临水造龙宫，代代为官受皇封，富贵荣华增寿禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。"
                },
                ZHENG: {
                    "角": "木",
                    "井": "木",
                    "奎": "木",
                    "斗": "木",
                    "亢": "金",
                    "鬼": "金",
                    "娄": "金",
                    "牛": "金",
                    "氐": "土",
                    "柳": "土",
                    "胃": "土",
                    "女": "土",
                    "房": "日",
                    "星": "日",
                    "昴": "日",
                    "虚": "日",
                    "心": "月",
                    "张": "月",
                    "毕": "月",
                    "危": "月",
                    "尾": "火",
                    "翼": "火",
                    "觜": "火",
                    "室": "火",
                    "箕": "水",
                    "轸": "水",
                    "参": "水",
                    "壁": "水"
                },
                ANIMAL: {
                    "角": "蛟",
                    "斗": "獬",
                    "奎": "狼",
                    "井": "犴",
                    "亢": "龙",
                    "牛": "牛",
                    "娄": "狗",
                    "鬼": "羊",
                    "女": "蝠",
                    "氐": "貉",
                    "胃": "彘",
                    "柳": "獐",
                    "房": "兔",
                    "虚": "鼠",
                    "昴": "鸡",
                    "星": "马",
                    "心": "狐",
                    "危": "燕",
                    "毕": "乌",
                    "张": "鹿",
                    "尾": "虎",
                    "室": "猪",
                    "觜": "猴",
                    "翼": "蛇",
                    "箕": "豹",
                    "壁": "獝",
                    "参": "猿",
                    "轸": "蚓"
                },
                GONG: {
                    "角": "东",
                    "井": "南",
                    "奎": "西",
                    "斗": "北",
                    "亢": "东",
                    "鬼": "南",
                    "娄": "西",
                    "牛": "北",
                    "氐": "东",
                    "柳": "南",
                    "胃": "西",
                    "女": "北",
                    "房": "东",
                    "星": "南",
                    "昴": "西",
                    "虚": "北",
                    "心": "东",
                    "张": "南",
                    "毕": "西",
                    "危": "北",
                    "尾": "东",
                    "翼": "南",
                    "觜": "西",
                    "室": "北",
                    "箕": "东",
                    "轸": "南",
                    "参": "西",
                    "壁": "北"
                },
                SHOU: {
                    "东": "青龙",
                    "南": "朱雀",
                    "西": "白虎",
                    "北": "玄武"
                },
                FESTIVAL: {
                    "1-1": "春节",
                    "1-15": "元宵节",
                    "2-2": "龙头节",
                    "5-5": "端午节",
                    "7-7": "七夕节",
                    "8-15": "中秋节",
                    "9-9": "重阳节",
                    "12-8": "腊八节"
                },
                OTHER_FESTIVAL: {
                    "1-4": ["接神日"],
                    "1-5": ["隔开日"],
                    "1-7": ["人日"],
                    "1-8": ["谷日", "顺星节"],
                    "1-9": ["天日"],
                    "1-10": ["地日"],
                    "1-20": ["天穿节"],
                    "1-25": ["填仓节"],
                    "1-30": ["正月晦"],
                    "2-1": ["中和节"],
                    "2-2": ["社日节"],
                    "3-3": ["上巳节"],
                    "5-20": ["分龙节"],
                    "5-25": ["会龙节"],
                    "6-6": ["天贶节"],
                    "6-24": ["观莲节"],
                    "6-25": ["五谷母节"],
                    "7-14": ["中元节"],
                    "7-22": ["财神节"],
                    "7-29": ["地藏节"],
                    "8-1": ["天灸日"],
                    "10-1": ["寒衣节"],
                    "10-10": ["十成节"],
                    "10-15": ["下元节"],
                    "12-7": ["驱傩日"],
                    "12-16": ["尾牙"],
                    "12-24": ["祭灶日"]
                },
                CHONG: {
                    "子": "午",
                    "丑": "未",
                    "寅": "申",
                    "卯": "酉",
                    "辰": "戌",
                    "巳": "亥",
                    "午": "子",
                    "未": "丑",
                    "申": "寅",
                    "酉": "卯",
                    "戌": "辰",
                    "亥": "巳"
                },
                CHONG_GAN: {
                    "甲": "戊",
                    "乙": "己",
                    "丙": "庚",
                    "丁": "辛",
                    "戊": "壬",
                    "己": "癸",
                    "庚": "甲",
                    "辛": "乙",
                    "壬": "丙",
                    "癸": "丁"
                },
                CHONG_GAN_BAD: {
                    "庚": "甲",
                    "辛": "乙",
                    "壬": "丙",
                    "癸": "丁"
                },
                CHONG_GAN_TIE: {
                    "甲": "己",
                    "乙": "戊",
                    "丙": "辛",
                    "丁": "庚",
                    "戊": "癸",
                    "己": "壬",
                    "庚": "乙",
                    "辛": "甲",
                    "壬": "丁",
                    "癸": "丙"
                },
                CHONG_GAN_TIE_GOOD: {
                    "甲": "己",
                    "丙": "辛",
                    "戊": "癸",
                    "庚": "乙",
                    "壬": "丁"
                },
                SHA: {
                    "子": "南",
                    "丑": "东",
                    "寅": "北",
                    "卯": "西",
                    "辰": "南",
                    "巳": "东",
                    "午": "北",
                    "未": "西",
                    "申": "南",
                    "酉": "东",
                    "戌": "北",
                    "亥": "西"
                },
                POSITION_DESC: {
                    "坎": "正北",
                    "艮": "东北",
                    "震": "正东",
                    "巽": "东南",
                    "离": "正南",
                    "坤": "西南",
                    "兑": "正西",
                    "乾": "西北",
                    "中": "中宫"
                },
                NAYIN: {
                    "甲子": "海中金",
                    "甲午": "沙中金",
                    "丙寅": "炉中火",
                    "丙申": "山下火",
                    "戊辰": "大林木",
                    "戊戌": "平地木",
                    "庚午": "路旁土",
                    "庚子": "壁上土",
                    "壬申": "剑锋金",
                    "壬寅": "金箔金",
                    "甲戌": "山头火",
                    "甲辰": "覆灯火",
                    "丙子": "涧下水",
                    "丙午": "天河水",
                    "戊寅": "城头土",
                    "戊申": "大驿土",
                    "庚辰": "白蜡金",
                    "庚戌": "钗钏金",
                    "壬午": "杨柳木",
                    "壬子": "桑柘木",
                    "甲申": "泉中水",
                    "甲寅": "大溪水",
                    "丙戌": "屋上土",
                    "丙辰": "沙中土",
                    "戊子": "霹雳火",
                    "戊午": "天上火",
                    "庚寅": "松柏木",
                    "庚申": "石榴木",
                    "壬辰": "长流水",
                    "壬戌": "大海水",
                    "乙丑": "海中金",
                    "乙未": "沙中金",
                    "丁卯": "炉中火",
                    "丁酉": "山下火",
                    "己巳": "大林木",
                    "己亥": "平地木",
                    "辛未": "路旁土",
                    "辛丑": "壁上土",
                    "癸酉": "剑锋金",
                    "癸卯": "金箔金",
                    "乙亥": "山头火",
                    "乙巳": "覆灯火",
                    "丁丑": "涧下水",
                    "丁未": "天河水",
                    "己卯": "城头土",
                    "己酉": "大驿土",
                    "辛巳": "白蜡金",
                    "辛亥": "钗钏金",
                    "癸未": "杨柳木",
                    "癸丑": "桑柘木",
                    "乙酉": "泉中水",
                    "乙卯": "大溪水",
                    "丁亥": "屋上土",
                    "丁巳": "沙中土",
                    "己丑": "霹雳火",
                    "己未": "天上火",
                    "辛卯": "松柏木",
                    "辛酉": "石榴木",
                    "癸巳": "长流水",
                    "癸亥": "大海水"
                },
                WU_XING_GAN: {
                    "甲": "木",
                    "乙": "木",
                    "丙": "火",
                    "丁": "火",
                    "戊": "土",
                    "己": "土",
                    "庚": "金",
                    "辛": "金",
                    "壬": "水",
                    "癸": "水"
                },
                WU_XING_ZHI: {
                    "寅": "木",
                    "卯": "木",
                    "巳": "火",
                    "午": "火",
                    "辰": "土",
                    "丑": "土",
                    "戌": "土",
                    "未": "土",
                    "申": "金",
                    "酉": "金",
                    "亥": "水",
                    "子": "水"
                },
                SHI_SHEN_GAN: {
                    "甲甲": "比肩",
                    "甲乙": "劫财",
                    "甲丙": "食神",
                    "甲丁": "伤官",
                    "甲戊": "偏财",
                    "甲己": "正财",
                    "甲庚": "七杀",
                    "甲辛": "正官",
                    "甲壬": "偏印",
                    "甲癸": "正印",
                    "乙乙": "比肩",
                    "乙甲": "劫财",
                    "乙丁": "食神",
                    "乙丙": "伤官",
                    "乙己": "偏财",
                    "乙戊": "正财",
                    "乙辛": "七杀",
                    "乙庚": "正官",
                    "乙癸": "偏印",
                    "乙壬": "正印",
                    "丙丙": "比肩",
                    "丙丁": "劫财",
                    "丙戊": "食神",
                    "丙己": "伤官",
                    "丙庚": "偏财",
                    "丙辛": "正财",
                    "丙壬": "七杀",
                    "丙癸": "正官",
                    "丙甲": "偏印",
                    "丙乙": "正印",
                    "丁丁": "比肩",
                    "丁丙": "劫财",
                    "丁己": "食神",
                    "丁戊": "伤官",
                    "丁辛": "偏财",
                    "丁庚": "正财",
                    "丁癸": "七杀",
                    "丁壬": "正官",
                    "丁乙": "偏印",
                    "丁甲": "正印",
                    "戊戊": "比肩",
                    "戊己": "劫财",
                    "戊庚": "食神",
                    "戊辛": "伤官",
                    "戊壬": "偏财",
                    "戊癸": "正财",
                    "戊甲": "七杀",
                    "戊乙": "正官",
                    "戊丙": "偏印",
                    "戊丁": "正印",
                    "己己": "比肩",
                    "己戊": "劫财",
                    "己辛": "食神",
                    "己庚": "伤官",
                    "己癸": "偏财",
                    "己壬": "正财",
                    "己乙": "七杀",
                    "己甲": "正官",
                    "己丁": "偏印",
                    "己丙": "正印",
                    "庚庚": "比肩",
                    "庚辛": "劫财",
                    "庚壬": "食神",
                    "庚癸": "伤官",
                    "庚甲": "偏财",
                    "庚乙": "正财",
                    "庚丙": "七杀",
                    "庚丁": "正官",
                    "庚戊": "偏印",
                    "庚己": "正印",
                    "辛辛": "比肩",
                    "辛庚": "劫财",
                    "辛癸": "食神",
                    "辛壬": "伤官",
                    "辛乙": "偏财",
                    "辛甲": "正财",
                    "辛丁": "七杀",
                    "辛丙": "正官",
                    "辛己": "偏印",
                    "辛戊": "正印",
                    "壬壬": "比肩",
                    "壬癸": "劫财",
                    "壬甲": "食神",
                    "壬乙": "伤官",
                    "壬丙": "偏财",
                    "壬丁": "正财",
                    "壬戊": "七杀",
                    "壬己": "正官",
                    "壬庚": "偏印",
                    "壬辛": "正印",
                    "癸癸": "比肩",
                    "癸壬": "劫财",
                    "癸乙": "食神",
                    "癸甲": "伤官",
                    "癸丁": "偏财",
                    "癸丙": "正财",
                    "癸己": "七杀",
                    "癸戊": "正官",
                    "癸辛": "偏印",
                    "癸庚": "正印"
                },
                SHI_SHEN_ZHI: {
                    "甲子癸": "正印",
                    "甲丑癸": "正印",
                    "甲丑己": "正财",
                    "甲丑辛": "正官",
                    "甲寅丙": "食神",
                    "甲寅甲": "比肩",
                    "甲寅戊": "偏财",
                    "甲卯乙": "劫财",
                    "甲辰乙": "劫财",
                    "甲辰戊": "偏财",
                    "甲辰癸": "正印",
                    "甲巳戊": "偏财",
                    "甲巳丙": "食神",
                    "甲巳庚": "七杀",
                    "甲午丁": "伤官",
                    "甲午己": "正财",
                    "甲未乙": "劫财",
                    "甲未己": "正财",
                    "甲未丁": "伤官",
                    "甲申戊": "偏财",
                    "甲申庚": "七杀",
                    "甲申壬": "偏印",
                    "甲酉辛": "正官",
                    "甲戌辛": "正官",
                    "甲戌戊": "偏财",
                    "甲戌丁": "伤官",
                    "甲亥壬": "偏印",
                    "甲亥甲": "比肩",
                    "乙子癸": "偏印",
                    "乙丑癸": "偏印",
                    "乙丑己": "偏财",
                    "乙丑辛": "七杀",
                    "乙寅丙": "伤官",
                    "乙寅甲": "劫财",
                    "乙寅戊": "正财",
                    "乙卯乙": "比肩",
                    "乙辰乙": "比肩",
                    "乙辰戊": "正财",
                    "乙辰癸": "偏印",
                    "乙巳戊": "正财",
                    "乙巳丙": "伤官",
                    "乙巳庚": "正官",
                    "乙午丁": "食神",
                    "乙午己": "偏财",
                    "乙未乙": "比肩",
                    "乙未己": "偏财",
                    "乙未丁": "食神",
                    "乙申戊": "正财",
                    "乙申庚": "正官",
                    "乙申壬": "正印",
                    "乙酉辛": "七杀",
                    "乙戌辛": "七杀",
                    "乙戌戊": "正财",
                    "乙戌丁": "食神",
                    "乙亥壬": "正印",
                    "乙亥甲": "劫财",
                    "丙子癸": "正官",
                    "丙丑癸": "正官",
                    "丙丑己": "伤官",
                    "丙丑辛": "正财",
                    "丙寅丙": "比肩",
                    "丙寅甲": "偏印",
                    "丙寅戊": "食神",
                    "丙卯乙": "正印",
                    "丙辰乙": "正印",
                    "丙辰戊": "食神",
                    "丙辰癸": "正官",
                    "丙巳戊": "食神",
                    "丙巳丙": "比肩",
                    "丙巳庚": "偏财",
                    "丙午丁": "劫财",
                    "丙午己": "伤官",
                    "丙未乙": "正印",
                    "丙未己": "伤官",
                    "丙未丁": "劫财",
                    "丙申戊": "食神",
                    "丙申庚": "偏财",
                    "丙申壬": "七杀",
                    "丙酉辛": "正财",
                    "丙戌辛": "正财",
                    "丙戌戊": "食神",
                    "丙戌丁": "劫财",
                    "丙亥壬": "七杀",
                    "丙亥甲": "偏印",
                    "丁子癸": "七杀",
                    "丁丑癸": "七杀",
                    "丁丑己": "食神",
                    "丁丑辛": "偏财",
                    "丁寅丙": "劫财",
                    "丁寅甲": "正印",
                    "丁寅戊": "伤官",
                    "丁卯乙": "偏印",
                    "丁辰乙": "偏印",
                    "丁辰戊": "伤官",
                    "丁辰癸": "七杀",
                    "丁巳戊": "伤官",
                    "丁巳丙": "劫财",
                    "丁巳庚": "正财",
                    "丁午丁": "比肩",
                    "丁午己": "食神",
                    "丁未乙": "偏印",
                    "丁未己": "食神",
                    "丁未丁": "比肩",
                    "丁申戊": "伤官",
                    "丁申庚": "正财",
                    "丁申壬": "正官",
                    "丁酉辛": "偏财",
                    "丁戌辛": "偏财",
                    "丁戌戊": "伤官",
                    "丁戌丁": "比肩",
                    "丁亥壬": "正官",
                    "丁亥甲": "正印",
                    "戊子癸": "正财",
                    "戊丑癸": "正财",
                    "戊丑己": "劫财",
                    "戊丑辛": "伤官",
                    "戊寅丙": "偏印",
                    "戊寅甲": "七杀",
                    "戊寅戊": "比肩",
                    "戊卯乙": "正官",
                    "戊辰乙": "正官",
                    "戊辰戊": "比肩",
                    "戊辰癸": "正财",
                    "戊巳戊": "比肩",
                    "戊巳丙": "偏印",
                    "戊巳庚": "食神",
                    "戊午丁": "正印",
                    "戊午己": "劫财",
                    "戊未乙": "正官",
                    "戊未己": "劫财",
                    "戊未丁": "正印",
                    "戊申戊": "比肩",
                    "戊申庚": "食神",
                    "戊申壬": "偏财",
                    "戊酉辛": "伤官",
                    "戊戌辛": "伤官",
                    "戊戌戊": "比肩",
                    "戊戌丁": "正印",
                    "戊亥壬": "偏财",
                    "戊亥甲": "七杀",
                    "己子癸": "偏财",
                    "己丑癸": "偏财",
                    "己丑己": "比肩",
                    "己丑辛": "食神",
                    "己寅丙": "正印",
                    "己寅甲": "正官",
                    "己寅戊": "劫财",
                    "己卯乙": "七杀",
                    "己辰乙": "七杀",
                    "己辰戊": "劫财",
                    "己辰癸": "偏财",
                    "己巳戊": "劫财",
                    "己巳丙": "正印",
                    "己巳庚": "伤官",
                    "己午丁": "偏印",
                    "己午己": "比肩",
                    "己未乙": "七杀",
                    "己未己": "比肩",
                    "己未丁": "偏印",
                    "己申戊": "劫财",
                    "己申庚": "伤官",
                    "己申壬": "正财",
                    "己酉辛": "食神",
                    "己戌辛": "食神",
                    "己戌戊": "劫财",
                    "己戌丁": "偏印",
                    "己亥壬": "正财",
                    "己亥甲": "正官",
                    "庚子癸": "伤官",
                    "庚丑癸": "伤官",
                    "庚丑己": "正印",
                    "庚丑辛": "劫财",
                    "庚寅丙": "七杀",
                    "庚寅甲": "偏财",
                    "庚寅戊": "偏印",
                    "庚卯乙": "正财",
                    "庚辰乙": "正财",
                    "庚辰戊": "偏印",
                    "庚辰癸": "伤官",
                    "庚巳戊": "偏印",
                    "庚巳丙": "七杀",
                    "庚巳庚": "比肩",
                    "庚午丁": "正官",
                    "庚午己": "正印",
                    "庚未乙": "正财",
                    "庚未己": "正印",
                    "庚未丁": "正官",
                    "庚申戊": "偏印",
                    "庚申庚": "比肩",
                    "庚申壬": "食神",
                    "庚酉辛": "劫财",
                    "庚戌辛": "劫财",
                    "庚戌戊": "偏印",
                    "庚戌丁": "正官",
                    "庚亥壬": "食神",
                    "庚亥甲": "偏财",
                    "辛子癸": "食神",
                    "辛丑癸": "食神",
                    "辛丑己": "偏印",
                    "辛丑辛": "比肩",
                    "辛寅丙": "正官",
                    "辛寅甲": "正财",
                    "辛寅戊": "正印",
                    "辛卯乙": "偏财",
                    "辛辰乙": "偏财",
                    "辛辰戊": "正印",
                    "辛辰癸": "食神",
                    "辛巳戊": "正印",
                    "辛巳丙": "正官",
                    "辛巳庚": "劫财",
                    "辛午丁": "七杀",
                    "辛午己": "偏印",
                    "辛未乙": "偏财",
                    "辛未己": "偏印",
                    "辛未丁": "七杀",
                    "辛申戊": "正印",
                    "辛申庚": "劫财",
                    "辛申壬": "伤官",
                    "辛酉辛": "比肩",
                    "辛戌辛": "比肩",
                    "辛戌戊": "正印",
                    "辛戌丁": "七杀",
                    "辛亥壬": "伤官",
                    "辛亥甲": "正财",
                    "壬子癸": "劫财",
                    "壬丑癸": "劫财",
                    "壬丑己": "正官",
                    "壬丑辛": "正印",
                    "壬寅丙": "偏财",
                    "壬寅甲": "食神",
                    "壬寅戊": "七杀",
                    "壬卯乙": "伤官",
                    "壬辰乙": "伤官",
                    "壬辰戊": "七杀",
                    "壬辰癸": "劫财",
                    "壬巳戊": "七杀",
                    "壬巳丙": "偏财",
                    "壬巳庚": "偏印",
                    "壬午丁": "正财",
                    "壬午己": "正官",
                    "壬未乙": "伤官",
                    "壬未己": "正官",
                    "壬未丁": "正财",
                    "壬申戊": "七杀",
                    "壬申庚": "偏印",
                    "壬申壬": "比肩",
                    "壬酉辛": "正印",
                    "壬戌辛": "正印",
                    "壬戌戊": "七杀",
                    "壬戌丁": "正财",
                    "壬亥壬": "比肩",
                    "壬亥甲": "食神",
                    "癸子癸": "比肩",
                    "癸丑癸": "比肩",
                    "癸丑己": "七杀",
                    "癸丑辛": "偏印",
                    "癸寅丙": "正财",
                    "癸寅甲": "伤官",
                    "癸寅戊": "正官",
                    "癸卯乙": "食神",
                    "癸辰乙": "食神",
                    "癸辰戊": "正官",
                    "癸辰癸": "比肩",
                    "癸巳戊": "正官",
                    "癸巳丙": "正财",
                    "癸巳庚": "正印",
                    "癸午丁": "偏财",
                    "癸午己": "七杀",
                    "癸未乙": "食神",
                    "癸未己": "七杀",
                    "癸未丁": "偏财",
                    "癸申戊": "正官",
                    "癸申庚": "正印",
                    "癸申壬": "劫财",
                    "癸酉辛": "偏印",
                    "癸戌辛": "偏印",
                    "癸戌戊": "正官",
                    "癸戌丁": "偏财",
                    "癸亥壬": "劫财",
                    "癸亥甲": "伤官"
                },
                ZHI_HIDE_GAN: {
                    "子": ["癸"],
                    "丑": ["己", "癸", "辛"],
                    "寅": ["甲", "丙", "戊"],
                    "卯": ["乙"],
                    "辰": ["戊", "乙", "癸"],
                    "巳": ["丙", "庚", "戊"],
                    "午": ["丁", "己"],
                    "未": ["己", "丁", "乙"],
                    "申": ["庚", "壬", "戊"],
                    "酉": ["辛"],
                    "戌": ["戊", "辛", "丁"],
                    "亥": ["壬", "甲"]
                },
                YI_JI: ["祭祀", "祈福", "求嗣", "开光", "塑绘", "齐醮", "斋醮", "沐浴", "酬神", "造庙", "祀灶", "焚香", "谢土", "出火", "雕刻", "嫁娶", "订婚", "纳采", "问名", "纳婿", "归宁", "安床", "合帐", "冠笄", "订盟", "进人口", "裁衣", "挽面", "开容", "修坟", "启钻", "破土", "安葬", "立碑", "成服", "除服", "开生坟", "合寿木", "入殓", "移柩", "普渡", "入宅", "安香", "安门", "修造", "起基", "动土", "上梁", "竖柱", "开井开池", "作陂放水", "拆卸", "破屋", "坏垣", "补垣", "伐木做梁", "作灶", "解除", "开柱眼", "穿屏扇架", "盖屋合脊", "开厕", "造仓", "塞穴", "平治道涂", "造桥", "作厕", "筑堤", "开池", "伐木", "开渠", "掘井", "扫舍", "放水", "造屋", "合脊", "造畜稠", "修门", "定磉", "作梁", "修饰垣墙", "架马", "开市", "挂匾", "纳财", "求财", "开仓", "买车", "置产", "雇庸", "出货财", "安机械", "造车器", "经络", "酝酿", "作染", "鼓铸", "造船", "割蜜", "栽种", "取渔", "结网", "牧养", "安碓磑", "习艺", "入学", "理发", "探病", "见贵", "乘船", "渡水", "针灸", "出行", "移徙", "分居", "剃头", "整手足甲", "纳畜", "捕捉", "畋猎", "教牛马", "会亲友", "赴任", "求医", "治病", "词讼", "起基动土", "破屋坏垣", "盖屋", "造仓库", "立券交易", "交易", "立券", "安机", "会友", "求医疗病", "诸事不宜", "馀事勿取", "行丧", "断蚁", "归岫", "无"],
                LU: {
                    "甲": "寅",
                    "乙": "卯",
                    "丙": "巳",
                    "丁": "午",
                    "戊": "巳",
                    "己": "午",
                    "庚": "申",
                    "辛": "酉",
                    "壬": "亥",
                    "癸": "子",
                    "寅": "甲",
                    "卯": "乙",
                    "巳": "丙,戊",
                    "午": "丁,己",
                    "申": "庚",
                    "酉": "辛",
                    "亥": "壬",
                    "子": "癸"
                },
                DAY_YI_JI: "30=192531010D:838454151A4C200C1E23221D212726,030F522E1F00=2430000C18:8319000776262322200C1E1D,06292C2E1F04=32020E1A26:791715795B0001025D,0F522E38201D=162E3A0A22:790F181113332C2E2D302F157954,7001203810=0E1A263202:79026A176576036A,522E201F05=0D19250131:7911192C2E302F00030401060F1571292A75,707C20522F=0C18243000:4F2C2E2B383F443D433663,0F01478A20151D=0E1A320226:3840,0001202B892F=14202C3808:3807504089,8829=0E1A263202:383940,6370018A75202B454F6605=32020E1A26:38394089,0001202B22=16223A0A2E:384C,8A2020=2B3707131F:2C2E5B000739337C38802D44484C2425201F1E272621,5229701535=121E2A3606:2C2E2D2B156343364C,0F4729710D708A20036A1904=0D19250131:5040262789,0F7129033B=202C380814:5040000738,0F7D7C584F012063452B35=1A2632020E:50400089,8813=1A2632020E:69687011180F791966762627201E,0352292E8034=182430000C:291503000D332E53261F2075,0F5238584F450B=000C182430:297170192C2E2D2F2B3E363F4C,0F52156320010347200B=131F2B3707:297115030102195283840D332C2E,0F1F5863201D8A02=222E3A0A16:261F1E20232289,52290058363F32=16222E3A0A:261F201E232289,8D39=0D19310125:262322271E201D21,52450F4F09=0D19253101:262322271E202189,1F4526=16222E3A0A:262322271F1E20,712906=0F1B273303:17262322274050,80387C6B2C=0915212D39:1707702C2E71291F20,0F52000106111D15=16222E3A0A:170007386A7448363F261F1E,030F79636F2026=030F1B2733:1784832C2E5B26201F,0F010D2913=182430000C:175447440D15838477656A49,2B2E1F8A202228=101C283404:70504C7889,8803=0D19250131:700F181126151E20001A7919,8D2F=0915212D39:705283845B0D2F71,0F202E4106=3606121E2A:70786289,06802E1F23=1824000C30:70076A363F,292017=202C380814:700718111A302F717566,0F2B2E2026=3B0B17232F:70545283842E71291A7933192A5D5A5040,090C384F45208A1D6B38=212D390915:7039170F45513A2C2E7129242526271F201D,00010352153A=15212D3909:703911170E2C2E2D2F4B15712952633D,092B8A2027=010D192531:702D155483840F63262720,53292F017D4F38442B2E1F4717=16222E3A0A:705C4C39171A4F0E7971295B4C5248,0F2E1F1D37=1A2632020E:2E260F27201F,523815292F1A22=0E1A260232:64262322271F2021,0F2F293822=2F3B0B1723:161A0F1526271F4C,586103473818=2430000C18:161A7889,292E1F0F386131=17232F3B0B:04795B3F651A5D,0F5201062016=14202C3808:04170F79195D1A637566363F76,01522E8A2039=132B37071F:0470170F191A134C8384662426232227201E,8D08=0D19253101:040370181123220F1326271E2021,29153B=0D19310125:040307177938494C,0F26207017=0E2632021A:0403010218111A17332C2E2D2B15713E6575,45382064291D=142C380820:04033918110F0D2C2E7129332D2B72528384547566,8D1C=1830000C24:040318111A17332C15290D200C7A,4745063835=0F2733031B:040318111A16175B795452848315302F6563395D,387029202E=14202C3808:04031975363F6366,0F5401202C5283842E2F1E=0E1A320226:0403080618111A16332E2F152A09537919702C5445490D75072B,8063203820=182430000C:04067033392C7161262322271E1D210C,8D2F=101C283404:3F4889,881C=2733030F1B:3F74397677658988,0F3847201D=293505111D:3F8B657789,0F2029702E7D35=111D293505:3F8B6589,1F200A=020E1A2632:3F656477,0F2B71292005=111D290535:3F6589,8810=0F1B273303:3F88,2B38200F1C=293505111D:0F83843D363F776424,15462F2C52032971152A=0F1B273303:0F17795B54838458,52807C3811=121E2A3606:0F172C2E387129363F7566512C2E2D4E4461,01034752203A=172F3B0B23:0F171511793F76584C,0347200C1D20=2D39091521:0F175B3975660745514F2B4825201E211D,010352292E2E=0F1B273303:0F170070792C2E261F,040341232228=05111D2935:0F1700707129385C363F3D1F1E232226,80412B202F14=14202C3808:0F17000728705448757A,522E1F15562F05=30000C1824:0F17000102061979454F3A15477677,241F8A2021=2F3B0B1723:0F17000102060370392E52838453331F,452F2C266A79292B203810=0C18243000:0F170001020E032A70692C2E302F802D2B0D7129474C201F2322,5211183809615D34=1A2632020E:0F171170792F5B1566770001032C2B802D,29387C207134=14202C3808:0F0D33000103452E528384297115752620,63386F7014=15212D3909:0F7045332C2E71201F1D21,4701155229530327=101C283404:0F70161715232238838426271F20,7D035219=121E2A3606:0F705B0004037C5D15653F1F26,522B473809=131F2B0737:0F705215261E20,012E1F25=182430000C:0F707B7C00012F75,52201B=2531010D19:0F706A151E201D528384544466,47010C2E292F2C3820=14202C3808:0F707500261E20,382E1F05=3606121E2A:0F161A17452F0D33712C2E2B5443633F,150170208A0327=0E1A263202:0F150370002E0D3979528384532971331F1E20,477D0D=06121E2A36:0F5B8370000102060403161A494447,386A418A201A=17232F3B0B:0F03700D332C2E2971152F52838463,01004547380C26=101C283404:0F03700D33195284835329711563,01260038206B0E=131F2B3707:0F03706A4F0D332C528384532E29711563,450075000F=131F2B3707:0F0370010239332E2C19528384532971156375262720,8D18=17232F3B0B:0F0370390D332C192E2971637547202322,581528=0E1A263202:0F0302791566046F,29710D722A38528384202E4530=0E1A263202:0F030102392E15634447001F1E,293845200D707538=1E2A360612:0F0300017039712952542D2C302F80380D2A363F3349483E616320,1118150C1F2E20=33030F1B27:0F03000102700D29713963451F0C20,528338542F15806128=121E2A3606:0F030001027039452971150D332C2F6327,2052838403=2C38081420:0F030001022A0D3945297115528384630D7020,476A382E1F4426=010D192531:0F03390D332C1929711563261D2E2322,382000521118750C706B15=131F2B3707:0F033915666A52261E272048,382E2F6329712C0114=0D19253101:0F52838403700D332C29712E1F27201E2322,1545017505=131F2B3707:0F528400012E7129,092026=3707131F2B:0F528471295B795D2B155333565A446375661F201E272621,00016B0C4113=14202C3808:0F280001363F8B4326232220,2E1F47032F7D35=16222E3A0A:0F0211195465756679,2F384570202B6A10=15212D3909:0F0102700D332C2E2F0319528384531529716345261F2322,8D32=101C283404:0F0102037039330D5284832971152E1F0C,0026206B37=16222E3A0A:0F003854,20521D2106=020E1A2632:0F00175058,5D6B80382E16=1B2733030F:0F00701784831952712C2E1526271F,033806201F=2B3707131F:0F00701A17830E544C5C0E78,7129632E1F38208A452F16=15212D3909:0F00040370396A742E15444948,458A384F2021=16222E3A0A:0F005B261F20,2E2F1D=2531010D19:0F0003450D3329712C2E2F1575,528A63705A20587D7C12=17232F3B0B:0F00030D70332C2E3952838453542971156375,6B2019=1B2733030F:0F000301020D297115332E1F0C,165220262E=121E2A3606:0F00030102700D332E2C192971155383846375261F1E20,8D1F=33030F1B27:0F00030102700D19297115332C2B535448,2E45208A00=2632020E1A:0F00030102705283842E544779,2920454F754C3836=16222E3A0A:0F0052037029710D332C15,7545584F8A201D2121=121E2A3606:0F00074850,8A2036=0D25310119:0F00071A706A717677492923221E202726,80522E1F39=1E2A360612:0F006A385040740717,1F70631E=212D390915:0F006A1938271779,565A4575522F801F1E632B=121E2A3606:0F00010D0302703352838453297115632E,208A454F2B=0E1A263202:0F000170390D332E2971152F63751F1E20,52846A381F=14202C3808:0F000106387129,2E1F24=14202C3808:0F0001062E7129,522010=0814202C38:0F0001062871292E7C528384032C5C2A15767765,11185D8A206B08=131F2B0737:0F0001067C1F20,522900=202C380814:0F0001020D700339332C192A83842971152E1F0C20262322,065256386110=111D293505:0F000102700D332C2E297115383F631F20,0347562B=14202C3808:0F000102700D332C712E15261F201E,80036A61473831=0C18243000:0F000102700D335283845329711563,38048A7D45202A=14202C3808:0F000102702E15471F1E,294F2B452C2F268011=0D19253101:0F0001022E792D3E75663D19,472063703852292B39=222E3A0A16:0F0001022E154826271F1E203874362322,036312=0D19253101:0F000102032971152C2E19,4720637038522B15=111D293505:0F000102030D70332E3919528384532971152B2F201F0C,8D1B=232F3B0B17:0F000102030D7033528384534529711520,63475814=131F2B3707:0F000102030D332C2E195283845329716375261E2322,8D19=15212D3909:0F00010203700D332C2E1929711552838453637526202322,8D09=111D293505:0F00010203700D332E2F192971152B52838453631F20,8D33=1A2632020E:0F00010203700D332E2F1929711552838453261F201E2322,8D03=2E3A0A1622:0F0001020370332C2E2F1575261F,2971476A458352380C=111D293505:0F0001020370332E2F0D19297115637566302B2C3979,8D08=000C182430:0F000102037039297175261F1D21,454F2E1563410F=17232F3B0B:0F0001020370390D3319297115632E2C752620212322,8D07=3606121E2A:0F0001020370390D332C1929712E157563548384534C,20248A38=16222E3A0A:0F0001020370390D1952838453542971631F0C,152036=14202C3808:0F00010203703915632719792322,80262045297158750F=111D293505:0F00010203528384157033,752971206B452F2B262E05=3404101C28:0F00010206030D7129302F79802D7C7C2B5C4744,11701D2052843833=111D293505:0F00010206181139702E1F686F6A792D2C2E304E15337566491F23221D21,52296B0D800D=15212D3909:0F000102070D70332C2E19528384297115637526201E2322,8D05=2C38081420:0F0001021A175D2C19152E302F7183846379,8A20704F7545410A=131F2B3707:0F001A651707,565A58202E1F476320=121E36062A:0F11707B7C5271291E20,2E1F39=111D293505:0F11700001522E71291F20,2B07=131F2B0737:0F11700001397129,2E2002=111D293505:0F11707129,2E1F2002=131F37072B:0F1152702E2F71291F20,000103=131F37072B:0F1152702E2F71291F20,7A3A=111D293505:0F117B7C2C2E71291F20,520300=111D350529:0F110001702E2F71291F20,0621=101C280434:0F11000170717B,522E1F0A=06121E2A36:0F110001708471292E1F20,03388051561C=121E2A3606:0F1100017B7C702E7129,522B22=2D39091521:0F110039702C2E522F1574487B7C2D4E804B,098A204538612B=05111D2935:0F1118795B65170002195D,52382E8A201E=2531010D19:0F111829711500010370390D332E750C201F,4552832F382B8004=2A3606121E:0F1118175C000301027039450D29332C2E2F15631F,8A582020=31010D1925:0F1118032A0D545283841A802D2C2E2B71296366774744201F26232221,010900150C06=2C38081420:0F11180300706A2E1549466319,292F26806B382B20754506=2E3A0A1622:0F1118528384530001035C53702971152B332C2E63201F1E23222621,6B75452D4F802E=111D293505:0F1118060300017B7C792E39767566261F20,7129805136=232F3B0B17:0F111800171A454F514E3A3871157765443D23221E262720,80612E1F1C=212D390915:0F11180003706A4F0D332C2E1929711571335363751F20262322,524746416128=3B0B17232F:0F111800037039450D2971332C632026,1F2E2B38528327=3B0B17232F:0F11180006032A0D700D332E011954838471152C202322,58477D630C=0814202C38:0F1118000106287129705B032C2E302F802D4E2B201F,528458384108=380814202C:0F11180001027039302971542F7526201E,63472E151F583A=1E2A360612:0F1118000102030D70332C2E192971158384535426201E2322,471F1B=1F2B370713:0F1118000102030D70332C2E195283845329711563261F0C20,4745752522=3505111D29:0F1118000102030D70332E2C192971153953631F0C262720,5284612528=390915212D:0F111800010203700D332C2E192971152F4B49471F270C2322,52562B2029=390915212D:0F111800010203391929710D1552838453,2075708A456309410F=0A16222E3A:0F111800010206032A0D09717029092D302F1575761320,521F47251D=1F2B370713:0F1118000102111A1703154F2C2E382D2F807566,7163708A1F207D2A=05111D2935:0F111800017C5C2C2E7129,527015382021=2B3707131F:0F11185C0370332D152322528384636626271E,2F292C2E1F00010601=2430000C18:0F11185C0001092A0D7014692983847B7C2C2E302F802D2B,06454F208A2E=0D19253101:0F11181200171A7919547638,5215201D09=3A0A16222E:0F1A1716007015713F261F2720,5263587D2B470304=111D293505:0F1A0070153871291F20,7A7629=010D192531:0F181179005B712980152D4E2A0D533358,5270208A11=0814202C38:0F181138171A7975665B52845415,47701F8A2013=121E2A3606:0F181117795B5C007054292A0D690403332D2C2E66632B3D,8A454F3822=121E2A3606:0F1811705200012E71291F20,382A=16222E0A3A:0F1811705200012E71291F20,062B27=14202C0838:0F18117052000171291E20,2E1F27=16222E0A3A:0F18117000012E71291F20,527A06=111D290535:0F1811700001062E2F1F20,712912=14202C3808:0F181100062839707952542C2E302F03565A7566441F1E,0D29802B2029=1824300C00:0F181100012C2E7129,522025=121E2A0636:0F18110001261F20,03522E=0915212D39:0F18110001702C2E7129,6F454F098A2025=030F1B2733:0F18110001702C2E71291F0D2B152F2127,5283162014=16222E3A0A:0F18110001707B7C0D7129,52565A152B2034=17232F3B0B:0F1811000104037115454F7677657B7C392023222726210C,52092E1F27=3707131F2B:0F181100010603797B7C802D302F2B6743441F202322,2952477D2528=14202C0838:0F181100017B7C2E71291F20,036F33=0D19253101:0F18110001027939706954528384685D15565A75201E1D26,29032E11=182430000C:0F1811000102062A0D2C2D804B2B672E2F7129,70471F8A2030=17232F3B0B:0F5C707971292C2E0E032A0D6A79804B2D8C2B3348634C,52110915462031=15212D3909:0F5C5B0001032A0D7052842C2E71291F20,1118517D462B=0F1B273303:0F5C111800015B712952841F20,756A251A=2733030F1B:1545332C2E2F84836375662620,0F0003700D71292B1C=0E1A320226:1516291211020056,06382007=000C182430:1551000403706A454F3A3D771F262322271E1D21,382B41522016=17232F3B0B:1500443626271F1E,29710F47380D19520337=182430000C:150001021745512E443D65262322,2B63387C18=192531010D:151A83842627202322,580F7003632E1F297C26=0E1A263202:15391A302F83845475662627201E,0F702E4629004708=3606121E2A:5B000102073911522C302F3A678C363F33490D482425200C1E2322,0F15382E1F6116=1E2A360612:5B71297000010611182A0D39792C2E332D4E712980152C1F202621,52454F3804=2C38081420:5B11180001020328700D332C2E195283847115632F751F2720,290F476630=0C18243000:201E27262322,8902=3404101C28:2A0D11180F52848353037039156358332C2E,3820002628=010D192531:4089,030F565A61206B27=1824300C00:4089,8836=1C28340410:0370833F0F6A5215,010D582E1F202C2F582938=112935051D:03700F,79192C2E2D715275262322271F201D217936=112935051D:0370110F45510D3371290941614C522623222720,8D3B=152D390921:03047039171A533852443D363F,8D11=0F1B273303:030402111A16175B4F3A2B153E0079015D5452848369026A51,7006200F05=0F1B270333:03041A174533302F56795B3E808339528454,700F292026=121E2A3606:037B7C2E2F261F20,0F14=1E2A360612:030270170F45513A2C7129528384702A0D532D2C24252623222720,155A382E1F2F=1B2733030F:03027011170D332D2C2E2F716152838454,010F201F2C=121E2A3606:03027039450D332C2F2D2971528384636626202322,581535=212D390915:03020E0F18110D332C2E2D2F4971293E615244756653,8A202531=1B2733030F:030102703945802D2C512B7129092322270C7566,112E528325=2D39091521:030102062C2E543E3D636679,380D19462971001F=293505111D:03111A171538193E3F,0F632C2E70454F200C19=17232F3B0B:031A2B7915656A,0F177001204529710D632E2F02=32020E1A26:033945302F838475262720,297071000F2E1F3810=17232F3B0B:0339332C2E1575201E26,0F520D631F29712A72473826=390915212D:0339332C2E302B66201D1F27,0D2971010015520F6B0E=15212D3909:03392D2E332F211D201F1E27,0F7015380029710D195824=16223A0A2E:036F791E20,522E1F31=1D29350511:5283845B79037B7C802D2C2E4E302F2B38493D4463664C1F2021,0F0D712917=15212D3909:5283845303702971150D2F,388A6A6D0F2012=111D293505:528384530370331929272E2B2F631F1D20,0F156B380E=0D19253101:528384530339454F0D297115332E2F637520,0F00705802=2A3606121E:528384530339332E152C2F58631F20,380D000F2900=283404101C:528384530003010215392C20,1112180F29560D2E1F754511=15212D3909:5283845300031929150D332C2E63,0F217045208A717521=3505111D29:5283845300010670528384802D2C2E4E155B201F1E232221,380F71296A0E=17232F3B0B:5283845354037029711575262720,631F58000F2E38010D=111D293505:528384000103451915332C2E631F2720,29716A0D0F7019=1D29350511:5283840001032E1570637566302F391F,0F4729712030=16222E3A0A:5283845479036A2627201E,0F380D70297115012F1A=1F2B370713:528384542E03700F1118705469565A7566631F1E2021,297138000C31=121E2A3606:52838454443D65002C2E15495D1F,0F417D712B38630F=0D19253101:5283845444360F11756415,2C2F29016B472E2B20381D=212D390915:528384545363000103332E15,0F1F197029710D757D2032=121E2A3606:528384546315332C2E2F26201F2322,0F0D45002971756B17=192531010D:52838454754C2971150301022E,0F63206A0938268A4117=1B2733030F:52848353000103297115332E2F19,0F8A514F6A6620754526=1824300C00:528403395B2F1E20,0F012D=0B17232F3B:5254700001020612692D4E584647336375662E1F1E,71290D262037=131F2B3707:525400045B17791A565D754C7866,2E1F207C34=0F2733031B:483F89,8838=232F3B0B17:767779392623222789,152B1F1D200E=0A16222E3A:767789,528300292025=14202C3808:7665261F20,0F291A=222E3A0A16:7665262322271F201E21,0F0029807124=1824000C30:7889,292E1F24=101C283404:8D,8832=1D29350511:63767789,522E0006206B31=131F2B3707:7B7C343589,0F7038=2632020E1A:7B7C343589,520F20=0E1A260232:7B34,8812=1C28340410:02703918110F7919155283756626232227201E,012C2E1F0C29=121E2A3606:020F11161A17454F2C2E2D302F2B38434C,2070016328=1824300C00:02060418110D332C2E415B637566262322271F20,520F23=142038082C:07504089,0F010C=15212D3909:07262723221F40,0F7129523B=2430000C18:0717363F1A2C4F3A67433D8B,71290F0103471A=2531010D19:0704031118528384542D2E4E49201F1E1D2127,292B000C3B=283404101C:073F7765644889,012014=111D293505:074048261F202322,0F71454F1500018008=111D293505:07404826271F1E2089,882C=0D19253101:07565A5283845463756677261F20,010F15296120=2F3B0B1723:07487677393F89,0F2952151F1D30=111D293505:074889,06520F3808=17232F3B0B:074889,883B=131F2B3707:074889,8832=15212D3909:07762623221F1E20,000F1552296B2F2A=0D19253101:0776776A742623221F200C211D1E,11180F2F5206802B0B=04101C2834:0776776564,000F29382011=101C283404:0706397B7C794C636A48,520F7129472026=14202C3808:077C343589,880A=380814202C:076A79040363660F5D363F,52292E1F20382F15560123=16223A0A2E:076A696819,0F2918=222E3A0A16:076A171552847983546578,712970010F2D=182430000C:076A48,45752F29384C0F204F612B30=131F2B3707:076A7626271F1E20,0D0F29382F2E0E=0814202C38:07343589,065238=1C28340410:070039201F0C2789,06030F292F23=101C280434:076564,0F292002=0D19253101:073918111A17332C2E71292322271F1E20481D45548384,38002F702A=1824300C00:7C343589,8801=172F3B0B23:6A79363F65,0F292B7118=1B2733030F:6A170F19,5845754C201F4F382430=1B2733030F:6A170F1963766F,5452201F32=0C18243000:6A0339332C20528384531563,29713801000F0C47806B3B=2A3606121E:77766564000789,0F52201E8A01=202C380814:1F2027260076232289,0F29528339=0F1B330327:3435,8809=0F1B273303:34357B7C,8818=121E2A3606:34357B7C7789,0F291D=232F3B0B17:34357B7C89,0F2021=33030F1B27:34357B7C89,030F27=390915212D:34357B7C89,712917=1D29350511:3435073989,8802=2C38081420:34357C89,0111180F292006=30000C1824:34357C89,71291A=14202C3808:34357C89,8A2036=182430000C:3435000789,8835=232F3B0B17:34350089,0F2025=3707131F2B:34353989,0F2037=0D25310119:343589,0F52202D=0F1B273303:343589,0F7152290D=131F2B3707:343589,8830=121E2A3606:343589,881C=16222E3A0A:343589,8819=131F2B3707:343589,880F=15212D3909:343589,8832=14202C3808:343589,8813=0D19253101:343589,8811=17232F3B0B:343589,881E=142C380820:017018110F1A2E15495247838463462322271F,8D03=0F1B270333:0103040818111A155284262322271E20217A79708330,38472E631B=14202C3808:010670170F0E3A294152838454262322271F201E,2E1815442C=0F1B273303:01067071292C2E1F20,1103150F520A=17232F0B3B:010670181126271F202165,293816=182430000C:0106111839513A2C2E2D2F8C804B4723221F63,7152292037=0F2733031B:010203040618110F3315292A271D200C6339171A712C2E30491E21,7A21=0E1A260232:010206040318110F2E292A27200C70072C302F541F392B49,381512=1A2632020E:010206110F452C2E7129095B5226232227201F0C,58804B036B2B381C=142C380820:01023918112E2D493E52756624262322271F20,8D12=121E2A3606:008354,06462F2E1F27=030F1B2733:00797084831754,0F2E472D4E1F06=0D19250131:0079701811072C2E01060F33152627200C7A1A302F4576631F2B,8052382900=172F3B0B23:00790F072C2E0103047018111A262322271E7A302F5448637545,293815561E=101C340428:007952151E20,0F2E1F33=0F1B273303:007984831A160F1719,632E20471D6B01=152D390921:0079110F0304062A528423222627207A19701A2C2E2F5D83,294513=0F1B273303:0079181A165B332F2B262322271E2021030469702D4E49712930845D,454F05=152139092D:0079192E2F030417332D1552847A5D,4E201F=162E3A0A22:003826232277,632E20523A=0D19310125:0038262389,521513=1C28340410:00384089,0F202E157C07=04101C2834:00384089,152967631F=101C283404:00384740,0F2037=1C28340410:00387765504089,0F157C04=131F37072B:00385476,521F13=16222E3A0A:003854767789,2E1F522010=131F2B3707:003854637519,205D1D1F52151E210F=121E2A3606:003889,52201F1D4733=121E2A3606:003889,881F=212D390915:001D23221E2789,52290F2E1F202B=07131F2B37:002C7080305C784C62,2E1F472001=283404101C:004D64547589,0F292E=131F2B3707:005040,522E1F0F2C2004=3404101C28:005089,032C2E1F33=182430000C:005089,8815=192531010D:00261F23221E201D2189,8D12=131F2B3707:00261F2322271E200C89,8D1E=121E2A3606:0026271E20,2F2E1F33=16222E3A0A:002627241F1E20232289,8D33=14202C3808:002627651E2027232289,881B=182430000C:00262789,292C2E1F2B2F2A=07131F2B37:00262322271F1E203F8B65,52290F038002=15212D3909:001779332D2322271E2007760304,38290F1C=1F2B370713:00173883546365756619,466115201F701D47522434=0D25310119:00170F79191A6540,712909387C2015=0E1A263202:00170F332C2E2D2F802952443F26232227201F,15637C383A=132B37071F:00170F7665776489,8D2A=390915212D:00177689,0F52804F2507=2E3A0A1622:00177179546A76,0F52443D1F2D=0915212D39:0070,0F292C2E791F13=131F2B3707:007083624C,0F38202E7D4F45471F7107=380814202C:00704F0D332C2E2D15363F261F20274C,0F2906036F4703=3404101C28:00702C2E164C157126271F1E202425363F,29386A032B0F=0F1B273303:00700F1715262720,472E386309=15212D0939:007022230726,2E17712952302F15=15212D3909:00704889,8834=1C28340410:0070784889,0345201F21=2D39091521:007007482089,2E1F58470B=0D19253101:0070071A010618110F5B52846775,6326202E=16222E3A0A:00701A17794C0F302F715475,2E454F8A20243A=0F1B330327:007018111A1617192E15382627201F656477,4F090A=0F1B273303:002E2F18110F5B3315292A26271F20210C7A70710102393E19,035A37=14202C3808:002E4344793F26271F20,03702C2F292B381A31=0E1A263202:00161A5D454F153826201E27,7D0D2904=152139092D:0004037039180F332D152952262322271F0C533A83,4117804735=1F2B370713:0004037B7C0F79494766754667,80293869208A1E=162E3A0A22:00040301067018111A0F332C15292A261E200C7A791970712F5D52838454,5617454F06=3404101C28:000403110F527079156523221E2027,0129802E1F6B1D=1830000C24:0004031A170F11332C2E302F1571292A657677451949,70201D5218=102834041C:0004031811171A5B332C2E155D52,0D29204504=17233B0B2F:00040318110F1519262322271E2021,52831F3825=3B0B17232F:00046A7966444C7765,010C202F38520F70292E31=14202C3808:003F261F202789,8836=131F2B3707:003F657789,7152290F032B3A=2632020E1A:003F651F0C2027232289,0F292B=16222E3A0A:003F89,8836=212D390915:000F76,032E1F522C292B22=2B3707131F:000F7765,2E1F7C4607=0F1B273303:000F01111A1615292A2627200C2C670279538384543E49,634512=0F1B273303:000F1320,6380382936=0F2733031B:000F1323222627,2E3829031535=0D25310119:00676589,0F200F=0C18243000:00401D232289,71290F47202B=101C283404:0040395089,8803=30000C1824:004023222089,0F291118470D=0A16222E3A:004089,0F5211=1A2632020E:004089,0F0147200B=3A0A16222E:00037039454F0D332971152C4C48,090F476341382E0A=111D293505:00037039041A26271F1E202322,0F2F2C335129452E0D3A3B=222E3A0A16:000370396A450D332F4B154C,0F208A7D41381F2E14=0F1B273303:00030401061A16170F332E71292627200C02696A45514F0D2C2D4E497A,2B0B=0F1B273303:000304111A33152D2E302F71292A5284530770022B,0F6345203B=0F1B330327:00030418111617332E2D2F292A52845407020D302B,090F452001=0F1B273303:000304080618110F1A2E2D0D3371292A2C302F7566010239454E802B,632039=2430000C18:00036A7415384878,45751F20240F522E834F2E=182430000C:000301394F2E154763751F27,0F707A802629710D192035=14202C3808:0003391983845475,2E1F0F6A702971722A0D04=0F1B270333:00483F,6338200F2A=3B0B17232F:00481F2023221E27262189,0F292C2E1B=122A36061E:0076645089,8819=202C380814:0076777566262322271F201E,0F111852290D=101C283404:00763989,0F2036=1E2A360612:00788B89,0671292E25=010D192531:00784C00793989,0F29702E1F208A21=31010D1925:0006261F1E201D212322,0F2938111801=2A3606121E:00060403702C2E4C154947443D651F,0D2920=101C283404:0006522E261F20,0F712939=2632020E1A:00060724232227261F2025,520F157929382F22=31010D1925:0006547677,0F5229151F201B=0E1A320226:00061A161718110F292A0C26271F212A79700102212F49,470D=0814202C38:002876396577261F20,5283290F37=212D390915:0028397976771E232227,0F522E47442027=121E2A3606:006389,8822=101C280434:007B7C3989,881E=1830000C24:007B343589,8805=2E3A0A1622:00021719792B155D5466774962,010611180F292030=14202C3808:00020370454F0D3933192C2E2D156375261F202322,0F7123=0E1A260232:0002070818111A16175B153E445D5452848365647576,2038454F15=182430000C:0007385476771548,52061F2024=2D39091521:0007504089,0F29157030=15212D3909:0007504089,060F71702F2918=15212D3909:0007504089,880B=17232F0B3B:000770171989,0F2E20382F=0B17232F3B:00077089,522E1F8A202C=07131F2B37:000704036939487C4466,0F7011293821=1824000C30:000715547776,521F18=0E2632021A:0007030401021811171A0F2E2322271F1E706749528483,202F293800=0F1B330327:00077663,0F297138202C=0B17232F3B:000776776548,0F1118152E1F2017=121E2A3606:00077665776489,52830F208A14=1A2632020E:00077B7C4834353989,2952203B=2632020E1A:00076A386563,0F7D8A2066454F52754C15=1E2A360612:00076A0F3874485040,06707C2509=3606121E2A:00076A74504089,5229702C7D15=14202C3808:00076A74173926271F1E20,0F7029522B09=000C182430:00076A54196348767765,7920297115528A0D382B16=101C283404:000734357B7C3989,0F528329200C=06121E2A36:0007343589,290F7104=2E3A0A1622:0007343589,0F292F702012=182430000C:0007343589,0F71296B708003=15212D3909:0007343589,7129706300=0D19310125:0007010618111A332D302F15262322271E530270164C,560F712924=0E1A263202:000701020618111A175284835407230C7027,262038292C=111D293505:0007711F204840,010F29153814=17232F3B0B:00076527262322,1552835A201D0F382D=0D19253101:0007363F8B3989,09292C208A0F28=030F1B2733:000739483F66,0F208A2B0A=04101C2834:0007397B7C343589,0106522008=020E1A2632:0007396A48343589,0F203A=283404101C:00073934357B7C89,0F5223=3505111D29:000739343589,032010=0A16222E3A:000739343589,520F2F=111D293505:000739343589,8A200A=15212D0939:00077A7089,8817=17232F3B0B:000789,8D3B=172F3B0B23:000789,8815=1B2733030F:007C343589,881B=212D390915:007C343589,8812=15212D3909:006A79190F6F2627,6B46204538290B=380814202C:006A38075040,0F630141202B454F2D=121E2A3606:006A5040077448,702B2C0F2F292E=0B17232F3B:006A583F232227261F20,0F291547031C=232F3B0B17:006A6F391974,0F2E614447702C292F71201F38521F=31010D1925:0034353989,522E1F2B=0D19253101:00343589,060F5200=2A3606121E:00343589,7129565A01=131F2B3707:00343589,883B=111D350529:00343589,8800=152D390921:000150402627,0F292F2B1E=2733030F1B:00010F17505840,565A80385283846315=101C283404:000103020611187B7C2D4E616439201E0C26,522E474429=101C283404:0001030239450D297115332C2E4C,0F542070528438632C=101C283404:000103392E54837548,19700F58157A20381F=1830000C24:00010670175B71292A152322271E,03637C2B380F=0E1A263202:0001067052842E71291F20,030F38477533=131F2B3707:0001067011185B0D332C2E2D712909262322271F200C,0F5263250C=17232F0B3B:000106040318111A170F33292A26276A201D0C7A71077C1F1E74694F,520A=0D19253101:0001060403232226380F767754,568020152D=111D293505:000106025B7571295B04032D302F382B2A0D801E20,2E1F0F0F0C=0D19253101:00010607155B5C26271E2021165D83,38470F2920=16222E3A0A:000106073018110F3329271E0C7A0D75,3826201508=0F1B273303:00010618111A16332C2E2F2D27200C07483A450D,1552843825=0E1A263202:000102261E2027,03476F700F2971382E39=15212D3909:0001027007834878,2E388A201D17=131F2B3707:00010203450D3329152C2E2F5375,0F638A6A1D8A382D=0E1A263202:000102030D70332C2E29712F534426201F1E,0F38152F=121E2A3606:0001020370450D332C2E2D152971,0F52838A201D1B=1D29350511:0001020370528384631575712D2E4E3E581F1E1D,292C2B452620803A=222E3A0A16:0001020370392F2971152B54754C,458A1F0F20462C=14202C3808:0001020370392F80712B546675201E26,1F58472E152F=16222E3A0A:000102037039714515750D33,201D381F092E0F1103=32020E1A26:000102030F7039453319152E2D2F63751F0C1E20,71290D38472C=16222E3A0A:000102035270392E2D5863,0F381D2B2921201511=131F2B3707:0001020352666A,0F7020262938172F3A=2430000C18:00010203332C2E2F1558631F,0F1920707A2971264627=05111D2935:0001020311180F702E1F7952838468332D6749443E46630C1E1D21,292B2035=1C28340410:000102031118396375664819,1D4138702080291F=232F3B0B17:000102033945332C6375201D21,0F1929710D702D=101C283404:00010203390D3329152C2B751E20,2E1F54475352458316=111D293505:0001020339161745514F2C190F1A16152E2D2F304979,8D13=17232F3B0B:00010203396A79637566201D211E,29387D71707A30=101C283404:000102033911170D3319152E2F0947442627201F,8D25=3505111D29:000102031811392E2D19528384543E4463751F20,152F1A290F0D=0E1A263202:0001020626232227201E,0F2E03801F0F=101C283404:0001020617385483,030F47202B6B1B=2733030F1B:000102060F17705283797823221E2027,2E712910=121E2A3606:000102062A397129797B7C2E1F2425,162F5D20262B=182430000C:0001020603691817452C2E2D498344,412B6A09633808=3A0A16222E:0001020603700F7B7C2E1F692D48302F565A586366240C21,2B151A292039=17232F3B0B:000102060717706A33392D2E4E674447482322271E210C,71292B4F2023=33030F1B27:0001020607036A5D397C7C2163664744,0F4E25208A08=04101C2834:000102060775261F20,71290F70150C=101C283404:00010206111803302F565A802D4E2B881F261E0C,0D0F521B=16222E3A0A:00010206090D5B7952838454685D7B7C443D77656366201F1E,030F47454F24=010D192531:000102071283542627201D210C4C78,29580F2E6352032E1F01=32020E1A26:00010275261E0C2322,6303706F0F292E1F19=0E2632021A:000102081A158483262322270C1E,700F292E1B=101C283404:00011A1615262322271F1E200C214C,472B0F1124=3707131F2B:00013974150726271F1E200C,0F06520D297170382B4507=17233B0B2F:000118111A16175B154C26271E200C232279302F5D528384547543,0F297C7A03=17232F3B0B:000118111A332C2E2D1571292A2627200C7A1979,387C02=172F3B0B23:000118111A332C2E2D1571292A23222627200C7A791970302F5D5283845456,387C454F1F=0E1A263202:0001081811171A160F1571292A26271E20396476452B0D,632E523813=15212D3909:00211D1E232289,8D16=0E2632021A:006526232227201F,8926=05111D2935:00657689,6B0F5225=16223A0A2E:00654C89,8D03=2A3606121E:006589,2970472008=15212D3909:001A170F5B332E2D7129261E203E5D,1503528306=152139092D:001A170F1379232227761926,71293833=1C28340410:001A1715838444363F261F1E200C2322,0F476B52036338=14202C3808:001A2B5448701938754C,152E20242510=0D19253101:0039504089,8D39=283404101C:003926271E20747677642322480C06,2E1F38=0F1B273303:0039262322271E201D210C0748766465776A,150F382939=202C380814:0039332C2E2D2F152B4644261F1E,0F7019382971637A31=192531010D:0039787989,1F2E2010=101C283404:0039787089,2E1F8A034F206B29=05111D2935:00398B7989,0F200C=131F2B3707:0039077426271F1E20,0F29713852832B632D=14202C3808:0039076A7426271F2048,0F79197029717A382C=0E1A263202:00397C343548,8929=3B0B17232F:003934357B7C89,0F2028=16222E0A3A:0039343589,8D34=16222E3A0A:0039343589,880B=111D293505:0039343589,8805=17233B0B2F:0039343589,882E=101C283404:0039343589,8806=17233B0B2F:00390103040618111A17332C2E262322271E157A7071302F45631F2075,807C2B=0915212D39:00396577647969271E2322,52012E1F2620612D=16222E3A0A:00391A6A15384C4943363F7448,0F0379472B6319=192531010D:00394C786F89,0F2E442035=182430000C:003989,882A=121E2A3606:003989,8816=13191F252B313701070D:003989,8801=0D19310125:003989,880D=0F1B273303:0018112C2E01040607332D292A09270C2322696870302F47023945,382052801C=101C340428:00190F153917701A48,472E1F200334=1F2B370713:00195475667689,5229152E2019=222E3A0A16:004C504089,0F5215470A=3A0A16222E:005C702C2F802B154C78,5A562E1F208A45466319=102834041C:0089,090F1538=131F2B3707:71297C790001062A710F802D,5215705D2F=0E1A263202:7100030170391959152E2D2F2B39,0F201F4F75668A3824=030F1B2733:5483846376656419786A,298030201A=2430000C18:5452838479195D00012A0D7B7C2C2E3348156366242526201E,0F71292D=07131F2B37:54528384700001020339482D301571565A363F637566,06292B201F8A29=030F1B2733:54528384036F796A153E65,7129631D=2733030F1B:5452848303152F802C2D,2E1F208A7A700F29710C7D22=33030F1B27:118384155B20272E1F21,0F03380E=0E1A263202:1179302F842627201E,0071292E1F0E=06121E2A36:11177B7C52842C2E5B1F20,060071292F0F0E=101C283404:110F70528475660D7129,012E1F20262A=101C283404:110F03706A795215636626271E,0C012F38062C292B07=020E1A2632:110F0001702C2E7129201F,52060C=0E1A263202:110F00017052792E1F1E,71290D2B2020=293505111D:110F1A6A702C2E1952838453712F6375,45201500011D=101C340428:11037B7C2E2F7129,0F52200B=0E1A263202:11000170792C2E7129,0F52201F01=111D350529:110001527B7C2E75,0F2009=04101C2834:1100010206702D804E2B2620,0F52540D00=131F2B3707:110001392E1F20,0F712932=17232F3B0B:11715452838454292C2E302D4E092A0D50407970443D,5680410023=2B3707131F:111879690001020370396A2E2D528384543E637566,0F380D580F292000=222E3A0A16:111879076A1A171523221E27207924,5229700F1D012E292B0C2F0B=06121E2A36:111817000106702C2E71292A0D33802D302F4E2B44,0F52252029=07131F2B37:11180F000704030D7C684580302F153867534775,70204119=2430000C18:11180F00012A0D70795D7B7C39332D2C2E4E4863664C,064F478A2037=1E2A360612:11180F000152548471702C2E2D4E303348492A156144474C63,8A201F38450618=202C380814:11180F000128032A0D7129302C2E302F2D802B09411F1E20,5284543824=2F3B0B1723:11180F0001020370391952845329712B632E7B7C792D2C8020,385D151E=293505111D:11180F0001020339700D29716375662E1F2620,3815568016=16222E3A0A:11180F000102587B7C5283847971302F804B2B497675,09612E1F201E=232F3B0B17:11180F00010E715229702E79692C2E2D2B15093954444C6666,2F565A806132=131F2B3707:11180F71297052838454792A0D33802D153853201F1E212627,012F56476628=3707131F2B:11180F71297000010604032A0D793969302F33802D636675,201F52565A1E18=1D29350511:11180F5C000102030D332C2E195329711563261F202322,52843A=202C380814:11180370392A0D3329712C2F156375795B5D,450C8A00382E1F20010C=3A0A16222E:11185283847975661271393D692D15565A201E262322,292F060D0C02=30000C1824:111852838470795B302F404533802D152B39201E23221D212726,0F2E1F010D2923=2D39091521:111852838453546319297115030D332B2C,060F8A2E38201F38=0D19253101:111800020D041A796933483E5347446563751F1D212026,010F09150C17=2430000C18:1118000717161A2C2E3371292B56433D6375363F,0F010347208A09=020E1A2632:111800012A0D2C705271292E201F,1538617904=30000C1824:11180001032A0D70795B2C2E302F802D4E152B33714161201F26,520958470A=000C182430:11180001020439332C2E302F2B5844477515634C1F2721,0F520D19267A2971702037=232F3B0B17:111800010206037939695483845D2D2E4E446375661F262120,0F52290D7123=31010D1925:111800010206071979697C67474475664C,0F16298A2014=182430000C:11187129705B79000106032A0D397B6F7C802D2C2B61756627261E0C1D21,0F2E15414732=192531010D:111871545283842979397B7C69152B2A0D3348295324251F1D1E26,6B00702F800C201E=1F2B370713:5D0007363F232227261E21,037C0F471F202E=0E1A263202:6526232227201F,880E=111D293505:653989,8806=131F2B3707:363F6526232227201E89,8832=1A2632020E:1A454F548384,881D=121E2A3606:1A38712975,0F201A=0E1A263202:1A162623227954,0001710F290C=0F1B273303:1A16170F13152654,3852204F32=0F1B273303:1A5D453A332C2E2F4B25262322271F201E1D21,000F704723=2F3B0B1723:3950177089,522E1F0F201A=1D29350511:39701117302F713819297566,004551152C2E201D1F34=121E2A3606:393589,881A=15212D3909:393589,882C=182430000C:393589,8825=101C283404:393589,881C=2531010D19:394089,71294709636F7C440D=0D19253101:3948007889,8D38=2430000C18:394889,8811=111D293505:394889,882A=0E1A263202:3907,8807=0D19253101:39343589,8831=101C283404:393489,8801=222E3A0A16:390050404C89,0F528329692018=131F2B3707:39006A26201F,0F520D38580629712B09=380814202C:390001022C2E302F1575804B2D261F20,0D0F0319707D5229717A15=17232F3B0B:3989,8D11=0A16222E3A:181179838454637566,0F5229012007=111D293505:18117915384C,52200E=0C18243000:1811795B032C2E302F802D4163754C27261E1D2120,010D0F29521F29=16222E0A3A:1811795B5466,01202F=192531010D:181179000607040D03302F5283844F3A45512B1533664C47,090F702E208A2B=0B17232F3B:18117900012C2E5B1F20,0F710D52291A=122A36061E:181179190E332C2E2D52637566262322271F20,8D02=0F1B273303:181117332C2E1526232227201F1E3E,38030F522922=142038082C:181170792C2F7129,52201F=121E36062A:18117001061579,71292023=121E2A3606:18117000012C2E7129,522024=3505111D29:18110F390001020370390D3329711563752E1F0C201D,38525D1A=101C283404:18110F197983842E230C271F1E7A70525463,2620291503=111D293505:1811002E1F8384,0F2022=1824000C30:181100012C2E2F1F,0F3821=142038082C:181100012C2E2F1F20,0F5229=14202C3808:181100015B3875,2E2034=15212D3909:181100012A0D2C2E2F2B2D302F4E447129841F,0F09416138200F=0814202C38:181100012A0D52842953411E20,2E1F0F47152F=131F2B3707:18110001032A0D845B7129302F791533536678,0F208A1F1D33=17232F3B0B:18115452840001712970802D2C2E302F2B2A0D78791F,0F204758610E=0F1B273303:18111A16175B3315262322271F1E201D215D838454433E363F754551,00030F290D=0C18243000:18115C0001702A2C2E2F5283847129795B6375802D154C,1F208A2407=15212D3909:88,262052830D=17232F3B0B:88,8D17=102834041C:88,8D0B=15212D0939:88,8D24=121E2A0636:88,8D09=17232F0B3B:88,8D13=111D293505:1979,3F2F2E45207D37=112935051D:1966583F6589,8831=16222E3A0A:4C4089,880C=0C18243000:4C78,297172380D2A2E0F47484112=16222E3A0A:5C0F1811790070528471291F20,2F0380512514=1C28340410:5C0001020652835B0E03804B2D4E2B752024210C06,292E565A36=1A2632020E:5C11180001027170520D298483292B15200C,03802E386333=15212D3909:89,6B34=111D293505:89,8D",
                TIME_YI_JI: "0D28=,2C2E2128=,2C2E0110=,2C2E0C1F=,2C2E7A701B1C=,01022308=,01026D003026=,000106037A702D02=,000106037A702802=,000106037A703131=,000106037A70341B=,000106087A701F0E=,000106087A702E15=,000106087A702C2E0E39=,000106087A702C2E0D2B=,881727=,88032D=,88352F=,882B2F=,882125=,882A22=,880C1E=,880220=,88161A=,882018=,883422=,880113=,880B11=,883315=,882915=,881F17=,88150D=,88122E=,88302A=,88262A=,883A28=,880826=,881C2C=,881905=,882303=,880F09=,88050B=,883701=,882D01=,88060C=,882410=,881A12=,882E0E=,88380E=,881010=,883630=,881834=,880E38=,882232=,882C30=,88043A=,881E0A=,880006=,883208=,880A04=,881400=,882808=,883137=,883B35=,882737=,881D39=,88133B=,880933=,88251D=,882F1B=,881B1F=,88111D=,880719=,88391B=,88212D=,7A702C0B15=,7A70551515=,7A70552D00=,7A7D2C2E1334=382C,000106083528=382C,7A70000106080504=382C7A6C55700F197120,00010608223A=380006082C,01026D0D2C=380006082C,01027A70551D30=380006082C0F71295283,01027A703636=380006082C0F71295283,0102416D1226=380006082C7A706C550F297120,0102251C=380006082C7A6C55700F197120,01026D2300=3800010608,2C2E0324=3800010608,7A702C2E082E=3800010608,7A70552C2E3B34=38000106082C,2F8026330C=38000106082C,2F80267A701622=38000106082C7A70556C0F197120,1904=38000106082C7A6C55700F197120,1514=38000106087A70556C0F197120,2C2E3138=38000106087A70556C0F197120,2C2E0B10=38000106087A6C55700F197120,2C2E2B28=387A6C55700F197120,000106082C2E2E16=38082C,000106037A700E3A=38082C,000106037A703708=38082C6C550F197120,000106037A701B20=38082C6C550F197120,000106037A70111C=38082C6C550F197120,000106037A703A2D=2C38,000106082733=2C38,000106081015=2C38020F71295283,000106083817=2C2920,7A700F03=2C2920,616D1839=2C292070556C100F,00010608161B=2C2920020F7100010608,302B=2C2920556C0F1971,7A701E07=2C2920010F,1B1B=2C2920010670100F00,352B=2C292000010206100F70,082B=2C292000010206100F707A,0C21=2C292000010870556C100F7A,0617=2C29206C0F1971,7A70552807=2C29207A70556C0F197100010206,122F=2C29207A706C55100F1971,1017=2C29207A706C55100F1971,2731=2C20,616D0436=2C2070550F,7A7D01022E12=2C200F71295283,01021831=2C20556C0F1971,7A702912=2C20100F52,01026D1D33=2C807138152952,000106080E31=2C80713815295270556C100F,000106083201=2C80713815295270556C100F7A,000106080327=2C80713815295202100F,000106037A702B2B=2C80713815295202100F,000106037A702801=2C80713815295202100F,000106083639=2C80713815295202100F7A7055,00010608341D=2C807138152952556C100F,000106037A701B23=2C807138152952010F6C55,7A70302D=2C8071381529520102100F7A7055,2231=2C8071381529520102100F7A6C55,1F13=2C80713815295200010206100F20,7A70313B=2C8071381529526C550F,000106037A701A15=2C8071381529527A70550F,000106080219=2C8071381529527A70556C0F19,000106082E0D=2C80713815295208556C100F,000106037A70161F=2C80711529525670556C100F,000106083813=2C80711529525670556C100F,000106082D05=2C807115295256020F7A706C55,2237=2C80711529525602100F,000106081F0D=2C80711529525602100F55,000106037A702627=2C8071152952560102100F7A706C,2C33=2C8071152952560102100F7A706C,0939=2C80711529525601100F7A7055,416D021F=2C80711529525600010206100F70,0E37=2C80711529525600010870556C10,2129=2C8071152952566C550F,7A702519=2C8071152952566C550F19,7A702417=2C8071152952566C55100F19,000106037A70043B=2C8071152952566C55100F19,000106037A700C1B=2C8071152952566C55100F19,7A703B31=2C8071152952566C100F19,7A705500010603172D=2C8071152952567A70550F,416D3A2F=2C8071152952567A70556C100F,1901=2C8071152952567A706C55100F19,1119=2C8071152952567A6C55700F19,1C2B=2C80711529525608556C100F,000106037A701403=2C80711529525608556C100F,000106037A70071D=2C80711529525608100F55,000106037A701908=292C20,7A7D01026D2E0F=292C200102100F7A7055,032C=292C20000608,0102071C=292C206C550F1971,000106037A700E33=292C207A70556C000108,0503=2920550F,7A702C2E0721=2920556C100F,7A702C1225=2920000108556C100F,7A702C2E1F11=2900010870556C100F7A,032C201A11=297A70556C100F,032C200E35=297A70556C100F,032C20000A=70556C0F197120,7A7D3A29=70556C100F2C20,000106081C25=70556C100F2C20,000106082805=70556C100F2C20,000106082F20=70556C100F2C20,00010608150C=70556C100F29522002,7A7D000106033314=70556C100F,00010608032C20122A=70556C08,7A7D000106032415=70100F2C715220,000106081A0D=4B0F2C20,000106037A701902=4B0F2C20,000106080E3B=4B0F20,7A702C000106032E17=0F2C09382920,7A7000010603363B=0F2C093829206C55,000106037A70082C=0F29528320,7A2C71707D01026D0718=0F712952832C20,7A7D01021C26=0F712952832C20,7A7D01026D3918=0F712952832C2038000608,01027A70552126=0F712952832C2010,01021330=0F712952832C207A7055,01021118=0F712952832C207A7055,01023524=0F715220,7A70552C2E3419=20556C0F1971,7A702C2E1D31=2000010206100F,7A702C1E05=0270290F2C207A,00010608212C=0270550F,00010608032C200C23=0270550F,00010608032C203706=0270550F20,000106082C2E2520=0270550F20,7A7D000106032E13=0270550F202C807115295256,000106081620=020F29528320,000106087A2C71707D0112=020F2952832055,7A2C71707D000106030F08=020F20,7A7055000106032A23=020F712952832C20,2521=020F712952832C20,000106082F21=020F712952832C20,000106080003=020F712952832C20,7A700432=020F712952832C2038000106086C,7A701E03=020F712952832C2070556C10,000106081623=020F712952832C2001,2236=020F712952832C2001,000B=020F712952832C2001,7A70552C36=020F712952832C20013800,416D341E=020F712952832C20017055,7A7D0E32=020F712952832C200110,7A7D0329=020F712952832C2001107A706C55,262D=020F712952832C20017A7055,1229=020F712952832C2000010608,122D=020F712952832C2000010608,1011=020F712952832C2000010608,0A0B=020F712952832C2000010608,1F0F=020F712952832C2000010870556C,1A0E=020F712952832C206C55,7A703312=020F712952832C2010,000106037A70172A=020F712952832C2010,7A7055000106033B3B=020F712952832C2010,416D000106037A700B12=020F712952832C20106C55,000106037A700615=020F712952832C207A7055,3203=020F712952832C207A7055,201B=020F712952832C207A706C5510,2023=020F712952832C207A6C7055,2A1B=020F7129528320,000106087A702C2629=020F7129528320,7A702C2E3709=020F7129528320,7A702C000106083A24=020F7129528320,7A70552C2E341A=020F712952832038000106087A70,2C2E1C2D=020F712952832001,7A702C2E0611=020F712952832001,7A702C2E021A=020F712952832001,7A7D2C2E3815=020F71295283200100,7A702C2E3024=020F71295283200110,616D2C2E093B=020F71295283206C55,7A702C2E000106030505=020F71295283206C55,7A702C030C1A=020F71295283207A706C55,000106082C2E3705=020F712952837A706C55,032C201F0C=02550F20,000106037A700508=02550F20,000106037A703029=02550F20,000106087A702C2E3027=02550F202C807115295256,000106037A703526=02100F2C29528320,000106037A70150E=02100F2C29528320,00010608380F=02100F2C29528320,000106083527=02100F2C29528320,7A70000106031C27=02100F2C2955528320,000106081227=02100F2C29555283207A706C,00010608060F=02100F2C29555283207A706C,000106081D34=02100F7020,7A7D000106030F02=02100F7055528315,2F8026000106083920=02100F7055528315,2F802600010608212A=02100F7055528315,000106082A20=02100F7055528315,000106083A26=02100F7055528315,000106080439=02100F7055528315,000106080008=02100F7055528315,000106081B21=02100F7055528315,00010608071B=02100F7055528315,000106080D24=02100F7055528315,000106082C2E2C32=02100F7055528315,000106082C2E2B2C=02100F7055528315,00010608032C201402=02100F7055528315,00010608032C20391C=02100F7055528315,7A7D000106031F10=02100F705552831538,2F8026000106082D06=02100F70555283157A,2F802600010608290D=02100F20,7A702C000106032416=02100F20,616D000106037A702C34=02100F20292C,7A70000106031C2A=02100F528315,7A7055000106032234=02100F528315,7A7055000106032A21=02100F55528315,000106037A703313=02100F55528315,000106037A700509=02100F55528315,000106037A702D03=02100F55528315,000106037A700613=02100F55528315,000106037A702235=02100F55528315,000106037A70391D=02100F55528315,000106037A70100F=02100F55528315,000106087A702C111B=02100F55528315,000106087A702C2E2916=02100F55528315,7A2C71707D000106030430=02100F55528315,7A2C71707D000106033B32=02100F55528315,7A2C71707D000106081903=02100F55528315,7A702C2E000106033A27=02100F55528315,7A702C000106030931=02100F55528315,7A702C000106030C1C=02100F55528315,7A70000106032735=02100F555283152C8071,000106037A700B13=02100F555283152C807138,000106037A701517=02100F555283152C807138,000106037A702917=02100F555283156C,000106037A703136=550F522010,7A2C71707D01022A1E=550F715220,7A702C2E1333=550F715220,7A702C2E000106081405=556C,000106087A702C2E0433=556C,7A70000106083B38=556C0F197120,7A702C2E1E01=556C0F19712001,7A702C2E190B=556C000108,7A70230B=556C000108,7A702C2E1A0F=556C0001082C807115295256,7A701830=556C0008,7A2C71707D01023814=556C100F295220,7A2C71707D03082F=556C100F295220,7A702C0C1D=556C100F295220,7A702C2E00010603021D=556C100F295220,7A70000106031121=556C100F2952202C,7A701835=556C100F2952202C80713815,000106037A703B30=556C100F29522002,000106037A70290C=556C100F29522002,7A70000106030930=556C100F2952200238,000106037A702B27=556C100F2952200102,7A702C2E3812=556C08,000106037A701012=556C08,000106037A701621=556C08,7A702C2E000106033209=556C08,7A702C2E000106032021=556C082C807138152952,000106037A700009=556C082C807138152952,000106037A702A1D=807138152952000170100F,032C200A05=807138152952000170100F,032C20273B=8071381529527A706C550F,032C203423=80711529525600010870556C100F,032C201511=80711529525600010870556C100F,032C20183B=80711529525600010870556C100F,032C203311=010F2C80093829206C55,7A702B29=010F2C80093829206C55,7A70616D3A25=010F2C09382920,7A70550825=010F2C093829207A6C5570,201E=010F09382920,7A702C2E352E=010670100F2C71522000,1C28=010670100F7152207A6C55,2C2E2E11=0106100F7152,7A70032C203205=0106100F71526C,7A70032C202A19=0102290F20,7A702C2E2A1F=010270290F2C207A6C55,2413=010270290F2C207A6C55,0437=010270290F2C207A6C55,0935=010270550F,032C201B18=010270550F20,2B24=010270550F20,2F80261906=010270550F20,2C2E2732=010270550F20,2C2E071A=010270550F20,2C2E3700=010270550F20,7A7D1724=010270550F203800,2F80263921=010270550F202C29,416D290F=010270550F202C807138152952,1619=010270550F202C8071381529527A,3207=010270550F202C80711529525600,0829=010270550F2000,060D=010270550F2000,0001=010270550F2000,2736=010270550F207A,1B1E=010270550F207A,2C2E140B=010270550F207A6C,0114=010270550F7A6C,032C202C3B=010270550F7A6C,032C20201F=0102550F20,7A702C1A13=0102550F20,7A702C3637=0102550F20,7A702C280B=0102550F20,7A702C223B=0102550F20,7A702C032D04=0102100F2C29528320,7A701409=0102100F2C29528320,7A70552307=0102100F2C2952832000,0005=0102100F295283,032C207A700A00=0102100F2955528320,7A2C71707D082D=0102100F2955528320,7A702C2E2809=0102100F295552832000,7A702C2E2B2D=0102100F7055528315,021E=0102100F7055528315,0C20=0102100F7055528315,2F80263420=0102100F7055528315,2F80261510=0102100F7055528315,2F80262E10=0102100F7055528315,2F80262806=0102100F7055528315,2F80263134=0102100F7055528315,2F80261D38=0102100F7055528315,2F8026251A=0102100F7055528315,2F80263A2A=0102100F7055528315,2F80267A7D1120=0102100F7055528315,2F80267A7D0824=0102100F7055528315,2C2E1E00=0102100F7055528315,2C2E7A2F1D=0102100F7055528315,032C200A06=0102100F7055528315,7A7D2C2E1C2E=0102100F70555283153800,2F80261832=0102100F70555283153800,2C2E280A=0102100F70555283153800,2C2E320A=0102100F705552831538007A,2738=0102100F705552831538007A6C,2F80260720=0102100F705552831538007A6C,2F8026032B=0102100F70555283152C292000,1907=0102100F70555283152C292000,3703=0102100F70555283152C292000,2739=0102100F70555283152C29207A,251B=0102100F70555283152C29207A,2B25=0102100F70555283152C29207A6C,1331=0102100F70555283152C207A,0D29=0102100F70555283152C80717A,1B1D=0102100F70555283158071,032C200D2D=0102100F705552831500,1725=0102100F705552831500,352D=0102100F705552831500,0C19=0102100F705552831500,150F=0102100F705552831500,3025=0102100F705552831500,0F07=0102100F705552831500,1E09=0102100F705552831500,251F=0102100F705552831500,010C=0102100F705552831500,2F80261A10=0102100F705552831500,2F80261016=0102100F705552831500,2F80260934=0102100F705552831500,2F80262910=0102100F705552831500,2F80267A7D1A14=0102100F705552831500,2C2E2304=0102100F705552831500,7A7D3421=0102100F7055528315002C2920,212F=0102100F7055528315002C807138,111F=0102100F7055528315002C807138,3135=0102100F7055528315008071,032C200828=0102100F7055528315007A6C,2022=0102100F70555283156C,7A7D140A=0102100F70555283156C,7A7D2C2E2127=0102100F70555283157A,1618=0102100F70555283157A,0B0F=0102100F70555283157A,1836=0102100F70555283157A,172E=0102100F70555283157A,2F8026352A=0102100F70555283157A,2F80262B2E=0102100F70555283157A,2F8026082A=0102100F70555283157A,2F80262306=0102100F70555283157A,2F80263702=0102100F70555283157A,2F80262C38=0102100F70555283157A,2F80261E06=0102100F70555283157A,2F80261B1A=0102100F70555283157A,2F8026032A=0102100F70555283157A,2C2E1F14=0102100F70555283157A,2C2E3810=0102100F70555283157A,2C2E262C=0102100F70555283157A29,032C20201A=0102100F70555283157A00,2F80260A02=0102100F70555283157A00,2F80261838=0102100F70555283157A6C,2F80260E34=0102100F70555283157A6C,2F80260438=0102100F70555283157A6C,2C2E2F1A=0102100F70555283157A6C,2C2E2305=0102100F528315,7A70553525=0102100F5283152C8071,7A70550723=0102100F528315807138,7A7055032C200D2A=0102100F55528315,2F80267A2C71707D3316=0102100F55528315,2F80267A2C71707D1224=0102100F55528315,2F80267A2C71707D212E=0102100F55528315,2F80267A700616=0102100F55528315,2F80267A70380C=0102100F55528315,2F80267A700434=0102100F55528315,2F80267A702A18=0102100F55528315,7A2C71707D2628=0102100F55528315,7A2C71707D100C=0102100F55528315,7A2C71707D2F80261729=0102100F55528315,7A701F15=0102100F55528315,7A70240E=0102100F55528315,7A703632=0102100F55528315,7A701339=0102100F55528315,7A700115=0102100F55528315,7A702C2C37=0102100F55528315,7A702C320B=0102100F55528315,7A702C3206=0102100F55528315,7A702C2E2238=0102100F55528315,616D2F80267A2C71707D3816=0102100F555283153800,2F80267A701406=0102100F555283153800,2F80267A700111=0102100F555283152C8071,7A700501=0102100F555283152C8071,7A70370B=0102100F555283152C807138,7A703B37=0102100F555283152C80713800,7A701C2F=0102100F555283152920,7A702C240F=0102100F555283152920,7A702C0A03=0102100F555283152920,7A702C0221=0102100F55528315292000,7A702C2E3317=0102100F55528315292000,7A702C2E3634=0102100F5552831500,2F80267A2C71707D3028=0102100F5552831500,7A2C71707D111A=0102100F5552831500,7A2C71707D071E=0102100F5552831500,7A2C71707D2913=0102100F5552831500,7A702F19=0102100F5552831500,7A702301=0102100F5552831500,7A702C3919=0102100F5552831500,7A702C3B33=0102100F5552831500,7A702C2E0223=0102100F5552831500,7A702C03032F=0102100F55528315006C,7A702C2E262E=0102100F555283156C,2F80267A70032E=0102100F555283156C,7A2C71707D0F0B=0102100F555283156C,7A701D3B=0102100F555283156C,7A702C2E030116=01100F1571292C20,2F80267A703200=01100F1571292C20,7A7055370A=01100F1571292C2000,7A701B22=01100F1571292C2000,7A701E04=01100F1571292C2000,416D1336=01100F1571292C20007A70556C,391A=01100F1571292C20007A6C7055,1C24=01100F1571292C207A7055,2F80260D2E=01100F15712920,7A702C2E2D0A=01100F15712920,7A702C2E2800=01100F15712920027A7055,2C2E251E=01100F157129207A70556C,2C2E1228=01100F157129207A70556C,416D2C2E050A=01100F5220,7A70550000=01100F5220,616D2624=01100F5220,616D2F80267A702804=01100F5220006C,7A70550F06=01100F52207A70556C,2C2E2F1E=01100F52207A70556C,2C2E1014=01100F527A70556C,032C20161E=01100F712920,7A702C2E0A0A=01100F71522C2920,616D161C=0070100F292C20,01020F04=0006100F7020,7A7D01026D183A=0006100F7020,616D0102201C=0006100F20,7A2C71707D01026D1D37=000170100F292C20,2F18=000170100F292C802038,161D=00014B0F,032C201338=00014B0F2C2002,2F80261728=00014B0F20,2C2E0F0A=00014B0F20,7A2C71707D1833=00014B0F20,7A702C1407=00014B0F20,7A702C1401=0001060838,2C2E1123=0001060838,416D032C202019=000106082C38,2C31=000106082C38,391F=000106082C38,2523=000106082C38,7A70416D1C29=000106082C38020F71295283,3811=000106082C38020F71295283,7A700937=000106082C386C550F197120,7A700117=00010252100F29202C7A706C55,1337=00010206700F202C807138152952,3A2E=00010206100F7020,616D0610=00010206100F20,7A2C71707D0328=00010206100F20,7A700F01=00010206100F20,7A702C3310=00010206100F20,7A702C2E3139=0001100F298020,7A702C2625=00010870556C100F2C20,1909=00010870556C100F2C20,391E=00010870556C100F2C20,2124=00010870556C100F2C20,2F80267A7D0F00=00010870556C100F2C2038,2D09=00010870556C100F2C2002,0500=00010870556C100F2C207A,2C39=00010870556C100F2C207A,2518=00010870556C100F2C207A,0B0C=00010870556C100F2C207A,2F80262911=00010870556C100F7A,032C200007=000108556C100F2C2029,7A700A07=000108556C100F2C2029,7A701332=000108556C100F20,2C2E7A70100D=000108556C100F20,7A702C2E2239=000108556C100F20,7A702C2E0A01=000108556C100F20,7A702C2E380D=0001086C100F2C20,7A70551D36=0001086C100F2C20,7A70552F1F=000108100F70552920,010D=000108100F70552920,616D0507=000108100F705529202C80713815,0B0D=000108100F705529202C8071157A,3133=000108100F7055292002,2309=000108100F7055292002,416D0002=000108100F705529207A,2F80263202=000108100F705529207A,2F80263638=000108100F705529207A,2C2E2A1A=000108100F705529207A38,2F80262414=000108100F705529207A6C,2C2E2E14=000108100F552920,7A2C71707D1404=000108100F552920,7A2C71707D0B17=000108100F552920,7A70330D=000108100F552920,7A702C172F=000108100F552920,7A702C2E3707=000108100F5529206C,616D7A702C2E302E=6C55700F197120,2C2E7A7D0C22=6C55700F197120,7A7D01026D1E02=6C550F297120,000106037A703923=6C550F297120,7A702C2E03230A=6C550F1920,7A2C71707D240C=6C550F19200210,7A2C71707D000106031A16=6C550F197120,000106037A701513=6C550F197120,7A703A2B=6C550F197120,7A701837=6C550F197120,7A702F23=6C550F197120,7A702F22=6C550F197120,7A702D07=6C550F197120,7A702C2E3922=6C550F197120,7A700102093A=6C550F197120,7A70000106031B19=6C550F197120,616D7A70071F=6C550F197120,616D7A702C2E212B=6C550F197120,616D7A702C2E000106032734=6C550F197120292C,000106037A700325=6C550F1971200001020610,7A702C122B=6C550F19712008,000106037A702411=6C100F2952,7A7055032C20010E=100F2C29528320,01023704=100F2C29528320,0102363A=100F292C206C55,000106037A702B26=100F2920,7A2C71707D01026D302C=100F7055528315,01021E08=100F7055528315,01022730=100F7055528315,01021512=100F7055528315,010200352C=100F7055528315,7A7D01026D2F1C=100F7055528315,7A7D01026D0222=100F70555283153800,01026D2412=100F70555283157A,01022230=100F70555283157A,0102060E=100F70555283157A6C,01022C3A=100F70555283157A6C,01026D1F12=100F1571292C20,01026D3B36=100F1571292C20,01026D1516=100F1571292C20,000106037A702302=100F1571292C20,000106037A701D32=100F1571292C20,000106082F8026330E=100F1571292C20,000106086D2A1C=100F1571292C20,7A7001026D313A=100F1571292C20,7A7000010603341C=100F1571292C20,416D7A70000106032B2A=100F1571292C2002,000106037A700326=100F1571292C20556C,000106037A70273A=100F1571292C2000,01026D0722=100F1571292C2000,01026D2E0C=100F1571292C206C55,000106037A701408=100F1571292C207A706C55,01022020=100F1571292C207A706C55,000106081726=100F1571292C207A6C7055,0102290E=100F1571292C207A6C7055,000106080932=100F1571292C207A6C7055,000106080D26=100F52,00010608032C20100E=100F5283153800,01027A70550B16=100F5220,2F8026000106081122=100F5220,6D010200133A=100F5220,01026D1F16=100F5220,000106037A703132=100F5220,000106083B3A=100F5220,000106082522=100F5220,00010608190A=100F5220,000106082C2E021C=100F5220,7A70000106030936=100F52202C,01026D3A2C=100F52206C55,01027A701A0C=100F52206C55,000106037A700E30=100F52206C55,000106037A700A08=100F52207A706C55,000106083204=100F52207A6C5570,01026D0B0E=100F55528315,01027A2C71707D0004=100F55528315,7A2C71707D01026D1D3A=100F55528315,7A2C71707D01026D3418=100F5552831500,7A2C71707D0102201D=100F712920,7A702C2E00010608030E36=100F71522C2920,01023635=100F715229,00010608032C20021B=7A70550F2C715220,1900=7A70550F715220,2C2E0A09=7A70556C,00010608172C=7A70556C,00010608032C200B14=7A70556C,00010608032C202914=7A70556C0F197120,2C2E0938=7A70556C0F197120,000106082C2E111E=7A70556C000108,0502=7A70556C000108,2F80260D2F=7A70556C0001082C807138152952,2D0B=7A70556C0001082C807138152952,3633=7A70556C0001082C807115295256,0C18=7A70556C0008,01020218=7A70556C0008,0102302F=7A70556C100F295220,000106082C35=7A70556C100F295220,000106081E0B=7A70556C100F2952202C807115,3130=7A70556C100F29522002,000106080506=7A70556C100F29522001,2C2E330F=7A70556C100F29522001022C8071,010F=7A70556C100F295220010200,0435=7A70556C100F295280713815,032C200614=7A70556C100F295201,032C20122C=7A70556C100F29520102,032C203B39=7A706C550F297120,0F05=7A706C550F297102,032C200D25=7A706C550F19712001,616D2233=7A706C550F19712000010608,2626=7A6C70550F197120,01021A17=7A6C70550F197120,00010608262F=7A6C70550F1971202C29,000106083529=7A6C70550F19712002,616D000106082D08=7A6C70550F197120103800,0102341F=7A6C55700F197120,2C2E172B=082C38,7A7055000106030D27=082C38,7A70000106030827=08556C100F2C20,000106037A702803=08556C100F2C20,000106037A701013=08556C100F2C20,7A7000010603262B=08556C100F2C20,7A7000010603240D=08556C100F2C20,7A70000106033631=08556C100F2C20,7A70000106030431=08556C100F20,7A702C2E000106031D35=08100F552920,000106037A701335=08100F552920,000106037A700612=08100F55292038,000106037A70",
                SHEN_SHA: ["无", "天恩", "母仓", "时阳", "生气", "益后", "青龙", "灾煞", "天火", "四忌", "八龙", "复日", "续世", "明堂", "月煞", "月虚", "血支", "天贼", "五虚", "土符", "归忌", "血忌", "月德", "月恩", "四相", "王日", "天仓", "不将", "要安", "五合", "鸣吠对", "月建", "小时", "土府", "往亡", "天刑", "天德", "官日", "吉期", "玉宇", "大时", "大败", "咸池", "朱雀", "守日", "天巫", "福德", "六仪", "金堂", "金匮", "厌对", "招摇", "九空", "九坎", "九焦", "相日", "宝光", "天罡", "死神", "月刑", "月害", "游祸", "重日", "时德", "民日", "三合", "临日", "天马", "时阴", "鸣吠", "死气", "地囊", "白虎", "月德合", "敬安", "玉堂", "普护", "解神", "小耗", "天德合", "月空", "驿马", "天后", "除神", "月破", "大耗", "五离", "天牢", "阴德", "福生", "天吏", "致死", "元武", "阳德", "天喜", "天医", "司命", "月厌", "地火", "四击", "大煞", "大会", "天愿", "六合", "五富", "圣心", "河魁", "劫煞", "四穷", "勾陈", "触水龙", "八风", "天赦", "五墓", "八专", "阴错", "四耗", "阳错", "四废", "三阴", "小会", "阴道冲阳", "单阴", "孤辰", "阴位", "行狠", "了戾", "绝阴", "纯阳", "七鸟", "岁薄", "阴阳交破", "阴阳俱错", "阴阳击冲", "逐阵", "阳错阴冲", "七符", "天狗", "九虎", "成日", "天符", "孤阳", "绝阳", "纯阴", "六蛇", "阴神", "解除", "阳破阴冲"],
                DAY_SHEN_SHA: "100=010203040506,0708090A0B101=010C0D,0E0F101112131415102=16011718191A1B1C1D1E,1F20212223103=24011825261B271D1E,28292A2B104=012C2D2E2F3031,3233343536105=3738,393A3B3C3D123E106=3F404142434445,464748107=494A4B4C4D,4E108=4F5051524C4D5345,54555657109=58595345,5A5B12565C10A=5D415E5F60,616263640B6510B=0266676869,6A6B6C0A3E6D10C=1602171803041B05061E,07086E10D=24181B0C0D,0E0F1011126F13141510E=70191A1C1D,1F2021222310F=0125261B271D,28292A2B110=012C2D2E2F3031,3233343536111=49013738,393A3B3C3D123E112=4F50013F404142434445,4648113=014A4B,4E6E114=51524C4D5345,54550B5657115=0158595345,5A5B12565C116=1601185D415E5F60,61626364117=24021867681B69,6A6B3E6D118=0203040506,0708119=1B0C0D,0E0F10111213141511A=191A1B1C1D1E,1F2021222311B=4925261B271D1E,28292A11C=4F502C2D2E2F3031,323334353611D=3738,393A3B3C3D123E11E=3F404142434445,460B4811F=4A4B,4E71120=16171851524C4D5345,545556121=241858595345,5A5B12565C122=5D415E5F60,61626364123=0267681B69,6A6B3E6D124=0203041B05061E,070847125=491B0C0D,0E0F101112131415126=4F50191A1C1D1E,1F20212223127=2526271D1E,28292A2B128=2C2D2E2F3031,32333435360B129=3738,393A3B3C3D123E12A=1617183F404142434445,464812B=24184A4B,4E7212C=51524C4D53,5455565712D=0158595345,5A5B12565C12E=015D415E5F60,616263647312F=49010267681B69,6A6B3E6D130=4F500102030405061E,070874131=010C0D,0E0F101112131415726E132=191A1C1D1E,1F2021220B722375133=2526271D1E,28292A2B134=1617182C2D2E2F3031,3233343536135=24183738,393A3B3C3D126F3E136=3F4041424344,4648137=4A4B,4E72138=51524C4D5345,545576567257139=4958595345,5A5B7612565C7713A=4F505D415E5F60,6162636413B=02676869,6A6B3E6D200=1601025D60,393B28292A11090A201=0103041A1B4A,123435360B6D202=011819681B4C1D061E,3D1014203=011718252F591D0D1E,1F20213233204=012C26,3C23205=493751522D2E69,121364223E2B206=503F4005311E,6A3A5A5B207=5841440C38,4615208=431C4D45,6B4E5648209=27534B45,545507086162125620A=16666730,0E0F635720B=0241425E5F1B,6C0A0B3E5C20C=02185D1B601E,393B28292A116E20D=171803041B4A,126F3435366D20E=7019684C1D06,3D101420F=4901252F591D0D,1F2021323378210=50012C26,3C23211=013751522D2E69,121364223E2B212=013F40053145,6A3A5A5B213=015841440C38,46156E214=16431C4D5345,6B4E5648215=27534B45,545507086162120B5648216=18671B30,0E0F6357217=02171841425E5F1B,3E5C218=025D60,393B28292A11219=4903041A1B4A,123435366D21A=5019681B4C1D061E,3D101421B=252F591D0D45,1F2021323321C=2C26,3C2321D=3751522D2E69,121364223E2B21E=163F40053145,6A3A5A5B21F=5841440C38,467147150B220=18431C4D5345,6B4E5648221=171827534B45,5455070861621256222=6730,0E0F6357223=490241425E5F1B,3E5C224=50025D1B601E,393B28292A11225=03041A4A,123435366D226=19684C1D061E,3D1014227=252F591D0D1E,1F20213233228=162C26,3C23229=3751522D2E69,121364220B3E2B22A=183F40053145,6A3A5A5B22B=17185841440C38,46157222C=431C4D53,6B4E564822D=490127534B45,54550708616212567922E=5001671B30,0E0F635722F=010241425E5F,3E5C230=01025D601E,393B28292A1174231=0103041A4A,1234353647726E6D232=1619684C1D061E,3D1014233=252F591D0D1E,1F202132330B75234=182C26,3C23235=17183751522D2E69,126F1364223E2B236=3F400531,6A3A5A5B237=495841440C38,461572238=50431C4D5345,6B4E76567248239=27534B45,5455070861627612567323A=6730,0E0F635723B=0241425E5F,3E5C300=0102415E5F1A1B69,090A471457301=011B05,6A125C302=5001185D19515203042F0C1D601E,323315303=4F490118251C1D1E,3C5A5B106D304=012C2706,1F20213B710B787A305=58372668300D,6B123E306=173F402D2E45,07086423307=00,393A0E2B308=24164142444A533145,61624622567B309=674C533845,28292A4E12135630A=431B594D,5455633435364830B=021B27,3D116C0A3E30C=500218415E5F1A1B691E,146E5730D=4F49181B05,6A126F5C30E=705D19515203042F0C1D60,3233150B30F=01251C1D,3C5A5B106D310=01172C2706,1F20213B7C311=0158372668300D,6B123E312=2416013F402D2E45,0708476423313=01,393A0E0F6E2B314=4142444A533145,61624622567D315=66671B4C533845,28292A4E121356316=5018431B594D,54556334353648317=4F4902181B4B,3D113E318=02415E5F1A69,140B57319=1B05,6A125C31A=175D19515203042F0C1D601E,32331531B=251C1D1E,3C5A5B106D31C=24162C2706,1F20213B31D=58372668300D,6B123E31E=3F402D2E45,0708642331F=00,393A0E0F2B320=50184142444A533145,61624622567E321=4F4918671B4C533845,28292A4E121356322=43594D,5455633435360B48323=021B4B,3D113E324=0217415E5F1A691E,1457325=05,6A125C326=58165D19515203042F0C1D601E,323315327=251C1D1E,3C5A5B106D328=2C2706,1F20213B75329=58372668300D,6B123E32A=50183F402D2E45,0708642332B=4F4918,393A0E0F722B32C=4142444A5331,616246220B567B32D=01671B4C533845,28292A4E12135632E=011743594D,5455633435364832F=01024B,3D113E330=24160102415E5F1A691E,741457331=0105,6A12726E5C332=5D19515203042F0C1D601E,32331572333=251C1D1E,3C5A5B106D334=50182C2706,1F20213B335=4F491858372668300D,6B126F3E336=3F402D2E,0708640B23337=00,393A0E0F722B338=174142444A533145,616246762256727B73339=674C533845,28292A4E7612135633A=241643594D,5455633435364833B=024B,3D113E400=5001431B,5A5B1248401=490141425E5F2F4B,32336314402=4F01024A1D1E,396B3C130B57403=01025803044C1D1E,07085C404=01183F5D5960,0E0F10127F405=171819,1F20213E6D788075406=162526690645,28292A407=242C2D2E050D,6162343536647B408=3767680C5345,6A3A3B3D12155623409=4041441C5345,46562B40A=501B274D31,4E1140B=4951521A1B3038,5455223E40C=4F431B1E,5A5B0981120B6E4840D=41425E5F2F4B,3233631440E=02184A1D,396B3C135740F=010217185803044C1D,0708475C410=16013F585960,0E0F1012411=240119,1F20213E6D412=012526690645,28292A413=012C2D2E050D,6162343536646E7B414=503767681B0C5345,6A3A3B3D126F155623415=494041441B1C5345,46562B416=4F1B274D31,4E11710B417=51521A1B3038,54556C81223E418=18431B,5A5B1248419=171841425E5F2F4B,3233631441A=16024A1D1E,396B3C135741B=24025844044C1D1E,07085C41C=3F5D5960,0E0F101241D=19,1F20213E6D41E=50702526690645,28292A41F=492C2D2E050D,6162343536647D420=4F663767681B0C5345,6A3A3B3D12150B5623421=4041441B1C5345,46562B422=181B274D31,4E11423=171851521A3038,5455223E424=16431E,5A5B1248425=2441425E5F2F4B,32336314426=024A1D1E,396B3C1357427=025803044C1D1E,07085C428=503F5D5960,0E0F10126F429=4919,1F20213E6D42A=4F2526690645,28292A0B8242B=2C2D2E050D,616234353664727E7342C=183767681B0C53,6A3A3B3D1215562342D=0117184041441C5345,4647562B42E=1601274D31,4E1142F=240151521A3038,5455223E430=01431E,5A5B761248431=0141425E5F2F4B,32336314726E432=50024A1D1E,396B3C137257433=49025844044C1D1E,0708745C434=4F3F5D5960,0E0F10120B435=19,1F20213E6D75436=1825266906,28292A82437=17182C2D2E050D,616234353664727B73438=163767680C5345,6A3A3B3D1215567223439=244041441C5345,46562B43A=274D31,4E1143B=51521A3038,545576223E83500=012F4D31,54550708323312501=01586938,0E0F3C63502=16010241435E5F051D1E,641448503=01020C1D4B1E,6A28292A353615220B504=0117183F03041C,123457505=181927,3D103E5C506=5D25306045,1F20213B616213507=492C2667,6D508=503751522D2E530645,1256509=401B4A530D45,393A5A5B115650A=4142441A1B4C,462350B=681B59,6B4E3E2B50C=162F4D311E,5455070832330981126E50D=586938,0E0F3C0B50E=02171841435E5F051D,64144850F=0102180C1D4B,6A28292A35361522510=013F03041C,123457511=49011927,3D103E5C512=50015D25306045,1F20213B616213513=012C26671B,6E6D514=3751522D2E1B530645,126F56515=401B4A530D45,393A5A5B1156516=164142441A1B4C,467123517=6859,6B4E6C810B3E2B518=17182F4D31,54550708323312519=18586938,0E0F3C6351A=0241435E5F051D1E,64144851B=49020C1D4B1E,6A28292A3536152251C=503F03041C,12345751D=1927,3D103E5C51E=705D25306045,1F20213B61621351F=2C26671B,6D520=163751522D2E1B530645,1256521=404A530D45,393A5A5B110B56522=17184142441A1B,4623523=186859,6B4E3E2B524=2F4D311E,54550708323312525=49586938,0E0F3C63526=500241435E5F051D1E,641448527=020C1D4B1E,6A28292A35361522528=3F03041C,126F344757529=1927,3D103E5C52A=165D25306045,1F20213B616213658452B=662C2667,0B726D52C=17183751522D2E1B5306,125652D=0118404A530D45,393A5A5B115652E=014142441A4C,462352F=49016859,6B4E3E2B530=50012F4D311E,545507083233761285531=01586938,0E0F3C63726E532=0241435E5F051D1E,64147248533=020C1D4B1E,6A28292A7435361522534=163F03041C,123457535=1927,3D100B3E5C536=16185D253060,1F20213B61621378537=182C2667,726D538=3751522D2E530645,125672539=49404A530D45,393A5A5B115653A=504142441A4C,46472353B=681B59,6B4E763E2B600=241601304D,3C28292A4E1235361423601=01,54553B63342B602=0102681D311E,3D603=010241425E5F4A1D381E,64604=01183F434C,39127148605=4F49181951520304594B,61620B3E73606=50256745,5A5B102257607=172C69,1F20215C608=5D37261B05536045,6B111256609=402D2E1A1B0C5345,6B11125660A=24161B1C06,6A3A0E0F1360B=5841442F270D,3233463E60C=304D1E,3C28292A4E0981123536146E2360D=00,54553B63342B60E=0218681D31,3D60F=4F4901021841425E5F4A1D38,640B610=50013F434C,391248611=01171951520304594B,61623E612=0125671B45,5A5B102257613=012C1B69,1F20216E5C614=24165D37261B05536045,6B11126F56615=402D2E1A1B0C5345,070815566D616=1C06,6A3A0E0F1347617=5841442F270D,3233466C813E618=18304D,3C28292A4E1235361423619=4F4918,54553B63340B2B61A=5002681D311E,3D61B=021741425E5F4A1D381E,6461C=3F434C,39124861D=1951520304594B,61623E61E=24167025671B45,5A5B10225761F=2C1B69,1F20215C620=5D372605536045,6B111256621=402D2E1A0C5345,070815566D622=181B1C06,6A3A0E0F13623=4F49185841442F270D,3233460B3E624=50304D1E,3C28292A4E1235361423625=17,54553B63342B626=02681D311E,3D627=0241425E5F4A1D381E,64628=24163F434C,39126F48629=1951520304594B,61623E62A=256745,5A5B1022578662B=2C69,1F2021725C7562C=185D37261B055360,6B11125662D=4F490118402D2E1A0C5345,0708150B566D62E=50011C06,6A3A0E0F1362F=01175841442F270D,3233463E630=01304D1E,3C28292A4E761235361423631=01,54553B6334726E2B87632=241602681D311E,3D72633=0241425E5F4A1D381E,7464634=3F434C,39124748635=1951520304594B,61623E6573636=661825671B,5A5B10225786637=4F49182C69,1F20210B725C75638=505D372605536045,6B11125672639=17402D2E1A0C5345,070815566D63A=1B1C06,6A3A0E0F1363B=5841442F270D,323346763E700=0103404142445906,46701=01020D,4E14702=50015152694D1D1E,54553B23703=4901051D1E,5A5B2B1288704=4F0102415E5F0C31,6162636415705=6667681C38,6A6B3E706=4303042745,07080B48707=02304B,0E0F101112708=16171819,1F20135657709=24185825261B5345,28292A353622565C70A=025D2C2D2E2F4A60,3233893470B=374C,393A3C3D3E6D70C=503F4041424459061E,466E70D=49020D,4E1470E=4F5152694D1D,54553B70F=01051D,5A5B12132B710=0102415E5F0C31,61626364150B65711=0167681C38,6A6B3E712=162417184303041B2745,070848713=240102181B304B,0E0F1011126E714=191A1B5345,1F20215657715=5825261B5345,28292A353622565C717=49374C,393A3C3D126F473E6D718=4F3F404142445906,46719=020D,4E1471A=515269,1D1E71B=051D1E,5A5B12132B71C=16021718415E5F0C31,616263641571D=241867681B1C38,6A6B3E71E=4303041B2745,07084871F=021B30,0E0F101112720=50191A5345,1F20215657721=495825265345,28292A353622565C722=4F025D2C2D2E2F4A60,32338934723=374C,393A3C3D123E6D724=3F4041424459061E,46098A0B725=020D,4E7114726=1617185152694D1D1E,54553B23727=2418051D1E,5A5B12132B728=02415E5F0C31,616263641573729=67681B1C38,6A6B3E72A=504303042745,07084872B=4902304B,0E0F1011126F7272C=4F70191A1B,1F2021565772D=015825265345,28292A353622565C72E=01025D2C2D2E2F4A60,323389340B72F=01374C,393A3C3D6C8A123E6D730=160117183F4041424459061E,46731=240102180D,4E14726E732=5152694D1D1E,54553B767223733=051D1E,5A5B7612132B77734=5002415E5F0C31,6162636415735=4967681C38,6A6B473E736=4F4303041B27,7448737=02304B,0E0F10111272738=191A5345,1F20210B56725775739=5825265345,28292A353622565C73A=160217185D2C2D2E2F4A60,3233893473B=2418374C,393A3C3D123E6D800=50013F5D402760,6A3A5A5B22801=490102414430,466D802=014D1D061E,6B4E4714803=011D0D1E,54550708616212804=0102671B4A,0E0F6323805=41425E5F4C,8B2B806=16593145,3928292A113536807=025803041A1B38,1234130B808=181943681B695345,3D105648809=1718252F0553534B45,1F20213B32335680A=50022C260C,3C155780B=493751522D2E1C,12643E5C80C=3F5D4027601E,6A3A5A5B226E80D=02414430,466D80E=4D1D06,6B4E1480F=011D0D,5455070861621279810=16010266674A,0E0F6323811=0141425E5F1B4C,0B3E2B812=01181B593145,3928292A113536813=010217185803041A1B38,1234136E814=501943681B695345,3D105648815=49252F05534B45,1F20213B323356816=022C260C,3C1557817=3751522D2E1C,126F643E5C818=3F5D402760,6A3A5A5B22819=02414430,466D81A=164D1D061E,6B4E1481B=1D0D1E,545507086162120B6581C=0218671B4A,0E0F632381D=171841425E5F1B4C,3E2B81E=501B593145,3928292A11353681F=49025D03041A38,123413820=194368695345,3D10475648821=252F05534B45,1F20213B323356716=50025D2C2D2E2F4A60,32338934822=022C260C,3C1557823=3751522D2E1C,12643E5C824=163F5D4027601E,6A3A5A5B098A22825=02414430,46710B6D826=184D1D061E,6B4E14827=17181D0D1E,54550708616212828=5002671B4A,0E0F6323829=4941425E5F4C,3E2B82A=593145,3928292A11353682B=025803041A38,126F34137282C=701943681B6953,3D10564882D=01252F05534B45,1F2021613233567882E=1601022C260C,3C155782F=013751522D2E1C,6C8A12640B3E5C830=01183F5D4027601E,6A3A5A5B22831=01021718414430,46726E6D832=504D1D061E,6B4E761472833=491D0D1E,545507086162761273834=02674A,0E0F6323835=41425E5F4C,3E2B836=1B5931,3928292A11743536837=025803041A38,12341372838=16194368695345,3D10567248839=252F05534B45,1F20213B32330B567583A=02182C260C,3C155783B=17183751522D2E1C,12643E5C900=013F408C2E4C,0708641457901=010259,393A0E0F5C902=2416015D4142441D601E,61624635367B903=0167691D1E,28292A4E126D904=01021B054D06,5455637134220B905=580C0D,3D11153E906=17415E5F1A1B1C45,23907=4F49021B27,6A3B12472B908=501819515203042F30533145,323356909=1825533845,3C5A5B105690A=022C43,1F2021487C90B=3726684A4B,6B12133E90C=24163F402D2E4C1E,070864146E5790D=0259,393A0E0F5C90E=5D4142441D60,61624635360B7B90F=0167691D,28292A4E126D910=0102171B054D06,5455633422911=4F4901581B0C0D,3D11153E912=500118415E5F1A1B1C45,23913=0102181B27,6A3B126E2B914=19515203042F30533145,323356915=25533845,3C5A5B1056916=2416022C43,1F202148917=3726684A4B,6B126F133E918=3F402D2E4C,070864140B57919=0259,393A0E0F5C91A=175D4142441D601E,61624635367D91B=4F4966671B691D1E,28292A4E126D91C=5002181B054D06,545563342291D=18581B0C0D,3D11153E91E=415E5F1A1C45,2391F=0227,6A3B122B920=241619515203042F305331,323356921=25533845,3C5A5B1056922=022C43,1F20210B48788D923=3726684A4B,6B12133E924=173F402D2E4C1E,0708098A641457925=4F49022E,393A0E0F475C926=50185D4142441D601E,61624635367E927=18671B691D1E,28292A4E126D928=02054D06,5455633422929=580C0D,3D11153E92A=2416415E5F1A1C45,2392B=0227,6A3B126F722B92C=7019515203042F305331,32330B5692D=0125533845,3C5A5B105692E=0102162C43,1F2021487592F=4F49013726684A4B,6B6C8A12133E930=5001183F402D2E4C1E,0708641457931=01021859,393A0E0F726E5C932=5D4142441D601E,616246763536727B73933=67691D1E,28292A4E76126D934=241602054D06,5455633422935=580C0D,3D11153E936=415E5F1A1B1C,740B23937=0227,6A3B12722B938=1719515203042F30533145,32335672939=4F4925533845,3C5A5B105693A=5002182C43,1F20214893B=183726684A4B,6B12133EA00=160170182543261C,28292A48A01=240117182C2D2E274B,61623464147BA02=013F376768301D1E,6A3A3D1257A03=01584041441D1E,465CA04=015D4D60,4E1113A05=4951521A1B4A,54553E6DA06=4F501B4C0645,5A5B12A07=41425E5F2F590D,32336322A08=025345,396B3C0B5623A09=020304695345,0708562BA0A=16180531,0E0F10126FA0B=241618190C38,1F20213B3536103EA0C=2543261C1E,28292A6E48A0D=2C2D2E274B,61623464147BA0E=3F376768301D,6A3A3D124757A0F=4924584041441B1D,465CA10=4F50015D1B4D60,4E1113A11=0151521A1B4A,54553E6DA12=011B4C0645,5A5B120BA13=0141425E5F2F590D,323363226EA14=1602185345,396B3C5623A15=240217180304695345,0708562BA16=0531,0E0F1012A17=190C38,1F20213B3536153EA18=2543261C,28292A4882A19=49503F3767681B301D1E,6A3A3D1257A1A=4F503F3767681B301D1E,6A3A3D1257A1B=584041441B1D1E,465CA1C=5D1B4D60,4E1171130BA1D=51521A1B4A,54553E6DA1E=16184C0645,5A5B12A1F=24171841425E5F2F590D,32336322A20=025345,396B3C5623A21=020304695345,0708562BA22=0531,0E0F10128EA23=49190C38,1F20213B3536153E788FA24=4F502543261C1E,28292A48A25=2C2D2E274B,61623464147DA26=663F3767681B301D1E,6A3A3D120B57A27=584041441B1D1E,465CA28=16185D4D60,4E1113A29=24171851521A4A,54553E6DA2A=4C0645,5A5B7612A2B=41425E5F2F590D,3233632272A2C=0253,396B3C475623A2D=1601020304695345,0708562BA2E=4F50010531,0E0F1012A2F=01190C38,1F20213B3536153EA30=012543261C1E,28292A09900B4882A31=012C2D2E274B,6162346414726E7E73A32=16183F376768301D1E,6A3A3D126F7257A33=2417185D4041441D1E,465CA34=5D4D60,4E1113A35=51521A4A,5455763E6D83A36=4C06,5A5B12A37=4941425E5F2F590D,3233632272A38=4F50029145,396B3C567223A39=020304695345,070874562BA3A=0531,0E0F10120BA3B=190C38,1F20213B6C903536153E75B00=01701718254A31,1F20216162B01=0118582C26,674C38B02=50013F375152432D2E591D1E,121448B03=4901401B1D4B1E,393A5B11B04=014142441A69,4657B05=681B05,6B4E3E5CB06=682F0C4D6045,5455070832331215B07=1C,0E0F3C636DB08=1602415E5F27530645,3536136456B09=0230530D45,6A28292A0B56B0A=17180304,126F342223B0B=1819,3D103E2BB0C=50254A311E,1F202161626EB0D=49582C26,671B4C38B0E=3F375152432D2E591D,121448B0F=01401B1D4B,393A3B5A5B11B10=014142441A1B69,4657B11=01681B05,6B4E3E5CB12=16015D2F0C4D6045,5455070832331215B13=011C,0E0F3C630B6E6DB14=021718415E5F27530645,3536136456B15=021830530D45,6A28292A56B16=500304,12342223B17=4919,3D103E2BB18=254A31,1F4E21616278B19=582C26,671B4C38B1A=3F375152432D2E1B591D1E,121448B1B=401B1D4B1E,393A3B5A5B1147B1C=164142441A1B69,467157B1D=6805,6B4E0B3E5CB1E=17185D2F0C926045,5455070832331215B1F=181C,0E0F3C636DB20=5002415E5F27530645,3536136456B21=490230530D45,6A28292A56B22=0304,12342223B23=19,3D103E2BB24=254A311E,1F20136162B25=582C26671B4C38,00B26=163F375152432D2E1B591D1E,121448B27=401D4B1E,393A3B5A5B110BB28=17184142441A69,4657B29=186805,6B4E3E5CB2A=505D2F0C4D6045,54550708323376121585B2B=491C,0E0F3C63726DB2C=02415E5F275306,3536136456B2D=010230530D45,6A28292A56B2E=010304,12342223B2F=0119,3D103E2BB30=1601254A311E,1F2021616209906584B31=0166582C26674C38,0B726EB32=17183F375152432D2E591D1E,126F147248B33=18401D4B1E,393A3B5A5B11B34=504142441A69,4657B35=49681B05,6B4E763E5CB36=5D2F0C4D60,5455070832331215B37=1C,0E0F3C63726DB38=02415E5F27530645,353613645672B39=0230530D45,6A28292A744756B3A=160304,12342223B3B=19,3D106C900B3E2BC00=500170661825670C,5A5B1013141523C01=4F4901182C1C,1F2021222BC02=011637261B271D311E,6B1112C03=01402D2E1A1B311D381E,0708C04=0143,6A3A0E0F7148C05=41442F4B,32334635360B3EC06=24164A4D45,3C28292A4E1257C07=174C,545563345CC08=025D6859536045,3D56C09=0241425E5F5345,4764566DC0A=50186906,393B126FC0B=4F4918581951520304050D,61623EC0C=25671B0C1E,5A5B101314156E23C0D=2C1B1C,1F2021222BC0E=3F37264B1D31,6B1112C0F=01402D2E1A1B301D38,07080BC10=241601431B,6A3A0E0F48C11=011741442F4B,32334635363EC12=014A4D45,3C28292A4E1257C13=014C,545563346E5CC14=5002185D6804536045,3D56C15=4F49021841425E5F5345,64566DC16=6906,393B12C17=581951524404050D,61623EC18=25670C,5A5B101314152386C19=2C1B1C,1F2021220B2BC1A=24163F37261B271D31,6B1112C1B=17402D2E1A1B301D381E,0708C1C=43,6A3A0E0F48C1D=41582F4B,32334635363EC1E=50184A4D45,3C28292A4E1257C1F=4F49184C,545563345CC20=025D6859536045,3D56C21=0241425E5F5345,64566DC22=6906,393B12C23=581951520304050D,61620B3EC24=241625671B0C1E,5A5B1013141523C25=172C1B1C,1F2021222BC26=3F3726271D311E,6B1112C27=402D2E1A301D381E,0708C28=501843,6A5B0E0F48C29=4F491841442F4B,32334635363EC2A=4A4D45,3C28292A4E761257C2B=4C,54556334725C93C2C=025D68595360,3D56C2D=010241425E5F5345,640B566DC2E=2416016906,393B12C2F=0117581951520304050D,61623EC30=0125670C,5A5B1009901314152386C31=012C1C,1F202122726E2B75C32=50183F3726271D311E,6B11126F72C33=4F4918402D2E1A301D381E,070847C34=431B,6A3A0E0F48C35=41442F4B,3233467635363EC36=4A4D,3C28292A4E1257C37=4C,545563340B725CC38=2416025D6859536045,3D5672C39=021741425E5F5345,7464566DC3A=6906,393B12C3B=581951520304050D,61626C903E6573",
                getTimeZhiIndex: function(e) {
                    if (!e) return 0;
                    e.length > 5 && (e = e.substr(0, 5));
                    for (var t = 1, n = 1; n < 22; n += 2) {
                        if (e >= (n < 10 ? "0" : "") + n + ":00" && e <= (n + 1 < 10 ? "0" : "") + (n + 1) + ":59") return t;
                        t++
                    }
                    return 0
                },
                convertTime: function(e) {
                    return this.ZHI[this.getTimeZhiIndex(e) + 1]
                },
                getJiaZiIndex: function(e) {
                    for (var t = 0, n = this.JIA_ZI.length; t < n; t++)
                        if (this.JIA_ZI[t] == e) return t;
                    return -1
                },
                hex: function(e) {
                    var t = e.toString(16);
                    return t.length < 2 && (t = "0" + t), t.toUpperCase()
                },
                getDayYi: function(e, t) {
                    for (var n = [], r = this.hex(this.getJiaZiIndex(t)), a = this.hex(this.getJiaZiIndex(e)), i = this.DAY_YI_JI, o = i.indexOf(r + "="); o > -1;) {
                        var s = i = i.substr(o + 3);
                        s.indexOf("=") > -1 && (s = s.substr(0, s.indexOf("=") - 2));
                        var l, u, c, f = !1,
                            d = s.substr(0, s.indexOf(":"));
                        for (l = 0, c = d.length; l < c; l += 2)
                            if ((u = d.substr(l, 2)) == a) {
                                f = !0;
                                break
                            } if (f) {
                            var h = s.substr(s.indexOf(":") + 1);
                            for (l = 0, c = (h = h.substr(0, h.indexOf(","))).length; l < c; l += 2) u = h.substr(l, 2), n.push(this.YI_JI[parseInt(u, 16)]);
                            break
                        }
                        o = i.indexOf(r + "=")
                    }
                    return n.length < 1 && n.push("无"), n
                },
                getDayJi: function(e, t) {
                    for (var n = [], r = this.hex(this.getJiaZiIndex(t)), a = this.hex(this.getJiaZiIndex(e)), i = this.DAY_YI_JI, o = i.indexOf(r + "="); o > -1;) {
                        var s = i = i.substr(o + 3);
                        s.indexOf("=") > -1 && (s = s.substr(0, s.indexOf("=") - 2));
                        var l, u, c, f = !1,
                            d = s.substr(0, s.indexOf(":"));
                        for (l = 0, c = d.length; l < c; l += 2)
                            if ((u = d.substr(l, 2)) == a) {
                                f = !0;
                                break
                            } if (f) {
                            var h = s.substr(s.indexOf(",") + 1);
                            for (l = 0, c = h.length; l < c; l += 2) u = h.substr(l, 2), n.push(this.YI_JI[parseInt(u, 16)]);
                            break
                        }
                        o = i.indexOf(r + "=")
                    }
                    return n.length < 1 && n.push("无"), n
                },
                getDayJiShen: function(e, t) {
                    var n = [],
                        r = this.hex(this.getJiaZiIndex(t)),
                        a = Math.abs(e).toString(16).toUpperCase(),
                        i = this.DAY_SHEN_SHA.indexOf(a + r + "=");
                    if (i > -1) {
                        var o = this.DAY_SHEN_SHA.substr(i + 4);
                        o.indexOf("=") > -1 && (o = o.substr(0, o.indexOf("=") - 3));
                        for (var s = o.substr(0, o.indexOf(",")), l = 0, u = s.length; l < u; l += 2) {
                            var c = s.substr(l, 2);
                            n.push(this.SHEN_SHA[parseInt(c, 16)])
                        }
                    }
                    return n.length < 1 && n.push("无"), n
                },
                getDayXiongSha: function(e, t) {
                    var n = [],
                        r = this.hex(this.getJiaZiIndex(t)),
                        a = Math.abs(e).toString(16).toUpperCase(),
                        i = this.DAY_SHEN_SHA.indexOf(a + r + "=");
                    if (i > -1) {
                        var o = this.DAY_SHEN_SHA.substr(i + 4);
                        o.indexOf("=") > -1 && (o = o.substr(0, o.indexOf("=") - 3));
                        for (var s = o.substr(o.indexOf(",") + 1), l = 0, u = s.length; l < u; l += 2) {
                            var c = s.substr(l, 2);
                            n.push(this.SHEN_SHA[parseInt(c, 16)])
                        }
                    }
                    return n.length < 1 && n.push("无"), n
                },
                getTimeYi: function(e, t) {
                    var n = [],
                        r = this.hex(this.getJiaZiIndex(e)),
                        a = this.hex(this.getJiaZiIndex(t)),
                        i = this.TIME_YI_JI.indexOf(r + a + "=");
                    if (i > -1) {
                        var o = this.TIME_YI_JI.substr(i + 5);
                        o.indexOf("=") > -1 && (o = o.substr(0, o.indexOf("=") - 4));
                        for (var s = o.substr(0, o.indexOf(",")), l = 0, u = s.length; l < u; l += 2) {
                            var c = s.substr(l, 2);
                            n.push(this.YI_JI[parseInt(c, 16)])
                        }
                    }
                    return n.length < 1 && n.push("无"), n
                },
                getTimeJi: function(e, t) {
                    var n = [],
                        r = this.hex(this.getJiaZiIndex(e)),
                        a = this.hex(this.getJiaZiIndex(t)),
                        i = this.TIME_YI_JI.indexOf(r + a + "=");
                    if (i > -1) {
                        var o = this.TIME_YI_JI.substr(i + 5);
                        o.indexOf("=") > -1 && (o = o.substr(0, o.indexOf("=") - 4));
                        for (var s = o.substr(o.indexOf(",") + 1), l = 0, u = s.length; l < u; l += 2) {
                            var c = s.substr(l, 2);
                            n.push(this.YI_JI[parseInt(c, 16)])
                        }
                    }
                    return n.length < 1 && n.push("无"), n
                },
                getXunIndex: function(e) {
                    var t, n, r = e.substr(0, 1),
                        a = e.substr(1),
                        i = 0,
                        o = 0;
                    for (t = 0, n = this.GAN.length; t < n; t++)
                        if (this.GAN[t] === r) {
                            i = t;
                            break
                        } for (t = 0, n = this.ZHI.length; t < n; t++)
                        if (this.ZHI[t] === a) {
                            o = t;
                            break
                        } var s = i - o;
                    return s < 0 && (s += 12), s / 2
                },
                getXun: function(e) {
                    return this.XUN[this.getXunIndex(e)]
                },
                getXunKong: function(e) {
                    return this.XUN_KONG[this.getXunIndex(e)]
                }
            },
            K = (n = ["元旦节", "春节", "清明节", "劳动节", "端午节", "中秋节", "国庆节", "国庆中秋", "抗战胜利日"], r = 18, a = "0".charCodeAt(0), i = n, o = "200112290020020101200112300020020101200201010120020101200201020120020101200201030120020101200202091020020212200202101020020212200202121120020212200202131120020212200202141120020212200202151120020212200202161120020212200202171120020212200202181120020212200204273020020501200204283020020501200205013120020501200205023120020501200205033120020501200205043120020501200205053120020501200205063120020501200205073120021001200209286020021001200209296020021001200210016120021001200210026120021001200210036120021001200210046120021001200210056120021001200210066120021001200210076120021001200301010120030101200302011120030201200302021120030201200302031120030201200302041120030201200302051120030201200302061120030201200302071120030201200302081020030201200302091020030201200304263020030501200304273020030501200305013120030501200305023120030501200305033120030501200305043120030501200305053120030501200305063120030501200305073120031001200309276020031001200309286020031001200310016120031001200310026120031001200310036120031001200310046120031001200310056120031001200310066120031001200310076120031001200401010120040101200401171020040122200401181020040122200401221120040122200401231120040122200401241120040122200401251120040122200401261120040122200401271120040122200401281120040122200405013120040501200405023120040501200405033120040501200405043120040501200405053120040501200405063120040501200405073120041001200405083020040501200405093020040501200410016120041001200410026120041001200410036120041001200410046120041001200410056120041001200410066120041001200410076120041001200410096020041001200410106020041001200501010120050101200501020120050101200501030120050101200502051020050209200502061020050209200502091120050209200502101120050209200502111120050209200502121120050209200502131120050209200502141120050209200502151120050209200504303020050501200505013120050501200505023120050501200505033120050501200505043120050501200505053120050501200505063120050501200505073120051001200505083020050501200510016120051001200510026120051001200510036120051001200510046120051001200510056120051001200510066120051001200510076120051001200510086020051001200510096020051001200512310020060101200601010120060101200601020120060101200601030120060101200601281020060129200601291120060129200601301120060129200601311120060129200602011120060129200602021120060129200602031120060129200602041120060129200602051020060129200604293020060501200604303020060501200605013120060501200605023120060501200605033120060501200605043120060501200605053120060501200605063120060501200605073120061001200609306020061001200610016120061001200610026120061001200610036120061001200610046120061001200610056120061001200610066120061001200610076120061001200610086020061001200612300020070101200612310020070101200701010120070101200701020120070101200701030120070101200702171020070218200702181120070218200702191120070218200702201120070218200702211120070218200702221120070218200702231120070218200702241120070218200702251020070218200704283020070501200704293020070501200705013120070501200705023120070501200705033120070501200705043120070501200705053120070501200705063120070501200705073120070501200709296020071001200709306020071001200710016120071001200710026120071001200710036120071001200710046120071001200710056120071001200710066120071001200710076120071001200712290020080101200712300120080101200712310120080101200801010120080101200802021020080206200802031020080206200802061120080206200802071120080206200802081120080206200802091120080206200802101120080206200802111120080206200802121120080206200804042120080404200804052120080404200804062120080404200805013120080501200805023120080501200805033120080501200805043020080501200806074120080608200806084120080608200806094120080608200809135120080914200809145120080914200809155120080914200809276020081001200809286020081001200809296120081001200809306120081001200810016120081001200810026120081001200810036120081001200810046120081001200810056120081001200901010120090101200901020120090101200901030120090101200901040020090101200901241020090125200901251120090125200901261120090125200901271120090125200901281120090125200901291120090125200901301120090125200901311120090125200902011020090125200904042120090404200904052120090404200904062120090404200905013120090501200905023120090501200905033120090501200905284120090528200905294120090528200905304120090528200905314020090528200909276020091001200910016120091001200910026120091001200910036120091001200910046120091001200910055120091003200910065120091003200910075120091003200910085120091003200910105020091003201001010120100101201001020120100101201001030120100101201002131120100213201002141120100213201002151120100213201002161120100213201002171120100213201002181120100213201002191120100213201002201020100213201002211020100213201004032120100405201004042120100405201004052120100405201005013120100501201005023120100501201005033120100501201006124020100616201006134020100616201006144120100616201006154120100616201006164120100616201009195020100922201009225120100922201009235120100922201009245120100922201009255020100922201009266020101001201010016120101001201010026120101001201010036120101001201010046120101001201010056120101001201010066120101001201010076120101001201010096020101001201101010120110101201101020120110101201101030120110101201101301020110203201102021120110203201102031120110203201102041120110203201102051120110203201102061120110203201102071120110203201102081120110203201102121020110203201104022020110405201104032120110405201104042120110405201104052120110405201104303120110501201105013120110501201105023120110501201106044120110606201106054120110606201106064120110606201109105120110912201109115120110912201109125120110912201110016120111001201110026120111001201110036120111001201110046120111001201110056120111001201110066120111001201110076120111001201110086020111001201110096020111001201112310020120101201201010120120101201201020120120101201201030120120101201201211020120123201201221120120123201201231120120123201201241120120123201201251120120123201201261120120123201201271120120123201201281120120123201201291020120123201203312020120404201204012020120404201204022120120404201204032120120404201204042120120404201204283020120501201204293120120501201204303120120501201205013120120501201205023020120501201206224120120623201206234120120623201206244120120623201209295020120930201209305120120930201210016120121001201210026120121001201210036120121001201210046120121001201210056120121001201210066120121001201210076120121001201210086020121001201301010120130101201301020120130101201301030120130101201301050020130101201301060020130101201302091120130210201302101120130210201302111120130210201302121120130210201302131120130210201302141120130210201302151120130210201302161020130210201302171020130210201304042120130404201304052120130404201304062120130404201304273020130501201304283020130501201304293120130501201304303120130501201305013120130501201306084020130612201306094020130612201306104120130612201306114120130612201306124120130612201309195120130919201309205120130919201309215120130919201309225020130919201309296020131001201310016120131001201310026120131001201310036120131001201310046120131001201310056120131001201310066120131001201310076120131001201401010120140101201401261020140131201401311120140131201402011120140131201402021120140131201402031120140131201402041120140131201402051120140131201402061120140131201402081020140131201404052120140405201404062120140405201404072120140405201405013120140501201405023120140501201405033120140501201405043020140501201405314120140602201406014120140602201406024120140602201409065120140908201409075120140908201409085120140908201409286020141001201410016120141001201410026120141001201410036120141001201410046120141004201410056120141001201410066120141001201410076120141001201410116020141001201501010120150101201501020120150101201501030120150101201501040020150101201502151020150219201502181120150219201502191120150219201502201120150219201502211120150219201502221120150219201502231120150219201502241120150219201502281020150219201504042120150405201504052120150405201504062120150405201505013120150501201505023120150501201505033120150501201506204120150620201506214120150620201506224120150620201509038120150903201509048120150903201509058120150903201509068020150903201509265120150927201509275120150927201510016120151001201510026120151001201510036120151001201510046120151004201510056120151001201510066120151001201510076120151001201510106020151001201601010120160101201601020120160101201601030120160101201602061020160208201602071120160208201602081120160208201602091120160208201602101120160208201602111120160208201602121120160208201602131120160208201602141020160208201604022120160404201604032120160404201604042120160404201604303120160501201605013120160501201605023120160501201606094120160609201606104120160609201606114120160609201606124020160609201609155120160915201609165120160915201609175120160915201609185020160915201610016120161001201610026120161001201610036120161001201610046120161001201610056120161001201610066120161001201610076120161001201610086020161001201610096020161001201612310120170101201701010120170101201701020120170101201701221020170128201701271120170128201701281120170128201701291120170128201701301120170128201701311120170128201702011120170128201702021120170128201702041020170128201704012020170404201704022120170404201704032120170404201704042120170404201704293120170501201704303120170501201705013120170501201705274020170530201705284120170530201705294120170530201705304120170530201709306020171001201710016120171001201710026120171001201710036120171001201710045120171004201710056120171001201710066120171001201710076120171001201710086120171001201712300120180101201712310120180101201801010120180101201802111020180216201802151120180216201802161120180216201802171120180216201802181120180216201802191120180216201802201120180216201802211120180216201802241020180216201804052120180405201804062120180405201804072120180405201804082020180405201804283020180501201804293120180501201804303120180501201805013120180501201806164120180618201806174120180618201806184120180618201809225120180924201809235120180924201809245120180924201809296020181001201809306020181001201810016120181001201810026120181001201810036120181001201810046120181001201810056120181001201810066120181001201810076120181001201812290020190101201812300120190101201812310120190101201901010120190101201902021020190205201902031020190205201902041120190205201902051120190205201902061120190205201902071120190205201902081120190205201902091120190205201902101120190205201904052120190405201904062120190405201904072120190405201904283020190501201905013120190501201905023120190501201905033120190501201905043120190501201905053020190501201906074120190607201906084120190607201906094120190607201909135120190913201909145120190913201909155120190913201909296020191001201910016120191001201910026120191001201910036120191001201910046120191001201910056120191001201910066120191001201910076120191001201910126020191001202001010120200101202001191020200125202001241120200125202001251120200125202001261120200125202001271120200125202001281120200125202001291120200125202001301120200125202001311120200125202002011120200125202002021120200125202004042120200404202004052120200404202004062120200404202004263020200501202005013120200501202005023120200501202005033120200501202005043120200501202005053120200501202005093020200501202006254120200625202006264120200625202006274120200625202006284020200625202009277020201001202010017120201001202010026120201001202010036120201001202010046120201001202010056120201001202010066120201001202010076120201001202010086120201001202010106020201001202101010120210101202101020120210101202101030120210101202102071020210212202102111120210212202102121120210212202102131120210212202102141120210212202102151120210212202102161120210212202102171120210212202102201020210212202104032120210404202104042120210404202104052120210404202104253020210501202105013120210501202105023120210501202105033120210501202105043120210501202105053120210501202105083020210501202106124120210614202106134120210614202106144120210614202109185020210921202109195120210921202109205120210921202109215120210921202109266020211001202110016120211001202110026120211001202110036120211001202110046120211001202110056120211001202110066120211001202110076120211001202110096020211001202201010120220101202201020120220101202201030120220101202201291020220201202201301020220201202201311120220201202202011120220201202202021120220201202202031120220201202202041120220201202202051120220201202202061120220201202204022020220405202204032120220405202204042120220405202204052120220405202204243020220501202204303120220501202205013120220501202205023120220501202205033120220501202205043120220501202205073020220501202206034120220603202206044120220603202206054120220603202209105120220910202209115120220910202209125120220910202210016120221001202210026120221001202210036120221001202210046120221001202210056120221001202210066120221001202210076120221001202210086020221001202210096020221001", s = function(e) {
                return (e < 10 ? "0" : "") + e
            }, l = function(e) {
                return e.indexOf("-") < 0 ? e.substr(0, 4) + "-" + e.substr(4, 2) + "-" + e.substr(6) : e
            }, u = function(e, t, n, r) {
                return {
                    _p: {
                        day: l(e),
                        name: t,
                        work: n,
                        target: l(r)
                    },
                    getDay: function() {
                        return this._p.day
                    },
                    setDay: function(e) {
                        this._p.day = l(e)
                    },
                    getName: function() {
                        return this._p.name
                    },
                    setName: function(e) {
                        this._p.name = e
                    },
                    isWork: function() {
                        return this._p.work
                    },
                    setWork: function(e) {
                        this._p.work = e
                    },
                    getTarget: function() {
                        return this._p.target
                    },
                    setTarget: function(e) {
                        this._p.target = l(e)
                    },
                    toString: function() {
                        return this._p.day + " " + this._p.name + (this._p.work ? "调休" : "") + " " + this._p.target
                    }
                }
            }, c = function(e) {
                var t = e.substr(0, 8),
                    n = i[e.charCodeAt(8) - a],
                    r = e.charCodeAt(9) === a,
                    o = e.substr(10, 8);
                return u(t, n, r, o)
            }, f = function(e) {
                var t = e.length,
                    n = e.substr(t - 18, 8),
                    r = i[e.charCodeAt(t - 10) - a],
                    o = e.charCodeAt(t - 9) === a,
                    s = e.substr(t - 8);
                return u(n, r, o, s)
            }, d = function(e) {
                var t = [],
                    n = function(e) {
                        var t = o.indexOf(e);
                        if (t < 0) return null;
                        var n = o.substr(t),
                            a = n.length % r;
                        for (a > 0 && (n = n.substr(a)); 0 !== n.indexOf(e) && n.length >= r;) n = n.substr(r);
                        return n
                    }(e);
                if (null == n) return t;
                for (; 0 === n.indexOf(e);) t.push(c(n)), n = n.substr(r);
                return t
            }, h = function(e) {
                var t = [],
                    n = function(e) {
                        var t = o.lastIndexOf(e);
                        if (t < 0) return null;
                        var n = e.length,
                            a = o.substr(0, t + n),
                            i = a.length,
                            s = i % r;
                        for (s > 0 && (a = a.substr(0, i - s)), i = a.length; i - n !== a.lastIndexOf(e) && i >= r;) i = (a = a.substr(0, i - r)).length;
                        return a
                    }(e);
                if (null == n) return t;
                for (var a = n.length, i = e.length; a - i === n.lastIndexOf(e);) t.push(f(n)), a = (n = n.substr(0, a - r)).length;
                return t.reverse(), t
            }, g = function(e) {
                var t = [];
                switch (e.length) {
                    case 1:
                        t = d(e[0].replace(/-/g, ""));
                        break;
                    case 3:
                        t = d(e[0] + s(e[1]) + s(e[2]))
                }
                return t.length < 1 ? null : t[0]
            }, p = function(e) {
                var t = [];
                switch (e.length) {
                    case 1:
                        t = d((e[0] + "").replace(/-/g, ""));
                        break;
                    case 2:
                        t = d(e[0] + s(e[1]))
                }
                return t
            }, m = function(e) {
                var t = [];
                switch (e.length) {
                    case 1:
                        t = h((e[0] + "").replace(/-/g, ""));
                        break;
                    case 3:
                        t = h(e[0] + s(e[1]) + s(e[2]))
                }
                return t
            }, v = function(e) {
                if (e) {
                    for (var t = []; e.length >= r;) {
                        var n = e.substr(0, r),
                            s = n.substr(0, 8),
                            l = g([s]);
                        if (l) {
                            for (var u = -1, c = 0, f = i.length; c < f; c++)
                                if (i[c] === l.getName()) {
                                    u = c;
                                    break
                                } if (u > -1) {
                                var d = s + String.fromCharCode(u + a) + (l.isWork() ? "0" : "1") + l.getTarget().replace(/-/g, "");
                                o = o.replace(new RegExp(d, "g"), n)
                            }
                        } else t.push(n);
                        e = e.substr(r)
                    }
                    t.length > 0 && (o += t.join(""))
                }
            }, C = function(e) {
                switch (e.length) {
                    case 1:
                        v(e[0]);
                        break;
                    case 2:
                        (t = e[0]) && (i = t), v(e[1])
                }
                var t
            }, {
                NAMES: n,
                getHoliday: function() {
                    return g(arguments)
                },
                getHolidays: function() {
                    return p(arguments)
                },
                getHolidaysByTarget: function() {
                    return m(arguments)
                },
                fix: function() {
                    C(arguments)
                }
            }),
            Q = {
                NUMBER: ["一", "二", "三", "四", "五", "六", "七", "八", "九"],
                COLOR: ["白", "黒", "碧", "绿", "黄", "白", "赤", "白", "紫"],
                WU_XING: ["水", "土", "木", "木", "土", "金", "金", "土", "火"],
                POSITION: ["坎", "坤", "震", "巽", "中", "乾", "兑", "艮", "离"],
                NAME_BEI_DOU: ["天枢", "天璇", "天玑", "天权", "玉衡", "开阳", "摇光", "洞明", "隐元"],
                NAME_XUAN_KONG: ["贪狼", "巨门", "禄存", "文曲", "廉贞", "武曲", "破军", "左辅", "右弼"],
                NAME_QI_MEN: ["天蓬", "天芮", "天冲", "天辅", "天禽", "天心", "天柱", "天任", "天英"],
                BA_MEN_QI_MEN: ["休", "死", "伤", "杜", "", "开", "惊", "生", "景"],
                NAME_TAI_YI: ["太乙", "摄提", "轩辕", "招摇", "天符", "青龙", "咸池", "太阴", "天乙"],
                TYPE_TAI_YI: ["吉神", "凶神", "安神", "安神", "凶神", "吉神", "凶神", "吉神", "吉神"],
                SONG_TAI_YI: ["门中太乙明，星官号贪狼，赌彩财喜旺，婚姻大吉昌，出入无阻挡，参谒见贤良，此行三五里，黑衣别阴阳。", "门前见摄提，百事必忧疑，相生犹自可，相克祸必临，死门并相会，老妇哭悲啼，求谋并吉事，尽皆不相宜，只可藏隐遁，若动伤身疾。", "出入会轩辕，凡事必缠牵，相生全不美，相克更忧煎，远行多不利，博彩尽输钱，九天玄女法，句句不虚言。", "招摇号木星，当之事莫行，相克行人阻，阴人口舌迎，梦寐多惊惧，屋响斧自鸣，阴阳消息理，万法弗违情。", "五鬼为天符，当门阴女谋，相克无好事，行路阻中途，走失难寻觅，道逢有尼姑，此星当门值，万事有灾除。", "神光跃青龙，财气喜重重，投入有酒食，赌彩最兴隆，更逢相生旺，休言克破凶，见贵安营寨，万事总吉同。", "吾将为咸池，当之尽不宜，出入多不利，相克有灾情，赌彩全输尽，求财空手回，仙人真妙语，愚人莫与知，动用虚惊退，反复逆风吹。", "坐临太阴星，百祸不相侵，求谋悉成就，知交有觅寻，回风归来路，恐有殃伏起，密语中记取，慎乎莫轻行。", "迎来天乙星，相逢百事兴，运用和合庆，茶酒喜相迎，求谋并嫁娶，好合有天成，祸福如神验，吉凶甚分明。"],
                LUCK_XUAN_KONG: ["吉", "凶", "凶", "吉", "凶", "吉", "凶", "吉", "吉"],
                LUCK_QI_MEN: ["大凶", "大凶", "小吉", "大吉", "大吉", "大吉", "小凶", "小吉", "小凶"],
                YIN_YANG_QI_MEN: ["阳", "阴", "阳", "阳", "阳", "阴", "阴", "阳", "阴"],
                fromIndex: function(e) {
                    return function(e) {
                        return {
                            _p: {
                                index: e
                            },
                            getNumber: function() {
                                return Q.NUMBER[this._p.index]
                            },
                            getColor: function() {
                                return Q.COLOR[this._p.index]
                            },
                            getWuXing: function() {
                                return Q.WU_XING[this._p.index]
                            },
                            getPosition: function() {
                                return Q.POSITION[this._p.index]
                            },
                            getPositionDesc: function() {
                                return J.POSITION_DESC[this.getPosition()]
                            },
                            getNameInXuanKong: function() {
                                return Q.NAME_XUAN_KONG[this._p.index]
                            },
                            getNameInBeiDou: function() {
                                return Q.NAME_BEI_DOU[this._p.index]
                            },
                            getNameInQiMen: function() {
                                return Q.NAME_QI_MEN[this._p.index]
                            },
                            getNameInTaiYi: function() {
                                return Q.NAME_TAI_YI[this._p.index]
                            },
                            getLuckInQiMen: function() {
                                return Q.LUCK_QI_MEN[this._p.index]
                            },
                            getLuckInXuanKong: function() {
                                return Q.LUCK_XUAN_KONG[this._p.index]
                            },
                            getYinYangInQiMen: function() {
                                return Q.YIN_YANG_QI_MEN[this._p.index]
                            },
                            getTypeInTaiYi: function() {
                                return Q.TYPE_TAI_YI[this._p.index]
                            },
                            getBaMenInQiMen: function() {
                                return Q.BA_MEN_QI_MEN[this._p.index]
                            },
                            getSongInTaiYi: function() {
                                return Q.SONG_TAI_YI[this._p.index]
                            },
                            getIndex: function() {
                                return this._p.index
                            },
                            toString: function() {
                                return this.getNumber() + this.getColor() + this.getWuXing() + this.getNameInBeiDou()
                            },
                            toFullString: function() {
                                var e = this.getNumber();
                                return e += this.getColor(), e += this.getWuXing(), e += " ", e += this.getPosition(), e += "(", e += this.getPositionDesc(), e += ") ", e += this.getNameInBeiDou(), e += " 玄空[", e += this.getNameInXuanKong(), e += " ", e += this.getLuckInXuanKong(), e += "] 奇门[", e += this.getNameInQiMen(), e += " ", e += this.getLuckInQiMen(), this.getBaMenInQiMen().length > 0 && (e += " ", e += this.getBaMenInQiMen(), e += "门"), e += " ", e += this.getYinYangInQiMen(), e += "] 太乙[", e += this.getNameInTaiYi(), e += " ", (e += this.getTypeInTaiYi()) + "]"
                            }
                        }
                    }(e)
                }
            },
            q = (E = {
                "甲": 1,
                "丙": 10,
                "戊": 10,
                "庚": 7,
                "壬": 4,
                "乙": 6,
                "丁": 9,
                "己": 9,
                "辛": 0,
                "癸": 3
            }, {
                MONTH_ZHI: ["", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子", "丑"],
                CHANG_SHENG: ["长生", "沐浴", "冠带", "临官", "帝旺", "衰", "病", "死", "墓", "绝", "胎", "养"],
                fromLunar: function(e) {
                    return function(e) {
                        return {
                            _p: {
                                sect: 2,
                                lunar: e
                            },
                            setSect: function(e) {
                                this._p.sect = 1 == e ? 1 : 2
                            },
                            getSect: function() {
                                return this._p.sect
                            },
                            getDayGanIndex: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayGanIndexExact2() : this._p.lunar.getDayGanIndexExact()
                            },
                            getDayZhiIndex: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayZhiIndexExact2() : this._p.lunar.getDayZhiIndexExact()
                            },
                            getYear: function() {
                                return this._p.lunar.getYearInGanZhiExact()
                            },
                            getYearGan: function() {
                                return this._p.lunar.getYearGanExact()
                            },
                            getYearZhi: function() {
                                return this._p.lunar.getYearZhiExact()
                            },
                            getYearHideGan: function() {
                                return J.ZHI_HIDE_GAN[this.getYearZhi()]
                            },
                            getYearWuXing: function() {
                                return J.WU_XING_GAN[this.getYearGan()] + J.WU_XING_ZHI[this.getYearZhi()]
                            },
                            getYearNaYin: function() {
                                return J.NAYIN[this.getYear()]
                            },
                            getYearShiShenGan: function() {
                                return J.SHI_SHEN_GAN[this.getDayGan() + this.getYearGan()]
                            },
                            getYearShiShenZhi: function() {
                                for (var e = this.getDayGan(), t = this.getYearZhi(), n = J.ZHI_HIDE_GAN[t], r = [], a = 0, i = n.length; a < i; a++) r.push(J.SHI_SHEN_ZHI[e + t + n[a]]);
                                return r
                            },
                            _getDiShi: function(e) {
                                var t = E[this.getDayGan()] + (this.getDayGanIndex() % 2 == 0 ? e : -e);
                                return t >= 12 && (t -= 12), t < 0 && (t += 12), q.CHANG_SHENG[t]
                            },
                            getYearDiShi: function() {
                                return this._getDiShi(this._p.lunar.getYearZhiIndexExact())
                            },
                            getYearXun: function() {
                                return this._p.lunar.getYearXunExact()
                            },
                            getYearXunKong: function() {
                                return this._p.lunar.getYearXunKongExact()
                            },
                            getMonth: function() {
                                return this._p.lunar.getMonthInGanZhiExact()
                            },
                            getMonthGan: function() {
                                return this._p.lunar.getMonthGanExact()
                            },
                            getMonthZhi: function() {
                                return this._p.lunar.getMonthZhiExact()
                            },
                            getMonthHideGan: function() {
                                return J.ZHI_HIDE_GAN[this.getMonthZhi()]
                            },
                            getMonthWuXing: function() {
                                return J.WU_XING_GAN[this.getMonthGan()] + J.WU_XING_ZHI[this.getMonthZhi()]
                            },
                            getMonthNaYin: function() {
                                return J.NAYIN[this.getMonth()]
                            },
                            getMonthShiShenGan: function() {
                                return J.SHI_SHEN_GAN[this.getDayGan() + this.getMonthGan()]
                            },
                            getMonthShiShenZhi: function() {
                                for (var e = this.getDayGan(), t = this.getMonthZhi(), n = J.ZHI_HIDE_GAN[t], r = [], a = 0, i = n.length; a < i; a++) r.push(J.SHI_SHEN_ZHI[e + t + n[a]]);
                                return r
                            },
                            getMonthDiShi: function() {
                                return this._getDiShi(this._p.lunar.getMonthZhiIndexExact())
                            },
                            getMonthXun: function() {
                                return this._p.lunar.getMonthXunExact()
                            },
                            getMonthXunKong: function() {
                                return this._p.lunar.getMonthXunKongExact()
                            },
                            getDay: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayInGanZhiExact2() : this._p.lunar.getDayInGanZhiExact()
                            },
                            getDayGan: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayGanExact2() : this._p.lunar.getDayGanExact()
                            },
                            getDayZhi: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayZhiExact2() : this._p.lunar.getDayZhiExact()
                            },
                            getDayHideGan: function() {
                                return J.ZHI_HIDE_GAN[this.getDayZhi()]
                            },
                            getDayWuXing: function() {
                                return J.WU_XING_GAN[this.getDayGan()] + J.WU_XING_ZHI[this.getDayZhi()]
                            },
                            getDayNaYin: function() {
                                return J.NAYIN[this.getDay()]
                            },
                            getDayShiShenGan: function() {
                                return "日主"
                            },
                            getDayShiShenZhi: function() {
                                for (var e = this.getDayGan(), t = this.getDayZhi(), n = J.ZHI_HIDE_GAN[t], r = [], a = 0, i = n.length; a < i; a++) r.push(J.SHI_SHEN_ZHI[e + t + n[a]]);
                                return r
                            },
                            getDayDiShi: function() {
                                return this._getDiShi(this.getDayZhiIndex())
                            },
                            getDayXun: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayXunExact2() : this._p.lunar.getDayXunExact()
                            },
                            getDayXunKong: function() {
                                return 2 == this._p.sect ? this._p.lunar.getDayXunKongExact2() : this._p.lunar.getDayXunKongExact()
                            },
                            getTime: function() {
                                return this._p.lunar.getTimeInGanZhi()
                            },
                            getTimeGan: function() {
                                return this._p.lunar.getTimeGan()
                            },
                            getTimeZhi: function() {
                                return this._p.lunar.getTimeZhi()
                            },
                            getTimeHideGan: function() {
                                return J.ZHI_HIDE_GAN[this.getTimeZhi()]
                            },
                            getTimeWuXing: function() {
                                return J.WU_XING_GAN[this.getTimeGan()] + J.WU_XING_ZHI[this.getTimeZhi()]
                            },
                            getTimeNaYin: function() {
                                return J.NAYIN[this.getTime()]
                            },
                            getTimeShiShenGan: function() {
                                return J.SHI_SHEN_GAN[this.getDayGan() + this.getTimeGan()]
                            },
                            getTimeShiShenZhi: function() {
                                for (var e = this.getDayGan(), t = this.getTimeZhi(), n = J.ZHI_HIDE_GAN[t], r = [], a = 0, i = n.length; a < i; a++) r.push(J.SHI_SHEN_ZHI[e + t + n[a]]);
                                return r
                            },
                            getTimeDiShi: function() {
                                return this._getDiShi(this._p.lunar.getTimeZhiIndex())
                            },
                            getTimeXun: function() {
                                return this._p.lunar.getTimeXun()
                            },
                            getTimeXunKong: function() {
                                return this._p.lunar.getTimeXunKong()
                            },
                            getTaiYuan: function() {
                                var e = this._p.lunar.getMonthGanIndexExact() + 1;
                                e >= 10 && (e -= 10);
                                var t = this._p.lunar.getMonthZhiIndexExact() + 3;
                                return t >= 12 && (t -= 12), J.GAN[e + 1] + J.ZHI[t + 1]
                            },
                            getTaiYuanNaYin: function() {
                                return J.NAYIN[this.getTaiYuan()]
                            },
                            getMingGong: function() {
                                for (var t = 0, n = 0, r = 0, a = q.MONTH_ZHI.length; r < a; r++) {
                                    var i = q.MONTH_ZHI[r];
                                    e.getMonthZhiExact() === i && (t = r), e.getTimeZhi() === i && (n = r)
                                }
                                var o = 26 - (t + n);
                                o > 12 && (o -= 12);
                                var s = J.getJiaZiIndex(e.getMonthInGanZhiExact()) - (t - o);
                                return s >= 60 && (s -= 60), s < 0 && (s += 60), J.JIA_ZI[s]
                            },
                            getMingGongNaYin: function() {
                                return J.NAYIN[this.getMingGong()]
                            },
                            getShenGong: function() {
                                for (var t = 0, n = 0, r = 0, a = q.MONTH_ZHI.length; r < a; r++) {
                                    var i = q.MONTH_ZHI[r];
                                    e.getMonthZhiExact() === i && (t = r), e.getTimeZhi() === i && (n = r)
                                }
                                var o = (2 + (t + n)) % 12,
                                    s = J.getJiaZiIndex(e.getMonthInGanZhiExact()) - (t - o);
                                return s >= 60 && (s -= 60), s < 0 && (s += 60), J.JIA_ZI[s]
                            },
                            getShenGongNaYin: function() {
                                return J.NAYIN[this.getShenGong()]
                            },
                            getLunar: function() {
                                return this._p.lunar
                            },
                            getYun: function(e, t) {
                                t = 2 == t ? t : 1;
                                var n = this.getLunar(),
                                    r = n.getYearGanIndexExact() % 2 == 0,
                                    a = 1 === e,
                                    i = r && a || !r && !a,
                                    o = function() {
                                        var e, r, a, o = n.getPrevJie(),
                                            s = n.getNextJie(),
                                            l = n.getSolar(),
                                            u = i ? l : o.getSolar(),
                                            c = i ? s.getSolar() : l,
                                            f = 0;
                                        if (2 === t) {
                                            var d = Math.floor((c.getCalendar() - u.getCalendar()) / 6e4);
                                            d -= 4320 * (e = Math.floor(d / 4320)), d -= 360 * (r = Math.floor(d / 360)), f = 2 * (d -= 12 * (a = Math.floor(d / 12)))
                                        } else {
                                            var h = (23 === c.getHour() ? 11 : J.getTimeZhiIndex(c.toYmdHms().substr(11, 5))) - (23 === u.getHour() ? 11 : J.getTimeZhiIndex(u.toYmdHms().substr(11, 5))),
                                                g = Y.getDaysBetweenYmd(u.getYear(), u.getMonth(), u.getDay(), c.getYear(), c.getMonth(), c.getDay());
                                            h < 0 && (h += 12, g--);
                                            var p = Math.floor(10 * h / 30);
                                            r = 4 * g + p, a = 10 * h - 30 * p, r -= 12 * (e = Math.floor(r / 12))
                                        }
                                        return {
                                            year: e,
                                            month: r,
                                            day: a,
                                            hour: f
                                        }
                                    }(),
                                    s = function(e, t) {
                                        return {
                                            _p: {
                                                index: t,
                                                liuNian: e
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getMonthInChinese: function() {
                                                return J.MONTH[this._p.index + 1]
                                            },
                                            getGanZhi: function() {
                                                var t = 0,
                                                    n = e.getGanZhi().substr(0, 1);
                                                return "甲" === n || "己" === n ? t = 2 : "乙" === n || "庚" === n ? t = 4 : "丙" === n || "辛" === n ? t = 6 : "丁" !== n && "壬" !== n || (t = 8), J.GAN[(this._p.index + t) % 10 + 1] + J.ZHI[(this._p.index + J.BASE_MONTH_ZHI_INDEX) % 12 + 1]
                                            },
                                            getXun: function() {
                                                return J.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return J.getXunKong(this.getGanZhi())
                                            }
                                        }
                                    },
                                    l = function(e, t) {
                                        return {
                                            _p: {
                                                year: e.getStartYear() + t,
                                                age: e.getStartAge() + t,
                                                index: t,
                                                daYun: e,
                                                lunar: e.getLunar()
                                            },
                                            getYear: function() {
                                                return this._p.year
                                            },
                                            getAge: function() {
                                                return this._p.age
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getLunar: function() {
                                                return this._p.lunar
                                            },
                                            getGanZhi: function() {
                                                var e = J.getJiaZiIndex(this._p.lunar.getJieQiTable()["立春"].getLunar().getYearInGanZhiExact()) + this._p.index;
                                                return this._p.daYun.getIndex() > 0 && (e += this._p.daYun.getStartAge() - 1), e %= J.JIA_ZI.length, J.JIA_ZI[e]
                                            },
                                            getXun: function() {
                                                return J.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return J.getXunKong(this.getGanZhi())
                                            },
                                            getLiuYue: function() {
                                                for (var e = [], t = 0; t < 12; t++) e.push(s(this, t));
                                                return e
                                            }
                                        }
                                    },
                                    u = function(e, t, n) {
                                        return {
                                            _p: {
                                                year: e.getStartYear() + t,
                                                age: e.getStartAge() + t,
                                                index: t,
                                                daYun: e,
                                                forward: n,
                                                lunar: e.getLunar()
                                            },
                                            getYear: function() {
                                                return this._p.year
                                            },
                                            getAge: function() {
                                                return this._p.age
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getGanZhi: function() {
                                                var e = J.getJiaZiIndex(this._p.lunar.getTimeInGanZhi()),
                                                    t = this._p.index + 1;
                                                this._p.daYun.getIndex() > 0 && (t += this._p.daYun.getStartAge() - 1), e += this._p.forward ? t : -t;
                                                for (var n = J.JIA_ZI.length; e < 0;) e += n;
                                                return e %= n, J.JIA_ZI[e]
                                            },
                                            getXun: function() {
                                                return J.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return J.getXunKong(this.getGanZhi())
                                            }
                                        }
                                    },
                                    c = function(e, t) {
                                        var n, r, a, i, o = e.getLunar().getSolar().getYear(),
                                            s = e.getStartSolar().getYear();
                                        return t < 1 ? (n = o, r = 1, a = s - 1, i = s - o) : (a = (n = s + 10 * (t - 1)) + 9, i = 9 + (r = n - o + 1)), {
                                            _p: {
                                                startYear: n,
                                                endYear: a,
                                                startAge: r,
                                                endAge: i,
                                                index: t,
                                                yun: e,
                                                lunar: e.getLunar()
                                            },
                                            getStartYear: function() {
                                                return this._p.startYear
                                            },
                                            getEndYear: function() {
                                                return this._p.endYear
                                            },
                                            getStartAge: function() {
                                                return this._p.startAge
                                            },
                                            getEndAge: function() {
                                                return this._p.endAge
                                            },
                                            getIndex: function() {
                                                return this._p.index
                                            },
                                            getLunar: function() {
                                                return this._p.lunar
                                            },
                                            getGanZhi: function() {
                                                if (this._p.index < 1) return "";
                                                var e = J.getJiaZiIndex(this._p.lunar.getMonthInGanZhiExact());
                                                e += this._p.yun.isForward() ? this._p.index : -this._p.index;
                                                var t = J.JIA_ZI.length;
                                                return e >= t && (e -= t), e < 0 && (e += t), J.JIA_ZI[e]
                                            },
                                            getXun: function() {
                                                return J.getXun(this.getGanZhi())
                                            },
                                            getXunKong: function() {
                                                return J.getXunKong(this.getGanZhi())
                                            },
                                            getLiuNian: function(e) {
                                                e || (e = 10), this._p.index < 1 && (e = this._p.endYear - this._p.startYear + 1);
                                                for (var t = [], n = 0; n < e; n++) t.push(l(this, n));
                                                return t
                                            },
                                            getXiaoYun: function(e) {
                                                e || (e = 10), this._p.index < 1 && (e = this._p.endYear - this._p.startYear + 1);
                                                for (var t = [], n = 0; n < e; n++) t.push(u(this, n, this._p.yun.isForward()));
                                                return t
                                            }
                                        }
                                    };
                                return {
                                    _p: {
                                        gender: e,
                                        startYear: o.year,
                                        startMonth: o.month,
                                        startDay: o.day,
                                        startHour: o.hour,
                                        forward: i,
                                        lunar: n
                                    },
                                    getGender: function() {
                                        return this._p.gender
                                    },
                                    getStartYear: function() {
                                        return this._p.startYear
                                    },
                                    getStartMonth: function() {
                                        return this._p.startMonth
                                    },
                                    getStartDay: function() {
                                        return this._p.startDay
                                    },
                                    getStartHour: function() {
                                        return this._p.startHour
                                    },
                                    isForward: function() {
                                        return this._p.forward
                                    },
                                    getLunar: function() {
                                        return this._p.lunar
                                    },
                                    getStartSolar: function() {
                                        var e = this._p.lunar.getSolar(),
                                            t = Y.fromYmdHms(e.getYear(), e.getMonth(), e.getDay(), e.getHour(), e.getMinute(), e.getSecond());
                                        return t.setFullYear(e.getYear() + this._p.startYear), t.setMonth(e.getMonth() - 1 + this._p.startMonth), t.setDate(e.getDay() + this._p.startDay), t.setHours(e.getHour() + this._p.startHour), G.fromDate(t)
                                    },
                                    getDaYun: function(e) {
                                        e || (e = 10);
                                        for (var t = [], n = 0; n < e; n++) t.push(c(this, n));
                                        return t
                                    }
                                }
                            },
                            toString: function() {
                                return this.getYear() + " " + this.getMonth() + " " + this.getDay() + " " + this.getTime()
                            }
                        }
                    }(e)
                }
            }),
            ee = {
                fromYmdHms: function(e, t, n, r, a, i) {
                    return function(e, t, n, r, a, i) {
                        var o = R.fromYmdHms(e, t, n, r, a, i),
                            s = J.getTimeZhiIndex([(r < 10 ? "0" : "") + r, (a < 10 ? "0" : "") + a].join(":"));
                        return {
                            _p: {
                                ganIndex: (o.getDayGanIndexExact() % 5 * 2 + s) % 10,
                                zhiIndex: s,
                                lunar: o
                            },
                            getGanIndex: function() {
                                return this._p.ganIndex
                            },
                            getZhiIndex: function() {
                                return this._p.zhiIndex
                            },
                            getGan: function() {
                                return J.GAN[this._p.ganIndex + 1]
                            },
                            getZhi: function() {
                                return J.ZHI[this._p.zhiIndex + 1]
                            },
                            getGanZhi: function() {
                                return this.getGan() + this.getZhi()
                            },
                            getShengXiao: function() {
                                return J.SHENGXIAO[this._p.zhiIndex + 1]
                            },
                            getPositionXi: function() {
                                return J.POSITION_XI[this._p.ganIndex + 1]
                            },
                            getPositionXiDesc: function() {
                                return J.POSITION_DESC[this.getPositionXi()]
                            },
                            getPositionYangGui: function() {
                                return J.POSITION_YANG_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYangGuiDesc: function() {
                                return J.POSITION_DESC[this.getPositionYangGui()]
                            },
                            getPositionYinGui: function() {
                                return J.POSITION_YIN_GUI[this._p.ganIndex + 1]
                            },
                            getPositionYinGuiDesc: function() {
                                return J.POSITION_DESC[this.getPositionYinGui()]
                            },
                            getPositionFu: function(e) {
                                return (1 === e ? J.POSITION_FU : J.POSITION_FU_2)[this._p.ganIndex + 1]
                            },
                            getPositionFuDesc: function(e) {
                                return J.POSITION_DESC[this.getPositionFu(e)]
                            },
                            getPositionCai: function() {
                                return J.POSITION_CAI[this._p.ganIndex + 1]
                            },
                            getPositionCaiDesc: function() {
                                return J.POSITION_DESC[this.getPositionCai()]
                            },
                            getNaYin: function() {
                                return J.NAYIN[this.getGanZhi()]
                            },
                            getTianShen: function() {
                                return J.TIAN_SHEN[(this._p.zhiIndex + J.ZHI_TIAN_SHEN_OFFSET[this._p.lunar.getDayZhiExact()]) % 12 + 1]
                            },
                            getTianShenType: function() {
                                return J.TIAN_SHEN_TYPE[this.getTianShen()]
                            },
                            getTianShenLuck: function() {
                                return J.TIAN_SHEN_TYPE_LUCK[this.getTianShenType()]
                            },
                            getChong: function() {
                                return J.CHONG[this.getZhi()]
                            },
                            getSha: function() {
                                return J.SHA[this.getZhi()]
                            },
                            getChongShengXiao: function() {
                                for (var e = this.getChong(), t = 0, n = J.ZHI.length; t < n; t++)
                                    if (J.ZHI[t] === e) return J.SHENGXIAO[t];
                                return ""
                            },
                            getChongDesc: function() {
                                return "(" + this.getChongGan() + this.getChong() + ")" + this.getChongShengXiao()
                            },
                            getChongGan: function() {
                                return J.CHONG_GAN[this.getGan()]
                            },
                            getChongGanTie: function() {
                                return J.CHONG_GAN_TIE[this.getGan()]
                            },
                            getYi: function() {
                                return J.getTimeYi(this._p.lunar.getDayInGanZhiExact(), this.getGanZhi())
                            },
                            getJi: function() {
                                return J.getTimeJi(this._p.lunar.getDayInGanZhiExact(), this.getGanZhi())
                            },
                            getNineStar: function() {
                                var e = this._p.lunar.getSolar().toYmd(),
                                    t = this._p.lunar.getJieQiTable(),
                                    n = !1;
                                e >= t["冬至"].toYmd() && e < t["夏至"].toYmd() && (n = !0);
                                var r = n ? 7 : 3,
                                    a = this._p.lunar.getDayZhi();
                                "子午卯酉".indexOf(a) > -1 ? r = n ? 1 : 9 : "辰戌丑未".indexOf(a) > -1 && (r = n ? 4 : 6);
                                var i = n ? r + this._p.zhiIndex - 1 : r - this._p.zhiIndex - 1;
                                return i > 8 && (i -= 9), i < 0 && (i += 9), Q.fromIndex(i)
                            },
                            getXun: function() {
                                return J.getXun(this.getGanZhi())
                            },
                            getXunKong: function() {
                                return J.getXunKong(this.getGanZhi())
                            },
                            getMinHm: function() {
                                var e = this._p.lunar.getHour();
                                return e < 1 ? "00:00" : e > 22 ? "23:00" : (e % 2 == 0 && (e -= 1), (e < 10 ? "0" : "") + e + ":00")
                            },
                            getMaxHm: function() {
                                var e = this._p.lunar.getHour();
                                return e < 1 ? "00:59" : e > 22 ? "23:59" : (e % 2 != 0 && (e += 1), (e < 10 ? "0" : "") + e + ":59")
                            },
                            toString: function() {
                                return this.getGanZhi()
                            }
                        }
                    }(e, t, n, r, a, i)
                }
            },
            te = (F = [11, 13, 15, 17, 19, 21, 24, 0, 2, 4, 7, 9], A = "犯者夺纪", D = "犯者减寿", _ = "犯者损寿", b = "犯者削禄夺纪", B = "犯者三年内夫妇俱亡", I = (y = function(e, t, n, r) {
                return {
                    _p: {
                        name: e,
                        result: t || "",
                        everyMonth: !!n,
                        remark: r || ""
                    },
                    getName: function() {
                        return this._p.name
                    },
                    getResult: function() {
                        return this._p.result
                    },
                    isEveryMonth: function() {
                        return this._p.everyMonth
                    },
                    getRemark: function() {
                        return this._p.remark
                    },
                    toString: function() {
                        return this._p.name
                    },
                    toFullString: function() {
                        var e = [this._p.name];
                        return this._p.result && e.push(this._p.result), this._p.remark && e.push(this._p.remark), e.join(" ")
                    }
                }
            })("杨公忌"), x = y("四天王巡行", "", !0), w = y("斗降", A, !0), S = y("月朔", A, !0), T = y("月望", A, !0), O = y("月晦", D, !0), k = y("雷斋日", D, !0), M = y("九毒日", "犯者夭亡，奇祸不测"), N = y("人神在阴", "犯者得病", !0, "宜先一日即戒"), P = y("司命奏事", D, !0, "如月小，即戒廿九"), L = y("月晦", D, !0, "如月小，即戒廿九"), {
                XIU_27: ["角", "亢", "氐", "房", "心", "尾", "箕", "斗", "女", "虚", "危", "室", "壁", "奎", "娄", "胃", "昴", "毕", "觜", "参", "井", "鬼", "柳", "星", "张", "翼", "轸"],
                DAY_ZHAI_GUAN_YIN: ["1-8", "2-7", "2-9", "2-19", "3-3", "3-6", "3-13", "4-22", "5-3", "5-17", "6-16", "6-18", "6-19", "6-23", "7-13", "8-16", "9-19", "9-23", "10-2", "11-19", "11-24", "12-25"],
                FESTIVAL: {
                    "1-1": [y("天腊，玉帝校世人神气禄命", b), S],
                    "1-3": [y("万神都会", A), w],
                    "1-5": [y("五虚忌")],
                    "1-6": [y("六耗忌"), k],
                    "1-7": [y("上会日", _)],
                    "1-8": [y("五殿阎罗天子诞", A), x],
                    "1-9": [y("玉皇上帝诞", A)],
                    "1-13": [I],
                    "1-14": [y("三元降", D), x],
                    "1-15": [y("三元降", D), y("上元神会", A), T, x],
                    "1-16": [y("三元降", D)],
                    "1-19": [y("长春真人诞")],
                    "1-23": [y("三尸神奏事"), x],
                    "1-25": [O, y("天地仓开日", "犯者损寿，子带疾")],
                    "1-27": [w],
                    "1-28": [N],
                    "1-29": [x],
                    "1-30": [L, P, x],
                    "2-1": [y("一殿秦广王诞", A), S],
                    "2-2": [y("万神都会", A), y("福德土地正神诞", "犯者得祸")],
                    "2-3": [y("文昌帝君诞", b), w],
                    "2-6": [y("东华帝君诞"), k],
                    "2-8": [y("释迦牟尼佛出家", A), y("三殿宋帝王诞", A), y("张大帝诞", A), x],
                    "2-11": [I],
                    "2-14": [x],
                    "2-15": [y("释迦牟尼佛涅槃", b), y("太上老君诞", b), y("月望", b, !0), x],
                    "2-17": [y("东方杜将军诞")],
                    "2-18": [y("四殿五官王诞", b), y("至圣先师孔子讳辰", b)],
                    "2-19": [y("观音大士诞", A)],
                    "2-21": [y("普贤菩萨诞")],
                    "2-23": [x],
                    "2-25": [O],
                    "2-27": [w],
                    "2-28": [N],
                    "2-29": [x],
                    "2-30": [L, P, x],
                    "3-1": [y("二殿楚江王诞", A), S],
                    "3-3": [y("玄天上帝诞", A), w],
                    "3-6": [k],
                    "3-8": [y("六殿卞城王诞", A), x],
                    "3-9": [y("牛鬼神出", "犯者产恶胎"), I],
                    "3-12": [y("中央五道诞")],
                    "3-14": [x],
                    "3-15": [y("昊天上帝诞", A), y("玄坛诞", A), T, x],
                    "3-16": [y("准提菩萨诞", A)],
                    "3-19": [y("中岳大帝诞"), y("后土娘娘诞"), y("三茅降")],
                    "3-20": [y("天地仓开日", _), y("子孙娘娘诞")],
                    "3-23": [x],
                    "3-25": [O],
                    "3-27": [y("七殿泰山王诞"), w],
                    "3-28": [N, y("苍颉至圣先师诞", b), y("东岳大帝诞")],
                    "3-29": [x],
                    "3-30": [L, P, x],
                    "4-1": [y("八殿都市王诞", A), S],
                    "4-3": [w],
                    "4-4": [y("万神善会", "犯者失瘼夭胎"), y("文殊菩萨诞")],
                    "4-6": [k],
                    "4-7": [y("南斗、北斗、西斗同降", D), I],
                    "4-8": [y("释迦牟尼佛诞", A), y("万神善会", "犯者失瘼夭胎"), y("善恶童子降", "犯者血死"), y("九殿平等王诞"), x],
                    "4-14": [y("纯阳祖师诞", D), x],
                    "4-15": [T, y("钟离祖师诞"), x],
                    "4-16": [y("天地仓开日", _)],
                    "4-17": [y("十殿转轮王诞", A)],
                    "4-18": [y("天地仓开日", _), y("紫徽大帝诞", _)],
                    "4-20": [y("眼光圣母诞")],
                    "4-23": [x],
                    "4-25": [O],
                    "4-27": [w],
                    "4-28": [N],
                    "4-29": [x],
                    "4-30": [L, P, x],
                    "5-1": [y("南极长生大帝诞", A), S],
                    "5-3": [w],
                    "5-5": [y("地腊", b), y("五帝校定生人官爵", b), M, I],
                    "5-6": [M, k],
                    "5-7": [M],
                    "5-8": [y("南方五道诞"), x],
                    "5-11": [y("天地仓开日", _), y("天下都城隍诞")],
                    "5-12": [y("炳灵公诞")],
                    "5-13": [y("关圣降", b)],
                    "5-14": [y("夜子时为天地交泰", B), x],
                    "5-15": [T, M, x],
                    "5-16": [y("九毒日", B), y("天地元气造化万物之辰", B)],
                    "5-17": [M],
                    "5-18": [y("张天师诞")],
                    "5-22": [y("孝娥神诞", A)],
                    "5-23": [x],
                    "5-25": [M, O],
                    "5-26": [M],
                    "5-27": [M, w],
                    "5-28": [N],
                    "5-29": [x],
                    "5-30": [L, P, x],
                    "6-1": [S],
                    "6-3": [y("韦驮菩萨圣诞"), w, I],
                    "6-5": [y("南赡部洲转大轮", _)],
                    "6-6": [y("天地仓开日", _), k],
                    "6-8": [x],
                    "6-10": [y("金粟如来诞")],
                    "6-14": [x],
                    "6-15": [T, x],
                    "6-19": [y("观世音菩萨成道", A)],
                    "6-23": [y("南方火神诞", "犯者遭回禄"), x],
                    "6-24": [y("雷祖诞", b), y("关帝诞", b)],
                    "6-25": [O],
                    "6-27": [w],
                    "6-28": [N],
                    "6-29": [x],
                    "6-30": [L, P, x],
                    "7-1": [S, I],
                    "7-3": [w],
                    "7-5": [y("中会日", _, !1, "一作初七")],
                    "7-6": [k],
                    "7-7": [y("道德腊", b), y("五帝校生人善恶", b), y("魁星诞", b)],
                    "7-8": [x],
                    "7-10": [y("阴毒日", "", !1, "大忌")],
                    "7-12": [y("长真谭真人诞")],
                    "7-13": [y("大势至菩萨诞", D)],
                    "7-14": [y("三元降", D), x],
                    "7-15": [T, y("三元降", A), y("地官校籍", A), x],
                    "7-16": [y("三元降", D)],
                    "7-18": [y("西王母诞", A)],
                    "7-19": [y("太岁诞", A)],
                    "7-22": [y("增福财神诞", b)],
                    "7-23": [x],
                    "7-25": [O],
                    "7-27": [w],
                    "7-28": [N],
                    "7-29": [I, x],
                    "7-30": [y("地藏菩萨诞", A), L, P, x],
                    "8-1": [S, y("许真君诞")],
                    "8-3": [w, y("北斗诞", b), y("司命灶君诞", "犯者遭回禄")],
                    "8-5": [y("雷声大帝诞", A)],
                    "8-6": [k],
                    "8-8": [x],
                    "8-10": [y("北斗大帝诞")],
                    "8-12": [y("西方五道诞")],
                    "8-14": [x],
                    "8-15": [T, y("太明朝元", "犯者暴亡", !1, "宜焚香守夜"), x],
                    "8-16": [y("天曹掠刷真君降", "犯者贫夭")],
                    "8-18": [y("天人兴福之辰", "", !1, "宜斋戒，存想吉事")],
                    "8-23": [y("汉恒候张显王诞"), x],
                    "8-24": [y("灶君夫人诞")],
                    "8-25": [O],
                    "8-27": [w, y("至圣先师孔子诞", b), I],
                    "8-28": [N, y("四天会事")],
                    "8-29": [x],
                    "8-30": [y("诸神考校", "犯者夺算"), L, P, x],
                    "9-1": [S, y("南斗诞", b), y("北斗九星降世", A, !1, "此九日俱宜斋戒")],
                    "9-3": [w, y("五瘟神诞")],
                    "9-6": [k],
                    "9-8": [x],
                    "9-9": [y("斗母诞", b), y("酆都大帝诞"), y("玄天上帝飞升")],
                    "9-10": [y("斗母降", A)],
                    "9-11": [y("宜戒")],
                    "9-13": [y("孟婆尊神诞")],
                    "9-14": [x],
                    "9-15": [T, x],
                    "9-17": [y("金龙四大王诞", "犯者遭水厄")],
                    "9-19": [y("日宫月宫会合", D), y("观世音菩萨诞", D)],
                    "9-23": [x],
                    "9-25": [O, I],
                    "9-27": [w],
                    "9-28": [N],
                    "9-29": [x],
                    "9-30": [y("药师琉璃光佛诞", "犯者危疾"), L, P, x],
                    "10-1": [S, y("民岁腊", A), y("四天王降", "犯者一年内死")],
                    "10-3": [w, y("三茅诞")],
                    "10-5": [y("下会日", D), y("达摩祖师诞", D)],
                    "10-6": [k, y("天曹考察", A)],
                    "10-8": [y("佛涅槃日", "", !1, "大忌色欲"), x],
                    "10-10": [y("四天王降", "犯者一年内死")],
                    "10-11": [y("宜戒")],
                    "10-14": [y("三元降", D), x],
                    "10-15": [T, y("三元降", A), y("下元水府校籍", A), x],
                    "10-16": [y("三元降", D), x],
                    "10-23": [I, x],
                    "10-25": [O],
                    "10-27": [w, y("北极紫徽大帝降")],
                    "10-28": [N],
                    "10-29": [x],
                    "10-30": [L, P, x],
                    "11-1": [S],
                    "11-3": [w],
                    "11-4": [y("至圣先师孔子诞", b)],
                    "11-6": [y("西岳大帝诞")],
                    "11-8": [x],
                    "11-11": [y("天地仓开日", A), y("太乙救苦天尊诞", A)],
                    "11-14": [x],
                    "11-15": [y("月望", "上半夜犯男死 下半夜犯女死"), y("四天王巡行", "上半夜犯男死 下半夜犯女死")],
                    "11-17": [y("阿弥陀佛诞")],
                    "11-19": [y("太阳日宫诞", "犯者得奇祸")],
                    "11-21": [I],
                    "11-23": [y("张仙诞", "犯者绝嗣"), x],
                    "11-25": [y("掠刷大夫降", "犯者遭大凶"), O],
                    "11-26": [y("北方五道诞")],
                    "11-27": [w],
                    "11-28": [N],
                    "11-29": [x],
                    "11-30": [L, P, x],
                    "12-1": [S],
                    "12-3": [w],
                    "12-6": [y("天地仓开日", D), k],
                    "12-7": [y("掠刷大夫降", "犯者得恶疾")],
                    "12-8": [y("王侯腊", A), y("释迦如来成佛之辰"), x, y("初旬内戊日，亦名王侯腊", A)],
                    "12-12": [y("太素三元君朝真")],
                    "12-14": [x],
                    "12-15": [T, x],
                    "12-16": [y("南岳大帝诞")],
                    "12-19": [I],
                    "12-20": [y("天地交道", "犯者促寿")],
                    "12-21": [y("天猷上帝诞")],
                    "12-23": [y("五岳诞降"), x],
                    "12-24": [y("司今朝天奏人善恶", "犯者得大祸")],
                    "12-25": [y("三清玉帝同降，考察善恶", "犯者得奇祸"), O],
                    "12-27": [w],
                    "12-28": [N],
                    "12-29": [y("华严菩萨诞"), x],
                    "12-30": [y("诸神下降，察访善恶", "犯者男女俱亡")]
                },
                getXiu: function(e, t) {
                    return function(e, t) {
                        return te.XIU_27[(F[Math.abs(e) - 1] + t - 1) % te.XIU_27.length]
                    }(e, t)
                }
            }),
            ne = function() {
                var e = function(e, n, r, a, i, o) {
                        return t(R.fromYmdHms(e + ne.DEAD_YEAR - 1, n, r, a, i, o))
                    },
                    t = function(e) {
                        return {
                            _p: {
                                lunar: e
                            },
                            getLunar: function() {
                                return this._p.lunar
                            },
                            getYear: function() {
                                var e = this._p.lunar.getSolar().getYear(),
                                    t = e - ne.DEAD_YEAR;
                                return e === this._p.lunar.getYear() && t++, t
                            },
                            getMonth: function() {
                                return this._p.lunar.getMonth()
                            },
                            getDay: function() {
                                return this._p.lunar.getDay()
                            },
                            getYearInChinese: function() {
                                for (var e = this.getYear() + "", t = "", n = "0".charCodeAt(0), r = 0, a = e.length; r < a; r++) t += J.NUMBER[e.charCodeAt(r) - n];
                                return t
                            },
                            getMonthInChinese: function() {
                                return this._p.lunar.getMonthInChinese()
                            },
                            getDayInChinese: function() {
                                return this._p.lunar.getDayInChinese()
                            },
                            getFestivals: function() {
                                var e = te.FESTIVAL[this.getMonth() + "-" + this.getDay()];
                                return e || []
                            },
                            isMonthZhai: function() {
                                var e = this.getMonth();
                                return 1 === e || 5 === e || 9 === e
                            },
                            isDayYangGong: function() {
                                for (var e = this.getFestivals(), t = 0, n = e.length; t < n; t++)
                                    if ("杨公忌" === e[t].getName()) return !0;
                                return !1
                            },
                            isDayZhaiShuoWang: function() {
                                var e = this.getDay();
                                return 1 === e || 15 === e
                            },
                            isDayZhaiSix: function() {
                                var e = this.getDay();
                                return 8 === e || 14 === e || 15 === e || 23 === e || 29 === e || 30 === e || 28 === e && 30 !== V.fromYm(this._p.lunar.getYear(), this.getMonth()).getDayCount()
                            },
                            isDayZhaiTen: function() {
                                var e = this.getDay();
                                return 1 === e || 8 === e || 14 === e || 15 === e || 18 === e || 23 === e || 24 === e || 28 === e || 29 === e || 30 === e
                            },
                            isDayZhaiGuanYin: function() {
                                for (var e = this.getMonth() + "-" + this.getDay(), t = 0, n = te.DAY_ZHAI_GUAN_YIN.length; t < n; t++)
                                    if (e === te.DAY_ZHAI_GUAN_YIN[t]) return !0;
                                return !1
                            },
                            getXiu: function() {
                                return te.getXiu(this.getMonth(), this.getDay())
                            },
                            getXiuLuck: function() {
                                return J.XIU_LUCK[this.getXiu()]
                            },
                            getXiuSong: function() {
                                return J.XIU_SONG[this.getXiu()]
                            },
                            getZheng: function() {
                                return J.ZHENG[this.getXiu()]
                            },
                            getAnimal: function() {
                                return J.ANIMAL[this.getXiu()]
                            },
                            getGong: function() {
                                return J.GONG[this.getXiu()]
                            },
                            getShou: function() {
                                return J.SHOU[this.getGong()]
                            },
                            toString: function() {
                                return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese()
                            },
                            toFullString: function() {
                                for (var e = this.toString(), t = this.getFestivals(), n = 0, r = t.length; n < r; n++) e += " (" + t[n] + ")";
                                return e
                            }
                        }
                    };
                return {
                    DEAD_YEAR: -543,
                    fromYmdHms: function(t, n, r, a, i, o) {
                        return e(t, n, r, a, i, o)
                    },
                    fromYmd: function(t, n, r) {
                        return e(t, n, r, 0, 0, 0)
                    },
                    fromLunar: function(e) {
                        return t(e)
                    }
                }
            }(),
            re = {
                create: function(e, t) {
                    return function(e, t) {
                        return {
                            _p: {
                                name: e,
                                remark: t || ""
                            },
                            getName: function() {
                                return this._p.name
                            },
                            getRemark: function() {
                                return this._p.remark
                            },
                            toString: function() {
                                return this._p.name
                            },
                            toFullString: function() {
                                var e = [this._p.name];
                                return this._p.remark && e.push("[" + this._p.remark + "]"), e.join("")
                            }
                        }
                    }(e, t)
                }
            },
            ae = function() {
                var e = re.create;
                return {
                    SAN_HUI: ["1-7", "7-7", "10-15"],
                    SAN_YUAN: ["1-15", "7-15", "10-15"],
                    WU_LA: ["1-1", "5-5", "7-7", "10-1", "12-8"],
                    AN_WU: ["未", "戌", "辰", "寅", "午", "子", "酉", "申", "巳", "亥", "卯", "丑"],
                    BA_HUI: {
                        "丙午": "天会",
                        "壬午": "地会",
                        "壬子": "人会",
                        "庚午": "日会",
                        "庚申": "月会",
                        "辛酉": "星辰会",
                        "甲辰": "五行会",
                        "甲戌": "四时会"
                    },
                    BA_JIE: {
                        "立春": "东北方度仙上圣天尊同梵炁始青天君下降",
                        "春分": "东方玉宝星上天尊同青帝九炁天君下降",
                        "立夏": "东南方好生度命天尊同梵炁始丹天君下降",
                        "夏至": "南方玄真万福天尊同赤帝三炁天君下降",
                        "立秋": "西南方太灵虚皇天尊同梵炁始素天君下降",
                        "秋分": "西方太妙至极天尊同白帝七炁天君下降",
                        "立冬": "西北方无量太华天尊同梵炁始玄天君下降",
                        "冬至": "北方玄上玉宸天尊同黑帝五炁天君下降"
                    },
                    FESTIVAL: {
                        "1-1": [e("天腊之辰", "天腊，此日五帝会于东方九炁青天")],
                        "1-3": [e("郝真人圣诞"), e("孙真人圣诞")],
                        "1-5": [e("孙祖清静元君诞")],
                        "1-7": [e("举迁赏会", "此日上元赐福，天官同地水二官考校罪福")],
                        "1-9": [e("玉皇上帝圣诞")],
                        "1-13": [e("关圣帝君飞升")],
                        "1-15": [e("上元天官圣诞"), e("老祖天师圣诞")],
                        "1-19": [e("长春邱真人(邱处机)圣诞")],
                        "1-28": [e("许真君(许逊天师)圣诞")],
                        "2-1": [e("勾陈天皇大帝圣诞"), e("长春刘真人(刘渊然)圣诞")],
                        "2-2": [e("土地正神诞"), e("姜太公圣诞")],
                        "2-3": [e("文昌梓潼帝君圣诞")],
                        "2-6": [e("东华帝君圣诞")],
                        "2-13": [e("度人无量葛真君圣诞")],
                        "2-15": [e("太清道德天尊(太上老君)圣诞")],
                        "2-19": [e("慈航真人圣诞")],
                        "3-1": [e("谭祖(谭处端)长真真人圣诞")],
                        "3-3": [e("玄天上帝圣诞")],
                        "3-6": [e("眼光娘娘圣诞")],
                        "3-15": [e("天师张大真人圣诞"), e("财神赵公元帅圣诞")],
                        "3-16": [e("三茅真君得道之辰"), e("中岳大帝圣诞")],
                        "3-18": [e("王祖(王处一)玉阳真人圣诞"), e("后土娘娘圣诞")],
                        "3-19": [e("太阳星君圣诞")],
                        "3-20": [e("子孙娘娘圣诞")],
                        "3-23": [e("天后妈祖圣诞")],
                        "3-26": [e("鬼谷先师诞")],
                        "3-28": [e("东岳大帝圣诞")],
                        "4-1": [e("长生谭真君成道之辰")],
                        "4-10": [e("何仙姑圣诞")],
                        "4-14": [e("吕祖纯阳祖师圣诞")],
                        "4-15": [e("钟离祖师圣诞")],
                        "4-18": [e("北极紫微大帝圣诞"), e("泰山圣母碧霞元君诞"), e("华佗神医先师诞")],
                        "4-20": [e("眼光圣母娘娘诞")],
                        "4-28": [e("神农先帝诞")],
                        "5-1": [e("南极长生大帝圣诞")],
                        "5-5": [e("地腊之辰", "地腊，此日五帝会于南方三炁丹天"), e("南方雷祖圣诞"), e("地祗温元帅圣诞"), e("雷霆邓天君圣诞")],
                        "5-11": [e("城隍爷圣诞")],
                        "5-13": [e("关圣帝君降神"), e("关平太子圣诞")],
                        "5-18": [e("张天师圣诞")],
                        "5-20": [e("马祖丹阳真人圣诞")],
                        "5-29": [e("紫青白祖师圣诞")],
                        "6-1": [e("南斗星君下降")],
                        "6-2": [e("南斗星君下降")],
                        "6-3": [e("南斗星君下降")],
                        "6-4": [e("南斗星君下降")],
                        "6-5": [e("南斗星君下降")],
                        "6-6": [e("南斗星君下降")],
                        "6-10": [e("刘海蟾祖师圣诞")],
                        "6-15": [e("灵官王天君圣诞")],
                        "6-19": [e("慈航(观音)成道日")],
                        "6-23": [e("火神圣诞")],
                        "6-24": [e("南极大帝中方雷祖圣诞"), e("关圣帝君圣诞")],
                        "6-26": [e("二郎真君圣诞")],
                        "7-7": [e("道德腊之辰", "道德腊，此日五帝会于西方七炁素天"), e("庆生中会", "此日中元赦罪，地官同天水二官考校罪福")],
                        "7-12": [e("西方雷祖圣诞")],
                        "7-15": [e("中元地官大帝圣诞")],
                        "7-18": [e("王母娘娘圣诞")],
                        "7-20": [e("刘祖(刘处玄)长生真人圣诞")],
                        "7-22": [e("财帛星君文财神增福相公李诡祖圣诞")],
                        "7-26": [e("张三丰祖师圣诞")],
                        "8-1": [e("许真君飞升日")],
                        "8-3": [e("九天司命灶君诞")],
                        "8-5": [e("北方雷祖圣诞")],
                        "8-10": [e("北岳大帝诞辰")],
                        "8-15": [e("太阴星君诞")],
                        "9-1": [e("北斗九皇降世之辰")],
                        "9-2": [e("北斗九皇降世之辰")],
                        "9-3": [e("北斗九皇降世之辰")],
                        "9-4": [e("北斗九皇降世之辰")],
                        "9-5": [e("北斗九皇降世之辰")],
                        "9-6": [e("北斗九皇降世之辰")],
                        "9-7": [e("北斗九皇降世之辰")],
                        "9-8": [e("北斗九皇降世之辰")],
                        "9-9": [e("北斗九皇降世之辰"), e("斗姥元君圣诞"), e("重阳帝君圣诞"), e("玄天上帝飞升"), e("酆都大帝圣诞")],
                        "9-22": [e("增福财神诞")],
                        "9-23": [e("萨翁真君圣诞")],
                        "9-28": [e("五显灵官马元帅圣诞")],
                        "10-1": [e("民岁腊之辰", "民岁腊，此日五帝会于北方五炁黑天"), e("东皇大帝圣诞")],
                        "10-3": [e("三茅应化真君圣诞")],
                        "10-6": [e("天曹诸司五岳五帝圣诞")],
                        "10-15": [e("下元水官大帝圣诞"), e("建生大会", "此日下元解厄，水官同天地二官考校罪福")],
                        "10-18": [e("地母娘娘圣诞")],
                        "10-19": [e("长春邱真君飞升")],
                        "10-20": [e("虚靖天师(即三十代天师弘悟张真人)诞")],
                        "11-6": [e("西岳大帝圣诞")],
                        "11-9": [e("湘子韩祖圣诞")],
                        "11-11": [e("太乙救苦天尊圣诞")],
                        "11-26": [e("北方五道圣诞")],
                        "12-8": [e("王侯腊之辰", "王侯腊，此日五帝会于上方玄都玉京")],
                        "12-16": [e("南岳大帝圣诞"), e("福德正神诞")],
                        "12-20": [e("鲁班先师圣诞")],
                        "12-21": [e("天猷上帝圣诞")],
                        "12-22": [e("重阳祖师圣诞")],
                        "12-23": [e("祭灶王", "最适宜谢旧年太岁，开启拜新年太岁")],
                        "12-25": [e("玉帝巡天"), e("天神下降")],
                        "12-29": [e("清静孙真君(孙不二)成道")]
                    }
                }
            }(),
            ie = function() {
                var e = function(e, n, r, a, i, o) {
                        return t(R.fromYmdHms(e + ie.BIRTH_YEAR, n, r, a, i, o))
                    },
                    t = function(e) {
                        return {
                            _p: {
                                lunar: e
                            },
                            getLunar: function() {
                                return this._p.lunar
                            },
                            getYear: function() {
                                return this._p.lunar.getYear() - ie.BIRTH_YEAR
                            },
                            getMonth: function() {
                                return this._p.lunar.getMonth()
                            },
                            getDay: function() {
                                return this._p.lunar.getDay()
                            },
                            getYearInChinese: function() {
                                for (var e = this.getYear() + "", t = "", n = "0".charCodeAt(0), r = 0, a = e.length; r < a; r++) t += J.NUMBER[e.charCodeAt(r) - n];
                                return t
                            },
                            getMonthInChinese: function() {
                                return this._p.lunar.getMonthInChinese()
                            },
                            getDayInChinese: function() {
                                return this._p.lunar.getDayInChinese()
                            },
                            getFestivals: function() {
                                var e = [],
                                    t = ae.FESTIVAL[this.getMonth() + "-" + this.getDay()];
                                t && (e = e.concat(t));
                                var n = this._p.lunar.getJieQi();
                                "冬至" === n ? e.push(re.create("元始天尊圣诞")) : "夏至" === n && e.push(re.create("灵宝天尊圣诞"));
                                var r = ae.BA_JIE[n];
                                return r && e.push(re.create(r)), (r = ae.BA_HUI[this._p.lunar.getDayInGanZhi()]) && e.push(re.create(r)), e
                            },
                            _isDayIn: function(e) {
                                for (var t = this.getMonth() + "-" + this.getDay(), n = 0, r = e.length; n < r; n++)
                                    if (t === e[n]) return !0;
                                return !1
                            },
                            isDaySanHui: function() {
                                return this._isDayIn(ae.SAN_HUI)
                            },
                            isDaySanYuan: function() {
                                return this._isDayIn(ae.SAN_YUAN)
                            },
                            isDayBaJie: function() {
                                return !!ae.BA_JIE[this._p.lunar.getJieQi()]
                            },
                            isDayWuLa: function() {
                                return this._isDayIn(ae.WU_LA)
                            },
                            isDayBaHui: function() {
                                return !!ae.BA_HUI[this._p.lunar.getDayInGanZhi()]
                            },
                            isDayMingWu: function() {
                                return "戊" === this._p.lunar.getDayGan()
                            },
                            isDayAnWu: function() {
                                return this._p.lunar.getDayZhi() === ae.AN_WU[Math.abs(this.getMonth()) - 1]
                            },
                            isDayWu: function() {
                                return this.isDayMingWu() || this.isDayAnWu()
                            },
                            isDayTianShe: function() {
                                var e = !1,
                                    t = this._p.lunar.getMonthZhi(),
                                    n = this._p.lunar.getDayInGanZhi();
                                switch (t) {
                                    case "寅":
                                    case "卯":
                                    case "辰":
                                        "戊寅" === n && (e = !0);
                                        break;
                                    case "巳":
                                    case "午":
                                    case "未":
                                        "甲午" === n && (e = !0);
                                        break;
                                    case "申":
                                    case "酉":
                                    case "戌":
                                        "戊申" === n && (e = !0);
                                        break;
                                    case "亥":
                                    case "子":
                                    case "丑":
                                        "甲子" === n && (e = !0)
                                }
                                return e
                            },
                            toString: function() {
                                return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese()
                            },
                            toFullString: function() {
                                return "道歷" + this.getYearInChinese() + "年，天運" + this._p.lunar.getYearInGanZhi() + "年，" + this._p.lunar.getMonthInGanZhi() + "月，" + this._p.lunar.getDayInGanZhi() + "日。" + this.getMonthInChinese() + "月" + this.getDayInChinese() + "日，" + this._p.lunar.getTimeZhi() + "時。"
                            }
                        }
                    };
                return {
                    BIRTH_YEAR: -2697,
                    fromYmdHms: function(t, n, r, a, i, o) {
                        return e(t, n, r, a, i, o)
                    },
                    fromYmd: function(t, n, r) {
                        return e(t, n, r, 0, 0, 0)
                    },
                    fromLunar: function(e) {
                        return t(e)
                    }
                }
            }();
        return {
            ShouXingUtil: W,
            SolarUtil: $,
            LunarUtil: J,
            FotoUtil: te,
            TaoUtil: ae,
            Solar: G,
            Lunar: R,
            Foto: ne,
            Tao: ie,
            NineStar: Q,
            EightChar: q,
            SolarWeek: H,
            SolarMonth: Z,
            SolarSeason: j,
            SolarHalfYear: z,
            SolarYear: U,
            LunarMonth: V,
            LunarYear: X,
            LunarTime: ee,
            HolidayUtil: K
        }
    }));
const {
    Solar: Pi,
    Lunar: Li,
    Foto: Yi,
    Tao: Gi,
    NineStar: Ri,
    EightChar: Hi,
    SolarWeek: Zi,
    SolarMonth: ji,
    SolarSeason: zi,
    SolarHalfYear: Ui,
    SolarYear: Xi,
    LunarMonth: Vi,
    LunarYear: Wi,
    LunarTime: $i,
    ShouXingUtil: Ji,
    SolarUtil: Ki,
    LunarUtil: Qi,
    FotoUtil: qi,
    TaoUtil: eo,
    HolidayUtil: to
} = Ni.exports;
var no = {
    Solar: Pi,
    Lunar: Li,
    Foto: Yi,
    Tao: Gi,
    NineStar: Ri,
    EightChar: Hi,
    SolarWeek: Zi,
    SolarMonth: ji,
    SolarSeason: zi,
    SolarHalfYear: Ui,
    SolarYear: Xi,
    LunarMonth: Vi,
    LunarYear: Wi,
    LunarTime: $i,
    ShouXingUtil: Ji,
    SolarUtil: Ki,
    LunarUtil: Qi,
    FotoUtil: qi,
    TaoUtil: eo,
    HolidayUtil: to
};
const ro = document.body.clientWidth < 600,
    ao = !!("ontouchstart" in window),
    io = () => window.location.protocol.includes("http"),
    oo = () => {
        var e = window.navigator.userAgent.toLowerCase();
        return e.indexOf("firefox") > 0 ? "firefox" : e.indexOf("edg") > 0 ? "edge" : e.indexOf("chrome/") > 0 ? "chrome" : e.indexOf("safari/") > 0 ? "safari" : "other"
    },
    so = () => "backdropFilter" in document.documentElement.style;
var lo = {
        exports: {}
    },
    uo = lo.exports = function e(t, n, r) {
        function a(o, s) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof Nn && Nn;
                    if (!s && l) return l(o, !0);
                    if (i) return i(o, !0);
                    var u = new Error("Cannot find module '" + o + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[o] = {
                    exports: {}
                };
                t[o][0].call(c.exports, (function(e) {
                    var n = t[o][1][e];
                    return a(n || e)
                }), c, c.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var i = "function" == typeof Nn && Nn, o = 0; o < r.length; o++) a(r[o]);
        return a
    }({
        1: [function(e, t, n) {
            (function(e) {
                var n, r, a = e.MutationObserver || e.WebKitMutationObserver;
                if (a) {
                    var i = 0,
                        o = new a(c),
                        s = e.document.createTextNode("");
                    o.observe(s, {
                        characterData: !0
                    }), n = function() {
                        s.data = i = ++i % 2
                    }
                } else if (e.setImmediate || void 0 === e.MessageChannel) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                    var t = e.document.createElement("script");
                    t.onreadystatechange = function() {
                        c(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
                    }, e.document.documentElement.appendChild(t)
                } : function() {
                    setTimeout(c, 0)
                };
                else {
                    var l = new e.MessageChannel;
                    l.port1.onmessage = c, n = function() {
                        l.port2.postMessage(0)
                    }
                }
                var u = [];

                function c() {
                    var e, t;
                    r = !0;
                    for (var n = u.length; n;) {
                        for (t = u, u = [], e = -1; ++e < n;) t[e]();
                        n = u.length
                    }
                    r = !1
                }

                function f(e) {
                    1 !== u.push(e) || r || n()
                }
                t.exports = f
            }).call(this, void 0 !== Kt ? Kt : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(e, t, n) {
            var r = e(1);

            function a() {}
            var i = {},
                o = ["REJECTED"],
                s = ["FULFILLED"],
                l = ["PENDING"];

            function u(e) {
                if ("function" != typeof e) throw new TypeError("resolver must be a function");
                this.state = l, this.queue = [], this.outcome = void 0, e !== a && h(this, e)
            }

            function c(e, t, n) {
                this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
            }

            function f(e, t, n) {
                r((function() {
                    var r;
                    try {
                        r = t(n)
                    } catch (nh) {
                        return i.reject(e, nh)
                    }
                    r === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, r)
                }))
            }

            function d(e) {
                var t = e && e.then;
                if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof t) return function() {
                    t.apply(e, arguments)
                }
            }

            function h(e, t) {
                var n = !1;

                function r(t) {
                    n || (n = !0, i.reject(e, t))
                }

                function a(t) {
                    n || (n = !0, i.resolve(e, t))
                }

                function o() {
                    t(a, r)
                }
                var s = g(o);
                "error" === s.status && r(s.value)
            }

            function g(e, t) {
                var n = {};
                try {
                    n.value = e(t), n.status = "success"
                } catch (nh) {
                    n.status = "error", n.value = nh
                }
                return n
            }

            function p(e) {
                return e instanceof this ? e : i.resolve(new this(a), e)
            }

            function m(e) {
                var t = new this(a);
                return i.reject(t, e)
            }

            function v(e) {
                var t = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var n = e.length,
                    r = !1;
                if (!n) return this.resolve([]);
                for (var o = new Array(n), s = 0, l = -1, u = new this(a); ++l < n;) c(e[l], l);
                return u;

                function c(e, a) {
                    function l(e) {
                        o[a] = e, ++s !== n || r || (r = !0, i.resolve(u, o))
                    }
                    t.resolve(e).then(l, (function(e) {
                        r || (r = !0, i.reject(u, e))
                    }))
                }
            }

            function C(e) {
                var t = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var n = e.length,
                    r = !1;
                if (!n) return this.resolve([]);
                for (var o = -1, s = new this(a); ++o < n;) l(e[o]);
                return s;

                function l(e) {
                    t.resolve(e).then((function(e) {
                        r || (r = !0, i.resolve(s, e))
                    }), (function(e) {
                        r || (r = !0, i.reject(s, e))
                    }))
                }
            }
            t.exports = u, u.prototype.catch = function(e) {
                return this.then(null, e)
            }, u.prototype.then = function(e, t) {
                if ("function" != typeof e && this.state === s || "function" != typeof t && this.state === o) return this;
                var n = new this.constructor(a);
                return this.state !== l ? f(n, this.state === s ? e : t, this.outcome) : this.queue.push(new c(n, e, t)), n
            }, c.prototype.callFulfilled = function(e) {
                i.resolve(this.promise, e)
            }, c.prototype.otherCallFulfilled = function(e) {
                f(this.promise, this.onFulfilled, e)
            }, c.prototype.callRejected = function(e) {
                i.reject(this.promise, e)
            }, c.prototype.otherCallRejected = function(e) {
                f(this.promise, this.onRejected, e)
            }, i.resolve = function(e, t) {
                var n = g(d, t);
                if ("error" === n.status) return i.reject(e, n.value);
                var r = n.value;
                if (r) h(e, r);
                else {
                    e.state = s, e.outcome = t;
                    for (var a = -1, o = e.queue.length; ++a < o;) e.queue[a].callFulfilled(t)
                }
                return e
            }, i.reject = function(e, t) {
                e.state = o, e.outcome = t;
                for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
                return e
            }, u.resolve = p, u.reject = m, u.all = v, u.race = C
        }, {
            1: 1
        }],
        3: [function(e, t, n) {
            (function(t) {
                "function" != typeof t.Promise && (t.Promise = e(2))
            }).call(this, void 0 !== Kt ? Kt : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            2: 2
        }],
        4: [function(e, t, n) {
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i() {
                try {
                    if ("undefined" != typeof indexedDB) return indexedDB;
                    if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                    if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                    if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                    if ("undefined" != typeof msIndexedDB) return msIndexedDB
                } catch (nh) {
                    return
                }
            }
            var o = i();

            function s() {
                try {
                    if (!o || !o.open) return !1;
                    var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                        t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                    return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                } catch (nh) {
                    return !1
                }
            }

            function l(e, t) {
                e = e || [], t = t || {};
                try {
                    return new Blob(e, t)
                } catch (nh) {
                    if ("TypeError" !== nh.name) throw nh;
                    for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]);
                    return n.getBlob(t.type)
                }
            }
            "undefined" == typeof Promise && e(3);
            var u = Promise;

            function c(e, t) {
                t && e.then((function(e) {
                    t(null, e)
                }), (function(e) {
                    t(e)
                }))
            }

            function f(e, t, n) {
                "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n)
            }

            function d(e) {
                return "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e
            }

            function h() {
                if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
            }
            var g = "local-forage-detect-blob-support",
                p = void 0,
                m = {},
                v = Object.prototype.toString,
                C = "readonly",
                E = "readwrite";

            function F(e) {
                for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), a = 0; a < t; a++) r[a] = e.charCodeAt(a);
                return n
            }

            function y(e) {
                return new u((function(t) {
                    var n = e.transaction(g, E),
                        r = l([""]);
                    n.objectStore(g).put(r, "key"), n.onabort = function(e) {
                        e.preventDefault(), e.stopPropagation(), t(!1)
                    }, n.oncomplete = function() {
                        var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                            n = navigator.userAgent.match(/Edge\//);
                        t(n || !e || parseInt(e[1], 10) >= 43)
                    }
                })).catch((function() {
                    return !1
                }))
            }

            function A(e) {
                return "boolean" == typeof p ? u.resolve(p) : y(e).then((function(e) {
                    return p = e
                }))
            }

            function D(e) {
                var t = m[e.name],
                    n = {};
                n.promise = new u((function(e, t) {
                    n.resolve = e, n.reject = t
                })), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then((function() {
                    return n.promise
                })) : t.dbReady = n.promise
            }

            function _(e) {
                var t = m[e.name].deferredOperations.pop();
                if (t) return t.resolve(), t.promise
            }

            function b(e, t) {
                var n = m[e.name].deferredOperations.pop();
                if (n) return n.reject(t), n.promise
            }

            function B(e, t) {
                return new u((function(n, r) {
                    if (m[e.name] = m[e.name] || P(), e.db) {
                        if (!t) return n(e.db);
                        D(e), e.db.close()
                    }
                    var a = [e.name];
                    t && a.push(e.version);
                    var i = o.open.apply(o, a);
                    t && (i.onupgradeneeded = function(t) {
                        var n = i.result;
                        try {
                            n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(g)
                        } catch (r) {
                            if ("ConstraintError" !== r.name) throw r;
                            console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                        }
                    }), i.onerror = function(e) {
                        e.preventDefault(), r(i.error)
                    }, i.onsuccess = function() {
                        var t = i.result;
                        t.onversionchange = function(e) {
                            e.target.close()
                        }, n(t), _(e)
                    }
                }))
            }

            function I(e) {
                return B(e, !1)
            }

            function x(e) {
                return B(e, !0)
            }

            function w(e, t) {
                if (!e.db) return !0;
                var n = !e.db.objectStoreNames.contains(e.storeName),
                    r = e.version < e.db.version,
                    a = e.version > e.db.version;
                if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), a || n) {
                    if (n) {
                        var i = e.db.version + 1;
                        i > e.version && (e.version = i)
                    }
                    return !0
                }
                return !1
            }

            function S(e) {
                return new u((function(t, n) {
                    var r = new FileReader;
                    r.onerror = n, r.onloadend = function(n) {
                        var r = btoa(n.target.result || "");
                        t({
                            __local_forage_encoded_blob: !0,
                            data: r,
                            type: e.type
                        })
                    }, r.readAsBinaryString(e)
                }))
            }

            function T(e) {
                return l([F(atob(e.data))], {
                    type: e.type
                })
            }

            function O(e) {
                return e && e.__local_forage_encoded_blob
            }

            function k(e) {
                var t = this,
                    n = t._initReady().then((function() {
                        var e = m[t._dbInfo.name];
                        if (e && e.dbReady) return e.dbReady
                    }));
                return f(n, e, e), n
            }

            function M(e) {
                D(e);
                for (var t = m[e.name], n = t.forages, r = 0; r < n.length; r++) {
                    var a = n[r];
                    a._dbInfo.db && (a._dbInfo.db.close(), a._dbInfo.db = null)
                }
                return e.db = null, I(e).then((function(t) {
                    return e.db = t, w(e) ? x(e) : t
                })).then((function(r) {
                    e.db = t.db = r;
                    for (var a = 0; a < n.length; a++) n[a]._dbInfo.db = r
                })).catch((function(t) {
                    throw b(e, t), t
                }))
            }

            function N(e, t, n, r) {
                void 0 === r && (r = 1);
                try {
                    var a = e.db.transaction(e.storeName, t);
                    n(null, a)
                } catch (i) {
                    if (r > 0 && (!e.db || "InvalidStateError" === i.name || "NotFoundError" === i.name)) return u.resolve().then((function() {
                        if (!e.db || "NotFoundError" === i.name && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), x(e)
                    })).then((function() {
                        return M(e).then((function() {
                            N(e, t, n, r - 1)
                        }))
                    })).catch(n);
                    n(i)
                }
            }

            function P() {
                return {
                    forages: [],
                    db: null,
                    dbReady: null,
                    deferredOperations: []
                }
            }

            function L(e) {
                var t = this,
                    n = {
                        db: null
                    };
                if (e)
                    for (var r in e) n[r] = e[r];
                var a = m[n.name];
                a || (a = P(), m[n.name] = a), a.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = k);
                var i = [];

                function o() {
                    return u.resolve()
                }
                for (var s = 0; s < a.forages.length; s++) {
                    var l = a.forages[s];
                    l !== t && i.push(l._initReady().catch(o))
                }
                var c = a.forages.slice(0);
                return u.all(i).then((function() {
                    return n.db = a.db, I(n)
                })).then((function(e) {
                    return n.db = e, w(n, t._defaultConfig.version) ? x(n) : e
                })).then((function(e) {
                    n.db = a.db = e, t._dbInfo = n;
                    for (var r = 0; r < c.length; r++) {
                        var i = c[r];
                        i !== t && (i._dbInfo.db = n.db, i._dbInfo.version = n.version)
                    }
                }))
            }

            function Y(e, t) {
                var n = this;
                e = d(e);
                var r = new u((function(t, r) {
                    n.ready().then((function() {
                        N(n._dbInfo, C, (function(a, i) {
                            if (a) return r(a);
                            try {
                                var o = i.objectStore(n._dbInfo.storeName).get(e);
                                o.onsuccess = function() {
                                    var e = o.result;
                                    void 0 === e && (e = null), O(e) && (e = T(e)), t(e)
                                }, o.onerror = function() {
                                    r(o.error)
                                }
                            } catch (nh) {
                                r(nh)
                            }
                        }))
                    })).catch(r)
                }));
                return c(r, t), r
            }

            function G(e, t) {
                var n = this,
                    r = new u((function(t, r) {
                        n.ready().then((function() {
                            N(n._dbInfo, C, (function(a, i) {
                                if (a) return r(a);
                                try {
                                    var o = i.objectStore(n._dbInfo.storeName).openCursor(),
                                        s = 1;
                                    o.onsuccess = function() {
                                        var n = o.result;
                                        if (n) {
                                            var r = n.value;
                                            O(r) && (r = T(r));
                                            var a = e(r, n.key, s++);
                                            void 0 !== a ? t(a) : n.continue()
                                        } else t()
                                    }, o.onerror = function() {
                                        r(o.error)
                                    }
                                } catch (nh) {
                                    r(nh)
                                }
                            }))
                        })).catch(r)
                    }));
                return c(r, t), r
            }

            function R(e, t, n) {
                var r = this;
                e = d(e);
                var a = new u((function(n, a) {
                    var i;
                    r.ready().then((function() {
                        return i = r._dbInfo, "[object Blob]" === v.call(t) ? A(i.db).then((function(e) {
                            return e ? t : S(t)
                        })) : t
                    })).then((function(t) {
                        N(r._dbInfo, E, (function(i, o) {
                            if (i) return a(i);
                            try {
                                var s = o.objectStore(r._dbInfo.storeName);
                                null === t && (t = void 0);
                                var l = s.put(t, e);
                                o.oncomplete = function() {
                                    void 0 === t && (t = null), n(t)
                                }, o.onabort = o.onerror = function() {
                                    var e = l.error ? l.error : l.transaction.error;
                                    a(e)
                                }
                            } catch (nh) {
                                a(nh)
                            }
                        }))
                    })).catch(a)
                }));
                return c(a, n), a
            }

            function H(e, t) {
                var n = this;
                e = d(e);
                var r = new u((function(t, r) {
                    n.ready().then((function() {
                        N(n._dbInfo, E, (function(a, i) {
                            if (a) return r(a);
                            try {
                                var o = i.objectStore(n._dbInfo.storeName).delete(e);
                                i.oncomplete = function() {
                                    t()
                                }, i.onerror = function() {
                                    r(o.error)
                                }, i.onabort = function() {
                                    var e = o.error ? o.error : o.transaction.error;
                                    r(e)
                                }
                            } catch (nh) {
                                r(nh)
                            }
                        }))
                    })).catch(r)
                }));
                return c(r, t), r
            }

            function Z(e) {
                var t = this,
                    n = new u((function(e, n) {
                        t.ready().then((function() {
                            N(t._dbInfo, E, (function(r, a) {
                                if (r) return n(r);
                                try {
                                    var i = a.objectStore(t._dbInfo.storeName).clear();
                                    a.oncomplete = function() {
                                        e()
                                    }, a.onabort = a.onerror = function() {
                                        var e = i.error ? i.error : i.transaction.error;
                                        n(e)
                                    }
                                } catch (nh) {
                                    n(nh)
                                }
                            }))
                        })).catch(n)
                    }));
                return c(n, e), n
            }

            function j(e) {
                var t = this,
                    n = new u((function(e, n) {
                        t.ready().then((function() {
                            N(t._dbInfo, C, (function(r, a) {
                                if (r) return n(r);
                                try {
                                    var i = a.objectStore(t._dbInfo.storeName).count();
                                    i.onsuccess = function() {
                                        e(i.result)
                                    }, i.onerror = function() {
                                        n(i.error)
                                    }
                                } catch (nh) {
                                    n(nh)
                                }
                            }))
                        })).catch(n)
                    }));
                return c(n, e), n
            }

            function z(e, t) {
                var n = this,
                    r = new u((function(t, r) {
                        e < 0 ? t(null) : n.ready().then((function() {
                            N(n._dbInfo, C, (function(a, i) {
                                if (a) return r(a);
                                try {
                                    var o = i.objectStore(n._dbInfo.storeName),
                                        s = !1,
                                        l = o.openKeyCursor();
                                    l.onsuccess = function() {
                                        var n = l.result;
                                        n ? 0 === e || s ? t(n.key) : (s = !0, n.advance(e)) : t(null)
                                    }, l.onerror = function() {
                                        r(l.error)
                                    }
                                } catch (nh) {
                                    r(nh)
                                }
                            }))
                        })).catch(r)
                    }));
                return c(r, t), r
            }

            function U(e) {
                var t = this,
                    n = new u((function(e, n) {
                        t.ready().then((function() {
                            N(t._dbInfo, C, (function(r, a) {
                                if (r) return n(r);
                                try {
                                    var i = a.objectStore(t._dbInfo.storeName).openKeyCursor(),
                                        o = [];
                                    i.onsuccess = function() {
                                        var t = i.result;
                                        t ? (o.push(t.key), t.continue()) : e(o)
                                    }, i.onerror = function() {
                                        n(i.error)
                                    }
                                } catch (nh) {
                                    n(nh)
                                }
                            }))
                        })).catch(n)
                    }));
                return c(n, e), n
            }

            function X(e, t) {
                t = h.apply(this, arguments);
                var n = this.config();
                (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                var r, a = this;
                if (e.name) {
                    var i = e.name === n.name && a._dbInfo.db ? u.resolve(a._dbInfo.db) : I(e).then((function(t) {
                        var n = m[e.name],
                            r = n.forages;
                        n.db = t;
                        for (var a = 0; a < r.length; a++) r[a]._dbInfo.db = t;
                        return t
                    }));
                    r = e.storeName ? i.then((function(t) {
                        if (t.objectStoreNames.contains(e.storeName)) {
                            var n = t.version + 1;
                            D(e);
                            var r = m[e.name],
                                a = r.forages;
                            t.close();
                            for (var i = 0; i < a.length; i++) {
                                var s = a[i];
                                s._dbInfo.db = null, s._dbInfo.version = n
                            }
                            return new u((function(t, r) {
                                var a = o.open(e.name, n);
                                a.onerror = function(e) {
                                    a.result.close(), r(e)
                                }, a.onupgradeneeded = function() {
                                    a.result.deleteObjectStore(e.storeName)
                                }, a.onsuccess = function() {
                                    var e = a.result;
                                    e.close(), t(e)
                                }
                            })).then((function(e) {
                                r.db = e;
                                for (var t = 0; t < a.length; t++) {
                                    var n = a[t];
                                    n._dbInfo.db = e, _(n._dbInfo)
                                }
                            })).catch((function(t) {
                                throw (b(e, t) || u.resolve()).catch((function() {})), t
                            }))
                        }
                    })) : i.then((function(t) {
                        D(e);
                        var n = m[e.name],
                            r = n.forages;
                        t.close();
                        for (var a = 0; a < r.length; a++) r[a]._dbInfo.db = null;
                        return new u((function(t, n) {
                            var r = o.deleteDatabase(e.name);
                            r.onerror = function() {
                                var e = r.result;
                                e && e.close(), n(r.error)
                            }, r.onblocked = function() {
                                console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed')
                            }, r.onsuccess = function() {
                                var e = r.result;
                                e && e.close(), t(e)
                            }
                        })).then((function(e) {
                            n.db = e;
                            for (var t = 0; t < r.length; t++) _(r[t]._dbInfo)
                        })).catch((function(t) {
                            throw (b(e, t) || u.resolve()).catch((function() {})), t
                        }))
                    }))
                } else r = u.reject("Invalid arguments");
                return c(r, t), r
            }
            var V = {
                _driver: "asyncStorage",
                _initStorage: L,
                _support: s(),
                iterate: G,
                getItem: Y,
                setItem: R,
                removeItem: H,
                clear: Z,
                length: j,
                key: z,
                keys: U,
                dropInstance: X
            };

            function W() {
                return "function" == typeof openDatabase
            }
            var $ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                J = "~~local_forage_type~",
                K = /^~~local_forage_type~([^~]+)~/,
                Q = "__lfsc__:",
                q = Q.length,
                ee = "arbf",
                te = "blob",
                ne = "si08",
                re = "ui08",
                ae = "uic8",
                ie = "si16",
                oe = "si32",
                se = "ur16",
                le = "ui32",
                ue = "fl32",
                ce = "fl64",
                fe = q + ee.length,
                de = Object.prototype.toString;

            function he(e) {
                var t, n, r, a, i, o = .75 * e.length,
                    s = e.length,
                    l = 0;
                "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
                var u = new ArrayBuffer(o),
                    c = new Uint8Array(u);
                for (t = 0; t < s; t += 4) n = $.indexOf(e[t]), r = $.indexOf(e[t + 1]), a = $.indexOf(e[t + 2]), i = $.indexOf(e[t + 3]), c[l++] = n << 2 | r >> 4, c[l++] = (15 & r) << 4 | a >> 2, c[l++] = (3 & a) << 6 | 63 & i;
                return u
            }

            function ge(e) {
                var t, n = new Uint8Array(e),
                    r = "";
                for (t = 0; t < n.length; t += 3) r += $[n[t] >> 2], r += $[(3 & n[t]) << 4 | n[t + 1] >> 4], r += $[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += $[63 & n[t + 2]];
                return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
            }

            function pe(e, t) {
                var n = "";
                if (e && (n = de.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === de.call(e.buffer))) {
                    var r, a = Q;
                    e instanceof ArrayBuffer ? (r = e, a += ee) : (r = e.buffer, "[object Int8Array]" === n ? a += ne : "[object Uint8Array]" === n ? a += re : "[object Uint8ClampedArray]" === n ? a += ae : "[object Int16Array]" === n ? a += ie : "[object Uint16Array]" === n ? a += se : "[object Int32Array]" === n ? a += oe : "[object Uint32Array]" === n ? a += le : "[object Float32Array]" === n ? a += ue : "[object Float64Array]" === n ? a += ce : t(new Error("Failed to get type for BinaryArray"))), t(a + ge(r))
                } else if ("[object Blob]" === n) {
                    var i = new FileReader;
                    i.onload = function() {
                        var n = J + e.type + "~" + ge(this.result);
                        t(Q + te + n)
                    }, i.readAsArrayBuffer(e)
                } else try {
                    t(JSON.stringify(e))
                } catch (nh) {
                    console.error("Couldn't convert value into a JSON string: ", e), t(null, nh)
                }
            }

            function me(e) {
                if (e.substring(0, q) !== Q) return JSON.parse(e);
                var t, n = e.substring(fe),
                    r = e.substring(q, fe);
                if (r === te && K.test(n)) {
                    var a = n.match(K);
                    t = a[1], n = n.substring(a[0].length)
                }
                var i = he(n);
                switch (r) {
                    case ee:
                        return i;
                    case te:
                        return l([i], {
                            type: t
                        });
                    case ne:
                        return new Int8Array(i);
                    case re:
                        return new Uint8Array(i);
                    case ae:
                        return new Uint8ClampedArray(i);
                    case ie:
                        return new Int16Array(i);
                    case se:
                        return new Uint16Array(i);
                    case oe:
                        return new Int32Array(i);
                    case le:
                        return new Uint32Array(i);
                    case ue:
                        return new Float32Array(i);
                    case ce:
                        return new Float64Array(i);
                    default:
                        throw new Error("Unkown type: " + r)
                }
            }
            var ve = {
                serialize: pe,
                deserialize: me,
                stringToBuffer: he,
                bufferToString: ge
            };

            function Ce(e, t, n, r) {
                e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r)
            }

            function Ee(e) {
                var t = this,
                    n = {
                        db: null
                    };
                if (e)
                    for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
                var a = new u((function(e, r) {
                    try {
                        n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                    } catch (nh) {
                        return r(nh)
                    }
                    n.db.transaction((function(a) {
                        Ce(a, n, (function() {
                            t._dbInfo = n, e()
                        }), (function(e, t) {
                            r(t)
                        }))
                    }), r)
                }));
                return n.serializer = ve, a
            }

            function Fe(e, t, n, r, a, i) {
                e.executeSql(n, r, a, (function(e, o) {
                    o.code === o.SYNTAX_ERR ? e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], (function(e, s) {
                        s.rows.length ? i(e, o) : Ce(e, t, (function() {
                            e.executeSql(n, r, a, i)
                        }), i)
                    }), i) : i(e, o)
                }), i)
            }

            function ye(e, t) {
                var n = this;
                e = d(e);
                var r = new u((function(t, r) {
                    n.ready().then((function() {
                        var a = n._dbInfo;
                        a.db.transaction((function(n) {
                            Fe(n, a, "SELECT * FROM " + a.storeName + " WHERE key = ? LIMIT 1", [e], (function(e, n) {
                                var r = n.rows.length ? n.rows.item(0).value : null;
                                r && (r = a.serializer.deserialize(r)), t(r)
                            }), (function(e, t) {
                                r(t)
                            }))
                        }))
                    })).catch(r)
                }));
                return c(r, t), r
            }

            function Ae(e, t) {
                var n = this,
                    r = new u((function(t, r) {
                        n.ready().then((function() {
                            var a = n._dbInfo;
                            a.db.transaction((function(n) {
                                Fe(n, a, "SELECT * FROM " + a.storeName, [], (function(n, r) {
                                    for (var i = r.rows, o = i.length, s = 0; s < o; s++) {
                                        var l = i.item(s),
                                            u = l.value;
                                        if (u && (u = a.serializer.deserialize(u)), void 0 !== (u = e(u, l.key, s + 1))) return void t(u)
                                    }
                                    t()
                                }), (function(e, t) {
                                    r(t)
                                }))
                            }))
                        })).catch(r)
                    }));
                return c(r, t), r
            }

            function De(e, t, n, r) {
                var a = this;
                e = d(e);
                var i = new u((function(i, o) {
                    a.ready().then((function() {
                        void 0 === t && (t = null);
                        var s = t,
                            l = a._dbInfo;
                        l.serializer.serialize(t, (function(t, u) {
                            u ? o(u) : l.db.transaction((function(n) {
                                Fe(n, l, "INSERT OR REPLACE INTO " + l.storeName + " (key, value) VALUES (?, ?)", [e, t], (function() {
                                    i(s)
                                }), (function(e, t) {
                                    o(t)
                                }))
                            }), (function(t) {
                                if (t.code === t.QUOTA_ERR) {
                                    if (r > 0) return void i(De.apply(a, [e, s, n, r - 1]));
                                    o(t)
                                }
                            }))
                        }))
                    })).catch(o)
                }));
                return c(i, n), i
            }

            function _e(e, t, n) {
                return De.apply(this, [e, t, n, 1])
            }

            function be(e, t) {
                var n = this;
                e = d(e);
                var r = new u((function(t, r) {
                    n.ready().then((function() {
                        var a = n._dbInfo;
                        a.db.transaction((function(n) {
                            Fe(n, a, "DELETE FROM " + a.storeName + " WHERE key = ?", [e], (function() {
                                t()
                            }), (function(e, t) {
                                r(t)
                            }))
                        }))
                    })).catch(r)
                }));
                return c(r, t), r
            }

            function Be(e) {
                var t = this,
                    n = new u((function(e, n) {
                        t.ready().then((function() {
                            var r = t._dbInfo;
                            r.db.transaction((function(t) {
                                Fe(t, r, "DELETE FROM " + r.storeName, [], (function() {
                                    e()
                                }), (function(e, t) {
                                    n(t)
                                }))
                            }))
                        })).catch(n)
                    }));
                return c(n, e), n
            }

            function Ie(e) {
                var t = this,
                    n = new u((function(e, n) {
                        t.ready().then((function() {
                            var r = t._dbInfo;
                            r.db.transaction((function(t) {
                                Fe(t, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], (function(t, n) {
                                    var r = n.rows.item(0).c;
                                    e(r)
                                }), (function(e, t) {
                                    n(t)
                                }))
                            }))
                        })).catch(n)
                    }));
                return c(n, e), n
            }

            function xe(e, t) {
                var n = this,
                    r = new u((function(t, r) {
                        n.ready().then((function() {
                            var a = n._dbInfo;
                            a.db.transaction((function(n) {
                                Fe(n, a, "SELECT key FROM " + a.storeName + " WHERE id = ? LIMIT 1", [e + 1], (function(e, n) {
                                    var r = n.rows.length ? n.rows.item(0).key : null;
                                    t(r)
                                }), (function(e, t) {
                                    r(t)
                                }))
                            }))
                        })).catch(r)
                    }));
                return c(r, t), r
            }

            function we(e) {
                var t = this,
                    n = new u((function(e, n) {
                        t.ready().then((function() {
                            var r = t._dbInfo;
                            r.db.transaction((function(t) {
                                Fe(t, r, "SELECT key FROM " + r.storeName, [], (function(t, n) {
                                    for (var r = [], a = 0; a < n.rows.length; a++) r.push(n.rows.item(a).key);
                                    e(r)
                                }), (function(e, t) {
                                    n(t)
                                }))
                            }))
                        })).catch(n)
                    }));
                return c(n, e), n
            }

            function Se(e) {
                return new u((function(t, n) {
                    e.transaction((function(r) {
                        r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function(n, r) {
                            for (var a = [], i = 0; i < r.rows.length; i++) a.push(r.rows.item(i).name);
                            t({
                                db: e,
                                storeNames: a
                            })
                        }), (function(e, t) {
                            n(t)
                        }))
                    }), (function(e) {
                        n(e)
                    }))
                }))
            }

            function Te(e, t) {
                t = h.apply(this, arguments);
                var n = this.config();
                (e = "function" != typeof e && e || {}).name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                var r, a = this;
                return c(r = e.name ? new u((function(t) {
                    var r;
                    r = e.name === n.name ? a._dbInfo.db : openDatabase(e.name, "", "", 0), e.storeName ? t({
                        db: r,
                        storeNames: [e.storeName]
                    }) : t(Se(r))
                })).then((function(e) {
                    return new u((function(t, n) {
                        e.db.transaction((function(r) {
                            function a(e) {
                                return new u((function(t, n) {
                                    r.executeSql("DROP TABLE IF EXISTS " + e, [], (function() {
                                        t()
                                    }), (function(e, t) {
                                        n(t)
                                    }))
                                }))
                            }
                            for (var i = [], o = 0, s = e.storeNames.length; o < s; o++) i.push(a(e.storeNames[o]));
                            u.all(i).then((function() {
                                t()
                            })).catch((function(e) {
                                n(e)
                            }))
                        }), (function(e) {
                            n(e)
                        }))
                    }))
                })) : u.reject("Invalid arguments"), t), r
            }
            var Oe = {
                _driver: "webSQLStorage",
                _initStorage: Ee,
                _support: W(),
                iterate: Ae,
                getItem: ye,
                setItem: _e,
                removeItem: be,
                clear: Be,
                length: Ie,
                key: xe,
                keys: we,
                dropInstance: Te
            };

            function ke() {
                try {
                    return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                } catch (nh) {
                    return !1
                }
            }

            function Me(e, t) {
                var n = e.name + "/";
                return e.storeName !== t.storeName && (n += e.storeName + "/"), n
            }

            function Ne() {
                var e = "_localforage_support_test";
                try {
                    return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
                } catch (nh) {
                    return !0
                }
            }

            function Pe() {
                return !Ne() || localStorage.length > 0
            }

            function Le(e) {
                var t = this,
                    n = {};
                if (e)
                    for (var r in e) n[r] = e[r];
                return n.keyPrefix = Me(e, t._defaultConfig), Pe() ? (t._dbInfo = n, n.serializer = ve, u.resolve()) : u.reject()
            }

            function Ye(e) {
                var t = this,
                    n = t.ready().then((function() {
                        for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                            var r = localStorage.key(n);
                            0 === r.indexOf(e) && localStorage.removeItem(r)
                        }
                    }));
                return c(n, e), n
            }

            function Ge(e, t) {
                var n = this;
                e = d(e);
                var r = n.ready().then((function() {
                    var t = n._dbInfo,
                        r = localStorage.getItem(t.keyPrefix + e);
                    return r && (r = t.serializer.deserialize(r)), r
                }));
                return c(r, t), r
            }

            function Re(e, t) {
                var n = this,
                    r = n.ready().then((function() {
                        for (var t = n._dbInfo, r = t.keyPrefix, a = r.length, i = localStorage.length, o = 1, s = 0; s < i; s++) {
                            var l = localStorage.key(s);
                            if (0 === l.indexOf(r)) {
                                var u = localStorage.getItem(l);
                                if (u && (u = t.serializer.deserialize(u)), void 0 !== (u = e(u, l.substring(a), o++))) return u
                            }
                        }
                    }));
                return c(r, t), r
            }

            function He(e, t) {
                var n = this,
                    r = n.ready().then((function() {
                        var t, r = n._dbInfo;
                        try {
                            t = localStorage.key(e)
                        } catch (a) {
                            t = null
                        }
                        return t && (t = t.substring(r.keyPrefix.length)), t
                    }));
                return c(r, t), r
            }

            function Ze(e) {
                var t = this,
                    n = t.ready().then((function() {
                        for (var e = t._dbInfo, n = localStorage.length, r = [], a = 0; a < n; a++) {
                            var i = localStorage.key(a);
                            0 === i.indexOf(e.keyPrefix) && r.push(i.substring(e.keyPrefix.length))
                        }
                        return r
                    }));
                return c(n, e), n
            }

            function je(e) {
                var t = this.keys().then((function(e) {
                    return e.length
                }));
                return c(t, e), t
            }

            function ze(e, t) {
                var n = this;
                e = d(e);
                var r = n.ready().then((function() {
                    var t = n._dbInfo;
                    localStorage.removeItem(t.keyPrefix + e)
                }));
                return c(r, t), r
            }

            function Ue(e, t, n) {
                var r = this;
                e = d(e);
                var a = r.ready().then((function() {
                    void 0 === t && (t = null);
                    var n = t;
                    return new u((function(a, i) {
                        var o = r._dbInfo;
                        o.serializer.serialize(t, (function(t, r) {
                            if (r) i(r);
                            else try {
                                localStorage.setItem(o.keyPrefix + e, t), a(n)
                            } catch (nh) {
                                "QuotaExceededError" !== nh.name && "NS_ERROR_DOM_QUOTA_REACHED" !== nh.name || i(nh), i(nh)
                            }
                        }))
                    }))
                }));
                return c(a, n), a
            }

            function Xe(e, t) {
                if (t = h.apply(this, arguments), !(e = "function" != typeof e && e || {}).name) {
                    var n = this.config();
                    e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                }
                var r, a = this;
                return c(r = e.name ? new u((function(t) {
                    e.storeName ? t(Me(e, a._defaultConfig)) : t(e.name + "/")
                })).then((function(e) {
                    for (var t = localStorage.length - 1; t >= 0; t--) {
                        var n = localStorage.key(t);
                        0 === n.indexOf(e) && localStorage.removeItem(n)
                    }
                })) : u.reject("Invalid arguments"), t), r
            }
            var Ve = {
                    _driver: "localStorageWrapper",
                    _initStorage: Le,
                    _support: ke(),
                    iterate: Re,
                    getItem: Ge,
                    setItem: Ue,
                    removeItem: ze,
                    clear: Ye,
                    length: je,
                    key: He,
                    keys: Ze,
                    dropInstance: Xe
                },
                We = function(e, t) {
                    return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                },
                $e = function(e, t) {
                    for (var n = e.length, r = 0; r < n;) {
                        if (We(e[r], t)) return !0;
                        r++
                    }
                    return !1
                },
                Je = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                Ke = {},
                Qe = {},
                qe = {
                    INDEXEDDB: V,
                    WEBSQL: Oe,
                    LOCALSTORAGE: Ve
                },
                et = [qe.INDEXEDDB._driver, qe.WEBSQL._driver, qe.LOCALSTORAGE._driver],
                tt = ["dropInstance"],
                nt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(tt),
                rt = {
                    description: "",
                    driver: et.slice(),
                    name: "localforage",
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1
                };

            function at(e, t) {
                e[t] = function() {
                    var n = arguments;
                    return e.ready().then((function() {
                        return e[t].apply(e, n)
                    }))
                }
            }

            function it() {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    if (t)
                        for (var n in t) t.hasOwnProperty(n) && (Je(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                }
                return arguments[0]
            }
            var ot = function() {
                    function e(t) {
                        for (var n in a(this, e), qe)
                            if (qe.hasOwnProperty(n)) {
                                var r = qe[n],
                                    i = r._driver;
                                this[n] = i, Ke[i] || this.defineDriver(r)
                            } this._defaultConfig = it({}, rt), this._config = it({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function() {}))
                    }
                    return e.prototype.config = function(e) {
                        if ("object" === (void 0 === e ? "undefined" : r(e))) {
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for (var t in e) {
                                if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                                this._config[t] = e[t]
                            }
                            return !("driver" in e) || !e.driver || this.setDriver(this._config.driver)
                        }
                        return "string" == typeof e ? this._config[e] : this._config
                    }, e.prototype.defineDriver = function(e, t, n) {
                        var r = new u((function(t, n) {
                            try {
                                var r = e._driver,
                                    a = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                if (!e._driver) return void n(a);
                                for (var i = nt.concat("_initStorage"), o = 0, s = i.length; o < s; o++) {
                                    var l = i[o];
                                    if ((!$e(tt, l) || e[l]) && "function" != typeof e[l]) return void n(a)
                                }
                                var f = function() {
                                    for (var t = function(e) {
                                            return function() {
                                                var t = new Error("Method " + e + " is not implemented by the current driver"),
                                                    n = u.reject(t);
                                                return c(n, arguments[arguments.length - 1]), n
                                            }
                                        }, n = 0, r = tt.length; n < r; n++) {
                                        var a = tt[n];
                                        e[a] || (e[a] = t(a))
                                    }
                                };
                                f();
                                var d = function(n) {
                                    Ke[r] && console.info("Redefining LocalForage driver: " + r), Ke[r] = e, Qe[r] = n, t()
                                };
                                "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(d, n) : d(!!e._support) : d(!0)
                            } catch (nh) {
                                n(nh)
                            }
                        }));
                        return f(r, t, n), r
                    }, e.prototype.driver = function() {
                        return this._driver || null
                    }, e.prototype.getDriver = function(e, t, n) {
                        var r = Ke[e] ? u.resolve(Ke[e]) : u.reject(new Error("Driver not found."));
                        return f(r, t, n), r
                    }, e.prototype.getSerializer = function(e) {
                        var t = u.resolve(ve);
                        return f(t, e), t
                    }, e.prototype.ready = function(e) {
                        var t = this,
                            n = t._driverSet.then((function() {
                                return null === t._ready && (t._ready = t._initDriver()), t._ready
                            }));
                        return f(n, e, e), n
                    }, e.prototype.setDriver = function(e, t, n) {
                        var r = this;
                        Je(e) || (e = [e]);
                        var a = this._getSupportedDrivers(e);

                        function i() {
                            r._config.driver = r.driver()
                        }

                        function o(e) {
                            return r._extend(e), i(), r._ready = r._initStorage(r._config), r._ready
                        }

                        function s(e) {
                            return function() {
                                var t = 0;

                                function n() {
                                    for (; t < e.length;) {
                                        var a = e[t];
                                        return t++, r._dbInfo = null, r._ready = null, r.getDriver(a).then(o).catch(n)
                                    }
                                    i();
                                    var s = new Error("No available storage method found.");
                                    return r._driverSet = u.reject(s), r._driverSet
                                }
                                return n()
                            }
                        }
                        var l = null !== this._driverSet ? this._driverSet.catch((function() {
                            return u.resolve()
                        })) : u.resolve();
                        return this._driverSet = l.then((function() {
                            var e = a[0];
                            return r._dbInfo = null, r._ready = null, r.getDriver(e).then((function(e) {
                                r._driver = e._driver, i(), r._wrapLibraryMethodsWithReady(), r._initDriver = s(a)
                            }))
                        })).catch((function() {
                            i();
                            var e = new Error("No available storage method found.");
                            return r._driverSet = u.reject(e), r._driverSet
                        })), f(this._driverSet, t, n), this._driverSet
                    }, e.prototype.supports = function(e) {
                        return !!Qe[e]
                    }, e.prototype._extend = function(e) {
                        it(this, e)
                    }, e.prototype._getSupportedDrivers = function(e) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) {
                            var a = e[n];
                            this.supports(a) && t.push(a)
                        }
                        return t
                    }, e.prototype._wrapLibraryMethodsWithReady = function() {
                        for (var e = 0, t = nt.length; e < t; e++) at(this, nt[e])
                    }, e.prototype.createInstance = function(t) {
                        return new e(t)
                    }, e
                }(),
                st = new ot;
            t.exports = st
        }, {
            3: 3
        }]
    }, {}, [4])(4);
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
const co = {
        set(e = "", t = "", n) {
            if (n) {
                let r = {
                    exp: tn().valueOf() + n,
                    data: t
                };
                return uo.setItem(e, r)
            }
            return uo.setItem(e, t)
        },
        async get(e = null) {
            let t = await uo.getItem(e);
            return t && t.exp ? tn().valueOf() > t.exp ? (uo.removeItem(e), null) : t.data : t
        }
    },
    fo = On(),
    ho = {
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六",
        0: "日"
    };
let go = null;
class po extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        }).innerHTML = `<style>:host {  \n            user-select: none;\n            text-align:center;\n            -webkit-user-select: none;\n            color: var(--time-color, "#fff");color: #00bcd4; margin-top: 2%;\n        }\n        \n        .app-date {\n            font-size: 20px;\n            line-height: 26px;\n            opacity: 0.88;\n            text-shadow: 0 2px 4px rgb(0 0 0 / 16%);\n        \n        }\n        \n        .app-date span {\n            margin: 0 2px;\n        }\n        \n        .app-date .time-month {\n            display: var(--time-month);\n        }\n        \n        \n        .app-date .time-week {\n            display: var(--time-week);\n        }\n        \n        .app-date .time-lunar {\n            display: var(--time-lunar);\n        }\n        \n       .app-time {--time-font: dsdigi; \n            font-size: var(--time-size);\n            font-family: var(--time-font);\n            user-select: none;\n            font-weight: var(--time-fontWeight);\n            text-shadow: 0 2px 6px rgb(0 0 0 / 16%);\n            display: inline-block;\n        }\n        .app-time .sec{\n            display: var(--time-sec);\n        }\n        </style>\n        <div class="app-date-box ac" >\n        <div class="app-time">\n            <time class="time">${this.time}</time><span class="sec">${this.ss}</span>\n        </div>\n        <div class="app-date">\n          <span class="time-month">${this.month}</span>\n    \n          <span class="time-week">星期${this.week}</span>\n          <span class="time-lunar">${this.lunar}</span>\n        </div>\n      </div>`
    }
    get time() {
        let e = fo.value.time.hour24 ? "HH:mm" : "h:mm";
        return tn().format(e)
    }
    get ss() {
        return !ro && fo.value.time.sec ? tn().format(":ss") : ""
    }
    get month() {
        return tn().format("MM月DD日")
    }
    get week() {
        return ho[tn().day()]
    }
    get lunar() {
        let e = no.Lunar.fromDate(new Date);
        return `${e.getMonthInChinese()}月${e.getDayInChinese()}`
    }
    connectedCallback() {
        go && clearTimeout(go), this.timeTime = this.shadowRoot.querySelector(".app-time time"), this.timeS = this.shadowRoot.querySelector(".app-time .sec"), this.timeMonth = this.shadowRoot.querySelector(".time-month"), this.timeWeek = this.shadowRoot.querySelector(".time-week"), this.timeLunar = this.shadowRoot.querySelector(".time-lunar"), go = setInterval((() => {
            let e = fo.value.time.hour24 ? "HH:mm" : "h:mm",
                t = tn();
            this.timeTime.textContent = t.format(e), !ro && fo.value.time.sec && (this.timeS.textContent = t.format(":ss"));
            let n = no.Lunar.fromDate(new Date);
            this.timeMonth.textContent = t.format("MM月DD日"), this.timeWeek.textContent = `星期${ho[t.day()]}`, this.timeLunar.textContent = `${n.getMonthInChinese()}月${n.getDayInChinese()}`
        }), 1e3), this.timeBox = this.shadowRoot.querySelector(".app-time"), this.timeBox.addEventListener("click", (async () => {
            await co.get("layoutViewNotice") || (Pn({
                duration: 5e3,
                showClose: !0,
                type: "success",
                message: "点击时间可以快速切换极简模式/组件模式",
                center: !0
            }), co.set("layoutViewNotice", 1), kn.remove("layoutViewNotice")), "widget" == fo.value.layout.view ? fo.value.layout.view = "simple" : fo.value.layout.view = "widget"
        }))
    }
    attributeChangedCallback(e, t, n) {}
}
customElements.get("itab-date") || customElements.define("itab-date", po);
const mo = (e, t) => {
    if (e.theme.system) {
        let t = window.matchMedia("(prefers-color-scheme: dark)").matches;
        e.theme.mode = t ? "dark" : "light"
    }
    if (t) {
        vo(e);
        const t = kn.get("sidebarColor");
        if (!t) return;
        document.body.style.setProperty("--img-bg", t.bg), document.body.style.setProperty("--img-text", t.text)
    } else requestAnimationFrame((() => {
        vo(e)
    }))
};

function vo({
    theme: e,
    icon: t,
    layout: n,
    sidebar: r,
    search: a,
    time: i = {},
    wallpaper: o
}) {
    let s = document.documentElement.style;
    s.setProperty("--primary-color", e.color), s.setProperty("--search-height", a.height + "px"), s.setProperty("--search-radius", a.radius + "px"), s.setProperty("--search-bgColor", `rgba(var(--alpha-bg), ${a.bgColor})`), s.setProperty("--icon-max-width", `${t.width||1350}${t.unit||"px"}`), s.setProperty("--icon-radius", t.iconRadius + "px"), s.setProperty("--icon-size", t.iconSize + "px"), s.setProperty("--icon-gap-x", t.iconX + "px"), s.setProperty("--icon-gap-y", t.iconY + "px"), s.setProperty("--icon-opacity", t.opactiy), s.setProperty("--icon-name", t.name ? "block" : "none"), s.setProperty("--icon-nameSize", t.nameSize + "px"), s.setProperty("--icon-nameColor", t.nameColor), s.setProperty("--time-size", i.size + "px"), s.setProperty("--time-font", i.font || "inherit"), s.setProperty("--time-color", i.color), s.setProperty("--time-fontWeight", i.fontWeight), s.setProperty("--time-month", i.month), s.setProperty("--time-week", i.week), s.setProperty("--time-lunar", i.lunar), s.setProperty("--time-sec", i.sec ? "inline" : "none"), s.setProperty("--sidebar-width", r.width + "px"), s.setProperty("--sidebar-opacity", r.opacity || .5), s.setProperty("--wall-mask", o.mask), s.setProperty("--wall-blur", o.blur + "px"), 3 == o.type ? s.setProperty("--wall-background", o.src) : s.setProperty("--wall-background", ""), document.querySelector("html").setAttribute("data-theme", e.mode)
}
var Co = Ln({
        setup(e) {
            const t = On(),
                n = re((() => t.value.search.show || t.value.time.show ? "margin-top:0vh" : "margin-top:10vh"));
            return (e, r) => (Xe(), oe("div", {
                class: "app-header",
                style: Z(`height:${"simple"==L(t).layout.view&&"18vh"};${L(n)}`)
            }, null, 4))
        }
    }, [
        ["__scopeId", "data-v-c511a0f6"]
    ]),
    Eo = {},
    Fo = Yn(mr);
Object.defineProperty(Eo, "__esModule", {
    value: !0
});
const yo = Fo,
    Ao = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24"
    },
    Do = [(0, yo.createElementVNode)("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, [(0, yo.createElementVNode)("circle", {
        cx: "10",
        cy: "10",
        r: "7"
    }), (0, yo.createElementVNode)("path", {
        d: "M21 21l-6-6"
    })], -1)];
var _o = Eo.default = (0, yo.defineComponent)({
        name: "Search",
        render: function(e, t) {
            return (0, yo.openBlock)(), (0, yo.createElementBlock)("svg", Ao, Do)
        }
    }),
    bo = {};
Object.defineProperty(bo, "__esModule", {
    value: !0
});
const Bo = Fo,
    Io = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24"
    },
    xo = [(0, Bo.createElementVNode)("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24a.71.71 0 0 0-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z",
        fill: "currentColor"
    }, null, -1)];
var wo = bo.default = (0, Bo.defineComponent)({
        name: "AccessTimeRound",
        render: function(e, t) {
            return (0, Bo.openBlock)(), (0, Bo.createElementBlock)("svg", Io, xo)
        }
    }),
    So = {};
Object.defineProperty(So, "__esModule", {
    value: !0
});
const To = Fo,
    Oo = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24"
    },
    ko = [(0, To.createElementVNode)("path", {
        d: "M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06l.03-.03A17.52 17.52 0 0 0 14.07 6h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99c0 .55.45.99.99.99h10.18A15.66 15.66 0 0 1 9 11.35c-.81-.89-1.49-1.86-2.06-2.88A.885.885 0 0 0 6.16 8c-.69 0-1.13.75-.79 1.35c.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87a.99.99 0 0 0 0 1.42c.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26c.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61c.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7l1.62-4.33L19.12 17h-3.24z",
        fill: "currentColor"
    }, null, -1)];
var Mo = So.default = (0, To.defineComponent)({
    name: "TranslateRound",
    render: function(e, t) {
        return (0, To.openBlock)(), (0, To.createElementBlock)("svg", Oo, ko)
    }
});
const No = function(e, t, n, r) {
        e && t && n && e.addEventListener(t, n, r)
    },
    Po = function(e, t, n) {
        e && t && n && e.removeEventListener(t, n, !1)
    };

function Lo(e) {
    return !!e && document.querySelector(e)
}
let Yo = "https://api.codelife.cc/";
Yo = "https://api.codelife.cc/";
const Go = Gn.create({
    baseURL: "https://api.codelife.cc/",
    timeout: 15e3
});
Go.interceptors.request.use((e => {
    let t = kn.get("token");
    return e.headers.signaturekey = Rn(), e.headers.version = Hn.version, t && (e.headers.token = t), "get" == e.method && (e.params = u({
        lang: "cn"
    }, e.params)), e
}), (e => {
    Promise.reject(e)
})), Go.interceptors.response.use((e => {
    const t = e.data;
    return 401 == t.code ? (Zn(), Promise.reject(t.msg)) : 500 == t.code ? (Pn({
        type: "error",
        message: t.msg,
        duration: 3e3,
        dangerouslyUseHTMLString: !0,
        showClose: !0
    }), Promise.reject(t.msg)) : t
}), (e => Promise.reject(e)));
var Ro = {
    exports: {}
};
! function(e) {
    var t, n;
    t = Kt, n = function() {
        void 0 === Array.isArray && (Array.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        });
        var e = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            t = function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            n = function(e, t) {
                return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            },
            r = function(e, t) {
                return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            },
            a = function(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            },
            i = function(e) {
                return e = a(e, [0, e[0] >>> 1]), e = t(e, [4283543511, 3981806797]), e = a(e, [0, e[0] >>> 1]), e = t(e, [3301882366, 444984403]), e = a(e, [0, e[0] >>> 1])
            },
            o = function(o, s) {
                s = s || 0;
                for (var l = (o = o || "").length % 16, u = o.length - l, c = [0, s], f = [0, s], d = [0, 0], h = [0, 0], g = [2277735313, 289559509], p = [1291169091, 658871167], m = 0; m < u; m += 16) d = [255 & o.charCodeAt(m + 4) | (255 & o.charCodeAt(m + 5)) << 8 | (255 & o.charCodeAt(m + 6)) << 16 | (255 & o.charCodeAt(m + 7)) << 24, 255 & o.charCodeAt(m) | (255 & o.charCodeAt(m + 1)) << 8 | (255 & o.charCodeAt(m + 2)) << 16 | (255 & o.charCodeAt(m + 3)) << 24], h = [255 & o.charCodeAt(m + 12) | (255 & o.charCodeAt(m + 13)) << 8 | (255 & o.charCodeAt(m + 14)) << 16 | (255 & o.charCodeAt(m + 15)) << 24, 255 & o.charCodeAt(m + 8) | (255 & o.charCodeAt(m + 9)) << 8 | (255 & o.charCodeAt(m + 10)) << 16 | (255 & o.charCodeAt(m + 11)) << 24], d = t(d, g), d = n(d, 31), d = t(d, p), c = a(c, d), c = n(c, 27), c = e(c, f), c = e(t(c, [0, 5]), [0, 1390208809]), h = t(h, p), h = n(h, 33), h = t(h, g), f = a(f, h), f = n(f, 31), f = e(f, c), f = e(t(f, [0, 5]), [0, 944331445]);
                switch (d = [0, 0], h = [0, 0], l) {
                    case 15:
                        h = a(h, r([0, o.charCodeAt(m + 14)], 48));
                    case 14:
                        h = a(h, r([0, o.charCodeAt(m + 13)], 40));
                    case 13:
                        h = a(h, r([0, o.charCodeAt(m + 12)], 32));
                    case 12:
                        h = a(h, r([0, o.charCodeAt(m + 11)], 24));
                    case 11:
                        h = a(h, r([0, o.charCodeAt(m + 10)], 16));
                    case 10:
                        h = a(h, r([0, o.charCodeAt(m + 9)], 8));
                    case 9:
                        h = a(h, [0, o.charCodeAt(m + 8)]), h = t(h, p), h = n(h, 33), h = t(h, g), f = a(f, h);
                    case 8:
                        d = a(d, r([0, o.charCodeAt(m + 7)], 56));
                    case 7:
                        d = a(d, r([0, o.charCodeAt(m + 6)], 48));
                    case 6:
                        d = a(d, r([0, o.charCodeAt(m + 5)], 40));
                    case 5:
                        d = a(d, r([0, o.charCodeAt(m + 4)], 32));
                    case 4:
                        d = a(d, r([0, o.charCodeAt(m + 3)], 24));
                    case 3:
                        d = a(d, r([0, o.charCodeAt(m + 2)], 16));
                    case 2:
                        d = a(d, r([0, o.charCodeAt(m + 1)], 8));
                    case 1:
                        d = a(d, [0, o.charCodeAt(m)]), d = t(d, g), d = n(d, 31), d = t(d, p), c = a(c, d)
                }
                return c = a(c, [0, o.length]), f = a(f, [0, o.length]), c = e(c, f), f = e(f, c), c = i(c), f = i(f), c = e(c, f), f = e(f, c), ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8)
            },
            s = {
                preprocessor: null,
                audio: {
                    timeout: 1e3,
                    excludeIOS11: !0
                },
                fonts: {
                    swfContainerId: "fingerprintjs2",
                    swfPath: "flash/compiled/FontList.swf",
                    userDefinedFonts: [],
                    extendedJsFonts: !1
                },
                screen: {
                    detectScreenOrientation: !0
                },
                plugins: {
                    sortPluginsFor: [/palemoon/i],
                    excludeIE: !1
                },
                extraComponents: [],
                excludes: {
                    enumerateDevices: !0,
                    pixelRatio: !0,
                    doNotTrack: !0,
                    fontsFlash: !0,
                    adBlock: !0
                },
                NOT_AVAILABLE: "not available",
                ERROR: "error",
                EXCLUDED: "excluded"
            },
            l = function(e, t) {
                if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
                else if (e.length === +e.length)
                    for (var n = 0, r = e.length; n < r; n++) t(e[n], n, e);
                else
                    for (var a in e) e.hasOwnProperty(a) && t(e[a], a, e)
            },
            u = function(e, t) {
                var n = [];
                return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (l(e, (function(e, r, a) {
                    n.push(t(e, r, a))
                })), n)
            },
            c = function() {
                return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
            },
            f = function(e) {
                var t = [window.screen.width, window.screen.height];
                return e.screen.detectScreenOrientation && t.sort().reverse(), t
            },
            d = function(e) {
                if (window.screen.availWidth && window.screen.availHeight) {
                    var t = [window.screen.availHeight, window.screen.availWidth];
                    return e.screen.detectScreenOrientation && t.sort().reverse(), t
                }
                return e.NOT_AVAILABLE
            },
            h = function(e) {
                if (null == navigator.plugins) return e.NOT_AVAILABLE;
                for (var t = [], n = 0, r = navigator.plugins.length; n < r; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
                return p(e) && (t = t.sort((function(e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                }))), u(t, (function(e) {
                    var t = u(e, (function(e) {
                        return [e.type, e.suffixes]
                    }));
                    return [e.name, e.description, t]
                }))
            },
            g = function(e) {
                var t = [];
                return Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? t = u(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(t) {
                    try {
                        return new window.ActiveXObject(t), t
                    } catch (nh) {
                        return e.ERROR
                    }
                })) : t.push(e.NOT_AVAILABLE), navigator.plugins && (t = t.concat(h(e))), t
            },
            p = function(e) {
                for (var t = !1, n = 0, r = e.plugins.sortPluginsFor.length; n < r; n++) {
                    var a = e.plugins.sortPluginsFor[n];
                    if (navigator.userAgent.match(a)) {
                        t = !0;
                        break
                    }
                }
                return t
            },
            m = function(e) {
                try {
                    return !!window.sessionStorage
                } catch (nh) {
                    return e.ERROR
                }
            },
            v = function(e) {
                try {
                    return !!window.localStorage
                } catch (nh) {
                    return e.ERROR
                }
            },
            C = function(e) {
                if (N()) return e.EXCLUDED;
                try {
                    return !!window.indexedDB
                } catch (nh) {
                    return e.ERROR
                }
            },
            E = function(e) {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
            },
            F = function(e) {
                return navigator.cpuClass || e.NOT_AVAILABLE
            },
            y = function(e) {
                return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
            },
            A = function(e) {
                return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
            },
            D = function() {
                var e, t = 0;
                void 0 !== navigator.maxTouchPoints ? t = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"), e = !0
                } catch (n) {
                    e = !1
                }
                return [t, e, "ontouchstart" in window]
            },
            _ = function(e) {
                var t = [],
                    n = document.createElement("canvas");
                n.width = 2e3, n.height = 200, n.style.display = "inline";
                var r = n.getContext("2d");
                return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", e.dontUseFakeFontInCanvas ? r.font = "11pt Arial" : r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
            },
            b = function() {
                var e, t = function(t) {
                    return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                };
                if (!(e = G())) return null;
                var n = [],
                    r = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, r);
                var a = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
                var i = e.createProgram(),
                    o = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(o);
                var s = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(s, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(s), e.attachShader(i, o), e.attachShader(i, s), e.linkProgram(i), e.useProgram(i), i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex"), i.offsetUniform = e.getUniformLocation(i, "uniformOffset"), e.enableVertexAttribArray(i.vertexPosArray), e.vertexAttribPointer(i.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(i.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);
                try {
                    n.push(e.canvas.toDataURL())
                } catch (nh) {}
                n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                    var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    if (t) {
                        var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                        return 0 === n && (n = 2), n
                    }
                    return null
                }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
                try {
                    var u = e.getExtension("WEBGL_debug_renderer_info");
                    u && (n.push("webgl unmasked vendor:" + e.getParameter(u.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(u.UNMASKED_RENDERER_WEBGL)))
                } catch (nh) {}
                return e.getShaderPrecisionFormat ? (l(["FLOAT", "INT"], (function(t) {
                    l(["VERTEX", "FRAGMENT"], (function(r) {
                        l(["HIGH", "MEDIUM", "LOW"], (function(a) {
                            l(["precision", "rangeMin", "rangeMax"], (function(i) {
                                var o = e.getShaderPrecisionFormat(e[r + "_SHADER"], e[a + "_" + t])[i];
                                "precision" !== i && (i = "precision " + i);
                                var s = ["webgl ", r.toLowerCase(), " shader ", a.toLowerCase(), " ", t.toLowerCase(), " ", i, ":", o].join("");
                                n.push(s)
                            }))
                        }))
                    }))
                })), R(e), n) : (R(e), n)
            },
            B = function() {
                try {
                    var e = G(),
                        t = e.getExtension("WEBGL_debug_renderer_info"),
                        n = e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
                    return R(e), n
                } catch (nh) {
                    return null
                }
            },
            I = function() {
                var e = document.createElement("div");
                e.innerHTML = "&nbsp;", e.className = "adsbox";
                var t = !1;
                try {
                    document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                } catch (nh) {
                    t = !1
                }
                return t
            },
            x = function() {
                if (void 0 !== navigator.languages) try {
                    if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                } catch (e) {
                    return !0
                }
                return !1
            },
            w = function() {
                return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
            },
            S = function() {
                var e, t = navigator.userAgent.toLowerCase(),
                    n = navigator.oscpu,
                    r = navigator.platform.toLowerCase();
                if (e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("windows") >= 0 || t.indexOf("win16") >= 0 || t.indexOf("win32") >= 0 || t.indexOf("win64") >= 0 || t.indexOf("win95") >= 0 || t.indexOf("win98") >= 0 || t.indexOf("winnt") >= 0 || t.indexOf("wow64") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 || t.indexOf("cros") >= 0 || t.indexOf("x11") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("ipod") >= 0 || t.indexOf("crios") >= 0 || t.indexOf("fxios") >= 0 ? "iOS" : t.indexOf("macintosh") >= 0 || t.indexOf("mac_powerpc)") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows" !== e && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e && -1 === t.indexOf("cros")) return !0;
                if (void 0 !== n) {
                    if ((n = n.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                    if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                    if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                    if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
                }
                return r.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || (r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || (r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || !(r.indexOf("arm") >= 0 && "Windows Phone" === e) && !(r.indexOf("pike") >= 0 && t.indexOf("opera mini") >= 0) && ((r.indexOf("win") < 0 && r.indexOf("linux") < 0 && r.indexOf("mac") < 0 && r.indexOf("iphone") < 0 && r.indexOf("ipad") < 0 && r.indexOf("ipod") < 0) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e)
            },
            T = function() {
                var e, t = navigator.userAgent.toLowerCase(),
                    n = navigator.productSub;
                if (t.indexOf("edge/") >= 0 || t.indexOf("iemobile/") >= 0) return !1;
                if (t.indexOf("opera mini") >= 0) return !1;
                if (("Chrome" == (e = t.indexOf("firefox/") >= 0 ? "Firefox" : t.indexOf("opera/") >= 0 || t.indexOf(" opr/") >= 0 ? "Opera" : t.indexOf("chrome/") >= 0 ? "Chrome" : t.indexOf("safari/") >= 0 ? t.indexOf("android 1.") >= 0 || t.indexOf("android 2.") >= 0 || t.indexOf("android 3.") >= 0 || t.indexOf("android 4.") >= 0 ? "AOSP" : "Safari" : t.indexOf("trident/") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
                var r, a = eval.toString().length;
                if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                if (39 === a && "Internet Explorer" !== e && "Other" !== e) return !0;
                if (33 === a && "Chrome" !== e && "AOSP" !== e && "Opera" !== e && "Other" !== e) return !0;
                try {
                    throw "a"
                } catch (i) {
                    try {
                        i.toSource(), r = !0
                    } catch (o) {
                        r = !1
                    }
                }
                return r && "Firefox" !== e && "Other" !== e
            },
            O = function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            },
            k = function() {
                if (!O()) return !1;
                var e = G(),
                    t = !!window.WebGLRenderingContext && !!e;
                return R(e), t
            },
            M = function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            },
            N = function() {
                return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2
            },
            P = function() {
                return void 0 !== window.swfobject
            },
            L = function() {
                return window.swfobject.hasFlashPlayerVersion("9.0.0")
            },
            Y = function(e, t) {
                var n = "___fp_swf_loaded";
                window[n] = function(t) {
                    e(t)
                };
                var r = t.fonts.swfContainerId;
                ! function(e) {
                    var t = document.createElement("div");
                    t.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(t)
                }();
                var a = {
                    onReady: n
                };
                window.swfobject.embedSWF(t.fonts.swfPath, r, "1", "1", "9.0.0", !1, a, {
                    allowScriptAccess: "always",
                    menu: "false"
                }, {})
            },
            G = function() {
                var e = document.createElement("canvas"),
                    t = null;
                try {
                    t = e.getContext("webgl") || e.getContext("experimental-webgl")
                } catch (nh) {}
                return t || (t = null), t
            },
            R = function(e) {
                var t = e.getExtension("WEBGL_lose_context");
                null != t && t.loseContext()
            },
            H = [{
                key: "userAgent",
                getData: function(e) {
                    e(navigator.userAgent)
                }
            }, {
                key: "webdriver",
                getData: function(e, t) {
                    e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
                }
            }, {
                key: "language",
                getData: function(e, t) {
                    e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
                }
            }, {
                key: "colorDepth",
                getData: function(e, t) {
                    e(window.screen.colorDepth || t.NOT_AVAILABLE)
                }
            }, {
                key: "deviceMemory",
                getData: function(e, t) {
                    e(navigator.deviceMemory || t.NOT_AVAILABLE)
                }
            }, {
                key: "pixelRatio",
                getData: function(e, t) {
                    e(window.devicePixelRatio || t.NOT_AVAILABLE)
                }
            }, {
                key: "hardwareConcurrency",
                getData: function(e, t) {
                    e(E(t))
                }
            }, {
                key: "screenResolution",
                getData: function(e, t) {
                    e(f(t))
                }
            }, {
                key: "availableScreenResolution",
                getData: function(e, t) {
                    e(d(t))
                }
            }, {
                key: "timezoneOffset",
                getData: function(e) {
                    e((new Date).getTimezoneOffset())
                }
            }, {
                key: "timezone",
                getData: function(e, t) {
                    window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone || t.NOT_AVAILABLE) : e(t.NOT_AVAILABLE)
                }
            }, {
                key: "sessionStorage",
                getData: function(e, t) {
                    e(m(t))
                }
            }, {
                key: "localStorage",
                getData: function(e, t) {
                    e(v(t))
                }
            }, {
                key: "indexedDb",
                getData: function(e, t) {
                    e(C(t))
                }
            }, {
                key: "addBehavior",
                getData: function(e) {
                    e(!!window.HTMLElement.prototype.addBehavior)
                }
            }, {
                key: "openDatabase",
                getData: function(e) {
                    e(!!window.openDatabase)
                }
            }, {
                key: "cpuClass",
                getData: function(e, t) {
                    e(F(t))
                }
            }, {
                key: "platform",
                getData: function(e, t) {
                    e(y(t))
                }
            }, {
                key: "doNotTrack",
                getData: function(e, t) {
                    e(A(t))
                }
            }, {
                key: "plugins",
                getData: function(e, t) {
                    M() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(g(t)) : e(h(t))
                }
            }, {
                key: "canvas",
                getData: function(e, t) {
                    O() ? e(_(t)) : e(t.NOT_AVAILABLE)
                }
            }, {
                key: "webgl",
                getData: function(e, t) {
                    k() ? e(b()) : e(t.NOT_AVAILABLE)
                }
            }, {
                key: "webglVendorAndRenderer",
                getData: function(e) {
                    k() ? e(B()) : e()
                }
            }, {
                key: "adBlock",
                getData: function(e) {
                    e(I())
                }
            }, {
                key: "hasLiedLanguages",
                getData: function(e) {
                    e(x())
                }
            }, {
                key: "hasLiedResolution",
                getData: function(e) {
                    e(w())
                }
            }, {
                key: "hasLiedOs",
                getData: function(e) {
                    e(S())
                }
            }, {
                key: "hasLiedBrowser",
                getData: function(e) {
                    e(T())
                }
            }, {
                key: "touchSupport",
                getData: function(e) {
                    e(D())
                }
            }, {
                key: "fonts",
                getData: function(e, t) {
                    var n = ["monospace", "sans-serif", "serif"],
                        r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                    t.fonts.extendedJsFonts && (r = r.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])), r = (r = r.concat(t.fonts.userDefinedFonts)).filter((function(e, t) {
                        return r.indexOf(e) === t
                    }));
                    var a = document.getElementsByTagName("body")[0],
                        i = document.createElement("div"),
                        o = document.createElement("div"),
                        s = {},
                        l = {},
                        u = function() {
                            var e = document.createElement("span");
                            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
                        },
                        c = function(e, t) {
                            var n = u();
                            return n.style.fontFamily = "'" + e + "'," + t, n
                        },
                        f = function(e) {
                            for (var t = !1, r = 0; r < n.length; r++)
                                if (t = e[r].offsetWidth !== s[n[r]] || e[r].offsetHeight !== l[n[r]]) return t;
                            return t
                        },
                        d = function() {
                            for (var e = [], t = 0, r = n.length; t < r; t++) {
                                var a = u();
                                a.style.fontFamily = n[t], i.appendChild(a), e.push(a)
                            }
                            return e
                        }();
                    a.appendChild(i);
                    for (var h = 0, g = n.length; h < g; h++) s[n[h]] = d[h].offsetWidth, l[n[h]] = d[h].offsetHeight;
                    var p = function() {
                        for (var e = {}, t = 0, a = r.length; t < a; t++) {
                            for (var i = [], s = 0, l = n.length; s < l; s++) {
                                var u = c(r[t], n[s]);
                                o.appendChild(u), i.push(u)
                            }
                            e[r[t]] = i
                        }
                        return e
                    }();
                    a.appendChild(o);
                    for (var m = [], v = 0, C = r.length; v < C; v++) f(p[r[v]]) && m.push(r[v]);
                    a.removeChild(o), a.removeChild(i), e(m)
                },
                pauseBefore: !0
            }, {
                key: "fontsFlash",
                getData: function(e, t) {
                    return P() ? L() ? t.fonts.swfPath ? void Y((function(t) {
                        e(t)
                    }), t) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                },
                pauseBefore: !0
            }, {
                key: "audio",
                getData: function(e, t) {
                    var n = t.audio;
                    if (n.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(t.EXCLUDED);
                    var r = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                    if (null == r) return e(t.NOT_AVAILABLE);
                    var a = new r(1, 44100, 44100),
                        i = a.createOscillator();
                    i.type = "triangle", i.frequency.setValueAtTime(1e4, a.currentTime);
                    var o = a.createDynamicsCompressor();
                    l([
                        ["threshold", -50],
                        ["knee", 40],
                        ["ratio", 12],
                        ["reduction", -20],
                        ["attack", 0],
                        ["release", .25]
                    ], (function(e) {
                        void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], a.currentTime)
                    })), i.connect(o), o.connect(a.destination), i.start(0), a.startRendering();
                    var s = setTimeout((function() {
                        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".'), a.oncomplete = function() {}, a = null, e("audioTimeout")
                    }), n.timeout);
                    a.oncomplete = function(t) {
                        var n;
                        try {
                            clearTimeout(s), n = t.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, t) {
                                return e + Math.abs(t)
                            }), 0).toString(), i.disconnect(), o.disconnect()
                        } catch (r) {
                            return void e(r)
                        }
                        e(n)
                    }
                }
            }, {
                key: "enumerateDevices",
                getData: function(e, t) {
                    if (!c()) return e(t.NOT_AVAILABLE);
                    navigator.mediaDevices.enumerateDevices().then((function(t) {
                        e(t.map((function(e) {
                            return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                        })))
                    })).catch((function(t) {
                        e(t)
                    }))
                }
            }],
            Z = function(e) {
                throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")
            };
        return Z.get = function(e, t) {
            t ? e || (e = {}) : (t = e, e = {}),
                function(e, t) {
                    if (null == t) return e;
                    var n, r;
                    for (r in t) null == (n = t[r]) || Object.prototype.hasOwnProperty.call(e, r) || (e[r] = n)
                }(e, s), e.components = e.extraComponents.concat(H);
            var n = {
                    data: [],
                    addPreprocessedComponent: function(t, r) {
                        "function" == typeof e.preprocessor && (r = e.preprocessor(t, r)), n.data.push({
                            key: t,
                            value: r
                        })
                    }
                },
                r = -1,
                a = function(i) {
                    if ((r += 1) >= e.components.length) t(n.data);
                    else {
                        var o = e.components[r];
                        if (e.excludes[o.key]) a(!1);
                        else {
                            if (!i && o.pauseBefore) return r -= 1, void setTimeout((function() {
                                a(!0)
                            }), 1);
                            try {
                                o.getData((function(e) {
                                    n.addPreprocessedComponent(o.key, e), a(!1)
                                }), e)
                            } catch (s) {
                                n.addPreprocessedComponent(o.key, String(s)), a(!1)
                            }
                        }
                    }
                };
            a(!1)
        }, Z.getPromise = function(e) {
            return new Promise((function(t, n) {
                Z.get(e, t)
            }))
        }, Z.getV18 = function(e, t) {
            return null == t && (t = e, e = {}), Z.get(e, (function(n) {
                for (var r = [], a = 0; a < n.length; a++) {
                    var i = n[a];
                    if (i.value === (e.NOT_AVAILABLE || "not available")) r.push({
                        key: i.key,
                        value: "unknown"
                    });
                    else if ("plugins" === i.key) r.push({
                        key: "plugins",
                        value: u(i.value, (function(e) {
                            var t = u(e[2], (function(e) {
                                return e.join ? e.join("~") : e
                            })).join(",");
                            return [e[0], e[1], t].join("::")
                        }))
                    });
                    else if (-1 !== ["canvas", "webgl"].indexOf(i.key) && Array.isArray(i.value)) r.push({
                        key: i.key,
                        value: i.value.join("~")
                    });
                    else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(i.key)) {
                        if (!i.value) continue;
                        r.push({
                            key: i.key,
                            value: 1
                        })
                    } else i.value ? r.push(i.value.join ? {
                        key: i.key,
                        value: i.value.join(";")
                    } : i) : r.push({
                        key: i.key,
                        value: i.value
                    })
                }
                var s = o(u(r, (function(e) {
                    return e.value
                })).join("~~~"), 31);
                t(s, r)
            }))
        }, Z.x64hash128 = o, Z.VERSION = "2.1.4", Z
    }, e.exports ? e.exports = n() : t.exports ? t.exports = n() : t.Fingerprint2 = n()
}(Ro);
var Ho = Ro.exports;
const Zo = new Promise((function(e, t) {
        Ho.get((function(n) {
            const r = n.map((function(e, t) {
                return 0 === t ? e.value.replace(/\bNetType\/\w+\b/, "") : e.value
            }));
            let a = Ho.x64hash128(r.join(""), 31);
            a ? e(a) : t()
        }))
    })),
    jo = On(),
    zo = async () => {
        let e = kn.get("bdRodomTn");
        e || (e = Math.floor(10 * Math.random()) + 1, kn.set("bdRodomTn", e)), ((e = {}) => Go.post("/stat/userHm", e))({
            fp: await Zo,
            tn: e
        }).then((e => {
            let t = e.data || {},
                n = t.tn || "68018901_2_oem_dg";
            jo.value.searchEngine.forEach((e => {
                "baidu" === e.key && (e.href = `https://www.baidu.com/s?tn=${n}&ie=utf-8&wd=`)
            })), t.content && dr((() => import("./versionNotice.ad65b234.js")), ["assets/versionNotice.ad65b234.js", "assets/el-button.0a4ba32a.js"]).then((e => {
                e.default({
                    modelValue: !0,
                    title: "通知",
                    center: !0
                }, t.content)
            }))
        }))
    }, Uo = {
        v: 1,
        tid: "UA-215722304-2",
        ul: (window.navigator.language || "").toLowerCase()
    }, Xo = async (e = {}) => {
        if ("false" === window.localStorage.getItem("collectAnalytics")) return;
        Uo.cid = await Zo;
        let t = u(u({}, Uo), e),
            n = "";
        for (let r in t) n += `${r}=${t[r]}&`;
        fetch(`https://www.google-analytics.com/collect?${n}`, {
            method: "POST"
        })
    }, Vo = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, Wo = e => Vo ? Symbol(e) : e, $o = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Jo = e => "number" == typeof e && isFinite(e), Ko = e => "[object RegExp]" === ds(e), Qo = e => hs(e) && 0 === Object.keys(e).length;

function qo(e, t) {
    "undefined" != typeof console && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const es = Object.assign;
let ts;
const ns = () => ts || (ts = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});

function rs(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const as = Object.prototype.hasOwnProperty;

function is(e, t) {
    return as.call(e, t)
}
const os = Array.isArray,
    ss = e => "function" == typeof e,
    ls = e => "string" == typeof e,
    us = e => "boolean" == typeof e,
    cs = e => null !== e && "object" == typeof e,
    fs = Object.prototype.toString,
    ds = e => fs.call(e),
    hs = e => "[object Object]" === ds(e),
    gs = 15;

function ps(e, t, n = {}) {
    const {
        domain: r,
        messages: a,
        args: i
    } = n, o = new SyntaxError(String(e));
    return o.code = e, t && (o.location = t), o.domain = r, o
}
/*!
 * devtools-if v9.2.0-beta.30
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const ms = "i18n:init",
    vs = "function:translate",
    Cs = [];
/*!
 * core-base v9.2.0-beta.30
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
Cs[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
}, Cs[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
}, Cs[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
}, Cs[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
}, Cs[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
}, Cs[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
}, Cs[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Es = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function Fs(e) {
    if (null == e) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function ys(e) {
    const t = e.trim();
    return ("0" !== e.charAt(0) || !isNaN(parseInt(e))) && (n = t, Es.test(n) ? function(e) {
        const t = e.charCodeAt(0);
        return t !== e.charCodeAt(e.length - 1) || 34 !== t && 39 !== t ? e : e.slice(1, -1)
    }(t) : "*" + t);
    var n
}
const As = new Map;

function Ds(e, t) {
    return cs(e) ? e[t] : null
}
const _s = e => e,
    bs = e => "",
    Bs = e => 0 === e.length ? "" : e.join(""),
    Is = e => null == e ? "" : os(e) || hs(e) && e.toString === fs ? JSON.stringify(e, null, 2) : String(e);

function xs(e, t) {
    return e = Math.abs(e), 2 === t ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function ws(e = {}) {
    const t = e.locale,
        n = function(e) {
            const t = Jo(e.pluralIndex) ? e.pluralIndex : -1;
            return e.named && (Jo(e.named.count) || Jo(e.named.n)) ? Jo(e.named.count) ? e.named.count : Jo(e.named.n) ? e.named.n : t : t
        }(e),
        r = cs(e.pluralRules) && ls(t) && ss(e.pluralRules[t]) ? e.pluralRules[t] : xs,
        a = cs(e.pluralRules) && ls(t) && ss(e.pluralRules[t]) ? xs : void 0,
        i = e.list || [],
        o = e.named || {};
    Jo(e.pluralIndex) && function(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }(n, o);

    function s(t) {
        const n = ss(e.messages) ? e.messages(t) : !!cs(e.messages) && e.messages[t];
        return n || (e.parent ? e.parent.message(t) : bs)
    }
    const l = hs(e.processor) && ss(e.processor.normalize) ? e.processor.normalize : Bs,
        u = hs(e.processor) && ss(e.processor.interpolate) ? e.processor.interpolate : Is,
        c = {
            list: e => i[e],
            named: e => o[e],
            plural: e => e[r(n, e.length, a)],
            linked: (t, n) => {
                const r = s(t)(c);
                return ls(n) ? (a = n, e.modifiers ? e.modifiers[a] : _s)(r) : r;
                var a
            },
            message: s,
            type: hs(e.processor) && ls(e.processor.type) ? e.processor.type : "text",
            interpolate: u,
            normalize: l
        };
    return c
}
let Ss = null;
const Ts = Os(vs);

function Os(e) {
    return t => Ss && Ss.emit(e, t)
}

function ks(e, t, n) {
    return [...new Set([n, ...os(t) ? t : cs(t) ? Object.keys(t) : ls(t) ? [t] : [n]])]
}

function Ms(e, t, n) {
    const r = ls(n) ? n : Ys,
        a = e;
    a.__localeChainCache || (a.__localeChainCache = new Map);
    let i = a.__localeChainCache.get(r);
    if (!i) {
        i = [];
        let e = [n];
        for (; os(e);) e = Ns(i, e, t);
        const o = os(t) || !hs(t) ? t : t.default ? t.default : null;
        e = ls(o) ? [o] : o, os(e) && Ns(i, e, !1), a.__localeChainCache.set(r, i)
    }
    return i
}

function Ns(e, t, n) {
    let r = !0;
    for (let a = 0; a < t.length && us(r); a++) {
        const i = t[a];
        ls(i) && (r = Ps(e, t[a], n))
    }
    return r
}

function Ps(e, t, n) {
    let r;
    const a = t.split("-");
    do {
        r = Ls(e, a.join("-"), n), a.splice(-1, 1)
    } while (a.length && !0 === r);
    return r
}

function Ls(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = "!" !== t[t.length - 1];
        const a = t.replace(/!/g, "");
        e.push(a), (os(n) || hs(n)) && n[a] && (r = n[a])
    }
    return r
}
const Ys = "en-US";
let Gs, Rs;
let Hs = null;
const Zs = e => {
    Hs = e
};
let js = 0;

function zs(e = {}) {
    const t = ls(e.version) ? e.version : "9.2.0-beta.30",
        n = ls(e.locale) ? e.locale : Ys,
        r = os(e.fallbackLocale) || hs(e.fallbackLocale) || ls(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : n,
        a = hs(e.messages) ? e.messages : {
            [n]: {}
        },
        i = hs(e.datetimeFormats) ? e.datetimeFormats : {
            [n]: {}
        },
        o = hs(e.numberFormats) ? e.numberFormats : {
            [n]: {}
        },
        s = es({}, e.modifiers || {}, {
            upper: e => ls(e) ? e.toUpperCase() : e,
            lower: e => ls(e) ? e.toLowerCase() : e,
            capitalize: e => ls(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
        }),
        l = e.pluralRules || {},
        u = ss(e.missing) ? e.missing : null,
        c = !us(e.missingWarn) && !Ko(e.missingWarn) || e.missingWarn,
        f = !us(e.fallbackWarn) && !Ko(e.fallbackWarn) || e.fallbackWarn,
        d = !!e.fallbackFormat,
        h = !!e.unresolving,
        g = ss(e.postTranslation) ? e.postTranslation : null,
        p = hs(e.processor) ? e.processor : null,
        m = !us(e.warnHtmlMessage) || e.warnHtmlMessage,
        v = !!e.escapeParameter,
        C = ss(e.messageCompiler) ? e.messageCompiler : undefined,
        E = ss(e.messageResolver) ? e.messageResolver : Gs || Ds,
        F = ss(e.localeFallbacker) ? e.localeFallbacker : Rs || ks,
        y = ss(e.onWarn) ? e.onWarn : qo,
        A = e,
        D = cs(A.__datetimeFormatters) ? A.__datetimeFormatters : new Map,
        _ = cs(A.__numberFormatters) ? A.__numberFormatters : new Map,
        b = cs(A.__meta) ? A.__meta : {};
    js++;
    const B = {
        version: t,
        cid: js,
        locale: n,
        fallbackLocale: r,
        messages: a,
        modifiers: s,
        pluralRules: l,
        missing: u,
        missingWarn: c,
        fallbackWarn: f,
        fallbackFormat: d,
        unresolving: h,
        postTranslation: g,
        processor: p,
        warnHtmlMessage: m,
        escapeParameter: v,
        messageCompiler: C,
        messageResolver: E,
        localeFallbacker: F,
        onWarn: y,
        __meta: b
    };
    return B.datetimeFormats = i, B.numberFormats = o, B.__datetimeFormatters = D, B.__numberFormatters = _, __INTLIFY_PROD_DEVTOOLS__ && function(e, t, n) {
        Ss && Ss.emit(ms, {
            timestamp: Date.now(),
            i18n: e,
            version: t,
            meta: n
        })
    }(B, t, b), B
}

function Us(e, t, n, r, a) {
    const {
        missing: i,
        onWarn: o
    } = e;
    if (null !== i) {
        const r = i(e, n, t, a);
        return ls(r) ? r : t
    }
    return t
}

function Xs(e, t, n) {
    e.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}
let Vs = gs;
const Ws = () => ++Vs,
    $s = {
        INVALID_ARGUMENT: Vs,
        INVALID_DATE_ARGUMENT: Ws(),
        INVALID_ISO_DATE_ARGUMENT: Ws(),
        __EXTEND_POINT__: Ws()
    };

function Js(e) {
    return ps(e, null, void 0)
}
const Ks = () => "",
    Qs = e => ss(e);

function qs(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: a,
        messageCompiler: i,
        fallbackLocale: o,
        messages: s
    } = e, [l, u] = tl(...t), c = (us(u.missingWarn) ? u.missingWarn : e.missingWarn, us(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, us(u.escapeParameter) ? u.escapeParameter : e.escapeParameter), f = !!u.resolvedMessage, d = ls(u.default) || us(u.default) ? us(u.default) ? l : u.default : n ? i ? l : () => l : "", h = n || "" !== d, g = ls(u.locale) ? u.locale : e.locale;
    c && function(e) {
        os(e.list) ? e.list = e.list.map((e => ls(e) ? rs(e) : e)) : cs(e.named) && Object.keys(e.named).forEach((t => {
            ls(e.named[t]) && (e.named[t] = rs(e.named[t]))
        }))
    }(u);
    let [p, m, v] = f ? [l, g, s[g] || {}] : function(e, t, n, r, a, i) {
        const {
            messages: o,
            onWarn: s,
            messageResolver: l,
            localeFallbacker: u
        } = e, c = u(e, r, n);
        let f, d = {},
            h = null;
        const g = "translate";
        for (let p = 0; p < c.length && (f = c[p], d = o[f] || {}, null === (h = l(d, t)) && (h = d[t]), !ls(h) && !ss(h)); p++) {
            const n = Us(e, t, f, 0, g);
            n !== t && (h = n)
        }
        return [h, f, d]
    }(e, l, g, o), C = p, E = l;
    if (f || ls(C) || Qs(C) || h && (C = d, E = C), !(f || (ls(C) || Qs(C)) && ls(m))) return a ? -1 : l;
    let F = !1;
    const y = Qs(C) ? C : el(e, l, m, C, E, (() => {
        F = !0
    }));
    if (F) return C;
    const A = function(e, t, n, r) {
            const {
                modifiers: a,
                pluralRules: i,
                messageResolver: o
            } = e, s = r => {
                const a = o(n, r);
                if (ls(a)) {
                    let n = !1;
                    const i = el(e, r, t, a, r, (() => {
                        n = !0
                    }));
                    return n ? Ks : i
                }
                return Qs(a) ? a : Ks
            }, l = {
                locale: t,
                modifiers: a,
                pluralRules: i,
                messages: s
            };
            e.processor && (l.processor = e.processor);
            r.list && (l.list = r.list);
            r.named && (l.named = r.named);
            Jo(r.plural) && (l.pluralIndex = r.plural);
            return l
        }(e, m, v, u),
        D = function(e, t, n) {
            return t(n)
        }(0, y, ws(A)),
        _ = r ? r(D) : D;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const t = {
            timestamp: Date.now(),
            key: ls(l) ? l : Qs(C) ? C.key : "",
            locale: m || (Qs(C) ? C.locale : ""),
            format: ls(C) ? C : Qs(C) ? C.source : "",
            message: _
        };
        t.meta = es({}, e.__meta, Hs || {}), Ts(t)
    }
    return _
}

function el(e, t, n, r, a, i) {
    const {
        messageCompiler: o,
        warnHtmlMessage: s
    } = e;
    if (Qs(r)) {
        const e = r;
        return e.locale = e.locale || n, e.key = e.key || t, e
    }
    const l = o(r, function(e, t, n, r, a, i) {
        return {
            warnHtmlMessage: a,
            onError: e => {
                throw i && i(e), e
            },
            onCacheKey: e => ((e, t, n) => $o({
                l: e,
                k: t,
                s: n
            }))(t, n, e)
        }
    }(0, n, a, 0, s, i));
    return l.locale = n, l.key = t, l.source = r, l
}

function tl(...e) {
    const [t, n, r] = e, a = {};
    if (!ls(t) && !Jo(t) && !Qs(t)) throw Js($s.INVALID_ARGUMENT);
    const i = Jo(t) ? String(t) : (Qs(t), t);
    return Jo(n) ? a.plural = n : ls(n) ? a.default = n : hs(n) && !Qo(n) ? a.named = n : os(n) && (a.list = n), Jo(r) ? a.plural = r : ls(r) ? a.default = r : hs(r) && es(a, r), [i, a]
}

function nl(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: a,
        onWarn: i,
        localeFallbacker: o
    } = e, {
        __datetimeFormatters: s
    } = e, [l, u, c, f] = rl(...t);
    us(c.missingWarn) ? c.missingWarn : e.missingWarn;
    us(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const d = !!c.part,
        h = ls(c.locale) ? c.locale : e.locale,
        g = o(e, a, h);
    if (!ls(l) || "" === l) return new Intl.DateTimeFormat(h).format(u);
    let p, m = {},
        v = null;
    for (let F = 0; F < g.length && (p = g[F], m = n[p] || {}, v = m[l], !hs(v)); F++) Us(e, l, p, 0, "datetime format");
    if (!hs(v) || !ls(p)) return r ? -1 : l;
    let C = `${p}__${l}`;
    Qo(f) || (C = `${C}__${JSON.stringify(f)}`);
    let E = s.get(C);
    return E || (E = new Intl.DateTimeFormat(p, es({}, v, f)), s.set(C, E)), d ? E.formatToParts(u) : E.format(u)
}

function rl(...e) {
    const [t, n, r, a] = e;
    let i, o = {},
        s = {};
    if (ls(t)) {
        const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!e) throw Js($s.INVALID_ISO_DATE_ARGUMENT);
        const n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
        i = new Date(n);
        try {
            i.toISOString()
        } catch (nh) {
            throw Js($s.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if ("[object Date]" === ds(t)) {
        if (isNaN(t.getTime())) throw Js($s.INVALID_DATE_ARGUMENT);
        i = t
    } else {
        if (!Jo(t)) throw Js($s.INVALID_ARGUMENT);
        i = t
    }
    return ls(n) ? o.key = n : hs(n) && (o = n), ls(r) ? o.locale = r : hs(r) && (s = r), hs(a) && (s = a), [o.key || "", i, o, s]
}

function al(e, t, n) {
    const r = e;
    for (const a in n) {
        const e = `${t}__${a}`;
        r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e)
    }
}

function il(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: a,
        onWarn: i,
        localeFallbacker: o
    } = e, {
        __numberFormatters: s
    } = e, [l, u, c, f] = ol(...t);
    us(c.missingWarn) ? c.missingWarn : e.missingWarn;
    us(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const d = !!c.part,
        h = ls(c.locale) ? c.locale : e.locale,
        g = o(e, a, h);
    if (!ls(l) || "" === l) return new Intl.NumberFormat(h).format(u);
    let p, m = {},
        v = null;
    for (let F = 0; F < g.length && (p = g[F], m = n[p] || {}, v = m[l], !hs(v)); F++) Us(e, l, p, 0, "number format");
    if (!hs(v) || !ls(p)) return r ? -1 : l;
    let C = `${p}__${l}`;
    Qo(f) || (C = `${C}__${JSON.stringify(f)}`);
    let E = s.get(C);
    return E || (E = new Intl.NumberFormat(p, es({}, v, f)), s.set(C, E)), d ? E.formatToParts(u) : E.format(u)
}

function ol(...e) {
    const [t, n, r, a] = e;
    let i = {},
        o = {};
    if (!Jo(t)) throw Js($s.INVALID_ARGUMENT);
    const s = t;
    return ls(n) ? i.key = n : hs(n) && (i = n), ls(r) ? i.locale = r : hs(r) && (o = r), hs(a) && (o = a), [i.key || "", s, i, o]
}

function sl(e, t, n) {
    const r = e;
    for (const a in n) {
        const e = `${t}__${a}`;
        r.__numberFormatters.has(e) && r.__numberFormatters.delete(e)
    }
}
"boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (ns().__INTLIFY_PROD_DEVTOOLS__ = !1);
let ll = gs;
const ul = () => ++ll,
    cl = {
        UNEXPECTED_RETURN_TYPE: ll,
        INVALID_ARGUMENT: ul(),
        MUST_BE_CALL_SETUP_TOP: ul(),
        NOT_INSLALLED: ul(),
        NOT_AVAILABLE_IN_LEGACY_MODE: ul(),
        REQUIRED_VALUE: ul(),
        INVALID_VALUE: ul(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ul(),
        NOT_INSLALLED_WITH_PROVIDE: ul(),
        UNEXPECTED_ERROR: ul(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: ul(),
        BRIDGE_SUPPORT_VUE_2_ONLY: ul(),
        __EXTEND_POINT__: ul()
    };

function fl(e, ...t) {
    return ps(e, null, void 0)
}
const dl = Wo("__transrateVNode"),
    hl = Wo("__datetimeParts"),
    gl = Wo("__numberParts"),
    pl = Wo("__setPluralRules");
Wo("__intlifyMeta");
const ml = Wo("__injectWithOption");

function vl(e) {
    if (!cs(e)) return e;
    for (const t in e)
        if (is(e, t))
            if (t.includes(".")) {
                const n = t.split("."),
                    r = n.length - 1;
                let a = e;
                for (let e = 0; e < r; e++) n[e] in a || (a[n[e]] = {}), a = a[n[e]];
                a[n[r]] = e[t], delete e[t], cs(a[n[r]]) && vl(a[n[r]])
            } else cs(e[t]) && vl(e[t]);
    return e
}

function Cl(e, t) {
    const {
        messages: n,
        __i18n: r,
        messageResolver: a,
        flatJson: i
    } = t, o = hs(n) ? n : os(r) ? {} : {
        [e]: {}
    };
    if (os(r) && r.forEach((e => {
            if ("locale" in e && "resource" in e) {
                const {
                    locale: t,
                    resource: n
                } = e;
                t ? (o[t] = o[t] || {}, Fl(n, o[t])) : Fl(n, o)
            } else ls(e) && Fl(JSON.parse(e), o)
        })), null == a && i)
        for (const s in o) is(o, s) && vl(o[s]);
    return o
}
const El = e => !cs(e) || os(e);

function Fl(e, t) {
    if (El(e) || El(t)) throw fl(cl.INVALID_VALUE);
    for (const n in e) is(e, n) && (El(e[n]) || El(t[n]) ? t[n] = e[n] : Fl(e[n], t[n]))
}

function yl(e) {
    return e.type
}

function Al(e) {
    return ge(Q, null, e, 0)
}
let Dl = 0;

function _l(e) {
    return (t, n, r, a) => e(n, r, ye() || void 0, a)
}

function bl(e = {}, t) {
    const {
        __root: n
    } = e, r = void 0 === n;
    let a = !us(e.inheritLocale) || e.inheritLocale;
    const i = x(n && a ? n.locale.value : ls(e.locale) ? e.locale : Ys),
        o = x(n && a ? n.fallbackLocale.value : ls(e.fallbackLocale) || os(e.fallbackLocale) || hs(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : i.value),
        s = x(Cl(i.value, e)),
        l = x(hs(e.datetimeFormats) ? e.datetimeFormats : {
            [i.value]: {}
        }),
        u = x(hs(e.numberFormats) ? e.numberFormats : {
            [i.value]: {}
        });
    let c = n ? n.missingWarn : !us(e.missingWarn) && !Ko(e.missingWarn) || e.missingWarn,
        f = n ? n.fallbackWarn : !us(e.fallbackWarn) && !Ko(e.fallbackWarn) || e.fallbackWarn,
        d = n ? n.fallbackRoot : !us(e.fallbackRoot) || e.fallbackRoot,
        h = !!e.fallbackFormat,
        g = ss(e.missing) ? e.missing : null,
        p = ss(e.missing) ? _l(e.missing) : null,
        m = ss(e.postTranslation) ? e.postTranslation : null,
        v = n ? n.warnHtmlMessage : !us(e.warnHtmlMessage) || e.warnHtmlMessage,
        C = !!e.escapeParameter;
    const E = n ? n.modifiers : hs(e.modifiers) ? e.modifiers : {};
    let F, y = e.pluralRules || n && n.pluralRules;
    F = function() {
        const t = {
            version: "9.2.0-beta.30",
            locale: i.value,
            fallbackLocale: o.value,
            messages: s.value,
            modifiers: E,
            pluralRules: y,
            missing: null === p ? void 0 : p,
            missingWarn: c,
            fallbackWarn: f,
            fallbackFormat: h,
            unresolving: !0,
            postTranslation: null === m ? void 0 : m,
            warnHtmlMessage: v,
            escapeParameter: C,
            messageResolver: e.messageResolver,
            __meta: {
                framework: "vue"
            }
        };
        return t.datetimeFormats = l.value, t.numberFormats = u.value, t.__datetimeFormatters = hs(F) ? F.__datetimeFormatters : void 0, t.__numberFormatters = hs(F) ? F.__numberFormatters : void 0, zs(t)
    }(), Xs(F, i.value, o.value);
    const A = re({
            get: () => i.value,
            set: e => {
                i.value = e, F.locale = i.value
            }
        }),
        D = re({
            get: () => o.value,
            set: e => {
                o.value = e, F.fallbackLocale = o.value, Xs(F, i.value, e)
            }
        }),
        _ = re((() => s.value)),
        b = re((() => l.value)),
        B = re((() => u.value));

    function I(e, t, r, a, c, f) {
        let h;
        if (i.value, o.value, s.value, l.value, u.value, __INTLIFY_PROD_DEVTOOLS__) try {
            Zs((() => {
                const e = ye();
                let t = null;
                return e && (t = yl(e).__INTLIFY_META__) ? {
                    __INTLIFY_META__: t
                } : null
            })()), h = e(F)
        } finally {
            Zs(null)
        } else h = e(F);
        if (Jo(h) && -1 === h) {
            const [e, r] = t();
            return n && d ? a(n) : c(e)
        }
        if (f(h)) return h;
        throw fl(cl.UNEXPECTED_RETURN_TYPE)
    }

    function w(...e) {
        return I((t => Reflect.apply(qs, null, [t, ...e])), (() => tl(...e)), 0, (t => Reflect.apply(t.t, t, [...e])), (e => e), (e => ls(e)))
    }
    const S = {
        normalize: function(e) {
            return e.map((e => ls(e) ? Al(e) : e))
        },
        interpolate: e => e,
        type: "vnode"
    };

    function T(e) {
        return s.value[e] || {}
    }
    Dl++, n && (Ct(n.locale, (e => {
        a && (i.value = e, F.locale = e, Xs(F, i.value, o.value))
    })), Ct(n.fallbackLocale, (e => {
        a && (o.value = e, F.fallbackLocale = e, Xs(F, i.value, o.value))
    })));
    const O = {
        id: Dl,
        locale: A,
        fallbackLocale: D,
        get inheritLocale() {
            return a
        },
        set inheritLocale(e) {
            a = e, e && n && (i.value = n.locale.value, o.value = n.fallbackLocale.value, Xs(F, i.value, o.value))
        },
        get availableLocales() {
            return Object.keys(s.value).sort()
        },
        messages: _,
        get modifiers() {
            return E
        },
        get pluralRules() {
            return y || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return c
        },
        set missingWarn(e) {
            c = e, F.missingWarn = c
        },
        get fallbackWarn() {
            return f
        },
        set fallbackWarn(e) {
            f = e, F.fallbackWarn = f
        },
        get fallbackRoot() {
            return d
        },
        set fallbackRoot(e) {
            d = e
        },
        get fallbackFormat() {
            return h
        },
        set fallbackFormat(e) {
            h = e, F.fallbackFormat = h
        },
        get warnHtmlMessage() {
            return v
        },
        set warnHtmlMessage(e) {
            v = e, F.warnHtmlMessage = e
        },
        get escapeParameter() {
            return C
        },
        set escapeParameter(e) {
            C = e, F.escapeParameter = e
        },
        t: w,
        getLocaleMessage: T,
        setLocaleMessage: function(e, t) {
            s.value[e] = t, F.messages = s.value
        },
        mergeLocaleMessage: function(e, t) {
            s.value[e] = s.value[e] || {}, Fl(t, s.value[e]), F.messages = s.value
        },
        getPostTranslationHandler: function() {
            return ss(m) ? m : null
        },
        setPostTranslationHandler: function(e) {
            m = e, F.postTranslation = e
        },
        getMissingHandler: function() {
            return g
        },
        setMissingHandler: function(e) {
            null !== e && (p = _l(e)), g = e, F.missing = p
        },
        [pl]: function(e) {
            y = e, F.pluralRules = y
        }
    };
    return O.datetimeFormats = b, O.numberFormats = B, O.rt = function(...e) {
        const [t, n, r] = e;
        if (r && !cs(r)) throw fl(cl.INVALID_ARGUMENT);
        return w(t, n, es({
            resolvedMessage: !0
        }, r || {}))
    }, O.te = function(e, t) {
        const n = T(ls(t) ? t : i.value);
        return null !== F.messageResolver(n, e)
    }, O.tm = function(e) {
        const t = function(e) {
            let t = null;
            const n = Ms(F, o.value, i.value);
            for (let r = 0; r < n.length; r++) {
                const a = s.value[n[r]] || {},
                    i = F.messageResolver(a, e);
                if (null != i) {
                    t = i;
                    break
                }
            }
            return t
        }(e);
        return null != t ? t : n && n.tm(e) || {}
    }, O.d = function(...e) {
        return I((t => Reflect.apply(nl, null, [t, ...e])), (() => rl(...e)), 0, (t => Reflect.apply(t.d, t, [...e])), (() => ""), (e => ls(e)))
    }, O.n = function(...e) {
        return I((t => Reflect.apply(il, null, [t, ...e])), (() => ol(...e)), 0, (t => Reflect.apply(t.n, t, [...e])), (() => ""), (e => ls(e)))
    }, O.getDateTimeFormat = function(e) {
        return l.value[e] || {}
    }, O.setDateTimeFormat = function(e, t) {
        l.value[e] = t, F.datetimeFormats = l.value, al(F, e, t)
    }, O.mergeDateTimeFormat = function(e, t) {
        l.value[e] = es(l.value[e] || {}, t), F.datetimeFormats = l.value, al(F, e, t)
    }, O.getNumberFormat = function(e) {
        return u.value[e] || {}
    }, O.setNumberFormat = function(e, t) {
        u.value[e] = t, F.numberFormats = u.value, sl(F, e, t)
    }, O.mergeNumberFormat = function(e, t) {
        u.value[e] = es(u.value[e] || {}, t), F.numberFormats = u.value, sl(F, e, t)
    }, O[ml] = e.__injectWithOption, O[dl] = function(...e) {
        return I((t => {
            let n;
            const r = t;
            try {
                r.processor = S, n = Reflect.apply(qs, null, [r, ...e])
            } finally {
                r.processor = null
            }
            return n
        }), (() => tl(...e)), 0, (t => t[dl](...e)), (e => [Al(e)]), (e => os(e)))
    }, O[hl] = function(...e) {
        return I((t => Reflect.apply(nl, null, [t, ...e])), (() => rl(...e)), 0, (t => t[hl](...e)), (() => []), (e => ls(e) || os(e)))
    }, O[gl] = function(...e) {
        return I((t => Reflect.apply(il, null, [t, ...e])), (() => ol(...e)), 0, (t => t[gl](...e)), (() => []), (e => ls(e) || os(e)))
    }, O
}
const Bl = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => "parent" === e || "global" === e,
        default: "parent"
    },
    i18n: {
        type: Object
    }
};

function Il(e) {
    return V
}
const xl = {
    name: "i18n-t",
    props: es({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => Jo(e) || !isNaN(e)
        }
    }, Bl),
    setup(e, t) {
        const {
            slots: n,
            attrs: r
        } = t, a = e.i18n || Ll({
            useScope: e.scope,
            __useComponent: !0
        }), i = Object.keys(n).filter((e => "_" !== e));
        return () => {
            const n = {};
            e.locale && (n.locale = e.locale), void 0 !== e.plural && (n.plural = ls(e.plural) ? +e.plural : e.plural);
            const o = function({
                    slots: e
                }, t) {
                    if (1 === t.length && "default" === t[0]) return (e.default ? e.default() : []).reduce(((e, t) => [...e, ...os(t.children) ? t.children : [t]]), []);
                    return t.reduce(((t, n) => {
                        const r = e[n];
                        return r && (t[n] = r()), t
                    }), {})
                }(t, i),
                s = a[dl](e.keypath, o, n),
                l = es({}, r),
                u = ls(e.tag) || cs(e.tag) ? e.tag : Il();
            return _e(u, l, s)
        }
    }
};

function wl(e, t, n, r) {
    const {
        slots: a,
        attrs: i
    } = t;
    return () => {
        const t = {
            part: !0
        };
        let o = {};
        e.locale && (t.locale = e.locale), ls(e.format) ? t.key = e.format : cs(e.format) && (ls(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce(((t, r) => n.includes(r) ? es({}, t, {
            [r]: e.format[r]
        }) : t), {}));
        const s = r(e.value, t, o);
        let l = [t.key];
        os(s) ? l = s.map(((e, t) => {
            const n = a[e.type];
            return n ? n({
                [e.type]: e.value,
                index: t,
                parts: s
            }) : [e.value]
        })) : ls(s) && (l = [s]);
        const u = es({}, i),
            c = ls(e.tag) || cs(e.tag) ? e.tag : Il();
        return _e(c, u, l)
    }
}
const Sl = ["localeMatcher", "style", "unit", "unitDisplay", "currency", "currencyDisplay", "useGrouping", "numberingSystem", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "notation", "formatMatcher"],
    Tl = {
        name: "i18n-n",
        props: es({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, Bl),
        setup(e, t) {
            const n = e.i18n || Ll({
                useScope: "parent",
                __useComponent: !0
            });
            return wl(e, t, Sl, ((...e) => n[gl](...e)))
        }
    },
    Ol = ["dateStyle", "timeStyle", "fractionalSecondDigits", "calendar", "dayPeriod", "numberingSystem", "localeMatcher", "timeZone", "hour12", "hourCycle", "formatMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
    kl = {
        name: "i18n-d",
        props: es({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, Bl),
        setup(e, t) {
            const n = e.i18n || Ll({
                useScope: "parent",
                __useComponent: !0
            });
            return wl(e, t, Ol, ((...e) => n[hl](...e)))
        }
    };

function Ml(e) {
    const t = (t, {
        instance: n,
        value: r,
        modifiers: a
    }) => {
        if (!n || !n.$) throw fl(cl.UNEXPECTED_ERROR);
        const i = function(e, t) {
                const n = e;
                if ("composition" === e.mode) return n.__getInstance(t) || e.global; {
                    const r = n.__getInstance(t);
                    return null != r ? r.__composer : e.global.__composer
                }
            }(e, n.$),
            o = function(e) {
                if (ls(e)) return {
                    path: e
                };
                if (hs(e)) {
                    if (!("path" in e)) throw fl(cl.REQUIRED_VALUE);
                    return e
                }
                throw fl(cl.INVALID_VALUE)
            }(r);
        t.textContent = Reflect.apply(i.t, i, [...Nl(o)])
    };
    return {
        beforeMount: t,
        beforeUpdate: t
    }
}

function Nl(e) {
    const {
        path: t,
        locale: n,
        args: r,
        choice: a,
        plural: i
    } = e, o = {}, s = r || {};
    return ls(n) && (o.locale = n), Jo(a) && (o.plural = a), Jo(i) && (o.plural = i), [t, s, o]
}
const Pl = Wo("global-vue-i18n");

function Ll(e = {}) {
    const t = ye();
    if (null == t) throw fl(cl.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && null != t.appContext.app && !t.appContext.app.__VUE_I18N_SYMBOL__) throw fl(cl.NOT_INSLALLED);
    const n = function(e) {
            {
                const t = Ie(e.isCE ? Pl : e.appContext.app.__VUE_I18N_SYMBOL__);
                if (!t) throw fl(e.isCE ? cl.NOT_INSLALLED_WITH_PROVIDE : cl.UNEXPECTED_ERROR);
                return t
            }
        }(t),
        r = function(e) {
            return "composition" === e.mode ? e.global : e.global.__composer
        }(n),
        a = yl(t),
        i = function(e, t) {
            return Qo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
        }(e, a);
    if ("global" === i) return function(e, t, n) {
        let r = cs(t.messages) ? t.messages : {};
        "__i18nGlobal" in n && (r = Cl(e.locale.value, {
            messages: r,
            __i18n: n.__i18nGlobal
        }));
        const a = Object.keys(r);
        if (a.length && a.forEach((t => {
                e.mergeLocaleMessage(t, r[t])
            })), cs(t.datetimeFormats)) {
            const n = Object.keys(t.datetimeFormats);
            n.length && n.forEach((n => {
                e.mergeDateTimeFormat(n, t.datetimeFormats[n])
            }))
        }
        if (cs(t.numberFormats)) {
            const n = Object.keys(t.numberFormats);
            n.length && n.forEach((n => {
                e.mergeNumberFormat(n, t.numberFormats[n])
            }))
        }
    }(r, e, a), r;
    if ("parent" === i) {
        let a = function(e, t, n = !1) {
            let r = null;
            const a = t.root;
            let i = t.parent;
            for (; null != i;) {
                const t = e;
                if ("composition" === e.mode && (r = t.__getInstance(i)), null != r) break;
                if (a === i) break;
                i = i.parent
            }
            return r
        }(n, t, e.__useComponent);
        return null == a && (a = r), a
    }
    if ("legacy" === n.mode) throw fl(cl.NOT_AVAILABLE_IN_LEGACY_MODE);
    const o = n;
    let s = o.__getInstance(t);
    if (null == s) {
        const n = es({}, e);
        "__i18n" in a && (n.__i18n = a.__i18n), r && (n.__root = r), s = bl(n),
            function(e, t, n) {
                Re((() => {}), t), ze((() => {
                    e.__deleteInstance(t)
                }), t)
            }(o, t), o.__setInstance(t, s)
    }
    return s
}
const Yl = ["locale", "fallbackLocale", "availableLocales"],
    Gl = ["t", "rt", "d", "n", "tm"];
var Rl;
if (Gs = function(e, t) {
        if (!cs(e)) return null;
        let n = As.get(t);
        if (n || (n = function(e) {
                const t = [];
                let n, r, a, i, o, s, l, u = -1,
                    c = 0,
                    f = 0;
                const d = [];

                function h() {
                    const t = e[u + 1];
                    if (5 === c && "'" === t || 6 === c && '"' === t) return u++, a = "\\" + t, d[0](), !0
                }
                for (d[0] = () => {
                        void 0 === r ? r = a : r += a
                    }, d[1] = () => {
                        void 0 !== r && (t.push(r), r = void 0)
                    }, d[2] = () => {
                        d[0](), f++
                    }, d[3] = () => {
                        if (f > 0) f--, c = 4, d[0]();
                        else {
                            if (f = 0, void 0 === r) return !1;
                            if (r = ys(r), !1 === r) return !1;
                            d[1]()
                        }
                    }; null !== c;)
                    if (u++, n = e[u], "\\" !== n || !h()) {
                        if (i = Fs(n), l = Cs[c], o = l[i] || l.l || 8, 8 === o) return;
                        if (c = o[0], void 0 !== o[1] && (s = d[o[1]], s && (a = n, !1 === s()))) return;
                        if (7 === c) return t
                    }
            }(t), n && As.set(t, n)), !n) return null;
        const r = n.length;
        let a = e,
            i = 0;
        for (; i < r;) {
            const e = a[n[i]];
            if (void 0 === e) return null;
            a = e, i++
        }
        return a
    }, Rs = Ms, "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (ns().__INTLIFY_PROD_DEVTOOLS__ = !1), __INTLIFY_PROD_DEVTOOLS__) {
    const e = ns();
    e.__INTLIFY__ = !0, Rl = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__, Ss = Rl
}
const Hl = {
        class: "wfull"
    },
    Zl = ["src"],
    jl = ["onKeydown", "placeholder"],
    zl = {
        class: "se-list-keyword"
    },
    Ul = ["onClick", "title"],
    Xl = ["src"],
    Vl = {
        class: "d-elip se-item-title"
    },
    Wl = {
        class: "se-item-icon",
        style: {
            color: "var(--primary-color)"
        }
    },
    $l = (e => ($e("data-v-caa580be"), e = e(), Ve(), e))((() => se("p", {
        class: "d-elip se-item-title"
    }, "添加", -1))),
    Jl = ["onClick", "data-index"],
    Kl = {
        class: "d-cell d-elip"
    },
    Ql = {
        name: "HomeSearch"
    },
    ql = Object.assign(Ql, {
        setup(e) {
            const {
                t: t
            } = Ll(), n = On(), r = pe((() => dr((() => import("./HomeSearchList.73fe80eb.js")), ["assets/HomeSearchList.73fe80eb.js", "assets/el-button.0a4ba32a.js", "assets/el-input.b3ba137c.js", "assets/typescript.72bf8adc.js", "assets/el-dialog.4b8a03dc.js", "assets/el-overlay.ebdea840.js", "assets/index.8dc67c0c.js", "assets/el-checkbox-group.f5e56890.js", "assets/validator.053f84bf.js"]))), a = x(), i = B({
                value: "",
                isShowSelect: !1,
                showKeyWord: !1,
                currSearch: {},
                keyList: [],
                value: "",
                keyIndex: -1,
                searchVisible: !1,
                searchList: []
            });
            setTimeout((() => {
                ! function() {
                    let e = n.value.useSearch || "baidu";
                    i.currSearch.key = e, n.value.searchEngine ? i.currSearch = n.value.searchEngine.find((t => t.key == e)) || o[0] : (n.value.searchEngine = o, i.currSearch = o[0]);
                    No(document, "click", (e => {
                        i.isShowSelect = !1, a.value.contains(e.target) || (i.showKeyWord = !1)
                    }), !1)
                }()
            }), 0);
            const o = [{
                key: "baidu",
                title: "百度",
                href: "https://www.baidu.com/s?tn=68018901_2_oem_dg&ie=utf-8&wd="
            }, {
                key: "google",
                title: "Google",
                href: "https://www.google.com/search?q="
            }, {
                key: "bing",
                title: "必应",
                href: "https://cn.bing.com/search?q="
            }, {
                key: "github",
                title: "gitHub",
                href: "https://github.com/search?q="
            }];

            function s(e) {
                let t = n.value.useSearch || "baidu",
                    r = n.value.searchEngine.findIndex((e => e.key == t));
                r += 1, r >= (n.value.searchEngine || []).length && (r = 0), i.currSearch = n.value.searchEngine[r], n.value.useSearch = i.currSearch.key
            }

            function l(e) {
                let t = e.code;
                "ArrowDown" === t ? (i.keyIndex++, i.keyIndex >= 11 && (i.keyIndex = 0)) : "ArrowUp" === t && (e.preventDefault(), i.keyIndex--, i.keyIndex <= 0 && (i.keyIndex = 10)), i.keyIndex > 0 && (i.value = i.keyList[i.keyIndex - 1])
            }
            const u = re((() => n.value.search.history && !i.value));
            let c = x(kn.get("searchHistory") || []);
            co.get("searchHistory").then((e => {
                c.value = e || c.value
            }));
            const f = re((() => i.value ? i.keyList || [] : n.value.search.history ? c.value : []));
            const d = re((() => {
                let e = f.value.length;
                return i.value && e++, 30 * e + "px"
            }));

            function h() {
                i.value ? (i.showKeyWord = !0, i.keyIndex = -1, zn.baiduSugrec(i.value).then((e => {
                    let t = e.data;
                    i.keyList = (t.g || []).map((e => e.q))
                }))) : i.keyList = []
            }

            function g(e, t, r) {
                if (r && 229 == r.keyCode || !e) return;
                var a;
                (a = e) && (c.value.unshift(a), c.value = [...new Set(c.value)], c.value = c.value.splice(0, 10), co.set("searchHistory", c._rawValue)), e = encodeURIComponent(e);
                let o = `${i.currSearch.href}${e} `;
                if (Xo({
                        t: "event",
                        ec: i.currSearch.key,
                        ea: "use",
                        el: "search"
                    }), ((e = {}) => {
                        Go.get("/stat/engine", {
                            params: e
                        })
                    })({
                        name: i.currSearch.key
                    }), 0 === i.keyIndex || "fanyi" == t) {
                    o = `${n.value.search.translate||"https://translate.google.cn/#en/zh-CN/"}${e} `
                }
                i.showKeyWord = !1;
                let s = n.value.open && n.value.open.searchBlank ? "_blank" : "_self";
                document.body.clientWidth < 600 && o.includes("www.baidu.com") && (o = o.replace("www", "m")), window.open(o, s), setTimeout((() => {
                    i.value = ""
                }), 500)
            }
            return (e, o) => {
                const p = et("el-icon");
                return Xe(), oe("div", Hl, [se("div", {
                    class: "app-serach-box",
                    onContextmenu: o[9] || (o[9] = Vt((() => {}), ["stop"]))
                }, [se("div", {
                    class: R(["se-input-box", {
                        active: L(i).value
                    }])
                }, [se("div", {
                    class: "se-select",
                    onClick: o[0] || (o[0] = Vt((e => L(i).isShowSelect = !L(i).isShowSelect), ["stop"]))
                }, [L(i).currSearch.key ? (Xe(), oe("img", {
                    key: 0,
                    style: {
                        width: "20px",
                        height: "20px"
                    },
                    class: "search-icon",
                    src: `https://files.codelife.cc/itab/search/${L(i).currSearch.key}.svg`
                }, null, 8, Zl)) : ie("", !0), ge(p, {
                    size: 12,
                    class: "select-icon-arrow"
                }, {
                    default: Dt((() => [ge(L(wa))])),
                    _: 1
                })]), bt(se("input", {
                    autofocus: !0,
                    "onUpdate:modelValue": o[1] || (o[1] = e => L(i).value = e),
                    class: "se-input",
                    onInput: h,
                    ref_key: "refInput",
                    ref: a,
                    maxlength: "63",
                    onClick: o[2] || (o[2] = e => L(i).showKeyWord = !0),
                    onKeydown: [Xt(Vt(s, ["prevent"]), ["tab"]), o[3] || (o[3] = Xt(Vt((e => g(L(i).value, null, e)), ["prevent"]), ["enter"]))],
                    onKeyup: o[4] || (o[4] = e => l(e)),
                    placeholder: L(t)("setting_search"),
                    type: "text"
                }, null, 40, jl), [
                    [zt, L(i).value, void 0, {
                        trim: !0
                    }]
                ]), bt(se("div", {
                    class: "se-close",
                    onClick: o[5] || (o[5] = e => L(i).value = "")
                }, [ge(p, {
                    size: 20,
                    class: "select-icon"
                }, {
                    default: Dt((() => [ge(L(jn))])),
                    _: 1
                })], 512), [
                    [Ut, L(i).value]
                ]), se("div", {
                    class: "se-select",
                    onClick: o[6] || (o[6] = e => g(L(i).value))
                }, [ge(p, {
                    size: 20,
                    class: "select-icon"
                }, {
                    default: Dt((() => [ge(L(_o))])),
                    _: 1
                })])], 2), se("div", zl, [se("ul", {
                    tag: "ul",
                    name: "list-complete",
                    class: R(["se-all", {
                        action: L(i).isShowSelect
                    }])
                }, [(Xe(!0), oe(V, null, Qe(L(n).searchEngine, ((e, t) => (Xe(), oe("li", {
                    onClick: Vt((t => {
                        var r;
                        "add" != (r = e) && (i.currSearch = r, i.isShowSelect = !1, n.value.useSearch = r.key)
                    }), ["stop"]),
                    class: "se-item",
                    key: e.key,
                    title: e.title
                }, [0 !== t ? (Xe(), ae(p, {
                    key: 0,
                    title: "删除",
                    onClick: Vt((e => function(e) {
                        n.value.searchEngine.splice(e, 1)
                    }(t)), ["stop"]),
                    class: "se-item-del",
                    size: 12
                }, {
                    default: Dt((() => [ge(L(jn))])),
                    _: 2
                }, 1032, ["onClick"])) : ie("", !0), se("span", {
                    class: R(["se-item-icon", {
                        action: e.key == L(i).currSearch.key
                    }])
                }, [se("img", {
                    class: "search-icon",
                    src: `https://files.codelife.cc/itab/search/${e.key}.svg`
                }, null, 8, Xl)], 2), se("p", Vl, j(e.title), 1)], 8, Ul)))), 128)), se("li", {
                    key: "add",
                    onClick: o[7] || (o[7] = Vt((e => L(i).searchVisible = !0), ["stop"])),
                    class: "se-item",
                    title: "添加"
                }, [se("span", Wl, [ge(p, {
                    size: 18
                }, {
                    default: Dt((() => [ge(L(ei))])),
                    _: 1
                })]), $l])], 2), L(i).showKeyWord ? (Xe(), oe("ul", {
                    key: 0,
                    class: "se-keyword al",
                    style: Z([{
                        height: L(d)
                    }, {
                        backgroundColor: "#ffffff"
                    }])
                }, [se("li", {
                    onClick: o[8] || (o[8] = Vt((e => g(L(i).value || L(f)[0], "fanyi")), ["stop"])),
                    class: R(["se-keyword-item d-elip", {
                        focus: 0 === L(i).keyIndex
                    }]),
                    onKeyupHandle: l
                }, [ge(p, {
                    size: 18,
                    class: "se-keyword-icon"
                }, {
                    default: Dt((() => [ge(L(Mo))])),
                    _: 1
                }), he(" " + j(L(i).value || L(f)[0]), 1)], 34), (Xe(!0), oe(V, null, Qe(L(f), ((e, t) => (Xe(), oe("li", {
                    onClick: Vt((t => g(e)), ["stop"]),
                    class: R(["se-keyword-item d-elip d-flex-y", {
                        focus: L(i).keyIndex == t + 1
                    }]),
                    key: e,
                    "data-index": t + 1
                }, [ge(p, {
                    class: "se-keyword-icon",
                    size: 18
                }, {
                    default: Dt((() => [bt(ge(L(wo), null, null, 512), [
                        [Ut, !L(i).value]
                    ]), bt(ge(L(_o), null, null, 512), [
                        [Ut, L(i).value]
                    ])])),
                    _: 1
                }), se("span", Kl, j(e), 1), L(u) ? (Xe(), ae(p, {
                    key: 0,
                    onClick: Vt((e => function(e) {
                        c.value.splice(e, 1), c.value = c.value, co.set("searchHistory", c._rawValue)
                    }(t)), ["stop"]),
                    class: "se-history-del",
                    size: 16
                }, {
                    default: Dt((() => [ge(L(jn))])),
                    _: 2
                }, 1032, ["onClick"])) : ie("", !0)], 10, Jl)))), 128))], 4)) : ie("", !0)])], 32), L(i).searchVisible ? (Xe(), ae(L(r), {
                    key: 0,
                    modelValue: L(i).searchVisible,
                    "onUpdate:modelValue": o[10] || (o[10] = e => L(i).searchVisible = e)
                }, null, 8, ["modelValue"])) : ie("", !0)])
            }
        }
    });
var eu = Ln(ql, [
    ["__scopeId", "data-v-caa580be"]
]);
var tu = Ln({
    setup(e) {
        const t = On();
        return (e, n) => bt((Xe(), ae(eu, null, null, 512)), [
            [Ut, null == L(t).search.show || L(t).search.show]
        ])
    }
}, [
    ["__scopeId", "data-v-3f0f2d63"]
]);
const nu = (e = {}) => Go.get("/api/getLocation", {
    params: e
});
const ru = {
        class: "app-yiyan d-flex-x"
    },
    au = {
        class: "app-yiyan-body"
    },
    iu = ["onContextmenu"],
    ou = {
        class: "yiyan-from f12 ac"
    };
var su = Ln({
    setup(e) {
        let t = x({
            hitokoto: "树梢间泻下的秋日阳光，在她肩部一闪一闪地跳跃着。",
            from: "王某人"
        });

        function n() {
            Go.get("https://v1.hitokoto.cn/?c=d&c=i&encode=json").then((e => {
                t.value = e || {}
            }))
        }
        n();
        const r = () => {
                Un(`${t.value.hitokoto} --${t.value.from}`), Pn.success("已复制到剪切板")
            },
            a = () => {
                n()
            };
        return (e, n) => (Xe(), oe("div", ru, [se("div", au, [se("div", {
            class: "yiyan-text f12",
            onClick: r,
            onContextmenu: Vt(a, ["prevent", "stop"]),
            title: "点击左键复制，右键切换"
        }, "「 " + j(L(t).hitokoto) + " 」", 41, iu), se("div", ou, "--" + j(L(t).from) + "-" + j(L(t).from_who), 1)])]))
    }
}, [
    ["__scopeId", "data-v-36939211"]
]);
const lu = ["id"],
    uu = ["onClick"],
    cu = {
        key: 0,
        class: "d-sub ml10"
    },
    fu = {
        components: {
            Search: vi,
            Setting: yi
        }
    };
var du = Ln(Object.assign(fu, {
    props: {
        data: {
            type: Array,
            default: () => []
        },
        active: String,
        uid: {
            required: !0,
            type: String
        }
    },
    emits: ["click"],
    setup(e, {
        expose: t,
        emit: n
    }) {
        const r = e,
            a = B({
                visible: !1,
                mouseX: 0,
                mouseY: 0,
                winWidth: 0,
                winHeight: 0
            }),
            {
                width: i,
                height: o
            } = Xn();

        function s(e) {
            a.visible && (a.visible = !1)
        }
        Ct((() => a.visible), (e => {
            e && No(document, "click", s)
        }));
        const l = re((() => ({
            left: a.mouseX + "px",
            top: a.mouseY + "px"
        })));
        return t({
            open: async e => {
                const t = document.getElementById(`menu${r.uid}`);
                document.querySelectorAll(".d-contextmenu.v-contextmenu").forEach((e => {
                    e.id !== `menu${r.uid}` ? e.style.display = "none" : e.style.display = "block"
                })), a.visible = !0;
                let n = e.clientX,
                    s = e.clientY;
                n = n >= i.value - t.offsetWidth ? i.value - t.offsetWidth : n, s = s > o.value - t.offsetHeight ? o.value - t.offsetHeight : s, a.mouseX = n, a.mouseY = s
            }
        }), ze((() => {
            Po(document, "click", s), Po(document, "contextmenu", s)
        })), (t, r) => {
            const i = et("el-icon");
            return Xe(), ae(K, {
                to: "body"
            }, [ge(xt, {
                name: "menu-scale"
            }, {
                default: Dt((() => [bt(se("ul", {
                    style: Z(L(l)),
                    class: "d-contextmenu v-contextmenu",
                    id: `menu${e.uid}`
                }, [(Xe(!0), oe(V, null, Qe(e.data, (t => (Xe(), oe("li", {
                    onClick: e => function(e) {
                        n("click", e)
                    }(t),
                    class: R(["d-contextmenu-item", {
                        bb: t.group
                    }]),
                    key: t.type
                }, [ge(i, {
                    class: "item-icon"
                }, {
                    default: Dt((() => [(Xe(), ae(nt(e.active == t.key ? "check" : t.icon)))])),
                    _: 2
                }, 1024), he(" " + j(t.name) + " ", 1), "search" === t.key ? (Xe(), oe("span", cu, "⌘+F")) : ie("", !0)], 10, uu)))), 128))], 12, lu), [
                    [Ut, L(a).visible]
                ])])),
                _: 1
            })])
        }
    }
}), [
    ["__scopeId", "data-v-5524a65e"]
]);
/*!
 * pinia v2.0.13
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
let hu;
const gu = e => hu = e,
    pu = Symbol();

function mu(e) {
    return e && "object" == typeof e && "[object Object]" === Object.prototype.toString.call(e) && "function" != typeof e.toJSON
}
var vu, Cu;
(Cu = vu || (vu = {})).direct = "direct", Cu.patchObject = "patch object", Cu.patchFunction = "patch function";
const Eu = () => {};

function Fu(e, t, n, r = Eu) {
    e.push(t);
    const a = () => {
        const n = e.indexOf(t);
        n > -1 && (e.splice(n, 1), r())
    };
    return !n && ye() && ze(a), a
}

function yu(e, ...t) {
    e.slice().forEach((e => {
        e(...t)
    }))
}

function Au(e, t) {
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const r = t[n],
            a = e[n];
        mu(a) && mu(r) && e.hasOwnProperty(n) && !y(r) && !E(r) ? e[n] = Au(a, r) : e[n] = r
    }
    return e
}
const Du = Symbol();
const {
    assign: _u
} = Object;

function bu(e, t, n = {}, r, a) {
    let i;
    const o = n.state,
        s = _u({
            actions: {}
        }, n),
        l = {
            deep: !0
        };
    let u, c, f, d = D([]),
        h = D([]);
    const g = r.state.value[e];

    function p(t) {
        let n;
        u = c = !1, "function" == typeof t ? (t(r.state.value[e]), n = {
            type: vu.patchFunction,
            storeId: e,
            events: f
        }) : (Au(r.state.value[e], t), n = {
            type: vu.patchObject,
            payload: t,
            storeId: e,
            events: f
        }), ke().then((() => {
            u = !0
        })), c = !0, yu(d, n, r.state.value[e])
    }
    o || g || (r.state.value[e] = {}), x({});
    const v = Eu;

    function C(t, n) {
        return function() {
            gu(r);
            const a = Array.from(arguments),
                i = [],
                o = [];

            function s(e) {
                i.push(e)
            }

            function l(e) {
                o.push(e)
            }
            let u;
            yu(h, {
                args: a,
                name: t,
                store: A,
                after: s,
                onError: l
            });
            try {
                u = n.apply(this && this.$id === e ? this : A, a)
            } catch (c) {
                throw yu(o, c), c
            }
            return u instanceof Promise ? u.then((e => (yu(i, e), e))).catch((e => (yu(o, e), Promise.reject(e)))) : (yu(i, u), u)
        }
    }
    const F = {
            _p: r,
            $id: e,
            $onAction: Fu.bind(null, h),
            $patch: p,
            $reset: v,
            $subscribe(t, n = {}) {
                const a = Fu(d, t, n.detached, (() => o())),
                    o = i.run((() => Ct((() => r.state.value[e]), (r => {
                        ("sync" === n.flush ? c : u) && t({
                            storeId: e,
                            type: vu.direct,
                            events: f
                        }, r)
                    }), _u({}, l, n))));
                return a
            },
            $dispose: function() {
                i.stop(), d = [], h = [], r._s.delete(e)
            }
        },
        A = B(_u({}, F));
    r._s.set(e, A);
    const _ = r._e.run((() => (i = m(), i.run((() => t())))));
    for (const m in _) {
        const t = _[m];
        if (y(t) && (!y(I = t) || !I.effect) || E(t)) o || (!g || mu(b = t) && b.hasOwnProperty(Du) || (y(t) ? t.value = g[m] : Au(t, g[m])), r.state.value[e][m] = t);
        else if ("function" == typeof t) {
            const e = C(m, t);
            _[m] = e, s.actions[m] = t
        }
    }
    var b, I;
    return _u(A, _), _u(k(A), _), Object.defineProperty(A, "$state", {
        get: () => r.state.value[e],
        set: e => {
            p((t => {
                _u(t, e)
            }))
        }
    }), r._p.forEach((e => {
        _u(A, i.run((() => e({
            store: A,
            app: r._a,
            pinia: r,
            options: s
        }))))
    })), g && o && n.hydrate && n.hydrate(A.$state, g), u = !0, c = !0, A
}
const Bu = On(),
    Iu = Vn();
Bu.value.time || (Bu.value.time = Wn.time), Bu.value.open || (Bu.value.open = {
    searchBlank: Bu.value.search.blank,
    iconBlank: Bu.value.search.blank
}), Bu.value.topSearch || (Bu.value.topSearch = Wn.topSearch);
let xu = Bu.value.sidebar.lastGroup ? kn.get("menuActiveId") : Iu.value[0] && Iu.value[0].id;
const wu = function(e, t, n) {
    let r, a;
    const i = "function" == typeof t;

    function o(e, n) {
        const o = ye();
        (e = e || o && Ie(pu)) && gu(e), (e = hu)._s.has(r) || (i ? bu(r, t, a, e) : function(e, t, n, r) {
            const {
                state: a,
                actions: i,
                getters: o
            } = t, s = n.state.value[e];
            let l;
            l = bu(e, (function() {
                s || (n.state.value[e] = a ? a() : {});
                const t = N(n.state.value[e]);
                return _u(t, i, Object.keys(o || {}).reduce(((t, r) => (t[r] = D(re((() => {
                    gu(n);
                    const t = n._s.get(e);
                    return o[r].call(t, t)
                }))), t)), {}))
            }), t, n), l.$reset = function() {
                const e = a ? a() : {};
                this.$patch((t => {
                    _u(t, e)
                }))
            }
        }(r, a, e));
        return e._s.get(r)
    }
    return "string" == typeof e ? (r = e, a = i ? n : t) : (a = e, r = e.id), o.$id = r, o
}({
    id: "app-global",
    state: () => ({
        menuActiveId: xu,
        settingHandle: {
            visible: !1,
            active: 2
        },
        dialogApp: {
            visible: !1,
            component: "",
            data: {}
        },
        dialogIcon: {
            visible: !1,
            data: null
        },
        date: {
            date: ""
        },
        loginInfo: {
            visible: !1,
            type: "login"
        }
    }),
    getters: {},
    actions: {
        setSettingHandle(e) {
            this.settingHandle.visible = !0, this.settingHandle.active = e
        },
        setWallpaperBlob(e) {
            this.wallpaperBlob = e
        },
        setDialogApp(e, t) {
            this.dialogApp.visible = !0, this.dialogApp.component = e, this.dialogApp.data = t || null
        },
        setDialogIcon(e) {
            this.dialogIcon.visible = !0, this.dialogIcon.data = e
        },
        setLanguage(e) {
            this.language = e, kn.set("language", e)
        },
        setMenuActive(e) {
            kn.set("menuActiveId", e), this.menuActiveId = e
        },
        setDate(e) {
            this.date = e
        },
        setLoginInfo(e) {
            this.loginInfo.visible = !0, this.loginInfo.type = e
        }
    }
});
var Su = {
    exports: {}
};
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function Ou(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Tu(Object(n), !0).forEach((function(t) {
            Mu(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tu(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function ku(e) {
    return (ku = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function Mu(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Nu() {
    return Nu = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Nu.apply(this, arguments)
}

function Pu(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
            i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
}

function Lu(e) {
    return function(e) {
        if (Array.isArray(e)) return Yu(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || function(e, t) {
        if (!e) return;
        if ("string" == typeof e) return Yu(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Yu(e, t)
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Yu(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function Gu(e) {
    if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(e)
}
var Ru = Gu(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    Hu = Gu(/Edge/i),
    Zu = Gu(/firefox/i),
    ju = Gu(/safari/i) && !Gu(/chrome/i) && !Gu(/android/i),
    zu = Gu(/iP(ad|od|hone)/i),
    Uu = Gu(/chrome/i) && Gu(/android/i),
    Xu = {
        capture: !1,
        passive: !1
    };

function Vu(e, t, n) {
    e.addEventListener(t, n, !Ru && Xu)
}

function Wu(e, t, n) {
    e.removeEventListener(t, n, !Ru && Xu)
}

function $u(e, t) {
    if (t) {
        if (">" === t[0] && (t = t.substring(1)), e) try {
            if (e.matches) return e.matches(t);
            if (e.msMatchesSelector) return e.msMatchesSelector(t);
            if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
        } catch (n) {
            return !1
        }
        return !1
    }
}

function Ju(e) {
    return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
}

function Ku(e, t, n, r) {
    if (e) {
        n = n || document;
        do {
            if (null != t && (">" === t[0] ? e.parentNode === n && $u(e, t) : $u(e, t)) || r && e === n) return e;
            if (e === n) break
        } while (e = Ju(e))
    }
    return null
}
var Qu, qu = /\s+/g;

function ec(e, t, n) {
    if (e && t)
        if (e.classList) e.classList[n ? "add" : "remove"](t);
        else {
            var r = (" " + e.className + " ").replace(qu, " ").replace(" " + t + " ", " ");
            e.className = (r + (n ? " " + t : "")).replace(qu, " ")
        }
}

function tc(e, t, n) {
    var r = e && e.style;
    if (r) {
        if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
        t in r || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t), r[t] = n + ("string" == typeof n ? "" : "px")
    }
}

function nc(e, t) {
    var n = "";
    if ("string" == typeof e) n = e;
    else
        do {
            var r = tc(e, "transform");
            r && "none" !== r && (n = r + " " + n)
        } while (!t && (e = e.parentNode));
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function rc(e, t, n) {
    if (e) {
        var r = e.getElementsByTagName(t),
            a = 0,
            i = r.length;
        if (n)
            for (; a < i; a++) n(r[a], a);
        return r
    }
    return []
}

function ac() {
    var e = document.scrollingElement;
    return e || document.documentElement
}

function ic(e, t, n, r, a) {
    if (e.getBoundingClientRect || e === window) {
        var i, o, s, l, u, c, f;
        if (e !== window && e.parentNode && e !== ac() ? (o = (i = e.getBoundingClientRect()).top, s = i.left, l = i.bottom, u = i.right, c = i.height, f = i.width) : (o = 0, s = 0, l = window.innerHeight, u = window.innerWidth, c = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (a = a || e.parentNode, !Ru))
            do {
                if (a && a.getBoundingClientRect && ("none" !== tc(a, "transform") || n && "static" !== tc(a, "position"))) {
                    var d = a.getBoundingClientRect();
                    o -= d.top + parseInt(tc(a, "border-top-width")), s -= d.left + parseInt(tc(a, "border-left-width")), l = o + i.height, u = s + i.width;
                    break
                }
            } while (a = a.parentNode);
        if (r && e !== window) {
            var h = nc(a || e),
                g = h && h.a,
                p = h && h.d;
            h && (l = (o /= p) + (c /= p), u = (s /= g) + (f /= g))
        }
        return {
            top: o,
            left: s,
            bottom: l,
            right: u,
            width: f,
            height: c
        }
    }
}

function oc(e, t, n) {
    for (var r = fc(e, !0), a = ic(e)[t]; r;) {
        var i = ic(r)[n];
        if (!("top" === n || "left" === n ? a >= i : a <= i)) return r;
        if (r === ac()) break;
        r = fc(r, !1)
    }
    return !1
}

function sc(e, t, n, r) {
    for (var a = 0, i = 0, o = e.children; i < o.length;) {
        if ("none" !== o[i].style.display && o[i] !== Cf.ghost && (r || o[i] !== Cf.dragged) && Ku(o[i], n.draggable, e, !1)) {
            if (a === t) return o[i];
            a++
        }
        i++
    }
    return null
}

function lc(e, t) {
    for (var n = e.lastElementChild; n && (n === Cf.ghost || "none" === tc(n, "display") || t && !$u(n, t));) n = n.previousElementSibling;
    return n || null
}

function uc(e, t) {
    var n = 0;
    if (!e || !e.parentNode) return -1;
    for (; e = e.previousElementSibling;) "TEMPLATE" === e.nodeName.toUpperCase() || e === Cf.clone || t && !$u(e, t) || n++;
    return n
}

function cc(e) {
    var t = 0,
        n = 0,
        r = ac();
    if (e)
        do {
            var a = nc(e),
                i = a.a,
                o = a.d;
            t += e.scrollLeft * i, n += e.scrollTop * o
        } while (e !== r && (e = e.parentNode));
    return [t, n]
}

function fc(e, t) {
    if (!e || !e.getBoundingClientRect) return ac();
    var n = e,
        r = !1;
    do {
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = tc(n);
            if (n.clientWidth < n.scrollWidth && ("auto" == a.overflowX || "scroll" == a.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == a.overflowY || "scroll" == a.overflowY)) {
                if (!n.getBoundingClientRect || n === document.body) return ac();
                if (r || t) return n;
                r = !0
            }
        }
    } while (n = n.parentNode);
    return ac()
}

function dc(e, t) {
    return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width)
}

function hc(e, t) {
    return function() {
        if (!Qu) {
            var n = arguments,
                r = this;
            1 === n.length ? e.call(r, n[0]) : e.apply(r, n), Qu = setTimeout((function() {
                Qu = void 0
            }), t)
        }
    }
}

function gc(e, t, n) {
    e.scrollLeft += t, e.scrollTop += n
}

function pc(e) {
    var t = window.Polymer,
        n = window.jQuery || window.Zepto;
    return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
}

function mc(e, t) {
    tc(e, "position", "absolute"), tc(e, "top", t.top), tc(e, "left", t.left), tc(e, "width", t.width), tc(e, "height", t.height)
}

function vc(e) {
    tc(e, "position", ""), tc(e, "top", ""), tc(e, "left", ""), tc(e, "width", ""), tc(e, "height", "")
}
var Cc = "Sortable" + (new Date).getTime();

function Ec() {
    var e, t = [];
    return {
        captureAnimationState: function() {
            (t = [], this.options.animation) && [].slice.call(this.el.children).forEach((function(e) {
                if ("none" !== tc(e, "display") && e !== Cf.ghost) {
                    t.push({
                        target: e,
                        rect: ic(e)
                    });
                    var n = Ou({}, t[t.length - 1].rect);
                    if (e.thisAnimationDuration) {
                        var r = nc(e, !0);
                        r && (n.top -= r.f, n.left -= r.e)
                    }
                    e.fromRect = n
                }
            }))
        },
        addAnimationState: function(e) {
            t.push(e)
        },
        removeAnimationState: function(e) {
            t.splice(function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n))
                        for (var r in t)
                            if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
                return -1
            }(t, {
                target: e
            }), 1)
        },
        animateAll: function(n) {
            var r = this;
            if (!this.options.animation) return clearTimeout(e), void("function" == typeof n && n());
            var a = !1,
                i = 0;
            t.forEach((function(e) {
                var t = 0,
                    n = e.target,
                    o = n.fromRect,
                    s = ic(n),
                    l = n.prevFromRect,
                    u = n.prevToRect,
                    c = e.rect,
                    f = nc(n, !0);
                f && (s.top -= f.f, s.left -= f.e), n.toRect = s, n.thisAnimationDuration && dc(l, s) && !dc(o, s) && (c.top - s.top) / (c.left - s.left) == (o.top - s.top) / (o.left - s.left) && (t = function(e, t, n, r) {
                    return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation
                }(c, l, u, r.options)), dc(s, o) || (n.prevFromRect = o, n.prevToRect = s, t || (t = r.options.animation), r.animate(n, c, s, t)), t && (a = !0, i = Math.max(i, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout((function() {
                    n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                }), t), n.thisAnimationDuration = t)
            })), clearTimeout(e), a ? e = setTimeout((function() {
                "function" == typeof n && n()
            }), i) : "function" == typeof n && n(), t = []
        },
        animate: function(e, t, n, r) {
            if (r) {
                tc(e, "transition", ""), tc(e, "transform", "");
                var a = nc(this.el),
                    i = a && a.a,
                    o = a && a.d,
                    s = (t.left - n.left) / (i || 1),
                    l = (t.top - n.top) / (o || 1);
                e.animatingX = !!s, e.animatingY = !!l, tc(e, "transform", "translate3d(" + s + "px," + l + "px,0)"), this.forRepaintDummy = function(e) {
                    return e.offsetWidth
                }(e), tc(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), tc(e, "transform", "translate3d(0,0,0)"), "number" == typeof e.animated && clearTimeout(e.animated), e.animated = setTimeout((function() {
                    tc(e, "transition", ""), tc(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1
                }), r)
            }
        }
    }
}
var Fc = [],
    yc = {
        initializeByDefault: !0
    },
    Ac = {
        mount: function(e) {
            for (var t in yc) yc.hasOwnProperty(t) && !(t in e) && (e[t] = yc[t]);
            Fc.forEach((function(t) {
                if (t.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            })), Fc.push(e)
        },
        pluginEvent: function(e, t, n) {
            var r = this;
            this.eventCanceled = !1, n.cancel = function() {
                r.eventCanceled = !0
            };
            var a = e + "Global";
            Fc.forEach((function(r) {
                t[r.pluginName] && (t[r.pluginName][a] && t[r.pluginName][a](Ou({
                    sortable: t
                }, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](Ou({
                    sortable: t
                }, n)))
            }))
        },
        initializePlugins: function(e, t, n, r) {
            for (var a in Fc.forEach((function(r) {
                    var a = r.pluginName;
                    if (e.options[a] || r.initializeByDefault) {
                        var i = new r(e, t, e.options);
                        i.sortable = e, i.options = e.options, e[a] = i, Nu(n, i.defaults)
                    }
                })), e.options)
                if (e.options.hasOwnProperty(a)) {
                    var i = this.modifyOption(e, a, e.options[a]);
                    void 0 !== i && (e.options[a] = i)
                }
        },
        getEventProperties: function(e, t) {
            var n = {};
            return Fc.forEach((function(r) {
                "function" == typeof r.eventProperties && Nu(n, r.eventProperties.call(t[r.pluginName], e))
            })), n
        },
        modifyOption: function(e, t, n) {
            var r;
            return Fc.forEach((function(a) {
                e[a.pluginName] && a.optionListeners && "function" == typeof a.optionListeners[t] && (r = a.optionListeners[t].call(e[a.pluginName], n))
            })), r
        }
    };

function Dc(e) {
    var t = e.sortable,
        n = e.rootEl,
        r = e.name,
        a = e.targetEl,
        i = e.cloneEl,
        o = e.toEl,
        s = e.fromEl,
        l = e.oldIndex,
        u = e.newIndex,
        c = e.oldDraggableIndex,
        f = e.newDraggableIndex,
        d = e.originalEvent,
        h = e.putSortable,
        g = e.extraEventProperties;
    if (t = t || n && n[Cc]) {
        var p, m = t.options,
            v = "on" + r.charAt(0).toUpperCase() + r.substr(1);
        !window.CustomEvent || Ru || Hu ? (p = document.createEvent("Event")).initEvent(r, !0, !0) : p = new CustomEvent(r, {
            bubbles: !0,
            cancelable: !0
        }), p.to = o || n, p.from = s || n, p.item = a || n, p.clone = i, p.oldIndex = l, p.newIndex = u, p.oldDraggableIndex = c, p.newDraggableIndex = f, p.originalEvent = d, p.pullMode = h ? h.lastPutMode : void 0;
        var C = Ou(Ou({}, g), Ac.getEventProperties(r, t));
        for (var E in C) p[E] = C[E];
        n && n.dispatchEvent(p), m[v] && m[v].call(t, p)
    }
}
var _c = ["evt"],
    bc = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = n.evt,
            a = Pu(n, _c);
        Ac.pluginEvent.bind(Cf)(e, t, Ou({
            dragEl: Ic,
            parentEl: xc,
            ghostEl: wc,
            rootEl: Sc,
            nextEl: Tc,
            lastDownEl: Oc,
            cloneEl: kc,
            cloneHidden: Mc,
            dragStarted: Vc,
            putSortable: Rc,
            activeSortable: Cf.active,
            originalEvent: r,
            oldIndex: Nc,
            oldDraggableIndex: Lc,
            newIndex: Pc,
            newDraggableIndex: Yc,
            hideGhostForTarget: gf,
            unhideGhostForTarget: pf,
            cloneNowHidden: function() {
                Mc = !0
            },
            cloneNowShown: function() {
                Mc = !1
            },
            dispatchSortableEvent: function(e) {
                Bc({
                    sortable: t,
                    name: e,
                    originalEvent: r
                })
            }
        }, a))
    };

function Bc(e) {
    Dc(Ou({
        putSortable: Rc,
        cloneEl: kc,
        targetEl: Ic,
        rootEl: Sc,
        oldIndex: Nc,
        oldDraggableIndex: Lc,
        newIndex: Pc,
        newDraggableIndex: Yc
    }, e))
}
var Ic, xc, wc, Sc, Tc, Oc, kc, Mc, Nc, Pc, Lc, Yc, Gc, Rc, Hc, Zc, jc, zc, Uc, Xc, Vc, Wc, $c, Jc, Kc, Qc = !1,
    qc = !1,
    ef = [],
    tf = !1,
    nf = !1,
    rf = [],
    af = !1,
    of = [],
    sf = "undefined" != typeof document,
    lf = zu,
    uf = Hu || Ru ? "cssFloat" : "float",
    cf = sf && !Uu && !zu && "draggable" in document.createElement("div"),
    ff = function() {
        if (sf) {
            if (Ru) return !1;
            var e = document.createElement("x");
            return e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents
        }
    }(),
    df = function(e, t) {
        var n = tc(e),
            r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
            a = sc(e, 0, t),
            i = sc(e, 1, t),
            o = a && tc(a),
            s = i && tc(i),
            l = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + ic(a).width,
            u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + ic(i).width;
        if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (a && o.float && "none" !== o.float) {
            var c = "left" === o.float ? "left" : "right";
            return !i || "both" !== s.clear && s.clear !== c ? "horizontal" : "vertical"
        }
        return a && ("block" === o.display || "flex" === o.display || "table" === o.display || "grid" === o.display || l >= r && "none" === n[uf] || i && "none" === n[uf] && l + u > r) ? "vertical" : "horizontal"
    },
    hf = function(e) {
        function t(e, n) {
            return function(r, a, i, o) {
                var s = r.options.group.name && a.options.group.name && r.options.group.name === a.options.group.name;
                if (null == e && (n || s)) return !0;
                if (null == e || !1 === e) return !1;
                if (n && "clone" === e) return e;
                if ("function" == typeof e) return t(e(r, a, i, o), n)(r, a, i, o);
                var l = (n ? r : a).options.group.name;
                return !0 === e || "string" == typeof e && e === l || e.join && e.indexOf(l) > -1
            }
        }
        var n = {},
            r = e.group;
        r && "object" == ku(r) || (r = {
            name: r
        }), n.name = r.name, n.checkPull = t(r.pull, !0), n.checkPut = t(r.put), n.revertClone = r.revertClone, e.group = n
    },
    gf = function() {
        !ff && wc && tc(wc, "display", "none")
    },
    pf = function() {
        !ff && wc && tc(wc, "display", "")
    };
sf && document.addEventListener("click", (function(e) {
    if (qc) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), qc = !1, !1
}), !0);
var mf = function(e) {
        if (Ic) {
            e = e.touches ? e.touches[0] : e;
            var t = (a = e.clientX, i = e.clientY, ef.some((function(e) {
                var t = e[Cc].options.emptyInsertThreshold;
                if (t && !lc(e)) {
                    var n = ic(e),
                        r = a >= n.left - t && a <= n.right + t,
                        s = i >= n.top - t && i <= n.bottom + t;
                    return r && s ? o = e : void 0
                }
            })), o);
            if (t) {
                var n = {};
                for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[Cc]._onDragOver(n)
            }
        }
        var a, i, o
    },
    vf = function(e) {
        Ic && Ic.parentNode[Cc]._isOutsideThisEl(e.target)
    };

function Cf(e, t) {
    if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
    this.el = e, this.options = t = Nu({}, t), e[Cc] = this;
    var n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return df(e, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(e, t) {
            e.setData("Text", t.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: !1 !== Cf.supportPointer && "PointerEvent" in window && !ju,
        emptyInsertThreshold: 5
    };
    for (var r in Ac.initializePlugins(this, e, n), n) !(r in t) && (t[r] = n[r]);
    for (var a in hf(t), this) "_" === a.charAt(0) && "function" == typeof this[a] && (this[a] = this[a].bind(this));
    this.nativeDraggable = !t.forceFallback && cf, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Vu(e, "pointerdown", this._onTapStart) : (Vu(e, "mousedown", this._onTapStart), Vu(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Vu(e, "dragover", this), Vu(e, "dragenter", this)), ef.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Nu(this, Ec())
}

function Ef(e, t, n, r, a, i, o, s) {
    var l, u, c = e[Cc],
        f = c.options.onMove;
    return !window.CustomEvent || Ru || Hu ? (l = document.createEvent("Event")).initEvent("move", !0, !0) : l = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }), l.to = t, l.from = e, l.dragged = n, l.draggedRect = r, l.related = a || t, l.relatedRect = i || ic(t), l.willInsertAfter = s, l.originalEvent = o, e.dispatchEvent(l), f && (u = f.call(c, l, o)), u
}

function Ff(e) {
    e.draggable = !1
}

function yf() {
    af = !1
}

function Af(e) {
    for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
    return r.toString(36)
}

function Df(e) {
    return setTimeout(e, 0)
}

function _f(e) {
    return clearTimeout(e)
}
Cf.prototype = {
    constructor: Cf,
    _isOutsideThisEl: function(e) {
        this.el.contains(e) || e === this.el || (Wc = null)
    },
    _getDirection: function(e, t) {
        return "function" == typeof this.options.direction ? this.options.direction.call(this, e, t, Ic) : this.options.direction
    },
    _onTapStart: function(e) {
        if (e.cancelable) {
            var t = this,
                n = this.el,
                r = this.options,
                a = r.preventOnFilter,
                i = e.type,
                o = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e,
                s = (o || e).target,
                l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s,
                u = r.filter;
            if (function(e) {
                    of .length = 0;
                    var t = e.getElementsByTagName("input"),
                        n = t.length;
                    for (; n--;) {
                        var r = t[n];
                        r.checked && of .push(r)
                    }
                }(n), !Ic && !(/mousedown|pointerdown/.test(i) && 0 !== e.button || r.disabled) && !l.isContentEditable && (this.nativeDraggable || !ju || !s || "SELECT" !== s.tagName.toUpperCase()) && !((s = Ku(s, r.draggable, n, !1)) && s.animated || Oc === s)) {
                if (Nc = uc(s), Lc = uc(s, r.draggable), "function" == typeof u) {
                    if (u.call(this, e, s, this)) return Bc({
                        sortable: t,
                        rootEl: l,
                        name: "filter",
                        targetEl: s,
                        toEl: n,
                        fromEl: n
                    }), bc("filter", t, {
                        evt: e
                    }), void(a && e.cancelable && e.preventDefault())
                } else if (u && (u = u.split(",").some((function(r) {
                        if (r = Ku(l, r.trim(), n, !1)) return Bc({
                            sortable: t,
                            rootEl: r,
                            name: "filter",
                            targetEl: s,
                            fromEl: n,
                            toEl: n
                        }), bc("filter", t, {
                            evt: e
                        }), !0
                    })))) return void(a && e.cancelable && e.preventDefault());
                r.handle && !Ku(l, r.handle, n, !1) || this._prepareDragStart(e, o, s)
            }
        }
    },
    _prepareDragStart: function(e, t, n) {
        var r, a = this,
            i = a.el,
            o = a.options,
            s = i.ownerDocument;
        if (n && !Ic && n.parentNode === i) {
            var l = ic(n);
            if (Sc = i, xc = (Ic = n).parentNode, Tc = Ic.nextSibling, Oc = n, Gc = o.group, Cf.dragged = Ic, Hc = {
                    target: Ic,
                    clientX: (t || e).clientX,
                    clientY: (t || e).clientY
                }, Uc = Hc.clientX - l.left, Xc = Hc.clientY - l.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, Ic.style["will-change"] = "all", r = function() {
                    bc("delayEnded", a, {
                        evt: e
                    }), Cf.eventCanceled ? a._onDrop() : (a._disableDelayedDragEvents(), !Zu && a.nativeDraggable && (Ic.draggable = !0), a._triggerDragStart(e, t), Bc({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), ec(Ic, o.chosenClass, !0))
                }, o.ignore.split(",").forEach((function(e) {
                    rc(Ic, e.trim(), Ff)
                })), Vu(s, "dragover", mf), Vu(s, "mousemove", mf), Vu(s, "touchmove", mf), Vu(s, "mouseup", a._onDrop), Vu(s, "touchend", a._onDrop), Vu(s, "touchcancel", a._onDrop), Zu && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ic.draggable = !0), bc("delayStart", this, {
                    evt: e
                }), !o.delay || o.delayOnTouchOnly && !t || this.nativeDraggable && (Hu || Ru)) r();
            else {
                if (Cf.eventCanceled) return void this._onDrop();
                Vu(s, "mouseup", a._disableDelayedDrag), Vu(s, "touchend", a._disableDelayedDrag), Vu(s, "touchcancel", a._disableDelayedDrag), Vu(s, "mousemove", a._delayedDragTouchMoveHandler), Vu(s, "touchmove", a._delayedDragTouchMoveHandler), o.supportPointer && Vu(s, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(r, o.delay)
            }
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var t = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Ic && Ff(Ic), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        Wu(e, "mouseup", this._disableDelayedDrag), Wu(e, "touchend", this._disableDelayedDrag), Wu(e, "touchcancel", this._disableDelayedDrag), Wu(e, "mousemove", this._delayedDragTouchMoveHandler), Wu(e, "touchmove", this._delayedDragTouchMoveHandler), Wu(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, t) {
        t = t || "touch" == e.pointerType && e, !this.nativeDraggable || t ? this.options.supportPointer ? Vu(document, "pointermove", this._onTouchMove) : Vu(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (Vu(Ic, "dragend", this), Vu(Sc, "dragstart", this._onDragStart));
        try {
            document.selection ? Df((function() {
                document.selection.empty()
            })) : window.getSelection().removeAllRanges()
        } catch (n) {}
    },
    _dragStarted: function(e, t) {
        if (Qc = !1, Sc && Ic) {
            bc("dragStarted", this, {
                evt: t
            }), this.nativeDraggable && Vu(document, "dragover", vf);
            var n = this.options;
            !e && ec(Ic, n.dragClass, !1), ec(Ic, n.ghostClass, !0), Cf.active = this, e && this._appendGhost(), Bc({
                sortable: this,
                name: "start",
                originalEvent: t
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Zc) {
            this._lastX = Zc.clientX, this._lastY = Zc.clientY, gf();
            for (var e = document.elementFromPoint(Zc.clientX, Zc.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Zc.clientX, Zc.clientY)) !== t;) t = e;
            if (Ic.parentNode[Cc]._isOutsideThisEl(e), t)
                do {
                    if (t[Cc]) {
                        if (t[Cc]._onDragOver({
                                clientX: Zc.clientX,
                                clientY: Zc.clientY,
                                target: e,
                                rootEl: t
                            }) && !this.options.dragoverBubble) break
                    }
                    e = t
                } while (t = t.parentNode);
            pf()
        }
    },
    _onTouchMove: function(e) {
        if (Hc) {
            var t = this.options,
                n = t.fallbackTolerance,
                r = t.fallbackOffset,
                a = e.touches ? e.touches[0] : e,
                i = wc && nc(wc, !0),
                o = wc && i && i.a,
                s = wc && i && i.d,
                l = lf && Kc && cc(Kc),
                u = (a.clientX - Hc.clientX + r.x) / (o || 1) + (l ? l[0] - rf[0] : 0) / (o || 1),
                c = (a.clientY - Hc.clientY + r.y) / (s || 1) + (l ? l[1] - rf[1] : 0) / (s || 1);
            if (!Cf.active && !Qc) {
                if (n && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < n) return;
                this._onDragStart(e, !0)
            }
            if (wc) {
                i ? (i.e += u - (jc || 0), i.f += c - (zc || 0)) : i = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: u,
                    f: c
                };
                var f = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
                tc(wc, "webkitTransform", f), tc(wc, "mozTransform", f), tc(wc, "msTransform", f), tc(wc, "transform", f), jc = u, zc = c, Zc = a
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!wc) {
            var e = this.options.fallbackOnBody ? document.body : Sc,
                t = ic(Ic, !0, lf, !0, e),
                n = this.options;
            if (lf) {
                for (Kc = e;
                    "static" === tc(Kc, "position") && "none" === tc(Kc, "transform") && Kc !== document;) Kc = Kc.parentNode;
                Kc !== document.body && Kc !== document.documentElement ? (Kc === document && (Kc = ac()), t.top += Kc.scrollTop, t.left += Kc.scrollLeft) : Kc = ac(), rf = cc(Kc)
            }
            ec(wc = Ic.cloneNode(!0), n.ghostClass, !1), ec(wc, n.fallbackClass, !0), ec(wc, n.dragClass, !0), tc(wc, "transition", ""), tc(wc, "transform", ""), tc(wc, "box-sizing", "border-box"), tc(wc, "margin", 0), tc(wc, "top", t.top), tc(wc, "left", t.left), tc(wc, "width", t.width), tc(wc, "height", t.height), tc(wc, "opacity", "0.8"), tc(wc, "position", lf ? "absolute" : "fixed"), tc(wc, "zIndex", "100000"), tc(wc, "pointerEvents", "none"), Cf.ghost = wc, e.appendChild(wc), tc(wc, "transform-origin", Uc / parseInt(wc.style.width) * 100 + "% " + Xc / parseInt(wc.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, t) {
        var n = this,
            r = e.dataTransfer,
            a = n.options;
        bc("dragStart", this, {
            evt: e
        }), Cf.eventCanceled ? this._onDrop() : (bc("setupClone", this), Cf.eventCanceled || ((kc = pc(Ic)).draggable = !1, kc.style["will-change"] = "", this._hideClone(), ec(kc, this.options.chosenClass, !1), Cf.clone = kc), n.cloneId = Df((function() {
            bc("clone", n), Cf.eventCanceled || (n.options.removeCloneOnHide || Sc.insertBefore(kc, Ic), n._hideClone(), Bc({
                sortable: n,
                name: "clone"
            }))
        })), !t && ec(Ic, a.dragClass, !0), t ? (qc = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (Wu(document, "mouseup", n._onDrop), Wu(document, "touchend", n._onDrop), Wu(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", a.setData && a.setData.call(n, r, Ic)), Vu(document, "drop", n), tc(Ic, "transform", "translateZ(0)")), Qc = !0, n._dragStartId = Df(n._dragStarted.bind(n, t, e)), Vu(document, "selectstart", n), Vc = !0, ju && tc(document.body, "user-select", "none"))
    },
    _onDragOver: function(e) {
        var t, n, r, a, i = this.el,
            o = e.target,
            s = this.options,
            l = s.group,
            u = Cf.active,
            c = Gc === l,
            f = s.sort,
            d = Rc || u,
            h = this,
            g = !1;
        if (!af) {
            if (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(), o = Ku(o, s.draggable, i, !0), w("dragOver"), Cf.eventCanceled) return g;
            if (Ic.contains(e.target) || o.animated && o.animatingX && o.animatingY || h._ignoreWhileAnimating === o) return T(!1);
            if (qc = !1, u && !s.disabled && (c ? f || (r = xc !== Sc) : Rc === this || (this.lastPutMode = Gc.checkPull(this, u, Ic, e)) && l.checkPut(this, u, Ic, e))) {
                if (a = "vertical" === this._getDirection(e, o), t = ic(Ic), w("dragOverValid"), Cf.eventCanceled) return g;
                if (r) return xc = Sc, S(), this._hideClone(), w("revert"), Cf.eventCanceled || (Tc ? Sc.insertBefore(Ic, Tc) : Sc.appendChild(Ic)), T(!0);
                var p = lc(i, s.draggable);
                if (!p || function(e, t, n) {
                        var r = ic(lc(n.el, n.options.draggable)),
                            a = 10;
                        return t ? e.clientX > r.right + a || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left : e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + a
                    }(e, a, this) && !p.animated) {
                    if (p === Ic) return T(!1);
                    if (p && i === e.target && (o = p), o && (n = ic(o)), !1 !== Ef(Sc, i, Ic, t, o, n, e, !!o)) return S(), i.appendChild(Ic), xc = i, O(), T(!0)
                } else if (p && function(e, t, n) {
                        var r = ic(sc(n.el, 0, n.options, !0)),
                            a = 10;
                        return t ? e.clientX < r.left - a || e.clientY < r.top && e.clientX < r.right : e.clientY < r.top - a || e.clientY < r.bottom && e.clientX < r.left
                    }(e, a, this)) {
                    var m = sc(i, 0, s, !0);
                    if (m === Ic) return T(!1);
                    if (n = ic(o = m), !1 !== Ef(Sc, i, Ic, t, o, n, e, !1)) return S(), i.insertBefore(Ic, m), xc = i, O(), T(!0)
                } else if (o.parentNode === i) {
                    n = ic(o);
                    var v, C, E, F = Ic.parentNode !== i,
                        y = ! function(e, t, n) {
                            var r = n ? e.left : e.top,
                                a = n ? e.right : e.bottom,
                                i = n ? e.width : e.height,
                                o = n ? t.left : t.top,
                                s = n ? t.right : t.bottom,
                                l = n ? t.width : t.height;
                            return r === o || a === s || r + i / 2 === o + l / 2
                        }(Ic.animated && Ic.toRect || t, o.animated && o.toRect || n, a),
                        A = a ? "top" : "left",
                        D = oc(o, "top", "top") || oc(Ic, "top", "top"),
                        _ = D ? D.scrollTop : void 0;
                    if (Wc !== o && (C = n[A], tf = !1, nf = !y && s.invertSwap || F), v = function(e, t, n, r, a, i, o, s) {
                            var l = r ? e.clientY : e.clientX,
                                u = r ? n.height : n.width,
                                c = r ? n.top : n.left,
                                f = r ? n.bottom : n.right,
                                d = !1;
                            if (!o)
                                if (s && Jc < u * a) {
                                    if (!tf && (1 === $c ? l > c + u * i / 2 : l < f - u * i / 2) && (tf = !0), tf) d = !0;
                                    else if (1 === $c ? l < c + Jc : l > f - Jc) return -$c
                                } else if (l > c + u * (1 - a) / 2 && l < f - u * (1 - a) / 2) return function(e) {
                                return uc(Ic) < uc(e) ? 1 : -1
                            }(t);
                            if ((d = d || o) && (l < c + u * i / 2 || l > f - u * i / 2)) return l > c + u / 2 ? 1 : -1;
                            return 0
                        }(e, o, n, a, y ? 1 : s.swapThreshold, null == s.invertedSwapThreshold ? s.swapThreshold : s.invertedSwapThreshold, nf, Wc === o), 0 !== v) {
                        var b = uc(Ic);
                        do {
                            b -= v, E = xc.children[b]
                        } while (E && ("none" === tc(E, "display") || E === wc))
                    }
                    if (0 === v || E === o) return T(!1);
                    Wc = o, $c = v;
                    var B = o.nextElementSibling,
                        I = !1,
                        x = Ef(Sc, i, Ic, t, o, n, e, I = 1 === v);
                    if (!1 !== x) return 1 !== x && -1 !== x || (I = 1 === x), af = !0, setTimeout(yf, 30), S(), I && !B ? i.appendChild(Ic) : o.parentNode.insertBefore(Ic, I ? B : o), D && gc(D, 0, _ - D.scrollTop), xc = Ic.parentNode, void 0 === C || nf || (Jc = Math.abs(C - ic(o)[A])), O(), T(!0)
                }
                if (i.contains(Ic)) return T(!1)
            }
            return !1
        }

        function w(s, l) {
            bc(s, h, Ou({
                evt: e,
                isOwner: c,
                axis: a ? "vertical" : "horizontal",
                revert: r,
                dragRect: t,
                targetRect: n,
                canSort: f,
                fromSortable: d,
                target: o,
                completed: T,
                onMove: function(n, r) {
                    return Ef(Sc, i, Ic, t, n, ic(n), e, r)
                },
                changed: O
            }, l))
        }

        function S() {
            w("dragOverAnimationCapture"), h.captureAnimationState(), h !== d && d.captureAnimationState()
        }

        function T(t) {
            return w("dragOverCompleted", {
                insertion: t
            }), t && (c ? u._hideClone() : u._showClone(h), h !== d && (ec(Ic, Rc ? Rc.options.ghostClass : u.options.ghostClass, !1), ec(Ic, s.ghostClass, !0)), Rc !== h && h !== Cf.active ? Rc = h : h === Cf.active && Rc && (Rc = null), d === h && (h._ignoreWhileAnimating = o), h.animateAll((function() {
                w("dragOverAnimationComplete"), h._ignoreWhileAnimating = null
            })), h !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (o === Ic && !Ic.animated || o === i && !o.animated) && (Wc = null), s.dragoverBubble || e.rootEl || o === document || (Ic.parentNode[Cc]._isOutsideThisEl(e.target), !t && mf(e)), !s.dragoverBubble && e.stopPropagation && e.stopPropagation(), g = !0
        }

        function O() {
            Pc = uc(Ic), Yc = uc(Ic, s.draggable), Bc({
                sortable: h,
                name: "change",
                toEl: i,
                newIndex: Pc,
                newDraggableIndex: Yc,
                originalEvent: e
            })
        }
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        Wu(document, "mousemove", this._onTouchMove), Wu(document, "touchmove", this._onTouchMove), Wu(document, "pointermove", this._onTouchMove), Wu(document, "dragover", mf), Wu(document, "mousemove", mf), Wu(document, "touchmove", mf)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        Wu(e, "mouseup", this._onDrop), Wu(e, "touchend", this._onDrop), Wu(e, "pointerup", this._onDrop), Wu(e, "touchcancel", this._onDrop), Wu(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var t = this.el,
            n = this.options;
        Pc = uc(Ic), Yc = uc(Ic, n.draggable), bc("drop", this, {
            evt: e
        }), xc = Ic && Ic.parentNode, Pc = uc(Ic), Yc = uc(Ic, n.draggable), Cf.eventCanceled || (Qc = !1, nf = !1, tf = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), _f(this.cloneId), _f(this._dragStartId), this.nativeDraggable && (Wu(document, "drop", this), Wu(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ju && tc(document.body, "user-select", ""), tc(Ic, "transform", ""), e && (Vc && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), wc && wc.parentNode && wc.parentNode.removeChild(wc), (Sc === xc || Rc && "clone" !== Rc.lastPutMode) && kc && kc.parentNode && kc.parentNode.removeChild(kc), Ic && (this.nativeDraggable && Wu(Ic, "dragend", this), Ff(Ic), Ic.style["will-change"] = "", Vc && !Qc && ec(Ic, Rc ? Rc.options.ghostClass : this.options.ghostClass, !1), ec(Ic, this.options.chosenClass, !1), Bc({
            sortable: this,
            name: "unchoose",
            toEl: xc,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Sc !== xc ? (Pc >= 0 && (Bc({
            rootEl: xc,
            name: "add",
            toEl: xc,
            fromEl: Sc,
            originalEvent: e
        }), Bc({
            sortable: this,
            name: "remove",
            toEl: xc,
            originalEvent: e
        }), Bc({
            rootEl: xc,
            name: "sort",
            toEl: xc,
            fromEl: Sc,
            originalEvent: e
        }), Bc({
            sortable: this,
            name: "sort",
            toEl: xc,
            originalEvent: e
        })), Rc && Rc.save()) : Pc !== Nc && Pc >= 0 && (Bc({
            sortable: this,
            name: "update",
            toEl: xc,
            originalEvent: e
        }), Bc({
            sortable: this,
            name: "sort",
            toEl: xc,
            originalEvent: e
        })), Cf.active && (null != Pc && -1 !== Pc || (Pc = Nc, Yc = Lc), Bc({
            sortable: this,
            name: "end",
            toEl: xc,
            originalEvent: e
        }), this.save())))), this._nulling()
    },
    _nulling: function() {
        bc("nulling", this), Sc = Ic = xc = wc = Tc = kc = Oc = Mc = Hc = Zc = Vc = Pc = Yc = Nc = Lc = Wc = $c = Rc = Gc = Cf.dragged = Cf.ghost = Cf.clone = Cf.active = null, of .forEach((function(e) {
            e.checked = !0
        })), of .length = jc = zc = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Ic && (this._onDragOver(e), function(e) {
                    e.dataTransfer && (e.dataTransfer.dropEffect = "move");
                    e.cancelable && e.preventDefault()
                }(e));
                break;
            case "selectstart":
                e.preventDefault()
        }
    },
    toArray: function() {
        for (var e, t = [], n = this.el.children, r = 0, a = n.length, i = this.options; r < a; r++) Ku(e = n[r], i.draggable, this.el, !1) && t.push(e.getAttribute(i.dataIdAttr) || Af(e));
        return t
    },
    sort: function(e, t) {
        var n = {},
            r = this.el;
        this.toArray().forEach((function(e, t) {
            var a = r.children[t];
            Ku(a, this.options.draggable, r, !1) && (n[e] = a)
        }), this), t && this.captureAnimationState(), e.forEach((function(e) {
            n[e] && (r.removeChild(n[e]), r.appendChild(n[e]))
        })), t && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, t) {
        return Ku(e, t || this.options.draggable, this.el, !1)
    },
    option: function(e, t) {
        var n = this.options;
        if (void 0 === t) return n[e];
        var r = Ac.modifyOption(this, e, t);
        n[e] = void 0 !== r ? r : t, "group" === e && hf(n)
    },
    destroy: function() {
        bc("destroy", this);
        var e = this.el;
        e[Cc] = null, Wu(e, "mousedown", this._onTapStart), Wu(e, "touchstart", this._onTapStart), Wu(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Wu(e, "dragover", this), Wu(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), (function(e) {
            e.removeAttribute("draggable")
        })), this._onDrop(), this._disableDelayedDragEvents(), ef.splice(ef.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!Mc) {
            if (bc("hideClone", this), Cf.eventCanceled) return;
            tc(kc, "display", "none"), this.options.removeCloneOnHide && kc.parentNode && kc.parentNode.removeChild(kc), Mc = !0
        }
    },
    _showClone: function(e) {
        if ("clone" === e.lastPutMode) {
            if (Mc) {
                if (bc("showClone", this), Cf.eventCanceled) return;
                Ic.parentNode != Sc || this.options.group.revertClone ? Tc ? Sc.insertBefore(kc, Tc) : Sc.appendChild(kc) : Sc.insertBefore(kc, Ic), this.options.group.revertClone && this.animate(Ic, kc), tc(kc, "display", ""), Mc = !1
            }
        } else this._hideClone()
    }
}, sf && Vu(document, "touchmove", (function(e) {
    (Cf.active || Qc) && e.cancelable && e.preventDefault()
})), Cf.utils = {
    on: Vu,
    off: Wu,
    css: tc,
    find: rc,
    is: function(e, t) {
        return !!Ku(e, t, e, !1)
    },
    extend: function(e, t) {
        if (e && t)
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    },
    throttle: hc,
    closest: Ku,
    toggleClass: ec,
    clone: pc,
    index: uc,
    nextTick: Df,
    cancelNextTick: _f,
    detectDirection: df,
    getChild: sc
}, Cf.get = function(e) {
    return e[Cc]
}, Cf.mount = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    t[0].constructor === Array && (t = t[0]), t.forEach((function(e) {
        if (!e.prototype || !e.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));
        e.utils && (Cf.utils = Ou(Ou({}, Cf.utils), e.utils)), Ac.mount(e)
    }))
}, Cf.create = function(e, t) {
    return new Cf(e, t)
}, Cf.version = "1.14.0";
var bf, Bf, If, xf, wf, Sf, Tf = [],
    Of = !1;

function kf() {
    Tf.forEach((function(e) {
        clearInterval(e.pid)
    })), Tf = []
}

function Mf() {
    clearInterval(Sf)
}
var Nf, Pf = hc((function(e, t, n, r) {
        if (t.scroll) {
            var a, i = (e.touches ? e.touches[0] : e).clientX,
                o = (e.touches ? e.touches[0] : e).clientY,
                s = t.scrollSensitivity,
                l = t.scrollSpeed,
                u = ac(),
                c = !1;
            Bf !== n && (Bf = n, kf(), bf = t.scroll, a = t.scrollFn, !0 === bf && (bf = fc(n, !0)));
            var f = 0,
                d = bf;
            do {
                var h = d,
                    g = ic(h),
                    p = g.top,
                    m = g.bottom,
                    v = g.left,
                    C = g.right,
                    E = g.width,
                    F = g.height,
                    y = void 0,
                    A = void 0,
                    D = h.scrollWidth,
                    _ = h.scrollHeight,
                    b = tc(h),
                    B = h.scrollLeft,
                    I = h.scrollTop;
                h === u ? (y = E < D && ("auto" === b.overflowX || "scroll" === b.overflowX || "visible" === b.overflowX), A = F < _ && ("auto" === b.overflowY || "scroll" === b.overflowY || "visible" === b.overflowY)) : (y = E < D && ("auto" === b.overflowX || "scroll" === b.overflowX), A = F < _ && ("auto" === b.overflowY || "scroll" === b.overflowY));
                var x = y && (Math.abs(C - i) <= s && B + E < D) - (Math.abs(v - i) <= s && !!B),
                    w = A && (Math.abs(m - o) <= s && I + F < _) - (Math.abs(p - o) <= s && !!I);
                if (!Tf[f])
                    for (var S = 0; S <= f; S++) Tf[S] || (Tf[S] = {});
                Tf[f].vx == x && Tf[f].vy == w && Tf[f].el === h || (Tf[f].el = h, Tf[f].vx = x, Tf[f].vy = w, clearInterval(Tf[f].pid), 0 == x && 0 == w || (c = !0, Tf[f].pid = setInterval(function() {
                    r && 0 === this.layer && Cf.active._onTouchMove(wf);
                    var t = Tf[this.layer].vy ? Tf[this.layer].vy * l : 0,
                        n = Tf[this.layer].vx ? Tf[this.layer].vx * l : 0;
                    "function" == typeof a && "continue" !== a.call(Cf.dragged.parentNode[Cc], n, t, e, wf, Tf[this.layer].el) || gc(Tf[this.layer].el, n, t)
                }.bind({
                    layer: f
                }), 24))), f++
            } while (t.bubbleScroll && d !== u && (d = fc(d, !1)));
            Of = c
        }
    }), 30),
    Lf = function(e) {
        var t = e.originalEvent,
            n = e.putSortable,
            r = e.dragEl,
            a = e.activeSortable,
            i = e.dispatchSortableEvent,
            o = e.hideGhostForTarget,
            s = e.unhideGhostForTarget;
        if (t) {
            var l = n || a;
            o();
            var u = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
                c = document.elementFromPoint(u.clientX, u.clientY);
            s(), l && !l.el.contains(c) && (i("spill"), this.onSpill({
                dragEl: r,
                putSortable: n
            }))
        }
    };

function Yf() {}

function Gf() {}
Yf.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var t = e.oldDraggableIndex;
        this.startIndex = t
    },
    onSpill: function(e) {
        var t = e.dragEl,
            n = e.putSortable;
        this.sortable.captureAnimationState(), n && n.captureAnimationState();
        var r = sc(this.sortable.el, this.startIndex, this.options);
        r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll()
    },
    drop: Lf
}, Nu(Yf, {
    pluginName: "revertOnSpill"
}), Gf.prototype = {
    onSpill: function(e) {
        var t = e.dragEl,
            n = e.putSortable || this.sortable;
        n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll()
    },
    drop: Lf
}, Nu(Gf, {
    pluginName: "removeOnSpill"
});
var Rf, Hf, Zf, jf, zf, Uf = [],
    Xf = [],
    Vf = !1,
    Wf = !1,
    $f = !1;

function Jf(e, t) {
    Xf.forEach((function(n, r) {
        var a = t.children[n.sortableIndex + (e ? Number(r) : 0)];
        a ? t.insertBefore(n, a) : t.appendChild(n)
    }))
}

function Kf() {
    Uf.forEach((function(e) {
        e !== Zf && e.parentNode && e.parentNode.removeChild(e)
    }))
}
Cf.mount(new function() {
    function e() {
        for (var e in this.defaults = {
                scroll: !0,
                forceAutoScrollFallback: !1,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0
            }, this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this))
    }
    return e.prototype = {
        dragStarted: function(e) {
            var t = e.originalEvent;
            this.sortable.nativeDraggable ? Vu(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Vu(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? Vu(document, "touchmove", this._handleFallbackAutoScroll) : Vu(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(e) {
            var t = e.originalEvent;
            this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
        },
        drop: function() {
            this.sortable.nativeDraggable ? Wu(document, "dragover", this._handleAutoScroll) : (Wu(document, "pointermove", this._handleFallbackAutoScroll), Wu(document, "touchmove", this._handleFallbackAutoScroll), Wu(document, "mousemove", this._handleFallbackAutoScroll)), Mf(), kf(), clearTimeout(Qu), Qu = void 0
        },
        nulling: function() {
            wf = Bf = bf = Of = Sf = If = xf = null, Tf.length = 0
        },
        _handleFallbackAutoScroll: function(e) {
            this._handleAutoScroll(e, !0)
        },
        _handleAutoScroll: function(e, t) {
            var n = this,
                r = (e.touches ? e.touches[0] : e).clientX,
                a = (e.touches ? e.touches[0] : e).clientY,
                i = document.elementFromPoint(r, a);
            if (wf = e, t || this.options.forceAutoScrollFallback || Hu || Ru || ju) {
                Pf(e, this.options, i, t);
                var o = fc(i, !0);
                !Of || Sf && r === If && a === xf || (Sf && Mf(), Sf = setInterval((function() {
                    var i = fc(document.elementFromPoint(r, a), !0);
                    i !== o && (o = i, kf()), Pf(e, n.options, i, t)
                }), 10), If = r, xf = a)
            } else {
                if (!this.options.bubbleScroll || fc(i, !0) === ac()) return void kf();
                Pf(e, this.options, fc(i, !1), !1)
            }
        }
    }, Nu(e, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}), Cf.mount(Gf, Yf);
var Qf, qf = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: Cf,
    MultiDrag: function() {
        function e(e) {
            for (var t in this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
            e.options.supportPointer ? Vu(document, "pointerup", this._deselectMultiDrag) : (Vu(document, "mouseup", this._deselectMultiDrag), Vu(document, "touchend", this._deselectMultiDrag)), Vu(document, "keydown", this._checkKeyDown), Vu(document, "keyup", this._checkKeyUp), this.defaults = {
                selectedClass: "sortable-selected",
                multiDragKey: null,
                setData: function(t, n) {
                    var r = "";
                    Uf.length && Hf === e ? Uf.forEach((function(e, t) {
                        r += (t ? ", " : "") + e.textContent
                    })) : r = n.textContent, t.setData("Text", r)
                }
            }
        }
        return e.prototype = {
            multiDragKeyDown: !1,
            isMultiDrag: !1,
            delayStartGlobal: function(e) {
                var t = e.dragEl;
                Zf = t
            },
            delayEnded: function() {
                this.isMultiDrag = ~Uf.indexOf(Zf)
            },
            setupClone: function(e) {
                var t = e.sortable,
                    n = e.cancel;
                if (this.isMultiDrag) {
                    for (var r = 0; r < Uf.length; r++) Xf.push(pc(Uf[r])), Xf[r].sortableIndex = Uf[r].sortableIndex, Xf[r].draggable = !1, Xf[r].style["will-change"] = "", ec(Xf[r], this.options.selectedClass, !1), Uf[r] === Zf && ec(Xf[r], this.options.chosenClass, !1);
                    t._hideClone(), n()
                }
            },
            clone: function(e) {
                var t = e.sortable,
                    n = e.rootEl,
                    r = e.dispatchSortableEvent,
                    a = e.cancel;
                this.isMultiDrag && (this.options.removeCloneOnHide || Uf.length && Hf === t && (Jf(!0, n), r("clone"), a()))
            },
            showClone: function(e) {
                var t = e.cloneNowShown,
                    n = e.rootEl,
                    r = e.cancel;
                this.isMultiDrag && (Jf(!1, n), Xf.forEach((function(e) {
                    tc(e, "display", "")
                })), t(), zf = !1, r())
            },
            hideClone: function(e) {
                var t = this;
                e.sortable;
                var n = e.cloneNowHidden,
                    r = e.cancel;
                this.isMultiDrag && (Xf.forEach((function(e) {
                    tc(e, "display", "none"), t.options.removeCloneOnHide && e.parentNode && e.parentNode.removeChild(e)
                })), n(), zf = !0, r())
            },
            dragStartGlobal: function(e) {
                e.sortable, !this.isMultiDrag && Hf && Hf.multiDrag._deselectMultiDrag(), Uf.forEach((function(e) {
                    e.sortableIndex = uc(e)
                })), Uf = Uf.sort((function(e, t) {
                    return e.sortableIndex - t.sortableIndex
                })), $f = !0
            },
            dragStarted: function(e) {
                var t = this,
                    n = e.sortable;
                if (this.isMultiDrag) {
                    if (this.options.sort && (n.captureAnimationState(), this.options.animation)) {
                        Uf.forEach((function(e) {
                            e !== Zf && tc(e, "position", "absolute")
                        }));
                        var r = ic(Zf, !1, !0, !0);
                        Uf.forEach((function(e) {
                            e !== Zf && mc(e, r)
                        })), Wf = !0, Vf = !0
                    }
                    n.animateAll((function() {
                        Wf = !1, Vf = !1, t.options.animation && Uf.forEach((function(e) {
                            vc(e)
                        })), t.options.sort && Kf()
                    }))
                }
            },
            dragOver: function(e) {
                var t = e.target,
                    n = e.completed,
                    r = e.cancel;
                Wf && ~Uf.indexOf(t) && (n(!1), r())
            },
            revert: function(e) {
                var t = e.fromSortable,
                    n = e.rootEl,
                    r = e.sortable,
                    a = e.dragRect;
                Uf.length > 1 && (Uf.forEach((function(e) {
                    r.addAnimationState({
                        target: e,
                        rect: Wf ? ic(e) : a
                    }), vc(e), e.fromRect = a, t.removeAnimationState(e)
                })), Wf = !1, function(e, t) {
                    Uf.forEach((function(n, r) {
                        var a = t.children[n.sortableIndex + (e ? Number(r) : 0)];
                        a ? t.insertBefore(n, a) : t.appendChild(n)
                    }))
                }(!this.options.removeCloneOnHide, n))
            },
            dragOverCompleted: function(e) {
                var t = e.sortable,
                    n = e.isOwner,
                    r = e.insertion,
                    a = e.activeSortable,
                    i = e.parentEl,
                    o = e.putSortable,
                    s = this.options;
                if (r) {
                    if (n && a._hideClone(), Vf = !1, s.animation && Uf.length > 1 && (Wf || !n && !a.options.sort && !o)) {
                        var l = ic(Zf, !1, !0, !0);
                        Uf.forEach((function(e) {
                            e !== Zf && (mc(e, l), i.appendChild(e))
                        })), Wf = !0
                    }
                    if (!n)
                        if (Wf || Kf(), Uf.length > 1) {
                            var u = zf;
                            a._showClone(t), a.options.animation && !zf && u && Xf.forEach((function(e) {
                                a.addAnimationState({
                                    target: e,
                                    rect: jf
                                }), e.fromRect = jf, e.thisAnimationDuration = null
                            }))
                        } else a._showClone(t)
                }
            },
            dragOverAnimationCapture: function(e) {
                var t = e.dragRect,
                    n = e.isOwner,
                    r = e.activeSortable;
                if (Uf.forEach((function(e) {
                        e.thisAnimationDuration = null
                    })), r.options.animation && !n && r.multiDrag.isMultiDrag) {
                    jf = Nu({}, t);
                    var a = nc(Zf, !0);
                    jf.top -= a.f, jf.left -= a.e
                }
            },
            dragOverAnimationComplete: function() {
                Wf && (Wf = !1, Kf())
            },
            drop: function(e) {
                var t = e.originalEvent,
                    n = e.rootEl,
                    r = e.parentEl,
                    a = e.sortable,
                    i = e.dispatchSortableEvent,
                    o = e.oldIndex,
                    s = e.putSortable,
                    l = s || this.sortable;
                if (t) {
                    var u = this.options,
                        c = r.children;
                    if (!$f)
                        if (u.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), ec(Zf, u.selectedClass, !~Uf.indexOf(Zf)), ~Uf.indexOf(Zf)) Uf.splice(Uf.indexOf(Zf), 1), Rf = null, Dc({
                            sortable: a,
                            rootEl: n,
                            name: "deselect",
                            targetEl: Zf,
                            originalEvt: t
                        });
                        else {
                            if (Uf.push(Zf), Dc({
                                    sortable: a,
                                    rootEl: n,
                                    name: "select",
                                    targetEl: Zf,
                                    originalEvt: t
                                }), t.shiftKey && Rf && a.el.contains(Rf)) {
                                var f, d, h = uc(Rf),
                                    g = uc(Zf);
                                if (~h && ~g && h !== g)
                                    for (g > h ? (d = h, f = g) : (d = g, f = h + 1); d < f; d++) ~Uf.indexOf(c[d]) || (ec(c[d], u.selectedClass, !0), Uf.push(c[d]), Dc({
                                        sortable: a,
                                        rootEl: n,
                                        name: "select",
                                        targetEl: c[d],
                                        originalEvt: t
                                    }))
                            } else Rf = Zf;
                            Hf = l
                        } if ($f && this.isMultiDrag) {
                        if (Wf = !1, (r[Cc].options.sort || r !== n) && Uf.length > 1) {
                            var p = ic(Zf),
                                m = uc(Zf, ":not(." + this.options.selectedClass + ")");
                            if (!Vf && u.animation && (Zf.thisAnimationDuration = null), l.captureAnimationState(), !Vf && (u.animation && (Zf.fromRect = p, Uf.forEach((function(e) {
                                    if (e.thisAnimationDuration = null, e !== Zf) {
                                        var t = Wf ? ic(e) : p;
                                        e.fromRect = t, l.addAnimationState({
                                            target: e,
                                            rect: t
                                        })
                                    }
                                }))), Kf(), Uf.forEach((function(e) {
                                    c[m] ? r.insertBefore(e, c[m]) : r.appendChild(e), m++
                                })), o === uc(Zf))) {
                                var v = !1;
                                Uf.forEach((function(e) {
                                    e.sortableIndex === uc(e) || (v = !0)
                                })), v && i("update")
                            }
                            Uf.forEach((function(e) {
                                vc(e)
                            })), l.animateAll()
                        }
                        Hf = l
                    }(n === r || s && "clone" !== s.lastPutMode) && Xf.forEach((function(e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    }))
                }
            },
            nullingGlobal: function() {
                this.isMultiDrag = $f = !1, Xf.length = 0
            },
            destroyGlobal: function() {
                this._deselectMultiDrag(), Wu(document, "pointerup", this._deselectMultiDrag), Wu(document, "mouseup", this._deselectMultiDrag), Wu(document, "touchend", this._deselectMultiDrag), Wu(document, "keydown", this._checkKeyDown), Wu(document, "keyup", this._checkKeyUp)
            },
            _deselectMultiDrag: function(e) {
                if (!(void 0 !== $f && $f || Hf !== this.sortable || e && Ku(e.target, this.options.draggable, this.sortable.el, !1) || e && 0 !== e.button))
                    for (; Uf.length;) {
                        var t = Uf[0];
                        ec(t, this.options.selectedClass, !1), Uf.shift(), Dc({
                            sortable: this.sortable,
                            rootEl: this.sortable.el,
                            name: "deselect",
                            targetEl: t,
                            originalEvt: e
                        })
                    }
            },
            _checkKeyDown: function(e) {
                e.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
            },
            _checkKeyUp: function(e) {
                e.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
            }
        }, Nu(e, {
            pluginName: "multiDrag",
            utils: {
                select: function(e) {
                    var t = e.parentNode[Cc];
                    t && t.options.multiDrag && !~Uf.indexOf(e) && (Hf && Hf !== t && (Hf.multiDrag._deselectMultiDrag(), Hf = t), ec(e, t.options.selectedClass, !0), Uf.push(e))
                },
                deselect: function(e) {
                    var t = e.parentNode[Cc],
                        n = Uf.indexOf(e);
                    t && t.options.multiDrag && ~n && (ec(e, t.options.selectedClass, !1), Uf.splice(n, 1))
                }
            },
            eventProperties: function() {
                var e = this,
                    t = [],
                    n = [];
                return Uf.forEach((function(r) {
                    var a;
                    t.push({
                        multiDragElement: r,
                        index: r.sortableIndex
                    }), a = Wf && r !== Zf ? -1 : Wf ? uc(r, ":not(." + e.options.selectedClass + ")") : uc(r), n.push({
                        multiDragElement: r,
                        index: a
                    })
                })), {
                    items: Lu(Uf),
                    clones: [].concat(Xf),
                    oldIndicies: t,
                    newIndicies: n
                }
            },
            optionListeners: {
                multiDragKey: function(e) {
                    return "ctrl" === (e = e.toLowerCase()) ? e = "Control" : e.length > 1 && (e = e.charAt(0).toUpperCase() + e.substr(1)), e
                }
            }
        })
    },
    Sortable: Cf,
    Swap: function() {
        function e() {
            this.defaults = {
                swapClass: "sortable-swap-highlight"
            }
        }
        return e.prototype = {
            dragStart: function(e) {
                var t = e.dragEl;
                Nf = t
            },
            dragOverValid: function(e) {
                var t = e.completed,
                    n = e.target,
                    r = e.onMove,
                    a = e.activeSortable,
                    i = e.changed,
                    o = e.cancel;
                if (a.options.swap) {
                    var s = this.sortable.el,
                        l = this.options;
                    if (n && n !== s) {
                        var u = Nf;
                        !1 !== r(n) ? (ec(n, l.swapClass, !0), Nf = n) : Nf = null, u && u !== Nf && ec(u, l.swapClass, !1)
                    }
                    i(), t(!0), o()
                }
            },
            drop: function(e) {
                var t = e.activeSortable,
                    n = e.putSortable,
                    r = e.dragEl,
                    a = n || this.sortable,
                    i = this.options;
                Nf && ec(Nf, i.swapClass, !1), Nf && (i.swap || n && n.options.swap) && r !== Nf && (a.captureAnimationState(), a !== t && t.captureAnimationState(), function(e, t) {
                    var n, r, a = e.parentNode,
                        i = t.parentNode;
                    if (!a || !i || a.isEqualNode(t) || i.isEqualNode(e)) return;
                    n = uc(e), r = uc(t), a.isEqualNode(i) && n < r && r++;
                    a.insertBefore(t, a.children[n]), i.insertBefore(e, i.children[r])
                }(r, Nf), a.animateAll(), a !== t && t.animateAll())
            },
            nulling: function() {
                Nf = null
            }
        }, Nu(e, {
            pluginName: "swap",
            eventProperties: function() {
                return {
                    swapItem: Nf
                }
            }
        })
    }
});
"undefined" != typeof self && self, Qf = function(e, t) {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var a = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var a in e) n.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = "fb15")
    }({
        "00ee": function(e, t, n) {
            var r = {};
            r[n("b622")("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        },
        "0366": function(e, t, n) {
            var r = n("1c0b");
            e.exports = function(e, t, n) {
                if (r(e), void 0 === t) return e;
                switch (n) {
                    case 0:
                        return function() {
                            return e.call(t)
                        };
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, a) {
                            return e.call(t, n, r, a)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        "057f": function(e, t, n) {
            var r = n("fc6a"),
                a = n("241c").f,
                i = {}.toString,
                o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) {
                return o && "[object Window]" == i.call(e) ? function(e) {
                    try {
                        return a(e)
                    } catch (t) {
                        return o.slice()
                    }
                }(e) : a(r(e))
            }
        },
        "06cf": function(e, t, n) {
            var r = n("83ab"),
                a = n("d1e7"),
                i = n("5c6c"),
                o = n("fc6a"),
                s = n("c04e"),
                l = n("5135"),
                u = n("0cfb"),
                c = Object.getOwnPropertyDescriptor;
            t.f = r ? c : function(e, t) {
                if (e = o(e), t = s(t, !0), u) try {
                    return c(e, t)
                } catch (n) {}
                if (l(e, t)) return i(!a.f.call(e, t), e[t])
            }
        },
        "0cfb": function(e, t, n) {
            var r = n("83ab"),
                a = n("d039"),
                i = n("cc12");
            e.exports = !r && !a((function() {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        "13d5": function(e, t, n) {
            var r = n("23e7"),
                a = n("d58f").left,
                i = n("a640"),
                o = n("ae40"),
                s = i("reduce"),
                l = o("reduce", {
                    1: 0
                });
            r({
                target: "Array",
                proto: !0,
                forced: !s || !l
            }, {
                reduce: function(e) {
                    return a(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        "14c3": function(e, t, n) {
            var r = n("c6b6"),
                a = n("9263");
            e.exports = function(e, t) {
                var n = e.exec;
                if ("function" == typeof n) {
                    var i = n.call(e, t);
                    if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                    return i
                }
                if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
                return a.call(e, t)
            }
        },
        "159b": function(e, t, n) {
            var r = n("da84"),
                a = n("fdbc"),
                i = n("17c2"),
                o = n("9112");
            for (var s in a) {
                var l = r[s],
                    u = l && l.prototype;
                if (u && u.forEach !== i) try {
                    o(u, "forEach", i)
                } catch (c) {
                    u.forEach = i
                }
            }
        },
        "17c2": function(e, t, n) {
            var r = n("b727").forEach,
                a = n("a640"),
                i = n("ae40"),
                o = a("forEach"),
                s = i("forEach");
            e.exports = o && s ? [].forEach : function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        },
        "1be4": function(e, t, n) {
            var r = n("d066");
            e.exports = r("document", "documentElement")
        },
        "1c0b": function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                return e
            }
        },
        "1c7e": function(e, t, n) {
            var r = n("b622")("iterator"),
                a = !1;
            try {
                var i = 0,
                    o = {
                        next: function() {
                            return {
                                done: !!i++
                            }
                        },
                        return: function() {
                            a = !0
                        }
                    };
                o[r] = function() {
                    return this
                }, Array.from(o, (function() {
                    throw 2
                }))
            } catch (s) {}
            e.exports = function(e, t) {
                if (!t && !a) return !1;
                var n = !1;
                try {
                    var i = {};
                    i[r] = function() {
                        return {
                            next: function() {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }, e(i)
                } catch (s) {}
                return n
            }
        },
        "1d80": function(e, t) {
            e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e
            }
        },
        "1dde": function(e, t, n) {
            var r = n("d039"),
                a = n("b622"),
                i = n("2d00"),
                o = a("species");
            e.exports = function(e) {
                return i >= 51 || !r((function() {
                    var t = [];
                    return (t.constructor = {})[o] = function() {
                        return {
                            foo: 1
                        }
                    }, 1 !== t[e](Boolean).foo
                }))
            }
        },
        "23cb": function(e, t, n) {
            var r = n("a691"),
                a = Math.max,
                i = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? a(n + t, 0) : i(n, t)
            }
        },
        "23e7": function(e, t, n) {
            var r = n("da84"),
                a = n("06cf").f,
                i = n("9112"),
                o = n("6eeb"),
                s = n("ce4e"),
                l = n("e893"),
                u = n("94ca");
            e.exports = function(e, t) {
                var n, c, f, d, h, g = e.target,
                    p = e.global,
                    m = e.stat;
                if (n = p ? r : m ? r[g] || s(g, {}) : (r[g] || {}).prototype)
                    for (c in t) {
                        if (d = t[c], f = e.noTargetGet ? (h = a(n, c)) && h.value : n[c], !u(p ? c : g + (m ? "." : "#") + c, e.forced) && void 0 !== f) {
                            if (typeof d == typeof f) continue;
                            l(d, f)
                        }(e.sham || f && f.sham) && i(d, "sham", !0), o(n, c, d, e)
                    }
            }
        },
        "241c": function(e, t, n) {
            var r = n("ca84"),
                a = n("7839").concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, a)
            }
        },
        "25f0": function(e, t, n) {
            var r = n("6eeb"),
                a = n("825a"),
                i = n("d039"),
                o = n("ad6d"),
                s = "toString",
                l = RegExp.prototype,
                u = l.toString,
                c = i((function() {
                    return "/a/b" != u.call({
                        source: "a",
                        flags: "b"
                    })
                })),
                f = u.name != s;
            (c || f) && r(RegExp.prototype, s, (function() {
                var e = a(this),
                    t = String(e.source),
                    n = e.flags;
                return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in l) ? o.call(e) : n)
            }), {
                unsafe: !0
            })
        },
        "2ca0": function(e, t, n) {
            var r, a = n("23e7"),
                i = n("06cf").f,
                o = n("50c4"),
                s = n("5a34"),
                l = n("1d80"),
                u = n("ab13"),
                c = n("c430"),
                f = "".startsWith,
                d = Math.min,
                h = u("startsWith");
            a({
                target: "String",
                proto: !0,
                forced: !(!c && !h && (r = i(String.prototype, "startsWith"), r && !r.writable) || h)
            }, {
                startsWith: function(e) {
                    var t = String(l(this));
                    s(e);
                    var n = o(d(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                        r = String(e);
                    return f ? f.call(t, r, n) : t.slice(n, n + r.length) === r
                }
            })
        },
        "2d00": function(e, t, n) {
            var r, a, i = n("da84"),
                o = n("342f"),
                s = i.process,
                l = s && s.versions,
                u = l && l.v8;
            u ? a = (r = u.split("."))[0] + r[1] : o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/)) && (a = r[1]), e.exports = a && +a
        },
        "342f": function(e, t, n) {
            var r = n("d066");
            e.exports = r("navigator", "userAgent") || ""
        },
        "35a1": function(e, t, n) {
            var r = n("f5df"),
                a = n("3f8c"),
                i = n("b622")("iterator");
            e.exports = function(e) {
                if (null != e) return e[i] || e["@@iterator"] || a[r(e)]
            }
        },
        "37e8": function(e, t, n) {
            var r = n("83ab"),
                a = n("9bf2"),
                i = n("825a"),
                o = n("df75");
            e.exports = r ? Object.defineProperties : function(e, t) {
                i(e);
                for (var n, r = o(t), s = r.length, l = 0; s > l;) a.f(e, n = r[l++], t[n]);
                return e
            }
        },
        "3bbe": function(e, t, n) {
            var r = n("861d");
            e.exports = function(e) {
                if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
                return e
            }
        },
        "3ca3": function(e, t, n) {
            var r = n("6547").charAt,
                a = n("69f3"),
                i = n("7dd0"),
                o = "String Iterator",
                s = a.set,
                l = a.getterFor(o);
            i(String, "String", (function(e) {
                s(this, {
                    type: o,
                    string: String(e),
                    index: 0
                })
            }), (function() {
                var e, t = l(this),
                    n = t.string,
                    a = t.index;
                return a >= n.length ? {
                    value: void 0,
                    done: !0
                } : (e = r(n, a), t.index += e.length, {
                    value: e,
                    done: !1
                })
            }))
        },
        "3f8c": function(e, t) {
            e.exports = {}
        },
        4160: function(e, t, n) {
            var r = n("23e7"),
                a = n("17c2");
            r({
                target: "Array",
                proto: !0,
                forced: [].forEach != a
            }, {
                forEach: a
            })
        },
        "428f": function(e, t, n) {
            var r = n("da84");
            e.exports = r
        },
        "44ad": function(e, t, n) {
            var r = n("d039"),
                a = n("c6b6"),
                i = "".split;
            e.exports = r((function() {
                return !Object("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == a(e) ? i.call(e, "") : Object(e)
            } : Object
        },
        "44d2": function(e, t, n) {
            var r = n("b622"),
                a = n("7c73"),
                i = n("9bf2"),
                o = r("unscopables"),
                s = Array.prototype;
            null == s[o] && i.f(s, o, {
                configurable: !0,
                value: a(null)
            }), e.exports = function(e) {
                s[o][e] = !0
            }
        },
        "44e7": function(e, t, n) {
            var r = n("861d"),
                a = n("c6b6"),
                i = n("b622")("match");
            e.exports = function(e) {
                var t;
                return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == a(e))
            }
        },
        4930: function(e, t, n) {
            var r = n("d039");
            e.exports = !!Object.getOwnPropertySymbols && !r((function() {
                return !String(Symbol())
            }))
        },
        "4d64": function(e, t, n) {
            var r = n("fc6a"),
                a = n("50c4"),
                i = n("23cb"),
                o = function(e) {
                    return function(t, n, o) {
                        var s, l = r(t),
                            u = a(l.length),
                            c = i(o, u);
                        if (e && n != n) {
                            for (; u > c;)
                                if ((s = l[c++]) != s) return !0
                        } else
                            for (; u > c; c++)
                                if ((e || c in l) && l[c] === n) return e || c || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: o(!0),
                indexOf: o(!1)
            }
        },
        "4de4": function(e, t, n) {
            var r = n("23e7"),
                a = n("b727").filter,
                i = n("1dde"),
                o = n("ae40"),
                s = i("filter"),
                l = o("filter");
            r({
                target: "Array",
                proto: !0,
                forced: !s || !l
            }, {
                filter: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        "4df4": function(e, t, n) {
            var r = n("0366"),
                a = n("7b0b"),
                i = n("9bdd"),
                o = n("e95a"),
                s = n("50c4"),
                l = n("8418"),
                u = n("35a1");
            e.exports = function(e) {
                var t, n, c, f, d, h, g = a(e),
                    p = "function" == typeof this ? this : Array,
                    m = arguments.length,
                    v = m > 1 ? arguments[1] : void 0,
                    C = void 0 !== v,
                    E = u(g),
                    F = 0;
                if (C && (v = r(v, m > 2 ? arguments[2] : void 0, 2)), null == E || p == Array && o(E))
                    for (n = new p(t = s(g.length)); t > F; F++) h = C ? v(g[F], F) : g[F], l(n, F, h);
                else
                    for (d = (f = E.call(g)).next, n = new p; !(c = d.call(f)).done; F++) h = C ? i(f, v, [c.value, F], !0) : c.value, l(n, F, h);
                return n.length = F, n
            }
        },
        "4fad": function(e, t, n) {
            var r = n("23e7"),
                a = n("6f53").entries;
            r({
                target: "Object",
                stat: !0
            }, {
                entries: function(e) {
                    return a(e)
                }
            })
        },
        "50c4": function(e, t, n) {
            var r = n("a691"),
                a = Math.min;
            e.exports = function(e) {
                return e > 0 ? a(r(e), 9007199254740991) : 0
            }
        },
        5135: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        5319: function(e, t, n) {
            var r = n("d784"),
                a = n("825a"),
                i = n("7b0b"),
                o = n("50c4"),
                s = n("a691"),
                l = n("1d80"),
                u = n("8aa5"),
                c = n("14c3"),
                f = Math.max,
                d = Math.min,
                h = Math.floor,
                g = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                p = /\$([$&'`]|\d\d?)/g;
            r("replace", 2, (function(e, t, n, r) {
                var m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                    v = r.REPLACE_KEEPS_$0,
                    C = m ? "$" : "$0";
                return [function(n, r) {
                    var a = l(this),
                        i = null == n ? void 0 : n[e];
                    return void 0 !== i ? i.call(n, a, r) : t.call(String(a), n, r)
                }, function(e, r) {
                    if (!m && v || "string" == typeof r && -1 === r.indexOf(C)) {
                        var i = n(t, e, this, r);
                        if (i.done) return i.value
                    }
                    var l = a(e),
                        h = String(this),
                        g = "function" == typeof r;
                    g || (r = String(r));
                    var p = l.global;
                    if (p) {
                        var F = l.unicode;
                        l.lastIndex = 0
                    }
                    for (var y = [];;) {
                        var A = c(l, h);
                        if (null === A) break;
                        if (y.push(A), !p) break;
                        "" === String(A[0]) && (l.lastIndex = u(h, o(l.lastIndex), F))
                    }
                    for (var D, _ = "", b = 0, B = 0; B < y.length; B++) {
                        A = y[B];
                        for (var I = String(A[0]), x = f(d(s(A.index), h.length), 0), w = [], S = 1; S < A.length; S++) w.push(void 0 === (D = A[S]) ? D : String(D));
                        var T = A.groups;
                        if (g) {
                            var O = [I].concat(w, x, h);
                            void 0 !== T && O.push(T);
                            var k = String(r.apply(void 0, O))
                        } else k = E(I, h, x, w, T, r);
                        x >= b && (_ += h.slice(b, x) + k, b = x + I.length)
                    }
                    return _ + h.slice(b)
                }];

                function E(e, n, r, a, o, s) {
                    var l = r + e.length,
                        u = a.length,
                        c = p;
                    return void 0 !== o && (o = i(o), c = g), t.call(s, c, (function(t, i) {
                        var s;
                        switch (i.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return n.slice(0, r);
                            case "'":
                                return n.slice(l);
                            case "<":
                                s = o[i.slice(1, -1)];
                                break;
                            default:
                                var c = +i;
                                if (0 === c) return t;
                                if (c > u) {
                                    var f = h(c / 10);
                                    return 0 === f ? t : f <= u ? void 0 === a[f - 1] ? i.charAt(1) : a[f - 1] + i.charAt(1) : t
                                }
                                s = a[c - 1]
                        }
                        return void 0 === s ? "" : s
                    }))
                }
            }))
        },
        5692: function(e, t, n) {
            var r = n("c430"),
                a = n("c6cd");
            (e.exports = function(e, t) {
                return a[e] || (a[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: r ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        },
        "56ef": function(e, t, n) {
            var r = n("d066"),
                a = n("241c"),
                i = n("7418"),
                o = n("825a");
            e.exports = r("Reflect", "ownKeys") || function(e) {
                var t = a.f(o(e)),
                    n = i.f;
                return n ? t.concat(n(e)) : t
            }
        },
        "5a34": function(e, t, n) {
            var r = n("44e7");
            e.exports = function(e) {
                if (r(e)) throw TypeError("The method doesn't accept regular expressions");
                return e
            }
        },
        "5c6c": function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        "5db7": function(e, t, n) {
            var r = n("23e7"),
                a = n("a2bf"),
                i = n("7b0b"),
                o = n("50c4"),
                s = n("1c0b"),
                l = n("65f0");
            r({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var t, n = i(this),
                        r = o(n.length);
                    return s(e), (t = l(n, 0)).length = a(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
                }
            })
        },
        6547: function(e, t, n) {
            var r = n("a691"),
                a = n("1d80"),
                i = function(e) {
                    return function(t, n) {
                        var i, o, s = String(a(t)),
                            l = r(n),
                            u = s.length;
                        return l < 0 || l >= u ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : o - 56320 + (i - 55296 << 10) + 65536
                    }
                };
            e.exports = {
                codeAt: i(!1),
                charAt: i(!0)
            }
        },
        "65f0": function(e, t, n) {
            var r = n("861d"),
                a = n("e8b5"),
                i = n("b622")("species");
            e.exports = function(e, t) {
                var n;
                return a(e) && ("function" != typeof(n = e.constructor) || n !== Array && !a(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
            }
        },
        "69f3": function(e, t, n) {
            var r, a, i, o = n("7f9a"),
                s = n("da84"),
                l = n("861d"),
                u = n("9112"),
                c = n("5135"),
                f = n("f772"),
                d = n("d012"),
                h = s.WeakMap;
            if (o) {
                var g = new h,
                    p = g.get,
                    m = g.has,
                    v = g.set;
                r = function(e, t) {
                    return v.call(g, e, t), t
                }, a = function(e) {
                    return p.call(g, e) || {}
                }, i = function(e) {
                    return m.call(g, e)
                }
            } else {
                var C = f("state");
                d[C] = !0, r = function(e, t) {
                    return u(e, C, t), t
                }, a = function(e) {
                    return c(e, C) ? e[C] : {}
                }, i = function(e) {
                    return c(e, C)
                }
            }
            e.exports = {
                set: r,
                get: a,
                has: i,
                enforce: function(e) {
                    return i(e) ? a(e) : r(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!l(t) || (n = a(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        },
        "6eeb": function(e, t, n) {
            var r = n("da84"),
                a = n("9112"),
                i = n("5135"),
                o = n("ce4e"),
                s = n("8925"),
                l = n("69f3"),
                u = l.get,
                c = l.enforce,
                f = String(String).split("String");
            (e.exports = function(e, t, n, s) {
                var l = !!s && !!s.unsafe,
                    u = !!s && !!s.enumerable,
                    d = !!s && !!s.noTargetGet;
                "function" == typeof n && ("string" != typeof t || i(n, "name") || a(n, "name", t), c(n).source = f.join("string" == typeof t ? t : "")), e !== r ? (l ? !d && e[t] && (u = !0) : delete e[t], u ? e[t] = n : a(e, t, n)) : u ? e[t] = n : o(t, n)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && u(this).source || s(this)
            }))
        },
        "6f53": function(e, t, n) {
            var r = n("83ab"),
                a = n("df75"),
                i = n("fc6a"),
                o = n("d1e7").f,
                s = function(e) {
                    return function(t) {
                        for (var n, s = i(t), l = a(s), u = l.length, c = 0, f = []; u > c;) n = l[c++], r && !o.call(s, n) || f.push(e ? [n, s[n]] : s[n]);
                        return f
                    }
                };
            e.exports = {
                entries: s(!0),
                values: s(!1)
            }
        },
        "73d9": function(e, t, n) {
            n("44d2")("flatMap")
        },
        7418: function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        "746f": function(e, t, n) {
            var r = n("428f"),
                a = n("5135"),
                i = n("e538"),
                o = n("9bf2").f;
            e.exports = function(e) {
                var t = r.Symbol || (r.Symbol = {});
                a(t, e) || o(t, e, {
                    value: i.f(e)
                })
            }
        },
        7839: function(e, t) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        "7b0b": function(e, t, n) {
            var r = n("1d80");
            e.exports = function(e) {
                return Object(r(e))
            }
        },
        "7c73": function(e, t, n) {
            var r, a = n("825a"),
                i = n("37e8"),
                o = n("7839"),
                s = n("d012"),
                l = n("1be4"),
                u = n("cc12"),
                c = n("f772"),
                f = c("IE_PROTO"),
                d = function() {},
                h = function(e) {
                    return "<script>" + e + "<\/script>"
                },
                g = function() {
                    try {
                        r = document.domain && new ActiveXObject("htmlfile")
                    } catch (a) {}
                    var e, t;
                    g = r ? function(e) {
                        e.write(h("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    }(r) : ((t = u("iframe")).style.display = "none", l.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(h("document.F=Object")), e.close(), e.F);
                    for (var n = o.length; n--;) delete g.prototype[o[n]];
                    return g()
                };
            s[f] = !0, e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (d.prototype = a(e), n = new d, d.prototype = null, n[f] = e) : n = g(), void 0 === t ? n : i(n, t)
            }
        },
        "7dd0": function(e, t, n) {
            var r = n("23e7"),
                a = n("9ed3"),
                i = n("e163"),
                o = n("d2bb"),
                s = n("d44e"),
                l = n("9112"),
                u = n("6eeb"),
                c = n("b622"),
                f = n("c430"),
                d = n("3f8c"),
                h = n("ae93"),
                g = h.IteratorPrototype,
                p = h.BUGGY_SAFARI_ITERATORS,
                m = c("iterator"),
                v = "keys",
                C = "values",
                E = "entries",
                F = function() {
                    return this
                };
            e.exports = function(e, t, n, c, h, y, A) {
                a(n, t, c);
                var D, _, b, B = function(e) {
                        if (e === h && T) return T;
                        if (!p && e in w) return w[e];
                        switch (e) {
                            case v:
                            case C:
                            case E:
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    },
                    I = t + " Iterator",
                    x = !1,
                    w = e.prototype,
                    S = w[m] || w["@@iterator"] || h && w[h],
                    T = !p && S || B(h),
                    O = "Array" == t && w.entries || S;
                if (O && (D = i(O.call(new e)), g !== Object.prototype && D.next && (f || i(D) === g || (o ? o(D, g) : "function" != typeof D[m] && l(D, m, F)), s(D, I, !0, !0), f && (d[I] = F))), h == C && S && S.name !== C && (x = !0, T = function() {
                        return S.call(this)
                    }), f && !A || w[m] === T || l(w, m, T), d[t] = T, h)
                    if (_ = {
                            values: B(C),
                            keys: y ? T : B(v),
                            entries: B(E)
                        }, A)
                        for (b in _)(p || x || !(b in w)) && u(w, b, _[b]);
                    else r({
                        target: t,
                        proto: !0,
                        forced: p || x
                    }, _);
                return _
            }
        },
        "7f9a": function(e, t, n) {
            var r = n("da84"),
                a = n("8925"),
                i = r.WeakMap;
            e.exports = "function" == typeof i && /native code/.test(a(i))
        },
        "825a": function(e, t, n) {
            var r = n("861d");
            e.exports = function(e) {
                if (!r(e)) throw TypeError(String(e) + " is not an object");
                return e
            }
        },
        "83ab": function(e, t, n) {
            var r = n("d039");
            e.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        8418: function(e, t, n) {
            var r = n("c04e"),
                a = n("9bf2"),
                i = n("5c6c");
            e.exports = function(e, t, n) {
                var o = r(t);
                o in e ? a.f(e, o, i(0, n)) : e[o] = n
            }
        },
        "861d": function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        8875: function(e, t, n) {
            var r, a, i;
            "undefined" != typeof self && self, a = [], void 0 === (i = "function" == typeof(r = function() {
                function e() {
                    var t = Object.getOwnPropertyDescriptor(document, "currentScript");
                    if (!t && "currentScript" in document && document.currentScript) return document.currentScript;
                    if (t && t.get !== e && document.currentScript) return document.currentScript;
                    try {
                        throw new Error
                    } catch (d) {
                        var n, r, a, i = /@([^@]*):(\d+):(\d+)\s*$/gi,
                            o = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(d.stack) || i.exec(d.stack),
                            s = o && o[1] || !1,
                            l = o && o[2] || !1,
                            u = document.location.href.replace(document.location.hash, ""),
                            c = document.getElementsByTagName("script");
                        s === u && (n = document.documentElement.outerHTML, r = new RegExp("(?:[^\\n]+?\\n){0," + (l - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), a = n.replace(r, "$1").trim());
                        for (var f = 0; f < c.length; f++) {
                            if ("interactive" === c[f].readyState) return c[f];
                            if (c[f].src === s) return c[f];
                            if (s === u && c[f].innerHTML && c[f].innerHTML.trim() === a) return c[f]
                        }
                        return null
                    }
                }
                return e
            }) ? r.apply(t, a) : r) || (e.exports = i)
        },
        8925: function(e, t, n) {
            var r = n("c6cd"),
                a = Function.toString;
            "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
                return a.call(e)
            }), e.exports = r.inspectSource
        },
        "8aa5": function(e, t, n) {
            var r = n("6547").charAt;
            e.exports = function(e, t, n) {
                return t + (n ? r(e, t).length : 1)
            }
        },
        "8bbf": function(t, n) {
            t.exports = e
        },
        "90e3": function(e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function(e) {
                return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
            }
        },
        9112: function(e, t, n) {
            var r = n("83ab"),
                a = n("9bf2"),
                i = n("5c6c");
            e.exports = r ? function(e, t, n) {
                return a.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        9263: function(e, t, n) {
            var r, a, i = n("ad6d"),
                o = n("9f7f"),
                s = RegExp.prototype.exec,
                l = String.prototype.replace,
                u = s,
                c = (r = /a/, a = /b*/g, s.call(r, "a"), s.call(a, "a"), 0 !== r.lastIndex || 0 !== a.lastIndex),
                f = o.UNSUPPORTED_Y || o.BROKEN_CARET,
                d = void 0 !== /()??/.exec("")[1];
            (c || d || f) && (u = function(e) {
                var t, n, r, a, o = this,
                    u = f && o.sticky,
                    h = i.call(o),
                    g = o.source,
                    p = 0,
                    m = e;
                return u && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), m = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (g = "(?: " + g + ")", m = " " + m, p++), n = new RegExp("^(?:" + g + ")", h)), d && (n = new RegExp("^" + g + "$(?!\\s)", h)), c && (t = o.lastIndex), r = s.call(u ? n : o, m), u ? r ? (r.input = r.input.slice(p), r[0] = r[0].slice(p), r.index = o.lastIndex, o.lastIndex += r[0].length) : o.lastIndex = 0 : c && r && (o.lastIndex = o.global ? r.index + r[0].length : t), d && r && r.length > 1 && l.call(r[0], n, (function() {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (r[a] = void 0)
                })), r
            }), e.exports = u
        },
        "94ca": function(e, t, n) {
            var r = n("d039"),
                a = /#|\.prototype\./,
                i = function(e, t) {
                    var n = s[o(e)];
                    return n == u || n != l && ("function" == typeof t ? r(t) : !!t)
                },
                o = i.normalize = function(e) {
                    return String(e).replace(a, ".").toLowerCase()
                },
                s = i.data = {},
                l = i.NATIVE = "N",
                u = i.POLYFILL = "P";
            e.exports = i
        },
        "99af": function(e, t, n) {
            var r = n("23e7"),
                a = n("d039"),
                i = n("e8b5"),
                o = n("861d"),
                s = n("7b0b"),
                l = n("50c4"),
                u = n("8418"),
                c = n("65f0"),
                f = n("1dde"),
                d = n("b622"),
                h = n("2d00"),
                g = d("isConcatSpreadable"),
                p = 9007199254740991,
                m = "Maximum allowed index exceeded",
                v = h >= 51 || !a((function() {
                    var e = [];
                    return e[g] = !1, e.concat()[0] !== e
                })),
                C = f("concat"),
                E = function(e) {
                    if (!o(e)) return !1;
                    var t = e[g];
                    return void 0 !== t ? !!t : i(e)
                };
            r({
                target: "Array",
                proto: !0,
                forced: !v || !C
            }, {
                concat: function(e) {
                    var t, n, r, a, i, o = s(this),
                        f = c(o, 0),
                        d = 0;
                    for (t = -1, r = arguments.length; t < r; t++)
                        if (E(i = -1 === t ? o : arguments[t])) {
                            if (d + (a = l(i.length)) > p) throw TypeError(m);
                            for (n = 0; n < a; n++, d++) n in i && u(f, d, i[n])
                        } else {
                            if (d >= p) throw TypeError(m);
                            u(f, d++, i)
                        } return f.length = d, f
                }
            })
        },
        "9bdd": function(e, t, n) {
            var r = n("825a");
            e.exports = function(e, t, n, a) {
                try {
                    return a ? t(r(n)[0], n[1]) : t(n)
                } catch (o) {
                    var i = e.return;
                    throw void 0 !== i && r(i.call(e)), o
                }
            }
        },
        "9bf2": function(e, t, n) {
            var r = n("83ab"),
                a = n("0cfb"),
                i = n("825a"),
                o = n("c04e"),
                s = Object.defineProperty;
            t.f = r ? s : function(e, t, n) {
                if (i(e), t = o(t, !0), i(n), a) try {
                    return s(e, t, n)
                } catch (r) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        "9ed3": function(e, t, n) {
            var r = n("ae93").IteratorPrototype,
                a = n("7c73"),
                i = n("5c6c"),
                o = n("d44e"),
                s = n("3f8c"),
                l = function() {
                    return this
                };
            e.exports = function(e, t, n) {
                var u = t + " Iterator";
                return e.prototype = a(r, {
                    next: i(1, n)
                }), o(e, u, !1, !0), s[u] = l, e
            }
        },
        "9f7f": function(e, t, n) {
            var r = n("d039");

            function a(e, t) {
                return RegExp(e, t)
            }
            t.UNSUPPORTED_Y = r((function() {
                var e = a("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })), t.BROKEN_CARET = r((function() {
                var e = a("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        a2bf: function(e, t, n) {
            var r = n("e8b5"),
                a = n("50c4"),
                i = n("0366"),
                o = function(e, t, n, s, l, u, c, f) {
                    for (var d, h = l, g = 0, p = !!c && i(c, f, 3); g < s;) {
                        if (g in n) {
                            if (d = p ? p(n[g], g, t) : n[g], u > 0 && r(d)) h = o(e, t, d, a(d.length), h, u - 1) - 1;
                            else {
                                if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                                e[h] = d
                            }
                            h++
                        }
                        g++
                    }
                    return h
                };
            e.exports = o
        },
        a352: function(e, n) {
            e.exports = t
        },
        a434: function(e, t, n) {
            var r = n("23e7"),
                a = n("23cb"),
                i = n("a691"),
                o = n("50c4"),
                s = n("7b0b"),
                l = n("65f0"),
                u = n("8418"),
                c = n("1dde"),
                f = n("ae40"),
                d = c("splice"),
                h = f("splice", {
                    ACCESSORS: !0,
                    0: 0,
                    1: 2
                }),
                g = Math.max,
                p = Math.min,
                m = 9007199254740991,
                v = "Maximum allowed length exceeded";
            r({
                target: "Array",
                proto: !0,
                forced: !d || !h
            }, {
                splice: function(e, t) {
                    var n, r, c, f, d, h, C = s(this),
                        E = o(C.length),
                        F = a(e, E),
                        y = arguments.length;
                    if (0 === y ? n = r = 0 : 1 === y ? (n = 0, r = E - F) : (n = y - 2, r = p(g(i(t), 0), E - F)), E + n - r > m) throw TypeError(v);
                    for (c = l(C, r), f = 0; f < r; f++)(d = F + f) in C && u(c, f, C[d]);
                    if (c.length = r, n < r) {
                        for (f = F; f < E - r; f++) h = f + n, (d = f + r) in C ? C[h] = C[d] : delete C[h];
                        for (f = E; f > E - r + n; f--) delete C[f - 1]
                    } else if (n > r)
                        for (f = E - r; f > F; f--) h = f + n - 1, (d = f + r - 1) in C ? C[h] = C[d] : delete C[h];
                    for (f = 0; f < n; f++) C[f + F] = arguments[f + 2];
                    return C.length = E - r + n, c
                }
            })
        },
        a4d3: function(e, t, n) {
            var r = n("23e7"),
                a = n("da84"),
                i = n("d066"),
                o = n("c430"),
                s = n("83ab"),
                l = n("4930"),
                u = n("fdbf"),
                c = n("d039"),
                f = n("5135"),
                d = n("e8b5"),
                h = n("861d"),
                g = n("825a"),
                p = n("7b0b"),
                m = n("fc6a"),
                v = n("c04e"),
                C = n("5c6c"),
                E = n("7c73"),
                F = n("df75"),
                y = n("241c"),
                A = n("057f"),
                D = n("7418"),
                _ = n("06cf"),
                b = n("9bf2"),
                B = n("d1e7"),
                I = n("9112"),
                x = n("6eeb"),
                w = n("5692"),
                S = n("f772"),
                T = n("d012"),
                O = n("90e3"),
                k = n("b622"),
                M = n("e538"),
                N = n("746f"),
                P = n("d44e"),
                L = n("69f3"),
                Y = n("b727").forEach,
                G = S("hidden"),
                R = "Symbol",
                H = k("toPrimitive"),
                Z = L.set,
                j = L.getterFor(R),
                z = Object.prototype,
                U = a.Symbol,
                X = i("JSON", "stringify"),
                V = _.f,
                W = b.f,
                $ = A.f,
                J = B.f,
                K = w("symbols"),
                Q = w("op-symbols"),
                q = w("string-to-symbol-registry"),
                ee = w("symbol-to-string-registry"),
                te = w("wks"),
                ne = a.QObject,
                re = !ne || !ne.prototype || !ne.prototype.findChild,
                ae = s && c((function() {
                    return 7 != E(W({}, "a", {
                        get: function() {
                            return W(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? function(e, t, n) {
                    var r = V(z, t);
                    r && delete z[t], W(e, t, n), r && e !== z && W(z, t, r)
                } : W,
                ie = function(e, t) {
                    var n = K[e] = E(U.prototype);
                    return Z(n, {
                        type: R,
                        tag: e,
                        description: t
                    }), s || (n.description = t), n
                },
                oe = u ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    return Object(e) instanceof U
                },
                se = function(e, t, n) {
                    e === z && se(Q, t, n), g(e);
                    var r = v(t, !0);
                    return g(n), f(K, r) ? (n.enumerable ? (f(e, G) && e[G][r] && (e[G][r] = !1), n = E(n, {
                        enumerable: C(0, !1)
                    })) : (f(e, G) || W(e, G, C(1, {})), e[G][r] = !0), ae(e, r, n)) : W(e, r, n)
                },
                le = function(e, t) {
                    g(e);
                    var n = m(t),
                        r = F(n).concat(de(n));
                    return Y(r, (function(t) {
                        s && !ue.call(n, t) || se(e, t, n[t])
                    })), e
                },
                ue = function(e) {
                    var t = v(e, !0),
                        n = J.call(this, t);
                    return !(this === z && f(K, t) && !f(Q, t)) && (!(n || !f(this, t) || !f(K, t) || f(this, G) && this[G][t]) || n)
                },
                ce = function(e, t) {
                    var n = m(e),
                        r = v(t, !0);
                    if (n !== z || !f(K, r) || f(Q, r)) {
                        var a = V(n, r);
                        return !a || !f(K, r) || f(n, G) && n[G][r] || (a.enumerable = !0), a
                    }
                },
                fe = function(e) {
                    var t = $(m(e)),
                        n = [];
                    return Y(t, (function(e) {
                        f(K, e) || f(T, e) || n.push(e)
                    })), n
                },
                de = function(e) {
                    var t = e === z,
                        n = $(t ? Q : m(e)),
                        r = [];
                    return Y(n, (function(e) {
                        !f(K, e) || t && !f(z, e) || r.push(K[e])
                    })), r
                };
            l || (U = function() {
                if (this instanceof U) throw TypeError("Symbol is not a constructor");
                var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                    t = O(e),
                    n = function(e) {
                        this === z && n.call(Q, e), f(this, G) && f(this[G], t) && (this[G][t] = !1), ae(this, t, C(1, e))
                    };
                return s && re && ae(z, t, {
                    configurable: !0,
                    set: n
                }), ie(t, e)
            }, x(U.prototype, "toString", (function() {
                return j(this).tag
            })), x(U, "withoutSetter", (function(e) {
                return ie(O(e), e)
            })), B.f = ue, b.f = se, _.f = ce, y.f = A.f = fe, D.f = de, M.f = function(e) {
                return ie(k(e), e)
            }, s && (W(U.prototype, "description", {
                configurable: !0,
                get: function() {
                    return j(this).description
                }
            }), o || x(z, "propertyIsEnumerable", ue, {
                unsafe: !0
            }))), r({
                global: !0,
                wrap: !0,
                forced: !l,
                sham: !l
            }, {
                Symbol: U
            }), Y(F(te), (function(e) {
                N(e)
            })), r({
                target: R,
                stat: !0,
                forced: !l
            }, {
                for: function(e) {
                    var t = String(e);
                    if (f(q, t)) return q[t];
                    var n = U(t);
                    return q[t] = n, ee[n] = t, n
                },
                keyFor: function(e) {
                    if (!oe(e)) throw TypeError(e + " is not a symbol");
                    if (f(ee, e)) return ee[e]
                },
                useSetter: function() {
                    re = !0
                },
                useSimple: function() {
                    re = !1
                }
            }), r({
                target: "Object",
                stat: !0,
                forced: !l,
                sham: !s
            }, {
                create: function(e, t) {
                    return void 0 === t ? E(e) : le(E(e), t)
                },
                defineProperty: se,
                defineProperties: le,
                getOwnPropertyDescriptor: ce
            }), r({
                target: "Object",
                stat: !0,
                forced: !l
            }, {
                getOwnPropertyNames: fe,
                getOwnPropertySymbols: de
            }), r({
                target: "Object",
                stat: !0,
                forced: c((function() {
                    D.f(1)
                }))
            }, {
                getOwnPropertySymbols: function(e) {
                    return D.f(p(e))
                }
            }), X && r({
                target: "JSON",
                stat: !0,
                forced: !l || c((function() {
                    var e = U();
                    return "[null]" != X([e]) || "{}" != X({
                        a: e
                    }) || "{}" != X(Object(e))
                }))
            }, {
                stringify: function(e, t, n) {
                    for (var r, a = [e], i = 1; arguments.length > i;) a.push(arguments[i++]);
                    if (r = t, (h(t) || void 0 !== e) && !oe(e)) return d(t) || (t = function(e, t) {
                        if ("function" == typeof r && (t = r.call(this, e, t)), !oe(t)) return t
                    }), a[1] = t, X.apply(null, a)
                }
            }), U.prototype[H] || I(U.prototype, H, U.prototype.valueOf), P(U, R), T[G] = !0
        },
        a630: function(e, t, n) {
            var r = n("23e7"),
                a = n("4df4");
            r({
                target: "Array",
                stat: !0,
                forced: !n("1c7e")((function(e) {
                    Array.from(e)
                }))
            }, {
                from: a
            })
        },
        a640: function(e, t, n) {
            var r = n("d039");
            e.exports = function(e, t) {
                var n = [][e];
                return !!n && r((function() {
                    n.call(null, t || function() {
                        throw 1
                    }, 1)
                }))
            }
        },
        a691: function(e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
            }
        },
        ab13: function(e, t, n) {
            var r = n("b622")("match");
            e.exports = function(e) {
                var t = /./;
                try {
                    "/./" [e](t)
                } catch (nh) {
                    try {
                        return t[r] = !1, "/./" [e](t)
                    } catch (n) {}
                }
                return !1
            }
        },
        ac1f: function(e, t, n) {
            var r = n("23e7"),
                a = n("9263");
            r({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== a
            }, {
                exec: a
            })
        },
        ad6d: function(e, t, n) {
            var r = n("825a");
            e.exports = function() {
                var e = r(this),
                    t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
            }
        },
        ae40: function(e, t, n) {
            var r = n("83ab"),
                a = n("d039"),
                i = n("5135"),
                o = Object.defineProperty,
                s = {},
                l = function(e) {
                    throw e
                };
            e.exports = function(e, t) {
                if (i(s, e)) return s[e];
                t || (t = {});
                var n = [][e],
                    u = !!i(t, "ACCESSORS") && t.ACCESSORS,
                    c = i(t, 0) ? t[0] : l,
                    f = i(t, 1) ? t[1] : void 0;
                return s[e] = !!n && !a((function() {
                    if (u && !r) return !0;
                    var e = {
                        length: -1
                    };
                    u ? o(e, 1, {
                        enumerable: !0,
                        get: l
                    }) : e[1] = 1, n.call(e, c, f)
                }))
            }
        },
        ae93: function(e, t, n) {
            var r, a, i, o = n("e163"),
                s = n("9112"),
                l = n("5135"),
                u = n("b622"),
                c = n("c430"),
                f = u("iterator"),
                d = !1;
            [].keys && ("next" in (i = [].keys()) ? (a = o(o(i))) !== Object.prototype && (r = a) : d = !0), null == r && (r = {}), c || l(r, f) || s(r, f, (function() {
                return this
            })), e.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: d
            }
        },
        b041: function(e, t, n) {
            var r = n("00ee"),
                a = n("f5df");
            e.exports = r ? {}.toString : function() {
                return "[object " + a(this) + "]"
            }
        },
        b0c0: function(e, t, n) {
            var r = n("83ab"),
                a = n("9bf2").f,
                i = Function.prototype,
                o = i.toString,
                s = /^\s*function ([^ (]*)/,
                l = "name";
            r && !(l in i) && a(i, l, {
                configurable: !0,
                get: function() {
                    try {
                        return o.call(this).match(s)[1]
                    } catch (e) {
                        return ""
                    }
                }
            })
        },
        b622: function(e, t, n) {
            var r = n("da84"),
                a = n("5692"),
                i = n("5135"),
                o = n("90e3"),
                s = n("4930"),
                l = n("fdbf"),
                u = a("wks"),
                c = r.Symbol,
                f = l ? c : c && c.withoutSetter || o;
            e.exports = function(e) {
                return i(u, e) || (s && i(c, e) ? u[e] = c[e] : u[e] = f("Symbol." + e)), u[e]
            }
        },
        b64b: function(e, t, n) {
            var r = n("23e7"),
                a = n("7b0b"),
                i = n("df75");
            r({
                target: "Object",
                stat: !0,
                forced: n("d039")((function() {
                    i(1)
                }))
            }, {
                keys: function(e) {
                    return i(a(e))
                }
            })
        },
        b727: function(e, t, n) {
            var r = n("0366"),
                a = n("44ad"),
                i = n("7b0b"),
                o = n("50c4"),
                s = n("65f0"),
                l = [].push,
                u = function(e) {
                    var t = 1 == e,
                        n = 2 == e,
                        u = 3 == e,
                        c = 4 == e,
                        f = 6 == e,
                        d = 5 == e || f;
                    return function(h, g, p, m) {
                        for (var v, C, E = i(h), F = a(E), y = r(g, p, 3), A = o(F.length), D = 0, _ = m || s, b = t ? _(h, A) : n ? _(h, 0) : void 0; A > D; D++)
                            if ((d || D in F) && (C = y(v = F[D], D, E), e))
                                if (t) b[D] = C;
                                else if (C) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return D;
                            case 2:
                                l.call(b, v)
                        } else if (c) return !1;
                        return f ? -1 : u || c ? c : b
                    }
                };
            e.exports = {
                forEach: u(0),
                map: u(1),
                filter: u(2),
                some: u(3),
                every: u(4),
                find: u(5),
                findIndex: u(6)
            }
        },
        c04e: function(e, t, n) {
            var r = n("861d");
            e.exports = function(e, t) {
                if (!r(e)) return e;
                var n, a;
                if (t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a;
                if ("function" == typeof(n = e.valueOf) && !r(a = n.call(e))) return a;
                if (!t && "function" == typeof(n = e.toString) && !r(a = n.call(e))) return a;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        c430: function(e, t) {
            e.exports = !1
        },
        c6b6: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        c6cd: function(e, t, n) {
            var r = n("da84"),
                a = n("ce4e"),
                i = "__core-js_shared__",
                o = r[i] || a(i, {});
            e.exports = o
        },
        c740: function(e, t, n) {
            var r = n("23e7"),
                a = n("b727").findIndex,
                i = n("44d2"),
                o = n("ae40"),
                s = "findIndex",
                l = !0,
                u = o(s);
            s in [] && Array(1).findIndex((function() {
                l = !1
            })), r({
                target: "Array",
                proto: !0,
                forced: l || !u
            }, {
                findIndex: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), i(s)
        },
        c8ba: function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (nh) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        c975: function(e, t, n) {
            var r = n("23e7"),
                a = n("4d64").indexOf,
                i = n("a640"),
                o = n("ae40"),
                s = [].indexOf,
                l = !!s && 1 / [1].indexOf(1, -0) < 0,
                u = i("indexOf"),
                c = o("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                });
            r({
                target: "Array",
                proto: !0,
                forced: l || !u || !c
            }, {
                indexOf: function(e) {
                    return l ? s.apply(this, arguments) || 0 : a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        ca84: function(e, t, n) {
            var r = n("5135"),
                a = n("fc6a"),
                i = n("4d64").indexOf,
                o = n("d012");
            e.exports = function(e, t) {
                var n, s = a(e),
                    l = 0,
                    u = [];
                for (n in s) !r(o, n) && r(s, n) && u.push(n);
                for (; t.length > l;) r(s, n = t[l++]) && (~i(u, n) || u.push(n));
                return u
            }
        },
        caad: function(e, t, n) {
            var r = n("23e7"),
                a = n("4d64").includes,
                i = n("44d2");
            r({
                target: "Array",
                proto: !0,
                forced: !n("ae40")("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                })
            }, {
                includes: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), i("includes")
        },
        cc12: function(e, t, n) {
            var r = n("da84"),
                a = n("861d"),
                i = r.document,
                o = a(i) && a(i.createElement);
            e.exports = function(e) {
                return o ? i.createElement(e) : {}
            }
        },
        ce4e: function(e, t, n) {
            var r = n("da84"),
                a = n("9112");
            e.exports = function(e, t) {
                try {
                    a(r, e, t)
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        },
        d012: function(e, t) {
            e.exports = {}
        },
        d039: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (t) {
                    return !0
                }
            }
        },
        d066: function(e, t, n) {
            var r = n("428f"),
                a = n("da84"),
                i = function(e) {
                    return "function" == typeof e ? e : void 0
                };
            e.exports = function(e, t) {
                return arguments.length < 2 ? i(r[e]) || i(a[e]) : r[e] && r[e][t] || a[e] && a[e][t]
            }
        },
        d1e7: function(e, t, n) {
            var r = {}.propertyIsEnumerable,
                a = Object.getOwnPropertyDescriptor,
                i = a && !r.call({
                    1: 2
                }, 1);
            t.f = i ? function(e) {
                var t = a(this, e);
                return !!t && t.enumerable
            } : r
        },
        d28b: function(e, t, n) {
            n("746f")("iterator")
        },
        d2bb: function(e, t, n) {
            var r = n("825a"),
                a = n("3bbe");
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = !1,
                    n = {};
                try {
                    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
                } catch (i) {}
                return function(n, i) {
                    return r(n), a(i), t ? e.call(n, i) : n.__proto__ = i, n
                }
            }() : void 0)
        },
        d3b7: function(e, t, n) {
            var r = n("00ee"),
                a = n("6eeb"),
                i = n("b041");
            r || a(Object.prototype, "toString", i, {
                unsafe: !0
            })
        },
        d44e: function(e, t, n) {
            var r = n("9bf2").f,
                a = n("5135"),
                i = n("b622")("toStringTag");
            e.exports = function(e, t, n) {
                e && !a(e = n ? e : e.prototype, i) && r(e, i, {
                    configurable: !0,
                    value: t
                })
            }
        },
        d58f: function(e, t, n) {
            var r = n("1c0b"),
                a = n("7b0b"),
                i = n("44ad"),
                o = n("50c4"),
                s = function(e) {
                    return function(t, n, s, l) {
                        r(n);
                        var u = a(t),
                            c = i(u),
                            f = o(u.length),
                            d = e ? f - 1 : 0,
                            h = e ? -1 : 1;
                        if (s < 2)
                            for (;;) {
                                if (d in c) {
                                    l = c[d], d += h;
                                    break
                                }
                                if (d += h, e ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
                            }
                        for (; e ? d >= 0 : f > d; d += h) d in c && (l = n(l, c[d], d, u));
                        return l
                    }
                };
            e.exports = {
                left: s(!1),
                right: s(!0)
            }
        },
        d784: function(e, t, n) {
            n("ac1f");
            var r = n("6eeb"),
                a = n("d039"),
                i = n("b622"),
                o = n("9263"),
                s = n("9112"),
                l = i("species"),
                u = !a((function() {
                    var e = /./;
                    return e.exec = function() {
                        var e = [];
                        return e.groups = {
                            a: "7"
                        }, e
                    }, "7" !== "".replace(e, "$<a>")
                })),
                c = "$0" === "a".replace(/./, "$0"),
                f = i("replace"),
                d = !!/./ [f] && "" === /./ [f]("a", "$0"),
                h = !a((function() {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function() {
                        return t.apply(this, arguments)
                    };
                    var n = "ab".split(e);
                    return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
                }));
            e.exports = function(e, t, n, f) {
                var g = i(e),
                    p = !a((function() {
                        var t = {};
                        return t[g] = function() {
                            return 7
                        }, 7 != "" [e](t)
                    })),
                    m = p && !a((function() {
                        var t = !1,
                            n = /a/;
                        return "split" === e && ((n = {}).constructor = {}, n.constructor[l] = function() {
                            return n
                        }, n.flags = "", n[g] = /./ [g]), n.exec = function() {
                            return t = !0, null
                        }, n[g](""), !t
                    }));
                if (!p || !m || "replace" === e && (!u || !c || d) || "split" === e && !h) {
                    var v = /./ [g],
                        C = n(g, "" [e], (function(e, t, n, r, a) {
                            return t.exec === o ? p && !a ? {
                                done: !0,
                                value: v.call(t, n, r)
                            } : {
                                done: !0,
                                value: e.call(n, t, r)
                            } : {
                                done: !1
                            }
                        }), {
                            REPLACE_KEEPS_$0: c,
                            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                        }),
                        E = C[0],
                        F = C[1];
                    r(String.prototype, e, E), r(RegExp.prototype, g, 2 == t ? function(e, t) {
                        return F.call(e, this, t)
                    } : function(e) {
                        return F.call(e, this)
                    })
                }
                f && s(RegExp.prototype[g], "sham", !0)
            }
        },
        d81d: function(e, t, n) {
            var r = n("23e7"),
                a = n("b727").map,
                i = n("1dde"),
                o = n("ae40"),
                s = i("map"),
                l = o("map");
            r({
                target: "Array",
                proto: !0,
                forced: !s || !l
            }, {
                map: function(e) {
                    return a(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        da84: function(e, t, n) {
            (function(t) {
                var n = function(e) {
                    return e && e.Math == Math && e
                };
                e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
            }).call(this, n("c8ba"))
        },
        dbb4: function(e, t, n) {
            var r = n("23e7"),
                a = n("83ab"),
                i = n("56ef"),
                o = n("fc6a"),
                s = n("06cf"),
                l = n("8418");
            r({
                target: "Object",
                stat: !0,
                sham: !a
            }, {
                getOwnPropertyDescriptors: function(e) {
                    for (var t, n, r = o(e), a = s.f, u = i(r), c = {}, f = 0; u.length > f;) void 0 !== (n = a(r, t = u[f++])) && l(c, t, n);
                    return c
                }
            })
        },
        dbf1: function(e, t, n) {
            (function(e) {
                n.d(t, "a", (function() {
                    return r
                }));
                var r = "undefined" != typeof window ? window.console : e.console
            }).call(this, n("c8ba"))
        },
        ddb0: function(e, t, n) {
            var r = n("da84"),
                a = n("fdbc"),
                i = n("e260"),
                o = n("9112"),
                s = n("b622"),
                l = s("iterator"),
                u = s("toStringTag"),
                c = i.values;
            for (var f in a) {
                var d = r[f],
                    h = d && d.prototype;
                if (h) {
                    if (h[l] !== c) try {
                        o(h, l, c)
                    } catch (p) {
                        h[l] = c
                    }
                    if (h[u] || o(h, u, f), a[f])
                        for (var g in i)
                            if (h[g] !== i[g]) try {
                                o(h, g, i[g])
                            } catch (p) {
                                h[g] = i[g]
                            }
                }
            }
        },
        df75: function(e, t, n) {
            var r = n("ca84"),
                a = n("7839");
            e.exports = Object.keys || function(e) {
                return r(e, a)
            }
        },
        e01a: function(e, t, n) {
            var r = n("23e7"),
                a = n("83ab"),
                i = n("da84"),
                o = n("5135"),
                s = n("861d"),
                l = n("9bf2").f,
                u = n("e893"),
                c = i.Symbol;
            if (a && "function" == typeof c && (!("description" in c.prototype) || void 0 !== c().description)) {
                var f = {},
                    d = function() {
                        var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                            t = this instanceof d ? new c(e) : void 0 === e ? c() : c(e);
                        return "" === e && (f[t] = !0), t
                    };
                u(d, c);
                var h = d.prototype = c.prototype;
                h.constructor = d;
                var g = h.toString,
                    p = "Symbol(test)" == String(c("test")),
                    m = /^Symbol\((.*)\)[^)]+$/;
                l(h, "description", {
                    configurable: !0,
                    get: function() {
                        var e = s(this) ? this.valueOf() : this,
                            t = g.call(e);
                        if (o(f, e)) return "";
                        var n = p ? t.slice(7, -1) : t.replace(m, "$1");
                        return "" === n ? void 0 : n
                    }
                }), r({
                    global: !0,
                    forced: !0
                }, {
                    Symbol: d
                })
            }
        },
        e163: function(e, t, n) {
            var r = n("5135"),
                a = n("7b0b"),
                i = n("f772"),
                o = n("e177"),
                s = i("IE_PROTO"),
                l = Object.prototype;
            e.exports = o ? Object.getPrototypeOf : function(e) {
                return e = a(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null
            }
        },
        e177: function(e, t, n) {
            var r = n("d039");
            e.exports = !r((function() {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        },
        e260: function(e, t, n) {
            var r = n("fc6a"),
                a = n("44d2"),
                i = n("3f8c"),
                o = n("69f3"),
                s = n("7dd0"),
                l = "Array Iterator",
                u = o.set,
                c = o.getterFor(l);
            e.exports = s(Array, "Array", (function(e, t) {
                u(this, {
                    type: l,
                    target: r(e),
                    index: 0,
                    kind: t
                })
            }), (function() {
                var e = c(this),
                    t = e.target,
                    n = e.kind,
                    r = e.index++;
                return !t || r >= t.length ? (e.target = void 0, {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: r,
                    done: !1
                } : "values" == n ? {
                    value: t[r],
                    done: !1
                } : {
                    value: [r, t[r]],
                    done: !1
                }
            }), "values"), i.Arguments = i.Array, a("keys"), a("values"), a("entries")
        },
        e439: function(e, t, n) {
            var r = n("23e7"),
                a = n("d039"),
                i = n("fc6a"),
                o = n("06cf").f,
                s = n("83ab"),
                l = a((function() {
                    o(1)
                }));
            r({
                target: "Object",
                stat: !0,
                forced: !s || l,
                sham: !s
            }, {
                getOwnPropertyDescriptor: function(e, t) {
                    return o(i(e), t)
                }
            })
        },
        e538: function(e, t, n) {
            var r = n("b622");
            t.f = r
        },
        e893: function(e, t, n) {
            var r = n("5135"),
                a = n("56ef"),
                i = n("06cf"),
                o = n("9bf2");
            e.exports = function(e, t) {
                for (var n = a(t), s = o.f, l = i.f, u = 0; u < n.length; u++) {
                    var c = n[u];
                    r(e, c) || s(e, c, l(t, c))
                }
            }
        },
        e8b5: function(e, t, n) {
            var r = n("c6b6");
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        e95a: function(e, t, n) {
            var r = n("b622"),
                a = n("3f8c"),
                i = r("iterator"),
                o = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (a.Array === e || o[i] === e)
            }
        },
        f5df: function(e, t, n) {
            var r = n("00ee"),
                a = n("c6b6"),
                i = n("b622")("toStringTag"),
                o = "Arguments" == a(function() {
                    return arguments
                }());
            e.exports = r ? a : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (n) {}
                }(t = Object(e), i)) ? n : o ? a(t) : "Object" == (r = a(t)) && "function" == typeof t.callee ? "Arguments" : r
            }
        },
        f772: function(e, t, n) {
            var r = n("5692"),
                a = n("90e3"),
                i = r("keys");
            e.exports = function(e) {
                return i[e] || (i[e] = a(e))
            }
        },
        fb15: function(e, t, n) {
            if (n.r(t), "undefined" != typeof window) {
                var r = window.document.currentScript,
                    a = n("8875");
                r = a(), "currentScript" in document || Object.defineProperty(document, "currentScript", {
                    get: a
                });
                var i = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                i && (n.p = i[1])
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                }
            }

            function f(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                        } catch (l) {
                            a = !0, i = l
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return n
                    }
                }(e, t) || c(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || c(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n("99af"), n("4de4"), n("4160"), n("c975"), n("d81d"), n("a434"), n("159b"), n("a4d3"), n("e439"), n("dbb4"), n("b64b"), n("e01a"), n("d28b"), n("e260"), n("d3b7"), n("3ca3"), n("ddb0"), n("a630"), n("fb6a"), n("b0c0"), n("25f0");
            var h = n("a352"),
                g = n.n(h);

            function p(e) {
                null !== e.parentElement && e.parentElement.removeChild(e)
            }

            function m(e, t, n) {
                var r = 0 === n ? e.children[0] : e.children[n - 1].nextSibling;
                e.insertBefore(t, r)
            }
            var v = n("dbf1");
            n("13d5"), n("4fad"), n("ac1f"), n("5319");
            var C, E, F = /-(\w)/g,
                y = (C = function(e) {
                    return e.replace(F, (function(e, t) {
                        return t.toUpperCase()
                    }))
                }, E = Object.create(null), function(e) {
                    return E[e] || (E[e] = C(e))
                });
            n("5db7"), n("73d9");
            var A = ["Start", "Add", "Remove", "Update", "End"],
                D = ["Choose", "Unchoose", "Sort", "Filter", "Clone"],
                _ = ["Move"],
                b = [_, A, D].flatMap((function(e) {
                    return e
                })).map((function(e) {
                    return "on".concat(e)
                })),
                B = {
                    manage: _,
                    manageAndEmit: A,
                    emit: D
                };
            n("caad"), n("2ca0");
            var I = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

            function x(e) {
                return ["id", "class", "role", "style"].includes(e) || e.startsWith("data-") || e.startsWith("aria-") || e.startsWith("on")
            }

            function w(e) {
                return e.reduce((function(e, t) {
                    var n = f(t, 2),
                        r = n[0],
                        a = n[1];
                    return e[r] = a, e
                }), {})
            }

            function S(e) {
                return Object.entries(e).filter((function(e) {
                    var t = f(e, 2),
                        n = t[0];
                    return t[1], !x(n)
                })).map((function(e) {
                    var t = f(e, 2),
                        n = t[0],
                        r = t[1];
                    return [y(n), r]
                })).filter((function(e) {
                    var t, n = f(e, 2),
                        r = n[0];
                    return n[1], t = r, !(-1 !== b.indexOf(t))
                }))
            }

            function T(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            n("c740");
            var O = function(e) {
                    return e.el
                },
                k = function(e) {
                    return e.__draggable_context
                },
                M = function() {
                    function e(t) {
                        var n = t.nodes,
                            r = n.header,
                            a = n.default,
                            i = n.footer,
                            o = t.root,
                            s = t.realList;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.defaultNodes = a, this.children = [].concat(d(r), d(a), d(i)), this.externalComponent = o.externalComponent, this.rootTransition = o.transition, this.tag = o.tag, this.realList = s
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "render",
                        value: function(e, t) {
                            var n = this.tag,
                                r = this.children;
                            return e(n, t, this._isRootComponent ? {
                                default: function() {
                                    return r
                                }
                            } : r)
                        }
                    }, {
                        key: "updated",
                        value: function() {
                            var e = this.defaultNodes,
                                t = this.realList;
                            e.forEach((function(e, n) {
                                var r, a;
                                r = O(e), a = {
                                    element: t[n],
                                    index: n
                                }, r.__draggable_context = a
                            }))
                        }
                    }, {
                        key: "getUnderlyingVm",
                        value: function(e) {
                            return k(e)
                        }
                    }, {
                        key: "getVmIndexFromDomIndex",
                        value: function(e, t) {
                            var n = this.defaultNodes,
                                r = n.length,
                                a = t.children,
                                i = a.item(e);
                            if (null === i) return r;
                            var o = k(i);
                            if (o) return o.index;
                            if (0 === r) return 0;
                            var s = O(n[0]);
                            return e < d(a).findIndex((function(e) {
                                return e === s
                            })) ? 0 : r
                        }
                    }, {
                        key: "_isRootComponent",
                        get: function() {
                            return this.externalComponent || this.rootTransition
                        }
                    }]) && T(t.prototype, n), r && T(t, r), e
                }(),
                N = n("8bbf");

            function P(e) {
                var t = ["transition-group", "TransitionGroup"].includes(e),
                    n = ! function(e) {
                        return I.includes(e)
                    }(e) && !t;
                return {
                    transition: t,
                    externalComponent: n,
                    tag: n ? Object(N.resolveComponent)(e) : t ? N.TransitionGroup : e
                }
            }

            function L(e) {
                var t = e.$slots,
                    n = e.tag,
                    r = e.realList,
                    a = function(e) {
                        var t = e.$slots,
                            n = e.realList,
                            r = e.getKey,
                            a = n || [],
                            i = f(["header", "footer"].map((function(e) {
                                return (n = t[e]) ? n() : [];
                                var n
                            })), 2),
                            o = i[0],
                            s = i[1],
                            u = t.item;
                        if (!u) throw new Error("draggable element must have an item slot");
                        var c = a.flatMap((function(e, t) {
                            return u({
                                element: e,
                                index: t
                            }).map((function(t) {
                                return t.key = r(e), t.props = l(l({}, t.props || {}), {}, {
                                    "data-draggable": !0
                                }), t
                            }))
                        }));
                        if (c.length !== a.length) throw new Error("Item slot must have only one child");
                        return {
                            header: o,
                            footer: s,
                            default: c
                        }
                    }({
                        $slots: t,
                        realList: r,
                        getKey: e.getKey
                    }),
                    i = P(n);
                return new M({
                    nodes: a,
                    root: i,
                    realList: r
                })
            }

            function Y(e, t) {
                var n = this;
                Object(N.nextTick)((function() {
                    return n.$emit(e.toLowerCase(), t)
                }))
            }

            function G(e) {
                var t = this;
                return function(n, r) {
                    if (null !== t.realList) return t["onDrag".concat(e)](n, r)
                }
            }

            function R(e) {
                var t = this,
                    n = G.call(this, e);
                return function(r, a) {
                    n.call(t, r, a), Y.call(t, e, r)
                }
            }
            var H = null,
                Z = {
                    list: {
                        type: Array,
                        required: !1,
                        default: null
                    },
                    modelValue: {
                        type: Array,
                        required: !1,
                        default: null
                    },
                    itemKey: {
                        type: [String, Function],
                        required: !0
                    },
                    clone: {
                        type: Function,
                        default: function(e) {
                            return e
                        }
                    },
                    tag: {
                        type: String,
                        default: "div"
                    },
                    move: {
                        type: Function,
                        default: null
                    },
                    componentData: {
                        type: Object,
                        required: !1,
                        default: null
                    }
                },
                j = ["update:modelValue", "change"].concat(d([].concat(d(B.manageAndEmit), d(B.emit)).map((function(e) {
                    return e.toLowerCase()
                })))),
                z = Object(N.defineComponent)({
                    name: "draggable",
                    inheritAttrs: !1,
                    props: Z,
                    emits: j,
                    data: function() {
                        return {
                            error: !1
                        }
                    },
                    render: function() {
                        try {
                            this.error = !1;
                            var e = this.$slots,
                                t = this.$attrs,
                                n = this.tag,
                                r = this.componentData,
                                a = L({
                                    $slots: e,
                                    tag: n,
                                    realList: this.realList,
                                    getKey: this.getKey
                                });
                            this.componentStructure = a;
                            var i = function(e) {
                                var t = e.$attrs,
                                    n = e.componentData,
                                    r = void 0 === n ? {} : n;
                                return l(l({}, w(Object.entries(t).filter((function(e) {
                                    var t = f(e, 2),
                                        n = t[0];
                                    return t[1], x(n)
                                })))), r)
                            }({
                                $attrs: t,
                                componentData: r
                            });
                            return a.render(N.h, i)
                        } catch (o) {
                            return this.error = !0, Object(N.h)("pre", {
                                style: {
                                    color: "red"
                                }
                            }, o.stack)
                        }
                    },
                    created: function() {
                        null !== this.list && null !== this.modelValue && v.a.error("modelValue and list props are mutually exclusive! Please set one or another.")
                    },
                    mounted: function() {
                        var e = this;
                        if (!this.error) {
                            var t = this.$attrs,
                                n = this.$el;
                            this.componentStructure.updated();
                            var r = function(e) {
                                    var t = e.$attrs,
                                        n = e.callBackBuilder,
                                        r = w(S(t));
                                    Object.entries(n).forEach((function(e) {
                                        var t = f(e, 2),
                                            n = t[0],
                                            a = t[1];
                                        B[n].forEach((function(e) {
                                            r["on".concat(e)] = a(e)
                                        }))
                                    }));
                                    var a = "[data-draggable]".concat(r.draggable || "");
                                    return l(l({}, r), {}, {
                                        draggable: a
                                    })
                                }({
                                    $attrs: t,
                                    callBackBuilder: {
                                        manageAndEmit: function(t) {
                                            return R.call(e, t)
                                        },
                                        emit: function(t) {
                                            return Y.bind(e, t)
                                        },
                                        manage: function(t) {
                                            return G.call(e, t)
                                        }
                                    }
                                }),
                                a = 1 === n.nodeType ? n : n.parentElement;
                            this._sortable = new g.a(a, r), this.targetDomElement = a, a.__draggable_component__ = this
                        }
                    },
                    updated: function() {
                        this.componentStructure.updated()
                    },
                    beforeUnmount: function() {
                        void 0 !== this._sortable && this._sortable.destroy()
                    },
                    computed: {
                        realList: function() {
                            var e = this.list;
                            return e || this.modelValue
                        },
                        getKey: function() {
                            var e = this.itemKey;
                            return "function" == typeof e ? e : function(t) {
                                return t[e]
                            }
                        }
                    },
                    watch: {
                        $attrs: {
                            handler: function(e) {
                                var t = this._sortable;
                                t && S(e).forEach((function(e) {
                                    var n = f(e, 2),
                                        r = n[0],
                                        a = n[1];
                                    t.option(r, a)
                                }))
                            },
                            deep: !0
                        }
                    },
                    methods: {
                        getUnderlyingVm: function(e) {
                            return this.componentStructure.getUnderlyingVm(e) || null
                        },
                        getUnderlyingPotencialDraggableComponent: function(e) {
                            return e.__draggable_component__
                        },
                        emitChanges: function(e) {
                            var t = this;
                            Object(N.nextTick)((function() {
                                return t.$emit("change", e)
                            }))
                        },
                        alterList: function(e) {
                            if (this.list) e(this.list);
                            else {
                                var t = d(this.modelValue);
                                e(t), this.$emit("update:modelValue", t)
                            }
                        },
                        spliceList: function() {
                            var e = arguments,
                                t = function(t) {
                                    return t.splice.apply(t, d(e))
                                };
                            this.alterList(t)
                        },
                        updatePosition: function(e, t) {
                            this.alterList((function(n) {
                                return n.splice(t, 0, n.splice(e, 1)[0])
                            }))
                        },
                        getRelatedContextFromMoveEvent: function(e) {
                            var t = e.to,
                                n = e.related,
                                r = this.getUnderlyingPotencialDraggableComponent(t);
                            if (!r) return {
                                component: r
                            };
                            var a = r.realList,
                                i = {
                                    list: a,
                                    component: r
                                };
                            return t !== n && a ? l(l({}, r.getUnderlyingVm(n) || {}), i) : i
                        },
                        getVmIndexFromDomIndex: function(e) {
                            return this.componentStructure.getVmIndexFromDomIndex(e, this.targetDomElement)
                        },
                        onDragStart: function(e) {
                            this.context = this.getUnderlyingVm(e.item), e.item._underlying_vm_ = this.clone(this.context.element), H = e.item
                        },
                        onDragAdd: function(e) {
                            var t = e.item._underlying_vm_;
                            if (void 0 !== t) {
                                p(e.item);
                                var n = this.getVmIndexFromDomIndex(e.newIndex);
                                this.spliceList(n, 0, t);
                                var r = {
                                    element: t,
                                    newIndex: n
                                };
                                this.emitChanges({
                                    added: r
                                })
                            }
                        },
                        onDragRemove: function(e) {
                            if (m(this.$el, e.item, e.oldIndex), "clone" !== e.pullMode) {
                                var t = this.context,
                                    n = t.index,
                                    r = t.element;
                                this.spliceList(n, 1);
                                var a = {
                                    element: r,
                                    oldIndex: n
                                };
                                this.emitChanges({
                                    removed: a
                                })
                            } else p(e.clone)
                        },
                        onDragUpdate: function(e) {
                            p(e.item), m(e.from, e.item, e.oldIndex);
                            var t = this.context.index,
                                n = this.getVmIndexFromDomIndex(e.newIndex);
                            this.updatePosition(t, n);
                            var r = {
                                element: this.context.element,
                                oldIndex: t,
                                newIndex: n
                            };
                            this.emitChanges({
                                moved: r
                            })
                        },
                        computeFutureIndex: function(e, t) {
                            if (!e.element) return 0;
                            var n = d(t.to.children).filter((function(e) {
                                    return "none" !== e.style.display
                                })),
                                r = n.indexOf(t.related),
                                a = e.component.getVmIndexFromDomIndex(r);
                            return -1 === n.indexOf(H) && t.willInsertAfter ? a + 1 : a
                        },
                        onDragMove: function(e, t) {
                            var n = this.move,
                                r = this.realList;
                            if (!n || !r) return !0;
                            var a = this.getRelatedContextFromMoveEvent(e),
                                i = this.computeFutureIndex(a, e),
                                o = l(l({}, this.context), {}, {
                                    futureIndex: i
                                });
                            return n(l(l({}, e), {}, {
                                relatedContext: a,
                                draggedContext: o
                            }), t)
                        },
                        onDragEnd: function() {
                            H = null
                        }
                    }
                }),
                U = z;
            t.default = U
        },
        fb6a: function(e, t, n) {
            var r = n("23e7"),
                a = n("861d"),
                i = n("e8b5"),
                o = n("23cb"),
                s = n("50c4"),
                l = n("fc6a"),
                u = n("8418"),
                c = n("b622"),
                f = n("1dde"),
                d = n("ae40"),
                h = f("slice"),
                g = d("slice", {
                    ACCESSORS: !0,
                    0: 0,
                    1: 2
                }),
                p = c("species"),
                m = [].slice,
                v = Math.max;
            r({
                target: "Array",
                proto: !0,
                forced: !h || !g
            }, {
                slice: function(e, t) {
                    var n, r, c, f = l(this),
                        d = s(f.length),
                        h = o(e, d),
                        g = o(void 0 === t ? d : t, d);
                    if (i(f) && ("function" != typeof(n = f.constructor) || n !== Array && !i(n.prototype) ? a(n) && null === (n = n[p]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return m.call(f, h, g);
                    for (r = new(void 0 === n ? Array : n)(v(g - h, 0)), c = 0; h < g; h++, c++) h in f && u(r, c, f[h]);
                    return r.length = c, r
                }
            })
        },
        fc6a: function(e, t, n) {
            var r = n("44ad"),
                a = n("1d80");
            e.exports = function(e) {
                return r(a(e))
            }
        },
        fdbc: function(e, t) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        },
        fdbf: function(e, t, n) {
            var r = n("4930");
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
    }).default
};
var ed = $n(Su.exports = Qf(Fo, Yn(qf)));

function td(e, t = 100, n = t) {
    if (!e) return e;
    let r = e && e.includes("?t=") ? "&" : "?";
    return !e || "svg" != e.split(".").pop() && e.includes("files.codelife.cc") ? `${e}${r}x-oss-process=image/resize,limit_0,m_fill,w_${t},h_${n}/quality,q_100` : e
}
var nd = [{
    key: "union-click.jd.com",
    newUrl: "https://www.itab.link/web/jd.html"
}, {
    key: "www.baidu.com",
    newUrl: "https://www.baidu.com/?tn=68018901_2_oem_dg"
}, {
    key: "//portal.qiniu.com",
    newUrl: "https://s.qiniu.com/naaI7f"
}, {
    key: "//ai.taobao.com",
    newUrl: "https://ai.taobao.com?pid=mm_54561194_2536750027_111828300388&union_lens=lensId%3APUB%401644727921%4021057ef3_09a7_17ef16c69e2_05aa%4001"
}, {
    key: "//s.click.taobao.com",
    newUrl: "https://ai.taobao.com?pid=mm_54561194_2536750027_111828300388&union_lens=lensId%3APUB%401644727921%4021057ef3_09a7_17ef16c69e2_05aa%4001"
}];
const rd = {},
    ad = e => ($e("data-v-20b26250"), e = e(), Ve(), e),
    id = {
        class: "icon-error f13 al d-flex-center"
    },
    od = ad((() => se("p", null, [he(" 当前iTab版本过低 "), se("br"), he("还未内置此组件 "), se("br"), he("请到官网升级到最新版 ")], -1))),
    sd = ad((() => se("a", {
        style: {
            color: "#fff"
        },
        href: "https://www.itab.link/",
        target: "_blank"
    }, "www.itab.link", -1)));
var ld = Ln(rd, [
    ["render", function(e, t) {
        const n = et("el-button");
        return Xe(), oe("div", id, [se("span", null, [od, ge(n, {
            type: "primary",
            size: "small",
            class: "mt5"
        }, {
            default: Dt((() => [sd])),
            _: 1
        })])])
    }],
    ["__scopeId", "data-v-20b26250"]
]);
const ud = ["id"],
    cd = {
        key: 0,
        class: "ac",
        style: {
            "pointer-events": "auto",
            color: "#fff"
        }
    },
    fd = (e => ($e("data-v-2b746a24"), e = e(), Ve(), e))((() => se("p", {
        class: "mt20"
    }, "这个分组还空空如也！点击下面按钮开始添加吧！", -1))),
    dd = ["onContextmenu", "onClick", "onMouseup", "title"],
    hd = ["src", "alt"],
    gd = ["onClick"],
    pd = {
        class: "app-item-title d-elip"
    },
    md = {
        props: {
            data: {
                type: Object,
                default: []
            },
            isBatchEditIcon: {
                type: Boolean,
                default: !1
            },
            id: [Number, String],
            index: Number,
            size: String,
            touchDisabled: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["iconContextMenu", "betchDelIcon", "utlTo", "start", "end"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                a = wu(),
                i = On(),
                {
                    appContext: o
                } = ye(),
                {
                    t: s
                } = Ll(),
                l = x(null);
            t({
                scrollbarRef: l
            }), setTimeout((() => {
                r.data.forEach(((e, t) => {
                    e || (r.data[t] = {})
                })), nd.forEach((e => {
                    let t = r.data.find((t => t.url && t.url.includes(e.key)));
                    t && (t.url = e.newUrl)
                }))
            }), 200);
            const u = e => {
                    let t = e.component.replace("app-", ""),
                        n = e.config && e.config.icon || "",
                        r = `${t}-icon${n}`;
                    return Object.keys(o.components).includes(r) ? r : (function(e) {
                        switch (e) {
                            case "../views/DialogApp/app/bookmarks/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Rd
                                }))), void 0);
                            case "../views/DialogApp/app/calendar/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return ah
                                }))), void 0);
                            case "../views/DialogApp/app/daysMatter/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return mh
                                }))), void 0);
                            case "../views/DialogApp/app/daysMatter/icon/icon2.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Fh
                                }))), void 0);
                            case "../views/DialogApp/app/daysMatter/icon/icon3.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return xh
                                }))), void 0);
                            case "../views/DialogApp/app/daysMatter/icon/icon4.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Th
                                }))), void 0);
                            case "../views/DialogApp/app/habit/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Xh
                                }))), void 0);
                            case "../views/DialogApp/app/ip/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return qh
                                }))), void 0);
                            case "../views/DialogApp/app/jikipedia/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return gg
                                }))), void 0);
                            case "../views/DialogApp/app/multiavatar/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Ag
                                }))), void 0);
                            case "../views/DialogApp/app/notes/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return xg
                                }))), void 0);
                            case "../views/DialogApp/app/remai/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Xg
                                }))), void 0);
                            case "../views/DialogApp/app/robot/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return cp
                                }))), void 0);
                            case "../views/DialogApp/app/stock/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Bp
                                }))), void 0);
                            case "../views/DialogApp/app/todo/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return kp
                                }))), void 0);
                            case "../views/DialogApp/app/topsearch/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Xp
                                }))), void 0);
                            case "../views/DialogApp/app/uppercase/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Kp
                                }))), void 0);
                            case "../views/DialogApp/app/wallpaper/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return tm
                                }))), void 0);
                            case "../views/DialogApp/app/weather/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Pm
                                }))), void 0);
                            case "../views/DialogApp/app/xiayigejiaqi/icon/icon.vue":
                                return dr((() => Promise.resolve().then((function() {
                                    return Km
                                }))), void 0);
                            default:
                                return new Promise((function(t, n) {
                                    ("function" == typeof queueMicrotask ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + e)))
                                }))
                        }
                    }(`../views/DialogApp/app/${t}/icon/icon${n}.vue`).then((t => {
                        let n = `${e.component.replace("app-","")}-icon${e.config&&e.config.icon||""}`;
                        Object.keys(o.components).includes(n) || o.app.component(n, t.default)
                    })), pe({
                        loader: () => function(e) {
                            switch (e) {
                                case "../views/DialogApp/app/bookmarks/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Rd
                                    }))), void 0);
                                case "../views/DialogApp/app/calendar/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return ah
                                    }))), void 0);
                                case "../views/DialogApp/app/daysMatter/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return mh
                                    }))), void 0);
                                case "../views/DialogApp/app/daysMatter/icon/icon2.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Fh
                                    }))), void 0);
                                case "../views/DialogApp/app/daysMatter/icon/icon3.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return xh
                                    }))), void 0);
                                case "../views/DialogApp/app/daysMatter/icon/icon4.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Th
                                    }))), void 0);
                                case "../views/DialogApp/app/habit/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Xh
                                    }))), void 0);
                                case "../views/DialogApp/app/ip/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return qh
                                    }))), void 0);
                                case "../views/DialogApp/app/jikipedia/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return gg
                                    }))), void 0);
                                case "../views/DialogApp/app/multiavatar/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Ag
                                    }))), void 0);
                                case "../views/DialogApp/app/notes/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return xg
                                    }))), void 0);
                                case "../views/DialogApp/app/remai/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Xg
                                    }))), void 0);
                                case "../views/DialogApp/app/robot/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return cp
                                    }))), void 0);
                                case "../views/DialogApp/app/stock/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Bp
                                    }))), void 0);
                                case "../views/DialogApp/app/todo/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return kp
                                    }))), void 0);
                                case "../views/DialogApp/app/topsearch/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Xp
                                    }))), void 0);
                                case "../views/DialogApp/app/uppercase/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Kp
                                    }))), void 0);
                                case "../views/DialogApp/app/wallpaper/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return tm
                                    }))), void 0);
                                case "../views/DialogApp/app/weather/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Pm
                                    }))), void 0);
                                case "../views/DialogApp/app/xiayigejiaqi/icon/icon.vue":
                                    return dr((() => Promise.resolve().then((function() {
                                        return Km
                                    }))), void 0);
                                default:
                                    return new Promise((function(t, n) {
                                        ("function" == typeof queueMicrotask ? queueMicrotask : setTimeout)(n.bind(null, new Error("Unknown variable dynamic import: " + e)))
                                    }))
                            }
                        }(`../views/DialogApp/app/${t}/icon/icon${n}.vue`),
                        errorComponent: ld,
                        suspensible: !0
                    }))
                },
                c = B({
                    isBatchEditIcon: !1,
                    isDrag: !1,
                    dragGroupId: null,
                    sidebarAutoHideStatus: !1
                }),
                f = e => {
                    console.log("onStart"), c.isDrag = !0, n("start"), Lo("#app-icon-grid-wrap").style.setProperty("--icon-transition-duration", "0"), c.sidebarAutoHideStatus = i.value.sidebar.autoHide, i.value.sidebar.autoHide = !1
                },
                d = e => {
                    console.log("onEnd"), i.value.sidebar.autoHide = c.sidebarAutoHideStatus, n("end"), setTimeout((() => {
                        c.isDrag = !1, Lo("#app-icon-grid-wrap").style.setProperty("--icon-transition-duration", ".3s")
                    }), 100), e.newIndex != e.oldIndex && Kn("navConfig")
                };

            function h(e) {
                const {
                    marginLeft: t,
                    marginTop: n,
                    width: r,
                    height: a
                } = window.getComputedStyle(e);
                e.style.left = e.offsetLeft - parseFloat(t, 10) + "px", e.style.top = e.offsetTop - parseFloat(n, 10) + "px", e.style.width = r, e.style.height = a
            }
            return (t, i) => (Xe(), oe("div", {
                onDragover: i[2] || (i[2] = Vt((() => {}), ["prevent"])),
                ref_key: "scrollbarRef",
                ref: l,
                class: "hfull d-scrollbar-hide d-auto-y",
                id: `app-grid_${r.id}`
            }, [r.data.length ? ie("", !0) : (Xe(), oe("div", cd, [fd, se("button", {
                class: "mt20 add-button",
                onClick: i[0] || (i[0] = e => L(a).setDialogIcon())
            }, j(L(s)("addIcon")), 1)])), ge(L(ed), {
                disabled: L(ao) && r.touchDisabled,
                onStart: f,
                onEnd: d,
                class: "app-grid",
                tag: "transition-group",
                "component-data": {
                    tag: "ul",
                    name: "flip-li"
                },
                list: r.data,
                animation: "300",
                group: "icon-list",
                "item-key": "id",
                onBeforeLeave: h
            }, {
                item: Dt((({
                    element: t = {},
                    index: a
                }) => [se("div", {
                    class: R(["app-item", [`is-${e.size||t&&t.size||"mini"}`]])
                }, [se("div", {
                    class: R([{
                        swing: e.isBatchEditIcon
                    }, "app-item-icon"]),
                    onContextmenu: Vt((e => {
                        n("iconContextMenu", e, t)
                    }), ["prevent", "stop"]),
                    onClick: e => {
                        return r = e, a = t, void(c.isDrag || n("utlTo", r, a));
                        var r, a
                    },
                    onMouseup: e => {
                        return n = e, r = t, void(c.isDrag || 1 === n.button && window.open(r.url, "_blank"));
                        var n, r
                    },
                    title: t && t.name
                }, [t && "component" == t.type ? (Xe(), ae(nt(u(t)), {
                    key: 0,
                    data: t.config,
                    size: e.size || t && t.size
                }, null, 8, ["data", "size"])) : ie("", !0), t && "icon" == t.type ? (Xe(), oe("img", {
                    key: 1,
                    style: Z(`--icon-bg-color:${t.backgroundColor}`),
                    class: "app-item-img",
                    src: L(td)(t.src, 150),
                    alt: t.name
                }, null, 12, hd)) : ie("", !0), t && "text" == t.type ? (Xe(), ae(Jn, {
                    key: 2,
                    bgColor: t.backgroundColor,
                    text: t.iconText
                }, null, 8, ["bgColor", "text"])) : ie("", !0)], 42, dd), se("div", {
                    class: "icon-item-delete d-flex-center",
                    onMouseup: i[1] || (i[1] = Vt((() => {}), ["stop"])),
                    onClick: e => function(e, t) {
                        n("betchDelIcon", e, t, r.data)
                    }(a, t)
                }, [ge(L(gn), {
                    size: 14
                }, {
                    default: Dt((() => [ge(L(ka))])),
                    _: 1
                })], 40, gd), se("p", pd, j(t && t.config && t.config.name || t && t.name), 1)], 2)])),
                _: 1
            }, 8, ["disabled", "list"])], 40, ud))
        }
    };
var vd = Ln(md, [
    ["__scopeId", "data-v-2b746a24"]
]);
const Cd = {
        class: "app-icon-grid-wrap d-auto-y",
        style: {
            "--icon-transition-duration": ".3s"
        },
        id: "app-icon-grid-wrap"
    },
    Ed = (e => ($e("data-v-2f0e7b7e"), e = e(), Ve(), e))((() => se("p", {
        class: "b f18"
    }, [he(" 网页版不支持此功能 "), se("br"), he("请安装浏览器扩展后再使用 ")], -1))),
    Fd = {
        setup(e) {
            const t = Vn(),
                n = On(),
                r = x(null),
                a = wu(),
                {
                    t: i
                } = Ll(),
                o = {
                    groupId: "",
                    index: "",
                    data: {}
                },
                s = B({
                    isDrag: !1,
                    activeName: null,
                    menuRowData: {},
                    editIconVisibel: !1,
                    editItem: {},
                    isBatchEditIcon: !1,
                    browserGuideVisible: !1,
                    touchDisabled: !0,
                    contextmenuData: [{
                        name: "在新标签页打开",
                        key: "open"
                    }, {
                        name: i("small"),
                        key: "mini"
                    }, {
                        name: i("medium"),
                        key: "small"
                    }, {
                        name: i("large"),
                        key: "medium",
                        group: !0
                    }, {
                        name: i("edit"),
                        key: "edit",
                        icon: "edit"
                    }, {
                        name: "批量编辑",
                        key: "batchEdit",
                        icon: "edit"
                    }, {
                        name: i("remove"),
                        key: "del",
                        icon: "remove"
                    }],
                    dragGroupId: null,
                    sidebarAutoHideStatus: !1
                }),
                l = re((() => s.menuRowData.component ? s.contextmenuData.filter((e => "open" != e.key)) : s.contextmenuData));

            function u() {
                s.isDrag = !0
            }

            function c() {
                s.isDrag = !1
            }

            function f(e, t) {
                s.activeName = t.size || "mini", s.menuRowData = t, r.value.open(e)
            }

            function d(e) {
                if (["mini", "small", "medium"].includes(e.key)) s.menuRowData.size = e.key;
                else if ("edit" === e.key) {
                    if ("component" == s.menuRowData.type) return void("daysMatter" === s.menuRowData.component ? a.setDialogApp(s.menuRowData.component, s.menuRowData.config) : ElMessage.warning("此组件不支持编辑"));
                    s.editIconVisibel = !0, s.editItem = s.menuRowData
                } else if ("open" == e.key) {
                    if (s.menuRowData.component) return void a.setDialogApp(s.menuRowData.component);
                    window.open(s.menuRowData.url, "_blank")
                } else if ("del" == e.key) {
                    let e = t.value.find((e => e.id == a.menuActiveId));
                    g(e.children.findIndex((e => e == s.menuRowData)), s.menuRowData, e.children), Kn("navConfig")
                } else "batchEdit" == e.key && (s.isBatchEditIcon = !0)
            }

            function h(e) {
                for (let t in e) s.menuRowData[t] = e[t] || "";
                s.editIconVisibel = !1, Kn("navConfig")
            }

            function g(e, n, r) {
                r.splice(e, 1), Qn(n.src), o.groupId = a.menuActiveId, o.index = e, o.data = n, Kn("navConfig"),
                    function(e) {
                        ElNotification.closeAll(), ElNotification({
                            customClass: "un-icon-del",
                            showClose: !1,
                            position: "bottom-left",
                            duration: 4500,
                            message: _e("p", {
                                style: "font-size:13px;color:#efefef"
                            }, [_e("span", null, `已删除"${e.name}"`), _e("i", {
                                style: "color: #007fff;margin-left:20px;cursor: pointer;",
                                onClick: () => {
                                    ! function() {
                                        let e = t.value.find((e => o.groupId === e.id));
                                        e.children.splice(o.index, 0, o.data), Kn("navConfig"), ElNotification.closeAll()
                                    }()
                                }
                            }, "撤销")])
                        })
                    }(n)
            }

            function p(e, t) {
                t.view++;
                let r = {
                    t: "event",
                    ec: t.name,
                    ea: "open",
                    el: "url"
                };
                Xo(r);
                let i = n.value.open && n.value.open.iconBlank ? "_blank" : "_self";
                if (!t || "itab://add" != t.url && "itab://store" != t.url)
                    if (t && "itab://setting" == t.url) a.setSettingHandle(2);
                    else {
                        if (!t.component) return (e.ctrlKey && 0 == e.button || 1 == e.button) && (i = "_blank"), t.url && t.url.includes("http") ? void window.open(t.url, i) : void(io() ? s.browserGuideVisible = !0 : chrome.tabs.create({
                            url: t.url
                        }));
                        a.setDialogApp(t.component)
                    }
                else a.setDialogIcon()
            }
            const m = re((() => a.menuActiveId)),
                v = x(null);
            Re((() => {
                No(document, "mouseup", A), No(document, "touchstart", E), No(document, "touchmove", y), No(document, "touchend", F)
            })), ze((() => {
                Po(document, "mouseup", A), Po(document, "touchstart", E), Po(document, "touchmove", y), Po(document, "touchend", F)
            }));
            let C = null;
            const E = () => {
                    clearTimeout(C), C = 0, C = setTimeout((() => {
                        s.isBatchEditIcon = !0, s.touchDisabled = !1
                    }), 500)
                },
                F = () => {
                    clearTimeout(C)
                },
                y = () => {
                    clearTimeout(C), C = null
                };

            function A(e) {
                Lo(".v-contextmenu").contains(e.target) || s.isBatchEditIcon && (s.isBatchEditIcon = !1, s.touchDisabled = !0)
            }
            let D = x(t.value.findIndex((e => e.id == a.menuActiveId)));
            return Ct((() => n.value.layout.view), (e => {
                "widget" == e && (D.value = t.value.findIndex((e => e.id == a.menuActiveId)))
            })), Ct((() => a.menuActiveId), (e => {
                v.value.setActiveItem && v.value.setActiveItem(e + "")
            })), (e, a) => (Xe(), oe("div", Cd, ["widget" == L(n).layout.view ? (Xe(), ae(L(Qr), {
                key: 0,
                class: "app-icon-grid",
                "initial-index": L(D),
                height: "100%",
                direction: "vertical",
                autoplay: !1,
                "indicator-position": "none",
                ref_key: "refCarousel",
                ref: v
            }, {
                default: Dt((() => [(Xe(!0), oe(V, null, Qe(L(t), ((e, t) => (Xe(), ae(L(qr), {
                    name: e.id + "",
                    key: e.id
                }, {
                    default: Dt((() => [L(s).isDrag || e.id == L(m) ? (Xe(), ae(vd, {
                        key: 0,
                        ref_for: !0,
                        ref: "iconGred",
                        touchDisabled: L(s).touchDisabled,
                        index: t,
                        id: e.id,
                        isBatchEditIcon: L(s).isBatchEditIcon,
                        style: {
                            "pointer-events": "auto"
                        },
                        onIconContextMenu: f,
                        onBetchDelIcon: g,
                        onUtlTo: p,
                        onStart: u,
                        onEnd: c,
                        data: e.children,
                        "onUpdate:data": t => e.children = t
                    }, null, 8, ["touchDisabled", "index", "id", "isBatchEditIcon", "data", "onUpdate:data"])) : ie("", !0)])),
                    _: 2
                }, 1032, ["name"])))), 128))])),
                _: 1
            }, 8, ["initial-index"])) : ie("", !0), ge(du, {
                uid: "homeIcon_3d233b",
                active: L(s).activeName,
                onClick: d,
                data: L(l),
                ref_key: "refContextmenu",
                ref: r
            }, null, 8, ["active", "data"]), L(s).editIconVisibel ? (Xe(), ae(nt(pe((() => dr((() => import("./IconEdit.71e1dd89.js")), ["assets/IconEdit.71e1dd89.js", "assets/el-button.0a4ba32a.js", "assets/el-dialog.4b8a03dc.js", "assets/el-overlay.ebdea840.js", "assets/index.8dc67c0c.js", "assets/CustomAdd.e21f8c96.js", "assets/d-color.c1dcbbce.js", "assets/el-input.b3ba137c.js", "assets/typescript.72bf8adc.js", "assets/index.f364da82.js", "assets/event.0bae16b8.js", "assets/index.b9023f44.js", "assets/validator.053f84bf.js", "assets/arrow-down.766403d3.js", "assets/ossClient.9167d04d.js", "assets/el-upload.57856de0.js", "assets/zoom-in.dd934e7d.js", "assets/index.c956e740.js", "assets/el-form-item.785a6e2e.js", "assets/_baseClone.a466ea06.js", "assets/_Uint8Array.d6bc81f7.js", "assets/isEqual.6fce44d5.js", "assets/_baseIsEqual.220044e7.js", "assets/InfoFilled.df704379.js", "assets/cloneDeep.436aab3d.js"])))), {
                key: 1,
                data: L(s).editItem,
                modelValue: L(s).editIconVisibel,
                "onUpdate:modelValue": a[0] || (a[0] = e => L(s).editIconVisibel = e),
                onAddCustomIcon: h
            }, null, 8, ["data", "modelValue"])) : ie("", !0), L(s).browserGuideVisible ? (Xe(), ae(nt(pe((() => dr((() => import("./BrowserGuide.259d8d46.js")), ["assets/BrowserGuide.259d8d46.js", "assets/el-button.0a4ba32a.js", "assets/el-dialog.4b8a03dc.js", "assets/el-overlay.ebdea840.js", "assets/index.8dc67c0c.js"])))), {
                key: 2,
                modelValue: L(s).browserGuideVisible,
                "onUpdate:modelValue": a[1] || (a[1] = e => L(s).browserGuideVisible = e)
            }, {
                default: Dt((() => [Ed])),
                _: 1
            }, 8, ["modelValue"])) : ie("", !0)]))
        }
    };
var yd = Ln(Fd, [
    ["__scopeId", "data-v-2f0e7b7e"]
]);
const Ad = On(),
    Dd = qn(),
    _d = x(!1);
Ct(_d, (e => {
    ke((() => {
        e ? document.querySelector("#keywordInput").focus() : document.querySelector(".se-input").focus()
    }))
}));
const bd = {
        id: "app-main",
        class: "app-main"
    },
    Bd = {
        key: 0
    };
var Id = Ln({
        setup(e) {
            const t = pe((() => dr((() => import("./index.5a0edeb5.js")), ["assets/index.5a0edeb5.js", "assets/el-button.0a4ba32a.js", "assets/el-dialog.4b8a03dc.js", "assets/el-overlay.ebdea840.js", "assets/index.8dc67c0c.js", "assets/cloneDeep.436aab3d.js", "assets/_baseClone.a466ea06.js", "assets/_Uint8Array.d6bc81f7.js", "assets/_baseFlatten.da583d6c.js", "assets/identity.737b3aaf.js", "assets/_baseOrderBy.99fbac09.js", "assets/_baseIsEqual.220044e7.js"]))),
                n = pe((() => dr((() => import("./HomeNavGroup.c6393fa6.js")), ["assets/HomeNavGroup.c6393fa6.js", "assets/el-button.0a4ba32a.js", "assets/el-input.b3ba137c.js", "assets/typescript.72bf8adc.js", "assets/el-overlay.ebdea840.js", "assets/el-avatar.cb4a201b.js", "assets/el-popover.5fb0ff22.js", "assets/el-popper.7e8f10c3.js", "assets/sponsor.d93fe792.js", "assets/el-dialog.4b8a03dc.js", "assets/index.8dc67c0c.js", "assets/index.2ebbd8b1.js", "assets/index.f364da82.js", "assets/event.0bae16b8.js", "assets/deprecation.bfd0cf7f.js", "assets/index.c956e740.js", "assets/index.1c036255.js", "assets/index.065a2d57.js", "assets/validator.053f84bf.js"]))),
                r = pe((() => dr((() => import("./HomeContextmenu.f3dd22a0.js")), ["assets/HomeContextmenu.f3dd22a0.js", "assets/index.6363f97d.js", "assets/el-button.0a4ba32a.js", "assets/wallpaper.344da765.js"]))),
                a = pe((() => dr((() => import("./HomeNotesFixed.cb9b19e5.js")), ["assets/HomeNotesFixed.cb9b19e5.js", "assets/el-button.0a4ba32a.js", "assets/timeFormat.9fb4ebd1.js", "assets/PinOff16Regular.78f8bd58.js"]))),
                i = pe((() => dr((() => import("./index.8f51f685.js")), ["assets/index.8f51f685.js", "assets/el-button.0a4ba32a.js"]))),
                o = pe((() => dr((() => import("./index.8ae910f6.js")), ["assets/index.8ae910f6.js", "assets/d-dialog.ed95f2b9.js", "assets/el-button.0a4ba32a.js", "assets/el-dialog.4b8a03dc.js", "assets/el-overlay.ebdea840.js", "assets/index.8dc67c0c.js", "assets/d-empty.092f35dc.js", "assets/el-input.b3ba137c.js", "assets/typescript.72bf8adc.js", "assets/el-select.dc7a2ac5.js", "assets/index.f364da82.js", "assets/event.0bae16b8.js", "assets/el-scrollbar.3e84cd99.js", "assets/isEqual.6fce44d5.js", "assets/_baseIsEqual.220044e7.js", "assets/_Uint8Array.d6bc81f7.js", "assets/index.b9023f44.js", "assets/validator.053f84bf.js", "assets/deprecation.bfd0cf7f.js", "assets/index.c956e740.js", "assets/arrow-up.0ae35c9a.js", "assets/el-popper.7e8f10c3.js", "assets/el-avatar.cb4a201b.js", "assets/el-card.a45fa383.js", "assets/el-skeleton-item.1896e7e8.js", "assets/d-icon-panel.9a8860fb.js", "assets/cloneDeep.436aab3d.js", "assets/_baseClone.a466ea06.js", "assets/CustomAdd.e21f8c96.js", "assets/d-color.c1dcbbce.js", "assets/arrow-down.766403d3.js", "assets/ossClient.9167d04d.js", "assets/el-upload.57856de0.js", "assets/zoom-in.dd934e7d.js", "assets/el-form-item.785a6e2e.js", "assets/InfoFilled.df704379.js", "assets/addToDesk.9743448a.js"]))),
                s = pe((() => dr((() => import("./index.70ff14e6.js")), ["assets/index.70ff14e6.js", "assets/d-tabs.14917e7e.js", "assets/el-button.0a4ba32a.js", "assets/el-avatar.cb4a201b.js", "assets/el-overlay.ebdea840.js", "assets/index.065a2d57.js", "assets/event.0bae16b8.js"]))),
                l = wu(),
                u = On();
            document.addEventListener("keydown", (e => {
                let t = e.ctrlKey;
                er() && (t = e.metaKey), !e.shiftKey && t && "f" === e.key && (e.preventDefault(), _d.value = !_d.value)
            }), !1), mo(u.value, !0);
            const c = tr("(prefers-color-scheme: dark)");
            return Ct((() => c.value), (e => {
                u.value.theme.system && (u.value.theme.mode = e ? "dark" : "light")
            })), Ct((() => u), (e => {
                mo(e.value)
            }), {
                deep: !0
            }), setTimeout((() => {
                Ad.value.lang && "auto" != Ad.value.lang || (Ad.value.lang = window.navigator.language), 0 == Ad.value.wallpaper.type && (Ad.value.wallpaper.src = Dd.value.src, Ad.value.wallpaper.thumb = Dd.value.src, Ad.value.wallpaper.name = Dd.value.name), zo(), Xo({
                    t: "pageview",
                    ds: window.location.origin,
                    dl: window.location.origin,
                    dh: "index.html",
                    dp: `index.html?v=${Hn.version}n=${oo()}`,
                    dt: "iTab新标签页"
                }), dr((() => import("./el-button.0a4ba32a.js").then((function(e) {
                    return e.dW
                }))), []).then((e => {
                    e.getTodayBing(), e.getUserInfo()
                })), co.get("version").then((e => {
                    Hn.version != e && (dr((() => import("./versionChangelog.8ce977e6.js")), ["assets/versionChangelog.8ce977e6.js", "assets/el-button.0a4ba32a.js"]), co.set("version", Hn.version))
                })), co.get("instructionsVisible").then((e => {
                    e || dr((() => import("./index.4866cdfb.js")), ["assets/index.4866cdfb.js", "assets/el-button.0a4ba32a.js"]).then(), co.set("instructionsVisible", 1)
                }))
            })), (e, c) => (Xe(), oe(V, null, [ge(L(n)), ge(L(a)), se("div", bd, [ge(Co), L(u).time.show || null == L(u).time.show ? (Xe(), oe("itab-date", Bd)) : ie("", !0), ge(tu), ge(yd, {
                style: "",
                class: "d-cell"
            }), L(u).layout.yiyan ? (Xe(), ae(su, {
                key: 1
            })) : ie("", !0)]), ge(L(r)), L(l).settingHandle.visible ? (Xe(), ae(L(s), {
                key: 0
            })) : ie("", !0), L(l).dialogIcon.visible ? (Xe(), ae(L(o), {
                key: 1,
                modelValue: L(l).dialogIcon.visible,
                "onUpdate:modelValue": c[0] || (c[0] = e => L(l).dialogIcon.visible = e)
            }, null, 8, ["modelValue"])) : ie("", !0), L(l).loginInfo.visible ? (Xe(), ae(nt(pe((() => dr((() => import("./index.287500ff.js")), ["assets/index.287500ff.js", "assets/el-button.0a4ba32a.js", "assets/d-dialog.ed95f2b9.js", "assets/el-dialog.4b8a03dc.js", "assets/el-overlay.ebdea840.js", "assets/index.8dc67c0c.js", "assets/el-input.b3ba137c.js", "assets/typescript.72bf8adc.js", "assets/el-form-item.785a6e2e.js", "assets/_baseClone.a466ea06.js", "assets/_Uint8Array.d6bc81f7.js", "assets/isEqual.6fce44d5.js", "assets/_baseIsEqual.220044e7.js", "assets/el-radio.cee63c3c.js"])))), {
                key: 2
            })) : ie("", !0), ge(L(i)), ge(L(t), {
                modelValue: L(_d),
                "onUpdate:modelValue": c[1] || (c[1] = e => y(_d) ? _d.value = e : null)
            }, null, 8, ["modelValue"])], 64))
        }
    }, [
        ["__scopeId", "data-v-5b2766ed"]
    ]),
    xd = {};
! function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.default = {
        name: "zh-cn",
        el: {
            colorpicker: {
                confirm: "确定",
                clear: "清空"
            },
            datepicker: {
                now: "此刻",
                today: "今天",
                cancel: "取消",
                clear: "清空",
                confirm: "确定",
                selectDate: "选择日期",
                selectTime: "选择时间",
                startDate: "开始日期",
                startTime: "开始时间",
                endDate: "结束日期",
                endTime: "结束时间",
                prevYear: "前一年",
                nextYear: "后一年",
                prevMonth: "上个月",
                nextMonth: "下个月",
                year: "年",
                month1: "1 月",
                month2: "2 月",
                month3: "3 月",
                month4: "4 月",
                month5: "5 月",
                month6: "6 月",
                month7: "7 月",
                month8: "8 月",
                month9: "9 月",
                month10: "10 月",
                month11: "11 月",
                month12: "12 月",
                weeks: {
                    sun: "日",
                    mon: "一",
                    tue: "二",
                    wed: "三",
                    thu: "四",
                    fri: "五",
                    sat: "六"
                },
                months: {
                    jan: "一月",
                    feb: "二月",
                    mar: "三月",
                    apr: "四月",
                    may: "五月",
                    jun: "六月",
                    jul: "七月",
                    aug: "八月",
                    sep: "九月",
                    oct: "十月",
                    nov: "十一月",
                    dec: "十二月"
                }
            },
            select: {
                loading: "加载中",
                noMatch: "无匹配数据",
                noData: "无数据",
                placeholder: "请选择"
            },
            cascader: {
                noMatch: "无匹配数据",
                loading: "加载中",
                placeholder: "请选择",
                noData: "暂无数据"
            },
            pagination: {
                goto: "前往",
                pagesize: "条/页",
                total: "共 {total} 条",
                pageClassifier: "页",
                deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
            },
            messagebox: {
                title: "提示",
                confirm: "确定",
                cancel: "取消",
                error: "输入的数据不合法!"
            },
            upload: {
                deleteTip: "按 delete 键可删除",
                delete: "删除",
                preview: "查看图片",
                continue: "继续上传"
            },
            table: {
                emptyText: "暂无数据",
                confirmFilter: "筛选",
                resetFilter: "重置",
                clearFilter: "全部",
                sumText: "合计"
            },
            tree: {
                emptyText: "暂无数据"
            },
            transfer: {
                noMatch: "无匹配数据",
                noData: "无数据",
                titles: ["列表 1", "列表 2"],
                filterPlaceholder: "请输入搜索内容",
                noCheckedFormat: "共 {total} 项",
                hasCheckedFormat: "已选 {checked}/{total} 项"
            },
            image: {
                error: "加载失败"
            },
            pageHeader: {
                title: "返回"
            },
            popconfirm: {
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }
        }
    }
}(xd);
var wd = $n(xd);
const Sd = {
    setup(e) {
        let t = x(wd);
        return (e, n) => (Xe(), ae(L(ea), {
            locale: L(t)
        }, {
            default: Dt((() => [ge(Id)])),
            _: 1
        }, 8, ["locale"]))
    }
};
var Td = Ln({
    props: {
        size: {
            type: String,
            default: "small"
        }
    },
    emits: ["resize"],
    setup(e, {
        emit: t
    }) {
        let n = x(null);
        const {
            width: r,
            height: a
        } = nr(n);
        return ke((() => {
            n.value.style.fontSize = "21px"
        })), Ct((() => a), (e => {
            ke((() => {
                n.value.style.fontSize = ~~(a.value / 7) + "px"
            })), t("resize", {
                width: r.value,
                height: a.value
            })
        }), {
            deep: !0,
            immediate: !0
        }), (e, t) => (Xe(), oe("div", {
            ref_key: "watchResize",
            ref: n,
            class: "d-watch-resize"
        }, [qe(e.$slots, "default", {}, void 0, !0)], 512))
    }
}, [
    ["__scopeId", "data-v-1b342933"]
]);
const Od = ["disabled"];
var kd = Ln({
    props: {
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: "medium"
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        loading: {
            type: Boolean,
            default: !1
        },
        icon: {}
    },
    setup(e) {
        const t = e;
        return (e, n) => {
            const r = et("el-icon");
            return Xe(), oe("button", {
                class: R(["d-button", `d-button-${t.type} d-button-${t.size} ${t.disabled||t.loading?"is-disabled":""}`]),
                disabled: t.disabled
            }, [t.loading ? (Xe(), ae(r, {
                key: 0,
                class: "is-loading",
                style: {
                    "vertical-align": "middle",
                    "margin-right": "4px"
                }
            }, {
                default: Dt((() => [ge(L(rr))])),
                _: 1
            })) : ie("", !0), t.icon ? (Xe(), ae(r, {
                key: 1,
                style: {
                    "vertical-align": "middle"
                }
            }, {
                default: Dt((() => [(Xe(), ae(nt(t.icon)))])),
                _: 1
            })) : ie("", !0), qe(e.$slots, "default", {}, void 0, !0)], 10, Od)
        }
    }
}, [
    ["__scopeId", "data-v-80bdd778"]
]);
const Md = {
    ElIcon: gn,
    Plus: ei,
    Switch: wi,
    Download: Ua,
    Setting: yi,
    Cloudy: La,
    Edit: Ja,
    Remove: ui,
    Check: ar,
    Delete: Ha
};
var Nd = {
    install(e) {
        Object.keys(Md).map((t => e.component(Md[t].name, Md[t]))), e.component("d-watch-resize", Td), e.component("d-button", kd), e.use(ba), e.use(ma)
    }
};
const Pd = function() {
    const e = m(!0),
        t = e.run((() => x({})));
    let n = [],
        r = [];
    const a = D({
        install(e) {
            gu(a), a._a = e, e.provide(pu, a), e.config.globalProperties.$pinia = a, r.forEach((e => n.push(e))), r = []
        },
        use(e) {
            return this._a ? n.push(e) : r.push(e), this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return a
}();
const Ld = {
        class: "ip-icon d-flex-center"
    },
    Yd = {
        name: "bookmarks"
    };
var Gd = Ln(Object.assign(Yd, {
        setup: e => (e, t) => (Xe(), oe("div", Ld, [ge(L(bi), {
            style: {
                width: "80%",
                height: "80%"
            }
        })]))
    }), [
        ["__scopeId", "data-v-5166815a"]
    ]),
    Rd = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Gd
    });
const Hd = {
        class: "wfull hfull"
    },
    Zd = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    jd = {
        class: "f14"
    },
    zd = {
        key: 1,
        class: "wfull hfull b",
        style: {
            padding: "0.9em"
        }
    },
    Ud = {
        class: "f14 ac d-flex-center",
        style: {
            height: "40%",
            color: "#d83030",
            "font-size": "1em"
        }
    },
    Xd = {
        style: {
            height: "60%",
            "font-size": "3em"
        },
        class: "f14 ac d-flex-center"
    },
    Vd = {
        key: 2,
        class: "d-flex-between hfull wfull",
        style: {
            "align-items": "flex-start",
            "flex-direction": "column",
            padding: "0.9em"
        }
    },
    Wd = {
        style: {
            "font-size": "0.7em"
        }
    },
    $d = {
        style: {
            color: "#d83030"
        }
    },
    Jd = {
        class: "d-inline",
        style: {
            "margin-top": "0.2em",
            "font-size": "2.6em"
        }
    },
    Kd = (e => ($e("data-v-0e3c471a"), e = e(), Ve(), e))((() => se("div", {
        class: "ac d-flex-center",
        style: {
            height: "60%"
        }
    }, null, -1))),
    Qd = {
        style: {
            "font-size": "0.6em"
        }
    },
    qd = {
        class: "mt5"
    },
    eh = {
        key: 0,
        class: "calendar-icon-medius wfull hfull"
    },
    th = {
        name: "calendar-icon"
    };
var nh, rh = Ln(Object.assign(th, {
        props: {
            size: {
                type: String,
                defautl: "medium"
            }
        },
        setup(e) {
            const t = e,
                n = B({}),
                r = {
                    1: "一",
                    2: "二",
                    3: "三",
                    4: "四",
                    5: "五",
                    6: "六",
                    0: "日"
                };
            let a = null;

            function i() {
                let e = no.Lunar.fromDate(new Date);
                n.YYYY = tn().format("YYYY"), n.M = tn().format("MM"), n.D = tn().format("DD"), n.yue = e.getMonthInChinese(), n.ri = e.getDayInChinese(), n.week = r[tn().day()]
            }
            a && clearInterval(a), i(), a = setInterval((() => {
                i()
            }), 1e3);
            const o = x("size-3");

            function s(e) {
                let t = e.height;
                o.value = t > 0 && t <= 50 ? "size-1" : t > 50 && t <= 80 ? "size-2" : "size-3"
            }
            return (r, a) => {
                const i = et("d-watch-resize");
                return Xe(), ae(i, {
                    onResize: s
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "calendar-icon"])
                    }, [se("div", Hd, ["size-1" == o.value ? (Xe(), oe("div", Zd, [se("div", jd, j(L(n).D), 1)])) : ie("", !0), "size-2" == o.value ? (Xe(), oe("div", zd, [se("div", Ud, "周" + j(L(n).week), 1), se("div", Xd, j(L(n).D), 1)])) : ie("", !0), "size-3" == o.value || "medium" == t.size ? (Xe(), oe("div", Vd, [se("div", Wd, [se("p", $d, "周" + j(L(n).week), 1), se("i", Jd, j(L(n).D), 1)]), Kd, se("div", Qd, [se("p", null, j(L(n).YYYY) + "年" + j(L(n).M) + "月", 1), se("p", qd, j(L(n).yue) + "月" + j(L(n).ri), 1)])])) : ie("", !0)]), "medium" == t.size ? (Xe(), oe("div", eh, [ge(L(jr), {
                        "first-day-of-week": "7",
                        ref: "calendar"
                    }, {
                        header: Dt((() => [])),
                        dateCell: Dt((({
                            data: e
                        }) => {
                            return [se("p", {
                                class: R(["f12", e.isSelected ? "is-selected" : ""])
                            }, j((t = e.date, tn(t).format("D"))), 3)];
                            var t
                        })),
                        _: 1
                    }, 512)])) : ie("", !0)], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-0e3c471a"]
    ]),
    ah = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: rh
    }),
    ih = {
        exports: {}
    },
    oh = ih.exports = (nh = "day", function(e, t, n) {
        var r = function(e) {
                return e.add(4 - e.isoWeekday(), nh)
            },
            a = t.prototype;
        a.isoWeekYear = function() {
            return r(this).year()
        }, a.isoWeek = function(e) {
            if (!this.$utils().u(e)) return this.add(7 * (e - this.isoWeek()), nh);
            var t, a, i, o = r(this),
                s = (t = this.isoWeekYear(), i = 4 - (a = (this.$u ? n.utc : n)().year(t).startOf("year")).isoWeekday(), a.isoWeekday() > 4 && (i += 7), a.add(i, nh));
            return o.diff(s, "week") + 1
        }, a.isoWeekday = function(e) {
            return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        };
        var i = a.startOf;
        a.startOf = function(e, t) {
            var n = this.$utils(),
                r = !!n.u(t) || t;
            return "isoweek" === n.p(e) ? r ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : i.bind(this)(e, t)
        }
    });
tn.extend(oh);
const sh = (e, t) => {
    if (!t) return Math.ceil(tn(e).diff(tn(), "days", !0));
    if ("year" == t) {
        let t = tn().format("YYYY"),
            n = tn(e).format("MM-DD");
        if (tn().format("MM-DD") == n) return "0";
        tn().isAfter(tn(`${t}-${n}`)) && t++;
        let r = tn(`${t}-${n}`);
        return Math.ceil(tn(r).diff(tn(), "days", !0))
    }
    if ("month" == t) {
        let t = tn().format("YYYY"),
            n = tn().format("MM"),
            r = tn(e).format("DD");
        if (tn().format("DD") == r) return "0";
        tn().isAfter(tn(`${t}-${n}-${r}`)) && n++;
        let a = tn(`${t}-${n}-${r}`);
        return Math.ceil(tn(a).diff(tn(), "days", !0))
    }
    if ("week" == t) {
        let t = tn().isoWeekday(),
            n = tn(e).isoWeekday() - t;
        return n > 0 ? n : n + 7
    }
    if ("festival" == t) {
        let e = null,
            t = (new Date).getTime();
        for (; !e;) {
            let n = no.Solar.fromDate(new Date(t)),
                r = [...no.Lunar.fromDate(new Date(t)).getFestivals(), ...n.getFestivals()];
            r.length ? e = {
                number: Math.ceil(tn(t).diff(tn(), "days", !0)),
                target: tn(t).format("YYYY-MM-DD"),
                title: r.join(",")
            } : t += 864e5
        }
        return e
    }
    return ""
};
const lh = {
        class: "wfull hfull"
    },
    uh = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    ch = {
        class: "f14"
    },
    fh = {
        key: 1,
        class: "wfull hfull",
        style: {
            padding: "0.9em"
        }
    },
    dh = {
        key: 2,
        class: "d-flex-between hfull wfull",
        style: {
            "align-items": "flex-start",
            "flex-direction": "column",
            padding: "0.9em"
        }
    },
    hh = (e => ($e("data-v-1419d396"), e = e(), Ve(), e))((() => se("i", {
        class: "f12"
    }, "天", -1))),
    gh = {
        key: 0,
        class: "days-icon-medius wfull hfull"
    };
var ph = Ln({
        props: {
            size: {
                type: String,
                defautl: "medium"
            },
            data: {
                type: Object,
                default: {
                    name: "节日倒计时",
                    title: "除夕还有",
                    target: "2022-01-31",
                    repeat: "festival",
                    bgColor: "#eee1d9",
                    textColor: "#8e726f",
                    family: "",
                    icon: ""
                }
            }
        },
        setup(e) {
            const t = e,
                n = sh(t.data.target, t.data.repeat),
                r = re((() => {
                    let e = t.data;
                    return "object" == typeof n && (e.title = n.title, e.target = n.target), e
                })),
                a = re((() => "object" == typeof n ? n.number || 0 : Math.abs(n))),
                i = x("size-3"),
                o = re((() => `background-color:${t.data.bgColor}`)),
                s = re((() => `color:${t.data.textColor}`)),
                l = re((() => `font-family:${t.data.family}`));

            function u(e) {
                let t = e.height;
                i.value = t > 0 && t <= 50 ? "size-1" : t > 50 && t <= 80 ? "size-2" : "size-3"
            }
            return (n, c) => {
                const f = et("d-watch-resize");
                return Xe(), ae(f, {
                    onResize: u
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "days-icon"]),
                        style: Z(L(o))
                    }, [se("div", lh, ["size-1" == i.value ? (Xe(), oe("div", uh, [se("div", ch, j(L(a)), 1)])) : ie("", !0), "size-2" == i.value ? (Xe(), oe("div", fh, [se("div", {
                        class: "f14 ac d-flex-center d-nowrap",
                        style: Z([L(s), {
                            height: "40%",
                            "font-size": "1em"
                        }])
                    }, j(L(r).title), 5), se("div", {
                        style: Z([L(s), {
                            height: "60%",
                            "font-size": "3em"
                        }]),
                        class: "f14 ac d-flex-center"
                    }, j(L(a)), 5)])) : ie("", !0), "size-3" == i.value || "medium" == t.size ? (Xe(), oe("div", dh, [se("div", {
                        class: "d-elip",
                        style: Z([L(s), {
                            "font-size": "0.6em"
                        }])
                    }, j(L(r).title), 5), se("p", {
                        class: "d-inline",
                        style: Z([{
                            "font-size": "2.0em"
                        }, L(s)])
                    }, [se("span", {
                        class: "b",
                        style: Z(L(l))
                    }, j(L(a)), 5), hh], 4), se("p", {
                        class: "mt5",
                        style: Z([L(s), {
                            "font-size": "0.6em"
                        }])
                    }, j(L(r).target), 5)])) : ie("", !0)]), "medium" == t.size ? (Xe(), oe("div", gh, [ge(L(jr), {
                        ref: "calendar",
                        style: Z(L(s))
                    }, {
                        header: Dt((() => [])),
                        dateCell: Dt((({
                            data: e
                        }) => {
                            return [se("p", {
                                class: R(["f12", e.isSelected ? "is-selected" : ""])
                            }, j((t = e.date, tn(t).format("D"))), 3)];
                            var t
                        })),
                        _: 1
                    }, 8, ["style"])])) : ie("", !0)], 6)])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-1419d396"]
    ]),
    mh = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: ph
    });
const vh = {
        class: "hfull days-icon2"
    },
    Ch = {};
var Eh = Ln(Object.assign(Ch, {
        props: {
            size: {
                type: String,
                defautl: "medium"
            },
            data: {
                type: Object,
                default: {
                    name: "纪念日",
                    title: "发工资还有",
                    target: "2021-12-01",
                    repeat: "month",
                    bgColor: "#fff",
                    textColor: "#1890ff",
                    family: "",
                    icon: "2"
                }
            }
        },
        setup(e) {
            const t = e,
                n = re((() => t.data)),
                r = re((() => {
                    let e = n.value.target,
                        r = sh(e, t.data.repeat);
                    return "object" == typeof r ? (n.value.title = r.title, n.value.target = r.target, r.number || 0) : Math.abs(r)
                })),
                a = re((() => `background-color:${t.data.bgColor}`)),
                i = re((() => `color:${t.data.textColor};font-size:${"mini"==t.size?"2em":"3.0em"}`)),
                o = re((() => `font-family:${t.data.family}`));
            return (e, s) => {
                const l = et("d-watch-resize");
                return Xe(), ae(l, null, {
                    default: Dt((() => [se("div", vh, [se("h2", {
                        class: "d-flex-center d-elip",
                        style: Z([{
                            "font-size": ".7em",
                            height: "30%",
                            color: "#fff"
                        }, `background-color:${t.data.textColor}`])
                    }, j(L(n).title), 5), se("div", {
                        style: Z([{
                                height: "70%"
                            },
                            [L(i), L(o), L(a)]
                        ]),
                        class: "b d-flex-center"
                    }, j(L(r)), 5)])])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-192177c4"]
    ]),
    Fh = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Eh
    });
const yh = {
        class: "wfull hfull"
    },
    Ah = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    Dh = {
        key: 1,
        class: "wfull hfull",
        style: {
            padding: "0.9em"
        }
    },
    _h = {
        key: 2,
        class: "d-flex-between hfull wfull",
        style: {
            "flex-direction": "column",
            padding: "0.9em"
        }
    },
    bh = (e => ($e("data-v-81844834"), e = e(), Ve(), e))((() => se("i", {
        class: "f12"
    }, "天", -1))),
    Bh = {};
var Ih = Ln(Object.assign(Bh, {
        props: {
            size: {
                type: String,
                defautl: "medium"
            },
            data: {
                type: Object,
                default: {
                    name: "恋爱日期",
                    title: "和她❤️恋爱已经",
                    target: "2021-02-28",
                    repeat: "",
                    bgColor: "#fff",
                    textColor: "#eb8197",
                    family: "",
                    icon: "3"
                }
            }
        },
        setup(e) {
            const t = e,
                n = re((() => t.data)),
                r = re((() => {
                    let e = n.value.target,
                        r = sh(e, t.data.repeat);
                    return "object" == typeof r ? (n.value.title = r.title, n.value.target = r.target, r.number || 0) : Math.abs(r)
                })),
                a = x("size-3"),
                i = re((() => `background-color:${t.data.bgColor}`)),
                o = re((() => `color:${t.data.textColor}`)),
                s = re((() => `font-family:${t.data.family}`));

            function l(e) {
                let t = e.height;
                a.value = t > 0 && t <= 66 ? "size-1" : t > 66 && t <= 80 ? "size-2" : "size-3"
            }
            return (u, c) => {
                const f = et("d-watch-resize");
                return Xe(), ae(f, {
                    onResize: l
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "days-icon ac"]),
                        style: Z(L(i))
                    }, [se("div", yh, ["size-1" == a.value ? (Xe(), oe("div", Ah, [se("div", {
                        class: "f18 b",
                        style: Z(L(o))
                    }, j(L(r)), 5)])) : ie("", !0), "size-2" == a.value ? (Xe(), oe("div", Dh, [se("div", {
                        class: "f14 ac d-flex-center d-normal",
                        style: Z([L(o), {
                            height: "40%",
                            "font-size": "1em"
                        }])
                    }, j(L(n).title), 5), se("div", {
                        style: Z([L(o), {
                            height: "60%",
                            "font-size": "2em"
                        }]),
                        class: "f14 ac d-flex-center"
                    }, j(L(r)), 5)])) : ie("", !0), "size-3" == a.value || "medium" == t.size ? (Xe(), oe("div", _h, [se("div", {
                        class: "d-elip",
                        style: Z([L(o), {
                            "font-size": "0.6em"
                        }])
                    }, j(L(n).title), 5), se("p", {
                        class: "d-inline",
                        style: Z([{
                            "font-size": "1.7em"
                        }, L(o)])
                    }, [se("span", {
                        class: "b",
                        style: Z(L(s))
                    }, j(L(r)), 5), bh], 4), se("p", {
                        class: "mt5",
                        style: Z([L(o), {
                            "font-size": "0.6em"
                        }])
                    }, j(L(n).target), 5)])) : ie("", !0)])], 6)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-81844834"]
    ]),
    xh = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Ih
    });
const wh = {};
var Sh = Ln(Object.assign(wh, {
        props: {
            size: {
                type: String,
                defautl: "medium"
            },
            data: {
                type: Object,
                default: {
                    name: "下班倒计时",
                    title: "下班还有",
                    target: "2020-12-20 18:00:00",
                    repeat: "week",
                    repeatWeek: [1, 2, 3, 4, 5],
                    bgColor: "#63a099",
                    textColor: "#fff",
                    family: "",
                    icon: "4"
                }
            }
        },
        setup(e) {
            const t = e;
            let n = x(0);
            const r = setInterval((() => {
                    n.value = new Date
                }), 1e3),
                a = re((() => t.data)),
                i = re((() => (n.value, ((e, t = [1, 2, 3, 4, 5]) => {
                    let n = tn().format("YYYY-MM-DD");
                    if (e = tn(`${n} ${tn(e).format("HH:mm:ss")}`), !t.includes(tn().day()) || tn().isAfter(e)) return "休息啦";
                    let r = e.diff(tn(), "h"),
                        a = Math.floor(e.diff(tn(), "m") % 60),
                        i = Math.floor(e.diff(tn(), "s") % 60);
                    return r < 10 && (r = "0" + r), a < 10 && (a = "0" + a), i < 10 && (i = "0" + i), `${r}:${a}:${i}`
                })(a.value.target, t.data.repeatWeek)))),
                o = x("size-3"),
                s = re((() => `background-color:${t.data.bgColor||"#fff"}`)),
                l = re((() => `color:${t.data.textColor}`)),
                u = re((() => `font-family:${t.data.family}`));

            function c(e) {
                let t = e.height;
                o.value = t > 0 && t <= 50 ? "size-1" : t > 50 && t <= 80 ? "size-2" : "size-3"
            }
            return ze((() => {
                clearInterval(r)
            })), (e, t) => {
                const n = et("d-watch-resize");
                return Xe(), ae(n, {
                    onResize: c
                }, {
                    default: Dt((() => [se("div", {
                        style: Z(L(s)),
                        class: "hfull days-icon4"
                    }, [se("h2", {
                        style: Z([L(l), {
                            "font-size": "0.8em",
                            height: "40%"
                        }]),
                        class: "d-flex-center d-elip"
                    }, j(L(a).title), 5), se("div", {
                        style: Z([{
                                "font-size": "1.6em",
                                height: "40%"
                            },
                            [L(l), L(u)]
                        ]),
                        class: "b d-flex-center"
                    }, j(L(i)), 5)], 4)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-d1367202"]
    ]),
    Th = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Sh
    });
const Oh = {
        class: "wfull hfull d-flex-center"
    },
    kh = {
        key: 0
    },
    Mh = {
        class: "b f14"
    },
    Nh = {
        class: "f12",
        style: {
            "margin-top": ".2em"
        }
    },
    Ph = {
        key: 1,
        class: "d-flex-center"
    },
    Lh = {
        key: 0,
        class: "checkin-handle"
    },
    Yh = {
        class: "checkin-progress"
    },
    Gh = {
        class: "b f30"
    },
    Rh = {
        class: "f12",
        style: {
            "margin-top": ".2em"
        }
    },
    Hh = {
        key: 0,
        class: "ml30"
    },
    Zh = {
        class: "b f30"
    },
    jh = {
        style: {
            "margin-top": ".2em",
            "font-size": "0.8em"
        }
    },
    zh = {
        class: "checkin-handle-box d-flex-center"
    };
var Uh = Ln({
        props: {
            size: {
                type: String,
                defautl: "medium"
            },
            data: {
                type: Object,
                default: {
                    title: "每天喝8杯水",
                    target: 8,
                    current: 0
                }
            }
        },
        setup(e) {
            const t = e,
                n = tn().format("YYYYMMDD");
            t.data.date !== n && (t.data.date = n, t.data.current = 0);
            const r = re((() => {
                    let e = Math.floor(t.data.current / t.data.target * 100);
                    return e >= 100 ? 100 : e
                })),
                a = x("size-3"),
                i = x(120);

            function o(e) {
                let t = e.height;
                i.value = t ? t - 24 : 120, a.value = t > 0 && t <= 100 ? "size-1" : "size-2"
            }

            function s(e) {
                t.data.current >= t.data.target || (t.data.current = t.data.current + 1)
            }
            return (n, l) => {
                const u = et("el-icon"),
                    c = et("d-watch-resize");
                return Xe(), ae(c, {
                    onResize: o
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "checkin-icon"])
                    }, [se("div", Oh, ["size-1" == a.value ? (Xe(), oe("div", kh, [se("div", Mh, j(e.data.current) + "/" + j(e.data.target), 1), se("div", Nh, j(e.data.name), 1)])) : ie("", !0), "size-2" == a.value ? (Xe(), oe("div", Ph, [ge(L(la), {
                        width: i.value,
                        color: "#1890ff",
                        "stroke-width": 8,
                        type: "circle",
                        percentage: L(r)
                    }, {
                        default: Dt((() => ["medium" != t.size ? (Xe(), oe("div", Lh, [se("span", Yh, [se("div", Gh, j(e.data.current) + "/" + j(e.data.target), 1), se("div", Rh, j(e.data.title), 1)])])) : ie("", !0)])),
                        _: 1
                    }, 8, ["width", "percentage"]), "medium" == t.size ? (Xe(), oe("span", Hh, [se("div", Zh, j(e.data.current) + "/" + j(e.data.target), 1), se("div", jh, j(e.data.title), 1)])) : ie("", !0)])) : ie("", !0), se("div", zh, [ge(u, {
                        onClick: Vt(s, ["stop"]),
                        size: 16
                    }, {
                        default: Dt((() => [ge(L(ei))])),
                        _: 1
                    }, 8, ["onClick"])])])], 2)])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-6827c5a0"]
    ]),
    Xh = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Uh
    });
const Vh = ["xlink:href"],
    Wh = {
        name: "dIcon"
    };
var $h = Ln(Object.assign(Wh, {
    props: {
        icon: String,
        size: {
            type: [String, Number]
        }
    },
    emits: ["click"],
    setup(e, {
        emit: t
    }) {
        const n = e,
            r = e => {
                t("click", e)
            },
            a = re((() => {
                let e = /^\d+$/.test(n.size) ? n.size + "px" : n.size;
                return {
                    color: n.color,
                    fontSize: e
                }
            }));
        return (t, n) => (Xe(), oe("svg", {
            class: "d-icon",
            style: Z(L(a)),
            onClick: r,
            "aria-hidden": "true"
        }, [se("use", {
            "xlink:href": `#${e.icon}`
        }, null, 8, Vh)], 4))
    }
}), [
    ["__scopeId", "data-v-554f8179"]
]);
const Jh = {
        class: "ip-icon d-flex-center"
    },
    Kh = {
        name: "ip-icon"
    };
var Qh = Ln(Object.assign(Kh, {
        setup: e => (e, t) => (Xe(), oe("div", Jh, [ge($h, {
            icon: "icon-ip",
            style: {
                width: "70%",
                height: "70%"
            }
        })]))
    }), [
        ["__scopeId", "data-v-f26958c4"]
    ]),
    qh = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Qh
    });
const eg = (e = {}) => Go.get("/jikipedia/openBrowse", {
        params: e
    }),
    tg = (e = {}) => Go.get("/jikipedia/openRank", {
        params: e
    }),
    ng = (e = {}) => Go.get("/jikipedia/openSearch", {
        params: e
    }),
    rg = {},
    ag = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        style: {
            height: "100%",
            width: "100%"
        },
        viewBox: "0 0 240 240",
        fill: "none"
    },
    ig = [de('<defs><rect id="path_0" x="0" y="0" width="240" height="240"></rect></defs><g opacity="1" transform="translate(0 0)  rotate(0 120 120)"><mask id="bg-mask-0" fill="white"><use xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)"><path id="矩形 1" fill-rule="evenodd" style="fill:#FED303;" transform="translate(0 0)  rotate(0 120 120)" opacity="1" d="M0,240L240,240L240,0L0,0L0,240Z "></path><g opacity="1" transform="translate(15.05 10.15)  rotate(0 102.95000000000003 106.85000000000002)"><g opacity="1" transform="translate(0 0)  rotate(0 92.10000000000001 92.10000000000002)"></g><g opacity="1" transform="translate(14.883552744041253 4.600000000000023)  rotate(0 95.5082236279794 104.55000000000001)"><g opacity="1" transform="translate(6.471897718198335 6.800000000000011)  rotate(0 88.97227476888024 97.85)"><path id="路径 21" fill-rule="evenodd" style="fill:#FED303;" transform="translate(0 0)  rotate(0 88.97227476888024 97.85)" opacity="1" d="M8.24,134.3C4.74,138.6 -1.76,146.7 0.44,157.7C2.44,167.5 10.04,172.7 15.54,175.3L13.14,187.8C12.74,189.8 13.24,191.8 14.54,193.3C15.84,194.8 17.64,195.7 19.64,195.7C19.64,195.7 171.24,195.2 171.34,195.5C173.14,195.5 174.84,194.8 176.04,193.5C177.34,192.3 177.94,190.6 177.94,188.8L175.84,71.8C175.84,71.4 175.74,70.9 175.64,70.4C175.34,69.1 167.84,39.5 140.74,26.9C127.14,20.6 114.84,17.4 104.14,17.4C101.24,17.4 98.74,17.6 96.64,17.9C91.74,9.8 84.04,0 75.84,0C74.74,0 73.64,0.1 72.64,0.5C70.74,1.1 65.44,2.9 62.34,19.2C59.34,17.4 56.14,16.1 53.24,16.1C52.14,16.1 51.14,16.2 50.24,16.5C44.64,18.2 42.84,24.4 41.84,29.6C41.54,31.1 41.34,32.6 41.14,33.9C35.54,37.4 24.64,46.2 15.54,64C3.74,87.1 5.44,109.1 9.14,133.2C8.84,133.6 8.54,134 8.24,134.3Z "></path><path id="路径 24" style="stroke:#603813;stroke-width:10.1604;stroke-opacity:1;stroke-dasharray:0 0;" transform="translate(6.615105678872737 6.423103127437329)  rotate(0 82.31472192944385 91.33844843628135)" d="M68.13,0.18C62.83,1.98 60.73,24.78 60.73,24.78C60.73,24.78 50.23,14.98 45.53,16.38C41.63,17.58 40.83,31.58 40.83,31.58C40.83,31.58 26.43,37.98 14.83,60.68C3.23,83.38 5.93,105.38 9.43,127.98C9.43,131.08 -2.07,138.38 0.33,150.08C2.73,161.68 16.53,164.68 16.53,164.68L13.03,182.68L164.63,182.18L162.53,65.18C162.53,65.18 155.73,37.58 131.23,26.18C106.73,14.78 93.03,16.98 86.63,18.68C80.23,6.88 72.53,-1.32 68.13,0.18Z "></path></g><path id="路径 25" fill-rule="evenodd" style="fill:#FED303;" transform="translate(56.904824375636764 122.2883771196781)  rotate(0 3.8575629406818024 6.461622880321968)" opacity="1" d="M1.81,0.11Z M7.61,9.51L5.11,1.81C4.61,0.41 3.21,-0.29 1.81,0.11C0.41,0.61 -0.29,2.01 0.11,3.41L2.61,11.11C3.11,12.51 4.51,13.21 5.91,12.81C7.21,12.41 8.01,10.91 7.61,9.51Z "></path><path id="路径 25" style="stroke:#603813;stroke-width:9.2645;stroke-opacity:1;stroke-dasharray:0 0;" transform="translate(56.904824375636764 122.2883771196781)  rotate(0 3.8575629406818024 6.461622880321968)" d="M1.81,0.11Z M7.61,9.51L5.11,1.81C4.61,0.41 3.21,-0.29 1.81,0.11C0.41,0.61 -0.29,2.01 0.11,3.41L2.61,11.11C3.11,12.51 4.51,13.21 5.91,12.81C7.21,12.41 8.01,10.91 7.61,9.51Z "></path><path id="路径 26" fill-rule="evenodd" style="fill:#FED303;" transform="translate(123.10482437563692 99.68837711967808)  rotate(0 3.8575629406817598 6.461622880321968)" opacity="1" d="M7.61,9.51L5.11,1.81C4.61,0.41 3.21,-0.29 1.81,0.11C0.41,0.61 -0.29,2.01 0.11,3.41L2.61,11.11C3.11,12.51 4.51,13.21 5.91,12.81C7.21,12.41 8.01,10.91 7.61,9.51Z "></path><path id="路径 26" style="stroke:#603813;stroke-width:9.2645;stroke-opacity:1;stroke-dasharray:0 0;" transform="translate(123.10482437563692 99.68837711967808)  rotate(0 3.8575629406817598 6.461622880321968)" d="M7.61,9.51L5.11,1.81C4.61,0.41 3.21,-0.29 1.81,0.11C0.41,0.61 -0.29,2.01 0.11,3.41L2.61,11.11C3.11,12.51 4.51,13.21 5.91,12.81C7.21,12.41 8.01,10.91 7.61,9.51Z "></path><path id="路径 27" style="stroke:#603813;stroke-width:6.0963;stroke-opacity:1;stroke-dasharray:0 0;" transform="translate(47.916447255958786 97.98651197033078)  rotate(0 4.3500000000000085 2.4567440148346122)" d="M0,4.91C0,2.91 1.2,1.21 2.9,0.41C4.9,-0.49 7.3,0.11 8.7,1.91 "></path><path id="路径 28" style="stroke:#603813;stroke-width:6.0963;stroke-opacity:1;stroke-dasharray:0 0;" transform="translate(114.21644725595874 77.58651197033078)  rotate(0 4.349999999999994 2.4567440148346122)" d="M0,4.91C0,2.91 1.2,1.21 2.9,0.41C4.9,-0.49 7.3,0.11 8.7,1.91 "></path><path id="路径 29" fill-rule="evenodd" style="fill:#FF8F00;" transform="translate(82.41173724799754 111.80000000000001)  rotate(0 13.912170305138318 21.29819881234654)" opacity="1" d="M22.6,42.5C30.8,39.8 27.8,13.5 24,1.4C24,1.4 18.3,3.8 14.8,3.3C11.3,2.9 8.1,0 8.1,0C8.1,0 7.7,3.3 5.8,5.6C4.4,8.2 0,11 0,11C-0.3,11.7 13.8,44.6 22.6,42.5Z "></path><path id="路径 29" style="stroke:#603813;stroke-width:4.0642;stroke-opacity:1;stroke-dasharray:0 0;" transform="translate(82.41173724799754 111.80000000000001)  rotate(0 13.912170305138318 21.29819881234654)" d="M22.6,42.5C30.8,39.8 27.8,13.5 24,1.4C24,1.4 18.3,3.8 14.8,3.3C11.3,2.9 8.1,0 8.1,0C8.1,0 7.7,3.3 5.8,5.6C4.4,8.2 0,11 0,11C-0.3,11.7 13.8,44.6 22.6,42.5Z "></path><path id="路径 30" fill-rule="evenodd" style="fill:#603813;" transform="translate(81.81644725595876 111.80000000000001)  rotate(0 12.299999999999983 5.568344565728509)" opacity="1" d="M0.13,10.39C0.09,10.39 0.04,10.4 0,10.4C0.04,10.4 0.08,10.4 0.13,10.39Z M6.3,9.6C7.3,8.5 9.4,7.1 11.6,6.3C13.3,5.7 16.5,5.6 17.8,6C22.1,7.3 22.5,4.3 24.6,1.4C24.6,1.4 18.9,3.8 15.4,3.3C11.9,2.9 8.7,0 8.7,0C8.7,0 8.8,4.2 7,6.6C5.28,8.79 1.2,10.26 0.13,10.39C3.77,10.16 2.45,12.66 6.3,9.6Z "></path><path id="路径 30" style="stroke:#603813;stroke-width:4.0642;stroke-opacity:1;stroke-dasharray:0 0;" transform="translate(81.81644725595876 111.80000000000001)  rotate(0 12.299999999999983 5.568344565728509)" d="M0.13,10.39C0.09,10.39 0.04,10.4 0,10.4C0.04,10.4 0.08,10.4 0.13,10.39Z M6.3,9.6C7.3,8.5 9.4,7.1 11.6,6.3C13.3,5.7 16.5,5.6 17.8,6C22.1,7.3 22.5,4.3 24.6,1.4C24.6,1.4 18.9,3.8 15.4,3.3C11.9,2.9 8.7,0 8.7,0C8.7,0 8.8,4.2 7,6.6C5.28,8.79 1.2,10.26 0.13,10.39C3.77,10.16 2.45,12.66 6.3,9.6Z "></path><path id="路径 31" fill-rule="evenodd" style="fill:#FF8F00;" transform="translate(29.430729095629687 140.70434340203397)  rotate(-17.673949065799775 13 11.6)" opacity="1" d="M13,0C5.82,0 0,5.19 0,11.6C0,18.01 5.82,23.2 13,23.2C20.18,23.2 26,18.01 26,11.6C26,5.19 20.18,0 13,0Z "></path><path id="路径 32" fill-rule="evenodd" style="fill:#FF8F00;" transform="translate(140.91079085117266 105.69967028177786)  rotate(-17.673949065799775 13 11.6)" opacity="1" d="M13,0C5.82,0 0,5.19 0,11.6C0,18.01 5.82,23.2 13,23.2C20.18,23.2 26,18.01 26,11.6C26,5.19 20.18,0 13,0Z "></path></g></g></g></g>', 2)];
var og = Ln(rg, [
    ["render", function(e, t) {
        return Xe(), oe("svg", ag, ig)
    }]
]);
const sg = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    lg = {
        key: 1,
        class: "hfull",
        style: {
            padding: "0.74em"
        }
    },
    ug = {
        class: "hfull d-hidden"
    },
    cg = {
        class: "mb5 f15 d-main jidic-title"
    },
    fg = {
        class: "f12",
        style: {
            "line-height": "18px",
            color: "rgba(var(--alpha-color), .7)"
        }
    },
    dg = {
        name: "jikipedia-icon"
    };
var hg = Ln(Object.assign(dg, {
        props: {
            size: String
        },
        setup(e) {
            const t = x(!1),
                n = x(kn.get("jidicRandom") || {});

            function r(e) {
                let n = e.height;
                t.value = n < 110
            }
            return Ct(t, (e => {
                e || ((e = {}) => Go.get("/jikipedia/random", {
                    params: e
                }))().then((e => {
                    n.value.title || (n.value = e.data || {}), kn.set("jidicRandom", e.data)
                }))
            })), (a, i) => {
                const o = et("d-watch-resize");
                return Xe(), ae(o, {
                    onResize: r
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "jidic-icon"])
                    }, ["mini" == e.size && t.value ? (Xe(), oe("div", sg, [ge(og)])) : (Xe(), oe("div", lg, [se("div", ug, [se("h2", cg, j(n.value.title), 1), se("p", fg, j(n.value.content), 1)])]))], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-715ecedc"]
    ]),
    gg = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: hg
    });
const pg = {},
    mg = {
        "data-v-c7c888b2": "",
        width: "75",
        version: "1.1",
        viewBox: "0 0 81.566 81.356",
        xmlns: "http://www.w3.org/2000/svg",
        class: "float-left",
        style: {
            height: "100%",
            width: "100%"
        }
    },
    vg = [de('<g transform="translate(-148.21 -264.73)"><path d="m188.99 264.73c22.521 0 40.778 18.21 40.778 40.683h-40.778z" style="fill-rule:evenodd;fill:rgb(255, 0, 255);"></path><path d="m188.99 346.08c22.521 0 40.778-18.21 40.778-40.673h-40.778z" style="fill-rule:evenodd;fill:rgb(255, 255, 102);"></path><path d="m188.99 327.86c12.392 0 22.511-10.093 22.511-22.453 0-12.37-10.119-22.453-22.511-22.453-12.402 0-22.511 10.083-22.511 22.453 0 12.36 10.109 22.453 22.511 22.453z" style="fill-rule:evenodd;fill:rgb(173, 138, 96);"></path><path d="m207.06 318.79c-0.47044 0.60899-0.95088 1.178-1.4514 1.7571-3.4832 3.8037-7.8473 6.0999-12.912 7.0084v4.9618c1.8918 0.16972 3.7535 0.46922 5.5652 0.88853 4.8645 1.1281 9.3887 3.1248 13.412 5.8104l0.15014-0.0998h0.01c1.0009-0.69884 1.9718-1.5175 2.9928-2.2363l0.12011-0.0899c0.99092-0.85858 1.9418-1.7571 2.9027-2.6356 1.6115-1.6073 3.0829-3.3545 4.4041-5.2114-2.7426-0.81865-6.1057-2.3062-4.7444-5.7206 1.4013-3.5242 4.0438-6.1498 0.69065-9.5143-0.26025-0.22962-0.51048-0.42929-0.78073-0.63894-2.7325-2.0366-3.243-2.3162-2.152-5.8104 0.0801-0.21964 0.15014-0.42929 0.23021-0.64893 0.18017-0.52912 0.37035-0.99835 0.45042-1.198h-4.6343c0.02 4.4926-1.2011 9.1249-3.8336 12.789z" style="fill-rule:evenodd;fill:rgb(102, 0, 102);"></path><path d="m188.99 346.08c-22.531 0-40.788-18.21-40.788-40.673h40.788z" style="fill-rule:evenodd;fill:rgb(153, 255, 255);"></path><path d="m188.99 327.86c-12.432 0-22.511-10.053-22.511-22.453h22.511z" style="fill-rule:evenodd;fill:rgb(207, 147, 79);"></path><path d="m188.99 346.08c-8.3978 0-16.195-2.5258-22.681-6.8686 4.0137-2.6856 8.5479-4.6823 13.412-5.8104 1.8117-0.41931 3.6634-0.71881 5.5552-0.88853v-8.486c1.2111 0.19967 2.4523 0.30949 3.7134 0.30949z" style="fill-rule:evenodd;fill:rgb(207, 147, 79);"></path><path d="m188.99 327.86c12.432 0 22.511-10.053 22.511-22.453h-22.511z" style="fill-rule:evenodd;fill:rgb(255, 238, 219);"></path><path d="m188.99 315.89c0.57053-0.37937 0.95089-0.61897 1.6015-0.92846 0.34032-0.15974 0.73068-0.23961 1.131-0.23961 0.45042 0 0.88082 0.0998 1.2512 0.29951 1.5314 0.74876 2.9027 1.4776 4.3741 2.3062-2.0619 2.416-4.7744 3.624-8.3578 3.624z" style="fill-rule:evenodd;fill:rgb(255, 20, 20);"></path><path d="m188.99 290.74c1.9418 0.0998 3.6934-1.1082 4.0638-3.2846 0.19017 3.604 4.5943 5.1715 6.1357 0.43928-0.3203 2.8653 2.7626 4.0333 5.5752 2.1464 4.6643 3.614 6.3159 9.1149 6.7363 15.365h4.4441c1.3513-3.654 4.5042-5.3412-1.031-7.887-0.71066-0.32946-0.20018-0.13978 0.84078-1.4476 3.193-4.1931 1.3713-6.05-3.4832-5.7804-0.48045 0.0299 0.23021-0.53911 0.57053-1.0582 3.7034-5.4909 2.8927-9.1549-4.4341-7.3379 0.87081-2.9252 2.4423-7.877-2.5724-7.5276-1.6415 0.10981-2.9327 0.93845-4.254 1.827 0.11011-3.2746-0.0901-7.4277-4.6243-6.03-1.5114 0.51914-2.6024 1.5974-3.6634 2.7455-0.45042-2.5658-1.5514-4.4027-4.304-4.7122z" style="fill:rgb(255, 255, 255);"></path><path d="m188.09 314.63c0.5305 0.20965 0.91085 0.71881 0.92086 1.4077 0.02 0.48919-0.19018 1.2479-1.3012 2.0366-1.8217 1.1182-4.4241 1.3378-6.0356 0.34943-1.4914-0.69885-2.4122-2.0267-1.8417-3.9235 0.39036-0.80867 1.4714-1.208 2.192-0.92847 0.82076 0.29951 1.1711 1.1581 0.18016 1.6672 0.49046-0.97839-1.3613-1.5874-1.5314 0.10981-0.05 0.58903 0.83077 1.4177 1.9218 1.5874v0.01c0.96089 0.13977 1.9218-0.19967 2.8326-1.1381 0.4304-0.39934 0.83077-0.83861 1.3813-1.0982 0.39037-0.17971 0.79074-0.21964 1.2812-0.0799z"></path><path d="m148.21 305.41c0-22.463 18.267-40.683 40.788-40.683v40.683z" style="fill-rule:evenodd;fill:rgb(255, 255, 0);"></path><path d="m166.48 305.41c0-12.4 10.079-22.453 22.511-22.453v22.453z" style="fill-rule:evenodd;fill:rgb(237, 212, 145);"></path><path d="m188.99 346.08c8.3878 0 16.195-2.5258 22.681-6.8686-4.0237-2.6856-8.5479-4.6823-13.412-5.8104-1.8117-0.41931-3.6734-0.71881-5.5652-0.88853v-8.486c-1.2011 0.19967-2.4423 0.30949-3.7034 0.30949z" style="fill-rule:evenodd;fill:rgb(255, 238, 219);"></path><path d="m197.98 301.53c0.99093 0 1.8017-0.80866 1.8017-1.797s-0.81075-1.797-1.8017-1.797c-0.99092 0-1.8017 0.80866-1.8017 1.797s0.81075 1.797 1.8017 1.797z" style="fill-rule:evenodd;"></path><path d="m199.4 333.68c4.364 1.1481 8.5279 3.025 12.271 5.5408-6.7062 4.4626-14.604 6.8587-22.681 6.8587v-4.7122h0.01c2.8126 0 5.365-0.8486 7.2267-2.2263 1.8818-1.3877 3.0728-3.3045 3.173-5.461z" style="fill-rule:evenodd;fill:rgb(75, 145, 0);"></path><path d="m179.74 303.25c-0.85078 0-1.5514-0.69885-1.5514-1.5574v-3.9335c0-0.85858 0.70066-1.5574 1.5514-1.5574 0.8608 0 1.5615 0.69885 1.5615 1.5574v3.9335c0 0.85858-0.70066 1.5574-1.5615 1.5574z" style="fill-rule:evenodd;fill:rgb(26, 26, 26);"></path><path d="m172.31 290.31c-2.6424 2.7854-4.3741 6.3894-5.375 10.612-1.6015-2.7554-1.0009-10.213 1.031-13.837-1.5014-0.9085-4.9546-1.3677-10.86 1.2879 5.1048-7.0683 12.261-7.4577 16.665-6.7488-1.5514-2.6556-3.6134-3.9235-9.1986-5.7505 9.0384-3.035 12.402-1.0183 17.136 2.6157-0.2102-3.634-0.68063-5.1814-3.4132-9.5342 4.4341-0.32946 8.0875 2.5957 10.7 6.0899v13.528c-2.4323 0.13977-4.304-1.5175-5.1348-3.4044-0.62058 1.6373-0.50047 4.5325 0.26024 6.2796-3.7335-0.46922-4.8245-3.2147-5.6052-5.5209-1.7516 0.71882-4.9346 3.045-6.2058 4.3828z" style="fill-rule:evenodd;fill:rgb(255, 0, 0);"></path><path d="m178.58 333.68c-4.3741 1.1481-8.5279 3.025-12.281 5.5408 6.7062 4.4626 14.604 6.8587 22.681 6.8587h0.01v-4.7122h-0.02c-2.8026 0-5.365-0.8486-7.2267-2.2263-1.8717-1.3877-3.0628-3.3045-3.1629-5.461z" style="fill-rule:evenodd;fill:rgb(255, 255, 204);"></path></g>', 1)];
var Cg = Ln(pg, [
    ["render", function(e, t) {
        return Xe(), oe("svg", mg, vg)
    }]
]);
const Eg = {
        class: "multiavatar-icon"
    },
    Fg = {
        name: "multiavatar-icon"
    };
var yg = Ln(Object.assign(Fg, {
        setup: e => (e, t) => (Xe(), oe("div", Eg, [ge(Cg)]))
    }), [
        ["__scopeId", "data-v-360a6c56"]
    ]),
    Ag = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: yg
    });
const Dg = (e => ($e("data-v-adcfd038"), e = e(), Ve(), e))((() => se("div", {
        class: "notes-icon-top d-flex-center"
    }, "备忘录", -1))),
    _g = {
        class: "notes-icon-content"
    },
    bg = {
        key: 0,
        class: "bb d-flex-y"
    },
    Bg = {
        name: "notes-icon"
    };
var Ig = Ln(Object.assign(Bg, {
        props: {
            size: String
        },
        setup(e) {
            const t = ir(),
                n = x(!1);

            function r(e) {
                let t = e.height;
                n.value = t < 80
            }
            return (a, i) => {
                const o = et("d-watch-resize");
                return Xe(), ae(o, {
                    onResize: r
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "notes-icon"])
                    }, [Dg, se("ul", _g, [(Xe(!0), oe(V, null, Qe(L(t), ((e, t) => (Xe(), oe(V, {
                        key: e.id
                    }, [t < 3 ? (Xe(), oe("li", bg, [bt(se("span", {
                        class: "d-elip"
                    }, j(e && e.title || e && e.content), 513), [
                        [Ut, !n.value]
                    ])])) : ie("", !0)], 64)))), 128)), L(t).length ? ie("", !0) : (Xe(), oe(V, {
                        key: 0
                    }, Qe(3, (e => se("li", {
                        class: "bb",
                        key: e
                    }))), 64))])], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-adcfd038"]
    ]),
    xg = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Ig
    });
const wg = Gn.create({
    baseURL: "https://api.codelife.cc/jingtuitui/api",
    timeout: 5e3
});
wg.interceptors.request.use((e => ("get" == e.method && (e.params = u({
    goods_type: "1,2,3,4,7,9,11,12,14,16",
    v: e.params.v ? e.params.v : "v2"
}, e.params)), e.headers.signaturekey = Rn(), e.headers.version = Hn.version, e)), (e => {
    Promise.reject(e)
})), wg.interceptors.response.use((e => {
    const t = e.data;
    return 0 != t.return ? Promise.reject(t.result) : t.result
}), (e => Promise.reject(e)));
const Sg = e => wg.get("/get_goods_list", {
        params: e
    }),
    Tg = e => wg.get("/hot_search", {
        params: e
    }),
    Og = e => wg.get("/assoc_word", {
        params: e
    }),
    kg = e => wg.get("/get_goods_link", {
        params: e
    }),
    Mg = e => Go.get("/jdunion/goodlist", {
        params: e
    });
var Ng = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    get_goods_list: Sg,
    jd_hot_search: Tg,
    jd_goods_query: e => wg.get("/jd_goods_query", {
        params: e
    }),
    jd_assoc_word: Og,
    jd_coupom_info: e => (e.v = "v3", wg.get("/get_coupom_info", {
        params: e
    })),
    jd_today_top: e => wg.get("/today_top", {
        params: e
    }),
    jd_brand_list: e => wg.get("/get_brand_list", {
        params: e
    }),
    jd_self: e => wg.get("/get_goods_list?eliteId=self&v=v2", {
        params: e
    }),
    jd_nine: e => wg.get("/get_goods_list?eliteId=nineSift&v=v2", {
        params: e
    }),
    jd_goods: e => wg.get("/get_goods_list?eliteId=sift&v=v2", {
        params: e
    }),
    jd_collage: e => wg.get("/get_goods_list?eliteId=collage&v=v2", {
        params: e
    }),
    jd_subsidy_goods: e => wg.get("/subsidy_goods", {
        params: e
    }),
    jd_get_goods_link: kg,
    jd_category: e => Go.get("/jdunion/category", {
        params: e
    }),
    jd_goodlist: Mg,
    jd_searchGoodlist: e => Go.get("/jdunioncache/goodlist", {
        params: e
    })
});
const Pg = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    Lg = {
        key: 1
    },
    Yg = {
        class: "remai-icon-top f12"
    },
    Gg = ["onMouseenter"],
    Rg = {
        class: "remai-icon-content"
    },
    Hg = ["title"],
    Zg = {
        class: "d-cell d-elip"
    },
    jg = ["href"],
    zg = {
        name: "remai-icon"
    };
var Ug = Ln(Object.assign(zg, {
        props: {
            size: String
        },
        setup(e) {
            const t = B({
                    activeId: "today_top",
                    hotType: [{
                        type: "today_top",
                        title: "热卖"
                    }, {
                        type: "jd_goods",
                        title: "好货"
                    }, {
                        type: "jd_nine",
                        title: "9块9"
                    }, {
                        type: "jd_collage",
                        title: "拼购"
                    }],
                    hostList: kn.get("hotReamai") || []
                }),
                n = x(!1);

            function r(e) {
                let t = e.height;
                n.value = t < 110
            }
            return async function() {
                if (!t.hostList.length) {
                    let e = await Mg({
                        type: t.activeId
                    });
                    t.hostList = e.data
                }
                if (await co.get("jttIcon_today_top")) return;
                Mg({
                    ids: "today_top,jd_goods,jd_nine,jd_collage"
                }).then((e => {
                    let n = e.data || {};
                    for (let r in n) co.set(`jttIcon_${r}`, n[r], 72e5), r === t.hotType[0].type && kn.set("hotReamai", n[r])
                }))
            }(), (a, i) => {
                const o = et("d-watch-resize");
                return Xe(), ae(o, {
                    onResize: r
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "remai-icon"]),
                        style: {
                            padding: "0.64em 0.34em"
                        }
                    }, ["mini" == e.size && n.value ? (Xe(), oe("span", Pg, [ge($h, {
                        icon: "icon-shop",
                        style: {
                            "font-size": "4.4em",
                            color: "#fff"
                        }
                    })])) : (Xe(), oe("span", Lg, [se("div", Yg, [(Xe(!0), oe(V, null, Qe(L(t).hotType, (e => (Xe(), oe("span", {
                        class: R(["top-tag", {
                            active: L(t).activeId == e.type
                        }]),
                        key: e.type,
                        onMouseenter: n => async function(e) {
                            t.activeId = e.type;
                            let n = await co.get(`jttIcon_${e.type}`);
                            n || (n = (await Mg({
                                type: t.activeId
                            })).data || []);
                            t.hostList = n
                        }(e)
                    }, j(e.title), 43, Gg)))), 128))]), se("ul", Rg, [(Xe(!0), oe(V, null, Qe(L(t).hostList, (e => (Xe(), oe("li", {
                        class: "d-elip",
                        title: e.goods_name,
                        key: e.goods_id
                    }, [se("span", Zg, [se("a", {
                        onClick: i[0] || (i[0] = Vt((() => {}), ["stop"])),
                        onMouseup: i[1] || (i[1] = Vt((() => {}), ["stop"])),
                        href: e.link,
                        target: "_blank",
                        class: "d-elip"
                    }, j(e.goods_name), 41, jg)])], 8, Hg)))), 128))])]))], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-4b21c0ff"]
    ]),
    Xg = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Ug
    });
const Vg = {
        class: "wfull hfull"
    },
    Wg = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    $g = {
        class: "f14"
    },
    Jg = {
        key: 1,
        class: "wfull hfull b",
        style: {
            padding: "0.9em"
        }
    },
    Kg = {
        class: "f14 ac d-flex-center",
        style: {
            height: "40%",
            color: "#d83030",
            "font-size": "1em"
        }
    },
    Qg = {
        style: {
            height: "60%",
            "font-size": "3em"
        },
        class: "f14 ac d-flex-center"
    },
    qg = {
        key: 2,
        class: "d-flex-between hfull wfull",
        style: {
            "align-items": "flex-start",
            "flex-direction": "column",
            padding: "0.9em"
        }
    },
    ep = {
        style: {
            "font-size": ".7em"
        }
    },
    tp = {
        style: {
            color: "#d83030"
        }
    },
    np = {
        class: "d-inline",
        style: {
            "margin-top": "0.2em",
            "font-size": "2.6em"
        }
    },
    rp = (e => ($e("data-v-12bdae16"), e = e(), Ve(), e))((() => se("div", {
        class: "ac d-flex-center",
        style: {
            height: "60%"
        }
    }, null, -1))),
    ap = {
        style: {
            "font-size": "0.6em"
        }
    },
    ip = {
        class: "mt5"
    },
    op = {
        key: 0,
        class: "robot-icon-medius wfull hfull"
    },
    sp = {
        class: "robot-icon-week d-flex f12"
    },
    lp = {
        name: "robot-icon"
    };
var up = Ln(Object.assign(lp, {
        props: {
            size: String
        },
        setup(e) {
            const t = e;

            function n(e) {}
            return (r, a) => {
                const i = et("d-watch-resize");
                return Xe(), ae(i, {
                    onResize: n
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "robot-icon"])
                    }, [se("div", Vg, ["size-1" == r.styleSize ? (Xe(), oe("div", Wg, [se("div", $g, j(r.date.D), 1)])) : ie("", !0), "size-2" == r.styleSize ? (Xe(), oe("div", Jg, [se("div", Kg, "周" + j(r.date.week), 1), se("div", Qg, j(r.date.D), 1)])) : ie("", !0), "size-3" == r.styleSize || "medium" == t.size ? (Xe(), oe("div", qg, [se("div", ep, [se("p", tp, "周" + j(r.date.week), 1), se("i", np, j(r.date.D), 1)]), rp, se("div", ap, [se("p", null, j(r.date.YYYY) + "年" + j(r.date.M) + "日", 1), se("p", ip, j(r.date.yue) + "月" + j(r.date.ri), 1)])])) : ie("", !0)]), "medium" == t.size ? (Xe(), oe("div", op, [se("ul", sp, [(Xe(), oe(V, null, Qe(["一", "二", "三", "四", "五", "六", "七"], (e => se("li", {
                        key: e
                    }, j(e), 1))), 64))]), ge(L(jr), {
                        ref: "calendar"
                    }, {
                        header: Dt((() => [])),
                        dateCell: Dt((({
                            data: e
                        }) => {
                            return [se("p", {
                                class: R(["f12", e.isSelected ? "is-selected" : ""])
                            }, j((t = e.date, tn(t).format("D"))), 3)];
                            var t
                        })),
                        _: 1
                    }, 512)])) : ie("", !0)], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-12bdae16"]
    ]),
    cp = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: up
    });
const fp = Gn.create({
    timeout: 5e3
});
fp.interceptors.request.use((e => e), (e => {
    Promise.reject(e)
})), fp.interceptors.response.use((e => e.data), (e => Promise.reject(e)));
const dp = e => {
        const t = {
            appid: "el1902262",
            token: "CCSDCZSDCXYMYZYYSYYXSMDDSMDHHDJT",
            type: 14,
            and14: `MultiMatch/Name,Code,PinYin/${e}/true`,
            returnfields14: "Name,Code,PinYin,MarketType,JYS,MktNum,JYS4App,MktNum4App,ID,Classify,IsExactMatch,SecurityType,SecurityTypeName",
            pageIndex14: 1,
            pageSize14: 10,
            isAssociation14: !1
        };
        return fp.get("https://api.codelife.cc/stocksearch/api/Info/Search", {
            params: t
        })
    },
    hp = e => {
        const t = {
            fltt: "2",
            fields: "f12,f13,f19,f14,f139,f148,f2,f4,f1,f125,f18,f3,f152,f5,f30,f31,f32,f6,f8,f7,f10,f22,f9,f112,f100,f88,f153",
            secids: e
        };
        return fp.get("https://push2.eastmoney.com/api/qt/ulist.np/get", {
            params: t
        })
    },
    gp = e => fp.get("https://push2.eastmoney.com/api/qt/stock/trends2/get", {
        params: u(u({}, e), {
            fields1: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13",
            fields2: "f51,f53,f56,f58",
            iscr: 0,
            iscca: 0,
            ndays: 1
        })
    }),
    pp = e => fp.get(`https://topnamei.top/sina_list/list=${e}`),
    mp = e => {
        const t = {
            fqt: 1,
            lmt: 80,
            iscca: 1,
            fields1: "f1,f2,f3,f4,f5",
            fields2: "f51,f52,f53,f54,f55,f56,f57,f59",
            ut: "f057cbcbce2a86e2866ab8877db1d059",
            forcect: 1,
            end: tn().format("YYYYMMDD")
        };
        return fp.get("https://push2his.eastmoney.com/api/qt/stock/kline/get", {
            params: u(u({}, t), e)
        })
    };
const vp = (e => ($e("data-v-283c444b"), e = e(), Ve(), e))((() => se("svg", {
        t: "1642761963640",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "12917",
        width: "200",
        height: "200"
    }, [se("path", {
        d: "M736.8 285.4v-110c0-13.2-10.7-23.8-23.8-23.8h-12c-13.2 0-23.8 10.7-23.8 23.8v110H568v400h109.1v66.3c0 13.2 10.7 23.8 23.8 23.8h12c13.2 0 23.8-10.7 23.8-23.8v-66.3H845v-400H736.8z m56.5 336.4H619.7V353.2h173.6v268.6zM347.8 307.3c0-13.2-10.7-23.8-23.8-23.8h-12c-13.2 0-23.8 10.7-23.8 23.8v110H179v341h109.1v90.3c0 13.2 10.7 23.8 23.8 23.8h12c13.2 0 23.8-10.7 23.8-23.8v-90.3H456v-341H347.8v-110z m56.5 177.9v209.6H230.7V485.2h173.6z",
        fill: "#fff",
        "p-id": "12918"
    })], -1))),
    Cp = {
        key: 1,
        class: "stock-icon-content"
    },
    Ep = {
        class: "d-elip title",
        style: {
            width: "50%"
        }
    },
    Fp = {
        style: {
            "margin-bottom": "2px"
        }
    },
    yp = {
        class: "d-sub left"
    },
    Ap = {
        class: "d-elip ar"
    },
    Dp = {
        class: "d-sub right"
    },
    _p = {
        name: "stock-icon"
    };
var bp = Ln(Object.assign(_p, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                n = or(),
                r = x(kn.get("stocksCache") || []),
                a = x(!1);

            function i(e) {
                return 0 == e ? "gray" : e > 0 ? "#e5353d" : "#41c662"
            }

            function o(e) {
                let t = e.height;
                a.value = t < 80
            }
            return Ct((() => n), (e => {
                ! function() {
                    if (n.value.length) {
                        let e = n.value.map((e => `${e.MktNum}.${e.Code}`));
                        hp(e.join(",")).then((e => {
                            let t = e.data.diff || [];
                            r.value = t, kn.set("stocksCache", t)
                        }))
                    }
                }()
            }), {
                deep: !0,
                immediate: !0
            }), (n, s) => {
                const l = et("el-icon"),
                    u = et("d-watch-resize");
                return Xe(), ae(u, {
                    onResize: o
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "todo-icon d-flex-center"])
                    }, [a.value ? (Xe(), ae(l, {
                        key: 0,
                        style: {
                            "font-size": "6em"
                        }
                    }, {
                        default: Dt((() => [vp])),
                        _: 1
                    })) : (Xe(), oe("ul", Cp, [(Xe(!0), oe(V, null, Qe(r.value, (n => (Xe(), oe("li", {
                        class: "d-flex-y",
                        key: n.id
                    }, [se("span", Ep, [se("p", Fp, j(n && n.f14), 1), se("p", yp, j(n && n.f12), 1)]), "medium" == e.size ? (Xe(), oe("span", {
                        key: 0,
                        class: "al",
                        style: Z({
                            color: i(n.f3)
                        })
                    }, j(n && n.f2), 5)) : ie("", !0), se("span", Ap, [se("p", {
                        class: "percent d-inline",
                        style: Z([{
                            "margin-bottom": "2px"
                        }, "medium" == t.size ? {
                            backgroundColor: i(n.f3)
                        } : {
                            color: i(n.f3)
                        }])
                    }, j(n && n.f3) + "%", 5), se("p", Dp, j(n && n.f2), 1)])])))), 128))]))], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-283c444b"]
    ]),
    Bp = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: bp
    });
const Ip = {
        key: 1,
        class: "wfull hfull"
    },
    xp = (e => ($e("data-v-b16a8af8"), e = e(), Ve(), e))((() => se("h2", {
        class: "todo-icon-title d-flex-y"
    }, "Today", -1))),
    wp = {
        class: "todo-icon-content"
    },
    Sp = {
        key: 0,
        class: "d-flex-y"
    },
    Tp = {
        name: "todo-icon"
    };
var Op = Ln(Object.assign(Tp, {
        props: {
            size: String
        },
        setup(e) {
            const t = sr(),
                n = x(!1);

            function r(e) {
                let t = e.height;
                n.value = t < 80
            }
            return (a, i) => {
                const o = et("el-icon"),
                    s = et("d-watch-resize");
                return Xe(), ae(s, {
                    onResize: r
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "todo-icon d-flex-center"])
                    }, [n.value ? (Xe(), ae(o, {
                        key: 0,
                        style: {
                            "font-size": "5em"
                        }
                    }, {
                        default: Dt((() => [ge(L(hi))])),
                        _: 1
                    })) : (Xe(), oe("div", Ip, [xp, se("ul", wp, [(Xe(!0), oe(V, null, Qe(L(t).filter((e => !e.done)), ((e, t) => (Xe(), oe(V, {
                        key: e.id
                    }, [t < 3 ? (Xe(), oe("li", Sp, [se("i", {
                        class: "to-icon-check",
                        style: Z({
                            backgroundColor: e.color
                        })
                    }, null, 4), bt(se("span", {
                        class: "d-elip"
                    }, j(e && e.content), 513), [
                        [Ut, !n.value]
                    ])])) : ie("", !0)], 64)))), 128)), L(t).length ? ie("", !0) : (Xe(), oe(V, {
                        key: 0
                    }, Qe(3, (e => se("li", {
                        class: "bb",
                        key: e
                    }))), 64))])]))], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-b16a8af8"]
    ]),
    kp = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Op
    });
const Mp = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    Np = {
        key: 1
    },
    Pp = {
        class: "topsearch-icon-top f12"
    },
    Lp = ["onMouseenter"],
    Yp = {
        class: "topsearch-icon-content"
    },
    Gp = ["title"],
    Rp = {
        class: "icon-index mr5"
    },
    Hp = {
        class: "d-cell d-elip"
    },
    Zp = ["href"],
    jp = {
        key: 0,
        class: "d-hidden ml5",
        style: {
            "max-width": "45px",
            color: "#eee"
        }
    },
    zp = {
        name: "topsearch-icon"
    };
var Up = Ln(Object.assign(zp, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                n = On(),
                r = B({
                    activeId: n.value.topSearch[0].id || "Jb0vmloB1G",
                    hotType: n.value.topSearch || [],
                    hostList: kn.get("hotSearch") || []
                }),
                a = x(!1);

            function i(e) {
                let t = e.height;
                a.value = t < 110
            }
            return async function() {
                let e = await zn.getTopList({
                    id: r.activeId,
                    size: 4
                });
                if (r.hostList = e.data, await co.get(`hotSearch_${r.activeId}`)) return;
                zn.getTopList({
                    ids: r.hotType.map((e => e.id)).join(",")
                }).then((e => {
                    let t = e.data || {};
                    for (let n in t) co.set(`hotSearch_${n}`, t[n], 18e5), n === r.hotType[0].id && kn.set("hotSearch", t[n])
                }))
            }(), (n, o) => {
                const s = et("d-watch-resize");
                return Xe(), ae(s, {
                    onResize: i
                }, {
                    default: Dt((() => [se("div", {
                        class: R([e.size, "topsearch-icon"]),
                        style: {
                            padding: "0.74em"
                        }
                    }, ["mini" == e.size && a.value ? (Xe(), oe("span", Mp, [ge($h, {
                        icon: "icon-resou1",
                        style: {
                            "font-size": "4em",
                            color: "'#ff4e4e'"
                        }
                    })])) : (Xe(), oe("span", Np, [se("div", Pp, [(Xe(!0), oe(V, null, Qe(L(r).hotType, (e => (Xe(), oe("span", {
                        class: R(["top-tag", {
                            active: L(r).activeId == e.id
                        }]),
                        key: e.id,
                        onMouseenter: t => async function(e) {
                            r.activeId = e.id;
                            let t = await co.get(`hotSearch_${e.id}`);
                            t || (t = (await zn.getTopList({
                                id: r.activeId,
                                size: 4
                            })).data || []);
                            r.hostList = t
                        }(e)
                    }, j(e.name), 43, Lp)))), 128))]), se("ul", Yp, [(Xe(!0), oe(V, null, Qe(L(r).hostList, ((e, n) => (Xe(), oe(V, {
                        key: e.id
                    }, [n < 4 ? (Xe(), oe("li", {
                        key: 0,
                        class: "d-flex-y d-elip",
                        title: e.title
                    }, [se("span", Rp, j(e.index), 1), se("span", Hp, [se("a", {
                        onClick: o[0] || (o[0] = Vt((() => {}), ["stop"])),
                        onMouseup: o[1] || (o[1] = Vt((() => {}), ["stop"])),
                        href: e.link,
                        target: "_blank",
                        class: "d-elip"
                    }, j(e.title), 41, Zp)]), "medium" == t.size ? (Xe(), oe("span", jp, j(e.hotValue.replace("热度", "")), 1)) : ie("", !0)], 8, Gp)) : ie("", !0)], 64)))), 128))])]))], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-134738be"]
    ]),
    Xp = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Up
    });
const Vp = {
        name: "ip-icon"
    },
    Wp = {
        class: "ip-icon d-flex-center"
    },
    $p = [(e => ($e("data-v-f3b7f26a"), e = e(), Ve(), e))((() => se("svg", {
        t: "1648568780416",
        class: "icon",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "29794",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "60%",
        height: "60%"
    }, [se("path", {
        fill: "#fff",
        d: "M172.9536 471.04h669.013333v88.746667h-669.013333v-88.746667zM153.6 608.699733h707.6864v243.5072h-116.053333L709.973333 925.013333h303.786667V1024H0v-98.986667h300.373333l-30.72-72.8064H153.6v-243.5072z m266.24 316.3136h164.9664l35.293867-72.8064H389.12l30.72 72.8064z m324.266667-161.553066v-68.266667H270.779733v68.266667H744.106667zM37.546667 56.900267h413.013333V0h113.7664v56.900267h416.426667v95.573333h-416.426667v46.626133H921.6V290.133333H109.226667V199.099733h341.333333V152.4736H37.546667v-95.573333z m954.606933 275.319466v182.0672h-109.226667v-88.746666H130.833067v88.746666h-109.226667V332.219733h970.5472z",
        "p-id": "29795"
    })], -1)))];
var Jp = Ln(Vp, [
        ["render", function(e, t, n, r, a, i) {
            return Xe(), oe("div", Wp, $p)
        }],
        ["__scopeId", "data-v-f3b7f26a"]
    ]),
    Kp = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Jp
    });
const Qp = {
        class: "wallpaper-icon d-flex-center"
    },
    qp = {
        name: "wallpaper-icon"
    };
var em = Ln(Object.assign(qp, {
        setup: e => (e, t) => (Xe(), oe("div", Qp, [ge($h, {
            icon: "icon-wallpaper",
            style: {
                width: "70%",
                height: "70%"
            }
        })]))
    }), [
        ["__scopeId", "data-v-5862340c"]
    ]),
    tm = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: em
    });
const nm = {
        location: {},
        now: {
            tmp: 0
        },
        daily_forecast: [{}],
        air_now_city: {},
        sun: {},
        rain: {},
        lifestyle: []
    },
    rm = lr((() => ur("weather", nm, {
        listenToStorageChanges: !1
    }))),
    am = Gn.create({
        timeout: 5e3
    });
am.interceptors.request.use((e => ("get" == e.method && (e.params = u({
    lang: navigator.language.split("-")[0]
}, e.params)), e)), (e => {
    Promise.reject(e)
})), am.interceptors.response.use((e => e.data), (e => Promise.reject(e)));
const im = (e = {}) => am.get("https://geoapi.qweather.com/v2/city/lookup?key=bdd98ec1d87747f3a2e8b1741a5af796", {
        params: e
    }),
    om = rm(),
    sm = On(),
    lm = async (e, t) => {
        if (!t && om.value.updateTime && tn().valueOf() - om.value.updateTime < 12e5) return;
        if (!e || !e.id) {
            const {
                coords: t
            } = cr();
            let n = null;
            t.value.longitude && (n = `${t.value.longitude},${t.value.latitude}`);
            let r = await nu({
                lang: "cn",
                coords: n
            });
            if (1 == r.status) return;
            e = r.data || {}
        }
        let n = {
                location: e.id
            },
            r = om.value;
        if (r = await ((e = {}) => {
                let t = ["62b03ea938124eeab5e6dc8c3c91e2e8", "30031e15d89a4cf8ba4869fb17129319"][Math.floor(2 * Math.random())];
                return am.get(`https://widget-api.heweather.net/s6/plugin/h5?key=${t}&unit=m`, {
                    params: e
                })
            })(n), "ok" != r.status) return void kn.set("weatherAsyncTime", "");
        let a = {
            adm1: e.adm1,
            adm2: e.adm2,
            name: e.name,
            id: e.id,
            ip: e.ip,
            country: e.country,
            location: e.location
        };
        return r.location = a, r.moment = (({
            rise: e,
            set: t
        }) => {
            if (!e || !t) return "d";
            let n = tn().format("YYYY-MM-DD");
            e = new Date(`${n} ${e}`).getTime(), t = new Date(`${n} ${t}`).getTime();
            let r = tn().valueOf();
            return r > e && r < t ? "d" : "n"
        })(r.sun || {}), om.value = u(u({}, om.value), r), om.value.updateTime = tn().valueOf(), sm.value.location = a, r
    }, um = async e => {
        let t = await co.get("weather24H");
        if (!e && t) return t;
        let n = {
                location: om.value.location.id,
                unit: "m"
            },
            r = await ((e = {}) => am.get("https://devapi.qweather.com/v7/weather/24h?key=f2e14c95cfdc4a1f86ecac13ca85086b", {
                params: e
            }))(n) || {};
        return co.set("weather24H", r, 36e5), r
    }, cm = () => {
        let e = tn().format("YYYY-MM-DD"),
            t = new Date(`${e} 06:00`).getTime(),
            n = new Date(`${e} 19:00`).getTime(),
            r = tn().valueOf();
        return r > t && r < n ? "d" : "n"
    }, fm = {
        100: "sunny",
        101: "cloudy",
        102: "cloudy",
        103: "cloudy",
        104: "yin",
        302: "thunder",
        303: "thunder",
        300: "rain",
        301: "rain",
        304: "rain",
        305: "rain",
        306: "rain",
        307: "rain",
        308: "rain",
        309: "rain",
        310: "rain",
        311: "rain",
        312: "rain",
        313: "rain",
        314: "rain",
        315: "rain",
        316: "rain",
        317: "rain",
        318: "rain",
        350: "rain",
        351: "rain",
        399: "rain",
        400: "snow",
        401: "snow",
        402: "snow",
        403: "snow",
        404: "snow",
        405: "snow",
        406: "snow",
        407: "snow",
        408: "snow",
        409: "snow",
        410: "snow",
        500: "foggy",
        501: "foggy",
        509: "foggy",
        510: "foggy",
        514: "foggy",
        515: "foggy"
    }, dm = e => {
        let t;
        return t = fm[e] ? `url(./weather/${fm[e]}_${cm()}.jpg)` : `url(https://cdn.heweather.com/img/plugin/190516/bg/h5/${e}${cm()}.png)`, t
    };
const hm = {
        key: 0,
        class: "weather-icon-medius d-flex-between wfull hfull"
    },
    gm = {
        class: "d-flex-between wfull"
    },
    pm = {
        style: {
            "font-size": ".7em"
        }
    },
    mm = {
        style: {
            "font-size": "1.3em"
        },
        class: "mt5"
    },
    vm = {
        class: "f12 ar",
        style: {
            "line-height": "1.1"
        }
    },
    Cm = {
        style: {
            "margin-top": ".3em"
        }
    },
    Em = {
        class: "d-flex-between f12 wfull",
        style: {
            "line-height": "1.4",
            "margin-top": "0.2em"
        }
    },
    Fm = {
        class: "d-flex-center"
    },
    ym = {
        key: 1,
        class: "wfull hfull"
    },
    Am = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    Dm = {
        class: "f14"
    },
    _m = {
        key: 1,
        class: "d-flex-center wfull hfull"
    },
    bm = {
        class: "wfull"
    },
    Bm = {
        class: "d-elip"
    },
    Im = {
        class: "f22 mt10"
    },
    xm = {
        key: 2,
        class: "d-flex-between hfull wfull",
        style: {
            "align-items": "flex-start",
            "flex-direction": "column"
        }
    },
    wm = {
        class: "d-elip"
    },
    Sm = {
        style: {
            "font-size": ".7em"
        }
    },
    Tm = {
        style: {
            "font-size": "1.3em"
        },
        class: "mt5"
    },
    Om = {
        class: "f12",
        style: {
            "font-size": ".6em"
        }
    },
    km = {
        style: {
            "margin-bottom": "2px"
        }
    },
    Mm = {
        name: "weather-icon"
    };
var Nm = Ln(Object.assign(Mm, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                n = On(),
                r = rm(),
                a = x("size-3"),
                i = re((() => {
                    const e = r.value.now || {};
                    if (e.cond_code) return {
                        backgroundImage: dm(e.cond_code)
                    }
                }));

            function o(e) {
                let t = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][tn(e).day()];
                return tn(e).format("DD") == tn().format("DD") && (t = "今天"), t
            }

            function s(e) {
                let t = e.height;
                a.value = t > 0 && t <= 50 ? "size-1" : t > 50 && t <= 80 ? "size-2" : "size-3"
            }
            return lm(n.value.location), (n, l) => {
                const u = et("el-icon"),
                    c = et("d-watch-resize");
                return Xe(), ae(c, {
                    onResize: s
                }, {
                    default: Dt((() => [se("div", {
                        style: Z(L(i)),
                        class: R([e.size, "weather-icon"])
                    }, ["medium" == t.size ? (Xe(), oe("div", hm, [se("div", gm, [se("div", null, [se("i", pm, j(L(r).location.name), 1), ge(u, {
                        style: {
                            "margin-left": "2px",
                            "font-size": ".6em"
                        }
                    }, {
                        default: Dt((() => [ge(L(ai))])),
                        _: 1
                    }), se("p", mm, j(L(r).now.tmp) + "°", 1)]), se("div", vm, [se("p", null, [se("i", {
                        class: R(["f18", `qi-${L(r).now.cond_code}-fill`])
                    }, null, 2)]), se("p", Cm, " 最低 " + j(L(r).daily_forecast[0] && L(r).daily_forecast[0].tmp_min) + "° 最高 " + j(L(r).daily_forecast[0] && L(r).daily_forecast[0].tmp_max) + "° ", 1)])]), se("ul", Em, [(Xe(!0), oe(V, null, Qe(L(r).daily_forecast, ((e, t) => (Xe(), oe("li", {
                        key: t
                    }, [se("p", null, j(o(e.date)), 1), se("p", Fm, [se("i", {
                        class: R(["f14 mr5", `qi-${e.cond_code_d}-fill`])
                    }, null, 2)]), se("p", null, j(e.tmp_min) + "/" + j(e.tmp_max), 1)])))), 128))])])) : (Xe(), oe("div", ym, ["size-1" == a.value ? (Xe(), oe("div", Am, [se("div", Dm, j(L(r).now.tmp) + "°", 1)])) : ie("", !0), "size-2" == a.value ? (Xe(), oe("div", _m, [se("span", bm, [se("p", Bm, j(L(r).location.name), 1), se("div", Im, j(L(r).now.tmp) + "°", 1)])])) : ie("", !0), "size-3" == a.value ? (Xe(), oe("div", xm, [se("div", null, [se("span", wm, [se("i", Sm, j(L(r).location.name), 1), ge(u, {
                        style: {
                            "margin-left": "2px",
                            "font-size": ".6em"
                        }
                    }, {
                        default: Dt((() => [ge(L(ai))])),
                        _: 1
                    })]), se("p", Tm, j(L(r).now.tmp) + "°", 1)]), se("div", Om, [se("p", km, [se("i", {
                        style: {
                            "font-size": ".6em"
                        },
                        class: R(`qi-${L(r).now.cond_code}`)
                    }, null, 2), he(" " + j(L(r).now.cond_txt), 1)]), he(" " + j(L(r).daily_forecast[0].tmp_min) + "° ~ " + j(L(r).daily_forecast[0].tmp_max) + "° ", 1)])])) : ie("", !0)]))], 6)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-0470a212"]
    ]),
    Pm = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Nm
    }),
    Lm = {};
Object.defineProperty(Lm, "__esModule", {
    value: !0
});
const Ym = Fo,
    Gm = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24"
    },
    Rm = [(0, Ym.createElementVNode)("path", {
        opacity: ".3",
        d: "M5 6h14v2H5z",
        fill: "currentColor"
    }, null, -1), (0, Ym.createElementVNode)("path", {
        d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z",
        fill: "currentColor"
    }, null, -1)];
var Hm = Lm.default = (0, Ym.defineComponent)({
    name: "CalendarMonthTwotone",
    render: function(e, t) {
        return (0, Ym.openBlock)(), (0, Ym.createElementBlock)("svg", Gm, Rm)
    }
});
const Zm = {
        key: 0,
        class: "jia-icon d-flex-center"
    },
    jm = {
        key: 1,
        class: "jia-icon"
    },
    zm = {
        class: "d-block"
    },
    Um = {
        class: "f12",
        style: {
            opacity: ".6"
        }
    },
    Xm = {
        class: "f12"
    },
    Vm = {
        class: "b f18"
    },
    Wm = he(" 天 "),
    $m = {
        name: "xiayigejiaqi-icon"
    };
var Jm = Ln(Object.assign($m, {
        setup(e) {
            const t = x([]),
                n = x(!1);

            function r(e) {
                let t = e.height;
                n.value = t < 80
            }
            const a = kn.get("xiayigejiaqiData"),
                i = tn().format("M"),
                o = kn.get("xiayigejiaqiUt");

            function s(e) {
                e = e.filter(((e, t) => {
                    let n = (new Date).getTime(),
                        r = tn(`${e.holiday} 23:59:59`).valueOf();
                    return n < tn(`${e.end||e.holiday} 23:59:59`).valueOf() || n < r
                })), kn.set("xiayigejiaqiData", e);
                let n = e.slice(0, 3);
                n.forEach((e => {
                    let t = (new Date).getTime(),
                        n = tn(`${e.start||e.holiday} 23:59:59`).valueOf();
                    e.diff = parseInt((n - t) / 864e5), e.diff = e.diff <= 0 ? "今" : e.diff, e.start ? e.date = `${tn(e.start).format("M.D")}-${tn(e.end).format("M.D")}` : e.date = `${tn(e.holiday).format("M.D")}`
                })), t.value = n
            }
            return a && o == i ? s(a) : ((e = {}) => Go.get("/xiayigejiaqi/list", {
                params: e
            }))().then((e => {
                let t = e.data || [];
                kn.set("xiayigejiaqiUt", i), s(t)
            })), (e, a) => {
                const i = et("d-watch-resize");
                return Xe(), ae(i, {
                    onResize: r
                }, {
                    default: Dt((() => [n.value ? (Xe(), oe("div", Zm, [ge(L(Hm), {
                        style: {
                            width: "70%",
                            height: "70%",
                            color: "#1affbf"
                        }
                    })])) : (Xe(), oe("div", jm, [(Xe(!0), oe(V, null, Qe(t.value, (e => (Xe(), oe("li", {
                        class: "d-flex-y",
                        key: e.start
                    }, [se("span", null, [se("em", zm, j(e.name), 1), se("em", Um, j(e.date), 1)]), se("span", Xm, [se("b", Vm, j(e.diff), 1), Wm])])))), 128))]))])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-2606fdda"]
    ]),
    Km = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module",
        default: Jm
    });
const Qm = kn.get("navConfig") || [],
    qm = (kn.get("baseConfig") || {}).layout.view,
    ev = [];
let tv = e => "string" == typeof e ? e : e + "px";
var nv = {
    w: {
        mounted(e, t) {
            t.value && (e.style.width = tv(t.value))
        },
        updated(e, t) {
            t.value && (e.style.width = tv(t.value))
        },
        unmounted(e) {
            e.style.width = null
        }
    },
    h: {
        mounted(e, t) {
            t.value && (e.style.height = tv(t.value))
        },
        updated(e, t) {
            t.value && (e.style.height = tv(t.value))
        },
        unmounted(e) {
            e.style.height = null
        }
    },
    font: {
        mounted(e, t) {
            t && t.value && (e.style.fontSize = `${t.value}`)
        },
        updated(e, t) {
            t && t.value && (e.style.fontSize = `${t.value}`)
        },
        unmounted(e) {
            e.style.fontSize = null
        }
    },
    color: {
        mounted(e, t) {
            t.value && (e.style.color = t.value)
        },
        updated(e, t) {
            t.value && (e.style.color = t.value)
        },
        unmounted(e) {
            e.style.color = null
        }
    },
    bgColor: {
        mounted(e, t) {
            t.value && (e.style.backgroundColor = t.value)
        },
        updated(e, t) {
            t.value && (e.style.backgroundColor = t.value)
        },
        unmounted(e) {
            e.style.backgroundColor = null
        }
    },
    size: {
        mounted: function(e, t) {
            e.style.height = tv(t.value), e.style.width = tv(t.value)
        },
        updated: function(e, t) {
            e.style.height = tv(t.value), e.style.width = tv(t.value)
        }
    },
    lh: {
        mounted: function(e, t) {
            e.style.lineHeight = tv(t.value)
        },
        updated: function(e, t) {
            e.style.lineHeight = tv(t.value)
        }
    },
    focus: {
        mounted: function(e, t) {
            t.value && setTimeout((() => {
                e.querySelector(".el-input__inner").focus()
            }))
        }
    }
};
const rv = function(e = {}, t) {
        const n = !!e.globalInjection,
            r = new Map,
            a = function(e, t, n) {
                return bl(e)
            }(e),
            i = Wo(""); {
            const e = {
                get mode() {
                    return "composition"
                },
                async install(t, ...r) {
                    t.__VUE_I18N_SYMBOL__ = i, t.provide(t.__VUE_I18N_SYMBOL__, e), n && function(e, t) {
                            const n = Object.create(null);
                            Yl.forEach((e => {
                                const r = Object.getOwnPropertyDescriptor(t, e);
                                if (!r) throw fl(cl.UNEXPECTED_ERROR);
                                const a = y(r.value) ? {
                                    get: () => r.value.value,
                                    set(e) {
                                        r.value.value = e
                                    }
                                } : {
                                    get: () => r.get && r.get()
                                };
                                Object.defineProperty(n, e, a)
                            })), e.config.globalProperties.$i18n = n, Gl.forEach((n => {
                                const r = Object.getOwnPropertyDescriptor(t, n);
                                if (!r || !r.value) throw fl(cl.UNEXPECTED_ERROR);
                                Object.defineProperty(e.config.globalProperties, `$${n}`, r)
                            }))
                        }(t, e.global),
                        function(e, t, ...n) {
                            const r = hs(n[0]) ? n[0] : {},
                                a = !!r.useI18nComponentName;
                            (!us(r.globalInstall) || r.globalInstall) && (e.component(a ? "i18n" : xl.name, xl), e.component(Tl.name, Tl), e.component(kl.name, kl)), e.directive("t", Ml(t))
                        }(t, e, ...r)
                },
                get global() {
                    return a
                },
                __instances: r,
                __getInstance: function(e) {
                    return r.get(e) || null
                },
                __setInstance: function(e, t) {
                    r.set(e, t)
                },
                __deleteInstance: function(e) {
                    r.delete(e)
                }
            };
            return e
        }
    }({
        locale: "zh",
        messages: {
            de: {
                bookmarks: {
                    Content: {
                        "5d91en8ftao0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["请输入ip地址"])
                        },
                        "5d91en8fujk0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["Mettre en doute"])
                        },
                        "5d91en8fuuk0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["地址"])
                        }
                    }
                },
                addApp: {
                    CustomAdd: {
                        "5d95uhj7zas0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t([])
                        },
                        "5d95uhj81us0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["网站名称"])
                        },
                        "5d95uhj82w40": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["网站描述"])
                        },
                        "5d95uhj83h40": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["默认图标"])
                        },
                        "5d95uhj84nk0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["正在自动获取网站信息"])
                        },
                        "5d95uhj85o00": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["图标文字："])
                        },
                        "5d95uhj862g0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["请输入图标文字"])
                        },
                        "5d95uhj87wo0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["图标颜色"])
                        },
                        "5d95uhj88pc0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["保"])
                        },
                        "5d95uhj88zg0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["编辑"])
                        },
                        "5d95uhj897o0": e => {
                            const {
                                normalize: t
                            } = e;
                            return t(["请输入链接地址和名称"])
                        }
                    }
                },
                add: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["添加"])
                },
                edit: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["编辑"])
                }
            },
            zh: {
                login: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["登录"])
                },
                logout: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["退出登录"])
                },
                add: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["添加"])
                },
                me: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["我的"])
                },
                group: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["分组"])
                },
                edit: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["编辑"])
                },
                icon: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["图标"])
                },
                name: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["名称"])
                },
                save: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["保存"])
                },
                cancel: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["取消"])
                },
                remove: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["删除"])
                },
                small: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["小"])
                },
                medium: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["中"])
                },
                large: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["大"])
                },
                tip: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["提示"])
                },
                warning: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["警告"])
                },
                translate: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["翻译"])
                },
                setting: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["设置"])
                },
                addIcon: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["添加图标"])
                },
                changeWallpaper: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["切换壁纸"])
                },
                downWallpaper: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["下载壁纸"])
                },
                targetGroup: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["目标分组"])
                },
                setting_searcher: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["搜索栏"])
                },
                setting_search: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([""])
                },
                setting_searcherHeight: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["高度"])
                },
                setting_searcherRadius: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["圆角"])
                },
                setting_searcherBackground: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["透明度"])
                },
                setting_theme: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["主题"])
                },
                setting_dark: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["深色模式"])
                },
                setting_auto: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["跟随系统"])
                },
                setting_primaryColor: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["主题色"])
                },
                setting_sidebar: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["侧边栏"])
                },
                setting_sidebarLeft: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["左侧"])
                },
                setting_sidebarRight: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["右侧"])
                },
                setting_sidebarAutoHide: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["自动隐藏"])
                },
                setting_sidebarWidth: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["宽度"])
                },
                setting_wallpaper: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["壁纸"])
                },
                setting_wallpaperChange: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["更换壁纸"])
                },
                setting_downloadLocal: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["下载壁纸"])
                },
                setting_wallpaperMask: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["遮罩"])
                },
                setting_wallpaperBlur: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["模糊"])
                },
                setting_layout: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["布局"])
                },
                setting_yiYan: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["底部显示一言"])
                },
                setting_icon: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["图标"])
                },
                setting_layoutSimple: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["极简模式"])
                },
                setting_iconName: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["图标名称"])
                },
                setting_iconNameSize: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["大小"])
                },
                setting_iconNameColor: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["名称颜色"])
                },
                setting_iconStartAnimation: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["启动动画"])
                },
                setting_iconRadius: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["圆角"])
                },
                setting_iconSize: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["大小"])
                },
                setting_iconRow: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["行间距"])
                },
                setting_iconColumn: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["列间距"])
                },
                setting_iconOpacity: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["不透明度"])
                },
                setting_lang: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["语言"])
                },
                setting_resetSetting: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["重置设置"])
                },
                setting_reset: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["重置"])
                },
                setting_time: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["时间/日期"])
                },
                setting_timeSize: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["字体大小"])
                },
                setting_timeFont: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["时间字体"])
                },
                setting_timeWeight: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["字体粗细"])
                },
                setting_timeColor: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["字体颜色"])
                },
                setting_showMonth: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["月日"])
                },
                setting_showWeek: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["周"])
                },
                setting_showLunar: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["农历"])
                },
                setting_aboutus: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["关于我们"])
                },
                setting_home: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["主页"])
                },
                setting_appWebsite: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["应用官网"])
                },
                setting_contact: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["联系我们"])
                },
                setting_privacy: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["隐私政策"])
                },
                setting_feedback: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["产品反馈"])
                },
                setting_share: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["分享"])
                },
                setting_rate: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["反馈与评分"])
                },
                setting_rateDesc: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["您的五星好评就是对我最大的支持和鼓励！"])
                },
                setting_backup: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["备份与恢复"])
                },
                setting_exportLocal: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["导出到本地"])
                }
            }
        }
    }),
    av = Tt(Sd);
(e => {
    if ("simple" == qm) return;
    (Qm[0] && Qm[0].children || []).forEach((e => {
        if (e && "component" == e.type) {
            let t = e.config && e.config.icon || "",
                n = `${e.component}-icon${t}`;
            ev.push(n)
        }
    }));
    const t = {
        "./app/bookmarks/icon/icon.vue": Rd,
        "./app/calendar/icon/icon.vue": ah,
        "./app/daysMatter/icon/icon.vue": mh,
        "./app/daysMatter/icon/icon2.vue": Fh,
        "./app/daysMatter/icon/icon3.vue": xh,
        "./app/daysMatter/icon/icon4.vue": Th,
        "./app/habit/icon/icon.vue": Xh,
        "./app/ip/icon/icon.vue": qh,
        "./app/jikipedia/icon/icon.vue": gg,
        "./app/multiavatar/icon/icon.vue": Ag,
        "./app/notes/icon/icon.vue": xg,
        "./app/remai/icon/icon.vue": Xg,
        "./app/robot/icon/icon.vue": cp,
        "./app/stock/icon/icon.vue": Bp,
        "./app/todo/icon/icon.vue": kp,
        "./app/topsearch/icon/icon.vue": Xp,
        "./app/uppercase/icon/icon.vue": Kp,
        "./app/wallpaper/icon/icon.vue": tm,
        "./app/weather/icon/icon.vue": Pm,
        "./app/xiayigejiaqi/icon/icon.vue": Km
    };
    Object.keys(t).map((n => {
        let r = n.replace(/[^\d]/g, ""),
            a = `${n.split("/")[2]}-icon${r}`,
            i = t[n].default;
        ev.includes(a) && e.component(a, i)
    }))
})(av), av.use(Pd), av.use(Nd), setTimeout((() => {
    Object.keys(nv).forEach((e => av.directive(e, nv[e])))
}), 0), av.use(rv), av.config.errorHandler = (e, t, n) => {
    console.error(e), ((e = {}) => Go.get("api/wechat/robot", {
        params: e
    }))({
        origin: `${oo()}，${window.location.origin}`,
        err: e.message,
        info: `vmName:${t._.type.name},info,`
    }).then((e => {
        let t = e.data || {};
        t.code && dr((() => import("./versionNotice.ad65b234.js")), ["assets/versionNotice.ad65b234.js", "assets/el-button.0a4ba32a.js"]).then((e => {
            e.default({
                modelValue: !0,
                title: "通知",
                center: !0
            }, t.content)
        }))
    }))
}, setTimeout((() => {
    let e = (new Date).getTime() - new Date("2021-10-12");
    // console.log("%c路有多远，\n只有心知道，\n最美的旅程，\n是不断的经历，\n坚持走下去．\n我是iTab开发者,\n与您同行！", "line-height:22px;color:#00a5f2"), console.log(`%ciTab已上线%c ${~~(e/864e5)} 天`, "line-height:22px;", "line-height:22px;"), console.log("%c官网%chttps://itab.link", "line-height:22px; background-color:#555", "line-height:22px;background-color:#007ec6")
})), av.mount("#app");
export {
    Lo as $, Mr as A, Or as B, mh as C, $h as D, la as E, Fh as F, xh as G, Th as H, Uh as I, nu as J, eg as K, ng as L, tg as M, vr as N, Tg as O, ei as P, Ng as Q, kg as R, yi as S, Og as T, Sg as U, hp as V, gp as W, ed as X, dp as Y, pp as Z, dr as _, io as a, mp as a0, hi as a1, Ua as a2, rm as a3, dm as a4, um as a5, ai as a6, im as a7, lm as a8, ba as a9, Rd as aa, ah as ab, Xh as ac, qh as ad, gg as ae, Ag as af, xg as ag, Xg as ah, cp as ai, Bp as aj, kp as ak, Xp as al, Kp as am, tm as an, Pm as ao, Km as ap, Ll as b, ro as c, Po as d, td as e, du as f, Xo as g, _d as h, so as i, Go as j, vi as k, wr as l, oo as m, uo as n, No as o, co as p, Ja as q, Fo as r, Ha as s, no as t, wu as u, jr as v, yr as w, br as x, kr as y, Nr as z
};