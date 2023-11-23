import { read, utils, writeFile } from "xlsx";

export const useExcel = () => {
    const exportExcel = <T extends string = any>(
        data: Record<T, any>[],
        excelName: string,
        sheetName: string = "第一页"
    ) => {
        // 1. json => worksheet
        const sheet = utils.json_to_sheet(data);
        // 2. 新建 workbook
        const workbook = utils.book_new();
        // 3. worksheet => workbook
        utils.book_append_sheet(workbook, sheet, sheetName);
        // 4. 下载 workbook
        writeFile(workbook, `${excelName}.xls`);
    };

    const parseExcel = async <RowType>(file: File) => {
        // 限制文件只能是 Excel 文件
        if (!/\.(xlsx|xls|csv)$/.test(file.name)) {
            throw new Error("文件格式错误，请上传 Excel 文件");
        }
        const _fileToSheet = async (file: File) => {
            // 1. blob 读取为 arrayBuffer
            const res = await file.arrayBuffer();
            // 2. 读取为 workBook 对象
            const workBook = read(res);
            // 3. 读取 sheet 页数据
            return workBook.Sheets;
        };
        const sheets = await _fileToSheet(file);

        const sheetsJSON: RowType[][] = []; // [sheet1, sheet2] => [[{行数据1},{2}], sheet2]
        const sheetsHTML: string[] = [];
        // 分多页和单页 sheet 解析成 JSON 和 html
        Object.keys(sheets).forEach(sheet => {
            sheetsJSON.push(utils.sheet_to_json(sheets[sheet]));
            sheetsHTML.push(utils.sheet_to_html(sheets[sheet]));
        });

        // 4. 通过 utils 中的方法将表数据转为 JSON 数组
        // 5. 也可以转成 html 进行预览，但是这个 html 没有样式
        return Promise.resolve({ sheetsJSON, sheetsHTML });
    };
    return { exportExcel, parseExcel };
};
