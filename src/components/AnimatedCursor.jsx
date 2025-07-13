import React, { useEffect } from 'react';

const AnimatedCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);

    cursor.style.position = 'fixed';
    cursor.style.zIndex = '9999';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '2px solid #fff';
    cursor.style.pointerEvents = 'none';
    cursor.style.transition = 'transform 0.1s ease-out';

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default AnimatedCursor;
