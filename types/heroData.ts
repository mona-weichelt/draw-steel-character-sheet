export type Class =
  | "Censor"
  | "Conduit"
  | "Elementalist"
  | "Fury"
  | "Null"
  | "Shadow"
  | "Tactician"
  | "Talent"
  | "Troubador";

export type Size = number | "1S" | "1M" | "1L";

export type Condition =
  | "Bleeding"
  | "Dazed"
  | "Frightened"
  | "Grabbed"
  | "Restrained"
  | "Slowed"
  | "Taunted"
  | "Weakened";

export type Status = "Permanent" | "End of turn" | "Save ends";
export type Ancestry =
  | "Devil"
  | "Dragon Knight"
  | "Dwarf"
  | "Wode Elf"
  | "High Elf"
  | "Hakaan"
  | "Human"
  | "Memonek"
  | "Orc"
  | "Polder"
  | "Revenant"
  | "Time Raider";

export type HeroData = {
  name?: string;
  ancestry?: Ancestry;
  class?: Class;
  level?: number;
  stamina: {
    current: number;
    temporary: number;
    maximum: number;
    winded: number;
    recovery: number;
  };
  recoveries: {
    current: number;
    maximum: number;
  };
  adventure: { victories: number; heroTokens: number };
  combat: {
    size: Size;
    speed: number;
    disengage: number;
    stability: number;
  };
  conditions: Map<Condition, Status>;
};

export type HeroDataAction =
  | { type: "Set Stamina"; payload: HeroData["stamina"] }
  | { type: "Set Current Stamina"; payload: HeroData["stamina"]["current"] }
  | {
      type: "Set Maximum Stamina";
      payload: HeroData["stamina"]["maximum"];
    }
  | { type: "Set Recoveries"; payload: HeroData["recoveries"] }
  | { type: "Use Recovery" }
  | {
      type: "Set Temporary Stamina";
      payload: HeroData["stamina"]["temporary"];
    };
