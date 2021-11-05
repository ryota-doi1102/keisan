import { NextPage } from 'next';
import Link from 'next/link';

const TopPage: NextPage = () => (
  <main>
    <ul>
      <li>
        <Link href="/bmi">
          <a>ＢＭＩと適正体重</a>
        </Link>
      </li>
      <li>
        <Link href="/bmr">
          <a>基礎代謝</a>
        </Link>
      </li>
      <li>
        {/* TODO: 時刻計算（時刻＋経過時間） */}
        <Link href="/time">
          <a>時刻計算（時刻＋経過時間）</a>
        </Link>
      </li>
      <li>
        {/* TODO: 日数計算（日付−日付） */}
        <Link href="/date">
          <a>日数計算（日付−日付）</a>
        </Link>
      </li>
      <li>
        {/* TODO: 日付⇒UNIX時間変換 */}
        <Link href="/unixtime">
          <a>日付⇒UNIX時間変換</a>
        </Link>
      </li>
    </ul>
  </main>
);
export default TopPage;
