Google Workspace Training Guide - Standalone Version
===================================================

HOW TO USE:
-----------
1. Copy the entire "standalone" folder to your desired location
2. Copy the "public/images" folder from the main project into the standalone folder
   (so you have: standalone/images/gmail/, standalone/images/Docs/, etc.)
3. Open standalone/index.html in any web browser

STRUCTURE:
----------
standalone/
  ├── index.html          (Main landing page)
  ├── gmail.html          (Gmail training)
  ├── drive.html          (Google Drive training)
  ├── meet.html           (Google Meet training)
  ├── docs.html           (Google Docs training)
  ├── sheets.html         (Google Sheets training)
  ├── slides.html         (Google Slides training)
  ├── calendar.html       (Google Calendar training)
  ├── styles.css          (Shared styles)
  ├── shared.js           (Shared JavaScript functions)
  ├── quiz.js             (Quiz functionality)
  └── images/             (Copy from public/images/)
      ├── gmail/
      ├── Docs/
      ├── Drive/
      ├── Meet/
      ├── Sheets/
      ├── Slides/
      └── Calander/

DEPLOYMENT OPTIONS:
-------------------

1. LOCAL USE:
   - Simply open index.html in a web browser
   - All files use relative paths and work offline

2. WEB SERVER:
   - Upload entire standalone folder to any web hosting
   - No server-side processing required
   - Works on static hosting (GitHub Pages, Netlify, S3, etc.)

3. S3 BUCKET:
   - Create an S3 bucket with static website hosting enabled
   - Upload all files maintaining the folder structure
   - Set index.html as the index document
   - Make sure all files are publicly readable

4. GITHUB PAGES:
   - Push the standalone folder to a GitHub repository
   - Enable GitHub Pages in repository settings
   - Select the branch and folder containing standalone/
   - Access via https://yourusername.github.io/repository-name/

FEATURES:
---------
- Interactive labs with progress tracking (saved in browser localStorage)
- Video demonstrations for each task
- Step-by-step guides with clickable hotspots
- Quiz to test knowledge
- Comparison tables between Microsoft and Google tools
- Fully responsive design

BROWSER COMPATIBILITY:
----------------------
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with JavaScript enabled

NOTES:
------
- Progress is saved in browser localStorage
- Clearing browser data will reset progress
- All videos and images are included
- No internet connection required after initial load (if hosted locally)
- Interactive labs use postMessage API for completion tracking

TROUBLESHOOTING:
----------------
- If videos don't play: Check that images folder is correctly copied
- If labs don't load: Check browser console for path errors
- If progress doesn't save: Ensure localStorage is enabled in browser
- If images don't show: Verify folder structure matches the guide above

For questions or issues, refer to the main project documentation.
