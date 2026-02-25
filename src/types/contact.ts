export interface ScheduleDay {
  label: string;
  hours: string;
}

export interface ContactLinks {
 // whatsappNumber: string;
  //whatsappMessageDefault: string;
  googleMapsUrl: string;
  menuUrl: string;
  instagramUrl: string;
  facebookUrl?: string;
  ecosUrl?: string;
  address: string;
  hours: ScheduleDay[];
}
