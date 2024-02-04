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
import ContainerLoader from "./container.loader.component";
import BookInfoAnyResource from "./books.info.anyresource.component";


/**react-design-patterns-app - version 7.01 - HOCPattern 
 * - Features: 
 * 
 *     --> Adding 'includeupdatableanyresource' code. 
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
    
    /**here create the  'UserInfoWithLoader' that will create 
     * components that share the fetch data behavior*/
    const UserInfoWithLoader = includeUser(UserInfo, "3");
    
    const userinfocode = CodeData[44].code;
    const userinfofactory = CodeData[45].code;
    const hoclogpropscode = CodeData[46].code;
    const includeUsercode = CodeData[47].code;
    const includeUserwrapcode = CodeData[48].code;
    const userinfoformcode = CodeData[49].code;    
    const includeupdatablehoc = CodeData[50].code;
    const includeupdatableanyresource = CodeData[51].code;

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
                i have to create the HOC ( let's call it hocLogProps) that is going to fabric this new extended component:
            </p>

            <BashCode code={hoclogpropscode}/>

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
                 an use case of <span className="text-white font-semibold"> HOC's </span> is when it 
                 is <span className="text-white font-semibold"> fetching data from a server </span>, in this case i'll make an HOC that fetch and 
                 renders the data from an <span className="text-white font-semibold"> user </span> given.         
            </p>

            <p>
                let's make first the <span className="text-white font-semibold"> HOC </span> that is going to fabric that component that will
                <span className="text-white font-semibold"> share behavior among multiple components </span> ( for this case i am going to use 
                a user component )
            </p>

            <BashCode code={includeUsercode}/>

            <p>
                And wrapped the same previous component <span className="text-white font-semibold"> UserInfo </span> as follows:
            </p>

            <BashCode code={includeUserwrapcode}/>       

            <p>
                resulting in:
            </p>

            <UserInfoWithLoader />

            <p>
                and when it comes to components that <span className="text-white font-semibold"> share design and behavior </span>, for 
                example an <span className="text-white font-semibold"> updating feature ( behavior )</span> under components of the same 
                <span className="text-white font-semibold"> design ( common arquitecthing and composition )</span> will be as follows:
            </p>

            <p>
                first i create the <span className="text-white font-semibold"> includeUpdatableUser HOC </span> that is going to add the 
                update behavior:
            </p>

            <BashCode code={includeupdatablehoc}/>

            <p>
                and then i wrap the <span className="text-white font-semibold"> UserInfoForm </span> with the functionality and arguments for  
                <span className="text-white font-semibold"> includeUpdatableUser </span> 
            </p>

            <BashCode code={userinfoformcode}/>

            <p>
                resulting in:
            </p>

            {/**with the 'UserInfoForm' i am fetching and 
            * updating the data*/}        
            <UserInfoForm />

            <p>
                Resulting in:
            </p>

            {/**with the 'container' i am providing 'UserInfo' with data */}       
            <ContainerLoader userId={'2'}>
                    <UserInfo />
            </ContainerLoader>

            <p>
                let's say i want to make a <span className="text-white font-semibold"> variation  of this pattern </span> in 
                order to make it even more generic, in a way that can works with 
                <span className="text-white font-semibold"> users or books or any other data set or component </span> with 
                few modifications at the previous pattern
            </p>

            <p>
                these modifications will be in the previous <span className="text-white font-semibold"> includeUpdatableUser HOC </span> to create this
                new version <span className="text-white font-semibold"> includeUpdatableResource HOC </span>:
            </p>

            <BashCode code={includeupdatableanyresource}/>

            <UserInfoFormAnyResource />

            <BookInfoAnyResource bookUrl={'/books/1'}/>
                            
            </SectionWrapper>
        </div>
    )
}

export default HOCPattern;