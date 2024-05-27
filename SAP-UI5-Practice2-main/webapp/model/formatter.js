sap.ui.define([],()=>{
     
        "use strict";

        return {
            oncheck:function(Quantity){
                var msg="";
                if(Quantity>3){
                        msg=Quantity+" is more";
                }
                else{
                        msg=Quantity+" is less";
                }
                return msg;

        }
        };
            
 });