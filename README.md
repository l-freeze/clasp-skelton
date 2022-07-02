自分用

# clasp skelton project

### step1
```
mkdir clasp-skelton
cd clasp-skelton/
npm install -g typescript
npm install -g @google/clasp
npm install -g tslint
npm install @types/google-apps-script
npm install eslint
```

### step2

```
cat << EOT > .gitignore
*.DS_Store
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.npm
.env
.nyc_output
*.lock
build
coverage
node_modules
tmp
.clasprc.json
EOT
```

### step3

```
npx tsc --init
npx eslint --init
```
>   And VSCode extension eslint

### step4 

```
clasp login --no-localhost
```

### step5

グーグルドライブから`Google apps scripts`を作り、開き、URLの`projects/***********/edit`の部分をメモる

### step6 

`vim .clasp.json`
```
{
    "scriptId":"step5でメモったID",
    "rootDir":"PATH/TO/PROJECT_ROOT/src",
    "fileExtension": "ts",
    "filePushOrder": ["main.ts"]
}
```
ex: ,"rootDir":"F:\\dev\\clasp\\clasp-skelton\\src"
ex: ,"rootDir":"~/clasp/clasp-skelton/src"


### step7

`vim appscript.json`
```
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "webapp": {
    "access": "MYSELF",
    "executeAs": "USER_DEPLOYING"
  }

}
```
※webapp.access: `UNKNOWN_ACCESS, DOMAIN, ANYONE, ANYONE_ANONYMOUS, MYSELF`

### step8
`clasp push`でgoogle driveにpush

### setp9

`clasp deploy -d claspでデプロイ`

### step10
`clasp deployments`でデプロイの確認

### step11
`clasp deploy -i AKfycbwdk3l-uQAI9g_CDVzbt6uX5cNGI8tDl3ME44qudSg6M-5Gvi42WC7c4IQEZMjSQ-2L -d claspでデプロイして更新`
-i はdeploymentsで確認したid

----

## GAS best practice
| bad | good |
| --- | --- |
| export function | export class |

Bad pattern was not working on GAS