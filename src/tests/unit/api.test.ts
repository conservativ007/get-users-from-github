import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUser } from '../../components/helpers/getUser';

describe('searchUsers', () => {
  let mock: any;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  test('should return user data for a valid query', async () => {
    const query = 'john';
    const responseData = {
      items: [{ login: 'john_doe', avatar_url: 'https://example.com/avatar1' }],
    };

    mock
      .onGet(`https://api.github.com/search/users?q=${query}`)
      .reply(200, responseData);

    const users = await getUser(query);
    expect(users.login).toBe('john_doe');
  });

  test('should throw an error for invalid query', async () => {
    const query = '';
    mock.onGet(`https://api.github.com/search/users?q=${query}`).reply(400);

    await expect(getUser(query)).rejects.toThrow('Failed to fetch data');
  });
});
