import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>to help you transition smoothly</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Google Workspace Training Guide. All resources link to official documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="https://workspace.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Workspace
              </a>
              <a
                href="https://zoom.us/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Zoom
              </a>
              <a
                href="https://support.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
