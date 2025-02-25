
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Globe,
  Mail,
  Key,
  Smartphone,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';

const Settings = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings and system preferences
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Shield className="mr-2 h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center">
              <SettingsIcon className="mr-2 h-4 w-4" />
              System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your profile information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user?.name} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" defaultValue={user?.organization} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" value={user?.role} disabled />
                  </div>
                </div>
                <Separator />
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how you want to receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates via email
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Mobile Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notifications on your mobile device
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security and authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Change Password</Label>
                        <p className="text-sm text-muted-foreground">
                          Update your account password
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Key className="mr-2 h-4 w-4" />
                        Update
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Shield className="mr-2 h-4 w-4" />
                        Enable
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure system-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Language</Label>
                        <p className="text-sm text-muted-foreground">
                          Select your preferred language
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Globe className="mr-2 h-4 w-4" />
                        English
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Data Management</Label>
                        <p className="text-sm text-muted-foreground">
                          Manage your data and exports
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Database className="mr-2 h-4 w-4" />
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
