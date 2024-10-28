import { StrictMode } from 'react'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { router } from './routes/root.ts';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
