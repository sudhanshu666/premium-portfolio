import { useState, useEffect } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <h1 className="text-4xl font-bold text-white animate-pulse">Loading...</h1>
    </div>
  );
}
