import { nanoid } from "nanoid";
import { layoutexamples, sidebarexample } from "./assets/index.assets"

/**react-design-patterns-app - version 50.07 - data js  
 * - Features: 
 *    
 *     --> Adding 'SearchDebounce -  Debouncing implementation' id
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
    {
      id:34,
      category:'API Layer and Async Operations',
      pattern:'Intro',
      description:''
    },
    {
      id:35,
      category:'API Layer and Async Operations',
      pattern:'Use Case Meal Search API',
      description:''
    },
    {
      id:36,
      category:'API Layer and Async Operations',
      pattern:'Fetching Data with React Query',
      description:''
    },
    {
      id:37,
      category:'API Layer and Async Operations',
      pattern:'State Management Patterns',
      description:''
    },
    {
      id:38,
      category:'Performance',
      pattern:'Lazy and Code Splitting',
      description:''
    },
    {
      id:39,
      category:'Performance',
      pattern:'Rendering Optimization',
      description:''
    },
    {
      id:40,
      category:'Performance',
      pattern:'Trottling Rendering Optimization',
      description:''
    },
    {
      id:41,
      category:'Performance',
      pattern:'Debouncing Executions',
      description:''
    },
]

export const initialIngredientstwo = [
    {
      id: nanoid(),
      name: "500g Chicken Breasts",
    },
    {
      id: nanoid(),
      name: "300 ml milk",
    },
    {
      id: nanoid(),
      name: "1 tbsp salt",
    },
  ];

export const initialIngredientsone = [
    {
      id: nanoid(),
      name: "500g Chicken Breasts",
    },
    {
      id: nanoid(),
      name: "300 ml milk",
    },
    {
      id: nanoid(),
      name: "1 tbsp salt",
    },
  ];

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

export const shoppingItemsImmer = {
  newShoppingItemName: "",
  items: [
    {
      id: "1",
      name: "Plumbs",
    },
    {
      id: "2",
      name: "Apples Cider",
    },
    {
      id: "3",
      name: "Chicken legs",
    },
  ],
};

export const shoppingItems = {
  newShoppingItemName: "",
  items: [
    {
      id: "1",
      name: "Sea Salt",
    },
    {
      id: "2",
      name: "Apples",
    },
    {
      id: "3",
      name: "Chicken breasts",
    },
  ],
};

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
    \${tw(\`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center\`)}
    \`;
    `
  },
  {
    id: 10,
    name: 'layout modal - ModalContent code',
    code: `
    /**this will be the children of the modal component, for this case a samll list*/
    export const ModalContent = styled.div\`
    \${tw\`p-6 bg-white w-1/2 text-black\`}
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
  },
  {
    id: 51,
    name: 'includeUpdatableResource - HOCPattern',
    code:   
    `
/**this utility is made in order to capitalize the resource name */
const toCapital = str => str.charAt(0).toUpperCase() + str.slice(1);

