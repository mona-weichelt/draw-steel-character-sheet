export type Characteristic =
  | "might"
  | "agility"
  | "reason"
  | "intuition"
  | "presence";

export type Characteristics = Record<Characteristic, number>;

export enum CharacteristicShorthand {
  might = "MGT",
  agility = "AGL",
  reason = "REA",
  intuition = "INU",
  presence = "PRS",
}
