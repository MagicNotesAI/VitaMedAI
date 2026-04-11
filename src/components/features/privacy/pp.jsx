import { motion } from 'motion/react';
import { Shield, Mail, ChevronRight } from 'lucide-react';

const sections = [
  {
    id: '01',
    title: 'Information Collection and Use',
    content: `Vitamed Ai is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our platform and services.`
  },
  {
    id: '02',
    title: 'Data Sharing and Protection',
    content: `We do not share your personal information with third parties for marketing or promotional purposes. Information is shared only with service providers essential to delivering our services:`,
    list: [
      'Healthcare providers you explicitly choose to share information with',
      'Technical service providers who help maintain our platform',
      'Communication providers for important service updates'
    ]
  },
  {
    id: '03',
    title: 'Your Consent and Control',
    content: `You have full control over your information and may exercise the following rights at any time:`,
    list: [
      'Opt out of communications at any time',
      'Request access to your personal data',
      'Request correction or deletion of your data',
      'Update your communication preferences'
    ]
  },
  {
    id: '04',
    title: 'Opting Out',
    content: `You may opt out of communications through any of the following methods:`,
    list: [
      'Reply STOP to any SMS message from us',
      'Use the unsubscribe link in any email communication',
      'Email us directly at support@vitamed-ai.com'
    ]
  },
  {
    id: '05',
    title: 'Updates to This Policy',
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any changes will be posted on this page along with the updated effective date. We encourage you to review this policy periodically.`
  }
];

export function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: '#f7f9fc', minHeight: '100vh' }}>
      
      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', background: '#1e40af', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={16} color="#fff" />
            </div>
            <span style={{ fontSize: '15px', fontFamily: "'Arial', sans-serif", fontWeight: '600', color: '#1e293b', letterSpacing: '0.01em' }}>Vitamed Ai</span>
          </div>
          <span style={{ fontSize: '12px', fontFamily: "'Arial', sans-serif", color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Legal</span>
        </div>
      </header>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '64px 32px 56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span style={{ fontSize: '12px', fontFamily: "'Arial', sans-serif", color: '#2563eb', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>Privacy Policy</span>
            <ChevronRight size={12} color="#94a3b8" />
            <span style={{ fontSize: '12px', fontFamily: "'Arial', sans-serif", color: '#94a3b8' }}>Vitamed Ai</span>
          </div>
          <h1 style={{ fontSize: '38px', fontWeight: '700', color: '#0f172a', lineHeight: '1.2', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', margin: '0', fontFamily: "'Arial', sans-serif", maxWidth: '560px' }}>
            How Vitamed Ai collects, uses, and protects your personal health information.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></div>
              <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#64748b' }}>Effective January 2026</span>
            </div>
            <div style={{ width: '1px', height: '14px', background: '#e2e8f0' }}></div>
            <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#64748b' }}>HIPAA Compliant</span>
            <div style={{ width: '1px', height: '14px', background: '#e2e8f0' }}></div>
            <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#64748b' }}>SOC 2 Type II</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '48px', alignItems: 'start' }}>
          
          {/* Sections */}
          <div>
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  padding: '32px',
                  marginBottom: '2px',
                  borderRadius: i === 0 ? '8px 8px 0 0' : i === sections.length - 1 ? '0 0 8px 8px' : '0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontFamily: "'Arial', sans-serif", color: '#2563eb', fontWeight: '700', letterSpacing: '0.1em' }}>{section.id}</span>
                  <div style={{ height: '1px', flex: 1, background: '#f1f5f9' }}></div>
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 14px', letterSpacing: '-0.01em' }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.75', margin: '0', fontFamily: "'Arial', sans-serif" }}>
                  {section.content}
                </p>
                {section.list && (
                  <ul style={{ margin: '14px 0 0', padding: '0', listStyle: 'none' }}>
                    {section.list.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '8px 0', borderTop: j === 0 ? 'none' : '1px solid #f8fafc' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2563eb', marginTop: '8px', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', fontFamily: "'Arial', sans-serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ position: 'sticky', top: '32px' }}
          >
            {/* Contact Card */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '28px', height: '28px', background: '#eff6ff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={14} color="#2563eb" />
                </div>
                <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", fontWeight: '600', color: '#0f172a' }}>Contact Us</span>
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: '0 0 14px', fontFamily: "'Arial', sans-serif" }}>
                For privacy-related inquiries or to exercise your data rights, contact our privacy team.
              </p>
              <a
                href="mailto:support@vitamed-ai.com"
                style={{ display: 'block', fontSize: '13px', color: '#2563eb', fontFamily: "'Arial', sans-serif", textDecoration: 'none', fontWeight: '600', padding: '10px 14px', background: '#eff6ff', borderRadius: '6px', textAlign: 'center' }}
              >
                support@vitamed-ai.com
              </a>
            </div>

            {/* Compliance Card */}
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '24px' }}>
              <div style={{ fontSize: '11px', fontFamily: "'Arial', sans-serif", color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Compliance</div>
              {['HIPAA', 'SOC 2 Type II', 'HITRUST Certified'].map((badge, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: i < 2 ? '1px solid #1e293b' : 'none' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#e2e8f0' }}>{badge}</span>
                </div>
              ))}
            </div>

            {/* Last Updated */}
            <div style={{ marginTop: '12px', padding: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontFamily: "'Arial', sans-serif", color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Last Updated</div>
              <div style={{ fontSize: '14px', fontFamily: "'Arial', sans-serif", color: '#475569', fontWeight: '500' }}>January 2026</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e2e8f0', background: '#fff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#94a3b8' }}>© 2026 Vitamed Ai. All rights reserved.</span>
          <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#94a3b8' }}>Privacy Policy · Last updated January 2026</span>
        </div>
      </footer>

    </div>
  );
}

export default PrivacyPolicy;