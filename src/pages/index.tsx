import { Header } from "@/components/Header/Header";
import { MeetingTable } from "@/components/MeetingTable/MeetingTable";
import { useMeetings } from "@/utils/hooks/useMeetings";

export default function Home() {
  const { meetings, error, isLoading } = useMeetings();

  return (
    <main>
      <Header />
      <MeetingTable meetings={meetings} />
    </main>
  );
}
