'use client'

import { motion } from 'framer-motion'
import { 
  EyeOff, 
  ArrowUpDown, 
  Edit3, 
  Settings, 
  Zap, 
  BarChart3,
  Target,
  Globe,
  ShoppingCart,
  Users
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: EyeOff,
      title: 'Hide Payment Methods',
      description: 'Intelligently hide payment options based on cart value, shipping method, customer location, or product SKUs to reduce checkout friction.',
      gradient: 'from-red-500 to-pink-500',
      delay: 0.1
    },
    {
      icon: ArrowUpDown,
      title: 'Smart Sorting',
      description: 'Automatically reorder payment methods to show the most relevant options first, increasing the likelihood of successful conversions.',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: Edit3,
      title: 'Custom Naming',
      description: 'Rename payment gateways like PayPal, Stripe, or manual payments to match your brand voice and improve customer trust.',
      gradient: 'from-yellow-500 to-orange-500',
      delay: 0.3
    },
    {
      icon: Settings,
      title: 'Conditional Rules',
      description: 'Create sophisticated rules based on customer tags, shipping zones, product categories, and more with no coding required.',
      gradient: 'from-purple-500 to-violet-500',
      delay: 0.4
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Changes apply immediately to your Shopify checkout without any downtime or technical setup required.',
      gradient: 'from-cyan-500 to-blue-500',
      delay: 0.5
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track conversion rates, payment method usage, and rule performance to continuously optimize your checkout flow.',
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.6
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Higher Conversions',
      description: 'Show only relevant payment methods to increase conversion rates',
      value: '+25%'
    },
    {
      icon: Globe,
      title: 'Global Optimization',
      description: 'Customize payment options based on customer location',
      value: '180+'
    },
    {
      icon: ShoppingCart,
      title: 'Cart Intelligence',
      description: 'Dynamic payment options based on cart contents and value',
      value: 'Smart'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Personalized checkout experience for different customer types',
      value: 'Advanced'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="gradient-text-primary">Payment Optimization</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create the perfect checkout experience for your customers
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Checkout Flow?
            </h3>
            <p className="text-lg text-gray-600">
              Join thousands of merchants who have transformed their checkout experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-4 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {benefit.value}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
