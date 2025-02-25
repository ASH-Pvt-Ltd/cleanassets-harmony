
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Shield,
  Search,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  Calendar,
  SlidersHorizontal
} from 'lucide-react';

// Mock data for pending verifications
const pendingVerifications = [
  {
    id: "VER-001",
    assetId: "AST-2024-001",
    municipality: "Panaji Municipal Corporation",
    submittedBy: "Rahul Sharma",
    type: "Vehicle Registration",
    submissionDate: "2024-02-20",
    dueDate: "2024-02-27",
    status: "urgent",
    details: "New garbage collection vehicle documentation verification"
  },
  {
    id: "VER-002",
    assetId: "AST-2024-002",
    municipality: "Margao Municipality",
    submittedBy: "Priya Patel",
    type: "Equipment Certification",
    submissionDate: "2024-02-19",
    dueDate: "2024-02-26",
    status: "normal",
    details: "Waste processing equipment certification renewal"
  },
  {
    id: "VER-003",
    assetId: "AST-2024-003",
    municipality: "Vasco Municipal Council",
    submittedBy: "Michael Fernandes",
    type: "Infrastructure Inspection",
    submissionDate: "2024-02-18",
    dueDate: "2024-02-25",
    status: "overdue",
    details: "Waste treatment plant safety compliance verification"
  }
];

const Pending = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'urgent':
        return <Badge variant="secondary" className="bg-red-100 text-red-800">Urgent Review</Badge>;
      case 'overdue':
        return <Badge variant="secondary" className="bg-red-100 text-red-800">Overdue</Badge>;
      case 'normal':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending Review</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Pending Verifications</h1>
            <p className="text-muted-foreground mt-1">
              Review and process verification requests
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground mt-1">
                3 urgent reviews
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Due Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground mt-1">
                2 high priority
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.8 days</div>
              <p className="text-xs text-muted-foreground mt-1">
                Last 30 days
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search verifications..."
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
          {pendingVerifications.map((verification) => (
            <Card key={verification.id} className="hover:bg-accent/50">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{verification.id}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="font-medium">{verification.assetId}</span>
                      </div>
                      <h3 className="font-medium">{verification.type}</h3>
                      <p className="text-sm text-muted-foreground">
                        {verification.details}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {getStatusBadge(verification.status)}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{verification.submittedBy}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{verification.municipality}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {verification.dueDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button className="flex-1" variant="default">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Approve
                    </Button>
                    <Button className="flex-1" variant="outline">
                      <XCircle className="mr-2 h-4 w-4" />
                      Reject
                    </Button>
                    <Button variant="outline">
                      <Clock className="h-4 w-4" />
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

export default Pending;
