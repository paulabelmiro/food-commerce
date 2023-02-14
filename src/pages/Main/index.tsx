import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar/index'
import { Container } from './styles'

import logoImg from '../../assets/logo192.png'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
    </Container>
  )
}
