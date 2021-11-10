import useCalculateUnixtime from 'hooks/useCalculateUnixtime';
import { NextPage } from 'next';

const UnixtimePage: NextPage = () => {
  const {
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
  } = useCalculateUnixtime();

  const handleChangeTargetYear: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeTargetYear(value);
  };
  const handleChangeTargetMonth: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeTargetMonth(value);
  };
  const handleChangeTargetDay: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeTargetDay(value);
  };
  const handleChangeTargetHour: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeTargetHour(value);
  };
  const handleChangeTargetMinute: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeTargetMinute(value);
  };
  const handleChangeTargetSecond: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeTargetSecond(value);
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
      <h1>日付⇒UNIX時間変換</h1>
      <p>日付からUNIX時間（UNIX時刻）に変換します。</p>
      <form>
        <div>
          <label>指定日時</label>
          <input type="number" value={targetYear} onChange={handleChangeTargetYear} />
          <span>年</span>
          <input type="number" value={targetMonth} onChange={handleChangeTargetMonth} />
          <span>月</span>
          <input type="number" value={targetDay} onChange={handleChangeTargetDay} />
          <span>日</span>
          <input type="number" value={targetHour} onChange={handleChangeTargetHour} />
          <span>時</span>
          <input type="number" value={targetMinute} onChange={handleChangeTargetMinute} />
          <span>分</span>
          <input type="number" value={targetSecond} onChange={handleChangeTargetSecond} />
          <span>秒</span>
        </div>
        <input type="submit" value="計算" onClick={handleClickSubmitButton} />
        <input type="reset" value="クリア" onClick={handleClickResetButton} />
        <output>UNIX時間{resultTime}</output>
      </form>
    </main>
  );
};
export default UnixtimePage;
