import { FaUsers, FaBible, FaPrayingHands } from 'react-icons/fa';

export default function QuickActions() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Quick Actions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper
          pellentesque ut. Nam sed non nullam nisi non pulvinar.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-gray-200 rounded-full mx-auto mb-4">
              <FaUsers className="text-xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Meet Friends</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet ipsum ipsum dolor sit amet ipsumdolor sit amet
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-red-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mx-auto mb-4">
              <FaBible className="text-xl text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Read The Bible</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet ipsum ipsum dolor sit amet ipsumdolor sit amet
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-green-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mx-auto mb-4">
              <FaPrayingHands className="text-xl text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Join Prayer Rooms</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet ipsum ipsum dolor sit amet ipsumdolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
