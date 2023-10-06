export default function track(...args) {
  try {
    if (typeof window !== 'undefined') {
      window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
      window.plausible(...args);
    }
  } catch (e) {
    ;
  }
};
