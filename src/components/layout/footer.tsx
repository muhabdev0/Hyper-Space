import Link from 'next/link';
import { GitCommitHorizontal, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-headline font-bold">
            <GitCommitHorizontal className="text-primary" size={24} />
            HyperSpace
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HyperSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="text-muted-foreground hover:text-primary transition-colors" size={20} />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
