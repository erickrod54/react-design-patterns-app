
import AdvancedHooks from "./advanced.hooks.component";
import AlertPortalEventCapture from "./alert.capture.event.portal.component";
import AlertMessageWithEventCapture from "./alert.message.capture.event.portal.component";
import AlertMessage from "./alert.message.component";
import AlertMessageWithEventListener from "./alert.message.event.listener.portal.component";
import AlertMessageWithPortal from "./alert.message.portal.component";
import AlertPortal from "./alert.portal.component";
import BashCode from "./bash.higlight.component";
import Card from "./card.component";
import CardCompound from "./card.compound.pattern.component";
import { GreenButton, RedButton } from "./composition.pattern.component";
import ContainerPattern from "./container.component";
import ContainerDataSource from "./container.data.source.component";
import ContainerGeneric from "./container.generic.component";
import ContainerLoader from "./container.loader.component";
import ContainerRender from "./container.render.pattern.component";
import ControlledFlowPatternCollector from "./controlled.flow.collector.pattern";
import ControlledPattern from "./controlled.pattern.component";
import ControlledUnControlledPattern from "./controlled.uncontrolled.pattern.component";
import CurrentUser from "./current.user.component";
import useUser from "./custom.hook.generic.pattern.current.user";
import CustomHookPattern from "./custom.hooks.pattern";
import CustomTitle from "./custom.title.component";
import ChildComponent from "./error.boundaries.child.component";
import ErrorBoundaries from "./error.boundaries.component";
import MasterComponent from "./error.boundaries.parent.component";
import ForwardingRefForm from "./forwarding.ref.form.component";
import { ForwardingImperativeFocusRefInput } from "./forwarding.ref.imperative.focus.input.component";
import { ForwardingImperativeRefInput } from "./forwarding.ref.imperative.input.component";
import { ForwardingImperativeMultipleFocus } from "./forwarding.ref.imperative.multiple.input.component";
import { ForwardingImperativeRefState } from "./forwarding.ref.imperative.state.component";
import { ForwardingRefInput } from "./forwarding.ref.input.component";
import ForwardingRefs from "./forwarding.refs.component";
import ForwardingHookRefForm from "./forwarding.useforwardref.form.component";
import FunctionalProgramming from "./functional.programming.component";
import HeavyComponentBefore from "./heavy.deferred.before.component";
import HOCPattern from "./hoc.pattern.component";
import IntroComponent from "./intro.component";
import Counter from "./keys.counter.component";
import KeysExercise from "./keys.exersice.component";
import LayoutComponentPattern from "./layout.pattern.component";
import MessageLocalStorage from "./message.local.storage.component";
import ControlledModal from "./modal.controlled.component";
import ParentComponent from "./parent.observer.pattern.component";
import { Secondary, SmallWarning, WarningButton } from "./partial.composition.pattern";
import PortalsAdvHooks from "./portals.advanced.hooks";

