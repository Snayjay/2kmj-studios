export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tighter mb-4">
              2KMJ <span className="text-accent">Studios</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Crafting interactive digital experiences with code and vibe.
              Specializing in full-stack development for forward-thinking businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Interactive Apps</li>
              <li>Automation Tools</li>
              <li>AI Integration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent">Twitter</a></li>
              <li><a href="#" className="hover:text-accent">GitHub</a></li>
              <li><a href="#" className="hover:text-accent">LinkedIn</a></li>
              <li><a href="mailto:hello@2kmj.com" className="hover:text-accent">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 2KMJ Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

