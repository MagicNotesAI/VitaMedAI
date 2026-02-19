import { motion } from 'motion/react';
import { ArrowRight, FileText, Zap, Link2 } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Turn unstructured medical data into actionable health intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Upload records from any source. Our AI extracts, structures, and makes them shareable in seconds.
          </p>
        </motion.div>

        {/* Step 01 - Right aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-gray-400 tracking-wider">STEP 01</span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
              
              <h3 className="text-3xl font-bold leading-tight text-[#101828]">
                Connect your health records from any source
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Upload PDFs, images, or connect directly to your provider's portal. We support Epic, Cerner, and 50+ EHR systems.
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-500 pt-2">
                <FileText className="w-4 h-4" />
                <span>PDF, JPEG, PNG, DICOM, HL7, FHIR</span>
              </div>
            </div>

            {/* UI Mockup - Upload Interface */}
            <div className="border border-gray-200 bg-gray-50 p-8 relative">
              <div className="space-y-4">
                {/* Mock file upload */}
                <div className="border-2 border-dashed border-gray-300 bg-white p-8 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Drop files or click to upload</div>
                  <div className="text-xs text-gray-500">Supports all major medical record formats</div>
                </div>

                {/* Mock recent uploads */}
                <div className="space-y-2">
                  <div className="bg-white border border-gray-200 p-3 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1 text-sm text-gray-700">lab_results_2024.pdf</div>
                    <div className="text-xs text-gray-400">2.4 MB</div>
                  </div>
                  <div className="bg-white border border-gray-200 p-3 flex items-center gap-3 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="flex-1 text-sm text-gray-700">imaging_report.pdf</div>
                    <div className="text-xs text-gray-400">1.8 MB</div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-blue-900 text-white text-xs font-mono px-3 py-1">
                HIPAA Compliant
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 02 - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* UI Mockup - Timeline View */}
            <div className="border border-gray-200 bg-white relative order-2 lg:order-1">
              <div className="p-6 space-y-1">
                {/* Timeline items */}
                <div className="flex gap-4 border-l-2 border-blue-600 pl-4 pb-6">
                  <div className="flex-1">
                    <div className="text-xs font-mono text-gray-400 mb-1">FEB 15, 2026</div>
                    <div className="font-semibold text-gray-900 mb-1">Annual Physical Exam</div>
                    <div className="text-sm text-gray-600">Blood pressure: 118/76 • Heart rate: 72 bpm</div>
                    <div className="mt-2 flex gap-2">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Vitals</span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Labs</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 border-l-2 border-gray-200 pl-4 pb-6">
                  <div className="flex-1">
                    <div className="text-xs font-mono text-gray-400 mb-1">JAN 08, 2026</div>
                    <div className="font-semibold text-gray-900 mb-1">Lipid Panel Results</div>
                    <div className="text-sm text-gray-600">Total cholesterol: 185 mg/dL • LDL: 110 mg/dL</div>
                    <div className="mt-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Lab Work</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 border-l-2 border-gray-200 pl-4 pb-2">
                  <div className="flex-1">
                    <div className="text-xs font-mono text-gray-400 mb-1">DEC 12, 2025</div>
                    <div className="font-semibold text-gray-900 mb-1">X-Ray Imaging</div>
                    <div className="text-sm text-gray-600">Chest X-ray • No acute findings</div>
                  </div>
                </div>
              </div>

              {/* Processing indicator */}
              <div className="absolute -top-3 -right-3 bg-cyan-500 text-white text-xs font-mono px-3 py-1 flex items-center gap-2">
                <Zap className="w-3 h-3" />
                AI Structured
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-gray-400 tracking-wider">STEP 02</span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Automatically structure messy medical records into a searchable timeline
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our clinical AI reads unstructured documents, extracts key data points, and organizes them chronologically with medical terminology preserved.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-gray-100 px-4 py-2 rounded-sm">
                  <Zap className="w-4 h-4 text-cyan-500" />
                  <span>Average processing time: 8 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 03 - Right aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-mono text-gray-400 tracking-wider">STEP 03</span>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Generate a secure, time-limited medical summary link in one click
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Share your complete medical history with any provider via encrypted link. Set expiration time and revoke access anytime.
              </p>

              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <span>Zero-knowledge architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <span>Activity logs & audit trail</span>
                </div>
              </div>
            </div>

            {/* UI Mockup - Share Modal */}
            <div className="border border-gray-200 bg-white relative">
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-sm font-semibold text-gray-900 mb-3">Share Medical Summary</div>
                  
                  {/* Generated link */}
                  <div className="bg-gray-50 border border-gray-200 p-3 rounded-sm mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Link2 className="w-4 h-4 text-gray-400" />
                      <div className="text-xs font-mono text-gray-900 flex-1">
                        meda.health/s/Xk9mP2qL
                      </div>
                      <button className="text-xs text-blue-600 font-medium">Copy</button>
                    </div>
                    <div className="text-xs text-gray-500">Expires in 7 days • No password required</div>
                  </div>

                  {/* Settings */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-700">Link expiration</span>
                      <select className="text-sm border border-gray-200 rounded px-2 py-1 text-gray-900">
                        <option>7 days</option>
                        <option>24 hours</option>
                        <option>30 days</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-700">Require PIN</span>
                      <div className="w-10 h-5 bg-gray-200 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-700">Notify me on access</span>
                      <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2.5 text-sm font-medium rounded-full hover:bg-blue-700 transition-colors">
                  Generate & Copy Link
                </button>
              </div>

              {/* Status badge */}
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-mono px-3 py-1">
                256-bit AES
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Infrastructure note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-32 pt-12 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
              <div className="text-sm font-mono text-gray-400 mb-3 tracking-wider">INFRASTRUCTURE</div>
              <p className="text-lg text-gray-900">
                Built on SOC 2 Type II compliant infrastructure. Every transaction is logged, encrypted, and auditable.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold group hover:bg-gray-800 transition-colors">
              <span>Request API Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}