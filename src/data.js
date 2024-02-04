import { layoutexamples, sidebarexample } from "./assets/index.assets"

/**react-design-patterns-app - version 6.20 - data js  
 * - Features: 
 *    
 *     --> Adding 'includeUpdatableUser' 
 *        component code
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

export const myNestedObject = {
  key:"value1",
  key2:{
    innerInnerKey1:"innerInnerValue1",
    innerInnerKey2:"innerInnerValue2",
  },
  key3:"value3"
}

export const patternCard = [
    {
      id:1,
      category:'Component Patterns',
      pattern:'Layout Components',
      description:''
    },
    {
      id:2,
      category:'Component Patterns',
      pattern:'Container Components',
      description:''
    },
    {
      id:3,
      category:'Component Patterns',
      pattern:'Controlled and Uncontrolled Components',
      description:''
    },
    {
      id:4,
      category:'Component Patterns',
      pattern:'Higher-Order Components',
      description:''
    },
    {
      id:5,
      category:'Component Patterns',
      pattern:'Custom Hooks Patterns',
      description:''
    },
    {
      id:6,
      category:'Component Patterns',
      pattern:'Functional Programming and React',
      description:''
    },
    {
      id:7,
      category:'Advanced Concepts and Hooks',
      pattern:'React Portals',
      description:''
    },
    {
      id:8,
      category:'Advanced Concepts and Hooks',
      pattern:'Forwarding Refs',
      description:''
    },
    {
      id:9,
      category:'Advanced Concepts and Hooks',
      pattern:'Error Boundaries',
      description:''
    },
    {
      id:10,
      category:'Advanced Concepts and Hooks',
      pattern:'Advanced Hooks',
      description:''
    },
    {
      id:11,
      category:'Design System',
      pattern:'Design System Core Concepts',
      description:''
    },
    {
      id:12,
      category:'Component Patterns',
      pattern:'Building Components Using Figma',
      description:''
    },
    {
      id:13,
      category:'Design System',
      pattern:'React Composition',
      description:''
    },
    {
      id:14,
      category:'Design System',
      pattern:'Developing Components',
      description:''
    },
    {
      id:15,
      category:'Design System',
      pattern:'Encapsulating Styles',
      description:''
    },
    {
      id:16,
      category:'Design System',
      pattern:'Patterns for Spacing',
      description:''
    },
    {
      id:17,
      category:'Design System',
      pattern:'Patterns for more Complex Styles',
      description:''
    },
    {
      id:18,
      category:'Performance',
      pattern:'Optimization',
      description:''
    },
    {
      id:19,
      category:'Performance',
      pattern:'Fixing Rendering issues',
      description:''
    },
    {
      id:20,
      category:'Performance',
      pattern:'Expensive operations',
      description:''
    },
    {
      id:21,
      category:'Practices',
      pattern:'Clean Code Tips',
      description:''
    },
    {
      id:22,
      category:'Advanced TypeScript',
      pattern:'Introduction',
      description:''
    },
    {
      id:23,
      category:'Advanced TypeScript',
      pattern:'Basics',
      description:''
    },
    {
      id:24,
      category:'Advanced TypeScript',
      pattern:'Typing Hooks',
      description:''
    },
    {
      id:25,
      category:'Advanced TypeScript',
      pattern:'Typing reducers',
      description:''
    },
    {
      id:26,
      category:'Advanced TypeScript',
      pattern:'Typing Context',
      description:''
    },
    {
      id:27,
      category:'Advanced TypeScript',
      pattern:'Using Generics',
      description:''
    },
    {
      id:28,
      category:'Advanced TypeScript',
      pattern:'More on TypeScript',
      description:''
    },
    {
      id:29,
      category:'Advanced TypeScript',
      pattern:'Component Patterns',
      description:''
    },
    {
      id:30,
      category:'React Router',
      pattern:'Introduction',
      description:''
    },
    {
      id:31,
      category:'React Router',
      pattern:'Basic Concepts',
      description:''
    },
    {
      id:32,
      category:'React Router',
      pattern:'Navigations and links',
      description:''
    },
    {
      id:33,
      category:'React Router',
      pattern:'Advanced Routing',
      description:''
    },
]


export const IntroComponentData = [
  {
    title: 'Introduction to React Pattterns',
    description:'Design patterns are effective solutions for common challenges and some of this are specific patterns that come from actual industry experience',
    items:[
      {
        id:1,
        challenge:'Design patterns that are specific to React',
      },
      {
        id:2,
        challenge: 'Best practices to magaging form state',
      },
      {
        id:3,
        challenge:'Functional Programming in the context of react'
      }
    ]
  }
]

export const ImagesData = [
  {
    id:1,
    category: 'layout',
    list:[
      {
        id:1,
        image: layoutexamples
      },
      {
        id:1,
        image: sidebarexample
      }
    ]
  }
]

/**this is the code data in order to explain it */
export const CodeData = [
  {
    id: 1,
    name:'layout splitter',
    code: `
<Container>
  <Panel flex={leftWidth} className="bg-red-400">
    <Left />
  </Panel>
  <Panel flex={rightWidth} className="bg-red-500">
    <Right />
  </Panel>
</Container>
    `
  },
  {
    id: 2,
    name:'layout splitter variation',
    code: `
    const SplitScreenVariation = ({ children, leftWidth = 1, rightWidth = 1 }) => {

      const [ left, right ] = children;
      
      return(
      <Container>
              <Panel flex={leftWidth} className="bg-red-400">
                 {left}
              </Panel>
              <Panel flex={rightWidth} className="bg-red-500">
                  {right}
              </Panel>
      </Container>
      )
  }
  
  export default SplitScreenVariation;
    `
  },
  {
    id: 3,
    name:'layout splitter variation composition 1',
    code: `
    <SplitScreenVariation leftWidth={1} rightWidth={3}>
      <LeftSideComponent />
      <RightSideComponent/>
    </SplitScreenVariation>
    `
  },
  {
    id: 4,
    name:'layout splitter variation composition 2',
    code: `
    <SplitScreenVariation leftWidth={1} rightWidth={3}>
      <LeftSideComponentVariation  title={'the left custom content'}/>
      <RightSideComponentVariation title={'the right custom content'} />
    </SplitScreenVariation>
    `
  },
  {
    id: 5,
    name:'layout list - small size',
    code: `
    const AuthorSmallListItems = ({ author }) => {
      
      /**the 'author' is the source name, and it will be a sorce prop
       * for the 'list layout component'*/
    
      const { name, age } = author;
    
      return(
          <>
              <p><span></span> <span className="author-name"><span>{name}</span></span></p>
              <p><span>Age:</span> { age }</p>
          </>
      )
    }
    
    export default AuthorSmallListItems;
    `
  },
  {
    id: 6,
    name:'layout list - large size',
    code: `
    const AuthorLargeListItems = ({ author }) => {
      
      /**the 'author' is the source name, and it will be a sorce prop
       * for the 'list layout component'*/

      const { name, age, country, books } = author;
  
      return(
          <>
              <h2><span className="author-name"><span>{name}</span></span></h2>
              <p><span>Age:</span> {age}</p>
              <p><span>Country:</span> {country}</p>
              <h2><span>Books:</span></h2>
              <ul>
              {books.map((book) => {
  
                  return(
                      <li key={book}>{book}</li>
                  )
              })}
              </ul>
          </>
      )
  }
  
  export default AuthorLargeListItems;
    `
  },
  {
    id: 7,
    name:'layout list - main component',
    code: `
    const RegularList = ({ items, sourceName, ItemComponent }) => {

      /**
       *     items---------------> these are the items that 
       *                          are going to be display in 
       *                          the list ( the data )
       * 
       *      sourceName----------> is the prop name where the
       *                            data is destructured in the 
       *                            source component ( the name 
       *                             of the data to be destructured)
       * 
       *      ItemComponent-------> it is the source component or 
       *                            the source component
           */
          return(
              <ListWrapper>
                                /**the spread operator will bring all the source props as they are*/
                  {items.map((item, index) => <ItemComponent key={index} { ...{[sourceName]: item}}/> )}
              </ListWrapper>
          )
      
      }
      
      export default RegularList;
    `
  },
  {
    id: 8,
    name:'layout modal - modal code',
    code: `
    /** the children prop is passed here*/
    const Modal = ({ children }) => {
        const [show, setShow] = useState(false);
    
        /**this 3 handlers are the functionality of the modal*/
        const openModal = () => setShow(true);
        const closeModal = () => setShow(false);

        /**prevent events from any parent element keeping functionality*/
        const stopPropagation = (e) => e.stopPropagation();
    
        return (
            <>
                <button onClick={openModal}>
                    Show modal 
                    <OpenModalWrapper>
                        <img src={openmodal} alt="openmodal"/>
                    </OpenModalWrapper>
                </button>
                {show && (
                    <ModalBackground onClick={closeModal}>
                        <ModalContent onClick={stopPropagation}>
                            <button onClick={closeModal}>
                            <img src={close} alt="close"/>
                            </button>
                            /**and children will be the content of the modal*/
                            {children}
                        </ModalContent>
                    </ModalBackground>
                )}
            </>
        );
    };
    
    export default Modal;
    `
  },
  {
    id: 9,
    name: 'layout modal - ModalBackground code',
    code: `
    export const ModalBackground = styled.div\`
    \${tw('fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center')}
    \`;
    `
  },
  {
    id: 10,
    name: 'layout modal - ModalContent code',
    code: `
    /**this will be the children of the modal component, for this case a samll list*/
    export const ModalContent = styled.div\`
    \${tw'p-6 bg-white w-1/2 text-black '}
    \`;
    `
  },
  {
    id: 11,
    name: 'Container Patterns - CurrentUser',
    code: `
    const CurrentUser = ({ children }) => {
    
      const [ user, setUser ] = useState(null)
  
      /**is handling on mount the data mutation */
      useEffect(() => {
          (async () => {
              const response = await axios.get("/current-user");
              setUser(response.data)
          })();
      }, [])
  
      return(
          <>
          {/**React.Children.map() to iterate over each child passed to the component.
           * once verified is valid react elemnent provide the 'user' data source
           */}
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { user });
            }
            return child;
          })}
        </>
      )
  }
  
  export default CurrentUser;
    `
  },
  {
    id: 12,
    name: 'Container Patterns - UserInfo',
    code: `
    const UserInfo = ({ user }) => {

      /**can be destructure as this on user or by implementing spread 
       * operator in case is need it to use more props */  
      const { name, age, country, books } = user || {};
    
      /**here i verify the user in order to set the data */
      return user ? (
        <ListWrapper>
          <h2 className="author-name"><span>{name}</span></h2>
          <p><span>Age: </span> {age} years</p>
          <p><span>Country: </span> {country}</p>
          <h2><span>Books: </span></h2>
          <ul>
            {books.map((book) => (
              <li key={book}> {book} </li>
            ))}
          </ul>
        </ListWrapper>
      ) : (
        <h1>Loading...</h1>
      );
    }
    
    export default UserInfo;
    `
  },
  {
    id: 13,
    name: 'Container Pattern - single current user',
    code: `
      /**the container component */  
      <CurrentUser>
      /**the end component */
          <UserInfo />
      </CurrentUser>
    `
  },
  {
    id: 14,
    name: 'Container Pattern - ContainerLoader',
    code: `  
      /*by passing the id i target the user data**/
      const ContainerLoader = ({ userId, children }) => {
    
        const [ user, setUser ] = useState(null)
    
        useEffect(() => {
            (async () => {
                const response = await axios.get(\`users/\${userId}\`);
                setUser(response.data)
            })();
        }, [userId])
    
        return(
            <>
            {/**this logic stays the same as CurrentUser*/}
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { user });
              }
              return child;
            })}
          </>
        )
    }
    
    export default ContainerLoader;
    `
  },
  {
    id: 15,
    name: 'Container Pattern - ContainerLoader Wrap',
    code: `  
      /*the container will receive the target**/
      <ContainerLoader userId={'3'}>
         <UserInfo/>
      </ContainerLoader>
    `
  },
  {
    id: 17,
    name: 'Container Pattern - ContainerGeneric',
    code: `  
      /*the container will target the complete url, resourname and keeping 
      * the children logic**/

      const ContainerGeneric = ({ resourceUrl, resourceName, children }) => {
    
        const [ resource, setResource ] = useState(null)
    
        /*here the data is mutated to the url**/
        useEffect(() => {
            (async () => {
                const response = await axios.get(resourceUrl);
                setResource(response.data)
            })();
            /*and will be mount depending on the url (so can be custom and dynamic )**/
        }, [resourceUrl])
    
        return(
            <>
            {/**React.Children.map() to iterate over each child passed to the component.
             * once verified is valid react elemnent provide the 'user' data source
             */}
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, { [resourceName]: resource });
              }
              return child;
            })}
          </>
        )
    }
    
    export default ContainerGeneric;
    `
  },
  {
    id: 18,
    name: 'Container Pattern - ContainerGeneric Wrap',
    code: `  
    /**the component handle a full path and a data set name */ 
      <ContainerGeneric resourceUrl={'/users/1'} resourceName={'user'}>
            /*the end component**/
           <UserInfo />
      </ContainerGeneric>
    `
  },
  {
    id: 19,
    name: 'Container Pattern - Consuming components',
    code: `  
    /**the same component now is consuming books*/ 
    <ContainerGeneric resourceUrl={'/books/1'} resourceName={'book'}>
        /**the end component*/
        <BookInfo/>
    </ContainerGeneric>
    `
  },
  {
    id: 20,
    name: 'Container Pattern - ContainerDataSource',
    code: `  
    /**the 'getData = () => {}' is empty by default to be filled through the container*/ 
    const ContainerDataSource = ({ getData = () => {}, resourceName, children }) => {
    
      const [ resource, setResource ] = useState(null)
  
      /**the data mutation will be done after the invocation*/  
      useEffect(() => {
          (async () => {
              const data = await getData()
              setResource(data)
          })();
      /**the dependency will be the data call*/
      }, [getData])
  
      return(
          <>
          {/**and this pattern will persist */}
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { [resourceName]: resource });
            }
            return child;
          })}
        </>
      )
  }
  
  export default ContainerDataSource;
    `
  },
  {
    id: 20,
    name: 'Container Pattern - ContainerDataSource wrap',
    code: `  
    /**the 'getData' get filled with the 'getDataFromServer' logic*/ 
    <ContainerDataSource getData={ () => getDataFromServer('/books/3')}
            resourceName={'book'}
            >
                <BookInfo />
    </ContainerDataSource>
    `
  },
  {
    id: 21,
    name: 'Container Pattern - ContainerRender',
    code: `  
    /**the 'getData' get filled with the 'getDataFromServer' logic and
     * the render method will pass the component to be rendered */ 
    const ContainerRender = ({ getData = () => {}, render }) => {
    
      const [ resource, setResource ] = useState(null)
      
      /**here i mutate the data*/
      useEffect(() => {
          (async () => {
              const data = await getData()
              setResource(data)
          })();
      }, [getData])
  
      /**instead of cloning i just return the render resource*/
      return render(resource);
  }
  
  export default ContainerRender;
    `
  },
  {
    id: 22,
    name: 'Container Pattern - ContainerRender wrap',
    code: `  
    /**the data and the component are more independent of the 
     * container, so has more mantainability */ 
      <ContainerRender 
                getData={ () => getDataFromServer('/books/2')} 
                render={(resource) => <BookInfo book={resource}/>} />

      </SectionWrapper>
    `
  },
  {
    id: 23,
    name: 'Container Pattern - UncontrolledPattern',
    code: `  
    /**As can be seen no hook is used ( for example useState ),
     * as this is not controlled by the component is an 
     * uncontrolled component */ 
      const UncontrolledPattern = () => {

        /**the ref is created in order to access the data*/
        const nameInputRef = React.createRef();
        const ageInputRef = React.createRef();
    
        const submitHandler = (e) => {
            e.preventDefault();
            console.log('the name ==>', nameInputRef.current.value)
            console.log('the age ==>',ageInputRef.current.value)
        }   
    
        return(
            <FormWrapper>
                <form onSubmit={submitHandler}>
                    <input name="name" type="text" placeholder="Name" ref={nameInputRef}/>
                    <input age="age" type="number" placeholder="Age" ref={ageInputRef}/>
                    <ButtonGeneral>
                        <input type="submit" placeholder="Submit"/>
                    </ButtonGeneral>
                </form>
            </FormWrapper>
        )
    }
    
    export default UncontrolledPattern;
    `
  },
  {
    id: 24,
    name: 'Container Pattern - ControlledModal',
    code: `  
    /**now the state can be controlled by the outside of the component */ 
      const ControlledModal = ({ displayModal, closeModal, stopPropagation, children }) => {

        return (
            <>
                {displayModal && (
                    <ModalBackground onClick={closeModal}>
                        <ModalContent onClick={stopPropagation}>
                            <button onClick={closeModal}>
                            <img src={close} alt="close"/>
                            </button>
                            {children}
                        </ModalContent>
                    </ModalBackground>
                )}
            </>
        );
    };
    
    export default ControlledModal;
    `
  },
  {
    id: 25,
    name: 'UnControlled Flow - UncontrolledFlowPattern',
    code: `  
    /**can be notice by reading the code that this uncontrolled flow
     * does not collect data because in some cases is only necessary 
     * to use the flow */ 
    const UncontrolledFlowPattern = ({ children }) => {
   
      /**this state to track the index of the step */
      const [currentStepIndex, setCurrentStepIndex ] = useState(0);
  
      const goNext = () => {
          setCurrentStepIndex(currentStepIndex + 1)
      }
  
      /** in this line i create an array of children and use the index*/
      const currentChild = React.Children.toArray(children)[currentStepIndex];
  
      if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, { goNext })
      }
  
      return( 
          <StepFlowWrapper>
              <h2>Uncontrolled flow done !! Refresh :) </h2>
          </StepFlowWrapper>
      )
  }
  
  export default UncontrolledFlowPattern;
    `
  },
  {
    id: 26,
    name: 'UnControlled Flow - UncontrolledFlowPattern wrap',
    code: `  
    /**the uncontrolled flow wraps the steps ( that are separate 
     * components )*/ 
    <UncontrolledFlowPattern>
        <Step1Flow />
        <Step2Flow />
        <Step3Flow />
    </UncontrolledFlowPattern>
    `
  },
  {
    id: 27,
    name: 'RecursivePattern',
    code: `  
    /**the evaluation for a base condition */
    const isObject = data => typeof data === 'object' && data !== null;
    
    const RecursivePattern = ({ data }) => {
    
        
            /**this is the base case of the recursion */
            if (!isObject(data)) {
                return(
                    <li>
                        {data}
                    </li>
                )
            }
    
            /**this will be the recursive case, calling the component itself
             * until render all the key pair (unique values) of the object 
             * data in the component itself */
            const pairs = Object.entries(data);
    
            return(
                <>
                    {pairs.map(([key, value]) => {
                        return(
                        <li>
                            {key}
                            <RecursivePattern data={value}/>
                        </li>
                        )
                    })}
                </>
            )
    }
    
    export default RecursivePattern;
    `
  },
  {
    id: 28,
    name: 'RecursivePattern - myNestedObject',
    code: `
    /*this is the nested object**/  
    const myNestedObject = {
      key:"value1",
      key2:{
        innerInnerKey1:"innerInnerValue1",
        innerInnerKey2:"innerInnerValue2",
      },
      key3:"value3"
    }
    `
  },
  {
    id: 29,
    name: 'CardCompound - Decomposition',
    code: `
    /*i will have to decompose the original big component in smaller 
    sub components in order to apply after the pattern**/  
    const CardCompound = ({ header, footer, children }) => {

      return(
         <div style={{border: "1px solid white"}}>
           {header && (
              <Header>
                  {header}
              </Header>
           )}
           <div style={{padding: '.5rem'}}>{children}</div>
           {footer && (
              <Footer>
                  {footer}
              </Footer>
           )}
         </div>
      )
  }
    `
  },
  {
    id: 30,
    name: 'Card - Component',
    code: `
    /*if i remove any part of the code the whole component
    * will break**/  
    <Card
      header={<h1 style={{margin:'0'}}>Header</h1>}
      footer={
          /*these are style components**/
          <ButtonWrapper>
            <ButtonGeneral>
                  <button>Ok</button>
            </ButtonGeneral>
            <ButtonGeneral>
                  <button>cancel</button> 
            </ButtonGeneral>
          </ButtonWrapper>
      }
    /*this is the body of the Card**/
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris 
      pharetra et ultrices. Curabitur vitae nunc sed velit dignissim sodales. Habitant
      morbi tristique senectus et netus. Eget sit amet tellus cras adipiscing enim eu 
      turpis. A lacus vestibulum sed arcu non. Et pharetra pharetra massa massa ultricies 
      mi quis. Dignissim suspendisse in est ante in. Duis tristique sollicitudin nibh 
      sit amet commodo nulla facilisi. Sed sed risus pretium quam vulputate dignissim 
      suspendisse. Turpis nunc eget lorem dolor sed viverra ipsum nunc. 
    </Card>
    `
  },
  {
    id: 31,
    name: 'CardCompound - Pattern',
    code: `
    /*breaking down each subcomponent of the 
    * CardCompound ( previously the Card pattern )
    **/  
    const Header = ({children}) => {
        return(
            <div
                style={{
                    borderBottom:"1px solid white",
                    padding:".5rem",
                    marginBottom:".5rem"
                }}   
                >
                {children}   
                </div>
        )
    }
    
    const Footer = ({children}) => {
        return(
            <div
                style={{
                    borderTop:'1px solid white',
                    padding:'.5rem',
                    marginTop:'.5rem',
                    }}
                >
                {children}
            </div>
        )
    }
    
    const Body = ({children}) => {
        return <div style={{padding: '.5rem'}}>{children}</div>;
    }
    
    /**here i clear the decomposition so the code in the 
     * main component is clean */
    const CardCompound = ({ children }) => {
    
        return(
          <div style={{border: "1px solid white"}}>
            {children}
          </div>
        )
    }
    
    export default CardCompound;
    
    /**here i attach them to the CardCompound so can be accesible
    * from outside of the component ( even is a benefit for rehusability, 
    * readability and clean code practice )*/
    CardCompound.Header = Header;
    CardCompound.Footer = Footer;
    CardCompound.Body = Body;
    `
  },
  {
    id: 32,
    name: 'CardCompound - Pattern attach',
    code: `
    /**here i attach them to the CardCompound 
     * ( i highlighted cause at this point the 
     * pattern is applied ) */
    CardCompound.Header = Header;
    CardCompound.Footer = Footer;
    CardCompound.Body = Body;
    `
  },
  {
    id: 33,
    name: 'CardCompound - Component',
    code: `
    /**here is the main 'CardCompound' component */
      
      <CardCompound>

      /**here is the main 'CardCompound' with the attachment of the 'Header'*/
      <CardCompound.Header>
          <h1 style={{margin:'0'}}><span className="text-white font-semibold"> Compound Header </span></h1>
      </CardCompound.Header>
      /**here is the main 'CardCompound' with the attachment of the 'Body'*/
      <CardCompound.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris 
          pharetra et ultrices. Curabitur vitae nunc sed velit dignissim sodales. Habitant
          morbi tristique senectus et netus. Eget sit amet tellus cras adipiscing enim eu 
          turpis. A lacus vestibulum sed arcu non. Et pharetra pharetra massa massa ultricies 
          mi quis. Dignissim suspendisse in est ante in. Duis tristique sollicitudin nibh 
          sit amet commodo nulla facilisi. Sed sed risus pretium quam vulputate dignissim 
          suspendisse. Turpis nunc eget lorem dolor sed viverra ipsum nunc. <span className="text-white font-semibold"> 
          Compound Body </span>
      </CardCompound.Body>

      /**here is the main 'CardCompound' with the attachment of the 'Footer'*/
      <CardCompound.Footer>
      <ButtonWrapper>
            <ButtonGeneral>
                  <button>Ok</button>
            </ButtonGeneral>
            <ButtonGeneral>
                  <button>cancel</button> 
            </ButtonGeneral>
            <span className="text-white font-semibold"> Compound Footer </span>
          </ButtonWrapper>
      </CardCompound.Footer>
    </CardCompound>
    `
  },
  {
    id: 34,
    name: 'Button - Composition pattern',
    code: `
    /**here is the pattern with all the props*/
    export const Button = ({ size, color, text, ...props }) => {

      return(
          <button
              style={{
                  fontSize: size === "small" ? '24px' : '32px',
                  border: \`3px solid \${color}}\`,
                  color: color,
                  margin:'1rem',
                  padding:'1rem',
                  borderRadius: '0.5rem', 
              }}
          >
              {text}
          </button>
      )
  }
  
  /*here will each custom component consuming the pattern**/
  export const RedButton = props => {
      return(
          <Button {...props} color={'crimson'}/>
      )
  }
  
  export const GreenButton = props => {
      return(
          <Button {...props} color={'green'} size={'small'}/>
      )
  }
    `
  },
  {
    id: 35,
    name: 'Button - Partially Composition pattern',
    code: `
    /**i receive a 'Component' as a prop and the 'partialProps'*/
    export const partialComponent = (Component, partialProps) => {
      return props => {
          /**and i return the 'Component' with the 'partialProps' 
           * and the rest of the 'props'*/
          return <Component {...partialProps} {...props}/>
      }
    }
    
    /*here i have the same previous button pattern**/
    export const Button = ({ size, color, text, ...props }) => {
    
      return(
          <button
              style={{
                  fontSize: size === "small" ? '24px' : '32px',
                  border: \`3px solid \${color}}\`,
                  color: color,
                  margin:'1rem',
                  padding:'1rem',
                  borderRadius: '0.5rem', 
              }}
          >
              {text}
          </button>
      )
    }
    
    /**i am rehusing the components with part of the props an not all of them
    * 'color' and 'size' and creating custom three versions of the button
    * ( 'partialComponent' pattern helps to breakdown the props for those
    * cases where i need to use certain props )
    */
    
    /**the partial props are passed as key values ( an object ) */
    export const WarningButton = partialComponent(Button, {color:'yellow'});
    export const SmallWarning = partialComponent(WarningButton, {size:'small'})
    export const Secondary = partialComponent(Button, {color:'#FF00FF'})
    `
  },
  {
    id: 36,
    name: 'TheOutSideControlled - ControlledUncontrolled pattern',
    code: `
    /**the 'TheOutSideControlled' will control the 'ControlledModal', 
     * because is tied by the logic'*/
    const TheOutSideControlled = () => {

      const [ showModal, setShowModal ] = useState(false);
      const closeModal = () => setShowModal(false);
  
      return(
          <>
          /**'ControlledModal' is consuming from 'TheOutSideControlled'*/
          <ControlledModal showModal={showModal} closeModal={closeModal}>
              <h2>the modal content -The OutSide Controlled Component-</h2>
          </ControlledModal>
  
          /** 'ButtonGeneral' only set styles and is the 'showModal' button*/
          <ButtonGeneral>
              <button onClick={() => setShowModal(!showModal)}>{showModal ? 'Hide Modal' : 'Show modal'}</button>
          </ButtonGeneral>   
          </>
      )
  }
  
  export default TheOutSideControlled;
    `
  },
  {
    id: 36,
    name: 'UncontrolledFlowPatternCollector - Uncontrolled Flow pattern',
    code: `
    /**This flow will create a step by step user experience, and will
     * collect data in the way until the flow is 'onDone'*/
    const UncontrolledFlowPatternCollector = ({ children, onDone }) => {
   
      /*state hook to mutate the data*/  
      const [data, setData ] = useState({});
     
      /**this state to track the index of the step */
      const [currentStepIndex, setCurrentStepIndex ] = useState(0);
  
      /*this handler will go from the previous step to the next step**/
      const goNext = (dataFromStep) => {
  
          /*this line increments the index**/
          const nextStepIndex = currentStepIndex + 1;
  
          /*in this object i spread the 'data' that will 
          * be the previous data, and 'dataFromStep' that 
          *is the data from the current step*/
          const newData = {
              ...data,
              ...dataFromStep
          }
          
          /**here i log it, but the data can be send to any destination
           * as can be required by the use case*/
          console.log('the new data is being collected ==>', newData);
  
          /*in this flow i control the flow duration -will be the children length-*/
          if (nextStepIndex < children.length) {

              /**i mutate the index to update the value*/
              setCurrentStepIndex(nextStepIndex)
          }else{
              /**once the condition is done i trigger 'onDone()' 
               * to terminate the flow*/
              onDone()
          }
  
          setData(newData)
  
          /**i mutate the index to keep current index the value*/
          setCurrentStepIndex(currentStepIndex + 1)
      }
  
      /** in this line i create an array of children and use the index*/
      const currentChild = React.Children.toArray(children)[currentStepIndex];
  
      if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, { goNext })
      }
  
      return( 
          /**here i render the final step to finish the flow*/
          <StepFlowWrapper>
              <h2>Uncontrolled flow done !! Refresh :) </h2>
          </StepFlowWrapper>
      )
  }
  
  export default UncontrolledFlowPatternCollector;
    `
  },
  {
    id: 37,
    name: 'UncontrolledFlowPatternCollector - Component Render',
    code: `
    /**in every step i will collect the data from the 
     * children component, and once finish send the alert*/
    <UncontrolledFlowPatternCollector onDone={data => {
      console.log({data})
      alert('you made to the final step :)')
  }}>
      <Step1FlowCollector />
      <Step2FlowCollector />
      <Step3FlowCollector />
  </UncontrolledFlowPatternCollector>
    `
  },
  {
    id: 38,
    name: 'Step1FlowCollector - UncontrolledFlowPatternCollector',
    code: `
    /**'goNext' sending the data to the 'UncontrolledFlowPatternCollector'*/
      const Step1FlowCollector = ({ goNext }) => {

        return(
            /***this 'StepFlowWrapper' is a style component*/
            <StepFlowWrapper>
                <h2>the Step #1: Enter Your name:</h2>
                /***this 'ButtonGeneral' is a style component*/
                <ButtonGeneral>
                    <button onClick={() => goNext({ name: 'MyName' })}>Next</button>
                </ButtonGeneral>
            </StepFlowWrapper>
        )
    }
    
    export default Step1FlowCollector;
    `
  },
  {
    id: 39,
    name: 'ControlledFlowPatternCollector - Pattern',
    code: `
    /**it is controlled because the logic for the 'step' flow is outside of this
     * component*/
    const ControlledFlowPatternCollector = ({ children, currentIndex, onNext }) => {
   
      /**'goNext' will handle the data collection*/
      const goNext = (dataFromStep) => {
          onNext(dataFromStep)
      }
  
      /** in this line i create an array of children and use the index*/
      const currentChild = React.Children.toArray(children)[currentIndex];
  
      if (React.isValidElement(currentChild)) {
          return React.cloneElement(currentChild, { goNext })
      }
  
      return currentChild;
  }
  
  export default ControlledFlowPatternCollector;
    `
  },
  {
    id: 40,
    name: 'ControlledFlowPatternCollector - Component',
    code: `
    /**'currentIndex' and 'goNext' flowing outside of the component */
    <ControlledFlowPatternCollector
      currentIndex={currentStepIndex}
      onNext={goNext}
    >
      <Step1FlowCollector />
      <Step2FlowCollector />
      /**this a data tha comes from the steps components and is 
       * being collected and used to control the component flow*/
      {data.age > 25 ? <Step4Flow /> : <Step3FlowCollector />}
    </ControlledFlowPatternCollector>
    `
  },
  {
    id: 41,
    name: 'Step2FlowCollector - Component',
    code: `
    /**'currentIndex' and 'goNext' flowing outside of the component */   
    const Step2FlowCollector = ({ goNext }) => {

      return(
          <StepFlowWrapper>
              <h2>the Step #2: Enter your age: </h2>
              <ButtonGeneral>
                   /** the data is collected and accessed from outside 
                    * of the component 'data.age'*/
                  <button onClick={() => goNext({ age: 39 })}>Next</button>
              </ButtonGeneral>
          </StepFlowWrapper>
      )
    }

    export default Step2FlowCollector;
    `
  },
  {
    id: 42,
    name: 'LeftSideComponent - Component',
    code: `
    /**this is the end component after the styles are extracted and scoped 
     * in 'Panel' */   
      const LeftSideComponent = () => {
        return(
            <h2>I am Left</h2>
          )
      }
      
      export default LeftSideComponent;
    `
  },
  {
    id: 43,
    name: 'Panel - Component',
    code:   
    `
    /**this is a style component ( styled is a method 
     * that can mimic multiple jsx tags, in this case a div)*/
    export const Panel = styled.div\`
    /**this syntax is a helper function that gets the value of the prop dynamicly from the component*/
    flex: \${(p) => p.flex};

    /**the ampersand applies css directly in the component 'Panel'*/
    &\{
        \${tw\`m-8 p-8\`}
      \}
    \`
  `
  },
  {
    id: 44,
    name: 'Panel - Component',
    code:   
    `
    /**this is the UserInfo component i want to extend data or 
     * functionality*/
      const UserInfo = ({ user }) => {

        /**these are existing props, but let'say i wan to add a 
         * 'phone number' and a 'message' ( later i will use a HOC 
         * to do it)*/  
        const { name, age, country, books } = user || {};
      
        /**here i verify the user in order to set the data */
        return user ? (
          <ListWrapper>
            <h2 className="author-name"><span>{name}</span></h2>
            <p><span>Age: </span> {age} years</p>
            <p><span>Country: </span> {country}</p>
            <h2><span>Books: </span></h2>
            <ul>
              {books.map((book) => (
                <li key={book}> {book} </li>
              ))}
            </ul>
          </ListWrapper>
        ) : (
          <h1>Loading...</h1>
        );
      }
      
      export default UserInfo;
  `
  },
  {
    id: 45,
    name: 'UserInfoExtended - HOCPattern',
    code:   
    `
    /**here create the  'UserInfoExtended' being UserInfo 
     * the 'end component' to extend*/
   const UserInfoExtended = hocLogProps(UserInfo);
  `
  },
  {
    id: 46,
    name: 'hocLogProps - HOCPattern',
    code:   
    `
    /**first i build 'hocLogProps' that is going to 
     * receive a component to fabric it*/
      const hocLogProps = (Component) => {
        return (props) => {
            /**here i log the props to validate they being add it*/          
            console.log({props})
            /**then i will add this props to the existing component*/
            return <Component {...props}/>
        }
    }
    
    export default hocLogProps;
  `
  },
  {
    id: 47,
    name: 'hocLogProps - HOCPattern',
    code:   
    `
    /**first i build 'hocLogProps' that is going to 
     * receive a component to fabric it*/
    const includeUser = (Component, UserId ) => {

      return props => {
          const [user, setUser ] = useState(null);
  
          useEffect(() => {
              (async () => {
                  const response = await axios.get(\`/users/\${UserId}\)
                  setUser(response.data)
              })()
          }, [])
          
          return <Component {...props} user={user}/>
      };
  
  };
  
  export default includeUser;
  `
  },
  {
    id: 48,
    name: 'UserInfoWithLoader - HOCPattern',
    code:   
    `
    /**here create the  'UserInfoWithLoader' that will create 
     * components that share the fetch data behavior*/
      const UserInfoWithLoader = includeUser(UserInfo, "3");
  `
  },
  {
    id: 49,
    name: 'UserInfoForm - Component',
    code:   
    `
    /**'UserInfoForm' targets an user data set and by using 'includeUpdatableUser HOC'
     * will change the data of the user*/
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
      "2"
    );
    
    export default UserInfoForm;
  `
  },
  {
    id: 50,
    name: 'includeUpdatableUser - HOCPattern',
    code:   
    `
    /**'includeUpdatableUser' HOC is going to receive a 'Compoenent' 
     * and an 'userId' and will make multiple user End Components, that share
     * similar arquitecture and composition*/
    const includeUpdatableUser = (Component, userId) => {
      return (props) => {
        /**the state to mutate the users*/
        const [user, setUser] = useState(null);
        const [updatableUser, setUpdatableUser] = useState(null);
    
        /**the HOC is receiving here the data*/
        useEffect(() => {
          (async () => {
            const response = await axios.get(\`/users/\${userId}\`);
            setUser(response.data);
            setUpdatableUser(response.data);
          })();
        }, []);
    
        /** here i am mutating the changes*/
        const userChangeHandler = (updates) => {
          setUpdatableUser({ ...updatableUser, ...updates });
        };
    
        /**handle to post data*/
        const userPostHandler = async () => {
          const response = await axios.post(\`/users/\${userId}\`, {
            user: updatableUser,
          });
          setUser(response.data);
          setUpdatableUser(response.data);
        };
    
        /**reset to default values*/
        const resetUserHandler = () => {
          setUpdatableUser(user);
        };
    
        /**returing the component with all the props
         * an handlers*/
        return (
          <Component
            {...props}
            updatableUser={updatableUser}
            changeHandler={userChangeHandler}
            userPostHandler={userPostHandler}
            resetUserHandler={resetUserHandler}
          />
        );
      };
    };
    
    export default includeUpdatableUser;
  `
  }
];

/**List Pattern data  -- start */

export const authors = [
  {
    id:1,
    name:'Sarah Waters',
    age:55,
    country:'United Kingdom',
    books: ['Fingersmith', 'The Night Watch']
  },
  {
    id:2,
    name:'Haruki Murakami',
    age:71,
    country:'Japan',
    books: ['Norwegian Wood', 'Kaftka in the Shore']
  },
  {
    id:3,
    name:'Chimanmanda Ngozi Adichire',
    age:43,
    country:'Nigeria',
    books: ['Half of a Yellow Sun', 'Americanah']
  }

]

export const books = [
  {
    id:1,
    name:'To Kill a Mockingbird',
    pages:281,
    title:'Harper Lee',
    price: 12.99
  },
  {
    id:2,
    name:'The Catcher in the Eye',
    pages:224,
    title:'J.D Salinger',
    price: 9.99
  },
  {
    id:3,
    name:'The Litle Prince',
    pages:85,
    title:'Antoine de Saint-Exupery',
    price: 7.99
  }

]

/**List Pattern data  -- end */