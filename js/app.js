const loadPhones=(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhones(data.data))
}

const displayPhones=(phones)=>{
    
   const phonesContainer=document.getElementById('phone-container')
    phonesContainer.textContent=''
    // display 10 phones only
    phones=phones.slice(0,10)
// display no phone found
const noPhone=document.getElementById('no-phone-message')
    if(phones.length==0){
noPhone.classList.remove('d-none')
    }else{
        noPhone.classList.add('d-none')
    }
    // display all phones
   phones.forEach(phone=>{
    console.log(phone);
   const phoneDiv=document.createElement('div')
   phoneDiv.classList.add('col')
   phoneDiv.innerHTML=`
  
   <div class="card m-2 p-2" style="width: 18rem; ">
  <img src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body p-4 m-2">
    <h5 class="card-title">${phone.phone_name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
phonesContainer.appendChild(phoneDiv)


   })
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value;
loadPhones(searchText)
})

loadPhones()