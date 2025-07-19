import React from 'react';
import { 
  Home, 
  Building, 
  Car, 
  Sofa, 
  BedDouble, 
  Shirt,
  Coffee,
  Crown,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const residentialServices = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Pastrimi i Shtëpive",
      description: "Pastrim i plotë dhe i detajuar për të gjitha llojet e shtëpive",
      features: ["Pastrimi i dhomave", "Pastrimi i kuzhinës", "Pastrimi i banjove", "Fshirja e pluhurit"]
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Pastrimi i Villave",
      description: "Shërbime të specializuara për vila dhe shtëpi të mëdha",
      features: ["Pastrimi i brendshëm",  "Pastrimi i dritareve", "Mirëmbajtje e përgjithshme"]
    },
  ];

  const commercialServices = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Pastrimi i Zyrave",
      description: "Pastrim profesional për ambiente pune dhe zyra",
      features: ["Pastrimi i dritareve", "Dezinfektimi", "Mirëmbajtje e mobilieve"]
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Pastrimi i Restoranteve",
      description: "Pastrim dhe higjienë për industrinë e ushqimit",
      features: ["Pastrimi i kuzhinës", "Dezinfektimi", "Pastrimi i sallave", "Standardet e sigurisë", "Pastrimi i karrigeve"]
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Pastrimi i Bareve",
      description: "Shërbime të specializuara për lokale nate dhe bare",
      features: ["Pastrimi i thellë", "Pastrimi i dyshemeve", "Pastrimi i tavolinave", "Pastrimi i xhamave", "Pastrimi i karrigeve"]
    }
  ];

  const specialtyServices = [
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Pastrimi i Sofave",
      description: "Pastrim profesional për të gjitha llojet e sofave dhe karrigeve",
      features: ["Heqja e njollave", "Dezinfektimi", "Tharje e shpejtë"]
    },
    {
      icon: <BedDouble className="h-8 w-8" />,
      title: "Pastrimi i Dyshekëve",
      description: "Pastrim i thellë dhe higjienë për dyshekët tuaj",
      features: ["Heqja e njollave", "Dezinfektimi", "Eleminim i erërave"]
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Pastrimi i Batanije",
      description: "Kujdes i veçantë për tekstilet e shtëpisë",
      features: ["Larje profesionale", "Pastrim i thellë", "Kujdes për fibrat", "Parfumim"]
    }
  ];

  const autoServices = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Pastrimi i Brendshëm i Automjeteve",
      description: "Pastrim komplet i brendshëm për makinat tuaja",
      features: ["Pastrimi i ulëseve", "Pastrimi i tapicerive", "Pastrimi i konsolës", "Parfumim"]
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-blue-600 mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
      <ul className="space-y-2">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Shërbimet Tona
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ofrojmë një gamë të plotë shërbimesh pastrimi për të gjitha nevojat tuaja
          </p>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shërbime për Shtëpitë
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pastrim profesional për shtëpitë, vilat dhe hapësirat e banimit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shërbime Komerciale
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Shërbime të specializuara për bizneset dhe hapësirat komerciale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shërbime të Specializuara
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pastrim i detajuar për mobilje dhe tekstile të shtëpisë
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Auto Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pastrimi i Automjeteve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Shërbime profesionale për pastrimin e brendshëm të automjeteve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autoServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gati për të Filluar?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontaktoni sot për një ofertë të personalizuar për nevojat tuaja
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Kërko Ofertë
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;