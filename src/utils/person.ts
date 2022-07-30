export const formatTierName = (tierName: string, tierNumber: number) =>
  !tierNumber ? tierName : `${tierName} ${tierNumber}`;
