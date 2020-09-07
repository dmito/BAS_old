/*global QUnit*/

sap.ui.define([
	"ns/testABAP/controller/item.controller"
], function (Controller) {
	"use strict";

	QUnit.module("item Controller");

	QUnit.test("I should test the item controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
