'use client'

import { useState } from 'react'
import { Play, Shield, TrendingUp, Users, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const stats = [
    { number: '50K+', label: 'Orders Optimized', icon: TrendingUp },
    { number: '25%', label: 'Avg. Conversion Boost', icon: ArrowRight },
    { number: '500+', label: 'Happy Merchants', icon: Users },
  ]

  const paymentMethods = [
    { name: 'Credit Card', priority: 1, active: true, color: 'bg-slate-700' },
    { name: 'Express Checkout', priority: 2, active: true, color: 'bg-blue-600' },
    { name: 'Cash on Delivery', priority: null, active: false, color: 'bg-green-600' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-200"
            >
              <Sparkles className="h-4 w-4" />
              <span>Now Free to Use - Limited Time</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Smart Payment Method{' '}
              <span className="gradient-text-primary">Customization</span>
              <br />
              for Shopify
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Hide, sort & rename checkout payment methods based on intelligent rules like country, cart value, or shipping method. Boost conversions by showing only the most relevant payment options to each customer.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Install Free App</span>
              </button>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-blue-600 mr-2" />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 float">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Checkout Payment Methods
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">Live Preview</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 mb-6">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 ${
                      method.active
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-red-200 bg-red-50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${method.color} rounded-lg flex items-center justify-center text-white text-xs font-bold`}>
                        {method.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{method.name}</span>
                    </div>
                    {method.active ? (
                      <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {method.priority}
                      </div>
                    ) : (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Hidden
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Rules Preview */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Active Rules</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Cart &gt; $100</span>
                    <span className="text-blue-600 font-medium">Show PayPal Express</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Country: US</span>
                    <span className="text-red-600 font-medium">Hide COD</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
