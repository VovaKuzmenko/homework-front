import { CurrentUser } from './CurrentUser';
import { UsersObjectType } from './HW2';
import { UserType } from './HW2'

type UserList2PropsType = {
  // users: any // пропиши типизацию
  users: UsersObjectType
  // filterUsers: any // пропиши типизацию
  filterUsers: (city: string) => void
};

export const UserList2 = (props: UserList2PropsType) => {
  return (
    <div id={'hw02-users'}>
      <h2>User List:</h2>

      <button id={'hw02-filter-button'} onClick={() => props.filterUsers('Los Angeles')}>SHOW ME FRIENDS FROM LA</button>

      <ul>
        {/* {props.users.myFriends.map((user) => ( */}
        {/*    <ВЫЗЫВАЕМ КОМПОНЕНТУ CurrentUser />*/}
        {props.users.myFriends.map((user) => (

          <li key={user.id}>
            <CurrentUser user={user} />
          </li>

        ))}
      </ul>
    </div>
  );
};
