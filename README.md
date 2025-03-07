# Users & Posts Dashboard (Next.js)

A **Next.js** application that fetches and displays a list of user profiles and their related posts using JSONPlaceholder API.  
This project demonstrates **API integration, state management, error handling, performance optimization, and responsive UI**.

---

## 🚀 Features
- 📋 **Fetch Users:** Display user profiles from the API.
- 📝 **Fetch Posts:** Show posts when clicking on a user.
- 💾 **State Management:** Uses React `useState` and `useEffect` for API calls.
- ⚡ **Optimized Performance:** API caching & optimized rendering.
- 📱 **Responsive UI:** Fully mobile-friendly.
- 🛠 **Error Handling:** Displays errors if API calls fail.

---

## 📌 Bonus Features Implemented
✅ **Search Users:** Filter users by name or email.  
✅ **Sorting:** Sort user list by name or company.  
✅ **Dynamic Routing:** `users/[id]` page to show detailed user posts.  
✅ **Pagination:** Implemented infinite scroll for posts.  

---

## 📡 API Endpoints Used

### **1️⃣ Users API**
- **Endpoint:** [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
- **Fields Used:**
  - `id` → User ID
  - `name` → Full Name
  - `email` → Email Address
  - `address` → Street, City, Zipcode (formatted)
  - `company.name` → Company Name

### **2️⃣ Posts API**
- **Endpoint:** [`https://jsonplaceholder.typicode.com/posts`](https://jsonplaceholder.typicode.com/posts)
- **Fields Used:**
  - `userId` → Matches selected user
  - `title` → Post Title
  - `body` → Post Content

---

## 🛠 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/users-posts-dashboard.git
cd users-posts-dashboard
```
### **2️⃣ Install Dependencies**
```sh
npm install
```
### **3️⃣ Run the Development Server**
```sh
npm run dev
App will run at: http://localhost:3000
```
🏗 Project Structure
bash
Copy
Edit
/users-posts-dashboard
 ├──/src
 │   ├──/components
 │   │  ├── UserCard.js       # Displays individual user details
 │   │  ├── PostCard.js       # Displays post details
 │   │  ├── SearchBar.js      # Search functionality for users
 │   │  ├── Sorting.js        # Sorting functionality
 │   │  ├── Loading.js        # Loading indicator
 │   │  ├── Error.js          # Error messages
 │   ├──/pages
 │   │  ├── index.js          # Home page (Users List)
 │   │  ├── users/[id].js     # User details page (Shows posts)
 │   ├──/utils
 │   │  ├── api.js            # API calls
 │   ├──/styles
 │      ├── globals.css       # Global Tailwind styles
 ├── package.json
 ├── README.md
 ├── tailwind.config.js
 ├── postcss.config.js
🖥️ How to Use the App
1️⃣ Open Users Dashboard (Home page).
2️⃣ Click on a user to view their posts.
3️⃣ Use Search Bar to find users by name/email.
4️⃣ Use Sorting to order users by name/company.
5️⃣ Scroll down to see infinite loading for posts.

🌎 Deployment
Deployed on Vercel:

[Live Demo](https://users-posts-dashboard-one.vercel.app/)
To deploy yourself:

```sh
npx vercel
```

📌 Future Enhancements
🗂 Profile Details Page: More user details.
🔄 API Optimization: Use SWR for caching.
🌙 Dark Mode Support.

🏆 Author
Sujit Pandey
LinkedIn: https://www.linkedin.com/in/sujit-pandey-b52377125/
GitHub: https://github.com/Sujitpandey1409

