import { UserService } from '../user-service';

describe(UserService, () => {
  it('should create a user with email and name', () => {
    const userService = new UserService();

    const user = userService.createUser('jane@dev.com', 'Jane Developer');

    expect(user).toMatchObject({ email: 'jane@dev.com', name: 'Jane Developer' });
  });

  it.skip('should store and retrieve created users by email', () => {
    // const userService = new UserService();
    //
    // const created = userService.createUser('jane@dev.com', 'Jane Developer');
    // const retrieved = userService.findByEmail('jane@dev.com');
    //
    // expect(retrieved).toEqual(created);

    expect(true).toBe(false);
  });
});
