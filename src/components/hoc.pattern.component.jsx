import React from "react";
import CustomTitle from "./custom.title.component";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import hocLogProps from "./hoc.log.props.component";
import UserInfo from "./user.info.component";
import includeUser from "./hoc.include.user.component";
import UserInfoForm from "./hoc.user.updateable.form";
import UserInfoFormAnyResource from "./hoc.resource.updatable.form";
import ControlledWrapper from "./controlled.wrapper.component";
import BashCode from "./bash.higlight.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 6.14 - HOCPattern 
 * - Features: 
 * 
 *     --> Adding 'userinfofactory' code. 
 * 
 * Note: 'UserInfoFormAnyResource' taking as base code the
 * 'UserInfoForm', with few modifications can render any 
 * resource given
 * 
 */

const HOCPattern = () => {

    const { CodeData } = usePatternsAppContext();

    /**here create the  UserInfoExtended*/
    const UserInfoExtended = hocLogProps(UserInfo);
    
    const UserInfoWithLoader = includeUser(UserInfo, "3");
    
    const userinfocode = CodeData[44].code;
    const userinfofactory = CodeData[45].code;

    return(
        <div>
            <CustomTitleStyle>
                    <CustomTitle  title={<p className="sub-title"><span >High Order Component Pattern ( HOC )</span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
                <p>
                    <span className="text-white font-semibold"> HOC is an essential pattern 
                    in React </span>, HOC are components that instead 
                    of returning a JSX as another common Component, it <span className="text-white font-semibold"> 
                    returns another Component </span> when is called, 
                    think of it as a <span className="text-white font-semibold"> Component factory </span>
                </p>

                <p>
                    so in detail a <span className="text-white font-semibold"> common component </span>
                    will go from <span className="text-white font-semibold"> Component to JSX directly </span>
                    , but in <span className="text-white font-semibold"> HOC pattern </span> will go 
                    from <span className="text-white font-semibold"> HOC ( that is the component that will return components ) 
                    </span> to the <span className="text-white font-semibold"> Component ( an end component to return ) </span> 
                    and then will go to the JSX code
                </p>

                <p>
                    the HOC will be a functional <span className="text-white font-semibold"> ( all the logic ) </span> Component 
                    to return an <span className="text-white font-semibold"> end component </span>, there are several reasons 
                    for the implementation of this pattern some of them can be:
                </p>

                <ul>
                    <li>
                        <span className="text-white font-semibold"> share behavior among multiple components </span>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> allows to add extra functionality to existing component </span>
                    </li>
                    <li>
                        <span className="text-white font-semibold"> design and behavior </span>
                    </li>
            </ul>

            <p>
                an use case of HOC's applied when <span className="text-white font-semibold"> allows to add extra functionality to 
                existing component ( likely a maintainance or upgrade od existing components ) </span> can be when i come across a legacy 
                component made by someone else, by applying the HOC pattern and wrapping this legacy component not only i can rehuse the 
                legacy component, i can extend his capabilities and functionalities, let's say i want to rehuse the legacy 
                component <span className="text-white font-semibold"> UserInfo </span> and i want to add some props and log them in 
                the console without messing directly with the  <span className="text-white font-semibold"> UserInfo </span>
                component, then to acomplish this goal i can create a HOC as follows:
            </p>

            <BashCode code={userinfocode}/>

            <p>
                and wrapped <span className="text-white font-semibold"> UserInfo </span> as follows:
            </p>

            <BashCode code={userinfofactory}/>


            <p>
                resulting in:
            </p>
             
             {/**if i want to render the component i have to wrapped in a container and then render the extra props
              * 
              *   --> container example '<ContainerLoader userId={'1'}>'
              * 
              */}
             <ControlledWrapper name='user info'>
                    <UserInfoExtended hobbies={'listen music'} phonenumber={5618068181} message={'aditional props for UserInfo'}/>
            </ControlledWrapper>   

            <p>
                 when it comes to <span className="text-white font-semibold"> share behavior among multiple components </span>
                 an use case of HOC's is when it is fetching data from a server, in this case i'll make an HOC that fetch and 
                 renders the data from an user given, as follows:         
            </p>

            <UserInfoWithLoader />

            <p>
                and with the updating feature will be as follows:
            </p>

            <UserInfoForm />

            <p>
                let's say i want to use this pattern in order to make it even more custom and generic, in a way that can works with 
                users or books or any other data set i have with few modifications:
            </p>

            <UserInfoFormAnyResource />
                            
            </SectionWrapper>
        </div>
    )
}

export default HOCPattern;