import { Ability, AbilityKeyword } from "@/types/abilities";

export const conduitTriggered1: Ability = () => {
  return {
    id: "conduit-triggered-1",
    name: "Word of Guidance",
    flavour: "You invigorate an attacking ally with divine energy.",
    keywords: new Set<AbilityKeyword>(["magic", "ranged"]),
    type: "triggered",
    trigger:
      "The target makes an ability power roll for an ability that deals damage.",
    cost: {
      optional: [{ cost: 1, effect: "The power roll gains a double edge." }],
    },
    distance: { ranged: 10 },
    target: "One ally",
    effects: [
      {
        position: "after roll",
        description: "The power roll gains an edge.",
      },
    ],
  };
};
