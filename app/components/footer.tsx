export default function Footer() {
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-tertiary">&copy; {new Date().getFullYear()} Yiğit Can Özdemir. All rights reserved.</p>
      </div>
    </footer>
  )
}