/**here i pass 'resourceUrl' that will be the custom path of the resource, 
 * 'resourceName' that will be the name of the dataset*/
    const includeUpdatableResource = (Component, resourceUrl, resourceName) => {
      return (props) => {
        const [ intialResource, setInitialResource ] = useState(null);
        const [ resource, setResource ] = useState(null);

        useEffect(() => {
          (async () => {
            const response = await axios.get(resourceUrl);
            setInitialResource(response.data);
            setResource(response.data);
          })();
        }, []);

        const onChange = (updates) => {
            setResource({ ...resource, ...updates });
        };

        const onPost = async () => {
          const response = await axios.post(resourceUrl, {
            [resourceName]: resource,
          });
          setInitialResource(response.data);
          setResource(response.data);
        };

        const onReset = () => {
          setResource(intialResource);
        };

        /**this solution is made in order to overcome the get and post
         * of several resources from different dataset, due to a high 
         * number of sitautions where can exist conclict by the props names*/
        const resourceProps = {
            [resourceName]: resource,
            [\`onChange\${toCapital(resourceName)}\`]: onChange,
            [\`onPost\${toCapital(resourceName)}\`]: onPost,
            [\`onReset\${toCapital(resourceName)}\`]: onReset,
        }

        return (
          <Component {...props} {...resourceProps}/>
        );
      };
    };

    export default includeUpdatableResource;
  `
  },
  {
    id: 52,
    name: 'useCurrentUser - CustomHooks',
    code:   
    `
    /**'useCurrent' user follows the convention for a hook starting 
     * by the word 'use' following of the hook name with camel case*/
    const useCurrentUser = () => {

      const [user, setUser ] = useState()

      /**the goal of this hook is to encapsulate he logic of a 
       * 'current-user' or any other data source*/
      useEffect(() => {
          (async () => {
              const response = await axios.get("/current-user")
              setUser(response.data)
          })()
      },[])

      return user;
    }

    export default useCurrentUser;
  `
  },
  {
    id: 53,
    name: 'UserInfoWithHook - CustomHooks',
    code:   
    `
    /**the previous 'UserInfo' refactor to 'UserInfoWithHook'*/
    const UserInfoWithHook = () => {

      /**only by invoking the hook in a variable will fetch the 
       * user data*/  
      const user = useCurrentUser();
    
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
    
    export default UserInfoWithHook;
  `
  },
  {
    id: 54,
    name: 'UserInfoWithHookGen - Render',
    code:   
    `
    /**the previous 'UserInfo' refactor to 'UserInfoWithHookGen', and 
     * will receive a 'userId' prop that is going to be use by the
     * 'useUser' hook through the component*/
      <UserInfoWithHookGen userId={'2'}/>
  `
  },
  {
    id: 55,
    name: 'useUser - Custom Hook',
    code:   
    `
    /**the previous 'UserInfo' refactor to 'UserInfoWithHookGen', and 
     * will receive a 'userId' prop that is going to be use by the
     * 'useUser' hook through the component*/
      const useUser = (userId) => {

        const [user, setUser ] = useState()
    
        useEffect(() => {
            (async () => {
                /**this time i refactor this line to receive the endpoint 
                 * with a literal template 'userId' value*/
                const response = await axios.get(\`/users/\${userId}\`)
                setUser(response.data)
            })()
            /**and the dependency array will dependes on 'userId'*/
        },[userId])
    
        return user;
    }
    
    export default useUser;
  `
  },
  {
    id: 56,
    name: 'BookInfoAnyResource - Render',
    code:   
    `
    /**the component will take the path of the resource*/
      <BookInfoAnyResource bookUrl={'/books/2'}/>
  `
  },
  {
    id: 57,
    name: 'BookInfoAnyResource - Component',
    code:   
    `
    /**the 'BookInfo' component will be refactored to 'BookInfoAnyResource' 
     * taking the resource path*/
    const BookInfoAnyResource = ({ bookUrl }) => {

      const book = useResource( bookUrl)
      const { name, price, title, pages } = book || {};
    
      return book ? (
        <ListWrapper>
            <h2 className="book-name"><span> {name}</span></h2>
            <p><span>Price: </span>{price}</p>
            <h3><span>Title: </span> {title}</h3>
            <p><span>Number of Pages: </span>{pages}</p>
        </ListWrapper>
      ) : (
        <h1>Loading</h1>
      );
    };
    
    export default BookInfoAnyResource;
  `
  },
  {
    id: 58,
    name: 'Alert - Component',
    code:   
    `
    /**essentially 'Alert' will be a 'controlled component' that 
     * will display a children as a message*/
      const Alert = ({ children, onClose, show }) => {
        if (!show) return;
      
        return (
            <ModalBackground>
              <ModalContent>
                <div className="alert" onClick={onClose}>
                  {children}
                </div>
              </ModalContent>
            </ModalBackground>
        );
      };
    
      export default Alert;
  `
  },
  {
    id: 59,
    name: 'AlertMessage - Component',
    code:   
    `
    /**'AlertMessage' is the component that controls 'Alert' behavior*/
      const AlertMessage = () => {
      
        const [show, setShow] = useState(false);
        
        return (
          <AlertWrapper>
            <h1>Other Content</h1>
            <ButtonGeneral>
              <button 
                onClick={() => setShow(!show)}
                >{show ?  'Click it to close.' : 'Show Message'}
              </button>
            </ButtonGeneral>
            <Alert show={show} onClose={() => setShow(false)}>
              A sample message to show. <span className="dissapear"> ( Click me to dissappear ) </span>
            </Alert>
          </AlertWrapper>
        );
    
    }
    
    export default AlertMessage;
  `
  },
  {
    id: 60,
    name: 'Alert - Inner logic',
    code:   
    `
    /**inner logic of 'Alert'*/
    ...
    <ModalBackground>
      <ModalContent>
        <div className="alert" onClick={onClose}>
          {children}
        </div>
      </ModalContent>
    </ModalBackground>
    ....
  `
  },
  {
    id: 61,
    name: 'Previously Alert and now AlertPortal- Component',
    code:   
    `
    /**Previously 'Alert' and now refactored to 'AlertPortal''*/
    const AlertPortal = ({ children, onClose, show }) => {
      if (!show) return;
    
      /**'createPortal' is imported from react, first argument 
       * will be the functionality ( logic and styles in this 
       * case ) that i want to send through the portal, and the second 
       * argument is the 'target' location ( - document.body -)*/
      return createPortal(
          <ModalBackground>
            <ModalContent>
              <div className="alert" onClick={onClose}>
                {children}
              </div>
            </ModalContent>
          </ModalBackground>,
          document.body
      );
    };

    export default AlertPortal;
  `
  },
  {
    id: 62,
    name: 'ForwardingRefForm - Forwarding Refs',
    code:   
    `
    const ForwardingRefForm = () => {

      /**here i create a ref that is giving me acces to the data */
      const  inputRef = useRef();
  
      /**here i create a handler to access that user data */
      const  submitHandler = (e) => {
          e.preventDefault();
  
          console.log(inputRef.current.value)
      }
  
      return(
          /**this a style component */
          <FormWrapper>
          <form onSubmit={submitHandler}>
              <span className="text-white font-semibold">
                  user data ( to be access with a useRef )
              </span>
              {/**here using the reference i get access to the user data */}
              <input ref={inputRef}/>
              <ButtonGeneral>
              <button>
                  Submit
              </button>
              </ButtonGeneral>
          </form>    
          </FormWrapper>
      )
  }
  
  export default ForwardingRefForm;
  `
  },
  {
    id: 63,
    name: 'ForwardingRefInput - Forwarding Refs',
    code:   
    `
    ....
      /**this is going to be te logic i am 
       * going to extract to make 'ForwardingRefInput' */
      <input ref={inputRef}/>
    ....   
  `
  },
  {
    id: 64,
    name: 'IngRefInput - Forwarding Refs',
    code:   
    `
    ....
      /**i pass the ref as a prop and spread the rest of the props */
      const IngRefInput = (props, ref) => {

          return <input ref={ref} {...props}/>
      }
    ....   
  `
  },
  {
    id: 65,
    name: 'IngRefInput and ForwardingRefInput - Forwarding Refs',
    code:   
    `     
      /** i create this two components  */

      /**the first component is to extract the logic */
      
      /**I pass the reference and the props in order  to keep functionality 
       *  
       *   -- very important the 'props', and 'ref' are two parameters 
       *      need it by 'forwardRef'
      */
      const IngRefInput = (props, ref) => {
      
        return <input ref={ref} {...props}/>
      }
      
      /**the second component use the 'forwardRef' hook to pass the reference (this hook comes from react library ) */
      export const ForwardingRefInput = forwardRef(IngRefInput);   
  `
  },
  {
    id: 66,
    name: 'ForwardingHookRefForm - Forwarding Refs',
    code:   
    `     
      /** this form instead of an input tag will use the custom 
       * component*/
      const ForwardingHookRefForm = () => {

        /**here i create a ref that is giving me acces to the data */
        const  inputRef = useRef();
    
        /**here i create a handler to access that user data */
        const  submitHandler = (e) => {
            e.preventDefault();
    
            console.log(inputRef.current.value)
        }
    
        return(
            /**this a style component */
            <FormWrapper>
            <form onSubmit={submitHandler}>
                <span className="text-white font-semibold">
                    user data ( to be access with a useRef )
                </span>
                {/**here using the reference i get access to the user data, and 
                 *  this time will be access by the custom component*/}
                <ForwardingRefInput ref={inputRef}/>
                <ButtonGeneral>
                <button>
                    Submit
                </button>
                </ButtonGeneral>
            </form>    
            </FormWrapper>
        )
    }
    
    export default ForwardingHookRefForm;   
  `
  },
  {
    id: 67,
    name: 'MasterComponent - Error Boundaries',
    code:   
    `     
      /** the 'MasterComponent' is scoping 'ChildWrapper'*/
      const MasterComponent = () => {
    
        return (
            <MasterWrapper>
                <h1>Master Component</h1>
                <ChildWrapper>
                    <ChildComponent />
                </ChildWrapper>
            </MasterWrapper>
          );
    
    }
    
    export default MasterComponent   
  `
  },
  {
    id: 68,
    name: 'MasterComponent - Error Boundaries',
    code:   
    `     
    /** the 'ChildComponent' is scoping a simple 'message' and 
     * an error ( that will uncomment later )*/
    const ChildComponent = () => {

        //throw new Error("Error in component")
        return(
            <h2>Child Component</h2>
        )
    }
    
    export default ChildComponent;   
  `
  },
  {
    id: 69,
    name: 'ErrorBoundary - Error Boundaries',
    code:   
    ` 
    {displayMasterFallback ?
      /**here i am setting an error boundary to scope the error 
       * and render a fallback message*/
      <ErrorBoundary fallback={<h1>Error at App Level</h1>}>
          /**this is the master version with an error that is being 
           * handled by a error boundary*/
          <MasterWithErrorComponent /> 
      </ErrorBoundary>
      :   
      <>
      </>
      }   
  `
  },
  {
    id: 70,
    name: 'ErrorBoundary class component - Error Boundaries',
    code:   
    ` 
    {displayMasterFallback ?
      /**this error boundary class interact at react tree level*/
      export class ErrorBoundary extends React.Component {
        state = { hasError: false };
      
        static getDerivedStateFromError(error) {
          return { hasError: true };
        }
      
        componentDidCatch(error, errorInfo) {
          console.log("Error: ", error);
          // Prevent the error from being displayed
          // Set the state to trigger a re-render without the error
          this.setState({ hasError: true });
        }
      
        render() {
          if (this.state.hasError) {
            return this.props.fallback;
          }
      
          return this.props.children;
        }
      }   
  `
  },
  {
    id: 71,
    name: 'componentDidCatch lifecycle method - Error Boundaries',
    code:   
    ` 
    /**this lifecycle catch the error, giving an opportunity to record 
     * this error in an API, or simply separating this error of sync and 
     * async errors*/
    componentDidCatch(error, errorInfo) {
      console.log("Error: ", error);
      // Prevent the error from being displayed
      // Set the state to trigger a re-render without the error
      this.setState({ hasError: true });
    }   
  `
  },
  {
    id: 72,
    name: 'KeysExercise - KeysExercise',
    code:   
    ` 
    /**this exercise has no keys implemented*/
    const KeysExercise = () => {

      const [changeShirts, setChangeShirts] = useState(false);
    
      return (
        <KeyExerciseWrapper>
          {changeShirts ? (
            /**the fragments act as parent of the spans elements.
             * when it switch even when they're not thwe same ( one for shirt and 
             * one for shoes) the react tree detetcs them as the same */
            <>
              <span >Shirts counts: </span> <Counter />{" "}
            </>
          ) : (
            <>
              <span >Shoes counts: </span> <Counter />{" "}
            </>
          )}
          <br />
            <PrimaryButton>
                <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
            </PrimaryButton>
        </KeyExerciseWrapper>
      );
    }
    
    export default KeysExercise;   
  `
  },
  {
    id: 73,
    name: 'Counter - KeyExercise',
    code:   
    ` 
    /**the counter is use to set a number for shirts and shoes*/
    const Counter = () => {
      const [count, setCount] = useState(0);
    
      return (
        <ButtonWrapper>
            <ButtonGeneral>
                <button onClick={() => setCount((c) => c - 1)}>-</button>
            </ButtonGeneral>
            <div className="number-center">
                {count}
            </div>
            <ButtonGeneral>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
            </ButtonGeneral>
        </ButtonWrapper>
      );
    };
    
    export default Counter;   
  `
  },
  {
    id: 74,
    name: 'WithtKeysExercise - KeyExercise',
    code:   
    ` 
    /**here i add the keys "shirts" and key="shoes" for each element*/
    const WithtKeysExercise = () => {

      const [changeShirts, setChangeShirts] = useState(false);
    
      return (
        <KeyExerciseWrapper>
          {changeShirts ? (
            <>
              <span >Shirts counts: </span> <Counter key="shirts"/>{" "}
            </>
          ) : (
            <>
              <span >Shoes counts: </span> <Counter  key="shoes"/>{" "}
            </>
          )}
          <br />
            <PrimaryButton>
                <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
            </PrimaryButton>
        </KeyExerciseWrapper>
      );
    }
    
    export default WithtKeysExercise;
  `
  },
  {
    id: 75,
    name: 'AlertMessageWithEventListener - EventListeners',
    code:   
    ` 
    /**here i add 'onClick' event to listen when i click an element ( - check the java console- )*/
    const AlertMessageWithEventListener = () => {
    
      const [show, setShow] = useState(false);
      
      return (
        /** here i add the 'onclick' event listener to detect the 'outer div'*/
        <AlertWrapper onClick={() => console.log("Outter div")}>
          <h1>Other Content for the Portal</h1>
          <ButtonGeneral>
            <button 
              onClick={() => setShow(!show)}
              >{show ?  'Click it to close.' : 'Show Message'}
            </button>
          </ButtonGeneral>
          <AlertPortalEventListener show={show} onClose={() => setShow(false)}>
            A sample message to show from portal to <span className="portal-end"> document.body </span>. <span className="dissapear"> ( Click me to dissappear ) </span>
          </AlertPortalEventListener>
        </AlertWrapper>
      );
  
  }
  
  export default AlertMessageWithEventListener;
  `
  },
  {
    id: 76,
    name: 'AlertPortalEventListener - EventListeners',
    code:   
    ` 
    const AlertPortalEventListener = ({ children, onClose, show }) => {
      if (!show) return;
      return createPortal(
        /**here i add 'onClick' event to listen when i click an element ( - check the java console- )*/
          <ModalBackground onClick={() => console.log("Inner div")}>
            <ModalContent>
              <div className="alert" onClick={onClose}>
                {children}
              </div>
            </ModalContent>
          </ModalBackground>,
          document.body
      );
    };
  
    export default AlertPortalEventListener;
  `
  },
  {
    id: 77,
    name: 'AlertMessageWithEventCapture - EventListeners',
    code:   
    ` 
    const AlertMessageWithEventCapture = () => {
    
      const [show, setShow] = useState(false);
      
      return (
        /**the refactor by replacing 'onClick' by 'onClickCapture' will attach 
         * the 'Outter div' with the 'Inner div' giving control in every phase that 
         * events get triggered*/
        <AlertWrapper onClickCapture={() => console.log("Outter div")}>
          <h1>Other Content for the Portal ( Check the Java Console for the "Outter div")</h1>
          <ButtonGeneral>
            <button 
              onClick={() => setShow(!show)}
              >{show ?  'Click it to close.' : 'Show Message'}
            </button>
          </ButtonGeneral>
          <AlertPortalEventCapture show={show} onClose={() => setShow(false)}>
              A sample message <span className="portal-end"> ( Click me to dissappear - Check the Java Console for "Inner div" ) </span>
          </AlertPortalEventCapture>
        </AlertWrapper>
      );
  
  }
  
  export default AlertMessageWithEventCapture;
  `
  },
  {
    id: 78,
    name: 'AlertPortalEventCapture - EventListeners',
    code:   
    ` 
    const AlertPortalEventCapture = ({ children, onClose, show }) => {
      if (!show) return;
    
      return createPortal(
          <ModalBackground 
              /** here i use the event listener to capture 
               * this phase*/
              onClickCapture={() => {
                  onClose();
                  console.log("Inner div")
              }}>
            <ModalContent>
              <div className="alert" onClick={onClose}>
                {children}
              </div>
            </ModalContent>
          </ModalBackground>,
          document.body
      );
    };
  
    export default AlertPortalEventCapture;
  `
  },
  {
    id: 79,
    name: 'TopUseLayoutEffect - useLayoutEffect Pattern',
    code:   
    ` 
    /**This component has an issue with delay rendering */
      const TopUseLayoutEffect = () => {
  
      const [show, setShow] = useState(false);
      
      /*this states is a 'top' prop for css porpuses **/  
      const [top, setTop] = useState(0);

      /** by using ref i am interacting directly with the DOM affecting
       *  painting phases of the component render */
      const buttonRef = useRef(null);

      /**This useEffect adds dynamicly the top prop in order to be absolute 
       * to the button*/
      useEffect(() => {
        /**by using useEffect, the component mount and render and the
         * calculation its going to be done later*/
        if (buttonRef.current === null || !show) return setTop(0);
        const { bottom } = buttonRef.current.getBoundingClientRect();
        setTop(bottom + 30);
      }, [show]);

      /** this block of code adds the delay issue because the component  rendering will 
       * depend on the calculation in order to render */
      const now = performance.now();
      while (now > performance.now() - 700) {
        //Do something
      }

      return (
        <>
        <ButtonGeneral>
          <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
            Show
          </button>
        </ButtonGeneral> 
          {show && (
            /**here i drill the prop to use it in the component dynamicly*/
            <ToolTipWrapper top={top}>
                Some text ...    
            </ToolTipWrapper>
          )}
        </>
      );
    }

    export default TopUseLayoutEffect;
  `
  },
  {
    id: 80,
    name: 'ToolTipWrapper - useLayoutEffect Pattern',
    code:   
    ` 
    /**This is the style component*/
    export const ToolTipWrapper = styled.div\`

    /*the 'top' prop was drilled, and this way is dynamiclly added*/
    top: \${(top) => top}
    
    \${tw(\`absolute border-2 border-black m-4 p-4\`)}
    \`;
  `
  },
  {
    id: 81,
    name: 'TopUseLayoutEffect - useLayoutEffect Pattern',
    code:   
    ` 
    const TopUseLayoutEffect = () => {

    const [show, setShow] = useState(false);
    const [top, setTop] = useState(0);
    const buttonRef = useRef(null);
  
    useLayoutEffect(() => {
      /**by using  'useLayoutEffect' hook, it make first the claculation 
       * and then will mount and render the component ( by priority 
       * executes the code block inside of the useLayoutEffect )*/
      if (buttonRef.current === null || !show) return setTop(0);
      const { bottom } = buttonRef.current.getBoundingClientRect();
      setTop(bottom + 30);
    }, [show]);
  
    const now = performance.now();
    while (now > performance.now() - 100) {
      //Do something
    }
  
    return (
      <>
      <ButtonGeneral>
        <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
          Show
        </button>
      </ButtonGeneral>
        {show && (
          <ToolTipWrapper top={top} >
            <div className="text-color">
              Some text ...    
            </div>
          </ToolTipWrapper>
        )}
      </>
    );
  }
  
  export default TopUseLayoutEffect;
  `
  },
  {
    id: 82,
    name: 'useLayoutEffect - useLayoutEffect Pattern',
    code:   
    ` 
   .....
  
    useLayoutEffect(() => {
      /**by using  'useLayoutEffect' hook, it make first the claculation 
       * and then will mount and render the component ( by priority 
       * executes the code block inside of the useLayoutEffect )*/
      if (buttonRef.current === null || !show) return setTop(0);
      const { bottom } = buttonRef.current.getBoundingClientRect();
      setTop(bottom + 30);
    }, [show]);
  
    ...
  `
  },
  {
    id: 83,
    name: 'UseIdBeforeForm - useId hook Pattern',
    code:   
    ` 
     const UseIdBeforeForm = () => {
    
      const [email, setEmail] = useState("");
      return (
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      );
    };
    
    export default UseIdBeforeForm;
  `
  } ,
  {
    id: 84,
    name: 'UseIdMultipleFormBefore - App with multiple Forms',
    code:   
    ` 
    const UseIdMultipleFormBefore = () => {

      return (
          <MultipleFormWrapper>
              <UseIdBeforeForm />
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <UseIdBeforeForm />
          </MultipleFormWrapper>
        );
  }
  
  export default UseIdMultipleFormBefore;
  `
  },
  {
    id: 85,
    name: 'UseIdAfterMathForm - useId hook Pattern',
    code:   
    ` 
    const UseIdAfterMathForm = () => {
    
      const [email, setEmail] = useState("");
      
      /**here i create a random id*/
      const id = Math.random();
      
      /**i set the 'id' for both label an input, and this will 
       * create an unique id every time the component get mount*/
      return (
        <FormWrapper>
        <div>
          <label htmlFor={id}>Email</label>
          <input
            id={id}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        </FormWrapper>
      );
    };
    
    export default UseIdAfterMathForm;
  `
  },
  {
    id: 86,
    name: 'UseIdAfterMathForm - useId hook Pattern',
    code:   
    ` 
    const UseIdMultipleFormAfterMath = () => {

      return (
          <MultipleFormWrapper>
              {/**here i mount the component with the Math 'id'*/}
              <UseIdAfterMathForm />
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <UseIdAfterMathForm />
          </MultipleFormWrapper>
        );
    }
    
    export default UseIdMultipleFormAfterMath;
  `
  },
  {
    id: 87,
    name: 'UseIdAfterForm - useId hook Pattern',
    code:   
    ` 
    const UseIdAfterForm = () => {
      
      /** by using 'useId' hook will generate an alfanumeric id 
       * that will stay the same for every time that the component render*/  
      const id = useId();  
        
      const [email, setEmail] = useState("");
      return (
        <FormWrapper>
        <div>
          <label htmlFor={id}>Email</label>
          <input
            id={id}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        </FormWrapper>
      );
    };
    
    export default UseIdAfterForm;
  `
  },
  {
    id: 88,
    name: 'UseIdMultipleFormAfter - useId hook Pattern',
    code:   
    ` 
    const UseIdMultipleFormAfter = () => {

      return (
          <MultipleFormWrapper>
              <UseIdAfterForm />
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <UseIdAfterForm />
          </MultipleFormWrapper>
        );
  }
  
  export default UseIdMultipleFormAfter;
  `
  },
  {
    id: 89,
    name: 'UseIdAfterTwoOrMoreInputs - useId hook Pattern',
    code:   
    ` 
    const UseIdAfterTwoOrMoreInputs = () => {

      /**this solution is made by creating 2 different id's*/
      const id = useId();  
      const id2 = useId();  
        
      const [email, setEmail] = useState("");

      /**this id's are set on each 'label' and 'input'*/
      return (
        <FormWrapper>
        <div>
          <label htmlFor={id}>Email</label>
          <input
            id={id}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
    
        <label htmlFor={id}>Name</label>
        <input
            id={id2}
            type="text"
          />
    
        </div>
        </FormWrapper>
      );
    };
    
    export default UseIdAfterTwoOrMoreInputs;
  `
  },
  {
    id: 90,
    name: 'UseIdAfterMultipleInputs - useId hook Pattern',
    code:   
    ` 
    const UseIdAfterMultipleInputs = () => {

      return (
          <MultipleFormWrapper>
              {/**here i render the component with multiple inputs*/}
              <UseIdAfterTwoOrMoreInputs />
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <UseIdAfterTwoOrMoreInputs />
          </MultipleFormWrapper>
        );
    }
    
    export default UseIdAfterMultipleInputs;
  `
  },
  {
    id: 91,
    name: 'UseIdCleanAfterTwoOrMoreInputs - useId hook Pattern',
    code:   
    ` 
    const UseIdCleanAfterTwoOrMoreInputs = () => {

      /**the 'id' will be unique once the combination with the template literal 
       * is done*/
      const id = useId();  
      
      const [email, setEmail] = useState("");

     
      return (
        <FormWrapper>
        <div> 
        {/**here i am adding a template literal for 'email'*/}
        <label htmlFor={\`\${id}-email\`}>Email</label>
          <input
            id={\`\${id}-email\`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
          {/**here i am adding a template literal for 'name'*/}
        <label htmlFor={\`\${id}-name\`}>Name</label>
          <input
            id={\`\${id}-name\`}
            type="text"
          />
    
        </div>
        </FormWrapper>
      );
    };
    
    export default UseIdCleanAfterTwoOrMoreInputs;
  `
  },
  {
    id: 92,
    name: 'UseIdAfterCleanMultipleInputs - useId hook Pattern',
    code:   
    ` 
    const UseIdAfterCleanMultipleInputs = () => {

      return (
          <MultipleFormWrapper>
            {/**here i render the component with the unique id*/}
              <UseIdCleanAfterTwoOrMoreInputs />
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              {/**here i render the component with the unique id*/}
              <UseIdCleanAfterTwoOrMoreInputs />
          </MultipleFormWrapper>
        );
  }
  
  export default UseIdAfterCleanMultipleInputs;
  `
  },
  {
    id: 93,
    name: 'CallbackAsRefBefore - Callback as Ref',
    code:   
    ` 
    const CallbackAsRefBefore = () => {

      /**once the component is mount the states get evaluated */
      const [ showInput, setShowInput ] = useState(false)
      const inputRef = useRef(null);
  
      /**the problem will come to get the value of the 'inputRef',
           * that will be 'null' at the moment when the component renders*/
      useEffect(() => {
          inputRef.current.focus();
      }, []);
  
      /**once the component is mount will try to render the component */
      return(
          <>
          <FormWrapper>
              <ButtonGeneral>
                  <button onClick={() => setShowInput((s) => !s)}> Switch </button>
              </ButtonGeneral>
              {showInput && <input type="text" ref={inputRef} />} 
          </FormWrapper>
          </>
      )
      }
  
  export default CallbackAsRefBefore;
  `
  },
  {
    id: 94,
    name: 'CallbackAsRefCommentedBefore - Callback as Ref',
    code:   
    ` 
    const CallbackAsRefCommentedBefore = () => {

      const [ showInput, setShowInput ] = useState(false)
      const inputRef = useRef(null);
    
      /**by commenting this line, the ref will not longer 'undefined'
       * ( and the component will render )*/
        useEffect(() => {
            //inputRef.current.focus();
        }, []);
    
        return(
            <>
            <FormWrapper>
                <ButtonGeneral>
                    <button onClick={() => setShowInput((s) => !s)}> Switch </button>
                </ButtonGeneral>
                {showInput && <input type="text" ref={inputRef} />} 
            </FormWrapper>
            </>
        )
        }
    
    
    export default CallbackAsRefCommentedBefore;
  `
  },
  {
    id: 95,
    name: 'CallbackAsRefAfter - Callback as Ref',
    code:   
    ` 
    const CallbackAsRefAfter = () => {

      const [ showInput, setShowInput ] = useState(false)
  
  
      const inputRef = useCallback(( input ) => {
          /**once switch is being hit it will destroy the input, and return to the callback, 
           * and this conditional is to avoid the error*/
          if (input === null) return;
          input.focus();
      }, [])
  
      return(
          <>
          <FormWrapper>
              <ButtonGeneral>
                  <button onClick={() => setShowInput((s) => !s)}> Switch </button>
              </ButtonGeneral>
              {/**this is the conditional that will detroy the input once in the callback*/}
              {showInput && <input type="text" ref={inputRef} />} 
          </FormWrapper>
          </>
      )
      }
  
  
  export default CallbackAsRefAfter;
  `
  },
  {
    id: 96,
    name: 'UseImperativeHookPattern - Use Imperative Hook Pattern',
    code:   
    `     
      const UseImperativeHookPattern = () => {

          
        const inputRef = useRef();

        const submitHandler = (e) => {
            e.preventDefault();
            /**once submit i will catch this value at the console*/
            console.log(inputRef.current.value);
        }

        return (
            <FormWrapper>
                <form onSubmit={submitHandler}>
                <ForwardingRefInput ref={inputRef} />
                <ButtonGeneral>
                    <button type="submit" onClick={submitHandler} className="button">
                        Submit
                    </button>
                </ButtonGeneral>
                </form>
            </FormWrapper>
        );
      }

      export default UseImperativeHookPattern;
  `
  },
  {
    id: 97,
    name: 'UseImperativeFocusHookPattern - Use Imperative Hook Pattern',
    code:   
    `     
    const UseImperativeFocusHookPattern = () => {

      
        const inputRef = useRef();
    
        const submitHandler = (e) => {
            e.preventDefault();
    
            return inputRef.current.focus()
        }
    
        return (
            <FormWrapper>
                <form onSubmit={submitHandler}>
                <ForwardingRefInput ref={inputRef} />
                <ButtonGeneral>
                    <button type="submit" onClick={submitHandler} className="button">
                        Submit
                    </button>
                </ButtonGeneral>
                </form>
            </FormWrapper>
        );
    }
    
    export default UseImperativeFocusHookPattern;
  `
  },
  {
    id: 98,
    name: 'ForwardingImperativeRefInput - Use Imperative Hook Pattern',
    code:   
    `     
    const IngRefInput = (props, ref) => {

      /**by using the hook i specified acces only to two objects 'ref',
       * and sayType*/
      useImperativeHandle(ref, () => {
          return{ sayType: () => alert("Type your name") }
      })
  
      return <input {...props}/>
  }
  
  /**the second component use the 'forwardRef' hook to pass the reference */
  export const ForwardingImperativeRefInput = forwardRef(IngRefInput);
  `
  },
  {
    id: 99,
    name: 'UseWithImperativeFocusMethodHookPattern - Use Imperative Hook Pattern',
    code:   
    `     
    const UseWithImperativeFocusMethodHookPattern = () => {

      
        const inputRef = useRef();
    
        const submitHandler = (e) => {
            e.preventDefault();
            
            /**now i invoke the 'stayFocus' method */  
            return inputRef.current.stayFocus()
        }
    
        return (
            <FormWrapper>
                <form onSubmit={submitHandler}>
                {/**i add the new subcomponent modified*/}
                <ForwardingImperativeFocusRefInput ref={inputRef} />
                <ButtonGeneral>
                    <button type="submit" onClick={submitHandler} className="button">
                        Submit
                    </button>
                </ButtonGeneral>
                </form>
            </FormWrapper>
        );
    }
    
    export default UseWithImperativeFocusMethodHookPattern;
  `
  },
  {
    id: 100,
    name: 'ForwardingImperativeFocusRefInput - Use Imperative Hook Pattern',
    code:   
    `
    const IngRefInput = (props, ref) => {

      /**here i create the ref in this component scope */
      const inputRef = useRef()
      
      /**here is the hook and i give access to the ref, and the 
       * function 'stayFocus'*/
      useImperativeHandle(ref, () => {
          return{ 
              stayFocus: () => inputRef.current.focus() 
           }
      })
  
      return <input {...props} ref={inputRef}/>
  }
  
  /**the second component use the 'forwardRef' hook to pass the reference */
  export const ForwardingImperativeFocusRefInput = forwardRef(IngRefInput);
    `
  },
  {
    id: 101,
    name: 'UseImperativeMultipleFocus - Use Imperative Hook Pattern',
    code:   
    `
    const UseImperativeMultipleFocus = () => {

      
        const inputRef = useRef();
    
        /**each handler will return a different reference*/
        const submitFocus = (e) => {
            e.preventDefault();
            
    
            return inputRef.current.input1.focus()
        }
    
        const submitFocus2 = (e) => {
            e.preventDefault();
            
    
            return inputRef.current.input2.focus()
        }
    
        return (
            <FormWrapper>
                <form >
                <ForwardingImperativeMultipleFocus ref={inputRef} />
                <ButtonGeneral>
                    {/**each reference from each button will access focus on the sub component*/}
                    <button type="submit" onClick={submitFocus} className="button">
                        Focus to 1
                    </button>
                    <button type="submit" onClick={submitFocus2} className="button">
                        Focus to 2 
                    </button>
                </ButtonGeneral>
                </form>
            </FormWrapper>
        );
    }
    
    export default UseImperativeMultipleFocus;
    `
  },
  {
    id: 102,
    name: 'ForwardingImperativeRefState - Use Imperative Hook Pattern',
    code:   
    `
    const IngRefInput = (props, ref) => {

      /**an initial value is needed ( if it is not added will be 'undefined' value ) */
      const [ value, setValue ] = useState("");
    
      /** 'Enhanced Performance' by adding dependency array This optimization can 
       * improve performance by avoiding unnecessary recalculations or re-renders 
       * when the value remains unchanged.*/

      useImperativeHandle(ref, () => {
          return{ value }
      }, [value])
  
      return (
      <>
          <input 
              {...props}
              type="text"
              value={value}
              onChange={ (e) => setValue(e.target.value) }
          />
      </>
      
      )
    }
    
    /**the second component use the 'ForwardingImperativeRefState' hook to pass the reference */
    export const ForwardingImperativeRefState = forwardRef(IngRefInput);
    `
  },
  {
    id: 103,
    name: 'UseWithImperativeFocusStatePattern - Use Imperative Hook Pattern',
    code:   
    `
    const UseWithImperativeFocusStatePattern = () => {
      
      
      const inputRef = useRef();
      
      /**the 'inputRef.current.value' gets the user entry and the 'inputRef' reference to be handle*/
      const submitHandler = (e) => {
        e.preventDefault();
        
        return console.log(" this is the imperative user entry ==>", inputRef.current.value) 
      }
      
      return (
        <FormWrapper>
        <form>
        <ForwardingImperativeRefState type="text" ref={inputRef}/>
        <ButtonGeneral>
        <button type="submit" onClick={submitHandler} className="button">
        Focus on user Entry
        </button>
        </ButtonGeneral>
        </form>
        </FormWrapper>
        );
      }
      
      export default UseWithImperativeFocusStatePattern;
      `
    },
    {
      id: 104,
      name: 'UseDeferredBeforeValueHookPattern - Use Deferred Value Hook Pattern',
      code:   
      `
      const UseDeferredBeforeValueHookPattern = () => {
        
        const id = useId();
        
        const [ keyword, setKeyword ] = useState("")
        
        const handleChange = (e) => {
          e.preventDefault();
          
          setKeyword(e.target.value)
        }
        
        return(
          <FormWrapperDeferred>
          <label htmlFor={\`\${id}-type\`}>Type here your entry</label>
                <input 
                    id={\`\${id}-type\`}
                    value={keyword}
                    onChange={handleChange}
                    />
                    <HeavyComponentBefore keyword={keyword}/>
                    </FormWrapperDeferred>
                    )
                  }
                  
                  export default UseDeferredBeforeValueHookPattern;
                  `
                },
                {
                  id: 105,
                  name: 'HeavyComponentBefore - Use Deferred Value Hook Pattern',
                  code:   
                  `
                  const HeavyComponentBefore = ({ keyword }) => {

                    const init = performance.now();
                    
                    while ( init > performance.now() - 200){
                      
                    }
                    
                    return(
                      <HeavyComponentWrapper>
                      <h2>
                      <span>
                      "
                      </span>
                      I am a slow  Component ( check your slow entry bellow )
                      <span>
                      "
                      </span>
                      </h2>
                      <p>
                      { keyword }
                      </p>
                      </HeavyComponentWrapper>
                      )
                    }
    
                    export default HeavyComponentBefore;
                    `
                  },
  {
    id: 106,
    name: 'HeavyComponentAfterMemo - Use Deferred Value Hook Pattern',
    code:   
    `
    /**i change the name of the component to pass it through 'memo' hook*/
    const HeavyComponentAfterMemo = ({ keyword }) => {
      
      const init = performance.now();
      
      while ( init > performance.now() - 200){
        
      }
      
      return(
        <HeavyComponentWrapper>
        <h2>
        <span>
        "
        </span>
        I am a slow  Component ( check your slow entry bellow )
        <span>
        "
        </span>
        </h2>
        <p>
        { keyword }
        </p>
        </HeavyComponentWrapper>
        )
      }
      
      /**here i just pass it throuhg 'memo' and export it */
      export const HeavyComponentAfterFirst = memo(HeavyComponentAfterMemo);
      `
    },
    {
      id: 107,
    name: 'UseDeferredAfterMemo - Use Deferred Value Hook Pattern',
    code:   
    `
    const UseDeferredAfterMemo = () => {
      
      const id = useId();
      
      const [ keyword, setKeyword ] = useState("")
      
      const handleChange = (e) => {
        e.preventDefault();
        
        setKeyword(e.target.value)
      }
      
      return(
        <FormWrapperDeferred>
        <label htmlFor={\`\${id}-type\`}>Type here your entry</label>
        <input 
        id={\`\${id}-type\`}
        value={keyword}
        onChange={handleChange}
        />
        /**here i just add the sub component */
        <HeavyComponentAfterFirst keyword={keyword}/>
        </FormWrapperDeferred>
        )
      }
      
      export default UseDeferredAfterMemo;
      `
    },
    {
    id: 108,
    name: 'UseDeferredAfterHook - Use Deferred Value Hook Pattern',
    code:   
    `
    const UseDeferredAfterHook = () => {

      const id = useId();
  
      const [ keyword, setKeyword ] = useState("")

      /**here the 'useDeferredValue' is implemented, and has a 'keyword'
       * as a parameter solving the delay issue*/
      const deferredKeyword = useDeferredValue(keyword)
  
      const handleChange = (e) => {
          e.preventDefault();
  
          setKeyword(e.target.value)
      }
    
          return(
              <FormWrapperDeferred>
                  <label htmlFor={\`\${id}-type\`}>Type here your entry</label>
                  <input 
                      id={\`\${id}-type\`}
                      value={keyword}
                      onChange={handleChange}
                  />
                  /**here i drill down the 'keyword' to the sub component*/
                  <HeavyComponentAfterHook keyword={deferredKeyword}/>
              </FormWrapperDeferred>
          )
      }
      
      export default UseDeferredAfterHook;
      `
    },
    {
    id: 109,
    name: 'BooksUseTransitionBefore - useTransition hook pattern',
    code:   
    `
      const  BooksUseTransitionBefore = () => {
        const [section, setSection] = useState("Cover");
      
        const sectionHandler = (sec) => {
          setSection(sec);
        };
        return (
          <BooksUseTransitionContainer>
            <ButtonUseTransition onClick={() => sectionHandler("Cover")}>
              Book Cover
            </ButtonUseTransition>
            <ButtonUseTransition onClick={() => sectionHandler("Reviews")}>
              Book Reviews
            </ButtonUseTransition>
            <ButtonUseTransition onClick={() => sectionHandler("Writer")}>
              Book's Writer
            </ButtonUseTransition>
      
            {section === "Cover" ? (
              <Cover />
            ) : section === "Reviews" ? (
              <Reviews />
            ) : (
              <Writer />
            )}
              
          </BooksUseTransitionContainer>
        );
      }
      
      export default BooksUseTransitionBefore;
      `
    },
    {
    id: 110,
    name: 'Cover - useTransition hook pattern',
    code:   
    `
      const Cover = () => {
        return (
          <CoverContainer>
            <Emoji role="img" aria-label="Book Cover Emoji">
              📚
            </Emoji>
          </CoverContainer>
        );
      };
      
      export default Cover;
      `
    },
    {
    id: 111,
    name: 'Reviews - useTransition hook pattern',
    code:   
    `
      const Reviews = () => {
        return (
          <ReviewsContainer>
            <ul>
              {Array(300)
                .fill("")
                .map((_, i) => (
                  <Review key={i} index={i} />
                ))}
            </ul>
          </ReviewsContainer>
        );
      };
      
      const Review = ({ index }) => {
        const init = performance.now();
        while (init > performance.now() - 3) {
          // Fake slow down.
        }
        return <li>Review #{index}</li>;
      };
      
      export default Reviews;
      `
    },
    {
    id: 112,
    name: 'Writer - useTransition hook pattern',
    code:   
    `
      const Writer = () => {
        return (
          <>
              <WriterContainer>
                  Codelicks Academy
              </WriterContainer>
          </>
        )
      };
      
      export default Writer;
      `
    },
    {
    id: 113,
    name: 'BooksUseTransitionAfter - useTransition hook pattern',
    code:   
    `
    const  BooksUseTransitionAfter = () => {

      const [section, setSection] = useState("Cover");
      const [isPending, startTransition] = useTransition();
    
      const sectionHandler = (sec) => {
        /**allows me to over write the render so the app wont 
         * freeze , so i can click in another section*/
        startTransition(() => {
            setSection(sec);
        })
      };
      return (
        <BooksUseTransitionContainer>
          <div>
            <ButtonUseTransition onClick={() => sectionHandler("Cover")}>
                Book Cover
            </ButtonUseTransition>
            <ButtonUseTransition onClick={() => sectionHandler("Reviews")}>
                Book Reviews
            </ButtonUseTransition>
            <ButtonUseTransition onClick={() => sectionHandler("Writer")}>
                Book's Writer
            </ButtonUseTransition>
          </div>  
    
          <section>
            {isPending && "Loading ..."}
            {section === "Cover" ? (
                <Cover />
            ) : section === "Reviews" ? (
                <Reviews />
            ) : (
                <Writer />
            )}
          </section>
            
        </BooksUseTransitionContainer>
      );
    }
    
    export default BooksUseTransitionAfter;
      `
    },
    {
    id: 114,
    name: 'ButtonAsCleanCode - Clean code Tips',
    code:   
    `
    /**i set a default values in  order to render a size and also spread all the values*/
    const ButtonAsCleanCode = ({ size = "m", className = "", ...otherProps }) => {
        return (
          <button
            {...otherProps}
            /**this is how the module css is accessed, an the rest of the props comes from the end-component (styles[size] and 'classname' )*/
            className={\`\${styles.button} \${styles[size]} \${className}\`}
          />
        );
      };
      
      export default ButtonAsCleanCode;
    `
    },
    {
    id: 115,
    name: 'module css styles - Clean code Tips',
    code:   
    `
    ...
    /**extract from module css styles*/
    .button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.3s ease;
      border-radius: 4px;
      background-color: #007bff;
      color: white;
    }
    
    .s {
      padding: 5px 10px;
      font-size: 14px;
    }
    
    .m {
      padding: 10px 20px;
      font-size: 18px;
    }
    
    .l {
      padding: 15px 30px;
      font-size: 24px;
    }
    ...
    `
    },
    {
    id: 116,
    name: 'ButtonAsCleanCodeApp - Clean code Tips',
    code:   
    `
      const style = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      };
      
      const ButtonAsCleanCodeApp = () => {
      
        return (
          /**this is the size value \`\${styles[size] for each resulting in a custom size*/
          <div style={style}>
            <ButtonAsCleanCode size="s">Small</ButtonAsCleanCode>
            <ButtonAsCleanCode size="m">Medium</ButtonAsCleanCode>
            <ButtonAsCleanCode size="l">Large</ButtonAsCleanCode>
            <ButtonAsCleanCode size="xl">xLarge</ButtonAsCleanCode>
          </div>
        );
      }
      
      export default ButtonAsCleanCodeApp;
    `
    },
    {
    id: 117,
    name: 'ButtonAsCleanCodeAppAfter - Clean code Tips',
    code:   
    `
    const style = {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
    };
    
    const ButtonAsCleanCodeAppAfter = () => {
      
        return (
          <div style={style}>
            <ButtonAsCleanCode size="s">Small</ButtonAsCleanCode>
            <ButtonAsCleanCode size="m">Medium</ButtonAsCleanCode>
            <ButtonAsCleanCode size="l">Large</ButtonAsCleanCode>
            <ButtonAsCleanCode size="xl">xLarge</ButtonAsCleanCode>
            /**here i add the anchor tag*/
            <a href="/21">Link</a>
          </div>
        );
      }
      
      export default ButtonAsCleanCodeAppAfter;
    `
    },
    {
    id: 118,
    name: 'ButtonAsCleanCodeAppAfterWrap - Clean code Tips',
    code:   
    `
    const style = {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      alignItems: "center",
    };
    
    const ButtonAsCleanCodeAppAfterWrap = () => {
    
      return (
        <div style={style}>
          <ButtonAsCleanCode size="s">Small</ButtonAsCleanCode>
          <ButtonAsCleanCode size="m">Medium</ButtonAsCleanCode>
          <ButtonAsCleanCode size="l">Large</ButtonAsCleanCode>
          <ButtonAsCleanCode size="xl">xLarge</ButtonAsCleanCode>
    
          /**here i wrap the anchor tag, it get the styles but  
           * it does not behave entirely as the rest of the buttons */
            <ButtonAsCleanCode size="xl">
                <a href="/21">Link</a>
            </ButtonAsCleanCode>
        </div>
      );
    }
    
    export default ButtonAsCleanCodeAppAfterWrap;
    `
    },
    {
    id: 119,
    name: 'ButtonAsCleanCodeAs - Clean code Tips',
    code:   
    `
    /**here i add 'As' prop and a default 'button' */
    const ButtonAsCleanCodeAs = ({ As = "button", size = "m", className = "", ...otherProps }) => {
        return (
          {/*by adding the tag it will combine styles + funtionality **/}
          <As
            {...otherProps}
            className={\`\${styles.button} \${styles[size]} \${className}\`}
          />
        );
      };
      
      export default ButtonAsCleanCodeAs;
    `
    },
    {
    id: 120,
    name: 'ButtonAsCleanCodeAppAfterPattern - Clean code Tips',
    code:   
    `
      const style = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      };
      
      const ButtonAsCleanCodeAppAfterPattern = () => {
      
        return (
          <div style={style}>
          /**here i wrap using the new tag that can behave as anchor tag or as a button */
            <ButtonAsCleanCodeAs size="s">Small</ButtonAsCleanCodeAs>
            <ButtonAsCleanCodeAs size="m">Medium</ButtonAsCleanCodeAs>
            <ButtonAsCleanCodeAs size="l">Large</ButtonAsCleanCodeAs>
            <ButtonAsCleanCodeAs size="xl">xLarge</ButtonAsCleanCodeAs>
      
              <ButtonAsCleanCodeAs As='a' size="xl" href="/21" >
                  Link
              </ButtonAsCleanCodeAs>
          </div>
        );
      }
      
      export default ButtonAsCleanCodeAppAfterPattern;
    `
    },
    {
    id: 121,
    name: 'ShoppingCounter - Clean code Tips',
    code:   
    `
    /**the state that will hold the counter*/
    type State = {
      count: number;
    };
    
    /**the action that will be performed*/
    type Action = {
      type: "INCREMENT" | "DECREMENT";
    };
    
    /**this reducer will define the action for the given state*/
    function reducer(state: State, action: Action) {
      switch (action.type) {
        case "INCREMENT":
          return { count: state.count + 1 };
        case "DECREMENT":
          return { count: state.count - 1 };
        default:
          throw new Error("Provide a valid action.");
      }
    }
    
    type CartContext = {
      state: { count: number };
      dispatch: Dispatch<Action>;
    };
    
    /**this validates that the context exists*/
    export const Context = createContext<CartContext | null>(null);
    
    const ShoppingCounter = () => {

      /**the state is consumed using the useReducer*/
      const [state, dispatch] = useReducer(reducer, { count: 0 });
      return (
        <Context.Provider value={{ state, dispatch }}>
            <ShoppingCounterWrapper>
                <Display />
                <Buttons />
            </ShoppingCounterWrapper>
        </Context.Provider>
      );
    }
    
    export function useCartContext() {
      const value = useContext(Context);

      /**this validates that the components are inside of the context*/
      if (value === null) {
        throw new Error("Must be wrapped inside Context.Provider");
      }
    
      return value;
    }
    
    export default ShoppingCounter;
    `
    },
    {
    id: 122,
    name: 'Buttons - Clean code Tips',
    code:   
    `
    const Buttons = () => {
        const { dispatch } = useCartContext();
        return (
          <ButtonsOptContextStyle >
            <SingleButtonWrapper
              className="button"
              onClick={() => dispatch({ type: "DECREMENT" })}
            >
              ➖
            </SingleButtonWrapper>
            <SingleButtonWrapper
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              ➕
            </SingleButtonWrapper>
          </ButtonsOptContextStyle>
        );
      };
      
      export default Buttons;
    `
    },
    {
    id: 123,
    name: 'Display - Clean code Tips',
    code:   
    `
      const Display = () => {

        /**here i destructure the 'count' from the 'state' and pull 
         * from the context*/
        const {
          state: { count },
        } = useCartContext();

        return (
          <DisplayWrapper>
              {count}
          </DisplayWrapper>
        );
      };
      
      export default Display;
    `
    },
    {
    id: 124,
    name: 'CartProvider - Clean code Tips',
    code:   
    `
    /**this logic will be in a separate file named 'optimize context api'*/
    type State = {
      count: number;
    };
    
    type Action = {
      type: "INCREMENT" | "DECREMENT";
    };
    
    function reducer(state: State, action: Action) {
      switch (action.type) {
        case "INCREMENT":
          return { count: state.count + 1 };
        case "DECREMENT":
          return { count: state.count - 1 };
        default:
          throw new Error("Provide a valid action.");
      }
    }
    
    type CartContext = {
      state: { count: number };
      dispatch: Dispatch<Action>;
    };
    
    export const Context = createContext<CartContext | null>(null);
    
    /**this new type of data will be 'ReactNode' this way i can have
     * properly validated 'React components' as children*/
    type CartProviderProps = {
        children: ReactNode
      };
    
    /**this is the new code for the Provider, will have state and dispatch actions 
     * to any node as a children*/  
    export const CartProvider = ({ children }: CartProviderProps) => {
    
        const [state, dispatch] = useReducer(reducer, { count: 0 });
        return (
            <Context.Provider value={{ state, dispatch }}>
                {children}
            </Context.Provider>
          );
    }
    
    
    
    export function useCartContext() {
      const value = useContext(Context);
    
      if (value === null) {
        throw new Error("Must be wrapped inside Context.Provider");
      }
    
      return value;
    }
    `
    },
    {
    id: 125,
    name: 'ButtonsAfter - Clean code Tips',
    code:   
    `
    import React from "react";
    /**this is the line that changes, the rest of the code is exactly the same'*/
    import { useCartContext } from "./optimize.context.api.after.tsx";
    import { ButtonsOptContextStyle, SingleButtonWrapper } from "../styledcomponents/styled.components.js";


    const ButtonsAfter = () => {
      const { dispatch } = useCartContext();
      return (
        <ButtonsOptContextStyle >
          <SingleButtonWrapper
            className="button"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            ➖
          </SingleButtonWrapper>
          <SingleButtonWrapper
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            ➕
          </SingleButtonWrapper>
        </ButtonsOptContextStyle>
      );
    };

    export default ButtonsAfter;
    `
    },
    {
    id: 126,
    name: 'DisplayAfter - Clean code Tips',
    code:   
    `
    import React from "react";
    /**this is the line that changes, the rest of the code is exactly the same'*/
    import { useCartContext } from "./optimize.context.api.after.tsx";
    import { DisplayWrapper } from "../styledcomponents/styled.components.js";

    const DisplayAfter = () => {
      const {
        state: { count },
      } = useCartContext();
      return (
        <DisplayWrapper>
            {count < 0 ? 0 : count}
        </DisplayWrapper>
      );
    };

    export default DisplayAfter;
    `
    },
    {
    id: 127,
    name: 'CartProviderPerformance - Clean code Tips',
    code:   
    `
    
    type State = {
      count: number;
    };
    
    type Action = {
      type: "INCREMENT" | "DECREMENT";
    };
    
    function reducer(state: State, action: Action) {
      switch (action.type) {
        case "INCREMENT":
          return { count: state.count + 1 };
        case "DECREMENT":
          return { count: state.count - 1 };
        default:
          throw new Error("Provide a valid action.");
      }
    }
    
    /**this type of data will handle only state (value)*/
    type StateContext =  { count: number };

    /**this type of data will handle only dispatch (actions)*/
    type DispatchContext =  Dispatch<Action>;
    
    /**context creation and verification ( for state context )*/
    export const StateContext = createContext<StateContext | null>(null);

    /**context creation and verification ( for actions context )*/
    export const DispatchContext = createContext<DispatchContext | null>(null);
    
    type CartProviderProps = {
        children: ReactNode
      };
    
    export const CartProviderPerformance = ({ children }: CartProviderProps) => {
    
        const [state, dispatch] = useReducer(reducer, { count: 0 });
        return (
            {/**one context will wrap the other context/s and both will wrap the 
              children react Nodes*/}
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    {children}
                </StateContext.Provider>
            </DispatchContext.Provider>
          );
    }
    
    
    /**this will be the hook that validate sub nodes and will be use for states ( values )*/
    export function useValueContext() {
      const value = useContext(StateContext);
    
      if (value === null) {
        throw new Error("Must be wrapped inside Context.Provider");
      }
    
      return value;
    }
    
    /**this will be the hook that validate sub nodes and will be use for dispatch ( actions )*/
    export function useDispatchContext() {
        const value = useContext(DispatchContext);
      
        if (value === null) {
          throw new Error("Must be wrapped inside Context.Provider");
        }
      
        return value;
      }
    `
    },
    {
    id: 128,
    name: 'CartProviderPerformance - Clean code Tips',
    code:   
    `
    const DisplayPerformance = () => {

      /**here is the refactor to pull state ( value/s ) from the context that handle it*/
      const  { count } = useValueContext();
    
      return (
        <DisplayWrapper>
            {count < 0 ? 0 : count}
        </DisplayWrapper>
      );
    };
    
    export default DisplayPerformance;
    `
    },
    {
    id: 129,
    name: 'ButtonsPerformance - Clean code Tips',
    code:   
    `
    const ButtonsPerformance = () => {

      /**here is the refactor to pull dispatch ( action/s ) from the context that handle it*/
      const dispatch = useDispatchContext();
    
      return (
        <ButtonsOptContextStyle >
          <SingleButtonWrapper
            className="button"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            ➖
          </SingleButtonWrapper>
          <SingleButtonWrapper
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            ➕
          </SingleButtonWrapper>
        </ButtonsOptContextStyle>
      );
    };
    
    export default ButtonsPerformance;
    `
    },
    {
    id: 130,
    name: 'ShoppingCounterPerformance - Clean code Tips',
    code:   
    `
    const ShoppingCounterPerformance = () => {

      return (
        <CartProviderPerformance>
            <SectionItemCenterWrapper>
                <ShoppingCounterWrapper>

                {/**here is the refactor to mount the two sub 
                  components that previously pull state and actions from their contexts*/}
                    <DisplayPerformance />
                    <ButtonsPerformance />
                </ShoppingCounterWrapper>
            </SectionItemCenterWrapper>
        </CartProviderPerformance>
      );
    }
    
    export default ShoppingCounterPerformance;
    `
    },
    {
    id: 131,
    name: 'Folder Structure - Clean code Tips',
    code:   
    `
    src/
      ├── api
      ├── assets
      │   ├── fonts
      │   └── images
      ├── components
      │   ├── common
      │   └── transitions
      ├── config
      ├── constants
      ├── context
      ├── views
      ├── helpers
      ├── hooks
      ├── intl
      ├── layout
      ├── services
      ├── store
      ├── styles
      └── types
    `
    },
    {
    id: 132,
    name: 'api - api layer and async operations',
    code:   
    `
    const axiosParams = {
      // Base URL should be set via enviroment
  
        baseURL:
            process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "/"
    }
    
    const axiosInstance = axios.create(axiosParams);
    
    const api = (axios) => {
    
        return{
            get: (url, config = {}) => axios.get(url,config),
            delete: (url, config = {}) => axios.delete(url,config),
            post: (url, config = {}) => axios.post(url,config),
            patch: (url, config = {}) => axios.patch(url,config),
            put: (url, config = {}) => axios.put(url,config),
        }
    }
    
    export default api(axiosInstance);
    `
    },
    {
    id: 133,
    name: 'fetchUsers - api layer and async operations',
    code:   
    `
    const URLS = {
      fetchUsersUrl: "users"
    }
    
    export const fetchUsers = () => {
        return apiLayerAsyncOperationsBefore.get(
            URLS.fetchUsersUrl, {
                baseURL:"https://jsonplaceholder.typicode.com/"
            }
        )
    }
    `
    },
    {
    id: 134,
    name: 'UsersApi - api layer and async operations',
    code:   
    `
    const useFecthUsers = () => {
      const [ users, setUsers ] = useState([])
  
      const initFetchUsers = async () => {
          const response = await fetchUsers()
          setUsers(response.data)
      };
  
      const CleanUpUsers = () => {
          return setUsers([])
      }
  
      return {
          users,
          initFetchUsers,
          CleanUpUsers
      }
  }
  
  const UsersApi = () => {
      const { users, initFetchUsers, CleanUpUsers } = useFecthUsers();
  
      useEffect(() => {
          initFetchUsers();
      }, []);
  
      return(
              <OutsideTable>

                <ButtonWrapper>
                      <ButtonGeneral>
                          <button 
                            onClick={() => 
                              initFetchUsers()}
                              >Fetch Users</button>    
                      </ButtonGeneral>
                      <ButtonGeneral>
                          <button 
                            onClick={() => 
                              CleanUpUsers()}
                              >Clean Up Users</button>    
                      </ButtonGeneral>
                  </ButtonWrapper> 

              <TableTitleWrapper>
                  <label>name:</label>
                  <label>email:</label>
              </TableTitleWrapper>

              {users.map((user) => {
                  const { name, id, email } = user;
                  return( 
                      <ul key={id}>
                          <li>
                              {name}  
                          </li>
                          <li>
                              {email} 
                          </li>
                      </ul>
                  )
              })}
              </OutsideTable>
          )
      }
      
      export default UsersApi;
      `
    },
    {
    id: 135,
    name: 'UsersApiStates - try and catch version',
    code:   
    `
    /**these are the 'API states' */
    const ApiStatus = "IDLE" | "PENDING" | "SUCESS" | "ERROR";

    const useFecthUsers = () => {
        const [ users, setUsers ] = useState([])
        /**this state will hold the API states that will mutate*/
        const [ fetchUsersStatus, setFetchUsersStatus ] = useState("IDLE")

        const initFetchUsers = async () => {
          /**here the try and catch is implemented to handle the API states*/
            try {
              /*"PENDING" until the response is get*/
              setFetchUsersStatus("PENDING");
              const response = await fetchUsers();
              /*"SUCESS" once the response is get*/
              setFetchUsersStatus("SUCESS");
              setUsers(response.data); 
            } catch (err) {
              /*"ERROR" if the response is not received*/
                setFetchUsersStatus("ERROR")
            }
        };

        const CleanUpUsers = () => {
            return setUsers([])
        }

        return {
            users,
            fetchUsersStatus,
            initFetchUsers,
            CleanUpUsers
        }
    }


    const UsersApiStates = () => {
        const { users, fetchUsersStatus, initFetchUsers, CleanUpUsers } = useFecthUsers();

        useEffect(() => {
            initFetchUsers();
        }, []);

        return(
            <OutsideTable>
              <ButtonWrapper>
                    <ButtonGeneral>
                        <button onClick={() => initFetchUsers()}
                            {/*'fetchUsersStatus' switch on "PENDING"*/}
                            >{fetchUsersStatus === "PENDING" ? "Loading..." : "Fetch Users"}
                        </button>    
                    </ButtonGeneral>
                    <ButtonGeneral>
                        <button onClick={() => CleanUpUsers()}>Clean Up Users</button>    
                    </ButtonGeneral>
                </ButtonWrapper> 
            <TableTitleWrapper>
                <label>name:</label>
                <label>email:</label>
            </TableTitleWrapper>
            {users.map((user) => {
                const { name, id, email } = user;
                return( 
                    <ul key={id}>
                        <li>
                            {name}  
                        </li>
                        <li>
                            {email} 
                        </li>
                    </ul>
                )
            })}
            </OutsideTable>
        )
    }

    export default UsersApiStates;
      `
    },
    {
    id: 136,
    name: 'UsersApiStatesHelper - try and catch version',
    code:   
    `
    const ApiStatus = "IDLE" | "PENDING" | "SUCESS" | "ERROR";

    const useFecthUsers = () => {
        const [ users, setUsers ] = useState([])
        const [ fetchUsersStatus, setFetchUsersStatus ] = useState("IDLE")

        const initFetchUsers = async () => {
            setFetchUsersStatus("PENDING");
            console.log("resulting state => PENDING")

            /** here the 'withAsync' helper function is implemented */
            const { response, error } = await withAsync(() => fetchUsers())

            /** try and catch is substituted by if statements, because outputs
             * comes from 'withAsync'*/
            if (error) {

                setFetchUsersStatus("ERROR")
                console.log("resulting state => ERROR")

            }else if (response) {

                setFetchUsersStatus("SUCESS");
                console.log("resulting state => SUCESS")
                setUsers(response); 
                
            }
        };

        const CleanUpUsers = () => {
            return setUsers([])
        }

        return {
            users,
            fetchUsersStatus,
            initFetchUsers,
            CleanUpUsers
        }
    }


    const UsersApiStatesHelper = () => {
        const { users, fetchUsersStatus, initFetchUsers, CleanUpUsers } = useFecthUsers();

        useEffect(() => {
            initFetchUsers();
        }, []);

        return(
            <OutsideTable>
              <ButtonWrapper>
                    <ButtonGeneral>
                        <button onClick={() => initFetchUsers()}
                            >{fetchUsersStatus === "PENDING" ? "Loading..." : "Fetch Users"}
                        </button>    
                    </ButtonGeneral>
                    <ButtonGeneral>
                        <button onClick={() => CleanUpUsers()}>Clean Up Users</button>    
                    </ButtonGeneral>
                </ButtonWrapper> 
            <TableTitleWrapper>
                <label>name:</label>
                <label>email:</label>
            </TableTitleWrapper>
            {users.map((user) => {
                const { name, id, email } = user;
                return( 
                    <ul key={id}>
                        <li>
                            {name}  
                        </li>
                        <li>
                            {email} 
                        </li>
                    </ul>
                )
            })}
            </OutsideTable>
        )
    }

    export default UsersApiStatesHelper;
      `
    },
    {
    id: 137,
    name: 'withAsync(fn) - helper function version',
    code:   
    `
    /** 'withAsync(fn)' will verify that a function is received, will handle
     * with a try and catch the 'response' or the 'error' serving the 
     * outputs to be used in the 'fetchUsers()'*/

    export async function withAsync(fn) {

          try {
              if (typeof fn !== "function") {
                  throw new Error("The arg. must be a function")
              }
      
              const { data } = await fn()
      
              return{
                  response: data,
                  error: null,
              }
          } catch (error) {
              return{
                  error,
                  response: null,
              }
          }
      }
      `
    },
    {
    id: 138,
    name: 'constants - helper function version',
    code:   
    `
    /** the constants are define and can be easily change and modify 
     * to the use cases*/

      export const IDLE = "IDLE";
      export const PENDING = "PENDING";
      export const SUCESS = "SUCESS";
      export const ERROR = "ERROR";
      `
    },
    {
    id: 139,
    name: 'UsersApiStatesConstants - helper function version',
    code:   
    `
    /** the constants will be imported as follows */
    import { ERROR, PENDING, SUCESS } from "../constants/api.status";

      const useFecthUsers = () => {
          const [ users, setUsers ] = useState([])
          const [ fetchUsersStatus, setFetchUsersStatus ] = useState("IDLE")
      
          const initFetchUsers = async () => {
              
              /** the constants will replace each string in the flow */
              setFetchUsersStatus(PENDING);
              console.log("resulting state ==> ", PENDING)
              const { response, error } = await withAsync(() => fetchUsers())
      
              if (error) {
      
                  setFetchUsersStatus(ERROR)
                  console.log("resulting state => ", ERROR)
      
              }else if (response) {
      
                  setFetchUsersStatus(SUCESS);
                  console.log("resulting state => ", SUCESS)
                  setUsers(response); 
                  
              }
          };
      
          const CleanUpUsers = () => {
              return setUsers([])
          }
      
          return {
              users,
              fetchUsersStatus,
              initFetchUsers,
              CleanUpUsers
          }
      }
      
      
      const UsersApiStatesConstants = () => {
          const { users, fetchUsersStatus, initFetchUsers, CleanUpUsers } = useFecthUsers();
      
          useEffect(() => {
              initFetchUsers();
          }, []);
      
          return(
              <OutsideTable>
                <ButtonWrapper>
                      <ButtonGeneral>
                          <button onClick={() => initFetchUsers()}
                              >{fetchUsersStatus === PENDING ? "Loading..." : "Fetch Users"}
                          </button>    
                      </ButtonGeneral>
                      <ButtonGeneral>
                          <button onClick={() => CleanUpUsers()}>Clean Up Users</button>    
                      </ButtonGeneral>
                  </ButtonWrapper> 
              <TableTitleWrapper>
                  <label>name:</label>
                  <label>email:</label>
              </TableTitleWrapper>
              {users.map((user) => {
                  const { name, id, email } = user;
                  return( 
                      <ul key={id}>
                          <li>
                              {name}  
                          </li>
                          <li>
                              {email} 
                          </li>
                      </ul>
                  )
              })}
              </OutsideTable>
          )
      }
      
      export default UsersApiStatesConstants;
      `
    },
    {
    id: 140,
    name: 'apiStatus - helper function version',
    code:   
    `
    /** the constants will be imported as follows */
    export const IDLE = "IDLE";
    export const PENDING = "PENDING";
    export const SUCESS = "SUCESS";
    export const ERROR = "ERROR";

    /**from the previous individual states to  'apiStatus' */
    export const apiStatus = {
        IDLE,
        PENDING,
        SUCESS,
        ERROR
    }
      `
    },
    {
    id: 141,
    name: 'UsersApiStatesObject - constant object version',
    code:   
    `
    /** the constants will be imported as follows */
    const useFecthUsers = () => {
    const [ users, setUsers ] = useState([])
    const [ fetchUsersStatus, setFetchUsersStatus ] = useState(apiStatus.IDLE)
  
      const initFetchUsers = async () => {
          setFetchUsersStatus(apiStatus.PENDING);
          console.log("resulting state ==> ", apiStatus.PENDING)
          const { response, error } = await withAsync(() => fetchUsers())
  
          if (error) {
  
              setFetchUsersStatus(apiStatus.ERROR)
              console.log("resulting state => ", apiStatus.ERROR)
  
          }else if (response) {
  
              setFetchUsersStatus(apiStatus.SUCESS);
              console.log("resulting state => ", apiStatus.SUCESS)
              setUsers(response); 
              
          }
      };
  
      const CleanUpUsers = () => {
          return setUsers([])
      }
  
      return {
          users,
          fetchUsersStatus,
          initFetchUsers,
          CleanUpUsers
      }
  }
  
  
  const UsersApiStatesObject = () => {
        const { users, fetchUsersStatus, initFetchUsers, CleanUpUsers } = useFecthUsers();
    
        useEffect(() => {
            initFetchUsers();
        }, []);
    
        return(
            <OutsideTable>
              <ButtonWrapper>
                    <ButtonGeneral>
                        <button onClick={() => initFetchUsers()}
                            >{fetchUsersStatus === apiStatus.PENDING ? "Loading..." : "Fetch Users"}
                        </button>    
                    </ButtonGeneral>
                    <ButtonGeneral>
                        <button onClick={() => CleanUpUsers()}>Clean Up Users</button>    
                    </ButtonGeneral>
                </ButtonWrapper> 
            <TableTitleWrapper>
                <label>name:</label>
                <label>email:</label>
            </TableTitleWrapper>
            {users.map((user) => {
                const { name, id, email } = user;
                return( 
                    <ul key={id}>
                        <li>
                            {name}  
                        </li>
                        <li>
                            {email} 
                        </li>
                    </ul>
                )
            })}
            </OutsideTable>
        )
    }
    
    export default UsersApiStatesObject;
      `
    },
    {
    id: 142,
    name: 'UsersApiStatesHooksAndObject - constant object version',
    code:   
    `
  /**Error => error  will be Error => isError*/  
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  
  /**here will be calculated the current status */
  const prepareStatuses =  ( currentStatus ) => {
      const statuses = {};
      for ( const status of defaultApiStatuses ) {
          /**this line creates the state as this shape Error */
          const normalizedStatus = capitalize(status.toLowerCase());
           /**the line below creates the state as this shape isError */
          const normalizedStatusKey = \`is\${normalizedStatus}\`;
          /**this line compares to get the resulting status */
          statuses[normalizedStatusKey] = status === currentStatus;
      }
      return statuses;
  }
  
  /**then the calculation get memoized, so the calculation does not 
 * afect the app performance */

/**i define 'IDLE'  as a constant initial param*/
  export const useApiStatus = (currentStatus = IDLE ) => {
      const [ status, setStatus ] = useState(currentStatus);
      const statuses = useMemo(() => prepareStatuses(status), [status])
  
      return{
          status,
          setStatus,
          ...statuses,
      }
  }
      `
    },
    {
    id: 143,
    name: 'UsersApiStatesHookAndObject - constant object version',
    code:   
    `
    const useFetchUsers = () => {
        const [ users, setUsers ] = useState([])
        
        /**here the 'useApiStatus' is implemented */
        const {
            status: fetchUsersStatus,
            setStatus: setFetchUsersStatus,
            isIdle:isFetchUsersStatusIdle,
            isPending: isFetchUsersStatusPending,
            isError: isFetchUsersStatusError,
            isSuccess: isFetchUsersStatusSUCCESS,
        } = useApiStatus(apiStatus.IDLE);
    
        const initFetchUsers = async () => {
            setFetchUsersStatus(apiStatus.PENDING);
            console.log("resulting state ==> ", apiStatus.PENDING)
            const { response, error } = await withAsync(() => fetchUsers())
    
            if (error) {
    
                setFetchUsersStatus(apiStatus.ERROR)
                console.log("resulting state => ", apiStatus.ERROR)
    
            }else if (response) {
    
                setFetchUsersStatus(apiStatus.SUCESS);
                console.log("resulting state => ", apiStatus.SUCESS)
                setUsers(response); 
                
            }
        };
    
        const CleanUpUsers = () => {
            return setUsers([])
        }
        /** the statuses once consumed they are used whereever is needed*/
        return {
            users,
            isFetchUsersStatusIdle,
            isFetchUsersStatusPending,
            isFetchUsersStatusError,
            isFetchUsersStatusSUCCESS,
            initFetchUsers,
            CleanUpUsers
        }
    }
    

    const UsersApiStatesHookAndObject = () => {
        const { users,
                initFetchUsers,
                isFetchUsersStatusError,
                isFetchUsersStatusIdle,
                isFetchUsersStatusPending,
                isFetchUsersStatusSUCCESS,
                CleanUpUsers } = useFetchUsers();
    
        useEffect(() => {
            initFetchUsers();
        }, []);
    
        return(
            <OutsideTable>
              <ButtonWrapper>
                    <ButtonGeneral>
                        <button onClick={() => initFetchUsers()}
                            >{isFetchUsersStatusIdle ? "Loading..." : "Fetch Users"}
                        </button>    
                    </ButtonGeneral>
                    <ButtonGeneral>
                        <button onClick={() => CleanUpUsers()}>Clean Up Users</button>    
                    </ButtonGeneral>
                </ButtonWrapper> 
            <TableTitleWrapper>
                <label>name:</label>
                <label>email:</label>
            </TableTitleWrapper>
            {users.map((user) => {
                const { name, id, email } = user;
                return( 
                    <ul key={id}>
                        <li>
                            {name}  
                        </li>
                        <li>
                            {email} 
                        </li>
                    </ul>
                )
            })}
            </OutsideTable>
        )
    }
    
     export default UsersApiStatesHookAndObject;
      `
    },
    {
    id: 144,
    name: 'LazyLoader - constant object version',
    code:   
    `
    // LazyLoader component definition
const LazyLoader = (props) => {  
    // Destructure show and delay from props, with default values
    const { show = false, delay = 0 } = props;
    // State to manage whether the loader should be shown
    const [showLoader, setShowLoader] = useState(false);

    // useEffect to handle the show and delay logic
    useEffect(() => {
        let timeout;

        // If show is false, hide the loader immediately
        if (!show) {
            setShowLoader(false);
            return;
        }

        // If delay is 0, show the loader immediately
        if (delay === 0) {
            setShowLoader(true);
            return;   
        } else {
            // Otherwise, set a timeout to show the loader after the specified delay
            timeout = setTimeout(() => setShowLoader(true), delay);
        }

        // Cleanup function to clear the timeout
        return () => {
            clearInterval(timeout);
        }
    }, [show, delay]); // Dependencies for useEffect

    // Return "Loading..." if showLoader is true, otherwise return the default content
    return showLoader ? "Loading..." : props.default;
    }

    // Export the LazyLoader component as the default export
    export default LazyLoader;
      `
    },
    {
    id: 145,
    name: 'UsersApiLazyLoaderHookAndObject - constant object version',
    code:   
    `
    const useFetchUsers = () => {
    const [ users, setUsers ] = useState([])
    
    const {
        status: fetchUsersStatus,
        setStatus: setFetchUsersStatus,
        isIdle:isFetchUsersStatusIdle,
        isPending: isFetchUsersStatusPending,
        isError: isFetchUsersStatusError,
        isSuccess: isFetchUsersStatusSUCCESS,
    } = useApiStatus(apiStatus.IDLE);

    const initFetchUsers = async () => {
        setFetchUsersStatus(apiStatus.PENDING);
        console.log("resulting state ==> ", apiStatus.PENDING)
        const { response, error } = await withAsync(() => fetchUsers())

        if (error) {

            setFetchUsersStatus(apiStatus.ERROR)
            console.log("resulting state => ", apiStatus.ERROR)

        }else if (response) {

            setFetchUsersStatus(apiStatus.SUCESS);
            console.log("resulting state => ", apiStatus.SUCESS)
            setUsers(response); 
            
        }
    };

    const CleanUpUsers = () => {
        return setUsers([])
    }

    return {
        users,
        isFetchUsersStatusIdle,
        isFetchUsersStatusPending,
        isFetchUsersStatusError,
        isFetchUsersStatusSUCCESS,
        initFetchUsers,
        CleanUpUsers
    }
}


const UsersApiLazyLoaderHookAndObject = () => {
    const { users,
            initFetchUsers,
            isFetchUsersStatusError,
            isFetchUsersStatusIdle,
            isFetchUsersStatusPending,
            isFetchUsersStatusSUCCESS,
            CleanUpUsers } = useFetchUsers();

    useEffect(() => {
        initFetchUsers();
    }, []);

    return(
        <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers()}
                        > 
                        {/**instead of the condition the LazyLoader with the props to data flow control */}
                        <LazyLoader show={isFetchUsersStatusPending} delay={500} default="Fetch Users"/>
                    </button>    
                </ButtonGeneral>
                <ButtonGeneral>
                    <button onClick={() => CleanUpUsers()}>Clean Up Users</button>    
                </ButtonGeneral>
            </ButtonWrapper> 
        <TableTitleWrapper>
            <label>name:</label>
            <label>email:</label>
        </TableTitleWrapper>
        {users.map((user) => {
            const { name, id, email } = user;
            return( 
                <ul key={id}>
                    <li>
                        {name}  
                    </li>
                    <li>
                        {email} 
                    </li>
                 </ul>
            )
        })}
        </OutsideTable>
        )
    }

    export default UsersApiLazyLoaderHookAndObject;
      `
    },
    {
    id: 146,
    name: 'useApi - data and logic abstraction',
    code:   
    `
    export function useApi(fn, config = {}) {

    const {initialData} = config;
    const [data, setData] = useState();
    const [error, setError] = useState();
    const {status, setStatus, ...normalizedStatuses} = useApiStatus();

    const exec = async (...args) => {
        try {
            setStatus(PENDING);
            const data = await fn(...args);
            setData(data);
            setStatus(SUCCESS);
            return{
                data,
                error:null
            }
        } catch (error) {
            setError(error);
            setStatus(ERROR);
            return{
                error,
                data:null
            }
        }
    }
        return{
            data,
            setData,
            status,
            setStatus,
            exec,
            ...normalizedStatuses,
        }
    }
    `
    },
    {
    id: 147,
    name: 'UsersApiHookLogicAndDataAbs',
    code:   
    `
    const useFetchUsers = () => {

    const {
        data: users,
        exec: initFetchUsers,
        status: fetchUsersStatus,
        isIdle: isFetchUsersStatusIdle,
        isPending: isFetchUsersStatusPending,
        isError: isFetchUsersStatusError,
        isSuccess: isFetchUsersStatusSuccess,
      } = useApi(() => fetchUsers().then((response) => response.data));

    return {
        users,
        isFetchUsersStatusIdle,
        isFetchUsersStatusPending,
        isFetchUsersStatusError,
        isFetchUsersStatusSuccess,
        initFetchUsers
    }
}


const UsersApiHookLogicAndDataAbs = () => {

    const {
        users,
        initFetchUsers,
        isFetchUsersStatusError,
        isFetchUsersStatusIdle,
        isFetchUsersStatusPending,
        isFetchUsersStatusSuccess } = useFetchUsers();

        useEffect(() => {
            initFetchUsers();
            console.log("resulting users ==> ", users)
        }, []);
    
        return(
            <OutsideTable>
           <ButtonWrapper>
                <ButtonGeneral>
                    <button onClick={() => initFetchUsers() && console.log("fetching users...")}
                        > 
                        {/**instead of the condition the LazyLoader with the props to data flow control */}
                        <LazyLoader show={isFetchUsersStatusPending} delay={500} default="Fetch Users"/>
                    </button>    
                </ButtonGeneral>
            </ButtonWrapper> 
        <TableTitleWrapper>
            <label>name:</label>
            <label>email:</label>
        </TableTitleWrapper>
        {
            users && users.map((user) => {
                const { name, id, email } = user;
                
                return (
                    <ul key={id}>
                        <li>{name}</li>
                        <li>{email}</li>
                    </ul>
                )
            })
        }
        </OutsideTable>
        )
    }

    export default UsersApiHookLogicAndDataAbs;
    `
    },
    {
    id: 148,
    name: 'API layer - SearchMeals - axios cancellation',
    code:   
    `
    const axiosParams = {
    // Set different base URL based on the environment
    baseURL:
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
    };
    
    // Create axios instance with default params
    const axiosInstance = axios.create(axiosParams);
    
    /**cancellation can be due different reasons*/

    /**an abort by an error*/
    export const didAbort = (error) => axios.isCancel(error) && { aborted: true };
    
    /**a cancelation by invalid token ( tokens validate the app in order to let it conseme data)
     * sometimes they expired and can motivate a cancellation*/
    const getCancelSource = () => axios.CancelToken.source();
    
    /**cancellation by an error from axios library*/
    export const isApiError = (error) => axios.isAxiosError(error);
    
    /**'withAbort will take the axios methods and will
     * wrap the app operations so errors can be handled'*/
    const withAbort = (fn) => {
      const executor = async (...args) => {
        const originalConfig = args[args.length - 1];
        const { abort, ...config } = originalConfig;
    
        if (typeof abort === "function") {
          const { cancel, token } = getCancelSource();
          config.cancelToken = token;
          abort(cancel);
        }
    
        try {
          if (args.length > 2) {
            const [url, body] = args;
            return await fn(url, body, config);
          } else {
            const [url] = args;
            return await fn(url, config);
          }
        } catch (error) {
          console.log("api error", error);
    
          if (didAbort(error)) {
            error.aborted = true;
          }
    
          throw error;
        }
      };
    
      return executor;
    };
    
    /** will wrap methods as this*/
    const api = (axios) => {
      return {
        get: (url, config = {}) => withAbort(axios.get)(url, config),
        delete: (url, config = {}) => withAbort(axios.delete)(url, config),
        post: (url, body, config = {}) => withAbort(axios.post)(url, body, config),
        patch: (url, body, config = {}) =>
          withAbort(axios.patch)(url, body, config),
        put: (url, body, config = {}) => withAbort(axios.put)(url, body, config),
      };
    };
    
    export default api(axiosInstance);
    `
    },
    {
    id: 149,
    name: 'API layer - SearchMeals - axios cancellation',
    code:   
    `
    /**API method list at https://www.themealdb.com/api.php */
    const URLS = {
    getMeal: "search.php",
    };
    
    /**this is the two parameters object to handle API URL*/
    export const searchMeals = (query, config) => {
      return api
        .get(URLS.getMeal, {
          baseURL: "https://www.themealdb.com/api/json/v1/1/",
          params: {
            s: query,
          },
          ...config,
        })
        .then((res) => res.data.meals);
    };
    `
    },
    {
    id: 150,
    name: 'Adding useFetchMeals hook and SearchMealComponent',
    code:   
    `
     /**this hook will receive and handle requests*/
      export const useFetchMeals = () => {

      const [ meals, setMeals ] = useState([])
      const abortRef = useRef({})

      const handleQuoteError = (error) => {
          if (didAbort(error)) {
              /**request aborted */
              toast.error("Request Aborted!")
          }else{
              /**error happen */
              toast.error("Oh no! Something went wrong!")
          }
      }

      /**here i will receive the api request*/
      const fetchMeals = async (query) => {

          /**a try-catch, in order to receive data or handle possible errors or aborts*/
          try {
              abortRef.current.abort?.(); 
              const newMeals = await searchMeals(query, {
                  abort: (abort) => (abortRef.current.abort = abort)
              })
              setMeals(newMeals)
          } catch (error) {
              /**here the error is been handled*/
              handleQuoteError(error);
          }
      }

      /**here i return the meals ( data value ) and the 
       * fetchMeals ( in order to mount data when app mounts)*/
      return{
          meals,
          fetchMeals,
      }
  }
  /**this component will handle all functionality
   * related to the render */
  const SearchMealComponent = () => {

      /**this is the states and the data that comes from the 
       * 'useFetchMeals' hook */
      const [query, setQuery] = useState("");
      const { meals, fetchMeals } = useFetchMeals();
    
      /**it will mount the set that is been received from the 'fetchMeals'*/
      useEffect(() => {
        fetchMeals(query);
      }, [query]);
    
      return (
        <MainMealContainer>
          <ToastContainer />
          <Form>
            <Fieldset>
              <MealLabel htmlFor="meal">Find your lovely meal</MealLabel>
              <Input
                type="text"
                autoComplete="off"
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                id="meal"
              />
            </Fieldset>
          </Form>
          <div>
            <Title>Meals</Title>
            {/** this conditional styling can be improved*/}
            <MealListContainer>
              {meals.map((meal, index) => (
                <MealItem odd={index % 2 !== 0} key={meal.idMeal}>
                  <p>{meal.strMeal}</p>
                </MealItem>
              ))}
            </MealListContainer>
          </div>
        </MainMealContainer>
      );
    };
    
    export default SearchMealComponent;
    `
    },
    {
    id: 151,
    name: 'Adding withLogger to API layer Meal Search',
    code:   
    `
        const axiosParams = {
      // Set different base URL based on the environment
      baseURL:
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
    };
    
    // Create axios instance with default params
    const axiosInstance = axios.create(axiosParams);
    
    export const didAbort = (error) => axios.isCancel(error) && { aborted: true };
    
    const getCancelSource = () => axios.CancelToken.source();
    
    export const isApiError = (error) => axios.isAxiosError(error);
    
    const withAbort = (fn) => {
      const executor = async (...args) => {
        const originalConfig = args[args.length - 1];
        const { abort, ...config } = originalConfig;
    
        if (typeof abort === "function") {
          const { cancel, token } = getCancelSource();
          config.cancelToken = token;
          abort(cancel);
        }
    
        try {
          if (args.length > 2) {
            const [url, body] = args;
            return await fn(url, body, config);
          } else {
            const [url] = args;
            return await fn(url, config);
          }
        } catch (error) {
          console.log("api error", error);
    
          if (didAbort(error)) {
            error.aborted = true;
          }
    
          throw error;
        }
      };
    
      return executor;
    };
  
    /**here multiple logs will be displayed depending of the kind of error*/
    const withLogger = async (promise) => 
        promise.catch((error) => {
            if (!process.env.REACT_APP_DEBUG_API) throw error;
    
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if(error.request){
                console.log(error.request)
            }else{
                console.log("An error has ocurred",error.message)
            }
            console.log(error.config)
            throw error;
        })
  
  
    const api = (axios) => {
      return {
        get: (url, config = {}) => withLogger(withAbort(axios.get)(url, config)),
        delete: (url, config = {}) => withLogger(withAbort(axios.delete)(url, config)),
        post: (url, body, config = {}) => withLogger(withAbort(axios.post)(url, body, config)),
        patch: (url, body, config = {}) =>
          withLogger(withAbort(axios.patch)(url, body, config)),
        put: (url, body, config = {}) => withLogger(withAbort(axios.put)(url, body, config)),
      };
    };
    
    export default api(axiosInstance);
    `
    },
    {
    id: 152,
    name: 'Adding searchMealsErrorLogin API request',
    code:   
    `
      const URLS = {
      getMeal: "search.php",
    };
    
    /**esentially the name changes so can be add to the new component*/
    export const searchMealsErrorLogin = (query, config) => {
      return api
        .get(URLS.getMeal, {
          baseURL: "https://www.themealdb.com/api/json/v1/1/",
          params: {
            s: query,
          },
          ...config,
        })
        .then((res) => res.data.meals);
    };  
    `
    },
    {
    id: 153,
    name: 'Adding SearchMealComponentErrorLogger',
    code:   
    `
      export const useFetchMeals = () => {
  
      const [ meals, setMeals ] = useState([])
      const abortRef = useRef({})
  
      const fetchMeals = async (query) => {
    
            try {
                abortRef.current.abort?.(); 
                /** essentially will wrap the query*/  
                const newMeals = await searchMealsErrorLogin(query)
                setMeals(newMeals)
            } catch (error) {
                throw new Error("error");
                
            }
        }
    
    
        return{
            meals,
            fetchMeals,
        }
    }
    
    /**and the name convention for the Component*/
    const SearchMealComponentErrorLogger = () => {
        const [query, setQuery] = useState("");
        const { meals, fetchMeals } = useFetchMeals();
      
        useEffect(() => {
          fetchMeals(query);
        }, [query]);
      
        return (
          <MainMealContainer>
        
            <Form>
              <Fieldset>
                <MealLabel htmlFor="meal">Find your lovely meal</MealLabel>
                <Input
                  type="text"
                  autoComplete="off"
                  value={query}
                  onChange={({ target }) => setQuery(target.value)}
                  id="meal"
                />
              </Fieldset>
            </Form>
            <div>
              <Title>Meals</Title>
              <MealListContainer>
                {meals.map((meal, index) => (
                  <MealItem odd={index % 2 !== 0} key={meal.idMeal}>
                    <p>{meal.strMeal}</p>
                  </MealItem>
                ))}
              </MealListContainer>
            </div>
          </MainMealContainer>
        );
      };
      
      export default SearchMealComponentErrorLogger;  
    `
    },
    {
    id: 154,
    name: 'Adding express js server.quotes.js',
    code:   
    `
    /**First import the express library*/
    const express = require("express");
    /**next the local files where the data sets live*/
    const { quotes } = require("./quotes");
    const { quotesOriginal } = require("./quotesOriginal");
    const nanoid = require("nanoid");
    /**requires cors, so the library has be installed*/
    const cors = require("cors");
    const app = express();
    const port = 9000;

    app.use(cors());
    app.use(express.json());

    const sleep = (time = 1000) =>
      new Promise((resolve) => setTimeout(resolve, time));

    const readQuotes = async () => {
      return quotes;
    };

    const addQuote = (quote, author) => {
      const id = nanoid();
      quotes.quotes.unshift({ id, quote, author });
      return id;
    };

    const getQuotesByPage = async (page, limit) => {
      const offset = page * limit;
      const endIndex = offset + limit;
      const quotesData = await readQuotes();
      const quotes = quotesData.quotes.slice(offset, endIndex);
      return {
        quotes,
        hasMore: endIndex < quotesData.quotes.length - 1,
      };
    };

    const getQuotesByCursor = async (cursor, limit) => {
      const endIndex = cursor + limit;
      const quotesData = await readQuotes();
      const quotes = quotesData.quotes.slice(cursor, endIndex);

      return {
        quotes,
        nextCursor: endIndex < quotesData.quotes.length - 1 ? endIndex + 1 : null,
      };
    };

    /**this is a request that can be done - data received can be verified in the browser -*/
    app.get("/top_quotes", async (request, response) => {
      try {
        await sleep();
        const quotesData = await readQuotes();
        response.json({
          quotes: quotesData.quotes.slice(0, 5),
        });
      } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.get("/", async (request, response) => {
      try {
        const { page, cursor } = request.query;
        if (!page && !cursor) {
          throw new Error(
            'Missing parameters. Please provide "page" or "cursor" parameter in the request query.'
          );
        }
        await sleep();

        const limit = 5;

        if (page)
          return response.json(await getQuotesByPage(parseInt(page), limit));
        if (cursor)
          return response.json(await getQuotesByCursor(parseInt(cursor), limit));
      } catch (error) {
        console.error(error);
        response.status(500).json({
          error: 'Missing parameters("page" or "cursor"). ',
        });
      }
    });

    app.post("/", async (request, response) => {
      try {
        const { quote, author } = request.body;
        if (!quote || !author) {
          response.status(400).send("Please provide author and quote text.");
          return;
        }
        await sleep();
        const id = addQuote(quote, author);
        response.status(201).json({ id });
      } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
      }
    });

    /**this will take the api request to the original state*/
    app.post("/reset", async (request, response) => {
      try {
        await sleep();
        quotes.quotes.length = 0;
        quotes.quotes.push(...quotesOriginal.quotes);
        response.json({ success: true });
      } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
      }
    });

      app.listen(port, () => {
        console.log(\`Server is running at http://localhost:\${port}\`);
      });  
    `
    },
    {
    id: 155,
    name: 'Adding API request for top_quotes',
    code:   
    `
      import api from './api.layer.use.case.quotes.with.fn'
  
      export const fetchTopQuotes = () => 
          api.get("top_quotes").then((res) => res.data.quotes)  
    `
    },
    {
    id: 156,
    name: 'Adding FetchTopQuotes',
    code:   
    `
      /**this is 'QueryClientProvider' from react-query library*/
      <QueryClientProvider client={queryClient}>
                    <FetchTopQuotes />
       </QueryClientProvider>  
    `
    },
    {
    id: 157,
    name: 'Adding FetchTopQuotes with ToastContainer',
    code:   
    `
      /**i can add also the toast container*/
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <FetchTopQuotes />
        </QueryClientProvider> 
    `
    },
    {
    id: 158,
    name: 'API request, post and reset API endpoints',
    code:   
    `
      
        export const fetchTopQuotes = () =>
        api.get("top_quotes").then((res) => res.data.quotes);

          /**here i add the postQuote and resetQuotes operations*/
          export const postQuote = (quote) => api.post("", quote);
          export const resetQuotes = () => api.post("reset", {});
    `
    },
    {
    id: 159,
    name: 'UpdateQuotesForm',
    code:   
    `
      const UpdateQuotesForm = () => {
      // Get access to the QueryClient instance
      const queryClient = useQueryClient();
      // Quotes mutations
      const createQuoteMutation = useMutation(postQuote);
      const resetQuotesMutation = useMutation((e) => resetQuotes());
      // Form state
      const [form, setForm] = useState({
        author: "",
        quote: "",
      });
      // Update the form state on change
      const onChange = (e) => {
        setForm((_form) => ({
          ..._form,
          [e.target.name]: e.target.value,
        }));
      };
      // Validate the form and start create quote mutation
      const onSubmit = async (e) => {
        e.preventDefault();
        const { author, quote } = form;
        if (!author || !quote) {
          alert("Please provide quote and author text.");
          return;
        }
        await createQuoteMutation.mutate(form, {
          onSuccess: () => {
            setForm({
              quote: "",
              author: "",
            });
            // Tell React-Query to refetch 'top-quotes' and 'quotes' queries
            queryClient.invalidateQueries("top-quotes");
            toast.success("Quote created");
          },
        });
      };
      // Reset the quotes to their original state on the server
      const onReset = (e) => {
        resetQuotesMutation.mutate(e, {
          onSuccess: () => {
            queryClient.invalidateQueries("top-quotes");
            toast.success("Quote resetted.");
          },
        });
      };
      return (
        <Container>
          <Title>Create quote</Title>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label>Author</Label>
              <Input
                type="text"
                name="author"
                value={form.author}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Quote</Label>
              <Input
                type="text"
                name="quote"
                value={form.quote}
                onChange={onChange}
              />
            </FormGroup>
            <div style={{ textAlign: "center" }}>
              <Button
                type="submit"
                isLoading={createQuoteMutation.isLoading}
                disabled={createQuoteMutation.isLoading}
              >
                {createQuoteMutation.isLoading
                  ? "Creating quote..."
                  : "Create quote"}
              </Button>
              <Button
                type="button"
                onClick={onReset}
                isLoading={resetQuotesMutation.isLoading}
                disabled={resetQuotesMutation.isLoading}
              >
                {resetQuotesMutation.isLoading ? "Resetting..." : "Reset quotes"}
              </Button>
            </div>
          </Form>
        </Container>
      );
    };
    export default UpdateQuotesForm;
    `
    },
    {
    id: 160,
    name: 'server.quotes.post.update.js',
    code:   
    `
    const express = require("express");
    const { quotes } = require("./quotes");
    const { quotesOriginal } = require("./quotesOriginal");
    const cors = require("cors");
    const app = express();
    const port = 9000;


    app.use(cors());
    app.use(express.json());

    // Dynamically import nanoid and assign it  
    let nanoid;
    (async () => {
      const { nanoid: importedNanoid } = await import("nanoid");
      nanoid = importedNanoid;
    })();

    // Helper functions
    const sleep = (time = 1000) =>
      new Promise((resolve) => setTimeout(resolve, time));

    const readQuotes = async () => quotes;

    const addQuote = (quote, author) => {
      const id = nanoid(); // Generate unique ID
      quotes.quotes.unshift({ id, quote, author });
      return id;
    };

    const getQuotesByPage = async (page, limit) => {
      const offset = page * limit;
      const endIndex = offset + limit;
      const quotesData = await readQuotes();
      const paginatedQuotes = quotesData.quotes.slice(offset, endIndex);
      return {
        quotes: paginatedQuotes,
        hasMore: endIndex < quotesData.quotes.length,
      };
    };

    const getQuotesByCursor = async (cursor, limit) => {
      const endIndex = cursor + limit;
      const quotesData = await readQuotes();
      const paginatedQuotes = quotesData.quotes.slice(cursor, endIndex);
      return {
        quotes: paginatedQuotes,
        nextCursor: endIndex < quotesData.quotes.length ? endIndex : null,
      };
    };

    // Routes
    app.get("/top_quotes", async (req, res) => {
      try {
        await sleep();
        const quotesData = await readQuotes();
        res.json({ quotes: quotesData.quotes.slice(0, 5) });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.get("/", async (req, res) => {
      try {
        const { page, cursor } = req.query;
        if (!page && !cursor) {
          throw new Error(
            'Missing parameters. Please provide "page" or "cursor" parameter in the request query.'
          );
        }
        await sleep();

        const limit = 5;
        if (page) {
          return res.json(await getQuotesByPage(parseInt(page, 10), limit));
        }
        if (cursor) {
          return res.json(await getQuotesByCursor(parseInt(cursor, 10), limit));
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: 'Missing parameters("page" or "cursor").',
        });
      }
    });

    app.post("/", async (req, res) => {
      try {
        const { quote, author } = req.body;
        if (!quote || !author) {
          return res.status(400).send("Please provide author and quote text.");
        }
        await sleep();
        const id = addQuote(quote, author);
        res.status(201).json({ id });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    app.post("/reset", async (req, res) => {
      try {
        await sleep();
        quotes.quotes.length = 0;
        quotes.quotes.push(...quotesOriginal.quotes);
        res.json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

   // Start the server
    app.listen(port, () => {
      console.log(\`Server is running at http://localhost:$\`{port}\`);
    });
    `
    },
    {
    id: 161,
    name: 'UpdateQuotesForm',
    code:   
    `
    <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <UpdateQuotesForm />
        <FetchTopQuotes />
    </QueryClientProvider> 
    `
    },
    {
    id: 162,
    name: 'fetchQuotesByPage API request',
    code:   
    `
      export const fetchTopQuotes = () =>
      api.get("top_quotes").then((res) => res.data.quotes);
    
      export const postQuote = (quote) => api.post("", quote);
      export const resetQuotes = () => api.post("reset", {});

      /**fetchQuotesByPage will take params from the server.quotes */
      export const fetchQuotesByPage = (page) => 
      api.get("",{params: {page}}).then((res) => res.data);
    `
    },
    {
    id: 163,
    name: 'PaginatedQuotes Component',
    code:   
    `
      const PaginatedQuotes = () => {

      /**this state will mutate the page number
       * starting as default value at 1*/  
      const [page, setPage] = useState(1);

      /**all of these are the params destructured 
       * from 'fetchQuotesByPage'*/
      const {
          data: quotes,
          isLoading,
          isFetching,
          isSuccess,
          isError,
          isPreviousData,
        } = useQuery(["quotes", page], () => fetchQuotesByPage(page), {
          keepPreviousData: true,
        });

        /**Depending on the API data, the params will handle to render
         * UI or Error in case the data is not avaible*/
        return(
            <Container>
          <div>
            <Title>Paginated Quotes</Title>
            {isError ? (
              <ErrorMessage>There was a problem with fetching quotes</ErrorMessage>
            ) : null}
            {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
            {isSuccess ? (
              <QuotesContainer>
                <div>
                  <div>
                    {quotes?.quotes.map((quote) => (
                      <QuoteBlock key={quote.id}>
                        <QuoteText>"{quote.quote}"</QuoteText>
                        <CiteContainer>
                          <div>
                            <AuthorText>{quote.author}</AuthorText>
                          </div>
                        </CiteContainer>
                      </QuoteBlock>
                    ))}
                  </div>
                  <div>
                    {isFetching ? <LoadingSpan>Loading...</LoadingSpan> : null}{" "}
                    <div>
                      <PageButton
                        onClick={() => setPage((old) => Math.max(old - 1, 0))}
                        disabled={page === 1}
                      >
                        Previous
                      </PageButton>{" "}
                      <PageNumber>{page}</PageNumber>
                      <NextPageButton
                        onClick={() => {
                          if (!isPreviousData && quotes?.hasMore) {
                            setPage((old) => old + 1);
                          }
                        }}
                        disabled={isPreviousData || !quotes?.hasMore}
                      >
                        Next
                      </NextPageButton>
                    </div>
                  </div>
                </div>
              </QuotesContainer>
            ) : null}
          </div>
        </Container>
        )
    
    }
    
    export default PaginatedQuotes;
    `
    },
    {
    id: 164,
    name: 'PaginatedQuotes implementation',
    code:   
    `
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        {/**here the component will be placed*/}
        <PaginatedQuotes />
      </QueryClientProvider>
    `
    },
    {
    id: 165,
    name: 'fetchQuotesByCursor API - Infinite Scroll',
    code:   
    `
      export const fetchTopQuotes = () =>
      api.get("top_quotes").then((res) => res.data.quotes);
    
      export const postQuote = (quote) => api.post("", quote);
      export const resetQuotes = () => api.post("reset", {});
    
      export const fetchQuotesByPage = (page) => 
        api.get("",{params: {page}}).then((res) => res.data);
    
      /**here the function uses the cursor as params*/
      export const fetchQuotesByCursor = (cursor) => 
        api.get("",{params: {cursor}}).then((res) => res.data);
    `
    },
    {
    id: 166,
    name: 'fetchQuotesByCursor API - Infinite Scroll',
    code:   
    `
      const InfiniteScrollQuotes = () => {

      /**destructured from useInView and belong to react-intersection-observer*/
      const { ref: loadMoreRef, inView } = useInView();

      /**props destructured from fetchQuotesByCursor and come from the server*/
      const {
        data: quotes,
        isLoading,
        isFetchingNextPage,
        isSuccess,
        isError,
        fetchNextPage,
        hasNextPage,
      } = useInfiniteQuery(
        "quotes",
        ({ pageParam = 0 }) => fetchQuotesByCursor(pageParam),
        {
          getNextPageParam: (lastPage, pages) => {
            return lastPage.nextCursor;
          },
        }
      );

      /**the useEffect checks once the component mounts to control the 
       * quotes data behavior*/
      useEffect(() => {
        if (inView && !isFetchingNextPage && hasNextPage) {
          fetchNextPage();
        }
      }, [inView]);

      /**the Component checks once props are in place to control the 
       * quotes loading behavior*/
      return (
        <Container>
          <div>
            <Title>Infinite Scroll Quotes</Title>
            {isError ? (
              <ErrorMessage>There was a problem with fetching quotes</ErrorMessage>
            ) : null}
            {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
            {isSuccess ? (
              <QuotesContainer>
                <div>
                  <div>
                    {quotes?.pages.map((data) =>
                      data.quotes.map((quote) => (
                        <QuoteBlock key={quote.id}>
                          <QuoteText>"{quote.quote}"</QuoteText>
                          <CiteContainer>
                            <div>
                              <AuthorText>{quote.author}</AuthorText>
                            </div>
                          </CiteContainer>
                        </QuoteBlock>
                      ))
                    )}
                    <div ref={loadMoreRef}></div>
                  </div>
                  {isFetchingNextPage ? <span>Loading...</span> : null}{" "}
                </div>
              </QuotesContainer>
            ) : null}
          </div>
        </Container>
      );
    };
    export default InfiniteScrollQuotes;
    `
    },
    {
    id: 167,
    name: 'fetchTopQuotesWithCancellation API layer',
    code:   
    `
    /**this request will handle the request for the 
     * react query cancellation component*/
    export const fetchTopQuotesWithCancellation = (config = {}) =>
    api.get("top_quotes", config).then((res) => res.data.quotes);
  
    export const postQuote = (quote) => api.post("", quote);
    export const resetQuotes = () => api.post("reset", {});
    export const fetchQuotesByPage = (page) =>
    api.get("", { params: { page } }).then((res) => res.data);
  
    export const fetchQuotesByCursor = (cursor) =>
    api.get("", { params: { cursor } }).then((res) => res.data);
    `
    },
    {
    id: 168,
    name: 'QueryCancellationWithAbortSignal Component',
    code:   
    `
      const QueryCancellationWithAbortSignal = () => {
      
      /**this is the state that will mutate the signal*/  
      const [shouldAbort, setShouldAbort] = useState(true);
      const queryClient = useQueryClient();
      
      /**props destructured from fetchTopQuotesWithCancellation*/
      const {
        data: quotes,
        isSuccess,
        isLoading,
        isError,
      } = useQuery(
        "top-aborted-quotes-abort-controller",
        ({ signal }) => {
          return fetchTopQuotesWithCancellation({
            signal,
          }).catch((error) => {
            if (error.aborted) {
              /**once catched get show in toastify*/
              toast.error("Request aborted");
              return;
            }
            throw error;
          });
        },
        {
          refetchOnWindowFocus: false,
          enabled: false,
        }
      );

      /**at component level, the abort is handled*/
      const onFetchQuotes = () => {
        queryClient.refetchQueries("top-aborted-quotes-abort-controller");
        setTimeout(() => {
          shouldAbort &&
            queryClient.cancelQueries("top-aborted-quotes-abort-controller");
        }, 200);
      };
      return (
        <Container>
          <div>
            <Title>Query Cancellation With Abort Controller</Title>
            <div>
              <CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  checked={shouldAbort}
                  onChange={() => setShouldAbort((checked) => !checked)}
                />
                Abort
              </CheckboxLabel>
            </div>
            {isError ? (
              <ErrorMessage>There was a problem with fetching quotes</ErrorMessage>
            ) : null}
            <div>
              <FetchButton onClick={onFetchQuotes}>Fetch quotes</FetchButton>
            </div>
            {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
            {isSuccess ? (
              <QuotesContainer>
                {quotes?.map((quote) => (
                  <QuoteBlock key={quote.id}>
                    <QuoteText>"{quote.quote}"</QuoteText>
                    <CiteContainer>
                      <div>
                        <AuthorText>{quote.author}</AuthorText>
                      </div>
                    </CiteContainer>
                  </QuoteBlock>
                ))}
              </QuotesContainer>
            ) : null}
          </div>
        </Container>
      );
    };
    
    export default QueryCancellationWithAbortSignal;
    `
    },
    {
    id: 169,
    name: 'QueryCancellationWithAbortSignal Component',
    code:   
    `
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      {/**Here its palced the Component*/}
      <QueryCancellationWithAbortSignal />
    </QueryClientProvider>
    `
    },
    {
    id: 170,
    name: ' PersonState - State Management',
    code:   
    `
    const PersonState = () => {
        const [ person, setPerson ] = useState({
            name: "Superman",
        })
    
        const onChange = () => {
          /** This won't work -  because the React Immutability Paradigm*/
          person.age = 24;
        }
    
        const onReset = () => {
            setPerson({...person, age: 0})
        }
    
        const { name, age } = person;
    
        return(
            <ListWrapper>
                <BooksUseTransitionContainer>
                    <div>
                        <PrimaryButton>
                            <button onClick={onChange}>set age</button>
                        </PrimaryButton>  
                        
                        <SecondaryButton>
                            <button onClick={onReset}>reset age</button>
                        </SecondaryButton>
                    </div>
                </BooksUseTransitionContainer>
                 <h2> Person Name:</h2>
                 <h2 className="author-name"><span>{name}</span></h2>
    
                 {age ? 
                 <p><span>Age: </span> {age} years</p>
                 :
                 null
                }
            </ListWrapper>
        )
    }
    
    export default PersonState;
    `
    },
    {
    id: 171,
    name: ' PersonState - State Management',
    code:   
    `
    const PersonState = () => {
    const [ person, setPerson ] = useState({
        name: "Superman",
    })

    const onChange = () => {
        /**this will work - because complies with the React Immutability Paradigm by 
         * making use the useState hook to modify state not directly*/
        setPerson({...person, age: 24})
    }

    const onReset = () => {
        
        setPerson({...person, age: 0})
    }

    const { name, age } = person;

        return(
            <ListWrapper>
                <BooksUseTransitionContainer>
                    <div>
                        <PrimaryButton>
                            <button onClick={onChange}>set age</button>
                        </PrimaryButton>  
                        
                        <SecondaryButton>
                            <button onClick={onReset}>reset age</button>
                        </SecondaryButton>
                    </div>
                </BooksUseTransitionContainer>
                <h2> Person Name:</h2>
                <h2 className="author-name"><span>{name}</span></h2>

                {age ? 
                <p><span>Age: </span> {age} years</p>
                :
                null
                }
            </ListWrapper>
        )
    }

    export default PersonState;const PersonState = () => {
        const [ person, setPerson ] = useState({
            name: "Superman",
        })

        const onChange = () => {
            setPerson({...person, age: 24})
        }

        const onReset = () => {
            setPerson({...person, age: 0})
        }

        const { name, age } = person;

        return(
            <ListWrapper>
                <BooksUseTransitionContainer>
                    <div>
                        <PrimaryButton>
                            <button onClick={onChange}>set age</button>
                        </PrimaryButton>  
                        
                        <SecondaryButton>
                            <button onClick={onReset}>reset age</button>
                        </SecondaryButton>
                    </div>
                </BooksUseTransitionContainer>
                <h2> Person Name:</h2>
                <h2 className="author-name"><span>{name}</span></h2>

                {age ? 
                <p><span>Age: </span> {age} years</p>
                :
                null
                }
            </ListWrapper>
        )
    }

    export default PersonState;
    `
    },
    {
    id: 172,
    name: ' boardData - State Management',
    code:   
    `
    const boardData = {
    name: "Developers",
    columns: [
        {
          name: "Backlog",
          tasks: [
            {
              name: "Update dependencies",
            },
            {
              name: "Add review feature",
            },
          ],
        },
        {
          name: "Todo",
          tasks: [
            {
              name: "Fix modal transition",
            },
          ],
        },
        {
          name: "In progress",
          tasks: [
            {
              name: "Create task board",
            },
          ],
        },
        {
          name: "Complete",
          tasks: [],
        },
      ],
    };
    `
    },
    {
    id: 173,
    name: ' TasksBoard - State Management',
    code:   
    `
    const TasksBoard = (props) => {
        
        const { boardData } = usePatternsAppContext();
    
        const [board, setBoard] = useState(boardData);
        const [selectedTask, setSelectedTask] = useState();
        
        /**this handler will iterate over every task by
         * culumn id and task id*/
        const onSelectTask = (columnIdx, taskIdx) => {
            setSelectedTask({
              columnIdx,
              taskIdx,
            });
        };
    
       /**and this handler will update the name of the selected task*/
        const onTaskNameChange = (e) => {
            /** if there is not selected task will return*/
            if (!selectedTask) return;
            /**destructure column task id and task id*/
            const { columnIdx, taskIdx } = selectedTask;
        
              /**inside of the setter (mutator) a function will handle 
               * the data update*/
              setBoard((board) => {
                return {
                /**i return the board data props*/
                  ...board,
                  /**then i map the columns*/
                  columns: [
                    ...board.columns.map((column, _columnIdx) => {
                      if (columnIdx !== _columnIdx) {
                        return column;
                      }
                       /**once i have the column i return it*/ 
                      return {
                        ...column,
                        /**then i return the task id ( here i have the name )*/
                        tasks: column.tasks.map((task, _taskIdx) => {
                          /**the if flow to return the task*/
                          if (taskIdx !== _taskIdx) {
                            return task;
                          }
                          /**then finally i will return the task along
                           * with the name edited by the user*/  
                          return {
                            ...task,
                            name: e.target.value,
                          };
                        }),
                      };
                    }),
                  ],
                };
              });
          };
      
          
        return (
            <Container>
            <Header>
              <HeaderBackground>
                <BoardTitle>{board.name}</BoardTitle>
              </HeaderBackground>
              <Content>
                {board.columns.map((column, columnIdx) => (
                  <ColumnContainer key={columnIdx}>
                    <ColumnHeader>{column.name}</ColumnHeader>
                    <TaskContainer>
                      {column.tasks.map((task, taskIdx) => (
                        <TaskButton
                          key={taskIdx}
                          isSelected={
                            columnIdx === selectedTask?.columnIdx &&
                            taskIdx === selectedTask?.taskIdx
                          }
                          onClick={() => onSelectTask(columnIdx, taskIdx)}
                        >
                          <h4>{task.name}</h4>
                        </TaskButton>
                      ))}
                    </TaskContainer>
                  </ColumnContainer>
                ))}
                <div>
                  <UpdateTaskHeader>
                    {selectedTask ? "Update task" : "Select a task to update"}
                  </UpdateTaskHeader>
                  {selectedTask ? (
                    <UpdateTaskInput
                      type="text"
                      value={
                        board.columns[selectedTask.columnIdx].tasks[
                          selectedTask.taskIdx
                        ].name
                      }
                      onChange={onTaskNameChange}
                    />
                  ) : null}
                </div>
              </Content>
            </Header>
          </Container>
        );
      };
      export default TasksBoard;
    `
    },
    {
    id: 174,
    name: ' TasksBoardImmer - Snippet 1',
    code:   
    `
    const TasksBoardImmer = (props) => {
      
      const { boardData } = usePatternsAppContext();

      /**once i get the data i mutate the data using useImmer 
       * instead of useState*/
      const [board, setBoard] = useImmer(boardData);
      const [selectedTask, setSelectedTask] = useState();
    
        
      return (
          <></>
      );
    };
    export default TasksBoardImmer;
    `
    },
    {
    id: 175,
    name: ' TasksBoardImmer - Snippet 2',
    code:   
    `
    const TasksBoardImmer = (props) => {
    
    const { boardData } = usePatternsAppContext();

    const [board, setBoard] = useImmer(boardData);
    const [selectedTask, setSelectedTask] = useState();

    /**the onSelectTask still as preiously setting 
     * the column id and task id*/  
    const onSelectTask = (columnIdx, taskIdx) => {
        setSelectedTask({
          columnIdx,
          taskIdx,
        });
      };
  
      
      return (
          <></>
      );
    };
    export default TasksBoardImmer;
    `
    },
    {
    id: 176,
    name: ' TasksBoardImmer - Snippet 3',
    code:   
    `
    const TasksBoardImmer = (props) => {
        
        const { boardData } = usePatternsAppContext();
    
        const [board, setBoard] = useImmer(boardData);
        const [selectedTask, setSelectedTask] = useState();
    
        const onSelectTask = (columnIdx, taskIdx) => {
            setSelectedTask({
              columnIdx,
              taskIdx,
            });
        };
    
        /**here is where everything changes using useImmer, i catch the event*/
        const onTaskNameChange = (e) => {

            /**here i check for the selectedTask*/
            if (!selectedTask) return;

            /**i destructure here selectedTask props*/
            const { columnIdx, taskIdx } = selectedTask;

            /**the setter will be way easier because i can 
             * asign to the board column with the corresponding
             * id the e.target.value -user input value - */
            setBoard((board) => {
              board.columns[columnIdx].tasks[taskIdx].name = e.target.value;
            });
        };
          
          
        return (
            <></>
        );
      };
      export default TasksBoardImmer;
    `
    },
    {
    id: 177,
    name: ' TasksBoardImmer code',
    code:   
    `
    const TasksBoardImmer = (props) => {
    
    const { boardData } = usePatternsAppContext();

    const [board, setBoard] = useImmer(boardData);
    const [selectedTask, setSelectedTask] = useState();

    const onSelectTask = (columnIdx, taskIdx) => {
        setSelectedTask({
          columnIdx,
          taskIdx,
        });
    };

    const onTaskNameChange = (e) => {
        if (!selectedTask) return;
        const { columnIdx, taskIdx } = selectedTask;
    
        setBoard((board) => {
          board.columns[columnIdx].tasks[taskIdx].name = e.target.value;
        });
    };
      
      
      return (
          <Container>
              <Header>
                  <HeaderBackground>
                  <BoardTitle>{board.name}</BoardTitle>
                  </HeaderBackground>
                  <Content>
                  {board.columns.map((column, columnIdx) => (
                      <ColumnContainer key={columnIdx}>
                      <ColumnHeader>{column.name}</ColumnHeader>
                      <TaskContainer>
                          {column.tasks.map((task, taskIdx) => (
                          <TaskButton
                              key={taskIdx}
                              isSelected={
                              columnIdx === selectedTask?.columnIdx &&
                              taskIdx === selectedTask?.taskIdx
                              }
                              onClick={() => onSelectTask(columnIdx, taskIdx)}
                          >
                              <h4>{task.name}</h4>
                          </TaskButton>
                          ))}
                      </TaskContainer>
                      </ColumnContainer>
                  ))}
                  <div>
                      <UpdateTaskHeader>
                      {selectedTask ? "Update task" : "Select a task to update"}
                      </UpdateTaskHeader>
                      {selectedTask ? (
                      <UpdateTaskInput
                          type="text"
                          value={
                          board.columns[selectedTask.columnIdx].tasks[
                              selectedTask.taskIdx
                          ].name
                          }
                          onChange={onTaskNameChange}
                      />
                      ) : null}
                  </div>
                  </Content>
              </Header>
          </Container>
      );
    };
    export default TasksBoardImmer;
    `
    },
    {
    id: 178,
    name: ' ShoppingListHeaderBefore code',
    code:   
    `
    /**this is the main header component*/
    const ShoppingListHeaderBefore = (props) => {
      return (
        <StyledContainer>
          <StyledHeading>Shopping List</StyledHeading>
          {/**here will have the items length*/}
          <span>{props.shoppingList.length} items 🛒</span>
        </StyledContainer>
      );
    };
    export default ShoppingListHeaderBefore;
    `
    },
    {
    id: 179,
    name: ' ShoppingListRowBefore code',
    code:   
    `
    /**this component will display the data od the shopping list*/
    const ShoppingListRowBefore = (props) => {
    
      /**this props comes from the methods - useReducer approach -*/
      const { item, deleteItem, index } = props;
      const { name, isEditing, cancelEdit, setName, onSaveItem, onEditItem } =
        useEditShoppingItem(props);
        
        /**will render and perform operations as addition, 
         * saving and deleting items*/
        return (
          <StyledContainer>
            <StyledInputContainer>
              {isEditing ? (
                <StyledInput
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <StyledText>{item.name}</StyledText>
              )}
            </StyledInputContainer>
            <StyledButtonContainer>
              {isEditing ? (
                <>
                  <StyledButton onClick={onSaveItem}>Save</StyledButton>
                  <StyledButton onClick={cancelEdit}>Cancel</StyledButton>
                </>
              ) : (
                <>
                  <StyledButton onClick={onEditItem}>Edit</StyledButton>
                  <StyledButton onClick={() => deleteItem({ index })}>
                    Delete
                  </StyledButton>
                </>
              )}
            </StyledButtonContainer>
          </StyledContainer>
        );
      };
    export default ShoppingListRowBefore;
    `
    },
    {
    id: 180,
    name: ' ShoppingListRowBefore - useEditShoppingItem',
    code:   
    `
    /**each row will be editable and can be saved*/
    const useEditShoppingItem = (props) => {
    const { item, updateItem, index } = props;
    const [name, setName] = useState(item.name);
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
      setName(props.item.name);
    }, [props.item]);

    /**this will be the method to save the user entry*/
    const onSaveItem = () => {
          updateItem({
            index,
            item: {
              ...item,
              name,
            },
          });
          setIsEditing(false);
        };

        /**this will the method to edit the user entry*/
        const onEditItem = () => {
          setIsEditing(true);
        };

        /**this will the method to cancel edit the user entry*/
        const cancelEdit = () => {
          setIsEditing(false);
          setName(props.item.name);
        };
        return {
          name,
          isEditing,
          cancelEdit,
          setName,
          onSaveItem,
          onEditItem,
        };
      };
    `
    },
    {
    id: 181,
    name: ' shoppingItems - data',
    code:   
    `
    /**this is the initial data that will 
     * display the Shopping list application*/

    const shoppingItems = {
    newShoppingItemName: "",
    items: [
      {
        id: "1",
        name: "Sea Salt",
      },
      {
        id: "2",
        name: "Apples",
      },
      {
        id: "3",
        name: "Chicken breasts",
      },
    ],
  };
    `
    },
    {
    id: 182,
    name: ' reducer - actions',
    code:   
    `
    /**the reducer state manage all actions related to an app feature 
     * in one place*/
    const reducer = (state, action) => {

      /**from here will be implemented a switch - case
       * conditional, only one action selected depending on the 'action.type'*/
      switch (action.type) {

        /**first case to update an item*/
        case "UPDATE_NEW_SHOPPING_ITEM_NAME":

          /**i spread the state, and update the name with the action.payload*/
          return {
            ...state,
            newShoppingItemName: action.payload,
          };

        /**second case to update add item*/  
        case "ADD_ITEM":
          /**i spread the state, and on items i spread all 
           * items and add the action.payload*/
          return {
            ...state,
            newShoppingItemName: "",
            items: [...state.items, action.payload],
          };

        /**third case update item*/
        case "UPDATE_ITEM":
          /**i spread the state, and on item i map based on 
           * item and idx, then i return the action.payload.item*/
          return {
            ...state,
            items: state.items.map((item, idx) => {
              if (idx === action.payload.index) {
                return action.payload.item;
              }
              return item;
            }),
          };

        /**fourth case delete item*/
        case "DELETE_ITEM":
          /**i return the state, and then i filter based on the 
           * item id to return a new array updated*/
          return {
            ...state,
            items: state.items.filter((_, idx) => idx !== action.payload.index),
          };
        default:
          return state;
      }
    };
    `
    },
    {
    id: 183,
    name: ' ShoppingListBefore - Compoent',
    code:   
    `
    const ShoppingListBefore = (props) => {

    /**here the state is declared and the useReducer combine actions and data*/  
    const [shoppingList, dispatch] = useReducer(reducer, shoppingItems);
  
    /**here the add action is used, and payload defined*/
      const addItem = () => {
        /**i verify the the item name does not exist already*/
        if (!shoppingList.newShoppingItemName) return;
        /**then i disptach the action, generating dynamic id and setting the name*/
        dispatch({
          type: "ADD_ITEM",
          payload: {
            id: getUuid(),
            name: shoppingList.newShoppingItemName,
          },
        });
      };
    
      const deleteItem = (item) => {
        dispatch({
          type: "DELETE_ITEM",
          payload: item,
        });
      };
    
      const updateItem = (payload) => {
        dispatch({
          type: "UPDATE_ITEM",
          payload,
        });
      };
    
      const onChangeShoppingListItemName = (e) => {
        dispatch({
          type: "UPDATE_NEW_SHOPPING_ITEM_NAME",
          payload: e.target.value,
        });
      };
    
      return (
        <StyledContainer>
          <StyledWrapper>
            <ShoppingListHeaderBefore shoppingList={shoppingList.items} />
            <div style={{ marginBottom: "1.5rem" }}>
              {shoppingList.items.map((item, index) => (
                <ShoppingListRowBefore
                  key={item.id}
                  item={item}
                  index={index}
                  updateItem={updateItem}
                  deleteItem={deleteItem}
                />
              ))}
            </div>
            <StyledAddItemContainer>
              <StyledLabel htmlFor="shoppingItemField">Add item</StyledLabel>
              <StyledInput
                type="text"
                id="shoppingItemField"
                value={shoppingList.newShoppingItemName}
                onChange={onChangeShoppingListItemName}
              />
              <StyledButton onClick={addItem}>Add</StyledButton>
            </StyledAddItemContainer>
          </StyledWrapper>
        </StyledContainer>
      );
    };
    export default ShoppingListBefore;
    `
    },
    {
    id: 184,
    name: ' shoppingItemsImmer - Compoent',
    code:   
    `
      /**this is the initial data for ShopingListImmer*/
      const shoppingItemsImmer = {
        newShoppingItemName: "",
        items: [
          {
            id: "1",
            name: "Plumbs",
          },
          {
            id: "2",
            name: "Apples Cider",
          },
          {
            id: "3",
            name: "Chicken legs",
          },
        ],
      };
    `
    },
    {
    id: 185,
    name: ' reducer - useImmerReducer',
    code:   
    `   /**this reducer has actions types with syntax
          * according with useImmer, dynamic object asignation*/
        const reducer = (state, action) => {
    
        switch (action.type) {
      
        // Update the name of the new shopping item
        case "UPDATE_NEW_SHOPPING_ITEM_NAME":
            state.newShoppingItemName = action.payload;
            break;
    
        // Add a new item to the shopping list
        case "ADD_ITEM":
          state.newShoppingItemName = "";
          state.items.push(action.payload);
          break;
    
        // Update an existing item in the shopping list
        case "UPDATE_ITEM":
            state.items.splice(action.payload.index, 1, action.payload.item);
            break;
    
        // Delete an item from the shopping list
        case "DELETE_ITEM":
            state.items.splice(action.payload.index, 1);
            break;
            
        }
        return state;
      };
    `
    },
    {
    id: 186,
    name: ' ShoppingListImmer',
    code:   
    `   
        /**this will be the new component ShoppingListImmer*/
        const ShoppingListImmer = (props) => {

        /**here i implement the useImmerReducer, previuosly install the library*/  
        const [shoppingList, dispatch] = useImmerReducer(reducer, shoppingItemsImmer);
      
        const addItem = () => {
          if (!shoppingList.newShoppingItemName) return;
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: getUuid(),
              name: shoppingList.newShoppingItemName,
            },
          });
        };
      
        const deleteItem = (item) => {
          dispatch({
            type: "DELETE_ITEM",
            payload: item,
          });
        };
      
        const updateItem = (payload) => {
          dispatch({
            type: "UPDATE_ITEM",
            payload,
          });
        };
      
        const onChangeShoppingListItemName = (e) => {
          dispatch({
            type: "UPDATE_NEW_SHOPPING_ITEM_NAME",
            payload: e.target.value,
          });
        };
      
        return (
          <StyledContainer>
            <StyledWrapper>
              <ShoppingListHeaderBefore shoppingList={shoppingList.items} />
              <div style={{ marginBottom: "1.5rem" }}>
                {shoppingList.items.map((item, index) => (
                  <ShoppingListRowBefore
                    key={item.id}
                    item={item}
                    index={index}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                  />
                ))}
              </div>
              <StyledAddItemContainer>
                <StyledLabel htmlFor="shoppingItemField">Add item</StyledLabel>
                <StyledInput
                  type="text"
                  id="shoppingItemField"
                  value={shoppingList.newShoppingItemName}
                  onChange={onChangeShoppingListItemName}
                />
                <StyledButton onClick={addItem}>Add</StyledButton>
              </StyledAddItemContainer>
            </StyledWrapper>
          </StyledContainer>
        );
      };
      export default ShoppingListImmer;
      };
    `
    },
    {
    id: 187,
    name: ' Home - Lazy and Code Splitting Pattern',
    code:   
    `
    /**simple Home Component for navigation porpuses*/   
    const Home = (props) => {
      return <div>Home</div>;
    };
    export default Home;
    `
    },
    {
    id: 188,
    name: ' About - Lazy and Code Splitting Pattern',
    code:   
    `
      /**this is a simple About component for navigation purpuses*/
      const About = (props) => {
          return <div>About</div>;
      };
      
      export default About;
    `
    },
    {
    id: 189,
    name: ' Contact - Lazy and Code Splitting Pattern',
    code:   
    `  
    /**this is a simple Contact component for navigation purpuses*/
    const Contact = (props) => {
      return <div>Contact</div>;
    };
    export default Contact;
    `
    },
    {
    id: 190,
    name: ' RouteReflector - Lazy and Code Splitting Pattern',
    code:   
    `
    // RouteReflector Component
    const RouteReflector = () => {
      const location = useLocation();// Hook to get current location/path
      const [scopedPath, setScopedPath] = useState(location.pathname); // Local state to hold the scoped path
    
      // Update the scoped path whenever the location changes
      useEffect(() => {
        setScopedPath(location.pathname);
      }, [location]);
    
      return (
        <input
          type="text"
          value={scopedPath} // Reflecting the current path in the input
          readOnly
          className="border p-2"
        />
      );
    };
    `
    },
    {
    id: 191,
    name: ' LazyNavigation - Lazy and Code Splitting Pattern',
    code:   
    `
    /**this main Component will hold the sub components*/
    function LazyNavigation() {
    return (

              <AppContainer>
              <Heading>Advanced React - Codelicks Academy</Heading>
              <NavContainer>
                  <Nav>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
                  </Nav>
              </NavContainer>
      
              {/* Input reflecting the current route */}
              <RouteReflector />
      
              {/**here are the basic components for navigations*/} 
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
              </AppContainer>

      );
    }
    
    export default LazyNavigation;
    `
    },
    {
    id: 192,
    name: ' LazyNavigation - imports',
    code:   
    `
    /**the current imports are like this*/
    import Home from "./optimization.patterns.home.use.case";
    import About from "./optimization.patterns.about.use.case";
    import Contact from "./optimization.patterns.contact.use.case";
    `
    },
    {
    id: 193,
    name: ' LazyNavigation - lazy imports',
    code:   
    `
    /**the new imports replacing the old ones will be as this,
     * and Lazy previously imported from react library*/
    const Home = lazy(() => import("./optimization.patterns.home.use.cases"));
    const About = lazy(() => import("./optimization.patterns.about.use.cases"));
    const Contact = lazy(() => import("./optimization.patterns.contact.use.cases"));
    `
    },
    {
    id: 194,
    name: ' Suspense - lazy implementation',
    code:   
    `
      function LazyNavigation() {
        return (
          <AppContainer>
            <Heading>Optimized Pattern! - Lazy Loading and Code Splitting</Heading>
            <NavContainer>
              <Nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </Nav>
            </NavContainer>
      
            {/* Input reflecting the current route */}
            <RouteReflector />

            {/**this is where suspnese wraps the routing*/}
            <Suspense fallback={<h3> Loading </h3>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </AppContainer>
        );
      }
      
      export default LazyNavigation;
    `
    },
    {
    id: 195,
    name: ' LazyLoader - lazy implementation',
    code:   
    `
  /**the Lazy loader will receive the props show and delay*/  
  const LazyLoader = ({ show = false, delay = 0 }) => {

    /**the local state to show the laoder*/
    const [showLoader, setShowLoader] = useState(false);
  
      /**the timeout will triggered depending on 
       * the show and delay*/
      useEffect(() => {
        let timeout;
    
        if (!show) {
          setShowLoader(false);
          return;
        }
    
        if (delay === 0) {
          setShowLoader(true);
        } else {
          timeout = setTimeout(() => setShowLoader(true), delay);
        }
      }, [show, delay]);
    
      return showLoader ? <h3>Loading...</h3> : null;
    };
    
    export default LazyLoader;
    `
    },
    {
    id: 196,
    name: ' LazyNavigation - custom loader',
    code:   
    `
    function LazyNavigation() {
      return (
        <AppContainer>
          <Heading>Optimized Pattern! - Lazy Loading and Code Splitting</Heading>
          <NavContainer>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </NavContainer>
    
          {/* Input reflecting the current route */}
          <RouteReflector />
          {/**the Suspense react library component will receive a as fallout
           * the custom component*/}
          <Suspense fallback={<LazyLoader show delay={500} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </AppContainer>
      );
    }
    
    export default LazyNavigation;
    `
    },
    {
    id: 197,
    name: ' LazyNavigationOptimized - lazy loading',
    code:   
    `
    function LazyNavigationOptimized() {

      return (
          <AppContainer>
            <Heading>Optimized Pattern! - Lazy Loading and Code Splitting</Heading>
            <NavContainer>
              <Nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </Nav>
            </NavContainer>
      
            {/* Input reflecting the current route */}
            <RouteReflector />
            {/**here the suspense component will wrap the navigation*/}
            <Suspense fallback={<LazyLoader show delay={500} />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </AppContainer>
        );
      }
    
    export default LazyNavigationOptimized;
    `
    },
    {
    id: 198,
    name: ' LazyNavigationOptimized - lazy loading',
    code:   
    `
    /**this component will handle a help icon*/
    const IngredientsInfoHelper = (props) => {
      /**the console log will trigger every component render, 
       * it helps to detect where the adjusts are needed*/
      console.log("IngredientsInfoHelper rendered");
      return <StyledButton>📙</StyledButton>;
    };

    export default IngredientsInfoHelper;
    `
    },
    {
    id: 199,
    name: ' IngredientsList - Rendering Optimization',
    code:   
    `
    /** this component will render the ingredient list*/
    const IngredientsList = (props) => {

    /**the log will help to track how many times render, so it will 
     * be ajusted if necessary*/  
    console.log("IngredientsList rendered");

    /**data props destrcutured to be displayed in the return
     * as also the delete function*/
    const { ingredients, deleteIngredient } = props;

    return (
        <StyledContainer>
          <StyledList>
            {ingredients.map((ingredient) => (
              <StyledListItem key={ingredient.id}>
                <span>{ingredient.name}</span>
                {/**the X will be generted with each element, indicates that can be deleted*/}
                <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
                  X
                </StyledButton>
              </StyledListItem>
            ))}
          </StyledList>
        </StyledContainer>
      );
    };
    
    export default IngredientsList;
    `
    },
    {
    id: 200,
    name: ' AddIngredient - Rendering Optimization',
    code:   
    `
    /**this component will add an ingredient to the 
     * list*/
    const AddIngredient = (props) => {

    /**the console log to track the component renders*/  
    console.log("AddIngredient rendered");

    /**props destructured to add and set the ingredient*/
    const { addIngredient, ingredient, setIngredient } = props;
  
    return (
          <form className="">
            <StyledFieldset>
              <label>Add ingredient</label>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
              />
            </StyledFieldset>
            {/**the button will verify if the ingredient is present*/}
            <StyledButtonContainer>
              <StyledButton
                onClick={(e) => {
                  e.preventDefault();
                  if (!ingredient) return;
                  addIngredient(ingredient);
                  setIngredient("");
                }}
              >
                Add
              </StyledButton>
            </StyledButtonContainer>
          </form>
        );
      };
      
      export default AddIngredient;
    `
    },
    {
    id: 201,
    name: ' initialIngredients - Rendering Optimization',
    code:   
    `
      /**this will be the initital ingredients data*/
      const initialIngredients = [
      {
        id: nanoid(),
        name: "500g Chicken Breasts",
      },
      {
        id: nanoid(),
        name: "300 ml milk",
      },
      {
        id: nanoid(),
        name: "1 tbsp salt",
      },
    ];
    `
    },
    {
    id: 202,
    name: ' initialIngredients - Rendering Optimization',
    code:   
    `
    /**this component will render the whole application */
    const IngredientsComponent = (props) => {

    console.log("Ingredient rendered");

    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState(initialIngredients);
  
    /** this metthod will be to add ingredients and will be pass as prop
     * for AddIngredient Component*/
    const addIngredient = (ingredient) => {

      setIngredients((ingredients) => [
        ...ingredients,
        {
          name: ingredient,
          id: nanoid(),

        },
      ]);
    };
  
    /**this is the method to delete an ingredient*/
    const deleteIngredient = (id) => {
      setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
    };
  
    /**this small component will display the ingredients length*/
    const createIngredientsHeaderText = () => {

      /**this console log will track how many times this component is called*/
      console.log("createIngredientsHeaderText called");
      return <StyledHeading2>Ingredients ({ingredients.length})</StyledHeading2>;
    };
  
      return (
        <StyledContainer>
          <div>
            {createIngredientsHeaderText()}
            <IngredientsInfoHelper />
          </div>
    
          <StyledSpaceY4>
            <IngredientsList
              ingredients={ingredients}
              deleteIngredient={deleteIngredient}
            />
    
            <AddIngredient
              addIngredient={addIngredient}
              ingredient={ingredient}
              setIngredient={setIngredient}
            />
          </StyledSpaceY4>
        </StyledContainer>
      );
    };
    
    export default IngredientsComponent;
    `
    },
    {
    id: 203,
    name: ' IngredientsListOptimized - memo and callback',
    code:   
    `
      /**this is the optimized IngredientsList component */
      const IngredientsListOptimized = (props) => {

          console.log("IngredientsList rendered");

          /**this props are drilled from a component in a upper level, as IngredientsComponent,
           * so in order to the memoization to work, this props need to be look to optimized*/
          const { ingredients, deleteIngredient } = props;
          
          return (
            <StyledContainer>
              <StyledList>
                {ingredients.map((ingredient) => (
                  <StyledListItem key={ingredient.id}>
                    <span>{ingredient.name}</span>
                    <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
                      X
                    </StyledButton>
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledContainer>
          );
        };
        
        /**here is implemented the memoization for the component*/
        export default memo(IngredientsListOptimized);
    `
    },
    {
    id: 204,
    name: ' IngredientsComponentOptimized - memo and callback',
    code:   
    `
        const IngredientsComponentOptimized = (props) => {

        console.log("Ingredient rendered");
        
        const [ingredient, setIngredient] = useState("");
        const [ingredients, setIngredients] = useState(initialIngredients);
      
        const addIngredient = (ingredient) => {
          setIngredients((ingredients) => [
            ...ingredients,
            {
              name: ingredient,
              id: nanoid(),
            },
          ]);
        };

        /**useCallback will received two arguments, the function to memoized
        * and a dependency array*/
        const deleteIngredient = useCallback(
            (id) => {
                setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
              }
            ,[])
      
        const createIngredientsHeaderText = () => {
          console.log("createIngredientsHeaderText called");
          return <StyledHeading2>Ingredients ({ingredients.length})</StyledHeading2>;
        };
      
        return (
          <StyledContainer>
            <div>
              {createIngredientsHeaderText()}
              <IngredientsInfoHelper />
            </div>
      
            <StyledSpaceY4>
              <IngredientsListOptimized
                ingredients={ingredients}
                deleteIngredient={deleteIngredient}
              />
      
              <AddIngredient
                addIngredient={addIngredient}
                ingredient={ingredient}
                setIngredient={setIngredient}
              />
            </StyledSpaceY4>
          </StyledContainer>
        );
      };
      
      export default IngredientsComponentOptimized;
    `
    },
    {
    id: 205,
    name: ' IngredientsComponentOptimizedTwo -  useMemo',
    code:   
    `
      /**this is variant more optimized*/
      const IngredientsComponentOptimizedTwo = (props) => {

      const { initialIngredientstwo } = usePatternsAppContext();
        
        console.log("Ingredient rendered");
        const [ingredient, setIngredient] = useState("");
        const [ingredients, setIngredients] = useState(initialIngredientstwo);
      
        const addIngredient = (ingredient) => {
          setIngredients((ingredients) => [
            ...ingredients,
            {
              name: ingredient,
              id: nanoid(),
            },
          ]);
        };
      
        /**useCallback will received two arguments, the function to memoized
         * and a dependency array*/
        const deleteIngredient = useCallback(
            (id) => {
                setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
              }
            ,[])
        /**here i memoized implementing useMemo the state values
         * that generate the ingredients lenght, so it does not get render,
         * if the number does not change*/  
        const ingredientsText = useMemo(
            () => {
              
                console.log("createIngredientsHeaderText called");
                return <StyledHeading2Optimized>Ingredients ({ingredients.length})</StyledHeading2Optimized>;
              }
            , [ingredients.length]) 
      
        return (
          <StyledContainerOptimal>
            <div>
              {ingredientsText}
              <IngredientsInfoHelper />
            </div>
      
            <StyledSpaceY4Optimized>
              <IngredientsListOptimized
                ingredients={ingredients}
                deleteIngredient={deleteIngredient}
              />
      
              <AddIngredient
                addIngredient={addIngredient}
                ingredient={ingredient}
                setIngredient={setIngredient}
              />
            </StyledSpaceY4Optimized>
          </StyledContainerOptimal>
        );
      };
      
      export default IngredientsComponentOptimizedTwo;
    `
    },
    {
    id: 206,
    name: ' IngredientsComponentOptimizedTwo -  State Allocation Main Component',
    code:   
    `
    /**this will be the base code for IngredientsComponentOptimizedThree*/
    const IngredientsComponentOptimizedTwo = (props) => {

    const { initialIngredientstwo } = usePatternsAppContext();
      
      console.log("Ingredient rendered");
      /**here the states are declared, but they are used by 'AddIngredient'
       * and prop drilled there, so essentially this is way gets re render*/
      const [ingredient, setIngredient] = useState("");
      const [ingredients, setIngredients] = useState(initialIngredientstwo);
    
      const addIngredient = (ingredient) => {
        setIngredients((ingredients) => [
          ...ingredients,
          {
            name: ingredient,
            id: nanoid(),
          },
        ]);
      };
    
      const deleteIngredient = useCallback(
          (id) => {
              setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
            }
          ,[])
      const ingredientsText = useMemo(
          () => {
            
              console.log("createIngredientsHeaderText called");
              return <StyledHeading2Optimized>Ingredients ({ingredients.length})</StyledHeading2Optimized>;
            }
          , [ingredients.length]) 
    
      return (
        <StyledContainerOptimal>
          <div>
            {ingredientsText}
            <IngredientsInfoHelper />
          </div>
    
          <StyledSpaceY4Optimized>
            <IngredientsListOptimized
              ingredients={ingredients}
              deleteIngredient={deleteIngredient}
            />
            {/**here the prop is drillled from top down*/}  
            <AddIngredient
              addIngredient={addIngredient}
              ingredient={ingredient}
              setIngredient={setIngredient}
            />
          </StyledSpaceY4Optimized>
        </StyledContainerOptimal>
      );
    };
    
    export default IngredientsComponentOptimizedTwo;
    `
    },
    {
    id: 207,
    name: ' AddIngredient -  State Allocation Main Component',
    code:   
    `
    /**this will be the base code for AddIngredientOptimized*/
     const AddIngredient = (props) => {

      console.log("AddIngredient rendered");
      /**here the states are destructured and received from IngredientsComponentOptimizedTwo */
      const { addIngredient, ingredient, setIngredient } = props;
    
      /**here will be used to set the user entry as well 
       * for multiple verifications*/
      return (
        <form className="">
          <StyledFieldsetIngredients>
            <label>Add ingredient</label>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </StyledFieldsetIngredients>
          <StyledButtonContainerIngredients>
            <StyledButtonIngredients
              onClick={(e) => {
                e.preventDefault();
                if (!ingredient) return;
                addIngredient(ingredient);
                setIngredient("");
              }}
            >
              Add
            </StyledButtonIngredients>
          </StyledButtonContainerIngredients>
        </form>
      );
    };
    
    export default AddIngredient;
    `
    },
    {
    id: 208,
    name: ' AddIngredient -  State Allocation Main Component',
    code:   
    `
      const IngredientsComponentOptimizedThree = (props) => {

        const { initialIngredientstwo } = usePatternsAppContext();
        
        console.log("Ingredient rendered");
        /** const [ingredient, setIngredient] = useState(""); will be move down to 'AddIngredientOptimized'*/
        const [ingredients, setIngredients] = useState(initialIngredientstwo);
      
        const addIngredient = (ingredient) => {
          setIngredients((ingredients) => [
            ...ingredients,
            {
              name: ingredient,
              id: nanoid(),
            },
          ]);
        };
      
        /**useCallback will received two arguments, the function to memoized
         * and a dependency array*/
        const deleteIngredient = useCallback(
            (id) => {
                setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
              }
            ,[])
          
        const ingredientsText = useMemo(
            () => {
                console.log("createIngredientsHeaderText called");
                return <StyledHeading2Optimized>Ingredients ({ingredients.length})</StyledHeading2Optimized>;
              }
            , [ingredients.length]) 
      
        return (
          <StyledContainerOptimal>
            <div>
              {ingredientsText}
              <IngredientsInfoHelper />
            </div>
      
            <StyledSpaceY4Optimized>
              <IngredientsListOptimized
                ingredients={ingredients}
                deleteIngredient={deleteIngredient}
              />
      
              <AddIngredientOptimized
                addIngredient={addIngredient}
              />
            </StyledSpaceY4Optimized>
          </StyledContainerOptimal>
        );
      };
      
      export default IngredientsComponentOptimizedThree;
    `
    },
    {
    id: 209,
    name: ' AddIngredientOptimized -  State Allocation Sub Component',
    code:   
    `
      const AddIngredientOptimized = (props) => {
      console.log("AddIngredient rendered");

      const [ingredient, setIngredient] = useState("");
      const { addIngredient } = props;
    
      return (
        <form className="">
          <StyledFieldsetIngredients>
            <label>Add ingredient</label>
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
          </StyledFieldsetIngredients>
          <StyledButtonContainerIngredients>
            <StyledButtonIngredients
              onClick={(e) => {
                e.preventDefault();
                if (!ingredient) return;
                addIngredient(ingredient);
                setIngredient("");
              }}
            >
              Add
            </StyledButtonIngredients>
          </StyledButtonContainerIngredients>
        </form>
      );
    };
    
    export default AddIngredientOptimized;
    `
    },
    {
    id: 210,
    name: ' IngredientsInfoHelper -  memo',
    code:   
    `
      /** is like the previous implemention on 'IngredientsListOptimized'*/
      export default memo(IngredientsInfoHelper);
    `
    },
    {
      id: 211,
      name: ' IngredientsComponentOptimizedFour -  lifting up sub component',
      code:   
      `
      /**here will be pass the component as a prop - the prop name ingredientsInfoHelper - small i*/
      const IngredientsComponentOptimizedFour = ({ ingredientsInfoHelper }) => {

          const { initialIngredientstwo } = usePatternsAppContext();
          
          console.log("Ingredient rendered");

          const [ingredients, setIngredients] = useState(initialIngredientstwo);
        
          const addIngredient = (ingredient) => {
            setIngredients((ingredients) => [
              ...ingredients,
              {
                name: ingredient,
                id: nanoid(),
              },
            ]);
          };
        
          /**useCallback will received two arguments, the function to memoized
           * and a dependency array*/
          const deleteIngredient = useCallback(
              (id) => {
                  setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
                }
              ,[])
            
          const ingredientsText = useMemo(
              () => {
                  console.log("createIngredientsHeaderText called");
                  return <StyledHeading2Optimized>Ingredients ({ingredients.length})</StyledHeading2Optimized>;
                }
              , [ingredients.length]) 
        
          return (
            <StyledContainerOptimal>
              <div>
                {ingredientsText}
                {/**the previous placemment of the 
                 * IngredientsInfoHelper commponent, now is for the prop*/}
                {ingredientsInfoHelper}  
              </div>
        
              <StyledSpaceY4Optimized>
                <IngredientsListOptimized
                  ingredients={ingredients}
                  deleteIngredient={deleteIngredient}
                />
        
                <AddIngredientOptimized
                  addIngredient={addIngredient}
                />
              </StyledSpaceY4Optimized>
            </StyledContainerOptimal>
          );
        };
        
        export default IngredientsComponentOptimizedFour;
      `
      },
      {
      id: 212,
      name: ' IngredientsInfoHelper -  lifting up sub component',
      code:   
      `
        /** the IngredientsInfoHelper has to be previously imported at IngredientsComponentOptimizedFour render level*/
        <IngredientsComponentOptimizedFour ingredientsInfoHelper={IngredientsInfoHelper}/>
      `
      },
      {
      id: 213,
      name: 'useMousePosition -  throttling',
      code:   
      `
       /*this is the hook for calculate the mouse position in the component render**/
        export const useMousePosition = (options) => {

        const throttleTime = options?.throttleTime || 200;
        const [position, setPosition] = useState({
          x: 0,
          y: 0,
        });
      
        useEffect(() => {
          const onMouseMove = throttle((e) => {
            const { clientX: x, clientY: y } = e;
            setPosition({
              x,
              y,
            });
          }, throttleTime);
      
          window.addEventListener("mousemove", onMouseMove);
          return () => window.removeEventListener("mousemove", onMouseMove);
        }, []);
      
        return position;
      };
      `
      },
      {
      id: 214,
      name: 'TrackMouse -  throttling',
      code:   
      `
        const TrackMouse = (props) => {
        const position = useMousePosition();
      
        return (
            <div>
              Last mouse position - x: {position.x}, y: {position.y}
            </div>
          );
        };
        
        export default TrackMouse;
      `
      },
      {
      id: 215,
      name: 'TrackMouseNotOptimal -  throttling',
      code:   
      `
      /*the components basiclly is the same except now is 
       * using the not throttling hook**/        
      const TrackMouseNotOptimal = (props) => {
        const position = useMousePositionNotThrottling();
      
        return (
          <TrackMouseWrapper>
              Last mouse position - <span> x: {position.x}, y: {position.y} </span>
          </TrackMouseWrapper>
        );
      };
      
      export default TrackMouseNotOptimal;
      `
      },
      {
      id: 216,
      name: 'useMousePositionNotThrottling -  throttling',
      code:   
      `
      export const useMousePositionNotThrottling = () => {
      /**there is no throttling time intervals*/  
      const [position, setPosition] = useState({
        x: 0,
        y: 0,
      });
    
      /**is rendering the mouse position once mounts the component
       *  without any flags and times*/
      useEffect(() => {
        const onMouseMove = (e) => {
          const { clientX: x, clientY: y } = e;
          setPosition({
            x,
            y,
          });
        };
    
        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
      }, []);
    
      return position;
    };
      `
      },
      {
      id: 217,
      name: 'Search -  Debouncing',
      code:   
      `
       const Search = () => {

        const [query, setQuery] = useState("");
        const [meals, setMeals] = useState([]);
      
        const initSearchApiRequest = useMemo(() => {
          return async (q) => {
            setMeals(await searchMeals(q));
          };
        }, []);
      
        const onChangeQuery = (e) => {
          const q = e.target.value;
          setQuery(q);
          initSearchApiRequest(q);
        };
      
        return (
          <div>
            <form>
              <label>Search meals</label>
              <input type="text" value={query} onChange={onChangeQuery} />
            </form>
            <ul>
              {meals?.map((meal) => {
                return <li key={meal.idMeal}>{meal.strMeal}</li>;
              })}
            </ul>
          </div>
        );
      };
      
      export default Search;
      `
      },
      {
      id: 218,
      name: 'debounce -  Debouncing - utils',
      code:   
      `
      export const debounce = (fn, delay) => {

      let timerId;
    
      return (...args) => {
        if (timerId) {
          clearTimeout(timerId);
        }
    
        timerId = setTimeout(() => fn(...args), delay);
      };
    };
      `
      },
      {
      id: 219,
      name: 'SearchDebounce -  Debouncing implementation',
      code:   
      `
      const SearchDebounce = () => {

        const [query, setQuery] = useState("");
        const [meals, setMeals] = useState([]);
      
        const initSearchApiRequest = useMemo(() => {
          return debounce(async (q) => {
            setMeals(await searchMeals(q));
          }, 500);
        }, []);
      
        const onChangeQuery = (e) => {
          const q = e.target.value;
          setQuery(q);
          initSearchApiRequest(q);
        };
      
        return (
          <SearchContainer>
            <SearchForm>
              <SearchLabel>Search meals</SearchLabel>
              <SearchInput type="text" value={query} onChange={onChangeQuery} placeholder="Type a meal here"/>
            </SearchForm>
            <SearchResults>
              {meals?.map((meal) => {
                return <SearchItem key={meal.idMeal}>{meal.strMeal}</SearchItem>;
              })}
            </SearchResults>
          </SearchContainer>
        );
      };
      
      export default SearchDebounce;
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

/**List boardData data  -- start */
export const boardData = {
  name: "Developers",
  columns: [
    {
      name: "Backlog",
      tasks: [
        {
          name: "Update dependencies",
        },
        {
          name: "Add review feature",
        },
      ],
    },
    {
      name: "Todo",
      tasks: [
        {
          name: "Fix modal transition",
        },
      ],
    },
    {
      name: "In progress",
      tasks: [
        {
          name: "Create task board",
        },
      ],
    },
    {
      name: "Complete",
      tasks: [],
    },
  ],
};
/**List boardData data  -- end */