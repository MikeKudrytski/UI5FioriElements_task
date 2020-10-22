sap.ui.controller("UI5FioriElements_task.ext.controller.ObjectPageExt", {
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function(oEvent){
			var CategoryID = oEvent.context.getProperty("CategoryID")
			sap.m.MessageToast.show(CategoryID);
		});
	},

	onClickActionCategoriesHeader1: function (oEvent) {}
});