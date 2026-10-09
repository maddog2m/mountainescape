// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deployment target:
  // - Vercel sets VERCEL=1 during builds -> "vercel" preset (Build Output API in .vercel/output).
  // - Otherwise NITRO_PRESET (Dockerfile sets node-server) or default "node-server" for RepoRun.
  // Inside a Lovable build the Cloudflare preset still wins, so preview/publish are unaffected.
  nitro: {
    preset: process.env.VERCEL ? "vercel" : process.env.NITRO_PRESET || "node-server",
  },
});
