
const op= document.querySelector('#inputGroupSelect02');
const op1=document.querySelector('#sp1');
const op2=document.querySelector('#sp2');
const op3=document.querySelector('#sp3');

op.addEventListener('change', function(){
    if(op.value==2){
      op1.innerText= 'mental well being'
      op2.innerText= 'CV writting'
      op3.innerText= 'interview tips'
      
    }
    else{
    op1.innerText= 'Cyber Security'

      op2.innerText= 'Operating System'
      op3.innerText= 'Data Analysis'

    }
});

