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

            },
            onAddTodo: function (oEvent) {
                // Example to recorver value from oEvent
               var sTitle = oEvent.getParameter("value");

               // NO nee to do it because we binded it to model
               // Get the data model
               var oData = this.getView().getModel().getData();
               // Build the new task item
               var oNewTask = {
                    ID: oData.todos.length,
                    title: "Tarea de química",
                    category: "Lengua",
                    description: "Ejercicios de sintaxis",
                    completed: false
               }
               oData.todos.push(oNewTask);
               oData.newEntry = "";
               this.getView().getModel().setData(oData);
            }
        });
    });
