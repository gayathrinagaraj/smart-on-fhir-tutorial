//Global Varibales
//var patient_id="";
var pat_fname="Test";
var pat_fname1="Test";
var pat_lname1="Promistwo";
var pat_lname="Promistwo";
var gender2="";
var dobstr2="";
var KeycloakToken="";

//console.log(pat_fname);
//console.log(pat_lname);


//console.log(Pdata);

var getThetaForm = new FormData();

var currentFormId = "";

var patientResponses=[];

var thetaResult={};


//getThetaForm.append("09VS_New", "A little bit difficult");
//getThetaForm.append("21VS_New", "Good");
//getThetaForm.append("22VS_New", "A little bit of a problem");
//getThetaForm.append("23VS_New", "Somewhat of a problem");

//https://sapphire-demo.meliorix.com/cipfhir3/baseDstu3/  
//var baseurl ="http://hapi.fhir.org/baseDstu3/";
var taskId,proId,proName,patId,patName;	

var patEncounterId, patPractitionerId;
var tscore;

var Series1 = [];

function getKeycloakToken(){
	var callEasipro = {
		"async": false,
		"crossDomain": true,
		"url": baseurl_easipro+"authenticate",
		"method": "POST",
		"headers": {
			"Content-Type": "application/json"
		},
		"processData": false,
		"data":  JSON.stringify(smartObject)
}
$.ajax(callEasipro).done(function (response) {
	console.log(response);
	KeycloakToken=response.result.keyCloak_token;
	setTimeout(getKeycloakToken, 270000); 
	
})

} 

function chartOld() {
	var myWindow = window.open("", "MsgWindow", "width=1400,height=1200");
	myWindow.document.body.style.height ="800px";
	myWindow.document.body.style.width ="1200px";
}

function chart() {
	
	
	nv.addGraph(function() {
		//chartdata = [{"key":"Program 1","values":[["1990",6428.59],["1991",7079.34],["1992",4014.61],["1993",4000.77],["1994",4005.34],["1995",4182.21],["1996",4034.73],["1997",5891.87],["1998",475.89],["1999",4039.58],["2000",4000],["2001",5030.29],["2002",4000.03],["2003",4000.43],["2004",4821.92],["2005",12575.87],["2006",4000],["2007",4027.99],["2008",4800],["2009",5087.42],["2010",6584.68],["2011",4000],["2012",4600],["2013",4000],["2014",29458.22],["2015",4068.58],["2016",4700.01],["2017",4000.12],["2018",4000],["2019",4003.91],["2020",8756.47],["2021",4000],["2022",4000],["2023",4000],["2024",4500],["2025",4264.9],["2026",4222.05],["2027",4039.94],["2028",4619.64],["2029",4050],["2030",4500.34],["2031",4279.83],["2032",4000],["2033",4506.69],["2034",4000],["2035",4500],["2036",4500],["2037",4500],["2038",4000],["2039",4000],["2040",4600],["2041",4500],["2042",4000],["2043",4625.18],["2044",4600],["2045",4050],["2046",4000],["2047",4000.11],["2048",4600],["2049",4050.04],["2050",4000.19]]},{"key":"City32","values":[["1990",6428.59],["1991",7079.34],["1992",4014.61],["1993",400.77],["1994",4005.34],["1995",4182.21],["1996",4034.73],["1997",5891.87],["1998",4735.89],["1999",4039.58],["2000",4000],["2001",5030.29],["2002",4000.03],["2003",4000.43],["2004",4321.92],["2005",12575.87],["2006",4000],["2007",4027.99],["2008",4000],["2009",5087.42],["2010",6584.68],["2011",4000],["2012",4000],["2013",4000],["2014",29458.22],["2015",4068.58],["2016",4000.01],["2017",4000.12],["2018",4000],["2019",4003.91],["2020",8956.47],["2021",4000],["2022",4000],["2023",4000],["2024",4000],["2025",4264.9],["2026",4222.05],["2027",4039.94],["2028",4019.64],["2029",4000],["2030",4000.34],["2031",4279.83],["2032",4000],["2033",4006.69],["2034",4000],["2035",4000],["2036",4000],["2037",4000],["2038",4000],["2039",4000],["2040",4000],["2041",4000],["2042",4000],["2043",4627.18],["2044",4000],["2045",4000],["2046",4000],["2047",4000.11],["2048",4000],["2049",4000.04],["2050",4000.19]]}];
		chartdata = Series1;
		//window.open('https://192.168.0.37/smart-on-fhir/example-smart-app/src/views/provider/index3.html', '_blank');
		var modal = document.getElementById('chartmodal');
		modal.style.display = "block";
		
		//console.log("chartdata ========1==>>",chartdata);
		var chart = nv.models.lineChart()
		.x(function(d) { return d[0] })
		.y(function(d) { return d[1] }) 
		.margin({right: 90})
		.margin({left: 90}) 
		.margin({bottom: 80}) 
		.color(d3.scale.category10().range())
		.useInteractiveGuideline(true);

		chart.xAxis     //Chart x-axis settings
		.axisLabel('Date')
		.rotateLabels(-25)
		.tickFormat(function(d) { return d3.time.format('%m/%d/%Y %H:%M')(new Date(d)); });

		chart.yAxis     //Chart y-axis settings
		.axisLabel('Scores');

		d3.select('#chart svg')
		.datum(chartdata)
		.call(chart);

		//TODO: Figure out a good way to do this automatically
		nv.utils.windowResize(chart.update);
	
		return chart;
	});
	
}


Array.prototype.byCount= function(){
    var itm, a= [], L= this.length, o= {};
    for(var i= 0; i<L; i++){
        itm= this[i];
        if(!itm) continue;
        if(o[itm]== undefined) o[itm]= 1;
        else ++o[itm];
    }
    for(var p in o) a[a.length]= p;
    return a.sort(function(a, b){
        return o[b]-o[a];
    });
}

/*
var proNameList =[];
var proIdList= [];
 var freqpname=[];
var freqpid=[];

function freqOrder(){
	console.log(practitioner_id);
	
	var settings31 = {
			"async": false,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest?requester=http://usc.edu/Practitioner/"+practitioner_id+"&_count=100&intent=order&_sort:desc=_lastUpdated",
			"contentType" : "application/json",                                                                           
			"cache" : false,
		"headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},
			"method": "GET"
		
	}
	$.ajax(settings31).done(function (response) {
		console.log(response);	
		jQuery(response.entry).each(function(i, item){
			console.log(item);
			console.log(item.resource.code.coding[0].code);
			proIdList.push(item.resource.code.coding[0].code); 
			console.log(item.resource.code.coding[0].display);
			proNameList.push(item.resource.code.coding[0].display);
		});
		
		
	});
	
	console.log(proNameList);
	console.log(proIdList);
	freqpname= proNameList.byCount();

	console.log(freqpname);
	
	jQuery(freqpname).each(function(i, item1){
			//console.log(item1);
		
		jQuery(proNameList).each(function(j, item2){
			//console.log(item2);
			//console.log(item1);
			
			if (item2 == item1){
				if (freqpid.includes(proIdList[j]))
				{
					console.log("already there");
				}
				else{
				freqpid.push(proIdList[j]);
				}
				return true;
			}
			
		});
		
	});
	
	console.log(freqpid);
	
	 var freqSelect = document.getElementById("freqlist");
           
            for (var i=0; i < freqpname.length; i++) {
               
                var opt = freqpname[i];
                var val = freqpid[i];
                var freqel = document.createElement("option");
                                  
                //Taken extra attribute to support datalist in IE7
                freqel.textContent = opt;
                freqel.value = val;
                freqel.id = val;                
                freqSelect.appendChild(freqel);    
                                
            }
	
	
	
	
	
	
}

*/

function freqOrder_test(){
	var pnlist=[];
	var fpnlist =[];
	//console.log(practitioner_id);
	
	var settings31 = {
			"async": false,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest?requester=http://usc.edu/Practitioner/"+practitioner_id+"&_count=100&intent=order&_sort:desc=_lastUpdated",
			"contentType" : "application/json",                                                                           
			"cache" : false,
		       /* "headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},*/		
			"method": "GET"
		
	}
	$.ajax(settings31).done(function (response) {
		//console.log(response);	
		//console.log("This worked");
		jQuery(response.entry).each(function(i, item){
			//console.log(item);
			//console.log(item.resource.code.coding[0].display);
			pnlist.push(item.resource.code.coding[0].display);
		});
		
		
	});
	
	//console.log(pnlist);
	
	fpnlist= pnlist.byCount();

	//console.log(fpnlist);
	
	
	return fpnlist;
	
}







