// 18:00 -> ["10","80"] -> [18, 00]

export function convertHourStringToMinutes(hourString: string){
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}