import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/home'
import { routes as users } from '../modules/users'

export default [
  ...auth,
  ...home,
  ...users
]
