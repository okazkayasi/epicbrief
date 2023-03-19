import { Header } from "@/components/Header/Header";
import { MeetingTable } from "@/components/MeetingTable/MeetingTable";
import { useMeetings } from "@/utils/hooks/useMeetings";
import {
  SortingContext,
  SortingTypes,
} from "@/utils/providers/SortingProvider";
import { MeetingData } from "@/utils/types";
import { useContext, useState } from "react";

const ITEM_PER_PAGE = 5;

const sortMap: Record<SortingTypes, keyof MeetingData[number]> = {
  name: "meetingTitle",
  time: "meetingStartDate",
  account: "companyName",
};

export default function Home() {
  const [page, setPage] = useState(1);
  const { meetings, error, isLoading } = useMeetings();
  const { sort } = useContext(SortingContext);

  const meetingsSorted = meetings?.sort((a, b) => {
    const aVal = a[sortMap[sort]];
    const bVal = b[sortMap[sort]];
    if (!aVal || !bVal) {
      return 0;
    }
    if (sort === "time") {
      return new Date(aVal).getTime() - new Date(bVal).getTime();
    }
    return aVal.localeCompare(bVal);
  });

  const totalPages = Math.ceil((meetingsSorted?.length ?? 0) / ITEM_PER_PAGE);
  const paginatedMeetings = meetingsSorted?.slice(
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
