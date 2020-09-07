/*global QUnit*/

sap.ui.define([
	"ns/testPBH/controller/Item.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Item Controller");

	QUnit.test("I should test the Item controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
