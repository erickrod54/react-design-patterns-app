import React from "react";
import { BashCode, ContainerDataSource, ContainerGeneric, ContainerLoader, ContainerRender, CurrentUser, CustomTitle, MessageLocalStorage } from "./index.components";
import { CustomTitleStyle, SectionWrapper } from "../styledcomponents/styled.components";
import UserInfo from "./user.info.component";
import BookInfo from "./books.info.component";
import { usePatternsAppContext } from "../context";

/**react-design-patterns-app - version 4.03 - ContainerPattern
 * - Features: 
 * 
 *     --> Implementing a variation of ContainerData Source.
 * 
 *     --> Importing and Placing 'MessageLocalStorage' component 
 * 
 * Note: 'ContainerRender' is a variation of 
 * 'ContainerDaraSource' a more flexible version taking in count 
 * that 'ContainerRender' will be unaware of the data source
 */

const ContainerPattern = () => {

    const { getDataFromServer, CodeData, getDataFromLocalStorage } = usePatternsAppContext();

    //console.log({ CodeData })

    const currentuser = CodeData[10].code;
    const userinfoend = CodeData[11].code;
    const containercurrentuser = CodeData[12].code;
    const loaderuser = CodeData[13].code;
    const loaderwrap = CodeData[14].code;
    const loadergeneric = CodeData[15].code;
    const containergenwrap = CodeData[16].code;
    const consumingbooks = CodeData[17].code;
    const consuminganydata = CodeData[18].code;
    const consuminganydatawrap = CodeData[19].code;
    const renderpattern = CodeData[20].code;
    const renderpatternwrap = CodeData[21].code;

    return(
        <div>
            <CustomTitleStyle>
                <CustomTitle  title={<p className="container-pattern"><span >Container Pattern</span></p>} />
            </CustomTitleStyle>

            <SectionWrapper>
            <p> 
                Container components patterns are React components responsible 
                for <span className="text-white font-semibold"> managing data </span> 
                loading and handling on <span className="text-white font-semibold"> behalf of their child components. </span> 
                Instead of each child component managing its data retrieval independently, <span className="text-white font-semibold"> container 
                components extract and centralize this logic </span>, allowing multiple child components to 
                <span className="text-white font-semibold"> share the same data-loading process. </span> 
            </p>

            <p>
                The <span className="text-white font-semibold"> primary goal is to shield child components from the specifics of data management </span> 
                by extracting data-loading logic into dedicated containers, ensuring components remain <span className="text-white font-semibold"> unaware 
                of data sources and management processes.</span> This approach promotes <span className="text-white font-semibold"> reusability, separation of concerns, 
                and simplifies component logic </span> by handling data retrieval and passing it down to 
                <span className="text-white font-semibold"> child components via props. </span>
            </p>

            <p>
                the following list is is <span className="text-white font-semibold"> compose </span> by a container <span className="text-white font-semibold"> {'<CurrentUser>'} </span>
                that will perform the following data sourcing and handling:
                
            </p>

            <BashCode code={currentuser}/>

            <ul>
                <li>
                    <span className="text-white font-semibold"> will create the state of the user </span>
                </li>
                <li>
                    <span className="text-white font-semibold"> receive the user data from the server </span>
                </li>
                <li>
                <span className="text-white font-semibold"> mutate that data and provide it to the children </span>
                </li>
            </ul>

            <p>
                 that data to the children in this case <span className="text-white font-semibold">{'<UserInfo />'} </span>, 
                  ( end component ) resulting as follows:
            </p>

            <BashCode code={userinfoend}/>

            <p>
                 the <span className="text-white font-semibold"> container </span>,
                 and <span className="text-white font-semibold"> end component </span> will 
                 be as follows:
            </p>

            <BashCode code={containercurrentuser}/>

            <p>
                 and rendering <span className="text-white font-semibold"> current user data </span>,
                 will render in the end component as the list below:
            </p>

            <CurrentUser>
                <UserInfo />
            </CurrentUser>

            <p>
                this container above for a <span className="text-white font-semibold"> current user data </span> can 
                be more custom, let's say i have 3 user records and i want to target the third one, 
                the varation will be applied in the <span className="text-white font-semibold"> {`<CurrentUser>`} 
                 </span> container, lets called it <span className="text-white font-semibold"> {`<ContainerLoader>`} 
                 </span>, and will be as follows:
            </p>

            <BashCode code={loaderuser}/>
            

            <p>
                 and rendering <span className="text-white font-semibold"> container loader </span>,
                 will render in the end component as the list below:
            </p>

            <p>
                 the <span className="text-white font-semibold"> container </span>,
                 and <span className="text-white font-semibold"> end component </span> will 
                 be as follows:
            </p>

            <BashCode code={loaderwrap}/>

            <p>
                 and rendering <span className="text-white font-semibold"> container loader user </span>,
                 will render in the end component as the list below:
            </p>

            <ContainerLoader userId={'3'}>
                <UserInfo/>
            </ContainerLoader>

            <p>
                the <span className="text-white font-semibold">key </span> to master container patterns is to 
                <span className="text-white font-semibold"> codify a piece of code </span> that <span className="text-white font-semibold">can scalate with few modifications </span>, the previous test, with small 
                modification can become highly scalable, basing on <span className="text-white font-semibold"> {`< ContainerLoader>`} 
                 </span>, let's build <span className="text-white font-semibold"> {`</ContainerGeneric>`} 
                 </span>  as follows for the first user:
            </p>

            <BashCode code={loadergeneric}/>

            <p>
                 the <span className="text-white font-semibold"> container </span>,
                 and <span className="text-white font-semibold"> end component </span> will 
                 be as follows:
            </p>

            <BashCode code={containergenwrap}/>

            <p>
                 and rendering <span className="text-white font-semibold"> generic container user </span>,
                 will render in the end component as the list below:
            </p>

            <ContainerGeneric resourceUrl={'/users/1'} resourceName={'user'}>
                <UserInfo />
            </ContainerGeneric>

            <p>
                and for the second user will change the <span className="text-white font-semibold">{` resourceUrl={'/users/2'} `}</span> 
                ( of course this path can be totally dynanicly obtained ) and will render as this:
            </p>
            
            <ContainerGeneric resourceUrl={'/users/2'} resourceName={'user'}>
                <UserInfo />
            </ContainerGeneric>

            <p>
                now let's say i want this component to <span className="text-white font-semibold"> consume an end component </span> that 
                will render only <span className="text-white font-semibold"> data from books </span> 
                and <span className="text-white font-semibold">rehusing </span> this component for example for books
            </p>

            <p>
                 the <span className="text-white font-semibold"> container </span>,
                 and <span className="text-white font-semibold"> end component </span> will 
                 be as follows:
            </p>

            <BashCode code={consumingbooks}/>

            <ContainerGeneric resourceUrl={'/books/1'} resourceName={'book'}>
                <BookInfo/>
            </ContainerGeneric>

            <p>
                can be notice that the pattern for 
                the <span className="text-white font-semibold"> resourceName </span> follows a 
                singular notation ( this is because is getting rendered the 
                single element of the dataset in the <span className="text-white font-semibold"> end component </span>, that's 
                why it is not use the plural, and technical reasons are in 
                consideration by the prop in the end component), <span className="text-white font-semibold"> the correct
                use of names on endpoints and props is also very important </span>
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="container-data-source"><span >Container Data Source</span></p>} />
            </CustomTitleStyle>

            <p>
                and even more custom container can be , that by handling the <span className="text-white font-semibold"> data 
                source </span> through <span className="text-white font-semibold"> the container </span> makes 
                the <span className="text-white font-semibold"> end component </span> more independent and efficient 
                by doing <span className="text-white font-semibold"> less tasks </span>, and giving 
                the opportunity of relocating resources.  
            </p>

            <p>
                 basing on <span className="text-white font-semibold"> {`< ContainerGeneric>`} 
                 </span>, let's build <span className="text-white font-semibold"> {`</ContainerDataSource>`} 
                 </span>  as follows:           
            </p>

            <BashCode code={consuminganydata}/>      

            <p>
                 the <span className="text-white font-semibold"> container </span>,
                 and <span className="text-white font-semibold"> end component </span> will 
                 be as follows:
            </p>  

            <BashCode code={consuminganydatawrap}/> 

            <p>
                the <span className="text-white font-semibold"> 'getData' </span> get filled with 
                the <span className="text-white font-semibold"> 'getDataFromServer' </span> logic 
                and this handler can be placed <span className="text-white font-semibold"> anywhere </span> 
                ( in the server, in the cloud or locally and be consumed by this component and others )
            </p>


            <p>
                rendering as follows:
            </p>           

            <ContainerDataSource getData={ () => getDataFromServer('/books/3')}
            resourceName={'book'}
            >
                <BookInfo />
            </ContainerDataSource>

            <p>
                this example above is very much use in situations where bussines logic ( like 
                handlers or other data related functionalities need to be separated of the 
                layout ), in order to secure the sources
            </p>

            <p>
                let's see a variation where i can customize the data source ( fior this case i am going to use 
                Local Data Storage as a data source - Application then LocalStorage and then set key and value-):
            </p>

            <ContainerDataSource getData={ () =>  getDataFromLocalStorage('test')} resourceName={'msg'} 
            >
                <MessageLocalStorage />
            </ContainerDataSource>

            <p>
                so here can be shown how flexible can be the data source and how <span className="text-white font-semibold"> rehusable </span> is this component
            </p>

            <CustomTitleStyle>
                <CustomTitle  title={<p className="container-render-pattern"><span >Container Render Pattern</span></p>} />
            </CustomTitleStyle>

            <p>
                there will be situations where <span className="text-white font-semibold"> clone element </span>
                has to be avoided for example in order to customize the end component, so in order
                to providing flexibility and balance in maintainability, readability, and clarity
                in the codebase, an alternative is the <span className="text-white font-semibold"> Container Render Pattern </span>         
            </p>

            <p>
                so knowing the goal of this pattern, the code will be modified in the container as follows:
            </p>

            <BashCode code={renderpattern}/>     

            <p>
                and the container wrap code is as follows:    
            </p>   

            <BashCode code={renderpatternwrap}/>
            
            <p>
                and the render resulting of this container will be for a book test data:
            </p>

            <ContainerRender 
                getData={ () => getDataFromServer('/books/2')} 
                render={(resource) => <BookInfo book={resource}/>} />

            </SectionWrapper>
        </div>
    )
}

export default ContainerPattern;