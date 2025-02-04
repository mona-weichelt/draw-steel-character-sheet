import { Hero } from "@/types/hero";

export const skills = {
  crafting: [
    "Alchemy",
    "Architecture",
    "Blacksmithing",
    "Fletching",
    "Forgery",
    "Jewelry",
    "Mechanics",
    "Tailoring",
  ],
  exploration: [
    "Climb",
    "Drive",
    "Endurance",
    "Gymnastics",
    "Heal",
    "Jump",
    "Lift",
    "Navigate",
    "Ride",
    "Swim",
  ],
  interpersonal: [
    "Brag",
    "Empathize",
    "Flirt",
    "Gamble",
    "Handle Animals",
    "Interrogate",
    "Intimidate",
    "Lead",
    "Lie",
    "Music",
    "Persuade",
    "Read Person",
  ],
  intrigue: [
    "Alertness",
    "Conceal Object",
    "Disguise",
    "Eavesdrop",
    "Escape Artist",
    "Hide",
    "Performance",
    "Pick Lock",
    "Pick Pocket",
    "Sabotage",
    "Search",
    "Sneak",
    "Track",
  ],
  lore: [
    "Culture",
    "Criminal Underworld",
    "History",
    "Magic",
    "Monsters",
    "Nature",
    "Psionics",
    "Religion",
    "Rumors",
    "Society",
    "Timescape",
  ],
};

export const getAllSkills = (skills: Hero["skills"]) => {
  return new Set<string>([
    ...skills.crafting,
    ...skills.exploration,
    ...skills.interpersonal,
    ...skills.intrigue,
    ...skills.lore,
  ]);
};
