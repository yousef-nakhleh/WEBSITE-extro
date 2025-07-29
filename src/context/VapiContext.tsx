import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Vapi from '@vapi-ai/web';

interface VapiContextType {
  startCall: () => void;
  stopCall: () => void;
  isConnected: boolean;
  isSpeaking: boolean;
  transcript: Array<{ role: string; text: string }>;
}

const VapiContext = createContext<VapiContextType | undefined>(undefined);

export const VapiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string }>>([]);

  const VAPI_PUBLIC_API_KEY = import.meta.env.VITE_VAPI_PUBLIC_API_KEY;
  const VAPI_ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

  useEffect(() => {
    if (!VAPI_PUBLIC_API_KEY || !VAPI_ASSISTANT_ID) {
      console.error('Vapi API Key or Assistant ID is missing. Please check your .env file.');
      return;
    }

    const vapiInstance = new Vapi(VAPI_PUBLIC_API_KEY);
    setVapi(vapiInstance);

    vapiInstance.on('call-start', () => {
      console.log('Vapi Call started');
      setIsConnected(true);
      setTranscript([]); // Clear transcript on new call
    });

    vapiInstance.on('call-end', () => {
      console.log('Vapi Call ended');
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on('speech-start', () => {
      console.log('Vapi Assistant started speaking');
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      console.log('Vapi Assistant stopped speaking');
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        setTranscript((prev) => [...prev, { role: message.role, text: message.transcript }]);
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
      setIsConnected(false);
      setIsSpeaking(false);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [VAPI_PUBLIC_API_KEY, VAPI_ASSISTANT_ID]);

  const startCall = () => {
    if (vapi && VAPI_ASSISTANT_ID) {
      vapi.start(VAPI_ASSISTANT_ID);
    } else {
      console.warn('Vapi instance not ready or Assistant ID missing.');
    }
  };

  const stopCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return (
    <VapiContext.Provider value={{ startCall, stopCall, isConnected, isSpeaking, transcript }}>
      {children}
    </VapiContext.Provider>
  );
};

export const useVapi = (): VapiContextType => {
  const context = useContext(VapiContext);
  if (context === undefined) {
    throw new Error('useVapi must be used within a VapiProvider');
  }
  return context;
};