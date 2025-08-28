function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
