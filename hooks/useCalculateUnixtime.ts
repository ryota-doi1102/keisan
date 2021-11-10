import { getUnixTime } from "date-fns";
import { useCallback, useState } from "react";

const useCalculateUnixtime = () => {
  const [targetYear, setTargetYear] = useState<number | ''>(0);
  const [targetMonth, setTargetMonth] = useState<number | ''>(0);
  const [targetDay, setTargetDay] = useState<number | ''>(0);
  const [targetHour, setTargetHour] = useState<number | ''>(0);
  const [targetMinute, setTargetMinute] = useState<number | ''>(0);
  const [targetSecond, setTargetSecond] = useState<number | ''>(0);
  const [resultTime, setResultTime] = useState(0);

  const changeTargetYear = useCallback((value: string) => {
    if (value === '') {
      setTargetYear(value);
    } else {
      setTargetYear(Number.parseInt(value));
    }
  },[]);
  const changeTargetMonth = useCallback((value: string) => {
    if (value === '') {
      setTargetMonth(value);
    } else {
      setTargetMonth(Number.parseInt(value));
    }
  },[]);
  const changeTargetDay = useCallback((value: string) => {
    if (value === '') {
      setTargetDay(value);
    } else {
      setTargetDay(Number.parseInt(value));
    }
  },[]);
  const changeTargetHour = useCallback((value: string) => {
    if (value === '') {
      setTargetHour(value);
    } else {
      setTargetHour(Number.parseInt(value));
    }
  },[]);
  const changeTargetMinute = useCallback((value: string) => {
    if (value === '') {
      setTargetMinute(value);
    } else {
      setTargetMinute(Number.parseInt(value));
    }
  },[]);
  const changeTargetSecond = useCallback((value: string) => {
    if (value === '') {
      setTargetSecond(value);
    } else {
      setTargetSecond(Number.parseInt(value));
    }
  },[]);
  const calculate = useCallback(() => {
    const targetDate = new Date();
    const years = targetYear === '' ? 0 : targetYear;
    const months = targetMonth === '' ? 0 : targetMonth - 1;
    const days = targetDay === '' ? 0 : targetDay;
    const hours = targetHour === '' ? 0 : targetHour;
    const minutes = targetMinute === '' ? 0 : targetMinute;
    const seconds = targetSecond === '' ? 0 : targetSecond;
    targetDate.setFullYear(years);
    targetDate.setMonth(months);
    targetDate.setDate(days);
    targetDate.setHours(hours);
    targetDate.setMinutes(minutes);
    targetDate.setSeconds(seconds);
    setResultTime(getUnixTime(targetDate));
  },[]);
  const reset = useCallback(() => {
    setTargetYear(0);
    setTargetMonth(0);
    setTargetDay(0);
    setTargetHour(0);
    setTargetMinute(0);
    setTargetSecond(0);
  },[]);
  return {
    targetYear,
    targetMonth,
    targetDay,
    targetHour,
    targetMinute,
    targetSecond,
    resultTime,
    changeTargetYear,
    changeTargetMonth,
    changeTargetDay,
    changeTargetHour,
    changeTargetMinute,
    changeTargetSecond,
    calculate,
    reset,
  }
};
export default useCalculateUnixtime;
