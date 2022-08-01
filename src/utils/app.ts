const MONTHS = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];
const DAYS = ['Dom', 'Seg','Ter','Qua','Qui','Sex','Sáb'];

export const timeNow = new Date();

export const showDate = (date: Date) => {
  const day = date.getDate(),
  month = date.getMonth(), year = date.getFullYear();

  return `${day > 9 ? day : '0'+day }/${month > 9 ? month : '0'+month }/${year}`;
}

export const formatDateString = (timestamp: any) => {
  const date: Date = timestamp.toDate();
  const day = date.getDate();

  if(timeNow.getDate() === day) return `Hoje`;
  return `${DAYS[date.getDay()]}, ${day > 9 ? day : '0'+day} ${MONTHS[date.getMonth()]}`;
}

export const firestoreAutoId = (): string => {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let autoId = ''

  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(
      Math.floor(Math.random() * CHARS.length)
    )
  }
  return autoId
}
