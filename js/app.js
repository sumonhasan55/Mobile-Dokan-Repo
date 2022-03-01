
//toggle spinner

const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}

//Search field
const searchPhone = () => {
    const searchText = document.getElementById('search-field').value;
//toggle spinner display block
    toggleSpinner('block');

    loadPhone(searchText);
    document.getElementById('search-field').value = '';  
}

//Load phone
const loadPhone = searchText => {
    const url =` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch (url)
    .then(res=>res.json())
    .then(data=> displayPhone(data.data[0]))
}

//Display Phone
const displayPhone = phones =>{
    const container = document.getElementById('display-result');
    container.textContent='';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div class="card" style="width: 18rem; text-dark">
        <img src="${phones.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Phone Name:${phones.phone_name}</h4>
          <h5>Brand:${phones.brand}</h5>
          <button onclick="phoneDetails('${phones.slug}')" type="button" class="btn btn-info">Click For Details</button>
        </div>
    </div>
    `;
container.appendChild(div);

//toggle spiner none
toggleSpinner('none');
   
}

//Search Phone Details
const phoneDetails = slug =>{
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
}

//Dispaly Phone Details
const displayPhoneDetails = phone => {
    console.log(phone)
    
    const displayphoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
    <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5>Phone Id:${phone.slug}</h5>
          <h5 class="card-title"> storage:'${phone.mainFeatures.storage}'</h5>
          <h5>DisplaySize:'${phone.mainFeatures.displaySize}'</h5>
          <h5>Memory:'${phone.mainFeatures.memory}'</h5>
          <h5>Brand:'${phone.brand}'</h5>
          <h5>ReleaseDate:'${phone.releaseDate}'</h5>
          <h5>Others:'${phone.others.Bluetooth}'</h5>
          <h5>WLAN:'${phone.others.WLAN}'</h5>
          <h5>USB:'${phone.others.USB}'</h5>
          <h5>GPS:${phone.others.GPS}</h5>
          <h5>Radio:${phone.others.Radio}</h5>
        </div>
    </div>
    `
    displayphoneDetails.appendChild(div);
}