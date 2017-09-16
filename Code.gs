function doGet(e) { 
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = ss.getSheetByName("DATA");
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]; //read headers
  var nextRow = 1; // get next row
  var cell = sheet.getRange('a1');
  var col = 0;
  
  var val = e.parameter.val;
  if (val == 'C')
    cell.offset(nextRow, col).setValue(0);
  else
    cell.offset(nextRow, col).setValue(val);
  
  
}

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
  var sheet = ss.getSheetByName("DATA");
  var cell = sheet.getRange('a1');
  cell.offset(1, 0).setValue(0);
}
