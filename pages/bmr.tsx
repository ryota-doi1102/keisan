import useCalculateBmr from 'hooks/useCalculateBmr';
import { NextPage } from 'next';

const BmrPage: NextPage = () => {
  const { age, sex, height, weight, bmr, changeAge, changeSex, changeHeight, changeWeight, calculate, reset } =
    useCalculateBmr();

  const handleChangeAge: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    changeAge(event.target.value);
  };
  const handleChangeSex: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    changeSex(event.target.value);
  };
  const handleChangeHeight: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    changeHeight(event.target.value);
  };
  const handleChangeWeight: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    changeWeight(event.target.value);
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
      <h1>基礎代謝</h1>
      <p>生命を維持するために必要なエネルギー量である基礎代謝量（BMR）を計算します。</p>
      <form>
        <div>
          <label>年齢</label>
          <input type="number" value={age} onChange={handleChangeAge} />
          <label>男</label>
          <input type="radio" value={1} checked={sex === 1} onChange={handleChangeSex} />
          <label>女</label>
          <input type="radio" value={2} checked={sex === 2} onChange={handleChangeSex} />
        </div>
        <div>
          <label>身長</label>
          <input type="number" value={height} onChange={handleChangeHeight} />
          <span>cm</span>
        </div>
        <div>
          <label>体重</label>
          <input type="number" value={weight} onChange={handleChangeWeight} />
          <span>kg</span>
        </div>
        <input type="submit" value="計算" onClick={handleClickSubmitButton} />
        <input type="reset" value="クリア" onClick={handleClickResetButton} />
        <div>
          <output>基礎代謝量:{bmr}kcal</output>
        </div>
      </form>
    </main>
  );
};
export default BmrPage;
