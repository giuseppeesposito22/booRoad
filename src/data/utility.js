export default function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleDateString("it-IT");
}
