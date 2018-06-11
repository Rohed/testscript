function myFunction() {
  var str='select name,time_of_entry,site,keyword,url from [curious-domain-121318:agency_data_pipeline.gsc_lp_query] limit 20';
  var mat=str.match(/\[[A-Za-z0-9\-\_]+\:[A-Za-z0-9\-\_]+/g);
 mat=mat[0].split(":");
 var proj=mat[0].replace('[','');
 var dataset=mat[1];
  Logger.log(proj);

}
function doPost(e) {
PropertiesService.getScriptProperties().setProperty('authData', JSON.stringify(e));
MailApp.sendEmail('oliveraluloski@gmail.com', 'Here', JSON.stringify(e));
}

function viewToken(){
var prop = PropertiesService.getScriptProperties().getProperty('authData');

var obj=JSON.parse(prop);
Logger.log(obj);


}
