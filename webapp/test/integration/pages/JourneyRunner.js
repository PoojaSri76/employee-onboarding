sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"assetmanagementanalytical/test/integration/pages/AssetsList.gen",
	"assetmanagementanalytical/test/integration/pages/AssetsObjectPage.gen",
	"assetmanagementanalytical/test/integration/pages/AssetAllocationsObjectPage.gen"
], function (JourneyRunner, AssetsListGenerated, AssetsObjectPageGenerated, AssetAllocationsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('assetmanagementanalytical') + '/test/flp.html#app-preview',
        pages: {
			onTheAssetsListGenerated: AssetsListGenerated,
			onTheAssetsObjectPageGenerated: AssetsObjectPageGenerated,
			onTheAssetAllocationsObjectPageGenerated: AssetAllocationsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

