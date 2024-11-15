export const StickyWaxTable = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mx-4 my-6">
      <h2 className="text-2xl font-bold text-cyan-950 mb-4 text-center">
        Chemical Properties Of The Sticky Wax
      </h2>
      
      <div className="overflow-x-auto mx-12 my-6">
        <table className="min-w-full text-left text-gray-800">
          <thead className="bg-gray-200 border-b border-teal-500">
            <tr>
              <th className="px-4 py-2 font-semibold text-teal-500">
                Technical Data
              </th>
              <th className="px-4 py-2 font-semibold text-teal-500">
                Specifications
              </th>
              <th className="px-4 py-2 font-semibold text-teal-500">
                Technical Data
              </th>
              <th className="px-4 py-2 font-semibold text-teal-500">
                Specifications
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            <tr>
              <td className="px-4 py-2">Products Name</td>
              <td className="px-4 py-2">Sticky Wax</td>
              <td className="px-4 py-2">Colour Saybolt</td>
              <td className="px-4 py-2">+28</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Wax Colour</td>
              <td className="px-4 py-2">Brown</td>
              <td className="px-4 py-2">light Stability</td>
              <td className="px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Melting Point</td>
              <td className="px-4 py-2">58° to 60°C</td>
              <td className="px-4 py-2">Impurity</td>
              <td className="px-4 py-2">nill</td>
              
            </tr>
            <tr>
              <td className="px-4 py-2">Odor</td>
              <td className="px-4 py-2">0</td>
              <td className="px-4 py-2">Penetration at 25°C</td>
              <td className="px-4 py-2">18</td>
            </tr>
            
            <tr>
              <td className="px-4 py-2">Oil Content</td>
              <td className="px-4 py-2">0.5% max</td>
              <td className="px-4 py-2">Moisture</td>
              <td className="px-4 py-2">nill</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
