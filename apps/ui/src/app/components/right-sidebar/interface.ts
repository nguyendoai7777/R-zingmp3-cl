export interface SongProfile {
  chooseThisSong?: () => any;
  thumb: string;
  songName: string;
  songArtist: ArtistInformation[];
  index?: number;
  isActive?: boolean;
}

export interface ArtistInformation {
  artistName: string;
  profileUrl: string;
  songUrl?: string;
}
