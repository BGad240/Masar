import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const navItems = {
    ar: [
      { name: "الرئيسية", path: "/" },
      { name: "ملف الطالب", path: "/student-profile" },
      { name: "من نحن", path: "/about" },
      { name: "خدماتنا", path: "/services" },
      { name: "اختبار المسار", path: "/quiz" },
      { name: "دليل المهن", path: "/careers" },
      { name: "المدونة", path: "/blog" },
      { name: "اتصل بنا", path: "/contact" },
    ],
  };

  const isActive = (path: string) => location.pathname == path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src='/moe-l.png' alt="Masar Al-Mustaqbal" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">مسار المستقبل</span>
              <span className="text-xs text-muted-foreground">Masar Al-Mustaqbal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.ar.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
          
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navItems.ar.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-md ${
                    isActive(item.path)
                      ? "text-primary bg-accent"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
