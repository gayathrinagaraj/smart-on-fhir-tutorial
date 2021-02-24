//Configuration File
//Hapi FHIR server base URL
//var baseurl="https://calv-easiproapp.med.usc.edu:8082/baseDstu3/";
var baseurl="https://calv-easiprox.med.usc.edu/fhir3/baseDstu3/";

//var baseurl="https://fhir3-stage.elimuinformatics.com/baseDstu3/";

var baseurl_acapi ="https://assessmentcenter.net/ac_api/";

var baseurl_AC_API="https://calv-easiprox.med.usc.edu/AC_API_Test/";

//var baseurl_AC_API="https://assessmentcenter.net/ac_api/";

var Pdata ={
    "resourceType": "Patient",
    "id": "12720085",
    "meta": {
        "versionId": "4",
        "lastUpdated": "2020-02-25T16:46:36.000Z"
    },
    "text": {
        "status": "generated",
        "div": "<div><p><b>Patient</b></p><p><b>Name</b>: PROMIS, EASIPRO</p><p><b>DOB</b>: Aug 13, 1985</p><p><b>Administrative Gender</b>: Male</p><p><b>Marital Status</b>: Single</p><p><b>Status</b>: Active</p></div>"
    },
    "extension": [
        {
            "url": "http://fhir.org/guides/argonaut/StructureDefinition/argo-race",
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "http://hl7.org/fhir/v3/Race",
                        "code": "2028-9",
                        "display": "Asian",
                        "userSelected": false
                    }
                },
                {
                    "url": "text",
                    "valueString": "Asian"
                }
            ]
        },
        {
            "url": "http://fhir.org/guides/argonaut/StructureDefinition/argo-ethnicity",
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "http://hl7.org/fhir/v3/Ethnicity",
                        "code": "2186-5",
                        "display": "Not Hispanic or Latino",
                        "userSelected": false
                    }
                },
                {
                    "url": "text",
                    "valueString": "Not Hispanic, Latino, or Spanish Origin"
                }
            ]
        }
    ],
    "identifier": [
        {
            "use": "usual",
            "type": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "code": "MR",
                        "display": "Medical record number",
                        "userSelected": false
                    }
                ],
                "text": "MRN"
            },
            "system": "urn:oid:2.16.840.1.113883.3.0.0.5",
            "value": "6929",
            "_value": {
                "extension": [
                    {
                        "url": "http://hl7.org/fhir/StructureDefinition/rendered-value",
                        "valueString": "MX00006929"
                    }
                ]
            },
            "period": {
                "start": "2020-02-19T17:53:50.000Z"
            }
        }
    ],
    "active": true,
    "name": [
        {
            "use": "official",
            "text": "PROMIS, EASIPRO",
            "family": [
                "PROMIS"
            ],
            "given": [
                "EASIPRO"
            ],
            "period": {
                "start": "2020-02-19T17:53:50.000Z"
            }
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "3873273289",
            "use": "home",
            "period": {
                "start": "2020-02-19T17:53:50.000Z"
            }
        },
        {
            "system": "email",
            "value": "nick.mckenzie@cerner.com",
            "use": "home",
            "period": {
                "start": "2020-02-19T17:55:46.000Z"
            }
        }
    ],
    "gender": "male",
    "birthDate": "1985-08-13",
    "deceasedBoolean": false,
    "address": [
        {
            "use": "home",
            "text": "1234 Anywhere\nOverland Park, KS 66223\nUS",
            "line": [
                "1234 Anywhere"
            ],
            "city": "Overland Park",
            "state": "KS",
            "postalCode": "66223",
            "country": "US",
            "period": {
                "start": "2020-02-19T17:58:19.000Z"
            }
        }
    ],
    "maritalStatus": {
        "coding": [
            {
                "system": "http://hl7.org/fhir/marital-status",
                "code": "U",
                "display": "Unmarried",
                "userSelected": false
            }
        ],
        "text": "Single"
    },
    "contact": [
        {
            "relationship": [
                {
                    "text": "Authorized Representative"
                }
            ],
            "name": {
                "use": "official",
                "text": "PROMIS, EASIPRO",
                "family": [
                    "PROMIS"
                ],
                "given": [
                    "EASIPRO"
                ],
                "period": {
                    "start": "2020-02-19T21:43:54.000Z"
                }
            },
            "telecom": [
                {
                    "system": "email",
                    "value": "nick.mckenzie@cerner.com",
                    "use": "home",
                    "period": {
                        "start": "2020-02-19T21:43:54.000Z"
                    }
                }
            ],
            "period": {
                "start": "2020-02-19T21:43:54.000Z"
            }
        },
        {
            "relationship": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/patient-contact-relationship",
                            "code": "emergency",
                            "display": "Emergency",
                            "userSelected": false
                        }
                    ],
                    "text": "Emergency Contact"
                }
            ],
            "name": {
                "use": "official",
                "text": "WHOCARES, ABOUTTHIS",
                "family": [
                    "WHOCARES"
                ],
                "given": [
                    "ABOUTTHIS"
                ],
                "period": {
                    "start": "2020-02-19T18:12:05.000Z"
                }
            },
            "telecom": [
                {
                    "system": "phone",
                    "value": "9983389391",
                    "use": "home",
                    "period": {
                        "start": "2020-02-19T18:12:05.000Z"
                    }
                }
            ],
            "period": {
                "start": "2020-02-19T18:12:05.000Z"
            }
        }
    ],
    "communication": [
        {
            "language": {
                "coding": [
                    {
                        "extension": [
                            {
                                "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                "valueCode": "unknown"
                            }
                        ]
                    }
                ],
                "text": "English"
            },
            "preferred": true
        }
    ],
    "careProvider": [
        {
            "reference": "Practitioner/11938004",
            "display": "Bradford, MD, Michael Cerner"
        }
    ]
};


var Odata={
    "resourceType": "Bundle",
    "id": "8a786e4b-d353-475e-a306-92da83cf6b55",
    "meta": {
        "lastUpdated": "2020-11-09T04:23:21.590+00:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "http://fhir3-stage.elimuinformatics.com/baseDstu3/Observation?subject=https%3A%2F%2Ffhir-open.sandboxcerner.com%2Fdstu2%2F0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca%2FPatient%2F12668019"
        }
    ],
    "entry": [
        {
            "fullUrl": "http://fhir3-stage.elimuinformatics.com/baseDstu3/Observation/1453",
            "resource": {
                "resourceType": "Observation",
                "id": "1453",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2020-11-09T04:16:25.300+00:00"
                },
                "basedOn": [
                    {
                        "reference": "ProcedureRequest/1451"
                    }
                ],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/observation-category",
                                "code": "survey",
                                "display": "Survey"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "77580-9",
                            "display": "PROMIS Bank v1.2 - Mobility T-score"
                        }
                    ]
                },
                "subject": {
                    "reference": "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/12668019",
                    "display": "undefined"
                },
                "effectiveDateTime": "2020-11-08T20:16:24",
                "issued": "2020-11-08T20:16:24",
                "performer": [
                    {
                        "reference": "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/12668019",
                        "display": "undefined"
                    }
                ],
                "valueQuantity": {
                    "value": 48
                }
            },
            "search": {
                "mode": "match"
            }
        }
    ]
};

