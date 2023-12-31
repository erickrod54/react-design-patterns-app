import { layoutexamples, sidebarexample } from "./assets/index.assets"

/**react-design-patterns-app - version 3.16 - data js  
 * - Features: 
 *    
 *     --> Adding 'CurrentUse' code for CodeData
 * 
 * Note: This component will have later the main menu
 * to each pattern and its explanations and use cases
 */

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