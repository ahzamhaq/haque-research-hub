
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-900 flex items-center gap-3">
          <Mail className="w-6 h-6" />
          Get In Touch
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-4 py-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Contact via Email
            </h3>
            <p className="text-gray-600 mb-4">
              For research collaborations, academic consultations, or any inquiries, please send an email to:
            </p>
            <div className="bg-white rounded-md p-4 border border-blue-300">
              <a 
                href="mailto:rhaque@cusb.ac.in" 
                className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                rhaque@cusb.ac.in
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Prof. Haque will respond to your inquiry as soon as possible during office hours.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
