import { useState } from 'react';

export default function CreateForm({ onCookieReportCreate }) {
  const [location, setLocation] = useState('');
  const [minimumCustomers, setMinimumCustomers] = useState('');
  const [maximumCustomers, setMaximumCustomers] = useState('');
  const [averageCookies, setAverageCookies] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const newReport = {
      location: location,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      minimum_customers_per_hour: parseInt(minimumCustomers),
      maximum_customers_per_hour: parseInt(maximumCustomers),
      average_cookies_per_sale: parseInt(averageCookies),
    };

    onCookieReportCreate(newReport);
    setLocation('');
    setMinimumCustomers('');
    setMaximumCustomers('');
    setAverageCookies('');
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-green-300 p-4 mb-4">
      <h1 className="font-medium text-2xl text-center mb-4">Create Cookie Stand</h1>

      <label htmlFor="location" className="block mb-1 text-2xl">
        Location
      </label>
      <input
        type="text"
        id="location"
        className="w-full h-10 px-3 text-base"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="minimumCustomers" className="block mb-1 text-2xl">
            Minimum Customers per Hour
          </label>
          <input
            type="number"
            id="minimumCustomers"
            className="w-full h-10 px-3 text-base"
            value={minimumCustomers}
            onChange={(e) => setMinimumCustomers(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="maximumCustomers" className="block mb-1 text-2xl">
            Maximum Customers per Hour
          </label>
          <input
            type="number"
            id="maximumCustomers"
            className="w-full h-10 px-3 text-base"
            value={maximumCustomers}
            onChange={(e) => setMaximumCustomers(e.target.value)}
          />
        </div>
      </div>

      <label htmlFor="averageCookies" className="block mt-4 mb-1 text-2xl">
        Average Cookies per Sale
      </label>
      <input
        type="number"
        id="averageCookies"
        className="w-full h-10 px-3 text-base"
        value={averageCookies}
        onChange={(e) => setAverageCookies(e.target.value)}
      />

      <button type="submit" className="bg-green-500 py-2 px-4 mt-4">
        Create
      </button>
    </form>
  );
}