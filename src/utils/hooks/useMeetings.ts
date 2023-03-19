import { MeetingData } from "@/utils/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useMeetings() {
  const { data, error, isLoading, mutate } = useSWR<{
    meetingData: MeetingData;
  }>("/api/companies", fetcher);

  const meetings = data?.meetingData;
  return { meetings, error, isLoading, mutate };
}
