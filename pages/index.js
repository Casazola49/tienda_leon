import Head from 'next/head';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leon Store</title>
        <meta name="description" content="Leon Store - Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
        <section className="w-full max-w-xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Bienvenido a Leon Store
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tu tienda de confianza para productos de calidad.
            </p>
            <div className="mt-8">
              <button
                onClick={() => signIn('credentials', { callbackUrl: '/' })}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}