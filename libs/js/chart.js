/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
!(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = e(
            (function() {
                try {
                    return require("moment");
                } catch (t) {}
            })()
        )) :
        "function" == typeof define && define.amd ?
        define(["require"], function(t) {
            return e(
                (function() {
                    try {
                        return t("moment");
                    } catch (t) {}
                })()
            );
        }) :
        ((t = t || self).Chart = e(t.moment));
})(this, function(t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
        },
        n = (function(t, e) {
            return t((e = { exports: {} }), e.exports), e.exports;
        })(function(t) {
            var n = {};
            for (var i in e) e.hasOwnProperty(i) && (n[e[i]] = i);
            var a = (t.exports = {
                rgb: { channels: 3, labels: "rgb" },
                hsl: { channels: 3, labels: "hsl" },
                hsv: { channels: 3, labels: "hsv" },
                hwb: { channels: 3, labels: "hwb" },
                cmyk: { channels: 4, labels: "cmyk" },
                xyz: { channels: 3, labels: "xyz" },
                lab: { channels: 3, labels: "lab" },
                lch: { channels: 3, labels: "lch" },
                hex: { channels: 1, labels: ["hex"] },
                keyword: { channels: 1, labels: ["keyword"] },
                ansi16: { channels: 1, labels: ["ansi16"] },
                ansi256: { channels: 1, labels: ["ansi256"] },
                hcg: { channels: 3, labels: ["h", "c", "g"] },
                apple: { channels: 3, labels: ["r16", "g16", "b16"] },
                gray: { channels: 1, labels: ["gray"] },
            });
            for (var r in a)
                if (a.hasOwnProperty(r)) {
                    if (!("channels" in a[r]))
                        throw new Error("missing channels property: " + r);
                    if (!("labels" in a[r]))
                        throw new Error("missing channel labels property: " + r);
                    if (a[r].labels.length !== a[r].channels)
                        throw new Error("channel and label counts mismatch: " + r);
                    var o = a[r].channels,
                        s = a[r].labels;
                    delete a[r].channels,
                        delete a[r].labels,
                        Object.defineProperty(a[r], "channels", { value: o }),
                        Object.defineProperty(a[r], "labels", { value: s });
                }
                (a.rgb.hsl = function(t) {
                    var e,
                        n,
                        i = t[0] / 255,
                        a = t[1] / 255,
                        r = t[2] / 255,
                        o = Math.min(i, a, r),
                        s = Math.max(i, a, r),
                        l = s - o;
                    return (
                        s === o ?
                        (e = 0) :
                        i === s ?
                        (e = (a - r) / l) :
                        a === s ?
                        (e = 2 + (r - i) / l) :
                        r === s && (e = 4 + (i - a) / l),
                        (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                        (n = (o + s) / 2), [
                            e,
                            100 * (s === o ? 0 : n <= 0.5 ? l / (s + o) : l / (2 - s - o)),
                            100 * n,
                        ]
                    );
                }),
                (a.rgb.hsv = function(t) {
                    var e,
                        n,
                        i,
                        a,
                        r,
                        o = t[0] / 255,
                        s = t[1] / 255,
                        l = t[2] / 255,
                        u = Math.max(o, s, l),
                        d = u - Math.min(o, s, l),
                        h = function(t) {
                            return (u - t) / 6 / d + 0.5;
                        };
                    return (
                        0 === d ?
                        (a = r = 0) :
                        ((r = d / u),
                            (e = h(o)),
                            (n = h(s)),
                            (i = h(l)),
                            o === u ?
                            (a = i - n) :
                            s === u ?
                            (a = 1 / 3 + e - i) :
                            l === u && (a = 2 / 3 + n - e),
                            a < 0 ? (a += 1) : a > 1 && (a -= 1)), [360 * a, 100 * r, 100 * u]
                    );
                }),
                (a.rgb.hwb = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2];
                    return [
                        a.rgb.hsl(t)[0],
                        100 * ((1 / 255) * Math.min(e, Math.min(n, i))),
                        100 * (i = 1 - (1 / 255) * Math.max(e, Math.max(n, i))),
                    ];
                }),
                (a.rgb.cmyk = function(t) {
                    var e,
                        n = t[0] / 255,
                        i = t[1] / 255,
                        a = t[2] / 255;
                    return [
                        100 *
                        ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0),
                        100 * ((1 - i - e) / (1 - e) || 0),
                        100 * ((1 - a - e) / (1 - e) || 0),
                        100 * e,
                    ];
                }),
                (a.rgb.keyword = function(t) {
                    var i = n[t];
                    if (i) return i;
                    var a,
                        r,
                        o,
                        s = 1 / 0;
                    for (var l in e)
                        if (e.hasOwnProperty(l)) {
                            var u = e[l],
                                d =
                                ((r = t),
                                    (o = u),
                                    Math.pow(r[0] - o[0], 2) +
                                    Math.pow(r[1] - o[1], 2) +
                                    Math.pow(r[2] - o[2], 2));
                            d < s && ((s = d), (a = l));
                        }
                    return a;
                }),
                (a.keyword.rgb = function(t) {
                    return e[t];
                }),
                (a.rgb.xyz = function(t) {
                    var e = t[0] / 255,
                        n = t[1] / 255,
                        i = t[2] / 255;
                    return [
                        100 *
                        (0.4124 *
                            (e =
                                e > 0.04045 ?
                                Math.pow((e + 0.055) / 1.055, 2.4) :
                                e / 12.92) +
                            0.3576 *
                            (n =
                                n > 0.04045 ?
                                Math.pow((n + 0.055) / 1.055, 2.4) :
                                n / 12.92) +
                            0.1805 *
                            (i =
                                i > 0.04045 ?
                                Math.pow((i + 0.055) / 1.055, 2.4) :
                                i / 12.92)),
                        100 * (0.2126 * e + 0.7152 * n + 0.0722 * i),
                        100 * (0.0193 * e + 0.1192 * n + 0.9505 * i),
                    ];
                }),
                (a.rgb.lab = function(t) {
                    var e = a.rgb.xyz(t),
                        n = e[0],
                        i = e[1],
                        r = e[2];
                    return (
                        (i /= 100),
                        (r /= 108.883),
                        (n =
                            (n /= 95.047) > 0.008856 ?
                            Math.pow(n, 1 / 3) :
                            7.787 * n + 16 / 116), [
                            116 *
                            (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) -
                            16,
                            500 * (n - i),
                            200 *
                            (i -
                                (r =
                                    r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)),
                        ]
                    );
                }),
                (a.hsl.rgb = function(t) {
                    var e,
                        n,
                        i,
                        a,
                        r,
                        o = t[0] / 360,
                        s = t[1] / 100,
                        l = t[2] / 100;
                    if (0 === s) return [(r = 255 * l), r, r];
                    (e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)),
                    (a = [0, 0, 0]);
                    for (var u = 0; u < 3; u++)
                        (i = o + (1 / 3) * -(u - 1)) < 0 && i++,
                        i > 1 && i--,
                        (r =
                            6 * i < 1 ?
                            e + 6 * (n - e) * i :
                            2 * i < 1 ?
                            n :
                            3 * i < 2 ?
                            e + (n - e) * (2 / 3 - i) * 6 :
                            e),
                        (a[u] = 255 * r);
                    return a;
                }),
                (a.hsl.hsv = function(t) {
                    var e = t[0],
                        n = t[1] / 100,
                        i = t[2] / 100,
                        a = n,
                        r = Math.max(i, 0.01);
                    return (
                        (n *= (i *= 2) <= 1 ? i : 2 - i),
                        (a *= r <= 1 ? r : 2 - r), [
                            e,
                            100 * (0 === i ? (2 * a) / (r + a) : (2 * n) / (i + n)),
                            100 * ((i + n) / 2),
                        ]
                    );
                }),
                (a.hsv.rgb = function(t) {
                    var e = t[0] / 60,
                        n = t[1] / 100,
                        i = t[2] / 100,
                        a = Math.floor(e) % 6,
                        r = e - Math.floor(e),
                        o = 255 * i * (1 - n),
                        s = 255 * i * (1 - n * r),
                        l = 255 * i * (1 - n * (1 - r));
                    switch (((i *= 255), a)) {
                        case 0:
                            return [i, l, o];
                        case 1:
                            return [s, i, o];
                        case 2:
                            return [o, i, l];
                        case 3:
                            return [o, s, i];
                        case 4:
                            return [l, o, i];
                        case 5:
                            return [i, o, s];
                    }
                }),
                (a.hsv.hsl = function(t) {
                    var e,
                        n,
                        i,
                        a = t[0],
                        r = t[1] / 100,
                        o = t[2] / 100,
                        s = Math.max(o, 0.01);
                    return (
                        (i = (2 - r) * o),
                        (n = r * s), [
                            a,
                            100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0),
                            100 * (i /= 2),
                        ]
                    );
                }),
                (a.hwb.rgb = function(t) {
                    var e,
                        n,
                        i,
                        a,
                        r,
                        o,
                        s,
                        l = t[0] / 360,
                        u = t[1] / 100,
                        d = t[2] / 100,
                        h = u + d;
                    switch (
                        (h > 1 && ((u /= h), (d /= h)),
                            (i = 6 * l - (e = Math.floor(6 * l))),
                            0 != (1 & e) && (i = 1 - i),
                            (a = u + i * ((n = 1 - d) - u)),
                            e)
                    ) {
                        default:
                            case 6:
                            case 0:
                            (r = n),
                        (o = a),
                        (s = u);
                        break;
                        case 1:
                                (r = a),
                            (o = n),
                            (s = u);
                            break;
                        case 2:
                                (r = u),
                            (o = n),
                            (s = a);
                            break;
                        case 3:
                                (r = u),
                            (o = a),
                            (s = n);
                            break;
                        case 4:
                                (r = a),
                            (o = u),
                            (s = n);
                            break;
                        case 5:
                                (r = n),
                            (o = u),
                            (s = a);
                    }
                    return [255 * r, 255 * o, 255 * s];
                }),
                (a.cmyk.rgb = function(t) {
                    var e = t[0] / 100,
                        n = t[1] / 100,
                        i = t[2] / 100,
                        a = t[3] / 100;
                    return [
                        255 * (1 - Math.min(1, e * (1 - a) + a)),
                        255 * (1 - Math.min(1, n * (1 - a) + a)),
                        255 * (1 - Math.min(1, i * (1 - a) + a)),
                    ];
                }),
                (a.xyz.rgb = function(t) {
                    var e,
                        n,
                        i,
                        a = t[0] / 100,
                        r = t[1] / 100,
                        o = t[2] / 100;
                    return (
                        (n = -0.9689 * a + 1.8758 * r + 0.0415 * o),
                        (i = 0.0557 * a + -0.204 * r + 1.057 * o),
                        (e =
                            (e = 3.2406 * a + -1.5372 * r + -0.4986 * o) > 0.0031308 ?
                            1.055 * Math.pow(e, 1 / 2.4) - 0.055 :
                            12.92 * e),
                        (n =
                            n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n),
                        (i =
                            i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : 12.92 * i), [
                            255 * (e = Math.min(Math.max(0, e), 1)),
                            255 * (n = Math.min(Math.max(0, n), 1)),
                            255 * (i = Math.min(Math.max(0, i), 1)),
                        ]
                    );
                }),
                (a.xyz.lab = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2];
                    return (
                        (n /= 100),
                        (i /= 108.883),
                        (e =
                            (e /= 95.047) > 0.008856 ?
                            Math.pow(e, 1 / 3) :
                            7.787 * e + 16 / 116), [
                            116 *
                            (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
                            16,
                            500 * (e - n),
                            200 *
                            (n -
                                (i =
                                    i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116)),
                        ]
                    );
                }),
                (a.lab.xyz = function(t) {
                    var e,
                        n,
                        i,
                        a = t[0];
                    (e = t[1] / 500 + (n = (a + 16) / 116)), (i = n - t[2] / 200);
                    var r = Math.pow(n, 3),
                        o = Math.pow(e, 3),
                        s = Math.pow(i, 3);
                    return (
                        (n = r > 0.008856 ? r : (n - 16 / 116) / 7.787),
                        (e = o > 0.008856 ? o : (e - 16 / 116) / 7.787),
                        (i = s > 0.008856 ? s : (i - 16 / 116) / 7.787), [(e *= 95.047), (n *= 100), (i *= 108.883)]
                    );
                }),
                (a.lab.lch = function(t) {
                    var e,
                        n = t[0],
                        i = t[1],
                        a = t[2];
                    return (
                        (e = (360 * Math.atan2(a, i)) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + a * a), e]
                    );
                }),
                (a.lch.lab = function(t) {
                    var e,
                        n = t[0],
                        i = t[1];
                    return (
                        (e = (t[2] / 360) * 2 * Math.PI), [n, i * Math.cos(e), i * Math.sin(e)]
                    );
                }),
                (a.rgb.ansi16 = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2];
                    if (0 === (r = Math.round(r / 50))) return 30;
                    var o =
                        30 +
                        ((Math.round(i / 255) << 2) |
                            (Math.round(n / 255) << 1) |
                            Math.round(e / 255));
                    return 2 === r && (o += 60), o;
                }),
                (a.hsv.ansi16 = function(t) {
                    return a.rgb.ansi16(a.hsv.rgb(t), t[2]);
                }),
                (a.rgb.ansi256 = function(t) {
                    var e = t[0],
                        n = t[1],
                        i = t[2];
                    return e === n && n === i ?
                        e < 8 ?
                        16 :
                        e > 248 ?
                        231 :
                        Math.round(((e - 8) / 247) * 24) + 232 :
                        16 +
                        36 * Math.round((e / 255) * 5) +
                        6 * Math.round((n / 255) * 5) +
                        Math.round((i / 255) * 5);
                }),
                (a.ansi16.rgb = function(t) {
                    var e = t % 10;
                    if (0 === e || 7 === e)
                        return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e];
                    var n = 0.5 * (1 + ~~(t > 50));
                    return [
                        (1 & e) * n * 255,
                        ((e >> 1) & 1) * n * 255,
                        ((e >> 2) & 1) * n * 255,
                    ];
                }),
                (a.ansi256.rgb = function(t) {
                    if (t >= 232) {
                        var e = 10 * (t - 232) + 8;
                        return [e, e, e];
                    }
                    var n;
                    return (
                        (t -= 16), [
                            (Math.floor(t / 36) / 5) * 255,
                            (Math.floor((n = t % 36) / 6) / 5) * 255,
                            ((n % 6) / 5) * 255,
                        ]
                    );
                }),
                (a.rgb.hex = function(t) {
                    var e = (
                            ((255 & Math.round(t[0])) << 16) +
                            ((255 & Math.round(t[1])) << 8) +
                            (255 & Math.round(t[2]))
                        )
                        .toString(16)
                        .toUpperCase();
                    return "000000".substring(e.length) + e;
                }),
                (a.hex.rgb = function(t) {
                    var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                    if (!e) return [0, 0, 0];
                    var n = e[0];
                    3 === e[0].length &&
                        (n = n
                            .split("")
                            .map(function(t) {
                                return t + t;
                            })
                            .join(""));
                    var i = parseInt(n, 16);
                    return [(i >> 16) & 255, (i >> 8) & 255, 255 & i];
                }),
                (a.rgb.hcg = function(t) {
                    var e,
                        n = t[0] / 255,
                        i = t[1] / 255,
                        a = t[2] / 255,
                        r = Math.max(Math.max(n, i), a),
                        o = Math.min(Math.min(n, i), a),
                        s = r - o;
                    return (
                        (e =
                            s <= 0 ?
                            0 :
                            r === n ?
                            ((i - a) / s) % 6 :
                            r === i ?
                            2 + (a - n) / s :
                            4 + (n - i) / s + 4),
                        (e /= 6), [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
                    );
                }),
                (a.hsl.hcg = function(t) {
                    var e = t[1] / 100,
                        n = t[2] / 100,
                        i = 1,
                        a = 0;
                    return (
                        (i = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)) < 1 &&
                        (a = (n - 0.5 * i) / (1 - i)), [t[0], 100 * i, 100 * a]
                    );
                }),
                (a.hsv.hcg = function(t) {
                    var e = t[1] / 100,
                        n = t[2] / 100,
                        i = e * n,
                        a = 0;
                    return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a];
                }),
                (a.hcg.rgb = function(t) {
                    var e = t[0] / 360,
                        n = t[1] / 100,
                        i = t[2] / 100;
                    if (0 === n) return [255 * i, 255 * i, 255 * i];
                    var a,
                        r = [0, 0, 0],
                        o = (e % 1) * 6,
                        s = o % 1,
                        l = 1 - s;
                    switch (Math.floor(o)) {
                        case 0:
                            (r[0] = 1), (r[1] = s), (r[2] = 0);
                            break;
                        case 1:
                            (r[0] = l), (r[1] = 1), (r[2] = 0);
                            break;
                        case 2:
                            (r[0] = 0), (r[1] = 1), (r[2] = s);
                            break;
                        case 3:
                            (r[0] = 0), (r[1] = l), (r[2] = 1);
                            break;
                        case 4:
                            (r[0] = s), (r[1] = 0), (r[2] = 1);
                            break;
                        default:
                            (r[0] = 1), (r[1] = 0), (r[2] = l);
                    }
                    return (
                        (a = (1 - n) * i), [255 * (n * r[0] + a), 255 * (n * r[1] + a), 255 * (n * r[2] + a)]
                    );
                }),
                (a.hcg.hsv = function(t) {
                    var e = t[1] / 100,
                        n = e + (t[2] / 100) * (1 - e),
                        i = 0;
                    return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n];
                }),
                (a.hcg.hsl = function(t) {
                    var e = t[1] / 100,
                        n = (t[2] / 100) * (1 - e) + 0.5 * e,
                        i = 0;
                    return (
                        n > 0 && n < 0.5 ?
                        (i = e / (2 * n)) :
                        n >= 0.5 && n < 1 && (i = e / (2 * (1 - n))), [t[0], 100 * i, 100 * n]
                    );
                }),
                (a.hcg.hwb = function(t) {
                    var e = t[1] / 100,
                        n = e + (t[2] / 100) * (1 - e);
                    return [t[0], 100 * (n - e), 100 * (1 - n)];
                }),
                (a.hwb.hcg = function(t) {
                    var e = t[1] / 100,
                        n = 1 - t[2] / 100,
                        i = n - e,
                        a = 0;
                    return i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a];
                }),
                (a.apple.rgb = function(t) {
                    return [
                        (t[0] / 65535) * 255,
                        (t[1] / 65535) * 255,
                        (t[2] / 65535) * 255,
                    ];
                }),
                (a.rgb.apple = function(t) {
                    return [
                        (t[0] / 255) * 65535,
                        (t[1] / 255) * 65535,
                        (t[2] / 255) * 65535,
                    ];
                }),
                (a.gray.rgb = function(t) {
                    return [(t[0] / 100) * 255, (t[0] / 100) * 255, (t[0] / 100) * 255];
                }),
                (a.gray.hsl = a.gray.hsv = function(t) {
                    return [0, 0, t[0]];
                }),
                (a.gray.hwb = function(t) {
                    return [0, 100, t[0]];
                }),
                (a.gray.cmyk = function(t) {
                    return [0, 0, 0, t[0]];
                }),
                (a.gray.lab = function(t) {
                    return [t[0], 0, 0];
                }),
                (a.gray.hex = function(t) {
                    var e = 255 & Math.round((t[0] / 100) * 255),
                        n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                    return "000000".substring(n.length) + n;
                }),
                (a.rgb.gray = function(t) {
                    return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
                });
        });
    n.rgb,
        n.hsl,
        n.hsv,
        n.hwb,
        n.cmyk,
        n.xyz,
        n.lab,
        n.lch,
        n.hex,
        n.keyword,
        n.ansi16,
        n.ansi256,
        n.hcg,
        n.apple,
        n.gray;

    function i(t) {
        var e = (function() {
                for (var t = {}, e = Object.keys(n), i = e.length, a = 0; a < i; a++)
                    t[e[a]] = { distance: -1, parent: null };
                return t;
            })(),
            i = [t];
        for (e[t].distance = 0; i.length;)
            for (
                var a = i.pop(), r = Object.keys(n[a]), o = r.length, s = 0; s < o; s++
            ) {
                var l = r[s],
                    u = e[l]; -
                1 === u.distance &&
                    ((u.distance = e[a].distance + 1), (u.parent = a), i.unshift(l));
            }
        return e;
    }

    function a(t, e) {
        return function(n) {
            return e(t(n));
        };
    }

    function r(t, e) {
        for (
            var i = [e[t].parent, t], r = n[e[t].parent][t], o = e[t].parent; e[o].parent;

        )
            i.unshift(e[o].parent), (r = a(n[e[o].parent][o], r)), (o = e[o].parent);
        return (r.conversion = i), r;
    }
    var o = {};
    Object.keys(n).forEach(function(t) {
        (o[t] = {}),
        Object.defineProperty(o[t], "channels", { value: n[t].channels }),
            Object.defineProperty(o[t], "labels", { value: n[t].labels });
        var e = (function(t) {
            for (
                var e = i(t), n = {}, a = Object.keys(e), o = a.length, s = 0; s < o; s++
            ) {
                var l = a[s];
                null !== e[l].parent && (n[l] = r(l, e));
            }
            return n;
        })(t);
        Object.keys(e).forEach(function(n) {
            var i = e[n];
            (o[t][n] = (function(t) {
                var e = function(e) {
                    if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" == typeof n)
                        for (var i = n.length, a = 0; a < i; a++) n[a] = Math.round(n[a]);
                    return n;
                };
                return "conversion" in t && (e.conversion = t.conversion), e;
            })(i)),
            (o[t][n].raw = (function(t) {
                var e = function(e) {
                    return null == e ?
                        e :
                        (arguments.length > 1 &&
                            (e = Array.prototype.slice.call(arguments)),
                            t(e));
                };
                return "conversion" in t && (e.conversion = t.conversion), e;
            })(i));
        });
    });
    var s = o,
        l = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
        },
        u = {
            getRgba: d,
            getHsla: h,
            getRgb: function(t) {
                var e = d(t);
                return e && e.slice(0, 3);
            },
            getHsl: function(t) {
                var e = h(t);
                return e && e.slice(0, 3);
            },
            getHwb: c,
            getAlpha: function(t) {
                var e = d(t);
                if (e) return e[3];
                if ((e = h(t))) return e[3];
                if ((e = c(t))) return e[3];
            },
            hexString: function(t, e) {
                e = void 0 !== e && 3 === t.length ? e : t[3];
                return (
                    "#" +
                    v(t[0]) +
                    v(t[1]) +
                    v(t[2]) +
                    (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "")
                );
            },
            rgbString: function(t, e) {
                if (e < 1 || (t[3] && t[3] < 1)) return f(t, e);
                return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
            },
            rgbaString: f,
            percentString: function(t, e) {
                if (e < 1 || (t[3] && t[3] < 1)) return g(t, e);
                var n = Math.round((t[0] / 255) * 100),
                    i = Math.round((t[1] / 255) * 100),
                    a = Math.round((t[2] / 255) * 100);
                return "rgb(" + n + "%, " + i + "%, " + a + "%)";
            },
            percentaString: g,
            hslString: function(t, e) {
                if (e < 1 || (t[3] && t[3] < 1)) return p(t, e);
                return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
            },
            hslaString: p,
            hwbString: function(t, e) {
                void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                return (
                    "hwb(" +
                    t[0] +
                    ", " +
                    t[1] +
                    "%, " +
                    t[2] +
                    "%" +
                    (void 0 !== e && 1 !== e ? ", " + e : "") +
                    ")"
                );
            },
            keyword: function(t) {
                return b[t.slice(0, 3)];
            },
        };

    function d(t) {
        if (t) {
            var e = [0, 0, 0],
                n = 1,
                i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
                a = "";
            if (i) {
                a = (i = i[1])[3];
                for (var r = 0; r < e.length; r++) e[r] = parseInt(i[r] + i[r], 16);
                a && (n = Math.round((parseInt(a + a, 16) / 255) * 100) / 100);
            } else if ((i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
                (a = i[2]), (i = i[1]);
                for (r = 0; r < e.length; r++)
                    e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
                a && (n = Math.round((parseInt(a, 16) / 255) * 100) / 100);
            } else if (
                (i = t.match(
                    /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                ))
            ) {
                for (r = 0; r < e.length; r++) e[r] = parseInt(i[r + 1]);
                n = parseFloat(i[4]);
            } else if (
                (i = t.match(
                    /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
                ))
            ) {
                for (r = 0; r < e.length; r++)
                    e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                n = parseFloat(i[4]);
            } else if ((i = t.match(/(\w+)/))) {
                if ("transparent" == i[1]) return [0, 0, 0, 0];
                if (!(e = l[i[1]])) return;
            }
            for (r = 0; r < e.length; r++) e[r] = m(e[r], 0, 255);
            return (n = n || 0 == n ? m(n, 0, 1) : 1), (e[3] = n), e;
        }
    }

    function h(t) {
        if (t) {
            var e = t.match(
                /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (e) {
                var n = parseFloat(e[4]);
                return [
                    m(parseInt(e[1]), 0, 360),
                    m(parseFloat(e[2]), 0, 100),
                    m(parseFloat(e[3]), 0, 100),
                    m(isNaN(n) ? 1 : n, 0, 1),
                ];
            }
        }
    }

    function c(t) {
        if (t) {
            var e = t.match(
                /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (e) {
                var n = parseFloat(e[4]);
                return [
                    m(parseInt(e[1]), 0, 360),
                    m(parseFloat(e[2]), 0, 100),
                    m(parseFloat(e[3]), 0, 100),
                    m(isNaN(n) ? 1 : n, 0, 1),
                ];
            }
        }
    }

    function f(t, e) {
        return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        );
    }

    function g(t, e) {
        return (
            "rgba(" +
            Math.round((t[0] / 255) * 100) +
            "%, " +
            Math.round((t[1] / 255) * 100) +
            "%, " +
            Math.round((t[2] / 255) * 100) +
            "%, " +
            (e || t[3] || 1) +
            ")"
        );
    }

    function p(t, e) {
        return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        );
    }

    function m(t, e, n) {
        return Math.min(Math.max(e, t), n);
    }

    function v(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
    }
    var b = {};
    for (var x in l) b[l[x]] = x;
    var y = function(t) {
        return t instanceof y ?
            t :
            this instanceof y ?
            ((this.valid = !1),
                (this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1,
                }),
                void("string" == typeof t ?
                    (e = u.getRgba(t)) ?
                    this.setValues("rgb", e) :
                    (e = u.getHsla(t)) ?
                    this.setValues("hsl", e) :
                    (e = u.getHwb(t)) && this.setValues("hwb", e) :
                    "object" == typeof t &&
                    (void 0 !== (e = t).r || void 0 !== e.red ?
                        this.setValues("rgb", e) :
                        void 0 !== e.l || void 0 !== e.lightness ?
                        this.setValues("hsl", e) :
                        void 0 !== e.v || void 0 !== e.value ?
                        this.setValues("hsv", e) :
                        void 0 !== e.w || void 0 !== e.whiteness ?
                        this.setValues("hwb", e) :
                        (void 0 === e.c && void 0 === e.cyan) ||
                        this.setValues("cmyk", e)))) :
            new y(t);
        var e;
    };
    (y.prototype = {
        isValid: function() {
            return this.valid;
        },
        rgb: function() {
            return this.setSpace("rgb", arguments);
        },
        hsl: function() {
            return this.setSpace("hsl", arguments);
        },
        hsv: function() {
            return this.setSpace("hsv", arguments);
        },
        hwb: function() {
            return this.setSpace("hwb", arguments);
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments);
        },
        rgbArray: function() {
            return this.values.rgb;
        },
        hslArray: function() {
            return this.values.hsl;
        },
        hsvArray: function() {
            return this.values.hsv;
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function() {
            return this.values.cmyk;
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha]);
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha]);
        },
        alpha: function(t) {
            return void 0 === t ?
                this.values.alpha :
                (this.setValues("alpha", t), this);
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t);
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t);
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t);
        },
        hue: function(t) {
            return (
                t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
            );
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t);
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t);
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t);
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t);
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t);
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t);
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t);
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t);
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t);
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t);
        },
        hexString: function() {
            return u.hexString(this.values.rgb);
        },
        rgbString: function() {
            return u.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function() {
            return u.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function() {
            return u.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function() {
            return u.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function() {
            return u.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function() {
            return u.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function() {
            return u.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return (t[0] << 16) | (t[1] << 8) | t[2];
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                var i = t[n] / 255;
                e[n] = i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
        },
        contrast: function(t) {
            var e = this.luminosity(),
                n = t.luminosity();
            return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function() {
            return !this.dark();
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this;
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return (e[2] += e[2] * t), this.setValues("hsl", e), this;
        },
        darken: function(t) {
            var e = this.values.hsl;
            return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return (e[1] += e[1] * t), this.setValues("hsl", e), this;
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return (e[1] += e[1] * t), this.setValues("hwb", e), this;
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return (e[2] += e[2] * t), this.setValues("hwb", e), this;
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
            return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this;
        },
        rotate: function(t) {
            var e = this.values.hsl,
                n = (e[0] + t) % 360;
            return (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this;
        },
        mix: function(t, e) {
            var n = t,
                i = void 0 === e ? 0.5 : e,
                a = 2 * i - 1,
                r = this.alpha() - n.alpha(),
                o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                s = 1 - o;
            return this.rgb(
                o * this.red() + s * n.red(),
                o * this.green() + s * n.green(),
                o * this.blue() + s * n.blue()
            ).alpha(this.alpha() * i + n.alpha() * (1 - i));
        },
        toJSON: function() {
            return this.rgb();
        },
        clone: function() {
            var t,
                e,
                n = new y(),
                i = this.values,
                a = n.values;
            for (var r in i)
                i.hasOwnProperty(r) &&
                ((t = i[r]),
                    "[object Array]" === (e = {}.toString.call(t)) ?
                    (a[r] = t.slice(0)) :
                    "[object Number]" === e ?
                    (a[r] = t) :
                    console.error("unexpected color value:", t));
            return n;
        },
    }),
    (y.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"],
    }),
    (y.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100],
    }),
    (y.prototype.getValues = function(t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++)
            n[t.charAt(i)] = e[t][i];
        return 1 !== e.alpha && (n.a = e.alpha), n;
    }),
    (y.prototype.setValues = function(t, e) {
        var n,
            i,
            a = this.values,
            r = this.spaces,
            o = this.maxes,
            l = 1;
        if (((this.valid = !0), "alpha" === t)) l = e;
        else if (e.length)(a[t] = e.slice(0, t.length)), (l = e[t.length]);
        else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
            l = e.a;
        } else if (void 0 !== e[r[t][0]]) {
            var u = r[t];
            for (n = 0; n < t.length; n++) a[t][n] = e[u[n]];
            l = e.alpha;
        }
        if (
            ((a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l))),
                "alpha" === t)
        )
            return !1;
        for (n = 0; n < t.length; n++)
            (i = Math.max(0, Math.min(o[t][n], a[t][n]))),
            (a[t][n] = Math.round(i));
        for (var d in r) d !== t && (a[d] = s[t][d](a[t]));
        return !0;
    }),
    (y.prototype.setSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ?
            this.getValues(t) :
            ("number" == typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n),
                this);
    }),
    (y.prototype.setChannel = function(t, e, n) {
        var i = this.values[t];
        return void 0 === n ?
            i[e] :
            n === i[e] ?
            this :
            ((i[e] = n), this.setValues(t, i), this);
    }),
    "undefined" != typeof window && (window.Color = y);
    var _ = y;

    function k(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
    }
    var w,
        M = {
            noop: function() {},
            uid:
                ((w = 0),
                    function() {
                        return w++;
                    }),
            isNullOrUndef: function(t) {
                return null == t;
            },
            isArray: function(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
            },
            isObject: function(t) {
                return (
                    null !== t && "[object Object]" === Object.prototype.toString.call(t)
                );
            },
            isFinite: function(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(t);
            },
            valueOrDefault: function(t, e) {
                return void 0 === t ? e : t;
            },
            valueAtIndexOrDefault: function(t, e, n) {
                return M.valueOrDefault(M.isArray(t) ? t[e] : t, n);
            },
            callback: function(t, e, n) {
                if (t && "function" == typeof t.call) return t.apply(n, e);
            },
            each: function(t, e, n, i) {
                var a, r, o;
                if (M.isArray(t))
                    if (((r = t.length), i))
                        for (a = r - 1; a >= 0; a--) e.call(n, t[a], a);
                    else
                        for (a = 0; a < r; a++) e.call(n, t[a], a);
                else if (M.isObject(t))
                    for (r = (o = Object.keys(t)).length, a = 0; a < r; a++)
                        e.call(n, t[o[a]], o[a]);
            },
            arrayEquals: function(t, e) {
                var n, i, a, r;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, i = t.length; n < i; ++n)
                    if (
                        ((a = t[n]), (r = e[n]), a instanceof Array && r instanceof Array)
                    ) {
                        if (!M.arrayEquals(a, r)) return !1;
                    } else if (a !== r) return !1;
                return !0;
            },
            clone: function(t) {
                if (M.isArray(t)) return t.map(M.clone);
                if (M.isObject(t)) {
                    for (
                        var e = Object.create(t), n = Object.keys(t), i = n.length, a = 0; a < i;
                        ++a
                    )
                        e[n[a]] = M.clone(t[n[a]]);
                    return e;
                }
                return t;
            },
            _merger: function(t, e, n, i) {
                if (k(t)) {
                    var a = e[t],
                        r = n[t];
                    M.isObject(a) && M.isObject(r) ?
                        M.merge(a, r, i) :
                        (e[t] = M.clone(r));
                }
            },
            _mergerIf: function(t, e, n) {
                if (k(t)) {
                    var i = e[t],
                        a = n[t];
                    M.isObject(i) && M.isObject(a) ?
                        M.mergeIf(i, a) :
                        e.hasOwnProperty(t) || (e[t] = M.clone(a));
                }
            },
            merge: function(t, e, n) {
                var i,
                    a,
                    r,
                    o,
                    s,
                    l = M.isArray(e) ? e : [e],
                    u = l.length;
                if (!M.isObject(t)) return t;
                for (i = (n = n || {}).merger || M._merger, a = 0; a < u; ++a)
                    if (((e = l[a]), M.isObject(e)))
                        for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s)
                            i(r[s], t, e, n);
                return t;
            },
            mergeIf: function(t, e) {
                return M.merge(t, e, { merger: M._mergerIf });
            },
            extend: Object.assign ||
                function(t) {
                    return M.merge(t, [].slice.call(arguments, 1), {
                        merger: function(t, e, n) {
                            e[t] = n[t];
                        },
                    });
                },
            inherits: function(t) {
                var e = this,
                    n =
                    t && t.hasOwnProperty("constructor") ?
                    t.constructor :
                    function() {
                        return e.apply(this, arguments);
                    },
                    i = function() {
                        this.constructor = n;
                    };
                return (
                    (i.prototype = e.prototype),
                    (n.prototype = new i()),
                    (n.extend = M.inherits),
                    t && M.extend(n.prototype, t),
                    (n.__super__ = e.prototype),
                    n
                );
            },
            _deprecated: function(t, e, n, i) {
                void 0 !== e &&
                    console.warn(
                        t + ': "' + n + '" is deprecated. Please use "' + i + '" instead'
                    );
            },
        },
        S = M;
    (M.callCallback = M.callback),
    (M.indexOf = function(t, e, n) {
        return Array.prototype.indexOf.call(t, e, n);
    }),
    (M.getValueOrDefault = M.valueOrDefault),
    (M.getValueAtIndexOrDefault = M.valueAtIndexOrDefault);
    var C = {
            linear: function(t) {
                return t;
            },
            easeInQuad: function(t) {
                return t * t;
            },
            easeOutQuad: function(t) {
                return -t * (t - 2);
            },
            easeInOutQuad: function(t) {
                return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
            },
            easeInCubic: function(t) {
                return t * t * t;
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1;
            },
            easeInOutCubic: function(t) {
                return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
            },
            easeInQuart: function(t) {
                return t * t * t * t;
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1);
            },
            easeInOutQuart: function(t) {
                return (t /= 0.5) < 1 ?
                    0.5 * t * t * t * t :
                    -0.5 * ((t -= 2) * t * t * t - 2);
            },
            easeInQuint: function(t) {
                return t * t * t * t * t;
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1;
            },
            easeInOutQuint: function(t) {
                return (t /= 0.5) < 1 ?
                    0.5 * t * t * t * t * t :
                    0.5 * ((t -= 2) * t * t * t * t + 2);
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2));
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2));
            },
            easeInOutSine: function(t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            },
            easeInOutExpo: function(t) {
                return 0 === t ?
                    0 :
                    1 === t ?
                    1 :
                    (t /= 0.5) < 1 ?
                    0.5 * Math.pow(2, 10 * (t - 1)) :
                    0.5 * (2 - Math.pow(2, -10 * --t));
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t);
            },
            easeInOutCirc: function(t) {
                return (t /= 0.5) < 1 ?
                    -0.5 * (Math.sqrt(1 - t * t) - 1) :
                    0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ?
                    0 :
                    1 === t ?
                    1 :
                    (n || (n = 0.3),
                        i < 1 ?
                        ((i = 1), (e = n / 4)) :
                        (e = (n / (2 * Math.PI)) * Math.asin(1 / i)), -i *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ?
                    0 :
                    1 === t ?
                    1 :
                    (n || (n = 0.3),
                        i < 1 ?
                        ((i = 1), (e = n / 4)) :
                        (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                        i * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) +
                        1);
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ?
                    0 :
                    2 == (t /= 0.5) ?
                    1 :
                    (n || (n = 0.45),
                        i < 1 ?
                        ((i = 1), (e = n / 4)) :
                        (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                        t < 1 ?
                        i *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / n) *
                        -0.5 :
                        i *
                        Math.pow(2, -10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / n) *
                        0.5 +
                        1);
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e);
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1;
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= 0.5) < 1 ?
                    t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 :
                    0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: function(t) {
                return 1 - C.easeOutBounce(1 - t);
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ?
                    7.5625 * t * t :
                    t < 2 / 2.75 ?
                    7.5625 * (t -= 1.5 / 2.75) * t + 0.75 :
                    t < 2.5 / 2.75 ?
                    7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 :
                    7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
            easeInOutBounce: function(t) {
                return t < 0.5 ?
                    0.5 * C.easeInBounce(2 * t) :
                    0.5 * C.easeOutBounce(2 * t - 1) + 0.5;
            },
        },
        P = { effects: C };
    S.easingEffects = C;
    var A = Math.PI,
        D = A / 180,
        T = 2 * A,
        I = A / 2,
        F = A / 4,
        O = (2 * A) / 3,
        L = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height);
            },
            roundedRect: function(t, e, n, i, a, r) {
                if (r) {
                    var o = Math.min(r, a / 2, i / 2),
                        s = e + o,
                        l = n + o,
                        u = e + i - o,
                        d = n + a - o;
                    t.moveTo(e, l),
                        s < u && l < d ?
                        (t.arc(s, l, o, -A, -I),
                            t.arc(u, l, o, -I, 0),
                            t.arc(u, d, o, 0, I),
                            t.arc(s, d, o, I, A)) :
                        s < u ?
                        (t.moveTo(s, n),
                            t.arc(u, l, o, -I, I),
                            t.arc(s, l, o, I, A + I)) :
                        l < d ?
                        (t.arc(s, l, o, -A, 0), t.arc(s, d, o, 0, A)) :
                        t.arc(s, l, o, -A, A),
                        t.closePath(),
                        t.moveTo(e, n);
                } else t.rect(e, n, i, a);
            },
            drawPoint: function(t, e, n, i, a, r) {
                var o,
                    s,
                    l,
                    u,
                    d,
                    h = (r || 0) * D;
                if (
                    e &&
                    "object" == typeof e &&
                    ("[object HTMLImageElement]" === (o = e.toString()) ||
                        "[object HTMLCanvasElement]" === o)
                )
                    return (
                        t.save(),
                        t.translate(i, a),
                        t.rotate(h),
                        t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
                        void t.restore()
                    );
                if (!(isNaN(n) || n <= 0)) {
                    switch ((t.beginPath(), e)) {
                        default: t.arc(i, a, n, 0, T),
                        t.closePath();
                        break;
                        case "triangle":
                                t.moveTo(i + Math.sin(h) * n, a - Math.cos(h) * n),
                            (h += O),
                            t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n),
                            (h += O),
                            t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n),
                            t.closePath();
                            break;
                        case "rectRounded":
                                (u = n - (d = 0.516 * n)),
                            (s = Math.cos(h + F) * u),
                            (l = Math.sin(h + F) * u),
                            t.arc(i - s, a - l, d, h - A, h - I),
                            t.arc(i + l, a - s, d, h - I, h),
                            t.arc(i + s, a + l, d, h, h + I),
                            t.arc(i - l, a + s, d, h + I, h + A),
                            t.closePath();
                            break;
                        case "rect":
                                if (!r) {
                                    (u = Math.SQRT1_2 * n), t.rect(i - u, a - u, 2 * u, 2 * u);
                                    break;
                                }
                            h += F;
                        case "rectRot":
                                (s = Math.cos(h) * n),
                            (l = Math.sin(h) * n),
                            t.moveTo(i - s, a - l),
                            t.lineTo(i + l, a - s),
                            t.lineTo(i + s, a + l),
                            t.lineTo(i - l, a + s),
                            t.closePath();
                            break;
                        case "crossRot":
                                h += F;
                        case "cross":
                                (s = Math.cos(h) * n),
                            (l = Math.sin(h) * n),
                            t.moveTo(i - s, a - l),
                            t.lineTo(i + s, a + l),
                            t.moveTo(i + l, a - s),
                            t.lineTo(i - l, a + s);
                            break;
                        case "star":
                                (s = Math.cos(h) * n),
                            (l = Math.sin(h) * n),
                            t.moveTo(i - s, a - l),
                            t.lineTo(i + s, a + l),
                            t.moveTo(i + l, a - s),
                            t.lineTo(i - l, a + s),
                            (h += F),
                            (s = Math.cos(h) * n),
                            (l = Math.sin(h) * n),
                            t.moveTo(i - s, a - l),
                            t.lineTo(i + s, a + l),
                            t.moveTo(i + l, a - s),
                            t.lineTo(i - l, a + s);
                            break;
                        case "line":
                                (s = Math.cos(h) * n),
                            (l = Math.sin(h) * n),
                            t.moveTo(i - s, a - l),
                            t.lineTo(i + s, a + l);
                            break;
                        case "dash":
                                t.moveTo(i, a),
                            t.lineTo(i + Math.cos(h) * n, a + Math.sin(h) * n);
                    }
                    t.fill(), t.stroke();
                }
            },
            _isPointInArea: function(t, e) {
                return (
                    t.x > e.left - 1e-6 &&
                    t.x < e.right + 1e-6 &&
                    t.y > e.top - 1e-6 &&
                    t.y < e.bottom + 1e-6
                );
            },
            clipArea: function(t, e) {
                t.save(),
                    t.beginPath(),
                    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                    t.clip();
            },
            unclipArea: function(t) {
                t.restore();
            },
            lineTo: function(t, e, n, i) {
                var a = n.steppedLine;
                if (a) {
                    if ("middle" === a) {
                        var r = (e.x + n.x) / 2;
                        t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y);
                    } else
                        ("after" === a && !i) || ("after" !== a && i) ?
                        t.lineTo(e.x, n.y) :
                        t.lineTo(n.x, e.y);
                    t.lineTo(n.x, n.y);
                } else
                    n.tension ?
                    t.bezierCurveTo(
                        i ? e.controlPointPreviousX : e.controlPointNextX,
                        i ? e.controlPointPreviousY : e.controlPointNextY,
                        i ? n.controlPointNextX : n.controlPointPreviousX,
                        i ? n.controlPointNextY : n.controlPointPreviousY,
                        n.x,
                        n.y
                    ) :
                    t.lineTo(n.x, n.y);
            },
        },
        R = L;
    (S.clear = L.clear),
    (S.drawRoundedRectangle = function(t) {
        t.beginPath(), L.roundedRect.apply(L, arguments);
    });
    var z = {
        _set: function(t, e) {
            return S.merge(this[t] || (this[t] = {}), e);
        },
    };
    z._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0,
    });
    var N = z,
        B = S.valueOrDefault;
    var E = {
            toLineHeight: function(t, e) {
                var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!n || "normal" === n[1]) return 1.2 * e;
                switch (((t = +n[2]), n[3])) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100;
                }
                return e * t;
            },
            toPadding: function(t) {
                var e, n, i, a;
                return (
                    S.isObject(t) ?
                    ((e = +t.top || 0),
                        (n = +t.right || 0),
                        (i = +t.bottom || 0),
                        (a = +t.left || 0)) :
                    (e = n = i = a = +t || 0), { top: e, right: n, bottom: i, left: a, height: e + i, width: a + n }
                );
            },
            _parseFont: function(t) {
                var e = N.global,
                    n = B(t.fontSize, e.defaultFontSize),
                    i = {
                        family: B(t.fontFamily, e.defaultFontFamily),
                        lineHeight: S.options.toLineHeight(
                            B(t.lineHeight, e.defaultLineHeight),
                            n
                        ),
                        size: n,
                        style: B(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: "",
                    };
                return (
                    (i.string = (function(t) {
                        return !t || S.isNullOrUndef(t.size) || S.isNullOrUndef(t.family) ?
                            null :
                            (t.style ? t.style + " " : "") +
                            (t.weight ? t.weight + " " : "") +
                            t.size +
                            "px " +
                            t.family;
                    })(i)),
                    i
                );
            },
            resolve: function(t, e, n, i) {
                var a,
                    r,
                    o,
                    s = !0;
                for (a = 0, r = t.length; a < r; ++a)
                    if (
                        void 0 !== (o = t[a]) &&
                        (void 0 !== e && "function" == typeof o && ((o = o(e)), (s = !1)),
                            void 0 !== n && S.isArray(o) && ((o = o[n]), (s = !1)),
                            void 0 !== o)
                    )
                        return i && !s && (i.cacheable = !1), o;
            },
        },
        W = {
            _factorize: function(t) {
                var e,
                    n = [],
                    i = Math.sqrt(t);
                for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
                return (
                    i === (0 | i) && n.push(i),
                    n
                    .sort(function(t, e) {
                        return t - e;
                    })
                    .pop(),
                    n
                );
            },
            log10: Math.log10 ||
                function(t) {
                    var e = Math.log(t) * Math.LOG10E,
                        n = Math.round(e);
                    return t === Math.pow(10, n) ? n : e;
                },
        },
        V = W;
    S.log10 = W.log10;
    var H = S,
        j = P,
        q = R,
        U = E,
        Y = V,
        G = {
            getRtlAdapter: function(t, e, n) {
                return t ?
                    (function(t, e) {
                        return {
                            x: function(n) {
                                return t + t + e - n;
                            },
                            setWidth: function(t) {
                                e = t;
                            },
                            textAlign: function(t) {
                                return "center" === t ? t : "right" === t ? "left" : "right";
                            },
                            xPlus: function(t, e) {
                                return t - e;
                            },
                            leftForLtr: function(t, e) {
                                return t - e;
                            },
                        };
                    })(e, n) :
                    {
                        x: function(t) {
                            return t;
                        },
                        setWidth: function(t) {},
                        textAlign: function(t) {
                            return t;
                        },
                        xPlus: function(t, e) {
                            return t + e;
                        },
                        leftForLtr: function(t, e) {
                            return t;
                        },
                    };
            },
            overrideTextDirection: function(t, e) {
                var n, i;
                ("ltr" !== e && "rtl" !== e) ||
                ((i = [
                        (n = t.canvas.style).getPropertyValue("direction"),
                        n.getPropertyPriority("direction"),
                    ]),
                    n.setProperty("direction", e, "important"),
                    (t.prevTextDirection = i));
            },
            restoreTextDirection: function(t) {
                var e = t.prevTextDirection;
                void 0 !== e &&
                    (delete t.prevTextDirection,
                        t.canvas.style.setProperty("direction", e[0], e[1]));
            },
        };
    (H.easing = j), (H.canvas = q), (H.options = U), (H.math = Y), (H.rtl = G);
    var X = function(t) {
        H.extend(this, t), this.initialize.apply(this, arguments);
    };
    H.extend(X.prototype, {
            _type: void 0,
            initialize: function() {
                this.hidden = !1;
            },
            pivot: function() {
                var t = this;
                return t._view || (t._view = H.extend({}, t._model)), (t._start = {}), t;
            },
            transition: function(t) {
                var e = this,
                    n = e._model,
                    i = e._start,
                    a = e._view;
                return n && 1 !== t ?
                    (a || (a = e._view = {}),
                        i || (i = e._start = {}),
                        (function(t, e, n, i) {
                            var a,
                                r,
                                o,
                                s,
                                l,
                                u,
                                d,
                                h,
                                c,
                                f = Object.keys(n);
                            for (a = 0, r = f.length; a < r; ++a)
                                if (
                                    ((u = n[(o = f[a])]),
                                        e.hasOwnProperty(o) || (e[o] = u),
                                        (s = e[o]) !== u && "_" !== o[0])
                                ) {
                                    if (
                                        (t.hasOwnProperty(o) || (t[o] = s),
                                            (d = typeof u) === typeof(l = t[o]))
                                    )
                                        if ("string" === d) {
                                            if ((h = _(l)).valid && (c = _(u)).valid) {
                                                e[o] = c.mix(h, i).rgbString();
                                                continue;
                                            }
                                        } else if (H.isFinite(l) && H.isFinite(u)) {
                                        e[o] = l + (u - l) * i;
                                        continue;
                                    }
                                    e[o] = u;
                                }
                        })(i, a, n, t),
                        e) :
                    ((e._view = H.extend({}, n)), (e._start = null), e);
            },
            tooltipPosition: function() {
                return { x: this._model.x, y: this._model.y };
            },
            hasValue: function() {
                return H.isNumber(this._model.x) && H.isNumber(this._model.y);
            },
        }),
        (X.extend = H.inherits);
    var K = X,
        Z = K.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
        }),
        $ = Z;
    Object.defineProperty(Z.prototype, "animationObject", {
            get: function() {
                return this;
            },
        }),
        Object.defineProperty(Z.prototype, "chartInstance", {
            get: function() {
                return this.chart;
            },
            set: function(t) {
                this.chart = t;
            },
        }),
        N._set("global", {
            animation: {
                duration: 1e3,
                easing: "easeOutQuart",
                onProgress: H.noop,
                onComplete: H.noop,
            },
        });
    var J = {
            animations: [],
            request: null,
            addAnimation: function(t, e, n, i) {
                var a,
                    r,
                    o = this.animations;
                for (
                    e.chart = t,
                    e.startTime = Date.now(),
                    e.duration = n,
                    i || (t.animating = !0),
                    a = 0,
                    r = o.length; a < r;
                    ++a
                )
                    if (o[a].chart === t) return void(o[a] = e);
                o.push(e), 1 === o.length && this.requestAnimationFrame();
            },
            cancelAnimation: function(t) {
                var e = H.findIndex(this.animations, function(e) {
                    return e.chart === t;
                }); -
                1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request &&
                    (t.request = H.requestAnimFrame.call(window, function() {
                        (t.request = null), t.startDigest();
                    }));
            },
            startDigest: function() {
                this.advance(),
                    this.animations.length > 0 && this.requestAnimationFrame();
            },
            advance: function() {
                for (var t, e, n, i, a = this.animations, r = 0; r < a.length;)
                    (e = (t = a[r]).chart),
                    (n = t.numSteps),
                    (i = Math.floor(((Date.now() - t.startTime) / t.duration) * n) + 1),
                    (t.currentStep = Math.min(i, n)),
                    H.callback(t.render, [e, t], e),
                    H.callback(t.onAnimationProgress, [t], e),
                    t.currentStep >= n ?
                    (H.callback(t.onAnimationComplete, [t], e),
                        (e.animating = !1),
                        a.splice(r, 1)) :
                    ++r;
            },
        },
        Q = H.options.resolve,
        tt = ["push", "pop", "shift", "splice", "unshift"];

    function et(t, e) {
        var n = t._chartjs;
        if (n) {
            var i = n.listeners,
                a = i.indexOf(e); -
            1 !== a && i.splice(a, 1),
                i.length > 0 ||
                (tt.forEach(function(e) {
                        delete t[e];
                    }),
                    delete t._chartjs);
        }
    }
    var nt = function(t, e) {
        this.initialize(t, e);
    };
    H.extend(nt.prototype, {
            datasetElementType: null,
            dataElementType: null,
            _datasetElementOptions: [
                "backgroundColor",
                "borderCapStyle",
                "borderColor",
                "borderDash",
                "borderDashOffset",
                "borderJoinStyle",
                "borderWidth",
            ],
            _dataElementOptions: [
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "pointStyle",
            ],
            initialize: function(t, e) {
                var n = this;
                (n.chart = t),
                (n.index = e),
                n.linkScales(),
                    n.addElements(),
                    (n._type = n.getMeta().type);
            },
            updateIndex: function(t) {
                this.index = t;
            },
            linkScales: function() {
                var t = this.getMeta(),
                    e = this.chart,
                    n = e.scales,
                    i = this.getDataset(),
                    a = e.options.scales;
                (null !== t.xAxisID && t.xAxisID in n && !i.xAxisID) ||
                (t.xAxisID = i.xAxisID || a.xAxes[0].id),
                (null !== t.yAxisID && t.yAxisID in n && !i.yAxisID) ||
                (t.yAxisID = i.yAxisID || a.yAxes[0].id);
            },
            getDataset: function() {
                return this.chart.data.datasets[this.index];
            },
            getMeta: function() {
                return this.chart.getDatasetMeta(this.index);
            },
            getScaleForId: function(t) {
                return this.chart.scales[t];
            },
            _getValueScaleId: function() {
                return this.getMeta().yAxisID;
            },
            _getIndexScaleId: function() {
                return this.getMeta().xAxisID;
            },
            _getValueScale: function() {
                return this.getScaleForId(this._getValueScaleId());
            },
            _getIndexScale: function() {
                return this.getScaleForId(this._getIndexScaleId());
            },
            reset: function() {
                this._update(!0);
            },
            destroy: function() {
                this._data && et(this._data, this);
            },
            createMetaDataset: function() {
                var t = this.datasetElementType;
                return t && new t({ _chart: this.chart, _datasetIndex: this.index });
            },
            createMetaData: function(t) {
                var e = this.dataElementType;
                return (
                    e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t })
                );
            },
            addElements: function() {
                var t,
                    e,
                    n = this.getMeta(),
                    i = this.getDataset().data || [],
                    a = n.data;
                for (t = 0, e = i.length; t < e; ++t)
                    a[t] = a[t] || this.createMetaData(t);
                n.dataset = n.dataset || this.createMetaDataset();
            },
            addElementAndReset: function(t) {
                var e = this.createMetaData(t);
                this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
            },
            buildOrUpdateElements: function() {
                var t,
                    e,
                    n = this,
                    i = n.getDataset(),
                    a = i.data || (i.data = []);
                n._data !== a &&
                    (n._data && et(n._data, n),
                        a &&
                        Object.isExtensible(a) &&
                        ((e = n),
                            (t = a)._chartjs ?
                            t._chartjs.listeners.push(e) :
                            (Object.defineProperty(t, "_chartjs", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: { listeners: [e] },
                                }),
                                tt.forEach(function(e) {
                                    var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                        i = t[e];
                                    Object.defineProperty(t, e, {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: function() {
                                            var e = Array.prototype.slice.call(arguments),
                                                a = i.apply(this, e);
                                            return (
                                                H.each(t._chartjs.listeners, function(t) {
                                                    "function" == typeof t[n] && t[n].apply(t, e);
                                                }),
                                                a
                                            );
                                        },
                                    });
                                }))),
                        (n._data = a)),
                    n.resyncElements();
            },
            _configure: function() {
                this._config = H.merge(
                    Object.create(null), [this.chart.options.datasets[this._type], this.getDataset()], {
                        merger: function(t, e, n) {
                            "_meta" !== t && "data" !== t && H._merger(t, e, n);
                        },
                    }
                );
            },
            _update: function(t) {
                this._configure(), (this._cachedDataOpts = null), this.update(t);
            },
            update: H.noop,
            transition: function(t) {
                for (
                    var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i;
                    ++a
                )
                    n[a].transition(t);
                e.dataset && e.dataset.transition(t);
            },
            draw: function() {
                var t = this.getMeta(),
                    e = t.data || [],
                    n = e.length,
                    i = 0;
                for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw();
            },
            getStyle: function(t) {
                var e,
                    n = this.getMeta(),
                    i = n.dataset;
                return (
                    this._configure(),
                    i && void 0 === t ?
                    (e = this._resolveDatasetElementOptions(i || {})) :
                    ((t = t || 0),
                        (e = this._resolveDataElementOptions(n.data[t] || {}, t))),
                    (!1 !== e.fill && null !== e.fill) ||
                    (e.backgroundColor = e.borderColor),
                    e
                );
            },
            _resolveDatasetElementOptions: function(t, e) {
                var n,
                    i,
                    a,
                    r,
                    o = this,
                    s = o.chart,
                    l = o._config,
                    u = t.custom || {},
                    d = s.options.elements[o.datasetElementType.prototype._type] || {},
                    h = o._datasetElementOptions,
                    c = {},
                    f = {
                        chart: s,
                        dataset: o.getDataset(),
                        datasetIndex: o.index,
                        hover: e,
                    };
                for (n = 0, i = h.length; n < i; ++n)
                    (a = h[n]),
                    (r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a),
                    (c[a] = Q([u[r], l[r], d[r]], f));
                return c;
            },
            _resolveDataElementOptions: function(t, e) {
                var n = this,
                    i = t && t.custom,
                    a = n._cachedDataOpts;
                if (a && !i) return a;
                var r,
                    o,
                    s,
                    l,
                    u = n.chart,
                    d = n._config,
                    h = u.options.elements[n.dataElementType.prototype._type] || {},
                    c = n._dataElementOptions,
                    f = {},
                    g = {
                        chart: u,
                        dataIndex: e,
                        dataset: n.getDataset(),
                        datasetIndex: n.index,
                    },
                    p = { cacheable: !i };
                if (((i = i || {}), H.isArray(c)))
                    for (o = 0, s = c.length; o < s; ++o)
                        f[(l = c[o])] = Q([i[l], d[l], h[l]], g, e, p);
                else
                    for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o)
                        f[(l = r[o])] = Q([i[l], d[c[l]], d[l], h[l]], g, e, p);
                return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
            },
            removeHoverStyle: function(t) {
                H.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    a = t._model,
                    r = H.getHoverColor;
                (t.$previousStyle = {
                    backgroundColor: a.backgroundColor,
                    borderColor: a.borderColor,
                    borderWidth: a.borderWidth,
                }),
                (a.backgroundColor = Q(
                    [
                        i.hoverBackgroundColor,
                        e.hoverBackgroundColor,
                        r(a.backgroundColor),
                    ],
                    void 0,
                    n
                )),
                (a.borderColor = Q(
                    [i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)],
                    void 0,
                    n
                )),
                (a.borderWidth = Q(
                    [i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth],
                    void 0,
                    n
                ));
            },
            _removeDatasetHoverStyle: function() {
                var t = this.getMeta().dataset;
                t && this.removeHoverStyle(t);
            },
            _setDatasetHoverStyle: function() {
                var t,
                    e,
                    n,
                    i,
                    a,
                    r,
                    o = this.getMeta().dataset,
                    s = {};
                if (o) {
                    for (
                        r = o._model,
                        a = this._resolveDatasetElementOptions(o, !0),
                        t = 0,
                        e = (i = Object.keys(a)).length; t < e;
                        ++t
                    )
                        (s[(n = i[t])] = r[n]), (r[n] = a[n]);
                    o.$previousStyle = s;
                }
            },
            resyncElements: function() {
                var t = this.getMeta(),
                    e = this.getDataset().data,
                    n = t.data.length,
                    i = e.length;
                i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
            },
            insertElements: function(t, e) {
                for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
            },
            onDataPush: function() {
                var t = arguments.length;
                this.insertElements(this.getDataset().data.length - t, t);
            },
            onDataPop: function() {
                this.getMeta().data.pop();
            },
            onDataShift: function() {
                this.getMeta().data.shift();
            },
            onDataSplice: function(t, e) {
                this.getMeta().data.splice(t, e),
                    this.insertElements(t, arguments.length - 2);
            },
            onDataUnshift: function() {
                this.insertElements(0, arguments.length);
            },
        }),
        (nt.extend = H.inherits);
    var it = nt,
        at = 2 * Math.PI;

    function rt(t, e) {
        var n = e.startAngle,
            i = e.endAngle,
            a = e.pixelMargin,
            r = a / e.outerRadius,
            o = e.x,
            s = e.y;
        t.beginPath(),
            t.arc(o, s, e.outerRadius, n - r, i + r),
            e.innerRadius > a ?
            ((r = a / e.innerRadius),
                t.arc(o, s, e.innerRadius - a, i + r, n - r, !0)) :
            t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2),
            t.closePath(),
            t.clip();
    }

    function ot(t, e, n) {
        var i = "inner" === e.borderAlign;
        i
            ?
            ((t.lineWidth = 2 * e.borderWidth), (t.lineJoin = "round")) :
            ((t.lineWidth = e.borderWidth), (t.lineJoin = "bevel")),
            n.fullCircles &&
            (function(t, e, n, i) {
                var a,
                    r = n.endAngle;
                for (
                    i &&
                    ((n.endAngle = n.startAngle + at),
                        rt(t, n),
                        (n.endAngle = r),
                        n.endAngle === n.startAngle &&
                        n.fullCircles &&
                        ((n.endAngle += at), n.fullCircles--)),
                    t.beginPath(),
                    t.arc(
                        n.x,
                        n.y,
                        n.innerRadius,
                        n.startAngle + at,
                        n.startAngle, !0
                    ),
                    a = 0; a < n.fullCircles;
                    ++a
                )
                    t.stroke();
                for (
                    t.beginPath(),
                    t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + at),
                    a = 0; a < n.fullCircles;
                    ++a
                )
                    t.stroke();
            })(t, e, n, i),
            i && rt(t, n),
            t.beginPath(),
            t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
            t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
            t.closePath(),
            t.stroke();
    }
    N._set("global", {
        elements: {
            arc: {
                backgroundColor: N.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center",
            },
        },
    });
    var st = K.extend({
            _type: "arc",
            inLabelRange: function(t) {
                var e = this._view;
                return (!!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2));
            },
            inRange: function(t, e) {
                var n = this._view;
                if (n) {
                    for (
                        var i = H.getAngleFromPoint(n, { x: t, y: e }),
                            a = i.angle,
                            r = i.distance,
                            o = n.startAngle,
                            s = n.endAngle; s < o;

                    )
                        s += at;
                    for (; a > s;) a -= at;
                    for (; a < o;) a += at;
                    var l = a >= o && a <= s,
                        u = r >= n.innerRadius && r <= n.outerRadius;
                    return l && u;
                }
                return !1;
            },
            getCenterPoint: function() {
                var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    n = (t.innerRadius + t.outerRadius) / 2;
                return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
            },
            getArea: function() {
                var t = this._view;
                return (
                    Math.PI *
                    ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
                    (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                );
            },
            tooltipPosition: function() {
                var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
            },
            draw: function() {
                var t,
                    e = this._chart.ctx,
                    n = this._view,
                    i = "inner" === n.borderAlign ? 0.33 : 0,
                    a = {
                        x: n.x,
                        y: n.y,
                        innerRadius: n.innerRadius,
                        outerRadius: Math.max(n.outerRadius - i, 0),
                        pixelMargin: i,
                        startAngle: n.startAngle,
                        endAngle: n.endAngle,
                        fullCircles: Math.floor(n.circumference / at),
                    };
                if (
                    (e.save(),
                        (e.fillStyle = n.backgroundColor),
                        (e.strokeStyle = n.borderColor),
                        a.fullCircles)
                ) {
                    for (
                        a.endAngle = a.startAngle + at,
                        e.beginPath(),
                        e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
                        e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
                        e.closePath(),
                        t = 0; t < a.fullCircles;
                        ++t
                    )
                        e.fill();
                    a.endAngle = a.startAngle + (n.circumference % at);
                }
                e.beginPath(),
                    e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
                    e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
                    e.closePath(),
                    e.fill(),
                    n.borderWidth && ot(e, n, a),
                    e.restore();
            },
        }),
        lt = H.valueOrDefault,
        ut = N.global.defaultColor;
    N._set("global", {
        elements: {
            line: {
                tension: 0.4,
                backgroundColor: ut,
                borderWidth: 3,
                borderColor: ut,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0,
            },
        },
    });
    var dt = K.extend({
            _type: "line",
            draw: function() {
                var t,
                    e,
                    n,
                    i = this,
                    a = i._view,
                    r = i._chart.ctx,
                    o = a.spanGaps,
                    s = i._children.slice(),
                    l = N.global,
                    u = l.elements.line,
                    d = -1,
                    h = i._loop;
                if (s.length) {
                    if (i._loop) {
                        for (t = 0; t < s.length; ++t)
                            if (
                                ((e = H.previousItem(s, t)), !s[t]._view.skip && e._view.skip)
                            ) {
                                (s = s.slice(t).concat(s.slice(0, t))), (h = o);
                                break;
                            }
                        h && s.push(s[0]);
                    }
                    for (
                        r.save(),
                        r.lineCap = a.borderCapStyle || u.borderCapStyle,
                        r.setLineDash && r.setLineDash(a.borderDash || u.borderDash),
                        r.lineDashOffset = lt(a.borderDashOffset, u.borderDashOffset),
                        r.lineJoin = a.borderJoinStyle || u.borderJoinStyle,
                        r.lineWidth = lt(a.borderWidth, u.borderWidth),
                        r.strokeStyle = a.borderColor || l.defaultColor,
                        r.beginPath(),
                        (n = s[0]._view).skip || (r.moveTo(n.x, n.y), (d = 0)),
                        t = 1; t < s.length;
                        ++t
                    )
                        (n = s[t]._view),
                        (e = -1 === d ? H.previousItem(s, t) : s[d]),
                        n.skip ||
                        ((d !== t - 1 && !o) || -1 === d ?
                            r.moveTo(n.x, n.y) :
                            H.canvas.lineTo(r, e._view, n),
                            (d = t));
                    h && r.closePath(), r.stroke(), r.restore();
                }
            },
        }),
        ht = H.valueOrDefault,
        ct = N.global.defaultColor;

    function ft(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
    }
    N._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: ct,
                borderColor: ct,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1,
            },
        },
    });
    var gt = K.extend({
            _type: "point",
            inRange: function(t, e) {
                var n = this._view;
                return (!!n &&
                    Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
                    Math.pow(n.hitRadius + n.radius, 2)
                );
            },
            inLabelRange: ft,
            inXRange: ft,
            inYRange: function(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
            },
            getCenterPoint: function() {
                var t = this._view;
                return { x: t.x, y: t.y };
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2);
            },
            tooltipPosition: function() {
                var t = this._view;
                return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
            },
            draw: function(t) {
                var e = this._view,
                    n = this._chart.ctx,
                    i = e.pointStyle,
                    a = e.rotation,
                    r = e.radius,
                    o = e.x,
                    s = e.y,
                    l = N.global,
                    u = l.defaultColor;
                e.skip ||
                    ((void 0 === t || H.canvas._isPointInArea(e, t)) &&
                        ((n.strokeStyle = e.borderColor || u),
                            (n.lineWidth = ht(e.borderWidth, l.elements.point.borderWidth)),
                            (n.fillStyle = e.backgroundColor || u),
                            H.canvas.drawPoint(n, i, r, o, s, a)));
            },
        }),
        pt = N.global.defaultColor;

    function mt(t) {
        return t && void 0 !== t.width;
    }

    function vt(t) {
        var e, n, i, a, r;
        return (
            mt(t) ?
            ((r = t.width / 2),
                (e = t.x - r),
                (n = t.x + r),
                (i = Math.min(t.y, t.base)),
                (a = Math.max(t.y, t.base))) :
            ((r = t.height / 2),
                (e = Math.min(t.x, t.base)),
                (n = Math.max(t.x, t.base)),
                (i = t.y - r),
                (a = t.y + r)), { left: e, top: i, right: n, bottom: a }
        );
    }

    function bt(t, e, n) {
        return t === e ? n : t === n ? e : t;
    }

    function xt(t, e, n) {
        var i,
            a,
            r,
            o,
            s = t.borderWidth,
            l = (function(t) {
                var e = t.borderSkipped,
                    n = {};
                return e ?
                    (t.horizontal ?
                        t.base > t.x && (e = bt(e, "left", "right")) :
                        t.base < t.y && (e = bt(e, "bottom", "top")),
                        (n[e] = !0),
                        n) :
                    n;
            })(t);
        return (
            H.isObject(s) ?
            ((i = +s.top || 0),
                (a = +s.right || 0),
                (r = +s.bottom || 0),
                (o = +s.left || 0)) :
            (i = a = r = o = +s || 0), {
                t: l.top || i < 0 ? 0 : i > n ? n : i,
                r: l.right || a < 0 ? 0 : a > e ? e : a,
                b: l.bottom || r < 0 ? 0 : r > n ? n : r,
                l: l.left || o < 0 ? 0 : o > e ? e : o,
            }
        );
    }

    function yt(t, e, n) {
        var i = null === e,
            a = null === n,
            r = !(!t || (i && a)) && vt(t);
        return (
            r &&
            (i || (e >= r.left && e <= r.right)) &&
            (a || (n >= r.top && n <= r.bottom))
        );
    }
    N._set("global", {
        elements: {
            rectangle: {
                backgroundColor: pt,
                borderColor: pt,
                borderSkipped: "bottom",
                borderWidth: 0,
            },
        },
    });
    var _t = K.extend({
            _type: "rectangle",
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view,
                    n = (function(t) {
                        var e = vt(t),
                            n = e.right - e.left,
                            i = e.bottom - e.top,
                            a = xt(t, n / 2, i / 2);
                        return {
                            outer: { x: e.left, y: e.top, w: n, h: i },
                            inner: {
                                x: e.left + a.l,
                                y: e.top + a.t,
                                w: n - a.l - a.r,
                                h: i - a.t - a.b,
                            },
                        };
                    })(e),
                    i = n.outer,
                    a = n.inner;
                (t.fillStyle = e.backgroundColor),
                t.fillRect(i.x, i.y, i.w, i.h),
                    (i.w === a.w && i.h === a.h) ||
                    (t.save(),
                        t.beginPath(),
                        t.rect(i.x, i.y, i.w, i.h),
                        t.clip(),
                        (t.fillStyle = e.borderColor),
                        t.rect(a.x, a.y, a.w, a.h),
                        t.fill("evenodd"),
                        t.restore());
            },
            height: function() {
                var t = this._view;
                return t.base - t.y;
            },
            inRange: function(t, e) {
                return yt(this._view, t, e);
            },
            inLabelRange: function(t, e) {
                var n = this._view;
                return mt(n) ? yt(n, t, null) : yt(n, null, e);
            },
            inXRange: function(t) {
                return yt(this._view, t, null);
            },
            inYRange: function(t) {
                return yt(this._view, null, t);
            },
            getCenterPoint: function() {
                var t,
                    e,
                    n = this._view;
                return (
                    mt(n) ?
                    ((t = n.x), (e = (n.y + n.base) / 2)) :
                    ((t = (n.x + n.base) / 2), (e = n.y)), { x: t, y: e }
                );
            },
            getArea: function() {
                var t = this._view;
                return mt(t) ?
                    t.width * Math.abs(t.y - t.base) :
                    t.height * Math.abs(t.x - t.base);
            },
            tooltipPosition: function() {
                var t = this._view;
                return { x: t.x, y: t.y };
            },
        }),
        kt = {},
        wt = st,
        Mt = dt,
        St = gt,
        Ct = _t;
    (kt.Arc = wt), (kt.Line = Mt), (kt.Point = St), (kt.Rectangle = Ct);
    var Pt = H._deprecated,
        At = H.valueOrDefault;

    function Dt(t, e, n) {
        var i,
            a,
            r = n.barThickness,
            o = e.stackCount,
            s = e.pixels[t],
            l = H.isNullOrUndef(r) ?
            (function(t, e) {
                var n,
                    i,
                    a,
                    r,
                    o = t._length;
                for (a = 1, r = e.length; a < r; ++a)
                    o = Math.min(o, Math.abs(e[a] - e[a - 1]));
                for (a = 0, r = t.getTicks().length; a < r; ++a)
                    (i = t.getPixelForTick(a)),
                    (o = a > 0 ? Math.min(o, Math.abs(i - n)) : o),
                    (n = i);
                return o;
            })(e.scale, e.pixels) :
            -1;
        return (
            H.isNullOrUndef(r) ?
            ((i = l * n.categoryPercentage), (a = n.barPercentage)) :
            ((i = r * o), (a = 1)), { chunk: i / o, ratio: a, start: s - i / 2 }
        );
    }
    N._set("bar", {
            hover: { mode: "label" },
            scales: {
                xAxes: [
                    { type: "category", offset: !0, gridLines: { offsetGridLines: !0 } },
                ],
                yAxes: [{ type: "linear" }],
            },
        }),
        N._set("global", {
            datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
        });
    var Tt = it.extend({
            dataElementType: kt.Rectangle,
            _dataElementOptions: [
                "backgroundColor",
                "borderColor",
                "borderSkipped",
                "borderWidth",
                "barPercentage",
                "barThickness",
                "categoryPercentage",
                "maxBarThickness",
                "minBarLength",
            ],
            initialize: function() {
                var t,
                    e,
                    n = this;
                it.prototype.initialize.apply(n, arguments),
                    ((t = n.getMeta()).stack = n.getDataset().stack),
                    (t.bar = !0),
                    (e = n._getIndexScale().options),
                    Pt(
                        "bar chart",
                        e.barPercentage,
                        "scales.[x/y]Axes.barPercentage",
                        "dataset.barPercentage"
                    ),
                    Pt(
                        "bar chart",
                        e.barThickness,
                        "scales.[x/y]Axes.barThickness",
                        "dataset.barThickness"
                    ),
                    Pt(
                        "bar chart",
                        e.categoryPercentage,
                        "scales.[x/y]Axes.categoryPercentage",
                        "dataset.categoryPercentage"
                    ),
                    Pt(
                        "bar chart",
                        n._getValueScale().options.minBarLength,
                        "scales.[x/y]Axes.minBarLength",
                        "dataset.minBarLength"
                    ),
                    Pt(
                        "bar chart",
                        e.maxBarThickness,
                        "scales.[x/y]Axes.maxBarThickness",
                        "dataset.maxBarThickness"
                    );
            },
            update: function(t) {
                var e,
                    n,
                    i = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e)
                    this.updateElement(i[e], e, t);
            },
            updateElement: function(t, e, n) {
                var i = this,
                    a = i.getMeta(),
                    r = i.getDataset(),
                    o = i._resolveDataElementOptions(t, e);
                (t._xScale = i.getScaleForId(a.xAxisID)),
                (t._yScale = i.getScaleForId(a.yAxisID)),
                (t._datasetIndex = i.index),
                (t._index = e),
                (t._model = {
                    backgroundColor: o.backgroundColor,
                    borderColor: o.borderColor,
                    borderSkipped: o.borderSkipped,
                    borderWidth: o.borderWidth,
                    datasetLabel: r.label,
                    label: i.chart.data.labels[e],
                }),
                H.isArray(r.data[e]) && (t._model.borderSkipped = null),
                    i._updateElementGeometry(t, e, n, o),
                    t.pivot();
            },
            _updateElementGeometry: function(t, e, n, i) {
                var a = this,
                    r = t._model,
                    o = a._getValueScale(),
                    s = o.getBasePixel(),
                    l = o.isHorizontal(),
                    u = a._ruler || a.getRuler(),
                    d = a.calculateBarValuePixels(a.index, e, i),
                    h = a.calculateBarIndexPixels(a.index, e, u, i);
                (r.horizontal = l),
                (r.base = n ? s : d.base),
                (r.x = l ? (n ? s : d.head) : h.center),
                (r.y = l ? h.center : n ? s : d.head),
                (r.height = l ? h.size : void 0),
                (r.width = l ? void 0 : h.size);
            },
            _getStacks: function(t) {
                var e,
                    n,
                    i = this._getIndexScale(),
                    a = i._getMatchingVisibleMetas(this._type),
                    r = i.options.stacked,
                    o = a.length,
                    s = [];
                for (
                    e = 0; e < o &&
                    ((n = a[e]),
                        (!1 === r ||
                            -1 === s.indexOf(n.stack) ||
                            (void 0 === r && void 0 === n.stack)) &&
                        s.push(n.stack),
                        n.index !== t);
                    ++e
                );
                return s;
            },
            getStackCount: function() {
                return this._getStacks().length;
            },
            getStackIndex: function(t, e) {
                var n = this._getStacks(t),
                    i = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === i ? n.length - 1 : i;
            },
            getRuler: function() {
                var t,
                    e,
                    n = this._getIndexScale(),
                    i = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t)
                    i.push(n.getPixelForValue(null, t, this.index));
                return {
                    pixels: i,
                    start: n._startPixel,
                    end: n._endPixel,
                    stackCount: this.getStackCount(),
                    scale: n,
                };
            },
            calculateBarValuePixels: function(t, e, n) {
                var i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    d = this.chart,
                    h = this._getValueScale(),
                    c = h.isHorizontal(),
                    f = d.data.datasets,
                    g = h._getMatchingVisibleMetas(this._type),
                    p = h._parseValue(f[t].data[e]),
                    m = n.minBarLength,
                    v = h.options.stacked,
                    b = this.getMeta().stack,
                    x = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max,
                    y =
                    void 0 === p.start ?
                    p.end :
                    p.max >= 0 && p.min >= 0 ?
                    p.max - p.min :
                    p.min - p.max,
                    _ = g.length;
                if (v || (void 0 === v && void 0 !== b))
                    for (i = 0; i < _ && (a = g[i]).index !== t; ++i)
                        a.stack === b &&
                        ((r =
                                void 0 === (u = h._parseValue(f[a.index].data[e])).start ?
                                u.end :
                                u.min >= 0 && u.max >= 0 ?
                                u.max :
                                u.min),
                            ((p.min < 0 && r < 0) || (p.max >= 0 && r > 0)) && (x += r));
                return (
                    (o = h.getPixelForValue(x)),
                    (l = (s = h.getPixelForValue(x + y)) - o),
                    void 0 !== m &&
                    Math.abs(l) < m &&
                    ((l = m), (s = (y >= 0 && !c) || (y < 0 && c) ? o - m : o + m)), { size: l, base: o, head: s, center: s + l / 2 }
                );
            },
            calculateBarIndexPixels: function(t, e, n, i) {
                var a =
                    "flex" === i.barThickness ?
                    (function(t, e, n) {
                        var i,
                            a = e.pixels,
                            r = a[t],
                            o = t > 0 ? a[t - 1] : null,
                            s = t < a.length - 1 ? a[t + 1] : null,
                            l = n.categoryPercentage;
                        return (
                            null === o &&
                            (o = r - (null === s ? e.end - e.start : s - r)),
                            null === s && (s = r + r - o),
                            (i = r - ((r - Math.min(o, s)) / 2) * l), {
                                chunk: ((Math.abs(s - o) / 2) * l) / e.stackCount,
                                ratio: n.barPercentage,
                                start: i,
                            }
                        );
                    })(e, n, i) :
                    Dt(e, n, i),
                    r = this.getStackIndex(t, this.getMeta().stack),
                    o = a.start + a.chunk * r + a.chunk / 2,
                    s = Math.min(At(i.maxBarThickness, 1 / 0), a.chunk * a.ratio);
                return { base: o - s / 2, head: o + s / 2, center: o, size: s };
            },
            draw: function() {
                var t = this.chart,
                    e = this._getValueScale(),
                    n = this.getMeta().data,
                    i = this.getDataset(),
                    a = n.length,
                    r = 0;
                for (H.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
                    var o = e._parseValue(i.data[r]);
                    isNaN(o.min) || isNaN(o.max) || n[r].draw();
                }
                H.canvas.unclipArea(t.ctx);
            },
            _resolveDataElementOptions: function() {
                var t = this,
                    e = H.extend({},
                        it.prototype._resolveDataElementOptions.apply(t, arguments)
                    ),
                    n = t._getIndexScale().options,
                    i = t._getValueScale().options;
                return (
                    (e.barPercentage = At(n.barPercentage, e.barPercentage)),
                    (e.barThickness = At(n.barThickness, e.barThickness)),
                    (e.categoryPercentage = At(
                        n.categoryPercentage,
                        e.categoryPercentage
                    )),
                    (e.maxBarThickness = At(n.maxBarThickness, e.maxBarThickness)),
                    (e.minBarLength = At(i.minBarLength, e.minBarLength)),
                    e
                );
            },
        }),
        It = H.valueOrDefault,
        Ft = H.options.resolve;
    N._set("bubble", {
        hover: { mode: "single" },
        scales: {
            xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
            yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "",
                        i = e.datasets[t.datasetIndex].data[t.index];
                    return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
                },
            },
        },
    });
    var Ot = it.extend({
            dataElementType: kt.Point,
            _dataElementOptions: [
                "backgroundColor",
                "borderColor",
                "borderWidth",
                "hoverBackgroundColor",
                "hoverBorderColor",
                "hoverBorderWidth",
                "hoverRadius",
                "hitRadius",
                "pointStyle",
                "rotation",
            ],
            update: function(t) {
                var e = this,
                    n = e.getMeta().data;
                H.each(n, function(n, i) {
                    e.updateElement(n, i, t);
                });
            },
            updateElement: function(t, e, n) {
                var i = this,
                    a = i.getMeta(),
                    r = t.custom || {},
                    o = i.getScaleForId(a.xAxisID),
                    s = i.getScaleForId(a.yAxisID),
                    l = i._resolveDataElementOptions(t, e),
                    u = i.getDataset().data[e],
                    d = i.index,
                    h = n ?
                    o.getPixelForDecimal(0.5) :
                    o.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                    c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                (t._xScale = o),
                (t._yScale = s),
                (t._options = l),
                (t._datasetIndex = d),
                (t._index = e),
                (t._model = {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    borderWidth: l.borderWidth,
                    hitRadius: l.hitRadius,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    radius: n ? 0 : l.radius,
                    skip: r.skip || isNaN(h) || isNaN(c),
                    x: h,
                    y: c,
                }),
                t.pivot();
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options,
                    i = H.getHoverColor;
                (t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius,
                }),
                (e.backgroundColor = It(
                    n.hoverBackgroundColor,
                    i(n.backgroundColor)
                )),
                (e.borderColor = It(n.hoverBorderColor, i(n.borderColor))),
                (e.borderWidth = It(n.hoverBorderWidth, n.borderWidth)),
                (e.radius = n.radius + n.hoverRadius);
            },
            _resolveDataElementOptions: function(t, e) {
                var n = this,
                    i = n.chart,
                    a = n.getDataset(),
                    r = t.custom || {},
                    o = a.data[e] || {},
                    s = it.prototype._resolveDataElementOptions.apply(n, arguments),
                    l = { chart: i, dataIndex: e, dataset: a, datasetIndex: n.index };
                return (
                    n._cachedDataOpts === s && (s = H.extend({}, s)),
                    (s.radius = Ft(
                        [r.radius, o.r, n._config.radius, i.options.elements.point.radius],
                        l,
                        e
                    )),
                    s
                );
            },
        }),
        Lt = H.valueOrDefault,
        Rt = Math.PI,
        zt = 2 * Rt,
        Nt = Rt / 2;
    N._set("doughnut", {
        animation: { animateRotate: !0, animateScale: !1 },
        hover: { mode: "single" },
        legendCallback: function(t) {
            var e,
                n,
                i,
                a = document.createElement("ul"),
                r = t.data,
                o = r.datasets,
                s = r.labels;
            if ((a.setAttribute("class", t.id + "-legend"), o.length))
                for (e = 0, n = o[0].data.length; e < n; ++e)
                    ((i = a.appendChild(document.createElement("li"))).appendChild(
                        document.createElement("span")
                    ).style.backgroundColor = o[0].backgroundColor[e]),
                    s[e] && i.appendChild(document.createTextNode(s[e]));
            return a.outerHTML;
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ?
                        e.labels.map(function(n, i) {
                            var a = t.getDatasetMeta(0),
                                r = a.controller.getStyle(i);
                            return {
                                text: n,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                                index: i,
                            };
                        }) :
                        [];
                },
            },
            onClick: function(t, e) {
                var n,
                    i,
                    a,
                    r = e.index,
                    o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                    (a = o.getDatasetMeta(n)).data[r] &&
                    (a.data[r].hidden = !a.data[r].hidden);
                o.update();
            },
        },
        cutoutPercentage: 50,
        rotation: -Nt,
        circumference: zt,
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t, e) {
                    var n = e.labels[t.index],
                        i = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return H.isArray(n) ? ((n = n.slice())[0] += i) : (n += i), n;
                },
            },
        },
    });
    var Bt = it.extend({
        dataElementType: kt.Arc,
        linkScales: H.noop,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
        ],
        getRingIndex: function(t) {
            for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
            return e;
        },
        update: function(t) {
            var e,
                n,
                i,
                a,
                r = this,
                o = r.chart,
                s = o.chartArea,
                l = o.options,
                u = 1,
                d = 1,
                h = 0,
                c = 0,
                f = r.getMeta(),
                g = f.data,
                p = l.cutoutPercentage / 100 || 0,
                m = l.circumference,
                v = r._getRingWeight(r.index);
            if (m < zt) {
                var b = l.rotation % zt,
                    x = (b += b >= Rt ? -zt : b < -Rt ? zt : 0) + m,
                    y = Math.cos(b),
                    _ = Math.sin(b),
                    k = Math.cos(x),
                    w = Math.sin(x),
                    M = (b <= 0 && x >= 0) || x >= zt,
                    S = (b <= Nt && x >= Nt) || x >= zt + Nt,
                    C = (b <= -Nt && x >= -Nt) || x >= Rt + Nt,
                    P = b === -Rt || x >= Rt ? -1 : Math.min(y, y * p, k, k * p),
                    A = C ? -1 : Math.min(_, _ * p, w, w * p),
                    D = M ? 1 : Math.max(y, y * p, k, k * p),
                    T = S ? 1 : Math.max(_, _ * p, w, w * p);
                (u = (D - P) / 2),
                (d = (T - A) / 2),
                (h = -(D + P) / 2),
                (c = -(T + A) / 2);
            }
            for (i = 0, a = g.length; i < a; ++i)
                g[i]._options = r._resolveDataElementOptions(g[i], i);
            for (
                o.borderWidth = r.getMaxBorderWidth(),
                e = (s.right - s.left - o.borderWidth) / u,
                n = (s.bottom - s.top - o.borderWidth) / d,
                o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
                o.innerRadius = Math.max(o.outerRadius * p, 0),
                o.radiusLength =
                (o.outerRadius - o.innerRadius) /
                (r._getVisibleDatasetWeightTotal() || 1),
                o.offsetX = h * o.outerRadius,
                o.offsetY = c * o.outerRadius,
                f.total = r.calculateTotal(),
                r.outerRadius =
                o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index),
                r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0),
                i = 0,
                a = g.length; i < a;
                ++i
            )
                r.updateElement(g[i], i, t);
        },
        updateElement: function(t, e, n) {
            var i = this,
                a = i.chart,
                r = a.chartArea,
                o = a.options,
                s = o.animation,
                l = (r.left + r.right) / 2,
                u = (r.top + r.bottom) / 2,
                d = o.rotation,
                h = o.rotation,
                c = i.getDataset(),
                f =
                n && s.animateRotate ?
                0 :
                t.hidden ?
                0 :
                i.calculateCircumference(c.data[e]) * (o.circumference / zt),
                g = n && s.animateScale ? 0 : i.innerRadius,
                p = n && s.animateScale ? 0 : i.outerRadius,
                m = t._options || {};
            H.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _model: {
                    backgroundColor: m.backgroundColor,
                    borderColor: m.borderColor,
                    borderWidth: m.borderWidth,
                    borderAlign: m.borderAlign,
                    x: l + a.offsetX,
                    y: u + a.offsetY,
                    startAngle: d,
                    endAngle: h,
                    circumference: f,
                    outerRadius: p,
                    innerRadius: g,
                    label: H.valueAtIndexOrDefault(c.label, e, a.data.labels[e]),
                },
            });
            var v = t._model;
            (n && s.animateRotate) ||
            ((v.startAngle =
                    0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle),
                (v.endAngle = v.startAngle + v.circumference)),
            t.pivot();
        },
        calculateTotal: function() {
            var t,
                e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return (
                H.each(n.data, function(n, a) {
                    (t = e.data[a]), isNaN(t) || n.hidden || (i += Math.abs(t));
                }),
                i
            );
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? zt * (Math.abs(t) / e) : 0;
        },
        getMaxBorderWidth: function(t) {
            var e,
                n,
                i,
                a,
                r,
                o,
                s,
                l,
                u = 0,
                d = this.chart;
            if (!t)
                for (e = 0, n = d.data.datasets.length; e < n; ++e)
                    if (d.isDatasetVisible(e)) {
                        (t = (i = d.getDatasetMeta(e)).data),
                        e !== this.index && (r = i.controller);
                        break;
                    }
            if (!t) return 0;
            for (e = 0, n = t.length; e < n; ++e)
                (a = t[e]),
                r ?
                (r._configure(), (o = r._resolveDataElementOptions(a, e))) :
                (o = a._options),
                "inner" !== o.borderAlign &&
                ((s = o.borderWidth),
                    (u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u));
            return u;
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = H.getHoverColor;
            (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
            }),
            (e.backgroundColor = Lt(n.hoverBackgroundColor, i(n.backgroundColor))),
            (e.borderColor = Lt(n.hoverBorderColor, i(n.borderColor))),
            (e.borderWidth = Lt(n.hoverBorderWidth, n.borderWidth));
        },
        _getRingWeightOffset: function(t) {
            for (var e = 0, n = 0; n < t; ++n)
                this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e;
        },
        _getRingWeight: function(t) {
            return Math.max(Lt(this.chart.data.datasets[t].weight, 1), 0);
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
        },
    });
    N._set("horizontalBar", {
            hover: { mode: "index", axis: "y" },
            scales: {
                xAxes: [{ type: "linear", position: "bottom" }],
                yAxes: [{
                    type: "category",
                    position: "left",
                    offset: !0,
                    gridLines: { offsetGridLines: !0 },
                }, ],
            },
            elements: { rectangle: { borderSkipped: "left" } },
            tooltips: { mode: "index", axis: "y" },
        }),
        N._set("global", {
            datasets: {
                horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
            },
        });
    var Et = Tt.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID;
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID;
            },
        }),
        Wt = H.valueOrDefault,
        Vt = H.options.resolve,
        Ht = H.canvas._isPointInArea;

    function jt(t, e) {
        var n = (t && t.options.ticks) || {},
            i = n.reverse,
            a = void 0 === n.min ? e : 0,
            r = void 0 === n.max ? e : 0;
        return { start: i ? r : a, end: i ? a : r };
    }

    function qt(t, e, n) {
        var i = n / 2,
            a = jt(t, i),
            r = jt(e, i);
        return { top: r.end, right: a.end, bottom: r.start, left: a.start };
    }

    function Ut(t) {
        var e, n, i, a;
        return (
            H.isObject(t) ?
            ((e = t.top), (n = t.right), (i = t.bottom), (a = t.left)) :
            (e = n = i = a = t), { top: e, right: n, bottom: i, left: a }
        );
    }
    N._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: { mode: "label" },
        scales: {
            xAxes: [{ type: "category", id: "x-axis-0" }],
            yAxes: [{ type: "linear", id: "y-axis-0" }],
        },
    });
    var Yt = it.extend({
            datasetElementType: kt.Line,
            dataElementType: kt.Point,
            _datasetElementOptions: [
                "backgroundColor",
                "borderCapStyle",
                "borderColor",
                "borderDash",
                "borderDashOffset",
                "borderJoinStyle",
                "borderWidth",
                "cubicInterpolationMode",
                "fill",
            ],
            _dataElementOptions: {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation",
            },
            update: function(t) {
                var e,
                    n,
                    i = this,
                    a = i.getMeta(),
                    r = a.dataset,
                    o = a.data || [],
                    s = i.chart.options,
                    l = i._config,
                    u = (i._showLine = Wt(l.showLine, s.showLines));
                for (
                    i._xScale = i.getScaleForId(a.xAxisID),
                    i._yScale = i.getScaleForId(a.yAxisID),
                    u &&
                    (void 0 !== l.tension &&
                        void 0 === l.lineTension &&
                        (l.lineTension = l.tension),
                        (r._scale = i._yScale),
                        (r._datasetIndex = i.index),
                        (r._children = o),
                        (r._model = i._resolveDatasetElementOptions(r)),
                        r.pivot()),
                    e = 0,
                    n = o.length; e < n;
                    ++e
                )
                    i.updateElement(o[e], e, t);
                for (
                    u && 0 !== r._model.tension && i.updateBezierControlPoints(),
                    e = 0,
                    n = o.length; e < n;
                    ++e
                )
                    o[e].pivot();
            },
            updateElement: function(t, e, n) {
                var i,
                    a,
                    r = this,
                    o = r.getMeta(),
                    s = t.custom || {},
                    l = r.getDataset(),
                    u = r.index,
                    d = l.data[e],
                    h = r._xScale,
                    c = r._yScale,
                    f = o.dataset._model,
                    g = r._resolveDataElementOptions(t, e);
                (i = h.getPixelForValue("object" == typeof d ? d : NaN, e, u)),
                (a = n ? c.getBasePixel() : r.calculatePointY(d, e, u)),
                (t._xScale = h),
                (t._yScale = c),
                (t._options = g),
                (t._datasetIndex = u),
                (t._index = e),
                (t._model = {
                    x: i,
                    y: a,
                    skip: s.skip || isNaN(i) || isNaN(a),
                    radius: g.radius,
                    pointStyle: g.pointStyle,
                    rotation: g.rotation,
                    backgroundColor: g.backgroundColor,
                    borderColor: g.borderColor,
                    borderWidth: g.borderWidth,
                    tension: Wt(s.tension, f ? f.tension : 0),
                    steppedLine: !!f && f.steppedLine,
                    hitRadius: g.hitRadius,
                });
            },
            _resolveDatasetElementOptions: function(t) {
                var e = this,
                    n = e._config,
                    i = t.custom || {},
                    a = e.chart.options,
                    r = a.elements.line,
                    o = it.prototype._resolveDatasetElementOptions.apply(e, arguments);
                return (
                    (o.spanGaps = Wt(n.spanGaps, a.spanGaps)),
                    (o.tension = Wt(n.lineTension, r.tension)),
                    (o.steppedLine = Vt([i.steppedLine, n.steppedLine, r.stepped])),
                    (o.clip = Ut(Wt(n.clip, qt(e._xScale, e._yScale, o.borderWidth)))),
                    o
                );
            },
            calculatePointY: function(t, e, n) {
                var i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    d = this.chart,
                    h = this._yScale,
                    c = 0,
                    f = 0;
                if (h.options.stacked) {
                    for (
                        s = +h.getRightValue(t),
                        u = (l = d._getSortedVisibleDatasetMetas()).length,
                        i = 0; i < u && (r = l[i]).index !== n;
                        ++i
                    )
                        (a = d.data.datasets[r.index]),
                        "line" === r.type &&
                        r.yAxisID === h.id &&
                        ((o = +h.getRightValue(a.data[e])) < 0 ?
                            (f += o || 0) :
                            (c += o || 0));
                    return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(c + s);
                }
                return h.getPixelForValue(t);
            },
            updateBezierControlPoints: function() {
                var t,
                    e,
                    n,
                    i,
                    a = this.chart,
                    r = this.getMeta(),
                    o = r.dataset._model,
                    s = a.chartArea,
                    l = r.data || [];

                function u(t, e, n) {
                    return Math.max(Math.min(t, n), e);
                }
                if (
                    (o.spanGaps &&
                        (l = l.filter(function(t) {
                            return !t._model.skip;
                        })),
                        "monotone" === o.cubicInterpolationMode)
                )
                    H.splineCurveMonotone(l);
                else
                    for (t = 0, e = l.length; t < e; ++t)
                        (n = l[t]._model),
                        (i = H.splineCurve(
                            H.previousItem(l, t)._model,
                            n,
                            H.nextItem(l, t)._model,
                            o.tension
                        )),
                        (n.controlPointPreviousX = i.previous.x),
                        (n.controlPointPreviousY = i.previous.y),
                        (n.controlPointNextX = i.next.x),
                        (n.controlPointNextY = i.next.y);
                if (a.options.elements.line.capBezierPoints)
                    for (t = 0, e = l.length; t < e; ++t)
                        (n = l[t]._model),
                        Ht(n, s) &&
                        (t > 0 &&
                            Ht(l[t - 1]._model, s) &&
                            ((n.controlPointPreviousX = u(
                                    n.controlPointPreviousX,
                                    s.left,
                                    s.right
                                )),
                                (n.controlPointPreviousY = u(
                                    n.controlPointPreviousY,
                                    s.top,
                                    s.bottom
                                ))),
                            t < l.length - 1 &&
                            Ht(l[t + 1]._model, s) &&
                            ((n.controlPointNextX = u(
                                    n.controlPointNextX,
                                    s.left,
                                    s.right
                                )),
                                (n.controlPointNextY = u(
                                    n.controlPointNextY,
                                    s.top,
                                    s.bottom
                                ))));
            },
            draw: function() {
                var t,
                    e = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    a = e.chartArea,
                    r = e.canvas,
                    o = 0,
                    s = i.length;
                for (
                    this._showLine &&
                    ((t = n.dataset._model.clip),
                        H.canvas.clipArea(e.ctx, {
                            left: !1 === t.left ? 0 : a.left - t.left,
                            right: !1 === t.right ? r.width : a.right + t.right,
                            top: !1 === t.top ? 0 : a.top - t.top,
                            bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom,
                        }),
                        n.dataset.draw(),
                        H.canvas.unclipArea(e.ctx)); o < s;
                    ++o
                )
                    i[o].draw(a);
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options,
                    i = H.getHoverColor;
                (t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius,
                }),
                (e.backgroundColor = Wt(
                    n.hoverBackgroundColor,
                    i(n.backgroundColor)
                )),
                (e.borderColor = Wt(n.hoverBorderColor, i(n.borderColor))),
                (e.borderWidth = Wt(n.hoverBorderWidth, n.borderWidth)),
                (e.radius = Wt(n.hoverRadius, n.radius));
            },
        }),
        Gt = H.options.resolve;
    N._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: { display: !1 },
            gridLines: { circular: !0 },
            pointLabels: { display: !1 },
            ticks: { beginAtZero: !0 },
        },
        animation: { animateRotate: !0, animateScale: !0 },
        startAngle: -0.5 * Math.PI,
        legendCallback: function(t) {
            var e,
                n,
                i,
                a = document.createElement("ul"),
                r = t.data,
                o = r.datasets,
                s = r.labels;
            if ((a.setAttribute("class", t.id + "-legend"), o.length))
                for (e = 0, n = o[0].data.length; e < n; ++e)
                    ((i = a.appendChild(document.createElement("li"))).appendChild(
                        document.createElement("span")
                    ).style.backgroundColor = o[0].backgroundColor[e]),
                    s[e] && i.appendChild(document.createTextNode(s[e]));
            return a.outerHTML;
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ?
                        e.labels.map(function(n, i) {
                            var a = t.getDatasetMeta(0),
                                r = a.controller.getStyle(i);
                            return {
                                text: n,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                                index: i,
                            };
                        }) :
                        [];
                },
            },
            onClick: function(t, e) {
                var n,
                    i,
                    a,
                    r = e.index,
                    o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
                    (a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                o.update();
            },
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel;
                },
            },
        },
    });
    var Xt = it.extend({
        dataElementType: kt.Arc,
        linkScales: H.noop,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
        ],
        _getIndexScaleId: function() {
            return this.chart.scale.id;
        },
        _getValueScaleId: function() {
            return this.chart.scale.id;
        },
        update: function(t) {
            var e,
                n,
                i,
                a = this,
                r = a.getDataset(),
                o = a.getMeta(),
                s = a.chart.options.startAngle || 0,
                l = (a._starts = []),
                u = (a._angles = []),
                d = o.data;
            for (
                a._updateRadius(),
                o.count = a.countVisibleElements(),
                e = 0,
                n = r.data.length; e < n; e++
            )
                (l[e] = s), (i = a._computeAngle(e)), (u[e] = i), (s += i);
            for (e = 0, n = d.length; e < n; ++e)
                (d[e]._options = a._resolveDataElementOptions(d[e], e)),
                a.updateElement(d[e], e, t);
        },
        _updateRadius: function() {
            var t = this,
                e = t.chart,
                n = e.chartArea,
                i = e.options,
                a = Math.min(n.right - n.left, n.bottom - n.top);
            (e.outerRadius = Math.max(a / 2, 0)),
            (e.innerRadius = Math.max(
                i.cutoutPercentage ? (e.outerRadius / 100) * i.cutoutPercentage : 1,
                0
            )),
            (e.radiusLength =
                (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
            (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
            (t.innerRadius = t.outerRadius - e.radiusLength);
        },
        updateElement: function(t, e, n) {
            var i = this,
                a = i.chart,
                r = i.getDataset(),
                o = a.options,
                s = o.animation,
                l = a.scale,
                u = a.data.labels,
                d = l.xCenter,
                h = l.yCenter,
                c = o.startAngle,
                f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                g = i._starts[e],
                p = g + (t.hidden ? 0 : i._angles[e]),
                m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
                v = t._options || {};
            H.extend(t, {
                    _datasetIndex: i.index,
                    _index: e,
                    _scale: l,
                    _model: {
                        backgroundColor: v.backgroundColor,
                        borderColor: v.borderColor,
                        borderWidth: v.borderWidth,
                        borderAlign: v.borderAlign,
                        x: d,
                        y: h,
                        innerRadius: 0,
                        outerRadius: n ? m : f,
                        startAngle: n && s.animateRotate ? c : g,
                        endAngle: n && s.animateRotate ? c : p,
                        label: H.valueAtIndexOrDefault(u, e, u[e]),
                    },
                }),
                t.pivot();
        },
        countVisibleElements: function() {
            var t = this.getDataset(),
                e = this.getMeta(),
                n = 0;
            return (
                H.each(e.data, function(e, i) {
                    isNaN(t.data[i]) || e.hidden || n++;
                }),
                n
            );
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = H.getHoverColor,
                a = H.valueOrDefault;
            (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
            }),
            (e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor))),
            (e.borderColor = a(n.hoverBorderColor, i(n.borderColor))),
            (e.borderWidth = a(n.hoverBorderWidth, n.borderWidth));
        },
        _computeAngle: function(t) {
            var e = this,
                n = this.getMeta().count,
                i = e.getDataset(),
                a = e.getMeta();
            if (isNaN(i.data[t]) || a.data[t].hidden) return 0;
            var r = {
                chart: e.chart,
                dataIndex: t,
                dataset: i,
                datasetIndex: e.index,
            };
            return Gt([e.chart.options.elements.arc.angle, (2 * Math.PI) / n], r, t);
        },
    });
    N._set("pie", H.clone(N.doughnut)), N._set("pie", { cutoutPercentage: 0 });
    var Kt = Bt,
        Zt = H.valueOrDefault;
    N._set("radar", {
        spanGaps: !1,
        scale: { type: "radialLinear" },
        elements: { line: { fill: "start", tension: 0 } },
    });
    var $t = it.extend({
        datasetElementType: kt.Line,
        dataElementType: kt.Point,
        linkScales: H.noop,
        _datasetElementOptions: [
            "backgroundColor",
            "borderWidth",
            "borderColor",
            "borderCapStyle",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "fill",
        ],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation",
        },
        _getIndexScaleId: function() {
            return this.chart.scale.id;
        },
        _getValueScaleId: function() {
            return this.chart.scale.id;
        },
        update: function(t) {
            var e,
                n,
                i = this,
                a = i.getMeta(),
                r = a.dataset,
                o = a.data || [],
                s = i.chart.scale,
                l = i._config;
            for (
                void 0 !== l.tension &&
                void 0 === l.lineTension &&
                (l.lineTension = l.tension),
                r._scale = s,
                r._datasetIndex = i.index,
                r._children = o,
                r._loop = !0,
                r._model = i._resolveDatasetElementOptions(r),
                r.pivot(),
                e = 0,
                n = o.length; e < n;
                ++e
            )
                i.updateElement(o[e], e, t);
            for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
                o[e].pivot();
        },
        updateElement: function(t, e, n) {
            var i = this,
                a = t.custom || {},
                r = i.getDataset(),
                o = i.chart.scale,
                s = o.getPointPositionForValue(e, r.data[e]),
                l = i._resolveDataElementOptions(t, e),
                u = i.getMeta().dataset._model,
                d = n ? o.xCenter : s.x,
                h = n ? o.yCenter : s.y;
            (t._scale = o),
            (t._options = l),
            (t._datasetIndex = i.index),
            (t._index = e),
            (t._model = {
                x: d,
                y: h,
                skip: a.skip || isNaN(d) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: Zt(a.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius,
            });
        },
        _resolveDatasetElementOptions: function() {
            var t = this,
                e = t._config,
                n = t.chart.options,
                i = it.prototype._resolveDatasetElementOptions.apply(t, arguments);
            return (
                (i.spanGaps = Zt(e.spanGaps, n.spanGaps)),
                (i.tension = Zt(e.lineTension, n.elements.line.tension)),
                i
            );
        },
        updateBezierControlPoints: function() {
            var t,
                e,
                n,
                i,
                a = this.getMeta(),
                r = this.chart.chartArea,
                o = a.data || [];

            function s(t, e, n) {
                return Math.max(Math.min(t, n), e);
            }
            for (
                a.dataset._model.spanGaps &&
                (o = o.filter(function(t) {
                    return !t._model.skip;
                })),
                t = 0,
                e = o.length; t < e;
                ++t
            )
                (n = o[t]._model),
                (i = H.splineCurve(
                    H.previousItem(o, t, !0)._model,
                    n,
                    H.nextItem(o, t, !0)._model,
                    n.tension
                )),
                (n.controlPointPreviousX = s(i.previous.x, r.left, r.right)),
                (n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom)),
                (n.controlPointNextX = s(i.next.x, r.left, r.right)),
                (n.controlPointNextY = s(i.next.y, r.top, r.bottom));
        },
        setHoverStyle: function(t) {
            var e = t._model,
                n = t._options,
                i = H.getHoverColor;
            (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius,
            }),
            (e.backgroundColor = Zt(n.hoverBackgroundColor, i(n.backgroundColor))),
            (e.borderColor = Zt(n.hoverBorderColor, i(n.borderColor))),
            (e.borderWidth = Zt(n.hoverBorderWidth, n.borderWidth)),
            (e.radius = Zt(n.hoverRadius, n.radius));
        },
    });
    N._set("scatter", {
            hover: { mode: "single" },
            scales: {
                xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
                yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
            },
            tooltips: {
                callbacks: {
                    title: function() {
                        return "";
                    },
                    label: function(t) {
                        return "(" + t.xLabel + ", " + t.yLabel + ")";
                    },
                },
            },
        }),
        N._set("global", { datasets: { scatter: { showLine: !1 } } });
    var Jt = {
        bar: Tt,
        bubble: Ot,
        doughnut: Bt,
        horizontalBar: Et,
        line: Yt,
        polarArea: Xt,
        pie: Kt,
        radar: $t,
        scatter: Yt,
    };

    function Qt(t, e) {
        return t.native ? { x: t.x, y: t.y } : H.getRelativePosition(t, e);
    }

    function te(t, e) {
        var n,
            i,
            a,
            r,
            o,
            s,
            l = t._getSortedVisibleDatasetMetas();
        for (i = 0, r = l.length; i < r; ++i)
            for (a = 0, o = (n = l[i].data).length; a < o; ++a)
                (s = n[a])._view.skip || e(s);
    }

    function ee(t, e) {
        var n = [];
        return (
            te(t, function(t) {
                t.inRange(e.x, e.y) && n.push(t);
            }),
            n
        );
    }

    function ne(t, e, n, i) {
        var a = Number.POSITIVE_INFINITY,
            r = [];
        return (
            te(t, function(t) {
                if (!n || t.inRange(e.x, e.y)) {
                    var o = t.getCenterPoint(),
                        s = i(e, o);
                    s < a ? ((r = [t]), (a = s)) : s === a && r.push(t);
                }
            }),
            r
        );
    }

    function ie(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function(t, i) {
            var a = e ? Math.abs(t.x - i.x) : 0,
                r = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
        };
    }

    function ae(t, e, n) {
        var i = Qt(e, t);
        n.axis = n.axis || "x";
        var a = ie(n.axis),
            r = n.intersect ? ee(t, i) : ne(t, i, !1, a),
            o = [];
        return r.length ?
            (t._getSortedVisibleDatasetMetas().forEach(function(t) {
                    var e = t.data[r[0]._index];
                    e && !e._view.skip && o.push(e);
                }),
                o) :
            [];
    }
    var re = {
            modes: {
                single: function(t, e) {
                    var n = Qt(e, t),
                        i = [];
                    return (
                        te(t, function(t) {
                            if (t.inRange(n.x, n.y)) return i.push(t), i;
                        }),
                        i.slice(0, 1)
                    );
                },
                label: ae,
                index: ae,
                dataset: function(t, e, n) {
                    var i = Qt(e, t);
                    n.axis = n.axis || "xy";
                    var a = ie(n.axis),
                        r = n.intersect ? ee(t, i) : ne(t, i, !1, a);
                    return (
                        r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r
                    );
                },
                "x-axis": function(t, e) {
                    return ae(t, e, { intersect: !1 });
                },
                point: function(t, e) {
                    return ee(t, Qt(e, t));
                },
                nearest: function(t, e, n) {
                    var i = Qt(e, t);
                    n.axis = n.axis || "xy";
                    var a = ie(n.axis);
                    return ne(t, i, n.intersect, a);
                },
                x: function(t, e, n) {
                    var i = Qt(e, t),
                        a = [],
                        r = !1;
                    return (
                        te(t, function(t) {
                            t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
                        }),
                        n.intersect && !r && (a = []),
                        a
                    );
                },
                y: function(t, e, n) {
                    var i = Qt(e, t),
                        a = [],
                        r = !1;
                    return (
                        te(t, function(t) {
                            t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
                        }),
                        n.intersect && !r && (a = []),
                        a
                    );
                },
            },
        },
        oe = H.extend;

    function se(t, e) {
        return H.where(t, function(t) {
            return t.pos === e;
        });
    }

    function le(t, e) {
        return t.sort(function(t, n) {
            var i = e ? n : t,
                a = e ? t : n;
            return i.weight === a.weight ? i.index - a.index : i.weight - a.weight;
        });
    }

    function ue(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
    }

    function de(t, e, n) {
        var i,
            a,
            r = n.box,
            o = t.maxPadding;
        if (
            (n.size && (t[n.pos] -= n.size),
                (n.size = n.horizontal ? r.height : r.width),
                (t[n.pos] += n.size),
                r.getPadding)
        ) {
            var s = r.getPadding();
            (o.top = Math.max(o.top, s.top)),
            (o.left = Math.max(o.left, s.left)),
            (o.bottom = Math.max(o.bottom, s.bottom)),
            (o.right = Math.max(o.right, s.right));
        }
        if (
            ((i = e.outerWidth - ue(o, t, "left", "right")),
                (a = e.outerHeight - ue(o, t, "top", "bottom")),
                i !== t.w || a !== t.h)
        ) {
            (t.w = i), (t.h = a);
            var l = n.horizontal ? [i, t.w] : [a, t.h];
            return !(l[0] === l[1] || (isNaN(l[0]) && isNaN(l[1])));
        }
    }

    function he(t, e) {
        var n = e.maxPadding;

        function i(t) {
            var i = { left: 0, top: 0, right: 0, bottom: 0 };
            return (
                t.forEach(function(t) {
                    i[t] = Math.max(e[t], n[t]);
                }),
                i
            );
        }
        return i(t ? ["left", "right"] : ["top", "bottom"]);
    }

    function ce(t, e, n) {
        var i,
            a,
            r,
            o,
            s,
            l,
            u = [];
        for (i = 0, a = t.length; i < a; ++i)
            (o = (r = t[i]).box).update(
                r.width || e.w,
                r.height || e.h,
                he(r.horizontal, e)
            ),
            de(e, n, r) && ((l = !0), u.length && (s = !0)),
            o.fullWidth || u.push(r);
        return (s && ce(u, e, n)) || l;
    }

    function fe(t, e, n) {
        var i,
            a,
            r,
            o,
            s = n.padding,
            l = e.x,
            u = e.y;
        for (i = 0, a = t.length; i < a; ++i)
            (o = (r = t[i]).box),
            r.horizontal ?
            ((o.left = o.fullWidth ? s.left : e.left),
                (o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w),
                (o.top = u),
                (o.bottom = u + o.height),
                (o.width = o.right - o.left),
                (u = o.bottom)) :
            ((o.left = l),
                (o.right = l + o.width),
                (o.top = e.top),
                (o.bottom = e.top + e.h),
                (o.height = o.bottom - o.top),
                (l = o.right));
        (e.x = l), (e.y = u);
    }
    N._set("global", {
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
    });
    var ge,
        pe = {
            defaults: {},
            addBox: function(t, e) {
                t.boxes || (t.boxes = []),
                    (e.fullWidth = e.fullWidth || !1),
                    (e.position = e.position || "top"),
                    (e.weight = e.weight || 0),
                    (e._layers =
                        e._layers ||
                        function() {
                            return [{
                                z: 0,
                                draw: function() {
                                    e.draw.apply(e, arguments);
                                },
                            }, ];
                        }),
                    t.boxes.push(e);
            },
            removeBox: function(t, e) {
                var n = t.boxes ? t.boxes.indexOf(e) : -1; -
                1 !== n && t.boxes.splice(n, 1);
            },
            configure: function(t, e, n) {
                for (
                    var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; o < r;
                    ++o
                )
                    (i = a[o]), n.hasOwnProperty(i) && (e[i] = n[i]);
            },
            update: function(t, e, n) {
                if (t) {
                    var i = t.options.layout || {},
                        a = H.options.toPadding(i.padding),
                        r = e - a.width,
                        o = n - a.height,
                        s = (function(t) {
                            var e = (function(t) {
                                    var e,
                                        n,
                                        i,
                                        a = [];
                                    for (e = 0, n = (t || []).length; e < n; ++e)
                                        (i = t[e]),
                                        a.push({
                                            index: e,
                                            box: i,
                                            pos: i.position,
                                            horizontal: i.isHorizontal(),
                                            weight: i.weight,
                                        });
                                    return a;
                                })(t),
                                n = le(se(e, "left"), !0),
                                i = le(se(e, "right")),
                                a = le(se(e, "top"), !0),
                                r = le(se(e, "bottom"));
                            return {
                                leftAndTop: n.concat(a),
                                rightAndBottom: i.concat(r),
                                chartArea: se(e, "chartArea"),
                                vertical: n.concat(i),
                                horizontal: a.concat(r),
                            };
                        })(t.boxes),
                        l = s.vertical,
                        u = s.horizontal,
                        d = Object.freeze({
                            outerWidth: e,
                            outerHeight: n,
                            padding: a,
                            availableWidth: r,
                            vBoxMaxWidth: r / 2 / l.length,
                            hBoxMaxHeight: o / 2,
                        }),
                        h = oe({ maxPadding: oe({}, a), w: r, h: o, x: a.left, y: a.top },
                            a
                        );
                    !(function(t, e) {
                        var n, i, a;
                        for (n = 0, i = t.length; n < i; ++n)
                            ((a = t[n]).width = a.horizontal ?
                                a.box.fullWidth && e.availableWidth :
                                e.vBoxMaxWidth),
                            (a.height = a.horizontal && e.hBoxMaxHeight);
                    })(l.concat(u), d),
                    ce(l, h, d),
                        ce(u, h, d) && ce(l, h, d),
                        (function(t) {
                            var e = t.maxPadding;

                            function n(n) {
                                var i = Math.max(e[n] - t[n], 0);
                                return (t[n] += i), i;
                            }
                            (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
                        })(h),
                        fe(s.leftAndTop, h, d),
                        (h.x += h.w),
                        (h.y += h.h),
                        fe(s.rightAndBottom, h, d),
                        (t.chartArea = {
                            left: h.left,
                            top: h.top,
                            right: h.left + h.w,
                            bottom: h.top + h.h,
                        }),
                        H.each(s.chartArea, function(e) {
                            var n = e.box;
                            oe(n, t.chartArea), n.update(h.w, h.h);
                        });
                }
            },
        },
        me =
        ((ge = Object.freeze({
                __proto__: null,
                default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}",
            })) &&
            ge.default) ||
        ge,
        ve = "$chartjs",
        be = "chartjs-size-monitor",
        xe = "chartjs-render-monitor",
        ye = "chartjs-render-animation",
        _e = ["animationstart", "webkitAnimationStart"],
        ke = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
        };

    function we(t, e) {
        var n = H.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0;
    }
    var Me = !!(function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0;
                },
            });
            window.addEventListener("e", null, e);
        } catch (t) {}
        return t;
    })() && { passive: !0 };

    function Se(t, e, n) {
        t.addEventListener(e, n, Me);
    }

    function Ce(t, e, n) {
        t.removeEventListener(e, n, Me);
    }

    function Pe(t, e, n, i, a) {
        return {
            type: t,
            chart: e,
            native: a || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null,
        };
    }

    function Ae(t) {
        var e = document.createElement("div");
        return (e.className = t || ""), e;
    }

    function De(t, e, n) {
        var i,
            a,
            r,
            o,
            s = t[ve] || (t[ve] = {}),
            l = (s.resizer = (function(t) {
                var e = Ae(be),
                    n = Ae(be + "-expand"),
                    i = Ae(be + "-shrink");
                n.appendChild(Ae()),
                    i.appendChild(Ae()),
                    e.appendChild(n),
                    e.appendChild(i),
                    (e._reset = function() {
                        (n.scrollLeft = 1e6),
                        (n.scrollTop = 1e6),
                        (i.scrollLeft = 1e6),
                        (i.scrollTop = 1e6);
                    });
                var a = function() {
                    e._reset(), t();
                };
                return (
                    Se(n, "scroll", a.bind(n, "expand")),
                    Se(i, "scroll", a.bind(i, "shrink")),
                    e
                );
            })(
                ((i = function() {
                        if (s.resizer) {
                            var i = n.options.maintainAspectRatio && t.parentNode,
                                a = i ? i.clientWidth : 0;
                            e(Pe("resize", n)),
                                i && i.clientWidth < a && n.canvas && e(Pe("resize", n));
                        }
                    }),
                    (r = !1),
                    (o = []),
                    function() {
                        (o = Array.prototype.slice.call(arguments)),
                        (a = a || this),
                        r ||
                            ((r = !0),
                                H.requestAnimFrame.call(window, function() {
                                    (r = !1), i.apply(a, o);
                                }));
                    })
            ));
        !(function(t, e) {
            var n = t[ve] || (t[ve] = {}),
                i = (n.renderProxy = function(t) {
                    t.animationName === ye && e();
                });
            H.each(_e, function(e) {
                    Se(t, e, i);
                }),
                (n.reflow = !!t.offsetParent),
                t.classList.add(xe);
        })(t, function() {
            if (s.resizer) {
                var e = t.parentNode;
                e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
            }
        });
    }

    function Te(t) {
        var e = t[ve] || {},
            n = e.resizer;
        delete e.resizer,
            (function(t) {
                var e = t[ve] || {},
                    n = e.renderProxy;
                n &&
                    (H.each(_e, function(e) {
                            Ce(t, e, n);
                        }),
                        delete e.renderProxy),
                    t.classList.remove(xe);
            })(t),
            n && n.parentNode && n.parentNode.removeChild(n);
    }
    var Ie = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function(t) {
            if (!this.disableCSSInjection) {
                var e = t.getRootNode ? t.getRootNode() : document;
                !(function(t, e) {
                    var n = t[ve] || (t[ve] = {});
                    if (!n.containsStyles) {
                        (n.containsStyles = !0), (e = "/* Chart.js */\n" + e);
                        var i = document.createElement("style");
                        i.setAttribute("type", "text/css"),
                            i.appendChild(document.createTextNode(e)),
                            t.appendChild(i);
                    }
                })(e.host ? e : document.head, me);
            }
        },
        acquireContext: function(t, e) {
            "string" == typeof t
                ?
                (t = document.getElementById(t)) :
                t.length && (t = t[0]),
                t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ?
                (this._ensureLoaded(t),
                    (function(t, e) {
                        var n = t.style,
                            i = t.getAttribute("height"),
                            a = t.getAttribute("width");
                        if (
                            ((t[ve] = {
                                    initial: {
                                        height: i,
                                        width: a,
                                        style: {
                                            display: n.display,
                                            height: n.height,
                                            width: n.width,
                                        },
                                    },
                                }),
                                (n.display = n.display || "block"),
                                null === a || "" === a)
                        ) {
                            var r = we(t, "width");
                            void 0 !== r && (t.width = r);
                        }
                        if (null === i || "" === i)
                            if ("" === t.style.height)
                                t.height = t.width / (e.options.aspectRatio || 2);
                            else {
                                var o = we(t, "height");
                                void 0 !== r && (t.height = o);
                            }
                    })(t, e),
                    n) :
                null;
        },
        releaseContext: function(t) {
            var e = t.canvas;
            if (e[ve]) {
                var n = e[ve].initial;
                ["height", "width"].forEach(function(t) {
                        var i = n[t];
                        H.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
                    }),
                    H.each(n.style || {}, function(t, n) {
                        e.style[n] = t;
                    }),
                    (e.width = e.width),
                    delete e[ve];
            }
        },
        addEventListener: function(t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var a = n[ve] || (n[ve] = {});
                Se(
                    i,
                    e,
                    ((a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                        n(
                            (function(t, e) {
                                var n = ke[t.type] || t.type,
                                    i = H.getRelativePosition(t, e);
                                return Pe(n, e, i.x, i.y, t);
                            })(e, t)
                        );
                    })
                );
            } else De(i, n, t);
        },
        removeEventListener: function(t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var a = ((n[ve] || {}).proxies || {})[t.id + "_" + e];
                a && Ce(i, e, a);
            } else Te(i);
        },
    };
    (H.addEvent = Se), (H.removeEvent = Ce);
    var Fe = Ie._enabled ?
        Ie :
        {
            acquireContext: function(t) {
                return (
                    t && t.canvas && (t = t.canvas), (t && t.getContext("2d")) || null
                );
            },
        },
        Oe = H.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {},
            },
            Fe
        );
    N._set("global", { plugins: {} });
    var Le = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                        -1 === e.indexOf(t) && e.push(t);
                    }),
                    this._cacheId++;
            },
            unregister: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(t) {
                        var n = e.indexOf(t); -
                        1 !== n && e.splice(n, 1);
                    }),
                    this._cacheId++;
            },
            clear: function() {
                (this._plugins = []), this._cacheId++;
            },
            count: function() {
                return this._plugins.length;
            },
            getAll: function() {
                return this._plugins;
            },
            notify: function(t, e, n) {
                var i,
                    a,
                    r,
                    o,
                    s,
                    l = this.descriptors(t),
                    u = l.length;
                for (i = 0; i < u; ++i)
                    if (
                        "function" == typeof(s = (r = (a = l[i]).plugin)[e]) &&
                        ((o = [t].concat(n || [])).push(a.options), !1 === s.apply(r, o))
                    )
                        return !1;
                return !0;
            },
            descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var n = [],
                    i = [],
                    a = (t && t.config) || {},
                    r = (a.options && a.options.plugins) || {};
                return (
                    this._plugins.concat(a.plugins || []).forEach(function(t) {
                        if (-1 === n.indexOf(t)) {
                            var e = t.id,
                                a = r[e];
                            !1 !== a &&
                                (!0 === a && (a = H.clone(N.global.plugins[e])),
                                    n.push(t),
                                    i.push({ plugin: t, options: a || {} }));
                        }
                    }),
                    (e.descriptors = i),
                    (e.id = this._cacheId),
                    i
                );
            },
            _invalidate: function(t) {
                delete t.$plugins;
            },
        },
        Re = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, n) {
                (this.constructors[t] = e), (this.defaults[t] = H.clone(n));
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ?
                    this.constructors[t] :
                    void 0;
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ?
                    H.merge(Object.create(null), [N.scale, this.defaults[t]]) :
                    {};
            },
            updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) &&
                    (this.defaults[t] = H.extend(this.defaults[t], e));
            },
            addScalesToLayout: function(t) {
                H.each(t.scales, function(e) {
                    (e.fullWidth = e.options.fullWidth),
                    (e.position = e.options.position),
                    (e.weight = e.options.weight),
                    pe.addBox(t, e);
                });
            },
        },
        ze = H.valueOrDefault,
        Ne = H.rtl.getRtlAdapter;
    N._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: H.noop,
                title: function(t, e) {
                    var n = "",
                        i = e.labels,
                        a = i ? i.length : 0;
                    if (t.length > 0) {
                        var r = t[0];
                        r.label ?
                            (n = r.label) :
                            r.xLabel ?
                            (n = r.xLabel) :
                            a > 0 && r.index < a && (n = i[r.index]);
                    }
                    return n;
                },
                afterTitle: H.noop,
                beforeBody: H.noop,
                beforeLabel: H.noop,
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "";
                    return (
                        n && (n += ": "),
                        H.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
                        n
                    );
                },
                labelColor: function(t, e) {
                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: n.borderColor,
                        backgroundColor: n.backgroundColor,
                    };
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor;
                },
                afterLabel: H.noop,
                afterBody: H.noop,
                beforeFooter: H.noop,
                footer: H.noop,
                afterFooter: H.noop,
            },
        },
    });
    var Be = {
        average: function(t) {
            if (!t.length) return !1;
            var e,
                n,
                i = 0,
                a = 0,
                r = 0;
            for (e = 0, n = t.length; e < n; ++e) {
                var o = t[e];
                if (o && o.hasValue()) {
                    var s = o.tooltipPosition();
                    (i += s.x), (a += s.y), ++r;
                }
            }
            return { x: i / r, y: a / r };
        },
        nearest: function(t, e) {
            var n,
                i,
                a,
                r = e.x,
                o = e.y,
                s = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
                var l = t[n];
                if (l && l.hasValue()) {
                    var u = l.getCenterPoint(),
                        d = H.distanceBetweenPoints(e, u);
                    d < s && ((s = d), (a = l));
                }
            }
            if (a) {
                var h = a.tooltipPosition();
                (r = h.x), (o = h.y);
            }
            return { x: r, y: o };
        },
    };

    function Ee(t, e) {
        return (
            e && (H.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        );
    }

    function We(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ?
            t.split("\n") :
            t;
    }

    function Ve(t) {
        var e = N.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: ze(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: ze(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: ze(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: ze(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: ze(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: ze(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: ze(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: ze(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: ze(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
        };
    }

    function He(t, e) {
        return "center" === e ?
            t.x + t.width / 2 :
            "right" === e ?
            t.x + t.width - t.xPadding :
            t.x + t.xPadding;
    }

    function je(t) {
        return Ee([], We(t));
    }
    var qe = K.extend({
            initialize: function() {
                (this._model = Ve(this._options)), (this._lastActive = []);
            },
            getTitle: function() {
                var t = this,
                    e = t._options,
                    n = e.callbacks,
                    i = n.beforeTitle.apply(t, arguments),
                    a = n.title.apply(t, arguments),
                    r = n.afterTitle.apply(t, arguments),
                    o = [];
                return (o = Ee(o, We(i))), (o = Ee(o, We(a))), (o = Ee(o, We(r)));
            },
            getBeforeBody: function() {
                return je(this._options.callbacks.beforeBody.apply(this, arguments));
            },
            getBody: function(t, e) {
                var n = this,
                    i = n._options.callbacks,
                    a = [];
                return (
                    H.each(t, function(t) {
                        var r = { before: [], lines: [], after: [] };
                        Ee(r.before, We(i.beforeLabel.call(n, t, e))),
                            Ee(r.lines, i.label.call(n, t, e)),
                            Ee(r.after, We(i.afterLabel.call(n, t, e))),
                            a.push(r);
                    }),
                    a
                );
            },
            getAfterBody: function() {
                return je(this._options.callbacks.afterBody.apply(this, arguments));
            },
            getFooter: function() {
                var t = this,
                    e = t._options.callbacks,
                    n = e.beforeFooter.apply(t, arguments),
                    i = e.footer.apply(t, arguments),
                    a = e.afterFooter.apply(t, arguments),
                    r = [];
                return (r = Ee(r, We(n))), (r = Ee(r, We(i))), (r = Ee(r, We(a)));
            },
            update: function(t) {
                var e,
                    n,
                    i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    d,
                    h = this,
                    c = h._options,
                    f = h._model,
                    g = (h._model = Ve(c)),
                    p = h._active,
                    m = h._data,
                    v = { xAlign: f.xAlign, yAlign: f.yAlign },
                    b = { x: f.x, y: f.y },
                    x = { width: f.width, height: f.height },
                    y = { x: f.caretX, y: f.caretY };
                if (p.length) {
                    g.opacity = 1;
                    var _ = [],
                        k = [];
                    y = Be[c.position].call(h, p, h._eventPosition);
                    var w = [];
                    for (e = 0, n = p.length; e < n; ++e)
                        w.push(
                            ((i = p[e]),
                                (a = void 0),
                                (r = void 0),
                                (o = void 0),
                                (s = void 0),
                                (l = void 0),
                                (u = void 0),
                                (d = void 0),
                                (a = i._xScale),
                                (r = i._yScale || i._scale),
                                (o = i._index),
                                (s = i._datasetIndex),
                                (l = i._chart.getDatasetMeta(s).controller),
                                (u = l._getIndexScale()),
                                (d = l._getValueScale()), {
                                    xLabel: a ? a.getLabelForIndex(o, s) : "",
                                    yLabel: r ? r.getLabelForIndex(o, s) : "",
                                    label: u ? "" + u.getLabelForIndex(o, s) : "",
                                    value: d ? "" + d.getLabelForIndex(o, s) : "",
                                    index: o,
                                    datasetIndex: s,
                                    x: i._model.x,
                                    y: i._model.y,
                                })
                        );
                    c.filter &&
                        (w = w.filter(function(t) {
                            return c.filter(t, m);
                        })),
                        c.itemSort &&
                        (w = w.sort(function(t, e) {
                            return c.itemSort(t, e, m);
                        })),
                        H.each(w, function(t) {
                            _.push(c.callbacks.labelColor.call(h, t, h._chart)),
                                k.push(c.callbacks.labelTextColor.call(h, t, h._chart));
                        }),
                        (g.title = h.getTitle(w, m)),
                        (g.beforeBody = h.getBeforeBody(w, m)),
                        (g.body = h.getBody(w, m)),
                        (g.afterBody = h.getAfterBody(w, m)),
                        (g.footer = h.getFooter(w, m)),
                        (g.x = y.x),
                        (g.y = y.y),
                        (g.caretPadding = c.caretPadding),
                        (g.labelColors = _),
                        (g.labelTextColors = k),
                        (g.dataPoints = w),
                        (x = (function(t, e) {
                            var n = t._chart.ctx,
                                i = 2 * e.yPadding,
                                a = 0,
                                r = e.body,
                                o = r.reduce(function(t, e) {
                                    return t + e.before.length + e.lines.length + e.after.length;
                                }, 0);
                            o += e.beforeBody.length + e.afterBody.length;
                            var s = e.title.length,
                                l = e.footer.length,
                                u = e.titleFontSize,
                                d = e.bodyFontSize,
                                h = e.footerFontSize;
                            (i += s * u),
                            (i += s ? (s - 1) * e.titleSpacing : 0),
                            (i += s ? e.titleMarginBottom : 0),
                            (i += o * d),
                            (i += o ? (o - 1) * e.bodySpacing : 0),
                            (i += l ? e.footerMarginTop : 0),
                            (i += l * h),
                            (i += l ? (l - 1) * e.footerSpacing : 0);
                            var c = 0,
                                f = function(t) {
                                    a = Math.max(a, n.measureText(t).width + c);
                                };
                            return (
                                (n.font = H.fontString(
                                    u,
                                    e._titleFontStyle,
                                    e._titleFontFamily
                                )),
                                H.each(e.title, f),
                                (n.font = H.fontString(d, e._bodyFontStyle, e._bodyFontFamily)),
                                H.each(e.beforeBody.concat(e.afterBody), f),
                                (c = e.displayColors ? d + 2 : 0),
                                H.each(r, function(t) {
                                    H.each(t.before, f), H.each(t.lines, f), H.each(t.after, f);
                                }),
                                (c = 0),
                                (n.font = H.fontString(
                                    h,
                                    e._footerFontStyle,
                                    e._footerFontFamily
                                )),
                                H.each(e.footer, f), { width: (a += 2 * e.xPadding), height: i }
                            );
                        })(this, g)),
                        (b = (function(t, e, n, i) {
                            var a = t.x,
                                r = t.y,
                                o = t.caretSize,
                                s = t.caretPadding,
                                l = t.cornerRadius,
                                u = n.xAlign,
                                d = n.yAlign,
                                h = o + s,
                                c = l + s;
                            return (
                                "right" === u ?
                                (a -= e.width) :
                                "center" === u &&
                                ((a -= e.width / 2) + e.width > i.width &&
                                    (a = i.width - e.width),
                                    a < 0 && (a = 0)),
                                "top" === d ?
                                (r += h) :
                                (r -= "bottom" === d ? e.height + h : e.height / 2),
                                "center" === d ?
                                "left" === u ?
                                (a += h) :
                                "right" === u && (a -= h) :
                                "left" === u ?
                                (a -= c) :
                                "right" === u && (a += c), { x: a, y: r }
                            );
                        })(
                            g,
                            x,
                            (v = (function(t, e) {
                                var n,
                                    i,
                                    a,
                                    r,
                                    o,
                                    s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    d = "center",
                                    h = "center";
                                s.y < e.height ?
                                    (h = "top") :
                                    s.y > l.height - e.height && (h = "bottom");
                                var c = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2;
                                "center" === h
                                    ?
                                    ((n = function(t) {
                                            return t <= c;
                                        }),
                                        (i = function(t) {
                                            return t > c;
                                        })) :
                                    ((n = function(t) {
                                            return t <= e.width / 2;
                                        }),
                                        (i = function(t) {
                                            return t >= l.width - e.width / 2;
                                        })),
                                    (a = function(t) {
                                        return t + e.width + s.caretSize + s.caretPadding > l.width;
                                    }),
                                    (r = function(t) {
                                        return t - e.width - s.caretSize - s.caretPadding < 0;
                                    }),
                                    (o = function(t) {
                                        return t <= f ? "top" : "bottom";
                                    }),
                                    n(s.x) ?
                                    ((d = "left"), a(s.x) && ((d = "center"), (h = o(s.y)))) :
                                    i(s.x) &&
                                    ((d = "right"), r(s.x) && ((d = "center"), (h = o(s.y))));
                                var g = t._options;
                                return {
                                    xAlign: g.xAlign ? g.xAlign : d,
                                    yAlign: g.yAlign ? g.yAlign : h,
                                };
                            })(this, x)),
                            h._chart
                        ));
                } else g.opacity = 0;
                return (
                    (g.xAlign = v.xAlign),
                    (g.yAlign = v.yAlign),
                    (g.x = b.x),
                    (g.y = b.y),
                    (g.width = x.width),
                    (g.height = x.height),
                    (g.caretX = y.x),
                    (g.caretY = y.y),
                    (h._model = g),
                    t && c.custom && c.custom.call(h, g),
                    h
                );
            },
            drawCaret: function(t, e) {
                var n = this._chart.ctx,
                    i = this._view,
                    a = this.getCaretPosition(t, e, i);
                n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
            },
            getCaretPosition: function(t, e, n) {
                var i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u = n.caretSize,
                    d = n.cornerRadius,
                    h = n.xAlign,
                    c = n.yAlign,
                    f = t.x,
                    g = t.y,
                    p = e.width,
                    m = e.height;
                if ("center" === c)
                    (s = g + m / 2),
                    "left" === h ?
                    ((a = (i = f) - u), (r = i), (o = s + u), (l = s - u)) :
                    ((a = (i = f + p) + u), (r = i), (o = s - u), (l = s + u));
                else if (
                    ("left" === h ?
                        ((i = (a = f + d + u) - u), (r = a + u)) :
                        "right" === h ?
                        ((i = (a = f + p - d - u) - u), (r = a + u)) :
                        ((i = (a = n.caretX) - u), (r = a + u)),
                        "top" === c)
                )
                    (s = (o = g) - u), (l = o);
                else {
                    (s = (o = g + m) + u), (l = o);
                    var v = r;
                    (r = i), (i = v);
                }
                return { x1: i, x2: a, x3: r, y1: o, y2: s, y3: l };
            },
            drawTitle: function(t, e, n) {
                var i,
                    a,
                    r,
                    o = e.title,
                    s = o.length;
                if (s) {
                    var l = Ne(e.rtl, e.x, e.width);
                    for (
                        t.x = He(e, e._titleAlign),
                        n.textAlign = l.textAlign(e._titleAlign),
                        n.textBaseline = "middle",
                        i = e.titleFontSize,
                        a = e.titleSpacing,
                        n.fillStyle = e.titleFontColor,
                        n.font = H.fontString(i, e._titleFontStyle, e._titleFontFamily),
                        r = 0; r < s;
                        ++r
                    )
                        n.fillText(o[r], l.x(t.x), t.y + i / 2),
                        (t.y += i + a),
                        r + 1 === s && (t.y += e.titleMarginBottom - a);
                }
            },
            drawBody: function(t, e, n) {
                var i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    d,
                    h = e.bodyFontSize,
                    c = e.bodySpacing,
                    f = e._bodyAlign,
                    g = e.body,
                    p = e.displayColors,
                    m = 0,
                    v = p ? He(e, "left") : 0,
                    b = Ne(e.rtl, e.x, e.width),
                    x = function(e) {
                        n.fillText(e, b.x(t.x + m), t.y + h / 2), (t.y += h + c);
                    },
                    y = b.textAlign(f);
                for (
                    n.textAlign = f,
                    n.textBaseline = "middle",
                    n.font = H.fontString(h, e._bodyFontStyle, e._bodyFontFamily),
                    t.x = He(e, y),
                    n.fillStyle = e.bodyFontColor,
                    H.each(e.beforeBody, x),
                    m = p && "right" !== y ? ("center" === f ? h / 2 + 1 : h + 2) : 0,
                    s = 0,
                    u = g.length; s < u;
                    ++s
                ) {
                    for (
                        i = g[s],
                        a = e.labelTextColors[s],
                        r = e.labelColors[s],
                        n.fillStyle = a,
                        H.each(i.before, x),
                        l = 0,
                        d = (o = i.lines).length; l < d;
                        ++l
                    ) {
                        if (p) {
                            var _ = b.x(v);
                            (n.fillStyle = e.legendColorBackground),
                            n.fillRect(b.leftForLtr(_, h), t.y, h, h),
                                (n.lineWidth = 1),
                                (n.strokeStyle = r.borderColor),
                                n.strokeRect(b.leftForLtr(_, h), t.y, h, h),
                                (n.fillStyle = r.backgroundColor),
                                n.fillRect(
                                    b.leftForLtr(b.xPlus(_, 1), h - 2),
                                    t.y + 1,
                                    h - 2,
                                    h - 2
                                ),
                                (n.fillStyle = a);
                        }
                        x(o[l]);
                    }
                    H.each(i.after, x);
                }
                (m = 0), H.each(e.afterBody, x), (t.y -= c);
            },
            drawFooter: function(t, e, n) {
                var i,
                    a,
                    r = e.footer,
                    o = r.length;
                if (o) {
                    var s = Ne(e.rtl, e.x, e.width);
                    for (
                        t.x = He(e, e._footerAlign),
                        t.y += e.footerMarginTop,
                        n.textAlign = s.textAlign(e._footerAlign),
                        n.textBaseline = "middle",
                        i = e.footerFontSize,
                        n.fillStyle = e.footerFontColor,
                        n.font = H.fontString(i, e._footerFontStyle, e._footerFontFamily),
                        a = 0; a < o;
                        ++a
                    )
                        n.fillText(r[a], s.x(t.x), t.y + i / 2),
                        (t.y += i + e.footerSpacing);
                }
            },
            drawBackground: function(t, e, n, i) {
                (n.fillStyle = e.backgroundColor),
                (n.strokeStyle = e.borderColor),
                (n.lineWidth = e.borderWidth);
                var a = e.xAlign,
                    r = e.yAlign,
                    o = t.x,
                    s = t.y,
                    l = i.width,
                    u = i.height,
                    d = e.cornerRadius;
                n.beginPath(),
                    n.moveTo(o + d, s),
                    "top" === r && this.drawCaret(t, i),
                    n.lineTo(o + l - d, s),
                    n.quadraticCurveTo(o + l, s, o + l, s + d),
                    "center" === r && "right" === a && this.drawCaret(t, i),
                    n.lineTo(o + l, s + u - d),
                    n.quadraticCurveTo(o + l, s + u, o + l - d, s + u),
                    "bottom" === r && this.drawCaret(t, i),
                    n.lineTo(o + d, s + u),
                    n.quadraticCurveTo(o, s + u, o, s + u - d),
                    "center" === r && "left" === a && this.drawCaret(t, i),
                    n.lineTo(o, s + d),
                    n.quadraticCurveTo(o, s, o + d, s),
                    n.closePath(),
                    n.fill(),
                    e.borderWidth > 0 && n.stroke();
            },
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view;
                if (0 !== e.opacity) {
                    var n = { width: e.width, height: e.height },
                        i = { x: e.x, y: e.y },
                        a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                        r =
                        e.title.length ||
                        e.beforeBody.length ||
                        e.body.length ||
                        e.afterBody.length ||
                        e.footer.length;
                    this._options.enabled &&
                        r &&
                        (t.save(),
                            (t.globalAlpha = a),
                            this.drawBackground(i, e, t, n),
                            (i.y += e.yPadding),
                            H.rtl.overrideTextDirection(t, e.textDirection),
                            this.drawTitle(i, e, t),
                            this.drawBody(i, e, t),
                            this.drawFooter(i, e, t),
                            H.rtl.restoreTextDirection(t, e.textDirection),
                            t.restore());
                }
            },
            handleEvent: function(t) {
                var e,
                    n = this,
                    i = n._options;
                return (
                    (n._lastActive = n._lastActive || []),
                    "mouseout" === t.type ?
                    (n._active = []) :
                    ((n._active = n._chart.getElementsAtEventForMode(t, i.mode, i)),
                        i.reverse && n._active.reverse()),
                    (e = !H.arrayEquals(n._active, n._lastActive)) &&
                    ((n._lastActive = n._active),
                        (i.enabled || i.custom) &&
                        ((n._eventPosition = { x: t.x, y: t.y }),
                            n.update(!0),
                            n.pivot())),
                    e
                );
            },
        }),
        Ue = Be,
        Ye = qe;
    Ye.positioners = Ue;
    var Ge = H.valueOrDefault;

    function Xe() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                if ("xAxes" === t || "yAxes" === t) {
                    var a,
                        r,
                        o,
                        s = n[t].length;
                    for (e[t] || (e[t] = []), a = 0; a < s; ++a)
                        (o = n[t][a]),
                        (r = Ge(o.type, "xAxes" === t ? "category" : "linear")),
                        a >= e[t].length && e[t].push({}), !e[t][a].type || (o.type && o.type !== e[t][a].type) ?
                        H.merge(e[t][a], [Re.getScaleDefaults(r), o]) :
                        H.merge(e[t][a], o);
                } else H._merger(t, e, n, i);
            },
        });
    }

    function Ke() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                var a = e[t] || Object.create(null),
                    r = n[t];
                "scales" === t
                    ?
                    (e[t] = Xe(a, r)) :
                    "scale" === t ?
                    (e[t] = H.merge(a, [Re.getScaleDefaults(r.type), r])) :
                    H._merger(t, e, n, i);
            },
        });
    }

    function Ze(t) {
        var e = t.options;
        H.each(t.scales, function(e) {
                pe.removeBox(t, e);
            }),
            (e = Ke(N.global, N[t.config.type], e)),
            (t.options = t.config.options = e),
            t.ensureScalesHaveIDs(),
            t.buildOrUpdateScales(),
            (t.tooltip._options = e.tooltips),
            t.tooltip.initialize();
    }

    function $e(t, e, n) {
        var i,
            a = function(t) {
                return t.id === i;
            };
        do {
            i = e + n++;
        } while (H.findIndex(t, a) >= 0);
        return i;
    }

    function Je(t) {
        return "top" === t || "bottom" === t;
    }

    function Qe(t, e) {
        return function(n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
        };
    }
    N._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400,
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0,
    });
    var tn = function(t, e) {
        return this.construct(t, e), this;
    };
    H.extend(tn.prototype, {
            construct: function(t, e) {
                var n = this;
                e = (function(t) {
                    var e = ((t = t || Object.create(null)).data = t.data || {});
                    return (
                        (e.datasets = e.datasets || []),
                        (e.labels = e.labels || []),
                        (t.options = Ke(N.global, N[t.type], t.options || {})),
                        t
                    );
                })(e);
                var i = Oe.acquireContext(t, e),
                    a = i && i.canvas,
                    r = a && a.height,
                    o = a && a.width;
                (n.id = H.uid()),
                (n.ctx = i),
                (n.canvas = a),
                (n.config = e),
                (n.width = o),
                (n.height = r),
                (n.aspectRatio = r ? o / r : null),
                (n.options = e.options),
                (n._bufferedRender = !1),
                (n._layers = []),
                (n.chart = n),
                (n.controller = n),
                (tn.instances[n.id] = n),
                Object.defineProperty(n, "data", {
                        get: function() {
                            return n.config.data;
                        },
                        set: function(t) {
                            n.config.data = t;
                        },
                    }),
                    i && a ?
                    (n.initialize(), n.update()) :
                    console.error(
                        "Failed to create chart: can't acquire context from the given item"
                    );
            },
            initialize: function() {
                var t = this;
                return (
                    Le.notify(t, "beforeInit"),
                    H.retinaScale(t, t.options.devicePixelRatio),
                    t.bindEvents(),
                    t.options.responsive && t.resize(!0),
                    t.initToolTip(),
                    Le.notify(t, "afterInit"),
                    t
                );
            },
            clear: function() {
                return H.canvas.clear(this), this;
            },
            stop: function() {
                return J.cancelAnimation(this), this;
            },
            resize: function(t) {
                var e = this,
                    n = e.options,
                    i = e.canvas,
                    a = (n.maintainAspectRatio && e.aspectRatio) || null,
                    r = Math.max(0, Math.floor(H.getMaximumWidth(i))),
                    o = Math.max(0, Math.floor(a ? r / a : H.getMaximumHeight(i)));
                if (
                    (e.width !== r || e.height !== o) &&
                    ((i.width = e.width = r),
                        (i.height = e.height = o),
                        (i.style.width = r + "px"),
                        (i.style.height = o + "px"),
                        H.retinaScale(e, n.devicePixelRatio), !t)
                ) {
                    var s = { width: r, height: o };
                    Le.notify(e, "resize", [s]),
                        n.onResize && n.onResize(e, s),
                        e.stop(),
                        e.update({ duration: n.responsiveAnimationDuration });
                }
            },
            ensureScalesHaveIDs: function() {
                var t = this.options,
                    e = t.scales || {},
                    n = t.scale;
                H.each(e.xAxes, function(t, n) {
                        t.id || (t.id = $e(e.xAxes, "x-axis-", n));
                    }),
                    H.each(e.yAxes, function(t, n) {
                        t.id || (t.id = $e(e.yAxes, "y-axis-", n));
                    }),
                    n && (n.id = n.id || "scale");
            },
            buildOrUpdateScales: function() {
                var t = this,
                    e = t.options,
                    n = t.scales || {},
                    i = [],
                    a = Object.keys(n).reduce(function(t, e) {
                        return (t[e] = !1), t;
                    }, {});
                e.scales &&
                    (i = i.concat(
                        (e.scales.xAxes || []).map(function(t) {
                            return { options: t, dtype: "category", dposition: "bottom" };
                        }),
                        (e.scales.yAxes || []).map(function(t) {
                            return { options: t, dtype: "linear", dposition: "left" };
                        })
                    )),
                    e.scale &&
                    i.push({
                        options: e.scale,
                        dtype: "radialLinear",
                        isDefault: !0,
                        dposition: "chartArea",
                    }),
                    H.each(i, function(e) {
                        var i = e.options,
                            r = i.id,
                            o = Ge(i.type, e.dtype);
                        Je(i.position) !== Je(e.dposition) && (i.position = e.dposition),
                            (a[r] = !0);
                        var s = null;
                        if (r in n && n[r].type === o)
                            ((s = n[r]).options = i), (s.ctx = t.ctx), (s.chart = t);
                        else {
                            var l = Re.getScaleConstructor(o);
                            if (!l) return;
                            (s = new l({ id: r, type: o, options: i, ctx: t.ctx, chart: t })),
                            (n[s.id] = s);
                        }
                        s.mergeTicksOptions(), e.isDefault && (t.scale = s);
                    }),
                    H.each(a, function(t, e) {
                        t || delete n[e];
                    }),
                    (t.scales = n),
                    Re.addScalesToLayout(this);
            },
            buildOrUpdateControllers: function() {
                var t,
                    e,
                    n = this,
                    i = [],
                    a = n.data.datasets;
                for (t = 0, e = a.length; t < e; t++) {
                    var r = a[t],
                        o = n.getDatasetMeta(t),
                        s = r.type || n.config.type;
                    if (
                        (o.type &&
                            o.type !== s &&
                            (n.destroyDatasetMeta(t), (o = n.getDatasetMeta(t))),
                            (o.type = s),
                            (o.order = r.order || 0),
                            (o.index = t),
                            o.controller)
                    )
                        o.controller.updateIndex(t), o.controller.linkScales();
                    else {
                        var l = Jt[o.type];
                        if (void 0 === l)
                            throw new Error('"' + o.type + '" is not a chart type.');
                        (o.controller = new l(n, t)), i.push(o.controller);
                    }
                }
                return i;
            },
            resetElements: function() {
                var t = this;
                H.each(
                    t.data.datasets,
                    function(e, n) {
                        t.getDatasetMeta(n).controller.reset();
                    },
                    t
                );
            },
            reset: function() {
                this.resetElements(), this.tooltip.initialize();
            },
            update: function(t) {
                var e,
                    n,
                    i = this;
                if (
                    ((t && "object" == typeof t) ||
                        (t = { duration: t, lazy: arguments[1] }),
                        Ze(i),
                        Le._invalidate(i), !1 !== Le.notify(i, "beforeUpdate"))
                ) {
                    i.tooltip._data = i.data;
                    var a = i.buildOrUpdateControllers();
                    for (e = 0, n = i.data.datasets.length; e < n; e++)
                        i.getDatasetMeta(e).controller.buildOrUpdateElements();
                    i.updateLayout(),
                        i.options.animation &&
                        i.options.animation.duration &&
                        H.each(a, function(t) {
                            t.reset();
                        }),
                        i.updateDatasets(),
                        i.tooltip.initialize(),
                        (i.lastActive = []),
                        Le.notify(i, "afterUpdate"),
                        i._layers.sort(Qe("z", "_idx")),
                        i._bufferedRender ?
                        (i._bufferedRequest = {
                            duration: t.duration,
                            easing: t.easing,
                            lazy: t.lazy,
                        }) :
                        i.render(t);
                }
            },
            updateLayout: function() {
                var t = this;
                !1 !== Le.notify(t, "beforeLayout") &&
                    (pe.update(this, this.width, this.height),
                        (t._layers = []),
                        H.each(
                            t.boxes,
                            function(e) {
                                e._configure && e._configure(),
                                    t._layers.push.apply(t._layers, e._layers());
                            },
                            t
                        ),
                        t._layers.forEach(function(t, e) {
                            t._idx = e;
                        }),
                        Le.notify(t, "afterScaleUpdate"),
                        Le.notify(t, "afterLayout"));
            },
            updateDatasets: function() {
                if (!1 !== Le.notify(this, "beforeDatasetsUpdate")) {
                    for (var t = 0, e = this.data.datasets.length; t < e; ++t)
                        this.updateDataset(t);
                    Le.notify(this, "afterDatasetsUpdate");
                }
            },
            updateDataset: function(t) {
                var e = this.getDatasetMeta(t),
                    n = { meta: e, index: t };
                !1 !== Le.notify(this, "beforeDatasetUpdate", [n]) &&
                    (e.controller._update(), Le.notify(this, "afterDatasetUpdate", [n]));
            },
            render: function(t) {
                var e = this;
                (t && "object" == typeof t) || (t = { duration: t, lazy: arguments[1] });
                var n = e.options.animation,
                    i = Ge(t.duration, n && n.duration),
                    a = t.lazy;
                if (!1 !== Le.notify(e, "beforeRender")) {
                    var r = function(t) {
                        Le.notify(e, "afterRender"), H.callback(n && n.onComplete, [t], e);
                    };
                    if (n && i) {
                        var o = new $({
                            numSteps: i / 16.66,
                            easing: t.easing || n.easing,
                            render: function(t, e) {
                                var n = H.easing.effects[e.easing],
                                    i = e.currentStep,
                                    a = i / e.numSteps;
                                t.draw(n(a), a, i);
                            },
                            onAnimationProgress: n.onProgress,
                            onAnimationComplete: r,
                        });
                        J.addAnimation(e, o, i, a);
                    } else e.draw(), r(new $({ numSteps: 0, chart: e }));
                    return e;
                }
            },
            draw: function(t) {
                var e,
                    n,
                    i = this;
                if (
                    (i.clear(),
                        H.isNullOrUndef(t) && (t = 1),
                        i.transition(t), !(i.width <= 0 || i.height <= 0) &&
                        !1 !== Le.notify(i, "beforeDraw", [t]))
                ) {
                    for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
                        n[e].draw(i.chartArea);
                    for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
                    i._drawTooltip(t), Le.notify(i, "afterDraw", [t]);
                }
            },
            transition: function(t) {
                for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
                    this.isDatasetVisible(e) &&
                    this.getDatasetMeta(e).controller.transition(t);
                this.tooltip.transition(t);
            },
            _getSortedDatasetMetas: function(t) {
                var e,
                    n,
                    i = [];
                for (e = 0, n = (this.data.datasets || []).length; e < n; ++e)
                    (t && !this.isDatasetVisible(e)) || i.push(this.getDatasetMeta(e));
                return i.sort(Qe("order", "index")), i;
            },
            _getSortedVisibleDatasetMetas: function() {
                return this._getSortedDatasetMetas(!0);
            },
            drawDatasets: function(t) {
                var e, n;
                if (!1 !== Le.notify(this, "beforeDatasetsDraw", [t])) {
                    for (
                        n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0;
                        --n
                    )
                        this.drawDataset(e[n], t);
                    Le.notify(this, "afterDatasetsDraw", [t]);
                }
            },
            drawDataset: function(t, e) {
                var n = { meta: t, index: t.index, easingValue: e };
                !1 !== Le.notify(this, "beforeDatasetDraw", [n]) &&
                    (t.controller.draw(e), Le.notify(this, "afterDatasetDraw", [n]));
            },
            _drawTooltip: function(t) {
                var e = this.tooltip,
                    n = { tooltip: e, easingValue: t };
                !1 !== Le.notify(this, "beforeTooltipDraw", [n]) &&
                    (e.draw(), Le.notify(this, "afterTooltipDraw", [n]));
            },
            getElementAtEvent: function(t) {
                return re.modes.single(this, t);
            },
            getElementsAtEvent: function(t) {
                return re.modes.label(this, t, { intersect: !0 });
            },
            getElementsAtXAxis: function(t) {
                return re.modes["x-axis"](this, t, { intersect: !0 });
            },
            getElementsAtEventForMode: function(t, e, n) {
                var i = re.modes[e];
                return "function" == typeof i ? i(this, t, n) : [];
            },
            getDatasetAtEvent: function(t) {
                return re.modes.dataset(this, t, { intersect: !0 });
            },
            getDatasetMeta: function(t) {
                var e = this.data.datasets[t];
                e._meta || (e._meta = {});
                var n = e._meta[this.id];
                return (
                    n ||
                    (n = e._meta[this.id] = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: e.order || 0,
                        index: t,
                    }),
                    n
                );
            },
            getVisibleDatasetCount: function() {
                for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
                    this.isDatasetVisible(e) && t++;
                return t;
            },
            isDatasetVisible: function(t) {
                var e = this.getDatasetMeta(t);
                return "boolean" == typeof e.hidden ?
                    !e.hidden :
                    !this.data.datasets[t].hidden;
            },
            generateLegend: function() {
                return this.options.legendCallback(this);
            },
            destroyDatasetMeta: function(t) {
                var e = this.id,
                    n = this.data.datasets[t],
                    i = n._meta && n._meta[e];
                i && (i.controller.destroy(), delete n._meta[e]);
            },
            destroy: function() {
                var t,
                    e,
                    n = this,
                    i = n.canvas;
                for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
                    n.destroyDatasetMeta(t);
                i &&
                    (n.unbindEvents(),
                        H.canvas.clear(n),
                        Oe.releaseContext(n.ctx),
                        (n.canvas = null),
                        (n.ctx = null)),
                    Le.notify(n, "destroy"),
                    delete tn.instances[n.id];
            },
            toBase64Image: function() {
                return this.canvas.toDataURL.apply(this.canvas, arguments);
            },
            initToolTip: function() {
                var t = this;
                t.tooltip = new Ye({
                        _chart: t,
                        _chartInstance: t,
                        _data: t.data,
                        _options: t.options.tooltips,
                    },
                    t
                );
            },
            bindEvents: function() {
                var t = this,
                    e = (t._listeners = {}),
                    n = function() {
                        t.eventHandler.apply(t, arguments);
                    };
                H.each(t.options.events, function(i) {
                        Oe.addEventListener(t, i, n), (e[i] = n);
                    }),
                    t.options.responsive &&
                    ((n = function() {
                            t.resize();
                        }),
                        Oe.addEventListener(t, "resize", n),
                        (e.resize = n));
            },
            unbindEvents: function() {
                var t = this,
                    e = t._listeners;
                e &&
                    (delete t._listeners,
                        H.each(e, function(e, n) {
                            Oe.removeEventListener(t, n, e);
                        }));
            },
            updateHoverStyle: function(t, e, n) {
                var i,
                    a,
                    r,
                    o = n ? "set" : "remove";
                for (a = 0, r = t.length; a < r; ++a)
                    (i = t[a]) &&
                    this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i);
                "dataset" === e &&
                    this.getDatasetMeta(t[0]._datasetIndex).controller[
                        "_" + o + "DatasetHoverStyle"
                    ]();
            },
            eventHandler: function(t) {
                var e = this,
                    n = e.tooltip;
                if (!1 !== Le.notify(e, "beforeEvent", [t])) {
                    (e._bufferedRender = !0), (e._bufferedRequest = null);
                    var i = e.handleEvent(t);
                    n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)),
                        Le.notify(e, "afterEvent", [t]);
                    var a = e._bufferedRequest;
                    return (
                        a ?
                        e.render(a) :
                        i &&
                        !e.animating &&
                        (e.stop(),
                            e.render({
                                duration: e.options.hover.animationDuration,
                                lazy: !0,
                            })),
                        (e._bufferedRender = !1),
                        (e._bufferedRequest = null),
                        e
                    );
                }
            },
            handleEvent: function(t) {
                var e,
                    n = this,
                    i = n.options || {},
                    a = i.hover;
                return (
                    (n.lastActive = n.lastActive || []),
                    "mouseout" === t.type ?
                    (n.active = []) :
                    (n.active = n.getElementsAtEventForMode(t, a.mode, a)),
                    H.callback(i.onHover || i.hover.onHover, [t.native, n.active], n),
                    ("mouseup" !== t.type && "click" !== t.type) ||
                    (i.onClick && i.onClick.call(n, t.native, n.active)),
                    n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1),
                    n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0),
                    (e = !H.arrayEquals(n.active, n.lastActive)),
                    (n.lastActive = n.active),
                    e
                );
            },
        }),
        (tn.instances = {});
    var en = tn;
    (tn.Controller = tn),
    (tn.types = {}),
    (H.configMerge = Ke),
    (H.scaleMerge = Xe);

    function nn() {
        throw new Error(
            "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
        );
    }

    function an(t) {
        this.options = t || {};
    }
    H.extend(an.prototype, {
            formats: nn,
            parse: nn,
            format: nn,
            add: nn,
            diff: nn,
            startOf: nn,
            endOf: nn,
            _create: function(t) {
                return t;
            },
        }),
        (an.override = function(t) {
            H.extend(an.prototype, t);
        });
    var rn = { _date: an },
        on = {
            formatters: {
                values: function(t) {
                    return H.isArray(t) ? t : "" + t;
                },
                linear: function(t, e, n) {
                    var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                    Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                    var a = H.log10(Math.abs(i)),
                        r = "";
                    if (0 !== t)
                        if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                            var o = H.log10(Math.abs(t)),
                                s = Math.floor(o) - Math.floor(a);
                            (s = Math.max(Math.min(s, 20), 0)), (r = t.toExponential(s));
                        } else {
                            var l = -1 * Math.floor(a);
                            (l = Math.max(Math.min(l, 20), 0)), (r = t.toFixed(l));
                        }
                    else r = "0";
                    return r;
                },
                logarithmic: function(t, e, n) {
                    var i = t / Math.pow(10, Math.floor(H.log10(t)));
                    return 0 === t ?
                        "0" :
                        1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ?
                        t.toExponential() :
                        "";
                },
            },
        },
        sn = H.isArray,
        ln = H.isNullOrUndef,
        un = H.valueOrDefault,
        dn = H.valueAtIndexOrDefault;

    function hn(t, e, n) {
        var i,
            a = t.getTicks().length,
            r = Math.min(e, a - 1),
            o = t.getPixelForTick(r),
            s = t._startPixel,
            l = t._endPixel;
        if (!(
                n &&
                ((i =
                        1 === a ?
                        Math.max(o - s, l - o) :
                        0 === e ?
                        (t.getPixelForTick(1) - o) / 2 :
                        (o - t.getPixelForTick(r - 1)) / 2),
                    (o += r < e ? i : -i) < s - 1e-6 || o > l + 1e-6)
            ))
            return o;
    }

    function cn(t, e, n, i) {
        var a,
            r,
            o,
            s,
            l,
            u,
            d,
            h,
            c,
            f,
            g,
            p,
            m,
            v = n.length,
            b = [],
            x = [],
            y = [],
            _ = 0,
            k = 0;
        for (a = 0; a < v; ++a) {
            if (
                ((s = n[a].label),
                    (l = n[a].major ? e.major : e.minor),
                    (t.font = u = l.string),
                    (d = i[u] = i[u] || { data: {}, gc: [] }),
                    (h = l.lineHeight),
                    (c = f = 0),
                    ln(s) || sn(s))
            ) {
                if (sn(s))
                    for (r = 0, o = s.length; r < o; ++r)
                        (g = s[r]),
                        ln(g) ||
                        sn(g) ||
                        ((c = H.measureText(t, d.data, d.gc, c, g)), (f += h));
            } else(c = H.measureText(t, d.data, d.gc, c, s)), (f = h);
            b.push(c),
                x.push(f),
                y.push(h / 2),
                (_ = Math.max(c, _)),
                (k = Math.max(f, k));
        }

        function w(t) {
            return { width: b[t] || 0, height: x[t] || 0, offset: y[t] || 0 };
        }
        return (
            (function(t, e) {
                H.each(t, function(t) {
                    var n,
                        i = t.gc,
                        a = i.length / 2;
                    if (a > e) {
                        for (n = 0; n < a; ++n) delete t.data[i[n]];
                        i.splice(0, a);
                    }
                });
            })(i, v),
            (p = b.indexOf(_)),
            (m = x.indexOf(k)), { first: w(0), last: w(v - 1), widest: w(p), highest: w(m) }
        );
    }

    function fn(t) {
        return t.drawTicks ? t.tickMarkLength : 0;
    }

    function gn(t) {
        var e, n;
        return t.display ?
            ((e = H.options._parseFont(t)),
                (n = H.options.toPadding(t.padding)),
                e.lineHeight + n.height) :
            0;
    }

    function pn(t, e) {
        return H.extend(
            H.options._parseFont({
                fontFamily: un(e.fontFamily, t.fontFamily),
                fontSize: un(e.fontSize, t.fontSize),
                fontStyle: un(e.fontStyle, t.fontStyle),
                lineHeight: un(e.lineHeight, t.lineHeight),
            }), {
                color: H.options.resolve([
                    e.fontColor,
                    t.fontColor,
                    N.global.defaultFontColor,
                ]),
            }
        );
    }

    function mn(t) {
        var e = pn(t, t.minor);
        return { minor: e, major: t.major.enabled ? pn(t, t.major) : e };
    }

    function vn(t) {
        var e,
            n,
            i,
            a = [];
        for (n = 0, i = t.length; n < i; ++n)
            void 0 !== (e = t[n])._index && a.push(e);
        return a;
    }

    function bn(t, e, n, i) {
        var a,
            r,
            o,
            s,
            l = un(n, 0),
            u = Math.min(un(i, t.length), t.length),
            d = 0;
        for (
            e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l; s < 0;

        )
            d++, (s = Math.round(l + d * e));
        for (r = Math.max(l, 0); r < u; r++)
            (o = t[r]),
            r === s ?
            ((o._index = r), d++, (s = Math.round(l + d * e))) :
            delete o.label;
    }
    N._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0,
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: { top: 4, bottom: 4 },
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: on.formatters.values,
            minor: {},
            major: {},
        },
    });
    var xn = K.extend({
        zeroLineIndex: 0,
        getPadding: function() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0,
            };
        },
        getTicks: function() {
            return this._ticks;
        },
        _getLabels: function() {
            var t = this.chart.data;
            return (
                this.options.labels ||
                (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                t.labels || []
            );
        },
        mergeTicksOptions: function() {},
        beforeUpdate: function() {
            H.callback(this.options.beforeUpdate, [this]);
        },
        update: function(t, e, n) {
            var i,
                a,
                r,
                o,
                s,
                l = this,
                u = l.options.ticks,
                d = u.sampleSize;
            if (
                (l.beforeUpdate(),
                    (l.maxWidth = t),
                    (l.maxHeight = e),
                    (l.margins = H.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
                    (l._ticks = null),
                    (l.ticks = null),
                    (l._labelSizes = null),
                    (l._maxLabelLines = 0),
                    (l.longestLabelWidth = 0),
                    (l.longestTextCache = l.longestTextCache || {}),
                    (l._gridLineItems = null),
                    (l._labelItems = null),
                    l.beforeSetDimensions(),
                    l.setDimensions(),
                    l.afterSetDimensions(),
                    l.beforeDataLimits(),
                    l.determineDataLimits(),
                    l.afterDataLimits(),
                    l.beforeBuildTicks(),
                    (o = l.buildTicks() || []),
                    (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
            )
                for (o = [], i = 0, a = l.ticks.length; i < a; ++i)
                    o.push({ value: l.ticks[i], major: !1 });
            return (
                (l._ticks = o),
                (s = d < o.length),
                (r = l._convertTicksToLabels(
                    s ?
                    (function(t, e) {
                        for (
                            var n = [], i = t.length / e, a = 0, r = t.length; a < r; a += i
                        )
                            n.push(t[Math.floor(a)]);
                        return n;
                    })(o, d) :
                    o
                )),
                l._configure(),
                l.beforeCalculateTickRotation(),
                l.calculateTickRotation(),
                l.afterCalculateTickRotation(),
                l.beforeFit(),
                l.fit(),
                l.afterFit(),
                (l._ticksToDraw =
                    u.display && (u.autoSkip || "auto" === u.source) ?
                    l._autoSkip(o) :
                    o),
                s && (r = l._convertTicksToLabels(l._ticksToDraw)),
                (l.ticks = r),
                l.afterUpdate(),
                l.minSize
            );
        },
        _configure: function() {
            var t,
                e,
                n = this,
                i = n.options.ticks.reverse;
            n.isHorizontal() ?
                ((t = n.left), (e = n.right)) :
                ((t = n.top), (e = n.bottom), (i = !i)),
                (n._startPixel = t),
                (n._endPixel = e),
                (n._reversePixels = i),
                (n._length = e - t);
        },
        afterUpdate: function() {
            H.callback(this.options.afterUpdate, [this]);
        },
        beforeSetDimensions: function() {
            H.callback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ?
                ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width)) :
                ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                (t.paddingLeft = 0),
                (t.paddingTop = 0),
                (t.paddingRight = 0),
                (t.paddingBottom = 0);
        },
        afterSetDimensions: function() {
            H.callback(this.options.afterSetDimensions, [this]);
        },
        beforeDataLimits: function() {
            H.callback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: H.noop,
        afterDataLimits: function() {
            H.callback(this.options.afterDataLimits, [this]);
        },
        beforeBuildTicks: function() {
            H.callback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: H.noop,
        afterBuildTicks: function(t) {
            var e = this;
            return sn(t) && t.length ?
                H.callback(e.options.afterBuildTicks, [e, t]) :
                ((e.ticks =
                        H.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks),
                    t);
        },
        beforeTickToLabelConversion: function() {
            H.callback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this);
        },
        afterTickToLabelConversion: function() {
            H.callback(this.options.afterTickToLabelConversion, [this]);
        },
        beforeCalculateTickRotation: function() {
            H.callback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function() {
            var t,
                e,
                n,
                i,
                a,
                r,
                o,
                s = this,
                l = s.options,
                u = l.ticks,
                d = s.getTicks().length,
                h = u.minRotation || 0,
                c = u.maxRotation,
                f = h;
            !s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal() ?
                (s.labelRotation = h) :
                ((e = (t = s._getLabelSizes()).widest.width),
                    (n = t.highest.height - t.highest.offset),
                    (i = Math.min(s.maxWidth, s.chart.width - e)),
                    e + 6 > (a = l.offset ? s.maxWidth / d : i / (d - 1)) &&
                    ((a = i / (d - (l.offset ? 0.5 : 1))),
                        (r = s.maxHeight - fn(l.gridLines) - u.padding - gn(l.scaleLabel)),
                        (o = Math.sqrt(e * e + n * n)),
                        (f = H.toDegrees(
                            Math.min(
                                Math.asin(Math.min((t.highest.height + 6) / a, 1)),
                                Math.asin(Math.min(r / o, 1)) - Math.asin(n / o)
                            )
                        )),
                        (f = Math.max(h, Math.min(c, f)))),
                    (s.labelRotation = f));
        },
        afterCalculateTickRotation: function() {
            H.callback(this.options.afterCalculateTickRotation, [this]);
        },
        beforeFit: function() {
            H.callback(this.options.beforeFit, [this]);
        },
        fit: function() {
            var t = this,
                e = (t.minSize = { width: 0, height: 0 }),
                n = t.chart,
                i = t.options,
                a = i.ticks,
                r = i.scaleLabel,
                o = i.gridLines,
                s = t._isVisible(),
                l = "bottom" === i.position,
                u = t.isHorizontal();
            if (
                (u ? (e.width = t.maxWidth) : s && (e.width = fn(o) + gn(r)),
                    u ? s && (e.height = fn(o) + gn(r)) : (e.height = t.maxHeight),
                    a.display && s)
            ) {
                var d = mn(a),
                    h = t._getLabelSizes(),
                    c = h.first,
                    f = h.last,
                    g = h.widest,
                    p = h.highest,
                    m = 0.4 * d.minor.lineHeight,
                    v = a.padding;
                if (u) {
                    var b = 0 !== t.labelRotation,
                        x = H.toRadians(t.labelRotation),
                        y = Math.cos(x),
                        _ = Math.sin(x),
                        k = _ * g.width + y * (p.height - (b ? p.offset : 0)) + (b ? 0 : m);
                    e.height = Math.min(t.maxHeight, e.height + k + v);
                    var w,
                        M,
                        S = t.getPixelForTick(0) - t.left,
                        C = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    b
                        ?
                        ((w = l ? y * c.width + _ * c.offset : _ * (c.height - c.offset)),
                            (M = l ? _ * (f.height - f.offset) : y * f.width + _ * f.offset)) :
                        ((w = c.width / 2), (M = f.width / 2)),
                        (t.paddingLeft =
                            Math.max(((w - S) * t.width) / (t.width - S), 0) + 3),
                        (t.paddingRight =
                            Math.max(((M - C) * t.width) / (t.width - C), 0) + 3);
                } else {
                    var P = a.mirror ? 0 : g.width + v + m;
                    (e.width = Math.min(t.maxWidth, e.width + P)),
                    (t.paddingTop = c.height / 2),
                    (t.paddingBottom = f.height / 2);
                }
            }
            t.handleMargins(),
                u ?
                ((t.width = t._length = n.width - t.margins.left - t.margins.right),
                    (t.height = e.height)) :
                ((t.width = e.width),
                    (t.height = t._length =
                        n.height - t.margins.top - t.margins.bottom));
        },
        handleMargins: function() {
            var t = this;
            t.margins &&
                ((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
                    (t.margins.top = Math.max(t.paddingTop, t.margins.top)),
                    (t.margins.right = Math.max(t.paddingRight, t.margins.right)),
                    (t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)));
        },
        afterFit: function() {
            H.callback(this.options.afterFit, [this]);
        },
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
        },
        isFullWidth: function() {
            return this.options.fullWidth;
        },
        getRightValue: function(t) {
            if (ln(t)) return NaN;
            if (("number" == typeof t || t instanceof Number) && !isFinite(t))
                return NaN;
            if (t)
                if (this.isHorizontal()) {
                    if (void 0 !== t.x) return this.getRightValue(t.x);
                } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t;
        },
        _convertTicksToLabels: function(t) {
            var e,
                n,
                i,
                a = this;
            for (
                a.ticks = t.map(function(t) {
                    return t.value;
                }),
                a.beforeTickToLabelConversion(),
                e = a.convertTicksToLabels(t) || a.ticks,
                a.afterTickToLabelConversion(),
                n = 0,
                i = t.length; n < i;
                ++n
            )
                t[n].label = e[n];
            return e;
        },
        _getLabelSizes: function() {
            var t = this,
                e = t._labelSizes;
            return (
                e ||
                ((t._labelSizes = e = cn(
                        t.ctx,
                        mn(t.options.ticks),
                        t.getTicks(),
                        t.longestTextCache
                    )),
                    (t.longestLabelWidth = e.widest.width)),
                e
            );
        },
        _parseValue: function(t) {
            var e, n, i, a;
            return (
                sn(t) ?
                ((e = +this.getRightValue(t[0])),
                    (n = +this.getRightValue(t[1])),
                    (i = Math.min(e, n)),
                    (a = Math.max(e, n))) :
                ((e = void 0), (n = t = +this.getRightValue(t)), (i = t), (a = t)), { min: i, max: a, start: e, end: n }
            );
        },
        _getScaleLabel: function(t) {
            var e = this._parseValue(t);
            return void 0 !== e.start ?
                "[" + e.start + ", " + e.end + "]" :
                +this.getRightValue(t);
        },
        getLabelForIndex: H.noop,
        getPixelForValue: H.noop,
        getValueForPixel: H.noop,
        getPixelForTick: function(t) {
            var e = this.options.offset,
                n = this._ticks.length,
                i = 1 / Math.max(n - (e ? 0 : 1), 1);
            return t < 0 || t > n - 1 ?
                null :
                this.getPixelForDecimal(t * i + (e ? i / 2 : 0));
        },
        getPixelForDecimal: function(t) {
            return (
                this._reversePixels && (t = 1 - t), this._startPixel + t * this._length
            );
        },
        getDecimalForPixel: function(t) {
            var e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
        },
        getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function() {
            var t = this.min,
                e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        },
        _autoSkip: function(t) {
            var e,
                n,
                i,
                a,
                r = this.options.ticks,
                o = this._length,
                s = r.maxTicksLimit || o / this._tickSize() + 1,
                l = r.major.enabled ?
                (function(t) {
                    var e,
                        n,
                        i = [];
                    for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
                    return i;
                })(t) :
                [],
                u = l.length,
                d = l[0],
                h = l[u - 1];
            if (u > s)
                return (
                    (function(t, e, n) {
                        var i,
                            a,
                            r = 0,
                            o = e[0];
                        for (n = Math.ceil(n), i = 0; i < t.length; i++)
                            (a = t[i]),
                            i === o ? ((a._index = i), (o = e[++r * n])) : delete a.label;
                    })(t, l, u / s),
                    vn(t)
                );
            if (
                ((i = (function(t, e, n, i) {
                        var a,
                            r,
                            o,
                            s,
                            l = (function(t) {
                                var e,
                                    n,
                                    i = t.length;
                                if (i < 2) return !1;
                                for (n = t[0], e = 1; e < i; ++e)
                                    if (t[e] - t[e - 1] !== n) return !1;
                                return n;
                            })(t),
                            u = (e.length - 1) / i;
                        if (!l) return Math.max(u, 1);
                        for (o = 0, s = (a = H.math._factorize(l)).length - 1; o < s; o++)
                            if ((r = a[o]) > u) return r;
                        return Math.max(u, 1);
                    })(l, t, 0, s)),
                    u > 0)
            ) {
                for (e = 0, n = u - 1; e < n; e++) bn(t, i, l[e], l[e + 1]);
                return (
                    (a = u > 1 ? (h - d) / (u - 1) : null),
                    bn(t, i, H.isNullOrUndef(a) ? 0 : d - a, d),
                    bn(t, i, h, H.isNullOrUndef(a) ? t.length : h + a),
                    vn(t)
                );
            }
            return bn(t, i), vn(t);
        },
        _tickSize: function() {
            var t = this.options.ticks,
                e = H.toRadians(this.labelRotation),
                n = Math.abs(Math.cos(e)),
                i = Math.abs(Math.sin(e)),
                a = this._getLabelSizes(),
                r = t.autoSkipPadding || 0,
                o = a ? a.widest.width + r : 0,
                s = a ? a.highest.height + r : 0;
            return this.isHorizontal() ?
                s * n > o * i ?
                o / n :
                s / i :
                s * i < o * n ?
                s / n :
                o / i;
        },
        _isVisible: function() {
            var t,
                e,
                n,
                i = this.chart,
                a = this.options.display;
            if ("auto" !== a) return !!a;
            for (t = 0, e = i.data.datasets.length; t < e; ++t)
                if (
                    i.isDatasetVisible(t) &&
                    ((n = i.getDatasetMeta(t)).xAxisID === this.id ||
                        n.yAxisID === this.id)
                )
                    return !0;
            return !1;
        },
        _computeGridLineItems: function(t) {
            var e,
                n,
                i,
                a,
                r,
                o,
                s,
                l,
                u,
                d,
                h,
                c,
                f,
                g,
                p,
                m,
                v,
                b = this,
                x = b.chart,
                y = b.options,
                _ = y.gridLines,
                k = y.position,
                w = _.offsetGridLines,
                M = b.isHorizontal(),
                S = b._ticksToDraw,
                C = S.length + (w ? 1 : 0),
                P = fn(_),
                A = [],
                D = _.drawBorder ? dn(_.lineWidth, 0, 0) : 0,
                T = D / 2,
                I = H._alignPixel,
                F = function(t) {
                    return I(x, t, D);
                };
            for (
                "top" === k ?
                ((e = F(b.bottom)),
                    (s = b.bottom - P),
                    (u = e - T),
                    (h = F(t.top) + T),
                    (f = t.bottom)) :
                "bottom" === k ?
                ((e = F(b.top)),
                    (h = t.top),
                    (f = F(t.bottom) - T),
                    (s = e + T),
                    (u = b.top + P)) :
                "left" === k ?
                ((e = F(b.right)),
                    (o = b.right - P),
                    (l = e - T),
                    (d = F(t.left) + T),
                    (c = t.right)) :
                ((e = F(b.left)),
                    (d = t.left),
                    (c = F(t.right) - T),
                    (o = e + T),
                    (l = b.left + P)),
                n = 0; n < C;
                ++n
            )
                (i = S[n] || {}),
                (ln(i.label) && n < S.length) ||
                (n === b.zeroLineIndex && y.offset === w ?
                    ((g = _.zeroLineWidth),
                        (p = _.zeroLineColor),
                        (m = _.zeroLineBorderDash || []),
                        (v = _.zeroLineBorderDashOffset || 0)) :
                    ((g = dn(_.lineWidth, n, 1)),
                        (p = dn(_.color, n, "rgba(0,0,0,0.1)")),
                        (m = _.borderDash || []),
                        (v = _.borderDashOffset || 0)),
                    void 0 !== (a = hn(b, i._index || n, w)) &&
                    ((r = I(x, a, g)),
                        M ? (o = l = d = c = r) : (s = u = h = f = r),
                        A.push({
                            tx1: o,
                            ty1: s,
                            tx2: l,
                            ty2: u,
                            x1: d,
                            y1: h,
                            x2: c,
                            y2: f,
                            width: g,
                            color: p,
                            borderDash: m,
                            borderDashOffset: v,
                        })));
            return (A.ticksLength = C), (A.borderValue = e), A;
        },
        _computeLabelItems: function() {
            var t,
                e,
                n,
                i,
                a,
                r,
                o,
                s,
                l,
                u,
                d,
                h,
                c = this,
                f = c.options,
                g = f.ticks,
                p = f.position,
                m = g.mirror,
                v = c.isHorizontal(),
                b = c._ticksToDraw,
                x = mn(g),
                y = g.padding,
                _ = fn(f.gridLines),
                k = -H.toRadians(c.labelRotation),
                w = [];
            for (
                "top" === p ?
                ((r = c.bottom - _ - y), (o = k ? "left" : "center")) :
                "bottom" === p ?
                ((r = c.top + _ + y), (o = k ? "right" : "center")) :
                "left" === p ?
                ((a = c.right - (m ? 0 : _) - y), (o = m ? "left" : "right")) :
                ((a = c.left + (m ? 0 : _) + y), (o = m ? "right" : "left")),
                t = 0,
                e = b.length; t < e;
                ++t
            )
                (i = (n = b[t]).label),
                ln(i) ||
                ((s = c.getPixelForTick(n._index || t) + g.labelOffset),
                    (u = (l = n.major ? x.major : x.minor).lineHeight),
                    (d = sn(i) ? i.length : 1),
                    v ?
                    ((a = s),
                        (h = "top" === p ? ((k ? 1 : 0.5) - d) * u : (k ? 0 : 0.5) * u)) :
                    ((r = s), (h = ((1 - d) * u) / 2)),
                    w.push({
                        x: a,
                        y: r,
                        rotation: k,
                        label: i,
                        font: l,
                        textOffset: h,
                        textAlign: o,
                    }));
            return w;
        },
        _drawGrid: function(t) {
            var e = this,
                n = e.options.gridLines;
            if (n.display) {
                var i,
                    a,
                    r,
                    o,
                    s,
                    l = e.ctx,
                    u = e.chart,
                    d = H._alignPixel,
                    h = n.drawBorder ? dn(n.lineWidth, 0, 0) : 0,
                    c =
                    e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                for (r = 0, o = c.length; r < o; ++r)
                    (i = (s = c[r]).width),
                    (a = s.color),
                    i &&
                    a &&
                    (l.save(),
                        (l.lineWidth = i),
                        (l.strokeStyle = a),
                        l.setLineDash &&
                        (l.setLineDash(s.borderDash),
                            (l.lineDashOffset = s.borderDashOffset)),
                        l.beginPath(),
                        n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)),
                        n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)),
                        l.stroke(),
                        l.restore());
                if (h) {
                    var f,
                        g,
                        p,
                        m,
                        v = h,
                        b = dn(n.lineWidth, c.ticksLength - 1, 1),
                        x = c.borderValue;
                    e.isHorizontal() ?
                        ((f = d(u, e.left, v) - v / 2),
                            (g = d(u, e.right, b) + b / 2),
                            (p = m = x)) :
                        ((p = d(u, e.top, v) - v / 2),
                            (m = d(u, e.bottom, b) + b / 2),
                            (f = g = x)),
                        (l.lineWidth = h),
                        (l.strokeStyle = dn(n.color, 0)),
                        l.beginPath(),
                        l.moveTo(f, p),
                        l.lineTo(g, m),
                        l.stroke();
                }
            }
        },
        _drawLabels: function() {
            var t = this;
            if (t.options.ticks.display) {
                var e,
                    n,
                    i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u = t.ctx,
                    d = t._labelItems || (t._labelItems = t._computeLabelItems());
                for (e = 0, i = d.length; e < i; ++e) {
                    if (
                        ((o = (r = d[e]).font),
                            u.save(),
                            u.translate(r.x, r.y),
                            u.rotate(r.rotation),
                            (u.font = o.string),
                            (u.fillStyle = o.color),
                            (u.textBaseline = "middle"),
                            (u.textAlign = r.textAlign),
                            (s = r.label),
                            (l = r.textOffset),
                            sn(s))
                    )
                        for (n = 0, a = s.length; n < a; ++n)
                            u.fillText("" + s[n], 0, l), (l += o.lineHeight);
                    else u.fillText(s, 0, l);
                    u.restore();
                }
            }
        },
        _drawTitle: function() {
            var t = this,
                e = t.ctx,
                n = t.options,
                i = n.scaleLabel;
            if (i.display) {
                var a,
                    r,
                    o = un(i.fontColor, N.global.defaultFontColor),
                    s = H.options._parseFont(i),
                    l = H.options.toPadding(i.padding),
                    u = s.lineHeight / 2,
                    d = n.position,
                    h = 0;
                if (t.isHorizontal())
                    (a = t.left + t.width / 2),
                    (r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top);
                else {
                    var c = "left" === d;
                    (a = c ? t.left + u + l.top : t.right - u - l.top),
                    (r = t.top + t.height / 2),
                    (h = c ? -0.5 * Math.PI : 0.5 * Math.PI);
                }
                e.save(),
                    e.translate(a, r),
                    e.rotate(h),
                    (e.textAlign = "center"),
                    (e.textBaseline = "middle"),
                    (e.fillStyle = o),
                    (e.font = s.string),
                    e.fillText(i.labelString, 0, 0),
                    e.restore();
            }
        },
        draw: function(t) {
            this._isVisible() &&
                (this._drawGrid(t), this._drawTitle(), this._drawLabels());
        },
        _layers: function() {
            var t = this,
                e = t.options,
                n = (e.ticks && e.ticks.z) || 0,
                i = (e.gridLines && e.gridLines.z) || 0;
            return t._isVisible() && n !== i && t.draw === t._draw ?
                [{
                        z: i,
                        draw: function() {
                            t._drawGrid.apply(t, arguments),
                                t._drawTitle.apply(t, arguments);
                        },
                    },
                    {
                        z: n,
                        draw: function() {
                            t._drawLabels.apply(t, arguments);
                        },
                    },
                ] :
                [{
                    z: n,
                    draw: function() {
                        t.draw.apply(t, arguments);
                    },
                }, ];
        },
        _getMatchingVisibleMetas: function(t) {
            var e = this,
                n = e.isHorizontal();
            return e.chart._getSortedVisibleDatasetMetas().filter(function(i) {
                return (
                    (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id)
                );
            });
        },
    });
    xn.prototype._draw = xn.prototype.draw;
    var yn = xn,
        _n = H.isNullOrUndef,
        kn = yn.extend({
            determineDataLimits: function() {
                var t,
                    e = this,
                    n = e._getLabels(),
                    i = e.options.ticks,
                    a = i.min,
                    r = i.max,
                    o = 0,
                    s = n.length - 1;
                void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t),
                    void 0 !== r && (t = n.indexOf(r)) >= 0 && (s = t),
                    (e.minIndex = o),
                    (e.maxIndex = s),
                    (e.min = n[o]),
                    (e.max = n[s]);
            },
            buildTicks: function() {
                var t = this._getLabels(),
                    e = this.minIndex,
                    n = this.maxIndex;
                this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1);
            },
            getLabelForIndex: function(t, e) {
                var n = this.chart;
                return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ?
                    this.getRightValue(n.data.datasets[e].data[t]) :
                    this._getLabels()[t];
            },
            _configure: function() {
                var t = this,
                    e = t.options.offset,
                    n = t.ticks;
                yn.prototype._configure.call(t),
                    t.isHorizontal() || (t._reversePixels = !t._reversePixels),
                    n &&
                    ((t._startValue = t.minIndex - (e ? 0.5 : 0)),
                        (t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)));
            },
            getPixelForValue: function(t, e, n) {
                var i,
                    a,
                    r,
                    o = this;
                return (
                    _n(e) || _n(n) || (t = o.chart.data.datasets[n].data[e]),
                    _n(t) || (i = o.isHorizontal() ? t.x : t.y),
                    (void 0 !== i || (void 0 !== t && isNaN(e))) &&
                    ((a = o._getLabels()),
                        (t = H.valueOrDefault(i, t)),
                        (e = -1 !== (r = a.indexOf(t)) ? r : e),
                        isNaN(e) && (e = t)),
                    o.getPixelForDecimal((e - o._startValue) / o._valueRange)
                );
            },
            getPixelForTick: function(t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1 ?
                    null :
                    this.getPixelForValue(e[t], t + this.minIndex);
            },
            getValueForPixel: function(t) {
                var e = Math.round(
                    this._startValue + this.getDecimalForPixel(t) * this._valueRange
                );
                return Math.min(Math.max(e, 0), this.ticks.length - 1);
            },
            getBasePixel: function() {
                return this.bottom;
            },
        }),
        wn = { position: "bottom" };
    kn._defaults = wn;
    var Mn = H.noop,
        Sn = H.isNullOrUndef;
    var Cn = yn.extend({
            getRightValue: function(t) {
                return "string" == typeof t ?
                    +t :
                    yn.prototype.getRightValue.call(this, t);
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var n = H.sign(t.min),
                        i = H.sign(t.max);
                    n < 0 && i < 0 ? (t.max = 0) : n > 0 && i > 0 && (t.min = 0);
                }
                var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                    r = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ?
                    (t.min = e.min) :
                    void 0 !== e.suggestedMin &&
                    (null === t.min ?
                        (t.min = e.suggestedMin) :
                        (t.min = Math.min(t.min, e.suggestedMin))),
                    void 0 !== e.max ?
                    (t.max = e.max) :
                    void 0 !== e.suggestedMax &&
                    (null === t.max ?
                        (t.max = e.suggestedMax) :
                        (t.max = Math.max(t.max, e.suggestedMax))),
                    a !== r &&
                    t.min >= t.max &&
                    (a ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                    t.min === t.max && (t.max++, e.beginAtZero || t.min--);
            },
            getTickLimit: function() {
                var t,
                    e = this.options.ticks,
                    n = e.stepSize,
                    i = e.maxTicksLimit;
                return (
                    n ?
                    (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1) :
                    ((t = this._computeTickLimit()), (i = i || 11)),
                    i && (t = Math.min(i, t)),
                    t
                );
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY;
            },
            handleDirectionalChanges: Mn,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    n = t.getTickLimit(),
                    i = {
                        maxTicks: (n = Math.max(2, n)),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: H.valueOrDefault(e.fixedStepSize, e.stepSize),
                    },
                    a = (t.ticks = (function(t, e) {
                        var n,
                            i,
                            a,
                            r,
                            o = [],
                            s = t.stepSize,
                            l = s || 1,
                            u = t.maxTicks - 1,
                            d = t.min,
                            h = t.max,
                            c = t.precision,
                            f = e.min,
                            g = e.max,
                            p = H.niceNum((g - f) / u / l) * l;
                        if (p < 1e-14 && Sn(d) && Sn(h)) return [f, g];
                        (r = Math.ceil(g / p) - Math.floor(f / p)) > u &&
                            (p = H.niceNum((r * p) / u / l) * l),
                            s || Sn(c) ?
                            (n = Math.pow(10, H._decimalPlaces(p))) :
                            ((n = Math.pow(10, c)), (p = Math.ceil(p * n) / n)),
                            (i = Math.floor(f / p) * p),
                            (a = Math.ceil(g / p) * p),
                            s &&
                            (!Sn(d) && H.almostWhole(d / p, p / 1e3) && (i = d), !Sn(h) && H.almostWhole(h / p, p / 1e3) && (a = h)),
                            (r = (a - i) / p),
                            (r = H.almostEquals(r, Math.round(r), p / 1e3) ?
                                Math.round(r) :
                                Math.ceil(r)),
                            (i = Math.round(i * n) / n),
                            (a = Math.round(a * n) / n),
                            o.push(Sn(d) ? i : d);
                        for (var m = 1; m < r; ++m) o.push(Math.round((i + m * p) * n) / n);
                        return o.push(Sn(h) ? a : h), o;
                    })(i, t));
                t.handleDirectionalChanges(),
                    (t.max = H.max(a)),
                    (t.min = H.min(a)),
                    e.reverse ?
                    (a.reverse(), (t.start = t.max), (t.end = t.min)) :
                    ((t.start = t.min), (t.end = t.max));
            },
            convertTicksToLabels: function() {
                var t = this;
                (t.ticksAsNumbers = t.ticks.slice()),
                (t.zeroLineIndex = t.ticks.indexOf(0)),
                yn.prototype.convertTicksToLabels.call(t);
            },
            _configure: function() {
                var t,
                    e = this,
                    n = e.getTicks(),
                    i = e.min,
                    a = e.max;
                yn.prototype._configure.call(e),
                    e.options.offset &&
                    n.length &&
                    ((i -= t = (a - i) / Math.max(n.length - 1, 1) / 2), (a += t)),
                    (e._startValue = i),
                    (e._endValue = a),
                    (e._valueRange = a - i);
            },
        }),
        Pn = { position: "left", ticks: { callback: on.formatters.linear } };

    function An(t, e, n, i) {
        var a,
            r,
            o = t.options,
            s = (function(t, e, n) {
                var i = [
                    n.type,
                    void 0 === e && void 0 === n.stack ? n.index : "",
                    n.stack,
                ].join(".");
                return void 0 === t[i] && (t[i] = { pos: [], neg: [] }), t[i];
            })(e, o.stacked, n),
            l = s.pos,
            u = s.neg,
            d = i.length;
        for (a = 0; a < d; ++a)
            (r = t._parseValue(i[a])),
            isNaN(r.min) ||
            isNaN(r.max) ||
            n.data[a].hidden ||
            ((l[a] = l[a] || 0),
                (u[a] = u[a] || 0),
                o.relativePoints ?
                (l[a] = 100) :
                r.min < 0 || r.max < 0 ?
                (u[a] += r.min) :
                (l[a] += r.max));
    }

    function Dn(t, e, n) {
        var i,
            a,
            r = n.length;
        for (i = 0; i < r; ++i)
            (a = t._parseValue(n[i])),
            isNaN(a.min) ||
            isNaN(a.max) ||
            e.data[i].hidden ||
            ((t.min = Math.min(t.min, a.min)), (t.max = Math.max(t.max, a.max)));
    }
    var Tn = Cn.extend({
            determineDataLimits: function() {
                var t,
                    e,
                    n,
                    i,
                    a = this,
                    r = a.options,
                    o = a.chart.data.datasets,
                    s = a._getMatchingVisibleMetas(),
                    l = r.stacked,
                    u = {},
                    d = s.length;
                if (
                    ((a.min = Number.POSITIVE_INFINITY),
                        (a.max = Number.NEGATIVE_INFINITY),
                        void 0 === l)
                )
                    for (t = 0; !l && t < d; ++t) l = void 0 !== (e = s[t]).stack;
                for (t = 0; t < d; ++t)
                    (n = o[(e = s[t]).index].data), l ? An(a, u, e, n) : Dn(a, e, n);
                H.each(u, function(t) {
                        (i = t.pos.concat(t.neg)),
                        (a.min = Math.min(a.min, H.min(i))),
                        (a.max = Math.max(a.max, H.max(i)));
                    }),
                    (a.min = H.isFinite(a.min) && !isNaN(a.min) ? a.min : 0),
                    (a.max = H.isFinite(a.max) && !isNaN(a.max) ? a.max : 1),
                    a.handleTickRangeOptions();
            },
            _computeTickLimit: function() {
                var t;
                return this.isHorizontal() ?
                    Math.ceil(this.width / 40) :
                    ((t = H.options._parseFont(this.options.ticks)),
                        Math.ceil(this.height / t.lineHeight));
            },
            handleDirectionalChanges: function() {
                this.isHorizontal() || this.ticks.reverse();
            },
            getLabelForIndex: function(t, e) {
                return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
            },
            getPixelForValue: function(t) {
                return this.getPixelForDecimal(
                    (+this.getRightValue(t) - this._startValue) / this._valueRange
                );
            },
            getValueForPixel: function(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
            },
            getPixelForTick: function(t) {
                var e = this.ticksAsNumbers;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
            },
        }),
        In = Pn;
    Tn._defaults = In;
    var Fn = H.valueOrDefault,
        On = H.math.log10;
    var Ln = { position: "left", ticks: { callback: on.formatters.logarithmic } };

    function Rn(t, e) {
        return H.isFinite(t) && t >= 0 ? t : e;
    }
    var zn = yn.extend({
            determineDataLimits: function() {
                var t,
                    e,
                    n,
                    i,
                    a,
                    r,
                    o = this,
                    s = o.options,
                    l = o.chart,
                    u = l.data.datasets,
                    d = o.isHorizontal();

                function h(t) {
                    return d ? t.xAxisID === o.id : t.yAxisID === o.id;
                }
                (o.min = Number.POSITIVE_INFINITY),
                (o.max = Number.NEGATIVE_INFINITY),
                (o.minNotZero = Number.POSITIVE_INFINITY);
                var c = s.stacked;
                if (void 0 === c)
                    for (t = 0; t < u.length; t++)
                        if (
                            ((e = l.getDatasetMeta(t)),
                                l.isDatasetVisible(t) && h(e) && void 0 !== e.stack)
                        ) {
                            c = !0;
                            break;
                        }
                if (s.stacked || c) {
                    var f = {};
                    for (t = 0; t < u.length; t++) {
                        var g = [
                            (e = l.getDatasetMeta(t)).type,
                            void 0 === s.stacked && void 0 === e.stack ? t : "",
                            e.stack,
                        ].join(".");
                        if (l.isDatasetVisible(t) && h(e))
                            for (
                                void 0 === f[g] && (f[g] = []),
                                a = 0,
                                r = (i = u[t].data).length; a < r; a++
                            ) {
                                var p = f[g];
                                (n = o._parseValue(i[a])),
                                isNaN(n.min) ||
                                    isNaN(n.max) ||
                                    e.data[a].hidden ||
                                    n.min < 0 ||
                                    n.max < 0 ||
                                    ((p[a] = p[a] || 0), (p[a] += n.max));
                            }
                    }
                    H.each(f, function(t) {
                        if (t.length > 0) {
                            var e = H.min(t),
                                n = H.max(t);
                            (o.min = Math.min(o.min, e)), (o.max = Math.max(o.max, n));
                        }
                    });
                } else
                    for (t = 0; t < u.length; t++)
                        if (((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && h(e)))
                            for (a = 0, r = (i = u[t].data).length; a < r; a++)
                                (n = o._parseValue(i[a])),
                                isNaN(n.min) ||
                                isNaN(n.max) ||
                                e.data[a].hidden ||
                                n.min < 0 ||
                                n.max < 0 ||
                                ((o.min = Math.min(n.min, o.min)),
                                    (o.max = Math.max(n.max, o.max)),
                                    0 !== n.min &&
                                    (o.minNotZero = Math.min(n.min, o.minNotZero)));
                        (o.min = H.isFinite(o.min) ? o.min : null),
                        (o.max = H.isFinite(o.max) ? o.max : null),
                        (o.minNotZero = H.isFinite(o.minNotZero) ? o.minNotZero : null),
                this.handleTickRangeOptions();
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                (t.min = Rn(e.min, t.min)),
                (t.max = Rn(e.max, t.max)),
                t.min === t.max &&
                    (0 !== t.min && null !== t.min ?
                        ((t.min = Math.pow(10, Math.floor(On(t.min)) - 1)),
                            (t.max = Math.pow(10, Math.floor(On(t.max)) + 1))) :
                        ((t.min = 1), (t.max = 10))),
                    null === t.min && (t.min = Math.pow(10, Math.floor(On(t.max)) - 1)),
                    null === t.max &&
                    (t.max =
                        0 !== t.min ? Math.pow(10, Math.floor(On(t.min)) + 1) : 10),
                    null === t.minNotZero &&
                    (t.min > 0 ?
                        (t.minNotZero = t.min) :
                        t.max < 1 ?
                        (t.minNotZero = Math.pow(10, Math.floor(On(t.max)))) :
                        (t.minNotZero = 1));
            },
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    n = !t.isHorizontal(),
                    i = { min: Rn(e.min), max: Rn(e.max) },
                    a = (t.ticks = (function(t, e) {
                        var n,
                            i,
                            a = [],
                            r = Fn(t.min, Math.pow(10, Math.floor(On(e.min)))),
                            o = Math.floor(On(e.max)),
                            s = Math.ceil(e.max / Math.pow(10, o));
                        0 === r ?
                            ((n = Math.floor(On(e.minNotZero))),
                                (i = Math.floor(e.minNotZero / Math.pow(10, n))),
                                a.push(r),
                                (r = i * Math.pow(10, n))) :
                            ((n = Math.floor(On(r))),
                                (i = Math.floor(r / Math.pow(10, n))));
                        var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                        do {
                            a.push(r),
                                10 === ++i && ((i = 1), (l = ++n >= 0 ? 1 : l)),
                                (r = Math.round(i * Math.pow(10, n) * l) / l);
                        } while (n < o || (n === o && i < s));
                        var u = Fn(t.max, r);
                        return a.push(u), a;
                    })(i, t));
                (t.max = H.max(a)),
                (t.min = H.min(a)),
                e.reverse ?
                    ((n = !n), (t.start = t.max), (t.end = t.min)) :
                    ((t.start = t.min), (t.end = t.max)),
                    n && a.reverse();
            },
            convertTicksToLabels: function() {
                (this.tickValues = this.ticks.slice()),
                yn.prototype.convertTicksToLabels.call(this);
            },
            getLabelForIndex: function(t, e) {
                return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
            },
            getPixelForTick: function(t) {
                var e = this.tickValues;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
            },
            _getFirstTickValue: function(t) {
                var e = Math.floor(On(t));
                return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
            },
            _configure: function() {
                var t = this,
                    e = t.min,
                    n = 0;
                yn.prototype._configure.call(t),
                    0 === e &&
                    ((e = t._getFirstTickValue(t.minNotZero)),
                        (n =
                            Fn(t.options.ticks.fontSize, N.global.defaultFontSize) /
                            t._length)),
                    (t._startValue = On(e)),
                    (t._valueOffset = n),
                    (t._valueRange = (On(t.max) - On(e)) / (1 - n));
            },
            getPixelForValue: function(t) {
                var e = this,
                    n = 0;
                return (
                    (t = +e.getRightValue(t)) > e.min &&
                    t > 0 &&
                    (n = (On(t) - e._startValue) / e._valueRange + e._valueOffset),
                    e.getPixelForDecimal(n)
                );
            },
            getValueForPixel: function(t) {
                var e = this,
                    n = e.getDecimalForPixel(t);
                return 0 === n && 0 === e.min ?
                    0 :
                    Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange);
            },
        }),
        Nn = Ln;
    zn._defaults = Nn;
    var Bn = H.valueOrDefault,
        En = H.valueAtIndexOrDefault,
        Wn = H.options.resolve,
        Vn = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0,0,0,0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0,
            },
            gridLines: { circular: !1 },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: on.formatters.linear,
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(t) {
                    return t;
                },
            },
        };

    function Hn(t) {
        var e = t.ticks;
        return e.display && t.display ?
            Bn(e.fontSize, N.global.defaultFontSize) + 2 * e.backdropPaddingY :
            0;
    }

    function jn(t, e, n, i, a) {
        return t === i || t === a ?
            { start: e - n / 2, end: e + n / 2 } :
            t < i || t > a ?
            { start: e - n, end: e } :
            { start: e, end: e + n };
    }

    function qn(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
    }

    function Un(t, e, n, i) {
        var a,
            r,
            o = n.y + i / 2;
        if (H.isArray(e))
            for (a = 0, r = e.length; a < r; ++a) t.fillText(e[a], n.x, o), (o += i);
        else t.fillText(e, n.x, o);
    }

    function Yn(t, e, n) {
        90 === t || 270 === t ?
            (n.y -= e.h / 2) :
            (t > 270 || t < 90) && (n.y -= e.h);
    }

    function Gn(t) {
        return H.isNumber(t) ? t : 0;
    }
    var Xn = Cn.extend({
            setDimensions: function() {
                var t = this;
                (t.width = t.maxWidth),
                (t.height = t.maxHeight),
                (t.paddingTop = Hn(t.options) / 2),
                (t.xCenter = Math.floor(t.width / 2)),
                (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
                (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
            },
            determineDataLimits: function() {
                var t = this,
                    e = t.chart,
                    n = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                H.each(e.data.datasets, function(a, r) {
                        if (e.isDatasetVisible(r)) {
                            var o = e.getDatasetMeta(r);
                            H.each(a.data, function(e, a) {
                                var r = +t.getRightValue(e);
                                isNaN(r) ||
                                    o.data[a].hidden ||
                                    ((n = Math.min(r, n)), (i = Math.max(r, i)));
                            });
                        }
                    }),
                    (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                    (t.max = i === Number.NEGATIVE_INFINITY ? 0 : i),
                    t.handleTickRangeOptions();
            },
            _computeTickLimit: function() {
                return Math.ceil(this.drawingArea / Hn(this.options));
            },
            convertTicksToLabels: function() {
                var t = this;
                Cn.prototype.convertTicksToLabels.call(t),
                    (t.pointLabels = t.chart.data.labels.map(function() {
                        var e = H.callback(t.options.pointLabels.callback, arguments, t);
                        return e || 0 === e ? e : "";
                    }));
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            fit: function() {
                var t = this.options;
                t.display && t.pointLabels.display ?
                    (function(t) {
                        var e,
                            n,
                            i,
                            a = H.options._parseFont(t.options.pointLabels),
                            r = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
                            o = {};
                        (t.ctx.font = a.string), (t._pointLabelSizes = []);
                        var s,
                            l,
                            u,
                            d = t.chart.data.labels.length;
                        for (e = 0; e < d; e++) {
                            (i = t.getPointPosition(e, t.drawingArea + 5)),
                            (s = t.ctx),
                            (l = a.lineHeight),
                            (u = t.pointLabels[e]),
                            (n = H.isArray(u) ?
                                { w: H.longestText(s, s.font, u), h: u.length * l } :
                                { w: s.measureText(u).width, h: l }),
                            (t._pointLabelSizes[e] = n);
                            var h = t.getIndexAngle(e),
                                c = H.toDegrees(h) % 360,
                                f = jn(c, i.x, n.w, 0, 180),
                                g = jn(c, i.y, n.h, 90, 270);
                            f.start < r.l && ((r.l = f.start), (o.l = h)),
                                f.end > r.r && ((r.r = f.end), (o.r = h)),
                                g.start < r.t && ((r.t = g.start), (o.t = h)),
                                g.end > r.b && ((r.b = g.end), (o.b = h));
                        }
                        t.setReductions(t.drawingArea, r, o);
                    })(this) :
                    this.setCenterPoint(0, 0, 0, 0);
            },
            setReductions: function(t, e, n) {
                var i = this,
                    a = e.l / Math.sin(n.l),
                    r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                    o = -e.t / Math.cos(n.t),
                    s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
                (a = Gn(a)),
                (r = Gn(r)),
                (o = Gn(o)),
                (s = Gn(s)),
                (i.drawingArea = Math.min(
                    Math.floor(t - (a + r) / 2),
                    Math.floor(t - (o + s) / 2)
                )),
                i.setCenterPoint(a, r, o, s);
            },
            setCenterPoint: function(t, e, n, i) {
                var a = this,
                    r = a.width - e - a.drawingArea,
                    o = t + a.drawingArea,
                    s = n + a.drawingArea,
                    l = a.height - a.paddingTop - i - a.drawingArea;
                (a.xCenter = Math.floor((o + r) / 2 + a.left)),
                (a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop));
            },
            getIndexAngle: function(t) {
                var e = this.chart,
                    n =
                    (t * (360 / e.data.labels.length) +
                        ((e.options || {}).startAngle || 0)) %
                    360;
                return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360;
            },
            getDistanceFromCenterForValue: function(t) {
                var e = this;
                if (H.isNullOrUndef(t)) return NaN;
                var n = e.drawingArea / (e.max - e.min);
                return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
            },
            getPointPosition: function(t, e) {
                var n = this.getIndexAngle(t) - Math.PI / 2;
                return {
                    x: Math.cos(n) * e + this.xCenter,
                    y: Math.sin(n) * e + this.yCenter,
                };
            },
            getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
            },
            getBasePosition: function(t) {
                var e = this.min,
                    n = this.max;
                return this.getPointPositionForValue(
                    t || 0,
                    this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
                );
            },
            _drawGrid: function() {
                var t,
                    e,
                    n,
                    i = this,
                    a = i.ctx,
                    r = i.options,
                    o = r.gridLines,
                    s = r.angleLines,
                    l = Bn(s.lineWidth, o.lineWidth),
                    u = Bn(s.color, o.color);
                if (
                    (r.pointLabels.display &&
                        (function(t) {
                            var e = t.ctx,
                                n = t.options,
                                i = n.pointLabels,
                                a = Hn(n),
                                r = t.getDistanceFromCenterForValue(
                                    n.ticks.reverse ? t.min : t.max
                                ),
                                o = H.options._parseFont(i);
                            e.save(), (e.font = o.string), (e.textBaseline = "middle");
                            for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                                var l = 0 === s ? a / 2 : 0,
                                    u = t.getPointPosition(s, r + l + 5),
                                    d = En(i.fontColor, s, N.global.defaultFontColor);
                                e.fillStyle = d;
                                var h = t.getIndexAngle(s),
                                    c = H.toDegrees(h);
                                (e.textAlign = qn(c)),
                                Yn(c, t._pointLabelSizes[s], u),
                                    Un(e, t.pointLabels[s], u, o.lineHeight);
                            }
                            e.restore();
                        })(i),
                        o.display &&
                        H.each(i.ticks, function(t, n) {
                            0 !== n &&
                                ((e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n])),
                                    (function(t, e, n, i) {
                                        var a,
                                            r = t.ctx,
                                            o = e.circular,
                                            s = t.chart.data.labels.length,
                                            l = En(e.color, i - 1),
                                            u = En(e.lineWidth, i - 1);
                                        if ((o || s) && l && u) {
                                            if (
                                                (r.save(),
                                                    (r.strokeStyle = l),
                                                    (r.lineWidth = u),
                                                    r.setLineDash &&
                                                    (r.setLineDash(e.borderDash || []),
                                                        (r.lineDashOffset = e.borderDashOffset || 0)),
                                                    r.beginPath(),
                                                    o)
                                            )
                                                r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                                            else {
                                                (a = t.getPointPosition(0, n)), r.moveTo(a.x, a.y);
                                                for (var d = 1; d < s; d++)
                                                    (a = t.getPointPosition(d, n)), r.lineTo(a.x, a.y);
                                            }
                                            r.closePath(), r.stroke(), r.restore();
                                        }
                                    })(i, o, e, n));
                        }),
                        s.display && l && u)
                ) {
                    for (
                        a.save(),
                        a.lineWidth = l,
                        a.strokeStyle = u,
                        a.setLineDash &&
                        (a.setLineDash(Wn([s.borderDash, o.borderDash, []])),
                            (a.lineDashOffset = Wn([
                                s.borderDashOffset,
                                o.borderDashOffset,
                                0,
                            ]))),
                        t = i.chart.data.labels.length - 1; t >= 0; t--
                    )
                        (e = i.getDistanceFromCenterForValue(
                            r.ticks.reverse ? i.min : i.max
                        )),
                        (n = i.getPointPosition(t, e)),
                        a.beginPath(),
                        a.moveTo(i.xCenter, i.yCenter),
                        a.lineTo(n.x, n.y),
                        a.stroke();
                    a.restore();
                }
            },
            _drawLabels: function() {
                var t = this,
                    e = t.ctx,
                    n = t.options.ticks;
                if (n.display) {
                    var i,
                        a,
                        r = t.getIndexAngle(0),
                        o = H.options._parseFont(n),
                        s = Bn(n.fontColor, N.global.defaultFontColor);
                    e.save(),
                        (e.font = o.string),
                        e.translate(t.xCenter, t.yCenter),
                        e.rotate(r),
                        (e.textAlign = "center"),
                        (e.textBaseline = "middle"),
                        H.each(t.ticks, function(r, l) {
                            (0 !== l || n.reverse) &&
                            ((i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l])),
                                n.showLabelBackdrop &&
                                ((a = e.measureText(r).width),
                                    (e.fillStyle = n.backdropColor),
                                    e.fillRect(-a / 2 - n.backdropPaddingX, -i - o.size / 2 - n.backdropPaddingY,
                                        a + 2 * n.backdropPaddingX,
                                        o.size + 2 * n.backdropPaddingY
                                    )),
                                (e.fillStyle = s),
                                e.fillText(r, 0, -i));
                        }),
                        e.restore();
                }
            },
            _drawTitle: H.noop,
        }),
        Kn = Vn;
    Xn._defaults = Kn;
    var Zn = H._deprecated,
        $n = H.options.resolve,
        Jn = H.valueOrDefault,
        Qn = Number.MIN_SAFE_INTEGER || -9007199254740991,
        ti = Number.MAX_SAFE_INTEGER || 9007199254740991,
        ei = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
        },
        ni = Object.keys(ei);

    function ii(t, e) {
        return t - e;
    }

    function ai(t) {
        return H.valueOrDefault(t.time.min, t.ticks.min);
    }

    function ri(t) {
        return H.valueOrDefault(t.time.max, t.ticks.max);
    }

    function oi(t, e, n, i) {
        var a = (function(t, e, n) {
                for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;) {
                    if (((a = t[(i = (o + s) >> 1) - 1] || null), (r = t[i]), !a))
                        return { lo: null, hi: r };
                    if (r[e] < n) o = i + 1;
                    else {
                        if (!(a[e] > n)) return { lo: a, hi: r };
                        s = i - 1;
                    }
                }
                return { lo: r, hi: null };
            })(t, e, n),
            r = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
            o = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
            s = o[e] - r[e],
            l = s ? (n - r[e]) / s : 0,
            u = (o[i] - r[i]) * l;
        return r[i] + u;
    }

    function si(t, e) {
        var n = t._adapter,
            i = t.options.time,
            a = i.parser,
            r = a || i.format,
            o = e;
        return (
            "function" == typeof a && (o = a(o)),
            H.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)),
            null !== o ?
            +o :
            (a ||
                "function" != typeof r ||
                ((o = r(e)), H.isFinite(o) || (o = n.parse(o))),
                o)
        );
    }

    function li(t, e) {
        if (H.isNullOrUndef(e)) return null;
        var n = t.options.time,
            i = si(t, t.getRightValue(e));
        return null === i ?
            i :
            (n.round && (i = +t._adapter.startOf(i, n.round)), i);
    }

    function ui(t, e, n, i) {
        var a,
            r,
            o,
            s = ni.length;
        for (a = ni.indexOf(t); a < s - 1; ++a)
            if (
                ((o = (r = ei[ni[a]]).steps ? r.steps : ti),
                    r.common && Math.ceil((n - e) / (o * r.size)) <= i)
            )
                return ni[a];
        return ni[s - 1];
    }

    function di(t, e, n) {
        var i,
            a,
            r = [],
            o = {},
            s = e.length;
        for (i = 0; i < s; ++i)
            (o[(a = e[i])] = i), r.push({ value: a, major: !1 });
        return 0 !== s && n ?
            (function(t, e, n, i) {
                var a,
                    r,
                    o = t._adapter,
                    s = +o.startOf(e[0].value, i),
                    l = e[e.length - 1].value;
                for (a = s; a <= l; a = +o.add(a, 1, i))
                    (r = n[a]) >= 0 && (e[r].major = !0);
                return e;
            })(t, r, o, n) :
            r;
    }
    var hi = yn.extend({
            initialize: function() {
                this.mergeTicksOptions(), yn.prototype.initialize.call(this);
            },
            update: function() {
                var t = this,
                    e = t.options,
                    n = e.time || (e.time = {}),
                    i = (t._adapter = new rn._date(e.adapters.date));
                return (
                    Zn("time scale", n.format, "time.format", "time.parser"),
                    Zn("time scale", n.min, "time.min", "ticks.min"),
                    Zn("time scale", n.max, "time.max", "ticks.max"),
                    H.mergeIf(n.displayFormats, i.formats()),
                    yn.prototype.update.apply(t, arguments)
                );
            },
            getRightValue: function(t) {
                return (
                    t && void 0 !== t.t && (t = t.t),
                    yn.prototype.getRightValue.call(this, t)
                );
            },
            determineDataLimits: function() {
                var t,
                    e,
                    n,
                    i,
                    a,
                    r,
                    o,
                    s = this,
                    l = s.chart,
                    u = s._adapter,
                    d = s.options,
                    h = d.time.unit || "day",
                    c = ti,
                    f = Qn,
                    g = [],
                    p = [],
                    m = [],
                    v = s._getLabels();
                for (t = 0, n = v.length; t < n; ++t) m.push(li(s, v[t]));
                for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                    if (l.isDatasetVisible(t))
                        if (((a = l.data.datasets[t].data), H.isObject(a[0])))
                            for (p[t] = [], e = 0, i = a.length; e < i; ++e)
                                (r = li(s, a[e])), g.push(r), (p[t][e] = r);
                        else(p[t] = m.slice(0)), o || ((g = g.concat(m)), (o = !0));
                else p[t] = [];
                m.length &&
                    ((c = Math.min(c, m[0])), (f = Math.max(f, m[m.length - 1]))),
                    g.length &&
                    ((g =
                            n > 1 ?
                            (function(t) {
                                var e,
                                    n,
                                    i,
                                    a = {},
                                    r = [];
                                for (e = 0, n = t.length; e < n; ++e)
                                    a[(i = t[e])] || ((a[i] = !0), r.push(i));
                                return r;
                            })(g).sort(ii) :
                            g.sort(ii)),
                        (c = Math.min(c, g[0])),
                        (f = Math.max(f, g[g.length - 1]))),
                    (c = li(s, ai(d)) || c),
                    (f = li(s, ri(d)) || f),
                    (c = c === ti ? +u.startOf(Date.now(), h) : c),
                    (f = f === Qn ? +u.endOf(Date.now(), h) + 1 : f),
                    (s.min = Math.min(c, f)),
                    (s.max = Math.max(c + 1, f)),
                    (s._table = []),
                    (s._timestamps = { data: g, datasets: p, labels: m });
            },
            buildTicks: function() {
                var t,
                    e,
                    n,
                    i = this,
                    a = i.min,
                    r = i.max,
                    o = i.options,
                    s = o.ticks,
                    l = o.time,
                    u = i._timestamps,
                    d = [],
                    h = i.getLabelCapacity(a),
                    c = s.source,
                    f = o.distribution;
                for (
                    u =
                    "data" === c || ("auto" === c && "series" === f) ?
                    u.data :
                    "labels" === c ?
                    u.labels :
                    (function(t, e, n, i) {
                        var a,
                            r = t._adapter,
                            o = t.options,
                            s = o.time,
                            l = s.unit || ui(s.minUnit, e, n, i),
                            u = $n([s.stepSize, s.unitStepSize, 1]),
                            d = "week" === l && s.isoWeekday,
                            h = e,
                            c = [];
                        if (
                            (d && (h = +r.startOf(h, "isoWeek", d)),
                                (h = +r.startOf(h, d ? "day" : l)),
                                r.diff(n, e, l) > 1e5 * u)
                        )
                            throw (
                                e +
                                " and " +
                                n +
                                " are too far apart with stepSize of " +
                                u +
                                " " +
                                l
                            );
                        for (a = h; a < n; a = +r.add(a, u, l)) c.push(a);
                        return (a !== n && "ticks" !== o.bounds) || c.push(a), c;
                    })(i, a, r, h),
                    "ticks" === o.bounds &&
                    u.length &&
                    ((a = u[0]), (r = u[u.length - 1])),
                    a = li(i, ai(o)) || a,
                    r = li(i, ri(o)) || r,
                    t = 0,
                    e = u.length; t < e;
                    ++t
                )
                    (n = u[t]) >= a && n <= r && d.push(n);
                return (
                    (i.min = a),
                    (i.max = r),
                    (i._unit =
                        l.unit ||
                        (s.autoSkip ?
                            ui(l.minUnit, i.min, i.max, h) :
                            (function(t, e, n, i, a) {
                                var r, o;
                                for (r = ni.length - 1; r >= ni.indexOf(n); r--)
                                    if (
                                        ((o = ni[r]),
                                            ei[o].common && t._adapter.diff(a, i, o) >= e - 1)
                                    )
                                        return o;
                                return ni[n ? ni.indexOf(n) : 0];
                            })(i, d.length, l.minUnit, i.min, i.max))),
                    (i._majorUnit =
                        s.major.enabled && "year" !== i._unit ?
                        (function(t) {
                            for (var e = ni.indexOf(t) + 1, n = ni.length; e < n; ++e)
                                if (ei[ni[e]].common) return ni[e];
                        })(i._unit) :
                        void 0),
                    (i._table = (function(t, e, n, i) {
                        if ("linear" === i || !t.length)
                            return [
                                { time: e, pos: 0 },
                                { time: n, pos: 1 },
                            ];
                        var a,
                            r,
                            o,
                            s,
                            l,
                            u = [],
                            d = [e];
                        for (a = 0, r = t.length; a < r; ++a)
                            (s = t[a]) > e && s < n && d.push(s);
                        for (d.push(n), a = 0, r = d.length; a < r; ++a)
                            (l = d[a + 1]),
                            (o = d[a - 1]),
                            (s = d[a]),
                            (void 0 !== o &&
                                void 0 !== l &&
                                Math.round((l + o) / 2) === s) ||
                            u.push({ time: s, pos: a / (r - 1) });
                        return u;
                    })(i._timestamps.data, a, r, f)),
                    (i._offsets = (function(t, e, n, i, a) {
                        var r,
                            o,
                            s = 0,
                            l = 0;
                        return (
                            a.offset &&
                            e.length &&
                            ((r = oi(t, "time", e[0], "pos")),
                                (s =
                                    1 === e.length ?
                                    1 - r :
                                    (oi(t, "time", e[1], "pos") - r) / 2),
                                (o = oi(t, "time", e[e.length - 1], "pos")),
                                (l =
                                    1 === e.length ?
                                    o :
                                    (o - oi(t, "time", e[e.length - 2], "pos")) / 2)), { start: s, end: l, factor: 1 / (s + 1 + l) }
                        );
                    })(i._table, d, 0, 0, o)),
                    s.reverse && d.reverse(),
                    di(i, d, i._majorUnit)
                );
            },
            getLabelForIndex: function(t, e) {
                var n = this,
                    i = n._adapter,
                    a = n.chart.data,
                    r = n.options.time,
                    o = a.labels && t < a.labels.length ? a.labels[t] : "",
                    s = a.datasets[e].data[t];
                return (
                    H.isObject(s) && (o = n.getRightValue(s)),
                    r.tooltipFormat ?
                    i.format(si(n, o), r.tooltipFormat) :
                    "string" == typeof o ?
                    o :
                    i.format(si(n, o), r.displayFormats.datetime)
                );
            },
            tickFormatFunction: function(t, e, n, i) {
                var a = this._adapter,
                    r = this.options,
                    o = r.time.displayFormats,
                    s = o[this._unit],
                    l = this._majorUnit,
                    u = o[l],
                    d = n[e],
                    h = r.ticks,
                    c = l && u && d && d.major,
                    f = a.format(t, i || (c ? u : s)),
                    g = c ? h.major : h.minor,
                    p = $n([g.callback, g.userCallback, h.callback, h.userCallback]);
                return p ? p(f, e, n) : f;
            },
            convertTicksToLabels: function(t) {
                var e,
                    n,
                    i = [];
                for (e = 0, n = t.length; e < n; ++e)
                    i.push(this.tickFormatFunction(t[e].value, e, t));
                return i;
            },
            getPixelForOffset: function(t) {
                var e = this._offsets,
                    n = oi(this._table, "time", t, "pos");
                return this.getPixelForDecimal((e.start + n) * e.factor);
            },
            getPixelForValue: function(t, e, n) {
                var i = null;
                if (
                    (void 0 !== e &&
                        void 0 !== n &&
                        (i = this._timestamps.datasets[n][e]),
                        null === i && (i = li(this, t)),
                        null !== i)
                )
                    return this.getPixelForOffset(i);
            },
            getPixelForTick: function(t) {
                var e = this.getTicks();
                return t >= 0 && t < e.length ?
                    this.getPixelForOffset(e[t].value) :
                    null;
            },
            getValueForPixel: function(t) {
                var e = this._offsets,
                    n = this.getDecimalForPixel(t) / e.factor - e.end,
                    i = oi(this._table, "pos", n, "time");
                return this._adapter._create(i);
            },
            _getLabelSize: function(t) {
                var e = this.options.ticks,
                    n = this.ctx.measureText(t).width,
                    i = H.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation),
                    a = Math.cos(i),
                    r = Math.sin(i),
                    o = Jn(e.fontSize, N.global.defaultFontSize);
                return { w: n * a + o * r, h: n * r + o * a };
            },
            getLabelWidth: function(t) {
                return this._getLabelSize(t).w;
            },
            getLabelCapacity: function(t) {
                var e = this,
                    n = e.options.time,
                    i = n.displayFormats,
                    a = i[n.unit] || i.millisecond,
                    r = e.tickFormatFunction(t, 0, di(e, [t], e._majorUnit), a),
                    o = e._getLabelSize(r),
                    s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
                return e.options.offset && s--, s > 0 ? s : 1;
            },
        }),
        ci = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
                parser: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {},
            },
            ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
        };
    hi._defaults = ci;
    var fi = {
            category: kn,
            linear: Tn,
            logarithmic: zn,
            radialLinear: Xn,
            time: hi,
        },
        gi = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY",
        };
    rn._date.override(
            "function" == typeof t ?
            {
                _id: "moment",
                formats: function() {
                    return gi;
                },
                parse: function(e, n) {
                    return (
                        "string" == typeof e && "string" == typeof n ?
                        (e = t(e, n)) :
                        e instanceof t || (e = t(e)),
                        e.isValid() ? e.valueOf() : null
                    );
                },
                format: function(e, n) {
                    return t(e).format(n);
                },
                add: function(e, n, i) {
                    return t(e).add(n, i).valueOf();
                },
                diff: function(e, n, i) {
                    return t(e).diff(t(n), i);
                },
                startOf: function(e, n, i) {
                    return (
                        (e = t(e)),
                        "isoWeek" === n ?
                        e.isoWeekday(i).valueOf() :
                        e.startOf(n).valueOf()
                    );
                },
                endOf: function(e, n) {
                    return t(e).endOf(n).valueOf();
                },
                _create: function(e) {
                    return t(e);
                },
            } :
            {}
        ),
        N._set("global", { plugins: { filler: { propagate: !0 } } });
    var pi = {
        dataset: function(t) {
            var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                a = (i && n.isDatasetVisible(e) && i.dataset._children) || [],
                r = a.length || 0;
            return r ?

                function(t, e) {
                    return (e < r && a[e]._view) || null;
                } :
                null;
        },
        boundary: function(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return H.isArray(e) ?

                function(t, n) {
                    return e[n];
                } :
                function(t) {
                    return { x: null === n ? t.x : n, y: null === i ? t.y : i };
                };
        },
    };

    function mi(t, e, n) {
        var i,
            a = t._model || {},
            r = a.fill;
        if ((void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r))
            return !1;
        if (!0 === r) return "origin";
        if (((i = parseFloat(r, 10)), isFinite(i) && Math.floor(i) === i))
            return (
                ("-" !== r[0] && "+" !== r[0]) || (i = e + i), !(i === e || i < 0 || i >= n) && i
            );
        switch (r) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1;
        }
    }

    function vi(t) {
        return (t.el._scale || {}).getPointPositionForValue ?
            (function(t) {
                var e,
                    n,
                    i,
                    a,
                    r,
                    o = t.el._scale,
                    s = o.options,
                    l = o.chart.data.labels.length,
                    u = t.fill,
                    d = [];
                if (!l) return null;
                for (
                    e = s.ticks.reverse ? o.max : o.min,
                    n = s.ticks.reverse ? o.min : o.max,
                    i = o.getPointPositionForValue(0, e),
                    a = 0; a < l;
                    ++a
                )
                    (r =
                        "start" === u || "end" === u ?
                        o.getPointPositionForValue(a, "start" === u ? e : n) :
                        o.getBasePosition(a)),
                    s.gridLines.circular &&
                    ((r.cx = i.x),
                        (r.cy = i.y),
                        (r.angle = o.getIndexAngle(a) - Math.PI / 2)),
                    d.push(r);
                return d;
            })(t) :
            (function(t) {
                var e,
                    n = t.el._model || {},
                    i = t.el._scale || {},
                    a = t.fill,
                    r = null;
                if (isFinite(a)) return null;
                if (
                    ("start" === a ?
                        (r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom) :
                        "end" === a ?
                        (r = void 0 === n.scaleTop ? i.top : n.scaleTop) :
                        void 0 !== n.scaleZero ?
                        (r = n.scaleZero) :
                        i.getBasePixel && (r = i.getBasePixel()),
                        null != r)
                ) {
                    if (void 0 !== r.x && void 0 !== r.y) return r;
                    if (H.isFinite(r))
                        return { x: (e = i.isHorizontal()) ? r : null, y: e ? null : r };
                }
                return null;
            })(t);
    }

    function bi(t, e, n) {
        var i,
            a = t[e].fill,
            r = [e];
        if (!n) return a;
        for (; !1 !== a && -1 === r.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(i = t[a])) return !1;
            if (i.visible) return a;
            r.push(a), (a = i.fill);
        }
        return !1;
    }

    function xi(t) {
        var e = t.fill,
            n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), pi[n](t));
    }

    function yi(t) {
        return t && !t.skip;
    }

    function _i(t, e, n, i, a) {
        var r, o, s, l;
        if (i && a) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r)
                H.canvas.lineTo(t, e[r - 1], e[r]);
            if (void 0 === n[0].angle)
                for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r)
                    H.canvas.lineTo(t, n[r], n[r - 1], !0);
            else
                for (
                    o = n[0].cx,
                    s = n[0].cy,
                    l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)),
                    r = a - 1; r > 0;
                    --r
                )
                    t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0);
        }
    }

    function ki(t, e, n, i, a, r) {
        var o,
            s,
            l,
            u,
            d,
            h,
            c,
            f,
            g = e.length,
            p = i.spanGaps,
            m = [],
            v = [],
            b = 0,
            x = 0;
        for (t.beginPath(), o = 0, s = g; o < s; ++o)
            (d = n((u = e[(l = o % g)]._view), l, i)),
            (h = yi(u)),
            (c = yi(d)),
            r && void 0 === f && h && (s = g + (f = o + 1)),
            h && c ?
            ((b = m.push(u)), (x = v.push(d))) :
            b &&
            x &&
            (p ?
                (h && m.push(u), c && v.push(d)) :
                (_i(t, m, v, b, x), (b = x = 0), (m = []), (v = [])));
        _i(t, m, v, b, x), t.closePath(), (t.fillStyle = a), t.fill();
    }
    var wi = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
                var n,
                    i,
                    a,
                    r,
                    o = (t.data.datasets || []).length,
                    s = e.propagate,
                    l = [];
                for (i = 0; i < o; ++i)
                    (r = null),
                    (a = (n = t.getDatasetMeta(i)).dataset) &&
                    a._model &&
                    a instanceof kt.Line &&
                    (r = {
                        visible: t.isDatasetVisible(i),
                        fill: mi(a, i, o),
                        chart: t,
                        el: a,
                    }),
                    (n.$filler = r),
                    l.push(r);
                for (i = 0; i < o; ++i)
                    (r = l[i]) &&
                    ((r.fill = bi(l, i, s)), (r.boundary = vi(r)), (r.mapper = xi(r)));
            },
            beforeDatasetsDraw: function(t) {
                var e,
                    n,
                    i,
                    a,
                    r,
                    o,
                    s,
                    l = t._getSortedVisibleDatasetMetas(),
                    u = t.ctx;
                for (n = l.length - 1; n >= 0; --n)
                    (e = l[n].$filler) &&
                    e.visible &&
                    ((a = (i = e.el)._view),
                        (r = i._children || []),
                        (o = e.mapper),
                        (s = a.backgroundColor || N.global.defaultColor),
                        o &&
                        s &&
                        r.length &&
                        (H.canvas.clipArea(u, t.chartArea),
                            ki(u, r, o, a, s, i._loop),
                            H.canvas.unclipArea(u)));
            },
        },
        Mi = H.rtl.getRtlAdapter,
        Si = H.noop,
        Ci = H.valueOrDefault;

    function Pi(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
    }
    N._set("global", {
        legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var n = e.datasetIndex,
                    i = this.chart,
                    a = i.getDatasetMeta(n);
                (a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null),
                i.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data.datasets,
                        n = t.options.legend || {},
                        i = n.labels && n.labels.usePointStyle;
                    return t._getSortedDatasetMetas().map(function(n) {
                        var a = n.controller.getStyle(i ? 0 : void 0);
                        return {
                            text: e[n.index].label,
                            fillStyle: a.backgroundColor,
                            hidden: !t.isDatasetVisible(n.index),
                            lineCap: a.borderCapStyle,
                            lineDash: a.borderDash,
                            lineDashOffset: a.borderDashOffset,
                            lineJoin: a.borderJoinStyle,
                            lineWidth: a.borderWidth,
                            strokeStyle: a.borderColor,
                            pointStyle: a.pointStyle,
                            rotation: a.rotation,
                            datasetIndex: n.index,
                        };
                    }, this);
                },
            },
        },
        legendCallback: function(t) {
            var e,
                n,
                i,
                a = document.createElement("ul"),
                r = t.data.datasets;
            for (
                a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length; e < n; e++
            )
                ((i = a.appendChild(document.createElement("li"))).appendChild(
                    document.createElement("span")
                ).style.backgroundColor = r[e].backgroundColor),
                r[e].label && i.appendChild(document.createTextNode(r[e].label));
            return a.outerHTML;
        },
    });
    var Ai = K.extend({
        initialize: function(t) {
            H.extend(this, t),
                (this.legendHitBoxes = []),
                (this._hoveredItem = null),
                (this.doughnutMode = !1);
        },
        beforeUpdate: Si,
        update: function(t, e, n) {
            var i = this;
            return (
                i.beforeUpdate(),
                (i.maxWidth = t),
                (i.maxHeight = e),
                (i.margins = n),
                i.beforeSetDimensions(),
                i.setDimensions(),
                i.afterSetDimensions(),
                i.beforeBuildLabels(),
                i.buildLabels(),
                i.afterBuildLabels(),
                i.beforeFit(),
                i.fit(),
                i.afterFit(),
                i.afterUpdate(),
                i.minSize
            );
        },
        afterUpdate: Si,
        beforeSetDimensions: Si,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ?
                ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width)) :
                ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                (t.paddingLeft = 0),
                (t.paddingTop = 0),
                (t.paddingRight = 0),
                (t.paddingBottom = 0),
                (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: Si,
        beforeBuildLabels: Si,
        buildLabels: function() {
            var t = this,
                e = t.options.labels || {},
                n = H.callback(e.generateLabels, [t.chart], t) || [];
            e.filter &&
                (n = n.filter(function(n) {
                    return e.filter(n, t.chart.data);
                })),
                t.options.reverse && n.reverse(),
                (t.legendItems = n);
        },
        afterBuildLabels: Si,
        beforeFit: Si,
        fit: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = e.display,
                a = t.ctx,
                r = H.options._parseFont(n),
                o = r.size,
                s = (t.legendHitBoxes = []),
                l = t.minSize,
                u = t.isHorizontal();
            if (
                (u ?
                    ((l.width = t.maxWidth), (l.height = i ? 10 : 0)) :
                    ((l.width = i ? 10 : 0), (l.height = t.maxHeight)),
                    i)
            ) {
                if (((a.font = r.string), u)) {
                    var d = (t.lineWidths = [0]),
                        h = 0;
                    (a.textAlign = "left"),
                    (a.textBaseline = "middle"),
                    H.each(t.legendItems, function(t, e) {
                            var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
                            (0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) &&
                            ((h += o + n.padding), (d[d.length - (e > 0 ? 0 : 1)] = 0)),
                            (s[e] = { left: 0, top: 0, width: i, height: o }),
                            (d[d.length - 1] += i + n.padding);
                        }),
                        (l.height += h);
                } else {
                    var c = n.padding,
                        f = (t.columnWidths = []),
                        g = (t.columnHeights = []),
                        p = n.padding,
                        m = 0,
                        v = 0;
                    H.each(t.legendItems, function(t, e) {
                            var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
                            e > 0 &&
                                v + o + 2 * c > l.height &&
                                ((p += m + n.padding), f.push(m), g.push(v), (m = 0), (v = 0)),
                                (m = Math.max(m, i)),
                                (v += o + c),
                                (s[e] = { left: 0, top: 0, width: i, height: o });
                        }),
                        (p += m),
                        f.push(m),
                        g.push(v),
                        (l.width += p);
                }
                (t.width = l.width), (t.height = l.height);
            } else t.width = l.width = t.height = l.height = 0;
        },
        afterFit: Si,
        isHorizontal: function() {
            return (
                "top" === this.options.position || "bottom" === this.options.position
            );
        },
        draw: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                i = N.global,
                a = i.defaultColor,
                r = i.elements.line,
                o = t.height,
                s = t.columnHeights,
                l = t.width,
                u = t.lineWidths;
            if (e.display) {
                var d,
                    h = Mi(e.rtl, t.left, t.minSize.width),
                    c = t.ctx,
                    f = Ci(n.fontColor, i.defaultFontColor),
                    g = H.options._parseFont(n),
                    p = g.size;
                (c.textAlign = h.textAlign("left")),
                (c.textBaseline = "middle"),
                (c.lineWidth = 0.5),
                (c.strokeStyle = f),
                (c.fillStyle = f),
                (c.font = g.string);
                var m = Pi(n, p),
                    v = t.legendHitBoxes,
                    b = function(t, i) {
                        switch (e.align) {
                            case "start":
                                return n.padding;
                            case "end":
                                return t - i;
                            default:
                                return (t - i + n.padding) / 2;
                        }
                    },
                    x = t.isHorizontal();
                (d = x ?
                    { x: t.left + b(l, u[0]), y: t.top + n.padding, line: 0 } :
                    { x: t.left + n.padding, y: t.top + b(o, s[0]), line: 0 }),
                H.rtl.overrideTextDirection(t.ctx, e.textDirection);
                var y = p + n.padding;
                H.each(t.legendItems, function(e, i) {
                        var f = c.measureText(e.text).width,
                            g = m + p / 2 + f,
                            _ = d.x,
                            k = d.y;
                        h.setWidth(t.minSize.width),
                            x ?
                            i > 0 &&
                            _ + g + n.padding > t.left + t.minSize.width &&
                            ((k = d.y += y), d.line++, (_ = d.x = t.left + b(l, u[d.line]))) :
                            i > 0 &&
                            k + y > t.top + t.minSize.height &&
                            ((_ = d.x = _ + t.columnWidths[d.line] + n.padding),
                                d.line++,
                                (k = d.y = t.top + b(o, s[d.line])));
                        var w = h.x(_);
                        !(function(t, e, i) {
                            if (!(isNaN(m) || m <= 0)) {
                                c.save();
                                var o = Ci(i.lineWidth, r.borderWidth);
                                if (
                                    ((c.fillStyle = Ci(i.fillStyle, a)),
                                        (c.lineCap = Ci(i.lineCap, r.borderCapStyle)),
                                        (c.lineDashOffset = Ci(i.lineDashOffset, r.borderDashOffset)),
                                        (c.lineJoin = Ci(i.lineJoin, r.borderJoinStyle)),
                                        (c.lineWidth = o),
                                        (c.strokeStyle = Ci(i.strokeStyle, a)),
                                        c.setLineDash && c.setLineDash(Ci(i.lineDash, r.borderDash)),
                                        n && n.usePointStyle)
                                ) {
                                    var s = (m * Math.SQRT2) / 2,
                                        l = h.xPlus(t, m / 2),
                                        u = e + p / 2;
                                    H.canvas.drawPoint(c, i.pointStyle, s, l, u, i.rotation);
                                } else
                                    c.fillRect(h.leftForLtr(t, m), e, m, p),
                                    0 !== o && c.strokeRect(h.leftForLtr(t, m), e, m, p);
                                c.restore();
                            }
                        })(w, k, e),
                        (v[i].left = h.leftForLtr(w, v[i].width)),
                        (v[i].top = k),
                        (function(t, e, n, i) {
                            var a = p / 2,
                                r = h.xPlus(t, m + a),
                                o = e + a;
                            c.fillText(n.text, r, o),
                                n.hidden &&
                                (c.beginPath(),
                                    (c.lineWidth = 2),
                                    c.moveTo(r, o),
                                    c.lineTo(h.xPlus(r, i), o),
                                    c.stroke());
                        })(w, k, e, f),
                        x ? (d.x += g + n.padding) : (d.y += y);
                    }),
                    H.rtl.restoreTextDirection(t.ctx, e.textDirection);
            }
        },
        _getLegendItemAt: function(t, e) {
            var n,
                i,
                a,
                r = this;
            if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom)
                for (a = r.legendHitBoxes, n = 0; n < a.length; ++n)
                    if (
                        t >= (i = a[n]).left &&
                        t <= i.left + i.width &&
                        e >= i.top &&
                        e <= i.top + i.height
                    )
                        return r.legendItems[n];
            return null;
        },
        handleEvent: function(t) {
            var e,
                n = this,
                i = n.options,
                a = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === a) {
                if (!i.onHover && !i.onLeave) return;
            } else {
                if ("click" !== a) return;
                if (!i.onClick) return;
            }
            (e = n._getLegendItemAt(t.x, t.y)),
            "click" === a
                ?
                e && i.onClick && i.onClick.call(n, t.native, e) :
                (i.onLeave &&
                    e !== n._hoveredItem &&
                    (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem),
                        (n._hoveredItem = e)),
                    i.onHover && e && i.onHover.call(n, t.native, e));
        },
    });

    function Di(t, e) {
        var n = new Ai({ ctx: t.ctx, options: e, chart: t });
        pe.configure(t, n, e), pe.addBox(t, n), (t.legend = n);
    }
    var Ti = {
            id: "legend",
            _element: Ai,
            beforeInit: function(t) {
                var e = t.options.legend;
                e && Di(t, e);
            },
            beforeUpdate: function(t) {
                var e = t.options.legend,
                    n = t.legend;
                e
                    ?
                    (H.mergeIf(e, N.global.legend),
                        n ? (pe.configure(t, n, e), (n.options = e)) : Di(t, e)) :
                    n && (pe.removeBox(t, n), delete t.legend);
            },
            afterEvent: function(t, e) {
                var n = t.legend;
                n && n.handleEvent(e);
            },
        },
        Ii = H.noop;
    N._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
        },
    });
    var Fi = K.extend({
        initialize: function(t) {
            H.extend(this, t), (this.legendHitBoxes = []);
        },
        beforeUpdate: Ii,
        update: function(t, e, n) {
            var i = this;
            return (
                i.beforeUpdate(),
                (i.maxWidth = t),
                (i.maxHeight = e),
                (i.margins = n),
                i.beforeSetDimensions(),
                i.setDimensions(),
                i.afterSetDimensions(),
                i.beforeBuildLabels(),
                i.buildLabels(),
                i.afterBuildLabels(),
                i.beforeFit(),
                i.fit(),
                i.afterFit(),
                i.afterUpdate(),
                i.minSize
            );
        },
        afterUpdate: Ii,
        beforeSetDimensions: Ii,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ?
                ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width)) :
                ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                (t.paddingLeft = 0),
                (t.paddingTop = 0),
                (t.paddingRight = 0),
                (t.paddingBottom = 0),
                (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: Ii,
        beforeBuildLabels: Ii,
        buildLabels: Ii,
        afterBuildLabels: Ii,
        beforeFit: Ii,
        fit: function() {
            var t,
                e = this,
                n = e.options,
                i = (e.minSize = {}),
                a = e.isHorizontal();
            n.display ?
                ((t =
                        (H.isArray(n.text) ? n.text.length : 1) *
                        H.options._parseFont(n).lineHeight +
                        2 * n.padding),
                    (e.width = i.width = a ? e.maxWidth : t),
                    (e.height = i.height = a ? t : e.maxHeight)) :
                (e.width = i.width = e.height = i.height = 0);
        },
        afterFit: Ii,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                n = t.options;
            if (n.display) {
                var i,
                    a,
                    r,
                    o = H.options._parseFont(n),
                    s = o.lineHeight,
                    l = s / 2 + n.padding,
                    u = 0,
                    d = t.top,
                    h = t.left,
                    c = t.bottom,
                    f = t.right;
                (e.fillStyle = H.valueOrDefault(
                    n.fontColor,
                    N.global.defaultFontColor
                )),
                (e.font = o.string),
                t.isHorizontal() ?
                    ((a = h + (f - h) / 2), (r = d + l), (i = f - h)) :
                    ((a = "left" === n.position ? h + l : f - l),
                        (r = d + (c - d) / 2),
                        (i = c - d),
                        (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
                    e.save(),
                    e.translate(a, r),
                    e.rotate(u),
                    (e.textAlign = "center"),
                    (e.textBaseline = "middle");
                var g = n.text;
                if (H.isArray(g))
                    for (var p = 0, m = 0; m < g.length; ++m)
                        e.fillText(g[m], 0, p, i), (p += s);
                else e.fillText(g, 0, 0, i);
                e.restore();
            }
        },
    });

    function Oi(t, e) {
        var n = new Fi({ ctx: t.ctx, options: e, chart: t });
        pe.configure(t, n, e), pe.addBox(t, n), (t.titleBlock = n);
    }
    var Li = {},
        Ri = wi,
        zi = Ti,
        Ni = {
            id: "title",
            _element: Fi,
            beforeInit: function(t) {
                var e = t.options.title;
                e && Oi(t, e);
            },
            beforeUpdate: function(t) {
                var e = t.options.title,
                    n = t.titleBlock;
                e
                    ?
                    (H.mergeIf(e, N.global.title),
                        n ? (pe.configure(t, n, e), (n.options = e)) : Oi(t, e)) :
                    n && (pe.removeBox(t, n), delete t.titleBlock);
            },
        };
    for (var Bi in ((Li.filler = Ri),
            (Li.legend = zi),
            (Li.title = Ni),
            (en.helpers = H),
            (function() {
                function t(t, e, n) {
                    var i;
                    return (
                        "string" == typeof t ?
                        ((i = parseInt(t, 10)), -1 !== t.indexOf("%") && (i = (i / 100) * e.parentNode[n])) :
                        (i = t),
                        i
                    );
                }

                function e(t) {
                    return null != t && "none" !== t;
                }

                function n(n, i, a) {
                    var r = document.defaultView,
                        o = H._getParentNode(n),
                        s = r.getComputedStyle(n)[i],
                        l = r.getComputedStyle(o)[i],
                        u = e(s),
                        d = e(l),
                        h = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? t(s, n, a) : h, d ? t(l, o, a) : h) : "none";
                }
                (H.where = function(t, e) {
                    if (H.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var n = [];
                    return (
                        H.each(t, function(t) {
                            e(t) && n.push(t);
                        }),
                        n
                    );
                }),
                (H.findIndex = Array.prototype.findIndex ?

                    function(t, e, n) {
                        return t.findIndex(e, n);
                    } :
                    function(t, e, n) {
                        n = void 0 === n ? t : n;
                        for (var i = 0, a = t.length; i < a; ++i)
                            if (e.call(n, t[i], i, t)) return i;
                        return -1;
                    }),
                (H.findNextWhere = function(t, e, n) {
                    H.isNullOrUndef(n) && (n = -1);
                    for (var i = n + 1; i < t.length; i++) {
                        var a = t[i];
                        if (e(a)) return a;
                    }
                }),
                (H.findPreviousWhere = function(t, e, n) {
                    H.isNullOrUndef(n) && (n = t.length);
                    for (var i = n - 1; i >= 0; i--) {
                        var a = t[i];
                        if (e(a)) return a;
                    }
                }),
                (H.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t);
                }),
                (H.almostEquals = function(t, e, n) {
                    return Math.abs(t - e) < n;
                }),
                (H.almostWhole = function(t, e) {
                    var n = Math.round(t);
                    return n - e <= t && n + e >= t;
                }),
                (H.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e);
                    }, Number.NEGATIVE_INFINITY);
                }),
                (H.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e);
                    }, Number.POSITIVE_INFINITY);
                }),
                (H.sign = Math.sign ?

                    function(t) {
                        return Math.sign(t);
                    } :
                    function(t) {
                        return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
                    }),
                (H.toRadians = function(t) {
                    return t * (Math.PI / 180);
                }),
                (H.toDegrees = function(t) {
                    return t * (180 / Math.PI);
                }),
                (H._decimalPlaces = function(t) {
                    if (H.isFinite(t)) {
                        for (var e = 1, n = 0; Math.round(t * e) / e !== t;)(e *= 10), n++;
                        return n;
                    }
                }),
                (H.getAngleFromPoint = function(t, e) {
                    var n = e.x - t.x,
                        i = e.y - t.y,
                        a = Math.sqrt(n * n + i * i),
                        r = Math.atan2(i, n);
                    return (
                        r < -0.5 * Math.PI && (r += 2 * Math.PI), { angle: r, distance: a }
                    );
                }),
                (H.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
                }),
                (H.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : 0.5;
                }),
                (H._alignPixel = function(t, e, n) {
                    var i = t.currentDevicePixelRatio,
                        a = n / 2;
                    return Math.round((e - a) * i) / i + a;
                }),
                (H.splineCurve = function(t, e, n, i) {
                    var a = t.skip ? e : t,
                        r = e,
                        o = n.skip ? e : n,
                        s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        h = i * (u = isNaN(u) ? 0 : u),
                        c = i * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: { x: r.x - h * (o.x - a.x), y: r.y - h * (o.y - a.y) },
                        next: { x: r.x + c * (o.x - a.x), y: r.y + c * (o.y - a.y) },
                    };
                }),
                (H.EPSILON = Number.EPSILON || 1e-14),
                (H.splineCurveMonotone = function(t) {
                    var e,
                        n,
                        i,
                        a,
                        r,
                        o,
                        s,
                        l,
                        u,
                        d = (t || []).map(function(t) {
                            return { model: t._model, deltaK: 0, mK: 0 };
                        }),
                        h = d.length;
                    for (e = 0; e < h; ++e)
                        if (!(i = d[e]).model.skip) {
                            if (
                                ((n = e > 0 ? d[e - 1] : null),
                                    (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip)
                            ) {
                                var c = a.model.x - i.model.x;
                                i.deltaK = 0 !== c ? (a.model.y - i.model.y) / c : 0;
                            }!n || n.model.skip ?
                                (i.mK = i.deltaK) :
                                !a || a.model.skip ?
                                (i.mK = n.deltaK) :
                                this.sign(n.deltaK) !== this.sign(i.deltaK) ?
                                (i.mK = 0) :
                                (i.mK = (n.deltaK + i.deltaK) / 2);
                        }
                    for (e = 0; e < h - 1; ++e)
                        (i = d[e]),
                        (a = d[e + 1]),
                        i.model.skip ||
                        a.model.skip ||
                        (H.almostEquals(i.deltaK, 0, this.EPSILON) ?
                            (i.mK = a.mK = 0) :
                            ((r = i.mK / i.deltaK),
                                (o = a.mK / i.deltaK),
                                (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 ||
                                ((s = 3 / Math.sqrt(l)),
                                    (i.mK = r * s * i.deltaK),
                                    (a.mK = o * s * i.deltaK))));
                    for (e = 0; e < h; ++e)
                        (i = d[e]).model.skip ||
                        ((n = e > 0 ? d[e - 1] : null),
                            (a = e < h - 1 ? d[e + 1] : null),
                            n &&
                            !n.model.skip &&
                            ((u = (i.model.x - n.model.x) / 3),
                                (i.model.controlPointPreviousX = i.model.x - u),
                                (i.model.controlPointPreviousY = i.model.y - u * i.mK)),
                            a &&
                            !a.model.skip &&
                            ((u = (a.model.x - i.model.x) / 3),
                                (i.model.controlPointNextX = i.model.x + u),
                                (i.model.controlPointNextY = i.model.y + u * i.mK)));
                }),
                (H.nextItem = function(t, e, n) {
                    return n ?
                        e >= t.length - 1 ?
                        t[0] :
                        t[e + 1] :
                        e >= t.length - 1 ?
                        t[t.length - 1] :
                        t[e + 1];
                }),
                (H.previousItem = function(t, e, n) {
                    return n ?
                        e <= 0 ?
                        t[t.length - 1] :
                        t[e - 1] :
                        e <= 0 ?
                        t[0] :
                        t[e - 1];
                }),
                (H.niceNum = function(t, e) {
                    var n = Math.floor(H.log10(t)),
                        i = t / Math.pow(10, n);
                    return (
                        (e ?
                            i < 1.5 ?
                            1 :
                            i < 3 ?
                            2 :
                            i < 7 ?
                            5 :
                            10 :
                            i <= 1 ?
                            1 :
                            i <= 2 ?
                            2 :
                            i <= 5 ?
                            5 :
                            10) * Math.pow(10, n)
                    );
                }),
                (H.requestAnimFrame =
                    "undefined" == typeof window ?

                    function(t) {
                        t();
                    } :
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(t) {
                        return window.setTimeout(t, 1e3 / 60);
                    }),
                (H.getRelativePosition = function(t, e) {
                    var n,
                        i,
                        a = t.originalEvent || t,
                        r = t.target || t.srcElement,
                        o = r.getBoundingClientRect(),
                        s = a.touches;
                    s && s.length > 0 ?
                        ((n = s[0].clientX), (i = s[0].clientY)) :
                        ((n = a.clientX), (i = a.clientY));
                    var l = parseFloat(H.getStyle(r, "padding-left")),
                        u = parseFloat(H.getStyle(r, "padding-top")),
                        d = parseFloat(H.getStyle(r, "padding-right")),
                        h = parseFloat(H.getStyle(r, "padding-bottom")),
                        c = o.right - o.left - l - d,
                        f = o.bottom - o.top - u - h;
                    return {
                        x: (n = Math.round(
                            (((n - o.left - l) / c) * r.width) / e.currentDevicePixelRatio
                        )),
                        y: (i = Math.round(
                            (((i - o.top - u) / f) * r.height) / e.currentDevicePixelRatio
                        )),
                    };
                }),
                (H.getConstraintWidth = function(t) {
                    return n(t, "max-width", "clientWidth");
                }),
                (H.getConstraintHeight = function(t) {
                    return n(t, "max-height", "clientHeight");
                }),
                (H._calculatePadding = function(t, e, n) {
                    return (e = H.getStyle(t, e)).indexOf("%") > -1 ?
                        (n * parseInt(e, 10)) / 100 :
                        parseInt(e, 10);
                }),
                (H._getParentNode = function(t) {
                    var e = t.parentNode;
                    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
                }),
                (H.getMaximumWidth = function(t) {
                    var e = H._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var n = e.clientWidth,
                        i =
                        n -
                        H._calculatePadding(e, "padding-left", n) -
                        H._calculatePadding(e, "padding-right", n),
                        a = H.getConstraintWidth(t);
                    return isNaN(a) ? i : Math.min(i, a);
                }),
                (H.getMaximumHeight = function(t) {
                    var e = H._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var n = e.clientHeight,
                        i =
                        n -
                        H._calculatePadding(e, "padding-top", n) -
                        H._calculatePadding(e, "padding-bottom", n),
                        a = H.getConstraintHeight(t);
                    return isNaN(a) ? i : Math.min(i, a);
                }),
                (H.getStyle = function(t, e) {
                    return t.currentStyle ?
                        t.currentStyle[e] :
                        document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
                }),
                (H.retinaScale = function(t, e) {
                    var n = (t.currentDevicePixelRatio =
                        e || ("undefined" != typeof window && window.devicePixelRatio) || 1);
                    if (1 !== n) {
                        var i = t.canvas,
                            a = t.height,
                            r = t.width;
                        (i.height = a * n),
                        (i.width = r * n),
                        t.ctx.scale(n, n),
                            i.style.height ||
                            i.style.width ||
                            ((i.style.height = a + "px"), (i.style.width = r + "px"));
                    }
                }),
                (H.fontString = function(t, e, n) {
                    return e + " " + t + "px " + n;
                }),
                (H.longestText = function(t, e, n, i) {
                    var a = ((i = i || {}).data = i.data || {}),
                        r = (i.garbageCollect = i.garbageCollect || []);
                    i.font !== e &&
                        ((a = i.data = {}), (r = i.garbageCollect = []), (i.font = e)),
                        (t.font = e);
                    var o,
                        s,
                        l,
                        u,
                        d,
                        h = 0,
                        c = n.length;
                    for (o = 0; o < c; o++)
                        if (null != (u = n[o]) && !0 !== H.isArray(u))
                            h = H.measureText(t, a, r, h, u);
                        else if (H.isArray(u))
                        for (s = 0, l = u.length; s < l; s++)
                            null == (d = u[s]) ||
                            H.isArray(d) ||
                            (h = H.measureText(t, a, r, h, d));
                    var f = r.length / 2;
                    if (f > n.length) {
                        for (o = 0; o < f; o++) delete a[r[o]];
                        r.splice(0, f);
                    }
                    return h;
                }),
                (H.measureText = function(t, e, n, i, a) {
                    var r = e[a];
                    return (
                        r || ((r = e[a] = t.measureText(a).width), n.push(a)),
                        r > i && (i = r),
                        i
                    );
                }),
                (H.numberOfLabelLines = function(t) {
                    var e = 1;
                    return (
                        H.each(t, function(t) {
                            H.isArray(t) && t.length > e && (e = t.length);
                        }),
                        e
                    );
                }),
                (H.color = _ ?

                    function(t) {
                        return (
                            t instanceof CanvasGradient && (t = N.global.defaultColor), _(t)
                        );
                    } :
                    function(t) {
                        return console.error("Color.js not found!"), t;
                    }),
                (H.getHoverColor = function(t) {
                    return t instanceof CanvasPattern || t instanceof CanvasGradient ?
                        t :
                        H.color(t).saturate(0.5).darken(0.1).rgbString();
                });
            })(),
            (en._adapters = rn),
            (en.Animation = $),
            (en.animationService = J),
            (en.controllers = Jt),
            (en.DatasetController = it),
            (en.defaults = N),
            (en.Element = K),
            (en.elements = kt),
            (en.Interaction = re),
            (en.layouts = pe),
            (en.platform = Oe),
            (en.plugins = Le),
            (en.Scale = yn),
            (en.scaleService = Re),
            (en.Ticks = on),
            (en.Tooltip = Ye),
            en.helpers.each(fi, function(t, e) {
                en.scaleService.registerScaleType(e, t, t._defaults);
            }),
            Li))
        Li.hasOwnProperty(Bi) && en.plugins.register(Li[Bi]);
    en.platform.initialize();
    var Ei = en;
    return (
        "undefined" != typeof window && (window.Chart = en),
        (en.Chart = en),
        (en.Legend = Li.legend._element),
        (en.Title = Li.title._element),
        (en.pluginService = en.plugins),
        (en.PluginBase = en.Element.extend({})),
        (en.canvasHelpers = en.helpers.canvas),
        (en.layoutService = en.layouts),
        (en.LinearScaleBase = Cn),
        en.helpers.each(
            ["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"],
            function(t) {
                en[t] = function(e, n) {
                    return new en(
                        e,
                        en.helpers.merge(n || {}, {
                            type: t.charAt(0).toLowerCase() + t.slice(1),
                        })
                    );
                };
            }
        ),
        Ei
    );
});