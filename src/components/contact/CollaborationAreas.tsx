
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CollaborationAreas = () => {
  return (
    <Card className="mt-8 hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-blue-900">Collaboration Opportunities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Research Areas</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Stem Cell Biology</li>
              <li>• Cancer Immunotherapy</li>
              <li>• T-cell Engineering</li>
              <li>• Regenerative Medicine</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Consultation Services</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Grant Writing Support</li>
              <li>• Research Design</li>
              <li>• Academic Mentorship</li>
              <li>• Conference Speaking</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollaborationAreas;
