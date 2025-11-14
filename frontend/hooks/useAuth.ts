"use client";

import { useCallback, useState } from "react";

import { apiClient } from "@/lib/apiClient";

interface LoginPayload {
  username: string;
  password: string;
}

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({ token: null, isLoading: false, error: null });

  const login = useCallback(async ({ username, password }: LoginPayload) => {
    setState((prev: AuthState) => ({ ...prev, isLoading: true, error: null }));
    try {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);

      const response = await apiClient.post<{ access_token: string }>(
        "/auth/login",
        formData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        },
      );

      setState({ token: response.data.access_token, isLoading: false, error: null });
    } catch (error) {
      setState({ token: null, isLoading: false, error: "Invalid credentials" });
    }
  }, []);

  return { ...state, login };
}
