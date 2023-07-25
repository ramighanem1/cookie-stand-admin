import Head from 'next/head';
import { useState } from 'react';
import { reports } from '../data.js';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import Footer from '../components/Footer';


export default function CookieStandAdmin() {
    const [cookieReports, setCookieReports] = useState(reports);
  
    return (
      <>
        <Head>
          <title>Cookie Stand Admin</title>
        </Head>
        <main className="p-4">
          <CreateForm onCookieReportCreate={handleCookieReportCreate} />
          {cookieReports.length === 0 ? (
            <h2 className="text-center text-2xl mt-8">No Cookie Stands Available</h2>
          ) : (
            <ReportTable reports={cookieReports} />
          )}
        </main>
  
        <Footer reports={cookieReports} />
      </>
    );
  
    function handleCookieReportCreate(newReport) {
      setCookieReports([...cookieReports, newReport]);
    }
  }