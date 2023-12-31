import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler
} from 'react-native-calendars'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { ptBr } from './localeConfig'
import { generateInterval } from './generateInterval';

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number
}

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  }
}

interface CalendarProps {
  marketDates: MarkedDateProps;
  OnDayPress: DateCallbackHandler;
}

function Calendar({ marketDates, OnDayPress }: CalendarProps) {

  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={( direction ) =>
        <Feather
          size={24}
          color={theme.colors.shape}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      }
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textMonthFontFamily: theme.fonts.secondary_600,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={String(new Date())}
      markingType='period'
      markedDates={ marketDates }
      onDayPress={ OnDayPress }
    />
  )
}

export {
  Calendar,
  MarkedDateProps,
  DayProps,
  generateInterval
}
