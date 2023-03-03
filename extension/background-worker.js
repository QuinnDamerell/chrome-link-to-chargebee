// Add the context menu
chrome.contextMenus.create(
{
    "id": "chargebee-link-user",
    "title": "Open User In ChargeBee",
    "type": "normal",
    "contexts": ["selection"]
});
chrome.contextMenus.onClicked.addListener(contextMenuClickHandler);

// Add a listener, so when the icon is clicked on the extension bar it opens chargebee.
chrome.action.onClicked.addListener(function(tab)
{
    chrome.tabs.create({'url': "https://octoeverywhere.chargebee.com" }, function(tab) {});
});

function contextMenuClickHandler(info, tab)
{
    if(info.menuItemId !== "chargebee-link-user")
    {
        return;
    }
    let selection = info.selectionText
    if(selection === undefined || selection === null)
    {
        return;
    }

    selection = selection.toLowerCase().trim()
    url = ""
    if(selection.indexOf('@') !== -1)
    {
        url= `https://octoeverywhere.chargebee.com/d/customers/${selection}`
    }
    else
    {
        url= `https://octoeverywhere.chargebee.com/customers?view_code=all&Customers.search=${selection}`
    }
    chrome.tabs.create({'url': url }, function(tab) {});
}