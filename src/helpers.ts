export interface DisplayState {
  time: number; // running time
  timeType: "Session" | "Break"; // displays SESSION or BREAK
  timerRunning: boolean; // play or pause
}

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? "0" + minutes.toString() : minutes}:${
    seconds < 10 ? "0" + seconds.toString() : seconds
  }`; // put a 0 in front if less than 10
};
