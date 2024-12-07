import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../../components/Breadcrumbs';

export function TechStackPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black pt-20">
      <Breadcrumbs />
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Scale your experimentation program with Liftmap
              </h1>
              <div className="text-xl text-gray-400 space-y-4">
                <p>
                  Liftmap helps facilitate your CRO program success. Like many companies, you probably began managing your CRO program through a frankenstein-mix of project management tools and spreadsheets. But as your CRO program has grown, you are probably finding that it has outgrown your current setup.
                </p>
                <p>
                  Liftmap provides an architecture for growth, inspired and refined by some of the world's largest testing organizations.
                </p>
              </div>
              <Link
                to="/quote"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Request a Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 transform group-hover:scale-105 transition-transform duration-300" />
                <img
                  src="/liftmap-preview.jpg"
                  alt="Liftmap Tech Stack"
                  className="relative z-10 w-full h-full object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}