export function deleteMeetings(meetingIds: string[]) {
  return fetch("/api/meetings", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ meetingIds }),
  });
}