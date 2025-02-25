import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Queries = () => {
  const queries = [
    {
      id: "Q-001",
      title: "Waste Collection Schedule Change",
      sender: "Panaji Ward 5",
      date: "2024-02-20",
      priority: "high",
      status: "open",
      category: "schedule"
    },
    {
      id: "Q-002",
      title: "Bin Maintenance Request",
      sender: "Margao Municipality",
      date: "2024-02-19",
      priority: "medium",
      status: "in-progress",
      category: "maintenance"
    },
    {
      id: "Q-003",
      title: "Route Optimization Suggestion",
      sender: "Vasco Operations",
      date: "2024-02-18",
      priority: "low",
      status: "resolved",
      category: "optimization"
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      open: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      "in-progress": "bg-blue-100 text-blue-800 hover:bg-blue-200",
      resolved: "bg-green-100 text-green-800 hover:bg-green-200",
      closed: "bg-gray-100 text-gray-800 hover:bg-gray-200"
    };
    return styles[status as keyof typeof styles];
  };

  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: "bg-red-100 text-red-800",
      medium: "bg-orange-100 text-orange-800",
      low: "bg-green-100 text-green-800"
    };
    return styles[priority as keyof typeof styles];
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Queries & Support</h1>
            <p className="text-muted-foreground mt-2">
              Manage and respond to queries from municipalities and operators
            </p>
          </div>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Raise New Query
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Open Queries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground mt-1">
                5 high priority
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
              <div className="text-2xl font-bold">4.2 hours</div>
              <p className="text-xs text-muted-foreground mt-1">
                -30min from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Resolution Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Target: 95%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Satisfaction Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.5/5</div>
              <p className="text-xs text-muted-foreground mt-1">
                Based on 128 responses
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search queries..."
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
            <TabsTrigger value="all">
              <MessageCircle className="mr-2 h-4 w-4" />
              All Queries
            </TabsTrigger>
            <TabsTrigger value="open">
              <Clock className="mr-2 h-4 w-4" />
              Open
            </TabsTrigger>
            <TabsTrigger value="in-progress">
              <HelpCircle className="mr-2 h-4 w-4" />
              In Progress
            </TabsTrigger>
            <TabsTrigger value="resolved">
              <CheckCircle className="mr-2 h-4 w-4" />
              Resolved
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="space-y-2">
              {queries.map((query) => (
                <Card key={query.id} className="hover:bg-accent/50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{query.id}</span>
                          <h3 className="font-medium">{query.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          From {query.sender} on {query.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className={getPriorityBadge(query.priority)}>
                          {query.priority}
                        </Badge>
                        <Badge variant="secondary" className={getStatusBadge(query.status)}>
                          {query.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="open" className="space-y-4">
            <div className="space-y-2">
              {queries
                .filter((query) => query.status === "open")
                .map((query) => (
                  <Card key={query.id} className="hover:bg-accent/50 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{query.id}</span>
                            <h3 className="font-medium">{query.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            From {query.sender} on {query.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getPriorityBadge(query.priority)}>
                            {query.priority}
                          </Badge>
                          <Badge variant="secondary" className={getStatusBadge(query.status)}>
                            {query.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            <div className="space-y-2">
              {queries
                .filter((query) => query.status === "in-progress")
                .map((query) => (
                  <Card key={query.id} className="hover:bg-accent/50 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{query.id}</span>
                            <h3 className="font-medium">{query.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            From {query.sender} on {query.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getPriorityBadge(query.priority)}>
                            {query.priority}
                          </Badge>
                          <Badge variant="secondary" className={getStatusBadge(query.status)}>
                            {query.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="resolved" className="space-y-4">
            <div className="space-y-2">
              {queries
                .filter((query) => query.status === "resolved")
                .map((query) => (
                  <Card key={query.id} className="hover:bg-accent/50 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{query.id}</span>
                            <h3 className="font-medium">{query.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            From {query.sender} on {query.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={getPriorityBadge(query.priority)}>
                            {query.priority}
                          </Badge>
                          <Badge variant="secondary" className={getStatusBadge(query.status)}>
                            {query.status}
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

export default Queries;
