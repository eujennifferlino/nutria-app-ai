import { Link } from "react-router-dom";
import { Utensils, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 px-4 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-health rounded-lg flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">Nutria</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transformando a forma como você acompanha sua alimentação com o
              poder da Inteligência Artificial.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-nutria-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-nutria-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-nutria-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-nutria-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Preços
                </a>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Carreiras
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/licenses"
                  className="text-gray-600 hover:text-nutria-600 transition-colors"
                >
                  Licenças
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Nutria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
