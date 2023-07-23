export default function ReportTable({ reports }) {
    const totalSalesPerHour = Array(14).fill(0);
  
    // Calculate the total sales per hour for all cookie stands
    reports.forEach((report) => {
      report.hourly_sales.forEach((sales, index) => {
        totalSalesPerHour[index] += sales;
      });
    });
  
    return (
      <table className="w-full border-collapse border border-green-500">
        <thead className="bg-green-500 text-black-50">
          <tr>
            <th className="border border-green-500 p-2">Location</th>
            {reports[0].hourly_sales.map((_, index) => (
              <th key={index} className="border border-green-500 p-2">
                {index}:00
              </th>
            ))}
            <th className="border border-green-500 p-2">Totals</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, reportIndex) => (
            <tr key={reportIndex}>
              <td className="border border-green-500 p-2">{report.location}</td>
              {report.hourly_sales.map((sales, index) => (
                <td key={index} className="border border-green-500 p-2">
                  {sales}
                </td>
              ))}
              <td className="border border-green-500 p-2 font-medium">
                {report.hourly_sales.reduce((acc, curr) => acc + curr, 0)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-green-500 text-black-50">
          <tr>
            <td className="border border-green-500 p-2">Totals</td>
            {totalSalesPerHour.map((total, index) => (
              <td key={index} className="border border-green-500 p-2 font-medium">
                {total}
              </td>
            ))}
            <td className="border border-green-500 p-2 font-medium">
              {totalSalesPerHour.reduce((acc, curr) => acc + curr, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }