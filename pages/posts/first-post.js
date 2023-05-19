import Link from 'next/link';
import Head from 'next/head';
import Index from '../../components/Layout';

export default function FirstPost() {
  return (
    <Index>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Index>
  );
}
