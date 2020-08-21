export default [
  {
    name: 'users',
    path: '/account/users',
    component: () => import(/* webpackChunkName: "users" */ './pages/Users')
  }
]
