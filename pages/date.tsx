import {
  add,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarWeeks,
  differenceInCalendarYears,
} from 'date-fns';
import { NextPage } from 'next';
import { useState } from 'react';

const DatePage: NextPage = () => {
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

  const handleChangeStartYear: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setStartYear(value);
    } else {
      setStartYear(Number.parseInt(value));
    }
  };
  const handleChangeStartMonth: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setStartMonth(value);
    } else {
      setStartMonth(Number.parseInt(value));
    }
  };
  const handleChangeStartDay: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setStartDay(value);
    } else {
      setStartDay(Number.parseInt(value));
    }
  };
  const handleChangeEndYear: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setEndYear(value);
    } else {
      setEndYear(Number.parseInt(value));
    }
  };
  const handleChangeEndMonth: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setEndMonth(value);
    } else {
      setEndMonth(Number.parseInt(value));
    }
  };
  const handleChangeEndDay: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setEndDay(value);
    } else {
      setEndDay(Number.parseInt(value));
    }
  };
  const handleChangeIsInclude: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setIsInclude(value === '1');
  };
  const handleClickSubmitButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
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
  };
  const handleClickResetButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setStartYear(2021);
    setStartMonth(1);
    setStartDay(1);
    setEndYear(2021);
    setEndMonth(1);
    setEndDay(1);
    setIsInclude(true);
  };

  return (
    <main>
      <h1>日数計算（日付−日付）</h1>
      <p>異なる日付間の日数、週数、年月数を計算します。生まれてから何日間経ったかが計算できます。</p>
      <form>
        <div>
          <label>開始日</label>
          <input type="number" value={startYear} onChange={handleChangeStartYear} />
          <span>年</span>
          <input type="number" value={startMonth} onChange={handleChangeStartMonth} />
          <span>月</span>
          <input type="number" value={startDay} onChange={handleChangeStartDay} />
          <span>日</span>
        </div>
        <div>
          <label>終了日</label>
          <input type="number" value={endYear} onChange={handleChangeEndYear} />
          <span>年</span>
          <input type="number" value={endMonth} onChange={handleChangeEndMonth} />
          <span>月</span>
          <input type="number" value={endDay} onChange={handleChangeEndDay} />
          <span>日</span>
        </div>
        <div>
          <span>初日を&ensp;</span>
          <label>含む</label>
          <input type="radio" value="1" checked={isInclude} onChange={handleChangeIsInclude} />
          <label>含まない</label>
          <input type="radio" value="2" checked={!isInclude} onChange={handleChangeIsInclude} />
        </div>
        <input type="submit" value="計算" onClick={handleClickSubmitButton} />
        <input type="reset" value="クリア" onClick={handleClickResetButton} />
        <output>
          <div>日数{resultDays}日</div>
          <div>
            週数{resultWeeks}週+{resultDays % 7}日
          </div>
          <div>
            月数{resultMonths}月+{resultDays % 30}日
          </div>
          <div>
            年数{resultYears}年+{resultDays % 365}日
          </div>
          <div>
            年月数{resultYears}年+{resultMonths % 12}月+{Math.floor((resultDays / 12) % 30)}日
          </div>
        </output>
      </form>
    </main>
  );
};
export default DatePage;
