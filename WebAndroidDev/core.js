class WebAndroidDev{
  static JsJdkLink = "./js-jdk/";
  static hasAllPermission = false;
  static phoneDiv;
  static setJsJdkLink(link){
    this.JsJdkLink = link;
  }
  static setHasAllPermission(has){
    this.hasAllPermission = has;
  }
  static setPhoneDiv(div){
    this.phoneDiv = div;
  }
}
class R{
  
}
R.layout = class{
  static activity_main = 0;
}
R.id = class{
  
}
R.drawable = class{
  static ic_launcher = 1;
}
class AndroidXmlTool {
  constructor(xml){
this.parser = new DOMParser();
this.xmlDoc = this.parser.parseFromString(xml, "text/xml");
}

getPackageName() {
return this.xmlDoc.querySelector("manifest").getAttribute("package");
}

getPermissionArray(){
const permissions = this.xmlDoc.querySelectorAll("uses-permission");
let nameList1 = [];
permissions.forEach(permission => {
    nameList1.push(permission.getAttribute("android:name"));
});
return nameList1;
}

getActivityArray(){
const activities = this.xmlDoc.querySelectorAll("activity");
let nameList2 = [];
activities.forEach(activity => {
    nameList2.push(activity.getAttribute("android:name"));
});
return nameList2;
}

getServiceArray(){
const services = this.xmlDoc.querySelectorAll("service");
let nameList3 = [];
services.forEach(service => {
    nameList3.push(service.getAttribute("android:name"));
});
return nameList3;
}

getProviderArray(){
const providers = this.xmlDoc.querySelectorAll("provider");
let nameList4 = [];
providers.forEach(provider => {
    nameList4.push(provider.getAttribute("android:authorities"));
});
return nameList4;
}

getMainActivity(){
let mainLauncherActivity;
const activities = this.xmlDoc.querySelectorAll("activity");
activities.forEach(activity => {
    const intentFilter = activity.querySelector("intent-filter");
    if (intentFilter) {
        const action = intentFilter.querySelector("action");
        if (action && action.getAttribute("android:name") === "android.intent.action.MAIN") {
            mainLauncherActivity = activity.getAttribute("android:name");
        }
    }
});
return mainLauncherActivity;
}
}
function importJavaClass(pm){
if(!document.getElementById(pm)){
let pLoad = document.createElement('script');
pLoad.setAttribute("id",pm);
pLoad.src = WebAndroidDev.JsJdkLink + pm.replace(/\./g,"/") + ".js";
document.body.appendChild(pLoad);
}
}