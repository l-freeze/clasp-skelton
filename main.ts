import { Sheet } from "./sheet";
import { Fetch } from "./lib";

function run(){
    main();
}

async function main() {
    const sheetName = "テストシート";
    const book: GoogleAppsScript.Spreadsheet.Spreadsheet  = SpreadsheetApp.getActiveSpreadsheet();
    const sheet: GoogleAppsScript.Spreadsheet.Sheet = book.getSheetByName(sheetName) ?? Sheet.createSheet(book, sheetName);
    sheet.getRange(1,1).setValue("バリューセット");


    const url = 'https://zipcloud.ibsnet.co.jp/api/search';
    //const url = 'https://httpbin.org/post';
    //const url = 'https://auto-worker.com/sample.json';
    const formData = {
        'name': 'tester',
        'job': 'programer',
        'zipcode': '9102171'
    }

    const fetch01 = Fetch.fetchJsonPost(url, formData, 'utf-8');
    console.log(fetch01);


    const fetch02 = Fetch.fetchJsonGet('https://auto-worker.com/sample.json', formData, 'utf-8');
    console.log(fetch02);
}

