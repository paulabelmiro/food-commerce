import { useState, useEffect } from 'react'

import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { getBebidas } from '../../../services/api';

export default function Bebidas () {
  const [ bebidas, setBebidas ] = useState([])

  useEffect(() => {
    (async () => {
      const bebidaRequest = await getBebidas()
      setBebidas(bebidaRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="Bebidas" description="Escolha entre nossas bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}
