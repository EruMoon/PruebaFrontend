import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // O usa cualquier ícono SVG que prefieras

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const halfPage = document.documentElement.scrollHeight / 2;
    setVisible(scrollTop > halfPage);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-2 left-6 z-50 bg-white p-3 rounded-full shadow-lg hover:bg-blue-200 transition-all duration-300"
      aria-label="Subir al inicio"
    >
      <ArrowUp size={24} className="text-[#0056A6]" />
    </button>
  );
};

export default ScrollToTopButton;
