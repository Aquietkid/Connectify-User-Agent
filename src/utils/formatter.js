export function dateToTime(zuluDate) {
  return new Date(zuluDate).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function numberToDuration(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}
