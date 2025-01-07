type DateTime = string;

type NormalizedRating = 'AAA' | 'AA' | 'A' | 'BBB' | 'BB' | 'B' | 'NA/NR';

export interface ScenarioMetadata {
  pricingUnit: string;
  pricingSpeedGroup: string;
  ppcCurve: string;
  ppcCurve_terse: string;
  ppcCurve_full: number | null;
  abs1mo: number | null;
  abs3mo: number | null;
  abs6mo: number | null;
}


export interface BondInfo {
  bondName: string;
  tranche: string;
  dealName: string;
  series: string | null;
  vintage: string;
  deal: string;
  shelf: string;
  categoryI1: string;
  categoryI2: string;
  categoryI3?: string;
  tabGroup: string;
  securityType: string;
  category: string;
  dealType: string;
  exchange: string;
  isLegacy: boolean;
  isSeasoned: boolean;
  displayRating: string;
  normalizedRating: NormalizedRating;
  hoverInfo: string;

  dealType2: string;

  LTV?: string;
}



export interface ScenarioResult {
  scenarioIdentifier: string;
  spreadUse: number | null;
  yield: number | null;
  wal: number | null;
}

export interface BaseTrade {
  id: number;
  dateTime: DateTime;
  price: number;
  quantity: number;
  side: string;
  tradeType?: string;
  sequence: number;
  correctedBy?: number | null;
  cancelledBy?: number | null;
  createdAt: string;
  isValid: boolean;
  updatedAt: string;

  cusip: string;

  hasScenarios?: boolean;

  scenarioMetadata?: ScenarioMetadata;
}

export interface Trade extends BaseTrade, BondInfo {
  scenarioResult: ScenarioResult[];
}
