import { IPerson } from "../@types/person";

export const formatTierName = (tierName: string, tierNumber: number) =>
  !tierNumber ? tierName : `${tierName} ${tierNumber}`;

export const generatePoints = (personCurrentPoints: number) => {
  if (personCurrentPoints < 500) return Math.round(500/30);
  else if (personCurrentPoints < 970) return Math.round(970/50);
  else if (personCurrentPoints < 1440) return Math.round(1440/70);
  else if (personCurrentPoints < 1910) return Math.round(1910/90);
  else if (personCurrentPoints < 2410) return Math.round(2410/110);
  else if (personCurrentPoints < 2910) return Math.round(2910/130);
  else if (personCurrentPoints < 3470) return Math.round(3470/150);
  else if (personCurrentPoints < 4000) return Math.round(4000/170);
  return Math.round(personCurrentPoints/200);
}

export const personNextTierProgress = (points: number = 0, nextPoints: number = 30) =>
  Math.floor((nextPoints - points) / 100);
