import { useEffect, useState } from 'react';

export default function useCustomSearch(query) {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (
      async function () {
        if (!query) return;
        try {
          setLoading(true);
          const response = await fetch('/api/search.json?' + new URLSearchParams({
            query,
          }));
          const result = await response.json();
          if (result.error) throw new Error(result.error);
          setResults(result.results);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    )()
  }, [query])

  return { results, error, loading };
}
