sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project2.controller.page2", {
           onpress2:function(){
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("page3");
           },
           onpress3:function(){
            var oRouter2=this.getOwnerComponent().getRouter();
            oRouter2.navTo("RouteView1");
           },
           onPressGoToMaster:function(){
            this.getSplitAppObj().toMaster(this.createId("master2"));                                    
           }
        });
    });