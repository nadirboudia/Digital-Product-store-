import { Link } from "react-router-dom";

function Legal() {
  return (
    <div className="mt-20 p-5 min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Legal & Policies
            </h1>
            <p className="mt-2 text-gray-500 max-w-xl">
              This single page contains our Privacy Policy, Terms of Service and Refund Policy — read carefully before purchasing any digital product.
            </p>
          </div>

          <Link
            to="/"
            className="self-stretch md:self-auto inline-flex items-center justify-center bg-coral-red text-white py-2 px-4 rounded-lg shadow hover:opacity-95 transition"
          >
            Back to Home
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10 space-y-8">
            {/* Section: Summary */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                By using our site and purchasing digital products you agree to the rules below.
                This page explains what we collect, how we use your info, payment and delivery terms,
                refund rules and your rights. If you need more detail on a specific topic use the contact form.
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Privacy Policy</h2>

              <h3 className="text-lg font-medium mt-3">Information We Collect</h3>
              <p className="text-gray-600 leading-relaxed">
                We collect personal data you provide (name, email, billing details) and non-personal
                data such as IP address, browser type and device info for analytics and security.
              </p>

              <h3 className="text-lg font-medium mt-3">How We Use Your Information</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Process orders and deliver digital products.</li>
                <li>Send transactional emails (receipts, download links, support messages).</li>
                <li>Improve services and perform analytics.</li>
              </ul>

              <h3 className="text-lg font-medium mt-3">Third Parties</h3>
              <p className="text-gray-600 leading-relaxed">
                We use trusted third parties (e.g., Stripe, PayPal, email providers, analytics).
                We never store full payment card data on our servers — payments are handled by providers.
              </p>

              <h3 className="text-lg font-medium mt-3">Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                Cookies are used to improve experience and gather analytics. You can disable cookies
                in your browser, but some features may not work properly.
              </p>

              <h3 className="text-lg font-medium mt-3">Your Rights</h3>
              <p className="text-gray-600 leading-relaxed">
                You can request access, correction or deletion of your personal data. Contact support to exercise these rights.
              </p>
            </section>

            {/* Terms */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Terms of Service</h2>

              <h3 className="text-lg font-medium mt-3">Acceptance of Terms</h3>
              <p className="text-gray-600 leading-relaxed">
                By buying or using products from this store you accept these Terms. We may update terms; changes are effective when posted.
              </p>

              <h3 className="text-lg font-medium mt-3">License & Usage</h3>
              <p className="text-gray-600 leading-relaxed">
                Purchased digital products are licensed for individual use as described on the product page.
                Redistribution, resale or sharing without explicit permission is prohibited.
              </p>

              <h3 className="text-lg font-medium mt-3">Account & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                You are responsible for keeping account credentials secure. Notify us immediately if you suspect unauthorized access.
              </p>

              <h3 className="text-lg font-medium mt-3">Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed">
                We are not liable for indirect, incidental, or consequential damages. Our total liability for direct damages is limited to the purchase price of the product.
              </p>
            </section>

            {/* Delivery */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Delivery</h2>
              <p className="text-gray-600 leading-relaxed">
                Digital products are delivered immediately after payment via a download link or access email.
                Delivery delays are rare but can occur (max 24 hours). Contact support if you do not receive your product.
              </p>
            </section>

            {/* Refund */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Refund Policy</h2>

              <p className="text-gray-600 leading-relaxed mb-2">
                Due to the nature of digital goods, sales are generally final. We only consider refunds in exceptional cases:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>No delivery (no download link received).</li>
                <li>Duplicate charge or double payment.</li>
                <li>Provided file is corrupted or unusable and no replacement is available.</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mt-2">
                To request a refund, contact support within <strong>7 days</strong> of purchase with proof of payment and details.
                We will investigate and respond within a reasonable time.
              </p>
            </section>

            {/* Payments & Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Payments & Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Payments are processed by secure third-party providers (Stripe, PayPal). We do not store full card data.
                All payment pages use HTTPS and follow industry security standards.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Changes to These Policies</h2>
              <p className="text-gray-600 leading-relaxed">
                We may modify these policies at any time; updates take effect when posted. Check this page periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact & Support</h2>
              <p className="text-gray-600 leading-relaxed">
                For policy questions, refund requests or data requests, use the contact form on our site or email <strong>support@yourdomain.com</strong>.
                Please include order ID and as much detail as possible.
              </p>
            </section>

            {/* Footer note */}
            <div className="pt-4 border-t border-gray-100 text-sm text-gray-500">
              <p>Last updated: <strong>{new Date().toLocaleDateString()}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;
