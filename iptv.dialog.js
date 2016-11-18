/**
 * Created by WANGTAO on 2016/6/21.
 */
window.IPTV = window.IPTV || {};

(function(IPTV) {


    var ACTIVE_DIALOGS = {},
        currDialog;

    IPTV.fn.dialog = function(options, param){
        console.info(this);
        if (typeof options == 'string'){
            var method = IPTV.fn.dialog.methods[options];
            if (method){
                return method(this, param);
            }
        }
        options = options || {};
        return this.each(function(){
            // if (ACTIVE_DIALOGS){
            //     IPTV.extend(state.options, options);
            // } else {
            //     state = IPTV.data(this, 'window', {
            //         options: IPTV.extend({}, IPTV.fn.window.defaults, IPTV.fn.window.parseOptions(this), options)
            //     });
            //     if (!state.options.inline){
            //         document.body.appendChild(this);
            //     }
            // }
            // create(this);
            // setProperties(this);
        });
    };

    /*
     *  弹窗 方法
     */
    IPTV.fn.dialog.methods = {
        test: function () {
            alert(123444);
        }
    };
})(IPTV);

// installHelper(window.IPTV, 'dialog');