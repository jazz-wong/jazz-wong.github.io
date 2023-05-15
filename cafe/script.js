fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?$query=SELECT%0A%20%20%60dba%60%2C%0A%20%20%60boro%60%2C%0A%20%20%60street%60%2C%0A%20%20%60zipcode%60%2C%0A%20%20%60inspection_date%60%2C%0A%20%20%60violation_code%60%2C%0A%20%20%60violation_description%60%2C%0A%20%20%60critical_flag%60%2C%0A%20%20%60score%60%2C%0A%20%20%60bin%60%0AWHERE%0A%20%20(%60cuisine_description%60%20IN%20(%22Coffee%2FTea%22))%0A%20%20AND%20((%60dba%60%20!%3D%20%22STARBUCKS%20%2354446%22)%0A%20%20%20%20%20%20%20%20%20AND%20((%60dba%60%20!%3D%20%22STARBUCKS%20COFFEE%2354771%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60dba%60%20!%3D%20%22STARBUCKS%20COFFEE%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60dba%60%20!%3D%20%22STARBUCKS%20COFFEE%20COMPANY%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60dba%60%20!%3D%20%22STARBUCKS%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60score%60%20IS%20NOT%20NULL)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60violation_description%60%20IS%20NOT%20NULL)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20(%60bin%60%20IS%20NOT%20NULL))))))))`)
.then(res => res.json())
.then(data => {
    console.log(data);
    buildSite(data);
}) 
const gridItemContainer = document.getElementById('grid-container');

    function buildSite(data) {

    for(let i =0; i < data.length; i++) { 
    
    let gridItem = document.createElement('button');
    gridItem.classList.add('grid-item')
// Loop through the data and add each item to the div
// using HTML to add the tags
gridItem.innerHTML = `
<div class="hover">
<div class="bottom_under"><h4>*********************************</h4></div>
</div>
<div class="top"> <h4>*********************************</h4></div>
<h1>${data[i].dba}</h1>
<h2>${data[i].street}, ${data[i].boro} ${data[i].zipcode}</h2>


<div class="date"> 
<h3>SALE</h3>
<p>${data[i].inspection_date}</p></div>
<div class="bin">
<p>ORDER# ${data[i].bin}</p>
<p>VISA XXXXXXX</p></div>

<div class ="relative">
<div class="cost">
  <div class="critical">
    <h3>${data[i].score}.00</h3>
    
  </div>

  <div class = "cost_2"></div>
  <div class="noncritical">
    <p>SCORE<p> 
  </div>
</div>
</div>

<div class="tax">
<p>TAX:  __________</p>
<p>TIP: ___________</p><br>
<h3>INSPECTION COMMENTS:</h3>
</div>

<div class="inspection">
<h5>${data[i].violation_description}</h5></div>

<div class="end">
<h3>APPROVED</h3>
<h3>THANK YOU!</h3><br>
<h5>CUSTOMER COPY</h5>
</div>

<div class="change">
<div class="cut"></div>
<div class="bottom"><h4>*********************************</h4></div>
<div class="fold"></div>
</div>


