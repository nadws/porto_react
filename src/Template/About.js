import { useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Fungsi untuk mengatur ulang video saat selesai
    const handleVideoEnded = () => {
      videoRef.current.currentTime = 0; // Setel waktu video ke awal
      videoRef.current.play(); // Mulai ulang video
    };

    // Tambahkan event listener untuk mendeteksi saat video selesai
    videoRef.current.addEventListener("ended", handleVideoEnded);

    return () => {
      // Hapus event listener saat komponen dibongkar
      videoRef.current.removeEventListener("ended", handleVideoEnded);
    };
  }, []);
  return (
    <div className="h-screen flex items-center justify-center bg-[#0D1018]">
      <div className="bg-[#161B22] shadow-md rounded-lg  mx-auto lg:w-10/12">
        {/* Card Header */}
        <div className="bg-[#161B22] border border-[#30363D] text-white py-2 px-4">
          <h2 className="text-2xl font-semibold flex items-center">
            <BiChevronLeft className="mr-2" />
            <BiChevronRight />
          </h2>
        </div>

        {/* Card Body */}
        <div>
          <div className="flex flex-col lg:flex-row lg:space-x-4">
            {/* Kolom 1 */}
            <div className="bg-[#0D1018] border text-[#4a545f] text-center border-[#30363D] rounded-lg p-4 lg:w-1/12 flex flex-col  items-center">
              <GiHamburgerMenu className="w-6 h-6" />
            </div>

            {/* Kolom 2 */}
            <div className="bg-white rounded-lg p-4 lg:w-6/12">
              <p className="text-gray-600">
                Kolom 2: Deskripsi card atau teks lainnya.
              </p>
              <img
                src="/path/to/image2.jpg"
                alt="Deskripsi Gambar 2"
                className="w-full mt-4"
              />
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
                Tombol 2
              </button>
            </div>

            {/* Kolom 3 */}
            <div className="bg-[#0D1018] border text-[#4a545f] border-[#30363D] rounded-lg p-4 lg:w-5/12">
              <video
                ref={videoRef}
                autoPlay
                loop // Mengulang video secara terus menerus
                src="https://framerusercontent.com/modules/assets/WRN6SUNSc0B2wES77cJz4onlOao~fd_ABnatMJDTzqCfqp7l98LoalE8YIbbYofLXVrKphs.mp4"
                alt="Deskripsi Video"
                className="w-full mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
