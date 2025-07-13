const Toggle = ({ dark, setDark }) => (
  <button
    className="fixed top-4 right-4 z-50 text-2xl"
    onClick={() => setDark(!dark)}
  >
    {dark ? '☀️' : '🌙'}
  </button>
);

export default Toggle;