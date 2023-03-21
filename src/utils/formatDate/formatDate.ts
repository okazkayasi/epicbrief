// For Ordinal Suffix => https://stackoverflow.com/a/13627586/4379563
export function ordinalSuffixOf(i: number) {
  const j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

export function formatDate(dateString: string | undefined) {
  if (!dateString) return "No Date";
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const day = ordinalSuffixOf(date.getDate());
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedHour = hour % 12 || 12;
  return `${month} ${day}, ${year} ${formattedHour}:${formattedMinutes}${ampm}`;
}
