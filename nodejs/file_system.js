import fs from 'fs';

// 해당 경로의 파일 내용 가져오기
function getContents(filePath) {
    if (!fs.existsSync(filePath)) {
        return {
            success: false,
            error: {
                message: `${filePath} not exists`
            }
        };
    }
    return {
        success: true,
        data: fs.readFileSync(filePath, {
            encoding: "utf8",
            flag: "r",
        })
    }
}

// 해당 경로에 파일 쓰기
function writeFile(filePath, data) {
    return fs.writeFileSync(filePath, data);
}