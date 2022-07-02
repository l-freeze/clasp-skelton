//https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app
type Encode = 'utf-8'|'shift-jis'|'euc-jp';

export class Fetch {
    static fetchJsonPost(url: string, data: object, encode?: Encode){
        encode = encode ?? 'utf-8';
        const options = (data => ({'method': 'post','payload': data}))(data);
        const resp = UrlFetchApp.fetch(url, options)
        return JSON.parse(resp.getContentText(encode))
    }

    static fetchJsonGet(url: string, data: object, encode?: Encode){
        encode = encode ?? 'utf-8';
        const options = (data => ({'method': 'get','payload': data}))(data);
        const resp = UrlFetchApp.fetch(url, options)
        return JSON.parse(resp.getContentText(encode))
    }

}

