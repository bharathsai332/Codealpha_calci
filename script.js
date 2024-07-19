let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string= "";
let arr =Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        let buttontext =e.target.innerHTML;
        if(buttontext == '='){
            string = eval(string);
            input.value =string;
        }
        else if(buttontext== 'AC'){
            string ="";
            input.value =string;
        }
        else if(buttontext == 'DEL'){
            string =string.substring(0,string.length-1);
            input.value =string;
        }
        else if(buttontext == '√'){
            input.value = Math.sqrt(parseFloat(string));
        }
        else if(buttontext == '^'){
            string += '**';
            input.value =string;
        }
        else{
            string+=buttontext;
            input.value=string;
        }
    })
})