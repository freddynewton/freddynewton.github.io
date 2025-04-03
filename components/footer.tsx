import Link from "next/link"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

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
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-muted/30 py-12 md:py-16 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="text-xl font-bold mb-4 inline-block">
              Fred Newton
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Unity Developer & XR Specialist creating immersive experiences and games that blur the lines between
              virtual and physical worlds.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Erding, Bavaria, Germany</li>
              <li>
                <Link href="mailto:freddakdogan2@gmail.com" className="hover:text-primary transition-colors">
                  freddakdogan2@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+4917662031322" className="hover:text-primary transition-colors">
                  +49 176 62031322
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Fred Newton Akdogan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

