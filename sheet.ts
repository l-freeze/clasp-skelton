export class Sheet{

    static createSheet(
        book: GoogleAppsScript.Spreadsheet.Spreadsheet, 
        sheetName: string
    ) : GoogleAppsScript.Spreadsheet.Sheet{
        const sheet: GoogleAppsScript.Spreadsheet.Sheet = book.insertSheet();
        sheet.setName(sheetName);
        return sheet;
    }
}
