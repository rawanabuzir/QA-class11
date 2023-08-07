
var Name = prompt("Enter your name  :")
var Mark = prompt("Hello " + Name + " ! \nEnter your mark please:")
var MarkFloor = Math.floor(Mark)


    if(MarkFloor >= 91 && MarkFloor <= 100 ){
        alert("Your grade is A+ . congratulations you Pass ")
    }
    else if(MarkFloor >= 51 && MarkFloor <= 60 ){
        alert("Your grade is D . congratulations you Pass")
    }
    else if(MarkFloor >= 61 && MarkFloor <= 70 ){
        alert("Your grade is C . congratulations you Pass")
    }
    else if(MarkFloor >= 71 && MarkFloor <= 80 ){
        alert("Your grade is B . congratulations you Pass")
    }
    else if(MarkFloor >= 81 && MarkFloor <= 90 ){
        alert("Your grade is A . congratulations you Pass")
    }
    else {
   alert("Your grade is F . sorry you Failed")
     
    }
        
