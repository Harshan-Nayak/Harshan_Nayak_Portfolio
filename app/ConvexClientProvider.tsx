"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import {
  initialProjectsData,
  initialSkillsData,
  initialGuestbookData,
  ProjectItem,
  SkillItem,
  GuestbookItem,
} from "./data/initialData";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
let convexClient: ConvexReactClient | null = null;

if (convexUrl) {
  try {
    convexClient = new ConvexReactClient(convexUrl);
  } catch (e) {
    console.warn("Failed to initialize Convex client with URL:", convexUrl, e);
  }
}

export interface ContactItem {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: number;
}

interface LocalStoreState {
  projects: ProjectItem[];
  skills: SkillItem[];
  guestbook: GuestbookItem[];
  contacts: ContactItem[];
}

interface LocalStoreContextType {
  state: LocalStoreState;
  likeProject: (slug: string) => void;
  endorseSkill: (name: string) => void;
  addGuestbookEntry: (entry: { name: string; role: string; company?: string; message: string; emoji?: string }) => void;
  submitContact: (contact: { name: string; email: string; phone?: string; subject: string; message: string }) => void;
}

const LocalStoreContext = createContext<LocalStoreContextType | null>(null);

export function usePortfolioStore() {
  const context = useContext(LocalStoreContext);
  return context;
}

export function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  const [localState, setLocalState] = useState<LocalStoreState>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("hn_portfolio_state");
        if (saved) return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      projects: initialProjectsData,
      skills: initialSkillsData,
      guestbook: initialGuestbookData,
      contacts: [],
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem("hn_portfolio_state", JSON.stringify(localState));
    } catch (e) {}
  }, [localState]);

  const likeProject = (slug: string) => {
    setLocalState((prev) => ({
      ...prev,
      projects: prev.projects.map((p) =>
        p.slug === slug ? { ...p, likes: p.likes + 1 } : p
      ),
    }));
  };

  const endorseSkill = (name: string) => {
    setLocalState((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.name === name ? { ...s, endorsements: s.endorsements + 1 } : s
      ),
    }));
  };

  const addGuestbookEntry = (entry: { name: string; role: string; company?: string; message: string; emoji?: string }) => {
    const newEntry: GuestbookItem = {
      ...entry,
      createdAt: Date.now(),
    };
    setLocalState((prev) => ({
      ...prev,
      guestbook: [newEntry, ...prev.guestbook],
    }));
  };

  const submitContact = (contact: { name: string; email: string; phone?: string; subject: string; message: string }) => {
    const newContact: ContactItem = {
      ...contact,
      createdAt: Date.now(),
    };
    setLocalState((prev) => ({
      ...prev,
      contacts: [newContact, ...prev.contacts],
    }));
  };

  const localContextValue: LocalStoreContextType = {
    state: localState,
    likeProject,
    endorseSkill,
    addGuestbookEntry,
    submitContact,
  };

  if (convexClient) {
    return (
      <ConvexProvider client={convexClient}>
        <LocalStoreContext.Provider value={localContextValue}>
          {children}
        </LocalStoreContext.Provider>
      </ConvexProvider>
    );
  }

  return (
    <LocalStoreContext.Provider value={localContextValue}>
      {children}
    </LocalStoreContext.Provider>
  );
}
