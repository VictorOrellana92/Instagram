function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function Registrarse() {
        $.view3.visible = false;
        $.view4.visible = true;
    }
    function IniciarSesion() {
        $.view3.visible = true;
        $.view4.visible = false;
        $.tfUsuario.value = "";
        $.tfContraseña.value = "";
        $.tfNombreUsuario.value = "";
        $.tfContraseña2.value = "";
        $.tfContraseña3.value = "";
    }
    function Ingresar() {
        var usuario = "victor";
        usuario = $.tfUsuario.value;
        var ventana2 = Alloy.createController("ventana2").getView();
        if ("victor" == usuario) {
            alert("Bienvenido " + usuario);
            ventana2.open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        top: "0dp"
    });
    $.__views.index.add($.__views.view1);
    $.__views.image = Ti.UI.createImageView({
        image: "/Users/Orellana/Documents/Appcelerator_Studio_Workspace/Instagram/Images/Fondo.jpg",
        width: "100%",
        height: "50%",
        top: "0",
        id: "image"
    });
    $.__views.view1.add($.__views.image);
    $.__views.Lema = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: "16px",
            lineHeight: "17.5px",
            fontFamily: "Times new Roman",
            fontWeight: "bold"
        },
        top: "200dp",
        left: "18%",
        text: "Inicia sesión para ver fotos y videos",
        id: "Lema"
    });
    $.__views.view1.add($.__views.Lema);
    $.__views.Lema2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontSize: "16px",
            lineHeight: "17.5px",
            fontFamily: "Times new Roman",
            fontWeight: "bold"
        },
        top: "220dp",
        left: "36%",
        text: "de tus amigos",
        id: "Lema2"
    });
    $.__views.view1.add($.__views.Lema2);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        top: "45%",
        height: "30dp"
    });
    $.__views.index.add($.__views.view2);
    $.__views.btnRegistrarse = Ti.UI.createButton({
        color: "White",
        font: {
            fontSize: "14px",
            lineHeight: "17.5px",
            fontFamily: "Times new Roman",
            fontWeight: "bold"
        },
        left: "10%",
        title: "REGISTRARSE",
        id: "btnRegistrarse"
    });
    $.__views.view2.add($.__views.btnRegistrarse);
    Registrarse ? $.addListener($.__views.btnRegistrarse, "click", Registrarse) : __defers["$.__views.btnRegistrarse!click!Registrarse"] = true;
    $.__views.btnIniciarSesion = Ti.UI.createButton({
        color: "White",
        font: {
            fontSize: "14px",
            lineHeight: "17.5px",
            fontFamily: "Times new Roman",
            fontWeight: "bold"
        },
        right: "10%",
        title: "INICIAR SESIÓN",
        id: "btnIniciarSesion"
    });
    $.__views.view2.add($.__views.btnIniciarSesion);
    IniciarSesion ? $.addListener($.__views.btnIniciarSesion, "click", IniciarSesion) : __defers["$.__views.btnIniciarSesion!click!IniciarSesion"] = true;
    $.__views.view3 = Ti.UI.createView({
        backgroundColor: "#F6F3F3",
        id: "view3",
        top: "50%",
        height: "50%",
        visible: "true"
    });
    $.__views.index.add($.__views.view3);
    $.__views.tfUsuario = Ti.UI.createTextField({
        top: "30dp",
        left: "5%",
        width: "90%",
        id: "tfUsuario",
        hintText: "Usuario",
        rect: "true"
    });
    $.__views.view3.add($.__views.tfUsuario);
    $.__views.tfContraseña = Ti.UI.createTextField({
        top: "70dp",
        left: "5%",
        width: "50%",
        id: "tfContraseña",
        passwordMask: "true",
        hintText: "Contraseña"
    });
    $.__views.view3.add($.__views.tfContraseña);
    $.__views.lblolvido = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        right: "40dp",
        top: "70dp",
        text: "¿Te olvidaste?",
        id: "lblolvido"
    });
    $.__views.view3.add($.__views.lblolvido);
    $.__views.btnEntrar = Ti.UI.createButton({
        color: "Black",
        font: {
            fontSize: "14px",
            lineHeight: "17.5px",
            fontFamily: "Times new Roman",
            fontWeight: "bold"
        },
        borderColor: "blue",
        borderRadius: "10dp",
        width: "50dp",
        title: "Aceptar",
        id: "btnEntrar"
    });
    $.__views.view3.add($.__views.btnEntrar);
    Ingresar ? $.addListener($.__views.btnEntrar, "click", Ingresar) : __defers["$.__views.btnEntrar!click!Ingresar"] = true;
    $.__views.InicioFb = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "40dp",
        color: "blue",
        bottom: "0dp",
        text: "Iniciar sesión con facebook",
        id: "InicioFb"
    });
    $.__views.view3.add($.__views.InicioFb);
    $.__views.imgfb1 = Ti.UI.createImageView({
        image: "/Users/Orellana/Documents/Appcelerator_Studio_Workspace/Instagram/Images/facebook.png",
        width: "20dp",
        height: "20dp",
        bottom: "10dp",
        left: "10%",
        id: "imgfb1"
    });
    $.__views.view3.add($.__views.imgfb1);
    $.__views.view4 = Ti.UI.createView({
        backgroundColor: "#F6F3F3",
        top: "50%",
        id: "view4",
        height: "50%",
        visible: "false"
    });
    $.__views.index.add($.__views.view4);
    $.__views.tfNombreUsuario = Ti.UI.createTextField({
        top: "30dp",
        left: "20dp",
        width: "280dp",
        id: "tfNombreUsuario",
        hintText: "Nombre de Usuario",
        borderStyle: "ROUNDED"
    });
    $.__views.view4.add($.__views.tfNombreUsuario);
    $.__views.tfContraseña2 = Ti.UI.createTextField({
        top: "70dp",
        left: "20dp",
        width: "280dp",
        id: "tfContraseña2",
        hintText: "Contraseña"
    });
    $.__views.view4.add($.__views.tfContraseña2);
    $.__views.tfContraseña3 = Ti.UI.createTextField({
        top: "110dp",
        left: "20dp",
        width: "280dp",
        backgroundTopCap: "200dp",
        id: "tfContraseña3",
        hintText: "Repita Contraseña"
    });
    $.__views.view4.add($.__views.tfContraseña3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btnRegistrarse!click!Registrarse"] && $.addListener($.__views.btnRegistrarse, "click", Registrarse);
    __defers["$.__views.btnIniciarSesion!click!IniciarSesion"] && $.addListener($.__views.btnIniciarSesion, "click", IniciarSesion);
    __defers["$.__views.btnEntrar!click!Ingresar"] && $.addListener($.__views.btnEntrar, "click", Ingresar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;