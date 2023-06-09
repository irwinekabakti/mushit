const formatTime = (secs) => {
  let minutes = Math.floor(secs / 60);
  let seconds = secs - minutes * 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};

export { formatTime };