var DRRdata= {
    "resourceType": "Bundle",
    "id": "62829415-76f1-4471-9f47-cec4261f9faf",
    "type": "searchset",
    "link": [
        {
            "relation": "self",
            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference?patient=12668019&created=ge2020-04-01&created=le2020-11-08"
        },
        {
            "relation": "next",
            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference?patient=12668019&-pageContext=eNp9T9Fqg0AQ_JZgH_WyZ847fSikVSl50aBN6Vu5nKsV9Ax6CW3Jx_dMWigU8rQ7zOzMrBp6onDUOJJ-Oimiula3SnZ4Qm2I7OXXoMlBNq1uyMMFbWWD8aANfhhnvRA-BELU4Pmcco_5EXj7vRQe5VVY-5IhoLSyJC3jNEs22ZMF6mZmNahj_ye8QDO2lnr8TGe-RJMfcJSmHfTdtdF_xdxxsXbMeJxHlr4-v8W7oswLi_zAdqYrziKXRnblTIQu5cA4rHgkAMAFK6tlN83H2yJ92eS78oZBQNnVIGQs5L8G9tGzc4bl8l1OpbGFquTns_uL9zeUyXZG&-pageDirection=NEXT"
        }
    ],
    "entry": [
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206514",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206514",
                "meta": {
                    "versionId": "197206513",
                    "lastUpdated": "2020-11-06T17:41:30.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: TBI-QOL Bank v1.0 - Depression</p><p><b>Date</b>: Nov  6, 2020 11:41 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Response",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Response"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:41:26.000Z",
                "indexed": "2020-11-06T17:41:26.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "TBI-QOL Bank v1.0 - Depression, t-score: 76",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206514",
                            "title": "TBI-QOL Bank v1.0 - Depression"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206510",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206510",
                "meta": {
                    "versionId": "197206509",
                    "lastUpdated": "2020-11-06T17:41:29.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: TBI-QOL Bank v1.0 - Depression</p><p><b>Date</b>: Nov  6, 2020 11:41 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:41:26.000Z",
                "indexed": "2020-11-06T17:41:26.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "TBI-QOL Bank v1.0 - Depression",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206510",
                            "title": "TBI-QOL Bank v1.0 - Depression"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206506",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206506",
                "meta": {
                    "versionId": "197206505",
                    "lastUpdated": "2020-11-06T17:41:28.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: TBI-QOL Bank v1.0 - Depression</p><p><b>Date</b>: Nov  6, 2020 11:41 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:41:26.000Z",
                "indexed": "2020-11-06T17:41:26.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "TBI-QOL Bank v1.0 - Depression",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206506",
                            "title": "TBI-QOL Bank v1.0 - Depression"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206502",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206502",
                "meta": {
                    "versionId": "197206501",
                    "lastUpdated": "2020-11-06T17:41:27.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: TBI-QOL Bank v1.0 - Depression</p><p><b>Date</b>: Nov  6, 2020 11:41 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:41:26.000Z",
                "indexed": "2020-11-06T17:41:26.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "TBI-QOL Bank v1.0 - Depression",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206502",
                            "title": "TBI-QOL Bank v1.0 - Depression"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206498",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206498",
                "meta": {
                    "versionId": "197206497",
                    "lastUpdated": "2020-11-06T17:24:01.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: PROMIS Ped Bank v1.0 - Physical Activity</p><p><b>Date</b>: Nov  6, 2020 11:23 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:23:48.000Z",
                "indexed": "2020-11-06T17:23:48.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "PROMIS Ped Bank v1.0 - Physical Activity",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206498",
                            "title": "PROMIS Ped Bank v1.0 - Physical Activity"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206494",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206494",
                "meta": {
                    "versionId": "197206493",
                    "lastUpdated": "2020-11-06T17:23:54.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: PROMIS Ped Bank v1.0 - Physical Activity</p><p><b>Date</b>: Nov  6, 2020 11:23 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:23:48.000Z",
                "indexed": "2020-11-06T17:23:48.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "PROMIS Ped Bank v1.0 - Physical Activity",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206494",
                            "title": "PROMIS Ped Bank v1.0 - Physical Activity"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206490",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206490",
                "meta": {
                    "versionId": "197206489",
                    "lastUpdated": "2020-11-06T17:23:53.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: PROMIS Ped Bank v1.0 - Physical Activity</p><p><b>Date</b>: Nov  6, 2020 11:23 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:23:48.000Z",
                "indexed": "2020-11-06T17:23:48.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "PROMIS Ped Bank v1.0 - Physical Activity",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206490",
                            "title": "PROMIS Ped Bank v1.0 - Physical Activity"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206486",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206486",
                "meta": {
                    "versionId": "197206485",
                    "lastUpdated": "2020-11-06T17:23:50.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: PROMIS Ped Bank v1.0 - Physical Activity</p><p><b>Date</b>: Nov  6, 2020 11:23 A.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Promis, PW</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720224",
                    "display": "Promis, PW"
                },
                "created": "2020-11-06T17:23:48.000Z",
                "indexed": "2020-11-06T17:23:48.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "PROMIS Ped Bank v1.0 - Physical Activity",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206486",
                            "title": "PROMIS Ped Bank v1.0 - Physical Activity"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206482",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206482",
                "meta": {
                    "versionId": "197206481",
                    "lastUpdated": "2020-11-05T23:56:26.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: PROMIS Bank v1.0 - Depression-test from postman</p><p><b>Date</b>: Nov  5, 2020  5:56 P.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Nagaraj, Gayathri</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720159",
                    "display": "Nagaraj, Gayathri"
                },
                "created": "2020-11-05T23:56:24.000Z",
                "indexed": "2020-11-05T23:56:24.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "PROMIS Bank v1.0 - Depression-test from postman",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206482",
                            "title": "PROMIS Bank v1.0 - Depression-test from postman"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        },
        {
            "fullUrl": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/DocumentReference/197206478",
            "resource": {
                "resourceType": "DocumentReference",
                "id": "197206478",
                "meta": {
                    "versionId": "197206477",
                    "lastUpdated": "2020-11-05T19:14:59.000Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div><p><b>Document Reference</b></p><p><b>Patient Name</b>: ZZZTEST, TEST</p><p><b>Document Type</b>: PROMIS Patient Questionnaire</p><p><b>Document Title</b>: PROMIS Bank v1.0 - Depression-test from postman</p><p><b>Date</b>: Nov  5, 2020  1:14 P.M. CST</p><p><b>Document Status</b>: Auth (Verified)</p><p><b>Verifying Provider</b>: Nagaraj, Gayathri</p></div>"
                },
                "subject": {
                    "reference": "Patient/12668019",
                    "display": "ZZZTEST, TEST"
                },
                "type": {
                    "coding": [
                        {
                            "system": "https://fhir.cerner.com/e8a84236-c258-4952-98b7-a6ff8a9c587a/codeSet/72",
                            "code": "2572013649",
                            "display": "PROMIS Patient Questionnaire",
                            "userSelected": true
                        },
                        {
                            "system": "http://loinc.org",
                            "_code": {
                                "extension": [
                                    {
                                        "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                        "valueCode": "unknown"
                                    }
                                ]
                            }
                        }
                    ],
                    "text": "PROMIS Patient Questionnaire"
                },
                "authenticator": {
                    "reference": "Practitioner/12720159",
                    "display": "Nagaraj, Gayathri"
                },
                "created": "2020-11-05T19:14:57.000Z",
                "indexed": "2020-11-05T19:14:57.000Z",
                "status": "current",
                "docStatus": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/composition-status",
                            "code": "final",
                            "display": "Final"
                        }
                    ],
                    "text": "Auth (Verified)"
                },
                "description": "PROMIS Bank v1.0 - Depression-test from postman",
                "content": [
                    {
                        "attachment": {
                            "contentType": "application/pdf",
                            "url": "https://fhir-myrecord.cerner.com/dstu2/e8a84236-c258-4952-98b7-a6ff8a9c587a/Binary/XR-197206478",
                            "title": "PROMIS Bank v1.0 - Depression-test from postman"
                        }
                    }
                ],
                "context": {
                    "encounter": {
                        "reference": "Encounter/97937628"
                    }
                }
            }
        }
    ]
};

var ACdata={
  "resourceType": "Bundle",
  "id": "289D2E11-DC9D-46C0-B75C-50C9F062B2B9",
  "meta": {
    "lastUpdated": "2020-11-05T18:24:00-08:00"
  },
  "type": "searchset",
  "total": 690,
  "link": [
    {
      "relation": "self",
      "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire"
    }
  ],
  "entry": [
    {
      "fullUrl": "/2018-10/Questionnaire/AF82C56D-DA62-4CAC-8671-A4ED9ADBA374",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AF82C56D-DA62-4CAC-8671-A4ED9ADBA374",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:46:39-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AF82C56D-DA62-4CAC-8671-A4ED9ADBA374",
        "title": "PROMIS SF v2.0 - Medios de apoyo 8a",
        "status": "active",
        "date": "2018-08-27T13:46:39-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AF5CE7EF-E19E-43DF-84C2-7E4F5EC2282A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AF5CE7EF-E19E-43DF-84C2-7E4F5EC2282A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:37:57-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AF5CE7EF-E19E-43DF-84C2-7E4F5EC2282A",
        "title": "PROMIS Ped SF v1.0 - Sleep-Related Impairment 8a",
        "status": "active",
        "date": "2018-08-22T13:37:57-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/ED35C202-D1EF-43BF-8674-D94F1C4CB07A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "ED35C202-D1EF-43BF-8674-D94F1C4CB07A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:47:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/ED35C202-D1EF-43BF-8674-D94F1C4CB07A",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Meds/Tx 4a",
        "status": "active",
        "date": "2016-01-21T12:47:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/677C25ED-A3F2-482F-81BA-1F47372EB079",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "677C25ED-A3F2-482F-81BA-1F47372EB079",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/677C25ED-A3F2-482F-81BA-1F47372EB079",
        "title": "PROMIS SF v2.0 - Emotional Support 4a",
        "status": "active",
        "date": "2014-11-14T10:04:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3C31AA37-81FC-43D5-B870-6E8AFC7DFF04",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3C31AA37-81FC-43D5-B870-6E8AFC7DFF04",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-10-23T13:51:42-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3C31AA37-81FC-43D5-B870-6E8AFC7DFF04",
        "title": "PROMIS Bank v1.0 - General Self-Efficacy",
        "status": "active",
        "date": "2017-10-23T13:51:42-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/80BAECB6-5888-48DF-8F44-A776187EB01B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "80BAECB6-5888-48DF-8F44-A776187EB01B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-18T17:32:58-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/80BAECB6-5888-48DF-8F44-A776187EB01B",
        "title": "PROMIS Scale v1.0 - GI Disrupted Swallowing 7a",
        "status": "active",
        "date": "2017-03-18T17:32:58-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/62BCC31F-D658-4408-B5FD-A775EA0B62EB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "62BCC31F-D658-4408-B5FD-A775EA0B62EB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T09:58:19-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/62BCC31F-D658-4408-B5FD-A775EA0B62EB",
        "title": "PROMIS Checklist v1.0 - Itch-Quality",
        "status": "active",
        "date": "2018-09-21T09:58:19-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A18B37B1-8193-42E9-8AEE-D8EE6BCB18F2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A18B37B1-8193-42E9-8AEE-D8EE6BCB18F2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A18B37B1-8193-42E9-8AEE-D8EE6BCB18F2",
        "title": "PROMIS Bank v1.2 - Mobility",
        "status": "active",
        "date": "2014-11-14T10:02:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7490D9D9-0A0E-421B-8627-90B3417CC499",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7490D9D9-0A0E-421B-8627-90B3417CC499",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:45:36-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7490D9D9-0A0E-421B-8627-90B3417CC499",
        "title": "PROMIS SF v2.0 - Medios de apoyo 4a",
        "status": "active",
        "date": "2018-08-27T13:45:36-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/807CA84D-379E-432B-AAC0-C4D463D48321",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "807CA84D-379E-432B-AAC0-C4D463D48321",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:29-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/807CA84D-379E-432B-AAC0-C4D463D48321",
        "title": "PROMIS SF v1.0-Sleep Disturbance 8a",
        "status": "active",
        "date": "2014-11-14T10:02:29-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CBF91088-220E-4FFB-9A56-9C5C8B0C7588",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CBF91088-220E-4FFB-9A56-9C5C8B0C7588",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T13:55:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CBF91088-220E-4FFB-9A56-9C5C8B0C7588",
        "title": "PROMIS Bank v1.0 - Smoking Emot/Sensory AllSmk",
        "status": "active",
        "date": "2016-03-08T13:55:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F1D6F1D5-8D7F-41C6-8F25-36733440A4C7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F1D6F1D5-8D7F-41C6-8F25-36733440A4C7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-07T11:42:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F1D6F1D5-8D7F-41C6-8F25-36733440A4C7",
        "title": "PROMIS Parent Proxy Bank v2.0 - Upper Extremity",
        "status": "active",
        "date": "2016-03-07T11:42:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/ADE20290-415F-4DEC-9E3B-F24F62303FF9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "ADE20290-415F-4DEC-9E3B-F24F62303FF9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-10T14:00:06-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/ADE20290-415F-4DEC-9E3B-F24F62303FF9",
        "title": "PROMIS Bank v1.0-Sev of Sub Use (Past 30 days)",
        "status": "active",
        "date": "2018-10-10T14:00:06-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CC4EA3BE-7DAC-49BE-A261-C9A974B39A0C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CC4EA3BE-7DAC-49BE-A261-C9A974B39A0C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:45:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CC4EA3BE-7DAC-49BE-A261-C9A974B39A0C",
        "title": "SCI-QOL SF v1.0 - Pain Interference SF10a",
        "status": "active",
        "date": "2018-01-24T14:45:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/38631FE4-963B-4A0A-8E20-5007584F7632",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "38631FE4-963B-4A0A-8E20-5007584F7632",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:25:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/38631FE4-963B-4A0A-8E20-5007584F7632",
        "title": "PROMIS Ped Bank v2.0 - Asthma Impact",
        "status": "active",
        "date": "2017-02-28T12:25:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C5F5985C-A613-4D11-A5CF-BEFC88528EE9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C5F5985C-A613-4D11-A5CF-BEFC88528EE9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:56:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C5F5985C-A613-4D11-A5CF-BEFC88528EE9",
        "title": "PROMIS Ped SF v1.0 - Psych Stress Experiences 8a",
        "status": "active",
        "date": "2016-03-09T14:56:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6D67CEC1-45E1-4E4E-BA61-4EF8A0C4222E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6D67CEC1-45E1-4E4E-BA61-4EF8A0C4222E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6D67CEC1-45E1-4E4E-BA61-4EF8A0C4222E",
        "title": "Neuro-QoL SF Ped  v1.0 - Ansiedad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0D40ED95-04C8-49BE-B2FC-0793A4A8B383",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0D40ED95-04C8-49BE-B2FC-0793A4A8B383",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:02-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0D40ED95-04C8-49BE-B2FC-0793A4A8B383",
        "title": "PROMIS Pool v1.0 - Interfering Factors",
        "status": "active",
        "date": "2014-11-14T10:05:02-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/02D6C9B8-74F1-4437-8A91-711A0D1EBEB4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "02D6C9B8-74F1-4437-8A91-711A0D1EBEB4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:07:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/02D6C9B8-74F1-4437-8A91-711A0D1EBEB4",
        "title": "TBI-QOL SF v1.0 - Satisfaction with SRA SF10a",
        "status": "active",
        "date": "2018-01-24T15:07:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/930DC1B6-7BB8-45EE-A744-AED093985276",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "930DC1B6-7BB8-45EE-A744-AED093985276",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T13:53:24-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/930DC1B6-7BB8-45EE-A744-AED093985276",
        "title": "PROMIS Parent Proxy SF v1.0 - Meaning Purpose 8a",
        "status": "active",
        "date": "2016-03-09T13:53:24-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EB32B8BD-F1C6-44FA-81F8-5126C1CD5395",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EB32B8BD-F1C6-44FA-81F8-5126C1CD5395",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:58:08-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EB32B8BD-F1C6-44FA-81F8-5126C1CD5395",
        "title": "PROMIS SF v2.0 - Physical Function 6b",
        "status": "active",
        "date": "2016-10-10T10:58:08-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EF842AD2-7537-444F-9E57-FCC5EAD7A42C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EF842AD2-7537-444F-9E57-FCC5EAD7A42C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EF842AD2-7537-444F-9E57-FCC5EAD7A42C",
        "title": "PROMIS Banco v1.0 - Trastornos del sueño",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/93882B21-8336-42E3-A1D8-4EC6FD3ABE69",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "93882B21-8336-42E3-A1D8-4EC6FD3ABE69",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-05T14:44:01-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/93882B21-8336-42E3-A1D8-4EC6FD3ABE69",
        "title": "PROMIS SF v1.0-Appeal of Sub Use (Past 3 mo) 7a",
        "status": "active",
        "date": "2018-10-05T14:44:01-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F297A67A-0274-4D44-A9C0-4B37150A81EA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F297A67A-0274-4D44-A9C0-4B37150A81EA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:18:34-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F297A67A-0274-4D44-A9C0-4B37150A81EA",
        "title": "PROMIS SF Ped v1.0 - Sentimientos positivos 4a",
        "status": "active",
        "date": "2019-02-27T17:18:34-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D06511DB-A744-4271-BA98-42743243FC89",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D06511DB-A744-4271-BA98-42743243FC89",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:35:31-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D06511DB-A744-4271-BA98-42743243FC89",
        "title": "PROMIS Parent Proxy SF v1.0 - Sleep-Rel Impair 8a",
        "status": "active",
        "date": "2018-08-22T13:35:31-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FD13BFC7-C4BC-48C7-9F78-EE36A99C82A0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FD13BFC7-C4BC-48C7-9F78-EE36A99C82A0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:42:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FD13BFC7-C4BC-48C7-9F78-EE36A99C82A0",
        "title": "SCI-QOL Bank v1.0 - Trauma",
        "status": "active",
        "date": "2018-01-24T14:42:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B5A50520-BFED-4DA1-B94D-55396DC4062D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B5A50520-BFED-4DA1-B94D-55396DC4062D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:34:59-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B5A50520-BFED-4DA1-B94D-55396DC4062D",
        "title": "SCI-FI v1.0 Fine Motor SF 10b-Tetra",
        "status": "active",
        "date": "2018-01-24T14:34:59-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/26EFB19F-AE61-40A0-B924-FF120AE6B459",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "26EFB19F-AE61-40A0-B924-FF120AE6B459",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:34:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/26EFB19F-AE61-40A0-B924-FF120AE6B459",
        "title": "PROMIS Ped SF v2.0 - Anxiety 8a",
        "status": "active",
        "date": "2017-02-28T12:34:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B04E56A8-53D4-47F0-A02D-477925E7DEE3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B04E56A8-53D4-47F0-A02D-477925E7DEE3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B04E56A8-53D4-47F0-A02D-477925E7DEE3",
        "title": "Neuro-QOL SF v1.0 - Depression",
        "status": "active",
        "date": "2014-11-14T10:06:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B1FEB5EC-13B5-4E20-BF0B-6404911DCCE7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B1FEB5EC-13B5-4E20-BF0B-6404911DCCE7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:41:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B1FEB5EC-13B5-4E20-BF0B-6404911DCCE7",
        "title": "PROMIS Ped SF v2.0 - Upper Extremity 8a",
        "status": "active",
        "date": "2017-02-28T12:41:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/70F8018C-7C2C-4A00-9597-FAEFC5B6EDDD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "70F8018C-7C2C-4A00-9597-FAEFC5B6EDDD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:48:29-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/70F8018C-7C2C-4A00-9597-FAEFC5B6EDDD",
        "title": "PROMIS SF Ped v1.0 - Actividad física 8a",
        "status": "active",
        "date": "2019-01-07T10:48:29-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4AFAF9D2-8D23-419E-9094-8B89D47A6A90",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4AFAF9D2-8D23-419E-9094-8B89D47A6A90",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4AFAF9D2-8D23-419E-9094-8B89D47A6A90",
        "title": "PROMIS Pediatric SF v1.1 - Anxiety 8b",
        "status": "active",
        "date": "2014-11-14T10:02:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FEE4576A-D94F-4E85-8DAB-5A3181BB14CB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FEE4576A-D94F-4E85-8DAB-5A3181BB14CB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FEE4576A-D94F-4E85-8DAB-5A3181BB14CB",
        "title": "PROMIS Bank v1.0 - Social Sat DSA",
        "status": "active",
        "date": "2014-11-14T10:01:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/060D3038-B8AA-410A-AA49-64D169F9F658",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "060D3038-B8AA-410A-AA49-64D169F9F658",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:13-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/060D3038-B8AA-410A-AA49-64D169F9F658",
        "title": "Neuro-QOL Ped SF v1.0 - Anger",
        "status": "active",
        "date": "2014-11-14T10:07:13-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A3FEADA6-93E6-43F0-8C88-C0101715F723",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A3FEADA6-93E6-43F0-8C88-C0101715F723",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-10-23T13:25:32-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A3FEADA6-93E6-43F0-8C88-C0101715F723",
        "title": "PROMIS Short Form v1.0 - General Self-Efficacy 4a",
        "status": "active",
        "date": "2017-10-23T13:25:32-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/615B4804-052B-4351-9488-60F86A764314",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "615B4804-052B-4351-9488-60F86A764314",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:00:05-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/615B4804-052B-4351-9488-60F86A764314",
        "title": "PROMIS Bank v1.0 - Smoking NicotineDepend AllSmk",
        "status": "active",
        "date": "2016-03-08T14:00:05-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/238E4813-4513-4A8C-BBB3-A95E8F96E369",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "238E4813-4513-4A8C-BBB3-A95E8F96E369",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:20:29-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/238E4813-4513-4A8C-BBB3-A95E8F96E369",
        "title": "PROMIS Bank v1.0 - Smoking Social Motive Daily",
        "status": "active",
        "date": "2016-03-08T14:20:29-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6DB02856-2D2A-46C9-B3BB-CCEB2184F9DB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6DB02856-2D2A-46C9-B3BB-CCEB2184F9DB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:59:00-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6DB02856-2D2A-46C9-B3BB-CCEB2184F9DB",
        "title": "PROMIS SF v2.0 - Upper Extremity 7a",
        "status": "active",
        "date": "2016-10-10T10:59:00-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C04C6F20-2EBA-4D8D-9786-04ABDA447AD2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C04C6F20-2EBA-4D8D-9786-04ABDA447AD2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:32:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C04C6F20-2EBA-4D8D-9786-04ABDA447AD2",
        "title": "PROMIS SF Ped v1.0 - Experiencias con estrés psicológico 8a",
        "status": "active",
        "date": "2018-11-15T16:32:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F7DA0E41-E5A0-447E-BF3E-A992E8C522D7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F7DA0E41-E5A0-447E-BF3E-A992E8C522D7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F7DA0E41-E5A0-447E-BF3E-A992E8C522D7",
        "title": "PROMIS SF v2.0 - Capacidad para participar en roles y actividades sociales 8a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/432B0D61-15B6-47B3-B68F-84A4B0268765",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "432B0D61-15B6-47B3-B68F-84A4B0268765",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:37:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/432B0D61-15B6-47B3-B68F-84A4B0268765",
        "title": "PROMIS Banco - Versión Padres v1.0 - Relaciones familiares",
        "status": "active",
        "date": "2018-11-15T16:37:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/025443FB-ABF6-46E5-8748-3523A2A647ED",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "025443FB-ABF6-46E5-8748-3523A2A647ED",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/025443FB-ABF6-46E5-8748-3523A2A647ED",
        "title": "Neuro-QoL Banco v1.0 - Funcionamiento de las extremidades inferiores (Movilidad)",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2BBD5A1A-F04A-4621-9FF2-AE26C24B2C42",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2BBD5A1A-F04A-4621-9FF2-AE26C24B2C42",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2BBD5A1A-F04A-4621-9FF2-AE26C24B2C42",
        "title": "PROMIS Pool v1.0 - Sexual Activities",
        "status": "active",
        "date": "2014-11-14T10:04:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/169B88EB-B2B2-48DA-B7B5-AC183F00000E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "169B88EB-B2B2-48DA-B7B5-AC183F00000E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:46:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/169B88EB-B2B2-48DA-B7B5-AC183F00000E",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Soc Inter 4a",
        "status": "active",
        "date": "2016-01-21T12:46:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E72F5F0F-0174-41C7-93B5-BCA29561B3EA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E72F5F0F-0174-41C7-93B5-BCA29561B3EA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:12:21-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E72F5F0F-0174-41C7-93B5-BCA29561B3EA",
        "title": "PROMIS SF v2.0 - Cog Function Abilities Subset 8a",
        "status": "active",
        "date": "2016-03-21T10:12:21-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5BEC1DD4-C558-44EA-A5F7-AD3793A4F37A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5BEC1DD4-C558-44EA-A5F7-AD3793A4F37A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:24-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5BEC1DD4-C558-44EA-A5F7-AD3793A4F37A",
        "title": "PROMIS SF v1.0 - Social Sat Role 7a",
        "status": "active",
        "date": "2014-11-14T10:01:24-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/38DF2C87-0858-4C1B-A0A1-D48EC4100D66",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "38DF2C87-0858-4C1B-A0A1-D48EC4100D66",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/38DF2C87-0858-4C1B-A0A1-D48EC4100D66",
        "title": "Neuro-QOL SF v1.0 Pos. Affect & Well-Being",
        "status": "active",
        "date": "2014-11-14T10:06:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/411BA1D6-E59D-4DD8-B494-CB77899C3FB3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "411BA1D6-E59D-4DD8-B494-CB77899C3FB3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:58:10-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/411BA1D6-E59D-4DD8-B494-CB77899C3FB3",
        "title": "TBI-QOL Bank v1.0 - Depression",
        "status": "active",
        "date": "2018-01-24T14:58:10-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E7C7E471-BD50-4C33-BABE-A390A3905E11",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E7C7E471-BD50-4C33-BABE-A390A3905E11",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:36:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E7C7E471-BD50-4C33-BABE-A390A3905E11",
        "title": "PROMIS Ped SF v2.0 - Depressive Sx 8a",
        "status": "active",
        "date": "2017-02-28T12:36:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9AAED878-B311-491C-B8D1-7D8BC2E00D71",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9AAED878-B311-491C-B8D1-7D8BC2E00D71",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:31:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9AAED878-B311-491C-B8D1-7D8BC2E00D71",
        "title": "PROMIS Ped Scale v2.0 - Anger 9a",
        "status": "active",
        "date": "2017-02-28T12:31:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3D34E4D1-4C08-4134-884C-711519CF10C8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3D34E4D1-4C08-4134-884C-711519CF10C8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:27:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3D34E4D1-4C08-4134-884C-711519CF10C8",
        "title": "PROMIS Ped Bank v2.0 - Fatigue",
        "status": "active",
        "date": "2017-02-28T12:27:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CE8E8DDE-ACC8-4D47-A726-53479EB4A5CF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CE8E8DDE-ACC8-4D47-A726-53479EB4A5CF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:59:16-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CE8E8DDE-ACC8-4D47-A726-53479EB4A5CF",
        "title": "PROMIS SF v2.0 - Physical Function 8b",
        "status": "active",
        "date": "2016-10-10T10:59:16-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D22596C7-B599-46E0-9E39-D594ED8DA982",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D22596C7-B599-46E0-9E39-D594ED8DA982",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:02:33-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D22596C7-B599-46E0-9E39-D594ED8DA982",
        "title": "PROMIS SF v1.0 - Itch-Activity and Clothing 4a",
        "status": "active",
        "date": "2018-09-21T10:02:33-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/383F9DBC-EE0F-4168-927C-0CACDA438C6F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "383F9DBC-EE0F-4168-927C-0CACDA438C6F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/383F9DBC-EE0F-4168-927C-0CACDA438C6F",
        "title": "PROMIS SF v1.0-Fatigue 8a",
        "status": "active",
        "date": "2014-11-14T10:03:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/36378194-5DEE-4B7D-BB5A-2A1D86CC46D0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "36378194-5DEE-4B7D-BB5A-2A1D86CC46D0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:40:54-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/36378194-5DEE-4B7D-BB5A-2A1D86CC46D0",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Emotions 8a",
        "status": "active",
        "date": "2016-01-21T12:40:54-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F3C66F1A-19DC-442D-8C7B-F48FBEA9C7BC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F3C66F1A-19DC-442D-8C7B-F48FBEA9C7BC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F3C66F1A-19DC-442D-8C7B-F48FBEA9C7BC",
        "title": "Neuro-QoL Banco Ped  v1.0 - Relaciones sociales: Interacción con niños de la misma edad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D461F3AC-45C1-403B-B771-452DA48E0F21",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D461F3AC-45C1-403B-B771-452DA48E0F21",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:53:53-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D461F3AC-45C1-403B-B771-452DA48E0F21",
        "title": "PROMIS Escala - Versión Padres v1.0 - Salud general 7",
        "status": "active",
        "date": "2018-08-27T13:53:53-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/36F00430-CC4C-4977-AE8A-0787B3C53AB8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "36F00430-CC4C-4977-AE8A-0787B3C53AB8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/36F00430-CC4C-4977-AE8A-0787B3C53AB8",
        "title": "PROMIS Bank v1.0 - Social Sat Role",
        "status": "active",
        "date": "2014-11-14T10:01:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2DF70ECD-8F70-430E-A42D-95845B6756E8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2DF70ECD-8F70-430E-A42D-95845B6756E8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:18:54-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2DF70ECD-8F70-430E-A42D-95845B6756E8",
        "title": "PROMIS Bank v1.0 - Smoking PsychSocExpect NonDaily",
        "status": "active",
        "date": "2016-03-08T14:18:54-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/29DCD710-68BD-4A40-8564-B40EF649B34D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "29DCD710-68BD-4A40-8564-B40EF649B34D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/29DCD710-68BD-4A40-8564-B40EF649B34D",
        "title": "Neuro-QoL SF v1.0 - Sentimientos positivos y bienestar",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/85660D03-6A25-4155-B659-F7BBA31EB1AA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "85660D03-6A25-4155-B659-F7BBA31EB1AA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:36:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/85660D03-6A25-4155-B659-F7BBA31EB1AA",
        "title": "SCI-FI v1.0 Power Wheelchair SF 10b-Para",
        "status": "active",
        "date": "2018-01-24T14:36:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E4974A9E-9E68-4A07-B4CE-2FA8EB3F59EF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E4974A9E-9E68-4A07-B4CE-2FA8EB3F59EF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:25:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E4974A9E-9E68-4A07-B4CE-2FA8EB3F59EF",
        "title": "PROMIS SF v1.0 - Smoking Emot/Sensory Day 6a",
        "status": "active",
        "date": "2016-03-08T14:25:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9A1F6CB1-0036-445D-AA83-733D4EF4F8E2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9A1F6CB1-0036-445D-AA83-733D4EF4F8E2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-07T11:38:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9A1F6CB1-0036-445D-AA83-733D4EF4F8E2",
        "title": "PROMIS Parent Proxy Bank v2.0 - Fatigue",
        "status": "active",
        "date": "2016-03-07T11:38:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/30D9EB07-69ED-4BEC-AF14-85D7722D5F36",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "30D9EB07-69ED-4BEC-AF14-85D7722D5F36",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:36:48-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/30D9EB07-69ED-4BEC-AF14-85D7722D5F36",
        "title": "PROMIS Banco Ped v2.0 - Asma",
        "status": "active",
        "date": "2018-08-27T13:36:48-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/84A8B891-036C-4626-9865-3FE4147FB7B4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "84A8B891-036C-4626-9865-3FE4147FB7B4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:35:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/84A8B891-036C-4626-9865-3FE4147FB7B4",
        "title": "PROMIS SF Ped v1.0 - Satisfacción con la vida 8a",
        "status": "active",
        "date": "2018-11-15T16:35:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8D8F722F-5AEF-4774-8887-1BD2E30856D1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8D8F722F-5AEF-4774-8887-1BD2E30856D1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:35:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8D8F722F-5AEF-4774-8887-1BD2E30856D1",
        "title": "PROMIS SF v1.0 - Smoking Social Motive Day 4a",
        "status": "active",
        "date": "2016-03-08T14:35:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0E6A8A9B-B053-43BA-887F-CDDBD85FCB49",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0E6A8A9B-B053-43BA-887F-CDDBD85FCB49",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-22T15:06:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0E6A8A9B-B053-43BA-887F-CDDBD85FCB49",
        "title": "PROMIS Parent Proxy Bank v1.0 - Pain Behavior",
        "status": "active",
        "date": "2016-01-22T15:06:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/21E6BCF2-6803-4509-B884-68A1D23A5E0C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "21E6BCF2-6803-4509-B884-68A1D23A5E0C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:14:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/21E6BCF2-6803-4509-B884-68A1D23A5E0C",
        "title": "NIH Toolbox Friendship FF Age 18+ v2.0",
        "status": "active",
        "date": "2019-02-27T17:14:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/233C714B-3B13-4895-841A-D120B1C0E9F2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "233C714B-3B13-4895-841A-D120B1C0E9F2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:29-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/233C714B-3B13-4895-841A-D120B1C0E9F2",
        "title": "Neuro-QOL SF v1.0 - Ability to Part. in SRA",
        "status": "active",
        "date": "2014-11-14T10:06:29-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FCFC20C4-3651-4BBD-B5E3-F7DFD210EEF4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FCFC20C4-3651-4BBD-B5E3-F7DFD210EEF4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:49:13-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FCFC20C4-3651-4BBD-B5E3-F7DFD210EEF4",
        "title": "PROMIS Bank v1.0 - Self-Efficacy Manage Emotions",
        "status": "active",
        "date": "2016-01-21T12:49:13-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/22257A5E-4655-4097-AAFE-4DEC11E4240C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "22257A5E-4655-4097-AAFE-4DEC11E4240C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/22257A5E-4655-4097-AAFE-4DEC11E4240C",
        "title": "PROMIS SF v2.0 - Ability to Participate Social 8a",
        "status": "active",
        "date": "2014-11-14T10:05:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/61A98AF6-2DDB-45B4-BDED-323AE06C8819",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "61A98AF6-2DDB-45B4-BDED-323AE06C8819",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T10:05:52-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/61A98AF6-2DDB-45B4-BDED-323AE06C8819",
        "title": "PROMIS Parent Proxy Bank v1.0 - Positive Affect",
        "status": "active",
        "date": "2016-03-09T10:05:52-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/59CB40CA-8D86-4979-92F4-2937F2773C8A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "59CB40CA-8D86-4979-92F4-2937F2773C8A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:33:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/59CB40CA-8D86-4979-92F4-2937F2773C8A",
        "title": "PROMIS SF - Versión Padres v1.0 - Alteraciones relacionadas con el sueño 4a",
        "status": "active",
        "date": "2018-11-15T16:33:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6C13662F-179A-45AD-A8DF-16843D902E28",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6C13662F-179A-45AD-A8DF-16843D902E28",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6C13662F-179A-45AD-A8DF-16843D902E28",
        "title": "PROMIS SF v1.0-Anxiety 4a",
        "status": "active",
        "date": "2014-11-14T10:04:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/023E7244-AE96-46BB-8A84-E22EB2E00617",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "023E7244-AE96-46BB-8A84-E22EB2E00617",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:07-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/023E7244-AE96-46BB-8A84-E22EB2E00617",
        "title": "Neuro-QOL Bank v1.1 - Satisfaction w SRA",
        "status": "active",
        "date": "2014-11-14T10:07:07-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DA389E3A-83F4-46E4-A858-D7CE4504099A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DA389E3A-83F4-46E4-A858-D7CE4504099A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DA389E3A-83F4-46E4-A858-D7CE4504099A",
        "title": "PROMIS SF v1.0 - Efectos del dolor  8a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/37EA3609-ABA0-4418-9507-273074004DAC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "37EA3609-ABA0-4418-9507-273074004DAC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:53:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/37EA3609-ABA0-4418-9507-273074004DAC",
        "title": "SCI-FI Manual Wheelchair SF 10a",
        "status": "active",
        "date": "2018-01-24T14:53:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BE178F60-F96D-41A4-92F8-F739CF7B39BB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BE178F60-F96D-41A4-92F8-F739CF7B39BB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:40:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BE178F60-F96D-41A4-92F8-F739CF7B39BB",
        "title": "PROMIS Ped SF v2.0 - Peer Relationships 8a",
        "status": "active",
        "date": "2017-02-28T12:40:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3813AC70-6CBC-470B-998D-E8F1EE33E253",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3813AC70-6CBC-470B-998D-E8F1EE33E253",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T09:55:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3813AC70-6CBC-470B-998D-E8F1EE33E253",
        "title": "PROMIS Ped Bank v1.0 - Positive Affect",
        "status": "active",
        "date": "2016-03-09T09:55:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FEEA703A-6BBE-405C-A34F-8FA36A41057E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FEEA703A-6BBE-405C-A34F-8FA36A41057E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:21:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FEEA703A-6BBE-405C-A34F-8FA36A41057E",
        "title": "PROMIS Bank v1.0 - Smoking Social Motive NonDaily",
        "status": "active",
        "date": "2016-03-08T14:21:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/16CFDE98-4005-4EF9-A1C3-CD1328E5A691",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "16CFDE98-4005-4EF9-A1C3-CD1328E5A691",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:00:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/16CFDE98-4005-4EF9-A1C3-CD1328E5A691",
        "title": "TBI-QOL Bank v1.0 - Pain Interference",
        "status": "active",
        "date": "2018-01-24T15:00:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B2B86CAF-C42F-4BF8-92D0-528F3F6147CA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B2B86CAF-C42F-4BF8-92D0-528F3F6147CA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:36:27-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B2B86CAF-C42F-4BF8-92D0-528F3F6147CA",
        "title": "PROMIS Ped Bank v1.0 - Sleep-Related Impairment",
        "status": "active",
        "date": "2018-08-22T13:36:27-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/44F0F59E-F34A-48F1-B9A6-4E80674AE32E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "44F0F59E-F34A-48F1-B9A6-4E80674AE32E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/44F0F59E-F34A-48F1-B9A6-4E80674AE32E",
        "title": "Neuro-QOL Scale v1.0 - Communication",
        "status": "active",
        "date": "2014-11-14T10:07:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9DD180D4-8219-4018-8359-00A99861D89C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9DD180D4-8219-4018-8359-00A99861D89C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:38:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9DD180D4-8219-4018-8359-00A99861D89C",
        "title": "SCI-QOL Bank v1.0 - Ability to Participate in SRA",
        "status": "active",
        "date": "2018-01-24T14:38:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A3563CC3-CBA7-48A2-9D79-B61354C61258",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A3563CC3-CBA7-48A2-9D79-B61354C61258",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:39:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A3563CC3-CBA7-48A2-9D79-B61354C61258",
        "title": "PROMIS SF - Versión Padres v1.0 - Significado y propósito 8a",
        "status": "active",
        "date": "2018-11-15T16:39:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7DC9AABE-5277-4044-BEFA-AEC838B6DA84",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7DC9AABE-5277-4044-BEFA-AEC838B6DA84",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:53:49-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7DC9AABE-5277-4044-BEFA-AEC838B6DA84",
        "title": "SCI-FI v1.0 Power Wheelchair SF 9a",
        "status": "active",
        "date": "2018-01-24T14:53:49-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DE585142-6A4C-4E81-A769-233346BA8452",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DE585142-6A4C-4E81-A769-233346BA8452",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:33:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DE585142-6A4C-4E81-A769-233346BA8452",
        "title": "PROMIS Banco Ped v1.0 - Alteraciones relacionadas con el sueño",
        "status": "active",
        "date": "2018-11-15T16:33:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/64893F61-B129-4A93-8D6D-1C64E753D407",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "64893F61-B129-4A93-8D6D-1C64E753D407",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:20:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/64893F61-B129-4A93-8D6D-1C64E753D407",
        "title": "PROMIS SF Ped v1.0 - Sentimientos positivos 8a",
        "status": "active",
        "date": "2019-02-27T17:20:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2B02296A-1CC2-4809-B480-26CCAC4E4B05",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2B02296A-1CC2-4809-B480-26CCAC4E4B05",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T09:59:42-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2B02296A-1CC2-4809-B480-26CCAC4E4B05",
        "title": "PROMIS Item Pool v1.0 - Itch-Severity",
        "status": "active",
        "date": "2018-09-21T09:59:42-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/33CF9F89-F250-401A-9B95-03F87F7163F8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "33CF9F89-F250-401A-9B95-03F87F7163F8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-18T17:00:17-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/33CF9F89-F250-401A-9B95-03F87F7163F8",
        "title": "PROMIS Scale v1.0 - GI Gas and Bloating 13a",
        "status": "active",
        "date": "2017-03-18T17:00:17-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/10CD3AF9-63D6-4DBE-96A3-DC9B47395D2C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "10CD3AF9-63D6-4DBE-96A3-DC9B47395D2C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/10CD3AF9-63D6-4DBE-96A3-DC9B47395D2C",
        "title": "Neuro-QoL SF v1.0 - Agotamiento",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/597A9B24-5B5C-487D-9606-451355DC6E3D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "597A9B24-5B5C-487D-9606-451355DC6E3D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/597A9B24-5B5C-487D-9606-451355DC6E3D",
        "title": "PROMIS SF v1.0-Depression 4a",
        "status": "active",
        "date": "2014-11-14T10:05:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DE280BF4-23E9-47D6-9B82-E37FDB1A21D3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DE280BF4-23E9-47D6-9B82-E37FDB1A21D3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:31:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DE280BF4-23E9-47D6-9B82-E37FDB1A21D3",
        "title": "PROMIS SF v1.0 - Smoking NicotineDepend Nonday 8a",
        "status": "active",
        "date": "2016-03-08T14:31:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/52680A5D-A63A-4AC8-BA35-423969BFB74E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "52680A5D-A63A-4AC8-BA35-423969BFB74E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:34:32-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/52680A5D-A63A-4AC8-BA35-423969BFB74E",
        "title": "PROMIS Parent Proxy SF v1.0 - Sleep-Rel Impair 4a",
        "status": "active",
        "date": "2018-08-22T13:34:32-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/76D26D41-E9D4-4539-8B8D-8A8F877E39E8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "76D26D41-E9D4-4539-8B8D-8A8F877E39E8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/76D26D41-E9D4-4539-8B8D-8A8F877E39E8",
        "title": "Neuro-QOL Bank v1.0 - LEx Fnct (Mobility)",
        "status": "active",
        "date": "2014-11-14T10:07:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/607E0A32-B9B6-4537-BBD6-73C62C3A18BF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "607E0A32-B9B6-4537-BBD6-73C62C3A18BF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-12T12:19:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/607E0A32-B9B6-4537-BBD6-73C62C3A18BF",
        "title": "NIH TB Vision-Related QOL Ocular Symptoms Age 18+",
        "status": "active",
        "date": "2016-01-12T12:19:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9D6F5445-72CE-42E0-AAD0-3244E76E0619",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9D6F5445-72CE-42E0-AAD0-3244E76E0619",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:02:13-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9D6F5445-72CE-42E0-AAD0-3244E76E0619",
        "title": "TBI-QOL Bank v1.0 - Self-Esteem",
        "status": "active",
        "date": "2018-01-24T15:02:13-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/551C91E5-3ECA-4E07-ADD9-0DF47ED020F1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "551C91E5-3ECA-4E07-ADD9-0DF47ED020F1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:17:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/551C91E5-3ECA-4E07-ADD9-0DF47ED020F1",
        "title": "PROMIS Parent Proxy SF v2.0 - Asthma Impact 8a",
        "status": "active",
        "date": "2016-03-08T10:17:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B35DA58E-D91B-4468-B778-72785C7E5D1A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B35DA58E-D91B-4468-B778-72785C7E5D1A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:57:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B35DA58E-D91B-4468-B778-72785C7E5D1A",
        "title": "TBI-QOL Bank v1.0 - Anger",
        "status": "active",
        "date": "2018-01-24T14:57:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1A3D53DE-D847-4D20-9D1E-2700C78B0FAF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1A3D53DE-D847-4D20-9D1E-2700C78B0FAF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:57:51-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1A3D53DE-D847-4D20-9D1E-2700C78B0FAF",
        "title": "PROMIS Bank v2.0 - Mobility",
        "status": "active",
        "date": "2016-10-10T10:57:51-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/497134D3-3E1E-465B-B660-FE310554FDAB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "497134D3-3E1E-465B-B660-FE310554FDAB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/497134D3-3E1E-465B-B660-FE310554FDAB",
        "title": "Neuro-QOL SF v1.0 - LEx Fnct (Mobility)",
        "status": "active",
        "date": "2014-11-14T10:06:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/69F1AF73-8D15-42EE-A50B-BA6DC7881E5D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "69F1AF73-8D15-42EE-A50B-BA6DC7881E5D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:12:05-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/69F1AF73-8D15-42EE-A50B-BA6DC7881E5D",
        "title": "PROMIS Parent Proxy SF v1.0 - Life Satisfaction 8b",
        "status": "active",
        "date": "2018-08-22T13:12:05-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/463EEB8A-46D3-4B35-890A-71B5368A6667",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "463EEB8A-46D3-4B35-890A-71B5368A6667",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:36:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/463EEB8A-46D3-4B35-890A-71B5368A6667",
        "title": "PROMIS SF Ped v1.0 - Satisfacción con la vida 4a",
        "status": "active",
        "date": "2018-11-15T16:36:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3B08BED7-386E-4DDB-A596-C4F894E8C2E1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3B08BED7-386E-4DDB-A596-C4F894E8C2E1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T11:58:20-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3B08BED7-386E-4DDB-A596-C4F894E8C2E1",
        "title": "PROMIS Ped SF v1.0 - Life Satisfaction 8a",
        "status": "active",
        "date": "2016-03-09T11:58:20-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/62F1329C-1B5A-46D3-9CAB-F7CAD19EDCA9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "62F1329C-1B5A-46D3-9CAB-F7CAD19EDCA9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:48:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/62F1329C-1B5A-46D3-9CAB-F7CAD19EDCA9",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Soc Inter 8a",
        "status": "active",
        "date": "2016-01-21T12:48:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D41B6767-F00E-426D-854F-D256E9D8A28A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D41B6767-F00E-426D-854F-D256E9D8A28A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:40:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D41B6767-F00E-426D-854F-D256E9D8A28A",
        "title": "PROMIS SF v2.0 - Apoyo a través de la información 8a",
        "status": "active",
        "date": "2018-11-15T16:40:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/00D348EA-CE4A-4966-85D3-34AF03CBCABE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "00D348EA-CE4A-4966-85D3-34AF03CBCABE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:36:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/00D348EA-CE4A-4966-85D3-34AF03CBCABE",
        "title": "PROMIS SF v1.0 - Smoking Social Motive Nonday 4a",
        "status": "active",
        "date": "2016-03-08T14:36:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2231E84D-BCF2-48C0-9B5A-E02641465E14",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2231E84D-BCF2-48C0-9B5A-E02641465E14",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:46:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2231E84D-BCF2-48C0-9B5A-E02641465E14",
        "title": "SCI-QOL SF v1.0 - Satisfaction with SRA SF10a",
        "status": "active",
        "date": "2018-01-24T14:46:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C195628A-A6AE-4B03-8E1A-8DCB3C35524E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C195628A-A6AE-4B03-8E1A-8DCB3C35524E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:21:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C195628A-A6AE-4B03-8E1A-8DCB3C35524E",
        "title": "PROMIS SF - Versión Padres v2.0 - Ansiedad 8a",
        "status": "active",
        "date": "2019-02-27T17:21:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6F40E21A-F287-4377-9924-EE841CF67BBE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6F40E21A-F287-4377-9924-EE841CF67BBE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:37:29-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6F40E21A-F287-4377-9924-EE841CF67BBE",
        "title": "PROMIS Pool v1.0 - Dyspnea Activity Requirements",
        "status": "active",
        "date": "2016-03-21T15:37:29-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F926AB35-6863-499C-852A-258595E051E1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F926AB35-6863-499C-852A-258595E051E1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:40:11-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F926AB35-6863-499C-852A-258595E051E1",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Day Activ 8a",
        "status": "active",
        "date": "2016-01-21T12:40:11-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C1E44752-BCBD-4130-A307-67F6758F3891",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C1E44752-BCBD-4130-A307-67F6758F3891",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:06-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C1E44752-BCBD-4130-A307-67F6758F3891",
        "title": "PROMIS SF v1.0-Pain Interference 8a",
        "status": "active",
        "date": "2014-11-14T10:02:06-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CAEAB8FF-AA11-4C39-B089-F0AE5DDF50F0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CAEAB8FF-AA11-4C39-B089-F0AE5DDF50F0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CAEAB8FF-AA11-4C39-B089-F0AE5DDF50F0",
        "title": "PROMIS SF v2.0 - Emotional Support 8a",
        "status": "active",
        "date": "2014-11-14T10:04:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D8D2ECDF-6621-49D8-A42F-24BAC1B66607",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D8D2ECDF-6621-49D8-A42F-24BAC1B66607",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T10:48:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D8D2ECDF-6621-49D8-A42F-24BAC1B66607",
        "title": "SCI-FI v1.0 Basic Mobility - Core Items CAT",
        "status": "active",
        "date": "2018-01-23T10:48:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3EB77EC8-9FC8-4B7B-8667-EEC0A4B1241F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3EB77EC8-9FC8-4B7B-8667-EEC0A4B1241F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:29:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3EB77EC8-9FC8-4B7B-8667-EEC0A4B1241F",
        "title": "PROMIS Ped Bank v2.0 - Pain Interference",
        "status": "active",
        "date": "2017-02-28T12:29:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/160CCF3F-BE55-4118-A0E2-A652DE256AC1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "160CCF3F-BE55-4118-A0E2-A652DE256AC1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T09:58:55-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/160CCF3F-BE55-4118-A0E2-A652DE256AC1",
        "title": "PROMIS Checklist v1.0 - Itch-Triggers  ",
        "status": "active",
        "date": "2018-09-21T09:58:55-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/551FC444-83CF-4D83-8D91-B2AD5151CE8E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "551FC444-83CF-4D83-8D91-B2AD5151CE8E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-12T12:20:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/551FC444-83CF-4D83-8D91-B2AD5151CE8E",
        "title": "NIH TB Vision-Related QOL Distance Vision Age 18+",
        "status": "active",
        "date": "2016-01-12T12:20:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E9988E36-A661-4D85-9025-87DABF29190E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E9988E36-A661-4D85-9025-87DABF29190E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:11:45-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E9988E36-A661-4D85-9025-87DABF29190E",
        "title": "PROMIS Ped SF v1.0 - Physical Activity 8a",
        "status": "active",
        "date": "2016-03-09T14:11:45-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1DC83612-CBFE-4310-A713-5802E29DFE64",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1DC83612-CBFE-4310-A713-5802E29DFE64",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2020-04-30T17:35:35-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1DC83612-CBFE-4310-A713-5802E29DFE64",
        "title": "Dry Eye related Quality of life Score(DEQS) - V1.0",
        "status": "active",
        "date": "2020-04-30T17:35:35-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/68E52590-D17C-4A24-9E34-842FFD203966",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "68E52590-D17C-4A24-9E34-842FFD203966",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/68E52590-D17C-4A24-9E34-842FFD203966",
        "title": "PROMIS SF v1.0 - Trastornos del sueño 4a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/43836B1F-BC00-4135-ADA7-D516A15863DB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "43836B1F-BC00-4135-ADA7-D516A15863DB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/43836B1F-BC00-4135-ADA7-D516A15863DB",
        "title": "PROMIS SF v1.0 - Capacidad de funcionamiento físico 20a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2A8DBEDD-D6D8-4AD7-A384-D1C0051D7A03",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2A8DBEDD-D6D8-4AD7-A384-D1C0051D7A03",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-05T14:45:37-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2A8DBEDD-D6D8-4AD7-A384-D1C0051D7A03",
        "title": "PROMIS SF v1.0 - General Life Satisfaction 5a",
        "status": "active",
        "date": "2018-10-05T14:45:37-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2A08D88E-3582-41F5-BEC2-26A07E38E0CE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2A08D88E-3582-41F5-BEC2-26A07E38E0CE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2A08D88E-3582-41F5-BEC2-26A07E38E0CE",
        "title": "PROMIS SF v1.0 - Efectos del dolor  6a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/313FE433-DB92-4502-B5F7-04C4847A9F50",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "313FE433-DB92-4502-B5F7-04C4847A9F50",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/313FE433-DB92-4502-B5F7-04C4847A9F50",
        "title": "PROMIS Escala v1.0 - Intensidad del dolor 3a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9EDABFCB-E4FA-461F-8B5B-DA059C4A05A3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9EDABFCB-E4FA-461F-8B5B-DA059C4A05A3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9EDABFCB-E4FA-461F-8B5B-DA059C4A05A3",
        "title": "PROMIS Bank v1.0 - Vaginal Discomfort",
        "status": "active",
        "date": "2014-11-14T10:02:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FBE12851-26BC-4C1E-AE59-85DAE4063117",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FBE12851-26BC-4C1E-AE59-85DAE4063117",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FBE12851-26BC-4C1E-AE59-85DAE4063117",
        "title": "PROMIS SF v1.0 - Ansiedad 8a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DB5FA52D-7FAD-40D1-A30E-9F1D3387A4FE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DB5FA52D-7FAD-40D1-A30E-9F1D3387A4FE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:46:38-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DB5FA52D-7FAD-40D1-A30E-9F1D3387A4FE",
        "title": "PROMIS Banco - Versión Padres v1.0 - Actividad física",
        "status": "active",
        "date": "2019-01-07T10:46:38-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2AA90C1B-FDB2-417C-AE38-F2DF20DA04D9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2AA90C1B-FDB2-417C-AE38-F2DF20DA04D9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:06:52-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2AA90C1B-FDB2-417C-AE38-F2DF20DA04D9",
        "title": "PROMIS Bank v2.0 - Cog Function Abilities Subset",
        "status": "active",
        "date": "2016-03-21T10:06:52-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/204126E0-3B76-4224-AF2E-E74AB6457477",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "204126E0-3B76-4224-AF2E-E74AB6457477",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:53:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/204126E0-3B76-4224-AF2E-E74AB6457477",
        "title": "PROMIS Ped SF v1.0 - Psych Stress Experiences 4a",
        "status": "active",
        "date": "2016-03-09T14:53:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5B82897A-8F43-4A9A-A870-A20B704EE313",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5B82897A-8F43-4A9A-A870-A20B704EE313",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5B82897A-8F43-4A9A-A870-A20B704EE313",
        "title": "PROMIS Banco v1.0 - Ansiedad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EEF00A77-EF32-452D-AD2C-01A21975191F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EEF00A77-EF32-452D-AD2C-01A21975191F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:05:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EEF00A77-EF32-452D-AD2C-01A21975191F",
        "title": "TBI-QOL SF v1.0 - Emot. & Behav. Dyscontrol SF10a",
        "status": "active",
        "date": "2018-01-24T15:05:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B735EF13-F3D2-462E-B3B4-7D089E1952DE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B735EF13-F3D2-462E-B3B4-7D089E1952DE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B735EF13-F3D2-462E-B3B4-7D089E1952DE",
        "title": "PROMIS-Ca Bank v1.0 - Anxiety ",
        "status": "active",
        "date": "2014-11-14T10:01:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6E0C5143-0070-48B1-8D77-46B50F76EFEB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6E0C5143-0070-48B1-8D77-46B50F76EFEB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:36:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6E0C5143-0070-48B1-8D77-46B50F76EFEB",
        "title": "SCI-FI v1.0 Self Care SF 10b-Para",
        "status": "active",
        "date": "2018-01-24T14:36:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D8B24FB5-41A1-4183-BF78-F1AE4D1CD726",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D8B24FB5-41A1-4183-BF78-F1AE4D1CD726",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:06-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D8B24FB5-41A1-4183-BF78-F1AE4D1CD726",
        "title": "Neuro-QOL SF v2.0 - Cognitive Function",
        "status": "active",
        "date": "2014-11-14T10:06:06-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6859F6F5-8762-4AF6-9E9F-7F6DD334D874",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6859F6F5-8762-4AF6-9E9F-7F6DD334D874",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T14:01:07-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6859F6F5-8762-4AF6-9E9F-7F6DD334D874",
        "title": "SCI-QOL Scale v1.0 - Bladder Complications",
        "status": "active",
        "date": "2018-01-23T14:01:07-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9BF6893C-8373-47A5-964A-9A65499E1E74",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9BF6893C-8373-47A5-964A-9A65499E1E74",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-12T12:20:06-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9BF6893C-8373-47A5-964A-9A65499E1E74",
        "title": "NIH TB Vision-Related QOL Near Vision Age 18+",
        "status": "active",
        "date": "2016-01-12T12:20:06-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5F87E63C-79EB-43AA-B50C-506132E50D54",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5F87E63C-79EB-43AA-B50C-506132E50D54",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5F87E63C-79EB-43AA-B50C-506132E50D54",
        "title": "PROMIS Banco Ped  v1.0 - Efectos del dolor",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/539D7389-A332-4115-8B54-6CE19581C014",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "539D7389-A332-4115-8B54-6CE19581C014",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:36:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/539D7389-A332-4115-8B54-6CE19581C014",
        "title": "PROMIS SF v2.0 - Apoyo a través de la información 6a",
        "status": "active",
        "date": "2018-11-15T16:36:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/73C3CE61-433B-4E18-9479-DE0B7E9DD2C8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "73C3CE61-433B-4E18-9479-DE0B7E9DD2C8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/73C3CE61-433B-4E18-9479-DE0B7E9DD2C8",
        "title": "PROMIS SF v1.0-Depression 8a",
        "status": "active",
        "date": "2014-11-14T10:02:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2AF69E2C-7571-475B-A5DE-E77AF1DF4A17",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2AF69E2C-7571-475B-A5DE-E77AF1DF4A17",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2AF69E2C-7571-475B-A5DE-E77AF1DF4A17",
        "title": "PROMIS SF v2.0 - Satisfaction Roles Activities 4a",
        "status": "active",
        "date": "2014-11-14T10:04:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/75100B18-EC46-4A2C-AC0D-7049D258DF41",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "75100B18-EC46-4A2C-AC0D-7049D258DF41",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:36:11-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/75100B18-EC46-4A2C-AC0D-7049D258DF41",
        "title": "PROMIS SF v2.0 - Apoyo a través de la información 4a",
        "status": "active",
        "date": "2018-11-15T16:36:11-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/96C4F220-9E1B-4336-994C-5BF83F7554A6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "96C4F220-9E1B-4336-994C-5BF83F7554A6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:47:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/96C4F220-9E1B-4336-994C-5BF83F7554A6",
        "title": "PROMIS Parent Proxy SF v1.0 - Positive Affect 4a",
        "status": "active",
        "date": "2016-03-09T14:47:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/695B70F7-91A2-472F-99CF-C14C5F857C8C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "695B70F7-91A2-472F-99CF-C14C5F857C8C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:30:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/695B70F7-91A2-472F-99CF-C14C5F857C8C",
        "title": "PROMIS Ped Bank v2.0 - Peer Relationships",
        "status": "active",
        "date": "2017-02-28T12:30:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CC4D0B2B-0DB3-4D71-8D1C-ED2BAB93EB97",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CC4D0B2B-0DB3-4D71-8D1C-ED2BAB93EB97",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:29:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CC4D0B2B-0DB3-4D71-8D1C-ED2BAB93EB97",
        "title": "PROMIS SF v1.0 - Smoking NicotineDepend Day 4a",
        "status": "active",
        "date": "2016-03-08T14:29:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AC06B8F5-015F-4CA7-A94E-3B5C4BE9A68D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AC06B8F5-015F-4CA7-A94E-3B5C4BE9A68D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:39:28-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AC06B8F5-015F-4CA7-A94E-3B5C4BE9A68D",
        "title": "PROMIS SF v2.0 -  Apoyo emocional 6a",
        "status": "active",
        "date": "2018-08-27T13:39:28-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E94D42AE-36C7-4FB6-AEA2-B469EF1DDBDF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E94D42AE-36C7-4FB6-AEA2-B469EF1DDBDF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E94D42AE-36C7-4FB6-AEA2-B469EF1DDBDF",
        "title": "Neuro-QOL SF v1.1- Satisfaction w SRA",
        "status": "active",
        "date": "2014-11-14T10:06:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AE9518D3-B510-49E8-8431-702EEC7E7D54",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AE9518D3-B510-49E8-8431-702EEC7E7D54",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:43:57-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AE9518D3-B510-49E8-8431-702EEC7E7D54",
        "title": "PROMIS Bank v1.0 - Self-Efficacy Manage Symptoms",
        "status": "active",
        "date": "2016-01-21T12:43:57-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4AB7C2A0-8339-4CCA-837F-5400E37C91EB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4AB7C2A0-8339-4CCA-837F-5400E37C91EB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:04:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4AB7C2A0-8339-4CCA-837F-5400E37C91EB",
        "title": "TBI-QOL SF v1.0 - Communication SF9a",
        "status": "active",
        "date": "2018-01-24T15:04:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/90980DDD-074E-4237-85B1-1C96C9DBCDEF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "90980DDD-074E-4237-85B1-1C96C9DBCDEF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/90980DDD-074E-4237-85B1-1C96C9DBCDEF",
        "title": "PROMIS SF v1.0 - Efectos del dolor  6b",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/27B9EC13-6C67-4AA9-A21F-E61B19842C35",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "27B9EC13-6C67-4AA9-A21F-E61B19842C35",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/27B9EC13-6C67-4AA9-A21F-E61B19842C35",
        "title": "Neuro-QoL SF v1.0 - Estigma",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E60A53EE-0690-47F0-B5D0-547B4394ED5B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E60A53EE-0690-47F0-B5D0-547B4394ED5B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-22T15:05:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E60A53EE-0690-47F0-B5D0-547B4394ED5B",
        "title": "PROMIS Ped SF v1.0 - Pain Behavior 8a",
        "status": "active",
        "date": "2016-01-22T15:05:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/11D990C6-2DCA-4D62-A812-26FC0B92AE71",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "11D990C6-2DCA-4D62-A812-26FC0B92AE71",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:00:17-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/11D990C6-2DCA-4D62-A812-26FC0B92AE71",
        "title": "PROMIS SF v1.0 - Itch-Interference 8a",
        "status": "active",
        "date": "2018-09-21T10:00:17-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/417315F9-694E-436E-853A-F50C7AF6D7F3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "417315F9-694E-436E-853A-F50C7AF6D7F3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/417315F9-694E-436E-853A-F50C7AF6D7F3",
        "title": "Neuro-QoL Banco v1.0 - Funcionamiento de las extremidades superiores - motricidad fina, actividades cotidianas",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/29748512-D1C6-4F15-9ABF-54D8A18B6F30",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "29748512-D1C6-4F15-9ABF-54D8A18B6F30",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/29748512-D1C6-4F15-9ABF-54D8A18B6F30",
        "title": "PROMIS SF v1.0 - Trastornos del sueño 8a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2B92F44C-302B-4C35-8772-3548BC43CB6A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2B92F44C-302B-4C35-8772-3548BC43CB6A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2B92F44C-302B-4C35-8772-3548BC43CB6A",
        "title": "Neuro-QOL Bank v1.0 Pos. Affect & Well-Being",
        "status": "active",
        "date": "2014-11-14T10:06:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3BBD1D6B-A249-4DEA-B9B8-05675AAFA2A2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3BBD1D6B-A249-4DEA-B9B8-05675AAFA2A2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3BBD1D6B-A249-4DEA-B9B8-05675AAFA2A2",
        "title": "Neuro-QoL Banco Ped  v1.0 - Ansiedad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EA1CE013-B92C-4B37-8F09-479A0E8EB787",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EA1CE013-B92C-4B37-8F09-479A0E8EB787",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:06:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EA1CE013-B92C-4B37-8F09-479A0E8EB787",
        "title": "TBI-QOL SF v1.0 - Headache SF10a",
        "status": "active",
        "date": "2018-01-24T15:06:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/59DFF9AF-0765-422F-B043-17153A73999A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "59DFF9AF-0765-422F-B043-17153A73999A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/59DFF9AF-0765-422F-B043-17153A73999A",
        "title": "PROMIS Banco v1.0 - Satisfacción con la participación en actividades sociales discrecionales",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/72CDDE0E-DADD-416B-A71F-D79E80242071",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "72CDDE0E-DADD-416B-A71F-D79E80242071",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-10T14:26:37-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/72CDDE0E-DADD-416B-A71F-D79E80242071",
        "title": "PROMIS Bank v1.0-Severity of Sub Use (Past 3 mo)",
        "status": "active",
        "date": "2018-10-10T14:26:37-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/317CEAAC-2FAD-4668-9A59-7EBB3F366A55",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "317CEAAC-2FAD-4668-9A59-7EBB3F366A55",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:38:55-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/317CEAAC-2FAD-4668-9A59-7EBB3F366A55",
        "title": "PROMIS Pool v1.0 - Dyspnea Airborne Exposure",
        "status": "active",
        "date": "2016-03-21T15:38:55-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B0A92730-0F5F-4E88-9471-7C0FB37CF5D3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B0A92730-0F5F-4E88-9471-7C0FB37CF5D3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T10:47:42-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B0A92730-0F5F-4E88-9471-7C0FB37CF5D3",
        "title": "SCI-FI v1.0 Ambulation - Core Items CAT",
        "status": "active",
        "date": "2018-01-23T10:47:42-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/66A94BEB-A207-4BBC-BFB1-8E6DDADBA22A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "66A94BEB-A207-4BBC-BFB1-8E6DDADBA22A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-04-25T11:30:49-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/66A94BEB-A207-4BBC-BFB1-8E6DDADBA22A",
        "title": "PROMIS Scale v2.0 - Pain Behavior",
        "status": "active",
        "date": "2019-04-25T11:30:49-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F84FFAE3-0AB2-49A3-B210-2FC1A37B7348",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F84FFAE3-0AB2-49A3-B210-2FC1A37B7348",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F84FFAE3-0AB2-49A3-B210-2FC1A37B7348",
        "title": "Neuro-QoL Banco v1.0 - Descontrol emocional y conductual",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C2CF48D7-3939-4D56-BF74-4D243037269F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C2CF48D7-3939-4D56-BF74-4D243037269F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:26:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C2CF48D7-3939-4D56-BF74-4D243037269F",
        "title": "PROMIS Ped Bank v1.0 - Life Satisfaction",
        "status": "active",
        "date": "2016-03-08T14:26:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E2F7C08E-D5A6-4795-9129-CBE41FF92EC7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E2F7C08E-D5A6-4795-9129-CBE41FF92EC7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-05T15:31:15-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E2F7C08E-D5A6-4795-9129-CBE41FF92EC7",
        "title": "PROMIS Bank v1.0 - General Life Satisfaction",
        "status": "active",
        "date": "2018-10-05T15:31:15-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4468873E-B8B0-4671-890D-38CB039510B7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4468873E-B8B0-4671-890D-38CB039510B7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T13:46:55-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4468873E-B8B0-4671-890D-38CB039510B7",
        "title": "PROMIS Ped SF v1.0 - Meaning and Purpose 8a",
        "status": "active",
        "date": "2016-03-09T13:46:55-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CFF3932D-97BF-42B4-BB8E-58E71D0A3181",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CFF3932D-97BF-42B4-BB8E-58E71D0A3181",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CFF3932D-97BF-42B4-BB8E-58E71D0A3181",
        "title": "PROMIS Banco v1.1 - Enojo",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5A3B4321-0257-4095-B347-27E03BAE9BC5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5A3B4321-0257-4095-B347-27E03BAE9BC5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5A3B4321-0257-4095-B347-27E03BAE9BC5",
        "title": "PROMIS SF v1.2 - Capacidad de funcionamiento físico 6b",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8D79D960-EC12-4242-AE66-03EF8EF4D61D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8D79D960-EC12-4242-AE66-03EF8EF4D61D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8D79D960-EC12-4242-AE66-03EF8EF4D61D",
        "title": "PROMIS Bank v2.0 - Social Isolation",
        "status": "active",
        "date": "2014-11-14T10:03:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FC149C61-ECC7-4C42-9EB4-1FE6316D241A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FC149C61-ECC7-4C42-9EB4-1FE6316D241A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:35:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FC149C61-ECC7-4C42-9EB4-1FE6316D241A",
        "title": "SCI-FI v1.0 Fine Motor SF 11b-Para",
        "status": "active",
        "date": "2018-01-24T14:35:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DB574BF1-8AA8-4629-AC42-4C6A2818FA80",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DB574BF1-8AA8-4629-AC42-4C6A2818FA80",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:28:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DB574BF1-8AA8-4629-AC42-4C6A2818FA80",
        "title": "PROMIS SF v1.0 - Smoking NicotineDepend 4a AllSmk",
        "status": "active",
        "date": "2016-03-08T14:28:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6D784E22-AA0E-426C-86C0-FA1090C86F8C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6D784E22-AA0E-426C-86C0-FA1090C86F8C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:41:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6D784E22-AA0E-426C-86C0-FA1090C86F8C",
        "title": "PROMIS Banco - Versión Padres v1.0 - Significado y propósito",
        "status": "active",
        "date": "2018-11-15T16:41:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1DD84690-4E35-4CB8-A23C-8CA0E217D54C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1DD84690-4E35-4CB8-A23C-8CA0E217D54C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:13:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1DD84690-4E35-4CB8-A23C-8CA0E217D54C",
        "title": "NIH Toolbox Emotional Support FF Age 18+ v2.0",
        "status": "active",
        "date": "2019-02-27T17:13:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7083E333-30F7-4EDF-B1F0-A984405E0029",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7083E333-30F7-4EDF-B1F0-A984405E0029",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-18T17:13:22-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7083E333-30F7-4EDF-B1F0-A984405E0029",
        "title": "PROMIS Scale v1.0 - GI Reflux 13a",
        "status": "active",
        "date": "2017-03-18T17:13:22-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0B1160BC-0779-41EB-A3B9-D200D38F4EBB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0B1160BC-0779-41EB-A3B9-D200D38F4EBB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0B1160BC-0779-41EB-A3B9-D200D38F4EBB",
        "title": "PROMIS Banco v1.0 - Agotamiento",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/897A7BAB-C7B8-4A99-98F0-197602D3013B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "897A7BAB-C7B8-4A99-98F0-197602D3013B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:47:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/897A7BAB-C7B8-4A99-98F0-197602D3013B",
        "title": "PROMIS SF - Versión Padres v1.0 - Actividad física 4a",
        "status": "active",
        "date": "2019-01-07T10:47:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/96E2BA5D-8494-4918-BA56-61CD63397B29",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "96E2BA5D-8494-4918-BA56-61CD63397B29",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:31:11-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/96E2BA5D-8494-4918-BA56-61CD63397B29",
        "title": "PROMIS SF v1.0 - Smoking NicotineDepend Nonday 4a",
        "status": "active",
        "date": "2016-03-08T14:31:11-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C9C57075-3949-42EE-9653-3FEBB2091E85",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C9C57075-3949-42EE-9653-3FEBB2091E85",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:48:05-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C9C57075-3949-42EE-9653-3FEBB2091E85",
        "title": "PROMIS SF Ped v1.0 - Actividad física 4a",
        "status": "active",
        "date": "2019-01-07T10:48:05-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3B5666FF-3876-45AB-BA30-474649A21E89",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3B5666FF-3876-45AB-BA30-474649A21E89",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-07T12:55:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3B5666FF-3876-45AB-BA30-474649A21E89",
        "title": "PROMIS Parent Proxy Bank v2.0 - Peer Relations",
        "status": "active",
        "date": "2016-03-07T12:55:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C1014465-7C7C-4ADF-B57A-C4F53D9024C6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C1014465-7C7C-4ADF-B57A-C4F53D9024C6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:11:08-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C1014465-7C7C-4ADF-B57A-C4F53D9024C6",
        "title": "PROMIS SF v2.0 - Cog Function Abilities Subset 4a",
        "status": "active",
        "date": "2016-03-21T10:11:08-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6E5888E4-11DD-4FEF-98E9-9290F9BA4BAD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6E5888E4-11DD-4FEF-98E9-9290F9BA4BAD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:51:29-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6E5888E4-11DD-4FEF-98E9-9290F9BA4BAD",
        "title": "PROMIS Escala v1.2 - Salud general Física 2a",
        "status": "active",
        "date": "2018-08-27T13:51:29-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/18B90183-FE27-4DD4-8A23-7C1E4E311F67",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "18B90183-FE27-4DD4-8A23-7C1E4E311F67",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/18B90183-FE27-4DD4-8A23-7C1E4E311F67",
        "title": "Neuro-QOL Bank v1.0 - Stigma",
        "status": "active",
        "date": "2014-11-14T10:06:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/869BB22D-CAAB-470F-AE30-6AF33BC2BA9F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "869BB22D-CAAB-470F-AE30-6AF33BC2BA9F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/869BB22D-CAAB-470F-AE30-6AF33BC2BA9F",
        "title": "Neuro-QOL Ped Bank v2.0 - Cognitive Function",
        "status": "active",
        "date": "2014-11-14T10:07:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/71CC7EFC-5AFA-4597-A2AE-54F21A386E07",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "71CC7EFC-5AFA-4597-A2AE-54F21A386E07",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/71CC7EFC-5AFA-4597-A2AE-54F21A386E07",
        "title": "PROMIS Bank v1.2 - Upper Extremity",
        "status": "active",
        "date": "2014-11-14T10:05:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F48DC801-6201-4A82-8552-1F98910DEAF9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F48DC801-6201-4A82-8552-1F98910DEAF9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:43:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F48DC801-6201-4A82-8552-1F98910DEAF9",
        "title": "SCI-QOL SF v1.0 - Anxiety SF9a",
        "status": "active",
        "date": "2018-01-24T14:43:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/832ABA40-0135-4D45-AFA9-DA4D24D65369",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "832ABA40-0135-4D45-AFA9-DA4D24D65369",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/832ABA40-0135-4D45-AFA9-DA4D24D65369",
        "title": "Neuro-QOL Bank v1.0 - UEx Fnct (FineMotor, ADL)",
        "status": "active",
        "date": "2014-11-14T10:07:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5688237C-9769-4F6A-A2FF-99BA2B95337F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5688237C-9769-4F6A-A2FF-99BA2B95337F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5688237C-9769-4F6A-A2FF-99BA2B95337F",
        "title": "Neuro-QOL SF v1.0 - Anxiety",
        "status": "active",
        "date": "2014-11-14T10:06:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FFCDF6E3-8B17-4673-AB38-C677FFF6DBAF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FFCDF6E3-8B17-4673-AB38-C677FFF6DBAF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FFCDF6E3-8B17-4673-AB38-C677FFF6DBAF",
        "title": "PROMIS Bank v1.0 - Anxiety",
        "status": "active",
        "date": "2014-11-14T10:03:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/97137A16-7C5E-45CE-8E66-87742F0FDC0E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "97137A16-7C5E-45CE-8E66-87742F0FDC0E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T15:01:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/97137A16-7C5E-45CE-8E66-87742F0FDC0E",
        "title": "PROMIS Parent Proxy SF v1.0 - Psych Stress Exp 8a",
        "status": "active",
        "date": "2016-03-09T15:01:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3AE11287-4CBB-49FF-B0E3-9A36AA21AC4E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3AE11287-4CBB-49FF-B0E3-9A36AA21AC4E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:38:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3AE11287-4CBB-49FF-B0E3-9A36AA21AC4E",
        "title": "PROMIS SF Versión Padres v1.0 - Relaciones familiares 8a",
        "status": "active",
        "date": "2018-11-15T16:38:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2A751176-ED26-48CC-8913-8CB456DC874A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2A751176-ED26-48CC-8913-8CB456DC874A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:37:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2A751176-ED26-48CC-8913-8CB456DC874A",
        "title": "PROMIS SF - Versión Padres v1.0 - Alteraciones relacionadas con el sueño 8a",
        "status": "active",
        "date": "2018-11-15T16:37:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/98A9DFAE-1081-4024-AD3B-414E3FE7A790",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "98A9DFAE-1081-4024-AD3B-414E3FE7A790",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:17:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/98A9DFAE-1081-4024-AD3B-414E3FE7A790",
        "title": "PROMIS Banco - Versión Padres v1.0 - Sentimientos positivos",
        "status": "active",
        "date": "2019-02-27T17:17:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4D8E5124-1AE3-4036-A9B3-C08A06E65AA0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4D8E5124-1AE3-4036-A9B3-C08A06E65AA0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-20T11:34:55-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4D8E5124-1AE3-4036-A9B3-C08A06E65AA0",
        "title": "PROMIS Scale v1.0 - GI Nausea and Vomiting 4a",
        "status": "active",
        "date": "2017-03-20T11:34:55-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3EFD6A5E-A27B-45D4-9699-AE91CA291AF2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3EFD6A5E-A27B-45D4-9699-AE91CA291AF2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:39:30-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3EFD6A5E-A27B-45D4-9699-AE91CA291AF2",
        "title": "PROMIS Pool v1.0 - Dyspnea Activity Motivation",
        "status": "active",
        "date": "2016-03-21T15:39:30-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/03956105-FF0D-444C-9F95-96415502F850",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "03956105-FF0D-444C-9F95-96415502F850",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/03956105-FF0D-444C-9F95-96415502F850",
        "title": "Neuro-QoL Banco v1.0 - Capacidad para participar en roles y actividades sociales",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A2653BC8-88B3-4307-9404-D5DAEBA8A330",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A2653BC8-88B3-4307-9404-D5DAEBA8A330",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T13:56:59-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A2653BC8-88B3-4307-9404-D5DAEBA8A330",
        "title": "PROMIS Bank v1.0 - Smoking Emot/Sensory NonDaily",
        "status": "active",
        "date": "2016-03-08T13:56:59-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/71C2D9CB-78A8-4617-AE93-A44BA941012F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "71C2D9CB-78A8-4617-AE93-A44BA941012F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-17T13:29:00-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/71C2D9CB-78A8-4617-AE93-A44BA941012F",
        "title": "PROMIS Bank v1.0 - Smoking Health Expect AllSmk",
        "status": "active",
        "date": "2016-03-17T13:29:00-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F8810F50-32D2-496F-9621-518694EBB5DD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F8810F50-32D2-496F-9621-518694EBB5DD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:58:24-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F8810F50-32D2-496F-9621-518694EBB5DD",
        "title": "PROMIS SF v2.0 - Physical Function 10a",
        "status": "active",
        "date": "2016-10-10T10:58:24-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A48DBBB7-17AF-435F-B069-84BED4E83669",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A48DBBB7-17AF-435F-B069-84BED4E83669",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A48DBBB7-17AF-435F-B069-84BED4E83669",
        "title": "PROMIS SF v1.0 - Trastornos del sueño 8b",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3E1BA4CC-B75B-4EC5-BF44-6D8B7C0A8BA5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3E1BA4CC-B75B-4EC5-BF44-6D8B7C0A8BA5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-10T14:24:29-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3E1BA4CC-B75B-4EC5-BF44-6D8B7C0A8BA5",
        "title": "PROMIS Bank v1.0-Appeal of Sub Use (Past 30 days)",
        "status": "active",
        "date": "2018-10-10T14:24:29-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/208CC8BD-4376-47F2-8EAE-60BFFB7692F0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "208CC8BD-4376-47F2-8EAE-60BFFB7692F0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/208CC8BD-4376-47F2-8EAE-60BFFB7692F0",
        "title": "PROMIS Bank v1.0 - Interest in Sexual Activity",
        "status": "active",
        "date": "2014-11-14T10:01:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/76A575A9-58FD-4E97-B14B-289A43F818B0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "76A575A9-58FD-4E97-B14B-289A43F818B0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/76A575A9-58FD-4E97-B14B-289A43F818B0",
        "title": "Neuro-QoL SF Ped  v1.0 - Depresión",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E1FDA2CE-A770-4A9D-9A42-3D897F12BADC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E1FDA2CE-A770-4A9D-9A42-3D897F12BADC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:08:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E1FDA2CE-A770-4A9D-9A42-3D897F12BADC",
        "title": "TBI-QOL SF v1.0 - Stigma SF7a",
        "status": "active",
        "date": "2018-01-24T15:08:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/795B07C1-067E-4FBD-9B60-A57985E69B5D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "795B07C1-067E-4FBD-9B60-A57985E69B5D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/795B07C1-067E-4FBD-9B60-A57985E69B5D",
        "title": "PROMIS SF v1.0-Sleep Disturbance 4a",
        "status": "active",
        "date": "2014-11-14T10:02:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E75A67A9-0945-4A79-AE70-E2FED0B5C35D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E75A67A9-0945-4A79-AE70-E2FED0B5C35D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:01:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E75A67A9-0945-4A79-AE70-E2FED0B5C35D",
        "title": "TBI-QOL Bank v1.0 - Satisfaction with SRA",
        "status": "active",
        "date": "2018-01-24T15:01:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/558F2959-EAA5-4654-9987-5CF289BFB665",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "558F2959-EAA5-4654-9987-5CF289BFB665",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:57:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/558F2959-EAA5-4654-9987-5CF289BFB665",
        "title": "TBI-QOL Bank v1.0 - Anxiety",
        "status": "active",
        "date": "2018-01-24T14:57:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D4E33377-8BB1-4B57-ACCB-D8FFD3BEDAD6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D4E33377-8BB1-4B57-ACCB-D8FFD3BEDAD6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-10T14:28:38-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D4E33377-8BB1-4B57-ACCB-D8FFD3BEDAD6",
        "title": "PROMIS Bank v1.0 - Positive Affect",
        "status": "active",
        "date": "2018-10-10T14:28:38-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/79D5E99A-0539-48E6-AEDC-720FE1F2421C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "79D5E99A-0539-48E6-AEDC-720FE1F2421C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-10-23T13:26:12-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/79D5E99A-0539-48E6-AEDC-720FE1F2421C",
        "title": "PROMIS Short Form v1.0 - Meaning and Purpose 4a",
        "status": "active",
        "date": "2017-10-23T13:26:12-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/973A8747-D029-4547-AA6C-66FE943037C6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "973A8747-D029-4547-AA6C-66FE943037C6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:02-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/973A8747-D029-4547-AA6C-66FE943037C6",
        "title": "Neuro-QOL SF v1.0 - Emotional & Beh. Dyscontrol",
        "status": "active",
        "date": "2014-11-14T10:07:02-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/87421539-E085-4A2B-A2BB-B18A2F70A43D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "87421539-E085-4A2B-A2BB-B18A2F70A43D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:39:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/87421539-E085-4A2B-A2BB-B18A2F70A43D",
        "title": "PROMIS Banco - Versión Padres v1.0 - Satisfacción con la vida",
        "status": "active",
        "date": "2018-11-15T16:39:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E9F0500B-6305-4924-A3B5-A7B3357AF15D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E9F0500B-6305-4924-A3B5-A7B3357AF15D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E9F0500B-6305-4924-A3B5-A7B3357AF15D",
        "title": "PROMIS Bank v1.0 Alcohol: Negative Expectancies",
        "status": "active",
        "date": "2014-11-14T10:03:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DABF557A-D5B2-4E19-B16F-A7A06E33B87A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DABF557A-D5B2-4E19-B16F-A7A06E33B87A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DABF557A-D5B2-4E19-B16F-A7A06E33B87A",
        "title": "Neuro-QoL SF v1.0 - Ansiedad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/920460B7-18F1-4091-8BB2-00B829C60240",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "920460B7-18F1-4091-8BB2-00B829C60240",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:32:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/920460B7-18F1-4091-8BB2-00B829C60240",
        "title": "PROMIS Ped SF v1.0 - Trastornos del sueño 4a",
        "status": "active",
        "date": "2018-11-15T16:32:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/534B1D27-4C33-4C88-83B1-FB0201018027",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "534B1D27-4C33-4C88-83B1-FB0201018027",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:33:08-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/534B1D27-4C33-4C88-83B1-FB0201018027",
        "title": "PROMIS SF v1.0 - Dyspnea Funct Limitations 10a",
        "status": "active",
        "date": "2016-03-21T15:33:08-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2EE3B8EA-12AE-4A50-BB3D-1646BCDBCF4B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2EE3B8EA-12AE-4A50-BB3D-1646BCDBCF4B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:49-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2EE3B8EA-12AE-4A50-BB3D-1646BCDBCF4B",
        "title": "PROMIS SF v2.0 - Ability to Participate Social 6a",
        "status": "active",
        "date": "2014-11-14T10:03:49-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CFD00448-BDE8-4CD8-A8B9-C90A54BB92BF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CFD00448-BDE8-4CD8-A8B9-C90A54BB92BF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:06:52-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CFD00448-BDE8-4CD8-A8B9-C90A54BB92BF",
        "title": "TBI-QOL SF v1.0 - Mobility SF9a",
        "status": "active",
        "date": "2018-01-24T15:06:52-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2C6683EE-44E1-450E-9064-61E5AECB6E0D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2C6683EE-44E1-450E-9064-61E5AECB6E0D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2C6683EE-44E1-450E-9064-61E5AECB6E0D",
        "title": "PROMIS Bank v1.0 - Global Satisfaction w Sex Life",
        "status": "active",
        "date": "2014-11-14T10:03:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4D1E246A-28F6-4101-BFBA-DEDB6D1130EE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4D1E246A-28F6-4101-BFBA-DEDB6D1130EE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-18T17:19:29-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4D1E246A-28F6-4101-BFBA-DEDB6D1130EE",
        "title": "PROMIS Scale v1.0 - GI Belly Pain 5a",
        "status": "active",
        "date": "2017-03-18T17:19:29-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7F21693B-985E-4CA4-9EB7-659893990D4B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7F21693B-985E-4CA4-9EB7-659893990D4B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T15:04:11-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7F21693B-985E-4CA4-9EB7-659893990D4B",
        "title": "PROMIS Ped SF v1.0 - Strength Impact 4a",
        "status": "active",
        "date": "2016-03-09T15:04:11-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FBE05964-8525-4559-979C-03CDA59BBAA9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FBE05964-8525-4559-979C-03CDA59BBAA9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T15:00:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FBE05964-8525-4559-979C-03CDA59BBAA9",
        "title": "PROMIS Ped Bank v1.0 - Physical Activity",
        "status": "active",
        "date": "2016-03-08T15:00:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E3FDBFDA-9208-46D9-B1A7-DEFC63CB96AD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E3FDBFDA-9208-46D9-B1A7-DEFC63CB96AD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:32:46-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E3FDBFDA-9208-46D9-B1A7-DEFC63CB96AD",
        "title": "PROMIS Parent Proxy Bank v1.0 - Sleep Disturbance",
        "status": "active",
        "date": "2018-08-22T13:32:46-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/623FE6B4-107D-4A3F-88AB-B5343DCEA939",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "623FE6B4-107D-4A3F-88AB-B5343DCEA939",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/623FE6B4-107D-4A3F-88AB-B5343DCEA939",
        "title": "PROMIS SF v1.0 Alcohol: Positive Expectancies 7a",
        "status": "active",
        "date": "2014-11-14T10:03:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8D8D0C3E-994A-4E88-BFD0-7292E35A6FDD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8D8D0C3E-994A-4E88-BFD0-7292E35A6FDD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:50:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8D8D0C3E-994A-4E88-BFD0-7292E35A6FDD",
        "title": "PROMIS Parent Proxy SF v1.0 - Positive Affect 8a",
        "status": "active",
        "date": "2016-03-09T14:50:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9A2F920A-F470-4F3A-B82E-EC9D19F38F8D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9A2F920A-F470-4F3A-B82E-EC9D19F38F8D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T13:14:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9A2F920A-F470-4F3A-B82E-EC9D19F38F8D",
        "title": "PROMIS Bank v2.0 - Informational Support",
        "status": "active",
        "date": "2014-11-14T13:14:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/92B93DC1-6CD7-4A7A-AAC9-61195A60C09E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "92B93DC1-6CD7-4A7A-AAC9-61195A60C09E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:11:45-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/92B93DC1-6CD7-4A7A-AAC9-61195A60C09E",
        "title": "PROMIS SF v2.0 - Cog Function Abilities Subset 6a",
        "status": "active",
        "date": "2016-03-21T10:11:45-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F914B7E0-9FE2-463F-8DC5-052E75E67A83",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F914B7E0-9FE2-463F-8DC5-052E75E67A83",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:08:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F914B7E0-9FE2-463F-8DC5-052E75E67A83",
        "title": "TBI-QOL SF v1.0 - Upper Extremity/ADL SF9a",
        "status": "active",
        "date": "2018-01-24T15:08:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7D3B96F8-5F79-4BFE-8AF6-4608935AFFEC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7D3B96F8-5F79-4BFE-8AF6-4608935AFFEC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:27-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7D3B96F8-5F79-4BFE-8AF6-4608935AFFEC",
        "title": "Neuro-QOL SF v1.0 - Stigma",
        "status": "active",
        "date": "2014-11-14T10:07:27-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BE7C81D4-3CB1-4C6E-BE62-EDFFB41C7A0C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BE7C81D4-3CB1-4C6E-BE62-EDFFB41C7A0C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:41:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BE7C81D4-3CB1-4C6E-BE62-EDFFB41C7A0C",
        "title": "ASCQ-Me Emotional Impact CAT v2.0",
        "status": "active",
        "date": "2017-11-02T11:41:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EFB1133D-429E-4C9D-B322-32C614CB3C9D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EFB1133D-429E-4C9D-B322-32C614CB3C9D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EFB1133D-429E-4C9D-B322-32C614CB3C9D",
        "title": "PROMIS SF v1.0-Sleep Disturbance 6a",
        "status": "active",
        "date": "2014-11-14T10:02:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6B3AE8AC-BD94-43E2-AEAD-CEDCC36A69B2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6B3AE8AC-BD94-43E2-AEAD-CEDCC36A69B2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-07T11:06:02-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6B3AE8AC-BD94-43E2-AEAD-CEDCC36A69B2",
        "title": "PROMIS Parent Proxy Bank v2.0 - Depressive Sx",
        "status": "active",
        "date": "2016-03-07T11:06:02-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/018AED44-0267-4675-99CE-74E846361EE5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "018AED44-0267-4675-99CE-74E846361EE5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:39:13-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/018AED44-0267-4675-99CE-74E846361EE5",
        "title": "PROMIS Ped SF v2.0 - Pain Interference 8a",
        "status": "active",
        "date": "2017-02-28T12:39:13-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2C2154E0-DBDB-40D2-8F56-5183D2576A24",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2C2154E0-DBDB-40D2-8F56-5183D2576A24",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:01:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2C2154E0-DBDB-40D2-8F56-5183D2576A24",
        "title": "PROMIS Parent Proxy SF v2.0 - Anxiety 8a",
        "status": "active",
        "date": "2016-03-08T10:01:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/ED3A865E-9813-4307-8C14-F08B8921E11D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "ED3A865E-9813-4307-8C14-F08B8921E11D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:47:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/ED3A865E-9813-4307-8C14-F08B8921E11D",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Meds/Tx 8a",
        "status": "active",
        "date": "2016-01-21T12:47:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/40796BF3-29E2-4686-B175-38ECCCB3D72B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "40796BF3-29E2-4686-B175-38ECCCB3D72B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:37:34-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/40796BF3-29E2-4686-B175-38ECCCB3D72B",
        "title": "PROMIS Parent Proxy SF v1.0 - Phys Stress Exp 8a",
        "status": "active",
        "date": "2016-03-09T14:37:34-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DDBD6AC8-2FFF-47A7-81E4-60A7D01F93B4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DDBD6AC8-2FFF-47A7-81E4-60A7D01F93B4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:44:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DDBD6AC8-2FFF-47A7-81E4-60A7D01F93B4",
        "title": "SCI-QOL SF v1.0 - Bladder Mgmt. Difficulties SF8a",
        "status": "active",
        "date": "2018-01-24T14:44:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A52F5004-F3E5-418B-AE7C-3A27FEABF117",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A52F5004-F3E5-418B-AE7C-3A27FEABF117",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:14:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A52F5004-F3E5-418B-AE7C-3A27FEABF117",
        "title": "PROMIS Banco - Versión Padres v2.0 - Síntomas de depresión",
        "status": "active",
        "date": "2019-02-27T17:14:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/30B25224-346C-46F2-A9C7-276EC1731226",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "30B25224-346C-46F2-A9C7-276EC1731226",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:27-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/30B25224-346C-46F2-A9C7-276EC1731226",
        "title": "PROMIS SF v1.0 - Phys. Function 20a",
        "status": "active",
        "date": "2014-11-14T10:02:27-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BFC45ABD-3565-4672-A603-B7A1EEF41103",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BFC45ABD-3565-4672-A603-B7A1EEF41103",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BFC45ABD-3565-4672-A603-B7A1EEF41103",
        "title": "PROMIS Banco v1.0 - Comportamiento ante el dolor ",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/53DA7761-121B-4E65-AB19-64E2CAC8EBA2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "53DA7761-121B-4E65-AB19-64E2CAC8EBA2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T12:55:43-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/53DA7761-121B-4E65-AB19-64E2CAC8EBA2",
        "title": "PROMIS SF v1.1 - Salud general",
        "status": "active",
        "date": "2015-06-26T12:55:43-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D1B200BC-35CD-4022-AF39-D002E0C1BC66",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D1B200BC-35CD-4022-AF39-D002E0C1BC66",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-03-25T11:49:33-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D1B200BC-35CD-4022-AF39-D002E0C1BC66",
        "title": "PROMIS Scale v2.0 - Neuropathic Pain Quality 5a",
        "status": "active",
        "date": "2019-03-25T11:49:33-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/86550044-FB63-4351-A608-BC8BA4F183B6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "86550044-FB63-4351-A608-BC8BA4F183B6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:26:05-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/86550044-FB63-4351-A608-BC8BA4F183B6",
        "title": "PROMIS Ped Bank v2.0 - Depressive Sx",
        "status": "active",
        "date": "2017-02-28T12:26:05-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BF61D57B-3C1E-45FD-904A-37AF902CB65C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BF61D57B-3C1E-45FD-904A-37AF902CB65C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:34:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BF61D57B-3C1E-45FD-904A-37AF902CB65C",
        "title": "PROMIS SF Versión Padres v1.0 - Trastornos del sueño 8a",
        "status": "active",
        "date": "2018-11-15T16:34:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9FA3C34F-AD5A-446B-B9F9-B996D3DF66FD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9FA3C34F-AD5A-446B-B9F9-B996D3DF66FD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:03:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9FA3C34F-AD5A-446B-B9F9-B996D3DF66FD",
        "title": "PROMIS Ped SF v1.0 - Physical Activity 4a",
        "status": "active",
        "date": "2016-03-09T14:03:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DD829288-0382-4FA7-8FC1-B8D25C3443E2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DD829288-0382-4FA7-8FC1-B8D25C3443E2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DD829288-0382-4FA7-8FC1-B8D25C3443E2",
        "title": "Neuro-QOL SF Ped  v1.0 - Relaciones sociales: Interacción con niños de la misma edad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A73781ED-F8FD-4823-9F10-E2F9ADD9C238",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A73781ED-F8FD-4823-9F10-E2F9ADD9C238",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A73781ED-F8FD-4823-9F10-E2F9ADD9C238",
        "title": "Neuro-QoL SF v1.0 - Capacidad para participar en roles y actividades sociales",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E8BD4AD3-06E2-4512-83E5-952DC349DFE2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E8BD4AD3-06E2-4512-83E5-952DC349DFE2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:01:55-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E8BD4AD3-06E2-4512-83E5-952DC349DFE2",
        "title": "PROMIS Bank v1.0 - Smoking NicotineDepend NonDaily",
        "status": "active",
        "date": "2016-03-08T14:01:55-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/53BB5E92-5519-42DF-85D2-8265ED1E86FE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "53BB5E92-5519-42DF-85D2-8265ED1E86FE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:01:24-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/53BB5E92-5519-42DF-85D2-8265ED1E86FE",
        "title": "PROMIS Scale v1.0 - Itch-Scratching Behavior 5a   ",
        "status": "active",
        "date": "2018-09-21T10:01:24-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F37B59EF-E6E1-4356-9FF1-AD349B689012",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F37B59EF-E6E1-4356-9FF1-AD349B689012",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-04T14:47:43-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F37B59EF-E6E1-4356-9FF1-AD349B689012",
        "title": "PROMIS Scale v1.2 - Global Mental 2a",
        "status": "active",
        "date": "2018-09-04T14:47:43-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E0BC0C93-0C96-4F02-813D-B075363E9F5D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E0BC0C93-0C96-4F02-813D-B075363E9F5D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:00:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E0BC0C93-0C96-4F02-813D-B075363E9F5D",
        "title": "TBI-QOL Bank v1.0 - Independence",
        "status": "active",
        "date": "2018-01-24T15:00:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F067D783-4E8C-4C9B-AE07-3BB4B6D3E738",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F067D783-4E8C-4C9B-AE07-3BB4B6D3E738",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:09:45-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F067D783-4E8C-4C9B-AE07-3BB4B6D3E738",
        "title": "PROMIS Ped Bank v1.0 - Cognitive Function",
        "status": "active",
        "date": "2016-03-21T10:09:45-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0BBBF6F1-20BA-4C25-B86C-CB845F2E5D78",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0BBBF6F1-20BA-4C25-B86C-CB845F2E5D78",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:00:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0BBBF6F1-20BA-4C25-B86C-CB845F2E5D78",
        "title": "TBI-QOL Bank v1.0 - Mobility",
        "status": "active",
        "date": "2018-01-24T15:00:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/27C4A4A0-AE0C-4AEB-A83F-063E25436B13",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "27C4A4A0-AE0C-4AEB-A83F-063E25436B13",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:33:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/27C4A4A0-AE0C-4AEB-A83F-063E25436B13",
        "title": "PROMIS Parent Proxy Bank v1.0 - Life Satisfaction",
        "status": "active",
        "date": "2016-03-08T14:33:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/949CE8BE-4014-4A49-AF38-0FB52F29E20B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "949CE8BE-4014-4A49-AF38-0FB52F29E20B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-28T12:00:20-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/949CE8BE-4014-4A49-AF38-0FB52F29E20B",
        "title": "PROMIS SF v1.0 - Significado y propósito 4a",
        "status": "active",
        "date": "2019-02-28T12:00:20-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/130BB4F8-D2F2-4D2F-AF84-550040C13E6D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "130BB4F8-D2F2-4D2F-AF84-550040C13E6D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T09:48:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/130BB4F8-D2F2-4D2F-AF84-550040C13E6D",
        "title": "PROMIS Ped Bank v1.0 - Physical Stress Experiences",
        "status": "active",
        "date": "2016-03-09T09:48:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DEAC9E9B-3AB0-47CE-A107-ECBEB393DBCA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DEAC9E9B-3AB0-47CE-A107-ECBEB393DBCA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:29:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DEAC9E9B-3AB0-47CE-A107-ECBEB393DBCA",
        "title": "PROMIS SF v1.0 - Smoking NicotineDepend 8a AllSmk",
        "status": "active",
        "date": "2016-03-08T14:29:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0E276586-E29A-45E0-B5C4-207A34754632",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0E276586-E29A-45E0-B5C4-207A34754632",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-29T15:27:45-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0E276586-E29A-45E0-B5C4-207A34754632",
        "title": "NIH Toolbox Estrés percibido_FF_Edades 18+ años v2.0",
        "status": "active",
        "date": "2018-11-29T15:27:45-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1FAE91AD-4390-4A66-81D7-85160E5CA498",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1FAE91AD-4390-4A66-81D7-85160E5CA498",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:34:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1FAE91AD-4390-4A66-81D7-85160E5CA498",
        "title": "SCI-FI v1.0 Basic Mobility SF 11a",
        "status": "active",
        "date": "2018-01-24T14:34:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/ECB289ED-6E48-449B-8853-4FF564ECB2B0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "ECB289ED-6E48-449B-8853-4FF564ECB2B0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-10T14:26:02-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/ECB289ED-6E48-449B-8853-4FF564ECB2B0",
        "title": "PROMIS Bank v1.0-Prescription Pain Med Misuse",
        "status": "active",
        "date": "2018-10-10T14:26:02-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6917AA46-5C15-4120-9E17-D33EE8AFE942",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6917AA46-5C15-4120-9E17-D33EE8AFE942",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:18:28-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6917AA46-5C15-4120-9E17-D33EE8AFE942",
        "title": "NIH TB Hearing Handicap Age 65+",
        "status": "active",
        "date": "2016-01-21T12:18:28-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DFA5FB84-A382-4784-953A-3D6A87232F11",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DFA5FB84-A382-4784-953A-3D6A87232F11",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:38:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DFA5FB84-A382-4784-953A-3D6A87232F11",
        "title": "PROMIS Ped SF v2.0 - Mobility 8a",
        "status": "active",
        "date": "2017-02-28T12:38:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B3B30AF1-7536-451D-AD39-62A097A5EA4D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B3B30AF1-7536-451D-AD39-62A097A5EA4D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B3B30AF1-7536-451D-AD39-62A097A5EA4D",
        "title": "PROMIS Bank v1.0 - Fatigue",
        "status": "active",
        "date": "2014-11-14T10:01:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/98107781-E834-4928-BCF7-F5406D10CC6A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "98107781-E834-4928-BCF7-F5406D10CC6A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/98107781-E834-4928-BCF7-F5406D10CC6A",
        "title": "Neuro-QoL SF v1.0 - Funcionamiento de las extremidades superiores - motricidad fina, actividades cotidianas",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/586BDBE8-5A32-48CA-ACCB-502AA9CE9A06",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "586BDBE8-5A32-48CA-ACCB-502AA9CE9A06",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T10:49:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/586BDBE8-5A32-48CA-ACCB-502AA9CE9A06",
        "title": "SCI-FI v1.0 Power Wheelchair - Core Items CAT",
        "status": "active",
        "date": "2018-01-23T10:49:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F0E13A4D-2EA5-448E-B1BF-09D80A3521B9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F0E13A4D-2EA5-448E-B1BF-09D80A3521B9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T14:08:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F0E13A4D-2EA5-448E-B1BF-09D80A3521B9",
        "title": "SCI-QOL Scale v1.0 - Pain Behavior",
        "status": "active",
        "date": "2018-01-23T14:08:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EEA973EF-0663-46C1-97C7-7ACFFCBB50DD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EEA973EF-0663-46C1-97C7-7ACFFCBB50DD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:33:29-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EEA973EF-0663-46C1-97C7-7ACFFCBB50DD",
        "title": "PROMIS SF v1.0 - Smoking PsychSocExpect Day 6a",
        "status": "active",
        "date": "2016-03-08T14:33:29-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8212E228-A549-4CCE-8C5F-6049096B8392",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8212E228-A549-4CCE-8C5F-6049096B8392",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8212E228-A549-4CCE-8C5F-6049096B8392",
        "title": "Neuro-QOL Ped Bank v1.0 - Stigma",
        "status": "active",
        "date": "2014-11-14T10:06:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F42B45ED-D5E5-4A14-9ACE-B861640EDBC8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F42B45ED-D5E5-4A14-9ACE-B861640EDBC8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:35:04-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F42B45ED-D5E5-4A14-9ACE-B861640EDBC8",
        "title": "PROMIS Bank v1.0 - Dyspnea Functional Limitations",
        "status": "active",
        "date": "2016-03-21T15:35:04-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1B05EB62-CCDE-4065-B5FA-E7EC776F1C28",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1B05EB62-CCDE-4065-B5FA-E7EC776F1C28",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:37:48-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1B05EB62-CCDE-4065-B5FA-E7EC776F1C28",
        "title": "PROMIS SF Ped v2.0 - Asma 8a",
        "status": "active",
        "date": "2018-08-27T13:37:48-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FC6E9716-4733-4A93-9B3F-7F0AFF44921F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FC6E9716-4733-4A93-9B3F-7F0AFF44921F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:45:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FC6E9716-4733-4A93-9B3F-7F0AFF44921F",
        "title": "SCI-QOL SF v1.0 - Independence SF 8a",
        "status": "active",
        "date": "2018-01-24T14:45:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0461D3DA-F3D4-43C3-8BEE-0CD2879A143F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0461D3DA-F3D4-43C3-8BEE-0CD2879A143F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:38:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0461D3DA-F3D4-43C3-8BEE-0CD2879A143F",
        "title": "SCI-QOL Bank v1.0 - Anxiety",
        "status": "active",
        "date": "2018-01-24T14:38:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A8FD52D9-45C8-4FFE-8CF7-EFDE76B1DC6A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A8FD52D9-45C8-4FFE-8CF7-EFDE76B1DC6A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A8FD52D9-45C8-4FFE-8CF7-EFDE76B1DC6A",
        "title": "Neuro-QOL Bank v2.0 - Cognitive Function",
        "status": "active",
        "date": "2014-11-14T10:07:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/01F49173-B771-4F86-AB36-D4B400DB3042",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "01F49173-B771-4F86-AB36-D4B400DB3042",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/01F49173-B771-4F86-AB36-D4B400DB3042",
        "title": "PROMIS SF v2.0 - Instrumental Support 8a",
        "status": "active",
        "date": "2014-11-14T10:03:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/58D480CE-B619-4E15-A605-BF302E2F3CC1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "58D480CE-B619-4E15-A605-BF302E2F3CC1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-04-23T16:21:15-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/58D480CE-B619-4E15-A605-BF302E2F3CC1",
        "title": "PROMIS Bank v2.0 - Pain Behavior",
        "status": "active",
        "date": "2019-04-23T16:21:15-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/64C65877-446C-4EC2-9716-2F46DB3C8BC5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "64C65877-446C-4EC2-9716-2F46DB3C8BC5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:08:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/64C65877-446C-4EC2-9716-2F46DB3C8BC5",
        "title": "PROMIS Parent Proxy SF v2.0 - Upper Extremity 8a",
        "status": "active",
        "date": "2016-03-08T10:08:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F84A2322-CEA1-4CFE-B06F-65AB776EE988",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F84A2322-CEA1-4CFE-B06F-65AB776EE988",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T13:28:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F84A2322-CEA1-4CFE-B06F-65AB776EE988",
        "title": "PROMIS Parent Proxy SF v1.0 - Life Satisfaction 8a",
        "status": "active",
        "date": "2016-03-09T13:28:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2B571FDF-97BC-4CCE-9710-D316D764A74E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2B571FDF-97BC-4CCE-9710-D316D764A74E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:40:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2B571FDF-97BC-4CCE-9710-D316D764A74E",
        "title": "PROMIS SF Ped v1.0 - Relaciones familiares 8a",
        "status": "active",
        "date": "2018-11-15T16:40:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2C763554-78CA-4B27-B97E-49813DF9DF19",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2C763554-78CA-4B27-B97E-49813DF9DF19",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2C763554-78CA-4B27-B97E-49813DF9DF19",
        "title": "Neuro-QoL Banco v1.0 - Agotamiento",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/86D41A94-DB57-4B50-ACB6-AB8A68F7486D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "86D41A94-DB57-4B50-ACB6-AB8A68F7486D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:38:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/86D41A94-DB57-4B50-ACB6-AB8A68F7486D",
        "title": "PROMIS Banco - Versión Padres v1.0 - Alteraciones relacionadas con el sueño",
        "status": "active",
        "date": "2018-11-15T16:38:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DF7D3792-D2F5-465E-8B53-F92FA05FC756",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DF7D3792-D2F5-465E-8B53-F92FA05FC756",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:06:07-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DF7D3792-D2F5-465E-8B53-F92FA05FC756",
        "title": "TBI-QOL SF v1.0 - Grief - Loss SF9a",
        "status": "active",
        "date": "2018-01-24T15:06:07-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DD2480AD-9B72-4A2B-B0BA-7DFA8A904487",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DD2480AD-9B72-4A2B-B0BA-7DFA8A904487",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:02:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DD2480AD-9B72-4A2B-B0BA-7DFA8A904487",
        "title": "TBI-QOL Bank v1.0 - Stigma",
        "status": "active",
        "date": "2018-01-24T15:02:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FD3B83CE-E17F-4367-9B26-4B80BDB03B55",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FD3B83CE-E17F-4367-9B26-4B80BDB03B55",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:40:54-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FD3B83CE-E17F-4367-9B26-4B80BDB03B55",
        "title": "PROMIS Pool v1.0 - Dyspnea Time Extension",
        "status": "active",
        "date": "2016-03-21T15:40:54-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0CC98AD0-9D47-49F5-9132-5826D0E4980C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0CC98AD0-9D47-49F5-9132-5826D0E4980C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0CC98AD0-9D47-49F5-9132-5826D0E4980C",
        "title": "PROMIS SF v1.0-Pain Interference 6a",
        "status": "active",
        "date": "2014-11-14T10:02:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EFDEC04D-E708-4916-9F8B-0CA1B2E14467",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EFDEC04D-E708-4916-9F8B-0CA1B2E14467",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:07:43-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EFDEC04D-E708-4916-9F8B-0CA1B2E14467",
        "title": "PROMIS Bank v2.0 - Cognitive Function",
        "status": "active",
        "date": "2016-03-21T10:07:43-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/47E88339-68CE-437E-BB75-E13BD9784187",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "47E88339-68CE-437E-BB75-E13BD9784187",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/47E88339-68CE-437E-BB75-E13BD9784187",
        "title": "PROMIS SF v1.0 - Ansiedad 7a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B69C8CDA-7D18-4553-8058-5AB4D55ADED1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B69C8CDA-7D18-4553-8058-5AB4D55ADED1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-26T16:12:01-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B69C8CDA-7D18-4553-8058-5AB4D55ADED1",
        "title": "PROMIS Parent Proxy SF v1.0-Fam Relationships 4a",
        "status": "active",
        "date": "2018-09-26T16:12:01-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/69C03146-B96D-4B1A-B2A8-170EF8AA231F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "69C03146-B96D-4B1A-B2A8-170EF8AA231F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-05T14:43:45-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/69C03146-B96D-4B1A-B2A8-170EF8AA231F",
        "title": "PROMIS SF v1.0-Appeal of Sub Use (Past 30 days) 7a",
        "status": "active",
        "date": "2018-10-05T14:43:45-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FBE3A9A5-BE26-4DDC-A6F4-04790BB58B4E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FBE3A9A5-BE26-4DDC-A6F4-04790BB58B4E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:55:52-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FBE3A9A5-BE26-4DDC-A6F4-04790BB58B4E",
        "title": "PROMIS Bank v2.0 -  Upper Extremity",
        "status": "active",
        "date": "2016-10-10T10:55:52-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B4B25A11-994D-4709-A3B5-A76CBD3B0902",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B4B25A11-994D-4709-A3B5-A76CBD3B0902",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-05T14:44:49-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B4B25A11-994D-4709-A3B5-A76CBD3B0902",
        "title": "PROMIS SF v1.0-Prescription Pain Med Misuse 7a",
        "status": "active",
        "date": "2018-10-05T14:44:49-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/60C4498E-ECF7-43D9-836B-CC135462AB67",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "60C4498E-ECF7-43D9-836B-CC135462AB67",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/60C4498E-ECF7-43D9-836B-CC135462AB67",
        "title": "Neuro-QoL SF v1.0 - Depresión",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/73D67584-528B-4E21-BDDD-FD48FD8EB964",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "73D67584-528B-4E21-BDDD-FD48FD8EB964",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:41:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/73D67584-528B-4E21-BDDD-FD48FD8EB964",
        "title": "PROMIS Ped SF v1.0 - Positive Affect 4a",
        "status": "active",
        "date": "2016-03-09T14:41:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3DFC62FE-2BC7-4A0C-9687-3CA2BBC2C728",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3DFC62FE-2BC7-4A0C-9687-3CA2BBC2C728",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:35:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3DFC62FE-2BC7-4A0C-9687-3CA2BBC2C728",
        "title": "SCI-FI v1.0 Fine Motor SF 9a",
        "status": "active",
        "date": "2018-01-24T14:35:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C7A4EA8A-2F2B-49B7-82DA-145BC2EA514B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C7A4EA8A-2F2B-49B7-82DA-145BC2EA514B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-26T16:11:24-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C7A4EA8A-2F2B-49B7-82DA-145BC2EA514B",
        "title": "PROMIS Ped Bank v1.0 - Family Relationships",
        "status": "active",
        "date": "2018-09-26T16:11:24-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F45BA0A4-F3AF-409E-B776-D2FA2CC02BC8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F45BA0A4-F3AF-409E-B776-D2FA2CC02BC8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:23:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F45BA0A4-F3AF-409E-B776-D2FA2CC02BC8",
        "title": "PROMIS SF v1.0 - Smoking Coping Expect Nonday 4a",
        "status": "active",
        "date": "2016-03-08T14:23:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/97EF3938-4CDC-4192-B2E0-54D71EABC3DE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "97EF3938-4CDC-4192-B2E0-54D71EABC3DE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:07:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/97EF3938-4CDC-4192-B2E0-54D71EABC3DE",
        "title": "TBI-QOL SF v1.0 - Pain Interference SF10a",
        "status": "active",
        "date": "2018-01-24T15:07:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/39B2AF5D-DDC2-48C4-9EBC-660C9B9FE27F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "39B2AF5D-DDC2-48C4-9EBC-660C9B9FE27F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:40:05-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/39B2AF5D-DDC2-48C4-9EBC-660C9B9FE27F",
        "title": "PROMIS Bank v1.0 - Dyspnea Severity",
        "status": "active",
        "date": "2016-03-21T15:40:05-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9925E968-E08E-4438-95DC-41D70C9E6777",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9925E968-E08E-4438-95DC-41D70C9E6777",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T16:31:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9925E968-E08E-4438-95DC-41D70C9E6777",
        "title": "PROMIS Ped SF v2.0 - Fatigue 10a",
        "status": "active",
        "date": "2017-02-28T16:31:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AD598E94-17FB-4A09-A65B-BCD0923F78AF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AD598E94-17FB-4A09-A65B-BCD0923F78AF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:36:01-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AD598E94-17FB-4A09-A65B-BCD0923F78AF",
        "title": "PROMIS SF v1.0 - Dyspnea Severity 10a",
        "status": "active",
        "date": "2016-03-21T15:36:01-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5549472F-E524-4247-9ED7-58AF26F83D02",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5549472F-E524-4247-9ED7-58AF26F83D02",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5549472F-E524-4247-9ED7-58AF26F83D02",
        "title": "PROMIS SF v1.0 - Satisfacción con la participación en roles sociales 8a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F3D79EB3-F3E4-4135-BFEE-B5E10911F0A5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F3D79EB3-F3E4-4135-BFEE-B5E10911F0A5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:45:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F3D79EB3-F3E4-4135-BFEE-B5E10911F0A5",
        "title": "SCI-QOL SF v1.0 - Grief - Loss SF9a",
        "status": "active",
        "date": "2018-01-24T14:45:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0236C869-3484-4A27-86F1-847577E9722F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0236C869-3484-4A27-86F1-847577E9722F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-12-10T14:25:24-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0236C869-3484-4A27-86F1-847577E9722F",
        "title": "NIH Toolbox Estrés percibido_CAT_Versión Padres_Edades 8-12 años v2.0",
        "status": "active",
        "date": "2018-12-10T14:25:24-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5930A0A0-2511-400B-8124-B14B8E269ED5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5930A0A0-2511-400B-8124-B14B8E269ED5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5930A0A0-2511-400B-8124-B14B8E269ED5",
        "title": "PROMIS Banco v1.2 - Capacidad de funcionamiento físico",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E5DA54AC-BBF4-4438-8DB1-9CC3B9D76DBE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E5DA54AC-BBF4-4438-8DB1-9CC3B9D76DBE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:38:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E5DA54AC-BBF4-4438-8DB1-9CC3B9D76DBE",
        "title": "PROMIS SF Versión Padres v1.0 - Trastornos del sueño 4a",
        "status": "active",
        "date": "2018-11-15T16:38:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7DD6A1CE-1921-40EF-A1B5-D5B20FE5C73B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7DD6A1CE-1921-40EF-A1B5-D5B20FE5C73B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:37:06-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7DD6A1CE-1921-40EF-A1B5-D5B20FE5C73B",
        "title": "SCI-FI v1.0 Self Care SF 11a",
        "status": "active",
        "date": "2018-01-24T14:37:06-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AD479201-5F9A-49BD-8667-EC551A5D8FA9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AD479201-5F9A-49BD-8667-EC551A5D8FA9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:01:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AD479201-5F9A-49BD-8667-EC551A5D8FA9",
        "title": "PROMIS Bank v1.0 - Smoking NicotineDepend Daily",
        "status": "active",
        "date": "2016-03-08T14:01:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8CE355C0-EA88-4560-AC47-88FE2DBF4291",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8CE355C0-EA88-4560-AC47-88FE2DBF4291",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:04:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8CE355C0-EA88-4560-AC47-88FE2DBF4291",
        "title": "TBI-QOL SF v1.0 - Cognition - Gen Con SF10a",
        "status": "active",
        "date": "2018-01-24T15:04:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6DDF7120-5D8D-47DF-8DC1-380E27676478",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6DDF7120-5D8D-47DF-8DC1-380E27676478",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T13:54:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6DDF7120-5D8D-47DF-8DC1-380E27676478",
        "title": "PROMIS Bank v1.0 - Smoking Coping Expect NonDaily",
        "status": "active",
        "date": "2016-03-08T13:54:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/05B56921-653E-4D7D-83EB-48934602D426",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "05B56921-653E-4D7D-83EB-48934602D426",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:47:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/05B56921-653E-4D7D-83EB-48934602D426",
        "title": "PROMIS SF - Versión Padres v1.0 - Actividad física 8a",
        "status": "active",
        "date": "2019-01-07T10:47:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0BB103D3-FAAC-49E8-91C4-1B6CB3C89561",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0BB103D3-FAAC-49E8-91C4-1B6CB3C89561",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0BB103D3-FAAC-49E8-91C4-1B6CB3C89561",
        "title": "PROMIS SF v1.0 - Satisfacción con la participación en roles sociales 4a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/01A817C5-ACB0-4D06-B46A-7E9BF43A7311",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "01A817C5-ACB0-4D06-B46A-7E9BF43A7311",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:26:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/01A817C5-ACB0-4D06-B46A-7E9BF43A7311",
        "title": "PROMIS SF v1.0 - Smoking Health Expect 6a AllSmk",
        "status": "active",
        "date": "2016-03-08T14:26:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FCB4FF91-35C1-48F1-B785-BEB737AFBB28",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FCB4FF91-35C1-48F1-B785-BEB737AFBB28",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FCB4FF91-35C1-48F1-B785-BEB737AFBB28",
        "title": "PROMIS SF v2.0 - Capacidad para participar en roles y actividades sociales 6a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/488922EF-E56D-4C29-8D12-6FD6965BC613",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "488922EF-E56D-4C29-8D12-6FD6965BC613",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:44:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/488922EF-E56D-4C29-8D12-6FD6965BC613",
        "title": "PROMIS Ped SF v1.0 - Positive Affect 8a",
        "status": "active",
        "date": "2016-03-09T14:44:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/46D4E8E2-6508-42C1-8C45-35B8345A3364",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "46D4E8E2-6508-42C1-8C45-35B8345A3364",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-10-23T13:23:01-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/46D4E8E2-6508-42C1-8C45-35B8345A3364",
        "title": "PROMIS Bank v1.0 - Meaning and Purpose",
        "status": "active",
        "date": "2017-10-23T13:23:01-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4BCBCB34-7D50-410A-93CF-23471D37B2FF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4BCBCB34-7D50-410A-93CF-23471D37B2FF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-09-26T13:42:03-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4BCBCB34-7D50-410A-93CF-23471D37B2FF",
        "title": "PROMIS SF v1.0 - Depresión 8a",
        "status": "active",
        "date": "2016-09-26T13:42:03-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4299820E-900D-44AC-8263-000C7AFF7FE3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4299820E-900D-44AC-8263-000C7AFF7FE3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:33:35-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4299820E-900D-44AC-8263-000C7AFF7FE3",
        "title": "PROMIS Parent Proxy Bank v1.0 - Sleep-Rel Impair",
        "status": "active",
        "date": "2018-08-22T13:33:35-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/930C56FE-ABA5-47AF-AE16-F68D2CFC9BEF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "930C56FE-ABA5-47AF-AE16-F68D2CFC9BEF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:44:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/930C56FE-ABA5-47AF-AE16-F68D2CFC9BEF",
        "title": "SCI-QOL SF v1.0 - Bowel Mgmt. Difficulties SF9a",
        "status": "active",
        "date": "2018-01-24T14:44:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9C2E3FDD-1827-451E-B565-6B8B6D5A4017",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9C2E3FDD-1827-451E-B565-6B8B6D5A4017",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:10:26-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9C2E3FDD-1827-451E-B565-6B8B6D5A4017",
        "title": "PROMIS Ped SF v1.0 - Cognitive Function 7a",
        "status": "active",
        "date": "2016-03-21T10:10:26-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1B5A7A47-9D20-496D-A644-F6B6C91BE425",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1B5A7A47-9D20-496D-A644-F6B6C91BE425",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1B5A7A47-9D20-496D-A644-F6B6C91BE425",
        "title": "PROMIS SF v1.0-Social Sat Role 6a",
        "status": "active",
        "date": "2014-11-14T10:02:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/525A8F52-A84C-455C-8998-551D43A2D1FA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "525A8F52-A84C-455C-8998-551D43A2D1FA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-10T13:16:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/525A8F52-A84C-455C-8998-551D43A2D1FA",
        "title": "PROMIS Parent Proxy Scale v1.0 - Global Health 7",
        "status": "active",
        "date": "2016-03-10T13:16:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A5AC2206-7197-4AFE-83FA-B1A3A69E278B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A5AC2206-7197-4AFE-83FA-B1A3A69E278B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T15:06:59-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A5AC2206-7197-4AFE-83FA-B1A3A69E278B",
        "title": "PROMIS Ped SF v1.0 - Strength Impact 8a",
        "status": "active",
        "date": "2016-03-09T15:06:59-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4F2916ED-F787-409B-AA65-784D8D324BE4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4F2916ED-F787-409B-AA65-784D8D324BE4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:45:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4F2916ED-F787-409B-AA65-784D8D324BE4",
        "title": "PROMIS Bank v1.0 - Self-Efficacy Manage Day Activ",
        "status": "active",
        "date": "2016-01-21T12:45:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AE769770-EA2C-44B5-8C20-47BE4CC3C0C7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AE769770-EA2C-44B5-8C20-47BE4CC3C0C7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:28-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AE769770-EA2C-44B5-8C20-47BE4CC3C0C7",
        "title": "PROMIS SF v2.0 - Companionship 4a",
        "status": "active",
        "date": "2014-11-14T10:01:28-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/126114D4-129E-48B6-A0D5-389801B26A89",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "126114D4-129E-48B6-A0D5-389801B26A89",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/126114D4-129E-48B6-A0D5-389801B26A89",
        "title": "Neuro-QoL SF v1.0 - Trastornos del sueño",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F56CFDDC-426A-4FA6-8E01-721F0E24312C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F56CFDDC-426A-4FA6-8E01-721F0E24312C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T10:49:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F56CFDDC-426A-4FA6-8E01-721F0E24312C",
        "title": "SCI-FI v1.0 Manual Wheelchair - Core Items CAT",
        "status": "active",
        "date": "2018-01-23T10:49:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/856F5AFB-30F2-436B-817A-797C0FA96F14",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "856F5AFB-30F2-436B-817A-797C0FA96F14",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:46:02-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/856F5AFB-30F2-436B-817A-797C0FA96F14",
        "title": "PROMIS Bank v1.0 - Self-Efficacy Manage Meds/Tx",
        "status": "active",
        "date": "2016-01-21T12:46:02-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5EBDCC06-8F7E-4580-8CA9-4F0BD9E254ED",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5EBDCC06-8F7E-4580-8CA9-4F0BD9E254ED",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:08:11-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5EBDCC06-8F7E-4580-8CA9-4F0BD9E254ED",
        "title": "PROMIS SF v1.0 - Significado y propósito 6a",
        "status": "active",
        "date": "2019-02-27T17:08:11-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/56D088A4-02F3-499D-9044-0281CE4BE17B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "56D088A4-02F3-499D-9044-0281CE4BE17B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T10:49:59-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/56D088A4-02F3-499D-9044-0281CE4BE17B",
        "title": "SCI-FI v1.0 Self Care - Core Items CAT",
        "status": "active",
        "date": "2018-01-23T10:49:59-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D4CC6A25-D2A1-4B3E-9345-B8CE0B49BFBA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D4CC6A25-D2A1-4B3E-9345-B8CE0B49BFBA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D4CC6A25-D2A1-4B3E-9345-B8CE0B49BFBA",
        "title": "PROMIS SF v1.0 - Satisfacción con la participación en roles sociales 7a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/638C3DCE-89EB-4182-96C7-4BEA9E522C7B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "638C3DCE-89EB-4182-96C7-4BEA9E522C7B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/638C3DCE-89EB-4182-96C7-4BEA9E522C7B",
        "title": "PROMIS SF v1.0 - Efectos del dolor  4a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5C967CFD-25CE-4306-A2D7-ABFA8CF6B121",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5C967CFD-25CE-4306-A2D7-ABFA8CF6B121",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5C967CFD-25CE-4306-A2D7-ABFA8CF6B121",
        "title": "Neuro-QoL SF v1.0 - Funcionamiento de las extremidades inferiores (Movilidad)",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/48AA3E5F-CDE6-4FAE-819A-D65992D539C6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "48AA3E5F-CDE6-4FAE-819A-D65992D539C6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/48AA3E5F-CDE6-4FAE-819A-D65992D539C6",
        "title": "PROMIS Bank v2.0 - Instrumental Support",
        "status": "active",
        "date": "2014-11-14T10:03:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/17B4C42B-9247-40DA-9CF1-F4F9A427A7AA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "17B4C42B-9247-40DA-9CF1-F4F9A427A7AA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:01:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/17B4C42B-9247-40DA-9CF1-F4F9A427A7AA",
        "title": "TBI-QOL Bank v1.0 - Positive Affect and Well-Being",
        "status": "active",
        "date": "2018-01-24T15:01:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4008A5BE-8136-4844-9705-17B33761FBA9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4008A5BE-8136-4844-9705-17B33761FBA9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:39:33-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4008A5BE-8136-4844-9705-17B33761FBA9",
        "title": "PROMIS Ped SF v1.0 - Sleep Disturbance 4a",
        "status": "active",
        "date": "2018-08-22T13:39:33-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C7940999-6CFC-40F0-8EB7-36BC2C035201",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C7940999-6CFC-40F0-8EB7-36BC2C035201",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:42:27-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C7940999-6CFC-40F0-8EB7-36BC2C035201",
        "title": "ASCQ-Me Social Functioning Impact SF v2.0",
        "status": "active",
        "date": "2017-11-02T11:42:27-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/05CBFC91-9878-4E3C-B83E-9AD22B14C1A8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "05CBFC91-9878-4E3C-B83E-9AD22B14C1A8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:07:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/05CBFC91-9878-4E3C-B83E-9AD22B14C1A8",
        "title": "TBI-QOL SF v1.0 - Resilience SF10a",
        "status": "active",
        "date": "2018-01-24T15:07:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D195A3C8-70A2-406B-B439-7DCD9D787FC9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D195A3C8-70A2-406B-B439-7DCD9D787FC9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:11:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D195A3C8-70A2-406B-B439-7DCD9D787FC9",
        "title": "PROMIS SF v1.0 - Satisfacción general con la vida 5a",
        "status": "active",
        "date": "2019-02-27T17:11:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0BD40FC5-67F8-4C92-B277-4F26949D53EF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0BD40FC5-67F8-4C92-B277-4F26949D53EF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0BD40FC5-67F8-4C92-B277-4F26949D53EF",
        "title": "Neuro-QOL Ped Bank v1.0 - SR - Interaction w Peers",
        "status": "active",
        "date": "2014-11-14T10:06:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FFABFF2C-09ED-468A-A0B8-5CEF663134D7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FFABFF2C-09ED-468A-A0B8-5CEF663134D7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:43:05-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FFABFF2C-09ED-468A-A0B8-5CEF663134D7",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Emotions 4a",
        "status": "active",
        "date": "2016-01-21T12:43:05-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AD8333DC-2BA7-41C1-A030-DF572194107A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AD8333DC-2BA7-41C1-A030-DF572194107A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:03:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AD8333DC-2BA7-41C1-A030-DF572194107A",
        "title": "TBI-QOL SF v1.0 - Ability to Part. In SRA SF10a",
        "status": "active",
        "date": "2018-01-24T15:03:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/184DA9A6-2A8F-4FDC-BA5B-3CA6E7AE35A5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "184DA9A6-2A8F-4FDC-BA5B-3CA6E7AE35A5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:34:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/184DA9A6-2A8F-4FDC-BA5B-3CA6E7AE35A5",
        "title": "PROMIS Banco Ped v1.0 - Trastornos del sueño ",
        "status": "active",
        "date": "2018-11-15T16:34:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2EB2A2A9-29A2-4A60-819C-F6052E1CB57C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2EB2A2A9-29A2-4A60-819C-F6052E1CB57C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2EB2A2A9-29A2-4A60-819C-F6052E1CB57C",
        "title": "PROMIS SF v1.0 - Alteraciones relacionadas con el sueño 8a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7E7326D9-2F70-42E8-B976-BF4B2D854847",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7E7326D9-2F70-42E8-B976-BF4B2D854847",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:19:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7E7326D9-2F70-42E8-B976-BF4B2D854847",
        "title": "PROMIS Parent Proxy Scale v2.0 - Anger",
        "status": "active",
        "date": "2016-03-08T10:19:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2177E9AC-DBAB-408B-835E-AF27EA15CA4F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2177E9AC-DBAB-408B-835E-AF27EA15CA4F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T13:56:13-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2177E9AC-DBAB-408B-835E-AF27EA15CA4F",
        "title": "PROMIS Bank v1.0 - Smoking Emot/Sensory Daily",
        "status": "active",
        "date": "2016-03-08T13:56:13-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/76DB88BA-CDC0-4796-9C15-D6D8662A2BBD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "76DB88BA-CDC0-4796-9C15-D6D8662A2BBD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-18T17:39:40-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/76DB88BA-CDC0-4796-9C15-D6D8662A2BBD",
        "title": "PROMIS Scale v1.0 - GI Bowel Incontinence 4a",
        "status": "active",
        "date": "2017-03-18T17:39:40-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/34E5F113-7038-4686-BCD6-75BA16486801",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "34E5F113-7038-4686-BCD6-75BA16486801",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:59:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/34E5F113-7038-4686-BCD6-75BA16486801",
        "title": "TBI-QOL Bank v1.0 - Grief - Loss",
        "status": "active",
        "date": "2018-01-24T14:59:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A70D3A68-8E09-4338-9B0F-3B3E9880F502",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A70D3A68-8E09-4338-9B0F-3B3E9880F502",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:34:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A70D3A68-8E09-4338-9B0F-3B3E9880F502",
        "title": "PROMIS Ped SF v1.0 - Trastornos del sueño 8a",
        "status": "active",
        "date": "2018-11-15T16:34:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B2F6592C-F092-40C6-BE69-C22F8FEDF688",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B2F6592C-F092-40C6-BE69-C22F8FEDF688",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T15:09:59-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B2F6592C-F092-40C6-BE69-C22F8FEDF688",
        "title": "PROMIS Parent Proxy SF v1.0 - Strength Impact 4a",
        "status": "active",
        "date": "2016-03-09T15:09:59-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CE48574A-8F76-4236-BEA8-1EE669F5F50E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CE48574A-8F76-4236-BEA8-1EE669F5F50E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:52:54-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CE48574A-8F76-4236-BEA8-1EE669F5F50E",
        "title": "PROMIS Escala Ped v1.0 - Salud general 7",
        "status": "active",
        "date": "2018-08-27T13:52:54-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8B9C427D-0AB6-49D8-9546-2B646D15C4B2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8B9C427D-0AB6-49D8-9546-2B646D15C4B2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-10-23T13:26:38-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8B9C427D-0AB6-49D8-9546-2B646D15C4B2",
        "title": "PROMIS Short Form v1.0 - Meaning and Purpose 6a",
        "status": "active",
        "date": "2017-10-23T13:26:38-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FE8F6463-4F20-41BE-A627-55FEDA437729",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FE8F6463-4F20-41BE-A627-55FEDA437729",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-09-26T14:28:44-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FE8F6463-4F20-41BE-A627-55FEDA437729",
        "title": "PROMIS SF v1.0 - Agotamiento 6a",
        "status": "active",
        "date": "2016-09-26T14:28:44-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F61BEF57-E67C-440F-A9EA-BAFA97D13CE5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F61BEF57-E67C-440F-A9EA-BAFA97D13CE5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-12T12:21:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F61BEF57-E67C-440F-A9EA-BAFA97D13CE5",
        "title": "NIH TB Vision-Related QOL Role Performance Age 18+",
        "status": "active",
        "date": "2016-01-12T12:21:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1BB473EF-9825-4127-9744-E060F5B7C9A2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1BB473EF-9825-4127-9744-E060F5B7C9A2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:05:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1BB473EF-9825-4127-9744-E060F5B7C9A2",
        "title": "PROMIS Banco v1.0 - Significado y propósito",
        "status": "active",
        "date": "2019-02-27T17:05:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1C3CC8B7-9F70-46A5-9616-E0A9A3403453",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1C3CC8B7-9F70-46A5-9616-E0A9A3403453",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1C3CC8B7-9F70-46A5-9616-E0A9A3403453",
        "title": "PROMIS SF v1.0-Fatigue 6a",
        "status": "active",
        "date": "2014-11-14T10:01:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C3E65FA1-73B6-450F-85E5-0C43AD06A158",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C3E65FA1-73B6-450F-85E5-0C43AD06A158",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:09:01-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C3E65FA1-73B6-450F-85E5-0C43AD06A158",
        "title": "PROMIS Parent Proxy SF v1.0 - Cog Function 7a",
        "status": "active",
        "date": "2016-03-21T10:09:01-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5FC725DA-E297-4D4C-988D-BA4D2FA87D62",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5FC725DA-E297-4D4C-988D-BA4D2FA87D62",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5FC725DA-E297-4D4C-988D-BA4D2FA87D62",
        "title": "PROMIS SF v1.1 - Global Health",
        "status": "active",
        "date": "2014-11-14T10:04:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F6C7CFF1-76B1-4CB6-8D11-8CAEF848B11A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F6C7CFF1-76B1-4CB6-8D11-8CAEF848B11A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F6C7CFF1-76B1-4CB6-8D11-8CAEF848B11A",
        "title": "PROMIS Bank v1.0 Alcohol: Positive Consequences",
        "status": "active",
        "date": "2014-11-14T10:02:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8BDE0A54-D5D0-4102-B3F7-16CB5E04AA33",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8BDE0A54-D5D0-4102-B3F7-16CB5E04AA33",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8BDE0A54-D5D0-4102-B3F7-16CB5E04AA33",
        "title": "Neuro-QOL SF v1.0 - Sleep Disturbance",
        "status": "active",
        "date": "2014-11-14T10:07:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6D7441F7-A502-49C8-A530-E350DB2D128F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6D7441F7-A502-49C8-A530-E350DB2D128F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6D7441F7-A502-49C8-A530-E350DB2D128F",
        "title": "Neuro-QoL Banco Ped  v1.0 - Estigma",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B3E8DF27-01F3-4F4A-A198-261820960856",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B3E8DF27-01F3-4F4A-A198-261820960856",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:41:40-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B3E8DF27-01F3-4F4A-A198-261820960856",
        "title": "ASCQ-Me Stiffness Impact CAT v2.0",
        "status": "active",
        "date": "2017-11-02T11:41:40-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/09676A0F-DAF2-4691-9DE7-627908837C32",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "09676A0F-DAF2-4691-9DE7-627908837C32",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/09676A0F-DAF2-4691-9DE7-627908837C32",
        "title": "PROMIS SF v2.0 - Social Isolation 8a",
        "status": "active",
        "date": "2014-11-14T10:05:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7D556FE1-F066-4338-B7BA-1C8A02F8BB6F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7D556FE1-F066-4338-B7BA-1C8A02F8BB6F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:40:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7D556FE1-F066-4338-B7BA-1C8A02F8BB6F",
        "title": "SCI-QOL Bank v1.0 - Positive Affect and Well-Being",
        "status": "active",
        "date": "2018-01-24T14:40:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/425D9AC5-3549-49C6-8100-46DCC027129B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "425D9AC5-3549-49C6-8100-46DCC027129B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/425D9AC5-3549-49C6-8100-46DCC027129B",
        "title": "Neuro-QOL Bank v1.0 - Fatigue",
        "status": "active",
        "date": "2014-11-14T10:07:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5FBA0335-CA7F-466E-8C4A-D54CEFEAEB78",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5FBA0335-CA7F-466E-8C4A-D54CEFEAEB78",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:39:10-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5FBA0335-CA7F-466E-8C4A-D54CEFEAEB78",
        "title": "SCI-QOL Bank v1.0 - Bowel Mgmt. Difficulties",
        "status": "active",
        "date": "2018-01-24T14:39:10-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B730F00E-C958-4654-85C1-0931A7289322",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B730F00E-C958-4654-85C1-0931A7289322",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B730F00E-C958-4654-85C1-0931A7289322",
        "title": "PROMIS SF v2.0 - Ability to Participate Social 4a",
        "status": "active",
        "date": "2014-11-14T10:04:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8F4B0736-7960-4E87-88DA-640D48EDB4EE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8F4B0736-7960-4E87-88DA-640D48EDB4EE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:34:26-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8F4B0736-7960-4E87-88DA-640D48EDB4EE",
        "title": "PROMIS Pool v1.0 - Dyspnea Asst Devices Resources",
        "status": "active",
        "date": "2016-03-21T15:34:26-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/48B8D539-1BEB-4350-B03B-CCB568B4B77E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "48B8D539-1BEB-4350-B03B-CCB568B4B77E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/48B8D539-1BEB-4350-B03B-CCB568B4B77E",
        "title": "PROMIS Banco v1.0 - Satisfacción con la participación en roles sociales",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A3931487-9C93-4D0F-B57B-1C728F3DFD93",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A3931487-9C93-4D0F-B57B-1C728F3DFD93",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:39:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A3931487-9C93-4D0F-B57B-1C728F3DFD93",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Day Activ 4a",
        "status": "active",
        "date": "2016-01-21T12:39:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/26874899-AD14-4276-8726-2C69DAC4155F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "26874899-AD14-4276-8726-2C69DAC4155F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T10:37:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/26874899-AD14-4276-8726-2C69DAC4155F",
        "title": "PROMIS Parent Proxy Bank v1.0 - Psych Stress Exp",
        "status": "active",
        "date": "2016-03-09T10:37:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/25AAB58E-E7A3-436A-9E92-BCCBB6197EA7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "25AAB58E-E7A3-436A-9E92-BCCBB6197EA7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:47:23-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/25AAB58E-E7A3-436A-9E92-BCCBB6197EA7",
        "title": "PROMIS v1.0 - Alteraciones relacionadas con el sueño SF 4a",
        "status": "active",
        "date": "2018-08-27T13:47:23-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CA9FB9D0-B5A7-478D-8D6B-A364EA9F1778",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CA9FB9D0-B5A7-478D-8D6B-A364EA9F1778",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CA9FB9D0-B5A7-478D-8D6B-A364EA9F1778",
        "title": "PROMIS SF v1.0-Social Sat Role 8a",
        "status": "active",
        "date": "2014-11-14T10:03:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8F64582D-C19C-40E9-B470-4643D78AAE90",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8F64582D-C19C-40E9-B470-4643D78AAE90",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8F64582D-C19C-40E9-B470-4643D78AAE90",
        "title": "PROMIS Bank v1.1 - Anger",
        "status": "active",
        "date": "2014-11-14T10:04:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AB2EB8E5-C366-4325-8438-593DEF74D79A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AB2EB8E5-C366-4325-8438-593DEF74D79A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-04T14:50:17-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AB2EB8E5-C366-4325-8438-593DEF74D79A",
        "title": "PROMIS Scale v1.2 - Global Physical 2a",
        "status": "active",
        "date": "2018-09-04T14:50:17-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D3FFE67C-FE0D-4DB4-B680-CDDBBA3B360B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D3FFE67C-FE0D-4DB4-B680-CDDBBA3B360B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D3FFE67C-FE0D-4DB4-B680-CDDBBA3B360B",
        "title": "PROMIS-Ca Bank v1.0 - Depression",
        "status": "active",
        "date": "2014-11-14T10:02:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C778CC8E-39E2-41CB-BDF5-E3537330CAB1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C778CC8E-39E2-41CB-BDF5-E3537330CAB1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:42:14-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C778CC8E-39E2-41CB-BDF5-E3537330CAB1",
        "title": "ASCQ-Me Sleep Impact CAT v2.0",
        "status": "active",
        "date": "2017-11-02T11:42:14-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7DF137CF-A946-499A-8B73-F5392CE7814F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7DF137CF-A946-499A-8B73-F5392CE7814F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:40:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7DF137CF-A946-499A-8B73-F5392CE7814F",
        "title": "SCI-QOL Bank v1.0 - Pain Interference",
        "status": "active",
        "date": "2018-01-24T14:40:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0E1CD7E6-6143-48D6-A14F-D5429964A2F8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0E1CD7E6-6143-48D6-A14F-D5429964A2F8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0E1CD7E6-6143-48D6-A14F-D5429964A2F8",
        "title": "Neuro-QOL Ped Bank v1.1 - Depression",
        "status": "active",
        "date": "2014-11-14T10:07:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5C73CB0E-E08F-4E9C-A7AE-ACD78D4FF39D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5C73CB0E-E08F-4E9C-A7AE-ACD78D4FF39D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:38:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5C73CB0E-E08F-4E9C-A7AE-ACD78D4FF39D",
        "title": "PROMIS SF - Versión Padres v1.0 - Experiencias con estrés psicológico 8a",
        "status": "active",
        "date": "2018-11-15T16:38:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9CCD0ED5-1D83-4902-8720-F02B2D572166",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9CCD0ED5-1D83-4902-8720-F02B2D572166",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:47:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9CCD0ED5-1D83-4902-8720-F02B2D572166",
        "title": "SCI-QOL SF v1.0 - Trauma SF8a",
        "status": "active",
        "date": "2018-01-24T14:47:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C7C00955-C2BA-4402-A613-6352385F5292",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C7C00955-C2BA-4402-A613-6352385F5292",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C7C00955-C2BA-4402-A613-6352385F5292",
        "title": "PROMIS Banco Ped  v1.0 - Movilidad",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/33F31C50-C457-4DCA-9CB4-22E81BAA7904",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "33F31C50-C457-4DCA-9CB4-22E81BAA7904",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:46:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/33F31C50-C457-4DCA-9CB4-22E81BAA7904",
        "title": "SCI-QOL SF v1.0 - Resilience SF 8a",
        "status": "active",
        "date": "2018-01-24T14:46:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/038EE98A-405A-4370-B2D4-AE6A45E91406",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "038EE98A-405A-4370-B2D4-AE6A45E91406",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:59:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/038EE98A-405A-4370-B2D4-AE6A45E91406",
        "title": "TBI-QOL Bank v1.0 - General Concerns",
        "status": "active",
        "date": "2018-01-24T14:59:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7F8B032E-CAEB-4F58-95C8-A8B920D7E8F5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7F8B032E-CAEB-4F58-95C8-A8B920D7E8F5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:43:15-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7F8B032E-CAEB-4F58-95C8-A8B920D7E8F5",
        "title": "PROMIS Banco v2.0 - Apoyo emocional ",
        "status": "active",
        "date": "2018-08-27T13:43:15-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E13A6027-3536-41BE-A007-86BD2730475A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E13A6027-3536-41BE-A007-86BD2730475A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:59:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E13A6027-3536-41BE-A007-86BD2730475A",
        "title": "TBI-QOL Bank v1.0 - Fatigue",
        "status": "active",
        "date": "2018-01-24T14:59:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/829DFC61-093A-4125-8DE0-A7B100EAC0E0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "829DFC61-093A-4125-8DE0-A7B100EAC0E0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:03:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/829DFC61-093A-4125-8DE0-A7B100EAC0E0",
        "title": "TBI-QOL Scale v1.0 - Asking For Help",
        "status": "active",
        "date": "2018-01-24T15:03:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8F6A378E-1760-46A6-888B-5C46AEF7D01E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8F6A378E-1760-46A6-888B-5C46AEF7D01E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:34:45-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8F6A378E-1760-46A6-888B-5C46AEF7D01E",
        "title": "PROMIS Parent Proxy SF v1.0 - Phys Stress Exp 4a",
        "status": "active",
        "date": "2016-03-09T14:34:45-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/031F4CFB-5DA5-42CF-B03D-08DAC393BEDF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "031F4CFB-5DA5-42CF-B03D-08DAC393BEDF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/031F4CFB-5DA5-42CF-B03D-08DAC393BEDF",
        "title": "Neuro-QoL Banco Ped  v2.0 - Función cognitiva",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A33CE629-03AB-4E37-B371-C7D7608D4B9E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A33CE629-03AB-4E37-B371-C7D7608D4B9E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:32:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A33CE629-03AB-4E37-B371-C7D7608D4B9E",
        "title": "PROMIS Ped SF v2.0 - Anger 5a",
        "status": "active",
        "date": "2017-02-28T12:32:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C9F3A280-AC55-49F5-B934-AA1A85F5106F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C9F3A280-AC55-49F5-B934-AA1A85F5106F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:38:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C9F3A280-AC55-49F5-B934-AA1A85F5106F",
        "title": "PROMIS SF - Versión Padres v1.0 - Experiencias con estrés psicológico 4a",
        "status": "active",
        "date": "2018-11-15T16:38:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BBDB5C27-CA59-41F3-8EFC-8E2835BE0E57",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BBDB5C27-CA59-41F3-8EFC-8E2835BE0E57",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:32:28-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BBDB5C27-CA59-41F3-8EFC-8E2835BE0E57",
        "title": "PROMIS SF - Versión Padres v2.0 - Asma 8a",
        "status": "active",
        "date": "2018-08-27T13:32:28-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FD422168-F4A7-4928-8CD6-EC004FD409EC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FD422168-F4A7-4928-8CD6-EC004FD409EC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T09:34:57-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FD422168-F4A7-4928-8CD6-EC004FD409EC",
        "title": "PROMIS Parent Proxy Bank v1.0 - Physical Activity",
        "status": "active",
        "date": "2016-03-09T09:34:57-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BA87E860-F863-4746-9F44-D1AFE02D2313",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BA87E860-F863-4746-9F44-D1AFE02D2313",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BA87E860-F863-4746-9F44-D1AFE02D2313",
        "title": "PROMIS SF v1.0 - Satisfacción con la participación en roles sociales 6a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/00E8DF4A-1D4D-401E-85A8-31708E9DB79D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "00E8DF4A-1D4D-401E-85A8-31708E9DB79D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:44:14-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/00E8DF4A-1D4D-401E-85A8-31708E9DB79D",
        "title": "PROMIS SF v2.0 - Medios de apoyo 6a",
        "status": "active",
        "date": "2018-08-27T13:44:14-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/097EF029-9A5D-4A60-9E6B-06691EC01BE5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "097EF029-9A5D-4A60-9E6B-06691EC01BE5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-18T17:07:51-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/097EF029-9A5D-4A60-9E6B-06691EC01BE5",
        "title": "PROMIS Scale v1.0 - GI Diarrhea 6a",
        "status": "active",
        "date": "2017-03-18T17:07:51-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6AC47452-02C8-4B4D-A271-E7C0EF2A4E6B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6AC47452-02C8-4B4D-A271-E7C0EF2A4E6B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:41:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6AC47452-02C8-4B4D-A271-E7C0EF2A4E6B",
        "title": "SCI-QOL Bank v1.0 - Resilience",
        "status": "active",
        "date": "2018-01-24T14:41:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B58A59ED-81C7-476D-883F-1A29CDF16F19",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B58A59ED-81C7-476D-883F-1A29CDF16F19",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:03:27-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B58A59ED-81C7-476D-883F-1A29CDF16F19",
        "title": "PROMIS SF v1.0 - Itch-Mood and Sleep 8a",
        "status": "active",
        "date": "2018-09-21T10:03:27-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D5742827-F76E-4057-9043-151F80EB9D37",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D5742827-F76E-4057-9043-151F80EB9D37",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:57-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D5742827-F76E-4057-9043-151F80EB9D37",
        "title": "Neuro-QOL Ped SF v2.0 - Cognitive Function",
        "status": "active",
        "date": "2014-11-14T10:06:57-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/12D89E07-8E58-4CC9-B178-137786814CC6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "12D89E07-8E58-4CC9-B178-137786814CC6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:32:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/12D89E07-8E58-4CC9-B178-137786814CC6",
        "title": "PROMIS Banco Ped v1.0 - Satisfacción con la vida",
        "status": "active",
        "date": "2018-11-15T16:32:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/67392715-8D2F-4C10-823C-096B0D258F8C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "67392715-8D2F-4C10-823C-096B0D258F8C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:08:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/67392715-8D2F-4C10-823C-096B0D258F8C",
        "title": "TBI-QOL SF v1.0 - Self-Esteem SF10a",
        "status": "active",
        "date": "2018-01-24T15:08:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0A924671-F9AF-41A2-BAE8-64B0C581EF9C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0A924671-F9AF-41A2-BAE8-64B0C581EF9C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:03:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0A924671-F9AF-41A2-BAE8-64B0C581EF9C",
        "title": "TBI-QOL SF v1.0 - Anger SF10a",
        "status": "active",
        "date": "2018-01-24T15:03:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/436627F9-F8DE-4A67-A870-0D5944F62B28",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "436627F9-F8DE-4A67-A870-0D5944F62B28",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:38:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/436627F9-F8DE-4A67-A870-0D5944F62B28",
        "title": "SCI-QOL Bank v1.0 - Bladder Mgmt. Difficulties",
        "status": "active",
        "date": "2018-01-24T14:38:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/478DA77F-07C1-4E82-9229-3EC6F0916D4C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "478DA77F-07C1-4E82-9229-3EC6F0916D4C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:37:20-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/478DA77F-07C1-4E82-9229-3EC6F0916D4C",
        "title": "SCI-FI v1.0 Self Care SF 11b-Tetra",
        "status": "active",
        "date": "2018-01-24T14:37:20-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A6D3806F-36BC-453A-BA1C-3D580D116451",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A6D3806F-36BC-453A-BA1C-3D580D116451",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T13:50:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A6D3806F-36BC-453A-BA1C-3D580D116451",
        "title": "PROMIS Parent Proxy SF v1.0 - Meaning Purpose 4a",
        "status": "active",
        "date": "2016-03-09T13:50:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C5D120A9-D2CD-4A2A-9CFA-8D57877BE9C1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C5D120A9-D2CD-4A2A-9CFA-8D57877BE9C1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C5D120A9-D2CD-4A2A-9CFA-8D57877BE9C1",
        "title": "PROMIS Pool v1.0 - Orgasm",
        "status": "active",
        "date": "2014-11-14T10:05:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/65958F02-3B6D-47CF-B6D7-F682EDBE7004",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "65958F02-3B6D-47CF-B6D7-F682EDBE7004",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/65958F02-3B6D-47CF-B6D7-F682EDBE7004",
        "title": "PROMIS SF v1.0 - Anxiety 7a",
        "status": "active",
        "date": "2014-11-14T10:01:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/202A1199-CE68-4C33-8252-E2A75F7A5223",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "202A1199-CE68-4C33-8252-E2A75F7A5223",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:26:38-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/202A1199-CE68-4C33-8252-E2A75F7A5223",
        "title": "PROMIS Ped SF v1.0 - Physical Stress Experience 4a",
        "status": "active",
        "date": "2016-03-09T14:26:38-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/038675AA-791D-4B93-A43E-2E5EE0C8B4DB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "038675AA-791D-4B93-A43E-2E5EE0C8B4DB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:34:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/038675AA-791D-4B93-A43E-2E5EE0C8B4DB",
        "title": "PROMIS SF - Versión Padres v1.0 - Satisfacción con la vida 4a",
        "status": "active",
        "date": "2018-11-15T16:34:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/96FE494D-F176-4EFB-A473-2AB406610626",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "96FE494D-F176-4EFB-A473-2AB406610626",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:29-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/96FE494D-F176-4EFB-A473-2AB406610626",
        "title": "PROMIS Bank v1.0 - Depression",
        "status": "active",
        "date": "2014-11-14T10:03:29-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8BAB383C-60EB-498F-A502-D32AF51B34CD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8BAB383C-60EB-498F-A502-D32AF51B34CD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T10:48:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8BAB383C-60EB-498F-A502-D32AF51B34CD",
        "title": "PROMIS Parent Proxy Bank v1.0 - Strength Impact",
        "status": "active",
        "date": "2016-03-09T10:48:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1F59EC94-F9EB-455B-AE70-C08D76D7A403",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1F59EC94-F9EB-455B-AE70-C08D76D7A403",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:30:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1F59EC94-F9EB-455B-AE70-C08D76D7A403",
        "title": "PROMIS SF v1.0 - Smoking NicotineDepend Day 8a",
        "status": "active",
        "date": "2016-03-08T14:30:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6C577423-FEBB-4B72-B063-37CA745BD475",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6C577423-FEBB-4B72-B063-37CA745BD475",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6C577423-FEBB-4B72-B063-37CA745BD475",
        "title": "Neuro-QoL SF v2.0 - Función cognitiva",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/16CF79A1-6FCD-487A-8BD7-342B3C3AB545",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "16CF79A1-6FCD-487A-8BD7-342B3C3AB545",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:27:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/16CF79A1-6FCD-487A-8BD7-342B3C3AB545",
        "title": "PROMIS SF v1.0 - Smoking Health Expect Day 6a",
        "status": "active",
        "date": "2016-03-08T14:27:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/74A6F57A-5CCC-4108-8B6D-DA56EC7E429F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "74A6F57A-5CCC-4108-8B6D-DA56EC7E429F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/74A6F57A-5CCC-4108-8B6D-DA56EC7E429F",
        "title": "PROMIS Banco v1.1 - Efectos del dolor ",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DE3279E9-ED2C-45FA-9EF0-1BC5305A2245",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DE3279E9-ED2C-45FA-9EF0-1BC5305A2245",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-18T17:10:35-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DE3279E9-ED2C-45FA-9EF0-1BC5305A2245",
        "title": "PROMIS Scale v1.0 - GI Constipation 9a",
        "status": "active",
        "date": "2017-03-18T17:10:35-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/971B5C75-871E-4F53-BF69-F0E276EFAC5E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "971B5C75-871E-4F53-BF69-F0E276EFAC5E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/971B5C75-871E-4F53-BF69-F0E276EFAC5E",
        "title": "Neuro-QoL Banco v1.1 - Satisfacción con la participación en roles y actividades sociales",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9D5DC1F6-9993-4EF3-87AB-73550836D263",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9D5DC1F6-9993-4EF3-87AB-73550836D263",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9D5DC1F6-9993-4EF3-87AB-73550836D263",
        "title": "PROMIS Bank v1.0 - Applied Cog General Concerns",
        "status": "active",
        "date": "2014-11-14T10:04:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/29654543-C99B-4CE9-884B-3D401B4AD857",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "29654543-C99B-4CE9-884B-3D401B4AD857",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:06-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/29654543-C99B-4CE9-884B-3D401B4AD857",
        "title": "PROMIS Bank v2.0 - Emotional Support",
        "status": "active",
        "date": "2014-11-14T10:04:06-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F361C08D-8766-4942-B5D9-EFBB0EBE92EA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F361C08D-8766-4942-B5D9-EFBB0EBE92EA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F361C08D-8766-4942-B5D9-EFBB0EBE92EA",
        "title": "Neuro-QOL SF v1.0 - UEx Fnct (FineMotor, ADL)",
        "status": "active",
        "date": "2014-11-14T10:07:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DA686273-A8AB-4172-A939-3D5AE798D4EC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DA686273-A8AB-4172-A939-3D5AE798D4EC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DA686273-A8AB-4172-A939-3D5AE798D4EC",
        "title": "Neuro-QoL Banco v1.0 - Sentimientos positivos y bienestar",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/740DB646-37E1-4B9E-939B-DCD26C9A782A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "740DB646-37E1-4B9E-939B-DCD26C9A782A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/740DB646-37E1-4B9E-939B-DCD26C9A782A",
        "title": "PROMIS Banco Ped  v1.0 - Relaciones entre iguales",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1BBE48B6-8925-403B-BE19-BBC6CE8EDF20",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1BBE48B6-8925-403B-BE19-BBC6CE8EDF20",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1BBE48B6-8925-403B-BE19-BBC6CE8EDF20",
        "title": "Neuro-QoL SF Ped  v2.0 - Función Cognitiva",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8EC3E965-9B55-482D-9237-85C1BE4E27F4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8EC3E965-9B55-482D-9237-85C1BE4E27F4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8EC3E965-9B55-482D-9237-85C1BE4E27F4",
        "title": "PROMIS Pool v1.0 - Sexual Fx Screener Questions",
        "status": "active",
        "date": "2014-11-14T10:02:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1A77EE6F-5333-46DB-90DF-C68504365BD6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1A77EE6F-5333-46DB-90DF-C68504365BD6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T09:52:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1A77EE6F-5333-46DB-90DF-C68504365BD6",
        "title": "PROMIS Parent Proxy Bank v1.0 - Phys Stress Exp",
        "status": "active",
        "date": "2016-03-09T09:52:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/77493921-A957-469F-851A-DEAC7908FA6D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "77493921-A957-469F-851A-DEAC7908FA6D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:39:27-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/77493921-A957-469F-851A-DEAC7908FA6D",
        "title": "ASCQ-Me Sleep Impact SF v2.0",
        "status": "active",
        "date": "2017-11-02T11:39:27-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2C5F4820-AC5D-4DBB-9403-57AD3576E56F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2C5F4820-AC5D-4DBB-9403-57AD3576E56F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:42:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2C5F4820-AC5D-4DBB-9403-57AD3576E56F",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Symptoms 4a",
        "status": "active",
        "date": "2016-01-21T12:42:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/83638281-4F63-4EFC-B2CB-F0AB4FDBEFEC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "83638281-4F63-4EFC-B2CB-F0AB4FDBEFEC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:17:57-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/83638281-4F63-4EFC-B2CB-F0AB4FDBEFEC",
        "title": "PROMIS SF - Versión Padres v1.0 - Sentimientos positivos 8a",
        "status": "active",
        "date": "2019-02-27T17:17:57-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/45601C3B-FC22-4753-8801-0A63177D03BF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "45601C3B-FC22-4753-8801-0A63177D03BF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:15:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/45601C3B-FC22-4753-8801-0A63177D03BF",
        "title": "PROMIS Banco Ped v2.0 - Síntomas de depresión",
        "status": "active",
        "date": "2019-02-27T17:15:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8CEE2ACB-9CBD-47DD-889B-3B9DA011CDC4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8CEE2ACB-9CBD-47DD-889B-3B9DA011CDC4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:14:44-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8CEE2ACB-9CBD-47DD-889B-3B9DA011CDC4",
        "title": "PROMIS Parent Proxy SF v1.0 - Sleep Disturb 8a",
        "status": "active",
        "date": "2018-08-22T13:14:44-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A841AF31-A0A1-4FB0-8DC6-B5AF77DE2877",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A841AF31-A0A1-4FB0-8DC6-B5AF77DE2877",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A841AF31-A0A1-4FB0-8DC6-B5AF77DE2877",
        "title": "PROMIS Bank v1.0 Alcohol: Positive Expectancies",
        "status": "active",
        "date": "2014-11-14T10:01:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A0AB316E-A7A3-481F-A66A-4AC8FAC5CA73",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A0AB316E-A7A3-481F-A66A-4AC8FAC5CA73",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T09:44:27-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A0AB316E-A7A3-481F-A66A-4AC8FAC5CA73",
        "title": "PROMIS Parent Proxy Bank v2.0 - Asthma Impact",
        "status": "active",
        "date": "2016-03-08T09:44:27-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E2AB9718-D777-4C63-93F7-BBD5DDA6183A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E2AB9718-D777-4C63-93F7-BBD5DDA6183A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-17T13:02:51-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E2AB9718-D777-4C63-93F7-BBD5DDA6183A",
        "title": "PROMIS Bank v1.0 - Smoking Health Expect Daily",
        "status": "active",
        "date": "2016-03-17T13:02:51-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/507F4782-493A-40B6-8CF0-2905B5B2EB0D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "507F4782-493A-40B6-8CF0-2905B5B2EB0D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/507F4782-493A-40B6-8CF0-2905B5B2EB0D",
        "title": "PROMIS SF v1.0 - Satisfacción con la participación en actividades sociales discrecionales 7a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B1F9B338-2400-4D04-9E0F-C0DB539211AA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B1F9B338-2400-4D04-9E0F-C0DB539211AA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:23:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B1F9B338-2400-4D04-9E0F-C0DB539211AA",
        "title": "PROMIS Parent Proxy SF v1.0 - Physical Activity 8a",
        "status": "active",
        "date": "2016-03-09T14:23:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DA1684AF-AB44-4438-B99A-70CF3E624CEE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DA1684AF-AB44-4438-B99A-70CF3E624CEE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:01:05-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DA1684AF-AB44-4438-B99A-70CF3E624CEE",
        "title": "PROMIS SF v1.0 - Itch-Activity and Clothing 8a",
        "status": "active",
        "date": "2018-09-21T10:01:05-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3A90D004-B7C0-45A2-9F15-8F3D0A5DB624",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3A90D004-B7C0-45A2-9F15-8F3D0A5DB624",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3A90D004-B7C0-45A2-9F15-8F3D0A5DB624",
        "title": "PROMIS SF v2.0 - Emotional Support 6a",
        "status": "active",
        "date": "2014-11-14T10:04:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1C9009E6-E0E9-41AC-B4A2-2EEAAC147D7A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1C9009E6-E0E9-41AC-B4A2-2EEAAC147D7A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:34:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1C9009E6-E0E9-41AC-B4A2-2EEAAC147D7A",
        "title": "PROMIS SF Ped v1.0 - Significado y propósito 8a",
        "status": "active",
        "date": "2018-11-15T16:34:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5716B364-2313-412F-8DFF-698C2925CFB9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5716B364-2313-412F-8DFF-698C2925CFB9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:41:09-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5716B364-2313-412F-8DFF-698C2925CFB9",
        "title": "ASCQ-Me Stiffness Impact SF v2.0",
        "status": "active",
        "date": "2017-11-02T11:41:09-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/54B91D12-DADA-4B02-A71F-364172527348",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "54B91D12-DADA-4B02-A71F-364172527348",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/54B91D12-DADA-4B02-A71F-364172527348",
        "title": "PROMIS SF v1.0 - Capacidad de funcionamiento físico 4a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E038718E-F556-4D0D-9B00-BD178DE6A2C8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E038718E-F556-4D0D-9B00-BD178DE6A2C8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E038718E-F556-4D0D-9B00-BD178DE6A2C8",
        "title": "PROMIS Bank v1.0 - Sleep-Related Impairment",
        "status": "active",
        "date": "2014-11-14T10:01:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7334D422-1455-4870-A55A-E6E5AFC008D7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7334D422-1455-4870-A55A-E6E5AFC008D7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:48:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7334D422-1455-4870-A55A-E6E5AFC008D7",
        "title": "PROMIS Banco Ped v1.0 - Relaciones familiares",
        "status": "active",
        "date": "2019-01-07T10:48:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AA30E0F4-FCC2-417C-8E42-EB1E46ADA8A6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AA30E0F4-FCC2-417C-8E42-EB1E46ADA8A6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AA30E0F4-FCC2-417C-8E42-EB1E46ADA8A6",
        "title": "PROMIS Banco v1.0 - Alteraciones relacionadas con el sueño",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D2B1488D-5898-42E5-8C87-79D09B6CD1DC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D2B1488D-5898-42E5-8C87-79D09B6CD1DC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D2B1488D-5898-42E5-8C87-79D09B6CD1DC",
        "title": "Neuro-QoL Banco Ped  v1.1 - Depresión",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/57E11DA0-97F5-4EC1-8407-158C48BD15C2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "57E11DA0-97F5-4EC1-8407-158C48BD15C2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:18:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/57E11DA0-97F5-4EC1-8407-158C48BD15C2",
        "title": "PROMIS Banco Ped v1.0 - Sentimientos positivos",
        "status": "active",
        "date": "2019-02-27T17:18:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FBDBC63F-244D-472C-BB2B-983DBAE00DC9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FBDBC63F-244D-472C-BB2B-983DBAE00DC9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T10:08:54-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FBDBC63F-244D-472C-BB2B-983DBAE00DC9",
        "title": "PROMIS Ped Bank v1.0 - Psych Stress Experiences",
        "status": "active",
        "date": "2016-03-09T10:08:54-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/05A9FD42-D47D-4E1E-90F5-A5486C3FE051",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "05A9FD42-D47D-4E1E-90F5-A5486C3FE051",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:38:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/05A9FD42-D47D-4E1E-90F5-A5486C3FE051",
        "title": "PROMIS SF Versión Padres v1.0 - Relaciones familiares 4a",
        "status": "active",
        "date": "2018-11-15T16:38:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1AD4B493-667E-4E1B-8E2A-12BF1B5B20C3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1AD4B493-667E-4E1B-8E2A-12BF1B5B20C3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-07T11:51:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1AD4B493-667E-4E1B-8E2A-12BF1B5B20C3",
        "title": "PROMIS Parent Proxy Bank v2.0 - Mobility",
        "status": "active",
        "date": "2016-03-07T11:51:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6F2A50B5-28D8-4E26-81B5-B3CE0FA979DC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6F2A50B5-28D8-4E26-81B5-B3CE0FA979DC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:22:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6F2A50B5-28D8-4E26-81B5-B3CE0FA979DC",
        "title": "PROMIS SF v1.0 - Smoking Coping Expect Day 4a",
        "status": "active",
        "date": "2016-03-08T14:22:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8C87C384-8021-4CB4-BAF8-E49AEB11EFB8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8C87C384-8021-4CB4-BAF8-E49AEB11EFB8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:02:45-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8C87C384-8021-4CB4-BAF8-E49AEB11EFB8",
        "title": "TBI-QOL Bank v1.0 - Upper Extremity/ADL",
        "status": "active",
        "date": "2018-01-24T15:02:45-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C7FDC1E4-50F3-4B3B-8D7D-D8899DD066AE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C7FDC1E4-50F3-4B3B-8D7D-D8899DD066AE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C7FDC1E4-50F3-4B3B-8D7D-D8899DD066AE",
        "title": "PROMIS SF v1.2 - Capacidad de funcionamiento físico 8b",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4D652D8D-0F4C-4A00-8F09-F3301B82A8BB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4D652D8D-0F4C-4A00-8F09-F3301B82A8BB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:41:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4D652D8D-0F4C-4A00-8F09-F3301B82A8BB",
        "title": "PROMIS SF Ped v1.0 - Satisfacción con la vida 8b",
        "status": "active",
        "date": "2018-11-15T16:41:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/29505923-9992-497D-9BC9-B3D51DDE6965",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "29505923-9992-497D-9BC9-B3D51DDE6965",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:05:07-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/29505923-9992-497D-9BC9-B3D51DDE6965",
        "title": "TBI-QOL SF v1.0 - Depression SF10a",
        "status": "active",
        "date": "2018-01-24T15:05:07-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A39DF042-47FE-4987-9696-8CBA1747EEFF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A39DF042-47FE-4987-9696-8CBA1747EEFF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-22T15:05:46-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A39DF042-47FE-4987-9696-8CBA1747EEFF",
        "title": "PROMIS Ped Bank v1.0 - Pain Behavior",
        "status": "active",
        "date": "2016-01-22T15:05:46-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2BE57873-33A4-4D77-90D8-55F8D8B630CD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2BE57873-33A4-4D77-90D8-55F8D8B630CD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:41:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2BE57873-33A4-4D77-90D8-55F8D8B630CD",
        "title": "SCI-QOL Bank v1.0 - Stigma",
        "status": "active",
        "date": "2018-01-24T14:41:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B73BC983-6C1A-4911-B69C-FD12BE4B645B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B73BC983-6C1A-4911-B69C-FD12BE4B645B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B73BC983-6C1A-4911-B69C-FD12BE4B645B",
        "title": "PROMIS Pediatric SF v1.1 - Depressive Symptoms 8b",
        "status": "active",
        "date": "2014-11-14T10:01:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0BCA289E-97AA-43B9-8BD8-ED7E1FE16C45",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0BCA289E-97AA-43B9-8BD8-ED7E1FE16C45",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:03:05-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0BCA289E-97AA-43B9-8BD8-ED7E1FE16C45",
        "title": "PROMIS Bank v1.0 - Itch-Interference ",
        "status": "active",
        "date": "2018-09-21T10:03:05-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/33E6B1A5-F7D4-4008-A96E-D64C30A28B58",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "33E6B1A5-F7D4-4008-A96E-D64C30A28B58",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/33E6B1A5-F7D4-4008-A96E-D64C30A28B58",
        "title": "PROMIS SF v1.0 - Ansiedad 4a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0E7C17B1-7169-4E92-9A63-92EF9504B417",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0E7C17B1-7169-4E92-9A63-92EF9504B417",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0E7C17B1-7169-4E92-9A63-92EF9504B417",
        "title": "Neuro-QOL Ped SF v1.0 - Stigma",
        "status": "active",
        "date": "2014-11-14T10:06:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BA88C84D-EFE4-4DCB-AFEA-7824432635C9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BA88C84D-EFE4-4DCB-AFEA-7824432635C9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:36:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BA88C84D-EFE4-4DCB-AFEA-7824432635C9",
        "title": "PROMIS SF - Versión Padres - v1.0 Satisfacción con la vida 8b",
        "status": "active",
        "date": "2018-11-15T16:36:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C3305A82-E1AA-4E88-9F4D-E9C8099C296F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C3305A82-E1AA-4E88-9F4D-E9C8099C296F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:41-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C3305A82-E1AA-4E88-9F4D-E9C8099C296F",
        "title": "PROMIS SF v1.0-Pain Interference 4a",
        "status": "active",
        "date": "2014-11-14T10:02:41-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DC530439-4042-4631-B483-DA82FEC90FCB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DC530439-4042-4631-B483-DA82FEC90FCB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:25:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DC530439-4042-4631-B483-DA82FEC90FCB",
        "title": "PROMIS SF v1.0 - Smoking Emot/Sensory Nonday 6a",
        "status": "active",
        "date": "2016-03-08T14:25:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/688F3B74-5387-4C61-ABBC-98CF8CFC99DF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "688F3B74-5387-4C61-ABBC-98CF8CFC99DF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:16:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/688F3B74-5387-4C61-ABBC-98CF8CFC99DF",
        "title": "PROMIS Parent Proxy SF v2.0 - Peer Relations 7a",
        "status": "active",
        "date": "2016-03-08T10:16:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D568889C-B1F4-4EF5-9E27-3315AC528E4F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D568889C-B1F4-4EF5-9E27-3315AC528E4F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-22T15:04:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D568889C-B1F4-4EF5-9E27-3315AC528E4F",
        "title": "PROMIS Parent Proxy SF v1.0 - Pain Behavior 8a",
        "status": "active",
        "date": "2016-01-22T15:04:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/336741A7-EE8D-432D-A3A5-2381F4E2EE65",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "336741A7-EE8D-432D-A3A5-2381F4E2EE65",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:48-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/336741A7-EE8D-432D-A3A5-2381F4E2EE65",
        "title": "Neuro-QOL Ped SF v2.1 - Fatigue",
        "status": "active",
        "date": "2014-11-14T10:06:48-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DB8E6DC5-CD3E-4C01-A7E0-CE1C78FB7FBE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DB8E6DC5-CD3E-4C01-A7E0-CE1C78FB7FBE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DB8E6DC5-CD3E-4C01-A7E0-CE1C78FB7FBE",
        "title": "Neuro-QoL Banco v2.0 - Función Cognitiva",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BE5C1C0C-2845-4DE4-A0BD-FD85C5D0C58B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BE5C1C0C-2845-4DE4-A0BD-FD85C5D0C58B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:58:27-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BE5C1C0C-2845-4DE4-A0BD-FD85C5D0C58B",
        "title": "TBI-QOL Bank v1.0 - Emot. & Behav. Dyscontrol",
        "status": "active",
        "date": "2018-01-24T14:58:27-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A0F1475C-F9C3-407C-BB24-8CF895C0DCC3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A0F1475C-F9C3-407C-BB24-8CF895C0DCC3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A0F1475C-F9C3-407C-BB24-8CF895C0DCC3",
        "title": "PROMIS SF v1.1 - Enojo 5a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AAE755EF-F798-4202-AE2F-3535C6335247",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AAE755EF-F798-4202-AE2F-3535C6335247",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AAE755EF-F798-4202-AE2F-3535C6335247",
        "title": "Neuro-QoL SF Ped  v1.0 - Estigma",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/85619989-D4A7-4EC5-BF08-A4412DCBDD75",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "85619989-D4A7-4EC5-BF08-A4412DCBDD75",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/85619989-D4A7-4EC5-BF08-A4412DCBDD75",
        "title": "PROMIS SF v1.0 - Fatigue 7a",
        "status": "active",
        "date": "2014-11-14T10:02:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C81F128D-F091-4AF5-917A-060FAC6B21B5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C81F128D-F091-4AF5-917A-060FAC6B21B5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:10-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C81F128D-F091-4AF5-917A-060FAC6B21B5",
        "title": "Neuro-QOL Ped Bank v2.1- Fatigue",
        "status": "active",
        "date": "2014-11-14T10:06:10-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7325612B-EF08-4595-ACA5-C835B3ADF88B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7325612B-EF08-4595-ACA5-C835B3ADF88B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:39:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7325612B-EF08-4595-ACA5-C835B3ADF88B",
        "title": "PROMIS Banco Ped v1.0 - Experiencias con estrés psicológico",
        "status": "active",
        "date": "2018-11-15T16:39:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/70BC0109-CFEC-4030-A1CB-7D97B63C9681",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "70BC0109-CFEC-4030-A1CB-7D97B63C9681",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/70BC0109-CFEC-4030-A1CB-7D97B63C9681",
        "title": "Neuro-QoL Banco v1.0 - Depresión",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/199048A3-6480-47D1-AC9D-42CAD9C5C085",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "199048A3-6480-47D1-AC9D-42CAD9C5C085",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:16:42-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/199048A3-6480-47D1-AC9D-42CAD9C5C085",
        "title": "PROMIS SF Ped v2.0 - Síntomas de depresión 8a",
        "status": "active",
        "date": "2019-02-27T17:16:42-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4C710ADD-19E2-44C9-8628-0100C4FA32C4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4C710ADD-19E2-44C9-8628-0100C4FA32C4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T10:45:29-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4C710ADD-19E2-44C9-8628-0100C4FA32C4",
        "title": "PROMIS Ped Bank v1.0 - Strength Impact",
        "status": "active",
        "date": "2016-03-09T10:45:29-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BC9FB68F-6108-4C18-8643-739A743EFABE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BC9FB68F-6108-4C18-8643-739A743EFABE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:03:49-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BC9FB68F-6108-4C18-8643-739A743EFABE",
        "title": "PROMIS SF v1.0 - Itch-Mood and Sleep 4a",
        "status": "active",
        "date": "2018-09-21T10:03:49-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DC4FF6FA-80CF-4DF5-8246-6E0B873A91B2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DC4FF6FA-80CF-4DF5-8246-6E0B873A91B2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:57:55-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DC4FF6FA-80CF-4DF5-8246-6E0B873A91B2",
        "title": "TBI-QOL Bank v1.0 - Communication",
        "status": "active",
        "date": "2018-01-24T14:57:55-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A8662100-B385-47C5-BAB4-71CF2F134154",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A8662100-B385-47C5-BAB4-71CF2F134154",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T13:52:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A8662100-B385-47C5-BAB4-71CF2F134154",
        "title": "PROMIS Bank v1.0 - Smoking Coping Expect AllSmk",
        "status": "active",
        "date": "2016-03-08T13:52:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6C45966B-AB23-4CF9-9E35-F3E9F5FD90D7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6C45966B-AB23-4CF9-9E35-F3E9F5FD90D7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6C45966B-AB23-4CF9-9E35-F3E9F5FD90D7",
        "title": "Neuro-QOL Ped SF v1.0 - Pain",
        "status": "active",
        "date": "2014-11-14T10:06:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A37E0A43-1A8D-4FE6-8897-EB01B88B4D50",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A37E0A43-1A8D-4FE6-8897-EB01B88B4D50",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:57:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A37E0A43-1A8D-4FE6-8897-EB01B88B4D50",
        "title": "PROMIS Parent Proxy Bank v1.0 - Meaning Purpose",
        "status": "active",
        "date": "2016-03-08T14:57:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BFA449C0-FC7A-4FBE-B369-D617DED7F548",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BFA449C0-FC7A-4FBE-B369-D617DED7F548",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:40:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BFA449C0-FC7A-4FBE-B369-D617DED7F548",
        "title": "PROMIS SF - Versión Padres v1.0 - Significado y propósito 4a",
        "status": "active",
        "date": "2018-11-15T16:40:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AF705103-E93D-4B81-85C4-09B4614BDB07",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AF705103-E93D-4B81-85C4-09B4614BDB07",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AF705103-E93D-4B81-85C4-09B4614BDB07",
        "title": "Neuro-QOL Ped SF v1.0 - SR - Interaction w Peers",
        "status": "active",
        "date": "2014-11-14T10:06:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/48FCD99A-E2CB-4D85-A9AC-9C325DCBCDDB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "48FCD99A-E2CB-4D85-A9AC-9C325DCBCDDB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:50:03-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/48FCD99A-E2CB-4D85-A9AC-9C325DCBCDDB",
        "title": "PROMIS Escala v1.2 - Salud general Mental 2a",
        "status": "active",
        "date": "2018-08-27T13:50:03-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F7032C25-D069-44B5-BABE-4647577DE3D5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F7032C25-D069-44B5-BABE-4647577DE3D5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:35:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F7032C25-D069-44B5-BABE-4647577DE3D5",
        "title": "PROMIS SF Ped v1.0 - Alteraciones relacionadas con el sueño 4a",
        "status": "active",
        "date": "2018-11-15T16:35:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7BA5DD1E-E3AB-4B11-9827-6B70C7F166CF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7BA5DD1E-E3AB-4B11-9827-6B70C7F166CF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:35:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7BA5DD1E-E3AB-4B11-9827-6B70C7F166CF",
        "title": "PROMIS Banco - Versión Padres v1.0 Trastornos del sueño",
        "status": "active",
        "date": "2018-11-15T16:35:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BA062F28-2288-4FDF-B7B1-F79F71F77072",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BA062F28-2288-4FDF-B7B1-F79F71F77072",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-17T13:06:49-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BA062F28-2288-4FDF-B7B1-F79F71F77072",
        "title": "PROMIS Bank v1.0 - Smoking Health Expect NonDaily",
        "status": "active",
        "date": "2016-03-17T13:06:49-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5F4AF272-AE2B-4376-8035-57FD4A47DBD2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5F4AF272-AE2B-4376-8035-57FD4A47DBD2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:58:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5F4AF272-AE2B-4376-8035-57FD4A47DBD2",
        "title": "TBI-QOL Bank v1.0 - Executive Function",
        "status": "active",
        "date": "2018-01-24T14:58:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CCFE8C3E-5A3B-47D8-85E4-CD410961745B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CCFE8C3E-5A3B-47D8-85E4-CD410961745B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T13:44:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CCFE8C3E-5A3B-47D8-85E4-CD410961745B",
        "title": "PROMIS Ped SF v1.0 - Meaning and Purpose 4a",
        "status": "active",
        "date": "2016-03-09T13:44:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8C03DC9C-FDB7-42F7-8303-04376B9C2961",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8C03DC9C-FDB7-42F7-8303-04376B9C2961",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:46:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8C03DC9C-FDB7-42F7-8303-04376B9C2961",
        "title": "SCI-QOL SF v1.0 - Stigma SF10a",
        "status": "active",
        "date": "2018-01-24T14:46:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/376E55F0-F57E-48D8-B320-B3BBF700D5AE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "376E55F0-F57E-48D8-B320-B3BBF700D5AE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/376E55F0-F57E-48D8-B320-B3BBF700D5AE",
        "title": "PROMIS SF v1.0 - Trastornos del sueño 6a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FCF35DEC-3BFE-44B2-B796-B9CD7C801527",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FCF35DEC-3BFE-44B2-B796-B9CD7C801527",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-12T12:21:11-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FCF35DEC-3BFE-44B2-B796-B9CD7C801527",
        "title": "NIH TB Vision-Related QOL Color Vision Age 18+",
        "status": "active",
        "date": "2016-01-12T12:21:11-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B9173EFC-BBA8-40CC-B2C6-D80CC7F0B004",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B9173EFC-BBA8-40CC-B2C6-D80CC7F0B004",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:40:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B9173EFC-BBA8-40CC-B2C6-D80CC7F0B004",
        "title": "PROMIS SF Ped v1.0 - Experiencias con estrés psicológico 4a",
        "status": "active",
        "date": "2018-11-15T16:40:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/28B822DE-AC9E-4AFF-8885-CE5F464F5FAF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "28B822DE-AC9E-4AFF-8885-CE5F464F5FAF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:19:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/28B822DE-AC9E-4AFF-8885-CE5F464F5FAF",
        "title": "PROMIS Bank v1.0 - Smoking Social Motive AllSmk",
        "status": "active",
        "date": "2016-03-08T14:19:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C8D87ACC-1B7C-4CCD-928B-DCEBD4DCDAA9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C8D87ACC-1B7C-4CCD-928B-DCEBD4DCDAA9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:13:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C8D87ACC-1B7C-4CCD-928B-DCEBD4DCDAA9",
        "title": "NIH Toolbox Friendship FF Ages 8-17 v2.0",
        "status": "active",
        "date": "2019-02-27T17:13:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B3A722A1-BF4D-4CCB-B030-1A4C9BD80549",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B3A722A1-BF4D-4CCB-B030-1A4C9BD80549",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:17:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B3A722A1-BF4D-4CCB-B030-1A4C9BD80549",
        "title": "PROMIS SF - Versión Padres v1.0 - Sentimientos positivos 4a",
        "status": "active",
        "date": "2019-02-27T17:17:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/39AD5364-0822-4A10-873D-4277508881D5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "39AD5364-0822-4A10-873D-4277508881D5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:36:50-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/39AD5364-0822-4A10-873D-4277508881D5",
        "title": "PROMIS Pool v1.0 - Dyspnea Task Avoidance",
        "status": "active",
        "date": "2016-03-21T15:36:50-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BA8C152F-ABD3-4EF2-9EC1-954DE783C689",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BA8C152F-ABD3-4EF2-9EC1-954DE783C689",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:55-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BA8C152F-ABD3-4EF2-9EC1-954DE783C689",
        "title": "PROMIS Sexual Function Profile v1.0 - Male",
        "status": "active",
        "date": "2014-11-14T10:02:55-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3227D704-B63A-4219-9BC4-32BBD1A54D45",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3227D704-B63A-4219-9BC4-32BBD1A54D45",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:44:56-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3227D704-B63A-4219-9BC4-32BBD1A54D45",
        "title": "PROMIS Banco v2.0 - Medios de apoyo",
        "status": "active",
        "date": "2018-08-27T13:44:56-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3F7BD7BF-DD2D-46F3-B6C6-769BAB07A1F1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3F7BD7BF-DD2D-46F3-B6C6-769BAB07A1F1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3F7BD7BF-DD2D-46F3-B6C6-769BAB07A1F1",
        "title": "PROMIS SF v1.0 - Depression 8b",
        "status": "active",
        "date": "2014-11-14T10:03:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/78612659-DAC3-4398-8C1A-BB80E4E58A0E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "78612659-DAC3-4398-8C1A-BB80E4E58A0E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:03:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/78612659-DAC3-4398-8C1A-BB80E4E58A0E",
        "title": "TBI-QOL SF v1.0 - Anxiety SF10a",
        "status": "active",
        "date": "2018-01-24T15:03:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C70EB4DD-D5D6-4078-945A-B80293C14135",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C70EB4DD-D5D6-4078-945A-B80293C14135",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C70EB4DD-D5D6-4078-945A-B80293C14135",
        "title": "PROMIS SF v1.0 - Capacidad de funcionamiento físico 10a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5760C765-95C9-491D-A88F-77889D70E9B4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5760C765-95C9-491D-A88F-77889D70E9B4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:05-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5760C765-95C9-491D-A88F-77889D70E9B4",
        "title": "Neuro-QOL Ped SF v1.0 - Anxiety",
        "status": "active",
        "date": "2014-11-14T10:06:05-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7716D8A7-D62E-42A3-925B-50E3FAFD33B6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7716D8A7-D62E-42A3-925B-50E3FAFD33B6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:47:24-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7716D8A7-D62E-42A3-925B-50E3FAFD33B6",
        "title": "SCI-QOL SF v1.0- Self-Esteem SF8a",
        "status": "active",
        "date": "2018-01-24T14:47:24-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E28D33B7-B772-4B2D-A1CE-D640D030D5E5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E28D33B7-B772-4B2D-A1CE-D640D030D5E5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E28D33B7-B772-4B2D-A1CE-D640D030D5E5",
        "title": "PROMIS SF v1.0 - Sleep Disturb 8b",
        "status": "active",
        "date": "2014-11-14T10:03:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D2FFD051-4CE9-46FB-B8A3-CDDAB21D0BC7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D2FFD051-4CE9-46FB-B8A3-CDDAB21D0BC7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T09:53:46-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D2FFD051-4CE9-46FB-B8A3-CDDAB21D0BC7",
        "title": "PROMIS Parent Proxy SF v2.0-Depressive Symptoms 6a",
        "status": "active",
        "date": "2016-03-08T09:53:46-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AF545CE0-C6B1-4308-AC88-7F782EC67D7C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AF545CE0-C6B1-4308-AC88-7F782EC67D7C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-09-26T13:36:53-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AF545CE0-C6B1-4308-AC88-7F782EC67D7C",
        "title": "PROMIS SF v1.0 - Agotamiento 4a",
        "status": "active",
        "date": "2016-09-26T13:36:53-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/309591DB-4E0E-4A52-8B89-FA965EF4F70C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "309591DB-4E0E-4A52-8B89-FA965EF4F70C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/309591DB-4E0E-4A52-8B89-FA965EF4F70C",
        "title": "PROMIS SF v1.0 - Sleep-Related Impairment 8a",
        "status": "active",
        "date": "2014-11-14T10:04:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/47182B16-0654-47E8-99DE-B1C1C9F53ABE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "47182B16-0654-47E8-99DE-B1C1C9F53ABE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-26T16:13:50-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/47182B16-0654-47E8-99DE-B1C1C9F53ABE",
        "title": "PROMIS Parent Proxy SF v1.0-Fam Relationships 8a",
        "status": "active",
        "date": "2018-09-26T16:13:50-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FCCEECE7-22E9-4B58-B804-C582282B4F87",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FCCEECE7-22E9-4B58-B804-C582282B4F87",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FCCEECE7-22E9-4B58-B804-C582282B4F87",
        "title": "PROMIS SF v1.0 - Depresión 4a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A09CDF4E-E70C-40DC-849D-756A7C60C454",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A09CDF4E-E70C-40DC-849D-756A7C60C454",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:15-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A09CDF4E-E70C-40DC-849D-756A7C60C454",
        "title": "PROMIS SF v1.0 - Applied Cog General Concerns 6a",
        "status": "active",
        "date": "2014-11-14T10:01:15-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C5722E94-1D24-4689-A18B-A508AB3B549C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C5722E94-1D24-4689-A18B-A508AB3B549C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:27:57-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C5722E94-1D24-4689-A18B-A508AB3B549C",
        "title": "PROMIS SF v1.0 - Smoking Health Expect Nonday 6a",
        "status": "active",
        "date": "2016-03-08T14:27:57-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/60108221-A0B3-49D3-B248-D70626A8991C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "60108221-A0B3-49D3-B248-D70626A8991C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:13:40-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/60108221-A0B3-49D3-B248-D70626A8991C",
        "title": "PROMIS Ped SF v1.0 - Life Satisfaction 8b",
        "status": "active",
        "date": "2018-08-22T13:13:40-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/20D82B90-A307-4360-A62A-F9D6D388194A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "20D82B90-A307-4360-A62A-F9D6D388194A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/20D82B90-A307-4360-A62A-F9D6D388194A",
        "title": "PROMIS SF v1.0 - Applied Cog General Concerns 8a",
        "status": "active",
        "date": "2014-11-14T10:01:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3FA74A09-E5C2-45EA-9682-DB4A02FDC81B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3FA74A09-E5C2-45EA-9682-DB4A02FDC81B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3FA74A09-E5C2-45EA-9682-DB4A02FDC81B",
        "title": "PROMIS SF v2.0 - Satisfaction Roles Activities 8a",
        "status": "active",
        "date": "2014-11-14T10:02:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5FEC18BD-522E-4503-A98E-137613D18231",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5FEC18BD-522E-4503-A98E-137613D18231",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:12:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5FEC18BD-522E-4503-A98E-137613D18231",
        "title": "NIH Toolbox Emotional Support FF Ages 8-17 v2.0",
        "status": "active",
        "date": "2019-02-27T17:12:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9F9DDB43-4265-47B9-82B0-C23A078BDE34",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9F9DDB43-4265-47B9-82B0-C23A078BDE34",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:21:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9F9DDB43-4265-47B9-82B0-C23A078BDE34",
        "title": "PROMIS Banco Ped v2.0 - Ansiedad",
        "status": "active",
        "date": "2019-02-27T17:21:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/73233FB9-B6CF-403A-979C-720B8EE52145",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "73233FB9-B6CF-403A-979C-720B8EE52145",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:44:36-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/73233FB9-B6CF-403A-979C-720B8EE52145",
        "title": "PROMIS SF v1.0 - Self-Efficacy Manage Symptoms 8a",
        "status": "active",
        "date": "2016-01-21T12:44:36-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0C649592-83B4-4E0F-899A-930E493029AD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0C649592-83B4-4E0F-899A-930E493029AD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:01:47-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0C649592-83B4-4E0F-899A-930E493029AD",
        "title": "PROMIS Bank v1.0 - Itch - Mood and Sleep",
        "status": "active",
        "date": "2018-09-21T10:01:47-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6CAD2A91-2182-408F-BAF8-1F1F10F9D6BD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6CAD2A91-2182-408F-BAF8-1F1F10F9D6BD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:11-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6CAD2A91-2182-408F-BAF8-1F1F10F9D6BD",
        "title": "PROMIS-Ca Bank v1.1 - Pain Interference",
        "status": "active",
        "date": "2014-11-14T10:02:11-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DE8A523D-4ED6-42DE-86E7-5F316F2A5E41",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DE8A523D-4ED6-42DE-86E7-5F316F2A5E41",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DE8A523D-4ED6-42DE-86E7-5F316F2A5E41",
        "title": "PROMIS SF v2.0 - Informational Support 8a",
        "status": "active",
        "date": "2014-11-14T10:03:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1D9427DE-AC53-490F-8DEE-9CACB7A56AC9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1D9427DE-AC53-490F-8DEE-9CACB7A56AC9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:22:02-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1D9427DE-AC53-490F-8DEE-9CACB7A56AC9",
        "title": "PROMIS SF v1.0 - Smoking Coping Expect 4a AllSmk",
        "status": "active",
        "date": "2016-03-08T14:22:02-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A2207272-A02D-4054-9F3A-6657F126145F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A2207272-A02D-4054-9F3A-6657F126145F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A2207272-A02D-4054-9F3A-6657F126145F",
        "title": "PROMIS SF v2.0 - Informational Support 4a",
        "status": "active",
        "date": "2014-11-14T10:02:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2FECD045-0382-4E7E-9ADE-8A29E6998037",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2FECD045-0382-4E7E-9ADE-8A29E6998037",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-10T13:12:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2FECD045-0382-4E7E-9ADE-8A29E6998037",
        "title": "PROMIS Pediatric Scale v1.0 - Global Health 7",
        "status": "active",
        "date": "2016-03-10T13:12:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DE97B3C6-0566-469D-887F-3A9B96EC7EA4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DE97B3C6-0566-469D-887F-3A9B96EC7EA4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:34:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DE97B3C6-0566-469D-887F-3A9B96EC7EA4",
        "title": "PROMIS Banco Ped v1.0 - Significado y propósito",
        "status": "active",
        "date": "2018-11-15T16:34:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/88BC918C-CC0A-4D5A-A68D-5DD181DA8CEC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "88BC918C-CC0A-4D5A-A68D-5DD181DA8CEC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-10T13:54:37-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/88BC918C-CC0A-4D5A-A68D-5DD181DA8CEC",
        "title": "PROMIS Bank v1.0-Appeal of Sub Use (Past 3 mo)",
        "status": "active",
        "date": "2018-10-10T13:54:37-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E3523044-D4D5-4FF1-95A6-0C6E798BA3D2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E3523044-D4D5-4FF1-95A6-0C6E798BA3D2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:33:46-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E3523044-D4D5-4FF1-95A6-0C6E798BA3D2",
        "title": "PROMIS Pool v1.0 - Dyspnea Emotional Response",
        "status": "active",
        "date": "2016-03-21T15:33:46-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2E25400B-9373-4631-B769-2E4D466EED04",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2E25400B-9373-4631-B769-2E4D466EED04",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2E25400B-9373-4631-B769-2E4D466EED04",
        "title": "PROMIS SF v1.0-Fatigue 4a",
        "status": "active",
        "date": "2014-11-14T10:03:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/51833A22-B2AB-4642-BF77-EDC26C48839A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "51833A22-B2AB-4642-BF77-EDC26C48839A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-09-26T14:25:31-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/51833A22-B2AB-4642-BF77-EDC26C48839A",
        "title": "PROMIS SF v1.0 - Comportamiento ante el dolor  7a",
        "status": "active",
        "date": "2016-09-26T14:25:31-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/80C5D4A3-FC1F-4C1B-B07E-10B796CF8105",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "80C5D4A3-FC1F-4C1B-B07E-10B796CF8105",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:56:54-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/80C5D4A3-FC1F-4C1B-B07E-10B796CF8105",
        "title": "PROMIS Bank v2.0 - Physical Function",
        "status": "active",
        "date": "2016-10-10T10:56:54-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/326C1CB7-5E51-47F8-916E-9F2CE8BC0DE0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "326C1CB7-5E51-47F8-916E-9F2CE8BC0DE0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:15:23-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/326C1CB7-5E51-47F8-916E-9F2CE8BC0DE0",
        "title": "PROMIS Parent Proxy SF v1.0 - Sleep Disturb 4a",
        "status": "active",
        "date": "2018-08-22T13:15:23-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/127EC506-531E-4CD4-9114-5AE801DA8611",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "127EC506-531E-4CD4-9114-5AE801DA8611",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:34:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/127EC506-531E-4CD4-9114-5AE801DA8611",
        "title": "PROMIS SF v1.0 - Smoking Social Motive 4a AllSmk",
        "status": "active",
        "date": "2016-03-08T14:34:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F81A5D15-A0DB-4E1A-9A70-1BFDCFB88A05",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F81A5D15-A0DB-4E1A-9A70-1BFDCFB88A05",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:38:33-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F81A5D15-A0DB-4E1A-9A70-1BFDCFB88A05",
        "title": "PROMIS Ped Bank v1.0 - Sleep Disturbance ",
        "status": "active",
        "date": "2018-08-22T13:38:33-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CFE58D74-F6B1-4B27-9C22-F3C599D02341",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CFE58D74-F6B1-4B27-9C22-F3C599D02341",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:48:10-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CFE58D74-F6B1-4B27-9C22-F3C599D02341",
        "title": "PROMIS SF Ped v2.0 - Relaciones entre iguales 8a",
        "status": "active",
        "date": "2018-08-27T13:48:10-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0F5E8680-FC36-432E-8EB1-7152401ACFB2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0F5E8680-FC36-432E-8EB1-7152401ACFB2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:36:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0F5E8680-FC36-432E-8EB1-7152401ACFB2",
        "title": "PROMIS Banco - Versión Padres v1.0 - Experiencias con estrés psicológico",
        "status": "active",
        "date": "2018-11-15T16:36:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/93616454-C1C4-4D2A-8844-9353AE65D07F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "93616454-C1C4-4D2A-8844-9353AE65D07F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T13:53:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/93616454-C1C4-4D2A-8844-9353AE65D07F",
        "title": "PROMIS Bank v1.0 - Smoking Coping Expect Daily",
        "status": "active",
        "date": "2016-03-08T13:53:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F60BE0E7-81B5-4C3C-A563-D4E3BDD589BD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F60BE0E7-81B5-4C3C-A563-D4E3BDD589BD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:44:46-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F60BE0E7-81B5-4C3C-A563-D4E3BDD589BD",
        "title": "SCI-QOL SF v1.0 - Depression SF10a",
        "status": "active",
        "date": "2018-01-24T14:44:46-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1F728352-5CF1-4B9B-B05E-81972E5D12C9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1F728352-5CF1-4B9B-B05E-81972E5D12C9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1F728352-5CF1-4B9B-B05E-81972E5D12C9",
        "title": "PROMIS Pool v1.0 - Therapeutic Aids",
        "status": "active",
        "date": "2014-11-14T10:05:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/C63B08D9-CC10-44A4-B350-54B4EFC4B09E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "C63B08D9-CC10-44A4-B350-54B4EFC4B09E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/C63B08D9-CC10-44A4-B350-54B4EFC4B09E",
        "title": "PROMIS SF v1.0 - Ansiedad 6a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F6F85739-F288-41DC-B905-6A51430303C1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F6F85739-F288-41DC-B905-6A51430303C1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T15:14:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F6F85739-F288-41DC-B905-6A51430303C1",
        "title": "PROMIS Parent Proxy SF v1.0 - Strength Impact 8a",
        "status": "active",
        "date": "2016-03-09T15:14:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A3A571A6-1E62-4768-B8C1-AB99CDBF867F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A3A571A6-1E62-4768-B8C1-AB99CDBF867F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A3A571A6-1E62-4768-B8C1-AB99CDBF867F",
        "title": "PROMIS Bank v1.0 Alcohol: Negative Consequences",
        "status": "active",
        "date": "2014-11-14T10:02:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CA7ED548-66CA-44AF-B9A4-5AFE2CC1D063",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CA7ED548-66CA-44AF-B9A4-5AFE2CC1D063",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T13:25:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CA7ED548-66CA-44AF-B9A4-5AFE2CC1D063",
        "title": "PROMIS Parent Proxy SF v1.0 - Life Satisfaction 4a",
        "status": "active",
        "date": "2016-03-09T13:25:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0871176A-EB63-4A43-A796-30584FDF52CE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0871176A-EB63-4A43-A796-30584FDF52CE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T14:10:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0871176A-EB63-4A43-A796-30584FDF52CE",
        "title": "SCI-QOL Scale v1.0 - Pressure Ulcers",
        "status": "active",
        "date": "2018-01-23T14:10:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B996AB09-5B25-445E-BA81-96815A64D3BA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B996AB09-5B25-445E-BA81-96815A64D3BA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:54-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B996AB09-5B25-445E-BA81-96815A64D3BA",
        "title": "PROMIS Bank v1.0-Phys Func Samples w Mobility Aid",
        "status": "active",
        "date": "2014-11-14T10:03:54-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9A90B0FF-55A6-4C9E-8A92-6211F8817427",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9A90B0FF-55A6-4C9E-8A92-6211F8817427",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:17:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9A90B0FF-55A6-4C9E-8A92-6211F8817427",
        "title": "NIH TB Hearing Handicap Ages 18-64",
        "status": "active",
        "date": "2016-01-21T12:17:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7AA4002D-61C1-438D-9063-91A17FFA68BB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7AA4002D-61C1-438D-9063-91A17FFA68BB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:58:42-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7AA4002D-61C1-438D-9063-91A17FFA68BB",
        "title": "PROMIS SF v2.0 - Physical Function 4a",
        "status": "active",
        "date": "2016-10-10T10:58:42-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AFBF0040-4EDD-4EE5-8199-3138DDCA0D48",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AFBF0040-4EDD-4EE5-8199-3138DDCA0D48",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:31:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AFBF0040-4EDD-4EE5-8199-3138DDCA0D48",
        "title": "PROMIS Ped SF v1.0 - Physical Stress Experience 8a",
        "status": "active",
        "date": "2016-03-09T14:31:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A465F7F9-6A6A-4B55-9BBB-BF8E0C1D8661",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A465F7F9-6A6A-4B55-9BBB-BF8E0C1D8661",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:14:45-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A465F7F9-6A6A-4B55-9BBB-BF8E0C1D8661",
        "title": "PROMIS SF - Versión Padres v2.0 - Síntomas de depresión 6a",
        "status": "active",
        "date": "2019-02-27T17:14:45-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AFDD7219-4714-4D5A-9670-192A1350A591",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AFDD7219-4714-4D5A-9670-192A1350A591",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:07:19-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AFDD7219-4714-4D5A-9670-192A1350A591",
        "title": "TBI-QOL SF v1.0 - Pos. Affect and Well-Being SF9a",
        "status": "active",
        "date": "2018-01-24T15:07:19-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/612ADAF7-0C0E-4D16-9236-C8006F84759A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "612ADAF7-0C0E-4D16-9236-C8006F84759A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:46-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/612ADAF7-0C0E-4D16-9236-C8006F84759A",
        "title": "PROMIS Bank v2.0 - Satisfaction Roles Activities",
        "status": "active",
        "date": "2014-11-14T10:02:46-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/39909545-DA53-46C7-9019-1E6834821A7A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "39909545-DA53-46C7-9019-1E6834821A7A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:34:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/39909545-DA53-46C7-9019-1E6834821A7A",
        "title": "PROMIS SF v1.0 - Smoking PsychSocExpect Nonday 6a",
        "status": "active",
        "date": "2016-03-08T14:34:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9D8CDCE4-C0E6-47AF-B61F-D760A1E45481",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9D8CDCE4-C0E6-47AF-B61F-D760A1E45481",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:53:04-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9D8CDCE4-C0E6-47AF-B61F-D760A1E45481",
        "title": "SCI-FI v1.0 Ambulation SF 11a",
        "status": "active",
        "date": "2018-01-24T14:53:04-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1A42EA9A-0833-47EC-A2F1-E41AE3A9DE98",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1A42EA9A-0833-47EC-A2F1-E41AE3A9DE98",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-05-12T09:51:58-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1A42EA9A-0833-47EC-A2F1-E41AE3A9DE98",
        "title": "PROMIS Ped Bank v2.0 - UpperExtremity",
        "status": "active",
        "date": "2017-05-12T09:51:58-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D7EBC06C-60EE-4985-8BD2-1D6AE5D54110",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D7EBC06C-60EE-4985-8BD2-1D6AE5D54110",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D7EBC06C-60EE-4985-8BD2-1D6AE5D54110",
        "title": "PROMIS SF v1.0 - Applied Cog Abilities 4a",
        "status": "active",
        "date": "2014-11-14T10:04:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FF664092-7876-4901-B340-80036C5BB8F5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FF664092-7876-4901-B340-80036C5BB8F5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:24:13-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FF664092-7876-4901-B340-80036C5BB8F5",
        "title": "PROMIS SF v1.0 - Smoking Emot/Sensory 6a AllSmk",
        "status": "active",
        "date": "2016-03-08T14:24:13-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1F23A55D-FA62-44FB-9584-855511806D5A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1F23A55D-FA62-44FB-9584-855511806D5A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-04-01T12:50:20-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1F23A55D-FA62-44FB-9584-855511806D5A",
        "title": "PROMIS Scale v2.0 - Nociceptive Pain Quality 5a",
        "status": "active",
        "date": "2019-04-01T12:50:20-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F7C502AE-7094-4016-9F0F-2860659FA48F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F7C502AE-7094-4016-9F0F-2860659FA48F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:33:44-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F7C502AE-7094-4016-9F0F-2860659FA48F",
        "title": "PROMIS SF Ped v1.0 - Significado y propósito 4a",
        "status": "active",
        "date": "2018-11-15T16:33:44-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F625E32A-B26D-4228-BBC2-DD6C2E4EEA6E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F625E32A-B26D-4228-BBC2-DD6C2E4EEA6E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:51-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F625E32A-B26D-4228-BBC2-DD6C2E4EEA6E",
        "title": "PROMIS Bank v1.0 - Sleep Disturbance",
        "status": "active",
        "date": "2014-11-14T10:04:51-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/31198308-F060-474A-887E-5D7AF1329447",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "31198308-F060-474A-887E-5D7AF1329447",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:39:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/31198308-F060-474A-887E-5D7AF1329447",
        "title": "ASCQ-Me Sickle Cell Medical Hx Checklist",
        "status": "active",
        "date": "2017-11-02T11:39:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A42E79AB-FE2B-4665-8089-BE1AA4C32D6B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A42E79AB-FE2B-4665-8089-BE1AA4C32D6B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:40:52-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A42E79AB-FE2B-4665-8089-BE1AA4C32D6B",
        "title": "ASCQ-Me Pain Impact CAT v2.0",
        "status": "active",
        "date": "2017-11-02T11:40:52-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5FAF7608-6175-4B89-A410-1E88D157E903",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5FAF7608-6175-4B89-A410-1E88D157E903",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5FAF7608-6175-4B89-A410-1E88D157E903",
        "title": "PROMIS Bank v1.0 - Applied Cog Abilities",
        "status": "active",
        "date": "2014-11-14T10:02:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A0A07870-4C32-4053-A9CC-DA5931F0993E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A0A07870-4C32-4053-A9CC-DA5931F0993E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A0A07870-4C32-4053-A9CC-DA5931F0993E",
        "title": "PROMIS Banco Ped  v1.0 - Agotamiento",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8C146F30-B93C-44B4-B975-981733B6B7FE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8C146F30-B93C-44B4-B975-981733B6B7FE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:22:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8C146F30-B93C-44B4-B975-981733B6B7FE",
        "title": "PROMIS SF Ped v2.0 - Ansiedad 8a",
        "status": "active",
        "date": "2019-02-27T17:22:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/04D2FBCC-884C-4C03-BBD1-CD3F4B38B43F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "04D2FBCC-884C-4C03-BBD1-CD3F4B38B43F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-05T14:44:14-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/04D2FBCC-884C-4C03-BBD1-CD3F4B38B43F",
        "title": "PROMIS SF v1.0-Severity of Sub Use (Past 3 mo) 7a",
        "status": "active",
        "date": "2018-10-05T14:44:14-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1ADEA675-D551-405F-9037-80C06BF52612",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1ADEA675-D551-405F-9037-80C06BF52612",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:07-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1ADEA675-D551-405F-9037-80C06BF52612",
        "title": "PROMIS Bank v1.0 - Lubrication",
        "status": "active",
        "date": "2014-11-14T10:04:07-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4ACCBAC1-0B8E-473C-BABB-BDBF10B6E8D1",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4ACCBAC1-0B8E-473C-BABB-BDBF10B6E8D1",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:35:25-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4ACCBAC1-0B8E-473C-BABB-BDBF10B6E8D1",
        "title": "PROMIS Ped SF v2.0 - Asthma Impact 8a",
        "status": "active",
        "date": "2017-02-28T12:35:25-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1B66CDEA-2687-4CF8-A642-9432A13A7272",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1B66CDEA-2687-4CF8-A642-9432A13A7272",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1B66CDEA-2687-4CF8-A642-9432A13A7272",
        "title": "PROMIS SF v2.0 - Instrumental Support 4a",
        "status": "active",
        "date": "2014-11-14T10:05:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/520B4720-8470-43FF-8C53-49ECE57C29EE",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "520B4720-8470-43FF-8C53-49ECE57C29EE",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/520B4720-8470-43FF-8C53-49ECE57C29EE",
        "title": "PROMIS SF Ped v1.0 - Alteraciones relacionadas con el sueño 8a",
        "status": "active",
        "date": "2018-11-15T16:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A0511754-DFB1-4492-81D9-1FC3ED3DD31C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A0511754-DFB1-4492-81D9-1FC3ED3DD31C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:12:55-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A0511754-DFB1-4492-81D9-1FC3ED3DD31C",
        "title": "PROMIS SF v2.0 - Cognitive Function 4a",
        "status": "active",
        "date": "2016-03-21T10:12:55-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/777ABF9A-1178-492C-B57E-D294D595C810",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "777ABF9A-1178-492C-B57E-D294D595C810",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/777ABF9A-1178-492C-B57E-D294D595C810",
        "title": "Neuro-QoL SF Ped  v1.0 - Dolor",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F32BDA03-2831-47A5-88BC-954DBF0D34C6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F32BDA03-2831-47A5-88BC-954DBF0D34C6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T15:38:14-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F32BDA03-2831-47A5-88BC-954DBF0D34C6",
        "title": "PROMIS Pool v1.0 - Dyspnea Characteristics",
        "status": "active",
        "date": "2016-03-21T15:38:14-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4265C141-1CC3-4AC1-B923-1B017D5B99C3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4265C141-1CC3-4AC1-B923-1B017D5B99C3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4265C141-1CC3-4AC1-B923-1B017D5B99C3",
        "title": "PROMIS SF v2.0 - Informational Support 6a",
        "status": "active",
        "date": "2014-11-14T10:04:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/084510E1-AF8B-40B9-870E-0D28474DEE63",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "084510E1-AF8B-40B9-870E-0D28474DEE63",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:41:32-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/084510E1-AF8B-40B9-870E-0D28474DEE63",
        "title": "SCI-QOL Bank v1.0 - Self-Esteem",
        "status": "active",
        "date": "2018-01-24T14:41:32-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/042ED857-B664-4A22-B5FA-6CF3CF15763F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "042ED857-B664-4A22-B5FA-6CF3CF15763F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:40:33-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/042ED857-B664-4A22-B5FA-6CF3CF15763F",
        "title": "ASCQ-Me Social Functioning Impact CAT v2.0",
        "status": "active",
        "date": "2017-11-02T11:40:33-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/96F5525D-8654-4617-B890-A5A30F002F7D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "96F5525D-8654-4617-B890-A5A30F002F7D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:06:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/96F5525D-8654-4617-B890-A5A30F002F7D",
        "title": "PROMIS Parent Proxy SF v2.0 - Fatigue 10a",
        "status": "active",
        "date": "2016-03-08T10:06:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DD832A45-307D-4653-8722-AD3F0471AD45",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DD832A45-307D-4653-8722-AD3F0471AD45",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DD832A45-307D-4653-8722-AD3F0471AD45",
        "title": "Neuro-QoL SF v1.1 - Satisfacción con la participación en roles y actividades sociales",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EF8AE77E-1AA9-4EC7-809A-A30192DA5CF9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EF8AE77E-1AA9-4EC7-809A-A30192DA5CF9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:50:55-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EF8AE77E-1AA9-4EC7-809A-A30192DA5CF9",
        "title": "PROMIS Ped Bank v1.0 - Meaning and Purpose",
        "status": "active",
        "date": "2016-03-08T14:50:55-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FFA6947C-1FD3-488F-9E4F-59C22558625B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FFA6947C-1FD3-488F-9E4F-59C22558625B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:35:27-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FFA6947C-1FD3-488F-9E4F-59C22558625B",
        "title": "PROMIS Banco - Versión Padres v2.0 - Asma",
        "status": "active",
        "date": "2018-08-27T13:35:27-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3F539F64-FEF9-4F0B-9EB3-8C18641053DD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3F539F64-FEF9-4F0B-9EB3-8C18641053DD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:18:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3F539F64-FEF9-4F0B-9EB3-8C18641053DD",
        "title": "PROMIS Bank v1.0 - Smoking PsychSocExpect Daily",
        "status": "active",
        "date": "2016-03-08T14:18:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DA116543-78BA-4C5A-B824-B79977553F94",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DA116543-78BA-4C5A-B824-B79977553F94",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-09-26T14:12:09-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DA116543-78BA-4C5A-B824-B79977553F94",
        "title": "PROMIS SF v1.0 - Agotamiento 7a",
        "status": "active",
        "date": "2016-09-26T14:12:09-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7B59FEA1-96D2-4E17-8E3D-66FF64024A9B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7B59FEA1-96D2-4E17-8E3D-66FF64024A9B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:00:45-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7B59FEA1-96D2-4E17-8E3D-66FF64024A9B",
        "title": "PROMIS SF v1.0 - Itch-Interference 4a",
        "status": "active",
        "date": "2018-09-21T10:00:45-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E388610D-6268-4C5E-B5D5-F074E3ED3B69",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E388610D-6268-4C5E-B5D5-F074E3ED3B69",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E388610D-6268-4C5E-B5D5-F074E3ED3B69",
        "title": "PROMIS Banco Ped  v1.0 - Asma",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/14E62814-47E0-493A-94AB-4CCA0B91DB73",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "14E62814-47E0-493A-94AB-4CCA0B91DB73",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:59-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/14E62814-47E0-493A-94AB-4CCA0B91DB73",
        "title": "PROMIS SF v2.0 - Instrumental Support 6a",
        "status": "active",
        "date": "2014-11-14T10:01:59-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5D5932C6-B1F9-4D34-B7E7-649AF266DCF4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5D5932C6-B1F9-4D34-B7E7-649AF266DCF4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-17T10:35:58-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5D5932C6-B1F9-4D34-B7E7-649AF266DCF4",
        "title": "PROMIS Bank v1.0 - Smoking PsychSocExpect AllSmk",
        "status": "active",
        "date": "2016-03-17T10:35:58-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D15BB0E2-12C2-441D-AE25-B31AC535705F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D15BB0E2-12C2-441D-AE25-B31AC535705F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:14:03-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D15BB0E2-12C2-441D-AE25-B31AC535705F",
        "title": "PROMIS Parent Proxy SF v2.0 - Pain Interfere 8a",
        "status": "active",
        "date": "2016-03-08T10:14:03-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/73D9866C-1BFD-498F-ACC3-0996ED6307AB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "73D9866C-1BFD-498F-ACC3-0996ED6307AB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:36:18-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/73D9866C-1BFD-498F-ACC3-0996ED6307AB",
        "title": "SCI-FI v1.0 Power Wheelchair SF 10b-Tetra",
        "status": "active",
        "date": "2018-01-24T14:36:18-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3EBD0F78-AEA0-4610-95A4-9EF8E9C855B7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3EBD0F78-AEA0-4610-95A4-9EF8E9C855B7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T10:10:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3EBD0F78-AEA0-4610-95A4-9EF8E9C855B7",
        "title": "PROMIS Parent Proxy SF v2.0 - Mobility 8a",
        "status": "active",
        "date": "2016-03-08T10:10:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0B940FD6-251F-4924-B413-13AE4BD5999B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0B940FD6-251F-4924-B413-13AE4BD5999B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:32:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0B940FD6-251F-4924-B413-13AE4BD5999B",
        "title": "NIH Toolbox Interacción positiva con los pares_FF_Versión Padres_Edades 3-12 años v2.0",
        "status": "active",
        "date": "2018-11-15T16:32:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5BCEF3B5-4472-419A-8064-E69263B5A708",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5BCEF3B5-4472-419A-8064-E69263B5A708",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5BCEF3B5-4472-419A-8064-E69263B5A708",
        "title": "PROMIS Banco v2.0 - Capacidad para participar en roles y actividades sociales",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BB4CEA28-C94C-487B-BFFF-98645172ACD9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BB4CEA28-C94C-487B-BFFF-98645172ACD9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-23T10:49:10-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BB4CEA28-C94C-487B-BFFF-98645172ACD9",
        "title": "SCI-FI v1.0 Fine Motor Function - Core Items CAT",
        "status": "active",
        "date": "2018-01-23T10:49:10-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/68D05452-26E8-4F0D-9705-A3228434D825",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "68D05452-26E8-4F0D-9705-A3228434D825",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/68D05452-26E8-4F0D-9705-A3228434D825",
        "title": "PROMIS Banco v1.2 - Movilidad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/275F6410-5D9E-442A-B906-74FA944B986D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "275F6410-5D9E-442A-B906-74FA944B986D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:47:46-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/275F6410-5D9E-442A-B906-74FA944B986D",
        "title": "PROMIS Banco Ped v1.0 - Actividad física ",
        "status": "active",
        "date": "2019-01-07T10:47:46-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D2C9768A-1897-4B9F-B137-0E3F7278B990",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D2C9768A-1897-4B9F-B137-0E3F7278B990",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:32:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D2C9768A-1897-4B9F-B137-0E3F7278B990",
        "title": "PROMIS Banco v2.0 - Apoyo a través de la información",
        "status": "active",
        "date": "2018-11-15T16:32:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A2AA2E68-71D0-4EBB-BB24-2857FBEE396A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A2AA2E68-71D0-4EBB-BB24-2857FBEE396A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:41:25-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A2AA2E68-71D0-4EBB-BB24-2857FBEE396A",
        "title": "ASCQ-Me Emotional Impact SF v2.0",
        "status": "active",
        "date": "2017-11-02T11:41:25-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/037D7B69-FCB2-482E-A1CE-9A4D017D24AD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "037D7B69-FCB2-482E-A1CE-9A4D017D24AD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/037D7B69-FCB2-482E-A1CE-9A4D017D24AD",
        "title": "Neuro-QOL Ped Bank v1.0 - Anxiety",
        "status": "active",
        "date": "2014-11-14T10:06:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/153D3884-85FD-45EA-A8F5-4F2E79323DFC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "153D3884-85FD-45EA-A8F5-4F2E79323DFC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/153D3884-85FD-45EA-A8F5-4F2E79323DFC",
        "title": "PROMIS Banco Ped  v1.1 - Síntomas de depresión",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7DACCFC4-87F9-4C25-A8AA-53B9B677B1A7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7DACCFC4-87F9-4C25-A8AA-53B9B677B1A7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2020-04-29T19:14:23-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7DACCFC4-87F9-4C25-A8AA-53B9B677B1A7",
        "title": "Ocular Surface Disease Index (OSDI) ",
        "status": "active",
        "date": "2020-04-29T19:14:23-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/10A6299C-DA62-497F-AD68-0C1B9F3F1669",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "10A6299C-DA62-497F-AD68-0C1B9F3F1669",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:08:25-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/10A6299C-DA62-497F-AD68-0C1B9F3F1669",
        "title": "PROMIS Parent Proxy Bank v1.0 - Cognitive Function",
        "status": "active",
        "date": "2016-03-21T10:08:25-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D34B48A0-B54B-42FF-A8D1-3CDBB06DBC2F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D34B48A0-B54B-42FF-A8D1-3CDBB06DBC2F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:54:59-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D34B48A0-B54B-42FF-A8D1-3CDBB06DBC2F",
        "title": "NIH Toolbox Perceived Stress FF Ages 13-17 v2.0",
        "status": "active",
        "date": "2019-01-07T10:54:59-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EFE04E5F-858D-4037-A290-624C1A296D5D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EFE04E5F-858D-4037-A290-624C1A296D5D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-05T10:39:03-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EFE04E5F-858D-4037-A290-624C1A296D5D",
        "title": "PROMIS SF v1.0 - Sleep-Related Impairment 4a",
        "status": "active",
        "date": "2018-09-05T10:39:03-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/32FDB758-FB1B-492D-8C73-F2CF6C8A653B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "32FDB758-FB1B-492D-8C73-F2CF6C8A653B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/32FDB758-FB1B-492D-8C73-F2CF6C8A653B",
        "title": "PROMIS SF v1.0-Anxiety 6a",
        "status": "active",
        "date": "2014-11-14T10:01:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/095CC452-70F3-4805-A859-466C8847C558",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "095CC452-70F3-4805-A859-466C8847C558",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-21T12:41:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/095CC452-70F3-4805-A859-466C8847C558",
        "title": "PROMIS Bank v1.0 - Self-Efficacy Manage Soc Inter",
        "status": "active",
        "date": "2016-01-21T12:41:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BE5C09D1-1FB2-474C-B17C-8EC8F98F396D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BE5C09D1-1FB2-474C-B17C-8EC8F98F396D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BE5C09D1-1FB2-474C-B17C-8EC8F98F396D",
        "title": "PROMIS SF v2.0 - Social Isolation 4a",
        "status": "active",
        "date": "2014-11-14T10:03:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/99ED6E39-E48C-4E18-BC05-BDB8FFB4ECBF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "99ED6E39-E48C-4E18-BC05-BDB8FFB4ECBF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:58:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/99ED6E39-E48C-4E18-BC05-BDB8FFB4ECBF",
        "title": "PROMIS Parent Proxy SF v1.0 - Psych Stress Exp 4a",
        "status": "active",
        "date": "2016-03-09T14:58:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/809C28F7-6E4A-4918-924A-4395F0D42962",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "809C28F7-6E4A-4918-924A-4395F0D42962",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/809C28F7-6E4A-4918-924A-4395F0D42962",
        "title": "PROMIS SF v2.0 - Social Isolation 6a",
        "status": "active",
        "date": "2014-11-14T10:02:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/473EE3D5-E8F7-4847-857C-71F2A79E3E22",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "473EE3D5-E8F7-4847-857C-71F2A79E3E22",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T14:20:02-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/473EE3D5-E8F7-4847-857C-71F2A79E3E22",
        "title": "PROMIS Parent Proxy SF v1.0 - Physical Activity 4a",
        "status": "active",
        "date": "2016-03-09T14:20:02-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7224FB55-81D7-4131-A136-8C89907CDFBB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7224FB55-81D7-4131-A136-8C89907CDFBB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:26-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7224FB55-81D7-4131-A136-8C89907CDFBB",
        "title": "PROMIS Scale v1.0 - Pain Intensity 3a",
        "status": "active",
        "date": "2014-11-14T10:03:26-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/08E0E6C5-3ADB-433E-9034-0E382580E28F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "08E0E6C5-3ADB-433E-9034-0E382580E28F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:38:35-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/08E0E6C5-3ADB-433E-9034-0E382580E28F",
        "title": "PROMIS SF v2.0 -  Apoyo emocional 4a",
        "status": "active",
        "date": "2018-08-27T13:38:35-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/71D33441-51AD-4F3D-BFAC-D77A4C31639C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "71D33441-51AD-4F3D-BFAC-D77A4C31639C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:14-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/71D33441-51AD-4F3D-BFAC-D77A4C31639C",
        "title": "Neuro-QOL Bank v1.0 - Emotional & Beh. Dyscontrol",
        "status": "active",
        "date": "2014-11-14T10:06:14-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/0AB0CD9F-94AA-492D-A360-A2124BAB0B7F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "0AB0CD9F-94AA-492D-A360-A2124BAB0B7F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/0AB0CD9F-94AA-492D-A360-A2124BAB0B7F",
        "title": "PROMIS SF v1.0 - Pain Interference 6b",
        "status": "active",
        "date": "2014-11-14T10:02:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8EF155B5-2161-425B-92F7-CEFAE376B3A3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8EF155B5-2161-425B-92F7-CEFAE376B3A3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-04-25T16:10:32-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8EF155B5-2161-425B-92F7-CEFAE376B3A3",
        "title": "ASCQ-Me Pain Episode Freq and Severity ",
        "status": "active",
        "date": "2019-04-25T16:10:32-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/29BDFF61-3A2E-4458-8E58-9CA142DEC834",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "29BDFF61-3A2E-4458-8E58-9CA142DEC834",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:05:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/29BDFF61-3A2E-4458-8E58-9CA142DEC834",
        "title": "TBI-QOL SF v1.0 - Executive Function SF10a",
        "status": "active",
        "date": "2018-01-24T15:05:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6133D872-206E-425E-8A6C-79A40213BF4B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6133D872-206E-425E-8A6C-79A40213BF4B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:10:50-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6133D872-206E-425E-8A6C-79A40213BF4B",
        "title": "PROMIS SF v1.0 - Significado y propósito 8a",
        "status": "active",
        "date": "2019-02-27T17:10:50-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EAA1BBC4-6D00-44D5-846A-9C13BB680151",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EAA1BBC4-6D00-44D5-846A-9C13BB680151",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:07:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EAA1BBC4-6D00-44D5-846A-9C13BB680151",
        "title": "Neuro-QOL Bank v1.0 - Depression",
        "status": "active",
        "date": "2014-11-14T10:07:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6400355D-58BC-4A4B-9CE6-AEE6086BEB9F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6400355D-58BC-4A4B-9CE6-AEE6086BEB9F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:28:30-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6400355D-58BC-4A4B-9CE6-AEE6086BEB9F",
        "title": "PROMIS Ped Bank v2.0 - Mobility",
        "status": "active",
        "date": "2017-02-28T12:28:30-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CB3C4EA0-33DC-45AD-9CC2-6B8C39FF7A2A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CB3C4EA0-33DC-45AD-9CC2-6B8C39FF7A2A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:35:57-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CB3C4EA0-33DC-45AD-9CC2-6B8C39FF7A2A",
        "title": "NIH Toolbox Estrés percibido_FF_Edades 13-17 años v2.0",
        "status": "active",
        "date": "2018-11-15T16:35:57-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/09C04D4D-5942-4DD5-AE2F-EC6B3A21030E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "09C04D4D-5942-4DD5-AE2F-EC6B3A21030E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-09-26T15:36:54-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/09C04D4D-5942-4DD5-AE2F-EC6B3A21030E",
        "title": "PROMIS SF v1.0 - Depresión 8b",
        "status": "active",
        "date": "2016-09-26T15:36:54-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/61FBB80F-418E-4B5A-A254-04DA64F11B97",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "61FBB80F-418E-4B5A-A254-04DA64F11B97",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:56-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/61FBB80F-418E-4B5A-A254-04DA64F11B97",
        "title": "Neuro-QOL SF v1.0 - Fatigue",
        "status": "active",
        "date": "2014-11-14T10:06:56-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5211C7AF-8F4A-4648-90A6-ECE5669AE0EF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5211C7AF-8F4A-4648-90A6-ECE5669AE0EF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:01-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5211C7AF-8F4A-4648-90A6-ECE5669AE0EF",
        "title": "PROMIS Bank v2.0 - Ability to Participate Social",
        "status": "active",
        "date": "2014-11-14T10:05:01-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6483324B-D04D-4E25-BC01-D1D04CC57908",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6483324B-D04D-4E25-BC01-D1D04CC57908",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-10-23T13:27:02-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6483324B-D04D-4E25-BC01-D1D04CC57908",
        "title": "PROMIS Short Form v1.0 - Meaning and Purpose 8a",
        "status": "active",
        "date": "2017-10-23T13:27:02-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3FD9AA9A-A4B6-4B7E-8F0E-65C639351AD4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3FD9AA9A-A4B6-4B7E-8F0E-65C639351AD4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3FD9AA9A-A4B6-4B7E-8F0E-65C639351AD4",
        "title": "PROMIS Banco v1.0 - Depresión",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B6731EF7-BCB5-4AE3-9A11-618BF8A9A5ED",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B6731EF7-BCB5-4AE3-9A11-618BF8A9A5ED",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:14:01-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B6731EF7-BCB5-4AE3-9A11-618BF8A9A5ED",
        "title": "PROMIS SF v2.0 - Cognitive Function 8a",
        "status": "active",
        "date": "2016-03-21T10:14:01-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/70991097-C29B-4D49-8F28-1026AA32C374",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "70991097-C29B-4D49-8F28-1026AA32C374",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/70991097-C29B-4D49-8F28-1026AA32C374",
        "title": "PROMIS SF v1.0-Social Sat Role 4a",
        "status": "active",
        "date": "2014-11-14T10:03:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/2F1C3F29-B1ED-4FBB-BE60-E8B51E3457E4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2F1C3F29-B1ED-4FBB-BE60-E8B51E3457E4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/2F1C3F29-B1ED-4FBB-BE60-E8B51E3457E4",
        "title": "Neuro-QoL SF v1.0 - Descontrol emocional y conductual",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B12C5F48-A340-4640-81C4-93D893860DC5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B12C5F48-A340-4640-81C4-93D893860DC5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B12C5F48-A340-4640-81C4-93D893860DC5",
        "title": "PROMIS Banco Ped  v1.0 - Extremidades superiores",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9027889A-F522-4FF4-89F8-314DD0B45373",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9027889A-F522-4FF4-89F8-314DD0B45373",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:59:55-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9027889A-F522-4FF4-89F8-314DD0B45373",
        "title": "TBI-QOL Bank v1.0 - Headache",
        "status": "active",
        "date": "2018-01-24T14:59:55-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4B11E380-CB69-49B6-B84F-AEB907B241D6",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4B11E380-CB69-49B6-B84F-AEB907B241D6",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:39:05-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4B11E380-CB69-49B6-B84F-AEB907B241D6",
        "title": "NIH Toolbox Positive Peer Interaction Parent Report FF Ages 3-12 v2.0",
        "status": "active",
        "date": "2018-11-15T16:39:05-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/70830CA5-0A1D-4139-99D3-77FC3EEAC79D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "70830CA5-0A1D-4139-99D3-77FC3EEAC79D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/70830CA5-0A1D-4139-99D3-77FC3EEAC79D",
        "title": "PROMIS Bank v1.0 - Erectile Function",
        "status": "active",
        "date": "2014-11-14T10:03:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F7CF8A91-DBAB-426E-89C6-12800999ECA9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F7CF8A91-DBAB-426E-89C6-12800999ECA9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F7CF8A91-DBAB-426E-89C6-12800999ECA9",
        "title": "Neuro-QoL Banco Ped  v2.1- Agotamiento",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/12B80698-BF14-4E30-B291-FDF6B7623C17",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "12B80698-BF14-4E30-B291-FDF6B7623C17",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/12B80698-BF14-4E30-B291-FDF6B7623C17",
        "title": "PROMIS SF v1.0 - Agotamiento 8a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F95F01E8-027A-4524-A1D7-0AAEF489B272",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F95F01E8-027A-4524-A1D7-0AAEF489B272",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:09-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F95F01E8-027A-4524-A1D7-0AAEF489B272",
        "title": "PROMIS SF v1.0 - Phys. Function 10a",
        "status": "active",
        "date": "2014-11-14T10:04:09-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CE6F55D7-72C5-43AC-B8D6-5DC5F06C19A0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CE6F55D7-72C5-43AC-B8D6-5DC5F06C19A0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:20-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CE6F55D7-72C5-43AC-B8D6-5DC5F06C19A0",
        "title": "PROMIS SF v2.0 - Companionship 6a",
        "status": "active",
        "date": "2014-11-14T10:01:20-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/666095DB-3EAE-4F46-AD70-FAF3CEF4D609",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "666095DB-3EAE-4F46-AD70-FAF3CEF4D609",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:49:13-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/666095DB-3EAE-4F46-AD70-FAF3CEF4D609",
        "title": "PROMIS Banco Ped v2.0 - Relaciones entre iguales",
        "status": "active",
        "date": "2018-08-27T13:49:13-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/BF75FC23-084C-44F6-9B1A-168FD3E31F8A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "BF75FC23-084C-44F6-9B1A-168FD3E31F8A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/BF75FC23-084C-44F6-9B1A-168FD3E31F8A",
        "title": "Neuro-QOL Ped SF v1.0 - Depression",
        "status": "active",
        "date": "2014-11-14T10:06:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F4A33178-6B8F-4F7B-9284-74FF284E84A5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F4A33178-6B8F-4F7B-9284-74FF284E84A5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:01:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F4A33178-6B8F-4F7B-9284-74FF284E84A5",
        "title": "TBI-QOL Bank v1.0 - Resilience",
        "status": "active",
        "date": "2018-01-24T15:01:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/15DF3725-5529-45D5-8955-2CF9E830969C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "15DF3725-5529-45D5-8955-2CF9E830969C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:58-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/15DF3725-5529-45D5-8955-2CF9E830969C",
        "title": "PROMIS SF v1.1 - Anger 5a",
        "status": "active",
        "date": "2014-11-14T10:01:58-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/AAA49CF5-1E63-472A-B65D-5C00D4226723",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "AAA49CF5-1E63-472A-B65D-5C00D4226723",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-05T14:44:29-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/AAA49CF5-1E63-472A-B65D-5C00D4226723",
        "title": "PROMIS SF v1.0-Sev of Sub Use (Past 30 days) 7a",
        "status": "active",
        "date": "2018-10-05T14:44:29-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/99A118AF-A0A2-4ED9-BD6E-8AB0ABEBB0E3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "99A118AF-A0A2-4ED9-BD6E-8AB0ABEBB0E3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/99A118AF-A0A2-4ED9-BD6E-8AB0ABEBB0E3",
        "title": "PROMIS SF v1.0 - Applied Cog General Concerns 4a",
        "status": "active",
        "date": "2014-11-14T10:05:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F0B23A79-9281-41FD-8863-39BC798F8E40",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F0B23A79-9281-41FD-8863-39BC798F8E40",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:45:45-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F0B23A79-9281-41FD-8863-39BC798F8E40",
        "title": "SCI-QOL SF v1.0 - Pos. Affect and Well-Being SF10a",
        "status": "active",
        "date": "2018-01-24T14:45:45-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8475DAAB-031E-450C-BE8E-FC21E1F37170",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8475DAAB-031E-450C-BE8E-FC21E1F37170",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:41:37-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8475DAAB-031E-450C-BE8E-FC21E1F37170",
        "title": "PROMIS SF Ped v1.0 - Relaciones familiares 4a",
        "status": "active",
        "date": "2018-11-15T16:41:37-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/17309B05-1129-4674-B8F7-2508A6C84E76",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "17309B05-1129-4674-B8F7-2508A6C84E76",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:56:52-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/17309B05-1129-4674-B8F7-2508A6C84E76",
        "title": "TBI-QOL Bank v1.0 - Ability to Participate in SRA",
        "status": "active",
        "date": "2018-01-24T14:56:52-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/19AD3173-740F-4C05-BD5B-977A9157B316",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "19AD3173-740F-4C05-BD5B-977A9157B316",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-07T11:31:21-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/19AD3173-740F-4C05-BD5B-977A9157B316",
        "title": "PROMIS Parent Proxy Bank v2.0 - Anxiety",
        "status": "active",
        "date": "2016-03-07T11:31:21-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D94E5945-7D1E-4DF2-B0F5-FD08492804DA",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D94E5945-7D1E-4DF2-B0F5-FD08492804DA",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:40:00-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D94E5945-7D1E-4DF2-B0F5-FD08492804DA",
        "title": "SCI-QOL Bank v1.0 - Independence",
        "status": "active",
        "date": "2018-01-24T14:40:00-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F57A01B0-B76D-4894-830F-C87DB375CEDD",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F57A01B0-B76D-4894-830F-C87DB375CEDD",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:12-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F57A01B0-B76D-4894-830F-C87DB375CEDD",
        "title": "PROMIS-Ca Bank v1.1 - Physical Function",
        "status": "active",
        "date": "2014-11-14T10:01:12-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5A04F794-A21C-4F82-8D6D-1CF0BA5A4AC0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5A04F794-A21C-4F82-8D6D-1CF0BA5A4AC0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:57:16-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5A04F794-A21C-4F82-8D6D-1CF0BA5A4AC0",
        "title": "PROMIS SF v2.0 - Physical Function 20a",
        "status": "active",
        "date": "2016-10-10T10:57:16-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7858CC92-739C-4D91-A610-74DD8228649B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7858CC92-739C-4D91-A610-74DD8228649B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-07T12:41:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7858CC92-739C-4D91-A610-74DD8228649B",
        "title": "PROMIS Parent Proxy Bank v2.0 - Pain Interference",
        "status": "active",
        "date": "2016-03-07T12:41:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/815DEA2B-88EE-4C74-B3F0-5829699EAF5D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "815DEA2B-88EE-4C74-B3F0-5829699EAF5D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-02-28T12:19:55-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/815DEA2B-88EE-4C74-B3F0-5829699EAF5D",
        "title": "PROMIS Ped Bank v2.0 - Anxiety",
        "status": "active",
        "date": "2017-02-28T12:19:55-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8E0697A0-708D-4766-9DCE-597B355FD5E7",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8E0697A0-708D-4766-9DCE-597B355FD5E7",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:10-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8E0697A0-708D-4766-9DCE-597B355FD5E7",
        "title": "PROMIS Pediatric Scale v1.1 - Anger 5a",
        "status": "active",
        "date": "2014-11-14T10:05:10-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/627DEFDA-C086-4373-9E64-F4CA3B9ADE77",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "627DEFDA-C086-4373-9E64-F4CA3B9ADE77",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/627DEFDA-C086-4373-9E64-F4CA3B9ADE77",
        "title": "PROMIS SF v1.0 - Depresión 6a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/506D7556-98A5-45A5-B49F-A09464B676A2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "506D7556-98A5-45A5-B49F-A09464B676A2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-26T16:13:20-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/506D7556-98A5-45A5-B49F-A09464B676A2",
        "title": "PROMIS Parent Proxy Bank v1.0-Family Relationships",
        "status": "active",
        "date": "2018-09-26T16:13:20-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F307C590-0036-4A7B-A1D2-E54AAD80DFE8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F307C590-0036-4A7B-A1D2-E54AAD80DFE8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:02:48-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F307C590-0036-4A7B-A1D2-E54AAD80DFE8",
        "title": "PROMIS SF v2.0 - Satisfaction Roles Activities 6a",
        "status": "active",
        "date": "2014-11-14T10:02:48-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/EB86CDFD-1832-4D0E-963C-40E8BDDD455D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "EB86CDFD-1832-4D0E-963C-40E8BDDD455D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:11:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/EB86CDFD-1832-4D0E-963C-40E8BDDD455D",
        "title": "PROMIS Banco v1.0 - Satisfacción general con la vida",
        "status": "active",
        "date": "2019-02-27T17:11:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6801219C-05D0-491D-A9DD-F54D54B265BB",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6801219C-05D0-491D-A9DD-F54D54B265BB",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6801219C-05D0-491D-A9DD-F54D54B265BB",
        "title": "PROMIS-Ca Bank v1.0 - Fatigue",
        "status": "active",
        "date": "2014-11-14T10:05:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/21139371-F30D-4C0C-8FB3-5F442AA28400",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "21139371-F30D-4C0C-8FB3-5F442AA28400",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:39:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/21139371-F30D-4C0C-8FB3-5F442AA28400",
        "title": "SCI-QOL Bank v1.0 - Grief - Loss",
        "status": "active",
        "date": "2018-01-24T14:39:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/26CD51CB-8C14-49B0-B553-AE681041F820",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "26CD51CB-8C14-49B0-B553-AE681041F820",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-21T10:02:06-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/26CD51CB-8C14-49B0-B553-AE681041F820",
        "title": "PROMIS Bank v1.0 - Itch-Activity and Clothing ",
        "status": "active",
        "date": "2018-09-21T10:02:06-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/59A23F03-2CD2-472B-9142-BD5EDE468EE0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "59A23F03-2CD2-472B-9142-BD5EDE468EE0",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:06:35-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/59A23F03-2CD2-472B-9142-BD5EDE468EE0",
        "title": "TBI-QOL SF v1.0 - Independence SF8a",
        "status": "active",
        "date": "2018-01-24T15:06:35-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/168E8D40-A5F2-4A84-B138-30F6F3D44358",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "168E8D40-A5F2-4A84-B138-30F6F3D44358",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:53-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/168E8D40-A5F2-4A84-B138-30F6F3D44358",
        "title": "Neuro-QOL Bank v1.0 - Ability to Part. in SRA",
        "status": "active",
        "date": "2014-11-14T10:06:53-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9F601C2B-1DF3-4D0E-ADA4-BC9622ACA8FF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9F601C2B-1DF3-4D0E-ADA4-BC9622ACA8FF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-21T10:13:29-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9F601C2B-1DF3-4D0E-ADA4-BC9622ACA8FF",
        "title": "PROMIS SF v2.0 - Cognitive Function 6a",
        "status": "active",
        "date": "2016-03-21T10:13:29-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E07FD240-2DF5-480D-A130-69644A5F7804",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E07FD240-2DF5-480D-A130-69644A5F7804",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2020-04-02T13:01:37-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E07FD240-2DF5-480D-A130-69644A5F7804",
        "title": "Vision Function Questionnaire",
        "status": "active",
        "date": "2020-04-02T13:01:37-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B594B400-C390-4679-BCB8-EB5EF0ABAD23",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B594B400-C390-4679-BCB8-EB5EF0ABAD23",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B594B400-C390-4679-BCB8-EB5EF0ABAD23",
        "title": "Neuro-QoL SF Ped  v1.0 - Enojo",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5463216C-C1FE-4BFA-AE86-B7C8C6B15930",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5463216C-C1FE-4BFA-AE86-B7C8C6B15930",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:39-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5463216C-C1FE-4BFA-AE86-B7C8C6B15930",
        "title": "PROMIS SF v1.0 - Applied Cog Abilities 6a",
        "status": "active",
        "date": "2014-11-14T10:01:39-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/8AAA3222-43B6-4D2A-ADC5-93B941811E66",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "8AAA3222-43B6-4D2A-ADC5-93B941811E66",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:41:17-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/8AAA3222-43B6-4D2A-ADC5-93B941811E66",
        "title": "SCI-QOL Bank v1.0 - Satisfaction with SRA",
        "status": "active",
        "date": "2018-01-24T14:41:17-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/F9516DF1-8B18-47EB-BBC2-5734663C7740",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F9516DF1-8B18-47EB-BBC2-5734663C7740",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:23-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/F9516DF1-8B18-47EB-BBC2-5734663C7740",
        "title": "PROMIS Sexual Function Profile v1.0 - Female",
        "status": "active",
        "date": "2014-11-14T10:04:23-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9DCF2B6D-41B2-4827-90DB-7DC083EF1AED",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9DCF2B6D-41B2-4827-90DB-7DC083EF1AED",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9DCF2B6D-41B2-4827-90DB-7DC083EF1AED",
        "title": "Neuro-QoL Banco v1.0 - Estigma",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/21119F9A-5F4B-46A2-86E2-569D45F60240",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "21119F9A-5F4B-46A2-86E2-569D45F60240",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:39:27-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/21119F9A-5F4B-46A2-86E2-569D45F60240",
        "title": "SCI-QOL Bank v1.0 - Depression",
        "status": "active",
        "date": "2018-01-24T14:39:27-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5992A015-84B5-4C53-B591-EAEB06575105",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5992A015-84B5-4C53-B591-EAEB06575105",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-10-11T11:37:25-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5992A015-84B5-4C53-B591-EAEB06575105",
        "title": "PROMIS SF v1.0 - Positive Affect 15a",
        "status": "active",
        "date": "2018-10-11T11:37:25-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5EA0D052-2DD1-4B2E-8BFA-27D0FDF8EC23",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5EA0D052-2DD1-4B2E-8BFA-27D0FDF8EC23",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-01-12T12:17:10-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5EA0D052-2DD1-4B2E-8BFA-27D0FDF8EC23",
        "title": "NIH TB Vision-Related QOL Psychosocial Age 18+",
        "status": "active",
        "date": "2016-01-12T12:17:10-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3E375F51-354E-4450-9283-8620F1E3AEA5",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3E375F51-354E-4450-9283-8620F1E3AEA5",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-26T16:12:25-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3E375F51-354E-4450-9283-8620F1E3AEA5",
        "title": "PROMIS Ped SF v1.0-Family Relationships 4a",
        "status": "active",
        "date": "2018-09-26T16:12:25-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B233088E-256B-4E34-AC4D-3D12A3BBE03A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B233088E-256B-4E34-AC4D-3D12A3BBE03A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:37:02-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B233088E-256B-4E34-AC4D-3D12A3BBE03A",
        "title": "PROMIS Ped SF v1.0 - Sleep-Related Impairment 4a",
        "status": "active",
        "date": "2018-08-22T13:37:02-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3B67EC17-D281-48F3-AEA9-DB1667E78483",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3B67EC17-D281-48F3-AEA9-DB1667E78483",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:05:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3B67EC17-D281-48F3-AEA9-DB1667E78483",
        "title": "PROMIS SF v1.0-Anxiety 8a",
        "status": "active",
        "date": "2014-11-14T10:05:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/A8E62A3C-3196-44FD-9B76-26AE9A51B717",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "A8E62A3C-3196-44FD-9B76-26AE9A51B717",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-10-10T10:57:34-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/A8E62A3C-3196-44FD-9B76-26AE9A51B717",
        "title": "PROMIS SF v2.0 - Physical Function 10b",
        "status": "active",
        "date": "2016-10-10T10:57:34-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/DBE92586-E64D-428B-B5D8-194FAC4F984A",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "DBE92586-E64D-428B-B5D8-194FAC4F984A",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:33-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/DBE92586-E64D-428B-B5D8-194FAC4F984A",
        "title": "PROMIS SF v1.0 - Social Sat DSA 7a",
        "status": "active",
        "date": "2014-11-14T10:01:33-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/ED1775F4-CFCC-464B-9EFC-906E0701E9ED",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "ED1775F4-CFCC-464B-9EFC-906E0701E9ED",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T14:43:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/ED1775F4-CFCC-464B-9EFC-906E0701E9ED",
        "title": "SCI-QOL SF v1.0 - Ability to Part. in SRA SF10a",
        "status": "active",
        "date": "2018-01-24T14:43:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/08CE0478-277A-490C-99CA-DE0FD847ED5B",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "08CE0478-277A-490C-99CA-DE0FD847ED5B",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-02-27T17:20:49-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/08CE0478-277A-490C-99CA-DE0FD847ED5B",
        "title": "PROMIS Banco - Versión Padres v2.0 - Ansiedad",
        "status": "active",
        "date": "2019-02-27T17:20:49-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CAA82A94-8C8B-4EBC-867C-4924517AC494",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CAA82A94-8C8B-4EBC-867C-4924517AC494",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CAA82A94-8C8B-4EBC-867C-4924517AC494",
        "title": "PROMIS Banco v1.2 - Extremidades superiores",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/6697658D-9D3E-4BD8-932B-64753DCCE99D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "6697658D-9D3E-4BD8-932B-64753DCCE99D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-27T13:40:17-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/6697658D-9D3E-4BD8-932B-64753DCCE99D",
        "title": "PROMIS SF v2.0 -  Apoyo emocional 8a",
        "status": "active",
        "date": "2018-08-27T13:40:17-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/47BCA564-3DAD-4C1A-992F-197DC69BEF3D",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "47BCA564-3DAD-4C1A-992F-197DC69BEF3D",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-08T14:32:48-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/47BCA564-3DAD-4C1A-992F-197DC69BEF3D",
        "title": "PROMIS SF v1.0 - Smoking PsychSocExpect 6a AllSmk",
        "status": "active",
        "date": "2016-03-08T14:32:48-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/944C3CB4-0D34-4029-8EEC-35B640972302",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "944C3CB4-0D34-4029-8EEC-35B640972302",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-08-22T13:40:20-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/944C3CB4-0D34-4029-8EEC-35B640972302",
        "title": "PROMIS Ped SF v1.0 - Sleep Disturbance 8a",
        "status": "active",
        "date": "2018-08-22T13:40:20-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/FE099CD8-CDD2-4C88-BDF7-4AC8209436EF",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "FE099CD8-CDD2-4C88-BDF7-4AC8209436EF",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2019-01-07T10:46:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/FE099CD8-CDD2-4C88-BDF7-4AC8209436EF",
        "title": "NIH Toolbox Perceived Stress FF Age 18+ v2.0",
        "status": "active",
        "date": "2019-01-07T10:46:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E09E32C0-4D6C-4183-8A98-D65E6FE23CD8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E09E32C0-4D6C-4183-8A98-D65E6FE23CD8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:43-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E09E32C0-4D6C-4183-8A98-D65E6FE23CD8",
        "title": "PROMIS SF v1.0 Alcohol: Negative Expectancies 7a",
        "status": "active",
        "date": "2014-11-14T10:01:43-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/20C98C3C-6302-472C-919C-93686EA469C9",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "20C98C3C-6302-472C-919C-93686EA469C9",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:08-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/20C98C3C-6302-472C-919C-93686EA469C9",
        "title": "PROMIS SF v1.0 - Applied Cog Abilities 8a",
        "status": "active",
        "date": "2014-11-14T10:01:08-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/E87BAC2A-D658-4E80-87F8-E891152DBC7C",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "E87BAC2A-D658-4E80-87F8-E891152DBC7C",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:01:16-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/E87BAC2A-D658-4E80-87F8-E891152DBC7C",
        "title": "PROMIS SF v1.0 - Pain Behavior 7a",
        "status": "active",
        "date": "2014-11-14T10:01:16-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9A7E459B-D141-4E3B-80A7-77ECB3F3D88E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9A7E459B-D141-4E3B-80A7-77ECB3F3D88E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9A7E459B-D141-4E3B-80A7-77ECB3F3D88E",
        "title": "Neuro-QoL SF Ped  v2.1 - Agotamiento",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/7B1EF457-E187-4E47-8179-FFF821A72584",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "7B1EF457-E187-4E47-8179-FFF821A72584",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:04:27-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/7B1EF457-E187-4E47-8179-FFF821A72584",
        "title": "PROMIS SF v1.0-Depression 6a",
        "status": "active",
        "date": "2014-11-14T10:04:27-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/3B146F68-48EA-47D8-BD08-3F751F9B6039",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3B146F68-48EA-47D8-BD08-3F751F9B6039",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-01-24T15:05:54-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/3B146F68-48EA-47D8-BD08-3F751F9B6039",
        "title": "TBI-QOL SF v1.0 - Fatigue SF10a",
        "status": "active",
        "date": "2018-01-24T15:05:54-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4734F829-A417-4F85-A588-8FE67A912BA4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4734F829-A417-4F85-A588-8FE67A912BA4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-09-26T16:12:43-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4734F829-A417-4F85-A588-8FE67A912BA4",
        "title": "PROMIS Ped SF v1.0-Family Relationships 8a",
        "status": "active",
        "date": "2018-09-26T16:12:43-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/82A96E84-B1DF-4105-A901-658E25242EC4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "82A96E84-B1DF-4105-A901-658E25242EC4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:06:47-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/82A96E84-B1DF-4105-A901-658E25242EC4",
        "title": "Neuro-QOL Bank v1.0 - Anxiety",
        "status": "active",
        "date": "2014-11-14T10:06:47-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/154D0273-C3F6-4BCE-8885-3194D4CC4596",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "154D0273-C3F6-4BCE-8885-3194D4CC4596",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2014-11-14T10:03:07-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/154D0273-C3F6-4BCE-8885-3194D4CC4596",
        "title": "PROMIS Bank v1.1 - Pain Interference",
        "status": "active",
        "date": "2014-11-14T10:03:07-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/9CECF7B5-7C21-4662-A84F-4267B39FBFF3",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9CECF7B5-7C21-4662-A84F-4267B39FBFF3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/9CECF7B5-7C21-4662-A84F-4267B39FBFF3",
        "title": "PROMIS SF v2.0 - Capacidad para participar en roles y actividades sociales 4a",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/5F7C88F3-464B-4BF3-A064-FB7D71F2762E",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "5F7C88F3-464B-4BF3-A064-FB7D71F2762E",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-03-01T12:35:31-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/5F7C88F3-464B-4BF3-A064-FB7D71F2762E",
        "title": "PROMIS Banco Ped  v1.1 - Ansiedad",
        "status": "active",
        "date": "2017-03-01T12:35:31-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/4E2E4DB2-A17A-4615-B4C1-31B804A3E40F",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "4E2E4DB2-A17A-4615-B4C1-31B804A3E40F",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2016-03-09T11:54:22-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/4E2E4DB2-A17A-4615-B4C1-31B804A3E40F",
        "title": "PROMIS Ped SF v1.0 - Life Satisfaction 4a",
        "status": "active",
        "date": "2016-03-09T11:54:22-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/CEB844CD-68BA-4DA4-80A1-4107CDF0DDB8",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "CEB844CD-68BA-4DA4-80A1-4107CDF0DDB8",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:35:13-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/CEB844CD-68BA-4DA4-80A1-4107CDF0DDB8",
        "title": "PROMIS SF - Versión Padres v1.0 - Satisfacción con la vida 8a",
        "status": "active",
        "date": "2018-11-15T16:35:13-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/D5036A18-E520-4FD1-8C01-0597AC47BFC4",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "D5036A18-E520-4FD1-8C01-0597AC47BFC4",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2017-11-02T11:42:42-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/D5036A18-E520-4FD1-8C01-0597AC47BFC4",
        "title": "ASCQ-Me Pain Impact SF v2.0",
        "status": "active",
        "date": "2017-11-02T11:42:42-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/1FBD620F-7508-4A47-8429-CDE1BBCA96DC",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "1FBD620F-7508-4A47-8429-CDE1BBCA96DC",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2018-11-15T16:39:40-08:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/1FBD620F-7508-4A47-8429-CDE1BBCA96DC",
        "title": "NIH Toolbox Perceived Stress Parent Report CAT Ages 8-12 v2.0",
        "status": "active",
        "date": "2018-11-15T16:39:40-08:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    },
    {
      "fullUrl": "/2018-10/Questionnaire/B5A36C02-7C33-496D-BAE9-CB9674E82407",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "B5A36C02-7C33-496D-BAE9-CB9674E82407",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2015-06-26T15:10:59-07:00"
        },
        "url": "https://calv-apppcri01/AC_API_Test/2018-10/Questionnaire/B5A36C02-7C33-496D-BAE9-CB9674E82407",
        "title": "Neuro-QoL Banco v1.0 - Ansiedad",
        "status": "active",
        "date": "2015-06-26T15:10:59-07:00",
        "subjectType": [
          "Patient"
        ],
        "search": {
          "mode": "match"
        }
      }
    }
  ]
}
