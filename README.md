# KRISHNA FEEDS Website

Premium business website for **KRISHNA FEEDS – Hulakoti Co-operative Oil & Feeds Society Ltd**.

## Deploy to Vercel

### Required repository files

Vercel needs **all** of these folders in GitHub (not only config files):

| Required | Contents |
|----------|----------|
| `src/` | React components, styles, app code |
| `public/` | Logo, factory image, product packaging images |
| `index.html` | Vite entry |
| `package.json` | Dependencies and build script |

If `src/` or `public/` are missing on GitHub, the build fails with:

`TS18003: No inputs were found in config file`

### Push full project to GitHub

From this project folder:

```bash
git init
git add .
git commit -m "Add complete website source and assets for Vercel"
git branch -M main
git remote add origin https://github.com/Shas-07/Krishna-Feeds.git
git pull origin main --rebase
git push -u origin main
```

If the remote already has commits, after `git pull` resolve any conflicts, then `git push`.

### Vercel project settings

- **Framework Preset:** Vite  
- **Build Command:** `npm run build`  
- **Output Directory:** `dist`  
- **Install Command:** `npm install`  
- **Root Directory:** `.` (repository root)

Redeploy after pushing `src/` and `public/`.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
