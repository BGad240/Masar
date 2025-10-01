import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-start">
      
      {/* Brand Section */}
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
          <img src={logo} alt="Masar Al-Mustaqbal" className="h-14 w-14" />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary">مسار المستقبل</span>
            <span className="text-xs text-muted-foreground">Masar Al-Mustaqbal</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 max-w-xs mx-auto md:mx-0">
          منصة احترافية لإرشاد الشباب العربي نحو مستقبل مهني مشرق
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">روابط سريعة</h3>
        <ul className="space-y-3">
          <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
          <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">من نحن</Link></li>
          <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">خدماتنا</Link></li>
          <li><Link to="/quiz" className="text-sm text-muted-foreground hover:text-primary transition-colors">اختبار المسار المهني</Link></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">الموارد</h3>
        <ul className="space-y-3">
          <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">دليل المهن</Link></li>
          <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">المدونة</Link></li>
          <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
          <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">تواصل معنا</h3>
        <ul className="space-y-4">
          <li className="flex justify-center md:justify-start items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-5 w-5 text-primary" />
            <span>info@masarfuture.com</span>
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-5 w-5 text-primary" />
            <span dir="ltr">+966 XX XXX XXXX</span>
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>الرياض، المملكة العربية السعودية</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-border mt-10 pt-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {currentYear} مسار المستقبل. جميع الحقوق محفوظة.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
