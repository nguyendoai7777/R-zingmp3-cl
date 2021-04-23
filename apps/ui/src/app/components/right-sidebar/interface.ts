export interface SongControl {
  chooseThisSong?: () => any;
  thumb: string;
  songName: string;
  songArtist: string;
  index?: number;
  isActive?: boolean;
}
