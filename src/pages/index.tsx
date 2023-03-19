import { Header } from "@/components/Header/Header";
import { MeetingTable } from "@/components/MeetingTable/MeetingTable";
import fetch from "node-fetch";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/meetings/16490073298").then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  return (
    <main>
      <Header />
      <MeetingTable />
    </main>
  );
}
