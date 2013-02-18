//>>built
define("dojox/date/buddhist",["..","dojo/_base/lang","dojo/date","./buddhist/Date"],function(k,l,i,j){var h=l.getObject("date.buddhist",!0,k);h.getDaysInMonth=function(c){return i.getDaysInMonth(c.toGregorian())};h.isLeapYear=function(c){return i.isLeapYear(c.toGregorian())};h.compare=function(c,d,a){return i.compare(c,d,a)};h.add=function(c,d,a){var e=new j(c);switch(d){case "day":e.setDate(c.getDate(!0)+a);break;case "weekday":var b;(d=a%5)?b=parseInt(a/5):(d=0<a?5:-5,b=0<a?(a-5)/5:(a+5)/5);var f=
c.getDay(),g=0;6==f&&0<a?g=1:0==f&&0>a&&(g=-1);f+=d;if(0==f||6==f)g=0<a?2:-2;e.setDate(c.getDate(!0)+(7*b+d+g));break;case "year":e.setFullYear(c.getFullYear()+a);break;case "week":e.setDate(c.getDate(!0)+7*a);break;case "month":e.setMonth(c.getMonth()+a);break;case "hour":e.setHours(c.getHours()+a);break;case "minute":e._addMinutes(a);break;case "second":e._addSeconds(a);break;case "millisecond":e._addMilliseconds(a)}return e};h.difference=function(c,d,a){var d=d||new j,a=a||"day",e=d.getFullYear()-
c.getFullYear(),b=1;switch(a){case "weekday":e=Math.round(h.difference(c,d,"day"));b=parseInt(h.difference(c,d,"week"));if(0==e%7)e=5*b;else{var a=0,f=c.getDay(),g=d.getDay(),b=parseInt(e/7),c=e%7,d=new j(d);d.setDate(d.getDate(!0)+7*b);d=d.getDay();if(0<e)switch(!0){case 5==f:a=-1;break;case 6==f:a=0;break;case 5==g:a=-1;break;case 6==g:a=-2;break;case 5<d+c:a=-2}else if(0>e)switch(!0){case 5==f:a=0;break;case 6==f:a=1;break;case 5==g:a=2;break;case 6==g:a=1;break;case 0>d+c:a=2}e=e+a-2*b}b=e;break;
case "year":b=e;break;case "month":a=d.toGregorian()>c.toGregorian()?d:c;f=d.toGregorian()>c.toGregorian()?c:d;b=a.getMonth();g=f.getMonth();if(0==e)b=a.getMonth()-f.getMonth();else{b=12-g+b;e=f.getFullYear()+1;for(a=a.getFullYear();e<a;e++)b+=12}d.toGregorian()<c.toGregorian()&&(b=-b);break;case "week":b=parseInt(h.difference(c,d,"day")/7);break;case "day":b/=24;case "hour":b/=60;case "minute":b/=60;case "second":b/=1E3;case "millisecond":b*=d.toGregorian().getTime()-c.toGregorian().getTime()}return Math.round(b)};
return h});