import { Route, Routes } from 'react-router-dom'
// Forced reload for new service routes
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ResourcesPage from './pages/ResourcesPage'
import ServicesPage from './pages/ServicesPage'
import StartupSupportPage from './pages/StartupSupportPage'
import TaxationServicesPage from './pages/services/TaxationServicesPage'
import GSTServicesPage from './pages/services/GSTServicesPage'
import BusinessRegistrationPage from './pages/services/BusinessRegistrationPage'
import LegalCompliancePage from './pages/services/LegalCompliancePage'
import AccountingAutomationPage from './pages/services/AccountingAutomationPage'
import LabourLawPage from './pages/services/LabourLawPage'
import NGOPage from './pages/services/NGOPage'
import IntellectualPropertyPage from './pages/services/IntellectualPropertyPage'
import BusinessSupportPage from './pages/services/BusinessSupportPage'
import USTaxationPage from './pages/services/USTaxationPage'
import LowerDeductionCertificatesPage from './pages/services/LowerDeductionCertificatesPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/startup-support" element={<StartupSupportPage />} />
        <Route path="/services">
          <Route index element={<ServicesPage />} />
          <Route path="taxation-services" element={<TaxationServicesPage />} />
          <Route path="us-taxation-services" element={<USTaxationPage />} />
          <Route path="lower-deduction-certificates" element={<LowerDeductionCertificatesPage />} />
          <Route path="gst-services" element={<GSTServicesPage />} />
          <Route path="business-registration" element={<BusinessRegistrationPage />} />
          <Route path="legal-regulatory-compliance" element={<LegalCompliancePage />} />
          <Route path="accounting-automation" element={<AccountingAutomationPage />} />
          <Route path="labour-law-compliance" element={<LabourLawPage />} />
          <Route path="ngo-non-profit-services" element={<NGOPage />} />
          <Route path="intellectual-property" element={<IntellectualPropertyPage />} />
          <Route path="business-support-services" element={<BusinessSupportPage />} />
        </Route>
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
