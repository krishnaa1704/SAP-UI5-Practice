sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project2.controller.page2", {
            onpress3:function(){
                var oRouter2=this.getOwnerComponent().getRouter();
                oRouter2.navTo("page2");
               }
        });
    });