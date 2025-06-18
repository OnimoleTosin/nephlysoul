import Link from 'next/link';

export default function Promotion() {
    return (
        <section className="bg-gradient-to-br from-[#8C766A] to-[#5B4F6A] text-white py-24 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    For Promotions
                </h2>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
                <div className='h-2 w-2 rounded-full cursor-pointer'></div>
            </div>
        </section>
    );
}
