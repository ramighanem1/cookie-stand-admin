// pages/index.js
import Head from 'next/head';
import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';
import {useAuth} from "../contexts/auth"
import Header from '../components/Header';
export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header /> 
      
      <main className="p-4">
        {user ? (
          <CookieStandAdmin />
        ) : (
          <LoginForm />
        )}
      </main>
    </>
  );
}