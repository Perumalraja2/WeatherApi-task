let conT = document.createElement('div')
conT.className="container"
conT.innerHTML=`<div class="container text-center">
  <div class="row">
    <div class="col-lg-4" id ="col1">
    
    </div>
    <div class="col-lg-4" id ="col2">
     
    </div>
    <div class="col-lg-4" id ="col3">
     
    </div>
  </div>
</div>`
document.body.append(conT)

let cards = document.createElement('div')
cards.className="card"
cards.innerHTML=`<div class="card-header" id ="cardheader1">
   
  </div>

  <div class="card-body" >
     <div id = "flag">
 
     </div>

  </div>


  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="Capital"></li>
    <li class="list-group-item" id="Region"></li>
    <li class="list-group-item" id="Country_Code"></li>
    <li class="list-group-item" id="lat"></li>
    <li class="list-group-item" id="lan"></li>
  </ul>
<div class="card-body" id = "weatherbtn1">
        <a href="#" class="btn btn-primary">Click for Weather</a>
      </div>`
let div1=document.getElementById('col1')
div1.append(cards)

let cards1 = document.createElement('div')
cards1.className="card"
cards1.innerHTML=`<div class="card-header" id ="cardheader2">
   
  </div>

  <div class="card-body" >
     <div id = "flag2">
 
     </div>

  </div>


  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="Capital2"></li>
    <li class="list-group-item" id="Region2"></li>
    <li class="list-group-item" id="Country_Code2"></li>
    <li class="list-group-item" id="lat2"></li>
    <li class="list-group-item" id="lan2"></li>
  </ul>
<div class="card-body" id = "weatherbtn2">
        <a href="#" class="btn btn-primary">Click for Weather</a>
      </div>`
let div2=document.getElementById('col2')
div2.append(cards1)

let cards2 = document.createElement('div')
cards2.className="card"
cards2.innerHTML=`<div class="card-header" id ="cardheader3">
   
  </div>

  <div class="card-body" >
     <div id = "flag3">
 
     </div>

  </div>


  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="Capital3"></li>
    <li class="list-group-item" id="Region3"></li>
    <li class="list-group-item" id="Country_Code3"></li>
    <li class="list-group-item" id="lat6"></li>
    <li class="list-group-item" id="lan6"></li>
  </ul>
<div class="card-body" id = "weatherbtn3">
        <a href="#" class="btn btn-primary">Click for Weather</a>
      </div>`
let div3=document.getElementById('col3')
div3.append(cards2)
























async function restcountries()

{
let restData = await fetch ("https://restcountries.com/v3.1/all")
let resultData = await restData.json()
console.log(resultData)

let randomcity = Math.floor(Math.random()*resultData.length-1)
let countryName = resultData[randomcity].name.common
let capital = resultData[randomcity].capital[0]
let region = resultData[randomcity].region
let flags = resultData[randomcity].flags.png
let lat = resultData[randomcity].latlng[0]
let lng = resultData[randomcity].latlng[1]
let cioc = resultData[randomcity].cioc



let capital1= document.getElementById('Capital')
capital1.innerHTML=`Capital : ${capital}`

let region1= document.getElementById('Region')
region1.innerHTML=`Region : ${region}`

let countrycode1= document.getElementById('Country_Code')
countrycode1.innerHTML=`Country Code : ${cioc}`

let flags1= document.getElementById('flag')
flags1.innerHTML=`<img src="${flags}" class="card-img-top" alt="...">`
 

let countryName1= document.getElementById('cardheader1')
countryName1.innerHTML=`${countryName}`

let lat1= document.getElementById('lat')
lat1.innerHTML=`Lat : ${lat}`

let lan1= document.getElementById('lan')
lan1.innerHTML=`Lan : ${lng}`








console.log(lat)
console.log(lng)
console.log(cioc)

console.log(flags)
console.log(region)
console.log(capital)
console.log(countryName)
 



let randomcity1 = Math.floor(Math.random()*resultData.length)
let countryName2 = resultData[randomcity1].name.common
let capital2 = resultData[randomcity1].capital[0]
let region2 = resultData[randomcity1].region
let flags2 = resultData[randomcity1].flags.png
let lat2 = resultData[randomcity1].latlng[0]
let lng2 = resultData[randomcity1].latlng[1]
let cioc2 = resultData[randomcity1].cioc



let capital3= document.getElementById('Capital2')
capital3.innerHTML=`Capital : ${capital2}`

let region3= document.getElementById('Region2')
region3.innerHTML=`Region : ${region2}`

let countrycode3= document.getElementById('Country_Code2')
countrycode3.innerHTML=`Country Code : ${cioc2}`

let flags3= document.getElementById('flag2')
flags3.innerHTML=`<img src="${flags2}" class="card-img-top" alt="...">`
 

let countryName3= document.getElementById('cardheader2')
countryName3.innerHTML=`${countryName2}`

let lat3= document.getElementById('lat2')
lat3.innerHTML=`Lat : ${lat2}`

let lan3= document.getElementById('lan2')
lan3.innerHTML=`Lan : ${lng2}`




let randomcity2 = Math.floor(Math.random()*resultData.length-2)
let countryName4 = resultData[randomcity2].name.common
let capital4 = resultData[randomcity2].capital[0]
let region4 = resultData[randomcity2].region
let flags4 = resultData[randomcity2].flags.png
let lat4 = resultData[randomcity2].latlng[0]
let lng4 = resultData[randomcity2].latlng[1]
let cioc4 = resultData[randomcity2].cioc



let capital5= document.getElementById('Capital3')
capital5.innerHTML=`Capital : ${capital4}`

let region5= document.getElementById('Region3')
region5.innerHTML=`Region : ${region4}`

let countrycode5= document.getElementById('Country_Code3')
countrycode5.innerHTML=`Country Code : ${cioc4}`

let flags5= document.getElementById('flag3')
flags5.innerHTML=`<img src="${flags4}" class="card-img-top" alt="...">`
 

let countryName5= document.getElementById('cardheader3')
countryName5.innerHTML=`${countryName4}`

let lat5= document.getElementById('lat6')
lat5.innerHTML=`Lat : ${lat4}`

let lan5= document.getElementById('lan6')
lan5.innerHTML=`Lan : ${lng4}`



setTimeout(()=>{
	alert("Thanks for visiting our page please refresh the page to see more countries")
},5000)


let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName4}&appid=1087b5b9e71c058613e16e2e1303a9da`)
let weatherResult =await weather.json()

let weatherb = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName2}&appid=1087b5b9e71c058613e16e2e1303a9da`)
let weatherResultb =await weatherb.json()

