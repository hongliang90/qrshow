console.log("start");
var QRCode = require('qrcode');
QRCode.toString('你好呀',{
    type:'terminal'
},function (err,data){
    console.log(data);
});