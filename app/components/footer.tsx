import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">DiscordCommunity</h2>
            <p className="mt-2">Join our awesome community today!</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-[#4558ff]"><FaDiscord size={24} /></a>
            <a href="#" className="text-white hover:text-[#4558ff]"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-[#4558ff]"><FaGithub size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} DiscordCommunity. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

