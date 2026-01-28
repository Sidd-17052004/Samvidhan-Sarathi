import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypingText from '../components/TypingText';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const { login, user, error, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
    
    // Clear any existing errors when component mounts
    setError(null);
  }, [user, navigate, setError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await login(formData);
        navigate('/');
      } catch (err) {
        // Error is already set in the context
        console.error('Login error:', err);
      }
    }
  };

  const featureContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const featureItem = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'anticipate' } }
  };

  return (
    <div className="min-h-screen bg-dark-400 px-4 sm:px-6 lg:px-10">
      <div className="min-h-screen max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          className="relative space-y-8 overflow-hidden rounded-2xl p-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(circle at top, rgba(14,116,144,0.35), transparent 55%), radial-gradient(circle at 30% 80%, rgba(59,130,246,0.25), transparent 55%)'
            }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 24, ease: 'easeOut', repeat: Infinity, repeatType: 'mirror' }}
          />

          <motion.span
            className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-primary-500/20 blur-2xl"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.span
            className="absolute bottom-4 right-4 h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
          />

          <div className="relative space-y-7 px-3 sm:px-5 py-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/30 text-xs font-semibold uppercase tracking-widest">
              Gamified Constitutional Learning
            </div>
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <TypingText
                as="span"
                text="Samvidhan Sarathi"
                typingSpeed={70}
                initialDelay={200}
                pauseDuration={3000}
                deletingSpeed={40}
                loop={true}
                showCursor={true}
                hideCursorWhileTyping={false}
                cursorClassName="bg-primary-300"
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 drop-shadow-[0_0_18px_rgba(59,130,246,0.45)]"
              />
              <motion.span
                className="block text-primary-200/90 mt-2 text-2xl sm:text-3xl"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
              >
                Empowering Citizens through <span className="text-cyan-200">Constitution</span> Knowledge
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: 'easeOut' }}
            >
              Learn the Constitution in simple language, understand your <span className="text-cyan-200">Rights</span>, and practice real-life civic decisions through guided, gamified learning.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              variants={featureContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={featureItem}
                whileHover={{ scale: 1.03, boxShadow: '0 0 18px rgba(56,189,248,0.25)' }}
                className="p-6 rounded-2xl bg-dark-300/80 border border-dark-200"
              >
                <div className="h-8 w-8 rounded-full border border-primary-400/40 bg-primary-500/10 flex items-center justify-center text-primary-300">
                  📘
                </div>
                <p className="mt-4 text-white font-semibold">Learn in Simple Language</p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">Citizen-friendly explanations of Articles and Duties.</p>
              </motion.div>
              <motion.div
                variants={featureItem}
                whileHover={{ scale: 1.03, boxShadow: '0 0 18px rgba(56,189,248,0.25)' }}
                className="p-6 rounded-2xl bg-dark-300/80 border border-dark-200"
              >
                <div className="h-8 w-8 rounded-full border border-primary-400/40 bg-primary-500/10 flex items-center justify-center text-primary-300">
                  🎮
                </div>
                <p className="mt-4 text-white font-semibold">Play Civic Scenarios</p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">Solve real-life situations with guided choices.</p>
              </motion.div>
              <motion.div
                variants={featureItem}
                whileHover={{ scale: 1.03, boxShadow: '0 0 18px rgba(56,189,248,0.25)' }}
                className="p-6 rounded-2xl bg-dark-300/80 border border-dark-200"
              >
                <div className="h-8 w-8 rounded-full border border-primary-400/40 bg-primary-500/10 flex items-center justify-center text-primary-300">
                  🏆
                </div>
                <p className="mt-4 text-white font-semibold">Track Progress</p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">Earn levels and badges as you grow.</p>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-sm text-gray-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity }}
            >
              Built to strengthen constitutional awareness among Indian citizens.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-lg w-full space-y-8 p-10 bg-dark-300 rounded-2xl shadow-xl justify-self-end"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-white">
              Login to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Or{' '}
              <Link to="/register" className="font-medium text-primary-500 hover:text-primary-400">
                register a new account
              </Link>
            </p>
          </div>
        
        {error && (
          <div className="bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`input w-full ${formErrors.email ? 'border-red-500' : ''}`}
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={`input w-full ${formErrors.password ? 'border-red-500' : ''}`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-400">{formErrors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-primary-500 hover:text-primary-400">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary w-full flex justify-center py-3"
            >
              Sign in
            </button>
          </div>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-dark-300 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-dark-200 text-sm font-medium text-gray-300 hover:bg-dark-100"
              >
                <span className="sr-only">Sign in with Google</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-dark-200 text-sm font-medium text-gray-300 hover:bg-dark-100"
              >
                <span className="sr-only">Sign in with GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login; 