import Head from "next/head";

interface NextHeaderProps {
  title?: string;
  description?: string;
}

const NextHeader: React.FC<NextHeaderProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default NextHeader;
