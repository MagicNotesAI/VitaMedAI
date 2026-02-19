import { motion } from 'motion/react';
import { ArrowRight, Check, Database, Brain, Shield } from 'lucide-react';
import { FooterBanner } from '../../../components/FooterBanner';

export function Service() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              A Structured Control Layer for Personal Health Data
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Med-A aggregates fragmented medical records, normalizes unstructured clinical data, and enables controlled distribution to providers through a unified interface.
            </p>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors group">
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="border border-gray-200 overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1592392513912-fd639ff32e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGNsZWFuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzE0NjU2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern healthcare technology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">
              Healthcare Data Is Fragmented
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Medical records exist across disconnected patient portals, each with different authentication requirements and limited interoperability.
                </p>
                <p>
                  Critical health information arrives as unstructured PDFs—lab results, imaging reports, discharge summaries—with no standardized format or searchable schema.
                </p>
                <p>
                  Patients lack longitudinal context. Providers repeat intake procedures. Care coordination requires manual document exchange and fax transmissions.
                </p>
                <p>
                  The result: duplicated tests, incomplete medical histories, and preventable errors at transition points.
                </p>
              </div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="border border-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542387740-67856d836e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFnbWVudGVkJTIwbWVkaWNhbCUyMGRvY3VtZW50cyUyMHNjYXR0ZXJlZCUyMHBhcGVycyUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcxNDY1MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fragmented healthcare documents"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core System Capabilities */}
      <section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Core System Capabilities
            </h2>
          </motion.div>

          <div className="space-y-20">
            {/* Capability 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-blue-600 pl-8"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-mono text-blue-600 tracking-wider">01</span>
                <div className="h-px flex-1 bg-gray-200"></div>
                
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Record Aggregation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Connect to EHR systems via FHIR APIs or upload documents directly. Supports Epic MyChart, Cerner, Allscripts, and 50+ health systems.
              </p>
            </motion.div>

            {/* Capability 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-blue-600 pl-8"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-mono text-blue-600 tracking-wider">02</span>
                <div className="h-px flex-1 bg-gray-200"></div>
                
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Structured Organization
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Clinical AI extracts key entities—diagnoses, medications, procedures, lab values—and structures them into a chronological, searchable timeline with preserved medical terminology.
              </p>
            </motion.div>

            {/* Capability 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-blue-600 pl-8"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-mono text-blue-600 tracking-wider">03</span>
                <div className="h-px flex-1 bg-gray-200"></div>
                
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Controlled Distribution
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Generate time-limited, encrypted access links. Users control visibility scope, expiration windows, and revocation. All access events are logged and auditable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Interface Section */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-32 bg-[#f7f9fc00]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-20 tracking-tight">
              Unified Health Record Interface
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Explanation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                All clinical data is presented in a structured timeline view, organized chronologically with filterable categories.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Diagnoses</div>
                    <div className="text-sm text-gray-600">ICD-10 coded conditions with date of onset and resolution status</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Medications</div>
                    <div className="text-sm text-gray-600">Active prescriptions with dosage, frequency, and prescribing provider</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Lab Results</div>
                    <div className="text-sm text-gray-600">Structured values with reference ranges and trend visualization</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Visit Summaries</div>
                    <div className="text-sm text-gray-600">Encounter notes with provider, facility, and chief complaint</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Searchable Structure</div>
                    <div className="text-sm text-gray-600">Full-text search across all documents with semantic query support</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Product UI Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-gray-200 bg-white"
            >
              <div className="p-6">
                {/* Search bar */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2">
                    <div className="text-sm text-gray-400">Search medical history...</div>
                  </div>
                  <button className="text-sm text-gray-600 font-medium">Filter</button>
                </div>

                {/* Timeline */}
                <div className="space-y-1">
                  <div className="border-l-2 border-blue-600 pl-4 pb-6">
                    <div className="text-xs font-mono text-gray-400 mb-2">FEB 15, 2026</div>
                    <div className="font-semibold text-gray-900 mb-1">Annual Physical Exam</div>
                    <div className="text-sm text-gray-600 mb-2">Dr. Sarah Chen • Primary Care</div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-sm font-medium">Vitals</span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-sm font-medium">Labs</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4 pb-6">
                    <div className="text-xs font-mono text-gray-400 mb-2">FEB 08, 2026</div>
                    <div className="font-semibold text-gray-900 mb-1">Lipid Panel Results</div>
                    <div className="text-sm text-gray-600 mb-2">Quest Diagnostics</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between text-gray-700">
                        <span>Total Cholesterol</span>
                        <span className="font-mono">185 mg/dL</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>LDL</span>
                        <span className="font-mono">110 mg/dL</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4 pb-6">
                    <div className="text-xs font-mono text-gray-400 mb-2">JAN 22, 2026</div>
                    <div className="font-semibold text-gray-900 mb-1">Prescription: Lisinopril</div>
                    <div className="text-sm text-gray-600">10mg daily • Dr. Sarah Chen</div>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4 pb-2">
                    <div className="text-xs font-mono text-gray-400 mb-2">DEC 12, 2025</div>
                    <div className="font-semibold text-gray-900 mb-1">Imaging: Chest X-Ray</div>
                    <div className="text-sm text-gray-600">Radiology Associates • No acute findings</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Alignment Section */}
      <section className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-20 tracking-tight">
              Built Around Clinical Workflow Realities
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-16">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <div className="border border-gray-200 overflow-hidden aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1758691461957-474a7686e388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwY2xpbmljYWwlMjBjYXJlfGVufDF8fHx8MTc3MTQ2NTYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Clinical consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Right: Text Grid */}
              <div className="grid gap-12 order-1 lg:order-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reduces Redundant Intake</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Providers access complete medical history before the visit. No repeated questionnaires. No manual transcription from verbal recall.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Preserves Longitudinal Context</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Full diagnostic trajectory visible in one interface. Medication changes tracked over time. Lab trends displayed with historical baselines.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Improves Visit Preparedness</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clinicians review records before encounter. Relevant context surfaces automatically. Care plans built on complete information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Maintains Strict Privacy Boundaries</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Zero-knowledge architecture. Med-A cannot decrypt patient data. Access requires explicit user permission with full audit logging.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy & Control Section */}
      <section className="border-t border-gray-200 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-20 tracking-tight">
              Privacy and Control by Design
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">User-Controlled Access</div>
                    <div className="text-gray-600">
                      All sharing actions require explicit user authorization. Access can be revoked instantly at any time.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Permission-Based Sharing</div>
                    <div className="text-gray-600">
                      Granular control over what data is visible. Users select specific records, date ranges, or clinical categories.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">No Secondary Monetization</div>
                    <div className="text-gray-600">
                      Med-A does not sell patient data. No third-party analytics. No advertising partners. Revenue from subscription fees only.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Clear Visibility Boundaries</div>
                    <div className="text-gray-600">
                      Complete audit trail of who accessed what data and when. Real-time notifications on all access events.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="border border-gray-200 overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VjdXJpdHklMjBwcml2YWN5JTIwZW5jcnlwdGlvbiUyMGxvY2t8ZW58MXx8fHwxNzcxNDY1NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Data security and privacy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-mono text-gray-400 mb-2 tracking-wider">COMPLIANCE</div>
                  <div className="text-lg text-gray-900">
                    SOC 2 Type II • HIPAA • HITRUST Certified
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors group">
                  <span>Request Security Documentation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Banner */}
      <FooterBanner />
    </div>
  );
}