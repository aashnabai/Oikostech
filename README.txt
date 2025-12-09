Faber Multi-page Site
Files:
- index.html (home)
- services.html
- contact.html
- booking.html
- complaints.html (private form; recommended to deploy on Netlify or Formspree)
- admin.html (info only; for secure admin area use Netlify Identity + Functions)
- styles.css, nav.js, logo.png, favicon.png

Deployment tips:
- If you want complaints to be private visible only to you: deploy on Netlify and use Netlify Forms (data-netlify="true") OR use Formspree for email notifications. Netlify stores submissions private and shows them in the site's dashboard.
- For GitHub Pages: forms will not be stored; use Formspree if you need email delivery.
- To protect an admin view on the site (not recommended for static GitHub Pages): use Netlify Identity + Functions or a small server backend.
