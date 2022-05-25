import { coin } from '@cosmjs/amino';
import { Pylonstech } from '../src/proto';

const messages = Pylonstech.pylons.pylons.MessageComposer.withTypeUrl;

const { createAccount, createCookbook } = messages;

it('createAccount', async () => {
  expect(
    createAccount({
      creator: 'creator1',
      username: 'myusername'
    })
  ).toMatchSnapshot();
});

it('createCookbook', async () => {
  expect(
    createCookbook({
      ID: 'someId',
      creator: 'creator1',
      description: 'desc',
      developer: 'somedev',
      enabled: true,
      name: 'somename',
      supportEmail: 'yolo@gmail.com',
      version: 'v1'
    })
  ).toMatchSnapshot();
});
