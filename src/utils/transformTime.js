function transformTime(time) {
  let hrs, mins, secs;
  secs = time % 60 < 10 ? '0' + (time % 60) : time % 60;
  mins = Math.floor((time - (time % 60)) / 60);

  if (mins >= 60) {
    hrs = Math.floor(mins / 60);
    mins = mins % 60 < 10 ? '0' + (mins % 60) : mins % 60;
  }
  if (hrs) {
    return `${hrs}:${mins}:${secs}`;
  } else {
    return `${mins}:${secs}`;
  }
}

export default transformTime;
