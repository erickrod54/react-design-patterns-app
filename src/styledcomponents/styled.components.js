import styled from "styled-components";
/**this is the tw macro import */
import tw from 'twin.macro';

/**react-design-patterns-app - version 17.18 - styled.components
 * - Features: 
 * 
 *     --> Writing 'SingleButtonWrapper' styles.	
 * 
 * Note: the macro 'tw' in order to work and use has to be installed
 * there is around 4 or 5 libraries and this is oen of the most active
 * and recent
 * 
 *          https://www.npmjs.com/package/twin.macro
 * 
 * i have to create a root access custom color palette in order 
 * to use them in the custom titles
 */

export const SingleButtonWrapper = styled.button`
  ${tw`bg-white min-w-50 min-h-50 text-center p-3 border border-solid border-gray-300 shadow cursor-pointer`}
`; 

export const ButtonsOptContextStyle = styled.span`
  ${tw`text-center mt-14`}
`;

export const Emoji = styled.span`
  	${tw`text-5xl flex`}
`;

export const CoverContainer = styled.div`
  ${tw`flex items-center justify-center h-full text-3xl`}
`;

export const ButtonUseTransition = styled.button`
  ${tw`bg-gray-200 border border-gray-300 px-6 py-4 mx-5 cursor-pointer rounded-lg text-base transition duration-300 ease-in-out`}
  
  &:hover {
	  ${tw`bg-gray-400`}
  }

  &:focus {
    ${tw`outline-none border-blue-500`}
  }
`;

export const ReviewsContainer = styled.div`
 ${tw`flex justify-center items-center`}
  
 ul {
    ${tw`list-none p-0`}
  }

  li {
    ${tw`border-b border-gray-300 py-2 px-4 text-2xl text-gray-800 `}
  }
`;

export const WriterContainer = styled.div`
	${tw`text-4xl font-bold text-gray-700 text-center my-5 flex justify-center items-center`}
`;

export const MasterWrapper = styled.div`
	${tw`border border-white`}
`

export const BooksUseTransitionContainer = styled.div`
	${tw`flex flex-col text-black bg-violet-500 m-4 p-4 rounded-2xl h-fit w-fit`}

	div{
		${tw`flex flex-row m-4 p-4`}
	}

	button{
		${tw`text-2xl`}
	}
	
`

export const ChildWrapper = styled.div`
	${tw`border border-white`}
`

export const OpenModalWrapper = styled.div`
	${tw`hover:bg-sky-500`}
    
	img{
        ${tw`h-6 rounded-full `}
    }
`;

export const ToolTipWrapper = styled.div`
	top: ${(top) => top};
	
	${tw`absolute border-2 border-black m-4 p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white text-2xl rounded-xl cursor-pointer`}
	
	.text-color{
		${tw`text-4xl bg-gradient-to-r from-amber-700 to-red-800 text-transparent bg-clip-text`}
	}

`
export const ModalContent = styled.div`
    ${tw`p-6 bg-white w-1/2 text-black `}

	.alert{
		${tw`text-blue-500`}
	}

	.dissapear{
		${tw`bg-gradient-to-r from-emerald-500 to-emerald-900 text-transparent bg-clip-text`}
	}

	.portal-end{
		${tw`font-extrabold	text-lg bg-gradient-to-r from-rose-600 to-emerald-900 text-transparent bg-clip-text`}
	}
`;

export const ModalBackground = styled.div`
    ${tw`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center `}
`;

export const ButtonGeneral = styled.div`
	input,
	button{
		${tw`flex justify-center items-center bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer`}
	}
`

export const PrimaryButton = styled(ButtonGeneral)`
	input,
	button{
		${tw`flex justify-center items-center bg-violet-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer`}
	}
`

export const KeyExerciseWrapper = styled.div`
	${tw`flex flex-col m-4 p-4 justify-center items-center text-white text-2xl `}
`


export const FormWrapper = styled.div`
	${tw`bg-violet-500 m-4 p-4 rounded-2xl`}

	input{
		${tw`flex justify-center items-center m-4 p-4 rounded text-black border-4 border-amber-600`}
	}

	button{
		${tw`m-4 p-4`}
	}

	label{
		${tw`text-2xl cursor-pointer font-bold text-black`}
	}

`

export const FormWrapperDeferred = styled(FormWrapper)`
	${tw`bg-violet-500 m-4 p-4 rounded-2xl h-fit w-fit`}

`

export const HeavyComponentWrapper = styled.div`
	h2{
		${tw`text-2xl text-black italic leading-tight border-l-4 bg-yellow-400 pl-2 py-1 m-2 p-2 rounded-xl`}
	}
	
	span{
		${tw`text-4xl text-pink-600`}
	}

	p{
		${tw`text-4xl text-violet-600 italic leading-tight border-l-4 bg-rose-400 pl-2 py-1 m-2 p-2 rounded-xl h-12 w-fit`}
	}
`

