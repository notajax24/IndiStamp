export interface StampDutySlab {
  upTo: number | 'infinity';
  rate: number;
}

export interface RegistrationTier {
  upTo: number | 'infinity';
  fee: number;
}

export interface StampDutyRulesDetail {
  male?: number;
  female?: number;
  joint?: number;
  slabs?: StampDutySlab[];
  baseRate?: number;
}

export interface StampDutyRules {
  male?: number;
  female?: number;
  joint?: number;
  baseRate?: number;
  slabs?: StampDutySlab[];
  urban?: StampDutyRulesDetail;
  rural?: StampDutyRulesDetail;
}

export interface RegistrationRules {
  rate?: number;
  capAmount?: number;
  tiered?: boolean;
  tiers?: RegistrationTier[];
  womenConcession?: {
    upTo: number;
    rate: number;
  };
}

export interface AdditionalLevies {
  transferDuty?: number;
  additionalStampDuty?: number;
  surcharge?: number;
  cessPercentageOnStampDuty?: number;
  surchargeOnStampDuty?: number;
  municipalCess?: number;
  janpadCess?: number;
  metroCess?: number;
  sicCess?: number;
  pidbCess?: number;
  cowCessOnStampDuty?: number;
}

export interface StampDutyState {
  state: string;
  slug: string;
  stampDutyRules: StampDutyRules;
  registrationRules: RegistrationRules;
  additionalLevies?: AdditionalLevies;
  notes?: string;
}

