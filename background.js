
chrome.runtime.onInstalled.addListener((detail) => {
	if (detail.reason == chrome.runtime.OnInstalledReason.INSTALL) {
		if (navigator.userAgent.includes("Firefox")) {
			chrome.tabs.create({
				url: "dist/index.html",
			});
		} else {
			chrome.tabs.create({
				url: "chrome://newtab",
			});
		}

	}
});
