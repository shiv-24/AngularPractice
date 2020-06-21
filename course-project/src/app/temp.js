sap.ui
    .define(
        ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
        function (Controller, UIComponent) {
            "use strict";

            return Controller
                .extend(
                    "webapp.controller.BaseController",
                    {

                        // homeLink : new sap.m.Link({
                        // text : "Home"
                        // }),
                        links: [],

                        // onInit : function() {
                        // this.homeLink.attachPress(this.moveToHome.bind(this));
                        // this.links.push(this.homeLink);
                        // },

                        /**
                         * Convenience method for accessing the
                         * router.
                         * 
                         * @public
                         * @returns {sap.ui.core.routing.Router}
                         *          the router for this
                         *          component
                         */
                        getRouter: function () {
                            return UIComponent
                                .getRouterFor(this);
                        },

                        /**
                         * Convenience method for getting the
                         * view model by name.
                         * 
                         * @public
                         * @param {string}
                         *            [sName] the model name
                         * @returns {sap.ui.model.Model} the
                         *          model instance
                         */
                        getModel: function (sName) {
                            return this.getView().getModel(
                                sName);
                        },

                        /**
                         * Convenience method for setting the
                         * view model.
                         * 
                         * @public
                         * @param {sap.ui.model.Model}
                         *            oModel the model instance
                         * @param {string}
                         *            sName the model name
                         * @returns {sap.ui.mvc.View} the view
                         *          instance
                         */
                        setModel: function (oModel, sName) {
                            return this.getView().setModel(
                                oModel, sName);
                        },

                        getCookie: function (cname) {
                            var name = cname + "=";
                            var ca = document.cookie.split(';');
                            for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) == 0) {
                                    return c.substring(
                                        name.length,
                                        c.length);
                                }
                            }
                            return "";
                        },
                        getLinks: function () {
                            return this.links.slice();
                        },
                        addLink: function (linkToAdd) {
                            var ifAdded = false;
                            for (var link in this.links) {
                                if (this.links[link].getText() === linkToAdd
                                    .getText()) {
                                    ifAdded = true;
                                    break;
                                }
                            }
                            if (!ifAdded)
                                this.links.push(linkToAdd);
                        },
                        removeLink: function (linkToRemoveId) {
                            this.links
                                .splice(linkToRemoveId, 1);
                        },
                        removeRestLinks: function (linkName) {
                            console.log(
                                "link name to remove is ",
                                linkName);
                            var indexToRemove = -1;
                            for (var i = 0; i < this.links.length; i++) {
                                if (this.links[i].getText() === linkName) {
                                    indexToRemove = i;
                                    break;
                                }
                            }
                            if (indexToRemove != -1) {
                                for (var i = indexToRemove + 1; i < this.links.length; i++) {
                                    this.removeLink(i);
                                }
                            }
                        },
                        // createLink: function(linkText, linkHref,
                        // linkPressFunction){
                        //			
                        // }

                    });

        });