import React from 'react'

function TermsOfUse() {
    return (
        <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-bold mb-6">Terms of Use</h2>
    
          <p className="mb-4">
            Welcome to [Your Website Name]! By using our website, you agree to comply with and be bound by the following
            terms and conditions of use. Please read these terms carefully before using our website.
          </p>
    
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">1. Acceptance of Terms</h3>
            <p>
              By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by
              these terms of use. If you do not agree to these terms, please do not use our website.
            </p>
          </div>
    
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">2. Use of ChatGPT API</h3>
            <p>
              Our website utilizes the ChatGPT API to generate emails for users. You agree to use the ChatGPT API in
              accordance with OpenAI's usage policies, which can be found on OpenAI's official website.
            </p>
          </div>
    
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">3. User Content</h3>
            <p>
              By using our website, you understand and agree that any content generated using the ChatGPT API is your
              responsibility. You must ensure that the content complies with applicable laws and does not violate the
              rights of any third party.
            </p>
          </div>
    
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">4. Privacy</h3>
            <p>
              We take user privacy seriously. Our Privacy Policy outlines how we collect, use, and protect your personal
              information. By using our website, you consent to the terms of our Privacy Policy.
            </p>
          </div>
    
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">5. Changes to Terms</h3>
            <p>
              We reserve the right to update or modify these terms of use at any time without prior notice. Your continued
              use of the website after any changes constitutes acceptance of the updated terms.
            </p>
          </div>
    
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">6. Contact Information</h3>
            <p>If you have any questions or concerns about our terms of use, please contact us at [example@gmail.com].</p>
          </div>
    
          <p className="mt-4">Last Updated: [29/1/2024]</p>
        </div>
      );
}

export default TermsOfUse
