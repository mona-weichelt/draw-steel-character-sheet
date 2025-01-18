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

export type Hero = {
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
  skills: {
    crafting: Set<string>;
    exploration: Set<string>;
    interpersonal: Set<string>;
    intrigue: Set<string>;
    lore: Set<string>;
  };
  tests: {
    edge: Set<string>;
    doubleEdge: Set<string>;
    bane: Set<string>;
    doubleBane: Set<string>;
  };
  languages: Set<string>;
};

export type SkillGroup =
  | "crafting"
  | "exploration"
  | "interpersonal"
  | "intrigue"
  | "lore";

export type HeroAction =
  | { type: "Reset Short" }
  | { type: "Reset Long" }
  | { type: "Set Stamina"; payload: Hero["stamina"] }
  | { type: "Set Current Stamina"; payload: Hero["stamina"]["current"] }
  | { type: "Take Damage"; payload: Hero["stamina"]["current"] }
  | {
      type: "Set Maximum Stamina";
      payload: Hero["stamina"]["maximum"];
    }
  | { type: "Set Recoveries"; payload: Hero["recoveries"] }
  | { type: "Use Recovery" }
  | {
      type: "Set Temporary Stamina";
      payload: Hero["stamina"]["temporary"];
    };