export const stampDutyRates: StampDutyState[] = [
  {
    "state": "Andhra Pradesh",
    "slug": "andhra-pradesh",
    "stampDutyRules": {
      "male": 5.0,
      "female": 5.0,
      "joint": 5.0
    },
    "registrationRules": {
      "rate": 1.0
    },
    "additionalLevies": {
      "transferDuty": 1.5
    },
    "notes": "Transfer duty applies in urban areas."
  },
  {
    "state": "Arunachal Pradesh",
    "slug": "arunachal-pradesh",
    "stampDutyRules": {
      "baseRate": 6.0
    },
    "registrationRules": {
      "rate": 1.0
    }
  },
  {
    "state": "Assam",
    "slug": "assam",
    "stampDutyRules": {
      "male": 6.0,
      "female": 5.0,
      "joint": 5.5
    },
    "registrationRules": {
      "rate": 1.0,
      "capAmount": 30000
    }
  },
  {
    "state": "Bihar",
    "slug": "bihar",
    "stampDutyRules": {
      "male": 6.0,
      "female": 5.7,
      "joint": 5.8
    },
    "registrationRules": {
      "rate": 2.0
    },
    "additionalLevies": {
      "additionalStampDuty": 2.0
    }
  },
  {
    "state": "Chhattisgarh",
    "slug": "chhattisgarh",
    "stampDutyRules": {
      "male": 5.0,
      "female": 4.0,
      "joint": 4.5
    },
    "registrationRules": {
      "rate": 4.0
    }
  },
  {
    "state": "Delhi",
    "slug": "delhi",
    "stampDutyRules": {
      "male": 6.0,
      "female": 4.0,
      "joint": 5.0
    },
    "registrationRules": {
      "rate": 1.0
    },
    "additionalLevies": {
      "transferDuty": 1.0
    },
    "notes": "1% MCD Transfer Duty applies on properties above Rs 25 Lakhs."
  },
  {
    "state": "Goa",
    "slug": "goa",
    "stampDutyRules": {
      "slabs": [
        {
          "upTo": 5000000,
          "rate": 3.0
        },
        {
          "upTo": 7500000,
          "rate": 4.0
        },
        {
          "upTo": 10000000,
          "rate": 4.5
        },
        {
          "upTo": "infinity",
          "rate": 5.0
        }
      ]
    },
    "registrationRules": {
      "rate": 1.0
    },
    "notes": "Goa uses a slab system based on property value."
  },
  {
    "state": "Gujarat",
    "slug": "gujarat",
    "stampDutyRules": {
      "male": 4.9,
      "female": 4.9,
      "joint": 4.9
    },
    "registrationRules": {
      "rate": 1.0
    },
    "additionalLevies": {
      "surcharge": 1.0
    }
  },
  {
    "state": "Haryana",
    "slug": "haryana",
    "stampDutyRules": {
      "urban": {
        "male": 7.0,
        "female": 5.0,
        "joint": 6.0
      },
      "rural": {
        "male": 5.0,
        "female": 3.0,
        "joint": 4.0
      }
    },
    "registrationRules": {
      "tiered": true,
      "tiers": [
        {
          "upTo": 50000,
          "fee": 100
        },
        {
          "upTo": 500000,
          "fee": 1000
        },
        {
          "upTo": 1000000,
          "fee": 5000
        },
        {
          "upTo": 2500000,
          "fee": 10000
        },
        {
          "upTo": "infinity",
          "fee": 50000
        }
      ]
    }
  },
  {
    "state": "Himachal Pradesh",
    "slug": "himachal-pradesh",
    "stampDutyRules": {
      "male": 6.0,
      "female": 4.0,
      "joint": 5.0
    },
    "registrationRules": {
      "rate": 2.0
    }
  },
  {
    "state": "Jharkhand",
    "slug": "jharkhand",
    "stampDutyRules": {
      "baseRate": 4.0
    },
    "registrationRules": {
      "rate": 3.0
    }
  },
  {
    "state": "Karnataka",
    "slug": "karnataka",
    "stampDutyRules": {
      "slabs": [
        {
          "upTo": 2000000,
          "rate": 2.0
        },
        {
          "upTo": 4500000,
          "rate": 3.0
        },
        {
          "upTo": "infinity",
          "rate": 5.0
        }
      ]
    },
    "registrationRules": {
      "rate": 2.0
    },
    "additionalLevies": {
      "cessPercentageOnStampDuty": 10.0,
      "surchargeOnStampDuty": 2.0
    },
    "notes": "Registration fee is 2%. Cess is calculated as 10% of the Stamp Duty amount, not property value."
  },
  {
    "state": "Kerala",
    "slug": "kerala",
    "stampDutyRules": {
      "baseRate": 8.0
    },
    "registrationRules": {
      "rate": 2.0
    }
  },
  {
    "state": "Madhya Pradesh",
    "slug": "madhya-pradesh",
    "stampDutyRules": {
      "baseRate": 5.0
    },
    "registrationRules": {
      "rate": 3.0
    },
    "additionalLevies": {
      "municipalCess": 3.0,
      "janpadCess": 1.0
    },
    "notes": "Additional cess makes the effective rate much higher (up to 9.5% in urban areas)."
  },
  {
    "state": "Maharashtra",
    "slug": "maharashtra",
    "stampDutyRules": {
      "male": 6.0,
      "female": 5.0,
      "joint": 5.5
    },
    "registrationRules": {
      "rate": 1.0,
      "capAmount": 30000
    },
    "additionalLevies": {
      "metroCess": 1.0
    },
    "notes": "Metro cess of 1% is included in the male 6% rate for urban areas like Pune/Mumbai."
  },
  {
    "state": "Odisha",
    "slug": "odisha",
    "stampDutyRules": {
      "male": 5.0,
      "female": 4.0,
      "joint": 4.5
    },
    "registrationRules": {
      "rate": 2.0
    }
  },
  {
    "state": "Punjab",
    "slug": "punjab",
    "stampDutyRules": {
      "male": 7.0,
      "female": 5.0,
      "joint": 6.0
    },
    "registrationRules": {
      "rate": 1.0
    },
    "additionalLevies": {
      "sicCess": 1.0,
      "pidbCess": 1.0
    }
  },
  {
    "state": "Rajasthan",
    "slug": "rajasthan",
    "stampDutyRules": {
      "male": 6.0,
      "female": 5.0,
      "joint": 5.5
    },
    "registrationRules": {
      "rate": 1.0
    },
    "additionalLevies": {
      "cowCessOnStampDuty": 20.0
    },
    "notes": "20% surcharge (Cow Cess) is applied on the base stamp duty amount."
  },
  {
    "state": "Tamil Nadu",
    "slug": "tamil-nadu",
    "stampDutyRules": {
      "baseRate": 7.0
    },
    "registrationRules": {
      "rate": 4.0,
      "womenConcession": {
        "upTo": 1000000,
        "rate": 3.0
      }
    }
  },
  {
    "state": "Telangana",
    "slug": "telangana",
    "stampDutyRules": {
      "baseRate": 5.5
    },
    "registrationRules": {
      "rate": 0.5
    },
    "additionalLevies": {
      "transferDuty": 1.5
    }
  },
  {
    "state": "Uttar Pradesh",
    "slug": "uttar-pradesh",
    "stampDutyRules": {
      "male": 7.0,
      "female": 6.0,
      "joint": 6.5
    },
    "registrationRules": {
      "rate": 1.0
    },
    "notes": "Female concession (1%) is typically applicable only up to a property value of Rs 10 Lakhs in UP."
  },
  {
    "state": "Uttarakhand",
    "slug": "uttarakhand",
    "stampDutyRules": {
      "male": 5.0,
      "female": 3.75,
      "joint": 4.375
    },
    "registrationRules": {
      "rate": 2.0
    }
  },
  {
    "state": "West Bengal",
    "slug": "west-bengal",
    "stampDutyRules": {
      "urban": {
        "slabs": [
          {
            "upTo": 4000000,
            "rate": 6.0
          },
          {
            "upTo": "infinity",
            "rate": 7.0
          }
        ]
      },
      "rural": {
        "slabs": [
          {
            "upTo": 4000000,
            "rate": 5.0
          },
          {
            "upTo": "infinity",
            "rate": 6.0
          }
        ]
      }
    },
    "registrationRules": {
      "rate": 1.0
    }
  }
]