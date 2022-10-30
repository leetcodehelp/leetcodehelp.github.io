var loc=document.getElementById(""); //add id of div  ->id:addnew1 ,addnew2 ,addnew3 ,addnew4
// chnage css with class name="add-new-link"

var ul=document.createElement('ul');
var li=document.createElement('li');

loc.appendChild(ul);
loc.appendChild(li);

var link=document.createElement('a');
link.href="https://coderpad.blogspot.com";
link.target="_blank";
link.text="coderpad";

loc.appendChild(link);

var link=document.createElement('a');
link.href="https://coderpad.blogspot.com";
link.target="_blank";
link.text="blog";

loc.appendChild(li);
loc.appendChild(link);