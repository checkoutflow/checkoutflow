import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - Checkout Flow',
  description: 'Terms of Service for Checkout Flow Shopify App.',
}

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-sm text-gray-600">Effective date: July 17, 2025</p>
          <p>
            These Terms of Service ("Terms") govern your use of the Checkout Flow Shopify App ("App"). By installing or using the App, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-semibold">Use of the App</h2>
          <p>
            You may use the App to customize payment methods in your Shopify store. You must comply with Shopify’s terms and applicable laws.
          </p>

          <h2 className="text-2xl font-semibold">Pricing and Payment</h2>
          <p>
            The App is free to use. We reserve the right to introduce paid plans in the future with notice.
          </p>

          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p>
            All rights to the App and content therein are owned by Checkout Flow. You may not reproduce or distribute without permission.
          </p>

          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Checkout Flow is not liable for any indirect or consequential damages arising from your use of the App.
          </p>

          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the App constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            For questions about these Terms, contact us at support@checkoutflow.tech.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
