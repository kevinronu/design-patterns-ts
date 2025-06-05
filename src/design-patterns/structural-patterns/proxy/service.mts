export default interface Service {
  listVideos(): Promise<string[]>;
  getVideoInfo(id: string): Promise<string>;
  downloadVideo(id: string): Promise<void>;
}
