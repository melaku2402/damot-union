import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {}, []);
  return { user };
}
