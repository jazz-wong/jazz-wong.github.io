
fetch(`https://health.data.ny.gov/resource/cnih-y5dw.json?$query=SELECT%0A%20%20%60facility%60%2C%0A%20%20%60address%60%2C%0A%20%20%60date%60%2C%0A%20%20%60total_critical_violations%60%2C%0A%20%20%60total_crit_not_corrected%60%2C%0A%20%20%60total_noncritical_violations%60%2C%0A%20%20%60zip_code%60%2C%0A%20%20%60nys_health_operation_id%60%2C%0A%20%20%60inspection_type%60%2C%0A%20%20%60inspection_comments%60%0AWHERE%0A%20%20contains(%60facility%60%2C%20%22Cafe%22)%0A%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20Children's%20Camp%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20Children's%20Camp%5C%5CState%20Education%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20School%20K-12%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20College%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22SED%20Summer%20Feeding%20Prog.%20-%20SED%20Food%20Preparation%20Site%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20((%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Institutional%20Food%20Service%20-%20Institution%20Food%20Service%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AND%20(%60description%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20!%3D%20%22Food%20Service%20Establishment%20-%20Food%20Service%20Establishment%22)))))))`)
.then(res => res.json())
.then(data => {
    console.log(data);
    buildSite(data);
}) 

    function buildSite(data) {
  
    for(let i =0; i < data.length; i++){

    let div = document.createElement('div');
    let button = document.getElementById('facility');
  
// Loop through the data and add each item to the div
// using HTML to add the tags
div.innerHTML = ` 
<h1>${data[i].facility}</h1>
<h2>${data[i].address}</h2>
<small>${data[i].date}</small>
<em>${data[i].nys_health_operation_id}</em>
<h5>${data[i].total_critical_violations}</h5>
<h6>${data[i].total_crit_not_corrected}</h6>
<p>${data[i].total_noncritical_violations}</p>
<h3>${data[i].inspection_comments}</h3>
`
//button information inside the div
button.append(div)

        let cut = document.createElement('div');
        let bottom = document.createElement('div');
        let name = document.createElement('p');
    
    

//  buttonFacility.addEventListener('click', function(){
//                 if (item.redType === 1) {
//                     newDiv.style.display = "block";
//                 } else {
//                     newDiv.style.display = "none";
//                 }
//             });
    
    
            };         

}

          


  
  
  
  