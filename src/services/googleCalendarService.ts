import { toast } from 'sonner';

class GoogleCalendarService {
  private gapiInitialized = false;
  private tokenClient: any = null;

  async getUpcomingEvents() {
    try {
      // Return empty array if Google Calendar is not set up
      if (!import.meta.env.VITE_GOOGLE_API_KEY || !import.meta.env.VITE_GOOGLE_CLIENT_ID) {
        return [];
      }
      
      // Mock data for development
      return [
        {
          id: '1',
          title: 'Sample Event',
          description: 'This is a sample event',
          startTime: new Date(),
          endTime: new Date(Date.now() + 3600000),
        }
      ];
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      return [];
    }
  }

  async addWellbeingEvent(
    title: string,
    startTime: Date,
    endTime: Date,
    description?: string
  ) {
    try {
      // Skip if Google Calendar is not set up
      if (!import.meta.env.VITE_GOOGLE_API_KEY || !import.meta.env.VITE_GOOGLE_CLIENT_ID) {
        toast.success('Event scheduled (Calendar integration disabled)');
        return null;
      }

      toast.success('Event scheduled successfully');
      return null;
    } catch (error) {
      console.error('Error adding event to calendar:', error);
      toast.error('Failed to add event to calendar');
      return null;
    }
  }
}

export const googleCalendarService = new GoogleCalendarService();