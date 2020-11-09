ns//Configuration File
//Hapi FHIR server base URL
//var baseurl="https://calv-easiproapp.med.usc.edu:8082/baseDstu3/";
//var baseurl="https://calv-easiprox.med.usc.edu/fhir3/baseDstu3/";

//var baseurl_easipro="https://calv-easiprox.med.usc.edu/easipro/";

var baseurl="https://fhir3-stage.elimuinformatics.com/baseDstu3/";

var baseurl_acapi ="https://assessmentcenter.net/ac_api/";

var baseurl_AC_API="https://calv-easiprox.med.usc.edu/AC_API_Test/";

//var baseurl_AC_API="https://assessmentcenter.net/ac_api/";

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
                "description": "TBI-QOL Bank v1.0 - Depression, t-score: 60",
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
        
