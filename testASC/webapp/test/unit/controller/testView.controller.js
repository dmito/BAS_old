/*global QUnit*/

sap.ui.define([
	"ns/testASC/controller/testView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("testView Controller");

	QUnit.test("I should test the testView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
