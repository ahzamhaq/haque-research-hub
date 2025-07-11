
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Zap, Star, FileText } from 'lucide-react';
import { Publication } from '@/data/publicationsData';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const getTypeIcon = (type?: string) => {
    switch (type) {
      case 'priority':
        return <Award className="w-4 h-4 text-red-600" />;
      case 'rapid':
        return <Zap className="w-4 h-4 text-yellow-600" />;
      case 'cover':
        return <Star className="w-4 h-4 text-blue-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'priority':
        return 'Priority Report';
      case 'rapid':
        return 'Rapid Communication';
      case 'cover':
        return 'Cover Feature';
      default:
        return 'Regular Article';
    }
  };

  const getImpactFactorColor = (impactFactor: string) => {
    const value = parseFloat(impactFactor);
    if (value >= 50) return 'bg-red-100 text-red-800';
    if (value >= 20) return 'bg-orange-100 text-orange-800';
    if (value >= 10) return 'bg-yellow-100 text-yellow-800';
    if (value >= 5) return 'bg-green-100 text-green-800';
    return 'bg-blue-100 text-blue-800';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800">#{publication.number}</Badge>
          <Badge className={getImpactFactorColor(publication.impactFactor)}>
            IF: {publication.impactFactor}
          </Badge>
          <Badge variant="outline">{publication.year}</Badge>
          {publication.category && (
            <Badge variant="secondary">{publication.category}</Badge>
          )}
          {publication.status && (
            <Badge className="bg-yellow-100 text-yellow-800">{publication.status}</Badge>
          )}
          {publication.type && (
            <Badge className="flex items-center gap-1 bg-purple-100 text-purple-800">
              {getTypeIcon(publication.type)}
              {getTypeLabel(publication.type)}
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {publication.title}
        </h3>
        
        <p className="text-gray-600 mb-2 text-sm leading-relaxed">
          {publication.authors}
        </p>
        
        <p className="text-blue-600 font-medium mb-3">
          {publication.journal}
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          {publication.doi && (
            <div className="flex items-center gap-1">
              <span className="font-medium">DOI:</span>
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 text-blue-600 hover:text-blue-800"
                onClick={() => window.open(`https://doi.org/${publication.doi}`, '_blank')}
              >
                {publication.doi}
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          )}
          {publication.pmid && (
            <div className="flex items-center gap-1">
              <span className="font-medium">PMID:</span>
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 text-blue-600 hover:text-blue-800"
                onClick={() => window.open(`https://pubmed.ncbi.nlm.nih.gov/${publication.pmid}`, '_blank')}
              >
                {publication.pmid}
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          )}
          {publication.issn && (
            <span><span className="font-medium">ISSN:</span> {publication.issn}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;
