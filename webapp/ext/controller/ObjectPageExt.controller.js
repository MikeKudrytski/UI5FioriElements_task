sap.ui.controller("UI5FioriElements_task.ext.controller.ObjectPageExt", {
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			var CategoryID = oEvent.context.getProperty("CategoryID");
			sap.m.MessageToast.show(CategoryID);
		});
	},

	onClickActivate: function (oEvent) {
		sap.m.MessageToast.show("Hello World!!");
	},
	
	onClickDelete: function (oEvent) {
		var path = oEvent.getSource().getBindingContext().getPath() + "/StatusID";
		
		this.getOwnerComponent().getModel().callFunction("/toActiveStatus", {
			method: "GET",
			urlParameters: {
				"CategoryID": oEvent.getSource().getBindingContext().getObject().CategoryID,
				"StatusID": 3
			},
			success: function() {
				
				this.getOwnerComponent().getModel().setProperty(path, 3);
				this.getOwnerComponent().getModel().submitChanges();
				this.getOwnerComponent().getModel().refresh();
				sap.m.MessageToast.show("Статус изменён!");
				
			}.bind(this),
			error: function() {
				
				sap.m.MessageToast.show("Ошибка изменения статуса!");
				
			}
		});
	}
});