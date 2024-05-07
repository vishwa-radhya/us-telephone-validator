const input = document.getElementById('user-input');
const result = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');


const checker = input=>{
    if(input===''){
        alert('Please provide a phone number');
        return;
    }
    const pTag = document.createElement('p');
    
    pTag.className='res-txt';
    inpChk(input)
    if(inpChk(input)){
        pTag.style.color = '#0bff24';
    }else{
        pTag.style.color='red';
    }
    pTag.appendChild(
        document.createTextNode(
            `${inpChk(input) ? 'Valid' : 'Invalid'} US number: ${input}`
        )
    )
    result.appendChild(pTag);
}

const inpChk=(input)=>{
    const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const regExp = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
//   console.log(regExp.test(input));
  return regExp.test(input);
}


checkBtn.addEventListener('click',()=>{
    checker(input.value);
    input.value='';
});
input.addEventListener('keydown',e=>{
    if(e.key === 'Enter'){
        checker(input.value);
        input.value='';
    }
})
clearBtn.addEventListener('click',()=>{
    result.textContent='';
})