export const MultipleFormWrapper = styled.div`
	${tw`bg-slate-400 m-4 p-4 text-black text-xl `}
`

export const AlertWrapper = styled.div`
		${tw`left-2/4 translate-y-2/4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded p-2.5 cursor-pointer`}
`

export const ButtonWrapper = styled.div`
		${tw`flex flex-row align-top`}

		.number-center{
			${tw`justify-center items-center mr-4 ml-4 mt-2 text-6xl`}
		}

		button{
			${tw`m-4 p-4`}
		}
`

export const StepFlowWrapper = styled.div`
	${tw`flex flex-col justify-center items-center border-4 border-white text-blue-500 text-2xl m-4 p-4 `}

	h2{
		${tw`mt-4 `}
	}

	button{
		${tw`m-4 p-4 `}
	}
`

export const ListWrapper = styled.div`

		${tw`flex flex-col mt-24 m-48 `}

		.author-name,
		.book-name{
			border-radius: 0.50rem;
			padding: 1rem;
			background-color: white;
		}

		.author-name{
			span{
					${tw`text-rose-600`}
				}
		}

		.book-name{
			span{
				${tw`text-fuchsia-700`}
			}
		}

		h2{
			${tw`w-36`}
		}

		span{
			${tw`text-stone-100`}
		}
`

export const SectionWrapper = styled.section`
    ${tw`m-12 p-12 mt-12 first-letter:capitalize text-lg`}

    ul{
        ${tw`m-4 p-4 list-decimal`} 
    }

    img{
        ${tw`mt-10 w-auto h-auto`}
    }

    p{
        ${tw`mt-6 mb-8 first-letter:capitalize`}
    }

	a{
		${tw`text-blue-200`}

	}
	
	a:hover{
		${tw`text-blue-400`}
	}

	.list-white-space{
		li{
			${tw`mt-4 `}
		}
	}

    `

export const CustomTitleStyle = styled.div`

&{
    ${tw`flex justify-center items-center`}
}

.sub-title{
	${tw`text-blue-200 underline first-letter:capitalize text-2xl`}
}

.split-screen{
    color:orange;
    text-decoration-line: underline;
}

.layout{
    color:yellow;
    text-decoration-line: underline;
}

.list-pattern{
	span{
			${tw`text-amber-100 underline`}
		}	
}

.container-pattern{
	span{
			${tw`text-amber-300 underline`}
		}
}

.custom-hook-pattern{
	span{
			${tw`text-amber-400 underline`}
		}
}

.container-render-pattern{
		span{
			${tw`text-fuchsia-500 underline`}
		}
}

.container-data-source{
		span{
			${tw`text-orange-400 underline`}
		}
}

.container-local-storage{
	span{
			${tw`text-teal-300`}
		}
}

.controlled-uncontrolled-pattern{
	span{
			${tw`text-blue-300 underline`}
		}
}

 .advanced-hooks-portals{
	span{
			${tw`text-blue-500 underline`}
		}
 }

 .advanced-hooks-portals-cases{
	span{
			${tw`text-blue-400 underline`}
		}
 }

 .forwarding-refs{
	span{
			${tw`text-amber-400 underline`}
		}
 }

 .error-boundaries{
	span{
			${tw`text-red-400 underline`}
		}
 }

 .advanced-hooks-patterns{
	span{
			${tw`text-violet-400 underline`}
		}
 }

 .advanced-hooks-keys{
	span{
			${tw`text-violet-300 underline`}
		}
 }

.event-listeners-hooks{
	span{
			${tw`text-violet-200 underline`}
		}
}

.use-layout-pattern{
	span{
			${tw`text-violet-300 underline`}
		}
}

.useId-hook-pattern{
	span{
			${tw`text-amber-50 underline`}
		}
}

.use-callback-hook-as-refs{
	span{
			${tw`text-amber-200 underline`}
		}
}

.use-imperative-handle-hook{
	span{
			${tw`text-amber-300 underline`}
		}
}

.use-deferred-value-hook-pattern{
	span{
			${tw`text-red-400 underline`}
		}
}

.use-transition-hook-pattern{
	span{
			${tw`text-orange-300 underline`}
		}
}

.async-react-router-pattern{
	span{
			${tw`text-red-500 underline`}
		}
}

.clean-code-tips{
	span{
			${tw`text-cyan-300 underline`}
		}
}

.as-prop-clean-code-tip{
	span{
			${tw`text-violet-300 underline`}
		}
}

.context-api-optimization{
	span{
			${tw`text-sky-500 underline`}
		}
}

`

export const Container = styled.div`
    &{
        ${tw`flex border-4 border-white`}
    }
`

