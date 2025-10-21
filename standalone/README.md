# Google Workspace Training - Standalone Version

This is a standalone, self-contained version of the Google Workspace training web app that can be embedded directly into your Simpplr site.

## What's Included

This folder contains a fully functional static website with:

- **index.html** - Main landing page with hero section, comparison table, quiz, and resources
- **gmail.html, drive.html, meet.html, docs.html, sheets.html, slides.html, calendar.html** - Individual tool training pages
- **styles.css** - All styling (no framework dependencies)
- **shared.js** - Common JavaScript functions
- **quiz.js** - Quiz functionality

## Features

✅ **No server required** - Pure HTML, CSS, and JavaScript
✅ **No build tools needed** - No React, Vite, Node.js, or npm
✅ **Self-contained** - All scripts and styles are inline or local
✅ **Lab completion tracking** - Uses browser sessionStorage to track progress
✅ **Responsive design** - Works on all device sizes
✅ **Interactive labs** - Embedded iframes for hands-on practice
✅ **Progress tracking** - Completion badges show your progress

## How to Use

### For Simpplr Deployment:

1. **Upload the entire `standalone` folder** to your Simpplr site
2. **Set the entry point** to `index.html`
3. **Ensure relative paths** to images and labs are preserved

### For Local Testing:

1. Simply open `index.html` in any web browser
2. No server required - works directly from the file system
3. For full functionality with iframes, use a local server (e.g., Python's `http.server`)

## File Structure

```
standalone/
├── index.html              # Main landing page
├── gmail.html              # Gmail training page
├── drive.html              # Google Drive training page
├── meet.html               # Meet/Zoom training page
├── docs.html               # Google Docs training page
├── sheets.html             # Google Sheets training page
├── slides.html             # Google Slides training page
├── calendar.html           # Google Calendar training page
├── styles.css              # All styling
├── shared.js               # Common functions
├── quiz.js                 # Quiz functionality
└── README.md               # This file
```

## Dependencies

- **Lucide Icons** - Loaded from CDN (https://unpkg.com/lucide@latest/dist/umd/lucide.js)
- **Images & Labs** - Referenced from `../public/images/` (relative paths)

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- Lab completion state is stored in browser sessionStorage (resets on tab close)
- All videos are set to autoplay, loop, and muted for best user experience
- Interactive labs use iframes that communicate via postMessage API
- No external dependencies except for Lucide icons CDN

## Support

For issues or questions, refer to the original React codebase or contact your development team.