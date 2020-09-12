import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showChat = true;
  projectaccessmessage = localStorage.getItem('message');
  showloginpage = true;
  validation = true;
  savedname = localStorage.getItem('username');
  savedusername = JSON.parse(this.savedname);
  loginapp = true;
  signup = false;
  project = "";
  validatename = true;
  preloaddata = false;
  system_inventory_record = {};
  projectData = { "form_entity": "New project", "form_fields": { "project_tabs": [{ "mainfields": [{ "aname": "Application", "name": "application", "index": 1, "id": "text", "required": true }, { "aname": "Project", "name": "project", "index": 2, "id": "text", "required": true }, { "aname": "Start date", "name": "start_date", "index": 3, "id": "Date", "type": "Date", "required": true }, { "aname": "End date", "name": "end_date", "index": 4, "id": "Date", "type": "Date", "required": true }, { "aname": "QM", "name": "QM", "index": 5, "id": "text", "required": true }, { "aname": "Domain", "name": "domain", "options": [{ "name": "Healthcare", "id": 1 }], "index": 6, "id": "Select", "required": true }, { "aname": "Time zone", "name": "timezone", "options": [{ "offset": -12, "isdst": false, "name": "(UTC-12:00) International Date Line West", "abbr": "DST", "value": "Dateline Standard Time" }, { "offset": -11, "isdst": false, "name": "(UTC-11:00) Coordinated Universal Time-11", "abbr": "U", "value": "UTC-11" }, { "offset": -10, "isdst": false, "name": "(UTC-10:00) Hawaii", "abbr": "HST", "value": "Hawaiian Standard Time" }, { "offset": -8, "isdst": true, "name": "(UTC-09:00) Alaska", "abbr": "AKDT", "value": "Alaskan Standard Time" }, { "offset": -7, "isdst": true, "name": "(UTC-08:00) Baja California", "abbr": "PDT", "value": "Pacific Standard Time (Mexico)" }, { "offset": -7, "isdst": true, "name": "(UTC-08:00) Pacific Time (US & Canada)", "abbr": "PDT", "value": "Pacific Standard Time" }, { "offset": -7, "isdst": false, "name": "(UTC-07:00) Arizona", "abbr": "UMST", "value": "US Mountain Standard Time" }, { "offset": -6, "isdst": true, "name": "(UTC-07:00) Chihuahua, La Paz, Mazatlan", "abbr": "MDT", "value": "Mountain Standard Time (Mexico)" }, { "offset": -6, "isdst": true, "name": "(UTC-07:00) Mountain Time (US & Canada)", "abbr": "MDT", "value": "Mountain Standard Time" }, { "offset": -6, "isdst": false, "name": "(UTC-06:00) Central America", "abbr": "CAST", "value": "Central America Standard Time" }, { "offset": -5, "isdst": true, "name": "(UTC-06:00) Central Time (US & Canada)", "abbr": "CDT", "value": "Central Standard Time" }, { "offset": -5, "isdst": true, "name": "(UTC-06:00) Guadalajara, Mexico City, Monterrey", "abbr": "CDT", "value": "Central Standard Time (Mexico)" }, { "offset": -6, "isdst": false, "name": "(UTC-06:00) Saskatchewan", "abbr": "CCST", "value": "Canada Central Standard Time" }, { "offset": -5, "isdst": false, "name": "(UTC-05:00) Bogota, Lima, Quito", "abbr": "SPST", "value": "SA Pacific Standard Time" }, { "offset": -4, "isdst": true, "name": "(UTC-05:00) Eastern Time (US & Canada)", "abbr": "EDT", "value": "Eastern Standard Time" }, { "offset": -4, "isdst": true, "name": "(UTC-05:00) Indiana (East)", "abbr": "UEDT", "value": "US Eastern Standard Time" }, { "offset": -4.5, "isdst": false, "name": "(UTC-04:30) Caracas", "abbr": "VST", "value": "Venezuela Standard Time" }, { "offset": -4, "isdst": false, "name": "(UTC-04:00) Asuncion", "abbr": "PST", "value": "Paraguay Standard Time" }, { "offset": -3, "isdst": true, "name": "(UTC-04:00) Atlantic Time (Canada)", "abbr": "ADT", "value": "Atlantic Standard Time" }, { "offset": -4, "isdst": false, "name": "(UTC-04:00) Cuiaba", "abbr": "CBST", "value": "Central Brazilian Standard Time" }, { "offset": -4, "isdst": false, "name": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan", "abbr": "SWST", "value": "SA Western Standard Time" }, { "offset": -4, "isdst": false, "name": "(UTC-04:00) Santiago", "abbr": "PSST", "value": "Pacific SA Standard Time" }, { "offset": -2.5, "isdst": true, "name": "(UTC-03:30) Newfoundland", "abbr": "NDT", "value": "Newfoundland Standard Time" }, { "offset": -3, "isdst": false, "name": "(UTC-03:00) Brasilia", "abbr": "ESAST", "value": "E. South America Standard Time" }, { "offset": -3, "isdst": false, "name": "(UTC-03:00) Buenos Aires", "abbr": "AST", "value": "Argentina Standard Time" }, { "offset": -3, "isdst": false, "name": "(UTC-03:00) Cayenne, Fortaleza", "abbr": "SEST", "value": "SA Eastern Standard Time" }, { "offset": -2, "isdst": true, "name": "(UTC-03:00) Greenland", "abbr": "GDT", "value": "Greenland Standard Time" }, { "offset": -3, "isdst": false, "name": "(UTC-03:00) Montevideo", "abbr": "MST", "value": "Montevideo Standard Time" }, { "offset": -3, "isdst": false, "name": "(UTC-03:00) Salvador", "abbr": "BST", "value": "Bahia Standard Time" }, { "offset": -2, "isdst": false, "name": "(UTC-02:00) Coordinated Universal Time-02", "abbr": "U", "value": "UTC-02" }, { "offset": -1, "isdst": true, "name": "(UTC-02:00) Mid-Atlantic - Old", "abbr": "MDT", "value": "Mid-Atlantic Standard Time" }, { "offset": 0, "isdst": true, "name": "(UTC-01:00) Azores", "abbr": "ADT", "value": "Azores Standard Time" }, { "offset": -1, "isdst": false, "name": "(UTC-01:00) Cape Verde Is.", "abbr": "CVST", "value": "Cape Verde Standard Time" }, { "offset": 1, "isdst": true, "name": "(UTC) Casablanca", "abbr": "MDT", "value": "Morocco Standard Time" }, { "offset": 0, "isdst": false, "name": "(UTC) Coordinated Universal Time", "abbr": "CUT", "value": "UTC" }, { "offset": 1, "isdst": true, "name": "(UTC) Dublin, Edinburgh, Lisbon, London", "abbr": "GDT", "value": "GMT Standard Time" }, { "offset": 0, "isdst": false, "name": "(UTC) Monrovia, Reykjavik", "abbr": "GST", "value": "Greenwich Standard Time" }, { "offset": 2, "isdst": true, "name": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", "abbr": "WEDT", "value": "W. Europe Standard Time" }, { "offset": 2, "isdst": true, "name": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", "abbr": "CEDT", "value": "Central Europe Standard Time" }, { "offset": 2, "isdst": true, "name": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris", "abbr": "RDT", "value": "Romance Standard Time" }, { "offset": 2, "isdst": true, "name": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb", "abbr": "CEDT", "value": "Central European Standard Time" }, { "offset": 1, "isdst": false, "name": "(UTC+01:00) West Central Africa", "abbr": "WCAST", "value": "W. Central Africa Standard Time" }, { "offset": 1, "isdst": false, "name": "(UTC+01:00) Windhoek", "abbr": "NST", "value": "Namibia Standard Time" }, { "offset": 3, "isdst": true, "name": "(UTC+02:00) Athens, Bucharest", "abbr": "GDT", "value": "GTB Standard Time" }, { "offset": 3, "isdst": true, "name": "(UTC+02:00) Beirut", "abbr": "MEDT", "value": "Middle East Standard Time" }, { "offset": 2, "isdst": false, "name": "(UTC+02:00) Cairo", "abbr": "EST", "value": "Egypt Standard Time" }, { "offset": 3, "isdst": true, "name": "(UTC+02:00) Damascus", "abbr": "SDT", "value": "Syria Standard Time" }, { "offset": 3, "isdst": true, "name": "(UTC+02:00) E. Europe", "abbr": "EEDT", "value": "E. Europe Standard Time" }, { "offset": 2, "isdst": false, "name": "(UTC+02:00) Harare, Pretoria", "abbr": "SAST", "value": "South Africa Standard Time" }, { "offset": 3, "isdst": true, "name": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", "abbr": "FDT", "value": "FLE Standard Time" }, { "offset": 3, "isdst": true, "name": "(UTC+02:00) Istanbul", "abbr": "TDT", "value": "Turkey Standard Time" }, { "offset": 3, "isdst": true, "name": "(UTC+02:00) Jerusalem", "abbr": "JDT", "value": "Israel Standard Time" }, { "offset": 2, "isdst": false, "name": "(UTC+02:00) Tripoli", "abbr": "LST", "value": "Libya Standard Time" }, { "offset": 3, "isdst": false, "name": "(UTC+03:00) Amman", "abbr": "JST", "value": "Jordan Standard Time" }, { "offset": 3, "isdst": false, "name": "(UTC+03:00) Baghdad", "abbr": "AST", "value": "Arabic Standard Time" }, { "offset": 3, "isdst": false, "name": "(UTC+03:00) Kaliningrad, Minsk", "abbr": "KST", "value": "Kaliningrad Standard Time" }, { "offset": 3, "isdst": false, "name": "(UTC+03:00) Kuwait, Riyadh", "abbr": "AST", "value": "Arab Standard Time" }, { "offset": 3, "isdst": false, "name": "(UTC+03:00) Nairobi", "abbr": "EAST", "value": "E. Africa Standard Time" }, { "offset": 4.5, "isdst": true, "name": "(UTC+03:30) Tehran", "abbr": "IDT", "value": "Iran Standard Time" }, { "offset": 4, "isdst": false, "name": "(UTC+04:00) Abu Dhabi, Muscat", "abbr": "AST", "value": "Arabian Standard Time" }, { "offset": 5, "isdst": true, "name": "(UTC+04:00) Baku", "abbr": "ADT", "value": "Azerbaijan Standard Time" }, { "offset": 4, "isdst": false, "name": "(UTC+04:00) Moscow, St. Petersburg, Volgograd", "abbr": "RST", "value": "Russian Standard Time" }, { "offset": 4, "isdst": false, "name": "(UTC+04:00) Port Louis", "abbr": "MST", "value": "Mauritius Standard Time" }, { "offset": 4, "isdst": false, "name": "(UTC+04:00) Tbilisi", "abbr": "GST", "value": "Georgian Standard Time" }, { "offset": 4, "isdst": false, "name": "(UTC+04:00) Yerevan", "abbr": "CST", "value": "Caucasus Standard Time" }, { "offset": 4.5, "isdst": false, "name": "(UTC+04:30) Kabul", "abbr": "AST", "value": "Afghanistan Standard Time" }, { "offset": 5, "isdst": false, "name": "(UTC+05:00) Ashgabat, Tashkent", "abbr": "WAST", "value": "West Asia Standard Time" }, { "offset": 5, "isdst": false, "name": "(UTC+05:00) Islamabad, Karachi", "abbr": "PST", "value": "Pakistan Standard Time" }, { "offset": 5.5, "isdst": false, "name": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi", "abbr": "IST", "value": "India Standard Time" }, { "offset": 5.5, "isdst": false, "name": "(UTC+05:30) Sri Jayawardenepura", "abbr": "SLST", "value": "Sri Lanka Standard Time" }, { "offset": 5.75, "isdst": false, "name": "(UTC+05:45) Kathmandu", "abbr": "NST", "value": "Nepal Standard Time" }, { "offset": 6, "isdst": false, "name": "(UTC+06:00) Astana", "abbr": "CAST", "value": "Central Asia Standard Time" }, { "offset": 6, "isdst": false, "name": "(UTC+06:00) Dhaka", "abbr": "BST", "value": "Bangladesh Standard Time" }, { "offset": 6, "isdst": false, "name": "(UTC+06:00) Ekaterinburg", "abbr": "EST", "value": "Ekaterinburg Standard Time" }, { "offset": 6.5, "isdst": false, "name": "(UTC+06:30) Yangon (Rangoon)", "abbr": "MST", "value": "Myanmar Standard Time" }, { "offset": 7, "isdst": false, "name": "(UTC+07:00) Bangkok, Hanoi, Jakarta", "abbr": "SAST", "value": "SE Asia Standard Time" }, { "offset": 7, "isdst": false, "name": "(UTC+07:00) Novosibirsk", "abbr": "NCAST", "value": "N. Central Asia Standard Time" }, { "offset": 8, "isdst": false, "name": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi", "abbr": "CST", "value": "China Standard Time" }, { "offset": 8, "isdst": false, "name": "(UTC+08:00) Krasnoyarsk", "abbr": "NAST", "value": "North Asia Standard Time" }, { "offset": 8, "isdst": false, "name": "(UTC+08:00) Kuala Lumpur, Singapore", "abbr": "MPST", "value": "Singapore Standard Time" }, { "offset": 8, "isdst": false, "name": "(UTC+08:00) Perth", "abbr": "WAST", "value": "W. Australia Standard Time" }, { "offset": 8, "isdst": false, "name": "(UTC+08:00) Taipei", "abbr": "TST", "value": "Taipei Standard Time" }, { "offset": 8, "isdst": false, "name": "(UTC+08:00) Ulaanbaatar", "abbr": "UST", "value": "Ulaanbaatar Standard Time" }, { "offset": 9, "isdst": false, "name": "(UTC+09:00) Irkutsk", "abbr": "NAEST", "value": "North Asia East Standard Time" }, { "offset": 9, "isdst": false, "name": "(UTC+09:00) Osaka, Sapporo, Tokyo", "abbr": "TST", "value": "Tokyo Standard Time" }, { "offset": 9, "isdst": false, "name": "(UTC+09:00) Seoul", "abbr": "KST", "value": "Korea Standard Time" }, { "offset": 9.5, "isdst": false, "name": "(UTC+09:30) Adelaide", "abbr": "CAST", "value": "Cen. Australia Standard Time" }, { "offset": 9.5, "isdst": false, "name": "(UTC+09:30) Darwin", "abbr": "ACST", "value": "AUS Central Standard Time" }, { "offset": 10, "isdst": false, "name": "(UTC+10:00) Brisbane", "abbr": "EAST", "value": "E. Australia Standard Time" }, { "offset": 10, "isdst": false, "name": "(UTC+10:00) Canberra, Melbourne, Sydney", "abbr": "AEST", "value": "AUS Eastern Standard Time" }, { "offset": 10, "isdst": false, "name": "(UTC+10:00) Guam, Port Moresby", "abbr": "WPST", "value": "West Pacific Standard Time" }, { "offset": 10, "isdst": false, "name": "(UTC+10:00) Hobart", "abbr": "TST", "value": "Tasmania Standard Time" }, { "offset": 10, "isdst": false, "name": "(UTC+10:00) Yakutsk", "abbr": "YST", "value": "Yakutsk Standard Time" }, { "offset": 11, "isdst": false, "name": "(UTC+11:00) Solomon Is., New Caledonia", "abbr": "CPST", "value": "Central Pacific Standard Time" }, { "offset": 11, "isdst": false, "name": "(UTC+11:00) Vladivostok", "abbr": "VST", "value": "Vladivostok Standard Time" }, { "offset": 12, "isdst": false, "name": "(UTC+12:00) Auckland, Wellington", "abbr": "NZST", "value": "New Zealand Standard Time" }, { "offset": 12, "isdst": false, "name": "(UTC+12:00) Coordinated Universal Time+12", "abbr": "U", "value": "UTC+12" }, { "offset": 12, "isdst": false, "name": "(UTC+12:00) Fiji", "abbr": "FST", "value": "Fiji Standard Time" }, { "offset": 12, "isdst": false, "name": "(UTC+12:00) Magadan", "abbr": "MST", "value": "Magadan Standard Time" }, { "offset": 13, "isdst": true, "name": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old", "abbr": "KDT", "value": "Kamchatka Standard Time" }, { "offset": 13, "isdst": false, "name": "(UTC+13:00) Nuku'alofa", "abbr": "TST", "value": "Tonga Standard Time" }, { "offset": 13, "isdst": false, "name": "(UTC+13:00) Samoa", "abbr": "SST", "value": "Samoa Standard Time" }], "index": 7, "id": "Select", "required": true }, { "aname": "Description", "name": "description", "index": 8, "id": "textbox", "required": true }], "tab_name": "Details", "customfields": [{ "aname": "Licences", "name": "licences", "index": 1, "id": "number", "type": "number", "required": true }] }, { "mainfields": [{ "aname": "System name", "name": "system_name", "index": 1, "id": "text", "required": false }, { "aname": "System ID", "name": "system_id", "index": 2, "id": "text", "required": false }, { "aname": "System Owner", "name": "system_owner", "index": 3, "id": "text", "required": false }], "tab_name": "SCA", "customfields": [{ "aname": "System status", "name": "system_status", "options": ["Planned for Implementation", "Operational", "Retired"], "index": 1, "description": "", "id": "Select", "required": false }, { "aname": "Scope", "name": "Scope", "index": 2, "id": "Text Area", "type": "Text Area", "required": false }, { "aname": "Last validation date", "name": "last_validation_date", "index": 3, "id": "Date", "type": "Date", "required": false }, { "aname": "Validation frequency", "name": "validation_frequency", "index": 4, "description": "Validation frequency", "id": "number", "type": "number" }, { "aname": "cGxp", "name": "cGxp", "options": ["Yes", "No"], "index": 5, "id": "Radio", "required": false }] }] }, "created_on": null, "edit": true, "isactive": "y", "form_id": 2, "timeline": [{ "timeline": [{ "form_entity": "New project", "modified_on": null, "level": "", "roleid": 1, "isactive": "y", "form_id": 2, "ceil": 1, "type": "", "version": 1, "created_by": null, "form_fields": { "project_tabs": [{ "mainfields": [{ "aname": "Application", "name": "application", "index": 1, "id": "text", "required": true }, { "aname": "Project", "name": "project", "index": 2, "id": "text", "required": true }, { "aname": "Start date", "name": "start_date", "index": 3, "id": "Date", "type": "Date", "required": true }, { "aname": "End date", "name": "end_date", "index": 4, "id": "Date", "type": "Date", "required": true }, { "aname": "QM", "name": "QM", "index": 5, "id": "text", "required": true }, { "aname": "Domain", "name": "domain", "index": 6, "id": "Select", "required": true }, { "aname": "Time zone", "name": "timezone", "index": 7, "id": "Select", "required": true }, { "aname": "Description", "name": "description", "index": 8, "id": "textbox", "required": true }], "tab_name": "Details", "customfields": [{ "aname": "Licences", "name": "licences", "index": 1, "id": "number", "type": "number", "required": true }] }, { "mainfields": [{ "aname": "System name", "name": "system_name", "index": 1, "id": "text", "required": false }, { "aname": "System ID", "name": "system_id", "index": 2, "id": "text", "required": false }, { "aname": "System Owner", "name": "system_owner", "index": 3, "id": "text", "required": false }], "tab_name": "System inventory record", "customfields": [{ "aname": "System status", "name": "system_status", "options": ["Planned for Implementation", "Operational", "Retired"], "index": 1, "description": "", "id": "Select", "required": false }, { "aname": "Scope", "name": "Scope", "index": 2, "id": "Text Area", "type": "Text Area", "required": false }, { "aname": "Last validation date", "name": "last_validation_date", "index": 3, "id": "Date", "type": "Date", "required": false }, { "aname": "Validation frequency", "name": "validation_frequency", "index": 4, "description": "Validation frequency", "id": "number", "type": "number" }, { "aname": "cGxp", "name": "cGxp", "options": ["Yes", "No"], "index": 5, "id": "Radio", "required": false }] }] }, "created_on": null, "modified_by": null }], "ceil": 1 }], "version": 1, "created_by": null };
  newproject = this.projectData.form_fields.project_tabs;
  currenttab = this.projectData.form_fields.project_tabs[0].tab_name;
  newprojectform = false;
  packagevalue = false;
  disableform = false;
  isEdit = false;
  nameexist = false;
  systemnameexist = false;
  peoples = [];
  nouser = false;
  datevalidation = false;
  newComments = {};
  comments = "";
  instructions = true;
  attachcomments = {attachments: []};
  systemcomplianceanalysis = "form_fields";
  scatab1 = "form";
  hidetimeline = false;
  processpackage = [{ "process_level": "L1", "packagelist": [{ "status_code": 55, "process_level": "L1", "created_on": 1559024086818, "name": "Package 28_5", "description": "Demo", "id": 3, "version": 1, "created_by": "qspaceadmin", "status": "Published" }] }, { "process_level": "L2", "packagelist": [{ "status_code": 55, "process_level": "L2", "created_on": 1559024636252, "name": "Package 26_5 L2", "description": "Demo", "id": 4, "version": 1, "created_by": "qspaceadmin", "status": "Published" }] }];
  processpackagelist = this.processpackage;
  template1;
//  usernamecopy = angular.copy(username);
  signeditior = true;
  attachments = [];
  projects = [];
  selected = -1;
  projectinput = {};
  showsca = false;
  scaform = false;
  scatypes = ["Summary", "GxP Assessment", "Software category", "Business Impact Assessment", "High level system assessment", "Part 11"];
  current_type = "Summary";
  view = false;
  preloader = false;
  position = [];
  selectedroles = [];
  roles = [{ "rolename": "Qualitymanager", "check": false, "exist": false }, { "rolename": "Tester", "check": false, "exist": false }, { "rolename": "Reviewer", "check": false, "exist": false }, { "rolename": "Developer", "check": false, "exist": false }];
  rolescopy = Object.assign({}, this.roles);
  
  constructor() { }

  ngOnInit(): void {
    // focus('j_username');
var curr_url = window.location.href;
var str = document.referrer;
var prevIndx = str.indexOf('?');
var query = {}, arr, result, next;
var headerHeight = $('header').height();
var app = this;
var windowHeight = $(window).height();
$('.chat-window').css('height', windowHeight - 182);
var chatBoxHeight = $('.chat-window').height();
var headMessage = $('#head-melssage').height();
var chatType = $('.chat-type').height();

$('.commentheight').css('height', chatBoxHeight - (headMessage + chatType + 120) + 'px');
$('.chat-panel').css('min-height', chatBoxHeight - (headMessage + chatType + 40) + 'px');
$('.chat-window').css('bottom', '-' + (chatBoxHeight - 40) + 'px');


// Chitra added chat icon implemetation starts

while (prevIndx != -1) {
  next = str.indexOf('&', prevIndx + 1);
  if (next == -1) next = str.length;
  result = str.substring(prevIndx + 1, next);
  arr = result.split('=');
  query[arr[0]] = arr[1];
  prevIndx = str.indexOf('&', prevIndx + 1);
}
localStorage.setItem('previousurl', JSON.stringify({ "value": query }));

var currIndx = curr_url.indexOf('?');
var query1 = {}, arr1, result1, next1;

while (currIndx != -1) {
  next1 = curr_url.indexOf('&', currIndx + 1);
  if (next1 == -1) next1 = curr_url.length;
  result1 = curr_url.substring(currIndx + 1, next1);
  arr1 = result1.split('=');
  query1[arr1[0]] = arr1[1];
  currIndx = curr_url.indexOf('&', currIndx + 1);
}
localStorage.setItem('currenturl', JSON.stringify({ "value": query1 }));

// Chrome 1+
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

//  var edge = /Edge/.test(navigator.userAgent);

if (window.chrome) {
  var isChrome2 = true;
}
else {
  var isChrome2 = false;
}
if (isChrome || isChrome2 == true) {
  this.showloginpage = true;
}
else {
  this.showloginpage = false;
}


var userAgent = $window.navigator.userAgent;
$rootScope.samlParameter = "width=600,height=500,top=50,left=400,location=0,titlebar=no,toolbar=0"


$('#loginform').attr('autocomplete', 'off');

var count = 0;
var lock = false;
$('#password').bind("cut copy paste", function (e) {
  e.preventDefault();
});


$http({
  method: 'GET',
  url: './timezones.json.txt',

}).
  success(function (data) {
    this.timezones = data;
  });





  }
  // app.controller('login', ['$window','$q','$http','loginService','$stateParams','AttachmentServicea','$scope','$attrs','$rootScope','focus','$location','$interval', function($window,$q,$http,loginService,$stateParams,AttachmentServicea,
  //   $scope,$attrs,$rootScope,focus,$location,$interval){
  
hideCommentWindow(){
  this.showChat = true;
  var btn = $(this);
  var card = $('.zoom-card');
  $('.zoom-card').toggleClass('scale-out');
  $('.zoom-card').css('bottom', 70 + 'px');
}
openChat(){
  var btn = $(this);
  this.showChat = false;
  var card = $('.zoom-card');
  $('.zoom-card').toggleClass('scale-out');
  $('.zoom-card').css('bottom', 0 + 'px');
  var chatBoxHeight = $('.chat-window').height();
  var headMessage = $('#head-message').height();
  var chatType = $('.chat-type').height();
  $('.chat-panel').css('min-height', chatBoxHeight - (headMessage + chatType + 80) + 'px');

}



// Chitra added chat icon implemetation End	
checkboxchange(index, options, proj){

  if (!this.project[proj]) {
    this.project[proj] = {};
  }
  if (!this.project[proj].test_data) {
    this.project[proj].test_data = {};
  }
  if (!this.project[proj].test_data[index]) {

    this.project[proj].test_data[index] = [];

  }
  var idx = this.project[proj].test_data[index].indexOf(options);


  if (idx > -1) {
    this.project[proj].test_data[index].splice(idx, 1);
  }
  else {
    this.project[proj].test_data[index].push(options);
  }
  //this.updaterequirement.test_data=this.requirement.test_data;
}

setradio(value, index, index1, pro, f, val){


  if (!this.project[pro]) {
    this.project[pro] = {};
  }

  if (!this.project[pro].test_data) {
    this.project[pro].test_data = {};
  }
  this.project[pro].test_data[index1] = [];
  for (i in value) {
    if (i == index) {

      this.project[pro].test_data[index1].push(value[i].value);
      value[i].check = true;
    } else {


    }
  }
}

logout() {
  this.preload = true;
  //   loginService.getlogout().success(function(){var getlogout= function () {
  /* , params: {project:$rootScope.currentproject,username:$rootScope.UserName,password:$rootScope.Password,role:$rootScope.currentrole,userid:$rootScope.userid roleid:$rootScope.currentgroupid} */
  $http({
    method: 'GET',
    url: './logout',
    headers: { 'Content-Type': 'text/html' }
  })
    .success(function (data) {




      $rootScope.logout = true;
      this.preload = false;
      window.location.href = './log-out.html';
    })
};

calllogin(){
  if (!$rootScope.UserName) {
    var deferred = $q.defer();
    $http.post('./login').success(function (data) {
      if (data.details && data.details.request_array) {
        $rootScope.isSAMLConfigEnabled = data.details.isSAMLConfigEnabled;
        $rootScope.eSignURL = data.details.eSignURL;
        $rootScope.UserName = data.details.username;
        $http.defaults.headers.common.Authorization = 'Bearer ' + data.details.Authorization;
        this.nosystem = false;
        this.projectrequestdetails = data.details.request_array;
        this.sca = data.details.SCA;
      } else {
        this.nosystem = true;
      }

    });
  }
}
changesystemgxp(value, project){
  project.cgxp = value;
}
changesystemdate(value){
  value = value.getTime();

}
changedate(type, value){
  value = value.getTime();


  if (this.system_inventory_record['start_date'] && this.system_inventory_record['end_date'])
    if (this.system_inventory_record['start_date'] < this.system_inventory_record['end_date'])
      this.datevalidation = false;
    else
      this.datevalidation = true;

}





//Project form fields
selecttabvalue(val) {
  this.currenttab = val;
}

getPackageLevel() {
  if ($rootScope.UserName) {
    $http({
      method: 'GET',
      url: './rest/newrequest/processpackagelevel',
      headers: {
        'Content-Type': 'application/json',

      }
    }).
      success(function (data) {
        //	this.packagevalue=true;
        this.packagevalue = true;
        this.levelList = data.creation;
        this.selectedlevel = this.levelList[0];
        this.domains = data.creation;
        this.levels = data.processPackage;
        this.levels_value = data.processPackage[0].packagelist;
        /* 
         this.levelList= data.creation;
         this.levels=data.processPackage;
         if(this.levelList.length > 1){
           this.levels_1=data.processPackage[0].process_level;
           this.levels_1Options=data.processPackage[0].packagelist;
           this.levels_2=data.processPackage[1].process_level;
           this.levels_2Options=data.processPackage[1].packagelist;
         } */

        // this.selectedlevel=angular.copy(this.levelList[0]);
      });
  }

}

selectlevel(l) {
  this.packagevalue = false;
  this.selectedlevel = l;
  $http({
    method: 'GET',
    url: './rest/newrequest/getpackage',
    headers: { 'Content-Type': 'application/json' },
    params: { "level": l },
    data: this.comment
  }).success(function (data) {
    this.packagevalue = true;
    this.levels_value = data;

  });


  if (this.project.L1)
    this.project.L1 = '';
  if (this.project.L2)
    this.project.L2 = '';
  if (this.project.L3)
    this.project.L3 = '';
  this.parents = []
}


getParent(packageid) {
	/* if(this.selectedlevel=='L3')
							this.parents=[{'name':'Parent1','level':'L1','id':2},{'name':'Parent2','level':'L2','id':3}];
							if(this.selectedlevel=='L2')
							this.parents=[{'name':'Parent1','level':'L1'}];
						for(i in this.parents){
							this.project[this.parents[i].level]=this.parents[i].id;
						} */

  if (this.selectedlevel != 'L1') {
    $http({
      method: 'GET',
      url: './rest/newrequest/getparent',
      headers: { 'Content-Type': 'application/json' },
      params: { "id": packageid },
      data: this.comment
    }).success(function (data) {
      /* if(this.selectedlevel=='L3')
      this.parents=[{'name':'Parent1','level':'L1'},{'name':'Parent2','level':'L2'}];
      if(this.selectedlevel=='L2')
      this.parents=[{'name':'Parent1','level':'L1'}]; */

      this.parents = data;
      for (i in this.parents) {
        this.project[this.parents[i].level] = this.parents[i].id;
      }

    });
  }
}
changeProcess(id) {
  id2 = 0;
  //this.leveldata=false;
  this.leveldata = true;
  $http({
    method: 'get',
    url: './rest/newrequest/mappedpackage',
    headers: {
      'Content-Type': 'application/json', 'groupid': $rootScope.currentgroupid
    },
    params: { 'packageid': id }

  }).success(function (data) {

    //this.levels_2Options=data;
    //this.levels_2Options=[{"name":"Process Package L2","id":3}]; 
  });
}
initialheight() {
  var headerHeight = $('header').height();
  var topPanelHeight = $('.top-panel').height();
  //alert(topPanelHeight);
  var windowHeight = $(window).height();
  $('.chat-window').css('right', '143px');
  $('.panel_height').css('height', (windowHeight - headerHeight - 255) + 'px');
}
asknewproject(){
  this.OptionName = [];
  /*Comment box*/

  $('.chat-window').css('height', windowHeight - 182);
  var chatBoxHeight = $('.chat-window').height();
  var headMessage = $('#head-message').height();
  var chatType = $('.chat-type').height();

  $('.chat-panel').css('min-height', chatBoxHeight - (headMessage + chatType) + 'px');


  $('.commentheight').css('height', chatBoxHeight - (headMessage + chatType + 120) + 'px');
  $('.chat-window').css('bottom', '-' + (chatBoxHeight - 40) + 'px');
  $("#head-message").click(function () {
    $('.chat-window').css('right', '143px');
    this.viewcommenticon = false;

    $(".chat-message").toggleClass("show-chat");
    //$(".message-notification").toggleClass("open-comments");
    $(".comments-inner").toggleClass("open-comments");
    $('.wind').css('border', '1px solid #ddd');

  });
  $(".chat-header").click(function () {
    $(".subchat-window").toggleClass("show-chat");

    //$(".message-notification").toggleClass("open-comments");
  });
  $(".chat-header").click(function () {
    $(".sub-chat-window").show();
  });

  /* 	var x = document.getElementById("inner");
    if(x.hasClass("open-comments")){
      this.hidebutton=true;
    }
    else{
      this.hidebutton=false;
    } */

  $http({
    method: 'GET',
    url: './rest/tctype/newsystem/project',
    headers: {
      'Content-Type': 'application/json',

    }
  }).
    success(function (data) {
      this.SCA = data.SCA;
      this.editRequest = true;
      if (data.isSAMLConfigEnabled)
        $rootScope.isSAMLConfigEnabled = data.isSAMLConfigEnabled;
      this.newproject = data.metadata.project_tabs;
      //this.newproject=this.projectData.mainfields[0].aname;
      this.currenttab = this.newproject[0].tab_name;
      this.project_workflow = data.workflow;
      this.system_inventory_record = {};
      this.project = {};
      this.disableform = false;
      this.loginapp = !this.loginapp;
      this.newprojectform = true;
      // this.project_data=data[0];
    });

  this.getPackageLevel();

  getTestingTypeList(indx, sysFields){
    var obj = indx - 1;
    this.optionsDomain = [];
    if (sysFields == 'mainfileds') {
      this.selectOptions = this.newproject[0].mainfields[obj].options;
    } else if (sysFields == 'customfields') {
      this.selectOptions = this.newproject[0].customfields[obj].options;
    } else {
      this.selectOptions = this.newproject[0].masterParams[obj].options;
    }

    $('.type-dropdown').toggleClass('open');

  }

  getOption(option, entity, index, sysData, fieldName) {
    this.OptionName[index] = option;
    var json = JSON.stringify(option, function (key, value) {
      if (key === "$$hashKey") {
        return undefined;
      }
      return value;
    });
    if (!this.project[entity]) {
      this.project[entity] = {};
    }
    if (sysData == "main_data") {
      if (!this.project[entity].main_data) {
        this.project[entity].main_data = {};
      }
      if (fieldName == 'domain') {
        this.project[entity].main_data[index] = option.name;
      } else {
        this.project[entity].main_data[index] = json;
      }

    } else if (sysData == "test_data") {
      if (!this.project[entity].test_data) {
        this.project[entity].test_data = {};
      }
      this.project[entity].test_data[index] = option;
    } else {
      if (!this.project[entity].risk_data) {
        this.project[entity].risk_data = {};
      }
      this.project[entity].risk_data[index] = option;
    }



  }


}

getdeliverables(id, system, domainname){
  this.system = system;
  this.id = id;
  this.domain = domainname;
  var params = {
    project_id: $rootScope.currentprojectid
  };
  $http({
    method: 'GET',
    url: './rest/project/deliverables',
    params: params,
    headers: {
      'Content-Type': 'application/json',
      'project': system + '_' + id
    }
  }).
    success(function (data) {
      this.listofdeliverables = data
      $('#deliverables').modal('show');
    })
}

systemtemplate(id, system){
  this.currentsystemid1 = id;
  var params = { id: id }
  $http({
    method: 'GET',
    url: './rest/newrequest/templatelist',
    params: params,
    headers: {
      'Content-Type': 'application/json',
      'project': system + '_' + id
    }
  }).
    success(function (data) {
      this.listoftemplates = data
      $('#newsystemtemplate').modal('show');
    })

}

createtemplate(tempid){
  $http({
    method: 'POST',
    url: './rest/project',
    headers: { 'Content-Type': 'application/json' },
    data: { 'id': this.currentsystemid1, 'template_id': tempid }
  }).success(function (data) {
    $('#newsystemtemplate').modal('hide');
  });
}


checkexisting(name, type) {
  var params = {
    "type": type
  };
  $http({
    method: 'GET', url: './rest/newproject/' + name, headers: {
      'Content-Type': 'application/json',
      'groupid': $rootScope.currentgroupid
    }, params: params
  }).
    success(function (data) {

      if (data == true) {
        if (type == 'project')
          this.nameexist = true;
        else
          this.systemnameexist = true;
      } else {
        if (type == 'project')
          this.nameexist = false;
        else
          this.systemnameexist = false;
      }


    })
}



oneditqm(adminname) {
  if (adminname) {
    this.admin = false;
    $http({
      method: 'GET',
      url: './rest/getuserslist/' + adminname,
      headers: {
        'Content-Type': 'application/json',
        projectid: $rootScope.currentprojectid,
        type: 'All'
      }
    }).
      success(function (data) {
        if (data.length > 0) {
          this.peoples = data;
          this.nouser = false;
        } else
          this.nouser = true;
      });

  }
};
getTimevalue(tabname, index, value) {
  this.project[tabname].test_data[index] = value.getTime();
}
changedateproject(fieldvalue, value, entity, index) {
  value = value.getTime();
  this.project[entity].main_data[index] = value;
  if (fieldvalue == 'start_date') {
    this.startDate = value;
    if (this.endDate) {
      if (this.startDate < this.endDate) {
        this.datevalidation = false;
      }
      else {
        this.datevalidation = true;
      }
    }
  }
  else {
    //value=value.getTime();
    this.endDate = value;

    if (this.startDate) {
      if (this.startDate < this.endDate) {
        this.datevalidation = false;
      }
      else {
        this.datevalidation = true;
      }


    }
  }



}

//add comments

addcomments(comments, e){
  if (e.keyCode == 13 && comments) {
    var currentdate = new Date();
    this.comment = {};
    this.comment.created_on = currentdate.getTime();
    this.comment.created_by = $rootScope.UserName;
    this.comment.image = $rootScope.Userprofileimage;
    //	this.comment.version=this.requirement.version;
    this.comment.comments = comments;
    this.comment.discussion = [];
    if (!this.project.comments)
      this.project.comments = [];
    this.project.comments.push(this.comment);
    this.newComments.comments = "";
    // delete this.newComments;
    // delete comments;

    $http({
      method: 'POST',
      url: './rest/newrequest/comments',
      headers: { 'Content-Type': 'application/json', 'project': $rootScope.currentproject },
      params: { projectid: this.projectid },
      data: this.comment
    }).success(function (data) {
      this.comments = data;
      this.newcomment = {};
    });

  }
}

//Http call for comments

/*this.addcomments(comments,e){
	if(e.keyCode==13&&comments){	
	 var currentdate = new Date();	
	 this.comment={} 
	 this.comment.created_on=currentdate.getTime();
	 this.comment.created_by=$rootScope.UserName;
	this.comment.image=$rootScope.Userprofileimage;
	//this.comment.version=this.newsystem.version;
	this.comment.comments=comments;
     this.comment.discussion=[];
   
 $http({
			method:'POST',
			url:'./rest/newrequest/comments',
			headers:{'Content-Type':'application/json','project':$rootScope.currentproject}	,
			params:{projectid:this.projectid},
			data:this.comment		
			}).success(function(data)
			{
				this.comments=data;
		  this.newcomment = {};
			});
}
}*/



adddiscussioncomment(posiotioncomm, comment, e){

  this.comment = {};
  if (e.keyCode == 13 && comment) {
    var currentdate = new Date();
    this.comment.created_on = currentdate.getTime();
    this.comment.created_by = $rootScope.UserName;
    this.comment.image = $rootScope.Userprofileimage;
    this.comment.comments = comment;
    //this.project.comments[posiotioncomm].discussion.push(this.comment);

    this.discussionlength = this.project.comments[posiotioncomm].discussion.length;
    $http({
      method: 'POST',
      url: './rest/newrequest/discussion',
      headers: { 'Content-Type': 'application/json' },
      params: { "projectid": this.projectid, "position": posiotioncomm, "discussion": this.discussionlength },
      data: this.comment
    }).success(function (data) {
      this.project.comments = data;
      this.discussion = "";
      this.comment = {};

    });

  }
}

getdiscussionuserimage(i, parentindex, childindex){


  $http({ method: 'POST', url: './download', headers: { "filepath": i, 'Content-Type': 'application/json' }, responseType: 'arraybuffer' }).
    success(function (data, status, config, headers) {
      var file = new Blob([data], { type: false });
      var fileURL = URL.createObjectURL(file);

      this.project.comments[parentindex].discussion[childindex].profile = fileURL;

    });
}
addComments() {
  this.instructions = false;
  this.addComment = true;
}
setFilesComments(element, addmore) {
  if (!addmore) {
    this.attachcomments = {};
    this.attachcomments.attachments = []

  }
  this.commentupload = [];
  this.$apply(function ($scope) {
    this.commentupload = element.files;
    uploadFileComment();
    //this.progressVisible = false
  });
};
uploadFileComment() {
  this.attachcomments = {};
  this.attachcomments.attachments = [];
  for (var i = 0; i < this.commentupload.length; i++) {
    AttachmentServicea.uploadFile(this.commentupload[i]).success(function (data) {
      this.attachcomments.attachments.push(data[0]);


    });
    $('#UploadComments').modal('show');
  }
}

downloadAttachments(files)
{
  AttachmentServicea.downloadFile(files);
}

deleteCommentsAttachment(items, index){
  items.splice(index, 1);
}
applyscreenshot(){
  this.attachcomments.screens = [];
  $('#UploadScreens').modal('show');
}

setFilesComments(element) {
  this.commentupload = [];
  this.$apply(function ($scope) {
    this.commentupload = element.files;
    uploadFileComment();

  });
};
uploadFileComment() {

  for (var i = 0; i < this.commentupload.length; i++) {
    AttachmentServicea.uploadFile(this.commentupload[i]).success(function (data) {
      this.attachcomments.attachments.push(data[0]);
    });
    $('#UploadComments').modal('show');
  }
}

//Upload attachments

uploadCommentsFiles(){
  var currentdate = new Date();
  var comment = {}
  comment.created_on = new Date().getTime();
  comment.created_by = $rootScope.UserName;
  comment.image = $rootScope.Userprofileimage;

  comment.discussion = [];
  comment.attachments = this.attachcomments.attachments;
  comment.title = this.attachmentname;
  this.project.comments = [];
  this.project.comments.push(comment);
  this.attachmentname = '';
  $http({
    method: 'POST',
    url: './rest/newrequest/comments',
    headers: { 'Content-Type': 'application/json' },
    params: { "package_id": this.process_package_id },
    data: comment
  }).success(function (data) {
    this.project.comments = data;
    this.comment = {};
  });
  $('#UploadComments').modal('hide');

}

//Upload Comments

paste(event){

  this.loader = true;
  // use event.originalEvent.clipboard for newer chrome versions
  var items = (event.clipboardData || event.originalEvent.clipboardData).items;
  // find pasted image among pasted items
  var blob = null;

  if (items[0].type.indexOf("image") === 0) {
    blob = items[0].getAsFile();
    //alert("done"+blob);
    // alert(angular.toJson(items[i])) ;
    this.file = true;
  }
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  var base64 = window.btoa(blob);
  //alert(base64);
  var URL = self.URL || self.webkitURL || self;
  var object_url = URL.createObjectURL(blob);
  URL.revokeObjectURL(object_url);
  var filename = object_url.lastIndexOf('/');
  this.filename11 = object_url.substring(30);

  // load image if there is a pasted image
  if (blob !== null) {

    reader.onload(event) {
      files = event.target.result;
      //alert(files);
      var blob2 = new Blob([blob], { type: 'image/png' });
      if (!this.attachments)
        this.screenfile = new File([blob2], this.filename11 + '.png');
      else
        this.screenfile = new File([blob2], 'screen' + this.filename11 + '.png');

      this.upload = [];
      this.upload.push(this.screenfile);
      uploadscreen();
    };


  }


}

uploadscreen() {
  this.attachcomments = {};
  this.attachcomments.screens = [];
  for (var i = 0; i < this.upload.length; i++) {
    AttachmentServicea.uploadFile(this.upload[i]).success(function (data) {
      if (!this.attachcomments.screens)
        this.attachcomments.screens = [];
      this.attachcomments.screens.push(data[0]);

      this.pastescreen = false;
    });
  }
}

uploadCommentsScreens(){
  var currentdate = new Date();
  var comment = {}
  comment.created_on = new Date().getTime();
  comment.created_by = $rootScope.UserName;
  comment.image = $rootScope.Userprofileimage;
  comment.discussion = [];
  comment.screens = this.attachcomments.screens;
  comment.title = this.attachmentname;
  if (!this.project.comments)
    this.project.comments = [];
  this.project.comments.push(comment);


  $('#UploadScreens').modal('hide');

}




getuserimage(i, index){
  $http({ method: 'POST', url: './download', headers: { "filepath": i, 'Content-Type': 'application/json' }, responseType: 'arraybuffer' }).
    success(function (data, status, config, headers) {
      var file = new Blob([data], { type: false });
      var fileURL = URL.createObjectURL(file);
      this.project.comments[index].profile = fileURL;
    });


}



editdeliverables(id, system, domain){
  localStorage.setItem('position', JSON.stringify({ "value": "deliverables" }));
  localStorage.setItem('deliverables_project', JSON.stringify({ "value": system }));
  localStorage.setItem('deliverables_projectid', JSON.stringify({ "value": id }));
  localStorage.setItem('deliverables_domain', JSON.stringify({ "value": domain }));
  $location.path('/login');
  window.location.href = "./index.html"

}

getform(projectdetails, projectid, type, status){
  this.OptionName = [];
  /*Comment box*/

  $('.chat-window').css('height', windowHeight - 90);
  var chatBoxHeight = $('.chat-window').height();
  var headMessage = $('#head-message').height();
  var chatType = $('.chat-type').height();

  $('.chat-panel').css('min-height', chatBoxHeight - (headMessage + chatType) + 'px');


  $('.commentheight').css('height', chatBoxHeight - (headMessage + chatType + 100) + 'px');
  $('.chat-window').css('bottom', '-' + (chatBoxHeight - 40) + 'px');
  $("#head-message").click(function () {

    this.viewcommenticon = false;

    $(".chat-message").toggleClass("show-chat");
    //$(".message-notification").toggleClass("open-comments");
    $(".comments-inner").toggleClass("open-comments");
    $('.wind').css('border', '1px solid #ddd');

  });
  $(".chat-header").click(function () {
    $(".subchat-window").toggleClass("show-chat");

    //$(".message-notification").toggleClass("open-comments");
  });
  $(".chat-header").click(function () {
    $(".sub-chat-window").show();
  });





	/*this.newreqprojectname=projectdetails.domainname+"_"+projectdetails.name+"_"+projectdetails.id;
	this.current_systemid=projectid;
delete this.scastatus_code;
delete this.systemstatus_code;*/
  this.projectid = projectid;
  $http({
    method: 'GET',
    url: './rest/newrequest/getprojectrequest/' + projectid,
    headers: { 'Content-Type': 'application/json' },
  }).
    success(function (data) {

      this.selectedlevel = data.selectedlevel;
      this.levels_value = (data.selectedlevel == 'L3') ? this.levels[2].packagelist : (data.selectedlevel == 'L2') ? this.levels[1].packagelist : this.levels[0].packagelist;

      this.SCA = data.SCA;
      this.editRequest = data.editRequest;
      this.newproject = data.form_fields.project_tabs;
      //this.newproject=this.projectData.mainfields[0].aname;
      this.currenttab = this.newproject[0].tab_name;//workingggg
      this.projectName = data.project_tabs[0].main_data[2];
      this.project_workflow = data.workflow;
      this.system_inventory_record = {};
      this.project = data;
      this.parents = data.Parents;
      this.disableform = false;
      this.loginapp = !this.loginapp;
      this.newprojectform = true;


      //			this.newprojectform=true;

      /*if(data.timeline)
      this.timeline_sysassessment=data.timeline;
      var data=data.result;

      if(type=='project'){
        this.project_data=data[0];
      this.project_workflow=data[0].project_workflow;
  	
        this.system_inventory_record=data[0].system_inventory_record;
      this.system_inventory_record.start_date=data[0].start_date;
      this.system_inventory_record.end_date=data[0].end_date;
      this.system_inventory_record.timezone=data[0].timezone;
    this.system_inventory_record.id=data[0].id;
    this.system_inventory_record.domain_id=this.system_inventory_record.domain_id.toString();
//		this.system_inventory_record.timezone='{"value":"Atlantic Standard Time","abbr":"ADT","offset":-3,"isdst":true,"text":"(UTC-04:00) Atlantic Time (Canada)"}';
      
      this.loginapp=!this.loginapp;
      this.newprojectform=true;
      if(status=='Rejected'){
        this.systemstatus_code=4;
    this.disableform=false;
        }else{
            this.disableform=true;
        }
      }else{
                this.systemcomplianceanalysis=data;
              	
        this.scaform=true;
this.loginapp=false;
        if(status=='Start'||status=='Rejected'){
      this.isEdit=false;

      if(status=='Rejected'){
          this.scastatus_code=4;
      }

        }else{
      this.isEdit=true;
          this.showsca=true;
      	
        }
  	
      }*/

      //this.newproject=data;
      //this.SCA = data.SCA;
      //this.esign=data.esign;
      //	this.newproject=data.metadata.project_tabs;
      //this.ApprovalKey=data.ApprovalKey;
      //this.projectapproval=data.ProjectApproval;

      for (i in this.project.project_tabs) {
        this.project[this.project.project_tabs[i].tab_name] = {
          "main_data": this.project.project_tabs[i].main_data,
          "test_data": this.project.project_tabs[i].test_data,
          "risk_data": this.project.project_tabs[i].masterParams
        };

      }

      this.project['L1'] = this.project.PackageList['L1'];
      this.project['L2'] = this.project.PackageList['L2'];
      this.project['L3'] = this.project.PackageList['L3'];

      //this.currenttab=this.newproject.project_tabs[0].tab_name;
      // this.project_workflow=data.workflow;
      /*  this.system_inventory_record={};
    this.project={};
    this.disableform=false;
    this.loginapp=!this.loginapp;
    this.newprojectform=true;
    this.preloader=false; */

    });

};





callsaml() {
  $('#saml_signature').modal('hide');
  this.saml_status = "inprogress";
  $('#saml_loading').modal({
    backdrop: 'static'
  });
  var stop;
  var myWindow = window.open($rootScope.eSignURL + "?j_username=" + $rootScope.UserName, "", $rootScope.samlParameter);
  localStorage.setItem('samlauthentication', JSON.stringify({
    "value": "inprogress"
  }));

  stop = $interval(function () {

    if (myWindow.closed) {
      $interval.cancel(stop);
      $interval.cancel();
      $('#saml_loading').modal('hide');
    }
    stop = $interval(function () {
      this.samlauthentication = JSON.parse(localStorage.getItem('samlauthentication'));
      if (this.samlauthentication) {
        if (this.samlauthentication.value == 'success') {
          this.saml_status = "submitting";
          $interval.cancel(stop);
          $interval.cancel();
          var esign_system = {};
          esign_system.isSAMLConfigEnabled = $rootScope.isSAMLConfigEnabled;
          esign_system.username = $rootScope.UserName;
          this.submitnewsystem(esign_system);
        } else if (this.samlauthentication.value == 'failed') {
          this.saml_status = "failed";
        }
      }
    }, 500);
  });
}

openesign(){
  this.esignuser = {}
  this.esign_system = {};
  if (!this.nameexist && !this.systemnameexist) {
    if (!$rootScope.isSAMLConfigEnabled || $rootScope.isSAMLConfigEnabled == "NO") {
      this.authentication = true;
      $('#e-sign-system').modal('show');
      $('#e-sign-sca').modal('show');
    } else {
      this.Meaning_of_Esign = "By applying my eSignature, I deem this entity as fit for review and subsequent approval / rejection."

      this.authentication = true;
      $('#saml_signature').modal({
        backdrop: 'static'
      });
    }
  }
}

updateopenesign(){
  this.esign_system = {};

  $('#updateproject-e-sign-system').modal('show');
  // $('#e-sign-sca').modal('show');
}

getTestingTypeList(indx, sysFields){
  var obj = indx - 1;
  this.optionsDomain = [];
  if (sysFields == 'mainfileds') {
    this.selectOptions = this.newproject[0].mainfields[obj].options;
  } else if (sysFields == 'customfields') {
    this.selectOptions = this.newproject[0].customfields[obj].options;
  } else {
    this.selectOptions = this.newproject[0].masterParams[obj].options;
  }

  $('.type-dropdown').toggleClass('open');

}

getOption(option, entity, index, sysData, fieldName) {
  this.OptionName[index] = option;
  var json = JSON.stringify(option, function (key, value) {
    if (key === "$$hashKey") {
      return undefined;
    }
    return value;
  });
  if (!this.project[entity]) {
    this.project[entity] = {};
  }
  if (sysData == "main_data") {
    if (!this.project[entity].main_data) {
      this.project[entity].main_data = {};
    }
    if (fieldName == 'domain') {
      this.project[entity].main_data[index] = option.name;
    } else {
      this.project[entity].main_data[index] = json;
    }

  } else if (sysData == "test_data") {
    if (!this.project[entity].test_data) {
      this.project[entity].test_data = {};
    }
    this.project[entity].test_data[index] = option;
  } else {
    if (!this.project[entity].risk_data) {
      this.project[entity].risk_data = {};
    }
    this.project[entity].risk_data[index] = option;
  }



}

systemdetails(){
  this.selectiontab = true;

}



/*this.form_fields=[{"form_fields":{"mainfields":[{"aname":"System id","name":"systemid","description":"System id","id":"Text","type":"number"},{"aname":"System name","name":"systemname","id":"text","required":true},{"aname":"System role","name":"systemrole","id":"text","required":true},{"aname":"System owner","name":"systemowner","id":"text","required":true}],"customfields":[{"aname":"System scope","name":"systemscope","index":1,"id":"text","required":true}]},"name":"Overview"},{"result":"","values":[{"question":"Does the system automate or control any of: Manufacturing, Sterilization, Formulation, Labeling, Inventory, or Critical Environment Controls?","value":""},{"question":"Is the system the original source of data for the automation or control of any of: Manufacturing, Sterilization, Formulation, Labeling, Inventory, or Critical Environment Controls?","value":""},{"question":"Is this system used to generate, manage and analyze data concerning Product Quality, Safety, Efficacy, Strength Stability or identify?","value":""},{"question":"Is this system used for raw and in-process material, clinical data analysis, automated inspection equipment and laboratory data system?","value":""},{"question":"Is this system used for cGxP Support Functions like Calibration, Maintenance Scheduling, Quality Trending?","value":""},{"question":"Is this system used for market complaints or adverse event reporting? / electronic document submission/reporting to regulatory agencies","value":""},{"question":"Is this system used to handle CAPA, Change Control, Incident, Audit, testing, lab event?","value":""},{"question":"Is this system used to maintain records of training of personnel?","value":""},{"question":"Is the system used to maintain copies of protocol pertaining to non-clinical study?","value":""}],"name":"GxP Assessment"},{"result":"","values":[{"examples":[{"example":" Internally and externally developed IT Applications or Process Control Systems"},{"example":"Custom elements with Configured Software packages, such as Ladder Logic in a Programmable Logic Controller, functional enhancements to standard software products)"}],"question":"Is this software developed specifically for Sun Pharma?","value":""},{"examples":[{"example":"LIMS"},{"example":"Data acquisition systems"},{"example":"SCADA"},{"example":" ERP / MRP"},{"example":"Clinical Trial Monitoring"},{"example":"Distributed Control System"},{"example":"Adverse Event Reporting"},{"example":"Electronic Document Management Systems"},{"example":"Customer Relationship Management"}],"question":"Is this a standard product developed by a Vendor and can be configure to meet Sun Pharma Business process/Flow? (Software, often very complex, that can be configured by the user to meet the specific needs of the users business process. Software code is not altered)","value":""},{"examples":[{"example":"Firmware based applications"},{"example":" COTS software"},{"example":"Instruments"}],"question":"Is this a standard Product developed by a Vendor and Not Configurable, and is proven by very substantial industry installed base?","value":""},{"question":"Is this a Standard Layered software (i.e. upon which applications are built) or software used to manage the operating environment?","exampletypes":[{"examples":[{"example":" Physical / Virtual Servers"},{"example":"Operating Systems"},{"example":"Storage Systems"},{"example":"Network Switches, Routers Firewalls "},{"example":" Database & Middleware Software"}],"name":"Infrastructure Components"},{"examples":[{"example":"Infrastructure Performance Monitoring Tools"},{"example":"Anti-Malware (Anti-Virus) Systems"},{"example":"Active Directory / Identity Management Tools"},{"example":"Client Management Tool (Patch/SW Push Tools)"}],"name":"Infrastructure Tools"}],"value":""}],"name":"Software Category"},{"result":"","values":[{"question":"Is the availability of the system essential for the continued supply of life-saving products (i.e. there is no systems redundency, and without this system, supply will stop)?","value":"","remarks":""},{"question":"Does the loss of availability of this system compromise the Integrity of any cGxP processes or record?","value":""},{"question":"Is the availability of the system essential for time-critical cGxP processes (e.g. product recall)?","value":""}],"name":"Business Impact Assessment"},{"result":"","values":[{"question":" Severity of system failure: - Minor: Failure of the system impacts quality system records but has no immediate impact on product quality, safety or efficacy. - Major: Failure of the system impacts product quality, safety, or efficacy.","value":"","remarks":""},{"question":"Detectability of system failure: - High - a failure will likely be detected through downstrean controls - Low - a failure is unlikely to be detected through downstream controls","value":""},{"question":"Category of system"}],"name":"High Level Risk Assessment"},{"result":"","values":[{"question":"Is this system used to create, modify, distribute, store, control any records required by regulatory agency?","value":""},{"question":"Is this system used to approve/sign any records electronically required by regulatory agency?","value":""}],"name":"Electronic Records, Electronic Signatures"}]*/
scatab(){
  this.selectiontab = true;


	/*$http({
		method:'GET',
		url:'./rest/configura tion/forms',
		headers:{'Content-Type':'application/json',},
		}).
			success(function(data){
				
				this.systemcomplianceanalysis = data;
					
			});*/

}

scaformtab(scatab){

  this.scatab1 = scatab;
}
hidetimelinefunc(){
  this.hidetimeline = !this.hidetimeline;
}


addfieldcomment(fieldname, value) {

  this.commentpop = {};
  this.commentpop.popupcomment = ""
  this.fieldname = fieldname;
  this.fieldvalue = value;

  $('#commentpopup').modal('show');


};

//Download Attachments

downloadAttachments(files)
{
  AttachmentServicea.downloadFile(files);
}

removeattachment(index){
  this.errormessage = "";
  this.error = false;
  this.uploadfiles = [];
  this.files = [];

}

// process package


selectpackage(){
  this.selectiontab = false;

  $http({
    method: 'GET',
    url: './rest/newrequest/packagedomainlist',
    headers: { 'Content-Type': 'application/json', },
  }).
    success(function (data) {
      this.processpackagelist = data;

    });

}




selecttemplate(id){
  this.currentsystemid = id;
  $http({
    method: 'GET',
    url: './rest/newrequest/templatelist',
    params: {
      'id': id
    }
  }).success(function (data) {
    this.templates = data;
  });
  $('#template-select').modal('show');
}

settempid(id){
  this.template1 = id;
}
createproject(){

  $http({
    method: 'POST',
    url: './rest/newproject',
    headers: { 'Content-Type': 'application/json' },
    data: { 'id': this.currentsystemid, 'template_id': this.template1 }
  }).success(function (data) {
    $('#template-select').modal('hide');
  });
}
onClickdomain(domain){

  if ($rootScope.UserName) {

    $http({
      method: 'GET',
      url: './rest/custom',
      headers: { 'Content-Type': 'application/json', 'id': 0 }


    }).success(function (data) {

      this.customfields = data;


    });
  }

}
cancel_systemesign(){

  $('#e-sign-system').modal('hide');
  $('#e-sign-sca').modal('hide');
  this.esign_system = {};
  this.esign_system.username = "";
  this.esign_system.password = "";
  this.esign_system.agree = false;
  this.reason2 = "";
}

submitnewsystem(esign_system){
  this.preloaddata = true;

  this.project.esignature = { "username": this.username, "esignuser": esign_system.username, "isSAMLConfigEnabled": $rootScope.isSAMLConfigEnabled, "esignpassword": esign_system.password, "esign": 'y', "authentication": true, "comments": esign_system.comments, "meaning_of_esignature": " By applying my eSignature, I deem this entity as fit for review and subsequent approval / rejection." };
  project.selectedlevel = this.selectedlevel;

  $http({
    method: 'POST',
    url: './rest/newrequest',
    headers: { 'Content-Type': 'application/json', status: this.systemstatus_code },

    data: this.project
  })
    .success(function (data) {
      this.preloaddata = false;
      if (!data[0].reason) {
        this.system_inventory_record = {};
        this.projectrequestdetails = data;
        this.loginapp = !this.loginapp;
        this.newprojectform = false;
        this.showsca = false;
        this.scaform = false;
        $('.modal-backdrop').hide();
        $('#saml_loading').modal('hide');
        $('#e-sign-system').modal('hide');
        $('#e-sign-sca').modal('hide');
        this.esign_system = {};
        this.esign_system.username = "";
        this.esign_system.password = "";
        this.esign_system.agree = false;
        window.location.href = './no-projects.html';

      }
      else if (data[0].reason) {
        this.reason2 = data[0].reason;

      }

    })
}

changetime(data){
  data = data.getTime();
}

//Update project call.

updatesubmitnewsystem(esign_system, projectid){
  var params = { projectid: this.projectid }
  this.preloaddata = true;
  //this.project.startdate=this.project.startdate.getTime();
  this.project.esignature = { "username": this.username, "esignuser": esign_system.username, "esignpassword": esign_system.password, "esign": 'y', "authentication": true, "comments": esign_system.comments, "meaning_of_esignature": " By applying my eSignature, I deem this entity as fit for review and subsequent approval / rejection." };
  $http({
    method: 'PUT',
    url: './rest/newrequest/updateprojectrequest', params: params,
    headers: { 'Content-Type': 'application/json', 'groupid': $rootScope.currentgroupid },
    data: this.project
  })
    .success(function (data) {

      $('#updateproject-e-sign-system').modal('hide');
      // $('#e-sign-sca').modal('hide');    
      window.location.href = './no-projects.html';
      //this.cancelproject();

    })
}

cancelprojectrefresh(){
  window.location.href = './no-projects.html';
}

checknumber(num){

  if (Number.isInteger(num) == true) {
    var result = true;
  }
  return result;
}
getnewformsize(){
  var headerHeight = $('header').height();
  var app = this;
  var windowHeight = $(window).height();

  /*$('.overview-height').css('height', (windowHeight - headerHeight-80)+'px');*/
  $('.project-height').css('height', (windowHeight - headerHeight - 500) + 'px')
  $('.sca-overview-height').css('height', (windowHeight - headerHeight - 240) + 'px');
  $('.gxp-height').css('height', (windowHeight - headerHeight - 305) + 'px');
  $('.timeline-height').css('height', (windowHeight - headerHeight - 300) + 'px');
}

$(window).resize(function () {
  this.getnewformsize();

});
submitscaform(esign_system){
  this.preloaddata = true;
  $http({
    method: 'PUT',
    url: './rest/project/gxpdetails',
    headers: { 'Content-Type': 'application/json', projectid: this.current_systemid, 'project': this.newreqprojectname, 'from': 'login', status: this.scastatus_code },
    data: { systemcomplianceanalysis: this.systemcomplianceanalysis, esignature: { "username": this.username, "esignuser": esign_system.username, "esignpassword": esign_system.password, "esign": 'y', "authentication": true, "comments": esign_system.comments, "meaning_of_esignature": " By applying my eSignature, I deem this entity as fit for review and subsequent approval / rejection." } }
  })
    .success(function (data) {
      this.preloaddata = false;
      if (data.length > 0 && data[0].reason) {
        this.reason2 = data[0].reason;

      }
      else {

        $('#e-sign-system').modal('hide');
        $('#e-sign-sca').modal('hide');
        this.projectrequestdetails = data;
        this.loginapp = !this.loginapp;
        this.newprojectform = false;
        this.showsca = false;
        this.scaform = false;

      }


    })
}
cancelproject(){
  this.loginapp = !this.loginapp;
  this.newprojectform = false;
  this.showsca = false;
  this.scaform = false;
}

asksignup(name){
  var noproject = name;
  if (name == 'request') {
    this.username = this.savedname.name;
    this.validatename = false;
  }
  this.projects = [];
  this.position = [];
  /* initial=0;*/
  this.alertmessage = "";
  this.alertmessage1 = "";
  if (this.projectdetails) {
    for (i in this.projectdetails) {
      this.projectdetails[i].attachements = [];
      for (j in this.projectdetails[i].roles) {
        this.projectdetails[i].roles[j].check = false;
      }
    }

  }


  cancelesign(){

    $('#e-sign').modal('hide');
    this.esign = {};
    this.esign.username = "";
    this.esign.password = "";
    this.esign.agree = false;
    this.reason1 = "";

  }
  this.roles = angular.copy(this.rolescopy);
  this.selected = -1;
  this.view = true;
  this.alertmessage = "";
  this.username = "";
  this.validatename = true;
  this.loginapp = !this.loginapp;
  this.signup = !this.signup;
  if (this.signup)
    count = 0;
}

onedit($item, $model, $label){
  for (i in this.projectdetails) {
    if (this.projectdetails[i].project == name) {
      if (this.projects.indexOf(name) > -1) {
        this.projects.push(name);
      }
    }
  }

  onSelect($item, $model, $label) {
    this.$item = $item;
    this.$model = $model;
    this.$label = $label;
  };

  this.projectdetails = angular.copy(this.projectdetails);
}

editusername(name){

  this.validatename = true;
  this.view = false;

  this.username = name;
}

changeedit(){
  this.projects = [];
  this.selected = -1;
  this.alertmessage = "";
  this.position = [];
  this.alertmessage1 = "";
  this.signeditior = false;
  this.validatename = true;


  if (this.projectdetails.length != 0) {
    for (i in this.projectdetails) {
      this.projectdetails[i].attachements = [];
      for (j in this.projectdetails[i].roles) {
        this.projectdetails[i].roles[j].check = false;
      }
    }

  }
  this.roles = angular.copy(this.rolescopy);
}

samlLogin(){
  window.location.href = "./login.html";

}

backtohome(){
  window.location.href = "./index.html";
}


Relogin(){
  // window.location.href =this.ssoURL.value;
  this.loginapp = true;

  this.signup = false;

  window.location.href = "./login.html";


}

/*Upload Attachment*/
setFiles(element) {
  this.$apply(function ($scope) {
    this.upload = element.files;
    uploadfile();
    this.progressVisible = false
  });
};

removeAttachment(index){
  this.projects[this.selected].attachements.splice(index, 1);



}
//Download Attachments
downloadAttachments(files)
{
  AttachmentServicea.downloadFile(files);
}
uploadfile() {
  this.alertmessage = "";
  for (var i = 0; i < this.upload.length; i++) {
    var attachments = AttachmentServicea.uploadFile(this.upload[i]);
    attachments.success(function (data) {
      if (!this.projects[this.selected].attachements) {
        this.projects[this.selected].attachements = [];
        this.projects[this.selected].attachements.push(data[0]);
        /*       if(initial==1){
          this.RequestAccess(this.username,'validation');
        }*/

      }
      else {
        this.projects[this.selected].attachements.push(data[0]);
        /*      if(initial==1){
          this.RequestAccess(this.username,'validation');
        }*/

      }
    });
  }

  /*   if(initial==1){
     this.RequestAccess(this.username,'validation');
   }*/


}

/*this.addprojects(project,e){
  if(e.keyCode==13){
       for(i in this.projectdetails){
          if(this.projectdetails[i].project==project){
    if(this.projects.indexOf(project)==-1){
  this.projects.push(this.projectdetails[i]);
  this.selected=this.projects.length-1;
  this.roles=angular.copy(this.projectdetails[this.selected].roles);
  this.projectinput="";
}
}}
}

}*/

callsubmitfunction(e){
  if (e.keyCode == 13) {
    this.submitform(this.username);

  }
}

selectproject(index){
  this.selected = index;
  this.roles = angular.copy(this.projectdetails[this.selected].roles);
  /* if(initial==1){
     this.RequestAccess(this.username,'validation');
   }*/
}

removeproject(index){

  this.alertmessage1 = "";
  this.position = [];
  for (i in this.projectdetails) {
    if (this.projectdetails[i].project == this.projects[index].project) {
      this.projectdetails[i].attachements = [];
      for (j in this.projectdetails[i].roles) {
        this.projectdetails[i].roles[j].check = false;
      }
    }
  }
  this.projects.splice(index, 1);
  if (this.projects.length != 0) {
    this.selected = this.projects.length - 1;

  }
  else {
    this.selected = -1;
    this.roles = [{ "rolename": "Qualitymanager", "check": false, "exist": false }, { "rolename": "Tester", "check": false, "exist": false }, { "rolename": "Reviewer", "check": false, "exist": false }, { "rolename": "Developer", "check": false, "exist": false }];


  }


  /* if(initial==1){
      this.RequestAccess(this.username,'validation');
    }*/
}

addproject(project){
  this.alertmessage = "";
  $http({
    method: 'Post',
    url: './UserAunthentication',
    headers: { 'Content-Type': 'application/json' },
    params: { 'name': project, 'inputmode': 'searchproject', 'username': this.username }
  }).success(function (data) {
    for (i in this.projectdetails) {
      if (this.projectdetails[i].name == project) {
        var exist = 0
        for (j in this.projects) {
          if (this.projects[j].name == project) {
            ++exist;
          }
        }
        if (exist == 0) {

          this.projects.push(this.projectdetails[i]);
          this.selected = this.projects.length - 1;
          this.projectinput = {};
        }

      }
    }
  });





}

askscaform(){
  this.scaform = true;
  this.loginapp = false;
}

viewscaform(){
  /*Comment box*/

  $('.chat-window').css('height', windowHeight - 182);
  var chatBoxHeight = $('.chat-window').height();
  var headMessage = $('#head-message').height();
  var chatType = $('.chat-type').height();

  $('.chat-panel').css('min-height', chatBoxHeight - (headMessage + chatType) + 'px');


  $('.commentheight').css('height', chatBoxHeight - (headMessage + chatType + 120) + 'px');
  $('.chat-window').css('bottom', '-' + (chatBoxHeight - 100) + 'px');
  $("#head-message").click(function () {

    this.viewcommenticon = false;

    $(".chat-message").toggleClass("show-chat");
    //$(".message-notification").toggleClass("open-comments");
    $(".comments-inner").toggleClass("open-comments");
    $('.wind').css('border', '1px solid #ddd');

  });
  $(".chat-header").click(function () {
    $(".subchat-window").toggleClass("show-chat");

    //$(".message-notification").toggleClass("open-comments");
  });
  $(".chat-header").click(function () {
    $(".sub-chat-window").show();
  });




  this.showsca = true;

  this.loginapp = false;
}

selecttype(name){
  this.current_type = name;
}
/*this.systemcomplianceanalysis=[{"name": "gxp", "result": "GxP", "values": [{"value": "Yes", "question": "Does the system automate or control any of: Manufacturing, Sterilization, Formulation, Labeling, Inventory, or Critical Environment Controls?"}, {"value": "No", "question": "Is the system the original source of data for the automation or control of any of: Manufacturing, Sterilization, Formulation, Labeling, Inventory, or Critical Environment Controls?"}, {"value": "No", "question": "Is this system used to generate, manage and analyze data concerning Product Quality, Safety, Efficacy, Strength Stability or identify?"}, {"value": "No", "question": "Is this system used for raw and in-process material, clinical data analysis, automated inspection equipment and laboratory data system?"}, {"value": "No", "question": "Is this system used for cGxP Support Functions like Calibration, Maintenance Scheduling, Quality Trending?"}, {"value": "No", "question": "Is this system used for market complaints or adverse event reporting? / electronic document submission/reporting to regulatory agencies"}, {"value": "No", "question": "Is this system used to handle CAPA, Change Control, Incident, Audit, testing, lab event?"}, {"value": "No", "question": "Is this system used to maintain records of training of personnel?"}, {"value": "No", "question": "Is the system used to maintain copies of protocol pertaining to non-clinical study?"}]}, {"name": "sc", "result": "Cat 4", "values": [{"value": false, "examples": [{"example": " Internally and externally developed IT Applications or Process Control Systems"}, {"example": "Custom elements with Configured Software packages, such as Ladder Logic in a Programmable Logic Controller, functional enhancements to standard software products)"}], "question": "Is this software developed specifically for Sun Pharma?"}, {"value": true, "examples": [{"example": "LIMS"}, {"example": "Data acquisition systems"}, {"example": "SCADA"}, {"example": " ERP / MRP"}, {"example": "Clinical Trial Monitoring"}, {"example": "Distributed Control System"}, {"example": "Adverse Event Reporting"}, {"example": "Electronic Document Management Systems"}, {"example": "Customer Relationship Management"}], "question": "Is this a standard product developed by a Vendor and can be configure to meet Sun Pharma Business process/Flow? (Software, often very complex, that can be configured by the user to meet the specific needs of the users business process. Software code is not altered)"}, {"value": false, "examples": [{"example": "Firmware based applications"}, {"example": " COTS software"}, {"example": "Instruments"}], "question": "Is this a standard Product developed by a Vendor and Not Configurable, and is proven by very substantial industry installed base?"}, {"value": false, "question": "Is this a Standard Layered software (i.e. upon which applications are built) or software used to manage the operating environment?", "exampletypes": [{"name": "Infrastructure Components", "examples": [{"example": " Physical / Virtual Servers"}, {"example": "Operating Systems"}, {"example": "Storage Systems"}, {"example": "Network Switches, Routers Firewalls "}, {"example": " Database & Middleware Software"}]}, {"name": "Infrastructure Tools", "examples": [{"example": "Infrastructure Performance Monitoring Tools"}, {"example": "Anti-Malware (Anti-Virus) Systems"}, {"example": "Active Directory / Identity Management Tools"}, {"example": "Client Management Tool (Patch/SW Push Tools)"}]}]}]}, {"name": "bia", "result": "Continiuty Critical", "values": [{"value": "Yes", "remarks": "afafa", "question": "Is the availability of the system essential for the continued supply of life-saving products (i.e. there is no systems redundency, and without this system, supply will stop)?"}, {"value": "No", "question": "Does the loss of availability of this system compromise the Integrity of any cGxP processes or record?"}, {"value": "No", "question": "Is the availability of the system essential for time-critical cGxP processes (e.g. product recall)?"}]}, {"name": "hlsa", "result": "Medium", "values": [{"value": "Minor", "remarks": "desed", "question": " Severity of system failure: - Minor: Failure of the system impacts quality system records but has no immediate impact on product quality, safety or efficacy. - Major: Failure of the system impacts product quality, safety, or efficacy."}, {"value": "High", "question": "Detectability of system failure: - High - a failure will likely be detected through downstrean controls - Low - a failure is unlikely to be detected through downstream controls"}, {"question": "Category of system"}]}, {"name": "eres", "result": "Electronic Records Only", "values": [{"question": "Is this system used to create, modify, distribute, store, control any records required by regulatory agency?"}, {"question": "Is this system used to approve/sign any records electronically required by regulatory agency?"}]}, {"name": "Overview", "systemid": "Sarab", "systemname": "Ra", "systemrole": "gooo", "systemowner": "sssa", "systemscope": "sssssff"}];


this.projectrequestdetails=[{project:"QLIMS",status:"Created",sca:"In progress"},{project:"SAP",status:"In progress",sca:"Not started"},{project:"HPLC",status:"Approved",sca:"Approved"}]*/
getprojectdetails(project){


  $http({
    method: 'Post',
    url: './UserAunthentication',
    headers: { 'Content-Type': 'application/json' },
    params: { 'name': project, 'inputmode': 'searchproject', 'username': this.username }
  }).success(function (data) {
    //delete this.projectdetails;
    this.projectdetails = data;

  });

};


getoptionvalue(v, val, type, index, key){
  val.value = v;
  var answeredall = true;
  if (type != "Software Category") {
    if (type == "Gxp Assessment" || type == "GxP Assessment") {
      var index1 = 1;

    }
    else if (type == "Business Impact Assessment") {
      var index1 = 3;

    }
    else if (type == "High Level Risk Assessment") {
      var index1 = 4;

    }
    else if (type == "Electronic Records, Electronic Signatures") {
      if (key == 0) {
        this.systemcomplianceanalysis[5].part11.eRecords = v;
      } else {
        this.systemcomplianceanalysis[5].part11.eSign = v;
      }
      var index1 = 5;
    }
    for (i in this.systemcomplianceanalysis[index1].values) {
      if (index1 == 1 || index1 == 3 || index1 == 5) {
        answeredall = true;
        break
      }
      else if (this.systemcomplianceanalysis[index1].values[i].value == "") {
        answeredall = false;
        break
      }

    }
  }
  else if (type == "Software Category") {
    var index1 = 2;
    for (i in this.systemcomplianceanalysis[index1].values) {
      if (i != parseInt(index)) {
        this.systemcomplianceanalysis[index1].values[i].value = false;


      }
    }

  }
  if (answeredall == true) {

    //	ConfigurationFactory.calculategxpdetails(type,this.systemcomplianceanalysis[index1].values,this.systemcomplianceanalysis[1].result).success(//function(data) {
    $http({
      method: 'PUT',
      url: './rest/project/gxpdetails/newsystem/' + type,

      headers: {
        'Content-Type': 'application/json',
        'project': $rootScope.currentproject,
        'groupid': $rootScope.currentgroupid,
        'status': this.systemcomplianceanalysis[2].result
      },
      data: this.systemcomplianceanalysis[index1].values
    }).
      success(function (data) {

        this.systemcomplianceanalysis[index1].result = data.result;
      });

  }

}



openuploadmodal(){
  $('#Upload123').modal('show');
}

validate(name){

  if (name == '') {
    this.view = true;
    this.alertmessage = "Please enter name";
  }
  else {
    this.preloader = true;
    $http({
      method: 'Post',
      url: './UserAunthentication',
      headers: { 'Content-Type': 'application/json' },
      params: { 'username': name, 'inputmode': 'usernamevalidator' }
    }).success(function (data) {
      this.preloader = false;

      if (data.result == true) {
        this.alertmessage = "";
        this.validatename = false;
        if (data.isSAMLConfigEnabled) {
          $rootScope.isSAMLConfigEnabled = data.isSAMLConfigEnabled;
          $rootScope.eSignURL = data.eSignURL;
          $rootScope.ssoURL = data.ssoURL;
        }
      }
      else {

        this.view = true;
        this.alertmessage = "Username does not exist";
      }


    });


  }
}

validateName(name, e){
  if (e.keyCode == 13) {


    if (name == '') {
      this.view = true;
      this.alertmessage = "Please enter name";
    }
    else {
      this.preloader = true;
      $http({
        method: 'Post',
        url: './UserAunthentication',
        headers: { 'Content-Type': 'application/json' },
        params: { 'username': name, 'inputmode': 'usernamevalidator' }
      }).success(function (data) {
        this.preloader = false;

        if (data.result == true) {
          this.alertmessage = "";
          this.validatename = false;
        }
        else {

          this.view = true;
          this.alertmessage = "Username does not exist";
        }


      });


    }
  }
}

changeagree(esign){
  if (esign.agree == false)
    esign.agree = true;
  else
    esign.agree = false;

}

submitname(esign){
  this.preloaddata = true;

  $http({
    method: 'post',
    url: './UserRequestAccess',
    headers: { 'Content-Type': 'application/json', 'project': $rootScope.currentproject },
    data: { projects: this.projects, esignature: { "username": this.username, "esignuser": esign.username, "esignpassword": esign.password, "esign": 'y' } }

  }).success(function (data) {
    if (!data.reason) {

      $('#e-sign').modal('hide');
      this.esign = {};
      this.esign.username = "";
      this.esign.password = "";
      this.esign.agree = false;
      this.preloaddata = false;


      window.location.href = './requestaccessresult.html';
    }
    else if (data.reason) {
      this.reason1 = data.reason;
      this.preloaddata = false;

    }


  });


}

getmessage(){


  var params = { "username": this.savedusername.name };
  $http({
    method: 'Post', url: './UserLockedStatus', responseType: 'application/json', params: params
  }).success(function (data, status, config, headers) {

    // this.failattemptmsg=data.message;
    if (data.result == 'Locked') {
      window.location.href = './user-lock.html';
    }


  });
}

RequestAccess(name, position){
  /*initial=1;*/
  var rolevalid = 0;
  var rolevalid1 = 0;
  this.position = [];
  var attachmentvalid = 0;

  this.roleexist = false;
  if (this.projects.length > 0) {
    for (i in this.projects) {
      /*if(this.projects[i].attachements==0 ||!this.projects[i].attachements){
        attachmentvalid=1;
        
        this.position.push(parseInt(i));
      }*/

      for (j in this.projects[i].roles) {
        if (this.projects[i].roles[j].check == true) {
          this.roleexist = true;
        }
      }
      if (this.roleexist == false) {
        this.alertmessage1 = "Select role for highlighted project"
        break;
      }
      else {

        for (j in this.projects[i].roles) {
          if (this.projects[i].roles[j].check == true) {

            ++rolevalid;
            ++rolevalid1;
          }
          if (j == this.projects[i].roles.length - 1 && this.projects.length > 1) {

            if (rolevalid == 0)
              this.position.push(parseInt(i));
            if (rolevalid == 1)
              rolevalid = 0;



          }
          if (j == this.projects[i].roles.length - 1 && this.projects.length - 1 == i) {
            if (this.position.length == 0) {

              this.esign = {};
              this.esign.username = "";
              this.esign.password = "";
              this.esign.agree = false;
              if (position == 'request')
                $('#e-sign').modal('show');
              this.alertmessage1 = "";
            }
            else if (rolevalid1 == this.projects.length && attachmentvalid == 1) {
              if (this.projects.length > 1)
                this.alertmessage1 = "Attach training certificate for highlighted projects";
              if (this.projects.length == 1)
                this.alertmessage1 = "Attach training certificate for highlighted project";


            }
            else if (rolevalid1 != this.projects.length && attachmentvalid == 0) {
              if (this.projects.length > 1)
                this.alertmessage1 = "Select role for highlighted projects";
              if (this.projects.length == 1)
                this.alertmessage1 = "Select role for highlighted project";


            }
            else if (rolevalid1 != this.projects.length && attachmentvalid == 1) {
              if (this.projects.length > 1)
                this.alertmessage1 = "Select role and attach training certificate for highlighted projects";
              if (this.projects.length == 1)
                this.alertmessage1 = "Select role and attach training certificate for highlighted project";

            }
          }


        }
      }
    }


  }

}

selectrole(index, check){
  this.alertmessage = "";


  for (i in this.projects[this.selected].roles) {
    if (i == index) {
      this.projects[this.selected].roles[index].check = true;
    }
    else {
      this.projects[this.selected].roles[i].check = false;
    }
  }



}








    // }]);


}
