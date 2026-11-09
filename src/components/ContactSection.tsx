import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Sparkles,
  AlertCircle,
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  enquiryType: 'Residential Interiors' | '2D & 3D Design Support' | 'Other';
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Residential Interiors',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLink, setSubmittedLink] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^\+?[0-9]{10,13}$/.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message regarding your requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose formatted pre-filled WhatsApp message
    const formattedMessage =
      `*New Website Enquiry - Gilded Oak Interiors*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Enquiry Type:* ${formData.enquiryType}\n` +
      `*Message:* ${formData.message}\n\n` +
      `_Sent from website contact form_`;

    const encodedMsg = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/916369929442?text=${encodedMsg}`;

    setSubmittedLink(waUrl);
    setIsSubmitted(true);

    // Automatically open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Consultation &amp; Enquiries</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight mb-4">
            Let&apos;s Create Something Beautiful Together.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans">
            Have an upcoming interior project or looking for professional 2D and 3D design support? Get in touch with us. We would be happy to discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Phone and Email Only + Direct Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact Card: Showing phone and email only */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-beige-dark/30 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Direct Contact
                </span>
                <h3 className="text-2xl font-serif font-medium text-charcoal mt-1">
                  Gilded Oak Interiors
                </h3>
                <p className="text-sm font-serif italic text-gold-dark mt-0.5">
                  Thoughtful Designs. Quality Craftsmanship.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-beige-dark/20 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Phone &amp; WhatsApp</p>
                    <a
                      href="tel:+916369929442"
                      className="text-gold font-medium hover:underline text-sm sm:text-base"
                    >
                      +91 63699 29442
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Email Address</p>
                    <a
                      href="mailto:Gildedoakinteriors@gmail.com"
                      className="text-gold font-medium hover:underline text-sm sm:text-base break-all"
                    >
                      Gildedoakinteriors@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Action Buttons: Call Now, WhatsApp Enquiry, Email Us */}
            <div className="space-y-3">
              <a
                href="tel:+916369929442"
                className="min-h-[50px] w-full flex items-center justify-center gap-2.5 rounded-xl bg-charcoal text-white font-medium text-sm hover:bg-charcoal-light active:scale-[0.98] transition-all px-4 py-3 shadow-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/916369929442?text=Hello%20Gilded%20Oak%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] w-full flex items-center justify-center gap-2.5 rounded-xl bg-gold text-white font-medium text-sm hover:bg-gold-dark active:scale-[0.98] transition-all px-4 py-3 shadow-md shadow-gold/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href="mailto:Gildedoakinteriors@gmail.com"
                className="min-h-[50px] w-full flex items-center justify-center gap-2.5 rounded-xl bg-white border border-beige-dark/40 text-charcoal font-medium text-sm hover:bg-beige/40 active:scale-[0.98] transition-all px-4 py-3 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-gold" />
                <span>Email Us</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-beige-dark/30 shadow-lg">
              
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-medium text-charcoal">
                  Send an Enquiry
                </h3>
                <p className="text-sm text-charcoal/70 font-sans mt-1">
                  Fill in your details below. Submitting will open a pre-filled WhatsApp message with your project specifications directly to us.
                </p>
              </div>

              {isSubmitted ? (
                /* Success Feedback State */
                <div className="p-6 sm:p-8 rounded-2xl bg-beige/40 border border-gold/40 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-gold/15 text-gold mx-auto flex items-center justify-center">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <h4 className="text-2xl font-serif font-medium text-charcoal">
                    Thank You, {formData.name}!
                  </h4>

                  <p className="text-sm text-charcoal/80 max-w-md mx-auto leading-relaxed font-sans">
                    Your enquiry details have been prepared. If WhatsApp didn&apos;t automatically open on your device, please tap the button below.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={submittedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] px-6 py-3 rounded-xl bg-gold text-white font-semibold text-sm hover:bg-gold-dark transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Message</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          enquiryType: 'Residential Interiors',
                          message: '',
                        });
                      }}
                      className="min-h-[48px] px-6 py-3 rounded-xl bg-white border border-beige-dark text-charcoal font-medium text-sm hover:bg-beige/40 transition-all cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Inputs >= 16px font-size to prevent iOS zoom */
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Your Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Manikandan"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl border bg-ivory text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-beige-dark/50'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                        Phone / WhatsApp <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 63699 29442"
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl border bg-ivory text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-beige-dark/50'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                        Email Address <span className="text-charcoal/50 lowercase font-normal">(optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl border bg-ivory text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-beige-dark/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Enquiry Type Radio / Select */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                      Enquiry Type <span className="text-gold">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {(['Residential Interiors', '2D & 3D Design Support', 'Other'] as const).map((type) => {
                        const isSelected = formData.enquiryType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, enquiryType: type })}
                            className={`min-h-[48px] px-3 py-2.5 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-gold text-white border-gold shadow-sm font-semibold'
                                : 'bg-ivory text-charcoal/80 border-beige-dark/50 hover:bg-beige/40'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                      Tell us about your requirements <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Modular kitchen and wardrobes for a 3BHK home, or 2D floor drafting and 3D rendering support for an ongoing villa project..."
                      className={`w-full p-4 rounded-xl border bg-ivory text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
                        errors.message ? 'border-red-400 bg-red-50/20' : 'border-beige-dark/50'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="min-h-[50px] w-full py-3.5 px-6 rounded-xl bg-gold text-white font-semibold text-sm hover:bg-gold-dark active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/25 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit &amp; Open WhatsApp Enquiry</span>
                    </button>
                    <p className="text-[11px] text-charcoal/60 text-center mt-2 font-sans">
                      Connect directly on WhatsApp with our team.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
