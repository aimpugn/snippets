/*
"dependencies": {
    "xlsx": "0.18.5"
}
*/
// xlsx 파일 읽기
import * as XLSX from "xlsx/xlsx.mjs";
import * as fs from "fs";

XLSX.set_fs(fs);

// workbook 가져오기
var workbook = XLSX.readFile(
    "/Users/rody/VscodeProjects/test-nodejs/tmp/card_info.xlsx"
);

// 시트 가져오기. Sheets 오브젝트에서 키/밸류로 관리
let ws = workbook.Sheets["result"];

// 데이터를 json 배열로 만들기
const data_1 = XLSX.utils.sheet_to_json(ws, { header: 1 });