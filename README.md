# Pegsy Games — Game Template

Minimal Next.js + Supabase scaffold for a new Pegsy Games project.

## What's included

- Next.js 14 App Router
- Pegsy Games brand tokens + fixed "back to Pegsy Games" pill
- SEO meta template (Open Graph + Twitter Card) pointing at the shared peg logo
- `robots.js` + `sitemap.js` stubs
- Supabase client scaffold (optional — delete if unused)
- Deployment config for Vercel

## Quick start

### 1. Create a new repo from this template

Click **"Use this template"** on GitHub → create `Pegsy-Games/[game-name]` (replace with your game's name).

### 2. Clone + install

```bash
git clone git@github.com:Pegsy-Games/[game-name].git
cd [game-name]
npm install
```

### 3. Configure env

```bash
cp .env.example .env.local
# Fill in Supabase keys if the game uses a DB; delete the vars otherwise
```

### 4. Replace placeholders

The template contains `GAME_NAME` and `GAME_SUBDOMAIN` placeholders. Find-replace with your values:

```bash
# macOS / BSD sed (replace MyGame and mygame with your values):
find . -type f \( -name "*.js" -o -name "*.json" -o -name "*.md" -o -name "*.css" \) \
  ! -path "./node_modules/*" ! -path "./.next/*" \
  -exec sed -i '' 's/GAME_NAME/MyGame/g; s/GAME_SUBDOMAIN/mygame/g' {} +
```

### 5. Run locally

```bash
npm run dev
# open http://localhost:3000
```

### 6. Deploy to Vercel

- Import the repo in the Vercel dashboard, select the Pegsy-Games team
- In Project Settings → Domains, add `[game-subdomain].pegsy.uk`
- Push to `main` — Vercel auto-deploys

## Pegsy Games conventions

- Each game lives at its own subdomain: `game-name.pegsy.uk`
- Each game is its own repo: `Pegsy-Games/GameName`
- Marketing site: [`Pegsy-Games/Pegsy-Website`](https://github.com/Pegsy-Games/Pegsy-Website) (`pegsy.uk`)
- Cross-game patterns & lessons: [`Pegsy-Games/playbook`](https://github.com/Pegsy-Games/playbook)

## Game-specific vs cross-game code

**Game-specific code lives in this repo.** Don't import from NearMe or other games — each game is its own thing.

If you find yourself repeatedly copying the same utility across games, consider extracting it to the playbook as a documented snippet rather than as a shared npm dependency.

## Further reading

- [Pegsy Games playbook](https://github.com/Pegsy-Games/playbook) — platform, tooling, and process lessons
- [NearMe](https://github.com/Pegsy-Games/NearMe) — first game, reference implementation
