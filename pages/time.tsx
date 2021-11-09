import useCalculateTime from 'hooks/useCalculateTime';
import { NextPage } from 'next';

const TimePage: NextPage = () => {
  const {
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
  } = useCalculateTime();

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
  const handleChangeElapsedHour: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeElapsedHour(value);
  };
  const handleChangeElapsedMinute: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeElapsedMinute(value);
  };
  const handleChangeElapsedSecond: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeElapsedSecond(value);
  };
  const handleChangeIsBefore: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    changeIsBefore(value);
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
            {difference}日{time}
          </output>
        </div>
      </form>
    </main>
  );
};
export default TimePage;
