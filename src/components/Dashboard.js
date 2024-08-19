// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
//       {/* Add your dashboard content here */}
//     </div>
//   );
// };

// export default Dashboard;
//it is updated one above is 1st one
import React from 'react';
import { sampleData } from '../data';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Data</h2>
      <ul>
        {sampleData.map(item => (
          <li key={item.id} className="mb-2 p-4 bg-gray-100 rounded shadow">
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

