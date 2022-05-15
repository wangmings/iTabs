var e = Object.defineProperty,
    a = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    t = Object.prototype.propertyIsEnumerable,
    l = (a, i, t) => i in a ? e(a, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : a[i] = t;
import {
    a4 as n,
    ay as o,
    U as s,
    a2 as r,
    c4 as d,
    dv as p,
    ce as c,
    b$ as u,
    r as m,
    k as v,
    Q as f,
    as as b,
    cl as g,
    bq as h,
    aY as V,
    al as x,
    aw as y,
    aG as j,
    x as k,
    W as w,
    b1 as z,
    V as D,
    X as _,
    D as H,
    I as C,
    aE as M,
    bp as $,
    A as O,
    f as T,
    bD as A,
    a1 as I,
    dw as E,
    c3 as S
} from "./el-button.0a4ba32a.js";
import {
    u as G,
    b as L,
    c as P,
    o as R,
    $ as U,
    d as Y,
    e as W,
    D as B,
    P as q,
    S as N,
    f as Q
} from "./main.858372aa.js";
import {
    E as X
} from "./el-input.b3ba137c.js";
import "./el-overlay.ebdea840.js";
import {
    E as F
} from "./el-avatar.cb4a201b.js";
import "./el-popover.5fb0ff22.js";
import "./el-popper.7e8f10c3.js";
import J from "./sponsor.d93fe792.js";
import {
    E as K
} from "./index.2ebbd8b1.js";
import {
    E as Z
} from "./index.1c036255.js";
import "./typescript.72bf8adc.js";
import "./el-dialog.4b8a03dc.js";
import "./index.8dc67c0c.js";
import "./index.f364da82.js";
import "./event.0bae16b8.js";
import "./deprecation.bfd0cf7f.js";
import "./index.c956e740.js";
import "./index.065a2d57.js";
import "./validator.053f84bf.js";
var ee = n({
    name: "HotWater"
});
const ae = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ie = r("path", {
        fill: "currentColor",
        d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
    }, null, -1);
ee.render = function(e, a, i, t, l, n) {
    return o(), s("svg", ae, [ie])
}, ee.__file = "packages/components/HotWater.vue";
var te = ee,
    le = n({
        name: "Menu"
    });
const ne = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    oe = r("path", {
        fill: "currentColor",
        d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
    }, null, -1);
le.render = function(e, a, i, t, l, n) {
    return o(), s("svg", ne, [oe])
}, le.__file = "packages/components/Menu.vue";
var se = le;
const re = {
        key: 0,
        class: "app-buttons"
    },
    de = {
        class: "app-sidebar-body"
    },
    pe = {
        key: 0,
        class: "mt5 d-elip"
    },
    ce = {
        class: "app-sidebar-group d-scrollbar-hide"
    },
    ue = ["onContextmenu", "onDragenter", "onDragstart", "onDrop", "onClick"],
    me = ["title", "id"],
    ve = {
        class: "d-elip app-group-item-title"
    },
    fe = {
        class: "app-group-icon"
    },
    be = ["title", "onClick"],
    ge = {
        class: "mb5 mt5"
    },
    he = {
        class: "mt5"
    };
var Ve = d({
    setup(e) {
        const n = G(),
            s = p(),
            {
                t: d
            } = L(),
            ee = c(),
            ae = u(),
            ie = m({
                iconList: ["home", "xin", "music", "chat", "office", "entertainment", "shop", "app", "code", "learn", "read", "tool", "zan", "collect"],
                juanzhuVisible: !1,
                addVisible: !1,
                sideVisible: !1,
                contextmenuVisible: !1,
                contextmenuData: [{
                    name: d("edit"),
                    key: "edit",
                    icon: "edit"
                }, {
                    name: d("remove"),
                    key: "del",
                    icon: "remove"
                }],
                dragData: null
            }),
            le = m({
                name: "",
                icon: "xin",
                children: []
            }),
            ne = v(null),
            oe = v(null),
            Ve = f((() => n.menuActiveId)),
            xe = f((() => ae.value.sidebar.placement || "left")),
            ye = f((() => P || ae.value.sidebar.autoHide)),
            je = () => {
                s.value.username ? n.setSettingHandle(1) : n.setLoginInfo("reg")
            };
        let ke = 0,
            we = 0,
            ze = v("add");

        function De() {
            if ("add" == ze.value) ee.value.push({
                id: E("nav"),
                name: le.name,
                icon: le.icon,
                children: []
            });
            else {
                let e = ((e, n) => {
                    for (var o in n || (n = {})) i.call(n, o) && l(e, o, n[o]);
                    if (a)
                        for (var o of a(n)) t.call(n, o) && l(e, o, n[o]);
                    return e
                })({}, le);
                ee.value.splice(we, 1, e)
            }
            ie.addVisible = !1, le.icon = "xin", le.name = "", le.children = []
        }

        function _e(e) {
            ie.contextmenuVisible = !1;
            let a = ee.value[we];
            if ("edit" == e.key) ze.value = "edit", ie.addVisible = !0, le.id = a.id, le.name = a.name, le.icon = a.icon, le.children = a.children, setTimeout((() => {
                let e = oe.value.popperRef.contentRef.style.transform;
                e = e.substring(e.indexOf("(") + 1, e.indexOf(",")), oe.value.popperRef.contentRef.style.transform = `translate(${e}, ${ke}px)`
            }));
            else if ("del" == e.key) {
                if (1 == ee.value[we].id) return void S("此分组不能删除");
                Z.confirm("此操作将会删除分组下的所有内容, 是否继续?", "Tips", {
                    center: !0,
                    type: "warning"
                }).then((() => {
                    ee.value.splice(we, 1)
                }))
            }
        }

        function He() {
            n.setSettingHandle(2)
        }

        function Ce(e) {
            let a = ee.value.findIndex((e => e.id == Ve.value)),
                i = ee.value.length - 1;
            "up" == e ? (a--, a < 0 && (a = i)) : (a++, a > i && (a = 0));
            let t = ee.value[a].id;
            n.setMenuActive(t), setTimeout((() => {
                U(`#app-grid_${Ve.value}`).scrollTop = 0
            }), 100)
        }

        function Me(e) {
            let a = -e.wheelDelta || 40 * -e.deltaY,
                i = U(`#app-grid_${Ve.value}`),
                t = U(`#app-grid_${Ve.value} .app-grid`).clientHeight - i.clientHeight,
                l = i.scrollTop + a;
            if (i.scrollTo({
                    top: l,
                    behavior: "smooth"
                }), l <= 0) return void Ce("up");
            let n = ~~i.scrollTop;
            (n == t || n + 1 == t || n - 1 == t || t < 0) && Ce("down")
        }

        function $e(e) {
            ye && (ie.sideVisible = !0)
        }

        function Oe(e) {
            ye && (ie.addVisible || ie.contextmenuVisible || (ie.sideVisible = !1))
        }

        function Te() {
            ie.addVisible = !1, Oe()
        }
        return b((() => {
            g() || (R(U("#app-main"), "mousewheel", h(Me, 160, {
                leading: !0,
                trailing: !1
            }), !1), R(U("#app-main"), "DOMMouseScroll", h(Me, 160, {
                leading: !0,
                trailing: !1
            }), !1))
        })), V(Ve, (e => {
            x((() => {
                ! function(e) {
                    let a = U(`#app-grid_${e}`),
                        i = U(`#app-grid_${e} .app-grid`);
                    if (!a || !i) return;
                    let t = i.clientHeight - a.clientHeight;
                    // a.addEventListener("mousewheel", (e => {
                    //     let i = -e.wheelDelta || -e.deltaY;
                    //     if (g())
                    //         if (i < 0 && 0 == a.scrollTop) Ce("up");
                    //         else {
                    //             let e = ~~a.scrollTop;
                    //             (e == t || e + 1 == t || e - 1 == t || t < 0) && Ce("down")
                    //         }
                    //     else e.preventDefault()
                    // }))
                }(e)
            }))
        }), {
            immediate: !0
        }), R(document, "mousedown", (function(e) {
            var a, i;
            U(".v-contextmenu").contains(e.target) || (null == (a = U(".app-group-popover")) ? void 0 : a.contains(e.target)) || (null == (i = U("#app-sidebar")) ? void 0 : i.contains(e.target)) || (ie.addVisible = !1, Te())
        })), y((() => {
            Y(U("#app-main"), "mousewheel", Me), Y(U("#app-main"), "DOMMouseScroll", Me)
        })), (e, a) => {
            const i = j("el-icon");
            return "widget" == k(ae).layout.view ? (o(), w("div", {
                key: 0,
                onMouseenter: $e,
                onMouseleave: Oe,
                class: O(["app-sidebar", [`is-${k(xe)}`, {
                    active: k(ie).sideVisible
                }, {
                    "is-autoHide": k(ye)
                }]]),
                id: "app-sidebar"
            }, [k(P) ? (o(), w("div", re, [r(i, {
                onClick: $e,
                icon: "icon-home",
                size: 18
            }, {
                default: z((() => [r(k(se))])),
                _: 1
            })])) : D("", !0), _("div", de, [_("div", {
                onClick: je,
                class: "app-sidebar-avatar"
            }, [r(k(F), {
                class: "app-avatar",
                style: {
                    "--el-avatar-bg-color": "none"
                },
                src: k(W)(k(s).avatar || "https://files.codelife.cc/itab.link/logo/avatar.png", 40),
                size: 30
            }, null, 8, ["src"]), k(s)._id ? D("", !0) : (o(), w("p", pe, H(k(d)("login")), 1))]), _("ul", ce, [(o(!0), w(C, null, M(k(ee), ((e, i) => (o(), w("li", {
                onContextmenu: $((e => function(e, a) {
                    ie.contextmenuVisible = !0, ne.value.open(e), we = a, ke = e.clientY - 110
                }(e, i)), ["prevent", "stop"]),
                draggable: !0,
                onDragover: a[0] || (a[0] = $((() => {}), ["prevent"])),
                onDragenter: a => function(e, a) {
                    ie.dragData || n.setMenuActive(a.id)
                }(0, e),
                onDragstart: a => function(e, a) {
                    ie.dragData = a
                }(0, e),
                onDrop: a => function(e, a) {
                    if (ye && (ie.sideVisible = !0, ie.dragData)) {
                        let e = ee.value.findIndex((e => e == ie.dragData)),
                            i = ee.value.findIndex((e => e == a));
                        ee.value[e] = ee.value.splice(i, 1, ie.dragData)[0], ie.dragData = null
                    }
                }(0, e),
                class: O(["app-group-item hover", {
                    active: e.id == k(Ve)
                }]),
                onClick: a => k(n).setMenuActive(e.id),
                key: e
            }, [_("div", {
                title: e.name,
                id: e.id
            }, [r(B, {
                size: 18,
                icon: `icon-${e.icon}`
            }, null, 8, ["icon"]), _("p", ve, H(e.name), 1)], 8, me)], 42, ue)))), 128)), r(k(K), {
                ref_key: "refGrouppopover",
                ref: oe,
                "popper-class": "app-group-popover",
                placement: "left" == k(xe) ? "right" : "left",
                title: `${"add"==k(ze)?k(d)("add"):k(d)("edit")}${k(d)("group")}`,
                width: 260,
                trigger: "manual",
                visible: k(ie).addVisible,
                "onUpdate:visible": a[3] || (a[3] = e => k(ie).addVisible = e)
            }, {
                reference: z((() => [_("li", {
                    id: "appGroupAdd",
                    class: "app-group-item hover",
                    onClick: a[1] || (a[1] = e => (k(ie).addVisible = !k(ie).addVisible, T(ze) ? ze.value = "add" : ze = "add"))
                }, [r(i, {
                    size: 16
                }, {
                    default: z((() => [r(k(q))])),
                    _: 1
                })])])),
                default: z((() => [_("h5", null, H(k(d)("icon")), 1), _("ul", fe, [(o(!0), w(C, null, M(k(ie).iconList, (e => (o(), w("li", {
                    title: e.name,
                    class: O(["app-group-icon-item hover", {
                        active: e == k(le).icon
                    }]),
                    key: e,
                    onClick: a => k(le).icon = e
                }, [r(B, {
                    class: "d-icon",
                    icon: `icon-${e}`,
                    size: 16
                }, null, 8, ["icon"])], 10, be)))), 128))]), _("h5", ge, H(k(d)("name")), 1), r(k(X), {
                    class: "app-group-input",
                    size: "default",
                    maxlength: "12",
                    modelValue: k(le).name,
                    "onUpdate:modelValue": a[2] || (a[2] = e => k(le).name = e),
                    placeholder: k(d)("name")
                }, null, 8, ["modelValue", "placeholder"]), _("div", he, [r(k(A), {
                    class: "mr10",
                    type: "primary",
                    size: "small",
                    onClick: De
                }, {
                    default: z((() => [I(H(k(d)("save")), 1)])),
                    _: 1
                }), r(k(A), {
                    size: "small",
                    onClick: Te
                }, {
                    default: z((() => [I(H(k(d)("cancel")), 1)])),
                    _: 1
                })])])),
                _: 1
            }, 8, ["placement", "title", "visible"])]), _("div", {
                class: "d-flex-center mb5 d-pointer",
                onClick: a[4] || (a[4] = e => k(ie).juanzhuVisible = !0)
            }, [r(i, {
                size: 20,
                title: "支持一下"
            }, {
                default: z((() => [r(k(te))])),
                _: 1
            })]), r(J, {
                modelValue: k(ie).juanzhuVisible,
                "onUpdate:modelValue": a[5] || (a[5] = e => k(ie).juanzhuVisible = e)
            }, null, 8, ["modelValue"]), _("div", {
                id: "step2",
                class: "app-sidebar-setting d-flex-center",
                onClick: He
            }, [_("p", null, [r(i, {
                class: "icon-setting",
                size: 20
            }, {
                default: z((() => [r(k(N))])),
                _: 1
            })])])]), r(Q, {
                uid: "homeNavGroup_81d8fg",
                onClick: _e,
                data: k(ie).contextmenuData,
                ref_key: "refContextmenu",
                ref: ne
            }, null, 8, ["data"])], 34)) : D("", !0)
        }
    }
}, [
    ["__scopeId", "data-v-fd32a3e8"]
]);
export {
    Ve as
    default
};