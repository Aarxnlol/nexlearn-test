# 📘 **NexLearn – Online Examination Platform**

A fully responsive, SEO-optimized online examination system built using **Next.js**, **Tailwind CSS**, **JWT Authentication**, and modern best practices.

This project is developed as part of the **Front-End Machine Test (Level 1) – Next.js** for **Noviindus Technologies**.

---

## 🚀 **Live Demo **

> Add your deployed link here
> `https://nexlearn-test-gules.vercel.app/`

---

## 🎯 **Objective**

Recreate the provided Figma design with a pixel-perfect, responsive, and performance-optimized Next.js application following industry-standard best practices.

---

## 🧩 **Features Implemented**

### ✅ **Pixel-Perfect UI**

* Figma design recreated with high accuracy
* Consistent spacing, typography, color scheme

### ✅ **Fully Responsive**

* Mobile-first approach
* Works across all screen sizes seamlessly

### ✅ **SEO Optimized**

* Meta tags, OpenGraph, Twitter cards
* Semantic HTML
* Optimized performance using Next.js features

### ✅ **Authentication**

* JWT-based login
* Access + Refresh token handling
* Auto token refresh using Axios interceptor

### ✅ **State Management**

* Global state using Redux Toolkit (or your chosen library)
* Auth state persisted

### ✅ **Performance**

* Code-splitting & Dynamic imports
* Optimized images
* Layout & render optimization with React hooks

### ✅ **Accessibility**

* ARIA labels
* Keyboard navigable
* Proper semantic tags

---

## 🛠️ **Tech Stack**

| Area             | Technology                 |
| ---------------- | -------------------------- |
| Framework        | **Next.js (Latest)**       |
| UI Styling       | **Tailwind CSS**           |
| State Management | Redux Toolkit              |
| Authentication   | JWT + Refresh Token        |
| Language         | TypeScript                 |
| API              | Provided API Documentation |
| Icons            | Custom                     |

---

## 📂 **Project Structure**

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── auth/
│   │   ├── layout.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── verify-otp/
│   │       └── page.tsx
│   ├── exam/
│   │   └── questions/
│   │       └── page.tsx
│   └── results/
│       └── page.tsx
├── components/
│   ├── exam/
│   │   ├── QuestionCard.tsx
│   │   └── Timer.tsx
│   └── ui/
│       ├── Header.tsx
│       └── LoadingSpinner.tsx
├── lib/
│   ├── slices/
│   │   ├── authSlice.ts
│   │   └── examSlice.ts
│   ├── api.ts
│   ├── store.ts
│   └── utils.ts
├── types/
│   └── index.ts
├── hooks/
│   └── useAuthCheck.ts
└── middleware.ts
```

---

## 🔐 **Authentication Flow**

1. User logs in → receives **access token + refresh token**
2. Access token stored in memory / cookies
3. Axios interceptor auto-refreshes expired token
4. Protected routes based on auth state
5. Logout clears all session data

---

## 🖥️ **How to Run Locally**

```bash
git clone <repository-url>
cd nexlearn
yarn install
yan dev
yarn build
```

---

## 🔌 **API Documentation**

Documentation Link (given in test):
[https://docs.google.com/document/d/1gIuJ-tYdfJMBZY_yeXZNg7Wmx6mHki0P6XMGyB2ndCA/edit](https://docs.google.com/document/d/1gIuJ-tYdfJMBZY_yeXZNg7Wmx6mHki0P6XMGyB2ndCA/edit)

---

## 🎨 **Figma Design**

[https://www.figma.com/design/YJoY0WfcNLHAYFZkIF3E9w/Next-Test?node-id=0-1&m=dev](https://www.figma.com/design/YJoY0WfcNLHAYFZkIF3E9w/Next-Test?node-id=0-1&m=dev)

---

## 🕒 **Time Taken**

> Replace with your real time
> **Total Development Time: 24 hours**

---
