export function changeCalendar(value: Date, countDay: number): string {
  const newDate: Date = new Date(value);
  const currentDay: number = value.getDate();
  newDate.setDate(currentDay + countDay);
  return 'Дѣнь ' +
    `${newDate.getDate()}` +
    ' Мѣсяцъ ' +
    `${(newDate.getMonth() + 1)}` +
    ' Годъ ' +
    `${newDate.getFullYear()}`
}
