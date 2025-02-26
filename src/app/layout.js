"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import './globals.css';
import "swiper/css";
import "../styles/fontawesome/font-awesome.css";
import "../styles/fontawesome/themify-icons.css";
import "../styles/css/style.css";
import { useEffect, useState } from "react";
import store from "@/redux/store";

// Scroll to Top Component
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${showButton ? 'visible' : ''}`}
      aria-label="Scroll to top"
    >
      <i className="fa fa-arrow-up"></i>
    </button>
  );
};

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle anchor link clicks
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ToastContainer />
          <div className="main-wrapper">
            {children}
          </div>
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}