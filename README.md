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

```
clasp create --title healthchecker
# --parentId <SpreadSheetId>
```

### step6 

`vim .clasp.json`
```
{
    "scriptId":"***************************************",
    "rootDir":"****************************************",
    "parentId":[
        "********************************************"
    ],
    "fileExtension": "ts",
    "filePushOrder": ["main.ts"]
}
```

### step7

`vim appscript.json`
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}


----

## GAS best practice
| bad | good |
| --- | --- |
| export function | export class |

Bad pattern was not working on GAS