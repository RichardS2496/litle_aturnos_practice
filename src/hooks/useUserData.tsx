import useSWR from "swr";

const myToken = import.meta.env.VITE_API_TOKEN;

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${myToken}`,
    },
  }).then((res) => res.json());

export function useUserData() {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/my-data`,
    fetcher
  );

  return { data, isLoading, error };
}
