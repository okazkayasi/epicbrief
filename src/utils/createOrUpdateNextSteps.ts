export function createOrUpdateNextSteps(meetingId: string, nextStep: string) {
  return fetch(`api/meetings/${meetingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nextStep,
    }),
  });
}