let weathera = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=1087b5b9e71c058613e16e2e1303a9da`)
let weatherResulta =await weathera.json()

console.log(weatherResult)
console.log(weatherResult.main.temp)
console.log(weatherResult.main.temp)
console.log(weatherResult.main.temp_max)
console.log(weatherResult.main.temp_min)
console.log(weatherResult.wind.speed)
console.log(weatherResult.visibility)

let tempc = weatherResult.main.temp;
let windc = weatherResult.wind.speed;
let visiblec = weatherResult.visibility;




let weather1 = document.getElementById('weatherbtn3')
weather1.addEventListener('click',()=>{
weather1.innerHTML=`<div class="card text-bg-success mb-3" >
  <div class="card-header">Weather Details</div>
  <div class="card-body" >
  <p id="temp"></p>
  <p id="wind"></p>
  <p id="visibility"></p>
</div>
</div>`

let temp1=document.getElementById('temp')
temp1.innerHTML=`Temperature : ${tempc}'C`

let wind1 = document.getElementById('wind')
wind1.innerHTML=`Wind speed : ${windc}`

let visible1=document.getElementById('visibility')
visible1.innerHTML=`Visibility : ${visiblec} `

})



let tempc1 = weatherResultb.main.temp;
let windc1 = weatherResultb.wind.speed;
let visiblec1= weatherResultb.visibility;

let weather2 = document.getElementById('weatherbtn2')
weather2.addEventListener('click',()=>{
weather2.innerHTML=`<div class="card text-bg-success mb-3" >
  <div class="card-header">Weather Details</div>
  <div class="card-body">
  <p id="temp2"></p>
  <p id="wind2"></p>
  <p id="visibility1"></p>
</div>
</div>`

let temp3=document.getElementById('temp2')
temp3.innerHTML=`Temperature : ${tempc1}'C`

let wind3 = document.getElementById('wind2')
wind3.innerHTML=`Wind speed : ${windc1}`

let visible2=document.getElementById('visibility1')
visible2.innerHTML=`Visibility : ${visiblec1} `

})

let tempc2 = weatherResulta.main.temp;
let windc2 = weatherResulta.wind.speed;
let visiblec2= weatherResulta.visibility;

let weather4 = document.getElementById('weatherbtn1')
weather4.addEventListener('click',()=>{
weather4.innerHTML=`<div class="card text-bg-success mb-3" >
  <div class="card-header">Weather Details</div>
  <div class="card-body">
  <p id="temp5"></p>
  <p id="wind5"></p>
  <p id="visibility5"></p>
</div>
</div>`

let temp4=document.getElementById('temp5')
temp4.innerHTML=`Temperature : ${tempc2}'C`

let wind4 = document.getElementById('wind5')
wind4.innerHTML=`Wind speed : ${windc2}`

let visible4=document.getElementById('visibility5')
visible4.innerHTML=`Visibility : ${visiblec2} `

})
















} 
 restcountries()