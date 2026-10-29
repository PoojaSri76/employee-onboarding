sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        InspectAsset: function (oContext, aSelectedContexts) {

            if (!aSelectedContexts || aSelectedContexts.length !== 1) {
                sap.m.MessageBox.warning("Please select one asset.");
                return;
            }

            var oAsset = aSelectedContexts[0].getObject();
            console.log(oAsset)

            var sStatus = oAsset.status;
            var sCondition = oAsset.condition;

            var sMessage =
                "Asset Tag: " + oAsset.assetTag +
                "\nAsset Name: " + oAsset.assetName +
                // "\nSerial Number: " + (oAsset.serialNumber || "-") +
                "\nCondition: " + sCondition +
                "\nStatus: " + sStatus +
                "\n\nInspection Result: ";

            if (sStatus === "RETIRED") {

                sap.m.MessageBox.error(
                    sMessage + "Asset is retired and cannot be reused.",
                    { title: "Asset Inspection Report" }
                );

            } else if (sStatus === "MAINTENANCE") {

                sap.m.MessageBox.warning(
                    sMessage + "Asset is currently under maintenance.",
                    { title: "Asset Inspection Report" }
                );

            } else if (sCondition === "DAMAGED") {

                sap.m.MessageBox.error(
                    sMessage + "Asset is damaged. Repair or replacement required.",
                    { title: "Asset Inspection Report" }
                );

            } else if (sStatus === "ALLOCATED") {

                sap.m.MessageBox.information(
                    sMessage + "Asset is already allocated to an employee.",
                    { title: "Asset Inspection Report" }
                );

            } else if (sCondition === "FAIR") {

                sap.m.MessageBox.warning(
                    sMessage + "Physical inspection is recommended before allocation.",
                    { title: "Asset Inspection Report" }
                );

            } else if (
                sStatus === "AVAILABLE" &&
                (sCondition === "NEW" || sCondition === "GOOD")
            ) {

                sap.m.MessageBox.success(
                    sMessage + "Asset is ready for employee handover.",
                    { title: "Asset Inspection Report" }
                );

            } else {

                sap.m.MessageBox.warning(
                    sMessage + "Unable to determine inspection readiness.",
                    { title: "Asset Inspection Report" }
                );
            }
        }
    };
});
