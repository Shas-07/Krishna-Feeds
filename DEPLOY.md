# Fix Vercel Deploy — `Failed to resolve /src/main.tsx`

## The problem

Your GitHub repo **does not contain** the `src/` or `public/` folders.  
Vercel clones GitHub — if `src/main.tsx` is not there, the build fails.

Check: https://github.com/Shas-07/Krishna-Feeds — you should see `src/App.tsx`.  
If you only see `package.json`, `vite.config.ts`, etc., the source was never pushed.

---

## Fix (choose one method)

### Method 1 — PowerShell script (fastest)

1. Open **PowerShell** in this folder (`KF`).
2. Run:

```powershell
.\push-to-github.ps1
```

3. Sign in to GitHub if prompted.
4. In Vercel → **Deployments** → **Redeploy**.

---

### Method 2 — GitHub Desktop

1. **File → Add local repository** → select the `KF` folder.
2. Check that **hundreds of files** appear (under `src` and `public`), not just 10 config files.
3. Summary: `Add website source and assets`
4. Click **Commit to main** → **Push origin**.
5. Redeploy on Vercel.

---

### Method 3 — Deploy from your PC (no GitHub fix)

Install Vercel CLI and deploy the full local folder:

```powershell
cd d:\Users\swast\Downloads\KF
npm install
npm run build
npx vercel --prod
```

Log in when asked. This uploads `src` and `public` directly from your computer.

---

## After a successful GitHub push

Your repo must include at minimum:

```
src/main.tsx
src/App.tsx
public/assets/logo.png
public/assets/products/cow.png
```

Then Vercel build will succeed.
