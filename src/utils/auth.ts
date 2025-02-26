
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Role, User } from '@/types/auth';

export const determineRole = (email: string | undefined): Role => {
  if (!email) return 'verification';
  if (email.includes('@goa.gov.in')) return 'government';
  if (email.includes('@municipality.gov.in')) return 'municipality';
  if (email.includes('@verification.gov.in')) return 'verification';
  return 'verification';
};

export const fetchUserProfile = async (userId: string, setUser: (user: User | null) => void) => {
  try {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    
    if (!authUser) {
      return null;
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !profile) {
      console.error('Profile fetch error:', error || 'Profile not found');
      return null;
    }

    const role = determineRole(authUser.email);
    const userData = {
      id: authUser.email || userId,
      role: role,
      name: profile.full_name || 'Unknown',
      organization: profile.organization || 'Unknown',
      lastLogin: new Date().toISOString(),
    };
    
    setUser(userData);
    return profile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

export const signIn = async (id: string): Promise<string> => {
  if (id.toLowerCase().startsWith('goa')) {
    return `${id}@goa.gov.in`;
  } else if (id.toLowerCase().startsWith('mun')) {
    return `${id}@municipality.gov.in`;
  } else if (id.toLowerCase().startsWith('ver')) {
    return `${id}@verification.gov.in`;
  }
  throw new Error('Invalid ID format. Must start with Goa, Mun, or Ver');
};
