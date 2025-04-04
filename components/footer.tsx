import Link from "next/link"
import { Github, Linkedin, Twitter, Heart, Gamepad2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/freddynewton", icon: <Github className="h-5 w-5" /> },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fred-newton-akdogan-b6a775257/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    { name: "Twitter", href: "https://x.com/endlessloop___", icon: <Twitter className="h-5 w-5" /> },
    { name: "Itch.io", href: "https://freddynewton.itch.io/", icon: <Gamepad2 className="h-5 w-5" /> },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-muted/30 py-12 md:py-16 border-t border-primary/10 relative">
      {/* Semi-transparent background */}
      <div className="absolute inset-0 bg-background/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="backdrop-blur-md bg-background/50 p-6 rounded-lg border border-primary/10">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">
              Fred Newton
            </Link>
            <p className="text-muted-foreground text-sm">
              XR Developer & Unity Specialist creating immersive experiences and games that blend the virtual and physical worlds.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-md bg-background/50 p-6 rounded-lg border border-primary/10">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="backdrop-blur-md bg-background/50 p-6 rounded-lg border border-primary/10">
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Interested in working together or have questions?
            </p>
            <Link
              href="#contact"
              className="inline-block px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-md transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p>
            © {currentYear} Fred Newton Akdogan. Built with{" "}
            <Heart className="inline-block h-3 w-3 text-red-500 mb-0.5" /> using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

