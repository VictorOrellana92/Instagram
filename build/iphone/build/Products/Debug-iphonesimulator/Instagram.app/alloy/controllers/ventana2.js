function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function Volver() {
        alert("hola");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ventana2";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.ventana2 = Ti.UI.createView({
        id: "ventana2"
    });
    $.__views.ventana2 && $.addTopLevelView($.__views.ventana2);
    $.__views.btnVolver = Ti.UI.createButton({
        title: "Volver",
        id: "btnVolver"
    });
    $.__views.ventana2.add($.__views.btnVolver);
    Volver ? $.addListener($.__views.btnVolver, "click", Volver) : __defers["$.__views.btnVolver!click!Volver"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnVolver!click!Volver"] && $.addListener($.__views.btnVolver, "click", Volver);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;