import RecursivePattern from "./recursive.pattern.component";
import RegularList from "./regular.list.component";
import SharedLayout from "./shared.layout.component";
import SplitScreen from "./split.screen.component";
import SplitScreenVariation from "./split.screen.variation.component";
import TheOutSideControlled from "./theoutside.controlled.component";
import TopUseEffect from "./top.use.effect.component";
import TopUseLayoutEffect from "./top.uselayouteffect.component";
import UncontrolledFlowPatternCollector from "./uncontrolled.flow.collector.pattern";
import UncontrolledFlowPattern from "./uncontrolled.flow.pattern";
import UncontrolledPattern from "./uncontrolled.pattern.component";
import UseDeferredBeforeValueHookPattern from "./use.deferred.value.hook.before.component";
import UseImperativeHookPattern from "./use.imperative.hook.before.component";
import UseWithImperativeFocusHookPattern from "./use.imperative.hook.focus.after.component";
import UseImperativeFocusHookPattern from "./use.imperative.hook.focus.before.component";
import UseWithImperativeFocusMethodHookPattern from "./use.imperative.hook.focus.method.component";
import UseImperativeMultipleFocus from "./use.imperative.hook.focus.multiple.component";
import UseWithImperativeFocusStatePattern from "./use.imperative.hook.focus.state.component";
import CallbackAsRefAfter from "./usecallback.as.a.ref.after.component";
import CallbackAsRefBefore from "./usecallback.as.a.ref.before.component";
import CallbackAsRefCommentedBefore from "./usecallback.as.a.ref.commented.before.component";
import UseIdAfterForm from "./useid.form.after.component";
import UseIdAfterMathForm from "./useid.form.after.math.component";
import UseIdBeforeForm from "./useid.form.before.component";
import UseIdMultipleFormAfter from "./useid.multiple.forms.after.component";
import UseIdMultipleFormBefore from "./useid.multiple.forms.component";
import UseIdAfterCleanMultipleInputs from "./useid.multiple.inputs.after.clean.component";
import UseIdAfterMultipleInputs from "./useid.multiple.inputs.after.component";
import UseIdCleanAfterTwoOrMoreInputs from "./useid.two.or.more.clean.code.inputs.after.component";
import UseIdAfterTwoOrMoreInputs from "./useid.two.or.more.inputs.after.component";
import UserInfo from "./user.info.component";
import UserInfoDataSource from "./user.info.hook.dsource.component";
import WithoutKeysExercise from "./withoutkeys.exersice.component";
import WithtKeysExercise from "./withtkeys.exersice.component";

/**react-design-patterns-app - version 14.12 - components > index  
 * - Features: 
 * 
 *     --> Importing and exporting 'UseDeferredBeforeValueHookPattern'
 * 
 * Note: Pending to make responsive design
 */

export { 
        LayoutComponentPattern,
         SharedLayout,
         CustomTitle,
         IntroComponent,
         SplitScreen,
         SplitScreenVariation,
         BashCode,
         RegularList,
         ContainerPattern,
         CurrentUser,
         UserInfo, 
         ContainerLoader,
         ContainerGeneric,
         ContainerDataSource,
         ContainerRender,
         MessageLocalStorage,
         ControlledUnControlledPattern,
         UncontrolledPattern,
         ControlledPattern,
         ControlledModal,
         UncontrolledFlowPattern,
         UncontrolledFlowPatternCollector,
         ControlledFlowPatternCollector,
         HOCPattern,
         CustomHookPattern,
         useUser,
         UserInfoDataSource,
         FunctionalProgramming,
         RecursivePattern,
         RedButton,
         GreenButton,
         WarningButton,
         SmallWarning,
         Secondary,
         Card,
         CardCompound,
         ParentComponent,
         PortalsAdvHooks,
         AlertMessage,
         TheOutSideControlled,
         AlertPortal,
         AlertMessageWithPortal,
         ForwardingRefs,
         ForwardingRefForm,
         ErrorBoundaries,
         ForwardingHookRefForm,
         ChildComponent,
         MasterComponent,
         AdvancedHooks,
         Counter,
         KeysExercise,
         WithoutKeysExercise,
         WithtKeysExercise,
         AlertMessageWithEventListener,
         AlertMessageWithEventCapture,
         AlertPortalEventCapture,
         TopUseEffect,
         TopUseLayoutEffect,
         UseIdBeforeForm,
         UseIdMultipleFormBefore,
         UseIdAfterMathForm,
         UseIdAfterForm,
         UseIdMultipleFormAfter,
         UseIdAfterTwoOrMoreInputs,
         UseIdAfterMultipleInputs,
         UseIdCleanAfterTwoOrMoreInputs,
         UseIdAfterCleanMultipleInputs,
         CallbackAsRefBefore,
         CallbackAsRefCommentedBefore,
         CallbackAsRefAfter,
         ForwardingRefInput,
         UseImperativeHookPattern,
         UseImperativeFocusHookPattern,
         ForwardingImperativeRefInput,
         UseWithImperativeFocusHookPattern,
         ForwardingImperativeFocusRefInput,
         UseWithImperativeFocusMethodHookPattern,
         ForwardingImperativeMultipleFocus,
         UseImperativeMultipleFocus,
         ForwardingImperativeRefState,
         UseWithImperativeFocusStatePattern,
         HeavyComponentBefore,
         UseDeferredBeforeValueHookPattern
        }
