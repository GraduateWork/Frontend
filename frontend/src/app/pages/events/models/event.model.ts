export interface Event {
  name: string;
  startTime: number;
  endTime: number | null;
  pictureUrl: string;
  tags: string[];
}
