import { Condition, Hero, Status } from "@/types/hero";
import { skills } from "./skills";

const sharedInitialHeroState: Pick<
  Hero,
  | "class"
  | "level"
  | "adventure"
  | "combat"
  | "conditions"
  | "ancestry"
  | "name"
  | "skills"
> = {
  name: "Tami Timi",
  class: "Censor",
  ancestry: "Wode Elf",
  level: 1,
  adventure: { victories: 6, heroTokens: 3 },
  combat: {
    size: 1,
    speed: 5,
    stability: 3,
    disengage: 1,
  },
  conditions: new Map<Condition, Status>(),
  skills: {
    crafting: new Set<string>(skills.crafting),
    exploration: new Set<string>(skills.exploration),
    interpersonal: new Set<string>(skills.interpersonal),
    intrigue: new Set<string>(skills.intrigue),
    lore: new Set<string>(skills.lore),
  },
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
