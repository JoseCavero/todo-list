sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/core/routing/History"
],
   /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
   function (Controller, History) {
       "use strict";

       return Controller.extend("jose.cavero.todolist.controller.detail", {
         onInit: function () {
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this._oRouter.getRoute("RouteDetail").attachPatternMatched(this._oRoutePatternMatched, this);
         },
         _oRoutePatternMatched: function (oEvent) {
            var sPath = "/todos/" + oEvent.getParameter("arguments").ID;
            this.getView().bindElement(sPath);
         },
         onNavPress: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
   
            if (sPreviousHash !== undefined) {
               window.history.go(-1);
            } else {
               this._oRouter.navTo("RouteListView");
            }
   
         },
         onCheck: function (oEvent) {
            // prepare path
            var oView = this.getView();
            var oContext = oView.getBindingContext();
            var sPath = oContext.getPath() + "/completed"

            // set property
            var oModel = oView.getModel();
            oModel.setProperty(sPath, oModel.getProperty(sPath)===true ? false : true);
         }
       });
   });
