function StringBuilder(){
	this.str_array=new Array();
}
StringBuilder.prototype.append=function(data){
	this.str_array.push(data);
	return this;
}
StringBuilder.prototype.toString=function(){
	return this.str_array.join('');
}