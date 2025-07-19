import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../images/logo.jpeg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="" width={150}/>
              <span className="text-xl font-bold">Express Clean Mone</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Filuam në 1998-ën duke ofruar shërbime profesionale pastrimi të nisur në Greqi, tani zhvendosur në Shqipëri. 
              Cilësi e garantuar, çmime konkurruese dhe shërbim i shkëlqyer.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <span className="mx-2">•</span>
                <span className="font-semibold">Shqipëri 2013</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shërbimet Tona</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Pastrimi i Shtëpive</li>
              <li>Pastrimi i Zyrave</li>
              <li>Pastrimi i Automjeteve</li>
              <li>Pastrimi i Tapicerie</li>
              <li>Pastrimi i Dyshekëve</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakti</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>0693466275</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>cleanexpressmone2013@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Fier - Rr. Afrimi i Ri</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Express Clean Mone. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;