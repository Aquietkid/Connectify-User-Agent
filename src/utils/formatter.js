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

export function zuluDateSToStandard(zuluDateString) {
  const inputDate = new Date(zuluDateString);
  const now = new Date();

  const isToday =
    inputDate.toDateString() === now.toDateString();

  if (isToday) {
    return inputDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); 

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); 

  if (inputDate >= startOfWeek && inputDate <= endOfWeek) {
    return inputDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });
  }

  return inputDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
  });
}
