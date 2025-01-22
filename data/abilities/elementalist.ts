import { Ability, AbilityKeyword, DistanceType } from "@/types/abilities";
import { Characteristic, Characteristics } from "@/types/core";

export const elementalistSignature1: Ability = (
  characteristics,
  modifiers: number[] = []
) => {
  const effect = (baseDamage: number) =>
    `${baseDamage + characteristics.reason + modifiers.reduce((a, b) => a + b)} corruption damage`;

  return {
    id: "elementalist-signature-1",
    name: "Afflict a Bountiful Decay",
    flavour:
      "Your curse causes a foe's fleshto rot off as spores that aid your allies.",
    keywords: new Set<AbilityKeyword>([
      "green",
      "rot",
      "magic",
      "ranged",
      "strike",
    ]),
    type: "action",
    distance: { ranged: 10 },
    target: "One creature",
    roll: {
      characteristics: new Set<Characteristic>(["reason"]),
      results: {
        1: effect(2),
        2: effect(4),
        3: effect(6),
      },
    },
    effects: [
      {
        position: "after roll",
        description:
          "You or one ally within distance can end one effect that is ended by a saving throw or that ends at the end of that creature’s turn.",
      },
    ],
  };
};
