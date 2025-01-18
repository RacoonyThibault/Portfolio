import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="text-2xl font-semibold mb-4">Connecte-toi avec moi</h2>
      <div className="flex gap-6 text-4xl">
        <Link
          href="https://x.com/FregierThibault"
          aria-label="Lien vers mon profil Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400"
        >
          <FaTwitter aria-hidden="true" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/thibaultfregier/"
          aria-label="Lien vers mon profil LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600"
        >
          <FaLinkedin aria-hidden="true" />
        </Link>
        <Link
          href="https://github.com/RacoonyThibault/"
          aria-label="Lien vers mon profil GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-gray-700"
        >
          <FaGithub aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
