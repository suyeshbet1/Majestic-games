# Majestic games - Premium Gaming Website

A stunning, production-ready Next.js website featuring a 360° rotatable 3D Android phone model, smooth animations, and a beautiful sky blue theme.

## Features

- **3D Rotatable Android Phone**: Interactive 3D phone model built with Three.js that users can rotate 360° horizontally
- **Premium Animations**: Smooth, professional animations using Framer Motion
- **Sky Blue Theme**: Modern, clean design with sky blue and white color scheme
- **Glassmorphism Effects**: Beautiful glass-like UI elements with blur effects
- **Installation Guide**: Step-by-step animated cards showing how to install the app
- **Download Functionality**: Large, animated download button for APK file
- **Fully Responsive**: Works perfectly on all devices

## Tech Stack

- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components for react-three-fiber

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Replace Placeholder Files

Replace the following placeholder files with your actual files:

#### APK File

- **Location**: `/public/app.apk`
- **Replace with**: Your actual MajesticGames.apk file
- **Note**: The download button will automatically serve this file

#### App Video

- **Location**: `/public/appvideo.mp4`
- **Replace with**: Your game preview/demo video
- **Recommended**:
  - Format: MP4
  - Aspect Ratio: 9:19.5 (phone screen ratio)
  - Resolution: 1080x2340 or similar
  - File size: Keep under 10MB for fast loading
  - Duration: 10-30 seconds loop

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## Project Structure

```
majestic-games/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Header with logo & download button
│   ├── HeroSection.tsx       # Hero section with main content
│   ├── PhoneModel.tsx        # 3D rotatable phone component
│   ├── InstallationSteps.tsx # Installation guide section
│   └── Footer.tsx            # Footer component
├── public/
│   ├── MajesticGames.apk              # YOUR APK FILE (replace this)
│   └── appvideo.mp4         # YOUR VIDEO FILE (replace this)
└── package.json
```

## Customization Guide

### Change Colors

Edit the colors in component files. Look for these Tailwind classes:

- `from-sky-400` → `from-YOUR-COLOR`
- `to-blue-600` → `to-YOUR-COLOR`
- `text-sky-600` → `text-YOUR-COLOR`

### Update Text Content

1. **App Name**: Search for "Majestic games" in all component files
2. **Hero Section**: Edit `/components/HeroSection.tsx`
3. **Installation Steps**: Edit `/components/InstallationSteps.tsx`

### Modify 3D Phone

Edit `/components/PhoneModel.tsx`:

- Change phone size: Modify `args` in `RoundedBox` components
- Adjust rotation speed: Change `autoRotateSpeed` value
- Update colors: Modify `color` props in materials

### Add More Sections

Create new components in `/components/` directory and import them in `/app/page.tsx`.

## Key Components Explained

### PhoneModel.tsx

- Creates a 3D Android phone using Three.js primitives
- Displays your video inside the phone screen
- Enables 360° horizontal rotation via mouse/touch drag
- Auto-rotates when not being interacted with

### HeroSection.tsx

- Main landing section with headline and CTA
- Large download button with hover effects
- Social proof elements (player count)
- Integrates the 3D phone model

### InstallationSteps.tsx

- Four animated step cards
- Icons and numbered badges
- Scroll-triggered animations
- Progress bars for visual appeal

## Performance Tips

1. **Optimize Video**:
   - Compress your video to reduce file size
   - Use H.264 codec for best browser compatibility

2. **APK Hosting**:
   - For large APK files, consider using a CDN
   - Update the download link in Header.tsx and HeroSection.tsx

3. **Image Optimization**:
   - Use Next.js Image component for any additional images
   - Enable image optimization in next.config.js

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

- Netlify
- AWS Amplify
- Digital Ocean
- Any platform supporting Next.js

## Notes

- The 3D phone model is rendered client-side using WebGL
- Video playback is optimized with `autoPlay`, `loop`, and `muted` attributes
- All animations are GPU-accelerated for smooth performance
- The site uses Next.js static export (`output: 'export'`)

## Support

For any issues or questions, please ensure:

1. You've replaced the placeholder APK and video files
2. All dependencies are installed correctly
3. You're using Node.js 16+ and npm 8+

## License

This project is created for Majestic games. All rights reserved.
