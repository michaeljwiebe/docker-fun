export type whoisRecord = {
   "WhoisRecord": {
      "domainName": string;
      "parseCode": number;
      "audit": {
         "createdDate": string;
         "updatedDate": string;
      },
      "registrarName": string;
      "registrarIANAID": string;
      "registryData": {
         "createdDate": string;
         "updatedDate": string;
         "expiresDate": string;
         "registrant": {
            "state": string;
            "country": string;
            "countryCode": string;
            "rawText": string;
         },
         "domainName": string;
         "nameServers": {
            "rawText": string;
            "hostNames": string[];
            "ips": string[];
         },
         "status": string;
         "rawText": string;
         "parseCode": number;
         "header": string;
         "strippedText": string;
         "footer": string;
         "audit": {
            "createdDate": string;
            "updatedDate": string;
         },
         "customField1Name": string;
         "customField1Value": string;
         "registrarName": string;
         "registrarIANAID": string;
         "createdDateNormalized": string;
         "updatedDateNormalized": string;
         "expiresDateNormalized": string;
         "customField2Name": string;
         "customField3Name": string;
         "customField2Value": string;
         "customField3Value": string;
         "whoisServer": string;
      },
      "domainAvailability": string;
      "contactEmail": string;
      "domainNameExt": string;
      "estimatedDomainAge": number;
   }
}

export type error = {
  "ErrorMessage": {
    "errorCode": string;
    "msg": string;
  }
}