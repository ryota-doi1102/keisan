import { NextPage } from 'next';

const TopPage: NextPage = () => (
  <>
    <header>keisan</header>
    <main>
      <section>
        <h2>基礎代謝</h2>
        <p>生命を維持するために必要なエネルギー量である基礎代謝量（BMR）を計算します。</p>
        <table>
          <tbody>
            <tr>
              <label>年齢</label>
              <td>
                <input type="number" name="age" value="0"></input>
              </td>
              <td>歳</td>
              <label>男</label>
              <input type="radio" id="man" name="sex" value="man" />
              <label>女</label>
              <input type="radio" id="woman" name="sex" value="woman" />
            </tr>
            <tr>
              <label>身長</label>
              <td>
                <input type="number" name="Height" value="0"></input>
              </td>
              <td>cm</td>
            </tr>
            <tr>
              <label>体重</label>
              <td>
                <input type="number" name="weight" value="0"></input>
              </td>
              <td>kg</td>
            </tr>
          </tbody>
        </table>
        <button>計算</button>
        <button>クリア</button>
        <p>
          基礎代謝量
          <input type="text" name="result"></input>
        </p>
      </section>
      <section>
        <h2>ＢＭＩと適正体重</h2>
        <p>身長と体重から肥満度を示すBMIと適正体重を計算します。</p>
        <table>
          <tbody>
            <tr>
              <label>身長</label>
              <td>
                <input type="number" name="Height" value="0"></input>
              </td>
              <td>cm</td>
            </tr>
            <tr>
              <label>体重</label>
              <td>
                <input type="number" name="weight" value="0"></input>
              </td>
              <td>kg</td>
            </tr>
          </tbody>
        </table>
        <button>計算</button>
        <button>クリア</button>
      </section>
    </main>
    <footer>copyright</footer>
  </>
);

export default TopPage;
