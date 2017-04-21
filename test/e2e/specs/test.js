// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
// Goes in $project_folder/test/e2e/specs/

module.exports = {
	"Test home page": function(browser) {
		const devServer = browser.globals.devServerURL;
		browser
			.url(devServer)
			.waitForElementVisible('body', 2000)
			.assert.containsText('h1', 'Good Afternoon Chad!')
			.assert.containsText('.row-eq-height .tall-col .well h2', 'Current Weather')
			.assert.containsText('.row-eq-height .tall-col .row .col-sm-12 .well h2', 'Quote of the Day:')
			.end();
	}
}
