function onOpen()
{
    SpreadsheetApp.getUi().createMenu("🐻").addItem("Exporter", "OpenSidebar").addToUi();
}

function Include(filename)
{
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function OpenSidebar()
{
    var html = HtmlService.createTemplateFromFile("Frontend/Page").evaluate();
    SpreadsheetApp.getUi().showSidebar(html);
}