export interface CreatePersonParams {
  name: string;
  profilePic: string;
}

export interface IPerson {
  id: string;
  name: string;
  points: number;
  createdAt: string;
  updatedAt: string;
  tierName: string;
  tierNumber: number;
  tierPicURL: string;
  nextTierPoints: number;
  userId: string;
  profilePic: string;
}
