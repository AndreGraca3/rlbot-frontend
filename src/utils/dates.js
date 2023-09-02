export function timeSince(datetime) {
  const currentDate = new Date();
  const pastDate = new Date(datetime);
  const timeDifference = currentDate - pastDate;

  const minuteInMilliseconds = 60 * 1000;
  const hourInMilliseconds = 60 * minuteInMilliseconds;
  const dayInMilliseconds = 24 * hourInMilliseconds;
  const monthInMilliseconds = 30 * dayInMilliseconds;
  const yearInMilliseconds = 365 * dayInMilliseconds;

  if (timeDifference < minuteInMilliseconds) {
    return `${Math.floor(timeDifference / 1000)} seconds ago`;
  } else if (timeDifference < hourInMilliseconds) {
    return `${Math.floor(timeDifference / minuteInMilliseconds)} minutes ago`;
  } else if (timeDifference < dayInMilliseconds) {
    return `${Math.floor(timeDifference / hourInMilliseconds)} hours ago`;
  } else if (timeDifference < monthInMilliseconds) {
    return `${Math.floor(timeDifference / dayInMilliseconds)} days ago`;
  } else if (timeDifference < yearInMilliseconds) {
    return `${Math.floor(timeDifference / monthInMilliseconds)} months ago`;
  } else {
    return `${Math.floor(timeDifference / yearInMilliseconds)} years ago`;
  }
}