export const Panel = styled.div`
        flex: ${(p) => p.flex};

        &{
            ${tw`m-8 p-8`}
        }
`

export const ControlledStyled = styled.div`
	&{
		${tw`flex border-4 border-white m-5 p-5`}
	}
`

export const AtomOneLight = styled.div`

code[class*="language-"],
pre[class*="language-"] {
	background: hsl(230, 1%, 98%);
	color: hsl(230, 8%, 24%);
	font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;
	-moz-tab-size: 2;
	-o-tab-size: 2;
	tab-size: 2;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Selection */
code[class*="language-"]::-moz-selection,
code[class*="language-"] *::-moz-selection,
pre[class*="language-"] *::-moz-selection {
	background: hsl(230, 1%, 90%);
	color: inherit;
}

code[class*="language-"]::selection,
code[class*="language-"] *::selection,
pre[class*="language-"] *::selection {
	background: hsl(230, 1%, 90%);
	color: inherit;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: 0.5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: 0.2em 0.3em;
	border-radius: 0.3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.cdata {
	color: hsl(230, 4%, 64%);
}

.token.doctype,
.token.punctuation,
.token.entity {
	color: hsl(230, 8%, 24%);
}

.token.attr-name,
.token.class-name,
.token.boolean,
.token.constant,
.token.number,
.token.atrule {
	color: hsl(35, 99%, 36%);
}

.token.keyword {
	color: hsl(301, 63%, 40%);
}

.token.property,
.token.tag,
.token.symbol,
.token.deleted,
.token.important {
	color: hsl(5, 74%, 59%);
}

.token.selector,
.token.string,
.token.char,
.token.builtin,
.token.inserted,
.token.regex,
.token.attr-value,
.token.attr-value > .token.punctuation {
	color: hsl(119, 34%, 47%);
}

.token.variable,
.token.operator,
.token.function {
	color: hsl(221, 87%, 60%);
}

.token.url {
	color: hsl(198, 99%, 37%);
}

/* HTML overrides */
.token.attr-value > .token.punctuation.attr-equals,
.token.special-attr > .token.attr-value > .token.value.css {
	color: hsl(230, 8%, 24%);
}

/* CSS overrides */
.language-css .token.selector {
	color: hsl(5, 74%, 59%);
}

.language-css .token.property {
	color: hsl(230, 8%, 24%);
}

.language-css .token.function,
.language-css .token.url > .token.function {
	color: hsl(198, 99%, 37%);
}

.language-css .token.url > .token.string.url {
	color: hsl(119, 34%, 47%);
}

.language-css .token.important,
.language-css .token.atrule .token.rule {
	color: hsl(301, 63%, 40%);
}

/* JS overrides */
.language-javascript .token.operator {
	color: hsl(301, 63%, 40%);
}

.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation {
	color: hsl(344, 84%, 43%);
}

/* JSON overrides */
.language-json .token.operator {
	color: hsl(230, 8%, 24%);
}

.language-json .token.null.keyword {
	color: hsl(35, 99%, 36%);
}

/* MD overrides */
.language-markdown .token.url,
.language-markdown .token.url > .token.operator,
.language-markdown .token.url-reference.url > .token.string {
	color: hsl(230, 8%, 24%);
}

.language-markdown .token.url > .token.content {
	color: hsl(221, 87%, 60%);
}

.language-markdown .token.url > .token.url,
.language-markdown .token.url-reference.url {
	color: hsl(198, 99%, 37%);
}

.language-markdown .token.blockquote.punctuation,
.language-markdown .token.hr.punctuation {
	color: hsl(230, 4%, 64%);
	font-style: italic;
}

.language-markdown .token.code-snippet {
	color: hsl(119, 34%, 47%);
}

.language-markdown .token.bold .token.content {
	color: hsl(35, 99%, 36%);
}

.language-markdown .token.italic .token.content {
	color: hsl(301, 63%, 40%);
}

.language-markdown .token.strike .token.content,
.language-markdown .token.strike .token.punctuation,
.language-markdown .token.list.punctuation,
.language-markdown .token.title.important > .token.punctuation {
	color: hsl(5, 74%, 59%);
}

/* General */
.token.bold {
	font-weight: bold;
}

.token.comment,
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.namespace {
	opacity: 0.8;
}

/* Plugin overrides */
/* Selectors should have higher specificity than those in the plugins' default stylesheets */

/* Show Invisibles plugin overrides */
.token.token.tab:not(:empty):before,
.token.token.cr:before,
.token.token.lf:before,
.token.token.space:before {
	color: hsla(230, 8%, 24%, 0.2);
}

/* Toolbar plugin overrides */
/* Space out all buttons and move them away from the right edge of the code block */
div.code-toolbar > .toolbar.toolbar > .toolbar-item {
	margin-right: 0.4em;
}

/* Styling the buttons */
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
	background: hsl(230, 1%, 90%);
	color: hsl(230, 6%, 44%);
	padding: 0.1em 0.4em;
	border-radius: 0.3em;
}

div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
	background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
	color: hsl(230, 8%, 24%);
}

/* Line Highlight plugin overrides */
/* The highlighted line itself */
.line-highlight.line-highlight {
	background: hsla(230, 8%, 24%, 0.05);
}

/* Default line numbers in Line Highlight plugin */
.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
	background: hsl(230, 1%, 90%);
	color: hsl(230, 8%, 24%);
	padding: 0.1em 0.6em;
	border-radius: 0.3em;
	box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */
}

/* Hovering over a linkable line number (in the gutter area) */
/* Requires Line Numbers plugin as well */
pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before {
	background-color: hsla(230, 8%, 24%, 0.05);
}

/* Line Numbers and Command Line plugins overrides */
/* Line separating gutter from coding area */
.line-numbers.line-numbers .line-numbers-rows,
.command-line .command-line-prompt {
	border-right-color: hsla(230, 8%, 24%, 0.2);
}

/* Stuff in the gutter */
.line-numbers .line-numbers-rows > span:before,
.command-line .command-line-prompt > span:before {
	color: hsl(230, 1%, 62%);
}

/* Match Braces plugin overrides */
/* Note: Outline colour is inherited from the braces */
.rainbow-braces .token.token.punctuation.brace-level-1,
.rainbow-braces .token.token.punctuation.brace-level-5,
.rainbow-braces .token.token.punctuation.brace-level-9 {
	color: hsl(5, 74%, 59%);
}

.rainbow-braces .token.token.punctuation.brace-level-2,
.rainbow-braces .token.token.punctuation.brace-level-6,
.rainbow-braces .token.token.punctuation.brace-level-10 {
	color: hsl(119, 34%, 47%);
}

.rainbow-braces .token.token.punctuation.brace-level-3,
.rainbow-braces .token.token.punctuation.brace-level-7,
.rainbow-braces .token.token.punctuation.brace-level-11 {
	color: hsl(221, 87%, 60%);
}

.rainbow-braces .token.token.punctuation.brace-level-4,
.rainbow-braces .token.token.punctuation.brace-level-8,
.rainbow-braces .token.token.punctuation.brace-level-12 {
	color: hsl(301, 63%, 40%);
}

/* Diff Highlight plugin overrides */
/* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
pre.diff-highlight > code .token.token.deleted:not(.prefix),
pre > code.diff-highlight .token.token.deleted:not(.prefix) {
	background-color: hsla(353, 100%, 66%, 0.15);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection {
	background-color: hsla(353, 95%, 66%, 0.25);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
	background-color: hsla(353, 95%, 66%, 0.25);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix),
pre > code.diff-highlight .token.token.inserted:not(.prefix) {
	background-color: hsla(137, 100%, 55%, 0.15);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection {
	background-color: hsla(135, 73%, 55%, 0.25);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
	background-color: hsla(135, 73%, 55%, 0.25);
}

/* Previewers plugin overrides */
/* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
/* Border around popup */
.prism-previewer.prism-previewer:before,
.prism-previewer-gradient.prism-previewer-gradient div {
	border-color: hsl(0, 0, 95%);
}

/* Angle and time should remain as circles and are hence not included */
.prism-previewer-color.prism-previewer-color:before,
.prism-previewer-gradient.prism-previewer-gradient div,
.prism-previewer-easing.prism-previewer-easing:before {
	border-radius: 0.3em;
}

/* Triangles pointing to the code */
.prism-previewer.prism-previewer:after {
	border-top-color: hsl(0, 0, 95%);
}

.prism-previewer-flipped.prism-previewer-flipped.after {
	border-bottom-color: hsl(0, 0, 95%);
}

/* Background colour within the popup */
.prism-previewer-angle.prism-previewer-angle:before,
.prism-previewer-time.prism-previewer-time:before,
.prism-previewer-easing.prism-previewer-easing {
	background: hsl(0, 0%, 100%);
}

/* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
/* For time, this is the alternate colour */
.prism-previewer-angle.prism-previewer-angle circle,
.prism-previewer-time.prism-previewer-time circle {
	stroke: hsl(230, 8%, 24%);
	stroke-opacity: 1;
}

/* Stroke colours of the handle, direction point, and vector itself */
.prism-previewer-easing.prism-previewer-easing circle,
.prism-previewer-easing.prism-previewer-easing path,
.prism-previewer-easing.prism-previewer-easing line {
	stroke: hsl(230, 8%, 24%);
}

/* Fill colour of the handle */
.prism-previewer-easing.prism-previewer-easing circle {
	fill: transparent;
}
`