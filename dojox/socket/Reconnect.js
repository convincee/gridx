//>>built
define("dojox/socket/Reconnect",["dijit","dojo","dojox"],function(h,e,c){e.provide("dojox.socket.Reconnect");c.socket.Reconnect=function(a,b){var b=b||{},d=b.reconnectTime||1E4;e.connect(a,"onclose",function(b){clearTimeout(f);b.wasClean||a.disconnected(function(){c.socket.replace(a,g=a.reconnect())})});var f,g;if(!a.disconnected)a.disconnected=function(a){setTimeout(function(){a();f=setTimeout(function(){2>g.readyState&&(d=b.reconnectTime||1E4)},1E4)},d);d*=b.backoffRate||2};if(!a.reconnect)a.reconnect=
function(){return a.args?c.socket.LongPoll(a.args):c.socket.WebSocket({url:a.URL||a.url})};return a}});