`
imageContainer.innerHTML = `
<div class="smoke">
<pre>
     )
 (  (   
  )  )   
 (  (  ( 
     )  )

</pre>
</div>
<img src="mug.svg">
`
critContainer.innerHTML = ``

violationContainer.innerHTML = ``



//button information inside the div
gridItemContainer.append(gridItem)


gridItem.addEventListener('click', function () {
    
  // select the data being used
  console.log(data[i].boro);
  console.log(data[i].critical_flag);
  console.log(data[i].violation_code);
  console.log(data[i].score);

  // show different svg based on boro

//MANHATTAN  
  if (data[i].boro == "Manhattan" && (data[i].score < 14)) {
    const image = "1_greensvg.svg";
    imageContainer.innerHTML = `<img src="${image}">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;
  
  } else if (data[i].boro == "Manhattan" && (data[i].score === 14 || (data[i].score >= 14 && data[i].score <= 27) || data[i].score === 27)) {
    const image = "1_yellow.svg";
    imageContainer.innerHTML = `<img src="${image}">`; 
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Manhattan" && (data[i].score === 28 || x > 28)) {
    const image = "1_red.svg";
    imageContainer.innerHTML = `<img src="${image}">`; 
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

    
//BRONX    
  } else if (data[i].boro == "Bronx" && (data[i].score < 14)) {
    const image = "2_green.svg";
    imageContainer.innerHTML = `<img src="${image}">`; 
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Bronx" && (data[i].score === 14 || (data[i].score >= 14 && data[i].score <= 27) || data[i].score === 27)) {
    const image = "2_yellow.svg";
    imageContainer.innerHTML = `<img src="${image}">`; 
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Bronx" && (data[i].score === 28 || x > 28)) {
    const image = "2_red.svg";
    imageContainer.innerHTML = `<img src="${image}">`; 
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;


//BROOKLYN
  } else if (data[i].boro == "Brooklyn" && (data[i].score < 14)) { 
    const image = "3_green.svg";
    imageContainer.innerHTML = `<img src="${image}" class="three">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Brooklyn" && (data[i].score === 14 || (data[i].score >= 14 && data[i].score <= 27) || data[i].score === 27)) { 
    const image = "3_yellow.svg";
    imageContainer.innerHTML = `<img src="${image}" class="three">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Brooklyn" && (data[i].score === 28 || x > 28)) { 
    const image = "3_red.svg";
    imageContainer.innerHTML = `<img src="${image}" class="three">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;



//QUEENS
  } else if (data[i].boro == "Queens" && (data[i].score < 14)) { 
    const image = "4_green.svg";
    imageContainer.innerHTML = `<img src="${image}" class="four">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Queens" && (data[i].score === 14 || (data[i].score >= 14 && data[i].score <= 27) || data[i].score === 27)) { 
    const image = "4_yellow.svg";
    imageContainer.innerHTML = `<img src="${image}" class="four">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Queens" && (data[i].score === 28 || x > 28)) { 
    const image = "4_red.svg";
    imageContainer.innerHTML = `<img src="${image}" class="four">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;


//STATEN ISLAND
  } else if (data[i].boro == "Staten Island" && (data[i].score < 14)) {
    const image = "5_green.svg";
    imageContainer.innerHTML = `<img src="${image}" class="five">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Staten Island" && (data[i].score === 14 || (data[i].score >= 14 && data[i].score <= 27) || data[i].score === 27)) {
    const image = "5_yellow.svg";
    imageContainer.innerHTML = `<img src="${image}" class="yellow-svg" class="five">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;

  } else if (data[i].boro == "Staten Island" && (data[i].score === 28 || x > 28)) {
    const image = "5_red.svg";
    imageContainer.innerHTML = `<img src="${image}" class="red-svg" class="five">`;
    critContainer.innerHTML = data[i].critical_flag;
    violationContainer.innerHTML = data[i].violation_code;


//ELSE    
  } else {
    const image = "mug.svg";
     imageContainer.innerHTML = `<img src="${image}">`;
     critContainer.innerHTML = data[i].critical_flag;
     violationContainer.innerHTML = data[i].violation_code;
  }

  // select the data being used
  

  // take data and equal it to text
//   if (data[i].critical_flag == "Critical") {
//   let colContainer =  document.querySelector(".middle");
//   let critItem = document.createElement('div');
//   critItem.innerHTML = 
//   `<div class="box">
//   <h1>CRITICAL</h1>
//   </div>`;
//   colContainer.appendChild(critItem);
  
// } else if (data[i].critical_flag == "Not Critical") {
//   let colContainer =  document.querySelector(".middle");
//   let critItem = document.createElement('div');
//   critItem.innerHTML =  
//   `<div class="box">
//   <h1>NON-CRITICAL</h1>
//   </div>`; 
//   colContainer.appendChild(critItem);
// }
  
});


}};