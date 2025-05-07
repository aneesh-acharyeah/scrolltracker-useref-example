# 🧭 Scroll Tracker App — `useRef` Hook Example

This is a simple but powerful React app that demonstrates how to use the `useRef` hook to **track and animate scroll progress**. The app displays a real-time progress bar and scroll percentage as the user scrolls down the page.

---

## 🧠 About `useRef`

The `useRef` hook in React is used to:
- Access and manipulate **DOM elements** directly
- Store **mutable values** that persist across renders without triggering re-renders

### 🔍 Why `useRef` here?

In this app, `useRef` is used to:
- Get a reference to the **progress bar DOM element**
- Update the width of the bar as the user scrolls, without causing a re-render each time

---

## 🔧 Tech Stack

- React (Hooks)
- JavaScript (ES6+)
- CSS (pure, no libraries)
- No external dependencies


## 🛠️ How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/aneesh-acharyeah/scrolltracker-useref-example.git
cd scroll-tracker-app
