import Head from 'next/head';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ovnis de Tampico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bienvenido a <span className="text-blue-600">Ovnis de Tampico!</span>
        </h1>

        <p className="mt-3 text-2xl">
          Aquí encontrarás información de{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            los aliens en la playa Miramar
          </code>
        </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://tampicoextraterrestre.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TampicoExtraterrestre.com
        </a>
      </footer>
    </div>
  );
};

export default Home;
