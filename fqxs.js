let obj = JSON.parse($response.body);
obj.data["is_vip"] = 1;
obj.data["left_time"] = "2022-01-01";
$done({body: JSON.stringify(obj)});