$(document).ready(function(){
 
  // Initialize select2
  $("#selectform").select2({
	  placeholder :"Please select an instrument from the list"
  });

  
	
	
  // Read selected option
  $('#but_read').click(function(){
    var formname = $('#selectform option:selected').text();
    var formid = $('#selectform').val();
	  
     console.log(formname + "and" + formid); 
	var success_message = 'Order for '+formname+' is placed.';
	var error_message = 'Order is not valid, please select from the list.'
	
	  
	 //console.log(form_name);
	var flag = 'unset';
	var i;

   	 for (i = 0; i < form_name.length; i++) {
        if(form_name[i] == formname){
			flag = 'set';
			break;
		}
	}

	if(flag == 'unset'){
	document.getElementById('order_successful').style.display = "none";
	document.getElementById('order_unsuccessful').innerHTML = error_message;
	document.getElementById('order_successful').style.display = "inline";
	return;
	}
	
	
	  if(flag == 'set') {
		  
		  //console.log(patient_id);
		//console.log(encounter_id);
		//  console.log(practitioner_id);
		 // console.log(pat_fname);
		  //console.log(pat_lname);
	  
	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];

	var prdata = "{\r\n\t\"resourceType\": \"ProcedureRequest\",\r\n\t\"status\": \"active\",\r\n\t\"intent\": \"order\",\r\n\t\"category\": [{\r\n\t\t\"coding\": [{\r\n\t\t\t\"system\": \"http://snomed.info/sct\",\r\n\t\t\t\"code\": \"386053000\",\r\n\t\t\t\"display\": \"Evaluation procedure (procedure)\"\r\n\t\t}],\r\n\t\t\"text\": \"Evaluation\"\r\n\t}],\r\n\t\"code\": {\r\n\t\t\"coding\": [{\r\n\t\t\t\"system\": \"http://loinc.org\",\r\n\t\t\t\"code\":  \""+formid+"\",\r\n\t\t\t\"display\":\""+formname+"\"\r\n\t\t}],\r\n\t\t\"text\": \""+formname+"\"\r\n\t},\r\n\t\"occurrenceDateTime\": \""+date1+"\",\r\n\t\"subject\": {\r\n\t\t\"display\": \""+pat_fname+" "+pat_lname+"\",\r\n        \"reference\": \"http://hl7.org/fhir/sid/us-ssn/Patient/"+patient_id+"\"\r\n\t},\r\n\t\"context\": {\r\n    \"reference\": \"http://usc.edu/Encounter/"+encounter_id+"\" \r\n  },\r\n\t\"requester\": {\r\n    \"agent\": {\r\n      \"reference\": \"http://usc.edu/Practitioner/"+practitioner_id+"\"\r\n    }\r\n\t}\r\n}";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	
	var settings = {
		"async": true,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest",
			"method": "POST",
			"contentType" : "application/json",
			"cache": false,
		       /* "headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},	*/	
			"processData": false,
			"data": prdata
		
			
	}
	$.ajax(settings).done(function (response) {
		//console.log("pro-test");
		//console.log(response);
		//console.log("Posted Procedure Request");
		orderStatus();
		document.getElementById('order_unsuccessful').style.display = "none";
		document.getElementById('order_successful').innerHTML = success_message;
		$("#order_successful").show();
		setTimeout(function() { $("#order_successful").hide(); }, 5000);
	
		
		//$("#selectform").val('').trigger('change');
		//$("#selectform").text('').trigger('change');
		// $('#selectform option:selected').text('').trigger('change');
		//setTimeout(function(){location.reload()},5200);
	});  
	  
		  //location.reload();
		  
	/*	  
		  
	  var favdata = {
 "resourceType": "List",
 "status": "current",
 "code": {
 "coding": [
 {
 "system": "http://loinc.org",
 "code": formid,
 "display": formname
 }
 ],
 "text":formname
 },
 "occurrenceDateTime": date1,
 "subject": {
 "display": "Besos Trojanmed",
 "reference": "http://hl7.org/fhir/sid/us-ssn/Patient/" + patient_id
 },
 "context": {
 "reference": "http://usc.edu/Encounter/" + encounter_id
 },
 "requester": {
 "agent": {
 "reference": "http://usc.edu/Practitioner/" + practitioner_id
 }
 }
};
var fdata = JSON.stringify(favdata);
		  
	var settings102 = {
		"async": true,
			"crossDomain": true,
			"url": baseurl+"List",
			"method": "POST",
			"contentType" : "application/json",
			"headers": {
				"Authorization" : "Bearer "+ KeycloakToken,
				"Access-Control-Allow-Headers": "x-requested-with",
				"cache" : false,
				"Cache-Control": "no-cache"
			//"headers": {
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			},
			"processData": false,
			"data": fdata
		
			
	}
	$.ajax(settings102).done(function (response) {
		
		console.log(response);
		
	});   */
	  
  } 
	  
	  
	  
	   
  });
	
	formname ='';
	flag ='unset';
	//$('#selectform option:selected').text('').trigger('change');
});



$(document).ready(function(){
 
  // Initialize select2
   $("#freqlist").select2();
  
	
	
  // Read selected option
  $('#f_order').click(function(){
    var formname1 = $('#freqlist option:selected').text();
    var formid1 = $('#freqlist').val();
     
	var success_message = 'Order for '+formname1+' is placed.';
	var error_message = 'Order is not valid, please select from the list.'
	
	  
	 console.log(freqpname);
	var flag1 = 'unset';
	var i;
   	 for (i = 0; i < freqpname.length; i++) {
        if(freqpname[i] == formname1){
			flag = 'set';
			break;
		}
	}
	if(flag1 == 'unset'){
	document.getElementById('order_successful').style.display = "none";
	document.getElementById('order_unsuccessful').innerHTML = error_message;
	document.getElementById('order_successful').style.display = "inline";
	return;
	}
	
	
	  if(flag1 == 'set') {
	
	  
	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
	var prdata = "{\r\n\t\"resourceType\": \"ProcedureRequest\",\r\n\t\"status\": \"active\",\r\n\t\"intent\": \"order\",\r\n\t\"category\": [{\r\n\t\t\"coding\": [{\r\n\t\t\t\"system\": \"http://snomed.info/sct\",\r\n\t\t\t\"code\": \"386053000\",\r\n\t\t\t\"display\": \"Evaluation procedure (procedure)\"\r\n\t\t}],\r\n\t\t\"text\": \"Evaluation\"\r\n\t}],\r\n\t\"code\": {\r\n\t\t\"coding\": [{\r\n\t\t\t\"system\": \"http://loinc.org\",\r\n\t\t\t\"code\":  \""+formid1+"\",\r\n\t\t\t\"display\":\""+formname1+"\"\r\n\t\t}],\r\n\t\t\"text\": \""+formname1+"\"\r\n\t},\r\n\t\"occurrenceDateTime\": \""+date1+"\",\r\n\t\"subject\": {\r\n\t\t\"display\": \""+pat_fname+" "+pat_lname+"\",\r\n        \"reference\": \"http://hl7.org/fhir/sid/us-ssn/Patient/"+patient_id+"\"\r\n\t},\r\n\t\"context\": {\r\n    \"reference\": \"http://usc.edu/Encounter/"+encounter_id+"\" \r\n  },\r\n\t\"requester\": {\r\n    \"agent\": {\r\n      \"reference\": \"http://usc.edu/Practitioner/"+practitioner_id+"\"\r\n    }\r\n\t}\r\n}";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	
	var settings = {
		"async": true,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest",
			"method": "POST",
			"contentType" : "application/json",
			/* "headers": {
				"Authorization" : "Bearer "+ KeycloakToken,
				"Access-Control-Allow-Headers": "x-requested-with",
				"cache" : false,	
				"Cache-Control": "no-cache"
			}, */
		  			
		        "processData": false,
			"data": prdata
		
			
	}
	$.ajax(settings).done(function (response) {
		//console.log("pro-test");
		//console.log(response);
		//console.log("Posted Procedure Request");
		orderStatus();
		document.getElementById('order_unsuccessful').style.display = "none";
		document.getElementById('order_successful').innerHTML = success_message;
		$("#order_successful").show();
		setTimeout(function() { $("#order_successful").hide(); }, 5000);
	
		
		$("#freqlist").val('').trigger('change');
		//$("#selectform").text('').trigger('change');
		 $('#freqlist option:selected').text('').trigger('change');
		//setTimeout(function(){location.reload()},5200);
	});  
	  
		  //location.reload();
	  }
   });
		  
 });	    



