<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Nitro preset is chosen by environment in vite.config.ts: VERCEL -> "vercel" (.vercel/output), else NITRO_PRESET or "node-server" (.output, used by the RepoRun Dockerfile). Why: one codebase deploys to both Vercel and RepoRun.
