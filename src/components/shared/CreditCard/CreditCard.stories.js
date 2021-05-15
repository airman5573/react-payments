import CreditCard from '.';
import { MINT } from '../../../constants/palette';

export default {
  component: CreditCard,
  title: 'Common/CreditCard',
};

const Template = args => <CreditCard {...args} />;

export const MediumSize = Template.bind({});

MediumSize.args = {
  cardBrand: {
    name: 'test123',
    color: MINT[500],
  },
  ownerName: 'test123',
  cardNumber: '1234-1234-1234-1234',
  expDate: {
    month: '3',
    year: '25',
  },
  cvc: '123',
  size: 'md',
  nickName: '닉네임',
};

export const LargeSize = Template.bind({});

LargeSize.args = {
  cardBrand: {
    name: 'test123',
    color: MINT[500],
  },
  ownerName: 'test123',
  cardNumber: '1234-1234-1234-1234',
  expDate: {
    month: '3',
    year: '25',
  },
  cvc: '123',
  size: 'lg',
  nickName: '닉네임',
};