import { Header } from "@/components/Header/Header";
import { MeetingTable } from "@/components/MeetingTable/MeetingTable";
import { useMeetings } from "@/utils/hooks/useMeetings";
import { useState } from "react";

const ITEM_PER_PAGE = 5;

export default function Home() {
  const [page, setPage] = useState(1);
  const { meetings, error, isLoading } = useMeetings();

  const totalPages = Math.ceil((meetings?.length ?? 0) / ITEM_PER_PAGE);
  const paginatedMeetings = meetings?.slice(
    (page - 1) * ITEM_PER_PAGE,
    page * ITEM_PER_PAGE
  );

  return (
    <main>
      <Header />
      <MeetingTable meetings={paginatedMeetings} />
    </main>
  );
}
