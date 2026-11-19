const filesys=require("fs")
//creating file
filesys.writeFileSync("student.txt","name:ABES");
console.log("File created successfully");


// //read file
 const filedata=filesys.readFileSync("student.txt","Utf8");
 console.log(filedata);

// //update data
 const u=filesys.writeFileSync("student.txt","name:Siddhant");
 console.log("File updated successfully");

 const newfiledata=filesys.readFileSync("student.txt","Utf8");
console.log(newfiledata);