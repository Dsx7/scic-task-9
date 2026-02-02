# LuxeMarket - Next.js 16 Marketplace

A modern, full-stack marketplace application featuring a public storefront and a secure admin dashboard. Built with Next.js 15/16 App Router, Express.js Backend, and Tailwind CSS.

## 🚀 Features

### Core Pages
1.  **Landing Page:** 7 comprehensive sections (Hero, Trending, About, Features, Testimonials, FAQ, Newsletter).
2.  **Item List Page:** Grid view for public users, Dashboard list view for admins.
3.  **Item Details:** Dynamic routing to show full product specs.
4.  **Authentication:** Secure login system using HTTP-only cookies and Middleware protection.
5.  **Admin Panel:** Exclusive "Dark Mode" interface for authorized users to add products.

### Tech Stack
* **Frontend:** Next.js 16 (App Router), Tailwind CSS
* **Backend:** Express.js API (hosted on Vercel)
* **Database:** MongoDB (via Express API)

## 🛠️ Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Dsx7/scic-task-9](https://github.com/Dsx7/scic-task-9)
    cd my-app-frontend
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Access App**
    * Open `http://localhost:3000`
    * **Admin Login:** `admin@example.com` / `password123`

## 📂 Route Summary

| Route | Access | Description |
| :--- | :--- | :--- |
| `/` | Public | Landing page with 7 sections |
| `/items` | Public/Admin | Product grid (Public) or Table (Admin) |
| `/items/[id]` | Public | Single product details |
| `/login` | Public | Admin login page |
| `/add-item` | **Protected** | Form to create new products (Admin only) |
