import { Sheet } from "./sheet";

function main() {
    const sheetName = "テストシート";
    const book: GoogleAppsScript.Spreadsheet.Spreadsheet  = SpreadsheetApp.getActiveSpreadsheet();
    const sheet: GoogleAppsScript.Spreadsheet.Sheet = book.getSheetByName(sheetName) ?? Sheet.createSheet(book, sheetName);
    sheet.getRange(1,1).setValue("バリューセット");
}
