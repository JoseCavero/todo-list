sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("jose.cavero.todolist.controller.ListView", {
            onInit: function () {

            },
            onListItemPress: function (oEvent) {
                var oSelectedItem = oEvent.getSource();
                var oCtxt = oSelectedItem.getBindingContext();
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteDetail", {
                    ID: oCtxt.getProperty("ID")
                });

            }
        });
    });