$(document).ready(function(){
 
  // Initialize select2
  $("#selectform").select2();

  // Read selected option
  $('#add_fav').click(function(){
    var formname = $('#selectform option:selected').text();
    var formid = $('#selectform').val();
     
	//console.log(formname + "and" + formid); 
	  
	  var success_message = formname+' is added to favorites';
	var error_message = 'Instrument is not valid, please select from the list.'
	
	  
	 //console.log(form_name);
	var flag = 'unset';
	var i;

   	 for (i = 0; i < form_name.length; i++) {
        if(form_name[i] == formname){
			flag = 'set';
			break;
		}
	}

	if(flag == 'unset'){
	document.getElementById('order_successful').style.display = "none";
	document.getElementById('order_unsuccessful').innerHTML = error_message;
	document.getElementById('order_successful').style.display = "inline";
	return;
	}
	
	
	  if(flag == 'set') {
	  
	  
	  
	  var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
	  var favdata = {
 "resourceType": "List",
 "status": "current",
 "code": {
 "coding": [
 {
 "system": "http://loinc.org",
 "code": formid,
 "display": formname
 }
 ],
 "text":formname
 },
 "occurrenceDateTime": date1,
 "subject": {
 "display": pat_fname+" "+pat_lname,
 "reference": "http://hl7.org/fhir/sid/us-ssn/Patient/" + patient_id
 },
 "context": {
 "reference": "http://usc.edu/Encounter/" + encounter_id
 },
 "requester": {
 "agent": {
 "reference": "http://usc.edu/Practitioner/" + practitioner_id
 }
 }
};
var fdata = JSON.stringify(favdata);
		  
	var settings102 = {
		"async": true,
			"crossDomain": true,
			"url": baseurl+"List",
			"method": "POST",
			"contentType" : "application/json",
		        "headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},		
			//"headers": {
				//"Authorization" : "Bearer "+ KeycloakToken,
				//"Access-Control-Allow-Headers": "x-requested-with",
				//"cache" : false,
				//"Cache-Control": "no-cache"
			//"headers": {
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			//},
			"processData": false,
			"data": fdata
		
			
	}
	$.ajax(settings102).done(function (response) {
		
		//console.log(response);
		orderStatus();
		document.getElementById('order_unsuccessful').style.display = "none";
		document.getElementById('order_successful').innerHTML = success_message;
		$("#order_successful").show();
		setTimeout(function() { $("#order_successful").hide(); }, 5000);
		
	});
		  
		  
	  }
	  
	  
	  
	  
 });
	
	formname ='';
	flag ='unset';
	
});




function orderPRO(formname,formoid){
	//console.log(formname);
  	//console.log(formoid);
	var sformname = formname;
	var sformoid = formoid;
	var success_message = 'Order for '+sformname+' is placed.';
	var error_message = 'Order is not valid, please select from the list.'
	
	
	
	
	  
	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];

	var prdata = "{\r\n\t\"resourceType\": \"ProcedureRequest\",\r\n\t\"status\": \"active\",\r\n\t\"intent\": \"order\",\r\n\t\"category\": [{\r\n\t\t\"coding\": [{\r\n\t\t\t\"system\": \"http://snomed.info/sct\",\r\n\t\t\t\"code\": \"386053000\",\r\n\t\t\t\"display\": \"Evaluation procedure (procedure)\"\r\n\t\t}],\r\n\t\t\"text\": \"Evaluation\"\r\n\t}],\r\n\t\"code\": {\r\n\t\t\"coding\": [{\r\n\t\t\t\"system\": \"http://loinc.org\",\r\n\t\t\t\"code\":  \""+sformoid+"\",\r\n\t\t\t\"display\":\""+sformname+"\"\r\n\t\t}],\r\n\t\t\"text\": \""+sformname+"\"\r\n\t},\r\n\t\"occurrenceDateTime\": \""+date1+"\",\r\n\t\"subject\": {\r\n\t\t\"display\": \""+pat_fname+" "+pat_lname+"\",\r\n        \"reference\": \"http://hl7.org/fhir/sid/us-ssn/Patient/"+patient_id+"\"\r\n\t},\r\n\t\"context\": {\r\n    \"reference\": \"http://usc.edu/Encounter/"+encounter_id+"\" \r\n  },\r\n\t\"requester\": {\r\n    \"agent\": {\r\n      \"reference\": \"http://usc.edu/Practitioner/"+practitioner_id+"\"\r\n    }\r\n\t}\r\n}";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	
	
	var settings = {
			"async": true,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest",
			"method": "POST",
			"contentType" : "application/json",
			/* "headers": {
				"Authorization" : "Bearer "+ KeycloakToken,
				//"Access-Control-Allow-Headers": "x-requested-with",
				//"cache" : false,
				"Cache-Control": "no-cache"
			//"headers": {
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			}, */
			"processData": false,
			"data": prdata
	}
	$.ajax(settings).done(function (response) {
		//console.log("pro-test");
		//console.log(response);
		//console.log("Posted Procedure Request");
		orderStatus();
		document.getElementById('order_unsuccessful').style.display = "none";
		document.getElementById('order_successful').innerHTML = success_message;
		$("#order_successful").show();
		setTimeout(function() { $("#order_successful").hide(); }, 10000);
	});
	  
	
}


var form_oid=[];
var form_name=[];



//var server="https://calv-easiprox.med.usc.edu/ac";
var FormOID = "96FE494D-F176-4EFB-A473-2AB406610626";  // Sample form -- replace with your FormOID
var promisUID="001";

function callback1(data){
	//console.log(data);

}

function listForms() {
	
	var fpnlistforms = freqOrder_test();
	var acforms=[];
	var formoid=[];
	var formname=[];
	var temp_formoid=[];
        var temp_formname=[];
	
	//console.log (fpnlistforms);
	
	console.log(ACdata);
			//console.log(data.Form);
			
			

           	 var forms = ACdata.entry;
	  	acforms= ACdata.entry;
			
			//acforms= data.Form;
			
			
            //console.log(data.entry);
            //console.log("all forms"+forms);

           
	var acOption = document.getElementById("allList");
	var freqOption = document.getElementById("freqList");	
			
			for (var x=0;x <= fpnlistforms.length; x++)
			{
			    for (var j=0; j < acforms.length; j++) {
				    var temp = acforms[j].resource.title;
				    
				     // var temp = acforms[j].Name;
				    //console.log(temp);

				 if (fpnlistforms[x]== temp)
				 {
					 console.log(temp);
					 console.log(acforms[j].resource.id);
						//console.log(acforms[j].OID);
					 
					 formoid.push(forms[j].resource.id);
					formname.push(forms[j].resource.title);


				 }
				    else{
					    temp_formoid.push(forms[j].resource.id);
					   temp_formname.push(forms[j].resource.title);

				    }


			    }

			}
			
			
		var form_oid_test = formoid.concat(temp_formoid);	
		var form_name_test = formname.concat(temp_formname);
			
			var flnum = formname.length;
		
			var select = document.getElementById("selectform"); 
			//console.log("all forms"+forms);
					for (var i=0; i < flnum; i++) {
						form_oid[i]=forms[i].resource.id;
						form_name[i]=forms[i].resource.title;
						//var opt = forms[i].resource.title;
						//var val = forms[i].resource.id;
						var opt = form_name_test[i];
						var val = form_oid_test[i];
						//console.log(opt);
						//console.log(val);
						var el = document.createElement("option");

						//Taken extra attribute to support datalist in IE7
						el.textContent = opt;
						el.value = val;
						el.id = val;				
						freqOption.appendChild(el);	

					}
			
					for (var i=flnum; i < forms.length; i++) {
						form_oid[i]=forms[i].resource.id;
						form_name[i]=forms[i].resource.title;
						//var opt = forms[i].resource.title;
						//var val = forms[i].resource.id;
						var opt = form_name_test[i];
						var val = form_oid_test[i];
						//console.log(opt);
						//console.log(val);
						var el = document.createElement("option");

						//Taken extra attribute to support datalist in IE7
						el.textContent = opt;
						el.value = val;
						el.id = val;				
						acOption.appendChild(el);	

					}
	
	
	
	/*
	
	$.ajax({
		//url: baseurl_acapi + "/2014-01/Forms/.json",
		//url: "https://assessmentcenter.net/ac_api/2014-01/Forms/.json",
		url: baseurl_AC_API + "2018-10/Questionnaire?_Summary",
		cache: false,
		type: "POST",
		// data: "",
		dataType: "json",
		beforeSend: function(xhr) {
			var username = "08B2BC59-54F7-4A8A-8FC8-28B20D04B909";
			var pass = "B794E66E-287E-44BF-9C82-31E3703B502C";
			//var Token = "MkY5ODQ0MTktNTAwOC00RTQyLTgyMTAtNjg1OTJCNDE4MjMzOjIxQTY3M0U4LTk0OTgtNERDMi1BQUI2LTA3Mzk1MDI5QTc3OA==";

			var base64 = btoa(username + ":" + pass);
			xhr.setRequestHeader("Authorization", "Basic " + base64);
			//xhr.setRequestHeader("Authorization", "Basic " + Token);
		},
		success: function(data) { 

			console.log(data);
			//console.log(data.Form);
			
			

           	 var forms = data.entry;
	  	acforms= data.entry;
			
			//acforms= data.Form;
			
			
            //console.log(data.entry);
            //console.log("all forms"+forms);

           
	var acOption = document.getElementById("allList");
	var freqOption = document.getElementById("freqList");	
			
			for (var x=0;x <= fpnlistforms.length; x++)
			{
			    for (var j=0; j < acforms.length; j++) {
				    var temp = acforms[j].resource.title;
				    
				     // var temp = acforms[j].Name;
				    console.log(temp);

				 if (fpnlistforms[x]== temp)
				 {
					 console.log(temp);
					 console.log(acforms[j].resource.id);
						//console.log(acforms[j].OID);
					 
					 formoid.push(forms[j].resource.id);
					formname.push(forms[j].resource.title);


				 }
				    else{
					    temp_formoid.push(forms[j].resource.id);
					   temp_formname.push(forms[j].resource.title);

				    }


			    }

			}
			
			
		var form_oid_test = formoid.concat(temp_formoid);	
		var form_name_test = formname.concat(temp_formname);
			
			var flnum = formname.length;
		
			var select = document.getElementById("selectform"); 
			//console.log("all forms"+forms);
					for (var i=0; i < flnum; i++) {
						form_oid[i]=forms[i].resource.id;
						form_name[i]=forms[i].resource.title;
						//var opt = forms[i].resource.title;
						//var val = forms[i].resource.id;
						var opt = form_name_test[i];
						var val = form_oid_test[i];
						//console.log(opt);
						//console.log(val);
						var el = document.createElement("option");

						//Taken extra attribute to support datalist in IE7
						el.textContent = opt;
						el.value = val;
						el.id = val;				
						freqOption.appendChild(el);	

					}
			
					for (var i=flnum; i < forms.length; i++) {
						form_oid[i]=forms[i].resource.id;
						form_name[i]=forms[i].resource.title;
						//var opt = forms[i].resource.title;
						//var val = forms[i].resource.id;
						var opt = form_name_test[i];
						var val = form_oid_test[i];
						//console.log(opt);
						//console.log(val);
						var el = document.createElement("option");

						//Taken extra attribute to support datalist in IE7
						el.textContent = opt;
						el.value = val;
						el.id = val;				
						acOption.appendChild(el);	

					}
			
			

		},

		error: function(jqXHR, textStatus, errorThrown) {
			document.write(jqXHR.responseText + ':' + textStatus + ':' + errorThrown);
		}
	});  
	*/
	

} 


