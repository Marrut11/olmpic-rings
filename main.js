canvas=document.getElementById("myCanvas");
 
ctx=canvas.getContext("2d");
color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(230,230,40,0,2*Math.PI);
ctx.stroke();


 
ctx=canvas.getContext("2d");
color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(280,270,40,0,2*Math.PI);
ctx.stroke();


 
ctx=canvas.getContext("2d");
color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(330,230,40,0,2*Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(380,270,40,0,2*Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(430,230,40,0,2*Math.PI);
ctx.stroke();