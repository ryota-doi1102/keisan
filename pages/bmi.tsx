import { NextPage } from 'next';
import { useState } from 'react';
import { calculateAppropriateWeight, calculateBmi } from 'utils/calculator';

const BmiPage: NextPage = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [appropriateWeight, setAppropriateWeight] = useState(0);

  const handleChangeHeight: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = Number.parseInt(event.target.value);
    setHeight(value);
  };
  const handleChangeWeight: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = Number.parseInt(event.target.value);
    setWeight(value);
  };

  const handleClickSubmitButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const bmi = calculateBmi(weight, height);
    setBmi(bmi);
    const appropriateWeight = calculateAppropriateWeight(height);
    setAppropriateWeight(appropriateWeight);
  };

  return (
    <main>
      <section>
        <h2>ＢＭＩと適正体重</h2>
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
          {/* TODO: リセットボタンのクリックハンドラを実装する */}
          <input type="reset" value="クリア" />
          <div>
            <label>
              BMI:
              <output>{bmi}</output>
            </label>
          </div>
          <div>
            <label>
              適正体重:
              <output>{appropriateWeight}</output>
            </label>
          </div>
        </form>
      </section>
    </main>
  );
};
export default BmiPage;
