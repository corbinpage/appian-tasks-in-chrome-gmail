# appian-tasks-in-chrome-gmail

## Installation
* Import the Appian app
* Add environment to manifest.json
* Add environment to content.js
* Add Gmail to Cross-site whitelist
* Install Chrome Extension

## Alternate Development Options
* Embedded Interface
  * Chrome Extensions don't allow inline JS which Appian’s dynamic loading file uses. 
    * Only way to override this restriction is to include a hash of Appian's JS file in the permissions section of manifest.json, except them Appian's JS wouldn't be dynamic.
    * To resolve the issue, Appian would need to remove the inline JS or create an external library that didn't need to be loaded dynamically.
* Web API
  * Use Chrome Browser Action button & Popup
    * Popups run in their own container, so a user's Appian session is not in scope
    * Basic Auth could be an option but then username and password would have to be stored remotely or in chrome.storage. Larger scope of work.