/*

function prorecommend() {	
	patient_id="";
	gender2="";
	dobstr2="";
	var recdata= "{\n   \"hook\" : \"patient-view\",\n   \"hookInstance\" : \"d1577c69-dfbe-44ad-ba6d-3e05e953b2ea\",\n   \"fhirServer\" : \"https://54.202.74.232:80/cip-fhir3/baseDstu3\",\n   \"user\" : \"Practitioner/"+practitioner_id+"\",\n   \"patient\": \""+patient_id+"\",\n   \"context\" : {\n       \"patientId\" : \""+patient_id+"\"\n   },\n   \"prefetch\" : {\n      \"patient\" : {\n         \"resourceType\" : \"Patient\",\n         \"gender\" : \""+gender2+"\",\n         \"birthDate\" : \""+dobstr2+"\",\n         \"id\" : \""+patient_id+"\",\n         \"active\" : true\n      }\n   }\n}";			

	var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://calv-easiprox.med.usc.edu/a2d2/api/v2/services/pro-recommend-usc",
			"method": "POST",
			"headers": {
				"Content-Type": "application/json",
				"Cache-Control": "no-cache"
			},
			"processData": false,
			"data": recdata
	}
	$.ajax(settings).done(function (response) {
		//console.log(response);

		jQuery(response).each(function(i, item){

			//console.log(item.cards)
			jQuery(item.cards).each(function(j, item){
				var $t1 = item.summary;
				var $t2 = item.detail;
				var $t3 = item.source.label;
				var $t4;
				jQuery(item.suggestions).each(function(k, item){
					$t4 = item.label;

				})
				jQuery(item.links).each(function(l, item){
					$t5 = item.label;
					$t6 = item.url;

				})

				$("#tab3").append("<div class='panel panel-default'>	<div id='rec' class='panel-body'><b style='color:#0079BE;font-size: 16px;'>"+$t1 + "</b></br>"+ "<I style='font-size: 12px;'>Source: <span style='color:blue;font-size: 12px;'>"+$t3 + "</span></I></br></br>"+$t2+"</br><button class='button button4' type='button' onclick='alert('Test!')'>"+ $t4+"</button></br><a href='"+$t6+"'>"+$t5+"</a></div> </div>")

				$("rec").append("<b>"+$t1+"</b>");
				$("rec").append("</br>");$("rec").append("</br>");
				$("rec").append($t2);
				$("rec").append("</br>");$("rec").append("</br>");$("rec").append("</br>");

			})

		})
	});

}

*/






