import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundColor = "#00ffff";
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.transition = "transform 0.1s ease-out";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);
  return null;
};

export default Cursor;
