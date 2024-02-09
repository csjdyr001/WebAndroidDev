class WebAndroidDev{
  static JsJdkLink = "./js-jdk/";
  static setJsJdkLink(link){
    this.JsJdkLink = link;
  }
}
function importJavaClass(pm){
let pLoad = document.createElement('script');
pLoad.src = WebAndroidDev.JsJdkLink + pm.replace(".","/") + ".js";
document.body.appendChild(pLoad);
}