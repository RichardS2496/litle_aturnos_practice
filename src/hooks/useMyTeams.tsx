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

export function useMyTeams() {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URL}/my-teams`,
    fetcher
  );

  return { data, error, isLoading };
}
