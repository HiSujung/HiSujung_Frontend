// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // 로그인 함수: 실제 백엔드와의 통신 등을 처리한 뒤 user와 token을 설정
  const login = async (newToken, userInfo) => {
    setToken(newToken);
    setUser(userInfo);
    // saveTokenAndUser(newToken, userInfo);
  };

  // 로그아웃 함수: user와 token 초기화
  const logout = async () => {
    setToken(null);
    setUser(null);
    // removeTokenAndUser(token, user);
  };

  // const isAuthenticated = !!user; // 로그인 여부 확인

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);