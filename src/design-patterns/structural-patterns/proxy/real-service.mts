import { Service } from "./index.mjs";

export default class RealService implements Service {
  async listVideos(): Promise<string[]> {
    console.log("📡 Fetching video list from YouTube...");
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return ["video1", "video2", "video3"];
  }

  async getVideoInfo(id: string): Promise<string> {
    console.log(`📡 Fetching info for video ID: ${id}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return `Info about video ${id}`;
  }

  async downloadVideo(id: string): Promise<void> {
    console.log(`⬇️ Downloading video ID: ${id}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(`✅ Downloaded video ${id}`);
  }
}
