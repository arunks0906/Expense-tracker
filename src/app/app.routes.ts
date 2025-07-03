import { Routes } from '@angular/router';
import { Balance } from './balance/balance';
import { AddTransaction } from './add-transaction/add-transaction';
import { List } from './list/list';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Layout } from './layout/layout';


export const routes: Routes = [
  { path: '', component: Login }, 
  { path: 'register', component: Register },
 
  {
    path: '',
    component: Layout,
    children: [
        { path: 'balance', component: Balance },      
        { path: 'add', component: AddTransaction },
        { path: 'list', component: List },
    ]
  }
];
