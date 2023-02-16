import { useState, useEffect } from 'react'

import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { getDoces } from '../../../services/api';

export default function Doces () {

  const [doces, setDoces] = useState([])
  useEffect(() => {
    (async () => {
      const doceRequest = await getDoces()
      setDoces(doceRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title="Doces" description="Escolha entre nossos doces" />
      <SnackTitle>Doces</SnackTitle>
      <Snacks snacks={doces}></Snacks>
    </>
  )
}
