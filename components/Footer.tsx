export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-gray-400 text-center">
      <p>© {new Date().getFullYear()} Vignam. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}
