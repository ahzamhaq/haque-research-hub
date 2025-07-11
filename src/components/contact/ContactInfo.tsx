

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, ExternalLink } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="lg:col-span-1 space-y-6">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>Office Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="font-semibold text-gray-900">Professor & Dean</p>
            <p className="text-gray-600">School of Earth Biological & Environmental Sciences</p>
            <p className="text-gray-600">Central University of South Bihar (CUSB)</p>
            <p className="text-gray-600">Gaya, Bihar, India</p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>Contact Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium text-blue-600">rhaque@cusb.ac.in</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">ORCID ID</p>
            <a 
              href="https://orcid.org/0000-0002-5759-4140" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              0000-0002-5759-4140
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-600">Scopus ID</p>
            <p className="font-medium text-gray-700">57203184276</p>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Research Networks</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-between" asChild>
            <a href="https://scholar.google.com/citations?user=upsNfz0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <span>Google Scholar</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-between" asChild>
            <a href="https://www.researchgate.net/profile/Rizwanul_Haque5/2" target="_blank" rel="noopener noreferrer">
              <span>ResearchGate</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-between" asChild>
            <a href="https://www.scopus.com/authid/detail.uri?authorId=57203184276" target="_blank" rel="noopener noreferrer">
              <span>Scopus Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-between" asChild>
            <a href="https://www.linkedin.com/in/rizwanul-haque-62250122" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Office Hours</h3>
          <p className="text-blue-700 text-sm">
            Monday - Friday: 9:00 AM - 5:00 PM IST
            <br />
            For urgent research matters, please email directly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;

