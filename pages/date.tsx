import useCalculateDate from 'hooks/useCalculateDate';
import { NextPage } from 'next';

const DatePage: NextPage = () => {
  const {
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
  } = useCalculateDate();
  const handleChangeStartYear: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeStartYear(value);
  };
  const handleChangeStartMonth: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeStartMonth(value);
  };
  const handleChangeStartDay: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeStartDay(value);
  };
  const handleChangeEndYear: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeEndYear(value);
  };
  const handleChangeEndMonth: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeEndMonth(value);
  };
  const handleChangeEndDay: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeEndDay(value);
  };
  const handleChangeIsInclude: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeIsInclude(value);
  };
  const handleClickSubmitButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    calculate();
  };
  const handleClickResetButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    reset();
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
