import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* ✅ Desktop Grid + Mobile Accordion */}
        <div className="hidden md:grid grid-cols-4 gap-10 text-start">
          {/* Brand Section */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <img
                src="/moe-l.png"
                alt="Masar Al-Mustaqbal"
                className="h-14 w-14"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">
                  مسار المستقبل
                </span>
                <span className="text-xs text-muted-foreground">
                  Masar Al-Mustaqbal
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              منصة احترافية لإرشاد الشباب العربي نحو مستقبل مهني مشرق
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  اختبار المسار
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">الموارد</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  دليل المهن
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" /> info@masarfuture.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />{" "}
                <span dir="ltr">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" /> الرياض، المملكة
                العربية السعودية
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ Mobile Accordion */}
        <div className="md:hidden">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <img
                src="/moe-l.png"
                alt="Masar Al-Mustaqbal"
                className="h-14 w-14"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">
                  مسار المستقبل
                </span>
                <span className="text-xs text-muted-foreground">
                  Masar Al-Mustaqbal
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              منصة احترافية لإرشاد الشباب العربي نحو مستقبل مهني مشرق
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="links">
              <AccordionTrigger>روابط سريعة</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      الرئيسية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      من نحن
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      خدماتنا
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/quiz"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      اختبار المسار
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resources">
              <AccordionTrigger>الموارد</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/careers"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      دليل المهن
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      المدونة
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      الأسئلة الشائعة
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      سياسة الخصوصية
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact">
              <AccordionTrigger>تواصل معنا</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />{" "}
                    info@masarfuture.com
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />{" "}
                    <span dir="ltr">+966 XX XXX XXXX</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" /> الرياض، المملكة
                    العربية السعودية
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
