import { isSex, Sex } from '@types';
import { NextPage } from 'next';
import { useState } from 'react';
import { calculateBmr } from 'utils/calculator';

const BmrPage: NextPage = () => {
  const [age, setAge] = useState<number | ''>(0);
  const [sex, setSex] = useState<Sex>(1);
  const [height, setHeight] = useState<number | ''>(0);
  const [weight, setWeight] = useState<number | ''>(0);
  const [bmr, setBmr] = useState(0);

  const handleChangeAge: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (value === '') {
      setAge(value);
    } else {
      setAge(Number.parseInt(value));
    }
  };
  const handleChangeSex: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = Number.parseInt(event.target.value);
    if (isSex(value)) {
      setSex(value);
    }
  };
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
    if (age && height && weight) {
      const bmr = calculateBmr(age, height, weight, sex);
      setBmr(bmr);
    }
  };
  const handleClickResetButton: React.MouseEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setAge(0);
    setSex(1);
    setHeight(0);
    setWeight(0);
    setBmr(0);
  };

  return (
    <main>
      <h2>基礎代謝</h2>
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
          <label>
            基礎代謝量
            <output>{bmr}</output>
            <span>kcal</span>
          </label>
        </div>
      </form>
    </main>
  );
};
export default BmrPage;
