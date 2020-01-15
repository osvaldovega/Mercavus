import React from 'react';
import { uuid } from 'uuidv4';
import { IStateProps, IDispatchProps, IState } from './types';
import AddUser from '../addUser/AddUser';
import AddHobbies from '../addHobbies/AddHobbies';
import UserList from '../userList/UserList';
import HobbiesList from '../hobbiesList/HobbiesList';
import Dialog from '../dialog/Dialog';


type Props = IStateProps & IDispatchProps;
type State = IState

export class Hobbies extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: '',
      passionLevel: 'default',
      description: '',
      since: 'default',
      userId: '',
      isDialogOpen: false,
      hobby: '',
      hobbyId: '',
    };
  }

  componentDidMount() {
    this.props.getListOfUsers();
  }

  handleChange = (e: any) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value } as unknown as Pick<State, keyof State>);
  }

  onAddUser = () => {
    this.props.addUser(this.state.username);
    this.setState({ username: '' });
  }

  onUserSelected = (userId: string) => {
    this.setState({ userId });
  }

  getHobbies = () => {
    const { users } = this.props;
    const { userId } = this.state;
    
    let hobbies: any = [];

    users.forEach(user => {
      if (user.id === userId) {
        hobbies = user.hobbies;
      }
    });

    return hobbies;
  }

  configRemoveHobbyFromUser = (hobbyId: string) => {
    const { users } = this.props;
    const { userId } = this.state;
 
    users
    .map(user => {
      if (user.id === userId) {
        const hobby = user.hobbies.filter(hobby => hobby.id === hobbyId)[0];
        this.setState({
          hobby: `Passion: ${hobby.passionLevel} - ${hobby.description} - since ${hobby.since}`,
          hobbyId,
        });
      }
      return user;
    });

    this.toggleDialog();
  }

  handleRemoveHobby = () => {
    const { userId, hobbyId } = this.state;
    this.props.removeHobby(userId, hobbyId);
    this.toggleDialog();
  }

  toggleDialog = () => {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  }

  onAddHobbyToUser = () => {
    const { userId, passionLevel, description, since } = this.state;
    const newHobby = {
      id: uuid(),
      passionLevel,
      description,
      since,
    };

    this.props.editUser(userId, newHobby);
    this.setState({
      passionLevel: 'default',
      description: '',
      since: 'default',
    });
  }

  render() {
    const { users } = this.props;
    const {
      description,
      hobby,
      isDialogOpen,
      passionLevel,
      since,
      userId,
    } = this.state;

    const isAddHobbyBtnDisabled = userId === ''
      || (description === ''
      || since === 'default'
      || passionLevel === 'default');

    return (
      <div className='hobbies-container'>
        <header className='hobbies-container-header'>
          <h1>User Hobbies</h1>
        </header>

        <section className='hobbies-container-content'>
          <div className='hobbies-container-content-user'>
            <AddUser
              value={this.state.username}
              onChange={this.handleChange}
              onClick={this.onAddUser}
            />
            <UserList
              users={users}
              onClick={this.onUserSelected}
              selectedUser={userId}
            />
          </div>

          <div className='hobbies-container-content-hobbies'>
            <AddHobbies
              values={this.state}
              onChange={this.handleChange}
              onAddHobby={this.onAddHobbyToUser}
              isAddHobbyBtnDisabled={isAddHobbyBtnDisabled}
            />
            <HobbiesList
              hobbies={this.getHobbies()}
              onRemoveHobby={this.configRemoveHobbyFromUser}
            />
          </div>

        </section>

        <Dialog
          isDialogOpen={isDialogOpen}
          title='Confirm deletion!'
          text={hobby}
          handleAction1={this.toggleDialog}
          handleAction2={this.handleRemoveHobby}
          btnLabel1='Cancel'
          btnLabel2='Confirm'
        />
      </div>
    );
  }
}

export default Hobbies;