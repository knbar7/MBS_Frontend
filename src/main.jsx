import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './authProvider'
import { ProfilePage } from './profilePage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProfilePage />
    </AuthProvider>
  </React.StrictMode>,
)
