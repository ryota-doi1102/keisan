import useCalculateBmi from 'hooks/useCalculateBmi';
import { NextPage } from 'next';

const BmiPage: NextPage = () => {
  const { weight, height, bmi, appropriateWeight, changeHeight, changeWeight, calculate, reset } = useCalculateBmi();

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
      <h1>ＢＭＩと適正体重</h1>
      <p>身長と体重から肥満度を示すBMIと適正体重を計算します。</p>
      <form>
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
          <output>BMI:{bmi}</output>
        </div>
        <div>
          <output>適正体重:{appropriateWeight}</output>
        </div>
      </form>
    </main>
  );
};
export default BmiPage;