var res_score1;	
var res_score2;			
function orderStatus() {
	// Pros to be completed
		
	
	
	
	
	
	var settings31 = {
			"async": false,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest?subject=http://hl7.org/fhir/sid/us-ssn/Patient/"+patID+"&_count=20&intent=order&status=active&_sort:desc=_lastUpdated",
			"contentType" : "application/json",                                                                           
			"cache" : false,
		        /* headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},	*/	
		
			"method": "GET",
			"contentType" : "application/json"
			
	}
	$.ajax(settings31).done(function (response) {
		//console.log(response);
		//console.log("pending pro");
		document.getElementById('pending_PRO').innerHTML="";
		//console.log(patID);
		var str="";
		//str = str +"<tr><th>Event Date Time</th><th>PROs Ordered</th><th>Status</th>";
		str = str +"<tr><th>Event Date Time</th><th>PROs Ordered</th><th></th><th>Status</th>";



		jQuery(response.entry).each(function(i, item){
			//console.log(item.resource.code.text);
			//console.log(item.resource.id);
			//console.log(item.resource.occurrenceDateTime);
			
			var pro_id= item.resource.code.coding[0].code;
			var pro_name= item.resource.code.coding[0].display;
			var task_id= item.resource.id;
			var pat_name= item.resource.subject.display;	
			var temp = item.resource.subject.reference;
			var pat_id= temp.substr(-7); 
			
			//console.log(task_id);
			//console.log(pro_id);
			//console.log(pro_name);
			//console.log(pat_id);
			//console.log(pat_name);
						
			

			var msec = Date.parse(item.resource.occurrenceDateTime);
			var d = new Date(msec);
			var date1 = d.toLocaleString("en-US"); 
			//console.log("pending list");
			//console.log(date1);
			
			var task_id= item.resource.id;

			var proname1 = item.resource.code.text;
			if(proname1){
			if (proname1.match(/Please/g)!="Please")
			{
				str = str +"<tr><td>" +date1+"</td>";
				str = str +"<td>"+proname1 +"</td>";
				str = str +"<td><button class='cancelbtn'; onclick='cancelOrder(\""+task_id+"\",\"" +pro_id+"\",\"" +pro_name+"\",\"" +pat_id+"\",\"" +pat_name+ "\")'; >Cancel Order</button></td>";
				str = str +"<td>Ordered</td>";	
			}
		}
		});		
		document.getElementById('pending_PRO').innerHTML += str;
	});
	

	

	
	
	var datatoday = new Date();
	var datatodays = datatoday.setDate(new Date(datatoday).getDate() + 2);
	var todate = new Date(datatodays);
	//console.log(todate);
	var todayDate = todate.toISOString().slice(0,10);
	//console.log(todayDate);
	//console.log(access_token);
	//console.log(patID +"test");
	document.getElementById('t02').innerHTML="";
	var str="";
	str = str +"<tr><th>Event Date Time</th><th>PROs Ordered</th><th>Status</th> <th>Results</th> <th>Ref Range</th> </tr>";
	
		
var settings = {
  "url": "https://fhir3-stage.elimuinformatics.com/baseDstu3/Observation?subject=https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/"+patient_id+"&_count=15&_sort:desc=_lastUpdated",
	//"url": "https://fhir3-stage.elimuinformatics.com/baseDstu3/Observation?subject=https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/"+patient_id+"&_count=15&_sort:desc=_id",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
	
	jQuery(response.entry).each(function(i, item){
			//console.log(item);
			//console.log(item.resource.code.coding[0].display);
			//console.log(item.resource.valueQuantity.value);
		var proname= item.resource.code.coding[0].display;
		var score = item.resource.valueQuantity.value;
		var msec = Date.parse(item.resource.meta.lastUpdated);
		
		//var msec = Date.parse(item.resource.effectiveDateTime);
		
		var d = new Date(msec);
		var date1 = d.toLocaleString("en-US");
		console.log(msec);
		
		var x =["1584774000000","78"];
		var y =["1593586800000","63"];
		
		
		
		
		var flag="";

			var value = [msec,score];
			
			for(i=0;i<Series1.length;i++)
			{
				if (proname == Series1[i].key){
					
					Series1[i].values.push(value);
					
					flag="Y";	
				}
				
			}
		/*
		 for(i=0;i<Series1.length;i++)
		{
		
		if(Series1[i].key == "PROMIS Bank v1.2 - Mobility T-score")
		   {
		   Series1[i].values.push(x);
		}
			
			if(Series1[i].key == "PROMIS SF v2.0 - Physical Function 10a T-score")
		   {
		   Series1[i].values.push(y);
		}
			
			
		}*/

			if (flag !="Y" )
			{
				let temp ={
						key  : proname,
						values : [value] };

				Series1.push(temp);
			}
			
		
			flag="";   

			str = str +"<tr><td>" +date1+"</td>";
			str = str +"<td>"+proname +"</td>";
			str = str +"<td>Completed</td>";
			str = str +"<td><a href =\'#\' onclick=\'chart();return false;'>"+score+"</a></td><td> 1 - 100</td> </tr>";
		
		
		});
	
	document.getElementById('t02').innerHTML += str;
	
});
	/*

	$.ajax({
		
		//url: "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/DocumentReference?patient="+patID+"&created=ge2019-04-01&created=le"+ todayDate+"&_count=23&_limit=23",
		//https://fhir-ehr.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference?patient=4342008&created=ge2019-04-01&created=le2019-12-02
		//https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference?patient=12668019&created=ge2020-01-01&created=le2020-02-11
		      //https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference?patient=12668019&created=ge2020-11-01&created=le2020-11-06
		url: "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference?patient="+patID+"&created=ge2020-04-01&created=le"+ todayDate,
		cache: false,
		crossDomain: true,
		type: "GET",
		beforeSend: function(xhr) {
			
			console.log(access_token);
			//xhr.setRequestHeader("Authorization", "Bearer eyJraWQiOiIyMDE5LTAzLTEyVDE3OjUyOjI3LjkzOC5lYyIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2In0.eyJpc3MiOiJodHRwczpcL1wvYXV0aG9yaXphdGlvbi5zYW5kYm94Y2VybmVyLmNvbVwvIiwiZXhwIjoxNTUyNDE0MDAzLCJpYXQiOjE1NTI0MTM0MDMsImp0aSI6Ijk5ZTgyZGI3LWIyYjAtNGNlMy04NDZhLTBjYWEzNWM4ZTdlMiIsInVybjpjZXJuZXI6YXV0aG9yaXphdGlvbjpjbGFpbXM6dmVyc2lvbjoxIjp7InZlciI6IjEuMCIsInByb2ZpbGVzIjp7InNtYXJ0LXYxIjp7ImF6cyI6InN5c3RlbVwvUGF0aWVudC5yZWFkIHN5c3RlbVwvRG9jdW1lbnRSZWZlcmVuY2UucmVhZCBzeXN0ZW1cL0RvY3VtZW50UmVmZXJlbmNlLndyaXRlIn19LCJjbGllbnQiOnsibmFtZSI6InN5c190ZXN0IiwiaWQiOiIyZmY5NDRlYy00YmM3LTQxNzctYTBhMy1kMmI1MDI0MzVlYTEifSwidGVuYW50IjoiMGI4YTAxMTEtZThlNi00YzI2LWE5MWMtNTA2OWNiYzZiMWNhIn19.SXCjS3_g-O9BbI33TEVi7mJyVfjUBg6Whre1zDjDITNbgst3vyMlWwJno8yaGQygqhEMhs_gD0FKX5I44BjVog");
			xhr.setRequestHeader("Authorization", "Bearer "+access_token);
			xhr.setRequestHeader("Accept", "application/json");
			xhr.setRequestHeader("Content-Type", "application/json");

		},
		success: function(data) { 

			//console.log(data);
			
			//console.log(DRRdata);
			//console.log("Read Doc Ref");


			
			jQuery(data.entry).each(function(i, item){
				//console.log(item);
				//console.log("completed pro list");
				//console.log( item);
				//console.log (item.resource.type.text);
				var temp = item.resource.type.text;
			        var str3 = item.resource.description;
				//console.log(str3);
				if (temp == "PROMIS Patient Response"){
					if (str3.includes("t-score")) {
						

						//console.log(item.resource.meta.lastUpdated);
						//console.log(item.resource.description);
						var str2 = item.resource.description;

						var scoretext = str2.substring(str2.length - 2, str2.length);
						var score = parseFloat(scoretext);

						var str1= item.resource.description;
						var proname = str1.slice(0,(str1.length-13));

						//console.log(score);
						//console.log(proname);
						var msec = Date.parse(item.resource.meta.lastUpdated);
						var d = new Date(msec);
						var date1 = d.toLocaleString("en-US");
						//console.log(msec);
						//console.log(date1);	
				var flag="";

			var value = [msec,score];
			
			for(i=0;i<Series1.length;i++)
			{
				if (proname == Series1[i].key){
					
					Series1[i].values.push(value);
					
					flag="Y";	
				}
			}

			if (flag !="Y" )
			{
				let temp ={
						key  : proname,
						values : [value] };

				Series1.push(temp);
			}
			
		
			flag="";   

			str = str +"<tr><td>" +date1+"</td>";
			str = str +"<td>"+proname +"</td>";
			str = str +"<td>Completed</td>";
			str = str +"<td><a href =\'#\' onclick=\'chart();return false;'>"+score+"</a></td><td> 1 - 100</td> </tr>";


		}
				}

					});

			document.getElementById('t02').innerHTML += str;

		
	},

		error: function(jqXHR, textStatus, errorThrown) {
			//document.write(jqXHR.responseText + ':' + textStatus + ':' + errorThrown);
				//console.log(jqXHR.responseText);
		}
	});

	
	*/

	

	var settings301 = {
			"async": false,
			"crossDomain": true,
			"url": baseurl+"List?subject=http://hl7.org/fhir/sid/us-ssn/Patient/"+patID+"&status=current&_sort:desc=_lastUpdated",
			"contentType" : "application/json",                                                                           
			"cache" : false,

		        /*"headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},	*/		
			"method": "GET"
			//"headers": {
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			//	
			//}"async": false,
			
	}
	$.ajax(settings301).done(function (response) {

		//console.log(response);
		//console.log("fav pro");

		//alert(response);
		//alert("fav pro");
		document.getElementById('fav_PRO').innerHTML="";
		//console.log(patID);
		var str="";
		//str = str +"<tr><th>Event Date Time</th><th>PROs Ordered</th><th>Status</th>";

		str = str +"<tr><th>PRO Name</th><th>Order</th><th>Remove from favorites</th></tr>";




		jQuery(response.entry).each(function(i, item){
			

			//console.log(item.resource.code.text);
			//console.log(item.resource.id);
			//console.log(item.resource.occurrenceDateTime);
			
			
			var pro_id= item.resource.code.coding[0].code;
			var pro_name= item.resource.code.coding[0].display;
			var task_id= item.resource.id;
			var pat_name= item.resource.subject.display;	
			var temp = item.resource.subject.reference;
			var pat_id= temp.substr(-7); 
			
			//console.log(task_id);
			//console.log(pro_id);
			//console.log(pro_name);
			//console.log(pat_id);
			//console.log(pat_name);
			
			

			

			
				str = str +"<tr><td>" +pro_name+"</td>";

				str = str +"<td><button class='cancelbtn'; onclick='orderPRO(\"" +pro_name+"\",\"" +pro_id+"\")'; >Order</button></td>";
				str = str +"<td><button class='cancelbtn'; onclick='removeFav(\""+task_id+"\",\"" +pro_id+"\",\"" +pro_name+"\",\"" +pat_id+"\",\"" +pat_name+ "\")'; >Remove</button></td></tr>";	

			
		
		});		
		document.getElementById('fav_PRO').innerHTML += str;
	});
	

	

}


//listForms();
//freqOrder();
//formDetails(FormOID);
//prorecommend();

//console.log(Series1);
//console.log("test chart values");
//Flow for the patient app


//var Server = "https://calv-easiprox.med.usc.edu/ac";
var formOID;
var formName;
var answer_item =[];
var counter= 1;
var tmpjson;
var QRjson;



function ISODateString(d) {
    function pad(n) {return n<10 ? '0'+n : n}
    return d.getUTCFullYear()+'-'
         + pad(d.getUTCMonth()+1)+'-'
         + pad(d.getUTCDate())+'T'
         + pad(d.getUTCHours())+':'
         + pad(d.getUTCMinutes())+':'
         + pad(d.getUTCSeconds())+'Z'
}

function patientPostDR (QRjson,desc){
	postQR(QRjson);
	//console.log(QRjson);
	//console.log("posting final QR to Hapi FHIR Server");
	
	var settings = {
  "async": true,
  "crossDomain": true,
		//https://omnibus-stage.elimuinformatics.com/omnibus-api/api/v2/usc/pro/fhir-resource-post/questionnaire-resp-2-xhtml

  "url": "https://omnibus-stage.elimuinformatics.com/omnibus-api/api/v2/elimu/pro/fhir-resource-post/questionnaire-resp-2-xhtml?patientId="+patID+"&docRefDescription="+desc+"&encounterId="+patEncounterId+"&practitionerId="+patPractitionerId,

  "method": "POST",
  "headers": {
	  "x-api-key" : "CK9SLO4L18W2O3L3D7JN8Z447I2982X5F5ZM1J30",
    "Content-Type": "application/json",
    //"Accept": "*/*",
    "Cache-Control": "no-cache"
  },
  "data": QRjson
	}

$.ajax(settings).done(function (response) {
  //console.log("New A2D2 service");
	console.log(response);
	
	
	
});
	
	
}


