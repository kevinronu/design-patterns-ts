import {
  RealService,
  ProxyService,
} from "../../design-patterns/structural-patterns/proxy/index.mjs";

export default async function proxyDemo() {
  console.log("🎬 Starting Proxy Pattern Demo");

  const realService = new RealService();
  const proxy = new ProxyService(realService, 10000); // cache TTL of 10 seconds

  console.log("➡️ Requesting video list for the first time...");
  const videos1 = await proxy.listVideos();
  console.log("Result:", videos1);

  console.log("➡️ Requesting video list again (should be cached)...");
  const videos2 = await proxy.listVideos();
  console.log("Result:", videos2);

  console.log("➡️ Fetching info for video ID 'video1'...");
  const info1 = await proxy.getVideoInfo("video1");
  console.log("Info:", info1);

  console.log("➡️ Fetching same video info again (should be cached)...");
  const info2 = await proxy.getVideoInfo("video1");
  console.log("Info:", info2);

  console.log("➡️ Downloading video 'video1'...");
  await proxy.downloadVideo("video1");

  console.log("🛑 Stopping proxy cleanup interval...");
  proxy.stopCleanup();

  console.log("✅ Proxy Demo Finished");
}
