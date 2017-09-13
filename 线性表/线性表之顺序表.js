/**
 * Created by Administrator on 2017/9/9.
 */
var MAXSIZE=100;
var LinearList=function(){
    this.listSize=0;//�б��Ԫ�ظ���
    this.pos=0; //�б�ĵ�ǰԪ��,�൱��ָ��
    this.dataStore=[];//��ʼ��һ���������������б�Ԫ��
};

LinearList.prototype.length= function () {
return this.listSize;
};             //�����б�Ԫ�صĸ���

LinearList.prototype.clear=function(){
delete this.dataStore;
    this.dataStore=[];
    this.listSize=0;
    this.pos=0;
};             //����б�����Ԫ��

LinearList.prototype.contains=function(element){
    for(var i=0;i<this.dataStore.length;i++){
        if (this.dataStore[i] == element){
            return true;
        }
    }
    return false;
};            //�жϸ���ֵ�Ƿ����б���
LinearList.prototype.tostring= function () {
return this.dataStore;
};             //�����б��ַ�����ʽ

LinearList.prototype.insert= function (element,after) {
var insertPos=this.find(after);
    if(insertPos>-1){
        this.dataStore.splice(insertPos+1,0,element);
        this.listSize++;
        return true;
    }
    return false;
};             //�����е�Ԫ�غ������Ԫ��     ���� �����Ԫ�� ����λ�õ�ǰһ��Ԫ��


LinearList.prototype.append=function(element){
this.dataStore[this.listSize++]=element;
};             //���б��ĩβ�����Ԫ��


LinearList.prototype.find= function (element) {
    for(var i=0;i<this.listSize;i++){
        if (this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
};             //����ĳ��Ԫ��
LinearList.prototype.remove= function (element) {
var foundAt=this.find(element);
    if(foundAt>-1){
        this.dataStore.splice(foundAt,1);
        this.listSize--;
        return true;
    }else{
        return false;
    }
};             //���б���ɾ��Ԫ��
LinearList.prototype.front=function(){
this.pos=0;
};             //���б�ĵ�ǰλ���ƶ�����һ��Ԫ��
LinearList.prototype.end=function(){
this.pos=this.listSize-1;
};              //���б�ĵ�ǰλ���ƶ������һ��Ԫ��
LinearList.prototype.prev=function(){
if(this.pos>0){
    this.pos--;
}
};              //���б�ĵ�ǰλ�ú���һ��λ��
LinearList.prototype.next=function(){
if(this.pos<this.listSize-1){
    this.pos++;
}
};             //���б�ĵ�ǰλ��ǰ��һλ
LinearList.prototype.currPos=function(){
return this.pos;
};             //�����б�ĵ�ǰλ��
LinearList.prototype.moveTo=function(position){
this.pos=position;
};             //����ǰλ���ƶ���ָ��λ��
LinearList.prototype.getElements=function(){
return this.dataStore[this.pos];
};             //���ص�ǰλ��Ԫ��
