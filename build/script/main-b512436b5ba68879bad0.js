!function (n) {
    var e = {};

    function t(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {i: r, l: !1, exports: {}};
        return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    t.m = n, t.c = e, t.d = function (n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, {configurable: !1, enumerable: !0, get: r})
    }, t.r = function (n) {
        Object.defineProperty(n, "__esModule", {value: !0})
    }, t.n = function (n) {
        var e = n && n.__esModule ? function () {
            return n.default
        } : function () {
            return n
        };
        return t.d(e, "a", e), e
    }, t.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, t.p = "", t(t.s = 1)
}([function (n, e) {
    n.exports.fn = function (n) {
        console.log(n)
    }
}, function (n, e, t) {
    t(0).fn("init index")
}]);