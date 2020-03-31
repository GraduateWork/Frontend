export interface BaseEvent {
  eventId: number;
  type: string;
  title: string;
  startTime: string;
  endTime: string;
  imgSrc: string;
  description: string;
  details: {
    [key: string]: string;
  };
  favorite: boolean;
}
