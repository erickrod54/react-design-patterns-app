import { ButtonGeneral, ButtonWrapper, FormWrapper } from "../styledcomponents/styled.components";
import includeUpdatableUser from "./hoc.include.updateable.user.component";

/**react-design-patterns-app - version 4.10 - UserInfoForm 
 * - Features: 
 * 
 *     --> Building 'UserInfoForm'
 * 
 * Note: 'UserInfoForm' is a component created by the HOC
 * 'includeUpdatableUser', is going to render an 'user' 
 * of a 'dataset'.
 */

const UserInfoForm = includeUpdatableUser(
  ({ updatableUser, changeHandler, userPostHandler, resetUserHandler }) => {
    const { name, age } = updatableUser || {};

    return updatableUser ? (
      <FormWrapper>
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => changeHandler({ name: e.target.value })}
            />
          </label>
          <label>
            Age:
            <input
              value={age}
              onChange={(e) => changeHandler({ age: Number(e.target.value) })}
            />
          </label>
          
          <ButtonWrapper>
            <ButtonGeneral>
                <button onClick={resetUserHandler}>Reset</button>
            </ButtonGeneral>
            <ButtonGeneral>
                <button onClick={userPostHandler}>Save</button>
            </ButtonGeneral>
          </ButtonWrapper>
      </FormWrapper>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "3"
);

export default UserInfoForm;