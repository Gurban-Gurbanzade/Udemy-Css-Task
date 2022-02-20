 let d = new Date();
 let birthday = new Date(1993, 9, 7);

 // set methods
 d.setFullYear(2022);
 d.setMonth(5);
 d.setDate(2);
 d.setHours(12);



 // get methods
 console.log(d.getDate());
 console.log(d.getDay());
 console.log(d.getFullYear());
 console.log(d.getHours());
 console.log(d.getMonth());
 console.log(d.getSeconds());


 console.log(d);
 console.log(typeof d);

 console.log(d.getDate() - birthday.getDate());
 console.log(d.getFullYear() - birthday.getFullYear());