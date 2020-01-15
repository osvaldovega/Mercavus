import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Hobbies from './Hobbies';
import {
  addUser,
  editUser,
  getListOfUsers,
  removeHobby,
} from '../../actions/user';
import { AppState } from '../../reducers';
import { IStateProps, IDispatchProps } from './types';
import { AppActions } from '../../types/appActions';

const mapStateToProps = (state: AppState): IStateProps => ({
  users: state.users,
  error: state.error,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
): IDispatchProps => ({
  addUser: bindActionCreators(addUser, dispatch),
  editUser: bindActionCreators(editUser, dispatch),
  getListOfUsers: bindActionCreators(getListOfUsers, dispatch),
  removeHobby: bindActionCreators(removeHobby, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hobbies);
