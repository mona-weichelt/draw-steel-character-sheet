import { ReactNode } from "react";
import { Characteristic, Characteristics } from "./core";

export type AbilityType =
  | "action"
  | "maneuver"
  | "free maneuver"
  | "triggered"
  | "free triggered";

export type Discipline =
  | "animapathy"
  | "chronopathy"
  | "cryokinesis"
  | "metamorphosis"
  | "pyrokinesis"
  | "resopathy"
  | "telekinesis"
  | "telepathy";

export type Element =
  | "air"
  | "earth"
  | "fire"
  | "water"
  | "green"
  | "rot"
  | "void";

export type AbilityKeyword =
  | "signature"
  | "heroic"
  | "strike"
  | "melee"
  | "ranged"
  | "weapon"
  | "magic"
  | "psionic"
  | "area"
  | Element
  | Discipline;

export type DistanceType = "melee" | "ranged";

export type RollResult = ReactNode | string;

export type AbilityCost = {
  base?: number;
  optional?: { cost?: number; effect: string }[];
};

export type Ability = (
  characteristics: Characteristics,
  modifiers?: number[]
) => {
  id: string;
  name: string;
  flavour: string;
  keywords: Set<AbilityKeyword>;
  type: AbilityType;
  cost?: AbilityCost;
  distance: Partial<Record<DistanceType, number>>;
  target: string;
  trigger?: string;
  roll?: {
    characteristics: Set<Characteristic>;
    results: {
      1: RollResult;
      2: RollResult;
      3: RollResult;
    };
  };
  effects: {
    position: "before roll" | "after roll";
    description: string;
    label?: string;
  }[];
  strained?: string;
  persistent?: {
    cost: number;
    effect: string;
  };
  onUse?: () => void;
};
