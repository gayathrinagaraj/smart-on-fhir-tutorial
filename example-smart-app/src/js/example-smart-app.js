  //Global variables  
    var MyVars = {};
    var practitioner_id="";
    var pract_name="";
    var persona="";
    var patID="";
    var encounter_id="";

var access_token="";
var refresh_token="";
var smartObject="";


  
 
(function(window){
  window.extractData = function() {
    var ret = $.Deferred();

    function onError() {
      console.log('Loading error', arguments);
      ret.reject();
    }
  

    function onReady(smart)  {
      smartObject=smart;
      getKeycloakToken();
      console.log(smart.tokenResponse);
	  if (smart.tokenResponse.patient!=null){
        patID=smart.tokenResponse.patient;
		MyVars.patid= smart.tokenResponse.patient;
	  	  console.log(patID);
		    displayList();
		  console.log("test from ex-sm-app");
		  refresh_token = smart.tokenResponse.refresh_token;
		  access_token= smart.tokenResponse.access_token;
		  console.log(refresh_token);
		   setTimeout(refreshSmartToken, 480000);
		  //refreshSmartToken();	
      }
      
      practitioner_id = smart.tokenResponse.user;
      encounter_id= smart.tokenResponse.encounter;
	console.log("inside smart app js ");    
	console.log(practitioner_id);  
	console.log(encounter_id);  
      var token = smart.tokenResponse.id_token;
      access_token= smart.tokenResponse.access_token;
	
	    
	  
      console.log(patID);
	   
      //document.getElementById("pract_id").innerHTML="<b>ID: </b>" + practitioner_id;
     
     
      
       var base64Url = token.split('.')[1];
       var base64 = base64Url.replace('-', '+').replace('_', '/');
       //console.log(JSON.parse(window.atob(base64)));
       pract_name=(JSON.parse(window.atob(base64))).name;
       //console.log(pract_name);
      document.getElementById("pract_name").innerHTML="Attending:"+pract_name;
      
      var base64Url1 = access_token.split('.')[1];
      var base641 = base64Url1.replace('-', '+').replace('_', '/');
      console.log(JSON.parse(window.atob(base641)));    
			var mytemp = JSON.parse(window.atob(base641));
			var temp11="urn:cerner:authorization:claims:version:1";
			var temp12=mytemp[temp11];
			
			var temp13=temp12.user;
			console.log("Logged in as : " + temp13.persona);
      persona = temp13.persona; 

    BrowserDetect.init();
    console.log("You are using " + BrowserDetect.browser + " with version " + BrowserDetect.version + "");
 // alert("You are using " + BrowserDetect.browser + " with version " + BrowserDetect.version + "");

      if(persona === 'provider') {
	      orderStatus();
        $('#doctor-view').show();
        if (BrowserDetect.browser.toString()!="Explorer") {
          //if (window.location == window.parent.location ) {
            // The page is in an iframe
            $('#istopFrame').show();
            $('#doctor-view-head').show();        
            } 
            else{
              $('#istopFrame').hide();
              $('#doctor-view-head').hide();
              $('article').width("100%");
              $("#docview-article").width("100%");
            }     
} else if(persona === 'patient') {
  $('#patient-view').show();

}
      
      
      
      if (smart.hasOwnProperty('patient')) {
        //console.log(smart.tokenResponse);
        var patient = smart.patient;
        var pt = patient.read();
        var obv = smart.patient.api.fetchAll({
                    type: 'Observation',
                    query: {
                      code: {
                        $or: ['http://loinc.org|8302-2', 'http://loinc.org|8462-4',
                              'http://loinc.org|8480-6', 'http://loinc.org|2085-9',
                              'http://loinc.org|2089-1', 'http://loinc.org|55284-4']
                      }
                    }
                  });
       // Search for conditions added today
    

        $.when(pt, obv).fail(onError);

        $.when(pt, obv).done(function(patient, obv) {
          var byCodes = smart.byCodes(obv, 'code');
          var gender = patient.gender;
	  window.gender2 = patient.gender;
          var id = patient.id;
	  window.patient_id = patient.id;
		
		
		
          var dob = new Date(patient.birthDate);
          var day = dob.getDate();
          var monthIndex = dob.getMonth() + 1;
          var year = dob.getFullYear();
		
		

          var dobStr = monthIndex + '/' + day + '/' + year;
	  window.dobstr2 = year  + '-' + monthIndex  + '-' + day;
          var fname = '';
          var lname = '';
		

          if (typeof patient.name[0] !== 'undefined') {
            fname = patient.name[0].given.join(' ');
            lname = patient.name[0].family.join(' ');
          }

          var height = byCodes('8302-2');
          var systolicbp = getBloodPressureValue(byCodes('55284-4'),'8480-6');
          var diastolicbp = getBloodPressureValue(byCodes('55284-4'),'8462-4');
          var hdl = byCodes('2085-9');
          var ldl = byCodes('2089-1');
		
           window.pat_fname = fname;
	   window.pat_lname = lname;
		console.log(window.pat_fname + "testtt");
		console.log(window.pat_lname + "testttt");
		
	document.getElementById("firstname").innerHTML= fname;
	document.getElementById("lastname").innerHTML= lname;	
          var p = defaultPatient();
          p.birthdate = dobStr;
          p.gender = gender;
          p.fname = fname;
          p.lname = lname;
          p.id = id;
          p.age = parseInt(calculateAge(dob));
          p.height = getQuantityValueAndUnit(height[0]);

          if (typeof systolicbp != 'undefined')  {
            p.systolicbp = systolicbp;
          }

          if (typeof diastolicbp != 'undefined') {
            p.diastolicbp = diastolicbp;
          }

          p.hdl = getQuantityValueAndUnit(hdl[0]);
          p.ldl = getQuantityValueAndUnit(ldl[0]);

          ret.resolve(p);
        });
      } else {
        onError();
      }
    }

    FHIR.oauth2.ready(onReady, onError);
    return ret.promise();

  };

  function defaultPatient(){
    return {
      fname: {value: ''},
      lname: {value: ''},
      id: {value: ''},
      gender: {value: ''},
      birthdate: {value: ''},
      age: {value: ''},
      height: {value: ''},
      systolicbp: {value: ''},
      diastolicbp: {value: ''},
      ldl: {value: ''},
      hdl: {value: ''},
    };
  }

  function getBloodPressureValue(BPObservations, typeOfPressure) {
    var formattedBPObservations = [];
    BPObservations.forEach(function(observation){
      var BP = observation.component.find(function(component){
        return component.code.coding.find(function(coding) {
          return coding.code == typeOfPressure;
        });
      });
      if (BP) {
        observation.valueQuantity = BP.valueQuantity;
        formattedBPObservations.push(observation);
      }
    });

    return getQuantityValueAndUnit(formattedBPObservations[0]);
  }

  function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() === 1;
  }

  function calculateAge(date) {
    if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
      var d = new Date(date), now = new Date();
      var years = now.getFullYear() - d.getFullYear();
      d.setFullYear(d.getFullYear() + years);
      if (d > now) {
        years--;
        d.setFullYear(d.getFullYear() - 1);
      }
      var days = (now.getTime() - d.getTime()) / (3600 * 24 * 1000);
      return years + days / (isLeapYear(now.getFullYear()) ? 366 : 365);
    }
    else {
      return undefined;
    }
  }

  function getQuantityValueAndUnit(ob) {
    if (typeof ob != 'undefined' &&
        typeof ob.valueQuantity != 'undefined' &&
        typeof ob.valueQuantity.value != 'undefined' &&
        typeof ob.valueQuantity.unit != 'undefined') {
          return ob.valueQuantity.value + ' ' + ob.valueQuantity.unit;
    } else {
      return undefined;
    }
  }

  window.drawVisualization = function(p) {
    $('#holder').show();
    $('#loading').hide();
    $('#fname').html(p.fname);
    $('#lname').html(p.lname);
    $('#fname1').html(p.fname);
    $('#lname1').html(p.lname);
    $('#id').html(p.id);
    $('#gender').html(p.gender);
    $('#birthdate').html(p.birthdate);
    $('#age').html(p.age);
    $('#height').html(p.height);
    $('#systolicbp').html(p.systolicbp);
    $('#diastolicbp').html(p.diastolicbp);
    $('#ldl').html(p.ldl);
    $('#hdl').html(p.hdl);
  };

})(window);


var BrowserDetect = {
  init: function () {
      this.browser = this.searchString(this.dataBrowser) || "Other";
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function (data) {
      for (var i = 0; i < data.length; i++) {
          var dataString = data[i].string;
          this.versionSearchString = data[i].subString;

          if (dataString.indexOf(data[i].subString) !== -1) {
              return data[i].identity;
          }
      }
  },
  searchVersion: function (dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index === -1) {
          return;
      }

      var rv = dataString.indexOf("rv:");
      if (this.versionSearchString === "Trident" && rv !== -1) {
          return parseFloat(dataString.substring(rv + 3));
      } else {
          return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
      }
  },

  dataBrowser: [
      {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
      {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
      {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
      {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
      {string: navigator.userAgent, subString: "Opera", identity: "Opera"},  
      {string: navigator.userAgent, subString: "OPR", identity: "Opera"},  

      {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, 
      {string: navigator.userAgent, subString: "Safari", identity: "Safari"}       
  ]
};
