# ZChat 🐦

A social media app built with React and Node.js.

**[Live Demo](https://social-media-demo-qd5t.onrender.com/login)**

## Tech Stack
- **Frontend:** React, Tailwind CSS + DaisyUI, TanStack Query, React Router
- **Backend:** Node.js, Express, MongoDB
- **Other:** JWT auth, Cloudinary (image uploads), bcrypt

## Quick Start

1. **Install dependencies**
   ```bash
   # Main folder
   npm run build
   ```

2. **Setup environment**
   
   Create `.env` in backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

3. **Run the app**
   ```bash
   # Backend
   npm run dev
   
   # Frontend (new terminal)
   cd frontend && npm run dev
   ```

App runs on `http://localhost:3000` 🚀

---

*Educational project by Lucas*