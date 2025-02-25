import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Plus,
  Filter,
  SlidersHorizontal
} from 'lucide-react';

const requestsData = [
  {
    id: "REQ-001",
    title: "Garbage Truck Replacement",
    type: "Vehicle",
    status: "pending",
    date: "2024-02-15",
    priority: "high",
    description: "Request for replacement of aging garbage collection truck (ID: TRK-235)"
  },
  {
    id: "REQ-002",
    title: "Waste Bins for Market Area",
    type: "Equipment",
    status: "approved",
    date: "2024-02-14",
    priority: "medium",
    description: "Additional waste bins needed for the newly developed market area"
  },
  {
    id: "REQ-003",
    title: "Recycling Center Equipment",
    type: "Infrastructure",
    status: "rejected",
    date: "2024-02-13",
    priority: "high",
    description: "New sorting equipment for the municipal recycling center"
  }
];

const Requests = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'approved':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Approved</Badge>;
      case 'rejected':
        return <Badge variant="secondary" className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="secondary" className="bg-red-50 text-red-700">High Priority</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="bg-blue-50 text-blue-700">Medium Priority</Badge>;
      case 'low':
        return <Badge variant="secondary" className="bg-gray-50 text-gray-700">Low Priority</Badge>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Asset Requests</h1>
            <p className="text-muted-foreground mt-2">
              Submit and track asset requests for your municipality
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground mt-1">
                Last 30 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">
                Awaiting approval
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Approved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5 days</div>
              <p className="text-xs text-muted-foreground mt-1">
                Processing time
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search requests..."
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

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all" className="flex items-center">
              <ClipboardList className="mr-2 h-4 w-4" />
              All Requests
            </TabsTrigger>
            <TabsTrigger value="pending" className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Pending
            </TabsTrigger>
            <TabsTrigger value="approved" className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Approved
            </TabsTrigger>
            <TabsTrigger value="rejected" className="flex items-center">
              <XCircle className="mr-2 h-4 w-4" />
              Rejected
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-4">
              {requestsData.map((request) => (
                <Card key={request.id} className="hover:bg-accent/50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{request.id}</span>
                            <h3 className="font-medium">{request.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(request.status)}
                          {getPriorityBadge(request.priority)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>Type: {request.type}</span>
                          <span>Submitted: {request.date}</span>
                        </div>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending">
            <div className="space-y-4">
              {requestsData.filter(r => r.status === 'pending').map((request) => (
                <Card key={request.id} className="hover:bg-accent/50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{request.id}</span>
                            <h3 className="font-medium">{request.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(request.status)}
                          {getPriorityBadge(request.priority)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>Type: {request.type}</span>
                          <span>Submitted: {request.date}</span>
                        </div>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="approved">
            <div className="space-y-4">
              {requestsData.filter(r => r.status === 'approved').map((request) => (
                <Card key={request.id} className="hover:bg-accent/50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{request.id}</span>
                            <h3 className="font-medium">{request.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(request.status)}
                          {getPriorityBadge(request.priority)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>Type: {request.type}</span>
                          <span>Submitted: {request.date}</span>
                        </div>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected">
            <div className="space-y-4">
              {requestsData.filter(r => r.status === 'rejected').map((request) => (
                <Card key={request.id} className="hover:bg-accent/50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{request.id}</span>
                            <h3 className="font-medium">{request.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.description}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(request.status)}
                          {getPriorityBadge(request.priority)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>Type: {request.type}</span>
                          <span>Submitted: {request.date}</span>
                        </div>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Requests;
