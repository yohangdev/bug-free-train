import { fromUnixTime, format } from 'date-fns'
import { id } from 'date-fns/locale'

export function formatDateLong (date, formatStr = 'eeee, PP') {
  return format(fromUnixTime(date), formatStr, {
    locale: id
  })
}

export function formatDateShort (date, formatStr = 'eeee, PP') {
  return format(fromUnixTime(date), formatStr, {
    locale: id
  })
}

export function formatDateTimeShort (date, formatStr = 'eeee, PP p') {
  return format(fromUnixTime(date), formatStr, {
    locale: id
  })
}

export function formatTime (date, formatStr = 'p') {
  return format(fromUnixTime(date), formatStr, {
    locale: id
  })
}
