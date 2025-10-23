export function Footer() {
  return (
    <footer className="px-6 py-12 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-primary mb-1">Core AI</div>
            <p className="text-sm text-muted-foreground">
              Engineering AI with Human-Centered Design
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 Core AI Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
