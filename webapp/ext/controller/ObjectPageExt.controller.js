sap.ui.controller("UI5FioriElements_task.ext.controller.ObjectPageExt", {
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			var CategoryID = oEvent.context.getProperty("CategoryID");
			sap.m.MessageToast.show(CategoryID);
		});
	},

	onClickActionCategoriesHeader2: function (oEvent) {
		sap.m.MessageToast.show("Hello World!!");
	},
	onClickActionCategoriesSections1: function (oEvent) {
		this.getOwnerComponent().getModel().callFunction("/toActiveStatus", {
			method: "GET",
			success: function() {
				this.getView();
			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error to Active Status!");
			}
		});
	}
});