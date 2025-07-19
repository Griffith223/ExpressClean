import React from 'react';
import { Calendar, MapPin, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "1998",
      title: "Fillimi në Greqi",
      description: "Kompania u themelua në Greqi dhe filloi të ofrojë shërbime pastrimi profesional",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      year: "2013",
      title: "Zgjerimi në Shqipëri",
      description: "Hapëm degën tonë në Shqipëri për të shërbyer klientët lokalë",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      year: "2024",
      title: "25+ Vjet Përvojë",
      description: "Vazhdojmë të ofrojmë shërbime të shkëlqyera me mijëra klientë të kënaqur",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const values = [
    {
      title: "Cilësi e Lartë",
      description: "Përdorim vetëm produktet dhe pajisjet më të mira për rezultate perfekte"
    },
    {
      title: "Besueshmëri",
      description: "25+ vjet në treg na kanë dhënë përvojën për të qenë të besueshëm"
    },
    {
      title: "Kënaqësia e Klientit",
      description: "Qëllimi ynë kryesor është kënaqësia 100% e secilit klient"
    },
    {
      title: "Çmime Konkurruese",
      description: "Ofrojmë çmime të arsyeshme pa kompromis në cilësinë e shërbimit"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rreth Express Clean Mone
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Një histori suksesi që ka filluar në 1998 dhe vazhdon të rritet çdo ditë
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Historia Jonë
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Express Clean Mone u themelua në vitin 1998 në Greqi me vizionin për të ofruar 
                shërbime pastrimi të nivelit të lartë. Falë cilësisë së shërbimit dhe besnikërisë 
                së klientëve, kompania u rrit shpejt dhe fitoi një reputacion të shkëlqyer.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Në vitin 2013, zgjeruam aktivitetin tonë edhe në Shqipëri, duke sjellë të njëjtën 
                cilësi dhe profesionalizëm që kemi demonstruar në Greqi. Sot, me më shumë se 25 vjet 
                përvojë, vazhdojmë të jemi lider në fushën e shërbimeve të pastrimit.
              </p>
              <div className="flex items-center space-x-4 text-blue-600">
                <Users className="h-6 w-6" />
                <span className="font-semibold">Mijëra klientë të kënaqur</span>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Misioni Ynë</h3>
              <p className="text-gray-700 mb-6">
                "Të ofrojmë shërbime pastrimi të cilësisë së lartë që tejkalojnë pritshmëritë e 
                klientëve tanë, duke përdorur teknikat më të përparuara dhe produktet më të mira 
                në treg."
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Ekselencë në shërbim</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Besueshmëri dhe transparencë</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Inovacion dhe përmirësim i vazhdueshëm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rruga Jonë Përmes Viteve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nga fillimi i modest në Greqi deri te zgjerimi në Shqipëri
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                  {item.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vlerat Tona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Parimet që na udhëheqin në punën tonë të përditshme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;