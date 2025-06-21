import { FaUsers, FaBible, FaPrayingHands } from 'react-icons/fa';

export default function QuickActions() {
  return (
    <section className="py-12 px-4 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#645674] mb-2">Quick Actions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper
          pellentesque ut. Nam sed non nullam nisi non pulvinar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F2EEF6] border-1 border-[#85729A] rounded-3xl p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-[#85729A] rounded-full mx-auto mb-4">
              <FaUsers className="text-xl text-white " />
            </div>
            <h3 className="text-lg font-semibold text-[#85729A] mb-2">Meet Friends</h3>
            <p className="text-sm text-[#333333]">
              Lorem ipsum dolor sit amet ipsum ipsum dolor sit amet ipsumdolor sit amet
            </p>
          </div>

          <div className="bg-[#FFF2EB] border-1 border-[#B59888] rounded-3xl p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-[#B59888] rounded-full mx-auto mb-4">
              <FaBible className="text-xl text-white " />
            </div>
            <h3 className="text-lg font-semibold text-[#B59888] mb-2">Read The Bible</h3>
            <p className="text-sm text-[#333333]">
              Lorem ipsum dolor sit amet ipsum ipsum dolor sit amet ipsumdolor sit amet
            </p>
          </div>

          <div className="bg-[#E6F2E6] border-1 border-[#008000] rounded-3xl p-6 hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-[#008000] rounded-full mx-auto mb-4">
              <FaPrayingHands className="text-xl text-white " />
            </div>
            <h3 className="text-lg font-semibold text-[#008000] mb-2">Join Prayer Rooms</h3>
            <p className="text-sm text-[#333333]">
              Lorem ipsum dolor sit amet ipsum ipsum dolor sit amet ipsumdolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
