
//Simple root objects
/**True if the user is logged in as a guest */
declare const guest:boolean
/**Server details */
declare const server:string
/**Used to pass a model from the control script to the view renderer (template). Web scripts only. */
declare const model:Array<string>

//Root objects that expose ScriptNode objects
/** The company home ScriptNode. See ScriptNode API for properties and methods. */
declare const companyhome:cmFolder
/**The ScriptNode representing the Person object of the currently authenticated user. See ScriptNode API for properties and methods. */
declare const person :cmPerson
/**The store root ScriptNode. The repository root folder. See ScriptNode API for properties and methods. */
declare const roothome:cmFolder
/** The ScriptNode representing the script object itself. This is only available if the script is loaded from the Java classpath.*/
declare const script:cmCmobject
/**The primary parent ScriptNode for the current node (ScriptNode). For a script executing from a rule, the space object is the space in which the rule resides. If the rule is inherited, this might not be the expected space. */
declare const space:ScriptNode
/**The current user's Home Space ScriptNode. See ScriptNode API for properties and methods. */
declare const userhome:cmFolder
/**The current node ScriptNode (if any) */
//declare const document:ScriptNode //document

//Root objects also available in web scripts
/** List of arguments passed to the script*/
declare const args:Array<string>
/** List of arguments passed to the script*/
declare const argsM:Array<string>
/**Object containing cache information */
declare const cache:{}
/**List of headers passed to the script */
declare const headers:Array<string>
/**List of headers passed to the script */
declare const headersM:Array<string>
/**Object containing session information for the user connection */
declare const session:{}
/**Object containing information about the URL used to invoke web script */
declare const url:{}
/**Root object providing access to console logging facilities for script debugging */
interface logger{
    log(params:string):string
}

// workflow
/**The description for this in‐flight workflow. */
declare const bpm_workflowDescription:string //not sure
/** the due date for the workflow.*/
declare const bpm_workflowDueDate:Date
/**The priority for the workflow. */
declare const bpm_workflowPriority:number
/**A Repository Node with aspect bpm:workflowPackage representing the Workflow package containing content being routed through the workflow. */
declare const bpm_package:cmFolder//Not sure
/**A Repository Node of type cm:folder representing the Alfresco folder in which the workflow was started. */
declare const bpm_context:cmFolder
/**A Repository Node of type cm:person representing the person who initiated the workflow.  */
declare const initiator:cmPerson
/** A Repository Node of type cm:space representing the home folder of the person who initiated the workflow.*/
declare const initiatorhome:cmFolder//FIXME: cm:space

//work in progress