function refreshSmartToken(){
    
		//console.log(refresh_token);
		//console.log(access_token);
		//console.log("refresh token function");
	
	
	var settings200 = {
		"async": true,
		"crossDomain": true,	
  		"url": "https://authorization.cerner.com/tenants/e8a84236-c258-4952-98b7-a6ff8a9c587a/protocols/oauth2/profiles/smart-v1/token",
 		"method": "POST",
  		"headers": {
    		
   		 "Content-Type": "application/x-www-form-urlencoded",
		  "Accept": "application/json"
  			},
  		"data": {
    		"grant_type": "refresh_token",
   	 	"refresh_token": refresh_token
  		}
};

$.ajax(settings200).done(function (response) {
  console.log(response);
	access_token = response.access_token;
	//console.log("RF resp");
	//console.log(access_token);
	
});	
	//console.log(access_token);
    setTimeout(refreshSmartToken, 270000);
	
	location.reload();
	
}

	


function displayQ(){

	$('#Ques').show();
	window.location.hash = '#Ques'; 

	document.getElementById('list').style.display = 'none';
//	document.getElementById('fav').style.display = 'none';
}


//Just to hide the PRO list when the Questionnaire is displayed
function displist()
{
	//completeProcess();
	window.location.reload(false);
	//displayList();
	document.getElementById('Content').style.display = 'none';
	document.getElementById('header1').style.display = 'none';
	document.getElementById('list').style.display = 'block';
}

function assignValues(task_Id,pro_Id,pro_Name,pat_Name,encounterId,practitionerId)
{
	//console.log(task_Id);
	//console.log(pro_Id);
	//console.log(pro_Name);
	//console.log(pat_Name);
	//console.log(patID);					

	taskId = task_Id;
	proId = pro_Id;
	proName = pro_Name;
	patId = patID;					
	patName = pat_Name;
	
	patEncounterId =encounterId ;
	
	//patEncounterId = "54280423";
	
	
	patPractitionerId = practitionerId;
}


var temp= document.getElementById("pro-name");
function writeProname(proname)
{

	temp.innerHTML = proname;


}

function completeProcess(taskId,proId,proName,patId,patName){

	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
	var settings = {
			"async": false,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest/"+taskId,
			"method": "PUT",
		        /*"headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},		*/
			"contentType" : "application/json",
			
			"processData": false,
			"data": "{\n\t\"resourceType\": \"ProcedureRequest\",\n\t\"id\": \""+taskId+"\",\n\t\"status\": \"completed\",\n\t\"intent\": \"order\",\n\t\"category\": [{\n\t\t\"coding\": [{\n\t\t\t\"system\": \"http://snomed.info/sct\",\n\t\t\t\"code\": \"386053000\",\n\t\t\t\"display\": \"Evaluation procedure (procedure)\"\n\t\t}],\n\t\t\"text\": \"Evaluation\"\n\t}],\n\t\"code\": {\n\t\t\"coding\": [{\n\t\t\t\"system\": \"http://loinc.org\",\n\t\t\t\"code\": \""+proId+"\",\n\t\t\t\"display\": \""+proName+"\"\n\t\t}],\n\t\t\"text\": \""+proName+"\"\n\t},\n\t\"occurrenceDateTime\": \""+date1+"\",\n\t\"subject\": {\n\t\t\"display\": \""+patName+"\",\n        \"reference\": \"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/"+patId+"\"\n\t}\n} \n"
	}
	$.ajax(settings).done(function (response) {
		//console.log(response);
		console.log("complete process response");

		
	});
	
	
}


function removeFav(taskId,proId,proName,patId,patName){

	var payload ={
        "resourceType": "List",
        "id": taskId,
        "status": "retired",
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": proName,
              "display": proId
            }
          ],
          "text": proName
        },
        "subject": {
          "reference": "http://hl7.org/fhir/sid/us-ssn/Patient/"+patId,
          "display": patName
        }
}
	
	
	var fdata = JSON.stringify(payload);
	
	
	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
	var settings = {
			"async": false,
			"crossDomain": true,
			"url": baseurl+"List/"+taskId,
			"method": "PUT",
			"contentType" : "application/json",
		        /*"headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				"Cache-Control": "no-cache"
			},	*/	
			//"headers": {
				//"Authorization" : "Bearer "+ KeycloakToken,
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			//},
			"processData": false,
			"data": fdata
	
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log("Removed from fav");
		orderStatus();
		document.getElementById('remove_fav').innerHTML = proName + "is removed from favorites";
		$("#remove_fav").show();
		setTimeout(function() { $("#remove_fav").hide(); }, 10000);

		
	});
	
	
}



function cancelOrder(taskId,proId,proName,patId,patName){

	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
	var settings = {
			"async": false,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest/"+taskId,
			"method": "PUT",
			"contentType" : "application/json",
			"cache" : false,
			/*"headers": {
				"Authorization" : "Bearer "+ KeycloakToken,
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			}, */
			"processData": false,
			"data": "{\n\t\"resourceType\": \"ProcedureRequest\",\n\t\"id\": \""+taskId+"\",\n\t\"status\": \"completed\",\n\t\"intent\": \"order\",\n\t\"category\": [{\n\t\t\"coding\": [{\n\t\t\t\"system\": \"http://snomed.info/sct\",\n\t\t\t\"code\": \"386053000\",\n\t\t\t\"display\": \"Evaluation procedure (procedure)\"\n\t\t}],\n\t\t\"text\": \"Evaluation\"\n\t}],\n\t\"code\": {\n\t\t\"coding\": [{\n\t\t\t\"system\": \"http://loinc.org\",\n\t\t\t\"code\": \""+proId+"\",\n\t\t\t\"display\": \""+proName+"\"\n\t\t}],\n\t\t\"text\": \""+proName+"\"\n\t},\n\t\"occurrenceDateTime\": \""+date1+"\",\n\t\"subject\": {\n\t\t\"display\": \""+patName+"\",\n        \"reference\": \"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/"+patId+"\"\n\t}\n} \n"
	}
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log("complete process response");
		orderStatus();
		document.getElementById('order_cancel').innerHTML = "The PRO request for "+ proName + " was cancelled";
		$("#order_cancel").show();
		setTimeout(function() { $("#order_cancel").hide(); }, 10000);
		
	});
	
	
}

function postScore(taskId,proId,proName,patId,patName,tscore){
	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
	var settings = {
			"async": true,
			"crossDomain": true,
			"url": baseurl+"Observation",
			"method": "POST",
			"contentType" : "application/json",
			/*"headers": {
				"Authorization" : "Bearer "+ KeycloakToken
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			}, */
			"processData": false,
			"data": "{\n\t\"resourceType\": \"Observation\",\n\t\"status\": \"final\",\n\t\"code\": {\n    \t\"coding\": [\n    \t\t{\n        \t\t\"system\": \"http://loinc.org\",\n\t\t        \"code\": \"77580-9\",\n\t\t        \"display\": \""+proName+" T-score\"\n    \t\t}\n    \t]\n\t},\n\t\"category\": [{\n    \t\"coding\": [{\n        \t\"system\": \"http://hl7.org/fhir/observation-category\",\n        \t\"code\": \"survey\",\n        \t\"display\": \"Survey\"\n        }]\n    }],\n\t\"subject\": {\n\t\t\"display\": \""+patName+"\",\n        \"reference\": \"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/"+patId+"\"\n\t},\n\t\"effectiveDateTime\": \""+date1+"\",\n\t\"issued\": \""+date1+"\",\n\t\"performer\": [\n    \t{\n\t\t\t\"display\": \""+patName+"\",\n        \t\"reference\": \"https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/"+patId+"\"\n\t    }\n\t],\n\t\"valueQuantity\": {\n    \t\"value\": "+tscore+"\n     \n\t},\n\n\t\"basedOn\":\t{\n\t\t\"reference\": \"ProcedureRequest/"+taskId+"\"\n\t}\n} \n"
	}
	$.ajax(settings).done(function (response) {
		console.log(response);
	});


}


function postQR(QRjson){
	var date1 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
	var settings = {
			"async": true,
			"crossDomain": true,
			"url": baseurl+"QuestionnaireResponse",
			"method": "POST",
			"contentType" : "application/json",
			/*"headers": {
				"Authorization" : "Bearer "+ KeycloakToken,
			//	"Content-Type": "application/json",
			//	"Cache-Control": "no-cache"
			}, */
			"processData": false,
			"data": QRjson
	}
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log("Posting the final QR resource to Hapi");
	});


}


