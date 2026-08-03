# Zivana – Discover Stays,Create Experiences

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge\&logo=bootstrap\&logoColor=white)

Zivana is a full-stack vacation rental platform, where users can discover unique places to stay, list their own properties, and manage accommodations through an intuitive and responsive interface.

The application follows a complete MVC architecture and includes secure authentication, image uploads, interactive maps, reviews, search functionality, and authorization to provide a real-world booking platform experience.

Live link: https://zivana.onrender.com/landing
---

## 🚀 Features

### 👤 User Authentication

* Secure Sign Up & Login
* Password hashing using Passport.js
* Session-based authentication
* Flash messages for user feedback

### 🏠 Listing Management

* Create new property listings
* Edit existing listings
* Delete listings
* View complete listing details
* Only listing owners can modify their listings

### 🖼️ Image Uploads

* Upload property images
* Cloudinary integration for cloud image storage
* Automatic image optimization

### ⭐ Reviews & Ratings

* Add reviews for listings
* Delete reviews
* Only review owners can remove their reviews

### 🔍 Search Functionality

* Search listings by title or location
* Dynamic filtering of available properties

### 🗺️ Interactive Maps

* Display property location using Leaflet
* OpenStreetMap integration
* Visual location marker for every listing

### 🔐 Authorization

* Protected routes
* Owner-only access for editing/deleting listings
* Secure middleware implementation

### 📱 Responsive UI

* Mobile-friendly design
* Clean and modern interface
* Bootstrap-based responsive components

---

# 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* Passport.js
* Passport Local
* Express Session

### Cloud Services

* Cloudinary
* Multer

### Maps

* Leaflet
* OpenStreetMap

### Validation

* Joi

### Other Tools

* Git
* GitHub
* Render
* MongoDB Atlas

---

# 📂 Project Structure

```
Zivana
│
├── models/
├── routes/
├── controllers/
├── middleware/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── views/
│   ├── listings/
│   ├── users/
│   ├── reviews/
│   └── layouts/
├── utils/
├── app.js
├── cloudConfig.js
└── package.json
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/rachika08/ZIVANA.git
```

Move into the project directory

```bash
cd zivana
```

Install dependencies

```bash
npm install
```

Run the application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit

```
http://localhost:8080
```

---


# 🔒 Security Features

* Password hashing
* Authentication using Passport.js
* Authorization middleware
* Server-side validation using Joi
* Protected routes
* Secure sessions
* Error handling middleware

---

# 🌟 Future Improvements

* Booking & Reservation System
* Wishlist/Favorites
* Payment Gateway Integration
* User Profiles
* Property Categories
* AI-based Property Recommendations
* Availability Calendar
* Email Notifications
* Chat between Host & Guest

---

# 📚 What I Learned

Through this project I gained hands-on experience with:

* Building scalable MVC applications
* RESTful API design
* Authentication & Authorization
* MongoDB schema design
* Cloudinary image management
* Server-side validation
* Session management
* Error handling
* Deployment of full-stack applications

---

# 👩‍💻 Author

**Rachika**



If you like this project, consider giving it a **⭐ Star** on GitHub.
