import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Checkout Flow',
  description: 'Privacy Policy for Checkout Flow Shopify App.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800 py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-gray-600">Last updated: July 17, 2025</p>
          <p>
            Checkout Flow ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information in connection with our Shopify app.
          </p>

          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Merchant account details and store settings.</li>
            <li>Payment method configuration and rules you create.</li>
            <li>Usage data to improve performance and user experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold">How We Use Information</h2>
          <p>
            We use your information to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold">Data Sharing</h2>
          <p>
            We do not sell your data. We may share information with service providers who assist in operating our app and with Shopify as required.
          </p>

          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>
            You may update or delete your data within the app settings. For any privacy inquiries, contact us at support@checkoutflow.tech.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
