import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Building, 
  Car, 
  Sofa, 
  Star, 
  CheckCircle,
  Clock,
  Shield,
  Users
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Pastrimi i Shtëpive",
      description: "Pastrim i plotë dhe profesional për shtëpitë tuaja"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Pastrimi i Zyrave",
      description: "Shërbime të specializuara për ambiente biznesi"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Pastrimi i Automjeteve",
      description: "Pastrim i brendshëm profesional për makinat tuaja"
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Pastrimi i Tapicerie",
      description: "Pastrim i sofave, dyshekëve dhe tapicerive"
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "25+ Vjet Përvojë",
      description: "Prej 1998-ës në Greqi, prej 2013-ës në Shqipëri"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cilësi e Garantuar",
      description: "100% kënaqësi e klientëve me garanci cilësie"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Staf Profesional",
      description: "Ekip i trajnuar dhe me përvojë të gjatë"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Express Clean Mone
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Shërbime Profesionale Pastrimi prej 1998-ës
            </p>
            <p className="text-lg mb-10 text-blue-100 max-w-3xl mx-auto">
              Më shumë se 25 vjet përvojë në ofrimin e shërbimeve të pastrimit për shtëpi, 
              zyra, automjete dhe hapësira komerciale në Greqi dhe Shqipëri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Shiko Shërbimet
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Kërko Ofertë
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shërbimet Tona Kryesore
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrojmë një gamë të gjerë shërbimesh pastrimi për të gjitha nevojat tuaja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Shiko Të Gjitha Shërbimet
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pse Na Zgjidhni Ne?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Përvojë e gjatë, cilësi e lartë dhe kënaqësi e plotë e klientëve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gati për Shërbim Profesional?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontaktoni sot për një ofertë falas dhe pa detyrim
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Kërko Ofertë Falas
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;