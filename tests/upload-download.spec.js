const { test,expect } = require('@playwright/test');
const ExcelJS = require('exceljs');

async function writeExcelData(searchText,replaceText,change,filePath) //change object
{

const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile(filePath)
const worksheet = workbook.getWorksheet('Sheet1');

const output = await readExcel(worksheet,searchText);

const cell = worksheet.getCell(output.row,output.column + change.colChange)
cell.value = replaceText;
await workbook.xlsx.writeFile(filePath)

}

async function readExcel(worksheet,searchText)
{
     let output = {row: -1,column : -1};
    worksheet.eachRow((row,rowNumber)=>

{
row.eachCell((cell,colNumber)=>
{
    if(cell.value==searchText)
    {
output.row = rowNumber;
output.column = colNumber;
    }})})
    return output;
}

//writeExcelData('Meenu',350,{rowChange:0, colChange:2},"C:\\Users\\arjungupta\\Downloads\\ExcelDownloadTest.xlsx");


test('Upload Download Excel',async({page})=>
{
    const textSearch = 'Mango';
    const updateValue = 400;
await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
const downloadPromise = page.waitForEvent('download');
await page.getByRole('button',{name:'Download'}).click();
const download = await downloadPromise;
await download.saveAs("C:\\Users\\arjungupta\\Downloads\\download.xlsx");

await writeExcelData(textSearch,updateValue,{rowChange:0, colChange:2},"C:\\Users\\arjungupta\\Downloads\\download.xlsx");
//Ho sakta hai upload start ho jaye jab Excel file abhi update hi ho rahi ho isliye await
await page.locator('#fileinput').setInputFiles("C:\\Users\\arjungupta\\Downloads\\download.xlsx");

const textLocator= page.getByText(textSearch)
const desiredRow = await page.getByRole('row').filter({has : textLocator});

console.log(await desiredRow.locator("#cell-4-undefined").textContent());
await expect(desiredRow.locator("#cell-4-undefined")).toHaveText(String(updateValue));



})
