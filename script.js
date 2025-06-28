 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");

			 if(radius < 0){
				 alert("Please Enter Postive Number")
			 }

	 const area = Math.PI * Math.pow(radius, 2);

	 const roundedArea = area.toFixed(2);

console.log(`The area of the circle with radius ${radius} is ${roundedArea}`);
            
           
}
calculateArea();
