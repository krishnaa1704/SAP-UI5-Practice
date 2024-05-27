sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/m/MessageToast",
    "sap/ui/model/FilterOperator",
    "sap/m/Column",
    "sap/m/Text",

    //"jsPDF.js",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
     "../model/formatter"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,Filter,MessageToast,FilterOperator,Column,Text,exportLibrary,Spreadsheet,formatter) {
        "use strict";

        return Controller.extend("project2.controller.View1", {
            formatter:formatter,
            onFilterInvoices(oEvent) {
                // build filter array
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                }
    
                // filter binding
                const oList = this.byId("invoiceList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },
            onsearch:function(){
                var table = this.getView().byId("table");
                var oBinding = table.getBinding("items");
                var name = this.getView().byId("pname").mProperties.selectedKeys;
                var quantity = this.getView().byId("quant").mProperties.selectedKeys;
                var status = this.getView().byId("ship").mProperties.selectedKeys;
                console.log(name,quantity,status);
                var oFilter = [];
                var len=name.length;
                for(var i=0;i<len;i++){
                if(name[i]!==undefined){
                    oFilter.push(new Filter("ProductName",FilterOperator.EQ,name[i]));
                   }
                }
                var len1=quantity.length;
                for(var i=0;i<len1;i++){
                if(quantity[i]!==undefined){
                    oFilter.push(new Filter("Quantity",FilterOperator.EQ,quantity[i]));
                   }
                }
                var len2=status.length;
                for(var i=0;i<len2;i++){
                    if(status!=undefined){
                        oFilter.push(new Filter("ShipperName",FilterOperator.EQ,status[i]));
                    }
                }
                console.log("Applied filters:", oFilter);
                if(oFilter.length>0){
                    oBinding.filter(oFilter,true);
                }
                else{
                    oBinding.filter([]);
                }
            },
            onselection1 : function(){
                var table = this.getView().byId("table");
                var oBinding = table.getBinding("items");
                var name = this.getView().byId("pname").mProperties.selectedKeys[0]; 
                var oFilter=[
                    new Filter("ProductName",FilterOperator.EQ,name)
                ]
                oBinding.filter(oFilter);
            },
            onselection2 : function(){
                var table = this.getView().byId("table");
                var oBinding = table.getBinding("items");
                var name = this.getView().byId("quant").mProperties.selectedKeys[0]; 
                var oFilter=[
                    new Filter("Quantity",FilterOperator.EQ,name)
                ]
                oBinding.filter(oFilter);
            },
            onselection3 : function(){
                var table = this.getView().byId("table");
                var oBinding = table.getBinding("items");
                var name = this.getView().byId("ship").mProperties.selectedKeys[0]; 
                var oFilter=[
                    new Filter("ShipperName",FilterOperator.EQ,name)
                ]
                oBinding.filter(oFilter);
            },
            onpress: function(){
                const oRouter=this.getOwnerComponent().getRouter();
                oRouter.navTo("page2");
            },
            onpresstargetswithoutroutes:function(){
                this.getOwnerComponent().getTargets().display("page2");
            },
            onBooking:function(){
                MessageToast.show("Ticket Booked");
            },
            // onInit:function(){
            //     this._iVisibleRowIndex=1; 
            //     var oTable = this.getView().byId("table2");
            //     var aBooks = this.getView().getModel("localdata").getProperty("/Invoices");
            //     var oFirstColumn = aBooks[0];
            //     var aColumnProperties = Object.keys(oFirstColumn);
            //     var oColumns = [];
            //     aColumnProperties.forEach(function(property) {
            //         oColumns.push({
            //             label: property.charAt(0).toUpperCase() + property.slice(1),
            //             property: property
            //         });
            //     });
            //     oTable.removeAllColumns();
            //     oColumns.forEach(function(column) {
            //         var oColumn = new sap.ui.table.Column({
            //             label: new sap.m.Text({ text: column.label }),
            //             template: new sap.m.Text({ text: "{" + column.property + "}" })
            //         });
            //         oTable.addColumn(oColumn);
            //     });
            // },
            click: function() {
                var oTable = this.getView().byId("table2");
                var oItems = oTable.getItems();
                var iTotalItems = oItems.length;
                if (this._iVisibleRowIndex < iTotalItems) {
                    oItems[this._iVisibleRowIndex-1].addStyleClass("blur");
                    var oCurrentItem = oItems[this._iVisibleRowIndex];
                    oCurrentItem.setVisible(true);
                    this._iVisibleRowIndex++;
                    
                }

            },
            // pdf:function(){
            //     var doc = new jspdf();
            //     var otable=this.byId("table2");
            //     var tabledata=otable.getModel().getData();
            //     doc.autoTable({
            //         head: [tabledata[0]], 
            //         body: tabledata.slice(1) 
            //     });
            //     doc.save('table.pdf');
            // }
            addcolumns:function(){
                var col=this.getView().byId("table2");
                var newcol=new Column({
                    header: new Text({ text: "New Column" }),
                    width : "100px"
                });
                col.addColumn(newcol);
            },
            direct:function(){
                window.location.href="https://sapui5.hana.ondemand.com/"
            }
              
        });
    });
