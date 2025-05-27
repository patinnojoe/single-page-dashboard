import { IoMdCart } from 'react-icons/io';
import { FaBus } from 'react-icons/fa';
import { FaVanShuttle, FaHouse } from 'react-icons/fa6';
import { PiBowlFoodFill } from 'react-icons/pi';
import { MdPlayCircle } from 'react-icons/md';

export const expensesData = [
  {
    day: 'Today',
    expenses: [
      {
        icon: IoMdCart,
        indicatorColor: '#32A7E2',
        title: 'Grocery',
        time: '5:12pm',
        description: 'Blanja di Paskar',
        amount: '-326.800',
      },
      {
        icon: FaBus,
        indicatorColor: '#B548C6',
        title: 'Transportation',
        time: '12:45pm',
        description: 'Warung Makan',
        amount: '-85.000',
      },

      {
        icon: FaHouse,
        indicatorColor: '#FF8700',
        title: 'Housing',
        time: '5:12 pm',
        description: 'Bayar Listrik',
        amount: '-115.000',
      },
    ],
  },
  {
    day: 'Monday, 23, March 2020',
    expenses: [
      {
        icon: PiBowlFoodFill,
        indicatorColor: '#DC3434',
        title: 'Food and Drink',
        time: '9:00am',
        description: 'lorem ipsum dolor ',
        amount: '-146.000',
      },

      {
        icon: MdPlayCircle,
        indicatorColor: '#4BA83D',
        title: 'Entertainment',
        time: '5:12 pm',
        description: ' Nonton Bioskop',
        amount: '-35.000',
      },
    ],
  },
];

export const expensesTrack = [
  {
    label: 'Food and Drinks',
    amount: 87200,
    progress: '75%',
  },
  {
    label: 'Transportation',
    amount: 20000,
    progress: '40%',
  },
  {
    label: 'Entertainment',
    amount: 55000,
    progress: '60%',
  },
  {
    label: 'Housing',
    amount: 25000,
    progress: '30%',
  },
  {
    label: 'Vehicle',
    amount: 20000,
    progress: '35%',
  },
];
