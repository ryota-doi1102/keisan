import { NextPage } from 'next';
import { useState } from 'react';
import { calculateAppropriateWeight, calculateBmi } from 'utils/calculator';

const BmiPage: NextPage = () => {
  const [height, setHeight] = useState<number | ''>(0);
  const [weight, setWeight] = useState<number | ''>(0);
  const [bmi, setBmi] = useState(0);
  const [appropriateWeight, setAppropriateWeight] = useState(0);

  const handleChangeHeight: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setHeight(value);
    } else {
      setHeight(Number.parseInt(value));
    }
  };
  const handleChangeWeight: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setWeight(value);
    } else {
      setWeight(Number.parseInt(value));
    }
  };

  const handleClickSubmitButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (weight && height) {
      const bmi = calculateBmi(height, weight);
      setBmi(bmi);
      console.log(bmi);
      const appropriateWeight = calculateAppropriateWeight(height);
      setAppropriateWeight(appropriateWeight);
    }
  };
  const handleClickResetButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setHeight(0);
    setWeight(0);
    setBmi(0);
    setAppropriateWeight(0);
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