function getThetaScore(){

//getThetaForm.append("09VS_New", "A little bit difficult");
//getThetaForm.append("21VS_New", "Good");
//getThetaForm.append("22VS_New", "A little bit of a problem");
//getThetaForm.append("23VS_New", "Somewhat of a problem");
	
	

var settings = {
  "url": baseurl_AC_API+ "2013-01/Scores/"+ currentFormId + ".json",
  "method": "POST",
"async": false,
  "timeout": 0,
  "headers": {
    "Authorization": "Basic MDhCMkJDNTktNTRGNy00QThBLThGQzgtMjhCMjBEMDRCOTA5OkI3OTRFNjZFLTI4N0UtNDRCRi05QzgyLTMxRTM3MDNCNTAyQw=="
  },
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": getThetaForm
};

$.ajax(settings).done(function (response) {
  console.log(response);
	
	
	thetaResult = JSON.parse(response);
});
	
	
}


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}


function nextQuestion(linkId,linkId2,valueString,text,tempOID,itemId,ques)
	{
	 console.log(QRjson);
		
	 console.log(QRjson.status);
		
		var temp ={};
		temp["Ques"] = ques ;
		temp["Ans"] =  text;
		
		patientResponses.push(temp);
		
	
	if (QRjson.status != "completed") {
        
		getThetaForm.append(itemId, text);
	
	var ansItem1 =  {"extension":[{"url":"http://hl7.org/fhir/StructureDefinition/questionnaire-displayOrder","valueInteger": counter}],
			"linkId":linkId,
			  "item": [{
                     "linkId": linkId2,
                    "text":text,
                    "answer": [ {"valueString" : valueString}]
                   }]
	};
	
	answer_item.push(ansItem1);
	QRjson["item"]=answer_item;	
        count =count+1;
	displayQuestionnaire(QRjson,tempOID,count);
	counter = counter + 1 ;
	
	}
	
	else {
		//console.log(getThetaForm);
		
	
		
		
		
		
	console.log(QRjson);
	var theta = QRjson.extension[2].extension[0].valueDecimal;
		
		
		
	var proID = QRjson.id;
		var tscore;
		var sum = 0;
		var cnt = 0;
		
		var num;
	 if ( proID == "7DACCFC4-87F9-4C25-A8AA-53B9B677B1A7"  ||   proID == "1DC83612-CBFE-4310-A713-5802E29DFE64" )
	 {
		var QAlist =  QRjson.item ;

		jQuery(QAlist).each(function(i, item){
		      num = parseInt(item.item[0].answer[0].valueString)
		      sum = sum + num ;
		      cnt = cnt+1;
		 });

		console.log(sum);
		console.log(cnt);
		tscore =(sum * 25)/cnt;
		tscore = Math.round(tscore);
		console.log(tscore);

	 }
	 else {
		 if (theta == 0) {
			
			getThetaScore();
			console.log ("result theta zero:  " + thetaResult);
			//var form = {"Form":[{"Theta":"-1.91366212237115","StdError":"0.264347197084311"}]}
                        var form = thetaResult;
			var temp = form["Form"];

                         theta = temp[0].Theta;
			
		}
		tscore = (theta * 10) + 50;
		 tscore = Math.round(tscore);
		 console.log(tscore);
	 }

		
		var desc = QRjson.contained[0].title + "%7C t-score :"+ tscore + "%7C LOINC! 2572013653" ;
		//var desc = QRjson.contained[0].title + ", t-score : " + tscore;
		QRjson["tscore"] = tscore;
		
		QRjson["patientResponses"] = patientResponses;
		
		var myJSON_01 = JSON.stringify(QRjson);
		console.log("Encounter" + patEncounterId);
	console.log("Practitioner"+ patPractitionerId);
	patientPostDR (myJSON_01,desc)
	document.getElementById("Content").innerHTML = "You have finished the assessment.<br /> Thank you ! <div style=\'height: 50px\' ><button type=\'button\' class='button button6'  onclick=displist() > Back </button></div>";
	completeProcess(taskId,proId,proName,patId,patName);
	postScore(taskId,proId,proName,patId,patName,tscore);
	}
	
	
}
	


function displayQuestionnaire(QR, formOID,count){
	
	//console.log(QR);
	var myjson01 = JSON.stringify(QR);
	
	var temp =null;
	$.ajax({
		
		url: baseurl_AC_API+"2018-10/Questionnaire/"+formOID+"/next-q",
		cache: false,
		async:false,
		type: "POST",
		// data: "",
		data : JSON.stringify(QR) ,
		dataType: "json",
		beforeSend: function(xhr) {
			var username = "08B2BC59-54F7-4A8A-8FC8-28B20D04B909";
			var pass = "B794E66E-287E-44BF-9C82-31E3703B502C";
			//var Token = "MkY5ODQ0MTktNTAwOC00RTQyLTgyMTAtNjg1OTJCNDE4MjMzOjIxQTY3M0U4LTk0OTgtNERDMi1BQUI2LTA3Mzk1MDI5QTc3OA==";

			var base64 = btoa(username + ":" + pass);
			xhr.setRequestHeader("Authorization", "Basic " + base64);
			
			//xhr.setRequestHeader("Accept", "application/json+fhir");
			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			
		},
		success: function(data) { 
			var screen=""
			//console.log(data);
			var tempOID = data.id;
			QRjson = data;
			currentFormId = data.id;
			var temp = data.contained[0].item[0].item;
			
			if(data.status == 'completed') {
				
				console.log(patientResponses);
				
				
				
	console.log(data);
	console.log("status completed");			
	var theta = QRjson.extension[2].extension[0].valueDecimal;
		
				
		
	var proID = QRjson.id;
		var tscore;
		var sum = 0;
		var cnt = 0;
		
		var num;
	 if ( proID == "7DACCFC4-87F9-4C25-A8AA-53B9B677B1A7"  ||   proID == "1DC83612-CBFE-4310-A713-5802E29DFE64" )
	 {
		var QAlist =  QRjson.item ;

		jQuery(QAlist).each(function(i, item){
		      num = parseInt(item.item[0].answer[0].valueString)
		      sum = sum + num ;
		      cnt = cnt+1;
		 });

		console.log(sum);
		console.log(cnt);
		tscore =(sum * 25)/cnt;
		 
	
		tscore = Math.round(tscore);
		console.log(tscore);

	 }
	 else {
		 
		 if (theta == 0 ) {
			
			
			//var form1 = {"Form":[{"Theta":"-1.91366212237115","StdError":"0.264347197084311"}]}
			//var temp1 = form1["Form"];
			//console.log(temp1[0].Theta);
			
			getThetaScore();
			console.log ("result theta zero:  " + thetaResult);
			//var form = {"Form":[{"Theta":"-1.91366212237115","StdError":"0.264347197084311"}]}
                        var form = thetaResult;
			var temp =[];
			 temp = form["Form"];
			
			console.log("temp" + temp);

                         theta = temp[0].Theta;
			
			
			
		}
		 
		tscore = (theta * 10) + 50;
		tscore = Math.round(tscore);
		 console.log(tscore);
	 }

		
		var desc = QRjson.contained[0].title + "%7C t-score :"+ tscore + "%7C LOINC! 2572013653"  ;
				//var desc = QRjson.contained[0].title + ", t-score : " + tscore;
				QRjson["tscore"] = tscore;
				QRjson["patientResponses"] = patientResponses;
	
		var myJSON_01 = JSON.stringify(QRjson);
		console.log("Encounter" + patEncounterId);
	console.log("Practitioner"+ patPractitionerId);
	patientPostDR (myJSON_01,desc)
	document.getElementById("Content").innerHTML = "You have finished the assessment.<br /> Thank you ! <div style=\'height: 50px\' ><button type=\'button\' class='button button6'  onclick=displist() > Back </button></div>";
	completeProcess(taskId,proId,proName,patId,patName);
	postScore(taskId,proId,proName,patId,patName,tscore);
	}
	
		
		
			            else 
{
             console.log(count);
			var tempOID = data.id;
			QRjson = data;
			
			
			var tmp = JSON.stringify(data);
			//console.log(tmp);
			
			var temp = data.contained[0].item[count].item;
			//console.log(temp.length);
			
			
			//console.log(data.contained[0].item[count].item[0].text);
			
			if (temp.length==1){
				
				
			var itemId = data.contained[0].item[count].id;
				
				console.log(itemId);
				
				
			var linkId = data.contained[0].item[count].linkId;
                
                        var linkId2 = data.contained[0].item[count].item[0].linkId;
                
				
			var res = data.contained[0].item[count].item[0].text;
				var str = res.replace("amp;", "");	
			 var output = decodeHtml(str);
				
				console.log(output);
				
			//var str_esc = escape(str);
			//console.log(str_esc);
			//console.log(unescape(str_esc));
				
			
			


				var res = data.contained[0].item[count].item[0].text;
				var str = res.replace("amp;", "");	
				var Ques01 = decodeHtml(str);
				console.log(Ques01);
				
				var ques = Ques01;
				

				
			
			screen += "<div style=\'height: 50px; font-style: normal; font-size: 20px; margin-bottom: 5em; margin-left:3em;\'>" + Ques01 + "</div>";

			
			jQuery(data.contained[0].item[count].item[0].answerOption).each(function(i, item){
			//console.log(item.modifierExtension[0].valueString);
			//console.log(item.text);
			//console.log(item.valueCoding.code);
			//console.log(item.valueCoding.display);
			//console.log(item.valueCoding.system);
			
			var valueString = item.modifierExtension[0].valueString;
                
                if (item.valueString){
			         var text = item.valueString;
                    console.log(valueString);
                    console.log(text);
                }
                
			else {
			var code = item.valueCoding.code;
			var text = item.valueCoding.display;
			var system = item.valueCoding.system;
                
                
                console.log(valueString);
                console.log(text);
            }
			
			var temp2 = JSON.parse(tmp);
					

					screen += "<div style=\' margin-top: 0.5em;\'><input type=\'button\' class=\'block\' id=\'" + text + "\' name=\'" + text + "\' value=\'" + text + "\' onclick= \'nextQuestion( \"" +linkId+ "\", \"" +linkId2+ "\", \"" +valueString+ "\",\"" +text+ "\",\"" +tempOID+ "\",\"" +itemId+ "\",\"" +ques+ "\");  \' />" + "</div>";

				
			});
				
			document.getElementById("Content").innerHTML = screen;
			//console.log(data.contained[0].item[count].item[1].answerOption);
			
			}
			
			
			else {

			var itemId = data.contained[0].item[count].id;
				
				console.log(itemId);	

				
			var linkId = data.contained[0].item[count].linkId;
                
                 var linkId2 = data.contained[0].item[count].item[0].linkId;
                
				
				var res2 = data.contained[0].item[count].item[0].text;
				var str2 = res2.replace("amp;", "");	
				var Ques02 = decodeHtml(str2);
				console.log(Ques02);
				
				var res3 = data.contained[0].item[count].item[1].text;
				var str3 = res3.replace("amp;", "");
				console.log(str3);
				var Ques03 = decodeHtml(str3);
				console.log(Ques03);
				var Q3 = decodeHtml(Ques03 );
				console.log(Q3);
			

				var ques = Ques03 + " " + Q3;
				console.log(ques);
			screen += "<div style=\'height: 50px; font-style: normal; font-size: 20px; margin-bottom: 5em; margin-left:3em;\'>" + Ques02 + " " + Q3 +"</div>";

			
			jQuery(data.contained[0].item[count].item[1].answerOption).each(function(i, item){
			
			var valueString = item.modifierExtension[0].valueString;
			if (item.valueString){
			         var text = item.valueString;
                    console.log(valueString);
                    console.log(text);
                }
                
			else {
			var code = item.valueCoding.code;
			var text = item.valueCoding.display;
			var system = item.valueCoding.system;
                
                
                console.log(valueString);
                console.log(text);
            }
			
			
			var temp2 = JSON.parse(tmp);
					

					screen += "<div style=\' margin-top: 0.5em;\'><input type=\'button\' class=\'block\' id=\'" + text+ "\' name=\'" + text + "\' value=\'" + text + "\' onclick= \'nextQuestion( \"" +linkId+ "\", \"" +linkId2+ "\", \"" +valueString+ "\",\"" +text+ "\",\"" +tempOID+ "\",\"" +itemId+ "\",\"" +ques+ "\");  \' />" + "</div>";

				
			});
			
			document.getElementById("Content").innerHTML = screen;
				//console.log(screen);
			//console.log(data.contained[0].item[count].item[1].answerOption);
			
			}
            
            
        }		
			
			
			
		},

		error: function(jqXHR, textStatus, errorThrown) {
			document.write(jqXHR.responseText + ':' + textStatus + ':' + errorThrown);
		}
	});
	
}

