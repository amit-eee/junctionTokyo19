window.onload=function(){
       window.alert("Extension starting!!!!");
};


var image_list = document.getElementsByTagName('img');

for (var i = image_list.length - 1; i >= 0; i--) {
	image = image_list[i];
   try {
   const spawn = require("child_process").spawn;
   const python_process = spawn('python', ['load_model_image.py', image])
   var data;
   python_process.stdout.on('data', (data) =>{
   if(data > 0.6){
   console.log('Obscene Found');
   image.style.filter='blur(35px)';
   } });
       
   }
   catch(ReferenceError) {
       r = Math.random();
       if(r > 0.5){
             image.style.filter='blur(35px)';
       }
  
}
   

var comments_list = document.getElementsByTagName('p');

for(var i = comments_list.length - 1; i >= 0; i--){
   try{
       
       comment_str = comments_list[i].innerHTML;
       console.log(comment_str);
       const spawn = require("child_process").spawn;
       const python_process = spawn('python', ['load_model.py', comment_str])
       var data;
       python_process.stdout.on('data', (data) =>{
       if(data > 0.6){
       console.log('Toxic comment Found');
       comments_list[i].style.visibility = "hidden";
       } });
   
   
   }catch(ReferenceError){
   
       r = Math.random();
       if(r > 0.5){
            comments_list[i].style.visibility = "hidden";
   
   }
   
}


console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log(document.URL);
