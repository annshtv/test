import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  email: string;
  joinDate: string;
  // Дополнительные поля профиля
  subscribedPodcasts?: number;
  listenedEpisodes?: number;
  favoriteCategories?: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Загружаем данные пользователя из localStorage при инициализации
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Ошибка при загрузке данных пользователя:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (userData: User) => {
    // Добавляем дополнительные данные, которые могут быть нужны в будущем
    const completedUserData = {
      ...userData,
      subscribedPodcasts: userData.subscribedPodcasts || 24,
      listenedEpisodes: userData.listenedEpisodes || 178,
      favoriteCategories: userData.favoriteCategories || ['Psychology', 'Science', 'History', 'Philosophy'],
    };
    
    // Сохраняем пользователя в localStorage
    localStorage.setItem('user', JSON.stringify(completedUserData));
    
    setUser(completedUserData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Удаляем данные пользователя из localStorage
    localStorage.removeItem('user');
    
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};