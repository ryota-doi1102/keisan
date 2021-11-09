import { sub, add, differenceInDays, format } from 'date-fns';
import { useCallback, useState } from 'react';

const useCalculateTime = () => {
  const [targetHour, setTargetHour] = useState<number | ''>(0);
  const [targetMinute, setTargetMinute] = useState<number | ''>(0);
  const [targetSecond, setTargetSecond] = useState<number | ''>(0);
  const [elapsedHour, setElapsedHour] = useState<number | ''>(0);
  const [elapsedMinute, setElapsedMinute] = useState<number | ''>(0);
  const [elapsedSecond, setElapsedSecond] = useState<number | ''>(0);
  const [isBefore, setIsBefore] = useState(true);
  const [time, setTime] = useState('');
  const [difference, setDifference] = useState(0);

  const changeTargetHour = useCallback((value: string) => {
    if (value === '') {
      setTargetHour(value);
    } else {
      setTargetHour(Number.parseInt(value));
    }
  }, []);

  const changeTargetMinute = useCallback((value: string) => {
    if (value === '') {
      setTargetMinute(value);
    } else {
      setTargetMinute(Number.parseInt(value));
    }
  }, []);

  const changeTargetSecond = useCallback((value: string) => {
    if (value === '') {
      setTargetSecond(value);
    } else {
      setTargetSecond(Number.parseInt(value));
    }
  }, []);

  const changeElapsedHour = useCallback((value: string) => {
    if (value === '') {
      setElapsedHour(value);
    } else {
      setElapsedHour(Number.parseInt(value));
    }
  }, []);

  const changeElapsedMinute = useCallback((value: string) => {
    if (value === '') {
      setElapsedMinute(value);
    } else {
      setElapsedMinute(Number.parseInt(value));
    }
  }, []);

  const changeElapsedSecond = useCallback((value: string) => {
    if (value === '') {
      setElapsedSecond(value);
    } else {
      setElapsedSecond(Number.parseInt(value));
    }
  }, []);

  const changeIsBefore = useCallback((value: string) => {
    setIsBefore(value === '1');
  }, []);

  const calculate = useCallback(() => {
    const targetDate = new Date();
    const hours = targetHour === '' ? 0 : targetHour;
    const minutes = targetMinute === '' ? 0 : targetMinute;
    const seconds = targetSecond === '' ? 0 : targetSecond;
    targetDate.setHours(hours);
    targetDate.setMinutes(minutes);
    targetDate.setSeconds(seconds);
    let elapsedDate: Date;
    if (isBefore) {
      elapsedDate = sub(targetDate, {
        hours: elapsedHour === '' ? 0 : elapsedHour,
        minutes: elapsedMinute === '' ? 0 : elapsedMinute,
        seconds: elapsedSecond === '' ? 0 : elapsedSecond,
      });
    } else {
      elapsedDate = add(targetDate, {
        hours: elapsedHour === '' ? 0 : elapsedHour,
        minutes: elapsedMinute === '' ? 0 : elapsedMinute,
        seconds: elapsedSecond === '' ? 0 : elapsedSecond,
      });
    }
    setTime(format(elapsedDate, 'HH:mm:ss'));
    setDifference(differenceInDays(elapsedDate, targetDate));
  }, []);

  const reset = useCallback(() => {
    setTargetHour(0);
    setTargetMinute(0);
    setTargetSecond(0);
    setElapsedHour(0);
    setElapsedMinute(0);
    setElapsedSecond(0);
    setIsBefore(true);
    setTime('');
    setDifference(0);
  }, []);

  return {
    targetHour,
    targetMinute,
    targetSecond,
    elapsedHour,
    elapsedMinute,
    elapsedSecond,
    isBefore,
    time,
    difference,
    changeTargetHour,
    changeTargetMinute,
    changeTargetSecond,
    changeElapsedHour,
    changeElapsedMinute,
    changeElapsedSecond,
    changeIsBefore,
    calculate,
    reset,
  }
};

export default useCalculateTime;
