
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

export const TEST_LAYOUT: Routes = [
  {
    path: '',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];
