function getANAData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160514083352/http://ducks.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('ANA!A1').setValue(cellFunction);
}

function getCHIData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160511102752/http://blackhawks.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('CHI!A1').setValue(cellFunction);
}

function getDALData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160512001823/http://stars.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('DAL!A1').setValue(cellFunction);
}

function getLAKData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160423044639/http://kings.nhl.com/club/stats.htm' + queryString + '","table",7)';

  SpreadsheetApp.getActiveSheet().getRange('LAK!A1').setValue(cellFunction);
}

function getMINData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160428184256/http://wild.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('MIN!A1').setValue(cellFunction);
}

function getNSHData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160527163459/http://predators.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('NSH!A1').setValue(cellFunction);
}

function getSJSData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160622141918/http://sharks.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('SJS!A1').setValue(cellFunction);
}

function getSTLData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160525140705/http://blues.nhl.com/club/stats.htm' + queryString + '","table",5)';

  SpreadsheetApp.getActiveSheet().getRange('STL!A1').setValue(cellFunction);
}

function getDETData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160424230457/http://redwings.nhl.com/club/stats.htm' + queryString + '","table",5)';

  SpreadsheetApp.getActiveSheet().getRange('DET!A1').setValue(cellFunction);
}

function getFLAData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160426083958/http://panthers.nhl.com/club/stats.htm' + queryString + '","table",5)';

  SpreadsheetApp.getActiveSheet().getRange('FLA!A1').setValue(cellFunction);
}

function getNYIData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160527145212/http://islanders.nhl.com/club/stats.htm' + queryString + '","table",5)';

  SpreadsheetApp.getActiveSheet().getRange('NYI!A1').setValue(cellFunction);
}

function getNYRData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160428172755/http://rangers.nhl.com/club/stats.htm' + queryString + '","table",5)';

  SpreadsheetApp.getActiveSheet().getRange('NYR!A1').setValue(cellFunction);
}

function getPHIData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160426204625/http://flyers.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('PHI!A1').setValue(cellFunction);
}

function getPITData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160622162944/http://penguins.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('PIT!A1').setValue(cellFunction);
}

function getTBLData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160525150038/http://lightning.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('TBL!A1').setValue(cellFunction);
}

function getWSHData() {
  var queryString = Math.random();
  var cellFunction = '=IMPORTHTML("https://web.archive.org/web/20160513204246/http://capitals.nhl.com/club/stats.htm' + queryString + '","table",4)';

  SpreadsheetApp.getActiveSheet().getRange('WSH!A1').setValue(cellFunction);
}