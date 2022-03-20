import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoDetail() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Navbar />
      <main className="pt-6 px-6">
        <VideoPlayer />
      </main>
    </div>
  );
}
