import { add, differenceInDays, format, sub } from 'date-fns';
import { NextPage } from 'next';
import { useState } from 'react';

const TimePage: NextPage = () => {
  const [targetHour, setTargetHour] = useState<number | ''>(0);
  const [targetMinute, setTargetMinute] = useState<number | ''>(0);
  const [targetSecond, setTargetSecond] = useState<number | ''>(0);
  const [elapsedHour, setElapsedHour] = useState<number | ''>(0);
  const [elapsedMinute, setElapsedMinute] = useState<number | ''>(0);
  const [elapsedSecond, setElapsedSecond] = useState<number | ''>(0);
  const [isBefore, setIsBefore] = useState(true);
  const [time, setTime] = useState<Date | null>(null);
  const [difference, setDifference] = useState(0);

  const handleChangeTargetHour: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setTargetHour(value);
    } else {
      setTargetHour(Number.parseInt(value));
    }
  };
  const handleChangeTargetMinute: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setTargetMinute(value);
    } else {
      setTargetMinute(Number.parseInt(value));
    }
  };
  const handleChangeTargetSecond: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setTargetSecond(value);
    } else {
      setTargetSecond(Number.parseInt(value));
    }
  };
  const handleChangeElapsedHour: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setElapsedHour(value);
    } else {
      setElapsedHour(Number.parseInt(value));
    }
  };
  const handleChangeElapsedMinute: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setElapsedMinute(value);
    } else {
      setElapsedMinute(Number.parseInt(value));
    }
  };
  const handleChangeElapsedSecond: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setElapsedSecond(value);
    } else {
      setElapsedSecond(Number.parseInt(value));
    }
  };
  const handleChangeIsBefore: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setIsBefore(value === '1');
  };

  const handleClickSubmitButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
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
    setTime(elapsedDate);
    setDifference(differenceInDays(elapsedDate, targetDate));
  };
  const handleClickResetButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setTargetHour(0);
    setTargetMinute(0);
    setTargetSecond(0);
    setElapsedHour(0);
    setElapsedMinute(0);
    setElapsedSecond(0);
    setIsBefore(true);
    setTime(null);
    setDifference(0);
  };

  return (
    <main>
      <h1>時刻計算（時刻＋経過時間）</h1>
      <p>指定時刻から、ある時間経過後(前)の時刻を計算します。</p>
      <form>
        <div>
          <label>指定時刻</label>
          <input type="number" value={targetHour} onChange={handleChangeTargetHour} />
          <span>時</span>
          <input type="number" value={targetMinute} onChange={handleChangeTargetMinute} />
          <span>分</span>
          <input type="number" value={targetSecond} onChange={handleChangeTargetSecond} />
          <span>秒</span>
        </div>
        <div>
          <label>経過時間</label>
          <input type="number" value={elapsedHour} onChange={handleChangeElapsedHour} />
          <span>時間</span>
          <input type="number" value={elapsedMinute} onChange={handleChangeElapsedMinute} />
          <span>分</span>
          <input type="number" value={elapsedSecond} onChange={handleChangeElapsedSecond} />
          <span>秒</span>
          <label>前</label>
          <input type="radio" value="1" checked={isBefore} onChange={handleChangeIsBefore} />
          <label>後</label>
          <input type="radio" value="2" checked={!isBefore} onChange={handleChangeIsBefore} />
        </div>
        <input type="submit" value="計算" onClick={handleClickSubmitButton} />
        <input type="reset" value="クリア" onClick={handleClickResetButton} />
        <div>
          <output>
            {difference}日{time && format(time, 'HH:mm:ss')}
          </output>
        </div>
      </form>
    </main>
  );
};
export default TimePage;
