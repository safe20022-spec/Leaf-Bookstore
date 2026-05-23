import { X,  Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter">LUMINA</span>
            </div>
            <p className="text-gray-500 text-md leading-relaxed">
              Lumina is your premier destination for discovering the best books across all genres. We believe in the power of reading to transform lives.
            </p>
            <div className="flex gap-4">
              {[X].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-md">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Shop All Books</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-md">Support</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-md">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-600 shrink-0" />
                <span>123 Bookstore Street, Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-600 shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-600 shrink-0" />
                <span>support@lumina.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Lumina Bookstore. All rights reserved. Built with ❤️ for book lovers.
          </p>
          <div className="flex gap-6 grayscale opacity-50">
             <span className="text-[14px] font-bold">VISA</span>
             <span className="text-[14px] font-bold">MASTERCARD</span>
             <span className="text-[14px] font-bold">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;