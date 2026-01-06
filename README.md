# 🛒 Final Eval – Modern Shopping Cart (Vue 3)
A modern shopping cart web application built with Vue 3, Pinia, and Tailwind CSS.
This project demonstrates state management, API consumption, and cart logic in a clean and modular Vue architecture.

## 🔗 Live Demo 👉 https://lively-cupcake-06f174.netlify.app/

✨ Features
📦 Product listing fetched from an external API

🛍️ Add / remove products from cart

🔢 Update product quantities

💾 Persistent cart state using Pinia (localStorage)

💰 Automatic calculation:

Total HTVA

TVA (21%)

Shipping cost

Grand total

🚚 Shipping options (Standard / Express)

📱 Responsive layout (Tailwind CSS)

🧰 Tech Stack
Vue 3 (Composition API)

Vite

Pinia (state management)

pinia-plugin-persistedstate

Tailwind CSS

Font Awesome

Mock API (MockAPI.io)

Netlify (deployment)

📁 Project Structure
Code
src/
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   └── shop/
│       ├── Cart.vue
│       ├── CartItem.vue
│       ├── ProductList.vue
│       └── ProductCard.vue
├── stores/
│   ├── products.js
│   └── shoppingCart.js
├── services/
│   └── DB.js
├── ui/
│   └── MyButton.vue
├── App.vue
├── main.js
└── style.css
🔌 API
Products are fetched from a mock API:

👉 https://692fc3d9778bbf9e006e6a45.mockapi.io/products

The API URL is injected into the ProductList component as a prop and initialized via the products store.

🗃️ State Management (Pinia)
Products Store
Fetches products from the API

Stores product list

Shopping Cart Store
Manages cart items

Calculates totals (HTVA, TVA, shipping, total)

Persists data using localStorage

🚀 Getting Started (Local Development)
1️⃣ Clone the repository
sh
git clone <your-repo-url>
cd <project-folder>
2️⃣ Install dependencies
sh
npm install
3️⃣ Run the development server
sh
npm run dev
The app will be available at:
👉 http://localhost:5173

📦 Build for Production
sh
npm run build
🌐 Deployment
The app is deployed on Netlify and automatically builds using Vite.

Live URL:
👉 https://lively-cupcake-06f174.netlify.app/

📌 Notes
Cart state persists even after page refresh

Clean separation of concerns (UI / Store / Services)

Designed for educational and evaluation purposes

👤 Author
EAFC – Final Evaluation Project  
Modern Shopping Cart using Vue 3 & Pinia
