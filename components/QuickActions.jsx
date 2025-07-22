import { FaUsers, FaBible, FaPrayingHands, FaMeetup } from 'react-icons/fa';

export default function QuickActions() {
  return (
    <section className="py-12 px-4 bg-[#FAFAFA] font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#645674] mb-2">Quick Actions</h2>
        <p className="text-[#333333] md:text-xl font-semibold font-lg max-w-2xl mx-auto mb-10">
          You don’t have to go through the day alone. This is your quiet space for meaningful connection, take the step that feels right today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center h-[300px] bg-[#F2EEF6] border-1 border-[#85729A] rounded-[24px] p-6 hover:shadow-xl hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#85729A] rounded-full mx-auto mb-4">
              <FaUsers className="w-[48px] h-[48px] text-white " />
            </div>
            <h3 className="text-xl font-bold text-[#85729A] mb-2">Meet Friends</h3>
            <p className="max-w-2xl mx-auto mb-10 text-black">
              Connect with someone from your trusted list who understands your heart.
            </p>
          </div>

          <div className=" flex flex-col items-center justify-center h-[300px] bg-[#FFF2EB] border-1 border-[#B59888] rounded-[24px] p-6 hover:shadow-xl hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#B59888] rounded-full mx-auto mb-4">
              <FaBible className="w-[48px] h-[48px] text-white " />
            </div>
            <h3 className="text-xl font-bold text-[#B59888] mb-2">Read The Bible</h3>
            <p className="max-w-2xl mx-auto mb-10 text-black">
              Join others in peaceful, voice-led scripture reading. Find comfort in the word of God.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center h-[300px] bg-[#E6F2E6] border-1 border-[#008000] rounded-[24px] p-6 hover:shadow-xl hover:scale-105 transform transition-transform duration-300">
            <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#008000] rounded-full mx-auto mb-4">
              <FaMeetup className="w-[48px] h-[48px] text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#008000] mb-2">Join Prayer Rooms</h3>
            <p className="max-w-2xl mx-auto mb-10 text-black">
              Step into a live prayer room and feel the power of shared faith. You are never praying alone.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
