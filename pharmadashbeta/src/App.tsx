
import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { PostList } from "./posts";
import { UserList } from "./users";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>

<Admin dataProvider={dataProvider}></Admin>

<Resource name="posts" list={PostList} edit={EditGuesser} />
<Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />

  </Admin>
);