var count = 0;

function setVariables(formOID,formName,date) {

	


var initialQR = {
"resourceType":"QuestionnaireResponse", 
"id":"test",
"meta": {"profile": ["http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse-adapt"]},
 "extension": [                
{"url": "http://hl7.org/fhir/StructureDefinition/questionnaire-expirationTime", "valueDate": date},
{"url": "http://hl7.org/fhir/StructureDefinition/questionnaire-finishedTime","valueDate": ""}
],
"contained": 
[
{
"resourceType": "Questionnaire",
"id": formOID, 
"meta": {"versionId": "1","lastUpdated": "2014-11-14T10:03:25","profile": ["http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-adapt"]},
"url": baseurl_AC_API + "2018-10/Questionnaire/"+formOID,
"title":formName,
"status": "active",
"date": date,
"subjectType": ["Patient"]
}
],
"questionnaire": "http://hl7.org/fhir/us/sdc/StructureDefinition/sdc-questionnaire-dynamic",
"status": "in-progress",
"subject": "TestPatient",
"authored": date
};

displayQuestionnaire (initialQR,formOID,count);
};
	
	




function addDays(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}	


function displayList(){
	var settings3 = {
		
			"async": false,
			"crossDomain": true,
			"url": baseurl+"ProcedureRequest?subject=http://hl7.org/fhir/sid/us-ssn/Patient/"+patID+"&_count=20&intent=order&status=active&_sort:desc=_lastUpdated",
			
			"contentType" : "application/json",  
		
		
                        /*"headers": {
			"Authorization" : "Bearer "+ KeycloakToken,
				//"Cache-Control": "no-cache"
			},	*/
			"method": "GET"
		
		
			
	}
	$.ajax(settings3).done(function (response) {
		console.log(response);
		console.log("test");
		console.log(response.total);
		 console.log(response.entry);

		var str="";

		str = str+ "<div class=\'row\'>	<div id=\'new\' class=\'col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\'></br>";
		
		
		if(response.total!=0){
		str = str+ "<P style=\'margin-left:1em; text-align: left; padding: 10px; \'><b>List of Questionnaires available for you</b></P>	</div></div>";
                
		str = str+ "<div id=\'tabhead\' class=\'row\' style=\'text-align: left; font-weight: bold; padding-top: 20px; \'>";
		str = str+ "<div class=\'col-4 col-lg-4 col-md-4 col-sm-4 col-sm-offset-1 col-xs-4 \'>Questionnaire</div>";
		str = str+ "<div class=\'col-2 col-lg-2 col-md-2 col-sm-2 col-sm-offset-1 col-xs-4 \'>Due Date</div>";
		str = str+"<div class=\'col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 \'>Status</div></div>";	
		}
		
		else{
			str=str+ "<P style=\'margin-left:1em; text-align: left; padding: 10px; \'><b>At this time, there are no PROs that your physician has requested you complete</b></P>	</div></div>";
		}
		
			
			
		jQuery(response.entry).each(function(i, item){
			console.log(item);
			var check = item.resource;
			console.log(check);
			
			if(check.hasOwnProperty('context')){



			var date = new Date(item.resource.occurrenceDateTime);
			var pro_id= item.resource.code.coding[0].code;
			var pro_name= item.resource.code.coding[0].display;
			var task_id= item.resource.id;
			var pat_name= item.resource.subject.display;	
			
			var encounterId = item.resource.context.reference;
			encounterId = encounterId.substring(encounterId.lastIndexOf("/") + 1);
			var practitionerId = item.resource.requester.agent.reference;
			practitionerId = practitionerId.substring(practitionerId.lastIndexOf("/") + 1);
			
			//console.log(encounterId);
			//console.log(practitionerId);
			//console.log(pro_name);
			//console.log(task_id);
			//console.log(pat_name);
						
			//var date4 = ((date.getMonth() + 1) + '/' + date1.getDate() + '/' +  date1.getFullYear())
			var date1 = addDays(date, 3);
			//console.log(date1);
			var date2=((date1.getMonth() + 1) + '/' + date1.getDate() + '/' +  date1.getFullYear());
			//console.log(date2);
			var date3 =new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
			//console.log(date3);
			var temp = item.resource.subject.reference;
			var pat_id= temp.substr(-7); 
			
				
			//console.log("pending list");
			//console.log(date);
			
			
			if(pro_name){
			if (task_id!=null && pro_name.match(/Please/g)!="Please"){

				str = str + "<div class=\'row\'  style=\'text-align: left; padding-top: 20px; font-size: 14px;\'>";

				str = str + "<div class=\'col-4 col-lg-4 col-md-4 col-sm-4 col-sm-offset-1 col-xs-4\' style=\'text-align: left; font-size: 18px;\'>"+pro_name+"</div>"
				str = str + "<div class=\'col-2 col-lg-2 col-md-2 col-sm-2 col-sm-offset-1 col-xs-4\'>"+date2+"</div>";
				str = str + "<div class=\'col-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 \'><button id=\""+task_id+"\" class=\'button button6\' type=\'button\' onclick=\' assignValues(\"" +task_id+ "\",\"" +pro_id+ "\",\"" +pro_name+ "\", \"" +pat_name+ "\",\"" +encounterId+ "\",\"" +practitionerId+ "\"); writeProname(\""+pro_name+"\"); setVariables(\"" +pro_id+ "\",\"" +pro_name+ "\", \"" +date3+ "\");  displayQ(); this.disabled=true; \'>Start</button></div></div>";
			//writeProname(\""+pro_name+"\");
			}

		}
				
			}
		});
		document.getElementById("list").innerHTML = str;
	});

}
