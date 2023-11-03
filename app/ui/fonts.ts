import { Montserrat, Courier_Prime, Lusitana } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
})

export const courierPrime = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
})

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})
