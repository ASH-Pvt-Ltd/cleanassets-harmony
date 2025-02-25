
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
  CheckCircle,
  Calendar,
  User,
  Building,
  FileCheck,
  Clock,
  CheckCircle2
} from 'lucide-react';

// Mock data for verified records
const verifiedRecords = [
  {
    id: "VER-001",
    assetId: "AST-2024-001",
    municipality: "Panaji Municipal Corporation",
    verifiedBy: "Rajesh Kumar",
    type: "Vehicle Registration",
    verificationDate: "2024-02-15",
    submissionDate: "2024-02-10",
    details: "Garbage collection vehicle documentation verified",
    notes: "All documentation complete and verified"
  },
  {
    id: "VER-002",
    assetId: "AST-2024-005",
    municipality: "Margao Municipality",
    verifiedBy: "Suresh Patel",
    type: "Equipment Certification",
    verificationDate: "2024-02-14",
    submissionDate: "2024-02-08",
    details: "Waste processing equipment certification completed",
    notes: "Equipment meets all safety standards"
  }
];

const Verified = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Verified Records</h1>
            <p className="text-muted-foreground mt-1">
              View and manage verified asset records
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Verified
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground mt-1">
                Last 30 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Verification Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3 days</div>
              <p className="text-xs text-muted-foreground mt-1">
                From submission to verification
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Verification Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Approval rate this month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search verified records..."
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
          {verifiedRecords.map((record) => (
            <Card key={record.id} className="hover:bg-accent/50">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{record.id}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="font-medium">{record.assetId}</span>
                      </div>
                      <h3 className="font-medium">{record.type}</h3>
                      <p className="text-sm text-muted-foreground">
                        {record.details}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Verified
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Verified by: {record.verifiedBy}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{record.municipality}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Verified: {record.verificationDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Submitted: {record.submissionDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex-1">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
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

export default Verified;
