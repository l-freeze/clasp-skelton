import { Sheet } from "./sheet";
import { Fetch } from "./lib";

function doGet(request: any) {
    return  HtmlService.createTemplateFromFile("html/index.html").evaluate();
}

function doPost(request: any) {
    return  HtmlService.createTemplateFromFile("html/index.html").evaluate();
    //const parameterName = request.parameter.parameter_name;
    //const params = JSON.parse(request.postData.getDataAsString());
}

function include(filename: string) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent()
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

function sampleText(): string{
    return 'サンプルテキスト';
}

async function fetchJson(url: string, formData: {[key:string]: string}){
    const req = Fetch.fetchJsonGet(url, formData, 'utf-8');
    return req;
}

function run(){
    main();
}

async function main() {
    Logger.log('このソースはデプロイしてGETでアクセスするとhtmlが表示される');
}

