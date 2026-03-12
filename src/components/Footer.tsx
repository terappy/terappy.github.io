export default function Footer() {
  return (
    <footer className="w-full py-8 text-center border-t border-slate-800/50 mt-20 relative z-10 glass">
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} TerappyLab! All Rights Reserved.
      </p>
    </footer>
  );
}
