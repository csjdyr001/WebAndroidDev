function HashMap(){
	this.entryArray=new Array();
}
HashMap.prototype.put=function(key,value){
	var obj=this.get(key);
	if(obj==null){
		this.entryArray.push({
			key:key,
			value:value,
			getKey:function(){
				return key;
			},
			getValue:function(){
				return value;
			}
		});
	}else{
		for(var index in this.entryArray){
			if(this.entryArray[index].key==key){
				this.entryArray[index].value=value;
			}
		}
	}
}
HashMap.prototype.get=function(key){
	var value=null;
	for(var index in this.entryArray){
		if(this.entryArray[index].key==key){
			value=this.entryArray[index].value;
			break;
		}
	}
	
	return value;
}
HashMap.prototype.clear=function(){
	this.entryArray=new Array();
}
HashMap.prototype.putAll=function(map){
	if(map instanceof HashMap){
		for(var index in map.entryArray){
			this.put(map.entryArray[index].key,map.entryArray[index].value);
		}
	}
}
HashMap.prototype.entrySet=function(){
	return this.entryArray;
}
HashMap.prototype.keySet=function(){
	var keyArray=new Array();
	for(var index in this.entryArray){
		keyArray.push(this.entryArray[index].key);
	}
	return keyArray;
}
HashMap.prototype.values=function(){
	var valueArray=new Array();
	for(var index in this.entryArray){
		valueArray.push(this.entryArray[index].value);
	}
	return valueArray;
}