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
    </ul>
  </main>
);
export default TopPage;
