
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Filter,
  SlidersHorizontal,
  XCircle,
  Calendar,
  User,
  Building,
  FileX,
  Clock,
  ArrowRightCircle,
  RefreshCw
} from 'lucide-react';

// Mock data for rejected records
const rejectedRecords = [
  {
    id: "REJ-001",
    assetId: "AST-2024-002",
    municipality: "Panaji Municipal Corporation",
    rejectedBy: "Amit Singh",
    type: "Vehicle Registration",
    rejectionDate: "2024-02-16",
    submissionDate: "2024-02-12",
    details: "Incomplete vehicle documentation",
    reason: "Missing insurance documentation and vehicle fitness certificate"
  },
  {
    id: "REJ-002",
    assetId: "AST-2024-006",
    municipality: "Vasco Municipality",
    rejectedBy: "Priya Desai",
    type: "Equipment Certification",
    rejectionDate: "2024-02-15",
    submissionDate: "2024-02-10",
    details: "Safety certification incomplete",
    reason: "Equipment fails to meet current safety standards"
  }
];

const Rejected = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Rejected Records</h1>
            <p className="text-muted-foreground mt-1">
              Review and manage rejected asset records
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Rejected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground mt-1">
                Last 30 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Rejection Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6%</div>
              <p className="text-xs text-muted-foreground mt-1">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Resubmission Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Successfully resubmitted
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search rejected records..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Sort
          </Button>
        </div>

        <div className="space-y-4">
          {rejectedRecords.map((record) => (
            <Card key={record.id} className="hover:bg-accent/50">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileX className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{record.id}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="font-medium">{record.assetId}</span>
                      </div>
                      <h3 className="font-medium">{record.type}</h3>
                      <p className="text-sm text-muted-foreground">
                        {record.details}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      Rejected
                    </Badge>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-md p-3">
                    <p className="text-sm text-red-800">
                      <strong>Rejection Reason:</strong> {record.reason}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Rejected by: {record.rejectedBy}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{record.municipality}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Rejected: {record.rejectionDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Submitted: {record.submissionDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="default" className="flex-1">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Request Resubmission
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ArrowRightCircle className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Rejected;
