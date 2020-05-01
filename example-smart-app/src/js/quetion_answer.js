var questionDataDisplay="";
var currentData="";
var proPostObject="";
var j=0;
var proPostObjectDemo= {
	"resourceType":"QuestionnaireResponse", 
	"id":"test",
	"meta": {"profile": ["http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse-adapt"]},
	 "extension": [                
	{"url": "http://hl7.org/fhir/StructureDefinition/questionnaire-expirationTime", "valueDate": "2018-11-30T16:26:33"},
	{"url": "http://hl7.org/fhir/StructureDefinition/questionnaire-finishedTime","valueDate": ""}
	],
	"contained": 
	[],
	"questionnaire": "http://hl7.org/fhir/us/sdc/StructureDefinition/sdc-questionnaire-dynamic",
	"status": "in-progress",
	"subject": "TestPatient",
	"authored": "2018-11-28T16:26:33",
	"item":[]
	};

    var itemObject={
        "extension": [],
        "linkId":"",
        "answer": [{"valueInteger" :3, "valueCoding":{"system":"http://loinc.org", "code":"LA10082-8", "display":"Sometimes"}}]
        }

function getformData(formID){
	$.ajax({
		url: baseurl_AC_API+"2018-10/Questionnaire/"+formID,

		cache: false,
		type: "GET",
		async:false,
		dataType: "json",

		beforeSend: function (xhr) {
			var username = "08B2BC59-54F7-4A8A-8FC8-28B20D04B909";
			var pass = "B794E66E-287E-44BF-9C82-31E3703B502C";

			var base64 = btoa(username + ":" + pass);
			xhr.setRequestHeader("Authorization", "Basic " + base64);
		},
		success: function (data) {
			proPostObject=proPostObjectDemo;
			proPostObject.id=data.id;
			proPostObject.contained.push(createContainedObject(data));
			proPostObject.date=proPostObject.contained[0].date;
			console.log("proPostObject",proPostObject);
			console.log("stringfy",JSON.stringify(proPostObject));
			postformData();
		}
	})

}


function postformData(){
	
	$.ajax({
		url: baseurl_AC_API+"2018-10/Questionnaire/"+globalFormId+"/next-q",

		cache: false,
		type: "POST",
		async:false,
		data: JSON.stringify(proPostObject),
		dataType: "json",

		beforeSend: function (xhr) {
			var username = "08B2BC59-54F7-4A8A-8FC8-28B20D04B909";
			var pass = "B794E66E-287E-44BF-9C82-31E3703B502C";
			var base64 = btoa(username + ":" + pass)
			xhr.setRequestHeader("Authorization", "Basic " + base64);
		},
		success: function (data) {
			//tmp1=data.DateFinished;
			var tmp1=data;
            console.log("postdata",tmp1);
            showQuestions(data);
			//if data.status="completed" stop execution
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('postformData: ' + jqXHR.responseText + ':' + textStatus + ':' + errorThrown);
		}
	})

}

function createContainedObject(data){
	let tempObj={};
	tempObj.resourceType=data.resourceType;
	tempObj.id=data.id;
	tempObj.meta=data.meta;
	tempObj.meta.profile=["http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-adapt"];
	tempObj.url=data.url;
	tempObj.title=data.title;
	tempObj.status=data.status;
	tempObj.date=data.date;
    tempObj.subjectType=data.subjectType[0];
    tempObj.item=[];
return tempObj;
}

function showQuestions(data){
    currentData=data;
	var temp=data.contained[0];
	if(temp.item[0].item.length>1){
		j=1;
	}
    document.getElementById("Content").innerHTML="";
    questionDataDisplay +=  "<div class='row'><div id='question' class='col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12' style=\'height: 30px\' >" + temp.item[0].item[0].text + "</br></div></div></br></br>"

    /* Question */
    questionDataDisplay += "<div style=\'height: 40px; font-style: italic\'>" + temp.item[0].item[j].text + "</div>";
    questionDataDisplay += "<table>";
        /* Answers */
    var theQuestionID = temp.item[0].item[0].linkId;

	
    for (var i = 0; i < temp.item[0].item[j].answerOption.length ; i++) {
        questionDataDisplay += "<tr>";
        console.log('temp.item[0].item[1].answerOption[i]',temp.item[0].item[j].answerOption[i].text)
        questionDataDisplay += "<td><div style=\'height: 50px\'><input type=\'button\' class=\'btn-submit\' id=\'" +  temp.item[0].item[j].answerOption[i].extension.valueInteger + "\' name=\'" +temp.item[0].item[j].answerOption[i].text + "\' value=\'" +  temp.item[0].item[j].answerOption[i].text + "\' onclick=getAnswer("+i+") />" + "</div>";
        questionDataDisplay += "</tr>"
    }
    questionDataDisplay += "</table>";
    document.getElementById("Content").innerHTML = questionDataDisplay;
}

function getAnswer(i){
   var answeredData=currentData.contained[0].item[0].item[j].answerOption[i];
   itemObject.extension=currentData.contained[0].item[0].item[j].extension;
   itemObject.linkId=currentData.contained[0].item[0].item[j].linkId;
   itemObject.answer[0].valueCoding=answeredData.valueCoding;
   itemObject.answer[0].valueInteger=answeredData.extension[0].valueInteger;

   proPostObject.item.push(itemObject);

   proPostObject.contained[0].item.push(currentData.contained[0].item[0]);
	//if(j!=0){
  // proPostObject.contained[0].item.push(currentData.contained[0].item[0].item[j]);
	//}
   console.log("proPostObject after 1st",proPostObject);
   console.log("proPostObject after 1st",JSON.stringify(proPostObject));
   postformData();

}
