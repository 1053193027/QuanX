var obj = JSON.parse($response.body);
obj.data.vip_end_time = "永久会员";
obj.data.isvip = 1;
obj.data.is_p = 1;

$done({body: JSON.stringify(obj)}); 
