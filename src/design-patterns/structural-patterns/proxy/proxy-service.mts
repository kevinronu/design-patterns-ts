import { Service } from "./index.mjs";

// 🧰 Proxy that adds caching and periodic cleanup
export default class ProxyService implements Service {
  private service: Service;
  private listCache: string[] | null = null;
  private videoCache: Map<string, string> = new Map();
  private cacheTTL: number; // Time-to-live in milliseconds
  private cleanupIntervalId: ReturnType<typeof setInterval>;

  constructor(service: Service, cacheTTL: number = 300000) {
    this.service = service;
    this.cacheTTL = cacheTTL;

    // 🕒 Set up periodic cache cleanup
    this.cleanupIntervalId = setInterval(() => this.cleanup(), this.cacheTTL);
  }

  async listVideos(): Promise<string[]> {
    if (!this.listCache) {
      this.listCache = await this.service.listVideos();
    } else {
      console.log("✅ Returning cached video list");
    }

    return this.listCache;
  }

  async getVideoInfo(id: string): Promise<string> {
    if (!this.videoCache.has(id)) {
      const info = await this.service.getVideoInfo(id);
      this.videoCache.set(id, info);
    } else {
      console.log(`✅ Returning cached info for video ID: ${id}`);
    }

    return this.videoCache.get(id)!;
  }

  async downloadVideo(id: string): Promise<void> {
    await this.service.downloadVideo(id);
  }

  // 🧹 Clears the caches
  private cleanup(): void {
    console.log("🧹 Cleaning up caches...");
    this.listCache = null;
    this.videoCache.clear();
  }

  // 🛑 Call this method to stop the cleanup interval when it's no longer needed
  public stopCleanup(): void {
    clearInterval(this.cleanupIntervalId);
  }
}
