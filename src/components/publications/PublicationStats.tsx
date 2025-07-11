
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { researchMetrics } from '@/data/publicationsData';
import { Publication } from '@/data/publicationsData';

interface PublicationStatsProps {
  publications: Publication[];
}

const PublicationStats: React.FC<PublicationStatsProps> = ({ publications }) => {
  // Publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.year;
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const yearData = Object.entries(publicationsByYear)
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => parseInt(a.year) - parseInt(b.year));

  // Publications by category
  const publicationsByCategory = publications.reduce((acc, pub) => {
    const category = pub.category || 'Other';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categoryData = Object.entries(publicationsByCategory)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8); // Top 8 categories

  // Impact factor distribution
  const impactFactorRanges = publications.reduce((acc, pub) => {
    const impact = parseFloat(pub.impactFactor);
    if (impact >= 50) acc['50+'] = (acc['50+'] || 0) + 1;
    else if (impact >= 20) acc['20-49'] = (acc['20-49'] || 0) + 1;
    else if (impact >= 10) acc['10-19'] = (acc['10-19'] || 0) + 1;
    else if (impact >= 5) acc['5-9'] = (acc['5-9'] || 0) + 1;
    else acc['<5'] = (acc['<5'] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const impactData = Object.entries(impactFactorRanges)
    .map(([range, count]) => ({ range, count }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

  // Special publication types
  const specialTypes = publications.reduce((acc, pub) => {
    if (pub.type) {
      acc[pub.type] = (acc[pub.type] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6 mb-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{publications.length}</div>
            <div className="text-gray-600">Publications</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{researchMetrics.totalCitations}+</div>
            <div className="text-gray-600">Citations</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{researchMetrics.hIndex}</div>
            <div className="text-gray-600">H-Index</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{researchMetrics.totalImpactFactor}</div>
            <div className="text-gray-600">Total Impact Factor</div>
          </CardContent>
        </Card>
      </div>

      {/* Special Publication Types */}
      {Object.keys(specialTypes).length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Special Publication Types</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(specialTypes).map(([type, count]) => (
                <Badge key={type} variant="outline" className="px-3 py-1">
                  {type === 'priority' && 'Priority Reports'}
                  {type === 'rapid' && 'Rapid Communications'}
                  {type === 'cover' && 'Cover Features'}
                  : {count}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Publications by Year */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Publications by Year</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Publications by Category */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Publications by Research Area</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percent }) => `${category}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Impact Factor Distribution */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Impact Factor Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={impactData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="range" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublicationStats;
