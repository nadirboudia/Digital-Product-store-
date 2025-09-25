function Terms() {
  return (
    <div className="mt-20 p-5 min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-8">
          Please read these Terms of Service carefully before using our website or purchasing digital products.
        </p>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-10 space-y-8">
          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our website, you agree to comply with and be bound by these Terms.
              If you do not agree, you must not use our services.
            </p>
          </section>

          {/* License */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. License & Usage</h2>
            <p className="text-gray-600 leading-relaxed">
              Purchased digital products are licensed for individual use only, as described on the product page.
              Redistribution, resale, or sharing is strictly prohibited unless explicitly permitted.
            </p>
          </section>

          {/* Payments */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              All payments are processed securely through third-party providers such as Stripe or PayPal.
              You agree to provide accurate billing details when making a purchase.
            </p>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Delivery</h2>
            <p className="text-gray-600 leading-relaxed">
              Digital products are delivered electronically via download link or email immediately after payment.
              Delivery delays may occur, but will not exceed 24 hours.
            </p>
          </section>

          {/* Refunds */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Refund Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Due to the nature of digital goods, sales are generally final.
              Refunds are only offered in cases of non-delivery, duplicate payment, or corrupted files
              where no replacement is possible.
            </p>
          </section>

          {/* Account */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Account & Security</h2>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for keeping your account information secure.
              We are not liable for unauthorized use caused by negligence on your part.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Our liability is limited to the purchase price of the product.
              We are not responsible for indirect, incidental, or consequential damages resulting from product use.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Modifications to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms at any time. Changes become effective immediately upon posting.
              Continued use of our services after changes means you accept the updated Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by applicable laws of your country of residence, without regard to conflict of law rules.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions about these Terms, please reach out at{" "}
            
            </p>
          </section>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-100 text-sm text-gray-500">
            <p>Last updated: <strong>{new Date().toLocaleDateString()}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
