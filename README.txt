================================================================================
  GOOGLE WORKSPACE TRAINING GUIDE - STANDALONE VERSION
  Deployment Instructions
================================================================================

QUICK START
-----------
1. Extract the entire folder structure
2. Copy the 'public' folder contents into 'standalone' folder
3. Rename 'public/images' to 'standalone/images'
4. Open 'standalone/index.html' in a web browser

FOLDER STRUCTURE
----------------
Your final structure should look like this:

standalone/
├── index.html              (Main landing page)
├── gmail.html              (Gmail training)
├── drive.html              (Google Drive training)
├── meet.html               (Meet/Zoom training)
├── docs.html               (Google Docs training)
├── sheets.html             (Google Sheets training)
├── slides.html             (Google Slides training)
├── calendar.html           (Google Calendar training)
├── styles.css              (All styling)
├── shared.js               (Common JavaScript)
├── quiz.js                 (Quiz functionality)
└── images/                 (All lab files and assets)
    ├── gmail/
    ├── Drive/
    ├── Meet/
    ├── Zoom/
    ├── Docs/
    ├── Sheets/
    ├── Slides/
    └── Calander/

DEPLOYMENT OPTIONS
------------------

Option 1: Local Testing
-----------------------
Simply open 'standalone/index.html' in any modern web browser.
For full functionality with videos and iframes, use a local server:
  - Python: python -m http.server 8000
  - Node.js: npx http-server
Then navigate to: http://localhost:8000/standalone/

Option 2: Cloud Storage (S3, GCS, Azure)
-----------------------------------------
1. Upload the entire 'standalone' folder (with images inside) to your bucket
2. Set index.html as the entry point
3. Ensure all files have public read permissions
4. Access via: https://your-bucket-url/standalone/index.html

Option 3: Web Server (Apache, Nginx)
-------------------------------------
1. Copy the 'standalone' folder to your web root
2. Configure your server to serve static files
3. Ensure MIME types are properly configured for .mp4, .html, .css, .js
4. Access via: https://your-domain.com/standalone/

Option 4: Simpplr/Intranet Deployment
--------------------------------------
1. Upload the complete 'standalone' folder structure
2. Set 'index.html' as the entry point
3. Ensure relative paths are preserved
4. Test all interactive labs to confirm iframe functionality

IMPORTANT NOTES
---------------
✓ All paths are relative - no server-side processing required
✓ Works with file:// protocol for local viewing
✓ All images, videos, and labs must be in the 'images' folder
✓ Lab completion tracking uses browser sessionStorage
✓ No external dependencies except Lucide icons (loaded from CDN)
✓ Press 'D' during any lab for debug mode (shows clickable hotspots)

BROWSER REQUIREMENTS
--------------------
- Modern browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Cookies/sessionStorage enabled for progress tracking

TROUBLESHOOTING
---------------
Problem: Videos not playing
Solution: Ensure browser supports .mp4 format, check file permissions

Problem: Labs not loading
Solution: Verify 'images' folder structure is correct, check browser console

Problem: Progress not saving
Solution: Enable sessionStorage in browser, check privacy settings

Problem: Broken paths
Solution: Ensure all files maintain relative paths (./images/...)

SUPPORT
-------
For issues or questions, contact your development team or refer to the
original React codebase in the main project repository.

================================================================================
Last Updated: 2025
Version: 1.0 - Standalone Deployment
================================================================================