// 北京市的displaynone
var p=document.getElementsByTagName('p');
var img=document.getElementsByTagName('img');
var div=document.getElementsByTagName('div');
var us1=document.getElementById('us1');
var li1=us1.getElementsByTagName('li');
var bjs=[];
for (var i = 0; i < p.length; i++) {
	if (p[i].className=='bj') {
		bjs.push(p[i]);
	};
};
for (var i = 0; i < img.length; i++) {
	if (img[i].className=='arrow') {
		bjs.push(img[i]);
	};
};
for (var i = 0; i < div.length; i++) {
	if (div[i].className=='citynone'||div[i].className=='city') {
		bjs.push(div[i]);
	};
};
var tm1=null;
var tm2=null;
var s1=true;
var h1=0;
var h2=182;
bjs[2].onclick=function () {
	clearInterval(tm1);
	clearInterval(tm2);
	if (s1==true) {
		s1=false;
		bjs[1].src='img/arrow_top.png';
		bjs[3].style.display='block';
		tm1=setInterval(function () {
			h1++;
			if (h1>=182) {
				h1=182;
			};
			bjs[3].style.height=h1+'px';
		},10)
	}else{
		s1=true;
		bjs[1].src='img/arrow_down.png';
		tm2=setInterval(function () {
			h2--;
			if (h2<=0) {
				h2=0;
			};
			bjs[3].style.height=h2+'px';
		},10)
	}
}
// 导航栏的onclick
var us2=document.getElementById('us2');
var li2=us2.getElementsByTagName('li');
var a1=us2.getElementsByTagName('a');
for (var i = 0; i < li2.length; i++) {
	li2[i].onclick=function () {
		for (var i = 0; i < li2.length; i++) {
			if (li2[i]==this) {
				a1[i].style.color='#0EA8E3';
			}else{
				a1[i].style.color='#D5DADD';
			}
		};
	}
};