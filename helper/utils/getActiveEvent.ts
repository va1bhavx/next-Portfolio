import { EVENTS } from "../data/EventData";

export function getActiveEvent(today = new Date()) {
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return EVENTS.find((event) => {
    if (event.rule === "year-start") return month === 1 && day <= 3;
    if (event.rule === "year-end") return month === 12 && day >= 28;

    if (event.month && event.day)
      return event.month === month && event.day === day;

    if (event.month && event.range)
      return (
        event.month === month &&
        day >= event.range.from &&
        day <= event.range.to
      );

    return false;
  });
}
