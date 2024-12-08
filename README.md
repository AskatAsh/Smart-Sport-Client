# <img width="32px" src="https://i.ibb.co.com/5TnfHBK/smartsport-logo.webp"/> SMART SPORT

<img src="https://i.ibb.co.com/RDXbCX7/download.png"/>

### Live Site Link: [smartsport-client.web.app](https://smartsport-client.web.app)

## Description
Smart Sport is a sports equipment and accessories e-commerce website, a platform where customers can browse, purchase, and review various sports accessories, from gear to apparel, catering to different sports disciplines.

## Technologies Used
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