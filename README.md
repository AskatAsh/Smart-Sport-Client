# <img width="32px" src="https://i.ibb.co.com/5TnfHBK/smartsport-logo.webp"/> SMART SPORT

## Description
Smart Sport is a sports equipment and accessories e-commerce website, a platform where customers can browse, purchase, and review various sports accessories, from gear to apparel, catering to different sports disciplines.

![Project Screenshot](https://i.ibb.co/GRsmrc0/download.png)  
*A representative screenshot of the project.*

---

## 🌐 **Live Link**

Check out the live version of the project:
[Live Demo](https://smartsport-client.web.app)

## 🛠️ Technologies Used
- React Js
- Tailwind CSS
- DaisyUI
- React Toastify
- Font awesome
- Firebase Authentication
- React Router
- Swiper js
- Lottie React
- React Tooltip
- React icons
- React Helmet

---

## 🧩 **Dependencies**
- "@emotion/react": "^11.13.5",
- "@emotion/styled": "^11.13.5",
- "firebase": "^11.0.2",
- "lottie-react": "^2.4.0",
- "react": "^18.3.1",
- "react-awesome-reveal": "^4.2.14",
- "react-dom": "^18.3.1",
- "react-helmet-async": "^2.0.5",
- "react-icons": "^5.4.0",
- "react-router-dom": "^7.0.2",
- "react-toastify": "^10.0.6",
- "react-tooltip": "^5.28.0",
- "sweetalert": "^2.1.2",
- "sweetalert2": "^11.14.5",
- "swiper": "^11.1.15"

---

## 📂 **Architecture**
- **Navbar:** Includes company logo, navigation links, user info, and authentication controls.
- **Footer:** Displays company information, policies, and social links.
- **Dynamic Routing:** Main section renders pages based on routes.

## Key Features

- **Fetching Data From Database**:
  - Fetched equipment data from mongoDB database using get method
  - Used fetch api to get limited data using query
  - Get single equipment data using id parameter

- **Create Data in Database**:
  - Used Post method to create new Equipment data in mongoDB database and get response

- **Update Data in Database**:
  - Used Put method to update single Equipment data in mongoDB database and get response

- **Private Routes**:
  - Created private routes using react router.
  - User should be logged in to access private routes.
  - Redirected user to login page in user is not logged in.

- **Firebase Authentication**:
  - Used firebase to sign up or register new user
  - Log in using email and password
  - Sign in or sign up using google
  - Show user info in Navbar like image and name

  ---
## 📁 **Run in Local Machine**
1. Clone the repository:
   ```bash
   git clone https://github.com/AskatAsh/Smart-Sport-client.git

2. Navigate to the project directory:
   ```bash
   cd yourproject

3. Install the dependencies:
   ```bash
   npm install

4. Run the project:
   ```bash
   npm run dev
