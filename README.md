# MAHAN Creative Agency

Premium, editorial portfolio site for MAHAN — an independent creative studio in Shiraz.

## Publish from GitHub

1. Create an empty GitHub repository, then connect this local project to it:

   ```bash
   git add .
   git commit -m "Create MAHAN creative agency website"
   git branch -M main
   git remote add origin https://github.com/YOUR-ACCOUNT/mahan-agency.git
   git push -u origin main
   ```

2. On an Iranian Linux server with Node 22+, clone the repository and run:

   ```bash
   npm ci
   npm run build
   npm run start
   ```

3. Point your server’s reverse proxy (such as Nginx) at the running application. Set your domain’s DNS record to the server first, then enable HTTPS with your hosting provider or Certbot.

## Local development

```bash
npm ci
npm run dev
```

The site is intentionally content-first and has no database, login, or external service dependency. Replace the placeholder project names, contact details, and photography before launch.
