
//alert('Welcome to JavaScript')
//document.write('welcome')
//console.log('Welcome to Js')  

document.getElementById('A').innerHTML='Welcome to Developer Guru';
document.getElementById('B').style.background='purple';
document.getElementById('B').style.color='white';
document.getElementById('B').style.textAlign='center';

document.getElementsByClassName('ABC').innerHTML='How Are You...!';

let Ans= document.getElementsByClassName('ABC');
    Ans[0].innerHTML='THis is the example of GetElemnetByClassName';
    // Ans[0].style.background='green';
    // Ans[0].style.color='white';
    // Ans[0].style.textAlign='center';
    Ans[0].style.cssText = 'background: green; color: white; text-align: center;';


let Ans1= document.getElementsByClassName('PQR');
   console.log(Ans1);

let Ans2= document.getElementsByTagName('div');
    Ans2[2].innerHTML="hey.have a nice Day";   
    console.log(Ans2);

