/**
 * Created by WANGTAO on 2016/6/21.
 */
window.IPTV = window.IPTV || {};

// Include syntactic sugar to help the development of our interface.
Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
    return this;
};

(function (window, undefined) {
    "use strict"; // 严格模式
    var version = "0.0.1",
        class2type = {},
        core_toString = class2type.toString,
        core_hasOwn = class2type.hasOwnProperty;

    // 类型赋值
    for (var i = 0, types = "Boolean Number String Function Array Date RegExp Object Error".split(" "); i < types.length; i++) {
        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
    }

    var IPTV = function (selector) {
        return new IPTV.prototype.init(selector);
    };

    IPTV.fn = IPTV.prototype = {};


    // function IPTV(els) {
    //     this.element;
    //     if (typeof els === 'string'){
    //         this.element = document.getElementById(els);
    //     } else if (typeof els === 'object'){
    //         this.element = els;
    //     }
    // }

    /*
     Init
     * init 初始化方法
     */
    IPTV.method('init', function (element) {
        if (!element) {
            return this;
        }
        if (typeof element === 'string') {
            if (element.charAt(0) === '.') {
                this.element = document.getElementsByClassName(element.replace('.', ''));
            } else if (element.charAt(0) === '#') {
                this.element = document.getElementById(element.replace('#', ''));
            } else {
                this.element = document.getElementsByTagName(element);
            }
            this.element = document.getElementById(element);
        } else if (typeof element === 'object') {
            this.element = element;
        }
        return this;
    })
    /*
     Events
     * addEvent
     * getEvent
     */
        .method('addEvent', function (type, fn) {
            // ...
        }).method('getEvent', function (e) {
        // ...
    })./*
     DOM
     * addClass
     * removeClass
     * replaceClass
     * hasClass
     * getStyle
     * setStyle
     */
    method('addClass', function (className) {
        // ...
    }).method('removeClass', function (className) {
        // ...
    }).method('replaceClass', function (oldClass, newClass) {
        // ...
    }).method('hasClass', function (className) {
        // ...
    }).method('getStyle', function (prop) {
        // ...
    }).method('setStyle', function (prop, val) {
        // ...
        alert(123);
    })./*
     AJAX
     * load. Fetches an HTML fragment from a URL and inserts it into an element.
     */
    method('load', function (uri, method) {
        // ...
    });

    IPTV.prototype.init.prototype = IPTV.prototype;

    IPTV.extend = IPTV.fn.extend = function () {
        var src, copyIsArray, copy, name, options, clone,
            target = arguments[0] || {},    // 常见用法 jQuery.extend( obj1, obj2 )，此时，target为arguments[0]
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {    // 如果第一个参数为true，即 jQuery.extend( true, obj1, obj2 ); 的情况
            deep = target;  // 此时target是true
            target = arguments[1] || {};    // target改为 obj1
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !IPTV.isFunction(target)) {  // 处理奇怪的情况，比如 jQuery.extend( 'hello' , {nick: 'casper})~~
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if (length === i) {   // 处理这种情况 jQuery.extend(obj)，或 jQuery.fn.extend( obj )
            target = this;  // jQuery.extend时，this指的是jQuery；jQuery.fn.extend时，this指的是jQuery.fn
            --i;
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) { // 比如 jQuery.extend( obj1, obj2, obj3, ojb4 )，options则为 obj2、obj3...
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {    // 防止自引用，不赘述
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    // 如果是深拷贝，且被拷贝的属性值本身是个对象
                    if (deep && copy && ( IPTV.isPlainObject(copy) || (copyIsArray = IPTV.isArray(copy)) )) {
                        if (copyIsArray) {    // 被拷贝的属性值是个数组
                            copyIsArray = false;
                            clone = src && IPTV.isArray(src) ? src : [];

                        } else {    // 被拷贝的属性值是个plainObject，比如{ nick: 'casper' }
                            clone = src && IPTV.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = IPTV.extend(deep, clone, copy);  // 递归~

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {  // 浅拷贝，且属性值不为undefined
                        target[name] = copy;
                    }
                }
            }
        }
        // Return the modified object
        return target;
    };

    IPTV.extend({
        version: version,
        isArray: Array.isArray || function (obj) {
            return IPTV.type(obj) === "array";
        },
        type: function (obj) {
            if (obj == null) {
                return String(obj);
            }
            return typeof obj === "object" || typeof obj === "function" ?
            class2type[core_toString.call(obj)] || "object" :
                typeof obj;
        },
        isPlainObject: function (obj) {
            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            if (!obj || IPTV.type(obj) !== "object" || obj.nodeType || IPTV.isWindow(obj)) {
                return false;
            }

            try {
                // Not own constructor property must be Object
                if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }

            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.

            var key;
            for (key in obj) {
            }

            return key === undefined || core_hasOwn.call(obj, key);
        }
    });

    window.IPTV = IPTV;

})(window, undefined);