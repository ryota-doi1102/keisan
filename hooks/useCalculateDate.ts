import {
  add,
  differenceInCalendarDays,
  differenceInCalendarWeeks,
  differenceInCalendarMonths,
  differenceInCalendarYears,
} from 'date-fns';
import { useCallback, useState } from 'react';

const useCalculateDate = () => {
  const [startYear, setStartYear] = useState<number | ''>(2021);
  const [startMonth, setStartMonth] = useState<number | ''>(1);
  const [startDay, setStartDay] = useState<number | ''>(1);
  const [endYear, setEndYear] = useState<number | ''>(2021);
  const [endMonth, setEndMonth] = useState<number | ''>(1);
  const [endDay, setEndDay] = useState<number | ''>(1);
  const [isInclude, setIsInclude] = useState(true);
  const [resultDays, setResultDays] = useState(0);
  const [resultWeeks, setResultWeeks] = useState(0);
  const [resultMonths, setResultMonths] = useState(0);
  const [resultYears, setResultYears] = useState(0);

  const changeStartYear = useCallback((value: string) => {
    if (value === '') {
      setStartYear(value);
    } else {
      setStartYear(Number.parseInt(value));
    }
  }, []);
  const changeStartMonth = useCallback((value: string) => {
    if (value === '') {
      setStartMonth(value);
    } else {
      setStartMonth(Number.parseInt(value));
    }
  }, []);
  const changeStartDay = useCallback((value: string) => {
    if (value === '') {
      setStartDay(value);
    } else {
      setStartDay(Number.parseInt(value));
    }
  }, []);
  const changeEndYear = useCallback((value: string) => {
    if (value === '') {
      setEndYear(value);
    } else {
      setEndYear(Number.parseInt(value));
    }
  }, []);
  const changeEndMonth = useCallback((value: string) => {
    if (value === '') {
      setEndMonth(value);
    } else {
      setEndMonth(Number.parseInt(value));
    }
  }, []);
  const changeEndDay = useCallback((value: string) => {
    if (value === '') {
      setEndDay(value);
    } else {
      setEndDay(Number.parseInt(value));
    }
  }, []);
  const changeIsInclude = useCallback((value: string) => {
    setIsInclude(value === '1');
  }, []);
  const calculate = useCallback(() => {
    const startDate = new Date();
    startDate.setFullYear(startYear === '' ? 0 : startYear);
    startDate.setMonth(startMonth === '' ? 0 : startMonth);
    startDate.setDate(startDay === '' ? 0 : startDay);
    let endDate = new Date();
    endDate.setFullYear(endYear === '' ? 0 : endYear);
    endDate.setMonth(endMonth === '' ? 0 : endMonth);
    endDate.setDate(endDay === '' ? 0 : endDay);
    if (isInclude) {
      endDate = add(endDate, { days: 1 });
    }
    setResultDays(differenceInCalendarDays(endDate, startDate));
    setResultWeeks(differenceInCalendarWeeks(endDate, startDate));
    setResultMonths(differenceInCalendarMonths(endDate, startDate));
    setResultYears(differenceInCalendarYears(endDate, startDate));
  }, []);
  const reset = useCallback(() => {
    setStartYear(2021);
    setStartMonth(1);
    setStartDay(1);
    setEndYear(2021);
    setEndMonth(1);
    setEndDay(1);
    setIsInclude(true);
  }, []);
  return{
    startDay,
    startMonth,
    startYear,
    endDay,
    endMonth,
    endYear,
    isInclude,
    resultDays,
    resultWeeks,
    resultMonths,
    resultYears,
    changeStartDay,
    changeStartMonth,
    changeStartYear,
    changeEndDay,
    changeEndMonth,
    changeEndYear,
    changeIsInclude,
    calculate,
    reset,
  }
};
export default useCalculateDate;
