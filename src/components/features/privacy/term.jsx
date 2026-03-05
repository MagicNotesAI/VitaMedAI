import { motion } from 'motion/react';
import { FileText, Mail, ChevronRight, AlertCircle } from 'lucide-react';

const sections = [
  {
    id: '01',
    title: 'Agreement to Terms',
    content: `By accessing and using Vitamed Ai services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue use of our services immediately.`
  },
  {
    id: '02',
    title: 'Description of Service',
    content: `Vitamed Ai provides tools to help users organize and share health-related information and support communication with care teams. Our platform enables structured aggregation, organization, and controlled distribution of personal health records.`
  },
  {
    id: '03',
    title: 'User Responsibilities',
    content: `By using Vitamed Ai, you agree to the following obligations:`,
    list: [
      'Provide accurate and complete information when creating and maintaining your account',
      'Maintain the security of your account credentials and notify us of any unauthorized access',
      'Not share account access with others or allow third parties to use your account',
      'Use the service in full compliance with all applicable local, state, and federal laws'
    ]
  },
  {
    id: '04',
    title: 'Medical Disclaimer',
    content: `Vitamed Ai does not provide medical diagnosis, treatment recommendations, or clinical advice. The platform is not a substitute for professional medical care. Users should always consult a qualified and licensed healthcare provider for any health-related decisions. Vitamed Ai assumes no responsibility for actions taken based on information organized within the platform.`,
    highlight: true
  },
  {
    id: '05',
    title: 'Intellectual Property',
    content: `All content, features, and functionality available through the Vitamed Ai platform — including but not limited to software, text, graphics, logos, and interface design — are the exclusive property of Vitamed Ai and are protected by applicable intellectual property, copyright, and trademark laws.`
  },
  {
    id: '06',
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Vitamed Ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, including but not limited to loss of data, business interruption, or any other commercial damages or losses.`
  },
  {
    id: '07',
    title: 'Changes to Terms',
    content: `We may update these Terms and Conditions periodically to reflect changes in our services or applicable legal requirements. Material changes will be communicated through the website or via email to registered users. Continued use of the service after changes constitutes acceptance of the revised terms.`
  }
];

export function TermsAndConditions() {
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: '#f7f9fc', minHeight: '100vh' }}>

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', background: '#1e40af', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={16} color="#fff" />
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
            <span style={{ fontSize: '12px', fontFamily: "'Arial', sans-serif", color: '#2563eb', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>Terms & Conditions</span>
            <ChevronRight size={12} color="#94a3b8" />
            <span style={{ fontSize: '12px', fontFamily: "'Arial', sans-serif", color: '#94a3b8' }}>Vitamed Ai</span>
          </div>
          <h1 style={{ fontSize: '38px', fontWeight: '700', color: '#0f172a', lineHeight: '1.2', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Terms and Conditions
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', margin: '0', fontFamily: "'Arial', sans-serif", maxWidth: '560px' }}>
            Please read these terms carefully before using the Vitamed Ai platform and services.
          </p>
          <div style={{ marginTop: '28px', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></div>
              <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#64748b' }}>Effective January 2026</span>
            </div>
            <div style={{ width: '1px', height: '14px', background: '#e2e8f0' }}></div>
            <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#64748b' }}>Governing Law: United States</span>
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
                  border: section.highlight ? '1px solid #fbbf24' : '1px solid #e2e8f0',
                  padding: '32px',
                  marginBottom: '2px',
                  borderRadius: i === 0 ? '8px 8px 0 0' : i === sections.length - 1 ? '0 0 8px 8px' : '0',
                  position: 'relative'
                }}
              >
                {section.highlight && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '4px', padding: '6px 10px', marginBottom: '16px', width: 'fit-content' }}>
                    <AlertCircle size={12} color="#d97706" />
                    <span style={{ fontSize: '11px', fontFamily: "'Arial', sans-serif", color: '#d97706', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Important Notice</span>
                  </div>
                )}
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
            {/* Quick Nav */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ fontSize: '11px', fontFamily: "'Arial', sans-serif", color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>Sections</div>
              {sections.map((section, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', borderBottom: i < sections.length - 1 ? '1px solid #f8fafc' : 'none' }}>
                  <span style={{ fontSize: '11px', fontFamily: "'Arial', sans-serif", color: '#2563eb', fontWeight: '700', minWidth: '20px' }}>{section.id}</span>
                  <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#475569' }}>{section.title}</span>
                </div>
              ))}
            </div>

            {/* Contact Card */}
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <div style={{ width: '28px', height: '28px', background: '#eff6ff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={14} color="#2563eb" />
                </div>
                <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", fontWeight: '600', color: '#0f172a' }}>Questions?</span>
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: '0 0 14px', fontFamily: "'Arial', sans-serif" }}>
                Contact our team for any questions about these terms.
              </p>
              <a
                href="mailto:support@vitamed-ai.com"
                style={{ display: 'block', fontSize: '13px', color: '#2563eb', fontFamily: "'Arial', sans-serif", textDecoration: 'none', fontWeight: '600', padding: '10px 14px', background: '#eff6ff', borderRadius: '6px', textAlign: 'center' }}
              >
                support@vitamed-ai.com
              </a>
            </div>

            {/* Last Updated */}
            <div style={{ padding: '16px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}>
              <div style={{ fontSize: '11px', fontFamily: "'Arial', sans-serif", color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>Last Updated</div>
              <div style={{ fontSize: '14px', fontFamily: "'Arial', sans-serif", color: '#e2e8f0', fontWeight: '500' }}>January 2026</div>
              <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #1e293b', fontSize: '12px', fontFamily: "'Arial', sans-serif", color: '#64748b', lineHeight: '1.5' }}>
                Material changes will be communicated via email or website notice.
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #e2e8f0', background: '#fff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#94a3b8' }}>© 2026 Vitamed Ai. All rights reserved.</span>
          <span style={{ fontSize: '13px', fontFamily: "'Arial', sans-serif", color: '#94a3b8' }}>Terms & Conditions · Last updated January 2026</span>
        </div>
      </footer>

    </div>
  );
}

export default TermsAndConditions;