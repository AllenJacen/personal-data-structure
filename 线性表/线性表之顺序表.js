/**
 * Created by Administrator on 2017/9/9.
 */
var MAXSIZE=100;
var LinearList=function(){
    this.listSize=0;//列表的元素个数
    this.pos=0; //列表的当前元素,相当于指针
    this.dataStore=[];//初始化一个空数组来保存列表元素
};

LinearList.prototype.length= function () {
return this.listSize;
};             //返回列表元素的个数

LinearList.prototype.clear=function(){
delete this.dataStore;
    this.dataStore=[];
    this.listSize=0;
    this.pos=0;
};             //清空列表所有元素

LinearList.prototype.contains=function(element){
    for(var i=0;i<this.dataStore.length;i++){
        if (this.dataStore[i] == element){
            return true;
        }
    }
    return false;
};            //判断给定值是否在列表中
LinearList.prototype.tostring= function () {
return this.dataStore;
};             //返回列表字符串形式

LinearList.prototype.insert= function (element,after) {
var insertPos=this.find(after);
    if(insertPos>-1){
        this.dataStore.splice(insertPos+1,0,element);
        this.listSize++;
        return true;
    }
    return false;
};             //在现有的元素后插入新元素     参数 插入的元素 插入位置的前一个元素


LinearList.prototype.append=function(element){
this.dataStore[this.listSize++]=element;
};             //在列表的末尾添加新元素


LinearList.prototype.find= function (element) {
    for(var i=0;i<this.listSize;i++){
        if (this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
};             //查找某个元素
LinearList.prototype.remove= function (element) {
var foundAt=this.find(element);
    if(foundAt>-1){
        this.dataStore.splice(foundAt,1);
        this.listSize--;
        return true;
    }else{
        return false;
    }
};             //从列表中删除元素
LinearList.prototype.front=function(){
this.pos=0;
};             //将列表的当前位置移动到第一个元素
LinearList.prototype.end=function(){
this.pos=this.listSize-1;
};              //将列表的当前位置移动到最后一个元素
LinearList.prototype.prev=function(){
if(this.pos>0){
    this.pos--;
}
};              //将列表的当前位置后移一个位置
LinearList.prototype.next=function(){
if(this.pos<this.listSize-1){
    this.pos++;
}
};             //将列表的当前位置前移一位
LinearList.prototype.currPos=function(){
return this.pos;
};             //返回列表的当前位置
LinearList.prototype.moveTo=function(position){
this.pos=position;
};             //将当前位置移动到指定位置
LinearList.prototype.getElements=function(){
return this.dataStore[this.pos];
};             //返回当前位置元素
