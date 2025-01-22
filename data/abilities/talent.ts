import { Ability, AbilityKeyword, DistanceType } from "@/types/abilities";
import { Characteristic } from "@/types/core";

export const talentHeroic504: Ability = () => {
  return {
    id: "talent-heroic-5-04",
    name: "Perfect Clarity",
    flavour: "You clear the mind of nothing but the goal",
    keywords: new Set<AbilityKeyword>(["psionic", "ranged", "telepathy"]),
    type: "maneuver",
    distance: { ranged: 10 },
    target: "Self or one ally",
    effects: [
      {
        position: "after roll",
        description:
          "Until the start of your next turn, the target gains a +3 bonus to speed, and they have a double edge on the next power roll they make. If the target gets a tier 3 result on that roll, you gain 1 clarity.",
      },
    ],
    strained:
      "You take 1d6 damage, and you can't use triggered actions (save ends).",
  };
};
