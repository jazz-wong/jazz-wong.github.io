fetch(`https://health.data.ny.gov/resource/cnih-y5dw.json?$query=SELECT%0A%20%20%60facility%60%2C%0A%20%20%60address%60%2C%0A%20%20%60date%60%2C%0A%20%20%60total_critical_violations%60%2C%0A%20%20%60total_crit_not_corrected%60%2C%0A%20%20%60total_noncritical_violations%60%2C%0A%20%20%60zip_code%60%2C%0A%20%20%60nys_health_operation_id%60%2C%0A%20%20%60inspection_type%60%2C%0A%20%20%60inspection_comments%60%0AWHERE%0A%20%20contains(%60facility%60%2C%20%22Cafe%22)%0A%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20Children's%20Camp%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20Children's%20Camp%5C%5CState%20Education%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20School%20K-12%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20College%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22SED%20Summer%20Feeding%20Prog.%20-%20SED%20Food%20Preparation%20Site%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20Institution%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20(%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Food%20Service%20Establishment%20-%20Food%20Service%20Establishment%22)))))))`)
.then(res => res.json())
.then(data => {
    console.log(data);
    buildSite(data);
}) 
const gridItemContainer = document.getElementById('grid-container');

    function buildSite(data) {

    for(let i =0; i < data.length; i++) { 
    
    let gridItem = document.createElement('button');
    let zip_code = document.getElementById('zip');
    gridItem.classList.add('grid-item')
// Loop through the data and add each item to the div
// using HTML to add the tags
gridItem.innerHTML = `

<div class="top"> <h4>**********************************</h4></div>
<h1>${data[i].facility}</h1>
<h2>${data[i].address}</h2>
<div class="date"> 
<h3>SALE</h3>
<p>${data[i].date}</p>
<p>${data[i].nys_health_operation_id}</p>
<p>VISA XXXXXXX</p></div>

<div class ="relative">
<div class="cost">
  <div class="critical">
    <p>${data[i].total_critical_violations}.00</p>
    <p>${data[i].total_crit_not_corrected}.00</p>
  </div>

  <div class = "cost_2">
    <p>${data[i].total_noncritical_violations}.00</p> 
  </div>
  <div class="noncritical">
    <h3>CRITICAL VIOLATIONS</h3> 
    <h3>CRIT. UNCORRECTED VIOLATIONS</h3>
    <h3>TOTAL NONCRITAL VIOLATIONS</h3>
  </div>
</div>
</div>

<div class="inspection">
<h3>INSPECTION COMMENTS:</h3>
<p>${data[i].inspection_comments}</p>
<br>
<p> APPROVED</p>
<p>THANK YOU!</p><br>
<p>CUSTOMER COPY</p>
</div>

<div class="fold"></div>
<div class="cut"></div>
<div class="bottom"> <h4>**********************************</h4></div>
`
imageContainer.innerHTML = `
<img src="mug.svg">
<img src="bronx.svg">
`
//button information inside the div
gridItemContainer.append(gridItem)

gridItem.addEventListener('click', function() {
          if (zip_code >= 10001 && zip_code <= 10282) { 
            const image = "bronx.svg"; 
            image.style.display = "block";
            imageContainer.innerHTML = `<img src="${image}"`; 
          } else {
            const image = "mug.svg";
            imageContainer.innerHTML = `<img src="${image}"`;
            image.style.display = "block";
          }

        
        });
      }
    };