(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [, , function(t, e, n) {}, function(t, e, n) {
        "use strict";
        var s = n(4),
            i = n.n(s);
        e.default = i.a
    }, function(t, e) {}, , , function(t, e, n) {
        "use strict";
        var s = function() {
                var t = this.$createElement;
                return (this._self._c || t)("div", [this._v("\n    404\n")])
            },
            i = [];
        n.d(e, "a", function() {
            return s
        }), n.d(e, "b", function() {
            return i
        })
    }, function(t, e, n) {
        "use strict";
        var s = n(7),
            i = n(3),
            a = n(0),
            o = Object(a.a)(i.default, s.a, s.b, !1, null, null, null);
        e.default = o.exports
    }, function(t, e, n) {
        "use strict";
        var s = n(2);
        n.n(s).a
    }, , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var s = n(1),
            i = {
                props: ["profile"]
            },
            a = n(0),
            o = {
                props: ["menu"],
                data: () => ({
                    selectedLink: "",
                    showMenu: !0,
                    menuIconAllow: !1
                }),
                created: function() {
                    this.selectedLink = this.$route.path, console.log(this.$route.path)
                },
                methods: {
                    menuToggle: function() {
                        this.showMenu = !this.showMenu
                    },
                    selectLink: function(t) {
                        this.selectedLink = t
                    }
                }
            },
            l = {
                props: ["data"],
                components: {
                    Profile: Object(a.a)(i, function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "profile"
                        }, [n("div", {
                            staticClass: "profile-content"
                        }, [n("div", {
                            staticClass: "profile-pic"
                        }, [n("img", {
                            attrs: {
                                src: t.profile.image,
                                alt: "User"
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "profile-name title"
                        }, [t._v("\n          " + t._s(t.profile.name) + "\n        ")]), t._v(" "), n("div", {
                            staticClass: "profile-designation subtitle"
                        }, [t._v("\n          " + t._s(t.profile.domains) + "\n        ")]), t._v(" "), n("div", {
                            staticClass: "profile-about body"
                        }, [t._v("\n          " + t._s(t.profile.vision) + "\n        ")]), t._v(" "), n("ul", {
                            staticClass: "profile-footer"
                        }, t._l(t.profile.link, function(e) {
                            return n("a", {
                                key: e.title,
                                attrs: {
                                    href: e.url
                                }
                            }, [n("li", [n("i", {
                                class: "profile-icon " + e.icon
                            }), t._v("\n              " + t._s(e.label) + "\n            ")])])
                        }), 0)])])
                    }, [], !1, null, null, null).exports,
                    Menu: Object(a.a)(o, function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "menu"
                        }, [n("div", {
                            staticClass: "menu-control",
                            on: {
                                click: t.menuToggle
                            }
                        }, [n("div", {
                            staticClass: "menu-title",
                            attrs: {
                                id: "menuTitle"
                            }
                        }, [t._v("Tópicos")]), t._v(" "), n("div", {
                            staticClass: "fas fa-bars menu-icon",
                            attrs: {
                                id: "menuIcon"
                            }
                        })]), t._v(" "), t.showMenu ? n("ul", {
                            staticClass: "menu-list"
                        }, [n("span", {
                            staticClass: "menu-list-span"
                        }, t._l(t.menu, function(e) {
                            return n("router-link", {
                                key: e.title,
                                attrs: {
                                    to: e.to
                                }
                            }, [e.display ? n("li", {
                                staticClass: "menu-list-item",
                                class: {
                                    "menu-list-selected": t.selectedLink == e.to
                                },
                                on: {
                                    click: function(n) {
                                        return t.selectLink(e.to)
                                    }
                                }
                            }, [t.menuIconAllow ? n("i", {
                                class: e.icon
                            }) : t._e(), t._v(t._s(e.title) + "\n                ")]) : t._e()])
                        }), 1)]) : t._e()])
                    }, [], !1, null, null, null).exports
                },
                data: () => ({
                    render: !1,
                    routerView: {
                        name: "ocupação",
                        to: "/ocupação"
                    }
                }),
                watch: {
                    data: function() {
                        this.render = !0
                    }
                }
            },
            r = (n(9), Object(a.a)(l, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "view"
                    }
                }, [t.render ? n("Profile", {
                    attrs: {
                        profile: t.data.profile
                    }
                }) : n("div", [t._v("\n    Carregando...\n  ")]), t._v(" "), t.render ? n("div", {
                    staticClass: "view-body"
                }, [n("Menu", {
                    attrs: {
                        menu: t.data.menu
                    }
                }), t._v(" "), n("div", {
                    staticClass: "content"
                }, [n("div", {
                    staticClass: "content-body"
                }, [n("router-view", {
                    attrs: {
                        home: t.data.home,
                        profile: t.data.profile,
                        document: t.data.document,
                        ocupação: t.data.ocupação,
                        projetos: t.data.projetos,
                        habilidades: t.data.habilidades,
                        publicações: t.data.publicações,
                        grupos: t.data.grupos,
                        communities: t.data.communities,
                        formação: t.data.formação,
                        courses: t.data.courses,
                        blog: t.data.blog,
                        apresentações: t.data.apresentações,
                        interesses: t.data.interesses,
                        to: t.routerView.to
                    }
                })], 1), t._v(" "), t._m(0)])], 1) : t._e()], 1)
            }, [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "footer"
                }, [this._v("\n            Por "), e("a", {
                    attrs: {
                        href: "https://ramantehlan.github.io"
                    }
                }, [this._v("Raman Tehlan")]), this._v(" | "), e("a", {
                    attrs: {
                        href: "https://github.com/ramantehlan/Moi"
                    }
                }, [this._v("Open Source")])])
            }], !1, null, null, null).exports),
            c = n(6),
            u = {
                props: ["home", "profile", "document"]
            },
            d = (Object(a.a)(u, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "small-content-body"
                }, [n("h1", [t._v(" " + t._s(t.home.title) + " ")]), t._v(" "), n("p", {
                    staticClass: "home-p",
                    domProps: {
                        innerHTML: t._s(t.home.body)
                    }
                }), t._v(" "), n("p", {
                    staticClass: "home-signature",
                    domProps: {
                        innerHTML: t._s(t.home.signature)
                    }
                }), t._v(" "), n("p", {
                    staticClass: "social-media-box"
                }, [n("a", {
                    staticClass: "btn",
                    attrs: {
                        href: "https://twitter.com/intent/tweet?&text=Hey!%20Check%20this%20profile%20out.&tw_p=tweetbutton&url=" + t.profile.url,
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-twitter"
                }), t._v(" Tweet")]), t._v(" "), n("a", {
                    staticClass: "btn",
                    attrs: {
                        href: "https://www.facebook.com/sharer/sharer.php?u=" + t.profile.url,
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-facebook-f"
                }), t._v(" Share ")]), t._v(" "), n("a", {
                    staticClass: "btn",
                    attrs: {
                        href: "http://www.reddit.com/submit?url=" + t.profile.url + "&title=" + t.document.title,
                        target: "_blank"
                    }
                }, [n("i", {
                    staticClass: "fab fa-reddit-alien"
                }), t._v(" Post")])])])
            }, [], !1, null, null, null).exports, {
                props: ["info"],
                data: () => ({
                    showCard: !1
                }),
                methods: {
                    cardDown: function() {
                        this.showCard = !this.showCard
                    }
                }
            }),
            m = Object(a.a)(d, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "card"
                }, [n("div", {
                    staticClass: "card-header"
                }, [n("i", {
                    staticClass: "fa fa-arrow-down card-arrow",
                    attrs: {
                        id: t.info.key
                    },
                    on: {
                        click: t.cardDown
                    }
                }), t._v(" "), t.info.title ? n("div", {
                    staticClass: "title"
                }, [n("a", {
                    attrs: {
                        href: t.info.url
                    }
                }, [t._v("\n        " + t._s(t.info.title) + "\n      ")])]) : t._e(), t._v(" "), t.info.companyName ? n("div", {
                    staticClass: "title"
                }, [n("a", {
                    attrs: {
                        href: t.info.companyUrl
                    }
                }, [t._v("\n        " + t._s(t.info.companyName) + "\n      ")])]) : t._e(), t._v(" "), t.info.institute ? n("div", {
                    staticClass: "title"
                }, [n("a", {
                    attrs: {
                        href: t.info.url
                    }
                }, [t._v("\n        " + t._s(t.info.institute) + "\n      ")])]) : t._e(), t._v(" "), t.showCard ? n("div", {
                    staticClass: "card-section"
                }, [t.info.subtitle ? n("div", {
                    staticClass: "subtitle"
                }, [t._v("\n        " + t._s(t.info.subtitle) + "   \n      ")]) : t._e(), t._v(" "), t.info.level ? n("div", {
                    staticClass: "subtitle"
                }, [n("i", {
                    staticClass: "fas fa-user-graduate icon"
                }), t._v("\n        " + t._s(t.info.level) + "\n      ")]) : t._e(), t._v(" "), t.info.from ? n("div", {
                    staticClass: "subtitle"
                }, [n("i", {
                    staticClass: "fa fa-university icon"
                }), t._v("\n        " + t._s(t.info.from) + "\n      ")]) : t._e(), t._v(" "), t.info.role ? n("div", {
                    staticClass: "subtitle"
                }, [n("i", {
                    staticClass: "fas fa-user icon"
                }), t._v("\n        " + t._s(t.info.role) + "\n      ")]) : t._e(), t._v(" "), t.info.location ? n("div", {
                    staticClass: "subtitle"
                }, [n("i", {
                    staticClass: "fas fa-map-marker icon"
                }), t._v("\n        " + t._s(t.info.location) + "\n      ")]) : t._e(), t._v(" "), t.info.event ? n("div", {
                    staticClass: "subtitle"
                }, [n("i", {
                    staticClass: "fas fa-location-arrow icon"
                }), t._v(" "), n("a", {
                    attrs: {
                        href: t.info.eventUrl
                    }
                }, [t._v("\n          " + t._s(t.info.event) + "\n        ")])]) : t._e(), t._v(" "), t.info.productType ? n("div", {
                    staticClass: "subtitle"
                }, [n("i", {
                    staticClass: "fas fa-tools icon"
                }), t._v("\n        " + t._s(t.info.productType) + "\n      ")]) : t._e(), t._v(" "), n("div", {
                    staticClass: "subtitle "
                }, [n("i", {
                    staticClass: "fas fa-clock icon"
                }), t._v("\n        " + t._s(t.info.timeline) + "\n      ")]), t._v(" "), t.info.tag ? n("div", {
                    staticClass: "subtitle badge-container"
                }, [n("i", {
                    staticClass: "fas fa-tags icon"
                }), t._v(" "), t._l(t.info.tag, function(e) {
                    return n("div", {
                        key: e,
                        staticClass: "badge"
                    }, [t._v(t._s(e))])
                })], 2) : t._e(), t._v(" "), t.info.about ? n("div", {
                    staticClass: "card-body body",
                    domProps: {
                        innerHTML: t._s(t.info.about)
                    }
                }) : t._e(), t._v(" "), t.info.coursework ? n("div", {
                    staticClass: "card-body body"
                }, [n("div", {
                    staticClass: "card-body-grid"
                }, t._l(t.info.coursework, function(e, s) {
                    return n("div", {
                        key: s,
                        staticClass: "card-body-grid-box"
                    }, [n("b", [t._v(t._s(s))]), t._v(" "), n("ul", t._l(e, function(e) {
                        return n("li", {
                            key: e
                        }, [t._v("- " + t._s(e))])
                    }), 0)])
                }), 0)]) : t._e(), t._v(" "), n("div", {
                    staticClass: "card-footer"
                }, [n("div", {
                    staticClass: "card-number"
                }, [t._v("\n        #" + t._s(t.info.id) + "\n      ")])])]) : t._e()])])
            }, [], !1, null, null, null).exports,
            h = {
                props: ["publicações"],
                components: {
                    Card: m
                }
            },
            v = Object(a.a)(h, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "break-heading"
                }, [this._v("Trabalhos publicados [" + this._s(this.publicações.length) + "]")]), this._v(" "), this._l(this.publicações, function(t) {
                    return e("card", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                })], 2)
            }, [], !1, null, null, null).exports,
            _ = {
                props: ["blog"],
                components: {
                    Card: m
                }
            },
            f = Object(a.a)(_, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "break-heading"
                }, [this._v("Blog [" + this._s(this.blog.length) + "]")]), this._v(" "), this._l(this.blog, function(t) {
                    return e("card", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                })], 2)
            }, [], !1, null, null, null).exports,
            p = {
                props: ["info"],
                data: () => ({})
            },
            b = Object(a.a)(p, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("a", {
                    attrs: {
                        href: t.info.url
                    }
                }, [n("div", {
                    staticClass: "small-card subtitle"
                }, [t.info.title ? n("div", {
                    staticClass: "subtitle"
                }, [t.info.icon ? n("i", {
                    class: t.info.icon + " link-logo"
                }) : t._e(), t._v("\n        " + t._s(t.info.title) + "\n      ")]) : t._e(), t._v(" "), t.info.timeline ? n("div", {
                    staticClass: "subtitle light"
                }, [t._v("\n          " + t._s(t.info.timeline) + "\n      ")]) : t._e()])])])
            }, [], !1, null, null, null).exports,
            C = {
                props: ["grupos", "communities"],
                components: {
                    SmallCard: b
                }
            },
            k = Object(a.a)(C, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("div", {
                    staticClass: "break-heading"
                }, [t._v("Grupos de Extensão[" + t._s(t.grupos.length) + "]")]), t._v(" "), n("div", {
                    staticClass: "small-card-holder"
                }, t._l(t.grupos, function(t) {
                    return n("SmallCard", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                }), 1), t._v(" "), n("div", {
                    staticClass: "break-heading"
                }, [t._v("Grupos de Pesquisa [" + t._s(t.communities.length) + "]")]), t._v(" "), n("div", {
                    staticClass: "small-card-holder"
                }, t._l(t.communities, function(t) {
                    return n("SmallCard", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                }), 1)])
            }, [], !1, null, null, null).exports,
            g = {
                props: ["formação", "courses"],
                components: {
                    Card: m
                }
            },
            y = Object(a.a)(g, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.formação ? n("span", [n("div", {
                    staticClass: "break-heading"
                }, [t._v("Formação Principal[" + t._s(t.formação.length) + "]")]), t._v(" "), t._l(t.formação, function(t) {
                    return n("card", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                })], 2) : t._e(), t._v(" "), t.courses ? n("span", [n("div", {
                    staticClass: "break-heading"
                }, [t._v("Extensão[" + t._s(t.courses.length) + "]")]), t._v(" "), t._l(t.courses, function(t) {
                    return n("card", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                })], 2) : t._e()])
            }, [], !1, null, null, null).exports,
            w = {
                props: ["interesses"],
                components: {
                    SmallCard: b
                }
            },
            j = Object(a.a)(w, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "break-heading"
                }, [this._v("Interesses [" + this._s(this.interesses.length) + "]")]), this._v(" "), e("div", {
                    staticClass: "small-card-holder"
                }, this._l(this.interesses, function(t) {
                    return e("SmallCard", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                }), 1)])
            }, [], !1, null, null, null).exports,
            S = {
                props: ["projetos"],
                components: {
                    Card: m
                }
            },
            x = Object(a.a)(S, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "break-heading"
                }, [this._v("Projetos [" + this._s(this.projetos.length) + "]")]), this._v(" "), this._l(this.projetos, function(t) {
                    return e("card", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                })], 2)
            }, [], !1, null, null, null).exports,
            E = {
                props: ["value", "index", "color", "title"],
                data: () => ({
                    showCard: !1
                }),
                methods: {
                    cardDown: function() {
                        this.showCard = !this.showCard
                    }
                }
            },
            A = {
                props: ["habilidades"],
                components: {
                    SkillBar: Object(a.a)(E, function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "skill-group"
                        }, [n("span", {
                            staticClass: "break-heading",
                            style: "color:" + t.color[t.index]
                        }, [t._v(t._s(t.title[t.index]) + " [" + t._s(t.value.length) + "] ")]), t._v(" "), n("div", {
                            staticClass: "skill-group-body"
                        }, t._l(t.value, function(e) {
                            return n("div", {
                                key: e.name,
                                staticClass: "skill-name subtitle",
                                style: "background-color:" + t.color[t.index]
                            }, [t._v("\n          " + t._s(e.name) + "\n      ")])
                        }), 0)])
                    }, [], !1, null, null, null).exports
                }
            },
            O = Object(a.a)(A, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", t._l(t.habilidades.data, function(e, s) {
                    return n("SkillBar", {
                        key: e.name,
                        attrs: {
                            color: t.habilidades.color,
                            title: t.habilidades.title,
                            value: e,
                            index: s
                        }
                    })
                }), 1)
            }, [], !1, null, null, null).exports,
            $ = {
                props: ["apresentações"],
                components: {
                    Card: m
                }
            },
            q = Object(a.a)($, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "break-heading"
                }, [this._v("Apresentações de Trabalho [" + this._s(this.apresentações.length) + "]")]), this._v(" "), this._l(this.apresentações, function(t) {
                    return e("card", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                })], 2)
            }, [], !1, null, null, null).exports,
            L = {
                props: ["ocupação"],
                components: {
                    Card: m
                }
            },
            T = Object(a.a)(L, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "break-heading"
                }, [this._v("Ocupação atual [" + this._s(this.ocupação.length) + "]")]), this._v(" "), this._l(this.ocupação, function(t) {
                    return e("card", {
                        key: t.key,
                        attrs: {
                            info: t
                        }
                    })
                })], 2)
            }, [], !1, null, null, null).exports,
            P = n(8);
        s.a.use(c.a);
        const M = [{
            path: "/",
            name: "Ocupação",
            component: T
        }, {
            {
            path: "/ocupação",
            redirect: "/" 
          },
            path: "/publicações",
            name: "Publicações",
            component: v
        }, {
            path: "/blog",
            name: "Blog",
            component: f
        }, {
            path: "/grupos",
            name: "Grupos",
            component: k
        }, {
            path: "/formação",
            name: "Formação",
            component: y
        }, {
            path: "/interesses",
            name: "Interesses",
            component: j
        }, {
            path: "/projetos",
            name: "Projetos",
            component: x
        }, {
            path: "/habilidades",
            name: "Habilidades",
            component: O
        }, {
            path: "/apresentações",
            name: "Apresentações",
            component: q
        }, {
            path: "**",
            name: "PageNotFound",
            component: P.default
        }];
        var D = new c.a({
            routes: M
        });
        s.a.config.productionTip = !1;
        var B = new s.a({
            el: "#app",
            router: D,
            data: () => ({
                data: {}
            }),
            components: {
                app: r
            },
            template: '<app :data="data"/>'
        });
        fetch("data.json").then(t => t.json()).then(t => {
            B.data = t;
            const e = t.document,
                n = t.profile,
                s = t.document.theme,
                i = t.og;
            for (var a in document.querySelector("head title").textContent = e.title, document.head.querySelector('meta[name="author"]').setAttribute("content", e.author), document.head.querySelector('meta[name="title"]').setAttribute("content", e.title), document.head.querySelector('meta[name="keywords"]').setAttribute("content", e.keywords), document.head.querySelector('meta[name="description"]').setAttribute("content", e.description), document.head.querySelector('meta[name="language"]').setAttribute("content", e.language), document.head.querySelector('meta[name="charset"]').setAttribute("content", e.charset), document.head.querySelector('meta[name="robots"]').setAttribute("content", e.robots), document.head.querySelector('meta[name="google-site-verification"]').setAttribute("content", e.googleSiteVerificatin), document.head.querySelector('meta[property="og:title"]').setAttribute("content", i.title), document.head.querySelector('meta[name="twitter:title"]').setAttribute("content", i.title), document.head.querySelector('meta[property="og:url"]').setAttribute("content", i.url), document.head.querySelector('meta[name="twitter:image"]').setAttribute("content", i.image), document.head.querySelector('meta[property="og:image"]').setAttribute("content", i.image), document.head.querySelector('meta[name="twitter:creator"]').setAttribute("content", i.creator), document.head.querySelector('meta[name="twitter:description"]').setAttribute("content", e.description), t.themes[s]) document.documentElement.style.setProperty("--" + a, t.themes[s][a]);

            function o() {
                window.dataLayer.push(arguments)
            }
            window.dataLayer = window.dataLayer || [], o("js", new Date), o("config", e.googleAnalyticsId),
                function() {
                    var t = {
                            "@context": "http://schema.org",
                            "@type": "Person",
                            address: n.address,
                            email: n.email,
                            image: n.image,
                            jobTitle: n.domains,
                            name: n.name,
                            alumniOf: n.alumniOf,
                            birthPlace: n.birthPlace,
                            birthDate: n.birthDate,
                            height: n.height,
                            weight: n.weight,
                            gender: n.gender,
                            nationality: n.nationality,
                            url: n.url,
                            sameAs: n.sameAs
                        },
                        e = document.createElement("script");
                    e.type = "application/ld+json", e.innerHTML = JSON.stringify(t), document.getElementsByTagName("head")[0].appendChild(e)
                }(document)
        })
    }],
    [
        [13, 1, 2]
    ]
]);
