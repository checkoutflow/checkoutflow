'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

export default function Pricing() {
  const features = [
    'Unlimited payment method customization',
    'Advanced conditional rules',
    'Real-time analytics dashboard',
    '24/7 customer support',
    'No transaction fees',
    'Instant setup & activation',
    'Global country targeting',
    'Cart value optimization',
    'Customer segmentation',
    'Priority email support'
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
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
            Simple, <span className="gradient-text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale with your business
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 font-semibold">
              <div className="flex items-center justify-center space-x-1">
                <Star className="h-4 w-4 fill-current" />
                <span>Most Popular</span>
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>

            <div className="pt-16 p-8">
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Free Forever
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-6xl font-bold gradient-text-primary">$0</span>
                  <span className="text-xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-lg text-gray-600">
                  Perfect for getting started with payment optimization
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </motion.button>

              {/* Additional Info */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  No credit card required • Setup in 2 minutes • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">
                Is it really free forever?
              </h4>
              <p className="text-gray-600">
                Yes! Checkout Flow is completely free to use with no hidden costs or transaction fees. We believe in helping merchants succeed.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">
                How quickly can I set it up?
              </h4>
              <p className="text-gray-600">
                Setup takes less than 2 minutes. Simply install from the Shopify App Store and start creating rules immediately.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">
                Will it affect my store performance?
              </h4>
              <p className="text-gray-600">
                No, Checkout Flow is optimized for performance and won&apos;t slow down your store or checkout process.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 mb-2">
                Can I customize the rules?
              </h4>
              <p className="text-gray-600">
                Absolutely! Create unlimited custom rules based on any combination of factors like location, cart value, products, and more.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
