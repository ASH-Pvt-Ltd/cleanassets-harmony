import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Filter,
  Search,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Approvals = () => {
  const tickets = [
    {
      id: "T-001",
      title: "New Garbage Truck Request",
      requester: "North Goa Municipality",
      date: "2024-02-20",
      priority: "high",
      status: "pending",
      type: "asset"
    },
    {
      id: "T-002",
      title: "Maintenance Budget Approval",
      requester: "Fleet Department",
      date: "2024-02-19",
      priority: "medium",
      status: "approved",
      type: "budget"
    },
    {
      id: "T-003",
      title: "Route Change Request",
      requester: "Panaji Ward 3",
      date: "2024-02-18",
      priority: "low",
      status: "rejected",
      type: "operation"
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      approved: "bg-green-100 text-green-800 hover:bg-green-200",
      rejected: "bg-red-100 text-red-800 hover:bg-red-200"
    };
    return styles[status as keyof typeof styles];
  };

  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: "bg-red-100 text-red-800",
      medium: "bg-blue-100 text-blue-800",
      low: "bg-gray-100 text-gray-800"
    };
    return styles[priority as keyof typeof styles];
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Approvals & Requests</h1>
            <p className="text-muted-foreground mt-2">
              Manage and track approval requests and tickets
            </p>
          </div>
          <Button>
            <AlertCircle className="mr-2 h-4 w-4" />
            Create New Request
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending Approvals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">
                4 high priority
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Approved This Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground mt-1">
                +5 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.5 days</div>
              <p className="text-xs text-muted-foreground mt-1">
                -0.5 days improvement
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
              <div className="text-2xl font-bold">8%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Within target range
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
            Filters
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="pending">
              <Clock className="mr-2 h-4 w-4" />
              Pending
            </TabsTrigger>
            <TabsTrigger value="approved">
              <CheckCircle className="mr-2 h-4 w-4" />
              Approved
            </TabsTrigger>
            <TabsTrigger value="rejected">
              <XCircle className="mr-2 h-4 w-4" />
              Rejected
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="space-y-2">
              {tickets.map((ticket) => (
                <Card key={ticket.id} className="hover:bg-accent/50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{ticket.id}</span>
                          <h3 className="font-medium">{ticket.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Requested by {ticket.requester} on {ticket.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className={getPriorityBadge(ticket.priority)}>
                          {ticket.priority}
                        </Badge>
                        <Badge variant="secondary" className={getStatusBadge(ticket.status)}>
                          {ticket.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <div className="space-y-2">
              {tickets
                .filter((ticket) => ticket.status === "pending")
                .map((ticket) => (
                  <Card key={ticket.id} className="hover:bg-accent/50 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{ticket.id}</span>
                            <h3 className="font-medium">{ticket.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Requested by {ticket.requester} on {ticket.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getPriorityBadge(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                          <Badge variant="secondary" className={getStatusBadge(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            <div className="space-y-2">
              {tickets
                .filter((ticket) => ticket.status === "approved")
                .map((ticket) => (
                  <Card key={ticket.id} className="hover:bg-accent/50 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{ticket.id}</span>
                            <h3 className="font-medium">{ticket.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Requested by {ticket.requester} on {ticket.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getPriorityBadge(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                          <Badge variant="secondary" className={getStatusBadge(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <div className="space-y-2">
              {tickets
                .filter((ticket) => ticket.status === "rejected")
                .map((ticket) => (
                  <Card key={ticket.id} className="hover:bg-accent/50 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{ticket.id}</span>
                            <h3 className="font-medium">{ticket.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Requested by {ticket.requester} on {ticket.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getPriorityBadge(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                          <Badge variant="secondary" className={getStatusBadge(ticket.status)}>
                            {ticket.status}
                          </Badge>
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

export default Approvals;
