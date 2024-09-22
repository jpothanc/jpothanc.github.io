import { useCallback, useState } from "react";

const useFetchReadMe = (readmeUrl: string) => {
  const [data, setReadmeContent] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchReadme = useCallback(
    async (readmeUrl: string) => {
      setLoading(true);
      try {
        const response = await fetch(readmeUrl);
        const readmeData = await response.json();

        // Fetch raw content of README.md using download_url
        const readmeResponse = await fetch(readmeData.download_url);
        const text = await readmeResponse.text();
        console.log(text);
        setReadmeContent(text);
      } catch (error: unknown) {
        setReadmeContent(
          `Error fetching README: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      } finally {
        setLoading(false);
      }
    },
    [readmeUrl]
  );

  return {
    data,
    loading,
    fetchReadme,
  };
};

export default useFetchReadMe;
