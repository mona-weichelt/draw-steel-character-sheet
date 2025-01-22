import { Ability } from "@/types/abilities";
import { Condition, Hero, Status } from "@/types/hero";
import { conduitTriggered1 } from "./abilities/conduit";
import { elementalistSignature1 } from "./abilities/elementalist";
import { talentHeroic504 } from "./abilities/talent";

const sharedInitialHeroState: Omit<Hero, "stamina" | "recoveries"> = {
  name: "Tami Timi",
  class: "Censor",
  ancestry: "Wode Elf",
  level: 1,
  characteristics: {
    might: 2,
    agility: 1,
    reason: -1,
    intuition: 1,
    presence: 2,
  },
  adventure: { victories: 6, heroTokens: 3 },
  combat: {
    size: 1,
    speed: 5,
    stability: 3,
    disengage: 1,
    heroicResource: {
      name: "Zeal",
      amount: 0,
    },
    surges: 0,
  },
  abilities: new Set<Ability>([
    elementalistSignature1,
    talentHeroic504,
    conduitTriggered1,
  ]),
  conditions: new Map<Condition, Status>(),
  skills: {
    crafting: new Set<string>(["Blacksmithing"]),
    exploration: new Set<string>(["Drive", "Endurance", "Lift"]),
    interpersonal: new Set<string>(["Brag", "Flirt", "Gamble", "Lead"]),
    intrigue: new Set<string>(),
    lore: new Set<string>(["Criminal Underworld", "Psionics", "Timescape"]),
  },
  tests: {
    edge: new Set<string>(["Track", "Endure", "Psionics"]),
    doubleEdge: new Set<string>(),
    bane: new Set<string>(),
    doubleBane: new Set<string>(),
  },
  languages: new Set<string>([
    "Caelian",
    "Tholl",
    "Zaliac",
    "Yllyric",
    "High Kuric",
  ]),
  wealth: 3,
  renown: 5,
};

export const initialHeroStateShort: Hero = {
  ...sharedInitialHeroState,
  stamina: {
    current: 16,
    temporary: 14,
    maximum: 30,
    winded: 15,
    recovery: 10,
  },
  recoveries: {
    current: 6,
    maximum: 8,
  },
};

export const initialHeroStateLong: Hero = {
  ...sharedInitialHeroState,
  stamina: {
    current: 51,
    temporary: 142,
    maximum: 300,
    winded: 150,
    recovery: 100,
  },
  recoveries: {
    current: 9,
    maximum: 17,
  },
};
