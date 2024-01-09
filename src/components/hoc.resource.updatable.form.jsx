import { ButtonGeneral, ButtonWrapper, FormWrapper } from "../styledcomponents/styled.components";
import includeUpdatableResource from "./hoc.resource.updatable";

/**react-design-patterns-app - version 4.10 - UserInfoFormAnyResource 
 * - Features: 
 * 
 *     --> Building 'UserInfoFormAnyResource'
 * 
 * Note: 'UserInfoFormAnyResource' taking as base code the
 * 'UserInfoForm', with few modifications can render any 
 * resource given
 * 
 */

const UserInfoFormAnyResource = includeUpdatableResource(
  ({ book, onChangeBook, onSaveBook, onResetBook }) => {
    const { name, pages } = book || {};

    return book ? (
      <FormWrapper>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => onChangeBook({ name: e.target.value })}
          />
        </label>
        <label>
        Pages:
          <input
            value={pages}
            onChange={(e) => onChangeBook({ pages: Number(e.target.value) })}
          />
        </label>
        <ButtonWrapper>
          <ButtonGeneral>
            <button onClick={onResetBook}>Reset</button>
          </ButtonGeneral>
          <ButtonGeneral>
            <button onClick={onSaveBook}>Save</button>
          </ButtonGeneral>
        </ButtonWrapper>
      </FormWrapper>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/books/1",
  "book"
);

export default UserInfoFormAnyResource;