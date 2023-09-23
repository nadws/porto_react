import { useEffect, useRef } from "react";

function Vidio() {
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
    <>
      <video
        ref={videoRef}
        autoPlay
        loop // Mengulang video secara terus menerus
        src="https://framerusercontent.com/modules/assets/WRN6SUNSc0B2wES77cJz4onlOao~fd_ABnatMJDTzqCfqp7l98LoalE8YIbbYofLXVrKphs.mp4"
        alt="Deskripsi Video"
        className="w-full mt-4"
      />
    </>
  );
}

export default Vidio;
