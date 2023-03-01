chrome.runtime.onInstalled.addListener(function()
{
    // Add the context menu
    chrome.contextMenus.create(
    {
        "id": "chargebee-link-user",
        "title": "Open User In ChargeBee",
        "type": "normal",
        "contexts": ["selection"]
    });

    chrome.contextMenus.onClicked.addListener(contextMenuClickHandler);
})

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