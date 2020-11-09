{
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
}
