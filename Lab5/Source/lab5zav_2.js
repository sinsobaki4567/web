var new_array2 = [  
	["A","B","C"],  
	["C","A","B"],  
	["B","C","A"],  
	["A","B","C"] 
]; 
 
 
function poriv1(arr){
	var z=0;  
  	for(var i=0; i<arr.length; i++){
   		for(var j=0; j<arr[0].length; j++){
       		if(arr[i][j]==arr[i][j+1]){
        		z++;        
       		}
    	}    
	} 
	if(z==(arr.length*(arr[0].length - 1)))   
		console.log("горизонтальний");  
	else   
		console.log("не горизонтальний"); 
} 
 
 
function poriv2(arr){
  	var z=0;  
  	for(var j=0; j<arr[0].length; ++j){ 
  		for(var i=1; i<arr.length; ++i){    
  			if(arr[i][j] == arr[i - 1][j]){     
  				z++;        
  			}   
  		}  
  	}  
  	if(z==((arr.length-1)* arr[0].length))   
  		console.log("вертикальний");  
  	else   
  		console.log("не вертикальний"); 
  } 
 
 
function poriv3(arr){  
	var z=0;  
	for(var i=1; i<arr.length; i++){   
		for(var j=1; j<arr[0].length; j++){    
			if(arr[i][j]==arr[i-1][j-1]){     
				z++;             
			}   
		}  
	}    
	if(z==((arr.length - 1)*(arr[0].length - 1)))   
		console.log("діагональний зліва");  
	else   
		console.log("не діагональний зліва"); 
	} 
 
function poriv4(arr){  
	var z=0;  
	for(i = 0; 
		i < arr.length; i++){   
		for(j = arr[0].length-1; j >= 0 ; j--){    
			var zm = "";    
			for(k = 0; z < arr.length-i && j-k >=0; k++){     
				zm+= arr[i+k][j-k];    
			}    
			if((zm.split(zm[0]).length - 1)== zm.length){     
				z++;    
			}   
		}  
	}  
	if(z==((arr.length - 1)*(arr[0].length - 1))*2)   
		console.log("діагональний справа");  
	else   
		console.log("не діагональний справа"); 
} 
 
console.log("-------Завдання №2-------"); 
 
console.log("Масив: "); 
console.log('(' + '[' + new_array2[0][0] + "," + new_array2[0][1] + "," + new_array2[0][2] + ']' + ','); 
console.log(' ' + '[' + new_array2[1][0] + "," + new_array2[1][1] + "," + new_array2[1][2] + ']' + ','); 
console.log(' ' + '[' + new_array2[2][0] + "," + new_array2[2][1] + "," + new_array2[2][2] + ']' + ','); 
console.log(' ' + '[' + new_array2[3][0] + "," + new_array2[3][1] + "," + new_array2[3][2] + ']' + ')'); 
 
poriv1(new_array2); poriv2(new_array2); poriv3(new_array2); poriv4(new_array2); 
console.log(" ");


