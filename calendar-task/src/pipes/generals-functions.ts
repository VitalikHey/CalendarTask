export function changeCalendar(value: Date, isJulian: boolean): string {
  const newDate: Date = new Date(value);
  const currentDay: number = value.getDate();
  newDate.setDate(isJulian ? currentDay + 14 : currentDay + 2);
  return String(
    'Дѣнь ' +
      newDate.getDate() +
      ' Мѣсяцъ ' +
      (newDate.getMonth() + 1) +
      ' Годъ ' +
      newDate.getFullYear(),
  );
}
